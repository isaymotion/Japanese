/* Machine panels (0.24.0): #/signs?tab=panels (js/signs.js): "press the control that …". 10 panels (PLAN-0.24 E).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A3): window.SIGN_PANELS = [ { id, title, lv, note,
     rows: [ [ { id, ja, en, kind: 'btn' | 'lamp' (a status light, not pressable in tasks) | 'dial' } ] ]   2 to 4 rows, 6 to 12 controls in all,
     tasks: [ { q: English task, a: the ONE right control id (not a lamp), why } ]   5 or 6 tasks } ].
   Control text is what is really printed in Japan. Panel and control ids are permanent: append only after release. */
window.SIGN_PANELS = [
  /* seed: writers replace */
  { id: 'washer', title: 'Washing machine', lv: 'N4', note: 'A simple home washing machine.',
    rows: [
      [ { id: 'power', ja: '電源《でんげん》', en: 'power', kind: 'btn' }, { id: 'done', ja: '終了《しゅうりょう》', en: 'finished', kind: 'lamp' } ],
      [ { id: 'course', ja: 'コース', en: 'wash programme', kind: 'dial' }, { id: 'start', ja: 'スタート', en: 'start', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'Switch the machine on.', a: 'power', why: '電源《でんげん》 is the power button.' },
      { q: 'Start the wash.', a: 'start', why: 'スタート starts the programme.' }
    ] }
];
