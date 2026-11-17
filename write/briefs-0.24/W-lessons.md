# Writer brief: a picture-lesson unit (one lessons-NN.js file)
Follow COMMON-WRITE-24.md. Read /home/claude/work/LESSON-BRIEF.md (the standing lesson brief: structure, `.ex` blocks,
quiz rules) and one existing lesson file for the shape (js/data/lessons-28.js: it uses `after` and ends with a review).
Your unit is in PLAN section D: ids, level, unit name, `after` chain, the patterns and which pictures to embed with
`<div class="pic-embed" data-pic="<set id>"></div>` (set ids from PLAN C; the picture shows numbered pins and its word
list, so the lesson can say "look at the picture": do not depend on exact pin numbers or on words you only guess are
in the set; teach the pattern with your own examples).
Each lesson: summary; body with 3–5 short sections, a table where it helps, 10–14 `.ex` examples (about 40% clinical or
health-related), a "Watch out" box for the common mistake; quiz of 6 (3 options, one right, a why). The review lesson:
`review: true`, short recap table, the commonest mix-ups, 6 mixed examples, quiz of 12. These are N5 / N4 lessons for a
beginner: plain English explanations, vocabulary at level. Lesson ids are global: use exactly the ids in the PLAN.
Also check with `node /home/claude/devtools/write/chk-023.js . | tail` (lesson rules: after, quiz sizes).
