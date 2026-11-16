/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* End-of-treatment review practice cases, part 1 (0.20.0): outpatients at their last planned session. Same shape as discharge cases, but decision: { end, why }. Ids: ocd (Takumi), ptsd (Mariko), hinata (Hinata, 14, with her mother). Fictional patients. */
window.PSYCH_EOT_CASES = (window.PSYCH_EOT_CASES || []).concat([
 {
  id: "ocd",
  title: "Takumi at his last session",
  level: "N3",
  dx: "Obsessive-compulsive disorder, with good or fair insight; much improved after exposure and response prevention",
  decision: { end: true, why: "Regular sessions can end today. The target symptoms are much improved: he rated them 9/10 at the start and 2/10 now; washing takes under thirty minutes a day, his hands have healed, he checks the gas and the lock once and is on time for work. He is back to his usual work and he and Aya eat out again. Mood is euthymic, and he denies suicidal thoughts, as he did at the first visit. What remains is named honestly: urges to check at busy times at work, which he now lets pass. He names his own early warning signs in his own words, the plan is written down, he knows how to restart the ladder, and Aya knows the signs and how to answer without reassuring him. The risk after ending is a relapse at a busy or stressful time; a booster session in three months, the open door to come back without starting over, and medicine kept as an option cover it. Continuing weekly sessions now would add little and could suggest he cannot manage on his own, when the aim of ERP is that he becomes his own therapist." },
  setting: "Outpatient clinic, end-of-treatment review: the 16th and last planned weekly session of exposure and response prevention, about five months after the first visit. Takumi Kobayashi, 34, works in the accounts section of a city office; he is married to Aya, and came alone today. You saw him at the first visit and through the treatment under supervision. Staff address him as Kobayashi-san.",
  chart: [
   "First visit about five months ago: two years of contamination fears (germs on his hands, making others ill) with hand washing until the skin cracked, long showers and changing all his clothes on coming home; checking the gas, locks and windows again and again, late for work, rechecking figures at work; more than three hours a day; reassurance seeking from his wife. Anxious, low mood from the time lost; denied suicidal thoughts; drinks a little occasionally. Insight good. Self-rated 9/10.",
   "Plan agreed by shared decision: exposure and response prevention (ERP) first, 16 weekly sessions; medicine kept as an option. Practice between sessions. With his consent, his wife Aya to join some sessions. Skin care for his hands.",
   "Course: exposure ladder worked up step by step (touching door handles without washing, using the shared office phone, leaving home after checking once). Aya came to two sessions and learned to stop giving reassurance kindly. Washing and checking fell steadily; practice harder in busy weeks at work. No medicine.",
   "Today: the last planned session. Review the course and the change in target symptoms, a short review MSE with safety, daily functioning, the relapse plan, medicines, and decide whether regular sessions can end."
  ],
  fields: {
   course: {
    ans: {
     0: ["十六回《じゅうろっかい》、 全部《ぜんぶ》 来《こ》られました。 一回《いっかい》 も 休《やす》みません でした。", "I was able to come to all sixteen. I didn't miss a single one."],
     1: ["ほとんど 毎週《まいしゅう》 やりました。 仕事《しごと》 が 忙《いそが》しい 週《しゅう》 は、 少《すこ》し サボって しまいました けど。", "Almost every week. In the weeks when work was busy, I slacked off a bit, though."],
     2: ["洗《あら》わない で いて も、 不安《ふあん》 が 自然《しぜん》 に 下《さ》がる の を、 自分《じぶん》 で 体験《たいけん》 できた こと です。 それ と、 妻《つま》 が 一緒《いっしょ》 に 来《き》て くれた こと も 大《おお》きかった です。", "Finding out for myself that the anxiety comes down by itself even if I don't wash. And my wife coming with me meant a lot too."],
     3: ["最初《さいしょ》 に ドア の 取《と》っ手《て》 を 触《さわ》って、 洗《あら》わず に いた とき は、 本当《ほんとう》 に 怖《こわ》かった です。", "The first time I touched a door handle and didn't wash, I was really scared."]
    },
    key: [0, 1],
    need: ["Attended all planned sessions", "Practised between sessions most weeks", "Family took part in ___ session(s)"],
    wrong: {
     "Missed several sessions": "He came to all sixteen sessions.",
     "Attended most planned sessions": "He missed none: write all, not most.",
     "Rarely practised between sessions": "He practised almost every week; only the busy weeks were harder."
    },
    doc: "Exposure and response prevention, 16 weekly sessions (first visit about five months ago): exposure ladder of door handles, the shared office phone, and leaving home after checking once. Attended all 16; practised between sessions most weeks, less in busy weeks at work; wife Aya took part in 2 sessions (learning to stop giving reassurance kindly)",
    why: "Write what treatment was given, how much, and how it was used: if the symptoms come back, the next doctor knows what worked and what to restart. Compare the chart's plan with what happened. Ask what helped and what was hard: his answer (the anxiety comes down by itself) shows he took in the core lesson of ERP, and the fear of the first exposure is worth remembering if he has to start the ladder again."
   },
   change: {
    ans: {
     0: ["手《て》 を 洗《あら》う の が やめられなかった こと です。 今《いま》 は 一日《いちにち》 で 合《あ》わせて も 三十分《さんじゅっぷん》 かかりません。 シャワー も 短《みじか》く なって、 手《て》 も すっかり 治《なお》りました。", "Not being able to stop washing my hands. Now it takes less than thirty minutes a day altogether. My showers are short now, and my hands have healed completely."],
     1: ["最初《さいしょ》 は 九《きゅう》 でした。 今《いま》 は 二《に》 ぐらい です。", "At first it was a nine. Now it's about a two."],
     2: ["朝《あさ》、 ガス と 鍵《かぎ》 を 一回《いっかい》 見《み》たら、 そのまま 家《いえ》 を 出《で》られます。 もう 遅刻《ちこく》 も して いません。 職場《しょくば》 で みんな が 使《つか》う 電話《でんわ》 も、 普通《ふつう》 に 使《つか》えます。", "In the morning, once I've looked at the gas and the lock one time, I can just leave the house. I'm not late any more, either. I can use the phone everyone shares at work as normal, too."],
     3: ["年度末《ねんどまつ》 みたい に 仕事《しごと》 が 忙《いそが》しい とき は、 まだ 確《たし》かめたく なります。 でも、 その 気持《きも》ち は そのまま に して、 過《す》ぎる の を 待《ま》てる よう に なりました。", "When work is busy, like at the end of the financial year, I still get the urge to check. But I've learned to leave the feeling as it is and wait for it to pass."]
    },
    key: [0, 1, 3],
    need: ["Much improved", "Self-rated ___/10 at start, ___/10 now", "Residual symptoms: ___"],
    wrong: {
     "Minimally improved": "He rates 9/10 at the start and 2/10 now, and washing takes under thirty minutes a day: much more than a minimal change.",
     Unchanged: "He rates 9/10 at the start and 2/10 now.",
     Worse: "He rates 9/10 at the start and 2/10 now."
    },
    doc: "Much improved: hand washing under 30 minutes a day, short showers, hands healed; checks the gas and the lock once and leaves on time; checks figures at work once; uses the shared office phone. Self-rated 9/10 at start, 2/10 now. Residual symptoms: urges to check at busy times at work (the year-end accounts at the end of the financial year), which he lets pass without checking",
    why: "Use the patient's own rating then and now, and concrete examples of what he can do again. Then ask what is still difficult and record it honestly: the urges at busy times are the residual symptom, and how he answers them (he lets them pass) is the skill the relapse plan builds on. A review that writes only \"much improved\" hides what the next doctor most needs to know."
   },
   mood: {
    obs: "Relaxed and smiling; sits back in the chair with his hands resting on the desk (at the first visit he kept them off it). Laughs a little about the busy end of the financial year at work and grows serious when he recalls the first exposure. His expression moves with the topic.",
    ans: {
     0: ["すっきり しました。 前《まえ》 は いつも 何《なに》 か に 追《お》われて いる 感《かん》じ でした が、 今《いま》 は 落《お》ち着《つ》いて います。", "I feel clear and settled. Before, I always felt as if something was chasing me, but now I'm calm."],
     1: ["八《はち》 ぐらい です。 最初《さいしょ》 に 来《き》た とき は、 五《ご》 ぐらい でした よ ね。", "About an eight. When I first came, it was about a five, wasn't it."]
    },
    quote: "すっきり しました。 (I feel clear and settled.)",
    key: [0, 1],
    need: ["Euthymic mood", "Congruent affect", "Full range affect"],
    wrong: {
     "Anxious mood": "He was anxious at the first visit. Now he says he feels clear and calm and rates his mood about 8/10.",
     "Dysphoric mood": "The low mood of the first visit came from the time he lost to the symptoms; it has lifted as the symptoms eased.",
     "Restricted affect": "He smiles, laughs a little and grows serious with the topic: a full range.",
     "Incongruent affect": "He looks as relaxed as he says he feels."
    },
    doc: "“すっきり しました。” (I feel clear and settled.) Mood about 8/10 (about 5/10 at the first visit). Euthymic mood; full range, congruent affect",
    why: "Quote his words and compare with the first visit, when he was anxious and low. すっきり means clear, refreshed, free of something that weighed on you. At the first visit he said his hands felt すっきり しない (never quite clean); hearing the same word turned round is a small, real sign of change. Check the low mood of the first visit too: it has gone with the symptoms, which fits low mood secondary to OCD."
   },
   safety: {
    ans: {
     0: ["いいえ、 ありません でした。 最初《さいしょ》 の とき も 聞《き》かれました けど、 そう 思《おも》った こと は 一度《いちど》 も ありません。", "No, I haven't. You asked me at the first visit too, but I've never once thought that."],
     1: ["消《き》えたい、 です か。 いいえ、 そういう 気持《きも》ち に なった こと も ありません。", "Wanting to disappear? No, I've never felt like that either."],
     2: ["いいえ、 ありません。 前《まえ》 は、 人《ひと》 に ばい菌《きん》 を うつして しまう の が 怖《こわ》かった だけ です。", "No, never. Before, I was only afraid that I might pass germs on to people."]
    },
    key: [0, 2],
    need: ["Denies suicidal ideation, plan, or intent", "Denies homicidal ideation"],
    wrong: {
     "Past passive death wish, none now": "He has never had thoughts of dying, at the first visit or since.",
     "Passive death wish, no plan or intent": "He has never had thoughts of dying.",
     "Homicidal ideation present (reassess)": "His old fear of passing germs on to others was an obsessional fear that he resisted, not a wish to harm anyone."
    },
    doc: "Denies suicidal ideation, plan, or intent, now and since the first visit (never had such thoughts); denies homicidal ideation (his earlier fear of passing germs on to others was an obsessional fear, not a wish to harm)",
    why: "Ask at every review, even when there were never such thoughts: mood can change over months of treatment, and the answer belongs in the record before treatment ends. Question 1 is for patients who used 消《き》えたい before; he did not, so it is optional here. In OCD, fears of harming others (here, by passing on germs) are unwanted and resisted: record them as obsessions, not as homicidal ideation, and still ask the question."
   },
   insight: {
    ans: {
     0: ["不安《ふあん》 を 消《け》そう と して 洗《あら》ったり 確《たし》かめたり する ほど、 不安《ふあん》 が 強《つよ》く なって いた ん です ね。 今《いま》 は、 不安《ふあん》 は 放《ほう》って おけば 下《さ》がる と、 体《からだ》 で わかって います。", "The more I washed and checked to get rid of the anxiety, the stronger it got. Now I know in my body that if I leave the anxiety alone, it comes down."],
     1: ["強迫症《きょうはくしょう》 が また 出《で》て きた ん だ と 思《おも》います。 自分《じぶん》 が 変《へん》 な ん じゃ なくて、 病気《びょうき》 の サイン なん だ と。", "I'd think the OCD was coming back. Not that I'm strange, but that it's a sign of the illness."]
    },
    key: [0, 1],
    need: ["Good", "Grade 6: true emotional insight"],
    ok: ["Grade 5: intellectual insight"],
    wrong: {
     Poor: "He explains the cycle of washing and anxiety in his own words.",
     "Grade 3: blames others/external factors": "He does not blame anyone; he sees the cycle in his own behaviour.",
     "Grade 4: aware, cause unknown in self": "He knows what kept the symptoms going and what to do about it."
    },
    doc: "Good (grade 6, true emotional insight): understands that washing and checking kept the anxiety going, and acts on it (lets the urges pass); would recognise a return as the OCD, not as being \"strange\"",
    why: "At the end of treatment, insight includes knowing what a relapse would look like. Grade 6 fits because the understanding changes what he does: he leaves the urges alone at busy times. Grade 5 is accepted, since an interview alone cannot always show the change in behaviour. At the first visit he thought he was just strange (自分《じぶん》 が 変《へん》 な だけ); now he names the illness, which lowers the shame that kept him from asking for help for so long."
   },
   function: {
    ans: {
     0: ["毎朝《まいあさ》 時間《じかん》 どおり に 出勤《しゅっきん》 して います。 計算《けいさん》 した 数字《すうじ》 も、 一回《いっかい》 確《たし》かめたら 次《つぎ》 に 進《すす》みます。", "I get to work on time every morning. With the figures I calculate, too, I check them once and move on."],
     1: ["よく 眠《ねむ》れて います。 朝《あさ》 も すっきり 起《お》きられます。", "I'm sleeping well. I wake up feeling fresh in the morning, too."],
     2: ["はい。 最近《さいきん》 は 妻《つま》 と また 外食《がいしょく》 する よう に なりました。 前《まえ》 は お店《みせ》 の 食器《しょっき》 が 気《き》 に なって、 行《い》けなかった ん です。", "Yes. Lately my wife and I have started eating out again. Before, the dishes at restaurants bothered me, so I couldn't go."],
     3: ["いいえ。 お酒《さけ》 は 前《まえ》 と 同《おな》じ で、 たまに 少《すこ》し 飲《の》む くらい です。 眠《ねむ》る ため に は 飲《の》みません。", "No. It's the same as before: I just have a little now and then. I don't drink to sleep."]
    },
    key: [0, 2],
    need: ["Back to usual work or school", "Social and leisure activities resumed"],
    ok: ["Daily routine and sleep regular", "Family relationships improved"],
    wrong: {
     "Partly back to work or school": "He never stopped work, and now he is on time every day and checks figures once: he is back to his usual work.",
     "Not yet back to work or school": "He is on time for work every day.",
     "Avoidance remains in some situations": "He touches door handles, uses the shared phone and eats out again. The urges at busy times are residual symptoms he lets pass, not avoidance.",
     "Alcohol no longer used to cope": "He never drank to cope: he drinks a little now and then, as at the first visit. The pick would suggest a problem he did not have."
    },
    doc: "Back to usual work: on time every day, checks figures once; sleeps well; leisure resumed (eats out with his wife again, avoided before because of restaurant dishes); alcohol a little occasionally, not used to cope",
    why: "Function shows whether the change holds in daily life. Ask for concrete examples: arriving on time and eating out again tell you more than \"I'm fine\". He was never off work, so \"back to usual work\" means his work is no longer slowed by checking. Ask about alcohol even when it was not a problem, because drinking to cope can start when symptoms return."
   },
   warning: {
    ans: {
     0: ["シャワー が また 長《なが》く なる こと です。 それ と、 妻《つま》 に 「大丈夫《だいじょうぶ》？」 って また 聞《き》き始《はじ》めたら、 危《あぶ》ない と 思《おも》います。 あと、 ストレス が たまる と、 確認《かくにん》 が 増《ふ》える か も しれません。", "My showers getting long again. And if I start asking my wife \"Is it OK?\" again, I think that's a danger sign. Also, when stress builds up, my checking might increase."],
     1: ["書《か》いた 計画《けいかく》 を 見《み》て、 練習《れんしゅう》 を 簡単《かんたん》 な ステップ から また 始《はじ》めます。 それ でも 良《よ》く ならなかったら、 ここ に 連絡《れんらく》 します。", "I'll look at the plan we wrote and start the practice again from the easy steps. If it still doesn't get better, I'll contact the clinic."],
     2: ["妻《つま》 です。 妻《つま》 も サイン を 知《し》って います。 私《わたし》 が また 聞《き》いたら、 優《やさ》しく 断《ことわ》って くれる と 思《おも》います。", "My wife. She knows the signs too. If I start asking again, I think she'll kindly say no."],
     3: ["はい、 お願《ねが》いします。 妻《つま》 に も 見《み》せて おきます。", "Yes, please. I'll show it to my wife too."]
    },
    key: [0, 1, 2],
    need: ["Names own early warning signs", "Written relapse prevention plan", "Knows how to restart the practice", "Family knows the warning signs"],
    ok: ["Knows when and how to come back"],
    wrong: {
     "Cannot yet name warning signs": "He names three in his own words: longer showers, asking Aya for reassurance again, and more checking when stressed."
    },
    doc: "Names own early warning signs (showers getting longer, asking his wife 「大丈夫《だいじょうぶ》？」 again, more checking when stressed); written relapse prevention plan, copy for him and his wife; will restart the exposure practice from the easy steps, and contact the clinic if it does not get better; wife knows the signs and how to answer without reassuring",
    why: "A relapse plan in the patient's own words is the main protection after regular sessions end. His signs are specific to him, and the reassurance question is one Aya will hear first, so her knowing the signs (with his consent) is part of the plan. Write it down together and give him a copy: under stress people forget what they planned, and a written plan tells him exactly where to restart."
   },
   medicine: {
    ans: {
     0: ["いいえ、 何《なに》 も 飲《の》んで いません。 ほか の 病院《びょういん》 に も 行《い》って いません。", "No, I'm not taking anything. I'm not going to any other hospital either."],
     1: ["いいえ、 何《なに》 も 買《か》って いません。", "No, I haven't bought anything."]
    },
    key: [0, 1],
    need: ["No psychiatric medicine", "No medicines from the pharmacy for sleep or anxiety"],
    wrong: {
     "Continues ___ (prescribed by ___)": "He takes no medicine: ERP was chosen first, and it worked.",
     "Medicine to be reviewed by ___": "There is no medicine to review. Medicine stays an option if the symptoms return."
    },
    doc: "No psychiatric medicine (ERP chosen first by shared decision); no medicines from the pharmacy for sleep or anxiety; no other doctor. Medicine remains an option if symptoms return",
    why: "Ask about all medicines, including what is bought at the pharmacy, even when none were prescribed. Record that medicine stays an option: if the OCD returns and the ladder alone does not bring it down, the next doctor can offer it without starting the discussion from nothing."
   },
   plan: {
    ans: {
     0: ["少《すこ》し 心細《こころぼそ》い です けど、 計画《けいかく》 も あります し、 やって みます。", "I feel a little uneasy, but I have the plan, so I'll give it a go."],
     1: ["最初《さいしょ》 から やり直《なお》さなくて も いい ん です ね。 それ を 聞《き》いて、 安心《あんしん》 しました。", "So I won't have to start over from the beginning. That's a relief to hear."],
     2: ["三《さん》か月後《げつご》 です ね。 わかりました。 それ まで、 自分《じぶん》 で 続《つづ》けて みます。", "In three months, then. All right. Until then, I'll keep it up on my own."]
    },
    key: [0, 1, 2],
    need: ["Regular sessions ended", "Booster session in ___ months", "Return to the clinic if symptoms come back"],
    ok: ["Letter to family doctor", "Crisis plan given (local crisis line; 119)"],
    wrong: {
     "Continue sessions every ___ weeks: goals not yet met": "The goals are met: 2/10 from 9/10, back to usual work, a written plan he can use. Regular sessions end today.",
     "Referred to ___": "Nothing needs another service: his treatment is complete here."
    },
    doc: "Regular sessions ended today (16 of 16 ERP sessions); booster session in 3 months; return to the clinic if symptoms come back, without starting from the beginning; medicine remains an option if symptoms return; written relapse plan given",
    why: "Ask how he feels about ending: a little unease is normal, and naming it lets you answer it. Ending well includes saying how to come back without starting from the beginning, so a return is part of the plan, not a failure. The booster session checks that the gains hold and gives him a date to aim for while he practises on his own. A letter to a family doctor or a crisis plan is accepted but not keyed: he has never had suicidal thoughts and no family doctor is involved in this care."
   }
  }
 },
 {
  id: "ptsd",
  title: "Mariko at her last planned session",
  level: "N3",
  dx: "Posttraumatic stress disorder, much improved after trauma-focused cognitive behavioural therapy; residual avoidance of the interchange",
  decision: { end: true, why: "Regular sessions can end today. The target symptoms are much improved (self-rated 8/10 at the start, 3/10 now): nightmares from several a week to about once a month, no flashbacks, and she grounds herself when brakes make her jump. She drives on ordinary roads again, takes Hiroto to school, has kept working, sleeps much better, and has not used beer to sleep for two months. Asked again, she has had no death wish since the first visit, and no thoughts of harming anyone. What remains is named honestly: the startle and the avoidance of the interchange where the crash happened. She knows how to keep practising on her own, names her own warning signs, and has a written plan. The predictable risk is the anniversary of the crash in about two months; the plan covers it: she will contact the clinic if the signs come back, and she will not have to start from the beginning. The letter to her family doctor, who referred her, keeps someone who sees her regularly informed. Continuing weekly sessions for a residual avoidance she can practise alone would add little, and ending as planned tells her she can manage it." },
  setting: "Outpatient clinic, end-of-treatment review: the 12th and last planned session, about four months after the first visit. Mariko Inoue, 42, works part-time at a supermarket and lives with her husband and their son Hiroto, 8. She came alone today. You saw her at the first visit and through the treatment under supervision. Do not ask her to retell the crash: the review is about how she lives now. Staff address her as Inoue-san.",
  chart: [
   "First visit about four months ago (referred by her family doctor; six months after a truck hit her car from behind on the expressway, with Hiroto in the car): nightmares, flashbacks set off by brake sounds, no longer driving and avoiding the expressway, startle, irritability, poor sleep, guilt about frightening her son, a glass of beer before bed on more nights. One past passive death wish, none then, no plan or intent. Mood anxious; insight good. Provisional PTSD.",
   "Plan agreed: trauma-focused cognitive behavioural therapy, 12 sessions, weekly and then every two weeks; grounding and sleep routine; the beer reviewed within the sleep plan; graded driving practice; letter to her family doctor; ask whether Hiroto needs support. No medicine.",
   "Course: attended all 12 sessions. Grounding learned early and used at home. The trauma memory was worked on in planned sessions at her own pace. Driving practice step by step: ordinary roads, then a short stretch of the expressway twice in daylight. Stopped the beer about two months ago. Guilt about Hiroto eased (the truck hit them; it was not her fault). Hiroto saw the school counsellor twice and is doing well.",
   "Today: the last planned session. Review the change since the first visit, a short review MSE, safety asked again, the relapse plan (the anniversary of the crash is in about two months), and decide whether regular sessions can end."
  ],
  fields: {
   course: {
    ans: {
     0: ["はい、 十二回《じゅうにかい》 全部《ぜんぶ》 来《こ》られました。", "Yes, I was able to come to all twelve.", "Mariko"],
     1: ["落《お》ち着《つ》く 練習《れんしゅう》 は、 ほぼ 毎日《まいにち》 しました。 運転《うんてん》 の 練習《れんしゅう》 も、 決《き》めた とおり に 少《すこ》し ずつ 続《つづ》けました。", "I did the calming practice almost every day. I kept up the driving practice little by little, as we planned.", "Mariko"],
     2: ["音《おと》 で びくっと した とき に、 足《あし》 の 裏《うら》 を 床《ゆか》 に つけて、 見《み》える もの を 三《みっ》つ 数《かぞ》える 方法《ほうほう》 です。 今《いま》 でも 使《つか》って います。", "The way of putting my feet flat on the floor and counting three things I can see, when a sound makes me jump. I still use it.", "Mariko"],
     3: ["事故《じこ》 の こと に 向《む》き合《あ》う 回《かい》 は、 正直《しょうじき》 つらかった です。 でも、 自分《じぶん》 の ペース で いい と 言《い》って いただけた ので、 続《つづ》けられました。", "Honestly, the sessions where I faced the accident were hard. But you told me I could go at my own pace, so I was able to keep going.", "Mariko"]
    },
    key: [0, 1, 2],
    need: ["Attended all planned sessions", "Practised between sessions most weeks"],
    wrong: {
     "Missed several sessions": "She came to all twelve sessions.",
     "Rarely practised between sessions": "She grounded herself almost every day and kept up the driving practice as planned.",
     "Family took part in ___ session(s)": "No family member came to her sessions. Hiroto's support was separate: he saw the school counsellor twice."
    },
    doc: "Trauma-focused CBT, 12 sessions over about four months (weekly, then every two weeks); attended all; practised grounding almost daily and graded driving practice as planned; trauma memory worked on in planned sessions at her own pace. Son seen twice by the school counsellor (separately)",
    why: "Write what was given, how much, and how she used it: if the symptoms return, the next doctor knows what worked (grounding, graded practice) and what to restart. Ask what was hard, too, and accept the answer as it comes: she can say the memory sessions were painful without describing them. At a review you never ask her to go back through the crash; the work on the memory belonged to the planned sessions, and it is finished."
   },
   change: {
    ans: {
     0: ["夜《よる》 の 怖《こわ》い 夢《ゆめ》 と、 ブレーキ の 音《おと》 でした。 夢《ゆめ》 は 週《しゅう》 に 何回《なんかい》 も 見《み》て いました が、 今《いま》 は 月《つき》 に 一回《いっかい》 ぐらい です。 あの 日《ひ》 に 戻《もど》った みたい に なる こと も、 もう ありません。", "The frightening dreams at night, and the sound of brakes. I used to have the dreams several times a week; now it's about once a month. And I no longer feel as if I'm back on that day.", "Mariko"],
     1: ["最初《さいしょ》 は 八《はち》 ぐらい でした。 今《いま》 は 三《さん》 ぐらい です。", "At first it was about an eight. Now it's about a three.", "Mariko"],
     2: ["また 普通《ふつう》 の 道《みち》 を 運転《うんてん》 できる よう に なって、 毎朝《まいあさ》 大翔《ひろと》 を 学校《がっこう》 まで 送《おく》って います。 高速道路《こうそくどうろ》 も、 昼間《ひるま》 に 少《すこ》し だけ、 二回《にかい》 走《はし》りました。", "I can drive on ordinary roads again, and I take Hiroto to school every morning. I've also driven a short stretch of the expressway twice, in the daytime.", "Mariko"],
     3: ["ブレーキ の 音《おと》 に は、 まだ びくっと します。 でも、 足《あし》 を 床《ゆか》 に つけて、 すぐ 落《お》ち着《つ》けます。 事故《じこ》 が あった インターチェンジ の あたり は、 まだ 避《さ》けて います。", "Brake sounds still make me jump. But I put my feet on the floor and calm down quickly. I still avoid the area around the interchange where the accident happened.", "Mariko"]
    },
    key: [0, 1, 2, 3],
    need: ["Much improved", "Self-rated ___/10 at start, ___/10 now", "Residual symptoms: ___"],
    ok: ["Improved"],
    wrong: {
     "Minimally improved": "She rates 8/10 at the start and 3/10 now, and she drives again.",
     Unchanged: "Nightmares fell from several a week to about once a month, and the flashbacks have stopped.",
     Worse: "Every target symptom is better."
    },
    doc: "Much improved: nightmares from several a week to about once a month; no flashbacks; drives on ordinary roads and takes her son to school; drove a short stretch of the expressway twice in daylight as planned practice. Self-rated 8/10 at start, 3/10 now. Residual: startle at brake sounds (grounds herself quickly); avoids the interchange where the crash happened, will keep practising",
    why: "Compare each target symptom with the first visit (intrusion, avoidance, arousal) and get her own numbers, then and now. Asking what is still difficult is what makes the review honest: the startle and the interchange are real residual symptoms. Name them in the record and in the plan, so that \"much improved\" does not hide them and she knows that what remains is something to keep practising, not a failure."
   },
   mood: {
    obs: "Sits back in the chair today, her bag beside her rather than held on her lap. Relaxed face and voice; smiles when she talks about driving Hiroto to school. Her eyes fill a little when she thanks you at the end, and she laughs at herself for it. No startle during the session.",
    ans: {
     0: ["だいぶ 楽《らく》 に なりました。 前《まえ》 は ずっと 気《き》 が 張《は》って いました けど、 今《いま》 は 普通《ふつう》 に 過《す》ごせて います。", "Things have become much easier. Before, I was on edge all the time, but now I can get through the day normally.", "Mariko"],
     1: ["七《なな》 ぐらい です。 初《はじ》めて 来《き》た とき は 四《よん》 でした ね。", "About a seven. When I first came, it was a four, wasn't it.", "Mariko"]
    },
    quote: "だいぶ 楽《らく》 に なりました。 (Things have become much easier.)",
    key: [0, 1],
    need: ["Euthymic mood", "Congruent affect"],
    ok: ["Full range affect"],
    wrong: {
     "Anxious mood": "At the first visit she was on edge all the time. Today she says she gets through the day normally and rates her mood 7/10.",
     "Dysphoric mood": "Her tears come when she thanks you: they are gratitude, not low mood.",
     "Labile affect": "Each change has a clear reason: she smiles about Hiroto and is moved when she says goodbye.",
     "Restricted affect": "She smiles, laughs at herself and is moved: her affect has a full range."
    },
    doc: "“だいぶ 楽《らく》 に なりました。” (Things have become much easier.) Mood 7/10 (4/10 at the first visit). Euthymic mood; full range, congruent affect; a little tearful when thanking the doctor at the end",
    why: "Quote her words and compare with the first visit: then 「ずっと 気《き》 が 張《は》って いる 感《かん》じ です」 (on edge all the time) and 4/10, now euthymic and 7/10. Tears at the last session are common and fit the moment: record them with their reason, so a reader does not take them for low mood."
   },
   safety: {
    ans: {
     0: ["いいえ。 初《はじ》めて 来《き》た とき に お話《はな》し して から、 一度《いちど》 も ありません。", "No. Not once since I told you about it at my first visit.", "Mariko"],
     1: ["いいえ。 あの とき 死《し》んで いたら 楽《らく》 だった のに、 と いう 気持《きも》ち は、 もう 戻《もど》って きて いません。", "No. The feeling that it would have been easier if I had died then hasn't come back.", "Mariko"],
     2: ["いいえ、 ありません。", "No, I haven't.", "Mariko"]
    },
    key: [0, 1, 2],
    need: ["Denies suicidal ideation, plan, or intent", "Past passive death wish, none now", "Denies homicidal ideation"],
    wrong: {
     "Passive death wish, no plan or intent": "The passive wish was once, before the first visit. She has had none since.",
     "Active suicidal ideation (do not end treatment; reassess)": "She denies any thoughts of dying, plan or intent."
    },
    doc: "Denies suicidal ideation, plan or intent. One past passive death wish before the first visit (“あの とき 死《し》んで いたら 楽《らく》 だった のに”), none since. Denies homicidal ideation. Crisis plan repeated",
    why: "Ask again at the last session, even when the answer has been no for months: the record must show it was checked on the day treatment ended. Question 2 is written for 消《き》えたい; adapt it to the words she used at the first visit (あの とき 死《し》んで いたら 楽《らく》 だった のに), as here. Write the past wish and its absence now as two separate facts."
   },
   insight: {
    ans: {
     0: ["怖《こわ》い 出来事《できごと》 の 後《あと》 の、 自然《しぜん》 な 反応《はんのう》 だった ん です ね。 避《さ》ける ほど 怖《こわ》く なる こと も わかりました。 それ に、 事故《じこ》 は 私《わたし》 の せい では なかった と、 今《いま》 は 思《おも》えます。", "It was a natural reaction after a frightening event. I also learned that the more I avoid things, the more frightening they get. And now I can think that the accident was not my fault.", "Mariko"],
     1: ["事故《じこ》 の 反応《はんのう》 が また 出《で》て きた ん だ と 思《おも》います。 一人《ひとり》 で 抱《かか》えないで、 早《はや》め に 連絡《れんらく》 します。", "I'd think the reaction to the accident was coming back. I wouldn't carry it alone; I'd get in touch early.", "Mariko"]
    },
    key: [0, 1],
    need: ["Good", ["Grade 6: true emotional insight", "Grade 5: intellectual insight"]],
    wrong: {
     Fair: "She explains the reaction, the role of avoidance and what she would do if it came back.",
     Poor: "She understands what happened to her and acts on it.",
     "Grade 3: blames others/external factors": "She knows the truck caused the crash, and she also understands her own reaction to it; she does not blame others for her symptoms."
    },
    doc: "Good (grade 6): understands her symptoms as a reaction to a frightening event and that avoidance keeps fear going; no longer blames herself for the crash; would recognise a return and seek help early",
    why: "Grade 6 because the understanding has changed what she does: she drives again, practises the places she avoided and grounds herself. Grade 5 is accepted if you weigh the interchange she still avoids. The eased guilt is part of her insight: 「私《わたし》 の せい では なかった」 is a changed belief, not only knowledge."
   },
   function: {
    ans: {
     0: ["仕事《しごと》 は ずっと 休《やす》まず 続《つづ》けて います。 前《まえ》 より 仕事《しごと》 に 集中《しゅうちゅう》 できる よう に なりました。", "I've kept working the whole time without taking time off. I can concentrate on work better than before.", "Mariko"],
     1: ["ずいぶん よく 眠《ねむ》れる よう に なりました。 夜中《よなか》 に 目《め》 が 覚《さ》める こと も、 少《すく》なく なりました。", "I sleep much better now. I wake up in the night much less, too.", "Mariko"],
     2: ["はい。 週末《しゅうまつ》 は 家族《かぞく》 で 出《で》かけます。 大翔《ひろと》 に いらいら する こと も 減《へ》りました。", "Yes. At weekends we go out as a family. And I snap at Hiroto less.", "Mariko"],
     3: ["いいえ、 もう 二《に》か月《げつ》 飲《の》んで いません。 飲《の》まなくて も 眠《ねむ》れます。", "No, I haven't had any for two months. I can sleep without it.", "Mariko"]
    },
    key: [0, 1, 3],
    need: ["Daily routine and sleep regular", "Avoidance remains in some situations", "Alcohol no longer used to cope"],
    ok: ["Back to usual work or school", "Social and leisure activities resumed", "Family relationships improved"],
    wrong: {
     "Sleep still poor": "She sleeps much better and wakes in the night much less.",
     "Not yet back to work or school": "She has kept working throughout.",
     "Partly back to work or school": "She works her usual part-time job; she was never off."
    },
    doc: "Kept working part-time throughout, concentrates better; sleep much better, wakes less in the night; family outings at weekends, less irritable with her son; no alcohol to sleep for two months; drives on ordinary roads; still avoids the interchange where the crash happened",
    why: "Function shows the change in daily life: driving Hiroto to school, sleep without beer, outings as a family. Ask about the beer directly, because drinking to sleep was growing at the first visit; two months without it is worth recording. Keep the residual avoidance here too: it limits where she drives, and it is what she will go on practising."
   },
   warning: {
    ans: {
     0: ["怖《こわ》い 夢《ゆめ》 が また 増《ふ》える こと と、 運転《うんてん》 を 避《さ》けたく なる こと です。 大翔《ひろと》 に いらいら したり、 寝《ね》る 前《まえ》 に ビール が 欲《ほ》しく なったり したら、 それ も サイン だ と 思《おも》います。", "The frightening dreams coming more often, and wanting to avoid driving. If I start snapping at Hiroto or wanting beer before bed, I think that's a sign too.", "Mariko"],
     1: ["まず 足《あし》 の 裏《うら》 を 床《ゆか》 に つけて、 落《お》ち着《つ》きます。 運転《うんてん》 の 練習《れんしゅう》 も 続《つづ》けます。 それ でも 二週間《にしゅうかん》 ぐらい 良《よ》く ならなかったら、 こちら に 連絡《れんらく》 します。", "First I'll put my feet on the floor and calm down. I'll keep up the driving practice too. If it still isn't better after about two weeks, I'll contact the clinic.", "Mariko"],
     2: ["夫《おっと》 です。 夜《よる》 に うなされて いたら、 夫《おっと》 が 気《き》づいて くれます から。", "My husband. If I'm having bad dreams at night, he notices.", "Mariko"],
     3: ["はい、 お願《ねが》い します。 書《か》いて おけば、 忘《わす》れません ね。", "Yes, please. If it's written down, I won't forget.", "Mariko"]
    },
    key: [0, 1, 2, 3],
    need: ["Names own early warning signs", "Written relapse prevention plan", "Knows how to restart the practice", "Knows when and how to come back"],
    ok: ["Family knows the warning signs"],
    wrong: { "Cannot yet name warning signs": "She names more nightmares, avoiding driving, irritability with Hiroto and wanting beer to sleep." },
    doc: "Names own warning signs (more nightmares, wanting to avoid driving, irritability with her son, wanting beer before bed); will ground herself and keep up driving practice; will contact the clinic if not better in about two weeks; husband notices the nightmares; plan written together. Anniversary of the crash in about two months discussed as a time to watch",
    why: "Her own words make the best warning signs: she names two old symptoms coming back and two ways she used to cope (snapping at Hiroto, beer). Name the predictable risk with her: anniversaries often bring symptoms back for a while, and knowing that in advance makes a return less frightening and easier to act on early."
   },
   medicine: {
    ans: {
     0: ["いいえ、 何《なに》 も 飲《の》んで いません。", "No, I'm not taking anything.", "Mariko"],
     1: ["いいえ。 眠《ねむ》る ため に 買《か》った もの も ありません。 ビール も やめました。", "No. I haven't bought anything for sleep either. I've stopped the beer as well.", "Mariko"]
    },
    key: [0, 1],
    need: ["No psychiatric medicine", "No medicines from the pharmacy for sleep or anxiety"],
    wrong: { "Continues ___ (prescribed by ___)": "She takes no medicine; the treatment was psychotherapy alone." },
    doc: "No psychiatric medicine; nothing from the pharmacy for sleep or anxiety; no alcohol to sleep",
    why: "Ask about the pharmacy as well as prescriptions: someone who drank to sleep may move to something else for sleep when she stops. Her answer, with the beer stopped, shows the sleep improved without a substitute."
   },
   plan: {
    ans: {
     0: ["少《すこ》し 寂《さび》しい です けど、 もう 大丈夫《だいじょうぶ》 だ と 思《おも》います。 本当《ほんとう》 に ありがとう ございました。", "I'm a little sad, but I think I'll be all right now. Thank you so much.", "Mariko"],
     1: ["はい。 事故《じこ》 から 一年《いちねん》 に なる 頃《ころ》 に、 また 夢《ゆめ》 が 増《ふ》えたら、 連絡《れんらく》 します。 最初《さいしょ》 から やり直《なお》さなくて いい と 聞《き》いて、 安心《あんしん》 しました。", "Yes. If the dreams increase again around a year after the accident, I'll get in touch. It's a relief to hear I won't be starting from the beginning.", "Mariko"],
     3: ["はい、 お願《ねが》い します。 かかりつけ の 先生《せんせい》 に も、 お礼《れい》 を 言《い》いたい です。", "Yes, please. I'd like to thank my family doctor too.", "Mariko"],
     4: ["はい、 わかりました。 今《いま》 は そう いう 気持《きも》ち は ありません けど、 覚《おぼ》えて おきます。", "Yes, I understand. I don't have feelings like that now, but I'll remember.", "Mariko"]
    },
    key: [0, 1, 3, 4],
    need: ["Regular sessions ended", "Letter to family doctor", "Return to the clinic if symptoms come back", "Crisis plan given (local crisis line; 119)"],
    wrong: {
     "Continue sessions every ___ weeks: goals not yet met": "The goals are met. The avoidance that remains is something she can practise on her own.",
     "Booster session in ___ months": "No booster was agreed for her: she returns if the signs come back, and her family doctor is informed.",
     "Referred to ___": "No referral is needed; her family doctor, who referred her, receives a letter."
    },
    doc: "Regular sessions ended as planned after 12 sessions; letter to her family doctor; return to the clinic if symptoms come back (for example around the anniversary of the crash), without starting from the beginning; crisis plan repeated (local crisis line; 119 in an emergency)",
    why: "Ask how she feels about ending before you give the plan: some sadness at the last session is normal, and saying it helps her leave well. Tell her plainly how to come back and that she will not start from the beginning. The letter closes the loop with the doctor who referred her and who will see her for years. Repeat the crisis plan even though she has had no death wish for months: it costs one sentence."
   }
  }
 },
 {
  id: "hinata",
  title: "Hinata at her planned review",
  level: "N4",
  dx: "School refusal, improved: partly back at school; fear of speaking in front of the class and of others' judgment remains (social anxiety features; assess whether they meet criteria)",
  decision: { end: false, why: "Not yet: continue sessions every two weeks for about two months, then review again. She has improved: self-rating 9/10 at the start and 5/10 now, full school days three days a week, stomach-aches rare, in bed by eleven, and her mother has stopped pushing. 消《き》えたい has not come back for two months (asked again today; she denies a wish to die, a plan or self-harm). But the main goal is not met: she is still very afraid of speaking in front of the class, she spends two days a week in the counselling room, and she says herself that ending now makes her nervous. The next sessions focus on speaking in class and fear of others' judgment, starting with the small-group presentation her teacher agreed to, with school liaison continuing with her consent. A review can decide to continue; say so as a plan, not a failure." },
  setting: "Child and adolescent outpatient clinic, end-of-treatment review: the planned review after 10 sessions over four months. Hinata Matsumoto, 14, in her second year of junior high school, comes with her mother, Yuka Matsumoto, 46. Her mother is in the room for the first part (treatment course, change in symptoms). You then see Hinata alone for the review MSE and daily life (mood, safety, insight, functioning). Her mother comes back for the last part (warning signs, medicines, plan). You saw Hinata at the first visit and through the treatment under supervision. As at the first visit, before seeing her alone you remind her that what she says stays between you unless she agrees, except when someone is in danger. Staff call her Hinata-san.",
  chart: [
   "First visit four months ago, with her mother: had not gone to school for two months after she froze during a class presentation and two classmates mocked her in a group chat (since stopped). Stomach-aches and headaches on school mornings, gone by noon at weekends; late nights in her room. Passive wish to disappear (消《き》えたい) without a wish to die, plan or self-harm. Anxious mood; insight fair (grade 3); social anxiety to be assessed.",
   "Plan agreed with Hinata and her mother: outpatient sessions with a step-by-step cognitive behavioural approach, 10 sessions over four months, seen alone and with her mother: a regular wake-up time, small steps back to school, talking with the school counsellor with her consent, and support for her mother without blame. No medicine.",
   "Course: a fixed wake-up time first, then mornings in the school's counselling room, then single lessons, then full days. Her mother took part in four sessions and stopped pushing her. The school counsellor met with her, with her consent. 消《き》えたい asked about at every session; last reported two months ago. Now full days in class three days a week and the counselling room on the other two; stomach-aches rare.",
   "Today: the planned review. Review the course, safety and daily life, and decide whether regular sessions can end. Her teacher has agreed that she may first give a presentation to a small group."
  ],
  fields: {
   course: {
    ans: {
     0: ["……十回《じゅっかい》、 全部《ぜんぶ》 来《き》た。", "...I came to all ten.", "Hinata"],
     1: ["……だいたい できた。 できなかった 週《しゅう》 も、 ちょっと あった。", "...Mostly I did it. There were a few weeks I didn't.", "Hinata"],
     2: ["小《ちい》さい 一歩《いっぽ》 ずつ やった こと。 あと、 ここ で 話《はな》せた こと。", "Doing it one small step at a time. And being able to talk here.", "Hinata"],
     3: ["私《わたし》 は、 最初《さいしょ》 は、 無理《むり》 に 行《い》かせない よう に する の が 大変《たいへん》 でした。 つい 何《なに》 か 言《い》いたく なって しまって。", "For me, at first, the hard part was not making her go. I kept wanting to say something.", "Mrs. Matsumoto (mother)"]
    },
    key: [0, 1],
    need: ["Attended all planned sessions", "Practised between sessions most weeks", "Family took part in ___ session(s)"],
    ok: ["Practised between sessions some weeks"],
    wrong: {
     "Missed several sessions": "She came to all ten sessions.",
     "Rarely practised between sessions": "She says she mostly did the practice, missing only a few weeks."
    },
    doc: "Ten outpatient sessions over four months (step-by-step return to school, regular wake-up time, school counsellor with consent); attended all; practised between sessions most weeks; mother took part in four sessions and found it hard at first not to push",
    why: "Write what was given, how much, and how it was used. With a teenager, family involvement is part of the treatment: her mother learning to stop pushing is one of the changes, and her answer about what was hard tells you she has understood why."
   },
   change: {
    ans: {
     0: ["学校《がっこう》 に 行《い》けなかった こと と、 お腹《なか》 が 痛《いた》かった こと。 今《いま》 は、 お腹《なか》 は たまに しか 痛《いた》く ならない。", "Not being able to go to school, and my stomach hurting. Now my stomach only hurts once in a while.", "Hinata"],
     1: ["最初《さいしょ》 は 九《きゅう》。 今《いま》 は 五《ご》 くらい。", "At first, a nine. Now about a five.", "Hinata"],
     2: ["朝《あさ》、 自分《じぶん》 で 起《お》きて、 学校《がっこう》 に 行《い》ける。", "In the morning I get up by myself and can go to school.", "Hinata"],
     3: ["クラス の 前《まえ》 で 話《はな》す の は、 まだ すごく 怖《こわ》い。 でも 担任《たんにん》 の 先生《せんせい》 が、 最初《さいしょ》 は 小《ちい》さい グループ で いい って 言《い》って くれた。", "Talking in front of the class is still really scary. But my homeroom teacher told me that at first a small group is fine.", "Hinata"]
    },
    key: [1, 3],
    need: ["Improved", "Self-rated ___/10 at start, ___/10 now", "Residual symptoms: ___"],
    wrong: {
     "Much improved": "She is better, but she rates 5/10 now and the fear of speaking in class, the core of the problem, is still strong. Much improved would hide the goal that is not yet met.",
     "Minimally improved": "She went from 9/10 to 5/10, is back in class three full days a week, and the stomach-aches are rare: that is more than minimal.",
     Unchanged: "She rates 9/10 at the start and 5/10 now.",
     Worse: "She rates 9/10 at the start and 5/10 now."
    },
    doc: "Improved: self-rated 9/10 at start, 5/10 now; stomach-aches rare; gets up by herself and goes to school. Residual symptoms: still very afraid of speaking in front of the class (\"まだ すごく 怖《こわ》い\"); her teacher has agreed she may first present to a small group",
    why: "Get both numbers and say what remains honestly. Halfway down the scale, with the main fear still strong, is real progress but not the end: the residual symptom is exactly what the next sessions will target."
   },
   mood: {
    obs: "Seen alone. Sits upright and looks at you when she answers, more than at the first visit. Smiles briefly when she talks about getting up by herself. Her face tightens and she looks down when presentations come up, then settles.",
    ans: {
     0: ["……前《まえ》 より 楽《らく》。 でも、 発表《はっぴょう》 の こと を 考《かんが》える と、 ちょっと 怖《こわ》く なる。", "...Easier than before. But when I think about presentations, I get a bit scared.", "Hinata"],
     1: ["……六《ろく》 くらい。", "...About a six.", "Hinata"]
    },
    quote: "前《まえ》 より 楽《らく》。 (Easier than before.)",
    key: [0, 1],
    need: ["Euthymic mood", "Congruent affect"],
    ok: ["Anxious mood", "Full range affect"],
    wrong: {
     "Dysphoric mood": "She says things are easier than before and rates her mood 6/10; she does not describe low mood.",
     "Restricted affect": "She smiles, then looks anxious when presentations come up, then settles: her affect moves with what she talks about.",
     "Flat affect": "Her face changes with the topic.",
     "Incongruent affect": "Her tense face when presentations come up fits the fear she describes."
    },
    doc: "\"前《まえ》 より 楽《らく》。\" (Easier than before.) Mood about 6/10 (about 4/10 at the first visit). Euthymic mood, anxious when presentations come up; affect congruent, brighter than at the first visit",
    why: "Quote her own short words, give the number, and compare with the first visit, when she said 怖《こわ》い and rated her mood about four. The anxiety that comes back when presentations are mentioned is not her general mood, but it is worth writing down: it points to the goal not yet met."
   },
   safety: {
    obs: "Seen alone. Answers calmly and looks at you; no hesitation.",
    ans: {
     0: ["……ない。 死《し》にたい とか は 思《おも》って ない。 何《なに》 も して ない。", "...No. I haven't thought anything like wanting to die. I haven't done anything.", "Hinata"],
     1: ["……ううん、 もう 二《に》か月《げつ》 くらい ない。", "...No. Not for about two months now.", "Hinata"],
     2: ["……ない。", "...No.", "Hinata"]
    },
    key: [0, 1, 2],
    need: ["Past passive death wish, none now", "Denies suicidal ideation, plan, or intent", "Denies homicidal ideation"],
    wrong: {
     "Passive death wish, no plan or intent": "The wish to disappear has not come back for two months. Record it as past, with today's denial.",
     "Active suicidal ideation (do not end treatment; reassess)": "She denies thoughts of dying, a plan and intent.",
     "Homicidal ideation present (reassess)": "She has no thoughts of hurting anyone."
    },
    doc: "Past passive wish to disappear (\"消《き》えたい\"; nearest pick: past passive death wish), none for about two months (asked again today); denies suicidal ideation, plan or intent; denies self-harm; denies homicidal ideation",
    why: "Ask about 消《き》えたい at every review, in her own word, even when it has gone: it went away during treatment, and it could come back with stress. Asking alone, calmly and directly, makes it easy for her to say if it ever returns. Its absence is one reason the plan can stay at every two weeks, but it does not by itself mean treatment can end."
   },
   insight: {
    ans: {
     0: ["……心配《しんぱい》 する と、 本当《ほんとう》 に お腹《なか》 が 痛《いた》く なる。 仮病《けびょう》 じゃ なかった。", "...When I worry, my stomach really does hurt. I wasn't faking.", "Hinata"],
     1: ["……また 心配《しんぱい》 が 強《つよ》く なってる の かな、 って 思《おも》う。", "...I'd think maybe the worry is getting strong again.", "Hinata"]
    },
    key: [0, 1],
    need: [["Fair", "Good"], ["Grade 5: intellectual insight", "Grade 4: aware, cause unknown in self"]],
    wrong: {
     Poor: "She explains in her own words how worry causes the stomach-aches.",
     "Grade 3: blames others/external factors": "At the first visit she said the pain was because of school. Now she places it in her own worry: that is a step past grade 3.",
     "Grade 6: true emotional insight": "She understands the link between worry and pain, but the understanding has not yet changed what she can do about the fear that matters most: speaking in front of the class."
    },
    doc: "Fair (grade 5, up from grade 3 at the first visit): knows that worry causes the stomach-aches (\"心配《しんぱい》 する と、 本当《ほんとう》 に お腹《なか》 が 痛《いた》く なる\"); would read a return of the symptoms as the worry growing again",
    why: "Compare with the first visit, when she said 学校《がっこう》 の せい. She now sees the worry inside herself, which is grade 5. Fair rather than good, because the fear of others' judgment still drives what she avoids; insight grows further as she practises speaking in class."
   },
   function: {
    ans: {
     0: ["週《しゅう》 に 三日《みっか》 は、 朝《あさ》 から 最後《さいご》 まで 教室《きょうしつ》 に いる。 ほか の 二日《ふつか》 は 相談室《そうだんしつ》。", "Three days a week I'm in class from morning to the end. The other two days, the counselling room.", "Hinata"],
     1: ["学校《がっこう》 の ある 日《ひ》 は、 十一時《じゅういちじ》 に は 寝《ね》てる。", "On school days I'm in bed by eleven.", "Hinata"],
     2: ["ゲーム は 今《いま》 も する。 でも、 夜《よる》 は 早《はや》め に やめる。 友達《ともだち》 と も、 また 少《すこ》し 話《はな》す よう に なった。", "I still play games. But at night I stop early. And I've started talking a bit with friends again.", "Hinata"],
     3: ["……飲《の》まない。 まだ 中学生《ちゅうがくせい》 だ し。", "...I don't drink. I'm still in junior high.", "Hinata"]
    },
    key: [0, 1],
    need: ["Partly back to work or school", "Daily routine and sleep regular"],
    ok: ["Avoidance remains in some situations", "Social and leisure activities resumed", "Family relationships improved"],
    wrong: {
     "Back to usual work or school": "She is in class three full days a week and in the counselling room on the other two: partly back, not fully.",
     "Not yet back to work or school": "She attends full days in class three days a week.",
     "Sleep still poor": "She is in bed by eleven on school nights and gets up by herself."
    },
    doc: "Partly back to school: full days in class three days a week, the school's counselling room on the other two; in bed by eleven on school nights, gets up by herself; still plays games but stops early; talking with friends again; still avoids speaking in front of the class. No alcohol",
    why: "Ask for concrete days and times: \"three full days and two in the counselling room\" tells you much more than \"going to school\". Partly back is the honest word. Ask about alcohol in plain words even with a 14-year-old, without judgement, and while she is alone. The form's question says 今《いま》 も (still), which fits someone who drank to cope before; for a teenager with no history of drinking, leave it out and simply ask whether she drinks."
   },
   warning: {
    ans: {
     0: ["朝《あさ》、 また お腹《なか》 が 痛《いた》く なる こと。 あと、 夜《よる》 遅《おそ》く まで 部屋《へや》 に こもる こと、 かな。", "My stomach hurting in the mornings again. And staying shut in my room until late at night, I guess.", "Hinata"],
     1: ["お母《かあ》さん か、 相談室《そうだんしつ》 の 先生《せんせい》 に 言《い》う。 消《き》えたい って 思《おも》ったら、 ここ に も 言《い》う。", "I'll tell my mother or the counsellor at school. If I feel like I want to disappear, I'll tell you here too.", "Hinata"],
     2: ["私《わたし》 も 気《き》 を つけて 見《み》て います。 朝《あさ》 お腹《なか》 が 痛《いた》い 日《ひ》 が 増《ふ》えたら、 怒《おこ》らないで、 本人《ほんにん》 に 聞《き》いて みます。", "I'll keep an eye out too. If the mornings with stomach-aches start to increase, I won't scold her; I'll ask her about it.", "Mrs. Matsumoto (mother)"],
     3: ["……うん、 書《か》く。", "...Okay, I'll write it.", "Hinata"]
    },
    key: [0, 1],
    need: ["Names own early warning signs", "Family knows the warning signs"],
    ok: ["Written relapse prevention plan", "Knows when and how to come back", "Knows how to restart the practice"],
    wrong: {
     "Cannot yet name warning signs": "She names stomach-aches on school mornings and staying shut in her room late at night."
    },
    doc: "Names own warning signs (stomach-aches on school mornings again; staying shut in her room late at night); will tell her mother or the school counsellor, and the clinic if 消《き》えたい returns; mother knows the signs and will ask rather than scold; plan written together",
    why: "Even when sessions continue, write the warning signs down now: in her own words they are the early signs from her first visit. She says 消《き》えたい in front of her mother by her own choice, as agreed at the first visit; you do not raise it for her. Her mother's answer matters as much as hers: asking instead of scolding is what keeps the early signs talked about."
   },
   medicine: {
    ans: {
     0: ["……飲《の》んで ない。", "...I'm not taking anything.", "Hinata"],
     1: ["いいえ、 何《なに》 も 買《か》って いません。", "No, we haven't bought anything.", "Mrs. Matsumoto (mother)"]
    },
    key: [0, 1],
    need: ["No psychiatric medicine"],
    ok: ["No medicines from the pharmacy for sleep or anxiety"],
    wrong: {
     "Continues ___ (prescribed by ___)": "She takes no medicine; the plan has been sessions and small steps back to school.",
     "Supplements or other medicines: ___": "Her mother says they have bought nothing."
    },
    doc: "No psychiatric medicine; nothing from the pharmacy (mother confirms)",
    why: "With a teenager, ask both her and the parent: parents often buy the medicines. At the first visit she asked whether medicine would make school less scary; it was kept for later if needed, and it can be discussed again with her and her mother if progress stops."
   },
   plan: {
    ans: {
     0: ["……まだ 終《お》わる の は 不安《ふあん》。 発表《はっぴょう》 が まだ 怖《こわ》い し。", "...I'm still nervous about ending. Presentations still scare me.", "Hinata"],
     1: ["ありがとう ございます。 安心《あんしん》 しました。", "Thank you. That's a relief.", "Mrs. Matsumoto (mother)"],
     4: ["……うん、 わかった。", "...Okay, got it.", "Hinata"],
     5: ["……うん、 その ほう が いい。 二週間《にしゅうかん》 に 一回《いっかい》 なら 来《こ》られる。", "...Yeah, that's better. I can come once every two weeks.", "Hinata"]
    },
    key: [0, 5],
    need: ["Continue sessions every ___ weeks: goals not yet met", "School liaison continues with consent"],
    ok: ["Crisis plan given (local crisis line; 119)", "Return to the clinic if symptoms come back"],
    wrong: {
     "Regular sessions ended": "The main goal, speaking in front of the class, is not yet met, and she says herself she is not ready to end.",
     "Booster session in ___ months": "A booster session follows the end of regular sessions. Today the decision is to continue every two weeks."
    },
    doc: "Continue sessions every 2 weeks for about 2 months: goals not yet met (speaking in front of the class, fear of others' judgment), starting with the small-group presentation her teacher agreed to; school liaison continues with her consent; crisis plan repeated (local crisis line; 119); review again in about 2 months",
    why: "A review can decide to continue. Say it plainly, name the goal still to reach, and give a time frame and a date to review again, so that continuing is a plan, not a failure. Ask her first how she feels about ending: here her own answer supports the decision."
   }
  }
 }
]);
