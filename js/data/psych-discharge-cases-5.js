/* Discharge practice cases, part 5: an older adult after delirium on a medical ward.
   STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Hanashimashō (Japanese). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Japanese text; registers are
   f = polite form (です/ます), c = plain form. Patient and family answers are natural spoken Japanese with an English translation.
   Shape: window.PSYCH_DISCHARGE_CASES = [ { id, title, level, dx, decision: { discharge, why }, setting, chart: [..],
     fields: { <PSYCH_DISCHARGE field id>: {
       obs: 'what the learner observes (English)',
       ans: { questionIndex: [japanese, english, speaker?] },   // patient's answer to field.ask[questionIndex]; speaker only when it is a family member
       key: [questionIndex], need: [pick or [any-of picks]], ok: [extra acceptable picks], wrong: { pick: why },
       doc: 'model documentation line', why: 'teaching note', quote?: 'mood field only' } } } ]
   Ids in this part: shigeru (Shigeru Yamada; same id as the case simulation in psych-cases-1.js and his admission MSE case
   (admission MSE practice cases, part 5); also in the nursing-notes
   reading in reading-3.js and the handover dialogue 'moshiokuri' in dialogues-2.js).
   Patients are fictional. No drug names or doses are given for his discharge medicines. Crisis line is the local crisis line. */
