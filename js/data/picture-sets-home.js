/* Picture words, group 'home' (0.24.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'N5'|'N4',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-home.js), intro: one English sentence,
     parts: [ { id: short romaji, w: ONE word in the notation (dictionary form), en, lv: 'N5'|'N4'|'N3',
                diagram: x, y = the point ON the thing in the art's viewBox units (pins at least 26 apart, 12 inside the edge);
                cards: pic = ONE emoji, Unicode Emoji 12.0 or older, no flags / skin tones / ZWJ sequences } ],   8 to 16 parts (cards 10 to 16)
     say: [ { ja: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);                       6 to 10 sentences
   At most a quarter of a set's words N3, none above. group = 'home' for every set of this file.
   Sets of this file (PLAN C): house-outside d N5; living-room d N5; kitchen d N4; bathroom d N4 (bath, washbasin, toilet); bedroom d N5; appliances c N4.
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'house-outside', group: 'home', title: 'Outside a house', lv: 'N5', kind: 'diagram', art: 'house-outside',
    intro: 'The words for the outside of a house, its garden and the road in front of it.',
    parts: [
      { id: 'yane', w: '屋根《やね》', en: 'roof', lv: 'N4', x: 200, y: 104 },
      { id: 'mado', w: '窓《まど》', en: 'window', lv: 'N5', x: 153, y: 170 },
      { id: 'beranda', w: 'ベランダ', en: 'balcony', lv: 'N3', x: 246, y: 196 },
      { id: 'doa', w: 'ドア', en: 'door', lv: 'N5', x: 242, y: 230 },
      { id: 'kabe', w: '壁《かべ》', en: 'wall', lv: 'N4', x: 200, y: 240 },
      { id: 'mon', w: '門《もん》', en: 'gate', lv: 'N4', x: 336, y: 240 },
      { id: 'posuto', w: 'ポスト', en: 'mailbox', lv: 'N5', x: 394, y: 212 },
      { id: 'ki', w: '木《き》', en: 'tree', lv: 'N5', x: 46, y: 164 },
      { id: 'hana', w: '花《はな》', en: 'flower', lv: 'N5', x: 86, y: 228 },
      { id: 'niwa', w: '庭《にわ》', en: 'garden, yard', lv: 'N5', x: 66, y: 276 },
      { id: 'kuruma', w: '車《くるま》', en: 'car', lv: 'N5', x: 347, y: 302 },
      { id: 'michi', w: '道《みち》', en: 'road, street', lv: 'N5', x: 110, y: 312 }
    ],
    say: [
      { ja: '屋根《やね》 の 上《うえ》 に 猫《ねこ》 が います。', en: 'There is a cat on the roof.', p: 'yane' },
      { ja: '毎朝《まいあさ》 窓《まど》 を 開《あ》けて、 空気《くうき》 を 入《い》れ替《か》えます。', en: 'Every morning I open the window and let in fresh air.', p: 'mado' },
      { ja: 'ドア を ノック します。', en: 'I knock on the door.', p: 'doa' },
      { ja: '病院《びょういん》 から の 手紙《てがみ》 が ポスト に 入《はい》って いました。', en: 'There was a letter from the hospital in the mailbox.', p: 'posuto' },
      { ja: '子供《こども》 が 庭《にわ》 で 遊《あそ》んで います。', en: 'A child is playing in the garden.', p: 'niwa' },
      { ja: '母《はは》 は 毎日《まいにち》 花《はな》 に 水《みず》 を やります。', en: 'My mother waters the flowers every day.', p: 'hana' },
      { ja: '大《おお》きい 木《き》 の 下《した》 は 涼《すず》しい です。', en: 'It is cool under the big tree.', p: 'ki' },
      { ja: '父《ちち》 は 車《くるま》 で 病院《びょういん》 に 行《い》きます。', en: 'My father goes to the hospital by car.', p: 'kuruma' },
      { ja: '門《もん》 の 前《まえ》 で 友達《ともだち》 を 待《ま》って います。', en: 'I am waiting for my friend in front of the gate.', p: 'mon' },
      { ja: 'この 道《みち》 を まっすぐ 行《い》く と、 病院《びょういん》 が あります。', en: 'If you go straight along this road, you come to the hospital.', p: 'michi' }
    ] },

  { id: 'living-room', group: 'home', title: 'The living room', lv: 'N5', kind: 'diagram', art: 'living-room',
    intro: 'The furniture and things in a living room, from the light on the ceiling to the cup on the table.',
    parts: [
      { id: 'denki', w: '電気《でんき》', en: 'light', lv: 'N5', x: 216, y: 33 },
      { id: 'eakon', w: 'エアコン', en: 'air conditioner', lv: 'N4', x: 290, y: 31 },
      { id: 'mado', w: '窓《まど》', en: 'window', lv: 'N5', x: 112, y: 102 },
      { id: 'kaaten', w: 'カーテン', en: 'curtain', lv: 'N4', x: 82, y: 132 },
      { id: 'tokei', w: '時計《とけい》', en: 'clock', lv: 'N5', x: 206, y: 115 },
      { id: 'e', w: '絵《え》', en: 'picture, painting', lv: 'N5', x: 281, y: 94 },
      { id: 'doa', w: 'ドア', en: 'door', lv: 'N5', x: 366, y: 190 },
      { id: 'terebi', w: 'テレビ', en: 'television', lv: 'N5', x: 290, y: 162 },
      { id: 'hondana', w: '本棚《ほんだな》', en: 'bookshelf', lv: 'N4', x: 36, y: 168 },
      { id: 'sofaa', w: 'ソファー', en: 'sofa', lv: 'N4', x: 135, y: 186 },
      { id: 'teeburu', w: 'テーブル', en: 'table', lv: 'N5', x: 150, y: 294 },
      { id: 'koppu', w: 'コップ', en: 'glass, cup', lv: 'N5', x: 136, y: 266 },
      { id: 'shinbun', w: '新聞《しんぶん》', en: 'newspaper', lv: 'N5', x: 224, y: 278 },
      { id: 'isu', w: '椅子《いす》', en: 'chair', lv: 'N5', x: 338, y: 274 }
    ],
    say: [
      { ja: '部屋《へや》 が 暗《くら》い です ね。 電気《でんき》 を つけましょう。', en: 'The room is dark, isn’t it. Let’s turn on the light.', p: 'denki' },
      { ja: '暑《あつ》い です から、 エアコン を つけましょう。', en: 'It is hot, so let’s turn on the air conditioner.', p: 'eakon' },
      { ja: '窓《まど》 を 開《あ》けて、 部屋《へや》 に 風《かぜ》 を 入《い》れます。', en: 'I open the window and let air into the room.', p: 'mado' },
      { ja: 'まぶしい です か。 カーテン を 閉《し》めましょう か。', en: 'Is it too bright? Shall I close the curtains?', p: 'kaaten' },
      { ja: '時計《とけい》 を 見《み》て ください。 もう 三時《さんじ》 です。', en: 'Please look at the clock. It is already three o’clock.', p: 'tokei' },
      { ja: '夜《よる》 は テレビ で ニュース を 見《み》ます。', en: 'In the evening I watch the news on television.', p: 'terebi' },
      { ja: 'ソファー に 座《すわ》って、 少《すこ》し 休《やす》んで ください。', en: 'Please sit on the sofa and rest a little.', p: 'sofaa' },
      { ja: 'お薬《くすり》 は この コップ の 水《みず》 で 飲《の》んで ください。', en: 'Please take your medicine with the water in this glass.', p: 'koppu' },
      { ja: '父《ちち》 は 毎朝《まいあさ》 新聞《しんぶん》 を 読《よ》みます。', en: 'My father reads the newspaper every morning.', p: 'shinbun' },
      { ja: '寒《さむ》い です から、 ドア を 閉《し》めて ください。', en: 'It is cold, so please close the door.', p: 'doa' }
    ] },

  { id: 'kitchen', group: 'home', title: 'The kitchen', lv: 'N4', kind: 'diagram', art: 'kitchen',
    intro: 'The things in a Japanese kitchen and what you do with them.',
    parts: [
      { id: 'reizouko', w: '冷蔵庫《れいぞうこ》', en: 'refrigerator', lv: 'N4', x: 44, y: 186 },
      { id: 'mado', w: '窓《まど》', en: 'window', lv: 'N5', x: 114, y: 50 },
      { id: 'koppu', w: 'コップ', en: 'glass, cup', lv: 'N5', x: 324, y: 52 },
      { id: 'nagashi', w: '流《なが》し', en: 'kitchen sink', lv: 'N4', x: 116, y: 173 },
      { id: 'houchou', w: '包丁《ほうちょう》', en: 'kitchen knife', lv: 'N3', x: 194, y: 176 },
      { id: 'nabe', w: '鍋《なべ》', en: 'pot, saucepan', lv: 'N4', x: 268, y: 117 },
      { id: 'furaipan', w: 'フライパン', en: 'frying pan', lv: 'N4', x: 306, y: 128 },
      { id: 'konro', w: 'コンロ', en: 'cooker, stove', lv: 'N3', x: 292, y: 173 },
      { id: 'sara', w: '皿《さら》', en: 'plate, dish', lv: 'N4', x: 290, y: 46 },
      { id: 'tana', w: '棚《たな》', en: 'shelf', lv: 'N4', x: 252, y: 66 },
      { id: 'renji', w: '電子《でんし》レンジ', en: 'microwave oven', lv: 'N4', x: 375, y: 81 },
      { id: 'suihanki', w: '炊飯器《すいはんき》', en: 'rice cooker', lv: 'N3', x: 381, y: 143 },
      { id: 'gomibako', w: 'ごみ箱《ばこ》', en: 'rubbish bin', lv: 'N4', x: 130, y: 278 }
    ],
    say: [
      { ja: '牛乳《ぎゅうにゅう》 は 冷蔵庫《れいぞうこ》 に 入《い》れて おいて ください。', en: 'Please put the milk in the refrigerator.', p: 'reizouko' },
      { ja: '料理《りょうり》 の 前《まえ》 に、 流《なが》し で 手《て》 を 洗《あら》います。', en: 'Before cooking, I wash my hands at the sink.', p: 'nagashi' },
      { ja: 'すみません、 コップ に 水《みず》 を 一杯《いっぱい》 ください。', en: 'Excuse me, could I have a glass of water?', p: 'koppu' },
      { ja: '包丁《ほうちょう》 を 使《つか》う とき は、 指《ゆび》 に 気《き》 を つけて ください。', en: 'When you use the kitchen knife, be careful of your fingers.', p: 'houchou' },
      { ja: '鍋《なべ》 で 野菜《やさい》 の スープ を 作《つく》ります。', en: 'I make vegetable soup in the pot.', p: 'nabe' },
      { ja: '朝《あさ》 は フライパン で 卵《たまご》 を 焼《や》きます。', en: 'In the morning I fry eggs in the frying pan.', p: 'furaipan' },
      { ja: '出《で》かける 前《まえ》 に、 コンロ の 火《ひ》 を 消《け》して ください。', en: 'Please turn off the gas on the stove before you go out.', p: 'konro' },
      { ja: 'ご飯《はん》 は 炊飯器《すいはんき》 で 炊《た》きます。', en: 'I cook rice in the rice cooker.', p: 'suihanki' },
      { ja: 'お弁当《べんとう》 を 電子《でんし》レンジ で 温《あたた》めます。', en: 'I heat up my lunch box in the microwave.', p: 'renji' },
      { ja: '使《つか》った ティッシュ は ごみ箱《ばこ》 に 捨《す》てて ください。', en: 'Please throw used tissues in the bin.', p: 'gomibako' }
    ] },

  { id: 'bathroom', group: 'home', title: 'The bathroom and toilet', lv: 'N4', kind: 'diagram', art: 'bathroom',
    intro: 'A Japanese washroom, bath and toilet, with the things you use to keep clean.',
    parts: [
      { id: 'kagami', w: '鏡《かがみ》', en: 'mirror', lv: 'N4', x: 80, y: 96 },
      { id: 'haburashi', w: '歯《は》ブラシ', en: 'toothbrush', lv: 'N4', x: 22, y: 138 },
      { id: 'jaguchi', w: '蛇口《じゃぐち》', en: 'tap, faucet', lv: 'N3', x: 64, y: 152 },
      { id: 'sekken', w: 'せっけん', en: 'soap', lv: 'N4', x: 110, y: 168 },
      { id: 'senmendai', w: '洗面台《せんめんだい》', en: 'washbasin', lv: 'N3', x: 44, y: 222 },
      { id: 'taoru', w: 'タオル', en: 'towel', lv: 'N4', x: 132, y: 132 },
      { id: 'taijuukei', w: '体重計《たいじゅうけい》', en: 'bathroom scales', lv: 'N3', x: 36, y: 298 },
      { id: 'shawaa', w: 'シャワー', en: 'shower', lv: 'N4', x: 180, y: 122 },
      { id: 'mado', w: '窓《まど》', en: 'window', lv: 'N5', x: 276, y: 55 },
      { id: 'shanpuu', w: 'シャンプー', en: 'shampoo', lv: 'N4', x: 256, y: 144 },
      { id: 'furo', w: 'お風呂《ふろ》', en: 'bath', lv: 'N5', x: 230, y: 238 },
      { id: 'toire', w: 'トイレ', en: 'toilet', lv: 'N5', x: 350, y: 222 },
      { id: 'toirettopeepaa', w: 'トイレットペーパー', en: 'toilet paper', lv: 'N4', x: 393, y: 236 }
    ],
    say: [
      { ja: '寝《ね》る 前《まえ》 に お風呂《ふろ》 に 入《はい》ります。', en: 'I take a bath before I go to bed.', p: 'furo' },
      { ja: '朝《あさ》 は シャワー を 浴《あ》びる だけ です。', en: 'In the morning I only take a shower.', p: 'shawaa' },
      { ja: '鏡《かがみ》 で 自分《じぶん》 の 顔《かお》 を 見《み》ます。', en: 'I look at my face in the mirror.', p: 'kagami' },
      { ja: 'ご飯《はん》 の 後《あと》 は、 歯《は》ブラシ で 歯《は》 を 磨《みが》きましょう。', en: 'After meals, brush your teeth with a toothbrush.', p: 'haburashi' },
      { ja: '手《て》 は せっけん で よく 洗《あら》って ください。', en: 'Please wash your hands well with soap.', p: 'sekken' },
      { ja: '毎朝《まいあさ》 体重計《たいじゅうけい》 に 乗《の》って、 体重《たいじゅう》 を 記録《きろく》して ください。', en: 'Every morning, please step on the scales and write down your weight.', p: 'taijuukei' },
      { ja: 'トイレ に 行《い》きたい とき は、 看護師《かんごし》 を 呼《よ》んで ください。', en: 'When you want to go to the toilet, please call a nurse.', p: 'toire' },
      { ja: 'トイレットペーパー が なくなりました。', en: 'The toilet paper has run out.', p: 'toirettopeepaa' },
      { ja: 'ぬれた 手《て》 を タオル で ふきます。', en: 'I dry my wet hands with a towel.', p: 'taoru' },
      { ja: '髪《かみ》 は シャンプー で 洗《あら》います。', en: 'I wash my hair with shampoo.', p: 'shanpuu' }
    ] },

  { id: 'bedroom', group: 'home', title: 'The bedroom', lv: 'N5', kind: 'diagram', art: 'bedroom',
    intro: 'The things in a bedroom: the bed and what is on it, the lamp, the desk and the window.',
    parts: [
      { id: 'mado', w: '窓《まど》', en: 'window', lv: 'N5', x: 72, y: 80 },
      { id: 'kaaten', w: 'カーテン', en: 'curtain', lv: 'N4', x: 145, y: 100 },
      { id: 'beddo', w: 'ベッド', en: 'bed', lv: 'N5', x: 150, y: 231 },
      { id: 'makura', w: '枕《まくら》', en: 'pillow', lv: 'N4', x: 52, y: 190 },
      { id: 'moufu', w: '毛布《もうふ》', en: 'blanket', lv: 'N4', x: 122, y: 204 },
      { id: 'sutando', w: '電気《でんき》スタンド', en: 'lamp, desk lamp', lv: 'N4', x: 186, y: 186 },
      { id: 'mezamashi', w: '目覚《めざ》まし時計《どけい》', en: 'alarm clock', lv: 'N4', x: 222, y: 193 },
      { id: 'hon', w: '本《ほん》', en: 'book', lv: 'N5', x: 280, y: 166 },
      { id: 'megane', w: '眼鏡《めがね》', en: 'glasses', lv: 'N5', x: 348, y: 162 },
      { id: 'tsukue', w: '机《つくえ》', en: 'desk', lv: 'N5', x: 340, y: 214 },
      { id: 'isu', w: '椅子《いす》', en: 'chair', lv: 'N5', x: 248, y: 168 },
      { id: 'doa', w: 'ドア', en: 'door', lv: 'N5', x: 392, y: 196 },
      { id: 'surippa', w: 'スリッパ', en: 'slippers', lv: 'N4', x: 167, y: 278 }
    ],
    say: [
      { ja: '少《すこ》し ベッド で 横《よこ》 に なって ください。', en: 'Please lie down on the bed for a while.', p: 'beddo' },
      { ja: '枕《まくら》 が 高《たか》くて、 首《くび》 が 痛《いた》い です。', en: 'The pillow is too high and my neck hurts.', p: 'makura' },
      { ja: '寒《さむ》い です から、 毛布《もうふ》 を もう 一枚《いちまい》 ください。', en: 'It is cold, so may I have one more blanket?', p: 'moufu' },
      { ja: '朝《あさ》 は カーテン を 開《あ》けて、 光《ひかり》 を 入《い》れましょう。', en: 'In the morning, open the curtains and let the light in.', p: 'kaaten' },
      { ja: '寝《ね》る 前《まえ》 に 電気《でんき》スタンド を 消《け》します。', en: 'I switch off the lamp before I go to sleep.', p: 'sutando' },
      { ja: '毎朝《まいあさ》 六時《ろくじ》 に 目覚《めざ》まし時計《どけい》 が 鳴《な》ります。', en: 'The alarm clock rings at six every morning.', p: 'mezamashi' },
      { ja: '眼鏡《めがね》 を かけない と、 字《じ》 が よく 見《み》えません。', en: 'Without my glasses I cannot see the letters well.', p: 'megane' },
      { ja: '夜《よる》 は 机《つくえ》 で 日記《にっき》 を 書《か》きます。', en: 'At night I write my diary at the desk.', p: 'tsukue' },
      { ja: '部屋《へや》 を 出《で》る とき は、 ドア を 閉《し》めて ください。', en: 'When you leave the room, please close the door.', p: 'doa' },
      { ja: '床《ゆか》 が 冷《つめ》たい です から、 スリッパ を 履《は》いて ください。', en: 'The floor is cold, so please put on your slippers.', p: 'surippa' }
    ] },

  { id: 'appliances', group: 'home', title: 'Electrical things', lv: 'N4', kind: 'cards',
    intro: 'Machines and electrical things you use at home every day.',
    parts: [
      { id: 'terebi', w: 'テレビ', en: 'television', lv: 'N5', pic: '📺' },
      { id: 'rajio', w: 'ラジオ', en: 'radio', lv: 'N5', pic: '📻' },
      { id: 'pasokon', w: 'パソコン', en: 'computer', lv: 'N4', pic: '💻' },
      { id: 'purintaa', w: 'プリンター', en: 'printer', lv: 'N4', pic: '🖨️' },
      { id: 'fakkusu', w: 'ファックス', en: 'fax machine', lv: 'N4', pic: '📠' },
      { id: 'keitai', w: '携帯電話《けいたいでんわ》', en: 'mobile phone', lv: 'N4', pic: '📱' },
      { id: 'kamera', w: 'カメラ', en: 'camera', lv: 'N5', pic: '📷' },
      { id: 'heddohon', w: 'ヘッドホン', en: 'headphones', lv: 'N4', pic: '🎧' },
      { id: 'mezamashi', w: '目覚《めざ》まし時計《どけい》', en: 'alarm clock', lv: 'N4', pic: '⏰' },
      { id: 'udedokei', w: '腕時計《うでどけい》', en: 'wristwatch', lv: 'N4', pic: '⌚' },
      { id: 'denkyuu', w: '電球《でんきゅう》', en: 'light bulb', lv: 'N3', pic: '💡' },
      { id: 'kaichuudentou', w: '懐中電灯《かいちゅうでんとう》', en: 'torch, flashlight', lv: 'N3', pic: '🔦' },
      { id: 'denchi', w: '電池《でんち》', en: 'battery', lv: 'N4', pic: '🔋' },
      { id: 'geemu', w: 'ゲーム', en: 'video game', lv: 'N4', pic: '🎮' }
    ],
    say: [
      { ja: '寝《ね》る 前《まえ》 は、 携帯電話《けいたいでんわ》 を 見《み》ない ほう が いい です よ。', en: 'It is better not to look at your mobile phone before sleeping.', p: 'keitai' },
      { ja: '目覚《めざ》まし時計《どけい》 が 鳴《な》っても、 起《お》きられません。', en: 'Even when the alarm clock rings, I cannot get up.', p: 'mezamashi' },
      { ja: '検査《けんさ》 の 結果《けっか》 を ファックス で 送《おく》ります。', en: 'I will send the test results by fax.', p: 'fakkusu' },
      { ja: '夜《よる》 遅《おそ》く まで ゲーム を して、 よく 眠《ねむ》れません。', en: 'I play video games until late at night and cannot sleep well.', p: 'geemu' },
      { ja: '暗《くら》い ところ を 歩《ある》く とき は、 懐中電灯《かいちゅうでんとう》 が 便利《べんり》 です。', en: 'A torch is useful when you walk somewhere dark.', p: 'kaichuudentou' },
      { ja: '電球《でんきゅう》 が 切《き》れて、 部屋《へや》 が 暗《くら》い です。', en: 'The light bulb has gone, so the room is dark.', p: 'denkyuu' },
      { ja: '電池《でんち》 が なくなった ので、 買《か》い に 行《い》きます。', en: 'The batteries have run out, so I am going to buy some.', p: 'denchi' },
      { ja: 'この 書類《しょるい》 を プリンター で 印刷《いんさつ》して ください。', en: 'Please print this document on the printer.', p: 'purintaa' },
      { ja: '電車《でんしゃ》 の 中《なか》 で は ヘッドホン で 音楽《おんがく》 を 聞《き》きます。', en: 'On the train I listen to music with headphones.', p: 'heddohon' },
      { ja: '朝《あさ》 は ラジオ で 天気予報《てんきよほう》 を 聞《き》きます。', en: 'In the morning I listen to the weather forecast on the radio.', p: 'rajio' }
    ] }
]);
