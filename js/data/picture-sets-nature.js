/* Picture words, group 'nature' (0.24.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'N5'|'N4',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-nature.js), intro: one English sentence,
     parts: [ { id: short romaji, w: ONE word in the notation (dictionary form), en, lv: 'N5'|'N4'|'N3',
                diagram: x, y = the point ON the thing in the art's viewBox units (pins at least 26 apart, 12 inside the edge);
                cards: pic = ONE emoji, Unicode Emoji 12.0 or older, no flags / skin tones / ZWJ sequences } ],   8 to 16 parts (cards 10 to 16)
     say: [ { ja: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);                       6 to 10 sentences
   At most a quarter of a set's words N3, none above. group = 'nature' for every set of this file.
   Sets of this file (PLAN C): landscape d N5; weather c N5; seasons-plants c N4.
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'landscape', group: 'nature', title: 'A landscape', lv: 'N5', kind: 'diagram', art: 'landscape',
    intro: 'The basic words for the land, water and sky around you, in one country scene.',
    parts: [
      { id: 'sora', w: '空《そら》', en: 'sky', lv: 'N5', x: 262, y: 34 },
      { id: 'taiyou', w: '太陽《たいよう》', en: 'sun', lv: 'N4', x: 352, y: 46 },
      { id: 'kumo', w: '雲《くも》', en: 'cloud', lv: 'N4', x: 88, y: 46 },
      { id: 'yama', w: '山《やま》', en: 'mountain', lv: 'N5', x: 205, y: 118 },
      { id: 'mori', w: '森《もり》', en: 'forest', lv: 'N4', x: 60, y: 136 },
      { id: 'ki', w: '木《き》', en: 'tree', lv: 'N5', x: 146, y: 184 },
      { id: 'kawa', w: '川《かわ》', en: 'river', lv: 'N5', x: 236, y: 244 },
      { id: 'hashi', w: '橋《はし》', en: 'bridge', lv: 'N5', x: 199, y: 190 },
      { id: 'umi', w: '海《うみ》', en: 'sea', lv: 'N5', x: 334, y: 262 },
      { id: 'shima', w: '島《しま》', en: 'island', lv: 'N4', x: 352, y: 192 },
      { id: 'tanbo', w: '田《た》んぼ', en: 'rice field', lv: 'N3', x: 98, y: 240 },
      { id: 'hana', w: '花《はな》', en: 'flower', lv: 'N5', x: 178, y: 262 }
    ],
    say: [
      { ja: '夏《なつ》 に 友達《ともだち》 と 山《やま》 に 登《のぼ》りました。', en: 'In summer I climbed a mountain with friends.', p: 'yama' },
      { ja: '子供《こども》 の とき、 よく 川《かわ》 で 遊《あそ》びました。', en: 'As a child I often played in the river.', p: 'kawa' },
      { ja: '海《うみ》 で 泳《およ》ぐ の が 好《す》き です。', en: 'I like swimming in the sea.', p: 'umi' },
      { ja: '今日《きょう》 は 空《そら》 が とても 青《あお》い です ね。', en: 'The sky is very blue today, isn\'t it?', p: 'sora' },
      { ja: '今日《きょう》 は 太陽《たいよう》 が 出《で》て いて、 暖《あたた》かい です。', en: 'The sun is out today, and it is warm.', p: 'taiyou' },
      { ja: '森《もり》 の 中《なか》 を 歩《ある》く と、 気持《きも》ち が いい です。', en: 'Walking in the forest feels good.', p: 'mori' },
      { ja: 'お見舞《みま》い に 花《はな》 を 持《も》って 行《い》きました。', en: 'I took flowers when I visited someone in hospital.', p: 'hana' },
      { ja: 'この 橋《はし》 を 渡《わた》る と、 病院《びょういん》 が あります。', en: 'When you cross this bridge, the hospital is there.', p: 'hashi' },
      { ja: '疲《つか》れました から、 木《き》 の 下《した》 で 少《すこ》し 休《やす》みましょう。', en: 'I am tired, so let\'s rest a little under the tree.', p: 'ki' },
      { ja: '島《しま》 まで 船《ふね》 で 一時間《いちじかん》 かかります。', en: 'It takes an hour by boat to the island.', p: 'shima' }
    ] },
  { id: 'weather', group: 'nature', title: 'Weather', lv: 'N5', kind: 'cards',
    intro: 'Words for the weather, the small talk that starts many conversations in Japan.',
    parts: [
      { id: 'hare', w: '晴《は》れ', en: 'sunny weather', lv: 'N5', pic: '☀️' },
      { id: 'kumori', w: '曇《くも》り', en: 'cloudy weather', lv: 'N5', pic: '☁️' },
      { id: 'ame', w: '雨《あめ》', en: 'rain', lv: 'N5', pic: '🌧️' },
      { id: 'yuki', w: '雪《ゆき》', en: 'snow', lv: 'N5', pic: '❄️' },
      { id: 'kaze', w: '風《かぜ》', en: 'wind', lv: 'N5', pic: '🌬️' },
      { id: 'taifuu', w: '台風《たいふう》', en: 'typhoon', lv: 'N4', pic: '🌀' },
      { id: 'kaminari', w: '雷《かみなり》', en: 'thunder, lightning', lv: 'N4', pic: '⚡' },
      { id: 'niji', w: '虹《にじ》', en: 'rainbow', lv: 'N3', pic: '🌈' },
      { id: 'kiri', w: '霧《きり》', en: 'fog', lv: 'N3', pic: '🌫️' },
      { id: 'kasa', w: '傘《かさ》', en: 'umbrella', lv: 'N5', pic: '☂️' },
      { id: 'atsui', w: '暑《あつ》い', en: 'hot (weather)', lv: 'N5', pic: '🥵' },
      { id: 'samui', w: '寒《さむ》い', en: 'cold (weather)', lv: 'N5', pic: '🥶' },
      { id: 'kion', w: '気温《きおん》', en: 'air temperature', lv: 'N4', pic: '🌡️' },
      { id: 'koori', w: '氷《こおり》', en: 'ice', lv: 'N4', pic: '🧊' }
    ],
    say: [
      { ja: '今日《きょう》 は 晴《は》れ です から、 散歩《さんぽ》 に 行《い》きましょう。', en: 'It is sunny today, so let\'s go for a walk.', p: 'hare' },
      { ja: '雨《あめ》 の 日《ひ》 は 頭《あたま》 が 痛《いた》く なります か。', en: 'Do you get headaches on rainy days?', p: 'ame' },
      { ja: '出《で》かける とき、 傘《かさ》 を 忘《わす》れないで ください。', en: 'Please do not forget your umbrella when you go out.', p: 'kasa' },
      { ja: '北《きた》 の 町《まち》 は 冬《ふゆ》 に 雪《ゆき》 が たくさん 降《ふ》ります。', en: 'In the northern towns a lot of snow falls in winter.', p: 'yuki' },
      { ja: '台風《たいふう》 が 来《く》る ので、 今日《きょう》 は 早《はや》く 帰《かえ》りましょう。', en: 'A typhoon is coming, so let\'s go home early today.', p: 'taifuu' },
      { ja: '寒《さむ》い です から、 上着《うわぎ》 を 着《き》て ください。', en: 'It is cold, so please put on a jacket.', p: 'samui' },
      { ja: '暑《あつ》い 日《ひ》 は 水《みず》 を たくさん 飲《の》んで ください。', en: 'On hot days, please drink plenty of water.', p: 'atsui' },
      { ja: '今日《きょう》 の 気温《きおん》 は 三十五度《さんじゅうごど》 です。', en: 'Today\'s temperature is thirty-five degrees.', p: 'kion' },
      { ja: '昨日《きのう》 の 夜《よる》 は 雷《かみなり》 の 音《おと》 が 怖《こわ》くて、 よく 眠《ねむ》れません でした。', en: 'Last night the thunder frightened me and I could not sleep well.', p: 'kaminari' },
      { ja: '風《かぜ》 が 強《つよ》い ので、 窓《まど》 を 閉《し》めましょう。', en: 'The wind is strong, so let\'s close the window.', p: 'kaze' }
    ] },
  { id: 'seasons-plants', group: 'nature', title: 'Seasons, plants and the night sky', lv: 'N5', kind: 'cards',
    intro: 'The four seasons, the plants that mark them, and the night sky.',
    parts: [
      { id: 'haru', w: '春《はる》', en: 'spring', lv: 'N5', pic: '🌷' },
      { id: 'natsu', w: '夏《なつ》', en: 'summer', lv: 'N5', pic: '🏖️' },
      { id: 'aki', w: '秋《あき》', en: 'autumn', lv: 'N5', pic: '🍂' },
      { id: 'fuyu', w: '冬《ふゆ》', en: 'winter', lv: 'N5', pic: '⛄' },
      { id: 'yoru', w: '夜《よる》', en: 'night', lv: 'N5', pic: '🌃' },
      { id: 'sakura', w: '桜《さくら》', en: 'cherry blossom', lv: 'N4', pic: '🌸' },
      { id: 'momiji', w: '紅葉《もみじ》', en: 'maple, red autumn leaves', lv: 'N3', pic: '🍁' },
      { id: 'himawari', w: 'ひまわり', en: 'sunflower', lv: 'N3', pic: '🌻' },
      { id: 'ki', w: '木《き》', en: 'tree', lv: 'N5', pic: '🌳' },
      { id: 'kusa', w: '草《くさ》', en: 'grass, weeds', lv: 'N3', pic: '🌿' },
      { id: 'shokubutsu', w: '植物《しょくぶつ》', en: 'plant', lv: 'N4', pic: '🌱' },
      { id: 'tsuki', w: '月《つき》', en: 'moon', lv: 'N5', pic: '🌙' },
      { id: 'hoshi', w: '星《ほし》', en: 'star', lv: 'N5', pic: '⭐' }
    ],
    say: [
      { ja: '春《はる》 に なって、 暖《あたた》かく なりました。', en: 'Spring has come, and it has got warmer.', p: 'haru' },
      { ja: '夏《なつ》 は 暑《あつ》くて、 夜《よる》 よく 眠《ねむ》れない 人《ひと》 が 多《おお》い です。', en: 'Summer is hot, and many people cannot sleep well at night.', p: 'natsu' },
      { ja: '冬《ふゆ》 は 寒《さむ》くて、 朝《あさ》 起《お》きる の が 大変《たいへん》 です。', en: 'Winter is cold, and getting up in the morning is hard.', p: 'fuyu' },
      { ja: '夜《よる》 は 何時《なんじ》 ごろ 寝《ね》ます か。', en: 'About what time do you go to bed at night?', p: 'yoru' },
      { ja: '四月《しがつ》 に 公園《こうえん》 で 桜《さくら》 を 見《み》ました。', en: 'In April I saw the cherry blossoms in the park.', p: 'sakura' },
      { ja: '山《やま》 の 紅葉《もみじ》 が 赤《あか》く なりました。', en: 'The maple leaves on the mountain have turned red.', p: 'momiji' },
      { ja: '庭《にわ》 の 草《くさ》 が 長《なが》く なりました。', en: 'The grass in the garden has grown long.', p: 'kusa' },
      { ja: '病院《びょういん》 の 前《まえ》 に 大《おお》きな 木《き》 が あります。', en: 'There is a big tree in front of the hospital.', p: 'ki' },
      { ja: '今夜《こんや》 は 月《つき》 が 丸《まる》くて きれい です ね。', en: 'The moon is round and beautiful tonight, isn\'t it?', p: 'tsuki' },
      { ja: '毎朝《まいあさ》 部屋《へや》 の 植物《しょくぶつ》 に 水《みず》 を あげます。', en: 'Every morning I water the plants in my room.', p: 'shokubutsu' }
    ] }
]);
