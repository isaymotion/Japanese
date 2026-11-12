# Hanashimashō — handoff (13 Nov 2026, after version 0.8.1)

## 1. Project and audience
Hanashimashō (話しましょう, "let's talk") is the Japanese sister app of Usap Tayo (Tagalog) and Hablemos (Spanish), for Dr. Isabella Navarro: Japanese from zero (heavy on grammar and vocabulary, furigana on every kanji) plus the psychiatric interview in Japanese. Learner is a complete beginner.
- Repo `isaymotion/Japanese`, branch `main` (site), branch `dev-tools` (helpers, this file). Live: https://isaymotion.github.io/Japanese/
- Sister repos (public, read-only reference): `isaymotion/Hablemos` (engine and data were ported from here), `isaymotion/Tagalog`.
- Load the skills `isaymotion-app-design`, `isaymotion-study-app`, `usap-tayo-integration` before changing the app.

## 2. Fixed rules
- Attribution, exact: `App created by Isabella Navarro, MD. Latest version <Month YYYY>. isaymotion@gmail.com`.
- Storage prefix `hanashimasho.` (progress key `hanashimasho.v1`), cache prefix `hanashimasho-`. `sw.js` deletes only its own prefix. Version must agree in `data/app-meta.js`, newest entry of `data/changelog.js`, and `VERSION` in `sw.js`; bump on every publish.
- Colour: wisteria violet hue 268, sakura rose accent. Plain HTML/CSS/JS, no build step, no accounts or tracking.
- Hospital details generic: `data/hospital.js` blank, no crisis line preset. In content say "the local crisis line"; only number allowed is 119 (`｜119番《ひゃくじゅうきゅうばん》`).
- All Japanese is DRAFT until a native Japanese-speaking clinician reviews it; every data file header says so.
- Phrase indexes are IDs: append only, never insert or reorder. Section ids and numbering mirror Usap Tayo.
- Scale items (PHQ-9, MDQ, CIWA-Ar, COWS, AUDIT-C…) are conversational paraphrases, never the published Japanese wording. Cognitive items avoid HDS-R / MMSE content.
- English clinical reference text ported from Hablemos stays unchanged; only patient-facing lines are Japanese. Do not add Japan-specific legal or service claims: write "follow local law and your hospital's policy".
- No method detail, product names or doses in risk and medicine-misuse content.
- Her preference: use subagents (Opus/Sonnet) for content writing and for independent review; the main chat keeps design, clinical decisions and final review. Commit trailers as the session's system reminder says.

