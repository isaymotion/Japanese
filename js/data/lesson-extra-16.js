/* Lesson extras part 16 (0.26.0): common mistakes, more examples and a "More practice" quiz for existing N2 lessons
   (n2-mono, n2-koto, n2-tokoro, n2-ni-shite-wa, n2-mushiro, n2-to-wa).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n2-mono': {
    mistakes: [
      ["家《いえ》 に 帰《かえ》る もの なら、 今《いま》 すぐ 帰《かえ》りたい です。", "家《いえ》 に 帰《かえ》れる もの なら、 今《いま》 すぐ 帰《かえ》りたい です。", "The wish \"if only I could\" needs the potential form before もの なら."],
      ["疲《つか》れて いる ものの、 少《すこ》し 歩《ある》こう。", "疲《つか》れて いる けど、 少《すこ》し 歩《ある》こう。", "The second half of 〜ものの states a fact, not a suggestion or request, and ものの is written in tone; for \"let's\" use けど."],
      ["一人《ひとり》 で よく 頑張《がんば》った もの です ね。", "一人《ひとり》 で よく 頑張《がんば》って こられました ね。", "Grammatical but よく 〜た もの です ね can sound like a judgement from above; to praise a patient's effort say よく 〜て こられました ね."]
    ],
    more: [
      ["「もう 誰《だれ》 も 信用《しんよう》 する もん か」 と 患者《かんじゃ》さん は 繰《く》り返《かえ》して いました。", "The patient kept saying, \"I'm never trusting anyone again.\""],
      ["服薬《ふくやく》 は 続《つづ》けて いる ものの、 幻聴《げんちょう》 は 完全《かんぜん》 に は 消《き》えて いない。", "(Chart note) Although she continues her medication, the voices have not completely gone."],
      ["少《すこ》し でも 弱音《よわね》 を 吐《は》こう もの なら、 父《ちち》 に 厳《きび》しく 叱《しか》られました。", "If I so much as complained a little, my father would scold me harshly."],
      ["戻《もど》れる もの なら、 学生時代《がくせいじだい》 に 戻《もど》りたい。", "If I could go back, I'd go back to my student days."],
      ["昔《むかし》 は よく 父《ちち》 と 川《かわ》 で 釣《つ》り を した もの だ。", "I often used to go fishing in the river with my father."],
      ["新《あたら》しい 機械《きかい》 を 買《か》った ものの、 使《つか》い方《かた》 が よく わからない。", "I bought a new machine, but I don't really know how to use it."]
    ],
    quiz: [
      ["Which form of 帰《かえ》る goes before もの なら for \"if only I could go home\"?", ["帰《かえ》れる", "帰《かえ》ろう", "帰《かえ》った"], 0, "The wish uses the potential form; the volitional form gives \"if you so much as\"."],
      ["A patient says 「こんな 薬《くすり》 なんか 二度《にど》 と 飲《の》む もん か」. She:", ["is asking for a different medicine", "angrily refuses ever to take it again", "has taken it twice"], 1, "Dictionary form + もん か with 二度《にど》 と is an angry \"I will never\"."],
      ["(Chart note) 表情《ひょうじょう》 は 穏《おだ》やか に なった ＿、 会話《かいわ》 は まだ 少《すく》ない。", ["もの なら", "もん か", "ものの"], 2, "〜ものの is the written \"although\": the first fact is accepted, the expected result has not followed."],
      ["Which fits a referral letter for \"although he continues to attend clinic\"?", ["通院《つういん》 は 続《つづ》けて いる ものの", "通院《つういん》 は 続《つづ》けてる けど", "通院《つういん》 は 続《つづ》けて いる もん か"], 0, "〜ものの is formal and written; 続《つづ》けてる けど is casual speech, and もん か is an angry denial."],
      ["Looking at old photos, a woman says あんな 古《ふる》い カメラ で よく こんな きれい な 写真《しゃしん》 が 撮《と》れた もの だ. She is:", ["remembering that she often took photos", "impressed that such good photos were taken with that camera", "complaining that the photos are bad"], 1, "Here よく means \"so well\": よく 〜た もの だ expresses admiration for what was managed."],
      ["Which sentence means \"If I so much as open the window, my neighbour complains\"?", ["窓《まど》 を 開《あ》けられる もの なら、 隣《となり》 の 人《ひと》 に 文句《もんく》 を 言《い》われます。", "窓《まど》 を 開《あ》けた ものの、 隣《となり》 の 人《ひと》 に 文句《もんく》 を 言《い》われます。", "窓《まど》 を 開《あ》けよう もの なら、 隣《となり》 の 人《ひと》 に 文句《もんく》 を 言《い》われます。"], 2, "Volitional form + もの なら means \"if one dared to do even that\", with a bad result."]
    ]
  },
  'n2-koto': {
    mistakes: [
      ["診察《しんさつ》 する こと に は、 何《なに》 も わかりません。", "診察《しんさつ》 しない こと に は、 何《なに》 も わかりません。", "\"Unless\" is the ない-form + こと に は."],
      ["誰《だれ》 に も 相談《そうだん》 しない こと なく、 退職《たいしょく》 した。", "誰《だれ》 に も 相談《そうだん》 する こと なく、 退職《たいしょく》 した。", "こと なく already means \"without\", so it takes the dictionary form, not the ない-form."],
      ["熱《ねつ》 も 下《さ》がった こと だし、 シャワー を 浴《あ》びて みよう か。", "熱《ねつ》 も 下《さ》がった こと です し、 シャワー を 浴《あ》びて みましょう か。", "Grammatical but こと だし with 〜よう か is casual; to a patient say こと です し and 〜ましょう か."]
    ],
    more: [
      ["ご本人《ほんにん》 と 直接《ちょくせつ》 話《はな》さない こと に は、 入院《にゅういん》 が 必要《ひつよう》 か どう か 判断《はんだん》 できません。", "Unless I talk with him directly, I can't judge whether he needs to be admitted."],
      ["入院後《にゅういんご》 は 興奮《こうふん》 する こと なく、 穏《おだ》やか に 過《す》ごして いる。", "(Chart note) Since admission he has stayed calm, without becoming agitated."],
      ["驚《おどろ》いた こと に、 ご本人《ほんにん》 から 「治療《ちりょう》 を 続《つづ》けたい」 と いう 言葉《ことば》 が 聞《き》かれました。", "(Case presentation) To our surprise, the patient himself said that he wanted to continue treatment."],
      ["せっかく みんな 集《あつ》まった こと だし、 写真《しゃしん》 を 撮《と》ろう。", "Since we've all got together, let's take a photo."],
      ["申込書《もうしこみしょ》 を 出《だ》さない こと に は、 参加《さんか》 できません。", "Unless you hand in the application form, you can't take part."],
      ["不思議《ふしぎ》 な こと に、 その 夜《よる》 は 少《すこ》し も 怖《こわ》く なかった。", "Strangely, I wasn't frightened at all that night."]
    ],
    quiz: [
      ["(Chart note) 一度《いちど》 も 弱音《よわね》 を 吐《は》く ＿、 介護《かいご》 を 続《つづ》けて きた。", ["こと なく", "こと だし", "こと に は"], 0, "Dictionary form + こと なく is the written \"without (ever) doing\"."],
      ["Which form goes before こと に は to mean \"unless we check\"?", ["確認《かくにん》 する", "確認《かくにん》 しない", "確認《かくにん》 した"], 1, "〜ない こと に は takes the ない-form."],
      ["嬉《うれ》しい こと に、 娘《むすめ》さん が 面会《めんかい》 に 来《き》て くれました means:", ["The daughter decided to come because she was happy.", "The daughter was happy to come.", "I'm glad to say that the daughter came to visit."], 2, "Emotion word + こと に frames the whole fact with the speaker's feeling."],
      ["The pain has eased, and you suggest the patient try a short walk. Which fits?", ["痛《いた》み も 和《やわ》らいだ こと です し、 少《すこ》し 歩《ある》いて みましょう か。", "痛《いた》み も 和《やわ》らいだ こと に、 少《すこ》し 歩《ある》いて みましょう か。", "痛《いた》み も 和《やわ》らいだ こと なく、 少《すこ》し 歩《ある》いて みましょう か。"], 0, "こと です し gives a reason that leads to a suggestion."],
      ["A family asks whether their son is depressed. You have not examined him yet. You say:", ["診察《しんさつ》 しない こと なく、 何《なん》 と も 言《い》えません。", "診察《しんさつ》 して みない こと に は、 何《なん》 と も 言《い》えません。", "診察《しんさつ》 した こと だし、 何《なん》 と も 言《い》えません。"], 1, "〜ない こと に は + a negative says the examination must come first."],
      ["(Chart note) Which is the written way to say 眠《ねむ》らないで 朝《あさ》 まで 話《はな》し続《つづ》けた?", ["眠《ねむ》る こと に は 朝《あさ》 まで 話《はな》し続《つづ》けた。", "眠《ねむ》る こと だし 朝《あさ》 まで 話《はな》し続《つづ》けた。", "眠《ねむ》る こと なく 朝《あさ》 まで 話《はな》し続《つづ》けた。"], 2, "こと なく is the written form of 〜ないで and 〜ず に."]
    ]
  },
  'n2-tokoro': {
    mistakes: [
      ["今《いま》 から 謝《あやま》る ところ で、 許《ゆる》して もらえない だろう。", "今《いま》 から 謝《あやま》った ところ で、 許《ゆる》して もらえない だろう。", "\"Even if (it's no use)\" always takes the た-form before ところ で, even about the future."],
      ["お休《やす》み ところ すみません、 血圧《けつあつ》 を 測《はか》らせて ください。", "お休《やす》み の ところ すみません、 血圧《けつあつ》 を 測《はか》らせて ください。", "A noun needs の before ところ."],
      ["熱《ねつ》 が 高《たか》くて、 仕事《しごと》 どころ か ありません でした。", "熱《ねつ》 が 高《たか》くて、 仕事《しごと》 どころ では ありません でした。", "\"Out of the question\" is どころ では ない; どころ か (far from) needs a second clause."]
    ],
    more: [
      ["お食事中《しょくじちゅう》 の ところ 失礼《しつれい》します。 少《すこ》し だけ お話《はなし》 を 伺《うかが》って も よろしい です か。", "Sorry to interrupt your meal. May I ask you a few questions?"],
      ["ご本人《ほんにん》 に 睡眠《すいみん》 の 様子《ようす》 を 尋《たず》ねた ところ、 毎晩《まいばん》 二時間《にじかん》 ほど しか 眠《ねむ》れて いない との こと だった。", "When we asked her about her sleep, she said she was sleeping only about two hours a night."],
      ["相談《そうだん》 する どころ か、 家族《かぞく》 と は ほとんど 口《くち》 を きいて いない そう です。", "Far from talking things over, he has hardly spoken to his family, I hear."],
      ["夕飯《ゆうはん》 を 作《つく》って いる ところ へ、 友達《ともだち》 が 遊《あそ》び に 来《き》た。", "Just as I was making dinner, a friend dropped by."],
      ["いまさら 後悔《こうかい》 した ところ で、 どう に も なりません。", "Regretting it now won't change anything."],
      ["試験前《しけんまえ》 で、 遊《あそ》び どころ では ない。", "The exam is coming up, so going out to have fun is out of the question."]
    ],
    quiz: [
      ["(Case presentation) 母親《ははおや》 に 話《はなし》 を 聞《き》いた ＿、 三日前《みっかまえ》 から 食事《しょくじ》 を とって いない こと が わかった。", ["ところ", "ところ で", "どころ か"], 0, "た-form + ところ、 + a past result reports what was found."],
      ["どんな に 説明《せつめい》 した ところ で、 信《しん》じて もらえない means:", ["Once I explained it, they believed me.", "However much I explain, they won't believe me.", "Just as I was explaining, they came in."], 1, "た-form + ところ で + a negative means \"even if I did, it would be no use\"."],
      ["Which sentence means \"Staff saw him leaving the ward without permission\"?", ["無断《むだん》 で 病棟《びょうとう》 を 出《で》る どころ か 職員《しょくいん》 に 見《み》られた。", "無断《むだん》 で 病棟《びょうとう》 を 出《で》る どころ では なく 職員《しょくいん》 に 見《み》られた。", "無断《むだん》 で 病棟《びょうとう》 を 出《で》る ところ を 職員《しょくいん》 に 見《み》られた。"], 2, "〜ところ を 見《み》られる means someone was seen in the middle of doing something."],
      ["A patient says 眠《ねむ》れる どころ か、 一晩中《ひとばんじゅう》 目《め》 が 冴《さ》えて いました. She means:", ["Far from sleeping, she was wide awake all night.", "She slept well instead of staying up.", "She was so sleepy that she could do nothing else."], 0, "X どころ か, Y: far from X, the opposite happened."],
      ["To thank a family for coming on their day off, you say:", ["お休《やす》み どころ か、 お越《こ》し いただき ありがとう ございます。", "お休《やす》み の ところ、 お越《こ》し いただき ありがとう ございます。", "お休《やす》み の ところ で、 お越《こ》し いただき ありがとう ございます。"], 1, "Noun + の ところ is the set phrase that thanks someone for their time."],
      ["家《いえ》 を 出《で》よう と した ＿、 宅配便《たくはいびん》 が 届《とど》いた。", ["どころ か", "ところ を", "ところ に"], 2, "〜ところ に means \"just then\", followed by an arrival or interruption."]
    ]
  },
  'n2-ni-shite-wa': {
    mistakes: [
      ["名前《なまえ》 と いい 住所《じゅうしょ》 と いい、 ここ に 書《か》いて ください。", "名前《なまえ》 と 住所《じゅうしょ》 を ここ に 書《か》いて ください。", "〜と いい 〜と いい must end in a judgement of the whole, not a request or a neutral list."],
      ["忙《いそが》しい に して は、 よく 来《き》て くれます ね。", "忙《いそが》しい わり に、 よく 来《き》て くれます ね。", "に して は does not normally follow an adjective; after an adjective use わり に."],
      ["一人《ひとり》 で 暮《く》らします に して も ご家族《かぞく》 と 住《す》みます に して も、 退院後《たいいんご》 の 支援《しえん》 は 続《つづ》けます。", "一人《ひとり》 で 暮《く》らす に して も ご家族《かぞく》 と 住《す》む に して も、 退院後《たいいんご》 の 支援《しえん》 は 続《つづ》けます。", "〜に して も 〜に して も follows the plain form even in polite speech; only the end of the sentence takes ます."]
    ],
    more: [
      ["入院《にゅういん》 して 二日目《ふつかめ》 に して は、 病棟《びょうとう》 の 生活《せいかつ》 に よく 慣《な》れて います ね。", "For his second day in hospital, he has settled into ward life well."],
      ["仕事《しごと》 に 戻《もど》る に して も もう 少《すこ》し 休《やす》む に して も、 まず 職場《しょくば》 の 方《かた》 と 相談《そうだん》 しましょう。", "Whether you go back to work or rest a little longer, let's first talk it over with your workplace."],
      ["いずれ に せよ、 今夜《こんや》 の 様子《ようす》 を 見《み》て、 明日《あした》 の 朝《あさ》 もう 一度《いちど》 評価《ひょうか》 します。", "In any case, we'll watch how he is tonight and reassess him tomorrow morning."],
      ["色《いろ》 と いい 形《かたち》 と いい、 この コート が 一番《いちばん》 気《き》 に 入《い》りました。", "In both colour and shape, I like this coat best."],
      ["驚《おどろ》く やら 嬉《うれ》しい やら で、 言葉《ことば》 が 出《で》ません でした。", "What with surprise and happiness, I was lost for words."],
      ["どんな 理由《りゆう》 が ある に せよ、 約束《やくそく》 の 時間《じかん》 に 遅《おく》れる の は よくない。", "Whatever the reason, it's not good to be late for an appointment."]
    ],
    quiz: [
      ["八十歳《はちじゅっさい》 ＿、 足腰《あしこし》 が しっかり して います ね。", ["に して は", "に して も", "やら"], 0, "Noun + に して は: the result is not what the age would lead you to expect."],
      ["外来《がいらい》 で 続《つづ》ける に して も 入院《にゅういん》 する に して も、 睡眠《すいみん》 の 記録《きろく》 は つけて ください means:", ["Please keep a sleep diary only if you are admitted.", "Whether you stay an outpatient or are admitted, please keep a sleep diary.", "Even though you were admitted, you kept a sleep diary."], 1, "The paired 〜に して も 〜に して も means \"whether A or B\"."],
      ["Which sentence uses 〜と いい 〜と いい correctly?", ["受付《うけつけ》 と いい 会計《かいけい》 と いい、 一階《いっかい》 に あります。", "名前《なまえ》 と いい 年齢《ねんれい》 と いい、 書《か》いて ください。", "景色《けしき》 と いい 料理《りょうり》 と いい、 最高《さいこう》 の 旅館《りょかん》 でした。"], 2, "〜と いい 〜と いい names aspects and ends in a judgement; it is not for a plain fact or a request."],
      ["Which belongs in a written report rather than in casual talk?", ["賛成《さんせい》 する に せよ 反対《はんたい》 する に せよ", "賛成《さんせい》 する に しろ 反対《はんたい》 する に しろ", "賛成《さんせい》 する やら 反対《はんたい》 する やら"], 0, "に せよ is formal and written, に しろ is spoken; やら lists things with a different meaning."],
      ["A mother says 掃除《そうじ》 やら 洗濯《せんたく》 やら で、 一日《いちにち》 が すぐ 終《お》わります. She means:", ["She does only cleaning and laundry.", "What with cleaning, laundry and so on, her day goes by quickly.", "She cleans instead of doing the laundry."], 1, "〜やら 〜やら で lists a few of many things that keep you busy."],
      ["Choose the natural sentence for \"It's quiet for a Saturday.\"", ["土曜日《どようび》 と いい 静《しず》か です ね。", "土曜日《どようび》 やら 静《しず》か です ね。", "土曜日《どようび》 に して は 静《しず》か です ね。"], 2, "Noun + に して は means \"for an X\"; と いい and やら need two items."]
    ]
  },
  'n2-mushiro': {
    mistakes: [
      ["早《はや》め に 受診《じゅしん》 する ほう が まし です よ。", "早《はや》め に 受診《じゅしん》 した ほう が いい です よ。", "Grammatical but まし means \"less bad\", so it sounds as if seeing a doctor is also bad; to advise, use 〜た ほう が いい."],
      ["健康《けんこう》 な に 越《こ》した こと は ありません。", "健康《けんこう》 に 越《こ》した こと は ありません。", "A な-adjective or noun goes straight before に 越《こ》した こと は ない, without な."],
      ["人《ひと》 に 頼《たの》んだ くらい なら、 自分《じぶん》 で やる ほう が いい。", "人《ひと》 に 頼《たの》む くらい なら、 自分《じぶん》 で やる ほう が いい。", "くらい なら takes the dictionary form."]
    ],
    more: [
      ["反抗《はんこう》 して いる と いう より むしろ、 どう したら いい か わからなく なって いる の だ と 思《おも》います。", "Rather than being defiant, I think he no longer knows what to do."],
      ["「人《ひと》 に 迷惑《めいわく》 を かける くらい なら、 一人《ひとり》 で 我慢《がまん》 した ほう が いい」 と 吉田《よしだ》さん は 話《はな》して います。", "Mr Yoshida says he would rather put up with it alone than be a burden to anyone."],
      ["朝《あさ》 の だるさ は 前《まえ》 より は まし です が、 まだ 仕事《しごと》 に は 行《い》けません。", "The heaviness in the morning is less bad than before, but I still can't go to work."],
      ["旅行《りょこう》 の 荷物《にもつ》 は 軽《かる》い に 越《こ》した こと は ない。", "When you travel, the lighter your luggage the better."],
      ["まずい 料理《りょうり》 を 食《た》べる より、 何《なに》 も 食《た》べない ほう が まし だ。", "I'd rather eat nothing than eat bad food."],
      ["この 映画《えいが》 は 子供《こども》 より むしろ 大人《おとな》 に 人気《にんき》 が ある。", "This film is popular with adults rather than with children."]
    ],
    quiz: [
      ["病院《びょういん》 に 行《い》く ＿、 我慢《がまん》 した ほう が いい と 思《おも》って いました。", ["くらい なら", "ほう が まし", "に 越《こ》した"], 0, "〜くらい なら marks the option the speaker finds worse: \"rather than go to hospital\"."],
      ["A family says their son is just being selfish. You reframe: \"Rather than being selfish, I think he is too anxious to settle.\"", ["わがまま を 言《い》って いる くらい なら、 不安《ふあん》 で 落《お》ち着《つ》かない の だ と 思《おも》います。", "わがまま を 言《い》って いる と いう より むしろ、 不安《ふあん》 で 落《お》ち着《つ》かない の だ と 思《おも》います。", "わがまま を 言《い》って いる に 越《こ》した こと は なく、 不安《ふあん》 で 落《お》ち着《つ》かない の だ と 思《おも》います。"], 1, "A と いう より むしろ B says B describes the situation better than A."],
      ["Which sentence gives polite advice to a patient?", ["水分《すいぶん》 は こまめ に とる ほう が まし です。", "水分《すいぶん》 は こまめ に とる くらい なら いい です。", "水分《すいぶん》 は こまめ に とる に 越《こ》した こと は ありません。"], 2, "〜に 越《こ》した こと は ありません is polite advice; ほう が まし presents it as only the less bad choice."],
      ["電車《でんしゃ》 で 一時間《いちじかん》 立《た》つ より は、 バス で 二時間《にじかん》 座《すわ》る ほう が まし だ means:", ["Sitting on a bus for two hours is less bad than standing on a train for one.", "The train is better because it takes only an hour.", "Both the bus and the train are pleasant."], 0, "まし marks the less bad of two unpleasant choices."],
      ["冬《ふゆ》 より むしろ 春《はる》 に 調子《ちょうし》 を 崩《くず》す 人《ひと》 も います means:", ["Some people become unwell in winter and spring alike.", "Some people become unwell in spring rather than in winter.", "People become unwell in winter, never in spring."], 1, "A より むしろ B: B fits better than A."],
      ["A patient says 「入院《にゅういん》 する くらい なら、 家《いえ》 に いる ほう が まし です」. What should you ask about next?", ["Why she likes being at home so much", "When she would like to be admitted", "What she fears about being admitted"], 2, "With 〜くらい なら, the first half is the option the speaker finds worse, often what they fear: ask about it."]
    ]
  },
  'n2-to-wa': {
    mistakes: [
      ["「休職《きゅうしょく》」 と は、 しばらく 仕事《しごと》 を 休《やす》む です。", "「休職《きゅうしょく》」 と は、 しばらく 仕事《しごと》 を 休《やす》む こと です。", "A definition with と は ends in こと です or の こと です; a verb cannot go straight before です."],
      ["こんな に 早《はや》く 良《よ》く なります と は 思《おも》いません でした。", "こんな に 早《はや》く 良《よ》く なる と は 思《おも》いません でした。", "The clause before と は 思《おも》う is in the plain form; only the end of the sentence is polite."],
      ["これ は 職人《しょくにん》 なら では 技《わざ》 です。", "これ は 職人《しょくにん》 なら では の 技《わざ》 です。", "Before a noun, なら では needs の: X なら では の + noun."]
    ],
    more: [
      ["「せん妄《もう》」 と は、 体《からだ》 の 病気《びょうき》 や 手術《しゅじゅつ》 など を きっかけ に、 一時的《いちじてき》 に 意識《いしき》 が 混乱《こんらん》 する 状態《じょうたい》 の こと です。", "\"Delirium\" means a state of temporary confusion, brought on by a physical illness, an operation or similar."],
      ["まさか 父《ちち》 が 隠《かく》れて お酒《さけ》 を 飲《の》んで いた と は、 家族《かぞく》 の 誰《だれ》 も 気《き》づきません でした。", "None of us in the family realised; who would have thought Dad had been drinking in secret?"],
      ["「私《わたし》 なんて 誰《だれ》 の 役《やく》 に も 立《た》たない」 と 話《はな》す ため、 その 気持《きも》ち に ついて 丁寧《ていねい》 に 話《はなし》 を 聞《き》いた。", "(Chart note) She said, \"Someone like me is no use to anyone\", so we listened carefully to her about that feeling."],
      ["社長《しゃちょう》 とも なると、 休《やす》み の 日《ひ》 に も 仕事《しごと》 の 電話《でんわ》 が かかって くる。", "Once you are a company president, work calls come even on your days off."],
      ["この 店《みせ》 で は、 港町《みなとまち》 なら では の 新鮮《しんせん》 な 魚《さかな》 が 食《た》べられる。", "At this restaurant you can eat fresh fish of a kind only a port town has."],
      ["あの 二人《ふたり》 が 結婚《けっこん》 する なんて、 びっくり した。", "I was amazed that those two are getting married."]
    ],
    quiz: [
      ["こんな 結果《けっか》 に なる ＿ 思《おも》って も いません でした。", ["と は", "とも なると", "なら では"], 0, "Plain form + と は 思《おも》わなかった expresses surprise."],
      ["A patient says 薬《くすり》 なんて 意味《いみ》 が ない. Her tone is:", ["neutral: she is listing medicines", "dismissive: she makes light of medicine", "grateful: medicine has helped her a lot"], 1, "Noun + なんて makes light of the thing."],
      ["You explain a term to a family. Which fits?", ["「再発《さいはつ》」 なんて、 一度《いちど》 良《よ》く なった 症状《しょうじょう》 が また 出《で》て くる こと です。", "「再発《さいはつ》」 とも なると、 一度《いちど》 良《よ》く なった 症状《しょうじょう》 が また 出《で》て くる こと です。", "「再発《さいはつ》」 と は、 一度《いちど》 良《よ》く なった 症状《しょうじょう》 が また 出《で》て くる こと です。"], 2, "Noun + と は … こと です is the formal definition; なんて would make light of the term."],
      ["＿ とも なると、 責任《せきにん》 も 重《おも》く なります。", ["部長《ぶちょう》", "新人《しんじん》", "昨日《きのう》"], 0, "とも なると needs a noun for a high point on a scale, such as a senior rank."],
      ["Which sentence uses なんて for surprise, not to make light of something?", ["こんな 本《ほん》 なんて 読《よ》みたくない。", "四月《しがつ》 に 雪《ゆき》 が 降《ふ》る なんて、 驚《おどろ》きました。", "私《わたし》 なんて、 何《なに》 も できない。"], 1, "After a clause, なんて shows surprise; after a noun it looks down on the thing."],
      ["A patient says 私《わたし》 なんて、 いて も いなくて も 同《おな》じ です. Which reply fits best?", ["そんな こと なんて 言《い》わないで ください。", "そう です か。 では、 次《つぎ》 の 話《はなし》 に 移《うつ》りましょう。", "そう 感《かん》じて しまう ほど、 つらい の です ね。 もう 少《すこ》し 聞《き》かせて ください。"], 2, "私《わたし》 なんて signals low self-worth: acknowledge it and ask gently, without dismissing it."]
    ]
  }
});
