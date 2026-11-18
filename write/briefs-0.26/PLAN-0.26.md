# Hanashimashō 0.26.0 plan: "Deeper N3 and N2 lessons"
Content only, no engine change: the lesson page (V.lesson) already draws LESSON_EXTRA and review lessons (0.23.0).
- Lesson extras for all 72 N3 and N2 lessons: `js/data/lesson-extra-9..20.js`, 6 lessons per file in lesson order
  (9–12 = N3, 13–20 = N2). Per lesson: 3 mistakes, 6 more examples, 6 quiz questions (shape in each file's header).
- 24 unit reviews, one per N3 unit (8) and N2 unit (16): `js/data/lessons-39..44.js`, 4 reviews per file
  (39–40 = N3, 41–44 = N2); each `review: true`, `after: '<last lesson of the unit>'`, level and unit of its unit,
  title `Review: <unit>`, quiz of exactly 12.
  The handoff said "16 unit reviews"; there are 24 units (N3 8, N2 16) and every unit has two or more lessons, so 24.
- Who writes what: `assign.json` (file → lesson ids; file → [review id, level, unit, after]).
- Writers draft in /home/claude/work/new-0.26/<file> (NOT in the repo); the main chat copies the files into js/data and
  registers them; reviewers then fix them in the repo.
