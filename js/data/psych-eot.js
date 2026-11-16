/* End-of-treatment review (outpatients), field by field.
   Hanashimashō (Japanese). STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   The outpatient counterpart of the discharge assessment: at the last planned session (or a planned review) the resident
   reviews the course of treatment, does a short review MSE, checks safety, agrees a relapse plan, and decides whether
   regular sessions can end. For each field: what to assess, Japanese questions to ask, likely answers, and standard
   wording to document. No patient, staff, or hospital information is stored.
   Field names stay `tl`, `f`, `c` for engine compatibility: f = polite です/ます form, c = gentle plain form. `n` = clinician note.
   Japanese text uses the app notation: furigana in 《》 after each kanji run, spaces between words.
   The questions are also added as the "eot" phrase section (flashcards, search, audio pack, handouts).
   Shape: window.PSYCH_EOT = { form, title, fields: [ { id, group, label, kind, assess, ask: [ {en,f,c,n?,answers?} ],
   refs: ['eot:index'], picks: [string] } ]   kind: observe | ask | explain | sign. */
(function () {
  const P = (en, f, c, extra) => Object.assign({ en, f, c }, extra || {});
  const FIELDS = [
    { id: 'course', group: 'Treatment course', label: 'Treatment received', kind: 'ask',
      assess: 'Record what treatment was given (type, number of sessions, over how long), attendance, practice between sessions, and family involvement. The chart says what was planned; compare it with what happened, and ask the patient what helped and what was hard.',
      ask: [
        P('Looking back, how many of the sessions were you able to come to?', `振《ふ》り返《かえ》って みる と、 予定《よてい》 して いた セッション に は どの くらい 来《こ》られました か。`, `振《ふ》り返《かえ》って みる と、 予定《よてい》 の セッション に は どの くらい 来《こ》られた？`, { n: `セッション is the usual word for a planned therapy session (CBT and similar); 面接《めんせつ》 is also common in clinics. 来《こ》られました here is the potential form (were you able to come), which also sounds polite.`, answers: [[`ほとんど 全部《ぜんぶ》 来《こ》られました。`, 'I came to almost all of them.'], [`仕事《しごと》 が 忙《いそが》しくて、 何回《なんかい》 か 休《やす》んで しまいました。`, 'Work was busy, so I missed a few.']] }),
        P('How often did you manage the practice between sessions?', `セッション と セッション の 間《あいだ》 の 練習《れんしゅう》 は、 どの くらい できました か。`, `セッション と セッション の 間《あいだ》 の 練習《れんしゅう》、 どの くらい できた？`, { n: `練習《れんしゅう》 is practice. Many clinics in Japan also say ホームワーク or 宿題《しゅくだい》 for practice between sessions.`, answers: [[`ほぼ 毎日《まいにち》 やりました。`, 'Almost every day.'], [`忙《いそが》しい 週《しゅう》 は、 あまり できません でした。`, 'In busy weeks I did not do much.']] }),
        P('What helped you most?', `治療《ちりょう》 の 中《なか》 で、 いちばん 役《やく》 に 立《た》った こと は 何《なん》 です か。`, `治療《ちりょう》 で、 いちばん 役《やく》 に 立《た》った こと は 何《なん》 だった？`, { answers: [[`少《すこ》し ずつ 練習《れんしゅう》 した こと です。`, 'Practising little by little.'], [`先生《せんせい》 に 話《はな》せた こと が 大《おお》きかった です。`, 'Being able to talk to you meant a lot.']] }),
        P('Was anything hard about the treatment?', `治療《ちりょう》 で 大変《たいへん》 だった こと は ありました か。`, `治療《ちりょう》 で 大変《たいへん》 だった こと は あった？`, { answers: [[`最初《さいしょ》 の 練習《れんしゅう》 は とても 怖《こわ》かった です。`, 'The first practice was very frightening.']] })
      ],
      picks: ['Attended all planned sessions', 'Attended most planned sessions', 'Missed several sessions', 'Practised between sessions most weeks', 'Practised between sessions some weeks', 'Rarely practised between sessions', 'Family took part in ___ session(s)'] },
    { id: 'change', group: 'Treatment course', label: 'Change in target symptoms', kind: 'ask',
      assess: 'Compare the target symptoms now with the first visit: ask what troubled the patient most and how it is now, get a 0 to 10 self-rating for then and now, and ask what the patient can do now that they could not before. Record any residual symptoms in the patient\'s own words.',
      ask: [
        P('When you first came, what troubled you most, and how is it now?', `初《はじ》めて 来《こ》られた とき、 いちばん 困《こま》って いた こと は 何《なん》 でした か。 それ は 今《いま》 どう です か。`, `初《はじ》めて 来《き》た とき、 いちばん 困《こま》って いた こと は 何《なん》 だった？ 今《いま》 は どう？`, { answers: [[`前《まえ》 は 毎日《まいにち》 つらかった です が、 今《いま》 は ほとんど 気《き》 に なりません。`, 'Before, every day was hard; now it hardly bothers me.']] }),
        P('From 0 to 10, with 10 the worst, how bad was it when you first came, and how bad is it now?', `ゼロ から 十《じゅう》 で、 十《じゅう》 が いちばん ひどい と する と、 初《はじ》めて 来《こ》られた とき は いくつ ぐらい でした か。 今《いま》 は いくつ ぐらい です か。`, `ゼロ から 十《じゅう》 で、 十《じゅう》 が いちばん ひどい と したら、 最初《さいしょ》 に 来《き》た とき は いくつ だった？ 今《いま》 は いくつ？`, { n: 'Here 10 is the worst, the opposite of the mood scale, where 10 is the best. Say it clearly and record both numbers.', answers: [[`最初《さいしょ》 は 九《きゅう》 ぐらい で、 今《いま》 は 二《に》 ぐらい です。`, 'About 9 at first, and about 2 now.']] }),
        P('What can you do now that you could not do before?', `前《まえ》 は できなかった けれど、 今《いま》 は できる よう に なった こと は あります か。`, `前《まえ》 は できなかった けど、 今《いま》 は できる よう に なった こと って ある？`, { answers: [[`また 一人《ひとり》 で 出《で》かけられる よう に なりました。`, 'I can go out on my own again.'], [`朝《あさ》、 時間《じかん》 どおり に 家《いえ》 を 出《で》られます。`, 'I can leave home on time in the morning.']] }),
        P('Is anything still difficult?', `今《いま》 でも 難《むずか》しい こと は あります か。`, `今《いま》 でも 難《むずか》しい こと は ある？`, { answers: [[`忙《いそが》しい とき は、 まだ 少《すこ》し 気《き》 に なります。`, 'When I am busy, it still bothers me a little.']] })
      ],
      picks: ['Much improved', 'Improved', 'Minimally improved', 'Unchanged', 'Worse', 'Self-rated ___/10 at start, ___/10 now', 'Residual symptoms: ___'] },
    { id: 'mood', group: 'Review MSE', label: 'Mood/Affect', kind: 'ask',
      assess: 'Mood is what the patient reports: quote their words in Japanese with a translation. Affect is what you observe during the session: range, intensity, stability, and whether it matches the mood. Compare with the first-visit MSE.',
      ask: [
        P('How have you been feeling these past two weeks?', `ここ 二週間《にしゅうかん》 ほど、 気分《きぶん》 は いかが でした か。`, `ここ 二週間《にしゅうかん》 くらい、 気分《きぶん》 は どう だった？`, { n: `Many patients answer 普通《ふつう》 or まあまあ. Ask what that means for them before recording the mood.`, answers: [[`前《まえ》 より ずっと 楽《らく》 に なりました。`, 'Things are much easier than before.'], [`だいたい 落《お》ち着《つ》いて います が、 時々《ときどき》 不安《ふあん》 に なります。`, 'I am mostly calm, but sometimes I get anxious.']] }),
        P('From 1 to 10, with 10 the best, how is your mood today?', `一《いち》 から 十《じゅう》 で、 十《じゅう》 が いちばん 良《よ》い と する と、 今日《きょう》 の 気分《きぶん》 は いくつ ぐらい です か。`, `一《いち》 から 十《じゅう》 で、 十《じゅう》 が いちばん いい と したら、 今日《きょう》 の 気分《きぶん》 は いくつ？`)
      ],
      picks: ['Euthymic mood', 'Dysphoric mood', 'Anxious mood', 'Irritable mood', 'Euphoric mood', 'Congruent affect', 'Incongruent affect', 'Full range affect', 'Restricted affect', 'Blunted affect', 'Flat affect', 'Labile affect', 'Mildly elevated mood'] },
    { id: 'safety', group: 'Review MSE', label: 'Suicidal and homicidal ideas', kind: 'ask', risk: true,
      assess: 'Ask directly at every review, even if the patient never had these thoughts or they went away long ago. Cover thoughts of dying, plan, and intent; for someone who had them, ask in the words they used before. Ask about thoughts of harming others. A review never ends treatment while there is active ideation: reassess and continue care.',
      ask: [
        P('Since we last met, have you had any thoughts of dying or of ending your life?', `前回《ぜんかい》 お会《あ》い して から、 死《し》にたい と 思《おも》ったり、 自殺《じさつ》 を 考《かんが》えたり した こと は ありました か。`, `この 前《まえ》 会《あ》って から、 死《し》にたい と 思《おも》ったり、 自殺《じさつ》 を 考《かんが》えたり した こと は あった？`, { n: 'Ask at every review, even when the thoughts have gone. If the answer is yes, ask about plan and intent; treatment does not end with active ideation.', answers: [[`いいえ、 一度《いちど》 も ありません でした。`, 'No, not once.']] }),
        P('Have the thoughts of wanting to disappear come back at all? (for someone who had them)', `消《き》えたい と いう 気持《きも》ち が、 少《すこ》し でも 戻《もど》って きた こと は ありました か。`, `消《き》えたい って 気持《きも》ち、 少《すこ》し でも 戻《もど》って きた こと あった？`, { n: `消《き》えたい (wanting to disappear) is a common, indirect way to speak of a wish to die, especially for young people. If the patient used it before, use the same word, and ask about it at every review even when it has gone.`, answers: [[`いいえ、 ありません でした。`, 'No, they have not.'], [`ううん、 もう ない。`, 'No, not anymore.']] }),
        P('Have you had any thoughts of hurting someone else?', `ほか の 人《ひと》 を 傷《きず》つけたい と 思《おも》った こと は ありました か。`, `ほか の 人《ひと》 を 傷《きず》つけたい って 思《おも》った こと は あった？`, { answers: [[`いいえ、 ありません。`, 'No.']] })
      ],
      picks: ['Denies suicidal ideation, plan, or intent', 'Past passive death wish, none now', 'Passive death wish, no plan or intent', 'Active suicidal ideation (do not end treatment; reassess)', 'Denies homicidal ideation', 'Homicidal ideation present (reassess)'] },
    { id: 'insight', group: 'Review MSE', label: 'Insight', kind: 'ask',
      assess: 'Awareness of the illness, its cause, and what to do if it returns. Grade 1–6: 1 complete denial; 2 slight awareness, still denying; 3 aware but blames others or outside factors; 4 aware the cause is something unknown in oneself; 5 intellectual insight; 6 true emotional insight (the understanding changes what the patient does).',
      ask: [
        P('What do you understand now about what was happening to you?', `ご自分《じぶん》 に 何《なに》 が 起《お》きて いた の か、 今《いま》 は どう 理解《りかい》 されて います か。`, `自分《じぶん》 に 何《なに》 が 起《お》きて いた の か、 今《いま》 は どう 思《おも》う？`, { answers: [[`不安《ふあん》 が 強《つよ》く なる と、 確認《かくにん》 したく なる ん だ と わかりました。`, 'I learned that when my anxiety rises, I feel the urge to check.'], [`心配《しんぱい》 する と お腹《なか》 が 痛《いた》く なる ん だ と 思《おも》います。`, 'I think worrying gives me stomach-aches.']] }),
        P('If it starts again, what would you think it is?', `もし また 同《おな》じ よう な こと が 始《はじ》まったら、 それ は 何《なん》 だ と 思《おも》います か。`, `もし また 同《おな》じ こと が 始《はじ》まったら、 何《なん》 だ と 思《おも》う？`, { answers: [[`病気《びょうき》 の サイン だ と 思《おも》います。 早《はや》め に 相談《そうだん》 します。`, 'I would think it is a sign of the illness, and I would ask for help early.']] })
      ],
      picks: ['Good', 'Fair', 'Poor', 'Grade 1: complete denial', 'Grade 2: slight awareness', 'Grade 3: blames others/external factors', 'Grade 4: aware, cause unknown in self', 'Grade 5: intellectual insight', 'Grade 6: true emotional insight'] },
    { id: 'function', group: 'Functioning', label: 'Daily functioning', kind: 'ask',
      assess: 'Work or school (full, partial, not yet), daily routine and sleep, social and leisure activities, family relationships, any avoidance that remains, and whether alcohol is still used to cope. Ask for concrete examples.',
      ask: [
        P('How are things at work (or school) now?', `今《いま》、 お仕事《しごと》 や 学校《がっこう》 の ほう は いかが です か。`, `今《いま》、 仕事《しごと》 や 学校《がっこう》 は どう？`, { n: `Ask about the one that applies: お仕事《しごと》 for an adult, 学校《がっこう》 for a student.`, answers: [[`前《まえ》 と 同《おな》じ よう に 働《はたら》けて います。`, 'I can work as I did before.'], [`週《しゅう》 に 三日《みっか》 は 教室《きょうしつ》 に 行《い》けて います。`, 'I can go to class three days a week.']] }),
        P('How are you sleeping?', `夜《よる》 は よく 眠《ねむ》れて います か。`, `夜《よる》 は よく 眠《ねむ》れてる？`, { answers: [[`夜中《よなか》 に 目《め》 が 覚《さ》める こと は、 もう ほとんど ありません。`, 'I hardly ever wake up at night now.'], [`十一時《じゅういちじ》 に は 寝《ね》て います。`, 'I am in bed by eleven.']] }),
        P('Are you doing the things you used to enjoy?', `前《まえ》 に 楽《たの》しんで いた こと を、 また できて います か。`, `前《まえ》 に 楽《たの》しかった こと、 また できてる？`, { answers: [[`はい、 また 家族《かぞく》 と 外食《がいしょく》 する よう に なりました。`, 'Yes, we eat out as a family again.']] }),
        P('Do you still drink to get to sleep or to calm down?', `眠《ねむ》る ため や、 気持《きも》ち を 落《お》ち着《つ》ける ため に、 今《いま》 も お酒《さけ》 を 飲《の》む こと は あります か。`, `寝《ね》る ため とか、 落《お》ち着《つ》く ため に、 今《いま》 も お酒《さけ》 を 飲《の》む こと ある？`, { n: 'Ask when alcohol was used to cope before. Drinking to sleep often comes back with the symptoms.', answers: [[`いいえ、 もう 二《に》か月《げつ》 飲《の》んで いません。`, 'No, I have not had any for two months.']] })
      ],
      picks: ['Back to usual work or school', 'Partly back to work or school', 'Not yet back to work or school', 'Daily routine and sleep regular', 'Sleep still poor', 'Social and leisure activities resumed', 'Avoidance remains in some situations', 'Family relationships improved', 'Alcohol no longer used to cope'] },
    { id: 'warning', group: 'Staying well', label: 'Early warning signs and relapse plan', kind: 'ask',
      assess: 'The patient names their own early warning signs, says what they will do (restart the practice, contact the clinic), and who can help them notice. Write the relapse prevention plan down together and give the patient a copy; with consent, make sure the family knows the signs too.',
      ask: [
        P('What would be the first signs that it is coming back?', `もし 再発《さいはつ》 する と したら、 最初《さいしょ》 に どんな サイン が 出《で》る と 思《おも》います か。`, `もし また ぶり返《かえ》す と したら、 最初《さいしょ》 に どんな サイン が 出《で》る と 思《おも》う？`, { n: `再発《さいはつ》 is relapse; ぶり返《かえ》す (to come back) is softer and more everyday.`, answers: [[`シャワー の 時間《じかん》 が 長《なが》く なる こと だ と 思《おも》います。`, 'I think my showers would get longer.'], [`また 眠《ねむ》れなく なる こと です。`, 'I would stop sleeping well again.']] }),
        P('If you notice them, what will you do?', `その サイン に 気《き》づいたら、 どう します か。`, `その サイン に 気《き》づいたら、 どう する？`, { answers: [[`練習《れんしゅう》 を また 始《はじ》めて、 早《はや》め に 病院《びょういん》 に 連絡《れんらく》 します。`, 'I will start the practice again and contact the clinic early.']] }),
        P('Who can help you notice?', `サイン に 気《き》づく の を 手伝《てつだ》って くれる 方《かた》 は いらっしゃいます か。`, `気《き》づく の を 手伝《てつだ》って くれる 人《ひと》 は いる？`, { answers: [[`妻《つま》 が 気《き》づいて くれる と 思《おも》います。`, 'I think my wife would notice.'], [`お母《かあ》さん かな。`, 'Maybe my mom.']] }),
        P('Shall we write the plan down together?', `この 計画《けいかく》 を 一緒《いっしょ》 に 書《か》いて おきましょう か。`, `この 計画《けいかく》、 一緒《いっしょ》 に 書《か》いて おこう か。`, { n: 'A written relapse prevention plan: warning signs, what to do, who helps, and how to contact the clinic. Give the patient a copy.', answers: [[`はい、 お願《ねが》いします。`, 'Yes, please.']] })
      ],
      picks: ['Names own early warning signs', 'Written relapse prevention plan', 'Knows how to restart the practice', 'Family knows the warning signs', 'Knows when and how to come back', 'Cannot yet name warning signs'] },
    { id: 'medicine', group: 'Staying well', label: 'Medicines', kind: 'ask',
      assess: 'Ask about all medicines: from this clinic, from other doctors, and bought at the pharmacy (especially for sleep or anxiety), and about supplements. Record who prescribes each one and who will review it after this treatment ends.',
      ask: [
        P('Are you taking any medicine now, from us or from another doctor?', `今《いま》、 何《なに》 か お薬《くすり》 を 飲《の》んで います か。 ここ で 出《だ》した もの でも、 ほか の 先生《せんせい》 から の もの でも かまいません。`, `今《いま》、 何《なに》 か 薬《くすり》 を 飲《の》んでる？ ここ の 薬《くすり》 でも、 ほか の 先生《せんせい》 の 薬《くすり》 でも いい よ。`, { answers: [[`いいえ、 何《なに》 も 飲《の》んで いません。`, 'No, I am not taking anything.'], [`内科《ないか》 の 先生《せんせい》 から 血圧《けつあつ》 の 薬《くすり》 を もらって います。`, 'I get blood pressure medicine from my internist.']] }),
        P('Have you bought anything from the pharmacy for sleep or nerves?', `眠《ねむ》る ため や、 気持《きも》ち を 落《お》ち着《つ》ける ため に、 薬局《やっきょく》 で 何《なに》 か 買《か》った こと は あります か。`, `寝《ね》る ため とか、 落《お》ち着《つ》く ため に、 薬局《やっきょく》 で 何《なに》 か 買《か》った こと ある？`, { n: `Ask about supplements and herbal medicines too: サプリ (supplements), 漢方薬《かんぽうやく》 (Japanese herbal medicines).`, answers: [[`いいえ、 何《なに》 も 買《か》って いません。`, 'No, I have not bought anything.']] })
      ],
      picks: ['No psychiatric medicine', 'Continues ___ (prescribed by ___)', 'Medicine to be reviewed by ___', 'No medicines from the pharmacy for sleep or anxiety', 'Supplements or other medicines: ___'] },
    { id: 'plan', group: 'Plan', label: 'Plan after this review', kind: 'explain',
      assess: 'State the decision: regular sessions end, or they continue (how often, for how long, and why: which goals are not yet met). Record any booster session, letter to the family doctor, school liaison (with consent), referral, how to come back, and the crisis plan. A review can decide to continue; say so plainly and without blame.',
      ask: [
        P('We agreed this would be our last regular session. How do you feel about ending?', `今日《きょう》 で 定期的《ていきてき》 な セッション は 最後《さいご》 に しよう と、 一緒《いっしょ》 に 決《き》めて いました ね。 終《お》わる こと に ついて、 今《いま》 どんな お気持《きも》ち です か。`, `今日《きょう》 で いつも の セッション は 最後《さいご》 に しよう って、 一緒《いっしょ》 に 決《き》めてた よね。 終《お》わる こと、 今《いま》 どう 思《おも》う？`, { answers: [[`少《すこ》し 不安《ふあん》 です が、 やって みます。`, 'I am a little nervous, but I will give it a try.'], [`寂《さび》しい です けど、 大丈夫《だいじょうぶ》 だ と 思《おも》います。`, 'I will miss it, but I think I will be fine.']] }),
        P('If it comes back, please contact the clinic; you will not have to start from the beginning.', `もし また 症状《しょうじょう》 が 出《で》て きたら、 外来《がいらい》 に 連絡《れんらく》 して ください。 最初《さいしょ》 から やり直《なお》す 必要《ひつよう》 は ありません。`, `もし また 出《で》て きたら、 外来《がいらい》 に 連絡《れんらく》 して ね。 最初《さいしょ》 から やり直《なお》さなくて いい から ね。`, { n: 'Many patients fear that coming back means failure or starting over. Say plainly that returning early is part of the plan.' }),
        P('Let\'s book one more session in ___ months to see how you are doing.', `＿ か月後《げつご》 に、 もう 一回《いっかい》 セッション を 予約《よやく》 して、 様子《ようす》 を 見《み》ましょう。`, `＿ か月後《げつご》 に、 もう 一回《いっかい》 セッション を 予約《よやく》 して、 様子《ようす》 を 見《み》よう。`, { n: 'A booster session checks that the gains have held and that the relapse plan still works.' }),
        P('I will write to your family doctor about the treatment.', `かかりつけ の 先生《せんせい》 に、 治療《ちりょう》 の 内容《ないよう》 に ついて お手紙《てがみ》 を 書《か》いて おきます。`, `かかりつけ の 先生《せんせい》 に、 治療《ちりょう》 の こと を 手紙《てがみ》 で 知《し》らせて おく ね。`, { n: `かかりつけ医《い》 is the usual word for a family doctor; かかりつけ の 先生《せんせい》 is softer when speaking to the patient.` }),
        P('If you ever have thoughts of ending your life, call the local crisis line, or 119 in an emergency.', `もし いつか 死《し》にたい と いう 気持《きも》ち に なったら、 地域《ちいき》 の 相談《そうだん》 窓口《まどぐち》 に 電話《でんわ》 して ください。 緊急《きんきゅう》 の とき は ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》 して ください。`, `もし いつか 死《し》にたい 気持《きも》ち に なったら、 地域《ちいき》 の 相談《そうだん》 窓口《まどぐち》 に 電話《でんわ》 して ね。 緊急《きんきゅう》 の とき は ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》 して ね。`, { n: `Give the number of the local crisis line from data/hospital.js (window.HOSPITAL.crisis) and the clinic's own number, in writing. In Japan 119 is the number for an ambulance.` }),
        P('I think we should keep meeting every ___ weeks for a while, because ___.', `＿ ので、 しばらく は ＿ 週間《しゅうかん》 ごと に セッション を 続《つづ》けた ほう が いい と 思《おも》います。`, `＿ から、 しばらく は ＿ 週間《しゅうかん》 ごと に セッション を 続《つづ》けた ほう が いい と 思《おも》う。`, { n: `Said when the review decides treatment should continue. In Japanese the reason comes first, before ので. Name the goal still to reach, and make clear that continuing is a plan, not a failure.`, answers: [[`わかりました。 もう 少《すこ》し 頑張《がんば》って みます。`, 'All right. I will keep at it a little longer.']] })
      ],
      picks: ['Regular sessions ended', 'Booster session in ___ months', 'Letter to family doctor', 'Return to the clinic if symptoms come back', 'Crisis plan given (local crisis line; 119)', 'Continue sessions every ___ weeks: goals not yet met', 'School liaison continues with consent', 'Referred to ___'] }
  ];

  const sec = { id: 'eot', group: 'Management', title: 'End-of-treatment review', intro: 'Questions for each field of the end-of-treatment review: treatment course, review MSE and safety, functioning, the relapse plan, medicines, and the plan after the review.', draft: true, phrases: [] };
  FIELDS.forEach((f) => { f.refs = f.ask.map((p) => { sec.phrases.push(p); return 'eot:' + (sec.phrases.length - 1); }); });
  // Phrase indexes are flashcard IDs, so later questions are APPENDED here (end of the section),
  // and to the end of their field's ask list. Never insert into FIELDS[].ask above.
  const MORE = [
  ];
  MORE.forEach(([id, p]) => { const f = FIELDS.find((x) => x.id === id); f.ask.push(p); sec.phrases.push(p); f.refs.push('eot:' + (sec.phrases.length - 1)); });
  (window.PSYCH_SECTIONS = window.PSYCH_SECTIONS || []).push(sec);
  (window.PSYCH_FLOW_EXTRA = window.PSYCH_FLOW_EXTRA || []).push({ id: 'eot', title: 'End-of-treatment review', goal: 'Questions for each end-of-treatment review field.', sections: ['eot'], key: FIELDS.filter((f) => f.refs.length).map((f) => f.refs[0]) });
  window.PSYCH_EOT = { form: '', title: 'End-of-treatment Review', fields: FIELDS };
})();
