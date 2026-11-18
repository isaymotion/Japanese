# Writer brief: lesson extras (LESSON_EXTRA) for N3 and N2 lessons
Read COMMON-WRITE-26.md. Open one finished model first: /home/claude/japanese/js/data/lesson-extra-8.js (two entries are enough).
For each lesson id in your task, in the order given, READ the whole lesson first
(grep -n "id: '<id>'" /home/claude/japanese/js/data/lessons-*.js, then read its body and quiz) and write its entry:
- mistakes (exactly 3): [wrong, right, why]. The wrong sentence is a mistake English-speaking learners really make with
  THIS lesson's patterns: wrong connection form (noun + の missing, plain vs ます-stem, た-form required), wrong particle
  inside the pattern, confusing it with its look-alike from the same or an earlier lesson, using it where its restriction
  forbids it (a pattern that cannot take a volitional ending or the speaker's own will, a negative-only pattern used in
  the positive), or the wrong register (a written pattern said to a patient, a blunt form to a family).
  FAIRNESS TEST for every pair: (1) the wrong line must be wrong for most native speakers, not merely less common: if a
  textbook marks it wrong but people say it, choose another mistake; (2) the right line is the MINIMAL correction;
  (3) why = one plain sentence naming the rule. For a register mistake the why says "grammatical but …".
  Wrong lines still follow the notation. They are shown struck through and never spoken.
- more (exactly 6): [ja, en], 3 clinical and 3 everyday, spread over the lesson's patterns (every main pattern of the
  lesson at least once across more + quiz), none repeating the lesson's own examples, same difficulty as the lesson.
- quiz (exactly 6): [question, [3 options], index, why]; exactly ONE defensible answer; answer position varied
  (0, 1, 2 twice each or close); do not repeat the lesson's own questions; mix: choose the form, choose the meaning,
  choose the natural sentence, fill the blank, choose the right pattern for a situation, which register fits.
  Wrong options must be ungrammatical in the slot or clearly a different meaning, never just "less common".
  Questions are in English; Japanese inside them follows the notation.
