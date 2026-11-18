/* Lesson extras part 13 (0.26.0): common mistakes, more examples and a "More practice" quiz for existing N2 lessons
   (n2-ni-tsurete, n2-tsutsu, n2-ue-de, n2-ni-kagirazu, n2-bakari-ka, n2-wo-hajime).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n2-ni-tsurete': {
    mistakes: [
      ["治療《ちりょう》 が 進《すす》んだ に つれて、 表情《ひょうじょう》 が 明《あか》るく なって きました。", "治療《ちりょう》 が 進《すす》む に つれて、 表情《ひょうじょう》 が 明《あか》るく なって きました。", "A verb before に つれて is in the dictionary form, even when the sentence is about the past."],
      ["体調《たいちょう》 が 良《よ》く なる に つれて、 散歩《さんぽ》 を 始《はじ》めて ください。", "体調《たいちょう》 が 良《よ》く なったら、 散歩《さんぽ》 を 始《はじ》めて ください。", "A に つれて sentence describes a change that happens and cannot end in a request; use 〜たら for \"when\"."],
      ["よく 眠《ねむ》れる よう に なる に 伴《ともな》い、 気分《きぶん》 も 明《あか》るく なって きました ね。", "よく 眠《ねむ》れる よう に なる に つれて、 気分《きぶん》 も 明《あか》るく なって きました ね。", "Grammatical but 〜に 伴《ともな》い is notice and report style; to a patient say に つれて."]
    ],
    more: [
      ["退院《たいいん》 の 日《ひ》 が 近《ちか》づく に つれて、 少《すこ》し 不安《ふあん》 に なる 方《かた》 も 多《おお》い です。", "As the day of discharge gets closer, many people become a little anxious."],
      ["体力《たいりょく》 が 戻《もど》る に したがって、 リハビリ で できる こと も 増《ふ》えて いきます。", "As your strength comes back, there will be more you can do in rehabilitation."],
      ["不眠《ふみん》 の 改善《かいぜん》 と ともに、 日中《にっちゅう》 の 活動量《かつどうりょう》 も 増《ふ》えて いる。", "Along with the improvement in insomnia, daytime activity has increased. (chart note)"],
      ["子供《こども》 が 成長《せいちょう》 する に つれて、 家族《かぞく》 で 出《で》かける 機会《きかい》 が 減《へ》って きた。", "As the children have grown up, we go out as a family less often."],
      ["駅《えき》 の 改装工事《かいそうこうじ》 に 伴《ともな》い、 東口《ひがしぐち》 は しばらく 使用《しよう》 できません。", "Owing to renovation work at the station, the east exit cannot be used for some time. (notice)"],
      ["練習《れんしゅう》 を 重《かさ》ねる に したがって、 ピアノ が 楽《たの》しく なって きた。", "As I kept on practising, the piano became more enjoyable."]
    ],
    quiz: [
      ["気温《きおん》 が ＿ に つれて、 体調《たいちょう》 を 崩《くず》す 人《ひと》 が 増《ふ》えます。", ["下《さ》がった", "下《さ》がる", "下《さ》がって"], 1, "に つれて follows the dictionary form of a verb of change."],
      ["職員《しょくいん》 の 案内《あんない》 に したがって、 お進《すす》み ください means:", ["Please go ahead, following the staff's directions.", "Please go ahead as the staff change.", "Please go ahead instead of the staff."], 0, "After a noun of instruction or guidance, に したがって means \"following\"."],
      ["Which sentence links two changes correctly?", ["検査《けんさ》 を 一度《いちど》 受《う》ける に つれて、 結果《けっか》 が 出《で》ました。", "経験《けいけん》 を 重《かさ》ねる と ともに、 自信《じしん》 も ついて きた。", "入院《にゅういん》 に つれて、 明日《あした》 来《き》て ください。"], 1, "と ともに links two gradual changes; the first is a single event and the third ends in a request."],
      ["You are writing a hospital notice: the canteen hours will change because of renovation. Which fits?", ["改装《かいそう》 に つれて、 食堂《しょくどう》 の 時間《じかん》 が 変《か》わって きます。", "改装《かいそう》 の たび に、 食堂《しょくどう》 の 時間《じかん》 を 変《か》えます。", "改装《かいそう》 に 伴《ともな》い、 食堂《しょくどう》 の 営業時間《えいぎょうじかん》 を 変更《へんこう》 いたします。"], 2, "An event that causes a change on a notice takes 〜に 伴《ともな》い; the others mean a gradual change or a change every time."],
      ["経過《けいか》 ＿ したがって、 面会《めんかい》 できる 回数《かいすう》 も 増《ふ》えて いきます。", ["を", "と", "に"], 2, "The pattern is noun + に したがって."],
      ["年《とし》 を とる に つれて、 人《ひと》 の 気持《きも》ち が 分《わ》かる よう に なりました means:", ["As I've got older, I've come to understand how other people feel.", "Because I suddenly got old, I understood how people felt.", "Every time I have a birthday, I understand people a little."], 0, "に つれて links getting older with a gradual change in the speaker."]
    ]
  },
  'n2-tsutsu': {
    mistakes: [
      ["ご家族《かぞく》 と 相談《そうだん》 する つつ、 退院《たいいん》 の 準備《じゅんび》 を 進《すす》めます。", "ご家族《かぞく》 と 相談《そうだん》 しつつ、 退院《たいいん》 の 準備《じゅんび》 を 進《すす》めます。", "つつ attaches to the ます-stem: する becomes しつつ."],
      ["今《いま》、 母《はは》 は 夕飯《ゆうはん》 を 作《つく》りつつ あります。", "今《いま》、 母《はは》 は 夕飯《ゆうはん》 を 作《つく》って います。", "つつ ある is for verbs of change; an ordinary activity under way takes 〜て いる."],
      ["夜《よる》 の 飲酒量《いんしゅりょう》 は 増《ふ》えた 一方《いっぽう》 です。", "夜《よる》 の 飲酒量《いんしゅりょう》 は 増《ふ》える 一方《いっぽう》 です。", "Sentence-final 一方《いっぽう》 だ follows the dictionary form, not the た-form."]
    ],
    more: [
      ["幻聴《げんちょう》 は 軽減《けいげん》 しつつ ある が、 不眠《ふみん》 は 続《つづ》いて いる。", "The auditory hallucinations are lessening, but the insomnia continues. (chart note)"],
      ["休《やす》む べき だ と 分《わ》かりつつ も、 仕事《しごと》 を 断《ことわ》れません でした。", "Although I knew I had to rest, I couldn't turn work down."],
      ["一人《ひとり》 で 抱《かか》え込《こ》む と、 ストレス は たまる 一方《いっぽう》 です。", "If you keep it all to yourself, the stress just keeps building up."],
      ["地図《ちず》 を 確《たし》かめつつ、 知《し》らない 町《まち》 を 歩《ある》いた。", "I walked around a town I didn't know, checking the map as I went."],
      ["古《ふる》い 町並《まちな》み は 少《すこ》し ずつ 失《うしな》われつつ ある。", "The old streetscapes are gradually being lost."],
      ["部屋《へや》 の 荷物《にもつ》 は 増《ふ》える 一方《いっぽう》 で、 なかなか 片付《かたづ》きません。", "My things keep piling up, and the room never gets tidy."]
    ],
    quiz: [
      ["外来《がいらい》 の 患者《かんじゃ》さん の 数《かず》 は ＿ 一方《いっぽう》 です。", ["増《ふ》える", "増《ふ》えて", "増《ふ》え"], 0, "Sentence-final 一方《いっぽう》 だ follows the dictionary form."],
      ["迷惑《めいわく》 を かける と 分《わ》かりつつ も、 夜中《よなか》 に 友達《ともだち》 に 電話《でんわ》 して しまいました means:", ["Because I knew it would bother my friend, I didn't call.", "Although I knew it would bother my friend, I ended up calling in the middle of the night.", "While my friend was bothering me, I called at midnight."], 1, "〜つつ も means \"although\": knowing A, the speaker still did B."],
      ["In a formal explanation to a family, you say \"We will go ahead with treatment while watching how he is.\" Which is correct?", ["様子《ようす》 を 見《み》る つつ、 治療《ちりょう》 を 進《すす》めて まいります。", "様子《ようす》 を 見《み》つつ ある、 治療《ちりょう》 を 進《すす》めて まいります。", "様子《ようす》 を 見《み》つつ、 治療《ちりょう》 を 進《すす》めて まいります。"], 2, "\"While doing\" is the ます-stem + つつ; つつ ある is for a change under way and does not link two actions."],
      ["家族《かぞく》 の 協力《きょうりょく》 を ＿、 少《すこ》し ずつ 生活《せいかつ》 を 立《た》て直《なお》して いく 予定《よてい》 で ある。", ["得《え》つつ", "得《え》る つつ", "得《え》て つつ"], 0, "つつ attaches to the ます-stem: 得《え》る becomes 得《え》つつ."],
      ["引《ひ》っ越《こ》して から、 夫《おっと》 と の 会話《かいわ》 は 減《へ》る 一方《いっぽう》 です means:", ["Since we moved, on the other hand, I talk with my husband.", "Since we moved, I talk only with my husband.", "Since we moved, my husband and I have been talking less and less."], 2, "Sentence-final 減《へ》る 一方《いっぽう》 だ means \"keeps decreasing\"."],
      ["In conversation, you ask a patient whether she listens to music while she studies. Which fits?", ["勉強《べんきょう》 しつつ ある とき、 音楽《おんがく》 を 聴《き》きます か。", "勉強《べんきょう》 しながら、 音楽《おんがく》 を 聴《き》きます か。", "勉強《べんきょう》 する 一方《いっぽう》、 音楽《おんがく》 を 聴《き》きます か。"], 1, "In speech, \"while doing\" is ながら; つつ ある is for change, and 一方《いっぽう》 here would contrast two things."]
    ]
  },
  'n2-ue-de': {
    mistakes: [
      ["検査《けんさ》 の 結果《けっか》 を 見《み》る 上《うえ》 で、 治療《ちりょう》 の 方針《ほうしん》 を 決《き》めましょう。", "検査《けんさ》 の 結果《けっか》 を 見《み》た 上《うえ》 で、 治療《ちりょう》 の 方針《ほうしん》 を 決《き》めましょう。", "\"After doing\" is the た-form + 上《うえ》 で; the dictionary form means \"in doing\"."],
      ["ご家族《かぞく》 と ご相談《そうだん》 上《うえ》、 お決《き》め ください。", "ご家族《かぞく》 と ご相談《そうだん》 の 上《うえ》、 お決《き》め ください。", "A noun takes の before 上《うえ》."],
      ["何度《なんど》 も 話《はな》し合《あ》った あげく、 ご家族《かぞく》 も 納得《なっとく》 して くださいました。", "何度《なんど》 も 話《はな》し合《あ》った 末《すえ》、 ご家族《かぞく》 も 納得《なっとく》 して くださいました。", "あげく is only for an unwanted result; a good outcome after a long process takes 末《すえ》."]
    ],
    more: [
      ["副作用《ふくさよう》 に ついて も 聞《き》いた 上《うえ》 で、 ゆっくり 考《かんが》えて ください。", "Please take your time and think it over after you have also heard about the side effects."],
      ["職場《しょくば》 に 戻《もど》る 上《うえ》 で、 一番《いちばん》 心配《しんぱい》 な こと は 何《なん》 です か。", "In going back to work, what worries you most?"],
      ["本人《ほんにん》 は 長《なが》い 間《あいだ》 迷《まよ》った 末《すえ》、 外来《がいらい》 で の 治療《ちりょう》 を 選《えら》んだ。", "After hesitating for a long time, the patient chose outpatient treatment. (chart note)"],
      ["家族《かぞく》 で 話《はな》し合《あ》った 上《うえ》 で、 犬《いぬ》 を 飼《か》う こと に 決《き》めました。", "After talking it over as a family, we decided to get a dog."],
      ["半年《はんとし》 探《さが》した 末《すえ》 に、 やっと 気《き》 に 入《い》った 部屋《へや》 が 見《み》つかった。", "After six months of looking, I finally found a flat I liked."],
      ["友達《ともだち》 は 一時間《いちじかん》 も 道《みち》 に 迷《まよ》った あげく、 約束《やくそく》 の 店《みせ》 に 着《つ》けなかった。", "My friend was lost for a whole hour and in the end never made it to the restaurant."]
    ],
    quiz: [
      ["運動《うんどう》 を ＿ 上《うえ》 で、 気《き》 を つける こと は あります か。", ["続《つづ》けた", "続《つづ》けて", "続《つづ》ける"], 2, "\"In doing\" is the dictionary form + 上《うえ》 で; the た-form would mean \"after\"."],
      ["記録《きろく》 の 上《うえ》 では、 毎日《まいにち》 服薬《ふくやく》 して いる こと に なって います means:", ["On paper, she is taking her medicine every day.", "She will take her medicine every day after it is recorded.", "She takes her medicine every day in order to keep a record."], 0, "Noun + の 上《うえ》 では means \"in terms of, on\": here, according to the records."],
      ["三《さん》か月《げつ》 リハビリ を 続《つづ》けた ＿、 一人《ひとり》 で 歩《ある》ける よう に なりました。", ["あげく", "末《すえ》", "上《うえ》 で"], 1, "A good result after a long effort takes 末《すえ》; あげく is for an unwanted end, and た 上《うえ》 で leads to a decision or an action."],
      ["You want a patient to sign the consent form after reading it carefully. Which fits?", ["よく 読《よ》んだ あげく、 署名《しょめい》 して ください。", "よく 読《よ》む 上《うえ》 で、 署名《しょめい》 して ください。", "よく 読《よ》んだ 上《うえ》 で、 署名《しょめい》 して ください。"], 2, "Acting on the basis of a first step is the た-form + 上《うえ》 で; あげく is for an unwanted end, and the dictionary form + 上《うえ》 で means \"in doing\"."],
      ["話《はな》し合《あ》い ＿ 末《すえ》、 退院《たいいん》 の 日《ひ》 が 決《き》まった。", ["の", "に", "で"], 0, "A noun takes の before 末《すえ》."],
      ["仕事《しごと》 を 次々《つぎつぎ》 に 引《ひ》き受《う》けた あげく、 体《からだ》 を 壊《こわ》して しまった means:", ["Because he was healthy, he took on job after job.", "After taking on one job after another, he ended up ruining his health.", "While taking on jobs, he got a little tired."], 1, "あげく marks a long process that ended badly."]
    ]
  },
  'n2-ni-kagirazu': {
    mistakes: [
      ["忙《いそが》しい に 限《かぎ》って、 子供《こども》 が 熱《ねつ》 を 出《だ》す。", "忙《いそが》しい とき に 限《かぎ》って、 子供《こども》 が 熱《ねつ》 を 出《だ》す。", "に 限《かぎ》って follows a noun, so an adjective needs とき or 日《ひ》 before it."],
      ["体《からだ》 が 元気《げんき》 限《かぎ》り、 ボランティア を 続《つづ》けたい です。", "体《からだ》 が 元気《げんき》 な 限《かぎ》り、 ボランティア を 続《つづ》けたい です。", "A な-adjective needs な before 限《かぎ》り."],
      ["頭痛《ずつう》 は 朝《あさ》 に 限《かぎ》って、 夜《よる》 に も 起《お》こります。", "頭痛《ずつう》 は 朝《あさ》 に 限《かぎ》らず、 夜《よる》 に も 起《お》こります。", "\"Not only N, but also\" is に 限《かぎ》らず; に 限《かぎ》って points at one case."]
    ],
    more: [
      ["この 症状《しょうじょう》 は 女性《じょせい》 に 限《かぎ》らず、 男性《だんせい》 に も 見《み》られます。", "This symptom is seen not only in women but in men too."],
      ["大事《だいじ》 な 会議《かいぎ》 の 前《まえ》 に 限《かぎ》って、 眠《ねむ》れなく なる ん です。", "It's always before an important meeting, of all times, that I can't sleep."],
      ["調子《ちょうし》 が 悪《わる》く ならない 限《かぎ》り、 次《つぎ》 の 診察《しんさつ》 は 来月《らいげつ》 で 大丈夫《だいじょうぶ》 です。", "Unless you start feeling worse, your next appointment can be next month."],
      ["先着《せんちゃく》 百名《ひゃくめい》 に 限《かぎ》り、 記念品《きねんひん》 を 差《さ》し上《あ》げます。", "A gift will be given to the first hundred people only. (notice)"],
      ["私《わたし》 の 覚《おぼ》えて いる 限《かぎ》り、 父《ちち》 が 怒《おこ》った こと は 一度《いちど》 も ない。", "As far as I remember, my father never once got angry."],
      ["この 公園《こうえん》 は 春《はる》 に 限《かぎ》らず、 一年中《いちねんじゅう》 花《はな》 が 楽《たの》しめます。", "In this park you can enjoy flowers all year round, not only in spring."]
    ],
    quiz: [
      ["うち の 娘《むすめ》 に 限《かぎ》って、 そんな こと は 言《い》いません means:", ["My daughter, of all people, would never say such a thing.", "Only my daughter says that kind of thing.", "Not only my daughter says that kind of thing."], 0, "Noun + に 限《かぎ》って can express strong trust in one person."],
      ["この 制度《せいど》 は 日本人《にほんじん》 ＿、 外国人《がいこくじん》 も 利用《りよう》 できます。", ["に 限《かぎ》り", "に 限《かぎ》らず", "に 限《かぎ》って"], 1, "\"Not only N, also\" with も is に 限《かぎ》らず."],
      ["雨《あめ》 が やまない 限《かぎ》り、 試合《しあい》 は 始《はじ》まりません means:", ["As long as the rain stops, the match won't start.", "Only when it rains does the match not start.", "The match won't start unless the rain stops."], 2, "〜ない 限《かぎ》り means \"unless\"."],
      ["Which sentence is natural?", ["歩《ある》ける に 限《かぎ》らず、 自分《じぶん》 で 買《か》い物《もの》 に 行《い》きたい です。", "目《め》 が 見《み》える 限《かぎ》り、 本《ほん》 を 読《よ》み続《つづ》けたい です。", "目《め》 が 見《み》える に 限《かぎ》って、 本《ほん》 を 読《よ》みたい です。"], 1, "After a verb, \"as long as\" is 限《かぎ》り with no に; the に forms follow nouns."],
      ["A sign says この 駐車場《ちゅうしゃじょう》 の ご利用《りよう》 は、 外来《がいらい》 の 患者《かんじゃ》さん に 限《かぎ》ります。 Who may use the car park?", ["Outpatients, and others too", "Everyone except outpatients", "Outpatients only"], 2, "Sentence-final に 限《かぎ》ります on a notice means \"limited to\"."],
      ["You want to say carefully, \"As far as I can see from the records, there were no problems.\" Which fits?", ["記録《きろく》 を 見《み》る 限《かぎ》り、 問題《もんだい》 は ありません でした。", "記録《きろく》 を 見《み》る に 限《かぎ》らず、 問題《もんだい》 は ありません でした。", "記録《きろく》 に 限《かぎ》って、 問題《もんだい》 は ありません でした。"], 0, "\"As far as\" is a verb of knowing or seeing + 限《かぎ》り."]
    ]
  },
  'n2-bakari-ka': {
    mistakes: [
      ["頭痛《ずつう》 の ばかり で なく、 めまい も あります。", "頭痛《ずつう》 ばかり で なく、 めまい も あります。", "A noun takes ばかり で なく directly, with no の."],
      ["睡眠《すいみん》 ばかり で なく、 食事《しょくじ》 は 大切《たいせつ》 です。", "睡眠《すいみん》 ばかり で なく、 食事《しょくじ》 も 大切《たいせつ》 です。", "The added second point takes も, not は."],
      ["お薬《くすり》 のみ ならず、 生活《せいかつ》 の リズム も 大切《たいせつ》 です よ。", "お薬《くすり》 ばかり で なく、 生活《せいかつ》 の リズム も 大切《たいせつ》 です よ。", "Grammatical but のみ ならず is written style; to a patient say ばかり で なく."]
    ],
    more: [
      ["不安《ふあん》 が 強《つよ》い ばかり か、 外《そと》 に 出《で》る こと さえ できない 日《ひ》 も ある そう です。", "She says that not only is her anxiety strong, there are days she can't even go outside."],
      ["本例《ほんれい》 は 不眠《ふみん》 のみ ならず、 日中《にっちゅう》 の 強《つよ》い 眠気《ねむけ》 も 訴《うった》えて いた。", "This patient complained not only of insomnia but also of marked daytime sleepiness. (case report)"],
      ["診察《しんさつ》 は もちろん、 電話《でんわ》 で の ご相談《そうだん》 も 受《う》け付《つ》けて います。", "We take consultations by phone too, as well as in clinic, of course."],
      ["この 町《まち》 は 交通《こうつう》 が 便利《べんり》 な ばかり で なく、 自然《しぜん》 も 豊《ゆた》か です。", "This town not only has good transport, it has plenty of nature too."],
      ["兄《あに》 は 料理《りょうり》 は もちろん、 掃除《そうじ》 も 得意《とくい》 です。", "My older brother is good at cooking, of course, and at cleaning too."],
      ["祭《まつ》り に は 地元《じもと》 の 人《ひと》 は もとより、 海外《かいがい》 から の 観光客《かんこうきゃく》 も 大勢《おおぜい》 訪《おとず》れる。", "The festival draws not only local people but also many tourists from abroad."]
    ],
    quiz: [
      ["熱《ねつ》 が ＿ ばかり か、 せき も 止《と》まらない。", ["ある", "あって", "あり"], 0, "A verb takes the plain form before ばかり か."],
      ["You want to tell a patient, \"Please rest not only at night but in the daytime too.\" Which fits?", ["夜《よる》 ばかり か、 昼間《ひるま》 も 休《やす》んで ください。", "夜《よる》 ばかり で なく、 昼間《ひるま》 も 休《やす》んで ください。", "夜《よる》 のみ ならず、 昼間《ひるま》 は 休《やす》んで ください。"], 1, "ばかり で なく can end in a request; ばかり か cannot, and the third uses は instead of も."],
      ["この 病院《びょういん》 に は 市内《しない》 は もとより、 県外《けんがい》 から も 患者《かんじゃ》さん が 来《き》ます means:", ["Patients come only from within the city.", "Patients come from the city, of course, and from outside the prefecture too.", "Patients come from outside the prefecture instead of from the city."], 1, "は もとより means \"A goes without saying, and B too\"."],
      ["睡眠不足《すいみんぶそく》 は 判断力《はんだんりょく》 を ＿ のみ ならず、 事故《じこ》 の 原因《げんいん》 に も なる。", ["弱《よわ》めて", "弱《よわ》め", "弱《よわ》める"], 2, "A verb takes the plain form before のみ ならず."],
      ["Which sentence is correct?", ["子供《こども》 は もちろん、 大人《おとな》 で も 難《むずか》しい 問題《もんだい》 だ。", "雨《あめ》 が 降《ふ》る ばかり か、 傘《かさ》 を 持《も》って いきましょう。", "寒《さむ》い な ばかり で なく、 風《かぜ》 も 強《つよ》かった。"], 0, "ばかり か cannot end in an invitation, and an い-adjective takes no な."],
      ["Which pattern belongs mainly to written reports, not to conversation with a patient?", ["〜は もちろん", "〜ばかり で なく", "〜のみ ならず"], 2, "のみ ならず is formal written style; the other two are safe to say."]
    ]
  },
  'n2-wo-hajime': {
    mistakes: [
      ["熱《ねつ》 が ある に かかわらず、 仕事《しごと》 に 行《い》って しまいました。", "熱《ねつ》 が ある に も かかわらず、 仕事《しごと》 に 行《い》って しまいました。", "\"Despite\" is に も かかわらず; without も it means \"regardless of\"."],
      ["今日《きょう》 は 睡眠《すいみん》 の こと が 中心《ちゅうしん》 に、 お話《はなし》 を 伺《うかが》います。", "今日《きょう》 は 睡眠《すいみん》 の こと を 中心《ちゅうしん》 に、 お話《はなし》 を 伺《うかが》います。", "The pattern is noun + を 中心《ちゅうしん》 に; が cannot take its place."],
      ["周《まわ》り の 人《ひと》 が 見《み》て いる も かまわず、 大声《おおごえ》 を 出《だ》して いました。", "周《まわ》り の 人《ひと》 が 見《み》て いる の も かまわず、 大声《おおごえ》 を 出《だ》して いました。", "A verb needs の before も かまわず."]
    ],
    more: [
      ["不眠《ふみん》 を はじめ、 食欲《しょくよく》 の 低下《ていか》 や 疲《つか》れやすさ が 見《み》られる。", "Insomnia, along with reduced appetite and tiredness, is observed. (chart note)"],
      ["この グループ では、 ストレス へ の 対処《たいしょ》 を 中心《ちゅうしん》 に 話《はな》し合《あ》います。", "In this group we talk mainly about ways of coping with stress."],
      ["夕方《ゆうがた》 から 夜《よる》 に かけて、 落《お》ち着《つ》かなく なる こと は あります か。", "Do you ever get restless from the evening into the night?"],
      ["この 講座《こうざ》 は 経験《けいけん》 の 有無《うむ》 を 問《と》わず、 誰《だれ》 でも 受講《じゅこう》 できます。", "Anyone can take this course, with or without experience."],
      ["天気《てんき》 に かかわらず、 毎朝《まいあさ》 六時《ろくじ》 に 犬《いぬ》 の 散歩《さんぽ》 に 行《い》きます。", "Whatever the weather, I take the dog for a walk at six every morning."],
      ["弟《おとうと》 は 服《ふく》 が 汚《よご》れる の も かまわず、 泥《どろ》 の 中《なか》 で 遊《あそ》んで いた。", "My little brother played in the mud, not caring that his clothes were getting dirty."]
    ],
    quiz: [
      ["当院《とういん》 に は 精神科《せいしんか》 ＿ はじめ、 内科《ないか》 や 外科《げか》 など が あります。", ["に", "を", "が"], 1, "The pattern is noun + を はじめ."],
      ["この 仕事《しごと》 は 昼夜《ちゅうや》 を 問《と》わず 呼《よ》び出《だ》される こと が ある means:", ["In this job you may be called in at any hour, day or night.", "In this job you are never called in at night.", "In this job you may be asked about day and night."], 0, "A pair noun such as 昼夜《ちゅうや》 + を 問《と》わず means \"regardless of\"."],
      ["Which sentence is natural?", ["来《く》る を 問《と》わず、 連絡《れんらく》 ください。", "寒《さむ》い を 問《と》わず、 窓《まど》 を 開《あ》けます。", "性別《せいべつ》 を 問《と》わず、 どなた でも 応募《おうぼ》 できます。"], 2, "を 問《と》わず follows a noun of category, not a verb or adjective."],
      ["A patient wants to say the pain spreads from her neck down to her back. Which is natural?", ["首《くび》 から 背中《せなか》 を かけて 痛《いた》い です。", "首《くび》 から 背中《せなか》 に かけて 痛《いた》い です。", "首《くび》 を 中心《ちゅうしん》 から 背中《せなか》 に 痛《いた》い です。"], 1, "A loose range of place is から 〜に かけて, with the particle に."],
      ["母《はは》 は 自分《じぶん》 の 体調《たいちょう》 も かまわず、 父《ちち》 の 看病《かんびょう》 を 続《つづ》けた means:", ["My mother kept nursing my father without regard for her own health.", "My mother stopped nursing my father because of her own health.", "My mother's health improved while she nursed my father."], 0, "〜も かまわず means acting with no regard for N."],
      ["この 勉強会《べんきょうかい》 は 若《わか》い 看護師《かんごし》 を 中心《ちゅうしん》 に 開《ひら》かれて います means:", ["The study group is held in the middle of the young nurses' ward.", "Only nurses who are not young can join the study group.", "Young nurses are the main members of the study group."], 2, "Noun + を 中心《ちゅうしん》 に names the centre or main part of a group or activity."]
    ]
  }
});
