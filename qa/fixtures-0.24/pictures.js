/* QA fixture for js/pictures.js (0.24.0). Injected by /home/claude/work/qa/pictures.py before the data scripts run;
   the data files concat onto it. Ids start with fx- so they never clash with real sets. */
window.PICTURE_SETS = [
  { id: 'fx-face', group: 'body', title: 'Fixture face', lv: 'N5', kind: 'diagram', art: 'fx-face',
    intro: 'Parts of the face, for testing.',
    parts: [
      { id: 'atama', w: '頭《あたま》', en: 'head', lv: 'N5', x: 150, y: 40 },
      { id: 'me', w: '目《め》', en: 'eye', lv: 'N5', x: 118, y: 130 },
      { id: 'mimi', w: '耳《みみ》', en: 'ear', lv: 'N5', x: 62, y: 150 },
      { id: 'hana', w: '鼻《はな》', en: 'nose', lv: 'N5', x: 150, y: 168 },
      { id: 'kuchi', w: '口《くち》', en: 'mouth', lv: 'N5', x: 150, y: 214 },
      { id: 'kubi', w: '首《くび》', en: 'neck', lv: 'N4', x: 150, y: 272 },
      { id: 'kami', w: '髪《かみ》', en: 'hair', lv: 'N4', x: 208, y: 70 },
      { id: 'kao', w: '顔《かお》', en: 'face', lv: 'N5', x: 196, y: 196 }
    ],
    say: [
      { ja: '目《め》 が 痛《いた》い です。', en: 'My eye hurts.', p: 'me' },
      { ja: '耳《みみ》 が よく 聞《き》こえません。', en: 'I cannot hear well with my ear.', p: 'mimi' },
      { ja: '鼻《はな》 が 詰《つ》まって います。', en: 'My nose is blocked.', p: 'hana' },
      { ja: '口《くち》 を 開《あ》けて ください。', en: 'Please open your mouth.', p: 'kuchi' },
      { ja: '首《くび》 が 回《まわ》りません。', en: 'I cannot turn my neck.', p: 'kubi' },
      { ja: '頭《あたま》 が 痛《いた》い です。', en: 'I have a headache.', p: 'atama' }
    ] },
  { id: 'fx-pets', group: 'animals', title: 'Fixture animals', lv: 'N5', kind: 'cards', intro: 'Animals as emoji cards, for testing.',
    parts: [
      { id: 'inu', w: '犬《いぬ》', en: 'dog', lv: 'N5', pic: '🐕' }, { id: 'neko', w: '猫《ねこ》', en: 'cat', lv: 'N5', pic: '🐈' },
      { id: 'tori', w: '鳥《とり》', en: 'bird', lv: 'N5', pic: '🐦' }, { id: 'sakana', w: '魚《さかな》', en: 'fish', lv: 'N5', pic: '🐟' },
      { id: 'uma', w: '馬《うま》', en: 'horse', lv: 'N4', pic: '🐎' }, { id: 'ushi', w: '牛《うし》', en: 'cow', lv: 'N4', pic: '🐄' },
      { id: 'buta', w: '豚《ぶた》', en: 'pig', lv: 'N4', pic: '🐖' }, { id: 'usagi', w: 'うさぎ', en: 'rabbit', lv: 'N4', pic: '🐇' },
      { id: 'nezumi', w: 'ねずみ', en: 'mouse', lv: 'N4', pic: '🐁' }, { id: 'niwatori', w: '鶏《にわとり》', en: 'chicken', lv: 'N4', pic: '🐓' }
    ],
    say: [
      { ja: 'ワンワン と 鳴《な》きます。', en: 'It goes woof woof.', p: 'inu' },
      { ja: 'ニャー と 鳴《な》きます。', en: 'It goes meow.', p: 'neko' },
      { ja: '海《うみ》 や 川《かわ》 で 泳《およ》ぎます。', en: 'It swims in the sea and rivers.', p: 'sakana' },
      { ja: '牛乳《ぎゅうにゅう》 を くれます。', en: 'It gives us milk.', p: 'ushi' },
      { ja: '朝《あさ》 早《はや》く コケコッコー と 鳴《な》きます。', en: 'It crows early in the morning.', p: 'niwatori' },
      { ja: '耳《みみ》 が 長《なが》い です。', en: 'Its ears are long.', p: 'usagi' }
    ] },
  { id: 'fx-noart', group: 'home', title: 'Fixture without art', lv: 'N4', kind: 'diagram', art: 'fx-missing', intro: 'A diagram whose art is missing.',
    parts: [ { id: 'mado', w: '窓《まど》', en: 'window', lv: 'N5', x: 40, y: 40 }, { id: 'doa', w: 'ドア', en: 'door', lv: 'N5', x: 100, y: 100 },
      { id: 'yane', w: '屋根《やね》', en: 'roof', lv: 'N4', x: 160, y: 40 }, { id: 'niwa', w: '庭《にわ》', en: 'garden', lv: 'N5', x: 200, y: 200 } ],
    say: [ { ja: '窓《まど》 を 開《あ》けて ください。', en: 'Please open the window.', p: 'mado' } ] }
];
window.PICTURE_ART = window.PICTURE_ART || {};
window.PICTURE_ART['fx-face'] = { vb: [300, 320], svg: '<g stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">' +
  '<ellipse cx="150" cy="160" rx="92" ry="112" fill="currentColor" fill-opacity="0.06"/>' +
  '<path d="M64 120 Q80 40 150 40 Q222 40 236 120" fill="currentColor" fill-opacity="0.15"/>' +
  '<ellipse cx="60" cy="152" rx="10" ry="22"/><ellipse cx="240" cy="152" rx="10" ry="22"/>' +
  '<ellipse cx="118" cy="130" rx="14" ry="8"/><ellipse cx="182" cy="130" rx="14" ry="8"/>' +
  '<path d="M150 140 L140 176 L160 176"/><path d="M124 212 Q150 230 176 212"/>' +
  '<path d="M126 268 L126 300 M174 268 L174 300"/></g>' };
