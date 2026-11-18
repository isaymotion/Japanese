/* Lesson extras part 14 (0.26.0): common mistakes, more examples and a "More practice" quiz for existing N2 lessons
   (n2-kara-miru-to, n2-ni-motozuite, n2-ni-oite, n2-kara-koso, n2-kara-ni-wa, n2-amari).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {
  'n2-kara-miru-to': {
    mistakes: [
      ["医師《いし》 に とって、 もう 少《すこ》し 入院《にゅういん》 を 続《つづ》ける べき だ と 思《おも》います。", "医師《いし》 の 立場《たちば》 から 見《み》る と、 もう 少《すこ》し 入院《にゅういん》 を 続《つづ》ける べき だ と 思《おも》います。", "に とって is not followed by a stated opinion; to give a view from a role, use 〜の 立場《たちば》 から 見《み》る と."],
      ["表情《ひょうじょう》 に よる と、 かなり 疲《つか》れて いる よう です。", "表情《ひょうじょう》 から 見《み》る と、 かなり 疲《つか》れて いる よう です。", "に よる と names a source of information; to judge from evidence you see, use から 見《み》る と."],
      ["健康上《けんこうじょう》 理由《りゆう》 で、 仕事《しごと》 を 休《やす》んで います。", "健康上《けんこうじょう》 の 理由《りゆう》 で、 仕事《しごと》 を 休《やす》んで います。", "Noun + 上《じょう》 needs の before another noun."]
    ],
    more: [
      ["睡眠《すいみん》 の 記録《きろく》 から 見《み》る と、 夜中《よなか》 に 何度《なんど》 も 目《め》 が 覚《さ》めて いる よう です ね。", "Judging from your sleep diary, you seem to be waking several times during the night."],
      ["鈴木《すずき》さん に して みれば、 診察《しんさつ》 まで の 待《ま》ち時間《じかん》 が とても 長《なが》く 感《かん》じられた の でしょう。", "For Ms Suzuki, the wait before the consultation must have felt very long."],
      ["生活上《せいかつじょう》 の お困《こま》りごと が あれば、 ソーシャルワーカー に ご相談《そうだん》 ください。", "If you have difficulties in daily life, please talk to the social worker."],
      ["値段《ねだん》 から 言《い》う と、 こちら の ほう が ずっと お得《とく》 です。", "In terms of price, this one is a much better deal."],
      ["子《こ》ども から する と、 大人《おとな》 の 長《なが》い 話《はなし》 は 退屈《たいくつ》 な の でしょう。", "From a child's side, adults' long conversations must be boring."],
      ["空模様《そらもよう》 から して、 午後《ごご》 は 雨《あめ》 に なりそう です。", "Judging from the look of the sky, it looks like rain this afternoon."]
    ],
    quiz: [
      ["Fill the blank: 患者《かんじゃ》さん ＿ して みれば、 夜中《よなか》 の 検温《けんおん》 は つらい かも しれません。", ["に", "で", "を"], 0, "The pattern is 〜に して みれば, \"if you put yourself in their place\"."],
      ["母《はは》 の 立場《たちば》 から 言《い》う と、 反対《はんたい》 したく なる 気持《きも》ち も わかります means:", ["My mother told me she wants to object.", "Speaking from my mother's standpoint, I can understand the urge to object.", "Because my mother objected, I changed my position."], 1, "〜の 立場《たちば》 から 言《い》う と gives the standpoint the speaker judges from."],
      ["Which phrase belongs mainly to written style (notices, letters, chart notes)?", ["経験《けいけん》 から 言《い》う と", "ご家族《かぞく》 から する と", "安全上《あんぜんじょう》 の 理由《りゆう》 で"], 2, "Noun + 上《じょう》 is written and formal style; the other two are everyday spoken patterns."],
      ["A nurse asks why a patient is upset about a ward rule. You want to say \"From his side, it is a rule he cannot accept.\" Which fits?", ["本人《ほんにん》 上《じょう》、 納得《なっとく》 できない ルール な の でしょう。", "本人《ほんにん》 の 立場《たちば》 に よって、 納得《なっとく》 できない ルール な の でしょう。", "本人《ほんにん》 に して みれば、 納得《なっとく》 できない ルール な の でしょう。"], 2, "〜に して みれば explains another person's feelings from their side; 上《じょう》 does not follow a person, and に よって means \"depending on\"."],
      ["字《じ》 の 乱《みだ》れ から して、 かなり 急《いそ》いで 書《か》いた よう です means:", ["Because he was in a hurry, he could not write anything.", "Judging from the messy handwriting, it seems it was written in a great hurry.", "He said he wrote it in a hurry, so the handwriting is messy."], 1, "から して after a clue means \"judging from\", and よう です is the speaker's own inference, not hearsay."],
      ["Fill the blank: 血液検査《けつえきけんさ》 の 数値《すうち》 から ＿、 体《からだ》 の 病気《びょうき》 は 考《かんが》えにくい です。", ["見《み》て", "とって", "よる と"], 0, "After evidence, 〜から 見《み》て means \"judging from\"; から とって and から よる と are not forms."]
    ]
  },
  'n2-ni-motozuite': {
    mistakes: [
      ["データ に 基《もと》づいて 判断《はんだん》 が 大切《たいせつ》 です。", "データ に 基《もと》づいた 判断《はんだん》 が 大切《たいせつ》 です。", "Before a noun, use the modifying form に 基《もと》づいた or に 基《もと》づく."],
      ["ご本人《ほんにん》 の 希望《きぼう》 を 沿《そ》って、 計画《けいかく》 を 立《た》てます。", "ご本人《ほんにん》 の 希望《きぼう》 に 沿《そ》って、 計画《けいかく》 を 立《た》てます。", "沿《そ》う takes に: 〜に 沿《そ》って."],
      ["睡眠《すいみん》 の 大切《たいせつ》さ を めぐって、 講演《こうえん》 を 聞《き》きました。", "睡眠《すいみん》 の 大切《たいせつ》さ に ついて、 講演《こうえん》 を 聞《き》きました。", "を めぐって needs an issue people disagree over, with a verb such as 話《はな》し合《あ》う or 対立《たいりつ》 する; a talk on a plain topic takes に ついて."]
    ],
    more: [
      ["問診票《もんしんひょう》 の 内容《ないよう》 を もと に、 これ から 詳《くわ》しく お話《はなし》 を 伺《うかが》います。", "Using what you wrote on the questionnaire, I will now ask you about things in more detail."],
      ["体調《たいちょう》 に 応《おう》じて、 リハビリ の 時間《じかん》 を 短《みじか》く する こと も できます。", "Depending on how you feel, we can also make the rehabilitation sessions shorter."],
      ["退院後《たいいんご》 の 住《す》まい を めぐって、 ご本人《ほんにん》 と ご家族《かぞく》 の 考《かんが》え が 異《こと》なって います。", "The patient and the family see things differently over where he will live after discharge."],
      ["天気予報《てんきよほう》 は 観測《かんそく》 データ に 基《もと》づいて 作《つく》られて います。", "Weather forecasts are made on the basis of observation data."],
      ["この 道《みち》 に 沿《そ》って まっすぐ 行《い》く と、 駅《えき》 に 出《で》ます。", "If you go straight along this road, you will come out at the station."],
      ["ファン の 声《こえ》 に こたえて、 その バンド は 追加《ついか》 公演《こうえん》 を 決《き》めました。", "In response to the fans, the band decided to add another concert."]
    ],
    quiz: [
      ["You tell a patient that discharge planning will follow her own wishes. Which fits?", ["ご本人《ほんにん》 の ご希望《きぼう》 を めぐって 進《すす》めます。", "ご本人《ほんにん》 の ご希望《きぼう》 に 沿《そ》って 進《すす》めます。", "ご本人《ほんにん》 の ご希望《きぼう》 に 基《もと》づく 進《すす》めます。"], 1, "に 沿《そ》って means \"in line with\"; を めぐって needs a dispute, and に 基《もと》づく goes before a noun, not a verb."],
      ["Fill the blank: この 研究《けんきゅう》 は 倫理《りんり》 指針《ししん》 ＿ 行《おこな》われます。", ["に 基《もと》づいて", "を めぐって", "に こたえて"], 0, "Rules followed as grounds take に 基《もと》づいて."],
      ["収入《しゅうにゅう》 に 応《おう》じて 料金《りょうきん》 が 変《か》わります means:", ["Your income changes when you pay the fee.", "The fee is paid out of your income.", "The fee changes according to your income."], 2, "に 応《おう》じて means \"adjusted to match\"."],
      ["Which is the written stem form of に 基《もと》づいて that links to the rest of a sentence in notices?", ["に 基《もと》づき", "に 基《もと》づく", "に 基《もと》づけ"], 0, "In writing the て-form often becomes the stem: に 基《もと》づき; に 基《もと》づく goes before a noun."],
      ["Which sentence uses を めぐって naturally?", ["週末《しゅうまつ》 の 予定《よてい》 を めぐって、 友達《ともだち》 と 楽《たの》しく 話《はな》しました。", "新《あたら》しい 駅《えき》 の 建設《けんせつ》 を めぐって、 住民《じゅうみん》 の 意見《いけん》 が 対立《たいりつ》 して います。", "天気《てんき》 を めぐって、 母《はは》 に 電話《でんわ》 しました。"], 1, "を めぐって goes with an issue that people disagree about, such as a building plan."],
      ["Fill the blank: 必要《ひつよう》 ＿、 面談《めんだん》 の 回数《かいすう》 を 増《ふ》やします。", ["を もと に", "を めぐって", "に 応《おう》じて"], 2, "必要《ひつよう》 に 応《おう》じて is the set phrase \"as needed\"."]
    ]
  },
  'n2-ni-oite': {
    mistakes: [
      ["結果《けっか》 は メール に おいて ご連絡《れんらく》 します。", "結果《けっか》 は メール で ご連絡《れんらく》 します。", "に おいて replaces only the で of place, time or field, never the で of a means."],
      ["検査《けんさ》 を 先立《さきだ》って、 同意書《どういしょ》 に 署名《しょめい》 を いただきます。", "検査《けんさ》 に 先立《さきだ》って、 同意書《どういしょ》 に 署名《しょめい》 を いただきます。", "The event that comes after takes に: 〜に 先立《さきだ》って."],
      ["テレビ を 見《み》る に あたって、 お茶《ちゃ》 を いれました。", "テレビ を 見《み》る 前《まえ》 に、 お茶《ちゃ》 を いれました。", "に あたって needs an important occasion; a small daily action takes 前《まえ》 に."]
    ],
    more: [
      ["受診《じゅしん》 に 際《さい》して は、 診察券《しんさつけん》 を 受付《うけつけ》 に お出《だ》し ください。", "(Notice) When you come for your appointment, please hand your patient card in at reception."],
      ["退院《たいいん》 に 先立《さきだ》って、 ご自宅《じたく》 で の 生活《せいかつ》 に ついて ご家族《かぞく》 と 話《はな》し合《あ》う 場《ば》 を 設《もう》けます。", "Before discharge, we will arrange a meeting with your family about life at home."],
      ["地域《ちいき》 に おける 支援《しえん》 の 体制《たいせい》 に ついて は、 ソーシャルワーカー から ご説明《せつめい》 します。", "The social worker will explain the support available in the community."],
      ["引《ひ》っ越《こ》す に あたって、 古《ふる》い 本《ほん》 を 整理《せいり》 しました。", "In preparing to move, I sorted through my old books."],
      ["この 分野《ぶんや》 に おいて、 彼女《かのじょ》 の 右《みぎ》 に 出《で》る 人《ひと》 は いません。", "In this field, no one can match her."],
      ["結婚《けっこん》 に 際《さい》して、 友人《ゆうじん》たち から たくさん の お祝《いわ》い を もらいました。", "When I got married, I received many gifts from my friends."]
    ],
    quiz: [
      ["Fill the blank: 職場《しょくば》 ＿ ストレス が、 不眠《ふみん》 の 原因《げんいん》 に なって いる よう です。", ["に おける", "に 際《さい》して", "に あたって"], 0, "For \"the ... in (a place)\" before a noun, use に おける; に 際《さい》して and に あたって mark an occasion, not a place."],
      ["契約《けいやく》 に 際《さい》して、 身分証明書《みぶんしょうめいしょ》 が 必要《ひつよう》 です means:", ["An ID card is needed instead of a contract.", "An ID card is needed when you sign the contract.", "You may sign the contract without an ID card."], 1, "に 際《さい》して means \"on the occasion of\"."],
      ["A friend asks what you do before going out. Which is natural?", ["出《で》かける に 先立《さきだ》って、 天気予報《てんきよほう》 を 見《み》ます。", "出《で》かける に 際《さい》して、 天気予報《てんきよほう》 を 見《み》ます。", "出《で》かける 前《まえ》 に、 天気予報《てんきよほう》 を 見《み》ます。"], 2, "For a small daily action in casual talk, say 前《まえ》 に; に 先立《さきだ》って and に 際《さい》して are for formal occasions."],
      ["In which sentence is に おいて used correctly?", ["会議《かいぎ》 は 本館《ほんかん》 の 三階《さんがい》 に おいて 開《ひら》かれます。", "はさみ に おいて 紙《かみ》 を 切《き》りました。", "友達《ともだち》 に おいて 手紙《てがみ》 を 書《か》きました。"], 0, "に おいて marks a place, time or field; it cannot mark a tool or a person."],
      ["Fill the blank: 新《あたら》しい 病棟《びょうとう》 の 開設《かいせつ》 に ＿、 職員《しょくいん》 一同《いちどう》 気持《きも》ち を 新《あら》た に して います。", ["おいて", "あたって", "おける"], 1, "About to begin something important, with resolve: に あたって."],
      ["この 研究《けんきゅう》 に おける 個人《こじん》 情報《じょうほう》 は 適切《てきせつ》 に 管理《かんり》 されます means:", ["This study does not use any personal information.", "Personal information will be collected after the study ends.", "Personal information in this study will be handled properly."], 2, "に おける + noun means \"the ... in\"."]
    ]
  },
  'n2-kara-koso': {
    mistakes: [
      ["家族《かぞく》 な ので こそ、 言《い》えない こと も あります。", "家族《かぞく》 だ から こそ、 言《い》えない こと も あります。", "こそ follows から, never ので: a noun takes だ から こそ."],
      ["高《たか》い ホテル だけ あって、 サービス が 悪《わる》くて がっかり しました。", "高《たか》い ホテル だけ に、 サービス が 悪《わる》くて がっかり しました。", "だけ あって is for a result that lives up to expectations; disappointment takes だけ に."],
      ["看護師《かんごし》 以上《いじょう》、 患者《かんじゃ》さん の 秘密《ひみつ》 は 守《まも》らなければ なりません。", "看護師《かんごし》 で ある 以上《いじょう》、 患者《かんじゃ》さん の 秘密《ひみつ》 は 守《まも》らなければ なりません。", "A noun needs で ある before 以上《いじょう》; noun + 以上《いじょう》 means \"more than\"."]
    ],
    more: [
      ["一人《ひとり》 で 頑張《がんば》って きた から こそ、 今《いま》 は 少《すこ》し 休《やす》む こと も 大切《たいせつ》 です よ。", "Precisely because you have kept going on your own, it is important to rest a little now."],
      ["退院《たいいん》 を 楽《たの》しみ に して いた だけ に、 延期《えんき》 に なって がっかり されて いる よう です。", "She had been looking forward to going home, so she seems all the more disappointed that it was postponed."],
      ["お薬《くすり》 を 続《つづ》ける と 決《き》めた 以上《いじょう》、 自己判断《じこはんだん》 で やめない よう に しましょう。", "Now that you have decided to continue the medicine, let's make sure you don't stop it on your own."],
      ["さすが 地元《じもと》 の 人《ひと》 だけ あって、 おいしい 店《みせ》 を よく 知《し》って います ね。", "As you would expect of a local, you really know the good places to eat."],
      ["会社《かいしゃ》 を 辞《や》めた 上《うえ》 は、 もう 後戻《あともど》り は できない。", "Now that I have left the company, there is no going back."],
      ["毎日《まいにち》 会《あ》える わけ では ない から こそ、 一緒《いっしょ》 に いる 時間《じかん》 を 大切《たいせつ》 に したい です。", "Precisely because we can't see each other every day, I want to treasure our time together."]
    ],
    quiz: [
      ["Fill the blank: 大切《たいせつ》 ＿ から こそ、 きちんと 話《はな》し合《あ》いたい です。", ["だ", "な", "の"], 0, "A な-adjective takes だ before から こそ."],
      ["Fill the blank: 海外《かいがい》 で 研修《けんしゅう》 を 受《う》けた ＿、 英語《えいご》 が とても 上手《じょうず》 です。", ["以上《いじょう》 は", "だけ あって", "から に は"], 1, "Praise for a result you would expect from someone's background is だけ あって; 以上《いじょう》 は and から に は need a duty or resolve."],
      ["長年《ながねん》 勤《つと》めた 職場《しょくば》 だけ に、 辞《や》める の は つらかった でしょう means:", ["Because it was only a workplace, leaving was easy.", "You worked there for years only to be told to leave.", "It was a place you had worked for years, so leaving must have been all the harder."], 2, "だけ に means \"all the more because\", here with a feeling."],
      ["Which \"now that\" would you mostly meet in a formal letter rather than hear on the ward?", ["〜上《うえ》 は", "〜以上《いじょう》", "〜から に は"], 0, "〜上《うえ》 は is stiff written style; 以上《いじょう》 and から に は are used in speech."],
      ["Which sentence uses 以上《いじょう》 correctly?", ["学生《がくせい》 で ある 以上《いじょう》、 雨《あめ》 が 降《ふ》る でしょう。", "学生《がくせい》 で ある 以上《いじょう》、 勉強《べんきょう》 を 一番《いちばん》 に 考《かんが》える べき です。", "学生《がくせい》 以上《いじょう》、 勉強《べんきょう》 を 一番《いちばん》 に 考《かんが》える べき です。"], 1, "以上《いじょう》 is followed by a duty that comes from the fact, and a noun needs で ある before it."],
      ["A patient says her mother nags her about sleep. Which reply reframes it kindly?", ["お母《かあ》さん は 心配《しんぱい》 な ので こそ、 言《い》う ん です ね。", "お母《かあ》さん は 心配《しんぱい》 だ だけ あって、 言《い》う ん です ね。", "お母《かあ》さん は 心配《しんぱい》 だ から こそ、 言《い》う ん です ね。"], 2, "から こそ stresses the real reason; ので こそ is not used, and だけ あって is praise for a result."]
    ]
  },
  'n2-kara-ni-wa': {
    mistakes: [
      ["医師《いし》 から に は、 患者《かんじゃ》さん の 話《はなし》 を よく 聞《き》く べき です。", "医師《いし》 で ある から に は、 患者《かんじゃ》さん の 話《はなし》 を よく 聞《き》く べき です。", "A noun needs で ある before から に は; 医師《いし》 から alone means \"from the doctor\"."],
      ["毎日《まいにち》 練習《れんしゅう》 した ばかり に、 試合《しあい》 に 勝《か》てました。", "毎日《まいにち》 練習《れんしゅう》 した おかげ で、 試合《しあい》 に 勝《か》てました。", "ばかり に leads only to a bad, regretted result; a good result takes おかげ で."],
      ["せっかく 良《よ》く なった ん だから、 お薬《くすり》 を 続《つづ》けなさい。", "せっかく 良《よ》く なった ん です から、 お薬《くすり》 を 続《つづ》けましょう。", "Grammatical but ん だから with an order sounds like a scolding parent; to a patient use ん です から and 〜ましょう."]
    ],
    more: [
      ["せっかく 外泊《がいはく》 の 許可《きょか》 が 出《で》た ん です から、 ご家族《かぞく》 と ゆっくり 過《す》ごして きて ください。", "Since you have been allowed a night at home, please go and spend some relaxed time with your family."],
      ["診察《しんさつ》 の とき は 緊張《きんちょう》 して しまう もの です から、 言《い》いたい こと を メモ に して きました。", "I get nervous in consultations, you see, so I have brought a note of what I want to say."],
      ["「大丈夫《だいじょうぶ》」 と 言《い》って しまった ばかり に、 周《まわ》り に 助《たす》け を 求《もと》められなく なった そう です。", "Apparently, just because he had said he was fine, he could no longer ask the people around him for help."],
      ["日本《にほん》 に 住《す》む から に は、 日本語《にほんご》 で 話《はな》せる よう に なりたい です。", "Now that I am living in Japan, I want to be able to speak Japanese."],
      ["安《やす》い パソコン を 選《えら》んだ ばかり に、 すぐ 壊《こわ》れて しまいました。", "Just because I chose a cheap computer, it broke straight away."],
      ["あなた が 自分《じぶん》 で 選《えら》んだ 道《みち》 な ん だから、 最後《さいご》 まで 頑張《がんば》りなさい。", "It is the path you chose yourself, so see it through to the end."]
    ],
    quiz: [
      ["Fill the blank: まだ 子《こ》ども ＿ ん だから、 わからなくて も 仕方《しかた》 ない よ。", ["な", "だ", "の"], 0, "A noun takes な before ん だから: 子《こ》ども な ん だから."],
      ["留学《りゅうがく》 する から に は、 しっかり 勉強《べんきょう》 して きなさい means:", ["Because you studied hard, you can study abroad.", "Since you are going to study abroad, make sure you study hard while you are there.", "If you study abroad, you will not need to study."], 1, "から に は gives a situation, and a duty or strong wish follows."],
      ["A family member says 私《わたし》 が 気《き》づかなかった ばかり に…. What does this most likely show?", ["She is making an excuse for being late.", "She is pushing the patient to decide.", "She blames herself for what happened."], 2, "ばかり に names one small cause of a bad result, often with self-blame."],
      ["Which sentence uses もの です から correctly?", ["急《いそ》いで いた もの です から、 ご挨拶《あいさつ》 も せず に 失礼《しつれい》 しました。", "急《いそ》いで いた もの です から、 道《みち》 が 混《こ》んで いました。", "急《いそ》いで いた もの です から、 一緒《いっしょ》 に 行《い》きましょう。"], 0, "もの です から gives your own reason for what follows, often with an apology; it is not followed by an invitation, and being in a hurry cannot cause busy roads."],
      ["Which sentence uses から に は correctly?", ["新《あたら》しい 町《まち》 に 引《ひ》っ越《こ》した から に は、 雨《あめ》 が 多《おお》かった です。", "新《あたら》しい 町《まち》 に 引《ひ》っ越《こ》した から に は、 地域《ちいき》 の 行事《ぎょうじ》 に も 参加《さんか》 したい です。", "新《あたら》しい 町《まち》 に 引《ひ》っ越《こ》した ばかり に、 地域《ちいき》 の 行事《ぎょうじ》 に も 参加《さんか》 したい です。"], 1, "から に は needs a wish, will or duty in the second half, not a plain report; ばかり に leads to a bad, regretted result."],
      ["Which is the gentlest way for a doctor to say \"You slept well this week, so let's keep it up\"?", ["今週《こんしゅう》 は よく 眠《ねむ》れた ん だから、 同《おな》じ 生活《せいかつ》 を 続《つづ》けろ。", "今週《こんしゅう》 は よく 眠《ねむ》れた もん で、 同《おな》じ 生活《せいかつ》 を 続《つづ》けて ください。", "今週《こんしゅう》 は よく 眠《ねむ》れた ん です から、 同《おな》じ 生活《せいかつ》 を 続《つづ》けましょう。"], 2, "ん です から with 〜ましょう is gentle; 続《つづ》けろ is an order, and もん で is a casual excuse for your own action, not a reason for advice."]
    ]
  },
  'n2-amari': {
    mistakes: [
      ["不安《ふあん》 あまり、 何《なに》 も 食《た》べられません でした。", "不安《ふあん》 の あまり、 何《なに》 も 食《た》べられません でした。", "A noun takes の before あまり."],
      ["お腹《なか》 が すいた こと から、 ご飯《はん》 を 食《た》べます。", "お腹《なか》 が すいた ので、 ご飯《はん》 を 食《た》べます。", "こと から gives evidence for a judgement, not your own everyday reason; use ので."],
      ["相談《そうだん》 する 結果《けっか》、 転院《てんいん》 が 決《き》まりました。", "相談《そうだん》 した 結果《けっか》、 転院《てんいん》 が 決《き》まりました。", "A verb takes the た-form before 結果《けっか》."]
    ],
    more: [
      ["失敗《しっぱい》 を 恐《おそ》れる あまり、 会社《かいしゃ》 に 行《い》けなく なった そう です。", "Apparently he was so afraid of failing that he became unable to go to work."],
      ["日中《にっちゅう》 の 眠気《ねむけ》 が 強《つよ》い こと から、 夜間《やかん》 の 睡眠《すいみん》 状態《じょうたい》 を 確認《かくにん》 した。", "(Chart note) As daytime sleepiness was marked, night-time sleep was checked."],
      ["二週間《にしゅうかん》 様子《ようす》 を 見《み》た 結果《けっか》、 お薬《くすり》 は 変《か》えず に 続《つづ》ける こと に しました。", "After watching how things went for two weeks, we decided to continue the medicine unchanged."],
      ["改装中《かいそうちゅう》 に つき、 しばらく の 間《あいだ》 休業《きゅうぎょう》 いたします。", "(Sign) Closed for a while owing to renovation."],
      ["驚《おどろ》き の あまり、 しばらく 言葉《ことば》 が 出《で》ません でした。", "I was so surprised that for a while I could not say a word."],
      ["顔《かお》 が よく 似《に》て いる こと から、 二人《ふたり》 は よく 姉妹《しまい》 に 間違《まちが》えられます。", "Because their faces are so alike, the two are often taken for sisters."]
    ],
    quiz: [
      ["Fill the blank: ご家族《かぞく》 と 相談《そうだん》 ＿ 結果《けっか》、 入院《にゅういん》 する こと に しました。", ["した", "する", "して"], 0, "A verb takes the た-form before 結果《けっか》."],
      ["慎重《しんちょう》 な あまり、 なかなか 決《き》められない means:", ["He is not very careful, so he decides quickly.", "He is so cautious that he can hardly make a decision.", "He made the decision carefully after a long time."], 1, "な-adjective + な あまり means \"so ... that\"; あまり 〜ない would mean \"not very\"."],
      ["How would you tell a patient on the phone that the clinic is closed because it is a public holiday?", ["祝日《しゅくじつ》 に つき 休診《きゅうしん》 で ある。", "祝日《しゅくじつ》 の あまり 休《やす》み です。", "祝日《しゅくじつ》 な ので、 お休《やす》み を いただいて います。"], 2, "に つき is for signs and notices; in speech say ので."],
      ["Fill the blank (chart note): 食事量《しょくじりょう》 が 減《へ》って いる ＿、 気分《きぶん》 の 落《お》ち込《こ》み が 疑《うたが》われる。", ["こと から", "あまり", "に つき"], 0, "Evidence for a clinical judgement takes こと から."],
      ["あまり の 暑《あつ》さ に、 外《そと》 に 出《で》る 気《き》 に なれません でした means:", ["It was not very hot, so I went outside.", "The heat was so intense that I did not feel like going out.", "Because I went out too much, I felt the heat."], 1, "あまり の + noun + に means \"because the ... was so great\"."],
      ["Which of these sentences is natural?", ["不安《ふあん》 の あまり、 一緒《いっしょ》 に 来《き》て ください。", "寒《さむ》い こと から、 コート を 着《き》ます。", "不安《ふあん》 の あまり、 夜中《よなか》 に 何度《なんど》 も 目《め》 が 覚《さ》めました。"], 2, "あまり reports a result and is not followed by a request; こと から is not used for an everyday personal reason."]
    ]
  }
});
