/* Picture words, group 'food' (0.24.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'N5'|'N4',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-food.js), intro: one English sentence,
     parts: [ { id: short romaji, w: ONE word in the notation (dictionary form), en, lv: 'N5'|'N4'|'N3',
                diagram: x, y = the point ON the thing in the art's viewBox units (pins at least 26 apart, 12 inside the edge);
                cards: pic = ONE emoji, Unicode Emoji 12.0 or older, no flags / skin tones / ZWJ sequences } ],   8 to 16 parts (cards 10 to 16)
     say: [ { ja: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);                       6 to 10 sentences
   At most a quarter of a set's words N3, none above. group = 'food' for every set of this file.
   Sets of this file (PLAN C): fruit-veg c N5; meals-drinks c N5; table-setting d N4.
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'fruit-veg', group: 'food', title: 'Fruit and vegetables', lv: 'N5', kind: 'cards',
    intro: 'Common fruit and vegetables you meet in shops, in meals and in the fruit that visitors bring.',
    parts: [
      { id: 'ringo', w: 'りんご', en: 'apple', lv: 'N5', pic: '🍎' },
      { id: 'mikan', w: 'みかん', en: 'mandarin orange', lv: 'N5', pic: '🍊' },
      { id: 'banana', w: 'バナナ', en: 'banana', lv: 'N5', pic: '🍌' },
      { id: 'budou', w: 'ぶどう', en: 'grapes', lv: 'N4', pic: '🍇' },
      { id: 'ichigo', w: 'いちご', en: 'strawberry', lv: 'N5', pic: '🍓' },
      { id: 'suika', w: 'すいか', en: 'watermelon', lv: 'N4', pic: '🍉' },
      { id: 'remon', w: 'レモン', en: 'lemon', lv: 'N4', pic: '🍋' },
      { id: 'meron', w: 'メロン', en: 'melon', lv: 'N4', pic: '🍈' },
      { id: 'tomato', w: 'トマト', en: 'tomato', lv: 'N5', pic: '🍅' },
      { id: 'ninjin', w: 'にんじん', en: 'carrot', lv: 'N5', pic: '🥕' },
      { id: 'jagaimo', w: 'じゃがいも', en: 'potato', lv: 'N5', pic: '🥔' },
      { id: 'tamanegi', w: '玉《たま》ねぎ', en: 'onion', lv: 'N5', pic: '🧅' },
      { id: 'kyabetsu', w: 'キャベツ', en: 'cabbage', lv: 'N5', pic: '🥬' },
      { id: 'kyuuri', w: 'きゅうり', en: 'cucumber', lv: 'N4', pic: '🥒' },
      { id: 'toumorokoshi', w: 'とうもろこし', en: 'corn', lv: 'N3', pic: '🌽' },
      { id: 'kinoko', w: 'きのこ', en: 'mushroom', lv: 'N3', pic: '🍄' }
    ],
    say: [
      { ja: '黄色《きいろ》くて 長《なが》い 果物《くだもの》 です。', en: 'It is a long yellow fruit.', p: 'banana' },
      { ja: 'とても すっぱい 黄色《きいろ》い 果物《くだもの》 です。', en: 'It is a very sour yellow fruit.', p: 'remon' },
      { ja: '外《そと》 は 緑《みどり》 で、 中《なか》 は 赤《あか》い 大《おお》きな 果物《くだもの》 です。', en: 'It is a big fruit, green outside and red inside.', p: 'suika' },
      { ja: '食欲《しょくよく》 が ない とき でも、 みかん なら 食《た》べられます。', en: 'Even when I have no appetite, I can eat a mandarin orange.', p: 'mikan' },
      { ja: 'りんご を 少《すこ》し だけ 食《た》べられました。', en: 'I was able to eat just a little apple.', p: 'ringo' },
      { ja: 'アレルギー が ある ので、 いちご は 食《た》べられません。', en: 'I have an allergy, so I cannot eat strawberries.', p: 'ichigo' },
      { ja: '家族《かぞく》 が ぶどう を 持《も》って きて くれました。', en: 'My family brought me some grapes.', p: 'budou' },
      { ja: 'カレー に 入《い》れる オレンジ色《いろ》 の 野菜《やさい》 です。', en: 'It is the orange vegetable you put in curry.', p: 'ninjin' },
      { ja: '切《き》る と 涙《なみだ》 が 出《で》る 野菜《やさい》 です。', en: 'It is the vegetable that makes you cry when you cut it.', p: 'tamanegi' },
      { ja: 'フライドポテト は この 野菜《やさい》 から 作《つく》ります。', en: 'French fries are made from this vegetable.', p: 'jagaimo' }
    ] },
  { id: 'meals-drinks', group: 'food', title: 'Meals and drinks', lv: 'N5', kind: 'cards',
    intro: 'Everyday dishes and drinks, useful when you ask a patient what they eat and drink.',
    parts: [
      { id: 'gohan', w: 'ご飯《はん》', en: 'cooked rice, meal', lv: 'N5', pic: '🍚' },
      { id: 'pan', w: 'パン', en: 'bread', lv: 'N5', pic: '🍞' },
      { id: 'tamago', w: '卵《たまご》', en: 'egg', lv: 'N5', pic: '🥚' },
      { id: 'niku', w: '肉《にく》', en: 'meat', lv: 'N5', pic: '🍖' },
      { id: 'sakana', w: '魚《さかな》', en: 'fish', lv: 'N5', pic: '🐟' },
      { id: 'gyuunyuu', w: '牛乳《ぎゅうにゅう》', en: 'milk', lv: 'N5', pic: '🥛' },
      { id: 'ocha', w: 'お茶《ちゃ》', en: 'tea, green tea', lv: 'N5', pic: '🍵' },
      { id: 'koohii', w: 'コーヒー', en: 'coffee', lv: 'N5', pic: '☕' },
      { id: 'juusu', w: 'ジュース', en: 'juice, soft drink', lv: 'N5', pic: '🥤' },
      { id: 'osake', w: 'お酒《さけ》', en: 'alcohol, sake', lv: 'N5', pic: '🍶' },
      { id: 'obentou', w: 'お弁当《べんとう》', en: 'boxed lunch', lv: 'N5', pic: '🍱' },
      { id: 'onigiri', w: 'おにぎり', en: 'rice ball', lv: 'N4', pic: '🍙' },
      { id: 'raamen', w: 'ラーメン', en: 'ramen noodles', lv: 'N4', pic: '🍜' },
      { id: 'sushi', w: 'すし', en: 'sushi', lv: 'N4', pic: '🍣' },
      { id: 'karee', w: 'カレー', en: 'curry and rice', lv: 'N4', pic: '🍛' },
      { id: 'keeki', w: 'ケーキ', en: 'cake', lv: 'N4', pic: '🍰' }
    ],
    say: [
      { ja: '朝《あさ》 は いつも パン を 食《た》べます。', en: 'I always eat bread in the morning.', p: 'pan' },
      { ja: '夜《よる》 眠《ねむ》れなく なる ので、 コーヒー は 飲《の》みません。', en: 'I do not drink coffee, because it keeps me awake at night.', p: 'koohii' },
      { ja: '一日《いちにち》 に どの くらい お酒《さけ》 を 飲《の》みます か。', en: 'How much alcohol do you drink a day?', p: 'osake' },
      { ja: '牛乳《ぎゅうにゅう》 を 飲《の》む と、 おなか が 痛《いた》く なります。', en: 'When I drink milk, my stomach hurts.', p: 'gyuunyuu' },
      { ja: '卵《たまご》 の アレルギー は あります か。', en: 'Do you have an egg allergy?', p: 'tamago' },
      { ja: '食事《しょくじ》 の 後《あと》 に 温《あたた》かい お茶《ちゃ》 を どうぞ。', en: 'Please have some hot tea after your meal.', p: 'ocha' },
      { ja: '三角《さんかく》 の 形《かたち》 で、 のり が 巻《ま》いて あります。', en: 'It is triangle-shaped and wrapped in seaweed.', p: 'onigiri' },
      { ja: '昼《ひる》 は 家《いえ》 で 作《つく》った お弁当《べんとう》 を 食《た》べます。', en: 'At lunch I eat a boxed lunch I made at home.', p: 'obentou' },
      { ja: '熱《あつ》い スープ に 麺《めん》 が 入《はい》って います。', en: 'It has noodles in hot soup.', p: 'raamen' },
      { ja: '誕生日《たんじょうび》 に 食《た》べる 甘《あま》い もの です。', en: 'It is a sweet thing you eat on your birthday.', p: 'keeki' }
    ] },
  { id: 'table-setting', group: 'food', title: 'A meal tray', lv: 'N4', kind: 'diagram', art: 'table-setting',
    intro: 'The things on and around a Japanese meal tray, as served at home or on a hospital ward.',
    parts: [
      { id: 'obon', w: 'お盆《ぼん》', en: 'tray', lv: 'N3', x: 25, y: 222 },
      { id: 'chawan', w: '茶碗《ちゃわん》', en: 'rice bowl', lv: 'N4', x: 100, y: 236 },
      { id: 'owan', w: 'おわん', en: 'soup bowl', lv: 'N4', x: 218, y: 238 },
      { id: 'osara', w: 'お皿《さら》', en: 'plate', lv: 'N5', x: 272, y: 188 },
      { id: 'hashi', w: '箸《はし》', en: 'chopsticks', lv: 'N4', x: 110, y: 272 },
      { id: 'supuun', w: 'スプーン', en: 'spoon', lv: 'N4', x: 246, y: 272 },
      { id: 'fooku', w: 'フォーク', en: 'fork', lv: 'N4', x: 346, y: 266 },
      { id: 'naifu', w: 'ナイフ', en: 'knife', lv: 'N4', x: 393, y: 280 },
      { id: 'koppu', w: 'コップ', en: 'glass, cup', lv: 'N5', x: 54, y: 114 },
      { id: 'yunomi', w: '湯飲《ゆの》み', en: 'teacup', lv: 'N3', x: 358, y: 140 },
      { id: 'kyuusu', w: '急須《きゅうす》', en: 'teapot', lv: 'N3', x: 360, y: 84 },
      { id: 'shouyu', w: 'しょうゆ', en: 'soy sauce', lv: 'N4', x: 130, y: 120 },
      { id: 'shio', w: '塩《しお》', en: 'salt', lv: 'N4', x: 190, y: 120 }
    ],
    say: [
      { ja: 'ここ に ご飯《はん》 を 入《い》れます。', en: 'You put the rice in here.', p: 'chawan' },
      { ja: 'みそ汁《しる》 が 入《はい》って います。', en: 'There is miso soup in it.', p: 'owan' },
      { ja: '焼《や》いた 魚《さかな》 が のって います。', en: 'There is a grilled fish on it.', p: 'osara' },
      { ja: '箸《はし》 が 使《つか》いにくい とき は、 言《い》って ください。', en: 'If the chopsticks are hard to use, please tell us.', p: 'hashi' },
      { ja: '食《た》べにくい とき は、 スプーン を 使《つか》って ください。', en: 'If it is hard to eat, please use the spoon.', p: 'supuun' },
      { ja: '血圧《けつあつ》 が 高《たか》い ので、 塩《しお》 を たくさん 使《つか》わないで ください。', en: 'Your blood pressure is high, so please do not use much salt.', p: 'shio' },
      { ja: 'しょうゆ を かけすぎない よう に して ください。', en: 'Please try not to put on too much soy sauce.', p: 'shouyu' },
      { ja: 'これ で お茶《ちゃ》 を いれます。', en: 'You make tea with this.', p: 'kyuusu' },
      { ja: 'お薬《くすり》 を 飲《の》む ので、 コップ に 水《みず》 を ください。', en: 'I am going to take my medicine, so please give me a glass of water.', p: 'koppu' },
      { ja: '食《た》べ終《お》わったら、 お盆《ぼん》 を 下《さ》げます ね。', en: 'When you have finished eating, I will take the tray away.', p: 'obon' }
    ] }
]);
