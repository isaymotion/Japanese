/* Grammar fill-the-blank items (0.23.0), N4, second half in lesson order, ids c-n4-201 on. Used by #/cloze (js/cloze.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.GRAMMAR_CLOZE = (window.GRAMMAR_CLOZE || []).concat([
     { id:'c-n5-001', lv:'N5', l:'<lesson id>', s:'薬《くすり》 ＿ 飲《の》みます。', a:'を', opts:['を','に','が','で'], en:'I take medicine.', why:'...one sentence...' } ]);
   lv: N5 | N4 | N3 | N2; l: the id of the lesson (of that level) that teaches the point. ＿ is its own word, exactly once in s.
   a is one of the 4 distinct opts (any position); App.fillBlank(s, a) (js/ja.js) puts a into s, and that sentence must be
   correct and natural (it is spoken and recorded); every other option makes it ungrammatical or clearly wrong for en.
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.GRAMMAR_CLOZE = (window.GRAMMAR_CLOZE || []).concat([
]);
