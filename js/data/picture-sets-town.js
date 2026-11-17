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
  { id: 'street', group: 'town', title: 'At the crossroads', lv: 'N5', kind: 'diagram', art: 'street',
    intro: 'A street corner seen from above, with the words you need to ask for and give directions.',
    parts: [
      { id: 'michi', w: '道《みち》', en: 'road, street', lv: 'N5', x: 70, y: 202 },
      { id: 'kousaten', w: '交差点《こうさてん》', en: 'crossroads, intersection', lv: 'N4', x: 202, y: 202 },
      { id: 'shingou', w: '信号《しんごう》', en: 'traffic light', lv: 'N4', x: 161, y: 97 },
      { id: 'oudanhodou', w: '横断歩道《おうだんほどう》', en: 'pedestrian crossing', lv: 'N3', x: 203, y: 250 },
      { id: 'kado', w: '角《かど》', en: 'corner', lv: 'N4', x: 164, y: 240 },
      { id: 'hodou', w: '歩道《ほどう》', en: 'pavement, sidewalk', lv: 'N4', x: 330, y: 239 },
      { id: 'kuruma', w: '車《くるま》', en: 'car', lv: 'N5', x: 218, y: 55 },
      { id: 'byouin', w: '病院《びょういん》', en: 'hospital', lv: 'N5', x: 80, y: 98 },
      { id: 'yuubinkyoku', w: '郵便局《ゆうびんきょく》', en: 'post office', lv: 'N5', x: 288, y: 110 },
      { id: 'gakkou', w: '学校《がっこう》', en: 'school', lv: 'N5', x: 361, y: 110 },
      { id: 'ginkou', w: '銀行《ぎんこう》', en: 'bank', lv: 'N5', x: 291, y: 330 },
      { id: 'mise', w: '店《みせ》', en: 'shop', lv: 'N5', x: 367, y: 345 },
      { id: 'kouen', w: '公園《こうえん》', en: 'park', lv: 'N5', x: 82, y: 322 }
    ],
    say: [
      { ja: 'この 交差点《こうさてん》 を まっすぐ 行《い》って ください。', en: 'Go straight on at this crossroads.', p: 'kousaten' },
      { ja: 'あの 角《かど》 を 右《みぎ》 に 曲《ま》がって ください。', en: 'Turn right at that corner.', p: 'kado' },
      { ja: '信号《しんごう》 が 赤《あか》 の とき は 止《と》まります。', en: 'When the light is red, you stop.', p: 'shingou' },
      { ja: '横断歩道《おうだんほどう》 を 渡《わた》って ください。', en: 'Please cross at the pedestrian crossing.', p: 'oudanhodou' },
      { ja: '具合《ぐあい》 が 悪《わる》い とき は ここ へ 行《い》きます。', en: 'When you feel unwell, you go here.', p: 'byouin' },
      { ja: 'ここ で 切手《きって》 を 買《か》って、 手紙《てがみ》 を 出《だ》します。', en: 'Here you buy stamps and send letters.', p: 'yuubinkyoku' },
      { ja: '銀行《ぎんこう》 は 郵便局《ゆうびんきょく》 の 向《む》かい に あります。', en: 'The bank is across the street from the post office.', p: 'ginkou' },
      { ja: '車《くるま》 が 来《き》ます から、 気《き》 を つけて ください。', en: 'A car is coming, so be careful.', p: 'kuruma' },
      { ja: '人《ひと》 は 歩道《ほどう》 を 歩《ある》きます。', en: 'People walk on the pavement.', p: 'hodou' },
      { ja: '公園《こうえん》 の 木《き》 の 下《した》 で 少《すこ》し 休《やす》みましょう。', en: 'Let us rest a little under the trees in the park.', p: 'kouen' }
    ] },

  { id: 'station', group: 'town', title: 'At the station', lv: 'N4', kind: 'diagram', art: 'station',
    intro: 'A small station: the ticket hall upstairs, then the stairs or the lift down to the platform and the train.',
    parts: [
      { id: 'kippu', w: '切符《きっぷ》', en: 'ticket', lv: 'N4', x: 212, y: 159 },
      { id: 'kaisatsu', w: '改札《かいさつ》', en: 'ticket gate', lv: 'N3', x: 281, y: 160 },
      { id: 'tokei', w: '時計《とけい》', en: 'clock', lv: 'N5', x: 281, y: 70 },
      { id: 'ekiin', w: '駅員《えきいん》', en: 'station staff', lv: 'N4', x: 348, y: 152 },
      { id: 'deguchi', w: '出口《でぐち》', en: 'exit', lv: 'N4', x: 395, y: 164 },
      { id: 'erebeetaa', w: 'エレベーター', en: 'lift, elevator', lv: 'N5', x: 30, y: 296 },
      { id: 'kaidan', w: '階段《かいだん》', en: 'stairs', lv: 'N4', x: 108, y: 250 },
      { id: 'benchi', w: 'ベンチ', en: 'bench', lv: 'N4', x: 191, y: 302 },
      { id: 'hoomu', w: 'ホーム', en: 'platform', lv: 'N4', x: 130, y: 338 },
      { id: 'senro', w: '線路《せんろ》', en: 'railway track', lv: 'N3', x: 130, y: 395 },
      { id: 'densha', w: '電車《でんしゃ》', en: 'train', lv: 'N5', x: 262, y: 342 },
      { id: 'doa', w: 'ドア', en: 'door (of the train)', lv: 'N5', x: 345, y: 336 }
    ],
    say: [
      { ja: '次《つぎ》 の 電車《でんしゃ》 に 乗《の》りましょう。', en: 'Let us take the next train.', p: 'densha' },
      { ja: 'ドア が 閉《し》まります。 ご注意《ちゅうい》 ください。', en: 'The doors are closing. Please be careful.', p: 'doa' },
      { ja: 'ホーム の 端《はし》 を 歩《ある》かないで ください。', en: 'Please do not walk along the edge of the platform.', p: 'hoomu' },
      { ja: '線路《せんろ》 に 降《お》りないで ください。', en: 'Please do not go down onto the tracks.', p: 'senro' },
      { ja: '改札《かいさつ》 の 前《まえ》 で 待《ま》ち合《あ》わせましょう。', en: 'Let us meet in front of the ticket gate.', p: 'kaisatsu' },
      { ja: '切符《きっぷ》 を なくして しまいました。', en: 'I have lost my ticket.', p: 'kippu' },
      { ja: '車椅子《くるまいす》 の 方《かた》 は エレベーター を 使《つか》って ください。', en: 'People in wheelchairs, please use the lift.', p: 'erebeetaa' },
      { ja: '急《いそ》いで 階段《かいだん》 を 降《お》りる と 危《あぶ》ない です。', en: 'It is dangerous to rush down the stairs.', p: 'kaidan' },
      { ja: '少《すこ》し 疲《つか》れた ので、 ベンチ で 休《やす》みましょう。', en: 'I am a little tired, so let us rest on the bench.', p: 'benchi' },
      { ja: '気分《きぶん》 が 悪《わる》く なったら、 駅員《えきいん》 に 言《い》って ください。', en: 'If you start to feel unwell, tell a member of the station staff.', p: 'ekiin' }
    ] },

  { id: 'buildings', group: 'town', title: 'Buildings in town', lv: 'N5', kind: 'cards',
    intro: 'Buildings and places in town that you go to in everyday life.',
    parts: [
      { id: 'ie', w: '家《いえ》', en: 'house, home', lv: 'N5', pic: '🏠' },
      { id: 'byouin', w: '病院《びょういん》', en: 'hospital', lv: 'N5', pic: '🏥' },
      { id: 'yakkyoku', w: '薬局《やっきょく》', en: 'pharmacy', lv: 'N3', pic: '💊' },
      { id: 'ginkou', w: '銀行《ぎんこう》', en: 'bank', lv: 'N5', pic: '🏦' },
      { id: 'yuubinkyoku', w: '郵便局《ゆうびんきょく》', en: 'post office', lv: 'N5', pic: '🏣' },
      { id: 'gakkou', w: '学校《がっこう》', en: 'school', lv: 'N5', pic: '🏫' },
      { id: 'hoteru', w: 'ホテル', en: 'hotel', lv: 'N5', pic: '🏨' },
      { id: 'konbini', w: 'コンビニ', en: 'convenience store', lv: 'N5', pic: '🏪' },
      { id: 'depaato', w: 'デパート', en: 'department store', lv: 'N5', pic: '🏬' },
      { id: 'kaisha', w: '会社《かいしゃ》', en: 'company, office', lv: 'N5', pic: '🏢' },
      { id: 'eki', w: '駅《えき》', en: 'station', lv: 'N5', pic: '🚉' },
      { id: 'koujou', w: '工場《こうじょう》', en: 'factory', lv: 'N4', pic: '🏭' },
      { id: 'jinja', w: '神社《じんじゃ》', en: 'Shinto shrine', lv: 'N4', pic: '⛩️' },
      { id: 'kissaten', w: '喫茶店《きっさてん》', en: 'coffee shop', lv: 'N4', pic: '☕' },
      { id: 'resutoran', w: 'レストラン', en: 'restaurant', lv: 'N5', pic: '🍴' },
      { id: 'toshokan', w: '図書館《としょかん》', en: 'library', lv: 'N5', pic: '📚' }
    ],
    say: [
      { ja: '熱《ねつ》 が ある とき は 病院《びょういん》 へ 行《い》きます。', en: 'When I have a fever, I go to the hospital.', p: 'byouin' },
      { ja: '薬局《やっきょく》 で 薬《くすり》 を もらいます。', en: 'You get your medicine at the pharmacy.', p: 'yakkyoku' },
      { ja: '今日《きょう》 は 家《いえ》 で ゆっくり 休《やす》んで ください。', en: 'Please rest well at home today.', p: 'ie' },
      { ja: '会社《かいしゃ》 で 何《なに》 か 困《こま》って いる こと は あります か。', en: 'Is anything troubling you at work?', p: 'kaisha' },
      { ja: '子供《こども》 は 毎朝《まいあさ》 学校《がっこう》 へ 行《い》きます。', en: 'The children go to school every morning.', p: 'gakkou' },
      { ja: '旅行《りょこう》 の とき は ホテル に 泊《と》まります。', en: 'When I travel, I stay at a hotel.', p: 'hoteru' },
      { ja: 'コンビニ は 夜《よる》 遅《おそ》くても 開《あ》いて います。', en: 'The convenience store is open even late at night.', p: 'konbini' },
      { ja: '駅《えき》 で 電車《でんしゃ》 に 乗《の》ります。', en: 'You get on the train at the station.', p: 'eki' },
      { ja: '銀行《ぎんこう》 は 午後《ごご》 三時《さんじ》 に 閉《し》まります。', en: 'The bank closes at three in the afternoon.', p: 'ginkou' },
      { ja: '図書館《としょかん》 で 静《しず》か に 本《ほん》 を 読《よ》みます。', en: 'I read books quietly at the library.', p: 'toshokan' }
    ] },

  { id: 'hospital-floor', group: 'town', title: 'A hospital floor plan', lv: 'N4', kind: 'diagram', art: 'hospital-floor',
    intro: 'A simple hospital floor plan: from the entrance to reception, the waiting room, the consulting room, the pharmacy and the ward.',
    parts: [
      { id: 'iriguchi', w: '入口《いりぐち》', en: 'entrance', lv: 'N4', x: 200, y: 360 },
      { id: 'deguchi', w: '出口《でぐち》', en: 'exit', lv: 'N4', x: 380, y: 360 },
      { id: 'uketsuke', w: '受付《うけつけ》', en: 'reception', lv: 'N4', x: 172, y: 296 },
      { id: 'machiaishitsu', w: '待合室《まちあいしつ》', en: 'waiting room', lv: 'N3', x: 212, y: 210 },
      { id: 'shinsatsushitsu', w: '診察室《しんさつしつ》', en: "consulting room (doctor's room)", lv: 'N3', x: 98, y: 210 },
      { id: 'yakkyoku', w: '薬局《やっきょく》', en: 'pharmacy', lv: 'N3', x: 360, y: 232 },
      { id: 'kaikei', w: '会計《かいけい》', en: 'cashier (where you pay)', lv: 'N3', x: 332, y: 296 },
      { id: 'byoushitsu', w: '病室《びょうしつ》', en: 'ward, patient room', lv: 'N4', x: 80, y: 62 },
      { id: 'naasusuteeshon', w: 'ナースステーション', en: "nurses' station", lv: 'N4', x: 200, y: 66 },
      { id: 'toire', w: 'トイレ', en: 'toilet', lv: 'N5', x: 284, y: 98 },
      { id: 'erebeetaa', w: 'エレベーター', en: 'lift, elevator', lv: 'N5', x: 340, y: 70 },
      { id: 'kaidan', w: '階段《かいだん》', en: 'stairs', lv: 'N4', x: 387, y: 64 },
      { id: 'baiten', w: '売店《ばいてん》', en: 'hospital shop, kiosk', lv: 'N4', x: 50, y: 330 },
      { id: 'denwa', w: '電話《でんわ》', en: 'telephone', lv: 'N5', x: 261, y: 342 },
      { id: 'takushii', w: 'タクシー', en: 'taxi', lv: 'N5', x: 108, y: 404 },
      { id: 'niwa', w: '庭《にわ》', en: 'garden', lv: 'N4', x: 292, y: 404 }
    ],
    say: [
      { ja: '初《はじ》めて の 方《かた》 は 受付《うけつけ》 で 保険証《ほけんしょう》 を 出《だ》して ください。', en: 'If this is your first visit, please show your insurance card at reception.', p: 'uketsuke' },
      { ja: 'お名前《なまえ》 を 呼《よ》ぶ まで 待合室《まちあいしつ》 で お待《ま》ち ください。', en: 'Please wait in the waiting room until we call your name.', p: 'machiaishitsu' },
      { ja: 'どうぞ、 診察室《しんさつしつ》 に お入《はい》り ください。', en: 'Please come into the consulting room.', p: 'shinsatsushitsu' },
      { ja: '診察《しんさつ》 の 後《あと》 で、 会計《かいけい》 で お金《かね》 を 払《はら》います。', en: 'After the consultation, you pay at the cashier.', p: 'kaikei' },
      { ja: 'お薬《くすり》 は 薬局《やっきょく》 で もらって ください。', en: 'Please collect your medicine at the pharmacy.', p: 'yakkyoku' },
      { ja: '入院中《にゅういんちゅう》 は 病室《びょうしつ》 で ゆっくり 休《やす》んで ください。', en: 'While you are in hospital, please rest well in your room.', p: 'byoushitsu' },
      { ja: '何《なに》 か あったら、 ナースステーション の 看護師《かんごし》 に 声《こえ》 を かけて ください。', en: "If anything happens, please speak to a nurse at the nurses' station.", p: 'naasusuteeshon' },
      { ja: '足《あし》 が 痛《いた》い 方《かた》 は エレベーター を ご利用《りよう》 ください。', en: 'If your legs hurt, please use the lift.', p: 'erebeetaa' },
      { ja: 'すみません、 トイレ は どこ です か。', en: 'Excuse me, where is the toilet?', p: 'toire' },
      { ja: '天気《てんき》 が いい ので、 庭《にわ》 を 散歩《さんぽ》しましょう。', en: 'The weather is nice, so let us take a walk in the garden.', p: 'niwa' }
    ] },

  { id: 'positions', group: 'town', title: 'Where things are', lv: 'N5', kind: 'diagram', art: 'positions',
    intro: 'Position words: each pin marks a thing that is on, under, in, in front of, behind, next to, left of, right of, between or outside something.',
    parts: [
      { id: 'ue', w: '上《うえ》', en: 'on, above (the cat on the table)', lv: 'N5', x: 94, y: 218 },
      { id: 'shita', w: '下《した》', en: 'under, below (the ball under the table)', lv: 'N5', x: 95, y: 333 },
      { id: 'naka', w: '中《なか》', en: 'in, inside (the apples in the box)', lv: 'N5', x: 312, y: 279 },
      { id: 'mae', w: '前《まえ》', en: 'in front of (the bag in front of the box)', lv: 'N5', x: 311, y: 372 },
      { id: 'ushiro', w: '後《うし》ろ', en: 'behind (the dog behind the box)', lv: 'N5', x: 356, y: 262 },
      { id: 'tonari', w: '隣《となり》', en: 'next to (the chair next to the table)', lv: 'N5', x: 203, y: 292 },
      { id: 'hidari', w: '左《ひだり》', en: 'left (the cup left of the clock)', lv: 'N5', x: 75, y: 106 },
      { id: 'migi', w: '右《みぎ》', en: 'right (the book right of the clock)', lv: 'N5', x: 219, y: 95 },
      { id: 'aida', w: '間《あいだ》', en: 'between (the clock between the cup and the book)', lv: 'N4', x: 145, y: 96 },
      { id: 'soto', w: '外《そと》', en: 'outside (the bird outside the window)', lv: 'N5', x: 349, y: 106 }
    ],
    say: [
      { ja: '猫《ねこ》 は テーブル の 上《うえ》 に います。', en: 'The cat is on the table.', p: 'ue' },
      { ja: 'ボール は テーブル の 下《した》 に あります。', en: 'The ball is under the table.', p: 'shita' },
      { ja: 'りんご は 箱《はこ》 の 中《なか》 に あります。', en: 'The apples are in the box.', p: 'naka' },
      { ja: 'かばん は 箱《はこ》 の 前《まえ》 に あります。', en: 'The bag is in front of the box.', p: 'mae' },
      { ja: '犬《いぬ》 は 箱《はこ》 の 後《うし》ろ に います。', en: 'The dog is behind the box.', p: 'ushiro' },
      { ja: 'いす は テーブル の 隣《となり》 に あります。', en: 'The chair is next to the table.', p: 'tonari' },
      { ja: 'コップ は 時計《とけい》 の 左《ひだり》 に あります。', en: 'The cup is to the left of the clock.', p: 'hidari' },
      { ja: '本《ほん》 は 時計《とけい》 の 右《みぎ》 に あります。', en: 'The book is to the right of the clock.', p: 'migi' },
      { ja: '時計《とけい》 は コップ と 本《ほん》 の 間《あいだ》 に あります。', en: 'The clock is between the cup and the book.', p: 'aida' },
      { ja: '鳥《とり》 は 窓《まど》 の 外《そと》 に います。', en: 'The bird is outside the window.', p: 'soto' }
    ] }
]);
