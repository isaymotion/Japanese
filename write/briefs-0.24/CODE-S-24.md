# Coder brief S: scaffold for 0.24.0 (runs FIRST, alone)
Read /home/claude/devtools/write/briefs-0.17/COMMON-CODE.md (conventions, testing; ignore its "main chat already did"
paragraph: in this build YOU do the wiring), /home/claude/devtools/write/briefs-0.23/CODE-S-scaffold.md (the same job
one build ago: copy its approach) and /home/claude/work/briefs-0.24/PLAN-0.24.md (all of it). Work in
/home/claude/japanese (branch wip-0.24.0 is checked out). No git commands except `git status` / `git diff --stat`.
Other agents start when you finish and each will own ONE of the stub files you create, so stubs and wiring must be complete.

1. Stub data files in js/data/, each with a header comment (what it is, "DRAFT FOR REVIEW by a native Japanese speaker",
   the exact shape from PLAN section A, "append only after release") and an empty wrapper that loads alone in node:
   picture-sets-body.js, -home.js, -town.js, -animals.js, -machines.js, -food.js, -clothes.js, -nature.js, -daily.js,
   picture-bodymap.js, signs.js, signs-panels.js, lessons-36.js, -37.js, -38.js (wrapper as lessons-32.js),
   dict-words-3.js, -4.js, -5.js (wrapper `window.DICT_RAW = window.DICT_RAW || []; window.DICT_RAW.push(\`\n\`);` as
   dict-words-2.js), examples-18.js, -19.js, -20.js (as examples-17.js), topic-sets-5.js (as topic-sets-4.js).
   Art stubs in a NEW folder pictures/: art-body.js … art-daily.js (same nine group names; PLAN A2), plus
   pictures/README.md (two lines: what the folder is, that it holds no Japanese and is outside js/data so that changing
   art does not start the recording job).
   Seeds marked `/* seed: writers replace */`: in picture-sets-town.js the set `positions` with 4 parts and 2 say lines
   and a simple matching drawing in pictures/art-town.js; in picture-sets-animals.js the cards set `pets-farm` with 4
   parts and 2 say lines; in signs.js 1 group with 3 signs; in signs-panels.js the `washer` panel with 4 controls and 2 tasks.
2. Stub modules js/pictures.js (V.pictures for #/pictures and #/pictures/<id>), js/picture-print.js (print tab and
   #/pictures/bodymap; may be a function the pictures module calls), js/signs.js (V.signs): heading, breadcrumb,
   "Coming in this build" so routes work. Register everything in index.html (data before js/audio-key.js; the lessons
   files BEFORE lessons-zz-order.js; pictures/art-*.js as plain script tags next to the data; modules after the existing
   practice modules) and in sw.js FILES (/home/claude/work/regnew.py and reg.py can help). Every src in index.html must
   be in sw.js.
3. Dictionary categories: add `animals` ("Animals"), `things` ("Things and machines"), `clothes` ("Clothes") to App.CATS
   in js/core.js and to DICT_CAT in tools/check-ja.js and to tools/AUTHORING.md; check that the dictionary page, decks
   and vocabulary quiz cope with categories that have no words yet.
4. Lesson picture embed: after V.lesson renders (and in print), every `.pic-embed[data-pic]` gets
   `App.pictures.embed(el, setId)` when App.pictures exists (the pictures coder writes embed; your stub embed shows the
   set title and a link to #/pictures/<id>). An unknown set id shows nothing and logs no error.
5. tools/collect-texts.js: add PICTURE_SETS parts `w` and say `ja`; SIGNS signs `ja`; SIGN_PANELS control `ja`;
   PICTURE_BODYMAP ask / words `ja`. New lessons, dictionary, examples are picked up already: verify with the seeds.
6. tools/check-ja.js must load and check the new files and globals (PICTURE_SETS, PICTURE_BODYMAP, SIGNS, SIGN_PANELS;
   it must NOT read pictures/); `node tools/check-ja.js` stays at 0 errors with the same 54 warnings, and
   `node tools/check-ja.js js/data/<one file>` works for each stub.
7. /home/claude/work/chk-024.js `<repo>`: loads data like /home/claude/devtools/write/chk-023.js and validates PLAN shapes,
   one line per problem naming the FILE, ending "N error(s)" (warnings separate):
   sets: unique ids; group = the file's group; kind valid; lv N5|N4; 8–16 parts (cards 10–16); unique part ids; `w` has
   no spaces unless it is a verb phrase, and is not repeated inside the set; part lv N5|N4|N3 and at most a quarter N3;
   diagram: `art` exists in PICTURE_ART (load pictures/art-*.js), x/y numbers inside vb with a 12-unit margin, every
   pair of pins at least 26 units apart, art svg has no <text>, <script>, <style>, <image>, href, id=, and only the
   allowed paints, size under 9 KB; cards: `pic` is present, is not repeated in the set, no x/y; say: 6–10, `p` is a
   part id, ja non-empty and not repeated, warning when a part is the answer of more than 2 sentences;
   signs: unique ids, group exists, style valid, ja not repeated in a group; panels: unique control ids, 6–12 controls,
   5–6 tasks, `a` is a control id whose kind is not lamp; bodymap: sets exist, 8 ask, 10 words;
   lessons-36..38: `after` exists, `.pic-embed` ids are set ids (warning while sets are still stubs).
   Copy it to /home/claude/devtools/write/chk-024.js.
8. Wiring in js/app.js (routes #/pictures, #/pictures/<id>, #/pictures/bodymap, #/signs; NAV; BLURB), data/strings.js
   (`item.pictures`, `item.signs` English + Japanese labels from PLAN B, and `head.` strings like the others), Practice
   page tiles in a section "Pictures" (V.practice in views.js) and a Home tile if Home lists practice pages, Progress
   "Practice scores" rows for state.done.pictures / signs (ignore non-number values such as `miss`). Search: picture set
   titles and sign meanings findable if the search index has a simple hook (skip if not). Keep the phone drawer scrollable.
9. QA: node --check on everything, check-ja, chk-017 (0), chk-023 (0), chk-024 (0 with the seeds), qa/routes.py (add the
   new routes to its list), qa/lessons.py, qa/drawer.py, qa/heads.py, qa/shell-lang.py, qa/progress.py (all: errors [] /
   no overflow; run them one or two at a time, each under 10 minutes; start the server as COMMON-CODE says).
Do not bump the version (the main chat does). Finish: files changed, the exact stub paths, how embed is called, QA lines,
anything unsure. Keep the report under 40 lines.
