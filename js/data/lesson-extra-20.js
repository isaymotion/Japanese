/* Lesson extras part 20 (0.26.0): common mistakes, more examples and a "More practice" quiz for existing N2 lessons
   (n2-keigo-2, n2-tegami, n2-karute, n2-setsuzokushi, n2-wa-tomokaku, n2-wo-komete).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n2-keigo-2': {
    mistakes: [
      ["本日《ほんじつ》 は ご来院《らいいん》 いたし、 ありがとう ございます。", "本日《ほんじつ》 は ご来院《らいいん》 いただき、 ありがとう ございます。", "Coming is the other person's action, so it takes いただく; いたす is humble and only for your own action."],
      ["担当医《たんとうい》 は ただいま 席《せき》 を 外《はず》して いらっしゃいます。", "担当医《たんとうい》 は ただいま 席《せき》 を 外《はず》して おります。", "To an outside caller your colleague is on your side, so use humble おります, not honorific いらっしゃいます."],
      ["後《のち》ほど こちら から お電話《でんわ》 なさいます。", "後《のち》ほど こちら から お電話《でんわ》 いたします。", "Calling back is your own side's action, so it takes humble いたします; なさる is honorific and would raise yourself."]
    ],
    more: [
      ["お待《ま》たせ いたしました。 診察室《しんさつしつ》 へ ご案内《あんない》 いたします。", "Sorry to keep you waiting. I'll show you to the consultation room."],
      ["お手数《てすう》 です が、 次回《じかい》 は 保険証《ほけんしょう》 を お持《も》ち いただけます か。", "Sorry for the trouble, but could you bring your insurance card next time?"],
      ["差《さ》し支《つか》え なければ、 今《いま》 の お仕事《しごと》 に ついて 伺《うかが》って も よろしい でしょう か。", "If you don't mind, may I ask about your current work?"],
      ["申《もう》し訳《わけ》 ございません が、 本日《ほんじつ》 の 予約《よやく》 は すべて 埋《う》まって おります。", "I'm very sorry, but today's bookings are all full."],
      ["恐《おそ》れ入《い》ります が、 こちら で 少々《しょうしょう》 お待《ま》ち いただけます か。", "I'm sorry to trouble you, but could you wait here a moment?"],
      ["では、 私《わたし》 から の 説明《せつめい》 は 以上《いじょう》 と させて いただきます。", "With that, I'll end my explanation here, if I may."]
    ],
    quiz: [
      ["You (staff) are going to show a patient to the room. Which is correct?", ["ご案内《あんない》 いたします。", "ご案内《あんない》 いただきます。", "ご案内《あんない》 ください。"], 0, "Showing the way is your own action, so ご〜いたします; the other two would make it the patient's action."],
      ["担当医《たんとうい》 は 本日《ほんじつ》 学会《がっかい》 の ため 不在《ふざい》 に して おります。 means:", ["The doctor wants to go to a conference today.", "The doctor in charge is away today for a conference.", "The doctor in charge will be back from the conference today."], 1, "不在《ふざい》 に して おります is the humble \"is out\", said about your own side."],
      ["Face to face at the desk with an elderly patient, which request is warmest?", ["ご記入《きにゅう》 願《ねが》います。", "記入《きにゅう》 しろ。", "こちら に ご記入《きにゅう》 いただけます か。"], 2, "〜いただけます か asks gently; 願《ねが》います suits notices, and しろ is a blunt command."],
      ["Which cushion word fits before a refusal or bad news?", ["差《さ》し支《つか》え なければ", "申《もう》し訳《わけ》 ございません が", "お手数《てすう》 です が"], 1, "申《もう》し訳《わけ》 ございません が softens a refusal; the others come before a personal question or a request."],
      ["Checking a caller's identity: 失礼《しつれい》 です が、 鈴木《すずき》様《さま》 ＿ か。", ["で いらっしゃいます", "で 申《もう》します", "で おります"], 0, "For the listener use the honorific で いらっしゃいます; 申《もう》す and おる are humble and do not fit here."],
      ["Which 〜させて いただきます is natural, because the action needs the listener's permission?", ["私《わたし》 は 毎朝《まいあさ》 パン を 食《た》べさせて いただいて います。", "昨日《きのう》 は よく 寝《ね》させて いただきました。", "少《すこ》し お腹《なか》 を 触《さわ》らせて いただきます ね。"], 2, "Examining the patient's body needs their consent; eating breakfast or sleeping does not."]
    ]
  },
  'n2-tegami': {
    mistakes: [
      ["先生《せんせい》 も 存《ぞん》じて おります とおり、 来月《らいげつ》 から 外来《がいらい》 の 受付《うけつけ》 時間《じかん》 が 変《か》わります。", "先生《せんせい》 も ご存《ぞん》じ の とおり、 来月《らいげつ》 から 外来《がいらい》 の 受付《うけつけ》 時間《じかん》 が 変《か》わります。", "存《ぞん》じる is humble and only for the writer; the reader's knowing is ご存《ぞん》じ."],
      ["ご確認《かくにん》 する ほど、 よろしく お願《ねが》い いたします。", "ご確認《かくにん》 の ほど、 よろしく お願《ねが》い いたします。", "In this request ほど follows a noun with の, not a verb."],
      ["つきまして は、 当院《とういん》 にて ご高診《こうしん》 いただけます と 幸《さいわ》い です。", "つきまして は、 貴院《きいん》 にて ご高診《こうしん》 いただけます と 幸《さいわ》い です。", "The receiving doctor examines at their own hospital, which the writer calls 貴院《きいん》; 当院《とういん》 is the writer's hospital."]
    ],
    more: [
      ["このたび は 吉田《よしだ》様《さま》 の 件《けん》 で ご丁寧《ていねい》 な お返事《へんじ》 を いただき、 誠《まこと》 に ありがとう ございました。", "Thank you very much for your kind reply about Mr Yoshida."],
      ["診療《しんりょう》 情報《じょうほう》 提供書《ていきょうしょ》 を 同封《どうふう》 いたします ので、 ご確認《かくにん》 の ほど よろしく お願《ねが》い 申《もう》し上《あ》げます。", "I enclose the clinical information letter and would be grateful if you could check it."],
      ["退院後《たいいんご》 の 治療《ちりょう》 に つきまして は、 貴院《きいん》 にて 引《ひ》き続《つづ》き ご加療《かりょう》 いただけます と 幸《さいわ》い です。", "As for treatment after discharge, I would be grateful if you could continue it at your hospital."],
      ["ご多忙《たぼう》 の こと と 存《ぞん》じます が、 ご出席《しゅっせき》 いただけます と 幸《さいわ》い です。", "I know you are very busy, but I would be grateful if you could attend."],
      ["拝啓《はいけい》 秋《あき》 も 深《ふか》まって まいりました が、 いかが お過《す》ごし でしょう か。", "Dear ..., as autumn deepens, I hope you are keeping well."],
      ["会議《かいぎ》 の 日程《にってい》 に つきまして、 以下《いか》 の とおり ご連絡《れんらく》 いたします。", "I am writing to let you know the meeting schedule, as follows."]
    ],
    quiz: [
      ["Which closing word pairs with 前略《ぜんりゃく》?", ["敬具《けいぐ》", "謹白《きんぱく》", "草々《そうそう》"], 2, "前略《ぜんりゃく》 … 草々《そうそう》 is the pair for a short letter; 敬具《けいぐ》 closes 拝啓《はいけい》 and 謹白《きんぱく》 closes 謹啓《きんけい》."],
      ["In a referral letter, what does the writer call the receiving doctor's hospital?", ["貴院《きいん》", "当院《とういん》", "御中《おんちゅう》"], 0, "貴院《きいん》 is \"your hospital\"; 当院《とういん》 is the writer's own, and 御中《おんちゅう》 follows an organisation's name on an address."],
      ["入院中《にゅういんちゅう》 の 経過《けいか》 ＿、 別紙《べっし》 に まとめました。", ["と 存《ぞん》じます", "に つきまして は", "の ほど"], 1, "に つきまして は is the formal \"as for, regarding\" before a noun topic."],
      ["Sentence-initial つきまして は, just before the request, means:", ["in view of this, therefore", "by the way", "on the other hand"], 0, "At the start of a sentence つきまして は leads from the situation to the request."],
      ["Which line asks a colleague gently to reply by Friday?", ["金曜日《きんようび》 まで に 返事《へんじ》 しろ。", "金曜日《きんようび》 まで に ご返信《へんしん》 いただけます と 幸《さいわ》い です。", "金曜日《きんようび》 まで に ご返信《へんしん》 いたします。"], 1, "〜いただけます と 幸《さいわ》い です is a gentle request; いたします says the writer will reply."],
      ["Which phrase is very formal and only to be understood, not used in a resident's everyday email?", ["よろしく お願《ねが》い いたします", "お世話《せわ》 に なって おります", "格別《かくべつ》 の ご高配《こうはい》 を 賜《たまわ》り"], 2, "格別《かくべつ》 の ご高配《こうはい》 を 賜《たまわ》り belongs to very formal letters; the other two are the usual email phrases."]
    ]
  },
  'n2-karute': {
    mistakes: [
      ["手指《しゅし》 の 振戦《しんせん》 が 認《みと》める。", "手指《しゅし》 の 振戦《しんせん》 を 認《みと》める。", "In chart style the finding is the object of 認《みと》める and takes を, not が."],
      ["移動《いどう》 時《じ》 は 見守《みまも》り が 要《よう》する。", "移動《いどう》 時《じ》 は 見守《みまも》り を 要《よう》する。", "要《よう》する is transitive, so what is needed takes を."],
      ["診察《しんさつ》 では、 特《とく》 に 異常《いじょう》 を 認《みと》めません でした よ。", "診察《しんさつ》 では、 特《とく》 に 異常《いじょう》 は 見《み》られません でした よ。", "Grammatical but 〜を 認《みと》める is document language; to a patient say 〜は 見《み》られません."]
    ],
    more: [
      ["日中《にっちゅう》 は 臥床《がしょう》 傾向《けいこう》 に あり、 活動性《かつどうせい》 の 低下《ていか》 を 認《みと》める。", "Tends to stay in bed during the day; reduced activity observed."],
      ["妻《つま》 より、 最近《さいきん》 は 食事量《しょくじりょう》 が 増《ふ》えて きた との こと。", "According to his wife, he has recently been eating more."],
      ["夜間《やかん》 の 不眠《ふみん》 は 日中《にっちゅう》 の 長《なが》い 昼寝《ひるね》 に よる もの と 考《かんが》えられる。", "The night-time insomnia is thought to be due to long daytime naps."],
      ["説明会《せつめいかい》 の 参加者《さんかしゃ》 は 十名《じゅうめい》 のみ で あった。", "Only ten people attended the information session."],
      ["近年《きんねん》、 若者《わかもの》 の 読書《どくしょ》 時間《じかん》 は 減少《げんしょう》 傾向《けいこう》 に ある。", "In recent years, young people's reading time has been decreasing."],
      ["この 工事《こうじ》 に は 約《やく》 三《さん》か月《げつ》 を 要《よう》する 見込《みこ》み で ある。", "This construction work is expected to take about three months."]
    ],
    quiz: [
      ["家族《かぞく》 より、 本人《ほんにん》 は 自宅《じたく》 で よく 笑《わら》う よう に なった との こと。 means:", ["Staff saw the patient laughing at home.", "The family reports that the patient has started laughing more at home.", "The patient says the family laughs more these days."], 1, "より names the source, the family, and 〜との こと marks what they reported."],
      ["Which is the written equivalent of 〜だけ (only)?", ["〜のみ", "〜との こと", "〜を 要《よう》する"], 0, "〜のみ is the written だけ."],
      ["Which line gives the writer's judgement?", ["表情《ひょうじょう》 は 穏《おだ》やか。", "妻《つま》 より、 よく 眠《ねむ》れて いる との こと。", "不安《ふあん》 は 軽減《けいげん》 して いる と 思《おも》われる。"], 2, "〜と 思《おも》われる presents the writer's cautious assessment; the others are an observation and a report."],
      ["At a case conference you give your assessment aloud. Which do you SAY?", ["抑《よく》うつ 状態《じょうたい》 との こと。", "抑《よく》うつ 状態《じょうたい》 と 考《かんが》えられます。", "抑《よく》うつ 状態《じょうたい》 を 認《みと》めず。"], 1, "〜と 考《かんが》えられます is the spoken way to give an assessment; the other two are chart lines with other meanings."],
      ["経過《けいか》 観察《かんさつ》 を 要《よう》する。 means:", ["Follow-up observation is needed.", "Observation has been completed.", "The patient refuses observation."], 0, "〜を 要《よう》する means \"needs, requires\"."],
      ["幻聴《げんちょう》 は 否定《ひてい》。 means:", ["Staff confirmed that the patient hears voices.", "The family reports that the patient hears voices.", "The patient denies hearing voices."], 2, "In a chart 否定《ひてい》 records that the patient, when asked, says no."]
    ]
  },
  'n2-setsuzokushi': {
    mistakes: [
      ["症状《しょうじょう》 は 落《お》ち着《つ》いて います。 ところが、 お薬《くすり》 は 続《つづ》けて ください。", "症状《しょうじょう》 は 落《お》ち着《つ》いて います。 しかし、 お薬《くすり》 は 続《つづ》けて ください。", "ところが introduces an unexpected fact and cannot be followed by a request; しかし can."],
      ["年齢《ねんれい》 が 上《あ》がる したがって、 眠《ねむ》り が 浅《あさ》く なる。", "年齢《ねんれい》 が 上《あ》がる に したがって、 眠《ねむ》り が 浅《あさ》く なる。", "Inside a sentence, \"as X changes\" needs に したがって; bare したがって starts a new sentence."],
      ["睡眠《すいみん》 が 足《た》りて いない よう です。 それゆえ、 今夜《こんや》 は 早《はや》め に 休《やす》みましょう。", "睡眠《すいみん》 が 足《た》りて いない よう です。 ですから、 今夜《こんや》 は 早《はや》め に 休《やす》みましょう。", "Grammatical but それゆえ belongs to papers; to a patient say ですから."]
    ],
    more: [
      ["検査《けんさ》 の 結果《けっか》 に 異常《いじょう》 は ありません でした。 したがって、 今回《こんかい》 は 経過《けいか》 を 見《み》る こと に します。", "The test results showed nothing abnormal. Therefore, this time we will watch how things go."],
      ["外泊《がいはく》 は 可能《かのう》 です。 ただし、 主治医《しゅじい》 の 許可《きょか》 が 必要《ひつよう》 です。", "An overnight stay at home is possible. However, you need your doctor's permission."],
      ["本日《ほんじつ》 の 面談《めんだん》 は 三十分《さんじゅっぷん》 を 予定《よてい》 して おります。 なお、 途中《とちゅう》 で 休憩《きゅうけい》 を とる こと も できます。", "Today's meeting is planned for thirty minutes. Please note that you can also take a break partway through."],
      ["週末《しゅうまつ》 は 晴《は》れる 予報《よほう》 でした。 ところが、 土曜日《どようび》 の 朝《あさ》 から 大雨《おおあめ》 に なりました。", "The forecast said it would be fine at the weekend. But from Saturday morning it poured."],
      ["彼《かれ》 は 母《はは》 の 弟《おとうと》、 すなわち 私《わたし》 の 叔父《おじ》 です。", "He is my mother's younger brother, that is, my uncle."],
      ["都会《とかい》 は 便利《べんり》 だ。 一方《いっぽう》、 家賃《やちん》 が 高《たか》い と いう 問題《もんだい》 も ある。", "The city is convenient. On the other hand, there is the problem of high rent."]
    ],
    quiz: [
      ["最近《さいきん》 は 調子《ちょうし》 が いい です。 ＿、 疲《つか》れやすさ は まだ 少《すこ》し 残《のこ》って います が。", ["すなわち", "したがって", "もっとも"], 2, "もっとも adds the speaker's own reservation, often ending in が; the others restate or draw a result."],
      ["この 病棟《びょうとう》 は、 いわば 一《ひと》つ の 家族《かぞく》 の よう な もの です。 means:", ["This ward is, so to speak, like one family.", "This ward is literally one family's home.", "This ward is therefore a family."], 0, "いわば introduces a comparison: \"so to speak\"."],
      ["At the end of a case presentation you add a separate point to note. Which connector?", ["それゆえ", "なお", "ところが"], 1, "Sentence-initial なお adds a supplementary note and is safe in presentations."],
      ["台風《たいふう》 が 接近《せっきん》 して いる。 ＿、 明日《あした》 の 行事《ぎょうじ》 は 中止《ちゅうし》 と する。", ["ところが", "すなわち", "したがって"], 2, "The cancellation is the logical result of the typhoon, so したがって."],
      ["A patient has explained at length. Which is the gentlest way to check you understood?", ["要《よう》する に、 眠《ねむ》れない ん です ね。", "つまり、 夜《よる》 眠《ねむ》れない と いう こと です か。", "それゆえ、 眠《ねむ》れない。"], 1, "要《よう》する に can sound as if you are cutting the patient short, and それゆえ is written; つまり … と いう こと です か is gentler."],
      ["本人《ほんにん》 は 退院《たいいん》 を 望《のぞ》んで いる。 ＿、 家族《かぞく》 は まだ 早《はや》い と 考《かんが》えて いる。", ["一方《いっぽう》", "したがって", "すなわち"], 0, "一方《いっぽう》 sets a second view beside the first; したがって would make it a result and すなわち a restatement."]
    ]
  },
  'n2-wa-tomokaku': {
    mistakes: [
      ["勉強《べんきょう》 は ともかく、 運動《うんどう》 も 得意《とくい》 です。", "勉強《べんきょう》 は もちろん、 運動《うんどう》 も 得意《とくい》 です。", "も shows that X is included too, so it needs 〜は もちろん; 〜は ともかく sets X aside."],
      ["祝日《しゅくじつ》 が 除《のぞ》いて、 毎日《まいにち》 外来《がいらい》 が あります。", "祝日《しゅくじつ》 を 除《のぞ》いて、 毎日《まいにち》 外来《がいらい》 が あります。", "除《のぞ》く is transitive, so the excluded thing takes を."],
      ["看護師《かんごし》 の 支《ささ》え を 抜《ぬ》き に して は、 この 治療《ちりょう》 は 続《つづ》けられます。", "看護師《かんごし》 の 支《ささ》え を 抜《ぬ》き に して は、 この 治療《ちりょう》 は 続《つづ》けられません。", "〜を 抜《ぬ》き に して は must be followed by a negative or \"difficult\"."]
    ],
    more: [
      ["入院《にゅういん》 する か どう か は 別《べつ》 と して、 まず 一度《いちど》 外来《がいらい》 で お話《はなし》 を 聞《き》かせて ください。", "Whether or not you are admitted is a separate matter; first, please let us hear about it once in outpatients."],
      ["細《こま》かい 日付《ひづけ》 は ともかく、 眠《ねむ》れなく なった の は 春《はる》 ごろ です か。", "Never mind the exact date; was it around spring that you stopped sleeping well?"],
      ["血液《けつえき》 検査《けんさ》 を 除《のぞ》き、 本日《ほんじつ》 の 検査《けんさ》 は すべて 終了《しゅうりょう》 した。", "Except for the blood tests, all of today's tests have been completed."],
      ["それ は さておき、 来週《らいしゅう》 の 旅行《りょこう》 の 予定《よてい》 は 決《き》まった?", "Anyway, leaving that aside, have you decided on the plans for next week's trip?"],
      ["コーヒー を 砂糖《さとう》抜《ぬ》き で お願《ねが》い します。", "A coffee without sugar, please."],
      ["値段《ねだん》 は ともかく、 この 靴《くつ》 は とても 歩《ある》きやすい。", "Price aside, these shoes are very comfortable to walk in."]
    ],
    quiz: [
      ["彼《かれ》 の 協力《きょうりょく》 を 抜《ぬ》き に して は、 この 計画《けいかく》 は ＿。", ["成功《せいこう》 しない だろう", "必《かなら》ず 成功《せいこう》 する", "成功《せいこう》 した ばかり だ"], 0, "〜を 抜《ぬ》き に して は is followed by a negative: without X it will not work."],
      ["費用《ひよう》 は 別《べつ》 と して、 一度《いちど》 見学《けんがく》 に 行《い》って みましょう。 means:", ["Because of the cost, let's go and look once.", "Leaving the cost aside for now, let's go and have a look once.", "Including the cost, let's go and look once."], 1, "〜は 別《べつ》 と して treats X as a separate matter for later."],
      ["You want to move from small talk to the main matter. Which do you say?", ["それ は もちろん、", "それ を 除《のぞ》いて、", "それ は さておき、"], 2, "それ は さておき moves the talk on; the other two mean \"of course\" and \"except that\"."],
      ["Which form is typical of written notices for \"except\"?", ["〜を 除《のぞ》き", "〜抜《ぬ》き で", "〜は さておき"], 0, "The stem 除《のぞ》き is the written form; 抜《ぬ》き で means \"without\" and さておき \"leaving aside\"."],
      ["Ordering ramen with no spring onion: which sentence is natural?", ["ねぎ は さておき で ラーメン を 注文《ちゅうもん》 した。", "ねぎ抜《ぬ》き で ラーメン を 注文《ちゅうもん》 した。", "ねぎ を 除《のぞ》く で ラーメン を 注文《ちゅうもん》 した。"], 1, "〜抜《ぬ》き で attaches to a noun and means \"without\"; the other two are not grammatical."],
      ["結果《けっか》 が どう なる か ＿、 まず やって みる こと が 大切《たいせつ》 です。", ["を 抜《ぬ》き に して は", "を 除《のぞ》いて", "は ともかく"], 2, "A question clause + は ともかく sets the outcome aside to stress trying."]
    ]
  },
  'n2-wo-komete': {
    mistakes: [
      ["時間《じかん》 を こめて 手紙《てがみ》 を 書《か》きました。", "時間《じかん》 を かけて 手紙《てがみ》 を 書《か》きました。", "こめる needs a feeling or wish; for time spent, use 時間《じかん》 を かける."],
      ["駅《えき》 に 行《い》く に つけ、 切符《きっぷ》 を 買《か》います。", "駅《えき》 に 行《い》く たび に、 切符《きっぷ》 を 買《か》います。", "〜に つけ needs seeing, hearing or thinking with a feeling after it; for any repeated action use 〜たび に."],
      ["息子《むすこ》 の こと が 心配《しんぱい》 して なりません。", "息子《むすこ》 の こと が 心配《しんぱい》 で なりません。", "With が, 心配《しんぱい》 is the feeling noun, so it takes で なりません, not the verb 心配《しんぱい》 して."]
    ],
    more: [
      ["母《はは》 の 寝顔《ねがお》 を 見《み》る に つけ、 もっと そば に いて あげたい と 思《おも》います。", "Whenever I see my mother's sleeping face, I wish I could be with her more. (a family member)"],
      ["眠《ねむ》れない とき は、 どんな ふう に 過《す》ごして います か。", "When you can't sleep, how do you spend the time? (in the interview)"],
      ["将来《しょうらい》 の こと が 不安《ふあん》 で なりません。", "I can't stop worrying about the future. (a patient)"],
      ["感謝《かんしゃ》 の 気持《きも》ち を こめて、 先生《せんせい》 に 花束《はなたば》 を 贈《おく》りました。", "We gave our teacher a bouquet to show our gratitude."],
      ["この 曲《きょく》 を 聞《き》く に つけ、 学生《がくせい》 時代《じだい》 を 思《おも》い出《だ》します。", "Whenever I hear this song, I remember my student days."],
      ["今日《きょう》 は 中華風《ちゅうかふう》 の スープ を 作《つく》って みました。", "Today I tried making a Chinese-style soup."]
    ],
    quiz: [
      ["母《はは》 は 何《なに》 か ＿ つけて 私《わたし》 の こと を 心配《しんぱい》 して くれる。", ["を", "に", "で"], 1, "何《なに》 か に つけて is the set phrase \"at every opportunity\"."],
      ["愛情《あいじょう》 を こめた 料理《りょうり》 means:", ["food cooked with love", "food made without love", "food that everyone loves"], 0, "〜を こめた + noun: a thing made with that feeling put into it."],
      ["Chatting casually with a friend, which says \"I'm so nervous I can't stand it\"?", ["緊張《きんちょう》 を こめて いる", "緊張《きんちょう》 に つけ", "緊張《きんちょう》 して しょう が ない"], 2, "〜て しょう が ない is the casual \"so … I can't help it\"; the other two are not used this way."],
      ["Which sentence uses こめる naturally?", ["お金《かね》 を こめて プレゼント を 買《か》った。", "願《ねが》い を こめて お守《まも》り を 渡《わた》した。", "雨《あめ》 を こめて 傘《かさ》 を さした。"], 1, "こめる goes with a feeling or wish such as 願《ねが》い, not with ordinary things."],
      ["洋風《ようふう》 の 部屋《へや》 means:", ["a Western-style room", "a room facing the ocean", "a windy room"], 0, "Noun + 風《ふう》 means \"in the style of\"; 洋風《ようふう》 is Western-style."],
      ["もっと 話《はなし》 を 聞《き》いて あげれば よかった と 悔《く》やまれて ＿。", ["こめません", "つけません", "なりません"], 2, "The spontaneous 悔《く》やまれて + なりません means \"I cannot help regretting\"."]
    ]
  }
});
