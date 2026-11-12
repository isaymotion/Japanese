/* Case simulations, part 2, and the interpretation drill.
   PSYCH_CASES: { id, title, level, setting, steps: [{ who, line: [japanese, english], choices: [{ tl, en, score, fb }] }], … }
   PSYCH_INTERP: [japanese, english, clinicalNote]
   Patients and families are fictional. STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician. */
window.PSYCH_CASES = (window.PSYCH_CASES || []).concat([
  {
    id: 'tetsuo',
    title: 'Alcohol withdrawal and motivation',
    level: 'N3',
    setting: 'Medical unit, day 1 after an emergency visit. Tetsuo Yamamoto, 52, a construction worker who lives alone, is sweaty and shaky. His daughter, Misaki, drove him in. Staff address him as Yamamoto-san.',
    steps: [
      {
        who: 'Tetsuo',
        line: [`先生《せんせい》、 どうも 調子《ちょうし》 が 悪《わる》くて。 手《て》 が 震《ふる》えて、 汗《あせ》 も 止《と》まらない。 一杯《いっぱい》 やりたい ん です よ。`, `Doctor, I feel really bad. My hands are shaking and the sweating won't stop. I need a drink.`],
        choices: [
          { tl: `話《はな》して くださって ありがとう ございます、 山本《やまもと》さん。 最後《さいご》 に お酒《さけ》 を 飲《の》んだ の は いつ です か。 一日《いちにち》 に どのくらい 飲《の》みます か。`, en: `Thank you for telling me, Mr Yamamoto. When did you last drink? How much do you drink in a day?`, score: 2, fb: `Good. Timing of the last drink and the daily amount are the two questions that tell you how severe withdrawal can become. 一日《いちにち》 に どのくらい asks the amount without sounding like an accusation.` },
          { tl: `気持《きも》ち が 落《お》ち着《つ》く お薬《くすり》 を 出《だ》しましょう か。`, en: `Shall I give you some medicine to calm your nerves?`, score: 1, fb: `Treatment may be needed, but first establish the cause and severity.` },
          { tl: `そんな に 飲《の》む から、 こう なる ん です よ。`, en: `This is what happens when you drink that much.`, score: 0, fb: `Blame lowers honesty. Ask about use without judgment.` }
        ]
      },
      {
        who: 'Tetsuo',
        line: [`焼酎《しょうちゅう》 を 一日《いちにち》 に 四合瓶《よんごうびん》 一本《いっぽん》 くらい。 最後《さいご》 に 飲《の》んだ の は 二日《ふつか》 くらい 前《まえ》 かな。 毎朝《まいあさ》 二日酔《ふつかよ》い が ひどくて、 迎《むか》え酒《ざけ》 しない と やって られない。`, `About one 720 ml bottle of shochu a day. My last drink was maybe two days ago. Every morning the hangover is so bad I can't get going without a morning drink.`],
        choices: [
          { tl: `正直《しょうじき》 に 話《はな》して くださって ありがとう ございます。 前《まえ》 に お酒《さけ》 を やめた とき、 手《て》 の 震《ふる》え、 汗《あせ》、 吐《は》き気《け》 が 出《で》たり、 ない もの が 見《み》えたり 聞《き》こえたり した こと は あります か。 けいれん を 起《お》こした こと は あります か。`, en: `Thank you for being honest. When you stopped drinking before, did you get shaking hands, sweating or nausea, or see or hear things that weren't there? Have you ever had a seizure?`, score: 2, fb: `Good. You thank him, then ask about withdrawal symptoms and past seizures or delirium tremens. A history of withdrawal seizures is a risk factor for complicated withdrawal. 迎《むか》え酒《ざけ》 (a morning drink to treat the hangover) is itself a sign of dependence.` },
          { tl: `お酒《さけ》 は 何年《なんねん》 くらい 飲《の》んで います か。`, en: `How many years have you been drinking?`, score: 1, fb: `Useful for history, but ask first about withdrawal and seizures because they are urgent.` },
          { tl: `山本《やまもと》さん は アル中《ちゅう》 です よ。 今《いま》 すぐ やめない と いけません。`, en: `You're an alcoholic, Mr Yamamoto. You have to quit right now.`, score: 0, fb: `Stigmatizing language. アル中《ちゅう》 is a derogatory colloquial word in Japanese. Describe the use; do not label the person.` }
        ]
      },
      {
        who: 'Tetsuo',
        line: [`ええ、 何年《なんねん》 か 前《まえ》 に けいれん を 起《お》こした こと が あって、 昨日《きのう》 も また。 本当《ほんとう》 に 怖《こわ》かった。 娘《むすめ》 の 美咲《みさき》 が ずいぶん 泣《な》いて…。`, `Yes, I had fits a few years ago, and again yesterday. It really scared me. My daughter Misaki cried so much...`],
        choices: [
          { tl: `その 怖《こわ》さ は、 山本《やまもと》さん に とって 大《おお》きな こと だった ん です ね。 ゼロ から 十《じゅう》 で 言《い》う と、 お酒《さけ》 を やめる こと は どれくらい 大切《たいせつ》 です か。 もっと 低《ひく》い 数字《すうじ》 では ない の は、 どうして です か。`, en: `That scare clearly mattered to you. From 0 to 10, how important is it to you to stop drinking? And why is it not a lower number?`, score: 2, fb: `Good. You reflect his feeling, use the importance ruler, and ask why not lower, so he argues for change in his own words (motivational interviewing).` },
          { tl: `娘《むすめ》さん が 一緒《いっしょ》 に いて くれて よかった です ね。`, en: `It's good your daughter was with you.`, score: 1, fb: `Supportive, but you missed the chance to explore his own motivation.` },
          { tl: `怖《こわ》い 思《おも》い を した ん です から、 今度《こんど》 こそ やめない と だめ です よ。`, en: `You've had a scare, so this time you really have to quit.`, score: 0, fb: `An order. It invites resistance. Let him name his reasons for changing.` }
        ]
      }
    ],
    summary: {
      findings: [
        'Probable severe alcohol use disorder: about one 720 ml bottle of shochu daily, morning drinking, last drink about 48 hours ago',
        'Tremor and sweating, with a withdrawal seizure and an earlier seizure history: high risk for complicated withdrawal',
        'Needs a symptom-triggered benzodiazepine protocol and thiamine',
        "Motivation is rising (fear, daughter's distress); also assess mood and passive death wish"
      ],
      mse: `52M, diaphoretic, tremulous, anxious, cooperative. Speech normal. Mood 「調子《ちょうし》 が 悪《わる》い」; affect anxious. Thought process linear. Thought content: fear after the seizure, wish to drink; no hallucinations at this time. Oriented. Insight fair. Judgment fair.`
    }
  },
  {
    id: 'agitated',
    title: 'Agitated patient: de-escalation',
    level: 'N4',
    setting: 'Emergency department. Daisuke Sato, 38, was brought by police after shouting at a bus stop. He is sweating, pacing, and clenching his fists, and says people are following him. Stimulant intoxication versus psychosis. An officer stands nearby. Choose your words step by step, following the de-escalation checklist.',
    steps: [
      {
        who: 'Daisuke',
        line: [`近《ちか》づく な！ つけられてる ん だ！ みんな に！`, `Don't come near me! I'm being followed! By everyone!`],
        choices: [
          { tl: `私《わたし》 は ここ から 動《うご》きません。 近《ちか》づきません。 私《わたし》 は 医師《いし》 です。 お話《はなし》 する の は 私《わたし》 だけ です。`, en: `I'm staying right here. I won't come closer. I'm the doctor, and I'm the only one who will talk with you.`, score: 2, fb: `Good. You keep your distance (respect personal space), introduce yourself, and make clear that one staff member speaks.` },
          { tl: `落《お》ち着《つ》いて ください。`, en: `Please calm down.`, score: 1, fb: `Calm, but 落《お》ち着《つ》いて ください alone rarely works. Introduce yourself and keep your distance first.` },
          { tl: `今《いま》 すぐ 落《お》ち着《つ》きなさい！`, en: `Calm down right now!`, score: 0, fb: `Shouting an order escalates the situation. The 〜なさい form is an order from above, the way a parent or teacher speaks to a child.` }
        ]
      },
      {
        who: 'Daisuke',
        line: [`あいつら、 俺《おれ》 を 痛《いた》い 目《め》 に あわせる 気《き》 な ん だ！ ここ から 出《だ》して くれ！`, `They're going to hurt me! Let me out of here!`],
        choices: [
          { tl: `危《あぶ》ない と 感《かん》じて いて、 ここ から 出《で》たい ん です ね。 何《なに》 が あった の か、 聞《き》かせて ください。`, en: `You feel you're in danger and you want to get out of here. Tell me what has been happening.`, score: 2, fb: `Good. You reflect his feeling and invite him to talk. Listening lowers arousal.` },
          { tl: `どうして 大声《おおごえ》 を 出《だ》す ん です か。`, en: `Why are you shouting?`, score: 1, fb: `A challenge-style question. Reflecting the feeling works better than asking him to justify it.` },
          { tl: `誰《だれ》 も あなた を つけて なんか いません よ。`, en: `Nobody is following you.`, score: 0, fb: `Arguing with a belief while he is aroused adds fuel. Acknowledge the fear, not the content.` }
        ]
      },
      {
        who: 'Daisuke',
        line: [`もう 何日《なんにち》 も 寝《ね》て ない…。 口《くち》 が カラカラ だ し、 ここ の 連中《れんちゅう》 は 誰《だれ》 も 信用《しんよう》 できない。`, `I haven't slept for days... My mouth is bone dry, and I can't trust anyone here.`],
        choices: [
          { tl: `信用《しんよう》 する の は 難《むずか》しい です よね。 お水《みず》 を 飲《の》みます か。 それとも、 静《しず》か な 部屋《へや》 に 移《うつ》ります か。`, en: `It's hard to trust people right now. Would you like some water? Or would you rather move to a quiet room?`, score: 2, fb: `Good. Simple language and two acceptable choices give him control. Water and a quiet room lower stimulation.` },
          { tl: `水《みず》 を 飲《の》んで、 そこ に 座《すわ》って ください。`, en: `Drink some water and sit down there.`, score: 1, fb: `Reasonable offers, but they are commands. Offer choices instead.` },
          { tl: `落《お》ち着《つ》かない なら、 警備員《けいびいん》 を 呼《よ》びます よ。`, en: `If you don't calm down, I'll call security.`, score: 0, fb: `A threat. It raises fear and the chance of violence.` }
        ]
      },
      {
        who: 'Officer',
        line: [`先生《せんせい》、 拳《こぶし》 を 握《にぎ》りました。 何人《なんにん》 か で 押《お》さえます か。`, `Doctor, he's made a fist. Should a few of us hold him down?`],
        choices: [
          { tl: `まだ です。 少《すこ》し 下《さ》がって いて ください。 私《わたし》 が このまま 話《はな》します。`, en: `Not yet. Please stay back a little. I'll keep talking with him.`, score: 2, fb: `Good. You keep one voice, give the team a clear plan, and keep a safe response ready if talking fails.` },
          { tl: `ちょっと 待《ま》って ください。 考《かんが》えます から。`, en: `Wait a moment. Let me think.`, score: 1, fb: `Buys time, but gives no instruction. Tell the team what to do.` },
          { tl: `はい、 すぐ 押《お》さえて ください。`, en: `Yes, hold him down now.`, score: 0, fb: `A hands-on hold is for imminent danger, after verbal de-escalation fails. It can make a frightened person worse.` }
        ]
      },
      {
        who: 'Daisuke',
        line: [`（拳《こぶし》 を 握《にぎ》りしめる。） 触《さわ》る な！ 誰《だれ》 も 触《さわ》る な！`, `(Clenches his fist.) Don't touch me! Nobody touch me!`],
        choices: [
          { tl: `佐藤《さとう》さん に は 触《さわ》りません。 でも、 ここ で 誰《だれ》か が けが を する こと は 止《と》めなければ なりません。 佐藤《さとう》さん も、 私《わたし》たち も です。 落《お》ち着《つ》ける よう に、 手伝《てつだ》いたい ん です。`, en: `I won't touch you. But I have to stop anyone getting hurt here, you or us. I want to help you calm down.`, score: 2, fb: `Good. A clear limit with the reason, no threat, and an offer of help.` },
          { tl: `そういう こと は、 やめて ください。`, en: `Please don't do that.`, score: 1, fb: `A limit, but vague. Say what is not allowed and why, and offer help.` },
          { tl: `手《て》 を 上《あ》げたら、 縛《しば》ります よ。`, en: `If you raise your hand, we'll tie you down.`, score: 0, fb: `A threat is not a limit. It usually escalates.` }
        ]
      },
      {
        who: 'Daisuke',
        line: [`（深《ふか》く 息《いき》 を して、 座《すわ》る。） …わかった。 で、 どう すれば いい？`, `(Breathes deeply and sits down.) ...Okay. So what now?`],
        choices: [
          { tl: `座《すわ》って くださって ありがとう ございます。 よく 落《お》ち着《つ》けました ね。 ここ に いる の と、 静《しず》か な 部屋《へや》 に 移《うつ》る の と、 どちら が いい です か。`, en: `Thank you for sitting down. You calmed yourself really well. Would you rather stay here or move to the quiet room?`, score: 2, fb: `Good. You praise the calm behavior and offer a choice.` },
          { tl: `はい、 いい です。`, en: `Okay, good.`, score: 1, fb: `Missed the chance to reinforce the calm behavior.` },
          { tl: `最初《さいしょ》 から そう して ください よ。`, en: `You should have done that from the start.`, score: 0, fb: `Shaming can restart the escalation.` }
        ]
      },
      {
        who: 'Daisuke',
        line: [`まだ 落《お》ち着《つ》かない…。 自分《じぶん》 で 止《と》められない ん だ。`, `I'm still worked up... I can't stop it myself.`],
        choices: [
          { tl: `気持《きも》ち を 落《お》ち着《つ》ける の を 助《たす》ける お薬《くすり》 が あります。 錠剤《じょうざい》 と 液体《えきたい》 の 飲《の》み薬《ぐすり》、 どちら が いい です か。 どちら も 嫌《いや》 なら、 ほか の 方法《ほうほう》 を 一緒《いっしょ》 に 考《かんが》えましょう。`, en: `There is a medicine that helps you calm down. Would you prefer a tablet or a liquid to drink? If you don't want either, we can think about another option together.`, score: 2, fb: `Good. Explain how the medicine helps, offer oral medication with a choice, and keep an injection for when oral fails and safety is at risk. Teaching example only: lorazepam 2 mg by mouth is a common option. Then check vitals and a toxicology screen.` },
          { tl: `少《すこ》し 寝《ね》て みて ください。`, en: `Try to sleep for a while.`, score: 1, fb: `He is telling you he still feels unsettled. Offer help rather than suggest he fix it alone.` },
          { tl: `注射《ちゅうしゃ》 を します。`, en: `We're going to give you an injection.`, score: 0, fb: `Offer oral medication and a choice first. An injection is for when oral medication is refused and the risk remains.` }
        ]
      }
    ],
    summary: {
      findings: [
        'Acute agitation with paranoia, sweating and pacing; stimulant intoxication versus psychosis is the working question',
        'Responded to de-escalation: space, one speaker, simple language, reflecting feelings, choices, a clear limit without threats',
        'Accepted oral medication after a choice was offered',
        'Next: vitals, glucose, toxicology, medical screening, collateral, and a debrief with him later'
      ],
      mse: `38M, initially agitated, pacing, sweating, fists clenched. Speech loud, pressured. Mood not stated (said 「つけられてる」, "I'm being followed"); affect fearful and irritable, calmer later. Thought content: persecutory beliefs (being followed). Perception: not clear. Accepted limits and medication choice. Insight poor. Judgment impaired.`
    }
  },
  {
    id: 'ayaka',
    title: 'Over-the-counter medicine misuse and motivational interviewing',
    level: 'N3',
    setting: 'Inpatient unit, day 2. Ayaka Nakamura, 20, a university student with a part-time job, was admitted after taking far more over-the-counter cough and cold medicine than the label says. Her mother brought her in. She avoids eye contact.',
    steps: [
      {
        who: 'Ayaka',
        line: [`母《はは》 に 無理《むり》やり 連《つ》れて 来《こ》られた だけ。 意味《いみ》 わかんない。`, `My mother just dragged me here. I don't get the point.`],
        choices: [
          { tl: `来《き》て くださって ありがとう ございます、 中村《なかむら》さん。 責《せ》める ため に ここ に いる の では ありません。 最近《さいきん》 どう 過《す》ごして いた か、 話《はな》したい こと を 話《はな》して もらって も いい です か。`, en: `Thank you for coming, Ms Nakamura. I'm not here to blame you. Would it be all right to talk about how you've been, and whatever you'd like to tell me?`, score: 2, fb: `Good. A non-judgmental opening: you thank her, say you are not there to blame her (責《せ》める ため に ここ に いる の では ありません), ask permission, and let her lead.` },
          { tl: `どんな 薬《くすり》 を 使《つか》って います か。`, en: `What drugs are you using?`, score: 1, fb: `The topic is right, but it is too fast and gives her no choice.` },
          { tl: `薬《くすり》 を 乱用《らんよう》 して いる ん です か。`, en: `Are you abusing drugs?`, score: 0, fb: `A blunt accusation. It raises shame and closes the conversation.` }
        ]
      },
      {
        who: 'Ayaka',
        line: [`受験《じゅけん》 の とき 風邪《かぜ》 を ひいて、 市販《しはん》 の 咳止《せきど》め を 飲《の》んだら、 すごく 楽《らく》 に なって。 それ から、 薬局《やっきょく》 を 何軒《なんけん》 も 回《まわ》って 買《か》う よう に なった。`, `When I had a cold during entrance exams, I took over-the-counter cough medicine and felt so much better. After that I started going round lots of drugstores to buy it.`],
        choices: [
          { tl: `それ は 大変《たいへん》 でした ね。 受験《じゅけん》 の ストレス も あった ん です ね。 一回《いっかい》 に どのくらい、 週《しゅう》 に 何回《なんかい》 くらい 飲《の》んで います か。 ほか の 薬《くすり》 や お酒《さけ》 と 一緒《いっしょ》 に 飲《の》む こと は あります か。`, en: `That sounds really hard, and you were under exam stress too. How much do you take at a time, and how many times a week? Do you ever take it with other medicines or alcohol?`, score: 2, fb: `Good. You empathize, normalize how it began, and ask amount, frequency and combinations in specific terms. Cough and cold medicines misused this way may contain codeine-type opioids, dextromethorphan or stimulants, so ask which kind she buys.` },
          { tl: `いつ から 飲《の》んで います か。`, en: `Since when have you been taking it?`, score: 1, fb: `Relevant, but amount and pattern determine overdose risk and the treatment.` },
          { tl: `つまり、 薬物中毒《やくぶつちゅうどく》 って こと です ね。`, en: `So you're a drug addict.`, score: 0, fb: `Labels stigmatize. Describe the behavior and the harm; do not label the person.` }
        ]
      },
      {
        who: 'Ayaka',
        line: [`ほぼ 毎日《まいにち》。 一回《いっかい》 に すごい 量《りょう》。 説明書《せつめいしょ》 に 書《か》いて ある より ずっと 多《おお》い。 飲《の》まない と、 だるくて、 汗《あせ》 が 出《で》て、 お腹《なか》 も 痛《いた》く なる。`, `Almost every day. A huge amount at a time. Way more than the leaflet says. If I don't take it, I feel heavy and achy, I sweat, and my stomach hurts.`],
        choices: [
          { tl: `はっきり 話《はな》して くれて ありがとう ございます。 今《いま》まで に、 飲《の》みすぎて 意識《いしき》 が なく なった こと や、 呼《よ》ばれて も 起《お》きられなかった こと は あります か。`, en: `Thank you for telling me so clearly. Have you ever taken so much that you lost consciousness, or couldn't wake up when someone called you?`, score: 2, fb: `Good. You thank her, then ask about overdose history, an important risk factor for another one.` },
          { tl: `やめよう と した こと は あります か。`, en: `Have you tried to stop?`, score: 1, fb: `Helpful, but safety questions about overdose come first.` },
          { tl: `そんな に 飲《の》む なんて 多《おお》すぎます。 死《し》んで しまいます よ。`, en: `That is far too much. You're going to die.`, score: 0, fb: `Fear-based statements do not build rapport. She likely already knows.` }
        ]
      },
      {
        who: 'Ayaka',
        line: [`一回《いっかい》 だけ。 友達《ともだち》 が 救急車《きゅうきゅうしゃ》 を 呼《よ》んで くれて、 気《き》づいたら 病院《びょういん》 だった。 すごく 怖《こわ》かった。`, `Once. A friend called an ambulance, and when I came to I was in hospital. It really scared me.`],
        choices: [
          { tl: `怖《こわ》かった です ね。 お友達《ともだち》 が そば に いて くれて、 本当《ほんとう》 に よかった です。 今《いま》、 家《いえ》 に 薬《くすり》 の 買《か》い置《お》き は あります か。 もしもの とき に どう すれば いい か、 お母《かあ》さん は 知《し》って います か。`, en: `That must have been frightening. I'm really glad your friend was with you. Right now, do you have a stock of the medicine at home? Does your mother know what to do if it happens again?`, score: 2, fb: `Good. You validate the fear and move to prevention: the supply at home and who else knows what to do in an emergency.` },
          { tl: `それ は いつ ごろ の こと です か。`, en: `About when was that?`, score: 1, fb: `A fair factual question, but it misses the prevention step.` },
          { tl: `お母《かあ》さん の 気持《きも》ち を 考《かんが》えたら、 そんな こと は できない はず です よ。`, en: `If you'd thought about how your mother feels, you couldn't have done that.`, score: 0, fb: `Shaming. It increases guilt and makes disclosure less likely.` }
        ]
      },
      {
        who: 'Ayaka',
        line: [`部屋《へや》 の 引《ひ》き出《だ》し に、 まだ 箱《はこ》 が いくつ も ある。 母《はは》 は 何《なに》 も 知《し》らない し、 家《いえ》 に は 中学生《ちゅうがくせい》 の 弟《おとうと》 も いる。`, `There are still lots of boxes in a drawer in my room. My mother doesn't know anything, and my little brother, who's in junior high, lives at home too.`],
        choices: [
          { tl: `では、 今日《きょう》、 もしもの とき の こと を 一緒《いっしょ》 に 確認《かくにん》 しましょう。 呼《よ》んで も 起《お》きない とき は、 すぐ ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》 して、 体《からだ》 を 横向《よこむ》き に して、 一人《ひとり》 に しない こと。 飲《の》んだ 薬《くすり》 の 箱《はこ》 は 救急隊《きゅうきゅうたい》 に 見《み》せる こと。 今《いま》 の こと を、 ご自分《じぶん》 の 言葉《ことば》 で 言《い》って みて いただけます か。`, en: `Then let's go over today what to do in an emergency. If someone can't be woken, call 119 straight away, turn them on their side, and don't leave them alone. Show the paramedics the box of what was taken. Could you tell me that back in your own words?`, score: 2, fb: `Good. Simple emergency teaching with a teach-back to check understanding. With her agreement, include her mother in the teaching, and talk about what to do with the boxes at home.` },
          { tl: `もしもの とき の こと が 書《か》いて ある パンフレット を お渡《わた》し します ね。`, en: `I'll give you a leaflet about what to do in an emergency.`, score: 1, fb: `A handout helps, but it does not replace hands-on teaching and teach-back.` },
          { tl: `弟《おとうと》さん が いる 家《いえ》 に、 そんな 薬《くすり》 を 置《お》いて おく べき では ありません。`, en: `You shouldn't keep that kind of medicine in a house where your brother lives.`, score: 0, fb: `True, but said this way it shames. Focus on safety actions she can take.` }
        ]
      },
      {
        who: 'Ayaka',
        line: [`母《はは》 の ため に も、 やめたい。 でも、 悪《わる》い 夢《ゆめ》 ばかり 見《み》る し、 あれ が ない と 眠《ねむ》れない。 それ に、 あの とき の こと は 話《はな》したく ない。 今《いま》 は。`, `I want to stop, for my mother too. But I keep having nightmares, and without it I can't sleep. And I don't want to talk about what happened back then. Not now.`],
        choices: [
          { tl: `話《はな》したく ない こと は、 話《はな》さなくて 大丈夫《だいじょうぶ》 です。 悪《わる》い 夢《ゆめ》 の こと を 教《おし》えて くれて ありがとう ございます。 それ も 治療《ちりょう》 できます。 ゼロ から 十《じゅう》 で 言《い》う と、 咳止《せきど》め を やめる こと は、 今《いま》 の 中村《なかむら》さん に とって どれくらい 大切《たいせつ》 です か。`, en: `You don't have to talk about anything you don't want to. Thank you for telling me about the nightmares; those can be treated too. From 0 to 10, how important is it to you right now to stop the cough medicine?`, score: 2, fb: `Good. You respect her boundary around the trauma (no need for details), name the nightmares as treatable, and ask the importance ruler.` },
          { tl: `わかりました。 どう する と 眠《ねむ》れます か。`, en: `I see. What helps you sleep?`, score: 1, fb: `Fine, but you leave out her motivation, which is what you can build on.` },
          { tl: `何《なに》 が あった の か、 話《はな》して ください。 大事《だいじ》 な こと です から。`, en: `Please tell me what happened. It's important.`, score: 0, fb: `Pressing for trauma details before trust is built can cause distress. Let her set the pace.` }
        ]
      },
      {
        who: 'Ayaka',
        line: [`八《はち》 かな。 母《はは》 の ため。 でも、 できる 自信《じしん》 は…。 正直《しょうじき》、 三《さん》 くらい。`, `An eight, I guess. For my mother. But confidence that I can do it... honestly, about a three.`],
        choices: [
          { tl: `八《はち》 は 高《たか》い です ね。 お母《かあ》さん の ため なん です ね。 三《さん》 も 大切《たいせつ》 な 数字《すうじ》 です。 ゼロ では なく 三《さん》 な の は、 どうして です か。 何《なに》 が あれば、 その 数字《すうじ》 が 上《あ》がりそう です か。 依存《いぞん》 の 専門外来《せんもんがいらい》 や、 悪《わる》い 夢《ゆめ》 と 睡眠《すいみん》 の 治療《ちりょう》 も あります。 一緒《いっしょ》 に 考《かんが》えて いきましょう。`, en: `Eight is high, and it's for your mother. Three counts too. Why a three and not a zero? What would help that number go up? There is a specialist addiction clinic, and treatment for the nightmares and sleep. Let's work it out together.`, score: 2, fb: `Good. You affirm the importance, ask the confidence ruler question (why not lower), and offer specialist treatment. Teaching note only: plan supervised withdrawal management with a specialist service, treat sleep and nightmares, and review the products she uses with a pharmacist.` },
          { tl: `もっと 自分《じぶん》 を 信《しん》じて ください。`, en: `You need to believe in yourself more.`, score: 1, fb: `Encouragement without a plan does not move confidence. Ask what would help.` },
          { tl: `三《さん》 では、 うまく いきません よ。`, en: `With a three, it won't work.`, score: 0, fb: `Discouraging. Low confidence is a starting point, and it can grow with support and treatment.` }
        ]
      }
    ],
    summary: {
      findings: [
        'Over-the-counter cough and cold medicine misuse, severe: far above the label dose, almost daily, bought at several drugstores; began with a cold during exam stress',
        'Withdrawal-like symptoms between doses (malaise, sweating, abdominal pain) and one prior overdose needing an ambulance',
        'Nightmares and a past event she does not want to discuss now: screen for PTSD later, at her pace',
        'Importance 8/10, confidence 3/10: specialist addiction clinic, supervised withdrawal plan, sleep and nightmare treatment',
        'Emergency teaching for her and, with consent, her mother; discuss the stock at home (younger brother in the house)'
      ],
      mse: `20F, avoids eye contact initially, then engaged. Speech normal. Mood 「怖《こわ》かった」; affect anxious, congruent. Thought process linear. Thought content: motivated to stop for her mother; no suicidal or psychotic content elicited. Perception intact. Cognition grossly intact. Insight fair. Judgment fair.`
    }
  }
]);

