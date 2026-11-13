/* Likely patient replies, part 4: more replies to existing sections (0.16.0). APPEND only. STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician. */
window.PSYCH_ANSWERS = window.PSYCH_ANSWERS || { common: [], sections: {} };
(function (S, add) { Object.keys(add).forEach((k) => (S[k] = (S[k] || []).concat(add[k]))); })(window.PSYCH_ANSWERS.sections, {
  'violence': [
    [`警察《けいさつ》 の お世話《せわ》 に なった こと は 一度《いちど》 も ありません。`, `I have never been in trouble with the police.`],
    [`カッと なる と、 物《もの》 に 当《あ》たって しまう こと は あります。`, `When I lose my temper, I sometimes take it out on things.`, `Damage to property; ask whether it has ever turned to people and whether it is getting worse.`],
    [`若《わか》い ころ、 ケンカ で 警察《けいさつ》 に 捕《つか》まった こと が あります。`, `When I was young, I was picked up by the police for fighting.`, `Past violence with police contact; ask how often, how recent, and about alcohol at the time.`]
  ],
  'family-hx': [
    [`母《はは》 は 心療内科《しんりょうないか》 に 通《かよ》って いた と 聞《き》いて います。`, `I've heard my mother used to go to a psychosomatic (mind-body) clinic.`, `Such clinics see stress illness, anxiety and depression; ask what she was told, how long she went and whether medicine helped.`],
    [`叔父《おじ》 は 若《わか》い ころ から 部屋《へや》 に こもって、 独《ひと》り言《ごと》 を 言《い》って いました。`, `My uncle shut himself in his room from a young age and talked to himself.`, `Lay description of possible psychosis in a relative; ask about treatment and diagnosis.`],
    [`いとこ が 若《わか》く して 亡《な》くなりました が、 詳《くわ》しい こと は 誰《だれ》 も 話《はな》して くれません。`, `A cousin died young, but nobody will tell me the details.`, `May hide a suicide in the family; ask gently but directly whether the cousin took their own life.`]
  ],
  'mania': [
    [`その とき は、 二週間《にしゅうかん》 くらい 続《つづ》きました。`, `That time, it lasted about two weeks.`, `Meets the one-week duration for a manic episode if enough other symptoms were present.`],
    [`夜中《よなか》 でも 平気《へいき》 で、 友達《ともだち》 に 次々《つぎつぎ》 電話《でんわ》 を かけて いました。`, `I thought nothing of phoning one friend after another in the middle of the night.`, `Increased activity and disinhibition.`],
    [`自分《じぶん》 に は 特別《とくべつ》 な 才能《さいのう》 が ある と、 本気《ほんき》 で 思《おも》って いました。`, `I truly believed I had a special talent.`, `Grandiosity; ask how he sees it now.`]
  ],
  'mse-describe': [
    [`着替《きが》える 気力《きりょく》 も なくて、 ずっと 同《おな》じ 服《ふく》 を 着《き》て います。`, `I don't have the energy to change, so I keep wearing the same clothes.`, `Poor self-care from low energy; screen for depression.`],
    [`顔《かお》 に 出《で》ない だけ で、 心《こころ》 の 中《なか》 は つらい ん です。`, `It just doesn't show on my face; inside it's hard.`, `Do not judge mood from facial expression alone.`],
    [`考《かんが》え が まとまらなくて、 話《はなし》 が あちこち に 飛《と》んで しまいます。`, `My thoughts won't come together and my talk jumps around.`, `Self-reported disorganised thinking.`]
  ],
  'explain': [
    [`家族《かぞく》 に は、 どう 説明《せつめい》 したら いい です か。`, `How should I explain this to my family?`, `Offer to meet the family together, with consent.`],
    [`薬《くすり》 を 飲《の》む と、 癖《くせ》 に なりません か。`, `Won't the medicine be habit-forming?`, `Common fear of dependence; explain which medicines carry this risk (some sleeping and anti-anxiety medicines) and which do not (antidepressants, though they should not be stopped suddenly).`],
    [`仕事《しごと》 は 続《つづ》けて も 大丈夫《だいじょうぶ》 です か。`, `Is it all right to keep working?`, `Discuss workload, time off and a gradual return.`]
  ],
  'elderly': [
    [`お金《かね》 の 管理《かんり》 は、 もう 娘《むすめ》 に 任《まか》せて います。`, `I've left handling the money to my daughter now.`, `Loss of an everyday task; ask when and why it changed.`],
    [`薬《くすり》 を 飲《の》んだ か どう か、 時々《ときどき》 わからなく なる ん です。`, `Sometimes I can't tell whether I've taken my medicine.`, `Risk of missed or doubled doses; arrange a pill box or supervision.`],
    [`昔《むかし》 の こと は よく 覚《おぼ》えて いる ん です けど ね。`, `I remember the old days well, though.`, `Recent memory is often lost before remote memory in early dementia.`]
  ],
  'admission': [
    [`入院中《にゅういんちゅう》 に スマホ は 使《つか》えます か。`, `Can I use my phone while I'm in hospital?`, `Check the ward rules before answering.`],
    [`自分《じぶん》 から 入院《にゅういん》 したい です。 家《いえ》 に いる と 危《あぶ》ない 気《き》 が する ので。`, `I want to be admitted. I feel it's dangerous for me to be at home.`, `Ask directly what feels dangerous and whether there are thoughts of suicide.`],
    [`退院《たいいん》 したら、 また 前《まえ》 と 同《おな》じ 生活《せいかつ》 に 戻《もど》れます か。`, `After I'm discharged, can I go back to my life as it was?`]
  ],
  'consent': [
    [`会社《かいしゃ》 に は 知《し》られたく ない ん です。`, `I don't want my workplace to find out.`, `Fear for the job; explain plainly who can and cannot be told, and when.`],
    [`通訳《つうやく》 の 人《ひと》 が いて くれる と 助《たす》かります。`, `It would help to have an interpreter.`],
    [`少《すこ》し 考《かんが》える 時間《じかん》 を もらって も いい です か。`, `May I have some time to think it over?`, `Respect this; give the information in writing if possible.`]
  ],
  'closing': [
    [`今日《きょう》 は 話《はな》せて、 少《すこ》し 気持《きも》ち が 軽《かる》く なりました。`, `Being able to talk today has made me feel a little lighter.`],
    [`次《つぎ》 まで に、 何《なに》 か 気《き》 を つける こと は あります か。`, `Is there anything I should be careful about until next time?`],
    [`具合《ぐあい》 が 悪《わる》く なったら、 どう すれば いい です か。`, `What should I do if I get worse?`, `Give a clear crisis plan: return to hospital or call 119.`]
  ],
  'opening': [
    [`どう 呼《よ》んで いただいて も 構《かま》いません。`, `You can call me whatever you like.`],
    [`座《すわ》る より、 立《た》って いる ほう が 落《お》ち着《つ》きます。`, `I feel calmer standing than sitting.`, `Restlessness, agitation or akathisia; allow it and observe.`],
    [`正直《しょうじき》、 何《なに》 から 話《はな》せば いい か わかりません。`, `Honestly, I don't know where to start.`, `Offer a simple open question to begin.`]
  ]
});
