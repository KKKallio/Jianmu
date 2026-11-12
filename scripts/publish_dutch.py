#!/usr/bin/env python3
"""Generate one interactive Dutch lesson per Amsterdam day.

Requires OPENAI_API_KEY as a GitHub Actions repository secret.
No API key is ever written into the generated public HTML.
"""
import datetime as dt
import html
import json
import os
from pathlib import Path
import re
import urllib.request
from zoneinfo import ZoneInfo

ROOT = Path("languages/dutch")
LESSONS = ROOT / "lessons"
TIMEZONE = ZoneInfo("Europe/Amsterdam")
NOW = dt.datetime.now(TIMEZONE)
TODAY = NOW.date().isoformat()

# GitHub Actions fires at both UTC hours to cover CET/CEST; only publish at 07:00.
if os.getenv("GITHUB_EVENT_NAME") == "schedule" and NOW.hour != 7:
    print("Outside 07:00 Amsterdam; skipping.")
    raise SystemExit(0)

key = os.getenv("OPENAI_API_KEY")
if not key:
    raise SystemExit("Missing OPENAI_API_KEY GitHub Actions secret.")

LESSONS.mkdir(parents=True, exist_ok=True)
existing = sorted(int(m.group(1)) for p in LESSONS.glob("day-*.html")
                  if (m := re.fullmatch(r"day-(\d+)\.html", p.name)))
number = (max(existing) if existing else 0) + 1
target = LESSONS / f"day-{number:02d}.html"
date_marker = f"<!-- generated-date: {TODAY} -->"
if any(date_marker in p.read_text(encoding="utf-8") for p in LESSONS.glob("day-*.html")):
    print(f"Lesson already generated for {TODAY}; skipping.")
    raise SystemExit(0)

# Focus on the A2 and KNM deadlines first, then progress toward NT2 B2.
if NOW.date() < dt.date(2027, 4, 1):
    level = "A1+ to A2, civic integration exam and KNM priority"
elif NOW.date() < dt.date(2027, 8, 1):
    level = "B1, with bridge exercises toward NT2 Programma II"
else:
    level = "B1 to B2, NT2 Staatsexamen Programma II priority"

previous = ("Day 1: kennismaken, afspreken, modal verbs; "
            "Day 2: boodschappen doen, plural nouns, geen/niet, statiegeld")
prompt = f"""Create Day {number} of a progressive Dutch course for a Chinese-speaking learner.
Current level/stage: {level}. Date: {TODAY}. Previous lessons: {previous}.
Choose a fresh practical topic (avoid repeating previous topics); gradually increase difficulty.
Output ONLY valid JSON with these fields:
title (Dutch), topic_zh (Chinese), minutes (integer 80-120),
vocabulary (array of 20-25 objects with nl, en; nouns MUST include de/het;
verbs MUST show infinitive; simple past; past participle using '; ' separators, NEVER dashes),
grammar (array of 2-3 objects with heading, explanation_zh, examples [Dutch sentences]),
listening (object with title, transcript [speaker-labelled Dutch lines], questions [objects
with q, options [3 Dutch choices], answer integer index, explanation_zh]),
speaking (object with instruction_zh, prompts [Dutch questions], model Dutch paragraph),
reading (object with title, text Dutch paragraph, questions same structure as listening),
writing (object with instruction_zh, model Dutch 40-70 word answer, rubric_zh),
knm (object with heading, explanation_zh, question same question structure),
review (array of 4-6 objects with q in Chinese or Dutch, answer Dutch, explanation_zh),
external_listening (object with link_url, link_label, note_zh).
All explanations in Chinese, all practice in Dutch.
Original listening transcript must be complete, 10-16 lines, and listening questions must immediately follow it.
Writing model must be hidden until clicked.
Include previous-day review plus spaced review.
Use only known, reliable external learning platform homepage URLs (e.g. https://www.nedbox.be/)
rather than inventing specific audio links; explain that external audio is independent of the original transcript.
Do not claim to embed or transcribe third-party audio.
Distinguish A2 civic integration from NT2 Programma II in rubric or explanation.
Make content specific, educational and factually careful. Return JSON only."""
payload = json.dumps({
    "model": os.getenv("OPENAI_MODEL", "gpt-4.1-mini"),
    "messages": [
        {"role": "system", "content": "You are an expert Dutch NT2 teacher. Respond with valid JSON only."},
        {"role": "user", "content": prompt}
    ],
    "response_format": {"type": "json_object"},
    "temperature": 0.6
}).encode("utf-8")
req = urllib.request.Request(
    "https://api.openai.com/v1/chat/completions", data=payload,
    headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
    method="POST")
