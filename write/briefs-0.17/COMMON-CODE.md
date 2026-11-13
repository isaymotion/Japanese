# Hanashimashō 0.17.0 — common rules for code builders

Repo: /home/claude/japanese (Japanese-learning PWA, plain HTML/CSS/JS, no build step). Read first:
- `/home/claude/devtools/HANDOFF.md` sections 2, 3 and 8 (rules, architecture, pitfalls) — skim, they are long.
- `js/core.js` (App helpers: esc, shuffle, pick, icons, App.state via App.state / S(), App.save, App.speak(notation, {rate}), App.sayBtn(notation), App.recordAnswer(ok, cardId) which puts misses in "My mistakes", App.activity(xp), App.DICT entries `{ id, tl, en, pos, cat, lv, note, kn }`, App.decks()), `js/views.js` (App.runQuiz(el, qs, opts): q = { q, opts, a, exp, say, hideQ, rate, tlq, tlo, sub, cardId }), and one module like `js/kana.js` or `js/point-listen.js` for the module pattern.
- Japanese notation: every Japanese string is written `食《た》べる` with spaces between words. `js/ja.js` renders it to ruby automatically (MutationObserver) in any text node, so you just put the notation into HTML via esc(). Anything going into an attribute, aria-label, title or confirm() must go through `JA.speak(s)` (plain text). A container with `data-norj` gets no romaji line (use it where romaji would give the answer away or overlap buttons). Plain kanji without furigana: `JA.speak(notation)`.
- Speak with `App.speak(notation)` (pass the NOTATION, not plain text: the recorded clip is found from it; the device voice is the fallback).
- Look and feel: reuse existing classes (`.card .stack .row .spread .grid .tile .seg .btn .btn.primary .btn.sm .opt .opts .feedback .pill .muted .small .notice .eyebrow .progress`). Add CSS only if needed, at the end of `css/style.css` under a comment `/* 0.17.0 <your module> */`, using existing tokens (var(--…)), and make it work in dark mode and at 360 px width. Breadcrumbs: `App.crumb` if present (see views.js `crumb`).
- English page text in the views (headings stay English: the shell translates headings itself).

The main chat already did: routes in js/app.js (`#/vocab` → V.vocab, `#/listen` → V.listen, `#/numbers` → V.numbers), menu items, Practice tiles, registration of the module and data files in index.html and sw.js, seed data files with their shapes in the header. DO NOT edit js/app.js, index.html, sw.js, data/*, tools/*, or any js/data file (the data files are being written by other agents in parallel; work with the seed data and, where told, the draft files in /home/claude/work/new/). Edit only the files your task names.

## Testing
- A static server should be running on port 8765 serving /home/claude/japanese (check `curl -s localhost:8765/ | head -c 50`; if not, start it with `(cd /home/claude/japanese && nohup python3 -m http.server 8765 >/dev/null 2>&1 &)` — never kill it, other agents share it).
- `for f in js/*.js; do node --check $f; done`.
- Write a Playwright QA script `/home/claude/work/qa/<module>.py` (python, sync API, chromium; model it on `/home/claude/devtools/qa/heads.py` or `kanji.py`): open every tab and mode of your page at 390×844 and 1280×900, click through a full round (answer right and wrong), assert no console errors (ignore a 403 from Google Fonts), no horizontal overflow (`document.documentElement.scrollWidth > innerWidth`), and no raw notation left in the page (`《` in `document.body.innerText`). Print `errors [...]` as the last line. Save a few screenshots to /tmp/qa-out/<module>_*.png and LOOK at them (Read tool) at phone width in light and dark (`localStorage` theme: see how other qa scripts set dark mode, or emulate `color_scheme='dark'`).
- App.speak in headless Chromium: the stubbed audio is fine; do not wait for sound.
- Never print a whole file or server log into your output.

## Finish
Reply with: files changed, what you built (short), the QA result lines, anything you were unsure about or left out. Do not commit or push.
