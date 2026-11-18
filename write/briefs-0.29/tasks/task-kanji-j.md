You are the WRITER of one kanji data file for Hanashimashō, a Japanese-learning web app for an English-speaking psychiatry resident.

Read /home/claude/work/KANJI-BRIEF.md (the writer brief) and the "Kanji files" section of /home/claude/japanese/tools/AUTHORING.md, and look at /home/claude/japanese/js/data/kanji-n1e.js as the model.

Your file: /home/claude/work/new-0.29/kanji-n1j.js, block `level: 'N1'`, header level words "JLPT N1, part j (the second 576 N1 kanji, about 115 a file)". Your list (115 kanji, most frequent first): /home/claude/work/new-0.29/n1j.txt. Every kanji of the list exactly once and no others. Groups: the twelve N5 / N4 / N3 group names of the brief, in that order.

N1 notes that go beyond the brief:
- These are the LESS frequent N1 kanji. Example words may be N1-level words, but choose the commonest word a clinician or newspaper reader meets; three words per kanji where three common ones exist, otherwise two (never pad with a made-up compound: if only one ordinary word exists, give it plus a common name or a common set phrase).
- Many of these kanji are met mainly in given names, surnames and place names (晋, 祐, 亮, 圭, 庄, 笹 …): give one or two very common names with the gloss "(surname)", "(given name)" or "(place name)" plus any ordinary word, and say so in the note ("Mostly in names.").
- Do not use as an example word any word that already appears with a DIFFERENT reading or gloss in the app: `grep -n "WORD" /home/claude/japanese/js/data/dict-*.js /home/claude/japanese/js/data/kanji-*.js` and reuse the app's reading and gloss where the word exists.
- Stroke counts are the standard jōyō counts; you may look a kanji up with
  `node -e "const k=require('/home/claude/ref/kd/kanji.json');for(const c of process.argv[1])console.log(c,k[c]&&k[c].strokes,k[c]&&k[c].readings_on,k[c]&&k[c].readings_kun)" 潤悼`
  (a reference list: a hint, not the authority on which readings to teach).
- Content rules: nothing graphic, no method detail, no product names or doses, no claims about Japanese law or services. For kanji like 凶, 刃, 縛, 獣, 餓, 虜, 辱, 窒 choose neutral, common words (凶作, 刃物 is fine as a plain noun, 束縛, 猛獣, 飢餓, 屈辱, 窒素).

/home/claude/japanese is READ ONLY (a test suite is running there): never write or run anything that writes there. Write only your one file. No git commands. Write every line by hand.

Checks (from /home/claude/japanese; the path must be RELATIVE):
```
cd /home/claude/japanese
node --check ../work/new-0.29/kanji-n1j.js
node tools/check-ja.js ../work/new-0.29/kanji-n1j.js        # must end 0 error(s)
node /home/claude/work/xcheck.js /home/claude/ref/kd/kanji.json /home/claude/japanese ../work/new-0.29/kanji-n1j.js   # hints: strokes and readings to look at
```
Confirm 115 kanji lines and that the set equals your list. Final message (short): file path, line count, the checker's last line, and the kanji you were unsure about.
