/* Lesson extras part 27 (1.0.0): common mistakes, more examples and a "More practice" quiz for existing N1 lessons
   (n1-ni-kakawaru, n1-to-ii-to-ii, n1-nami-gurumi, n1-te-made, n1-zu-jimai, n1-ni-wa-ataranai).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n1-ni-kakawaru': {
    mistakes: [
      [`治療《ちりょう》 が うまく いく か どうか は、 睡眠《すいみん》 の 改善《かいぜん》 で かかって います。`, `治療《ちりょう》 が うまく いく か どうか は、 睡眠《すいみん》 の 改善《かいぜん》 に かかって います。`, `かかって いる takes に (X に かかって いる); で belongs to 〜次第《しだい》 で or 〜で 決《き》まる.`],
      [`この 病気《びょうき》 は、 早《はや》く 治療《ちりょう》 すれば 命《いのち》 に 関《かん》する もの では ありません。`, `この 病気《びょうき》 は、 早《はや》く 治療《ちりょう》 すれば 命《いのち》 に 関《かか》わる もの では ありません。`, `に 関《かん》する only names a topic; "life-threatening" is 命《いのち》 に 関《かか》わる.`],
      [`退院後《たいいんご》 の 生活《せいかつ》 を めぐって、 看護師《かんごし》 から 丁寧《ていねい》 な 説明《せつめい》 を 受《う》けた。`, `退院後《たいいんご》 の 生活《せいかつ》 に ついて、 看護師《かんごし》 から 丁寧《ていねい》 な 説明《せつめい》 を 受《う》けた。`, `を めぐって needs a dispute or disagreement; a calm explanation takes に ついて.`]
    ],
    more: [
      [`検査《けんさ》 の 結果《けっか》、 すぐ に 命《いのち》 に 関《かか》わる よう な 異常《いじょう》 は 見《み》つかりません でした。`, `The tests found nothing that is an immediate threat to life.`],
      [`治療《ちりょう》 方針《ほうしん》 を 変《か》える か どうか は、 今後《こんご》 二週間《にしゅうかん》 の 経過《けいか》 に かかって います。`, `Whether we change the treatment plan hinges on how things go over the next two weeks.`],
      [`回想法《かいそうほう》 で は、 故郷《こきょう》 に まつわる 思《おも》い出《で》 を 話《はな》して もらう こと が 多《おお》い。`, `In reminiscence therapy, patients are often asked to talk about memories connected with their home town.`],
      [`新《あたら》しい 店《みせ》 が 続《つづ》く か どうか は、 最初《さいしょ》 の 一年《いちねん》 に かかって いる。`, `Whether a new shop survives comes down to its first year.`],
      [`この 地方《ちほう》 に は、 狐《きつね》 に まつわる 言《い》い伝《つた》え が 数多《かずおお》く 残《のこ》って いる。`, `Many old tales about foxes are still told in this region.`],
      [`建物《たてもの》 の 安全《あんぜん》 に 関《かか》わる 工事《こうじ》 な ので、 手《て》 を 抜《ぬ》く わけ に は いかない。`, `This work bears on the safety of the building, so we cannot cut corners.`]
    ],
    quiz: [
      [`この 古《ふる》い 人形《にんぎょう》 ＿ 不思議《ふしぎ》 な 話《はなし》 を 聞《き》いた こと が あります か。`, [`に かかって いる`, `に まつわる`, `次第《しだい》 の`], 1, `A strange story that clings to an object is 人形《にんぎょう》 に まつわる 話《はなし》; the other two need an outcome that depends on something.`],
      [`患者《かんじゃ》さん の 安全《あんぜん》 に 関《かか》わる こと は、 すぐ に 報告《ほうこく》 して ください。 means:`, [`Write a report on patient safety once a week.`, `Patients should report safety problems themselves.`, `Report anything that affects patient safety straight away.`], 2, `X に 関《かか》わる こと: anything that seriously affects X.`],
      [`Which is the plain spoken way to say 駐車場《ちゅうしゃじょう》 を めぐって 対立《たいりつ》 して いる?`, [`駐車場《ちゅうしゃじょう》 の こと で もめて いる`, `駐車場《ちゅうしゃじょう》 に かかって もめて いる`, `駐車場《ちゅうしゃじょう》 次第《しだい》 で もめて いる`], 0, `In everyday speech を めぐって becomes 〜の こと で.`],
      [`Which sentence uses its pattern correctly?`, [`彼《かれ》 は その 計画《けいかく》 に まつわって いる。`, `明日《あした》 の 試合《しあい》 は、 エース の 調子《ちょうし》 に かかって いる。`, `部屋《へや》 の 掃除《そうじ》 を めぐって 楽《たの》しく 話《はな》した。`], 1, `に かかって いる names what decides the outcome; a person taking part is 関《かか》わって いる, and を めぐって needs a dispute.`],
      [`プロジェクト が 成功《せいこう》 する か どうか は、 準備《じゅんび》 の 丁寧《ていねい》さ ＿。`, [`に かかって いる`, `に まつわる`, `を めぐる`], 0, `か どうか … に かかって いる: the outcome hinges on that one thing; the other two cannot end the sentence here.`],
      [`入院《にゅういん》 が 長《なが》く なる か どうか は、 これから の 回復《かいふく》 の 具合《ぐあい》 に かかって います。 means:`, [`The stay will be longer because recovery is slow.`, `Recovery usually takes as long as the stay.`, `Whether the stay gets longer depends on how recovery goes from here.`], 2, `〜か どうか は … に かかって いる: whether it happens is decided by that factor.`]
    ]
  },
  'n1-to-ii-to-ii': {
    mistakes: [
      [`怒《いか》り とも 悲《かな》しみ つかない 表情《ひょうじょう》 を 浮《う》かべた。`, `怒《いか》り とも 悲《かな》しみ とも つかない 表情《ひょうじょう》 を 浮《う》かべた。`, `The pattern needs とも after both nouns: A とも B とも つかない.`],
      [`患者《かんじゃ》さん は、 食事《しょくじ》 が 少《すく》ない だの 夜《よる》 うるさい だの と 訴《うった》えて います。`, `患者《かんじゃ》さん は、 食事《しょくじ》 の 量《りょう》 や 夜間《やかん》 の 物音《ものおと》 に ついて 訴《うった》えて います。`, `Grammatical but だの makes the patient's concerns sound like grumbling; in a handover list them neutrally with や.`],
      [`兄《あに》 は、 新《あたら》しい 部屋《へや》 は 駅《えき》 から 遠《とお》い だの 不便《ふべん》 な だの と 文句《もんく》 ばかり だ。`, `兄《あに》 は、 新《あたら》しい 部屋《へや》 は 駅《えき》 から 遠《とお》い だの 不便《ふべん》 だの と 文句《もんく》 ばかり だ。`, `A な-adjective takes だの straight after its stem: 不便《ふべん》 だの, not 不便《ふべん》 な だの.`]
    ],
    more: [
      [`不安《ふあん》 と いう か 焦《あせ》り と いう か、 胸《むね》 が ざわざわ する 感《かん》じ が 続《つづ》いて います。`, `(Patient) Call it anxiety or a sense of being rushed, I keep having this unsettled feeling in my chest.`],
      [`夜間《やかん》、 独語《どくご》 とも 鼻歌《はなうた》 とも つかない 小《ちい》さな 声《こえ》 が 時折《ときおり》 聞《き》かれる。`, `At night a quiet voice is heard at times, hard to tell whether the patient is talking to themselves or humming. (nursing note)`],
      [`夫《おっと》 は、 散歩《さんぽ》 は 面倒《めんどう》 だの 疲《つか》れる だの と 言《い》って、 一日中《いちにちじゅう》 家《いえ》 に います。`, `(Wife) My husband says walks are a bother, they tire him out and so on, and stays home all day.`],
      [`この 店《みせ》 の ラーメン は、 懐《なつ》かしい と いう か 素朴《そぼく》 と いう か、 昔《むかし》 ながら の 味《あじ》 だ。`, `Nostalgic or simple, whichever you call it, this shop's ramen tastes the way it used to.`],
      [`彼《かれ》 は 賛成《さんせい》 とも 反対《はんたい》 とも つかない 顔《かお》 で、 黙《だま》って 聞《き》いて いた。`, `He listened in silence, with a look that was neither quite for nor against.`],
      [`色《いろ》 と いい 形《かたち》 と いい、 この 器《うつわ》 は 母《はは》 の 好《この》み に ぴったり だ。`, `In colour and in shape alike, this dish is exactly to my mother's taste.`]
    ],
    quiz: [
      [`息子《むすこ》 は 宿題《しゅくだい》 が 多《おお》い ＿ 先生《せんせい》 が 厳《きび》しい だの と、 文句《もんく》 ばかり 言《い》って いる。`, [`とも`, `と いい`, `だの`], 2, `The complaining list repeats だの after each item.`],
      [`頑固《がんこ》 と いう か 一途《いちず》 と いう か、 祖父《そふ》 は 自分《じぶん》 の やり方《かた》 を 変《か》えない。 means:`, [`Stubborn or single-minded, whichever you call it, my grandfather never changes his ways.`, `My grandfather is neither stubborn nor single-minded.`, `My grandfather became stubborn after years of being single-minded.`], 0, `〜と いう か 〜と いう か tries two words for one quality, then sums up.`],
      [`Writing a nursing note about a patient's unclear reply, which line fits?`, [`行《い》く だの 行《い》かない だの と 返答《へんとう》 する。`, `参加《さんか》 する とも しない とも つかない 返答《へんとう》 を する。`, `参加《さんか》 する と いい しない と いい、 返答《へんとう》 する。`], 1, `〜とも 〜とも つかない neutrally records an unclear answer; だの sounds like complaining, and と いい 〜と いい does not fit here.`],
      [`Which of these is correct Japanese?`, [`寂《さび》しい と いう か 気楽《きらく》 と いう か、 子供《こども》 たち が 独立《どくりつ》 して 妙《みょう》 な 気分《きぶん》 だ。`, `りんご と いう か みかん と いう か を 買《か》って きて ください。`, `彼《かれ》 は 医者《いしゃ》 とも つかない 人《ひと》 だ。`], 0, `Two names for one feeling, then a summing-up; the pattern cannot join two separate items, and とも つかない needs two nouns.`],
      [`Which is the everyday way to say 本音《ほんね》 とも 建前《たてまえ》 とも つかない 返事《へんじ》?`, [`本音《ほんね》 で も 建前《たてまえ》 で も ある 返事《へんじ》`, `本音《ほんね》 か 建前《たてまえ》 か よく わからない 返事《へんじ》`, `本音《ほんね》 だの 建前《たてまえ》 だの と 言《い》う 返事《へんじ》`], 1, `〜とも 〜とも つかない is "hard to tell whether A or B"; in speech say 〜か 〜か よく わからない. It does not mean "both", and だの is a complaining list.`],
      [`A grandson says 祖父《そふ》 は 靴《くつ》 が 合《あ》わない だの 道《みち》 が 遠《とお》い だの と 言《い》う. What is he doing?`, [`Praising his grandfather's patience.`, `Describing one feeling from two angles.`, `Listing his grandfather's complaints, with some irritation.`], 2, `〜だの 〜だの lists what someone keeps saying, and sounds irritated.`]
    ]
  },
  'n1-nami-gurumi': {
    mistakes: [
      [`娘《むすめ》さん は 大人《おとな》ぶって いて、 しっかり して います ね。`, `娘《むすめ》さん は 大人《おとな》びて いて、 しっかり して います ね。`, `Grammatical but 大人《おとな》ぶる means "acts grown-up" and criticises; for praise use 大人《おとな》びる.`],
      [`年寄《としよ》りじみた 服装《ふくそう》 で 来院《らいいん》。`, `地味《じみ》 な 色《いろ》 の 服装《ふくそう》 で 来院《らいいん》。`, `Grammatical but 年寄《としよ》りじみた judges the patient; a note describes what was seen.`],
      [`週末《しゅうまつ》 は、 町《まち》ぐるみ 川原《かわら》 の 掃除《そうじ》 を します。`, `週末《しゅうまつ》 は、 町《まち》ぐるみ で 川原《かわら》 の 掃除《そうじ》 を します。`, `〜ぐるみ behaves like a noun, so before a verb it needs で.`]
    ],
    more: [
      [`食欲《しょくよく》 も 戻《もど》り、 今《いま》 で は 人並《ひとな》み に 食事《しょくじ》 が とれて います。`, `His appetite has come back, and he now eats as much as most people. (handover)`],
      [`お子《こ》さん の 治療《ちりょう》 に は、 家族《かぞく》ぐるみ で 取《と》り組《く》む こと が 大切《たいせつ》 です。`, `In your child's treatment, it matters that the whole family works on it together.`],
      [`右腕《みぎうで》 に 青《あお》みがかった あざ が ある ため、 経過《けいか》 を 観察《かんさつ》 する。`, `There is a bluish bruise on the right arm, so it will be observed. (chart)`],
      [`今年《ことし》 の 冬《ふゆ》 は、 寒《さむ》さ が 例年《れいねん》並《な》み に 戻《もど》る そう だ。`, `They say the cold this winter will return to normal for the season.`],
      [`駅前《えきまえ》 に、 古《ふる》びた 看板《かんばん》 の 喫茶店《きっさてん》 が 今《いま》 も 残《のこ》って いる。`, `There is still a café with a weathered old sign in front of the station.`],
      [`つい 子供《こども》じみた 言《い》い訳《わけ》 を して しまい、 自分《じぶん》 でも 恥《は》ずかしかった。`, `I ended up making a childish excuse, and even I was embarrassed.`]
    ],
    quiz: [
      [`この 子《こ》 は まだ 小学生《しょうがくせい》 だ が、 ピアノ は 大人《おとな》 ＿ に 弾《ひ》ける。`, [`ぐるみ`, `並《な》み`, `じみ`], 1, `大人《おとな》並《な》み に: at an adult's level.`],
      [`組織《そしき》ぐるみ の 不正《ふせい》 means:`, [`wrongdoing involving the whole organisation`, `wrongdoing that looks like an organisation`, `wrongdoing at the level of an ordinary organisation`], 0, `〜ぐるみ: the whole unit together; in the news it often goes with wrongdoing.`],
      [`傷口《きずぐち》 の 周《まわ》り が 少《すこ》し 赤《あか》み ＿ いる ため、 様子《ようす》 を 見《み》る。`, [`びて`, `じみて`, `がかって`], 2, `Colour + み + がかる means "tinged with": slightly reddish.`],
      [`古《ふる》びた 旅館《りょかん》 means:`, [`an inn worn with age`, `an inn pretending to be old`, `an inn as good as the old ones`], 0, `〜びる: has taken on the quality of; 古《ふる》びた is "worn with age".`],
      [`今年《ことし》 の 米《こめ》 の 収穫量《しゅうかくりょう》 は、 ほぼ 平年《へいねん》並《な》み だった。 means:`, [`This year's rice harvest was much larger than usual.`, `This year's rice harvest was about the same as in a normal year.`, `This year's rice harvest was smaller than last year's.`], 1, `平年《へいねん》並《な》み: about the level of a normal year.`],
      [`Which of these sentences is correct?`, [`家族《かぞく》ぐるみ に 旅行《りょこう》 した。`, `妹《いもうと》 の 料理《りょうり》 の 腕《うで》 は プロぐるみ だ。`, `旅行《りょこう》 で、 ひなびた 温泉宿《おんせんやど》 に 泊《と》まった。`], 2, `ひなびた is "quietly rural"; ぐるみ before a verb takes で, and "as good as a professional" is プロ並《な》み (ぐるみ needs a group such as 家族《かぞく》 or 地域《ちいき》).`]
    ]
  },
  'n1-te-made': {
    mistakes: [
      [`治療《ちりょう》 で 多少《たしょう》 なりとも 楽《らく》 に なれば と 思《おも》います よ。`, `治療《ちりょう》 で 少《すこ》し でも 楽《らく》 に なれば と 思《おも》います よ。`, `Grammatical but なりとも belongs to speeches and letters; to a patient say 少《すこ》し でも.`],
      [`健康《けんこう》 の ため に は、 毎日《まいにち》 歩《ある》く の が 関《せき》の山《やま》 です よ。`, `健康《けんこう》 の ため に は、 毎日《まいにち》 歩《ある》く に 越《こ》した こと は ありません よ。`, `関《せき》の山《やま》 sets a low upper limit; advice about the best option is 〜に 越《こ》した こと は ない.`],
      [`最近《さいきん》 は 集中力《しゅうちゅうりょく》 が なくて、 新聞《しんぶん》 の 見出《みだ》し を 読《よ》む が 関《せき》の山《やま》 です。`, `最近《さいきん》 は 集中力《しゅうちゅうりょく》 が なくて、 新聞《しんぶん》 の 見出《みだ》し を 読《よ》む の が 関《せき》の山《やま》 です。`, `A verb before が 関《せき》の山《やま》 needs の: 読《よ》む の が.`]
    ],
    more: [
      [`研修《けんしゅう》 で 学《まな》んだ こと を、 多少《たしょう》 なりとも 日々《ひび》 の 看護《かんご》 に 生《い》かして いきたい と 存《ぞん》じます。`, `I hope to put what I learned in the training to use in my daily nursing, even if only a little. (speech at a staff meeting)`],
      [`ご面会《めんかい》 や お荷物《にもつ》 の こと など、 何《なん》 なり と 病棟《びょうとう》 スタッフ に お尋《たず》ね ください。`, `Please feel free to ask the ward staff about anything, such as visits or your belongings. (admission leaflet)`],
      [`今《いま》 は、 朝《あさ》ご飯《はん》 を 少《すこ》し 食《た》べる の が 関《せき》の山《やま》 です。`, `Right now, eating a little breakfast is about the most I can manage. (patient)`],
      [`行列《ぎょうれつ》 に 二時間《にじかん》 も 並《なら》んで まで 食《た》べたい と は 思《おも》わない。`, `I don't want to eat there so badly that I would queue for two hours.`],
      [`傘《かさ》 を 忘《わす》れた が、 小雨《こさめ》 だった だけ まし だった。`, `I forgot my umbrella, but at least it was only drizzling.`],
      [`私《わたし》 の 英語《えいご》 で は、 道《みち》 を 聞《き》く の が 関《せき》の山《やま》 です。`, `With my English, asking for directions is about as far as I can go.`]
    ],
    quiz: [
      [`一言《ひとこと》 ＿ ご挨拶《あいさつ》 を と 思《おも》い、 伺《うかが》いました。`, [`まで して`, `が 関《せき》の山《やま》`, `なりとも`], 2, `一言《ひとこと》 なりとも: even just a word, the formal minimum one offers.`],
      [`この 給料《きゅうりょう》 で は、 年《ねん》 に 一度《いちど》 旅行《りょこう》 する の が 関《せき》の山《やま》 だ。 means:`, [`A trip once a year is about the most this salary allows.`, `This salary lets me travel at least once a year.`, `On this salary I have to travel once a year.`], 0, `〜の が 関《せき》の山《やま》 だ: at most, and it is not much.`],
      [`At the end of a formal family meeting, which is a polite offer of help?`, [`何《なに》 か あったら 言《い》って。`, `ご不明《ふめい》 な 点《てん》 が あれば、 何《なん》 なり と お尋《たず》ね ください。`, `ご不明《ふめい》 な 点《てん》 は、 尋《たず》ねる の が 関《せき》の山《やま》 です。`], 1, `何《なん》 なり と 〜ください is a formal "anything at all"; the first is casual and the third makes no sense as an offer.`],
      [`Which sentence uses 〜て まで correctly?`, [`雨《あめ》 が 降《ふ》って まで、 傘《かさ》 を 持《も》って いく。`, `少《すこ》し なりとも たくさん 食《た》べて ください。`, `借金《しゃっきん》 を して まで、 高《たか》い 車《くるま》 を 買《か》う 必要《ひつよう》 は ない。`], 2, `〜て まで names a cost that goes too far; なりとも cannot go with たくさん.`],
      [`インフルエンザ の 季節《きせつ》 は、 人混《ひとご》み を 避《さ》ける ＿。`, [`に 越《こ》した こと は ない`, `だけ まし だ`, `なりとも ない`], 0, `〜に 越《こ》した こと は ない gives advice about the best option.`],
      [`A patient says 今《いま》 は 電話《でんわ》 に 出《で》る の が 関《せき》の山《やま》 です。 Which reply fits?`, [`もっと 頑張《がんば》れる はず です よ。`, `電話《でんわ》 に 出《で》る の も、 今《いま》 は やっと な ん です ね。`, `電話《でんわ》 に 出《で》る に 越《こ》した こと は ありません。`], 1, `The patient describes a low limit; reflect it back without pushing.`]
    ]
  },
  'n1-zu-jimai': {
    mistakes: [
      [`結局《けっきょく》、 先生《せんせい》 に は 相談《そうだん》 しずじまい でした。`, `結局《けっきょく》、 先生《せんせい》 に は 相談《そうだん》 せずじまい でした。`, `The ず-form of する is せず, so it is せずじまい.`],
      [`うっかり して、 玄関《げんかん》 の 鍵《かぎ》 を かけそびれました。`, `うっかり して、 玄関《げんかん》 の 鍵《かぎ》 を かけ忘《わす》れました。`, `Something that slipped your mind is 〜忘《わす》れる; そびれる is meaning to and letting the moment pass.`],
      [`人《ひと》 が 多《おお》くて、 花火《はなび》 を 見《み》る 損《そこ》ねた。`, `人《ひと》 が 多《おお》くて、 花火《はなび》 を 見損《みそこ》ねた。`, `損《そこ》ねる joins to the ます-stem: 見《み》 + 損《そこ》ねる.`]
    ],
    more: [
      [`受診《じゅしん》 しよう と 何度《なんど》 も 思《おも》った ん です が、 結局《けっきょく》 行《い》かずじまい で……。`, `(Patient) I thought many times about seeing a doctor, but in the end I never went.`],
      [`先《さき》ほど 言《い》いそびれて しまった の です が、 次回《じかい》 は 血液《けつえき》 検査《けんさ》 も あります。`, `I didn't get a chance to mention it earlier, but next time there will also be a blood test.`],
      [`昨夜《さくや》 は 同室《どうしつ》 の 方《かた》 の 物音《ものおと》 で 寝《ね》そびれて しまった と 話《はな》す。`, `Says that noise from a roommate last night kept her from getting to sleep. (nursing note)`],
      [`スマホ を 構《かま》える の が 遅《おく》れて、 決定的《けっていてき》 な 瞬間《しゅんかん》 を 撮《と》り損《そこ》ねた。`, `I was too slow getting my phone up and failed to catch the key moment.`],
      [`引《ひ》っ越《こ》し先《さき》 を 探《さが》しあぐねて、 結局《けっきょく》 今《いま》 の 部屋《へや》 の 契約《けいやく》 を 更新《こうしん》 した。`, `After searching and searching for a new place without success, I renewed the lease on my flat.`],
      [`留学中《りゅうがくちゅう》 に 富士山《ふじさん》 に 登《のぼ》る つもり だった が、 とうとう 登《のぼ》らずじまい だった。`, `I meant to climb Mount Fuji while studying abroad, but in the end I never did.`]
    ],
    quiz: [
      [`先輩《せんぱい》 が すぐ 帰《かえ》って しまった ので、 借《か》りて いた 本《ほん》 を ＿ しまった。`, [`返《かえ》しそびれて`, `返《かえ》さずじまい で`, `返《かえ》しあぐねて`], 0, `The moment to give it back slipped by: 返《かえ》しそびれる. ずじまい does not take しまう, and 返《かえ》す does not take あぐねる.`],
      [`せっかく 旅行《りょこう》 に 行《い》った のに、 有名《ゆうめい》 な 滝《たき》 は 見《み》ずじまい だった。 means:`, [`I saw the waterfall at the end of the trip.`, `I went all that way but never saw the famous waterfall.`, `I decided I did not want to see the waterfall.`], 1, `〜ずじまい: the chance closed and it never happened.`],
      [`忙《いそが》しさ に 紛《まぎ》れて、 恩師《おんし》 へ の 手紙《てがみ》 は とうとう ＿ だった。`, [`出《だ》しそびれ`, `出《だ》し損《そこ》ない`, `出《だ》さずじまい`], 2, `With とうとう … だった, "never sent in the end" is 出《だ》さずじまい; the stems of そびれる and 損《そこ》なう cannot stand before だった here.`],
      [`母《はは》 へ の 贈《おく》り物《もの》 を 探《さが》しあぐねて いる。 means:`, [`I have been looking for a gift for my mother and still cannot find one.`, `I found a gift for my mother straight away.`, `I forgot to look for a gift for my mother.`], 0, `〜あぐねる: long effort that still leaves one stuck.`],
      [`Which of these is correct?`, [`明日《あした》 の 会議《かいぎ》 に は 行《い》かずじまい です。`, `手《て》 が 滑《すべ》って、 ボール を 受《う》け損《そこ》ねた。`, `新《あたら》しい 靴《くつ》 を 履《は》きあぐねて いる。`], 1, `受《う》け損《そこ》ねる is a failed attempt; ずじまい needs a chance that has closed, and 履《は》く does not take あぐねる.`],
      [`An older relative writes 返事《へんじ》 を どう 書《か》く か 考《かんが》えあぐねて おります。 How would you say this in everyday speech?`, [`返事《へんじ》 を 書《か》きそびれました。`, `返事《へんじ》 を 書《か》かずじまい です。`, `返事《へんじ》 を どう 書《か》く か、 いくら 考《かんが》えて も 決《き》められない ん です。`], 2, `考《かんが》えあぐねる is written; in speech say いくら 考《かんが》えて も 決《き》められない.`]
    ]
  },
  'n1-ni-wa-ataranai': {
    mistakes: [
      [`あの 番組《ばんぐみ》 は 内容《ないよう》 が 下品《げひん》 で、 見《み》る に 忍《しの》びない。`, `あの 番組《ばんぐみ》 は 内容《ないよう》 が 下品《げひん》 で、 見《み》る に 堪《た》えない。`, `Something too poor or offensive to watch is 見《み》る に 堪《た》えない; 忍《しの》びない is pity or grief.`],
      [`この 程度《ていど》 の 物忘《ものわす》れ は、 心配《しんぱい》 する に は 当《あ》たらない。`, `この 程度《ていど》 の 物忘《ものわす》れ は、 心配《しんぱい》 する こと は ありません よ。`, `Grammatical but the plain written judgement sounds cold to a worried patient; say 〜こと は ありません.`],
      [`この 祭《まつ》り は、 町内会《ちょうないかい》 の 努力《どりょく》 で 続《つづ》いて きた と 言《い》って も 過言《かごん》 が ない。`, `この 祭《まつ》り は、 町内会《ちょうないかい》 の 努力《どりょく》 で 続《つづ》いて きた と 言《い》って も 過言《かごん》 では ない。`, `The set phrase is 過言《かごん》 では ない, not が ない.`]
    ],
    more: [
      [`今回《こんかい》 の 退院《たいいん》 が 実現《じつげん》 した の は、 ご家族《かぞく》 の 粘《ねば》り強《づよ》い 支《ささ》え が あった から だ と 言《い》って も 過言《かごん》 では ありません。`, `It is no exaggeration to say that this discharge came about thanks to the family's patient, steady support. (case conference presentation)`],
      [`母《はは》 が 私《わたし》 の 名前《なまえ》 を 思《おも》い出《だ》せない の を 見《み》る の は、 忍《しの》びなくて……。`, `(Family) I can hardly bear to see my mother unable to remember my name.`],
      [`今回《こんかい》 の 転倒《てんとう》 は、 必要《ひつよう》 な 予防策《よぼうさく》 を 講《こう》じて いた 中《なか》 で 起《お》きた もの で あり、 担当者《たんとうしゃ》 の 責任《せきにん》 を 問《と》う に は 当《あ》たらない。`, `This fall happened even though preventive measures were in place, and there is no call to hold the staff member responsible. (incident review)`],
      [`雨《あめ》 の 中《なか》 で 鳴《な》いて いる 子猫《こねこ》 を 見捨《みす》てる の は 忍《しの》びなく、 家《いえ》 に 連《つ》れて 帰《かえ》った。`, `I could not bring myself to leave the kitten crying in the rain, so I took it home.`],
      [`あの 選手《せんしゅ》 が 優勝《ゆうしょう》 した の は、 日頃《ひごろ》 の 練習量《れんしゅうりょう》 を 考《かんが》えれば 驚《おどろ》く に は 当《あ》たらない。`, `Given how much that athlete trains, there is nothing surprising in the win.`],
      [`大雪《おおゆき》 の ため、 列車《れっしゃ》 は 運転《うんてん》 の 見合《みあ》わせ を 余儀《よぎ》なく された。`, `Because of heavy snow, the trains had no choice but to suspend service. (news)`]
    ],
    quiz: [
      [`長年《ながねん》 一緒《いっしょ》 に 暮《く》らした 犬《いぬ》 を 手放《てばな》す の は ＿。`, [`過言《かごん》 では ない`, `忍《しの》びない`, `当《あ》たらない`], 1, `Parting with a beloved pet is too painful to bear: 忍《しの》びない.`],
      [`子供《こども》 が 反抗期《はんこうき》 に 親《おや》 に 口答《くちごた》え する の は 成長《せいちょう》 の 証《あかし》 で あり、 嘆《なげ》く に は 当《あ》たらない。 means:`, [`Children who answer back in that phase give their parents real cause for worry.`, `Parents should stop children from answering back in that phase.`, `Answering back in that phase is a sign of growth and nothing to be upset about.`], 2, `〜に は 当《あ》たらない: the facts do not warrant that reaction (here, being upset). (parenting column)`],
      [`In a farewell speech you want to make a strong claim about the head nurse. Which fits?`, [`この 科《か》 の チームワーク は、 師長《しちょう》 が 一《いち》 から 作《つく》り上《あ》げた と 言《い》って も 過言《かごん》 では ありません。`, `この 科《か》 の チームワーク は、 師長《しちょう》 が 一《いち》 から 作《つく》り上《あ》げた に は 当《あ》たりません。`, `この 科《か》 の チームワーク は、 師長《しちょう》 が 一《いち》 から 作《つく》り上《あ》げた に 忍《しの》びません。`], 0, `〜と 言《い》って も 過言《かごん》 では ありません is the speech form for a strong claim.`],
      [`Which is the everyday way to say 見《み》る に 忍《しの》びない?`, [`見《み》る に 越《こ》した こと は ない`, `見《み》て いられない`, `見《み》る しか ない`], 1, `In speech, 見《み》る に 忍《しの》びない becomes 見《み》て いられない.`],
      [`A patient is embarrassed about crying during the session. Which is the kind thing to say?`, [`泣《な》いて しまった こと を、 恥《は》ずかしく 思《おも》う こと は ありません よ。`, `泣《な》いて しまった こと を 恥《は》じる に は 当《あ》たらない。`, `泣《な》いて しまった こと を 恥《は》じる に 忍《しの》びません。`], 0, `〜こと は ありません よ is the warm spoken form; plain に は 当《あ》たらない sounds like a written verdict, and 忍《しの》びない is the speaker's own pity.`],
      [`Which sentence uses its pattern naturally?`, [`彼《かれ》 が 遅刻《ちこく》 した の は 驚《おどろ》き に 忍《しの》びない。`, `毎日《まいにち》 の 散歩《さんぽ》 は 健康《けんこう》 に 当《あ》たらない。`, `この 町《まち》 の 発展《はってん》 は 港《みなと》 と 共《とも》 に あった と 言《い》って も 過言《かごん》 では ない。`], 2, `過言《かごん》 では ない follows a plain-form claim; 忍《しの》びない needs a verb of seeing or doing, and the second makes no sense.`]
    ]
  }
});
