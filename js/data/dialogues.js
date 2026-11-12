/* Dialogues for the Speaking page (listen, shadow, role-play). DRAFT FOR REVIEW by a native Japanese speaker.
   DIALOGUES = [{ id, level, title (English), roles: ['You (…)', 'Other'], you: 0, lines: [[speakerIndex, japanese, english]] }] */
window.DIALOGUES = [
  {
    id: 'hajimemashite', level: 'Starter', title: "Meeting a colleague",
    roles: ['You (new doctor)', 'Dr. Suzuki'], you: 0,
    lines: [
      [1, "はじめまして。 鈴木《すずき》 です。", "Nice to meet you. I'm Suzuki."],
      [0, "はじめまして。 サントス です。 フィリピン から 来《き》ました。", "Nice to meet you. I'm Santos. I came from the Philippines."],
      [1, "そう です か。 サントス先生《せんせい》 は 何科《なにか》 です か。", "I see. Which department are you in, Dr. Santos?"],
      [0, "精神科《せいしんか》 です。 鈴木《すずき》先生《せんせい》 も 精神科《せいしんか》 です か。", "Psychiatry. Are you in psychiatry too, Dr. Suzuki?"],
      [1, "はい、 そう です。 よろしく お願《ねが》いします。", "Yes, I am. I look forward to working with you."],
      [0, "こちら こそ、 よろしく お願《ねが》いします。", "Likewise, I look forward to working with you."],
      [1, "日本語《にほんご》 が 上手《じょうず》 です ね。", "Your Japanese is good."],
      [0, "いいえ、 まだ まだ です。 毎日《まいにち》 勉強《べんきょう》して います。", "No, I still have a long way to go. I study every day."],
      [1, "わからない こと は 何《なん》 でも 聞《き》いて ください ね。", "Please ask me anything you don't understand."],
      [0, "ありがとう ございます。", "Thank you very much."]
    ]
  },
  {
    id: 'uketsuke', level: 'N5', title: "At the clinic reception desk",
    roles: ['You (receptionist)', 'Patient'], you: 0,
    lines: [
      [1, "おはよう ございます。 はじめて です。", "Good morning. This is my first visit."],
      [0, "おはよう ございます。 保険証《ほけんしょう》 を お願《ねが》いします。", "Good morning. Your insurance card, please."],
      [1, "はい、 どうぞ。", "Here you are."],
      [0, "ありがとう ございます。 お名前《なまえ》 を お願《ねが》いします。", "Thank you. Your name, please."],
      [1, "田中《たなか》 ゆみ です。", "Yumi Tanaka."],
      [0, "田中《たなか》さん です ね。 この 紙《かみ》 に 住所《じゅうしょ》 と 電話番号《でんわばんごう》 を 書《か》いて ください。", "Ms. Tanaka. Please write your address and phone number on this form."],
      [1, "はい。 ペン は あります か。", "All right. Do you have a pen?"],
      [0, "はい、 こちら を どうぞ。", "Yes, please use this one."],
      [1, "書《か》きました。", "I've written it."],
      [0, "ありがとう ございます。 あちら で 少《すこ》し お待《ま》ち ください。", "Thank you. Please wait over there for a little while."],
      [1, "どの ぐらい 待《ま》ちます か。", "How long will I wait?"],
      [0, "二十分《にじゅっぷん》 ぐらい です。 お名前《なまえ》 を お呼《よ》び します。", "About twenty minutes. We will call your name."]
    ]
  },
  {
    id: 'michi', level: 'N5', title: "Asking the way to the pharmacy",
    roles: ['You (visitor)', 'Passer-by'], you: 0,
    lines: [
      [0, "すみません。 この 近《ちか》く に 薬局《やっきょく》 は あります か。", "Excuse me. Is there a pharmacy near here?"],
      [1, "薬局《やっきょく》 です か。 はい、 あります よ。", "A pharmacy? Yes, there is."],
      [0, "どこ に あります か。", "Where is it?"],
      [1, "この 道《みち》 を まっすぐ 行《い》って ください。", "Please go straight along this street."],
      [0, "まっすぐ です ね。", "Straight ahead, right."],
      [1, "はい。 二《ふた》つ目《め》 の 信号《しんごう》 を 右《みぎ》 に 曲《ま》がって ください。", "Yes. Turn right at the second traffic light."],
      [0, "二《ふた》つ目《め》 の 信号《しんごう》 を 右《みぎ》 です ね。", "Right at the second light."],
      [1, "そう です。 銀行《ぎんこう》 の 隣《となり》 に あります。", "That's right. It's next to the bank."],
      [0, "ここ から 遠《とお》い です か。", "Is it far from here?"],
      [1, "いいえ、 歩《ある》いて 五分《ごふん》 ぐらい です。", "No, it's about five minutes on foot."],
      [0, "わかりました。 ありがとう ございます。", "I see. Thank you very much."],
      [1, "どういたしまして。", "You're welcome."]
    ]
  },
  {
    id: 'kaimono', level: 'N5', title: "Buying something at a shop",
    roles: ['You (customer)', 'Shop clerk'], you: 0,
    lines: [
      [1, "いらっしゃいませ。", "Welcome."],
      [0, "すみません、 傘《かさ》 は どこ です か。", "Excuse me, where are the umbrellas?"],
      [1, "傘《かさ》 は あちら の 入《い》り口《ぐち》 の 近《ちか》く に あります。", "The umbrellas are over there, near the entrance."],
      [0, "ありがとう ございます。 この 青《あお》い 傘《かさ》 は いくら です か。", "Thank you. How much is this blue umbrella?"],
      [1, "八百円《はっぴゃくえん》 です。", "It's 800 yen."],
      [0, "じゃ、 これ を ください。 それから、 水《みず》 も 一本《いっぽん》 お願《ねが》いします。", "Then I'll take this. And one bottle of water too, please."],
      [1, "はい。 全部《ぜんぶ》 で 九百二十円《きゅうひゃくにじゅうえん》 です。 袋《ふくろ》 は いります か。", "Certainly. That's 920 yen altogether. Do you need a bag?"],
      [0, "いいえ、 いりません。 カード で いい です か。", "No, I don't. Is a card all right?"],
      [1, "はい、 大丈夫《だいじょうぶ》 です。 こちら に カード を どうぞ。", "Yes, that's fine. Please put your card here."],
      [0, "はい。", "OK."],
      [1, "ありがとう ございました。 レシート です。", "Thank you very much. Here is your receipt."],
      [0, "どうも。", "Thanks."]
    ]
  },
  {
    id: 'resutoran', level: 'N5', title: "Ordering at a restaurant",
    roles: ['You (customer)', 'Server'], you: 0,
    lines: [
      [1, "いらっしゃいませ。 何名様《なんめいさま》 です か。", "Welcome. How many people?"],
      [0, "二人《ふたり》 です。", "Two."],
      [1, "こちら へ どうぞ。 メニュー です。", "This way, please. Here is the menu."],
      [0, "すみません、 おすすめ は 何《なん》 です か。", "Excuse me, what do you recommend?"],
      [1, "天《てん》ぷら 定食《ていしょく》 が 人気《にんき》 です。", "The tempura set meal is popular."],
      [0, "じゃ、 天《てん》ぷら 定食《ていしょく》 を 二《ふた》つ お願《ねが》いします。", "Then two tempura set meals, please."],
      [1, "お飲《の》み物《もの》 は いかが です か。", "Would you like something to drink?"],
      [0, "お茶《ちゃ》 を 二《ふた》つ ください。", "Two teas, please."],
      [1, "かしこまりました。 少々《しょうしょう》 お待《ま》ち ください。", "Certainly. Please wait a moment."],
      [0, "すみません、 お会計《かいけい》 を お願《ねが》いします。", "Excuse me, the bill, please."],
      [1, "はい。 三千二百円《さんぜんにひゃくえん》 です。", "Certainly. That's 3,200 yen."],
      [0, "ごちそうさま でした。 おいしかった です。", "Thank you for the meal. It was delicious."]
    ]
  },
  {
    id: 'meet-patient', level: 'N5', title: "Meeting a new patient and her husband",
    roles: ['You (doctor)', 'Patient (Ms. Kato)'], you: 0,
    lines: [
      [0, "こんにちは。 精神科《せいしんか》 の サントス です。 よろしく お願《ねが》いします。", "Hello. I'm Dr. Santos from psychiatry. Nice to meet you."],
      [1, "こんにちは。 よろしく お願《ねが》いします。", "Hello. Nice to meet you."],
      [0, "お名前《なまえ》 を 教《おし》えて いただけます か。", "Could you tell me your name?"],
      [1, "加藤《かとう》 恵子《けいこ》 です。", "Keiko Kato."],
      [0, "加藤《かとう》さん と お呼《よ》び して も いい です か。", "May I call you Ms. Kato?"],
      [1, "はい、 それ で 大丈夫《だいじょうぶ》 です。", "Yes, that's fine."],
      [0, "ありがとう ございます。 今日《きょう》 は どなた と 一緒《いっしょ》 に 来《こ》られました か。", "Thank you. Who came with you today?"],
      [1, "夫《おっと》 と 来《き》ました。 こちら が 夫《おっと》 です。", "I came with my husband. This is my husband."],
      [0, "はじめまして。 今日《きょう》 は 来《き》て くださって、 ありがとう ございます。", "Nice to meet you. Thank you for coming today."],
      [1, "夫《おっと》 は 外《そと》 で 待《ま》って いて も いい です か。", "May my husband wait outside?"],
      [0, "はい。 まず 加藤《かとう》さん と 二人《ふたり》 で 話《はな》して、 後《あと》 で ご主人《しゅじん》 に も お話《はなし》 を 聞《き》きます ね。", "Yes. First I'll talk with you alone, and later I'll also hear from your husband."],
      [1, "わかりました。 お願《ねが》いします。", "I understand. Thank you."]
    ]
  },
  {
    id: 'suimin', level: 'N5', title: "Asking about sleep",
    roles: ['You (doctor)', 'Patient'], you: 0,
    lines: [
      [0, "夜《よる》 は よく 眠《ねむ》れて います か。", "Are you sleeping well at night?"],
      [1, "いいえ、 あまり 眠《ねむ》れません。", "No, I can't sleep very well."],
      [0, "そう です か。 何時《なんじ》 ごろ 寝《ね》ます か。", "I see. Around what time do you go to bed?"],
      [1, "十一時《じゅういちじ》 ごろ です。", "Around eleven."],
      [0, "すぐ 眠《ねむ》れます か。", "Can you fall asleep right away?"],
      [1, "いいえ。 一時間《いちじかん》 ぐらい 眠《ねむ》れません。", "No. I can't fall asleep for about an hour."],
      [0, "夜中《よなか》 に 目《め》 が 覚《さ》めます か。", "Do you wake up in the middle of the night?"],
      [1, "はい、 二回《にかい》 か 三回《さんかい》 目《め》 が 覚《さ》めます。", "Yes, I wake up two or three times."],
      [0, "朝《あさ》 は 何時《なんじ》 に 起《お》きます か。", "What time do you get up in the morning?"],
      [1, "六時《ろくじ》 です。 でも、 朝《あさ》 も 疲《つか》れて います。", "At six. But I'm tired in the morning too."],
      [0, "いつ から です か。", "Since when has this been happening?"],
      [1, "一《いっ》か月《げつ》 ぐらい 前《まえ》 から です。", "Since about a month ago."]
    ]
  },
  {
    id: 'shokuyoku-kibun', level: 'N4', title: "Asking about appetite and mood",
    roles: ['You (doctor)', 'Patient'], you: 0,
    lines: [
      [0, "食欲《しょくよく》 は どう です か。", "How is your appetite?"],
      [1, "あまり ありません。", "I don't have much of one."],
      [0, "一日《いちにち》 に 何回《なんかい》 食事《しょくじ》 を して います か。", "How many meals a day are you eating?"],
      [1, "一回《いっかい》 か 二回《にかい》 です。 少《すこ》し しか 食《た》べられません。", "One or two. I can only eat a little."],
      [0, "体重《たいじゅう》 は 変《か》わりました か。", "Has your weight changed?"],
      [1, "はい、 二《に》か月《げつ》 で 三《さん》キロ ぐらい 減《へ》りました。", "Yes, I've lost about three kilos in two months."],
      [0, "そう です か。 気分《きぶん》 は いかが です か。", "I see. How is your mood?"],
      [1, "毎日《まいにち》 気分《きぶん》 が 重《おも》い です。", "I feel heavy-hearted every day."],
      [0, "前《まえ》 に 楽《たの》しかった こと は、 今《いま》 も 楽《たの》しめます か。", "Can you still enjoy the things you used to enjoy?"],
      [1, "いいえ。 好《す》きな 音楽《おんがく》 を 聞《き》いて も、 楽《たの》しく ありません。", "No. Even when I listen to music I like, it isn't enjoyable."],
      [0, "話《はな》して くださって、 ありがとう ございます。 つらい です ね。", "Thank you for telling me. That sounds hard."],
      [1, "はい。 少《すこ》し 話《はな》せて、 よかった です。", "Yes. I'm glad I could talk a little."]
    ]
  },
  {
    id: 'kusuri-kakunin', level: 'N4', title: "Checking medicine and side effects",
    roles: ['You (doctor)', 'Patient'], you: 0,
    lines: [
      [0, "お薬《くすり》 は 毎日《まいにち》 飲《の》んで います か。", "Are you taking your medicine every day?"],
      [1, "はい、 だいたい 飲《の》んで います。", "Yes, mostly."],
      [0, "飲《の》み忘《わす》れる こと は あります か。", "Do you ever forget to take it?"],
      [1, "週《しゅう》 に 一回《いっかい》 ぐらい、 夜《よる》 の 薬《くすり》 を 忘《わす》れます。", "About once a week I forget the evening dose."],
      [0, "そう です か。 飲《の》み始《はじ》めて から、 何《なに》 か 気《き》 に なる こと は あります か。", "I see. Since you started it, is there anything that has bothered you?"],
      [1, "朝《あさ》、 少《すこ》し 眠《ねむ》い です。 それから、 口《くち》 が 乾《かわ》きます。", "I'm a little sleepy in the morning. Also, my mouth gets dry."],
      [0, "眠気《ねむけ》 で 仕事《しごと》 に 困《こま》る こと は あります か。", "Does the sleepiness cause problems at work?"],
      [1, "いいえ、 昼《ひる》 に は 大丈夫《だいじょうぶ》 に なります。", "No, it's fine by midday."],
      [0, "わかりました。 手《て》 が 震《ふる》えたり、 そわそわしたり する こと は ありません か。", "I see. Do you have any trembling of the hands or restlessness?"],
      [1, "それ は ありません。", "No, none of that."],
      [0, "よかった です。 歯《は》 を 磨《みが》く とき に、 夜《よる》 の 薬《くすり》 を 飲《の》む の は どう です か。", "Good. How about taking the evening medicine when you brush your teeth?"],
      [1, "いい です ね。 やって みます。", "That's a good idea. I'll try it."]
    ]
  },
  {
    id: 'yoyaku', level: 'N4', title: "Making the next appointment by phone",
    roles: ['You (caller)', 'Clinic receptionist'], you: 0,
    lines: [
      [1, "はい、 みなと クリニック です。", "Hello, Minato Clinic."],
      [0, "もしもし、 診察《しんさつ》 の 予約《よやく》 を お願《ねが》いしたい の です が。", "Hello, I'd like to make an appointment."],
      [1, "はい。 お名前《なまえ》 と 診察券《しんさつけん》 の 番号《ばんごう》 を お願《ねが》いします。", "Certainly. Your name and patient card number, please."],
      [0, "サントス です。 番号《ばんごう》 は 千二百三十四《せんにひゃくさんじゅうよん》 です。", "Santos. The number is 1234."],
      [1, "サントス様《さま》 です ね。 いつ が よろしい です か。", "Ms. Santos. When would suit you?"],
      [0, "来週《らいしゅう》 の 水曜日《すいようび》 は 空《あ》いて います か。", "Is next Wednesday available?"],
      [1, "申《もう》し訳《わけ》 ございません。 水曜日《すいようび》 は いっぱい です。 木曜日《もくようび》 の 午後《ごご》 なら 空《あ》いて おります。", "I'm very sorry. Wednesday is full. Thursday afternoon is available."],
      [0, "木曜日《もくようび》 の 午後《ごご》 は 何時《なんじ》 が 空《あ》いて います か。", "What times are free on Thursday afternoon?"],
      [1, "二時《にじ》 と 四時《よじ》 が ございます。", "We have two o'clock and four o'clock."],
      [0, "では、 四時《よじ》 で お願《ねが》いします。", "Then four o'clock, please."],
      [1, "かしこまりました。 来週《らいしゅう》 の 木曜日《もくようび》、 四時《よじ》 に お待《ま》ち して おります。", "Certainly. We will expect you next Thursday at four."],
      [0, "ありがとう ございます。 失礼《しつれい》します。", "Thank you. Goodbye."]
    ]
  }
];
