# Phone-menu fix for the sister apps: PUSHED on 13 Nov 2026 with Dr. Navarro's go-ahead

Live versions: Usap Tayo 3.1.2, Hablemos 0.6.1, Aklanon 0.1.3 (Aklanon had moved to 0.1.2 by itself, so only the CSS part of its patch was applied and the version was bumped with write/release.py). Each app's HANDOFF.md on its dev-tools branch has a note. The text below is kept as a record; nothing is left to do.

The phone menu (`.rail`) cannot scroll in Usap Tayo (`isaymotion/Tagalog` 3.1.1), Hablemos (0.6.0) and Aklanon (0.1.1),
the same fault fixed in Hanashimashō 0.12.1. Each patch changes one CSS rule and bumps the version (Tagalog 3.1.2,
Hablemos 0.6.1, Aklanon 0.1.2: app-meta.js, changelog.js, sw.js, README). Tested: every menu fits the screen and
scrolls to About at 390×844, 360×640 and 820×1180; check_sw PASS.

Push ONLY after Dr. Navarro says so (a push was refused when she had only asked to check them).

Apply (base commits: Tagalog 307469d, Hablemos a79b432, Aklanon 12cf31d; if main has moved, `git apply --3way`):
```
git clone --depth 1 https://github.com/isaymotion/Tagalog ../tagalog
cd ../tagalog && git apply ../devtools/sister-fixes/tagalog-menu-scroll.patch
python3 -m http.server 8771 &   ;  python3 ../devtools/qa/drawer-any.py 8771 tagalog   # "scrolls OK" three times
```
If the app's version has moved on since, re-run `write/release.py` with the next version instead of keeping the patch's
version lines. Known design-check failures that predate the fix: Hablemos `data/strings.js` has no `tl`; Aklanon has no
`data/hospital.js` and no maskable icon.
