/* Picture words, group 'town' (0.24.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'N5'|'N4',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-town.js), intro: one English sentence,
     parts: [ { id: short romaji, w: ONE word in the notation (dictionary form), en, lv: 'N5'|'N4'|'N3',
                diagram: x, y = the point ON the thing in the art's viewBox units (pins at least 26 apart, 12 inside the edge);
                cards: pic = ONE emoji, Unicode Emoji 12.0 or older, no flags / skin tones / ZWJ sequences } ],   8 to 16 parts (cards 10 to 16)
     say: [ { ja: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);                       6 to 10 sentences
   At most a quarter of a set's words N3, none above. group = 'town' for every set of this file.
   Sets of this file (PLAN C): street d N5; station d N4; buildings c N5; hospital-floor d N4 (simple floor plan); positions d N5 (a table, a box, balls: on, under, in, next to …).
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  /* seed: writers replace */
  { id: 'positions', group: 'town', title: 'Where things are', lv: 'N5', kind: 'diagram', art: 'positions',
    intro: 'Position words: where a ball is next to a table and a box.',
    parts: [
      { id: 'ue', w: '上《うえ》', en: 'on, above', lv: 'N5', x: 170, y: 66 },
      { id: 'naka', w: '中《なか》', en: 'inside', lv: 'N5', x: 170, y: 112 },
      { id: 'tonari', w: '隣《となり》', en: 'next to', lv: 'N5', x: 244, y: 122 },
      { id: 'shita', w: '下《した》', en: 'under', lv: 'N5', x: 170, y: 212 }
    ],
    say: [
      { ja: 'ボール は 箱《はこ》 の 中《なか》 に あります。', en: 'The ball is in the box.', p: 'naka' },
      { ja: 'テーブル の 下《した》 に ボール が あります。', en: 'There is a ball under the table.', p: 'shita' }
    ] }
]);
