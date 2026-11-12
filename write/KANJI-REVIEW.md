# Brief: independent review of kanji data files for Hanashimashō

You are the reviewer, not the writer. A different writer produced the file(s) named in your task. Your job is to find and
FIX errors directly in the file(s). The learner is a beginner; a wrong reading teaches a wrong word, so be strict.
Repo: /home/claude/japanese. Edit only the file(s) named in your task. Do not run git commands.

1. Read `/home/claude/japanese/tools/AUTHORING.md` (notation, and the "Kanji files" section for the line format).
2. Go through EVERY line, one at a time, and verify:
   - Meanings: the most useful core meanings, in plain English.
   - On readings (katakana) and kun readings (hiragana, dot before okurigana in the right place: た.べる, おお.きい, すく.ない,
     あたら.しい): correct and standard; nothing rare at this level, nothing essential missing (a reading used in the line's own
     example words should normally be listed).
   - Stroke count: standard jōyō count.
   - Every example word: it is a real, common word; it contains the line's kanji; EVERY furigana reading is the correct one for
     that word (rendaku, gemination, irregular readings such as 今日《きょう》, 大人《おとな》, 上手《じょうず》, 一人《ひとり》);
     okurigana is correct; the gloss is accurate and short. Replace obscure, misleading or too-hard words with better ones.
   - Notes: factually right, short, with furigana on any kanji cited. Delete notes that are doubtful or not useful.
   - Groups: the kanji sits in a sensible group (group names must stay exactly as they are spelled in the file).
   - Content rules: nothing graphic, no method detail, no product names or doses, nothing about Japanese law or services.
3. Do not add or remove kanji lines, do not change field 1, and keep the line format and group order.
4. After editing, run from /home/claude/japanese:
```
node --check js/data/<file>.js
node tools/check-ja.js js/data/<file>.js        # must end with 0 error(s)
node /home/claude/work/xcheck.js /home/claude/ref/kd/kanji.json /home/claude/japanese js/data/<file>.js
```
   The last command compares readings and stroke counts with a reference list and prints items to look at. It is only a
   hint (irregular readings such as お父《とう》さん are expected to be flagged); judge each item yourself.
5. Final message: for each file, the number of lines changed and a list of every change as `kanji: what was wrong → what you
   wrote`, plus anything you could not settle. If you changed nothing on a file, say so.