## 3. Architecture and data formats
```
index.html  css/style.css  sw.js  manifest.webmanifest  icons/  README.md
data/app-meta.js changelog.js hospital.js strings.js
js/ja.js          furigana + romaji + word spacing (MutationObserver renders the notation everywhere)
js/conjugate.js   verb/adjective forms by rule       js/lang.js  language pack (LANG.sectionOrder = display order)
js/core.js views.js app.js psych-views.js point-listen.js        shared engine (from Hablemos)
js/kana.js grammar.js                                            kana trainer; verb/adjective trainer, particle drill
js/handout.js mse-sheet.js   printable handout builder (#/psych/handout) and MSE interviewer sheet (#/psych/mse-sheet); data psych-flow.js, psych-mse-sheet.js. No PDF library: App.printWith(size, margin) sets @page and calls window.print(); App.printPage() prints a lesson, reading or the kanji list (html.pr-page print rules)
js/kanji.js       kanji chart (#/kanji?lv=N5|N4|N3|C), kanji page (#/kanji/k/字), four-mode drill (?tab=drill); parser, decks and search entries are in core.js (App.KANJI, ids "k:字", state.kanji)
js/mood.js sud.js withdrawal.js deesc.js discharge.js mse-practice.js discharge-practice.js   clinical tools
js/data/*.js      all content        tools/AUTHORING.md  tools/check-ja.js
```
**Japanese notation (every Japanese string):** reading in 《》 after each kanji run, one space between words, particles separate, space after 、。 inside a string, no romaji: `私《わたし》 は 医者《いしゃ》 です。` Non-kanji base: `｜3時《さんじ》`. Blank: `＿`. Full rules: `tools/AUTHORING.md`.
- Dictionary `dict-*.js`: `食《た》べる | to eat | v1 | verbs | N5 | note` (pos: n v1 v5 vs vi ai an adv pron part conj interj num ctr q pre suf phr).
- Lessons `lessons-1..11.js` + `lessons-kanji.js` (script order = lesson order; 4–7 are N4, 8–11 are N3): `{ id, level:'Starter'|'N5'|'N4'|'N3', unit, title, summary, draft:true, body:HTML, quiz:[[q,[opts],idx,why]] }`; examples `<div class="ex"><b>JA</b><span>EN</span></div>`.
- Dictionary ids are stable: the four original files are frozen (no added or removed lines), every later file (`dict-kanji-1..5`, `dict-n3-1`, `dict-n3-2`) is append only (AUTHORING.md, "Dictionary files"). `check-ja.js` validates part of speech, category and level.
- Reading `reading.js`, `reading-2.js`, `reading-3.js` all push to `READING`.
- Kanji `kanji-n5|n4|n3a|n3b|n3c|clinical.js`: one line per kanji, `字 | meanings | on | kun (dot before okurigana) | strokes | group | word=gloss; … | note`, pushed to `KANJI_RAW` with `level: 'N5'|'N4'|'N3'|'C'` (AUTHORING.md, "Kanji files"; `check-ja.js` validates every field and rejects duplicates).
- `verbs.js`: `JA_VERBS {d,g:'ru'|'u'|'suru'|'kuru',en,lv,clin?,ex}`, `JA_ADJ {d,t:'i'|'na',…}`. `particles.js`: `JA_PARTICLES {guide, items:{s,a,opts,en,why,lv}}`.
- `reading.js`, `dialogues.js`, `meta.js` (PLACEMENT levels S, N5a, N5b, N4).
- Psych phrases `psych-phrases-1..6.js`: `P(en, f /*polite*/, c /*plain*/, n)`. Replies `psych-answers.js`, `-2.js`: `[ja, en, note?]`. Cases `psych-cases-1.js`, `-2.js` (+ `PSYCH_INTERP`). Technique links `psych-shea.js`.
- Tools data `psych-mood|sud|withdrawal|deesc|discharge|admit-mse.js`; practice `psych-mse-cases.js`, `psych-discharge-cases-1.js`, `-2.js`. Shapes are in each file's header.
- Fictional patients: Shota Takahashi (psychosis; mother Mrs. Takahashi), Yumiko (depression; sister Noriko), Ren (mania; girlfriend Misaki), Shigeru Yamada (delirium; daughter Keiko), Tetsuo Yamamoto (alcohol; daughter Haruka), Daisuke Sato (agitation), Ayaka Nakamura (over-the-counter medicine misuse).

## 4. Per-unit recipe
1. `git clone` main; clone Hablemos beside it if porting.
2. Writers (subagents): give each ONE file, the path to `tools/AUTHORING.md`, the exact shape, and the check commands. Ready briefs are in `write/` on this branch: `LESSON-BRIEF.md` + `LESSON-REVIEW.md`, `KANJI-BRIEF.md` + `KANJI-REVIEW.md`, `READING-BRIEF.md` + `READING-REVIEW.md`, `DICT-BRIEF.md` (+ `DICT-KW-TASK.md` for turning kanji example words into entries) + `DICT-REVIEW.md`, with `dictdup.js` (duplicates) and `kwords.js` (kanji words missing from the dictionary) (they use the paths /home/claude/japanese and /home/claude/work; copy `write/` to /home/claude/work or edit the paths). Pass the writer's "unsure" list to the reviewer. For a Hablemos port use `port/TOOLS-BRIEF.md` + `port/cmp-struct.js` (copy the source file, translate only target-language strings in place).
3. Register new files in `index.html` (data before `js/audio-key.js`; modules after `js/point-listen.js`) and in the `FILES` list of `sw.js`; new section ids go in `LANG.sectionOrder` (`js/lang.js`); routes, `NAV`, `BLURB` in `js/app.js`.
4. Independent reviewers (fresh subagents, never the writers): fix readings, grammar, naturalness, score/answer keys; remove unverifiable claims.
5. Bump version (three places), add a changelog entry, update README. `python3 write/release.py <repo> <version> <date> <title> <items.json>` does the three places and the changelog entry; `python3 write/reg.py <repo> <after-n> <n>…` registers lessons-N files in index.html and sw.js.
6. Run all checks (section 5), look at screenshots, commit, push `main`. Update this file and `claude/hanashimasho-build-notes.md`.

