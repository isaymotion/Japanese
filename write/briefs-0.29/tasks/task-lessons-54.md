You are the WRITER of one N1 grammar-lessons file for Hanashimashō, a Japanese-learning web app for an English-speaking psychiatry resident. Write every sentence by hand (no generating scripts).

Read, in this order:
1. /home/claude/work/LESSON-BRIEF.md (the general writer brief: file shape, allowed HTML, accuracy rules).
2. /home/claude/devtools/write/briefs-0.28/N1-LESSON-PLAN.md (the first-half N1 plan: its "N1 differences" and "Clinical content rules" apply to you) and then /home/claude/devtools/write/briefs-0.29/N1-LESSON-PLAN-2.md (YOUR plan: it overrides the brief on level, length, register marks and quiz size, and fixes your ids and patterns).
3. /home/claude/japanese/tools/AUTHORING.md (the notation) and two first-half N1 lessons as models, e.g. `n1-ga-hayai-ka` in /home/claude/japanese/js/data/lessons-45.js and `n1-wo-yoginaku` in lessons-51.js.

Your file: /home/claude/work/new-0.29/lessons-54.js = the three lessons of unit `Occasions, pretexts and turning points` (n1-ni-kakotsukete, n1-wo-hete, n1-to-mo-naru-to), level 'N1', in plan order, no `after` field. Header comment as in lessons-45.js ("Lessons part 54: N1, Occasions, pretexts and turning points (3 lessons, N1)").

/home/claude/japanese is READ ONLY (a test suite is running there): never write or run anything that writes there. Write only your one file. No git commands.

Checks (run from /home/claude/japanese; the path must be RELATIVE):
```
cd /home/claude/japanese
node --check ../work/new-0.29/lessons-54.js
node tools/check-ja.js ../work/new-0.29/lessons-54.js     # must end 0 error(s); read every warning
```
Before writing, grep the existing lessons for each of your patterns and for near-identical example sentences, as the plan says; a pattern already taught becomes a three-line reminder with a link. Tell extras apart: (a) a quiz stem or example equal or close to one in the app is a repeat, (b) a wrong quiz option must be wrong without the English cue, (c) no sentence may depend on the calendar. Then re-read every Japanese line for readings, spacing (は / へ / を alone) and naturalness, and re-check each quiz index.

Final message (short): the file path, each lesson id with body length and quiz count, the checker's last line, which patterns you cut to reminders, and a list of anything you were unsure about (a nuance, a reading, a register mark, a quiz item) for the reviewer.
