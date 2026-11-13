/* Discharge practice cases, part 2: fictional patients for the discharge assessment.
   STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Hanashimashō (Japanese). Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Japanese text; registers are
   f = polite form (です/ます), c = plain form. Patient and family answers are natural spoken Japanese with an English translation.
   Shape: window.PSYCH_DISCHARGE_CASES = [ { id, title, level, dx, decision: { discharge, why }, setting, chart: [..],
     fields: { <PSYCH_DISCHARGE field id>: {
       obs: 'what the learner observes (English)',
       ans: { questionIndex: [japanese, english, speaker?] },   // patient's answer to field.ask[questionIndex]; speaker only when it is a family member
       key: [questionIndex], need: [pick or [any-of picks]], ok: [extra acceptable picks], wrong: { pick: why },
       doc: 'model documentation line', why: 'teaching note', quote?: 'mood field only' } } } ]
   Ids in this part: ren, tetsuo (same ids as the case simulations).
   Patients are fictional; doses are teaching examples only. Crisis line is the local crisis line. */
window.PSYCH_DISCHARGE_CASES = (window.PSYCH_DISCHARGE_CASES || []).concat([
 {
  id: "ren",
  title: "Still high, refusing labs: not ready",
  level: "N3",
  dx: "Bipolar I disorder, current episode manic",
  decision: { discharge: false, why: "Defer discharge. Day 6: he is still pressured and grandiose, sleeps 4 to 5 hours, and says he will stop lithium at home. He refuses the blood draw, so the lithium level is unknown. Insight is poor and there is no plan for the methamphetamine use. His girlfriend does not feel safe taking him home. Explain the reasons to him, keep working on the alliance, and reassess in 48 to 72 hours. He has no current plan to harm himself or others." },
  setting: "Ward, morning, day 6. Ren, 24, DJ and part-time driver, wants to leave today for a show. His girlfriend Misaki is in the lounge.",
  chart: [
   "Admitted 6 days ago, brought by Misaki after 5 nights without sleep. “神様《かみさま》 に 選《えら》ばれた” to bring people together through music. Spent about 400,000 yen on DJ equipment. Pressured speech, flight of ideas. Urine drug screen positive for methamphetamine (“シャブ” twice that week), which clouded the picture.",
   "Admission MSE: restless, overfamiliar, euphoric and irritable, flight of ideas, grandiose delusions, insight grade 1.",
   "Course: lithium 300 mg three times a day (teaching example) and a short course of olanzapine at night. Restrained once on the night of admission for agitation. No restraint since. Sleep chart 4 to 5 hours. Fine hand tremor. Lithium level pending: he refused the draw this morning.",
   "No prior treatment. He wants discharge today. Misaki says she is afraid he will stop the medicine and go back to the clubs."
  ],
  fields: {
   behavior: {
    obs: "Stands, sits, and stands again. Clothes rumpled, unshaven. Wears his DJ cap and headphones around his neck. Jokes and moves close to you. Snaps when you mention the blood test.",
    ans: {
     0: ["最高《さいこう》 です よ、 先生《せんせい》！ もう いつ でも 出《で》られます。 土曜《どよう》 に ライブ が ある から、 絶対《ぜったい》 外《はず》せない ん です よ。", "Great, doctor! Ready to get out of here. I have a show Saturday and I can't miss it."],
     1: ["いい です けど、 早《はや》め に お願《ねが》いします。 時間《じかん》 ない ので。", "Yes, but quick, I'm running late."]
    },
    need: ["Restless", "Overfamiliar", "Irritable"],
    wrong: {
     Calm: "He cannot stay seated and is easily provoked.",
     Cooperative: "He talks with you but refuses the blood draw and tries to end the interview. Do not call that cooperative.",
     "Well groomed": "His clothes are rumpled and he has not shaved. Look at what is in front of you."
    },
    doc: "Restless, overfamiliar, irritable when challenged (about the blood draw), rumpled grooming, wears headphones and cap",
    why: "Compare with admission: restless and overfamiliar then, and still so. A patient who is “ready to go” is not the same as one who is ready."
   },
   mood: {
    obs: "Broad smile, laughs loudly. Within a minute his face darkens when you refuse his request, then he laughs again.",
    ans: {
     0: ["最高《さいこう》 です。 こんなに 気分《きぶん》 が いい の は 初《はじ》めて。 今《いま》 が 絶好調《ぜっこうちょう》 です。", "Excellent, I've never felt this good. I'm at my best."],
     1: ["うれしい です。 まあ、 出《だ》して もらえない から、 ちょっと ムカついて ます けど。 でも、 うれしい。", "Happy. Well, and a little angry because they won't let me out. But happy."],
     2: ["十《じゅう》。 いや、 十一《じゅういち》。", "A ten. An eleven."]
    },
    quote: "最高《さいこう》 です。 こんなに 気分《きぶん》 が いい の は 初《はじ》めて。 今《いま》 が 絶好調《ぜっこうちょう》 です。 (Excellent, I've never felt this good. I'm at my best.)",
    need: ["Euphoric mood", "Labile affect"],
    wrong: {
     "Euthymic mood": "A ten or eleven out of ten with grand plans is not euthymia.",
     "Mildly elevated mood": "Mildly elevated was the target for discharge. He is well above that: mood 10 to 11/10 and swings to anger within minutes.",
     "Congruent affect": "His affect swings between joy and anger within minutes. Labile is the better word."
    },
    doc: "“最高《さいこう》 です。 こんなに 気分《きぶん》 が いい の は 初《はじ》めて。 今《いま》 が 絶好調《ぜっこうちょう》 です。” (Excellent, I've never felt this good. I'm at my best.) Mood 10 to 11/10. Euphoric mood with irritable flashes; labile affect",
    why: "Quote the mood and give a number. Note the lability you see. Many patients on day 6 are better than on admission, but better is not well."
   },
   process: {
    obs: "Jumps from his driving job to DJing to Misaki to his new equipment, each idea set off by the last. Needs to be redirected to answer.",
    ans: {
     0: ["えっと、 運転《うんてん》 の バイト して て、 そこ から DJ で、 美咲《みさき》 が ビビっちゃって、 でも あいつ は わかって ない ん だ よ、 新《あたら》しい 機材《きざい》 が あって、 ラスベガス みたい な 音《おと》 が 出《で》る システム で。 で、 ここ に 来《き》て、 まあ、 今《いま》 ここ に いる って わけ。", "Well I was working, you know, driving part-time, and from there the DJ, and Misaki got scared, but she doesn't understand, I have new equipment, a system that sounds like Las Vegas. And then I came here and well, here I am."],
     1: ["ここ を 出《で》て、 土曜《どよう》 に 回《まわ》して、 二《に》か月《げつ》 くらい で 自分《じぶん》 の スタジオ を 開《ひら》く。 名前《なまえ》 も もう 決《き》まって る し。 ローン も 調《しら》べて る ん だ。", "Get out, play Saturday, and in about two months open my own studio. I already have the name and everything. I'm looking into a loan."]
    },
    need: ["Flight of ideas"],
    ok: ["Some tangentiality"],
    wrong: {
     "Goal-directed": "He has big goals, but the story jumps and needs redirection. That is not goal-directed.",
     "Coherent and relevant": "The answers drift from the question."
    },
    doc: "Flight of ideas, redirectable with effort; speech pressured; plans to open a studio on a loan",
    why: "Listen to the shape of the story more than the facts. Plans for a loan and a studio, right after spending 400,000 yen, also show poor judgment."
   },
   positive: {
    obs: "Not seen responding to voices. Talks about his “mission” with strong conviction.",
    ans: {
     0: ["いや、 声《こえ》 は ない です。 頭《あたま》 の 中《なか》 で ビート が 鳴《な》って る だけ。 DJ なら 普通《ふつう》 です よ。", "No, not voices. Just the beats in my head, but that's normal for a DJ."],
     1: ["ない です。", "No."],
     2: ["ない です。", "No."],
     3: ["いや、 逆《ぎゃく》 です よ。 みんな 俺《おれ》 の こと 好《す》き だ し。", "No, on the contrary, people love me."],
     4: ["考《かんが》え は 変《か》わって ない です。 神様《かみさま》 に 選《えら》ばれた ん です。 お金《かね》 は ちょっと 使《つか》い過《す》ぎた かも だけど、 使命《しめい》 は 本物《ほんもの》 です。", "I still think the same: God chose me. Maybe I overdid it with the money, but the mission part is real."]
    },
    key: [4],
    need: ["No hallucinations elicited", "Not responding to internal stimuli", "Delusions persist"],
    wrong: {
     "Grandiose ideas, less intense": "He holds the idea with full conviction (“使命《しめい》 は 本物《ほんもの》”). He only concedes the spending.",
     "Delusions no longer held": "He still believes God chose him for a mission."
    },
    doc: "No hallucinations elicited; not responding to internal stimuli; grandiose delusion persists (“神様《かみさま》 に 選《えら》ばれた”, a mission through music) with full conviction; concedes only the overspending",
    why: "Ask about the admission belief by name. A religious mission is part of many cultures. What matters is the conviction, the link with sleeplessness and spending, and that it does not bend."
   },
   negative: {
    obs: "No loss of interest, speech, or self-care. He talks and moves a lot.",
    ans: {
     0: ["うん、 全部《ぜんぶ》 楽《たの》しい。 何《なん》 でも やりたい。", "Yes, I like everything, I want to do everything."],
     1: ["はい、 みんな と。 もう 友達《ともだち》 できた し、 食堂《しょくどう》 で 音楽《おんがく》 も かけました よ。", "Yes, with everyone. I already made friends here, I even played music in the dining room."],
     2: ["めちゃくちゃ あります。", "Yes, tons of motivation."]
    },
    need: ["None noted"],
    doc: "None noted; drive and social contact increased (part of the manic picture)",
    why: "Negative symptoms are absent. In mania, increased drive is a positive sign of the episode."
   },
   suicide: {
    ans: {
     0: ["いや、 全然《ぜんぜん》。 無敵《むてき》 って 感《かん》じ。", "No, not at all. I feel invincible."],
     1: ["ない です。", "No."],
     2: ["まあ 必要《ひつよう》 ない けど、 美咲《みさき》 に 電話《でんわ》 します。", "Well I won't need to, but I would call Misaki."]
    },
    key: [0],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    doc: "Denies suicidal ideation, plan, or intent; feels “invincible” (a risk of reckless behavior, not of self-harm); would call girlfriend",
    why: "Mania does not remove suicide risk, because mixed states and the crash after mania can bring it on. Ask directly. His “invincible” feeling matters for driving and substance use."
   },
   homicide: {
    ans: {
     0: ["ない です、 一度《いちど》 も。", "No, never."],
     1: ["美咲《みさき》 に は ちょっと。 金《かね》 の こと で 怒《おこ》られた から。 あと、 出《だ》して くれない 先生《せんせい》たち に も。 でも、 何《なに》 も しません よ。", "With Misaki a little, because she scolded me about the money. And with the doctors for not letting me leave. But I wouldn't do anything to them."]
    },
    key: [1],
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation; irritable toward girlfriend and staff when limits are set, no threats or intent",
    why: "Irritability is not homicidal ideation. Name the people he is angry with and ask what he would do."
   },
   orientation: {
    ans: {
     0: ["木曜《もくよう》… いや、 金曜《きんよう》。 どっち でも いい や、 土曜《どよう》 が ライブ だ し。", "It's Thursday... no, Friday. Whatever, the show is Saturday."],
     1: ["精神科《せいしんか》 の 病院《びょういん》。", "In the psychiatric hospital."],
     2: ["先生《せんせい》 でしょ。 俺《おれ》 を 帰《かえ》して くれない 先生《せんせい》。", "You're the doctor, the one who won't let me go."]
    },
    need: ["Oriented to time, place, and person (×3)"],
    doc: "Oriented to time, place, and person (×3); self-corrected the day",
    why: "A self-corrected day is still oriented. Distractibility shows more in his attention than in his orientation."
   },
   memory: {
    ans: {
     0: ["ボール、 木《き》、 鍵《かぎ》。 楽勝《らくしょう》。", "Ball, tree, key. Easy."],
     1: ["ボール、 木《き》、 鍵《かぎ》。 もう いい？ 次《つぎ》 は？", "Ball, tree, key. Done? What's next?"],
     2: ["おにぎり と オレンジジュース、 だった かな。", "A rice ball and orange juice, I think."],
     3: ["六日《むいか》 前《まえ》、 土曜日《どようび》。", "Six days ago, on a Saturday."],
     4: ["この 町《まち》 です よ。 ここ の 市民病院《しみんびょういん》 で。", "Here in this town, at the city hospital."]
    },
    need: ["Intact immediate, recent, and remote memory"],
    doc: "Intact immediate, recent, and remote memory; distractible but recalls 3/3",
    why: "Distractibility can make memory tests look worse than they are. Here the recall is intact."
   },
   insight: {
    ans: {
     0: ["美咲《みさき》 が ビビった から。 すげえ 疲《つか》れて て、 ストレス も あった、 それ だけ。 まあ、 シャブ も よく なかった けど。", "Because Misaki got scared. I was very tired and stressed, that's all. And well, the meth didn't help."],
     1: ["いや、 病気《びょうき》 じゃ ない です。 テンション 上《あ》がって、 あんまり 寝《ね》なかった だけ。 誰《だれ》 でも ある でしょ。", "No, I'm not sick. I got excited and slept little. That happens to anyone."],
     2: ["いや。 調子《ちょうし》 よければ 飲《の》みません。 手《て》 が 震《ふる》える し。", "No. If I feel good I won't take it. It makes my hands shake."],
     3: ["何《なに》 も。 今《いま》 まで で 一番《いちばん》 調子《ちょうし》 いい ん です から。", "Nothing. I feel better than ever."]
    },
    key: [1, 2],
    need: ["Poor", "Grade 3: blames others/external factors"],
    wrong: {
     Fair: "He denies being ill and says he will stop lithium. Fair would be too generous.",
     "Grade 5: intellectual insight": "He does not accept the illness or the need for medicine.",
     "Grade 1: complete denial": "He grants that the meth and lack of sleep played a part. That is slight awareness with external blame."
    },
    doc: "Poor (grade 3): attributes the episode to stress, tiredness, and “シャブ” (meth); does not accept illness; says he will stop lithium when he feels well because of tremor",
    why: "He gives a partial reason and one real side effect (tremor). Start there: the tremor is something you can treat. Poor insight with a plan to stop medicine is a major reason to defer."
   },
   judgment: {
    ans: {
     0: ["切《き》れません よ。 切《き》れたら、 もう いらない って こと。", "It won't happen. If it runs out, I don't need it anymore."],
     1: ["声《こえ》 なんて 聞《き》こえません よ。", "I'm not going to hear voices."],
     2: ["そりゃ、 叫《さけ》んで 走《はし》って 逃《に》げます よ。", "Well I yell and run out, of course."],
     3: ["一回《いっかい》 くらい 平気《へいき》 です よ。 自分《じぶん》 で コントロール できる し。 仕事《しごと》 の 付《つ》き合《あ》い なら、 やります。", "Once doesn't do anything. I know how to control myself. If it's part of the gig, then yes."]
    },
    key: [0, 3],
    need: ["Poor", "Impaired social judgment"],
    ok: ["Intact test judgment"],
    wrong: {
     Good: "He plans to stop medicine, take a loan, and accept drugs at gigs. Social judgment is poor.",
     "Intact social judgment": "His plans after discharge are unsafe: stopping lithium, using meth “once”, and borrowing money."
    },
    doc: "Poor: impaired social judgment (plans to stop lithium, accept stimulants “once” at gigs, take a loan); test judgment intact (fire answer)",
    why: "Test judgment can be fine while social judgment is poor. Ask the realistic after-discharge questions: they are where the risk is."
   },
   sleep: {
    obs: "Sleep chart: 4 to 5 hours a night, awake and active on the unit from 4 a.m.",
    ans: {
     0: ["四《よ》、 五時間《ごじかん》 で、 すっきり 起《お》きます。", "Four, five hours, and I wake up fresh."],
     1: ["朝《あさ》 四時《よじ》 に アイデア が 山《やま》ほど 浮《う》かんで、 もう 寝《ね》られない。", "I wake up at four with a thousand ideas and can't go back to sleep."],
     2: ["いや、 全然《ぜんぜん》。", "No, not at all."],
     3: ["うん、 エネルギー が めちゃくちゃ ある。 これ 以上《いじょう》 寝《ね》る 必要《ひつよう》 ない です。 みんな 寝過《ねす》ぎ なん です よ。", "Yes, I have tons of energy. I don't need more sleep. People sleep too much."]
    },
    key: [3],
    need: ["Poor", "Reduced need for sleep"],
    wrong: {
     Fair: "Four to five hours with a reduced need for sleep is poor in this context.",
     Good: "The sleep chart does not support this.",
     "7–8 hours, uninterrupted": "The chart shows 4 to 5 hours and early waking."
    },
    doc: "Poor, 4–5 hours (sleep chart) with early waking; reduced need for sleep (“これ 以上《いじょう》 寝《ね》る 必要《ひつよう》 ない”)",
    why: "Reduced need for sleep is the hallmark of mania and the earliest relapse sign. Never take “I feel fresh” as a sign of good sleep."
   },
   adverse: {
    obs: "Chart: restrained once on the night of admission for agitation, no restraint since. No falls. Fine hand tremor on lithium, no vomiting, diarrhea, or ataxia. Lithium level not yet drawn.",
    ans: {
     0: ["手《て》 が ちょっと 震《ふる》える ん です。 DJ やる のに 邪魔《じゃま》 で。 あと、 たまに すごく 喉《のど》 が 渇《かわ》く。", "My hands shake a little. That bothers me for playing music. And sometimes I feel very thirsty."],
     1: ["いや、 別《べつ》 に。 ここ で 嫌《いや》 だった の は、 縛《しば》られた 夜《よる》 だけ。 あれ は 最悪《さいあく》 でした。", "No, nothing. The only bad thing here was the night they tied me down. That was the worst."]
    },
    key: [0, 1],
    need: ["Agitation requiring restraint", "Tremor"],
    wrong: {
     None: "The chart shows one restraint on admission and he reports tremor.",
     "Extrapyramidal symptoms": "His tremor is a fine action tremor on lithium. Without rigidity, do not call it EPS."
    },
    doc: "Agitation requiring restraint once (night of admission), none since; fine bilateral hand tremor and thirst on lithium; no signs of toxicity today; lithium level pending (blood draw refused)",
    why: "The restraint is in the chart, and he told you how it felt. Ask about it kindly: it can shape whether he trusts treatment. The tremor is a reason he gives for stopping lithium, so address it."
   },
   diagnosis: {
    ans: {
     0: ["双極性《そうきょくせい》？ よく わかんない です、 先生《せんせい》。 なんか 頭《あたま》 おかしい 人《ひと》 の 病気《びょうき》 みたい。", "Bipolar? I don't know, doctor. That sounds like something for crazy people."],
     1: ["まあ、 寝《ね》なかった し、 金《かね》 も 使《つか》い過《す》ぎた けど、 病気《びょうき》 だ と は 思《おも》わない。", "Well, yes, I slept little and spent too much, but I don't think it's an illness."],
     2: ["神様《かみさま》 は ちゃんと わかって る。 でも、 罰《ばち》 だ と は 思《おも》いません。", "God knows what He's doing. But I don't think it's a punishment."]
    },
    need: ["Bipolar I disorder, current episode manic", "Other comorbid: ___"],
    wrong: {
     "Bipolar I disorder, current or most recent episode manic, in partial remission": "He is still clearly manic, not in partial remission.",
     "Methamphetamine-induced psychotic disorder, with ___ use disorder": "Mania was present with a positive screen, but the history points to a primary bipolar episode with stimulant use. Keep this on the list for the follow-up."
    },
    doc: "Bipolar I disorder, current episode manic, moderate to severe, not in remission. Other: stimulant (methamphetamine) use, severity to be assessed; screen positive on admission",
    why: "Methamphetamine can cause or worsen mania. Document both and say that the question of substance-induced versus primary mania remains. Avoid words like “頭《あたま》 が おかしい” (crazy) when you explain: his own comment shows the stigma he fears."
   },
   medications: {
    ans: {
     0: ["リチウム、 だって。 一日《いちにち》 三回《さんかい》。 好《す》き じゃ ない。", "Lithium, they say. Three times a day. I don't like it."],
     2: ["何日《なんにち》 か 飲《の》んで、 それ で 終《お》わり。 調子《ちょうし》 よく なったら やめます。", "I'll take it for a few days and that's it, once I feel good I'll stop."],
     3: ["わかんない、 どっか の 薬局《やっきょく》。 保険料《ほけんりょう》 も 払《はら》って ない し。", "I don't know, at some pharmacy. I haven't paid my health insurance."],
     4: ["調子《ちょうし》 いい なら、 何《なん》 の ため に？", "If I feel good, what for?"],
     5: ["言《い》った でしょ、 もう 血《ち》 は 採《と》らせない って。", "I already told you, I won't let them take my blood again."]
    },
    key: [2, 4, 5],
    need: ["Lithium carbonate ___ mg tab, ___", "Teach-back incorrect, re-taught"],
    wrong: {
     "Teach-back done, correct": "His teach-back was wrong: he plans to stop when he feels good.",
     "Family supervises medication": "Misaki has not agreed to supervise and does not feel safe doing it. He also refuses the labs lithium needs.",
     "Divalproex sodium ___ mg tab, ___": "He is on lithium. Changing the drug is a team decision, not something to add to the form."
    },
    doc: "Lithium carbonate 300 mg tab, 3 times a day (teaching example); level pending, blood draw refused; teach-back incorrect (“when I feel good I stop”), re-taught, still unwilling; health insurance premiums unpaid, cost to be solved; teaching example, not a discharge order",
    why: "Lithium needs blood levels. A patient who refuses labs and plans to stop it is not ready to go home on it. Ask what bothers him about the pills (tremor, thirst) and offer to address that. Cost and insurance are real barriers, so involve social work."
   },
   aftercare: {
    ans: {
     0: ["今日《きょう》 帰《かえ》りたい ん です よ。 明日《あした》 の こと は、 まあ、 その とき 考《かんが》えます。", "I want to leave today. Tomorrow, I don't know, we'll see."],
     1: ["美咲《みさき》 かな。 でも、 あいつ の 言《い》う こと は 聞《き》きません よ。", "Misaki, I guess, but I don't do what she says."],
     2: ["先生《せんせい》、 まだ よく なって いない と 思《おも》います。 ほとんど 寝《ね》て いない のに、 もう ローン を 組《く》もう と して いる ん です。 リチウム を やめて、 また あの 友達《ともだち》 の ところ に 戻《もど》って しまう ん じゃ ない か と、 怖《こわ》い ん です。", "Doctor, I think he isn't well yet. He hardly sleeps and he already wants to take out a loan. I'm afraid he'll stop the lithium and go back with those friends.", "Misaki (girlfriend)"],
     3: ["必要《ひつよう》 なら 電話《でんわ》 します けど、 必要《ひつよう》 ない です よ。", "If I need it, I'll call, but I won't need it."],
     4: ["納得《なっとく》 は して ない けど、 無理《むり》やり は できない ん でしょ。 あと 何日《なんにち》？", "I don't agree, but I understand you can't force me. How much longer?"]
    },
    key: [4],
    need: ["Discharge deferred: ___"],
    ok: ["Family oriented on warning signs"],
    wrong: {
     "Outpatient follow-up in 1–2 weeks": "A date is premature. He is not ready to leave yet.",
     "Long-acting injectable schedule given": "No injection was ordered. Raise it as an option for later if he keeps refusing pills.",
     "Safety plan made with patient and family": "A plan that depends on him telling Misaki when he is unwell does not fit when he lacks insight. Keep working on it while he stays."
    },
    doc: "Discharge deferred: mania not resolved (grandiose delusion persists, sleep 4–5 hours, pressured speech, poor insight), refuses lithium level and says he will stop lithium, no plan for methamphetamine use, girlfriend concerned. Reassess in 48–72 hours; social work (insurance), substance use counseling, family meeting with Misaki. Reviewed reasons with the patient; no current plan or intent to harm self or others",
    why: "You can defer without a fight. Say the reasons in plain words, name what has to change (sleep, medicine plan, labs, a substance plan), and give a time to reassess. Include Misaki with his consent: she is a key supporter."
   }
  }
 }
,
 {
  id: "tetsuo",
  title: "Sober, steadier, daughter ready to help",
  level: "N4",
  dx: "Alcohol use disorder, severe",
  decision: { discharge: true, why: "Discharge today to an outpatient program. Withdrawal has resolved (tremor and sweating gone, no seizure since the ER), and the death wish he voiced on admission cleared by day 5. He denies suicidal and homicidal thoughts, he is starting naltrexone, and his daughter will drive him to the first appointment. Cravings and relapse risk remain, which is why the outpatient plan, naltrexone, and AA matter." },
  setting: "Ward, morning of planned discharge. Tetsuo Yamamoto, 52, construction worker, lives alone. His daughter Haruka is in the lounge and will take him to her house for the first few days.",
  chart: [
   "Admitted 8 days ago after a withdrawal seizure in the ER: tremor, sweating, CIWA-Ar 18 on arrival. About one 720 ml bottle of shochu daily for years, with a hangover and a morning drink (“迎《むか》え酒《ざけ》”) every morning. Also low mood and a passive wish not to wake up on admission.",
   "Admission MSE: tremulous, sweating, anxious, dysphoric mood, passive death wish without plan, insight grade 3.",
   "Course: lorazepam taper and thiamine. Tremor and sweating gone by day 4. Passive death wish cleared by day 5. No further seizures, no delirium. No restraint. No falls. Sleep chart 6 to 7 hours.",
   "Plan (teaching example): naltrexone 50 mg tab once a day. Outpatient alcohol program intake in 3 days, AA, appointment with a primary care clinician. Haruka drives. Written plan and a card with the local crisis line."
  ],
  fields: {
   behavior: {
    obs: "Shaved, clean work shirt that his daughter brought. Hands steady when he takes the form. Eye contact good, a little embarrassed. Polite and answers fully.",
    ans: {
     0: ["おかげさま で、 だいぶ いい です、 先生《せんせい》。 もう 震《ふる》え も ない し、 飯《めし》 も ちゃんと 食《く》って ます。", "Much better, doctor. I don't shake anymore and I eat well."],
     1: ["ええ、 もちろん。 どうぞ。", "Of course, gladly."]
    },
    need: ["Calm", "Cooperative", "Good eye contact", ["Well groomed", "Fairly groomed"]],
    wrong: {
     Restless: "That was his admission state, with tremor and sweating. His hands are steady now.",
     Guarded: "He is open and a little ashamed, not guarded."
    },
    doc: "Calm, cooperative, good eye contact, well groomed; no tremor",
    why: "Compare with admission: tremulous and sweating then, steady now. Steady hands are a clinical sign that withdrawal is over."
   },
   mood: {
    obs: "Brightens when he talks about his granddaughter. Looks serious and a little ashamed when he mentions his drinking.",
    ans: {
     0: ["気持《きも》ち が 落《お》ち着《つ》きました。 何年《なんねん》 ぶり か で、 体《からだ》 から 酒《さけ》 が 抜《ぬ》けた 感《かん》じ です。", "Calmer. I feel clean for the first time in many years."],
     1: ["酒《さけ》 を やめられて、 うれしい です。 ちょっと 恥《は》ずかしい けど、 うれしい。", "Happy to be sober. A little ashamed, but happy."],
     2: ["八《はち》 です かね。", "An eight."]
    },
    quote: "気持《きも》ち が 落《お》ち着《つ》きました。 何年《なんねん》 ぶり か で、 体《からだ》 から 酒《さけ》 が 抜《ぬ》けた 感《かん》じ です。 (Calmer. I feel clean for the first time in many years.)",
    need: ["Euthymic mood", "Congruent affect", "Full range affect"],
    ok: ["Restricted affect"],
    wrong: {
     "Dysphoric mood": "That was admission. Shame about the past is normal and not the main mood now.",
     "Anxious mood": "His worry about relapse is realistic and mild. Mention it in the details."
    },
    doc: "“気持《きも》ち が 落《お》ち着《つ》きました。 何年《なんねん》 ぶり か で、 体《からだ》 から 酒《さけ》 が 抜《ぬ》けた 感《かん》じ です。” (Calmer. I feel clean for the first time in many years.) Mood 8/10. Euthymic mood, congruent, full range affect; shame about the past appropriate",
    why: "Mood improved from admission. Low mood after withdrawal often clears within days to weeks, but ask again at follow-up, because depressed mood can return as the cravings come."
   },
   process: {
    obs: "Tells it in order, pausing to find words, but stays on topic.",
    ans: {
     0: ["毎日《まいにち》 飲《の》んで ました。 焼酎《しょうちゅう》 の 四合瓶《よんごうびん》 を 一本《いっぽん》。 二日《ふつか》 ほど 飲《の》まないで いたら、 体《からだ》 が 震《ふる》えて、 汗《あせ》 が 止《と》まらなく なって。 娘《むすめ》 が 救急《きゅうきゅう》 に 連《つ》れて 来《き》て くれて、 そこ で けいれん を 起《お》こした そう です。 ここ で 震《ふる》え を 止《と》めて もらって、 もう こんな 生活《せいかつ》 は 嫌《いや》 だ と 思《おも》いました。", "I drank every day, a 720 ml bottle of shochu. After about two days without a drink my body started shaking and the sweating wouldn't stop. My daughter took me to the ER, and I'm told I had a seizure there. Here they got rid of the shaking and I realized I don't want to go on like this."],
     1: ["しばらく 娘《むすめ》 の 家《いえ》 に 行《い》って、 それ から クリニック と AA の ミーティング に 通《かよ》います。 仕事《しごと》 も また 頼《たの》む つもり です けど、 まず は しっかり しない と。", "I'm going to my daughter's for a few days, then to the clinic and the AA meetings. I'm going to ask for work again, but first I need to be steady."]
    },
    need: ["Goal-directed", "Coherent and relevant"],
    doc: "Goal-directed, coherent and relevant",
    why: "A clear account with a concrete plan (daughter, clinic, AA, work later) is goal-directed."
   },
   positive: {
    obs: "Not seen responding to anything. Ward notes: brief visual misperceptions on days 1–2 of withdrawal, none since; no delirium.",
    ans: {
     0: ["いや、 何《なに》 も。", "No, nothing."],
     1: ["ない です。", "No."],
     2: ["最初《さいしょ》 の 何日《なんにち》 か は、 壁《かべ》 に 虫《むし》 が 見《み》えた よう な 気《き》 が しました。 でも、 あれ は 酒《さけ》 が 切《き》れた せい で。 今《いま》 は ない です。", "The first days I seemed to see bugs on the wall, but that was the withdrawal. Not anymore."],
     3: ["ない です。", "No."],
     4: ["前《まえ》 は、 もう 何《なに》 を やって も 無駄《むだ》 だ と 思《おも》って ました。 今《いま》 は、 やれる と 思《おも》います。", "Before I thought nothing could be fixed. Now I think I can."]
    },
    key: [2],
    need: ["No hallucinations elicited", "Not responding to internal stimuli"],
    wrong: {
     "Residual auditory hallucinations, less frequent": "He had brief visual misperceptions early in withdrawal. They resolved and were never auditory.",
     "Delusions persist": "“Nothing can be fixed” was hopelessness, not a delusion."
    },
    doc: "No hallucinations elicited today (brief visual misperceptions on days 1–2 of withdrawal, resolved); not responding to internal stimuli; no delusions",
    why: "Ask about the early days too. Brief misperceptions in withdrawal tell you how severe it was. Today the answer is clean."
   },
   negative: {
    obs: "Ward notes: goes to groups, helps stack chairs, chats with the other patients.",
    ans: {
     0: ["ええ、 グループ も 将棋《しょうぎ》 も 楽《たの》しい です。", "Yes, I like the group and shogi."],
     1: ["ええ、 みんな と。 同《おな》じ 建設《けんせつ》 の 仕事《しごと》 を して た 人《ひと》 も いて ね。", "Yes, with everyone. There's a man who is also in construction."],
     2: ["ええ、 やる気《き》 は あります。 こんな 気持《きも》ち、 何年《なんねん》 ぶり か な。", "Yes, I feel like it. It's been years since I felt like it."],
     3: ["ええ、 毎日《まいにち》。", "Yes, every day."]
    },
    need: ["None noted"],
    wrong: {
     Avolition: "He has energy and wants to work.",
     "Poor self-care": "He bathes daily and is well groomed."
    },
    doc: "None noted",
    why: "Motivation, social contact, and self-care are good."
   },
   suicide: {
    ans: {
     0: ["いや、 もう ない です。 入院《にゅういん》 した とき は、 このまま 目《め》 が 覚《さ》めなければ いい と 思《おも》って ました けど、 何日《なんにち》 か で なくなりました。", "No, not anymore. When I came in I felt it was better not to wake up, but that went away after a few days."],
     1: ["いいえ、 計画《けいかく》 なんて ない です。", "No, no plan."],
     2: ["娘《むすめ》 の 遥《はるか》 か、 AA の スポンサー に 電話《でんわ》 します。 相談《そうだん》 の 電話番号《でんわばんごう》 も、 携帯《けいたい》 に 入《い》れて あります。", "I call my daughter Haruka or my AA sponsor. And I also have the crisis line in my phone."]
    },
    key: [0, 2],
    need: [["Denies suicidal ideation, plan, or intent", "None"]],
    wrong: {
     "Passive death wish, no plan or intent": "That was his admission state. It cleared by day 5, and today he denies it."
    },
    doc: "Denies suicidal ideation, plan, or intent; passive death wish on admission cleared by day 5; plan to call daughter or sponsor and the local crisis line if it returns",
    why: "Document the change from admission and a plan. Alcohol raises suicide risk, and the first weeks of recovery can bring low mood back, so ask again at every visit."
   },
   homicide: {
    ans: {
     0: ["いや、 一度《いちど》 も。", "No, never."],
     1: ["誰《だれ》 に も。 腹《はら》 が 立《た》つ の は 自分《じぶん》 に だけ です。 あんな に 飲《の》んで いた ん だ から。", "No, no one. Only with myself, for drinking so much."]
    },
    need: [["Denies homicidal ideation", "None"]],
    doc: "Denies homicidal ideation; anger directed at himself only",
    why: "Anger turned inward is worth a brief note. It links to guilt and shame, which can drive relapse."
   },
   orientation: {
    ans: {
     0: ["金曜日《きんようび》 です。 十一月《じゅういちがつ》 の 半《なか》ば。", "It's Friday, the middle of November."],
     1: ["病院《びょういん》 の、 精神科《せいしんか》 の 病棟《びょうとう》 です。", "In the hospital, in the psychiatry area."],
     2: ["先生《せんせい》 です よ。", "You are the doctor."]
    },
    need: ["Oriented to time, place, and person (×3)"],
    doc: "Oriented to time, place, and person (×3)",
    why: "Correct day, place, and person. He also received thiamine, so a screen for confusion at discharge is reassuring."
   },
   memory: {
    ans: {
     0: ["ボール、 木《き》、 鍵《かぎ》。", "Ball, tree, key."],
     1: ["ボール、 木《き》、 鍵《かぎ》。", "Ball, tree, key."],
     2: ["ご飯《はん》 と 味噌汁《みそしる》、 それ に 卵焼《たまごや》き。", "Rice, miso soup, and a rolled omelette."],
     3: ["八日《ようか》 前《まえ》 の 朝《あさ》 です。", "Eight days ago, in the morning."],
     4: ["秋田《あきた》 です。 横手《よこて》 の 近《ちか》く の 田舎《いなか》 で。", "In Akita, in the countryside near Yokote."]
    },
    need: ["Intact immediate, recent, and remote memory"],
    doc: "Intact immediate (3/3), recent (3/3 recall, breakfast, admission date), and remote memory",
    why: "After years of heavy drinking, intact recent memory is a good sign. If it were impaired, think of thiamine deficiency and ask for more testing."
   },
   insight: {
    ans: {
     0: ["けいれん を 起《お》こした し、 もう 酒《さけ》 を 飲《の》みながら は 生《い》きて いけない から です。", "Because of the seizures and because I can't go on living drinking."],
     1: ["ええ。 アルコール 依存症《いぞんしょう》 は 病気《びょうき》 です。 娘《むすめ》 に は 何年《なんねん》 も 前《まえ》 から 言《い》われて た のに、 聞《き》く 耳《みみ》 を 持《も》たなかった。", "Yes. Alcoholism is an illness. My daughter told me years ago and I didn't want to listen."],
     2: ["ええ、 あの 薬《くすり》 は 飲《の》みたい 気持《きも》ち を 抑《おさ》えて くれる。 それ と ミーティング。 一人《ひとり》 じゃ 無理《むり》 です。", "Yes, the pill helps with the urge to drink. And the meetings. I can't do it alone."],
     3: ["また 飲《の》んで しまって、 次《つぎ》 は 命取《いのちと》り に なる かも しれない。", "I'd go back to drinking, and the next time could be the last."]
    },
    key: [1, 2],
    need: ["Fair", "Grade 5: intellectual insight"],
    ok: ["Good", "Grade 4: aware, cause unknown in self"],
    wrong: {
     "Grade 6: true emotional insight": "Grade 6 is shown by changed behavior over time. He has been sober only 8 days, in a controlled place.",
     Poor: "He names the illness, the need for the medicine, and the risk."
    },
    doc: "Fair to good (grade 5): accepts alcohol use disorder as an illness and need for medicine and meetings; has not yet been tested outside the hospital",
    why: "He understands and has motivation. True test of insight is staying sober outside, so plan for support."
   },
   judgment: {
    ans: {
     0: ["クリニック に 電話《でんわ》 する か、 娘《むすめ》 に 薬局《やっきょく》 へ 行《い》って もらいます。", "I call the clinic or ask my daughter to go to the pharmacy."],
     1: ["それ は 当《あ》てはまらない けど、 飲《の》みたく なったら スポンサー に 電話《でんわ》 する か、 ミーティング に 行《い》きます。", "That doesn't apply here, but if I feel like drinking, I call my sponsor or go to a meeting."],
     2: ["人《ひと》 を 押《お》さない よう に して 急《いそ》いで 外《そと》 に 出《で》て、 周《まわ》り に も 知《し》らせます。", "I'd leave quickly, without pushing, and warn people."],
     3: ["断《ことわ》ります。 薬《くすり》 を 飲《の》んで る から 無理《むり》 だ って。 しつこい なら、 帰《かえ》ります。 誰《だれ》 と 付《つ》き合《あ》っちゃ いけない か は、 もう わかって ます。", "I tell them no, that I'm on a pill and can't. If they insist, I leave. I know who I shouldn't hang around with."]
    },
    key: [3],
    need: ["Intact test judgment", "Intact social judgment"],
    ok: ["Good"],
    doc: "Good: intact test and social judgment; realistic plan for offers of alcohol (refuse, leave, sponsor, meeting)",
    why: "His plan for offers of alcohol is specific. Also ask about the first payday and the work crew."
   },
   sleep: {
    obs: "Sleep chart: 6 to 7 hours the last 4 nights.",
    ans: {
     0: ["よく 眠《ねむ》れて ます。 六《ろく》、 七時間《しちじかん》。 酔《よ》わず に 寝《ね》た の なんて、 何年《なんねん》 ぶり か。", "Well, six or seven hours. It's been years since I slept without being drunk."],
     1: ["一回《いっかい》 くらい。 でも、 また すぐ 寝《ね》られます。", "Once, but I go back to sleep."],
     2: ["いや。", "No."]
    },
    need: ["Good"],
    ok: ["7–8 hours, uninterrupted", "Fair"],
    wrong: {
     "Difficulty initiating sleep": "He falls asleep without trouble.",
     "Daytime sedation": "He denies daytime sleepiness. The lorazepam taper is over."
    },
    doc: "Good, 6–7 hours (sleep chart); one brief awakening, falls back to sleep; no daytime sedation",
    why: "Sleep often gets worse in early recovery, so ask again at follow-up. Poor sleep is a common reason to drink again."
   },
   adverse: {
    obs: "Chart: withdrawal seizure in the ER before admission, lorazepam taper and thiamine. Tremor and sweating gone by day 4. No restraint, no falls, no delirium.",
    ans: {
     0: ["最初《さいしょ》 は 震《ふる》え も 汗《あせ》 も ひどかった。 今《いま》 は ない です。 ナルトレキソン は 始《はじ》めた ばかり で、 特《とく》に 何《なに》 も ない です。", "At first a lot of shaking and sweating. Not anymore. I'm just starting naltrexone and haven't felt anything."],
     1: ["いや、 何《なに》 も。 救急《きゅうきゅう》 で の 発作《ほっさ》 だけ です。", "No, nothing. Only the seizure in the ER."]
    },
    key: [0, 1],
    need: ["Withdrawal symptoms"],
    ok: ["Tremor", "Sedation"],
    wrong: {
     None: "Withdrawal with a seizure and CIWA-Ar 18 is the central event of this stay. Document it, even though it is resolved.",
     "Fall or injury": "His seizure was in the ER before admission, and he did not fall. No falls happened on the unit."
    },
    doc: "Alcohol withdrawal with seizure (before admission) and tremor and sweating on days 1–4, resolved with lorazepam taper and thiamine; no delirium, no restraint, no falls; no side effects from naltrexone so far",
    why: "Adverse events are what happened during the stay, not only drug side effects. The seizure history should travel with him to the next clinic."
   },
   diagnosis: {
    ans: {
     0: ["ええ。 アルコール 依存症《いぞんしょう》 です ね。 その 言葉《ことば》 は、 ずしり と 来《き》ます けど。", "Yes. Alcoholism, though the word weighs on me."],
     1: ["ええ、 酒《さけ》 に 支配《しはい》 されて た ん です。 もう 自分《じぶん》 一人《ひとり》 じゃ やめられなかった。", "Yes, alcohol took charge of me. I couldn't stop on my own anymore."],
     2: ["ありがとう ございます。 ずっと、 意志《いし》 が 弱《よわ》い だけ、 だらしない だけ だ と 思《おも》って ました。", "Thank you. I thought it was lack of willpower and that it was a vice."]
    },
    need: ["Other comorbid: ___"],
    wrong: {
     "Major depressive disorder, recurrent": "Low mood on admission cleared within days of stopping alcohol. Do not label a depressive disorder yet, but plan to recheck mood after 4 weeks of sobriety."
    },
    doc: "Alcohol use disorder, severe, with complicated withdrawal (seizure), withdrawal resolved; early remission not yet reached (8 days, in a controlled environment). Depressed mood on admission, likely alcohol-induced, resolved; recheck mood in 4 weeks",
    why: "There is no AUD pick on the form, so write it under “Other comorbid”. Say “alcohol use disorder, severe” and the course. Hearing “not willpower, not a vice” can reduce shame."
   },
   medications: {
    ans: {
     0: ["ええ、 一日《いちにち》 一錠《いちじょう》。", "Yes, one pill a day."],
     2: ["ナルトレキソン を 朝《あさ》、 朝飯《あさめし》 と 一緒《いっしょ》 に 一錠《いちじょう》。 飲《の》んで いる 間《あいだ》 は、 モルヒネ とか トラマドール みたい な 痛《いた》み止《ど》め は 使《つか》えない って 言《い》われました。", "Naltrexone, one pill in the morning with breakfast. They said I can't take anything for pain like morphine or tramadol while I'm on it."],
     3: ["遥《はるか》 が 近《ちか》く の クリニック に 行《い》ける よう に して くれて ます。 あまり お金《かね》 は かからない そう です。", "Haruka is helping me go to a clinic nearby; she says it doesn't cost much."],
     4: ["ええ、 飲《の》みたい 気持《きも》ち が なくなって も、 続《つづ》けます。", "Yes, even if I no longer feel like drinking."]
    },
    key: [2],
    need: ["Teach-back done, correct"],
    ok: ["Family supervises medication"],
    wrong: {
     "Teach-back incorrect, re-taught": "His teach-back was right, including the warning about pain medicines."
    },
    doc: "Naltrexone 50 mg tab, 1 tab every morning with breakfast (teaching example); teach-back correct, including no opioid pain medicines; liver tests at the first visit; cost and pickup checked; daughter aware",
    why: "Naltrexone blocks opioids, so he must tell any doctor or dentist he takes it. There is no naltrexone pick on the form, so the drug and dose go in the documentation line. Teach-back covers the pill and the warning."
   },
   aftercare: {
    ans: {
     0: ["ええ、 月曜《げつよう》 の 九時《くじ》。 遥《はるか》 が 送《おく》って くれます。", "Yes, Monday at nine. Haruka takes me."],
     1: ["娘《むすめ》 です。 でも、 責任《せきにん》 は 自分《じぶん》 に あります。", "My daughter. But I'm the one responsible."],
     2: ["ええ。 また 震《ふる》え が 出《で》たり、 酒《さけ》 が 飲《の》みたくて たまらなく なったり、 生《い》きて いたくない と 思《おも》ったり したら、 すぐ 来《く》る か 電話《でんわ》 します。", "Yes. If I start to shake, if the urge to drink is strong, or if I start feeling like I don't want to live, I come in or call."],
     3: ["ありがとう ございます。 取《と》って おきます。", "Thank you. I'll keep it."]
    },
    need: ["Outpatient follow-up in 1–2 weeks", "Referred to ___", "Family oriented on warning signs"],
    ok: ["Follow-up appointment date and clinic given in writing"],
    wrong: {
     "Safety plan made with patient and family": "He has no current suicidal ideation. A relapse-prevention plan is separate and is documented under follow-up."
    },
    doc: "Outpatient alcohol treatment program, intake Monday 9 a.m. (in 3 days, daughter drives) and clinic follow-up within 1–2 weeks; referred to AA and a primary care clinic; daughter oriented on warning signs (tremor, strong cravings, hopelessness); the local crisis line given",
    why: "Name the date, the person who drives, and the early warning signs. If he shakes again after stopping alcohol, treat it as a medical emergency."
   }
  }
 }
]);
