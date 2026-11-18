# Writer brief: unit review lessons for N1
Read /home/claude/work/briefs-1.0/COMMON-WRITE-1.0.md and /home/claude/work/LESSON-BRIEF.md (allowed HTML in a body, quiz rules). Open one finished model:
the N2 review `review-n2…` lessons in /home/claude/japanese/js/data/lessons-44.js (read one).
Your task lists four reviews: id, level, unit, after. For each, READ every lesson of the unit first
(grep -n "unit: '<unit>'" /home/claude/japanese/js/data/lessons-*.js; read bodies and quizzes). Then write, in the order given:
  { id, level, unit, review: true, after: '<given>', title: `Review: <unit>`, summary: `one sentence`, draft: true, body: `…`, quiz: [ …12… ] }
A review teaches NOTHING new: it gathers, contrasts and tests.
- body 1,800–3,000 characters (counted without readings and tags): one opening <p> that links every lesson of the unit (<a href="#/lessons/ID">); ONE summary
  table (Pattern | Job | Model sentence), one row per main pattern of the unit (8–14 rows; N1: FOUR columns, Pattern | Job and register | Say instead | Model sentence: the register cell says say / understand and spoken / formal / written as the lesson marks it; "Say instead" gives the plain form the resident would say for an "understand" pattern, or — for a "say" pattern); <h3>Watch out</h3> with a <ul> of
  the 3–5 commonest confusions between the unit's patterns (and with their look-alikes from earlier levels);
  <h3>Mixed examples</h3> with 5–6 <div class="ex"> sentences that each combine two patterns or set two against each
  other, half clinical; a closing <div class="note">. Model sentences and examples are NEW sentences, not copied from the lessons.
- quiz: exactly 12 questions, 3 options each, ONE defensible answer, answer positions spread evenly (four each of 0, 1, 2),
  covering every lesson of the unit, at least 4 questions that set two lessons' patterns against each other
  ("which fits here: A or B?"). None repeats a question of the unit's lessons or of their existing quizzes.
