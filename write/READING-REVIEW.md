# Brief: independent review of a reading-passage file for Hanashimashō

You are the reviewer, not the writer. Find and FIX errors directly in the file named in your task. The learner is an
English-speaking psychiatry resident; a wrong reading or an unnatural sentence teaches a mistake, so be strict.
Repo: /home/claude/japanese. Edit only your file. Do not run git commands.

1. Read `/home/claude/japanese/tools/AUTHORING.md` (notation) and `/home/claude/work/READING-BRIEF.md` (what the writer
   was asked to produce, including the content rules).
2. Read every passage in full, slowly, and verify:
   - the Japanese is grammatical, natural and consistent in style for its text type (です/ます narrative, plain diary,
     letter with keigo, casual chat, chart notes, formal notice), at about the stated level;
   - EVERY reading in 《》 is right for that word in that sentence (今日《きょう》, 一人《ひとり》, 何《なに》/何《なん》, 方《かた》/方《ほう》,
     十分《じゅっぷん》 vs 十分《じゅうぶん》, 明日《あした》, 昨日《きのう》/昨日《さくじつ》 by register, counters, dates, rendaku);
   - spacing: one space between words, particles separate, は / へ / を standing alone;
   - the English is a faithful, natural translation, paragraph for paragraph (same count as tl);
   - the glossary: dictionary forms, correct readings and glosses, words that really are in the passage;
   - every question: 3 options, exactly ONE defensible answer from the passage, the index (0-based) points at it, the
     explanation is true; answer positions vary;
   - content rules: no method detail, no medicine product names or doses, no claims about Japanese law, insurance or
     services, only ｜119番《ひゃくじゅうきゅうばん》 as a phone number, nothing graphic; clinical details are plausible and
     consistent with the fictional patients listed in the brief.
3. Do not change ids, levels or the order of passages. Change what is wrong, unnatural or misleading; do not rewrite
   for taste.
4. After editing, from /home/claude/japanese:
```
node --check js/data/<file>.js
node tools/check-ja.js js/data/<file>.js        # 0 error(s); read each warning
```
5. Final message: the number of changes and every change as `passage-id: what was wrong → what you wrote`, plus
   anything you could not settle.
