/* Lesson extras part 9 (0.26.0): common mistakes, more examples and a "More practice" quiz for existing N3 lessons
   (aida-uchi, tabi-toori-tsuide, irai-totan-shidai, dake-shika-sae, hodo-kurai, compound-verbs).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'aida-uchi': {
    mistakes: [
      ["入院《にゅういん》 して いる 間《あいだ》 に、 ずっと 不安《ふあん》 でした。", "入院《にゅういん》 して いる 間《あいだ》、 ずっと 不安《ふあん》 でした。", "A state that fills the whole period takes 間《あいだ》 without に; 間《あいだ》 に is for one event inside it."],
      ["雨《あめ》 が 降《ふ》る うち に、 洗濯物《せんたくもの》 を 入《い》れましょう。", "雨《あめ》 が 降《ふ》らない うち に、 洗濯物《せんたくもの》 を 入《い》れましょう。", "\"Before something happens\" with うち に uses the negative: 〜ない うち に."],
      ["検査《けんさ》 間《あいだ》 に、 ご家族《かぞく》 から 電話《でんわ》 が ありました。", "検査《けんさ》 の 間《あいだ》 に、 ご家族《かぞく》 から 電話《でんわ》 が ありました。", "A noun needs の before 間《あいだ》."]
    ],
    more: [
      ["休《やす》んで いる 間《あいだ》 に、 看護師《かんごし》 が 一度《いちど》 様子《ようす》 を 見《み》 に 来《き》ました。", "While I was resting, a nurse came once to check on me."],
      ["お子《こ》さん が 学校《がっこう》 に 行《い》って いる 間《あいだ》、 ずっと お一人《ひとり》 です か。", "Are you on your own the whole time your child is at school?"],
      ["今《いま》 の うち に、 困《こま》った とき の 連絡先《れんらくさき》 を 一緒《いっしょ》 に 確認《かくにん》 して おきましょう。", "While we have the chance, let's check together who to contact when things get hard."],
      ["日本語《にほんご》 の ドラマ を 見《み》て いる うち に、 聞《き》き取《と》れる 言葉《ことば》 が 増《ふ》えて きました。", "As I kept watching Japanese dramas, the number of words I can catch went up."],
      ["桜《さくら》 が 散《ち》らない うち に、 お花見《はなみ》 に 行《い》きましょう。", "Let's go cherry-blossom viewing before the blossoms fall."],
      ["電車《でんしゃ》 に 乗《の》って いる 間《あいだ》、 ずっと 本《ほん》 を 読《よ》んで いました。", "I was reading the whole time I was on the train."]
    ],
    quiz: [
      ["暇《ひま》 ＿ うち に、 部屋《へや》 を 片付《かたづ》けて おきます。", ["な", "の", "に"], 0, "A な-adjective takes な before うち に: 暇《ひま》 な うち に."],
      ["母《はは》 と 話《はな》して いる うち に、 少《すこ》し 落《お》ち着《つ》いて きました means:", ["I calmed down before I talked with my mother.", "As I talked with my mother, I gradually calmed down.", "I talked with my mother so that I could calm down."], 1, "〜て いる うち に describes a change that happens little by little during an activity."],
      ["You want a patient to book the next visit before the medicine runs out. Which is natural?", ["薬《くすり》 が なくなる うち に、 予約《よやく》 を 取《と》って ください。", "薬《くすり》 が なくならない 間《あいだ》、 予約《よやく》 を 取《と》って ください。", "薬《くすり》 が なくならない うち に、 予約《よやく》 を 取《と》って ください。"], 2, "\"Before an unwanted change\" is 〜ない うち に; booking is one act, so plain 間《あいだ》 does not fit."],
      ["明《あか》るい ＿、 散歩《さんぽ》 に 行《い》きましょう。 (\"Let's go for a walk while it's still light.\")", ["ながら", "うち に", "とき まで"], 1, "\"While the state still lasts\" is うち に; ながら needs a verb stem, and とき まで would mean \"until\"."],
      ["ご家族《かぞく》 が いる 間《あいだ》、 患者《かんじゃ》さん は ずっと 笑顔《えがお》 でした means:", ["The patient smiled the whole time the family was there.", "The patient smiled once while the family was there.", "The patient smiled before the family arrived."], 0, "間《あいだ》 without に means the state filled the whole period."],
      ["How do you say \"before it gets cold\" (of food)?", ["冷《さ》める うち に", "冷《さ》めなかった うち に", "冷《さ》めない うち に"], 2, "\"Before it happens\" is the plain ない-form + うち に."]
    ]
  },
  'tabi-toori-tsuide': {
    mistakes: [
      ["通院《つういん》 たび に、 体重《たいじゅう》 を 測《はか》ります。", "通院《つういん》 の たび に、 体重《たいじゅう》 を 測《はか》ります。", "A noun takes の before たび に."],
      ["説明《せつめい》 の どおり に 飲《の》んで ください。", "説明《せつめい》 の とおり に 飲《の》んで ください。", "After の the word stays とおり; only a noun joined directly becomes どおり."],
      ["病院《びょういん》 に 来《き》た ついで で、 薬局《やっきょく》 に 寄《よ》りました。", "病院《びょういん》 に 来《き》た ついで に、 薬局《やっきょく》 に 寄《よ》りました。", "The pattern is always ついで に, not ついで で."]
    ],
    more: [
      ["受診《じゅしん》 の たび に、 この 表《ひょう》 に 睡眠《すいみん》 の 時間《じかん》 を 書《か》いて きて ください。", "Each time you come in, please bring this chart with your sleep times filled in."],
      ["前回《ぜんかい》 お話《はな》し した とおり、 今日《きょう》 から 作業療法《さぎょうりょうほう》 が 始《はじ》まります。", "As we discussed last time, occupational therapy starts today."],
      ["レントゲン を 撮《と》る ついで に、 心電図《しんでんず》 の 検査《けんさ》 も して おきましょう。", "Since we're taking an X-ray anyway, let's do an ECG as well."],
      ["旅行《りょこう》 に 行《い》く たび に、 友達《ともだち》 に お土産《みやげ》 を 買《か》います。", "Every time I travel, I buy souvenirs for my friends."],
      ["今朝《けさ》 の 電車《でんしゃ》 は 時間《じかん》どおり に 着《つ》きました。", "This morning's train arrived right on time."],
      ["駅《えき》 に 行《い》った ついで に、 本屋《ほんや》 に も 寄《よ》りました。", "While I was at the station, I also stopped by the bookshop."]
    ],
    quiz: [
      ["天気予報《てんきよほう》 の ＿、 午後《ごご》 から 雪《ゆき》 に なりました。 (\"Just as the forecast said, it turned to snow in the afternoon.\")", ["とおり", "どおり", "ついで に"], 0, "After の the word is とおり; どおり is only joined straight to a noun."],
      ["姉《あね》 は 会《あ》う たび に、 「ちゃんと 食《た》べて る？」 と 聞《き》きます means:", ["My sister asks only the first time we meet.", "Every time we meet, my sister asks if I'm eating properly.", "My sister asks me to meet her so that we can eat."], 1, "〜たび に means \"every time\"."],
      ["You are going to the pharmacy anyway and offer to post your mother's letter. Which fits?", ["薬局《やっきょく》 に 行《い》く たび に、 手紙《てがみ》 を 出《だ》して きます。", "薬局《やっきょく》 に 行《い》く とおり に、 手紙《てがみ》 を 出《だ》して きます。", "薬局《やっきょく》 に 行《い》く ついで に、 手紙《てがみ》 を 出《だ》して きます。"], 2, "An extra errand added to a trip you are making anyway is ついで に."],
      ["How do you say \"on time\"?", ["時間《じかん》どおり", "時間《じかん》 の どおり", "時間《じかん》 な とおり"], 0, "A noun joined directly to とおり becomes どおり."],
      ["Which sentence is natural?", ["来月《らいげつ》 の 退院《たいいん》 の たび に、 家族《かぞく》 が 迎《むか》え に 来《き》ます。", "診察《しんさつ》 の たび に、 先生《せんせい》 に 体調《たいちょう》 を 聞《き》かれます。", "昨日《きのう》 転《ころ》んだ たび に、 足《あし》 を けが しました。"], 1, "たび に needs something that happens again and again; one discharge or one fall cannot take it."],
      ["ついで に、 お薬手帳《くすりてちょう》 も 見《み》せて いただけます か means:", ["Could you show me your medicine notebook every time?", "Could you show me your medicine notebook exactly as before?", "While we're at it, could you also show me your medicine notebook?"], 2, "ついで に at the start of a sentence means \"while I'm at it\"."]
    ]
  },
  'irai-totan-shidai': {
    mistakes: [
      ["会議《かいぎ》 が 終《お》わった とたん、 病棟《びょうとう》 に 行《い》きます。", "会議《かいぎ》 が 終《お》わり次第《しだい》、 病棟《びょうとう》 に 行《い》きます。", "とたん is for sudden past events; for what you will do as soon as something ends, use the ます-stem + 次第《しだい》."],
      ["家《いえ》 に 帰《かえ》って 以来《いらい》、 すぐ 夕飯《ゆうはん》 を 食《た》べました。", "家《いえ》 に 帰《かえ》って から、 すぐ 夕飯《ゆうはん》 を 食《た》べました。", "以来《いらい》 needs a state that has lasted until now; for one action after another, use 〜て から."],
      ["入院《にゅういん》 した 以来《いらい》、 体重《たいじゅう》 が 増《ふ》えて います。", "入院《にゅういん》 して 以来《いらい》、 体重《たいじゅう》 が 増《ふ》えて います。", "以来《いらい》 follows the て-form of a verb, not the た-form."]
    ],
    more: [
      ["夫《おっと》 が 亡《な》くなって 以来《いらい》、 夜《よる》 一人《ひとり》 で いる の が 怖《こわ》い ん です。", "Ever since my husband died, I've been afraid of being alone at night."],
      ["検査《けんさ》 を 受《う》けて はじめて、 貧血《ひんけつ》 が ある と わかりました。", "It wasn't until I had the tests that I found out I was anaemic."],
      ["ご家族《かぞく》 が 到着《とうちゃく》 され次第《しだい》、 面談《めんだん》 を 始《はじ》めます。", "We'll start the meeting as soon as your family arrives."],
      ["ドア を 開《あ》けた とたん、 猫《ねこ》 が 外《そと》 へ 飛《と》び出《だ》しました。", "The moment I opened the door, the cat dashed outside."],
      ["大学《だいがく》 を 卒業《そつぎょう》 して 以来《いらい》、 その 友達《ともだち》 に は 会《あ》って いません。", "I haven't seen that friend since we graduated from university."],
      ["一人《ひとり》暮《ぐ》らし を して はじめて、 親《おや》 の ありがたさ が わかりました。", "It wasn't until I lived on my own that I appreciated my parents."]
    ],
    quiz: [
      ["部屋《へや》 の 掃除《そうじ》 が ＿、 お呼《よ》び します。 (\"We'll call you as soon as the room has been cleaned.\")", ["終《お》わった とたん", "終《お》わり次第《しだい》", "終《お》わって 以来《いらい》"], 1, "A promise to act as soon as something is done takes the ます-stem + 次第《しだい》."],
      ["薬《くすり》 を やめて 以来《いらい》、 よく 眠《ねむ》れて いません means:", ["Ever since I stopped the medicine, I haven't been sleeping well.", "The moment I stopped the medicine, I slept well.", "I will sleep well as soon as I stop the medicine."], 0, "〜て 以来《いらい》 dates a state that has lasted from the event until now."],
      ["家《いえ》 に 帰《かえ》った ＿、 涙《なみだ》 が 出《で》て きました。 (\"The moment I got home, the tears came.\")", ["以来《いらい》", "次第《しだい》", "とたん"], 2, "A sudden past event right after another takes 〜た とたん."],
      ["Which means \"I didn't realize I was tired until I took a day off\"?", ["休《やす》んで はじめて、 疲《つか》れて いた こと に 気《き》づきました。", "休《やす》んだ とたん、 疲《つか》れて いる こと に 気《き》づきます。", "休《やす》み次第《しだい》、 疲《つか》れて いた こと に 気《き》づきました。"], 0, "\"Not until A did I realize B\" is 〜て はじめて."],
      ["Which sentence is natural?", ["引《ひ》っ越《こ》して 以来《いらい》、 荷物《にもつ》 を 片付《かたづ》けました。", "引《ひ》っ越《こ》して 以来《いらい》、 近所《きんじょ》 の 人《ひと》 と 話《はな》して いません。", "引《ひ》っ越《こ》した 以来《いらい》、 近所《きんじょ》 の 人《ひと》 と 話《はな》して いません。"], 1, "以来《いらい》 follows the て-form and needs a continuing state such as 〜て いません."],
      ["参加《さんか》 する か どう か は、 体調《たいちょう》次第《しだい》 です means:", ["I'll join as soon as I feel well.", "I've felt unwell ever since I joined.", "Whether I join depends on how I feel."], 2, "After an ordinary noun, 次第《しだい》 means \"depending on\"."]
    ]
  },
  'dake-shika-sae': {
    mistakes: [
      ["朝《あさ》 は パン しか 食《た》べました。", "朝《あさ》 は パン しか 食《た》べません でした。", "しか always needs a negative verb."],
      ["友達《ともだち》 しか に 相談《そうだん》 して いません。", "友達《ともだち》 に しか 相談《そうだん》 して いません。", "に stays and comes before しか: に しか, never しか に."],
      ["最近《さいきん》 は 泣《な》き ばかり います。", "最近《さいきん》 は 泣《な》いて ばかり います。", "\"Do nothing but\" is the て-form + ばかり いる."]
    ],
    more: [
      ["一日《いちにち》 に 一回《いっかい》 しか 食事《しょくじ》 を して いません。", "I'm eating only one meal a day."],
      ["最近《さいきん》 は テレビ を 見《み》る 気力《きりょく》 さえ ありません。", "Lately I don't even have the energy to watch TV."],
      ["今日《きょう》 は お話《はなし》 を 聞《き》く だけ です から、 安心《あんしん》 して ください。", "Today we're only going to listen to you, so please don't worry."],
      ["弟《おとうと》 は 漫画《まんが》 ばかり 読《よ》んで います。", "My younger brother reads nothing but manga."],
      ["今年《ことし》 こそ 日本語《にほんご》 の 試験《しけん》 に 合格《ごうかく》 したい です。", "This year, for sure, I want to pass the Japanese exam."],
      ["日曜日《にちようび》 だけ 朝寝坊《あさねぼう》 します。", "I sleep in only on Sundays."]
    ],
    quiz: [
      ["財布《さいふ》 に は 百円《ひゃくえん》 ＿ ありません でした。 (\"I had only a hundred yen in my wallet.\")", ["しか", "だけ", "こそ"], 0, "\"Only\" with a negative verb and a sense of too little is しか 〜ない; 百円《ひゃくえん》 だけ ありません でした would say that the hundred yen was the one thing missing, which makes no sense here."],
      ["薬《くすり》 さえ 飲《の》めば、 よく なります か means:", ["Will I get better even without the medicine?", "If I just take the medicine, will I get better?", "Should I take nothing but medicine?"], 1, "〜さえ 〜ば means \"if only\" or \"as long as\"."],
      ["A colleague thanks you for your help. Which reply fits?", ["こちら だけ、 ありがとう ございました。", "こちら さえ、 ありがとう ございました。", "こちら こそ、 ありがとう ございました。"], 2, "The set reply to thanks is こちら こそ, \"it is I who should thank you\"."],
      ["Which is correct for \"On my days off I do nothing but sleep\"?", ["休《やす》み の 日《ひ》 は 寝《ね》て ばかり います。", "休《やす》み の 日《ひ》 は 寝《ね》る ばかり います。", "休《やす》み の 日《ひ》 は 寝《ね》て しか います。"], 0, "\"Do nothing but\" is the て-form + ばかり いる; しか would need a negative."],
      ["＿、 この 問題《もんだい》 は 難《むずか》しい と 言《い》って います。 (\"Even the teacher says this problem is hard.\")", ["先生《せんせい》 しか", "先生《せんせい》 で さえ", "先生《せんせい》 ばかり"], 1, "\"Even\" for the subject is で さえ; しか needs a negative verb."],
      ["母《はは》 に だけ 話《はな》しました means:", ["I didn't tell even my mother.", "I told my mother nothing but this.", "I told only my mother."], 2, "だけ is a neutral \"only\"; に stays before it."]
    ]
  },
  'hodo-kurai': {
    mistakes: [
      ["兄《あに》 は 父《ちち》 ほど 背《せ》 が 高《たか》い です。", "兄《あに》 は 父《ちち》 ほど 背《せ》 が 高《たか》く ありません。", "〜ほど in a comparison needs a negative ending; for a positive comparison use より."],
      ["お酒《さけ》 は 飲《の》めば 飲《の》んだ ほど、 眠《ねむ》り が 浅《あさ》く なります。", "お酒《さけ》 は 飲《の》めば 飲《の》む ほど、 眠《ねむ》り が 浅《あさ》く なります。", "In 〜ば 〜ほど the second verb is in the dictionary form."],
      ["二週間《にしゅうかん》 ごろ 入院《にゅういん》 しました。", "二週間《にしゅうかん》 ぐらい 入院《にゅういん》 しました。", "A length of time takes ぐらい or ほど; ごろ is only for a point in time."]
    ],
    more: [
      ["一日《いちにち》 に 何回《なんかい》 くらい 手《て》 を 洗《あら》います か。", "About how many times a day do you wash your hands?"],
      ["食事《しょくじ》 が のど を 通《とお》らない ほど 緊張《きんちょう》 して いました。", "I was so tense I couldn't get any food down."],
      ["薬《くすり》 の 副作用《ふくさよう》 は、 最初《さいしょ》 に 心配《しんぱい》 した ほど ひどく なかった です。", "The side effects weren't as bad as I first feared."],
      ["日本語《にほんご》 は 勉強《べんきょう》 すれば する ほど 面白《おもしろ》く なります。", "The more I study Japanese, the more interesting it gets."],
      ["おなか が 痛《いた》く なる くらい 笑《わら》いました。", "I laughed so much my stomach hurt."],
      ["朝《あさ》ご飯《はん》 くらい 食《た》べて から 出《で》かけなさい。", "At least eat some breakfast before you go out."]
    ],
    quiz: [
      ["退院《たいいん》 まで あと 十日《とおか》 ＿ かかります。 (\"It will take about ten more days until discharge.\")", ["ほど", "ごろ", "しか"], 0, "ほど after a length of time means \"about\"; ごろ is for a point in time, and しか needs a negative."],
      ["How do you say \"the more convenient, the better\"?", ["便利《べんり》ければ 便利《べんり》 ほど いい", "便利《べんり》 なら 便利《べんり》 な ほど いい", "便利《べんり》 なら 便利《べんり》 だ ほど いい"], 1, "A な-adjective makes 〜ば 〜ほど as なら + な ほど."],
      ["Which sentence says \"It hurts so much I can't walk\"?", ["歩《ある》く ほど 痛《いた》く ありません。", "歩《ある》けば 歩《ある》く ほど 痛《いた》い です。", "歩《ある》けない ほど 痛《いた》い です。"], 2, "A ほど B: B is so strong that A happens; the first option says it does not hurt much, and the second means \"the more I walk, the more it hurts\"."],
      ["忙《いそが》しくて も、 返事《へんじ》 ＿ ください。 (\"Even if you're busy, at least reply.\")", ["ほど", "くらい", "しか"], 1, "Only くらい can mean \"at least\"; ほど cannot be used this way."],
      ["前《まえ》 ほど 食欲《しょくよく》 が ありません means:", ["My appetite isn't what it was before.", "I have no appetite at all, just like before.", "I have more appetite than before."], 0, "A ほど 〜ない means \"not as much as A\"."],
      ["Which is natural for \"Around what time did you wake up?\"", ["何時間《なんじかん》 ごろ 起《お》きました か。", "何時《なんじ》 ほど 起《お》きました か。", "何時《なんじ》 ごろ 起《お》きました か。"], 2, "A point on the clock takes ごろ; ほど is for amounts and lengths."]
    ]
  },
  'compound-verbs': {
    mistakes: [
      ["日記《にっき》 を 書《か》く 終《お》わったら、 寝《ね》ます。", "日記《にっき》 を 書《か》き終《お》わったら、 寝《ね》ます。", "A compound verb joins the ます-stem, not the dictionary form."],
      ["来週《らいしゅう》 から リハビリ を やり出《だ》しましょう。", "来週《らいしゅう》 から リハビリ を やり始《はじ》めましょう。", "〜出《だ》す is a sudden start and is not used for plans or suggestions; use 〜始《はじ》める."],
      ["家族《かぞく》 と 話《はな》し合《あ》いて、 決《き》めました。", "家族《かぞく》 と 話《はな》し合《あ》って、 決《き》めました。", "The compound conjugates like its second verb: 合《あ》う → 合《あ》って."]
    ],
    more: [
      ["お薬《くすり》 を 飲《の》み始《はじ》めて から、 体《からだ》 に 何《なに》 か 変化《へんか》 は あります か。", "Have you noticed any change in your body since you started the medicine?"],
      ["途中《とちゅう》 で やめないで、 最後《さいご》 まで 飲《の》み切《き》って ください。", "Please don't stop partway; take the whole course to the end."],
      ["患者《かんじゃ》さん は 何《なに》 か 言《い》いかけて、 黙《だま》って しまいました。", "The patient started to say something, then fell silent."],
      ["散歩《さんぽ》中《ちゅう》 に、 犬《いぬ》 が 急《きゅう》に 走《はし》り出《だ》しました。", "While we were out for a walk, the dog suddenly broke into a run."],
      ["宿題《しゅくだい》 を 最初《さいしょ》 から やり直《なお》しました。", "I redid my homework from the beginning."],
      ["友達《ともだち》 と 三時間《さんじかん》 も 話《はな》し続《つづ》けました。", "My friend and I kept talking for three whole hours."]
    ],
    quiz: [
      ["How do you say \"when I finished eating\"?", ["食《た》べ終《お》わった とき", "食《た》べる 終《お》わった とき", "食《た》べて 終《お》わった とき"], 0, "Join the ます-stem 食《た》べ to 終《お》わる."],
      ["みんな で 意見《いけん》 を 出《だ》し合《あ》いましょう means:", ["Let's each suddenly give an opinion.", "Let's all share our ideas with one another.", "Let's take back our opinions."], 1, "〜合《あ》う means doing something with or to each other."],
      ["すみません、 今《いま》 の 説明《せつめい》 は わかりにくかった です ね。 もう 一度《いちど》 ＿。 (\"Sorry, that was hard to follow. Let me say it again.\")", ["言《い》い切《き》ります", "言《い》いかけます", "言《い》い直《なお》します"], 2, "〜直《なお》す means do again; 言《い》い切《き》る means state flatly."],
      ["治《なお》りかけた 風邪《かぜ》 が また ひどく なりました means:", ["The cold that had cleared up completely came back.", "I keep catching colds again and again.", "The cold that was starting to get better got worse again."], 2, "〜かける means the change had started but was not finished."],
      ["マラソン を 最後《さいご》 まで ＿。 (\"I ran the marathon all the way to the end.\")", ["走《はし》り切《き》りました", "走《はし》り直《なお》しました", "走《はし》りかけました"], 0, "〜切《き》る means doing something completely, to the end."],
      ["Which is natural for \"Please keep doing the exercises every day\"?", ["毎日《まいにち》 体操《たいそう》 を し出《だ》して ください。", "毎日《まいにち》 体操《たいそう》 を し続《つづ》けて ください。", "毎日《まいにち》 体操《たいそう》 を し終《お》わって ください。"], 1, "〜続《つづ》ける means keep on; 〜出《だ》す is not used in requests."]
    ]
  }
});
