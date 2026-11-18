/* Lesson extras part 11 (0.26.0): common mistakes, more examples and a "More practice" quiz for existing N3 lessons
   (contrast, even-supposing, hearsay, certainty-risk, tendencies, to-iu).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'contrast': {
    mistakes: [
      ["この 店《みせ》 は 有名《ゆうめい》 わり に、 いつも 空《す》いて います。", "この 店《みせ》 は 有名《ゆうめい》 な わり に、 いつも 空《す》いて います。", "A な-adjective needs な before わり に."],
      ["兄《あに》 は 社交的《しゃこうてき》 な 反面《はんめん》、 弟《おとうと》 は おとなしい です。", "兄《あに》 は 社交的《しゃこうてき》 な 一方《いっぽう》、 弟《おとうと》 は おとなしい です。", "反面《はんめん》 gives two sides of one thing; to compare two different people use 一方《いっぽう》 or 〜の に 対《たい》して."],
      ["よく 寝《ね》て いる くせ に、 疲《つか》れて いる ん です ね。", "よく 寝《ね》て いる わり に、 疲《つか》れて いる ん です ね。", "Grammatical but くせ に blames the person, so a clinician uses わり に or の に instead."]
    ],
    more: [
      ["平日《へいじつ》 は 規則正《きそくただ》しく 生活《せいかつ》 して いる の に 対《たい》して、 週末《しゅうまつ》 は 昼《ひる》 まで 寝《ね》て いる そう です。", "On weekdays she keeps a regular routine, whereas at weekends, I hear, she sleeps until noon."],
      ["この 治療《ちりょう》 は 効果《こうか》 が 期待《きたい》 できる 反面《はんめん》、 通院《つういん》 の 回数《かいすう》 が 増《ふ》えます。", "This treatment can be expected to work, but at the same time you will need to come to the clinic more often."],
      ["日中《にっちゅう》 の 活動量《かつどうりょう》 は 増《ふ》えて きました。 一方《いっぽう》、 夜間《やかん》 の 不安《ふあん》 は まだ 続《つづ》いて います。", "Her activity during the day has increased. On the other hand, the anxiety at night is still there."],
      ["この かばん は 値段《ねだん》 の わり に、 とても 丈夫《じょうぶ》 です。", "This bag is very sturdy for the price."],
      ["自分《じぶん》 では 何《なに》 も しない くせ に、 人《ひと》 の やり方《かた》 に は 文句《もんく》 を 言《い》う。", "He never does anything himself, and yet he complains about the way others do things."],
      ["彼女《かのじょ》 は 仕事《しごと》 に 厳《きび》しい 一方《いっぽう》 で、 部下《ぶか》 に は とても 優《やさ》しい です。", "She is strict about work, while at the same time she is very kind to her staff."]
    ],
    quiz: [
      ["Fill the blank: 部屋《へや》 は 静《しず》か ＿ 反面《はんめん》、 駅《えき》 から 遠《とお》い です。", ["な", "の", "だ"], 0, "A な-adjective takes な before 反面《はんめん》."],
      ["兄《あに》 は 背《せ》 が 高《たか》い の に 対《たい》して、 弟《おとうと》 は 低《ひく》い です means:", ["Because my older brother is tall, my younger brother is short.", "My older brother is tall, whereas my younger brother is short.", "Although my older brother is tall, he is short."], 1, "〜の に 対《たい》して sets two different people side by side: \"whereas\"."],
      ["Which sentence means \"Please speak gently to the patient\"?", ["患者《かんじゃ》さん の に 対《たい》して 優《やさ》しく 話《はな》して ください。", "患者《かんじゃ》さん な の に 対《たい》して 優《やさ》しく 話《はな》して ください。", "患者《かんじゃ》さん に 対《たい》して 優《やさ》しく 話《はな》して ください。"], 2, "Noun + に 対《たい》して without の means \"towards, to\"; の に 対《たい》して is \"whereas\"."],
      ["A doctor explains the good point and the drawback of one treatment. Which sentence is correct?", ["この 治療《ちりょう》 は 効果《こうか》 が 高《たか》い 反面《はんめん》、 時間《じかん》 が かかります。", "この 治療《ちりょう》 は 効果《こうか》 が 高《たか》い くせ に、 時間《じかん》 が かかります。", "この 治療《ちりょう》 は 効果《こうか》 が 高《たか》い に 対《たい》して、 時間《じかん》 が かかります。"], 0, "反面《はんめん》 gives two sides of one thing; くせ に blames a person, and a clause needs の before に 対《たい》して."],
      ["A wife says 「お酒《さけ》 は やめる と 言《い》った くせ に、 また 飲《の》んで います。」 What is she expressing?", ["A neutral comparison of two facts", "Surprise that he drinks less than expected", "Blame: he said he would stop, and yet he drinks again"], 2, "くせ に carries blame aimed at a person."],
      ["この 店《みせ》 は 安《やす》い わり に、 量《りょう》 が 多《おお》い です means:", ["This place is cheap, so the portions are small.", "Considering how cheap it is, the portions are big.", "This place is not cheap, but the portions are big."], 1, "わり に says the result is not what you would expect from the first part: here, more food than the low price suggests."]
    ]
  },
  'even-supposing': {
    mistakes: [
      ["若《わか》い から と いって、 体力《たいりょく》 が あります。", "若《わか》い から と いって、 体力《たいりょく》 が ある と は 限《かぎ》りません。", "〜から と いって must be followed by a negative such as と は 限《かぎ》りません."],
      ["たとえ 気分《きぶん》 が よく なったら、 通院《つういん》 は 続《つづ》けて ください。", "たとえ 気分《きぶん》 が よく なって も、 通院《つういん》 は 続《つづ》けて ください。", "たとえ only boosts \"even if\", so the verb still needs 〜ても, not たら."],
      ["一時的《いちじてき》 だ に して も、 眠《ねむ》れない 日《ひ》 が 続《つづ》く の は つらい です ね。", "一時的《いちじてき》 に して も、 眠《ねむ》れない 日《ひ》 が 続《つづ》く の は つらい です ね。", "A な-adjective or noun goes straight before に して も, with no だ."]
    ],
    more: [
      ["たとえ 小《ちい》さな こと でも、 気《き》に なる こと が あれば 教《おし》えて ください。", "Even if it is something small, please tell me if anything is on your mind."],
      ["仮《かり》に 再発《さいはつ》 した と して も、 早《はや》め に 相談《そうだん》 すれば 対応《たいおう》 できます。", "Even supposing it comes back, we can deal with it if you talk to us early."],
      ["話《はな》す の が 苦手《にがて》 だ から と いって、 治療《ちりょう》 が うまく いかない わけ では ありません。", "Just because you find talking hard doesn't mean the treatment won't go well."],
      ["どんなに 練習《れんしゅう》 して も、 本番《ほんばん》 は 緊張《きんちょう》 します。", "No matter how much I practise, I get nervous on the day itself."],
      ["疲《つか》れて いた に して も、 約束《やくそく》 を 忘《わす》れる の は よく ない よ。", "Granted you were tired, it's not good to forget a promise."],
      ["宝《たから》くじ が 当《あ》たった と して も、 仕事《しごと》 は 辞《や》めない と 思《おも》います。", "Even if I won the lottery, I don't think I would quit my job."]
    ],
    quiz: [
      ["Fill the blank: 病気《びょうき》 ＿ から と いって、 何《なに》 も できない わけ では ありません。", ["だ", "な", "の"], 0, "A noun keeps だ before から と いって."],
      ["たとえ 家族《かぞく》 でも、 言《い》えない こと は あります means:", ["Because they are family, I can say anything.", "Even with family, there are things you can't say.", "If it is my family, I will tell them."], 1, "たとえ + noun + でも means \"even if it is\"."],
      ["Which sentence means \"Just because you are young doesn't mean you won't get ill\"?", ["若《わか》い から と いって、 病気《びょうき》 に なりません。", "若《わか》い に して も、 病気《びょうき》 に なりません。", "若《わか》い から と いって、 病気《びょうき》 に ならない わけ では ありません。"], 2, "から と いって needs a negative ending such as わけ では ありません."],
      ["Fill the blank: 参加《さんか》 する に して も しない ＿、 返事《へんじ》 は 必要《ひつよう》 です。", ["に して も", "と いって", "から"], 0, "A に して も B に して も means \"whether A or B\"."],
      ["A patient says, \"I had one bad day, so I'm back to square one.\" Which reply gently corrects the belief?", ["一日《いちにち》 調子《ちょうし》 が 悪《わる》かった に して も、 元《もと》 に 戻《もど》りました ね。", "一日《いちにち》 調子《ちょうし》 が 悪《わる》かった から と いって、 元《もと》 に 戻《もど》った わけ では ありません よ。", "たとえ 一日《いちにち》 調子《ちょうし》 が 悪《わる》かった から、 元《もと》 に 戻《もど》りました。"], 1, "から と いって … わけ では ありません corrects a belief gently; the others agree with it, and たとえ cannot go with から."],
      ["仮《かり》に 明日《あした》 雨《あめ》 だ と して も、 行事《ぎょうじ》 は 行《おこな》われます means:", ["It will rain tomorrow, so the event is cancelled.", "If it doesn't rain, the event will be held.", "Even supposing it rains tomorrow, the event will go ahead."], 2, "仮《かり》に 〜と して も means \"even supposing\"."]
    ]
  },
  'hearsay': {
    mistakes: [
      ["昨日《きのう》 は 熱《ねつ》 が ある そう でした。", "昨日《きのう》 は 熱《ねつ》 が あった そう です。", "Hearsay そう です never goes into the past: put the past inside."],
      ["お父《とう》さん は 教師《きょうし》 そう です。", "お父《とう》さん は 教師《きょうし》 だ そう です。", "A noun takes だ before hearsay そう です."],
      ["昨夜《さくや》、 患者《かんじゃ》さん は ほとんど 眠《ねむ》れなかった って。", "昨夜《さくや》、 患者《かんじゃ》さん は ほとんど 眠《ねむ》れなかった との こと です。", "Grammatical but って is casual; a handover needs 〜との こと です or 〜そう です."]
    ],
    more: [
      ["お姉《ねえ》さん の 話《はなし》 では、 半年《はんとし》 ほど 前《まえ》 から 外出《がいしゅつ》 しなく なった そう です。", "According to her older sister, she stopped going out about six months ago."],
      ["夜勤《やきん》 の 看護師《かんごし》 から、 夜中《よなか》 に 一度《いちど》 ナースコール が あった との こと です。", "The night nurse reports that there was one nurse call during the night."],
      ["睡眠不足《すいみんぶそく》 は 気分《きぶん》 に も 影響《えいきょう》 する と 言《い》われて います。", "Lack of sleep is said to affect mood as well."],
      ["鈴木《すずき》さん、 来週《らいしゅう》 結婚《けっこん》 する って。", "I heard Suzuki is getting married next week."],
      ["課長《かちょう》 から、 会議《かいぎ》 は 三時《さんじ》 から に 変更《へんこう》 に なった と いう こと です。", "The section chief says the meeting has been moved to three o'clock."],
      ["ニュース に よる と、 今年《ことし》 の 夏《なつ》 は 例年《れいねん》 より 暑《あつ》く なる そう です。", "According to the news, this summer will be hotter than usual."]
    ],
    quiz: [
      ["How do you say \"I hear it was quiet\"?", ["静《しず》か だった そう です。", "静《しず》か そう でした。", "静《しず》か な そう です。"], 0, "A な-adjective takes だった inside, and そう です does not change; 静《しず》か そう means \"looks quiet\"."],
      ["渡辺《わたなべ》さん に よれば、 その 店《みせ》 は もう 閉店《へいてん》 した そう です means:", ["Watanabe thinks the shop will close.", "According to Watanabe, the shop has already closed.", "Watanabe closed the shop."], 1, "〜に よれば names the source, and そう です marks what was heard."],
      ["In a handover you report what the patient's son told you. Which sentence is best?", ["息子《むすこ》さん、 最近《さいきん》 食欲《しょくよく》 が 落《お》ちて いる って。", "最近《さいきん》 食欲《しょくよく》 が 落《お》ちて いる と 言《い》われて います。", "息子《むすこ》さん に よる と、 最近《さいきん》 食欲《しょくよく》 が 落《お》ちて いる そう です。"], 2, "Name the source and use そう です; って is casual, and 〜と 言《い》われて います is for general belief."],
      ["Fill the blank: 受付《うけつけ》 から、 検査《けんさ》 の 結果《けっか》 は 来週《らいしゅう》 出《で》る ＿ こと でした。", ["との", "そう", "の"], 0, "〜との こと でした relays a message and can be put in the past."],
      ["朝《あさ》ご飯《はん》 を 食《た》べる と 集中力《しゅうちゅうりょく》 が 上《あ》がる と 言《い》われて います。 This sentence reports:", ["what one particular person told the speaker", "a general belief", "the speaker's own plan"], 1, "〜と 言《い》われて います reports common knowledge, not one person's words."],
      ["How do you say \"I hear tomorrow is a day off\"?", ["明日《あした》 は 休《やす》み な そう です。", "明日《あした》 は 休《やす》み の そう です。", "明日《あした》 は 休《やす》み だ そう です。"], 2, "A noun takes だ before hearsay そう です."]
    ]
  },
  'certainty-risk': {
    mistakes: [
      ["この まま だ と、 脱水《だっすい》 おそれ が あります。", "この まま だ と、 脱水《だっすい》 の おそれ が あります。", "A noun takes の before おそれ が ある."],
      ["あの 人《ひと》 は 医者《いしゃ》 だ に 違《ちが》いない。", "あの 人《ひと》 は 医者《いしゃ》 に 違《ちが》いない。", "A noun goes straight before に 違《ちが》いない, with no だ."],
      ["無理《むり》 を する と、 また 体調《たいちょう》 を 崩《くず》す に 決《き》まって います。", "無理《むり》 を する と、 また 体調《たいちょう》 を 崩《くず》す おそれ が あります。", "Grammatical but に 決《き》まって いる sounds like a certain, emotional prediction; a doctor explains a risk with おそれ が あります."]
    ],
    more: [
      ["必《かなら》ずしも 薬《くすり》 を 一生《いっしょう》 飲《の》み続《つづ》ける 必要《ひつよう》 が ある と は 限《かぎ》りません。", "It is not necessarily the case that you will need to take medicine for life."],
      ["食事《しょくじ》 が 取《と》れない 状態《じょうたい》 が 続《つづ》く と、 栄養不足《えいようぶそく》 に なる おそれ が あります。", "If you keep being unable to eat, there is a risk of becoming undernourished."],
      ["患者《かんじゃ》さん は 「家族《かぞく》 は 私《わたし》 の こと を 迷惑《めいわく》 に 思《おも》って いる に 違《ちが》いない」 と 話《はな》して います。", "The patient says, \"My family must think I'm a burden.\""],
      ["あの 二人《ふたり》 は いつも 一緒《いっしょ》 に いる から、 付《つ》き合《あ》って いる に 違《ちが》いない。", "Those two are always together, so they must be going out."],
      ["日曜日《にちようび》 の 遊園地《ゆうえんち》 なんて、 混《こ》んで いる に 決《き》まって いる よ。", "An amusement park on a Sunday? It's bound to be crowded."],
      ["大雨《おおあめ》 で 川《かわ》 の 水《みず》 が あふれる おそれ が あります。", "Because of the heavy rain, there is a risk the river will overflow."]
    ],
    quiz: [
      ["Fill the blank: 雪《ゆき》 で 飛行機《ひこうき》 が ＿ おそれ が あります。", ["飛《と》ばない", "飛《と》ばなくて", "飛《と》びません"], 0, "おそれ が ある follows the plain form; neither the て-form nor polite ません can come before it."],
      ["真面目《まじめ》 な 人《ひと》 が 成功《せいこう》 する と は 限《かぎ》りません means:", ["Serious people never succeed.", "Serious people do not necessarily succeed.", "Serious people are bound to succeed."], 1, "と は 限《かぎ》りません means \"not necessarily\", not \"never\"."],
      ["In a consent talk you explain a possible side effect. Which sentence fits?", ["この 薬《くすり》 で めまい が 起《お》こる に 決《き》まって います。", "この 薬《くすり》 で めまい が 起《お》こる に 違《ちが》いない。", "この 薬《くすり》 で めまい が 起《お》こる おそれ が あります。"], 2, "おそれ が あります is the formal way to explain a risk; the other two state a personal certainty."],
      ["Fill the blank: 一度《いちど》 断《ことわ》られた から と いって、 次《つぎ》 も 断《ことわ》られる ＿。", ["と は 限《かぎ》りません", "に 違《ちが》いありません", "おそれ が あります"], 0, "から と いって must be followed by a negative such as と は 限《かぎ》りません."],
      ["A patient says 「みんな 私《わたし》 を 嫌《きら》って いる に 違《ちが》いない」. What should you note?", ["She is reporting what someone told her.", "She states a negative belief with strong certainty.", "She is unsure and asking for your view."], 1, "に 違《ちが》いない is a strong personal conviction, which can be part of the clinical picture."],
      ["What is the polite form of 〜に 違《ちが》いない?", ["〜に 違《ちが》い です", "〜に 違《ちが》いない でした", "〜に 違《ちが》いありません"], 2, "The polite form is に 違《ちが》いありません."]
    ]
  },
  'tendencies': {
    mistakes: [
      ["最近《さいきん》、 夜更《よふ》かしする がち です。", "最近《さいきん》、 夜更《よふ》かししがち です。", "がち attaches to the verb stem: する becomes し, so しがち."],
      ["最近《さいきん》、 少《すこ》し 太《ふと》る 気味《ぎみ》 です。", "最近《さいきん》、 少《すこ》し 太《ふと》り気味《ぎみ》 です。", "気味《ぎみ》 attaches to the verb stem or a noun, not the dictionary form."],
      ["昨日《きのう》 は 頭《あたま》 が 痛《いた》くて、 学校《がっこう》 を 休《やす》みがち でした。", "昨日《きのう》 は 頭《あたま》 が 痛《いた》くて、 学校《がっこう》 を 休《やす》みました。", "がち describes something that happens often, so it cannot describe a single event."]
    ],
    more: [
      ["一人暮《ひとりぐ》らし に なって から、 食事《しょくじ》 を 抜《ぬ》きがち だ そう です。", "I hear that since she started living alone, she tends to skip meals."],
      ["最近《さいきん》 便秘気味《べんぴぎみ》 なので、 野菜《やさい》 を 多《おお》め に 食《た》べて います。", "I've been a little constipated lately, so I'm eating more vegetables."],
      ["「自分《じぶん》 は 欠点《けってん》だらけ です」 と 何度《なんど》 も 口《くち》 に して いました。", "He said many times, \"I'm nothing but faults.\""],
      ["この 服《ふく》 は 安《やす》っぽく 見《み》える から、 やめて おきます。", "These clothes look cheap, so I'll leave them."],
      ["雨《あめ》 の 日《ひ》 は 電車《でんしゃ》 が 遅《おく》れがち です。", "On rainy days the trains tend to run late."],
      ["弟《おとうと》 は 飽《あ》きっぽくて、 趣味《しゅみ》 が すぐ 変《か》わります。", "My younger brother gets bored easily, and his hobbies change all the time."]
    ],
    quiz: [
      ["Fill the blank (a bit short of exercise): 最近《さいきん》、 ＿ です。", ["運動不足《うんどうぶそく》だらけ", "運動不足気味《うんどうぶそくぎみ》", "運動不足《うんどうぶそく》っぽく"], 1, "Noun + 気味《ぎみ》 means a slight touch of something; だらけ is \"covered in\", and っぽく cannot come before です."],
      ["彼女《かのじょ》 の 文章《ぶんしょう》 は 間違《まちが》いだらけ です means:", ["Her writing is full of mistakes.", "Her writing has one small mistake.", "Her writing tends to be correct."], 0, "Noun + だらけ means \"full of\" something unwelcome."],
      ["Which sentence means \"This colour is a little bluish\"?", ["この 色《いろ》 は 少《すこ》し 青《あお》がち です。", "この 色《いろ》 は 少《すこ》し 青《あお》だらけ です。", "この 色《いろ》 は 少《すこ》し 青《あお》っぽい です。"], 2, "っぽい after a colour means \"-ish\"."],
      ["Which sentence uses がち correctly?", ["毎朝《まいあさ》 運動《うんどう》しがち です。", "最近《さいきん》、 家《いえ》 に こもりがち です。", "昨日《きのう》 は 一日中《いちにちじゅう》 家《いえ》 に こもりがち でした。"], 1, "がち is for an unwelcome tendency over a period, not for a good habit or a single day."],
      ["Fill the blank: 試験《しけん》 の 前《まえ》 は 睡眠《すいみん》 が ＿ です。", ["不足《ふそく》しがち", "不足《ふそく》するがち", "不足《ふそく》しだらけ"], 0, "がち attaches to the verb stem: 不足《ふそく》する becomes 不足《ふそく》しがち."],
      ["白《しろ》っぽい 服《ふく》 means:", ["clothes covered in white stains", "pure white clothes", "whitish clothes"], 2, "っぽい after a colour means \"-ish\", not \"pure\" or \"covered in\"."]
    ]
  },
  'to-iu': {
    mistakes: [
      ["「だるい」 と いえば、 どんな 感《かん》じ です か。", "「だるい」 と いう の は、 どんな 感《かん》じ です か。", "と いえば means \"speaking of\"; to ask what a word means, use と いう の は."],
      ["鈴木《すずき》 いう 方《かた》 が 受付《うけつけ》 に 来《き》て います。", "鈴木《すずき》 と いう 方《かた》 が 受付《うけつけ》 に 来《き》て います。", "\"Someone called X\" needs the quoting と: X と いう + noun."],
      ["仕事《しごと》 に 行《い》けません と いう こと です か。", "仕事《しごと》 に 行《い》けない と いう こと です か。", "The part before と いう こと is plain form, even in a polite sentence."]
    ],
    more: [
      ["「頭《あたま》 が 重《おも》い」 と いう の は、 痛《いた》み と は 違《ちが》う 感《かん》じ です か。", "When you say your head feels heavy, is that different from pain?"],
      ["双極性障害《そうきょくせいしょうがい》 と いう の は、 気分《きぶん》 が 高《たか》まる 時期《じき》 と 落《お》ち込《こ》む 時期《じき》 を 繰《く》り返《かえ》す 病気《びょうき》 です。", "Bipolar disorder is an illness in which periods of elevated mood and periods of low mood keep alternating."],
      ["眠《ねむ》い と いう より、 体《からだ》 が だるくて 動《うご》けない ん です。", "It's not so much that I'm sleepy; my body is so heavy I can't move."],
      ["旅行《りょこう》 と いえば、 来月《らいげつ》 の 連休《れんきゅう》 は どこ か 行《い》く？", "Speaking of travel, are you going anywhere for the long weekend next month?"],
      ["「おにぎり」 と いう 名前《なまえ》 の 猫《ねこ》 を 飼《か》って います。", "I have a cat called Onigiri."],
      ["この 映画《えいが》 って、 本当《ほんとう》 に 怖《こわ》い の？", "Is this film really scary?"]
    ],
    quiz: [
      ["Fill the blank: 「幻聴《げんちょう》」 ＿、 実際《じっさい》 に は ない 声《こえ》 や 音《おと》 が 聞《き》こえる こと です。", ["と いう", "と いう の は", "と いう より"], 1, "X と いう の は … こと です defines a term: \"what X means is …\"."],
      ["怒《おこ》って いる と いう より、 がっかり して いる ん です means:", ["I'm not so much angry as disappointed.", "I'm angry because I'm disappointed.", "Speaking of anger, I'm disappointed."], 0, "A と いう より B means \"not so much A as B\"."],
      ["Fill the blank: 「マインドフルネス」 ＿ 言葉《ことば》 を 聞《き》いた こと が あります か。", ["と いう より", "と いえば", "と いう"], 2, "X と いう + noun names something: \"the word mindfulness\"."],
      ["A patient says 「胸《むね》 が ざわざわ する」 and you are not sure what she means. Which question fits?", ["「ざわざわ する」 と いえば、 どう です か。", "「ざわざわ する」 と いう の は、 どんな 感《かん》じ です か。", "「ざわざわ する」 と いう より、 どう です か。"], 1, "と いう の は asks what the patient means by her own word."],
      ["母《はは》 が 入院《にゅういん》 した と いう 連絡《れんらく》 が ありました means:", ["Speaking of my mother, she was admitted.", "My mother said that she had phoned the hospital.", "I got word that my mother had been admitted."], 2, "A clause + と いう + 連絡《れんらく》 gives the content of the message."],
      ["A friend mentions Hokkaido. How do you say \"Speaking of Hokkaido, the fish is good there, isn't it\"?", ["北海道《ほっかいどう》 と いえば、 魚《さかな》 が おいしい です よ ね。", "北海道《ほっかいどう》 と いう より、 魚《さかな》 が おいしい です よ ね。", "北海道《ほっかいどう》 と いう、 魚《さかな》 が おいしい です よ ね。"], 0, "X と いえば picks up a topic: \"speaking of X\"."]
    ]
  }
});
