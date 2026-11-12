/* Discharge summary assessment, field by field.
   Hanashimashō (Japanese). STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Follows the structure of a generic inpatient psychiatric discharge summary (discharge MSE, thought content, cognition,
   sleep, adverse events, diagnosis, medications, aftercare). For each field: what to assess, Japanese questions to ask,
   likely answers, and standard wording to document. No patient, staff, or hospital information is stored.
   Field names stay `tl`, `f`, `c` for engine compatibility: f = polite です/ます form, c = gentle plain form. `n` = clinician note.
   Japanese text uses the app notation: furigana in 《》 after each kanji run, spaces between words.
   The questions are also added as the "discharge" phrase section (flashcards, search, audio pack, handouts).
   Shape: window.PSYCH_DISCHARGE = { form, title, fields: [ { id, group, label, kind, assess, ask: [ {en,f,c,n?,answers?} ],
   refs: ['discharge:index'], picks: [string] } ]   kind: observe | ask | explain | sign. */
(function () {
  const P = (en, f, c, extra) => Object.assign({ en, f, c }, extra || {});
  const FIELDS = [
    { id: 'behavior', group: 'Discharge MSE', label: 'Behavior/Attitude', kind: 'observe',
      assess: 'Observe throughout the interview: grooming, eye contact, psychomotor activity, cooperation, and attitude toward the examiner. Compare with the admission MSE.',
      ask: [
        P('How are you today?', `今日《きょう》 の ご気分《きぶん》 は いかが です か。`, `今日《きょう》 は 調子《ちょうし》 どう？`),
        P('May I talk with you for a few minutes before you go home?', `ご自宅《じたく》 に 帰《かえ》られる 前《まえ》 に、 少《すこ》し お話《はなし》 を して も よろしい です か。`, `家《いえ》 に 帰《かえ》る 前《まえ》 に、 少《すこ》し 話《はな》して も いい？`)
      ],
      picks: ['Calm', 'Cooperative', 'Good eye contact', 'Fairly groomed', 'Well groomed', 'Guarded', 'Restless', 'Withdrawn', 'Irritable', 'Psychomotor retardation', 'Overfamiliar'] },
    { id: 'mood', group: 'Discharge MSE', label: 'Mood/Affect', kind: 'ask',
      assess: 'Mood is what the patient reports: quote their words in Japanese with a translation. Affect is what you observe: range, intensity, stability, and whether it matches the mood.',
      ask: [
        P('How have you been feeling these past few days?', `ここ 数日《すうじつ》、 気分《きぶん》 は いかが でした か。`, `ここ 何日《なんにち》 か、 気分《きぶん》 は どう だった？`, { answers: [[`先生《せんせい》、 もう だいぶ 良《よ》く なりました。 前《まえ》 より 落《お》ち着《つ》いて います。`, 'I\'m better now, Doctor. I feel calmer.'], [`まだ 少《すこ》し 悲《かな》しい 気持《きも》ち が あります。`, 'I still feel a bit sad.']] }),
        P('Are you happy, sad, worried, or angry?', `今《いま》 は、 うれしい です か、 悲《かな》しい です か、 心配《しんぱい》 です か、 それとも 腹《はら》 が 立《た》って います か。`, `今《いま》 は うれしい？ 悲《かな》しい？ 心配《しんぱい》？ それとも 怒《おこ》ってる？`, { n: `Many patients answer 普通《ふつう》 or まあまあ. Ask what that means for them before recording the mood.` }),
        P('From 1 to 10, with 10 the best, how is your mood today?', `一《いち》 から 十《じゅう》 で、 十《じゅう》 が いちばん 良《よ》い と する と、 今日《きょう》 の 気分《きぶん》 は いくつ ぐらい です か。`, `一《いち》 から 十《じゅう》 で、 十《じゅう》 が いちばん いい と したら、 今日《きょう》 の 気分《きぶん》 は いくつ？`)
      ],
      picks: ['Euthymic mood', 'Dysphoric mood', 'Anxious mood', 'Irritable mood', 'Euphoric mood', 'Congruent affect', 'Incongruent affect', 'Full range affect', 'Restricted affect', 'Blunted affect', 'Flat affect', 'Labile affect', 'Mildly elevated mood'] },
    { id: 'process', group: 'Discharge MSE', label: 'Thought Process', kind: 'observe',
      assess: 'Judge from how the patient tells a story: is it goal-directed, relevant, and coherent? Note circumstantiality, tangentiality, loose associations, flight of ideas, or blocking.',
      ask: [
        P('Tell me how you came to be admitted and what happened during your stay.', `入院《にゅういん》 する こと に なった いきさつ と、 入院中《にゅういんちゅう》 に あった こと を 話《はな》して いただけます か。`, `どうして 入院《にゅういん》 する こと に なった か、 入院中《にゅういんちゅう》 に 何《なに》 が あった か、 話《はな》して くれる？`, { n: `いきさつ means how something came about; 経緯《けいい》 is a more formal word for the same idea.` }),
        P('What are your plans when you go home?', `ご自宅《じたく》 に 帰《かえ》ったら、 どんな ふう に 過《す》ごす 予定《よてい》 です か。`, `家《いえ》 に 帰《かえ》ったら、 何《なに》 を する つもり？`)
      ],
      picks: ['Goal-directed', 'Coherent and relevant', 'Some circumstantiality', 'Some tangentiality', 'Loose associations', 'Flight of ideas', 'Thought blocking'] },
    { id: 'positive', group: 'Thought Content', label: 'Positive symptoms', kind: 'ask',
      assess: 'Re-ask about the hallucinations and delusions noted on admission. Ask how strongly the patient still believes the earlier ideas, and watch for responding to internal stimuli.',
      ask: [
        P('Do you still hear voices that others don\'t hear?', `今《いま》 でも、 ほか の 人《ひと》 に は 聞《き》こえない 声《こえ》 が 聞《き》こえます か。`, `今《いま》 でも、 ほか の 人《ひと》 に は 聞《き》こえない 声《こえ》 が 聞《き》こえる？`, { answers: [[`もう 聞《き》こえません。`, 'Not anymore.'], [`時々《ときどき》 聞《き》こえます けど、 前《まえ》 より 小《ちい》さく なりました。`, 'Sometimes, but they\'re faint now.']] }),
        P('Is anyone still whispering to you?', `今《いま》 でも、 だれ か が 耳元《みみもと》 で ささやく よう な こと は あります か。`, `今《いま》 でも、 だれ か が 耳元《みみもと》 で ひそひそ 話《はな》す こと ある？`),
        P('Do you still see shadows or things others don\'t see?', `今《いま》 でも、 影《かげ》 や、 ほか の 人《ひと》 に は 見《み》えない もの が 見《み》える こと は あります か。`, `今《いま》 でも、 影《かげ》 とか、 ほか の 人《ひと》 に は 見《み》えない もの が 見《み》える こと ある？`),
        P('Do you still feel that someone wants to harm you?', `今《いま》 でも、 だれ か が ご自分《じぶん》 に 危害《きがい》 を 加《くわ》えよう と して いる と 感《かん》じます か。`, `今《いま》 でも、 だれ か が 自分《じぶん》 に ひどい こと を しよう と して いる と 思《おも》う？`),
        P('What do you think now about what you believed before you were admitted?', `入院《にゅういん》 する 前《まえ》 に 信《しん》じて いた こと に ついて、 今《いま》 は どう 思《おも》われます か。`, `入院《にゅういん》 する 前《まえ》 に 信《しん》じて いた こと、 今《いま》 は どう 思《おも》う？`, { n: `Name the specific belief from admission, e.g., 近所《きんじょ》 の 人《ひと》 に 見張《みは》られて いた こと (that the neighbours were watching you).` })
      ],
      picks: ['No hallucinations elicited', 'Not responding to internal stimuli', 'Residual auditory hallucinations, less frequent', 'Residual persecutory ideas, less intense', 'Delusions no longer held', 'Delusions persist', 'Grandiose ideas, less intense', 'Responding to internal stimuli', 'Command auditory hallucinations, persist (reassess discharge)'] },
    { id: 'negative', group: 'Thought Content', label: 'Negative symptoms', kind: 'ask',
      assess: 'Ask about and observe motivation, interest, social contact, speech amount, emotional expression, and self-care. Unit staff observations help here.',
      ask: [
        P('Do you enjoy the activities here again?', `病棟《びょうとう》 の 活動《かつどう》 を、 また 楽《たの》しめる よう に なりました か。`, `病棟《びょうとう》 の 活動《かつどう》、 また 楽《たの》しめる よう に なった？`),
        P('Do you talk with the other patients?', `ほか の 患者《かんじゃ》さん と 話《はな》したり します か。`, `ほか の 患者《かんじゃ》さん と 話《はな》したり する？`),
        P('Do you feel like doing things?', `何《なに》 か を しよう と いう 気持《きも》ち に なれます か。`, `何《なに》 か しよう って 気《き》 に なる？`),
        P('Do you bathe and tidy yourself every day?', `毎日《まいにち》、 お風呂《ふろ》 に 入《はい》ったり、 身《み》だしなみ を 整《ととの》えたり して います か。`, `毎日《まいにち》、 お風呂《ふろ》 に 入《はい》ったり、 身《み》だしなみ を 整《ととの》えたり してる？`)
      ],
      picks: ['None noted', 'Mild blunting', 'Alogia (poverty of speech)', 'Avolition', 'Anhedonia', 'Asociality', 'Poor self-care'] },
    { id: 'suicide', group: 'Thought Content', label: 'Suicidal ideas', kind: 'ask', risk: true,
      assess: 'Ask directly. Cover current ideation, plan, intent, and the plan for what the patient will do if the thoughts return at home. Any active ideation means discharge readiness must be reassessed.',
      ask: [
        P('In the past few days, have you thought of hurting yourself or killing yourself?', `ここ 数日《すうじつ》 の 間《あいだ》 に、 ご自分《じぶん》 を 傷《きず》つけたい、 あるいは 自殺《じさつ》 したい と 考《かんが》えた こと は ありました か。`, `ここ 何日《なんにち》 か で、 自分《じぶん》 を 傷《きず》つけたい とか、 自殺《じさつ》 しよう とか 考《かんが》えた こと は あった？`),
        P('Do you have any plan to end your life?', `自殺《じさつ》 の 具体的《ぐたいてき》 な 計画《けいかく》 は あります か。`, `自殺《じさつ》 の 具体的《ぐたいてき》 な 計画《けいかく》 は ある？`),
        P('If those thoughts come back at home, what will you do and whom will you tell?', `ご自宅《じたく》 に 帰《かえ》って から、 もし また そういう 考《かんが》え が 出《で》て きたら、 どう します か。 だれ に 話《はな》します か。`, `家《いえ》 に 帰《かえ》って から、 もし また そういう 考《かんが》え が 出《で》て きたら、 どう する？ だれ に 話《はな》す？`)
      ],
      picks: ['None', 'Denies suicidal ideation, plan, or intent', 'Passive death wish, no plan or intent', 'Active suicidal ideation (reassess discharge)'] },
    { id: 'homicide', group: 'Thought Content', label: 'Homicidal ideas', kind: 'ask', risk: true,
      assess: 'Ask about thoughts of harming others, specific targets, and grudges. Any active ideation means discharge readiness must be reassessed.',
      ask: [
        P('Have you had thoughts of hurting anyone?', `ほか の だれ か を 傷《きず》つけたい と 思《おも》う こと は あります か。`, `だれ か を 傷《きず》つけたい って 思《おも》う こと ある？`),
        P('Is there anyone you are angry at and want to get back at?', `腹《はら》 が 立《た》って いて、 仕返《しかえ》し を したい と 思《おも》う 相手《あいて》 は います か。`, `腹《はら》 が 立《た》って、 仕返《しかえ》し したい 相手《あいて》 は いる？`, { n: `仕返《しかえ》し means getting back at someone; 恨《うら》み is a lasting grudge.` })
      ],
      picks: ['None', 'Denies homicidal ideation', 'Homicidal ideation present (reassess discharge)'] },
    { id: 'orientation', group: 'Cognition', label: 'Orientation', kind: 'ask',
      assess: 'Time, place, and person. Record as oriented ×3 or note what is missed.',
      ask: [
        P('What day and date is it today?', `今日《きょう》 は 何月《なんがつ》 何日《なんにち》、 何曜日《なんようび》 です か。`, `今日《きょう》 は 何月《なんがつ》 何日《なんにち》、 何曜日《なんようび》？`),
        P('Where are we right now?', `ここ は どこ です か。`, `ここ は どこ かな？`),
        P('Who am I?', `私《わたし》 が だれ か、 わかります か。`, `私《わたし》 が だれ か わかる？`)
      ],
      picks: ['Oriented to time, place, and person (×3)', 'Disoriented to time', 'Disoriented to place', 'Disoriented to person'] },
    { id: 'memory', group: 'Cognition', label: 'Memory', kind: 'ask',
      assess: 'Immediate (repeat three words), recent (recall after 5 minutes, breakfast, date of admission), and remote (birthplace, school).',
      ask: [
        P('Remember these three words: ball, tree, key. Please repeat them.', `これから 言《い》う 三《みっ》つ の 言葉《ことば》 を 覚《おぼ》えて ください。 ボール、 木《き》、 鍵《かぎ》。 繰《く》り返《かえ》して 言《い》って ください。`, `これから 言《い》う 三《みっ》つ の 言葉《ことば》 を 覚《おぼ》えて ね。 ボール、 木《き》、 鍵《かぎ》。 繰《く》り返《かえ》して 言《い》って みて。`),
        P('What were the three words I asked you to remember?', `さっき 覚《おぼ》えて いただいた 三《みっ》つ の 言葉《ことば》 は 何《なん》 でした か。`, `さっき 覚《おぼ》えた 三《みっ》つ の 言葉《ことば》 は 何《なん》 だった？`),
        P('What did you eat for breakfast this morning?', `今朝《けさ》 は 朝《あさ》ご飯《はん》 に 何《なに》 を 食《た》べました か。`, `今朝《けさ》 は 朝《あさ》ご飯《はん》 に 何《なに》 を 食《た》べた？`),
        P('When were you admitted here?', `いつ ここ に 入院《にゅういん》 されました か。`, `いつ ここ に 入院《にゅういん》 した？`, { n: '' }),
        P('Where were you born?', `お生《う》まれ は どちら です か。`, `生《う》まれ は どこ？`)
      ],
      picks: ['Intact immediate, recent, and remote memory', 'Impaired immediate memory', 'Impaired recent memory', 'Impaired remote memory'] },
    { id: 'insight', group: 'Cognition', label: 'Insight', kind: 'ask',
      assess: 'Awareness of illness, its cause, and the need for treatment. Grade 1–6: 1 complete denial; 2 slight awareness, still denying; 3 aware but blames others or outside factors; 4 aware the cause is something unknown in oneself; 5 intellectual insight; 6 true emotional insight.',
      ask: [
        P('Why were you admitted here?', `どうして 入院《にゅういん》 する こと に なった と 思《おも》います か。`, `どうして 入院《にゅういん》 する こと に なった と 思《おも》う？`, { n: '', answers: [[`眠《ねむ》れなくて、 声《こえ》 が 聞《き》こえて いた から です。`, 'Because I wasn\'t sleeping and I heard voices.'], [`家族《かぞく》 に 連《つ》れて 来《こ》られた だけ です。 私《わたし》 は 病気《びょうき》 じゃ ありません。`, 'My family just brought me. I\'m not sick.']] }),
        P('Do you think you have an illness?', `ご自分《じぶん》 に 病気《びょうき》 が ある と 思《おも》います か。`, `自分《じぶん》 は 病気《びょうき》 だ と 思《おも》う？`),
        P('Do you still need to take medicine after you go home? Why?', `ご自宅《じたく》 に 帰《かえ》って から も、 お薬《くすり》 を 飲《の》み続《つづ》ける 必要《ひつよう》 が ある と 思《おも》います か。 それ は なぜ です か。`, `家《いえ》 に 帰《かえ》って から も、 薬《くすり》 を 飲《の》み続《つづ》ける 必要《ひつよう》 が ある と 思《おも》う？ どうして？`),
        P('What could happen if you stop your medicine?', `お薬《くすり》 を やめたら、 どう なる と 思《おも》います か。`, `薬《くすり》 を やめたら、 どう なる と 思《おも》う？`)
      ],
      picks: ['Good', 'Fair', 'Poor', 'Grade 1: complete denial', 'Grade 2: slight awareness', 'Grade 3: blames others/external factors', 'Grade 4: aware, cause unknown in self', 'Grade 5: intellectual insight', 'Grade 6: true emotional insight'] },
    { id: 'judgment', group: 'Cognition', label: 'Judgment', kind: 'ask',
      assess: 'Test judgment (hypothetical situations) and social judgment (realistic plans for problems after discharge).',
      ask: [
        P('What will you do if you run out of medicine?', `お薬《くすり》 が なくなったら、 どう します か。`, `薬《くすり》 が なくなったら、 どう する？`),
        P('If the voices come back at home, what will you do?', `ご自宅《じたく》 に 帰《かえ》って から、 声《こえ》 が また 聞《き》こえて きたら、 どう します か。`, `家《いえ》 に 帰《かえ》って から、 声《こえ》 が また 聞《き》こえて きたら、 どう する？`),
        P('If you smelled smoke in a crowded cinema, what would you do?', `混《こ》んで いる 映画館《えいがかん》 で 煙《けむり》 の におい が したら、 どう します か。`, `混《こ》んでる 映画館《えいがかん》 で 煙《けむり》 の におい が したら、 どう する？`)
      ],
      picks: ['Good', 'Fair', 'Poor', 'Intact test judgment', 'Intact social judgment', 'Impaired social judgment'] },
    { id: 'sleep', group: 'Other', label: 'Sleep', kind: 'ask',
      assess: 'Hours, onset, waking at night, and daytime sleepiness (possible sedation). Check the unit sleep chart.',
      ask: [
        P('How is your sleep? How many hours?', `夜《よる》 は よく 眠《ねむ》れて います か。 何時間《なんじかん》 ぐらい 眠《ねむ》れて います か。`, `夜《よる》 は よく 眠《ねむ》れてる？ 何時間《なんじかん》 くらい？`),
        P('Do you wake up in the middle of the night?', `夜中《よなか》 に 目《め》 が 覚《さ》める こと は あります か。`, `夜中《よなか》 に 目《め》 が 覚《さ》める こと ある？`),
        P('Are you sleepy during the day?', `昼間《ひるま》 に 眠気《ねむけ》 は あります か。`, `昼間《ひるま》 に 眠《ねむ》く なる？`)
      ],
      picks: ['Good', 'Fair', 'Poor', '7–8 hours, uninterrupted', 'Difficulty initiating sleep', 'Frequent awakenings', 'Daytime sedation', 'Reduced need for sleep'] },
    { id: 'adverse', group: 'Other', label: 'Adverse event', kind: 'ask',
      assess: 'Medication side effects, medical illness, falls or injuries, and any agitation needing restraint during the stay.',
      ask: [
        P('Is the medicine causing anything unpleasant: stiffness, shaking, sleepiness, dizziness, restlessness?', `お薬《くすり》 で 困《こま》って いる こと は あります か。 体《からだ》 の こわばり、 手《て》 の 震《ふる》え、 眠気《ねむけ》、 ふらつき、 そわそわ する 感《かん》じ など は どう です か。`, `薬《くすり》 で 困《こま》って いる こと は ある？ 体《からだ》 が 硬《かた》く なる、 手《て》 が 震《ふる》える、 眠《ねむ》い、 ふらふら する、 そわそわ する とか。`),
        P('Did you get sick or get hurt while you were here?', `入院中《にゅういんちゅう》 に、 体《からだ》 の 具合《ぐあい》 が 悪《わる》く なったり、 けが を したり しました か。`, `入院中《にゅういんちゅう》 に、 体《からだ》 の 具合《ぐあい》 が 悪《わる》く なったり、 けが を したり した？`)
      ],
      picks: ['None', 'Extrapyramidal symptoms', 'Akathisia', 'Sedation', 'Weight gain', 'Medical illness during admission', 'Fall or injury', 'Agitation requiring restraint', 'Tremor', 'Withdrawal symptoms'] },
    { id: 'diagnosis', group: 'Plan', label: 'Diagnosis', kind: 'explain',
      assess: 'Write the diagnosis with course specifiers (e.g., multiple episodes; currently in acute episode, partial remission, or full remission) and other comorbidities. Explain it to the patient and family in plain words.',
      ask: [
        P('Your illness is called ___. It is treatable.', `ご病気《びょうき》 の 名前《なまえ》 は ＿ です。 治療《ちりょう》 できる 病気《びょうき》 です。`, `病気《びょうき》 の 名前《なまえ》 は ＿ だ よ。 治療《ちりょう》 できる 病気《びょうき》 だ から ね。`),
        P('This illness affects thinking and can make a person hear or believe things that are not real.', `この 病気《びょうき》 は 考《かんが》え に 影響《えいきょう》 して、 実際《じっさい》 に は ない 声《こえ》 が 聞《き》こえたり、 本当《ほんとう》 では ない こと を 信《しん》じたり する こと が あります。`, `この 病気《びょうき》 は 考《かんが》え に 影響《えいきょう》 して、 本当《ほんとう》 は ない 声《こえ》 が 聞《き》こえたり、 本当《ほんとう》 じゃ ない こと を 信《しん》じたり する こと が ある よ。`),
        P('It is not your fault, and it is not caused by a curse.', `ご自分《じぶん》 の せい では ありません。 たたり や 呪《のろ》い でも ありません。`, `自分《じぶん》 の せい じゃ ない よ。 たたり や 呪《のろ》い でも ない よ。`, { n: `Patients or families may attribute illness to たたり (a spirit's punishment), something that has attached itself (憑《つ》き物《もの》), or weakness of character (心《こころ》 が 弱《よわ》い). Acknowledge the belief respectfully before explaining.` })
      ],
      picks: ['Schizophrenia, multiple episodes, currently in acute episode', 'Schizophrenia, multiple episodes, currently in partial remission', 'Schizophrenia, first episode, currently in acute episode', 'Bipolar I disorder, current episode manic', 'Major depressive disorder, recurrent', 'Other comorbid: ___', 'Bipolar I disorder, current or most recent episode manic, in partial remission', 'Methamphetamine-induced psychotic disorder, with ___ use disorder', 'Schizophrenia, first episode, currently in partial remission'] },
    { id: 'medications', group: 'Plan', label: 'Medications', kind: 'explain',
      assess: 'Write each drug with dose, form, and schedule, including long-acting injectables and their interval. Confirm with teach-back, and check that the patient and family can get and afford the medicines (pharmacy, insurance or patient-assistance program).',
      ask: [
        P('These are your medicines for home: ___, once a day, every night.', `ご自宅《じたく》 で 飲《の》む お薬《くすり》 は こちら です。 ＿ を 一日《いちにち》 一回《いっかい》、 毎晩《まいばん》 飲《の》んで ください。`, `家《いえ》 で 飲《の》む 薬《くすり》 は これ だ よ。 ＿ を 一日《いちにち》 一回《いっかい》、 毎晩《まいばん》 飲《の》んで ね。`),
        P('Your injection is every ___ weeks. Your next one is on ___.', `注射《ちゅうしゃ》 は ＿ 週間《しゅうかん》 ごと です。 次《つぎ》 は ＿ です。`, `注射《ちゅうしゃ》 は ＿ 週間《しゅうかん》 ごと だ よ。 次《つぎ》 は ＿ だ よ。`),
        P('Can you tell me how you will take your medicines?', `お薬《くすり》 を どう 飲《の》む か、 説明《せつめい》 して いただけます か。`, `薬《くすり》 を どう 飲《の》む か、 説明《せつめい》 して くれる？`),
        P('Where will you get your medicines? Can you afford them?', `お薬《くすり》 は どこ で もらいます か。 お薬代《くすりだい》 は 払《はら》えそう です か。`, `薬《くすり》 は どこ で もらう？ 薬代《くすりだい》 は 払《はら》えそう？`),
        P('Don\'t stop the medicine even when you feel well.', `調子《ちょうし》 が よく なって も、 自己《じこ》 判断《はんだん》 で お薬《くすり》 を やめないで ください。`, `調子《ちょうし》 が よく なって も、 自分《じぶん》 で 薬《くすり》 を やめないで ね。`)
      ],
      picks: ['Olanzapine ___ mg tab, 1 tab at bedtime', 'Haloperidol decanoate ___ mg IM every 4 weeks', 'Paliperidone palmitate ___ mg IM every month', 'Aripiprazole LAI ___ mg IM every month', 'Risperidone ___ mg tab, ___', 'Benztropine ___ mg tab, ___', 'Lithium carbonate ___ mg tab, ___', 'Divalproex sodium ___ mg tab, ___', 'Quetiapine ___ mg tab, ___', 'Sertraline ___ mg tab, ___', 'Teach-back done, correct', 'Family supervises medication', 'Teach-back incorrect, re-taught', 'Naloxone kit given and taught'] },
    { id: 'aftercare', group: 'Plan', label: 'Aftercare Follow-up', kind: 'explain',
      assess: 'Follow-up date and place, long-acting injectable schedule, who will supervise at home, warning signs of relapse, crisis contacts, interpreter needs, or transfer details if not going home.',
      ask: [
        P('Please come back for your check-up on ___.', `＿ に 外来《がいらい》 の 診察《しんさつ》 に 来《き》て ください。`, `＿ に 外来《がいらい》 の 診察《しんさつ》 に 来《き》て ね。`),
        P('Who at home will help you remember your medicine?', `ご家族《かぞく》 の 中《なか》 で、 お薬《くすり》 の 飲《の》み忘《わす》れ が ない よう に 見《み》て くださる 方《かた》 は どなた です か。`, `家《いえ》 で、 薬《くすり》 を 飲《の》み忘《わす》れない よう に 見《み》て くれる 人《ひと》 は だれ？`),
        P('Come back right away if you can\'t sleep, the voices return, or you think of hurting yourself or others.', `眠《ねむ》れなく なったり、 声《こえ》 が また 聞《き》こえて きたり、 ご自分《じぶん》 や ほか の 人《ひと》 を 傷《きず》つけたい 気持《きも》ち に なったり したら、 すぐ に 病院《びょういん》 に 来《き》て ください。`, `眠《ねむ》れなく なったり、 声《こえ》 が また 聞《き》こえて きたり、 自分《じぶん》 や ほか の 人《ひと》 を 傷《きず》つけたく なったり したら、 すぐ 病院《びょういん》 に 来《き》て ね。`),
        P('You can call the local crisis line any time. In an emergency, call 119.', `つらい とき は、 いつでも 地域《ちいき》 の 相談《そうだん》 窓口《まどぐち》 に 電話《でんわ》 できます。 緊急《きんきゅう》 の とき は ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》 して ください。`, `つらい とき は、 いつでも 地域《ちいき》 の 相談《そうだん》 窓口《まどぐち》 に 電話《でんわ》 できる よ。 緊急《きんきゅう》 の とき は ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》 して ね。`, { n: `Give the number of the local crisis line from data/hospital.js (window.HOSPITAL.crisis) and the hospital's own number, in writing. In Japan 119 is the number for an ambulance.` })
      ],
      picks: ['Outpatient follow-up in 1–2 weeks', 'Follow-up appointment date and clinic given in writing', 'Long-acting injectable schedule given', 'Family oriented on warning signs', 'Interpreter arranged for follow-up', 'Referred to ___', 'Transferred to ___ unit due to ___', 'Safety plan made with patient and family', 'Laboratory tests before follow-up: ___', 'Naloxone kit and MOUD referral', 'Discharge deferred: ___'] },
    { id: 'by', group: 'Plan', label: 'By', kind: 'sign',
      assess: 'Signed by the attending psychiatrist with name and license number. Sign on the paper form or in the EHR; the app does not record names.', ask: [], picks: [] }
  ];

  const sec = { id: 'discharge', group: 'Management', title: 'Discharge assessment', intro: 'Questions for each field of the discharge summary: discharge MSE, sleep, adverse events, diagnosis, medications, and aftercare.', draft: true, phrases: [] };
  FIELDS.forEach((f) => { f.refs = f.ask.map((p) => { sec.phrases.push(p); return 'discharge:' + (sec.phrases.length - 1); }); });
  // Phrase indexes are flashcard IDs, so later questions are APPENDED here (end of the section),
  // and to the end of their field's ask list. Never insert into FIELDS[].ask above.
  const MORE = [
    ['positive', P('Do the voices still tell you to hurt yourself or others?', `今《いま》 でも、 声《こえ》 に、 ご自分《じぶん》 や ほか の 人《ひと》 を 傷《きず》つける よう に 言《い》われる こと は あります か。`, `今《いま》 でも、 声《こえ》 に、 自分《じぶん》 や ほか の 人《ひと》 を 傷《きず》つけろ と 言《い》われる こと ある？`, { n: 'Ask this whenever voices were present on admission. Persisting command hallucinations mean discharge readiness must be reassessed.' })],
    ['sleep', P('Do you feel unusually energetic, as if you don\'t need to sleep?', `いつも より 元気《げんき》 が ありあまって、 寝《ね》なくて も 平気《へいき》 な 感《かん》じ は あります か。`, `いつも より 元気《げんき》 が ありあまって、 寝《ね》なくて も 平気《へいき》 な 感《かん》じ は ある？`, { n: 'Reduced need for sleep is an early sign of mania returning.' })],
    ['judgment', P('If your friends offer you meth or alcohol, what will you do?', `友達《ともだち》 に 覚醒剤《かくせいざい》 や お酒《さけ》 を 勧《すす》められたら、 どう します か。`, `友達《ともだち》 に 覚醒剤《かくせいざい》 とか お酒《さけ》 を 勧《すす》められたら、 どう する？`)],
    ['medications', P('Lithium needs blood tests. If you vomit, have diarrhea, shake a lot, or can\'t walk straight, come back right away.', `リチウム は 血液《けつえき》 検査《けんさ》 が 必要《ひつよう》 です。 吐《は》いたり、 下痢《げり》 を したり、 手《て》 が ひどく 震《ふる》えたり、 まっすぐ 歩《ある》けなく なったり したら、 すぐ に 病院《びょういん》 に 来《き》て ください。`, `リチウム は 血液《けつえき》 検査《けんさ》 が 必要《ひつよう》 だ よ。 吐《は》いたり、 下痢《げり》 を したり、 手《て》 が ひどく 震《ふる》えたり、 まっすぐ 歩《ある》けなく なったり したら、 すぐ 病院《びょういん》 に 来《き》て ね。`, { n: 'Also: drink enough water, and avoid suddenly eating much more or much less salt.' })],
    ['aftercare', P('We think it is safer for her to stay a few more days, because ___.', `＿ ので、 もう 何日《なんにち》 か 入院《にゅういん》 を 続《つづ》けた ほう が 安全《あんぜん》 だ と 考《かんが》えて います。`, `＿ から、 もう 何日《なんにち》 か 入院《にゅういん》 を 続《つづ》けた ほう が 安全《あんぜん》 だ と 思《おも》う ん だ。`, { n: `Said to the family when discharge is deferred. Japanese needs no pronoun here (use ご本人《ほんにん》 if you must refer to the patient); the reason comes first, before ので. Give it in plain words.` })]
  ];
  MORE.forEach(([id, p]) => { const f = FIELDS.find((x) => x.id === id); f.ask.push(p); sec.phrases.push(p); f.refs.push('discharge:' + (sec.phrases.length - 1)); });
  (window.PSYCH_SECTIONS = window.PSYCH_SECTIONS || []).push(sec);
  (window.PSYCH_FLOW_EXTRA = window.PSYCH_FLOW_EXTRA || []).push({ id: 'discharge', title: 'Discharge assessment', goal: 'Questions for each discharge summary field.', sections: ['discharge'], key: FIELDS.filter((f) => f.refs.length).map((f) => f.refs[0]) });
  window.PSYCH_DISCHARGE = { form: '', title: 'Discharge Summary', fields: FIELDS };
})();
