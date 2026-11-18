/* Lesson extras part 10 (0.26.0): common mistakes, more examples and a "More practice" quiz for existing N3 lessons
   (tame-okage-sei, wake, beki-mono-koto, hypotheticals, compound-particles-1, compound-particles-2).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'tame-okage-sei': {
    mistakes: [
      ["カウンセリング の せい で、 気持《きも》ち が 楽《らく》 に なりました。", "カウンセリング の おかげ で、 気持《きも》ち が 楽《らく》 に なりました。", "The result is good, so the cause takes おかげ; せい is for bad results."],
      ["雨《あめ》 せい で、 試合《しあい》 が 中止《ちゅうし》 に なりました。", "雨《あめ》 の せい で、 試合《しあい》 が 中止《ちゅうし》 に なりました。", "A noun needs の before せい, おかげ and ため."],
      ["最近《さいきん》 暇《ひま》 だ せい か、 いろいろ 考《かんが》えて しまいます。", "最近《さいきん》 暇《ひま》 な せい か、 いろいろ 考《かんが》えて しまいます。", "A な-adjective takes な before せい, おかげ and ため, not だ."]
    ],
    more: [
      ["検査《けんさ》 の 結果《けっか》 が まだ 出《で》て いない ため、 退院《たいいん》 は 来週《らいしゅう》 に なります。", "Because the test results are not out yet, discharge will be next week."],
      ["看護師《かんごし》さん が 話《はなし》 を 聞《き》いて くれた おかげ で、 少《すこ》し 安心《あんしん》 できました。", "Thanks to the nurse listening to me, I felt a little reassured."],
      ["お酒《さけ》 の せい か、 朝《あさ》 気分《きぶん》 が 悪《わる》い 日《ひ》 が 多《おお》い です。", "Maybe because of the alcohol, I often feel unwell in the mornings."],
      ["友達《ともだち》 が 手伝《てつだ》って くれた おかげ で、 引《ひ》っ越《こ》し が 早《はや》く 終《お》わりました。", "Thanks to my friends helping, the move was finished quickly."],
      ["バス が 来《こ》なかった せい で、 会議《かいぎ》 に 遅《おく》れて しまいました。", "Because the bus didn't come, I was late for the meeting."],
      ["工事《こうじ》 の ため、 この 道《みち》 は 通《とお》れません。", "This road is closed because of construction work."]
    ],
    quiz: [
      ["Choose the correct formal form: \"because the symptoms were severe\"", ["症状《しょうじょう》 が 重《おも》かった ため", "症状《しょうじょう》 が 重《おも》かった の ため", "症状《しょうじょう》 が 重《おも》い だ ため"], 0, "An い-adjective comes directly before ため, with no の or だ."],
      ["雪《ゆき》 の せい か、 今日《きょう》 は 予約《よやく》 の キャンセル が 多《おお》い です means:", ["Thanks to the snow, all the appointments went ahead today.", "Maybe because of the snow, there are a lot of cancellations today.", "Because of the cancellations, it is snowing today."], 1, "せい か gives a cause of a bad result that the speaker is not sure of: \"maybe because of\"."],
      ["Fill the blank: 先生《せんせい》 が すぐ 診《み》て くださった ＿ で、 母《はは》 は 早《はや》く 元気《げんき》 に なりました。", ["せい", "ため", "おかげ"], 2, "A good result with gratitude takes おかげ で; ため で is not a form, and せい is for bad results."],
      ["Someone asks その 後《ご》、 いかが です か and you are better. Which is the polite set reply?", ["おかげさま で、 元気《げんき》 に して います。", "せい で、 元気《げんき》 に して います。", "ため に、 元気《げんき》 に して います。"], 0, "おかげさま で is the polite set phrase for \"I'm well, thank you\"."],
      ["In 肝臓《かんぞう》 の 働《はたら》き を 調《しら》べる ため に、 血液検査《けつえきけんさ》 を します, ため に gives:", ["the cause of a problem", "the purpose of the test", "a bad result"], 1, "A chosen action in the dictionary form + ため に is a purpose, not a cause."],
      ["Which sentence is natural?", ["彼《かれ》 の せい で、 試験《しけん》 に 合格《ごうかく》 できました。", "彼《かれ》 の ため で、 試験《しけん》 に 合格《ごうかく》 できました。", "彼《かれ》 の おかげ で、 試験《しけん》 に 合格《ごうかく》 できました。"], 2, "Passing is a good result, so おかげ で fits; ため で is not a form."]
    ]
  },
  'wake': {
    mistakes: [
      ["ただ の 風邪《かぜ》 の わけ が ありません。", "ただ の 風邪《かぜ》 な わけ が ありません。", "A noun takes な (or と いう) before わけ, not の."],
      ["患者《かんじゃ》さん が 待《ま》って いる ので、 今《いま》 休《やす》む わけ に は いけません。", "患者《かんじゃ》さん が 待《ま》って いる ので、 今《いま》 休《やす》む わけ に は いきません。", "The set pattern is わけ に は いかない (polite いきません); いけません belongs to 〜なければ いけません."],
      ["今日《きょう》 は 当直《とうちょく》 な ので、 帰《かえ》った わけ に は いきません。", "今日《きょう》 は 当直《とうちょく》 な ので、 帰《かえ》る わけ に は いきません。", "わけ に は いかない follows only the dictionary form or the ない-form, never the た-form."]
    ],
    more: [
      ["つまり、 朝《あさ》 は 大丈夫《だいじょうぶ》 で、 夕方《ゆうがた》 に なる と 不安《ふあん》 が 強《つよ》く なる わけ です ね。", "So in other words, you're all right in the morning, and the anxiety gets stronger in the evening."],
      ["治療《ちりょう》 を やめたい わけ では ありません。 ただ、 少《すこ》し 休《やす》みたい ん です。", "It's not that I want to stop treatment. I just want a little break."],
      ["家族《かぞく》 に 心配《しんぱい》 を かける わけ に は いかない と 思《おも》って、 誰《だれ》 に も 言《い》えません でした。", "I felt I couldn't very well worry my family, so I couldn't tell anyone."],
      ["十年《じゅうねん》 も アメリカ に 住《す》んで いた ん です か。 英語《えいご》 が 上手《じょうず》 な わけ です ね。", "You lived in America for ten years? No wonder your English is so good."],
      ["こんな に 安《やす》い 時計《とけい》 が 本物《ほんもの》 な わけ が ありません。", "There's no way a watch this cheap is genuine."],
      ["日本《にほん》 の 料理《りょうり》 が 全部《ぜんぶ》 好《す》き な わけ じゃ ない けど、 ラーメン は 大好《だいす》き。", "It's not that I like all Japanese food, but I love ramen."]
    ],
    quiz: [
      ["Fill the blank: 先輩《せんぱい》 に 頼《たの》まれた ので、 引《ひ》き受《う》けない ＿ に は いきません。", ["はず", "わけ", "こと"], 1, "ない-form + わけ に は いかない means \"I can't not do it\", that is, \"I have to\"."],
      ["一人《ひとり》 で 全部《ぜんぶ》 できる わけ が ありません means:", ["It's not that I can do it all alone.", "No wonder I can do it all alone.", "There's no way I can do it all alone."], 2, "わけ が ありません is a strong denial: \"there's no way\"."],
      ["A patient sleeps well but has no energy. You want to check: \"So it's not that you can't sleep.\" Which fits?", ["つまり、 眠《ねむ》れない わけ では ない ん です ね。", "つまり、 眠《ねむ》れない わけ が ない ん です ね。", "つまり、 眠《ねむ》れない わけ に は いかない ん です ね。"], 0, "わけ では ない corrects a conclusion gently: \"it's not that\"."],
      ["Choose the correct form: \"there's no way it's a coincidence\"", ["偶然《ぐうぜん》 の わけ が ない", "偶然《ぐうぜん》 だ わけ が ない", "偶然《ぐうぜん》 な わけ が ない"], 2, "A noun takes な before わけ."],
      ["A family member asks to see another patient's records. Which reply is polite and clear?", ["お見《み》せ する わけ が ありません。", "申《もう》し訳《わけ》 ありません が、 お見《み》せ する わけ に は いかない ん です。", "お見《み》せ する わけ です。"], 1, "わけ に は いかない gives a duty-based \"I can't\" politely; わけ が ありません sounds like a flat rejection."],
      ["A patient says 最近《さいきん》 毎日《まいにち》 コーヒー を 五杯《ごはい》 飲《の》んで います. Which reply means \"No wonder you can't sleep\"?", ["眠《ねむ》れない わけ です ね。", "眠《ねむ》れない わけ では ありません ね。", "眠《ねむ》れる わけ に は いきません ね。"], 0, "わけ です ね states a conclusion that follows from what you just heard."]
    ]
  },
  'beki-mono-koto': {
    mistakes: [
      ["親《おや》 は 子《こ》ども の こと が 心配《しんぱい》 もの です。", "親《おや》 は 子《こ》ども の こと が 心配《しんぱい》 な もの です。", "A な-adjective takes な before もの."],
      ["お酒《さけ》 は やめる べき です。", "お酒《さけ》 は やめた ほう が いい と 思《おも》います。", "Grammatical, but said to a patient べき sounds like a lecture; suggest gently with 〜た ほう が いい と 思《おも》います."],
      ["去年《きょねん》 一度《いちど》 だけ 沖縄《おきなわ》 に 行《い》った もの です。", "去年《きょねん》 一度《いちど》 だけ 沖縄《おきなわ》 に 行《い》きました。", "た-form + もの だ is for something done often in the past, not a single event."]
    ],
    more: [
      ["不安《ふあん》 な とき は、 一人《ひとり》 で 抱《かか》え込《こ》まない こと が 大切《たいせつ》 です。", "When you feel anxious, it's important not to keep it all to yourself."],
      ["退院《たいいん》 した ばかり の ころ は、 疲《つか》れやすい もの です。", "Just after discharge, it's normal to tire easily."],
      ["医者《いしゃ》 と して、 治療《ちりょう》 の リスク は きちんと 説明《せつめい》 する べき だ と 考《かんが》えて います。", "As a doctor, I believe I should explain the risks of treatment properly."],
      ["学生《がくせい》 の ころ は、 よく 友達《ともだち》 と 朝《あさ》 まで 話《はな》した もの です。", "As a student, I often used to talk with friends until morning."],
      ["あんな に 練習《れんしゅう》 した ん だ から、 失敗《しっぱい》 する はず が ない よ。", "You practised that much, so there's no way you'll fail."],
      ["上手《じょうず》 に なりたければ、 毎日《まいにち》 少《すこ》し でも 練習《れんしゅう》 する こと だ。", "If you want to get good, the thing to do is practise every day, even a little."]
    ],
    quiz: [
      ["Choose the correct form: \"you should check\"", ["確認《かくにん》した べき です", "確認《かくにん》する べき です", "確認《かくにん》して べき です"], 1, "べき follows the dictionary form: する べき (or す べき)."],
      ["人《ひと》 の 手紙《てがみ》 を 勝手《かって》 に 読《よ》む もの では ありません means:", ["One shouldn't read other people's letters without permission.", "I used to read other people's letters.", "There's no way I read other people's letters."], 0, "〜もの では ありません states a social rule: \"one shouldn't\"."],
      ["鈴木《すずき》さん は 今日《きょう》 休《やす》み です から、 ここ に いる はず が ありません means:", ["Ms Suzuki is off today, so she isn't supposed to be here (it is against the rules).", "Ms Suzuki is off today, but I expect she is here.", "Ms Suzuki is off today, so she can't be here."], 2, "はず が ありません rules something out from the facts; a rule would be べき では ない, and an expectation that she is here would be いる はず です."],
      ["A patient says 母親《ははおや》 は いつも 笑顔《えがお》 で いる べき です. What is this?", ["a strict personal rule worth exploring", "a memory of a past habit", "a statement that something is impossible"], 0, "Patients' べき often states a rule they live by; explore where it comes from."],
      ["Choose the natural sentence for \"I should have told my family sooner.\"", ["もっと 早《はや》く 家族《かぞく》 に 話《はな》した べき でした。", "もっと 早《はや》く 家族《かぞく》 に 話《はな》さない べき でした。", "もっと 早《はや》く 家族《かぞく》 に 話《はな》す べき でした。"], 2, "Dictionary form + べき でした means \"should have\"; べき never follows the た-form or the ない-form."],
      ["A doctor says よく なりたければ、 まず しっかり 寝《ね》る こと です. What is the doctor doing?", ["describing a past habit", "giving direct advice", "saying something cannot be true"], 1, "Dictionary form + こと です gives firm, direct advice: \"what you need to do is\"."]
    ]
  },
  'hypotheticals': {
    mistakes: [
      ["時間《じかん》 が さえ あれば、 もっと 勉強《べんきょう》 できる のに。", "時間《じかん》 さえ あれば、 もっと 勉強《べんきょう》 できる のに。", "After a noun, さえ takes the place of が or を."],
      ["昨日《きのう》 は 早《はや》く 寝《ね》る ば よかった。", "昨日《きのう》 は 早《はや》く 寝《ね》れば よかった。", "ば never follows the dictionary form; the ば-form of 寝《ね》る is 寝《ね》れば."],
      ["もっと 早《はや》く 連《つ》れて 来《く》れば よかった のに。", "今日《きょう》 連《つ》れて 来《き》て くださって よかった です。", "Grammatical, but 〜ば よかった のに about a family's actions sounds like blame; thank them for coming instead."]
    ],
    more: [
      ["眠《ねむ》れない こと が 心配《しんぱい》 なら、 次回《じかい》 の 診察《しんさつ》 で 詳《くわ》しく 相談《そうだん》 しましょう。", "If not sleeping worries you, let's talk about it in detail at your next appointment."],
      ["もし 一日《いちにち》 だけ 自由《じゆう》 に 過《す》ごせる と したら、 何《なに》 を したい です か。", "Supposing you could spend just one day however you liked, what would you want to do?"],
      ["朝《あさ》 起《お》き さえ すれば、 あと は 何《なん》とか なる ん です。", "As long as I get up in the morning, I can manage the rest."],
      ["傘《かさ》 を 持《も》って くれば よかった。", "I wish I'd brought an umbrella."],
      ["家《いえ》 が もう 少《すこ》し 駅《えき》 から 近《ちか》ければ いい のに。", "If only my house were a little closer to the station."],
      ["パソコン なら、 駅前《えきまえ》 の 店《みせ》 が 安《やす》い です よ。", "If it's a computer you want, the shop in front of the station is cheap."]
    ],
    quiz: [
      ["Which means \"I wish I hadn't eaten so much\"?", ["あんな に 食《た》べれば よかった。", "あんな に 食《た》べない ば よかった。", "あんな に 食《た》べなければ よかった。"], 2, "Regret for something done is 〜なければ よかった."],
      ["仕事《しごと》 さえ 見《み》つかれば、 生活《せいかつ》 は 落《お》ち着《つ》く と 思《おも》います means:", ["As long as I find a job, I think my life will settle down.", "Even if I find a job, my life won't settle down.", "I found a job, so my life has settled down."], 0, "Noun + さえ + ば-form means \"as long as\": the job is the one thing needed."],
      ["Fill the blank: 「明日《あした》、 図書館《としょかん》 に 行《い》きます。」 「図書館《としょかん》 ＿、 午前中《ごぜんちゅう》 が 空《す》いて います よ。」", ["さえ", "なら", "のに"], 1, "なら takes up what the other person said and gives advice about it."],
      ["You want a patient to imagine life without the illness. Which question fits?", ["もし 症状《しょうじょう》 が なく なった と したら、 どんな 毎日《まいにち》 に なる と 思《おも》います か。", "症状《しょうじょう》 が なく なれば よかった です ね。", "症状《しょうじょう》 さえ なく なった のに。"], 0, "と したら sets up a supposition for the patient to imagine."],
      ["A patient says 生《う》まれて こなければ よかった. What is the best next step?", ["Explain that ば よかった is only for small regrets.", "Agree that everyone feels that way sometimes and move on.", "Ask gently whether she has thoughts of dying or of disappearing."], 2, "A wish never to have been born can be a passive wish to die and needs a gentle follow-up question."],
      ["Which is a hopeful wish for someone that could come true?", ["早《はや》く 治《なお》れば よかった。", "早《はや》く 治《なお》る と いい です ね。", "早《はや》く 治《なお》った と したら、 どう します か。"], 1, "〜と いい です ね is a hopeful wish; ば よかった is regret, and と したら sets up a supposition."]
    ]
  },
  'compound-particles-1': {
    mistakes: [
      ["これ は 認知症《にんちしょう》 に ついて パンフレット です。", "これ は 認知症《にんちしょう》 に ついて の パンフレット です。", "Before a noun, に ついて needs の: に ついて の."],
      ["天気予報《てんきよほう》 に よって、 明日《あした》 は 雨《あめ》 だ そう です。", "天気予報《てんきよほう》 に よる と、 明日《あした》 は 雨《あめ》 だ そう です。", "The source of information is に よる と; に よって means \"depending on\" or \"by\"."],
      ["子《こ》ども に とって 優《やさ》しく して ください。", "子《こ》ども に 対《たい》して 優《やさ》しく して ください。", "An attitude directed at someone takes に 対《たい》して; に とって gives a point of view for a judgement."]
    ],
    more: [
      ["お子《こ》さん に 対《たい》して は、 今《いま》 どんな お気持《きも》ち です か。", "How do you feel toward your children now?"],
      ["看護記録《かんごきろく》 に よる と、 昨夜《さくや》 は 二回《にかい》 目《め》 が 覚《さ》めた そう です。", "According to the nursing notes, she woke twice last night."],
      ["入院《にゅういん》 に 関《かん》する ご質問《しつもん》 は、 病棟《びょうとう》 の 看護師《かんごし》 に お尋《たず》ね ください。", "Please ask the ward nurses any questions concerning admission."],
      ["留学生《りゅうがくせい》 に とって、 日本《にほん》 の 敬語《けいご》 は 難《むずか》しい です。", "For international students, Japanese honorific language is difficult."],
      ["この 寺《てら》 は 有名《ゆうめい》 な 建築家《けんちくか》 に よって 建《た》てられました。", "This temple was built by a famous architect."],
      ["環境問題《かんきょうもんだい》 に ついて、 レポート を 書《か》いて います。", "I'm writing a report about environmental problems."]
    ],
    quiz: [
      ["Fill the blank: 人《ひと》 ＿、 薬《くすり》 の 効《き》き方《かた》 は 違《ちが》います。", ["に よって", "に ついて", "に 対《たい》する"], 0, "に よって + 違《ちが》う means \"differs depending on\"."],
      ["Which phrase means \"insomnia caused by pain\"?", ["痛《いた》み に とって 不眠《ふみん》", "痛《いた》み に よる と 不眠《ふみん》", "痛《いた》み に よる 不眠《ふみん》"], 2, "Before a noun, に よって becomes に よる."],
      ["患者《かんじゃ》さん に とって、 入院《にゅういん》 は 大《おお》きな 決断《けつだん》 です means:", ["The patient made a big decision about the hospital.", "For the patient, being admitted is a big decision.", "Because of the patient, the admission was decided."], 1, "に とって gives the point of view from which the judgement is made."],
      ["Which title fits a formal hospital notice?", ["面会《めんかい》 に 関《かん》する お知《し》らせ", "面会《めんかい》 に とって の お知《し》らせ", "面会《めんかい》 に よる と お知《し》らせ"], 0, "に 関《かん》する is the formal noun-modifying form of \"concerning\"."],
      ["You report what the referral letter says about the patient's sleep. Which fits?", ["紹介状《しょうかいじょう》 に とって、 夜《よる》 眠《ねむ》れない そう です。", "紹介状《しょうかいじょう》 に 対《たい》して、 夜《よる》 眠《ねむ》れない そう です。", "紹介状《しょうかいじょう》 に よれば、 夜《よる》 眠《ねむ》れない と いう こと です。"], 2, "に よれば gives the source, and the hearsay ending と いう こと です matches it."],
      ["Which sentence is natural?", ["彼《かれ》 は 誰《だれ》 に とって も 優《やさ》しく します。", "彼《かれ》 は 誰《だれ》 に 対《たい》して も 優《やさ》しい です。", "彼《かれ》 は 誰《だれ》 に よる と も 優《やさ》しい です。"], 1, "Kindness directed at people takes に 対《たい》して; に 対《たい》して も means \"toward anyone\"."]
    ]
  },
  'compound-particles-2': {
    mistakes: [
      ["電車《でんしゃ》 代《か》わり に バス で 来《き》ました。", "電車《でんしゃ》 の 代《か》わり に バス で 来《き》ました。", "After a noun, 代《か》わり に needs の."],
      ["看護師《かんごし》 と したら、 十年《じゅうねん》 働《はたら》いて います。", "看護師《かんごし》 と して、 十年《じゅうねん》 働《はたら》いて います。", "A role is と して (as); と したら means \"supposing\"."],
      ["先週《せんしゅう》 を 比《くら》べて、 食欲《しょくよく》 が 出《で》て きました。", "先週《せんしゅう》 に 比《くら》べて、 食欲《しょくよく》 が 出《で》て きました。", "\"Compared with\" is に 比《くら》べて (or と 比《くら》べて), not を."]
    ],
    more: [
      ["ご家族《かぞく》 と して、 何《なに》 か 気《き》 に なる こと は あります か。", "As his family, is there anything that concerns you?"],
      ["頭痛《ずつう》 に 加《くわ》えて、 めまい も あります か。", "In addition to the headaches, do you have dizziness too?"],
      ["数年《すうねん》 に わたって、 気分《きぶん》 の 波《なみ》 が 続《つづ》いて いる よう です。", "It seems her mood has been going up and down over several years."],
      ["去年《きょねん》 に 比《くら》べて、 今年《ことし》 の 夏《なつ》 は 涼《すず》しい です ね。", "Compared with last year, this summer is cool, isn't it."],
      ["友達《ともだち》 を 通《とお》して、 今《いま》 の 仕事《しごと》 を 紹介《しょうかい》 して もらいました。", "I got my current job through a friend's introduction."],
      ["今日《きょう》 は 雨《あめ》 な ので、 散歩《さんぽ》 の 代《か》わり に 家《いえ》 で ストレッチ を します。", "It's raining today, so instead of a walk I'll stretch at home."]
    ],
    quiz: [
      ["Fill the blank: 熱《ねつ》 ＿、 せき も 出《で》て います。", ["と して", "に 加《くわ》えて", "に わたって"], 1, "に 加《くわ》えて adds one more item, here with も: \"in addition to\"."],
      ["今日《きょう》 は 早《はや》く 帰《かえ》ります。 その 代《か》わり、 明日《あした》 は 遅《おそ》く まで 残《のこ》ります means:", ["I'll leave early today; in return, I'll stay late tomorrow.", "I'll leave early today because I stayed late yesterday.", "Compared with today, I'll stay later tomorrow."], 0, "その 代《か》わり at the start of a sentence means \"instead\" or \"in return\"."],
      ["Which phrase means \"a study lasting ten years\"?", ["十年《じゅうねん》 に わたって 研究《けんきゅう》", "十年《じゅうねん》 に 比《くら》べる 研究《けんきゅう》", "十年《じゅうねん》 に わたる 研究《けんきゅう》"], 2, "Before a noun, に わたって becomes に わたる."],
      ["You are seeing a patient today in place of the doctor in charge. Which fits?", ["今日《きょう》 は 担当《たんとう》 の 先生《せんせい》 の 代《か》わり に、 私《わたし》 が 診察《しんさつ》 します。", "今日《きょう》 は 担当《たんとう》 の 先生《せんせい》 に 加《くわ》えて、 私《わたし》 が 診察《しんさつ》 します。", "今日《きょう》 は 担当《たんとう》 の 先生《せんせい》 に 比《くら》べて、 私《わたし》 が 診察《しんさつ》 します。"], 0, "の 代《か》わり に means \"in place of\"; に 加《くわ》えて would mean both of you."],
      ["私《わたし》 と して は、 もう 少《すこ》し 様子《ようす》 を 見《み》たい です means:", ["Supposing it were me, I would wait a little.", "Speaking for myself, I'd like to watch how things go a little longer.", "As well as me, others want to wait a little."], 1, "と して は gives the speaker's own view: \"speaking for myself\"."],
      ["Which sentence uses its compound particle correctly?", ["五分《ごふん》 に わたって 話《はな》しました。", "友達《ともだち》 に 比《くら》べて 手紙《てがみ》 を 送《おく》りました。", "メール を 通《つう》じて 連絡《れんらく》 を 取《と》りました。"], 2, "を 通《つう》じて gives the medium; に わたって needs a long span, and に 比《くら》べて needs a comparison."]
    ]
  }
});
