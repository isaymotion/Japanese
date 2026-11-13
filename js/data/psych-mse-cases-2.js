/* Admission MSE practice cases, part 2. Hanashimashō (Japanese). STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Same shape as psych-mse-cases.js. Ids in this part: ayaka (same id as her case simulation and discharge case). */
window.PSYCH_MSE_CASES = (window.PSYCH_MSE_CASES || []).concat([
  {
    "id": "ayaka",
    "title": "Ayaka on admission",
    "level": "N3",
    "dx": "Substance use disorder, severe (over-the-counter cough and cold medicine)",
    "form": "",
    "setting": "Admitting section, evening. Ayaka Nakamura, 20, university student with a part-time job, lives with her mother and younger brother. Brought by her mother, Mrs. Nakamura, after taking far more over-the-counter cough and cold medicine than the label says.",
    "chart": [
      "Her mother found her very drowsy and hard to wake at home this evening. Medically assessed tonight and cleared for the psychiatric interview; she is now awake and able to talk.",
      "Mother: tonight Ayaka took far more over-the-counter cough and cold medicine (\"市販《しはん》 の 風邪薬《かぜぐすり》\") than the label says. She has been crying and sleeping poorly. Mother thinks the problem is weakness of will (\"意志《いし》 が 弱《よわ》い\").",
      "One earlier episode when a friend could not wake her and called 119. It began with a cold during exam stress; she went on taking it to stay awake and to calm down, and she wants to stop and cannot. Nightmares and startle after a frightening event she does not want to describe."
    ],
    "cc": {
      "ask": "collateral:1",
      "ans": [
        "先生《せんせい》、 この 子《こ》、 今日《きょう》 市販《しはん》 の 風邪薬《かぜぐすり》 を 箱《はこ》 に 書《か》いて ある 量《りょう》 より ずっと たくさん 飲《の》んで しまった ん です。 最近《さいきん》 は 夜《よる》 も 眠《ねむ》れない みたい で、 泣《な》いて ばかり いて……。",
        "Doctor, today she took far more over-the-counter cold medicine than it says on the box. Lately she doesn't seem to sleep at night, and she cries all the time...",
        "Mrs. Nakamura (mother)"
      ],
      "opts": [
        [
          "\"今日《きょう》 市販《しはん》 の 風邪薬《かぜぐすり》 を 箱《はこ》 に 書《か》いて ある 量《りょう》 より ずっと たくさん 飲《の》んで しまった ん です。 最近《さいきん》 は 夜《よる》 も 眠《ねむ》れない みたい で、 泣《な》いて ばかり いて……。\"",
          true,
          "The form records the chief complaint in the informant's own words, in Japanese, in quotation marks."
        ],
        [
          "Overdose of over-the-counter cough and cold medicine, insomnia, and tearfulness",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "She took far too much cold medicine today, and she can't sleep and keeps crying.",
          false,
          "A translation loses the informant's words. Quote the Japanese; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Young adult female, medium built, in a gray sweatshirt and jeans. Clothes clean; hair tied back loosely, a little untidy; no makeup. Her face is damp with sweat and her eyes are red from crying.",
        "ans": {
          "0": ["……中村《なかむら》 です。 よろしく お願《ねが》い します。", "...I'm Nakamura. Nice to meet you."],
          "1": ["はい…… すみません。", "Yes... sorry."]
        },
        "need": ["Adult female", "Medium built", "Fairly kempt"],
        "ok": ["Young adult"],
        "wrong": {
          "Unkempt": "Her clothes are clean. Only her hair is a little untidy, and she is sweating.",
          "Poor hygiene": "Sweating during withdrawal-like symptoms is not poor hygiene."
        },
        "doc": "Young adult female, medium built, in a gray sweatshirt and jeans, fairly kempt; sweating, eyes red from crying",
        "why": "Note the sweating and the red eyes here, then follow them up in the other domains. They fit her withdrawal-like symptoms and her distress, and they give you a baseline for discharge."
      },
      "psychomotor": {
        "obs": "Sits, but shifts often in the chair, jiggles one leg, rubs her arms, and holds her stomach now and then. No tremor is seen.",
        "ans": {
          "0": ["母《はは》 に、 最近《さいきん》 そわそわ して いる って 言《い》われます。 今《いま》 も、 じっと して いられなくて……。", "My mother says I've been fidgety lately. Even now I can't keep still..."]
        },
        "need": ["Restless"],
        "ok": ["Psychomotor agitation"],
        "wrong": {
          "No psychomotor agitation or retardation": "She shifts in her chair, jiggles her leg, and says she cannot keep still.",
          "Psychomotor retardation": "She is restless, not slowed down.",
          "Tremor": "No tremor is seen."
        },
        "doc": "Restless (shifts in her chair, jiggles one leg, rubs her arms, holds her stomach); no tremor",
        "why": "Restlessness with sweating and abdominal pain fits her withdrawal-like symptoms. Record it tonight so the night staff and the morning team can see whether it settles."
      },
      "attitude": {
        "obs": "Looks down at her hands and rarely meets your eyes. Wipes tears with a sleeve. Answers every question, briefly, and apologizes often. Looks at the floor when her mother speaks.",
        "ans": {
          "0": ["中村《なかむら》 で 大丈夫《だいじょうぶ》 です。", "Nakamura is fine."],
          "1": ["日本語《にほんご》 で お願《ねが》い します。", "Japanese, please."]
        },
        "need": ["Cooperative", "Poor eye contact"],
        "ok": ["Fair eye contact"],
        "wrong": {
          "Guarded": "She is ashamed and frightened, not wary of you. She answers everything, including the hard questions about her use.",
          "Uncooperative": "She answers every question, though briefly."
        },
        "doc": "Cooperative; poor eye contact, looks down at her hands, tearful and apologetic",
        "why": "Poor eye contact here comes with tears, apologies, and full answers: shame and fear, not guardedness. A non-judgmental tone tonight makes the rest of her care easier."
      },
      "mood": {
        "obs": "Tearful through much of the interview. Her voice shakes when she talks about the earlier episode. Does not smile.",
        "ans": {
          "0": ["……怖《こわ》かった です。 今《いま》 も、 ちょっと 怖《こわ》い です。", "...I was scared. I'm still a little scared now."],
          "1": ["ずっと 落《お》ち込《こ》んで いました。 やめたい のに、 やめられなくて……。", "I've been down the whole time. I want to stop, but I can't..."],
          "2": ["わかりません…… すごく 低《ひく》い です。", "I don't know... very low."]
        },
        "quote": "怖《こわ》かった です。 今《いま》 も、 ちょっと 怖《こわ》い です。 (I was scared. I'm still a little scared now.)",
        "need": ["Anxious mood", "Congruent affect"],
        "ok": ["Sad mood", "Restricted affect"],
        "wrong": {
          "Euthymic mood": "She says she was scared, still is, and has felt down for a long time.",
          "Flat affect": "She cries and her voice shakes. Her affect is far from flat.",
          "Labile affect": "Her tears fit what she is talking about. They do not switch suddenly to laughter or anger."
        },
        "ev": {
          "find": "Anxious mood",
          "opts": [
            ["\"怖《こわ》かった です。 今《いま》 も、 ちょっと 怖《こわ》い です。\"", true],
            ["\"日本語《にほんご》 で お願《ねが》い します。\"", false],
            ["\"はい…… すみません。\"", false]
          ],
          "why": "Mood is what the patient tells you. She names fear, then and now. Her low mood (\"落《お》ち込《こ》んで いました\") is there too, so sad mood is also acceptable."
        },
        "doc": "\"怖《こわ》かった です。 今《いま》 も、 ちょっと 怖《こわ》い です。\" (I was scared. I'm still a little scared now.) Anxious mood, low for weeks; tearful, congruent affect",
        "why": "Quote her words for the mood. Low mood during withdrawal-like symptoms may lift as they settle, so record it now and compare at discharge before you decide whether there is a separate depressive disorder."
      },
      "speech": {
        "obs": "Speaks softly, at a normal rate, mostly only when asked. Pauses and trails off when upset, but gives a clear account when asked what happened.",
        "ans": {
          "0": ["今日《きょう》 も、 また 飲《の》みすぎて しまって……。 市販《しはん》 の 咳止《せきど》め です。 受験《じゅけん》 の とき に 風邪《かぜ》 を ひいて 飲《の》み始《はじ》めて、 それ から 起《お》きて いる ため とか、 落《お》ち着《つ》く ため に……。 やめたい のに、 やめられない ん です。 前《まえ》 に も 一度《いちど》、 友達《ともだち》 が 起《お》こして も 起《お》きなくて、 ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》 して くれた こと が あります。", "Today I took too much again... Over-the-counter cough medicine. I caught a cold during entrance exams and started taking it, and after that I took it to stay awake, or to calm down... I want to stop, but I can't. Once before, my friend couldn't wake me and she called 119."]
        },
        "need": ["Non-spontaneous (answers only when asked)", "Normal rate", "Soft volume"],
        "ok": ["Productive"],
        "wrong": {
          "Poverty of speech": "When asked what happened she gives a full, clear account. Her short answers come from shame and distress.",
          "Pressured": "Normal rate, with pauses; she is easy to interrupt.",
          "Slow rate": "She pauses when upset, but her rate between pauses is normal."
        },
        "doc": "Non-spontaneous, normal rate, soft volume; trails off when upset but gives a clear account when asked",
        "why": "A frightened, ashamed patient often says little until she is asked. Give her time after each question; the pauses are part of her distress."
      },
      "process": {
        "obs": "Tells the story in order, from the cold during exams to tonight. Trails off when upset, then goes on with the same thought.",
        "ans": {
          "0": ["今日《きょう》 も、 また 飲《の》みすぎて しまって……。 市販《しはん》 の 咳止《せきど》め です。 受験《じゅけん》 の とき に 風邪《かぜ》 を ひいて 飲《の》み始《はじ》めて、 それ から 起《お》きて いる ため とか、 落《お》ち着《つ》く ため に……。 やめたい のに、 やめられない ん です。 前《まえ》 に も 一度《いちど》、 友達《ともだち》 が 起《お》こして も 起《お》きなくて、 ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》 して くれた こと が あります。", "Today I took too much again... Over-the-counter cough medicine. I caught a cold during entrance exams and started taking it, and after that I took it to stay awake, or to calm down... I want to stop, but I can't. Once before, my friend couldn't wake me and she called 119."],
          "1": ["飲《の》まない と、 だるくて、 汗《あせ》 が 出《で》て、 お腹《なか》 も 痛《いた》く なって……。 頭《あたま》 の 中《なか》 が 薬《くすり》 の こと で いっぱい に なる ん です。", "If I don't take it I feel heavy and achy, I sweat, and my stomach hurts... My head fills up with thoughts of the medicine."]
        },
        "need": ["Linear", "Goal-directed"],
        "wrong": {
          "Thought blocking": "She trails off when upset, then goes on with the same thought. That is distress, not a sudden break in thinking.",
          "Circumstantial": "She gets to the point without long detours."
        },
        "doc": "Linear and goal-directed; trails off when upset",
        "why": "Trailing off with tears is not a thought disorder. Ask what \"やめられない\" feels like, as here: the answer gives you her withdrawal-like symptoms and her urges in her own words."
      },
      "perception": {
        "obs": "Looks at you or at her hands. Does not look around the room or pause as if listening. Startles when a door slams in the corridor, then apologizes.",
        "ans": {
          "0": ["いいえ、 ありません。", "No, I don't."],
          "1": ["いいえ。", "No."],
          "2": ["いいえ。 ……でも、 怖《こわ》い 夢《ゆめ》 は 毎晩《まいばん》 の よう に 見《み》ます。 何《なん》 の 夢《ゆめ》 か は…… まだ 話《はな》したく ない です。", "No. ...But I have nightmares almost every night. What they're about... I don't want to talk about it yet."],
          "3": ["声《こえ》 は 聞《き》こえない ので……。", "I don't hear voices, so..."],
          "4": ["いいえ、 ない です。", "No, they don't."]
        },
        "key": [0, 2],
        "need": ["Denies perceptual disturbances", "Not responding to internal stimuli"],
        "wrong": {
          "Visual hallucinations": "Nightmares are dreams, not hallucinations. Record them separately, as possible trauma symptoms.",
          "Responding to internal stimuli": "She startles at a real door slam. That is a reaction to a real noise, not to an internal stimulus."
        },
        "doc": "Denies perceptual disturbances; not responding to internal stimuli. Nightly nightmares; startles at a door slam. Declines to say what the nightmares are about",
        "why": "Ask about perception even in a substance case: intoxication and withdrawal can change perception. When she says she does not want to talk about the nightmares yet, thank her and move on. Do not press for the content; note the nightmares and startle as possible trauma symptoms to assess later, at her pace."
      },
      "content": {
        "ans": {
          "0": ["いいえ、 狙《ねら》われて いる と は 思《おも》いません。 ……前《まえ》 に あった こと は、 まだ 話《はな》したく ない です。", "No, I don't think anyone is after me. ...What happened before, I don't want to talk about yet."],
          "1": ["いいえ。 ただ、 夜《よる》 一人《ひとり》 で 出《で》かける の は 怖《こわ》い です。", "No. But I'm scared to go out alone at night."],
          "2": ["いいえ。 お腹《なか》 が 痛《いた》くて、 あまり 食《た》べられて いない だけ です。", "No. My stomach hurts, so I just haven't been eating much."],
          "3": ["誰《だれ》 か に 狙《ねら》われて いる、 と いう こと です か。 それ は ない です。", "That someone is after me? No, that isn't so."],
          "4": ["夜《よる》 一人《ひとり》 で 出《で》かける の が 怖《こわ》い の は、 前《まえ》 の こと が ある から だ と 思《おも》います。 ……それ 以上《いじょう》 は、 今《いま》 は ちょっと。", "I think I'm scared to go out alone at night because of what happened before. ...More than that, not now."],
          "5": ["母《はは》 に 迷惑《めいわく》 ばかり かけて います。 今《いま》 も、 飲《の》みたくて 頭《あたま》 が いっぱい で……。 自分《じぶん》 が 嫌《いや》 に なります。", "I cause my mother nothing but trouble. Even now my head is full of wanting to take it... I hate myself for it."],
          "6": ["先生《せんせい》、 この 子《こ》 は 意志《いし》 が 弱《よわ》い ん です。 やめよう と 思《おも》えば やめられる はず なのに……。 私《わたし》 の 育《そだ》て方《かた》 が 悪《わる》かった ん でしょう か。", "Doctor, she is weak-willed. If she really meant to stop, she could... Did I raise her badly?", "Mrs. Nakamura (mother)"]
        },
        "key": [0, 5],
        "need": ["No delusions elicited", "Preoccupation with ___"],
        "ok": ["Guilt or worthlessness (not delusional)"],
        "wrong": {
          "Persecutory delusions": "She does not believe anyone is after her. She links her fear of going out alone at night to a past event herself.",
          "Nihilistic delusions": "She feels low and blames herself, but holds no fixed false belief."
        },
        "ev": {
          "find": "Preoccupation with ___",
          "opts": [
            ["\"今《いま》 も、 飲《の》みたくて 頭《あたま》 が いっぱい で……。\"", true],
            ["\"この 子《こ》 は 意志《いし》 が 弱《よわ》い ん です。\" (mother)", false],
            ["\"いいえ、 狙《ねら》われて いる と は 思《おも》いません。\"", false]
          ],
          "why": "\"頭《あたま》 が いっぱい\" (my head is full of it) is a strong urge to use that fills her thoughts. Write it as a preoccupation with using. Her mother's line is the family's explanation, not her thought content."
        },
        "doc": "No delusions elicited. Preoccupation with strong urges to use (\"飲《の》みたくて 頭《あたま》 が いっぱい\"); guilt toward her mother, not delusional. Fear of going out alone at night, which she links to a past event she declines to discuss. Mother attributes the problem to weakness of will (\"意志《いし》 が 弱《よわ》い\")",
        "why": "Record the urges as a preoccupation: they keep the disorder going and they are what treatment targets. When a question comes near the past event and she says she is not ready, accept it and move on; do not press. Her mother's view that it is weakness of will is the family's explanatory model. Note it, because it shapes family education."
      },
      "safety": {
        "ans": {
          "0": ["……つらい です けど、 生《い》きて いて も 仕方《しかた》ない と は 思《おも》いません。", "...It's hard, but I don't feel there's no point in living."],
          "1": ["いいえ。 前《まえ》 に 起《お》きられなかった とき、 本当《ほんとう》 に 怖《こわ》かった ので……。", "No. The time I couldn't wake up, I was really scared..."],
          "2": ["いいえ。 今日《きょう》 も 前《まえ》 の とき も、 死《し》のう と した ん じゃ ない です。 飲《の》みすぎて しまった だけ です。", "No. Today and the time before, I wasn't trying to die. I just took too much."],
          "3": ["ない です。", "No."],
          "4": ["ありません。 やめたい だけ です。", "No. I just want to stop."],
          "5": ["いいえ。 誰《だれ》 も 傷《きず》つけたく ない です。", "No. I don't want to hurt anyone."]
        },
        "key": [2, 4, 5],
        "need": ["Denies suicidal ideation", "Denies homicidal ideation"],
        "wrong": {
          "Passive death wish": "She says not waking up frightened her. She does not wish to be dead.",
          "Active suicidal ideation, no plan": "She says neither overdose was meant to end her life, and she denies suicidal thoughts.",
          "Homicidal ideation toward ___": "She denies any wish to hurt anyone."
        },
        "ev": {
          "find": "Denies suicidal ideation",
          "opts": [
            ["\"今日《きょう》 も 前《まえ》 の とき も、 死《し》のう と した ん じゃ ない です。 飲《の》みすぎて しまった だけ です。\"", true],
            ["\"ない です。\"", false],
            ["\"……つらい です けど\"", false]
          ],
          "why": "After an overdose you need her own words about intent, for tonight and for the earlier episode. A plain \"ない です\" to the plan question does not tell you that."
        },
        "doc": "Denies suicidal ideation, plan, or intent; states that tonight's overdose and the earlier one were unintentional (\"死《し》のう と した ん じゃ ない です。 飲《の》みすぎて しまった だけ です。\"); denies homicidal ideation. Risk of another unintentional overdose remains (strong urges, an earlier episode when a friend called 119)",
        "why": "An unintentional overdose is still asked about directly, every time: death wish, suicidal thoughts, plan, intent, and the earlier episode. Do not assume from the story that it was an accident, and do not assume it was an attempt. Write her words about intent. Even with no suicidal ideation she can take too much again, so the plan still covers safety at home."
      },
      "orientation": {
        "ans": {
          "0": ["土曜日《どようび》 です。", "It's Saturday."],
          "1": ["病院《びょういん》 です。 母《はは》 と 来《き》ました。", "The hospital. I came with my mother."],
          "2": ["精神科《せいしんか》 の 先生《せんせい》 です。", "You're the psychiatrist."]
        },
        "need": ["Oriented to 3 spheres"],
        "doc": "Oriented to 3 spheres",
        "why": "She is awake and answers correctly. After an overdose, recheck orientation if she becomes drowsy or confused overnight: disorientation would point to intoxication or a medical cause, and the medical team should see her again."
      },
      "insight": {
        "ans": {
          "0": ["病気《びょうき》…… なん でしょう か。 自分《じぶん》 で も、 どうして やめられない の か わからない ん です。", "An illness... is it? I don't know myself why I can't stop."],
          "1": ["飲《の》みすぎて しまった から です。 母《はは》 を すごく 心配《しんぱい》 させて しまいました。", "Because I took too much. I made my mother really worried."],
          "2": ["薬《くすり》 で こう なった のに、 また 薬《くすり》 です か……。 でも、 やめられる なら、 助《たす》けて ほしい です。", "Medicine got me into this, and now more medicine...? But if it helps me stop, I want help."]
        },
        "need": ["Fair", "Grade 4: aware, cause unknown in self"],
        "wrong": {
          "Grade 3: blames others/external factors": "Exam stress is how it began, but she does not blame it or anyone else. She says she does not know why she cannot stop.",
          "Good": "She knows she has a problem and wants help, but is not sure it is an illness and is wary of medicine.",
          "Poor": "She accepts that something is wrong in her and asks for help."
        },
        "ev": {
          "find": "Grade 4: aware, cause unknown in self",
          "opts": [
            ["\"自分《じぶん》 で も、 どうして やめられない の か わからない ん です。\"", true],
            ["\"この 子《こ》 は 意志《いし》 が 弱《よわ》い ん です。\" (mother)", false],
            ["\"飲《の》みすぎて しまった から です。\"", false]
          ],
          "why": "She knows the problem is in her but does not know what it is. That is grade 4. Her mother's view is not her insight, and knowing why she was brought in is not the same as understanding the disorder."
        },
        "doc": "Fair (grade 4): knows she cannot stop and wants help (\"やめられる なら、 助《たす》けて ほしい です\"); does not know why and is unsure it is an illness; wary of medicine. Mother sees it as weakness of will",
        "why": "Her wariness of medicine makes sense when a medicine is what harmed her. Explain that treatment means monitoring and support, not more of the same. Insight often grows as withdrawal settles; compare at discharge."
      },
      "impulse": {
        "obs": "Stays seated through the interview. Rubs her arms and holds her stomach. No outbursts.",
        "ans": {
          "0": ["いいえ。 怒《おこ》る より、 泣《な》いて しまう 方《ほう》 です。", "No. I'm more the type to cry than get angry."],
          "1": ["いいえ、 ありません。", "No, never."]
        },
        "need": ["Fair impulse control"],
        "ok": ["Poor impulse control"],
        "wrong": {
          "Good impulse control": "She goes on using despite harm, including an earlier episode when a friend called 119. She cannot resist when the urge comes."
        },
        "doc": "Fair impulse control (no history of violence; controlled during the interview; unable to resist urges to use despite harm)",
        "why": "Impulse control is not only about anger. Using again when the urge comes, despite harm and after an overdose, is a real loss of control, and some psychiatrists would chart poor impulse control for it. Fair is defensible here because the loss of control is confined to the substance (it is part of the disorder itself) and there is no aggression, recklessness or acting out in the interview. Whichever you choose, write both sides: no aggression, and the use she cannot resist."
      },
      "judgment": {
        "ans": {
          "0": ["交番《こうばん》 に 届《とど》けます。", "I'd take it to the police box."],
          "1": ["非常《ひじょう》 ボタン を 押《お》して、 駅員《えきいん》さん に 知《し》らせます。", "I'd press the emergency button and tell the station staff."]
        },
        "need": ["Fair", "Intact test judgment", "Impaired social judgment"],
        "wrong": {
          "Good": "Her hypothetical answers are sensible, but she went on using after an earlier episode when a friend called 119.",
          "Poor": "She came in tonight with her mother, accepts help, and wants to stop.",
          "Intact social judgment": "She kept using despite harm, even after the earlier episode.",
          "Impaired test judgment": "Taking a wallet to the police box and pressing the emergency button are sensible answers."
        },
        "doc": "Fair: intact test judgment; impaired social judgment (kept using despite harm, including an earlier episode when a friend called 119), but came in with her mother and accepts help",
        "why": "Weigh both sides of her real decisions. She kept using despite harm, which lowers her judgment, but she came in and accepts help, which keeps it from poor. Give the reasons, not only the label."
      }
    }
  }
]);
