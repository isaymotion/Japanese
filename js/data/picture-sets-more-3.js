/* Picture sets added in 0.27.0 (part 3). DRAFT: all Japanese here is pending review by a native Japanese-speaking clinician.
   Notation: tools/AUTHORING.md. Shape: the header of picture-sets-body.js. Set ids and part ids are permanent: append only. */
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'sports-hobbies', group: 'daily', title: 'Sports and hobbies', lv: 'N5', kind: 'diagram', art: 'sports-hobbies',
    intro: 'Sports and hobbies, one drawing each: the words you need when you ask a patient what they enjoy doing.',
    parts: [
      { id: 'sakkaa', w: 'サッカー', en: 'football, soccer', lv: 'N5', x: 70, y: 72 },
      { id: 'yakyuu', w: '野球《やきゅう》', en: 'baseball', lv: 'N4', x: 144, y: 58 },
      { id: 'tenisu', w: 'テニス', en: 'tennis', lv: 'N5', x: 266, y: 73 },
      { id: 'suiei', w: '水泳《すいえい》', en: 'swimming', lv: 'N4', x: 380, y: 78 },
      { id: 'jogingu', w: 'ジョギング', en: 'jogging, running', lv: 'N3', x: 60, y: 164 },
      { id: 'yamanobori', w: '山登《やまのぼ》り', en: 'hiking, mountain climbing', lv: 'N4', x: 168, y: 170 },
      { id: 'tsuri', w: '釣《つ》り', en: 'fishing', lv: 'N4', x: 230, y: 154 },
      { id: 'ryokou', w: '旅行《りょこう》', en: 'travel, a trip', lv: 'N5', x: 350, y: 166 },
      { id: 'dokusho', w: '読書《どくしょ》', en: 'reading (books)', lv: 'N4', x: 68, y: 262 },
      { id: 'e', w: '絵《え》', en: 'painting, drawing (a picture)', lv: 'N5', x: 126, y: 270 },
      { id: 'gitaa', w: 'ギター', en: 'guitar', lv: 'N5', x: 260, y: 272 },
      { id: 'piano', w: 'ピアノ', en: 'piano', lv: 'N5', x: 350, y: 266 },
      { id: 'karaoke', w: 'カラオケ', en: 'karaoke', lv: 'N4', x: 60, y: 367 },
      { id: 'eiga', w: '映画《えいが》', en: 'film, movie', lv: 'N5', x: 160, y: 372 },
      { id: 'ryouri', w: '料理《りょうり》', en: 'cooking', lv: 'N5', x: 260, y: 370 },
      { id: 'geemu', w: 'ゲーム', en: 'video games', lv: 'N4', x: 350, y: 362 }
    ],
    say: [
      { ja: '今《いま》 でも 釣《つ》り に 行《い》きます か。', en: 'Do you still go fishing?', p: 'tsuri' },
      { ja: '休《やす》み の 日《ひ》 は 家《いえ》 で 本《ほん》 を 読《よ》んで います。', en: 'On my days off I read books at home.', p: 'dokusho' },
      { ja: '毎朝《まいあさ》 公園《こうえん》 を 走《はし》って います か。', en: 'Do you run in the park every morning?', p: 'jogingu' },
      { ja: '眠《ねむ》れない 夜《よる》 は ギター を 弾《ひ》きます。', en: 'On nights when I cannot sleep, I play the guitar.', p: 'gitaa' },
      { ja: '子供《こども》 の とき から ピアノ を 習《なら》って います。', en: 'I have taken piano lessons since I was a child.', p: 'piano' },
      { ja: '友達《ともだち》 と カラオケ で 歌《うた》う の が 好《す》き です。', en: 'I like singing karaoke with my friends.', p: 'karaoke' },
      { ja: '体《からだ》 の ため に、 週《しゅう》 に 二回《にかい》 プール で 泳《およ》いで います。', en: 'For my health, I swim in a pool twice a week.', p: 'suiei' },
      { ja: '退院《たいいん》したら、 また 家族《かぞく》 と 旅行《りょこう》 に 行《い》きたい です。', en: 'When I leave hospital, I want to go on a trip with my family again.', p: 'ryokou' },
      { ja: '気分《きぶん》 が いい 日《ひ》 は 絵《え》 を 描《か》きます。', en: 'On days when I feel well, I paint pictures.', p: 'e' },
      { ja: 'テレビ で 野球《やきゅう》 の 試合《しあい》 を 見《み》る の が 好《す》き です。', en: 'I like watching baseball games on TV.', p: 'yakyuu' }
    ] },
  { id: 'clock-calendar', group: 'daily', title: 'Clocks and the calendar', lv: 'N5', kind: 'diagram', art: 'clock-calendar',
    intro: 'Clocks and a month calendar: crossed-out days are past (the last one is yesterday), today is circled and the arrow points to tomorrow; the bars on the left mark last, this and next week; shaded columns are the weekend, the flag is a public holiday, and the rising sun and the moon are morning and night.',
    parts: [
      { id: 'tokei', w: '時計《とけい》', en: 'clock', lv: 'N5', x: 32, y: 122 },
      { id: 'mezamashi', w: '目覚《めざ》まし時計《どけい》', en: 'alarm clock', lv: 'N4', x: 96, y: 240 },
      { id: 'udedokei', w: '腕時計《うでどけい》', en: 'wristwatch', lv: 'N4', x: 34, y: 310 },
      { id: 'karendaa', w: 'カレンダー', en: 'calendar', lv: 'N4', x: 390, y: 50 },
      { id: 'kinou', w: '昨日《きのう》', en: 'yesterday', lv: 'N5', x: 257, y: 198 },
      { id: 'kyou', w: '今日《きょう》', en: 'today', lv: 'N5', x: 291, y: 198 },
      { id: 'ashita', w: '明日《あした》', en: 'tomorrow', lv: 'N5', x: 325, y: 198 },
      { id: 'senshuu', w: '先週《せんしゅう》', en: 'last week', lv: 'N5', x: 150, y: 142 },
      { id: 'konshuu', w: '今週《こんしゅう》', en: 'this week', lv: 'N5', x: 150, y: 186 },
      { id: 'raishuu', w: '来週《らいしゅう》', en: 'next week', lv: 'N5', x: 150, y: 230 },
      { id: 'shuumatsu', w: '週末《しゅうまつ》', en: 'weekend', lv: 'N4', x: 393, y: 274 },
      { id: 'shukujitsu', w: '祝日《しゅくじつ》', en: 'public holiday', lv: 'N3', x: 224, y: 241 },
      { id: 'asa', w: '朝《あさ》', en: 'morning', lv: 'N5', x: 266, y: 342 },
      { id: 'yoru', w: '夜《よる》', en: 'night, evening', lv: 'N5', x: 330, y: 334 }
    ],
    say: [
      { ja: '今日《きょう》 は 午後《ごご》 から 検査《けんさ》 が あります。', en: 'Today there is a test from the afternoon.', p: 'kyou' },
      { ja: '次《つぎ》 の 予約《よやく》 は 来週《らいしゅう》 の 金曜日《きんようび》 です。', en: 'Your next appointment is on Friday next week.', p: 'raishuu' },
      { ja: '昨日《きのう》 から 熱《ねつ》 が あります。', en: 'I have had a fever since yesterday.', p: 'kinou' },
      { ja: 'では、 明日《あした》 また 来《き》て ください。', en: 'Well then, please come again tomorrow.', p: 'ashita' },
      { ja: '朝《あさ》 は 何時《なんじ》 ごろ 起《お》きます か。', en: 'About what time do you get up in the morning?', p: 'asa' },
      { ja: '夜《よる》 は 何時《なんじ》 ごろ 寝《ね》ます か。', en: 'About what time do you go to bed at night?', p: 'yoru' },
      { ja: '目覚《めざ》まし時計《どけい》 の 音《おと》 が 聞《き》こえません でした。', en: 'I did not hear the alarm clock.', p: 'mezamashi' },
      { ja: '先週《せんしゅう》 から 食欲《しょくよく》 が ありません。', en: 'I have had no appetite since last week.', p: 'senshuu' },
      { ja: '週末《しゅうまつ》 は 何《なに》 を して います か。', en: 'What do you do at the weekend?', p: 'shuumatsu' },
      { ja: '祝日《しゅくじつ》 は 受付《うけつけ》 が お休《やす》み です。', en: 'Reception is closed on public holidays.', p: 'shukujitsu' }
    ] }
]);
