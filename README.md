# Hanashimashō dev tools (not published with the site)

Branch `dev-tools` of isaymotion/Japanese. The site is on `main`; this branch only holds test and porting helpers.
`tools/AUTHORING.md` and `tools/check-ja.js` live on `main`.

## Layout
- `HANDOFF.md` — how to continue the project in a new chat.
- `qa/` — Playwright checks. Serve the site first: `cd <repo main checkout> && python3 -m http.server 8765 &`, `mkdir -p /tmp/qa-out`.
  - `routes.py` every main screen at phone size (expect `rawNotation 0 | overflow False` on each line, `errors 0`)
  - `psych.py` every psychiatry section and case simulation (prints counts; expect `errors []`)
  - `tools.py` every clinical tool and practice case (expect `errors []`, no Spanish)
  - `flows.py` lesson quiz, verb / particle / kana drills, flashcards, reading-aid switches, menu
  - `clickthrough.py` clicks every control on each tool (expect `new errors 0`)
- `port/` — for porting a Hablemos (Spanish) data file to Japanese.
  - `TOOLS-BRIEF.md` the translator brief
  - `cmp-struct.js` structure compare: run from the main checkout,
    `node <dev-tools>/port/cmp-struct.js <hablemos file> <japanese file> <GLOBALS> [--pick srcId=dstId,…]`
    (expects `Structure matches; no Spanish left.`). Set `JA_REPO` if not run from the repo root.
- The Spanish sources are the public repo `isaymotion/Hablemos` (clone it next to this one).
