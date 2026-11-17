# Coder B: Fill the blank (js/cloze.js) and Level review test (js/leveltest.js)
Read COMMON-CODE-23.md first.
## Fill the blank, #/cloze → V.cloze (also #/cloze?l=<lesson id> for one lesson, #/cloze?lv=N4)
Data GRAMMAR_CLOZE. The sentence with a visible blank, 4 option buttons (shuffled), then feedback with the completed
sentence (App.fillBlank(s, a), speaker), `en`, `why`, link to lesson `l`. A "By lesson" tab lists the level's lessons with
their item counts and best score; a "Mixed" tab draws across the level, mistakes first when the learner asks.
Tell the main chat in your report the one-line HTML for a "Practise this grammar" link (to #/cloze?l=<id>) that could be
put on lesson pages; do not edit views.js yourself.
## Level review test, #/test → V.leveltest
A mixed test for one level (N5, N4, N3, N2), built at start from existing data, no new data file:
  Grammar: 10 from the level's lesson quizzes (LESSONS[].quiz and LESSON_EXTRA quiz) + 6 from GRAMMAR_CLOZE
  Sentence order: 4 (a sentence from the level's lesson examples cut into 4 chunks, one slot marked ★: "which chunk goes
    in the ★ place?", the JLPT style; build simple chunks yourself, pick only sentences with ≥ 5 words, make sure the
    four options are different strings)
  Vocabulary: 6 meaning (word → English), 6 reading (plain kanji → kana; only words with kanji), 4 in context when
    DICT_EX has sentences for the level (blank the headword's token; skip if you cannot find the token reliably)
  Kanji: 4 (kanji → meaning, from App.KANJI of that level)
  Reading: one passage of the level from READING with its questions if LISTEN_Q has them for that id (text shown, not audio)
Sections shown one after another with a section header; an optional timer (off by default; 25 minutes); no feedback until
the end. Result page: total, score by area as simple bars (CSS only), each wrong item with the right answer, why (when the
source has it) and a link to the lesson / word / kanji; "weakest area" suggestion with a link to the matching drill. Saved in
state.done.test[level] = { best, of, at, areas: { grammar:[right, of], … }, last: { … } }. A half-finished test can be
resumed (state.testRun) or discarded. If a pool for a section is empty the section is skipped and the total adjusts.
