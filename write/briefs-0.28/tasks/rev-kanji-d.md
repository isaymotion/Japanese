You are the independent REVIEWER (not the writer) of one kanji data file for Hanashimashō, a Japanese-learning web app. Find and FIX errors directly in the file.

Read /home/claude/work/KANJI-REVIEW.md (the reviewer brief), /home/claude/work/KANJI-BRIEF.md (what the writer was asked) and the "Kanji files" section of /home/claude/japanese/tools/AUTHORING.md.

Your file: /home/claude/work/new-0.28/kanji-n1d.js (level N1, 120 kanji; its list is /home/claude/devtools/write/briefs-0.28/n1d.txt: the set of field-1 kanji must equal that list exactly). Edit only this file. /home/claude/japanese is READ ONLY. No git commands.

N1 additions to the brief: example words may be N1-level but should be the commonest words a clinician or newspaper reader meets; kanji met mainly in names may carry one or two very common names glossed "(surname)" or "(place name)"; two words are enough where no third common word exists; neutral words for kanji such as 銃, 殺, 刑, 毒 (nothing graphic, no method detail). Check with special care: stroke counts (use the xcheck hints and count yourself where they differ), every reading inside every word (rendaku, gemination, irregular and name readings), okurigana and the dot position in kun readings, that each word really contains the line's kanji, and that no word appears with two different readings across the file. Also check that a word's gloss is what a dictionary would say, since these words become dictionary entries.

Checks (from /home/claude/ja-code; RELATIVE path):
```
cd /home/claude/ja-code
node --check ../work/new-0.28/kanji-n1d.js
node tools/check-ja.js ../work/new-0.28/kanji-n1d.js        # 0 error(s)
node /home/claude/work/xcheck.js /home/claude/ref/kd/kanji.json /home/claude/ja-code ../work/new-0.28/kanji-n1d.js
```
Go through every xcheck item and judge it. The writer's own list of doubts follows this line in the task message if there was one; settle each. Final message (under 350 words): number of lines changed, every change as `kanji: what was wrong → what you wrote` (group trivial gloss polish as a count), and anything you could not settle.