with urllib.request.urlopen(req, timeout=120) as response:
    data = json.load(response)
lesson = json.loads(data["choices"][0]["message"]["content"])
required = ["title", "topic_zh", "vocabulary", "grammar", "listening",
            "speaking", "reading", "writing", "knm", "review"]
missing = [field for field in required if field not in lesson]
if missing:
    raise ValueError(f"Missing lesson fields: {missing}")
if not lesson["vocabulary"] or not lesson["listening"]["transcript"]:
    raise ValueError("Generated lesson is incomplete")
for v in lesson["vocabulary"]:
    if "nl" not in v or "en" not in v:
        raise ValueError("Malformed vocabulary entry")
for block in ("listening", "reading"):
    for q in lesson[block]["questions"]:
        if not 0 <= q["answer"] < len(q["options"]):
            raise ValueError("Invalid answer index")

def esc(s):
    return html.escape(str(s), quote=True)

def questions(section, items):
    parts = []
    for i, q in enumerate(items):
        opts = "".join(f'<label><input type="radio" name="{section}{i}" value="{j}"> {esc(opt)}</label>'
                       for j, opt in enumerate(q["options"]))
        parts.append(f'<div class="question"><b>{i+1}. {esc(q["q"])}</b>{opts}</div>')
    return "".join(parts)

def lines(items):
    return "".join(f"<p>{esc(x)}</p>" for x in items)

grammar = "".join(f'<h3>{esc(g["heading"])}</h3><p>{esc(g["explanation_zh"])}</p>'
                  + lines(g["examples"]) for g in lesson["grammar"])
vocab = lesson["vocabulary"]
quiz = {
    "listening": lesson["listening"]["questions"],
    "reading": lesson["reading"]["questions"],
    "knm": [lesson["knm"]["question"]]
}
external = lesson.get("external_listening", {})
url = external.get("link_url", "https://www.nedbox.be/")
if not url.startswith(("https://www.nedbox.be/", "https://www.oefenen.nl/",
                       "https://nedbox.be/", "https://www.nt2taalmenu.nl/")):
    url = "https://www.nedbox.be/"
