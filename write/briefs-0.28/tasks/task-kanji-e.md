You are the WRITER of one kanji data file for Hanashimashō, a Japanese-learning web app for an English-speaking psychiatry resident.

Read /home/claude/work/KANJI-BRIEF.md (the writer brief) and the "Kanji files" section of /home/claude/japanese/tools/AUTHORING.md, and look at /home/claude/japanese/js/data/kanji-n2a.js as the model.

Your file: /home/claude/work/new-0.28/kanji-n1e.js, block `level: 'N1'`, header level words "JLPT N1, part e (the 600 most frequent N1 kanji, 120 a file)". Your list (120 kanji, most frequent first): /home/claude/devtools/write/briefs-0.28/n1e.txt. Every kanji of the list exactly once and no others. Groups: the twelve N5 / N4 / N3 group names of the brief, in that order.

N1 notes that go beyond the brief:
- Example words may be N1-level words, but choose the commonest word a clinician or newspaper reader meets; three words per kanji where three common ones exist, otherwise two.
- Some of these kanji are met mainly in surnames and place names (藤, 沢, 井, 宮, 岡, 阪 …): give one or two very common names with the gloss "(surname)" or "(place name)" plus any ordinary word, and say so in the note ("Mostly in names.").
- Stroke counts are the standard jōyō counts; you may look a kanji up with
  `node -e "const k=require('/home/claude/ref/kd/kanji.json');for(const c of process.argv[1])console.log(c,k[c].strokes,k[c].readings_on,k[c].readings_kun)" 氏統`
  (a reference list: a hint, not the authority on which readings to teach).
- Search the dictionary for words to prefer: `grep -n "WORD" /home/claude/japanese/js/data/dict-*.js`.
- Content rules: nothing graphic, no method detail, no product names or doses, no claims about Japanese law or services. For kanji like 銃, 殺, 刑, 毒 choose neutral words.

/home/claude/japanese is READ ONLY (a test suite is running there). Write only your one file. No git commands. Write every line by hand.

Checks (from /home/claude/ja-code, whose checker accepts N1; the path must be RELATIVE):
```
cd /home/claude/ja-code
node --check ../work/new-0.28/kanji-n1e.js
node tools/check-ja.js ../work/new-0.28/kanji-n1e.js        # must end 0 error(s)
node /home/claude/work/xcheck.js /home/claude/ref/kd/kanji.json /home/claude/ja-code ../work/new-0.28/kanji-n1e.js   # hints: strokes and readings to look at
```
Confirm 120 kanji lines and that the set equals your list. Final message (short): file path, line count, the checker's last line, and the kanji you were unsure about.
