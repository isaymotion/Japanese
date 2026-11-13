/* Discharge practice cases, part 4: fictional patients for the discharge assessment.
   STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Hanashimashō (Japanese). Same shape as parts 1–3 (see the header of psych-discharge-cases-3.js): `tl` = the Japanese text,
   f = polite form (です/ます), c = plain form; answers are natural spoken Japanese with an English translation.
   Ids in this part: daisuke (Daisuke Sato; his case simulation id is `agitated`), chiyoko (Chiyoko Ito; admission case in
   psych-mse-cases-3.js). Patients are fictional. No method detail, street or product names; prescribed discharge medicines
   are named in the English chart as in the other parts. Crisis line is the local crisis line. 0.15.0. */
window.PSYCH_DISCHARGE_CASES = (window.PSYCH_DISCHARGE_CASES || []).concat([
{
  id: "daisuke",
  title: "Paranoia gone, craving down, day shifts ahead",
  level: "N3",
  dx: "Methamphetamine-induced psychotic disorder, with stimulant use disorder, moderate",
  decision: { discharge: true, why: "Discharge today. The psychosis cleared with abstinence: the voices were gone by day 4, the belief of being followed faded by day 5, and he now calls it “the drug talking”. Psychosis that clears with abstinence supports a substance-induced diagnosis. He sleeps 7 hours, craving is down to 3/10, and he denies suicidal and homicidal thoughts. The risk after discharge is relapse to stimulant use, which would bring the psychosis back. The plan targets that risk: day shifts instead of the night shifts that were his trigger, cutting contact with the people he used with, and clear warning signs (not sleeping, feeling watched, craving) with a number to call. His sister visits daily the first week, and outpatient review is in one week." },
  setting: "Ward, morning of planned discharge, day 10. Daisuke Sato, 38, delivery driver on long night shifts, lives alone in an apartment. His older sister Tomoko lives nearby; she is in the lounge and will take him home.",
  chart: [
   "Admitted 10 days ago from the emergency department. Police brought him in after he shouted at a bus stop, sweating and pacing, convinced that men in a car were following him. He accepted oral medication after a choice was offered. Urine drug screen positive for an amphetamine-type stimulant. Used a stimulant (“覚醒剤《かくせいざい》”) for about two years to stay awake on night shifts, more in the last months; last use the day before admission.",
   "Admission MSE: agitated, pacing, sweating, loud pressured speech, fearful and irritable, persecutory beliefs (being followed), heard footsteps and his name called at night, insight poor, judgment impaired.",
   "Course: olanzapine 10 mg at night, reduced to 5 mg from day 6 (teaching example). Slept very long for the first 3 days, then normally. Voices gone by day 4; belief of being followed faded by day 5. Low mood and craving in week 1; craving now 3/10. No use on the ward. No restraint after the emergency department, no falls, no aggression on the ward. Sleep chart 7 hours.",
   "Plan: olanzapine 5 mg at night for now, review at the outpatient visit in one week, aiming to stop it after some weeks if no psychotic symptoms return. Outpatient addiction follow-up and a recovery support group. Tomoko visits daily the first week. He will ask his employer for day shifts and cut contact with the people he used with. Warning signs given; the local crisis line card."
  ],
  fields: {
   behavior: {
    obs: "Showered and shaved, in clean clothes. Sits still in the chair, good eye contact, normal volume, short plain answers. Looks a little embarrassed when the bus stop is mentioned.",
    ans: {
     0: ["だいぶ 落《お》ち着《つ》きました。 夜《よる》 も ちゃんと 眠《ねむ》れて います。", "Much calmer. I'm sleeping properly at night too."],
     1: ["はい、 大丈夫《だいじょうぶ》 です。 どうぞ。", "Yes, that's fine. Go ahead."]
    },
    need: ["Calm", "Cooperative", "Good eye contact", ["Well groomed", "Fairly groomed"]],
    wrong: {
     Restless: "That was his state in the emergency department: pacing and sweating. Today he sits still.",
     Irritable: "He was irritable on admission. Today he is calm and polite.",
     Guarded: "He answers openly. Embarrassment about the bus stop is not guardedness."
    },
    doc: "Calm, cooperative, good eye contact, well groomed; sits still, normal volume; mildly embarrassed about the events before admission",
    why: "Compare with admission: pacing, sweating and shouting then, calm and still now. Short plain answers are his usual style, not guardedness."
   },
   mood: {
    obs: "Relaxed face, smiles briefly when his sister is mentioned. Looks serious and lowers his voice when he talks about frightening people at the bus stop.",
    ans: {
     0: ["だいぶ 楽《らく》 に なりました。 最初《さいしょ》 の 一週間《いっしゅうかん》 は 気分《きぶん》 が 沈《しず》んで いました けど、 今《いま》 は 落《お》ち着《つ》いて います。", "Much easier now. The first week I felt down, but now I'm settled."],
     1: ["うれしい、 かな。 でも、 バス停《てい》 で 人《ひと》 を 怖《こわ》がらせた こと は、 申《もう》し訳《わけ》ない と 思《おも》って います。", "Happy, I guess. But I feel bad about frightening people at the bus stop."],
     2: ["七《なな》 ぐらい です。", "About a seven."]
    },
    quote: "だいぶ 楽《らく》 に なりました。 最初《さいしょ》 の 一週間《いっしゅうかん》 は 気分《きぶん》 が 沈《しず》んで いました けど、 今《いま》 は 落《お》ち着《つ》いて います。 (Much easier now. The first week I felt down, but now I'm settled.)",
    need: ["Euthymic mood", "Congruent affect"],
    ok: ["Full range affect"],
    wrong: {
     "Dysphoric mood": "The low mood was in week 1, after he stopped the stimulant. It has lifted. Regret about the bus stop is appropriate, not a low mood.",
     "Irritable mood": "That was admission, when he was frightened and felt followed.",
     "Anxious mood": "He no longer feels watched and shows no worry today."
    },
    doc: "“だいぶ 楽《らく》 に なりました。 最初《さいしょ》 の 一週間《いっしゅうかん》 は 気分《きぶん》 が 沈《しず》んで いました けど、 今《いま》 は 落《お》ち着《つ》いて います。” (Much easier now. The first week I felt down, but now I'm settled.) Mood 7/10. Euthymic mood, congruent affect; appropriate regret about the events before admission",
    why: "Low mood after stopping a stimulant is common in the first week and usually lifts. Note that it lifted, and ask again at follow-up, because low mood and craving often come together."
   },
   process: {
    obs: "Tells the story in order, in short sentences, and stays on the question.",
    ans: {
     0: ["夜《よる》 の 配達《はいたつ》 の 仕事《しごと》 で、 眠気《ねむけ》 を 飛《と》ばす ため に 覚醒剤《かくせいざい》 を 使《つか》う よう に なりました。 二年《にねん》 ぐらい 前《まえ》 から です。 ここ 何《なん》か月《げつ》 か は 回数《かいすう》 が 増《ふ》えて いました。 あの 日《ひ》 は、 車《くるま》 の 男《おとこ》たち に つけられて いる と 思《おも》い込《こ》んで、 バス停《てい》 で 大声《おおごえ》 を 出《だ》して しまいました。 警察《けいさつ》 に 連《つ》れて 来《こ》られて、 救急《きゅうきゅう》 で 薬《くすり》 を 飲《の》みました。 最初《さいしょ》 の 三日《みっか》 は ずっと 寝《ね》て いて、 それ から だんだん 頭《あたま》 が はっきり して きました。", "On my night delivery job I started using a stimulant to stay awake. That was about two years ago. These last months I'd been using more often. That day I was convinced men in a car were following me, and I shouted at a bus stop. The police brought me in, and in the emergency room I took some medicine. The first three days I just slept, and then my head slowly got clear."],
     1: ["姉《あね》 の 智子《ともこ》 が 迎《むか》え に 来《き》て くれます。 会社《かいしゃ》 に は、 昼《ひる》 の シフト に 変《か》えて もらえない か 頼《たの》む つもり です。 一緒《いっしょ》 に 使《つか》って いた 連中《れんちゅう》 と は、 もう 会《あ》いません。 連絡先《れんらくさき》 も 消《け》します。", "My sister Tomoko is coming to get me. I'm going to ask my company if I can switch to day shifts. I won't see the guys I used with anymore. I'll delete their contacts too."]
    },
    need: ["Goal-directed", "Coherent and relevant"],
    wrong: {
     "Some circumstantiality": "His account is short and in order, with no long detours.",
     "Flight of ideas": "Ideas do not jump. That would fit his pressured speech on admission, not today."
    },
    doc: "Goal-directed, coherent and relevant; clear account of the admission and a concrete plan (day shifts, cut contact with the people he used with, sister's support)",
    why: "A clear story with a concrete plan is goal-directed. Note that the plan names his own triggers: night shifts and the people he used with."
   },
   positive: {
    obs: "Not seen responding to anything. Ward notes: voices gone by day 4; the belief of being followed faded by day 5.",
    ans: {
     0: ["もう 聞《き》こえません。 夜《よる》 の 足音《あしおと》 も、 名前《なまえ》 を 呼《よ》ぶ 声《こえ》 も、 四日目《よっかめ》 ぐらい から ない です。", "Not anymore. The footsteps at night and the voice calling my name, they've been gone since about day four."],
     1: ["いいえ。", "No."],
     2: ["いいえ、 見《み》えません。", "No, I don't see anything."],
     3: ["いいえ。 今《いま》 は、 誰《だれ》 も 俺《おれ》 を 狙《ねら》って なんか いない と 思《おも》います。", "No. Now I don't think anyone is after me."],
     4: ["車《くるま》 の 男《おとこ》たち の こと です よね。 あれ は 覚醒剤《かくせいざい》 が そう 思《おも》わせて いた ん です。 本当《ほんとう》 は 誰《だれ》 も つけて なんか いなかった。", "You mean the men in the car. That was the drug talking: it made me think that. Nobody was really following me."],
     5: ["いいえ。 名前《なまえ》 を 呼《よ》ばれる だけ でした。 今《いま》 は 何《なに》 も 聞《き》こえません。", "No. It only ever called my name. Now I don't hear anything."]
    },
    key: [0, 4],
    need: ["No hallucinations elicited", "Not responding to internal stimuli", "Delusions no longer held"],
    wrong: {
     "Residual persecutory ideas, less intense": "He no longer holds the belief at all. He calls it “the drug talking” and says nobody was really following him.",
     "Delusions persist": "The belief of being followed faded by day 5.",
     "Residual auditory hallucinations, less frequent": "The footsteps and the voice calling his name stopped by day 4."
    },
    doc: "No hallucinations elicited (footsteps and his name called at night on admission, gone by day 4); not responding to internal stimuli; persecutory belief (followed by men in a car) no longer held since day 5, now attributed to the stimulant (“覚醒剤《かくせいざい》 が そう 思《おも》わせて いた”)",
    why: "Ask about the admission symptoms by name: the footsteps, the voice, the men in the car. Psychosis that clears within days of stopping the stimulant supports a substance-induced diagnosis."
   },
   negative: {
    obs: "Ward notes: attends groups, talks with the other patients, showers daily.",
    ans: {
     0: ["はい、 グループ に は 出《で》て います。 まあまあ 面白《おもしろ》い です。", "Yes, I go to the groups. They're all right."],
     1: ["少《すこ》し は 話《はな》します。", "I talk a little."],
     2: ["はい。 早《はや》く 仕事《しごと》 に 戻《もど》りたい です。", "Yes. I want to get back to work soon."],
     3: ["はい、 毎日《まいにち》 シャワー を 浴《あ》びて います。", "Yes, I shower every day."]
    },
    need: ["None noted"],
    wrong: {
     Anhedonia: "The low mood of week 1 has lifted, and he takes part in groups.",
     Avolition: "He wants to go back to work and has a concrete plan."
    },
    doc: "None noted",
    why: "Interest, drive and self-care are back. Fatigue and low drive in the first days after stopping a stimulant are part of withdrawal, not negative symptoms."
   },
   suicide: {
    ans: {
     0: ["いいえ。 最初《さいしょ》 の 週《しゅう》 は 落《お》ち込《こ》みました けど、 死《し》にたい と は 思《おも》いません でした。", "No. The first week I was down, but I didn't want to die."],
     1: ["ない です。", "No."],
     2: ["姉《あね》 に 話《はな》します。 外来《がいらい》 に も 電話《でんわ》 します。", "I'd tell my sister. And call the outpatient clinic."]
    },
    key: [0, 2],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    wrong: {
     "Passive death wish, no plan or intent": "He had low mood in week 1 but denies any wish to die, then or now."
    },
    doc: "Denies suicidal ideation, plan, or intent, including during the low mood of week 1; would tell his sister and call the outpatient clinic if such thoughts came",
    why: "Ask directly even when mood is better. Low mood after stopping a stimulant, and after a relapse, can bring suicidal thoughts, so ask again at follow-up."
   },
   homicide: {
    ans: {
     0: ["いいえ。 あの とき も、 誰《だれ》 か を 傷《きず》つけたかった わけ じゃ ない。 怖《こわ》かった だけ です。", "No. Even then I didn't want to hurt anyone. I was just scared."],
     1: ["いません。 バス停《てい》 に いた 人《ひと》たち に、 謝《あやま》りたい くらい です。", "No one. If anything, I'd like to apologize to the people at the bus stop."]
    },
    key: [0],
    need: [["Denies homicidal ideation", "None"]],
    wrong: {
     "Homicidal ideation present (reassess discharge)": "He denies any thought of harming others and regrets frightening people."
    },
    doc: "Denies homicidal ideation; no aggression on the ward; regrets frightening people at the bus stop; agitation on admission was driven by fear of being followed",
    why: "His risk to others on admission came from fear, driven by the persecutory belief. With the belief gone that risk is low, but it would return with the psychosis if he uses again."
   },
   orientation: {
    ans: {
     0: ["今日《きょう》 は… 十一月《じゅういちがつ》 十三日《じゅうさんにち》、 金曜日《きんようび》 です。", "Today is... November 13th, Friday."],
     1: ["病院《びょういん》 です。 精神科《せいしんか》 の 病棟《びょうとう》。", "The hospital. The psychiatric ward."],
     2: ["担当《たんとう》 の 先生《せんせい》 です。", "You're my doctor."]
    },
    need: ["Oriented to time, place, and person (×3)"],
    doc: "Oriented to time, place, and person (×3)",
    why: "Intoxication can cloud orientation on arrival. Full orientation today, with a clear story, also supports that he is not delirious."
   },
   memory: {
    ans: {
     0: ["ボール、 木《き》、 鍵《かぎ》。", "Ball, tree, key."],
     1: ["ボール、 木《き》、 鍵《かぎ》。", "Ball, tree, key."],
     2: ["パン と 牛乳《ぎゅうにゅう》 です。", "Bread and milk."],
     3: ["十日《とおか》 前《まえ》 です。 救急《きゅうきゅう》 から その まま 入院《にゅういん》 しました。 最初《さいしょ》 の 何日《なんにち》 か は、 よく 覚《おぼ》えて ない けど。", "Ten days ago. I came straight up from the emergency room. I don't remember the first few days well, though."],
     4: ["この 町《まち》 です。 姉《あね》 も 近《ちか》く に 住《す》んで います。", "Here in this town. My sister lives nearby too."]
    },
    need: ["Intact immediate, recent, and remote memory"],
    doc: "Intact immediate (3/3), recent (3/3 recall, breakfast, admission date), and remote memory; hazy recall of the first days, when he slept most of the time",
    why: "Hazy memory of the first days fits the long sleep after stopping the stimulant. Today's testing is intact."
   },
   insight: {
    ans: {
     0: ["覚醒剤《かくせいざい》 の せい で、 つけられて いる と 思《おも》い込《こ》んで、 バス停《てい》 で 騒《さわ》いだ から です。", "Because the stimulant made me believe I was being followed, and I made a scene at the bus stop."],
     1: ["はい。 やめられなかった の は、 病気《びょうき》 だった ん だ と 思《おも》います。 ずっと 夜勤《やきん》 で 疲《つか》れて いて、 使《つか》わない と 仕事《しごと》 が できない と 思《おも》って いました。", "Yes. I think not being able to stop was an illness. I was always tired from the night shifts and thought I couldn't work without it."],
     2: ["はい、 しばらく は。 また 見張《みは》られて いる 気《き》 が したら 困《こま》る ので。 いつ まで 飲《の》む か は、 来週《らいしゅう》 先生《せんせい》 と 相談《そうだん》 します。", "Yes, for a while. I don't want to feel watched again. How long I take it, I'll talk over with the doctor next week."],
     3: ["一番《いちばん》 怖《こわ》い の は、 薬《くすり》 を やめる こと より、 また 覚醒剤《かくせいざい》 を 使《つか》う こと です。 そう したら、 また あの 状態《じょうたい》 に なる。", "What scares me most isn't stopping the medicine, it's using the stimulant again. If I do, I'll end up like that again."]
    },
    key: [1, 3],
    need: [["Fair", "Good"], "Grade 5: intellectual insight"],
    wrong: {
     "Grade 4: aware, cause unknown in self": "He does know the cause: he names the stimulant and his own use. That is grade 5.",
     Poor: "Insight was poor on admission. Today he links the psychosis to the stimulant, names his trigger, and accepts treatment.",
     "Grade 3: blames others/external factors": "He no longer blames the men in the car. He names the drug and his own use.",
     "Grade 6: true emotional insight": "Grade 6 is shown by changed behavior over time. He has been abstinent only 10 days, in hospital."
    },
    doc: "Fair to good (grade 5): attributes the psychosis to the stimulant (“覚醒剤《かくせいざい》 が そう 思《おも》わせて いた”), accepts the use disorder as an illness, names night shifts and exhaustion as his trigger; accepts olanzapine for now and understands that using again would bring the psychosis back",
    why: "His answer to the last question is the key point: the main risk is not stopping the medicine but using again. That matches the clinical picture. Insight is tested outside the hospital, so plan the support."
   },
   judgment: {
    ans: {
     0: ["なくなる 前《まえ》 に、 外来《がいらい》 に 電話《でんわ》 します。", "I'll call the outpatient clinic before it runs out."],
     1: ["すぐ 外来《がいらい》 に 電話《でんわ》 します。 姉《あね》 に も 言《い》います。", "I'll call the clinic right away. And tell my sister."],
     2: ["周《まわ》り に 知《し》らせて、 落《お》ち着《つ》いて 外《そと》 に 出《で》ます。", "I'd warn the people around me and get out calmly."],
     3: ["断《ことわ》ります。 だから、 あの 連中《れんちゅう》 と は もう 会《あ》わない ん です。 使《つか》いたい 気持《きも》ち は、 今《いま》 は 十《じゅう》 の うち 三《さん》 ぐらい。 強《つよ》く なったら、 外来《がいらい》 に 電話《でんわ》 します。", "I'd say no. That's why I'm not seeing those guys anymore. The craving right now is about three out of ten. If it gets strong, I'll call the clinic."]
    },
    key: [3],
    need: ["Intact test judgment", "Intact social judgment"],
    ok: ["Good", "Fair"],
    wrong: {
     "Impaired social judgment": "Judgment was impaired on admission. Today his plans are realistic: day shifts, no contact with the people he used with, and a call when craving rises.",
     Poor: "His plans for medicine, voices and offers of the drug are all safe and specific."
    },
    doc: "Good: intact test and social judgment; realistic plan for offers of the stimulant (refuse, avoid the people he used with, call the clinic if craving rises); craving 3/10",
    why: "Ask the realistic question about offers of the drug. A plan that changes his routine (day shifts) and his contacts is stronger than willpower alone. Record the craving rating so follow-up can compare."
   },
   sleep: {
    obs: "Sleep chart: 7 hours a night. Slept very long for the first 3 days, then a normal pattern.",
    ans: {
     0: ["七時間《しちじかん》 ぐらい です。 夜《よる》 に ちゃんと 寝《ね》る の は 久《ひさ》しぶり です。", "About seven hours. It's been a long time since I slept properly at night."],
     1: ["あまり ない です。", "Not really."],
     2: ["いいえ。 最初《さいしょ》 の 三日《みっか》 は ずっと 寝《ね》て ました けど、 今《いま》 は 大丈夫《だいじょうぶ》 です。", "No. The first three days I slept all the time, but now I'm fine."],
     3: ["いいえ、 ない です。", "No, not at all."]
    },
    need: ["Good"],
    ok: ["7–8 hours, uninterrupted"],
    wrong: {
     "Daytime sedation": "The long sleep was in the first 3 days after he stopped the stimulant. He has no daytime sleepiness now.",
     "Reduced need for sleep": "He sleeps 7 hours and does not feel he needs less."
    },
    doc: "Good, 7 hours (sleep chart); prolonged sleep on days 1–3 after stopping the stimulant, normal since; no daytime sedation",
    why: "Sleep loss on night shifts was part of his trigger, and not sleeping is an early warning sign. Day shifts protect his sleep."
   },
   adverse: {
    obs: "Chart: no restraint after the emergency department, no falls, no aggression on the ward. Very long sleep on days 1–3, low mood and craving in week 1, all settled.",
    ans: {
     0: ["特《とく》に ない です。 最初《さいしょ》 は 眠《ねむ》くて しかたなかった けど、 今《いま》 は 平気《へいき》 です。", "Nothing really. At first I was terribly sleepy, but I'm fine now."],
     1: ["いいえ、 何《なに》 も。", "No, nothing."]
    },
    key: [0],
    need: ["Withdrawal symptoms"],
    ok: ["Sedation"],
    wrong: {
     None: "He had stimulant withdrawal on the ward: very long sleep, then low mood and craving. Adverse events include more than drug side effects.",
     "Agitation requiring restraint": "No restraint was used after the emergency department, and there was no aggression on the ward.",
     "Fall or injury": "No falls were recorded.",
     "Extrapyramidal symptoms": "He reports no stiffness or shaking on olanzapine."
    },
    doc: "Stimulant withdrawal: prolonged sleep days 1–3, low mood and craving in week 1, settled; no restraint after the emergency department, no falls, no aggression; no side effects reported on olanzapine",
    why: "Adverse events are what happened during the stay, not only drug side effects. Long sleep, low mood and craving after stopping a stimulant are withdrawal, and the low mood and craving can return at home."
   },
   diagnosis: {
    ans: {
     0: ["覚醒剤《かくせいざい》 が 原因《げんいん》 の 病気《びょうき》 です か…。 先生《せんせい》、 この こと、 警察《けいさつ》 や 会社《かいしゃ》 に 知《し》らせる ん です か。", "An illness caused by the stimulant... Doctor, are you going to tell the police or my company about this?"],
     1: ["はい。 本当《ほんとう》 に、 つけられて いる と 思《おも》って いました。 今《いま》 考《かんが》える と、 怖《こわ》い です。", "Yes. I really believed I was being followed. Thinking about it now, it's scary."],
     2: ["でも、 使《つか》った の は 自分《じぶん》 です から。", "But I'm the one who used it."]
    },
    key: [0],
    need: ["Methamphetamine-induced psychotic disorder, with ___ use disorder"],
    wrong: {
     "Schizophrenia, first episode, currently in acute episode": "The psychosis began with heavy stimulant use and cleared within days of stopping. That supports a substance-induced psychosis. Reconsider only if symptoms return or persist without use.",
     "Schizophrenia, first episode, currently in partial remission": "His symptoms have cleared, not partly remitted, and the course points to the stimulant.",
     "Bipolar I disorder, current episode manic": "Pressured speech and agitation came with intoxication and paranoia. There is no sustained elevated mood."
    },
    doc: "Methamphetamine-induced psychotic disorder, with stimulant use disorder, moderate (urine screen positive for an amphetamine-type stimulant on admission); psychosis cleared by day 5 with abstinence. Asked whether the doctor will tell the police or his employer: told that what he says is used for his treatment and kept confidential, and that the limits set by law and hospital policy would be explained",
    why: "He asks about the police and his employer. Answer honestly and generally, for example: 「ここ で 話《はな》した こと は、 佐藤《さとう》さん の 治療《ちりょう》 の ため に 使《つか》い、 秘密《ひみつ》 は 守《まも》ります。 ただ、 法律《ほうりつ》 や 病院《びょういん》 の 決《き》まり に よって は、 例外《れいがい》 も あります。 どんな 場合《ばあい》 か、 先《さき》 に 説明《せつめい》 させて ください。」 (What you tell me is used for your treatment and kept confidential. But depending on the law and hospital policy, there are exceptions. Let me explain first which situations those are.) Do not promise more than you can keep. Follow local law and your hospital's policy, and explain the limits before he tells you more. When he says “I'm the one who used it”, acknowledge that he made choices, and still name the use disorder as a treatable illness: shame keeps people from coming back for help."
   },
   medications: {
    ans: {
     0: ["はい。 オランザピン を 寝《ね》る 前《まえ》 に、 です ね。", "Yes. Olanzapine before bed, right?"],
     2: ["オランザピン を 毎晩《まいばん》 寝《ね》る 前《まえ》 に 飲《の》みます。 量《りょう》 は 入院中《にゅういんちゅう》 に 減《へ》らして もらった まま です。 いつ まで 飲《の》む か は、 来週《らいしゅう》 の 外来《がいらい》 で 相談《そうだん》 します。 自分《じぶん》 で 勝手《かって》 に やめません。", "Olanzapine every night before bed. The dose stays where it was lowered to in hospital. How long I take it, we'll decide at the clinic next week. I won't stop it on my own."],
     3: ["近《ちか》く の 薬局《やっきょく》 で もらいます。 仕事《しごと》 は 続《つづ》ける ので、 お金《かね》 は 大丈夫《だいじょうぶ》 です。", "I'll get it at the pharmacy nearby. I'm keeping my job, so the money is fine."],
     4: ["はい。 調子《ちょうし》 が よくて も、 先生《せんせい》 と 相談《そうだん》 して から に します。", "Yes. Even if I feel good, I'll talk to the doctor first."]
    },
    key: [2],
    need: ["Olanzapine ___ mg tab, 1 tab at bedtime", "Teach-back done, correct"],
    wrong: {
     "Teach-back incorrect, re-taught": "His teach-back was correct: every night at bedtime, the lower dose, and no stopping on his own before the review.",
     "Naloxone kit given and taught": "Naloxone reverses opioids. He used a stimulant, not an opioid."
    },
    doc: "Olanzapine 5 mg tab at bedtime (teaching example), for now; review at the outpatient visit in one week, aiming to stop after some weeks if no psychotic symptoms return; teach-back correct; pickup and cost checked",
    why: "In a substance-induced psychosis the antipsychotic is often short term. Tell him that stopping is planned and will be decided together, so he does not stop on his own. Teach-back covers the timing and the plan to review."
   },
   aftercare: {
    ans: {
     0: ["来週《らいしゅう》 の 金曜日《きんようび》 です ね。 紙《かみ》 に 書《か》いて もらいました。 依存症《いぞんしょう》 の 外来《がいらい》 と、 自助《じじょ》 グループ も 紹介《しょうかい》 して もらいました。", "Next Friday, right? I got it written down. You also referred me to the addiction clinic and a self-help recovery group."],
     1: ["最初《さいしょ》 の 一週間《いっしゅうかん》 は、 毎日《まいにち》 弟《おとうと》 の アパート に 様子《ようす》 を 見《み》 に 行《い》きます。 お薬《くすり》 を 飲《の》んだ か も 確認《かくにん》 します。 気《き》 を つける サイン も、 ここ で 教《おし》えて いただきました。 本当《ほんとう》 に ほっと しました。", "For the first week, I'll go by my brother's apartment every day to see how he is. I'll check that he has taken his medicine, too. You also taught me here which signs to watch for. I'm really relieved.", "Tomoko (sister)"],
     2: ["はい。 眠《ねむ》れなく なったり、 見張《みは》られて いる 気《き》 が したり、 使《つか》いたい 気持《きも》ち が 強《つよ》く なったり したら、 外来《がいらい》 に 電話《でんわ》 します。", "Yes. If I can't sleep, if I feel watched, or if the craving gets strong, I'll call the outpatient clinic."],
     3: ["はい。 カード は 財布《さいふ》 に 入《い》れて おきます。 危《あぶ》ない とき は ｜119番《ひゃくじゅうきゅうばん》 です ね。", "Yes. I'll keep the card in my wallet. In danger it's 119, right?"]
    },
    key: [1, 2],
    need: ["Outpatient follow-up in 1–2 weeks", "Referred to ___", "Family oriented on warning signs"],
    ok: ["Follow-up appointment date and clinic given in writing"],
    wrong: {
     "Naloxone kit and MOUD referral": "Naloxone and medicines for opioid use disorder are for opioids. He used a stimulant.",
     "Discharge deferred: ___": "The psychosis has cleared, he sleeps well, craving is low, and he has a plan that targets his trigger.",
     "Long-acting injectable schedule given": "No injection was ordered. The plan is to review and possibly stop olanzapine."
    },
    doc: "Outpatient review in one week (date given in writing); referred to outpatient addiction follow-up and a recovery support group; sister Tomoko visits daily the first week and is oriented on warning signs; plans to ask his employer for day shifts and to cut contact with the people he used with; warning signs (not sleeping, feeling watched, craving) → call the outpatient clinic; danger → 119; the local crisis line card given",
    why: "The risk after discharge is relapse to use, which brings the psychosis back. A good plan targets the trigger (night shifts and exhaustion), the people he used with, and the warning signs, and names who to call. Tomoko is a strong support: include her in the warning signs."
   }
  }
 },
{
  id: "chiyoko",
  title: "Calmer nights, a plan the family can manage",
  level: "N3",
  dx: "Major neurocognitive disorder due to Alzheimer's disease, moderate, with behavioral disturbance",
  decision: { discharge: true, why: "Discharge today, home with Hiroshi and Megumi. The aim of this admission was never to remove the dementia or the theft belief. It was that she is safe at night, less distressed, and that the family can manage. She now sleeps 6 to 7 hours, has not wandered on the ward since week 2, and is calmer with Megumi; the belief is still there but upsets her much less. Home is ready: a door sensor, a card with her name and the family's contact in her bag, day care three days a week, a spare purse, and support for Megumi as her carer. Risperidone was started only after Hiroshi was told the risks and agreed, at the lowest dose, and it will be reviewed in 2 weeks with the aim of stopping it. Keeping her longer would not change the belief, and an unfamiliar place can itself unsettle a person with dementia." },
  setting: "Ward, morning of planned discharge (day 24). Chiyoko Ito, 79, retired primary-school teacher, widowed, born in Niigata. Lives with her eldest son Hiroshi, 52, an office worker, and his wife Megumi, 50, her main carer. Both have come to take her home and join part of the interview.",
  chart: [
   "Admitted 24 days ago, brought in the evening by Hiroshi and Megumi. Forgetfulness for about four years; Alzheimer's disease diagnosed at a memory clinic two years ago; donepezil 5 mg every morning. For two months: said Megumi steals her purse and bankbook, got up at night packing a bag \"to go home\" to her childhood home, worse in the late afternoon and evening. Left the house at 2 a.m. three nights before admission (found by a police officer about 2 km away) and pushed Megumi the next night when stopped (no injury). Delirium judged unlikely in the emergency department (no fever, urine and blood tests normal, no new medicines, no acute change in attention, gradual course).",
   "Admission MSE: restless; friendly to the doctor, cold and suspicious toward Megumi; word-finding pauses and confabulation (said she had to teach at school the next day); circumstantial; persecutory delusion of theft; no hallucinations; denied suicidal and homicidal ideation and denied the push; oriented to person only (thought she was at a school); recent memory poor, remote memory relatively kept; insight poor (grade 1: denied illness); judgment impaired; impulse control poor.",
   "Course: a regular day routine with daytime activity, light in the evening, a clock and calendar in her room, the same nurses where possible; donepezil continued. Day 4: after Hiroshi was told the risks (higher risk of stroke, falls and death in older people with dementia) and agreed, risperidone 0.5 mg at night for night agitation and distress from the theft belief. Theft belief persists but she is less upset by it and calmer with Megumi. No wandering on the ward since week 2. Sleep chart 6 to 7 hours. One near fall on day 9, no injury. No restraint.",
   "Plan: home with Hiroshi and Megumi. Donepezil 5 mg every morning; risperidone 0.5 mg at night, to be reviewed at the outpatient visit in 2 weeks with the aim of reducing and stopping it; Megumi gives the medicines. Day care three days a week, arranged with the hospital social worker. Door sensor at home; card with her name and the family's contact in her bag. Family taught not to argue about the purse but to help look for it, and to keep a spare purse. A short respite stay discussed for later; support for Megumi as a carer. The local crisis line card."
  ],
  fields: {
   behavior: {
    obs: "In her own clothes, cardigan buttoned correctly today (a nurse helped her). Hair combed. Calm and smiling; pats your hand and talks to you in the same warm, motherly way as on admission. Good eye contact. Sits through the interview. Asks twice whether she is going home today and is pleased each time. Greets Megumi warmly when she comes in.",
    ans: {
     0: ["元気《げんき》 です よ。 今日《きょう》 は 家《いえ》 に 帰《かえ》れる ん でしょう？ うれしい ね。", "I'm well. I can go home today, can't I? How nice."],
     1: ["どうぞ どうぞ。 先生《せんせい》 と 話《はな》す の は 楽《たの》しい から。", "Of course, go ahead. I enjoy talking with you, Sensei."]
    },
    need: ["Calm", "Cooperative", "Good eye contact", ["Well groomed", "Fairly groomed"]],
    wrong: {
     Restless: "On admission she got up for the door twice. Today she sits through the interview.",
     Irritable: "She mentions the purse calmly today and greets Megumi warmly.",
     Overfamiliar: "A warm, motherly tone with a young doctor is how many people her age talk to younger people. It is not disinhibition."
    },
    doc: "Calm, cooperative, good eye contact, well groomed with help (a nurse helped with buttons); warm, motherly tone with the doctor; warm toward her daughter-in-law",
    why: "Compare with admission: restless, cardigan misbuttoned, cold toward Megumi then; calm and warm toward her now. Write down that she needs help with dressing: it goes into the plan for home."
   },
   mood: {
    obs: "Smiles often. Lights up when going home is mentioned. Mentions the purse with a small shrug, not anger.",
    ans: {
     0: ["楽《たの》しかった です よ。 朝《あさ》 は 体操《たいそう》 を して、 午後《ごご》 は 歌《うた》 を 歌《うた》ったり ね。", "It's been fun. Exercises in the morning, and singing in the afternoon."],
     1: ["うれしい です。 家《いえ》 に 帰《かえ》れる から。 ……お財布《さいふ》 の こと は、 まあ、 いい の。 恵《めぐみ》さん も 一緒《いっしょ》 に 探《さが》して くれる し。", "Happy. Because I can go home. ...About my purse, well, never mind. Megumi helps me look for it."],
     2: ["八《はち》 かな。", "An eight, I'd say."]
    },
    quote: "うれしい です。 家《いえ》 に 帰《かえ》れる から。 (Happy. Because I can go home.)",
    need: ["Euthymic mood", "Congruent affect", "Full range affect"],
    wrong: {
     "Irritable mood": "On admission she was irritable whenever the purse came up. Today she mentions it with a shrug.",
     "Mildly elevated mood": "Being pleased about going home is a fitting reaction, not elevated mood.",
     "Labile affect": "Her feelings are steady through the interview."
    },
    doc: "“うれしい です。 家《いえ》 に 帰《かえ》れる から。” (Happy. Because I can go home.) Mood 8/10. Euthymic mood; congruent, full range affect; calm when the purse is mentioned",
    why: "Quote her words. The change that matters is how she reacts to the purse: anger on admission, a shrug today. That is the distress the treatment aimed at."
   },
   process: {
    obs: "Drifts into a story about doing exercises with her pupils, then comes back to going home. Stops herself once: remembers she has retired.",
    ans: {
     0: ["入院《にゅういん》？ ……ちょっと 体《からだ》 を 休《やす》め に 来《き》た の よ。 夜《よる》 に 眠《ねむ》れなくて ね。 ここ で は 毎朝《まいあさ》 体操《たいそう》 を する の。 昔《むかし》、 学校《がっこう》 で も 子《こ》ども たち と 体操《たいそう》 を した もの です よ。 ……それで、 今日《きょう》 は 帰《かえ》る ん です よ ね。", "Admitted? ...I came for a little rest. I couldn't sleep at night, you see. Here we do exercises every morning. I used to do exercises with the children at school, too. ...And so, I'm going home today, aren't I?"],
     1: ["家《いえ》 で？ 学校《がっこう》 の 準備《じゅんび》…… あ、 もう 先生《せんせい》 は 辞《や》めた ん だった。 恵《めぐみ》さん と お茶《ちゃ》 を 飲《の》んで、 のんびり します。", "At home? Get ready for school... oh, I've retired, haven't I. I'll have tea with Megumi and take it easy."]
    },
    need: ["Some circumstantiality"],
    ok: ["Goal-directed", "Coherent and relevant"],
    wrong: {
     "Some tangentiality": "She drifts into her school days but comes back to going home on her own.",
     "Loose associations": "Each idea follows from the one before.",
     "Thought blocking": "Her pauses are a search for a word or a memory, not a sudden stop."
    },
    doc: "Some circumstantiality (detours into her teaching years, returns to the point); account of the admission vague (\"体《からだ》 を 休《やす》め に 来《き》た\"); corrects herself once about being retired",
    why: "Her story of the admission is vague because recent memory is poor, not because she is hiding anything. Get the history from the chart and the family. She corrects herself about being retired: that small change is worth noting."
   },
   positive: {
    obs: "Attends to you and to Megumi. Does not look around as if hearing or seeing something.",
    ans: {
     0: ["いいえ。", "No."],
     1: ["いいえ。", "No."],
     2: ["いいえ、 見《み》えません よ。", "No, I don't see anything."],
     3: ["ひどい こと なんて、 されません よ。 ……ただ、 お財布《さいふ》 は 時々《ときどき》 なくなる の よ。 誰《だれ》 か が 持《も》って いく ん でしょう ね。", "Nobody does anything bad to me. ...Only, my purse goes missing now and then. Someone takes it, I suppose."],
     4: ["恵《めぐみ》さん が お財布《さいふ》 を？ ……そう ね、 今《いま》 でも 時々《ときどき》 そう 思《おも》う けど ね。 でも、 一緒《いっしょ》 に 探《さが》して くれる し、 もう 怒《おこ》ったり しない の。", "That Megumi takes my purse? ...Well, I still think so sometimes. But she helps me look for it, and I don't get angry anymore."],
     5: ["声《こえ》？ いいえ。", "Voices? No."]
    },
    key: [3, 4],
    need: ["No hallucinations elicited", "Not responding to internal stimuli", ["Delusions persist", "Residual persecutory ideas, less intense"]],
    wrong: {
     "Delusions no longer held": "She still thinks someone, sometimes Megumi, takes her purse. What changed is how upset she is by it.",
     "Responding to internal stimuli": "She attends to you and to Megumi."
    },
    doc: "No hallucinations elicited; not responding to internal stimuli. Delusion of theft persists (\"今《いま》 でも 時々《ときどき》 そう 思《おも》う\") but with much less distress; no longer angry with Megumi (\"もう 怒《おこ》ったり しない の\")",
    why: "Name the belief from admission when you re-ask, as here. Document honestly that it persists. The goal in dementia is less distress and safer behaviour, not that the belief disappears."
   },
   negative: {
    obs: "Ward notes: joins the morning exercises and the singing group every day; chats with the woman in the next bed. Needs prompting and some help with bathing and dressing.",
    ans: {
     0: ["楽《たの》しい です よ。 朝《あさ》 の 体操《たいそう》 と、 歌《うた》 の 時間《じかん》。", "Yes, I enjoy them. The morning exercises and the singing."],
     1: ["ええ、 隣《となり》 の 奥《おく》さん と ね。 ……お名前《なまえ》 は 忘《わす》れちゃった けど。", "Yes, with the lady next to me. ...I've forgotten her name, though."],
     2: ["ええ、 あります よ。", "Yes, I do."],
     3: ["看護師《かんごし》さん が 手伝《てつだ》って くれる から、 ちゃんと して います よ。", "The nurses help me, so I keep myself nice."]
    },
    need: ["None noted"],
    wrong: {
     "Poor self-care": "She needs prompts and help with bathing and dressing because of the dementia, not from lack of motivation. Write the help she needs into the plan for home.",
     Asociality: "She joins groups every day and chats with the woman next to her.",
     Avolition: "She takes part in the daily activities."
    },
    doc: "None noted; joins daily exercise and singing groups, chats with another patient; needs prompting and help with bathing and dressing (dementia)",
    why: "Daytime activity was part of the treatment: it helps her sleep at night. Help with self-care in dementia is a care need, not a negative symptom; Megumi needs to know how much help to give."
   },
   suicide: {
    ans: {
     0: ["いいえ、 そんな こと 考《かんが》えません よ。", "No, I don't think such things."],
     1: ["ありません。", "No."],
     2: ["そう ね…… 恵《めぐみ》さん に 言《い》います。", "Let me see... I'd tell Megumi."]
    },
    key: [0],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    doc: "Denies suicidal ideation, plan, or intent; would tell Megumi; family taught to watch for any change in mood",
    why: "Ask directly, in simple words, as you did on admission. Older adults are at real risk of suicide, so a dementia diagnosis is no reason to skip the question."
   },
   homicide: {
    ans: {
     0: ["とんでもない。", "Good heavens, no."],
     1: ["いいえ。 恵《めぐみ》さん に も、 もう 怒《おこ》って いません よ。", "No. I'm not angry with Megumi anymore either."]
    },
    key: [1],
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation; no longer angry with Megumi; no pushing or aggression on the ward. Before admission she pushed Megumi when stopped from going out (no injury)",
    why: "Ask about the person who was the target of her belief. The push came from being stopped, not from a wish to harm; the home plan (door sensor, not blocking her bodily, calm redirection) is how you lower that risk."
   },
   orientation: {
    ans: {
     0: ["今日《きょう》？ ええと…… 何月《なんがつ》 だった かな。 カレンダー を 見《み》れば わかる ん だ けど。", "Today? Um... what month was it again? If I look at the calendar I'll know."],
     1: ["病院《びょういん》 でしょう。 看護師《かんごし》さん が いる から。 ……どこ の 病院《びょういん》 か は、 ちょっと ね。", "It's a hospital, isn't it? There are nurses. ...Which hospital, I'm not quite sure."],
     2: ["先生《せんせい》 でしょう。 お医者《いしゃ》さん の。", "You're the sensei. The doctor."]
    },
    need: ["Disoriented to time"],
    ok: ["Disoriented to place"],
    wrong: {
     "Oriented to time, place, and person (×3)": "She cannot give the month or the day, and she does not know which hospital.",
     "Disoriented to person": "She knows who she is and that you are her doctor."
    },
    doc: "Disoriented to time (cannot give month, date or day; knows the calendar would tell her); partly oriented to place (knows it is a hospital, not which one; thought she was at a school on admission); oriented to person",
    why: "Orientation is still impaired, and the note should say so. A discharge MSE in dementia is not \"normal\". Two things improved: she now knows she is in a hospital, and she reaches for the calendar. Clocks and calendars helped on the ward; put them at home too."
   },
   memory: {
    ans: {
     0: ["ボール、 木《き》、 鍵《かぎ》。", "Ball, tree, key."],
     1: ["ボール と…… あと は 何《なん》 だった かな。", "Ball and... what were the others?"],
     2: ["朝《あさ》ご飯《はん》？ まだ じゃ ない かな。", "Breakfast? I haven't had it yet, have I?"],
     3: ["昨日《きのう》…… かな。 先週《せんしゅう》 だった かな。", "Yesterday... maybe. Or was it last week?"],
     4: ["新潟《にいがた》 です よ。 雪《ゆき》 の 多《おお》い ところ で ね。", "Niigata. A place with lots of snow."]
    },
    need: ["Impaired recent memory"],
    wrong: {
     "Intact immediate, recent, and remote memory": "She recalls only one word after a delay, does not remember breakfast, and does not know when she was admitted.",
     "Impaired immediate memory": "She repeats all three words at once.",
     "Impaired remote memory": "She gives her birthplace and talks in detail about her teaching years. Remote memory is relatively preserved."
    },
    doc: "Immediate memory intact (3/3); recent memory impaired (1/3 recall, does not recall breakfast, which she ate per nursing notes, or the admission date, 24 days ago); remote memory relatively preserved (Niigata, teaching years)",
    why: "Same pattern as on admission: recent memory poor, remote memory relatively kept. Check her answers against the nursing notes and the family. Because she forgets, the plan relies on the family, the card in her bag and the door sensor, not on what she remembers today."
   },
   insight: {
    ans: {
     0: ["ちょっと 疲《つか》れて いた から でしょう。 夜《よる》 眠《ねむ》れなくて。", "I was a bit tired, I suppose. I couldn't sleep at night."],
     1: ["病気《びょうき》？ もの忘《わす》れ は 少《すこ》し ある けど、 年《とし》 の せい よ。", "An illness? I'm a little forgetful, but that's age."],
     2: ["恵《めぐみ》さん が 出《だ》して くれる から、 飲《の》みます よ。 先生《せんせい》 が そう 言《い》う なら ね。", "Megumi gives them to me, so I'll take them. If you say so, Sensei."],
     3: ["さあ…… わからない ね。", "Well... I couldn't say."]
    },
    key: [1, 2],
    need: ["Poor", ["Grade 2: slight awareness", "Grade 1: complete denial"]],
    wrong: {
     Good: "She does not see an illness and puts her forgetfulness down to age.",
     Fair: "She takes medicine because Megumi gives it and the doctor says so, not because she sees a need.",
     "Grade 3: blames others/external factors": "Grade 3 needs her to accept an illness and blame it on something outside her. She admits forgetfulness and poor sleep but not an illness: that is slight awareness at most.",
     "Grade 5: intellectual insight": "She cannot explain the illness or why she needs treatment."
    },
    doc: "Poor (grade 2): admits some forgetfulness and poor sleep but not an illness; puts forgetfulness down to age (\"年《とし》 の せい よ\") and the admission down to tiredness; no longer blames Megumi; will take medicines because Megumi gives them and the doctor advises it",
    why: "Insight is still poor, which is expected in moderate dementia; it is part of the illness. Compared with admission (grade 1), she now admits some forgetfulness and poor sleep, and she no longer blames Megumi for the admission, a real change for the family. The plan cannot rest on her insight, so it rests on Megumi giving the medicines."
   },
   judgment: {
    ans: {
     0: ["お薬《くすり》 は 私《わたし》 が 管理《かんり》 して います。 なくなる 前《まえ》 に、 外来《がいらい》 で もらいます。", "I look after the medicines. We'll get more at the outpatient clinic before they run out.", "Megumi (daughter-in-law)"],
     1: ["声《こえ》？ そんな もの、 聞《き》こえた こと ありません よ。", "Voices? I've never heard anything like that."],
     2: ["煙《けむり》？ あら…… どう しましょう。 恵《めぐみ》さん を 呼《よ》びます。", "Smoke? Oh dear... what shall I do. I'd call Megumi."],
     3: ["お酒《さけ》？ 私《わたし》 は 飲《の》みません よ。 覚醒剤《かくせいざい》 なんて、 とんでもない。", "Alcohol? I don't drink. Drugs? Good heavens, no."]
    },
    key: [0, 2],
    need: ["Poor", "Impaired social judgment"],
    wrong: {
     "Intact test judgment": "Faced with smoke in a crowded cinema, her only plan is to call for Megumi: she does not think of leaving or telling the staff.",
     "Intact social judgment": "She cannot manage her own medicines or safety at home; the family plan exists because of that.",
     Good: "Her own judgment about safety is still impaired.",
     Fair: "She has no safe plan for danger and depends on others for medicines and safety."
    },
    doc: "Poor: impaired test judgment (smoke in a cinema: would only call for her daughter-in-law, no plan to leave or tell staff); impaired social judgment (cannot manage her own medicines or safety); Megumi manages the medicines and the home safety plan",
    why: "Her judgment has not changed, and it will not with treatment; the plan makes up for it. She cannot fully weigh decisions about her care, so they are made with her and her family. Follow local law and your hospital's policy."
   },
   sleep: {
    obs: "Sleep chart: 6 to 7 hours a night since the second week. No wandering on the ward since week 2. Active in the day groups.",
    ans: {
     0: ["よく 眠《ねむ》れて います よ。", "I sleep well."],
     1: ["たまに 目《め》 が 覚《さ》める けど、 すぐ また 寝《ね》ます よ。", "Now and then I wake, but I go straight back to sleep."],
     2: ["眠《ねむ》く ない です よ。 昼間《ひるま》 は 体操《たいそう》 や 歌《うた》 で 忙《いそが》しい から。", "I'm not sleepy. In the daytime I'm busy with exercises and singing."],
     3: ["いいえ。 夜《よる》 は ちゃんと 眠《ねむ》く なります。", "No. I get properly sleepy at night."]
    },
    need: ["Good"],
    ok: ["Fair"],
    wrong: {
     "7–8 hours, uninterrupted": "The chart shows 6 to 7 hours, and she wakes now and then.",
     "Daytime sedation": "She is active in the day groups and not sleepy. Keep checking, because sleepiness would raise her risk of falls.",
     "Frequent awakenings": "She wakes only now and then and settles quickly; no wandering since week 2.",
     "Reduced need for sleep": "She gets sleepy at night as expected."
    },
    doc: "Good, 6–7 hours (sleep chart); occasional brief waking, settles quickly; no night wandering since week 2; no daytime sedation",
    why: "Night sleep was the main target. The day routine, daytime activity and evening light helped as much as the medicine. Tell the family to keep the same routine at home."
   },
   adverse: {
    obs: "Chart: one near fall on day 9, no injury; a nurse steadied her. No tremor, stiffness or abnormal movements on examination. No restraint. No medical illness during the stay.",
    ans: {
     0: ["いいえ、 困《こま》って いません よ。", "No, nothing bothers me."],
     1: ["けが？ して いません よ。", "Hurt? No, I haven't been hurt."]
    },
    key: [1],
    need: ["Fall or injury"],
    wrong: {
     None: "She did not fall and was not hurt, but a near fall is a safety event worth recording: falls are a known risk of antipsychotics in older people with dementia, and they shape the plan at home.",
     "Extrapyramidal symptoms": "No tremor, stiffness or abnormal movements on examination.",
     Sedation: "She is active in the day and not sleepy.",
     "Agitation requiring restraint": "No restraint was used."
    },
    doc: "Fall or injury: near fall on day 9 (steadied by a nurse; she did not fall and was not hurt); no extrapyramidal symptoms, no sedation; no restraint; no medical illness",
    why: "The form has no pick for a near fall. \"Fall or injury\" is the closest; pick it and write exactly what happened, that she did not fall and was not hurt. She does not remember it, so read the chart. Record it beside the medicine started on day 4: it is one reason the risperidone is to be reviewed soon, and the family should know to watch for unsteadiness."
   },
   diagnosis: {
    ans: {
     0: ["病気《びょうき》？ 私《わたし》 が？ ……まあ、 先生《せんせい》 が そう 言《い》う なら。", "An illness? Me? ...Well, if you say so, Sensei."],
     1: ["はい。 母《はは》 が 恵《めぐみ》 を 泥棒《どろぼう》 と 言《い》う の も、 病気《びょうき》 の せい なん です よね。 わざと じゃ ない と わかって、 少《すこ》し 楽《らく》 に なりました。", "Yes. Mother calling Megumi a thief is the illness too, isn't it. Knowing she doesn't mean it makes it a little easier.", "Hiroshi (son)"],
     2: ["ありがとう ございます。 私《わたし》 の 世話《せわ》 の 仕方《しかた》 が 悪《わる》い から か と、 ずっと 思《おも》って いました。", "Thank you. I kept thinking it was because I wasn't caring for her properly.", "Megumi (daughter-in-law)"]
    },
    need: ["Other comorbid: ___"],
    wrong: {
     "Schizophrenia, first episode, currently in acute episode": "The theft belief began late in life, within known Alzheimer's disease, with memory loss and disorientation. It is part of the dementia.",
     "Major depressive disorder, recurrent": "No depressive episode was found on admission or during the stay."
    },
    doc: "Major neurocognitive disorder due to Alzheimer's disease, moderate, with behavioral disturbance (delusion of theft, night wandering, late-afternoon and evening agitation); delirium judged unlikely in the emergency department and not seen on the ward",
    why: "The form has no pick for dementia, so write it under “Other comorbid”. When you say 治療《ちりょう》 できる 病気《びょうき》 です, be honest: the dementia will not go away, but the night agitation and the distress can be treated, and the family can be helped. Telling Megumi it is not her fault matters as much as the diagnosis."
   },
   medications: {
    ans: {
     0: ["はい。 朝《あさ》 の お薬《くすり》 と、 夜《よる》 の お薬《くすり》 です ね。", "Yes. The morning medicine and the night medicine.", "Megumi (daughter-in-law)"],
     2: ["朝《あさ》 は 今《いま》 まで の 認知症《にんちしょう》 の お薬《くすり》、 夜《よる》 は 寝《ね》る 前《まえ》 に 新《あたら》しい お薬《くすり》。 私《わたし》 が 手渡《てわた》して、 飲《の》んだ の を 確《たし》かめます。 夜《よる》 の お薬《くすり》 は 二週間後《にしゅうかんご》 の 外来《がいらい》 で 見直《みなお》して、 減《へ》らして やめる の が 目標《もくひょう》 です よね。 ふらついたり、 ひどく 眠《ねむ》そう だったり、 体《からだ》 が こわばったり したら、 連絡《れんらく》 します。", "In the morning, the dementia medicine she's been taking; at night before bed, the new one. I hand them to her and check she has taken them. The night medicine will be reviewed at the clinic in two weeks, and the goal is to reduce it and stop it, right? If she's unsteady, very sleepy or stiff, I'll call.", "Megumi (daughter-in-law)"],
     3: ["いつも の 薬局《やっきょく》 で もらいます。 大丈夫《だいじょうぶ》 です。", "We'll get them at our usual pharmacy. That's fine.", "Hiroshi (son)"],
     4: ["はい。 でも、 夜《よる》 の お薬《くすり》 は 先生《せんせい》 と 相談《そうだん》 して 減《へ》らす ん です よね。", "Yes. But the night medicine is to be reduced together with you, right?", "Megumi (daughter-in-law)"]
    },
    key: [2],
    need: ["Risperidone ___ mg tab, ___", "Family supervises medication", "Teach-back done, correct"],
    wrong: {
     "Olanzapine ___ mg tab, 1 tab at bedtime": "Not prescribed. She goes home on risperidone at the lowest dose.",
     "Quetiapine ___ mg tab, ___": "Not prescribed.",
     "Teach-back incorrect, re-taught": "Megumi's teach-back was correct, including the review date and the side effects to report."
    },
    doc: "Donepezil 5 mg tab every morning (continued; no pick on the form). Risperidone 0.5 mg tab at night, started day 4 for night agitation and distress from the theft belief after Hiroshi was told the risks (higher risk of stroke, falls and death in older people with dementia) and agreed; to be reviewed at the outpatient visit in 2 weeks with the aim of reducing and stopping it. Megumi gives all medicines and checks they are taken; teach-back by Megumi correct, including side effects to report (unsteadiness, marked sleepiness, stiffness)",
    why: "Antipsychotics in dementia are used briefly, at the lowest dose, with the family informed, and reviewed. Write the risks you explained, who agreed, and the review date. The usual \"don't stop when you feel well\" needs a twist here: the family should not stop it alone, but the plan is to stop it with the doctor."
   },
   aftercare: {
    ans: {
     0: ["二週間後《にしゅうかんご》 です ね。 私《わたし》 も 一緒《いっしょ》 に 来《き》ます。", "In two weeks. I'll come with her too.", "Hiroshi (son)"],
     1: ["私《わたし》 です。 それ から、 デイサービス を 週《しゅう》 に 三日《みっか》、 ソーシャルワーカーさん と 決《き》めました。 玄関《げんかん》 に は センサー を 付《つ》けて、 バッグ に は 名前《なまえ》 と 連絡先《れんらくさき》 の カード を 入《い》れました。 お財布《さいふ》 の こと で は 言《い》い合《あ》い を しないで、 一緒《いっしょ》 に 探《さが》します。 予備《よび》 の お財布《さいふ》 も 用意《ようい》 しました。", "Me. And with the social worker we arranged day care three days a week. We've put a sensor on the front door, and a card with her name and our contact in her bag. We won't argue about the purse; we'll look for it together. I've got a spare purse ready too.", "Megumi (daughter-in-law)"],
     2: ["はい。 急《きゅう》 に ぼんやり したり、 熱《ねつ》 が 出《で》たり、 いつも と 様子《ようす》 が 違《ちが》ったら、 すぐ 連絡《れんらく》 します。 夜《よる》 また 一人《ひとり》 で 出《で》て いって しまったら、 まず 近《ちか》く を 探《さが》して、 すぐ 見《み》つからなければ 警察《けいさつ》 に 連絡《れんらく》 します。", "Yes. If she suddenly becomes dazed, gets a fever, or isn't her usual self, I'll call right away. If she goes out alone at night again, I'll search nearby first, and if I can't find her quickly, I'll call the police.", "Megumi (daughter-in-law)"],
     3: ["ありがとう ございます。 恵《めぐみ》 が 一人《ひとり》 で 抱《かか》え込《こ》まない よう に、 私《わたし》 も 気《き》 を つけます。", "Thank you. I'll make sure Megumi doesn't carry this alone.", "Hiroshi (son)"]
    },
    key: [1, 2],
    need: ["Outpatient follow-up in 1–2 weeks", "Family oriented on warning signs", "Referred to ___"],
    ok: ["Follow-up appointment date and clinic given in writing", "Safety plan made with patient and family"],
    wrong: {
     "Discharge deferred: ___": "She sleeps, has not wandered since week 2, is calmer with Megumi, and the home plan is in place.",
     "Transferred to ___ unit due to ___": "She goes home with her family."
    },
    doc: "Outpatient visit in 2 weeks (risperidone review), Hiroshi to attend; day care three days a week arranged with the hospital social worker; door sensor at home, card with her name and the family's contact in her bag; family taught not to argue about the purse but to help look for it, spare purse kept; family oriented on warning signs (sudden confusion, fever, change from her usual self, which could mean delirium; unsteadiness or sleepiness; if she goes out alone at night, search nearby, then call the police); short respite stay discussed for later; support for Megumi as carer; the local crisis line card given",
    why: "The aim is that she is safe at night, less distressed, and that the family can manage. Sudden confusion or fever at home means delirium until proven otherwise: teach the family that. A plan that wears out the carer will fail, so support for Megumi and a respite stay are part of the treatment."
   }
  }
 }
]);