# Escape '<' to prevent JSON from terminating the script element.
data_json = json.dumps({"vocab": vocab, "quiz": quiz}, ensure_ascii=False).replace("<", "\\u003c")
page = f"""<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Day {number} · {esc(lesson["title"])} · Jianmu</title>
<style>
:root{{font-family:system-ui,sans-serif;color:#20392d;background:#f6f9f6}}
body{{margin:0}}main{{max-width:850px;margin:auto;padding:25px}}
section{{background:white;padding:24px;border:1px solid #dae5dc;border-radius:16px;margin:18px 0}}
h1{{font-size:clamp(30px,5vw,45px)}}a{{color:#21764b}}
button{{background:#24764d;color:white;border:0;border-radius:8px;padding:11px 16px;cursor:pointer;margin:5px}}
button:focus-visible,input:focus-visible{{outline:3px solid #e6a23b}}
textarea{{box-sizing:border-box;width:100%;min-height:150px;font:inherit;padding:12px}}
label{{display:block;padding:7px 0}}.question{{border-top:1px solid #eee;padding:15px 0}}
.track{{height:12px;border-radius:12px;background:#dce8de;overflow:hidden}}
#bar{{height:100%;width:0;background:#319563;transition:width .2s}}
.card{{font-size:22px;text-align:center;padding:24px;background:#f0f7f1;border-radius:10px}}
.small{{color:#64786a}}.result{{font-weight:600}}.hidden{{display:none}}
</style></head><body><main>
<a href="../">← Dutch branch</a>
<h1>Day {number}: {esc(lesson["title"])}</h1>
<p>{esc(lesson["topic_zh"])} · {esc(lesson.get("minutes", 100))} 分钟 · {esc(level)}</p>
<p id="status">学习进度：0%</p><div class="track"><div id="bar"></div></div>
<section><h2>1. Woordenschat</h2><p>词汇卡片 · Quizlet 使用Tab分隔词条与释义</p>
<div class="card" id="flashcard"></div><p id="cardcount"></p>
<button onclick="flip()">翻转</button><button onclick="nextCard()">下一张 →</button>
<button onclick="copyVocab()">复制Quizlet词汇</button></section>
<section><h2>2. Grammatica</h2>{grammar}<button onclick="mark('grammar')">已阅读语法与例句</button></section>
<section><h2>3. Luisteren · {esc(lesson["listening"]["title"])}</h2>
<p>原创听力稿，支持浏览器荷兰语朗读。</p>
<button onclick="listen()">▶ 朗读原创对话</button>
<button onclick="toggle('transcript')">显示/隐藏文字稿</button>
<div id="transcript">{lines(lesson["listening"]["transcript"])}</div>
<h3>Luistervragen</h3>{questions("listening", quiz["listening"])}
<button onclick="grade('listening')">检查听力</button><p class="result" id="listeningResult"></p>
<p><a href="{esc(url)}" target="_blank" rel="noopener">{esc(external.get("link_label", "External listening practice"))} ↗</a></p>
<p class="small">外部平台的音频与本课原创文字稿不同；具体音频与其字幕请以外部平台为准。</p></section>
<section><h2>4. Spreken</h2><p>{esc(lesson["speaking"]["instruction_zh"])}</p>
{lines(lesson["speaking"]["prompts"])}
<button onclick="toggle('speakingModel');mark('speaking')">显示/隐藏口语范例</button>
<p id="speakingModel" hidden>{esc(lesson["speaking"]["model"])}</p></section>
<section><h2>5. Lezen · {esc(lesson["reading"]["title"])}</h2>
<p>{esc(lesson["reading"]["text"])}</p>{questions("reading",quiz["reading"])}
<button onclick="grade('reading')">检查阅读</button><p class="result" id="readingResult"></p></section>
<section><h2>6. Schrijven</h2><p>{esc(lesson["writing"]["instruction_zh"])}</p>
<textarea id="writing" oninput="writingChanged()" placeholder="Schrijf hier..."></textarea>
<p id="wordcount">0 words</p><button onclick="toggle('writingModel')">显示/隐藏写作参考范文</button>
<p id="writingModel" hidden>{esc(lesson["writing"]["model"])}</p>
<p class="small">{esc(lesson["writing"]["rubric_zh"])}</p></section>
<section><h2>7. KNM · {esc(lesson["knm"]["heading"])}</h2>
<p>{esc(lesson["knm"]["explanation_zh"])}</p>{questions("knm",quiz["knm"])}
<button onclick="grade('knm')">检查KNM</button><p class="result" id="knmResult"></p></section>
<section><h2>8. Herhaling · 复习</h2>
{"".join(f'<details><summary>{i+1}. {esc(q["q"])}</summary><p>{esc(q["answer"])}</p><p>{esc(q["explanation_zh"])}</p></details>' for i,q in enumerate(lesson["review"]))}
<button onclick="mark('review')">已完成复习</button></section>
<a href="../">← 返回课程目录</a>
<script id="lesson-data" type="application/json">{data_json}</script>
<script>
const D=JSON.parse(document.getElementById('lesson-data').textContent);
const KEY='jianmu-dutch-day-{number}';
let S;try{{S=JSON.parse(localStorage.getItem(KEY))||{{}}}}catch(e){{S={{}}}}
S.done=S.done||{{}};S.seen=S.seen||[0];let i=0,back=false;
function save(){{try{{localStorage.setItem(KEY,JSON.stringify(S))}}catch(e){{}}progress()}}
function mark(k){{S.done[k]=true;save()}}
function progress(){{const n=Object.values(S.done).filter(Boolean).length;document.getElementById('bar').style.width=(n/8*100)+'%';document.getElementById('status').textContent='学习进度：'+Math.round(n/8*100)+'% · '+n+'/8';}}
function flash(){{document.getElementById('flashcard').textContent=D.vocab[i][back?'en':'nl'];document.getElementById('cardcount').textContent=(i+1)+'/'+D.vocab.length+' · 已看 '+S.seen.length+' 张';}}
function flip(){{back=!back;flash()}}
function nextCard(){{i=(i+1)%D.vocab.length;back=false;if(!S.seen.includes(i))S.seen.push(i);if(S.seen.length===D.vocab.length)mark('vocab');save();flash()}}
function copyVocab(){{navigator.clipboard.writeText(D.vocab.map(v=>v.nl+'\\t'+v.en).join('\\n')).then(()=>alert('Copied!')).catch(()=>alert('请在 HTTPS 网站上使用复制功能。'))}}
function toggle(id){{let el=document.getElementById(id);el.hidden=!el.hidden}}
function listen(){{const u=new SpeechSynthesisUtterance(document.getElementById('transcript').innerText);u.lang='nl-NL';speechSynthesis.cancel();speechSynthesis.speak(u)}}
function grade(section){{let qs=D.quiz[section],score=0,all=true;let feedback=[];qs.forEach((q,j)=>{{const el=document.querySelector('input[name="'+section+j+'"]:checked');if(!el)all=false;else if(+el.value===q.answer)score++;feedback.push((j+1)+': '+q.options[q.answer]+' — '+(q.explanation_zh||''))}});document.getElementById(section+'Result').textContent=score+'/'+qs.length+' 正确。'+(all?'':'请完成全部题目。')+' '+feedback.join(' | ');if(all)mark(section)}}
function writingChanged(){{const t=document.getElementById('writing').value.trim(),n=t?t.split(/\\s+/).length:0;document.getElementById('wordcount').textContent=n+' words · 目标40–70';S.done.writing=n>=40&&n<=70;save()}}
flash();progress();writingChanged();
</script></main></body></html>
{date_marker}
"""
# Keep generated lessons visually consistent with the Jianmu world-tree site.
shared_style = '<link rel="stylesheet" href="../../../assets/site.css">'
shared_nav = ('<header class="site-header"><a class="site-brand" href="../../../">JIANMU · 建木</a>'
              '<nav class="site-nav"><a href="../../../">HOME</a><a href="../">DUTCH</a>'
              '<a href="https://kkkallio.github.io/">KALLIO\'S PAGE</a></nav></header>')
page = page.replace('</head>', shared_style + '</head>').replace('<body>', '<body>' + shared_nav)
target.write_text(page, encoding="utf-8")

# Append a new card before the closing </main> of the Dutch homepage.
homepage = ROOT / "index.html"
content = homepage.read_text(encoding="utf-8")
card = (f'<a class="card" href="lessons/day-{number:02d}.html">'
        f'<div class="meta">DAY {number:02d} · {esc(TODAY)}</div>'
        f'<h2>{esc(lesson["title"])}</h2><p>{esc(lesson["topic_zh"])}</p>'
        f'<strong>开始学习 →</strong></a>')
if f'lessons/day-{number:02d}.html' not in content:
    content = content.replace("</main>", card + "</main>")
    homepage.write_text(content, encoding="utf-8")
print(f"Published {target} for {TODAY}")
