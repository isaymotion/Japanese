/* Test fixture for js/cloze.js and js/leveltest.js QA (not app data). Shape: PLAN-0.23.md section A.3. */
window.GRAMMAR_CLOZE = [
  { id: 'fx-n5-001', lv: 'N5', l: 'desu', s: '私《わたし》 ＿ 看護師《かんごし》 です。', a: 'は', opts: ['は', 'を', 'で', 'へ'], en: 'I am a nurse.', why: 'は marks the topic of the sentence.' },
  { id: 'fx-n5-002', lv: 'N5', l: 'desu', s: '佐藤《さとう》さん です ＿。', a: 'か', opts: ['を', 'か', 'に', 'で'], en: 'Are you Mr. Sato?', why: 'か at the end turns the sentence into a question.' },
  { id: 'fx-n5-003', lv: 'N5', l: 'desu', s: '私《わたし》 は 患者《かんじゃ》 じゃ ＿。', a: 'ありません', opts: ['ありません', 'です', 'ます', 'いません'], en: 'I am not a patient.', why: 'じゃ ありません is the negative of です.' },
  { id: 'fx-n5-004', lv: 'N5', l: 'no-mo-to', s: 'これ は 母《はは》 ＿ 薬《くすり》 です。', a: 'の', opts: ['の', 'を', 'が', 'へ'], en: "This is my mother's medicine.", why: 'の links two nouns: the owner comes first.' },
  { id: 'fx-n5-005', lv: 'N5', l: 'no-mo-to', s: '私《わたし》 ＿ 看護師《かんごし》 です。', a: 'も', opts: ['も', 'を', 'へ', 'で'], en: 'I am a nurse too.', why: 'も replaces は to mean "also".' },
  { id: 'fx-n5-006', lv: 'N5', l: 'verbs-masu', s: '毎朝《まいあさ》 薬《くすり》 ＿ 飲《の》みます。', a: 'を', opts: ['に', 'を', 'が', 'へ'], en: 'I take medicine every morning.', why: 'を marks the object of 飲《の》む.' },
  { id: 'fx-n4-001', lv: 'N4', l: 'reasons', s: '頭《あたま》 が 痛《いた》い ＿、 休《やす》みます。', a: 'ので', opts: ['ので', 'のに', 'けど', 'まで'], en: 'I have a headache, so I will rest.', why: 'ので gives a reason; のに and けど mean "although".' },
  { id: 'fx-n4-002', lv: 'N4', l: 'can', s: '昨日《きのう》 は よく ＿。', a: '眠《ねむ》れませんでした', opts: ['眠《ねむ》れませんでした', '眠《ねむ》りません', '眠《ねむ》れます', '眠《ねむ》って ください'], en: "I couldn't sleep well yesterday.", why: 'The past negative potential: 眠《ねむ》れませんでした.' },
  { id: 'fx-n4-003', lv: 'N4', l: 'when-if', s: '熱《ねつ》 が 出《で》＿、 すぐ 電話《でんわ》 して ください。', a: 'たら', opts: ['たら', 'ても', 'ながら', 'たり'], en: 'If you get a fever, call right away.', why: 'たら sets a condition: once that happens, do this.' },
  { id: 'fx-n4-004', lv: 'N4', l: 'reasons', s: '寒《さむ》い ＿ 窓《まど》 を 閉《し》めました。', a: 'から', opts: ['から', 'でも', 'まで', 'より'], en: 'It was cold, so I closed the window.', why: 'から gives the reason before the result.' },
  { id: 'fx-n3-001', lv: 'N3', l: 'aida-uchi', s: '若《わか》い ＿ に いろいろ な 国《くに》 へ 行《い》きたい。', a: 'うち', opts: ['うち', 'ため', 'ほど', 'せい'], en: "I want to visit many countries while I'm young.", why: 'うち に: while the chance is there.' },
  { id: 'fx-n3-002', lv: 'N3', l: 'hodo-kurai', s: '練習《れんしゅう》 すれ ば する ＿ 上手《じょうず》 に なる。', a: 'ほど', opts: ['ほど', 'まで', 'だけ', 'ばかり'], en: 'The more you practise, the better you get.', why: '〜ば 〜ほど: the more …, the more ….' },
  { id: 'fx-n3-003', lv: 'N3', l: 'aida-uchi', s: '夫《おっと》 が 寝《ね》て いる ＿、 私《わたし》 は 起《お》きて いました。', a: '間《あいだ》', opts: ['間《あいだ》', '前《まえ》', '後《あと》', '時《じ》'], en: 'The whole time my husband was asleep, I was awake.', why: '間《あいだ》 (without に) is for something that lasts the whole time.' },
  { id: 'fx-n2-001', lv: 'N2', l: 'n2-ni-tsurete', s: '年《とし》 を とる ＿ 眠《ねむ》り が 浅《あさ》く なる。', a: 'に つれて', opts: ['に つれて', 'に 対《たい》して', 'に よって', 'に とって'], en: 'Sleep gets lighter as you grow older.', why: 'に つれて: as one thing changes, another changes with it.' },
  { id: 'fx-n2-002', lv: 'N2', l: 'n2-tsutsu', s: '体《からだ》 に 悪《わる》い と 知《し》り ＿、 たばこ を やめられない。', a: 'つつ も', opts: ['つつ も', 'ながら に', 'つつ ある', 'つつ に'], en: "Although I know it's bad for me, I can't stop smoking.", why: 'つつ も means "although" after a verb stem.' },
  { id: 'fx-zz-001', lv: 'N2', l: 'no-such-lesson', s: '患者《かんじゃ》 の 回復《かいふく》 ＿ 伴《ともな》って、 薬《くすり》 を 減《へ》らす。', a: 'に', opts: ['に', 'を', 'が', 'で'], en: "As the patient recovers, we will reduce the medicine.", why: 'に 伴《ともな》って: along with.' }
];
