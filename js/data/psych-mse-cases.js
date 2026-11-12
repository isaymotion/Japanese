/* Admission MSE practice cases: the same fictional patients as the discharge cases, on the evening of admission.
   Hanashimashō (Japanese). STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Field names stay `tl`, `f`, `c` for engine compatibility: `tl` = the Japanese text; registers are
   f = polite です/ます, c = plain form. Patient answers are Japanese first, English second.
   Shape: window.PSYCH_MSE_CASES = [ { id, title, level, dx, form, setting, chart: [lines],
       cc: { ask: 'sectionId:index', ans: [japanese, english, who], opts: [[text, correct, why]] },
       domains: { <PSYCH_ADMIT_MSE domain id>: { obs, ans: { askIndex: [japanese, english, who?] }, key, need, ok, wrong, doc, why, quote?, ev? } } } ]
   Example ans entry:  [ 'なんで 俺《おれ》 を ここ に 連《つ》れて きた ん だ。', 'Why did they bring me here?', 'Patient' ]
   Cases: shota (first-episode psychosis), ren (mania with methamphetamine use). Medication examples elsewhere are teaching examples only. */
window.PSYCH_MSE_CASES = [
  {
    "id": "shota",
    "title": "Shota on admission",
    "level": "N4",
    "dx": "Schizophrenia (first episode, to be confirmed)",
    "form": "",
    "setting": "Admitting section, evening. Shota, 19, warehouse worker. Brought by his mother, Mrs. Takahashi, who speaks only Japanese, after he barricaded his bedroom door.",
    "chart": [
      "No earlier psychiatric contact. For about 3 months he has stopped going to work and rarely leaves his room.",
      "Mother: she hears him talking alone at night. He says a coworker put a curse (\"呪《のろ》い\") on him. She first took him to a spiritual healer for an お祓《はら》い (purification rite). Tonight he pushed a dresser against his door and would not open it.",
      "No known drug use per mother; urine drug screen pending. No known medical illness."
    ],
    "cc": {
      "ask": "collateral:1",
      "ans": [
        "もう ほとんど 部屋《へや》 から 出《で》て こない ん です、 先生《せんせい》。 隣《となり》 の 人《ひと》 たち が 自分《じぶん》 の こと を 話《はな》して いる の が 聞《き》こえる、 職場《しょくば》 の 同僚《どうりょう》 に 呪《のろ》い を かけられた、 って 言《い》う ん です。",
        "He hardly leaves his room anymore, doctor. He says he hears the neighbors talking about him and that a coworker put a curse on him.",
        "Mrs. Takahashi (mother)"
      ],
      "opts": [
        [
          "\"もう ほとんど 部屋《へや》 から 出《で》て こない ん です。 隣《となり》 の 人《ひと》 たち が 自分《じぶん》 の こと を 話《はな》して いる の が 聞《き》こえる、 職場《しょくば》 の 同僚《どうりょう》 に 呪《のろ》い を かけられた、 って 言《い》う ん です。\"",
          true,
          "The form records the chief complaint in the informant's own words, in Japanese, in quotation marks."
        ],
        [
          "Social withdrawal, auditory hallucinations, and persecutory delusions",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "He stays in his room and thinks a coworker cursed him.",
          false,
          "A translation loses the informant's words. Quote the Japanese; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Young adult male, thin built, in a gray hooded sweatshirt with the hood up and creased, unwashed clothes. Hair uncombed, unshaven, noticeable body odor.",
        "ans": {
          "0": ["（黙《だま》って うなずく）", "(just nods)"],
          "1": ["立《た》ってる 方《ほう》 が いい。 ドア の 近《ちか》く で。", "I'd rather stay standing, next to the door."]
        },
        "need": ["Adult male", "Thin built", "Unkempt"],
        "ok": ["Young adult", "Poor hygiene"],
        "wrong": {
          "Well kempt": "Creased, unwashed clothes, uncombed hair, and body odor are unkempt."
        },
        "doc": "Young adult male, thin built, in a gray hooded sweatshirt with the hood up, unshaven, unkempt, with body odor",
        "why": "Self-care often drops as psychosis develops. Recording it now gives you a baseline to compare at discharge. Note the hood: it fits his guardedness."
      },
      "psychomotor": {
        "obs": "Stands near the door at first and sits on the edge of the chair only after his mother asks. Shifts his weight, looks toward the wall twice. No tremor.",
        "ans": {
          "0": ["遅《おそ》く なんか ない。 ただ 家《いえ》 に 帰《かえ》りたい だけ。", "I'm not slow. I just want to go home."]
        },
        "need": ["Restless"],
        "ok": ["Psychomotor agitation"],
        "wrong": {
          "No psychomotor agitation or retardation": "He shifts his weight, keeps checking the door, and sits only on the edge of the chair.",
          "Psychomotor retardation": "He is restless, not slowed down."
        },
        "doc": "Restless (shifts his weight, sits on the edge of the chair); no tremor or abnormal movements",
        "why": "Restlessness in a young man with new psychosis is part of the risk picture. Keep it in mind with the barricade history."
      },
      "attitude": {
        "obs": "Keeps his hood up and watches the door and your notes. He does not lower his eyes out of politeness; he looks at you only to check what you write. His mother says he is usually quiet and polite.",
        "ans": {
          "0": ["何《なん》 で そんな こと 聞《き》く の。 ……翔太《しょうた》。", "Why do you want to know? ...Shota."],
          "1": ["日本語《にほんご》 で いい。 でも、 早《はや》く して。", "Japanese is fine. But quickly, okay?"]
        },
        "need": ["Guarded", "Suspicious"],
        "ok": ["Cooperative", "Fair eye contact", "Poor eye contact"],
        "wrong": {
          "Hostile": "He is wary but has not threatened you. Hostile is stronger than what you see.",
          "Uncooperative": "He is curt, but he answers your questions."
        },
        "ev": {
          "find": "Guarded",
          "opts": [
            ["\"何《なん》 で そんな こと 聞《き》く の。 ……翔太《しょうた》。\"", true],
            ["\"（黙《だま》って うなずく）\"", false],
            ["\"遅《おそ》く なんか ない。\"", false]
          ],
          "why": "He gives the least he can and asks why you want it. That is guardedness. Eye contact alone would not tell you, because lowered eyes can be ordinary politeness toward a doctor; here the watching of the door and your notes does."
        },
        "doc": "Guarded and suspicious but cooperative; watches the door and the examiner's notes, fair eye contact",
        "why": "Look at the whole picture before you label attitude. Lowered eyes may be politeness toward a doctor, but a patient who watches your pen and questions your motives is guarded."
      },
      "mood": {
        "obs": "Little change in expression. Brief tension in the jaw when the neighbors are mentioned.",
        "ans": {
          "0": ["大丈夫《だいじょうぶ》。 疲《つか》れてる だけ。", "Fine. Just tired."],
          "1": ["普通《ふつう》。 ……音《おと》 が うるさくて、 よく 眠《ねむ》れて ない。", "Normal... I haven't slept well because of the noise."],
          "2": ["わかんない。 五《ご》 くらい。", "I don't know. A five."]
        },
        "quote": "普通《ふつう》。 ……音《おと》 が うるさくて、 よく 眠《ねむ》れて ない。 (Normal... I haven't slept well because of the noise.)",
        "need": ["Anxious mood", "Restricted affect"],
        "ok": ["Congruent affect"],
        "wrong": {
          "Euphoric mood": "Nothing in his words or expression suggests elation.",
          "Flat affect": "There is a little change, such as the jaw tightening when the neighbors come up. That is restricted, not flat."
        },
        "doc": "\"普通《ふつう》。 ……音《おと》 が うるさくて、 よく 眠《ねむ》れて ない。\" (Normal... I haven't slept well because of the noise.) Anxious mood; restricted affect",
        "why": "He says \"大丈夫《だいじょうぶ》\" (fine) but his affect and story say otherwise. Quote his words for the mood and record what you see separately for the affect."
      },
      "speech": {
        "obs": "Speaks only when asked, in short sentences, at normal rate and soft volume. Says more when the neighbors come up.",
        "ans": {
          "0": ["……倉庫《そうこ》 の 同僚《どうりょう》 に 呪《のろ》い を かけられた。 それ から、 隣《となり》 の やつら が 壁越《かべご》し に 俺《おれ》 の 話《はなし》 を してる。 だから ドア の 前《まえ》 に タンス を 置《お》いた。", "Well... my coworker from the warehouse put a curse on me. Since then the neighbors talk about me through the wall. That's why I put the dresser against the door."]
        },
        "need": ["Non-spontaneous (answers only when asked)", "Normal rate", "Soft volume"],
        "ok": ["Adequate volume"],
        "wrong": {
          "Pressured": "Normal rate, and he is easy to interrupt.",
          "Poverty of speech": "When the neighbors come up he gives clear detail. He chooses not to talk; that is guardedness."
        },
        "doc": "Non-spontaneous, normal rate, soft volume; gives more detail when discussing the neighbors",
        "why": "Few words from a guarded patient are not poverty of speech. The difference shows when a topic he cares about comes up and he says more."
      },
      "process": {
        "ans": {
          "0": ["……倉庫《そうこ》 の 同僚《どうりょう》 に 呪《のろ》い を かけられた。 それ から、 隣《となり》 の やつら が 壁越《かべご》し に 俺《おれ》 の 話《はなし》 を してる。 だから ドア の 前《まえ》 に タンス を 置《お》いた。", "Well... my coworker from the warehouse put a curse on me. Since then the neighbors talk about me through the wall. That's why I put the dresser against the door."],
          "1": ["俺《おれ》 を 追《お》い出《だ》したい ん だ。 消《き》えて ほしい ん だ よ。 俺《おれ》 が 倉庫《そうこ》 に 入《はい》った とき から、 ねたんでた から。", "That they want me out. They want me to disappear, because when I got to the warehouse they were envious of me."]
        },
        "need": ["Linear", "Goal-directed"],
        "wrong": {
          "Loose associations": "Each sentence follows from the last. The content is delusional, but the process is linear.",
          "Tangential": "He answers the question that was asked."
        },
        "doc": "Linear and goal-directed",
        "why": "Do not let delusional content pull you into calling the process disorganized. Process is how ideas connect; content is what they are about."
      },
      "perception": {
        "obs": "Twice turns his head toward the wall and pauses mid-sentence.",
        "ans": {
          "0": ["ある。 隣《となり》 の 人《ひと》 たち、 壁《かべ》 の 向《む》こう から。 毎晩《まいばん》 俺《おれ》 の 話《はなし》 を してる。", "Yes. The neighbors, through the wall. They talk about me every night."],
          "1": ["いや、 ささやき じゃ ない。 はっきり 聞《き》こえる。", "No, they don't whisper. It's very clear."],
          "2": ["ない。 影《かげ》 は 見《み》えない。", "No. No shadows."],
          "3": ["俺《おれ》 は 邪魔《じゃま》 だ って。 消《き》えろ って。", "They say I'm a burden. That I should disappear."],
          "4": ["ある。 消《き》えろ、 出《で》て いけ、 もう 邪魔《じゃま》 する な って。", "Yes. They tell me to disappear, to go away, to stop being a burden."]
        },
        "key": [0, 3, 4],
        "need": ["Command auditory hallucinations", "Responding to internal stimuli"],
        "ok": ["Auditory hallucinations"],
        "wrong": {
          "Denies perceptual disturbances": "He describes voices through the wall every night.",
          "Visual hallucinations": "He denies seeing shadows or anything else.",
          "Not responding to internal stimuli": "He turns toward the wall and pauses mid-sentence twice."
        },
        "ev": {
          "find": "Command auditory hallucinations",
          "opts": [
            ["\"消《き》えろ、 出《で》て いけ、 もう 邪魔《じゃま》 する な って。\"", true],
            ["\"毎晩《まいばん》 俺《おれ》 の 話《はなし》 を してる。\"", false],
            ["\"いや、 ささやき じゃ ない。 はっきり 聞《き》こえる。\"", false]
          ],
          "why": "A command voice tells him what to do. \"消《き》えろ\" (disappear) is a command. \"俺《おれ》 の 話《はなし》 を してる\" (they talk about me) is a voice talking about him, which is a third-person hallucination but not a command."
        },
        "doc": "Command auditory hallucinations: voices through the wall, nightly, talking about him and telling him to \"消《き》えろ\"; responding to internal stimuli (turns toward the wall and pauses)",
        "why": "Always ask what the voices say and whether they give orders. \"消《き》えろ\" could mean leave or die, so you must ask about suicide directly next."
      },
      "content": {
        "ans": {
          "0": ["いる。 倉庫《そうこ》 の 同僚《どうりょう》。 俺《おれ》 を 傷《きず》つけたい ん だ。", "Yes. My coworker from the warehouse. He wants to hurt me."],
          "1": ["ある。 隣《となり》 に 見張《みは》られてる。 俺《おれ》 が いつ 出《で》て、 いつ 帰《かえ》る か、 全部《ぜんぶ》 知《し》ってる。", "Yes. The neighbors watch me. They know when I go out and when I come in."],
          "2": ["家《いえ》 の ご飯《はん》 は…… わかんない。 自分《じぶん》 で 買《か》った もの を 食《た》べる 方《ほう》 が いい。", "The food at home, I don't know. I'd rather eat what I buy myself."],
          "3": ["絶対《ぜったい》。 呪《のろ》い を かけられて から、 全部《ぜんぶ》 変《か》わった。", "Completely sure. Since he put the curse on me everything changed."],
          "4": ["ない。 先生《せんせい》 に は わからない よ。", "There isn't one. You don't understand it."],
          "5": ["ない。 俺《おれ》 は 何《なに》 も して ない。", "No. I didn't do anything."],
          "6": ["先生《せんせい》、 うち で も、 本当《ほんとう》 に 誰《だれ》 か に 呪《のろ》われた ん じゃ ない か と 思《おも》って いた ん です。 霊能者《れいのうしゃ》 の 方《かた》 に 見《み》て いただいたら、 やっぱり 呪《のろ》い だ と 言《い》われました。 でも、 もう わかりません。 どんどん 悪《わる》く なって いる ん です。", "Doctor, we did believe someone had cursed him. I took him to a spiritual healer and she said it was a curse. But I don't know anymore, he's getting worse.", "Mrs. Takahashi (mother)"]
        },
        "key": [3, 4],
        "need": ["Persecutory delusions"],
        "ok": ["Delusions of reference"],
        "wrong": {
          "No delusions elicited": "He is certain the coworker and the neighbors mean him harm and accepts no other explanation.",
          "Guilt or worthlessness (not delusional)": "He blames others, not himself."
        },
        "ev": {
          "find": "Persecutory delusions",
          "opts": [
            ["\"絶対《ぜったい》。\" and \"ない。 先生《せんせい》 に は わからない よ。\"", true],
            ["\"本当《ほんとう》 に 誰《だれ》 か に 呪《のろ》われた ん じゃ ない か と 思《おも》って いた ん です。\" (mother)", false],
            ["\"いや、 ささやき じゃ ない。 はっきり 聞《き》こえる。\"", false]
          ],
          "why": "Fixed certainty and no room for another explanation make it a delusion. His mother's belief in a curse is a family's cultural explanation, not his delusion. His own belief goes further: neighbors watching and a coworker who wants to hurt him."
        },
        "doc": "Persecutory delusions: a coworker has put a curse (\"呪《のろ》い\") on him and wants to harm him, and neighbors watch and talk about him; held with full conviction, no alternative explanation accepted. Mother holds a cultural belief in curses; his beliefs extend beyond it and impair his functioning",
        "why": "The two questions that make it a delusion are \"how sure are you?\" and \"could there be another explanation?\". Do not call a family's belief in curses a delusion; ask whether the patient's belief goes beyond the family's and affects his life."
      },
      "safety": {
        "ans": {
          "0": ["ない。 ほっといて ほしい だけ。", "No. What I want is for them to leave me in peace."],
          "1": ["ない。", "No."],
          "2": ["ない。 声《こえ》 が 黙《だま》って くれれば いい。", "No. I just want the voices to be quiet."],
          "3": ["ない。 何《なに》 も。", "No, none."],
          "4": ["ない。", "No."],
          "5": ["ない。 誰《だれ》 も 傷《きず》つけたく ない。 ほっといて ほしい だけ。", "No. I don't want to hurt anyone. I just want them to leave me alone."]
        },
        "key": [2, 5],
        "need": ["Denies suicidal ideation", "Denies homicidal ideation"],
        "wrong": {
          "Passive death wish": "He denies wishing to be dead. The voices say \"消《き》えろ\", but he does not want to die.",
          "Homicidal ideation toward ___": "He believes the coworker means him harm but denies any wish or plan to harm anyone."
        },
        "doc": "Denies suicidal ideation, plan, or intent; denies homicidal ideation. Command voices to \"消《き》えろ\" noted; recheck each shift",
        "why": "Ask about suicide directly when voices tell him to disappear, and about harming others when he feels threatened. A denial tonight does not close the question; ask again as he settles."
      },
      "orientation": {
        "ans": {
          "0": ["火曜日《かようび》…… だ と 思《おも》う。", "It's Tuesday. I think?"],
          "1": ["病院《びょういん》。 母《かあ》さん に 連《つ》れて こられた。", "At the hospital. My mom brought me."],
          "2": ["医者《いしゃ》。 精神科《せいしんか》 の 先生《せんせい》 でしょ。", "You're a doctor. A psychiatrist, right?"]
        },
        "need": ["Oriented to 3 spheres"],
        "doc": "Oriented to 3 spheres",
        "why": "Psychosis with clear orientation is the usual pattern. Disorientation would make you look for delirium or a medical cause."
      },
      "insight": {
        "ans": {
          "0": ["病気《びょうき》 じゃ ない。 呪《のろ》い を かけられた だけ。", "Sick, no. What I have is a curse someone put on me."],
          "1": ["母《かあ》さん が びびった から。 俺《おれ》 の 頭《あたま》 が おかしい と 思《おも》ってる。", "Because my mom got scared. She thinks something is wrong with my head."],
          "2": ["思《おも》わない。 薬《くすり》 で 呪《のろ》い は 解《と》けない。", "I don't think so. Pills don't lift a curse."]
        },
        "need": ["Poor", "Grade 3: blames others/external factors"],
        "ok": ["Grade 2: slight awareness"],
        "wrong": {
          "Grade 1: complete denial": "He accepts that something is wrong with him, though he blames a curse and denies a mental illness.",
          "Fair": "He denies a mental illness and doubts that medicine can help."
        },
        "ev": {
          "find": "Grade 3: blames others/external factors",
          "opts": [
            ["\"病気《びょうき》 じゃ ない。 呪《のろ》い を かけられた だけ。\"", true],
            ["\"母《かあ》さん が びびった から。\"", false],
            ["\"病院《びょういん》。 母《かあ》さん に 連《つ》れて こられた。\"", false]
          ],
          "why": "He knows something is wrong but puts the cause outside himself, in a coworker's curse. That is grade 3. A cultural explanation lowers the grade only when it leaves no room to consider treatment, as here."
        },
        "doc": "Poor (grade 3): knows something is wrong but attributes it to a coworker's curse (\"呪《のろ》い\") and denies mental illness; doubts that medicine can help",
        "why": "Ask what he thinks is causing it and whether medicine could help. Respect the cultural explanation and look for a bridge, such as treating the sleep and the noise, as a way into treatment."
      },
      "impulse": {
        "obs": "Sits still. Clenches his hands once when the neighbors are mentioned.",
        "ans": {
          "0": ["怒《おこ》ったり しない。 部屋《へや》 に こもる だけ。", "I don't get angry. I shut myself in and that's it."],
          "1": ["ない。 誰《だれ》 とも けんか しない。", "Never. I don't fight with anyone."]
        },
        "need": ["Fair impulse control"],
        "wrong": {
          "Good impulse control": "He barricaded his door and clenched his hands when the neighbors came up. It is not fully good.",
          "Poor impulse control": "There is no history of hitting or damaging things. The barricade was driven by fear, not by an impulsive outburst."
        },
        "doc": "Fair impulse control (no history of violence; barricaded his door out of fear; clenched hands once during the interview)",
        "why": "Impulse control comes from the history and from what you see. Separate fear-driven withdrawal from aggression."
      },
      "judgment": {
        "ans": {
          "0": ["交番《こうばん》 に 届《とど》ける。", "I'd take it to the police box."],
          "1": ["すぐ 逃《に》げる。 みんな と 一緒《いっしょ》 に。", "I'd get out quickly with everyone else."]
        },
        "need": ["Intact test judgment", "Impaired social judgment"],
        "ok": ["Fair", "Poor"],
        "wrong": {
          "Intact social judgment": "He stopped going to work, rarely leaves his room, and barricaded his door.",
          "Good": "His answers to the hypothetical questions are fine, but his real decisions are not."
        },
        "doc": "Fair: intact test judgment; impaired social judgment (stopped going to work, barricaded his door)",
        "why": "Test judgment can be intact while real-life judgment is not. Many charts write a single word; give the reason too."
      }
    }
  },
  {
    "id": "ren",
    "title": "Ren on admission",
    "level": "N3",
    "dx": "Bipolar I disorder, current episode manic, with methamphetamine use",
    "form": "",
    "setting": "Admitting section, evening. Ren, 24, DJ and part-time ride-hailing driver. Brought by his girlfriend, Misaki, after five nights without sleep.",
    "chart": [
      "No earlier psychiatric admissions. Misaki says an uncle was once treated for \"bipolar\" (not confirmed).",
      "Misaki: five nights without sleep, spent 400,000 yen on DJ equipment, says \"神様《かみさま》 に 選《えら》ばれた\" (God chose me), talks nonstop. Yesterday he drove at 160 km/h on the expressway.",
      "Urine drug screen positive for methamphetamine. Misaki says he used \"シャブ\" (street word for methamphetamine) twice this week. No alcohol per Misaki. No known medical illness."
    ],
    "cc": {
      "ask": "collateral:1",
      "ans": [
        "先生《せんせい》、 五日《いつか》 も 寝《ね》て いない し、 ずっと しゃべりっぱなし なん です。 機材《きざい》 に 四十万円《よんじゅうまんえん》 も 使《つか》って、 神様《かみさま》 に 選《えら》ばれた って 言《い》う ん です。",
        "Doctor, he hasn't slept in five nights and he won't stop talking. He spent 400,000 yen on equipment and says God chose him.",
        "Misaki (girlfriend)"
      ],
      "opts": [
        [
          "\"五日《いつか》 も 寝《ね》て いない し、 ずっと しゃべりっぱなし なん です。 機材《きざい》 に 四十万円《よんじゅうまんえん》 も 使《つか》って、 神様《かみさま》 に 選《えら》ばれた って 言《い》う ん です。\"",
          true,
          "The form records the chief complaint in the informant's own words, in Japanese, in quotation marks."
        ],
        [
          "Decreased need for sleep, pressured speech, spending, and grandiosity",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "He hasn't slept for five nights, talks nonstop, and thinks he is chosen by God.",
          false,
          "A translation loses the informant's words. Quote the Japanese; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Young adult male, medium built, in a bright yellow satin shirt, gold chains, and sunglasses worn indoors. Hair freshly styled. Clean, strong cologne.",
        "ans": {
          "0": ["こんばんは、 先生《せんせい》！ いや〜、 会《あ》えて うれしい！ 蓮《れん》 です、 この 街《まち》 で いちばん 有名《ゆうめい》 な DJ！", "Good evening, doctor! What a pleasure! Ren, the most famous DJ in the city."],
          "1": ["あ、 どうも、 優《やさ》しい ね！ でも 歩《ある》いてる 方《ほう》 が いい ん だ よ。 座《すわ》る と アイデア が 冷《さ》めちゃう から。", "Oh, thanks, that's kind! But I'd rather walk, because if I sit my ideas cool down."]
        },
        "need": ["Adult male", "Medium built", "Well kempt"],
        "ok": ["Young adult", "Fairly kempt"],
        "wrong": {
          "Unkempt": "His clothes are clean and carefully chosen. The finding is the flamboyance, not poor hygiene."
        },
        "doc": "Young adult male, medium built, well groomed but flamboyantly dressed: bright yellow satin shirt, gold chains, sunglasses worn indoors",
        "why": "Describe the clothing as you see it. Bright, showy dress and indoor sunglasses are a common sign of mania and say more than \"well kempt\" alone."
      },
      "psychomotor": {
        "obs": "Paces, sits for a few seconds, drums on the table, taps his foot. Gestures widely.",
        "ans": {
          "0": ["遅《おそ》い？ 俺《おれ》 が？ 全然《ぜんぜん》！ エネルギー ありすぎて、 どう したら いい か わかんない くらい だ よ。", "Me, slow? Not at all! I have so much energy I don't know what to do with it."]
        },
        "need": ["Psychomotor agitation"],
        "ok": ["Restless"],
        "wrong": {
          "No psychomotor agitation or retardation": "He cannot stay seated, paces, and drums on the table.",
          "Psychomotor retardation": "He is speeded up, not slowed."
        },
        "doc": "Psychomotor agitation (paces, cannot stay seated, drums on the table, wide gestures)",
        "why": "Purposeless, excessive movement is psychomotor agitation. Add it to the safety picture: he may need a low-stimulation room."
      },
      "attitude": {
        "obs": "Takes off the sunglasses, shakes your hand and holds it, steps close, jokes, touches your pen. Intense eye contact.",
        "ans": {
          "0": ["蓮《れん》 でも DJ レン でも、 好《す》き に 呼《よ》んで よ、 先生《せんせい》。 どっち が いい？", "Ren, or DJ Ren, whatever you like, doctor. You tell me."],
          "1": ["日本語《にほんご》 でも 英語《えいご》 でも、 何《なん》 でも いい よ！ 俺《おれ》、 何《なん》 でも しゃべれる から。", "Japanese, English, whatever you want! I speak everything."]
        },
        "need": ["Overfamiliar", "Cooperative"],
        "ok": ["Good eye contact"],
        "wrong": {
          "Guarded": "He tells you everything and invites you in. He is open, not guarded.",
          "Hostile": "He is friendly and joking, not hostile."
        },
        "ev": {
          "find": "Overfamiliar",
          "opts": [
            ["\"蓮《れん》 でも DJ レン でも、 好《す》き に 呼《よ》んで よ、 先生《せんせい》。\"", true],
            ["\"遅《おそ》い？ 俺《おれ》 が？ 全然《ぜんぜん》！\"", false],
            ["\"日本語《にほんご》 でも 英語《えいご》 でも、 何《なん》 でも いい よ！\"", false]
          ],
          "why": "He drops to plain casual speech (タメ口《ぐち》) with a doctor he has just met, gives a nickname, and holds your hand and touches your pen. That lost sense of professional distance is overfamiliarity."
        },
        "doc": "Overfamiliar but cooperative; invades personal space, touches the examiner's pen, good eye contact",
        "why": "Overfamiliar is a finding about boundaries, not about friendliness. Note it, and stay polite and firm about distance."
      },
      "mood": {
        "obs": "Broad smile and laughing, then snaps at an interruption: \"話《はなし》 の 途中《とちゅう》 だって！\". The irritability passes in seconds.",
        "ans": {
          "0": ["最高《さいこう》！ 人生《じんせい》 で こんなに 気分《きぶん》 いい の、 初《はじ》めて！", "Incredible! I've never felt better in my life!"],
          "1": ["ここ 何週間《なんしゅうかん》 か は、 もう 別次元《べつじげん》！ でも、 ダメ って 言《い》われる と、 マジ で ムカつく。", "The last few weeks, out of this world! But if you tell me no, it makes me furious."],
          "2": ["一《いち》 から 十《じゅう》？ 十五《じゅうご》！ いや、 二十《にじゅう》！", "From one to ten? Fifteen! Twenty!"]
        },
        "quote": "最高《さいこう》！ 人生《じんせい》 で こんなに 気分《きぶん》 いい の、 初《はじ》めて！ (Incredible! I've never felt better in my life!)",
        "need": ["Euphoric mood", "Irritable mood"],
        "ok": ["Labile affect", "Congruent affect"],
        "wrong": {
          "Sad mood": "He reports feeling wonderful and looks it.",
          "Restricted affect": "His affect is wide and intense."
        },
        "ev": {
          "find": "Irritable mood",
          "opts": [
            ["\"でも、 ダメ って 言《い》われる と、 マジ で ムカつく。\"", true],
            ["\"最高《さいこう》！ 人生《じんせい》 で こんなに 気分《きぶん》 いい の、 初《はじ》めて！\"", false],
            ["\"一《いち》 から 十《じゅう》？ 十五《じゅうご》！ いや、 二十《にじゅう》！\"", false]
          ],
          "why": "The elation is obvious, but his own words show the irritable side: anger when someone says no. Mania often mixes both, and irritability tells you how he may react to limits on the unit."
        },
        "doc": "\"最高《さいこう》！ 人生《じんせい》 で こんなに 気分《きぶん》 いい の、 初《はじ》めて！\" (Incredible! I've never felt better in my life!) Euphoric and irritable mood; labile, congruent affect",
        "why": "Quote the mood in his words and note both poles. Someone who rates his mood at twenty out of ten is giving you data, not a number."
      },
      "speech": {
        "obs": "Talks nonstop, fast and loud. Hard to interrupt. A one-line question gets minutes of answer.",
        "ans": {
          "0": ["聞《き》いて よ、 先生《せんせい》！ 木曜《もくよう》 だった か な、 金曜《きんよう》 か な、 もう わかんない、 日《ひ》 が 全部《ぜんぶ》 くっついてる！ クラブ で 回《まわ》してたら、 いきなり 神様《かみさま》 を 感《かん》じた ん だ よ、 こう、 ダイレクト に。 で、 思《おも》った わけ。 蓮《れん》、 機材《きざい》 買《か》え って。 四十万《よんじゅうまん》、 一円《いちえん》 も 無駄《むだ》 じゃ ない！ 叔父《おじ》さん が 大阪《おおさか》 で 同《おな》じ スピーカー 持《も》ってて さ、 大阪《おおさか》、 最高《さいこう》 だ よね、 行《い》った こと ある？ まあ とにかく、 美咲《みさき》 は 怒《おこ》った けど、 誰《だれ》 も わかって ない ん だ よ。 で、 何《なん》 の 話《はなし》 だっけ？", "Look, doctor, it was Thursday, or Friday, I don't know, the days run together! I was mixing at the club and suddenly I felt God, like that, direct, and I said: Ren, buy the equipment. 400,000 yen and worth every yen! My uncle had a speaker just like it in Osaka, what a place! Have you been? Anyway, the thing is Misaki got mad, but nobody understands, what were you saying?"]
        },
        "need": ["Spontaneous", "Productive", "Rapid rate", "Pressured", "Loud volume"],
        "wrong": {
          "Slow rate": "He speaks very fast.",
          "Poverty of speech": "He produces far more speech than the question needs."
        },
        "doc": "Spontaneous, productive, rapid and pressured, loud; hard to interrupt",
        "why": "Pressured speech is fast, loud, and driven by a need to keep talking. If you cannot get a word in, that is your finding. Switching between languages would not count."
      },
      "process": {
        "ans": {
          "0": ["聞《き》いて よ、 先生《せんせい》！ 木曜《もくよう》 だった か な、 金曜《きんよう》 か な、 もう わかんない、 日《ひ》 が 全部《ぜんぶ》 くっついてる！ クラブ で 回《まわ》してたら、 いきなり 神様《かみさま》 を 感《かん》じた ん だ よ、 こう、 ダイレクト に。 で、 思《おも》った わけ。 蓮《れん》、 機材《きざい》 買《か》え って。 四十万《よんじゅうまん》、 一円《いちえん》 も 無駄《むだ》 じゃ ない！ 叔父《おじ》さん が 大阪《おおさか》 で 同《おな》じ スピーカー 持《も》ってて さ、 大阪《おおさか》、 最高《さいこう》 だ よね、 行《い》った こと ある？ まあ とにかく、 美咲《みさき》 は 怒《おこ》った けど、 誰《だれ》 も わかって ない ん だ よ。 で、 何《なん》 の 話《はなし》 だっけ？", "Look, doctor, it was Thursday, or Friday, I don't know, the days run together! I was mixing at the club and suddenly I felt God, like that, direct, and I said: Ren, buy the equipment. 400,000 yen and worth every yen! My uncle had a speaker just like it in Osaka, what a place! Have you been? Anyway, the thing is Misaki got mad, but nobody understands, what were you saying?"],
          "1": ["神様《かみさま》 に 選《えら》ばれた って こと！ それ が どういう 意味《いみ》 か わかる？ 預言者《よげんしゃ》 みたい な もん、 でも 音楽《おんがく》 で。 で さ、 祝福《しゅくふく》 されてる と 車《くるま》 も 速《はや》く 走《はし》る ん だ よ。 昨日《きのう》 なんか 高速《こうそく》 で 百六十《ひゃくろくじゅっ》キロ 出《だ》して、 かすり傷《きず》 ひとつ ない！", "That God chose me! Do you know what that means? Like the prophets, but with music. And cars go faster when you're blessed, you know? Yesterday I did 160 km/h on the expressway and not a scratch."]
        },
        "need": ["Flight of ideas"],
        "ok": ["Tangential"],
        "wrong": {
          "Linear": "He leaps from the club to God to his uncle's speaker to Osaka and never returns to the question.",
          "Loose associations": "Each idea is triggered by the one before it (speaker, uncle, Osaka), so the links are still visible. That is flight of ideas, not loose associations."
        },
        "ev": {
          "find": "Flight of ideas",
          "opts": [
            ["\"叔父《おじ》さん が 大阪《おおさか》 で 同《おな》じ スピーカー 持《も》ってて さ、 大阪《おおさか》、 最高《さいこう》 だ よね、 行《い》った こと ある？ まあ とにかく、 美咲《みさき》 は 怒《おこ》った けど……\"", true],
            ["\"最高《さいこう》！ 人生《じんせい》 で こんなに 気分《きぶん》 いい の、 初《はじ》めて！\"", false],
            ["\"日本語《にほんご》 でも 英語《えいご》 でも、 何《なん》 でも いい よ！\"", false]
          ],
          "why": "One idea triggers the next (equipment, uncle's speaker, Osaka, Misaki) and he never returns to the question. The thread is still followable, which is how flight of ideas differs from loose associations."
        },
        "doc": "Flight of ideas: rapid shifts from the club to God, equipment, his uncle's speaker, and Misaki, with understandable links and frequent loss of the original question",
        "why": "Judge process from a story in the patient's own words. Flight of ideas keeps a thread you can follow; loose associations lose it."
      },
      "perception": {
        "obs": "Does not turn toward sounds or talk to anyone else. Eyes follow you.",
        "ans": {
          "0": ["声《こえ》？ ない ない。 まあ…… たまに 神様《かみさま》 が 話《はな》しかけて くる 感《かん》じ は する けど、 声《こえ》 じゃ なくて、 振動《しんどう》 みたい な、 メッセージ みたい な もん。", "Voices? No. Well... sometimes I feel God speaks to me, but it's not a voice, it's like a vibration, a message."],
          "1": ["いや、 誰《だれ》 も ささやいて ない よ。", "No, nobody whispers to me."],
          "2": ["影《かげ》 なんて ない ない。 全部《ぜんぶ》 いつも より 明《あか》るくて、 きれい なん だ よ！", "No, no shadows. Everything is brighter, prettier!"],
          "3": ["声《こえ》 は ない って。 どっち か って いう と、 自分《じぶん》 に は 使命《しめい》 が ある って 感覚《かんかく》。", "There's no voice. It's more a feeling that I have a mission."],
          "4": ["いや、 誰《だれ》 も 命令《めいれい》 なんか しない。 命令《めいれい》 する の は 俺《おれ》 の 方《ほう》！", "No, nobody orders me. I'm in charge!"]
        },
        "key": [0, 3],
        "need": ["Denies perceptual disturbances", "Not responding to internal stimuli"],
        "wrong": {
          "Auditory hallucinations": "He describes a feeling or message, not a voice heard from outside. Ask him to clarify, and recheck as the methamphetamine clears.",
          "Command auditory hallucinations": "He denies voices and says nobody gives him orders."
        },
        "doc": "Denies hallucinations; describes a sense of a message from God (\"振動《しんどう》 みたい な\") without a perceived voice; not responding to internal stimuli. Methamphetamine use this week: reassess as it clears",
        "why": "Ask what the experience is like, not only whether he hears voices. A feeling of being chosen belongs under thought content. Stimulants can cause hallucinations, so repeat the question over the next days."
      },
      "content": {
        "ans": {
          "0": ["危害《きがい》？ 逆《ぎゃく》 逆《ぎゃく》！ みんな 俺《おれ》 の こと 大好《だいす》き だ し、 これ から ビッグ に なる ん だ から。", "Harm me? On the contrary! Everybody loves me, they're going to see me go big."],
          "1": ["ない。 まあ、 みんな 俺《おれ》 の こと 見《み》る けど ね、 特別《とくべつ》 だ から。 でも つけられて は ない。", "No. Well, people look at me, because I'm special, but they don't follow me."],
          "2": ["そんな の ない ない。 食《た》べる の は 思《おも》い出《だ》した とき だけ。", "Nothing like that. I eat when I remember."],
          "3": ["心《こころ》 の 中《なか》 で わかる ん です よ、 先生《せんせい》。 神様《かみさま》 に 選《えら》ばれた。 間違《まちが》い ない。", "I know it from inside, doctor. God chose me. There's no doubt."],
          "4": ["ほか の 説明《せつめい》？ 見《み》れば わかる じゃん！ 先生《せんせい》 は 信仰《しんこう》 が ない から、 わからない ん だ よ。", "Another explanation? It's obvious! You don't have faith, that's why you don't see it."],
          "5": ["自分《じぶん》 を 責《せ》める？ 全然《ぜんぜん》！ 俺《おれ》 は 祝福《しゅくふく》 されてる ん だ から。", "Guilty, me? Not at all! I'm blessed."],
          "6": ["先生《せんせい》、 蓮《れん》 は 昔《むかし》 から 神社《じんじゃ》 に よく お参《まい》り する 人《ひと》 です けど、 神様《かみさま》 に 選《えら》ばれて メッセージ を 伝《つた》える なんて、 一度《いちど》 も 言《い》った こと は ありません でした。 初《はじ》めて です。 眠《ねむ》らなく なって から 始《はじ》まって、 たぶん また シャブ を やった ん だ と 思《おも》います。", "Doctor, Ren has always visited shrines regularly, but he had never said God chose him to give a message. That's new. It began when he stopped sleeping, and I think he used meth again.", "Misaki (girlfriend)"]
        },
        "key": [3, 4],
        "need": ["Grandiose delusions"],
        "wrong": {
          "No delusions elicited": "He is certain God chose him and rules out any other explanation.",
          "Persecutory delusions": "He feels loved and special, not threatened.",
          "Guilt or worthlessness (not delusional)": "He feels blessed, with no guilt."
        },
        "ev": {
          "find": "Grandiose delusions",
          "opts": [
            ["\"神様《かみさま》 に 選《えら》ばれた。 間違《まちが》い ない。\"", true],
            ["\"蓮《れん》 は 昔《むかし》 から 神社《じんじゃ》 に よく お参《まい》り する 人《ひと》 です。\" (Misaki)", false],
            ["\"危害《きがい》？ 逆《ぎゃく》 逆《ぎゃく》！\"", false]
          ],
          "why": "Visiting shrines is not a delusion. The belief that God chose him, held with no doubt and with a new change in behavior (spending, driving), is. Misaki's line shows it is new for him."
        },
        "doc": "Grandiose religious delusion: God has chosen him for a mission (\"神様《かみさま》 に 選《えら》ばれた\"); held with full conviction, no alternative explanation; new for him, with a history of ordinary shrine visits",
        "why": "Ask how sure he is, and ask the family whether this is new. Strong faith is not pathology. A fixed belief that is new, grandiose, and driving risky behavior is."
      },
      "safety": {
        "ans": {
          "0": ["生《い》きて いて も 仕方《しかた》ない？ 先生《せんせい》、 人生《じんせい》 最高《さいこう》 じゃん！", "That it's not worth it? Doctor, life is the best thing!"],
          "1": ["ない ない！ 早《はや》く 起《お》きて、 続《つづ》き を やりたい ん だ から。", "No! I want to wake up and keep going."],
          "2": ["一度《いちど》 も ない。 なんで？ 今《いま》 が 人生《じんせい》 で いちばん いい とき なのに。", "Never. Why? I'm at my best moment."],
          "3": ["ない ない、 計画《けいかく》 なんて。", "No, no plan."],
          "4": ["ない。", "No."],
          "5": ["ない、 誰《だれ》 も。 俺《おれ》 は 愛《あい》 と 平和《へいわ》 だ よ、 先生《せんせい》。", "No, no one. I'm love and peace, doctor."]
        },
        "key": [2, 5],
        "need": ["Denies suicidal ideation", "Denies homicidal ideation"],
        "wrong": {
          "Passive death wish": "He says he wants to wake up and keep going.",
          "Homicidal ideation toward ___": "He denies thoughts of harming anyone."
        },
        "doc": "Denies suicidal and homicidal ideation. Reckless behavior (drove 160 km/h on the expressway; spent 400,000 yen) puts him at risk without suicidal intent",
        "why": "A denial of suicidal ideation is not the same as being safe. Mania brings risk through recklessness, so write the specific behavior, such as the 160 km/h drive, beside the denial."
      },
      "orientation": {
        "ans": {
          "0": ["土曜日《どようび》 です よ、 先生《せんせい》、 クラブ の 夜《よる》！ まあ、 何晩目《なんばんめ》 か は もう わかんない けど。", "It's Saturday, doctor, club night! Although I've lost count of the nights."],
          "1": ["病院《びょういん》、 精神科《せいしんか》 の 病棟《びょうとう》。 美咲《みさき》 が 連《つ》れて きた。", "In the hospital, in the psychiatry unit. Misaki brought me."],
          "2": ["先生《せんせい》 は 精神科《せいしんか》 の 先生《せんせい》。 で、 俺《おれ》 は 先生《せんせい》 の お気《き》に入《い》り の 患者《かんじゃ》！", "You're the doctor, the psychiatrist. And I'm your favorite patient!"]
        },
        "need": ["Oriented to 3 spheres"],
        "doc": "Oriented to 3 spheres",
        "why": "He is distractible and jokes, but he gives correct answers. Orientation is usually intact in mania, and methamphetamine intoxication does not by itself cause disorientation."
      },
      "insight": {
        "ans": {
          "0": ["病気《びょうき》？ 俺《おれ》 が？ 今《いま》 まで で いちばん 調子《ちょうし》 いい のに！", "Sick, me? I'm better than ever!"],
          "1": ["美咲《みさき》 が、 俺《おれ》 に 起《お》きてる こと を わかって ない から。 怖《こわ》がってる ん だ よ。", "Because Misaki doesn't understand what's happening to me. She gets scared."],
          "2": ["薬《くすり》？ 何《なん》 の ため に？ そんな の 飲《の》んだら、 俺《おれ》 の スイッチ が 切《き》れちゃう。 いらない。", "Medicine? What for? That will shut me down. I don't need it."]
        },
        "need": ["Poor", "Grade 1: complete denial"],
        "wrong": {
          "Grade 3: blames others/external factors": "Grade 3 needs some awareness of being ill. He denies that anything is wrong.",
          "Fair": "He denies any illness and refuses medicine."
        },
        "doc": "Poor (grade 1): denies illness (\"病気《びょうき》？ 俺《おれ》 が？ 今《いま》 まで で いちばん 調子《ちょうし》 いい のに！\"); fears medicine will shut him down (\"スイッチ が 切《き》れちゃう\")",
        "why": "Record his reason for refusing medicine: fear of losing his energy. It is the main target for discharge planning."
      },
      "impulse": {
        "obs": "Taps the desk, interrupts twice, grabs your pen, laughs. Keeps standing when asked to sit.",
        "ans": {
          "0": ["ダメ って 言《い》われる と すぐ キレる けど、 すぐ 収《おさ》まる。", "I get angry fast if someone tells me no, and then it passes."],
          "1": ["誰《だれ》 か を 殴《なぐ》った こと は ない よ。 でも 昨日《きのう》、 高速《こうそく》 で 他《ほか》 の 車《くるま》 に ぶつかり そう に なって、 運転手《うんてんしゅ》 に めちゃくちゃ 怒鳴《どな》って やった。 百六十《ひゃくろくじゅっ》キロ 出《だ》してた から ね！", "I've never hit anyone. But yesterday on the expressway I almost hit another car and yelled like crazy at the driver. I was doing 160 km/h!"]
        },
        "need": ["Poor impulse control"],
        "wrong": {
          "Good impulse control": "He spent 400,000 yen in a few days, drove at 160 km/h, and cannot stay seated.",
          "Fair impulse control": "Several clear impulsive acts in one week, plus restlessness in the interview, are more than fair."
        },
        "doc": "Poor impulse control (spent 400,000 yen on equipment, drove 160 km/h and shouted at another driver, interrupts and grabs the examiner's pen)",
        "why": "Impulse control comes from the history and from what you see. Use concrete acts: money, driving, behavior in the room."
      },
      "judgment": {
        "ans": {
          "0": ["開《あ》けて 中《なか》 を 見《み》る！ お金《かね》 か、 神様《かみさま》 から の サイン かも！", "I'd open it to see what's inside. Maybe it's money, or a sign from God!"],
          "1": ["残《のこ》って、 音楽《おんがく》 かけて みんな を 落《お》ち着《つ》かせる！", "I'd stay and play music to calm people!"]
        },
        "need": ["Impaired test judgment", "Impaired social judgment"],
        "ok": ["Poor"],
        "wrong": {
          "Intact test judgment": "Treating a found wallet as a possible sign from God instead of handing it in, and staying on a smoke-filled train to play music, are not safe answers.",
          "Good": "Both his hypothetical answers and his real decisions (spending, driving) are unsafe."
        },
        "doc": "Poor: impaired test judgment (would open a found wallet looking for money or a sign, would stay on a smoky train) and impaired social judgment (spent 400,000 yen, drove 160 km/h)",
        "why": "In mania both test and social judgment are impaired. Give the evidence, not only the label."
      }
    }
  }
];
