# Coder A: Sentence builder (js/build.js) and Transform the sentence (js/transform.js)
Read COMMON-CODE-23.md first.
## Sentence builder, #/build → V.build
Source sentences (no new data): every `<div class="ex"><b>JA</b><span>EN</span></div>` in lesson bodies (lesson's level),
LESSON_EXTRA[id].more, and DICT_EX (level of the dictionary word); see how js/listen.js collects its "sentences" pool and
reuse that function if it is exported. Keep sentences of 4–12 tiles.
- Tiles are CHUNKS, not single words: a particle (は が を に で へ と も の から まで より か ね よ and similar one-word
  particles) joins the word before it; て-form + auxiliary (て います, で ください, て も いい) and です/ます endings stay with their
  word; final punctuation is removed from tiles and shown fixed at the end. Write `chunks(notation)` carefully and test it on
  200 random sentences (no empty chunk, joined text = original).
- The learner sees the English, hears nothing first, taps tiles from a shuffled tray into an answer line (tap again to
  send back; a Clear button). Check: exact chunk order = right. Japanese order is flexible, so when the answer differs only
  by the position of chunks before the final predicate, show "Also possible in Japanese; the lesson's order is:" as a
  neutral result (counted right) ONLY when the last chunk is in last place and every chunk is used; otherwise wrong.
  Then show the model sentence with furigana, speaker button, English, link to the lesson or word page.
- Options: level seg, source seg (Lessons / Word examples / Both), furigana on tiles on / off, "Hear it first" switch
  (plays the sentence before building = listening mode), hint button (places the next correct tile; that item is not
  counted right). No shuffles that equal the answer.
## Transform the sentence, #/transform → V.transform
Data GRAMMAR_TRANSFORM. Modes: Choose (the model answer + the 3 `wrong`, shuffled) and Type (kana or romaji; right if it
equals `to` or any `alt` after normalising; show a character-level hint of where it differs when wrong). Filters: level,
type (human labels: Negative, Past, Plain ↔ polite, Joining, Potential, Passive and causative, Keigo, Other: group the types).
Show `instr` large, `from` (two lines for an array) with speaker buttons, then the feedback block with `to`, `en`, lesson link.
