/* Picture words, group 'daily' (0.24.0): tap-to-learn pictures for #/pictures (js/pictures.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (PLAN-0.24 A1): window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([ { id, group, title, lv: 'N5'|'N4',
     kind: 'diagram'|'cards', art (diagram only: a key of window.PICTURE_ART, pictures/art-daily.js), intro: one English sentence,
     parts: [ { id: short romaji, w: ONE word in the notation (dictionary form), en, lv: 'N5'|'N4'|'N3',
                diagram: x, y = the point ON the thing in the art's viewBox units (pins at least 26 apart, 12 inside the edge);
                cards: pic = ONE emoji, Unicode Emoji 12.0 or older, no flags / skin tones / ZWJ sequences } ],   8 to 16 parts (cards 10 to 16)
     say: [ { ja: a sentence whose answer is exactly ONE part, en, p: part id } ] } ]);                       6 to 10 sentences
   At most a quarter of a set's words N3, none above. group = 'daily' for every set of this file.
   Sets of this file (PLAN C): feelings c N4 (faces; w is the adjective or verb); daily-routine c N5 (verbs); school-office c N5; family-tree d N5.
   Set ids and part ids are permanent: append only after release (never insert, reorder or delete). */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'feelings', group: 'daily', title: 'Feelings', lv: 'N4', kind: 'cards',
    intro: 'Feeling words, as adjectives and verbs, that patients use to say how they are.',
    parts: [
      { id: 'ureshii', w: '嬉《うれ》しい', en: 'glad, happy', lv: 'N4', pic: '😄' },
      { id: 'kanashii', w: '悲《かな》しい', en: 'sad', lv: 'N4', pic: '😢' },
      { id: 'okoru', w: '怒《おこ》る', en: 'to get angry', lv: 'N4', pic: '😠' },
      { id: 'kowai', w: '怖《こわ》い', en: 'scared, frightening', lv: 'N4', pic: '😨' },
      { id: 'nemui', w: '眠《ねむ》い', en: 'sleepy', lv: 'N4', pic: '😪' },
      { id: 'itai', w: '痛《いた》い', en: 'painful, it hurts', lv: 'N5', pic: '🤕' },
      { id: 'odoroku', w: '驚《おどろ》く', en: 'to be surprised', lv: 'N4', pic: '😲' },
      { id: 'shinpai', w: '心配《しんぱい》', en: 'worried', lv: 'N4', pic: '😟' },
      { id: 'hazukashii', w: '恥《は》ずかしい', en: 'embarrassed', lv: 'N4', pic: '😳' },
      { id: 'tsukareru', w: '疲《つか》れる', en: 'to get tired', lv: 'N4', pic: '😩' },
      { id: 'sabishii', w: '寂《さび》しい', en: 'lonely', lv: 'N4', pic: '😔' },
      { id: 'anshin', w: '安心《あんしん》する', en: 'to feel relieved', lv: 'N4', pic: '😌' },
      { id: 'komaru', w: '困《こま》る', en: 'to be troubled, not know what to do', lv: 'N4', pic: '😕' },
      { id: 'iraira', w: 'イライラ', en: 'irritated, on edge', lv: 'N3', pic: '😤' }
    ],
    say: [
      { ja: '友達《ともだち》 から 手紙《てがみ》 が 来《き》て、 嬉《うれ》しかった です。', en: 'A letter came from a friend, and I was glad.', p: 'ureshii' },
      { ja: '一人《ひとり》 で 家《いえ》 に いる と、 寂《さび》しい です。', en: 'When I am at home alone, I feel lonely.', p: 'sabishii' },
      { ja: '夜《よる》 に 大《おお》きい 音《おと》 が して、 怖《こわ》かった です。', en: 'There was a loud noise at night, and I was scared.', p: 'kowai' },
      { ja: '昨日《きのう》 の 夜《よる》 よく 眠《ねむ》れなかった ので、 今《いま》 とても 眠《ねむ》い です。', en: 'I could not sleep well last night, so I am very sleepy now.', p: 'nemui' },
      { ja: '仕事《しごと》 が 多《おお》くて、 毎日《まいにち》 疲《つか》れて います。', en: 'I have a lot of work, and I am tired every day.', p: 'tsukareru' },
      { ja: '家族《かぞく》 の 病気《びょうき》 が 心配《しんぱい》 です。', en: 'I am worried about my family member\'s illness.', p: 'shinpai' },
      { ja: '先生《せんせい》 と 話《はな》して、 安心《あんしん》しました。', en: 'I talked with the doctor and felt relieved.', p: 'anshin' },
      { ja: '人《ひと》 の 前《まえ》 で 話《はな》す の は 恥《は》ずかしい です。', en: 'Speaking in front of people is embarrassing.', p: 'hazukashii' },
      { ja: '朝《あさ》 から 頭《あたま》 が 痛《いた》い です。', en: 'My head has hurt since the morning.', p: 'itai' },
      { ja: '急《きゅう》 に 名前《なまえ》 を 呼《よ》ばれて、 驚《おどろ》きました。', en: 'I was surprised when my name was suddenly called.', p: 'odoroku' }
    ] },
  { id: 'daily-routine', group: 'daily', title: 'A day: everyday verbs', lv: 'N5', kind: 'cards',
    intro: 'Verbs for the things you do every day, from getting up to going to bed.',
    parts: [
      { id: 'okiru', w: '起《お》きる', en: 'to get up, wake up', lv: 'N5', pic: '⏰' },
      { id: 'arau', w: '洗《あら》う', en: 'to wash', lv: 'N5', pic: '🧼' },
      { id: 'migaku', w: '磨《みが》く', en: 'to brush (teeth)', lv: 'N4', pic: '🦷' },
      { id: 'kiru', w: '着《き》る', en: 'to put on (clothes)', lv: 'N5', pic: '👕' },
      { id: 'taberu', w: '食《た》べる', en: 'to eat', lv: 'N5', pic: '🍚' },
      { id: 'nomu', w: '飲《の》む', en: 'to drink', lv: 'N5', pic: '☕' },
      { id: 'hataraku', w: '働《はたら》く', en: 'to work', lv: 'N5', pic: '💼' },
      { id: 'benkyou', w: '勉強《べんきょう》する', en: 'to study', lv: 'N5', pic: '📚' },
      { id: 'kau', w: '買《か》う', en: 'to buy', lv: 'N5', pic: '🛒' },
      { id: 'ryouri', w: '料理《りょうり》する', en: 'to cook', lv: 'N5', pic: '🍳' },
      { id: 'sentaku', w: '洗濯《せんたく》する', en: 'to do the laundry', lv: 'N5', pic: '🧺' },
      { id: 'souji', w: '掃除《そうじ》する', en: 'to clean', lv: 'N5', pic: '🧹' },
      { id: 'yomu', w: '読《よ》む', en: 'to read', lv: 'N5', pic: '📖' },
      { id: 'miru', w: '見《み》る', en: 'to watch, see', lv: 'N5', pic: '📺' },
      { id: 'kaeru', w: '帰《かえ》る', en: 'to go home', lv: 'N5', pic: '🏠' },
      { id: 'neru', w: '寝《ね》る', en: 'to go to bed, sleep', lv: 'N5', pic: '🛌' }
    ],
    say: [
      { ja: '毎朝《まいあさ》 六時《ろくじ》 に 起《お》きます。', en: 'I get up at six every morning.', p: 'okiru' },
      { ja: 'ご飯《はん》 の 前《まえ》 に 手《て》 を 洗《あら》って ください。', en: 'Please wash your hands before meals.', p: 'arau' },
      { ja: '一日《いちにち》 に 三回《さんかい》 歯《は》 を 磨《みが》きます。', en: 'I brush my teeth three times a day.', p: 'migaku' },
      { ja: '夜《よる》 は 何時《なんじ》 ごろ 寝《ね》ます か。', en: 'About what time do you go to bed at night?', p: 'neru' },
      { ja: '朝《あさ》ご飯《はん》 は 毎日《まいにち》 食《た》べて います か。', en: 'Do you eat breakfast every day?', p: 'taberu' },
      { ja: '毎朝《まいあさ》 コーヒー を 飲《の》みます。', en: 'I drink coffee every morning.', p: 'nomu' },
      { ja: '週末《しゅうまつ》 は 部屋《へや》 を 掃除《そうじ》します。', en: 'I clean my room at the weekend.', p: 'souji' },
      { ja: 'スーパー で 野菜《やさい》 を 買《か》います。', en: 'I buy vegetables at the supermarket.', p: 'kau' },
      { ja: '毎晩《まいばん》 少《すこ》し 本《ほん》 を 読《よ》みます。', en: 'I read a book for a little while every night.', p: 'yomu' },
      { ja: '月曜日《げつようび》 から 金曜日《きんようび》 まで 働《はたら》いて います。', en: 'I work from Monday to Friday.', p: 'hataraku' }
    ] },
  { id: 'school-office', group: 'daily', title: 'School and office things', lv: 'N5', kind: 'cards',
    intro: 'Things on a desk at school, in an office or at the nurses\' station.',
    parts: [
      { id: 'enpitsu', w: '鉛筆《えんぴつ》', en: 'pencil', lv: 'N5', pic: '✏️' },
      { id: 'pen', w: 'ペン', en: 'pen', lv: 'N5', pic: '🖊️' },
      { id: 'nooto', w: 'ノート', en: 'notebook', lv: 'N5', pic: '📓' },
      { id: 'hon', w: '本《ほん》', en: 'book', lv: 'N5', pic: '📕' },
      { id: 'hasami', w: 'はさみ', en: 'scissors', lv: 'N4', pic: '✂️' },
      { id: 'kami', w: '紙《かみ》', en: 'paper, a sheet of paper', lv: 'N5', pic: '📄' },
      { id: 'isu', w: '椅子《いす》', en: 'chair', lv: 'N5', pic: '🪑' },
      { id: 'pasokon', w: 'パソコン', en: 'computer', lv: 'N4', pic: '💻' },
      { id: 'denwa', w: '電話《でんわ》', en: 'telephone', lv: 'N5', pic: '☎️' },
      { id: 'tokei', w: '時計《とけい》', en: 'clock', lv: 'N5', pic: '🕰️' },
      { id: 'karendaa', w: 'カレンダー', en: 'calendar', lv: 'N4', pic: '📅' },
      { id: 'kaban', w: 'かばん', en: 'bag', lv: 'N5', pic: '🎒' },
      { id: 'jougi', w: '定規《じょうぎ》', en: 'ruler', lv: 'N3', pic: '📏' },
      { id: 'kurippu', w: 'クリップ', en: 'paper clip', lv: 'N4', pic: '📎' },
      { id: 'fairu', w: 'ファイル', en: 'file, folder', lv: 'N4', pic: '📁' },
      { id: 'shinbun', w: '新聞《しんぶん》', en: 'newspaper', lv: 'N5', pic: '📰' }
    ],
    say: [
      { ja: 'ここ に ペン で お名前《なまえ》 を 書《か》いて ください。', en: 'Please write your name here with a pen.', p: 'pen' },
      { ja: '試験《しけん》 の とき は 鉛筆《えんぴつ》 を 使《つか》います。', en: 'We use a pencil in exams.', p: 'enpitsu' },
      { ja: 'はさみ で テープ を 切《き》って ください。', en: 'Please cut the tape with the scissors.', p: 'hasami' },
      { ja: 'どうぞ、 椅子《いす》 に 座《すわ》って ください。', en: 'Please, have a seat on the chair.', p: 'isu' },
      { ja: '次《つぎ》 の 予約《よやく》 の 日《ひ》 を カレンダー に 書《か》きます。', en: 'I write the day of the next appointment on the calendar.', p: 'karendaa' },
      { ja: '毎朝《まいあさ》 新聞《しんぶん》 を 読《よ》みます か。', en: 'Do you read the newspaper every morning?', p: 'shinbun' },
      { ja: '壁《かべ》 の 時計《とけい》 を 見《み》て、 時間《じかん》 を 教《おし》えて ください。', en: 'Please look at the clock on the wall and tell me the time.', p: 'tokei' },
      { ja: 'パソコン で メール を 書《か》きます。', en: 'I write emails on the computer.', p: 'pasokon' },
      { ja: '検査《けんさ》 の 結果《けっか》 は この ファイル に 入《はい》って います。', en: 'The test results are in this folder.', p: 'fairu' },
      { ja: '線《せん》 を まっすぐ 引《ひ》く とき は 定規《じょうぎ》 を 使《つか》います。', en: 'When I draw a straight line, I use a ruler.', p: 'jougi' }
    ] },
  { id: 'family-tree', group: 'daily', title: 'My family', lv: 'N5', kind: 'diagram', art: 'family-tree',
    intro: 'The words for your own family when you talk about them to other people; you are the woman in the dashed box, with your older brother and sister on your left and your younger ones on your right.',
    parts: [
      { id: 'sofu', w: '祖父《そふ》', en: 'my grandfather', lv: 'N4', x: 130, y: 52 },
      { id: 'sobo', w: '祖母《そぼ》', en: 'my grandmother', lv: 'N4', x: 200, y: 52 },
      { id: 'chichi', w: '父《ちち》', en: 'my father', lv: 'N5', x: 165, y: 134 },
      { id: 'haha', w: '母《はは》', en: 'my mother', lv: 'N5', x: 235, y: 134 },
      { id: 'ani', w: '兄《あに》', en: 'my older brother', lv: 'N5', x: 40, y: 220 },
      { id: 'ane', w: '姉《あね》', en: 'my older sister', lv: 'N5', x: 100, y: 220 },
      { id: 'watashi', w: '私《わたし》', en: 'I, me', lv: 'N5', x: 160, y: 220 },
      { id: 'otto', w: '夫《おっと》', en: 'my husband', lv: 'N4', x: 230, y: 278 },
      { id: 'otouto', w: '弟《おとうと》', en: 'my younger brother', lv: 'N5', x: 300, y: 221 },
      { id: 'imouto', w: '妹《いもうと》', en: 'my younger sister', lv: 'N5', x: 360, y: 221 },
      { id: 'musuko', w: '息子《むすこ》', en: 'my son', lv: 'N4', x: 160, y: 353 },
      { id: 'musume', w: '娘《むすめ》', en: 'my daughter', lv: 'N4', x: 240, y: 353 }
    ],
    say: [
      { ja: '祖父《そふ》 は 去年《きょねん》 入院《にゅういん》しました。', en: 'My grandfather was in hospital last year.', p: 'sofu' },
      { ja: '父《ちち》 の 母《はは》 は 八十歳《はちじゅっさい》 です。', en: 'My father\'s mother is eighty.', p: 'sobo' },
      { ja: '父《ちち》 は 夜《よる》 あまり 眠《ねむ》れない そう です。', en: 'My father says he does not sleep well at night.', p: 'chichi' },
      { ja: '母《はは》 は 毎日《まいにち》 散歩《さんぽ》 を して います。', en: 'My mother goes for a walk every day.', p: 'haha' },
      { ja: '兄《あに》 は 東京《とうきょう》 で 働《はたら》いて います。', en: 'My older brother works in Tokyo.', p: 'ani' },
      { ja: '姉《あね》 は 私《わたし》 より 三歳《さんさい》 上《うえ》 です。', en: 'My older sister is three years older than me.', p: 'ane' },
      { ja: '弟《おとうと》 は まだ 大学生《だいがくせい》 です。', en: 'My younger brother is still a university student.', p: 'otouto' },
      { ja: '妹《いもうと》 は 看護師《かんごし》 です。', en: 'My younger sister is a nurse.', p: 'imouto' },
      { ja: '夫《おっと》 は 料理《りょうり》 が 上手《じょうず》 です。', en: 'My husband is good at cooking.', p: 'otto' },
      { ja: '娘《むすめ》 は 五歳《ごさい》 です。', en: 'My daughter is five.', p: 'musume' }
    ] }
]);
