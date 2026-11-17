# Coder G: js/signs.js (Signs and buttons)
Follow COMMON-CODE-24.md. You own js/signs.js (+ your CSS block). Build PLAN B "#/signs" from SIGNS and SIGN_PANELS (A3):
- Learn: group seg; each sign drawn as a sign board in CSS by `style` (green: white on green; red: white on red; blue:
  white on blue; yellow: black on yellow with a border; plain: dark text on white with a border), big PLAIN text
  without furigana (`JA.speak(ja)` inside data-noja / data-norj so ja.js leaves it alone), like a real sign. Tap = show
  reading (furigana version), English, note, speaker. A switch "Always show readings". Boards keep their colours in
  dark mode. Group note on top. Kanji in a sign link to nothing (keep it simple).
- Quiz: seg group (All + groups), seg mode "Sign → meaning" (4 English options) / "Meaning → sign" (4 sign boards);
  10 or 20 per round; distractors from the same group first; feedback shows reading, English, note, speaker.
  Level seg All / N5 / N4 / N3 only for levels that exist.
- Panels: list of panels; a panel page draws the rows of controls as a device face (rounded panel, buttons with plain
  Japanese labels, lamps as small lights with a label, dials round). "Explore": tap a control → reading, English, speaker.
  "Tasks": each task `q` in English, tap the right control; wrong → shake + try shows the right one; `why` shown;
  score per panel. Lamps are not tappable in tasks.
- Scores: state.done.signs['quiz:<group|all>:<mode>'], ['panel:<id>'] = best %; `miss` = sign ids (max 200) with a
  mistakes round. Deep links: #/signs?tab=learn|quiz|panels, &g=<group>, &p=<panel id>.
