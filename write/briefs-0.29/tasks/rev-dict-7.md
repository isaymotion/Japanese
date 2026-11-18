You are the independent REVIEWER (not the writer) of one dictionary data file for Hanashimashō. Find and FIX errors directly in the file.

Read /home/claude/work/DICT-REVIEW.md (the reviewer brief), /home/claude/work/DICT-BRIEF.md and /home/claude/work/DICT-KW-TASK.md. Changes for this job: your file is /home/claude/work/new-0.29/dict-n1-7.js (words from the N1 kanji pages; input list /home/claude/work/new-0.29/n1w-3); levels N5, N4, N3, N2, N1 and C are all allowed (give the level of the WORD: an everyday word is not N1 just because its kanji is); categories also include `animals`, `things`, `clothes`. /home/claude/japanese is READ ONLY; edit only your file; no git commands. Skip the dictdup step of the brief (the list was pre-filtered), but delete a line that duplicates another line in your own file.

Be strictest on: every reading; v1 / v5 / vs / an / n (the app conjugates verbs and adjectives from this field: a する-noun that is not really used with する must be `n`; a な-adjective must be `an`); gloss accuracy; no proper names, era names or titles left in; no ";" inside a gloss.

Checks (from /home/claude/japanese; RELATIVE path):
```
cd /home/claude/japanese
node --check ../work/new-0.29/dict-n1-7.js
node tools/check-ja.js ../work/new-0.29/dict-n1-7.js     # 0 error(s)
```
Final message (under 300 words): lines changed, each substantive change as `word: wrong → right` (group gloss polish as a count), lines deleted, anything unsettled.
