/* Discharge practice cases, part 3: fictional patients for the discharge assessment.
   STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Hanashimashō (Japanese). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Japanese text; registers are
   f = polite form (です/ます), c = plain form. Patient and family answers are natural spoken Japanese with an English translation.
   Shape: window.PSYCH_DISCHARGE_CASES = [ { id, title, level, dx, decision: { discharge, why }, setting, chart: [..],
     fields: { <PSYCH_DISCHARGE field id>: {
       obs: 'what the learner observes (English)',
       ans: { questionIndex: [japanese, english, speaker?] },   // patient's answer to field.ask[questionIndex]; speaker only when it is a family member
       key: [questionIndex], need: [pick or [any-of picks]], ok: [extra acceptable picks], wrong: { pick: why },
       doc: 'model documentation line', why: 'teaching note', quote?: 'mood field only' } } } ]
   Ids in this part: ayaka (same id as the case simulation).
   Patients are fictional. This case names no products, ingredients or doses. Crisis line is the local crisis line. */
window.PSYCH_DISCHARGE_CASES = (window.PSYCH_DISCHARGE_CASES || []).concat([
 {
  id: "ayaka",
  title: "Urges down, medicines locked away, follow-up booked",
  level: "N3",
  dx: "Substance use disorder, severe (over-the-counter cough and cold medicine)",
  decision: { discharge: true, why: "Discharge today. Urges are much lower (from 9/10 to 2/10), the withdrawal symptoms settled by day 4, and she sleeps better. She denies suicidal thoughts, plan or intent; taking too much was unintentional, this time and once before. With her agreement her mother has locked the household medicines away, and both have been taught what to do if someone cannot be woken. An outpatient appointment is booked in 3 days, and she needs no discharge medicines. The first days after discharge are a high-risk time for relapse and for taking too much again, because tolerance falls during a stay in hospital. Going home without a booked appointment and without the family knowing what to do would be the real risk." },
  setting: "Ward, morning of planned discharge. Ayaka Nakamura, 20, university student with a part-time job, lives with her mother and her younger brother. Her mother, Mrs. Nakamura, is waiting downstairs.",
  chart: [
   "Admitted 6 days ago, brought by her mother, after taking far more over-the-counter cough and cold medicine than the label says. One earlier overdose, when a friend could not wake her and called 119. It began with a cold during exam stress, and she went on taking it to stay awake and to calm down. Wanted to stop and could not. Has nightmares and startle after a frightening event; does not want to give details.",
   "Admission MSE: tearful, anxious, strong urges to use, mild withdrawal symptoms (malaise, sweating, abdominal pain, poor sleep), no suicidal ideation, insight fair.",
   "Course: supportive care and monitoring; withdrawal symptoms settled by day 4; no medicine was started for the use disorder. Urges from 9/10 to 2/10. No restraint. No falls. Nightmares twice a week, improved from nightly. Sleep chart 6 to 7 hours.",
   "Plan: outpatient appointment in 3 days (Monday 10 a.m.), date and place in writing; no discharge medicines; she will not buy over-the-counter medicines herself and will ask the outpatient doctor or a pharmacist before taking anything for a cold or cough; with her agreement her mother keeps the household medicines locked away and has cleared the boxes from her room; warning signs and emergency steps taught to her and her mother; counselling for the nightmares when she is ready. The local crisis line card."
  ],
  fields: {
   behavior: {
    obs: "Clean sweater, hair in a ponytail, no makeup. Calm, a little shy. Eye contact good. Sits with her hands in her lap and asks whether her mother has arrived.",
    ans: {
     0: ["だいぶ よく なりました、 先生《せんせい》。 落《お》ち着《つ》いて きて、 早《はや》く 母《はは》 と 弟《おとうと》 に 会《あ》いたい です。", "Much better, doctor. I've calmed down, and I want to see my mother and my brother soon."],
     1: ["はい、 大丈夫《だいじょうぶ》 です。", "Yes, that's fine."]
    },
    need: ["Calm", "Cooperative", "Good eye contact", ["Well groomed", "Fairly groomed"]],
    wrong: {
     Guarded: "She is shy about the frightening event but open about her use and her plans.",
     Restless: "She was anxious and tearful on admission. She sits calmly now."
    },
    doc: "Calm, cooperative, good eye contact, fairly groomed",
    why: "Compare with admission: tearful and anxious then, calm now. A calm patient who is no longer in withdrawal is easier to hear."
   },
   mood: {
    obs: "Smiles when she speaks about her mother and her brother. Looks tense for a moment when asked about going back home.",
    ans: {
     0: ["落《お》ち着《つ》きました。 前《まえ》 は 何《なに》 も 感《かん》じない か、 怖《こわ》い か、 どっち か で…。 今《いま》 は、 もう 一度《いちど》 やり直《なお》したい って 思《おも》えます。", "Calmer. Before I felt nothing or I felt fear. Now I feel like starting over."],
     1: ["うれしい です。 でも、 不安《ふあん》 も あります。 試験《しけん》 の 時期《じき》 に なったら、 また 飲《の》みたく なる ん じゃ ない か って。", "Happy, and also nervous. I'm afraid that when exam time comes I'll want to take it again."],
     2: ["七《なな》 です。", "A seven."]
    },
    quote: "落《お》ち着《つ》きました。 前《まえ》 は 何《なに》 も 感《かん》じない か、 怖《こわ》い か、 どっち か で…。 今《いま》 は、 もう 一度《いちど》 やり直《なお》したい って 思《おも》えます。 (Calmer. Before I felt nothing or I felt fear. Now I feel like starting over.)",
    need: ["Euthymic mood", "Congruent affect", "Full range affect"],
    ok: ["Anxious mood", "Restricted affect"],
    wrong: {
     "Dysphoric mood": "That was her admission mood. She now says she feels calmer and hopeful.",
     "Flat affect": "She smiles and looks tense at fitting moments."
    },
    doc: "“落《お》ち着《つ》きました。 前《まえ》 は 何《なに》 も 感《かん》じない か、 怖《こわ》い か、 どっち か で…。 今《いま》 は、 もう 一度《いちど》 やり直《なお》したい って 思《おも》えます。” (Calmer. Before I felt nothing or I felt fear. Now I feel like starting over.) Mood 7/10. Euthymic mood with situational nervousness; congruent, full range affect",
    why: "Her nervousness about leaving is realistic. Naming it is part of the relapse plan: triggers such as exam stress, and the people and places linked to use."
   },
   process: {
    obs: "Organized and brief. Pauses when the frightening event is mentioned and chooses not to give detail.",
    ans: {
     0: ["受験《じゅけん》 の とき に 風邪《かぜ》 を ひいて、 市販《しはん》 の 咳止《せきど》め を 飲《の》み始《はじ》めました。 それ から、 試験《しけん》 の 前《まえ》 に 起《お》きて いる ため とか、 落《お》ち着《つ》く ため に 飲《の》み続《つづ》けて…。 やめたくて も、 やめられません でした。 前《まえ》 に 一度《いちど》、 説明書《せつめいしょ》 より ずっと 多《おお》く 飲《の》んで しまって、 友達《ともだち》 が 起《お》こして も 起《お》きなくて、 救急車《きゅうきゅうしゃ》 を 呼《よ》んで くれた こと が あります。 今回《こんかい》 も 飲《の》みすぎて しまって、 母《はは》 と 病院《びょういん》 に 来《き》ました。 今《いま》 は、 飲《の》みたい 気持《きも》ち が だいぶ 減《へ》りました。", "I caught a cold during entrance exams and started taking over-the-counter cough medicine. After that I kept taking it to stay awake before exams and to calm down... I wanted to stop, but I couldn't. Once before, I took far more than the leaflet says; my friend couldn't wake me, so she called an ambulance. This time I took too much again, and I came to the hospital with my mother. Now the urge to take it has gone down a lot."],
     1: ["週末《しゅうまつ》 は 家《いえ》 で 母《はは》 と 弟《おとうと》 と 過《す》ごして、 月曜《げつよう》 に 外来《がいらい》 に 行《い》きます。 それ から、 少《すこ》し ずつ 大学《だいがく》 と バイト に 戻《もど》りたい です。", "Stay home with my mom and my brother this weekend, go to the outpatient clinic on Monday, and then go back to university and my part-time job little by little."]
    },
    need: ["Goal-directed", "Coherent and relevant"],
    doc: "Goal-directed, coherent and relevant; declines detail about the frightening event",
    why: "A clear timeline and a plan with dates. Not giving detail about the frightening event is her choice. Respect it and do not push."
   },
   positive: {
    obs: "Not responding to anything. No startle during the interview.",
    ans: {
     0: ["いいえ。", "No."],
     1: ["いいえ。", "No."],
     2: ["いいえ。 悪《わる》い 夢《ゆめ》 は 見《み》ます けど、 それ は 見《み》える ん じゃ なくて、 夢《ゆめ》 なので。", "No. I do have nightmares, but that isn't seeing things. They're dreams."],
     3: ["誰《だれ》か に 狙《ねら》われて いる と は 思《おも》いません。 夜《よる》 一人《ひとり》 で 出《で》かける の は 怖《こわ》い です けど、 あの とき の こと が ある から だ と 思《おも》います。", "I don't think anyone is after me. I'm afraid to go out alone at night, but I think that's because of what happened back then."]
    },
    key: [2, 3],
    need: ["No hallucinations elicited", "Not responding to internal stimuli"],
    wrong: {
     "Residual persecutory ideas, less intense": "Her fear is linked to the frightening event and she knows it. She does not believe she is being targeted."
    },
    doc: "No hallucinations elicited; not responding to internal stimuli; no delusions; fear of going out alone at night linked to the past event, with insight",
    why: "Ask the questions and listen for a trauma-related fear. Nightmares and hypervigilance are possible PTSD symptoms, not psychosis."
   },
   negative: {
    obs: "Ward notes: joins groups, studies for her classes in the day room, chats with other patients, bathes daily.",
    ans: {
     0: ["はい、 手芸《しゅげい》 の グループ が 楽《たの》しかった です。", "Yes, I liked the crafts group."],
     1: ["はい、 同《おな》じ くらい の 年《とし》 の 人《ひと》 と、 よく 話《はな》して います。", "Yes, I often talk with someone about my age."],
     2: ["はい、 前《まえ》 より あります。", "Yes, more than before."],
     3: ["はい、 毎日《まいにち》 です。", "Yes, every day."]
    },
    need: ["None noted"],
    wrong: {
     Anhedonia: "She enjoys the crafts group and talks warmly about her family and university. Interest is back.",
     "Poor self-care": "She bathes and dresses daily."
    },
    doc: "None noted",
    why: "Interest, social contact, and self-care are all back."
   },
   suicide: {
    ans: {
     0: ["いいえ。 あれ は 死《し》のう と した ん じゃ なくて、 飲《の》みすぎて しまった だけ です。", "No. The overdose wasn't to take my life. I took too much."],
     1: ["いいえ、 何《なに》 も ない です。", "No, none."],
     2: ["母《はは》 に 話《はな》して、 外来《がいらい》 か、 相談《そうだん》 の 窓口《まどぐち》 に 電話《でんわ》 します。 番号《ばんごう》 は スマホ に 入《い》れました。", "I tell my mom and I call the outpatient clinic or the crisis line. I've put the number in my phone."]
    },
    key: [0, 2],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    doc: "Denies suicidal ideation, plan, or intent; taking too much was unintentional, this time and once before (over-the-counter cough and cold medicine); reasons for living (her mother, her brother, finishing university); will tell her mother and call the outpatient clinic or the local crisis line",
    why: "Ask directly whether the overdose was an attempt. An unintentional overdose and a suicide attempt need different plans. Write what she said in her own words."
   },
   homicide: {
    ans: {
     0: ["いいえ。", "No."],
     1: ["あの とき の こと は、 今《いま》 でも 許《ゆる》せない です。 でも、 仕返《しかえ》し なんて 考《かんが》えて いません。 そっと して おいて ほしい だけ です。", "I still can't forgive what happened back then. But I'm not thinking of getting back at anyone. I just want to be left alone."]
    },
    key: [1],
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation; resentment about the past event, no intent or plan",
    why: "Anger or resentment about a past event that hurt her is expected. Ask about intent, and do not ask for details of the event."
   },
   orientation: {
    ans: {
     0: ["金曜日《きんようび》 です。 十一月《じゅういちがつ》 の 半《なか》ば。", "It's Friday, the middle of November."],
     1: ["病院《びょういん》 です。", "In the hospital."],
     2: ["先生《せんせい》 です。", "You are the doctor."]
    },
    need: ["Oriented to time, place, and person (×3)"],
    doc: "Oriented to time, place, and person (×3)",
    why: "Correct day, place, and person."
   },
   memory: {
    ans: {
     0: ["ボール、 木《き》、 鍵《かぎ》。", "Ball, tree, key."],
     1: ["ボール、 木《き》、 鍵《かぎ》。", "Ball, tree, key."],
     2: ["パン と ヨーグルト と、 紅茶《こうちゃ》 です。", "Bread, yogurt, and tea."],
     3: ["六日《むいか》 前《まえ》 です。", "Six days ago."],
     4: ["千葉《ちば》 です。 生《う》まれ も 育《そだ》ち も 千葉《ちば》 です。", "In Chiba. I was born and raised there."]
    },
    need: ["Intact immediate, recent, and remote memory"],
    doc: "Intact immediate (3/3), recent (3/3 recall, breakfast, admission date), and remote memory",
    why: "Memory is intact."
   },
   insight: {
    ans: {
     0: ["飲《の》みすぎて 意識《いしき》 が なく なって、 自分《じぶん》 で は もう やめられなかった から です。", "Because I took too much and passed out, and I couldn't stop on my own anymore."],
     1: ["はい、 病気《びょうき》 です。 母《はは》 は 意志《いし》 が 弱《よわ》い から だ って 言《い》います けど、 そう じゃ ない って、 もう わかりました。", "Yes, it's an illness. My mom says it's because my will is weak, but I understand now that it isn't."],
     2: ["今《いま》 は 飲《の》む 薬《くすり》 は ない けど、 外来《がいらい》 に は 必《かなら》ず 行《い》きます。 調子《ちょうし》 が よくて も。 一人《ひとり》 で 頑張《がんば》ろう と したら、 また 同《おな》じ こと に なる から。", "I have no medicine to take now, but I'll definitely go to the outpatient clinic. Even if I feel fine. If I try to do it on my own, I'll end up the same again."],
     3: ["また 飲《の》み始《はじ》めたら、 死《し》んで しまう かも しれません。 今《いま》 は 体《からだ》 が 慣《な》れて いない ので、 前《まえ》 と 同《おな》じ 量《りょう》 でも 危《あぶ》ない って 言《い》われました。", "If I started taking it again, I could die. They told me my body isn't used to it now, so even the amount I used to take would be dangerous."]
    },
    key: [1, 2, 3],
    need: ["Good", "Grade 5: intellectual insight"],
    ok: ["Fair", "Grade 6: true emotional insight"],
    wrong: {
     Poor: "She names the illness, the need for follow-up, and the overdose risk after losing tolerance.",
     "Grade 3: blames others/external factors": "She does not blame exam stress or other people. She links her use to a disorder."
    },
    doc: "Good (grade 5): accepts the use disorder as an illness, understands that follow-up prevents relapse and that losing tolerance raises overdose risk",
    why: "Her answer about losing tolerance is the key safety fact. The time just after a stay in hospital is a high-risk time for taking too much again."
   },
   judgment: {
    ans: {
     0: ["今《いま》 は 飲《の》む 薬《くすり》 は ない ので…。 風邪《かぜ》 を ひいて も、 自分《じぶん》 で 市販薬《しはんやく》 は 買《か》いません。 先《さき》 に 外来《がいらい》 の 先生《せんせい》 か、 薬剤師《やくざいし》さん に 聞《き》きます。", "I have no medicine to take now... Even if I catch a cold, I won't buy over-the-counter medicine myself. I'll ask the outpatient doctor or a pharmacist first."],
     1: ["声《こえ》 は 聞《き》こえません けど、 飲《の》みたい 気持《きも》ち が 出《で》て きたら、 母《はは》 に 言《い》います。", "I don't hear voices, but if the urge to take it comes, I tell my mom."],
     2: ["すぐ 外《そと》 に 出《で》て、 誰《だれ》か に 知《し》らせます。", "I'd leave quickly and tell someone."],
     3: ["断《ことわ》って、 帰《かえ》ります。 仲《なか》 の いい 友達《ともだち》 に は この こと を 話《はな》して ある ので、 味方《みかた》 に なって くれます。", "I'd say no and leave. I've told my close friend about this, so she will back me up."]
    },
    key: [0, 3],
    need: ["Intact test judgment", "Intact social judgment"],
    ok: ["Good"],
    doc: "Good: intact test and social judgment; specific plan for colds and coughs (asks the doctor or a pharmacist first) and for being offered medicine or alcohol (refuses and leaves; her friend knows and backs her up)",
    why: "Her plan for colds and for being offered something is concrete. Ask again at the outpatient appointment, because the first days at home are a high-risk time."
   },
   sleep: {
    obs: "Sleep chart: 6 to 7 hours, with brief waking on two nights, matching nightmares.",
    ans: {
     0: ["よく なりました。 六《ろく》、 七時間《しちじかん》 くらい です。", "Better. Six, seven hours."],
     1: ["週《しゅう》 に 二回《にかい》 くらい、 悪《わる》い 夢《ゆめ》 で 目《め》 が 覚《さ》めて、 なかなか また 眠《ねむ》れない です。", "Twice a week I wake from a nightmare and have trouble going back to sleep."],
     2: ["少《すこ》し だけ です。", "A little, that's all."],
     3: ["いいえ。", "No."]
    },
    key: [1],
    need: ["Fair", "Frequent awakenings"],
    ok: ["Difficulty initiating sleep"],
    wrong: {
     Good: "Nightmares still wake her twice a week. Fair is the honest rating.",
     "7–8 hours, uninterrupted": "The chart shows awakenings on two nights.",
     "Reduced need for sleep": "She does not feel energetic. She is tired."
    },
    doc: "Fair, 6–7 hours (sleep chart); wakes about twice a week from trauma-related nightmares and has trouble going back to sleep (improved from nightly)",
    why: "Poor sleep is a relapse trigger. Nightmares are a target for later trauma-focused counselling. Tell the outpatient doctor."
   },
   adverse: {
    obs: "Chart: mild withdrawal symptoms at admission (malaise, sweating, abdominal pain, poor sleep), settled by day 4 with supportive care and monitoring. No restraint, no falls, no sedation, no medical illness.",
    ans: {
     0: ["特《とく》に ない です。 最初《さいしょ》 の 何日《なんにち》 か は 気分《きぶん》 が 沈《しず》んで いました けど、 今《いま》 は 大丈夫《だいじょうぶ》 です。", "Nothing. The first few days I felt low, but not anymore."],
     1: ["いいえ。 でも、 最初《さいしょ》 の 何日《なんにち》 か は、 体《からだ》 が だるくて、 汗《あせ》 が 出《で》て、 眠《ねむ》れなかった です。 薬《くすり》 が 切《き》れた せい だ って 言《い》われました。", "No. But for the first few days I felt heavy and sweaty and couldn't sleep. They told me it was the medicine wearing off."]
    },
    key: [1],
    need: ["Withdrawal symptoms"],
    wrong: {
     None: "The chart records withdrawal symptoms on admission. Document them, even though they have settled.",
     Sedation: "She takes no medicine that could sedate her. Her slight daytime sleepiness follows the nights broken by nightmares."
    },
    doc: "Mild withdrawal symptoms on admission (malaise, sweating, abdominal pain, poor sleep), settled by day 4 with supportive care and monitoring; no sedation, no restraint, no falls",
    why: "Document withdrawal and how it ended. Her memory of how bad it felt can also help her stay away from the medicine."
   },
   diagnosis: {
    ans: {
     0: ["はい。 市販薬《しはんやく》 の 依存症《いぞんしょう》 です よね。 治療《ちりょう》 できる と 聞《き》いて、 少《すこ》し 安心《あんしん》 しました。", "Yes. Addiction to over-the-counter medicine, right? I'm a little relieved to hear it can be treated."],
     1: ["はい、 脳《のう》 が 慣《な》れて、 もっと 欲《ほ》しく なる ん です よね。", "Yes, the brain gets used to it and wants more, right?"],
     2: ["ありがとう ございます。 母《はは》 は、 意志《いし》 が 弱《よわ》い から だ、 私《わたし》 の せい だ って 言《い》う ん です。 母《はは》 に も、 この 話《はなし》 を 聞《き》いて ほしい です。", "Thank you. My mom says it's because my will is weak, and that it's my fault. I want her to hear this."]
    },
    need: ["Other comorbid: ___"],
    wrong: {
     "Methamphetamine-induced psychotic disorder, with ___ use disorder": "This case involves over-the-counter cough and cold medicine, not methamphetamine. No psychosis was found."
    },
    doc: "Substance use disorder, severe (over-the-counter cough and cold medicine), began during exam stress; took far too much before this admission and once before (ambulance), both unintentional; no discharge medicines; possible PTSD symptoms (nightmares, startle, avoidance), full assessment deferred to outpatient care",
    why: "The form has no pick for this use disorder, so write it under “Other comorbid”. Name the PTSD symptoms too. Arranging a talk with her mother could help the family see the disorder as an illness, not weakness of will."
   },
   medications: {
    ans: {
     0: ["はい。 家《いえ》 で 飲《の》む 薬《くすり》 は、 ない ん です よね。", "Yes. There's no medicine for me to take at home, right?"],
     2: ["飲《の》む 薬《くすり》 は ありません。 市販《しはん》 の 薬《くすり》 は、 一人《ひとり》 で 買《か》いません。 風邪《かぜ》 や 咳《せき》 の とき は、 先《さき》 に 外来《がいらい》 の 先生《せんせい》 か 薬剤師《やくざいし》さん に 聞《き》きます。 家《いえ》 の 薬箱《くすりばこ》 は、 母《はは》 が 預《あず》かって くれて います。", "There's no medicine to take. I won't buy over-the-counter medicine on my own. When I have a cold or a cough, I ask the outpatient doctor or a pharmacist first. My mom is keeping the medicine box at home."],
     3: ["今《いま》 は、 もらう 薬《くすり》 は ない です。 外来《がいらい》 の 日《ひ》 と 場所《ばしょ》 は、 母《はは》 と 一緒《いっしょ》 に 確認《かくにん》 しました。", "There's no medicine for me to get right now. I checked the date and place of the outpatient appointment with my mom."],
     4: ["はい。 調子《ちょうし》 が よくて も、 外来《がいらい》 は やめません。", "Yes. Even if I feel fine, I won't stop going to the clinic."]
    },
    key: [2],
    need: ["Family supervises medication", "Teach-back done, correct"],
    wrong: {
     "Teach-back incorrect, re-taught": "Her teach-back was correct: no medicine to take, no over-the-counter medicines bought alone, ask first, and her mother keeps the medicine box.",
     "Olanzapine ___ mg tab, 1 tab at bedtime": "No antipsychotic was ordered. She has no psychosis, and she goes home with no medicines."
    },
    doc: "No discharge medicines; no medicine was started for the use disorder; teach-back correct (no medicine to take; will not buy over-the-counter medicines alone; will ask the outpatient doctor or a pharmacist first; mother keeps the medicine box); with her agreement, mother keeps the household medicines locked away and has cleared the boxes from her room; emergency steps taught to patient and mother (call 119, turn her on her side, stay with her, show the paramedics the box)",
    why: "Teach-back covers what to do and what not to do. Locked medicines and emergency teaching matter as much as any prescription. With no drug to write, the plan goes in the documentation line."
   },
   aftercare: {
    ans: {
     0: ["はい。 三日後《みっかご》、 月曜《げつよう》 の 十時《じゅうじ》 です。 母《はは》 が 一緒《いっしょ》 に 行《い》って くれます。", "Yes. In three days, Monday at ten. My mom is coming with me."],
     1: ["私《わたし》 が 見《み》ます。 もしもの とき の こと も、 ここ で 教《おし》えて いただきました。 家《いえ》 の 薬《くすり》 は、 鍵《かぎ》 の かかる 場所《ばしょ》 に しまいました。 娘《むすめ》 の 部屋《へや》 に あった 箱《はこ》 も 片付《かたづ》けました。", "I will. They also taught me here what to do in an emergency. I've put the medicines at home in a place that locks. I've also cleared away the boxes that were in my daughter's room.", "Mrs. Nakamura (mother)"],
     2: ["はい。 飲《の》みたい 気持《きも》ち が すごく 強《つよ》く なったり、 眠《ねむ》れなく なったり、 自分《じぶん》 を 傷《きず》つけたい と 思《おも》ったり したら、 外来《がいらい》 か 相談《そうだん》 の 窓口《まどぐち》 に 電話《でんわ》 します。", "Yes. If the urges come back very strong, if I stop sleeping, or if I think of hurting myself, I call the outpatient clinic or the crisis line."],
     3: ["スマホ に 登録《とうろく》 しました。", "I saved it in my phone."]
    },
    key: [1],
    need: ["Referred to ___", "Follow-up appointment date and clinic given in writing", "Family oriented on warning signs"],
    ok: ["Safety plan made with patient and family"],
    wrong: {
     "Outpatient follow-up in 1–2 weeks": "Too long. Her appointment is in 3 days, because the first days after discharge are a high-risk time.",
     "Discharge deferred: ___": "She meets the criteria for discharge today, with a booked appointment, the medicines locked away, and her mother taught what to do."
    },
    doc: "Outpatient appointment Monday 10 a.m. (3 days), date and place given in writing; no discharge medicines; with her agreement, household medicines locked away by her mother and boxes cleared from her room; patient and mother oriented on relapse warning signs and on what to do if someone cannot be woken (call 119, turn on the side, stay, show the paramedics the box); referred for counselling for the nightmares when ready; the local crisis line card given",
    why: "The first days after discharge are a high-risk time for relapse and for taking too much again, because tolerance falls during a stay in hospital. Book the appointment soon and make sure the family knows what to do. Her mother is a strong support, so her view of the disorder as weakness of will matters."
   }
  }
 }
]);
