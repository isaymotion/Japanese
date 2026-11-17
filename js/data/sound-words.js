/* Sound-symbolic words (0.23.0): 90 giongo / gitaigo in 8 to 10 groups (pain, stomach and nausea, heart and breathing,
   dizziness and tiredness, mood and irritation, anxiety and tension, sleep, speech and behaviour, weather and everyday),
   each with one example sentence. Used by #/sounds (js/soundwords.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.SOUND_WORDS = { groups:[{ id:'pain', title:'Pain', note:'...' }, ...], items:[
     { id:'s-001', w:'ズキズキ', en:'throbbing (pain)', g:'pain', lv:'N3', ex:'頭《あたま》 が ズキズキ します。', exen:'My head is throbbing.', note:'' } ] };
   g: a group id; ex must contain the word w. Ids unique, words unique. Ids are permanent: append only after release (never insert, reorder or delete). */
window.SOUND_WORDS = {
  groups: [
    /* seed: writers replace */
    { id: 'pain', title: 'Pain', note: 'Words patients use for the kind of pain they feel.' }
  ],
  items: [
    /* seed: writers replace */
    { id: 's-001', w: 'ズキズキ', en: 'throbbing (pain)', g: 'pain', lv: 'N3', ex: '頭《あたま》 が ズキズキ します。', exen: 'My head is throbbing.', note: '' }
  ]
};
