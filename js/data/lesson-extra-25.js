/* Lesson extras part 25 (1.0.0): common mistakes, more examples and a "More practice" quiz for existing N1 lessons
   (n1-n-ga-tame, n1-ikan, n1-wo-mono-tomo-sezu, n1-ni-kakotsukete, n1-wo-hete, n1-to-mo-naru-to).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n1-n-ga-tame': {
    mistakes: [
      ["手《て》 が 震《ふる》えて、 字《じ》 を 書《か》こう に も 書《か》かない ん です。", "手《て》 が 震《ふる》えて、 字《じ》 を 書《か》こう に も 書《か》けない ん です。", "After 〜(よ)う に も the second verb must be a negative of ability (書《か》けない), not a plain negative."],
      ["子《こ》ども を 育《そだ》てる ん が ため に、 母《はは》 は 昼《ひる》 も 夜《よる》 も 働《はたら》いた。", "子《こ》ども を 育《そだ》てん が ため に、 母《はは》 は 昼《ひる》 も 夜《よる》 も 働《はたら》いた。", "The ん of 〜ん が ため goes on the ない-stem (育《そだ》てない → 育《そだ》てん), not on the dictionary form."],
      ["検査《けんさ》 を 受《う》けん が ため に、 朝《あさ》ご飯《はん》 は 食《た》べず に 来《き》て ください。", "検査《けんさ》 を 受《う》ける ため に、 朝《あさ》ご飯《はん》 は 食《た》べず に 来《き》て ください。", "〜ん が ため is a written purpose that cannot end in a request; say 〜ため に."]
    ],
    more: [
      ["かつて の 精神《せいしん》 医療《いりょう》 は、 社会《しゃかい》 の 秩序《ちつじょ》 を 保《たも》たん が ため に、 患者《かんじゃ》 の 自由《じゆう》 を 過度《かど》 に 制限《せいげん》 して きた 面《めん》 が ある。", "Psychiatry in the past did, in part, restrict patients' freedom excessively, all for the sake of keeping order in society. (history of psychiatry; say 〜ため に)"],
      ["人前《ひとまえ》 に 出《で》よう に も、 足《あし》 が すくんで 出《で》られない ん です。", "I try to go out in front of people, but my legs freeze and I can't. (patient)"],
      ["家《いえ》 の こと が 気《き》 に なって、 休《やす》もう に も 休《やす》めない ん です。", "I keep worrying about things at home, so I can't rest even when I try. (patient)"],
      ["列車《れっしゃ》 が まさに 動《うご》き出《だ》さん と する その 時《とき》、 一人《ひとり》 の 少年《しょうねん》 が 飛《と》び乗《の》って きた。", "Just as the train was about to move off, a boy leapt aboard. (novel)"],
      ["その 画家《がか》 は 理想《りそう》 の 色《いろ》 を 出《だ》さん が ため に、 何度《なんど》 も 絵《え》の具《ぐ》 を 混《ま》ぜ直《なお》した。", "Purely to get the colour he had in mind, the painter mixed his paints again and again. (biography)"],
      ["雨《あめ》 が 強《つよ》くて、 出《で》かけよう に も 出《で》かけられない。", "The rain is so heavy that I can't go out even though I want to."]
    ],
    quiz: [
      ["扉《とびら》 を 開《あ》けん と した その 時《とき》、 中《なか》 から 声《こえ》 が した。 means:", ["Just as I was about to open the door, a voice came from inside.", "Because I did not open the door, a voice came from inside.", "Even after I opened the door, there was no voice inside."], 0, "The ん of 〜ん と する is not a negative: 開《あ》けん と した is \"was about to open\"."],
      ["熱《ねつ》 が 高《たか》くて、 起《お》き上《あ》がろう に も ＿。", ["起《お》き上《あ》がらない", "起《お》き上《あ》がれない", "起《お》き上《あ》がった"], 1, "〜(よ)う に も needs the negative potential of the same verb after it."],
      ["Which is the 〜ん が ため form of 生《い》き延《の》びる?", ["生《い》き延《の》ばん", "生《い》き延《の》びらん", "生《い》き延《の》びん"], 2, "For an ichidan verb drop る (the ない-stem) and add ん: 生《い》き延《の》びない → 生《い》き延《の》びん."],
      ["Telling a patient why their appointment time was moved, which do you say?", ["待《ま》ち時間《じかん》 を 短《みじか》く せん が ため に、 予約《よやく》 の 時間《じかん》 を 変更《へんこう》 しました。", "待《ま》ち時間《じかん》 を 短《みじか》く する ため に、 予約《よやく》 の 時間《じかん》 を 変更《へんこう》 しました。", "待《ま》ち時間《じかん》 を 短《みじか》く しよう に も、 予約《よやく》 の 時間《じかん》 を 変更《へんこう》 しました。"], 1, "In speech the purpose is 〜ため に; 〜ん が ため is written, and 〜よう に も needs a \"could not\" after it."],
      ["Which sentence uses 〜(よ)う に も correctly?", ["お腹《なか》 が すいた ので、 食《た》べよう に も たくさん 食《た》べた。", "食《た》べよう に も、 ケーキ を 注文《ちゅうもん》 して ください。", "外《そと》 が うるさくて、 集中《しゅうちゅう》 しよう に も 集中《しゅうちゅう》 できない。"], 2, "〜(よ)う に も describes a wish blocked by something, so it ends in \"cannot\"."],
      ["A memoir says \"I wanted to phone him, but there was no telephone.\" Which fits?", ["電話《でんわ》 しよう に も、 電話《でんわ》 が なかった。", "電話《でんわ》 せん が ため に、 電話《でんわ》 が なかった。", "電話《でんわ》 せん と して、 電話《でんわ》 が なかった。"], 0, "A blocked wish with the obstacle in the second half is 〜(よ)う に も; the other two state a purpose or an attempt."]
    ]
  },
  'n1-ikan': {
    mistakes: [
      ["回答《かいとう》 する いかん に よって は、 再検査《さいけんさ》 を お願《ねが》い する 場合《ばあい》 が あります。", "回答《かいとう》 いかん に よって は、 再検査《さいけんさ》 を お願《ねが》い する 場合《ばあい》 が あります。", "いかん follows a noun (回答《かいとう》), never a verb directly."],
      ["体調《たいちょう》 の いかん を 問《と》わず、 外出《がいしゅつ》 できる か どう か を 決《き》めます。", "体調《たいちょう》 の いかん で、 外出《がいしゅつ》 できる か どう か を 決《き》めます。", "を 問《と》わず means \"regardless of\"; to say the decision depends on something use いかん で."],
      ["退院《たいいん》 の 日《ひ》 は、 来週《らいしゅう》 の 検査《けんさ》 結果《けっか》 いかん です ね。", "退院《たいいん》 の 日《ひ》 は、 来週《らいしゅう》 の 検査《けんさ》 結果《けっか》 次第《しだい》 です ね。", "Grammatical but stiff and official in conversation with a patient; say 次第《しだい》 です."]
    ],
    more: [
      ["面会《めんかい》 は、 患者《かんじゃ》さん の 病状《びょうじょう》 いかん に よって は お断《ことわ》り する こと が ございます。", "Depending on the patient's condition, visits may in some cases be declined. (ward notice)"],
      ["診断書《しんだんしょ》 の 発行《はっこう》 に は、 書類《しょるい》 の 種類《しゅるい》 の いかん に かかわらず、 お時間《じかん》 を いただいて おります。", "Medical certificates take some time to issue, whatever kind of document it is. (hospital notice)"],
      ["面会《めんかい》 の 再開《さいかい》 時期《じき》 は、 感染症《かんせんしょう》 の 流行《りゅうこう》 状況《じょうきょう》 いかん で 判断《はんだん》 いたします。", "When visiting resumes will be decided according to how the infection is spreading. (written notice for families)"],
      ["新製品《しんせいひん》 の 売《う》れ行《ゆ》き は、 宣伝《せんでん》 の 仕方《しかた》 いかん だ。", "How well the new product sells depends on how it is advertised."],
      ["大会《たいかい》 の 結果《けっか》 の いかん に よらず、 選手《せんしゅ》 たち の 努力《どりょく》 は 称《たた》えられる べき だ。", "Whatever the result of the tournament, the players' efforts deserve praise. (editorial)"],
      ["交通《こうつう》 事情《じじょう》 いかん で は、 到着《とうちゃく》 が 遅《おく》れる 場合《ばあい》 も ございます。", "Depending on traffic conditions, arrival may be delayed. (tour notice)"]
    ],
    quiz: [
      ["申込者《もうしこみしゃ》 数《すう》 いかん で は、 講座《こうざ》 を 中止《ちゅうし》 する 場合《ばあい》 が あります means:", ["Depending on the number of applicants, the course may be cancelled.", "The course will go ahead whatever the number of applicants.", "The course is limited to a fixed number of applicants."], 0, "Noun + いかん で は: depending on N, with a possible unwelcome outcome."],
      ["金額《きんがく》 の いかん ＿、 ご寄付《きふ》 は ありがたく お受《う》け いたします。", ["で は", "に よって は", "を 問《と》わず"], 2, "Any amount is gratefully accepted, so the meaning is \"whatever the amount\": の いかん を 問《と》わず."],
      ["Which is the spoken way to say 結果《けっか》 の いかん に かかわらず ご連絡《れんらく》 いたします?", ["結果《けっか》 次第《しだい》 で ご連絡《れんらく》 します", "結果《けっか》 に 関係《かんけい》 なく ご連絡《れんらく》 します", "結果《けっか》 が 出《で》る まで ご連絡《れんらく》 しません"], 1, "いかん に かかわらず is \"regardless of\", which is 〜に 関係《かんけい》 なく in speech; 次第《しだい》 で means \"depending on\"."],
      ["In which sentence is いかん the written \"depending on\"?", ["そんな 言《い》い方《かた》 を しちゃ いかん よ。", "対応《たいおう》 いかん で は、 信頼《しんらい》 を 失《うしな》う こと も ある。", "これ 以上《いじょう》 待《ま》つ わけ に は いかん。"], 1, "Only after a noun (対応《たいおう》) is いかん \"depending on\"; after しちゃ and in わけ に は いかん it is the spoken いかん from 行《い》かない."],
      ["A patient asks what 病状《びょうじょう》 の いかん に よって は on a form means. Which explanation is right?", ["「病気《びょうき》 が どう で あって も」 と いう 意味《いみ》 です。", "「病気《びょうき》 が 治《なお》ったら」 と いう 意味《いみ》 です。", "「病気《びょうき》 の 具合《ぐあい》 に よって は」 と いう 意味《いみ》 です。"], 2, "いかん に よって は is \"depending on\", so the plain wording is 〜に よって は; どう で あって も would be \"regardless\"."],
      ["A museum notice must say \"Entry is free, whatever your age.\" Which fits before 入場《にゅうじょう》 は 無料《むりょう》 です?", ["年齢《ねんれい》 の いかん を 問《と》わず", "年齢《ねんれい》 の いかん を よそ に", "年齢《ねんれい》 いかん だ が"], 0, "\"Whatever your age\" is の いかん を 問《と》わず; いかん does not combine with よそ に, and いかん だ が (\"it depends on age, but\") does not lead into \"entry is free\"."]
    ]
  },
  'n1-wo-mono-tomo-sezu': {
    mistakes: [
      ["厳《きび》しい 寒《さむ》さ に ものともせず、 子《こ》ども たち は 外《そと》 で 遊《あそ》んで いた。", "厳《きび》しい 寒《さむ》さ を ものともせず、 子《こ》ども たち は 外《そと》 で 遊《あそ》んで いた。", "ものともせず takes its noun with を, not に."],
      ["私《わたし》 は 寒《さむ》さ を ものともせず、 毎朝《まいあさ》 走《はし》って います。", "私《わたし》 は 寒《さむ》さ に 負《ま》けず に、 毎朝《まいあさ》 走《はし》って います。", "Grammatical but ものともせず admires, so about yourself it sounds like boasting; say 〜に 負《ま》けず に."],
      ["雨《あめ》 を 押《お》して、 ぜひ ご参加《さんか》 ください。", "雨《あめ》 でも、 ぜひ ご参加《さんか》 ください。", "〜を 押《お》して reports what someone did in spite of conditions, so it cannot end in a request; say 〜でも."]
    ],
    more: [
      ["家族《かぞく》 の 反対《はんたい》 を 押《お》し切《き》って 転職《てんしょく》 した 後《あと》、 次第《しだい》 に 不眠《ふみん》 が 出現《しゅつげん》 した。", "After changing jobs against the family's opposition, the patient gradually developed insomnia. (case summary)"],
      ["看護師長《かんごしちょう》 は 腰痛《ようつう》 を 押《お》して、 夜勤《やきん》 の 応援《おうえん》 に 駆《か》けつけて くれた。", "In spite of her back pain, the head nurse rushed in to help on the night shift. (staff newsletter)"],
      ["その 患者《かんじゃ》さん は 術後《じゅつご》 の 痛《いた》み を ものともせず 毎日《まいにち》 リハビリ に 励《はげ》まれ、 ご自分《じぶん》 の 足《あし》 で 退院《たいいん》 されました。", "Undaunted by the pain after the operation, the patient worked at rehabilitation every day and left hospital on their own feet. (hospital newsletter, with consent)"],
      ["世間《せけん》 の 不景気《ふけいき》 を よそ に、 その 店《みせ》 に は 毎日《まいにち》 行列《ぎょうれつ》 が できて いる。", "Untouched by the slump everywhere else, that shop has a queue every day."],
      ["悪天候《あくてんこう》 を 押《お》して、 祭《まつ》り は 予定《よてい》どおり 行《おこな》われた。", "In spite of the bad weather, the festival went ahead as planned. (news)"],
      ["彼《かれ》 は 自分《じぶん》 の 健康《けんこう》 も 顧《かえり》みず、 何日《なんにち》 も 徹夜《てつや》 で 作業《さぎょう》 を 続《つづ》けた。", "With no thought even for his own health, he worked through the night for days on end."]
    ],
    quiz: [
      ["強風《きょうふう》 を ものともせず、 漁師《りょうし》 たち は 船《ふね》 を 出《だ》した means:", ["Undaunted by the strong wind, the fishermen put out to sea.", "Because of the strong wind, the fishermen stayed in port.", "The fishermen waited for the strong wind to drop before setting out."], 0, "〜を ものともせず: treating a difficulty as nothing and carrying on."],
      ["Which sentence praises the person?", ["彼《かれ》 は 家庭《かてい》 を 顧《かえり》みず、 遊《あそ》び歩《ある》いて いた。", "彼女《かのじょ》 は 逆境《ぎゃっきょう》 を ものともせず、 店《みせ》 を 立《た》て直《なお》した。", "彼《かれ》 は 皆《みな》 の 心配《しんぱい》 を よそ に、 夜遊《よあそ》び を 続《つづ》けた。"], 1, "ものともせず admires; neglecting one's family and ignoring everyone's worry are blamed."],
      ["祖父《そふ》 は 足《あし》 の 痛《いた》み ＿、 孫《まご》 の 結婚式《けっこんしき》 に 出席《しゅっせき》 した。", ["を 顧《かえり》みて", "に 押《お》されて", "を 押《お》して"], 2, "Doing something in spite of one's own pain is 〜を 押《お》して; 顧《かえり》みて (paying heed to) and the passive 押《お》されて do not fit."],
      ["Which line suits a neutral case summary?", ["主治医《しゅじい》 の 心配《しんぱい》 を よそ に、 勝手《かって》 に 退院《たいいん》 した。", "主治医《しゅじい》 の 反対《はんたい》 を 押《お》し切《き》り、 自主《じしゅ》 退院《たいいん》 と なった。", "主治医《しゅじい》 の 反対《はんたい》 を ものともせず、 見事《みごと》 に 退院《たいいん》 した。"], 1, "押《お》し切《き》り reports the fact; よそ に and 勝手《かって》 blame, and ものともせず and 見事《みごと》 praise."],
      ["彼《かれ》 は 近所《きんじょ》 の 迷惑《めいわく》 も 顧《かえり》みず、 夜中《よなか》 に 大声《おおごえ》 で 歌《うた》い続《つづ》けた means:", ["With no thought for the trouble he caused the neighbours, he kept singing loudly in the night.", "Worried about disturbing the neighbours, he sang quietly at night.", "Because the neighbours complained, he stopped singing at night."], 0, "〜も 顧《かえり》みず: without even a thought for N, here blame."],
      ["Which sentence uses ものともせず correctly?", ["批判《ひはん》 を ものとも して、 計画《けいかく》 を 進《すす》めた。", "批判《ひはん》 に ものともせず、 計画《けいかく》 を 進《すす》めた。", "批判《ひはん》 を ものともせず、 計画《けいかく》 を 進《すす》めた。"], 2, "The fixed form is noun + を ものともせず; there is no positive ものとも して."]
    ]
  },
  'n1-ni-kakotsukete': {
    mistakes: [
      ["騒《さわ》ぎ を 乗《じょう》じて、 男《おとこ》 は 店《みせ》 から 逃《に》げ出《だ》した。", "騒《さわ》ぎ に 乗《じょう》じて、 男《おとこ》 は 店《みせ》 から 逃《に》げ出《だ》した。", "乗《じょう》じる takes the opening with に, like 乗《の》る."],
      ["先生《せんせい》 が いない を いい こと に、 生徒《せいと》 たち は 教室《きょうしつ》 で 騒《さわ》いだ。", "先生《せんせい》 が いない の を いい こと に、 生徒《せいと》 たち は 教室《きょうしつ》 で 騒《さわ》いだ。", "A clause before を いい こと に needs の to turn it into a noun."],
      ["仕事《しごと》 に かまけて、 毎日《まいにち》 充実《じゅうじつ》 して います。", "仕事《しごと》 が 忙《いそが》しくて、 毎日《まいにち》 充実《じゅうじつ》 して います。", "〜に かまけて must be followed by something neglected; for a good result just give the reason."]
    ],
    more: [
      ["長男《ちょうなん》 は 受験《じゅけん》 に かこつけて 家族《かぞく》 の 話《はな》し合《あ》い に 一度《いちど》 も 出《で》なかった、 と 母親《ははおや》 は 語《かた》った。", "The mother said that the eldest son had not come to a single family discussion, using his exams as an excuse. (case record, reported speech)"],
      ["子育《こそだ》て に かまけて、 自分《じぶん》 の 健診《けんしん》 は 何年《なんねん》 も 受《う》けて いません でした。", "I was so taken up with raising the children that I hadn't had my own check-up for years. (patient)"],
      ["面会《めんかい》 時間《じかん》 の 混雑《こんざつ》 に 乗《じょう》じた 置《お》き引《び》き が 発生《はっせい》 して います。 貴重品《きちょうひん》 は 身《み》 から 離《はな》さない よう ご注意《ちゅうい》 ください。", "There have been thefts of bags taking advantage of the crowds at visiting time. Please keep your valuables with you. (hospital notice)"],
      ["友人《ゆうじん》 の 結婚式《けっこんしき》 に かこつけて、 久《ひさ》しぶり に 故郷《こきょう》 の 町《まち》 を 歩《ある》いて きた。", "Using a friend's wedding as my excuse, I went back and walked round my home town for the first time in ages."],
      ["休《やす》み な の を いい こと に、 昼過《ひるす》ぎ まで 寝《ね》て しまった。", "Taking advantage of my day off, I slept until past noon. (about oneself)"],
      ["兵《へい》 たち は 夜《よる》 の 闇《やみ》 に 乗《じょう》じて、 川《かわ》 を 渡《わた》った。", "The soldiers crossed the river under cover of darkness. (history book)"]
    ],
    quiz: [
      ["親戚《しんせき》 の 法事《ほうじ》 ＿、 面倒《めんどう》 な 飲《の》み会《かい》 を 断《ことわ》った。", ["に かまけて", "に かこつけて", "を 境《さかい》 に"], 1, "The memorial service is the excuse given, and avoiding the party the real aim: に かこつけて."],
      ["店員《てんいん》 が 新人《しんじん》 な の を いい こと に、 その 客《きゃく》 は 無理《むり》 な 要求《ようきゅう》 を 繰《く》り返《かえ》した means:", ["Taking advantage of the clerk being new, the customer kept making unreasonable demands.", "Because the clerk was new, the customer kindly lowered his demands.", "The customer was pleased the clerk was new and thanked her."], 0, "〜を いい こと に: a circumstance removes a check and someone exploits it."],
      ["A wife says her husband is so wrapped up in fishing that he does nothing at home. Which reply is neutral?", ["ご主人《しゅじん》 は 釣《つ》り に かまけて いる ん です ね。", "ご主人《しゅじん》 は 釣《つ》り を いい こと に して いる ん です ね。", "ご主人《しゅじん》 は 釣《つ》り に 出《で》かける こと が 多《おお》くて、 家《いえ》 の こと まで は 手《て》 が 回《まわ》って いない ん です ね。"], 2, "Only the last restates the facts without judging; かまけて blames, and を いい こと に does not fit here."],
      ["Which sentence uses 〜に 乗《じょう》じて correctly?", ["混乱《こんらん》 に 乗《じょう》じて、 皆《みな》 で 落《お》ち着《つ》いて 避難《ひなん》 した。", "勝利《しょうり》 の 勢《いきお》い に 乗《じょう》じて、 チーム は 連勝《れんしょう》 を 続《つづ》けた。", "お礼《れい》 に 乗《じょう》じて、 手紙《てがみ》 を 書《か》いた。"], 1, "〜に 乗《じょう》じて needs an opening that is seized, or 勢《いきお》い (momentum); it is not for calm or grateful acts."],
      ["趣味《しゅみ》 ＿、 宿題《しゅくだい》 を すっかり 忘《わす》れて いた。", ["に かまけて", "を かまけて", "で かまけて"], 0, "かまける takes its noun with に: 〜に かまけて."],
      ["停電《ていでん》 の 混乱《こんらん》 ＿、 何者《なにもの》 か が レジ の 現金《げんきん》 を 持《も》ち去《さ》った。", ["に かまけて", "に 先駆《さきが》けて", "に 乗《じょう》じて"], 2, "Someone seized the confusion as an opening: に 乗《じょう》じて."]
    ]
  },
  'n1-wo-hete': {
    mistakes: [
      ["十年《じゅうねん》 の 歳月《さいげつ》 に 経《へ》て、 橋《はし》 は ようやく 完成《かんせい》 した。", "十年《じゅうねん》 の 歳月《さいげつ》 を 経《へ》て、 橋《はし》 は ようやく 完成《かんせい》 した。", "経《へ》る takes the stage or period it passes through with を: 〜を 経《へ》て."],
      ["手術《しゅじゅつ》 に 先駆《さきが》けて、 麻酔科《ますいか》 の 医師《いし》 から 説明《せつめい》 が あります。", "手術《しゅじゅつ》 に 先立《さきだ》って、 麻酔科《ますいか》 の 医師《いし》 から 説明《せつめい》 が あります。", "A step before an event is 〜に 先立《さきだ》って; 先駆《さきが》けて means \"ahead of the others, as the first\"."],
      ["退院《たいいん》 した を 境《さかい》 に、 生活《せいかつ》 の リズム が 乱《みだ》れた。", "退院《たいいん》 を 境《さかい》 に、 生活《せいかつ》 の リズム が 乱《みだ》れた。", "〜を 境《さかい》 に follows a noun of an event, not a bare verb."]
    ],
    more: [
      ["夫《おっと》 の 単身《たんしん》 赴任《ふにん》 を 境《さかい》 に 不眠《ふみん》 が 始《はじ》まり、 次第《しだい》 に 食欲《しょくよく》 も 低下《ていか》 した。", "Insomnia began from the time her husband went to work away from home alone, and gradually her appetite fell too. (case presentation)"],
      ["定年《ていねん》 を 半年後《はんとしご》 に 控《ひか》えた 頃《ころ》 から、 本人《ほんにん》 は 将来《しょうらい》 へ の 不安《ふあん》 を しばしば 口《くち》 に する よう に なった。", "From the time his retirement was six months away, the patient often spoke of worries about the future. (referral letter)"],
      ["急性期《きゅうせいき》 病棟《びょうとう》 で の 治療《ちりょう》 と 回復期《かいふくき》 病棟《びょうとう》 で の リハビリ を 経《へ》て、 自宅《じたく》 へ 退院《たいいん》 と なった。", "After treatment on the acute ward and rehabilitation on the recovery ward, the patient was discharged home. (discharge summary)"],
      ["新作《しんさく》 の ゲーム は、 海外《かいがい》 に 先駆《さきが》けて 日本《にほん》 で 発売《はつばい》 される。", "The new game will go on sale in Japan ahead of the rest of the world. (news)"],
      ["卒業《そつぎょう》 を 間近《まぢか》 に 控《ひか》えて、 教室《きょうしつ》 に は どこ か 寂《さび》しい 空気《くうき》 が 流《なが》れて いた。", "With graduation close at hand, there was a slightly sad feeling in the classroom."],
      ["引《ひ》っ越《こ》し を 境《さかい》 に、 朝型《あさがた》 の 生活《せいかつ》 に 変《か》わった。", "Since the move I have become a morning person."]
    ],
    quiz: [
      ["その 一言《ひとこと》 ＿、 二人《ふたり》 は 口《くち》 を きかなく なった。", ["を 控《ひか》えて", "を 境《さかい》 に", "に 先駆《さきが》けて"], 1, "One remark divides before and after, and a change of state follows: を 境《さかい》 に."],
      ["他社《たしゃ》 に 先駆《さきが》けて、 新《あたら》しい サービス を 始《はじ》めた means:", ["It started the new service before any other company.", "It started the new service after the other companies had.", "It started the new service jointly with other companies."], 0, "〜に 先駆《さきが》けて: ahead of the others, as the first."],
      ["Referral letter: ＿ を 来月《らいげつ》 に 控《ひか》えて 不安《ふあん》 が 強《つよ》まり、 当科《とうか》 紹介《しょうかい》 と なった。 Which noun fits?", ["飲酒《いんしゅ》", "不眠《ふみん》", "復職《ふくしょく》"], 2, "A を B に 控《ひか》えて needs a coming event at a set time (going back to work); drinking or insomnia cannot be \"next month\" events."],
      ["総合《そうごう》 病院《びょういん》 の 内科《ないか》 ＿ 当科《とうか》 紹介《しょうかい》 と なった。", ["を 控《ひか》えて", "に 先駆《さきが》けて", "を 経《へ》て"], 2, "The internal medicine department was a stage passed through on the way: を 経《へ》て."],
      ["How would you put 手術《しゅじゅつ》 を 来週《らいしゅう》 に 控《ひか》えて in plain words to a patient?", ["来週《らいしゅう》 は 手術《しゅじゅつ》 を 控《ひか》えて ください", "来週《らいしゅう》 に 手術《しゅじゅつ》 が ある ので", "来週《らいしゅう》 の 手術《しゅじゅつ》 が 終《お》わった ので"], 1, "Here 控《ひか》えて means the operation is close ahead; the first option would mean \"please hold off on surgery\"."],
      ["Which sentence uses its pattern correctly?", ["あの 手紙《てがみ》 を 境《さかい》 に、 父《ちち》 と の 関係《かんけい》 が 変《か》わった。", "来年《らいねん》 を 境《さかい》 に、 一緒《いっしょ》 に 旅行《りょこう》 しましょう。", "入学式《にゅうがくしき》 に 先駆《さきが》けて、 席《せき》 に 着《つ》いた。"], 0, "〜を 境《さかい》 に reports a change after one point, not an invitation; 先駆《さきが》けて is about being first, not sitting down before a ceremony."]
    ]
  },
  'n1-to-mo-naru-to': {
    mistakes: [
      ["息子《むすこ》さん と きたら、 お薬《くすり》 を 全然《ぜんぜん》 飲《の》まない ん です ね。", "息子《むすこ》さん は、 お薬《くすり》 を 全然《ぜんぜん》 飲《の》まない ん です ね。", "〜と きたら is an exasperated complaint about someone close to the speaker; said about the family's son it is rude, so use は and neutral words."],
      ["医師《いし》 と あろう 者《もの》 が、 カルテ の 記載《きさい》 を 忘《わす》れる と は。", "医師《いし》 とも あろう 者《もの》 が、 カルテ の 記載《きさい》 を 忘《わす》れる と は。", "The fixed form is とも あろう 者《もの》 が; も cannot be dropped."],
      ["医師《いし》 とも あろう 者《もの》 が、 患者《かんじゃ》 の 秘密《ひみつ》 は 守《まも》る べき だ。", "医師《いし》 たる 者《もの》、 患者《かんじゃ》 の 秘密《ひみつ》 は 守《まも》る べき だ。", "とも あろう 者《もの》 が leads into a failure (a reproach); to state the duty itself use 〜たる 者《もの》."]
    ],
    more: [
      ["お母様《かあさま》 に した ところ で、 毎日《まいにち》 の 介護《かいご》 で 疲《つか》れて いらっしゃる と 思《おも》います。", "(To the patient's son) Your mother too must be worn out by the daily caring, I think."],
      ["指導医《しどうい》 とも あろう 者《もの》 が、 カンファレンス の 時間《じかん》 を 忘《わす》れる と は 情《なさ》けない。", "That I, a supervising doctor, should forget the time of the conference. How embarrassing. (about oneself)"],
      ["「うち の 母《はは》 と きたら、 同《おな》じ 話《はなし》 を 何度《なんど》 も する ん です。」", "(Daughter) \"My mother, honestly: she tells the same story over and over.\""],
      ["年末《ねんまつ》 ともなると、 駅《えき》 は どこ も 人《ひと》 で いっぱい だ。", "Once the end of the year comes round, every station is packed with people."],
      ["仮《かり》 に 宝《たから》くじ が 当《あ》たった と した ところ で、 今《いま》 の 仕事《しごと》 は 辞《や》めない と 思《おも》う。", "Even supposing I won the lottery, I don't think I would quit my job."],
      ["この 辺《あた》り の 夏《なつ》 の 暑《あつ》さ と きたら、 夜《よる》 に なって も 少《すこ》し も 下《さ》がらない。", "The summer heat round here, honestly: it doesn't drop at all even at night."]
    ],
    quiz: [
      ["プロ の 料理人《りょうりにん》 とも あろう 人《ひと》 が、 塩《しお》 と 砂糖《さとう》 を 間違《まちが》える なんて means:", ["That a professional cook, of all people, should mix up salt and sugar!", "Even a professional cook mixes up salt and sugar sometimes, so it doesn't matter.", "If a professional cook comes, he will tell the salt from the sugar."], 0, "〜とも あろう 人《ひと》 が: someone of that standing failed, a reproach."],
      ["仮《かり》 に 給料《きゅうりょう》 が 上《あ》がった ＿、 この 生活《せいかつ》 は 楽《らく》 に ならない。", ["と きたら", "ともなると", "と した ところ で"], 2, "After a clause (上《あ》がった), \"even supposing\" is と した ところ で; と きたら and ともなると follow a noun."],
      ["うち の 車《くるま》 と きたら、 寒《さむ》い 朝《あさ》 に は なかなか エンジン が かからない means:", ["Our car, honestly: on cold mornings it just won't start.", "When our car comes on cold mornings, the engine won't start.", "As for cars in general, ours starts easily even on cold mornings."], 0, "〜と きたら introduces something close to the speaker and a complaint; it is not 来《き》たら."],
      ["A son says his father keeps asking the same questions all day. Which reply is kind and neutral?", ["お父様《とうさま》 と きたら、 困《こま》った もの です ね。", "同《おな》じ こと を 何度《なんど》 も 聞《き》かれる ん です ね。 毎日《まいにち》 だ と 大変《たいへん》 です ね。", "お父様《とうさま》 とも あろう 方《かた》 が、 情《なさ》けない です ね。"], 1, "Only the middle one restates the facts and the son's strain; と きたら and とも あろう 方《かた》 が complain about or reproach his father."],
      ["十二月《じゅうにがつ》 ＿、 さすが に 朝晩《あさばん》 は 冷《ひ》え込《こ》む。", ["に した ところ で", "と きたら", "ともなると"], 2, "Once a point on a scale is reached, a natural result follows: ともなると."],
      ["私《わたし》 に したって、 毎朝《まいあさ》 早起《はやお》き する の は つらい よ means:", ["For my sake, please get up early every morning.", "It's hard for me too to get up early every morning.", "Unlike me, you find getting up early easy."], 1, "に したって is the casual に した ところ で: \"even for me, me too\"."]
    ]
  }
});
