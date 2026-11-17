# Common rules for 0.24.0 module coders (P1 pictures, P2 print and body map, G signs)
Read /home/claude/devtools/write/briefs-0.17/COMMON-CODE.md (conventions and testing: all of it applies),
/home/claude/devtools/write/briefs-0.23/COMMON-CODE-23.md ("Shared behaviour for every drill page" applies here too) and
/home/claude/work/briefs-0.24/PLAN-0.24.md sections A and B. The scaffold is done: routes, menu, strings, registration,
stub modules, stub data with seeds, lesson embed hook, tools, /home/claude/work/chk-024.js.
Edit ONLY the module file named in your brief, and css/style.css by APPENDING one block under `/* 0.24.0 <module> */`.
Do not edit js/app.js, index.html, sw.js, data/*, tools/*, js/views.js, js/core.js, any js/data file or pictures/ file:
writers are filling the data and art files in parallel, so they may be empty, partial or briefly broken while you work.
Your page must cope with an empty or partial global ("No pictures yet"; a diagram set whose art is missing shows its
words as a list) and for testing you keep your OWN fixture in /home/claude/work/fixtures/<module>.js (realistic data in
the PLAN shape, with your own small drawing) that your QA script injects with page.add_init_script AFTER the data
scripts would have loaded (wrap in a DOMContentLoaded-safe assignment, or route-abort the real data file and serve the
fixture); never write test items into js/data or pictures/.
- Colours: art uses currentColor and var(--surface); set `color` on the svg from the ink token so it works in dark mode.
  Pins: accent-coloured circles with a number, at least 44 px tap target on a phone (enlarge the hit area with a
  transparent circle), keyboard focusable (button role, Enter / Space), aria-label = number only in quiz modes (never
  the answer). Printed pages are always light.
- Japanese text is put into HTML in the notation through esc(); ja.js renders furigana. Where furigana or romaji would
  give an answer away, or text sits inside a button, use `data-norj`; for plain kanji use JA.speak(notation).
- Speak with App.speak(notation). In Listen modes the text stays hidden until answered, with a "Play again" button.
- Scores and misses as PLAN B says; App.save(). A "Practise my mistakes" round when the miss list has items.
- Phone first (390 px, also 360 px), dark mode, no horizontal overflow, no raw 《 in the page text.
QA script /home/claude/work/qa/<module>.py as COMMON-CODE says: phone + desktop, light + dark, every tab, right and wrong
answers, empty-data state, score saved and shown on #/progress, no console errors (ignore the Google Fonts 403), no
overflow, no raw 《》; last line `errors [...]`. It must also pass against the REAL data once writers finish, so do not
assert exact counts from your fixture. LOOK at screenshots (Read tool) at phone width, light and dark.
Finish: files changed, what the page does, the public functions, QA result lines, open points; under 30 lines. No git, no version bump.
