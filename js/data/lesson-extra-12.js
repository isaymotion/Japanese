/* Lesson extras part 12 (0.26.0): common mistakes, more examples and a "More practice" quiz for existing N3 lessons
   (strong-feelings, without-doing, trying, koto-patterns, casual-speech, written-style).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'strong-feelings': {
    mistakes: [
      ["夜《よる》 に なる と、 寂《さび》しい で たまりません。", "夜《よる》 に なる と、 寂《さび》しくて たまりません。", "An い-adjective links to たまらない with its て-form くて, not で."],
      ["会議中《かいぎちゅう》 も、 何度《なんど》 も 時計《とけい》 を 見《み》ない に は いられません。", "会議中《かいぎちゅう》 も、 何度《なんど》 も 時計《とけい》 を 見《み》ず に は いられません。", "The pattern needs the ず form (drop ない, add ず): 見《み》ず に は いられない, not 見《み》ない に は."],
      ["何《なに》 か 悪《わる》い こと が 起《お》こる 気《き》 が しなければ なりません。", "何《なに》 か 悪《わる》い こと が 起《お》こる 気《き》 が して なりません。", "\"I can't shake the feeling\" is the positive て-form + ならない; 〜なければ ならない means \"must\"."]
    ],
    more: [
      ["手術《しゅじゅつ》 の 傷《きず》 が かゆくて たまりません。", "The surgical wound itches so much I can't stand it."],
      ["退院《たいいん》 して から も、 また 悪《わる》く ならない か 心配《しんぱい》 で なりません。", "Even since being discharged, I've been deeply worried that I might get worse again."],
      ["電気《でんき》 を 消《け》した か どう か、 何度《なんど》 も 見《み》 に 行《い》かず に は いられません。", "I can't stop myself going back again and again to see whether I turned the lights off."],
      ["試験《しけん》 の 結果《けっか》 が 気《き》 に なって しかた が ありません。", "I can't stop thinking about my exam results."],
      ["久《ひさ》しぶり に 友達《ともだち》 に 会《あ》える の が、 うれしくて たまりません。", "I'm so happy I can hardly stand it: I'm seeing my friend for the first time in ages."],
      ["その 映画《えいが》 は 本当《ほんとう》 に おかしくて、 笑《わら》わず に は いられません でした。", "That film was so funny I couldn't help laughing."]
    ],
    quiz: [
      ["Fill the blank: 家族《かぞく》 に ＿ たまりません。 (I miss my family terribly.)", ["会《あ》いたい", "会《あ》いたくて", "会《あ》いたく"], 1, "〜たい becomes 〜たくて before たまらない."],
      ["失敗《しっぱい》 した 気《き》 が して なりません means:", ["I can't shake the feeling that I failed.", "I must not fail.", "I don't feel that I failed."], 0, "気《き》 が して ならない describes a feeling that keeps coming by itself."],
      ["Fill the blank: 最近《さいきん》、 涙《なみだ》 が ＿ しかた が ありません。 (Lately I can't stop the tears coming.)", ["出《で》ない", "出《で》ず", "出《で》て"], 2, "A verb takes its て-form before しかた が ない: 出《で》て しかた が ない."],
      ["Fill the blank: 一言《ひとこと》 ＿ に は いられません でした。 (I couldn't keep from saying something.)", ["言《い》わず", "言《い》いず", "言《い》わないず"], 0, "ず replaces ない in the ない-form: 言《い》わない becomes 言《い》わず."],
      ["Which ending is the most formal and the most typical of writing?", ["〜て しょう が ない", "〜て たまらない", "〜て ならない"], 2, "〜て ならない is formal; しょう が ない is the most conversational."],
      ["Which sentence is about an action the speaker cannot stop, not a feeling?", ["不安《ふあん》 で たまりません。", "夜中《よなか》 も スマホ を 見《み》ず に は いられません。", "寂《さび》しくて しかた が ありません。"], 1, "〜ず に は いられない follows a verb of action; the other two describe feelings."]
    ]
  },
  'without-doing': {
    mistakes: [
      ["誰《だれ》 に も 言《い》わなくて、 薬《くすり》 を やめました。", "誰《だれ》 に も 言《い》わないで、 薬《くすり》 を やめました。", "\"Without doing\" takes 〜ないで (or 〜ず に); 〜なくて gives a cause."],
      ["家族《かぞく》 に 相談《そうだん》 しず に 決《き》めました。", "家族《かぞく》 に 相談《そうだん》 せず に 決《き》めました。", "The ず form of する is せず, not しず."],
      ["時間《じかん》 が ないで、 朝《あさ》ご飯《はん》 を 食《た》べられません でした。", "時間《じかん》 が なくて、 朝《あさ》ご飯《はん》 を 食《た》べられません でした。", "ない meaning \"there is not\" has no ないで form; a negative cause takes なくて."]
    ],
    more: [
      ["痛《いた》み が 取《と》れなくて、 夜《よる》 も よく 眠《ねむ》れません。", "The pain won't go away, so I can't sleep well at night either."],
      ["熱《ねつ》 が ある とき は、 無理《むり》 を せず に 休《やす》んで ください。", "When you have a fever, please rest without pushing yourself."],
      ["母《はは》 は 薬《くすり》 を 飲《の》まないで、 引《ひ》き出《だ》し に しまって いた よう です。", "It seems my mother had been putting her medicine away in a drawer instead of taking it."],
      ["辞書《じしょ》 を 使《つか》わないで、 日本語《にほんご》 の 新聞《しんぶん》 を 読《よ》んで みました。", "I tried reading a Japanese newspaper without using a dictionary."],
      ["道《みち》 が わからなくて、 三十分《さんじゅっぷん》 も 遅《おく》れて しまいました。", "I couldn't find the way, so I ended up thirty minutes late."],
      ["その 人《ひと》 は 一言《ひとこと》 も 話《はな》さず に、 最後《さいご》 まで 座《すわ》って いました。", "That person sat there until the end without saying a single word."]
    ],
    quiz: [
      ["What is the 〜ず に form of 書《か》く?", ["書《か》かず に", "書《か》きず に", "書《か》くず に"], 0, "Drop ない from the ない-form 書《か》かない and add ず."],
      ["Fill the blank: 鍵《かぎ》 が ＿、 家《いえ》 に 入《はい》れません でした。 (I couldn't find my key, so I couldn't get in.)", ["見《み》つけて も", "見《み》つからなくて", "見《み》つけたら"], 1, "A negative cause takes 〜なくて; the other two use 見《み》つける, which cannot follow 鍵《かぎ》 が, and mean \"even if\" and \"when\"."],
      ["テレビ を 見《み》ないで、 早《はや》く 寝《ね》ました means:", ["Because I didn't watch TV, I couldn't sleep.", "Please don't watch TV; go to bed early.", "Instead of watching TV, I went to bed early."], 2, "〜ないで can mean \"instead of doing\"."],
      ["Which is the more formal way to say 確認《かくにん》 しないで 進《すす》めました (went ahead without checking)?", ["確認《かくにん》 せず に 進《すす》めました", "確認《かくにん》 しなくて 進《すす》めました", "確認《かくにん》 しず に 進《すす》めました"], 0, "〜ず に is the formal \"without doing\", and the ず form of する is せず."],
      ["You want to tell a patient, \"Please don't stop the medicine on your own.\" Which is right?", ["自分《じぶん》 で 薬《くすり》 を やめなくて ください。", "自分《じぶん》 で 薬《くすり》 を やめないで ください。", "自分《じぶん》 で 薬《くすり》 を やめず ください。"], 1, "A request not to do something is always 〜ないで ください."],
      ["Which sentence gives a reason (because something is not the case)?", ["お金《かね》 を 持《も》たず に 出《で》かけました。", "お金《かね》 を 使《つか》わないで、 一日《いちにち》 過《す》ごしました。", "お金《かね》 が なくて、 旅行《りょこう》 に 行《い》けません でした。"], 2, "〜なくて links a negative cause to its result; the other two say \"without doing\"."]
    ]
  },
  'trying': {
    mistakes: [
      ["寝《ね》る と しました が、 眠《ねむ》れません でした。", "寝《ね》よう と しました が、 眠《ねむ》れません でした。", "\"Try to\" takes the volitional form before と する."],
      ["毎日《まいにち》 野菜《やさい》 を 食《た》べる よう と して います。", "毎日《まいにち》 野菜《やさい》 を 食《た》べる よう に して います。", "A habit is dictionary form + よう に して いる; よう と する needs the volitional form and means an attempt."],
      ["駅前《えきまえ》 の 新《あたら》しい 店《みせ》 の ラーメン を 食《た》べよう と みました。", "駅前《えきまえ》 の 新《あたら》しい 店《みせ》 の ラーメン を 食《た》べて みました。", "\"Try it and see\" is the て-form + みる; the volitional + と goes only with する."]
    ],
    more: [
      ["母《はは》 は 何度《なんど》 勧《すす》めて も、 薬《くすり》 を 飲《の》もう と しません。", "However often we urge her, my mother won't take her medicine."],
      ["ベッド から 立《た》ち上《あ》がろう と した とき に、 めまい が しました。", "Just as I was about to get up from the bed, I felt dizzy."],
      ["眠《ねむ》れない とき は、 一度《いちど》 布団《ふとん》 から 出《で》て みて ください。", "When you can't sleep, try getting out of bed for a while."],
      ["手紙《てがみ》 を 出《だ》した つもり でした が、 かばん に 入《はい》った まま でした。", "I thought I had posted the letter, but it was still in my bag."],
      ["週末《しゅうまつ》 は 掃除《そうじ》 を する つもり でした が、 一日中《いちにちじゅう》 寝《ね》て しまいました。", "I meant to clean at the weekend, but I ended up sleeping all day."],
      ["エレベーター を 使《つか》わないで、 階段《かいだん》 を 使《つか》う よう に して います。", "I make a point of taking the stairs instead of the lift."]
    ],
    quiz: [
      ["Fill the blank: 電話《でんわ》 に ＿ と した とき、 切《き》れて しまいました。 (Just as I was about to answer the phone, it stopped ringing.)", ["出《で》よう", "出《で》る", "出《で》て"], 0, "\"Be about to\" is the volitional form + と する."],
      ["娘《むすめ》 は 何《なに》 も 話《はな》そう と しません means:", ["My daughter tried to speak but couldn't.", "My daughter won't say anything at all.", "My daughter is about to say something."], 1, "〜よう と しない means the person makes no move to do it."],
      ["A patient believed they had locked the door, but it was open. Which sentence fits?", ["鍵《かぎ》 を かけよう と しました。", "鍵《かぎ》 を かける つもり です。", "鍵《かぎ》 を かけた つもり でした。"], 2, "た-form + つもり means the speaker believed they had done it."],
      ["Choose the particle: 毎朝《まいあさ》 体重《たいじゅう》 を 量《はか》る よう ＿ して います。 (I make a point of weighing myself every morning.)", ["と", "を", "に"], 2, "A habit or continuing effort is 〜よう に して いる."],
      ["Choose the natural sentence for \"I tried calling the clinic, and they had a free slot tomorrow.\"", ["クリニック に 電話《でんわ》 して みたら、 明日《あした》 空《あ》いて いました。", "クリニック に 電話《でんわ》 しよう と したら、 明日《あした》 空《あ》いて いました。", "クリニック に 電話《でんわ》 する つもり だったら、 明日《あした》 空《あ》いて いました。"], 0, "You actually called and found out, so 〜て みる; 〜よう と した means you did not get as far as calling."],
      ["〜よう と した usually tells you that the person:", ["did it every day as a habit", "set out to do it, often without success", "did it to see what would happen"], 1, "〜よう と した is an attempt; 〜て みた is a trial that was carried out."]
    ]
  },
  'koto-patterns': {
    mistakes: [
      ["子《こ》ども の とき、 一度《いちど》 入院《にゅういん》 する こと が あります。", "子《こ》ども の とき、 一度《いちど》 入院《にゅういん》 した こと が あります。", "A single past event (子《こ》ども の とき, 一度《いちど》) is experience: た-form + こと が ある; the dictionary form means \"sometimes\"."],
      ["そんな こと、 気《き》 に する の は ありません よ。", "そんな こと、 気《き》 に する こと は ありません よ。", "The reassuring pattern is fixed as こと は ない; の cannot replace こと here."],
      ["面会《めんかい》 は 八時《はちじ》 まで に 終《お》わる こと が なって います。", "面会《めんかい》 は 八時《はちじ》 まで に 終《お》わる こと に なって います。", "A rule is こと に なって いる, with に, not が."]
    ],
    more: [
      ["今《いま》 まで に、 大《おお》きな 病気《びょうき》 を した こと は あります か。", "Have you ever had a serious illness?"],
      ["気分《きぶん》 が 急《きゅう》に 変《か》わる こと は あります か。", "Does your mood ever change suddenly?"],
      ["無理《むり》 に 話《はな》す こと は ありません。 話《はな》せる こと だけ で 大丈夫《だいじょうぶ》 です。", "You don't have to force yourself to talk. Just what you can tell me is fine."],
      ["うち の 会社《かいしゃ》 で は、 休《やす》む とき は 朝《あさ》 九時《くじ》 まで に 連絡《れんらく》 する こと に なって います。", "At my company, if you take a day off you have to call in by nine in the morning."],
      ["週末《しゅうまつ》 は 仕事《しごと》 の メール を 見《み》ない こと に して います。", "I make it a rule not to look at work email at the weekend."],
      ["電車《でんしゃ》 が 止《と》まって いる なら、 今日《きょう》 は 行《い》けない と いう こと に なります ね。", "If the trains have stopped, that means we can't go today."]
    ],
    quiz: [
      ["Do you sometimes feel your heart pounding? 胸《むね》 が どきどき ＿ こと が あります か。", ["した", "する", "して"], 1, "\"Sometimes\" is dictionary form + こと が ある; the た-form would ask about experience."],
      ["そんな に 自分《じぶん》 を 責《せ》める こと は ありません means:", ["You don't need to blame yourself so much.", "You have never blamed yourself.", "You sometimes blame yourself."], 0, "Dictionary form + こと は ない reassures that something is not necessary."],
      ["A patient tells you about a rule set by the ward: phones are handed in at night. Which sentence fits?", ["夜《よる》 は 携帯《けいたい》 を 預《あず》ける こと に して います。", "夜《よる》 は 携帯《けいたい》 を 預《あず》けた こと が あります。", "夜《よる》 は 携帯《けいたい》 を 預《あず》ける こと に なって います。"], 2, "A rule set by others is こと に なって いる; こと に して いる would be the patient's own rule."],
      ["A patient keeps apologising for taking up your time. Which sentence reassures them?", ["遠慮《えんりょ》 した こと は ありません。", "遠慮《えんりょ》 する こと は ありません よ。", "遠慮《えんりょ》 する こと が あります よ。"], 1, "Dictionary form + こと は ない means \"there is no need to\"; the た-form means \"I have never\"."],
      ["Fill the blank: 朝《あさ》 も 昼《ひる》 も 食《た》べて いない なら、 今日《きょう》 は 何《なに》 も 食《た》べて いない ＿ ね。", ["と いう こと に なります", "こと が あります", "こと は ありません"], 0, "A plain sentence + と いう こと に なる draws a conclusion: \"so that means\"."],
      ["Which sentence means \"Have you ever been to Kyoto?\"", ["京都《きょうと》 に 行《い》く こと が あります か。", "京都《きょうと》 に 行《い》く こと に なって います か。", "京都《きょうと》 に 行《い》った こと が あります か。"], 2, "Experience is た-form + こと が ある; the first asks whether you sometimes go."]
    ]
  },
  'casual-speech': {
    mistakes: [
      ["大丈夫《だいじょうぶ》？ 薬《くすり》 飲《の》んでる？", "大丈夫《だいじょうぶ》 です か。 薬《くすり》 は 飲《の》んで います か。", "Grammatical but casual, said to a patient: a clinician understands casual speech and answers patients in です / ます."],
      ["その 本《ほん》、 もう 読《よ》んちゃった。", "その 本《ほん》、 もう 読《よ》んじゃった。", "After a て-form ending in で, 〜で しまう contracts to じゃう, not ちゃう."],
      ["もう 帰《かえ》るなきゃ。", "もう 帰《かえ》らなきゃ。", "〜なきゃ attaches to the ない-form stem: 帰《かえ》らない becomes 帰《かえ》らなきゃ."]
    ],
    more: [
      ["最近《さいきん》、 夜《よる》 ずっと 起《お》きてる ん だ。", "Lately I've been awake all night. Polite: 最近《さいきん》、 夜《よる》 ずっと 起《お》きて いる ん です。"],
      ["薬《くすり》 って、 ずっと 飲《の》まなきゃ いけない の？", "Do I have to keep taking the medicine forever? Polite: 薬《くすり》 は ずっと 飲《の》まなければ いけません か。"],
      ["次《つぎ》 の 診察《しんさつ》、 来週《らいしゅう》 の 月曜《げつよう》 だっけ？", "Was my next appointment next Monday? (checking something half-forgotten) Polite: 次《つぎ》 の 診察《しんさつ》 は 来週《らいしゅう》 の 月曜《げつよう》 でした か。"],
      ["傘《かさ》、 電車《でんしゃ》 に 忘《わす》れちゃった。", "I left my umbrella on the train. Polite: 傘《かさ》 を 電車《でんしゃ》 に 忘《わす》れて しまいました。"],
      ["明日《あした》、 雨《あめ》 降《ふ》る かな。", "I wonder if it'll rain tomorrow. Polite: 明日《あした》 は 雨《あめ》 が 降《ふ》る でしょう か。"],
      ["先《さき》 に 店《みせ》 を 予約《よやく》 しとく ね。", "I'll book the restaurant ahead, OK? Polite: 先《さき》 に 店《みせ》 を 予約《よやく》 して おきます ね。"]
    ],
    quiz: [
      ["読《よ》んどく is short for:", ["読《よ》んで おく", "読《よ》んで いる", "読《よ》んで しまう"], 0, "〜どく is the contraction of 〜で おく."],
      ["カウンセリング って 何《なに》 する の？ What does って do here?", ["It quotes what someone said.", "It raises the topic being asked about, like は.", "It means \"must\"."], 1, "って can replace は when the speaker raises a topic they are asking about."],
      ["The polite equivalent of 遅《おく》れちゃう is:", ["遅《おく》れて おきます", "遅《おく》れて います", "遅《おく》れて しまいます"], 2, "〜ちゃう is the casual form of 〜て しまう."],
      ["A patient says quietly 仕事《しごと》、 続《つづ》けられる かな. What is the patient doing?", ["Wondering, half to themselves, whether they can keep working", "Telling you they will certainly keep working", "Asking you to give them work"], 0, "〜かな expresses wondering, often half to oneself."],
      ["帰《かえ》らなくちゃ is short for:", ["帰《かえ》らないで は", "帰《かえ》らなくて は", "帰《かえ》らなくて も"], 1, "〜なくちゃ is the contraction of 〜なくて は (いけない): must."],
      ["顔色《かおいろ》 悪《わる》い ん じゃない？ said with rising intonation means:", ["Your colour is not bad.", "I don't look pale.", "You look pale, don't you?"], 2, "Rising じゃない？ invites agreement: \"isn't it so?\"."]
    ]
  },
  'written-style': {
    mistakes: [
      ["意欲《いよく》 が 低《ひく》い である。", "意欲《いよく》 が 低《ひく》い。", "An い-adjective is already a complete written predicate; である follows only nouns and な-adjectives."],
      ["検査《けんさ》 の 結果《けっか》 は 正常《せいじょう》 である。", "検査《けんさ》 の 結果《けっか》 は 正常《せいじょう》 です。", "Grammatical but である is written style; said to a patient, use です."],
      ["食事《しょくじ》 が 摂《と》れないず、 点滴《てんてき》 を 開始《かいし》 した。", "食事《しょくじ》 が 摂《と》れず、 点滴《てんてき》 を 開始《かいし》 した。", "The written negative link replaces ない with ず: 摂《と》れない becomes 摂《と》れず."]
    ],
    more: [
      ["入院後《にゅういんご》 は 睡眠《すいみん》 が 改善《かいぜん》 して おり、 表情《ひょうじょう》 も 穏《おだ》やか である。", "Since admission, sleep has improved, and facial expression is calm."],
      ["頭痛《ずつう》 の 訴《うった》え あり。 発熱《はつねつ》 なし。", "Complains of headache. No fever."],
      ["本人《ほんにん》 の 同意《どうい》 を 得《え》、 翌日《よくじつ》 より 作業《さぎょう》 療法《りょうほう》 に 参加《さんか》 予定《よてい》。", "Patient agreed; to join occupational therapy from the next day."],
      ["本日《ほんじつ》 の 受付《うけつけ》 は 午後《ごご》 五時《ごじ》 まで と なって おります。", "Reception today is open until 5 p.m. (a notice)"],
      ["東京《とうきょう》 は 日本《にほん》 の 首都《しゅと》 であり、 人口《じんこう》 も 最《もっと》も 多《おお》い。", "Tokyo is the capital of Japan and also has the largest population."],
      ["説明会《せつめいかい》 は 二階《にかい》 の 会議室《かいぎしつ》 にて 行《おこな》う。", "The information session will be held in the meeting room on the second floor."]
    ],
    quiz: [
      ["What is the written link for 不安《ふあん》 で、 (\"anxious, and ...\")?", ["不安《ふあん》 であり、", "不安《ふあん》 でし、", "不安《ふあん》 く、"], 0, "Nouns and な-adjectives link in writing with であり."],
      ["A note says 本人《ほんにん》 より 「頭《あたま》 が 痛《いた》い」 と の 訴《うった》え あり。 This means:", ["The patient was told that their head would hurt.", "The patient says their head hurts.", "The patient's head does not hurt."], 1, "〜と の 訴《うった》え あり records what the patient says."],
      ["What is the written stem link for 話《はな》して、?", ["話《はな》しり、", "話《はな》さ、", "話《はな》し、"], 2, "Written style links with the ます-stem: 話《はな》します gives 話《はな》し."],
      ["翌日《よくじつ》 means:", ["the next day", "today", "yesterday"], 0, "翌日《よくじつ》 is the formal word for 次《つぎ》 の 日《ひ》."],
      ["Which would you say to a patient?", ["明日《あした》 の 検査《けんさ》 は 中止《ちゅうし》 である。", "明日《あした》 の 検査《けんさ》 は 中止《ちゅうし》。", "明日《あした》 の 検査《けんさ》 は 中止《ちゅうし》 に なりました。"], 2, "である and the bare noun ending are written styles; speak to a patient in です / ます."],
      ["Choose the written form: 不眠《ふみん》 が 続《つづ》いて ＿、 日中《にっちゅう》 の 眠気《ねむけ》 も 強《つよ》い。", ["いり", "おり", "おる"], 1, "In writing 〜て いて becomes 〜て おり when the sentence continues."]
    ]
  }
});
