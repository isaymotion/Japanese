/* Lesson extras part 15 (0.26.0): common mistakes, more examples and a "More practice" quiz for existing N2 lessons
   (n2-kanenai, n2-ni-suginai, n2-ppanashi, n2-zaru-wo-enai, n2-te-wa-irarenai, n2-kagiri-da).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n2-kanenai': {
    mistakes: [
      ["毎日《まいにち》 少《すこ》し 歩《ある》けば、 元気《げんき》 に なりかねません。", "毎日《まいにち》 少《すこ》し 歩《ある》けば、 元気《げんき》 に なる かも しれません。", "〜かねない is only for unwanted results; for a good result that may happen, use 〜かも しれない."],
      ["ご本人《ほんにん》 の 同意《どうい》 が ない と、 病状《びょうじょう》 は お伝《つた》え しかねません。", "ご本人《ほんにん》 の 同意《どうい》 が ない と、 病状《びょうじょう》 は お伝《つた》え しかねます。", "A polite \"I can't\" is 〜かねます; 〜かねません means \"could well happen\"."],
      ["夜更《よふ》かし が 続《つづ》く と、 体調《たいちょう》 を 崩《くず》す かねません。", "夜更《よふ》かし が 続《つづ》く と、 体調《たいちょう》 を 崩《くず》しかねません。", "〜かねない attaches to the ます-stem (崩《くず》し), not the dictionary form."]
    ],
    more: [
      ["毎晩《まいばん》 お酒《さけ》 を 飲《の》む 生活《せいかつ》 が 続《つづ》く と、 睡眠《すいみん》 の 質《しつ》 が さらに 悪《わる》く なりかねません。", "If you keep drinking every night, the quality of your sleep could well get even worse."],
      ["申《もう》し訳《わけ》 ありません が、 退院《たいいん》 の 日《ひ》 は まだ お約束《やくそく》 しかねます。", "I'm sorry, but I'm afraid I can't promise a discharge date yet."],
      ["どんな 治療《ちりょう》 に も、 副作用《ふくさよう》 は あり得《う》る もの です。", "With any treatment, side effects are possible."],
      ["こんな に たくさん の 仕事《しごと》、 今日中《きょうじゅう》 に 終《お》わりっこない よ。", "There's no way this much work will be done by the end of today."],
      ["雪《ゆき》 の 日《ひ》 に スピード を 出《だ》す と、 大《おお》きな 事故《じこ》 を 起《お》こしかねない。", "Speeding on a snowy day could well cause a serious accident."],
      ["困《こま》って いる 私《わたし》 を 見《み》かねて、 隣《となり》 の 人《ひと》 が 手伝《てつだ》って くれた。", "My neighbour couldn't bear to see me struggling and helped me out."]
    ],
    quiz: [
      ["At reception, politely refusing to give out personal details: 個人情報《こじんじょうほう》 な ので、 こちら では ＿。", ["お教《おし》え しかねます", "お教《おし》え しかねません", "お教《おし》え し得《う》る"], 0, "The polite \"I'm afraid I can't\" is 〜かねます; 〜かねません means \"could well happen\", and し得《う》る means \"can happen\"."],
      ["あの 人《ひと》 なら、 約束《やくそく》 を 忘《わす》れかねない means:", ["He would never forget a promise.", "He is quite capable of forgetting the promise.", "He is not able to forget the promise."], 1, "〜かねない says an unwanted result could well happen."],
      ["Fill the blank: あの 真面目《まじめ》 な 人《ひと》 が 約束《やくそく》 を 破《やぶ》る なんて、 ＿ と 思《おも》った。 (I thought it was unthinkable.)", ["ありかねる", "あり得《え》る", "あり得《え》ない"], 2, "あり得《え》ない means \"impossible, unthinkable\"; あり得《え》る means \"possible\", and ありかねる is not used."],
      ["A nurse reports 退院後《たいいんご》 の 生活《せいかつ》 を どう する か、 ご家族《かぞく》 も 決《き》めかねて います. This means:", ["The family has already decided how life after discharge will be arranged.", "The family still can't make up their minds about life after discharge.", "The family could well decide against the discharge."], 1, "決《き》めかねる means \"cannot make up one's mind\"; 〜かねる is \"cannot\", not \"could well\"."],
      ["To a friend: \"There's no way I'll pass.\" Which fits?", ["受《う》かりっこない よ。", "受《う》かりかねない よ。", "受《う》かり得《う》る よ。"], 0, "Casual \"no way\" is 〜っこない; 〜かねない is for unwanted results, and 受《う》かり得《う》る means \"I could pass\"."],
      ["Which says \"Lack of sleep could well lead to poorer concentration\"?", ["睡眠不足《すいみんぶそく》 は、 集中力《しゅうちゅうりょく》 の 低下《ていか》 を 招《まね》きっこない。", "睡眠不足《すいみんぶそく》 は、 集中力《しゅうちゅうりょく》 の 低下《ていか》 を 招《まね》きかねる。", "睡眠不足《すいみんぶそく》 は、 集中力《しゅうちゅうりょく》 の 低下《ていか》 を 招《まね》きかねない。"], 2, "〜かねない is the written \"could well lead to\"; 〜っこない means \"no way\", and 〜かねる means \"cannot\"."]
    ]
  },
  'n2-ni-suginai': {
    mistakes: [
      ["これ は 一例《いちれい》 だ に すぎません。", "これ は 一例《いちれい》 に すぎません。", "A noun goes straight before に すぎない, with no だ."],
      ["退院《たいいん》 できた の は、 吉田《よしだ》さん が 毎日《まいにち》 努力《どりょく》 した から ほかなりません。", "退院《たいいん》 できた の は、 吉田《よしだ》さん が 毎日《まいにち》 努力《どりょく》 した から に ほかなりません。", "The true-reason pattern needs に after から: 〜から に ほかならない."],
      ["ご家族《かぞく》 も 心配《しんぱい》 されて いる に 相違《そうい》 ありません よ。", "ご家族《かぞく》 も 心配《しんぱい》 されて いる に 違《ちが》いありません よ。", "Grammatical but 〜に 相違《そうい》ない is stiff written style; in speech to a patient use 〜に 違《ちが》いない."]
    ],
    more: [
      ["これ は あくまで 可能性《かのうせい》 の 一《ひと》つ に すぎません ので、 あまり 心配《しんぱい》 しないで ください。", "This is only one possibility, so please don't worry too much."],
      ["症状《しょうじょう》 が 軽《かる》く なった の は、 生活《せいかつ》 の リズム を 整《ととの》えた 結果《けっか》 に ほかなりません。", "Your symptoms eased precisely because you got your daily rhythm back in order."],
      ["本人《ほんにん》 に とって、 入院《にゅういん》 は 大《おお》きな 決断《けつだん》 で あった に 相違《そうい》ない。", "For the patient, the admission must surely have been a big decision. (written)"],
      ["私《わたし》 は 言《い》われた こと を やった に すぎません。", "I merely did what I was told."],
      ["自分《じぶん》 の 予定《よてい》 だけ 優先《ゆうせん》 する の は、 わがまま と いう もの だ。", "Putting only your own plans first is plain selfishness."],
      ["この 町《まち》 が きれい な の は、 住民《じゅうみん》 の 努力《どりょく》 に ほかならない。", "This town is clean thanks to nothing other than the residents' effort."]
    ],
    quiz: [
      ["A colleague thanks you warmly. You want to say \"I only did what anyone would.\" Which fits?", ["当然《とうぜん》 の こと を した に すぎません。", "当然《とうぜん》 の こと を した に ほかなりません。", "当然《とうぜん》 の こと を した に 相違《そうい》 ありません。"], 0, "〜に すぎない plays your part down; 〜に ほかならない singles out a true cause, and 〜に 相違《そうい》ない states a written certainty."],
      ["経過《けいか》 が よい の は、 早《はや》く 治療《ちりょう》 を 始《はじ》めた から に ほかならない means:", ["Starting treatment early made no difference to the course.", "The good course is only partly due to starting treatment early.", "The course is good precisely because treatment started early."], 2, "から に ほかならない gives the one true reason: \"precisely because\"."],
      ["A referral letter says 長期間《ちょうきかん》 の 不眠《ふみん》 が 影響《えいきょう》 して いる に 相違《そうい》ない. What does the writer mean?", ["The long insomnia is merely one minor factor.", "The long insomnia has, without doubt, played a part.", "It is not simply that the long insomnia is to blame."], 1, "〜に 相違《そうい》ない is the written 〜に 違《ちが》いない, \"must surely, without doubt\"."],
      ["薬《くすり》 を 飲《の》めば 治《なお》る と いう もの では ありません means:", ["Taking the medicine will certainly cure it.", "It is not simply a matter of taking the medicine to get better.", "The medicine is merely one option among many."], 1, "〜と いう もの では ない denies that something is simply so."],
      ["Fill the blank: まだ 一年目《いちねんめ》 の 人《ひと》 に 全部《ぜんぶ》 任《まか》せる の は、 酷《こく》 ＿ もの だ。", ["に すぎない", "に ほかならない", "と いう"], 2, "Noun + と いう もの だ gives the speaker's verdict: \"that is simply too harsh\"."],
      ["A patient says 私《わたし》 なんて、 会社《かいしゃ》 の 歯車《はぐるま》 の 一《ひと》つ に すぎない. What is the patient expressing?", ["That they feel they are merely an unimportant cog.", "That they are essential to the company.", "That they doubt the company will survive."], 0, "〜に すぎない plays oneself down; it can be a sign of low self-worth worth exploring."]
    ]
  },
  'n2-ppanashi': {
    mistakes: [
      ["窓《まど》 を 開《あ》けるっぱなし に して 出《で》かけて しまいました。", "窓《まど》 を 開《あ》けっぱなし に して 出《で》かけて しまいました。", "〜っぱなし follows the ます-stem (開《あ》け), not the dictionary form."],
      ["父《ちち》 と は 去年《きょねん》 話《はな》す きり です。", "父《ちち》 と は 去年《きょねん》 話《はな》した きり です。", "\"And not since\" needs the た-form before きり."],
      ["金曜日《きんようび》 は 飲《の》む 放題《ほうだい》 の 店《みせ》 に 行《い》きます。", "金曜日《きんようび》 は 飲《の》み放題《ほうだい》 の 店《みせ》 に 行《い》きます。", "〜放題《ほうだい》 follows the ます-stem: 飲《の》み放題《ほうだい》."]
    ],
    more: [
      ["入院中《にゅういんちゅう》 は ほとんど 横《よこ》 に なりっぱなし で、 足《あし》 が すっかり 弱《よわ》って しまいました。", "In hospital I was lying down nearly all the time, and my legs have got really weak."],
      ["夫《おっと》 は 先月《せんげつ》 病院《びょういん》 に 行《い》った きり、 その 後《あと》 は 受診《じゅしん》 して いません。", "My husband went to the hospital last month and hasn't been seen by a doctor since."],
      ["訪問《ほうもん》 した とき、 家《いえ》 の 中《なか》 は 荒《あ》れ放題《ほうだい》 で、 食事《しょくじ》 も とれて いない 様子《ようす》 でした。", "When we visited, the house had been left to fall into disorder inside, and he didn't seem to be eating."],
      ["昨日《きのう》 は 一日中《いちにちじゅう》 電話《でんわ》 が 鳴《な》りっぱなし だった。", "Yesterday the phone rang non-stop all day."],
      ["半年《はんとし》ぶり に 美容院《びよういん》 に 行《い》きました。", "I went to the hair salon for the first time in six months."],
      ["お金《かね》 を 貸《か》す の は、 これ きり だ よ。", "This is the last time I lend you money, okay?"]
    ],
    quiz: [
      ["あの 人《ひと》 は 会議《かいぎ》 で いつも ＿ だ。 (says whatever he likes)", ["言《い》いたい放題《ほうだい》", "言《い》うぶり", "言《い》いたい きり"], 0, "〜たい + 放題《ほうだい》 means doing as one likes without restraint; the other two are not forms."],
      ["朝《あさ》 から 晩《ばん》 まで 謝《あやま》りっぱなし の 一日《いちにち》 だった means:", ["I apologised once in the morning and that was all.", "It was a day of apologising non-stop from morning to night.", "Nobody apologised to me all day."], 1, "〜っぱなし here means the same thing goes on and on."],
      ["A mother says her son went out this morning and hasn't come back. Which fits?", ["朝《あさ》ぶり に 出《で》かけて、 帰《かえ》って きません。", "朝《あさ》 出《で》かけっぱなし で、 帰《かえ》って きました。", "朝《あさ》 出《で》かけた きり、 帰《かえ》って きません。"], 2, "た-form + きり means \"did this, and nothing since\"; ぶり needs a length of time."],
      ["Which phrase sounds too casual for a formal chart note?", ["自室《じしつ》 に 閉《と》じこもって いる。", "部屋《へや》 は 散《ち》らかし放題《ほうだい》 だ。", "整容《せいよう》 が 保《たも》たれて いない。"], 1, "〜放題《ほうだい》 is spoken and judgemental; a note describes the state neutrally."],
      ["上司《じょうし》 は 彼《かれ》 の 仕事《しごと》ぶり を 高《たか》く 評価《ひょうか》 して いる means:", ["The boss rates the way he works highly.", "The boss praised him for the first time in a long while.", "The boss rated his work only once."], 0, "Noun + ぶり can mean \"the way someone does it\": 仕事《しごと》ぶり."],
      ["Which means \"I'd like to talk with you alone, just the two of us\"?", ["二人《ふたり》ぶり で 話《はな》したい です。", "二人《ふたり》っぱなし で 話《はな》したい です。", "二人《ふたり》 きり で 話《はな》したい です。"], 2, "Noun + きり means \"only\": 二人《ふたり》 きり."]
    ]
  },
  'n2-zaru-wo-enai': {
    mistakes: [
      ["検査《けんさ》 の 結果《けっか》 を 見《み》て、 診断《しんだん》 を 見直《みなお》しざる を 得《え》なかった。", "検査《けんさ》 の 結果《けっか》 を 見《み》て、 診断《しんだん》 を 見直《みなお》さざる を 得《え》なかった。", "ざる follows the ない-form stem (見直《みなお》さ), not the ます-stem."],
      ["急《きゅう》 な 用事《ようじ》 で、 予定《よてい》 を 変更《へんこう》 しざる を 得《え》ません。", "急《きゅう》 な 用事《ようじ》 で、 予定《よてい》 を 変更《へんこう》 せざる を 得《え》ません。", "する is irregular: its ざる form is せざる."],
      ["連絡《れんらく》 が 来《く》る まで、 今《いま》 は 待《ま》たない ほか ありません。", "連絡《れんらく》 が 来《く》る まで、 今《いま》 は 待《ま》つ ほか ありません。", "〜ほか ない follows the dictionary form of the verb."]
    ],
    more: [
      ["不眠《ふみん》 が 続《つづ》いた ため、 夜勤《やきん》 を 減《へ》らさざる を 得《え》なかった との こと。", "Reportedly, because of continuing insomnia, the patient had to cut down on night shifts. (chart note)"],
      ["ご本人《ほんにん》 が 話《はな》し合《あ》い を 望《のぞ》まない 以上《いじょう》、 今《いま》 は 見守《みまも》る より ほか ありません。", "Since he does not want to talk it over, all we can do for now is watch over him."],
      ["ご家族《かぞく》 も、 お仕事《しごと》 を 調整《ちょうせい》 せざる を 得《え》なかった の では ありません か。", "Didn't you as a family also have to rearrange your work?"],
      ["電車《でんしゃ》 が 止《と》まって いる ので、 タクシー で 行《い》く より ほか ない。", "The trains have stopped, so there's nothing for it but to take a taxi."],
      ["値段《ねだん》 が 上《あ》がって、 毎年《まいとし》 の 海外旅行《かいがいりょこう》 は あきらめざる を 得《え》なかった。", "Prices went up, so I had to give up my yearly trip abroad."],
      ["壊《こわ》れた パソコン は、 新《あたら》しい の を 買《か》う しか ない ね。", "With the computer broken, I'll just have to buy a new one."]
    ],
    quiz: [
      ["行《い》く + ざる を 得《え》ない becomes:", ["行《い》きざる を 得《え》ない", "行《い》かざる を 得《え》ない", "行《い》けざる を 得《え》ない"], 1, "ざる follows the ない-form stem: 行《い》かない → 行《い》かざる."],
      ["Which is the everyday spoken way to say \"We'll just have to go home\" to a friend?", ["帰《かえ》らざる を 得《え》ない ね。", "帰《かえ》らない しか ない ね。", "帰《かえ》る しか ない ね。"], 2, "〜しか ない after the dictionary form is the everyday way; 〜ざる を 得《え》ない is formal, and しか ない does not follow the ない-form."],
      ["痛《いた》み が 強《つよ》くて、 予定《よてい》 より 早《はや》く 帰《かえ》らざる を 得《え》なかった means:", ["The pain was bad, so I had no choice but to go home earlier than planned.", "Despite the pain, I did not go home early.", "I went home early because I wanted to."], 0, "〜ざる を 得《え》なかった: circumstances forced the action against one's wish."],
      ["A patient explains that his boss is counting on him, so he really can't skip the meeting (a matter of duty). Which fits?", ["会議《かいぎ》 に 出《で》る わけ が ありません。", "会議《かいぎ》 に 出《で》ない わけ に は いきません。", "会議《かいぎ》 に 出《で》ない ほか ありません。"], 1, "Pressure from duty or other people is 〜ない わけ に は いかない; 〜わけ が ない means \"no way\", and 出《で》ない ほか ありません would mean he has no choice but to stay away."],
      ["Fill the blank: 雨《あめ》 で 試合《しあい》 が できない ので、 来週《らいしゅう》 に 延《の》ばす より ＿ ない。", ["ほか", "ほど", "まで"], 0, "The pattern is 〜より ほか ない, \"no other way than\"."],
      ["Which line reads like a chart note?", ["仕事《しごと》 を 休《やす》む しか なかった ん です。", "休《やす》まない わけ に は いかなかった よ。", "休職《きゅうしょく》 せざる を 得《え》なかった との こと。"], 2, "A chart note uses the written 〜ざる を 得《え》ない with との こと; the other two are spoken."]
    ]
  },
  'n2-te-wa-irarenai': {
    mistakes: [
      ["心配《しんぱい》 で、 母《はは》 に 電話《でんわ》 して は いられません でした。", "心配《しんぱい》 で、 母《はは》 に 電話《でんわ》 しないで は いられません でした。", "\"Can't keep from doing\" is 〜ないで は いられない; 〜て は いられない means \"can't keep doing\"."],
      ["痛《いた》い ない こと は ありません が、 我慢《がまん》 できます。", "痛《いた》くない こと は ありません が、 我慢《がまん》 できます。", "An い-adjective takes its く ない form before こと は ない."],
      ["いつまでも 家《いえ》 で 休《やす》む は いられません。", "いつまでも 家《いえ》 で 休《やす》んで は いられません。", "The pattern needs the て-form: 休《やす》んで は いられない."]
    ],
    more: [
      ["ご家族《かぞく》 と して は、 黙《だま》って 見《み》て は いられなかった の です ね。", "As a family, you couldn't just stand by and watch."],
      ["食《た》べられない こと は ない ん です が、 量《りょう》 が 前《まえ》 の 半分《はんぶん》 くらい に なりました。", "It's not that I can't eat, but I eat only about half of what I used to."],
      ["本人《ほんにん》 は 「副作用《ふくさよう》 が 少《すく》ない なら、 試《ため》して みない もの でも ない」 と 話《はな》した。", "The patient said that if the side effects are few, trying it is \"not out of the question\". (chart note)"],
      ["雨《あめ》 が 止《や》む の を 待《ま》って は いられない。 傘《かさ》 を 買《か》って 行《い》こう。", "We can't just wait for the rain to stop. Let's buy an umbrella and go."],
      ["その 映画《えいが》、 見《み》たくない こと は ない けど、 今週《こんしゅう》 は 忙《いそが》しい ん だ。", "It's not that I don't want to see that film, but I'm busy this week."],
      ["あの 店《みせ》 の ケーキ を 見《み》る と、 買《か》わないで は いられない。", "Whenever I see the cakes at that shop, I can't help buying one."]
    ],
    quiz: [
      ["泳《およ》げない こと は ない です が、 久《ひさ》しぶり です means:", ["I can't swim at all.", "There's no need to swim.", "It's not that I can't swim, but it's been a while."], 2, "〜ない こと は ない is a hedged \"yes\": I can, with some doubt."],
      ["Fill the blank: 締《し》め切《き》り が 明日《あした》 なので、 遊《あそ》んで は ＿。", ["いられない", "かねない", "すぎない"], 0, "〜て は いられない: \"can't afford to keep doing\"; かねない and すぎない do not follow て は."],
      ["彼《かれ》 の 話《はなし》 を 聞《き》いて、 泣《な》かないで は いられなかった means:", ["I couldn't keep crying.", "I couldn't help crying.", "I didn't need to cry."], 1, "〜ないで は いられない means \"can't keep from doing\"."],
      ["A mother says she can't just wait and do nothing while her son is unwell. Which fits?", ["何《なに》 も しないで 待《ま》たないで は いられません。", "何《なに》 も しないで 待《ま》つ こと は ありません。", "何《なに》 も しないで 待《ま》って は いられません。"], 2, "\"Can't just keep doing\" is 〜て は いられない; the others mean \"can't help waiting\" and \"no need to wait\"."],
      ["A chart note says 本人《ほんにん》 は 退院後《たいいんご》 の 通院《つういん》 を 考《かんが》えない もの でも ない と 述《の》べた. What did the patient say?", ["That outpatient visits after discharge are not out of the question.", "That they refuse all outpatient visits.", "That they will certainly come to every visit."], 0, "〜ない もの でも ない is a reluctant \"it's not out of the question\"."],
      ["You ask 食欲《しょくよく》 は あります か. Which answer is a hedged \"yes\"?", ["食《た》べる こと は ありません。", "食《た》べられない こと は ない です。", "食《た》べて は いられません。"], 1, "〜ない こと は ない is a hedged yes; こと は ない alone means \"no need\", and 〜て は いられない means \"can't keep doing\"."]
    ]
  },
  'n2-kagiri-da': {
    mistakes: [
      ["ずっと 会《あ》いたかった こと か。", "どんなに 会《あ》いたかった こと か。", "The exclamation 〜こと か needs a question word such as どんなに."],
      ["最後《さいご》 まで ご一緒《いっしょ》 できず、 残念《ざんねん》 限《かぎ》り です。", "最後《さいご》 まで ご一緒《いっしょ》 できず、 残念《ざんねん》 な 限《かぎ》り です。", "A な-adjective needs な before 限《かぎ》り."],
      ["鈴木《すずき》さん は 心細《こころぼそ》い 限《かぎ》り です。", "鈴木《すずき》さん は 心細《こころぼそ》い よう です。", "〜限《かぎ》り だ states the speaker's own feeling; for someone else's, use よう だ or 〜がって いる."]
    ],
    more: [
      ["長《なが》い 間《あいだ》 一人《ひとり》 で 頑張《がんば》って こられて、 どれほど つらかった こと か と 思《おも》います。", "You've kept going on your own for so long. I can imagine how hard it must have been."],
      ["ご家族《かぞく》 の お話《はなし》 に は、 胸《むね》 に 迫《せま》る もの が ありました。", "There was something deeply moving in what the family told us."],
      ["今日《きょう》 で この 病棟《びょうとう》 を 離《はな》れる の は、 寂《さび》しい 限《かぎ》り です。", "I am truly sad to be leaving this ward today. (farewell speech)"],
      ["合格《ごうかく》 の 知《し》らせ を 聞《き》いた とき、 どんなに ほっと した こと か。", "You can't imagine how relieved I was when I heard I had passed."],
      ["この 時期《じき》 の 満員電車《まんいんでんしゃ》 は、 暑《あつ》い と いったら ない。", "Packed trains at this time of year are unbearably hot."],
      ["この 絵《え》 に は、 見《み》る 人《ひと》 を 引《ひ》きつける もの が ある。", "There is something about this painting that draws people in."]
    ],
    quiz: [
      ["Fill the blank: 皆様《みなさま》 の 前《まえ》 で お話《はなし》 できて、 光栄《こうえい》 ＿ 限《かぎ》り です。", ["な", "の", "だ"], 0, "A な-adjective takes な before 限《かぎ》り."],
      ["あの とき の 悔《くや》しさ と いったら なかった means:", ["I wasn't frustrated at all then.", "I can't say whether I was frustrated then.", "I can't tell you how frustrated I was then."], 2, "〜と いったら ない means \"beyond words\", not \"not at all\"."],
      ["In a formal farewell speech, which fits?", ["寂《さび》しい と いったら ありゃしない。", "皆様《みなさま》 と お別《わか》れ する の は、 寂《さび》しい 限《かぎ》り です。", "とても 寂《さび》しい こと か。"], 1, "〜限《かぎ》り です suits formal speech; 〜と いったら ありゃしない is rough and casual, and こと か needs a question word."],
      ["A doctor wants to acknowledge a carer's hardship calmly. Which is natural?", ["毎日《まいにち》 の 付《つ》き添《そ》い に は、 大変《たいへん》 な もの が あります ね。", "毎日《まいにち》 の 付《つ》き添《そ》い は、 大変《たいへん》 な 限《かぎ》り です ね。", "毎日《まいにち》 の 付《つ》き添《そ》い は、 大変《たいへん》 と いったら ありゃしない。"], 0, "〜もの が ある acknowledges someone else's difficulty calmly; 〜限《かぎ》り だ is only for your own feeling, and ありゃしない is rough."],
      ["彼女《かのじょ》 の 努力《どりょく》 に は、 頭《あたま》 が 下《さ》がる もの が ある means:", ["Her effort is not worth much respect.", "She bowed her head while she worked.", "There is something about her effort that commands real respect."], 2, "〜もの が ある points to a feeling the situation produces; 頭《あたま》 が 下《さ》がる means \"to feel deep respect\"."],
      ["Which is a correct exclamation?", ["何度《なんど》 電話《でんわ》 した 限《かぎ》り だ。", "何度《なんど》 電話《でんわ》 した こと か。", "何度《なんど》 電話《でんわ》 した と いったら ない。"], 1, "Question word + plain form + こと か exclaims how much; 限《かぎ》り だ and と いったら ない do not follow a verb like this."]
    ]
  }
});
