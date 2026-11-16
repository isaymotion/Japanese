/* Dialogues part 3: N2 (0.22.0). DRAFT FOR REVIEW by a native Japanese speaker. Shape: see js/data/dialogues.js. */
window.DIALOGUES = window.DIALOGUES || [];
window.DIALOGUES.push(
  {
    id: 'shoukai-denwa', level: 'N2', title: "Phoning the referring clinic",
    roles: ['You (hospital psychiatrist)', 'Dr. Kondo (clinic doctor)'], you: 0,
    lines: [
      [0, "お忙《いそが》しい ところ 恐《おそ》れ入《い》ります。 精神科《せいしんか》 の サントス と 申《もう》します。 近藤《こんどう》先生《せんせい》 で いらっしゃいます か。", "Sorry to call when you are busy. This is Dr. Santos from psychiatry. Am I speaking to Dr. Kondo?"],
      [1, "はい、 近藤《こんどう》 です。 いつも お世話《せわ》 に なって おります。", "Yes, this is Kondo. Thank you for all your help."],
      [0, "こちら こそ、 お世話《せわ》 に なって おります。 先日《せんじつ》 ご紹介《しょうかい》 いただいた 長谷川《はせがわ》さん の 件《けん》 で お電話《でんわ》いたしました。", "Thank you, likewise. I'm calling about Mrs. Hasegawa, whom you referred to us the other day."],
      [1, "わざわざ ありがとう ございます。 その後《ご》、 いかが でしょう か。", "Thank you for taking the trouble. How has she been since?"],
      [0, "昨日《きのう》 外来《がいらい》 で 拝見《はいけん》しました。 お手紙《てがみ》 に 基《もと》づいて お話《はなし》 を 伺《うかが》った ところ、 抑《よく》うつ が 続《つづ》いて いる と 考《かんが》えられます。", "I saw her in outpatients yesterday. When I took the history based on your letter, it appears her depression is continuing."],
      [1, "そう です か。 こちら では お話《はなし》 を 伺《うかが》い ながら 様子《ようす》 を 見《み》て きました が、 なかなか 改善《かいぜん》しません でした。", "I see. Here I had been following her while listening to her, but she didn't really improve."],
      [0, "二《ふた》つ ほど 伺《うかが》いたい こと が ございます。 以前《いぜん》 に も 気分《きぶん》 が 落《お》ち込《こ》んだ 時期《じき》 が あった か、 ご存《ぞん》じ でしょう か。", "There are a couple of things I'd like to ask. Do you know whether she has had periods of low mood before?"],
      [1, "私《わたし》 の 知《し》る 限《かぎ》り では、 ありません。 ご本人《ほんにん》 も 初《はじ》めて だ と おっしゃって いました。", "Not as far as I know. She also said it was the first time."],
      [0, "ご主人《しゅじん》 を 亡《な》くされた の を きっかけ に 落《お》ち込《こ》まれた と 伺《うかが》いました が、 それ 以前《いぜん》 は いかが でした か。", "I understand her low mood began when she lost her husband. How was she before that?"],
      [1, "血圧《けつあつ》 の ほか は 特《とく》 に 問題《もんだい》 なく、 家《いえ》 の こと も きちんと こなされる 方《かた》 でした。", "Apart from her blood pressure she had no particular problems, and she was someone who ran her home well."],
      [0, "そう でした か。 お酒《さけ》 に ついて は、 何《なに》 か お聞《き》き に なって います か。", "I see. Have you heard anything about alcohol?"],
      [1, "ほとんど 召《め》し上《あ》がらない と 伺《うかが》って います。", "I was told she hardly drinks."],
      [0, "承知《しょうち》いたしました。 今後《こんご》 は 当院《とういん》 で 治療《ちりょう》 を 進《すす》めつつ、 経過《けいか》 を ご報告《ほうこく》させて いただきます。", "Understood. From now on we will continue her treatment here, and I will keep you informed of her progress."],
      [1, "ありがとう ございます。 こちら で できる こと が あれば、 何《なん》 でも おっしゃって ください。", "Thank you. If there is anything I can do on my side, please just say."],
      [0, "心強《こころづよ》い です。 落《お》ち着《つ》かれた 際《さい》 に は、 また 先生《せんせい》 の ところ へ お戻《もど》し したい と 存《ぞん》じます。", "That is reassuring. Once she has settled, I would like to send her back to your care."],
      [1, "ぜひ お願《ねが》いします。 長谷川《はせがわ》さん の こと、 どうぞ よろしく お願《ねが》いいたします。", "Please do. I leave Mrs. Hasegawa in your hands."],
      [0, "かしこまりました。 本日《ほんじつ》 は お時間《じかん》 を いただき、 ありがとう ございました。", "Certainly. Thank you for your time today."]
    ]
  },
  {
    id: 'nyuuin-no-susume', level: 'N2', title: "Recommending admission to a family",
    roles: ['You (doctor)', 'Mrs. Ishii (wife)'], you: 0,
    lines: [
      [0, "石井《いしい》さん、 今日《きょう》 は ご主人《しゅじん》 の こと で、 ご相談《そうだん》 したい こと が あります。", "Mrs. Ishii, today there is something I'd like to discuss with you about your husband."],
      [1, "はい。 家《いえ》 では ほとんど 食《た》べなくて、 心配《しんぱい》 で なりません。", "Yes. He hardly eats at home, and I can't stop worrying."],
      [0, "伺《うかが》った お話《はなし》 から する と、 この 一週間《いっしゅうかん》 は 食事《しょくじ》 の 量《りょう》 が 減《へ》る 一方《いっぽう》 の よう です ね。", "From what you have told me, it seems the amount he eats has kept going down this past week."],
      [1, "はい。 声《こえ》 を かけて も、 「いい」 と 言《い》う だけ なん です。", "Yes. Even when I talk to him, he just says, 'I'm fine.'"],
      [0, "今日《きょう》 の 診察《しんさつ》 の 結果《けっか》 から 見《み》て、 私《わたし》 は 入院《にゅういん》 で の 治療《ちりょう》 を お勧《すす》めしたい と 考《かんが》えて います。", "Based on today's examination, I would like to recommend treatment in hospital."],
      [1, "入院《にゅういん》 です か。 そこ まで 悪《わる》い ん です か。", "Admission? Is it that bad?"],
      [0, "理由《りゆう》 は いくつ か あります。 まず、 この まま 食《た》べられない 状態《じょうたい》 が 続《つづ》く と、 体《からだ》 が 弱《よわ》りかねません。", "There are several reasons. First, if he keeps being unable to eat, his body could become weak."],
      [1, "確《たし》か に、 ずいぶん やせました。", "It's true, he has lost a lot of weight."],
      [0, "入院《にゅういん》 なら、 体《からだ》 の 状態《じょうたい》 を 毎日《まいにち》 見《み》ながら 治療《ちりょう》 を 調整《ちょうせい》 できます。 奥様《おくさま》 に も 少《すこ》し 休《やす》んで いただけます。", "In hospital, we can adjust his treatment while checking his physical condition every day. And you can rest a little, too."],
      [1, "でも、 私《わたし》 が もっと ちゃんと 見《み》て いれば、 こう は ならなかった ん じゃ ない か と 思《おも》って しまって。", "But I can't help thinking that if I had watched him more carefully, it wouldn't have come to this."],
      [0, "ご自分《じぶん》 を 責《せ》める こと は ありません。 ここ まで よく 支《ささ》えて こられました。 もう 一《ひと》つ、 大切《たいせつ》 な こと を 伺《うかが》って も いい です か。", "There is no need to blame yourself. You have supported him well all this time. May I ask you one more important thing?"],
      [1, "はい、 何《なん》 でしょう か。", "Yes, what is it?"],
      [0, "最近《さいきん》、 ご主人《しゅじん》 が 「死《し》にたい」 や 「消《き》えたい」 と いう よう な こと を 口《くち》 に された こと は ありません か。", "Recently, has your husband said anything like 'I want to die' or 'I want to disappear'?"],
      [1, "はっきり とは 言《い》いません が、 「迷惑《めいわく》 を かけて ばかり だ」 と は よく 言《い》って います。", "He doesn't say it outright, but he often says, 'I'm nothing but a burden.'"],
      [0, "教《おし》えて いただき、 ありがとう ございます。 その 点《てん》 も 含《ふく》めて、 病院《びょういん》 で 見守《みまも》りたい の です。 石井《いしい》さん は どう お考《かんが》え です か。", "Thank you for telling me. Including that, I'd like us to watch over him in hospital. What do you think, Mrs. Ishii?"],
      [1, "正直《しょうじき》、 迷《まよ》って います。 でも、 この まま 家《いえ》 で 心配《しんぱい》して いる より、 むしろ その ほう が 安心《あんしん》 か も しれません。", "Honestly, I'm torn. But rather than staying at home worrying like this, that might actually be more reassuring."],
      [0, "迷《まよ》う の は 当然《とうぜん》 です。 ご主人《しゅじん》 に よく ご説明《せつめい》した 上《うえ》 で、 ご本人《ほんにん》 の お気持《きも》ち も 伺《うかが》って 決《き》めましょう。", "It's natural to feel torn. I'll explain it to your husband carefully, hear how he feels, and then we'll decide."],
      [1, "わかりました。 主人《しゅじん》 に 説明《せつめい》して いただく とき は、 私《わたし》 も そば に いさせて ください。", "I understand. When you explain it to him, please let me be there beside him."]
    ]
  },
  {
    id: 'shourei-kentoukai', level: 'N2', title: "At the case conference",
    roles: ['You (resident)', 'Dr. Hayashi (senior doctor)'], you: 0,
    lines: [
      [0, "それでは、 症例《しょうれい》 を 報告《ほうこく》させて いただきます。 石井《いしい》さん、 五十代《ごじゅうだい》 の 男性《だんせい》、 うつ病《びょう》 で 入院中《にゅういんちゅう》 の 方《かた》 です。", "I will now present the case. Mr. Ishii, a man in his fifties, currently an inpatient with depression."],
      [1, "入院《にゅういん》 の きっかけ は 何《なん》 でした か。", "What led to the admission?"],
      [0, "食事《しょくじ》 が ほとんど とれなく なった こと です。 奥様《おくさま》 に よる と、 数《すう》か月《げつ》 に わたって 気分《きぶん》 の 落《お》ち込《こ》み が 続《つづ》いて いました。", "He had become almost unable to eat. According to his wife, his low mood had continued over several months."],
      [1, "現在《げんざい》 の 状態《じょうたい》 は どう です か。", "What is his current state?"],
      [0, "入院《にゅういん》 から 二週間《にしゅうかん》 が 経《た》ち、 食事量《しょくじりょう》 は 回復《かいふく》しつつ あります。", "Two weeks have passed since admission, and the amount he eats is recovering."],
      [1, "睡眠《すいみん》 は どう です か。 何《なに》 を もと に 評価《ひょうか》して います か。", "What about sleep? What are you basing your assessment on?"],
      [0, "看護記録《かんごきろく》 に 基《もと》づいて 申《もう》し上《あ》げます と、 夜中《よなか》 に 目《め》 が 覚《さ》める 回数《かいすう》 は 減《へ》って きて います。", "Going by the nursing records, he is waking up fewer times in the night."],
      [1, "なるほど。 気分《きぶん》 の 面《めん》 は どう 見《み》て います か。", "I see. How do you see his mood?"],
      [0, "表情《ひょうじょう》 から する と、 まだ 抑《よく》うつ 気分《きぶん》 は 残《のこ》って いる と 考《かんが》えられます。 ただ、 自分《じぶん》 から 話《はな》す こと が 増《ふ》えました。", "Judging from his facial expression, low mood is probably still present. However, he now talks more of his own accord."],
      [1, "希死念慮《きしねんりょ》 に 関《かん》して は、 どう です か。", "What about thoughts of death?"],
      [0, "入院時《にゅういんじ》 は 「消《き》えたい」 と いう 発言《はつげん》 が ありました が、 現在《げんざい》 は 否定《ひてい》して います。 毎日《まいにち》 確認《かくにん》 を 続《つづ》けて います。", "On admission he said, 'I want to disappear,' but he now denies it. We continue to check every day."],
      [1, "回復期《かいふくき》 こそ 慎重《しんちょう》 に 見《み》る べき です ね。 退院《たいいん》 に 向《む》けて の 課題《かだい》 は 何《なん》 です か。", "The recovery phase is exactly when we should watch carefully. What are the issues ahead of discharge?"],
      [0, "ご本人《ほんにん》 は 早《はや》く 仕事《しごと》 に 戻《もど》りたい と 言《い》って いる ものの、 体力《たいりょく》 が まだ 十分《じゅうぶん》 では ありません。", "Although he says he wants to go back to work soon, his stamina is not yet sufficient."],
      [1, "焦《あせ》り は 再発《さいはつ》 に つながりかねません ね。 ご家族《かぞく》 と は どう 進《すす》める つもり です か。", "Haste could well lead to a relapse. How do you plan to proceed with the family?"],
      [0, "奥様《おくさま》 の ご意見《いけん》 も 伺《うかが》った 上《うえ》 で、 外泊《がいはく》 を 段階的《だんかいてき》 に 試《ため》す 予定《よてい》 です。", "After hearing his wife's views as well, we plan to try overnight leave in stages."],
      [1, "いい と 思《おも》います。 ご家族《かぞく》 の 支《ささ》え が ある から こそ できる 計画《けいかく》 です ね。 次回《じかい》 も 経過《けいか》 を 報告《ほうこく》して ください。", "I think that's good. It's a plan that works precisely because the family is supportive. Please report on his progress next time too."],
      [0, "はい、 承知《しょうち》いたしました。 ご指導《しどう》 ありがとう ございました。", "Yes, certainly. Thank you for your guidance."]
    ]
  },
  {
    id: 'menkai-no-onegai', level: 'N2', title: "A request the ward cannot grant",
    roles: ['You (ward doctor)', 'Mr. Ogawa (brother)'], you: 0,
    lines: [
      [0, "小川《おがわ》さん、 担当医《たんとうい》 の サントス です。 面会《めんかい》 を ご希望《きぼう》 だ と 伺《うかが》いました。", "Mr. Ogawa, I'm Dr. Santos, the doctor in charge. I hear you would like to visit."],
      [1, "ええ。 仕事《しごと》 が 終《お》わって 急《いそ》いで 来《き》た ん です。 少《すこ》し だけ でも 妹《いもうと》 に 会《あ》えません か。", "Yes. I rushed here after work. Couldn't I see my sister, even just for a little while?"],
      [0, "お仕事《しごと》 帰《がえ》り に お越《こ》し いただき、 ありがとう ございます。 恐《おそ》れ入《い》ります が、 本日《ほんじつ》 の 面会時間《めんかいじかん》 は もう 終了《しゅうりょう》して おります。", "Thank you for coming straight from work. I'm sorry, but today's visiting hours are already over."],
      [1, "五分《ごふん》 でも いい ん です。 顔《かお》 を 見《み》たら すぐ 帰《かえ》ります から。", "Five minutes is enough. I'll leave as soon as I've seen her face."],
      [0, "お気持《きも》ち は よく わかります。 ですが、 時間外《じかんがい》 の 面会《めんかい》 は お受《う》けいたしかねます。", "I fully understand how you feel. But we are unable to accept visits outside visiting hours."],
      [1, "どうして です か。 家族《かぞく》 なのに。", "Why not? I'm family."],
      [0, "夜《よる》 は ほか の 患者《かんじゃ》さん も 休《やす》む 時間《じかん》 です。 ご家族《かぞく》 だ から と いって、 例外《れいがい》 に する わけ に は いかない ん です。", "The evening is when the other patients rest too. Just because you are family does not mean we can make an exception."],
      [1, "そう です か。 じゃあ、 妹《いもうと》 が 元気《げんき》 に して いる か だけ でも 教《おし》えて ください。", "I see. Then at least tell me whether my sister is all right."],
      [0, "ご本人《ほんにん》 から 了解《りょうかい》 を いただいて います ので、 お伝《つた》え できます。 昨日《きのう》 より 落《お》ち着《つ》いて、 夕食《ゆうしょく》 も よく 食《た》べて いました。", "She has given her permission, so I can tell you. She is calmer than yesterday, and she ate her dinner well."],
      [1, "それ を 聞《き》いて 安心《あんしん》しました。 着替《きが》え を 持《も》って きた ん です が、 渡《わた》して もらえます か。", "I'm relieved to hear that. I brought her a change of clothes. Could you give them to her?"],
      [0, "お預《あず》かりいたします。 念《ねん》 の ため 中身《なかみ》 を 確認《かくにん》 の 上《うえ》、 今夜《こんや》 の うち に 看護師《かんごし》 から お渡《わた》しします。", "I'll take them. After checking the contents, just to be safe, a nurse will hand them to her this evening."],
      [1, "助《たす》かります。 平日《へいじつ》 は どうしても 面会時間《めんかいじかん》 に 間《ま》 に 合《あ》わない ん です。", "That helps. On weekdays I just can't make it in time for visiting hours."],
      [0, "それ でしたら、 週末《しゅうまつ》 の 面会《めんかい》 を ご利用《りよう》 ください。 私《わたし》 と の 面談《めんだん》 に 限《かぎ》り、 ご予約《よやく》 が あれば 夕方《ゆうがた》 遅《おそ》く でも 調整《ちょうせい》 できます。", "In that case, please use the weekend visiting times. And for a meeting with me only, if you book ahead, I can arrange it even late in the evening."],
      [1, "本当《ほんとう》 です か。 それ なら、 来週《らいしゅう》 ぜひ お願《ねが》いしたい です。", "Really? Then I'd very much like that next week."],
      [0, "かしこまりました。 日程《にってい》 が 決《き》まり 次第《しだい》、 こちら から お電話《でんわ》いたします。", "Certainly. As soon as the date is fixed, I will call you."],
      [1, "無理《むり》 を 言《い》って、 すみません でした。 妹《いもうと》 に よろしく 伝《つた》えて ください。", "I'm sorry for asking the impossible. Please give my sister my regards."],
      [0, "いいえ。 お兄様《にいさま》 が 来《き》て くださった こと、 必《かなら》ず お伝《つた》えします。 お気《き》 を つけて お帰《かえ》り ください。", "Not at all. I'll be sure to tell her that you came. Please take care on your way home."]
    ]
  },
  {
    id: 'senpai-ni-soudan', level: 'N2', title: "Asking a senior resident for advice",
    roles: ['You (first-year resident)', 'Dr. Nishimura (senior resident)'], you: 0,
    lines: [
      [0, "西村《にしむら》先生《せんせい》、 少《すこ》し いい です か。 さっき の 面接《めんせつ》 の こと で、 相談《そうだん》 が ある ん です。", "Dr. Nishimura, do you have a moment? I'd like your advice about the interview I just did."],
      [1, "いい よ。 どうした の？ 元気《げんき》 ない ね。", "Sure. What happened? You look down."],
      [0, "患者《かんじゃ》さん が 急《きゅう》 に 泣《な》き出《だ》して、 何《なに》 か 言《い》わなきゃ と 焦《あせ》る あまり、 しゃべりすぎて しまいました。", "The patient suddenly started crying, and I was so anxious to say something that I ended up talking too much."],
      [1, "ああ、 沈黙《ちんもく》 が 怖《こわ》かった ん だ ね。 最初《さいしょ》 は みんな そう だ よ。", "Ah, the silence scared you. Everyone is like that at first."],
      [0, "励《はげ》まそう と した ばかり に、 患者《かんじゃ》さん の 話《はなし》 を 止《と》めて しまった 気《き》 が する ん です。", "I feel that just because I tried to encourage her, I stopped her from talking."],
      [1, "その 後《あと》、 患者《かんじゃ》さん は どう だった？", "How was the patient after that?"],
      [0, "泣《な》き止《や》んだ ものの、 その 後《あと》 は あまり 話《はな》して くれません でした。", "She stopped crying, but after that she didn't say much."],
      [1, "なるほど ね。 泣《な》いて いる とき は、 無理《むり》 に 何《なに》 か 言《い》う こと は ない ん だ よ。", "I see. When someone is crying, there's no need to force yourself to say something."],
      [0, "黙《だま》って いる と、 冷《つめ》たい と 受《う》け取《と》られかねない と 思《おも》って いました。", "I thought that if I stayed quiet, she might think I was cold."],
      [1, "むしろ 逆《ぎゃく》 だ よ。 黙《だま》って そば に いて こそ、 ちゃんと 聞《き》いて もらえて いる と 感《かん》じる 人《ひと》 も 多《おお》い ん だ。", "It's actually the opposite. It's precisely when you stay quietly beside them that many people feel they are really being heard."],
      [0, "ティッシュ を 渡《わた》して、 少《すこ》し 待《ま》つ だけ で いい ん です か。", "So it's enough to hand her a tissue and wait a little?"],
      [1, "それ で 十分《じゅうぶん》。 落《お》ち着《つ》いて きたら、 「今《いま》 どんな 気持《きも》ち です か」 って 短《みじか》く 聞《き》けば いい。", "That's enough. Once she calms down, just ask briefly, 'How are you feeling right now?'"],
      [0, "あいづち は どう です か。 日本語《にほんご》 だ と、 つい 「はい、 はい」 ばかり に なって しまう ん です。", "What about aizuchi? In Japanese I keep ending up saying nothing but 'hai, hai.'"],
      [1, "「そう です か」 「つらかった です ね」 くらい で いい よ。 言葉《ことば》 より、 うなずき と 声《こえ》 の 調子《ちょうし》 が 大事《だいじ》 だ ね。", "Something like 'I see' or 'That must have been hard' is fine. Nodding and your tone of voice matter more than the words."],
      [0, "わかりました。 次《つぎ》 は 焦《あせ》らず に、 沈黙《ちんもく》 も 大切《たいせつ》 に して みます。", "I understand. Next time I won't rush, and I'll try to value the silence too."],
      [1, "うん。 自分《じぶん》 で 気《き》づけた だけ でも、 たいした もん だ よ。 次《つぎ》 の 面接《めんせつ》 で 試《ため》して みて。", "Good. Just noticing it yourself is pretty impressive. Try it in your next interview."]
    ]
  },
  {
    id: 'fukushoku-no-soudan', level: 'N2', title: "Planning a return to work",
    roles: ['You (doctor)', 'Mr. Mori (outpatient)'], you: 0,
    lines: [
      [0, "森《もり》さん、 この 二週間《にしゅうかん》 は いかが でした か。", "Mr. Mori, how have the past two weeks been?"],
      [1, "おかげさま で、 だいぶ 楽《らく》 に なりました。 朝《あさ》 も 決《き》まった 時間《じかん》 に 起《お》きられて います。", "Thanks to you, I feel much better. I've been able to get up at a set time in the morning too."],
      [0, "それ は よかった です。 眠《ねむ》り が 整《ととの》う に つれて、 表情《ひょうじょう》 も 明《あか》るく なって きました ね。", "I'm glad. As your sleep has settled, your face has brightened too."],
      [1, "ありがとう ございます。 それ で、 そろそろ 仕事《しごと》 に 戻《もど》りたい と 考《かんが》えて いる ん です。", "Thank you. So, I've been thinking that I'd like to go back to work soon."],
      [0, "そう 思《おも》える よう に なった の も、 回復《かいふく》 の しるし です ね。 職場《しょくば》 から は 何《なに》 か 言《い》われて います か。", "Being able to think that way is also a sign of recovery. Has your workplace said anything?"],
      [1, "上司《じょうし》 は 「焦《あせ》らなくて いい」 と 言《い》って くれて います。 でも、 同僚《どうりょう》 に 申《もう》し訳《わけ》なくて しょうがない ん です。", "My boss tells me not to rush. But I can't help feeling bad towards my colleagues."],
      [0, "その お気持《きも》ち は 自然《しぜん》 です。 ただ、 元気《げんき》 に なった から と いって、 すぐ 元《もと》 の 仕事量《しごとりょう》 に 戻《もど》す の は おすすめ できません。", "That feeling is natural. But just because you feel better doesn't mean I'd advise going straight back to your old workload."],
      [1, "やっぱり、 そう です か。", "I thought so."],
      [0, "まず は 短《みじか》い 時間《じかん》 から 始《はじ》めて、 体調《たいちょう》 に 応《おう》じて 少《すこ》し ずつ 増《ふ》やして いく の が いい と 思《おも》います。", "I think it's best to start with short hours and increase them little by little according to how you feel."],
      [1, "最初《さいしょ》 は 午前中《ごぜんちゅう》 だけ、 と いう 感《かん》じ でしょう か。", "Something like mornings only, at first?"],
      [0, "そう です ね。 会社《かいしゃ》 の 決《き》まり も ある と 思《おも》います ので、 上司《じょうし》 の 方《かた》 と よく 相談《そうだん》した 上《うえ》 で 決《き》めましょう。", "Yes. Your company probably has its own rules, so let's decide after you've talked it over properly with your boss."],
      [1, "わかりました。 ただ、 途中《とちゅう》 で また 調子《ちょうし》 が 悪《わる》く なったら と 思《おも》う と、 少《すこ》し 不安《ふあん》 です。", "I understand. But when I think about getting worse again partway through, I feel a bit anxious."],
      [0, "大切《たいせつ》 な 点《てん》 です。 森《もり》さん の 場合《ばあい》、 調子《ちょうし》 が 崩《くず》れ始《はじ》める 最初《さいしょ》 の サイン は 何《なん》 だ と 思《おも》います か。", "That's an important point. In your case, what do you think are the first signs that things are starting to slip?"],
      [1, "眠《ねむ》り が 浅《あさ》く なる こと と、 休《やす》み の 日《ひ》 も 仕事《しごと》 の こと が 頭《あたま》 から 離《はな》れなく なる こと です。 休職《きゅうしょく》して はじめて 気《き》づきました。", "My sleep getting lighter, and not being able to get work out of my head even on my days off. I only noticed that after I took leave."],
      [0, "では、 一緒《いっしょ》 に メモ に 書《か》き出《だ》して おきましょう。 その サイン が 数日《すうじつ》 続《つづ》いたら、 予約《よやく》 を 待《ま》たず に ご連絡《れんらく》 ください。", "Then let's write them down together on a note. If those signs go on for a few days, please contact us without waiting for your appointment."],
      [1, "はい。 もし 気分《きぶん》 が 落《お》ち込《こ》んで、 どう に も ならない とき は どう すれば いい です か。", "All right. And what should I do if my mood drops and I can't cope at all?"],
      [0, "その とき は 我慢《がまん》せず に 受診《じゅしん》して ください。 夜間《やかん》 なら 地域《ちいき》 の 相談窓口《そうだんまどぐち》 も あります。 一人《ひとり》 で 抱《かか》え込《こ》む 必要《ひつよう》 は ありません。", "Then don't hold it in; please come and see us. At night there is also the local support line. You don't have to carry it alone."],
      [1, "ありがとう ございます。 焦《あせ》らず に、 一歩《いっぽ》 ずつ やって みます。", "Thank you. I'll try to take it one step at a time without rushing."]
    ]
  }
);