## 5. Commands
```
git clone https://github.com/isaymotion/japanese && cd japanese
git worktree add ../devtools origin/dev-tools          # helpers
for f in js/*.js js/data/*.js data/*.js sw.js; do node --check $f; done
node tools/check-ja.js                                  # must end "0 error(s)"; ~12 known warnings (long clinical terms) are fine
python3 -m http.server 8765 &  ;  mkdir -p /tmp/qa-out  # pip install playwright if missing
bash ../devtools/qa/all.sh          # everything below in one go, one line per check; details in /tmp/qa-out/*.txt
python3 ../devtools/qa/routes.py   # 46 lines "rawNotation 0 | overflow False", "errors 0"
python3 ../devtools/qa/psych.py    # "39 707 7 32 27 314" style counts, "errors []"
python3 ../devtools/qa/tools.py ; python3 ../devtools/qa/clickthrough.py ; python3 ../devtools/qa/flows.py
python3 ../devtools/qa/kanji.py    # chart, every kanji page, 4 drill modes, cards, search: "errors []", "pages with problems []"
python3 ../devtools/qa/handout.py  # every handout preset and the MSE sheet printed to PDF in /tmp/qa-out (page counts): "errors []"
python3 ../devtools/qa/printpages.py  # lesson, reading and kanji list printing; reading filter
python3 ../devtools/qa/lessons.py  # every lesson page at phone width, links, quiz keys: "bad []", "dead links []", "errors []"
SK=$(find /root/.claude/skills -maxdepth 4 -type d -name isaymotion-app-design | head -1)
python3 $SK/scripts/check_design.py . --browser   # "PASS — design contract met"; then rm -rf _qa
python3 $SK/scripts/check_sw.py .                  # PASS
# kanji reference cross-check (hint only): git clone https://github.com/davidluzgouveia/kanji-data ref/kd
node ../devtools/write/xcheck.js ref/kd/kanji.json . js/data/kanji-n5.js
```

## 6. Status (version 0.8.1, pushed)
| Area | Done |
|---|---|
| Reading aids | furigana (always / tap / off), romaji line, word spacing |
| Lessons | 86 in 26 units, with quizzes, level filter and Print: Starter 6, N5 21, N4 35, N3 24 |
| Kanji study | 719 kanji: N5 80, N4 166, N3 367, clinical 106; chart, page per kanji, 4-mode drill, printable list, decks |
| Kana trainer; verb/adjective trainer; particle drill | 100 verbs, 60 adjectives; 18 particles, 130 items |
| Dictionary | 3,437 words in 11 files (N5 ~700, N4 ~700, N3 ~1,560, clinical ~480) |
| Reading / dialogues / placement | 24 (Starter 2, N5 4, N4 7, N3 11) / 10 / 20 questions (placement still stops at N4) |
| Psychiatry sections | 39 sections, 707 phrases (27 interview + 12 tool sections) |
| Replies / cases / interpretation | 314 / 7 / 32 |
| Clinical tools | mood, substance use, withdrawal and agitation, de-escalation, discharge |
| Practice cases | 2 admission MSE, 4 discharge |
| Printables (0.7.0) | handout builder with 7 presets (A4 / Letter / A5 booklet / A6 card), MSE interviewer sheet, Print on lessons and readings, kanji list |
Versions this session: 0.4.0 kanji; 0.5.0 N4 lessons; 0.6.0 N3 lessons; 0.7.0 printable handouts; 0.8.0 readings and dictionary; 0.8.1 Japanese drinks in the alcohol notes (current, pushed).
Not done: fifth discharge case (opioid, deliberately skipped), recorded audio pack (GitHub Action in Hablemos; AudioKey must hash `JA.speak(text)`), Japanese shell language (`data/strings.js` `tl: {}` is empty), N3 placement questions, N3 dialogues, stroke-order diagrams.

