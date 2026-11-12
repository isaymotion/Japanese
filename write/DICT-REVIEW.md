# Brief: independent review of dictionary files for Hanashimashō

You are the reviewer, not the writer. Find and FIX errors directly in the file(s) named in your task. The learner is a
beginner; a wrong reading or a wrong verb class teaches a mistake (the app conjugates verbs from the part of speech).
Repo: /home/claude/japanese. Edit only your file(s). Do not run git commands.

1. Read `/home/claude/work/DICT-BRIEF.md` (columns, allowed part-of-speech and category codes, rules).
2. Go through EVERY line and verify:
   - the word is a real, common, standalone word, in dictionary form, with the correct reading on every kanji run
     (rendaku, irregular readings, okurigana); a する-noun is listed without する and typed `vs` only if it is really used
     with する (otherwise `n`);
   - part of speech: v1 vs v5 is right (帰る, 走る, 切る, 入る, 知る, 要る, 減る, 焦る, 限る, 握る, 滑る, 蹴る, 照る, 参る, 散る, 混じる,
     喋る are v5; 着る, 見る, 居る, 起きる, 落ちる, 信じる, 感じる, 老いる are v1); ai / an right (きれい, 嫌い, 有名 are an);
     adverbs, counters, suffixes, phrases typed sensibly;
   - the English gloss is accurate, short and in dictionary style (verbs with "to"); main senses first;
   - the category fits the meaning (school words go in `money`; abstract nouns in `society`);
   - the level is plausible for the WORD (N5 everyday basics, N4, N3, C for clinical or advanced);
   - notes are true and useful, with furigana on any Japanese; delete doubtful ones;
   - content rules: no product names, doses, self-harm method words, or claims about Japanese law or services.
3. You may delete a line that is a proper name, not a real word, or a duplicate of another line in the file. Do not add
   lines and do not reorder lines.
4. After editing, from /home/claude/japanese, for each file:
```
node --check js/data/<file>.js
node tools/check-ja.js js/data/<file>.js        # 0 error(s)
node /home/claude/work/dictdup.js js/data/<file>.js    # 0 duplicate(s); if it reports any, delete the line in YOUR file
```
5. Final message: per file, the number of lines changed and a list of every change as `word: what was wrong → what you
   wrote` (group trivial gloss polish as a count), lines deleted, and anything you could not settle.
