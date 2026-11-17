/* Lesson extras part 1 (0.23.0): common mistakes, more examples and a "More practice" quiz for existing N5 and N4 lessons
   (7 lessons per file, in lesson order; the lesson page shows them after the body and runs the quiz after the lesson's own).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  /* seed: writers replace */
  'desu': {
    mistakes: [
      ['私《わたし》 は 医者《いしゃ》 だ です。', '私《わたし》 は 医者《いしゃ》 です。', 'だ and です both mean "is": use one of them, never both.'],
      ['はい、 田中《たなか》さん です。', 'はい、 田中《たなか》 です。', 'Never put さん on your own name.'],
      ['学生《がくせい》 じゃ です。', '学生《がくせい》 じゃ ありません。', 'The negative of です is じゃ ありません (or では ありません).']
    ],
    more: [
      ['私《わたし》 は 看護師《かんごし》 です。', 'I am a nurse.'],
      ['佐藤《さとう》さん です か。', 'Are you Mr. Sato?'],
      ['私《わたし》 は 患者《かんじゃ》 じゃ ありません。', 'I am not a patient.'],
      ['今日《きょう》 は 月曜日《げつようび》 です。', 'Today is Monday.'],
      ['母《はは》 は 先生《せんせい》 です。', 'My mother is a teacher.'],
      ['佐藤《さとう》さん は 会社員《かいしゃいん》 です。', 'Mr. Sato is an office worker.']
    ],
    quiz: [
      ['"I am a nurse." Which is right?', ['私《わたし》 は 看護師《かんごし》 です。', '私《わたし》 は 看護師《かんごし》 か。', '私《わたし》 を 看護師《かんごし》 です。'], 0, 'は marks the topic and です ends the sentence.'],
      ['Which sentence is a question?', ['佐藤《さとう》さん です。', '佐藤《さとう》さん です か。', '佐藤《さとう》さん じゃ ありません。'], 1, 'か at the end makes a question.'],
      ['"I am not a patient."', ['私《わたし》 は 患者《かんじゃ》 です。', '私《わたし》 は 患者《かんじゃ》 です か。', '私《わたし》 は 患者《かんじゃ》 じゃ ありません。'], 2, 'じゃ ありません is the negative of です.'],
      ['How do you say your own name?', ['田中《たなか》さん です。', '田中《たなか》 です。', '田中《たなか》様《さま》 です。'], 1, 'さん and 様《さま》 are for other people.'],
      ['Which word is the polite "is"?', ['です', 'か', 'は'], 0, 'です ends a polite statement.'],
      ['今日《きょう》 は 月曜日《げつようび》 です。 means:', ['Today is Monday.', 'Is today Monday?', 'Today is not Monday.'], 0, 'No か and no じゃ ありません: a plain statement.']
    ]
  }
});
