/* Admission MSE practice cases, part 5. Hanashimashō (Japanese). STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Same shape as psych-mse-cases.js. Ids in this part: shigeru (same id as his case simulation in psych-cases-1.js and his discharge case, discharge practice cases part 5).
   Shigeru Yamada, 78, delirium on the medical ward, seen by the consultation-liaison psychiatry team the evening he was admitted.
   Patients and families are fictional. No method detail, product names or rating-scale wording; no HDS-R / MMSE items. */
window.PSYCH_MSE_CASES = (window.PSYCH_MSE_CASES || []).concat([
  {
    "id": "shigeru",
    "title": "Shigeru on admission",
    "level": "N4",
    "dx": "Delirium due to another medical condition (urinary tract infection with dehydration), acute, hyperactive",
    "form": "",
    "setting": "Medical ward, evening. Shigeru Yamada, 78, retired rice farmer, widower, lives alone in his farmhouse. Admitted this afternoon for a urinary tract infection with dehydration. The medical team asks you, the psychiatry resident on the consultation-liaison team, to assess his confusion. His eldest daughter Keiko is at the bedside.",
    "chart": [
      "Medical team: since last night confused, barely drinking, and in pain when passing urine. Admitted this afternoon; the urine test suggested infection, and fluids and an antibiotic were started. Tonight he is restless, pulls at his IV line, and says there are children at the window. Question to psychiatry: please assess the confusion.",
      "Keiko, his eldest daughter, lives about 20 minutes away and visits every few days. She saw him yesterday and he was fine: he knew her and chatted with her. Before this he was independent, drove a little, and read the newspaper with his glasses. In the last year she has noticed that he sometimes forgets names; no diagnosis has been made.",
      "Medicines from his local clinic: one for blood pressure, and a sleeping pill of the benzodiazepine type, taken for about a year. His glasses are still at home."
    ],
    "cc": {
      "ask": "collateral:1",
      "ans": [
        "先生《せんせい》、 昨日《きのう》 は 普通《ふつう》 だった ん です。 私《わたし》 の こと も わかって、 おしゃべり も して いました。 昨夜《ゆうべ》 から こう なん です。 水《みず》 も ほとんど 飲《の》まない し、 トイレ の とき に 痛《いた》い って 言《い》って います。",
        "Doctor, yesterday he was fine. He knew me and we chatted. He's been like this since last night. He barely drinks water, and he says it hurts when he goes to the toilet.",
        "Keiko (eldest daughter)"
      ],
      "opts": [
        [
          "\"昨日《きのう》 は 普通《ふつう》 だった ん です。 私《わたし》 の こと も わかって、 おしゃべり も して いました。 昨夜《ゆうべ》 から こう なん です。\"",
          true,
          "The form records the chief complaint in the informant's own words, in Japanese, in quotation marks. Here the informant is his daughter, because he cannot give a reliable account tonight."
        ],
        [
          "Acute confusion since last night, with poor fluid intake and pain on passing urine",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "Yesterday he was fine. He knew me and chatted. He's been like this since last night.",
          false,
          "A translation loses the informant's words. Quote the Japanese; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Older adult male, thin built, lying in bed in a hospital gown. Grey stubble, hair uncombed, lips dry and cracked. An IV line is taped to his left forearm. Weathered farmer's hands. No glasses on; Keiko says they are at home.",
        "ans": {
          "0": ["ああ…… 源《げん》さん か？ 遅《おそ》かった な。", "Ah... is that you, Gen? You're late."],
          "1": ["ああ、 座《すわ》って くれ。 ……あ、 子《こ》ども が また 来《き》た。", "Yeah, sit down. ...Oh, the children have come again."]
        },
        "need": ["Older adult", "Adult male", "Thin built", "Fairly kempt"],
        "wrong": {
          "Unkempt": "Stubble and uncombed hair after one night of illness, in a clean hospital gown. Yesterday he was looking after himself.",
          "Poor hygiene": "He is clean. Nothing suggests he had stopped caring for himself before last night."
        },
        "doc": "Older adult male, thin built, in a hospital gown, fairly kempt (stubble, hair uncombed); lips dry and cracked; IV line in the left forearm; glasses not with him",
        "why": "Look for the signs of the cause as well as the person: dry, cracked lips fit the dehydration. Note what is missing too. He reads the newspaper with his glasses, and without them he sees the room less well, which makes misreading the dark window easier. Ask Keiko to bring his glasses from home."
      },
      "psychomotor": {
        "obs": "Restless in bed: picks at the sheet, keeps trying to sit up, and pulls at the tape of his IV line. Stops for a moment when you say his name, then starts again. Looks often toward the window. No tremor or abnormal movements are seen.",
        "ans": {
          "0": ["ゆっくり？ いや…… 早《はや》く 田《た》んぼ に 行《い》かない と。", "Slowly? No... I have to get to the paddy soon."]
        },
        "need": ["Restless"],
        "ok": ["Psychomotor agitation"],
        "wrong": {
          "No psychomotor agitation or retardation": "He picks at the sheet, keeps trying to sit up and pulls at his IV line.",
          "Psychomotor retardation": "He is restless, not slowed. Remember the other picture, though: a quiet, drowsy, slowed patient can have delirium too, and is easily missed.",
          "Tremor": "No tremor is seen.",
          "Abnormal involuntary movements": "Picking at the sheet is a restless, aimless behaviour that is common in delirium. It is not a movement disorder."
        },
        "doc": "Restless (picks at the sheet, keeps trying to sit up, pulls at the IV line), settles briefly when his name is said; no tremor or abnormal movements",
        "why": "This is the hyperactive kind of delirium. Treat the cause first: the infection and the dehydration. Then calm the room: good light in the day, a quiet room at night, a clock he can see, his glasses, and Keiko or another familiar person beside him. Restraint is a last resort; it often makes delirium worse and causes injuries."
      },
      "attitude": {
        "obs": "Looks at you for a moment, then back at the window. Takes you for his old friend Gen from the village. Lets you hold his hand and answers each question, but his attention slips away after a few seconds. No anger or suspicion toward you.",
        "ans": {
          "0": ["山田《やまだ》 茂《しげる》 だ。 ……茂《しげる》 で いい。", "Shigeru Yamada. ...Shigeru is fine."],
          "1": ["英語《えいご》？ 何《なに》 を 言《い》って いる ん だ。", "English? What are you talking about?"]
        },
        "need": ["Cooperative", "Poor eye contact"],
        "ok": ["Fair eye contact"],
        "wrong": {
          "Uncooperative": "He does not refuse anything. His attention keeps slipping to the window. Inattention is not refusal.",
          "Guarded": "He is friendly and open with you; he simply cannot hold his attention.",
          "Suspicious": "He takes you for a friend, not for a threat.",
          "Overfamiliar": "He talks plainly because he thinks you are Gen, an old friend. That is misidentification, not disinhibition."
        },
        "doc": "Cooperative for moments at a time, attention drifts to the window; poor eye contact; friendly, mistakes the examiner for an old friend from his village (Gen)",
        "why": "His attention, not his attitude, limits the interview. Keep your sentences short, use his name, say who you are each time (山田《やまだ》さん、 医者《いしゃ》 です), and do not argue when he calls you Gen. Short, repeated visits work better than one long interview."
      },
      "mood": {
        "obs": "Frightened when he looks at the window: grips the sheet and his voice rises. A minute later he laughs about Gen being late, then looks frightened again. The changes come quickly and without a clear trigger.",
        "ans": {
          "0": ["怖《こわ》い…… 窓《まど》 に 子《こ》ども が いる。 危《あぶ》ない ぞ。", "I'm scared... There are children at the window. It's dangerous."],
          "1": ["二週間《にしゅうかん》？ ……わからない。 田《た》んぼ が 忙《いそが》しい から な。 はは。", "Two weeks? ...I don't know. The paddy keeps me busy. Ha ha."],
          "2": ["一《いち》 から……？ ……源《げん》さん は まだ か。", "From one...? ...Isn't Gen here yet?"]
        },
        "quote": "怖《こわ》い…… 窓《まど》 に 子《こ》ども が いる。 (I'm scared... There are children at the window.)",
        "need": ["Anxious mood", "Labile affect"],
        "wrong": {
          "Euthymic mood": "He says he is scared and his face shows fear.",
          "Sad mood": "He does not say he is low, and nothing he shows suggests it.",
          "Flat affect": "His face changes quickly, from fear to laughter and back.",
          "Restricted affect": "His affect changes widely and fast; it is not narrow.",
          "Full range affect": "The range is wide, but the key finding is how fast and how unpredictably it changes."
        },
        "ev": {
          "find": "Anxious mood",
          "opts": [
            ["\"怖《こわ》い…… 窓《まど》 に 子《こ》ども が いる。\"", true],
            ["\"田《た》んぼ が 忙《いそが》しい から な。 はは。\"", false],
            ["\"源《げん》さん は まだ か。\"", false]
          ],
          "why": "Asked how he feels now, he names fear, and he ties it to what he sees. He cannot answer about the past two weeks or rate his mood, so record only what he can tell you about this moment. The laugh belongs to the affect: it shows how quickly it swings."
        },
        "doc": "\"怖《こわ》い…… 窓《まど》 に 子《こ》ども が いる。\" (I'm scared... There are children at the window.) Anxious mood at this moment; cannot rate his mood or describe the past two weeks. Affect labile: frightened, then laughing, then frightened again, without a clear trigger",
        "why": "In delirium, mood is reported only for the moment, because he cannot hold the question or look back over two weeks. Labile affect here is part of the delirium, like the inattention. Do not diagnose a mood disorder tonight; look again when he is clear."
      },
      "speech": {
        "obs": "Talks in short bursts at a normal rate and volume. Sentences break off halfway and jump to the paddy, Gen or the children; then he stops and stares at the window. Says without being asked that it hurts to pass urine.",
        "ans": {
          "0": ["何《なに》 が…… 水《みず》 を 見《み》 に 行《い》かない と。 田《た》んぼ の 水《みず》。 源《げん》さん が 来《く》る って…… あ、 子《こ》ども が 窓《まど》 に。 危《あぶ》ない ぞ。 おーい。 ……おしっこ の とき、 痛《いた》い。", "What... I have to go and check the water. The water in the paddy. Gen said he'd come... Oh, the children at the window. It's dangerous. Hey! ...It hurts when I pee."]
        },
        "need": ["Spontaneous", "Normal rate", "Adequate volume"],
        "ok": ["Productive"],
        "wrong": {
          "Pressured": "He speaks at a normal rate and stops easily; the bursts are short and broken.",
          "Poverty of speech": "He says a good deal, but in fragments.",
          "Non-spontaneous (answers only when asked)": "He calls out to the children and mentions the pain without being asked."
        },
        "doc": "Spontaneous, normal rate and volume; fragmented and mildly disorganized, sentences break off and jump to the paddy, Gen or the children; reports pain on passing urine (\"おしっこ の とき、 痛《いた》い\")",
        "why": "Write down how the speech breaks up, not only the rate and volume. Listen for clues to the cause: in the middle of the fragments he says it hurts to pass urine, which supports the infection the medical team is treating."
      },
      "process": {
        "obs": "Each answer starts near the question, then slips to the paddy, Gen or the children and does not come back. Asked what he means, he loses the thread and asks where Keiko is, while she sits beside him.",
        "ans": {
          "0": ["何《なに》 が…… 水《みず》 を 見《み》 に 行《い》かない と。 田《た》んぼ の 水《みず》。 源《げん》さん が 来《く》る って…… あ、 子《こ》ども が 窓《まど》 に。 危《あぶ》ない ぞ。 おーい。 ……おしっこ の とき、 痛《いた》い。", "What... I have to go and check the water. The water in the paddy. Gen said he'd come... Oh, the children at the window. It's dangerous. Hey! ...It hurts when I pee."],
          "1": ["ええと…… 何《なん》 の 話《はなし》 だった か な。 ……恵子《けいこ》 は どこ だ。", "Um... what were we talking about? ...Where's Keiko?"]
        },
        "need": ["Tangential"],
        "ok": ["Loose associations"],
        "wrong": {
          "Linear": "He does not keep to a line of thought; he loses it within a sentence.",
          "Goal-directed": "He never reaches the point of the question.",
          "Circumstantial": "Circumstantial thinking takes a detour and comes back to the point. He does not come back.",
          "Flight of ideas": "His speech is not fast, and the jumps come from lost attention, not from racing thoughts."
        },
        "doc": "Tangential, mildly disorganized: answers drift to the paddy, Gen or the children and do not return; loses the thread when asked to explain (\"何《なん》 の 話《はなし》 だった か な\")",
        "why": "In delirium the thinking breaks up because attention fails: he cannot hold the question long enough to answer it. It also comes and goes over the day, so write the time of your assessment. Keiko's account of yesterday is your baseline."
      },
      "perception": {
        "obs": "Keeps looking at the dark window, points, and calls out 「おーい、 危《あぶ》ない ぞ」 to someone there. No one is at the window.",
        "ans": {
          "0": ["声《こえ》？ ……いや。 窓《まど》 に 子《こ》ども が いる だろう。", "Voices? ...No. There are children at the window, aren't there?"],
          "1": ["いや。", "No."],
          "2": ["影《かげ》 じゃ ない。 子《こ》ども だ。 ほら、 あそこ。", "They're not shadows. They're children. Look, over there."],
          "3": ["何《なに》 も 言《い》わない。 こっち を 見《み》て いる だけ だ。", "They don't say anything. They just look this way."],
          "4": ["いや。", "No."]
        },
        "key": [2],
        "need": ["Visual hallucinations", "Responding to internal stimuli"],
        "wrong": {
          "Denies perceptual disturbances": "He sees children at the window and points to them.",
          "Auditory hallucinations": "He hears nothing; the children he sees do not speak.",
          "Command auditory hallucinations": "He hears no voices.",
          "Not responding to internal stimuli": "He points at the window and calls out to the children."
        },
        "ev": {
          "find": "Visual hallucinations",
          "opts": [
            ["\"影《かげ》 じゃ ない。 子《こ》ども だ。 ほら、 あそこ。\"", true],
            ["\"何《なに》 も 言《い》わない。\"", false],
            ["\"山田《やまだ》 茂《しげる》 だ。\"", false]
          ],
          "why": "He sees children where there are none and points to them. \"何《なに》 も 言《い》わない\" tells you the children are silent, so there is no auditory hallucination."
        },
        "doc": "Visual hallucinations: sees children at the window (\"子《こ》ども だ。 ほら、 あそこ。\"), silent, he is frightened for them; responding to internal stimuli (points, calls out to them); no auditory hallucinations",
        "why": "New visual hallucinations in an older adult point first to a medical or drug cause, such as delirium, not to a primary psychosis. Do not argue with what he sees; say that it sounds frightening and that he is safe in the hospital. Keep the room lit in the evening and close the curtain, so the dark window gives him less to misread."
      },
      "content": {
        "ans": {
          "0": ["子《こ》ども が 田《た》んぼ に 落《お》ちる。 危《あぶ》ない。", "The children will fall into the paddy. It's dangerous."],
          "1": ["見《み》て いる よ、 あの 子《こ》 たち が。", "They're watching, those children."],
          "2": ["水《みず》 は いい。 いらない。", "No water. I don't want any."],
          "3": ["本当《ほんとう》 だ。 ここ は うち の 田《た》んぼ だ。", "It's true. This is my paddy."],
          "4": ["ほか？ ……源《げん》さん は まだ か。", "Another? ...Isn't Gen here yet?"],
          "5": ["……わからない。", "...I don't know."],
          "6": ["先生《せんせい》、 父《ちち》 は 認知症《にんちしょう》 に なって しまった ん でしょう か。 昨日《きのう》 まで 本当《ほんとう》 に 普通《ふつう》 だった のに……。", "Doctor, has my father got dementia? He was really fine until yesterday...", "Keiko (eldest daughter)"]
        },
        "key": [0, 3],
        "need": ["Preoccupation with ___"],
        "ok": ["No delusions elicited"],
        "wrong": {
          "Persecutory delusions": "He fears for the children, not for himself, and \"見《み》て いる\" describes what he sees. Being watched by a hallucination is not a belief that someone means him harm.",
          "Delusions of reference": "He does not think things around him carry special messages for him.",
          "Guilt or worthlessness (not delusional)": "He cannot answer the question; he shows no guilt."
        },
        "ev": {
          "find": "Preoccupation with ___",
          "opts": [
            ["\"子《こ》ども が 田《た》んぼ に 落《お》ちる。 危《あぶ》ない。\"", true],
            ["\"……わからない。\"", false],
            ["\"父《ちち》 は 認知症《にんちしょう》 に なって しまった ん でしょう か。\" (Keiko)", false]
          ],
          "why": "Whatever you ask, his thoughts come back to the children's safety, the paddy and Gen. Keiko's line is her worry and her explanation, not his thought content."
        },
        "doc": "No fixed delusions elicited; thought content poorly assessable because of inattention. Preoccupied with the children's safety (\"子《こ》ども が 田《た》んぼ に 落《お》ちる\"), the rice paddy and Gen. Believes he is in his own paddy (disorientation). Keiko asks whether this is dementia",
        "why": "His belief that he is in the paddy shifts with his attention; record it as disorientation, not as a delusion. Keiko's question is the one to answer tonight: delirium starts suddenly, comes and goes, and usually improves when the cause is treated, while dementia comes on slowly. The names he has forgotten over the last year are worth checking later, when he is clear."
      },
      "safety": {
        "ans": {
          "0": ["生《い》きて いて も……？ ……田《た》んぼ が ある から な。", "Not worth living...? ...Well, there's the paddy to look after."],
          "1": ["寝《ね》る？ まだ 寝《ね》ない。 水《みず》 を 見《み》 に 行《い》く。", "Sleep? I'm not going to sleep yet. I'm going to check the water."],
          "2": ["自殺《じさつ》？ ……何《なに》 を 言《い》って いる。 そんな こと 考《かんが》えない。", "Suicide? ...What are you saying. I don't think about that."],
          "3": ["……源《げん》さん は？", "...Where's Gen?"],
          "4": ["何《なに》 を？", "Act on what?"],
          "5": ["人《ひと》 を？ いや。 子《こ》ども が 危《あぶ》ない から、 助《たす》けない と。", "Hurt someone? No. The children are in danger, so I have to help them."]
        },
        "key": [2, 5],
        "need": ["Denies suicidal ideation", "Denies homicidal ideation"],
        "wrong": {
          "Passive death wish": "Nothing he says expresses a wish to be dead. He cannot follow the question well enough to answer it.",
          "Active suicidal ideation, no plan": "Asked directly, he says he does not think about suicide.",
          "Homicidal ideation toward ___": "He wants to help the children, not hurt anyone."
        },
        "ev": {
          "find": "Denies suicidal ideation",
          "opts": [
            ["\"自殺《じさつ》？ ……何《なに》 を 言《い》って いる。 そんな こと 考《かんが》えない。\"", true],
            ["\"……源《げん》さん は？\"", false],
            ["\"まだ 寝《ね》ない。 水《みず》 を 見《み》 に 行《い》く。\"", false]
          ],
          "why": "Only his answer to the direct question addresses suicide. The other lines show that he lost the question, which is why tonight's answers cannot be relied on."
        },
        "doc": "Denies suicidal ideation (\"そんな こと 考《かんが》えない\") and homicidal ideation when asked, but cannot be reliably assessed because of inattention and disorientation; reassess when the delirium clears. Current risks: pulling out the IV line, falls, getting out of bed to \"go to the paddy\"",
        "why": "Ask, record what he says, and write that it is not reliable tonight. Ask again when he is clear: he is an older widower who lives alone, and that group carries a real risk of suicide. Tonight the main dangers are of another kind: falls, pulling out the line, and leaving the bed."
      },
      "orientation": {
        "obs": "Cannot keep attention: loses the question halfway and turns to the window. Asked to say the days of the week backward from Sunday, he says 「日曜《にちよう》、 土曜《どよう》…… ええと…… 月曜《げつよう》？」 and stops. Knows his own name. Looks at Keiko and asks who she is; a few minutes later he calls her by name.",
        "ans": {
          "0": ["今日《きょう》 は…… 田植《たう》え だ。 早《はや》く 行《い》かない と。", "Today is... rice planting. I have to hurry."],
          "1": ["うち の 田《た》んぼ だ。", "My paddy."],
          "2": ["源《げん》さん だろう。 ……違《ちが》う か？", "You're Gen, aren't you? ...No?"]
        },
        "need": ["Disoriented to time", "Disoriented to place"],
        "ok": ["Disoriented to person"],
        "wrong": {
          "Oriented to 3 spheres": "He thinks it is rice-planting day, that he is in his paddy, and that you are Gen."
        },
        "ev": {
          "find": "Disoriented to place",
          "opts": [
            ["\"うち の 田《た》んぼ だ。\"", true],
            ["\"源《げん》さん だろう。\"", false],
            ["\"田植《たう》え だ。\"", false]
          ],
          "why": "Asked where he is, he says his own paddy. Calling you Gen is misidentification of a person, and rice-planting day is disorientation to time."
        },
        "doc": "Disoriented to time (thinks it is rice-planting day) and place (thinks he is in his paddy); knows his own name; misidentifies the examiner as an old friend and recognizes his daughter only some of the time. Attention markedly impaired: cannot say the days of the week backward, loses the question halfway",
        "why": "Inattention is the core sign of delirium, so test it every time, here with the days of the week backward. Disorientation alone does not separate delirium from dementia; the sudden onset since last night, the fluctuation and the poor attention do. Help orientation at the bedside: a clock and a calendar he can see, his glasses, light in the day, and Keiko's visits. Person is defensible as well, because he does not always recognize his daughter, but he knows who he is."
      },
      "insight": {
        "ans": {
          "0": ["病気《びょうき》？ おれ は どこ も 悪《わる》く ない。 ……おしっこ の とき に ちょっと 痛《いた》い だけ だ。", "Sick? There's nothing wrong with me. ...It just hurts a bit when I pee."],
          "1": ["恵子《けいこ》 が？ ……恵子《けいこ》 は どこ だ。", "Keiko did? ...Where's Keiko?"],
          "2": ["薬《くすり》？ 寝《ね》る 薬《くすり》 なら、 うち に ある よ。", "Medicine? If it's sleeping medicine, I have some at home."]
        },
        "need": ["Poor", "Grade 1: complete denial"],
        "wrong": {
          "Grade 2: slight awareness": "He notices that it hurts to pass urine, which is a symptom. He has no awareness that he is confused or ill.",
          "Grade 4: aware, cause unknown in self": "He does not see any problem in himself.",
          "Fair": "He denies being ill and does not know why he is in hospital."
        },
        "ev": {
          "find": "Grade 1: complete denial",
          "opts": [
            ["\"おれ は どこ も 悪《わる》く ない。\"", true],
            ["\"おしっこ の とき に ちょっと 痛《いた》い だけ だ。\"", false],
            ["\"寝《ね》る 薬《くすり》 なら、 うち に ある よ。\"", false]
          ],
          "why": "Asked whether he is ill, he says nothing is wrong. Pain on passing urine is a symptom he feels, not insight into his illness. The sleeping pill line is a clue for the medicine review, not insight."
        },
        "doc": "Poor (grade 1): denies illness (\"おれ は どこ も 悪《わる》く ない\"), aware only of pain on passing urine; does not know why he is in hospital; mentions his sleeping pill at home",
        "why": "Absent insight is part of the delirium, so record it and look again when he is clear. His mention of the sleeping pill matters: a benzodiazepine-type sleeping pill raises the risk of delirium and falls in older adults. Ask Keiko when he last took it, and review it with the medical team. Do not simply stop it after a year of use without a plan, because stopping suddenly can also cause confusion."
      },
      "impulse": {
        "obs": "Pulls at the IV line twice while you talk, and tries to swing his legs out of bed to go to the paddy. Settles for a short while when Keiko holds his hand and speaks to him. No anger toward anyone.",
        "ans": {
          "0": ["怒《おこ》る？ おれ は 怒《おこ》らない よ。", "Get angry? I don't get angry."],
          "1": ["けが？ ……子《こ》ども が けが を する。 危《あぶ》ない。", "Hurt? ...The children will get hurt. It's dangerous."]
        },
        "need": ["Poor impulse control"],
        "wrong": {
          "Good impulse control": "He pulls at his IV line and tries to get out of bed, though he could fall.",
          "Fair impulse control": "He acts on each urge at once: pulling at the line, getting out of bed. That he is not angry does not make his control fair."
        },
        "doc": "Poor impulse control (pulls at the IV line twice, tries to get out of bed to \"go to the paddy\"); no anger or aggression; settles briefly when his daughter holds his hand",
        "why": "Impulse control is not only about anger. Here the danger is pulling out the line and falling. Answer it without restraint: ask Keiko or another familiar person to stay, cover the line with a sleeve or a bandage, keep the bed low, check on him often, and treat the cause. If restraint is ever considered, it is a last resort; follow local law and your hospital's policy."
      },
      "judgment": {
        "ans": {
          "0": ["財布《さいふ》？ ……源《げん》さん に 渡《わた》す。", "A wallet? ...I'd give it to Gen."],
          "1": ["電車《でんしゃ》？ ……子《こ》ども が 窓《まど》 に いる。", "A train? ...The children are at the window."]
        },
        "need": ["Poor", "Impaired test judgment", "Impaired social judgment"],
        "wrong": {
          "Intact test judgment": "He cannot hold either question long enough to give a sensible answer.",
          "Intact social judgment": "Tonight he pulls at his line and tries to leave the bed to go to the paddy.",
          "Good": "His answers and his actions tonight are unsafe.",
          "Fair": "Both the hypothetical answers and what he does tonight are unsafe."
        },
        "doc": "Poor: impaired test judgment (loses both questions, \"源《げん》さん に 渡《わた》す\"); impaired social judgment (pulls at the IV line, tries to get out of bed to go to the paddy). Before this illness he lived alone and managed independently",
        "why": "Tonight's judgment reflects the delirium, not the man Keiko saw yesterday. Write both: poor now, independent before. When he is clear, check his cognition again (Keiko has noticed him forgetting names this past year), and talk with him and Keiko about living alone and driving. Decisions made tonight are made with Keiko, as far as he can take part; follow local law and your hospital's policy."
      }
    }
  }
]);
