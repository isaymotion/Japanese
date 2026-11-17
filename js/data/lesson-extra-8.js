/* Lesson extras part 8 (0.23.0): common mistakes, more examples and a "More practice" quiz for existing N5 and N4 lessons
   (7 lessons per file, in lesson order; the lesson page shows them after the body and runs the quiz after the lesson's own).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'concession': {
    mistakes: [
      ["痛《いた》い でも、 歩《ある》きます。", "痛《いた》くて も、 歩《ある》きます。", "An い-adjective makes \"even if\" with くて も, not でも."],
      ["眠《ねむ》れない の に、 横《よこ》 に なって ください。", "眠《ねむ》れなくて も、 横《よこ》 に なって ください。", "の に reports a disappointing fact and cannot be followed by a request; use 〜ても for \"even if\"."],
      ["静《しず》か の に、 眠《ねむ》れません。", "静《しず》か な の に、 眠《ねむ》れません。", "A な-adjective needs な before の に."]
    ],
    more: [
      ["つらく なって も、 一人《ひとり》 で 我慢《がまん》 しないで ください。", "Even if things get hard, please don't put up with it on your own."],
      ["薬《くすり》 を 変《か》えた の に、 まだ 気分《きぶん》 が 落《お》ち込《こ》みます。", "I changed medicines, and I still feel down."],
      ["仕事《しごと》 も 忙《いそが》しい し、 夜《よる》 も よく 眠《ねむ》れません。", "Work is busy, and I don't sleep well at night either."],
      ["暑《あつ》くて も、 エアコン は 使《つか》いません。", "Even when it's hot, I don't use the air conditioner."],
      ["一生懸命《いっしょうけんめい》 勉強《べんきょう》 した の に、 試験《しけん》 に 落《お》ちました。", "I studied really hard, and I still failed the exam."],
      ["この 店《みせ》 は 安《やす》い し、 料理《りょうり》 も おいしい です。", "This place is cheap, and the food is good too."]
    ],
    quiz: [
      ["What is the \"even if\" form of 飲《の》まない?", ["飲《の》まなくて も", "飲《の》まないて も", "飲《の》まない でも"], 0, "A negative verb ends in ない, which changes like an い-adjective: なくて も."],
      ["Fill the blank: 毎日《まいにち》 練習《れんしゅう》 した ＿、 上手《じょうず》 に なりません。", ["し", "の に", "て も"], 1, "Two facts with disappointment are joined by の に; た + て も is not a form."],
      ["何度《なんど》 説明《せつめい》 して も、 わかって もらえません means:", ["I explained many times, so they understood.", "If I explain once, they will understand.", "No matter how many times I explain, they don't understand me."], 2, "A question word + ても means \"no matter how\"; 何度《なんど》 is \"how many times\"."],
      ["Choose the natural sentence for \"Even if you are busy, please eat breakfast.\"", ["忙《いそが》しくて も、 朝《あさ》ご飯《はん》 を 食《た》べて ください。", "忙《いそが》しい の に、 朝《あさ》ご飯《はん》 を 食《た》べて ください。", "忙《いそが》しい し、 朝《あさ》ご飯《はん》 を 食《た》べて ください。"], 0, "〜ても can be followed by a request; の に cannot, and し lists reasons."],
      ["食欲《しょくよく》 も ない し、 元気《げんき》 も ありません. What does し do here?", ["It gives a condition, like \"if\".", "It contrasts two opposite facts.", "It lists facts that point the same way."], 2, "し lists several facts or reasons in the same direction."],
      ["Which sentence shows disappointment?", ["薬《くすり》 を 飲《の》んで も いい です。", "早《はや》く 寝《ね》た の に、 朝《あさ》 起《お》きられません でした。", "早《はや》く 寝《ね》た し、 今日《きょう》 は 元気《げんき》 です。"], 1, "の に joins two facts where the result is not what the speaker expected."]
    ]
  },
  'passive': {
    mistakes: [
      ["先生《せんせい》 に 注意《ちゅうい》 しました。", "先生《せんせい》 に 注意《ちゅうい》 されました。", "To say the teacher warned you, the する-verb must be passive: される."],
      ["医者《いしゃ》 に 「よく 休《やす》んで ください」 と 言《い》られました。", "医者《いしゃ》 に 「よく 休《やす》んで ください」 と 言《い》われました。", "Verbs ending in う make the passive with わ: 言《い》われる."],
      ["看護師《かんごし》 で 名前《なまえ》 を 呼《よ》ばれました。", "看護師《かんごし》 に 名前《なまえ》 を 呼《よ》ばれました。", "The doer in a passive sentence takes に, not で."]
    ],
    more: [
      ["入院《にゅういん》 の とき、 荷物《にもつ》 は 看護師《かんごし》 に 確認《かくにん》 されます。", "When you are admitted, your belongings are checked by a nurse."],
      ["血液検査《けつえきけんさ》 は 二階《にかい》 で 行《おこな》われます。", "Blood tests are done on the second floor."],
      ["子《こ》ども の ころ、 親《おや》 に よく 叱《しか》られました か。", "As a child, were you often scolded by your parents?"],
      ["この 歌《うた》 は 世界中《せかいじゅう》 で 歌《うた》われて います。", "This song is sung all over the world."],
      ["弟《おとうと》 は 公園《こうえん》 で 犬《いぬ》 に かまれました。", "My younger brother was bitten by a dog in the park."],
      ["会議《かいぎ》 は 来週《らいしゅう》 の 月曜日《げつようび》 に 開《ひら》かれます。", "The meeting will be held next Monday."]
    ],
    quiz: [
      ["What is the passive form of 待《ま》つ?", ["待《ま》たれる", "待《ま》てる", "待《ま》たせる"], 0, "Group 1 verbs take the あ-row plus れる: つ → たれる; 待《ま》てる is the potential."],
      ["What is the passive form of する?", ["させる", "できる", "される"], 2, "する becomes される in the passive; させる is the causative."],
      ["駅《えき》 で 外国人《がいこくじん》 に 道《みち》 を 聞《き》かれました means:", ["I asked a foreigner the way at the station.", "A foreigner asked me the way at the station.", "I could ask the way at the station."], 1, "聞《き》かれる is passive, and に marks the person who asked."],
      ["Fill the blank: 医者《いしゃ》 ＿ 「お酒《さけ》 を やめて ください」 と 言《い》われました。", ["に", "を", "で"], 0, "In the passive, に marks the person who did the action."],
      ["In この 部屋《へや》 で は 誰《だれ》 でも テレビ が 見《み》られます, 見《み》られます is:", ["passive", "potential", "causative"], 1, "Anyone being able to watch is the potential; る-verbs share one shape for passive and potential."],
      ["Which sentence names no doer?", ["母《はは》 に ほめられました。", "弟《おとうと》 は 犬《いぬ》 に かまれました。", "新《あたら》しい 薬《くすり》 が 使《つか》われて います。"], 2, "The last one has only the thing and a passive verb; the others name the doer with に."]
    ]
  },
  'passive-suffering': {
    mistakes: [
      ["兄《あに》 に 私《わたし》 の 日記《にっき》 が 読《よ》まれました。", "兄《あに》 に 日記《にっき》 を 読《よ》まれました。", "The affected person is the subject, so the belonging keeps を and needs no 私《わたし》 の."],
      ["夜中《よなか》 に 犬《いぬ》 に ほえて、 眠《ねむ》れません でした。", "夜中《よなか》 に 犬《いぬ》 に ほえられて、 眠《ねむ》れません でした。", "When に marks the one who caused the trouble, the verb must be passive: ほえられる."],
      ["だれ か に 見《み》られて います か。", "だれ か に 見《み》られて いる と 感《かん》じる こと は あります か。", "A bare question asks about a fact; asking about the feeling keeps it neutral."]
    ],
    more: [
      ["夫《おっと》 に 毎晩《まいばん》 遅《おそ》く 帰《かえ》られて、 不安《ふあん》 に なります。", "My husband comes home late every night, and it makes me anxious."],
      ["職場《しょくば》 で 同僚《どうりょう》 に 小《ちい》さな ミス を 笑《わら》われました。", "My colleagues laughed at a small mistake I made at work."],
      ["だれ か に 後《あと》 を つけられて いる と 感《かん》じる こと は あります か。", "Do you ever feel that someone is following you?"],
      ["レストラン で 隣《となり》 の 人《ひと》 に たばこ を 吸《す》われて、 困《こま》りました。", "The person next to me in the restaurant smoked, and it bothered me."],
      ["買《か》った ばかり の 傘《かさ》 を 盗《ぬす》まれました。", "I had the umbrella I had just bought stolen."],
      ["映画館《えいがかん》 で 前《まえ》 に 背《せ》 の 高《たか》い 人《ひと》 に 座《すわ》られて、 よく 見《み》えません でした。", "A tall person sat in front of me at the cinema, and I couldn't see well."]
    ],
    quiz: [
      ["What is the passive of 泣《な》く?", ["泣《な》かれる", "泣《な》ける", "泣《な》かせる"], 0, "Group 1: あ-row plus れる; 泣《な》ける is the potential and 泣《な》かせる the causative."],
      ["弟《おとうと》 に ケーキ を 食《た》べられました means:", ["I ate my brother's cake.", "My brother ate the cake, and I was annoyed.", "My brother was able to eat the cake."], 1, "The affected passive says the brother's action happened to the speaker and troubled them."],
      ["Fill the blank: 電車《でんしゃ》 の 中《なか》 で 赤《あか》ちゃん ＿ 泣《な》かれました。", ["が", "を", "に"], 2, "The one whose action caused the trouble is marked with に."],
      ["A patient says 近所《きんじょ》 の 人《ひと》 に 悪口《わるぐち》 を 言《い》われて いる 気《き》 が します. What is the patient reporting?", ["A feeling that the neighbours say bad things about them", "That they say bad things about the neighbours", "That the neighbours asked them to talk"], 0, "言《い》われて いる is passive, and 気《き》 が します means \"I have a feeling that\"."],
      ["Compared with 見《み》られて います, a patient who says 見《み》られて いる 気《き》 が します sounds:", ["more certain", "angrier", "less certain"], 2, "〜気《き》 が します softens the statement into a feeling."],
      ["What is the passive of 来《く》る?", ["来《き》られる", "来《こ》られる", "来《く》られる"], 1, "来《く》る is irregular: 来《こ》られる."]
    ]
  },
  'causative': {
    mistakes: [
      ["母《はは》 は 子《こ》ども を 野菜《やさい》 を 食《た》べさせました。", "母《はは》 は 子《こ》ども に 野菜《やさい》 を 食《た》べさせました。", "When the verb already has an object with を, the person takes に."],
      ["少《すこ》し 休《やす》まさせて ください。", "少《すこ》し 休《やす》ませて ください。", "Group 1 verbs take the あ-row plus せる; do not add an extra さ."],
      ["これ から 検査《けんさ》 に ついて 説明《せつめい》 して いただきます。", "これ から 検査《けんさ》 に ついて 説明《せつめい》 させて いただきます。", "〜して いただきます means someone else does it for you; to announce your own action, use 〜させて いただきます."]
    ],
    more: [
      ["よければ、 今日《きょう》 は ゆっくり お話《はなし》 を 聞《き》かせて ください。", "If you're happy to, please let me hear your story today, at your own pace."],
      ["検査《けんさ》 の 結果《けっか》 を 確認《かくにん》 させて いただけます か。", "Would you allow me to check your test results?"],
      ["患者《かんじゃ》さん を 長《なが》く 待《ま》たせない ように、 予約《よやく》 の 時間《じかん》 を 守《まも》って います。", "We keep to appointment times so that patients are not kept waiting long."],
      ["週末《しゅうまつ》 は 子《こ》ども を 公園《こうえん》 で 自由《じゆう》に 遊《あそ》ばせます。", "At weekends I let the children play freely in the park."],
      ["部長《ぶちょう》 は 新人《しんじん》 に 会議《かいぎ》 の 準備《じゅんび》 を させました。", "The manager had the new employee get the meeting ready."],
      ["彼《かれ》 は いつも 冗談《じょうだん》 で みんな を 笑《わら》わせます。", "He always makes everyone laugh with his jokes."]
    ],
    quiz: [
      ["What is the causative form of 書《か》く?", ["書《か》ける", "書《か》かれる", "書《か》かせる"], 2, "Group 1: あ-row plus せる; 書《か》ける is potential and 書《か》かれる is passive."],
      ["What is the causative form of する?", ["される", "させる", "できる"], 1, "する becomes させる; される is the passive."],
      ["Fill the blank: 雨《あめ》 が やんだ ので、 子《こ》ども ＿ 外《そと》 で 遊《あそ》ばせました。", ["で", "が", "を"], 2, "遊《あそ》ぶ has no object, so the person allowed to act usually takes を."],
      ["今日《きょう》 は 早《はや》く 帰《かえ》らせて ください means:", ["Please let me go home early today.", "Please go home early today.", "I was sent home early today."], 0, "〜させて ください asks to be allowed to do something yourself."],
      ["部長《ぶちょう》 は 新人《しんじん》 に 資料《しりょう》 を 作《つく》らせました. Who made the documents?", ["the manager", "the new employee", "the speaker"], 1, "The person marked with に is the one made to act."],
      ["Choose the polite way to ask \"May I take your blood pressure?\"", ["血圧《けつあつ》 を 測《はか》らせて いただけます か。", "血圧《けつあつ》 を 測《はか》って いただけます か。", "血圧《けつあつ》 を 測《はか》られます か。"], 0, "〜させて いただけます か asks permission for your own action; 測《はか》って いただけます か asks the patient to measure it."]
    ]
  },
  'causative-passive': {
    mistakes: [
      ["子《こ》ども の ころ、 毎日《まいにち》 漢字《かんじ》 を 書《か》かれました。", "子《こ》ども の ころ、 毎日《まいにち》 漢字《かんじ》 を 書《か》かされました。", "書《か》かれる is the plain passive; \"be made to write\" is 書《か》かされる."],
      ["先生《せんせい》 に みんな の 前《まえ》 で 話《はな》さされました。", "先生《せんせい》 に みんな の 前《まえ》 で 話《はな》させられました。", "Verbs ending in す have no short form: use 話《はな》させられる."],
      ["子《こ》ども の ころ、 魚《さかな》 を 食《た》べさされました。", "子《こ》ども の ころ、 魚《さかな》 を 食《た》べさせられました。", "Group 2 verbs have only the long form 〜させられる."]
    ],
    more: [
      ["仕事《しごと》 で 毎日《まいにち》 先輩《せんぱい》 に 夜《よる》 遅《おそ》く まで 残《のこ》らされて います。", "At work my senior makes me stay late every night."],
      ["子《こ》ども の ころ、 父《ちち》 に よく 謝《あやま》らされました。", "As a child, my father often made me apologise."],
      ["だれ か に 何《なに》 か を させられて いる と 感《かん》じる こと は あります か。", "Do you ever feel that someone is making you do things?"],
      ["昨日《きのう》 の 飲《の》み会《かい》 で 歌《うた》 を 歌《うた》わされました。", "At yesterday's drinking party I was made to sing."],
      ["小学生《しょうがくせい》 の とき、 毎朝《まいあさ》 教室《きょうしつ》 の 掃除《そうじ》 を させられました。", "In primary school I was made to clean the classroom every morning."],
      ["母《はは》 に 雨《あめ》 の 中《なか》 買《か》い物《もの》 に 行《い》かされました。", "My mother made me go shopping in the rain."]
    ],
    quiz: [
      ["What is the short causative-passive of 歌《うた》う?", ["歌《うた》われる", "歌《うた》わされる", "歌《うた》わせる"], 1, "Group 1 short form: あ-row plus される; う uses わ."],
      ["Which is the causative-passive of する?", ["させられる", "される", "させる"], 0, "させる (causative) made passive is させられる."],
      ["先輩《せんぱい》 に 重《おも》い 荷物《にもつ》 を 持《も》たされました means:", ["I made my senior carry heavy bags.", "My senior carried my heavy bags.", "My senior made me carry heavy bags."], 2, "持《も》たされる is the causative-passive of 持《も》つ, and に marks who made me."],
      ["Fill the blank: 子《こ》ども の ころ、 母《はは》 ＿ 毎日《まいにち》 勉強《べんきょう》 させられました。", ["を", "に", "で"], 1, "The person who makes you do it is marked with に."],
      ["Which form means \"be made to say\"?", ["言《い》われる", "言《い》わせる", "言《い》わされる"], 2, "言《い》われる is passive, 言《い》わせる causative, and 言《い》わされる causative-passive."],
      ["A patient says 先輩《せんぱい》 に 毎晩《まいばん》 お酒《さけ》 を 飲《の》まされて います. What does the patient report?", ["Their senior makes them drink every night.", "They make their senior drink every night.", "They are able to drink with their senior every night."], 0, "飲《の》まされる is \"be made to drink\", and に marks the senior who does it."]
    ]
  },
  'sonkeigo': {
    mistakes: [
      ["今日《きょう》 は どなた と 参《まい》りました か。", "今日《きょう》 は どなた と いらっしゃいました か。", "参《まい》る is humble and only for your own side; use いらっしゃる for the patient."],
      ["この 資料《しりょう》 は もう お見《み》 に なりました か。", "この 資料《しりょう》 は もう ご覧《らん》 に なりました か。", "お〜に なる does not work with a one-syllable stem such as 見《み》る; use ご覧《らん》 に なる."],
      ["こちら に ご住所《じゅうしょ》 と ご電話番号《でんわばんごう》 を お書《か》き ください。", "こちら に ご住所《じゅうしょ》 と お電話番号《でんわばんごう》 を お書《か》き ください。", "電話《でんわ》 is one of the on-yomi words that take お, not ご."]
    ],
    more: [
      ["最近《さいきん》、 お酒《さけ》 は どの くらい 召《め》し上《あ》がります か。", "How much do you drink these days?"],
      ["お薬《くすり》 の 説明書《せつめいしょ》 は もう お読《よ》み に なりました か。", "Have you read the information leaflet for your medicine yet?"],
      ["お帰《かえ》り の 前《まえ》 に、 受付《うけつけ》 に お寄《よ》り ください。", "Before you leave, please stop by reception."],
      ["社長《しゃちょう》 は もう お帰《かえ》り に なりました。", "The company president has already gone home."],
      ["この 映画《えいが》 を ご覧《らん》 に なった こと が あります か。", "Have you ever seen this film?"],
      ["部長《ぶちょう》 は 明日《あした》 大阪《おおさか》 に 行《い》かれます。", "The department manager is going to Osaka tomorrow."]
    ],
    quiz: [
      ["What is the honorific of 見《み》る?", ["お見《み》 に なる", "ご覧《らん》 に なる", "見《み》させる"], 1, "見《み》る has its own honorific, ご覧《らん》 に なる; 見《み》させる is causative."],
      ["Make 待《ま》つ honorific with お〜に なる.", ["お待《ま》ち に なる", "お待《ま》ち する", "お待《ま》ち に する"], 0, "お + stem + に なる is honorific; お待《ま》ち する is humble."],
      ["Fill the blank for \"How did you come today?\": 今日《きょう》 は どう やって ＿ か。", ["召《め》し上《あ》がりました", "なさいました", "いらっしゃいました"], 2, "いらっしゃる is the honorific of 来《く》る; 召《め》し上《あ》がる means eat and なさる means do."],
      ["何《なに》 か スポーツ を なさって います か means:", ["Shall we play a sport together?", "Do you play any sports?", "I play a sport."], 1, "なさる is the honorific of する, used for the listener's action."],
      ["How do you refer to the patient's address politely?", ["お住所《じゅうしょ》", "住所《じゅうしょ》さん", "ご住所《じゅうしょ》"], 2, "住所《じゅうしょ》 is read in on-yomi and takes ご."],
      ["In 社長《しゃちょう》 は 毎朝《まいあさ》 新聞《しんぶん》 を 読《よ》まれます, 読《よ》まれます is:", ["honorific", "potential", "causative"], 0, "The passive shape used for a respected person's action is a light honorific; the potential would be 読《よ》めます."]
    ]
  },
  'kenjougo': {
    mistakes: [
      ["はじめまして。 担当《たんとう》 の ナバロ と おっしゃいます。", "はじめまして。 担当《たんとう》 の ナバロ と 申《もう》します。", "おっしゃる is honorific; for your own name use the humble 申《もう》します."],
      ["お父《とう》さん は 何《なん》 と 申《もう》しました か。", "お父《とう》さん は 何《なん》 と おっしゃいました か。", "申《もう》す is humble; the patient's family member takes the honorific おっしゃる."],
      ["院長《いんちょう》 は 今日《きょう》 会議《かいぎ》 に 出《で》て いらっしゃいます。", "院長《いんちょう》 は 今日《きょう》 会議《かいぎ》 に 出《で》て おります。", "When you speak to a patient about your own hospital's staff, use the humble おります."]
    ],
    more: [
      ["次回《じかい》 の 予約《よやく》 に ついて、 後《あと》 で お電話《でんわ》 いたします。", "I'll call you later about your next appointment."],
      ["検査《けんさ》 の 前《まえ》 に、 いくつか 伺《うかが》って も よろしい です か。", "Before the test, may I ask you a few questions?"],
      ["重《おも》い ので、 お荷物《にもつ》 を お持《も》ち します。", "It's heavy, so let me carry your bag for you."],
      ["はじめまして。 山田《やまだ》 と 申《もう》します。 よろしく お願《ねが》い いたします。", "How do you do. My name is Yamada. I look forward to working with you."],
      ["明日《あした》 の 午後《ごご》、 そちら に 伺《うかが》います。", "I'll come to your place tomorrow afternoon."],
      ["父《ちち》 は 今《いま》 出《で》かけて おります。", "My father is out at the moment. (on the phone)"]
    ],
    quiz: [
      ["What is the humble verb for 見《み》る?", ["ご覧《らん》 に なる", "拝見《はいけん》 する", "見《み》られる"], 1, "拝見《はいけん》 する is humble; ご覧《らん》 に なる is honorific."],
      ["What is the humble verb for いる?", ["なさる", "いらっしゃる", "おる"], 2, "おる is humble; いらっしゃる is honorific and なさる is the honorific of する."],
      ["Fill the blank for \"I'll call you later\": 後《あと》 で お電話《でんわ》 ＿。", ["いたします", "なさいます", "ください"], 0, "お / ご + noun + いたします is humble; お電話《でんわ》 ください would ask the patient to call."],
      ["お話《はなし》 を 伺《うかが》います means:", ["Please tell me your story.", "I'll listen to what you have to say.", "You will hear the story."], 1, "伺《うかが》う is the humble verb for 聞《き》く, used for your own action."],
      ["Which is the humble form of 案内《あんない》 する?", ["案内《あんない》 される", "ご案内《あんない》 に なる", "ご案内《あんない》 します"], 2, "ご + する-noun + します is humble; ご〜に なる is honorific."],
      ["Which sentence misuses a humble verb?", ["どうぞ、 資料《しりょう》 を 拝見《はいけん》 して ください。", "明日《あした》 また 参《まい》ります。", "お荷物《にもつ》 を お持《も》ち します。"], 0, "拝見《はいけん》 する is humble and cannot describe the patient's looking; say ご覧《らん》 ください."]
    ]
  }
});
