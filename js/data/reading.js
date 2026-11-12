/* Reading passages with glossary and comprehension questions. DRAFT FOR REVIEW by a native Japanese speaker.
   READING = [{ id, level, title (Japanese), titleEn, tl: [Japanese paragraphs], en: [English paragraphs, same count], gloss: [[japanese, english]], q: [[question, [options], correctIndex, explanation]], psych?: true }] */
window.READING = [
  {
    id: 'jikoshoukai', level: 'Starter',
    title: "自己紹介《じこしょうかい》", titleEn: "A self-introduction",
    tl: [
      "はじめまして。 私《わたし》 は マリア・サントス です。 フィリピン から 来《き》ました。",
      "私《わたし》 は 医者《いしゃ》 です。 東京《とうきょう》 の 病院《びょういん》 で 働《はたら》いて います。 患者《かんじゃ》さん は 日本人《にほんじん》 です。",
      "私《わたし》 は 日本《にほん》 の 料理《りょうり》 が 好《す》き です。 ラーメン と お寿司《すし》 が 大好《だいす》き です。 音楽《おんがく》 も 好《す》き です。",
      "日本語《にほんご》 は まだ 下手《へた》 です が、 毎日《まいにち》 勉強《べんきょう》します。 どうぞ よろしく お願《ねが》いします。"
    ],
    en: [
      "Nice to meet you. I am Maria Santos. I came from the Philippines.",
      "I am a doctor. I work at a hospital in Tokyo. My patients are Japanese.",
      "I like Japanese food. I love ramen and sushi. I also like music.",
      "My Japanese is still poor, but I study every day. I look forward to working with you."
    ],
    gloss: [
      ["自己紹介《じこしょうかい》", "self-introduction"],
      ["私《わたし》", "I, me"],
      ["来《く》る", "to come"],
      ["医者《いしゃ》", "doctor"],
      ["病院《びょういん》", "hospital"],
      ["働《はたら》く", "to work"],
      ["患者《かんじゃ》", "patient"],
      ["料理《りょうり》", "food, cooking"],
      ["好《す》き", "liked; to like"],
      ["下手《へた》", "poor at, unskilled"],
      ["毎日《まいにち》", "every day"],
      ["勉強《べんきょう》する", "to study"]
    ],
    q: [
      ["サントスさん は どこ から 来《き》ました か。", ["日本《にほん》", "フィリピン", "アメリカ"], 1, "She says フィリピン から 来《き》ました: 'I came from the Philippines'. から means 'from'."],
      ["サントスさん の 仕事《しごと》 は 何《なん》 です か。", ["医者《いしゃ》", "看護師《かんごし》", "学生《がくせい》"], 0, "私《わたし》 は 医者《いしゃ》 です means 'I am a doctor'."],
      ["サントスさん は どこ で 働《はたら》いて います か。", ["フィリピン の 病院《びょういん》", "東京《とうきょう》 の 学校《がっこう》", "東京《とうきょう》 の 病院《びょういん》"], 2, "東京《とうきょう》 の 病院《びょういん》 で 働《はたら》いて います: で marks the place where an action happens."],
      ["サントスさん は 何《なに》 が 好《す》き です か。", ["ラーメン と お寿司《すし》", "パン と コーヒー", "スポーツ"], 0, "ラーメン と お寿司《すし》 が 大好《だいす》き です. The thing you like is marked with が."]
    ]
  },
  {
    id: 'kazoku', level: 'Starter',
    title: "私《わたし》 の 家族《かぞく》", titleEn: "My family",
    tl: [
      "私《わたし》 の 家族《かぞく》 は 五人《ごにん》 です。 父《ちち》 と 母《はは》 と 兄《あに》 と 妹《いもうと》 と 私《わたし》 です。",
      "父《ちち》 は 六十二歳《ろくじゅうにさい》 です。 会社員《かいしゃいん》 です。 母《はは》 は 五十八歳《ごじゅうはっさい》 です。 小学校《しょうがっこう》 の 先生《せんせい》 です。",
      "兄《あに》 は 三十五歳《さんじゅうごさい》 です。 エンジニア です。 妹《いもうと》 は 二十四歳《にじゅうよんさい》 です。 大学院《だいがくいん》 の 学生《がくせい》 です。",
      "私《わたし》 は 三十歳《さんじゅっさい》 です。 医者《いしゃ》 です。",
      "家族《かぞく》 は フィリピン に います。 毎週《まいしゅう》 電話《でんわ》 で 話《はな》します。"
    ],
    en: [
      "There are five people in my family: my father, my mother, my older brother, my younger sister and me.",
      "My father is sixty-two. He is an office worker. My mother is fifty-eight. She is an elementary school teacher.",
      "My older brother is thirty-five. He is an engineer. My younger sister is twenty-four. She is a graduate student.",
      "I am thirty. I am a doctor.",
      "My family is in the Philippines. We talk on the phone every week."
    ],
    gloss: [
      ["家族《かぞく》", "family"],
      ["父《ちち》", "(my) father"],
      ["母《はは》", "(my) mother"],
      ["兄《あに》", "(my) older brother"],
      ["妹《いもうと》", "(my) younger sister"],
      ["歳《さい》", "years old (counter for age)"],
      ["会社員《かいしゃいん》", "office worker, company employee"],
      ["先生《せんせい》", "teacher; also used for doctors"],
      ["大学院《だいがくいん》", "graduate school"],
      ["学生《がくせい》", "student"],
      ["電話《でんわ》", "telephone"],
      ["話《はな》す", "to talk, to speak"]
    ],
    q: [
      ["家族《かぞく》 は 何人《なんにん》 です か。", ["四人《よにん》", "五人《ごにん》", "六人《ろくにん》"], 1, "家族《かぞく》 は 五人《ごにん》 です: five people, counting herself."],
      ["お父《とう》さん は 何歳《なんさい》 です か。", ["五十八歳《ごじゅうはっさい》", "三十五歳《さんじゅうごさい》", "六十二歳《ろくじゅうにさい》"], 2, "父《ちち》 は 六十二歳《ろくじゅうにさい》 です. Use 父《ちち》 for your own father and お父《とう》さん for someone else's father."],
      ["お母《かあ》さん の 仕事《しごと》 は 何《なん》 です か。", ["小学校《しょうがっこう》 の 先生《せんせい》", "会社員《かいしゃいん》", "医者《いしゃ》"], 0, "母《はは》 は 小学校《しょうがっこう》 の 先生《せんせい》 です: an elementary school teacher."],
      ["妹《いもうと》さん は 学生《がくせい》 です か。", ["いいえ、 エンジニア です。", "はい、 学生《がくせい》 です。", "いいえ、 先生《せんせい》 です。"], 1, "妹《いもうと》 は 大学院《だいがくいん》 の 学生《がくせい》 です. The engineer is her older brother."]
    ]
  },
  {
    id: 'ichinichi', level: 'N5',
    title: "看護師《かんごし》 の 一日《いちにち》", titleEn: "A nurse's day",
    tl: [
      "山田《やまだ》さん は 病院《びょういん》 の 看護師《かんごし》 です。 毎朝《まいあさ》 六時《ろくじ》 に 起《お》きます。 朝《あさ》ご飯《はん》 に パン を 食《た》べて、 コーヒー を 飲《の》みます。",
      "七時《しちじ》 に 家《いえ》 を 出《で》ます。 電車《でんしゃ》 で 病院《びょういん》 へ 行《い》きます。 三十分《さんじゅっぷん》 ぐらい かかります。",
      "仕事《しごと》 は 八時《はちじ》 から 五時《ごじ》 まで です。 午前《ごぜん》 は 患者《かんじゃ》さん の 血圧《けつあつ》 を 測《はか》ります。 十二時《じゅうにじ》 に 病院《びょういん》 の 食堂《しょくどう》 で 昼《ひる》ご飯《はん》 を 食《た》べます。",
      "六時《ろくじ》 ごろ 家《いえ》 に 帰《かえ》ります。 晩《ばん》ご飯《はん》 を 作《つく》って、 テレビ を 見《み》ます。 十一時《じゅういちじ》 に 寝《ね》ます。",
      "仕事《しごと》 は 忙《いそが》しい です が、 楽《たの》しい です。"
    ],
    en: [
      "Ms. Yamada is a nurse at a hospital. She gets up at six every morning. For breakfast she eats bread and drinks coffee.",
      "She leaves home at seven. She goes to the hospital by train. It takes about thirty minutes.",
      "Work is from eight to five. In the morning she measures the patients' blood pressure. At twelve she eats lunch in the hospital cafeteria.",
      "She goes home at around six. She makes dinner and watches TV. She goes to bed at eleven.",
      "Her work is busy, but it is enjoyable."
    ],
    gloss: [
      ["看護師《かんごし》", "nurse"],
      ["起《お》きる", "to get up, to wake up"],
      ["朝《あさ》ご飯《はん》", "breakfast"],
      ["出《で》る", "to leave, to go out"],
      ["電車《でんしゃ》", "train"],
      ["かかる", "to take (time)"],
      ["血圧《けつあつ》", "blood pressure"],
      ["測《はか》る", "to measure"],
      ["食堂《しょくどう》", "cafeteria, dining hall"],
      ["帰《かえ》る", "to go home, to return"],
      ["寝《ね》る", "to go to bed, to sleep"],
      ["忙《いそが》しい", "busy"]
    ],
    q: [
      ["山田《やまだ》さん は 何時《なんじ》 に 起《お》きます か。", ["五時《ごじ》", "六時《ろくじ》", "七時《しちじ》"], 1, "毎朝《まいあさ》 六時《ろくじ》 に 起《お》きます. A clock time takes に."],
      ["山田《やまだ》さん は 何《なに》 で 病院《びょういん》 へ 行《い》きます か。", ["電車《でんしゃ》", "バス", "車《くるま》"], 0, "電車《でんしゃ》 で 病院《びょういん》 へ 行《い》きます. で marks the means of transport."],
      ["仕事《しごと》 は 何時《なんじ》 まで です か。", ["六時《ろくじ》", "八時《はちじ》", "五時《ごじ》"], 2, "八時《はちじ》 から 五時《ごじ》 まで: から is 'from' and まで is 'until'. She gets home around six."],
      ["山田《やまだ》さん は どこ で 昼《ひる》ご飯《はん》 を 食《た》べます か。", ["家《いえ》", "病院《びょういん》 の 食堂《しょくどう》", "レストラン"], 1, "病院《びょういん》 の 食堂《しょくどう》 で 昼《ひる》ご飯《はん》 を 食《た》べます."]
    ]
  },
  {
    id: 'machi', level: 'N5',
    title: "私《わたし》 の 町《まち》", titleEn: "My town",
    tl: [
      "私《わたし》 の 町《まち》 は 小《ちい》さい です が、 便利《べんり》 です。 町《まち》 の 真《ま》ん中《なか》 に 駅《えき》 が あります。",
      "駅《えき》 の 前《まえ》 に 大《おお》きい 病院《びょういん》 が あります。 病院《びょういん》 の 隣《となり》 に 薬局《やっきょく》 が あります。 薬局《やっきょく》 に は 優《やさ》しい 薬剤師《やくざいし》さん が います。",
      "病院《びょういん》 の 後《うし》ろ に 公園《こうえん》 が あります。 公園《こうえん》 に は 大《おお》きい 木《き》 が たくさん あります。 朝《あさ》 は 犬《いぬ》 と 散歩《さんぽ》する 人《ひと》 が 多《おお》い です。",
      "駅《えき》 の 左《ひだり》 に スーパー が あります。 私《わたし》 の 家《いえ》 は 公園《こうえん》 の 近《ちか》く です。"
    ],
    en: [
      "My town is small, but it is convenient. There is a station in the middle of the town.",
      "In front of the station there is a big hospital. Next to the hospital there is a pharmacy. At the pharmacy there is a kind pharmacist.",
      "Behind the hospital there is a park. In the park there are many big trees. In the morning many people walk their dogs there.",
      "To the left of the station there is a supermarket. My house is near the park."
    ],
    gloss: [
      ["町《まち》", "town"],
      ["便利《べんり》", "convenient"],
      ["真《ま》ん中《なか》", "the middle, the center"],
      ["駅《えき》", "station"],
      ["前《まえ》", "front; in front of"],
      ["隣《となり》", "next to"],
      ["薬局《やっきょく》", "pharmacy"],
      ["薬剤師《やくざいし》", "pharmacist"],
      ["後《うし》ろ", "back; behind"],
      ["公園《こうえん》", "park"],
      ["散歩《さんぽ》する", "to take a walk"],
      ["左《ひだり》", "left"]
    ],
    q: [
      ["駅《えき》 は どこ に あります か。", ["公園《こうえん》 の 後《うし》ろ", "町《まち》 の 真《ま》ん中《なか》", "病院《びょういん》 の 隣《となり》"], 1, "町《まち》 の 真《ま》ん中《なか》 に 駅《えき》 が あります. Place に thing が あります: 'at the place there is a thing'."],
      ["薬局《やっきょく》 は どこ に あります か。", ["病院《びょういん》 の 隣《となり》", "駅《えき》 の 左《ひだり》", "公園《こうえん》 の 中《なか》"], 0, "病院《びょういん》 の 隣《となり》 に 薬局《やっきょく》 が あります. The supermarket is to the left of the station."],
      ["公園《こうえん》 は 病院《びょういん》 の どこ に あります か。", ["前《まえ》", "隣《となり》", "後《うし》ろ"], 2, "病院《びょういん》 の 後《うし》ろ に 公園《こうえん》 が あります: behind the hospital."],
      ["薬局《やっきょく》 に は だれ が います か。", ["犬《いぬ》", "薬剤師《やくざいし》さん", "医者《いしゃ》"], 1, "People and animals take います; things and places take あります."]
    ]
  },
  {
    id: 'kusuri', level: 'N5', psych: true,
    title: "お薬《くすり》 の 飲《の》み方《かた》", titleEn: "How to take your medicine",
    tl: [
      "こんにちは。 今日《きょう》 の お薬《くすり》 を 説明《せつめい》します。 この 白《しろ》い 薬《くすり》 は 一日《いちにち》 二回《にかい》、 朝《あさ》 と 夜《よる》 に 飲《の》んで ください。",
      "食事《しょくじ》 の 後《あと》 に 飲《の》んで ください。 水《みず》 か お湯《ゆ》 で 飲《の》んで ください。 お酒《さけ》 と 一緒《いっしょ》 に 飲《の》まないで ください。",
      "最初《さいしょ》 の 一週間《いっしゅうかん》 は 少《すこ》し 眠《ねむ》く なる こと が あります。 車《くるま》 の 運転《うんてん》 に 気《き》 を つけて ください。",
      "体《からだ》 に 発疹《ほっしん》 が 出《で》た とき や、 熱《ねつ》 が 出《で》た とき は、 すぐ 病院《びょういん》 に 電話《でんわ》して ください。",
      "お薬《くすり》 を 自分《じぶん》 で やめないで ください。 何《なに》 か 質問《しつもん》 は あります か。"
    ],
    en: [
      "Hello. I will explain today's medicine. Please take this white medicine twice a day, in the morning and at night.",
      "Please take it after meals. Please take it with water or warm water. Please do not take it with alcohol.",
      "In the first week you may feel a little sleepy. Please be careful when driving a car.",
      "If you get a rash on your body or a fever, please call the hospital right away.",
      "Please do not stop the medicine on your own. Do you have any questions?"
    ],
    gloss: [
      ["薬《くすり》", "medicine"],
      ["飲《の》む", "to drink; to take (medicine)"],
      ["説明《せつめい》する", "to explain"],
      ["一日《いちにち》", "one day; per day"],
      ["二回《にかい》", "twice (回《かい》 counts times)"],
      ["食事《しょくじ》", "meal"],
      ["後《あと》", "after"],
      ["一緒《いっしょ》 に", "together (with)"],
      ["眠《ねむ》い", "sleepy"],
      ["気《き》 を つける", "to be careful"],
      ["発疹《ほっしん》", "rash"],
      ["熱《ねつ》", "fever"]
    ],
    q: [
      ["白《しろ》い 薬《くすり》 は 一日《いちにち》 何回《なんかい》 飲《の》みます か。", ["一回《いっかい》", "三回《さんかい》", "二回《にかい》"], 2, "一日《いちにち》 二回《にかい》、 朝《あさ》 と 夜《よる》: twice a day."],
      ["いつ 飲《の》みます か。", ["食事《しょくじ》 の 後《あと》", "食事《しょくじ》 の 前《まえ》", "寝《ね》る 前《まえ》 だけ"], 0, "食事《しょくじ》 の 後《あと》 に 飲《の》んで ください: after meals."],
      ["お酒《さけ》 と 一緒《いっしょ》 に 飲《の》んで も いい です か。", ["はい、 いい です。", "いいえ、 だめ です。", "少《すこ》し なら いい です。"], 1, "お酒《さけ》 と 一緒《いっしょ》 に 飲《の》まないで ください. 〜ないで ください is 'please do not ...'."],
      ["発疹《ほっしん》 が 出《で》た とき は どう します か。", ["薬《くすり》 を 二回《にかい》 飲《の》みます。", "すぐ 病院《びょういん》 に 電話《でんわ》します。", "水《みず》 を たくさん 飲《の》みます。"], 1, "発疹《ほっしん》 が 出《で》た とき は、 すぐ 病院《びょういん》 に 電話《でんわ》して ください."]
    ]
  },
  {
    id: 'nemurenai', level: 'N5', psych: true,
    title: "眠《ねむ》れません", titleEn: "I can't sleep",
    tl: [
      "二週間《にしゅうかん》 ぐらい 前《まえ》 から、 夜《よる》 よく 眠《ねむ》れません。 十一時《じゅういちじ》 に 寝《ね》ます が、 二時《にじ》 ごろ まで 眠《ねむ》れません。",
      "夜中《よなか》 に 何回《なんかい》 も 目《め》 が 覚《さ》めます。 朝《あさ》 は 四時《よじ》 ごろ 起《お》きて、 その 後《あと》 は もう 眠《ねむ》れません。",
      "最近《さいきん》 は 食欲《しょくよく》 も あまり ありません。 朝《あさ》ご飯《はん》 は 食《た》べません。 昼《ひる》 は パン を 少《すこ》し だけ 食《た》べます。",
      "一日中《いちにちじゅう》 体《からだ》 が だるい です。 仕事《しごと》 に 集中《しゅうちゅう》 できません。",
      "妻《つま》 が とても 心配《しんぱい》して います。 それで、 今日《きょう》 病院《びょういん》 に 来《き》ました。"
    ],
    en: [
      "For about two weeks I have not been sleeping well at night. I go to bed at eleven, but I cannot fall asleep until about two.",
      "I wake up many times in the middle of the night. In the morning I wake up at around four, and after that I cannot sleep any more.",
      "Lately I do not have much appetite either. I do not eat breakfast. At lunch I eat just a little bread.",
      "My body feels heavy and tired all day. I cannot concentrate on my work.",
      "My wife is very worried. So I came to the hospital today."
    ],
    gloss: [
      ["眠《ねむ》れる", "to be able to sleep"],
      ["二週間《にしゅうかん》", "two weeks"],
      ["夜中《よなか》", "the middle of the night"],
      ["目《め》 が 覚《さ》める", "to wake up"],
      ["最近《さいきん》", "recently, lately"],
      ["食欲《しょくよく》", "appetite"],
      ["一日中《いちにちじゅう》", "all day long"],
      ["だるい", "sluggish, heavy and tired"],
      ["集中《しゅうちゅう》する", "to concentrate"],
      ["心配《しんぱい》する", "to worry"],
      ["妻《つま》", "(my) wife"],
      ["それで", "so, and so"]
    ],
    q: [
      ["いつ から 眠《ねむ》れません か。", ["二週間《にしゅうかん》 ぐらい 前《まえ》 から", "二日《ふつか》 前《まえ》 から", "一年《いちねん》 前《まえ》 から"], 0, "二週間《にしゅうかん》 ぐらい 前《まえ》 から: 'since about two weeks ago'. ぐらい means 'about'."],
      ["朝《あさ》 は 何時《なんじ》 ごろ 起《お》きます か。", ["六時《ろくじ》", "四時《よじ》", "七時《しちじ》"], 1, "四時《よじ》 ごろ 起《お》きて: around four. Note that four o'clock is read よじ."],
      ["食欲《しょくよく》 は どう です か。", ["よく 食《た》べます。", "いつも お腹《なか》 が すいて います。", "あまり ありません。"], 2, "食欲《しょくよく》 も あまり ありません. あまり with a negative means 'not much'."],
      ["だれ が 心配《しんぱい》して います か。", ["妻《つま》", "母《はは》", "医者《いしゃ》"], 0, "妻《つま》 が とても 心配《しんぱい》して います: his wife is worried."]
    ]
  },
  {
    id: 'shinsatsu', level: 'N4', psych: true,
    title: "はじめて の 診察《しんさつ》", titleEn: "My first appointment",
    tl: [
      "先週《せんしゅう》、 はじめて 精神科《せいしんか》 の クリニック に 行《い》きました。 行《い》く 前《まえ》 は とても 緊張《きんちょう》して いました。",
      "受付《うけつけ》 で 保険証《ほけんしょう》 を 出《だ》して、 問診票《もんしんひょう》 を 書《か》きました。 待合室《まちあいしつ》 は 静《しず》か で、 小《ちい》さい 音《おと》 で 音楽《おんがく》 が 流《なが》れて いました。 三十分《さんじゅっぷん》 ぐらい 待《ま》ちました。",
      "先生《せんせい》 は ゆっくり 話《はなし》 を 聞《き》いて くれました。 いつ から 調子《ちょうし》 が 悪《わる》い か、 夜《よる》 は 眠《ねむ》れる か、 食欲《しょくよく》 は ある か を 聞《き》かれました。 仕事《しごと》 や 家族《かぞく》 の こと も 聞《き》かれました。",
      "最初《さいしょ》 は うまく 話《はな》せません でした が、 先生《せんせい》 が 「急《いそ》がなくて いい です よ」 と 言《い》って くれました。",
      "診察《しんさつ》 の 後《あと》、 少《すこ》し 気持《きも》ち が 軽《かる》く なりました。 次《つぎ》 は 二週間後《にしゅうかんご》 に 行《い》きます。"
    ],
    en: [
      "Last week I went to a psychiatry clinic for the first time. Before I went, I was very nervous.",
      "At reception I handed over my insurance card and filled in a questionnaire. The waiting room was quiet, and music was playing softly. I waited about thirty minutes.",
      "The doctor listened to me slowly and patiently. I was asked since when I had been feeling unwell, whether I could sleep at night, and whether I had an appetite. I was also asked about my work and my family.",
      "At first I could not speak well, but the doctor told me, \"There is no need to hurry.\"",
      "After the appointment my feelings became a little lighter. Next time I will go in two weeks."
    ],
    gloss: [
      ["診察《しんさつ》", "medical consultation, examination"],
      ["精神科《せいしんか》", "psychiatry (department)"],
      ["緊張《きんちょう》する", "to be nervous, tense"],
      ["受付《うけつけ》", "reception desk"],
      ["保険証《ほけんしょう》", "health insurance card"],
      ["問診票《もんしんひょう》", "intake questionnaire"],
      ["待合室《まちあいしつ》", "waiting room"],
      ["待《ま》つ", "to wait"],
      ["調子《ちょうし》", "condition, how one is doing"],
      ["急《いそ》ぐ", "to hurry"],
      ["気持《きも》ち", "feeling(s)"],
      ["軽《かる》い", "light (in weight)"]
    ],
    q: [
      ["受付《うけつけ》 で 何《なに》 を しました か。", ["薬《くすり》 を もらいました。", "保険証《ほけんしょう》 を 出《だ》して、 問診票《もんしんひょう》 を 書《か》きました。", "先生《せんせい》 と 話《はな》しました。"], 1, "受付《うけつけ》 で 保険証《ほけんしょう》 を 出《だ》して、 問診票《もんしんひょう》 を 書《か》きました. The て-form links the two actions in order."],
      ["どの ぐらい 待《ま》ちました か。", ["三十分《さんじゅっぷん》 ぐらい", "十分《じゅっぷん》 ぐらい", "一時間《いちじかん》 ぐらい"], 0, "三十分《さんじゅっぷん》 ぐらい 待《ま》ちました: about thirty minutes."],
      ["先生《せんせい》 は 何《なに》 を 聞《き》きました か。", ["趣味《しゅみ》 と 好《す》きな 食《た》べ物《もの》", "住所《じゅうしょ》 と 電話番号《でんわばんごう》", "睡眠《すいみん》、 食欲《しょくよく》、 仕事《しごと》 や 家族《かぞく》 の こと"], 2, "聞《き》かれました is the passive of 聞《き》く: 'I was asked'. The doctor asked about sleep, appetite, work and family."],
      ["診察《しんさつ》 の 後《あと》、 どう なりました か。", ["もっと 緊張《きんちょう》しました。", "気持《きも》ち が 少《すこ》し 軽《かる》く なりました。", "とても 疲《つか》れました。"], 1, "軽《かる》く なりました: い-adjective 軽《かる》い becomes 軽《かる》く before なる, 'became lighter'."]
    ]
  },
  {
    id: 'haha-no-shinpai', level: 'N4', psych: true,
    title: "母《はは》 の 心配《しんぱい》", titleEn: "A mother's worry",
    tl: [
      "息子《むすこ》 は 二十八歳《にじゅうはっさい》 です。 去年《きょねん》 まで 会社《かいしゃ》 で まじめに 働《はたら》いて いました。",
      "でも、 三《さん》か月《げつ》 ぐらい 前《まえ》 から 会社《かいしゃ》 に 行《い》かなく なりました。 一日中《いちにちじゅう》 自分《じぶん》 の 部屋《へや》 に いて、 あまり 出《で》て きません。 ご飯《はん》 も 一人《ひとり》 で 部屋《へや》 で 食《た》べます。",
      "最近《さいきん》、 夜《よる》 に 部屋《へや》 から 息子《むすこ》 の 声《こえ》 が 聞《き》こえます。 部屋《へや》 に は だれ も いない のに、 だれ か と 話《はな》して いる よう です。",
      "「だれ か が 自分《じぶん》 の 悪口《わるぐち》 を 言《い》って いる」 と 言《い》う こと も あります。 私《わたし》 が 話《はな》しかけて も、 あまり 答《こた》えません。",
      "息子《むすこ》 の こと が 心配《しんぱい》 で、 私《わたし》 も 夜《よる》 よく 眠《ねむ》れません。 どう したら いい でしょう か。"
    ],
    en: [
      "My son is twenty-eight. Until last year he was working hard at a company.",
      "But about three months ago he stopped going to work. He stays in his room all day and hardly comes out. He eats his meals alone in his room too.",
      "Lately, at night, I can hear my son's voice from his room. There is nobody in the room, but it seems he is talking with someone.",
      "Sometimes he says, \"Someone is saying bad things about me.\" Even when I speak to him, he hardly answers.",
      "I am so worried about my son that I cannot sleep well at night either. What should I do?"
    ],
    gloss: [
      ["息子《むすこ》", "(my) son"],
      ["去年《きょねん》", "last year"],
      ["まじめ", "serious, diligent"],
      ["行《い》かなく なる", "to stop going"],
      ["部屋《へや》", "room"],
      ["自分《じぶん》", "oneself"],
      ["声《こえ》", "voice"],
      ["聞《き》こえる", "to be heard, can hear"],
      ["のに", "even though, although"],
      ["悪口《わるぐち》", "bad things said about someone"],
      ["話《はな》しかける", "to speak to (someone)"],
      ["答《こた》える", "to answer"]
    ],
    q: [
      ["息子《むすこ》さん は いつ から 会社《かいしゃ》 に 行《い》って いません か。", ["三週間《さんしゅうかん》 前《まえ》 から", "三年《さんねん》 前《まえ》 から", "三《さん》か月《げつ》 ぐらい 前《まえ》 から"], 2, "三《さん》か月《げつ》 ぐらい 前《まえ》 から 会社《かいしゃ》 に 行《い》かなく なりました. 〜なく なる means 'to stop doing'."],
      ["息子《むすこ》さん は 一日中《いちにちじゅう》 どこ に います か。", ["自分《じぶん》 の 部屋《へや》", "会社《かいしゃ》", "公園《こうえん》"], 0, "一日中《いちにちじゅう》 自分《じぶん》 の 部屋《へや》 に いて: he stays in his own room."],
      ["夜《よる》、 お母《かあ》さん は 何《なに》 が 聞《き》こえます か。", ["テレビ の 音《おと》", "息子《むすこ》さん が だれ か と 話《はな》して いる よう な 声《こえ》", "電話《でんわ》 の 音《おと》"], 1, "だれ も いない のに、 だれ か と 話《はな》して いる よう です: there is nobody there, yet he seems to be talking to someone."],
      ["お母《かあ》さん は 今《いま》 どう です か。", ["安心《あんしん》して います。", "怒《おこ》って います。", "心配《しんぱい》 で 眠《ねむ》れません。"], 2, "心配《しんぱい》 で、 私《わたし》 も 夜《よる》 よく 眠《ねむ》れません. で here gives the reason: 'because of worry'."]
    ]
  },
  {
    id: 'tegami', level: 'N4',
    title: "友達《ともだち》 へ の 手紙《てがみ》", titleEn: "A letter to a friend",
    tl: [
      "ゆきちゃん、 元気《げんき》？ 私《わたし》 は 先月《せんげつ》、 大阪《おおさか》 に 引《ひ》っ越《こ》した。 新《あたら》しい アパート は 駅《えき》 から 近《ちか》くて、 とても 便利《べんり》 だ よ。",
      "先週《せんしゅう》 から 新《あたら》しい 病院《びょういん》 で 働《はたら》き始《はじ》めた。 最初《さいしょ》 の 日《ひ》 は すごく 緊張《きんちょう》した けど、 みんな 親切《しんせつ》 だった。",
      "週末《しゅうまつ》 は 町《まち》 を 散歩《さんぽ》したり、 お好《この》み焼《や》き を 食《た》べたり した。 大阪《おおさか》 の 人《ひと》 は よく 話《はな》す と 思《おも》う。",
      "まだ 友達《ともだち》 は 少《すく》ない けど、 だんだん 慣《な》れる と 思《おも》う。 今度《こんど》、 遊《あそ》び に 来《き》て ね。",
      "また 手紙《てがみ》 を 書《か》く ね。 マリア より"
    ],
    en: [
      "Yuki, how are you? Last month I moved to Osaka. My new apartment is close to the station, so it is very convenient.",
      "I started working at a new hospital last week. I was really nervous on the first day, but everyone was kind.",
      "On the weekend I did things like walking around the town and eating okonomiyaki. I think people in Osaka talk a lot.",
      "I still don't have many friends, but I think I will gradually get used to it. Come and visit me sometime.",
      "I'll write again. From Maria"
    ],
    gloss: [
      ["手紙《てがみ》", "letter"],
      ["先月《せんげつ》", "last month"],
      ["引《ひ》っ越《こ》す", "to move (house)"],
      ["近《ちか》い", "near, close"],
      ["働《はたら》き始《はじ》める", "to start working"],
      ["親切《しんせつ》", "kind"],
      ["週末《しゅうまつ》", "weekend"],
      ["〜たり 〜たり する", "to do things such as ... and ..."],
      ["思《おも》う", "to think"],
      ["少《すく》ない", "few, little"],
      ["慣《な》れる", "to get used to"],
      ["遊《あそ》ぶ", "to have fun, to hang out"]
    ],
    q: [
      ["マリアさん は どこ に 引《ひ》っ越《こ》しました か。", ["東京《とうきょう》", "京都《きょうと》", "大阪《おおさか》"], 2, "先月《せんげつ》、 大阪《おおさか》 に 引《ひ》っ越《こ》した. 引《ひ》っ越《こ》した is the plain past of 引《ひ》っ越《こ》す."],
      ["新《あたら》しい アパート は どう です か。", ["駅《えき》 から 近《ちか》くて 便利《べんり》 です。", "駅《えき》 から 遠《とお》い です。", "古《ふる》くて 高《たか》い です。"], 0, "近《ちか》くて is the て-form of 近《ちか》い, linking it to the next description."],
      ["週末《しゅうまつ》 に 何《なに》 を しました か。", ["病院《びょういん》 で 働《はたら》きました。", "散歩《さんぽ》したり、 お好《この》み焼《や》き を 食《た》べたり しました。", "友達《ともだち》 の 家《いえ》 に 行《い》きました。"], 1, "〜たり 〜たり する gives examples of activities, not a complete list."],
      ["マリアさん は 新《あたら》しい 生活《せいかつ》 に ついて どう 思《おも》って います か。", ["すぐ 帰《かえ》りたい と 思《おも》って います。", "友達《ともだち》 が たくさん いる と 思《おも》って います。", "だんだん 慣《な》れる と 思《おも》って います。"], 2, "だんだん 慣《な》れる と 思《おも》う: plain form + と 思《おも》う means 'I think that ...'."]
    ]
  },
  {
    id: 'kisetsu', level: 'N4',
    title: "日本《にほん》 の 季節《きせつ》", titleEn: "The seasons in Japan",
    tl: [
      "日本《にほん》 に は 四《よっ》つ の 季節《きせつ》 が あります。 春《はる》、 夏《なつ》、 秋《あき》、 冬《ふゆ》 です。 季節《きせつ》 に よって、 天気《てんき》 も 生活《せいかつ》 も 大《おお》きく 変《か》わります。",
      "春《はる》 は 暖《あたた》かく なって、 桜《さくら》 が 咲《さ》きます。 新《あたら》しい 学校《がっこう》 や 仕事《しごと》 が 始《はじ》まる 季節《きせつ》 なので、 楽《たの》しい 人《ひと》 も、 緊張《きんちょう》する 人《ひと》 も います。",
      "夏《なつ》 は 冬《ふゆ》 より ずっと 暑《あつ》い です。 六月《ろくがつ》 は 雨《あめ》 が 多《おお》くて、 気分《きぶん》 が 重《おも》く なる 人《ひと》 も います。 夜《よる》 も 暑《あつ》くて、 よく 眠《ねむ》れない こと が あります。",
      "秋《あき》 は 涼《すず》しくて、 一年《いちねん》 で 一番《いちばん》 過《す》ごしやすい と 言《い》う 人《ひと》 が 多《おお》い です。 でも、 日《ひ》 が 短《みじか》く なる と、 少《すこ》し 寂《さび》しく なる 人《ひと》 も います。",
      "冬《ふゆ》 は 寒《さむ》くて、 外《そと》 に 出《で》る 人《ひと》 が 少《すく》なく なります。 日《ひ》 の 光《ひかり》 を 浴《あ》びる こと が 少《すく》ない ので、 気分《きぶん》 が 落《お》ち込《こ》む 人《ひと》 も います。 天気《てんき》 の いい 日《ひ》 は、 外《そと》 を 散歩《さんぽ》する と いい です よ。"
    ],
    en: [
      "Japan has four seasons: spring, summer, autumn and winter. Depending on the season, both the weather and daily life change a lot.",
      "In spring it gets warm and the cherry blossoms bloom. Because it is the season when new school years and new jobs begin, some people feel happy and some feel nervous.",
      "Summer is much hotter than winter. June has a lot of rain, and some people's mood becomes heavy. The nights are hot too, and sometimes people cannot sleep well.",
      "Autumn is cool, and many people say it is the most comfortable time of the year. But when the days get shorter, some people become a little lonely.",
      "Winter is cold, and fewer people go outside. Because people get little sunlight, some people feel down. On days with good weather, it is good to take a walk outside."
    ],
    gloss: [
      ["季節《きせつ》", "season"],
      ["天気《てんき》", "weather"],
      ["変《か》わる", "to change"],
      ["暖《あたた》かい", "warm"],
      ["桜《さくら》", "cherry blossom"],
      ["咲《さ》く", "to bloom"],
      ["暑《あつ》い", "hot (weather)"],
      ["気分《きぶん》", "mood, how one feels"],
      ["涼《すず》しい", "cool, pleasantly cool"],
      ["一番《いちばん》", "the most, number one"],
      ["寂《さび》しい", "lonely"],
      ["落《お》ち込《こ》む", "to feel down, to be depressed"]
    ],
    q: [
      ["日本《にほん》 に は 季節《きせつ》 が いくつ あります か。", ["三《みっ》つ", "四《よっ》つ", "五《いつ》つ"], 1, "四《よっ》つ の 季節《きせつ》: four seasons. 〜つ is the general counter for things."],
      ["夏《なつ》 と 冬《ふゆ》 と、 どちら が 暑《あつ》い です か。", ["冬《ふゆ》", "同《おな》じ です", "夏《なつ》"], 2, "夏《なつ》 は 冬《ふゆ》 より ずっと 暑《あつ》い: A は B より ... means 'A is more ... than B'."],
      ["六月《ろくがつ》 は どう です か。", ["雨《あめ》 が 多《おお》い です。", "雪《ゆき》 が 多《おお》い です。", "とても 涼《すず》しい です。"], 0, "六月《ろくがつ》 は 雨《あめ》 が 多《おお》くて: June is the rainy season in most of Japan."],
      ["冬《ふゆ》 に 気分《きぶん》 が 落《お》ち込《こ》む 人《ひと》 が いる の は どうして です か。", ["桜《さくら》 が 咲《さ》く から", "日《ひ》 の 光《ひかり》 を 浴《あ》びる こと が 少《すく》ない から", "雨《あめ》 が 多《おお》い から"], 1, "日《ひ》 の 光《ひかり》 を 浴《あ》びる こと が 少《すく》ない ので: ので and から both give a reason."]
    ]
  }
];
