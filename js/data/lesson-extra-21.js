/* Lesson extras part 21 (1.0.0): common mistakes, more examples and a "More practice" quiz for existing N1 lessons
   (n1-ga-hayai-ka, n1-te-kara-to-iu-mono, n1-katawara, n1-ni-itaru, n1-kiwamarinai, n1-sura).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n1-ga-hayai-ka': {
    mistakes: [
      ["兄《あに》 は 帰宅《きたく》 なり、 自分《じぶん》 の 部屋《へや》 に こもった。", "兄《あに》 は 帰宅《きたく》 する なり、 自分《じぶん》 の 部屋《へや》 に こもった。", "なり follows a verb in the dictionary form, so a する-noun needs する before it."],
      ["幕《まく》 が 上《あ》がった や 否《いな》や、 客席《きゃくせき》 から 拍手《はくしゅ》 が 起《お》こった。", "幕《まく》 が 上《あ》がる や 否《いな》や、 客席《きゃくせき》 から 拍手《はくしゅ》 が 起《お》こった。", "や 否《いな》や follows the dictionary form; the past tense goes only on the main verb."],
      ["バス を 降《お》りる そば から、 雨《あめ》 が 降《ふ》り出《だ》した。", "バス を 降《お》りた とたん、 雨《あめ》 が 降《ふ》り出《だ》した。", "そば から is for something undone again and again; one sudden event takes 〜た とたん."]
    ],
    more: [
      ["入院《にゅういん》 当日《とうじつ》、 患者《かんじゃ》 は 病棟《びょうとう》 に 着《つ》く や 否《いな》や、 「家《いえ》 に 帰《かえ》りたい」 と 訴《うった》えた。", "On the day of admission, the patient asked to go home the instant she reached the ward. (chart)"],
      ["祖母《そぼ》 は 目《め》 を 覚《さ》ます なり、 「早《はや》く 帰《かえ》りなさい」 と 言《い》いました。", "(Family) The moment she woke up, my grandmother told us to go home."],
      ["カルテ を 書《か》き終《お》える そば から、 次《つぎ》 の 入院《にゅういん》 の 連絡《れんらく》 が 入《はい》る。", "As fast as I finish one set of notes, a call comes in about the next admission."],
      ["ベル が 鳴《な》る が 早《はや》いか、 生徒《せいと》たち は 教室《きょうしつ》 を 飛《と》び出《だ》した。", "The bell had barely rung when the pupils rushed out of the classroom."],
      ["弟《おとうと》 は 家《いえ》 を 出《で》た なり、 一度《いちど》 も 連絡《れんらく》 を よこさない。", "My brother left home and has not been in touch once since. (written or storytelling; in speech: 出《で》た きり)"],
      ["彼《かれ》 は 手紙《てがみ》 を 読《よ》む や、 顔色《かおいろ》 を 変《か》えた。", "The instant he read the letter, his face changed colour. (novel)"]
    ],
    quiz: [
      ["姉《あね》 は 私《わたし》 の 話《はなし》 を 聞《き》く ＿、 「それ は おかしい」 と 怒《おこ》り出《だ》した。", ["が 早《はや》くて", "なり", "た なり"], 1, "Dictionary form + なり: the same person at once does something sudden. が 早《はや》くて is not a pattern, and た なり needs a た-form."],
      ["洗濯物《せんたくもの》 を 畳《たた》む そば から、 猫《ねこ》 が その 上《うえ》 で 寝転《ねころ》がる means:", ["As soon as I finish folding the laundry, the cat goes to sleep somewhere else.", "Every time I fold the laundry, the cat rolls about on it straight away.", "The cat sleeps beside me while I fold the laundry."], 1, "〜そば から: each time A is done, B undoes it at once, again and again."],
      ["Which sentence is correctly formed?", ["犬《いぬ》 は ドア が 開《あ》いて が 早《はや》いか、 外《そと》 へ 飛《と》び出《だ》した。", "犬《いぬ》 は ドア が 開《あ》きます が 早《はや》いか、 外《そと》 へ 飛《と》び出《だ》した。", "犬《いぬ》 は ドア が 開《あ》く が 早《はや》いか、 外《そと》 へ 飛《と》び出《だ》した。"], 2, "が 早《はや》いか follows the plain dictionary form, never the て-form or the ます-form."],
      ["A news report: 開店《かいてん》 ＿、 客《きゃく》 が 店内《てんない》 に 押《お》し寄《よ》せた。", ["した なり", "する そば から", "する や 否《いな》や"], 2, "や 否《いな》や is the news word for an immediate reaction. た なり means \"and nothing since\", and そば から needs repetition."],
      ["Which is the plain spoken way to tell a colleague \"the moment he saw me, he ran off\"?", ["彼《かれ》 は 私《わたし》 を 見《み》た とたん、 走《はし》って 行《い》っちゃった。", "彼《かれ》 は 私《わたし》 を 見《み》る そば から、 走《はし》って 行《い》っちゃった。", "彼《かれ》 は 私《わたし》 を 見《み》た なり、 走《はし》って 行《い》っちゃった。"], 0, "〜た とたん is the everyday \"the moment\"; そば から needs repetition, and た なり means \"and nothing since\"."],
      ["彼《かれ》 は 席《せき》 に 着《つ》く が 早《はや》いか、 弁当《べんとう》 を 広《ひろ》げた means:", ["He had barely sat down when he opened his lunch box.", "He opened his lunch box before he could sit down.", "He sat down faster than anyone and opened his lunch box."], 0, "が 早《はや》いか means \"no sooner had A happened than B\"; it does not compare speed."]
    ]
  },
  'n1-te-kara-to-iu-mono': {
    mistakes: [
      ["仕事《しごと》 を 辞《や》めた から と いう もの、 昼夜《ちゅうや》 が 逆転《ぎゃくてん》 して しまった。", "仕事《しごと》 を 辞《や》めて から と いう もの、 昼夜《ちゅうや》 が 逆転《ぎゃくてん》 して しまった。", "The pattern is built on the て-form: 〜て から と いう もの."],
      ["失職《しっしょく》 を 皮切《かわき》り に、 抑《よく》うつ 気分《きぶん》 が 出現《しゅつげん》 した。", "失職《しっしょく》 を 契機《けいき》 に、 抑《よく》うつ 気分《きぶん》 が 出現《しゅつげん》 した。", "を 皮切《かわき》り に starts a series of similar events; the trigger of a symptom in a case report is を 契機《けいき》 に."],
      ["来月《らいげつ》 を 限《かぎ》り に、 新《あたら》しい 外来《がいらい》 が 始《はじ》まります。", "来月《らいげつ》 から、 新《あたら》しい 外来《がいらい》 が 始《はじ》まります。", "を 限《かぎ》り に marks a last time after which something stops, never a start."]
    ],
    more: [
      ["転《ころ》んで 骨折《こっせつ》 して から と いう もの、 外《そと》 に 出《で》る の が 怖《こわ》く なりました。", "(Older patient) Ever since I fell and broke a bone, I've been afraid to go out."],
      ["面会《めんかい》 の 受付《うけつけ》 は 午後《ごご》 七時《しちじ》 を もって 終了《しゅうりょう》 いたします。", "Visitor registration closes at seven in the evening. (ward notice)"],
      ["この 病棟《びょうとう》 で の 取《と》り組《く》み を 皮切《かわき》り に、 院内《いんない》 の すべて の 病棟《びょうとう》 で 禁煙《きんえん》 指導《しどう》 が 始《はじ》まった。", "Starting with this ward's project, stop-smoking support began on every ward in the hospital. (hospital newsletter)"],
      ["この 番組《ばんぐみ》 は 今回《こんかい》 の 放送《ほうそう》 を 限《かぎ》り に 終了《しゅうりょう》 します。", "This programme ends with this broadcast. (announcement)"],
      ["犬《いぬ》 を 飼《か》い始《はじ》めて から と いう もの、 毎朝《まいあさ》 早起《はやお》き する よう に なった。", "Ever since we got a dog, I've been getting up early every morning."],
      ["駅前《えきまえ》 の 一号店《いちごうてん》 を 皮切《かわき》り に、 その チェーン は 市内《しない》 に 次々《つぎつぎ》 と 店《みせ》 を 出《だ》した。", "Starting with its first shop by the station, the chain opened one shop after another across the city."]
    ],
    quiz: [
      ["娘《むすめ》 が 生《う》まれて ＿、 夫《おっと》 は 早《はや》く 帰宅《きたく》 する よう に なった。", ["を 限《かぎ》り に", "から と いう もの", "を 皮切《かわき》り に"], 1, "After a て-form only から と いう もの fits; the other two follow a noun."],
      ["本日《ほんじつ》 の 診察《しんさつ》 を もちまして、 吉田《よしだ》先生《せんせい》 の 外来《がいらい》 は 終了《しゅうりょう》 と なります means:", ["Dr Yoshida's clinic ends with today's appointments.", "Dr Yoshida's clinic starts with today's appointments.", "Dr Yoshida will hold an extra clinic after today's appointments."], 0, "を もちまして is the polite notice word for \"as of\", here marking an end."],
      ["Hospital newsletter: 外来《がいらい》 ＿、 新《あたら》しい システム が 各《かく》 病棟《びょうとう》 に 広《ひろ》がった。", ["を もって", "を 限《かぎ》り に", "を 皮切《かわき》り に"], 2, "を 皮切《かわき》り に marks the first of a series that spreads; を 限《かぎ》り に would mean the outpatient department was the last."],
      ["Which sentence uses its time pattern correctly?", ["結婚《けっこん》 して から と いう もの、 一度《いちど》 妻《つま》 と 旅行《りょこう》 に 行《い》った。", "今年《ことし》 を 限《かぎ》り に、 年賀状《ねんがじょう》 を やめる こと に した。", "明日《あした》 を 皮切《かわき》り に、 毎朝《まいあさ》 ジョギング を します。"], 1, "を 限《かぎ》り に marks a last time. から と いう もの needs a lasting state, not one trip, and 皮切《かわき》り is not for a personal \"from now on\"."],
      ["自分《じぶん》 が 患者《かんじゃ》 に なって、 待《ま》ち時間《じかん》 の 長《なが》さ を 身《み》 を もって 知《し》った means:", ["Being a patient, I learned firsthand how long the waits are.", "Being a patient, I heard from others how long the waits are.", "Being a patient, I read on a poster how long the waits are."], 0, "身《み》 を もって means \"in one's own person, firsthand\"."],
      ["A notice says 当館《とうかん》 は 三月末《さんがつまつ》 を もって 閉館《へいかん》 いたします. What do you tell a friend?", ["あの 図書館《としょかん》、 三月《さんがつ》 から 開《あ》く ん だって。", "あの 図書館《としょかん》、 三月《さんがつ》 まで 休《やす》む ん だって。", "あの 図書館《としょかん》、 三月《さんがつ》 で 閉《し》まる ん だって。"], 2, "In plain speech the notice word を もって becomes で: 三月《さんがつ》 で 閉《し》まる."]
    ]
  },
  'n1-katawara': {
    mistakes: [
      ["電車《でんしゃ》 を 待《ま》つ かたわら、 メール を 読《よ》んだ。", "電車《でんしゃ》 を 待《ま》ちながら、 メール を 読《よ》んだ。", "かたわら is a second activity kept up over time beside one's main work, not two actions at one moment; use 〜ながら."],
      ["散歩《さんぽ》 する がてら、 郵便局《ゆうびんきょく》 に 寄《よ》って きます。", "散歩《さんぽ》 がてら、 郵便局《ゆうびんきょく》 に 寄《よ》って きます。", "がてら joins directly to a する-noun or a ます-stem, never to the dictionary form."],
      ["母《はは》 は 家事《かじ》 かたわら、 翻訳《ほんやく》 の 仕事《しごと》 を して いる。", "母《はは》 は 家事《かじ》 の かたわら、 翻訳《ほんやく》 の 仕事《しごと》 を して いる。", "After a noun, かたわら needs の."]
    ],
    more: [
      ["祖母《そぼ》 は 長年《ながねん》、 店《みせ》 を 営《いとな》む かたわら、 近所《きんじょ》 の 子《こ》どもたち に 書道《しょどう》 を 教《おし》えて いた そう です。", "(Family) For many years, alongside running her shop, my grandmother apparently taught calligraphy to the local children."],
      ["飲《の》み物《もの》 を 買《か》いがてら、 売店《ばいてん》 まで 一緒《いっしょ》 に 歩《ある》いて みましょう か。", "Shall we walk to the hospital shop together, and get a drink while we're at it?"],
      ["退院《たいいん》 の お祝《いわ》い かたがた、 母《はは》 と 一緒《いっしょ》 に ご挨拶《あいさつ》 に 伺《うかが》いました。", "(Visitor) My mother and I have come to say hello, and also to congratulate you on leaving hospital."],
      ["この 店《みせ》 で は、 昔《むかし》ながら の 製法《せいほう》 で 味噌《みそ》 を 作《つく》って いる。", "This shop makes miso the traditional way."],
      ["彼《かれ》 は 大学《だいがく》 で 教《おし》える かたわら、 絵本《えほん》 を 書《か》いて いる。", "Alongside teaching at a university, he writes picture books."],
      ["友達《ともだち》 に 借《か》りた 傘《かさ》 を 返《かえ》しがてら、 久《ひさ》しぶり に 友達《ともだち》 の 家《いえ》 に 遊《あそ》び に 行《い》った。", "I went round to my friend's house for the first time in ages, partly to return the umbrella I'd borrowed."]
    ],
    quiz: [
      ["祖父《そふ》 は 教師《きょうし》 を 務《つと》める ＿、 郷土史《きょうどし》 の 研究《けんきゅう》 を 続《つづ》けた。", ["がてら", "かたわら", "かたがた"], 1, "A second activity beside one's main job is かたわら; がてら and かたがた do not follow a dictionary form."],
      ["犬《いぬ》 の 散歩《さんぽ》 がてら、 コンビニ で 牛乳《ぎゅうにゅう》 を 買《か》って きた means:", ["I took the dog for a walk and bought milk at the convenience store while I was out.", "I bought milk instead of taking the dog for a walk.", "I bought milk so that I could take the dog for a walk later."], 0, "〜がてら: one outing serves a second aim as well."],
      ["Which sentence uses かたがた naturally?", ["テレビ を 見《み》 かたがた、 夕飯《ゆうはん》 を 食《た》べた。", "お礼《れい》 かたがた、 近《ちか》い うち に お宅《たく》 へ 伺《うかが》います。", "毎朝《まいあさ》 走《はし》る かたがた、 体重《たいじゅう》 が 減《へ》った。"], 1, "かたがた follows nouns such as お礼《れい》 or ご挨拶《あいさつ》, and the main action is usually a visit."],
      ["You suggest that a patient get some sun on a walk. Which do you say?", ["散歩《さんぽ》 の かたわら、 日《ひ》 に 当《あ》たって ください。", "散歩《さんぽ》 ながら に、 日《ひ》 に 当《あ》たって ください。", "散歩《さんぽ》 がてら、 少《すこ》し 日《ひ》 に 当《あ》たって みて ください。"], 2, "がてら is the spoken pattern for one outing with two aims; かたわら is for a way of life, and ながら に lives only in set phrases."],
      ["インターネット の おかげ で、 家《いえ》 に いながら に して 買《か》い物《もの》 が できる means:", ["Thanks to the internet, I can shop while I wait for a delivery at home.", "Thanks to the internet, I can shop only after I get home.", "Thanks to the internet, I can shop without leaving home."], 2, "いながら に して is a set phrase with ながら に: \"just as one is, without going anywhere\"."],
      ["出張《しゅっちょう》 ＿、 学生《がくせい》 時代《じだい》 の 友人《ゆうじん》 を 訪《たず》ねた。", ["がてら", "の かたわら", "ながら に"], 0, "A trip that also serves to visit a friend is がてら; の かたわら needs a long-term main activity."]
    ]
  },
  'n1-ni-itaru': {
    mistakes: [
      ["長《なが》い 話《はな》し合《あ》い の 末《すえ》、 和解《わかい》 が 至《いた》った。", "長《なが》い 話《はな》し合《あ》い の 末《すえ》、 和解《わかい》 に 至《いた》った。", "The point reached is marked with に: 〜に 至《いた》る."],
      ["症状《しょうじょう》 が 悪化《あっか》 し、 休職《きゅうしょく》 した に 至《いた》った。", "症状《しょうじょう》 が 悪化《あっか》 し、 休職《きゅうしょく》 する に 至《いた》った。", "A verb before に 至《いた》る is in the dictionary form; the past goes on 至《いた》った."],
      ["お母様《かあさま》 が 入院《にゅういん》 に 至《いた》った 経緯《けいい》 を 教《おし》えて ください。", "お母様《かあさま》 が 入院《にゅういん》 する こと に なった 経緯《けいい》 を 教《おし》えて ください。", "Grammatical but case-report language; to a family say 〜する こと に なった."]
    ],
    more: [
      ["入浴《にゅうよく》 から 着替《きが》え に 至《いた》る まで、 日常《にちじょう》 生活《せいかつ》 の ほぼ すべて に 介助《かいじょ》 を 要《よう》した。", "She needed help with almost every part of daily life, from bathing right down to dressing. (discharge summary)"],
      ["退院《たいいん》 直前《ちょくぜん》 に 至《いた》って も、 本人《ほんにん》 は 自宅《じたく》 へ 戻《もど》る こと に 強《つよ》い 不安《ふあん》 を 訴《うった》えて いた。", "Even just before discharge, he still spoke of strong worry about going home. (chart)"],
      ["本人《ほんにん》 が 出勤《しゅっきん》 できなく なる に 至《いた》って、 家族《かぞく》 は はじめて 異変《いへん》 に 気《き》づいた。", "Only when he became unable to go to work did the family first notice that something was wrong. (case report)"],
      ["最近《さいきん》 は 物価《ぶっか》 が 上《あ》がって いる。 野菜《やさい》 に 至《いた》って は、 買《か》う の を ためらう ほど の 値段《ねだん》 だ。", "Prices have been rising lately. As for vegetables, they cost so much I hesitate to buy them."],
      ["たばこ の 火《ひ》 の 不始末《ふしまつ》 が 原因《げんいん》 で、 大《おお》きな 火災《かさい》 に 至《いた》った と みられる。", "A carelessly handled cigarette is thought to have led to the major fire. (news)"],
      ["この 町《まち》 は 至《いた》って 静《しず》か で、 夜《よる》 は 車《くるま》 も ほとんど 通《とお》らない。", "This town is very quiet; at night hardly any cars go by."]
    ],
    quiz: [
      ["会議《かいぎ》 は 長時間《ちょうじかん》 に 及《およ》んだ が、 結論《けつろん》 ＿。", ["を 至《いた》らなかった", "に は 至《いた》らなかった", "に 至《いた》る まで だった"], 1, "に は 至《いた》らない means \"did not get as far as\"; 至《いた》る never takes を."],
      ["店内《てんない》 は 床《ゆか》 から 天井《てんじょう》 に 至《いた》る まで、 本《ほん》 で 埋《う》め尽《つ》くされて いた means:", ["The shop was filled with books from the floor right up to the ceiling.", "Books reached the ceiling in only one corner of the shop.", "The books were moved from the floor up to the ceiling."], 0, "〜から 〜に 至《いた》る まで stresses that a range reaches even its far end."],
      ["Chart: 退院《たいいん》 ＿、 治療《ちりょう》 の 必要性《ひつようせい》 を 理解《りかい》 して いなかった。 (\"even at that point\")", ["に 至《いた》った ため", "を 至《いた》って も", "に 至《いた》って も"], 2, "に 至《いた》って も means \"even when it had come to A\"; に 至《いた》った ため gives a reason that makes no sense here, and 至《いた》る never takes を."],
      ["Which use of に 至《いた》る is natural?", ["毎朝《まいあさ》 歯《は》 を 磨《みが》く に 至《いた》って います。", "度重《たびかさ》なる 遅刻《ちこく》 が 原因《げんいん》 で、 彼《かれ》 は 解雇《かいこ》 される に 至《いた》った。", "明日《あした》 に 至《いた》る まで に 書類《しょるい》 を 出《だ》して ください。"], 1, "に 至《いた》る presents a serious result at the end of a process, not a daily habit or a deadline."],
      ["Speaking with a patient, how do you ask what led to her taking leave from university?", ["大学《だいがく》 を 休学《きゅうがく》 する に 至《いた》って は、 どう でした か。", "休学《きゅうがく》 を 至《いた》った 理由《りゆう》 を 言《い》いなさい。", "大学《だいがく》 を 休学《きゅうがく》 する こと に なった いきさつ を、 教《おし》えて いただけます か。"], 2, "To a patient use the plain 〜こと に なった and a gentle request; に 至《いた》って は singles out the worst case, and the second option is blunt and has the wrong particle."],
      ["どの 科目《かもく》 も 成績《せいせき》 が 下《さ》がった。 数学《すうがく》 に 至《いた》って は、 半分《はんぶん》 も 解《と》けなかった means:", ["Maths was the worst: I couldn't solve even half.", "Maths was the only subject I did well in.", "By the time I reached maths, I had solved half."], 0, "〜に 至《いた》って は picks out the most extreme member of the group, in the same bad direction."]
    ]
  },
  'n1-kiwamarinai': {
    mistakes: [
      ["凍《こお》った 道《みち》 を 急《いそ》いで 走《はし》る の は、 危険《きけん》 な 極《きわ》まりない。", "凍《こお》った 道《みち》 を 急《いそ》いで 走《はし》る の は、 危険《きけん》極《きわ》まりない。", "極《きわ》まりない joins directly to the な-adjective stem, with no な."],
      ["皆様《みなさま》 に お会《あ》い できて、 うれしい の 至《いた》り です。", "皆様《みなさま》 に お会《あ》い できて、 光栄《こうえい》 の 至《いた》り です。", "の 至《いた》り follows only a few fixed nouns such as 光栄《こうえい》 and 恐縮《きょうしゅく》, never an adjective."],
      ["多大《ただい》 な ご支援《しえん》 を 賜《たまわ》り、 感謝《かんしゃ》 に 堪《た》えます。", "多大《ただい》 な ご支援《しえん》 を 賜《たまわ》り、 感謝《かんしゃ》 に 堪《た》えません。", "\"Deeply grateful\" is the negative 感謝《かんしゃ》 に 堪《た》えない; 堪《た》える means \"worth, fit for\"."]
    ],
    more: [
      ["入院中《にゅういんちゅう》 は スタッフ の 皆様《みなさま》 に 温《あたた》かく 支《ささ》えて いただき、 感謝《かんしゃ》 の 念《ねん》 に 堪《た》えません。", "We are more grateful than we can say for the warm support of all the staff during the admission. (family's letter)"],
      ["私《わたし》 の 拙《つたな》い 発表《はっぴょう》 に 貴重《きちょう》 な ご助言《じょげん》 を 数多《かずおお》く いただき、 恐縮《きょうしゅく》 の 至《いた》り です。", "I am most grateful for so much valuable advice on my modest presentation. (to senior doctors)"],
      ["この 記録《きろく》 様式《ようしき》 は、 忙《いそが》しい 病棟《びょうとう》 で も 実用《じつよう》 に 堪《た》える と 評価《ひょうか》 された。", "This record format was judged fit for practical use even on a busy ward. (report)"],
      ["この 交差点《こうさてん》 は 見通《みとお》し が 悪《わる》く、 危険《きけん》極《きわ》まりない。", "Visibility at this crossing is poor; it is extremely dangerous."],
      ["その 映画《えいが》 は 退屈《たいくつ》極《きわ》まる 内容《ないよう》 で、 途中《とちゅう》 で 眠《ねむ》って しまった。", "The film was utterly boring, and I fell asleep halfway through."],
      ["その 番組《ばんぐみ》 は 下品《げひん》 な 冗談《じょうだん》 ばかり で、 聞《き》く に 堪《た》えなかった。", "The programme was nothing but vulgar jokes; it was too awful to listen to."]
    ],
    quiz: [
      ["長年《ながねん》 の 夢《ゆめ》 が かない、 まさに 感激《かんげき》 ＿ です。 (speech)", ["に 堪《た》える", "を 限《かぎ》り に", "の 極《きわ》み"], 2, "感激《かんげき》 の 極《きわ》み is the set phrase for \"deeply moved\"."],
      ["この 古《ふる》い 机《つくえ》 は、 まだ 十分《じゅうぶん》 使用《しよう》 に 堪《た》える means:", ["This old desk is still perfectly fit to use.", "This old desk can no longer be used.", "This old desk is too precious to use."], 0, "The positive 〜に 堪《た》える means \"good enough for, fit for\"."],
      ["At your farewell party, which sentence fits a formal speech?", ["皆様《みなさま》 に 送《おく》って いただき、 うれしい の 極《きわ》まり です。", "皆様《みなさま》 に この よう な 会《かい》 を 開《ひら》いて いただき、 感謝《かんしゃ》 に 堪《た》えません。", "皆様《みなさま》 の お言葉《ことば》 は、 聞《き》く に 堪《た》えません。"], 1, "感謝《かんしゃ》 に 堪《た》えません is the formal thanks; 聞《き》く に 堪《た》えない means \"too awful to hear\", and the first is not a real phrase."],
      ["初歩的《しょほてき》 な 間違《まちが》い を 指摘《してき》 され、 赤面《せきめん》 の 至《いた》り です means:", ["I am angry at being corrected over such a basic point.", "I am deeply embarrassed to have had such a basic mistake pointed out.", "My face is red from a fever, so I made a basic mistake."], 1, "赤面《せきめん》 の 至《いた》り is a set phrase: \"deeply embarrassed\"."],
      ["Which sentence uses its strong word correctly?", ["この 手続《てつづ》き は 書類《しょるい》 が 多《おお》く、 煩雑《はんざつ》極《きわ》まりない。", "この 料理《りょうり》 は おいしい 極《きわ》まりない。", "彼《かれ》 の 親切《しんせつ》 は、 見《み》る に 堪《た》えない。"], 0, "極《きわ》まりない follows a な-adjective stem, usually a negative one; 見《み》る に 堪《た》えない is for something awful."],
      ["卒業式《そつぎょうしき》 で 母《はは》 は 感《かん》極《きわ》まって 泣《な》き出《だ》した means:", ["My mother cried because she felt extremely unwell.", "My mother stopped crying at the end of the ceremony.", "My mother was overcome with emotion and began to cry."], 2, "感《かん》極《きわ》まる is a set phrase: \"to be overcome with emotion\"."]
    ]
  },
  'n1-sura': {
    mistakes: [
      ["お金《かね》 すら あれば、 旅行《りょこう》 に 行《い》ける のに。", "お金《かね》 さえ あれば、 旅行《りょこう》 に 行《い》ける のに。", "The \"if only\" pattern is さえ 〜ば; すら is not used in it."],
      ["五分《ごふん》 たり とも 遅《おく》れて は いけない。", "一分《いっぷん》 たり とも 遅《おく》れて は いけない。", "たり とも works only with 一《いち》 + a counter: \"not even one\"."],
      ["ひらがな は おろか、 漢字《かんじ》 も 読《よ》めない。", "漢字《かんじ》 は おろか、 ひらがな も 読《よ》めない。", "In A は おろか B も, A is the harder thing and B the basic one."]
    ],
    more: [
      ["最近《さいきん》 は 集中《しゅうちゅう》 できず、 新聞《しんぶん》 の 見出《みだ》し すら 頭《あたま》 に 入《はい》りません。", "(Patient) Lately I can't concentrate; even newspaper headlines won't go in."],
      ["父《ちち》 は 趣味《しゅみ》 の 釣《つ》り は おろか、 好《す》き な 野球《やきゅう》 中継《ちゅうけい》 も 見《み》なく なりました。", "(Family) My father has stopped even watching the baseball he loves on TV, let alone going fishing."],
      ["経験《けいけん》 の 長《なが》い 看護師《かんごし》 で すら、 この 変化《へんか》 に は 気《き》づきにくい。", "Even very experienced nurses find this change hard to notice. (written)"],
      ["山《やま》 で 道《みち》 に 迷《まよ》った 時《とき》 の 話《はなし》 は、 聞《き》く だに 恐《おそ》ろしい。", "The story of the time they got lost in the mountains is frightening even to hear."],
      ["この 試験《しけん》 で は、 一問《いちもん》 たり とも 落《お》とせない。", "In this exam I can't afford to miss a single question."],
      ["忙《いそが》しくて、 昼《ひる》 ご飯《はん》 を 食《た》べる 時間《じかん》 すら ない。", "I'm so busy I don't even have time to eat lunch."]
    ],
    quiz: [
      ["寒《さむ》さ の あまり、 指《ゆび》 一本《いっぽん》 ＿ 動《うご》かせなかった。", ["は おろか", "すら", "に 至《いた》って"], 1, "すら marks the most basic case, \"not even\"; は おろか needs a second item after it."],
      ["彼女《かのじょ》 は 礼《れい》 は おろか、 挨拶《あいさつ》 すら しなかった means:", ["She didn't even say hello, let alone thank me.", "She said hello but didn't thank me.", "She thanked me but didn't say hello."], 0, "In A は おろか B すら, not even the basic B happened, so A did not happen either."],
      ["一瞬《いっしゅん》 ＿ 気《き》 を 抜《ぬ》く こと は できない。", ["は おろか", "に 至《いた》って", "たり とも"], 2, "一《いち》 + counter + たり とも + negative: \"not for a single moment\"."],
      ["Which use of だに is natural?", ["微動《びどう》 だに しない で、 こっち に 来《き》て。", "衛兵《えいへい》 は 雨《あめ》 の 中《なか》、 微動《びどう》 だに せず 立《た》ち続《つづ》けて いた。", "彼《かれ》 は 毎日《まいにち》 想像《そうぞう》 だに します。"], 1, "だに lives in set phrases with a negative, describing a fact; it is not used in requests or with a positive verb."],
      ["Which is the everyday spoken way to say 一日《いちにち》 たり とも 休《やす》まなかった?", ["一日《いちにち》 も 休《やす》まなかった", "一日《いちにち》 だけ 休《やす》まなかった", "一日《いちにち》 おき に 休《やす》んだ"], 0, "In speech, たり とも becomes も: 一日《いちにち》 も 〜ない."],
      ["地元《じもと》 の 人《ひと》 ＿ 知《し》らない 小《ちい》さな 店《みせ》 だ。", ["たり とも", "は おろか", "で すら"], 2, "After a person as subject, で すら means \"even\"; たり とも needs 一《いち》 + counter, and は おろか needs a second item."]
    ]
  }
});
