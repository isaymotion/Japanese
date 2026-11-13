/* Admission MSE practice cases, part 3. Hanashimashō (Japanese). STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Same shape as psych-mse-cases.js. Ids in this part: yumiko, tetsuo (same ids as their case simulations and discharge cases),
   chiyoko (Chiyoko Ito, 79, Alzheimer's disease with behavioural disturbance; no simulation; discharge case in psych-discharge-cases-4.js).
   Patients and families are fictional. No method detail, product names or rating-scale wording; no HDS-R / MMSE items. 0.15.0. */
window.PSYCH_MSE_CASES = (window.PSYCH_MSE_CASES || []).concat([
{
    "id": "yumiko",
    "title": "Yumiko on admission",
    "level": "N4",
    "dx": "Major depressive disorder, severe",
    "form": "",
    "setting": "Admitting section, the day of admission. Yumiko, 46, hotel housekeeper, mother of three, separated after her husband left. Brought by her sister Noriko about a week after she took a handful of her sister's pills. Medically assessed and cleared.",
    "chart": [
      "About a week ago she took a handful of her sister's pills, regretted it right away, and called her sister. Medically assessed and cleared for the psychiatric interview.",
      "Since her husband left: weeks of poor sleep, little appetite, crying, and guilt about her three children. She calls it \"自律神経《じりつしんけい》 が おかしい\". Prior depressive episode about 8 years ago; she stopped treatment early.",
      "Noriko: very worried and asks the team to keep her sister safe. Asked in general terms about medicines or anything else at home she could use to hurt herself, Yumiko says there are medicines at the family home (実家《じっか》). Yumiko's faith matters to her: she visits the family temple (お寺《てら》) and her mother's grave (お墓参《はかまい》り)."
    ],
    "cc": {
      "ask": "cc-hpi:0",
      "ans": [
        "……もう 限界《げんかい》 でした。 夫《おっと》 が 出《で》て いって から、 何《なに》 も できなくて……。",
        "...I was at my limit. Since my husband left, I can't do anything...",
        "Yumiko"
      ],
      "opts": [
        [
          "\"もう 限界《げんかい》 でした。 夫《おっと》 が 出《で》て いって から、 何《なに》 も できなくて……。\"",
          true,
          "The form records the chief complaint in the patient's own words, in Japanese, in quotation marks."
        ],
        [
          "Depressed mood after marital separation, with a recent suicide attempt by overdose",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "I couldn't take it anymore. Since my husband left, I can't do anything.",
          false,
          "A translation loses the patient's words. Quote the Japanese; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Middle-aged adult female, medium built, in plain clothes that are clean but creased. Hair tied back loosely, no makeup, dark circles under her eyes. Looks tired and is tearful.",
        "ans": {
          "0": ["……よろしく お願《ねが》い します。", "...Nice to meet you."],
          "1": ["はい…… すみません。", "Yes... I'm sorry."]
        },
        "need": ["Adult female", "Medium built", "Fairly kempt"],
        "wrong": {
          "Unkempt": "Her clothes are clean and her hair is tied back. She looks tired, not neglected.",
          "Older adult": "She is 46, an adult in middle age.",
          "Poor hygiene": "Nothing suggests poor hygiene. Tiredness and dark circles are not hygiene findings."
        },
        "doc": "Adult female, medium built, in plain clean but creased clothes, fairly kempt; tired-appearing, tearful, dark circles under her eyes",
        "why": "Record how tired and tearful she looks, not only the clothes. It is your baseline: at discharge she was in clean clothes from home, hair tied back, engaged."
      },
      "psychomotor": {
        "obs": "Sits very still with her shoulders forward. Moves slowly when she sits down and reaches for a tissue. Long pauses before she answers. No tremor.",
        "ans": {
          "0": ["はい、 先生《せんせい》。 妹《いもうと》 は 最近《さいきん》、 動《うご》き も 話《はな》し方《かた》 も、 とても ゆっくり に なって……。 一日中《いちにちじゅう》 横《よこ》 に なって いる 日《ひ》 も あります。 本当《ほんとう》 に 心配《しんぱい》 なん です。", "Yes, doctor. Lately my sister moves and talks very slowly... Some days she lies down all day. I'm really worried.", "Noriko (sister)"]
        },
        "need": ["Psychomotor retardation"],
        "wrong": {
          "No psychomotor agitation or retardation": "She moves slowly, pauses long before answering, and her sister has noticed the change.",
          "Psychomotor agitation": "She is slowed, not agitated.",
          "Restless": "She sits very still."
        },
        "doc": "Psychomotor retardation (slow movements, long pauses before answering, confirmed by her sister); no tremor",
        "why": "Slowing is a sign of a severe depressive episode. Note that her sister confirms the change from her usual self: that tells you it is new, not her character."
      },
      "attitude": {
        "obs": "Looks down at the tissue in her hands and rarely meets your eyes. Answers every question, briefly and politely, and apologizes for crying. Looks at Noriko when she is unsure.",
        "ans": {
          "0": ["由美子《ゆみこ》 で…… 大丈夫《だいじょうぶ》 です。", "Yumiko is... fine."],
          "1": ["日本語《にほんご》 で お願《ねが》い します。", "Japanese, please."]
        },
        "need": ["Cooperative", "Poor eye contact"],
        "ok": ["Fair eye contact"],
        "wrong": {
          "Guarded": "She is not wary of you. She answers everything, including the questions about suicide.",
          "Uncooperative": "She answers every question, though briefly."
        },
        "doc": "Cooperative; poor eye contact, looks down, tearful and apologetic",
        "why": "Lowered eyes with tears, apologies and full answers fit low mood and shame, not guardedness. Lowered eyes can also be politeness toward a doctor, so look at the whole picture."
      },
      "mood": {
        "obs": "Tearful through much of the interview. Little change in her face, except more tears when her children come up. Does not smile.",
        "ans": {
          "0": ["とても 疲《つか》れて いる ん です、 先生《せんせい》……。", "I'm so tired, doctor..."],
          "1": ["ずっと 悲《かな》しくて…… 涙《なみだ》 が 止《と》まりません。 何《なに》 も 楽《たの》しく ない です。", "Sad the whole time... I can't stop crying. Nothing is enjoyable."],
          "2": ["一《いち》…… くらい です。", "About... a one."]
        },
        "quote": "とても 疲《つか》れて いる ん です、 先生《せんせい》……。 (I'm so tired, doctor...)",
        "need": ["Sad mood", "Restricted affect", "Congruent affect"],
        "ok": ["Blunted affect"],
        "wrong": {
          "Euthymic mood": "She rates her mood one out of ten and cannot stop crying.",
          "Anxious mood": "Sadness and exhaustion are the main mood, not worry or fear.",
          "Flat affect": "She cries more when her children come up. Her affect is narrowed, not flat.",
          "Labile affect": "Her tears fit what she is talking about. They do not switch suddenly to laughter or anger."
        },
        "ev": {
          "find": "Sad mood",
          "opts": [
            ["\"ずっと 悲《かな》しくて…… 涙《なみだ》 が 止《と》まりません。\"", true],
            ["\"とても 疲《つか》れて いる ん です、 先生《せんせい》……。\"", false],
            ["\"由美子《ゆみこ》 で…… 大丈夫《だいじょうぶ》 です。\"", false]
          ],
          "why": "\"とても 疲《つか》れて いる\" (very tired) is how she first names her state, and you quote it. Tiredness alone could be physical, so ask about the past two weeks: her answer names sadness, and with a rating of one out of ten it supports sad mood."
        },
        "doc": "\"とても 疲《つか》れて いる ん です、 先生《せんせい》……。\" (I'm so tired, doctor...) Sad mood, 1/10, constant crying, anhedonia; restricted, congruent affect, tearful",
        "why": "Many patients first name tiredness or a body complaint, here \"疲《つか》れて いる\", rather than sadness. Quote it, then ask the follow-up questions. Record the rating of one: she gave five at discharge, and the comparison shows the change."
      },
      "speech": {
        "obs": "Speaks softly and slowly, only when asked, in short sentences that often trail off. Gives the whole story when asked what happened, with long pauses.",
        "ans": {
          "0": ["夫《おっと》 が 出《で》て いって から…… 眠《ねむ》れなく なって、 ほとんど 食《た》べられなく なりました。 自律神経《じりつしんけい》 が おかしく なって、 もう 何《なに》 も できなくて……。 先週《せんしゅう》、 姉《あね》 の 薬《くすり》 を たくさん 飲《の》んで しまいました。 すぐ 後悔《こうかい》 して、 姉《あね》 に 電話《でんわ》 しました。", "Since my husband left... I stopped sleeping and could hardly eat. My autonomic nerves went wrong, and I can't do anything anymore... Last week I took a lot of my sister's pills. I regretted it right away and called my sister."]
        },
        "need": ["Non-spontaneous (answers only when asked)", "Slow rate", "Soft volume"],
        "ok": ["Productive"],
        "wrong": {
          "Poverty of speech": "When asked what happened she gives the whole story, in order. Her answers are slow and short, not empty.",
          "Normal rate": "She speaks slowly with long pauses; it matches her psychomotor slowing.",
          "Pressured": "Slow and soft, the opposite of pressured."
        },
        "doc": "Non-spontaneous, slow rate, soft volume; trails off, but gives a full account when asked",
        "why": "Slow, soft speech belongs with her psychomotor slowing. Give her time after each question: the long pauses are part of the illness, and rushing her loses the story."
      },
      "process": {
        "obs": "Tells the story in order, from her husband leaving to last week. Trails off, then goes on with the same thought.",
        "ans": {
          "0": ["夫《おっと》 が 出《で》て いって から…… 眠《ねむ》れなく なって、 ほとんど 食《た》べられなく なりました。 自律神経《じりつしんけい》 が おかしく なって、 もう 何《なに》 も できなくて……。 先週《せんしゅう》、 姉《あね》 の 薬《くすり》 を たくさん 飲《の》んで しまいました。 すぐ 後悔《こうかい》 して、 姉《あね》 に 電話《でんわ》 しました。", "Since my husband left... I stopped sleeping and could hardly eat. My autonomic nerves went wrong, and I can't do anything anymore... Last week I took a lot of my sister's pills. I regretted it right away and called my sister."],
          "1": ["体《からだ》 が 重《おも》くて、 頭《あたま》 も 働《はたら》かない ん です。 朝《あさ》 早《はや》く 目《め》 が 覚《さ》めて、 それ から 眠《ねむ》れません。 仕事《しごと》 に も 行《い》けなく なって……。", "My body feels heavy and my head doesn't work. I wake up early in the morning and then can't sleep. I stopped being able to go to work..."]
        },
        "need": ["Linear", "Goal-directed"],
        "wrong": {
          "Thought blocking": "She trails off from sadness and tiredness, then goes on with the same thought. That is not a sudden break in thinking.",
          "Circumstantial": "She gets to the point without long detours.",
          "Loose associations": "Each sentence follows from the one before."
        },
        "doc": "Linear and goal-directed; slowed, trails off at times",
        "why": "Ask what \"自律神経《じりつしんけい》 が おかしい\" means to her, as here. It is a common way of naming distress through the body, and her answer gives you the depressive symptoms (heaviness, poor concentration, early waking, stopping work) in her own words."
      },
      "perception": {
        "obs": "Looks down or at you. Does not look around the room or pause as if listening.",
        "ans": {
          "0": ["いいえ、 ありません。", "No, I don't."],
          "1": ["いいえ。", "No."],
          "2": ["いいえ…… ありません。", "No... I don't."],
          "3": ["声《こえ》 は 聞《き》こえません。", "I don't hear voices."],
          "4": ["いいえ。", "No."]
        },
        "key": [0, 4],
        "need": ["Denies perceptual disturbances", "Not responding to internal stimuli"],
        "wrong": {
          "Auditory hallucinations": "She denies hearing voices, and there is no listening behavior.",
          "Command auditory hallucinations": "She denies voices telling her to do things.",
          "Responding to internal stimuli": "She looks down out of sadness, not toward something only she can hear or see."
        },
        "doc": "Denies perceptual disturbances; not responding to internal stimuli",
        "why": "Ask about hallucinations in every severe depression. Voices that accuse a patient or tell her to die would mean psychotic features and a higher risk, and they change treatment. Ask about commands even when she denies voices."
      },
      "content": {
        "ans": {
          "0": ["いいえ。 そういう こと は ありません。", "No. Nothing like that."],
          "1": ["いいえ。", "No."],
          "2": ["いいえ。 食欲《しょくよく》 が ない だけ です。", "No. I just have no appetite."],
          "3": ["子《こ》ども たち は 私《わたし》 が いない 方《ほう》 が いい…… そう と しか 思《おも》えない ん です。", "My children would be better off without me... I can't think of it any other way."],
          "4": ["……子《こ》ども たち は、 寂《さび》しい かも しれません。 でも、 私《わたし》 が いて も 迷惑《めいわく》 を かける だけ です。", "...My children might be lonely. But if I'm there, I only cause trouble."],
          "5": ["はい…… 子《こ》ども たち に 申《もう》し訳《わけ》ない です。 いい 母親《ははおや》 じゃ ない ん です。 夫《おっと》 が 出《で》て いった の も、 私《わたし》 が 悪《わる》い から です。", "Yes... I feel I've failed my children. I'm not a good mother. My husband leaving was my fault, too."],
          "6": ["自律神経《じりつしんけい》 が おかしい ん だ と 思《おも》います。 それ と…… 罰《ばち》 が 当《あ》たった の かも しれません。 悪《わる》い 母親《ははおや》 で、 悪《わる》い 妻《つま》 だった から。", "I think my autonomic nerves are off. And... maybe it's a punishment. For being a bad mother and a bad wife."]
        },
        "key": [3, 4, 5],
        "need": ["No delusions elicited", "Guilt or worthlessness (not delusional)"],
        "wrong": {
          "Persecutory delusions": "She denies that anyone wants to harm her or is watching her.",
          "Nihilistic delusions": "She is hopeless and feels like a burden, but she does not believe that she or the world has ceased to exist.",
          "Preoccupation with ___": "Guilt and hopelessness run through what she says, but write them as guilt and hopelessness, which is what they are."
        },
        "ev": {
          "find": "Guilt or worthlessness (not delusional)",
          "opts": [
            ["\"子《こ》ども たち に 申《もう》し訳《わけ》ない です。 いい 母親《ははおや》 じゃ ない ん です。\"", true],
            ["\"食欲《しょくよく》 が ない だけ です。\"", false],
            ["\"自律神経《じりつしんけい》 が おかしい ん だ と 思《おも》います。\"", false]
          ],
          "why": "She blames herself as a mother and for her husband leaving. It is not delusional: asked for another explanation, she allows that her children might miss her (\"寂《さび》しい かも しれません\"), so the belief is not completely fixed."
        },
        "doc": "No delusions elicited. Guilt and worthlessness, not delusional (\"いい 母親《ははおや》 じゃ ない ん です\"; blames herself for her husband leaving); hopelessness and perceived burdensomeness (\"子《こ》ども たち は 私《わたし》 が いない 方《ほう》 が いい\"), not fully fixed. Explains her illness as \"自律神経《じりつしんけい》 が おかしい\" and possibly as 罰《ばち》 (a punishment) for being a bad mother and wife",
        "why": "\"Better off without me\" is both a depressive belief and a suicide risk factor. Ask how sure she is and whether there could be another explanation: if she could allow none, think of a mood-congruent delusion. Her idea that it is 罰《ばち》 (a punishment) is a folk explanation many people share, not a delusion in itself; it feeds her guilt, so note whether it stays open to other explanations. The priest of her family temple may help later."
      },
      "safety": {
        "ans": {
          "0": ["……はい。 生《い》きて いて も 仕方《しかた》ない と 思《おも》って しまいます。", "...Yes. I end up thinking there's no point in living."],
          "1": ["毎晩《まいばん》、 そう 思《おも》います。", "Every night, I think that."],
          "2": ["……はい。 今《いま》 も 考《かんが》えます。 子《こ》ども たち は 私《わたし》 が いない 方《ほう》 が いい ん です。 先週《せんしゅう》 は、 本当《ほんとう》 に 死《し》のう と 思《おも》いました。 すぐ 後悔《こうかい》 して、 姉《あね》 に 電話《でんわ》 しました けど……。", "...Yes. I still think about it now. My children are better off without me. Last week I really meant to die. I regretted it right away and called my sister, but..."],
          "3": ["いつ とか、 どこ で とか は、 決《き》めて いません。", "I haven't decided when or where."],
          "4": ["……もう しない、 と は 約束《やくそく》 できません。 ご先祖様《せんぞさま》 に 申《もう》し訳《わけ》ない と は 思《おも》います けど……。", "...I can't promise I won't do it again. I know I'd be letting my ancestors down, but..."],
          "5": ["いいえ。 夫《おっと》 に は 腹《はら》 が 立《た》ちます けど、 傷《きず》つけたい と は 思《おも》いません。", "No. I'm angry at my husband, but I don't want to hurt him."]
        },
        "key": [2, 3, 4],
        "need": ["Active suicidal ideation, no plan", "Denies homicidal ideation"],
        "ok": ["Passive death wish"],
        "wrong": {
          "Denies suicidal ideation": "She says she still thinks about it now and cannot promise she will not try again.",
          "Active suicidal ideation with plan": "She has not decided on a time or a place. Knowing that there are medicines at the family home (chart) is not a plan, but it is access to means and raises the risk.",
          "Homicidal ideation toward ___": "She is angry at her husband but denies any wish to hurt him."
        },
        "ev": {
          "find": "Active suicidal ideation, no plan",
          "opts": [
            ["\"今《いま》 も 考《かんが》えます。\" and \"もう しない、 と は 約束《やくそく》 できません。\"", true],
            ["\"毎晩《まいばん》、 そう 思《おも》います。\"", false],
            ["\"いつ とか、 どこ で とか は、 決《き》めて いません。\"", false]
          ],
          "why": "Wishing every night not to wake up is a passive death wish. Thinking about suicide now is active ideation; being unable to promise she will not act again is why it is charted as with intent. \"No time or place decided\" tells you there is no plan; it does not lower the risk."
        },
        "doc": "Active suicidal ideation with intent, no plan (no time or place decided): still thinks her children are better off without her and cannot promise she would not try again (\"もう しない、 と は 約束《やくそく》 できません\"); passive death wish nightly. Suicide attempt by overdose of her sister's pills about a week ago, regretted, called her sister. Knows of medicines at the family home. Protective factors: her children, her sister, her faith. Denies homicidal ideation; angry at her husband, no wish to harm him",
        "why": "A suicide attempt a week ago and suicidal thoughts that are still present put her at high risk now; intent she cannot rule out and medicines she knows she can reach add to it. She needs admission and close observation (follow local law and your hospital's policy). No plan for a time or place does not make her safe. The medicines at the family home must be cleared out or locked away, and her own medicines kept by someone else, before any discharge; at her discharge both were confirmed. Her faith, her children and her sister are protective, but she says herself they are not a promise. Do not accept them in place of a safety plan."
      },
      "orientation": {
        "ans": {
          "0": ["……金曜日《きんようび》 です。", "...It's Friday."],
          "1": ["病院《びょういん》 です。 姉《あね》 と 来《き》ました。", "The hospital. I came with my sister."],
          "2": ["お医者《いしゃ》さん…… 精神科《せいしんか》 の 先生《せんせい》 です。", "A doctor... a psychiatrist."]
        },
        "need": ["Oriented to 3 spheres"],
        "doc": "Oriented to 3 spheres; slow to answer",
        "why": "She answers correctly after a pause. Slowness from depression is not disorientation. Her cognition is grossly intact; if she became confused, look for a medical cause."
      },
      "insight": {
        "ans": {
          "0": ["病気《びょうき》…… でしょう か。 自律神経《じりつしんけい》 が おかしい の か、 罰《ばち》 が 当《あ》たった の か……。 わかりません。", "An illness... is it? Whether my autonomic nerves are off, or it's a punishment... I don't know."],
          "1": ["姉《あね》 が とても 心配《しんぱい》 して いる から です。 あんな こと を して しまった ので……。", "Because my sister is very worried. Because I did that..."],
          "2": ["わかりません。 でも、 眠《ねむ》れる よう に なる なら……。", "I don't know. But if it helps me sleep..."]
        },
        "need": ["Fair", "Grade 4: aware, cause unknown in self"],
        "wrong": {
          "Good": "She is not sure it is an illness and does not know whether treatment can help.",
          "Poor": "She knows something is wrong in her and is open to help with her sleep.",
          "Grade 3: blames others/external factors": "She does not blame her husband or anyone else. She looks for the cause in her body or in a punishment for her own failings, and says she does not know."
        },
        "ev": {
          "find": "Grade 4: aware, cause unknown in self",
          "opts": [
            ["\"自律神経《じりつしんけい》 が おかしい の か、 罰《ばち》 が 当《あ》たった の か……。 わかりません。\"", true],
            ["\"姉《あね》 が とても 心配《しんぱい》 して いる から です。\"", false],
            ["\"日本語《にほんご》 で お願《ねが》い します。\"", false]
          ],
          "why": "She knows something is wrong in her but does not know what. That is grade 4. Knowing why her sister brought her is not the same as understanding the illness."
        },
        "doc": "Fair (grade 4): knows something is wrong but unsure it is an illness (\"自律神経《じりつしんけい》 が おかしい\", or 罰《ばち》, a punishment); open to treatment for sleep",
        "why": "Use her own bridge: she wants to sleep. Explaining depression as an illness, not a punishment, may help her accept treatment; at discharge she said the priest of her family temple and the psychologist had helped with exactly this."
      },
      "impulse": {
        "obs": "Sits still through the interview. No outbursts.",
        "ans": {
          "0": ["いいえ。 怒《おこ》る 元気《げんき》 も ありません。", "No. I don't even have the energy to get angry."],
          "1": ["いいえ、 一度《いちど》 も ありません。", "No, never."]
        },
        "need": ["Fair impulse control"],
        "ok": ["Poor impulse control"],
        "wrong": {
          "Good impulse control": "A week ago she acted on suicidal thoughts and regretted it right away, and she cannot promise she will not act again."
        },
        "doc": "Fair impulse control (no history of violence; controlled during the interview; recent suicide attempt, regretted right away)",
        "why": "Impulse control is not only about anger. Acting on suicidal thoughts and regretting it right away suggests she may act before she can stop herself. With no aggression, fair is defensible and some would chart poor; write both sides."
      },
      "judgment": {
        "ans": {
          "0": ["……交番《こうばん》 に 届《とど》けます。", "...I'd take it to the police box."],
          "1": ["すぐ 車掌《しゃしょう》さん か 駅員《えきいん》さん に 知《し》らせます。", "I'd tell the conductor or the station staff right away."]
        },
        "need": ["Fair", "Intact test judgment", "Impaired social judgment"],
        "wrong": {
          "Good": "Her hypothetical answers are sensible, but a week ago she tried to end her life.",
          "Poor": "She called her sister right after the attempt, came in with her, and accepts being here.",
          "Intact social judgment": "She acted on suicidal thoughts a week ago.",
          "Impaired test judgment": "Taking a wallet to the police box and telling the train staff are sensible answers."
        },
        "doc": "Fair: intact test judgment; impaired social judgment (suicide attempt a week ago), but called her sister for help and accepts admission",
        "why": "Weigh both sides of her real decisions. The attempt lowers her judgment; calling her sister and coming in with her keep it from poor. Give the reasons, not only the label."
      }
    }
  },
{
    "id": "tetsuo",
    "title": "Tetsuo on admission",
    "level": "N3",
    "dx": "Alcohol use disorder, severe",
    "form": "",
    "setting": "Medical unit, late morning, day 1 after the emergency visit. Tetsuo Yamamoto, 52, construction worker, lives alone. His daughter Haruka drove him in; she stays for the first part of the interview and steps out before the questions about safety. He is shaky and sweating.",
    "chart": [
      "Haruka brought him to the ER with tremor and sweating; he had a withdrawal seizure in the ER. A seizure a few years ago as well. Admitted to the medical unit and started on the withdrawal protocol.",
      "About one 720 ml bottle of shochu a day for years, with a hangover and a morning drink (\"迎《むか》え酒《ざけ》\") every morning. Last drink about 48 hours ago.",
      "The medical team asks for a psychiatric assessment. Haruka says he has seemed low lately."
    ],
    "cc": {
      "ask": "cc-hpi:0",
      "ans": [
        "先生《せんせい》、 どうも 調子《ちょうし》 が 悪《わる》くて。 手《て》 が 震《ふる》えて、 汗《あせ》 も 止《と》まらない ん です よ。 けいれん まで 起《お》こして しまって……。",
        "Doctor, I just feel bad. My hands shake and the sweating won't stop. I even had a seizure...",
        "Mr. Yamamoto"
      ],
      "opts": [
        [
          "\"どうも 調子《ちょうし》 が 悪《わる》くて。 手《て》 が 震《ふる》えて、 汗《あせ》 も 止《と》まらない ん です よ。 けいれん まで 起《お》こして しまって……。\"",
          true,
          "The form records the chief complaint in the patient's own words, in Japanese, in quotation marks."
        ],
        [
          "Alcohol withdrawal with tremor, diaphoresis, and a withdrawal seizure",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "I feel bad, my hands shake, I keep sweating, and I had a seizure.",
          false,
          "A translation loses the patient's words. Quote the Japanese; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Adult male, medium built, sitting up on the edge of the bed in a hospital gown. Unshaven, hair damp, sweat on his forehead and neck. Weathered face and rough hands. Haruka stands beside the bed.",
        "ans": {
          "0": ["ああ、 どうも。 山本《やまもと》 です。", "Ah, hello. I'm Yamamoto."],
          "1": ["いや、 ここ で いい です。 立《た》つ と ふらふら する ん で。", "No, I'm fine here. I get wobbly when I stand."]
        },
        "need": ["Adult male", "Medium built", "Fairly kempt"],
        "ok": ["Looks older than stated age"],
        "wrong": {
          "Unkempt": "He is unshaven and sweating, but his gown and bedding are clean. Sweating is a withdrawal sign, not neglect.",
          "Poor hygiene": "Sweat from withdrawal is not poor hygiene.",
          "Older adult": "He is 52. Write his apparent age with \"Adult male\"; if he looks older, use \"Looks older than stated age\"."
        },
        "doc": "Adult male, medium built, in a hospital gown, unshaven, fairly kempt; sweating",
        "why": "Note the sweating here and follow it in the other domains: it is part of his withdrawal and a baseline to compare with as the protocol works."
      },
      "psychomotor": {
        "obs": "Fine tremor of both hands, worse when he reaches for the water cup. Shifts on the bed, rubs his palms on his knees, and cannot keep his hands still.",
        "ans": {
          "0": ["娘《むすめ》 に は、 最近《さいきん》 落《お》ち着《つ》き が ない って 言《い》われます。 自分《じぶん》 で も、 じっと して いられない ん です よ。", "My daughter says I've been restless lately. I can't keep still myself."]
        },
        "need": ["Tremor", "Restless"],
        "ok": ["Psychomotor agitation"],
        "wrong": {
          "No psychomotor agitation or retardation": "His hands shake and he cannot keep still.",
          "Psychomotor retardation": "He is restless, not slowed down.",
          "Abnormal involuntary movements": "This is a withdrawal tremor, worse on reaching. Write it as tremor."
        },
        "doc": "Fine tremor of both hands, worse on reaching; restless (shifts on the bed, rubs his palms)",
        "why": "Tremor and restlessness are withdrawal signs the nurses follow on the protocol. Describe them in plain words so the next examiner can see whether they settle."
      },
      "attitude": {
        "obs": "Answers every question, bluntly and to the point. Looks at you most of the time, but looks away at the floor when his drinking or Haruka's tears come up. Haruka listens and adds a word now and then.",
        "ans": {
          "0": ["山本《やまもと》 で いい です よ。", "Yamamoto is fine."],
          "1": ["日本語《にほんご》 で 頼《たの》みます。 英語《えいご》 は さっぱり なんで。", "Japanese, please. I don't know any English."]
        },
        "need": ["Cooperative", "Fair eye contact"],
        "ok": ["Good eye contact"],
        "wrong": {
          "Irritable": "His manner is blunt, the way he talks at work, but he is not short-tempered with you.",
          "Guarded": "He tells you about his drinking openly. Looking away when it comes up is shame, not wariness.",
          "Uncooperative": "He answers every question."
        },
        "doc": "Cooperative; blunt manner; fair eye contact, looks away when his drinking comes up",
        "why": "A blunt, casual manner is how many working men talk, and it is not irritability. Look at what he does: he answers everything. Looking away at the hard topics is shame; a non-judgmental tone keeps him talking."
      },
      "mood": {
        "obs": "Tense face, sighs often. Looks down and goes quiet when he talks about the last two weeks. Does not smile.",
        "ans": {
          "0": ["調子《ちょうし》 が 悪《わる》い です よ。 落《お》ち着《つ》かなくて、 なんか 怖《こわ》い ん です。", "I feel bad. I can't settle, and I'm kind of scared."],
          "1": ["ここ 二週間《にしゅうかん》 は、 ずっと 気分《きぶん》 が 重《おも》かった です ね。 酒《さけ》 を 飲《の》んで も、 前《まえ》 みたい に 楽《らく》 に ならない。", "These last two weeks I've felt heavy the whole time. Even drinking doesn't make it easier like before."],
          "2": ["三《さん》 です かね。", "About a three, I guess."]
        },
        "quote": "調子《ちょうし》 が 悪《わる》い です よ。 落《お》ち着《つ》かなくて、 なんか 怖《こわ》い ん です。 (I feel bad. I can't settle, and I'm kind of scared.)",
        "need": ["Anxious mood", "Sad mood"],
        "ok": ["Congruent affect", "Restricted affect"],
        "wrong": {
          "Euthymic mood": "He says he feels bad and scared, and heavy for two weeks.",
          "Labile affect": "His expression stays tense and low; it does not switch suddenly.",
          "Flat affect": "He is visibly tense and sighs. His affect is not flat."
        },
        "ev": {
          "find": "Sad mood",
          "opts": [
            ["\"ここ 二週間《にしゅうかん》 は、 ずっと 気分《きぶん》 が 重《おも》かった です ね。\"", true],
            ["\"調子《ちょうし》 が 悪《わる》い です よ。\"", false],
            ["\"山本《やまもと》 で いい です よ。\"", false]
          ],
          "why": "\"調子《ちょうし》 が 悪《わる》い\" (I feel bad) can mean the body as much as the mood, so it does not show low mood by itself. Ask about the last two weeks: \"気分《きぶん》 が 重《おも》かった\" (I felt heavy) is low mood in his words."
        },
        "doc": "\"調子《ちょうし》 が 悪《わる》い です よ。 落《お》ち着《つ》かなくて、 なんか 怖《こわ》い ん です。\" (I feel bad. I can't settle, and I'm kind of scared.) Dysphoric mood: anxious, and low for two weeks; tense, congruent affect",
        "why": "Quote his words, then ask more: 調子《ちょうし》 が 悪《わる》い is vague. Low mood during withdrawal often lifts as it settles, so record it now and recheck it after some weeks without alcohol before you decide whether there is a separate depressive disorder. Low mood in a drinking man is also your cue to ask about suicide."
      },
      "speech": {
        "obs": "Speaks readily at a normal rate and volume, in short, plain sentences. His voice shakes a little with the tremor. Gives a clear account in order.",
        "ans": {
          "0": ["二日《ふつか》 くらい 前《まえ》 から 飲《の》んで なくて。 そしたら 手《て》 が 震《ふる》えて、 汗《あせ》 が 止《と》まらなく なって。 娘《むすめ》 が 車《くるま》 で 病院《びょういん》 に 連《つ》れて 来《き》て くれて、 そこ で けいれん を 起《お》こした ん です。 自分《じぶん》 で は 覚《おぼ》えて ない ん です けど。 何年《なんねん》 か 前《まえ》 に も、 一度《いちど》 あった ん です よ。", "I hadn't had a drink for about two days. Then my hands started shaking and the sweating wouldn't stop. My daughter drove me to the hospital, and I had a seizure there. I don't remember it myself. I had one a few years ago too."]
        },
        "need": ["Spontaneous", "Normal rate", "Adequate volume"],
        "ok": ["Productive"],
        "wrong": {
          "Non-spontaneous (answers only when asked)": "He offers more than each question asks, from the chief complaint on.",
          "Poverty of speech": "His sentences are short and plain, but he gives a full account.",
          "Slow rate": "His voice shakes, but his rate is normal."
        },
        "doc": "Spontaneous, normal rate, adequate volume; short, plain sentences; voice shakes a little with the tremor",
        "why": "Short, plain sentences are his style, not poverty of speech. Record the shaky voice with the tremor: slurred or very slow speech would point to sedation from the protocol or another medical cause."
      },
      "process": {
        "obs": "Tells the story in order, from stopping to the ER. Explains clearly when asked what he means.",
        "ans": {
          "0": ["二日《ふつか》 くらい 前《まえ》 から 飲《の》んで なくて。 そしたら 手《て》 が 震《ふる》えて、 汗《あせ》 が 止《と》まらなく なって。 娘《むすめ》 が 車《くるま》 で 病院《びょういん》 に 連《つ》れて 来《き》て くれて、 そこ で けいれん を 起《お》こした ん です。 自分《じぶん》 で は 覚《おぼ》えて ない ん です けど。 何年《なんねん》 か 前《まえ》 に も、 一度《いちど》 あった ん です よ。", "I hadn't had a drink for about two days. Then my hands started shaking and the sweating wouldn't stop. My daughter drove me to the hospital, and I had a seizure there. I don't remember it myself. I had one a few years ago too."],
          "1": ["朝《あさ》 起《お》きる と、 手《て》 が 震《ふる》えて、 気持《きも》ち 悪《わる》くて。 迎《むか》え酒《ざけ》 を やらない と、 現場《げんば》 に 行《い》けない ん です よ。", "When I wake up my hands shake and I feel sick. Unless I have a morning drink, I can't get to the work site."]
        },
        "need": ["Linear", "Goal-directed"],
        "wrong": {
          "Circumstantial": "He gets to the point quickly.",
          "Thought blocking": "He does not stop in the middle of a thought."
        },
        "doc": "Linear and goal-directed",
        "why": "A clear story in order is linear. Asking what it is like for him gives you the morning withdrawal and the morning drink in his own words. 迎《むか》え酒《ざけ》 is itself a sign of dependence."
      },
      "perception": {
        "obs": "Looks at you while he talks. Once he stares at the wall, frowns, then looks back at you. Not seen talking to himself or listening to anything.",
        "ans": {
          "0": ["いや、 声《こえ》 は 聞《き》こえない です。", "No, I don't hear voices."],
          "1": ["いや。", "No."],
          "2": ["霊《れい》 なんて 見《み》えません よ。 ……ただ、 さっき 壁《かべ》 の しみ が 一瞬《いっしゅん》 虫《むし》 に 見《み》えて、 ぎょっと しました。 よく 見《み》たら、 ただ の しみ でした けど。", "I don't see spirits. ...But a moment ago a stain on the wall looked like a bug for a second, and it startled me. When I looked properly, it was just a stain."],
          "3": ["いや、 だから 声《こえ》 は 聞《き》こえない です よ。", "No, like I said, I don't hear voices."],
          "4": ["ない です。", "No."]
        },
        "key": [0, 2],
        "need": ["Not responding to internal stimuli"],
        "wrong": {
          "Visual hallucinations": "He saw a real stain wrongly for a moment and corrected it himself. A real thing misperceived is an illusion; a hallucination is a perception with nothing there. Write the illusion in words.",
          "Denies perceptual disturbances": "He denies hallucinations, but the bug he saw for a moment is an illusion, which is a perceptual disturbance. Write no hallucinations and describe the illusion.",
          "Auditory hallucinations": "He denies hearing voices, twice.",
          "Responding to internal stimuli": "He looked at a real stain on the wall, then back at you."
        },
        "doc": "No hallucinations at this time; not responding to internal stimuli. Brief visual illusion (a stain on the wall looked like a bug for a moment), recognized by himself as a stain",
        "why": "Ask about perception in every withdrawal patient, and ask about seeing things, not only voices. An illusion is a real thing seen wrongly (the stain); a hallucination is seeing something with nothing there. A brief illusion he corrects himself is not a hallucination, but it is a warning sign in withdrawal. Tell the medical team and the nurses, and recheck perception and orientation through the day and night: illusions that come more often, seeing things with nothing there, losing the sense that they are not real, or new confusion can mean withdrawal delirium, a medical emergency."
      },
      "content": {
        "ans": {
          "0": ["いや、 そんな こと は ない です よ。", "No, nothing like that."],
          "1": ["いや。", "No."],
          "2": ["いや。 食欲《しょくよく》 が ない だけ で。", "No. I just have no appetite."],
          "3": ["何《なに》 が です か。 狙《ねら》われて いる なんて 思《おも》って ない です よ。 怖《こわ》い の は、 また けいれん が 起《お》きる こと だけ です。", "What do you mean? I don't think anyone's after me. The only thing I'm scared of is another seizure."],
          "4": ["説明《せつめい》 も 何《なに》 も、 そんな 心配《しんぱい》 は して ない です から。", "There's nothing to explain. I'm not worried about anything like that."],
          "5": ["娘《むすめ》 に は 迷惑《めいわく》 ばかり かけて ます。 泣《な》かせて しまって、 情《なさ》けない です よ。 それ なのに、 頭《あたま》 の 中《なか》 は 酒《さけ》 の こと ばかり なん です。", "I cause my daughter nothing but trouble. I made her cry. It's pathetic. And still my head is full of drinking."],
          "6": ["先生《せんせい》、 父《ちち》 は いつも 仕事《しごと》 の せい に する ん です。 私《わたし》 は 何年《なんねん》 も 前《まえ》 から、 お酒《さけ》 を やめて ほしい って 言《い》って きた ん です けど……。", "Doctor, my father always blames his work. I've been asking him to stop drinking for years...", "Haruka (daughter)"]
        },
        "key": [3, 5],
        "need": ["No delusions elicited", "Preoccupation with ___"],
        "ok": ["Guilt or worthlessness (not delusional)"],
        "wrong": {
          "Persecutory delusions": "He does not believe anyone is after him. His fear is of another seizure, which is realistic.",
          "Nihilistic delusions": "He feels ashamed and low, but holds no fixed false belief."
        },
        "ev": {
          "find": "Preoccupation with ___",
          "opts": [
            ["\"頭《あたま》 の 中《なか》 は 酒《さけ》 の こと ばかり なん です。\"", true],
            ["\"父《ちち》 は いつも 仕事《しごと》 の せい に する ん です。\" (daughter)", false],
            ["\"いや、 そんな こと は ない です よ。\"", false]
          ],
          "why": "\"頭《あたま》 の 中《なか》 は 酒《さけ》 の こと ばかり\" (my head is full of drinking) is craving that fills his thoughts. Write it as a preoccupation with drinking. Haruka's line is her view of him, not his thought content."
        },
        "doc": "No delusions elicited. Preoccupation with drinking (\"頭《あたま》 の 中《なか》 は 酒《さけ》 の こと ばかり\"); fear of another seizure; guilt toward his daughter, not delusional. Daughter says he blames his work",
        "why": "Record the craving as a preoccupation: it is what treatment targets. His fear of another seizure is realistic, and it is a reason for change you can use later in motivational interviewing. Note Haruka's view as collateral, separate from his own thoughts."
      },
      "safety": {
        "obs": "Haruka has stepped out at your request. He sits quietly and looks at his hands before he answers.",
        "ans": {
          "0": ["……情《なさ》けない と は 思《おも》います よ。 こんな 体《からだ》 に なって。", "...I do think I'm pathetic. Ending up like this."],
          "1": ["……ええ。 このまま 目《め》 が 覚《さ》めなければ いい、 と 思《おも》う こと は あります。 家《いえ》 で 一人《ひとり》 で いる と、 特《とく》に。", "...Yes. Sometimes I think it'd be fine if I just didn't wake up. Especially when I'm alone at home."],
          "2": ["いや、 自分《じぶん》 で 死《し》のう と は 思《おも》って ない です。", "No, I'm not thinking of killing myself."],
          "3": ["ない です。", "No."],
          "4": ["ない です よ。 娘《むすめ》 も 孫《まご》 も いる し。", "No. I've got my daughter and my grandchild."],
          "5": ["いや、 ない です。 腹《はら》 が 立《た》つ の は 自分《じぶん》 に です よ。", "No. The only one I'm angry at is myself."]
        },
        "key": [1, 3, 4],
        "need": ["Passive death wish", "Denies homicidal ideation"],
        "wrong": {
          "Denies suicidal ideation": "He denies a wish to kill himself, but he says he sometimes wishes he would not wake up. That is a passive death wish; write it.",
          "Active suicidal ideation, no plan": "He denies thoughts of killing himself. His wish not to wake up is passive.",
          "Active suicidal ideation with plan": "He denies a plan and intent.",
          "Homicidal ideation toward ___": "He denies any wish to hurt anyone; his anger is at himself."
        },
        "ev": {
          "find": "Passive death wish",
          "opts": [
            ["\"このまま 目《め》 が 覚《さ》めなければ いい、 と 思《おも》う こと は あります。\"", true],
            ["\"情《なさ》けない と は 思《おも》います よ。\"", false],
            ["\"自分《じぶん》 で 死《し》のう と は 思《おも》って ない です。\"", false]
          ],
          "why": "He comes out with it only when you ask about not waking up. \"情《なさ》けない\" is shame, not a death wish, and his denial of suicidal thoughts does not cancel the passive wish."
        },
        "doc": "Passive death wish (\"このまま 目《め》 が 覚《さ》めなければ いい\"), worse when alone at home; denies active suicidal ideation, plan, or intent; protective: daughter and grandchild. Denies homicidal ideation; anger at himself",
        "why": "In a drinking patient with low mood, ask about suicide directly, from death wish to plan and intent, and ask privately if you can. To the general question he spoke only of shame; he told you the wish only when you asked about not waking up. Alcohol raises suicide risk because it lowers inhibition, and living alone adds to it. Ask again as withdrawal settles and before discharge, and tell the team so the plan covers it."
      },
      "orientation": {
        "ans": {
          "0": ["ええと…… 木曜日《もくようび》 です よね。", "Um... it's Thursday, right?"],
          "1": ["病院《びょういん》 です よ。 内科《ないか》 の 病棟《びょうとう》。", "The hospital. The medical ward."],
          "2": ["精神科《せいしんか》 の 先生《せんせい》 でしょう。 さっき そう 言《い》って ました よね。", "You're the psychiatrist. You said so earlier, didn't you?"]
        },
        "need": ["Oriented to 3 spheres"],
        "wrong": {
          "Disoriented to time": "He hesitates, then gives the correct day."
        },
        "doc": "Oriented to 3 spheres",
        "why": "A short pause before the day is not disorientation. In withdrawal, recheck orientation through the day and night: new confusion would point to delirium or another medical cause, such as thiamine deficiency, and the medical team should see him at once."
      },
      "insight": {
        "ans": {
          "0": ["病気《びょうき》 って ほど じゃ ない でしょう。 体《からだ》 が ちょっと 参《まい》って る だけ です よ。", "It's not really an illness. My body's just a bit worn out."],
          "1": ["震《ふる》え と 汗《あせ》 が ひどかった から でしょう。 まあ、 飲《の》みすぎ かも しれない けど、 現場《げんば》 の 仕事《しごと》 が きつくて、 飲《の》まない と やって られない ん です よ。", "Because the shaking and sweating were bad, I guess. Well, maybe I drink too much, but the work on site is hard, and I can't get by without a drink."],
          "2": ["震《ふる》え が 止《と》まる なら、 飲《の》みます よ。 けいれん は もう ごめん です から。", "If it stops the shaking, I'll take it. I've had enough of seizures."]
        },
        "key": [1],
        "need": ["Fair", "Grade 3: blames others/external factors"],
        "wrong": {
          "Grade 2: slight awareness": "He admits he may drink too much and accepts treatment for withdrawal. That is more than slight awareness.",
          "Grade 5: intellectual insight": "He does not see the drinking as an illness in himself; he puts it down to his work.",
          "Good": "He blames his work and does not accept that he has an illness.",
          "Poor": "He admits he may drink too much and will take medicine for withdrawal."
        },
        "ev": {
          "find": "Grade 3: blames others/external factors",
          "opts": [
            ["\"現場《げんば》 の 仕事《しごと》 が きつくて、 飲《の》まない と やって られない ん です よ。\"", true],
            ["\"父《ちち》 は いつも 仕事《しごと》 の せい に する ん です。\" (daughter)", false],
            ["\"震《ふる》え が 止《と》まる なら、 飲《の》みます よ。\"", false]
          ],
          "why": "He half admits the drinking but puts the cause on his work. That is grade 3. Haruka's line agrees with it, but insight is graded from his own words, and accepting medicine for the shaking is not the same as understanding the disorder."
        },
        "doc": "Fair (grade 3): admits he may drink too much but blames the hard work (\"飲《の》まない と やって られない\"); does not see it as an illness; accepts medicine to stop the shaking",
        "why": "Do not argue with him about the cause. His fear of another seizure and his guilt toward Haruka are reasons for change in his own words; reflect them back. Insight often grows as withdrawal settles; compare at discharge."
      },
      "impulse": {
        "obs": "Stays seated through the interview. Restless and shaky, but no outbursts, even when Haruka speaks about his drinking.",
        "ans": {
          "0": ["いや。 怒《おこ》る より、 黙《だま》って 飲《の》む 方《ほう》 です。", "No. I'm more the type to drink quietly than get angry."],
          "1": ["ない です。 けんか は しません。", "No. I don't get into fights."]
        },
        "need": ["Fair impulse control"],
        "ok": ["Poor impulse control"],
        "wrong": {
          "Good impulse control": "He drinks every morning despite harm, including seizures a few years ago. He cannot resist when the craving comes."
        },
        "doc": "Fair impulse control (no history of violence; controlled during the interview, even when his daughter speaks about his drinking; unable to control drinking despite harm)",
        "why": "Impulse control is not only about anger. Drinking every morning despite earlier seizures is a real loss of control, and some psychiatrists would chart poor for it. Fair is defensible because the loss of control is confined to alcohol and there is no aggression. Whichever you choose, write both sides."
      },
      "judgment": {
        "ans": {
          "0": ["近《ちか》く の 交番《こうばん》 に 持《も》って いきます よ。", "I'd take it to the nearest police box."],
          "1": ["非常《ひじょう》 ボタン を 押《お》して、 周《まわ》り に も 知《し》らせます。", "I'd press the emergency button and warn the people around me."]
        },
        "need": ["Fair", "Intact test judgment", "Impaired social judgment"],
        "wrong": {
          "Good": "His hypothetical answers are sensible, but he kept drinking every day after seizures a few years ago.",
          "Poor": "He accepted his daughter's help, came in, and accepts treatment for withdrawal.",
          "Intact social judgment": "He kept drinking despite earlier seizures and needed a morning drink to get to work.",
          "Impaired test judgment": "Taking a wallet to the police box and pressing the emergency button are sensible answers."
        },
        "doc": "Fair: intact test judgment; impaired social judgment (kept drinking daily despite earlier seizures), but came in with his daughter and accepts treatment",
        "why": "Weigh both sides of his real decisions. Daily drinking after earlier seizures lowers his judgment; letting Haruka bring him in and accepting the protocol keeps it from poor."
      }
    }
  },
{
    "id": "chiyoko",
    "title": "Chiyoko on admission",
    "level": "N3",
    "dx": "Major neurocognitive disorder due to Alzheimer's disease, moderate, with behavioral disturbance",
    "form": "",
    "setting": "Admitting section, early evening. Chiyoko Ito, 79, retired primary-school teacher, widowed, born in Niigata. Lives with her eldest son Hiroshi, 52, an office worker, and his wife Megumi, 50, who is her main carer. Brought by both after two months of night wandering and of saying that Megumi steals from her. She is usually worse in the late afternoon and evening.",
    "chart": [
      "Forgetfulness for about four years. Alzheimer's disease diagnosed at a memory clinic two years ago; takes donepezil 5 mg every morning. Over the past two months she says Megumi steals her purse and bankbook (\"お財布《さいふ》 と 通帳《つうちょう》\"), and she gets up at night packing a bag \"to go home\", meaning her childhood home in Niigata. Worse in the late afternoon and evening.",
      "Three nights ago she left the house at 2 a.m. and was found by a police officer at a convenience store about 2 km away. The next night, when Megumi tried to stop her going out again, she pushed her (no injury). Hiroshi and Megumi say the family is exhausted.",
      "Checked in the emergency department today for causes of delirium: no fever, urine test and blood tests normal, no new medicines, no acute change in attention, gradual course. Delirium judged unlikely; cleared for the psychiatric interview."
    ],
    "cc": {
      "ask": "collateral:1",
      "ans": [
        "先生《せんせい》、 この 二《に》か月《げつ》 ぐらい、 お義母《かあ》さん が 夜中《よなか》 に 起《お》きて、 「家《いえ》 に 帰《かえ》る」 って 荷物《にもつ》 を まとめる ん です。 三日前《みっかまえ》 は 夜中《よなか》 の 二時《にじ》 に 一人《ひとり》 で 出《で》て いって しまって……。 それ に、 私《わたし》 が お財布《さいふ》 を 盗《ぬす》んだ って、 毎日《まいにち》 言《い》われる ん です。",
        "Doctor, for about two months my mother-in-law has been getting up in the middle of the night and packing her things, saying \"I'm going home.\" Three nights ago she went out alone at two in the morning... And every day she tells me I stole her purse.",
        "Megumi (daughter-in-law)"
      ],
      "opts": [
        [
          "\"この 二《に》か月《げつ》 ぐらい、 お義母《かあ》さん が 夜中《よなか》 に 起《お》きて、 「家《いえ》 に 帰《かえ》る」 って 荷物《にもつ》 を まとめる ん です。 三日前《みっかまえ》 は 夜中《よなか》 の 二時《にじ》 に 一人《ひとり》 で 出《で》て いって しまって……。 それ に、 私《わたし》 が お財布《さいふ》 を 盗《ぬす》んだ って、 毎日《まいにち》 言《い》われる ん です。\"",
          true,
          "The form records the chief complaint in the informant's own words, in Japanese, in quotation marks."
        ],
        [
          "Night wandering and a delusion of theft in a patient with Alzheimer's disease",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "She gets up at night to go home, she went out alone at 2 a.m., and she says I stole her purse.",
          false,
          "A translation loses the informant's words. Quote the Japanese; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Older adult female, medium built, in a clean beige cardigan over a blouse and slacks. Hair neatly combed; Megumi helped her get ready this afternoon, but she put on and buttoned the cardigan herself. It is buttoned one button off, so one side hangs lower. Holds her handbag on her lap.",
        "ans": {
          "0": ["あら、 こんばんは。 若《わか》い 先生《せんせい》 ね。 伊藤《いとう》 です。 よろしく ね。", "Oh, good evening. What a young doctor. I'm Ito. Nice to meet you."],
          "1": ["はい、 ありがとう。 でも、 すぐ 帰《かえ》ります から ね。", "Yes, thank you. But I'll be going home soon, you know."]
        },
        "need": ["Older adult", "Adult female", "Medium built", "Fairly kempt"],
        "ok": ["Well kempt"],
        "wrong": {
          "Unkempt": "Her clothes are clean and her hair is combed. The wrongly buttoned cardigan is the one sign, and it matters for another reason.",
          "Poor hygiene": "She is clean. Her family looks after her well.",
          "Looks older than stated age": "Nothing you see suggests it."
        },
        "doc": "Older adult female, medium built, in a clean cardigan, blouse and slacks, hair combed (her daughter-in-law helped her get ready); fairly kempt, cardigan buttoned one button off",
        "why": "In dementia, ask who dressed the patient. The neatness here is Megumi's care; the misbuttoned cardigan is Chiyoko's own difficulty with dressing. Both belong in the note, and both help you compare at discharge."
      },
      "psychomotor": {
        "obs": "Gets up twice to walk to the door and sits again when you ask kindly. Opens her handbag and looks inside it several times. No tremor, no stiffness, no abnormal movements.",
        "ans": {
          "0": ["そんな こと、 言《い》われた こと ない です よ。 でも、 そろそろ 帰《かえ》らない と。 明日《あした》 も 学校《がっこう》 が あります から。", "Nobody says that to me. But I should be getting home. I have school again tomorrow."]
        },
        "need": ["Restless"],
        "ok": ["Psychomotor agitation"],
        "wrong": {
          "No psychomotor agitation or retardation": "She gets up twice to go to the door and keeps checking her bag.",
          "Psychomotor retardation": "She is restless, not slowed.",
          "Tremor": "No tremor is seen.",
          "Abnormal involuntary movements": "No abnormal movements are seen. Write that down: it is the baseline if an antipsychotic is started later."
        },
        "doc": "Restless (gets up twice to go to the door, checks her handbag repeatedly), redirectable; no tremor, rigidity or abnormal movements",
        "why": "Record the time of day: her restlessness is worse in the late afternoon and evening. In an older patient, new restlessness means you look for delirium first, as with Shigeru Yamada, whose agitation began over hours and came with poor attention. Note the absence of tremor and stiffness now, before any medicine that can cause them."
      },
      "attitude": {
        "obs": "Warm toward you: smiles, pats your hand, calls you 先生《せんせい》 and talks to you warmly, mixing polite and plain forms with よ and ね, as a retired teacher might to a young colleague. Good eye contact with you. When Megumi speaks, she turns away and frowns: 「この 人《ひと》 に は 聞《き》かないで。」",
        "ans": {
          "0": ["伊藤《いとう》 で いい です よ。 学校《がっこう》 で は、 みんな 伊藤《いとう》先生《せんせい》 って 呼《よ》ぶ けど ね。", "Ito is fine. At school, though, everyone calls me Ito-sensei."],
          "1": ["日本語《にほんご》 で お願《ねが》い します。 英語《えいご》 は できない の よ。", "Japanese, please. I can't do English."]
        },
        "need": ["Cooperative", "Good eye contact"],
        "wrong": {
          "Suspicious": "She is suspicious of Megumi, not of you. Attitude is toward the examiner; write her coldness toward Megumi in the text and her belief under thought content.",
          "Overfamiliar": "A warm, motherly tone and some plain form from a 79-year-old retired teacher to a young doctor is how many people her age talk to younger people. It is not disinhibition.",
          "Uncooperative": "She answers everything you ask and stays in the room when you ask."
        },
        "doc": "Cooperative and friendly toward the examiner, good eye contact; warm, motherly tone with the doctor; cold and suspicious toward her daughter-in-law (turns away, frowns)",
        "why": "Write both attitudes. The contrast between warmth to a stranger and coldness to the person who cares for her every day is typical when the carer becomes the target of a theft belief, and it explains why the family is so tired."
      },
      "mood": {
        "obs": "Smiles often with you. When Megumi mentions the purse, her face hardens and her voice rises; she settles within a minute when you ask about her school.",
        "ans": {
          "0": ["大丈夫《だいじょうぶ》 です よ。 どこ も 悪《わる》く ない ん です から。", "I'm fine. There's nothing wrong with me."],
          "1": ["別《べつ》 に 変《か》わりません よ。 ……ただ ね、 お財布《さいふ》 が また なくなった の。 あの 人《ひと》 が 持《も》って いった ん です よ。", "Nothing's different. ...Only, my purse is gone again. That woman took it."],
          "2": ["そう ね…… 七《なな》 ぐらい かな。", "Let me see... about a seven."]
        },
        "quote": "大丈夫《だいじょうぶ》 です よ。 (I'm fine.)",
        "need": ["Full range affect", "Congruent affect"],
        "ok": ["Euthymic mood", "Irritable mood"],
        "wrong": {
          "Sad mood": "She does not say she is low, and she smiles and talks warmly about her school.",
          "Euphoric mood": "She is pleasant, not elated.",
          "Flat affect": "Her face changes with the topic: warm about school, angry about the purse.",
          "Labile affect": "Her anger has a clear trigger (the purse) and settles over a minute when the topic changes. That is reactivity to her belief, not sudden swings without cause."
        },
        "ev": {
          "find": "Congruent affect",
          "opts": [
            ["\"お財布《さいふ》 が また なくなった の。 あの 人《ひと》 が 持《も》って いった ん です よ。\"", true],
            ["\"大丈夫《だいじょうぶ》 です よ。\"", false],
            ["\"そう ね…… 七《なな》 ぐらい かな。\"", false]
          ],
          "why": "Her face hardens and her voice rises exactly when she talks about the purse she believes was taken. The irritability fits what she is saying, so the affect is congruent. Her \"大丈夫《だいじょうぶ》 です よ\" is her mood in her own words; quote it, then describe what you see."
        },
        "doc": "\"大丈夫《だいじょうぶ》 です よ。\" (I'm fine.) Mood euthymic by her account, irritable when the purse comes up. Affect full range, congruent: warm when talking about her teaching, irritable when the purse comes up, settles within a minute",
        "why": "Quote her words even when they do not match the history. Then write what you observe and when it changes. Euthymic (her own report, and how she is most of the interview) and irritable (when the purse comes up) are both defensible, so the model accepts either; what matters is that the note says what triggers the irritability. The trigger (the purse) and how fast she settles are useful for the nurses: they show what to avoid and what calms her."
      },
      "speech": {
        "obs": "Talks readily at a normal rate and volume. Pauses to search for words and fills the gaps with あれ or その; once calls her handbag 「お金《かね》 を 入《い》れる あれ」. Says she must go to school tomorrow to teach.",
        "ans": {
          "0": ["何《なに》 も ない です よ。 明日《あした》 は 朝《あさ》 から 学校《がっこう》 で、 子《こ》ども たち が 待《ま》って いる の。 だから 早《はや》く 帰《かえ》って、 あれ…… その…… 授業《じゅぎょう》 の 準備《じゅんび》 を しない と。 新潟《にいがた》 の 学校《がっこう》 で は ね、 冬《ふゆ》 は 雪《ゆき》 が すごくて、 朝《あさ》 は 子《こ》ども たち と 雪《ゆき》 を かいて から 授業《じゅぎょう》 を した もの です よ。 ……それで、 何《なん》 の 話《はなし》 でした っけ。 そう、 お財布《さいふ》。 お財布《さいふ》 が ない から、 帰《かえ》れない の よ。", "Nothing happened. Tomorrow I have school from the morning, and the children are waiting. So I have to get home early and, um... that... prepare my lessons. At the school in Niigata, you know, the snow in winter was terrible, and in the mornings I'd clear the snow with the children before lessons. ...So, what were we talking about? Yes, my purse. My purse is missing, so I can't go home."]
        },
        "need": ["Spontaneous", "Normal rate", "Adequate volume"],
        "ok": ["Productive"],
        "wrong": {
          "Poverty of speech": "She talks freely. Pauses to find a word are not poverty of speech.",
          "Non-spontaneous (answers only when asked)": "She offers stories about her school without being asked.",
          "Slow rate": "She stops to find words, but her rate between pauses is normal."
        },
        "doc": "Spontaneous, normal rate, adequate volume; word-finding pauses (calls her handbag \"お金《かね》 を 入《い》れる あれ\"); confabulation (says she must teach at school tomorrow)",
        "why": "Word-finding pauses and confabulation are part of the dementia. Confabulation is not lying: she fills a gap in memory with something that feels true to her, here her working life. Do not argue with it; write it down in her words."
      },
      "process": {
        "obs": "Starts with going home, drifts into a long story about snow at her school in Niigata, then comes back to the purse and going home.",
        "ans": {
          "0": ["何《なに》 も ない です よ。 明日《あした》 は 朝《あさ》 から 学校《がっこう》 で、 子《こ》ども たち が 待《ま》って いる の。 だから 早《はや》く 帰《かえ》って、 あれ…… その…… 授業《じゅぎょう》 の 準備《じゅんび》 を しない と。 新潟《にいがた》 の 学校《がっこう》 で は ね、 冬《ふゆ》 は 雪《ゆき》 が すごくて、 朝《あさ》 は 子《こ》ども たち と 雪《ゆき》 を かいて から 授業《じゅぎょう》 を した もの です よ。 ……それで、 何《なん》 の 話《はなし》 でした っけ。 そう、 お財布《さいふ》。 お財布《さいふ》 が ない から、 帰《かえ》れない の よ。", "Nothing happened. Tomorrow I have school from the morning, and the children are waiting. So I have to get home early and, um... that... prepare my lessons. At the school in Niigata, you know, the snow in winter was terrible, and in the mornings I'd clear the snow with the children before lessons. ...So, what were we talking about? Yes, my purse. My purse is missing, so I can't go home."],
          "1": ["それ は ね、 先生《せんせい》…… 恵《めぐみ》さん が 私《わたし》 の お財布《さいふ》 と 通帳《つうちょう》 を 隠《かく》す の よ。 ちゃんと 引《ひ》き出《だ》し に しまって おいた のに、 なくなって いる ん です から。", "What I mean, doctor... Megumi hides my purse and my bankbook. I put them away properly in the drawer, and they're gone."]
        },
        "need": ["Circumstantial"],
        "ok": ["Goal-directed"],
        "wrong": {
          "Tangential": "She drifts into the snow in Niigata, but she comes back to the purse and going home on her own. Tangential speech does not come back.",
          "Linear": "She takes a long detour before she reaches the point.",
          "Thought blocking": "Her pauses are a search for a word, not a sudden stop in the thought.",
          "Loose associations": "Each idea follows from the one before it."
        },
        "doc": "Circumstantial: long detour into her teaching years in Niigata, returns to the point (the purse, going home); word-finding pauses",
        "why": "Older memories are easier for her to reach than recent ones, so her stories pull toward her teaching years. Let her finish the detour; she comes back. Then ask what she means, as here: the follow-up gives you the theft belief in her own words."
      },
      "perception": {
        "obs": "Watches you and her bag. Does not look around the room, pause as if listening, or talk to anyone who is not there.",
        "ans": {
          "0": ["いいえ。 耳《みみ》 は まだ いい です よ。", "No. My ears are still good."],
          "1": ["そんな こと、 ありません よ。", "Nothing like that."],
          "2": ["見《み》えません よ、 そんな もの。", "I don't see anything like that."],
          "3": ["声《こえ》？ 聞《き》こえない って、 さっき 言《い》った でしょう。", "Voices? I told you a moment ago, I don't hear any."],
          "4": ["いいえ。", "No."]
        },
        "key": [0, 2],
        "need": ["Denies perceptual disturbances", "Not responding to internal stimuli"],
        "wrong": {
          "Visual hallucinations": "She denies seeing things, and the family has not described any. Shigeru Yamada saw children at the window during his delirium; she does not.",
          "Responding to internal stimuli": "She attends to you and to her bag, not to anything unseen."
        },
        "doc": "Denies perceptual disturbances; not responding to internal stimuli; family reports no hallucinations",
        "why": "Ask about hallucinations in every older patient with new behaviour. Visual hallucinations would make you think again of delirium (as in Shigeru Yamada) or of another type of dementia. Their absence here fits the gradual picture."
      },
      "content": {
        "ans": {
          "0": ["そこ まで は…… でも、 あの 人《ひと》 は 私《わたし》 の お金《かね》 が 目当《めあ》て なの よ。", "Not that far... but that woman is after my money."],
          "1": ["そう ね、 私《わたし》 が 出《で》かけよう と する と、 あの 人《ひと》 が いつも 止《と》める の。", "Well, whenever I try to go out, she always stops me."],
          "2": ["いいえ。 ご飯《はん》 は おいしい です よ。", "No. The food is good."],
          "3": ["本当《ほんとう》 です よ。 だって、 毎日《まいにち》 なくなる ん です もの。", "It's true. Why, it goes missing every day."],
          "4": ["私《わたし》 が どこ か に しまって 忘《わす》れた って 言《い》う の？ そんな こと、 ありません。 私《わたし》 は ずっと 先生《せんせい》 を して いた ん です よ。", "You mean I put it somewhere and forgot? Never. I was a teacher all my life."],
          "5": ["いいえ。 私《わたし》 は 何《なに》 も 悪《わる》い こと は して いません。", "No. I haven't done anything wrong."],
          "6": ["先生《せんせい》、 お義母《かあ》さん は 前《まえ》 は 本当《ほんとう》 に 優《やさ》しい 人《ひと》 だった ん です。 病気《びょうき》 の せい だ と わかって は いる ん です けど、 毎日《まいにち》 泥棒《どろぼう》 って 言《い》われる と…… 正直《しょうじき》、 もう 限界《げんかい》 です。", "Doctor, my mother-in-law used to be such a kind person. I know it's the illness, but when I'm called a thief every day... honestly, I'm at my limit.", "Megumi (daughter-in-law)"]
        },
        "key": [3, 4],
        "need": ["Persecutory delusions"],
        "ok": ["Preoccupation with ___"],
        "wrong": {
          "No delusions elicited": "She holds a fixed, false belief that Megumi takes her purse and bankbook, is fully sure of it, and rejects the other explanation.",
          "Delusional jealousy": "The belief is about theft of her things, not about a partner's faithfulness.",
          "Delusions of reference": "She does not think things around her carry special messages for her."
        },
        "ev": {
          "find": "Persecutory delusions",
          "opts": [
            ["\"私《わたし》 が どこ か に しまって 忘《わす》れた って 言《い》う の？ そんな こと、 ありません。\"", true],
            ["\"私《わたし》 が 出《で》かけよう と する と、 あの 人《ひと》 が いつも 止《と》める の。\"", false],
            ["\"お義母《かあ》さん は 前《まえ》 は 本当《ほんとう》 に 優《やさ》しい 人《ひと》 だった ん です。\" (Megumi)", false]
          ],
          "why": "When you ask whether there could be another explanation, she names the obvious one herself (that she put it away and forgot) and rejects it at once. That fixedness is what makes the theft belief a delusion. Megumi does stop her going out at night: that is real, not a delusion. Megumi's line is collateral and tells you about the carer's strain."
        },
        "doc": "Persecutory delusion of theft: believes her daughter-in-law Megumi takes and hides her purse and bankbook; fully sure, rejects another explanation (\"私《わたし》 が どこ か に しまって 忘《わす》れた って 言《い》う の？ そんな こと、 ありません。\"). Preoccupied with going home and with school. No other delusions elicited. Megumi: \"もう 限界《げんかい》 です\" (I'm at my limit)",
        "why": "A delusion of theft in dementia often grows from forgetting where things were put, and it usually targets the person closest to her, here the main carer. Treatment does not aim to argue her out of it. Megumi's words about her limit belong in the note too: carer strain is part of this admission and part of the discharge plan."
      },
      "safety": {
        "ans": {
          "0": ["いいえ、 そんな こと 思《おも》いません よ。 まだ まだ 元気《げんき》 です から。", "No, I don't think that. I'm still going strong."],
          "1": ["いいえ。 朝《あさ》 は ちゃんと 起《お》きて、 学校《がっこう》 に 行《い》かない と。", "No. I have to get up properly in the morning and go to school."],
          "2": ["自殺《じさつ》？ とんでもない。 ありません。", "Suicide? Good heavens, no. Never."],
          "3": ["ありません よ。", "No."],
          "4": ["ない です。", "No."],
          "5": ["人《ひと》 を 傷《きず》つける？ 私《わたし》 が？ そんな こと、 絶対《ぜったい》 に しません よ。", "Hurt someone? Me? I would never do such a thing."]
        },
        "key": [2, 5],
        "need": ["Denies suicidal ideation", "Denies homicidal ideation"],
        "wrong": {
          "Passive death wish": "She says she is still going strong and talks about getting up for school.",
          "Homicidal ideation toward ___": "She has no thoughts of harming anyone. The push happened when Megumi tried to stop her going out; record it as behaviour and as a risk, not as homicidal ideation."
        },
        "ev": {
          "find": "Denies homicidal ideation",
          "opts": [
            ["\"人《ひと》 を 傷《きず》つける？ 私《わたし》 が？ そんな こと、 絶対《ぜったい》 に しません よ。\"", true],
            ["\"ありません よ。\"", false],
            ["\"自殺《じさつ》？ とんでもない。 ありません。\"", false]
          ],
          "why": "Her answer to the question about hurting others is the line for homicidal ideation. The push that Megumi reports does not contradict it: it was not planned or wished for, but it is still a risk and goes in the note beside her denial."
        },
        "doc": "Denies suicidal ideation, plan or intent; denies homicidal ideation (\"絶対《ぜったい》 に しません よ\"). Family reports she pushed Megumi when stopped from going out (no injury). Other risks: night wandering (left home at 2 a.m., found 2 km away by police), falls",
        "why": "Ask an older patient with dementia the same direct questions as anyone else, in simple words. Her risks are of another kind: leaving the house at night, falls, and pushing when stopped. Write her denial and the family's report side by side; she may truly not remember the push."
      },
      "orientation": {
        "obs": "Asks three times during the interview when she can go home, each time a few minutes after you answered. Talks in rich detail about her teaching years and Niigata. Follows each question and stays with the conversation.",
        "ans": {
          "0": ["今日《きょう》？ ええと…… 月曜日《げつようび》 かな。 今年《ことし》 は 昭和《しょうわ》 の…… 何年《なんねん》 だった かな。", "Today? Um... Monday, I think. This year is Shōwa... what year was it now?"],
          "1": ["ここ？ 学校《がっこう》 でしょう。 職員室《しょくいんしつ》 じゃ ない の？", "Here? It's the school, isn't it? Isn't this the staff room?"],
          "2": ["先生《せんせい》 でしょう。 ……お医者《いしゃ》さん？ 学校《がっこう》 に お医者《いしゃ》さん が 来《く》る なんて、 珍《めずら》しい ね。", "You're a sensei, aren't you. ...A doctor? How unusual, a doctor coming to the school."]
        },
        "need": ["Disoriented to time", "Disoriented to place"],
        "wrong": {
          "Oriented to 3 spheres": "She gives the wrong day, places the year in the Shōwa era, and thinks she is at a school.",
          "Disoriented to person": "She knows who she is and accepts that you are a doctor. She is oriented to person only."
        },
        "ev": {
          "find": "Disoriented to place",
          "opts": [
            ["\"ここ？ 学校《がっこう》 でしょう。 職員室《しょくいんしつ》 じゃ ない の？\"", true],
            ["\"先生《せんせい》 でしょう。\"", false],
            ["\"月曜日《げつようび》 かな。\"", false]
          ],
          "why": "She places herself in a school staff room, back in her working years. \"先生《せんせい》 でしょう\" is correct (doctors are 先生《せんせい》 too), and a wrong day shows disorientation to time, not place."
        },
        "doc": "Oriented to person only: knows her name and accepts the examiner is a doctor; disoriented to time (wrong day; places the year in the Shōwa era, which ended in 1989) and place (thinks she is at a school). Recent memory poor (asks the same question within minutes); remote memory relatively preserved (teaching years, Niigata). Attention kept through the interview",
        "why": "Disorientation alone does not separate dementia from delirium. Look at the course and attention. Shigeru Yamada's confusion began over hours, came and went, and he could not keep attention. Chiyoko's change has been gradual, she follows the whole interview, and the emergency department found no fever, normal urine and blood tests and no new medicines. Always look for delirium first, then recheck if she suddenly becomes drowsier, more confused or less attentive."
      },
      "insight": {
        "ans": {
          "0": ["病気《びょうき》？ 私《わたし》 は どこ も 悪《わる》く ありません よ。 もの忘《わす》れ？ 年《とし》 を とれば、 誰《だれ》 でも 少《すこ》し は ね。", "Ill? There's nothing wrong with me. Forgetfulness? Anyone gets a bit of that with age."],
          "1": ["知《し》りません よ。 恵《めぐみ》さん が 私《わたし》 を 追《お》い出《だ》したい ん でしょう。", "I don't know. Megumi wants to get rid of me, I suppose."],
          "2": ["朝《あさ》 の お薬《くすり》 は 飲《の》んで います よ。 恵《めぐみ》さん が 出《だ》して くれる から。 何《なん》 の お薬《くすり》 か は…… 忘《わす》れました。", "I take my morning medicine. Megumi gives it to me. What it's for... I've forgotten."]
        },
        "need": ["Poor", "Grade 1: complete denial"],
        "ok": ["Grade 2: slight awareness"],
        "wrong": {
          "Grade 3: blames others/external factors": "Grade 3 needs her to accept that she is ill and then blame the illness on something outside her. She does not accept any illness: forgetfulness is normal ageing to her, and the admission is Megumi's doing, which is part of her delusion, not an explanation of an illness.",
          "Grade 4: aware, cause unknown in self": "She does not see a problem in herself; she puts the forgetfulness down to age and the admission down to Megumi.",
          "Fair": "She denies illness and blames her carer for the admission."
        },
        "ev": {
          "find": "Grade 1: complete denial",
          "opts": [
            ["\"私《わたし》 は どこ も 悪《わる》く ありません よ。\"", true],
            ["\"朝《あさ》 の お薬《くすり》 は 飲《の》んで います よ。\"", false],
            ["\"恵《めぐみ》さん が 私《わたし》 を 追《お》い出《だ》したい ん でしょう。\"", false]
          ],
          "why": "Asked whether she is ill, she says there is nothing wrong with her. Her nod to forgetfulness is normal ageing to her, so grade 2 is also defensible, but she never accepts an illness, which grade 3 needs. Blaming Megumi for the admission is her delusion speaking, not insight. Taking her medicine because Megumi hands it to her is adherence, not insight."
        },
        "doc": "Poor (grade 1): denies illness (\"私《わたし》 は どこ も 悪《わる》く ありません よ\"), puts forgetfulness down to normal ageing (\"年《とし》 を とれば、 誰《だれ》 でも 少《すこ》し は\") and the admission down to her daughter-in-law; takes donepezil when Megumi gives it but does not know what it is for",
        "why": "Lack of awareness is part of the dementia itself, not stubbornness, so do not try to argue her into insight. It matters for decisions: she cannot fully weigh the decision about admission, so decisions are made with her and with her family. Follow local law and your hospital's policy."
      },
      "impulse": {
        "obs": "Stands twice to go to the door and sits again when you ask kindly. Raises her voice at Megumi once about the purse, then settles. When she denies hurting anyone, Megumi says quietly: 「おととい の 夜《よる》、 玄関《げんかん》 で 押《お》されて……。 けが は ありません でした けど。」",
        "ans": {
          "0": ["いいえ。 私《わたし》 は 怒《おこ》ったり しません よ。 ……お財布《さいふ》 を 返《かえ》して くれない とき は、 さすが に ね。", "No. I don't get angry. ...Only when she won't give my purse back, naturally."],
          "1": ["けが？ とんでもない。 人《ひと》 に 手《て》 を 上《あ》げる なんて、 絶対《ぜったい》 に しません。", "Hurt someone? Good heavens. I would never raise a hand to anyone."]
        },
        "need": ["Poor impulse control"],
        "ok": ["Fair impulse control"],
        "wrong": {
          "Good impulse control": "She pushed Megumi when stopped from going out two nights ago, and she cannot hold back the urge to leave even at 2 a.m."
        },
        "doc": "Poor impulse control (pushed her daughter-in-law two nights ago when stopped from going out, no injury; raised her voice at her once about the purse in the interview; gets up for the door twice but is redirectable). Night wandering recorded under risk and judgment. Denies the push (\"絶対《ぜったい》 に しません\")",
        "why": "She acts on the urge to go home whatever the hour or the danger, and pushed the person who stood in her way: that is poor control in practice, and it is what makes home unsafe tonight. Fair is defensible, because the acts come from disorientation and the wish to go home rather than anger, and she is easy to redirect in the room. Whichever you choose, write the acts, her denial and that she can be redirected."
      },
      "judgment": {
        "ans": {
          "0": ["交番《こうばん》 に 届《とど》けます よ。 子《こ》ども たち に も そう 教《おし》えて きました から。", "I'd take it to the police box. That's what I always taught the children."],
          "1": ["煙《けむり》？ あら、 どう しましょう…… 窓《まど》 を 開《あ》けて、 家《いえ》 に 帰《かえ》ります。", "Smoke? Oh dear, what shall I do... I'd open the window and go home."]
        },
        "need": ["Poor", "Impaired test judgment", "Impaired social judgment"],
        "wrong": {
          "Intact test judgment": "The wallet answer is an old rule she taught for years. Faced with a new situation (smoke on a train) she cannot work out a safe answer.",
          "Good": "She cannot plan a safe response to danger and goes out alone at night.",
          "Fair": "Both a new hypothetical situation and her real decisions (leaving at 2 a.m.) are unsafe."
        },
        "doc": "Poor: impaired test judgment (sensible, well-learned answer about the wallet, but no safe plan for smoke on a train); impaired social judgment (left home alone at 2 a.m., refuses help from her carer)",
        "why": "Old, well-learned answers can hide poor judgment in dementia, so ask both questions. Judgment here is about safety, which is why she needs others to help with decisions about her care. She cannot fully weigh the admission decision, so involve her as far as she can take part, decide with her family, and follow local law and your hospital's policy."
      }
    }
  }
]);
