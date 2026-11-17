/* Picture words, group 'animals' (0.24.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'N5'|'N4',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-animals.js), intro: one English sentence,
     parts: [ { id: short romaji, w: ONE word in the notation (dictionary form), en, lv: 'N5'|'N4'|'N3',
                diagram: x, y = the point ON the thing in the art's viewBox units (pins at least 26 apart, 12 inside the edge);
                cards: pic = ONE emoji, Unicode Emoji 12.0 or older, no flags / skin tones / ZWJ sequences } ],   8 to 16 parts (cards 10 to 16)
     say: [ { ja: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);                       6 to 10 sentences
   At most a quarter of a set's words N3, none above. group = 'animals' for every set of this file.
   Sets of this file (PLAN C): pets-farm c N5; zoo c N4; birds-insects-sea c N4; animal-parts d N4 (a dog and a bird: tail, ear, paw, fur, wing, beak, feather; no horn).
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'pets-farm', group: 'animals', title: 'Pets and farm animals', lv: 'N5', kind: 'cards',
    intro: 'Animals people keep at home and on farms; the most common ones are written in kanji.',
    parts: [
      { id: 'inu', w: '犬《いぬ》', en: 'dog', lv: 'N5', pic: '🐕' },
      { id: 'neko', w: '猫《ねこ》', en: 'cat', lv: 'N5', pic: '🐈' },
      { id: 'usagi', w: 'うさぎ', en: 'rabbit', lv: 'N4', pic: '🐇' },
      { id: 'hamusutaa', w: 'ハムスター', en: 'hamster', lv: 'N4', pic: '🐹' },
      { id: 'nezumi', w: 'ねずみ', en: 'mouse, rat', lv: 'N4', pic: '🐁' },
      { id: 'kame', w: '亀《かめ》', en: 'turtle, tortoise', lv: 'N3', pic: '🐢' },
      { id: 'uma', w: '馬《うま》', en: 'horse', lv: 'N4', pic: '🐎' },
      { id: 'ushi', w: '牛《うし》', en: 'cow', lv: 'N4', pic: '🐄' },
      { id: 'buta', w: '豚《ぶた》', en: 'pig', lv: 'N4', pic: '🐖' },
      { id: 'niwatori', w: '鶏《にわとり》', en: 'chicken', lv: 'N4', pic: '🐓' },
      { id: 'hitsuji', w: '羊《ひつじ》', en: 'sheep', lv: 'N3', pic: '🐑' },
      { id: 'yagi', w: 'ヤギ', en: 'goat', lv: 'N3', pic: '🐐' }
    ],
    say: [
      { ja: '毎朝《まいあさ》 犬《いぬ》 と 散歩《さんぽ》して います。', en: 'I walk the dog every morning.', p: 'inu' },
      { ja: '猫《ねこ》 が 私《わたし》 の 手《て》 を ひっかきました。', en: 'The cat scratched my hand.', p: 'neko' },
      { ja: '耳《みみ》 が とても 長《なが》い 動物《どうぶつ》 です。', en: 'It is an animal with very long ears.', p: 'usagi' },
      { ja: 'とても ゆっくり 歩《ある》く 動物《どうぶつ》 です。', en: 'It is an animal that walks very slowly.', p: 'kame' },
      { ja: 'この 動物《どうぶつ》 に 乗《の》って、 速《はや》く 走《はし》ります。', en: 'You ride this animal and go fast.', p: 'uma' },
      { ja: '牛《うし》 から 牛乳《ぎゅうにゅう》 を とります。', en: 'We get milk from cows.', p: 'ushi' },
      { ja: 'とんかつ は この 動物《どうぶつ》 の 肉《にく》 です。', en: 'Tonkatsu is the meat of this animal.', p: 'buta' },
      { ja: '朝《あさ》 早《はや》く 「コケコッコー」 と 鳴《な》きます。', en: 'It calls "cock-a-doodle-doo" early in the morning.', p: 'niwatori' },
      { ja: '眠《ねむ》れない とき、 この 動物《どうぶつ》 を 数《かぞ》えます。', en: 'When you cannot sleep, you count this animal.', p: 'hitsuji' }
    ] },
  { id: 'zoo', group: 'animals', title: 'At the zoo', lv: 'N4', kind: 'cards',
    intro: 'Wild animals you see at a zoo; many of their names are written in katakana.',
    parts: [
      { id: 'zou', w: '象《ぞう》', en: 'elephant', lv: 'N4', pic: '🐘' },
      { id: 'raion', w: 'ライオン', en: 'lion', lv: 'N4', pic: '🦁' },
      { id: 'tora', w: 'トラ', en: 'tiger', lv: 'N4', pic: '🐅' },
      { id: 'kirin', w: 'キリン', en: 'giraffe', lv: 'N4', pic: '🦒' },
      { id: 'panda', w: 'パンダ', en: 'panda', lv: 'N4', pic: '🐼' },
      { id: 'saru', w: '猿《さる》', en: 'monkey', lv: 'N4', pic: '🐒' },
      { id: 'gorira', w: 'ゴリラ', en: 'gorilla', lv: 'N4', pic: '🦍' },
      { id: 'kuma', w: '熊《くま》', en: 'bear', lv: 'N4', pic: '🐻' },
      { id: 'shimauma', w: 'シマウマ', en: 'zebra', lv: 'N3', pic: '🦓' },
      { id: 'kaba', w: 'カバ', en: 'hippopotamus', lv: 'N3', pic: '🦛' },
      { id: 'wani', w: 'ワニ', en: 'crocodile', lv: 'N3', pic: '🐊' },
      { id: 'hebi', w: 'ヘビ', en: 'snake', lv: 'N4', pic: '🐍' },
      { id: 'koara', w: 'コアラ', en: 'koala', lv: 'N4', pic: '🐨' },
      { id: 'kangaruu', w: 'カンガルー', en: 'kangaroo', lv: 'N4', pic: '🦘' }
    ],
    say: [
      { ja: '鼻《はな》 が とても 長《なが》い 動物《どうぶつ》 です。', en: 'It is an animal with a very long nose.', p: 'zou' },
      { ja: '首《くび》 が いちばん 長《なが》い 動物《どうぶつ》 です。', en: 'It is the animal with the longest neck.', p: 'kirin' },
      { ja: '白《しろ》 と 黒《くろ》 の 動物《どうぶつ》 で、 竹《たけ》 を 食《た》べます。', en: 'It is a black and white animal that eats bamboo.', p: 'panda' },
      { ja: '白《しろ》 と 黒《くろ》 の しま が ある、 馬《うま》 の よう な 動物《どうぶつ》 です。', en: 'It is a horse-like animal with black and white stripes.', p: 'shimauma' },
      { ja: '「動物《どうぶつ》 の 王様《おうさま》」 と 呼《よ》ばれて います。', en: 'It is called "the king of the animals".', p: 'raion' },
      { ja: '日本《にほん》 の 山《やま》 に も いて、 冬《ふゆ》 は 温泉《おんせん》 に 入《はい》る こと も あります。', en: 'It also lives in the mountains of Japan and sometimes gets into hot springs in winter.', p: 'saru' },
      { ja: '冬《ふゆ》 の 間《あいだ》 は 穴《あな》 の 中《なか》 で 眠《ねむ》る、 大《おお》きくて 毛《け》 の ある 動物《どうぶつ》 です。', en: 'It is a big furry animal that sleeps in a den during the winter.', p: 'kuma' },
      { ja: '足《あし》 が ない 動物《どうぶつ》 です。', en: 'It is an animal with no legs.', p: 'hebi' },
      { ja: '後《うし》ろ の 足《あし》 で 大《おお》きく 跳《と》んで 進《すす》みます。', en: 'It moves along in big jumps on its back legs.', p: 'kangaruu' }
    ] },
  { id: 'birds-insects-sea', group: 'animals', title: 'Birds, insects and sea life', lv: 'N4', kind: 'cards',
    intro: 'Birds, insects and sea animals, including a few that bite or sting.',
    parts: [
      { id: 'tori', w: '鳥《とり》', en: 'bird', lv: 'N5', pic: '🐦' },
      { id: 'pengin', w: 'ペンギン', en: 'penguin', lv: 'N4', pic: '🐧' },
      { id: 'fukurou', w: 'フクロウ', en: 'owl', lv: 'N3', pic: '🦉' },
      { id: 'chou', w: 'チョウ', en: 'butterfly', lv: 'N4', pic: '🦋' },
      { id: 'hachi', w: 'ハチ', en: 'bee', lv: 'N4', pic: '🐝' },
      { id: 'ari', w: 'アリ', en: 'ant', lv: 'N4', pic: '🐜' },
      { id: 'ka', w: '蚊《か》', en: 'mosquito', lv: 'N4', pic: '🦟' },
      { id: 'kumo', w: 'クモ', en: 'spider', lv: 'N4', pic: '🕷️' },
      { id: 'sakana', w: '魚《さかな》', en: 'fish', lv: 'N5', pic: '🐟' },
      { id: 'iruka', w: 'イルカ', en: 'dolphin', lv: 'N4', pic: '🐬' },
      { id: 'kujira', w: 'クジラ', en: 'whale', lv: 'N3', pic: '🐋' },
      { id: 'same', w: 'サメ', en: 'shark', lv: 'N3', pic: '🦈' },
      { id: 'tako', w: 'タコ', en: 'octopus', lv: 'N4', pic: '🐙' },
      { id: 'kani', w: 'カニ', en: 'crab', lv: 'N4', pic: '🦀' },
      { id: 'ebi', w: 'エビ', en: 'shrimp, prawn', lv: 'N4', pic: '🦐' }
    ],
    say: [
      { ja: '鳥《とり》 です が、 空《そら》 を 飛《と》べません。 寒《さむ》い 所《ところ》 に います。', en: 'It is a bird, but it cannot fly. It lives in cold places.', p: 'pengin' },
      { ja: '昼《ひる》 は 寝《ね》て いて、 夜《よる》 に 起《お》きて いる 鳥《とり》 です。', en: 'It is a bird that sleeps in the day and is awake at night.', p: 'fukurou' },
      { ja: 'ハチ に 刺《さ》されて、 腕《うで》 が 腫《は》れました。', en: 'I was stung by a bee and my arm swelled up.', p: 'hachi' },
      { ja: '小《ちい》さくて 黒《くろ》い 虫《むし》 で、 甘《あま》い もの に 集《あつ》まります。', en: 'It is a small black insect that gathers around sweet things.', p: 'ari' },
      { ja: '夏《なつ》 の 夜《よる》、 この 虫《むし》 に 刺《さ》されて、 とても かゆく なりました。', en: 'One summer night this insect bit me and it got very itchy.', p: 'ka' },
      { ja: '糸《いと》 で 巣《す》 を 作《つく》ります。', en: 'It makes a web out of thread.', p: 'kumo' },
      { ja: '肉《にく》 より 魚《さかな》 を 食《た》べる ほう が 体《からだ》 に いい です よ。', en: 'Eating fish rather than meat is better for your health.', p: 'sakana' },
      { ja: '海《うみ》 で いちばん 大《おお》きい 動物《どうぶつ》 です。', en: 'It is the biggest animal in the sea.', p: 'kujira' },
      { ja: '足《あし》 が 八本《はっぽん》 ある 海《うみ》 の 動物《どうぶつ》 です。', en: 'It is a sea animal with eight legs.', p: 'tako' },
      { ja: '横《よこ》 に 歩《ある》く 海《うみ》 の 動物《どうぶつ》 です。', en: 'It is a sea animal that walks sideways.', p: 'kani' }
    ] },
  { id: 'animal-parts', group: 'animals', title: 'Parts of animals', lv: 'N4', kind: 'diagram', art: 'animal-parts',
    intro: 'The body parts of a dog and a bird; many are the same words used for people.',
    parts: [
      { id: 'atama', w: '頭《あたま》', en: 'head', lv: 'N5', x: 205, y: 93 },
      { id: 'mimi', w: '耳《みみ》', en: 'ear', lv: 'N5', x: 176, y: 131 },
      { id: 'me', w: '目《め》', en: 'eye', lv: 'N5', x: 229, y: 111 },
      { id: 'hana', w: '鼻《はな》', en: 'nose', lv: 'N5', x: 273, y: 114 },
      { id: 'kuchi', w: '口《くち》', en: 'mouth', lv: 'N5', x: 243, y: 151 },
      { id: 'kubi', w: '首《くび》', en: 'neck', lv: 'N4', x: 187, y: 167 },
      { id: 'senaka', w: '背中《せなか》', en: 'back', lv: 'N4', x: 115, y: 142 },
      { id: 'ke', w: '毛《け》', en: 'fur, hair', lv: 'N4', x: 97, y: 185 },
      { id: 'shippo', w: 'しっぽ', en: 'tail', lv: 'N3', x: 20, y: 116 },
      { id: 'ashi', w: '足《あし》', en: 'leg, paw', lv: 'N5', x: 164, y: 246 },
      { id: 'kuchibashi', w: 'くちばし', en: 'beak', lv: 'N3', x: 391, y: 83 },
      { id: 'hane', w: '羽《はね》', en: 'wing', lv: 'N4', x: 331, y: 165 },
      { id: 'tsume', w: '爪《つめ》', en: 'claw', lv: 'N3', x: 320, y: 262 }
    ],
    say: [
      { ja: 'うれしい とき、 犬《いぬ》 は これ を 振《ふ》ります。', en: 'When a dog is happy, it wags this.', p: 'shippo' },
      { ja: '犬《いぬ》 は これ で におい が よく わかります。', en: 'A dog can tell smells well with this.', p: 'hana' },
      { ja: 'この 犬《いぬ》 は 耳《みみ》 が 長《なが》くて、 下《した》 に たれて います。', en: 'This dog has long ears that hang down.', p: 'mimi' },
      { ja: '犬《いぬ》 は これ で 物《もの》 を 見《み》ます。', en: 'A dog sees things with these.', p: 'me' },
      { ja: '犬《いぬ》 の 目《め》 や 口《くち》 が ある ところ です。', en: 'It is the part of the dog where its eyes and mouth are.', p: 'atama' },
      { ja: 'ブラシ で 犬《いぬ》 の これ を きれい に します。', en: 'You clean this on a dog with a brush.', p: 'ke' },
      { ja: '犬《いぬ》 は 四本《よんほん》 の これ で 走《はし》ります。', en: 'A dog runs on four of these.', p: 'ashi' },
      { ja: '鳥《とり》 は これ で 虫《むし》 や 種《たね》 を 食《た》べます。', en: 'A bird eats insects and seeds with this.', p: 'kuchibashi' },
      { ja: '鳥《とり》 は これ を 動《うご》かして 空《そら》 を 飛《と》びます。', en: 'A bird moves these to fly in the sky.', p: 'hane' },
      { ja: '鳥《とり》 の 足《あし》 の 先《さき》 に ある、 とがった もの です。', en: 'They are the sharp things at the ends of a bird\'s feet.', p: 'tsume' }
    ] }
]);
