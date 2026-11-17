# Common rules for 0.23.0 module coders (A, B, C)
Read /home/claude/devtools/write/briefs-0.17/COMMON-CODE.md (conventions and testing: all of it applies) and
/home/claude/work/briefs-0.23/PLAN-0.23.md sections A and B. The scaffold is done: routes, menu, strings, registration,
stub modules, stub data with one seed entry each, App.fillBlank, tools/collect-texts.js, /home/claude/work/chk-023.js.
Edit ONLY the module file(s) named in your brief, and css/style.css by APPENDING one block under `/* 0.23.0 <module> */`.
Do not edit js/app.js, index.html, sw.js, data/*, tools/*, js/views.js, js/core.js or any js/data file: writers are filling
the data files in parallel, so they may be empty, partial or briefly broken while you work. Your page must cope with an
empty global (friendly "No items yet"), and for testing you keep your OWN fixture in /home/claude/work/fixtures/<module>.js
(12+ realistic items across N5–N2 in the PLAN shape) that your QA script injects with page.add_init_script or by
assigning the global before navigation; never write test items into js/data.
Shared behaviour for every drill page:
- Level seg (All, N5, N4, N3, N2; only levels that have items), remembered in state.settings.<module>Lv; round length 10
  (a seg for 10 / 20); progress bar; after each answer: correct / not quite, the full correct Japanese with a speaker
  button (App.speak with the NOTATION), the English, the reason, and a link to the lesson when the item has `l`.
- Wrong or ungrammatical Japanese is never passed to App.speak and has no speaker button.
- Answers call App.recordAnswer(ok, cardId) only when a real flashcard id exists; otherwise keep a per-module mistakes
  list in state.done.<module>.miss (ids, capped at 200) with a "Practise my mistakes" round.
- Best scores: state.done.<module>[key] = { best, of, at } (look at how js/vocab.js stores and how V.progress in
  views.js reads state.done.vocab; the scaffold added rows for your module: match the shape it reads). App.save().
- Typed answers: accept kana or romaji, ignore spaces and 。、？！, treat kanji and its reading as equal (compare
  JA readings: JA has helpers to get the kana of a notation string; js/listen.js dictation already normalises typed kana
  and romaji: reuse its functions if exported, or copy the small normaliser into your module).
- Furigana-revealing: where the reading or romaji would give the answer away put `data-norj` on the container.
- Phone first (390 px), tap targets ≥ 44 px, dark mode, keyboard: 1–4 choose an option, Enter = next.
QA script /home/claude/work/qa/<module>.py as COMMON-CODE says (phone + desktop, light + dark, right and wrong answers,
empty-data state, mistakes round, score saved and shown on #/progress, no console errors, no overflow, no raw 《》).
Finish: files changed, what the page does, QA result lines, open points. No git, no version bump.
