# Coder P1: js/pictures.js (Picture words)
Follow COMMON-CODE-24.md. You own js/pictures.js (+ your CSS block). Build PLAN B "#/pictures":
- List page: sets grouped by group (titles: Body, Home, Town and buildings, Animals, Machines and vehicles, Food,
  Clothes and colours, Nature and weather, Daily life), level seg All / N5 / N4 (state.settings.picLv), each set a tile
  with its title, level pill, word count and best scores; a link to the body map (#/pictures/bodymap) at the top of Body.
- Set page with tabs Learn / Identify / Label it / Listen and point / Print (the Print tab calls
  `App.picturePrint && App.picturePrint.sheet(el, set)`; hide the tab when that is missing).
  Diagram: responsive inline svg `viewBox="0 0 w h"` with the art and numbered pins from parts x/y. Cards: a grid of
  big emoji cards (emoji about 44 px; `font-family` with the usual emoji fonts).
  Learn: tap pin / card → a panel under the picture: word (furigana), English, speaker (auto-speaks on tap), level pill,
  "Open in dictionary" when App.DICT has an entry whose `tl` equals `w` (link as the dictionary links elsewhere do), and
  the whole word list under the picture (tap a row = highlight its pin). Diagram pins show numbers; the list is numbered.
  Identify: prompt = the word (shown + spoken; a seg "Read / Listen only" hides the text), tap the right pin / card;
  wrong tap: the pin shakes and counts as a miss, then the right one is shown; 10 per round or all parts if fewer.
  Label it: one pin / card highlighted, Choose = 4 words (distractors from the same set, same part of speech if
  possible) or Type (accept kana, romaji, or the kanji form; reuse the normaliser the 0.23.0 "Type it" vocabulary mode
  uses in js/vocab.js or js/listen.js). Feedback shows the word, English, speaker.
  Listen and point: a `say` sentence is spoken, text hidden; tap the pin / card; then show the sentence, English, speaker.
- `App.pictures = { sets(), get(id), svg(set, opts), embed(el, setId) }`: embed = the Learn picture (pins + panel, no
  tabs) with a link "Practise this picture" to the set page; used inside lessons (`.pic-embed`), must work several
  times on one page and when printed (pins print as numbers with the word list under the picture).
  `App.pictures.svg(set, { pins: 'numbers'|'dots'|'none', highlight })` returns the svg markup: the print coder uses it.
- Scores: best % per '<mode>:<set id>' in state.done.pictures; misses '<set>:<part>'.
