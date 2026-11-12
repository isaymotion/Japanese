# Hanashimashō — handoff (13 Nov 2026, after version 0.3.0)

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
js/mood.js sud.js withdrawal.js deesc.js discharge.js mse-practice.js discharge-practice.js   clinical tools
js/data/*.js      all content        tools/AUTHORING.md  tools/check-ja.js
```
**Japanese notation (every Japanese string):** reading in 《》 after each kanji run, one space between words, particles separate, space after 、。 inside a string, no romaji: `私《わたし》 は 医者《いしゃ》 です。` Non-kanji base: `｜3時《さんじ》`. Blank: `＿`. Full rules: `tools/AUTHORING.md`.
- Dictionary `dict-*.js`: `食《た》べる | to eat | v1 | verbs | N5 | note` (pos: n v1 v5 vs vi ai an adv pron part conj interj num ctr q pre suf phr).
- Lessons `lessons-1..3.js`: `{ id, level:'Starter'|'N5'|'N4', unit, title, summary, draft:true, body:HTML, quiz:[[q,[opts],idx,why]] }`; examples `<div class="ex"><b>JA</b><span>EN</span></div>`.
- `verbs.js`: `JA_VERBS {d,g:'ru'|'u'|'suru'|'kuru',en,lv,clin?,ex}`, `JA_ADJ {d,t:'i'|'na',…}`. `particles.js`: `JA_PARTICLES {guide, items:{s,a,opts,en,why,lv}}`.
- `reading.js`, `dialogues.js`, `meta.js` (PLACEMENT levels S, N5a, N5b, N4).
- Psych phrases `psych-phrases-1..6.js`: `P(en, f /*polite*/, c /*plain*/, n)`. Replies `psych-answers.js`, `-2.js`: `[ja, en, note?]`. Cases `psych-cases-1.js`, `-2.js` (+ `PSYCH_INTERP`). Technique links `psych-shea.js`.
- Tools data `psych-mood|sud|withdrawal|deesc|discharge|admit-mse.js`; practice `psych-mse-cases.js`, `psych-discharge-cases-1.js`, `-2.js`. Shapes are in each file's header.
- Fictional patients: Shota Takahashi (psychosis; mother Mrs. Takahashi), Yumiko (depression; sister Noriko), Ren (mania; girlfriend Misaki), Shigeru Yamada (delirium; daughter Keiko), Tetsuo Yamamoto (alcohol; daughter Haruka), Daisuke Sato (agitation), Ayaka Nakamura (over-the-counter medicine misuse).

## 4. Per-unit recipe
1. `git clone` main; clone Hablemos beside it if porting.
2. Writers (subagents): give each ONE file, the path to `tools/AUTHORING.md`, the exact shape, and the check commands. For a Hablemos port use `port/TOOLS-BRIEF.md` + `port/cmp-struct.js` (copy the source file, translate only target-language strings in place).
3. Register new files in `index.html` (data before `js/audio-key.js`; modules after `js/point-listen.js`) and in the `FILES` list of `sw.js`; new section ids go in `LANG.sectionOrder` (`js/lang.js`); routes, `NAV`, `BLURB` in `js/app.js`.
4. Independent reviewers (fresh subagents, never the writers): fix readings, grammar, naturalness, score/answer keys; remove unverifiable claims.
5. Bump version (three places), add a changelog entry, update README.
6. Run all checks (section 5), look at screenshots, commit, push `main`. Update this file and `claude/hanashimasho-build-notes.md`.

## 5. Commands
```
git clone https://github.com/isaymotion/japanese && cd japanese
git worktree add ../devtools origin/dev-tools          # helpers
for f in js/*.js js/data/*.js data/*.js sw.js; do node --check $f; done
node tools/check-ja.js                                  # must end "0 error(s)"; ~12 known warnings (long clinical terms) are fine
python3 -m http.server 8765 &  ;  mkdir -p /tmp/qa-out  # pip install playwright if missing
python3 ../devtools/qa/routes.py   # 36 lines "rawNotation 0 | overflow False", "errors 0"
python3 ../devtools/qa/psych.py    # "39 707 7 32 27 314" style counts, "errors []"
python3 ../devtools/qa/tools.py ; python3 ../devtools/qa/clickthrough.py ; python3 ../devtools/qa/flows.py
SK=$(ls -d /root/.claude/skills/synced/*/isaymotion-app-design)
python3 $SK/scripts/check_design.py . --browser   # "PASS — design contract met"; then rm -rf _qa
python3 $SK/scripts/check_sw.py .                  # PASS
```

## 6. Status (version 0.3.0, pushed)
| Area | Done |
|---|---|
| Reading aids | furigana (always / tap / off), romaji line, word spacing |
| Lessons | 37 in 10 units, with quizzes |
| Kana trainer; verb/adjective trainer; particle drill | 100 verbs, 60 adjectives; 18 particles, 130 items |
| Dictionary | ~1,600 words, 4 files |
| Reading / dialogues / placement | 10 / 10 / 20 questions |
| Psychiatry sections | 39 sections, 707 phrases (27 interview + 12 tool sections) |
| Replies / cases / interpretation | 314 / 7 / 32 |
| Clinical tools | mood, substance use, withdrawal and agitation, de-escalation, discharge |
| Practice cases | 2 admission MSE, 4 discharge |
Not done: printable handouts + MSE sheet (`handout.js`, `mse-sheet.js`, `psych-mse-sheet.js`, `psych-flow.js` in Hablemos; pdfmake needs a Japanese font, or use print CSS), fifth discharge case (opioid, deliberately skipped), kanji study module, recorded audio pack (GitHub Action in Hablemos; AudioKey must hash `JA.speak(text)`), Japanese shell language (`data/strings.js` `tl: {}` is empty).

## 7. Next steps
Ask Dr. Navarro which she wants; she has not chosen. Candidates in likely order:
1. Kanji study module (fits "heavy focus on reading"): new `js/data/kanji.js` + view; next version 0.4.0.
2. Handouts via print CSS (no PDF font needed).
3. Audio pack.
Also pending her answers on the clinical-content list in `claude/hanashimasho-build-notes.md` (US opioid practice, CMS wording, reviewer-changed chart details, two source mismatches, whether to restore the opioid case).

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

## 9. Files to re-attach
None. Everything needed is in the two repos (`isaymotion/Japanese` both branches, `isaymotion/Hablemos`).
