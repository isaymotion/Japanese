/* Mood episode checker: DSM-5-TR major depressive, manic and hypomanic episode criteria in Japanese, with
   the PHQ-9 and the Mood Disorder Questionnaire (MDQ) as add-on screens. Hanashimashō (Japanese).
   STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Criteria are paraphrased from the manual. The PHQ-9 and MDQ items below are INTERVIEW PARAPHRASES (how a
   clinician would ask each item in conversation, polite です/ます), NOT the published Japanese instruments; for a
   documented score administer the published Japanese version of the PHQ-9 or of the MDQ. Field names stay `tl`, `f`,
   `c` for engine compatibility: `tl` = Japanese, polite です/ます; items also carry `c` = gentle plain form, used only
   to build the phrase section. `en` = English meaning, `n` = clinician note.
   Lines with R('sectionId:index') reuse phrases from PSYCH_SECTIONS. Nothing here stores patient information. */
(function () {
  const ref = (r) => { const [sid, i] = r.split(':'); const s = (window.PSYCH_SECTIONS || []).find((x) => x.id === sid); return s ? s.phrases[+i] : null; };
  const R = (r, extra) => { const p = ref(r); return Object.assign({ tl: p ? p.f : '', en: p ? p.en.replace(/^[A-Z] · /, '') : '', n: p ? p.n : '' }, extra || {}); };
  const G = ''; // Japanese has no gendered forms; kept for engine compatibility.

  /* Major depressive episode: A1–A2 are the gate (at least one), A1–A9 need five, two weeks, nearly every day. */
  const MDE = [
    { n: 1, gate: true, b: 'Mood', en: 'Depressed mood most of the day, nearly every day', q: R('depression:1') },
    { n: 2, gate: true, b: 'Interest', en: 'Markedly diminished interest or pleasure in almost all activities', q: R('depression:2') },
    { n: 3, b: 'A', en: 'Significant weight or appetite change', q: R('depression:11') },
    { n: 4, b: 'S', en: 'Insomnia or hypersomnia nearly every day', q: R('depression:5', { n: 'Sleep: insomnia or hypersomnia. Early waking suggests melancholic features.' + G }) },
    { n: 5, b: 'P', en: 'Psychomotor agitation or retardation, observable by others', q: R('depression:12', { n: 'Psychomotor retardation or agitation, observable by others.' + G }) },
    { n: 6, b: 'E', en: 'Fatigue or loss of energy', q: R('depression:9', { n: 'Energy.' + G }) },
    { n: 7, b: 'G', en: 'Worthlessness or excessive or inappropriate guilt', q: R('depression:8', { n: 'Guilt or worthlessness. If the guilt is fixed and out of proportion (an unforgivable sin, having ruined the family), ask about psychotic features.' + G }) },
    { n: 8, b: 'C', en: 'Diminished ability to think or concentrate, or indecisiveness', q: R('depression:10') },
    { n: 9, b: 'S', en: 'Recurrent thoughts of death, suicidal ideation, plan, or attempt', q: R('depression:13'), risk: true }
  ];
  /* Manic or hypomanic episode: A is the gate (elevated/expansive or irritable mood with increased energy); B1–B7 need three (four if only irritable). */
  const MANIC = [
    { n: 1, b: 'D', en: 'Distractibility', q: R('mania:3') },
    { n: 2, b: 'I', en: 'Excessive involvement in activities with painful consequences', q: R('mania:4') },
    { n: 3, b: 'G', en: 'Inflated self-esteem or grandiosity', q: R('mania:5') },
    { n: 4, b: 'F', en: 'Flight of ideas or racing thoughts', q: R('mania:6') },
    { n: 5, b: 'A', en: 'Increase in goal-directed activity or psychomotor agitation', q: R('mania:7', { n: 'Activity: goal-directed activity or psychomotor agitation.' + G }) },
    { n: 6, b: 'S', en: 'Decreased need for sleep', q: R('mania:8', { n: 'Sleep: decreased need, not insomnia. Ask 何時間《なんじかん》 寝《ね》ました か and whether they felt rested.' + G }) },
    { n: 7, b: 'T', en: 'More talkative than usual or pressure to keep talking', q: R('mania:9', { n: 'Talkativeness or pressured speech.' + G }) }
  ];
  const MANIC_GATE = [
    { id: 'elevated', en: 'Elevated or expansive mood', q: R('mania:0', { n: 'Gate · elevated or expansive mood. ハイ (from English "high") is the everyday word.' + G }) },
    { id: 'irritable', en: 'Irritable mood only', q: R('mania:1') }
  ];
  const EXTRA = {
    mde: [R('depression:16'), R('depression:17'), R('depression:18', { n: 'Bipolar screen. Ask every depressed patient before prescribing an antidepressant; if yes, go to the DIGFAST section.' + G }), R('depression:19'), R('depression:20', { n: 'Mixed features: three or more manic symptoms during the depressive episode.' + G }), R('depression:21'), R('depression:22')],
    manic: [R('mania:2'), R('mania:10'), R('mania:11', { n: 'Hospitalization or marked impairment makes it mania regardless of duration. 入院《にゅういん》 = admission to hospital.' + G }), R('mania:12'), R('mania:13'), R('mania:14')]
  };

  /* PHQ-9 as interview paraphrases (polite in tl, plain in c). Stem: over the last two weeks, how often… 0 not at all, 1 several days, 2 more than half the days, 3 nearly every day. */
  const PHQ9 = {
    title: 'PHQ-9 (depression severity)',
    stem: { tl: `この 二週間《にしゅうかん》 の こと を いくつか お聞《き》きします。 それぞれ に ついて、 全然《ぜんぜん》 なかった か、 数日《すうじつ》 あった か、 半分《はんぶん》 以上《いじょう》 の 日《ひ》 に あった か、 ほとんど 毎日《まいにち》 あった か を 教《おし》えて ください。`, c: `この 二週間《にしゅうかん》 の こと を いくつか 聞《き》く ね。 それぞれ に ついて、 全然《ぜんぜん》 なかった か、 数日《すうじつ》 あった か、 半分《はんぶん》 以上《いじょう》 の 日《ひ》 に あった か、 ほとんど 毎日《まいにち》 あった か 教《おし》えて。`, en: 'I am going to ask you about some things from the last two weeks. For each one, tell me whether it has not happened, happened several days, more than half the days, or nearly every day.' },
    opts: [[`全然《ぜんぜん》 ない`, 0], [`数日《すうじつ》`, 1], [`半分《はんぶん》 以上《いじょう》`, 2], [`ほとんど 毎日《まいにち》`, 3]],
    items: [
      { tl: `この 二週間《にしゅうかん》、 いろいろ な こと に 興味《きょうみ》 が わかなかったり、 何《なに》 か を する 気《き》 に なれなかったり する こと は ありました か。`, c: `この 二週間《にしゅうかん》、 いろいろ な こと に 興味《きょうみ》 が わかなかったり、 何《なに》 か を する 気《き》 に なれなかったり する こと は あった？`, en: 'In these two weeks, have you had little interest or little desire to do things?' },
      { tl: `気分《きぶん》 が 落《お》ち込《こ》んだり、 悲《かな》しく なったり、 希望《きぼう》 が 持《も》てない と 感《かん》じたり しました か。`, c: `気分《きぶん》 が 落《お》ち込《こ》んだり、 悲《かな》しく なったり、 希望《きぼう》 が 持《も》てない と 感《かん》じたり した？`, en: 'Have you felt sad, down, or hopeless?', n: '' },
      { tl: `なかなか 眠《ねむ》れなかったり、 夜中《よなか》 に 何度《なんど》 も 起《お》きて しまったり、 反対《はんたい》 に 寝《ね》すぎたり する こと は ありました か。`, c: `なかなか 眠《ねむ》れなかったり、 夜中《よなか》 に 何度《なんど》 も 起《お》きて しまったり、 反対《はんたい》 に 寝《ね》すぎたり した？`, en: 'Has it been hard to fall asleep or stay asleep, or have you been sleeping too much?', n: '' },
      { tl: `疲《つか》れやすかったり、 元気《げんき》 が 出《で》なかったり しました か。`, c: `疲《つか》れやすかったり、 元気《げんき》 が 出《で》なかったり した？`, en: 'Have you felt tired or had little energy?', n: '' },
      { tl: `食欲《しょくよく》 が 落《お》ちたり、 反対《はんたい》 に 食《た》べすぎて しまったり する こと は ありました か。`, c: `食欲《しょくよく》 が 落《お》ちたり、 反対《はんたい》 に 食《た》べすぎて しまったり した？`, en: 'Have you had little appetite, or have you been overeating?' },
      { tl: `自分《じぶん》 は だめ だ、 自分《じぶん》 や 家族《かぞく》 を がっかり させて しまった、 と 感《かん》じる こと は ありました か。`, c: `自分《じぶん》 は だめ だ、 自分《じぶん》 や 家族《かぞく》 を がっかり させて しまった、 と 感《かん》じる こと は あった？`, en: 'Have you felt bad about yourself, as if you have failed or let your family or yourself down?', n: 'がっかり させる = to let someone down. Many patients put it as 自分《じぶん》 を 責《せ》める (blaming oneself).' },
      { tl: `例《たと》えば 本《ほん》 を 読《よ》んだり テレビ を 見《み》たり する とき に、 集中《しゅうちゅう》 しにくい こと は ありました か。`, c: `例《たと》えば 本《ほん》 を 読《よ》んだり テレビ を 見《み》たり する とき に、 集中《しゅうちゅう》 しにくい こと は あった？`, en: 'Has it been hard to concentrate, for example to read or to watch television?' },
      { tl: `体《からだ》 の 動《うご》き や 話《はな》す スピード が いつも より ゆっくり に なった と、 ご自分《じぶん》 で 気《き》づいたり、 人《ひと》 に 言《い》われたり しました か。 または 逆《ぎゃく》 に、 落《お》ち着《つ》かなくて じっと して いられない こと は ありました か。`, c: `体《からだ》 の 動《うご》き や 話《はな》す スピード が いつも より ゆっくり に なった と、 自分《じぶん》 で 気《き》づいたり、 人《ひと》 に 言《い》われたり した？ それとも 逆《ぎゃく》 に、 落《お》ち着《つ》かなくて じっと して いられない こと は あった？`, en: 'Have you noticed, or been told, that you move or speak more slowly than usual? Or the opposite, that you are so restless you cannot stay in one place?', n: '' },
      { tl: `死《し》んだ ほう が 楽《らく》 だ と 思《おも》ったり、 自分《じぶん》 を 傷《きず》つけたい と 考《かんが》えたり した こと は ありました か。`, c: `死《し》んだ ほう が 楽《らく》 だ と 思《おも》ったり、 自分《じぶん》 を 傷《きず》つけたい と 考《かんが》えたり した こと は あった？`, en: 'Have you thought that you would be better off dead, or thought of hurting yourself?', n: 'If yes, go to the Suicide risk section now.' + G, risk: true }
    ],
    impairment: { tl: `もし こうした こと が あった なら、 それ で 仕事《しごと》 や 家《いえ》 の こと、 人《ひと》 と の 付《つ》き合《あ》い が どの くらい 難《むずか》しく なりました か。`, c: `もし こういう こと が あった なら、 それ で 仕事《しごと》 や 家《いえ》 の こと、 人《ひと》 と の 付《つ》き合《あ》い が どの くらい 難《むずか》しく なった？`, en: 'If any of this has happened to you, how much has it made it harder to work, take care of things at home, or get along with other people?', opts: [`全然《ぜんぜん》 難《むずか》しく ない`, `少《すこ》し 難《むずか》しい`, `とても 難《むずか》しい`, `ものすごく 難《むずか》しい`] },
    bands: (n) => (n >= 20 ? 'severe (20–27)' : n >= 15 ? 'moderately severe (15–19)' : n >= 10 ? 'moderate (10–14)' : n >= 5 ? 'mild (5–9)' : 'minimal (0–4)'),
    note: 'Interview paraphrases, not the published instrument. For a documented score administer the published Japanese version of the PHQ-9. Total 0–27: minimal 0–4, mild 5–9, moderate 10–14, moderately severe 15–19, severe 20–27. A score of 10 or more is the usual cut-off for probable major depression; item 9 positive always needs a suicide risk assessment. Severity scale, not a diagnosis.'
  };

  /* MDQ as interview paraphrases. 13 yes/no items; positive = 7 or more yes AND several at the same time AND moderate or serious problem. */
  const MDQ = {
    title: 'MDQ (bipolar screen)',
    stem: { tl: `今《いま》 まで に、 いつも の ご自分《じぶん》 と は 違《ちが》う と 感《かん》じた 時期《じき》 が あった か どう か を お聞《き》きします。 その 時期《じき》 に…`, c: `今《いま》 まで に、 いつも の 自分《じぶん》 と は 違《ちが》う と 感《かん》じた 時期《じき》 が あった か 聞《き》く ね。 その 時期《じき》 に…`, en: 'I want to ask whether there has ever been a period when you did not feel like your usual self, and in which…', n: 'Each item continues その 時期《じき》 に… and ends as its own question (〜こと は あります か).' },
    items: [
      { tl: `…気分《きぶん》 が よすぎたり 気持《きも》ち が 高《たか》ぶりすぎたり して、 周《まわ》り から 「いつも と 違《ちが》う」 と 思《おも》われたり、 それ で トラブル に なったり した こと は あります か。`, c: `…気分《きぶん》 が よすぎたり 気持《きも》ち が 高《たか》ぶりすぎたり して、 周《まわ》り から 「いつも と 違《ちが》う」 と 思《おも》われたり、 それ で トラブル に なったり した こと は ある？`, en: '…you felt so good or so hyper that other people thought you were not your usual self, or it got you into trouble?', n: '' },
      { tl: `…いらいら して、 人《ひと》 に 怒鳴《どな》ったり、 けんか や 言《い》い争《あらそ》い を 始《はじ》めたり した こと は あります か。`, c: `…いらいら して、 人《ひと》 に 怒鳴《どな》ったり、 けんか や 言《い》い争《あらそ》い を 始《はじ》めたり した こと は ある？`, en: '…you were so irritable that you shouted at people or started fights or arguments?' },
      { tl: `…いつも より ずっと 自信《じしん》 が あった こと は あります か。`, c: `…いつも より ずっと 自信《じしん》 が あった こと は ある？`, en: '…you felt much more self-confident than usual?', n: '' },
      { tl: `…いつも より ずっと 寝《ね》る 時間《じかん》 が 短《みじか》かった のに、 平気《へいき》 だった こと は あります か。`, c: `…いつも より ずっと 寝《ね》る 時間《じかん》 が 短《みじか》かった のに、 平気《へいき》 だった こと は ある？`, en: '…you slept much less than usual and really did not miss it?' },
      { tl: `…いつも より ずっと たくさん、 または 速《はや》く 話《はな》した こと は あります か。`, c: `…いつも より ずっと たくさん、 または 速《はや》く 話《はな》した こと は ある？`, en: '…you talked much more, or faster, than usual?' },
      { tl: `…考《かんが》え が 次々《つぎつぎ》 に 頭《あたま》 に 浮《う》かんで、 止《と》められなかった こと は あります か。`, c: `…考《かんが》え が 次々《つぎつぎ》 に 頭《あたま》 に 浮《う》かんで、 止《と》められなかった こと は ある？`, en: '…thoughts went through your head very fast, or you could not slow your mind down?' },
      { tl: `…周《まわ》り の こと に すぐ 気《き》 が 散《ち》って、 集中《しゅうちゅう》 できなかった こと は あります か。`, c: `…周《まわ》り の こと に すぐ 気《き》 が 散《ち》って、 集中《しゅうちゅう》 できなかった こと は ある？`, en: '…you were so easily distracted by what was around you that it was hard to concentrate?' },
      { tl: `…いつも より ずっと 元気《げんき》 が あった こと は あります か。`, c: `…いつも より ずっと 元気《げんき》 が あった こと は ある？`, en: '…you had much more energy than usual?' },
      { tl: `…いつも より ずっと 活動的《かつどうてき》 で、 たくさん の こと を した こと は あります か。`, c: `…いつも より ずっと 活動的《かつどうてき》 で、 たくさん の こと を した こと は ある？`, en: '…you were much more active, or did many more things than usual?', n: '' },
      { tl: `…いつも より ずっと 人付《ひとづ》き合《あ》い が 多《おお》く なって、 例《たと》えば 夜中《よなか》 に 友達《ともだち》 に 電話《でんわ》 を かけたり した こと は あります か。`, c: `…いつも より ずっと 人付《ひとづ》き合《あ》い が 多《おお》く なって、 例《たと》えば 夜中《よなか》 に 友達《ともだち》 に 電話《でんわ》 を かけたり した こと は ある？`, en: '…you were much more sociable or outgoing than usual, for example calling your friends in the middle of the night?', n: '' },
      { tl: `…いつも より ずっと 性的《せいてき》 な こと へ の 関心《かんしん》 が 強《つよ》かった こと は あります か。`, c: `…いつも より ずっと 性的《せいてき》 な こと へ の 関心《かんしん》 が 強《つよ》かった こと は ある？`, en: '…you were much more interested in sex than usual?' },
      { tl: `…ご自分《じぶん》 らしく ない こと や、 周《まわ》り から 見《み》て やりすぎ、 無茶《むちゃ》、 危《あぶ》ない と 思《おも》われる よう な こと を した こと は あります か。`, c: `…自分《じぶん》 らしく ない こと や、 周《まわ》り から 見《み》て やりすぎ、 無茶《むちゃ》、 危《あぶ》ない と 思《おも》われる よう な こと を した こと は ある？`, en: '…you did things that were not typical of you, or that other people might have seen as excessive, foolish, or risky?' },
      { tl: `…お金《かね》 を 使《つか》いすぎて、 ご自分《じぶん》 や ご家族《かぞく》 が 困《こま》った こと は あります か。`, c: `…お金《かね》 を 使《つか》いすぎて、 自分《じぶん》 や 家族《かぞく》 が 困《こま》った こと は ある？`, en: '…you spent money in a way that got you or your family into trouble?' }
    ],
    same: { tl: `二《ふた》つ 以上《いじょう》 に 「はい」 と 答《こた》えた 場合《ばあい》 です が、 その うち の いくつか は 同《おな》じ 時期《じき》 に 重《かさ》なって 起《お》きました か。`, c: `二《ふた》つ 以上《いじょう》 に 「はい」 と 答《こた》えた なら、 その うち の いくつか は 同《おな》じ 時期《じき》 に 重《かさ》なって 起《お》きた？`, en: 'If you answered yes to more than one: have several of these happened to you during the same period, at the same time?' },
    problem: { tl: `こうした こと で、 例《たと》えば 仕事《しごと》、 家族《かぞく》、 お金《かね》、 法律《ほうりつ》 の 面《めん》 で、 どの くらい 問題《もんだい》 に なりました か。`, c: `こういう こと で、 例《たと》えば 仕事《しごと》、 家族《かぞく》、 お金《かね》、 法律《ほうりつ》 の 面《めん》 で、 どの くらい 問題《もんだい》 に なった？`, en: 'How much of a problem did these things cause you, for example with work, family, money, or the law?', opts: [`問題《もんだい》 なし`, `小《ちい》さな 問題《もんだい》`, `ある 程度《ていど》 の 問題《もんだい》`, `深刻《しんこく》 な 問題《もんだい》`] },
    note: 'Interview paraphrases, not the published instrument. For a documented score administer a validated Japanese version of the MDQ if one is available to you (© University of Texas Medical Branch, free for clinical and educational use). Positive screen: 7 or more yes, several in the same period, and a moderate or serious problem. A positive MDQ is not a diagnosis of bipolar disorder; it means take a careful history of past episodes before starting an antidepressant.'
  };

  window.PSYCH_MOOD = { mde: MDE, manic: MANIC, manicGate: MANIC_GATE, extra: EXTRA, phq9: PHQ9, mdq: MDQ };

  /* Publish the paraphrases as a phrase section, so they get search, flashcards, the handout and audio. */
  const ph = (en, it, n) => { const o = { en: en, f: it.tl, c: it.c }; const note = [n, it.n].filter(Boolean).join(' '); if (note) o.n = note; return o; };
  const sec = { id: 'mood-screens', group: 'Interview', title: 'Depression and bipolar screens in Japanese (paraphrases)', draft: true,
    intro: 'Interview paraphrases of the nine PHQ-9 items with the four frequency choices, and of the thirteen MDQ items with the same-period and problem questions. They show how a clinician asks each item conversationally; they are not the published instruments and give no documented score. The checker in Psychiatry → Mood episode scores them for teaching. For a score that goes in the chart administer the published Japanese version of the PHQ-9 (Kroenke, Spitzer and Williams 2001) or a validated Japanese version of the MDQ if available (Hirschfeld et al. 2000; © University of Texas Medical Branch, free for clinical and educational use). Both are screens, not diagnoses.',
    phrases: [ph(PHQ9.stem.en, PHQ9.stem, PHQ9.opts.map((o) => o[0]).join(' / '))]
      .concat(PHQ9.items.map((it, i) => ph('PHQ-9 ' + (i + 1) + '. ' + it.en, it)))
      .concat([ph(PHQ9.impairment.en, PHQ9.impairment, PHQ9.impairment.opts.join(' / '))])
      .concat([ph(MDQ.stem.en, MDQ.stem)])
      .concat(MDQ.items.map((it, i) => ph('MDQ ' + (i + 1) + '. ' + it.en, it)))
      .concat([ph(MDQ.same.en, MDQ.same), ph(MDQ.problem.en, MDQ.problem, MDQ.problem.opts.join(' / '))]) };
  if (window.PSYCH_SECTIONS) PSYCH_SECTIONS.push(sec);
})();
