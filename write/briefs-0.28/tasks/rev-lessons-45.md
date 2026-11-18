You are the independent REVIEWER (not the writer) of one N1 grammar-lessons file for Hanashimashō, a Japanese-learning web app for an English-speaking psychiatry resident. Find and FIX errors directly in the file.

Read, in this order: /home/claude/work/LESSON-REVIEW.md (the reviewer brief), /home/claude/work/LESSON-BRIEF.md (what writers are asked), /home/claude/devtools/write/briefs-0.28/N1-LESSON-PLAN.md (the N1 plan: it overrides the briefs on level, length, register marks, quiz size and content rules), /home/claude/japanese/tools/AUTHORING.md.

Your file: /home/claude/work/new-0.28/lessons-45.js (unit `The moment something happens`: n1-ga-hayai-ka, n1-te-kara-to-iu-mono, n1-katawara). Edit only this file. /home/claude/japanese is READ ONLY. No git commands.

The writer's own list of doubts is below this line in the task message if there was one; settle each.

N1 points to check hard, beyond the brief:
- Formation: what each pattern attaches to (dictionary form, た-form, ない-stem, noun, する-noun with or without の) is exactly right, e.g. 〜や 否や and 〜が 早いか and 〜なり take the dictionary form, 〜そばから takes dictionary or た, 〜を 余儀なく される takes a noun, 〜ず に は おかない uses the ない-stem (する → せず), 〜べからず with する is す(る)べからず, 〜まじき after ある / 許す.
- Register marks (spoken / formal spoken / written / literary or set phrase) and "say" vs "understand" are right, and every "understand" pattern has a plain spoken equivalent that is itself correct.
- Subject and tense restrictions are stated correctly and not overstated (〜なり: same subject, no volition in the main clause; 〜や 否や: realised events; 〜た が 最後: irreversible result; 〜ものを: regret or blame; and so on). Delete or soften any nuance claim you cannot stand behind.
- Set phrases are real collocations (感激 の 極み, 若気 の 至り, 光栄 の 至り, 想像 に 難くない, 同情 を 禁じ得ない, 聞く に 堪えない …) with correct readings.
- An N3 or N2 pattern is not re-taught as new: `grep -l "PATTERN" /home/claude/japanese/js/data/lessons-*.js`; where one is, cut it to a short reminder with a correct link.
- No example or quiz stem is a near copy of one already in the app (`grep -rn "KEY PHRASE" /home/claude/japanese/js/data/lessons-*.js`) or of another lesson in this file.
- Quiz: exactly 3 options, ONE defensible answer WITHOUT relying on an English cue, wrong options really wrong (ungrammatical in the slot or a different meaning), no two options that differ only in a reading, answers spread over 0, 1, 2.
- No sentence depends on today's date or the calendar. Patterns that can sound judgemental (〜始末 だ, 〜きらい が ある, 〜まじき, 〜ぶる, 〜がましい, 〜ものを) are never aimed at a patient or family in what the resident says, and the lesson says so. Risk content follows the plan's clinical rules (no method, medicine name or dose; a hint of wanting to die only with the gentle direct question).
- Spacing: auxiliary endings joined to their verb, particles separate, は / へ / を standing alone, tokens ending in は split unless では / とは / には.
- Links point at existing lesson ids (the 24 new N1 ids of the plan also count as existing) or `#/signs`.

Checks (from /home/claude/ja-code; RELATIVE path):
```
cd /home/claude/ja-code
node --check ../work/new-0.28/lessons-45.js
node tools/check-ja.js ../work/new-0.28/lessons-45.js     # 0 error(s)
```
Do not change `id`, `level`, `unit` or lesson order. Final message (under 350 words): number of changes; every substantive change as `lesson id: what was wrong → what you wrote` (group trivial fixes as counts); lines a native-speaking clinician should hear (up to 8, the Japanese with a 3-word reason); anything you could not settle.
