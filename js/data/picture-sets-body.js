/* Picture words, group 'body' (0.24.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'N5'|'N4',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-body.js), intro: one English sentence,
     parts: [ { id: short romaji, w: ONE word in the notation (dictionary form), en, lv: 'N5'|'N4'|'N3',
                diagram: x, y = the point ON the thing in the art's viewBox units (pins at least 26 apart, 12 inside the edge);
                cards: pic = ONE emoji, Unicode Emoji 12.0 or older, no flags / skin tones / ZWJ sequences } ],   8 to 16 parts (cards 10 to 16)
     say: [ { ja: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);                       6 to 10 sentences
   At most a quarter of a set's words N3, none above. group = 'body' for every set of this file.
   Sets of this file (PLAN C): body-front d N5; body-back d N5; face d N5; hand-arm d N4; leg-foot d N4; inside d N4 (organs, bones; simple).
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
]);