## 7. Next steps
**Next (chosen by Dr. Navarro, 13 Nov): the recorded audio pack. Next version 0.9.0.** Model: `isaymotion/Hablemos` (`.github/workflows/audio-pack.yml`, `tools/collect-texts.js`, `tools/make_audio_pack.py`, README section "Audio pack"). The app side is already there: `App.loadAudioPack` reads `audio/manifest.json`, and `App.speakAsync` plays `audio/<AudioKey(JA.speak(text))>.mp3` when the key is in the manifest, else the device voice (`js/core.js` near line 290; setting `voiceSource`).
1. `tools/collect-texts.js`: load `js/ja.js` in node (check it loads without a DOM, as `tools/check-ja.js` does) and every data file; collect every string the app can speak, as the Hablemos collector does, plus what is new here: dictionary headwords (11 files), lesson `.ex` lines, readings (3 files), dialogues, kana trainer items, verb/adjective examples (`verbs.js`), particle items, kanji example words (`kanji-*.js`), psych phrases f and c, replies, cases, interpretation, tools data, practice cases, MSE sheet `tl` lines, `LANG.testLine`. Write `tools/texts.json` as `[{ key, text }]` with `text = JA.speak(notation)` and `key = AudioKey(text)`; skip strings with the blank `＿`.
2. `tools/make_audio_pack.py`: copy from Hablemos; `speakable()` must accept kana and kanji; voices `ja-JP-NanamiNeural` (default) and `ja-JP-KeitaNeural` via `edge-tts`. Decide what text is sent to the voice: the kanji text reads most naturally, but ambiguous kanji (何, 方, 辛い, 今日, 一日, counters) can be misread; consider sending the kana reading for single dictionary words and short phrases, or a per-string override map. Whatever is sent, the file name stays the hash of `JA.speak(text)`.
3. Workflow `.github/workflows/audio-pack.yml` (rename to Japanese; same triggers). The sandbox cannot reach the voice service, so clips are recorded on GitHub: after the push, check the Actions run (or ask her to press Run workflow). A push that adds a workflow file may be refused if the session token lacks the workflow permission; if so, give her the file to add in the GitHub web editor.
4. Expect roughly 8,000 to 9,000 clips (Hablemos: 4,877 clips, 112 MB). Check the size against GitHub Pages limits (1 GB site); use a lower bitrate or leave long reading paragraphs to the device voice if needed. `sw.js` must not precache `audio/`.
5. README section, changelog 0.9.0, Settings text for the voice source, tests (`qa/` script that stubs a manifest and checks the clip path is used).
Then ask which is next:
- N3 placement questions (`meta.js` PLACEMENT stops at N4) and N3 dialogues (`dialogues.js` has 10).
- More verbs and adjectives in the trainer (`verbs.js` has 100 / 60; the dictionary now has several hundred).
- Stroke-order diagrams (needs a licensed data set such as KanjiVG, CC BY-SA).
Pending her answers: the clinical-content list in `claude/hanashimasho-build-notes.md`, now including the changes made on the MSE sheet in 0.7.0.

## 8. Pitfalls learned
- Opus subagents hit a 5-hour usage limit twice with 6–8 running at once. Resume them with SendMessage after the reset; their files are saved. Run fewer at a time.
- `check-ja.js` reads every string, so kanji inside English notes also needs furigana.
- `ja.js`: text nodes are converted by a MutationObserver; containers with `data-norj` get no romaji (kana quiz, where romaji is the answer), `data-noja` are left alone. Read titles with `JA.textOf(el)`; speak with `JA.speak(text)`.
- は / へ / を must be separate words or romaji says ha / he / wo. 母《はは》 warnings are false positives.
- `…` and `―` are treated as Japanese punctuation (fixed in 0.2.0).
- A data file that only extends a global needs a guard (`window.X = window.X || …`) so `check-ja.js` can load it alone.
- In Playwright, click sticky top-bar buttons with `page.mouse.click`.
- A 403 console line in tests is the Google Fonts request through the sandbox proxy; ignore it.
- WebFetch of the live site needs the user's approval and only shows page text.
- Never print a local server's log or a whole diff into the chat: start the server with `(nohup python3 -m http.server 8765 >/dev/null 2>&1 &)` and send test output to /tmp/qa-out/*.txt (all.sh does this).
- `.btn` and `h1.has-pin` are flex containers: Japanese text becomes several spans, so anything with a long Japanese title inside one must be wrapped in a single span or set to `display:block` (fixed for lesson titles and previous/next buttons in 0.5.0). `lessons.py` checks every lesson page for overflow; `routes.py` only samples.
- Lesson `.ex` blocks are a grid with the speaker button in column 2; `b` and `span` are pinned to column 1 in CSS.
- A kanji's JLPT level is approximate; the lists came from the kanji-data reference set (N5 80 incl. one extra, N4 166, N3 367) and the clinical set is the most frequent beyond-N3 kanji in the psych data files.
- Printing: Chromium ignores `@page { size: A6 }`, so A6 is written as `105mm 148mm`. `.btn`-like flex rules also bit `.ms-obs span` (every furigana span became a block); nested spans from ja.js need `display:inline` wherever a rule styles `span` generically. The MSE sheet prints in flowing CSS columns (about 8 A4 pages with furigana), not the fixed 4 pages of the Spanish sheet.
- Background servers and other processes die between turns: restart `http.server` before testing. Do not `git stash` while subagents are writing files.
- `sed` with multi-byte bracket sets corrupts UTF-8 in this sandbox's locale; use Python or node for text with Japanese.
- Sonnet did the mechanical dictionary conversion (5 files, ~1 minute each) well; Opus reviewed. Six Opus agents at once ran without hitting the usage limit this time.
- A long session can be restarted mid-task: check `git status` in /home/claude/japanese for uncommitted work before redoing anything.

## 9. Files to re-attach
None. Everything needed is in the two repos (`isaymotion/Japanese` both branches, `isaymotion/Hablemos`).
