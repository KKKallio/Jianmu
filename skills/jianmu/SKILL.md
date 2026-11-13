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
- Homepage displays only the original Chinese title 《山海经·海内经》 and original Chinese quotation, without translation or interpretive commentary: “有木，青叶紫茎，玄华黄实，名曰建木，百仞无枝，有九欘，下有九枸，其实如麻，其叶如芒。大皞爰过，黄帝所为。”
- Use the distinct black Jianmu icon; do not introduce branches as a visual or organizational metaphor.
- The top-left brand on Jianmu pages links to the Jianmu homepage (not the personal site). Display progress as 从 0 到 B2 · From 0 to B2. Main navigation shows module names only; use sticky subnavigation for language context and a sticky lesson title/progress bar.
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
1. **词汇 · Vocabulary**: centered flip card with ← ⟳ → and a speaker-icon-only pronunciation button (with accessible label) for the Dutch side using browser speech synthesis (`nl-NL`, with graceful unsupported-browser handling); numeric counter `2/20` only; Quizlet button at top-right of section heading; do not show a full word list. Export Dutch<TAB>English, one per line; nouns with `de/het`; verbs as `infinitive; past tense; past participle`.
2. **语法 · Grammar**: list topics with simple numbered labels, not heavy black headings; include telling time here, not in vocabulary; bilingual explanations, natural Dutch examples, interactive exercises.
3. **听力 · Listening**: original dialogue, full hideable transcript, comprehension, free external listening links. Label browser TTS accurately; never imply external audio matches the original transcript.
4. **口语 · Speaking**: use separate task-switch buttons when multiple tasks exist; provide model responses; do not show a manual speaking-completion button.
5. **阅读 · Reading**: coherent Dutch text, bilingual expression notes, comprehension.
6. **写作 · Writing**: authentic task, text area and directly visible model text side-by-side on desktop (stack on mobile); word count; no assessment-criteria table. Keyword/length checks are not official grades.
7. **荷兰社会 · Dutch society (KNM)**: brief, non-redundant Chinese, English and Dutch explanations before scenario questions.
8. **复习 · Review**: no introductory paragraphs before questions; cumulative earlier material; use diagnostic questions on Day 001. Review is the last learning section. After it, show previous-day navigation at bottom left, the daily course index centered, and next-day navigation at bottom right. Disable unavailable days rather than linking to missing pages; do not place a back link above the lesson.

## Shared interaction rules
- For grammar, listening, reading, KNM and review, display one question at a time, with ← / →, numeric counter, a compact numbered question navigation bar below the question card, and `提交 · Submit`.
- Support both radio choices and fill-in questions. Preserve answers across navigation, refuse grading entirely until every question has been answered (jump to first unanswered question), accept reasonable answer variants, and reveal feedback **inside each individual question card** after submission, never as a combined answer list below the quiz. Turn each numbered navigation button light green when correct or light red when incorrect; for each incorrect answer include the correct answer and a specific bilingual explanation.
- Reuse `assets/lesson-cards.js` for question navigation and Dutch speech synthesis. On mobile, invoke speech synchronously from the tap, retain utterance objects, and provide a shared stop function for dialogue playback.
- Mark quiz-based sections complete only after every question in that section has been answered and submitted, regardless of whether answers are correct. Track eight sections and retain answers/drafts only during the current page session. On every fresh lesson page load or reopening, reset progress, answers, and draft to a clean 0% state; do not restore previous lesson completion from browser storage. Keep comfortable padding around the sticky progress label and bar. Maintain compatibility with `jianmu-dutch-day1` and `jianmu-dutch-day2`.
- Assign each lesson a CEFR level based on its actual vocabulary, grammar and tasks (avoid aspirational A2 labels for A1+ lessons). Keep the Dutch index focused on lessons, without introductory goal statements or browser-storage explanations. When generating new days, ensure level-appropriate progression from A1 through A2, B1, B2; don't simply duplicate earlier content.

## Workflow
1. Read the latest affected GitHub files before editing.
2. Prefer shared CSS/JS for repeated UI changes; preserve unrelated content.
3. Create `day-NNN.html`, link from Dutch index, and update adjacent lesson links.
4. Validate HTML structure and JavaScript syntax, link paths, flashcards, Quizlet export, fill-in normalization, one-at-a-time questions, answer persistence, progress, accessibility, and mobile sticky offsets.
5. Commit descriptive changes. Distinguish code checks from live browser testing; never claim an unperformed test.

Example: “Create Day 004 in Jianmu with all eight bilingual interactive sections, update the Dutch index, and preserve the shared template.”
