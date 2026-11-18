You are the independent REVIEWER (not the writer) of one N1 grammar-lessons file for Hanashimashō, a Japanese-learning web app for an English-speaking psychiatry resident. Find and FIX errors directly in the file.

Read, in this order: /home/claude/work/LESSON-REVIEW.md (the reviewer brief), /home/claude/work/LESSON-BRIEF.md (what writers are asked), /home/claude/devtools/write/briefs-0.28/N1-LESSON-PLAN.md ("N1 differences" and "Clinical content rules"), /home/claude/devtools/write/briefs-0.29/N1-LESSON-PLAN-2.md (this file's plan: it overrides the briefs on level, length, register marks, quiz size and content rules), /home/claude/japanese/tools/AUTHORING.md.

Your file: /home/claude/work/new-0.29/lessons-59.js (unit `Old forms that are still alive`: n1-zaru-nu, n1-ikanaru, n1-te-shikarubeki). Edit only this file. /home/claude/japanese is READ ONLY. No git commands.

The writer's own list of doubts is below this line in the task message if there was one; settle each.

N1 points to check hard, beyond the brief:
- Formation: what each pattern attaches to (dictionary form, た-form, ない-stem, volitional, noun, する-noun with or without の) is exactly right (〜ん が ため takes the ない-stem, する → せん が ため; 〜ずじまい the ない-stem, する → せずじまい; 〜そびれる / 〜損なう / 〜あぐねる the ます-stem; 〜いかん a noun (+ の); 〜て しかるべき the て-form; 〜く とも the く-form), and every example obeys it.
- Register marks (spoken / formal spoken / written / literary or set phrase) and "say" vs "understand" are right, and every "understand" pattern has a plain spoken equivalent that is itself correct.
- Restrictions and nuances are stated correctly and not overstated. Delete or soften any nuance claim you cannot stand behind.
- Set phrases and collocations are real, with correct readings.
- A pattern the app already teaches is not re-taught as new: `grep -l "PATTERN" /home/claude/japanese/js/data/lessons-*.js`; where one is, cut it to a short reminder with a correct link.
- No example or quiz stem is a near copy of one already in the app (`grep -rn "KEY PHRASE" /home/claude/japanese/js/data/lessons-*.js /home/claude/japanese/js/data/lesson-extra-*.js`) or of another lesson in this file.
- Quiz: exactly 3 options, ONE defensible answer WITHOUT relying on an English cue, wrong options really wrong (ungrammatical in the slot or a different meaning), no two options that differ only in a reading, answers spread over 0, 1, 2.
- No sentence depends on today's date or the calendar. Patterns that can blame or judge (the plan names them) are never aimed at a patient or family in what the resident says or writes, and the lesson says so. Risk content follows the clinical rules (no method, medicine name or dose; a hint of wanting to die only with the gentle direct question; when in doubt remove it). Sample letters, speeches, reports and forms are labelled samples and carry no medicine names, doses, numbers, statistics, study claims, hospital names or claims about law.
- Spacing: the conventions at the top of the plan.
- Links point at existing lesson ids (the 48 N1 ids of the two plans also count as existing) or `#/signs`.

Checks (from /home/claude/japanese; RELATIVE path):
```
cd /home/claude/japanese
node --check ../work/new-0.29/lessons-59.js
node tools/check-ja.js ../work/new-0.29/lessons-59.js     # 0 error(s)
```
Do not change `id`, `level`, `unit` or lesson order. Final message (under 350 words): number of changes; every substantive change as `lesson id: what was wrong → what you wrote` (group trivial fixes as counts); lines a native-speaking clinician should hear (up to 8, the Japanese with a 3-word reason); anything you could not settle.
