/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* Admission MSE practice cases, part 6 (0.19.0): first-visit MSE for the four 0.18.0 patients. Same shape as psych-mse-cases.js. Ids: ocd, ptsd, panic, hinata. */
window.PSYCH_MSE_CASES = (window.PSYCH_MSE_CASES || []).concat([
  {
    "id": "ocd",
    "title": "Takumi at his first visit",
    "level": "N3",
    "dx": "Obsessive-compulsive disorder, with good or fair insight; low mood to be followed (rule out a depressive disorder)",
    "form": "",
    "setting": "Outpatient clinic, first visit. Takumi Kobayashi, 34, works in the accounts section of a city office. He is married to Aya, who persuaded him to come but has not come with him; they have no children. You record the MSE at the end of this first interview.",
    "chart": [
      "First outpatient visit. Takumi Kobayashi, 34, accounts section of a city office; married to Aya, no children. He came alone; his wife persuaded him to come.",
      "No previous psychiatric contact is recorded.",
      "His hands look red and chapped. Staff address him as Kobayashi-san."
    ],
    "cc": {
      "ask": "cc-hpi:0",
      "ans": [
        "妻《つま》 に 言《い》われて 来《き》ました。 ……手《て》 を 洗《あら》う の が やめられない ん です。",
        "My wife told me to come. ...I can't stop washing my hands.",
        "Takumi"
      ],
      "opts": [
        [
          "\"手《て》 を 洗《あら》う の が やめられない ん です。\"",
          true,
          "The form records the chief complaint in the patient's own words, in Japanese, in quotation marks."
        ],
        [
          "Contamination obsessions with washing and checking compulsions",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "I can't stop washing my hands.",
          false,
          "A translation loses the patient's words. Quote the Japanese; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Adult male, medium build, in a clean, neatly pressed shirt and trousers. Hair tidy, clean-shaven. The skin on the backs of his hands and between his fingers is red, dry and cracked.",
        "ans": {
          "0": ["小林《こばやし》 です。 よろしく お願《ねが》いします。", "I'm Kobayashi. Pleased to meet you."],
          "1": ["はい、 失礼《しつれい》 します。", "Yes, excuse me."]
        },
        "need": ["Adult male", "Medium built", "Well kempt"],
        "wrong": {
          "Fairly kempt": "His clothes, hair and shave are all neat. The chapped hands come from washing too much, not from poor grooming.",
          "Unkempt": "He is neatly dressed and clean.",
          "Poor hygiene": "If anything his hygiene is excessive: the cracked skin comes from washing many times a day."
        },
        "doc": "Adult male, medium built, neatly dressed, well kempt; hands red, dry and chapped, with cracks between the fingers",
        "why": "Red, chapped hands in a neat, well-groomed person are often the first sign of washing compulsions, and patients may hide them for years. Write them down, and look after the skin: suggest a moisturiser and, if the cracks are painful or infected, a doctor's review of the skin."
      },
      "psychomotor": {
        "obs": "Sits still, with his hands resting on his knees, and keeps them off the desk. Now and then he looks down at his hands. Movements are normal in speed and amount. No tremor or abnormal movements.",
        "ans": {
          "0": ["いいえ、 特《とく》に 言《い》われた こと は ありません。 ただ、 妻《つま》 に は 「お風呂《ふろ》 が 長《なが》い」 と よく 言《い》われます。", "No, nobody has said that. But my wife often tells me my showers are long."]
        },
        "need": ["No psychomotor agitation or retardation"],
        "wrong": {
          "Restless": "He sits still. Looking at his hands is part of his worry about them, not restlessness.",
          "Psychomotor agitation": "His movements are normal in amount; he is anxious, but not agitated.",
          "Psychomotor retardation": "He is not slowed in movement or speech.",
          "Abnormal involuntary movements": "No abnormal movements are seen. Compulsions are deliberate acts done to ease anxiety, not involuntary movements."
        },
        "doc": "No psychomotor agitation or retardation; sits still, hands on his knees, glances at them now and then; no tremor or abnormal movements",
        "why": "Compulsions usually happen out of sight, at the sink or at the front door, so a normal psychomotor finding in the clinic fits OCD. Ask about them; do not expect to see them. If he had tics, you would note them here: tics sometimes come with OCD."
      },
      "attitude": {
        "obs": "Looks down at first and says it is embarrassing to come to hospital over this. Once the shame is addressed, he looks up more, speaks more freely, and by the end talks openly. Polite throughout.",
        "ans": {
          "0": ["小林《こばやし》 で お願《ねが》いします。", "Kobayashi, please."],
          "1": ["日本語《にほんご》 で 大丈夫《だいじょうぶ》 です。", "Japanese is fine."]
        },
        "need": ["Cooperative", "Fair eye contact"],
        "ok": ["Good eye contact"],
        "wrong": {
          "Guarded": "He is embarrassed, not guarded. He opens up as soon as you take away the shame.",
          "Suspicious": "Nothing in his manner suggests he distrusts you.",
          "Poor eye contact": "He looks down only at first, while he is embarrassed; his eye contact improves as he opens up.",
          "Uncooperative": "He answers every question, and tells you more than you ask."
        },
        "doc": "Cooperative, polite; embarrassed at first, then open; fair eye contact, better as the interview goes on",
        "why": "Shame is common in OCD and delays help for years. Write the change over the interview, not only the first minute: embarrassed at first, open once you said there was nothing to be ashamed of. That change tells the next doctor how to start with him."
      },
      "mood": {
        "obs": "Tense and worried as he describes the washing and checking. Looks embarrassed when he talks about his wife. Visibly relieved, and smiles briefly, when you give the problem a name.",
        "ans": {
          "0": ["今《いま》 は…… 正直《しょうじき》、 不安《ふあん》 です。 手《て》 の こと が ずっと 気《き》 に なって います。", "Right now... honestly, I'm anxious. My hands are on my mind the whole time."],
          "1": ["最近《さいきん》 は 気分《きぶん》 も 落《お》ち込《こ》みます。 時間《じかん》 ばかり かかって、 自分《じぶん》 が 情《なさ》けなくて。", "Lately my mood has been low too. Everything takes so much time, and I feel pathetic."],
          "2": ["五《ご》 くらい です。 病気《びょうき》 だ と 聞《き》いて、 少《すこ》し ほっと しました から。", "About five. Because I felt a little relieved to hear it's an illness."]
        },
        "quote": "不安《ふあん》 です。 …… 気分《きぶん》 も 落《お》ち込《こ》みます。 (I'm anxious. ... My mood is low too.)",
        "need": ["Anxious mood", "Congruent affect"],
        "ok": ["Sad mood", "Full range affect"],
        "wrong": {
          "Euthymic mood": "He says he is anxious now and that his mood has been low lately.",
          "Euphoric mood": "Nothing he says or shows is elevated.",
          "Flat affect": "His face shows worry, embarrassment and relief.",
          "Incongruent affect": "He looks tense when he talks about the washing and relieved when he hears it can be treated. His affect fits what he says."
        },
        "ev": {
          "find": "Anxious mood",
          "opts": [
            ["\"正直《しょうじき》、 不安《ふあん》 です。 手《て》 の こと が ずっと 気《き》 に なって います。\"", true],
            ["\"時間《じかん》 ばかり かかって、 自分《じぶん》 が 情《なさ》けなくて。\"", false],
            ["\"病気《びょうき》 だ と 聞《き》いて、 少《すこ》し ほっと しました から。\"", false]
          ],
          "why": "Asked how he feels now, he names anxiety and ties it to his hands. Feeling pathetic belongs to the low mood of the last weeks, and the relief shows the range of his affect, not his main mood."
        },
        "doc": "\"不安《ふあん》 です。\" (I'm anxious.) and lately \"気分《きぶん》 も 落《お》ち込《こ》みます。\" (My mood is low too.) Rates his mood today about 5 out of 10. Affect anxious, congruent, with appropriate range (embarrassed, tense, relieved when the condition is named)",
        "why": "Record both of his words: anxiety now, and low mood lately from the time he loses and his shame. Low mood is common with OCD, and a depressive disorder can develop alongside it, so ask about sleep, appetite and interest at follow-up as well as about suicidal thoughts."
      },
      "speech": {
        "obs": "Normal rate and volume. Quiet in the first minute, while embarrassed, then fuller. Tells his story in order without being prompted, with a good deal of detail about the checking.",
        "ans": {
          "0": ["二年《にねん》 くらい 前《まえ》 から、 手《て》 に ばい菌《きん》 が ついて いる 気《き》 が して、 何回《なんかい》 も 洗《あら》う よう に なりました。 家《いえ》 に 帰《かえ》ったら すぐ 服《ふく》 を 全部《ぜんぶ》 着替《きが》えます。 出《で》かける 前《まえ》 は、 ガス や 鍵《かぎ》 や 窓《まど》 を 何回《なんかい》 も 確《たし》かめて、 最近《さいきん》 は 仕事《しごと》 に 遅刻《ちこく》 する こと も 増《ふ》えました。", "For about two years I've felt there are germs on my hands, and I've started washing them again and again. As soon as I get home I change all my clothes. Before I go out I check the gas, the locks and the windows over and over, and lately I've been late for work more often."]
        },
        "need": ["Spontaneous", "Normal rate", "Adequate volume"],
        "ok": ["Productive"],
        "wrong": {
          "Soft volume": "He is quiet only in the first minute, while he is embarrassed; after that his volume is normal.",
          "Non-spontaneous (answers only when asked)": "He tells his story in order without needing a question for each part.",
          "Pressured": "He speaks at a normal rate and stops for your questions.",
          "Poverty of speech": "He says a good deal, with clear detail."
        },
        "doc": "Spontaneous, normal rate and volume (quiet at first while embarrassed); coherent and detailed",
        "why": "A quiet start in a first visit, from shame, is not a speech finding. Judge speech over the whole interview. Detail about checking is common in OCD; it is relevant to the question, so it is not a disorder of speech."
      },
      "process": {
        "obs": "Each answer stays on the question and reaches the point. He gives detail about the washing and checking, but it is relevant and he comes back to what you asked.",
        "ans": {
          "0": ["二年《にねん》 くらい 前《まえ》 から、 手《て》 に ばい菌《きん》 が ついて いる 気《き》 が して、 何回《なんかい》 も 洗《あら》う よう に なりました。 家《いえ》 に 帰《かえ》ったら すぐ 服《ふく》 を 全部《ぜんぶ》 着替《きが》えます。 出《で》かける 前《まえ》 は、 ガス や 鍵《かぎ》 や 窓《まど》 を 何回《なんかい》 も 確《たし》かめて、 最近《さいきん》 は 仕事《しごと》 に 遅刻《ちこく》 する こと も 増《ふ》えました。", "For about two years I've felt there are germs on my hands, and I've started washing them again and again. As soon as I get home I change all my clothes. Before I go out I check the gas, the locks and the windows over and over, and lately I've been late for work more often."],
          "1": ["手《て》 に 何《なに》 か が 残《のこ》って いる よう な、 すっきり しない 感《かん》じ です。 見《み》えない の は わかって いる ん です けど、 頭《あたま》 から 離《はな》れなくて。", "It feels as if something is left on my hands, as if they're never quite clean. I know I can't see anything, but I can't get it out of my head."]
        },
        "need": ["Linear", "Goal-directed"],
        "wrong": {
          "Circumstantial": "His detail is about the question you asked, and he reaches the point without a long detour.",
          "Tangential": "He stays on the question and answers it.",
          "Loose associations": "His ideas follow each other clearly."
        },
        "doc": "Linear and goal-directed; detailed but relevant answers",
        "why": "In OCD the repetition is in the thought content and the behaviour, not in how the ideas connect: he keeps coming back to the same doubt, but each answer is logical and on the point. Do not mistake a detailed, careful account for circumstantiality."
      },
      "perception": {
        "obs": "Attends to you throughout. No looking around, pausing to listen, or talking to anyone unseen.",
        "ans": {
          "0": ["いいえ、 ありません。", "No, never."],
          "1": ["いいえ。", "No."],
          "2": ["いいえ。 ばい菌《きん》 も、 見《み》える わけ では ない ん です。 ついて いる 気《き》 が する だけ で。", "No. I can't actually see the germs either. I just feel they're there."],
          "3": ["声《こえ》 は 聞《き》こえません。", "I don't hear any voices."],
          "4": ["いいえ、 ありません。", "No, never."]
        },
        "key": [0, 2],
        "need": ["Denies perceptual disturbances", "Not responding to internal stimuli"],
        "wrong": {
          "Tactile hallucinations": "He describes no false sensation on the skin, such as crawling or touching. The sense that germs are there is a doubt he recognizes as his own thought.",
          "Visual hallucinations": "He says plainly that he cannot see the germs.",
          "Auditory hallucinations": "He hears no voices or sounds.",
          "Responding to internal stimuli": "He attends to you throughout."
        },
        "ev": {
          "find": "Denies perceptual disturbances",
          "opts": [
            ["\"ばい菌《きん》 も、 見《み》える わけ では ない ん です。 ついて いる 気《き》 が する だけ で。\"", true],
            ["\"手《て》 に 何《なに》 か が 残《のこ》って いる よう な、 すっきり しない 感《かん》じ です。\"", false],
            ["\"日本語《にほんご》 で 大丈夫《だいじょうぶ》 です。\"", false]
          ],
          "why": "Asked about seeing things, he separates what he sees from what he fears: he sees nothing, he only feels the germs might be there. The feeling that his hands are not clean is the obsession itself, a thought, not a perception."
        },
        "doc": "Denies auditory and visual hallucinations; the sense of germs on his hands is an obsessional doubt (\"ついて いる 気《き》 が する だけ\"), not a perception; not responding to internal stimuli",
        "why": "Ask about perception in OCD as in any first visit, and listen for the difference between a fear and a sensation. Contamination fears can sound bodily (\"something is left on my hands\"), but he sees nothing and describes a doubt, not a sensation on the skin; if unsure, ask directly about touch. Write it in his words so no one later reads it as a tactile hallucination."
      },
      "content": {
        "ans": {
          "0": ["いいえ。 逆《ぎゃく》 です。 自分《じぶん》 が 誰《だれ》 か に ばい菌《きん》 を うつして しまう の が 怖《こわ》い ん です。", "No. It's the other way round. I'm afraid that I'll pass germs on to someone."],
          "1": ["いいえ、 ありません。", "No, never."],
          "2": ["いいえ。", "No."],
          "3": ["本当《ほんとう》 は、 そんな に 汚《よご》れて いない と 思《おも》います。 でも、 「もしかしたら」 と 思《おも》う と、 洗《あら》わず に は いられない ん です。", "Really, I think they're not that dirty. But when I think \"what if\", I can't stop myself from washing."],
          "4": ["はい。 考《かんが》えすぎ だ と、 自分《じぶん》 でも わかって います。", "Yes. I know myself that I'm thinking about it too much."],
          "5": ["自分《じぶん》 が 情《なさ》けない と は 思《おも》います。 時間《じかん》 ばかり かかって、 妻《つま》 に も 迷惑《めいわく》 を かけて。 でも、 価値《かち》 が ない と まで は 思《おも》いません。", "I do think I'm pathetic. Everything takes so long, and I'm a burden on my wife too. But I don't go as far as thinking I'm worthless."],
          "6": ["わかりません。 ずっと、 自分《じぶん》 が 変《へん》 な だけ だ と 思《おも》って いました。", "I don't know. All along I thought I was just strange."]
        },
        "key": [3, 4],
        "need": ["Preoccupation with ___", "No delusions elicited"],
        "ok": ["Guilt or worthlessness (not delusional)"],
        "wrong": {
          "Persecutory delusions": "He does not fear that anyone will harm him. He fears that he might make others ill, and he knows the fear is excessive.",
          "Delusions of reference": "He does not think things around him carry messages for him.",
          "Nihilistic delusions": "Nothing he says suggests this."
        },
        "ev": {
          "find": "Preoccupation with ___",
          "opts": [
            ["\"本当《ほんとう》 は、 そんな に 汚《よご》れて いない と 思《おも》います。 でも、 「もしかしたら」 と 思《おも》う と、 洗《あら》わず に は いられない ん です。\"", true],
            ["\"いいえ、 ありません。\"", false],
            ["\"自分《じぶん》 が 情《なさ》けない と は 思《おも》います。\"", false]
          ],
          "why": "This line holds the whole picture: the contamination doubt, the washing he cannot resist, and his own view that the fear is excessive. That last part is what separates an obsession from a delusion."
        },
        "doc": "Preoccupation with contamination (germs on his hands, passing illness to others): obsessions with washing compulsions (many times a day, long showers, changing all his clothes on coming home) and checking compulsions (gas, locks, windows; figures at work), more than three hours a day; seeks reassurance from his wife and the doctor. Recognizes the fears as excessive (\"そんな に 汚《よご》れて いない と 思《おも》います\"); no delusions elicited; no intrusive thoughts of harming others. Self-critical about the time lost (\"自分《じぶん》 が 情《なさ》けない\"), not delusional guilt",
        "why": "Two questions separate an obsession from a delusion: how sure he is, and whether there could be another explanation. He doubts his fear and calls it too much, so it is not delusional. Ask about other common themes as well, such as harm, symmetry, or unwanted sexual or religious thoughts, and record what he denies. Note the reassurance seeking here too: it works like a compulsion and keeps the cycle going."
      },
      "safety": {
        "ans": {
          "0": ["生《い》きて いて も 仕方《しかた》ない、 と まで は 思《おも》いません。 治《なお》る なら、 治《なお》したい です。", "I don't go as far as thinking life isn't worth living. If it can get better, I want to get better."],
          "1": ["いいえ、 それ は ありません。", "No, I haven't."],
          "2": ["死《し》にたい と 思《おも》った こと は ありません。 自殺《じさつ》 も 考《かんが》えた こと は ありません。", "I've never wanted to die. I've never thought about suicide either."],
          "3": ["いいえ、 ありません。", "No, I don't."],
          "4": ["いいえ。", "No."],
          "5": ["いいえ。 人《ひと》 を 傷《きず》つけたい と 思《おも》った こと は ありません。 自分《じぶん》 の せい で 誰《だれ》 か が 病気《びょうき》 に なる の が、 怖《こわ》い だけ です。", "No. I've never wanted to hurt anyone. I'm only afraid that someone will get ill because of me."]
        },
        "key": [2, 5],
        "need": ["Denies suicidal ideation", "Denies homicidal ideation"],
        "wrong": {
          "Passive death wish": "His mood is low, but he says he has never felt life was not worth living or wished not to wake up.",
          "Active suicidal ideation, no plan": "Asked directly, he says he has never thought about suicide.",
          "Homicidal ideation toward ___": "His fear of making others ill is the opposite of a wish to harm them. It distresses him, and he works hard to prevent it."
        },
        "ev": {
          "find": "Denies suicidal ideation",
          "opts": [
            ["\"死《し》にたい と 思《おも》った こと は ありません。 自殺《じさつ》 も 考《かんが》えた こと は ありません。\"", true],
            ["\"治《なお》る なら、 治《なお》したい です。\"", false],
            ["\"自分《じぶん》 の せい で 誰《だれ》 か が 病気《びょうき》 に なる の が、 怖《こわ》い だけ です。\"", false]
          ],
          "why": "Only his answer to the direct question rules out suicidal thoughts. Wanting to get better is a protective factor, not a denial. The last line is about harm to others, and shows a fear, not an intent."
        },
        "doc": "Denies suicidal ideation, death wish, plan or intent (\"死《し》にたい と 思《おも》った こと は ありません\"); denies homicidal ideation and thoughts of harming others; fears making others ill by contamination, which distresses him. Drinks a little occasionally. Protective: wants treatment, supportive wife",
        "why": "Ask every patient with low mood, even when the main problem is OCD: depression often comes with it, and the burden of the symptoms can grow. Ask again at follow-up. Do not confuse his fear of making others ill with a wish to harm; it is ego-dystonic, and he does everything he can to prevent it."
      },
      "orientation": {
        "ans": {
          "0": ["木曜日《もくようび》 です。", "It's Thursday."],
          "1": ["病院《びょういん》 の、 精神科《せいしんか》 の 外来《がいらい》 です。", "The psychiatry outpatient clinic of the hospital."],
          "2": ["精神科《せいしんか》 の 先生《せんせい》 です よ ね。", "You're the psychiatrist, aren't you?"]
        },
        "need": ["Oriented to 3 spheres"],
        "wrong": {
          "Disoriented to time": "He gives the day of the week at once.",
          "Disoriented to place": "He knows he is in the psychiatry outpatient clinic."
        },
        "doc": "Oriented to 3 spheres; alert; attention and concentration grossly intact through the interview",
        "why": "In a first outpatient visit with an alert, clear patient, orientation is quick, but still ask and record it. When he says he cannot get anything done, that comes from the intrusive doubts and the time the rituals take, not from a problem with his cognition."
      },
      "insight": {
        "ans": {
          "0": ["はい。 変《へん》 だ と いう の は、 ずっと わかって いました。 病気《びょうき》 だ と 聞《き》いて、 少《すこ》し ほっと しました。 でも、 わかって いて も、 やめられない ん です。", "Yes. I've always known it was strange. I felt a little relieved to hear it's an illness. But even knowing that, I can't stop."],
          "1": ["今日《きょう》 は 一人《ひとり》 で 来《き》ました が、 来《き》る よう に 言《い》った の は 妻《つま》 です。 毎日《まいにち》 何度《なんど》 も 「大丈夫《だいじょうぶ》 か な」 と 聞《き》いて しまう ので、 妻《つま》 も 疲《つか》れて いる と 思《おも》います。", "I came alone today, but it was my wife who told me to come. Every day I keep asking her \"Is it all right?\" over and over, so I think she's tired too."],
          "2": ["少《すこ》し ずつ なら、 練習《れんしゅう》 も やって みたい です。 お薬《くすり》 も、 効《き》く なら 考《かんが》えたい です。", "If it's a little at a time, I'd like to try the practice too. And if medicine works, I'd like to think about it."]
        },
        "need": ["Good", "Grade 5: intellectual insight"],
        "ok": ["Grade 4: aware, cause unknown in self"],
        "wrong": {
          "Grade 6: true emotional insight": "He understands that it is an illness, but cannot yet use that understanding to change what he does. That change is what treatment works toward.",
          "Grade 3: blames others/external factors": "He blames no one else; he sees the problem in himself.",
          "Poor": "He knows the fears are excessive, accepts that it is an illness and wants treatment."
        },
        "ev": {
          "find": "Grade 5: intellectual insight",
          "opts": [
            ["\"病気《びょうき》 だ と 聞《き》いて、 少《すこ》し ほっと しました。 でも、 わかって いて も、 やめられない ん です。\"", true],
            ["\"来《き》る よう に 言《い》った の は 妻《つま》 です。\"", false],
            ["\"お薬《くすり》 も、 効《き》く なら 考《かんが》えたい です。\"", false]
          ],
          "why": "He accepts that he is ill and knows the fears are excessive, but says the knowledge does not change what he does. That is intellectual insight, grade 5. Grade 4 is also defensible, since he does not yet know what causes it."
        },
        "doc": "Good (grade 5): knows the fears are excessive (\"変《へん》 だ と いう の は、 ずっと わかって いました\"), accepts it is an illness and wants treatment, but cannot stop the rituals; came at his wife's urging",
        "why": "In OCD, insight is also recorded as a specifier (good or fair, poor, absent), and it shapes how you explain treatment. His insight is a strength: he can understand why facing the fear without washing works, and why you will not keep reassuring him."
      },
      "impulse": {
        "obs": "Calm throughout. No irritability, even when you explain that you will not keep reassuring him.",
        "ans": {
          "0": ["いいえ。 怒《おこ》る こと は ほとんど ありません。 イライラ する の は、 自分《じぶん》 に 対《たい》して です。", "No. I hardly ever get angry. If I get irritated, it's with myself."],
          "1": ["いいえ、 一度《いちど》 も ありません。", "No, never once."]
        },
        "need": ["Good impulse control"],
        "wrong": {
          "Fair impulse control": "He has no history of losing his temper or acting recklessly, and stays calm in the interview.",
          "Poor impulse control": "He cannot stop washing, but a compulsion is not an impulse. It is done against his wish, to ease anxiety, and he tries to resist it. Impulse control here means anger, violence or reckless acts."
        },
        "doc": "Good impulse control; no history of temper outbursts or violence (\"一度《いちど》 も ありません\"); calm in the interview, including when reassurance was declined",
        "why": "Do not let the word \"can't stop\" mislead you. An impulse is acted on for its own sake or in the heat of the moment; a compulsion is a ritual he does to make the anxiety go away, and he knows it is excessive. Record impulse control from anger, violence and recklessness."
      },
      "judgment": {
        "ans": {
          "0": ["交番《こうばん》 に 届《とど》けます。 ……拾《ひろ》った 後《あと》 は、 すぐ 手《て》 を 洗《あら》いたく なる と 思《おも》います けど。", "I'd take it to the police box. ...Though after picking it up, I think I'd want to wash my hands straight away."],
          "1": ["近《ちか》く の 非常《ひじょう》 ボタン を 押《お》して、 車掌《しゃしょう》さん に 知《し》らせます。", "I'd press the nearest emergency button and tell the conductor."]
        },
        "need": ["Fair", "Intact test judgment"],
        "ok": ["Intact social judgment"],
        "wrong": {
          "Good": "He came for help and accepts treatment, but only after about two years of hiding the symptoms, when they were making him late for work and tiring his wife.",
          "Poor": "His hypothetical answers are sensible, and he has now sought help and wants treatment.",
          "Impaired test judgment": "Handing in a wallet and pressing the emergency button are sensible answers."
        },
        "doc": "Fair: intact test judgment (would hand a found wallet in to the police box, would press the emergency button and tell the conductor); hid the symptoms for about two years and came at his wife's urging, now that they make him late for work; accepts help and wants treatment",
        "why": "His answer about the wallet is sensible, and it also shows the obsession at work. Judgment is fair rather than good because of the long delay, but write the strength too: he came, he was honest, and he wants treatment. Shame, not poor reasoning, kept him away."
      }
    }
  },
  {
    "id": "ptsd",
    "title": "Mariko at her first visit",
    "level": "N3",
    "dx": "Posttraumatic stress disorder, provisional (confirm DSM-5-TR criteria and functional impact)",
    "form": "",
    "setting": "Outpatient clinic, first visit, after you have taken her history. Mariko Inoue, 42, works part-time at a supermarket and lives with her husband and their son Hiroto, 8. Her family doctor referred her. Staff address her as Inoue-san.",
    "chart": [
      "Referral from her family doctor: six months ago a truck hit her car from behind on the expressway while she was driving with her son. Both had only minor injuries and have recovered. Since then she sleeps poorly and has nightmares. Question: please assess.",
      "History taken earlier in this visit: nightmares about the accident, and the feeling that it is happening again when she hears brakes. She no longer drives, avoids the expressway and takes the bus to work. She jumps at small noises and snaps at her son, and blames herself for frightening him.",
      "Sleep: wakes again and again in the night. Lately has a glass of beer before bed on more nights; not every day, no morning drinking, no shaking hands.",
      "Earlier in the visit, when brakes screeched outside, she went rigid and briefly felt the crash was happening again. She settled within a minute with grounding (naming three things she could see in the room)."
    ],
    "cc": {
      "ask": "cc-hpi:1",
      "ans": [
        "夜《よる》 は 事故《じこ》 の 夢《ゆめ》 を 見《み》て 目《め》 が 覚《さ》めます し、 ブレーキ の 音《おと》 を 聞《き》く と、 今《いま》 また 起《お》きて いる みたい に なる ん です。",
        "At night I dream about the accident and wake up, and when I hear brakes it's as if it's happening again right now.",
        "Mariko"
      ],
      "opts": [
        [
          "\"夜《よる》 は 事故《じこ》 の 夢《ゆめ》 を 見《み》て 目《め》 が 覚《さ》めます し、 ブレーキ の 音《おと》 を 聞《き》く と、 今《いま》 また 起《お》きて いる みたい に なる ん です。\"",
          true,
          "The form records the chief complaint in the patient's own words, in Japanese, in quotation marks."
        ],
        [
          "Nightmares and flashbacks six months after a car crash",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "At night I dream about the accident and wake up, and when I hear brakes it's as if it's happening again.",
          false,
          "A translation loses the patient's words. Quote the Japanese; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Adult female, medium build, neatly dressed in clean everyday clothes, hair tidy. Sits on the edge of the chair with her bag held on her lap in both hands. Her shoulders are high and tight.",
        "ans": {
          "0": ["井上《いのうえ》 です。 よろしく お願《ねが》い します。", "I'm Inoue. Nice to meet you."],
          "1": ["はい、 失礼《しつれい》 します。", "Yes, thank you."]
        },
        "need": ["Adult female", "Medium built", "Well kempt"],
        "wrong": {
          "Older adult": "She is 42, an adult in middle age.",
          "Fairly kempt": "She is neatly dressed and tidy. Nothing is out of place.",
          "Unkempt": "She is neatly dressed and tidy.",
          "Poor hygiene": "Nothing suggests poor hygiene."
        },
        "doc": "Adult female, medium built, neatly dressed, well kempt; tense, sits on the edge of the chair holding her bag on her lap",
        "why": "Her appearance is in order, and that matters: she is still looking after herself and going to work. The tension shows in how she sits, not in how she is dressed. Write it here in one phrase and describe it fully under psychomotor activity."
      },
      "psychomotor": {
        "obs": "Sits on the edge of the chair, holding her bag tightly. Glances toward the window at small sounds from the street. Earlier, when brakes screeched outside, she startled, went rigid and gripped the bag; with grounding she slowed her breathing and settled within a minute. Now her grip is a little looser. No pacing, no slowing, no tremor.",
        "ans": {
          "0": ["人《ひと》 に 言《い》われた こと は ありません が、 自分《じぶん》 で は、 いつも 体《からだ》 に 力《ちから》 が 入《はい》って いる 感《かん》じ が します。 ちょっと した 音《おと》 で、 びくっと して しまう ん です。", "No one has said so, but I feel my body is always tensed up. The slightest noise makes me jump."]
        },
        "need": ["Restless"],
        "ok": ["No psychomotor agitation or retardation"],
        "wrong": {
          "Psychomotor agitation": "She does not pace or move about. She sits still and tense, holding herself ready.",
          "Psychomotor retardation": "She is tense and quick to startle, not slowed.",
          "Tremor": "No tremor is seen.",
          "Abnormal involuntary movements": "Startling at a sudden sound is an exaggerated startle response, not a movement disorder."
        },
        "doc": "Tense, restless: sits on the edge of the chair holding her bag, glances toward the window at street sounds; exaggerated startle at a braking sound outside with brief re-experiencing, settled within a minute with grounding; no agitation, retardation or tremor",
        "why": "The pick list has no word for \"tense\", so choose the nearest one and describe what you see. The startle at the braking sound is a sign of hyperarousal, and the minute that followed was re-experiencing. Write both, and write that she settled with grounding: it shows that she can come back to the present, which you will build on in treatment."
      },
      "attitude": {
        "obs": "Polite and open. Unsure at first whether her problem is \"enough\" for a psychiatrist, then talks readily once she is told she can choose what to share and can pause. Looks at you when she speaks; looks down when she talks about her son.",
        "ans": {
          "0": ["井上《いのうえ》 で 大丈夫《だいじょうぶ》 です。", "Inoue is fine."],
          "1": ["日本語《にほんご》 で お願《ねが》い します。", "Japanese, please."]
        },
        "need": ["Cooperative", "Good eye contact"],
        "ok": ["Fair eye contact"],
        "wrong": {
          "Guarded": "She is unsure at first, but she does not hold back. She chooses not to retell the crash in detail, and you told her she could.",
          "Suspicious": "She is wary of sounds outside, not of you.",
          "Uncooperative": "She answers every question and shares more than she is asked."
        },
        "doc": "Cooperative, polite; unsure at first whether she needs psychiatry, more open once given control over what she shares; good eye contact, looks down when speaking of her son",
        "why": "Choosing not to describe the crash is not guardedness. In a trauma-informed interview you invite her to stop, so record her attitude from how she engages, not from what she leaves out. Looking down when she speaks of her son goes with her guilt; it is not poor rapport."
      },
      "mood": {
        "obs": "Her face and voice are tense through most of the interview. Her eyes fill when she speaks of frightening her son. She looks relieved, and her shoulders drop a little, when you tell her this is a common reaction that often gets better with treatment.",
        "ans": {
          "0": ["今《いま》 は…… まだ 少《すこ》し どきどき して います。 さっき の 音《おと》 で。", "Right now... my heart is still pounding a little. From that sound earlier."],
          "1": ["ずっと 気《き》 が 張《は》って いる 感《かん》じ です。 夜《よる》 も あまり 眠《ねむ》れません し。", "I feel on edge all the time. And I can't sleep well at night either."],
          "2": ["四《よん》 くらい です。 さっき より は、 少《すこ》し ほっと しました けど。", "About four. I feel a bit more relieved than earlier, though."]
        },
        "quote": "ずっと 気《き》 が 張《は》って いる 感《かん》じ です。 (I feel on edge all the time.)",
        "need": ["Anxious mood", "Congruent affect"],
        "ok": ["Full range affect"],
        "wrong": {
          "Euthymic mood": "She describes being on edge all the time, and her heart is still pounding.",
          "Sad mood": "She is tearful about her son, but the mood she describes is tension and fear, not low mood.",
          "Restricted affect": "Her affect moves: tense, tearful about her son, relieved after the explanation.",
          "Flat affect": "Her face shows tension, tears and relief.",
          "Labile affect": "Each change in her affect has a clear reason: the sound, her son, your explanation.",
          "Incongruent affect": "Her tense face fits what she says."
        },
        "ev": {
          "find": "Anxious mood",
          "opts": [
            ["\"ずっと 気《き》 が 張《は》って いる 感《かん》じ です。\"", true],
            ["\"かかりつけ の 先生《せんせい》 に 勧《すす》められて 来《き》ました。\"", false],
            ["\"井上《いのうえ》 で 大丈夫《だいじょうぶ》 です。\"", false]
          ],
          "why": "Asked about her mood over the past two weeks, she describes a constant tension: that is the anxious mood. The other lines tell you how she came and what to call her, not how she feels."
        },
        "doc": "\"ずっと 気《き》 が 張《は》って いる 感《かん》じ です。 夜《よる》 も あまり 眠《ねむ》れません し。\" (I feel on edge all the time. And I can't sleep well at night either.) Rates her mood 4 of 10. Anxious mood; affect anxious, appropriate to content, tearful about her son, brighter after explanation",
        "why": "Quote her words: \"on edge\" (気《き》 が 張《は》って いる) is the everyday way people describe hyperarousal. She ties it to poor sleep, which she names herself. Appropriate affect is written here as congruent: her tension, her tears about her son and her relief each fit what she is talking about."
      },
      "speech": {
        "obs": "Normal rate and volume. Answers fully and adds things without being asked, such as her guilt about her son and the beer before bed. When she comes near the moment of the crash, she stops, apologizes and asks to leave it there. Her voice softens a little when she speaks of her son.",
        "ans": {
          "0": ["半年《はんとし》 前《まえ》、 高速道路《こうそくどうろ》 を 運転《うんてん》 して いた とき、 後《うし》ろ から トラック に ぶつけられた ん です。 息子《むすこ》 も 一緒《いっしょ》 でした。 けが は 二人《ふたり》 とも 軽《かる》くて、 もう 治《なお》りました。 でも…… すみません、 詳《くわ》しい こと は、 今《いま》 は ちょっと……。", "Six months ago, when I was driving on the expressway, a truck hit us from behind. My son was with me. We both had only minor injuries, and we've recovered. But... I'm sorry, the details, right now I'd rather not..."]
        },
        "need": ["Spontaneous", "Normal rate", "Adequate volume"],
        "ok": ["Productive"],
        "wrong": {
          "Non-spontaneous (answers only when asked)": "She tells you about her guilt and the beer without being asked.",
          "Soft volume": "Her voice softens a little when she speaks of her son, but it is adequate throughout.",
          "Slow rate": "She speaks at a normal rate. Stopping before the details of the crash is a choice, not slowed speech.",
          "Poverty of speech": "She says a good deal and answers fully.",
          "Pressured": "She speaks at a normal rate and can be interrupted easily."
        },
        "doc": "Spontaneous, productive, normal rate and volume; voice softens when speaking of her son; stops before the details of the crash and asks to leave it there",
        "why": "This is a standard open question, and you need only the outline: you are listening to the form of her speech, not collecting the story. When she stops, thank her and tell her she does not need to say more (これ 以上《いじょう》 詳《くわ》しく 話《はな》さなくて 大丈夫《だいじょうぶ》 です). Pushing for a detailed retelling at a first visit can set off re-experiencing; working with the memory belongs to planned trauma-focused therapy."
      },
      "process": {
        "obs": "Her account moves in order from the crash to what has changed since: sleep, sounds, driving, her son. She reaches the point of each question. The one stop comes when she nears the moment of the crash; after a breath she goes on with what her life is like now.",
        "ans": {
          "0": ["半年《はんとし》 前《まえ》、 高速道路《こうそくどうろ》 を 運転《うんてん》 して いた とき、 後《うし》ろ から トラック に ぶつけられた ん です。 息子《むすこ》 も 一緒《いっしょ》 でした。 けが は 二人《ふたり》 とも 軽《かる》くて、 もう 治《なお》りました。 でも…… すみません、 詳《くわ》しい こと は、 今《いま》 は ちょっと……。", "Six months ago, when I was driving on the expressway, a truck hit us from behind. My son was with me. We both had only minor injuries, and we've recovered. But... I'm sorry, the details, right now I'd rather not..."],
          "1": ["音《おと》 を 聞《き》く と、 体《からだ》 が 固《かた》く なって、 あの 日《ひ》 に 戻《もど》った みたい に なる ん です。 しばらく して、 あ、 もう 終《お》わった こと だ、 今《いま》 は 大丈夫《だいじょうぶ》、 と 気《き》づきます。", "When I hear the sound, my body goes stiff and it's as if I'm back on that day. After a while I realize: oh, that's over, I'm all right now."]
        },
        "need": ["Linear"],
        "ok": ["Goal-directed"],
        "wrong": {
          "Thought blocking": "Blocking is a sudden stop in the middle of a thought that the patient cannot explain. She stops on purpose, says why, and goes on.",
          "Circumstantial": "She does not wander into detail; if anything she gives less detail than you could ask for.",
          "Tangential": "She answers each question and stays with it.",
          "Loose associations": "Her ideas follow one another clearly."
        },
        "doc": "Linear and goal-directed; pauses by choice before the details of the crash, then continues; describes re-experiencing clearly (\"あの 日《ひ》 に 戻《もど》った みたい\")",
        "why": "Her pause is avoidance of a painful memory, and she tells you so; it is not a disorder of thought form. Her answer to the follow-up question is worth keeping word for word: \"as if I'm back on that day\" and then \"that's over, I'm all right now\" describe re-experiencing, and show that she knows afterwards it was a memory."
      },
      "perception": {
        "obs": "No sign of responding to anything you cannot hear or see. The braking sound earlier was real: you heard it too.",
        "ans": {
          "0": ["いいえ、 ありません。 ブレーキ の 音《おと》 に は すごく 敏感《びんかん》 に なりました けど、 さっき の も 本当《ほんとう》 に 外《そと》 で 鳴《な》った 音《おと》 です よね。", "No, never. I've become very sensitive to the sound of brakes, but the one earlier really was a sound outside, wasn't it?"],
          "1": ["いいえ。", "No."],
          "2": ["いいえ、 そういう もの は 見《み》えません。 ただ、 さっき みたい に、 あの 日《ひ》 の 場面《ばめん》 が 頭《あたま》 の 中《なか》 に 戻《もど》って くる こと は あります。", "No, I don't see anything like that. But, like earlier, scenes from that day come back into my head."],
          "3": ["声《こえ》 は 聞《き》こえません。", "I don't hear voices."],
          "4": ["いいえ、 ありません。", "No, never."]
        },
        "key": [0, 2],
        "need": ["Denies perceptual disturbances"],
        "ok": ["Not responding to internal stimuli"],
        "wrong": {
          "Auditory hallucinations": "The braking sound was real; you heard it too. Being very sensitive to a real sound is hyperarousal.",
          "Visual hallucinations": "The scenes that come back are memories of that day, in her head, and she knows they are memories. That is re-experiencing, not a hallucination.",
          "Responding to internal stimuli": "During the flashback she reacted to a real sound and a memory, and she came back as soon as she was grounded. Between those moments she attends fully to you."
        },
        "ev": {
          "find": "Denies perceptual disturbances",
          "opts": [
            ["\"いいえ、 そういう もの は 見《み》えません。 ただ、 さっき みたい に、 あの 日《ひ》 の 場面《ばめん》 が 頭《あたま》 の 中《なか》 に 戻《もど》って くる こと は あります。\"", true],
            ["\"ブレーキ の 音《おと》 を 聞《き》く と、 今《いま》 また 起《お》きて いる みたい に なる ん です。\"", false],
            ["\"夜《よる》 は 事故《じこ》 の 夢《ゆめ》 を 見《み》て 目《め》 が 覚《さ》めます。\"", false]
          ],
          "why": "Asked whether she sees things, she says no and tells you that what returns are scenes from that day, in her head. The other two lines are her flashbacks and nightmares: intrusion symptoms, which you document as re-experiencing, not as perceptual disturbances."
        },
        "doc": "Denies hallucinations in any modality; not responding to internal stimuli. Re-experiencing: flashbacks set off by braking sounds (one in this interview, settled with grounding) and nightmares of the accident; she recognizes these as memories",
        "why": "A flashback is not a hallucination. It is a memory that returns with the feeling that it is happening now, set off by a reminder, and afterwards she knows it was a memory. Record it under re-experiencing, here or in the content of the history, so that no one later reads \"hallucinations\" into her notes and treats her for psychosis."
      },
      "content": {
        "ans": {
          "0": ["いいえ、 そう は 思《おも》いません。", "No, I don't think so."],
          "1": ["いいえ。", "No."],
          "2": ["いいえ、 ありません。", "No, never."],
          "3": ["頭《あたま》 で は、 ぶつけて きた の は トラック の ほう だ と わかって います。 でも、 気持《きも》ち が ついて いかない ん です。", "In my head I know it was the truck that hit us. But my feelings don't follow."],
          "4": ["……私《わたし》 が 運転《うんてん》 して いなければ、 と 思《おも》って しまう ん です。 でも、 そう じゃ ない の かも しれません ね。", "...I keep thinking, if only I hadn't been driving. But maybe it isn't like that."],
          "5": ["はい。 あの 子《こ》 に 怖《こわ》い 思《おも》い を させた の は、 私《わたし》 な ん です。 それ なのに、 すぐ いらいら して しまって……。", "Yes. I'm the one who frightened him like that. And still, I snap at him so easily..."],
          "6": ["あの 事故《じこ》 です。 あの 日《ひ》 から、 全部《ぜんぶ》 変《か》わって しまいました。", "That accident. Everything changed from that day."]
        },
        "key": [5, 3],
        "need": ["Guilt or worthlessness (not delusional)", "No delusions elicited"],
        "ok": ["Preoccupation with ___"],
        "wrong": {
          "Persecutory delusions": "She does not believe anyone wants to harm her. Fear in cars after a crash is a realistic fear, not a delusion.",
          "Delusions of reference": "Sounds frighten her because they remind her of the crash, not because she thinks they carry a message for her.",
          "Nihilistic delusions": "She says everything changed, but she does not believe that she or the world no longer exists."
        },
        "ev": {
          "find": "Guilt or worthlessness (not delusional)",
          "opts": [
            ["\"あの 子《こ》 に 怖《こわ》い 思《おも》い を させた の は、 私《わたし》 な ん です。\"", true],
            ["\"あの 事故《じこ》 です。 あの 日《ひ》 から、 全部《ぜんぶ》 変《か》わって しまいました。\"", false],
            ["\"いいえ、 そう は 思《おも》いません。\"", false]
          ],
          "why": "She blames herself for her son's fear. It is not delusional: asked how sure she is, she says that in her head she knows the truck hit them, and she can consider that she is not to blame. The second line is her explanation of the cause, and the third denies persecution."
        },
        "doc": "No delusions elicited. Guilt about her son (\"あの 子《こ》 に 怖《こわ》い 思《おも》い を させた の は、 私《わたし》 な ん です\"), not delusional: knows the truck hit them and can consider another view. Attributes the change to the accident",
        "why": "Guilt and self-blame after a trauma are common and are part of the negative changes in thinking that belong to PTSD. Test it the same way as any strong belief: how sure, and could there be another explanation. She can step back from it, so it is not delusional. Do not argue it away today; reflect it and let therapy work on it."
      },
      "safety": {
        "ans": {
          "0": ["今《いま》 は、 そう は 感《かん》じません。 つらい です けど、 大翔《ひろと》 が います から。", "Not now. It's hard, but I have Hiroto."],
          "1": ["……一度《いちど》 だけ、 あの とき 死《し》んで いたら 楽《らく》 だった のに、 と 思《おも》った こと が あります。 でも、 今《いま》 は 思《おも》って いません。", "...Just once, I thought it would have been easier if I had died then. But I don't think that now."],
          "2": ["いいえ。 何《なに》 か しよう と 考《かんが》えた こと は ありません。", "No. I've never thought of doing anything."],
          "3": ["ありません。", "No."],
          "4": ["ありません。 大翔《ひろと》 の ため に、 よく なりたい ん です。", "No. I want to get better, for Hiroto."],
          "5": ["いいえ、 そんな こと は 思《おも》いません。", "No, I don't think anything like that."]
        },
        "key": [1, 2, 4],
        "need": ["Denies suicidal ideation", "Denies homicidal ideation"],
        "ok": ["Passive death wish"],
        "wrong": {
          "Active suicidal ideation, no plan": "She has never thought of acting; the one thought was that it would have been easier to have died.",
          "Active suicidal ideation with plan": "She has no plan and no intent.",
          "Homicidal ideation toward ___": "She denies any thought of harming anyone. Snapping at her son is irritability, which she regrets."
        },
        "ev": {
          "find": "Denies suicidal ideation",
          "opts": [
            ["\"でも、 今《いま》 は 思《おも》って いません。\"", true],
            ["\"大翔《ひろと》 が います から。\"", false],
            ["\"いいえ、 そんな こと は 思《おも》いません。\"", false]
          ],
          "why": "The first line answers the question about now: she has no wish to die today. \"大翔《ひろと》 が います から\" is her reason for living, a protective factor; record it, but it is not the denial itself. The third line answers the question about harming others."
        },
        "doc": "No current suicidal ideation, no plan or intent. One past passive death wish (\"あの とき 死《し》んで いたら 楽《らく》 だった のに\"), none now. Protective: her son (\"大翔《ひろと》 の ため に、 よく なりたい\"). Denies homicidal ideation. Told what to do if the thoughts return",
        "why": "Ask from general to specific, as here. The sleep question brought out the one past passive death wish; record it with its time, and record the current denial separately, so the next doctor can see both. Name her son as a protective factor and agree what she will do if the thoughts come back: tell her family or the clinic, and call the local crisis line or 119 if she feels in immediate danger. Ask again at each visit, especially while the drinking to sleep continues."
      },
      "orientation": {
        "obs": "After the flashback she named the clock, your desk and the curtain, and knew at once where she was.",
        "ans": {
          "0": ["水曜日《すいようび》 です。", "It's Wednesday."],
          "1": ["病院《びょういん》 の 精神科《せいしんか》 の 外来《がいらい》 です。 かかりつけ の 先生《せんせい》 に 紹介《しょうかい》 して いただきました。", "The psychiatry outpatient clinic at the hospital. My family doctor referred me."],
          "2": ["精神科《せいしんか》 の 先生《せんせい》 です。 最初《さいしょ》 に そう おっしゃいました。", "You're the psychiatrist. You said so at the start."]
        },
        "need": ["Oriented to 3 spheres"],
        "wrong": {
          "Disoriented to place": "During the flashback it felt to her like that day, but within a minute she named the room around her. Ask her now: she knows where she is.",
          "Disoriented to time": "She knows the day.",
          "Disoriented to person": "She knows who she is and who you are."
        },
        "doc": "Oriented to 3 spheres; reoriented within a minute after a brief flashback with grounding",
        "why": "During a flashback a person can lose touch with the present for a short time. Orientation in the MSE is what you find when you ask, and she is fully oriented. Record the brief episode under psychomotor activity and perception (re-experiencing), not as disorientation."
      },
      "insight": {
        "ans": {
          "0": ["はい……。 さっき 先生《せんせい》 が おっしゃった、 怖《こわ》い 出来事《できごと》 の 後《あと》 の 反応《はんのう》 な ん だ と 思《おも》います。 自分《じぶん》 で は どう に も できなくて。", "Yes... I think it's what you said earlier, a reaction after a frightening event. I can't do anything about it on my own."],
          "1": ["家族《かぞく》 に 連《つ》れて 来《こ》られた わけ では ありません。 かかりつけ の 先生《せんせい》 に 勧《すす》められて、 自分《じぶん》 で 来《き》ました。 この まま では いけない と 思《おも》って。", "My family didn't bring me. My family doctor suggested it, and I came myself. I felt I couldn't go on like this."],
          "2": ["薬《くすり》 で よく なる の か は、 わかりません。 でも、 よく なる 方法《ほうほう》 が ある なら、 やって みたい です。", "I don't know whether medicine would help. But if there's a way to get better, I want to try it."]
        },
        "key": [0],
        "need": ["Good", "Grade 5: intellectual insight"],
        "wrong": {
          "Fair": "She sees the problem, ties it to the accident and came for help herself.",
          "Grade 3: blames others/external factors": "She names the accident as the cause, but she sees the reaction as a problem in herself that needs treatment. That is not blaming others.",
          "Grade 4: aware, cause unknown in self": "She knows she has a problem and understands it as a reaction to the frightening event.",
          "Grade 6: true emotional insight": "Today she understands the explanation. Emotional insight shows when that understanding changes what she does, which comes with treatment."
        },
        "ev": {
          "find": "Grade 5: intellectual insight",
          "opts": [
            ["\"怖《こわ》い 出来事《できごと》 の 後《あと》 の 反応《はんのう》 な ん だ と 思《おも》います。\"", true],
            ["\"かかりつけ の 先生《せんせい》 に 勧《すす》められて、 自分《じぶん》 で 来《き》ました。\"", false],
            ["\"よく なる 方法《ほうほう》 が ある なら、 やって みたい です。\"", false]
          ],
          "why": "She names her symptoms as a reaction to the frightening event, in her own words. Coming herself and wanting to try treatment support good insight, but the first line shows her understanding of the illness."
        },
        "doc": "Good, grade 5 (intellectual insight): understands her symptoms as a reaction to the accident (\"怖《こわ》い 出来事《できごと》 の 後《あと》 の 反応《はんのう》\"); came on her family doctor's advice by her own choice; open to treatment",
        "why": "The question about the family does not fit her: she came on her own. Ask it in a form that fits, and listen to the answer anyway, because \"I came myself\" tells you about insight too. Her open answer about treatment is a good start for explaining trauma-focused psychotherapy at the next visit."
      },
      "impulse": {
        "ans": {
          "0": ["抑《おさ》えられない と いう ほど では ありません。 でも、 大翔《ひろと》 に 大《おお》きな 声《こえ》 を 出《だ》して しまって、 後《あと》 で 後悔《こうかい》 します。", "Not so much that I can't control it. But I raise my voice at Hiroto, and then I regret it."],
          "1": ["いいえ、 ありません。 手《て》 を 上《あ》げた こと も ありません。", "No, never. I've never even raised a hand to him."]
        },
        "need": ["Good impulse control"],
        "wrong": {
          "Fair impulse control": "She snaps at her son and raises her voice, but she has never hurt anyone, she stops herself, and she regrets it. Irritability is an arousal symptom, not poor control.",
          "Poor impulse control": "There is no violence, no destruction and no reckless behaviour."
        },
        "doc": "Good impulse control; irritable with her son (raises her voice, then regrets it), never physically hurt him or anyone; settled with grounding during the interview. Drinks a glass of beer to sleep on more nights lately; no morning drinking",
        "why": "Irritability is one of the arousal symptoms of PTSD; record it without labelling her a danger to her son. Ask about her son kindly and directly, as here, because it is part of a family assessment, and ask whether he needs support of his own. Watch the beer at each visit: drinking to cope with trauma symptoms can grow into a second problem."
      },
      "judgment": {
        "ans": {
          "0": ["交番《こうばん》 に 届《とど》けます。", "I'd take it to the police box."],
          "1": ["駅員《えきいん》さん か 車掌《しゃしょう》さん に 知《し》らせます。 ……正直《しょうじき》、 その 場《ば》 で 固《かた》まって しまう かも しれません けど。", "I'd tell the station staff or the conductor. ...Honestly, I might freeze on the spot, though."]
        },
        "need": ["Fair", "Intact test judgment"],
        "ok": ["Intact social judgment"],
        "wrong": {
          "Good": "Her answers are sensible and she sought help, but she is drinking to sleep on more nights, and she fears she might freeze in an emergency.",
          "Poor": "Her answers are sensible, she stopped driving while flashbacks come with sounds, and she came for help.",
          "Impaired test judgment": "Both answers are practical and safe.",
          "Impaired social judgment": "She came for help, stopped driving and keeps working. The beer is a concern to follow, not a sign that her judgment has failed."
        },
        "doc": "Fair: intact test judgment (wallet to the police box; smoke on a train, tell the staff, though she fears she might freeze); social judgment largely intact (sought help, keeps working), but drinking to sleep on more nights",
        "why": "Her test answers are sound. Her honest comment that she might freeze is not poor judgment; freezing under threat is a common trauma response, and it is worth naming in therapy. Judgment is fair rather than good because of the growing use of beer to sleep: bring it into the sleep plan rather than scolding her for it."
      }
    }
  },
  {
    "id": "panic",
    "title": "Daiki in the emergency department",
    "level": "N3",
    "dx": "Panic disorder (provisional), possibly with agoraphobic avoidance; heavy daily caffeine as a likely trigger",
    "form": "",
    "setting": "Emergency department, late evening, after psychiatry was called. Daiki Okada, 27, systems engineer, lives alone; his mother lives in Osaka and they talk by phone. Tonight he had a sudden attack on a crowded commuter train, his third emergency visit in two months. You have taken his history (his case simulation), explained the panic cycle and practised slow breathing with him. Now complete the MSE of this first visit. Staff address him as Okada-san.",
    "chart": [
      "Emergency physician: came in late this evening after a sudden attack on a crowded commuter train: pounding heart, tight chest, breathlessness, tingling hands and fear of dying. Third visit to the emergency department in two months.",
      "The tests tonight and at the two earlier visits were normal. No medicine has been given in the emergency department. Question to psychiatry: the physician thinks of panic attacks; please assess.",
      "From your history tonight: the attacks start suddenly, peak within minutes and settle within the hour. Since they began he fears another attack, takes taxis instead of the train, and has missed a few days of work. A lot of coffee every day and a lot of energy drinks at work; hardly any alcohol, nothing else. Lives alone and says he has been a bit down."
    ],
    "cc": {
      "ask": "cc-hpi:0",
      "ans": [
        "また 来《き》て しまいました。 満員電車《まんいんでんしゃ》 の 中《なか》 で 急《きゅう》 に 胸《むね》 が ドキドキ して、 息《いき》 が できなく なって……。 今度《こんど》 こそ 死《し》ぬ か と 思《おも》いました。",
        "I'm back again. On a packed train my heart suddenly started pounding and I couldn't breathe... I really thought I was going to die this time.",
        "Daiki"
      ],
      "opts": [
        [
          "\"満員電車《まんいんでんしゃ》 の 中《なか》 で 急《きゅう》 に 胸《むね》 が ドキドキ して、 息《いき》 が できなく なって……。 今度《こんど》 こそ 死《し》ぬ か と 思《おも》いました。\"",
          true,
          "The form records the chief complaint in the patient's own words, in Japanese, in quotation marks."
        ],
        [
          "Third panic attack in two months, on a crowded train, with fear of dying",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "On a packed train my heart suddenly started pounding and I couldn't breathe. I really thought I was going to die this time.",
          false,
          "A translation loses the patient's words. Quote the Japanese; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Adult male in his late twenties, medium built, in office clothes: a white shirt with the tie loosened and the top button open, dark trousers, his jacket folded on the chair. Hair neat, clean-shaven. The back of his shirt is damp with sweat. He holds his phone in one hand.",
        "ans": {
          "0": ["岡田《おかだ》 です。 ……よろしく お願《ねが》い します。", "I'm Okada. ...Nice to meet you."],
          "1": ["あ、 すみません。 失礼《しつれい》 します。", "Oh, sorry. Thank you."]
        },
        "need": ["Adult male", "Medium built", "Well kempt"],
        "ok": ["Young adult", "Fairly kempt"],
        "wrong": {
          "Unkempt": "His clothes are clean and his hair is neat. A shirt damp with sweat after an attack is not neglect.",
          "Poor hygiene": "Sweating during a panic attack is a bodily symptom, not poor hygiene.",
          "Looks older than stated age": "He looks his age."
        },
        "doc": "Adult male, medium built, in office clothes (tie loosened, shirt damp with sweat), well kempt",
        "why": "He came straight from the train in his work clothes. The sweat-damp shirt and loosened tie belong to the attack: sweating and a feeling of not getting enough air are part of it. Write what you see, and keep the bodily signs in mind when you document the other domains."
      },
      "psychomotor": {
        "obs": "When you first came in, he sat on the edge of the bed with a hand on his chest, breathing fast and turning his phone over and over. After you practised slow breathing together, he sat back, put the phone down and kept his hands still. No tremor or abnormal movements are seen.",
        "ans": {
          "0": ["一人暮《ひとりぐ》らし なので、 言《い》って くれる 人《ひと》 は いません。 でも、 発作《ほっさ》 の あと は 落《お》ち着《つ》かなくて、 じっと して いられない ん です。", "I live alone, so there's no one to tell me. But after an attack I can't settle; I can't keep still."]
        },
        "need": ["No psychomotor agitation or retardation"],
        "ok": ["Restless"],
        "wrong": {
          "Psychomotor agitation": "He was restless and anxious on arrival, but he stayed on the bed, followed the breathing with you and settled. That is not marked agitation.",
          "Psychomotor retardation": "Nothing is slowed. He moves and answers at a normal pace.",
          "Tremor": "His hands tingled during the attack, but no tremor is seen.",
          "Abnormal involuntary movements": "Turning his phone over is a nervous habit while anxious, not an abnormal movement."
        },
        "doc": "Restless on arrival (hand on chest, fast breathing, turning his phone over), settled after slow breathing; now no psychomotor agitation or retardation; no tremor",
        "why": "Write the change, not only the end state: restless on arrival, settled after slow breathing. It shows that the attack passed and that he can use the breathing, and it gives the emergency staff a baseline if another attack starts before he leaves."
      },
      "attitude": {
        "obs": "Looks at you when you speak and when he answers. Answers every question fully and asks his own questions, for example whether his heart is really all right. When psychiatry was first mentioned he asked, a little sharply, whether you think it is all in his head; once you said the symptoms are real, he relaxed and talked openly.",
        "ans": {
          "0": ["岡田《おかだ》 で いい です。", "Okada is fine."],
          "1": ["はい、 日本語《にほんご》 で 大丈夫《だいじょうぶ》 です。", "Yes, Japanese is fine."]
        },
        "need": ["Cooperative", "Good eye contact"],
        "wrong": {
          "Guarded": "His sharp question about whether it is \"in his head\" was a fear of not being believed. Once you took the symptoms seriously, he talked openly.",
          "Suspicious": "He does not doubt your motives. He wants to know whether his heart is safe.",
          "Irritable": "One sharp question when psychiatry came up is not an irritable attitude. He was frightened and worried about being dismissed.",
          "Uncooperative": "He answers every question and practised the breathing with you.",
          "Fair eye contact": "He looks at you through the interview."
        },
        "doc": "Cooperative, good eye contact; briefly defensive when psychiatry was mentioned (asked whether it is \"in his head\"), open once the symptoms were taken seriously; asks appropriate questions about his heart",
        "why": "Many patients sent to psychiatry from the emergency department fear they are being told the symptoms are imagined. Say plainly that the symptoms are real and happen in the body. His questions about his heart are a fair worry after three frightening attacks, not a sign of a difficult attitude."
      },
      "mood": {
        "obs": "Anxious at first: his face is tense and he keeps a hand near his chest. He smiles a little when he says the breathing helped, and his face relaxes after the explanation of the alarm. When he talks about living alone and missing work, he looks down and his voice goes quiet.",
        "ans": {
          "0": ["さっき より は 楽《らく》 に なりました。 でも、 正直《しょうじき》、 最近《さいきん》 ちょっと 落《お》ち込《こ》んで います。", "It's easier than before. But honestly, I've been a bit down lately."],
          "1": ["発作《ほっさ》 が 始《はじ》まって から、 ずっと 不安《ふあん》 です。 また 来《く》る ん じゃ ない か って。 夜《よる》 も その こと を 考《かんが》えて しまって、 あまり 眠《ねむ》れません。", "Since the attacks started I've been anxious all the time, wondering if another one will come. At night I end up thinking about it too, and I don't sleep much."],
          "2": ["四《よん》 ぐらい です か ね。", "About a four, I guess."]
        },
        "quote": "正直《しょうじき》、 最近《さいきん》 ちょっと 落《お》ち込《こ》んで います。 (Honestly, I've been a bit down lately.)",
        "need": ["Sad mood", "Congruent affect"],
        "ok": ["Anxious mood", "Full range affect"],
        "wrong": {
          "Euthymic mood": "He says he has been down, and anxious about the next attack.",
          "Euphoric mood": "Nothing in his words or face suggests elation.",
          "Irritable mood": "He was sharp for a moment when psychiatry came up, but he does not describe himself as irritable.",
          "Flat affect": "His face shows fear at first, then relief and a small smile.",
          "Blunted affect": "His feelings show clearly in his face and voice.",
          "Restricted affect": "He shows fear, relief and sadness during the interview.",
          "Labile affect": "His face brightened after the explanation and the breathing. That is a fitting response to what happened, not a sudden, unexplained swing.",
          "Incongruent affect": "His anxious, then quieter face fits what he says."
        },
        "ev": {
          "find": "Sad mood",
          "opts": [
            ["\"正直《しょうじき》、 最近《さいきん》 ちょっと 落《お》ち込《こ》んで います。\"", true],
            ["\"さっき より は 楽《らく》 に なりました。\"", false],
            ["\"四《よん》 ぐらい です か ね。\"", false]
          ],
          "why": "\"落《お》ち込《こ》んで います\" (I've been down) names a low mood in his own words; quote it. Feeling easier than before tells you the attack has passed, not what his mood is. A number out of ten supports the picture but is not his own description."
        },
        "doc": "\"正直《しょうじき》、 最近《さいきん》 ちょっと 落《お》ち込《こ》んで います。\" (Honestly, I've been a bit down lately.) Mood 4/10; also anxious since the attacks began (\"ずっと 不安《ふあん》 です\"), sleeping poorly from worry about the next attack. Affect anxious, brighter after the explanation and slow breathing; congruent",
        "why": "He gives two feelings: down, and anxious about the next attack. Quote the low mood and record the anxiety, because low mood after repeated attacks, in a man who lives alone, is why you ask directly about suicidal thoughts. The picks have no word for anxious affect, so write it in the details, with the brightening after the explanation."
      },
      "speech": {
        "obs": "At first he spoke quickly in short phrases, catching his breath. After the slow breathing: normal rate and volume, full answers, and questions of his own.",
        "ans": {
          "0": ["満員電車《まんいんでんしゃ》 に 乗《の》って いたら、 急《きゅう》 に 胸《むね》 が ドキドキ して、 締《し》め付《つ》けられる よう に なって。 息《いき》 が うまく 吸《す》えなくて、 手《て》 も しびれて きて……。 前《まえ》 の 二回《にかい》 と 同《おな》じ です。 一時間《いちじかん》 も しない うち に 治《おさ》まった ん です けど。 ……先生《せんせい》、 心臓《しんぞう》 は 本当《ほんとう》 に 大丈夫《だいじょうぶ》 なん です か。", "I was on a packed train, and suddenly my heart was pounding and my chest felt squeezed. I couldn't breathe in properly, and my hands went numb... The same as the last two times. It settled within the hour, though. ...Doctor, is my heart really all right?"]
        },
        "need": ["Spontaneous", "Normal rate", "Adequate volume"],
        "ok": ["Productive"],
        "wrong": {
          "Rapid rate": "He spoke quickly only while he was still breathless at the start. After the slow breathing his rate is normal; write the change in the details.",
          "Pressured": "He was never hard to interrupt, and he stops to listen to your answers.",
          "Non-spontaneous (answers only when asked)": "He asks about his heart without being asked.",
          "Soft volume": "His voice goes quiet only for a moment, when he talks about feeling down."
        },
        "doc": "Spontaneous, productive, normal rate and volume after settling (quick and breathless at first); asks appropriate questions (\"心臓《しんぞう》 は 本当《ほんとう》 に 大丈夫《だいじょうぶ》 なん です か\")",
        "why": "Breathlessness during an attack changes speech for a while: short phrases, quick, catching breath. Record speech as it is once he has settled, and note how it was at first. His question about his heart deserves a real answer: what was checked and that the tests were normal, not a quick \"it's nothing\"."
      },
      "process": {
        "obs": "Tells the story of tonight in order, from the train to the emergency department, and answers each follow-up question. When he drifts to his worry about his heart, he comes back to the question by himself.",
        "ans": {
          "0": ["満員電車《まんいんでんしゃ》 に 乗《の》って いたら、 急《きゅう》 に 胸《むね》 が ドキドキ して、 締《し》め付《つ》けられる よう に なって。 息《いき》 が うまく 吸《す》えなくて、 手《て》 も しびれて きて……。 前《まえ》 の 二回《にかい》 と 同《おな》じ です。 一時間《いちじかん》 も しない うち に 治《おさ》まった ん です けど。 ……先生《せんせい》、 心臓《しんぞう》 は 本当《ほんとう》 に 大丈夫《だいじょうぶ》 なん です か。", "I was on a packed train, and suddenly my heart was pounding and my chest felt squeezed. I couldn't breathe in properly, and my hands went numb... The same as the last two times. It settled within the hour, though. ...Doctor, is my heart really all right?"],
          "1": ["自分《じぶん》 の 体《からだ》 なのに、 言《い》う こと を 聞《き》かない 感《かん》じ です。 心臓《しんぞう》 が 止《と》まる ん じゃ ない か、 頭《あたま》 が おかしく なる ん じゃ ない か って。", "It feels like my own body won't do what I tell it. I wonder if my heart will stop, or if I'll go mad."]
        },
        "need": ["Linear", "Goal-directed"],
        "wrong": {
          "Circumstantial": "He gives the details that matter, in order, and reaches the point without a long detour.",
          "Tangential": "His question about his heart is linked to the story he is telling, and he answers what you ask.",
          "Flight of ideas": "His speech is not fast once he has settled, and his ideas follow one line.",
          "Loose associations": "Each sentence follows clearly from the one before."
        },
        "doc": "Linear and goal-directed: tells tonight's attack in order and answers follow-up questions; returns to his worry about his heart",
        "why": "Coming back to one worry (his heart) is part of his thought content, not a problem with the process. Asked what the attack feels like, he describes it clearly (\"自分《じぶん》 の 体《からだ》 なのに、 言《い》う こと を 聞《き》かない\"). That clear account of onset and course is also what helps the team tell a panic attack from other causes."
      },
      "perception": {
        "obs": "Looks at you and around the bay in an ordinary way. Does not pause as if listening, and does not react to anything you cannot see or hear.",
        "ans": {
          "0": ["いいえ、 ありません。", "No, none."],
          "1": ["いいえ。", "No."],
          "2": ["いいえ、 見《み》えません。", "No, I don't see anything like that."],
          "3": ["声《こえ》 は 聞《き》こえません。", "I don't hear any voices."],
          "4": ["いいえ、 ない です。", "No, nothing like that."]
        },
        "key": [0, 2],
        "need": ["Denies perceptual disturbances", "Not responding to internal stimuli"],
        "wrong": {
          "Tactile hallucinations": "The tingling in his hands is a real bodily symptom of the attack, often from breathing fast. He feels it in his own hands and it settles with the attack. It is not a hallucination.",
          "Auditory hallucinations": "He denies hearing voices or sounds.",
          "Visual hallucinations": "He denies seeing anything others cannot see.",
          "Responding to internal stimuli": "He does not pause, listen or react to anything you cannot perceive."
        },
        "doc": "Denies auditory and visual hallucinations; not responding to internal stimuli. Tingling hands during the attack recorded as a bodily symptom of the attack, not a perceptual disturbance",
        "why": "Ask, and record the denial. Do not mistake the bodily symptoms of panic for perceptual disturbances: tingling hands, a pounding heart and a tight chest are what his body really felt. Calling them hallucinations would be wrong, and would tell him again that it is \"all in his head\"."
      },
      "content": {
        "ans": {
          "0": ["いいえ。 だれ か が…… という こと は ない です。 怖《こわ》い の は 発作《ほっさ》 です。", "No. Nothing like someone trying to... What I'm scared of is the attacks."],
          "1": ["いいえ、 ありません。", "No, nothing like that."],
          "2": ["いいえ。", "No."],
          "3": ["心臓《しんぞう》 の 病気《びょうき》 じゃ ない か と…… 半分《はんぶん》 くらい は 思《おも》って いました。 でも、 検査《けんさ》 が 三回《さんかい》 とも 正常《せいじょう》 なら、 違《ちが》う の かも しれません。", "That it's heart disease... I half believed it. But if the tests were normal all three times, maybe it isn't."],
          "4": ["警報《けいほう》 の 話《はなし》 を 聞《き》いて、 そう かも しれない と 思《おも》いました。 コーヒー も 飲《の》みすぎて いた し。", "When I heard about the alarm, I thought maybe that's it. I was drinking too much coffee too."],
          "5": ["会社《かいしゃ》 を 休《やす》んで、 迷惑《めいわく》 を かけて いる の は 申《もう》し訳《わけ》ない です。 でも、 自分《じぶん》 に 価値《かち》 が ない とか は 思《おも》いません。", "I feel bad about missing work and causing trouble. But I don't think I'm worthless or anything."],
          "6": ["締《し》め切《き》り が 続《つづ》いて、 疲《つか》れて いた の も ある と 思《おも》います。 でも、 一番《いちばん》 怖《こわ》い の は、 また 発作《ほっさ》 が 来《く》る ん じゃ ない か って こと です。 電車《でんしゃ》 に 乗《の》る 前《まえ》 から、 もう 怖《こわ》く なります。", "I think the run of deadlines and being tired is part of it. But what scares me most is that another attack will come. I get scared even before I get on the train."]
        },
        "key": [3, 6],
        "need": ["No delusions elicited", "Preoccupation with ___"],
        "wrong": {
          "Persecutory delusions": "He does not believe anyone wants to harm him. His fear is of the attacks.",
          "Nihilistic delusions": "A fear of dying during an attack is not a belief that he is dead or that his body has gone.",
          "Delusions of reference": "He does not think things around him carry messages for him.",
          "Guilt or worthlessness (not delusional)": "He feels sorry about missing work, but says plainly that he does not feel worthless. Record the regret in the details."
        },
        "ev": {
          "find": "Preoccupation with ___",
          "opts": [
            ["\"一番《いちばん》 怖《こわ》い の は、 また 発作《ほっさ》 が 来《く》る ん じゃ ない か って こと です。\"", true],
            ["\"コーヒー も 飲《の》みすぎて いた し。\"", false],
            ["\"自分《じぶん》 に 価値《かち》 が ない とか は 思《おも》いません。\"", false]
          ],
          "why": "His thoughts keep coming back to the next attack, and to dying or going mad during it. That fear of the attack itself, felt even before he boards the train, is what keeps the avoidance going. The coffee line is a trigger he has noticed, and the last line rules out worthlessness."
        },
        "doc": "No delusions elicited. Preoccupied with fear of another attack (\"また 発作《ほっさ》 が 来《く》る ん じゃ ない か\") and of dying or going mad during one; fear starts before boarding a train; had half believed it was heart disease, now open to another explanation after three normal sets of tests. Regrets missing work; no worthlessness",
        "why": "His belief that it might be his heart is not a delusion: it is a fair worry, held with doubt, and he changes it when he hears the results and the explanation. That is the test: ask how sure he is, and whether there could be another explanation. Name the preoccupation in his own words; it is the target of the step-by-step therapy that will follow in the outpatient clinic."
      },
      "safety": {
        "ans": {
          "0": ["いいえ、 そこ まで は 思《おも》いません。", "No, I don't think that far."],
          "1": ["いいえ。 むしろ、 死《し》ぬ の が 怖《こわ》い ん です。 発作《ほっさ》 の とき は 本当《ほんとう》 に 死《し》ぬ か と 思《おも》って。", "No. If anything, I'm afraid of dying. During an attack I really think I'm going to die."],
          "2": ["ありません。 大阪《おおさか》 の 母《はは》 に も 心配《しんぱい》 を かけたく ない です し。", "No. I don't want to worry my mother in Osaka either."],
          "3": ["いいえ、 何《なに》 も ありません。", "No, nothing."],
          "4": ["ない です。", "No."],
          "5": ["いいえ、 まったく。", "No, not at all."]
        },
        "key": [2, 5],
        "need": ["Denies suicidal ideation", "Denies homicidal ideation"],
        "wrong": {
          "Passive death wish": "He fears dying; he does not wish for it. Fear of death during an attack is the catastrophic fear of panic, not a death wish.",
          "Active suicidal ideation, no plan": "Asked directly, he says he has no thoughts of suicide.",
          "Active suicidal ideation with plan": "He denies any thoughts of suicide, and has no plan.",
          "Homicidal ideation toward ___": "He denies any thought of harming anyone."
        },
        "ev": {
          "find": "Denies suicidal ideation",
          "opts": [
            ["\"ありません。 大阪《おおさか》 の 母《はは》 に も 心配《しんぱい》 を かけたく ない です し。\"", true],
            ["\"むしろ、 死《し》ぬ の が 怖《こわ》い ん です。\"", false],
            ["\"正直《しょうじき》、 最近《さいきん》 ちょっと 落《お》ち込《こ》んで います。\"", false]
          ],
          "why": "Only his answer to the direct question about suicide tells you he has no suicidal thoughts, and he gives a reason that protects him: his mother. Fear of dying is a different thing and does not answer the question; the low mood is why you ask."
        },
        "doc": "Denies suicidal ideation (\"ありません\"), death wish, plan and intent; protective factor: does not want to worry his mother in Osaka, in touch by phone. Fears dying during attacks (not a death wish). Denies homicidal ideation. Low mood, lives alone",
        "why": "Ask every patient with low mood, however the visit began, and write the answer in his words. Do not mix up the fear of dying, which drives the attacks, with a wish to die. Before he leaves, tell him what to do if thoughts of suicide ever come: the local crisis line, or ｜119番《ひゃくじゅうきゅうばん》 in an emergency."
      },
      "orientation": {
        "obs": "Alert and attentive throughout; follows the breathing instructions step by step and remembers what you said about the alarm.",
        "ans": {
          "0": ["木曜日《もくようび》 です。 ……もう 夜《よる》 です けど。", "It's Thursday. ...Though it's night already."],
          "1": ["病院《びょういん》 の 救急外来《きゅうきゅうがいらい》 です。 前《まえ》 に も 来《き》た ので、 わかります。", "The hospital's emergency department. I've been here before, so I know."],
          "2": ["精神科《せいしんか》 の 先生《せんせい》 です よ ね。 さっき 呼吸《こきゅう》 の 仕方《しかた》 を 教《おし》えて くれた。", "You're the psychiatrist, right? You showed me how to breathe just now."]
        },
        "need": ["Oriented to 3 spheres"],
        "wrong": {
          "Disoriented to time": "He knows the day and that it is night.",
          "Disoriented to place": "He knows he is in the hospital's emergency department.",
          "Disoriented to person": "He knows who you are and what you did."
        },
        "doc": "Oriented to 3 spheres; alert, attention intact",
        "why": "During a severe attack some people feel confused or far away for a moment, so check orientation once he has settled. Here it is intact, and his attention is good: he follows the breathing and remembers the explanation. Confusion that lasts after an attack is not typical of panic and needs a medical review."
      },
      "insight": {
        "ans": {
          "0": ["病気《びょうき》 か どう か は…… わかりません。 何《なに》 か が おかしい の は 確《たし》か です。 警報《けいほう》 の 話《はなし》 は なんとなく わかります けど、 まだ 心臓《しんぞう》 の こと が 少《すこ》し 心配《しんぱい》 です。", "Whether it's an illness... I don't know. Something is definitely wrong. I sort of get the story about the alarm, but I'm still a bit worried about my heart."],
          "1": ["家族《かぞく》 は 来《き》て いません。 母《はは》 は 大阪《おおさか》 です。 一人《ひとり》 で 来《き》ました。 また 死《し》ぬ か と 思《おも》った から です。", "My family didn't come. My mother is in Osaka. I came on my own. Because I thought I was going to die again."],
          "2": ["わかりません。 でも、 発作《ほっさ》 が 減《へ》る なら、 外来《がいらい》 で 話《はなし》 を 聞《き》いて みたい です。", "I don't know. But if it means fewer attacks, I'd like to hear about it at the outpatient clinic."]
        },
        "key": [0],
        "need": ["Fair", "Grade 4: aware, cause unknown in self"],
        "ok": ["Grade 5: intellectual insight"],
        "wrong": {
          "Grade 3: blames others/external factors": "He does not blame anyone. He mentions deadlines and coffee as part of it, and looks for the cause in himself.",
          "Grade 2: slight awareness": "He says something is definitely wrong and wants help. That is more than slight awareness.",
          "Grade 1: complete denial": "He knows something is wrong and came for help.",
          "Grade 6: true emotional insight": "He has only just heard the explanation and is still worried about his heart.",
          "Good": "He is still unsure what is wrong and half thinks it may be his heart.",
          "Poor": "He knows something is wrong, follows the explanation and is open to treatment."
        },
        "ev": {
          "find": "Grade 4: aware, cause unknown in self",
          "opts": [
            ["\"何《なに》 か が おかしい の は 確《たし》か です。 警報《けいほう》 の 話《はなし》 は なんとなく わかります けど、 まだ 心臓《しんぞう》 の こと が 少《すこ》し 心配《しんぱい》 です。\"", true],
            ["\"一人《ひとり》 で 来《き》ました。\"", false],
            ["\"コーヒー も 飲《の》みすぎて いた し。\"", false]
          ],
          "why": "He is sure something is wrong in him but not yet sure what it is: that is grade 4. He has begun to take in the explanation (\"なんとなく わかります\"), so grade 5 is defensible too. The coffee line names a trigger, not the illness."
        },
        "doc": "Fair (grade 4): knows something is wrong (\"何《なに》 か が おかしい の は 確《たし》か\"), not sure it is an illness, still somewhat worried about his heart; beginning to accept the explanation of the panic cycle; open to outpatient treatment",
        "why": "His insight is growing during the visit: \"in my head?\" at first, \"I sort of get it\" now. Grade 4 is a fair record tonight; at discharge, after more explanation, it may be better. Build on his own wish to have fewer attacks, and answer his worry about his heart with what was checked and found normal."
      },
      "impulse": {
        "obs": "No outbursts. Even when the attack was at its worst on the train, he did not act on the fear in an unsafe way; he came for help.",
        "ans": {
          "0": ["いいえ。 怒《おこ》る より、 怖《こわ》く なる ほう です。", "No. I'm more the type to get scared than angry."],
          "1": ["ありません。", "Never."]
        },
        "need": ["Good impulse control"],
        "wrong": {
          "Fair impulse control": "Nothing in the history or the interview suggests trouble controlling his impulses.",
          "Poor impulse control": "He has never hurt anyone, and coming to the emergency department when he feared he was dying was a reasonable choice, not an impulse."
        },
        "doc": "Good impulse control; no history of aggression; no outbursts",
        "why": "Repeated emergency visits are not a sign of poor impulse control: each time he believed he might be dying. Avoiding the train is avoidance, a part of the anxiety, and it belongs in the thought content and the plan, not here."
      },
      "judgment": {
        "ans": {
          "0": ["交番《こうばん》 に 届《とど》けます。", "I'd take it to the police box."],
          "1": ["車掌《しゃしょう》さん に 知《し》らせる か、 非常《ひじょう》 ボタン を 押《お》します。 ……でも 正直《しょうじき》、 今《いま》 は 電車《でんしゃ》 の 話《はなし》 だけ で ちょっと ドキッ と します。", "I'd tell the conductor or press the emergency button. ...But honestly, right now just talking about trains makes my heart jump a little."]
        },
        "need": ["Fair", "Intact test judgment"],
        "ok": ["Intact social judgment"],
        "wrong": {
          "Good": "His answers are sensible, but in daily life he has been coping by avoiding the train, missing work and drinking a lot of caffeine to meet deadlines.",
          "Poor": "His answers to both questions are sensible, and he seeks help and accepts follow-up.",
          "Impaired test judgment": "He gives sensible answers to both questions.",
          "Impaired social judgment": "Avoidance is a symptom of the anxiety, not a failure of judgment. He seeks help and accepts the plan."
        },
        "doc": "Fair: intact test judgment (wallet to the police box; tells the conductor or presses the emergency button); in daily life, avoids trains (taxis), has missed work and uses a lot of caffeine to cope with deadlines; seeks help and accepts outpatient follow-up",
        "why": "Note how he reacts to the train question: a small jump of fear, then a sensible answer. Judgment is fair rather than good because of how he has been coping: avoiding the train, missing work, and a lot of coffee and energy drinks. Each of these is understandable, and each is part of the plan: cut caffeine down gradually, not suddenly, and face the train again step by step with support."
      }
    }
  },
  {
    "id": "hinata",
    "title": "Hinata at her first visit",
    "level": "N4",
    "dx": "School refusal for two months after freezing during a class presentation and being mocked by two classmates in a group chat; social anxiety disorder to be assessed (provisional, not yet diagnosed); passive wish to disappear without a wish to die",
    "form": "",
    "setting": "Child and adolescent outpatient clinic, first visit. Hinata Matsumoto, 14, in her second year of junior high school, comes with her mother, Yuka Matsumoto, 46, who works at a clinic reception. Her father works away from home on weekdays. You see them together first, then Hinata alone, after explaining confidentiality and its limits. Staff call her Hinata-san.",
    "chart": [
      "First visit, with her mother. Hinata has not gone to school for two months. On school mornings she has stomach-aches and headaches; on Saturdays, Sundays and holidays they are gone by noon.",
      "At home she stays in her room and plays games and watches videos until late at night; in the morning she does not get up when woken. Her mother has lost her temper with her many times and asks whether she brought her up wrong.",
      "Family: her mother works at a clinic reception; her father works away from home on weekdays."
    ],
    "cc": {
      "ask": "collateral:1",
      "ans": [
        "先生《せんせい》、 この 子《こ》、 もう 二《に》か月《げつ》 学校《がっこう》 に 行《い》って いない ん です。 学校《がっこう》 の ある 日《ひ》 の 朝《あさ》 に なる と、 お腹《なか》 が 痛《いた》い、 頭《あたま》 が 痛《いた》い って 言《い》って…。",
        "Doctor, she hasn't been to school for two months now. On school mornings she says her stomach hurts, her head hurts...",
        "Mrs. Matsumoto (mother)"
      ],
      "opts": [
        [
          "\"この 子《こ》、 もう 二《に》か月《げつ》 学校《がっこう》 に 行《い》って いない ん です。 学校《がっこう》 の ある 日《ひ》 の 朝《あさ》 に なる と、 お腹《なか》 が 痛《いた》い、 頭《あたま》 が 痛《いた》い って 言《い》って…。\"",
          true,
          "The form records the chief complaint in the informant's own words, in Japanese, in quotation marks. Here the informant is her mother, who brought her and spoke first. Record Hinata's own words too, in the history, when you see her alone."
        ],
        [
          "School refusal for two months with stomach-aches and headaches on school mornings",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "She hasn't been to school for two months. On school mornings she says her stomach hurts and her head hurts.",
          false,
          "A translation loses the informant's words. Quote the Japanese; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "A 14-year-old girl, medium build, in neat casual clothes: a clean sweatshirt and jeans. Hair brushed and tied back. She sits close to her mother and looks at her own hands.",
        "ans": {
          "0": ["……おはよう ございます。", "...Good morning."],
          "1": ["はい、 失礼《しつれい》します。 ほら、 ひなた も 座《すわ》って。", "Yes, thank you. Come on, Hinata, you sit down too.", "Mrs. Matsumoto (mother)"]
        },
        "need": ["Adult female", "Medium built", "Well kempt"],
        "wrong": {
          "Young adult": "She is 14. The pick list was written for adults; choose the sex pick and write her age in your note.",
          "Fairly kempt": "Her clothes are clean and neat and her hair is brushed.",
          "Unkempt": "Her clothes are clean and neat and her hair is brushed.",
          "Poor hygiene": "Nothing suggests poor hygiene."
        },
        "doc": "14-year-old girl (\"Adult female\" is only the nearest pick on this adult form), medium built, in neat casual clothes, well kempt; sits close to her mother, looks at her hands",
        "why": "She is a 14-year-old girl, not an adult. The picks are an adult list with no pick for a child or teenager, so \"Adult female\" is keyed only as the nearest sex pick; always write the real age in words: \"14-year-old girl\". Note too that she looks after herself although she has stayed at home for two months; that matters when you think about how low her mood is. Her mother answers your request to sit for both of them; watch who speaks for whom."
      },
      "psychomotor": {
        "obs": "Sits still, hands in her lap. No restlessness, slowing, tremor or unusual movements.",
        "ans": {
          "0": ["動《うご》き は 普通《ふつう》 です。 ただ、 朝《あさ》 は なかなか 起《お》きなくて…。", "Her movements are normal. It's just that in the morning she won't get up...", "Mrs. Matsumoto (mother)"]
        },
        "need": ["No psychomotor agitation or retardation"],
        "wrong": {
          "Psychomotor retardation": "She is not slowed. Not getting up in the morning follows her late nights and her dread of school; it is not slowed movement.",
          "Restless": "She sits still throughout.",
          "Psychomotor agitation": "She sits still throughout.",
          "Tremor": "No tremor is seen.",
          "Abnormal involuntary movements": "None are seen."
        },
        "doc": "No psychomotor agitation or retardation; sits still; mother reports normal movement but difficulty getting up in the morning",
        "why": "Her mother's answer is useful collateral, but separate the two findings: her movement is normal, and the trouble getting up belongs to sleep and school avoidance. Ask about her sleep and her evening screens in the history; a regular wake-up time is the first small step in her plan."
      },
      "attitude": {
        "obs": "With her mother in the room she says very little and looks at her hands or at her mother; her mother answers for her and apologizes that she does not talk much. Seen alone, after you explain confidentiality, she looks up more often, asks you a question herself, and answers each of yours.",
        "ans": {
          "0": ["……ひなた で いい。", "...Hinata is fine."],
          "1": ["……日本語《にほんご》 で。", "...In Japanese."]
        },
        "need": ["Cooperative", "Poor eye contact"],
        "ok": ["Fair eye contact"],
        "wrong": {
          "Guarded": "She is quiet, not guarded. Alone, she asks whether you will tell her mother and then tells you what happened.",
          "Uncooperative": "She answers every question, briefly at first.",
          "Irritable": "Her \"別《べつ》 に いい けど\", when you asked to see her alone, is a teenager's ordinary way of saying yes, not irritability.",
          "Suspicious": "Her question about confidentiality is a sensible one, not suspicion."
        },
        "doc": "Cooperative; quiet with poor eye contact while her mother is present, mother answers for her; more open and better eye contact when seen alone after confidentiality was explained",
        "why": "Write both settings, because the difference is a finding. Many teenagers say little in front of a parent, and lowered eyes can be shyness or reserve toward a doctor. Speak to her directly from the start, explain that seeing every teenager alone is routine, and explain confidentiality and its limits before you ask about mood and safety. The exact rules follow local law and your hospital's policy."
      },
      "mood": {
        "obs": "Seen alone. Speaks quietly, looks down when school comes up. Her face is tense and worried when she talks about her classmates, a little easier when she talks about home.",
        "ans": {
          "0": ["……怖《こわ》い。 みんな に どう 思《おも》われてる か、 いつも 考《かんが》えちゃう。", "...Scared. I keep thinking about what everyone thinks of me."],
          "1": ["……ずっと 同《おな》じ。 学校《がっこう》 の ある 日《ひ》 の 朝《あさ》 が いちばん 嫌《いや》。", "...The same the whole time. School mornings are the worst."],
          "2": ["……四《よん》 くらい。 学校《がっこう》 の こと を 考《かんが》える と、 もっと 下《さ》がる。", "...About four. When I think about school, it goes lower."]
        },
        "quote": "怖《こわ》い。 みんな に どう 思《おも》われてる か、 いつも 考《かんが》えちゃう。 (Scared. I keep thinking about what everyone thinks of me.)",
        "need": ["Anxious mood", "Congruent affect"],
        "ok": ["Restricted affect"],
        "wrong": {
          "Euthymic mood": "She names fear, and her mood falls when she thinks about school.",
          "Sad mood": "She describes fear, not sadness. Keep asking about low mood at later visits, though, because of the wish to disappear.",
          "Flat affect": "Her face changes: tense about school and classmates, a little easier about home.",
          "Blunted affect": "Her face changes: tense about school and classmates, a little easier about home.",
          "Incongruent affect": "Her worried face fits the fear she describes.",
          "Labile affect": "Her affect does not swing; it stays anxious and eases a little."
        },
        "ev": {
          "find": "Anxious mood",
          "opts": [
            ["\"怖《こわ》い。 みんな に どう 思《おも》われてる か、 いつも 考《かんが》えちゃう。\"", true],
            ["\"四《よん》 くらい。\"", false],
            ["\"ひなた で いい。\"", false]
          ],
          "why": "Asked how she feels now, she names fear and ties it to what others think. The rating tells you how strong it is, not what kind of feeling it is."
        },
        "doc": "\"怖《こわ》い。 みんな に どう 思《おも》われてる か、 いつも 考《かんが》えちゃう。\" (Scared. I keep thinking about what everyone thinks of me.) Anxious mood, rates it about 4 out of 10, lower when she thinks of school; worst on school mornings. Affect anxious, congruent, eases a little when talking about home",
        "why": "Ask a teenager about mood when she is alone, and use her own word: 怖《こわ》い. A short, plain answer from a 14-year-old is normal and still worth quoting. Anxiety that is worst on school mornings fits the stomach-aches and headaches her mother describes."
      },
      "speech": {
        "obs": "Soft voice, short replies. She speaks only when asked, but gives a clear account once she is alone and asked an open question. Normal rate.",
        "ans": {
          "0": ["…授業《じゅぎょう》 で 発表《はっぴょう》 した とき、 頭《あたま》 が 真《ま》っ白《しろ》 に なって、 何《なに》 も 言《い》えなく なった。 みんな 笑《わら》ってる と 思《おも》った。 その 後《あと》、 グループ チャット で、 クラス の 二人《ふたり》 に からかわれた。", "...When I gave a presentation in class, my mind went blank and I couldn't say anything. I thought everyone was laughing. Afterwards, two people in my class made fun of me in the group chat."]
        },
        "need": ["Non-spontaneous (answers only when asked)", "Soft volume"],
        "ok": ["Normal rate"],
        "wrong": {
          "Spontaneous": "She offers almost nothing unless asked; even her questions to you (about confidentiality, about medicine) come in reply to yours.",
          "Poverty of speech": "Her replies are short, but asked an open question alone, she tells a clear story.",
          "Adequate volume": "She speaks softly throughout.",
          "Slow rate": "Her answers are short, not slow."
        },
        "doc": "Non-spontaneous, short replies, soft volume, normal rate; gives a clear account when seen alone and asked an open question",
        "why": "Short, quiet answers are common in teenagers at a first visit and grow longer as trust builds. Use open questions, wait through pauses, and do not fill the silence with lectures. Her account came only after you explained confidentiality; record that too."
      },
      "process": {
        "ans": {
          "0": ["…授業《じゅぎょう》 で 発表《はっぴょう》 した とき、 頭《あたま》 が 真《ま》っ白《しろ》 に なって、 何《なに》 も 言《い》えなく なった。 みんな 笑《わら》ってる と 思《おも》った。 その 後《あと》、 グループ チャット で、 クラス の 二人《ふたり》 に からかわれた。", "...When I gave a presentation in class, my mind went blank and I couldn't say anything. I thought everyone was laughing. Afterwards, two people in my class made fun of me in the group chat."],
          "1": ["……言《い》う こと を、 全部《ぜんぶ》 忘《わす》れた 感《かん》じ。 みんな が 私《わたし》 を 見《み》てて、 怖《こわ》かった。", "...Like I'd forgotten everything I was going to say. Everyone was looking at me, and it was scary."]
        },
        "obs": "Tells what happened in order: the presentation, the blank moment, then the group chat. Asked what she means, she explains clearly and comes back to the point.",
        "need": ["Linear"],
        "ok": ["Goal-directed"],
        "wrong": {
          "Thought blocking": "Her mind went blank once, in class, from fear. In the interview her thoughts run in order without breaks. Thought blocking is a sudden stop in the middle of speech, seen in the interview.",
          "Circumstantial": "She goes straight to the point, in few words.",
          "Tangential": "She answers the question she was asked.",
          "Loose associations": "Each idea follows clearly from the last."
        },
        "doc": "Linear, goal-directed: tells the events in order and explains the blank moment clearly (\"言《い》う こと を、 全部《ぜんぶ》 忘《わす》れた 感《かん》じ\")",
        "why": "\"頭《あたま》 が 真《ま》っ白《しろ》 に なる\" (my mind went blank) is a common way to describe sudden fear in front of others. It is part of her history, not a disorder of thought process. Judge the process from how she tells the story today: in order and to the point."
      },
      "perception": {
        "ans": {
          "0": ["……ない。", "...No."],
          "1": ["ない。", "No."],
          "2": ["……ない。 そういう の は ない。", "...No. Nothing like that."],
          "3": ["声《こえ》 は 聞《き》こえない。", "I don't hear voices."],
          "4": ["ない。", "No."]
        },
        "key": [0],
        "need": ["Denies perceptual disturbances", "Not responding to internal stimuli"],
        "wrong": {
          "Auditory hallucinations": "She hears no voices. \"みんな 笑《わら》ってる と 思《おも》った\" is what she feared at the time, not something she heard.",
          "Visual hallucinations": "She sees nothing unusual.",
          "Responding to internal stimuli": "She attends to you throughout."
        },
        "doc": "Denies auditory and visual hallucinations; not responding to internal stimuli. At the presentation she thought everyone was laughing: a fear at that moment, not a perception",
        "why": "Ask every patient, including a quiet teenager, in plain words. Keep thoughts and perceptions apart: \"みんな 笑《わら》ってる と 思《おも》った\" uses 思《おも》った (I thought), so it is an interpretation made in fear, not a voice."
      },
      "content": {
        "ans": {
          "0": ["……そう は 思《おも》わない。 からかわれた けど、 今《いま》 は もう 言《い》われて ない。", "...I don't think so. I was made fun of, but they don't say it anymore."],
          "1": ["……後《あと》 を つけられたり は ない。 でも、 教室《きょうしつ》 だ と、 みんな に 見《み》られてる 気《き》 が する。", "...Nobody follows me. But in the classroom I feel everyone is looking at me."],
          "2": ["……え、 ない。", "...Huh? No."],
          "3": ["……わからない。 私《わたし》 が 気《き》 に しすぎ な の かも。", "...I don't know. Maybe I worry about it too much."],
          "4": ["……みんな、 本当《ほんとう》 は そんな に 見《み》て ない かも しれない。 でも、 やっぱり 怖《こわ》い。", "...Maybe nobody is really looking at me that much. But it's still scary."],
          "5": ["……自分《じぶん》 が 悪《わる》い と は 思《おも》わない。 でも、 また 失敗《しっぱい》 したら どう しよう って、 いつも 思《おも》う。", "...I don't think it's my fault. But I always think, what if I mess up again?"],
          "6": ["……発表《はっぴょう》 の とき から。 あと、 チャット の こと。", "...It started with the presentation. And the group chat thing."]
        },
        "key": [1, 4],
        "need": ["No delusions elicited", "Preoccupation with ___"],
        "wrong": {
          "Persecutory delusions": "The mocking in the group chat really happened and has stopped. A true event is not a delusion.",
          "Delusions of reference": "She feels looked at in the classroom, but she doubts it herself (\"気《き》 に しすぎ な の かも\"). A belief held with doubt like this is self-consciousness, not a delusion.",
          "Guilt or worthlessness (not delusional)": "She says she does not think it is her fault. Her worry is about failing again in front of others."
        },
        "ev": {
          "find": "Preoccupation with ___",
          "opts": [
            ["\"教室《きょうしつ》 だ と、 みんな に 見《み》られてる 気《き》 が する。\"", true],
            ["\"……え、 ない。\"", false],
            ["\"発表《はっぴょう》 の とき から。\"", false]
          ],
          "why": "Her thoughts keep coming back to how others see her: feeling looked at in the classroom and fearing she will fail again. The start of the problem belongs in the history; it is not the content of her thinking now."
        },
        "doc": "No delusions elicited. Preoccupied with what classmates think of her: feels looked at in the classroom (\"みんな に 見《み》られてる 気《き》 が する\") but doubts it (\"気《き》 に しすぎ な の かも\"); fears failing in front of others again. Mocked by two classmates in a group chat after the presentation; this has stopped. Does not blame herself",
        "why": "Asking how sure she is and whether there could be another explanation separates self-consciousness from a delusion: she holds the idea loosely and can see another view. Fear of others' judgment that began after a frightening moment in class points toward social anxiety; assess it over the next visits. Ask directly whether the bullying, online included, is still going on, because adults easily miss it."
      },
      "safety": {
        "obs": "Seen alone. She says the words about disappearing quietly, looking down. When you stay calm and ask more, she answers each question.",
        "ans": {
          "0": ["……そこ まで じゃ ない。 でも、 時々《ときどき》、 消《き》えたい って 思《おも》う。", "...Not that far. But sometimes I think I want to disappear."],
          "1": ["死《し》にたい とか じゃ ない。 ただ、 いなく なりたい って いう か…。", "It's not that I want to die. It's more like I just want to not be here..."],
          "2": ["……ない。 自分《じぶん》 を 傷《きず》つけた こと も ない。 何《なに》 も した こと ない。", "...No. I've never hurt myself either. I've never done anything."],
          "3": ["……計画《けいかく》 とか、 ない。", "...No, nothing like a plan."],
          "4": ["ない。 何《なに》 か する つもり は ない。", "No. I'm not going to do anything."],
          "5": ["……ない。 そんな こと、 思《おも》わない。", "...No. I don't think that."]
        },
        "key": [0, 1, 2],
        "need": ["Passive death wish", "Denies homicidal ideation"],
        "ok": ["Denies suicidal ideation"],
        "wrong": {
          "Active suicidal ideation, no plan": "She says she does not want to die and has never thought of killing herself.",
          "Active suicidal ideation with plan": "She has no plan and no intent.",
          "Homicidal ideation toward ___": "She has no thoughts of hurting anyone, including the two classmates."
        },
        "ev": {
          "find": "Passive death wish",
          "opts": [
            ["\"時々《ときどき》、 消《き》えたい って 思《おも》う。\"", true],
            ["\"死《し》にたい とか じゃ ない。\"", false],
            ["\"……計画《けいかく》 とか、 ない。\"", false]
          ],
          "why": "The finding is her wish to disappear. Her other answers do not cancel it; they tell you its level: no wish to die, no plan, no intent, no self-harm. The form has no pick for a wish to disappear. \"Passive death wish\" is the nearest honest pick because the thought is passive and about not being here; it does not mean she wants to die, so write her exact words and her denial of a wish to die."
        },
        "doc": "Passive wish to disappear (nearest pick: passive death wish), sometimes (\"時々《ときどき》、 消《き》えたい って 思《おも》う\"; \"いなく なりたい\"); denies a wish to die, suicidal thoughts, plan and intent; has never harmed herself (asked, denies); denies homicidal ideation. Agreed to tell her mother or the clinic if the feeling grows. With her agreement, her mother is told about the group chat. Review at every visit",
        "why": "消《き》えたい can mean anything from wanting to escape to a wish to die, so always follow it up, calmly and directly: ask about a wish to die, suicidal thoughts, a plan, intent and self-harm. Asking does not put the idea in her head. Agree with her what she will do if the feeling grows. What you share with her mother follows what you promised her at the start: she decides, unless she or someone else is in danger; then safety comes first, and you tell her first whom you will inform. Follow local law and your hospital's policy. Give the family the local crisis line, and 119 for an emergency."
      },
      "orientation": {
        "ans": {
          "0": ["……木曜日《もくようび》。", "...Thursday."],
          "1": ["……病院《びょういん》。 子《こ》ども の 心《こころ》 の 先生《せんせい》 が いる ところ。", "...A hospital. The place with the doctor for children's feelings."],
          "2": ["……お医者《いしゃ》さん。 私《わたし》 の 話《はなし》 を 聞《き》く 人《ひと》。", "...A doctor. Someone who listens to what I say."]
        },
        "need": ["Oriented to 3 spheres"],
        "wrong": {
          "Disoriented to time": "She names the day correctly.",
          "Disoriented to place": "She knows she is at a hospital clinic.",
          "Disoriented to person": "She knows who she is and who you are."
        },
        "doc": "Oriented to 3 spheres (time, place, person)",
        "why": "Orientation is almost always intact in an anxious teenager, but the form needs it. Say that you ask everyone these questions, so she does not feel tested or treated as a small child."
      },
      "insight": {
        "ans": {
          "0": ["……病気《びょうき》 じゃ ない と 思《おも》う。 お腹《なか》 が 痛《いた》い の は、 学校《がっこう》 の せい。", "...I don't think I'm sick. My stomach hurts because of school."],
          "1": ["……学校《がっこう》 に 行《い》けない から。 お母《かあ》さん、 心配《しんぱい》 してる し。", "...Because I can't go to school. And my mother is worried."],
          "2": ["……わからない。 薬《くすり》 で、 学校《がっこう》 が 怖《こわ》く なく なる の？", "...I don't know. Would medicine make school less scary?"]
        },
        "need": ["Fair", "Grade 3: blames others/external factors"],
        "ok": ["Grade 2: slight awareness"],
        "wrong": {
          "Good": "She does not yet see the fear itself as something that can be treated.",
          "Poor": "She knows something is wrong, says she cannot go to school, and asks whether treatment could help.",
          "Grade 1: complete denial": "She admits a problem: she cannot go to school, and the fear and the pain are real to her.",
          "Grade 4: aware, cause unknown in self": "She places the cause in school, not in something she does not understand in herself.",
          "Grade 5: intellectual insight": "She does not yet link her fear to an anxiety that could be treated."
        },
        "ev": {
          "find": "Grade 3: blames others/external factors",
          "opts": [
            ["\"お腹《なか》 が 痛《いた》い の は、 学校《がっこう》 の せい。\"", true],
            ["\"お母《かあ》さん、 心配《しんぱい》 してる し。\"", false],
            ["\"薬《くすり》 で、 学校《がっこう》 が 怖《こわ》く なく なる の？\"", false]
          ],
          "why": "She sees the problem and puts its cause outside herself, in school. That is grade 3. Her question about medicine shows openness to help, a good sign for the plan, but it is not yet insight into the fear."
        },
        "doc": "Fair (grade 3): does not see herself as ill; links her stomach-aches to school (\"学校《がっこう》 の せい\"); knows she cannot go to school and that her mother is worried; asks whether medicine could make school less scary",
        "why": "Grade 3 here is not blame of anyone: the presentation and the mocking really did start this. Insight grows as she learns that worry can make the stomach and the head really hurt, and that fear shrinks with small steps. Answer her question honestly: the first steps are a regular wake-up time, a gradual return to school and talking with the school counsellor; medicine is discussed later, with her and her mother, if needed."
      },
      "impulse": {
        "ans": {
          "0": ["……ない。 怒《おこ》る より、 黙《だま》っちゃう。", "...No. Instead of getting angry, I just go quiet."],
          "1": ["ない。", "No."]
        },
        "need": ["Good impulse control"],
        "wrong": {
          "Fair impulse control": "No anger, aggression, recklessness or self-harm in the history or in the interview.",
          "Poor impulse control": "No anger, aggression, recklessness or self-harm in the history or in the interview."
        },
        "doc": "Good impulse control: no aggression or self-harm; goes quiet rather than getting angry (\"怒《おこ》る より、 黙《だま》っちゃう\"); calm throughout the interview",
        "why": "Base impulse control on the history and on what you see. Staying up late with games and videos is a sleep and avoidance problem to work on in the plan, not poor impulse control. Her habit of going quiet when upset is worth knowing: it is one reason to agree with her how she will tell an adult if the wish to disappear grows."
      },
      "judgment": {
        "ans": {
          "0": ["……交番《こうばん》 に 持《も》って いく。", "...I'd take it to the police box."],
          "1": ["……駅員《えきいん》さん に 言《い》う。", "...I'd tell the station staff."]
        },
        "need": ["Fair", "Intact test judgment"],
        "ok": ["Impaired social judgment"],
        "wrong": {
          "Good": "Two months away from school, with nights up late, show that fear is steering her daily choices.",
          "Poor": "Her test answers are sensible, and today she chose to tell you what happened, agreed what may be shared with her mother, and is willing to try small steps.",
          "Impaired test judgment": "Both answers are sensible and safe.",
          "Intact social judgment": "Fear is still steering her daily choices: two months away from school and nights up late."
        },
        "doc": "Fair: intact test judgment (wallet to the police box, smoke reported to the station staff); social judgment partly limited by fear (two months' school avoidance, late nights), but today she shared what happened, agreed what her mother may be told and is open to small steps",
        "why": "Her avoidance is driven by fear, not by poor reasoning, and it keeps the fear going. Judgment is fair because she can make sensible decisions when supported: today she chose what to share and listened to the plan. Decisions about her care are made with her and her mother together."
      }
    }
  }
]);
