/* Word pairs (0.23.0), N5 70 and N4 70: about 40% opposites, 20% near-synonyms, 40% collocations. Used by #/pairs (js/pairs.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.WORD_PAIRS = (window.WORD_PAIRS || []).concat([
     { id:'p-n5-001', lv:'N5', type:'opp', a:'大《おお》きい', ea:'big', b:'小《ちい》さい', eb:'small' },
     { id:'p-n5-041', lv:'N5', type:'col', a:'薬《くすり》 を', ea:'medicine', b:'飲《の》む', eb:'to take (medicine)', en:'to take medicine' },
     { id:'p-n4-021', lv:'N4', type:'syn', a:'...', ea:'...', b:'...', eb:'...', note:'difference in one line' } ]);
   type: opp (opposites) | syn (near-synonyms, with note) | col (collocation, with en for the whole phrase). a differs from b;
   no pair twice. Ids are permanent: append only after release (never insert, reorder or delete). */
window.WORD_PAIRS = (window.WORD_PAIRS || []).concat([
  /* seed: writers replace */
  { id: 'p-n5-001', lv: 'N5', type: 'opp', a: '大《おお》きい', ea: 'big', b: '小《ちい》さい', eb: 'small' }
]);
