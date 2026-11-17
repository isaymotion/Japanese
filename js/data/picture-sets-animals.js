/* Picture words, group 'animals' (0.24.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'N5'|'N4',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-animals.js), intro: one English sentence,
     parts: [ { id: short romaji, w: ONE word in the notation (dictionary form), en, lv: 'N5'|'N4'|'N3',
                diagram: x, y = the point ON the thing in the art's viewBox units (pins at least 26 apart, 12 inside the edge);
                cards: pic = ONE emoji, Unicode Emoji 12.0 or older, no flags / skin tones / ZWJ sequences } ],   8 to 16 parts (cards 10 to 16)
     say: [ { ja: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);                       6 to 10 sentences
   At most a quarter of a set's words N3, none above. group = 'animals' for every set of this file.
   Sets of this file (PLAN C): pets-farm c N5; zoo c N4; birds-insects-sea c N4; animal-parts d N4 (a dog and a bird: tail, ear, paw, fur, wing, beak, feather; no horn).
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  /* seed: writers replace */
  { id: 'pets-farm', group: 'animals', title: 'Pets and farm animals', lv: 'N5', kind: 'cards',
    intro: 'Animals people keep at home and on farms.',
    parts: [
      { id: 'inu', w: '犬《いぬ》', en: 'dog', lv: 'N5', pic: '🐕' },
      { id: 'neko', w: '猫《ねこ》', en: 'cat', lv: 'N5', pic: '🐈' },
      { id: 'uma', w: '馬《うま》', en: 'horse', lv: 'N4', pic: '🐎' },
      { id: 'ushi', w: '牛《うし》', en: 'cow', lv: 'N4', pic: '🐄' }
    ],
    say: [
      { ja: '毎朝《まいあさ》 犬《いぬ》 と 散歩《さんぽ》 を します。', en: 'I walk the dog every morning.', p: 'inu' },
      { ja: '牛《うし》 から 牛乳《ぎゅうにゅう》 を とります。', en: 'We get milk from cows.', p: 'ushi' }
    ] }
]);
