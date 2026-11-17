/* QA fixture for js/signs.js (0.24.0). Not app data. */
window.SIGNS = {
  groups: [
    { id: 'hospital', title: 'In the hospital', note: 'Signs at the entrance, the desks and the wards.' },
    { id: 'station', title: 'At the station', note: 'Gates, platforms and trains.' },
    { id: 'building', title: 'In buildings', note: 'Doors, exits and shops.' },
    { id: 'street', title: 'On the street', note: 'Traffic and warning signs.' }
  ],
  signs: [
    { id: 'sg-001', g: 'hospital', ja: '受付《うけつけ》', en: 'Reception', lv: 'N4', style: 'blue', note: 'Go here first with your insurance card.' },
    { id: 'sg-002', g: 'hospital', ja: '会計《かいけい》', en: 'Cashier (pay here)', lv: 'N4', style: 'blue', note: '' },
    { id: 'sg-003', g: 'hospital', ja: '薬局《やっきょく》', en: 'Pharmacy', lv: 'N4', style: 'blue', note: '' },
    { id: 'sg-004', g: 'hospital', ja: '救急《きゅうきゅう》', en: 'Emergency', lv: 'N3', style: 'red', note: 'The emergency entrance.' },
    { id: 'sg-005', g: 'hospital', ja: '面会《めんかい》 時間《じかん》', en: 'Visiting hours', lv: 'N3', style: 'plain', note: '' },
    { id: 'sg-006', g: 'hospital', ja: 'マスク 着用《ちゃくよう》', en: 'Please wear a mask', lv: 'N3', style: 'yellow', note: '' },
    { id: 'sg-007', g: 'hospital', ja: '待合室《まちあいしつ》', en: 'Waiting room', lv: 'N4', style: 'plain', note: '' },
    { id: 'sg-008', g: 'station', ja: '改札《かいさつ》', en: 'Ticket gate', lv: 'N3', style: 'blue', note: '' },
    { id: 'sg-009', g: 'station', ja: '入口《いりぐち》', en: 'Entrance', lv: 'N5', style: 'green', note: '' },
    { id: 'sg-010', g: 'station', ja: '出口《でぐち》', en: 'Exit', lv: 'N5', style: 'yellow', note: 'Station exits are often yellow signs.' },
    { id: 'sg-011', g: 'station', ja: '切符《きっぷ》 売《う》り 場《ば》', en: 'Ticket office', lv: 'N4', style: 'blue', note: '' },
    { id: 'sg-012', g: 'station', ja: '優先席《ゆうせんせき》', en: 'Priority seat', lv: 'N3', style: 'plain', note: '' },
    { id: 'sg-013', g: 'building', ja: '非常口《ひじょうぐち》', en: 'Emergency exit', lv: 'N3', style: 'green', note: '' },
    { id: 'sg-014', g: 'building', ja: '押《お》す', en: 'Push', lv: 'N5', style: 'plain', note: '' },
    { id: 'sg-015', g: 'building', ja: '引《ひ》く', en: 'Pull', lv: 'N5', style: 'plain', note: '' },
    { id: 'sg-016', g: 'building', ja: '営業中《えいぎょうちゅう》', en: 'Open (for business)', lv: 'N3', style: 'green', note: '' },
    { id: 'sg-017', g: 'building', ja: '禁煙《きんえん》', en: 'No smoking', lv: 'N3', style: 'red', note: '' },
    { id: 'sg-018', g: 'street', ja: '止《と》まれ', en: 'Stop', lv: 'N4', style: 'red', note: 'The red triangle at crossings.' },
    { id: 'sg-019', g: 'street', ja: '工事中《こうじちゅう》', en: 'Under construction', lv: 'N3', style: 'yellow', note: '' },
    { id: 'sg-020', g: 'street', ja: '立入《たちいり》 禁止《きんし》', en: 'No entry', lv: 'N3', style: 'red', note: '' }
  ]
};
window.SIGN_PANELS = [
  { id: 'washer', title: 'Washing machine', lv: 'N4', note: 'A simple home washing machine.',
    rows: [
      [ { id: 'power', ja: '電源《でんげん》', en: 'power', kind: 'btn' }, { id: 'washing', ja: '洗《あら》い', en: 'washing', kind: 'lamp' }, { id: 'done', ja: '終了《しゅうりょう》', en: 'finished', kind: 'lamp' } ],
      [ { id: 'course', ja: 'コース', en: 'wash programme', kind: 'dial' }, { id: 'rinse', ja: 'すすぎ', en: 'rinse', kind: 'btn' }, { id: 'spin', ja: '脱水《だっすい》', en: 'spin', kind: 'btn' } ],
      [ { id: 'timer', ja: '予約《よやく》', en: 'timer (start later)', kind: 'btn' }, { id: 'start', ja: 'スタート／一時停止《いちじていし》', en: 'start / pause', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'Switch the machine on.', a: 'power', why: '電源《でんげん》 is the power button.' },
      { q: 'Start the wash.', a: 'start', why: 'スタート starts the programme.' },
      { q: 'Only spin the clothes dry.', a: 'spin', why: '脱水《だっすい》 means removing water: the spin.' },
      { q: 'Choose a different wash programme.', a: 'course', why: 'コース is the programme dial.' },
      { q: 'Set it to finish later.', a: 'timer', why: '予約《よやく》 is a booking: here, a delayed start.' }
    ] },
  { id: 'nursecall', title: 'Bed and nurse call', lv: 'N4', note: 'The handset by a hospital bed.',
    rows: [
      [ { id: 'call', ja: '呼出《よびだし》', en: 'call the nurse', kind: 'btn' }, { id: 'lamp', ja: '呼出中《よびだしちゅう》', en: 'calling', kind: 'lamp' } ],
      [ { id: 'up', ja: '背上《せあ》げ', en: 'back up', kind: 'btn' }, { id: 'down', ja: '背下《せさ》げ', en: 'back down', kind: 'btn' } ],
      [ { id: 'light', ja: '照明《しょうめい》', en: 'light', kind: 'btn' }, { id: 'tv', ja: 'テレビ', en: 'TV', kind: 'btn' } ]
    ],
    tasks: [
      { q: 'Call the nurse.', a: 'call', why: '呼出《よびだし》 calls the nurse station.' },
      { q: 'Raise the back of the bed.', a: 'up', why: '背上《せあ》げ lifts the back.' },
      { q: 'Lower the back of the bed.', a: 'down', why: '背下《せさ》げ lowers it.' },
      { q: 'Turn on the reading light.', a: 'light', why: '照明《しょうめい》 is the light.' },
      { q: 'Switch on the television.', a: 'tv', why: 'テレビ is the TV.' }
    ] }
];
