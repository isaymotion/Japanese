/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* Discharge practice cases, part 6 (0.19.0): Daiki Okada, discharge from the emergency department. Same shape as psych-discharge-cases-1.js. Id: panic. */
window.PSYCH_DISCHARGE_CASES = (window.PSYCH_DISCHARGE_CASES || []).concat([
 {
  id: "panic",
  title: "Daiki leaves the emergency department: the alarm explained, a plan for the next attack",
  level: "N3",
  dx: "Panic disorder (provisional), possibly with agoraphobic avoidance",
  decision: { discharge: true, why: "Discharge from the emergency department tonight. The emergency physician looked for medical causes, and the tests were normal tonight and at both earlier visits. The attack settled, he practised slow breathing and used it, and he is calm. He denies suicidal and homicidal thoughts, uses no substances other than a lot of caffeine, and hardly drinks. He understands the explanation of the body's alarm and can say what he will do if another attack comes. The risks after he leaves are another attack and more avoidance, a medical cause missed if a new or different symptom appears, and low mood while he lives alone and is off work. The plan covers them: outpatient psychiatry within the week for step-by-step therapy and a talk about medicine, slow breathing, cutting caffeine down gradually, the emergency department for new or different symptoms, the local crisis line or 119 if thoughts of suicide appear, and a call to his mother that he will make himself. Keeping him overnight would not treat panic, and it could confirm his fear that the attacks are dangerous." },
  setting: "Emergency department, the same night, about two hours after your psychiatry review. Daiki Okada, 27, a systems engineer who lives alone (his mother lives in Osaka and they talk by phone), came in after a sudden attack on a crowded commuter train. You are the psychiatry resident who saw him; the emergency physician is ready to let him go home and asks you to see him once more before he leaves. There is no ward stay: adapt the questions about the admission. Staff address him as Okada-san.",
  chart: [
   "Emergency department tonight, third visit in two months: sudden attack on a crowded commuter train, with pounding heart, tight chest, breathlessness, tingling hands and fear of dying. The attacks come on suddenly, peak within minutes and settle within the hour. The emergency physician looked for medical causes (the heart and others): the tests were normal tonight and at both earlier visits. Psychiatry was called. Since the attacks began he fears another one, avoids trains (takes taxis) and has missed a few days of work. Coffee and energy drinks most days, many; hardly any alcohol; no other substances.",
   "Psychiatry review MSE, about two hours ago: anxious on arrival, settled after slow breathing; cooperative, good eye contact. Speech normal. Mood “落《お》ち込《こ》んで います” (I've been feeling down); affect anxious, brighter after explanation. Thought process linear. Thought content: fear of another attack, of dying or going mad; no delusions; denies suicidal and homicidal thoughts. No hallucinations. Oriented. Insight fair (grade 4: asked whether it was “in his head”, then accepted the explanation). Judgment fair.",
   "Emergency department course (no ward stay): the panic cycle explained as the body's alarm, with his symptoms named as real; slow breathing practised with the psychiatrist, and he settled. No medicine given in the emergency department. Caffeine discussed as a likely trigger. Low mood and isolation (lives alone, off work), no suicidal thoughts. Sleep poor for the last weeks from worry about attacks.",
   "Plan: home tonight. No new medicine; medicine and step-by-step exposure-based therapy to be discussed at an outpatient psychiatry visit within the week. Cut coffee and energy drinks down gradually, not suddenly. Slow breathing when an attack comes. Return to the emergency department for new or different symptoms (chest pain that feels different, fainting), 119 in an emergency. The local crisis line or 119 if thoughts of suicide appear. He will phone his mother himself (his choice)."
  ],
  fields: {
   behavior: {
    obs: "Sitting up on the trolley in a curtained cubicle, in his work clothes, jacket on his lap; tidy, a little creased after the evening. Sits still and breathes evenly. Good eye contact, polite, asks questions of his own.",
    ans: {
     0: ["だいぶ 落《お》ち着《つ》きました。 さっき の 呼吸《こきゅう》 の 練習《れんしゅう》 が 効《き》いた みたい です。", "Much calmer. The breathing practice earlier seems to have worked."],
     1: ["はい、 大丈夫《だいじょうぶ》 です。 帰《かえ》る 前《まえ》 に、 聞《き》いて おきたい こと も あります し。", "Yes, that's fine. There are a few things I want to ask before I go, too."]
    },
    need: ["Calm", "Cooperative", "Good eye contact", ["Well groomed", "Fairly groomed"]],
    wrong: {
     Restless: "He was anxious on arrival. Now he sits still and breathes evenly.",
     Guarded: "He answers openly and asks his own questions.",
     Withdrawn: "He talks readily; being down lately has not made him withdrawn in the interview."
    },
    doc: "Calm, cooperative, good eye contact, well groomed (work clothes, a little creased); breathing evenly; asks appropriate questions",
    why: "Compare with the review two hours ago: anxious on arrival then, calm now. Writing that he settled with slow breathing, without medicine, matters for the next doctor."
   },
   mood: {
    obs: "Looks tired but relieved. Smiles a little when he talks about the alarm. Becomes more serious when he mentions the train.",
    ans: {
     0: ["ここ 何週間《なんしゅうかん》 か は、 ずっと 不安《ふあん》 で、 落《お》ち込《こ》んで いました。 でも 今夜《こんや》 は、 説明《せつめい》 を 聞《き》いて、 少《すこ》し ほっと して います。", "For the last few weeks I've been anxious all the time, and down. But tonight, after hearing the explanation, I feel a little relieved."],
     1: ["まだ 少《すこ》し 心配《しんぱい》 です。 また 電車《でんしゃ》 で 発作《ほっさ》 が 来《き》たら、 と 思《おも》う と。 でも、 来《き》た とき より は ずっと 楽《らく》 です。", "I'm still a bit worried. When I think another attack might come on the train. But it's much easier than when I came in."],
     2: ["五《ご》 か 六《ろく》 です。 さっき 先生《せんせい》 と 話《はな》した とき は 四《よん》 ぐらい でした。", "A five or a six. When I talked with you earlier it was about a four."]
    },
    quote: "少《すこ》し ほっと して います。 (I feel a little relieved.)",
    key: [0, 1],
    need: ["Anxious mood", "Congruent affect"],
    ok: ["Dysphoric mood", "Full range affect"],
    wrong: {
     "Euthymic mood": "Relief is real, but he still fears another attack and has been down for weeks. Record the relief in his words and the anxiety as the mood.",
     "Flat affect": "He smiles at the alarm and grows serious about the train: his affect moves with the topic.",
     "Labile affect": "His affect changes gently with what he is talking about, not suddenly or out of proportion."
    },
    doc: "“少《すこ》し ほっと して います。” (I feel a little relieved.) Mood 5–6/10 (4/10 at the review). Anxious mood, still worried about another attack; down for the last weeks; congruent affect, brighter than at the review",
    why: "Quote his words. Relief after a clear explanation is common, but it does not remove the fear of the next attack, and the low mood he reported two hours ago still needs follow-up at the outpatient visit. At the review the mood was recorded as low (落《お》ち込《こ》んで います) with anxiety; tonight the worry is what he names now, so anxious is keyed and a low (dysphoric) mood is accepted."
   },
   process: {
    obs: "Tells tonight's story in order and stays on the point. Adds the alarm explanation in his own words.",
    ans: {
     0: ["入院《にゅういん》 は して いません けど……。 満員電車《まんいんでんしゃ》 で 急《きゅう》 に 胸《むね》 が ドキドキ して、 息《いき》 が できなく なって、 救急《きゅうきゅう》 に 来《き》ました。 二《に》か月《げつ》 で 三回目《さんかいめ》 です。 検査《けんさ》 は 今回《こんかい》 も 異常《いじょう》 なし でした。 先生《せんせい》 に 体《からだ》 の 警報《けいほう》 の 話《はなし》 を 聞《き》いて、 一緒《いっしょ》 に 呼吸《こきゅう》 の 練習《れんしゅう》 を しました。", "I wasn't admitted, though... On a packed train my heart suddenly started pounding, I couldn't breathe, and I came to the emergency department. It's the third time in two months. The tests were normal again this time. You told me about the body's alarm, and we practised breathing together."],
     1: ["今夜《こんや》 は 家《いえ》 に 帰《かえ》って 寝《ね》ます。 母《はは》 に は、 自分《じぶん》 で 電話《でんわ》 します。 今週中《こんしゅうちゅう》 に 精神科《せいしんか》 の 外来《がいらい》 に 行《い》きます。 コーヒー と エナジードリンク は、 少《すこ》し ずつ 減《へ》らします。", "Tonight I'll go home and sleep. I'll phone my mother myself. Some time this week I'll go to the psychiatry outpatient clinic. I'll cut down on coffee and energy drinks little by little."]
    },
    need: ["Goal-directed", "Coherent and relevant"],
    wrong: {
     "Some circumstantiality": "He gives the main events without long detours.",
     "Flight of ideas": "He stays on one topic at a time, at a normal pace."
    },
    doc: "Goal-directed, coherent and relevant; gives tonight's events in order and a clear plan for home",
    why: "The question asks about the admission. For an emergency department discharge, ask about tonight instead: 今夜《こんや》 の こと を 話《はな》して いただけます か。 His plan for home is the more useful part: it shows what he took in."
   },
   positive: {
    obs: "Attends to you throughout. Does not look around the cubicle or seem distracted.",
    ans: {
     0: ["いいえ、 聞《き》こえません。 そういう こと は 一度《いちど》 も ない です。", "No, I don't. That has never happened."],
     2: ["いいえ、 見《み》えません。", "No, I don't."],
     3: ["いいえ。 だれ か に 何《なに》 か される と いう より、 自分《じぶん》 の 心臓《しんぞう》 が 止《と》まる の が 怖《こわ》かった ん です。", "No. It wasn't that someone would do something to me. I was scared my own heart would stop."],
     4: ["発作《ほっさ》 の とき は、 本当《ほんとう》 に 死《し》ぬ と 思《おも》って いました。 今《いま》 は、 体《からだ》 の 警報《けいほう》 が 鳴《な》って いた ん だ と 思《おも》います。 でも、 また 来《き》たら、 やっぱり 怖《こわ》い と 思《おも》います。", "During the attack I really thought I was going to die. Now I think the body's alarm was going off. But if it comes again, I think I'll still be scared."]
    },
    key: [3, 4],
    need: ["No hallucinations elicited", "Not responding to internal stimuli"],
    wrong: {
     "Delusions no longer held": "He never had a delusion. The fear of dying during an attack is a catastrophic misreading of real body sensations, and he can question it now.",
     "Residual persecutory ideas, less intense": "His fear is about his own heart and mind, not about other people.",
     "Responding to internal stimuli": "He attends to you throughout."
    },
    doc: "No hallucinations elicited; not responding to internal stimuli; no delusions; during attacks fears dying or going mad, now sees this as the body's alarm but still fears another attack",
    why: "Ask the screening questions anyway: an attack with fear of going mad is not psychosis, and you document that it was checked. Adapt question 4 to what he believed during the attack (that he would die)."
   },
   negative: {
    obs: "No ward activities to ask about: an emergency department visit. He talks easily, is well kempt, and speaks about going back to work.",
    ans: {
     0: ["ここ は 救急《きゅうきゅう》 なので、 活動《かつどう》 は 特《とく》に ない です けど……。", "This is the emergency department, so there aren't really any activities..."],
     1: ["いいえ。 ずっと カーテン の 中《なか》 に いました から。", "No. I've been behind the curtain the whole time."],
     2: ["はい。 早《はや》く 仕事《しごと》 に 戻《もど》りたい です。 締《し》め切《き》り も あります し。", "Yes. I want to get back to work soon. I have deadlines, too."],
     3: ["はい、 毎日《まいにち》 シャワー は 浴《あ》びて います。", "Yes, I shower every day."]
    },
    key: [2],
    need: ["None noted"],
    wrong: {
     Avolition: "He has missed work because he fears another attack, not because he has lost his drive: he wants to go back.",
     Asociality: "He lives alone and has felt isolated, but he keeps in touch with his mother by phone. Record the isolation as a risk, not as a negative symptom.",
     Anhedonia: "He has felt down, but nothing in the interview shows a loss of interest. Ask about it at the outpatient visit."
    },
    doc: "None noted; wants to return to work; self-care intact; missed days of work from fear of attacks (avoidance); lives alone, feels isolated",
    why: "These questions are built for psychosis on a ward. In the emergency department, use them to check drive and self-care: they help you tell avoidance (fear) from depression (loss of drive)."
   },
   suicide: {
    ans: {
     0: ["いいえ、 ない です。 さっき も 聞《き》かれました けど、 それ は ない です。", "No, I haven't. You asked me earlier too, and no, nothing like that."],
     1: ["ありません。", "No."],
     2: ["地域《ちいき》 の 相談《そうだん》 窓口《まどぐち》 か ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》 します。 母《はは》 に も 話《はな》す と 思《おも》います。", "I'll call the local crisis line or 119. I think I'd tell my mother too."]
    },
    key: [0, 2],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    doc: "Denies suicidal ideation, plan, or intent (asked again before discharge); knows to contact the local crisis line or 119 if such thoughts appear, would also tell his mother",
    why: "Ask again before he leaves, even though he denied it two hours ago: he has low mood, lives alone and is off work. Repeating the question is routine, not a sign of distrust; say so."
   },
   homicide: {
    ans: {
     0: ["いいえ、 ありません。", "No, I haven't."],
     1: ["いない です。 救急《きゅうきゅう》 の 皆《みな》さん に は、 三回《さんかい》 も 来《き》て しまって、 申《もう》し訳《わけ》ない くらい です。", "No one. If anything, I feel sorry to the emergency staff for coming three times."]
    },
    key: [0],
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation",
    why: "Ask it briefly. If he apologises for coming back, tell him it was right to come: chest symptoms need checking, and the plan tonight tells him when to come again."
   },
   orientation: {
    obs: "He gives the weekday and the time of month correctly, glancing at the clock: it is nearly midnight.",
    ans: {
     0: ["木曜日《もくようび》、 十一月《じゅういちがつ》 の 半《なか》ば です。 もう すぐ 日付《ひづけ》 が 変《か》わります けど。", "It's Thursday, the middle of November. It'll be the next day soon, though."],
     1: ["病院《びょういん》 の 救急外来《きゅうきゅうがいらい》 です。", "The hospital's emergency department."],
     2: ["精神科《せいしんか》 の 先生《せんせい》 です。 さっき も 来《き》て くださいました。", "You're the psychiatrist. You came to see me earlier too."]
    },
    need: ["Oriented to time, place, and person (×3)"],
    wrong: {
     "Disoriented to time": "He gives the weekday and the month correctly, and knows it is almost midnight."
    },
    doc: "Oriented to time, place, and person (×3)",
    why: "Fully oriented, as at the review. Write it even when it seems obvious: confusion would point to a medical cause, not to panic."
   },
   memory: {
    ans: {
     0: ["ボール、 木《き》、 鍵《かぎ》。", "Ball, tree, key."],
     1: ["ボール、 木《き》、 鍵《かぎ》 です。", "Ball, tree, key."],
     2: ["朝《あさ》 は コーヒー だけ でした。 いつも そう です。", "Just coffee in the morning. It's always like that."],
     3: ["入院《にゅういん》 は して いません よ ね。 今夜《こんや》、 電車《でんしゃ》 で 発作《ほっさ》 が 起《お》きて、 ここ に 来《き》ました。", "I haven't been admitted, have I. Tonight I had an attack on the train and came here."],
     4: ["大阪《おおさか》 です。 母《はは》 は 今《いま》 も 大阪《おおさか》 に います。", "Osaka. My mother still lives there."]
    },
    key: [3],
    need: ["Intact immediate, recent, and remote memory"],
    wrong: {
     "Impaired recent memory": "He recalls all three words and gives tonight's events in order."
    },
    doc: "Intact immediate (3/3), recent (3/3 recall, tonight's events), and remote memory; breakfast was coffee only",
    why: "Adapt the admission question to tonight. His breakfast answer is worth a note: coffee on an empty stomach is part of the caffeine picture."
   },
   insight: {
    ans: {
     0: ["電車《でんしゃ》 で 発作《ほっさ》 が 起《お》きて、 心臓《しんぞう》 が 止《と》まる と 思《おも》った から です。 今《いま》 は、 体《からだ》 の 警報《けいほう》 が 急《きゅう》 に 鳴《な》った ん だ と わかりました。 コーヒー の とりすぎ で、 鳴《な》りやすく なって いた の かも しれません。", "Because I had an attack on the train and thought my heart would stop. Now I understand the body's alarm went off suddenly. Too much coffee may have made it go off more easily."],
     1: ["パニック障害《しょうがい》 かも しれない、 と 言《い》われました。 気《き》 の せい じゃ なくて、 治療《ちりょう》 できる もの だ って。 それ を 聞《き》いて、 少《すこ》し ほっと しました。", "I was told it might be panic disorder. That it's not in my head, and that it can be treated. Hearing that, I felt a little relieved."],
     2: ["今夜《こんや》 は 薬《くすり》 は 出《で》て いません よ ね。 薬《くすり》 と、 少《すこ》し ずつ 慣《な》れて いく 練習《れんしゅう》 の こと は、 外来《がいらい》 で 相談《そうだん》 する ん です よ ね。 自分《じぶん》 でも、 ちゃんと 治《なお》したい です。", "There's no medicine tonight, right? Medicine, and practice in getting used to things little by little, are for the outpatient visit. I really want to get better myself."],
     3: ["薬《くすり》 は まだ です けど……。 電車《でんしゃ》 を 避《さ》け続《つづ》けたら、 怖《こわ》さ が 長《なが》く 続《つづ》く ん です よ ね。 それ に、 コーヒー を 急《きゅう》 に やめる と 頭《あたま》 が 痛《いた》く なる かも しれない から、 少《すこ》し ずつ 減《へ》らします。", "There's no medicine yet... If I keep avoiding the train, the fear lasts longer, right? And if I stop coffee suddenly I might get headaches, so I'll cut down little by little."]
    },
    key: [0, 1],
    need: ["Good", "Grade 5: intellectual insight"],
    ok: ["Fair", "Grade 4: aware, cause unknown in self"],
    wrong: {
     "Grade 3: blames others/external factors": "He does not blame anyone. He names caffeine as his own habit that makes the alarm go off more easily, and accepts that the fear and avoidance need treatment.",
     "Grade 6: true emotional insight": "He understands the explanation, but he has not yet changed what he does (he still avoids the train). That comes with treatment.",
     Poor: "He accepts the explanation, wants treatment and has a plan."
    },
    doc: "Good (grade 5): understands the attacks as the body's alarm, real but not dangerous; links caffeine to the attacks; knows avoidance keeps the fear going; accepts outpatient treatment (was fair, grade 4, at the review)",
    why: "Insight improved within two hours, after a clear explanation: at the review he asked whether it was in his head. Grade 4 is accepted if you weigh his remaining fear. Adapt the medicine questions: there is no medicine yet, so ask what he understands about treatment."
   },
   judgment: {
    ans: {
     0: ["薬《くすり》 は まだ ない です けど、 困《こま》ったら 外来《がいらい》 に 電話《でんわ》 して 相談《そうだん》 します。", "I don't have any medicine yet, but if I'm stuck I'll phone the outpatient clinic and ask."],
     1: ["声《こえ》 は 聞《き》こえません けど、 また 発作《ほっさ》 が 来《き》たら、 まず ゆっくり 呼吸《こきゅう》 を します。 波《なみ》 の よう に 引《ひ》いて いく ん です よ ね。 でも、 いつも と 違《ちが》う 胸《むね》 の 痛《いた》み が あったり、 気《き》 を 失《うしな》いそう に なったり したら、 ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》 します。", "I don't hear voices, but if another attack comes, I'll start by breathing slowly. It passes like a wave, right? But if I have chest pain that's different from usual, or feel like I'm going to faint, I'll call 119."],
     2: ["すぐ 周《まわ》り の 人《ひと》 に 知《し》らせて、 非常口《ひじょうぐち》 から 外《そと》 に 出《で》ます。", "I'd warn the people around me straight away and go out through the emergency exit."],
    },
    key: [1],
    need: ["Intact test judgment", "Intact social judgment"],
    ok: ["Good", "Fair"],
    wrong: {
     "Impaired social judgment": "Coming to the emergency department with chest symptoms was sensible. Avoiding the train is a symptom to treat step by step, not a failure of judgment."
    },
    doc: "Intact test and social judgment; plans slow breathing for a usual attack, 119 or the emergency department for chest pain that feels different or near-fainting; agrees to outpatient follow-up",
    why: "Adapt the voices question to what he has: another attack. A good answer separates a usual attack (slow breathing, it passes) from new or different symptoms (urgent care). Do not tell him never to come back: tell him when to come."
   },
   sleep: {
    obs: "No sleep chart: an emergency department visit. Ask him.",
    ans: {
     0: ["ここ 何週間《なんしゅうかん》 か、 よく 眠《ねむ》れて いません。 布団《ふとん》 に 入《はい》って も、 また 発作《ほっさ》 が 来《く》る か と 思《おも》う と、 なかなか 寝《ね》つけなくて。", "For the last few weeks I haven't been sleeping well. Even when I get into bed, I think another attack might come, and I can't get to sleep."],
     1: ["たまに 目《め》 が 覚《さ》めます けど、 それ より 寝《ね》つき が 悪《わる》い ん です。", "I wake up now and then, but the bigger problem is getting to sleep."],
     2: ["昼間《ひるま》 は 眠《ねむ》い です。 だから、 また コーヒー を 飲《の》んで しまう ん です。", "I'm sleepy in the daytime. So I end up drinking more coffee."],
    },
    key: [0, 2],
    need: ["Poor", "Difficulty initiating sleep"],
    wrong: {
     Good: "He has slept poorly for the last few weeks.",
     "7–8 hours, uninterrupted": "He has trouble getting to sleep and wakes now and then.",
     "Frequent awakenings": "He wakes now and then, but his main problem is getting to sleep.",
     "Daytime sedation": "He is sleepy by day from poor sleep, not from a medicine: none was given.",
     "Reduced need for sleep": "He wants to sleep and cannot, and he is sleepy by day. That is insomnia, not a reduced need for sleep."
    },
    doc: "Poor for the last few weeks: difficulty initiating sleep from worry about attacks, occasional waking; sleepy by day and drinks more coffee",
    why: "Name the cycle: poor sleep, more caffeine by day, an alarm that goes off more easily, more worry at night. Cutting caffeine down gradually, starting with the later cups, helps both sleep and the attacks."
   },
   adverse: {
    obs: "Emergency department record: no medicine given. Tests normal tonight and at the two earlier visits. No injury. Settled with slow breathing.",
    ans: {
     0: ["今夜《こんや》 は、 薬《くすり》 は 何《なに》 も もらって いません。", "I haven't been given any medicine tonight."],
     1: ["いいえ。 呼吸《こきゅう》 の 練習《れんしゅう》 で、 だいぶ 楽《らく》 に なりました。", "No. The breathing practice made things much easier."]
    },
    key: [0, 1],
    need: ["None"],
    wrong: {
     "Medical illness during admission": "The emergency physician looked for medical causes and the tests were normal. Record that in the chart and the diagnosis.",
     "Withdrawal symptoms": "He has not stopped caffeine. Warn him that stopping suddenly can cause headaches and tiredness; that is why he cuts down gradually.",
     Sedation: "No medicine was given.",
     "Fall or injury": "He was not hurt."
    },
    doc: "None; no medicine given in the emergency department; tests normal tonight and at two earlier visits; settled with slow breathing",
    why: "Adapt the questions to tonight. Writing “no medicine given” matters: the outpatient doctor needs to know he settled without one."
   },
   diagnosis: {
    ans: {
     0: ["パニック障害《しょうがい》……。 ちゃんと 名前《なまえ》 が ある ん です ね。 治療《ちりょう》 できる って 聞《き》いて、 少《すこ》し ほっと しました。", "Panic disorder... So it has a proper name. Hearing that it can be treated, I feel a little relieved."],
     2: ["そう 言《い》って もらえる と……。 コーヒー の 飲《の》みすぎ も、 僕《ぼく》 が 悪《わる》い の か と 思《おも》って いました。", "When you say that... I thought drinking too much coffee was my fault too."]
    },
    key: [0, 2],
    need: ["Other comorbid: ___"],
    wrong: {
     "Major depressive disorder, recurrent": "He reports low mood, but a depressive disorder has not been assessed tonight. Note the low mood and follow it up at the outpatient visit.",
     "Methamphetamine-induced psychotic disorder, with ___ use disorder": "He uses no substances other than caffeine and has no psychotic symptoms."
    },
    doc: "Panic disorder (provisional), possibly with agoraphobic avoidance (avoids trains, takes taxis); heavy daily caffeine as a likely trigger; low mood and isolation, to follow up; medical causes looked at by the emergency physician, tests normal tonight and at two earlier visits",
    why: "The form has no pick for panic disorder; the nearest is “Other comorbid: ___”. Write it there and make clear that it is the working diagnosis, not a comorbidity. Provisional, because it rests on one emergency review; the outpatient visit confirms it and looks at the avoidance. Explain it as the body's alarm: the symptoms are real, not dangerous, and treatable. Adapt question 2 (it is not your fault) and leave out the line about curses unless he raises a belief like that."
   },
   medications: {
    ans: {
     0: ["新《あたら》しい 薬《くすり》 は、 今夜《こんや》 は ない ん です よ ね。", "There's no new medicine tonight, right?"],
     2: ["新《あたら》しい 薬《くすり》 は 今夜《こんや》 は なし。 薬《くすり》 と 練習《れんしゅう》 の こと は、 外来《がいらい》 で 相談《そうだん》 します。 コーヒー と エナジードリンク は、 急《きゅう》 に やめないで、 少《すこ》し ずつ 減《へ》らします。", "No new medicine tonight. Medicine and the practice, I'll talk about at the outpatient clinic. Coffee and energy drinks, I won't stop suddenly: I'll cut down little by little."],
     4: ["はい。 もし 外来《がいらい》 で 薬《くすり》 が 始《はじ》まったら、 自分《じぶん》 で 勝手《かって》 に やめない よう に します。", "Yes. If medicine is started at the outpatient clinic, I won't stop it on my own."]
    },
    key: [2],
    need: ["Teach-back done, correct"],
    wrong: {
     "Sertraline ___ mg tab, ___": "No medicine was started tonight. Whether to start one is decided at the outpatient visit, together with therapy, where it can be followed up.",
     "Teach-back incorrect, re-taught": "His teach-back was correct: no new medicine, treatment to be discussed at the outpatient visit, caffeine cut down gradually."
    },
    doc: "No new medicine started; no medicine given in the emergency department; medicine and step-by-step therapy to be discussed at the outpatient visit; coffee and energy drinks to be cut down gradually, not suddenly; teach-back correct",
    why: "The form expects a list of medicines. When there are none, write that plainly, so the next doctor knows nothing was started. The caffeine plan is part of the treatment: teach why it is gradual (headaches and tiredness if stopped suddenly)."
   },
   aftercare: {
    ans: {
     0: ["今週中《こんしゅうちゅう》 に、 精神科《せいしんか》 の 外来《がいらい》 に 行《い》きます。", "Some time this week, I'll go to the psychiatry outpatient clinic."],
     1: ["一人暮《ひとりぐ》らし なので、 家《いえ》 に は だれ も いません。 母《はは》 に は、 自分《じぶん》 で 電話《でんわ》 して 話《はな》します。 先生《せんせい》 から の 説明《せつめい》 は、 必要《ひつよう》 に なったら お願《ねが》い します。", "I live alone, so there's no one at home. I'll phone my mother and tell her myself. If I need you to explain it to her, I'll ask."],
     2: ["いつも と 違《ちが》う 胸《むね》 の 痛《いた》み とか、 気《き》 を 失《うしな》う とか、 新《あたら》しい 症状《しょうじょう》 が 出《で》たら、 救急《きゅうきゅう》 です よ ね。 いつも の 発作《ほっさ》 なら、 まず 呼吸《こきゅう》 を して、 波《なみ》 が 引《ひ》く の を 待《ま》ちます。 それでも 心配《しんぱい》 なら、 来《き》て いい ん です よ ね。", "If I get something new, like chest pain that's different from usual, or fainting, it's the emergency department, right? If it's a usual attack, I'll breathe first and wait for the wave to pass. And if I'm still worried, it's all right to come, isn't it?"],
     3: ["はい。 死《し》にたい 気持《きも》ち に なったら、 地域《ちいき》 の 相談《そうだん》 窓口《まどぐち》 か ｜119番《ひゃくじゅうきゅうばん》 です ね。", "Yes. If I ever feel I want to die, the local crisis line or 119."]
    },
    key: [2, 1],
    need: ["Outpatient follow-up in 1–2 weeks"],
    ok: ["Referred to ___"],
    wrong: {
     "Safety plan made with patient and family": "A safety plan was made, but with him alone: no family was present tonight. The pick says \"and family\", so write the plan made with the patient in the details.",
     "Family oriented on warning signs": "His mother is in Osaka and was not involved tonight. He chose to tell her himself; respect that, and keep the offer open.",
     "Follow-up appointment date and clinic given in writing": "No date was set tonight: the plan is an outpatient psychiatry visit within the week, with no date yet. Do not record a date that was not given. If your department books one before he leaves, give it in writing and record it.",
     "Discharge deferred: ___": "Medical causes were looked at and the tests were normal, he has settled, denies suicidal thoughts and has a plan. Keeping him would not treat panic.",
     "Transferred to ___ unit due to ___": "He goes home."
    },
    doc: "Home tonight; referred to outpatient psychiatry within the week (medicine and step-by-step therapy to be discussed); safety plan made with the patient: slow breathing for a usual attack, the emergency department or 119 for new or different symptoms (chest pain that feels different, fainting), the local crisis line or 119 if thoughts of suicide appear; he will phone his mother himself (his choice, offer to explain to her stays open)",
    why: "The key message is when to come back, not “don't come back”. Keep the door open for new or different symptoms and for worry he cannot manage. The safety plan here is made with him alone, so the pick \"with patient and family\" does not fit: write it in the details, and record that it was his choice to tell his mother himself."
   }
  }
 }
]);
