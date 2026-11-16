/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* End-of-treatment review practice cases, part 2 (0.22.0): an outpatient at his last planned session. Same shape as psych-eot-cases-1.js, decision: { end, why }. Id: panic (Daiki Okada, the patient of the panic simulation, first-visit MSE and emergency-department discharge cases). Fictional patient. */
window.PSYCH_EOT_CASES = (window.PSYCH_EOT_CASES || []).concat([
 {
  id: "panic",
  title: "Daiki at his last session",
  level: "N3",
  dx: "Panic disorder, much improved after cognitive behavioural therapy; residual tension in long tunnels and on a packed last train",
  decision: { end: true, why: "Regular sessions can end today. The target symptoms are much improved: from several attacks a week and three emergency visits in two months to one mild attack in the last month, which he rode out on the platform without leaving; no emergency visit since that night. He rates it 9/10 at the start and 2/10 now. He rides the commuter train every day, the rapid train too, and takes no taxis; he has worked full duties with no days off for attacks for two months, sleeps mostly well, and has stopped the energy drinks (one coffee in the morning). Mood is euthymic, about 8/10, and asked again, he has had no thoughts of dying and no wish to harm anyone. What remains is named honestly: long tunnels and a packed last train still make him tense, but he rides them and does not get off. He explains panic in his own words (a false alarm of the body, kept going by the fear of the fear) and acts on it. He names his own early warning signs, has written his own coping card, and knows how to restart the practice and when to come back. The risks after ending are a slide back into avoidance, a busy month at work with more caffeine and no practice, and, as at the emergency department, a medical symptom read as panic; the plan covers them: one harder step a month, a booster session in three months, contact the clinic if avoidance returns for two weeks, a doctor or 119 for new or different physical symptoms, and the local crisis line. Continuing weekly sessions now would add little and could tell him he still needs a therapist beside him on the train, when the aim of the treatment is that he can do it on his own." },
  setting: "Outpatient clinic, end-of-treatment review: the 12th and last planned session of cognitive behavioural therapy for panic disorder, about four months after the night he came to the emergency department. Daiki Okada, 27, a systems engineer, lives alone; his mother lives in Osaka and they talk by phone. He came alone today, by train, after work. You saw him in the emergency department and through the treatment under supervision. Staff address him as Okada-san.",
  chart: [
   "First visit about four months ago: the emergency department (third visit in two months, after a sudden attack on a crowded commuter train; tests normal each time), then the first outpatient visit within the week. Several attacks a week: pounding heart, tight chest, breathlessness, tingling hands, fear of dying or going mad; peak within minutes, settle within the hour. Fear of the next attack, avoiding crowded trains (taxis), missed days of work, poor sleep. A lot of coffee and energy drinks; hardly any alcohol; no other substances. Mood down (4/10), lives alone; denied suicidal thoughts. Insight fair, then good after explanation.",
   "Plan agreed at the first outpatient visit: cognitive behavioural therapy for panic disorder, 12 sessions: learning what a panic attack is, slow breathing, staying with body sensations on purpose in small steps, and going back step by step to the places he avoided. Practice between sessions. Medicine discussed; he chose therapy first, medicine kept as an option. Cut caffeine down gradually. New or different physical symptoms (chest pain that feels different, fainting): see a doctor, 119 in an emergency.",
   "Course: attended all 12 sessions. Practised most weeks, less in the busy middle month (deadlines). Energy drinks cut down gradually and stopped; one coffee in the morning. Steps back to the train: a local train outside rush hour, then the morning rush, then the rapid train. Attacks fell steadily; no emergency visit since that night; no days off for attacks for two months. One mild attack last month, ridden out on the platform. No medicine.",
   "Today: the last planned session. Review the course and the change in target symptoms, a short review MSE with safety asked again, daily functioning, the relapse plan in his own words, medicines, and decide whether regular sessions can end."
  ],
  fields: {
   course: {
    ans: {
     0: ["十二回《じゅうにかい》、 全部《ぜんぶ》 来《こ》られました。 締《し》め切《き》り と 重《かさ》なった 日《ひ》 も、 なんとか 休《やす》まず に 来《き》ました。", "I was able to come to all twelve. Even on the days that clashed with a deadline, I somehow made it without missing one."],
     1: ["ほとんど の 週《しゅう》 は やりました。 ただ、 真《ま》ん中《なか》 の 一《いっ》か月《げつ》 は 締《し》め切《き》り が 続《つづ》いて……。 やろう と は 思《おも》う ん です けど、 気《き》づいたら 夜中《よなか》 で。 正直《しょうじき》、 あまり できません でした。", "Most weeks I did it. But in the middle month the deadlines kept coming... I meant to do it, but before I knew it, it was the middle of the night. Honestly, I didn't do much then."],
     2: ["わざと 心臓《しんぞう》 を ドキドキ させて、 それ が 引《ひ》いて いく まで 待《ま》つ 練習《れんしゅう》 です。 自分《じぶん》 で やって みて はじめて、 ドキドキ して も 死《し》なない ん だ って、 体《からだ》 で わかりました。", "The practice where I made my heart pound on purpose and waited until it went down. Only when I actually did it myself did I understand, with my body, that my heart can pound and I won't die."],
     3: ["最初《さいしょ》 に 朝《あさ》 の 満員電車《まんいんでんしゃ》 に 戻《もど》った 日《ひ》 は、 本当《ほんとう》 に 怖《こわ》かった です。 一駅《ひとえき》 だけ でも、 すごく 長《なが》く 感《かん》じました。", "The first day I went back on the packed morning train, I was really scared. Even one stop felt so long."]
    },
    key: [0, 1, 2],
    need: ["Attended all planned sessions", "Practised between sessions most weeks"],
    wrong: {
     "Attended most planned sessions": "He missed none: write all, not most.",
     "Missed several sessions": "He came to all twelve, even on deadline days.",
     "Practised between sessions some weeks": "He practised in most weeks; only the busy middle month was thin. Record that month honestly, but the overall pattern is most weeks.",
     "Rarely practised between sessions": "Only the middle month was hard; he practised in most weeks.",
     "Family took part in ___ session(s)": "No family member came to his sessions. He lives alone; his mother is in Osaka and they talk by phone."
    },
    doc: "Cognitive behavioural therapy for panic disorder, 12 sessions over about four months (psychoeducation on the panic cycle, slow breathing, staying with body sensations on purpose in small steps, graded return to the train). Attended all 12; practised between sessions most weeks, little in the busy middle month (deadlines at work). No family sessions",
    why: "Write what was given, how much, and how it was used: if the attacks return, the next doctor knows what worked and what to restart. His honest account of the busy month is worth recording: it shows when his practice slips, and it is exactly the kind of month the relapse plan must cover. What helped most, staying with the pounding heart until it passed, is the core lesson of the treatment: he learned it with his body, not only from an explanation."
   },
   change: {
    ans: {
     0: ["発作《ほっさ》 が 週《しゅう》 に 何回《なんかい》 も あって、 救急《きゅうきゅう》 に 三回《さんかい》 も 行《い》った こと です。 今《いま》 は、 先月《せんげつ》 一回《いっかい》 だけ ありました。 発作《ほっさ》 と いって も、 軽《かる》い もの でした。 朝《あさ》、 ホーム で 電車《でんしゃ》 を 待《ま》って いる 最中《さいちゅう》 に 急《きゅう》 に ドキドキ して きて。 でも ゆっくり 呼吸《こきゅう》 して、 ホーム から 出《で》ず に 治《おさ》まる の を 待《ま》って、 次《つぎ》 の 電車《でんしゃ》 に 乗《の》れました。 あの 夜《よる》 から、 救急《きゅうきゅう》 に は 一度《いちど》 も 行《い》って いません。", "Having attacks several times a week and going to the emergency department three times. Now, there was just one last month. And even then, it was a mild one. In the morning, right while I was waiting for the train on the platform, my heart suddenly started pounding. But I breathed slowly, waited for it to settle without leaving the platform, and I could get on the next train. Since that night I haven't been to the emergency department once."],
     1: ["最初《さいしょ》 は 九《きゅう》 ぐらい でした。 今《いま》 は 二《に》 ぐらい です。", "At first it was about a nine. Now it's about a two."],
     2: ["毎日《まいにち》 電車《でんしゃ》 で 通勤《つうきん》 して います。 快速《かいそく》 に も 乗《の》れます。 タクシー は もう 使《つか》って いません。", "I commute by train every day. I can take the rapid train too. I don't use taxis any more."],
     3: ["長《なが》い トンネル と、 混《こ》んで いる 終電《しゅうでん》 は、 まだ ちょっと 緊張《きんちょう》 します。 乗《の》れない こと は ない ん です けど、 体《からだ》 が かたく なる 感《かん》じ で。 でも、 緊張《きんちょう》 して も、 途中《とちゅう》 で 降《お》りたり は しません。", "Long tunnels and a packed last train still make me a bit tense. It's not that I can't ride them, but my body sort of stiffens up. Still, even when I'm tense, I don't get off halfway."]
    },
    key: [0, 1, 3],
    need: ["Much improved", "Self-rated ___/10 at start, ___/10 now", "Residual symptoms: ___"],
    ok: ["Improved"],
    wrong: {
     "Minimally improved": "From several attacks a week to one mild attack in a month, no emergency visits, and the train every day: much more than a minimal change.",
     Unchanged: "He rates 9/10 at the start and 2/10 now.",
     Worse: "He rates 9/10 at the start and 2/10 now."
    },
    doc: "Much improved: from several attacks a week and three emergency visits in two months to one mild attack in the last month, ridden out on the platform without leaving (took the next train); no emergency visit since the first night; commutes by train every day, the rapid train too; no taxis. Self-rated 9/10 at start, 2/10 now. Residual symptoms: tense in long tunnels and on a packed last train, but rides them and does not get off",
    why: "Compare with the first visit in concrete terms: attacks per week, emergency visits, and the train he could not ride. The one mild attack is not a failure: how he met it (slow breathing, staying on the platform, the next train) is the strongest evidence that the treatment worked. Then ask what is still difficult and write it down honestly. Tension in tunnels and on a packed last train is the residual symptom; whether he still rides them, or starts to avoid them, is what the relapse plan watches."
   },
   mood: {
    obs: "In office clothes, his bag on his knees; sits back in the chair with his hands still (at the first visit he turned his phone over and over). Smiles when he tells of the attack on the platform, grows a little serious about the tunnels, and laughs at himself about the energy drinks. His expression moves with the topic.",
    ans: {
     0: ["ここ 二週間《にしゅうかん》 は、 だいたい 落《お》ち着《つ》いて います。 前《まえ》 は 一日中《いちにちじゅう》 緊張《きんちょう》 しっぱなし でした けど、 今《いま》 は 普通《ふつう》 に 過《す》ごせて います。 正直《しょうじき》、 ちょっと だけ 自分《じぶん》 を 褒《ほ》めて あげたい 気分《きぶん》 です。", "These past two weeks I've been mostly calm. Before, I was tense all day long, but now I can get through the day normally. Honestly, I feel like giving myself a little pat on the back."],
     1: ["八《はち》 ぐらい です。 救急《きゅうきゅう》 の 夜《よる》 は、 四《よん》 ぐらい でした よ ね。", "About an eight. On the night in the emergency department it was about a four, wasn't it."]
    },
    quote: "だいたい 落《お》ち着《つ》いて います。 (I've been mostly calm.)",
    key: [0, 1],
    need: ["Euthymic mood", "Congruent affect"],
    ok: ["Full range affect"],
    wrong: {
     "Anxious mood": "He was anxious all day at the first visit. Now he says he is mostly calm and rates his mood about 8/10; the tension in tunnels is a residual symptom, not his mood.",
     "Dysphoric mood": "He was down at the first visit, while he was off work and alone with the attacks. That has lifted as the attacks eased.",
     "Euphoric mood": "Wanting to praise himself a little is a fair pride in real progress, not an elevated mood.",
     "Mildly elevated mood": "A little pride, in proportion to what he achieved, with a calm manner: euthymic.",
     "Restricted affect": "He smiles, grows serious and laughs at himself with the topic: a full range."
    },
    doc: "“だいたい 落《お》ち着《つ》いて います。” (I've been mostly calm.) Mood about 8/10 (about 4/10 at the first visit); a little proud of his progress. Euthymic mood; full range, congruent affect",
    why: "Quote his words and compare with the first visit, when he was anxious and down (4/10). Record the pride too: 自分《じぶん》 を 褒《ほ》めて あげたい (I'd like to give myself a pat on the back) is a natural, healthy response to hard work, and it is worth saying back to him. Check that the low mood of the first visit has gone with the attacks: it fits low mood secondary to the panic, the lost work and the isolation."
   },
   safety: {
    ans: {
     0: ["いいえ、 ありません。 落《お》ち込《こ》んで いた 頃《ころ》 も、 それ は なかった です し。", "No, none. Even back when I was feeling down, I didn't have that."],
     1: ["消《き》えたい、 です か。 いいえ、 そういう 気持《きも》ち も ない です。", "Wanting to disappear? No, I don't feel that either."],
     2: ["いいえ、 ありません。", "No, none."]
    },
    key: [0, 2],
    need: ["Denies suicidal ideation, plan, or intent", "Denies homicidal ideation"],
    wrong: {
     "Past passive death wish, none now": "He has never had thoughts of dying: he denied them in the emergency department and denies them now. His fear of dying during an attack was a fear, not a wish.",
     "Passive death wish, no plan or intent": "He has no thoughts of dying.",
     "Active suicidal ideation (do not end treatment; reassess)": "He denies any thoughts of dying.",
     "Homicidal ideation present (reassess)": "He denies any wish to harm others."
    },
    doc: "Denies suicidal ideation, plan, or intent, now and since the first visit (none even when his mood was low); denies homicidal ideation",
    why: "Ask at every review, even when the answer was always no: at the first visit he was down, lived alone and was off work, and the record before treatment ends should show it was asked again. In panic disorder, the fear of dying during an attack is not a wish to die: record them separately. Question 1 is for patients who used 消《き》えたい before; it was asked in the emergency department and he said no, so it is optional here."
   },
   insight: {
    ans: {
     0: ["体《からだ》 の 警報《けいほう》 が、 危険《きけん》 も ない のに 鳴《な》って いた ん です よ ね。 で、 「また 来《く》る ん じゃ ない か」 って 怖《こわ》がる ほど、 警報《けいほう》 が もっと 鳴《な》る。 怖《こわ》さ を 怖《こわ》がって いた ん だ と 思《おも》います。 今《いま》 は ドキドキ して も、 「ああ、 警報《けいほう》 だ な」 と 思《おも》って、 そのまま に して おけます。", "The body's alarm was going off even though there was no danger, right? And the more I was scared that it would come again, the more the alarm rang. I think I was afraid of the fear. Now, even if my heart pounds, I think, \"Oh, it's the alarm,\" and I can just leave it be."],
     1: ["パニック が また 出《で》て きた ん だ な、 と 思《おも》います。 心臓《しんぞう》 の 病気《びょうき》 じゃ なくて。 でも、 いつも と 違《ちが》う 痛《いた》み だったら、 それ は 別《べつ》 です よ ね。 その とき は 病院《びょういん》 に 行《い》きます。", "I'd think the panic was coming back. Not heart disease. But if it's a pain that's different from usual, that's another matter, right? Then I'd go to the hospital."]
    },
    key: [0, 1],
    need: ["Good", "Grade 6: true emotional insight"],
    ok: ["Grade 5: intellectual insight"],
    wrong: {
     Poor: "He explains the panic cycle in his own words and uses it.",
     Fair: "At the first visit insight was fair: he asked whether it was all in his head. Now he explains the cycle himself and acts on it.",
     "Grade 3: blames others/external factors": "He does not put it down to outside causes: caffeine was one trigger, but he sees the fear of the fear in himself.",
     "Grade 4: aware, cause unknown in self": "He knows what kept the attacks going and what to do about it."
    },
    doc: "Good (grade 6, true emotional insight): explains panic as a false alarm of the body, kept going by the fear of the fear (「怖《こわ》さ を 怖《こわ》がって いた」), and acts on it (lets the pounding pass, stayed on the platform); would recognise a return as panic, and knows that a different pain needs a doctor (fair, grade 4, at the first emergency-department review; good, grade 5, by the time he went home that night)",
    why: "Grade 6 fits because the understanding changes what he does: he stayed on the platform last month instead of leaving. Grade 5 is accepted, since an interview alone cannot always show the change in behaviour. Note that he still separates panic from a new medical symptom: good insight in panic disorder does not mean calling every chest symptom panic. In the emergency department he asked whether it was \"in his head\"; now he names it calmly, which is the change you are looking for."
   },
   function: {
    ans: {
     0: ["仕事《しごと》 は 全部《ぜんぶ》 普通《ふつう》 に やって います。 この 二《に》か月《げつ》、 発作《ほっさ》 で 休《やす》んだ 日《ひ》 は 一日《いちにち》 も ありません。", "I'm doing all my work as normal. In these two months I haven't taken a single day off for an attack."],
     1: ["だいたい よく 眠《ねむ》れて います。 エナジードリンク は 少《すこ》し ずつ 減《へ》らして、 やめました。 コーヒー は 朝《あさ》 の 一杯《いっぱい》 だけ です。 その おかげ か、 寝《ね》つき も 良《よ》く なった 気《き》 が します。", "I'm mostly sleeping well. I cut the energy drinks down little by little and stopped them. Coffee is just one cup in the morning. Maybe thanks to that, I feel I've been getting to sleep more easily, too."],
     2: ["はい。 週末《しゅうまつ》 に また 電車《でんしゃ》 で 出《で》かける よう に なりました。 先月《せんげつ》 は 大学《だいがく》 の 友達《ともだち》 と、 久《ひさ》しぶり に ご飯《はん》 を 食《た》べ に 行《い》きました。", "Yes. I've started going out by train at weekends again. Last month I went for a meal with a friend from university, for the first time in ages."],
     3: ["いいえ。 お酒《さけ》 は 前《まえ》 から ほとんど 飲《の》みません。 ほか の もの も、 何《なに》 も 使《つか》って いません。", "No. I've hardly drunk alcohol all along. And I don't use anything else at all."]
    },
    key: [0, 1, 2],
    need: ["Back to usual work or school", "Daily routine and sleep regular"],
    ok: ["Social and leisure activities resumed"],
    wrong: {
     "Partly back to work or school": "He works full duties and has had no days off for attacks for two months.",
     "Not yet back to work or school": "He commutes by train and works every day.",
     "Sleep still poor": "He sleeps mostly well now; poor sleep from worry was part of the first visit.",
     "Avoidance remains in some situations": "He rides the train every day, the rapid train too, and goes out at weekends. Long tunnels and a packed last train make him tense, but he rides them and does not get off: record that as a residual symptom, not as avoidance.",
     "Alcohol no longer used to cope": "He never drank to cope: he has hardly drunk alcohol all along. The pick would suggest a problem he did not have."
    },
    doc: "Back to usual work: full duties, no days off for attacks in two months; commutes by train daily; sleep mostly good, getting to sleep more easily since the energy drinks stopped (one coffee in the morning); goes out by train at weekends again and has met a university friend; hardly any alcohol, no other substances",
    why: "Function shows whether the change holds in daily life. Ask for concrete examples: no days off for two months and a meal with a friend tell you more than \"I'm fine\". Record caffeine with sleep: it was a likely trigger at the first visit, and more coffee is one of his own warning signs. Living alone, with his mother far away, his weekend outings and friends matter: isolation was part of his low mood at the first visit."
   },
   warning: {
    ans: {
     0: ["出口《でぐち》 が どこ に ある か、 また 確《たし》かめる よう に なったら、 危《あぶ》ない サイン だ と 思《おも》います。 それ と、 「念《ねん》 の ため」 って 快速《かいそく》 じゃ なくて 各駅停車《かくえきていしゃ》 を 選《えら》び始《はじ》めたら。 コーヒー が 一杯《いっぱい》 で 済《す》まなく なる の も、 そう です ね。 あと、 呼吸《こきゅう》 の 練習《れんしゅう》 を サボり始《はじ》めたら。", "If I start checking where the exits are again, I think that's a danger sign. And if I start choosing the local train instead of the rapid one, \"just in case\". Not stopping at one coffee, that too. And if I start skipping the breathing practice."],
     1: ["カード を 見《み》て、 呼吸《こきゅう》 の 練習《れんしゅう》 と、 一段《いちだん》 ずつ の 練習《れんしゅう》 を また 始《はじ》めます。 それ でも 避《さ》ける の が 二週間《にしゅうかん》 続《つづ》いたら、 ここ に 連絡《れんらく》 します。", "I'll look at my card and start the breathing practice and the step-by-step practice again. If I'm still avoiding things for two weeks, I'll contact the clinic."],
     2: ["一人暮《ひとりぐ》らし なので、 自分《じぶん》 で 気《き》づく しか ない です ね。 でも、 この カード が あれば 大丈夫《だいじょうぶ》 だ と 思《おも》います。 母《はは》 と は 電話《でんわ》 で 話《はな》して いる ので、 様子《ようす》 が 変《へん》 だったら 言《い》って くれる かも しれません。", "I live alone, so I'll have to notice it myself. But with this card, I think I'll be fine. I talk with my mother on the phone, so she might tell me if I seem off."],
     3: ["はい、 お願《ねが》いします。 実《じつ》 は、 自分《じぶん》 で カード を 作《つく》って きた ん です。 これ に、 今日《きょう》 の 計画《けいかく》 も 書《か》き足《た》したい です。", "Yes, please. Actually, I made a card myself and brought it. I'd like to add today's plan to it, too."]
    },
    key: [0, 1, 3],
    need: ["Names own early warning signs", "Written relapse prevention plan", "Knows how to restart the practice", "Knows when and how to come back"],
    wrong: {
     "Family knows the warning signs": "He lives alone and no family took part in the treatment. His mother may notice a change in his voice on the phone, but she has not been told the signs; whether to share the card with her is his choice.",
     "Cannot yet name warning signs": "He names four in his own words: checking for exits, choosing the local train \"just in case\", more than one coffee, and skipping the breathing practice."
    },
    doc: "Names own early warning signs: checking where the exits are, choosing the local train 「念《ねん》 の ため」 (just in case), more than one coffee, skipping the breathing practice. Written relapse prevention plan: his own coping card, today's plan added. Will restart slow breathing and the step-by-step practice; will contact the clinic if avoidance continues for two weeks. Lives alone; mother by phone, not told the signs",
    why: "A relapse plan in the patient's own words is the main protection after regular sessions end. His signs are early and specific: checking for exits and choosing the local train are the first small steps back into avoidance, long before an attack. He made his own card, which says a lot about his confidence; build the plan onto it rather than replacing it. He lives alone, so the plan relies on him noticing: a clear rule (avoidance for two weeks, then call) is easier to keep than \"if it gets bad\"."
   },
   medicine: {
    ans: {
     0: ["いいえ、 何《なに》 も 飲《の》んで いません。 最初《さいしょ》 に 薬《くすり》 の 話《はなし》 も して もらいました けど、 まず 練習《れんしゅう》 で やって みる こと に した ので。", "No, I'm not taking anything. You talked to me about medicine at the start, but I decided to try the practice first."],
     1: ["いいえ。 エナジードリンク も、 もう 買《か》って いません。", "No. I don't even buy energy drinks any more."]
    },
    key: [0, 1],
    need: ["No psychiatric medicine", "No medicines from the pharmacy for sleep or anxiety"],
    wrong: {
     "Continues ___ (prescribed by ___)": "He takes no medicine: medicine was discussed at the first outpatient visit and he chose therapy first.",
     "Medicine to be reviewed by ___": "There is no medicine to review. Medicine stays an option if the attacks return.",
     "Supplements or other medicines: ___": "Energy drinks are a caffeine habit, recorded under functioning, not a medicine; he has stopped them."
    },
    doc: "No psychiatric medicine (discussed at the first outpatient visit; he chose therapy first); no medicines from the pharmacy for sleep or anxiety; energy drinks stopped. Medicine remains an option if the attacks return",
    why: "Ask about all medicines, including what is bought at the pharmacy, even when none were prescribed. Record that medicine was discussed and kept as an option: if the attacks return and the practice alone does not bring them down, the next doctor can take up the discussion where it stopped."
   },
   plan: {
    ans: {
     0: ["正直《しょうじき》、 少《すこ》し 心細《こころぼそ》い です。 でも、 カード も ある し、 やって みます。 あの 夜《よる》 の あと、 ここ に 来《き》て 本当《ほんとう》 に よかった です。", "Honestly, I feel a little uneasy. But I have my card, so I'll give it a go. I'm really glad I came here after that night."],
     1: ["最初《さいしょ》 から じゃ なくて いい ん です ね。 わかりました。 避《さ》ける の が 二週間《にしゅうかん》 続《つづ》いたら、 連絡《れんらく》 します。", "So it doesn't have to be from the beginning. All right. If the avoiding goes on for two weeks, I'll get in touch."],
     2: ["三《さん》か月後《げつご》 です ね。 それ まで に、 月《つき》 に 一《ひと》つ ずつ、 少《すこ》し 難《むずか》しい ステップ を やって みます。 次《つぎ》 は、 途中《とちゅう》 で なかなか 降《お》りられない 特急《とっきゅう》 に、 少《すこ》し 長《なが》く 乗《の》って みよう か と。", "In three months, then. Until then, I'll try one slightly harder step each month. Next, I'm thinking of a longer ride on a limited express, where you can't get off for a while."],
     4: ["わかりました。 そういう 気持《きも》ち に なった こと は ない です けど、 覚《おぼ》えて おきます。 それ と、 いつも と 違《ちが》う 胸《むね》 の 痛《いた》み とか、 気《き》 を 失《うしな》いそう な とき は、 迷《まよ》わず ｜119番《ひゃくじゅうきゅうばん》 です よ ね。 救急《きゅうきゅう》 の 夜《よる》 に 教《おそ》わった とおり に。", "All right. I've never felt like that, but I'll remember. And if there's chest pain that's different from usual, or I feel like I'm going to faint, it's 119 without hesitating, right? Just as I was taught that night in the emergency department."]
    },
    key: [0, 1, 2, 4],
    need: ["Regular sessions ended", "Booster session in ___ months", "Return to the clinic if symptoms come back", "Crisis plan given (local crisis line; 119)"],
    wrong: {
     "Letter to family doctor": "No family doctor is part of his care: he came to this clinic from the emergency department. If he names one later, a letter with his consent is reasonable, but nothing in this review calls for it.",
     "Continue sessions every ___ weeks: goals not yet met": "The goals are met: 2/10 from 9/10, the train every day, full work, and a written plan he made himself. Regular sessions end today.",
     "School liaison continues with consent": "He is an adult in work; there is no school involved.",
     "Referred to ___": "Nothing needs another service: his treatment is complete here."
    },
    doc: "Regular sessions ended today (12 of 12 CBT sessions); continues one harder step a month on his own (next: a longer ride on a limited express, where he cannot get off for a while); booster session in 3 months; return to the clinic if avoidance continues for two weeks, without starting from the beginning; new or different physical symptoms (chest pain that feels different, near-fainting): see a doctor, 119 in an emergency; local crisis line or 119 if thoughts of suicide ever appear; medicine remains an option",
    why: "Ask how he feels about ending: a little unease is normal, and naming it lets you answer it. Saying he can come back without starting from the beginning makes a return part of the plan, not a failure. The booster session gives him a date to aim for while he takes one harder step a month. The crisis plan is keyed here, not only accepted: it carries the emergency-department rule for new or different physical symptoms, which stays important for as long as he lives with panic disorder, and he lives alone. No family doctor is involved in his care, so no letter is keyed."
   }
  }
 }
]);
