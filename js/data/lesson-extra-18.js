/* Lesson extras part 18 (0.26.0): common mistakes, more examples and a "More practice" quiz for existing N2 lessons
   (n2-ge-darake, n2-gatai, n2-ka-no-you-ni, n2-to-ieba, n2-shidai-de, n2-ue-ni).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n2-ge-darake': {
    mistakes: [
      ["最近《さいきん》、 私《わたし》 は 毎日《まいにち》 不安《ふあん》げ です。", "最近《さいきん》、 私《わたし》 は 毎日《まいにち》 不安《ふあん》 です。", "〜げ describes how someone else looks from the outside, so it is not used for your own feelings."],
      ["この パンフレット は 患者《かんじゃ》さん の ご家族向《かぞくむ》き に 作《つく》られました。", "この パンフレット は 患者《かんじゃ》さん の ご家族向《かぞくむ》け に 作《つく》られました。", "Something made with a group in mind is 向《む》け; 向《む》き only says it happens to suit them."],
      ["弟《おとうと》 は 飽《あ》きっぽい な 性格《せいかく》 で、 何《なに》 を やって も 続《つづ》きません。", "弟《おとうと》 は 飽《あ》きっぽい 性格《せいかく》 で、 何《なに》 を やって も 続《つづ》きません。", "〜っぽい is an い-adjective, so it goes straight before a noun without な."]
    ],
    more: [
      ["診察中《しんさつちゅう》 は 何《なに》 か 言《い》いたげ だった が、 最後《さいご》 まで 自分《じぶん》 から は 話《はな》さなかった。", "During the consultation he seemed to want to say something, but he never brought it up himself. (written, note)"],
      ["退院後《たいいんご》 の 生活《せいかつ》 に ついて、 ご家族向《かぞくむ》け の 説明会《せつめいかい》 を 毎月《まいつき》 開《ひら》いて います。", "We hold a session for families every month about life after discharge."],
      ["「最近《さいきん》、 夫《おっと》 が 怒《おこ》りっぽく なって、 すぐ 大《おお》きな 声《こえ》 を 出《だ》す ん です」", "\"Lately my husband gets angry easily and raises his voice at the slightest thing.\""],
      ["雨《あめ》 の 中《なか》 を 歩《ある》いて、 靴《くつ》 が 泥《どろ》だらけ に なりました。", "I walked in the rain, and my shoes got covered in mud."],
      ["合格《ごうかく》 の 知《し》らせ を 聞《き》いて、 弟《おとうと》 は 満足《まんぞく》げ に うなずいた。", "When he heard he had passed, my brother nodded with a satisfied look."],
      ["この シャツ は 色《いろ》 の せい か、 少《すこ》し 安《やす》っぽく 見《み》えます。", "Maybe it's the colour, but this shirt looks a bit cheap."]
    ],
    quiz: [
      ["Fill the blank with the げ form of 寂《さび》しい: 窓《まど》 の 外《そと》 を ＿ に 眺《なが》めて いた。", ["寂《さび》しげ", "寂《さび》しいげ", "寂《さび》しくげ"], 0, "〜げ attaches to the stem of an い-adjective: drop い and add げ."],
      ["この 本《ほん》 は 初心者向《しょしんしゃむ》け です。 means:", ["This book happens to suit beginners, though it was written for others.", "This book was written for beginners.", "This book is full of beginners' mistakes."], 1, "向《む》け says the thing was made with that group in mind."],
      ["Which sentence criticises an adult's way of thinking?", ["大人《おとな》 なのに 考《かんが》え方《かた》 が 子供《こども》らしい。", "大人《おとな》 なのに 考《かんが》え方《かた》 が 子供《こども》だらけ。", "大人《おとな》 なのに 考《かんが》え方《かた》 が 子供《こども》っぽい。"], 2, "子供《こども》っぽい criticises (childish); 子供《こども》らしい praises a child for being like a child, and だらけ means covered in."],
      ["Chart note: \"He looked as if he wanted to say something.\" 何《なに》 か ＿ な 様子《ようす》 だった。", ["言《い》いたい", "言《い》いたげ", "言《い》いっぽい"], 1, "〜たい drops い and takes げ: 言《い》いたげ, which then works like a な-adjective."],
      ["提出《ていしゅつ》 された 書類《しょるい》 は 間違《まちが》いだらけ でした。 means:", ["The documents were full of mistakes, far too many.", "The documents had one small mistake.", "The documents looked as if they might be wrong."], 0, "だらけ means there is too much of something unwelcome."],
      ["\"A south-facing room\" is:", ["南向《みなみむ》け の 部屋《へや》", "南《みなみ》っぽい 部屋《へや》", "南向《みなみむ》き の 部屋《へや》"], 2, "After a direction, 向《む》き means \"facing\"; 向《む》け means \"aimed at\" a group."]
    ]
  },
  'n2-gatai': {
    mistakes: [
      ["住所《じゅうしょ》 が わからない ので、 手紙《てがみ》 を 送《おく》ろう が ありません。", "住所《じゅうしょ》 が わからない ので、 手紙《てがみ》 を 送《おく》りよう が ありません。", "よう が ない takes the ます-stem (送《おく》り), not the volitional (送《おく》ろう)."],
      ["この 薬《くすり》 は 粒《つぶ》 が 大《おお》きくて 飲《の》みがたい です。", "この 薬《くすり》 は 粒《つぶ》 が 大《おお》きくて 飲《の》みにくい です。", "Physical difficulty is 〜にくい; がたい is for things that are hard to accept, believe or bear."],
      ["あの 子《こ》 が そんな こと を 言《い》った なんて、 信《しん》じるがたい です。", "あの 子《こ》 が そんな こと を 言《い》った なんて、 信《しん》じがたい です。", "がたい attaches to the ます-stem (信《しん》じ), not the dictionary form."]
    ],
    more: [
      ["診察《しんさつ》 で 話《はな》しづらい こと が あれば、 紙《かみ》 に 書《か》いて いただいて も 構《かま》いません。", "If there is anything hard to talk about in the consultation, you are welcome to write it down."],
      ["耐《た》えがたい ほど の 痛《いた》み が ある とき は、 夜間《やかん》 でも 病棟《びょうとう》 に 連絡《れんらく》 して ください。", "If the pain becomes unbearable, please contact the ward, even at night."],
      ["「母《はは》 を 亡《な》くした 悲《かな》しみ は、 たとえよう が ありません」", "\"There is nothing I can compare the grief of losing my mother to.\""],
      ["子供《こども》 の ころ に 祖父《そふ》 と 見《み》た 海《うみ》 は、 忘《わす》れがたい 思《おも》い出《で》 です。", "The sea I saw with my grandfather as a child is an unforgettable memory."],
      ["字《じ》 が 小《ちい》さすぎて、 この 説明書《せつめいしょ》 は 読《よ》みづらい です。", "The print is too small, so this manual is hard to read."],
      ["終電《しゅうでん》 が 出《で》て しまった ので、 もう 帰《かえ》りよう が ない。", "The last train has gone, so there's no way to get home now."]
    ],
    quiz: [
      ["\"There is no way to check it\": 確認《かくにん》 ＿ が ない。", ["の しよう", "しろう", "するよう"], 0, "A する-noun takes の しよう が ない: the ます-stem of する (し) + よう."],
      ["彼《かれ》 の 行動《こうどう》 は 許《ゆる》しがたい。 means:", ["I may forgive his behaviour.", "His behaviour is hard to forgive.", "His behaviour has been forgiven."], 1, "許《ゆる》しがたい means it is very hard, by any reasonable standard, to forgive."],
      ["A patient says: 「家族《かぞく》 に 心配《しんぱい》 を かけたく ない ので、 ＿ ん です」 (it's hard for me to talk it over with them)", ["相談《そうだん》 しよう", "相談《そうだん》 しがたく", "相談《そうだん》 しづらい"], 2, "づらい says something is awkward or painful for the speaker to do; しよう and しがたく cannot come before ん です."],
      ["突然《とつぜん》 の 診断《しんだん》 は、 本人《ほんにん》 に とって ＿ もの だった。", ["受《う》け入《い》れがたい", "受《う》け入《い》れよう", "受《う》け入《い》れかね"], 0, "受《う》け入《い》れがたい (hard to accept) can stand before a noun; the other two are not complete forms."],
      ["もう 手《て》 の 打《う》ちよう が ない。 means:", ["There is still something we can try.", "I don't want to do anything more.", "There is nothing more that can be done."], 2, "よう が ない means the way to do it does not exist: here, no measures can be taken."],
      ["\"Suffering that is hard even to imagine\" is:", ["想像《そうぞう》 しよう の 苦《くる》しみ", "想像《そうぞう》 しがたい 苦《くる》しみ", "想像《そうぞう》 しにくく 苦《くる》しみ"], 1, "がたい goes with verbs of imagining and accepting and, like an い-adjective, stands straight before a noun."]
    ]
  },
  'n2-ka-no-you-ni': {
    mistakes: [
      ["熱《ねつ》 が ある か の よう です から、 体温《たいおん》 を 測《はか》りましょう。", "熱《ねつ》 が ある よう です から、 体温《たいおん》 を 測《はか》りましょう。", "A real guess is 〜よう です; か の よう means \"as if\", for something that is not so or that you do not claim."],
      ["息子《むすこ》 は 何《なに》 も 聞《き》いて いない か の よう に 顔《かお》 を して いました。", "息子《むすこ》 は 何《なに》 も 聞《き》いて いない か の よう な 顔《かお》 を して いました。", "Before a noun the form is か の よう な; か の よう に goes before a verb."],
      ["夜勤《やきん》 の 看護師《かんごし》 に よる と、 吉田《よしだ》さん は 昨夜《さくや》 何度《なんど》 か 目《め》 が 覚《さ》めた とか。", "夜勤《やきん》 の 看護師《かんごし》 に よる と、 吉田《よしだ》さん は 昨夜《さくや》 何度《なんど》 か 目《め》 が 覚《さ》めた と いう こと です。", "Grammatical but とか is loose, casual hearsay and sounds careless in a handover; use と いう こと です."]
    ],
    more: [
      ["「自分《じぶん》 が 自分《じぶん》 で ない か の よう な 感覚《かんかく》 が ある ん です」", "\"I have a feeling as if I weren't myself.\""],
      ["治療《ちりょう》 が 効《き》いて きた と 見《み》えて、 最近《さいきん》 は 患者《かんじゃ》さん の 表情《ひょうじょう》 が 明《あか》るく なりました。", "The treatment seems to be working: the patient's expression has brightened recently."],
      ["つまり、 眠《ねむ》れない こと より も、 朝《あさ》 起《お》きた とき の 不安《ふあん》 が いちばん つらい と いう こと です ね。", "So what you're saying is that the anxiety when you wake up is harder than the sleeplessness itself."],
      ["渡辺《わたなべ》さん、 来月《らいげつ》 結婚《けっこん》 する とか。", "I hear Ms Watanabe is getting married next month."],
      ["弟《おとうと》 は 聞《き》こえない か の よう に、 テレビ を 見《み》続《つづ》けて いた。", "My brother kept watching TV as if he couldn't hear."],
      ["夜《よる》 の うち に 雨《あめ》 が 降《ふ》った と 見《み》えて、 道《みち》 が ぬれて いる。", "It must have rained in the night: the road is wet."]
    ],
    quiz: [
      ["Fill the blank: 春《はる》 が 来《き》た ＿ 暖《あたた》かさ です。", ["か の よう な", "か の よう に", "と 見《み》えて"], 0, "Before a noun (暖《あたた》かさ), \"as if\" is か の よう な."],
      ["鈴木《すずき》さん、 風邪《かぜ》 で 休《やす》み だ とか。 means:", ["Mr Suzuki must be ill, judging from his face.", "I hear Mr Suzuki is off with a cold, or something like that.", "Mr Suzuki is off as if he had a cold."], 1, "Plain form + とか at the end of a sentence passes on loose hearsay."],
      ["To check that you have understood a patient, you say:", ["つまり、 夜《よる》 より 朝《あさ》 の ほう が つらい とか です ね。", "つまり、 夜《よる》 より 朝《あさ》 の ほう が つらい と 見《み》えて です ね。", "つまり、 夜《よる》 より 朝《あさ》 の ほう が つらい と いう こと です ね。"], 2, "つまり 〜と いう こと です ね sums up what the other person said; とか です ね is vague, casual hearsay, and と 見《み》えて です ね is not a complete form."],
      ["You see a patient has eaten all his meal: 食欲《しょくよく》 が 戻《もど》って きた ＿、 食事《しょくじ》 を 全部《ぜんぶ》 食《た》べて いた。", ["とか", "と 見《み》えて", "か の よう な"], 1, "A と 見《み》えて、 B: you conclude A from B, which you can see; か の よう な must come before a noun."],
      ["父《ちち》 は まるで 子供《こども》 に 戻《もど》った か の よう に はしゃいで いた。 means:", ["My father was in high spirits, as if he had become a child again.", "My father was in high spirits because he went back to his childhood home.", "I hear my father was in high spirits like a child."], 0, "まるで 〜か の よう に means \"just as if\"; he has not really become a child."],
      ["あの 店《みせ》 は いつも 満席《まんせき》 だ。 よほど おいしい と 見《み》える。 The second sentence means:", ["It looks good, but it isn't.", "I hear it is very good.", "It must be very good, judging from that."], 2, "〜と 見《み》える at the end of a sentence draws a conclusion from what you see."]
    ]
  },
  'n2-to-ieba': {
    mistakes: [
      ["私《わたし》 は 料理《りょうり》 に かけて は 全然《ぜんぜん》 だめ です。", "私《わたし》 は 料理《りょうり》 と なる と 全然《ぜんぜん》 だめ です。", "に かけて は is only for praising a skill; for a weak point use と なる と."],
      ["入院《にゅういん》 に 関《かん》して 書類《しょるい》 は こちら です。", "入院《にゅういん》 に 関《かん》する 書類《しょるい》 は こちら です。", "Directly before a noun the form is に 関《かん》する, not に 関《かん》して."],
      ["病院《びょういん》 が 苦手《にがて》 と いう と、 そう でも ありません。", "病院《びょういん》 が 苦手《にがて》 か と いう と、 そう でも ありません。", "To raise a question and then qualify the answer, the question needs か: 〜か と いう と; without か, と いう と only picks up a topic."]
    ],
    more: [
      ["「眠《ねむ》れない」 と いう と、 寝《ね》つき が 悪《わる》い の でしょう か、 それとも 途中《とちゅう》 で 目《め》 が 覚《さ》める の でしょう か。", "When you say you can't sleep, is it hard to fall asleep, or do you wake up in the night?"],
      ["本日《ほんじつ》 は、 退院後《たいいんご》 の 生活《せいかつ》 に 関《かん》して ご説明《せつめい》 いたします。", "Today I will explain about life after discharge."],
      ["「いざ 職場《しょくば》 に 戻《もど》る と なる と、 また 眠《ねむ》れなく なる ん です」", "\"Whenever going back to work actually comes up, I can't sleep again.\""],
      ["祖母《そぼ》 は 漬物《つけもの》 を 作《つく》る こと に かけて は、 近所《きんじょ》 で 有名《ゆうめい》 です。", "When it comes to making pickles, my grandmother is famous in the neighbourhood."],
      ["そう いえば、 鈴木《すずき》さん から 手紙《てがみ》 が 届《とど》いて いました よ。", "Now that you mention it, a letter came from Mr Suzuki."],
      ["どちら か と いえば、 私《わたし》 は 犬《いぬ》 より 猫《ねこ》 の ほう が 好《す》き です。", "If anything, I prefer cats to dogs."]
    ],
    quiz: [
      ["命《いのち》 に 関《かか》わる 病気《びょうき》 means:", ["an illness that people talk about", "a life-threatening illness", "an illness that changes how you live"], 1, "関《かか》わる (to affect seriously) is a different word from 関《かん》する; 命《いのち》 に 関《かか》わる means life-threatening."],
      ["Fill the blank: 一人《ひとり》 で 通院《つういん》 する ＿、 まだ 少《すこ》し 不安《ふあん》 です。", ["と なる と", "に かけて は", "と いえば"], 0, "と なる と says that once the situation becomes real, something changes; に かけて は follows a noun of skill."],
      ["薬《くすり》 を やめたい か と いう と、 そう でも ありません。 means:", ["Speaking of the medicine, I want to stop it.", "Once it comes to stopping, I worry.", "If you ask whether I want to stop the medicine, not really."], 2, "A question + か と いう と raises the question only to give a qualified answer."],
      ["In a case conference: \"As for her sleep, it has improved.\" 本人《ほんにん》 の 睡眠《すいみん》 ＿、 改善《かいぜん》 して います。", ["に かけて は", "に 関《かん》して は", "か と いえば"], 1, "に 関《かん》して は is the formal \"as for\"; に かけて は praises a skill."],
      ["いざ 結婚《けっこん》 と なる と、 迷《まよ》って しまう。 means:", ["Speaking of marriage, I got lost.", "Depending on the marriage, I hesitate.", "Once marriage actually comes up, I start to hesitate."], 2, "いざ 〜と なる と: when the moment really comes, things change."],
      ["渡辺《わたなべ》さん は 子供《こども》 を 安心《あんしん》 させる こと に かけて は、 小児科《しょうにか》 で 一番《いちばん》 です。 means:", ["When it comes to putting children at ease, Ms Watanabe is the best in paediatrics.", "Ms Watanabe puts children at ease, depending on the ward.", "Concerning paediatrics, Ms Watanabe reassures children."], 0, "に かけて は praises a skill: in this area the person is better than anyone."]
    ]
  },
  'n2-shidai-de': {
    mistakes: [
      ["結果《けっか》 が わかる 次第《しだい》、 ご連絡《れんらく》 します。", "結果《けっか》 が わかり次第《しだい》、 ご連絡《れんらく》 します。", "\"As soon as\" takes the ます-stem: わかり次第《しだい》, not the dictionary form."],
      ["両親《りょうしん》 が 共働《ともばたら》き だった ので、 祖母《そぼ》 を もと に 育《そだ》ちました。", "両親《りょうしん》 が 共働《ともばたら》き だった ので、 祖母《そぼ》 の もと で 育《そだ》ちました。", "\"Under someone's care\" is の もと で; を もと に means \"based on\"."],
      ["回復《かいふく》 する 次第《しだい》 で、 退院《たいいん》 の 日《ひ》 が 決《き》まります。", "回復《かいふく》 次第《しだい》 で、 退院《たいいん》 の 日《ひ》 が 決《き》まります。", "\"Depends on\" puts 次第《しだい》 straight after a noun, not after a verb."]
    ],
    more: [
      ["時間帯《じかんたい》 に よって は、 外来《がいらい》 が 大変《たいへん》 混《こ》み合《あ》う こと が あります。", "At some times of day, the outpatient clinic can be very crowded."],
      ["お母様《かあさま》 の ご様子《ようす》 に ついて ご相談《そうだん》 したい こと が あり、 お電話《でんわ》 した 次第《しだい》 です。", "I am calling because there is something about your mother I would like to discuss with you."],
      ["お薬《くすり》 の 量《りょう》 は、 今後《こんご》 の 経過《けいか》 次第《しだい》 で 調整《ちょうせい》 します。", "We will adjust the amount of medicine depending on how things go from here."],
      ["合格《ごうかく》 できる か どう か は、 これから の 努力《どりょく》 次第《しだい》 だ。", "Whether you pass depends on the effort you put in from now on."],
      ["店《みせ》 に よって は、 日曜日《にちようび》 に 休《やす》む ところ も あります。", "Some shops close on Sundays."],
      ["新《あたら》しい 監督《かんとく》 の もと で、 チーム は 見違《みちが》える ほど 強《つよ》く なった。", "Under the new manager, the team became far stronger."]
    ],
    quiz: [
      ["決定《けってい》 次第《しだい》、 お知《し》らせ します。 means:", ["I will let you know depending on what is decided.", "I will let you know as soon as it is decided.", "I let you know because it was decided."], 1, "With an event noun such as 決定《けってい》 followed by an action, 次第《しだい》 means \"as soon as\"."],
      ["Fill the blank: 料金《りょうきん》 は 季節《きせつ》 ＿ 変《か》わります。", ["次第《しだい》 で", "の もと で", "次第《しだい》 です"], 0, "Noun + 次第《しだい》 で: the price changes according to the season; 次第《しだい》 です ends a sentence."],
      ["In a formal letter: 先日《せんじつ》 の 件《けん》 で 確認《かくにん》 したい 点《てん》 が あり、 ＿。", ["ご連絡《れんらく》 次第《しだい》 です", "ご連絡《れんらく》 の もと です", "ご連絡《れんらく》 した 次第《しだい》 です"], 2, "〜た 次第《しだい》 です formally explains why you did something."],
      ["この 小説《しょうせつ》 は 実話《じつわ》 を もと に 書《か》かれた。 means:", ["This novel was based on a true story.", "This novel was written under the guidance of real people.", "How this novel was written depended on a true story."], 0, "を もと に means \"based on\"; \"under\" would be の もと で."],
      ["Which sentence is natural?", ["場合《ばあい》 の もと で、 手術《しゅじゅつ》 が 必要《ひつよう》 に なる こと も あります。", "場合《ばあい》 に よって は、 手術《しゅじゅつ》 が 必要《ひつよう》 に なる こと も あります。", "場合《ばあい》 に かけて は、 手術《しゅじゅつ》 が 必要《ひつよう》 に なる こと も あります。"], 1, "に よって は picks out some cases; の もと で needs a person, guidance or policy, and に かけて は praises a skill."],
      ["行《い》く か どう か は 体調《たいちょう》 次第《しだい》 です。 means:", ["I will go as soon as I feel better.", "I went because I felt well.", "Whether I go depends on how I feel."], 2, "Noun + 次第《しだい》 です: it is up to the noun."]
    ]
  },
  'n2-ue-ni': {
    mistakes: [
      ["熱《ねつ》 が ある 上《うえ》 に、 今日《きょう》 は 休《やす》んで ください。", "熱《ねつ》 が ある ので、 今日《きょう》 は 休《やす》んで ください。", "上《うえ》 に adds a fact and cannot be followed by a request; give the reason with ので."],
      ["この 病棟《びょうとう》 の 看護師《かんごし》さん は 親切《しんせつ》 上《うえ》 に、 説明《せつめい》 も わかりやすい。", "この 病棟《びょうとう》 の 看護師《かんごし》さん は 親切《しんせつ》 な 上《うえ》 に、 説明《せつめい》 も わかりやすい。", "A な-adjective needs な before 上《うえ》 に."],
      ["眠《ねむ》れない のみ か、 食欲《しょくよく》 も ない の です ね。", "眠《ねむ》れない 上《うえ》 に、 食欲《しょくよく》 も ない の です ね。", "Grammatical but のみ か is written style; to a patient say 上《うえ》 に."]
    ],
    more: [
      ["母《はは》 は 物忘《ものわす》れ が ひどく なった 上《うえ》 に、 夜中《よなか》 に 起《お》きて 歩《ある》き回《まわ》る よう に なりました。", "On top of her forgetfulness getting worse, my mother has started getting up and walking around at night."],
      ["本日《ほんじつ》 は 血液検査《けつえきけんさ》 に 加《くわ》えて、 心電図《しんでんず》 も 行《おこな》います。", "Today, in addition to the blood test, we will also do an ECG."],
      ["「最近《さいきん》 は テレビ も 見《み》なければ、 新聞《しんぶん》 も 読《よ》みません」", "\"These days I neither watch TV nor read the paper.\""],
      ["この 店《みせ》 は 値段《ねだん》 が 高《たか》い 上《うえ》 に、 量《りょう》 も 少《すく》ない。", "This restaurant is expensive, and the portions are small too."],
      ["彼女《かのじょ》 は 歌《うた》 も うまければ、 ピアノ も 弾《ひ》ける。", "She sings well, and she can play the piano too."],
      ["その 計画《けいかく》 は 住民《じゅうみん》 の 生活《せいかつ》 を 苦《くる》しめる のみ か、 町《まち》 の 将来《しょうらい》 に も 悪《わる》い 影響《えいきょう》 を 与《あた》える。", "The plan not only makes residents' lives harder but will also harm the town's future. (written)"]
    ],
    quiz: [
      ["Fill the blank: この 部屋《へや》 は ＿ 上《うえ》 に、 日当《ひあ》たり も いい。", ["静《しず》か", "静《しず》か な", "静《しず》か だ"], 1, "A な-adjective takes な before 上《うえ》 に."],
      ["Fill the blank: この 町《まち》 は 自然《しぜん》 も ＿、 交通《こうつう》 も 便利《べんり》 です。", ["豊《ゆた》か なら", "豊《ゆた》かければ", "豊《ゆた》かれば"], 0, "In 〜も 〜ば 〜も, a な-adjective uses なら: 豊《ゆた》か なら."],
      ["At reception: 保険証《ほけんしょう》 ＿、 診察券《しんさつけん》 も お持《も》ち ください。", ["の 上《うえ》 に", "のみ か", "に 加《くわ》えて"], 2, "に 加《くわ》えて follows a noun and can be followed by a request; 上《うえ》 に cannot, and のみ か is written."],
      ["仕事《しごと》 も なければ、 お金《かね》 も ない。 means:", ["If I have no job, I will have no money.", "I have a job, but no money.", "I have neither a job nor money."], 2, "〜も 〜なければ 〜も 〜ない means \"neither … nor\"."],
      ["睡眠《すいみん》 不足《ぶそく》 は 集中力《しゅうちゅうりょく》 を 下《さ》げる のみ か、 事故《じこ》 の 原因《げんいん》 に も なる。 means:", ["Lack of sleep only lowers concentration; it does not cause accidents.", "Lack of sleep not only lowers concentration but can also cause accidents.", "Lack of sleep lowers concentration only after an accident."], 1, "のみ か is the written \"not only … but also\"."],
      ["Choose the sentence that adds a second good point about him.", ["彼《かれ》 は 頭《あたま》 が いい 上《うえ》 に、 性格《せいかく》 も いい。", "彼《かれ》 は 頭《あたま》 が いい 上《うえ》 に、 一緒《いっしょ》 に 勉強《べんきょう》 しましょう。", "彼《かれ》 は 頭《あたま》 が いい 上《うえ》 で、 性格《せいかく》 も いい。"], 0, "上《うえ》 に adds a second point in the same direction and cannot lead into an invitation; 上《うえ》 で means \"after doing\"."]
    ]
  }
});