window.PSYCH_DISCHARGE_CASES = (window.PSYCH_DISCHARGE_CASES || []).concat([
 {
  id: "shigeru",
  title: "Clear head again, two weeks at his daughter's",
  level: "N4",
  dx: "Delirium due to urinary tract infection and dehydration, resolved",
  decision: { discharge: true, why: "Discharge today. The delirium has resolved: he is oriented, his attention is intact (he says the days of the week backward, which he could not do on admission), he has had no hallucinations since day 5 and no evening restlessness since day 6. The infection and dehydration are treated, with two more days of antibiotic tablets at home. The sleeping pill he took nightly for a year was tapered and stopped with no withdrawal signs, and he sleeps 6 to 7 hours without it. The risks after discharge are a new infection or dehydration bringing the confusion back, restarting the old sleeping pill, and a fall. The plan covers them: two weeks at Keiko's house, regular drinks, no sleeping pill, the local clinic in one week, and Keiko taught the warning signs. A memory assessment about three months after recovery will look at the name forgetting she noticed before. Keeping him longer in hospital could itself raise the risk of delirium coming back." },
  setting: "Medical ward, morning of discharge, day 8. You are the psychiatry consultation-liaison resident who has followed him. Shigeru Yamada, 78, retired rice farmer, widower, lives alone in his farmhouse. His eldest daughter Keiko lives about 20 minutes away; she has come to take him to her house and joins the interview.",
  chart: [
   "Admitted to the medical ward a week ago (today is day 8) with delirium due to a urinary tract infection and dehydration: sudden confusion since the night before, visual hallucinations of children at the window, disoriented, inattentive. Keiko reported he barely drank and had pain passing urine. Before this he was independent; over the last year Keiko noticed he sometimes forgets names (no diagnosis). Sleeping pill (benzodiazepine-type) nightly for about a year; blood-pressure medicine.",
   "Admission MSE: restless, picking at the sheet; fragmented, mildly disorganized speech; affect labile; tangential; visual hallucinations (children at the window); disoriented to place and time (thought he was in the rice paddy back home); attention impaired (could not say the days of the week backward); insight absent; judgment impaired.",
   "Course: IV fluids and an antibiotic, switched to tablets. Sleeping pill tapered and stopped over the week, no withdrawal signs. Blood-pressure medicine continued. No antipsychotic needed: clock, calendar, his own glasses, family visits, light by day, the same nurses, a low bed and a sensor mat. Evening restlessness up to day 5, none since day 6; no hallucinations since day 5. No restraint. No falls. Sleep chart 6 to 7 hours without the pill.",
   "Plan: two weeks at Keiko's house; finish the antibiotic tablets (two more days); blood-pressure medicine as before; drink regularly; no sleeping pill, sleep habits taught; local clinic in one week (blood pressure, urine recheck); memory assessment about three months after recovery; warning signs taught to Keiko (sudden confusion, fever, not drinking, pain passing urine, seeing things) → see a doctor the same day, 119 in an emergency; advised not to drive until the clinic says he may. The local crisis line card."
  ],
  fields: {
   behavior: {
    obs: "Sitting on the edge of the bed in his own clothes, which Keiko brought. Wearing his glasses; hair combed, shaved. Calm, a little tired, polite. Good eye contact. Looks down and smiles awkwardly when the first nights are mentioned.",
    ans: {
     0: ["おはよう ございます、 先生《せんせい》。 今日《きょう》 は 退院《たいいん》 できる ん だって な。 少《すこ》し 疲《つか》れて いる けど、 元気《げんき》 だ よ。", "Good morning, doctor. I hear I can leave hospital today. I'm a little tired, but I'm well."],
     1: ["ああ、 どうぞ。 恵子《けいこ》 も いる から、 一緒《いっしょ》 に 聞《き》いて もらおう。", "Yes, go ahead. Keiko's here too, so let's have her listen as well."]
    },
    need: ["Calm", "Cooperative", "Good eye contact", ["Well groomed", "Fairly groomed"]],
    wrong: {
     Restless: "He was restless and picking at the sheet on admission, and restless in the evenings up to day 5. He sits calmly now.",
     Withdrawn: "He is a little embarrassed about the first nights, but he talks readily and answers every question.",
     "Psychomotor retardation": "He is a little tired, but he moves and answers at a normal pace."
    },
    doc: "Calm, cooperative, good eye contact, well groomed (own clothes and glasses); a little tired; embarrassed when the first nights are mentioned",
    why: "Compare with admission: restless and picking at the sheet then, calm now. His glasses matter: seeing clearly helps a person recovering from delirium stay oriented."
   },
   mood: {
    obs: "Tired but relaxed. Smiles when Keiko speaks. Embarrassed, not sad, when the first nights come up.",
    ans: {
     0: ["大丈夫《だいじょうぶ》 だ。 ちょっと 疲《つか》れた だけ だ よ。 頭《あたま》 は もう すっきり して いる。", "I'm fine. Just a little tired. My head is clear now."],
     1: ["心配《しんぱい》 は ない よ。 ただ、 最初《さいしょ》 の 夜《よる》 の こと を 聞《き》いて、 恥《は》ずかしい よ。","I'm not worried. But hearing about the first nights, I'm embarrassed."],
     2: ["七《なな》 か な。 疲《つか》れて いなければ、 八《はち》 だ な。", "A seven, maybe. If I weren't tired, an eight."]
    },
    quote: "大丈夫《だいじょうぶ》 だ。 ちょっと 疲《つか》れた だけ だ よ。 (I'm fine. Just a little tired.)",
    need: ["Euthymic mood", "Congruent affect", "Full range affect"],
    wrong: {
     "Dysphoric mood": "Tiredness and embarrassment are not low mood. He says he is fine and rates his mood 7.",
     "Labile affect": "His affect was labile on admission. Today it is steady through the interview.",
     "Flat affect": "He smiles with Keiko and looks embarrassed at fitting moments."
    },
    doc: "“大丈夫《だいじょうぶ》 だ。 ちょっと 疲《つか》れた だけ だ よ。” (I'm fine. Just a little tired.) Mood 7/10. Euthymic mood; congruent, full range affect; embarrassed about the first nights",
    why: "Quote his words. Embarrassment about what he did while confused is common after delirium. Name it and tell him it was the illness, not him."
   },
   process: {
    obs: "Tells the story in order and stays on the point. Says plainly that he remembers little of the first two nights and repeats what Keiko told him.",
    ans: {
     0: ["おしっこ の 病気《びょうき》 と、 水《みず》 が 足《た》りなかった せい で、 頭《あたま》 が ぼんやり して、 わけ が わからなく なった そう だ。 最初《さいしょ》 の 二晩《ふたばん》 は、 ほとんど 覚《おぼ》えて ない。 窓《まど》 に 子《こ》ども が いる って、 騒《さわ》いだ らしい。 恵子《けいこ》 から 聞《き》いて、 恥《は》ずかしかった よ。 点滴《てんてき》 と 薬《くすり》 で、 だんだん 頭《あたま》 が はっきり して きた。", "They say an infection in my waterworks and not enough water made my head foggy, and I couldn't make sense of anything. I hardly remember the first two nights. Apparently I made a fuss that there were children at the window. Hearing it from Keiko, I was embarrassed. With the drip and the medicine, my head gradually got clear."],
     1: ["二週間《にしゅうかん》 は 恵子《けいこ》 の 家《いえ》 で 世話《せわ》 に なる。 薬《くすり》 を 最後《さいご》 まで 飲《の》んで、 水《みず》 を ちゃんと 飲《の》む。 来週《らいしゅう》 は 近《ちか》く の 診療所《しんりょうじょ》 に 行《い》く。 車《くるま》 の 運転《うんてん》 は、 診療所《しんりょうじょ》 の 先生《せんせい》 が いい と 言《い》う まで しない。", "I'll stay at Keiko's for two weeks. I'll finish the medicine and drink water properly. Next week I go to the local clinic. I won't drive until the clinic doctor says it's all right."]
    },
    need: ["Goal-directed", "Coherent and relevant"],
    wrong: {
     "Some tangentiality": "That was his admission thought process. Today he answers each question and stays on the point."
    },
    doc: "Goal-directed, coherent and relevant; amnesia for the first two nights, fills the gap with what his daughter told him, not with invented detail",
    why: "Compare with admission: tangential and fragmented then, clear now. Note that he says what he does not remember instead of making it up."
   },
   positive: {
    obs: "Attends to you and to Keiko. Does not look toward the window or around the room.",
    ans: {
     0: ["いや、 聞《き》こえない。", "No, I don't."],
     1: ["いや、 ない よ。", "No, nothing like that."],
     2: ["いや、 もう 何《なに》 も 見《み》えない よ。 ここ 何日《なんにち》 か は ない。 窓《まど》 の 外《そと》 は 駐車場《ちゅうしゃじょう》 だけ だ。", "No, I don't see anything now. Not for the last few days. Outside the window there's only the car park."],
     3: ["いや、 思《おも》わない。 看護師《かんごし》さん たち は、 よく して くれた。", "No, I don't. The nurses were very good to me."],
     4: ["田《た》んぼ に いる と 思《おも》って いた らしい な。 今《いま》 思《おも》えば、 病気《びょうき》 の せい だった ん だ。", "Seems I thought I was in the rice paddy. Thinking about it now, it was the illness."],
     5: ["声《こえ》？ いや、 一度《いちど》 も ない。", "Voices? No, never."]
    },
    key: [2, 4],
    need: ["No hallucinations elicited", "Not responding to internal stimuli"],
    wrong: {
     "Delusions no longer held": "He had no fixed delusion. Thinking he was in the rice paddy was disorientation, part of the delirium, and it cleared with it.",
     "Responding to internal stimuli": "He attends to you and to Keiko and does not look toward the window."
    },
    doc: "No hallucinations elicited (none since day 5); not responding to internal stimuli; recognizes the children at the window and the rice paddy as part of the illness",
    why: "When you re-ask, you can also name what he saw on admission, the children at the window. Visual hallucinations are typical of delirium; the voices question is still worth asking, in simple words."
   },
   negative: {
    obs: "Nursing notes: reads the newspaper in the day room, chats with the man in the next bed, showers and shaves himself.",
    ans: {
     0: ["活動《かつどう》 って ほど の もの は ない けど、 デイルーム で 新聞《しんぶん》 を 読《よ》む の が 楽《たの》しみ だ。", "There's not much in the way of activities, but I enjoy reading the paper in the day room."],
     1: ["隣《となり》 の ベッド の 人《ひと》 と、 よく 米《こめ》 の 話《はなし》 を した よ。", "I often talked about rice with the man in the next bed."],
     2: ["ああ。 早《はや》く 帰《かえ》って、 また 散歩《さんぽ》 したい。", "Yes. I want to get home and go for walks again."],
     3: ["昨日《きのう》 は シャワー を 浴《あ》びた。 ひげ も 自分《じぶん》 で そった よ。", "I had a shower yesterday. I shaved myself, too."]
    },
    need: ["None noted"],
    wrong: {
     Avolition: "Feeling a little tired after an illness is not loss of drive. He reads, talks and wants to walk again.",
     Anhedonia: "He enjoys the newspaper and talking about rice.",
     "Poor self-care": "He showers and shaves on his own."
    },
    doc: "None noted; reads the newspaper in the day room, chats with another patient, showers and shaves independently",
    why: "On a medical ward there are few activities, so ask about everyday things instead: the newspaper, talking, self-care. He is back to doing them on his own."
   },
   suicide: {
    ans: {
     0: ["いや、 ない ない。 そんな こと、 考《かんが》えた こと も ない よ。", "No, no. I've never even thought of such a thing."],
     1: ["ない よ。", "No."],
     2: ["恵子《けいこ》 に 言《い》う。", "I'd tell Keiko."]
    },
    key: [0],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    doc: "Denies suicidal ideation, plan, or intent; would tell his daughter",
    why: "Ask directly. An older man who is widowed and lives alone, after a frightening illness, is in a higher-risk group even when the question seems unnecessary."
   },
   homicide: {
    ans: {
     0: ["ない よ。", "No."],
     1: ["いない。 看護師《かんごし》さん たち に は、 迷惑《めいわく》 を かけた と 思《おも》って いる くらい だ。", "No one. If anything, I feel I gave the nurses trouble."]
    },
    key: [1],
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation; no aggression during the stay",
    why: "Restlessness in delirium is not hostility. Ask the question anyway, and record that there was no aggression on the ward."
   },
   orientation: {
    obs: "He gives the month, the day and the weekday correctly. After the orientation questions you ask him, as on admission, to say the days of the week backward from Sunday. He does it without an error, a little slowly.",
    ans: {
     0: ["木曜日《もくようび》 だ。 日付《ひづけ》 も わかる よ。 退院《たいいん》 の 日《ひ》 だ から な。", "It's Thursday. I know the date too. It's the day I leave hospital."],
     1: ["病院《びょういん》 だ。 内科《ないか》 の 病棟《びょうとう》 だろう。 田《た》んぼ じゃ ない よ。", "The hospital. The medical ward, I suppose. Not the rice paddy."],
     2: ["心《こころ》 の ほう の 先生《せんせい》 だ。 よく 来《き》て くれた な。", "You're the doctor for the mind. You came to see me often."]
    },
    need: ["Oriented to time, place, and person (×3)"],
    wrong: {
     "Disoriented to time": "He gives the date and the day correctly.",
     "Disoriented to place": "On admission he thought he was in the rice paddy. Today he names the hospital and the ward."
    },
    doc: "Oriented to time, place, and person (×3); attention intact (days of the week backward from Sunday, no errors; could not do it on admission)",
    why: "Inattention is the core sign of delirium, and the form has no field for it, so write it here. Retest it the same way as on admission: that is what shows the delirium has resolved."
   },
   memory: {
    ans: {
     0: ["ボール、 木《き》、 鍵《かぎ》。", "Ball, tree, key."],
     1: ["ボール、 木《き》…… それ と、 鍵《かぎ》 だ。", "Ball, tree... and key."],
     2: ["ご飯《はん》 と みそ汁《しる》 と 卵焼《たまごや》き。 全部《ぜんぶ》 食《た》べた。", "Rice, miso soup and rolled omelette. I ate it all."],
     3: ["一週間《いっしゅうかん》 前《まえ》 だ。 でも、 最初《さいしょ》 の 二晩《ふたばん》 の こと は、 ほとんど 覚《おぼ》えて ない ん だ。", "A week ago. But I hardly remember anything of the first two nights."],
     4: ["この 近《ちか》く の 村《むら》 だ。 ずっと そこ で 米《こめ》 を 作《つく》って きた。", "A village near here. I've grown rice there all my life."]
    },
    key: [3],
    need: [["Intact immediate, recent, and remote memory", "Impaired recent memory"]],
    wrong: {
     "Impaired immediate memory": "He repeats all three words at once.",
     "Impaired remote memory": "He gives his birthplace and his life's work easily."
    },
    doc: "Intact immediate (3/3), recent (3/3 recall, breakfast, admission date), and remote memory; patchy amnesia for the first two nights of the delirium; daughter reports occasional forgetting of names over the past year, memory assessment planned",
    why: "Intact is the better pick: today's recent memory is intact (3/3 recall, breakfast, the admission date), and the gap for the first two nights is amnesia for the delirium itself, so write it in the details. Impaired recent memory is accepted if that gap is what you mean, but say so. Amnesia for the worst of a delirium is expected. A normal bedside test today does not rule out a mild memory problem: the name forgetting Keiko noticed before admission is why a memory assessment is planned about three months after recovery."
   },
   insight: {
    ans: {
     0: ["おしっこ の 病気《びょうき》 と、 水《みず》 を 飲《の》まなかった せい で、 頭《あたま》 が 混乱《こんらん》 した ん だろう。 先生《せんせい》 から そう 聞《き》いた。", "The waterworks infection and not drinking water made my head get confused, I suppose. That's what the doctor told me."],
     1: ["ああ、 病気《びょうき》 だった。 体《からだ》 の 病気《びょうき》 から 頭《あたま》 が 混乱《こんらん》 した ん だ って、 教《おし》えて もらった。 もう 治《なお》った けど、 気《き》 を つけない と な。", "Yes, it was an illness. I was told my head got confused because of an illness in my body. It's better now, but I have to be careful."],
     2: ["ばい菌《きん》 の 薬《くすり》 は、 あと 二日《ふつか》 飲《の》む。 最後《さいご》 まで 飲《の》まない と、 また 悪《わる》く なる かも しれない から な。 血圧《けつあつ》 の 薬《くすり》 も、 今《いま》 まで どおり 飲《の》む。", "The germ medicine, two more days. If I don't finish it, it might come back. The blood-pressure medicine too, as before."],
     3: ["また おしっこ の 病気《びょうき》 が 悪《わる》く なって、 同《おな》じ こと に なる かも しれない。", "The infection could get worse again, and the same thing could happen."]
    },
    key: [0, 2],
    need: ["Good", "Grade 5: intellectual insight"],
    ok: ["Grade 6: true emotional insight"],
    wrong: {
     Poor: "Insight was absent on admission, as expected in delirium. Today he explains the cause, the treatment, and the risk of stopping early.",
     "Grade 3: blames others/external factors": "He names the infection and dehydration as the cause. In delirium a medical cause is the correct explanation, not blaming."
    },
    doc: "Good (grade 5): understands the confusion came from the infection and dehydration; knows to finish the antibiotic and continue the blood-pressure medicine",
    why: "In delirium the cause really is outside the mind, so naming the infection is good insight. Check that he also knows what would bring it back: infection, not drinking."
   },
   judgment: {
    ans: {
     0: ["近《ちか》く の 診療所《しんりょうじょ》 に 行《い》って、 もらう。 血圧《けつあつ》 の 薬《くすり》 は、 切《き》らした こと が ない よ。", "I'd go to the local clinic and get more. I've never run out of my blood-pressure medicine."],
     1: ["声《こえ》 は 聞《き》こえなかった けど、 また 変《へん》 な もの が 見《み》えたら、 すぐ 恵子《けいこ》 に 言《い》う。 恵子《けいこ》 が 医者《いしゃ》 に 連《つ》れて いって くれる。", "I didn't hear voices, but if I see strange things again, I'll tell Keiko straight away. She'll take me to a doctor."],
     2: ["大《おお》きな 声《こえ》 で 知《し》らせて、 すぐ 外《そと》 に 出《で》る。", "I'd call out loudly to warn people and get outside at once."],
     3: ["酒《さけ》 は もともと ほとんど 飲《の》まない。 しばらく は やめて おく よ。", "I hardly drink to begin with. I'll stay off it for a while."]
    },
    key: [1],
    need: ["Intact test judgment", "Intact social judgment"],
    ok: ["Good"],
    doc: "Good: intact test and social judgment; would tell his daughter at once if he saw things again; agrees to stay at her house for two weeks and not to drive until the clinic says he may",
    why: "Adapt the voices question to what he had: seeing things. His plan to tell Keiko, and accepting two weeks at her house, show sound judgment about his own safety."
   },
   sleep: {
    obs: "Sleep chart: 6 to 7 hours a night since the sleeping pill was stopped. No night restlessness since day 6. Up once a night to the toilet, with a nurse's check; settles quickly.",
    ans: {
     0: ["よく 眠《ねむ》れる よ。 六《ろく》、 七時間《しちじかん》 だ。 睡眠薬《すいみんやく》 なし で 眠《ねむ》れる なんて、 思《おも》わなかった。", "I sleep well. Six, seven hours. I never thought I could sleep without the sleeping pill."],
     1: ["トイレ に 一回《いっかい》 起《お》きる くらい だ。 すぐ また 寝《ね》る。", "Just once, for the toilet. I go straight back to sleep."],
     2: ["少《すこ》し 疲《つか》れて いる けど、 眠《ねむ》く は ない。", "I'm a little tired, but not sleepy."],
     3: ["いや、 ない ない。 まだ 少《すこ》し 疲《つか》れて いる くらい だ。", "No, no. If anything I'm still a little tired."]
    },
    key: [0],
    need: ["Good"],
    ok: ["Fair"],
    wrong: {
     "7–8 hours, uninterrupted": "The chart shows 6 to 7 hours, and he gets up once for the toilet.",
     "Frequent awakenings": "He wakes once for the toilet and settles quickly.",
     "Daytime sedation": "He is tired after an illness, not drowsy, and the sleeping pill has been stopped.",
     "Difficulty initiating sleep": "He falls asleep without the pill."
    },
    doc: "Good, 6–7 hours without the sleeping pill (sleep chart); up once a night to the toilet, settles quickly; no night restlessness since day 6; no daytime sedation; sleep habits taught",
    why: "Sleeping well without the pill is an important result: benzodiazepine-type sleeping pills raise the risk of delirium and falls in older people. Teach sleep habits (regular times, daylight and activity by day, little napping, no tea or coffee in the evening, a night light on the way to the toilet)."
   },
   adverse: {
    obs: "Chart: sleeping pill tapered and stopped over the week, no withdrawal signs. Evening restlessness up to day 5, managed without medicine. No antipsychotic. No restraint. No falls (low bed and sensor mat). Infection and dehydration treated; IV line removed.",
    ans: {
     0: ["いや、 特《とく》に ない。 点滴《てんてき》 も 取《と》れた し。", "No, nothing in particular. And the drip is out now."],
     1: ["けが は して ない。 転《ころ》んで も いない よ。", "I haven't been hurt. I haven't fallen either."]
    },
    key: [1],
    need: ["None"],
    wrong: {
     "Withdrawal symptoms": "The sleeping pill was tapered and stopped, and no withdrawal signs were seen. Write that in the details: stopping a benzodiazepine-type pill can cause withdrawal.",
     "Medical illness during admission": "The infection and dehydration were the reason for admission and the cause of the delirium, not a new illness during the stay. They go in the diagnosis.",
     "Agitation requiring restraint": "No restraint was used. The evening restlessness settled with non-drug measures.",
     "Fall or injury": "No falls. The low bed and the sensor mat were there to prevent them.",
     Sedation: "He is a little tired, not drowsy."
    },
    doc: "None; sleeping pill tapered and stopped, no withdrawal signs; evening restlessness up to day 5 managed without medicine (no antipsychotic); no restraint; no falls",
    why: "Restraint and sedating medicines can make delirium worse and cause falls. Record what was avoided and how: clock, calendar, glasses, family visits, daylight, the same nurses, a low bed and a sensor mat."
   },
   diagnosis: {
    ans: {
     0: ["せん妄《もう》、 か。 初《はじ》めて 聞《き》いた 言葉《ことば》 だ。 治《なお》った なら、 よかった。", "Delirium, eh. First time I've heard the word. If it's better, that's good."],
     1: ["だから 父《ちち》 は、 窓《まど》 に 子《こ》ども が いる って 言《い》った ん です ね。 認知症《にんちしょう》 に なった の か と 思《おも》って、 本当《ほんとう》 に 怖《こわ》かった です。", "So that's why my father said there were children at the window. I thought he had got dementia, and I was really frightened.", "Keiko (eldest daughter)"],
     2: ["そう 言《い》って もらう と、 気《き》 が 楽《らく》 だ。", "Hearing you say that takes a weight off my mind."]
    },
    key: [1],
    need: ["Other comorbid: ___"],
    wrong: {
     "Schizophrenia, first episode, currently in acute episode": "Sudden onset with a medical cause, disorientation and inattention, clearing as the infection was treated: that is delirium, not a primary psychosis.",
     "Major depressive disorder, recurrent": "No depressive symptoms were found."
    },
    doc: "Delirium due to urinary tract infection and dehydration, resolved; occasional forgetting of names over the past year per daughter, not assessed while delirious, memory assessment planned about three months after recovery",
    why: "The form has no pick for delirium, so write it under “Other comorbid”. Answer Keiko's fear honestly: delirium is not dementia, but it can be a sign that the brain is vulnerable, which is why the memory assessment is planned once he has fully recovered."
   },
   medications: {
    ans: {
     0: ["ばい菌《きん》 の 薬《くすり》 と、 血圧《けつあつ》 の 薬《くすり》 だ な。 眠《ねむ》り薬《ぐすり》 は、 もう ない。", "The germ medicine and the blood-pressure medicine. No more sleeping pill."],
     2: ["ばい菌《きん》 の 薬《くすり》 は、 あと 二日《ふつか》、 言《い》われた とおり に 飲《の》む。 血圧《けつあつ》 の 薬《くすり》 は、 今《いま》 まで どおり。 眠《ねむ》り薬《ぐすり》 は、 もう 飲《の》まない。 家《いえ》 に 残《のこ》って いる 分《ぶん》 は、 恵子《けいこ》 に 預《あず》ける。", "The germ medicine for two more days, the way I was told. The blood-pressure medicine as before. No more sleeping pill. The ones left at home, I'll give to Keiko to keep."],
     3: ["いつも の 薬局《やっきょく》 で もらいます。 二週間《にしゅうかん》 は、 私《わたし》 が 薬《くすり》 を 見《み》て おきます。", "We'll get them at our usual pharmacy. For two weeks I'll keep an eye on his medicines.", "Keiko (eldest daughter)"],
     4: ["ああ。 ばい菌《きん》 の 薬《くすり》 は、 元気《げんき》 に なって も 最後《さいご》 まで 飲《の》む ん だ な。", "Right. The germ medicine, I finish it even if I feel well."]
    },
    key: [2],
    need: ["Teach-back done, correct"],
    ok: ["Family supervises medication"],
    wrong: {
     "Teach-back incorrect, re-taught": "His teach-back was correct: finish the antibiotic, keep the blood-pressure medicine, no sleeping pill.",
     "Quetiapine ___ mg tab, ___": "No antipsychotic was needed. The delirium settled with treatment of the cause and non-drug measures.",
     "Olanzapine ___ mg tab, 1 tab at bedtime": "No antipsychotic was needed or prescribed."
    },
    doc: "Antibiotic tablets, two more days to finish the course; usual blood-pressure medicine, unchanged; sleeping pill stopped, not to be restarted, leftover supply at home handed to his daughter; no antipsychotic; teach-back correct; daughter keeps an eye on the medicines for two weeks",
    why: "The form has no picks for these medicines, so write them in the details. Stopping the sleeping pill is part of the treatment: make sure the old supply at home is not restarted, and tell the local clinic."
   },
   aftercare: {
    ans: {
     0: ["一週間後《いっしゅうかんご》 に、 近《ちか》く の 診療所《しんりょうじょ》 です ね。 血圧《けつあつ》 と、 おしっこ の 検査《けんさ》。 私《わたし》 が 車《くるま》 で 連《つ》れて いきます。 三《さん》か月《げつ》 ぐらい したら、 もの忘《わす》れ の 検査《けんさ》 も です ね。", "In one week, at the local clinic. His blood pressure and a urine test. I'll drive him. And in about three months, the memory check too.", "Keiko (eldest daughter)"],
     1: ["私《わたし》 です。 二週間《にしゅうかん》 は 私《わたし》 の 家《いえ》 に いて もらいます。 水《みず》 や お茶《ちゃ》 も、 こまめ に 飲《の》んで もらいます。", "Me. He'll stay at my house for two weeks. I'll make sure he drinks water and tea often.", "Keiko (eldest daughter)"],
     2: ["はい。 急《きゅう》 に 様子《ようす》 が おかしく なったり、 熱《ねつ》 が 出《で》たり、 水《みず》 を 飲《の》まなく なったり、 おしっこ の とき に 痛《いた》がったり、 何《なに》 か 見《み》える と 言《い》ったり したら、 その 日《ひ》 の うち に 病院《びょういん》 に 連《つ》れて いきます。 急《いそ》ぐ とき は ｜119番《ひゃくじゅうきゅうばん》 です ね。", "Yes. If he suddenly seems confused, gets a fever, stops drinking, has pain passing urine, or says he sees things, I'll take him to a doctor the same day. In an emergency, 119.", "Keiko (eldest daughter)"],
     3: ["わかった。 恵子《けいこ》 が 番号《ばんごう》 を 書《か》いて くれた。", "All right. Keiko wrote the number down for me."]
    },
    key: [2],
    need: ["Outpatient follow-up in 1–2 weeks", "Family oriented on warning signs", "Referred to ___"],
    ok: ["Follow-up appointment date and clinic given in writing", "Safety plan made with patient and family"],
    wrong: {
     "Discharge deferred: ___": "The delirium has resolved, the cause is treated, and the plan at Keiko's house is in place. A longer stay would add risk, not remove it.",
     "Transferred to ___ unit due to ___": "He goes to his daughter's house."
    },
    doc: "Two weeks at his daughter's house; local clinic in one week (blood pressure, urine recheck), daughter to take him; referred for a memory assessment about three months after recovery; drinks regularly; daughter oriented on warning signs (sudden confusion, fever, not drinking, pain passing urine, seeing things) → see a doctor the same day, 119 in an emergency; advised not to drive until the clinic says he may (follow local law and your hospital's policy); the local crisis line card given",
    why: "Delirium can come back with the next infection or a dry spell, and older people living alone are found late. Two weeks with Keiko, clear warning signs and a same-day rule cover that. Plan the return to his farmhouse with the clinic."
   }
  }
 }
]);
