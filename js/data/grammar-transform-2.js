/* Grammar transformation items (0.23.0), N4 40 (ids t-n4-101 on), N3 45 and N2 45. Used by #/transform (js/transform.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.GRAMMAR_TRANSFORM = (window.GRAMMAR_TRANSFORM || []).concat([
     { id:'t-n5-001', lv:'N5', type:'neg', instr:'Make it negative.', from:'今日《きょう》 は 行《い》きます。', to:'今日《きょう》 は 行《い》きません。',
       alt:[], wrong:['...','...','...'], en:'I am not going today.', l:'<lesson id>' } ]);
   from: a string, or an array of two sentences for joining. to: the model answer; alt: other fully correct answers;
   wrong: exactly 3 well-formed Japanese sentences that do NOT follow the instruction (another tense, form or meaning),
   never ungrammatical strings; to, alt and wrong all distinct and none equal to from.
   type: neg, past, pastneg, polite, plain, te-join, reason, contrast, want, request, potential, volitional, conditional,
   noun-mod, passive, causative, giving, keigo, formal, casual, nominalize, other.
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.GRAMMAR_TRANSFORM = (window.GRAMMAR_TRANSFORM || []).concat([
]);
