/* Placement test. PLACEMENT = [[level, question, options, correctIndex]]; level is 'S' (kana and greetings), 'N5a', 'N5b', 'N4', 'N3', 'N2' or 'N1'. DRAFT FOR REVIEW. */
window.PLACEMENT = [
  ['S', "Which of these is written <i>sushi</i>?", ["すき", "すし", "しす"], 1],
  ['S', "What do you say to greet someone in the morning?", ["こんばんは", "おやすみなさい", "おはよう ございます"], 2],
  ['S', "What does はじめまして mean?", ["Nice to meet you (at a first meeting)", "Goodbye", "Excuse me"], 0],
  ['S', "Which katakana word is 'coffee'?", ["コピー", "コーヒー", "ケーキ"], 1],
  ['S', "Choose the correct sentence for 'I am a doctor.'", ["私《わたし》 を 医者《いしゃ》 です。", "私《わたし》 医者《いしゃ》 は です。", "私《わたし》 は 医者《いしゃ》 です。"], 2],

  ['N5a', "Choose the particle: 毎朝《まいあさ》 パン ＿ 食《た》べます。", ["を", "に", "で"], 0],
  ['N5a', "Choose the particle for 'by train': 電車《でんしゃ》 ＿ 病院《びょういん》 へ 行《い》きます。", ["が", "で", "を"], 1],
  ['N5a', "What time is 七時半《しちじはん》?", ["4:30", "1:30", "7:30"], 2],
  ['N5a', "What is the polite past negative of 飲《の》みます?", ["飲《の》みません でした", "飲《の》みました", "飲《の》みません"], 0],
  ['N5a', "You point at a book the listener is holding. Which word do you use for 'that'?", ["あれ", "それ", "これ"], 1],

  ['N5b', "Choose the correct way to say 'This room is not big.': この 部屋《へや》 は ＿。", ["大《おお》きい じゃ ありません", "大《おお》きくない です", "大《おお》きくない だ です"], 1],
  ['N5b', "What is the て-form of 飲《の》む?", ["飲《の》みて", "飲《の》って", "飲《の》んで"], 2],
  ['N5b', "What does 毎日《まいにち》 薬《くすり》 を 飲《の》んで います mean?", ["I take the medicine every day.", "I took the medicine yesterday.", "Please take the medicine."], 0],
  ['N5b', "Choose the verb: 待合室《まちあいしつ》 に 患者《かんじゃ》さん が 三人《さんにん》 ＿。", ["あります", "います", "です"], 1],
  ['N5b', "Which means 'three bottles'?", ["三枚《さんまい》", "三冊《さんさつ》", "三本《さんぼん》"], 2],

  ['N4', "What does 薬《くすり》 を 飲《の》まなかった と 思《おも》います mean?", ["I think I did not take the medicine.", "I think I will take the medicine.", "I did not think about the medicine."], 0],
  ['N4', "What does 日本語《にほんご》 が 少《すこ》し 話《はな》せます mean?", ["I want to speak Japanese.", "I can speak a little Japanese.", "I speak Japanese a lot."], 1],
  ['N4', "What does 眠《ねむ》れなかったら、 電話《でんわ》して ください mean?", ["Because you cannot sleep, please call.", "Even if you cannot sleep, do not call.", "If you cannot sleep, please call."], 2],
  ['N4', "Choose the best word: 熱《ねつ》 が ある ＿、 今日《きょう》 は 休《やす》みます。", ["のに", "ので", "けど"], 1],
  ['N4', "Which is the respectful (sonkeigo) way to ask 'What will you eat?'", ["何《なに》 を 召《め》し上《あ》がります か。", "何《なに》 を いただきます か。", "何《なに》 を 食《た》べる か。"], 0],

  ['N3', "What does 薬《くすり》 を 飲《の》む たび に、 気持《きも》ち が 悪《わる》く なります mean?", ["Every time I take the medicine, I feel sick.", "After I stopped the medicine, I felt sick.", "I feel sick, so I take the medicine."], 0],
  ['N3', "Choose the best word: 寝不足《ねぶそく》 の ＿、 朝《あさ》 から 頭《あたま》 が 痛《いた》い です。", ["うち に", "せい で", "かわり に"], 1],
  ['N3', "What does 看護師《かんごし》さん に よると、 山田《やまだ》さん は 昨日《きのう》 の 夜《よる》 よく 眠《ねむ》れた そう です mean?", ["It looks as if Mr. Yamada will sleep well tonight.", "The nurse wants Mr. Yamada to sleep well.", "According to the nurse, Mr. Yamada slept well last night."], 2],
  ['N3', "Choose the best word for 'before you forget': 忘《わす》れない ＿、 メモ して ください。", ["たび に", "うち に", "ばかり に"], 1],
  ['N3', "What does 薬《くすり》 を 飲《の》めば すぐ 治《なお》る わけ では ありません mean?", ["It does not mean that you will get better right away if you take the medicine.", "There is no reason to take the medicine.", "If you take the medicine, you will certainly get better right away."], 0],
  ['N2', "Choose the best word: 治療《ちりょう》 が 進《すす》む ＿、 気分《きぶん》 も 少《すこ》しずつ 落《お》ち着《つ》いて きました。", ["に 限《かぎ》らず", "に つれて", "どころ か"], 1],
  ['N2', "What does この 病院《びょういん》 で は、 患者《かんじゃ》さん に 限《かぎ》らず、 ご家族《かぞく》 も 相談《そうだん》 できます mean?", ["At this hospital, only patients can ask for advice, not their families.", "At this hospital, families can ask for advice only when the patient is there.", "At this hospital, not only patients but also their families can ask for advice."], 2],
  ['N2', "What does 無理《むり》 を 続《つづ》ける と、 体調《たいちょう》 を 崩《くず》しかねません mean?", ["If you keep pushing yourself, you could well become unwell.", "Even if you keep pushing yourself, you will not become unwell.", "You cannot keep pushing yourself, because you are already unwell."], 0],
  ['N2', "What does 熱《ねつ》 が 下《さ》がらない ので、 今日《きょう》 の 外出《がいしゅつ》 は 中止《ちゅうし》 せざる を 得《え》ません mean?", ["The fever has not gone down, but there is no need to cancel today's outing.", "The fever has not gone down, so we have no choice but to cancel today's outing.", "The fever has not gone down, so please do not cancel today's outing."], 1],
  ['N2', "Choose the best word: 昨夜《さくや》 は ゆっくり 休《やす》める ＿、 一睡《いっすい》 も できません でした。", ["どころ か", "に つれて", "から こそ"], 0],

  ['N1', "Choose the best word: 入院《にゅういん》 して から と いう ＿、 夜《よる》 は よく 眠《ねむ》れる よう に なりました。", ["もの", "こと", "ところ"], 0],
  ['N1', "What does ご家族《かぞく》 の 支《ささ》え なくして は、 ここ まで の 回復《かいふく》 は ありません でした mean?", ["Even without the family's support, the recovery went this far.", "Because there was no family support, there has been no recovery.", "Without the family's support, the recovery so far would not have happened."], 2],
  ['N1', "What does 一人《ひとり》 で 歩《ある》く こと は おろか、 起《お》き上《あ》がる こと すら できません でした mean?", ["He could not walk alone, but he could sit up.", "He could not even sit up, let alone walk alone.", "He could sit up only after walking alone."], 1],
  ['N1', "Choose the best word: 手術《しゅじゅつ》 の 後《あと》、 父《ちち》 は 一《いっ》か月《げつ》 の 入院《にゅういん》 を ＿ されました。", ["余儀《よぎ》なく", "やまなく", "難《かた》く"], 0],
  ['N1', "What does ご家族《かぞく》 の 不安《ふあん》 は 想像《そうぞう》 に 難《かた》く ありません mean?", ["The family's worry is hard to imagine.", "The family's worry is easy to imagine.", "There is no need to imagine the family's worry."], 1]
];
