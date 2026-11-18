/* Lesson extras part 23 (1.0.0): common mistakes, more examples and a "More practice" quiz for existing N1 lessons
   (n1-yue, n1-ni-sokushite, n1-nari-ni, n1-meku, n1-to-bakari-ni, n1-tsu-tsu).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n1-yue': {
    mistakes: [
      ["本人《ほんにん》 は 高齢《こうれい》 だ ゆえ に、 回復《かいふく》 に 時間《じかん》 を 要《よう》した。", "本人《ほんにん》 は 高齢《こうれい》 ゆえ に、 回復《かいふく》 に 時間《じかん》 を 要《よう》した。", "A noun takes ゆえ directly (or で ある が ゆえ); だ cannot come before ゆえ."],
      ["子供《こども》 の 将来《しょうらい》 を 心配《しんぱい》 する ば こそ、 親《おや》 は 口《くち》 を 出《だ》す の で ある。", "子供《こども》 の 将来《しょうらい》 を 心配《しんぱい》 すれば こそ、 親《おや》 は 口《くち》 を 出《だ》す の で ある。", "〜ば こそ is built on the ば-form (する → すれば), not on the dictionary form."],
      ["夜《よる》 眠《ねむ》れない が ゆえ に、 昼間《ひるま》 も 疲《つか》れやすい の です ね。", "夜《よる》 眠《ねむ》れない ので、 昼間《ひるま》 も 疲《つか》れやすい の です ね。", "Grammatical but が ゆえ に is written style and sounds like a lecture to a patient; say ので or から."]
    ],
    more: [
      ["症状《しょうじょう》 が 軽微《けいび》 で あった が ゆえ に、 診断《しんだん》 まで に 時間《じかん》 を 要《よう》した。", "(Case report) Because the symptoms were mild, it took time to reach a diagnosis."],
      ["慣《な》れぬ 土地《とち》 の こと とて、 道《みち》 に 迷《まよ》って 遅《おく》れて しまい、 申《もう》し訳《わけ》 ございません。", "(Older family member, formal) Not knowing the area, we lost our way and arrived late; we are very sorry."],
      ["「通院《つういん》 を 続《つづ》ける」 と 先生《せんせい》 に 約束《やくそく》 した 手前《てまえ》、 今日《きょう》 は 頑張《がんば》って 来《き》ました。", "(Patient) Since I'd promised you I'd keep coming, I made the effort to come today."],
      ["選手《せんしゅ》たち を 信頼《しんらい》 すれば こそ、 監督《かんとく》 は 細《こま》かい 指示《しじ》 を 出《だ》さなかった の で ある。", "(Newspaper) It was precisely because he trusted his players that the manager gave no detailed instructions."],
      ["客《きゃく》 の 手前《てまえ》、 店長《てんちょう》 は 怒《いか》り を 顔《かお》 に 出《だ》さなかった。", "In front of the customers, the manager kept his anger off his face."],
      ["便利《べんり》 な 都会《とかい》 に も、 都会《とかい》 ゆえ の 悩《なや》み が ある。", "(Essay) Even the convenient city has worries that come from being a city."]
    ],
    quiz: [
      ["Choose the form: 息子《むすこ》 の 回復《かいふく》 を ＿ こそ、 母《はは》 は 毎日《まいにち》 面会《めんかい》 に 通《かよ》った の だ。", ["願《ねが》えば", "願《ねが》う", "願《ねが》った"], 0, "〜ば こそ needs the ば-form: 願《ねが》えば こそ. こそ cannot follow a plain dictionary or た-form here."],
      ["An older man says 急《きゅう》 な こと とて、 何《なん》 の おもてなし も できず 申《もう》し訳《わけ》 ございません. He means:", ["He planned everything carefully, so he is proud of the welcome.", "Because it was so sudden, he is sorry he could offer you nothing.", "He will prepare something special next time because it was sudden."], 1, "〜こと とて gives an excuse (it was sudden) before an apology."],
      ["You write in a case report that the change was noticed late because the patient lived alone. Which fits?", ["独居《どっきょ》 の 手前《てまえ》、 変化《へんか》 の 発見《はっけん》 が 遅《おく》れた。", "独居《どっきょ》 ゆえ の、 変化《へんか》 の 発見《はっけん》 が 遅《おく》れた。", "独居《どっきょ》 で ある が ゆえ に、 変化《へんか》 の 発見《はっけん》 が 遅《おく》れた。"], 2, "が ゆえ に is the written \"because\" for a plain cause; 手前《てまえ》 is about saving face, and ゆえ の must be followed by a noun."],
      ["後輩《こうはい》 の ＿、 疲《つか》れた 顔《かお》 は 見《み》せられなかった。", ["ゆえ の", "手前《てまえ》", "ば こそ"], 1, "Noun + の 手前《てまえ》: in front of others, so I could not. ゆえ の needs a noun after it, and ば こそ needs a ば-form (で あれば こそ), not の."],
      ["経験不足《けいけんぶそく》 ゆえ の 判断《はんだん》 ミス だった。 means:", ["It was a misjudgement that came from lack of experience.", "It was an inexperienced person who found the misjudgement.", "Despite the lack of experience, nothing was misjudged."], 0, "Noun + ゆえ の + noun: a (noun) that comes from (noun)."],
      ["In conversation, what would you say instead of the written 信頼《しんらい》 すれば こそ?", ["信頼《しんらい》 する 手前《てまえ》", "信頼《しんらい》 する こと とて", "信頼《しんらい》 して いる から こそ"], 2, "〜から こそ is the spoken \"precisely because\"; the others mean \"having said so\" and an apologetic \"since\"."]
    ]
  },
  'n1-ni-sokushite': {
    mistakes: [
      ["アンケート の 結果《けっか》 に 踏《ふ》まえて、 研修《けんしゅう》 の 内容《ないよう》 を 見直《みなお》しました。", "アンケート の 結果《けっか》 を 踏《ふ》まえて、 研修《けんしゅう》 の 内容《ないよう》 を 見直《みなお》しました。", "踏《ふ》まえる is transitive and takes を; the other three patterns take に."],
      ["過去《かこ》 の 事例《じれい》 を 照《て》らして 考《かんが》える と、 今回《こんかい》 の 対応《たいおう》 は 適切《てきせつ》 だった。", "過去《かこ》 の 事例《じれい》 に 照《て》らして 考《かんが》える と、 今回《こんかい》 の 対応《たいおう》 は 適切《てきせつ》 だった。", "The yardstick takes に: 〜に 照《て》らして; を 踏《ふ》まえて is the only one of the four with を."],
      ["これ は ご本人《ほんにん》 の 生活《せいかつ》 に 即《そく》して 計画《けいかく》 です。", "これ は ご本人《ほんにん》 の 生活《せいかつ》 に 即《そく》した 計画《けいかく》 です。", "Before a noun the pattern takes the た-form (即《そく》した), not the て-form."]
    ],
    more: [
      ["看護師《かんごし》 から の 報告《ほうこく》 を 踏《ふ》まえ、 夜間《やかん》 の 見守《みまも》り を 強化《きょうか》 する こと と した。", "(Chart) In the light of the nurses' report, we decided to strengthen night-time observation."],
      ["退院《たいいん》 指導《しどう》 は、 一人暮《ひとりぐ》らし と いう 実際《じっさい》 の 生活《せいかつ》 に 即《そく》して 行《おこな》いました。", "Discharge teaching was given in line with the reality of her living alone."],
      ["治療《ちりょう》 の 目的《もくてき》 に 照《て》らして 考《かんが》える と、 この 検査《けんさ》 は 今《いま》 は 必要《ひつよう》 ない でしょう。", "Measured against the aim of treatment, this test is probably not needed now."],
      ["試合《しあい》 は 国際《こくさい》 ルール に のっとって 行《おこな》われます。", "(Notice) The match will be played in accordance with international rules."],
      ["会社《かいしゃ》 の 規則《きそく》 に 照《て》らせば、 この 経費《けいひ》 は 認《みと》められない。", "Judged by company rules, this expense cannot be approved."],
      ["教科書《きょうかしょ》 の 例《れい》 より も、 現場《げんば》 の 実態《じったい》 に 即《そく》した 研修《けんしゅう》 が 求《もと》められて いる。", "Rather than textbook examples, training that fits the real situation at work is what people want."]
    ],
    quiz: [
      ["Choose the form: 式典《しきてん》 は 伝統《でんとう》 に ＿ 形《かたち》 で 行《おこな》われた。", ["のっとった", "のっとって", "のっとり"], 0, "Before a noun use the た-form: 伝統《でんとう》 に のっとった 形《かたち》. The て-form and the stem link to a verb or clause."],
      ["現場《げんば》 の 実情《じつじょう》 に 即《そく》した 指針《ししん》 means:", ["a guideline that ignores the situation on the ground", "a guideline that fits the actual situation on the ground", "a guideline that will replace the actual situation"], 1, "〜に 即《そく》した + noun: fitted to the real facts."],
      ["Choose the pattern: 前回《ぜんかい》 の 反省《はんせい》 ＿、 今回《こんかい》 は 早《はや》め に 準備《じゅんび》 を 始《はじ》めた。", ["に のっとって", "に 即《そく》した", "を 踏《ふ》まえて"], 2, "Building on a lesson already learned is を 踏《ふ》まえて; a reflection is not a rule for のっとって, and 即《そく》した must be followed by a noun."],
      ["倫理《りんり》 指針《ししん》 に 照《て》らして、 研究《けんきゅう》 計画《けいかく》 を 審査《しんさ》 した。 means:", ["The research plan was reviewed against the ethics guidelines.", "The ethics guidelines were rewritten to fit the research plan.", "The research plan was reviewed without the ethics guidelines."], 0, "〜に 照《て》らして measures a case against a standard."],
      ["You tell a patient at the bedside when the ward lights go out. Which is most natural?", ["消灯《しょうとう》 は 病棟《びょうとう》 の 規則《きそく》 に のっとり、 九時《くじ》 と する。", "消灯《しょうとう》 は 病棟《びょうとう》 の 決《き》まり に 従《したが》って、 九時《くじ》 に なって います。", "消灯《しょうとう》 は 病棟《びょうとう》 の 決《き》まり を 踏《ふ》まえて、 九時《くじ》 です。"], 1, "In speech, rules are に 従《したが》って; に のっとり と する is notice style, and 踏《ふ》まえる does not fit a rule."],
      ["Which sentence correctly says the plan was revised building on a superior's advice?", ["上司《じょうし》 の 助言《じょげん》 に 踏《ふ》まえて、 計画《けいかく》 を 直《なお》した。", "上司《じょうし》 の 助言《じょげん》 を 即《そく》して、 計画《けいかく》 を 直《なお》した。", "上司《じょうし》 の 助言《じょげん》 を 踏《ふ》まえて、 計画《けいかく》 を 直《なお》した。"], 2, "Advice already given is built on with を 踏《ふ》まえて; 踏《ふ》まえる takes を and 即《そく》する takes に."]
    ]
  },
  'n1-nari-ni': {
    mistakes: [
      ["私《わたし》 の なり に 食事《しょくじ》 に 気《き》 を つけて きた つもり です。", "私《わたし》 なり に 食事《しょくじ》 に 気《き》 を つけて きた つもり です。", "なり follows the noun or pronoun directly, with no の."],
      ["教師《きょうし》 の たる 者《もの》、 生徒《せいと》 の 手本《てほん》 で なければ ならない。", "教師《きょうし》 たる 者《もの》、 生徒《せいと》 の 手本《てほん》 で なければ ならない。", "たる is the literary で ある and follows the role noun directly, with no の."],
      ["この 一年《いちねん》、 一度《いちど》 と して 外来《がいらい》 を 休《やす》んだ。", "この 一年《いちねん》、 一度《いちど》 と して 外来《がいらい》 を 休《やす》まなかった。", "One + counter + と して always takes a negative verb."]
    ],
    more: [
      ["「自分《じぶん》 なり に 生活《せいかつ》 の リズム を 整《ととの》えよう と して きました」", "(Patient) \"I've tried in my own way to get my daily rhythm in order.\""],
      ["それ が 鈴木《すずき》さん なり の 工夫《くふう》 だった ん です ね。", "(Resident) So that was your own way of coping, Mr Suzuki."],
      ["長期《ちょうき》 入院《にゅういん》 と いう 環境《かんきょう》 に あって も、 本人《ほんにん》 は 趣味《しゅみ》 の 絵《え》 を 描《か》き続《つづ》けて いた。", "(Case report) Even in the setting of a long admission, the patient kept painting as a hobby."],
      ["指導者《しどうしゃ》 たる もの、 まず 自分《じぶん》 が 時間《じかん》 を 守《まも》る べき だ。", "(Speech) One who leads others should keep to time first of all."],
      ["この 町《まち》 で 彼女《かのじょ》 の 名前《なまえ》 を 知《し》らない 人《ひと》 は 一人《ひとり》 と して いない。", "There is not a single person in this town who doesn't know her name."],
      ["子供《こども》 は 子供《こども》 なり に、 家族《かぞく》 の 事情《じじょう》 を 理解《りかい》 して いる もの だ。", "Children understand the family's situation in their own way."]
    ],
    quiz: [
      ["Choose the form: 書類《しょるい》 に 間違《まちが》い は ＿ と して なかった。", ["一《ひと》つ", "一《ひと》つ も", "一《ひと》つ の"], 0, "One + counter goes straight before と して: 一《ひと》つ と して 〜ない."],
      ["厳《きび》しい 経営《けいえい》 環境《かんきょう》 に あって、 同社《どうしゃ》 は 黒字《くろじ》 を 保《たも》った。 means:", ["The company created a harsh business climate.", "In a harsh business climate, the company stayed in the black.", "Because it stayed in the black, the company faced harsh conditions."], 1, "〜に あって is a written \"in (a demanding situation)\"."],
      ["You give a short speech to new residents about your profession. Which line fits?", ["医師《いし》 なり に、 秘密《ひみつ》 を 守《まも》りましょう。", "医療者《いりょうしゃ》 の たる 者《もの》、 学《まな》び続《つづ》ける 姿勢《しせい》 を 忘《わす》れて は ならない。", "医療者《いりょうしゃ》 たる 者《もの》、 学《まな》び続《つづ》ける 姿勢《しせい》 を 忘《わす》れて は ならない。"], 2, "〜たる 者《もの》 sets a lofty standard for your own profession in a speech; たる follows the noun with no の, and なり に hints at limits."],
      ["新人《しんじん》 なり に 精一杯《せいいっぱい》 やった つもり です。 means:", ["I did my very best, as far as a newcomer can.", "Being a newcomer, I didn't really try.", "I did it exactly as an expert would."], 0, "X なり に: in the way that fits X, within what X can do."],
      ["彼《かれ》 の 話《はなし》 を 信《しん》じた 人《ひと》 は ＿ いなかった。", ["誰《だれ》 か と して", "誰一人《だれひとり》 と して", "誰《だれ》 も と して"], 1, "Not one person: 誰一人《だれひとり》 と して + negative."],
      ["Pick the one grammatical sentence.", ["一日《いちにち》 と して 晴《は》れた。", "患者《かんじゃ》さん の なり に 話《はなし》 を 聞《き》いた。", "古《ふる》い 車《くるま》 です が、 古《ふる》い なり に よく 走《はし》ります。"], 2, "い-adjective + なり に is fine; と して after \"one\" needs a negative, and なり takes no の."]
    ]
  },
  'n1-meku': {
    mistakes: [
      ["倉庫《そうこ》 から 出《で》て きた 箱《はこ》 は ほこりずくめ だった。", "倉庫《そうこ》 から 出《で》て きた 箱《はこ》 は ほこりまみれ だった。", "A layer of dust over the surface is まみれ; ずくめ means \"nothing but X\" in a set of fixed uses."],
      ["患者《かんじゃ》 は 偉《えら》ぶった 態度《たいど》 で 看護師《かんごし》 に 指示《しじ》 を 出《だ》して いた。", "患者《かんじゃ》 は 強《つよ》い 口調《くちょう》 で 看護師《かんごし》 に 指示《しじ》 を 出《だ》して いた。", "Grammatical but 〜ぶる is a criticism; in a nursing note describe what the patient did instead."],
      ["新《あたら》しい 課長《かちょう》 は 偉《えら》い ぶって ばかり いる。", "新《あたら》しい 課長《かちょう》 は 偉《えら》ぶって ばかり いる。", "With an い-adjective, ぶる attaches to the stem: 偉《えら》い → 偉《えら》ぶる."]
    ],
    more: [
      ["面接中《めんせつちゅう》、 時折《ときおり》 皮肉《ひにく》めいた 笑《え》み を 浮《う》かべた が、 質問《しつもん》 に は 丁寧《ていねい》 に 答《こた》えた。", "(Case report) During the interview he now and then gave a faintly ironic smile, but answered the questions politely."],
      ["差《さ》し出《で》がましい こと を 申《もう》します が、 説明《せつめい》 の 資料《しりょう》 を もう 少《すこ》し 簡単《かんたん》 に して は どう でしょう か。", "(To a senior doctor) It may not be my place to say, but how about making the explanation handout a little simpler?"],
      ["夜間《やかん》 の 巡回時《じゅんかいじ》、 患者《かんじゃ》 は 汗《あせ》まみれ で 起《お》きて いた。", "(Nursing note) On the night round, the patient was awake and drenched in sweat."],
      ["転職《てんしょく》 して から は、 いい ことずくめ です。", "Since I changed jobs, it's been nothing but good things."],
      ["差出人《さしだしにん》 の 名前《なまえ》 の ない、 謎《なぞ》めいた 手紙《てがみ》 が 届《とど》いた。", "A mysterious letter arrived with no sender's name."],
      ["入社《にゅうしゃ》 二年目《にねんめ》 の 彼《かれ》 は、 新人《しんじん》 の 前《まえ》 で は すっかり 先輩《せんぱい》ぶって いる。", "In his second year at the firm, he acts the senior in front of the new staff."]
    ],
    quiz: [
      ["Choose the word: 彼《かれ》 の 話《はなし》 は どこ か ＿ 説明《せつめい》 に 聞《き》こえた。", ["言《い》い訳《わけ》めいた", "言《い》い訳《わけ》ずくめ", "言《い》い訳《わけ》まみれ"], 0, "めいた + noun means \"with a touch of\"; ずくめ and まみれ are nouns and would need の before 説明《せつめい》."],
      ["結婚《けっこん》 に 昇進《しょうしん》 に、 今年《ことし》 は いい ことずくめ だ。 means:", ["This year had one good thing among many bad ones.", "This year has been nothing but good things.", "This year I pretended things were good."], 1, "ずくめ: the whole thing is X, and it can be good news."],
      ["You worry your advice to a patient came across as pushy. Which line fits?", ["押《お》しつけがましい 方《かた》 です ね。", "押《お》しつけがましい なら、 そう して ください。", "押《お》しつけがましい 言《い》い方《かた》 に なって いたら、 すみません。"], 2, "がましい is safe only about your own words; the first criticises the listener, and the second makes no sense."],
      ["彼女《かのじょ》 は 物知《ものし》りぶって いる だけ だ。 means:", ["She is only acting as if she knew a lot.", "She really does know a great deal.", "She is trying to hide how much she knows."], 0, "〜ぶる criticises acting as if one were X without being so."],
      ["Choose the word: 工場《こうじょう》 で 働《はたら》く 父《ちち》 の 作業着《さぎょうぎ》 は いつも ＿ だった。", ["油《あぶら》ずくめ", "油《あぶら》まみれ", "油《あぶら》めいた"], 1, "Oil smeared all over a surface is まみれ; ずくめ is not used for dirt, and めく does not attach to 油《あぶら》."],
      ["A family member begins 言《い》い訳《わけ》がましい です が、 仕事《しごと》 が 忙《いそが》しくて 面会《めんかい》 に 来《こ》られません でした. What does 言《い》い訳《わけ》がましい です が add?", ["She is accusing the staff of making excuses.", "She is proud of her reason.", "She admits it may sound like an excuse before she gives it."], 2, "Said about your own words, 〜がましい です が is a humble cushion."]
    ]
  },
  'n1-to-bakari-ni': {
    mistakes: [
      ["それ は まるで 夢《ゆめ》 で ある か の ごとく 出来事《できごと》 だった。", "それ は まるで 夢《ゆめ》 で ある か の ごとき 出来事《できごと》 だった。", "Before a noun use か の ごとき (= か の よう な); か の ごとく (= か の よう に) links to a verb."],
      ["孫《まご》 は 弾《はじ》ける ん ばかり の 笑顔《えがお》 で 駆《か》け寄《よ》って きた。", "孫《まご》 は 弾《はじ》けん ばかり の 笑顔《えがお》 で 駆《か》け寄《よ》って きた。", "ん ばかり attaches to the ない-stem: 弾《はじ》け + ん, not the dictionary form."],
      ["胸《むね》 に 石《いし》 が 乗《の》った か の ごとき 重《おも》さ は、 朝《あさ》 も あります か。", "胸《むね》 に 石《いし》 が 乗《の》った か の よう な 重《おも》さ は、 朝《あさ》 も あります か。", "Grammatical but か の ごとき is literary and sounds stiff to a patient; say か の よう な."]
    ],
    more: [
      ["患者《かんじゃ》 は もう 話《はな》したく ない と ばかり に 目《め》 を 閉《と》じた。", "(Case report) The patient closed his eyes as if to say he did not want to talk any more."],
      ["患者《かんじゃ》 は 消《き》え入《い》らん ばかり の 声《こえ》 で 「すみません」 と 繰《く》り返《かえ》した。", "(Nursing note) In a voice so small it almost faded away, the patient kept saying \"I'm sorry\"."],
      ["「誰《だれ》 に 言《い》う とも なく、 つい つぶやいて しまう こと が あります」", "(Older patient) \"Sometimes I find myself muttering, not to anyone in particular.\""],
      ["彼《かれ》 は 何事《なにごと》 も なかった か の ごとく、 翌朝《よくあさ》 いつも どおり 出勤《しゅっきん》 した。", "As though nothing had happened, he went to work as usual the next morning."],
      ["子犬《こいぬ》 は 遊《あそ》んで と ばかり に しっぽ を 振《ふ》った。", "The puppy wagged its tail as if to say \"play with me\"."],
      ["聞《き》く とも なく 隣《となり》 の 席《せき》 の 話《はなし》 を 聞《き》いて いたら、 昔《むかし》 の 同級生《どうきゅうせい》 の 名前《なまえ》 が 出《で》て きた。", "I was half-listening to the people at the next table when the name of an old classmate came up."]
    ],
    quiz: [
      ["Choose the form: 早《はや》く 帰《かえ》れ と ＿ ばかり の 顔《かお》 だった。", ["言《い》わん", "言《い》う ん", "言《い》わない"], 0, "〜ん ばかり attaches to the ない-stem: 言《い》わ + ん."],
      ["誰《だれ》 から とも なく 拍手《はくしゅ》 が 起《お》こった。 means:", ["Nobody applauded at all.", "Applause broke out, without anyone in particular starting it.", "Only one person applauded."], 1, "Question word + から とも なく: from no one can say who."],
      ["店《みせ》 は あふれん ばかり の 客《きゃく》 で にぎわって いた。 means:", ["The shop had only a few customers.", "The customers spilled out of the shop and went home.", "The shop was so busy it was almost overflowing with customers."], 2, "〜ん ばかり: on the verge of, but it did not quite happen."],
      ["A case report says 患者《かんじゃ》 は 何《なに》 か を 恐《おそ》れる か の ごとく 周囲《しゅうい》 を 見回《みまわ》した. How would you say it to a colleague?", ["何《なに》 か を 怖《こわ》がって いる か の よう に、 周《まわ》り を 見回《みまわ》して いました。", "何《なに》 か を 怖《こわ》がる とも なく、 周《まわ》り を 見回《みまわ》して いました。", "何《なに》 か を 怖《こわ》がらん ばかり に、 周《まわ》り を 見回《みまわ》して いました。"], 0, "か の ごとく is the written か の よう に; とも なく means \"without meaning to\", and ん ばかり means \"almost\"."],
      ["セール が 始《はじ》まる と、 客《きゃく》 は ここ ぞ ＿ 売《う》り場《ば》 に 押《お》し寄《よ》せた。", ["とも なく", "と ばかり に", "か の ごとき"], 1, "ここ ぞ と ばかり に is the set phrase \"seizing the moment\"; ごとき needs a noun after it."],
      ["(Novel) 彼《かれ》 は まるで 王様《おうさま》 で ある ＿ 振《ふ》る舞《ま》った。", ["ん ばかり に", "とも なく", "か の ごとく"], 2, "A plain form + か の ごとく means \"as though\"; ん ばかり needs a ない-stem, and とも なく does not fit."]
    ]
  },
  'n1-tsu-tsu': {
    mistakes: [
      ["この 病院《びょういん》 は 設備《せつび》 さること ながら、 スタッフ の 対応《たいおう》 が 丁寧《ていねい》 だ。", "この 病院《びょういん》 は 設備《せつび》 も さること ながら、 スタッフ の 対応《たいおう》 が 丁寧《ていねい》 だ。", "The first point needs も before さること ながら: A も さること ながら, B."],
      ["困《こま》った こと が あれば、 家族《かぞく》 に 相談《そうだん》 する なり、 主治医《しゅじい》 に 聞《き》く なり ください。", "困《こま》った こと が あれば、 家族《かぞく》 に 相談《そうだん》 する なり、 主治医《しゅじい》 に 聞《き》く なり して ください。", "A なり B なり is followed by する: 〜なり して ください."],
      ["彼《かれ》 は 駅前《えきまえ》 を 行《い》きつつ 戻《もど》りつつ して いた。", "彼《かれ》 は 駅前《えきまえ》 を 行《い》きつ 戻《もど》りつ して いた。", "The back-and-forth pair uses a single つ; つつ means \"while\"."]
    ],
    more: [
      ["眠《ねむ》れない 夜《よる》 は 無理《むり》 に 寝《ね》よう と せず、 本《ほん》 を 読《よ》む なり 温《あたた》かい もの を 飲《の》む なり して みて ください。", "On nights you can't sleep, don't force it; try reading a book or having something warm to drink."],
      ["作業療法《さぎょうりょうほう》 の 効果《こうか》 も さること ながら、 同室者《どうしつしゃ》 と の 交流《こうりゅう》 が 意欲《いよく》 の 回復《かいふく》 に つながった。", "(Case report) Occupational therapy helped, of course, but contact with the roommates did even more to restore motivation."],
      ["昼《ひる》 と いわず 夜《よる》 と いわず、 病棟内《びょうとうない》 を 歩《ある》き回《まわ》る 様子《ようす》 が 見《み》られた。", "(Nursing note) He was seen walking around the ward at all hours, day and night."],
      ["川《かわ》 に 落《お》ちた 葉《は》 が、 浮《う》きつ 沈《しず》みつ 流《なが》れて いった。", "A leaf that had fallen into the river drifted away, bobbing up and down."],
      ["週末《しゅうまつ》 は 映画《えいが》 なり 買《か》い物《もの》 なり、 好《す》き な こと を して 過《す》ごして ね。", "At the weekend, do whatever you like, a film or some shopping or something."],
      ["この 映画《えいが》 は 物語《ものがたり》 も さること ながら、 音楽《おんがく》 の 美《うつく》しさ が 際立《きわだ》って いる。", "The story of this film is good, of course, but the beauty of its music stands out even more."]
    ],
    quiz: [
      ["顔《かお》 ＿ 手《て》 ＿、 子供《こども》 は ペンキ まみれ に なって いた。", ["と いわず / と いわず", "なり / なり", "つ / つ"], 0, "〜と いわず 〜と いわず names two places to mean \"all over\"; なり 〜なり is for suggestions."],
      ["デザイン も さること ながら、 この 椅子《いす》 は 座《すわ》り心地《ごこち》 が いい。 means:", ["The design matters more than how comfortable it is.", "The design is good, of course, but it is even better to sit in.", "The design is poor, so comfort does not matter."], 1, "In A も さること ながら B, A is granted and B stands out more."],
      ["A patient asks how to get answers after discharge. Which suggestion is natural?", ["病棟《びょうとう》 に 電話《でんわ》 しつ、 外来《がいらい》 で 聞《き》きつ して ください。", "病棟《びょうとう》 と いわず、 外来《がいらい》 と いわず して ください。", "病棟《びょうとう》 に 電話《でんわ》 する なり、 外来《がいらい》 で 聞《き》く なり して ください。"], 2, "〜なり 〜なり して ください offers two ways to do something; 〜つ 〜つ is only for set pairs, and と いわず means \"everywhere\"."],
      ["議論《ぎろん》 は 行《い》きつ 戻《もど》りつ して、 なかなか 結論《けつろん》 が 出《で》なかった。 means:", ["The discussion went back and forth and took a long time to reach a conclusion.", "The discussion went straight to a conclusion.", "The discussion never started, so there was no conclusion."], 0, "行《い》きつ 戻《もど》りつ: forward and back again, without steady progress."],
      ["Make it a suggestion: 疲《つか》れたら、 少《すこ》し 横《よこ》 に なる なり 外《そと》 の 空気《くうき》 を 吸《す》う なり ＿。", ["しました", "して ください", "でした"], 1, "〜なり 〜なり is for suggestions, so it ends in して ください, not a past form."],
      ["Only one of these sounds natural. Which?", ["机《つくえ》 と いわず 椅子《いす》 と いわず、 一《ひと》つ ずつ 買《か》った。", "昨日《きのう》 は 雨《あめ》 なり 雪《ゆき》 なり 降《ふ》りました。", "壁《かべ》 と いわず 天井《てんじょう》 と いわず、 部屋中《へやじゅう》 に カビ が 生《は》えて いた。"], 2, "と いわず 〜と いわず means \"all over\"; buying one of each is not \"everywhere\", and なり 〜なり is not for past events."]
    ]
  }
});
