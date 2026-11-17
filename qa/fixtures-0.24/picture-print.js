/* QA fixture for js/picture-print.js (served in place of js/data/picture-sets-body.js; art-body.js and picture-bodymap.js are blanked). */
(function () {
  var doll = '<g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
    '<circle cx="150" cy="48" r="30" fill="currentColor" fill-opacity="0.08"/>' +
    '<path d="M138 78v12h24V78M110 100q40-14 80 0l8 120h-22l-6-80v100h-40v-100l-6 80h-22z" fill="currentColor" fill-opacity="0.08"/>' +
    '<path d="M130 240v130h18V250h4v120h18V240"/></g>';
  window.PICTURE_ART = window.PICTURE_ART || {};
  window.PICTURE_ART['body-front'] = { vb: [300, 400], svg: doll };
  window.PICTURE_ART['body-back'] = { vb: [300, 400], svg: doll };
  window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
    { id: 'body-front', group: 'body', title: 'The body (front)', lv: 'N5', kind: 'diagram', art: 'body-front', intro: 'Words for the front of the body.',
      parts: [ { id: 'atama', w: '頭《あたま》', en: 'head', lv: 'N5', x: 150, y: 30 }, { id: 'kao', w: '顔《かお》', en: 'face', lv: 'N5', x: 150, y: 62 },
        { id: 'kubi', w: '首《くび》', en: 'neck', lv: 'N5', x: 150, y: 88 }, { id: 'kata', w: '肩《かた》', en: 'shoulder', lv: 'N4', x: 116, y: 104 },
        { id: 'mune', w: '胸《むね》', en: 'chest', lv: 'N4', x: 150, y: 130 }, { id: 'onaka', w: 'お腹《なか》', en: 'stomach', lv: 'N5', x: 150, y: 190 },
        { id: 'te', w: '手《て》', en: 'hand', lv: 'N5', x: 92, y: 214 }, { id: 'ude', w: '腕《うで》', en: 'arm', lv: 'N4', x: 200, y: 160 },
        { id: 'hiza', w: '膝《ひざ》', en: 'knee', lv: 'N4', x: 139, y: 300 }, { id: 'ashi', w: '足《あし》', en: 'foot, leg', lv: 'N5', x: 161, y: 362 } ],
      say: [ { ja: '頭《あたま》 が 痛《いた》い です。', en: 'My head hurts.', p: 'atama' } ] },
    { id: 'body-back', group: 'body', title: 'The body (back)', lv: 'N5', kind: 'diagram', art: 'body-back', intro: 'Words for the back of the body.',
      parts: [ { id: 'senaka', w: '背中《せなか》', en: 'back', lv: 'N5', x: 150, y: 140 }, { id: 'koshi', w: '腰《こし》', en: 'lower back', lv: 'N4', x: 150, y: 205 },
        { id: 'oshiri', w: 'お尻《しり》', en: 'bottom', lv: 'N4', x: 150, y: 236 }, { id: 'kata', w: '肩《かた》', en: 'shoulder', lv: 'N4', x: 116, y: 104 } ],
      say: [] },
    { id: 'fx-noart', group: 'body', title: 'Inside the body', lv: 'N4', kind: 'diagram', art: 'fx-missing', intro: 'A set whose art is missing.',
      parts: [ { id: 'hone', w: '骨《ほね》', en: 'bone', lv: 'N4', x: 10, y: 10 }, { id: 'shinzou', w: '心臓《しんぞう》', en: 'heart', lv: 'N3', x: 50, y: 50 } ], say: [] },
    { id: 'fx-cards', group: 'body', title: 'Pets and farm animals', lv: 'N5', kind: 'cards', intro: 'Animals.',
      parts: [ ['inu', '犬《いぬ》', 'dog', '🐕'], ['neko', '猫《ねこ》', 'cat', '🐈'], ['tori', '鳥《とり》', 'bird', '🐦'], ['uma', '馬《うま》', 'horse', '🐎'],
        ['ushi', '牛《うし》', 'cow', '🐄'], ['buta', '豚《ぶた》', 'pig', '🐖'], ['hitsuji', '羊《ひつじ》', 'sheep', '🐑'], ['niwatori', '鶏《にわとり》', 'chicken', '🐓'],
        ['usagi', '兎《うさぎ》', 'rabbit', '🐇'], ['sakana', '魚《さかな》', 'fish', '🐟'], ['kame', '亀《かめ》', 'turtle', '🐢'], ['nezumi', '鼠《ねずみ》', 'mouse', '🐁'] ]
        .map(function (a) { return { id: a[0], w: a[1], en: a[2], lv: 'N5', pic: a[3] }; }), say: [] }
  ]);
  window.PICTURE_BODYMAP = { sets: ['body-front', 'body-back'],
    ask: [ { ja: 'どこ が 痛《いた》い です か。', en: 'Where does it hurt?' }, { ja: '指《ゆび》 で 指《さ》して ください。', en: 'Please point with your finger.' },
      { ja: 'いつ から 痛《いた》い です か。', en: 'Since when has it hurt?' }, { ja: 'ずっと 痛《いた》い です か。', en: 'Does it hurt all the time?' },
      { ja: '夜《よる》 も 痛《いた》い です か。', en: 'Does it hurt at night too?' }, { ja: '動《うご》く と 痛《いた》い です か。', en: 'Does it hurt when you move?' },
      { ja: 'ほか に 痛《いた》い ところ は あります か。', en: 'Does it hurt anywhere else?' }, { ja: '数字《すうじ》 で 教《おし》えて ください。', en: 'Please tell me with a number.' } ],
    words: [ { ja: 'ずきずき', en: 'throbbing' }, { ja: 'ちくちく', en: 'prickling' }, { ja: 'ひりひり', en: 'stinging' }, { ja: 'がんがん', en: 'pounding' },
      { ja: '重《おも》い', en: 'heavy' }, { ja: 'しびれる', en: 'numb, tingling' }, { ja: 'かゆい', en: 'itchy' }, { ja: '鋭《するど》い', en: 'sharp' },
      { ja: '鈍《にぶ》い', en: 'dull' }, { ja: '熱《あつ》い', en: 'burning, hot' } ],
    scale: { ja: '一番《いちばん》 痛《いた》い の は 何番《なんばん》 です か。', en: 'Which number is the worst pain?' } };
})();
