# Coder brief (0.27.0): "Picture" mode in the Vocabulary quiz
App: Hanashimashō (plain HTML/CSS/JS, no build step). You work in a COPY of the site: /home/claude/ja-code (served at
http://localhost:8770/, already running; the audio clips are not in the copy, so sound falls back to the device voice:
ignore audio 404s). Do NOT touch /home/claude/japanese. No git commands. Do not stop the servers on 8765 or 8770.
Edit only: js/vocab.js, css/style.css (append a block `/* 0.27.0 vocabulary picture mode */` at the END), and, only if
needed for the Progress page, js/views.js. Write your QA script to /home/claude/work/qa-new/vocab-picture.py.
Read first: the header comments of js/vocab.js, js/pictures.js (App.pictures = { sets, get/byId, svg(set, opts), embed,
GROUPS }; picturesQs near the end shows how a picture and a word card are drawn) and js/today.js (App.drillRun, the
shared question runner: html, opts [{h, ok}], fb, done). Notation helper rules: Japanese strings are in the app's
notation (kanji《reading》, spaces between words); put them in an element with class "tl" and js/ja.js renders furigana;
never print the notation raw; containers with data-norj get no romaji line.

## What to build
A sixth mode in the deck quiz at #/vocab: `['picture', 'Picture']` after 'Type it'.
- Pool: the deck's usable words that HAVE A PICTURE: a dictionary word `e` has one when some picture-set part has
  `part.w === e.tl` exactly (build the map once, lazily: tl → [{ set, part }], skipping sets whose picture cannot be shown,
  i.e. a diagram whose art is missing). About 495 dictionary words have one today; new sets arrive in this release, so
  never hard-code set ids or counts.
- Question: the PICTURE is the question and the learner chooses the word. Cards set: the part's emoji, large. Diagram set:
  the set's drawing with only that part's pin highlighted (other pins hidden or faint, no numbers needed; reuse
  App.pictures.svg options, extend nothing in js/pictures.js unless you truly must, and say so). Above it one small line:
  "What is this? (<set title>)". When a word has pictures in several sets, pick one at random per question.
- Options: four Japanese words (class tl, furigana as the reader's setting; no English). Wrong options: first other parts of
  the SAME set (their `w`), same level or lower preferred, never a word whose plain text equals the answer's; fill from
  the deck if the set is small. Options are spoken only after answering.
- After answering: the usual right / wrong mark, then the word with a Listen button (App.sayBtn(tl, tl)), "= English",
  and two links: "Word page" (#/dict/<id>) and "Open the picture" (#/pictures/<set id>). A wrong pick shows what the
  chosen word means.
- Scoring exactly like the other modes: best % in state.done.vocab['<deckId>:picture'] (shown in the mode button like the
  others), App.recordAnswer(ok, e.id) so misses land in My mistakes, App.activity as the others do. "New round" draws new
  words. 10 or 20 questions as chosen. Keyboard 1–4 and Enter work as in the other modes.
- Status line under the mode buttons: "<n> words in this deck have a picture." and, under 4, the existing notice pattern
  ("This deck has n words usable for the Picture mode (words that appear in Picture words); at least 4 are needed …").
- Update the intro paragraph on the page ("six ways … Picture (see the picture, choose the word)") and the header comment
  of js/vocab.js (a 0.27.0 paragraph). If the Progress page (V.progress, "Practice scores") lists vocabulary modes by name,
  add Picture there the same way.
- Use the runner that fits with the least new code (App.runQuiz if it can show an HTML question; otherwise App.drillRun,
  or the small custom loop Type it uses). Keep the look consistent with the other modes: existing classes (.card, .opt,
  .btn, .seg, .notice) and tokens; no new colours. The picture must fit a 360 px wide phone without sideways scrolling,
  in light and dark themes; the highlighted pin must be easy to see.
- Do not change question data, storage keys of other modes, or anything about the other five modes.

## QA script (Playwright, python, chromium installed; model: /home/claude/devtools/qa/vocab-modes.py, read it first)
/home/claude/work/qa-new/vocab-picture.py; base URL http://localhost:<QA_PORT env, default 8765>/index.html. It must:
open #/vocab at 360×740 and 1280×800, light and dark; choose deck By level N5 and mode Picture; check the status count
is over 100; run a 10-question round answering some right and some wrong; on every question check a picture is visible
(an svg with exactly one highlighted pin, or an emoji), 4 options, no raw notation (《 or 》 or ｜ in visible text), no
horizontal overflow; check the result card, that state.done.vocab['lv-N5:picture'] is a number, that a wrong answer put
the word in My mistakes; check a deck with fewer than 4 picture words shows the notice and Start is disabled (find such a
deck from the page, e.g. a clinical deck, or My mistakes when empty); check the other five modes still start. Print one
line per check and end with a line `errors [...]` (page errors and console errors, ignoring 403/404 for fonts and audio).
Save screenshots to /tmp/qa-out/vocab-picture_<width>_<theme>_<cards|diagram>.png and LOOK at at least the two phone
light ones with the Read tool; fix what looks wrong.
Then run, with QA_PORT=8770: your script, python3 /home/claude/devtools/qa/vocab-modes.py and
python3 /home/claude/devtools/qa/vocab.py (if a script ignores QA_PORT, say so in your report instead of editing it), plus
`node --check js/vocab.js`.
Report in under 25 lines: files changed, how the pool and distractors work, QA results, anything left.
