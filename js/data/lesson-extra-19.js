/* Lesson extras part 19 (0.26.0): common mistakes, more examples and a "More practice" quiz for existing N2 lessons
   (n2-koto-wa-nai, n2-you-dewa-nai-ka, n2-mai, n2-te-koso, n2-dake, n2-nuku).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n2-koto-wa-nai': {
    mistakes: [
      ["一人《ひとり》 で 悩《なや》む もの は ありません。", "一人《ひとり》 で 悩《なや》む こと は ありません。", "\"There is no need to\" is dictionary form + こと は ない; もの does not make this pattern."],
      ["そんな の 無理《むり》 だ に 決《き》まって いる よ。", "そんな の 無理《むり》 に 決《き》まって いる よ。", "A noun or な-adjective takes に 決《き》まって いる directly, with no だ."],
      ["そんな に ご自分《じぶん》 を 責《せ》める まで も ありません よ。", "そんな に ご自分《じぶん》 を 責《せ》める こと は ありません よ。", "To lift a burden the listener has put on themselves, use こと は ない; まで も ない says a matter is too obvious or too minor to deserve the action."]
    ],
    more: [
      ["検査《けんさ》 の 結果《けっか》 を 待《ま》つ 間《あいだ》、 悪《わる》い ほう に ばかり 考《かんが》える こと は ありません。", "While you wait for the test results, there is no need to think only of the worst."],
      ["入院《にゅういん》 が 長《なが》ければ 安心《あんしん》 と いう もの でも ありません。", "A longer stay in hospital doesn't necessarily mean more peace of mind."],
      ["言《い》う まで も なく、 申《もう》し送《おく》り では 患者《かんじゃ》さん の 安全《あんぜん》 に 関《かか》わる こと を 最初《さいしょ》 に 伝《つた》えます。", "Needless to say, at handover we pass on anything to do with patient safety first."],
      ["こんな 時間《じかん》 に 電話《でんわ》 したら、 迷惑《めいわく》 に 決《き》まって いる よ。", "Calling at this hour is bound to be a nuisance."],
      ["近《ちか》い から、 タクシー を 呼《よ》ぶ まで も ない よ。 歩《ある》いて 行《い》こう。", "It's close, so there's no point calling a taxi. Let's walk."],
      ["そんな に 慌《あわ》てる こと は ない よ。 電車《でんしゃ》 は まだ 来《こ》ない から。", "No need to rush like that. The train isn't coming yet."]
    ],
    quiz: [
      ["Polite \"There is no need to apologise\":", ["謝《あやま》る こと は ありません。", "謝《あやま》った こと は ありません。", "謝《あやま》る こと が あります。"], 0, "\"No need to\" takes the dictionary form; た-form + こと は ない means \"have never done\"."],
      ["今《いま》 すぐ 決《き》める こと は ありません means:", ["You must decide right now.", "There is no need to decide right now.", "You have never decided quickly."], 1, "Dictionary form + こと は ない says the action is not needed."],
      ["Fill the blank: 値段《ねだん》 が 高《たか》ければ よく 効《き》く ＿ では ありません。", ["まで も ない", "に 決《き》まって いる", "と いう もの"], 2, "〜ば … と いう もの では ない denies a rule people take for granted."],
      ["A patient says 「どうせ 治《なお》らない に 決《き》まって います。」 What does に 決《き》まって います show?", ["A fact the doctor has told her", "Her own strong, emotional certainty", "A polite request"], 1, "に 決《き》まって いる is a personal certainty; hear it as a prediction to explore."],
      ["In a talk to new staff, which opening fits?", ["言《い》う まで も なく、 手洗《てあら》い は 感染《かんせん》 対策《たいさく》 の 基本《きほん》 です。", "手洗《てあら》い は 感染《かんせん》 対策《たいさく》 の 基本《きほん》 に 決《き》まって いる じゃん。", "手洗《てあら》い は する こと は ありません。"], 0, "言《い》う まで も なく opens a point in talks; the second is casual slang, and the third says hand-washing is not needed."],
      ["Fill the blank: 外《そと》 は 大雨《おおあめ》 だ から、 道《みち》 が 混《こ》んで いる ＿。", ["こと は ない", "まで も ない", "に 決《き》まって いる"], 2, "\"It's bound to be crowded\" is plain form + に 決《き》まって いる."]
    ]
  },
  'n2-you-dewa-nai-ka': {
    mistakes: [
      ["皆《みな》 で 力《ちから》 を 合《あ》わせる では ありません か。", "皆《みな》 で 力《ちから》 を 合《あ》わせよう では ありません か。", "\"Let us\" needs the volitional form before では ない か."],
      ["なんとか 夜《よる》 ぐっすり 眠《ねむ》れる もの か。", "なんとか 夜《よる》 ぐっすり 眠《ねむ》れない もの か。", "A wish takes the ない-form + もの か; a positive verb + もの か is a strong denial."],
      ["お腹《なか》 が 空《す》いた から、 早《はや》く 何《なに》 か 食《た》べたい もの だ。", "お腹《なか》 が 空《す》いた から、 早《はや》く 何《なに》 か 食《た》べたい。", "〜たい もの だ is for a deep, long-held wish, not a want of the moment."]
    ],
    more: [
      ["父《ちち》 の 物忘《ものわす》れ、 何《なに》 か 進行《しんこう》 を 遅《おく》らせる 方法《ほうほう》 は ない もの でしょう か。", "Isn't there some way to slow down my father's forgetfulness? (family)"],
      ["いつか また、 家族《かぞく》 と 旅行《りょこう》 に 行《い》ける よう に なりたい もの です。", "Some day I would so like to be able to travel with my family again. (patient)"],
      ["心《こころ》 の 不調《ふちょう》 を 一人《ひとり》 で 抱《かか》え込《こ》まない 社会《しゃかい》 を 作《つく》ろう では ありません か。", "Let us build a society where no one has to carry mental ill-health alone. (speech)"],
      ["電車《でんしゃ》 の 中《なか》 では、 もう 少《すこ》し 静《しず》か に して ほしい もの だ。", "I do wish people would be a bit quieter on the train."],
      ["定年《ていねん》 に なったら、 一度《いちど》 は 世界一周《せかいいっしゅう》 を して みたい もの だ。", "When I retire, I'd really love to go round the world at least once."],
      ["この 渋滞《じゅうたい》、 どうにか ならない もの だろう か。", "Isn't there something that can be done about this traffic?"]
    ],
    quiz: [
      ["\"Let us protect\" with 守《まも》る, in an appeal:", ["守《まも》ろう では ない か", "守《まも》る では ない か", "守《まも》りたい では ない か"], 0, "\"Let us\" is the volitional form + では ない か."],
      ["約束《やくそく》 と 違《ちが》う では ない か means:", ["Let us break the promise.", "Why, that's not what we agreed!", "Isn't there some way to keep the promise?"], 1, "Plain form + では ない か means \"isn't it so\"; only the volitional makes \"let us\"."],
      ["Fill the blank: 息子《むすこ》 に は、 もう 少《すこ》し 親《おや》 の 気持《きも》ち を 分《わ》かって ＿ もの です。", ["ほしがる", "ほしく", "ほしい"], 2, "A wish about another person is て-form + ほしい もの だ."],
      ["A daughter wants to ask, politely, whether something can be done about her mother's pain. Which fits?", ["母《はは》 の 痛《いた》み、 なんとか ならない もの でしょう か。", "母《はは》 の 痛《いた》み、 なんとか なる もの です か。", "母《はは》 の 痛《いた》み、 なんとか しよう では ありません か。"], 0, "ない + もの でしょう か is a gentle wish for help; なる もの です か means \"no way it will\", and 〜よう では ありません か rouses an audience."],
      ["若《わか》い 人《ひと》 に は、 もっと 本《ほん》 を 読《よ》んで ほしい もの だ. What does the speaker suggest?", ["Young people are being told to read today.", "The speaker wishes they read more, and feels they don't.", "The speaker is glad they read so much."], 1, "〜て ほしい もの だ is a wish about others that often carries a quiet complaint."],
      ["You are a first year proposing a new checklist in a ward meeting. Which fits best?", ["新《あたら》しい チェックリスト を 使《つか》おう では ない か。", "新《あたら》しい チェックリスト を 使《つか》おう じゃ ない か。", "新《あたら》しい チェックリスト を 使《つか》って みません か。"], 2, "〜よう では ない か belongs to speeches and appeals and じゃ ない か is rough; in a meeting, suggest with 〜ません か or 〜ましょう."]
    ]
  },
  'n2-mai': {
    mistakes: [
      ["二度《にど》 と 遅刻《ちこく》 しないまい と 決《き》めた。", "二度《にど》 と 遅刻《ちこく》 するまい と 決《き》めた。", "まい is already negative, so it never follows ない."],
      ["まさか あれ が 本物《ほんもの》 まい。", "まさか あれ が 本物《ほんもの》 では あるまい。", "A noun takes では あるまい, not まい directly."],
      ["今日《きょう》 の 検査《けんさ》 は、 長《なが》く は かかるまい と 思《おも》います。", "今日《きょう》 の 検査《けんさ》 は、 長《なが》く は かからない と 思《おも》います。", "Grammatical but まい is written style; to a patient say 〜ない と 思《おも》います."]
    ],
    more: [
      ["もう 二度《にど》 と 薬《くすり》 を 飲《の》み忘《わす》れるまい と 思《おも》って、 カレンダー に 印《しるし》 を つけて います。", "I resolved never to forget my medicine again, so I mark it on the calendar. (patient)"],
      ["症状《しょうじょう》 の 悪化《あっか》 に は、 家庭環境《かていかんきょう》 の 変化《へんか》 が 関係《かんけい》 して いる の では あるまい か。", "Might the change in the home environment not be related to the worsening of symptoms? (case report)"],
      ["受診《じゅしん》しよう か するまい か、 何度《なんど》 も 迷《まよ》った そう です。", "She says she went back and forth many times over whether to see a doctor."],
      ["相手《あいて》 を 傷《きず》つけまい と して、 言葉《ことば》 を 選《えら》んで 話《はな》しました。", "Trying not to hurt the other person, I chose my words carefully."],
      ["これ だけ 準備《じゅんび》 した の だ から、 大《おお》きな 失敗《しっぱい》 は あるまい。", "We have prepared this much, so there probably won't be any big mistakes."],
      ["あの 店《みせ》 に は、 もう 二度《にど》 と 行《い》くまい。", "I will never go to that shop again."]
    ],
    quiz: [
      ["Which is a correct まい form of する?", ["しないまい", "するまい", "しようまい"], 1, "Dictionary form + まい works for every verb; まい never follows ない or the volitional."],
      ["これ 以上《いじょう》 は 待《ま》つまい と 思《おも》った means:", ["I decided I would not wait any longer.", "I thought they would wait longer.", "I thought I had to wait longer."], 0, "With the speaker as subject, まい と 思《おも》う is a resolve not to do something."],
      ["Fill the blank: 原因《げんいん》 は 睡眠不足《すいみんぶそく》 ＿ か。 (Might the cause not be lack of sleep?)", ["では ないまい", "まい", "では あるまい"], 2, "A noun takes では あるまい か for \"might it not be\"; まい never follows ない."],
      ["Which should you SAY to a patient for \"I'll try not to keep you waiting\"?", ["お待《ま》たせ しない よう に します。", "お待《ま》たせ するまい と します。", "お待《ま》たせ しないまい です。"], 0, "まい と する is written style, and しないまい is not a form; in speech use 〜ない よう に します."],
      ["涙《なみだ》 を 見《み》せまい と して、 横《よこ》 を 向《む》いた means:", ["She turned away, wanting to show her tears.", "She turned away, sure no one would see her tears.", "She turned away, trying not to show her tears."], 2, "〜まい と する means \"try hard not to do\"."],
      ["In 晴《は》れて いる から、 傘《かさ》 は 要《い》るまい, まい expresses:", ["the speaker's resolve not to take one", "a guess: an umbrella probably isn't needed", "an order not to take one"], 1, "About things and events, まい is a written 〜ない だろう."]
    ]
  },
  'n2-te-koso': {
    mistakes: [
      ["話《はなし》 を 最後《さいご》 まで 聞《き》く こそ、 分《わ》かる こと が あります。", "話《はなし》 を 最後《さいご》 まで 聞《き》いて こそ、 分《わ》かる こと が あります。", "\"Only by doing\" is the て-form + こそ, not the dictionary form."],
      ["迷《まよ》う こそ しました が、 後悔《こうかい》 は して いません。", "迷《まよ》い こそ しました が、 後悔《こうかい》 は して いません。", "With a verb, the concession is ます-stem + こそ + する."],
      ["先生《せんせい》 の 資料《しりょう》 なんか、 とても 分《わ》かりやすかった です。", "先生《せんせい》 の 資料《しりょう》 は、 とても 分《わ》かりやすかった です。", "Grammatical but なんか about a senior's things sounds dismissive; use は."]
    ],
    more: [
      ["退院後《たいいんご》 の 生活《せいかつ》 が 安定《あんてい》 して こそ、 治療《ちりょう》 が うまく いった と 言《い》えます。", "Only once life after discharge is stable can we say the treatment went well."],
      ["最近《さいきん》 は、 夫《おっと》 が 好物《こうぶつ》 まで 残《のこ》す よう に なりました。", "Lately my husband has started leaving even his favourite foods. (family)"],
      ["副作用《ふくさよう》 こそ 少《すく》ない です が、 効《き》き始《はじ》める まで 少《すこ》し 時間《じかん》 が かかります。", "It has few side effects, admittedly, but it takes a while to start working."],
      ["徹夜《てつや》 して まで 見《み》たい ドラマ では ない。", "It's not a drama I'd stay up all night to watch."],
      ["私《わたし》 など が 意見《いけん》 を 申《もう》し上《あ》げる の は、 まだ 早《はや》い と 思《おも》います。", "I think it is too early for someone like me to offer an opinion. (to a senior)"],
      ["雨《あめ》 だけ で なく、 雷《かみなり》 まで 鳴《な》り出《だ》した。", "Not only is it raining, now there's even thunder."]
    ],
    quiz: [
      ["\"Only by keeping it up every day\":", ["毎日《まいにち》 続《つづ》ける こそ", "毎日《まいにち》 続《つづ》けて こそ", "毎日《まいにち》 続《つづ》けた こそ"], 1, "こそ in this sense follows the て-form."],
      ["値段《ねだん》 こそ 高《たか》い です が、 長《なが》く 使《つか》えます means:", ["It is cheap and lasts a long time.", "It lasts a long time precisely because it is expensive.", "It is expensive, admittedly, but it lasts a long time."], 2, "〜こそ 〜が concedes one point before stressing the next."],
      ["Fill the blank: 最近《さいきん》 は 親友《しんゆう》 から の 電話《でんわ》 に ＿ 出《で》なく なりました。 (I've stopped answering even my best friend's calls.)", ["まで", "こそ", "ほど"], 0, "まで after に adds an extreme case: \"even\"."],
      ["A mother says 息子《むすこ》 は 学校《がっこう》 を 休《やす》んで まで ゲーム を 続《つづ》けて います. This means:", ["Her son plays games only after school.", "Her son goes so far as to miss school to keep gaming.", "Her son missed school, so he stopped gaming."], 1, "〜て まで marks an action as going too far for the goal."],
      ["A patient says 僕《ぼく》 なんか、 何《なに》 を やって も だめ です. What does なんか show here?", ["Strong self-criticism", "Polite modesty to a senior", "An example taken from a list"], 0, "Casual なんか about oneself often carries real self-criticism; listen for hopelessness."],
      ["Which sentence is natural?", ["風邪《かぜ》 を ひいて こそ、 学校《がっこう》 を 休《やす》みました。", "雨《あめ》 が 降《ふ》って こそ、 試合《しあい》 は 中止《ちゅうし》 に なった。", "実際《じっさい》 に 会《あ》って こそ、 その 人《ひと》 の 良《よ》さ が 分《わ》かる。"], 2, "〜て こそ marks the condition that makes something true or worthwhile, not a simple cause."]
    ]
  },
  'n2-dake': {
    mistakes: [
      ["好《す》き だけ 取《と》って ください。", "好《す》き な だけ 取《と》って ください。", "A な-adjective needs な before だけ."],
      ["階段《かいだん》 を 上《のぼ》る だけ 力《ちから》 が ありません。", "階段《かいだん》 を 上《のぼ》る だけ の 力《ちから》 が ありません。", "Before a noun, \"enough to\" is verb + だけ の."],
      ["さすが 一流《いちりゅう》 の 店《みせ》 だ だけ の こと は ある。", "さすが 一流《いちりゅう》 の 店《みせ》 だけ の こと は ある。", "A noun takes だけ の こと は ある directly, with no だ."]
    ],
    more: [
      ["つらい とき は、 泣《な》きたい だけ 泣《な》いて いい ん です よ。", "When things are hard, it is all right to cry as much as you want."],
      ["今《いま》 は まだ、 一人《ひとり》 で 外出《がいしゅつ》 する だけ の 自信《じしん》 が ありません。", "Right now I don't yet have the confidence to go out on my own. (patient)"],
      ["食欲《しょくよく》 は 落《お》ちて います が、 水分《すいぶん》 が とれて いる だけ まし です。", "Her appetite is down, but at least she is getting fluids. (family)"],
      ["彼《かれ》 の ピアノ は 本当《ほんとう》 に うまい。 さすが 十年《じゅうねん》 続《つづ》けて いる だけ の こと は ある。", "His piano playing is really good. No wonder: he has kept at it for ten years."],
      ["練習《れんしゅう》 すれば する だけ、 上達《じょうたつ》 する もの だ。", "The more you practise, the more you improve."],
      ["時間《じかん》 が ある うち に、 寝《ね》られる だけ 寝《ね》て おこう。", "While I have the time, I'll sleep as much as I can."]
    ],
    quiz: [
      ["\"As much as you like\" with 好《す》き:", ["好《す》き だけ", "好《す》き な だけ", "好《す》き の だけ"], 1, "A な-adjective keeps な before だけ."],
      ["家《いえ》 を 買《か》う だけ の お金《かね》 は ありません means:", ["I don't have enough money to buy a house.", "Buying a house is the only thing I lack money for.", "I only have money for a house."], 0, "Verb + だけ の + noun is the amount needed for that action."],
      ["Fill the blank: けが は した けど、 骨《ほね》 が 折《お》れなかった ＿。", ["だけ の こと は ある", "ほど だ", "だけ まし だ"], 2, "〜だけ まし だ picks out the point that makes a bad situation less bad."],
      ["A patient with no appetite asks how much she should eat. Which advice fits?", ["食《た》べられる だけ で いい ので、 少《すこ》し ずつ 食《た》べて ください。", "食《た》べられる だけ の こと は あります。", "食《た》べられる だけ まし です。"], 0, "Potential verb + だけ is \"as much as you can\"; だけ の こと は ある praises a result, and だけ まし would play down her problem."],
      ["さすが 毎日《まいにち》 練習《れんしゅう》 して いる だけ の こと は ある means:", ["Practising every day is all that matters.", "Practising every day is not enough.", "No wonder they are good: they practise every day."], 2, "だけ の こと は ある says a good result matches the effort behind it."],
      ["In your own speech, which says \"The more you read, the more kanji you learn\"?", ["読《よ》む だけ まし です。", "読《よ》めば 読《よ》む ほど、 漢字《かんじ》 を 覚《おぼ》えます。", "読《よ》む だけ の こと は あります。"], 1, "〜ば 〜ほど is the everyday \"the more …, the more\" (〜ば 〜だけ also exists); the other two mean \"at least\" and \"no wonder\"."]
    ]
  },
  'n2-nuku': {
    mistakes: [
      ["最後《さいご》 まで 頑張《がんば》る 抜《ぬ》きました。", "最後《さいご》 まで 頑張《がんば》り抜《ぬ》きました。", "Compound verbs join the ます-stem: 頑張《がんば》り + 抜《ぬ》く."],
      ["量《りょう》 が 多《おお》すぎて、 食《た》べ切《き》らない。", "量《りょう》 が 多《おお》すぎて、 食《た》べ切《き》れない。", "\"Cannot finish\" is the potential 〜切《き》れない; 〜切《き》らない means \"will not finish\"."],
      ["星《ほし》 が 数《かぞ》え抜《ぬ》けない ほど 見《み》えた。", "星《ほし》 が 数《かぞ》え切《き》れない ほど 見《み》えた。", "\"Too many to count\" is 〜切《き》れない; 〜抜《ぬ》く is about pushing an action through to the end."]
    ],
    more: [
      ["夜勤《やきん》 の 看護師《かんごし》 は、 一晩中《ひとばんじゅう》 患者《かんじゃ》さん の 安全《あんぜん》 を 守《まも》り抜《ぬ》きました。", "The night nurses kept the patients safe right through the night."],
      ["診察《しんさつ》 の 間《あいだ》、 患者《かんじゃ》さん は ずっと 黙《だま》り通《とお》して いました。", "The patient stayed silent all the way through the consultation."],
      ["一回《いっかい》 の 診察《しんさつ》 では 話《はな》し切《き》れない こと も ある と 思《おも》います ので、 次回《じかい》 も 続《つづ》けましょう。", "There may be things you can't fully talk about in one visit, so let's continue next time."],
      ["書《か》きかけ の 手紙《てがみ》 が、 引《ひ》き出《だ》し に 入《はい》った まま に なって いる。", "A half-written letter is still sitting in the drawer."],
      ["チーム は 一点差《いってんさ》 を 守《まも》り抜《ぬ》いて、 優勝《ゆうしょう》 しました。", "The team held on to a one-point lead and won the championship."],
      ["眠《ねむ》りかけた ところ で、 電話《でんわ》 が 鳴《な》った。", "Just as I was dropping off to sleep, the phone rang."]
    ],
    quiz: [
      ["\"Fight to the very end\" with 戦《たたか》う:", ["戦《たたか》う 抜《ぬ》く", "戦《たたか》って 抜《ぬ》く", "戦《たたか》い抜《ぬ》く"], 2, "Compound verbs join the ます-stem: 戦《たたか》い + 抜《ぬ》く."],
      ["原因《げんいん》 が 一《ひと》つ だ と は 言《い》い切《き》れません means:", ["I can't say for certain that there is only one cause.", "I have finished explaining the single cause.", "There is definitely only one cause."], 0, "言《い》い切《き》れない means \"cannot say for certain\"."],
      ["Fill the blank: 分厚《ぶあつ》い 本《ほん》 なので、 一週間《いっしゅうかん》 では ＿。 (It's a thick book, so I can't finish it in a week.)", ["読《よ》みかけません", "読《よ》み切《き》れません", "読《よ》み切《き》りません"], 1, "\"Cannot finish\" is the potential 読《よ》み切《き》れない; 読《よ》み切《き》らない is not a potential, and 読《よ》みかける means \"start to read\"."],
      ["流《なが》し に 洗《あら》いかけ の 食器《しょっき》 が 残《のこ》って いる. The dishes are:", ["half-washed", "all washed", "not yet touched"], 0, "Stem + かけ is something begun and left unfinished."],
      ["A patient says 診察中《しんさつちゅう》 に 一度《いちど》 言《い》いかけて、 やめました. What happened?", ["She said everything she wanted to.", "She started to say something and stopped.", "Someone spoke to her."], 1, "言《い》いかける is \"start to say\"; do not confuse it with 話《はな》しかける, \"speak to someone\"."],
      ["Which compound says an action or state was kept up, unchanged, from start to finish?", ["黙《だま》りかける", "黙《だま》り切《き》れない", "黙《だま》り通《とお》す"], 2, "〜通《とお》す keeps something going without a break or change."]
    ]
  }
});
