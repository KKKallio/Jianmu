---
name: jianmu
description: Maintain and extend the Jianmu bilingual multi-subject learning website and interactive language lessons.
---

# 建木 · Jianmu

Repository: `KKKallio/Jianmu`  
Website: https://kkkallio.github.io/Jianmu/

## Principles
- Treat Jianmu as a multi-subject learning record, not a language-only site.
- Chinese first, English second in interface and explanatory text; Dutch remains Dutch in lesson passages and questions.
- Homepage quotes 《山海经·海内经》: “有木，青叶紫茎，玄华黄实，名曰建木，百仞无枝，有九欘，下有九枸，其实如麻，其叶如芒。大皞爰过，黄帝所为。”
- Use the distinct black Jianmu icon; do not introduce branches as a visual or organizational metaphor.
- Main navigation shows module names only; use sticky subnavigation for language context and a sticky lesson title/progress bar.
- Keep responsive styling, dark mode, and shared assets. Do not display suggested study times.

## Paths
```text
index.html
assets/site.css
assets/jianmu.svg
assets/lesson-cards.js
modules/language/index.html
modules/language/dutch/index.html
modules/language/dutch/lessons/day-NNN.html
```
**Always use three-digit day filenames** (`day-001.html` through `day-999.html`) and display `Day 001` etc. Update course index and prev/next links. Preserve redirects from older `day-NN.html` links. Do not change existing localStorage keys without migration.

## Daily lesson: eight sections
1. **词汇 · Vocabulary**: centered flip card with ← ⟳ →; numeric counter `2/20` only; Quizlet button at top-right of section heading; do not show a full word list. Export Dutch<TAB>English, one per line; nouns with `de/het`; verbs as `infinitive; past tense; past participle`.
2. **语法 · Grammar**: bilingual explanation, natural Dutch examples, interactive exercises.
3. **听力 · Listening**: original dialogue, full hideable transcript, comprehension, free external listening links. Label browser TTS accurately; never imply external audio matches the original transcript.
4. **口语 · Speaking**: retelling and communicative task, model answer, explicit completion control.
5. **阅读 · Reading**: coherent Dutch text, bilingual expression notes, comprehension.
6. **写作 · Writing**: authentic task, text area, word count, optional model text and criteria. Keyword/length checks are not official grades.
7. **荷兰社会 · Dutch society (KNM)**: practical civic information and scenario questions.
8. **复习 · Review**: cumulative earlier material; use diagnostic questions on Day 001.

## Shared interaction rules
- For grammar, listening, reading, KNM and review, display one question at a time, with ← / →, numeric counter, and `提交 · Submit`.
- Support both radio choices and fill-in questions. Preserve answers across navigation, report missing responses, accept reasonable answer variants, and reveal feedback after submission.
- Reuse `assets/lesson-cards.js` for question navigation.
- Track eight sections, retain answers/drafts, and persist progress in browser storage. Maintain compatibility with `jianmu-dutch-day1` and `jianmu-dutch-day2`.
- When generating new days, ensure level-appropriate progression from A1 through A2, B1, B2; don't simply duplicate earlier content.

## Workflow
1. Read the latest affected GitHub files before editing.
2. Prefer shared CSS/JS for repeated UI changes; preserve unrelated content.
3. Create `day-NNN.html`, link from Dutch index, and update adjacent lesson links.
4. Validate HTML structure and JavaScript syntax, link paths, flashcards, Quizlet export, fill-in normalization, one-at-a-time questions, answer persistence, progress, accessibility, and mobile sticky offsets.
5. Commit descriptive changes. Distinguish code checks from live browser testing; never claim an unperformed test.

Example: “Create Day 003 in Jianmu with all eight bilingual interactive sections, update the Dutch index, and preserve the shared template.”