window.PSYCH_INTERP = [
  [`最近《さいきん》、 何《なに》 を する に も 気《き》 が 重《おも》くて。`, `Lately everything feels heavy on my mind. (Literally "my ki is heavy": dread, low mood, reluctance.)`, `A common idiom of distress that can cover worry, dread or depression. Ask what feels heavy and since when, then screen for depression and anxiety.`],
  [`頭《あたま》 が 真《ま》っ白《しろ》 に なって、 何《なに》 も わからなく なった ん です。`, `My head went completely white and I couldn't understand anything. (A blank-out under acute stress.)`, `May describe a panic attack, an acute stress reaction or dissociation. Ask about the trigger, whether she felt out of control, physical symptoms, and screen for panic and suicide risk.`],
  [`あの 地震《じしん》 の 後《あと》 から、 魂《たましい》 が 抜《ぬ》けた みたい です。`, `Since that earthquake I feel as if my soul has left me. (Not myself since a frightening event.)`, `A culturally familiar way to describe change after a fright. Respect the explanation, then ask about the event, sleep, appetite, mood and nightmares; screen for PTSD and depression.`],
  [`うち の 子《こ》、 何《なに》か に 取《と》りつかれた みたい で、 お祓《はら》い に 行《い》こう か と 思《おも》って。`, `My child seems possessed by something, so I'm thinking of taking him for a purification rite.`, `A folk or religious explanation for a child's behaviour change. Do not dismiss it; ask exactly what the child is doing and check for fever, pain, medical illness and developmental issues.`],
  [`もう 楽《らく》 に なりたい。`, `I just want to be at ease now. (Can mean wanting rest, or wanting to die.)`, `A common indirect way to speak of death. Ask directly whether she means wanting to die, then ask about plans and means.`],
  [`このまま 消《き》えて しまいたい。`, `I wish I could just disappear like this.`, `A passive death wish expressed softly. Ask directly about suicidal thoughts, plans and means.`],
  [`もう 限界《げんかい》 です。`, `I've reached my limit.`, `Distress with possible suicidal meaning. Clarify what has become unbearable, then ask directly about suicide.`],
  [`何《なに》 を する 気《き》 も 起《お》きない ん です。`, `I don't feel like doing anything.`, `Anhedonia, low energy or hopelessness. Clarify which, and screen for depression and suicide.`],
  [`体《からだ》 が だるくて、 毎日《まいにち》 しんどい です。`, `My body feels heavy and every day is a struggle.`, `Common words for fatigue or low mood. Ask about sleep, appetite, interest and thoughts of death, and rule out medical causes such as anaemia or thyroid disease.`],
  [`最近《さいきん》、 すぐ イライラ して、 家族《かぞく》 に 当《あ》たって しまう。`, `Lately I get irritated easily and take it out on my family.`, `Irritability can come from depression, mania, substance withdrawal or a medical cause. Ask about sleep and energy, substances, and any wish to hurt someone.`],
  [`誰《だれ》か に 呪《のろ》われて いる ん です。`, `Someone has put a curse on me.`, `May be a cultural or religious belief or a delusion. Ask whether family share it, how it affects daily life, and look for other psychotic symptoms.`],
  [`誰《だれ》か に 見《み》られて いる 気《き》 が する。`, `I feel like someone is watching me.`, `Possible paranoia. Ask who, why, and what she does about it; ask about voices and any plan to protect herself or harm others.`],
  [`頭《あたま》 が ぼーっと して、 話《はなし》 の 途中《とちゅう》 で 何《なに》 を 言《い》おう と した か 忘《わす》れて しまう。`, `My head is foggy and I forget what I was going to say halfway through.`, `May mean inattention, dissociation, absence episodes, confusion or a medication effect. Ask about timing, substances and medicines, head injury and seizures.`],
  [`切《き》れて くる と、 そわそわ して 落《お》ち着《つ》かない ん です。`, `When it starts wearing off, I get restless and can't settle. (切《き》れる: a drug or drink wearing off.)`, `切《き》れる suggests withdrawal from alcohol, a medicine or a drug. Ask what is wearing off, the last dose, and the symptoms.`],
  [`何《なに》か 悪《わる》い こと が 起《お》こりそう で、 胸《むね》 が ドキドキ する。`, `I feel something bad is about to happen, and my heart is pounding.`, `Possible panic attack or fear of losing control. Ask about palpitations, breathlessness, fear of dying and onset, and rule out cardiac causes.`],
  [`薬《くすり》 が 変《か》わって から、 ふわふわ して、 現実《げんじつ》 じゃ ない 感《かん》じ が する。`, `Since my medicine changed I feel floaty, as if things aren't real.`, `Depersonalization or derealization, a side effect, intoxication or a medical cause. Ask what it feels like, when it started, about the medicine change, trauma and substances.`],
  [`亡《な》くなった 母《はは》 の 声《こえ》 が、 時々《ときどき》 聞《き》こえる ん です。`, `Sometimes I hear my late mother's voice.`, `May be a normal grief experience or a hallucination. Ask when, whether others hear it, what the voice says and whether it gives commands.`],
  [`ご先祖《せんぞ》さま が 夢《ゆめ》 に 出《で》て きて、 私《わたし》 に 話《はな》しかけて くる。`, `My ancestors appear in my dreams and speak to me.`, `May be a religious or cultural experience or a hallucination. Ask what they say, how the person and family understand it, whether it happens awake, and whether commands or impairment are present.`],
  [`私《わたし》 なんか、 いて も いなくて も 同《おな》じ です。`, `It makes no difference whether someone like me is here or not.`, `Worthlessness, a depressive cognition and a suicide risk factor. Ask about hopelessness and suicidal thoughts.`],
  [`息《いき》 が 苦《くる》しくて、 うまく 吸《す》えない 感《かん》じ が する。`, `I feel breathless, as if I can't breathe in properly.`, `Can be medical (asthma, heart, lung) or panic. Check vital signs first, then ask about panic and anxiety.`],
  [`肩《かた》こり と 頭痛《ずつう》 が ずっと 続《つづ》いて いて。`, `My stiff shoulders and headache just go on and on.`, `Often a bodily way of describing stress or depression, but also check blood pressure and medical causes. Ask about work, money and family stressors, and about mood.`],
  [`もう、 ちょっと…。 疲《つか》れちゃって。`, `It's just... I'm worn out. (The trailing ちょっと softens something hard to say.)`, `May mean being tired of life. Ask directly what she is tired of, whether she has thought of dying, and about plans.`],
  [`死《し》にたい と 思《おも》う けど、 実際《じっさい》 に は しません。`, `I think I want to die, but I wouldn't actually do it.`, `Passive suicidal ideation with a stated barrier. Explore the barrier (family, beliefs) and ask about plan, intent, means and past attempts.`],
  [`胸《むね》 が 苦《くる》しくて、 締《し》めつけられる 感《かん》じ が する。`, `My chest feels tight, as if something is squeezing it.`, `Can be a bodily expression of depression or anxiety, but rule out cardiac causes first.`],
  [`一人《ひとり》 で ぶつぶつ 言《い》って しまう ん です。`, `I find myself muttering to myself.`, `May be self-talk, a response to voices, or a sign of thought disorder. Ask what is said and whether anyone answers.`],
  [`これ 以上《いじょう》、 家族《かぞく》 に 迷惑《めいわく》 を かけたく ない。`, `I don't want to be any more trouble to my family.`, `Perceived burdensomeness is a major suicide risk factor. Ask directly about suicidal thoughts.`],
  [`心《こころ》 に ぽっかり 穴《あな》 が あいた みたい。`, `It's as if there is a gaping hole in my heart.`, `May mean grief, depression, numbness, dissociation or chronic emptiness. Clarify and screen for suicidal thoughts.`],
  [`同《おな》じ こと が 頭《あたま》 の 中《なか》 で ぐるぐる して、 どこ に も 出口《でぐち》 が ない。`, `The same things go round and round in my head and there's no way out.`, `Rumination with hopelessness or a feeling of being trapped. Clarify the stressor and ask about suicidal thoughts.`],
  [`飲《の》まない と、 嫌《いや》 な こと を 思《おも》い出《だ》して しまう ん です。`, `If I don't drink, I keep remembering bad things.`, `Alcohol used to cope with painful memories or mood. Screen for trauma, depression, and the amount and pattern of use.`],
  [`人混《ひとご》み に 行《い》く と、 気分《きぶん》 が 悪《わる》く なる。`, `When I go into crowds, I start to feel ill.`, `Possible panic, agoraphobia, social anxiety or a feared situation. Ask what she fears will happen and what she avoids.`],
  [`今夜《こんや》 は、 一人《ひとり》 に なりたく ない です。`, `I don't want to be on my own tonight.`, `May signal fear for safety, suicide risk or panic. Ask what she is afraid will happen if she is alone.`],
  [`はい、 はい、 大丈夫《だいじょうぶ》 です。 わかりました。`, `Yes, yes, I'm fine, I understand.`, `May reflect politeness or a wish not to trouble the doctor rather than understanding. Use teach-back: ask the patient to explain the plan in their own words.`]
];
