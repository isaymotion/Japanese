# Coder brief S: scaffold and lesson engine for 0.23.0 (runs FIRST, alone)
Read /home/claude/devtools/write/briefs-0.17/COMMON-CODE.md (conventions, testing; ignore its "main chat already did"
paragraph: in this build YOU do the wiring) and /home/claude/work/briefs-0.23/PLAN-0.23.md (all of it). Work in
/home/claude/japanese (branch wip-0.23.0 is checked out). No git commands except `git status` / `git diff --stat`.
Other agents start when you finish and each will own ONE of the stub files you create, so stubs and wiring must be complete.

1. Stub data files in js/data/, each with a header comment (what it is, "DRAFT FOR REVIEW by a native Japanese speaker",
   the exact shape from PLAN section A, "append only after release") and an empty wrapper that loads alone in node:
   lessons-28..35.js (`window.LESSONS = window.LESSONS || []; window.LESSONS.push(\n);`), lessons-zz-order.js (real code, see 3),
   lesson-extra-1..8.js, grammar-cloze-n5.js, -n4a.js, -n4b.js, -n3.js, -n2a.js, -n2b.js, grammar-transform-1.js, -2.js,
   word-pairs-1.js, -2.js, sound-words.js. Put ONE seed entry of the PLAN's example in grammar-cloze-n5.js,
   grammar-transform-1.js, word-pairs-1.js, sound-words.js and lesson-extra-1.js (for lesson `desu`) so pages can be tested;
   mark it `/* seed: writers replace */`.
2. Stub modules js/build.js, cloze.js, transform.js, leveltest.js, pairs.js, soundwords.js: each defines its view
   (V.build, V.cloze, V.transform, V.leveltest, V.pairs, V.sounds) rendering a heading, breadcrumb and "Coming in this
   build" so routes work. Register everything in index.html (data before js/audio-key.js, lessons-zz-order.js AFTER every
   lessons file and lesson-extra file; modules after the existing practice modules) and in sw.js FILES
   (/home/claude/devtools/write/regnew.py and reg.py can help; check `bash`-style that every src in index.html is in sw.js).
3. Lesson engine:
   - js/data/lessons-zz-order.js: stable re-sort of window.LESSONS in place: a lesson with `after: X` moves to directly
     after X; several lessons with the same `after`: `review: true` ones first, then the others in file order; chains
     (after → a lesson that itself has `after`) resolve; unknown ids stay where they are. Guarded so it loads alone.
     Everything that uses lesson order (lessons list, units, prev / next, placement recommendations, progress counts,
     search) must see the new order: check where views.js / core.js copy or index LESSONS and that the sort runs before.
   - Lesson page (V.lesson in js/views.js): when LESSON_EXTRA[id] exists show, after the body and before the quiz:
     "Common mistakes" (each: wrong line struck through and marked ✗ with NO speaker button and never passed to
     App.speak, right line marked ✓ with the usual speaker button, the reason under it) and "More examples" (same `.ex`
     rendering as the body so they print and play); after the lesson's quiz a second quiz "More practice" (runQuiz) whose
     best score is stored separately (do not change how lesson completion is counted). Print (App.printPage) includes them.
   - Review lessons (`review: true`): a "Review" pill on the lessons list and page; they count as lessons everywhere.
   - Lessons list: the unit headings must keep working when a unit's lessons come from several files.
4. tools/collect-texts.js: add to the recorded texts: LESSON_EXTRA `more[].0` and `mistakes[].1` (RIGHT line only, never the
   wrong line); GRAMMAR_CLOZE: the sentence with `a` filled in (replace ＿; not the blanked `s`, not the options);
   GRAMMAR_TRANSFORM: `from` (each) and `to` (not `alt`, not `wrong`); WORD_PAIRS `a`, `b`; SOUND_WORDS `w`, `ex`.
   New lesson files are picked up already if it scans LESSONS: verify. Export one helper used by both the tool and the app
   for "fill the blank" so the spoken text and the clip key agree (same string ⇒ same key): put it in js/ja.js or core.js
   as `App.fillBlank(s, a)` (collect-texts loads those files in node; see how it loads ja.js).
5. tools/check-ja.js must load and check the new files and globals (it reads every string); `node tools/check-ja.js`
   stays at 0 errors, and `node tools/check-ja.js js/data/<one file>` works for each stub.
6. /home/claude/work/chk-023.js `<repo>`: loads the data like /home/claude/devtools/write/chk-017.js does and validates
   the PLAN shapes: lesson ids unique, `after` targets exist, review lessons have 12 quiz questions and others 5–7, quiz
   index in range and 3 options; LESSON_EXTRA keys are lesson ids, 3 mistakes / 6 more / 6 quiz, wrong ≠ right;
   cloze: unique ids, lv valid, `l` is a lesson id of that level (warning if not), exactly one ＿ token, 4 distinct options
   containing `a`; transform: unique ids, type in the list, 3 wrong, `to`/`alt`/`wrong` all distinct and none equal to
   `from`; pairs: unique ids, type valid, a ≠ b, no duplicate pair, col has `en`; sound words: unique ids and words, group
   exists, `ex` contains the word (kana-insensitive is fine). Prints one line per problem with the FILE name (track which
   file each entry came from) and ends with "N error(s)". Copy it to /home/claude/devtools/write/chk-023.js.
7. Wiring in js/app.js (routes, NAV, BLURB), data/strings.js (`item.<key>` English + Japanese label in the notation, and
   `head.` strings like the others), Practice page tiles (V.practice in views.js), Progress "Practice scores" rows for
   state.done.build / cloze / transform / test / pairs / sounds: routes and labels are in PLAN section B. Menu keys:
   build, cloze, transform, test, pairs, sounds. Group the six with the existing practice items; keep the phone drawer
   scrollable (qa/drawer.py). Japanese labels (check them with `node tools/check-ja.js data/strings.js`):
   文《ぶん》 の 組《く》み立《た》て, 穴埋《あなう》め, 文《ぶん》 の 書《か》き換《か》え, レベル 別《べつ》 テスト, 言葉《ことば》 の ペア, 擬音語《ぎおんご》・擬態語《ぎたいご》.
8. QA: `bash /home/claude/devtools/qa/all.sh` is long; run instead: node --check on everything, check-ja (0 errors, same
   54 warnings), chk-017 (0), chk-023 (0), qa/routes.py, qa/lessons.py, qa/drawer.py, qa/heads.py, qa/shell-lang.py,
   qa/progress.py, qa/printpages.py, qa/placement.py (all: errors [] / no overflow), plus your own
   /home/claude/work/qa/lessons-extra.py: with a temporary `after`/`review` seed lesson and the `desu` extra, checks the
   order, the mistakes block (no speaker on the wrong line), More practice quiz, phone 390 px and desktop, dark mode, no
   raw 《 on the page; LOOK at two screenshots. Remove temporary seed lessons afterwards (keep the seeds named in 1).
   Add routes for the six new pages to qa/routes.py's list if it has one.
Do not bump the version (the main chat does). Finish: files changed, how order / extras / reviews work (function names),
the exact API of App.fillBlank, QA lines, anything unsure.
