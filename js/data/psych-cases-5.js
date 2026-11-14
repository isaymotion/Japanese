/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* Case simulations, part 5: new presentations (0.18.0). Same structure as psych-cases-1.js. Fictional patients. */
window.PSYCH_CASES = (window.PSYCH_CASES || []).concat([
  {
    id: 'ocd',
    title: 'Takumi: washing and checking',
    level: 'N3',
    setting: 'Outpatient clinic, first visit. Takumi Kobayashi, 34, works in the accounts section of a city office. He is married to Aya, who persuaded him to come but has not come with him; they have no children. His hands look red and chapped. Staff address him as Kobayashi-san.',
    steps: [
      {
        who: 'Takumi',
        line: [`妻《つま》 に 言《い》われて 来《き》ました。 こんな こと で 病院《びょういん》 に 来《く》る の は、 恥《は》ずかしい ん です けど……`, `My wife told me to come. It's embarrassing to come to hospital over something like this, but...`],
        choices: [
          { tl: `小林《こばやし》さん、 来《き》て くださって ありがとう ございます。 恥《は》ずかしい こと では ありません よ。 今《いま》 困《こま》って いる こと を、 話《はな》せる ところ から 教《おし》えて いただけます か。`, en: `Thank you for coming, Mr Kobayashi. There is nothing to be embarrassed about. Could you tell me what is troubling you now, starting wherever you can?`, score: 2, fb: `Good. People with OCD often hide it for years out of shame. Thanking him, taking away the shame and asking an open question make it easier for him to say more.` },
          { tl: `どんな 症状《しょうじょう》 が あります か。`, en: `What symptoms do you have?`, score: 1, fb: `A fair question, but it skips the shame he has just told you about, so he may say less.` },
          { tl: `奥《おく》さん に 言《い》われた だけ なら、 たいした こと は ない でしょう。`, en: `If your wife just told you to come, it's probably nothing much.`, score: 0, fb: `This dismisses him before he has spoken. Family members often notice the problem before the patient asks for help.` }
        ]
      },
      {
        who: 'Takumi',
        line: [`手《て》 を 洗《あら》う の が やめられない ん です。 一日《いちにち》 に 何回《なんかい》 も 洗《あら》って、 手《て》 が ひび割《わ》れて しまって。 ばい菌《きん》 が ついて いる 気《き》 が して、 人《ひと》 に うつして しまったら どう しよう と 思《おも》う と……`, `I can't stop washing my hands. I wash them many times a day, and my hands have cracked. I feel there are germs on them, and when I think I might pass them on to someone...`],
        choices: [
          { tl: `一日《いちにち》 に 何回《なんかい》 くらい 洗《あら》います か。`, en: `About how many times a day do you wash them?`, score: 1, fb: `Useful, but a count alone misses the thought that drives the washing and the anxiety behind it.` },
          { tl: `教《おし》えて くださって ありがとう ございます。 洗《あら》う 前《まえ》 に は、 どんな 考《かんが》え が 浮《う》かびます か。 もし 洗《あら》わない と、 どんな 気持《きも》ち に なります か。`, en: `Thank you for telling me. Before you wash, what thoughts come into your mind? And if you don't wash, how do you feel?`, score: 2, fb: `Good. You ask about the obsession (the unwanted thought) and what happens if he resists the compulsion, without judging. Usually the answer is a rise in anxiety.` },
          { tl: `気《き》 に しすぎ です よ。 そんな に 洗《あら》わなくて も 大丈夫《だいじょうぶ》 です。`, en: `You worry too much. You don't need to wash that much.`, score: 0, fb: `He already knows it is too much. Brushing it off adds to his shame and teaches you nothing about the symptoms.` }
        ]
      },
      {
        who: 'Takumi',
        line: [`洗《あら》わない と、 不安《ふあん》 で 何《なに》 も 手《て》 に つきません。 自分《じぶん》 の せい で 誰《だれ》 か が 病気《びょうき》 に なったら、 と 考《かんが》えて しまって。 洗《あら》う と 少《すこ》し 楽《らく》 に なります が、 すぐ また 気《き》 に なります。 お風呂《ふろ》 も 長《なが》く なって、 家《いえ》 に 帰《かえ》ったら すぐ 服《ふく》 を 全部《ぜんぶ》 着替《きが》えます。`, `If I don't wash, I'm so anxious I can't do anything. I keep thinking, what if someone gets ill because of me. Washing makes it a little better, but soon it bothers me again. My showers have got long too, and as soon as I get home I change all my clothes.`],
        choices: [
          { tl: `では、 今日《きょう》 から 洗《あら》う の を 我慢《がまん》 して ください。`, en: `Then from today, please hold back from washing.`, score: 0, fb: `Telling him to stop by willpower, with no plan or support, sets him up to fail. Facing the fear is done step by step in treatment, at a pace he agrees to.` },
          { tl: `それ は つらい です ね。 洗《あら》う こと や 着替《きが》える こと に、 一日《いちにち》 で 合《あ》わせて どれくらい の 時間《じかん》 を 使《つか》って います か。 ほか に も、 何度《なんど》 も 確《たし》かめたく なる こと は あります か。`, en: `That sounds hard. Altogether, how much time a day do washing and changing take? Is there anything else you feel you have to check again and again?`, score: 2, fb: `Good. Time spent and interference are part of the diagnosis, and contamination fears often come with checking, so ask about other compulsions too.` },
          { tl: `手《て》 の 肌《はだ》 を 見《み》せて いただけます か。`, en: `Could I see the skin on your hands?`, score: 1, fb: `Looking after the skin matters and is worth doing later in the visit, but first find out how much of his day the symptoms take.` }
        ]
      },
      {
        who: 'Takumi',
        line: [`全部《ぜんぶ》 で、 三時間《さんじかん》 以上《いじょう》 か も しれません。 出《で》かける 前《まえ》 も、 ガス や 鍵《かぎ》 や 窓《まど》 を 何回《なんかい》 も 確《たし》かめます。 確《たし》かめた のに、 また 戻《もど》って 確《たし》かめて。 最近《さいきん》 は 仕事《しごと》 に 遅刻《ちこく》 する こと も 増《ふ》えました。 仕事《しごと》 で も、 計算《けいさん》 した 数字《すうじ》 を 何度《なんど》 も 見直《みなお》して しまう ん です。`, `Altogether it might be more than three hours. Before I go out I check the gas, the locks and the windows over and over. Even after checking, I go back and check again. Lately I've been late for work more often. And at work I check the figures I've calculated again and again.`],
        choices: [
          { tl: `遅刻《ちこく》 は 何回《なんかい》 くらい あります か。`, en: `How many times have you been late?`, score: 1, fb: `It records the impact, but a count of late days tells you less than how he himself sees the thoughts.` },
          { tl: `確《たし》かめる の は 一回《いっかい》 だけ に すれば いい ん です よ。`, en: `You just need to check only once.`, score: 0, fb: `Simple advice like this treats a disorder as a lack of willpower. He has surely tried already.` },
          { tl: `毎日《まいにち》 の 生活《せいかつ》 に も お仕事《しごと》 に も、 大《おお》きく 影響《えいきょう》 して いる ん です ね。 ご自分《じぶん》 で は、 こう いう 考《かんが》え や 確《たし》かめる こと を、 どう 思《おも》って います か。`, en: `So it is having a big effect on your daily life and your work. How do you yourself see these thoughts and the checking?`, score: 2, fb: `Good. You reflect the impact, then ask about insight: whether he sees the thoughts as excessive. Insight is recorded as a specifier in OCD and shapes how you explain treatment.` }
        ]
      },
      {
        who: 'Takumi',
        line: [`変《へん》 だ と いう の は、 わかって いる ん です。 やりすぎ だ と。 でも、 やめられない。 先生《せんせい》、 この 手《て》、 もう ばい菌《きん》 は ついて いません よ ね。 大丈夫《だいじょうぶ》 です よ ね。`, `I know it's strange. That it's too much. But I can't stop. Doctor, there are no germs on these hands any more, are there? They're all right, aren't they?`],
        choices: [
          { tl: `わかって いる のに やめられない、 それ は とても つらい です ね。 ただ、 私《わたし》 が 「大丈夫《だいじょうぶ》」 と 言《い》う と、 その 時《とき》 は 楽《らく》 に なって も、 不安《ふあん》 は また すぐ 戻《もど》って きます。 です から、 私《わたし》 から は あえて 何度《なんど》 も 「大丈夫《だいじょうぶ》」 と は 言《い》わない よう に します。 冷《つめ》たく する ため では なく、 この 繰《く》り返《かえ》し から 抜《ぬ》け出《だ》す ため です。 お話《はなし》 を 伺《うかが》う と、 強迫症《きょうはくしょう》 と いう 病気《びょうき》 だ と 考《かんが》えられます。 よく 知《し》られた 病気《びょうき》 で、 治療《ちりょう》 できます。`, en: `Knowing it and still not being able to stop is very hard. But if I say "you're all right", you feel better for a moment and then the anxiety soon comes back. So I will deliberately not keep saying "you're all right". It is not to be cold, but to help you get out of this cycle. From what you tell me, this looks like a condition called obsessive-compulsive disorder. It is a well-known condition, and it can be treated.`, score: 2, fb: `Good. Asking for reassurance works like a compulsion: it relieves anxiety briefly and keeps the cycle going. You explain warmly why you will not keep reassuring him, and give him a name for the problem and hope.` },
          { tl: `はい、 大丈夫《だいじょうぶ》 です よ。 心配《しんぱい》 に なったら、 何回《なんかい》 でも 聞《き》いて ください。`, en: `Yes, they're fine. Whenever you get worried, ask me as many times as you like.`, score: 0, fb: `Kind in intent, but repeated reassurance feeds the cycle of doubt and checking, and here you invite more of it.` },
          { tl: `それ は 強迫症《きょうはくしょう》 か も しれません ね。`, en: `That may be obsessive-compulsive disorder.`, score: 1, fb: `Naming the condition helps, but you skip his distress and leave his request for reassurance unaddressed.` }
        ]
      },
      {
        who: 'Takumi',
        line: [`病気《びょうき》 なん です か……。 少《すこ》し ほっと しました。 正直《しょうじき》、 最近《さいきん》 は 気分《きぶん》 も 落《お》ち込《こ》みます。 時間《じかん》 ばかり かかって、 自分《じぶん》 が 情《なさ》けなくて。`, `It's an illness... I feel a little relieved. To be honest, lately my mood has been low too. Everything takes so much time, and I feel pathetic.`],
        choices: [
          { tl: `気《き》 の 持《も》ちよう です よ。 前向《まえむ》き に 考《かんが》えましょう。`, en: `It's all in how you look at it. Let's think positively.`, score: 0, fb: `Dismissive. Low mood is common with OCD and needs to be assessed, not talked away.` },
          { tl: `夜《よる》 は よく 眠《ねむ》れて います か。`, en: `Are you sleeping well at night?`, score: 1, fb: `Sleep is worth asking about, but when a patient says his mood is low, ask about suicidal thoughts first.` },
          { tl: `気分《きぶん》 の こと も 話《はな》して くださって、 ありがとう ございます。 皆《みな》さん に 伺《うかが》って いる こと です が、 気分《きぶん》 が 落《お》ち込《こ》んで、 死《し》にたい と 思《おも》う こと は あります か。 気分《きぶん》 を 紛《まぎ》らわす ため に、 お酒《さけ》 を 飲《の》む こと は あります か。`, en: `Thank you for telling me about your mood too. This is something I ask everyone: when your mood is low, do you ever think you want to die? And do you ever drink to take your mind off things?`, score: 2, fb: `Good. Depression often comes with OCD. You ask about suicidal thoughts directly and calmly, framed as a routine question, and ask about alcohol as a way of coping.` }
        ]
      },
      {
        who: 'Takumi',
        line: [`死《し》にたい と 思《おも》った こと は ありません。 お酒《さけ》 も、 たまに 少《すこ》し 飲《の》む くらい です。 治《なお》る なら、 治《なお》したい です。 どんな 治療《ちりょう》 が ある ん です か。`, `I've never wanted to die. And I only drink a little now and then. If it can get better, I want to get better. What kind of treatment is there?`],
        choices: [
          { tl: `お薬《くすり》 を 出《だ》して おきます ね。`, en: `I'll prescribe you some medicine.`, score: 1, fb: `Medicine can help, but you give no choice and leave out therapy, which is a first-line treatment too.` },
          { tl: `治療《ちりょう》 に は、 主《おも》に 二《ふた》つ あります。 一《ひと》つ は、 不安《ふあん》 に なる こと に 少《すこ》し ずつ 向《む》き合《あ》い、 洗《あら》ったり 確《たし》かめたり しない まま、 不安《ふあん》 が 自然《しぜん》 に 下《さ》がる の を 体験《たいけん》 する 練習《れんしゅう》 です。 もう 一《ひと》つ は お薬《くすり》 です。 どちら も 効果《こうか》 が あります。 小林《こばやし》さん の 希望《きぼう》 を 聞《き》きながら、 一緒《いっしょ》 に 決《き》めましょう。`, en: `There are two main treatments. One is practice in facing what makes you anxious, a little at a time, without washing or checking, and finding that the anxiety comes down by itself. The other is medicine. Both work. Let's decide together, taking your wishes into account.`, score: 2, fb: `Good. In plain words you describe exposure and response prevention, a form of cognitive behavioural therapy, and medicine, and you make the decision a shared one.` },
          { tl: `全部《ぜんぶ》 一度《いちど》 に やめれば、 すぐ 治《なお》ります よ。`, en: `If you stop it all at once, you'll get better quickly.`, score: 0, fb: `Untrue and discouraging when it fails. Facing fears works best step by step, starting with easier situations.` }
        ]
      },
      {
        who: 'Takumi',
        line: [`少《すこ》し ずつ なら、 やって みたい です。 ただ、 妻《つま》 に も 毎日《まいにち》 「大丈夫《だいじょうぶ》 か な」 と 何度《なんど》 も 聞《き》いて しまう ん です。 妻《つま》 も 疲《つか》れて いる と 思《おも》います。`, `If it's a little at a time, I'd like to try. But every day I keep asking my wife, "Is it all right?", over and over. I think she's tired too.`],
        choices: [
          { tl: `奥《おく》さん も、 小林《こばやし》さん を 支《ささ》えて くれて いる ん です ね。 もし 小林《こばやし》さん が よければ、 次《つぎ》 は 奥《おく》さん と 一緒《いっしょ》 に 来《き》て いただいて、 この 病気《びょうき》 の こと や、 ご家族《かぞく》 が どう 手伝《てつだ》えば いい か を 一緒《いっしょ》 に お話《はな》し する こと も できます。 どう です か。`, en: `Your wife is supporting you too. If you would like, next time you could come with her, and we could talk together about this condition and how family can help. What do you think?`, score: 2, fb: `Good. Families are often drawn into reassuring and checking, which keeps the cycle going. With his agreement, involving his wife helps both of them and lets her learn how to respond without reassuring.` },
          { tl: `奥《おく》さん と は、 お家《うち》 で よく 話《はな》し合《あ》って ください。`, en: `Please talk it over properly with your wife at home.`, score: 1, fb: `Not wrong, but it leaves the couple to work it out alone. Offer to see them together, if he agrees.` },
          { tl: `奥《おく》さん に は、 聞《き》かれたら すぐ 「大丈夫《だいじょうぶ》」 と 答《こた》える よう に 伝《つた》えて ください。`, en: `Tell your wife to answer "it's all right" straight away whenever you ask.`, score: 0, fb: `This turns his wife's reassurance into part of the compulsion. Family accommodation keeps OCD going.` }
        ]
      }
    ],
    summary: {
      findings: [
        'Two years of contamination fears (germs, making others ill) with hand washing until the skin cracks, long showers and changing clothes on coming home; more than three hours a day',
        'Repeated checking of the gas, locks and windows, now making him late for work, and repeated rechecking of figures at work; seeks reassurance from his wife and the doctor',
        'Good insight ("I know it\'s strange"), marked shame, hid it for a long time; low mood from the time lost; denies suicidal thoughts; drinks a little occasionally; no hallucinations reported',
        'Plan: explain OCD as a known, treatable condition; exposure and response prevention and/or medicine by shared decision; limit reassurance; with his agreement, see him with his wife; skin care for chapped hands'
      ],
      mse: `34M, neatly dressed, hands red and chapped. Cooperative, embarrassed at first, then open. Speech normal. Mood 「気分《きぶん》 も 落《お》ち込《こ》みます」; affect anxious, congruent. Thought process linear. Thought content: contamination obsessions, checking and washing compulsions, reassurance seeking; no suicidal ideation. Perception: no hallucinations reported. Cognition grossly intact. Insight good. Judgment fair.`
    }
  },
  {
    id: 'ptsd',
    title: 'Mariko: after the car crash',
    level: 'N3',
    setting: 'Outpatient clinic, first visit. Mariko Inoue, 42, works part-time at a supermarket and lives with her husband and their son Hiroto, 8. Her family doctor referred her. Six months ago a truck hit her car from behind on the expressway while she was driving with her son; both had only minor injuries and have recovered. She sits on the edge of the chair with her bag held on her lap. Staff address her as Inoue-san.',
    steps: [
      {
        who: 'Mariko',
        line: [`かかりつけ の 先生《せんせい》 に 勧《すす》められて 来《き》ました。 でも、 精神科《せいしんか》 に 来《く》る ほど の こと な の か、 自分《じぶん》 でも よく わからなくて…。`, `My family doctor suggested I come. But I'm not really sure myself whether this is something to see a psychiatrist about...`],
        choices: [
          { tl: `今日《きょう》 は どう されました か。`, en: `What brings you here today?`, score: 1, fb: `A polite open question, but she is unsure and on edge. First say why you will ask questions and that she keeps control of what she tells you.` },
          { tl: `来《き》て くださって ありがとう ございます、 井上《いのうえ》さん。 精神科《せいしんか》 の 医師《いし》 です。 今日《きょう》 は、 今《いま》 の 生活《せいかつ》 で 困《こま》って いる こと を 知《し》る ため に、 いくつか お聞《き》き します。 話《はな》したく ない こと は 話《はな》さなくて 大丈夫《だいじょうぶ》 です し、 途中《とちゅう》 で 休《やす》んで も、 やめて も かまいません。`, en: `Thank you for coming, Inoue-san. I'm the psychiatrist. Today I'll ask you some questions so that I can understand what is making life hard for you now. You don't have to talk about anything you don't want to, and you can take a break or stop at any point.`, score: 2, fb: `Good. A trauma-informed opening: you explain why you are asking and give her control over the pace. A frightening event takes control away, so giving it back helps her feel safe enough to talk.` },
          { tl: `精神科《せいしんか》 に 来《く》る 人《ひと》 は、 みんな そう 言《い》います よ。 では、 事故《じこ》 の こと を 最初《さいしょ》 から 詳《くわ》しく 話《はな》して ください。`, en: `Everyone who comes to psychiatry says that. Now tell me about the accident in detail, from the beginning.`, score: 0, fb: `This dismisses her doubt and asks at once for a detailed retelling. Pressing for the full story in a first interview can bring the memory back with all its fear.` }
        ]
      },
      {
        who: 'Mariko',
        line: [`ありがとう ございます。 半年《はんとし》 前《まえ》、 高速道路《こうそくどうろ》 を 運転《うんてん》 して いた とき、 後《うし》ろ から トラック に ぶつけられた ん です。 息子《むすこ》 も 一緒《いっしょ》 でした。 けが は 二人《ふたり》 とも 軽《かる》くて、 もう 治《なお》りました。 でも、 あの 日《ひ》 から…。`, `Thank you. Six months ago, when I was driving on the expressway, a truck hit us from behind. My son was with me. We both had only minor injuries, and we've recovered. But ever since that day...`],
        choices: [
          { tl: `その とき 何《なに》 が 見《み》えた か、 どんな 音《おと》 が した か、 詳《くわ》しく 教《おし》えて ください。`, en: `Tell me in detail what you saw and what sounds you heard at that moment.`, score: 0, fb: `Never ask for a detailed, sensory retelling in an assessment. It can set off re-experiencing; working with the memory belongs to planned trauma-focused therapy.` },
          { tl: `お二人《ふたり》 とも、 けが が 軽《かる》くて よかった です ね。`, en: `It's good that you both had only minor injuries.`, score: 1, fb: `Kind, but it can sound like "so nothing really happened". The emotional effects can be serious even when the injuries were minor. Ask what has been hard since.` },
          { tl: `話《はな》して くださって ありがとう ございます。 事故《じこ》 の こと は、 これ 以上《いじょう》 詳《くわ》しく 話《はな》さなくて 大丈夫《だいじょうぶ》 です。 あの 日《ひ》 から、 どんな こと が 一番《いちばん》 つらい です か。`, en: `Thank you for telling me. You don't need to tell me any more detail about the accident. Since that day, what has been the hardest thing?`, score: 2, fb: `Good. You thank her, release her from the details, and turn to what she lives with now. The assessment needs her current symptoms, not the story of the crash.` }
        ]
      },
      {
        who: 'Mariko',
        line: [`（外《そと》 で ブレーキ の 音《おと》 が して、 体《からだ》 が 固《かた》く なる。） あっ、 この 音《おと》…。 夜《よる》 は 事故《じこ》 の 夢《ゆめ》 を 見《み》て 目《め》 が 覚《さ》めます し、 ブレーキ の 音《おと》 を 聞《き》く と、 今《いま》 また 起《お》きて いる みたい に なる ん です。 今《いま》 も…、 また…。`, `(Brakes screech outside; she goes rigid.) Oh, that sound... At night I dream about the accident and wake up, and when I hear brakes it's as if it's happening again right now. Now too... again...`],
        choices: [
          { tl: `大丈夫《だいじょうぶ》 です か。 お水《みず》 を 持《も》って きましょう か。`, en: `Are you all right? Shall I bring you some water?`, score: 1, fb: `Kind, but she is in a flashback. First bring her back to the present; water can come afterwards.` },
          { tl: `井上《いのうえ》さん、 ここ は 病院《びょういん》 の 診察室《しんさつしつ》 です。 今《いま》 は 安全《あんぜん》 です。 足《あし》 の 裏《うら》 を 床《ゆか》 に つけて、 床《ゆか》 を 感《かん》じて みて ください。 部屋《へや》 の 中《なか》 で 見《み》える もの を 三《みっ》つ 教《おし》えて ください。 ゆっくり で 大丈夫《だいじょうぶ》 です。`, en: `Inoue-san, this is the consulting room at the hospital. You are safe now. Put your feet flat on the floor and feel the floor. Tell me three things you can see in this room. Take your time.`, score: 2, fb: `Good. Grounding: a calm voice, her name, where she is, that she is safe now, then her feet and her senses in the room. Anchoring her in the present interrupts the flashback.` },
          { tl: `今《いま》、 何《なに》 が 見《み》えて います か。 その まま、 事故《じこ》 の こと を 思《おも》い出《だ》して みて ください。`, en: `What are you seeing now? Stay with it and try to remember the accident.`, score: 0, fb: `Inviting her to stay in the memory deepens the flashback. Unplanned exposure in an assessment can leave her more frightened, not less.` }
        ]
      },
      {
        who: 'Mariko',
        line: [`（ゆっくり 息《いき》 を する。） 時計《とけい》…、 先生《せんせい》 の 机《つくえ》…、 窓《まど》 の カーテン…。 すみません、 もう 大丈夫《だいじょうぶ》 です。 私《わたし》、 おかしい です よね。`, `(Breathes slowly.) The clock... your desk... the curtain on the window... I'm sorry, I'm all right now. I'm being strange, aren't I?`],
        choices: [
          { tl: `気《き》 に しすぎ です よ。 事故《じこ》 は もう 終《お》わった こと です から。`, en: `You're worrying too much. The accident is over now.`, score: 0, fb: `Minimising. For her the memory does not feel like the past: that is the core of the problem, and being told to stop worrying adds shame.` },
          { tl: `少《すこ》し 休《やす》みましょう か。`, en: `Shall we take a short break?`, score: 1, fb: `Offering a pause respects her control, but she has asked whether she is strange. Answer that first.` },
          { tl: `謝《あやま》らなくて いい です。 今《いま》、 ご自分《じぶん》 で 落《お》ち着《つ》く こと が できました ね。 おかしく ありません。 怖《こわ》い 出来事《できごと》 の 後《あと》 に、 多《おお》く の 人《ひと》 に 起《お》こる 反応《はんのう》 です。 そして、 治療《ちりょう》 で よく なる こと が 多《おお》い です。`, en: `There's no need to apologise. You were able to settle yourself just now. You are not strange. This is a reaction many people have after a frightening event, and it often gets better with treatment.`, score: 2, fb: `Good. You point out that she settled herself (a skill she can use again), normalise the reaction and give realistic hope: "often gets better", not a promise.` }
        ]
      },
      {
        who: 'Mariko',
        line: [`そう です か…。 少《すこ》し ほっと しました。 でも、 もう 車《くるま》 は 運転《うんてん》 できません。 高速道路《こうそくどうろ》 も 避《さ》けて、 今《いま》 は バス で 通《かよ》って います。 ちょっと した 音《おと》 で びくっと する し、 息子《むすこ》 に すぐ いらいら して しまって…。 あの 子《こ》 に 怖《こわ》い 思《おも》い を させた の は、 私《わたし》 なのに。`, `I see... That's a bit of a relief. But I can't drive any more. I avoid the expressway too, and now I take the bus to work. The slightest noise makes me jump, and I snap at my son so easily... when I'm the one who frightened him like that.`],
        choices: [
          { tl: `息子《むすこ》さん を 大切《たいせつ》 に 思《おも》って いる から こそ、 ご自分《じぶん》 を 責《せ》めて しまう ん です ね。 びくっと したり、 いらいら したり する の も、 よく ある 反応《はんのう》 です。 夜《よる》 は どのくらい 眠《ねむ》れて います か。`, en: `It's because your son matters so much to you that you blame yourself. Jumping at noises and getting irritable are common reactions too. How well are you sleeping at night?`, score: 2, fb: `Good. You reflect the guilt without arguing it away (guilt is common after trauma and is worked on in therapy), normalise startle and irritability, and move on to sleep.` },
          { tl: `避《さ》けて いる と 治《なお》りません から、 来週《らいしゅう》 から 高速道路《こうそくどうろ》 を 運転《うんてん》 して みて ください。`, en: `Avoiding it won't make it better, so try driving on the expressway from next week.`, score: 0, fb: `Facing feared situations is part of treatment, but it is planned step by step with a therapist, not ordered at a first visit. This can overwhelm her and break trust.` },
          { tl: `息子《むすこ》さん は、 今《いま》 どう して います か。`, en: `How is your son doing now?`, score: 1, fb: `Her son's wellbeing matters and he may need support of his own, but first respond to her guilt and finish her symptom picture.` }
        ]
      },
      {
        who: 'Mariko',
        line: [`あまり 眠《ねむ》れません。 夜中《よなか》 に 何度《なんど》 も 目《め》 が 覚《さ》めて しまって。 それ で、 寝《ね》る 前《まえ》 に ビール を 一杯《いっぱい》 飲《の》む こと が あります。 最近《さいきん》 は、 その 日《ひ》 が 増《ふ》えて きました。`, `Not very well. I wake up again and again in the night. So sometimes I have a glass of beer before bed. Lately there have been more nights like that.`],
        choices: [
          { tl: `お酒《さけ》 に 逃《に》げる の は よく ありません よ。`, en: `Running to alcohol is not good.`, score: 0, fb: `A judgment. It makes her less likely to tell you the real pattern of her drinking.` },
          { tl: `教《おし》えて くださって ありがとう ございます。 眠《ねむ》る ため に 飲《の》む 方《かた》 は 少《すく》なく ありません。 今《いま》 は 週《しゅう》 に 何日《なんにち》 くらい です か。 朝《あさ》 から 飲《の》みたく なったり、 飲《の》まない と 手《て》 が 震《ふる》えたり する こと は あります か。`, en: `Thank you for telling me. Quite a few people drink to get to sleep. How many nights a week is it now? Do you ever feel like drinking in the morning, or do your hands shake if you don't drink?`, score: 2, fb: `Good. You normalise without approving, then ask frequency, morning drinking and withdrawal. Drinking to cope with trauma symptoms is common and can grow into a second problem.` },
          { tl: `お酒《さけ》 を 飲《の》む と、 眠《ねむ》り が 浅《あさ》く なります よ。`, en: `Drinking makes your sleep lighter, you know.`, score: 1, fb: `True: alcohol makes sleep lighter and broken later in the night. But find out the pattern first; advice works better after that.` }
        ]
      },
      {
        who: 'Mariko',
        line: [`毎日《まいにち》 では ありません。 一杯《いっぱい》 だけ です。 朝《あさ》 から 飲《の》む こと も ない し、 手《て》 が 震《ふる》える こと も ありません。`, `It isn't every day. Only one glass. I never drink in the morning, and my hands don't shake.`],
        choices: [
          { tl: `まさか、 死《し》にたい なんて 思《おも》って いません よね。`, en: `You're not thinking of dying or anything, are you?`, score: 0, fb: `A leading question that expects "no". It tells her the honest answer is not welcome.` },
          { tl: `わかりました。 では、 治療《ちりょう》 の 話《はなし》 を しましょう。`, en: `I see. Let's talk about treatment, then.`, score: 1, fb: `Moving to treatment is reasonable, but you have not yet asked about suicidal thoughts. Ask before you plan.` },
          { tl: `正直《しょうじき》 に 話《はな》して くださって ありがとう ございます。 お酒《さけ》 の こと は、 眠《ねむ》り の 治療《ちりょう》 と 一緒《いっしょ》 に 考《かんが》えましょう。 もう 一《ひと》つ、 大切《たいせつ》 な こと を お聞《き》き します。 大変《たいへん》 な 出来事《できごと》 の 後《あと》 で、 生《い》きて いる の が つらい、 死《し》にたい と 思《おも》う 方《かた》 も います。 井上《いのうえ》さん は、 そう 思《おも》った こと は あります か。`, en: `Thank you for being honest. Let's think about the drinking together with treating your sleep. There's one more important thing I'd like to ask. After a very hard experience, some people feel that living is too painful or that they want to die. Have you ever had thoughts like that?`, score: 2, fb: `Good. You link the drinking to the sleep plan, say why you are asking, and then ask directly and gently. Asking about suicidal thoughts does not put the idea in someone's head.` }
        ]
      },
      {
        who: 'Mariko',
        line: [`…一度《いちど》 だけ、 あの とき 死《し》んで いたら 楽《らく》 だった のに、 と 思《おも》った こと が あります。 でも、 今《いま》 は 思《おも》って いません。 何《なに》 か しよう と 考《かんが》えた こと も ありません。 大翔《ひろと》 の ため に、 よく なりたい ん です。`, `...Just once, I thought it would have been easier if I had died then. But I don't think that now. I've never thought of doing anything. I want to get better, for Hiroto.`],
        choices: [
          { tl: `それ なら 安心《あんしん》 です。 では、 次《つぎ》 の 予約《よやく》 を 取《と》りましょう。`, en: `Well, that's a relief. Let's book your next appointment, then.`, score: 1, fb: `You close too quickly. Acknowledge the passive thought, agree what she will do if it comes back, and explain the treatment.` },
          { tl: `そんな こと を 考《かんが》えたら、 息子《むすこ》さん が かわいそう です よ。`, en: `Thinking like that isn't fair on your son.`, score: 0, fb: `This adds guilt to someone who already blames herself, and makes her less likely to tell you if the thoughts return.` },
          { tl: `話《はな》して くださって ありがとう ございます。 大翔《ひろと》くん の ため に よく なりたい、 その 気持《きも》ち は 大切《たいせつ》 です。 もし また そう いう 気持《きも》ち に なったら、 一人《ひとり》 で 抱《かか》えないで、 ご家族《かぞく》 か 私《わたし》たち に 話《はな》して ください。 すぐ に 危《あぶ》ない と 感《かん》じる とき は、 地域《ちいき》 の 相談窓口《そうだんまどぐち》 か ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》 して ください。 今《いま》 の 症状《しょうじょう》 に は、 トラウマ に 焦点《しょうてん》 を 当《あ》てた 心理療法《しんりりょうほう》 が 効果的《こうかてき》 です。 次回《じかい》、 一緒《いっしょ》 に 治療《ちりょう》 の 計画《けいかく》 を 立《た》てましょう。`, en: `Thank you for telling me. Wanting to get better for Hiroto matters a great deal. If those feelings come back, please don't carry them alone: tell your family or us. If you ever feel in immediate danger, call the local crisis line or 119. For the symptoms you have now, psychotherapy that focuses on the trauma is effective. Next time, let's make a treatment plan together.`, score: 2, fb: `Good. You thank her, name her reason for living as a strength, agree what to do if the thoughts return, and explain in general terms that trauma-focused therapy works.` }
        ]
      }
    ],
    summary: {
      findings: [
        'Six months after a rear-end collision on the expressway: nightmares and flashbacks set off by brake sounds (intrusion), avoidance of driving and the expressway, startle, irritability and poor sleep (arousal), and guilt about her son (negative thoughts): consistent with PTSD; confirm DSM-5-TR criteria and functional impact',
        'Re-experienced a flashback in the interview at a braking sound outside; settled quickly with grounding',
        'Drinks one glass of beer to sleep on more nights recently, not daily, no morning drinking or withdrawal: review at each visit and address within the sleep plan',
        'One past passive death wish, none now, no plan or intent; her son is a strong reason for living; told what to do if it returns. Plan: trauma-focused psychotherapy, sleep, letter to her family doctor, ask whether her son needs support'
      ],
      mse: `42F, neatly dressed, cooperative, tense, sits on the edge of the chair. Startled and briefly re-experienced the crash at a braking sound outside; settled with grounding. Speech normal in rate and volume. Mood 「あまり 眠《ねむ》れません」 ("I can't sleep well"); affect anxious, appropriate. Thought process linear. Thought content: guilt about her son; one past passive death wish, no current suicidal ideation, no plan or intent. Perception: no hallucinations; re-experiencing as above. Oriented. Insight good. Judgment fair.`
    }
  },
  {
    id: 'panic',
    title: 'Daiki: panic attacks in the emergency department',
    level: 'N3',
    setting: 'Emergency department, late evening. Daiki Okada, 27, a systems engineer who lives alone (his mother lives in Osaka and they talk by phone), came in after a sudden attack on a crowded commuter train: pounding heart, tight chest, breathlessness, tingling hands and fear of dying. It is his third visit in two months. The emergency physician says the tests tonight and at the earlier visits were normal, and has called psychiatry. Staff address him as Okada-san.',
    steps: [
      {
        who: 'Daiki',
        line: [`また 来《き》て しまいました。 満員電車《まんいんでんしゃ》 の 中《なか》 で 急《きゅう》 に 胸《むね》 が ドキドキ して、 息《いき》 が できなく なって……。 今度《こんど》 こそ 死《し》ぬ か と 思《おも》いました。`, `I'm back again. On a packed train my heart suddenly started pounding and I couldn't breathe... I really thought I was going to die this time.`],
        choices: [
          { tl: `検査《けんさ》 で 異常《いじょう》 が なかった ので、 何《なに》 も 心配《しんぱい》 いりません よ。`, en: `The tests were normal, so there's nothing to worry about.`, score: 0, fb: `He has just felt close to death. Brushing it off makes him feel unheard and sends him to look for another doctor or another test.` },
          { tl: `精神科《せいしんか》 の 医師《いし》 です。 それ は 本当《ほんとう》 に 怖《こわ》かった でしょう。 岡田《おかだ》さん の 体《からだ》 に 起《お》きた こと を、 少《すこ》し 詳《くわ》しく 聞《き》かせて いただけます か。`, en: `I'm the psychiatrist. That must have been really frightening. Could you tell me a little more about what happened in your body?`, score: 2, fb: `Good. You introduce yourself and say plainly that the experience was frightening. Starting from what happened in his body shows you take the symptoms seriously.` },
          { tl: `今《いま》 は 落《お》ち着《つ》いて います か。`, en: `Are you calm now?`, score: 1, fb: `A fair check, but it skips his fear. Acknowledge how frightening it was before you move on.` }
        ]
      },
      {
        who: 'Daiki',
        line: [`精神科《せいしんか》 って……。 つまり、 僕《ぼく》 の 気《き》 の せい だ って こと です か。 本当《ほんとう》 に 苦《くる》しかった ん です よ。`, `Psychiatry... So you mean it's all in my head? It really was hard to breathe.`],
        choices: [
          { tl: `検査《けんさ》 で 何《なに》 も 出《で》なかった ん です から、 気持《きも》ち の 問題《もんだい》 です ね。`, en: `Nothing showed up in the tests, so it's a matter of your feelings.`, score: 0, fb: `"It's all in your head" tells him the symptoms are imagined. They are real bodily symptoms, and saying otherwise breaks trust.` },
          { tl: `救急《きゅうきゅう》 の 先生《せんせい》 が どんな 検査《けんさ》 を した か、 知《し》って います か。`, en: `Do you know what tests the emergency doctor did?`, score: 1, fb: `Checking the medical work-up matters, but answer his question first: he needs to hear that you believe him.` },
          { tl: `気《き》 の せい では ありません。 苦《くる》しさ は 本当《ほんとう》 に 体《からだ》 に 起《お》きて います。 救急《きゅうきゅう》 の 先生《せんせい》 が 心臓《しんぞう》 など を 調《しら》べて、 今夜《こんや》 も 前《まえ》 の 二回《にかい》 も 検査《けんさ》 で 異常《いじょう》 は なかった と 聞《き》いて います。 発作《ほっさ》 は どんな ふう に 始《はじ》まって、 どのくらい で 治《おさ》まります か。`, en: `It's not in your head. The breathlessness is really happening in your body. I've heard from the emergency doctor that your heart and other things were checked, and the tests were normal tonight and at the last two visits. How do the attacks start, and how long do they take to settle?`, score: 2, fb: `Good. You say the symptoms are real, confirm that medical causes were looked at (always check this before calling it panic), and ask about onset and course, which separate a panic attack from other causes.` }
        ]
      },
      {
        who: 'Daiki',
        line: [`いつ も 突然《とつぜん》 です。 数分《すうふん》 で 一番《いちばん》 ひどく なって、 手《て》 も しびれて きて。 一時間《いちじかん》 も しない うち に 治《おさ》まる ん です けど。 この 二《に》か月《げつ》 で 三回目《さんかいめ》 です。`, `It's always sudden. Within a few minutes it's at its worst, and my hands go numb and tingly. It settles within the hour, though. This is the third time in two months.`],
        choices: [
          { tl: `手《て》 の しびれ は よく ある こと です。 心配《しんぱい》 しなくて いい です よ。`, en: `Tingling hands are common. You don't need to worry.`, score: 1, fb: `True, and tingling often comes from fast breathing, but quick reassurance closes the topic. Ask what he fears first.` },
          { tl: `急《きゅう》 に 来《き》て、 数分《すうふん》 で ピーク に なる ん です ね。 発作《ほっさ》 の 最中《さいちゅう》 は、 自分《じぶん》 が どう なって しまう と 思《おも》いました か。`, en: `So it comes on suddenly and peaks within minutes. During an attack, what did you think was going to happen to you?`, score: 2, fb: `Good. You summarise the pattern (sudden, peaks in minutes, settles within the hour) and ask about the feared outcome. The feared catastrophe is what drives the panic cycle.` },
          { tl: `三回《さんかい》 も 救急《きゅうきゅう》 に 来《く》る の は、 ちょっと 多《おお》すぎます ね。`, en: `Coming to the emergency department three times is a bit much.`, score: 0, fb: `This shames him for seeking help. He came because he was afraid of dying; the visits tell you how frightening the attacks are.` }
        ]
      },
      {
        who: 'Daiki',
        line: [`心臓《しんぞう》 が 止《と》まる か、 頭《あたま》 が おかしく なる か と 思《おも》って。 それ 以来《いらい》、 電車《でんしゃ》 に 乗《の》る の が 怖《こわ》くて、 タクシー で 通《かよ》って います。 また 発作《ほっさ》 が 来《く》る と 思《おも》う と 怖《こわ》くて、 会社《かいしゃ》 も 何日《なんにち》 か 休《やす》んで しまいました。`, `I thought my heart would stop, or I'd go mad. Since then I'm scared of the train, so I take taxis. Just thinking another attack might come scares me, and I've missed a few days of work.`],
        choices: [
          { tl: `会社《かいしゃ》 を 休《やす》む の は よく ない です よ。 電車《でんしゃ》 に 乗《の》れば、 そのうち 慣《な》れます。`, en: `Missing work isn't good. If you ride the train, you'll get used to it.`, score: 0, fb: `A lecture and an order before you understand the problem. Facing the fear helps, but it is planned step by step with him, not pushed in the ED.` },
          { tl: `どのくらい 会社《かいしゃ》 を 休《やす》みました か。`, en: `How long have you been off work?`, score: 1, fb: `Relevant to how much the attacks affect his life, but you have not yet asked about caffeine and substances, which can trigger attacks.` },
          { tl: `それ は 怖《こわ》い です ね。 話《はな》して くださって ありがとう ございます。 少《すこ》し 生活《せいかつ》 の こと も 伺《うかが》います。 コーヒー や エナジードリンク は よく 飲《の》みます か。 お酒《さけ》 は どう です か。 ほか に、 薬《くすり》 や 薬物《やくぶつ》 を 使《つか》う こと は あります か。`, en: `That sounds frightening. Thank you for telling me. Let me ask about your daily life too. Do you often drink coffee or energy drinks? What about alcohol? And do you use any other medicines or drugs?`, score: 2, fb: `Good. You name the fear (of the attack itself, which leads to avoidance), then ask about caffeine, alcohol and drugs in a routine, non-judging way. Stimulants, caffeine and withdrawal from some substances can all cause panic-like attacks.` }
        ]
      },
      {
        who: 'Daiki',
        line: [`コーヒー は 毎日《まいにち》 たくさん 飲《の》みます。 仕事中《しごとちゅう》 は エナジードリンク も たくさん。 締《し》め切《き》り が 多《おお》くて。 お酒《さけ》 は ほとんど 飲《の》まない し、 ほか は 何《なに》 も 使《つか》って いません。`, `I drink a lot of coffee every day. At work, a lot of energy drinks too. There are so many deadlines. I hardly drink alcohol, and I don't use anything else.`],
        choices: [
          { tl: `教《おし》えて くださって ありがとう ございます。 体《からだ》 に は、 危険《きけん》 を 知《し》らせる 警報《けいほう》 の よう な しくみ が あります。 本当《ほんとう》 は 危険《きけん》 が ない のに、 その 警報《けいほう》 が 急《きゅう》 に 鳴《な》る と、 胸《むね》 が ドキドキ して、 息《いき》 が 苦《くる》しく なります。 すると 「死《し》ぬ かも」 と 怖《こわ》く なって、 警報《けいほう》 が もっと 強《つよ》く 鳴《な》ります。 カフェイン を とりすぎる と、 この 警報《けいほう》 が 鳴《な》りやすく なります。`, en: `Thank you for telling me. The body has something like an alarm that warns of danger. When it suddenly goes off even though there is no real danger, your heart pounds and it gets hard to breathe. Then you fear "I might die", and the alarm rings even louder. Too much caffeine makes this alarm go off more easily.`, score: 2, fb: `Good. A simple account of the panic cycle: body alarm, fear of the alarm, more alarm. It explains his real symptoms without calling them imagined, and links caffeine to the attacks without blame.` },
          { tl: `コーヒー の 飲《の》みすぎ が 原因《げんいん》 です。 それ だけ です よ。`, en: `Too much coffee is the cause. That's all it is.`, score: 0, fb: `Too simple and dismissive. Caffeine can trigger attacks, but the fear of the attacks and the avoidance also need treatment.` },
          { tl: `コーヒー と エナジードリンク を、 今日《きょう》 から 全部《ぜんぶ》 やめて ください。`, en: `Stop all coffee and energy drinks from today.`, score: 1, fb: `Cutting caffeine helps, but stopping suddenly can bring headaches and tiredness. Explain why first, and suggest cutting down step by step.` }
        ]
      },
      {
        who: 'Daiki',
        line: [`警報《けいほう》 か……。 なんとなく わかります。 じゃあ、 また 発作《ほっさ》 が 来《き》たら、 どう すれば いい ん です か。`, `An alarm... I sort of get it. So if another attack comes, what should I do?`],
        choices: [
          { tl: `苦《くる》しく なったら、 紙袋《かみぶくろ》 を 口《くち》 に 当《あ》てて 呼吸《こきゅう》 して ください。`, en: `When it gets hard to breathe, breathe into a paper bag held over your mouth.`, score: 0, fb: `Paper-bag rebreathing is no longer advised: it can lower oxygen and is dangerous if the cause is medical. Teach slow breathing instead.` },
          { tl: `一《ひと》つ の 方法《ほうほう》 は、 ゆっくり した 呼吸《こきゅう》 です。 鼻《はな》 から ゆっくり 吸《す》って、 口《くち》 から もっと ゆっくり 吐《は》きます。 発作《ほっさ》 は 波《なみ》 の よう に 来《き》て、 必《かなら》ず 引《ひ》いて いきます。 今《いま》、 一緒《いっしょ》 に 少《すこ》し 練習《れんしゅう》 して みません か。`, en: `One way is slow breathing. Breathe in slowly through your nose, and out even more slowly through your mouth. An attack comes like a wave, and it always passes. Shall we practise a little together now?`, score: 2, fb: `Good. Slow breathing is one tool among several, not a cure. Saying the attack peaks and passes counters the feared catastrophe, and practising now, while he is calm, makes it easier to use during an attack.` },
          { tl: `その とき は、 また 救急《きゅうきゅう》 に 来《き》て ください。`, en: `Then come back to the emergency department.`, score: 1, fb: `Safe, but it gives him no tool of his own and keeps the ED as his only answer. Teach a coping step, and say which new or different symptoms need urgent care.` }
        ]
      },
      {
        who: 'Daiki',
        line: [`（一緒《いっしょ》 に 呼吸《こきゅう》 を する。） 少《すこ》し 楽《らく》 に なりました。 でも、 会社《かいしゃ》 も 休《やす》んで ばかり だ し、 一人暮《ひとりぐ》らし で 話《はな》す 人《ひと》 も いなくて。 正直《しょうじき》、 最近《さいきん》 ちょっと 落《お》ち込《こ》んで います。`, `(Breathes slowly with the doctor.) That's a bit easier. But I keep missing work, and I live alone with no one to talk to. Honestly, I've been a bit down lately.`],
        choices: [
          { tl: `元気《げんき》 を 出《だ》して ください。 若《わか》い ん です から、 大丈夫《だいじょうぶ》 です よ。`, en: `Cheer up. You're young, so you'll be fine.`, score: 0, fb: `False reassurance closes the conversation and misses a possible risk. Low mood after repeated attacks needs a direct question about suicidal thoughts.` },
          { tl: `一人《ひとり》 で 不安《ふあん》 を 抱《かか》えて いた ん です ね。 話《はな》して くださって ありがとう ございます。 皆《みな》さん に 伺《うかが》って いる こと です が、 落《お》ち込《こ》んだ とき に、 死《し》にたい と 思《おも》ったり、 消《き》えて しまいたい と 思《おも》ったり する こと は あります か。`, en: `You've been carrying this worry on your own. Thank you for telling me. This is something I ask everyone: when you feel down, do you ever think you want to die, or want to disappear?`, score: 2, fb: `Good. You reflect his isolation and then ask about suicidal thoughts directly and calmly. Saying you ask everyone makes the question routine, and asking does not put the idea in his head.` },
          { tl: `夜《よる》 は よく 眠《ねむ》れて います か。`, en: `Are you sleeping well at night?`, score: 1, fb: `Sleep is worth asking about, but he has just told you his mood is low. Ask briefly about suicidal thoughts first.` }
        ]
      },
      {
        who: 'Daiki',
        line: [`それ は ない です。 大阪《おおさか》 の 母《はは》 に も 心配《しんぱい》 を かけたく ない し。 電話《でんわ》 で は 話《はな》して います。 でも、 電車《でんしゃ》 に は しばらく 乗《の》らない ほう が いい です よ ね。`, `No, nothing like that. I don't want to worry my mother in Osaka either. We talk on the phone. But it's better if I stay off the train for a while, right?`],
        choices: [
          { tl: `そう です ね。 しばらく は タクシー で 通《かよ》う の が いい と 思《おも》います。`, en: `Yes. I think it's best to take taxis for a while.`, score: 0, fb: `Approving the avoidance keeps the fear going: each time he avoids the train, his alarm learns that the train is dangerous.` },
          { tl: `それ を 聞《き》いて 安心《あんしん》 しました。 実《じつ》 は、 怖《こわ》い 場所《ばしょ》 を 避《さ》け続《つづ》ける と、 怖《こわ》さ が 長《なが》く 続《つづ》いて しまう ん です。 怖《こわ》い 場面《ばめん》 に 少《すこ》し ずつ 慣《な》れて いく 練習《れんしゅう》 と、 お薬《くすり》 が、 どちら も 役《やく》 に 立《た》ちます。 外来《がいらい》 で 続《つづ》けて 一緒《いっしょ》 に 進《すす》めましょう。 いつ も と 違《ちが》う 症状《しょうじょう》 が 出《で》たら、 迷《まよ》わず 救急《きゅうきゅう》 に 来《き》て ください。 死《し》にたい 気持《きも》ち が 出《で》て きたら、 地域《ちいき》 の 相談《そうだん》 窓口《まどぐち》 か ｜119番《ひゃくじゅうきゅうばん》 に 連絡《れんらく》 して ください。 よければ、 お母《かあ》さん に も 説明《せつめい》 します よ。`, en: `I'm relieved to hear that. In fact, if you keep avoiding a place you fear, the fear lasts longer. Practice in getting used to the feared situations step by step, and medicine, can both help. Let's work on it together in the outpatient clinic. If you get symptoms that feel different from usual, come to the emergency department without hesitating. If thoughts of dying come, contact the local crisis line or call 119. If you like, I can explain this to your mother too.`, score: 2, fb: `Good. You explain that avoidance keeps the fear going, name step-by-step exposure therapy and medicine in general terms, arrange outpatient follow-up, say when the ED is still the right place, give a safety plan, and offer to involve his mother with his consent.` },
          { tl: `電車《でんしゃ》 に 乗《の》らない と 治《なお》りません よ。 明日《あした》 から 乗《の》って ください。`, en: `You won't get better unless you ride the train. Ride it from tomorrow.`, score: 1, fb: `The idea is right (avoidance maintains fear), but a sudden order is likely to fail. Exposure works best planned step by step, with support.` }
        ]
      }
    ],
    summary: {
      findings: [
        'Recurrent unexpected panic attacks: sudden pounding heart, chest tightness, breathlessness, tingling hands, fear of dying or going mad; peak within minutes, settle within the hour; third ED visit in two months; ED tests normal each time',
        'Anticipatory fear and avoidance of trains (taking taxis) and missed work: consistent with panic disorder, possibly with agoraphobic avoidance; heavy daily caffeine (coffee and energy drinks) as a likely trigger',
        'No other substances, hardly any alcohol; low mood and isolation (lives alone) but denies suicidal thoughts; mother in Osaka by phone',
        'Plan: psychoeducation on the panic cycle, slow breathing, cut caffeine down gradually, outpatient follow-up for step-by-step exposure-based therapy and medicine; ED for new or different symptoms; local crisis line or 119 if suicidal thoughts appear'
      ],
      mse: `27M, anxious on arrival, settled after slow breathing, cooperative, good eye contact. Speech normal rate and volume. Mood 「落《お》ち込《こ》んで います」; affect anxious, brighter after reassurance and explanation. Thought process linear. Thought content: fear of another attack, of dying or going mad; no delusions; denies suicidal thoughts. Perception: no hallucinations. Cognition grossly intact. Insight fair (asks whether it is "in his head", accepts the explanation). Judgment fair.`
    }
  },
  {
    id: 'hinata',
    title: 'Hinata: school refusal',
    level: 'N4',
    setting: 'Child and adolescent outpatient clinic. Hinata Matsumoto, 14, in her second year of junior high school, comes with her mother, Yuka Matsumoto, 46, who works at a clinic reception. Her father works away from home on weekdays. Hinata has not gone to school for two months. The doctor sees them together first, then Hinata alone. Staff call her Hinata-san.',
    steps: [
      {
        who: 'Mrs. Matsumoto (mother)',
        line: [`先生《せんせい》、 この 子《こ》、 もう 二《に》か月《げつ》 学校《がっこう》 に 行《い》って いない ん です。 学校《がっこう》 の ある 日《ひ》 の 朝《あさ》 に なる と、 お腹《なか》 が 痛《いた》い、 頭《あたま》 が 痛《いた》い って 言《い》って…。`, `Doctor, she hasn't been to school for two months now. On school mornings she says her stomach hurts, her head hurts...`],
        choices: [
          { tl: `お腹《なか》 の ほか に、 何《なに》 か 気《き》 に なる 様子《ようす》 は あります か、 お母《かあ》さん。`, en: `Apart from the stomach-aches, is there anything else about her that worries you, Mrs. Matsumoto?`, score: 1, fb: `Useful history, but you talk only to the parent, over Hinata's head. Greet the teenager directly as well.` },
          { tl: `教《おし》えて くださって ありがとう ございます、 松本《まつもと》さん。 ひなたさん も、 今日《きょう》 は 来《き》て くれて ありがとう。 まず お二人《ふたり》 一緒《いっしょ》 に お話《はなし》 を 聞《き》いて、 後《あと》 で ひなたさん と も 少《すこ》し 二人《ふたり》 で 話《はな》したい です。 いい です か。`, en: `Thank you for telling me, Mrs. Matsumoto. Hinata, thank you for coming today too. I'd like to hear from you both together first, and later talk with Hinata on her own for a little while. Is that all right?`, score: 2, fb: `Good. You thank the mother and speak to Hinata directly. Saying at the start that you will also see the teenager alone makes it routine, not a sign that something is wrong.` },
          { tl: `ひなたさん、 学校《がっこう》 は 行《い》かない と だめ です よ。`, en: `Hinata, you have to go to school, you know.`, score: 0, fb: `A lecture in the first minute tells her you are on the adults' side, and she will say less. Understand first.` }
        ]
      },
      {
        who: 'Mrs. Matsumoto (mother)',
        line: [`はい、 お願《ねが》いします。 ただ、 土曜日《どようび》 や 日曜日《にちようび》、 休《やす》み の 日《ひ》 は、 お昼《ひる》 に は 治《なお》って いる ん です。 本当《ほんとう》 に 痛《いた》い ん でしょう か。`, `Yes, please. But on Saturdays, Sundays and holidays it's gone by noon. Is she really in pain?`],
        choices: [
          { tl: `念《ねん》 の ため、 お腹《なか》 の 検査《けんさ》 を して みましょう か。`, en: `Shall we do a check of her stomach, just to be sure?`, score: 1, fb: `Looking for a physical cause belongs in the work-up, but first say that the pain is real and look at the pattern with them.` },
          { tl: `それ は 仮病《けびょう》 です ね。 学校《がっこう》 に 行《い》きたく ない だけ でしょう。`, en: `Then she's faking it. She just doesn't want to go to school.`, score: 0, fb: `Calling it faking is wrong and shames her in front of her mother. Pain that comes with stress is real pain, even when it follows a pattern.` },
          { tl: `痛《いた》み は 本当《ほんとう》 だ と 思《おも》います。 心配《しんぱい》 や ストレス が ある と、 お腹《なか》 や 頭《あたま》 が 本当《ほんとう》 に 痛《いた》く なる こと が あります。 ひなたさん、 痛《いた》い の は つらい です よね。 学校《がっこう》 の ある 日《ひ》、 家《いえ》 で は どんな ふう に 過《す》ごして います か。`, en: `I believe the pain is real. When there is worry or stress, the stomach or the head can really hurt. Hinata, the pain must be hard. On school days, how do you spend the day at home?`, score: 2, fb: `Good. Stomach-aches and headaches on school mornings are common in school refusal, and they are real; saying so helps both of them. Then you turn back to Hinata with an open question.` }
        ]
      },
      {
        who: 'Mrs. Matsumoto (mother)',
        line: [`ひなた、 先生《せんせい》 が 聞《き》いてる よ。 …すみません、 この 子《こ》、 あまり 話《はな》さなくて。 部屋《へや》 に こもって、 夜《よる》 遅《おそ》く まで ゲーム や 動画《どうが》 です。 朝《あさ》 は 起《お》こして も 起《お》きなくて…。 私《わたし》、 何度《なんど》 も 怒《おこ》って しまいました。 私《わたし》 の 育《そだ》て方《かた》 が 悪《わる》かった ん でしょう か。`, `Hinata, the doctor is asking you. ...I'm sorry, she doesn't say much. She shuts herself in her room, games and videos until late at night. In the morning I wake her and she won't get up... I've lost my temper with her so many times. Did I bring her up wrong?`],
        choices: [
          { tl: `心配《しんぱい》 だ から こそ、 つい 怒《おこ》って しまう こと も あります よね。 お母《かあ》さん の せい でも、 ひなたさん の せい でも ありません。 一緒《いっしょ》 に 考《かんが》えましょう。 では、 ここ から 少《すこ》し、 ひなたさん と 二人《ふたり》 で 話《はな》して も いい です か。 ひなたさん、 いい です か。`, en: `It's because you worry that you sometimes get angry. It isn't your fault, and it isn't Hinata's fault. Let's think about it together. Now, may I talk with Hinata on her own for a little while? Hinata, is that all right with you?`, score: 2, fb: `Good. You name the worry behind the anger and blame no one. Then you ask Hinata herself, not only her mother, before seeing her alone.` },
          { tl: `怒《おこ》る の は よく ない です ね。 これから は 怒《おこ》らない よう に して ください。`, en: `Getting angry isn't good. Please try not to from now on.`, score: 1, fb: `Calmer mornings do help, but said this way it adds to her guilt. Acknowledge the worry behind the anger first.` },
          { tl: `そう です ね。 お母《かあ》さん が 甘《あま》やかした の かも しれません。`, en: `Yes. Perhaps you've spoiled her.`, score: 0, fb: `Blaming the parent is inaccurate and harmful. School refusal usually has several causes, and a parent who feels blamed is less able to help.` }
        ]
      },
      {
        who: 'Hinata',
        line: [`…別《べつ》 に いい けど。 ここ で 話《はな》した こと、 お母《かあ》さん に 言《い》う？`, `...I don't mind. Will you tell my mother what I say here?`],
        choices: [
          { tl: `お母《かあ》さん は 保護者《ほごしゃ》 です から、 全部《ぜんぶ》 話《はな》します よ。`, en: `Your mother is your guardian, so I'll tell her everything.`, score: 0, fb: `She will now tell you little. Teenagers talk about bullying, mood and risk only when they trust that the space is private within clear limits.` },
          { tl: `いい 質問《しつもん》 です ね。 ここ で 話《はな》した こと は、 ひなたさん が いい と 言《い》わない かぎり、 お母《かあ》さん に は 言《い》いません。 ただ、 ひなたさん や ほか の 誰《だれ》か が 危《あぶ》ない とき は、 安全《あんぜん》 を 守《まも》る ため に、 ほか の 人《ひと》 に 伝《つた》える こと が あります。 その とき は、 誰《だれ》 に 伝《つた》える か、 先《さき》 に ひなたさん と 話《はな》します。 学校《がっこう》 に 行《い》けなく なる 前《まえ》 に、 何《なに》 か あった か 教《おし》えて もらえます か。`, en: `Good question. What you tell me here I won't tell your mother unless you say it's okay. But if you or someone else is in danger, I may have to tell other people, to keep everyone safe. If that happens, I'll talk with you first about who needs to know. Could you tell me whether something happened before you stopped being able to go to school?`, score: 2, fb: `Good. Confidentiality and its limits, explained at the start in words a teenager understands; the exact rules follow local law and your hospital's policy. Then an open question about what came before.` },
          { tl: `大丈夫《だいじょうぶ》。 何《なに》 も 言《い》いません よ。`, en: `Don't worry. I won't tell her anything.`, score: 1, fb: `Kind, but total secrecy is a promise you may not be able to keep if she is in danger. Explain the limits now so she does not feel betrayed later.` }
        ]
      },
      {
        who: 'Hinata',
        line: [`…授業《じゅぎょう》 で 発表《はっぴょう》 した とき、 頭《あたま》 が 真《ま》っ白《しろ》 に なって、 何《なに》 も 言《い》えなく なった。 みんな 笑《わら》ってる と 思《おも》った。 その 後《あと》、 グループ チャット で、 クラス の 二人《ふたり》 に からかわれた。`, `...When I gave a presentation in class, my mind went blank and I couldn't say anything. I thought everyone was laughing. Afterwards, two people in my class made fun of me in the group chat.`],
        choices: [
          { tl: `それ は つらかった です ね。 話《はな》して くれて ありがとう。 チャット の こと は、 今《いま》 も 続《つづ》いて います か。 ほか に も、 嫌《いや》 な こと を 言《い》われたり、 されたり した こと は あります か。`, en: `That sounds really painful. Thank you for telling me. Is the group chat thing still going on? Has anyone said or done anything else hurtful to you?`, score: 2, fb: `Good. You validate, then ask directly whether the bullying goes on and whether there is more. Online bullying is easy for adults to miss unless they ask.` },
          { tl: `それ くらい で 学校《がっこう》 を 休《やす》む の は、 もったいない です よ。`, en: `It's a shame to miss school over something like that.`, score: 0, fb: `Minimising what hurt her makes her stop talking. What matters is how it felt to her.` },
          { tl: `発表《はっぴょう》 は 誰《だれ》 でも 緊張《きんちょう》 します よ。 気《き》 に しないで。`, en: `Everyone gets nervous at presentations. Don't let it bother you.`, score: 1, fb: `Normalising nerves is fine, but "don't let it bother you" brushes past the mocking. Ask about the bullying.` }
        ]
      },
      {
        who: 'Hinata',
        line: [`もう 言《い》われて ない。 でも、 みんな に どう 思《おも》われてる か、 怖《こわ》い。 …時々《ときどき》、 消《き》えたい って 思《おも》う。`, `They don't say it anymore. But I'm scared of what everyone thinks. ...Sometimes I think I want to disappear.`],
        choices: [
          { tl: `そんな こと 言《い》わないで。 お母《かあ》さん が 悲《かな》しむ よ。`, en: `Don't say that. Your mother would be sad.`, score: 0, fb: `Guilt shuts the subject down, and she learns not to tell adults. Stay calm and ask more.` },
          { tl: `消《き》えたい と 思《おも》う ほど、 つらい ん です ね。`, en: `It hurts so much that you want to disappear.`, score: 1, fb: `A good reflection, but stopping here leaves the risk unknown. 消《き》えたい needs a direct, calm follow-up question.` },
          { tl: `話《はな》して くれて ありがとう。 大事《だいじ》 な こと なので、 もう 少《すこ》し 聞《き》かせて ください。 消《き》えたい と 思《おも》う とき、 死《し》にたい と いう 気持《きも》ち も あります か。 自分《じぶん》 を 傷《きず》つけた こと は あります か。`, en: `Thank you for telling me. It's important, so let me ask a little more. When you feel you want to disappear, do you also feel you want to die? Have you ever hurt yourself?`, score: 2, fb: `Good. 消《き》えたい can mean anything from wanting to escape to a wish to die, so ask directly and calmly. Asking does not put the idea in her head.` }
        ]
      },
      {
        who: 'Hinata',
        line: [`死《し》にたい とか じゃ ない。 何《なに》 も した こと ない。 ただ、 いなく なりたい って いう か…。`, `It's not that I want to die. I've never done anything. It's more like I just want to not be here...`],
        choices: [
          { tl: `わかりました。 お母《かあ》さん に も 今《いま》 の 話《はなし》 を 伝《つた》えて おきます ね。`, en: `I see. I'll let your mother know what you just told me.`, score: 1, fb: `Parents often need to know, but you have just promised her a say. Unless she is in danger, ask her what may be shared and how.` },
          { tl: `正直《しょうじき》 に 話《はな》して くれて ありがとう。 もし 消《き》えたい 気持《きも》ち が 強《つよ》く なったら、 一人《ひとり》 で 我慢《がまん》 しないで、 お母《かあ》さん か、 ここ の 私《わたし》たち に 言《い》って ください。 それ から、 チャット の こと や 今日《きょう》 の 話《はなし》、 お母《かあ》さん に は どこ まで 伝《つた》えて いい です か。`, en: `Thank you for being honest. If the feeling of wanting to disappear gets stronger, don't keep it to yourself: tell your mother or us here. And how much of today, such as the group chat, may I share with your mother?`, score: 2, fb: `Good. You accept her answer, agree what she will do if the feeling grows, and ask what may be shared, keeping your earlier promise. Record the risk assessment and review it at every visit.` },
          { tl: `それ なら 大丈夫《だいじょうぶ》 です ね。 心配《しんぱい》 いりません。`, en: `Then you're fine. Nothing to worry about.`, score: 0, fb: `Closing the subject tells her it was not worth raising. A passive wish to disappear needs a plan for what to do if it grows, and review at later visits.` }
        ]
      },
      {
        who: 'Hinata',
        line: [`チャット の こと は、 お母《かあ》さん に 言《い》って も いい。 でも、 学校《がっこう》 に 行《い》く の は、 まだ 怖《こわ》い。`, `You can tell my mother about the group chat. But going to school is still scary.`],
        choices: [
          { tl: `怖《こわ》い の は 自然《しぜん》 な こと です。 いきなり 全部《ぜんぶ》 では なく、 小《ちい》さな 一歩《いっぽ》 から 始《はじ》めましょう。 まず、 毎朝《まいあさ》 同《おな》じ 時間《じかん》 に 起《お》きる こと。 それ から、 ひなたさん が よければ、 お母《かあ》さん と 一緒《いっしょ》 に、 学校《がっこう》 の スクールカウンセラー に 相談《そうだん》 して みません か。 どう 思《おも》います か。`, en: `It's natural to be scared. Not everything at once: let's start with small steps. First, getting up at the same time every morning. Then, if you're okay with it, how about talking with the school counsellor together with your mother? What do you think?`, score: 2, fb: `Good. A plan in small steps: a regular wake-up time, a gradual return, and the school counsellor with her consent and her mother involved. Asking her opinion keeps her part of the plan.` },
          { tl: `怖《こわ》く ない よう に、 私《わたし》 から 学校《がっこう》 に 全部《ぜんぶ》 話《はな》して おきます ね。`, en: `So it won't be scary, I'll tell the school everything.`, score: 1, fb: `Contact with the school helps, but only with her agreement and only about what she agrees to share. Deciding for her breaks the trust you built.` },
          { tl: `怖《こわ》がって いたら、 ずっと 行《い》けません よ。 明日《あした》 から 行《い》きましょう。`, en: `If you stay scared, you'll never go. Let's start tomorrow.`, score: 0, fb: `Pressure for a sudden full return usually raises the anxiety and the physical symptoms. Avoidance does keep fear going, but the answer is small steps she agrees to.` }
        ]
      }
    ],
    summary: {
      findings: [
        'School refusal for two months in a 14-year-old: stomach-aches and headaches on school mornings that settle by noon at weekends and on holidays; stays in her room, games and videos late at night, sleeps late',
        'Began after she froze during a class presentation and thought everyone was laughing; two classmates mocked her in the group chat afterwards, now stopped; ongoing fear of what others think (assess social anxiety)',
        'Passive wish to disappear (消《き》えたい) without a wish to die, plan or self-harm (asked, denies): agreed what she will do if it grows; review at every visit',
        'Plan in general terms: regular sleep and wake-up time, small steps back to school, the school counsellor with her consent; support the mother without blame; confidentiality and its limits explained when seen alone'
      ],
      mse: `14F, seen with her mother, then alone. Quiet with her mother present, more open when seen alone. Speech soft, short replies. Mood: 「怖《こわ》い」 about what classmates think; affect anxious. Thought process linear. Thought content: worry about others' judgment; passive wish to disappear (消《き》えたい), denies wish to die, plan or self-harm. Oriented. Insight partial. Judgment fair.`
    }
  }
]);
