You are the WRITER of one N1 grammar-lessons file for Hanashimashō, a Japanese-learning web app for an English-speaking psychiatry resident. Write every sentence by hand (no generating scripts).

Read, in this order:
1. /home/claude/work/LESSON-BRIEF.md (the general writer brief: file shape, allowed HTML, accuracy rules).
2. /home/claude/devtools/write/briefs-0.28/N1-LESSON-PLAN.md (the N1 plan: it OVERRIDES the brief on level, length, register marks and quiz size, and fixes your ids and patterns).
3. /home/claude/japanese/tools/AUTHORING.md (the notation) and two N2 lessons as models, e.g. `n2-kanenai` in /home/claude/japanese/js/data/lessons-16.js and one from lessons-20.js.

Your file: /home/claude/work/new-0.28/lessons-47.js = the three lessons of unit `If and only if` (n1-to-areba, n1-nakushite, n1-ga-saigo), level 'N1', in plan order, no `after` field. Header comment as in the brief ("Lessons part 47: N1, If and only if (3 lessons, N1)").

/home/claude/japanese is READ ONLY (a test suite is running there): never write or run anything that writes there. Write only your one file. No git commands.

Checks (run from /home/claude/ja-code, which has a checker that accepts N1; the path must be RELATIVE):
```
cd /home/claude/ja-code
node --check ../work/new-0.28/lessons-47.js
node tools/check-ja.js ../work/new-0.28/lessons-47.js     # must end 0 error(s); read every warning
```
Before writing, grep the existing lessons for each of your patterns and for near-identical example sentences, as the plan says. Then re-read every Japanese line for readings, spacing (は / へ / を alone) and naturalness, and re-check each quiz index.

Final message (short): the file path, each lesson id with body length and quiz count, the checker's last line, and a list of anything you were unsure about (a nuance, a reading, a register mark, a quiz item) for the reviewer.
