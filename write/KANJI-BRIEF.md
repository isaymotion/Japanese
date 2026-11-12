# Brief: write one kanji data file for Hanashimashō

You are writing ONE data file for a Japanese-learning web app used by a psychiatry resident who is a complete beginner.
Repo: /home/claude/japanese (do not touch any file other than the one you are assigned; do not run git commands).

1. Read `/home/claude/japanese/tools/AUTHORING.md` completely first: the Japanese notation rules (furigana in 《》 after
   every kanji run, readings in hiragana, correct reading for that word) and the section "Kanji files" at the end, which
   defines the exact line format.
2. Write the file named in your task, with a header comment exactly like this (fill in the level words):

```
/* Kanji: <level name> set. Format: tools/AUTHORING.md ("Kanji files").
   字 | meanings | on (katakana) | kun (hiragana, okurigana after a dot) | strokes | group | word=gloss; ... | note
   DRAFT: readings, meanings and example words are pending review by a native Japanese speaker. JLPT levels are approximate. */
window.KANJI_RAW = window.KANJI_RAW || [];
KANJI_RAW.push({ level: '<LEVEL>', text: `
...one line per kanji...
`});
```

3. Include EVERY kanji in your list exactly once, and no others. Order the lines by group (in the order the groups are
   listed in your task), and inside a group put the simplest and most common kanji first. Put a `# Group name` comment line
   before each group (lines starting with # are ignored).
4. Quality rules:
   - Readings must be standard and correct. On readings in katakana, kun readings in hiragana with a dot before okurigana.
     List only readings the learner will actually meet at about this level (usually 1–2 on, 0–2 kun). Do not list rare readings.
   - Stroke counts must be the standard (jōyō) counts. Count carefully.
   - Example words: three per kanji where possible, common everyday or clinical words, each containing the kanji, each with
     furigana on every kanji and the reading correct for that word (watch rendaku and irregular readings: 今日《きょう》,
     一人《ひとり》, 大人《おとな》, 三百《さんびゃく》). Prefer words that exist in the app dictionary: you can search it with
     `grep -n "WORD" /home/claude/japanese/js/data/dict-*.js` (the dictionary writes words in the same notation).
     Across the words, show the kanji's main readings (ideally one on-reading word and one kun-reading word).
     Do not use a word whose other kanji are much harder than the level unless it is a very common word.
   - Glosses: short plain English. No `;`, `=` or `|` inside a gloss.
   - Notes (8th field): only when useful (a look-alike kanji, an irregular reading, a clinical use). Most lines need none.
     If you cite a kanji or Japanese word in a note, it needs furigana too (e.g. `Do not confuse with 入《はい》る (enter).`).
   - No backticks, no `${`, and no `|` anywhere inside a field.
   - If you are not sure of a fact, choose a different example word you are sure of. Never guess a reading.
5. Check before you finish, from `/home/claude/japanese`:
```
node --check js/data/<your file>.js
node tools/check-ja.js js/data/<your file>.js      # must end with 0 error(s)
```
   Then confirm the count: the number of kanji lines must equal the number of kanji in your list, and re-read every line
   once more for wrong readings and wrong stroke counts.
6. Your final message: the file path, the number of kanji lines, the checker's last line, and a list of any kanji where you
   were unsure of something (reading choice, stroke count), so the reviewer can look at them.

Group names for N5 / N4 / N3 files (use exactly these, in this order):
Numbers and counting · Time and calendar · People and family · Body and health · Nature and weather · Places and directions ·
School and work · Actions · Describing · Things and food · Mind and feelings · Society and ideas

Group names for the clinical file (use exactly these, in this order):
Symptoms and body · Mind and perception · Medicines and treatment · Risk and safety · Alcohol and substances ·
Hospital and care · Describing and degree · Everyday words
