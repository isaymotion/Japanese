/* Body map (0.24.0): #/pictures/bodymap (js/picture-print.js): the patient taps where it hurts; printable A4 handout.
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A6): window.PICTURE_BODYMAP = { sets: ['body-front', 'body-back'] (picture set ids),
     ask: [ { ja, en } ] exactly 8 = questions a clinician asks ("Where does it hurt? Please point."),
     words: [ { ja, en } ] exactly 10 = pain-describing words the patient can point to }.
   No faces scale and no published scale wording. Append only after release. */
window.PICTURE_BODYMAP = { sets: ['body-front', 'body-back'], ask: [], words: [] };
