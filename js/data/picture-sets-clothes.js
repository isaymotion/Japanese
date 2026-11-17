/* Picture words, group 'clothes' (0.24.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'N5'|'N4',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-clothes.js), intro: one English sentence,
     parts: [ { id: short romaji, w: ONE word in the notation (dictionary form), en, lv: 'N5'|'N4'|'N3',
                diagram: x, y = the point ON the thing in the art's viewBox units (pins at least 26 apart, 12 inside the edge);
                cards: pic = ONE emoji, Unicode Emoji 12.0 or older, no flags / skin tones / ZWJ sequences } ],   8 to 16 parts (cards 10 to 16)
     say: [ { ja: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);                       6 to 10 sentences
   At most a quarter of a set's words N3, none above. group = 'clothes' for every set of this file.
   Sets of this file (PLAN C): clothes d N5 (two simply dressed figures); accessories-colours c N5.
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'clothes', group: 'clothes', title: 'Clothes', lv: 'N5', kind: 'diagram', art: 'clothes',
    intro: 'Two people dressed for going out: tap each item of clothing to hear its name, ready for the verbs of wearing.',
    parts: [
      { id: 'boushi', w: '帽子《ぼうし》', en: 'hat', lv: 'N5', x: 95, y: 34 },
      { id: 'megane', w: '眼鏡《めがね》', en: 'glasses', lv: 'N5', x: 105, y: 76 },
      { id: 'poketto', w: 'ポケット', en: 'pocket', lv: 'N5', x: 78, y: 140 },
      { id: 'shatsu', w: 'シャツ', en: 'shirt', lv: 'N5', x: 115, y: 138 },
      { id: 'botan', w: 'ボタン', en: 'button', lv: 'N5', x: 95, y: 170 },
      { id: 'beruto', w: 'ベルト', en: 'belt', lv: 'N4', x: 114, y: 205 },
      { id: 'zubon', w: 'ズボン', en: 'trousers', lv: 'N5', x: 79, y: 290 },
      { id: 'kutsu', w: '靴《くつ》', en: 'shoes', lv: 'N5', x: 117, y: 369 },
      { id: 'kooto', w: 'コート', en: 'coat', lv: 'N5', x: 282, y: 175 },
      { id: 'sukaato', w: 'スカート', en: 'skirt', lv: 'N5', x: 252, y: 274 },
      { id: 'kaban', w: 'かばん', en: 'bag', lv: 'N5', x: 311, y: 238 },
      { id: 'kutsushita', w: '靴下《くつした》', en: 'socks', lv: 'N5', x: 255, y: 345 }
    ],
    say: [
      { ja: '頭《あたま》 に 帽子《ぼうし》 を かぶって います。', en: 'He is wearing a hat on his head.', p: 'boushi' },
      { ja: '目《め》 が 悪《わる》い ので、 眼鏡《めがね》 を かけて います。', en: 'His eyes are weak, so he wears glasses.', p: 'megane' },
      { ja: '寒《さむ》い ので、 コート を 着《き》て います。', en: 'It is cold, so she is wearing a coat.', p: 'kooto' },
      { ja: '女《おんな》の人《ひと》 は スカート を 履《は》いて います。', en: 'The woman is wearing a skirt.', p: 'sukaato' },
      { ja: '出《で》かける 前《まえ》 に 玄関《げんかん》 で 靴《くつ》 を 履《は》きます。', en: 'Before going out, you put on your shoes at the entrance.', p: 'kutsu' },
      { ja: '足《あし》 を 見《み》ます ので、 靴下《くつした》 を 脱《ぬ》いで ください。', en: 'I am going to look at your feet, so please take off your socks.', p: 'kutsushita' },
      { ja: '胸《むね》 の 音《おと》 を 聞《き》きます ので、 上《うえ》 の ボタン を 外《はず》して ください。', en: 'I will listen to your chest, so please undo the top button.', p: 'botan' },
      { ja: 'お腹《なか》 を 診《み》ます ので、 ベルト を 外《はず》して ください。', en: 'I will examine your stomach, so please undo your belt.', p: 'beruto' },
      { ja: '保険証《ほけんしょう》 は かばん の 中《なか》 に あります。', en: 'My insurance card is in my bag.', p: 'kaban' },
      { ja: 'ペン は 胸《むね》 の ポケット に 入《い》れて います。', en: 'I keep my pen in my chest pocket.', p: 'poketto' }
    ] },
  { id: 'accessories-colours', group: 'clothes', title: 'Colours and accessories', lv: 'N5', kind: 'cards',
    intro: 'Colour words and a few things people wear or carry; some colours are い-adjectives and some are nouns.',
    parts: [
      { id: 'akai', w: '赤《あか》い', en: 'red (adjective)', lv: 'N5', pic: '🔴' },
      { id: 'aoi', w: '青《あお》い', en: 'blue (adjective)', lv: 'N5', pic: '🔵' },
      { id: 'kiiroi', w: '黄色《きいろ》い', en: 'yellow (adjective)', lv: 'N5', pic: '🟡' },
      { id: 'shiroi', w: '白《しろ》い', en: 'white (adjective)', lv: 'N5', pic: '⚪' },
      { id: 'kuroi', w: '黒《くろ》い', en: 'black (adjective)', lv: 'N5', pic: '⚫' },
      { id: 'midori', w: '緑《みどり》', en: 'green (noun)', lv: 'N5', pic: '🟢' },
      { id: 'chairo', w: '茶色《ちゃいろ》', en: 'brown (noun)', lv: 'N5', pic: '🟤' },
      { id: 'orenji', w: 'オレンジ', en: 'orange (noun)', lv: 'N5', pic: '🟠' },
      { id: 'murasaki', w: '紫《むらさき》', en: 'purple (noun)', lv: 'N3', pic: '🟣' },
      { id: 'kasa', w: '傘《かさ》', en: 'umbrella', lv: 'N5', pic: '🌂' },
      { id: 'tokei', w: '時計《とけい》', en: 'watch, clock', lv: 'N5', pic: '⌚' },
      { id: 'yubiwa', w: '指輪《ゆびわ》', en: 'ring', lv: 'N3', pic: '💍' },
      { id: 'mafuraa', w: 'マフラー', en: 'scarf (for warmth)', lv: 'N4', pic: '🧣' },
      { id: 'tebukuro', w: '手袋《てぶくろ》', en: 'gloves', lv: 'N4', pic: '🧤' },
      { id: 'nekutai', w: 'ネクタイ', en: 'necktie', lv: 'N5', pic: '👔' }
    ],
    say: [
      { ja: '血《ち》 は 赤《あか》い です。', en: 'Blood is red.', p: 'akai' },
      { ja: '晴《は》れた 日《ひ》 の 空《そら》 は 青《あお》い です。', en: 'On a clear day the sky is blue.', p: 'aoi' },
      { ja: 'バナナ は 黄色《きいろ》い です。', en: 'Bananas are yellow.', p: 'kiiroi' },
      { ja: '雪《ゆき》 は 白《しろ》い です。', en: 'Snow is white.', p: 'shiroi' },
      { ja: '夏《なつ》 の 木《き》 の 葉《は》 は 緑《みどり》 です。', en: 'In summer the leaves on the trees are green.', p: 'midori' },
      { ja: '雨《あめ》 の 日《ひ》 に 使《つか》います。', en: 'You use it on rainy days.', p: 'kasa' },
      { ja: '脈《みゃく》 を 測《はか》る とき、 これ を 見《み》ます。', en: 'You look at this when you take a pulse.', p: 'tokei' },
      { ja: '検査《けんさ》 の 前《まえ》 に、 指輪《ゆびわ》 を 外《はず》して ください。', en: 'Please take off your ring before the test.', p: 'yubiwa' },
      { ja: '寒《さむ》い 日《ひ》 に 首《くび》 に 巻《ま》きます。', en: 'You wrap it around your neck on cold days.', p: 'mafuraa' },
      { ja: '看護師《かんごし》さん は 注射《ちゅうしゃ》 の とき、 手袋《てぶくろ》 を します。', en: 'Nurses wear gloves when they give an injection.', p: 'tebukuro' }
    ] }
]);
