/* Shared one-question-at-a-time exercise template for every lesson section. */
(function(){
function init(){
 const normalize=v=>String(v??'').trim().toLocaleLowerCase('nl-NL').replace(/[.!?]+$/,'').replace(/\s+/g,' ');
 const lessonId=location.pathname.includes('day-003')?'day-003':location.pathname.includes('day-002')?'day-002':'day-001';
 const explanations={"day-001":{"grammar":["情态动词 kan 与 ik 搭配；后面的 drinken 用原形。 · With ik, use kan; the main verb stays in the infinitive.","时间状语 Vandaag 放在句首时，限定动词 werk 必须紧跟其后。 · After fronted Vandaag, the finite verb werk comes next.","afspreken 是可分动词：we spreken ... af。 · The separable verb afspreken splits in a main clause.","wil 后接动词原形 afspreken。 · After wil, use the infinitive afspreken."],"listening":["对话明确提到 Amsterdam。 · The dialogue explicitly mentions Amsterdam.","half tien 是九点半（09:30），不是十点半。 · Half tien means 09:30.","Lisa 说她已经有预约：ik heb een afspraak。 · Lisa already has an appointment.","他们约在车站旁的咖啡馆。 · They agree to meet at the café beside the station."],"reading":["邮件邀请的日期是 donderdag（星期四）。 · The invitation specifies Thursday.","half tien 表示 09:30。 · Half tien is 09:30.","邮件要求 Emma 回复能否赴约。 · Emma is asked to confirm whether she can attend."],"knm":["不能赴约时应尽早通知家庭医生诊所，以便取消或改期。 · Contact the GP practice promptly to cancel or reschedule."],"review":["woon 是 ik 的现在时形式；国家名称为 Nederland。 · Use ik woon and the country name Nederland.","spreekt 与 zij/ze 搭配；语言名称是 Nederlands。 · Use zij/ze spreekt Nederlands.","情态动词 kan 放在第二位置，werken 留在句末。 · Put kan in second position and werken at the end.","gaan 的完成时使用 zijn：ik ben gegaan。 · The perfect tense of gaan takes zijn."]},"day-002":{"grammar":["geen 否定不定名词 melk；niet 通常否定形容词等。 · Use geen to negate an indefinite noun.","ei 的复数是 eieren，冠词变为 de。 · The plural of ei is eieren.","goedkoop 是形容词，因此用 niet 否定。 · Negate the adjective goedkoop with niet.","banaan 的复数是 bananen。 · The plural of banaan is bananen."],"listening":["对话说牛奶在奶酪旁边：naast de kaas。 · The milk is next to the cheese.","牛奶价格是 €1,50。 · The dialogue gives the price as €1.50.","Emma 买两盒牛奶：twee pakken。 · Emma buys two cartons."],"reading":["购物清单提到缺少 melk en brood。 · The shopping message says milk and bread are needed.","Lisa 说的时间是 17:30。 · Lisa gives 17:30 as the time."],"knm":["带有 statiegeld 标志的容器应送到回收点退押金。 · Return eligible containers to a collection point for the deposit."],"review":["ik 搭配情态动词 kan，不是 kun。 · The correct first-person form is kan.","gaan 的完成时助动词是 zijn：ben gegaan。 · Gaan takes zijn in the perfect tense.","drinken 的完成时通常用 hebben：heb gedronken。 · Drinken normally takes hebben.","荷兰语 half tien 是九点半。 · Dutch half tien means 09:30.","ik 后面用 kan。 · Use kan after ik."]}};
 explanations['day-003']={grammar:['moet 是 ik 的现在时形式；另一个动词用原形放在句末。 · Use moet with ik and place the main infinitive at the end.','uitstappen 是可分动词，主句中前缀 uit 放句末。 · The separable prefix uit goes to the end.','地点状语前置时，限定动词 neem 仍在第二位置。 · With a fronted place phrase, neem remains second.','moeten 后接动词原形 lopen。 · The modal moeten takes the infinitive lopen.'],listening:['对话从 Amsterdam Centraal 开始。 · The dialogue begins at Amsterdam Centraal.','对方建议乘坐 tram 2。 · The traveler recommends tram 2.','对方明确说 Nee, dat hoeft niet。 · The traveler says no transfer is needed.','应在 Museumplein 下车。 · Get off at Museumplein.','左转之后博物馆位于右侧。 · After turning left, the museum is on the right.'],reading:['Lisa 说火车晚点：vertraging。 · Lisa says her train is delayed.','twintig minuten later 是晚二十分钟。 · Twintig means twenty.','她要求在 hoofdingang（正门）等候。 · She asks Emma to wait at the main entrance.','她提议先去咖啡馆喝咖啡。 · They plan to have coffee.'],knm:['使用 OVpay 乘车需要进站／上车刷卡及出站／下车刷卡。 · OVpay requires checking in and out.','出发前应查看时刻表及晚点情况。 · Check the timetable and delays.','进出站应使用同一张卡或同一部手机。 · Use the same card or phone to check out.'],review:['ik 搭配 kan。 · The modal form with ik is kan.','geen 否定不定名词 melk。 · Use geen with an indefinite noun.','ei 的复数是 eieren，复数冠词为 de。 · The plural is de eieren.','gaan 的完成时使用 ben。 · Gaan takes zijn in the perfect tense.','half tien 表示九点半。 · Half tien is 09:30.','ik moet 后接完整动词原形 uitstappen。 · Use moet with ik and the infinitive uitstappen.']};
 const original=typeof window.grade==='function'?window.grade:(typeof window.check==='function'?window.check:null);
 const action=typeof window.grade==='function'?'grade':'check';
 if(original&&typeof quizzes!=='undefined'){
  window[action]=function(section){
   const questions=quizzes[section]||[];
   const allAnswered=questions.every((q,index)=>{const input=q[1].length?document.querySelector('input[name="'+section+index+'"]:checked'):document.querySelector('input[name="'+section+index+'"]');return !!input&&String(input.value).trim()!==''});
   if(!allAnswered){
    const firstMissing=questions.findIndex((q,index)=>{const input=q[1].length?document.querySelector('input[name="'+section+index+'"]:checked'):document.querySelector('input[name="'+section+index+'"]');return !input||!String(input.value).trim()});
    const area=document.getElementById(section);
    let warning=area.parentElement.querySelector('.quiz-incomplete');
    if(!warning){warning=document.createElement('p');warning.className='quiz-incomplete';warning.setAttribute('role','alert');area.after(warning)}
    warning.textContent='请先完成全部 '+questions.length+' 道题，再提交检查。 · Answer all '+questions.length+' questions before checking.';
    area.dispatchEvent(new CustomEvent('quiz-jump',{detail:{index:firstMissing}}));
    return;
   }
   const warning=document.getElementById(section)?.parentElement.querySelector('.quiz-incomplete');if(warning)warning.remove();
   original(section);
   // A section is completed only after every question has an answer.
   if(!allAnswered&&typeof state!=='undefined'&&state.done){state.done[section]=false;if(typeof progress==='function')progress()}
   let correctCount=0;
   const area=document.getElementById(section);
   if(!area)return;
   questions.forEach((q,index)=>{
    const cell=area.children[index];if(!cell)return;
    let feedback=cell.querySelector('.answer-feedback');
    if(!feedback){feedback=document.createElement('div');feedback.className='answer-feedback';feedback.setAttribute('role','status');cell.append(feedback)}
    const options=q[1]||[];
    const input=options.length?cell.querySelector('input[type="radio"]:checked'):cell.querySelector('input.fill-answer');
    const raw=input?input.value:'';
    const expected=options.length?options[q[2]]:(Array.isArray(q[2])?q[2][0]:'');
    const correct=options.length?!!input&&Number(raw)===q[2]:!!normalize(raw)&&q[2].some(v=>normalize(v)===normalize(raw));
    if(correct)correctCount++;
    cell.dataset.answerStatus=!normalize(raw)?'unanswered':correct?'correct':'incorrect';
    feedback.classList.toggle('correct',correct);
    feedback.classList.toggle('incorrect',!correct);
    feedback.textContent=correct?'✓ 正确 · Correct':'✗ 错误 · Incorrect · 正确答案 · Correct answer: '+expected+'。 '+(explanations[lessonId]?.[section]?.[index]||'请对照课文或语法说明。 · Review the lesson explanation.');
   });
   const summary=document.getElementById(section+'Result');
   if(summary){summary.hidden=false;summary.removeAttribute('aria-hidden');summary.classList.add('quiz-score-summary');summary.textContent='✓ 正确 · Correct: '+correctCount+' / '+questions.length+'   ·   ✗ 错误 · Incorrect: '+(questions.length-correctCount-questions.filter((q,i)=>area.children[i]?.dataset.answerStatus==='unanswered').length)+(allAnswered?'':'   ·   请完成所有题目 · Answer every question')}
   area.dispatchEvent(new CustomEvent('quiz-graded'));

  };
 }

 for(const id of ['grammar','listening','reading','knm','review']){
  const area=document.getElementById(id);if(!area)continue;
  const items=Array.from(area.children).filter(el=>el.querySelector('input[type="radio"],input[type="text"]'));
  if(!items.length)continue;
  let current=0;
  const controls=document.createElement('div');controls.className='quiz-controls';
  const back=document.createElement('button');back.type='button';back.textContent='←';back.setAttribute('aria-label','上一题 · Previous question');
  const counter=document.createElement('span');counter.className='quiz-counter';counter.setAttribute('aria-live','polite');
  const next=document.createElement('button');next.type='button';next.textContent='→';next.setAttribute('aria-label','下一题 · Next question');
  controls.append(back,counter,next);area.after(controls);
  const numberNav=document.createElement('nav');numberNav.className='quiz-number-nav';numberNav.setAttribute('aria-label','题目导航 · Question navigation');
  const numberButtons=items.map((item,i)=>{const button=document.createElement('button');button.type='button';button.textContent=String(i+1);button.setAttribute('aria-label','第 '+(i+1)+' 题 · Question '+(i+1));button.addEventListener('click',()=>show(i));numberNav.append(button);return button});
  area.after(numberNav);
  function show(n){current=Math.max(0,Math.min(items.length-1,n));items.forEach((el,i)=>{el.hidden=i!==current;el.classList.add('quiz-card')});counter.textContent=(current+1)+'/'+items.length;counter.className='quiz-counter'+(items[current].dataset.answerStatus?' quiz-counter-'+items[current].dataset.answerStatus:'');back.disabled=current===0;next.disabled=current===items.length-1;numberButtons.forEach((button,i)=>{button.className='quiz-number'+(items[i].dataset.answerStatus?' quiz-number-'+items[i].dataset.answerStatus:'')+(i===current?' quiz-number-active':'');button.setAttribute('aria-current',i===current?'step':'false')})}
  area.addEventListener('quiz-graded',()=>show(current));
  area.addEventListener('quiz-jump',e=>show(e.detail.index));
  back.addEventListener('click',()=>show(current-1));next.addEventListener('click',()=>show(current+1));
  area.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.matches('input.fill-answer')){e.preventDefault();if(current<items.length-1)show(current+1)}});
  show(0);
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
/* Dutch audio with visible status and an explicit fallback on mobile browsers. */
let dutchAudio=null,dutchSpeechQueue=[],dutchSpeechSession=0,dutchAudioTimer=null;
function dutchAudioStatus(message,type){
 let status=document.getElementById('dutch-audio-status');
 if(!status){
  status=document.createElement('div');status.id='dutch-audio-status';
  status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  status.style.cssText='position:fixed;bottom:calc(12px + env(safe-area-inset-bottom, 0px));left:12px;right:12px;z-index:9999;margin:auto;max-width:520px;padding:12px 15px;border-radius:12px;border:1px solid #b6cabb;box-shadow:0 4px 20px #0002;font:14px/1.5 system-ui;background:#f5fff6;color:#1d4930;';
  document.body.append(status);
 }
 status.textContent=message;
 status.style.background=type==='error'?'#fff0f0':type==='playing'?'#effaf2':'#f5fff6';
 status.style.borderColor=type==='error'?'#e6aaaa':'#b6cabb';
}
function stopDutchSpeech(){
 dutchSpeechSession++;
 dutchDialogueActive=false;
 if(dutchAudioTimer){clearTimeout(dutchAudioTimer);dutchAudioTimer=null}
 if(dutchAudio){dutchAudio.pause();dutchAudio.removeAttribute('src');dutchAudio=null}
 dutchSpeechQueue=[];
 if('speechSynthesis' in window)window.speechSynthesis.cancel();
}
function dutchSpeechFallback(lines,session,options,reason){
 if(session!==dutchSpeechSession)return;
 if(!('speechSynthesis' in window)||typeof SpeechSynthesisUtterance==='undefined'){
  dutchAudioStatus('无法播放荷兰语音频 · Dutch audio failed ('+reason+'). Check your connection and try again.','error');return;
 }
 const synth=window.speechSynthesis;
 const voices=synth.getVoices();
 const voice=voices.find(v=>v.lang.toLowerCase()==='nl-nl')||voices.find(v=>v.lang.toLowerCase().startsWith('nl'));
 if(!voice){
  dutchAudioStatus('荷兰语音频无法播放 · Dutch audio failed ('+reason+'). No Dutch system voice found. Check internet access or install Dutch (Netherlands) under iPhone Accessibility → Read & Speak → Voices.','error');return;
 }
 dutchAudioStatus('正在尝试设备荷兰语语音 · Trying the Dutch device voice…','loading');
 let index=0;
 function next(){
  if(session!==dutchSpeechSession||index>=lines.length)return;
  const utterance=new SpeechSynthesisUtterance(lines[index]);
  utterance.lang='nl-NL';utterance.voice=voice;utterance.rate=options.rate||0.85;
  utterance.pitch=options.alternatePitch?(index%2?0.9:1.12):1;
  dutchSpeechQueue.push(utterance);
  utterance.onstart=()=>dutchAudioStatus('正在播放荷兰语 · Playing Dutch pronunciation','playing');
  utterance.onend=()=>{index++;if(index===lines.length)dutchAudioStatus('播放完成 · Playback finished','done');else next()};
  utterance.onerror=e=>dutchAudioStatus('设备语音播放失败 · Device voice failed: '+(e.error||'unknown'),'error');
  synth.speak(utterance);if(synth.paused)synth.resume();
 }
 next();
}
function speakDutchText(text,options={}){
 const lines=(Array.isArray(text)?text:[text]).map(s=>String(s||'').trim()).filter(Boolean);
 if(!lines.length)return;
 stopDutchSpeech();
 const session=dutchSpeechSession;
 let index=0,failed=false;
 dutchAudioStatus('正在加载荷兰语音频 · Loading Dutch audio…','loading');
 const audio=new Audio();dutchAudio=audio;audio.preload='auto';
 function fail(reason){
  if(session!==dutchSpeechSession||failed)return;
  failed=true;if(dutchAudioTimer){clearTimeout(dutchAudioTimer);dutchAudioTimer=null}
  audio.pause();dutchSpeechFallback(lines.slice(index),session,options,reason);
 }
 function playNext(){
  if(session!==dutchSpeechSession||index>=lines.length||failed)return;
  const sentence=lines[index];
  audio.src='https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=nl&q='+encodeURIComponent(sentence);
  dutchAudioTimer=setTimeout(()=>fail('timeout'),12000);
  try{
   const playback=audio.play();
   if(playback&&typeof playback.catch==='function')playback.catch(e=>fail(e.name||'play rejected'));
  }catch(e){fail(e.name||'play error')}
 }
 audio.addEventListener('playing',()=>{if(dutchAudioTimer){clearTimeout(dutchAudioTimer);dutchAudioTimer=null}dutchAudioStatus('正在播放荷兰语 · Playing Dutch pronunciation','playing')});
 audio.addEventListener('ended',()=>{if(session!==dutchSpeechSession)return;index++;if(index===lines.length)dutchAudioStatus('播放完成 · Playback finished','done');else{dutchAudioStatus('正在加载下一句 · Loading next sentence…','loading');playNext()}});
 audio.addEventListener('error',()=>fail('audio request error'));
 playNext();
}
/* Character-aware Dutch dialogue: one utterance per turn, one pass per tap. */
let dutchDialogueActive=false;
function speakDutchDialogue(turns,options={}){
 if(dutchDialogueActive)return; // Ignore repeated taps while the dialogue is playing.
 const rows=turns.map((turn,i)=>typeof turn==='string'?{speaker:i%2?'Man':'Emma',text:turn}:turn).filter(t=>t&&t.text&&String(t.text).trim());
 if(!rows.length)return;
 stopDutchSpeech();
 const session=dutchSpeechSession;
 if(!('speechSynthesis' in window)||typeof SpeechSynthesisUtterance==='undefined'){
  dutchAudioStatus('浏览器不支持荷兰语对话朗读 · Dialogue speech is unavailable.','error');return;
 }
 const synth=window.speechSynthesis;
 const voices=synth.getVoices().filter(v=>v.lang.toLowerCase().startsWith('nl'));
 if(!voices.length){
  dutchAudioStatus('没有可用的荷兰语语音 · No Dutch voice installed on this device.','error');return;
 }
 const femaleHints=/female|vrouw|fem|claire|ellen|lena|lotte|fleur/i;
 const maleHints=/male|man|masc|ruben|maarten|david|thomas|jeroen|frank/i;
 const femaleVoices=voices.filter(v=>femaleHints.test(v.name)&&!maleHints.test(v.name));
 const maleVoices=voices.filter(v=>maleHints.test(v.name)&&!femaleHints.test(v.name));
 const primaryFemale=femaleVoices[0]||voices[0];
 const secondaryFemale=femaleVoices.find(v=>v!==primaryFemale)||voices.find(v=>v!==primaryFemale&&!maleVoices.includes(v))||primaryFemale;
 const primaryMale=maleVoices[0]||voices.find(v=>v!==primaryFemale)||primaryFemale;
 const speakerNames=[...new Set(rows.map(r=>String(r.speaker)))];
 const femaleNames=new Set(['Emma','Lisa','Vrouw']);
 const voiceFor=(name)=>{
  if(name==='Emma'||name==='Vrouw')return primaryFemale;
  if(name==='Lisa')return secondaryFemale;
  return primaryMale;
 };
 dutchDialogueActive=true;
 let index=0;
 function finish(message,type){
  if(session!==dutchSpeechSession)return;
  dutchDialogueActive=false;
  dutchSpeechQueue=[];
  dutchAudioStatus(message,type);
 }
 function next(){
  if(session!==dutchSpeechSession)return;
  if(index>=rows.length){finish('对话播放完成 · Dialogue finished (once)','done');return}
  const row=rows[index],name=String(row.speaker),utterance=new SpeechSynthesisUtterance(String(row.text).trim());
  const voice=voiceFor(name);
  utterance.lang='nl-NL';utterance.voice=voice;utterance.rate=options.rate||0.88;
  const isFemale=femaleNames.has(name);
  utterance.pitch=voice===primaryFemale&&name==='Lisa'?1.13:voice===primaryFemale&&!isFemale?0.8:1;
  dutchSpeechQueue.push(utterance);
  utterance.onstart=()=>{if(session===dutchSpeechSession)dutchAudioStatus(name+' · '+(index+1)+' / '+rows.length,'playing')};
  utterance.onend=()=>{if(session!==dutchSpeechSession)return;index++;next()};
  utterance.onerror=e=>finish('对话播放失败 · Dialogue playback error: '+(e.error||'unknown'),'error');
  synth.speak(utterance);
  if(synth.paused)synth.resume();
 }
 next();
}
function pronounceDutchCard(entry){speakDutchText(String(entry||'').split(';')[0],{rate:0.85})}
