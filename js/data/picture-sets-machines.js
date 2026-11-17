/* Picture words, group 'machines' (0.24.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'N5'|'N4',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-machines.js), intro: one English sentence,
     parts: [ { id: short romaji, w: ONE word in the notation (dictionary form), en, lv: 'N5'|'N4'|'N3',
                diagram: x, y = the point ON the thing in the art's viewBox units (pins at least 26 apart, 12 inside the edge);
                cards: pic = ONE emoji, Unicode Emoji 12.0 or older, no flags / skin tones / ZWJ sequences } ],   8 to 16 parts (cards 10 to 16)
     say: [ { ja: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);                       6 to 10 sentences
   At most a quarter of a set's words N3, none above. group = 'machines' for every set of this file.
   Sets of this file (PLAN C): car d N4; bicycle d N4; computer-phone d N4; vehicles c N5; ward-things c N4.
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'car', group: 'machines', title: 'A car', lv: 'N4', kind: 'diagram', art: 'car',
    intro: 'The outside and inside parts of a car, for getting a patient in and out safely and for everyday driving talk.',
    parts: [
      { id: 'taiya', w: 'タイヤ', en: 'tyre', lv: 'N4', x: 100, y: 198 },
      { id: 'doa', w: 'ドア', en: 'door', lv: 'N5', x: 250, y: 162 },
      { id: 'mado', w: '窓《まど》', en: 'window', lv: 'N5', x: 160, y: 102 },
      { id: 'handoru', w: 'ハンドル', en: 'steering wheel', lv: 'N4', x: 247, y: 107 },
      { id: 'zaseki', w: '座席《ざせき》', en: 'seat', lv: 'N3', x: 215, y: 106 },
      { id: 'raito', w: 'ライト', en: 'headlight', lv: 'N4', x: 372, y: 136 },
      { id: 'miraa', w: 'ミラー', en: 'mirror', lv: 'N4', x: 314, y: 96 },
      { id: 'waipaa', w: 'ワイパー', en: 'windscreen wiper', lv: 'N4', x: 336, y: 126 },
      { id: 'yane', w: '屋根《やね》', en: 'roof', lv: 'N3', x: 200, y: 64 },
      { id: 'toranku', w: 'トランク', en: 'boot, trunk', lv: 'N4', x: 70, y: 145 },
      { id: 'banpaa', w: 'バンパー', en: 'bumper', lv: 'N4', x: 359, y: 184 }
    ],
    say: [
      { ja: 'ガソリンスタンド で タイヤ に 空気《くうき》 を 入《い》れます。', en: 'I put air in the tyres at the petrol station.', p: 'taiya' },
      { ja: 'ドア に 手《て》 を はさまない よう に 気《き》 を つけて ください。', en: 'Please be careful not to catch your hand in the door.', p: 'doa' },
      { ja: '気分《きぶん》 が 悪《わる》い とき は、 窓《まど》 を 少《すこ》し 開《あ》けましょう。', en: 'If you feel sick, let us open the window a little.', p: 'mado' },
      { ja: '運転《うんてん》 する とき は、 ハンドル を 両手《りょうて》 で 持《も》ちます。', en: 'When you drive, you hold the steering wheel with both hands.', p: 'handoru' },
      { ja: '座席《ざせき》 に 座《すわ》ったら、 シートベルト を して ください。', en: 'Once you sit in the seat, please put on your seat belt.', p: 'zaseki' },
      { ja: '暗《くら》く なったら、 ライト を つけて 走《はし》ります。', en: 'When it gets dark, you drive with the headlights on.', p: 'raito' },
      { ja: '車《くるま》 を 動《うご》かす 前《まえ》 に、 ミラー で 後《うし》ろ を 見《み》ます。', en: 'Before moving the car, you look behind you in the mirror.', p: 'miraa' },
      { ja: '雨《あめ》 が 降《ふ》って きた ので、 ワイパー を 動《うご》かします。', en: 'It has started to rain, so I switch on the wipers.', p: 'waipaa' },
      { ja: '車椅子《くるまいす》 は たたんで トランク に 入《い》れましょう。', en: 'Let us fold the wheelchair and put it in the boot.', p: 'toranku' },
      { ja: '朝《あさ》 起《お》きたら、 車《くるま》 の 屋根《やね》 に 雪《ゆき》 が たくさん ありました。', en: 'When I got up in the morning, there was a lot of snow on the roof of the car.', p: 'yane' }
    ] },
  { id: 'bicycle', group: 'machines', title: 'A bicycle', lv: 'N4', kind: 'diagram', art: 'bicycle',
    intro: 'The parts of an everyday Japanese town bicycle, with a basket, a bell and a wheel lock.',
    parts: [
      { id: 'sadoru', w: 'サドル', en: 'saddle', lv: 'N4', x: 162, y: 97 },
      { id: 'handoru', w: 'ハンドル', en: 'handlebars', lv: 'N4', x: 238, y: 84 },
      { id: 'beru', w: 'ベル', en: 'bell', lv: 'N4', x: 262, y: 48 },
      { id: 'kago', w: 'かご', en: 'basket', lv: 'N4', x: 320, y: 111 },
      { id: 'raito', w: 'ライト', en: 'light', lv: 'N4', x: 372, y: 121 },
      { id: 'bureeki', w: 'ブレーキ', en: 'brake lever', lv: 'N4', x: 206, y: 111 },
      { id: 'taiya', w: 'タイヤ', en: 'tyre', lv: 'N4', x: 351, y: 251 },
      { id: 'pedaru', w: 'ペダル', en: 'pedal', lv: 'N4', x: 220, y: 248 },
      { id: 'cheen', w: 'チェーン', en: 'chain', lv: 'N4', x: 145, y: 200 },
      { id: 'kagi', w: '鍵《かぎ》', en: 'lock', lv: 'N4', x: 150, y: 152 },
      { id: 'nidai', w: '荷台《にだい》', en: 'rear rack', lv: 'N3', x: 95, y: 134 },
      { id: 'sutando', w: 'スタンド', en: 'kickstand', lv: 'N4', x: 157, y: 255 }
    ],
    say: [
      { ja: 'サドル が 高《たか》すぎる ので、 少《すこ》し 下《さ》げて ください。', en: 'The saddle is too high, so please lower it a little.', p: 'sadoru' },
      { ja: '手《て》 が しびれて、 ハンドル を しっかり 持《も》てません。', en: 'My hands are numb and I cannot hold the handlebars firmly.', p: 'handoru' },
      { ja: 'ベル を 鳴《な》らして、 前《まえ》 の 人《ひと》 に 知《し》らせます。', en: 'You ring the bell to let the person in front know.', p: 'beru' },
      { ja: '買《か》い物《もの》 の 荷物《にもつ》 を かご に 入《い》れます。', en: 'I put my shopping in the basket.', p: 'kago' },
      { ja: '夜《よる》 は ライト を つけて 走《はし》って ください。', en: 'Please ride with the light on at night.', p: 'raito' },
      { ja: '坂《さか》 を 下《お》りる とき は、 ブレーキ を かけて ゆっくり 走《はし》ります。', en: 'Going down a hill, you use the brake and ride slowly.', p: 'bureeki' },
      { ja: 'タイヤ の 空気《くうき》 が 少《すく》ない です。', en: 'The tyre is low on air.', p: 'taiya' },
      { ja: 'ペダル を こぐ と、 膝《ひざ》 が 痛《いた》く なります。', en: 'When I turn the pedals, my knee hurts.', p: 'pedaru' },
      { ja: '自転車《じてんしゃ》 を 止《と》めたら、 鍵《かぎ》 を かけて ください。', en: 'When you park the bicycle, please lock it.', p: 'kagi' },
      { ja: '荷台《にだい》 に 大《おお》きい 箱《はこ》 を のせて 運《はこ》びます。', en: 'I carry a big box on the rear rack.', p: 'nidai' }
    ] },
  { id: 'computer-phone', group: 'machines', title: 'Computer and phone', lv: 'N4', kind: 'diagram', art: 'computer-phone',
    intro: 'A laptop and a smartphone with the things around them, for online visits and for helping patients with their phones.',
    parts: [
      { id: 'gamen', w: '画面《がめん》', en: 'screen', lv: 'N4', x: 210, y: 80 },
      { id: 'kamera', w: 'カメラ', en: 'camera', lv: 'N5', x: 155, y: 31 },
      { id: 'kiiboodo', w: 'キーボード', en: 'keyboard', lv: 'N4', x: 110, y: 194 },
      { id: 'dengen', w: '電源《でんげん》', en: 'power button', lv: 'N3', x: 262, y: 193 },
      { id: 'mausu', w: 'マウス', en: 'mouse', lv: 'N4', x: 240, y: 264 },
      { id: 'sumaho', w: 'スマホ', en: 'smartphone', lv: 'N4', x: 336, y: 168 },
      { id: 'apuri', w: 'アプリ', en: 'app', lv: 'N4', x: 320, y: 60 },
      { id: 'botan', w: 'ボタン', en: 'button', lv: 'N5', x: 380, y: 68 },
      { id: 'koodo', w: 'コード', en: 'cable', lv: 'N4', x: 337, y: 215 },
      { id: 'juudenki', w: '充電器《じゅうでんき》', en: 'charger', lv: 'N3', x: 342, y: 261 },
      { id: 'iyahon', w: 'イヤホン', en: 'earphones', lv: 'N4', x: 48, y: 250 }
    ],
    say: [
      { ja: '画面《がめん》 が 暗《くら》くて、 字《じ》 が よく 見《み》えません。', en: 'The screen is dark and I cannot see the letters well.', p: 'gamen' },
      { ja: 'オンライン の 診察《しんさつ》 で は、 カメラ を 見《み》て 話《はな》して ください。', en: 'In an online consultation, please look at the camera when you talk.', p: 'kamera' },
      { ja: 'キーボード で お名前《なまえ》 を 打《う》って ください。', en: 'Please type your name on the keyboard.', p: 'kiiboodo' },
      { ja: 'マウス を クリックして、 ファイル を 開《ひら》きます。', en: 'You click the mouse to open the file.', p: 'mausu' },
      { ja: '診察中《しんさつちゅう》 は スマホ の 音《おと》 を 消《け》して ください。', en: 'Please turn off the sound on your smartphone during the consultation.', p: 'sumaho' },
      { ja: 'この アプリ で 毎日《まいにち》 の 気分《きぶん》 を 記録《きろく》できます。', en: 'With this app you can keep a record of your mood every day.', p: 'apuri' },
      { ja: 'スマホ の 横《よこ》 に ある ボタン を 押《お》して ください。', en: 'Please press the button on the side of the smartphone.', p: 'botan' },
      { ja: 'コード が 短《みじか》すぎて、 ベッド まで 届《とど》きません。', en: 'The cable is too short to reach the bed.', p: 'koodo' },
      { ja: '電池《でんち》 が 少《すく》ない ので、 充電器《じゅうでんき》 を 貸《か》して いただけます か。', en: 'My battery is low, so could you lend me a charger?', p: 'juudenki' },
      { ja: 'ほか の 患者《かんじゃ》さん も いる ので、 イヤホン で 聞《き》いて ください。', en: 'There are other patients here, so please listen with earphones.', p: 'iyahon' }
    ] },
  { id: 'vehicles', group: 'machines', title: 'Vehicles', lv: 'N5', kind: 'cards',
    intro: 'Words for the cars, trains and other vehicles people use to get around and to come to hospital.',
    parts: [
      { id: 'kuruma', w: '車《くるま》', en: 'car', lv: 'N5', pic: '🚗' },
      { id: 'jitensha', w: '自転車《じてんしゃ》', en: 'bicycle', lv: 'N5', pic: '🚲' },
      { id: 'basu', w: 'バス', en: 'bus', lv: 'N5', pic: '🚌' },
      { id: 'takushii', w: 'タクシー', en: 'taxi', lv: 'N5', pic: '🚕' },
      { id: 'densha', w: '電車《でんしゃ》', en: 'train', lv: 'N5', pic: '🚃' },
      { id: 'chikatetsu', w: '地下鉄《ちかてつ》', en: 'underground, subway', lv: 'N5', pic: '🚇' },
      { id: 'shinkansen', w: '新幹線《しんかんせん》', en: 'bullet train', lv: 'N4', pic: '🚄' },
      { id: 'hikouki', w: '飛行機《ひこうき》', en: 'aeroplane', lv: 'N5', pic: '✈️' },
      { id: 'fune', w: '船《ふね》', en: 'ship', lv: 'N4', pic: '🚢' },
      { id: 'kyuukyuusha', w: '救急車《きゅうきゅうしゃ》', en: 'ambulance', lv: 'N3', pic: '🚑' },
      { id: 'torakku', w: 'トラック', en: 'lorry, truck', lv: 'N4', pic: '🚚' },
      { id: 'baiku', w: 'バイク', en: 'motorbike', lv: 'N4', pic: '🏍️' },
      { id: 'patokaa', w: 'パトカー', en: 'police car', lv: 'N3', pic: '🚓' },
      { id: 'herikoputaa', w: 'ヘリコプター', en: 'helicopter', lv: 'N4', pic: '🚁' }
    ],
    say: [
      { ja: '父《ちち》 は 毎朝《まいあさ》 車《くるま》 で 会社《かいしゃ》 へ 行《い》きます。', en: 'My father goes to work by car every morning.', p: 'kuruma' },
      { ja: '雨《あめ》 の 日《ひ》 は 自転車《じてんしゃ》 に 乗《の》りません。', en: 'I do not ride my bicycle on rainy days.', p: 'jitensha' },
      { ja: '病院《びょういん》 の 前《まえ》 に バス が 止《と》まります。', en: 'The bus stops in front of the hospital.', p: 'basu' },
      { ja: '足《あし》 が 痛《いた》かった ので、 タクシー で 来《き》ました。', en: 'My leg hurt, so I came by taxi.', p: 'takushii' },
      { ja: '駅《えき》 で 電車《でんしゃ》 に 乗《の》って、 学校《がっこう》 へ 行《い》きます。', en: 'I get on the train at the station and go to school.', p: 'densha' },
      { ja: '毎日《まいにち》 地下鉄《ちかてつ》 で 病院《びょういん》 に 通《かよ》って います。', en: 'I come to the hospital by underground every day.', p: 'chikatetsu' },
      { ja: '新幹線《しんかんせん》 は とても 速《はや》い です。', en: 'The bullet train is very fast.', p: 'shinkansen' },
      { ja: '飛行機《ひこうき》 で 外国《がいこく》 へ 行《い》きました。', en: 'I went abroad by plane.', p: 'hikouki' },
      { ja: '船《ふね》 で 島《しま》 へ 行《い》きます。', en: 'We go to the island by ship.', p: 'fune' },
      { ja: '具合《ぐあい》 が とても 悪《わる》い とき は、 ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》して、 救急車《きゅうきゅうしゃ》 を 呼《よ》んで ください。', en: 'When you feel very unwell, call 119 and ask for an ambulance.', p: 'kyuukyuusha' }
    ] },
  { id: 'ward-things', group: 'machines', title: 'Things on the ward', lv: 'N4', kind: 'cards',
    intro: 'Everyday things a patient sees on a hospital ward, from the thermometer to the wheelchair.',
    parts: [
      { id: 'taionkei', w: '体温計《たいおんけい》', en: 'thermometer', lv: 'N4', pic: '🌡️' },
      { id: 'chuusha', w: '注射《ちゅうしゃ》', en: 'injection', lv: 'N3', pic: '💉' },
      { id: 'kusuri', w: '薬《くすり》', en: 'medicine', lv: 'N5', pic: '💊' },
      { id: 'bansoukou', w: 'ばんそうこう', en: 'sticking plaster', lv: 'N3', pic: '🩹' },
      { id: 'choushinki', w: '聴診器《ちょうしんき》', en: 'stethoscope', lv: 'N3', pic: '🩺' },
      { id: 'kurumaisu', w: '車椅子《くるまいす》', en: 'wheelchair', lv: 'N3', pic: '🦽' },
      { id: 'beddo', w: 'ベッド', en: 'bed', lv: 'N5', pic: '🛏️' },
      { id: 'masuku', w: 'マスク', en: 'mask', lv: 'N4', pic: '😷' },
      { id: 'chi', w: '血《ち》', en: 'blood', lv: 'N4', pic: '🩸' },
      { id: 'sekken', w: 'せっけん', en: 'soap', lv: 'N4', pic: '🧼' },
      { id: 'tebukuro', w: '手袋《てぶくろ》', en: 'gloves', lv: 'N4', pic: '🧤' },
      { id: 'hasami', w: 'はさみ', en: 'scissors', lv: 'N4', pic: '✂️' },
      { id: 'megane', w: '眼鏡《めがね》', en: 'glasses', lv: 'N4', pic: '👓' },
      { id: 'gomibako', w: 'ごみ箱《ばこ》', en: 'rubbish bin', lv: 'N4', pic: '🗑️' },
      { id: 'isu', w: '椅子《いす》', en: 'chair', lv: 'N5', pic: '🪑' },
      { id: 'tokei', w: '時計《とけい》', en: 'clock', lv: 'N5', pic: '⏰' }
    ],
    say: [
      { ja: '熱《ねつ》 が ある か どう か、 体温計《たいおんけい》 で 測《はか》りましょう。', en: 'Let us check with the thermometer whether you have a temperature.', p: 'taionkei' },
      { ja: '注射《ちゅうしゃ》 の とき、 少《すこ》し ちくっと します。', en: 'You will feel a little prick with the injection.', p: 'chuusha' },
      { ja: 'この 薬《くすり》 は ご飯《はん》 の 後《あと》 に 飲《の》んで ください。', en: 'Please take this medicine after meals.', p: 'kusuri' },
      { ja: '先生《せんせい》 が 聴診器《ちょうしんき》 で 胸《むね》 の 音《おと》 を 聞《き》きます。', en: 'The doctor listens to your chest with a stethoscope.', p: 'choushinki' },
      { ja: '歩《ある》く の が 大変《たいへん》 なら、 車椅子《くるまいす》 を 使《つか》いましょう。', en: 'If walking is hard, let us use a wheelchair.', p: 'kurumaisu' },
      { ja: '疲《つか》れたら、 ベッド で 横《よこ》 に なって ください。', en: 'If you get tired, please lie down on the bed.', p: 'beddo' },
      { ja: 'せき が 出《で》る とき は、 マスク を して ください。', en: 'When you have a cough, please wear a mask.', p: 'masuku' },
      { ja: '転《ころ》んで、 膝《ひざ》 から 血《ち》 が 出《で》て います。', en: 'I fell over and my knee is bleeding.', p: 'chi' },
      { ja: 'トイレ の 後《あと》 は、 せっけん で 手《て》 を 洗《あら》って ください。', en: 'After using the toilet, please wash your hands with soap.', p: 'sekken' },
      { ja: '眼鏡《めがね》 が ない と、 字《じ》 が よく 見《み》えません。', en: 'Without my glasses I cannot see the letters well.', p: 'megane' }
    ] }
]);
