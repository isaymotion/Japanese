/* Discharge practice cases, part 1: fictional patients for the discharge assessment.
   STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Hanashimashō (Japanese). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Japanese text; registers are
   f = polite (です/ます), c = plain form. Patient answers are natural spoken Japanese with an English translation.
   Shape: window.PSYCH_DISCHARGE_CASES = [ { id, title, level, dx, decision: { discharge, why }, setting, chart: [..],
     fields: { <PSYCH_DISCHARGE field id>: {
       obs: 'what the learner observes (English)',
       ans: { questionIndex: [japanese, english, speaker?] },   // patient's answer to field.ask[questionIndex]; speaker only when it is a family member
       key: [questionIndex], need: [pick or [any-of picks]], ok: [extra acceptable picks], wrong: { pick: why },
       doc: 'model documentation line', why: 'teaching note', quote?: 'mood field only' } } } ]
   Ids in this part: shota, yumiko (same ids as the case simulations).
   Patients are fictional; doses are teaching examples only. Crisis line is the local crisis line. */
window.PSYCH_DISCHARGE_CASES = (window.PSYCH_DISCHARGE_CASES || []).concat([
 {
  id: "shota",
  title: "Voices quiet, mother ready to supervise",
  level: "N4",
  dx: "Schizophrenia",
  decision: { discharge: true, why: "Discharge today. The voices faded by week 3, he has no suicidal or homicidal ideas, he sleeps well, and his mother will keep and give the medicine. He still wonders a little about the coworker, so his insight is partial, but he accepts the medicine and the follow-up. Warning signs and the local crisis line card are in the plan." },
  setting: "Ward, morning of planned discharge. Shota, 19, warehouse worker, first admission. His mother, Mrs. Takahashi, speaks only Japanese and is waiting with a bag of his clothes.",
  chart: [
   "Admitted 4 weeks ago after barricading his bedroom door. For 3 months he had stopped leaving his room, heard the neighbors talking through the wall, and believed a coworker had put “呪《のろ》い” (a curse) on him. Commanding voices told him to disappear. His mother first took him to a spiritual healer.",
   "Admission MSE: guarded, unkempt, linear process, persecutory delusions, command auditory hallucinations, insight grade 3.",
   "Course: risperidone started and raised to 2 mg at night. Voices faded by week 3. Mild leg restlessness in week 2 after a dose increase, better since the dose moved to bedtime. No restraint. No falls. Sleep chart 7 to 8 hours for the last 10 nights.",
   "Plan (teaching example): risperidone 2 mg tab at bedtime. Clinic follow-up in 2 weeks. Mrs. Takahashi keeps and gives the medicine. Card with the local crisis line."
  ],
  fields: {
   behavior: {
    obs: "Hair combed, clean sweatshirt. Sits quietly beside his mother. Eye contact is steady. Speaks softly and answers each question.",
    ans: {
     0: ["はい、 大丈夫《だいじょうぶ》 です、 先生《せんせい》。 早《はや》く 家《いえ》 に 帰《かえ》りたい です。", "Fine, doctor. I want to go home soon."],
     1: ["はい、 いい です よ。 大丈夫《だいじょうぶ》 です。", "Yes, of course. No problem."]
    },
    need: ["Calm", "Cooperative", "Good eye contact", ["Well groomed", "Fairly groomed"]],
    wrong: {
     Guarded: "Guarded was his admission state. Today he answers openly.",
     Withdrawn: "He engages and answers. Document what you see today, not the admission picture."
    },
    doc: "Calm, cooperative, good eye contact, fairly groomed; speaks softly",
    why: "Compare with the admission MSE: guarded and unkempt then, calm and groomed now. The change itself supports discharge."
   },
   mood: {
    obs: "Smiles a little when his mother talks about the family dog. Expression changes, but it is a bit narrow.",
    ans: {
     0: ["前《まえ》 より いい です。 眠《ねむ》れる し、 もう 何《なに》 も 聞《き》こえません。 落《お》ち着《つ》いて います。", "Better. I sleep now and I don't hear things anymore. I'm calmer."],
     1: ["だいたい 落《お》ち着《つ》いて います。 仕事《しごと》 に 戻《もど》る の が、 ちょっと 心配《しんぱい》 です。", "Calm, mostly. A little worried about going back to work."],
     2: ["七《なな》 くらい です。", "About a seven."]
    },
    quote: "前《まえ》 より いい です。 眠《ねむ》れる し、 もう 何《なに》 も 聞《き》こえません。 落《お》ち着《つ》いて います。 (Better. I sleep now and I don't hear things anymore. I'm calmer.)",
    need: ["Euthymic mood", "Congruent affect", "Restricted affect"],
    ok: ["Full range affect"],
    wrong: {
     "Anxious mood": "His worry about work is realistic and mild. It is not his main mood. Put it in the details.",
     "Flat affect": "Flat means almost no expression. He smiles and looks worried at fitting moments."
    },
    doc: "“前《まえ》 より いい です。 眠《ねむ》れる し、 もう 何《なに》 も 聞《き》こえません。 落《お》ち着《つ》いて います。” (Better. I sleep now and I don't hear things anymore. I'm calmer.) Mood 7/10. Euthymic mood, congruent, mildly restricted affect; realistic worry about returning to work",
    why: "Quote his words for mood. Affect is what you see: it fits his mood and varies, but a little less than expected. “Restricted” (or “full range” if you saw more) is fair."
   },
   process: {
    obs: "Tells his story in order, with a clear beginning, middle, and end.",
    ans: {
     0: ["三《さん》か月《げつ》 くらい、 部屋《へや》 に こもって いました。 隣《となり》 の 人《ひと》 たち が 自分《じぶん》 の こと を 話《はな》して いる の が 聞《き》こえて、 職場《しょくば》 の 同僚《どうりょう》 に 呪《のろ》い を かけられた と 思《おも》って いました。 タンス で ドア を ふさいだ ので、 母《はは》 が 病院《びょういん》 に 連《つ》れて きました。 ここ で 薬《くすり》 を もらって、 だんだん 声《こえ》 が 消《き》えて いきました。", "I was shut in my room for about three months. I heard the neighbors talking about me and thought a coworker had put a curse on me. I blocked the door with the dresser, so my mom brought me to the hospital. Here they gave me the pill and little by little the voices went away."],
     1: ["何日《なんにち》 か 家《いえ》 で 休《やす》んで、 それ から 上司《じょうし》 に 相談《そうだん》 して、 パート でも いい から 倉庫《そうこ》 に 戻《もど》れる か 聞《き》いて みたい です。", "I want to rest a few days at home and then talk with my boss to see if he takes me back at the warehouse, even part-time."]
    },
    need: ["Goal-directed", "Coherent and relevant"],
    doc: "Goal-directed, coherent and relevant",
    why: "A clear account of the admission and a realistic plan (rest first, then part-time work) show a goal-directed, coherent process."
   },
   positive: {
    obs: "Not seen talking to himself or looking at the wall. The nurses' notes agree: no responding to voices for 10 days.",
    ans: {
     0: ["もう ない です。 たまに 夜《よる》、 すごく 小《ちい》さい ざわざわ した 音《おと》 が する 気《き》 が します けど、 何《なに》 を 言《い》って いる か は 分《わ》からない し、 怖《こわ》く ない です。", "Not anymore. Once in a while at night there is a very faint murmur, but I can't make out anything and it doesn't scare me."],
     1: ["もう いない です。", "Not anymore, no one."],
     2: ["いいえ、 何《なに》 も。", "No, nothing."],
     3: ["同僚《どうりょう》 が 本当《ほんとう》 に 何《なに》 か した の か な って、 今《いま》 でも たまに 思《おも》います。 でも もう 怖《こわ》く ない し、 前《まえ》 ほど 考《かんが》えません。", "Sometimes I still wonder if that coworker really did something to me. But I'm not afraid anymore and I don't think about it as much."],
     4: ["母《はは》 は 悪《わる》い もの が ついた って 言《い》います。 先生《せんせい》 たち は 病気《びょうき》 だ って 言《い》います。 病気《びょうき》 に なった の は 本当《ほんとう》 だ と 思《おも》う けど、 全部《ぜんぶ》 病気《びょうき》 の せい だった の か は 分《わ》かりません。", "My mom says it was an evil. The doctors say it was the illness. I think I did get sick, but I don't know if all of it was the illness."],
     5: ["いいえ、 もう 何《なに》 も 言《い》われません。 前《まえ》 は 消《き》えろ って 言《い》われて いました。", "No, they don't tell me anything now. Before, they told me to disappear."]
    },
    key: [0, 3, 5],
    need: ["Residual persecutory ideas, less intense", "Not responding to internal stimuli"],
    ok: ["Residual auditory hallucinations, less frequent"],
    wrong: {
     "No hallucinations elicited": "He mentions a faint murmur at night, rarely. Let him finish and document it. It is the baseline for relapse monitoring.",
     "Delusions persist": "The belief is much weaker: no fear, no action on it, and he can say it may be the illness.",
     "Delusions no longer held": "He still wonders about the coworker. Do not call it fully gone.",
     "Command auditory hallucinations, persist (reassess discharge)": "The commands stopped. Ask directly (question 5) so you can document that."
    },
    doc: "Residual persecutory ideas, less intense (still wonders about the coworker, no fear, no action); faint night murmur, rare, no content; commands stopped; not responding to internal stimuli",
    why: "“もう ない です” is often followed by “でも たまに……”. Let the patient finish. Ask about the command voices separately: they were the admission risk."
   },
   negative: {
    obs: "Ward notes: goes to groups, plays cards with two other patients, showers daily. Speech normal in amount.",
    ans: {
     0: ["はい、 トランプ と バスケ が 好《す》き です。", "Yes, I like cards and basketball."],
     1: ["はい、 佐藤《さとう》さん と、 もう 一人《ひとり》 の 若《わか》い 人《ひと》 と。 最初《さいしょ》 は 誰《だれ》 とも 話《はな》しません でした。", "Yes, with Sato and another young man. At first I didn't talk to anyone."],
     2: ["少《すこ》し ずつ です。 前《まえ》 は 何《なに》 も する 気《き》 が しません でした。 今《いま》 は ある けど、 始《はじ》める まで が まだ 大変《たいへん》 です。", "Little by little. Before I didn't feel like doing anything. Now I do, but it's still hard to get started."],
     3: ["はい、 毎日《まいにち》 シャワー を 浴《あ》びて います。", "Yes, I shower every day."]
    },
    need: [["Mild blunting", "None noted"]],
    wrong: {
     Avolition: "He joins groups and is getting his drive back. Mild difficulty starting is not avolition.",
     Asociality: "He plays cards and talks with other patients.",
     "Poor self-care": "He showers daily and is well groomed."
    },
    doc: "Mild blunting; motivation returning, social contact and self-care good",
    why: "Motivation, social contact, and self-care are good. The slightly limited expression and “hard to get started” fit mild blunting. “None noted” is also acceptable."
   },
   suicide: {
    ans: {
     0: ["いいえ、 先生《せんせい》。", "No, doctor."],
     1: ["いいえ。 具合《ぐあい》 が 悪《わる》かった とき は、 消《き》えたい と 思《おも》って いました。 でも 今《いま》 は ない です。", "No. When I was sick I did want to disappear, but not now."],
     2: ["母《はは》 に 言《い》って、 病院《びょういん》 に 来《き》ます。 相談窓口《そうだんまどぐち》 の カード も 持《も》って います。", "I tell my mom and we come to the hospital. I also have the crisis line card."]
    },
    key: [0, 2],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    doc: "Denies suicidal ideation, plan, or intent; earlier wish to “disappear” followed the command voices and has stopped; will tell his mother and use the local crisis line if thoughts return",
    why: "His earlier wish to disappear came with the commands. Ask about it directly and write the plan: who he tells and what he does."
   },
   homicide: {
    ans: {
     0: ["いいえ、 全然《ぜんぜん》。", "No, not at all."],
     1: ["いいえ。 同僚《どうりょう》 に は もう 腹《はら》 が 立《た》ちません。 あんな ふう に 思《おも》って、 悪《わる》かった と 思《おも》います。", "No. I'm not angry at the coworker anymore. I feel bad about thinking that of him."]
    },
    key: [1],
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation, including toward the coworker named on admission",
    why: "Ask about the person named in the delusion, not only “anyone”."
   },
   orientation: {
    ans: {
     0: ["木曜日《もくようび》 です。 十一月《じゅういちがつ》 の 初《はじ》め です。", "Thursday, early November."],
     1: ["病院《びょういん》 の、 精神科《せいしんか》 の 病棟《びょうとう》 です。", "In the hospital, in the psychiatry unit."],
     2: ["担当《たんとう》 の 先生《せんせい》 です。", "You are the doctor who treats me."]
    },
    need: ["Oriented to time, place, and person (×3)"],
    doc: "Oriented to time, place, and person (×3)",
    why: "Correct day and month, place, and person."
   },
   memory: {
    ans: {
     0: ["ボール、 木《き》、 鍵《かぎ》。", "Ball, tree, key."],
     1: ["ボール、 鍵《かぎ》、 木《き》。", "Ball, key, and tree."],
     2: ["ご飯《はん》 と 味噌汁《みそしる》 と 卵焼《たまごや》き です。", "Rice, miso soup, and a rolled omelette."],
     3: ["四週間《よんしゅうかん》 くらい 前《まえ》 です。", "About four weeks ago."],
     4: ["青森《あおもり》 です。 でも 小《ちい》さい とき に こっち に 来《き》ました。", "In Aomori, but I came here when I was little."]
    },
    need: ["Intact immediate, recent, and remote memory"],
    doc: "Intact immediate (3/3), recent (3/3 recall, breakfast, admission date), and remote memory",
    why: "The order of the recalled words does not matter. Three of three is intact."
   },
   insight: {
    ans: {
     0: ["部屋《へや》 に こもって、 声《こえ》 が 聞《き》こえて いた から です。 母《はは》 が 怖《こわ》がって しまって。", "Because I shut myself in and heard voices. My mom got scared."],
     1: ["はい、 統合失調症《とうごうしっちょうしょう》 だ と 言《い》われました。 なぜ なった の か は よく 分《わ》からない けど、 病気《びょうき》 だった こと は 分《わ》かって います。", "Yes, they say it's schizophrenia. I don't know exactly why it happened, but I do know I was sick."],
     2: ["はい、 夜《よる》 の 薬《くすり》 です。 あれ で 声《こえ》 が 消《き》えた から。 一生《いっしょう》 か は 分《わ》からない けど、 今《いま》 は 飲《の》みます。", "Yes, the pill at night, because the voices went away with it. I don't know about my whole life, but for now yes."],
     3: ["また 声《こえ》 が 戻《もど》って くる かも しれません。", "Well, the voices could come back."]
    },
    key: [1, 2],
    need: ["Fair", "Grade 4: aware, cause unknown in self"],
    ok: ["Grade 5: intellectual insight"],
    wrong: {
     Good: "He still wonders whether the coworker did something. Insight is partial.",
     "Grade 6: true emotional insight": "Grade 6 means the insight changes behavior over time. It has not been tested yet outside the hospital.",
     "Grade 1: complete denial": "Even on admission he was at grade 3, not 1. He now accepts he was ill and accepts the medicine."
    },
    doc: "Fair (grade 4): accepts that he was ill and links the medicine to the voices stopping; unsure of the cause (still wonders about the coworker); accepts treatment for now",
    why: "A big step from grade 3 on admission. He accepts the illness and the medicine, but “全部《ぜんぶ》 病気《びょうき》 の せい だった の か は 分《わ》かりません” keeps him at 4. Respecting his mother's explanation while teaching about the illness helps the whole family."
   },
   judgment: {
    ans: {
     0: ["母《はは》 に 言《い》って、 なくなる 前《まえ》 に クリニック に 行《い》きます。", "I tell my mom and we go to the clinic before it runs out."],
     1: ["すぐ 母《はは》 に 言《い》って、 ここ に 戻《もど》って きます。 もう 部屋《へや》 に こもったり しません。", "I tell my mom right away and we come back here. I won't shut myself in again."],
     2: ["周《まわ》り の 人《ひと》 に 知《し》らせて、 落《お》ち着《つ》いて 外《そと》 に 出《で》ます。 係《かかり》 の 人《ひと》 を 探《さが》します。", "I would warn people and leave calmly. I would look for someone in charge."]
    },
    need: ["Intact test judgment", "Intact social judgment"],
    ok: ["Good"],
    doc: "Good: intact test and social judgment",
    why: "Realistic plans for running out of medicine and for returning voices show intact social judgment."
   },
   sleep: {
    obs: "Ward sleep chart: 7 to 8 hours a night for the last 10 nights.",
    ans: {
     0: ["よく 眠《ねむ》れて います。 十時《じゅうじ》 ごろ 寝《ね》て、 六時《ろくじ》 に 起《お》きます。", "Well. I fall asleep around ten and get up at six."],
     1: ["いいえ、 今《いま》 は 朝《あさ》 まで ぐっすり です。", "No, I sleep straight through now."],
     2: ["朝《あさ》 ちょっと だけ です。", "A little in the morning, that's all."]
    },
    need: ["Good", "7–8 hours, uninterrupted"],
    ok: ["Daytime sedation"],
    wrong: {
     "Difficulty initiating sleep": "He falls asleep around ten without trouble.",
     "Frequent awakenings": "He sleeps through, and the chart agrees."
    },
    doc: "Good, 7–8 hours, uninterrupted (sleep chart for 10 nights); mild morning drowsiness only",
    why: "Poor sleep was part of his early illness, so steady sleep matters. Add it to the warning signs for the family."
   },
   adverse: {
    obs: "Chart: no restraint, no falls, no medical illness. Nurses recorded mild leg restlessness in week 2 after a dose increase. No stiffness or tremor.",
    ans: {
     0: ["最初《さいしょ》 は 足《あし》 が むずむず して、 じっと して いられません でした。 今《いま》 は ほんの 少《すこ》し で、 だいたい 午後《ごご》 です。 こわばり は ない です。", "At first I felt restless in my legs, like I couldn't sit still. Now it's very little, mostly in the afternoon. No stiffness."],
     1: ["いいえ、 何《なに》 も。", "No, nothing."]
    },
    key: [0],
    need: ["Akathisia"],
    wrong: {
     None: "He described leg restlessness, and the nurses charted it. Document it so the clinic can watch it.",
     "Extrapyramidal symptoms": "He denies stiffness or shaking. Restlessness alone is akathisia.",
     Sedation: "He reports only a little morning drowsiness. His main complaint is restlessness."
    },
    doc: "Mild akathisia (leg restlessness, week 2, much improved with bedtime dosing); no EPS; no restraint, no falls, no medical illness",
    why: "Adverse events come from the patient and from the chart. Akathisia is easy to miss and a common reason young people stop antipsychotics. Tell the clinic so they can adjust."
   },
   diagnosis: {
    ans: {
     0: ["統合失調症《とうごうしっちょうしょう》 です。 はい、 もう 説明《せつめい》 して もらいました。 その 言葉《ことば》 が ちょっと 怖《こわ》い です。", "Schizophrenia. Yes, they already explained it. The word scares me a little."],
     1: ["はい、 それ が 自分《じぶん》 に 起《お》きた こと です。 本当《ほんとう》 じゃ ない こと が 聞《き》こえたり、 信《しん》じたり して いました。", "Yes, that is what happened to me, hearing and believing things that weren't real."],
     2: ["母《はは》 は 呪《のろ》い だ と 思《おも》って いて、 霊能者《れいのうしゃ》 の 人《ひと》 も そう 言《い》いました。 でも 自分《じぶん》 の せい じゃ ない と 聞《き》いて、 ほっと しました。", "My mom thinks it was a curse, and the spiritual healer said so. But it's a relief that it's not my fault."]
    },
    need: ["Schizophrenia, first episode, currently in partial remission"],
    wrong: {
     "Schizophrenia, first episode, currently in acute episode": "The voices have faded and he is much better. A faint residual murmur and a weak residual idea mean partial remission.",
     "Schizophrenia, multiple episodes, currently in partial remission": "This is his first episode and first admission."
    },
    doc: "Schizophrenia, first episode, currently in partial remission",
    why: "First admission, so first episode. Rare faint murmurs and a weak residual idea mean partial, not full, remission. His mother's belief about “呪《のろ》い” is a chance to explain the illness to both of them with respect for their culture."
   },
   medications: {
    ans: {
     0: ["はい、 夜《よる》 に 一錠《いちじょう》 です。", "Yes, one pill at night."],
     2: ["毎晩《まいばん》 一錠《いちじょう》 です。 調子《ちょうし》 が よくて も 飲《の》みます。 母《はは》 が 薬《くすり》 を 預《あず》かって、 渡《わた》して くれます。", "Every night, one pill, even if I feel well. My mom keeps it and gives it to me."],
     3: ["母《はは》 が 薬局《やっきょく》 で もらって きます。 あまり 高《たか》く ない って 言《い》って います。", "My mom picks it up at the pharmacy. She says it's cheap."],
     4: ["はい。 前《まえ》 は、 調子《ちょうし》 が よければ それ で いい と 思《おも》って いました。", "Yes. Before, I thought feeling well was enough."]
    },
    key: [2],
    need: ["Risperidone ___ mg tab, ___", "Teach-back done, correct", "Family supervises medication"],
    wrong: {
     "Teach-back incorrect, re-taught": "His teach-back was right: one pill every night, even when he feels well.",
     "Benztropine ___ mg tab, ___": "He has no EPS, only mild akathisia. Do not add a drug that was never prescribed on this chart."
    },
    doc: "Risperidone 2 mg tab, 1 tab at bedtime (teaching example); teach-back correct (every night, even when well); mother keeps and gives the medicine; supply and cost checked",
    why: "Teach-back catches errors before they go home. Here he is correct. Also check who gets the medicine and who pays, because cost and pickup are common reasons a first-episode patient stops."
   },
   aftercare: {
    ans: {
     0: ["はい、 先生《せんせい》。 母《はは》 が メモ して います。", "Yes, doctor. My mom writes it down."],
     1: ["私《わたし》 です、 先生《せんせい》。 私《わたし》 が 薬《くすり》 を 預《あず》かって、 毎晩《まいばん》 渡《わた》します。", "Me, doctor. I keep the pills and give them to him every night.", "Mrs. Takahashi (mother)"],
     2: ["はい。 具合《ぐあい》 が 悪《わる》く なり始《はじ》めた とき、 眠《ねむ》れなく なって、 部屋《へや》 に こもる よう に なりました。 そこ を 気《き》 を つけて 見《み》て いきます。", "Yes. When he started to get sick he wasn't sleeping and he shut himself in. That's what I will watch for.", "Mrs. Takahashi (mother)"],
     3: ["ありがとう ございます。 携帯《けいたい》 と お財布《さいふ》 に 入《い》れて おきます。", "Thank you. I'll keep it in my phone and in my wallet.", "Mrs. Takahashi (mother)"]
    },
    need: ["Outpatient follow-up in 1–2 weeks", "Follow-up appointment date and clinic given in writing", "Family oriented on warning signs"],
    wrong: {
     "Long-acting injectable schedule given": "He is on an oral medicine only.",
     "Transferred to ___ unit due to ___": "He is going home with his mother."
    },
    doc: "Clinic follow-up in 2 weeks, date and place given in writing (mother has it); mother keeps and gives medicine nightly; family oriented on warning signs (sleep loss, shutting himself in, voices); local crisis line card given; Japanese-speaking clinician or interpreter at follow-up",
    why: "Mrs. Takahashi named the early signs herself (no sleep, shutting himself in). Put them in the plan. Because she speaks only Japanese, confirm the clinic can work in Japanese or has an interpreter."
   }
  }
 }
,
 {
  id: "yumiko",
  title: "After the attempt, with a safety plan",
  level: "N3",
  dx: "Major depressive disorder, severe",
  decision: { discharge: true, why: "Discharge today, with a written safety plan in Japanese. She denies current suicidal thoughts and has no plan. Her brother has moved his hunting rifle out of the family home, her sister keeps the medicines, and she can name whom she will call. Follow-up is within a week and the local crisis line is on her phone. If she described intent, a plan, or access to means, discharge would be deferred." },
  setting: "Ward, afternoon before planned discharge. Yumiko, 46, hotel housekeeper, mother of three, separated. Her sister Noriko is visiting. Her brother is coming at 5 p.m.",
  chart: [
   "Admitted 12 days ago after taking a handful of her sister's sleeping pills after her husband left (“もう 限界《げんかい》 でした”). Weeks of poor sleep, “自律神経《じりつしんけい》 が おかしい”, crying, no appetite, guilt about the children. Prior depressive episode about 8 years ago; she stopped treatment early.",
   "Admission MSE: tearful, psychomotor slowing, depressed mood, constricted affect, hopeless, suicidal thoughts with intent on admission, insight fair. Hunting rifle belonging to her brother at the family home.",
   "Course: sertraline started and raised to 100 mg. Nausea in week 1, gone. No restraint. No falls. Sleep chart 5 to 6 hours. Her priest visited twice, which she valued.",
   "Plan (teaching example): sertraline 100 mg tab every morning. Clinic follow-up in 5 days, then psychotherapy in Japanese. Hunting rifle moved out of the family home by her brother (confirmed by phone). Sister keeps and gives the medicines. Written safety plan and local crisis line card."
  ],
  fields: {
   behavior: {
    obs: "Clean clothes from home, hair tied back. Sits upright, speaks in a low voice, eye contact fair. A little slow but engaged.",
    ans: {
     0: ["少《すこ》し いい です、 先生《せんせい》。 子《こ》ども たち に 会《あ》いたい です。", "A little better, doctor. Wanting to see my children."],
     1: ["はい、 どうぞ。", "Yes, go ahead."]
    },
    need: ["Calm", "Cooperative", ["Well groomed", "Fairly groomed"]],
    ok: ["Good eye contact"],
    wrong: {
     Withdrawn: "On admission she barely spoke. Today she answers and engages.",
     "Psychomotor retardation": "That was clear on admission. Today she is only a little slow, which is not retardation."
    },
    doc: "Calm, cooperative, fairly groomed, fair eye contact, mildly slowed but engaged (improved from admission)",
    why: "Compare with admission: tearful and slowed then, groomed and engaged now. Improvement in behavior alone does not mean the risk has gone, so go on to the suicide questions."
   },
   mood: {
    obs: "Eyes fill when she mentions her youngest daughter. Smiles briefly when Noriko jokes. Expression is less than expected.",
    ans: {
     0: ["前《まえ》 より 落《お》ち着《つ》きました。 まだ 悲《かな》しく なります、 特《とく》に 午後《ごご》 は。 でも、 前《まえ》 ほど では ありません。", "Calmer. I still feel sad, especially in the afternoon, but it's not like before."],
     1: ["悲《かな》しい の が いちばん です。 それ と、 子《こ》ども たち の こと が 心配《しんぱい》 です。", "Sad, mostly. And worried about my children."],
     2: ["五《ご》 くらい です。 入院《にゅういん》 した とき は 一《いち》 でした。", "About a five. When I came in it was a one."]
    },
    quote: "前《まえ》 より 落《お》ち着《つ》きました。 まだ 悲《かな》しく なります、 特《とく》に 午後《ごご》 は。 でも、 前《まえ》 ほど では ありません。 (Calmer. I still feel sad, especially in the afternoon, but it's not like before.)",
    need: ["Dysphoric mood", "Congruent affect", "Restricted affect"],
    wrong: {
     "Euthymic mood": "She still reports sadness and rates her mood 5/10.",
     "Flat affect": "Flat means almost no expression. She cries and smiles at fitting moments.",
     "Anxious mood": "Her worry about the children is a theme, but sadness is the main mood."
    },
    doc: "“前《まえ》 より 落《お》ち着《つ》きました。 まだ 悲《かな》しく なります、 特《とく》に 午後《ごご》 は。 でも、 前《まえ》 ほど では ありません。” (Calmer. I still feel sad, especially in the afternoon, but it's not like before.) Mood 5/10 (1/10 on admission). Dysphoric mood, congruent, restricted affect",
    why: "Mood is her own words and a number. Improved from 1/10 but not well. That is expected at this point and fits discharge only if risk is low and the plan is strong."
   },
   process: {
    obs: "Speech slow and quiet but organized. Answers match the question.",
    ans: {
     0: ["夫《おっと》 が 出《で》て いって、 自分《じぶん》 に は 何《なん》 の 価値《かち》 も ない と 感《かん》じました。 姉《あね》 の 薬《くすり》 を たくさん 飲《の》んで、 すぐ 後悔《こうかい》 して 姉《あね》 に 電話《でんわ》 しました。 ここ で 先生《せんせい》 や 心理士《しんりし》 の 先生《せんせい》 と たくさん 話《はな》して、 気持《きも》ち が 楽《らく》 に なりました。", "My husband left and I felt worthless. I took a lot of my sister's pills, regretted it right away, and called my sister. Here I've talked a lot with the doctor and the psychologist and it has helped."],
     1: ["何週間《なんしゅうかん》 か 姉《あね》 の 家《いえ》 に 泊《と》まります。 子《こ》ども たち に 会《あ》って、 少《すこ》し ずつ ホテル の 仕事《しごと》 に 戻《もど》りたい です。", "I'm going to stay with my sister for a few weeks. I want to see my children and go back to work at the hotel little by little."]
    },
    need: ["Goal-directed", "Coherent and relevant"],
    doc: "Goal-directed, coherent and relevant; slowed rate",
    why: "A clear account with realistic plans, including where she will stay. Her plan to stay with her sister also supports safety."
   },
   positive: {
    obs: "No sign of responding to internal stimuli.",
    ans: {
     0: ["いいえ、 先生《せんせい》、 そういう こと は ありません。", "No, doctor, nothing like that."],
     1: ["いいえ。", "No."],
     2: ["いいえ。", "No."],
     3: ["いいえ。 私《わたし》 が 感《かん》じて いた の は、 自分《じぶん》 が 子《こ》ども たち の 重荷《おもに》 だ と いう こと です。 誰《だれ》 か に 傷《きず》つけられる と は 思《おも》って いません でした。", "No. What I felt was that I was a burden to my children, not that someone wanted to hurt me."],
     4: ["子《こ》ども たち は 私《わたし》 が いない 方《ほう》 が いい と 思《おも》って いました。 でも、 そう じゃ なかった。 子《こ》ども たち、 すごく 寂《さび》しかった みたい です。", "I thought my children would be better off without me. I see now that's not true. They missed me a lot."]
    },
    key: [3, 4],
    need: ["No hallucinations elicited", "Not responding to internal stimuli"],
    wrong: {
     "Delusions persist": "“Better off without me” was a depressive belief. She now sees it was wrong.",
     "Residual persecutory ideas, less intense": "She never felt persecuted. The theme was guilt and being a burden."
    },
    doc: "No hallucinations elicited; not responding to internal stimuli; no delusions; earlier belief that her children would be better without her has resolved",
    why: "Ask about the admission belief by name. “Better off without me” can be a depressive thought or close to a delusion, and its change matters for risk."
   },
   negative: {
    obs: "Ward notes: attends groups but sits at the edge. Showers and dresses herself. Eats about half of her meals.",
    ans: {
     0: ["少《すこ》し。 絵《え》 の 時間《じかん》 は 楽《たの》しかった です。 前《まえ》 は 何《なに》 も 楽《たの》しく なかった ので。", "A little. I liked the painting class. Before, nothing was fun."],
     1: ["はい、 同《おな》じ よう に 子《こ》ども が いる 女性《じょせい》 と。 でも すぐ 疲《つか》れて しまいます。", "Yes, with a lady who also has children. But I get tired quickly."],
     2: ["まだ 大変《たいへん》 です けど、 最初《さいしょ》 より は やる 気《き》 が 出《で》て きました。", "It's still hard, but I have more desire than at the start."],
     3: ["はい、 毎日《まいにち》。", "Yes, every day."]
    },
    need: ["Anhedonia"],
    ok: ["Mild blunting"],
    wrong: {
     "None noted": "She says she enjoys things only a little. Anhedonia is improving but still present.",
     "Poor self-care": "She bathes and dresses every day."
    },
    doc: "Reduced interest and energy (anhedonia), improving; enjoys painting; self-care adequate",
    why: "In depression these are not “negative symptoms” of psychosis. They are anhedonia and low energy, and they track recovery. Self-care is intact."
   },
   suicide: {
    ans: {
     0: ["いいえ、 先生《せんせい》。 もう ありません。 あんな こと を して、 まだ 恥《は》ずかしい です。 子《こ》ども たち の こと を 考《かんが》えないで やって しまった と、 今《いま》 は 分《わ》かります。", "No, doctor. Not anymore. I'm still ashamed of what I did. I realize I did it without thinking of my children."],
     1: ["いいえ、 計画《けいかく》 は ありません。 兄《あに》 が もう 猟銃《りょうじゅう》 を 実家《じっか》 から 持《も》ち出《だ》しました。 薬《くすり》 は 全部《ぜんぶ》 姉《あね》 が 持《も》って います。", "No, no plan. My brother already took the hunting rifle out of the family home and my sister has all the pills."],
     2: ["姉《あね》 の 典子《のりこ》 か、 兄《あに》 に 言《い》います。 夜《よる》 なら、 相談窓口《そうだんまどぐち》 に 電話《でんわ》 します。 書《か》いた 計画《けいかく》 に も 入《はい》って います。", "I tell my sister Noriko or my brother. If it's at night, I call the crisis line. It's in my written plan."]
    },
    key: [0, 1, 2],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    wrong: {
     "Passive death wish, no plan or intent": "She denies it, and she can explain why. Do not add a symptom she did not report. Do ask, and keep the question open for the follow-up visit.",
     "Active suicidal ideation (reassess discharge)": "She denies active thoughts and has no access to the means she named."
    },
    doc: "Denies suicidal ideation, plan, or intent; attempt before admission (overdose of sister's medicines); means removed (hunting rifle moved out of the family home by brother, confirmed by phone; medicines kept by sister); reasons for living (children); safety plan made with names and the local crisis line",
    why: "Ask all three questions. “No” is only the start: write the means restriction, the protective factors, and the plan she says in her own words. The first weeks after discharge carry the highest risk, so early follow-up matters."
   },
   homicide: {
    ans: {
     0: ["いいえ、 絶対《ぜったい》 に。 私《わたし》 は そういう 人間《にんげん》 では ありません。", "No, never. I'm not like that."],
     1: ["夫《おっと》 に は すごく 腹《はら》 が 立《た》って いました。 でも、 傷《きず》つけたい と は 思《おも》いません。 もう 放《ほう》って おいて ほしい だけ です。", "I was very angry at my husband, I was furious. But I don't want to hurt him. I just want him to leave me in peace."]
    },
    key: [1],
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation; anger at her husband acknowledged, no intent to harm",
    why: "Anger at a partner after a separation is common. Ask about the specific person, and note that the rifle is out of the family home."
   },
   orientation: {
    ans: {
     0: ["水曜日《すいようび》 です。 十一月《じゅういちがつ》 の 半《なか》ば です。", "It's Wednesday. We're in the middle of November."],
     1: ["病院《びょういん》 の、 精神科《せいしんか》 の 病棟《びょうとう》 です。", "In the hospital, on the psychiatry floor."],
     2: ["先生《せんせい》 です。 私《わたし》 の 担当《たんとう》 の。", "You're my doctor."]
    },
    need: ["Oriented to time, place, and person (×3)"],
    doc: "Oriented to time, place, and person (×3)",
    why: "Correct day, place, and person."
   },
   memory: {
    ans: {
     0: ["ボール、 木《き》、 鍵《かぎ》。", "Ball, tree, key."],
     1: ["ボール、 木《き》…… それ から、 鍵《かぎ》。 ちょっと 時間《じかん》 が かかりました。", "Ball, tree... and key. It took me a moment."],
     2: ["菓子《かし》パン と コーヒー と ヨーグルト です。", "Sweet bread with coffee and a yogurt."],
     3: ["十二日《じゅうににち》 くらい 前《まえ》、 金曜日《きんようび》 でした。", "About twelve days ago, on a Friday."],
     4: ["福島《ふくしま》 です。", "In Fukushima."]
    },
    need: ["Intact immediate, recent, and remote memory"],
    doc: "Intact immediate, recent (3/3, slow to recall the third word), and remote memory",
    why: "Slow recall is common in depression and is not memory impairment. Three of three is intact."
   },
   insight: {
    ans: {
     0: ["薬《くすり》 を 飲《の》んだ から です。 悲《かな》しさ と 寂《さび》しさ に 耐《た》えられなく なって。", "Because I took the pills. I couldn't bear the sadness and loneliness."],
     1: ["はい、 うつ病《びょう》 です。 前《まえ》 は 信仰《しんこう》 が 足《た》りない せい だ と 思《おも》って いました。 神父《しんぷ》さん と 心理士《しんりし》 の 先生《せんせい》 が、 これ は 病気《びょうき》 で、 神様《かみさま》 は 怒《おこ》って いない と 説明《せつめい》 して くれました。", "Yes, it's a depression. Before I thought it was a lack of faith. The priest and the psychologist explained it's an illness and that God isn't angry about it."],
     2: ["はい、 調子《ちょうし》 が よく なって も 続《つづ》けます。 何年《なんねん》 か 前《まえ》 に 治療《ちりょう》 を やめて、 また 悪《わる》く なりました から。", "Yes, even if I feel better. Years ago I stopped treatment and fell again."],
     3: ["悲《かな》しさ が 戻《もど》って きて、 また 同《おな》じ こと を 考《かんが》えて しまう かも しれない こと です。", "That the sadness returns and I could think of the same thing again."]
    },
    key: [1, 2],
    need: ["Good", ["Grade 5: intellectual insight", "Grade 6: true emotional insight"]],
    wrong: {
     Poor: "She names the illness, the treatment, and the risk of stopping.",
     "Grade 3: blames others/external factors": "She says it is an illness. She does not blame only her husband leaving."
    },
    doc: "Good (grade 5): recognizes depression as an illness, links stopping treatment to relapse, plans to continue medicine and therapy; faith and illness no longer in conflict for her",
    why: "Her faith was a barrier at first, and the priest helped. Using a patient's own support network is a strength for the safety plan."
   },
   judgment: {
    ans: {
     0: ["なくなる 前《まえ》 に、 クリニック に 電話《でんわ》 する か、 姉《あね》 に 言《い》って、 もらい に 行《い》きます。", "I call the clinic or tell my sister so we get more before it runs out."],
     1: ["声《こえ》 は 聞《き》こえません、 先生《せんせい》。 でも、 また 嫌《いや》 な 考《かんが》え が 出《で》て きたら、 姉《あね》 か 相談窓口《そうだんまどぐち》 に 電話《でんわ》 します。", "I don't hear voices, doctor, but if the bad thoughts come back, I call my sister or the crisis line."],
     2: ["走《はし》らない で、 落《お》ち着《つ》いて 外《そと》 に 出《で》て、 誰《だれ》 か に 知《し》らせます。", "I would leave without running, calmly, and tell someone."]
    },
    need: ["Intact test judgment", "Intact social judgment"],
    ok: ["Good"],
    doc: "Good: intact test and social judgment; realistic plan for medicine supply and for returning thoughts",
    why: "Her answer about returning thoughts is the same as the safety plan. Consistency across questions builds confidence."
   },
   sleep: {
    obs: "Sleep chart: 5 to 6 hours most nights, often awake from 3 a.m.",
    ans: {
     0: ["まあまあ です。 五《ご》、 六時間《ろくじかん》 です。", "So-so. Five or six hours."],
     1: ["はい、 朝《あさ》 の 三時《さんじ》 に 目《め》 が 覚《さ》めて、 考《かんが》え事《ごと》 を して しまいます。 その 後《あと》 は よく 眠《ねむ》れません。", "Yes, at three in the morning I wake up and start thinking. Then I don't sleep well."],
     2: ["少《すこ》し、 午後《ごご》 に。", "A bit, in the afternoon."],
     3: ["いいえ、 むしろ 疲《つか》れて います。", "No, on the contrary, I feel tired."]
    },
    need: ["Fair", "Difficulty initiating sleep"],
    ok: ["Frequent awakenings"],
    wrong: {
     Good: "Five to six hours with early waking is fair at best.",
     "Reduced need for sleep": "She feels tired, not energetic. This is not mania."
    },
    doc: "Fair, 5–6 hours (sleep chart); early waking around 3 a.m. with rumination",
    why: "Early waking is a risk time. Put it in the safety plan: what to do at 3 a.m. (call Noriko, call the local crisis line, not be alone with worries)."
   },
   adverse: {
    obs: "Chart: no restraint, no falls, no medical illness. Nausea in the first week of sertraline, resolved.",
    ans: {
     0: ["最初《さいしょ》 は 吐《は》き気《け》 が ありました。 今《いま》 は ありません。 ほか は 何《なに》 も ない です。", "At first I had nausea. Not anymore. Nothing else."],
     1: ["いいえ、 何《なに》 も。", "No, nothing."]
    },
    need: ["None"],
    wrong: {
     Sedation: "She does not report sleepiness from the medicine.",
     Akathisia: "She denies restlessness."
    },
    doc: "None current; transient nausea in the first week of sertraline, resolved; no restraint, no falls",
    why: "Document early side effects even if resolved. Patients stop antidepressants when nausea or sexual side effects are not discussed."
   },
   diagnosis: {
    ans: {
     0: ["うつ病《びょう》 です。 はい、 分《わ》かって います。", "Depression. Yes, I know."],
     1: ["はい、 そう でした。 もう 出口《でぐち》 が ない よう に 見《み》えて いました。", "Yes, that's what happened to me. I saw things as if there were no way out."],
     2: ["ありがとう ございます。 神様《かみさま》 に 罰《ばつ》 を 与《あた》えられて いる と 思《おも》って いました。 罰《ばつ》 じゃ ない と 聞《き》いて、 少《すこ》し 楽《らく》 に なりました。", "Thank you. I felt God was punishing me. It does me good to hear it is not a punishment."]
    },
    need: ["Major depressive disorder, recurrent"],
    wrong: {
     "Bipolar I disorder, current episode manic": "She has had low episodes only, with no history of elevated mood."
    },
    doc: "Major depressive disorder, recurrent, current episode severe (improving); suicide attempt by overdose this admission",
    why: "A prior episode makes this recurrent. Name the severity and the attempt in the details. Answering her fear that this is a punishment is part of treatment."
   },
   medications: {
    ans: {
     0: ["はい、 朝《あさ》ご飯《はん》 と 一緒《いっしょ》 に 一錠《いちじょう》 です。", "Yes, one pill in the morning with breakfast."],
     2: ["朝《あさ》 に セルトラリン を 一錠《いちじょう》 です。 姉《あね》 が 薬《くすり》 を 預《あず》かって いて、 毎日《まいにち》 一錠《いちじょう》 ずつ 渡《わた》して くれます。 調子《ちょうし》 が よく なって も、 やめません。", "One sertraline pill in the morning. My sister has the bottle and gives me each day's pill. Even if I feel well, I won't stop."],
     3: ["姉《あね》 が 薬局《やっきょく》 で もらって きます。 お金《かね》 の こと は クリニック が 手伝《てつだ》って くれます。", "My sister picks it up at the pharmacy. The clinic helps me with the cost."],
     4: ["はい、 もう 分《わ》かりました。", "Yes, I understand now."]
    },
    key: [2],
    need: ["Sertraline ___ mg tab, ___", "Teach-back done, correct", "Family supervises medication"],
    wrong: {
     "Teach-back incorrect, re-taught": "Her teach-back was correct: one tablet each morning, and she will not stop when she feels well."
    },
    doc: "Sertraline 100 mg tab, 1 tab every morning with breakfast (teaching example); teach-back correct; sister keeps the supply and gives the daily dose (small supply only); cost and pickup arranged",
    why: "After an overdose, limit the supply and keep it with someone else. The antidepressant takes weeks to work, so tell her that clearly and ask her to keep taking it."
   },
   aftercare: {
    ans: {
     0: ["はい。 五日後《いつかご》 です。 姉《あね》 が 連《つ》れて いって くれます。", "Yes. In five days. My sister takes me."],
     1: ["姉《あね》 の 典子《のりこ》 です。 猟銃《りょうじゅう》 の こと は 兄《あに》 が やって くれます。", "My sister Noriko. And my brother takes care of the rifle."],
     2: ["はい。 眠《ねむ》れない とき、 また 出口《でぐち》 が ない と 感《かん》じた とき、 自分《じぶん》 を 傷《きず》つけたい と 思《おも》った とき は、 相談窓口《そうだんまどぐち》 に 電話《でんわ》 する か、 救急外来《きゅうきゅうがいらい》 に 来《き》ます。", "Yes. If I can't sleep, if I feel hopeless again, or if I think of hurting myself, I call the crisis line or come to the emergency room."],
     3: ["もう 携帯《けいたい》 に 登録《とうろく》 しました。 書《か》いた 計画《けいかく》 に も あります。", "I already saved it in my phone. It's in my written plan too."]
    },
    need: ["Outpatient follow-up in 1–2 weeks", "Safety plan made with patient and family", "Family oriented on warning signs", "Referred to ___"],
    ok: ["Follow-up appointment date and clinic given in writing"],
    wrong: {
     "Discharge deferred: ___": "She meets safety criteria today, with means removed and a plan in place."
    },
    doc: "Outpatient follow-up within 1 week (in 5 days, sister drives her), then referred to psychotherapy in Japanese; written safety plan with names, numbers, and the local crisis line given to patient and sister; family oriented on warning signs; hunting rifle out of the family home (brother), medicines kept by sister",
    why: "The first week after discharge is the highest-risk time, so follow-up is within days. A good safety plan names the people, the numbers, and the means restriction. It is written in her own language."
   }
  }
 }
]);
