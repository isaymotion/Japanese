/* Admission MSE practice cases, part 4. Hanashimashō (Japanese). STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Same shape as psych-mse-cases.js. Ids in this part: daisuke (same id as his discharge case; his case simulation id is `agitated`). */
window.PSYCH_MSE_CASES = (window.PSYCH_MSE_CASES || []).concat([
  {
    "id": "daisuke",
    "title": "Daisuke on admission",
    "level": "N3",
    "dx": "Stimulant-induced psychotic disorder, provisional (urine screen positive for an amphetamine-type stimulant); rule out a primary psychotic disorder",
    "form": "",
    "setting": "Admitting section, the same evening, about two hours after he was brought to the emergency department. Daisuke Sato, 38, delivery driver on long night shifts, lives alone in an apartment. Brought by police after shouting at a bus stop. His older sister, Tomoko, who lives nearby, has just arrived.",
    "chart": [
      "Police brought him to the emergency department this evening after he shouted at a bus stop. He was sweating, pacing and clenching his fists, and was convinced that men in a car were following him. He was de-escalated and accepted oral medication after being offered a choice.",
      "Medically assessed in the emergency department and sent to the admitting section about two hours later. Calmer now, but still tense.",
      "Urine drug screen in the emergency department: positive for an amphetamine-type stimulant. He has not yet said what, if anything, he has been using."
    ],
    "cc": {
      "ask": "collateral:1",
      "ans": [
        "先生《せんせい》、 ここ 何週間《なんしゅうかん》 か、 どんどん 様子《ようす》 が おかしく なって いる ん です。 弟《おとうと》 は ほとんど 寝《ね》て いない ん です。",
        "Doctor, for the last few weeks he has been getting stranger and stranger. My brother has hardly slept.",
        "Tomoko (older sister)"
      ],
      "opts": [
        [
          "\"ここ 何週間《なんしゅうかん》 か、 どんどん 様子《ようす》 が おかしく なって いる ん です。 弟《おとうと》 は ほとんど 寝《ね》て いない ん です。\"",
          true,
          "The form records the chief complaint in the informant's own words, in Japanese, in quotation marks."
        ],
        [
          "Worsening paranoia and insomnia for several weeks",
          false,
          "That is your interpretation. It belongs in the HPI and the MSE, not in the chief complaint."
        ],
        [
          "For the last few weeks he has been getting stranger and stranger, and he has hardly slept.",
          false,
          "A translation loses the informant's words. Quote the Japanese; add a translation in parentheses if your service requires it."
        ]
      ]
    },
    "domains": {
      "appearance": {
        "obs": "Adult male, medium build, in a dark work jacket over a T-shirt damp with sweat, work trousers and sneakers. Clothes worn but not dirty. Hair flattened, a day or two of stubble. His forehead is shiny with sweat.",
        "ans": {
          "0": ["……どうも。 佐藤《さとう》 です。", "...Hello. I'm Sato."],
          "1": ["……じゃあ、 ドア が 見《み》える 席《せき》 で。", "...Okay, the seat where I can see the door, then."]
        },
        "need": ["Adult male", "Medium built", "Fairly kempt"],
        "wrong": {
          "Unkempt": "His work clothes are worn but not dirty. Stubble and sweat after a night like this are not enough for unkempt.",
          "Well kempt": "His T-shirt is damp with sweat, his hair is flattened and he has not shaved for a day or two.",
          "Poor hygiene": "Sweating from fear and arousal is not poor hygiene."
        },
        "doc": "Adult male, medium built, in work clothes, fairly kempt; sweating, a day or two of stubble",
        "why": "Note the sweating here and follow it in the other domains: with the restlessness and the urine screen, it fits stimulant effects as well as fear. His choice of the seat that faces the door already tells you something about his thought content."
      },
      "psychomotor": {
        "obs": "Sits in the chair that faces the door. Bounces one knee, shifts in the chair, rubs his palms on his trousers. Stands up once when footsteps pass in the corridor and sits again when asked. No pacing now, unlike in the emergency department. No tremor is seen.",
        "ans": {
          "0": ["姉《あね》 に は、 最近《さいきん》 ずっと 落《お》ち着《つ》き が ない って 言《い》われてます。 ……じっと してたら、 やられる でしょう。", "My sister keeps saying I've been restless lately. ...If I keep still, they'll get me, won't they?"]
        },
        "need": ["Restless"],
        "ok": ["Psychomotor agitation"],
        "wrong": {
          "No psychomotor agitation or retardation": "He bounces his knee, shifts in the chair and stands up when he hears footsteps.",
          "Psychomotor retardation": "He is speeded up, not slowed.",
          "Tremor": "No tremor is seen."
        },
        "doc": "Restless (bounces his knee, shifts in the chair, stood up once at footsteps in the corridor, sat again when asked); no pacing; no tremor",
        "why": "Two hours ago he was pacing with his fists clenched: that was psychomotor agitation. Now he is restless but stays seated when asked. Write the change, because it shows the response to de-escalation and medication, and it is the baseline for the night staff."
      },
      "attitude": {
        "obs": "Answers your questions, but keeps glancing at the door and the window. Asks you to close the door. Polite at first; his tone turns rough when \"they\" come up, then he steadies himself.",
        "ans": {
          "0": ["佐藤《さとう》 で いい です。 ……あの、 ドア、 閉《し》めて もらえます か。", "Sato is fine. ...Um, could you close the door?"],
          "1": ["日本語《にほんご》 で 大丈夫《だいじょうぶ》 です。", "Japanese is fine."]
        },
        "need": ["Suspicious", "Cooperative"],
        "ok": ["Guarded", "Irritable", "Fair eye contact"],
        "wrong": {
          "Hostile": "He is frightened and sometimes rough in tone, but he has not threatened you and he answers your questions.",
          "Uncooperative": "He answers every question, though he is vague about what he used at first.",
          "Good eye contact": "His eyes keep going to the door and the window."
        },
        "doc": "Cooperative but suspicious; scans the door and the window, asked for the door to be closed; irritable when \"they\" come up; fair eye contact",
        "why": "His suspicion is aimed at the men in the car, not at you, and he cooperates. Sit at an angle, keep the exit clear for both of you, and stay calm when his tone turns rough."
      },
      "mood": {
        "obs": "Face tense, eyes wide. His voice rises and he frowns when he talks about \"them\"; he looks frightened when he describes the footsteps. Does not smile.",
        "ans": {
          "0": ["怖《こわ》い です よ。 あいつら、 まだ 外《そと》 に いる かも しれない。 ……それ に、 腹《はら》 が 立《た》つ。 何《なん》 で 俺《おれ》 が こんな 目《め》 に あう ん だ。", "I'm scared. They might still be outside. ...And I'm angry. Why is this happening to me?"],
          "1": ["ここ 何週間《なんしゅうかん》 か、 ずっと 気《き》 が 張《は》ってました。 仕事《しごと》 が 終《お》わって も、 眠《ねむ》れない。", "These last few weeks I've been on edge the whole time. Even after work, I can't sleep."],
          "2": ["三《さん》 ぐらい です。", "About a three."]
        },
        "quote": "怖《こわ》い です よ。 あいつら、 まだ 外《そと》 に いる かも しれない。 ……それ に、 腹《はら》 が 立《た》つ。 (I'm scared. They might still be outside. ...And I'm angry.)",
        "need": ["Anxious mood", "Irritable mood", "Congruent affect"],
        "wrong": {
          "Euthymic mood": "He says he is scared and angry, and has been on edge for weeks.",
          "Euphoric mood": "Nothing in his words or face suggests elation. A stimulant does not make every patient high.",
          "Flat affect": "Fear and anger show clearly in his face and voice.",
          "Labile affect": "His fear and anger stay with the same topic. They do not switch suddenly to laughter or tears."
        },
        "ev": {
          "find": "Irritable mood",
          "opts": [
            ["\"それ に、 腹《はら》 が 立《た》つ。 何《なん》 で 俺《おれ》 が こんな 目《め》 に あう ん だ。\"", true],
            ["\"怖《こわ》い です よ。 あいつら、 まだ 外《そと》 に いる かも しれない。\"", false],
            ["\"三《さん》 ぐらい です。\"", false]
          ],
          "why": "He names two feelings. \"怖《こわ》い\" (scared) supports anxious mood; \"腹《はら》 が 立《た》つ\" (I'm angry) supports irritable mood. Record both: the anger at \"them\" matters for the risk picture."
        },
        "doc": "\"怖《こわ》い です よ。 あいつら、 まだ 外《そと》 に いる かも しれない。 ……それ に、 腹《はら》 が 立《た》つ。\" (I'm scared. They might still be outside. ...And I'm angry.) Mood 3/10. Anxious and irritable mood; fearful and irritable affect, congruent",
        "why": "Quote both halves of what he says. Fear and anger together, in a man who believes he is being hunted, raise the risk that he acts to protect himself. The picks have no word for fearful affect, so write it in the details."
      },
      "speech": {
        "obs": "Talks fast, and loudly at times, especially about the car. You can interrupt him, and he answers the next question. His volume drops when you lower yours.",
        "ans": {
          "0": ["バス停《てい》 で…… いや、 その 前《まえ》 から です。 ここ 何週間《なんしゅうかん》 か、 同《おな》じ 車《くるま》 が ずっと 後《うし》ろ に いる ん です。 配達《はいたつ》 は 夜《よる》 から 朝《あさ》 まで で、 まず 倉庫《そうこ》 で 荷物《にもつ》 を 積《つ》んで、 それ から 川沿《かわぞ》い の 道《みち》 を 通《とお》って、 コンビニ に 寄《よ》って…… ルート を 変《か》えて も、 いる ん です よ。 中《なか》 に 男《おとこ》 が 何人《なんにん》 か。 今日《きょう》 も バス停《てい》 で 待《ま》ってたら、 あいつら が 車《くるま》 から こっち を 見《み》てた。 だから 叫《さけ》んだ ん です、 来《く》る な って。 夜勤《やきん》 続《つづ》き で、 眠《ねむ》らない よう に…… まあ、 いろいろ してました けど。", "At the bus stop... no, it started before that. For a few weeks now the same car has been behind me all the time. My deliveries go from night to morning: first I load at the warehouse, then I take the road along the river, stop at a convenience store... Even when I change my route, it's there. A few men inside. Today, while I was waiting at the bus stop, they were watching me from the car. So I shouted: stay away. With night shift after night shift, to stay awake... well, I was doing this and that."]
        },
        "need": ["Spontaneous", "Rapid rate", "Loud volume"],
        "ok": ["Productive", "Adequate volume", "Pressured"],
        "wrong": {
          "Poverty of speech": "He gives a long, detailed account.",
          "Slow rate": "He speaks fast.",
          "Soft volume": "He gets loud when he talks about the car."
        },
        "doc": "Spontaneous, rapid rate, loud at times (when talking about the car); can be interrupted; volume drops when the examiner speaks softly",
        "why": "Two hours ago in the emergency department his speech was loud and pressured, and the admission record may say so. Now it is fast, but you can interrupt him and he answers the next question: fast but interruptible is less than pressured. Note how his speech has changed since the emergency department. Lowering your own voice is part of de-escalation; record that he follows it. Note too how vague he is about staying awake (\"いろいろ してました\"): ask about it next, simply and without judging."
      },
      "process": {
        "obs": "Gets to the point of the question, but on the way gives long detail about his delivery route, then comes back to the car.",
        "ans": {
          "0": ["バス停《てい》 で…… いや、 その 前《まえ》 から です。 ここ 何週間《なんしゅうかん》 か、 同《おな》じ 車《くるま》 が ずっと 後《うし》ろ に いる ん です。 配達《はいたつ》 は 夜《よる》 から 朝《あさ》 まで で、 まず 倉庫《そうこ》 で 荷物《にもつ》 を 積《つ》んで、 それ から 川沿《かわぞ》い の 道《みち》 を 通《とお》って、 コンビニ に 寄《よ》って…… ルート を 変《か》えて も、 いる ん です よ。 中《なか》 に 男《おとこ》 が 何人《なんにん》 か。 今日《きょう》 も バス停《てい》 で 待《ま》ってたら、 あいつら が 車《くるま》 から こっち を 見《み》てた。 だから 叫《さけ》んだ ん です、 来《く》る な って。 夜勤《やきん》 続《つづ》き で、 眠《ねむ》らない よう に…… まあ、 いろいろ してました けど。", "At the bus stop... no, it started before that. For a few weeks now the same car has been behind me all the time. My deliveries go from night to morning: first I load at the warehouse, then I take the road along the river, stop at a convenience store... Even when I change my route, it's there. A few men inside. Today, while I was waiting at the bus stop, they were watching me from the car. So I shouted: stay away. With night shift after night shift, to stay awake... well, I was doing this and that."],
          "1": ["……眠気《ねむけ》 を 飛《と》ばす もの を、 ちょっと。 二年《にねん》 ぐらい 前《まえ》 から、 夜勤《やきん》 の とき に 使《つか》ってました。 最近《さいきん》 は 増《ふ》えて いて、 最後《さいご》 は 昨日《きのう》 です。 ……先生《せんせい》、 これ、 誰《だれ》 か に 言《い》う ん です か。 警察《けいさつ》 とか。", "...Something to keep me awake, a bit. For about two years, on night shifts. Lately more, and the last time was yesterday. ...Doctor, are you going to tell anyone about this? The police, or...?"]
        },
        "need": ["Goal-directed", "Circumstantial"],
        "ok": ["Linear"],
        "wrong": {
          "Tangential": "He wanders into his delivery route but comes back to the car and the bus stop. A tangential answer never gets back to the question.",
          "Flight of ideas": "The detail is about one topic, his route, not a chain of ideas jumping one to the next.",
          "Loose associations": "Every sentence connects to the one before it."
        },
        "doc": "Mostly goal-directed, with some circumstantiality (long detail about his delivery route before returning to the point)",
        "why": "Circumstantial means the detours are long but he reaches the point. When he asks who will be told, answer honestly and generally before he says more, as in his discharge case: 「ここ で 話《はな》した こと は、 佐藤《さとう》さん の 治療《ちりょう》 の ため に 使《つか》い、 秘密《ひみつ》 は 守《まも》ります。 ただ、 法律《ほうりつ》 や 病院《びょういん》 の 決《き》まり に よって は、 例外《れいがい》 も あります。 どんな 場合《ばあい》 か、 先《さき》 に 説明《せつめい》 させて ください。」 (What you tell me is used for your treatment and kept confidential. But depending on the law and hospital policy, there are exceptions. Let me explain first which situations those are.) Do not promise more than you can keep; follow local law and your hospital's policy. Write what he told you about use in the history, in his words, beside the urine screen result."
      },
      "perception": {
        "obs": "Looks up and turns toward the door when real footsteps pass in the corridor. Otherwise looks at you or at the window. Does not pause mid-sentence or seem to listen to something you cannot hear.",
        "ans": {
          "0": ["あります。 夜《よる》、 一人《ひとり》 で いる と、 後《うし》ろ で 足音《あしおと》 が する ん です。 振《ふ》り向《む》いて も、 誰《だれ》 も いない。 ……うまく 隠《かく》れてる ん だ。", "Yes. At night, when I'm on my own, I hear footsteps behind me. I turn around, and there's nobody. ...They hide well."],
          "1": ["ささやき じゃ ない です。 名前《なまえ》 を 呼《よ》ばれる ん です。", "Not whispering. Someone calls my name."],
          "2": ["影《かげ》 は 見《み》て ない です。 見《み》える の は 車《くるま》 だけ。", "I haven't seen shadows. All I see is the car."],
          "3": ["「佐藤《さとう》」 って、 名前《なまえ》 だけ です。 外《そと》 から。 窓《まど》 を 開《あ》けて も、 誰《だれ》 も いない ん です よ。", "Just my name, \"Sato\". From outside. When I open the window, there's nobody there."],
          "4": ["命令《めいれい》？ いや、 それ は ない。 呼《よ》ぶ だけ です。", "Orders? No, nothing like that. It just calls me."]
        },
        "key": [0, 3],
        "need": ["Auditory hallucinations", "Not responding to internal stimuli"],
        "wrong": {
          "Denies perceptual disturbances": "He hears footsteps behind him and his name called at night when nobody is there.",
          "Command auditory hallucinations": "The voice only calls his name. He says it gives no orders.",
          "Visual hallucinations": "He denies seeing shadows. The car he describes is part of his belief about being followed; ask about it under thought content.",
          "Responding to internal stimuli": "He turns toward real footsteps in the corridor. That is a reaction to a real noise, made stronger by fear, not to an internal stimulus."
        },
        "ev": {
          "find": "Auditory hallucinations",
          "opts": [
            ["\"夜《よる》、 一人《ひとり》 で いる と、 後《うし》ろ で 足音《あしおと》 が する ん です。 振《ふ》り向《む》いて も、 誰《だれ》 も いない。\"", true],
            ["\"影《かげ》 は 見《み》て ない です。 見《み》える の は 車《くるま》 だけ。\"", false],
            ["\"命令《めいれい》？ いや、 それ は ない。\"", false]
          ],
          "why": "Footsteps with nobody there, and his name called when he opens the window to an empty street, are perceptions without a real source. He explains them with his belief (\"うまく 隠《かく》れてる\"), but the experience itself is a hallucination."
        },
        "doc": "Auditory hallucinations: footsteps behind him and his name (\"佐藤《さとう》\") called at night when nobody is there; no commands; denies visual hallucinations; not responding to internal stimuli (turns toward real noises in the corridor)",
        "why": "Ask what the voice says and whether it gives orders, even when it only calls his name. Stimulants can cause hallucinations and paranoia. Ask about the footsteps and the voice by name every day: if they clear within days without the stimulant, that supports a substance-induced psychosis."
      },
      "content": {
        "ans": {
          "0": ["そう です。 車《くるま》 の 男《おとこ》たち。 俺《おれ》 を 痛《いた》い 目《め》 に あわせる 気《き》 な ん です。", "Yes. The men in the car. They're out to hurt me."],
          "1": ["だから、 さっき から 言《い》ってる じゃ ない です か。 車《くるま》 で ずっと つけて くる ん です。", "That's what I've been telling you. They follow me in the car, all the time."],
          "2": ["食《た》べ物《もの》？ それ は ない と 思《おも》います。", "Food? I don't think so."],
          "3": ["百《ひゃく》 パーセント です。 この 目《め》 で 見《み》た ん だ から。", "A hundred percent. I saw it with my own eyes."],
          "4": ["ない です よ。 気《き》 の せい なら、 名前《なまえ》 まで 呼《よ》ばれない でしょう。", "There isn't one. If I were imagining it, I wouldn't hear my name called, would I?"],
          "5": ["俺《おれ》 は 何《なに》 も 悪《わる》い こと は して ない。 ……まあ、 姉《あね》 に は 心配《しんぱい》 を かけてます けど。", "I haven't done anything wrong. ...Well, I'm worrying my sister."],
          "6": ["原因《げんいん》 は わかりません。 でも、 夜勤《やきん》 が 続《つづ》いて、 弟《おとうと》 は ほとんど 寝《ね》て いない ん です。 私《わたし》 も 外《そと》 を 見《み》て みました けど、 そんな 車《くるま》 は いません でした。", "I don't know what's causing it. But with night shift after night shift, he has hardly slept. I looked outside too, and there was no car like that.", "Tomoko (older sister)"]
        },
        "key": [3, 4],
        "need": ["Persecutory delusions"],
        "wrong": {
          "No delusions elicited": "He is completely sure that men in a car follow him and want to hurt him, and he accepts no other explanation.",
          "Grandiose delusions": "He feels hunted, not special.",
          "Delusions of reference": "He believes the men follow him and mean him harm. That is persecutory; he does not describe ordinary events carrying special messages for him.",
          "Guilt or worthlessness (not delusional)": "He says he has done nothing wrong. Worrying his sister is ordinary concern, not guilt."
        },
        "ev": {
          "find": "Persecutory delusions",
          "opts": [
            ["\"百《ひゃく》 パーセント です。\" and \"気《き》 の せい なら、 名前《なまえ》 まで 呼《よ》ばれない でしょう。\"", true],
            ["\"そんな 車《くるま》 は いません でした。\" (Tomoko)", false],
            ["\"食《た》べ物《もの》？ それ は ない と 思《おも》います。\"", false]
          ],
          "why": "Full certainty and no room for another explanation make it a delusion. Note that he uses the voice calling his name as proof: the hallucinations and the belief support each other. Tomoko's line is useful collateral that the car is not real, but it is her account, not his thought content."
        },
        "doc": "Persecutory delusion: men in a car follow him and want to hurt him; held with full conviction (\"百《ひゃく》 パーセント\"), no alternative explanation accepted; uses the voice calling his name as proof. Sister looked and saw no such car",
        "why": "Ask how sure he is and whether there could be another explanation, but do not argue with the belief while he is frightened. Ask about the men in the car by name each day, so the team can see whether the belief fades as the stimulant clears."
      },
      "safety": {
        "ans": {
          "0": ["そんな こと、 思《おも》って ない です。 生《い》きたい から、 逃《に》げてる ん です。", "I don't think that. I'm running away because I want to live."],
          "1": ["ない です。 むしろ、 寝《ね》たら やられる。", "No. If anything, if I fall asleep they'll get me."],
          "2": ["ない。 一度《いちど》 も ない です。", "No. Never."],
          "3": ["ない です。", "No."],
          "4": ["ない って 言《い》ってる でしょう。", "I told you, no."],
          "5": ["こっち から 何《なに》 か する 気《き》 は ない です。 ……でも、 あいつら が 来《き》たら、 自分《じぶん》 の 身《み》 は 守《まも》ります よ。 当然《とうぜん》 でしょう。", "I'm not going to do anything first. ...But if they come at me, I'll defend myself. Of course I will."]
        },
        "key": [2, 5],
        "need": ["Denies suicidal ideation", "Denies homicidal ideation"],
        "wrong": {
          "Passive death wish": "He wants to live; he says he is running away because he wants to live.",
          "Homicidal ideation toward ___": "He has no wish or plan to harm anyone. Saying he would defend himself if \"they\" came at him is a fear-driven, conditional statement. Record it beside the denial as a risk point, in his words."
        },
        "ev": {
          "find": "Denies homicidal ideation",
          "opts": [
            ["\"こっち から 何《なに》 か する 気《き》 は ない です。\"", true],
            ["\"あいつら が 来《き》たら、 自分《じぶん》 の 身《み》 は 守《まも》ります よ。\"", false],
            ["\"ない。 一度《いちど》 も ない です。\"", false]
          ],
          "why": "\"こっち から 何《なに》 か する 気《き》 は ない\" (I'm not going to do anything first) is his denial of intent to harm. The next sentence is not homicidal ideation, but it is the risk point: he could act to \"defend himself\" against someone he mistakes for one of the men. \"一度《いちど》 も ない\" answers the question about suicide."
        },
        "doc": "Denies suicidal ideation, plan, or intent. Denies homicidal ideation or intent to harm anyone, but says he would defend himself if \"they\" came at him (\"あいつら が 来《き》たら、 自分《じぶん》 の 身《み》 は 守《まも》ります\"); no plan; no weapon mentioned. Risk of fear-driven defensive aggression while the persecutory belief lasts; recheck each shift",
        "why": "Ask about harm to others directly when a patient feels hunted. A denial with \"but I'd defend myself\" is a risk point: ask who \"they\" are, what he would do, and, in general terms, whether he has anything with him or at home to protect himself with. Tell the ward team, so staff approach him calmly, one at a time, and do not surprise him from behind."
      },
      "orientation": {
        "ans": {
          "0": ["火曜日《かようび》 です。", "It's Tuesday."],
          "1": ["病院《びょういん》 です。 警察《けいさつ》 に 連《つ》れて 来《こ》られた。", "The hospital. The police brought me."],
          "2": ["医者《いしゃ》 です よね。 精神科《せいしんか》 の 先生《せんせい》。", "You're a doctor, right? A psychiatrist."]
        },
        "need": ["Oriented to 3 spheres"],
        "doc": "Oriented to 3 spheres",
        "why": "Stimulant psychosis usually comes with clear orientation. Disorientation, drowsiness or fluctuating attention would point to delirium or a medical cause; recheck overnight if his state changes."
      },
      "insight": {
        "ans": {
          "0": ["病気《びょうき》 じゃ ない です。 本当《ほんとう》 に つけられてる ん です から。 ……ただ、 寝《ね》て ない の は 確《たし》か です。", "I'm not sick. I really am being followed. ...It's true I haven't been sleeping, though."],
          "1": ["連《つ》れて 来《き》た の は 警察《けいさつ》 です よ。 俺《おれ》 じゃ なくて、 あいつら を 捕《つか》まえて ほしい。", "It was the police who brought me. I want them to catch those guys, not me."],
          "2": ["さっき の 薬《くすり》 で、 少《すこ》し 楽《らく》 に は なりました。 でも、 薬《くすり》 で あいつら は いなく ならない でしょう。", "The medicine earlier did make me a bit easier. But medicine won't make them go away."]
        },
        "need": ["Poor", "Grade 2: slight awareness"],
        "ok": ["Grade 1: complete denial"],
        "wrong": {
          "Grade 3: blames others/external factors": "Grade 3 needs some acceptance that something is wrong with him. He thinks the danger is real and the only problem is \"them\".",
          "Fair": "He denies illness and thinks medicine cannot solve his problem.",
          "Good": "He believes the men in the car are real."
        },
        "ev": {
          "find": "Grade 2: slight awareness",
          "opts": [
            ["\"ただ、 寝《ね》て ない の は 確《たし》か です。\" and \"さっき の 薬《くすり》 で、 少《すこ》し 楽《らく》 に は なりました。\"", true],
            ["\"病気《びょうき》 じゃ ない です。\"", false],
            ["\"連《つ》れて 来《き》た の は 警察《けいさつ》 です よ。\"", false]
          ],
          "why": "He denies illness, but admits he has not slept and that the medicine helped. That small awareness, held alongside denial, is grade 2. Complete denial (grade 1) is also defensible; write his reasons either way."
        },
        "doc": "Poor (grade 2): denies illness and believes he is really being followed (\"本当《ほんとう》 に つけられてる\"); admits he has not slept and that the medicine helped a little; does not link his stimulant use to his symptoms",
        "why": "His admission that he has not slept, and that the medicine eased him, is the bridge into treatment tonight: offer help with sleep and with feeling calmer, without arguing about the car. Compare with discharge, when he called the belief the drug talking."
      },
      "impulse": {
        "obs": "Clenches his fists once when the car comes up. His voice rises, and he stands up once at footsteps in the corridor, then sits again when asked.",
        "ans": {
          "0": ["普段《ふだん》 は ない です。 でも、 今日《きょう》 は…… 抑《おさ》えられなかった。 あいつら が 悪《わる》い ん だ。", "Not usually. But today... I couldn't hold it in. It's their fault."],
          "1": ["ない です。 人《ひと》 を 殴《なぐ》った こと は、 一度《いちど》 も ない。", "No. I've never once hit anyone."]
        },
        "need": ["Poor impulse control"],
        "wrong": {
          "Good impulse control": "He shouted at a bus stop tonight, clenched his fists in the emergency department and again in this interview, and says he could not hold it in.",
          "Fair impulse control": "He has never hit anyone, but tonight he lost control in public, he says so himself, and he says he would defend himself. For now that is poor."
        },
        "doc": "Poor impulse control (shouted at a bus stop tonight, could not hold it in by his own account; clenched fists in the emergency department and in the interview; stood up abruptly once, sat when asked; no history of hitting anyone)",
        "why": "Base the rating on tonight, not on his usual self: fear, stimulant effects and lack of sleep all lower control. Write both sides, the lost control tonight and no past violence, and review it as he sleeps and the stimulant clears."
      },
      "judgment": {
        "ans": {
          "0": ["交番《こうばん》 に 届《とど》けます。 ……警察《けいさつ》 は、 俺《おれ》 の 話《はなし》 は 聞《き》いて くれない けど。", "I'd take it to the police box. ...Though the police won't listen to me."],
          "1": ["非常《ひじょう》 ボタン を 押《お》して、 車掌《しゃしょう》 に 知《し》らせます。", "I'd press the emergency button and tell the conductor."]
        },
        "need": ["Poor", "Intact test judgment", "Impaired social judgment"],
        "ok": ["Fair"],
        "wrong": {
          "Good": "His hypothetical answers are sensible, but his real decisions are not.",
          "Intact social judgment": "He used a stimulant to stay awake on night shifts for about two years, more lately, and confronted strangers at a bus stop tonight.",
          "Impaired test judgment": "Handing in a wallet and pressing the emergency button are sensible answers."
        },
        "doc": "Poor: intact test judgment; impaired social judgment (used a stimulant to stay awake on night shifts for about two years, increasing lately; shouted at strangers at a bus stop tonight)",
        "why": "Test judgment can be intact while real decisions are not. His real decisions were driven by exhaustion, stimulant use and fear. Give the reasons, not only the label, and compare with discharge."
      }
    }
  }
]);
