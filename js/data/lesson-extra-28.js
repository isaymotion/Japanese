/* Lesson extras part 28 (1.0.0): common mistakes, more examples and a "More practice" quiz for existing N1 lessons
   (n1-zaru-nu, n1-ikanaru, n1-te-shikarubeki, n1-keigo-3, n1-ronbun, n1-aisatsu).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n1-zaru-nu': {
    mistakes: [
      ["明日《あした》 まで に 発表《はっぴょう》 の 準備《じゅんび》 を しねば ならない。", "明日《あした》 まで に 発表《はっぴょう》 の 準備《じゅんび》 を せねば ならない。", "The old stem of する is せ, so the form is せねば, never しねば."],
      ["これ は 知《し》られず 名作《めいさく》 と して 話題《わだい》 に なった 映画《えいが》 です。", "これ は 知《し》られざる 名作《めいさく》 と して 話題《わだい》 に なった 映画《えいが》 です。", "Before a noun the old negative is ざる (or ぬ); ず cannot modify a noun."],
      ["結果《けっか》 は 来週《らいしゅう》 わかります から、 今《いま》 は 心配《しんぱい》せず とも 大丈夫《だいじょうぶ》 です よ。", "結果《けっか》 は 来週《らいしゅう》 わかります から、 今《いま》 は 心配《しんぱい》しなくて も 大丈夫《だいじょうぶ》 です よ。", "Grammatical but stiff and old-fashioned from a doctor to a patient; say 〜なくて も."]
    ],
    more: [
      ["朝《あさ》 は 体《からだ》 が 重《おも》くて、 なかなか 起《お》きられん。", "My body feels heavy in the mornings, and I just can't get up. (older man)"],
      ["退院《たいいん》 する 前《まえ》 に、 息子《むすこ》 と きちんと 話《はなし》 を せねば と 思《おも》って おります。", "Before I leave hospital, I feel I must have a proper talk with my son. (older patient)"],
      ["患者《かんじゃ》 の 普段《ふだん》 の 生活《せいかつ》 を 知《し》らず して、 適切《てきせつ》 な 支援《しえん》 は できない。", "Without knowing a patient's everyday life, you cannot give the right support. (training text; say 〜を 知《し》らないで)"],
      ["この 町《まち》 の 知《し》られざる 歴史《れきし》 を 紹介《しょうかい》 する 本《ほん》 が 出《で》た。", "A book has come out about the little-known history of this town."],
      ["資料《しりょう》 は 会場《かいじょう》 で お配《くば》り します ので、 事前《じぜん》 に 印刷《いんさつ》せず とも 結構《けっこう》 です。", "Handouts will be given out at the venue, so there is no need to print them beforehand. (meeting notice; say 〜しなくて も)"],
      ["本《ほん》 を 読《よ》んで いたら、 知《し》らぬ 間《ま》 に 雨《あめ》 が 止《や》んで いた。", "While I was reading, the rain had stopped before I knew it."]
    ],
    quiz: [
      ["その 夜《よる》 は 一睡《いっすい》 も ＿ まま 朝《あさ》 を 迎《むか》えた。", ["眠《ねむ》れぬ", "眠《ねむ》れず とも", "眠《ねむ》れねば"], 0, "Before まま you need a form that modifies a noun: ぬ. ず とも and ねば cannot."],
      ["わざわざ 来《こ》ず とも、 お電話《でんわ》 で 結構《けっこう》 です。 means:", ["You must come in person; a phone call is not enough.", "There is no need to come specially; a phone call is fine.", "If you do not come, you must phone."], 1, "〜ず とも is \"even without doing\", the written 〜なくて も."],
      ["何《なに》 も ＿ して 成功《せいこう》 した 人《ひと》 など いない。", ["しず", "さず", "せず"], 2, "する takes the old stem せ: せず して, \"without doing\"."],
      ["An older patient says 夜《よる》 は どうも 眠《ねむ》れん. Which reply suits you as the doctor?", ["夜《よる》 は 眠《ねむ》れねば なりません。", "夜《よる》 は 眠《ねむ》れない ん です ね。", "夜《よる》 は 眠《ねむ》れぬ べき です。"], 1, "Reflect the old ん in plain modern polite speech: 眠《ねむ》れない ん です ね. The other two say \"must sleep\" or are ungrammatical."],
      ["あらぬ 噂《うわさ》 を 立《た》てられて、 本当《ほんとう》 に 困《こま》った。 means:", ["A groundless rumour was spread about me, and it really upset me.", "There was no rumour at all, so I was relieved.", "I was upset because I had started a rumour."], 0, "あらぬ is \"wrong, groundless\": あらぬ 噂《うわさ》 is a rumour with no basis."],
      ["A documentary title, \"Battling an Unseen Enemy\": 「＿ 敵《てき》 と の 戦《たたか》い」", ["見《み》えず", "見《み》えねば", "見《み》えざる"], 2, "Before a noun in a title the old negative is ざる; ず and ねば cannot modify a noun."]
    ]
  },
  'n1-ikanaru': {
    mistakes: [
      ["この 治療《ちりょう》 では、 何《なん》ら の 副作用《ふくさよう》 が 出《で》る 可能性《かのうせい》 が あります。", "この 治療《ちりょう》 では、 何《なん》らか の 副作用《ふくさよう》 が 出《で》る 可能性《かのうせい》 が あります。", "何《なん》ら needs a negative; the positive \"some (kind of)\" is 何《なん》らか の."],
      ["入院《にゅういん》 して、 家族《かぞく》 の 支《ささ》え が いかに 大切《たいせつ》 だ を 実感《じっかん》 しました。", "入院《にゅういん》 して、 家族《かぞく》 の 支《ささ》え が いかに 大切《たいせつ》 か を 実感《じっかん》 しました。", "いかに meaning \"how very\" must close its clause with か."],
      ["いかなる こと でも、 気《き》 に なったら 教《おし》えて ください ね。", "どんな こと でも、 気《き》 に なったら 教《おし》えて ください ね。", "Grammatical but いかなる belongs to notices and forms and sounds cold to a patient; in speech say どんな."]
    ],
    more: [
      ["職員《しょくいん》 へ の お心付《こころづ》け は、 いかなる 形《かたち》 で あれ ご辞退《じたい》 申《もう》し上《あ》げて おります。", "Our staff respectfully decline gifts of any kind. (sample notice)"],
      ["本人《ほんにん》 は 入院《にゅういん》 に ついて 何《なん》ら の 不満《ふまん》 も 述《の》べなかった。", "The patient voiced no complaint at all about the admission. (case report)"],
      ["いずれ に して も、 次《つぎ》 の 診察《しんさつ》 で もう 一度《いちど》 一緒《いっしょ》 に 考《かんが》えましょう。", "In any case, let's think about it together again at your next appointment."],
      ["いかに して 限《かぎ》られた 時間《じかん》 を 有効《ゆうこう》 に 使《つか》う か は、 誰《だれ》 に とって も 大《おお》きな 問題《もんだい》 だ。", "How to make good use of limited time is a big question for everyone. (essay)"],
      ["いかに 疲《つか》れて いて も、 父《ちち》 は 毎朝《まいあさ》 の 散歩《さんぽ》 を 欠《か》かさない。", "However tired he is, my father never misses his morning walk."],
      ["パソコン に 何《なん》らか の 不具合《ふぐあい》 が 起《お》きて いる よう だ。", "Something seems to be wrong with the computer."]
    ],
    quiz: [
      ["＿ 事情《じじょう》 が あろう とも、 約束《やくそく》 は 守《まも》る べき だ。", ["何《なん》ら", "いかなる", "いかに"], 1, "いかなる goes straight before a noun: \"whatever the circumstances\". 何《なん》ら needs a negative, and いかに does not modify a noun."],
      ["会議《かいぎ》 では、 いかに して 患者《かんじゃ》さん の 不安《ふあん》 を 和《やわ》らげる か が 話《はな》し合《あ》われた。 means:", ["They discussed how to ease the patients' anxiety.", "They discussed how anxious the patients were.", "They discussed whether the patients' anxiety had eased."], 0, "いかに して is \"by what means\", the written どう やって."],
      ["Which sentence about worry is natural?", ["何《なん》ら 心配《しんぱい》 が あります。", "何《なん》らか 心配《しんぱい》 は いりません。", "何《なん》ら 心配《しんぱい》 は いりません。"], 2, "何《なん》ら goes with a negative; 何《なん》らか needs の before a noun and is positive."],
      ["A patient asks what いかなる 場合《ばあい》 も on a form means. Your explanation:", ["何《なん》らか の 時《とき》、 と いう 意味《いみ》 です。", "どんな 時《とき》 でも、 と いう 意味《いみ》 です。", "いかに 時《とき》 も、 と いう 意味《いみ》 です。"], 1, "Explain いかなる with the everyday どんな 〜でも; 何《なん》らか の 時《とき》 is \"at some time\", and いかに 時《とき》 も is ungrammatical."],
      ["いかに 丁寧《ていねい》 に ＿、 納得《なっとく》 して もらえなかった。", ["説明《せつめい》して も", "説明《せつめい》すれば", "説明《せつめい》した ので"], 0, "いかに \"however much\" pairs with 〜て も; すれば and ので do not fit the contrast."],
      ["At the end of a family meeting: ＿、 今日《きょう》 決《き》める 必要《ひつよう》 は ありません。", ["いかに して", "いかなる", "いずれ に して も"], 2, "いずれ に して も, \"in any case\", closes a discussion and can be said; the other two cannot stand alone here."]
    ]
  },
  'n1-te-shikarubeki': {
    mistakes: [
      ["現代《げんだい》 の 技術《ぎじゅつ》 を もって して も、 この 橋《はし》 は 一年《いちねん》 で 完成《かんせい》 できる。", "現代《げんだい》 の 技術《ぎじゅつ》 を もって すれば、 この 橋《はし》 は 一年《いちねん》 で 完成《かんせい》 できる。", "を もって して も leads to a negative or difficult result; for \"it can be done\" use を もって すれば."],
      ["患者《かんじゃ》 の 声《こえ》 は、 病院《びょういん》 の 運営《うんえい》 に もっと 生《い》かされる しかるべき だ。", "患者《かんじゃ》 の 声《こえ》 は、 病院《びょういん》 の 運営《うんえい》 に もっと 生《い》かされて しかるべき だ。", "しかるべき in \"ought by rights\" follows the て-form of the verb."],
      ["この 提案《ていあん》 は 議論《ぎろん》 を 値《あたい》する。", "この 提案《ていあん》 は 議論《ぎろん》 に 値《あたい》する。", "値《あたい》する takes what is deserved with に, not を."]
    ],
    more: [
      ["この 方法《ほうほう》 は、 私《わたし》たち の 病棟《びょうとう》 でも 試《ため》す に 値《あたい》する と 思《おも》います。", "I think this method is worth trying on our ward too. (case conference)"],
      ["長年《ながねん》 地域《ちいき》 医療《いりょう》 を 支《ささ》えて きた 看護師《かんごし》 の 働《はたら》き は、 もっと 評価《ひょうか》 されて しかるべき で ある。", "The work of nurses who have supported community care for years ought by rights to be valued more. (journal editorial)"],
      ["退院後《たいいんご》 の 生活《せいかつ》 に ついて は、 しかるべき 担当者《たんとうしゃ》 から ご説明《せつめい》 いたします。", "The appropriate staff member will explain about life after discharge. (letter to a family)"],
      ["今《いま》 の 気象《きしょう》 観測《かんそく》 の 技術《ぎじゅつ》 を もって すれば、 大雨《おおあめ》 も かなり 前《まえ》 から 予測《よそく》 できる。", "With today's weather observation technology, heavy rain can be forecast well in advance."],
      ["恩師《おんし》 の その 一言《ひとこと》 が、 彼《かれ》 を して 留学《りゅうがく》 を 決意《けつい》せしめた。", "That one remark from his old teacher made him decide to study abroad. (essay; say 〜させた)"],
      ["あの 店《みせ》 の ラーメン は、 一時間《いちじかん》 並《なら》ぶ に 値《あたい》する。", "The ramen at that shop is worth queuing an hour for."]
    ],
    quiz: [
      ["子育《こそだ》て を しながら 働《はたら》く 人《ひと》 へ の 支援《しえん》 は、 もっと 充実《じゅうじつ》 して ＿。", ["しかるべき だ", "値《あたい》する", "もって すれば"], 0, "て-form + しかるべき だ: \"ought by rights to be better\". 値《あたい》する and もって すれば do not follow the て-form."],
      ["彼《かれ》 の 経験《けいけん》 を もって すれば、 この 難《むずか》しい 交渉《こうしょう》 も まとめられる だろう。 means:", ["Even with his experience, this hard negotiation will fail.", "With his experience, he should be able to settle even this hard negotiation.", "He gained his experience by settling this hard negotiation."], 1, "を もって すれば: \"with X, it can be done\"; the second half is a possibility."],
      ["The classical causative of 感動《かんどう》する, as in 聴衆《ちょうしゅう》 を ＿:", ["感動《かんどう》すしめた", "感動《かんどう》しめた", "感動《かんどう》せしめた"], 2, "しめる attaches to the ない-stem, and the old stem of する is せ: せしめる."],
      ["At a case conference you want to say, in plain polite speech, that the family's wishes should have been respected:", ["ご家族《かぞく》 の 希望《きぼう》 を もっと 尊重《そんちょう》 する べき でした。", "ご家族《かぞく》 の 希望《きぼう》 を もっと 尊重《そんちょう》せしめる べき でした。", "ご家族《かぞく》 の 希望《きぼう》 を もって すれば よかった です。"], 0, "The spoken form of 〜て しかるべき is 〜べき でした; せしめる is a literary causative (\"make someone respect\"), and the third option does not make sense."],
      ["An editorial says 若手《わかて》 の 意見《いけん》 も もっと 聞《き》かれて しかるべき だ. It suggests that:", ["young staff should listen more to others", "young staff's views are already heard enough", "young staff's views ought to be heard more than they are now"], 2, "〜て しかるべき says it would only be proper and implies it is not yet so; 聞《き》かれて is passive, so the views are what should be heard."],
      ["A journal says a finding \"deserves attention\". Which fits?", ["注目《ちゅうもく》 に 足《た》りない", "注目《ちゅうもく》 に 値《あたい》する", "注目《ちゅうもく》 を もって する"], 1, "〜に 値《あたい》する is \"deserves\"; the first says \"not enough to attract notice\", and the third is not a phrase."]
    ]
  },
  'n1-keigo-3': {
    mistakes: [
      ["以上《いじょう》、 これ まで の 経過《けいか》 を お報告《ほうこく》 申《もう》し上《あ》げます。", "以上《いじょう》、 これ まで の 経過《けいか》 を ご報告《ほうこく》 申《もう》し上《あ》げます。", "報告《ほうこく》 is a Sino-Japanese する-noun, so it takes ご, not お."],
      ["会議《かいぎ》 の 日程《にってい》 が 変更《へんこう》 に なりました ので、 ご査収《さしゅう》 ください。", "会議《かいぎ》 の 日程《にってい》 が 変更《へんこう》 に なりました ので、 ご確認《かくにん》 ください。", "ご査収《さしゅう》 is only for something you send; for \"please check\" in general use ご確認《かくにん》."],
      ["先生《せんせい》、 明日《あした》 少《すこ》し お時間《じかん》 を いただければ 幸甚《こうじん》 です。", "先生《せんせい》、 明日《あした》 少《すこ》し お時間《じかん》 を いただけると 助《たす》かります。", "Grammatical but 幸甚《こうじん》 is for formal writing only; face to face say 〜いただけると 助《たす》かります."]
    ],
    more: [
      ["ご紹介《しょうかい》 いただいた 患者《かんじゃ》さん の 検査《けんさ》 結果《けっか》 を 添付《てんぷ》 いたします ので、 ご査収《さしゅう》 の ほど よろしく お願《ねが》い いたします。", "I attach the test results of the patient you referred, and ask you to check them. (e-mail)"],
      ["入院中《にゅういんちゅう》 は 母《はは》 が 大変《たいへん》 お世話《せわ》 に なり、 家族《かぞく》 一同《いちどう》 心《こころ》 より お礼《れい》 申《もう》し上《あ》げます。", "Our whole family thanks you from the heart for all your care of our mother in hospital. (thank-you letter from a family)"],
      ["先生《せんせい》、 今日《きょう》 の 外来《がいらい》 を 後《うし》ろ で 拝見《はいけん》して も よろしい でしょう か。", "Doctor, may I watch your outpatient clinic today from the back? (to a senior)"],
      ["本日《ほんじつ》 は お招《まね》き に あずかり、 誠《まこと》 に ありがとう ございます。", "Thank you very much for inviting me today. (guest at a party)"],
      ["お手数《てすう》 です が、 今週中《こんしゅうちゅう》 に ご返信《へんしん》 いただければ 幸《さいわ》い です。", "Sorry to trouble you, but I would be grateful for a reply within this week. (e-mail)"],
      ["皆様《みなさま》 から 温《あたた》かい お言葉《ことば》 を 賜《たまわ》り、 胸《むね》 が いっぱい です。", "Receiving such warm words from you all, my heart is full. (retirement speech)"]
    ],
    quiz: [
      ["先日《せんじつ》 の 学会《がっかい》 で、 先生《せんせい》 の ご講演《こうえん》 を ＿ いたしました。", ["拝聴《はいちょう》", "拝受《はいじゅ》", "拝借《はいしゃく》"], 0, "Listening to a talk is 拝聴《はいちょう》; 拝受《はいじゅ》 is receiving a document and 拝借《はいしゃく》 borrowing."],
      ["You attach your CV to an e-mail. Which line is right?", ["履歴書《りれきしょ》 を 添付《てんぷ》 いたします ので、 拝受《はいじゅ》 ください。", "履歴書《りれきしょ》 を 添付《てんぷ》 いたします ので、 ご査収《さしゅう》 ください。", "履歴書《りれきしょ》 を 添付《てんぷ》 いたします ので、 拝見《はいけん》 ください。"], 1, "ご査収《さしゅう》 ください asks the reader to check what you send; 拝受《はいじゅ》 and 拝見《はいけん》 are humble and cannot be asked of the reader."],
      ["格別《かくべつ》 の ご高配《こうはい》 を 賜《たまわ》り、 厚《あつ》く お礼《れい》 申《もう》し上《あ》げます。 means:", ["We thank you deeply for your special consideration.", "We ask you to give us special consideration.", "We apologise for causing you special trouble."], 0, "〜を 賜《たまわ》り is \"having been granted\", and お礼《れい》 申《もう》し上《あ》げます is the highest \"thank you\"."],
      ["A ward notice: 皆様《みなさま》 に 新《あたら》しい 面会《めんかい》 時間《じかん》 を ご案内《あんない》 ＿。", ["なさいます", "くださいます", "申《もう》し上《あ》げます"], 2, "The hospital's own action toward the readers is humble: ご〜申《もう》し上《あ》げます. なさる and くださる would raise the hospital."],
      ["Which sentence wrongly uses 拝《はい》〜 for someone else's action?", ["お写真《しゃしん》 を 拝見《はいけん》 いたしました。", "教授《きょうじゅ》 が 私《わたし》 の 論文《ろんぶん》 を 拝読《はいどく》 なさいました。", "先生《せんせい》 の ご著書《ちょしょ》 を 拝読《はいどく》 いたしました。"], 1, "拝《はい》〜 lowers only your own action; for the professor's reading say お読《よ》み に なりました."],
      ["When you say 資料《しりょう》 を 拝借《はいしゃく》 いたします, you are:", ["lending the documents to the listener", "asking the listener to borrow the documents", "humbly borrowing the documents from the listener"], 2, "拝借《はいしゃく》 is the humble \"borrow\": your own action, toward the person you borrow from."]
    ]
  },
  'n1-ronbun': {
    mistakes: [
      ["不安《ふあん》 が 強《つよ》まり、 通学《つうがく》 に 支障《ししょう》 が 来《きた》した。", "不安《ふあん》 が 強《つよ》まり、 通学《つうがく》 に 支障《ししょう》 を 来《きた》した。", "来《きた》す is transitive, so its object takes を; with が, say 支障《ししょう》 が 出《で》た."],
      ["外出《がいしゅつ》 に も 支障《ししょう》 を 来《きた》して いた ん です ね。", "外出《がいしゅつ》 に も 支障《ししょう》 が 出《で》て いた ん です ね。", "Grammatical but 来《きた》す is report style; to a patient say 支障《ししょう》 が 出《で》る."],
      ["本人《ほんにん》 が 退院《たいいん》 を 強《つよ》く 希望《きぼう》して いる に 鑑《かんが》み、 外泊《がいはく》 から 始《はじ》める こと と した。", "本人《ほんにん》 が 退院《たいいん》 を 強《つよ》く 希望《きぼう》して いる こと に 鑑《かんが》み、 外泊《がいはく》 から 始《はじ》める こと と した。", "〜に 鑑《かんが》み follows a noun; after a clause add こと."]
    ],
    more: [
      ["経過中《けいかちゅう》、 一時的《いちじてき》 に 軽躁《けいそう》 状態《じょうたい》 を 呈《てい》した。", "During the course, the patient briefly showed a hypomanic state. (case report)"],
      ["地域《ちいき》 の 支援《しえん》 体制《たいせい》 に 鑑《かんが》み、 訪問《ほうもん》 看護《かんご》 の 導入《どうにゅう》 を 検討《けんとう》 した。", "In view of the support available in the local area, we considered starting home-visit nursing. (case report)"],
      ["家族《かぞく》 の 話《はなし》 から、 症状《しょうじょう》 は 半年《はんとし》 ほど 前《まえ》 から 始《はじ》まって いた と 推察《すいさつ》される。", "From the family's account, it can be inferred that the symptoms began about six months earlier. (case report)"],
      ["システム の 故障《こしょう》 で、 駅《えき》 の 改札《かいさつ》 は 一時《いちじ》 混乱《こんらん》 を 来《きた》した。", "A system fault caused confusion at the station ticket gates for a while. (news)"],
      ["この 小《ちい》さな 図書館《としょかん》 が、 地域《ちいき》 の 子《こ》どもたち の 学《まな》び の 一助《いちじょ》 と なれば うれしい。", "I would be glad if this little library could be of some help to the local children's learning."],
      ["天候《てんこう》 不良《ふりょう》 が 予想《よそう》 される こと に 鑑《かんが》み、 花火《はなび》 大会《たいかい》 は 中止《ちゅうし》 と いたします。", "In view of the expected bad weather, the fireworks display is cancelled. (sample notice)"]
    ],
    quiz: [
      ["初診時《しょしんじ》、 患者《かんじゃ》 は 多弁《たべん》 で 落《お》ち着《つ》き の ない 状態《じょうたい》 ＿ 呈《てい》して いた。", ["が", "を", "に"], 1, "呈《てい》する is transitive: the clinical picture takes を."],
      ["家族《かぞく》 の 疲労《ひろう》 が 強《つよ》い こと に 鑑《かんが》み、 短期《たんき》 入院《にゅういん》 を 提案《ていあん》 した。 means:", ["In view of the family's exhaustion, a short admission was proposed.", "Despite the family's exhaustion, a short admission was proposed.", "Because a short admission was proposed, the family became exhausted."], 0, "〜に 鑑《かんが》み gives the grounds for a decision: \"in view of\"."],
      ["In the discussion section you want to cite what earlier papers found. Which ending fits?", ["〜と 推察《すいさつ》される", "〜との 報告《ほうこく》 が ある", "〜を 来《きた》した"], 1, "〜との 報告《ほうこく》 が ある introduces other people's published work; 推察《すいさつ》 is the writer's inference and 来《きた》す a resulting problem."],
      ["To a family, you want to say their mother's poor sleep was getting in the way of daily life:", ["お母様《かあさま》 の 不眠《ふみん》 は 日常《にちじょう》 生活《せいかつ》 に 支障《ししょう》 を 来《きた》して いた。", "お母様《かあさま》 は 不眠《ふみん》 を 呈《てい》された と 推察《すいさつ》される。", "お母様《かあさま》 は 眠《ねむ》れなくて、 毎日《まいにち》 の 生活《せいかつ》 に 差《さ》し支《つか》え が 出《で》て いた よう です ね。"], 2, "To a family use everyday polite words; the first two are plain report style with no です / ます."],
      ["In a case report, 〜と 推察《すいさつ》される differs from 〜を 認《みと》めた in that it:", ["marks what the writer infers, not what was observed", "marks a finding seen directly on examination", "marks a request to the reader"], 0, "推察《すいさつ》される says plainly that it is an inference; 認《みと》めた reports an observed finding."],
      ["厳《きび》しい 暑《あつ》さ で、 野菜《やさい》 の 出荷《しゅっか》 に 支障《ししょう》 を 来《きた》して いる。 means:", ["Vegetable shipments have gone up despite the heat.", "The heat has pushed up vegetable prices.", "The heat is disrupting vegetable shipments."], 2, "〜に 支障《ししょう》 を 来《きた》す is \"interfere with, disrupt\"; it says nothing about prices."]
    ]
  },
  'n1-aisatsu': {
    mistakes: [
      ["末筆《まっぴつ》 ながら、 皆様《みなさま》 の ご健康《けんこう》 を お祈《いの》り いたしまして、 ご挨拶《あいさつ》 と させて いただきます。", "最後《さいご》 に なりました が、 皆様《みなさま》 の ご健康《けんこう》 を お祈《いの》り いたしまして、 ご挨拶《あいさつ》 と させて いただきます。", "Grammatical but 末筆《まっぴつ》 ながら is a letter phrase; in a speech say 最後《さいご》 に なりました が."],
      ["皆様《みなさま》 の ご健勝《けんしょう》 を 記念《きねん》して、 乾杯《かんぱい》！", "皆様《みなさま》 の ご健勝《けんしょう》 を 祈念《きねん》して、 乾杯《かんぱい》！", "A toast wishes for something, 祈念《きねん》; 記念《きねん》 sounds the same but means \"commemorate\"."],
      ["本日《ほんじつ》 の 会《かい》 を 始《はじ》めた に あたり、 一言《ひとこと》 ご挨拶《あいさつ》 申《もう》し上《あ》げます。", "本日《ほんじつ》 の 会《かい》 を 始《はじ》める に あたり、 一言《ひとこと》 ご挨拶《あいさつ》 申《もう》し上《あ》げます。", "〜に あたり takes a noun or the dictionary form, not the た-form."]
    ],
    more: [
      ["僭越《せんえつ》 ながら、 病棟《びょうとう》 の 看護師《かんごし》 の 皆様《みなさま》 に 一言《ひとこと》 お礼《れい》 を 申《もう》し上《あ》げたい と 思《おも》います。", "If I may, I would like to say a word of thanks to the nurses on the ward. (end of a rotation)"],
      ["精神科《せいしんか》 で の 研修《けんしゅう》 を 終《お》える に あたり、 病棟《びょうとう》 の 皆様《みなさま》 に 心《こころ》 より お礼《れい》 申《もう》し上《あ》げます。", "As I finish my psychiatry rotation, I thank everyone on the ward from my heart."],
      ["以上《いじょう》 を もちまして、 本日《ほんじつ》 の 症例《しょうれい》 検討会《けんとうかい》 を 終了《しゅうりょう》 いたします。", "With this, today's case conference is closed. (chair)"],
      ["新郎《しんろう》 新婦《しんぷ》 の 末永《すえなが》い お幸《しあわ》せ を 祈念《きねん》 いたしまして、 乾杯《かんぱい》！", "To the bride and groom's long happiness together. Cheers! (wedding toast)"],
      ["末筆《まっぴつ》 ながら、 どうぞ ご自愛《じあい》 ください。", "Lastly, please take good care of yourself. (letter)"],
      ["合唱団《がっしょうだん》 に 入《はい》った ばかり で、 わからない こと ばかり です が、 ご指導《しどう》 ご鞭撻《べんたつ》 の ほど、 よろしく お願《ねが》い いたします。", "I have only just joined the choir and have a lot to learn, but I ask for your guidance and encouragement."]
    ],
    quiz: [
      ["Who would naturally begin with 僭越《せんえつ》 ながら?", ["the hospital director, opening the year-end party", "a first year who has been asked to propose the toast", "a friend writing a casual birthday card"], 1, "僭越《せんえつ》 ながら shows modesty from a junior doing a task in front of seniors; the most senior person does not use it."],
      ["In a self-introduction at a welcome party, which line comes FIRST?", ["ただいま ご紹介《しょうかい》 に あずかりました、 サントス と 申《もう》します。", "最後《さいご》 に なりました が、 皆様《みなさま》 の ご健康《けんこう》 を お祈《いの》り いたします。", "ご指導《しどう》 ご鞭撻《べんたつ》 の ほど、 よろしく お願《ねが》い 申《もう》し上《あ》げます。"], 0, "A speaker who has just been introduced opens with ご紹介《しょうかい》 に あずかりました; the other two close the speech."],
      ["Who says ご指導《しどう》 ご鞭撻《べんたつ》 の ほど、 よろしく お願《ねが》い 申《もう》し上《あ》げます?", ["a professor, to a new resident", "a nurse, to a patient", "a new resident, to the staff"], 2, "The phrase is always a junior's request for guidance; nobody offers ご鞭撻《べんたつ》."],
      ["Which line would you WRITE in a letter rather than say in a speech?", ["最後《さいご》 に なりました が、 皆様《みなさま》 の ご活躍《かつやく》 を お祈《いの》り いたします。", "末筆《まっぴつ》 ながら、 皆様《みなさま》 の ご多幸《たこう》 を お祈《いの》り 申《もう》し上《あ》げます。", "僭越《せんえつ》 ながら、 乾杯《かんぱい》 の 音頭《おんど》 を 取《と》らせて いただきます。"], 1, "末筆《まっぴつ》 ながら, \"the last stroke of the brush\", belongs to letters; the other two are spoken."],
      ["In 乾杯《かんぱい》 の 音頭《おんど》 を 取《と》る, the speaker:", ["leads the toast", "pours everyone's drinks", "closes the party"], 0, "音頭《おんど》 を 取《と》る is to lead: here, to propose the toast."],
      ["End of a farewell speech: 先生《せんせい》 の 今後《こんご》 の ご活躍《かつやく》 を ＿、 お別《わか》れ の ご挨拶《あいさつ》 と いたします。", ["お祈《いの》り いただきまして", "お祈《いの》り くださいまして", "お祈《いの》り いたしまして"], 2, "The speaker is the one wishing, so the humble お〜いたす; いただく and くださる would make the listener the one who prays."]
    ]
  }
});
