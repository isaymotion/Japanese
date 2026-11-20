# Coder brief — Immersion page, Hanashimashō 1.1.0

Work ONLY in /home/claude/ja-code (a copy of the site without audio/; the real repo at /home/claude/japanese is
running its baseline tests: do not touch it, and do not use port 8765). Serve your copy with
`(cd /home/claude/ja-code && setsid nohup python3 -m http.server 8770 >/dev/null 2>&1 &)`.
Read first: /home/claude/work/briefs-1.1/PLAN-1.1.md (page, data shape, rules), then in the copy: js/soundwords.js
(a small page module to model yours on), js/app.js (routes, TITLES, NAV, BLURB, V.practice tiles, MORE_KEYS,
t()/lbl() and App.heads), data/strings.js (`item.<key>`, `head.<…>` in `en` and `tl`; the `tl` block is JAPANESE in the
app notation with readings in 《》), js/core.js (App.searchDict, App.icons, state and save), css/style.css (reuse .seg,
.btn, .tile, .notice, .pill, .card classes; append your rules in ONE block at the end starting
`/* 1.1.0 immersion */`), index.html and sw.js (registration). Design rules: the skill folder found by
`find /root/.claude/skills -maxdepth 4 -type d -name isaymotion-app-design` (references/components.md).

Build
1. `immersion/sources.js`: a SEED file in the exact shape of the plan with about 8 invented-looking but harmless
   placeholder entries is NOT acceptable for URLs; use these real ones as seed only: NHK WORLD-JAPAN
   (https://www3.nhk.or.jp/nhkworld/), YouTube (https://www.youtube.com/), Tadoku (https://tadoku.org/japanese/en/free-books-en/).
   Give the seed 2 groups per tab, 6 sources (one with `yt: { v: 'M7lc1UVf-VE' }`, YouTube's own API demo video, to
   test the player), 4 caption-guide cards with placeholder steps, 6 tips. First line comment: `/* seed: main chat
   replaces this file */`. The main chat will overwrite the whole file with reviewed data in the same shape, so the
   page must be driven entirely by the data (groups, counts, kinds, which tabs have content).
2. `js/immersion.js` → `V.immersion` for `#/immersion`: everything in the plan. Details:
   - Source card: title, Japanese name (rendered by ja.js from the notation; container WITHOUT a romaji line →
     `data-norj`), pills for level range, kind, captions (Japanese captions / Japanese and English / automatic captions
     / no captions), "Japan only" style warning when `geo`, "Clinical" when `clin`; the one-line description; the tip;
     buttons: "Play here" (only when `yt` and online), "Open" (new tab, rel="noopener noreferrer"), star toggle
     (aria-pressed; `state.immersion = { fav: [ids] }`, saved with App's normal save so backup covers it).
   - Player: one at a time; opening another closes the first; a Close button; 16:9 responsive box; iframe attributes
     `allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"
     referrerpolicy="strict-origin-when-cross-origin" title="<source title> on YouTube"`. Under the player one line:
     "No captions? Tap CC on the player, or open the gear → Subtitles → Auto-translate → English. Not every video has
     captions." and a link to the captions tab.
   - Look-up box: an input (type kana, kanji, romaji or English) + results from `App.searchDict` (top 8: word in
     notation, English, level pill, link to its dictionary page `#/dict/<id>`); debounce 150 ms; when nothing is
     found, say so and offer "Search Jisho.org" (https://jisho.org/search/<encoded term>, new tab). Explain in one
     line: "Heard a word? Type it as it sounds." Keep the typed term when the tab changes (state in module scope).
   - Captions tab: cards from `IMMERSION.captions` (title, device, numbered steps, note, official link) and above
     them a short fixed paragraph: the app cannot translate speech itself; these are the free tools that can.
   - Tips: the tip for the chosen level shown as a small callout above the list ("How to use this at N5").
   - Empty states for a tab or filter with no sources. "Links checked: <month year>" from `checked`, and a line
     "Found a dead link? Tell Dr. Navarro" with the app's existing mailto address taken from app-meta (do not hardcode).
   - The `#view` element is reused by every page: check your own markup is still there before acting in handlers
     (see js/writing.js) and remove the iframe when the route changes (hashchange) so audio stops.
3. Wiring: route + TITLES + NAV (Practice group, after 'reply') + BLURB + a section "Immersion" with one tile on the
   Practice page (V.practice in js/app.js) + MORE_KEYS; search entry so the top-bar search finds "Immersion";
   strings `item.immersion` (en 'Immersion'; tl `イマージョン`) and `head.Immersion` if headings need it;
   index.html: `<script src="immersion/sources.js">` with the other non-js/data data (see how pictures/art-*.js are
   registered) and `js/immersion.js` after the last module; both in sw.js FILES. Do NOT bump the version, do not
   touch changelog or README (the main chat does).
4. QA script /home/claude/work/qa-1.1/immersion.py (Playwright, Chromium at /opt/pw-browsers; port from env QA_PORT
   default 8765; model it on /home/claude/devtools/qa/soundwords.py): at 360×740 and 1280×800, light and dark:
   every tab; no horizontal overflow; no raw notation (《》) visible; level filter changes the list; star adds the
   Mine tab and survives reload; look-up finds a common word by kana, by romaji and by English, links to its page,
   and shows the Jisho link for nonsense; "Play here" creates exactly one iframe whose src starts with
   https://www.youtube-nocookie.com/embed/ and carries cc_load_policy=1 (block the network request with
   page.route so the test does not need the internet), a second Play replaces it, Close removes it, leaving the page
   removes it; with the context offline the Play buttons are replaced by the notice; every external link has
   target=_blank and rel containing noopener; menu language Japanese shows the Japanese menu label; page has no
   element with [data-say]. Print "errors []" at the end (same style as the other QA scripts) and save
   screenshots /tmp/qa-out/imm_<width>_<theme>_<tab>.png. Use page.mouse.click for sticky top-bar buttons.
5. Run: your QA with QA_PORT=8770; `node --check` on changed files; `node tools/check-ja.js data/strings.js`;
   `SK=…; python3 $SK/scripts/check_design.py . --browser` (then rm -rf _qa) and `python3 $SK/scripts/check_sw.py .`
   in the copy. LOOK at four of your screenshots (Read tool) and fix what looks wrong (crowded pills, buttons under
   44 px, overflow).
Report: files changed or added (paths), anything in the plan you changed and why, QA output tail. Do not commit.
