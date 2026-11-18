/* Lesson extras part 26 (1.0.0): common mistakes, more examples and a "More practice" quiz for existing N1 lessons
   (n1-to-ittara-nai, n1-tada-nomi, n1-ba-sore-made, n1-ta-tokoro-de, n1-nai-mono-demo-nai, n1-to-omoikiya).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n1-to-ittara-nai': {
    mistakes: [
      ["温《あたた》かい お祝《いわ》い の お言葉《ことば》 を いただき、 嬉《うれ》しい この 上《うえ》 ありません。", "温《あたた》かい お祝《いわ》い の お言葉《ことば》 を いただき、 嬉《うれ》しい こと この 上《うえ》 ありません。", "An い-adjective needs こと before この 上《うえ》 ない; only a な-adjective or a kango noun can join it directly."],
      ["皆様《みなさま》 に 支《ささ》えて いただき、 この 上《うえ》 ない の 幸《しあわ》せ です。", "皆様《みなさま》 に 支《ささ》えて いただき、 この 上《うえ》 ない 幸《しあわ》せ です。", "この 上《うえ》 ない works like an adjective and joins the noun directly, without の."],
      ["そんな に 長《なが》い 間《あいだ》、 お一人《ひとり》 で 我慢《がまん》 して いらした とは。", "そんな に 長《なが》い 間《あいだ》、 お一人《ひとり》 で 我慢《がまん》 して いらした とは 思《おも》いません でした。", "Grammatical but a bare とは said to a patient sounds like dismay or reproach; finish the sentence with 思《おも》いません でした."]
    ],
    more: [
      ["母《はは》 が 夜中《よなか》 に 何度《なんど》 も 起《お》きて きて、 その 大変《たいへん》さ と いったら ありません。", "(Family) Mother gets up again and again in the night; I can't tell you how hard it is."],
      ["研修《けんしゅう》 の 間《あいだ》 に いただいた ご指導《しどう》 は、 私《わたし》 に とって この 上《うえ》 ない 財産《ざいさん》 です。", "The guidance I received during my training is the greatest treasure I have. (farewell speech on the ward)"],
      ["昨日《きのう》 の 夜勤《やきん》 は 忙《いそが》しいったら なかった よ。", "(Nurse to a colleague, casual) Last night's shift was unbelievably busy."],
      ["あんな に 小《ちい》さかった 甥《おい》 が、 もう 大学《だいがく》 を 卒業《そつぎょう》 する とは。", "To think that my nephew, who was so small, is already finishing university."],
      ["楽《たの》しみ に して いた 花火《はなび》 大会《たいかい》 が 雨《あめ》 で 中止《ちゅうし》 に なり、 残念《ざんねん》 な 限《かぎ》り です。", "The fireworks I had been looking forward to were cancelled because of rain, which is a great pity."],
      ["山《やま》 の 頂上《ちょうじょう》 から 初《はじ》めて 見《み》た 朝日《あさひ》 の 美《うつく》しさ と いったら なかった。", "The sunrise I first saw from the mountain top was more beautiful than words can say."]
    ],
    quiz: [
      ["この 町《まち》 は 夜《よる》 に なる と 店《みせ》 が すべて 閉《し》まり、 退屈《たいくつ》 な ＿。", ["この 上《うえ》 ない", "限《かぎ》り が ない", "こと この 上《うえ》 ない"], 2, "After な-adjective + な you need こと: 退屈《たいくつ》 な こと この 上《うえ》 ない. この 上《うえ》 ない cannot follow な, and 限《かぎ》り が ない is not this pattern."],
      ["長年《ながねん》 破《やぶ》られなかった 記録《きろく》 が、 新人《しんじん》 に あっさり 破《やぶ》られる とは。 The writer feels:", ["pleased because the newcomer was expected to win", "surprise and dismay that the record was broken so easily", "determined to break the record next time"], 1, "A sentence that stops at 〜とは leaves 驚《おどろ》いた or 思《おも》わなかった unsaid: surprise at a fact."],
      ["In a formal thank-you letter to the ward, which line fits?", ["皆様《みなさま》 の 温《あたた》かい お心遣《こころづか》い は、 家族《かぞく》 に とって この 上《うえ》 ない 支《ささ》え で ございました。", "皆様《みなさま》 の 温《あたた》かい お心遣《こころづか》い、 嬉《うれ》しいったら なかった です。", "皆様《みなさま》 の 温《あたた》かい お心遣《こころづか》い に 感謝《かんしゃ》 する とは。"], 0, "この 上《うえ》 ない + noun belongs in formal thanks; 〜ったら ない is casual, and a bare とは expresses surprise, not thanks."],
      ["Which is the correct casual form?", ["眠《ねむ》いと ったら ない", "眠《ねむ》いったら ない", "眠《ねむ》く ったら ない"], 1, "ったら joins the dictionary form of the い-adjective directly: 眠《ねむ》いったら ない."],
      ["In conversation you want to say plainly that you never thought it would snow in April. Which fits?", ["四月《しがつ》 に 雪《ゆき》 が 降《ふ》る こと この 上《うえ》 ない です。", "四月《しがつ》 に 雪《ゆき》 が 降《ふ》る 限《かぎ》り です。", "四月《しがつ》 に 雪《ゆき》 が 降《ふ》る とは 思《おも》いません でした。"], 2, "In talk, say 〜とは 思《おも》いません でした; こと この 上《うえ》 ない and 限《かぎ》り だ need an adjective, not a verb."],
      ["Where would you naturally meet 寂《さび》しいったら ない?", ["a friend chatting about the house after the children moved out", "a hospital's formal notice to visitors", "a case report in a patient's chart"], 0, "〜ったら ない is casual spoken Japanese; it does not appear in notices or case reports."]
    ]
  },
  'n1-tada-nomi': {
    mistakes: [
      ["失敗《しっぱい》 を 恐《おそ》れず、 あと は ただ 前《まえ》 に 進《すす》みます のみ です。", "失敗《しっぱい》 を 恐《おそ》れず、 あと は ただ 前《まえ》 に 進《すす》む のみ です。", "のみ follows the dictionary form of a verb, not the ます form."],
      ["練習《れんしゅう》 を 休《やす》めば、 体力《たいりょく》 は 落《お》ちる こそ すれ、 つく こと は ない。", "練習《れんしゅう》 を 休《やす》めば、 体力《たいりょく》 は 落《お》ち こそ すれ、 つく こと は ない。", "こそ すれ follows the ます-stem of a verb (落《お》ち), not the dictionary form."],
      ["検査《けんさ》 は 終《お》わりました ので、 あと は ただ 結果《けっか》 を 待《ま》つ のみ です。", "検査《けんさ》 は 終《お》わりました ので、 あと は 結果《けっか》 を 待《ま》つ だけ です。", "Grammatical but ただ 〜のみ sounds like a speech in a corridor chat with a family; in conversation say 〜だけ です."]
    ],
    more: [
      ["あと は ただ、 ここ で 学《まな》んだ こと を 日々《ひび》 の 診療《しんりょう》 に 生《い》かす のみ です。", "All that remains is to put what I learned here to use in my daily practice. (closing a speech)"],
      ["睡眠《すいみん》 の 悩《なや》み は、 ひとり 高齢者《こうれいしゃ》 のみ ならず、 若《わか》い 世代《せだい》 に も 広《ひろ》がって いる。", "Sleep problems are spreading not among older people alone but among the young as well. (health column)"],
      ["転院《てんいん》 に は 戸惑《とまど》い こそ あれ、 不満《ふまん》 は 何《なに》 も ございません。", "(Family, careful speech) The transfer has left us a little unsure, perhaps, but we have no complaints at all."],
      ["この 地域《ちいき》 の 家賃《やちん》 は 上《あ》がり こそ すれ、 下《さ》がる 気配《けはい》 は まったく ない。", "Rents in this area only go up, if anything; there is no sign at all of them coming down."],
      ["その 店《みせ》 は 料理《りょうり》 が 冷《さ》めて いた のみ か、 注文《ちゅうもん》 まで 間違《まちが》えて いた。", "Not only was the food at that restaurant cold, they even got the order wrong."],
      ["決勝《けっしょう》 まで 勝《か》ち残《のこ》った の は、 ただ 一人《ひとり》 のみ だった。", "Only one single person made it through to the final."]
    ],
    quiz: [
      ["あの 経験《けいけん》 は 私《わたし》 を 強《つよ》く し こそ すれ、 弱《よわ》く する こと は なかった。 means:", ["That experience made me stronger, if anything; it never made me weaker.", "That experience made me both stronger and weaker.", "That experience did not make me any stronger."], 0, "こそ すれ grants A (stronger) in order to deny B (weaker) outright."],
      ["騒音《そうおん》 の 問題《もんだい》 は、 ＿ この 町《まち》 のみ ならず、 全国《ぜんこく》 の 都市《とし》 に 共通《きょうつう》 する。", ["まさか", "ひとり", "せめて"], 1, "ひとり 〜のみ ならず means \"not X alone\"; まさか and せめて cannot frame のみ ならず."],
      ["新《あたら》しい 制度《せいど》 は 現場《げんば》 の 負担《ふたん》 を 増《ふ》やし こそ すれ、 減《へ》らし は しなかった。 means:", ["The new system reduced the burden on staff a little.", "If anything, the new system added to the burden on staff; it never reduced it.", "The new system neither added to nor reduced the burden on staff."], 1, "ます-stem + こそ すれ grants A (more burden) in order to deny B (less burden) outright."],
      ["A colleague says the exam results come out tomorrow. Which casual reply fits?", ["あと は ただ 待《ま》つ のみ で あります。", "ひとり 結果《けっか》 のみ ならず だ ね。", "あと は 待《ま》つ しか ない ね。"], 2, "In casual talk say 〜しか ない; ただ 〜のみ で あります is speech style, and the second line makes no sense."],
      ["細《こま》か な 点《てん》 に 多少《たしょう》 の 不満《ふまん》 ＿、 方針《ほうしん》 そのもの に 反対《はんたい》 する 人《ひと》 は いない。", ["こそ あれ", "こそ すれ", "のみ か"], 0, "Noun + こそ あれ, then a negative: \"there may be some complaints, but no one opposes\". こそ すれ needs a ます-stem or する-noun, and のみ か adds a stronger point in the same direction."],
      ["In an editorial, ひとり 若者《わかもの》 のみ ならず means:", ["one young person only", "young people only", "not young people alone"], 2, "ひとり here is the old adverb \"solely\", not 一人《ひとり》 (one person); のみ ならず widens the matter beyond X."]
    ]
  },
  'n1-ba-sore-made': {
    mistakes: [
      ["終《お》わった 試験《しけん》 の こと を 気《き》 に して 始《はじ》まらない よ。", "終《お》わった 試験《しけん》 の こと を 気《き》 に して も 始《はじ》まらない よ。", "\"There is no use\" is て-form + も + 始《はじ》まらない; without も it does not mean anything."],
      ["どんな に 大事《だいじ》 な 記録《きろく》 でも、 パスワード を 忘《わす》れて も それ まで だ。", "どんな に 大事《だいじ》 な 記録《きろく》 でも、 パスワード を 忘《わす》れれば それ まで だ。", "それ まで だ needs a ば- or たら-condition (\"if that happens\"); て も (\"even if\") does not fit."],
      ["だめもと で この 治療《ちりょう》 を 試《ため》して みましょう。", "この 治療《ちりょう》 を 試《ため》して みましょう。", "Grammatical but だめもと is casual and treats failure as costless; never use it about treatment."]
    ],
    more: [
      ["面会《めんかい》 は、 ご家族《かぞく》 以外《いがい》 の 方《かた》 でも 差《さ》し支《つか》え ありません。", "Visits by people other than family are also permitted. (ward notice)"],
      ["落《お》ち込《こ》んで いて も 始《はじ》まらない と 思《おも》って、 少《すこ》し ずつ 散歩《さんぽ》 を 始《はじ》めました。", "(Patient) I thought moping would get me nowhere, so I started going for short walks."],
      ["明日《あした》 の カンファレンス で、 この 症例《しょうれい》 を 発表《はっぴょう》 させて いただいて も 差《さ》し支《つか》え ない でしょう か。", "(Resident to a senior) Would it be all right if I presented this case at tomorrow's conference?"],
      ["いくら 安《やす》く 買《か》えて も、 すぐ 壊《こわ》れて しまえば それ まで だ。", "However cheaply you buy it, if it breaks straight away, that's the end of it."],
      ["だめ で もともと、 先輩《せんぱい》 に 引《ひ》っ越《こ》し の 手伝《てつだ》い を 頼《たの》んで みる つもり だ。", "I've nothing to lose, so I'm going to ask my senior to help me move."],
      ["抽選《ちゅうせん》 に 外《はず》れて も もともと だ から、 気軽《きがる》 に 申《もう》し込《こ》んで みよう。", "We're no worse off if we lose the draw, so let's just enter."]
    ],
    quiz: [
      ["今《いま》 から 文句《もんく》 を 言《い》って ＿。 次《つぎ》 の 手《て》 を 考《かんが》えよう。", ["も 始《はじ》まらない", "それ まで だ", "差《さ》し支《つか》え ない"], 0, "て-form + も 始《はじ》まらない: complaining now is pointless. それ まで だ needs a ば-form, and 差《さ》し支《つか》え ない needs て も."],
      ["契約書《けいやくしょ》 の 写《うつ》し は、 コピー で 差《さ》し支《つか》え ありません means:", ["It is pointless to copy the contract.", "A photocopy of the contract is not allowed.", "A photocopy of the contract is acceptable."], 2, "Noun + で 差《さ》し支《つか》え ありません is formal permission: a copy is acceptable."],
      ["In an everyday consultation a patient asks whether they may go back to their part-time job. Which answer sounds natural and warm?", ["働《はたら》いて も もともと です よ。", "働《はたら》いて も 大丈夫《だいじょうぶ》 です よ。 無理《むり》 の ない 範囲《はんい》 で 始《はじ》めましょう。", "働《はたら》けば それ まで です よ。"], 1, "In everyday talk give permission with 〜て も 大丈夫《だいじょうぶ》 です; the other two mean \"nothing to lose\" and \"that will be the end\"."],
      ["どんな に 練習《れんしゅう》 して も、 本番《ほんばん》 で 緊張《きんちょう》 して 忘《わす》れて しまえば それ まで だ。 means:", ["Practice is useless because we never get nervous.", "However much we practise, if we freeze and forget on the day, it's all for nothing.", "If we forget on the day, we can simply practise again."], 1, "〜ば それ まで だ: if A happens, all the effort so far is lost."],
      ["Which use of だめ で もともと is natural?", ["だめ で もともと、 予約《よやく》 が 取《と》れた から 安心《あんしん》 した。", "だめ で もともと、 合格《ごうかく》 して 嬉《うれ》しかった。", "だめ で もともと、 人気《にんき》 の レストラン に 予約《よやく》 の 電話《でんわ》 を かけて みた。"], 2, "だめ で もともと introduces a try that costs nothing if it fails; it cannot introduce a result that has already turned out well."],
      ["心配《しんぱい》 して も しかた が ない is closest in meaning to:", ["心配《しんぱい》 して も 始《はじ》まらない", "心配《しんぱい》 で しかた が ない", "心配《しんぱい》 しなければ それ まで だ"], 0, "Both mean \"worrying won't help\"; 心配《しんぱい》 で しかた が ない (without も) means \"I am terribly worried\"."]
    ]
  },
  'n1-ta-tokoro-de': {
    mistakes: [
      ["今《いま》 から 急《いそ》ぐ ところ で、 最終《さいしゅう》 バス に は 間《ま》に合《あ》わない。", "今《いま》 から 急《いそ》いだ ところ で、 最終《さいしゅう》 バス に は 間《ま》に合《あ》わない。", "\"Even if one did it\" needs the た-form before ところ で, even about the future."],
      ["申込書《もうしこみしょ》 は 早《はや》く とも 金曜日《きんようび》 まで に 提出《ていしゅつ》 して ください。", "申込書《もうしこみしょ》 は 遅《おそ》く とも 金曜日《きんようび》 まで に 提出《ていしゅつ》 して ください。", "A deadline with まで に needs 遅《おそ》く とも (at the latest); 早《はや》く とも means \"at the earliest\"."],
      ["先輩《せんぱい》 に 相談《そうだん》 した ところ で、 すぐ に 解決《かいけつ》 した。", "先輩《せんぱい》 に 相談《そうだん》 した ところ、 すぐ に 解決《かいけつ》 した。", "た ところ で means \"even if (it won't help)\"; for \"when I did it, it turned out …\" use た ところ without で."]
    ],
    more: [
      ["少《すく》なく とも 一日《いちにち》 一回《いっかい》 は、 外《そと》 の 空気《くうき》 を 吸《す》う よう に して みましょう。", "Let's try to get some fresh air outside at least once a day."],
      ["裏面《りめん》 の アンケート は、 答《こた》えたく ない 質問《しつもん》 に は 回答《かいとう》 しなく とも かまいません。", "On the questionnaire overleaf, you need not answer any question you would rather not. (form)"],
      ["私《わたし》 が 何《なに》 を 言《い》った ところ で、 息子《むすこ》 は 聞《き》いて くれません。", "(Family) Whatever I say, my son won't listen."],
      ["今《いま》 から 走《はし》った ところ で、 せいぜい 一本《いっぽん》 前《まえ》 の 電車《でんしゃ》 に 乗《の》れる くらい だ。", "Even if I run now, at most I'll catch the train one earlier."],
      ["新《あたら》しい 駅《えき》 が できる の は、 早《はや》く とも 数年先《すうねんさき》 だ そう だ。", "Apparently the new station won't be built for several years at the earliest."],
      ["親《おや》 に した ところ で、 子《こ》ども の 進路《しんろ》 を 代《か》わり に 決《き》める こと は できない。", "Even parents cannot decide their child's path for them."]
    ],
    quiz: [
      ["いくら ＿ ところ で、 割《わ》れた 花瓶《かびん》 は 元《もと》 に 戻《もど》らない。", ["謝《あやま》る", "謝《あやま》った", "謝《あやま》って"], 1, "いくら + た-form + ところ で: however much one apologises, it will not help."],
      ["修理《しゅうり》 が 終《お》わる の は、 早《はや》く とも 一週間後《いっしゅうかんご》 です。 means:", ["The repair will be finished within a week at the latest.", "The repair will take at least a week.", "The repair was finished a week early."], 1, "早《はや》く とも is \"at the earliest\": it will not be done before a week has passed."],
      ["A notice wants to say \"Children need not bring anything\". Which line fits?", ["お子《こ》さん は 何《なに》 も 持《も》って こなく とも かまいません。", "お子《こ》さん は 何《なに》 も 持《も》って きた ところ で かまいません。", "お子《こ》さん は 何《なに》 も 持《も》って こない とも かまいません。"], 0, "ない-form with い changed to く + とも かまいません is the written \"need not\"; こない とも is not a form, and ところ で gives no sense here."],
      ["文句《もんく》 を 言《い》った ところ で、 返《かえ》って くる の は せいぜい 謝罪《しゃざい》 の 一言《ひとこと》 だろう。 means:", ["Complaining would get you an apology at most.", "If you complain, you will certainly get your money back.", "You should complain until they apologise properly."], 0, "た ところ で せいぜい 〜: even if one does it, it comes to no more than this."],
      ["Which sentence is correct?", ["たとえ 遅《おく》れた ところ で、 必《かなら》ず 来《き》て ください。", "いくら 説明《せつめい》 する ところ で、 分《わ》かって もらえない。", "今《いま》さら 説明《せつめい》 した ところ で、 誤解《ごかい》 は 解《と》けない だろう。"], 2, "た-form + ところ で, then a negative or pointless result; it cannot end in a request, and the verb must be in the た-form."],
      ["体調《たいちょう》 を 崩《くず》さない ため に も、 ＿ 六時間《ろくじかん》 は 眠《ねむ》る よう に しましょう。", ["多《おお》く とも", "遅《おそ》く とも", "少《すく》なく とも"], 2, "少《すく》なく とも is \"at least\"; 多《おお》く とも means \"at most\" and 遅《おそ》く とも \"at the latest\", which do not fit a minimum amount of sleep."]
    ]
  },
  'n1-nai-mono-demo-nai': {
    mistakes: [
      ["てっきり もう 退院《たいいん》 された もの を 思《おも》って いました。", "てっきり もう 退院《たいいん》 された もの と 思《おも》って いました。", "思《おも》う takes と for what is thought: 〜もの と 思《おも》って いた."],
      ["お部屋《へや》 で の 電話《でんわ》 は 控《ひか》えて いただく もの と します。", "お部屋《へや》 で の 電話《でんわ》 は 控《ひか》えて いただく こと に なって います。", "Grammatical but もの と します is written rule wording; said aloud to a patient, use 〜こと に なって います."],
      ["頭痛《ずつう》 は 睡眠不足《すいみんぶそく》 もの と 思《おも》われる。", "頭痛《ずつう》 は 睡眠不足《すいみんぶそく》 に よる もの と 思《おも》われる。", "A noun cannot sit directly before もの here; use noun + に よる もの."]
    ],
    more: [
      ["得《え》られた 情報《じょうほう》 は、 本研究《ほんけんきゅう》 の 目的《もくてき》 以外《いがい》 に は 使用《しよう》 しない もの と します。", "Information obtained will not be used for any purpose other than this study. (sample consent form wording)"],
      ["期限《きげん》 まで に 返却《へんきゃく》 されなかった 図書《としょ》 は、 紛失《ふんしつ》 した もの と みなします。", "Books not returned by the due date will be treated as lost. (staff library notice)"],
      ["食欲《しょくよく》 の 低下《ていか》 は、 環境《かんきょう》 の 変化《へんか》 に よる もの と 思《おも》われる。", "The loss of appetite appears to be due to the change of surroundings. (chart note)"],
      ["この 渋滞《じゅうたい》、 何《なん》 と か 抜《ぬ》け出《だ》せない もの か。", "Isn't there some way to get out of this traffic jam?"],
      ["雨《あめ》 が 降《ふ》る もの と して、 室内《しつない》 の 会場《かいじょう》 も 押《お》さえて おきました。", "Assuming it will rain, I have booked an indoor venue as well."],
      ["てっきり その 店《みせ》 は 夜《よる》 まで 開《あ》いて いる もの と 思《おも》って いました。", "I had assumed the shop stayed open until the evening."]
    ],
    quiz: [
      ["条件《じょうけん》 次第《しだい》 で は、 その 仕事《しごと》 を 引《ひ》き受《う》けない もの でも ない。 means:", ["Depending on the terms, I might take on the job.", "I will never take on the job, whatever the terms.", "I have already taken on the job."], 0, "〜ない もの でも ない is a reluctant \"it is not out of the question\"."],
      ["参加者《さんかしゃ》 は、 会場内《かいじょうない》 で の 撮影《さつえい》 を 控《ひか》える ＿ と する。", ["もの か", "もの", "もの の"], 1, "Plain form + もの と する states a rule: participants shall refrain from taking photos. もの か and もの の cannot come before と する."],
      ["Explaining a ward rule aloud to a patient, which is natural?", ["夜《よる》 十時《じゅうじ》 以降《いこう》 は、 テレビ を 消《け》す もの と みなします。", "夜《よる》 十時《じゅうじ》 以降《いこう》 は、 テレビ を 消《け》す こと に なって います。", "夜《よる》 十時《じゅうじ》 以降《いこう》 は、 テレビ を 消《け》す もの と みられて います。"], 1, "Aloud, explain a rule with 〜こと に なって います; もの と みなす means \"shall be deemed\" and もの と みられる \"is believed\"."],
      ["停電《ていでん》 は、 落雷《らくらい》 に よる もの と みられて いる。 means:", ["The power cut was prevented by the lightning rod.", "It has been ruled that lightning must not cause power cuts.", "The power cut is believed to have been caused by lightning."], 2, "〜もの と みられて いる is the news \"is believed to\": a likely cause, not yet confirmed."],
      ["もう 少《すこ》し 静《しず》か に 勉強《べんきょう》 できる 場所《ばしょ》 は ない ＿ か。", ["もの", "もの と", "もの でも"], 0, "ない + もの か wishes for something hard to find; もの と か and もの でも か are not Japanese."],
      ["At a planning meeting you want to say \"Let's go ahead on the assumption that the budget will not increase\". Which fits?", ["予算《よさん》 は 増《ふ》えない もの でも なく、 計画《けいかく》 を 進《すす》めましょう。", "予算《よさん》 は 増《ふ》えない もの か、 計画《けいかく》 を 進《すす》めましょう。", "予算《よさん》 は 増《ふ》えない もの と して、 計画《けいかく》 を 進《すす》めましょう。"], 2, "Plain form + もの と して, then an action: proceeding on the basis that X."]
    ]
  },
  'n1-to-omoikiya': {
    mistakes: [
      ["追加《ついか》 の 検査《けんさ》 が 必要《ひつよう》 な か 否《いな》 か を 検討《けんとう》 する。", "追加《ついか》 の 検査《けんさ》 が 必要《ひつよう》 か 否《いな》 か を 検討《けんとう》 する。", "A な-adjective joins か 否《いな》 か directly, without な (or with で ある)."],
      ["周囲《しゅうい》 の 予想《よそう》 に 裏腹《うらはら》 に、 新人《しんじん》 チーム が 優勝《ゆうしょう》 した。", "周囲《しゅうい》 の 予想《よそう》 と は 裏腹《うらはら》 に、 新人《しんじん》 チーム が 優勝《ゆうしょう》 した。", "裏腹《うらはら》 takes と (は); に before it belongs to 〜に 反《はん》して."],
      ["お薬《くすり》 を 続《つづ》ける か 否《いな》 か は、 次回《じかい》 一緒《いっしょ》 に 考《かんが》えましょう。", "お薬《くすり》 を 続《つづ》ける か どう か は、 次回《じかい》 一緒《いっしょ》 に 考《かんが》えましょう。", "Grammatical but か 否《いな》 か to a patient sounds like a form read aloud; say か どう か."]
    ],
    more: [
      ["「家《いえ》 に 帰《かえ》りたい」 と いう 訴《うった》え と は 裏腹《うらはら》 に、 外泊《がいはく》 の 話《はなし》 に なる と 表情《ひょうじょう》 が 曇《くも》った。", "In contrast to the stated wish to go home, the patient's face clouded over whenever an overnight stay came up. (case report)"],
      ["カンファレンス で は、 退院後《たいいんご》 に 訪問《ほうもん》 看護《かんご》 を 導入《どうにゅう》 する か 否《いな》 か を 検討《けんとう》 した。", "At the conference we discussed whether or not to bring in home-visit nursing after discharge."],
      ["転院《てんいん》 を 嫌《いや》がる か と 思《おも》いきや、 母《はは》 は 「新《あたら》しい ところ も 楽《たの》しみ」 と 笑《わら》った。", "(Family, written account) I expected Mother to object to the transfer, but she laughed and said she was looking forward to a new place."],
      ["高《たか》い か と 思《おも》いきや、 その 店《みせ》 の ランチ は 驚《おどろ》く ほど 安《やす》かった。", "I expected it to be expensive, but lunch at that place was surprisingly cheap."],
      ["派手《はで》 な 見《み》た目《め》 と は 裏腹《うらはら》 に、 彼《かれ》 は とても 慎重《しんちょう》 な 性格《せいかく》 だ。", "Despite his flashy looks, he is a very careful person."],
      ["赤《あか》ちゃん は 泣《な》いた か と 思《おも》えば、 もう 笑《わら》って いる。", "One moment the baby is crying, the next it is already laughing."]
    ],
    quiz: [
      ["やっと 仕事《しごと》 が 終《お》わった と 思《おも》いきや、 新《あたら》しい 依頼《いらい》 が 届《とど》いた。 means:", ["Just when I thought the work was done, a new request came in.", "Because the work was done, I asked for a new task.", "I hoped the work would end before a new request came in."], 0, "〜と 思《おも》いきや: an expectation, then the opposite fact."],
      ["Writing a case report, which sentence fits?", ["表情《ひょうじょう》 が 明《あか》るい か と 思《おも》いきや、 涙《なみだ》 を 流《なが》した。", "穏《おだ》やか な 口調《くちょう》 と は 裏腹《うらはら》 に、 強《つよ》い 不安《ふあん》 を 語《かた》った。", "穏《おだ》やか な 口調《くちょう》 と は 裏腹《うらはら》 に、 話《はな》して ください。"], 1, "〜と は 裏腹《うらはら》 に can be written in a report; 思《おも》いきや is light style, not for case reports, and 裏腹《うらはら》 cannot lead into a request."],
      ["Which is the spoken equivalent of 参加《さんか》 する か 否《いな》 か?", ["参加《さんか》 する や 否《いな》 や", "参加《さんか》 しない か", "参加《さんか》 する か どう か"], 2, "か 否《いな》 か is the written か どう か; や 否《いな》 や means \"the moment\"."],
      ["明《あか》るい 笑顔《えがお》 ＿ 裏腹《うらはら》 に、 姉《あね》 の 日記《にっき》 に は 悩《なや》み が つづられて いた。", ["に", "と は", "を"], 1, "裏腹《うらはら》 takes と or と は before it; に and を do not fit."],
      ["回答《かいとう》 する か 否《いな》 か は 自由《じゆう》 です。 means:", ["You are free to answer or not.", "You must answer.", "You may answer only once."], 0, "か 否《いな》 か: whether or not; 自由《じゆう》 です: it is up to you."],
      ["Which uses 裏腹《うらはら》 correctly?", ["言《い》う こと と 本心《ほんしん》 が 裏腹《うらはら》 する。", "言《い》う こと と 本心《ほんしん》 を 裏腹《うらはら》 に なる。", "言《い》う こと と 本心《ほんしん》 が 裏腹《うらはら》 だ。"], 2, "裏腹《うらはら》 is used like a な-adjective: A と B が 裏腹《うらはら》 だ. It is not a verb and does not take を."]
    ]
  }
});
