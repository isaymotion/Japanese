/* Signs (0.24.0): sign boards for #/signs (js/signs.js), about 110 signs in groups (PLAN-0.24 E).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A3): window.SIGNS = { groups: [ { id, title, note } ],
     signs: [ { id: 'sg-001'…, g: group id, ja: the text really printed (notation; the app hides the reading until asked), en, lv,
                style: 'green' (exit, safe) | 'red' (forbidden, fire, emergency) | 'blue' (information, must do) | 'yellow' (caution) | 'plain', note } ] }.
   Groups: hospital, station, street, building, shop, toilet, medicine-bag (label WORDS only: no medicine names, no doses).
   Sign ids are permanent: append only after release (never insert, reorder or delete). */
window.SIGNS = {
  groups: [
    /* seed: writers replace */
    { id: 'hospital', title: 'In the hospital', note: 'Signs at the entrance, the desks and the wards.' }
  ],
  signs: [
    /* seed: writers replace */
    { id: 'sg-001', g: 'hospital', ja: '受付《うけつけ》', en: 'Reception', lv: 'N4', style: 'blue', note: '' },
    { id: 'sg-002', g: 'hospital', ja: '会計《かいけい》', en: 'Cashier (pay here)', lv: 'N4', style: 'blue', note: '' },
    { id: 'sg-003', g: 'hospital', ja: '薬局《やっきょく》', en: 'Pharmacy', lv: 'N4', style: 'blue', note: '' }
  ]
};
