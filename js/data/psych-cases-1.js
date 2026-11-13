/* Case simulations, part 1. Same structure as Usap Tayo / Hablemos: { id, title, level, setting, steps: [{ who, line: [japanese, english], choices: [{ tl, en, score, fb }] }], summary: { findings, mse } }
   Patients and families are fictional. STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician. */
window.PSYCH_CASES = (window.PSYCH_CASES || []).concat([
  {
    id: `shota`,
    title: `First-episode psychosis`,
    level: `N4`,
    setting: `Outpatient clinic. Shota, 19, a warehouse worker, is brought by his mother, Mrs. Takahashi, who speaks only Japanese. He sits with his hood up and glances at the wall.`,
    steps: [
      {
        who: `Mrs. Takahashi`,
        line: [
          `先生《せんせい》、 助《たす》けて ください。 息子《むすこ》 が もう 部屋《へや》 から 出《で》て こない ん です。 家族《かぞく》 と ご飯《はん》 も 食《た》べなく なって しまって……`,
          `Doctor, please help us. My son doesn't come out of his room anymore. He doesn't even eat with the family now...`
        ],
        choices: [
          {
            tl: `連《つ》れて きて くださって ありがとう ございます、 高橋《たかはし》さん。 まず 翔太《しょうた》さん と 二人《ふたり》 で お話《はなし》 して、 その 後《あと》 で お母《かあ》さん から も お話《はなし》 を 伺《うかが》って も いい です か。`,
            en: `Thank you for bringing him, Mrs. Takahashi. May I first speak with Shota on his own, and then hear from you as well?`,
            score: 2,
            fb: `Good. You thank the mother, plan to see the patient alone, and promise her a turn.`
          },
          {
            tl: `息子《むすこ》さん に 何《なに》 が あった ん です か。`,
            en: `What happened to your son?`,
            score: 1,
            fb: `Acceptable, but the patient should also get a chance to speak for himself.`
          },
          {
            tl: `息子《むすこ》さん は 頭《あたま》 が おかしく なった ん です か。`,
            en: `Has your son gone crazy?`,
            score: 0,
            fb: `Avoid 頭《あたま》 が おかしい ("crazy in the head"). It stigmatizes, frightens the family, and makes the patient defensive.`
          }
        ]
      },
      {
        who: `Shota`,
        line: [
          `俺《おれ》 は 病気《びょうき》 じゃ ない。 おかしい の は あいつら の 方《ほう》 だ。`,
          `I'm not sick. They're the ones with the problem.`
        ],
        choices: [
          {
            tl: `「あいつら」 と いう の は、 誰《だれ》 の こと です か。`,
            en: `When you say "them", who do you mean?`,
            score: 2,
            fb: `Good. You follow his words with curiosity. This invites him to describe the persecutory content without a fight.`
          },
          {
            tl: `そう です か。 夜《よる》 は 眠《ねむ》れて います か。`,
            en: `I see. Are you sleeping at night?`,
            score: 1,
            fb: `A safe question, but you missed an opening to hear his own account.`
          },
          {
            tl: `いいえ、 病気《びょうき》 です よ。 薬《くすり》 を 飲《の》む 必要《ひつよう》 が あります。`,
            en: `No, you are sick. You need to take medicine.`,
            score: 0,
            fb: `Confronting insight this early damages rapport. Build trust first.`
          }
        ]
      },
      {
        who: `Shota`,
        line: [
          `隣《となり》 の 人《ひと》 たち が 俺《おれ》 を 見張《みは》ってる。 壁越《かべご》し に 俺《おれ》 の 話《はなし》 を してる の が 聞《き》こえる。 それ に、 職場《しょくば》 の 同僚《どうりょう》 に 呪《のろ》い を かけられた ん だ。`,
          `The neighbors are watching me. I can hear them through the wall, talking about me. And a coworker put a curse on me.`
        ],
        choices: [
          {
            tl: `話《はな》して くださって ありがとう ございます。 翔太《しょうた》さん が どう 感《かん》じて いる か、 理解《りかい》 したい ん です。 隣《となり》 の 人《ひと》 たち は 翔太《しょうた》さん の こと を 何《なん》 と 言《い》って います か。`,
            en: `Thank you for telling me. I want to understand how you experience it. What do the neighbors say about you?`,
            score: 2,
            fb: `Good. You accept his explanation as his experience, neither confirming nor arguing, and ask for the content of the voices.`
          },
          {
            tl: `これ は いつ ごろ から 始《はじ》まりました か。`,
            en: `When did all this start?`,
            score: 1,
            fb: `Useful history, but ask about the content while he is talking.`
          },
          {
            tl: `呪《のろ》い なんて ありません よ、 翔太《しょうた》さん。`,
            en: `There's no such thing as a curse, Shota.`,
            score: 0,
            fb: `Arguing with a belief shuts him down. In many families a curse (呪《のろ》い) or a spirit attachment (霊《れい》 が つく) is a shared explanatory model, so ask about it later with respect.`
          }
        ]
      },
      {
        who: `Shota`,
        line: [
          `俺《おれ》 は 役立《やくた》たず だ、 消《き》えた 方《ほう》 が いい って 言《い》って くる。 たまに 命令《めいれい》 も して くる。`,
          `They say I'm useless, that I'd be better off disappearing. Sometimes they give me orders.`
        ],
        choices: [
          {
            tl: `どんな 命令《めいれい》 です か。 自分《じぶん》 を 傷《きず》つけろ とか、 誰《だれ》 か を 傷《きず》つけろ とか 言《い》われる こと は あります か。`,
            en: `What kind of orders? Do they ever tell you to hurt yourself or to hurt someone else?`,
            score: 2,
            fb: `Essential. Commanding voices need an immediate safety question about harm to self and others.`
          },
          {
            tl: `その 声《こえ》 は 男《おとこ》 の 声《こえ》 です か、 女《おんな》 の 声《こえ》 です か。`,
            en: `Is the voice a man's or a woman's?`,
            score: 1,
            fb: `Relevant detail, but risk comes first.`
          },
          {
            tl: `気《き》 に しない よう に して ください。`,
            en: `Try not to pay attention to them.`,
            score: 0,
            fb: `This dismisses him and skips the risk assessment.`
          }
        ]
      },
      {
        who: `Shota`,
        line: [
          `屋上《おくじょう》 から 飛《と》び降《お》りろ って 言《い》われる。 やらない けど…… たぶん。`,
          `They tell me to jump off the roof. I won't do it... probably.`
        ],
        choices: [
          {
            tl: `話《はな》して くださって ありがとう ございます。 死《し》のう と 考《かんが》えた こと は あります か。 何《なに》 か 準備《じゅんび》 を した こと は あります か。`,
            en: `Thank you for telling me. Have you thought about killing yourself? Have you made any preparations?`,
            score: 2,
            fb: `Good. You thank him, then ask directly about suicidal thoughts and preparation.`
          },
          {
            tl: `声《こえ》 は どの くらい の 頻度《ひんど》 で 聞《き》こえます か。`,
            en: `How often do you hear the voices?`,
            score: 1,
            fb: `Useful, but clarify suicidal intent first.`
          },
          {
            tl: `やらない なら、 よかった です。`,
            en: `Good, if you're not going to do it.`,
            score: 0,
            fb: `たぶん (probably) is ambivalence. Explore it. Do not accept reassurance.`
          }
        ]
      },
      {
        who: `Mrs. Takahashi`,
        line: [
          `最初《さいしょ》 は 霊能者《れいのうしゃ》 の 方《かた》 に 見《み》て もらった ん です。 悪《わる》い もの が ついて いる って 言《い》われて…… 私《わたし》、 もう 分《わ》からなくて、 先生《せんせい》。`,
          `First I had a spiritual healer see him. They said something bad had attached to him... I just don't know anymore, doctor.`
        ],
        choices: [
          {
            tl: `お気持《きも》ち は よく 分《わ》かります、 高橋《たかはし》さん。 お祈《いの》り や お祓《はら》い と、 お薬《くすり》 の 治療《ちりょう》 は 一緒《いっしょ》 に できます よ。 その 後《あと》、 翔太《しょうた》さん に どんな 変化《へんか》 が ありました か。`,
            en: `I understand how you feel, Mrs. Takahashi. Prayer or purification rites and treatment with medicine can go together. What changes have you seen in Shota since then?`,
            score: 2,
            fb: `Good. You respect her explanation, include her faith in the plan, and gather collateral. This improves trust and adherence.`
          },
          {
            tl: `そう です か。 こういう 状態《じょうたい》 は どの くらい 続《つづ》いて います か。`,
            en: `I see. How long has he been like this?`,
            score: 1,
            fb: `Needed information, but acknowledge her belief and effort first.`
          },
          {
            tl: `霊能者《れいのうしゃ》 なんて、 こういう こと に は 役《やく》 に 立《た》ちません。 何《なに》 も ついて いません よ。`,
            en: `Spiritual healers are no use for this. Nothing has attached to him.`,
            score: 0,
            fb: `Dismissing her beliefs can push the family away from care. She also needs to feel she did the right thing by seeking help.`
          }
        ]
      }
    ],
    summary: {
      findings: [
        `Withdrawal and functional decline (stays in his room, no longer eats with the family)`,
        `Persecutory delusions (neighbors, a coworker's curse) and derogatory third-person voices`,
        `Command hallucinations to disappear and to jump from the roof, with passive suicidal ideation and ambivalence: full risk assessment, likely admission`,
        `Poor insight`,
        `Family explanatory model (curse, spirit attachment, spiritual healer): respect it and include the mother in the plan`
      ],
      mse: `19M, hooded, poorly groomed, guarded, glancing at the wall as if attending to internal stimuli. Speech soft and sparse. Mood not stated; affect restricted. Thought process mostly linear. Thought content: persecutory delusions; passive SI with command hallucinations to jump. Perception: auditory hallucinations, third-person, derogatory, command type. Cognition grossly intact. Insight poor. Judgment impaired.`
    }
  },
  {
    id: `yumiko`,
    title: `Depression and suicide risk`,
    level: `N4`,
    setting: `Emergency department. Yumiko, 46, a hotel housekeeper and mother of three, was brought by her sister a week after taking a handful of the sister's pills. She is separated from her husband and speaks quietly.`,
    steps: [
      {
        who: `Yumiko`,
        line: [
          `とても 疲《つか》れて いる ん です、 先生《せんせい》。 自律神経《じりつしんけい》 が おかしく なって しまって、 もう 何《なに》 も できない ん です。`,
          `I'm so tired, doctor. My autonomic nerves have gone wrong, and I can't do anything anymore.`
        ],
        choices: [
          {
            tl: `来《き》て くださって ありがとう ございます、 由美子《ゆみこ》さん。 調子《ちょうし》 が 悪《わる》く なって から の こと を 聞《き》かせて ください。`,
            en: `Thank you for coming, Yumiko. Tell me about what has happened since you started feeling unwell.`,
            score: 2,
            fb: `Good. You treat 自律神経《じりつしんけい》 が おかしい ("my autonomic nerves are off"), a common lay way of naming distress, as an idiom of distress and ask an open question about context.`
          },
          {
            tl: `どこ か 痛《いた》い ところ は あります か。`,
            en: `Do you have pain anywhere?`,
            score: 1,
            fb: `Reasonable, but it keeps the talk on the body and closes the door on her story.`
          },
          {
            tl: `それ は 気《き》 の せい です よ。`,
            en: `That's just in your head.`,
            score: 0,
            fb: `気《き》 の せい ("it's just your imagination") invalidates her way of naming her suffering.`
          }
        ]
      },
      {
        who: `Yumiko`,
        line: [
          `夫《おっと》 が 出《で》て いって から です。 眠《ねむ》れない し、 ほとんど 食《た》べられません。 子《こ》ども たち に 申《もう》し訳《わけ》ない と 思《おも》って います。`,
          `Since my husband left. I can't sleep, and I can hardly eat. I feel guilty toward my children.`
        ],
        choices: [
          {
            tl: `大変《たいへん》 な 思《おも》い を されて います ね。 睡眠《すいみん》 や 食欲《しょくよく》 は いかが です か。 以前《いぜん》 楽《たの》しめて いた こと が、 楽《たの》しめなく なって います か。`,
            en: `You are going through a very hard time. How have your sleep and appetite been? Have you stopped enjoying the things you used to enjoy?`,
            score: 2,
            fb: `Good. You show empathy first, then screen for sleep, appetite, and loss of interest.`
          },
          {
            tl: `お子《こ》さん は 何人《なんにん》 です か。`,
            en: `How many children do you have?`,
            score: 1,
            fb: `Shows interest, but it does not move the assessment forward.`
          },
          {
            tl: `お子《こ》さん の ため に、 強《つよ》く ならない と だめ です よ。`,
            en: `You have to be strong for your children.`,
            score: 0,
            fb: `This adds to her guilt and shuts down what she is feeling.`
          }
        ]
      },
      {
        who: `Yumiko`,
        line: [
          `もう 限界《げんかい》 です、 先生《せんせい》。 子《こ》ども たち は 私《わたし》 が いない 方《ほう》 が いい ん じゃ ない か って、 時々《ときどき》 思《おも》う ん です。`,
          `I can't take it anymore, doctor. Sometimes I think my children would be better off without me.`
        ],
        choices: [
          {
            tl: `「もう 限界《げんかい》」 と おっしゃいました が、 死《し》にたい と 思《おも》う こと は あります か。`,
            en: `You said you can't take it anymore. Do you ever think about wanting to die?`,
            score: 2,
            fb: `Excellent. もう 限界《げんかい》 ("I'm at my limit") and 私《わたし》 が いない 方《ほう》 が いい ("better off without me") are cues. Ask directly, in plain words. Asking does not plant the idea.`
          },
          {
            tl: `眠《ねむ》れる よう に、 お薬《くすり》 を 出《だ》して おきます ね。`,
            en: `I'll prescribe something to help you sleep.`,
            score: 1,
            fb: `Treatment may help, but it comes after you know her risk.`
          },
          {
            tl: `そんな ふう に 考《かんが》えない で ください。 お子《こ》さん たち に は あなた が 必要《ひつよう》 です。`,
            en: `Please don't think that way. Your children need you.`,
            score: 0,
            fb: `This shuts down disclosure and can deepen her sense of being a burden.`
          }
        ]
      },
      {
        who: `Yumiko`,
        line: [
          `はい…… 先週《せんしゅう》、 姉《あね》 の 薬《くすり》 を たくさん 飲《の》んで しまいました。 すぐ 後悔《こうかい》 して、 姉《あね》 に 電話《でんわ》 しました。`,
          `Yes... last week I took a lot of my sister's pills. I regretted it right away and called her.`
        ],
        choices: [
          {
            tl: `話《はな》して くださって ありがとう ございます。 今《いま》 も 自分《じぶん》 を 傷《きず》つけたい 気持《きも》ち は あります か。 ご自宅《じたく》 や ご実家《じっか》 に、 お薬《くすり》 など、 自分《じぶん》 を 傷《きず》つける の に 使《つか》えそう な もの は あります か。`,
            en: `Thank you for telling me. Do you still feel like hurting yourself? Is there anything at your home or your family home, such as medicines, that you could use to hurt yourself?`,
            score: 2,
            fb: `Good. You thank her, check current intent, and ask the means question in general terms: medicines or anything else at home and at the family home.`
          },
          {
            tl: `今日《きょう》 の ご気分《きぶん》 は いかが です か。`,
            en: `How are you feeling today?`,
            score: 1,
            fb: `A soft question, but it misses the chance to assess current intent and access to means.`
          },
          {
            tl: `そんな こと を したら、 ご先祖様《せんぞさま》 が 悲《かな》しみます よ、 由美子《ゆみこ》さん。`,
            en: `Your ancestors would be sad if you did that, Yumiko.`,
            score: 0,
            fb: `Her faith may protect her. Using it to shame her at this moment makes her hide things.`
          }
        ]
      },
      {
        who: `Yumiko`,
        line: [
          `家《いえ》 の 薬《くすり》 は 姉《あね》 が 全部《ぜんぶ》 持《も》って いきました。 実家《じっか》 に は、 まだ 家族《かぞく》 の 薬《くすり》 が 置《お》いて あります。 でも、 もう そんな こと は しません…… ご先祖様《せんぞさま》 に 顔向《かおむ》け できません から。`,
          `My sister took all the medicines from my home. There are still family medicines at our family home. But I won't do anything like that again... I couldn't face my ancestors.`
        ],
        choices: [
          {
            tl: `お寺《てら》 や お墓参《はかまい》り は、 由美子《ゆみこ》さん の 支《ささ》え に なります ね。 それ でも、 お兄《にい》さん に 実家《じっか》 の お薬《くすり》 を 片付《かたづ》けて もらって、 お姉《ねえ》さん に お薬《くすり》 を 預《あず》かって もらう の は いかが です か。 それ から、 二十四時間《にじゅうよじかん》 電話《でんわ》 や メッセージ で 相談《そうだん》 できる 窓口《まどぐち》 の 番号《ばんごう》 を お渡《わた》し します。`,
            en: `Your visits to the temple and to your mother's grave can be a support for you. Even so, would it be all right to ask your brother to clear the medicines out of the family home and your sister to keep your medicines for you? I'll also give you the number of a crisis line you can call or message 24 hours a day.`,
            score: 2,
            fb: `Good. You use her faith as a strength, plan means restriction with family, and give a 24-hour crisis line. Give her the local number in writing.`
          },
          {
            tl: `それ を 聞《き》いて 安心《あんしん》 しました。 また 来週《らいしゅう》 お会《あ》い しましょう。`,
            en: `That reassures me. I'll see you next week.`,
            score: 1,
            fb: `Follow-up matters, but ご先祖様《せんぞさま》 に 顔向《かおむ》け できません ("I couldn't face my ancestors") is not a safety plan. Means restriction is still needed.`
          },
          {
            tl: `お寺《てら》 に 通《かよ》って いる なら、 心配《しんぱい》 ありません ね。`,
            en: `If you go to the temple, there is nothing to worry about.`,
            score: 0,
            fb: `Faith can be protective but does not remove risk, and she has just attempted. Do not take reassurance in place of a plan.`
          }
        ]
      }
    ],
    summary: {
      findings: [
        `Severe depressive episode after her husband left: low mood, poor sleep and appetite, guilt, hopelessness`,
        `Perceived burdensomeness and a suicide attempt by overdose last week, with regret and a call for help`,
        `Means: medicines (her sister's sleeping medicine, which she took; any antidepressant she is prescribed; medicines at home and at the family home); her sister keeps and gives her medicines, her brother clears the family home`,
        `Protective factors: her children, her sister, her faith`,
        `Needs a written safety plan and the local 24-hour crisis line in writing`
      ],
      mse: `46F, tired-appearing, tearful, cooperative. Speech soft, slowed. Mood "とても 疲《つか》れて いる" (very tired); affect depressed, congruent. Thought process linear. Thought content: guilt, hopelessness, passive and recent active suicidal thoughts with a recent attempt; no psychotic features elicited. Cognition grossly intact. Insight fair. Judgment fair.`
    }
  },
  {
    id: `ren`,
    title: `Manic episode`,
    level: `N3`,
    setting: `Emergency department. Ren, 24, a DJ and part-time ride-hailing driver, is brought by his girlfriend, Misaki. He keeps standing up and talks fast.`,
    steps: [
      {
        who: `Misaki`,
        line: [
          `先生《せんせい》、 彼《かれ》、 五日《いつか》 も 寝《ね》て いない ん です。 DJ の 機材《きざい》 に 四十万円《よんじゅうまんえん》 も 使《つか》って、 神様《かみさま》 に 選《えら》ばれた って 言《い》って いる ん です。`,
          `Doctor, he hasn't slept for five nights. He spent 400,000 yen on DJ equipment, and he says God chose him.`
        ],
        choices: [
          {
            tl: `連《つ》れて きて くださって ありがとう ございます、 美咲《みさき》さん。 蓮《れん》さん、 ここ 数日《すうじつ》、 どの くらい 眠《ねむ》れて います か。 元気《げんき》 や 体力《たいりょく》 は どう です か。`,
            en: `Thank you for bringing him, Misaki. Ren, how much have you been sleeping these past few days? How is your energy?`,
            score: 2,
            fb: `Good. You thank the partner and open with sleep, a key feature to confirm in mania.`
          },
          {
            tl: `貯金《ちょきん》 は いくら ぐらい あります か。`,
            en: `About how much savings do you have?`,
            score: 1,
            fb: `Spending matters, but the question is too narrow as an opener and may feel like an audit.`
          },
          {
            tl: `ただ 遊《あそ》び回《まわ》って いた だけ でしょう。`,
            en: `He was probably just out partying.`,
            score: 0,
            fb: `This minimizes five sleepless nights and a serious change from his usual self.`
          }
        ]
      },
      {
        who: `Ren`,
        line: [
          `寝《ね》る なんて 時間《じかん》 の 無駄《むだ》 です よ、 先生《せんせい》！ 二時間《にじかん》 寝《ね》れば 元気《げんき》 いっぱい。 俺《おれ》、 神様《かみさま》 に 選《えら》ばれた ん です。 音楽《おんがく》 を 世界中《せかいじゅう》 に 届《とど》ける ん です よ！`,
          `Sleeping is a waste of time, doctor! Two hours and I'm full of energy. God chose me. I'm going to take music to the whole world!`
        ],
        choices: [
          {
            tl: `エネルギー が あって、 計画《けいかく》 も たくさん ある ん です ね。 こういう 状態《じょうたい》 は 何日《なんにち》 くらい 続《つづ》いて います か。 この 数日《すうじつ》 で 何《なに》 を 買《か》いました か。`,
            en: `I can see you have a lot of energy and a lot of plans. How many days has it been like this? What have you bought in the past few days?`,
            score: 2,
            fb: `Good. You acknowledge him without arguing, then ask about duration and spending.`
          },
          {
            tl: `お仕事《しごと》 は 何《なに》 を されて います か。`,
            en: `What do you do for work?`,
            score: 1,
            fb: `Safe, but it can feed the grandiose talk without gathering what you need.`
          },
          {
            tl: `そんな こと は ありえません よ、 蓮《れん》さん。`,
            en: `That's impossible, Ren.`,
            score: 0,
            fb: `Arguing with grandiosity escalates a manic patient and ends the interview.`
          }
        ]
      },
      {
        who: `Ren`,
        line: [
          `機材《きざい》 は 買《か》いました けど、 あれ は 投資《とうし》 です から。 十倍《じゅうばい》 に なって 返《かえ》って きます よ。`,
          `Yes, I bought the equipment, but it's an investment. It'll come back to me ten times over.`
        ],
        choices: [
          {
            tl: `蓮《れん》さん に とって は 投資《とうし》 なん です ね。 お体《からだ》 の こと が 心配《しんぱい》 な ので 伺《うかが》いたい ん です が、 今週《こんしゅう》、 お酒《さけ》 を 飲《の》んだり、 覚醒剤《かくせいざい》 や 大麻《たいま》 の よう な 薬物《やくぶつ》 を 使《つか》ったり しました か。`,
            en: `I understand that for you it is an investment. I'm asking because I'm concerned about your health: this week, have you had alcohol, or used any drug such as methamphetamine or cannabis?`,
            score: 2,
            fb: `Good. You accept his view, give the reason for the question, and name specific substances without accusing him. Stimulants can cause or worsen a manic picture.`
          },
          {
            tl: `薬物《やくぶつ》 を 使《つか》って います か。`,
            en: `Do you use drugs?`,
            score: 1,
            fb: `The topic is right, but a vague, blunt question gets a quick "no". Name substances and explain why you ask.`
          },
          {
            tl: `どうせ クスリ を やった ん でしょう。 だから そう なって いる ん です よ。`,
            en: `You must have taken drugs. That's why you're like this.`,
            score: 0,
            fb: `An accusation. It breaks trust and also closes your differential too early.`
          }
        ]
      },
      {
        who: `Ren`,
        line: [
          `シャブ を 二回《にかい》 くらい。 体《からだ》 が もつ よう に。 でも、 それ は 問題《もんだい》 じゃ ない。 俺《おれ》 は 大丈夫《だいじょうぶ》 です から、 薬《くすり》 なんて いりません。`,
          `Meth a couple of times, to keep going. But that's not the problem. I'm fine, so I don't need any pills.`
        ],
        choices: [
          {
            tl: `正直《しょうじき》 に 話《はな》して くださって ありがとう ございます。 とても 助《たす》かります。 眠《ねむ》れる よう に なる お薬《くすり》 を 飲《の》む と したら、 何《なに》 が 心配《しんぱい》 です か。`,
            en: `Thank you for being honest, that really helps me. If you were to take a medicine that helps you sleep, what would worry you about it?`,
            score: 2,
            fb: `Good. You thank him for the disclosure and explore his concern about medicine, which opens a conversation about adherence.`
          },
          {
            tl: `お薬《くすり》 は 飲《の》まない と いけません。 医者《いしゃ》 が そう 言《い》って いる ん です から。`,
            en: `You have to take the medicine. The doctor says so.`,
            score: 1,
            fb: `The goal is right but the order is not persuasive. Ask what worries him first.`
          },
          {
            tl: `お薬《くすり》 を 飲《の》まない なら、 帰《かえ》らせません よ。`,
            en: `If you don't take the medicine, we won't let you go home.`,
            score: 0,
            fb: `A threat is not informed consent. Use persuasion and explain risks and benefits.`
          }
        ]
      }
    ],
    summary: {
      findings: [
        `At least five days of elevated and irritable mood, little sleep (about 2 hours), grandiosity with religious content, pressured speech`,
        `Excessive spending (400,000 yen) and flight of ideas`,
        `Methamphetamine use twice this week can cause or mimic mania: get a drug screen and ask about earlier episodes`,
        `Manic episode: bipolar I disorder versus stimulant-induced mania; clarify with the course after abstinence and any past episodes`,
        `Insight poor`
      ],
      mse: `24M, restless, hyperactive, standing often. Speech rapid and pressured. Mood "大丈夫《だいじょうぶ》" (fine); affect expansive and irritable. Thought process: flight of ideas. Thought content: grandiose, religious (chosen by God). No hallucinations elicited. Cognition grossly intact. Insight poor. Judgment impaired.`
    }
  },
  {
    id: `shigeru`,
    title: `Delirium in an older adult`,
    level: `N4`,
    setting: `Medical floor, evening. Mr. Shigeru Yamada, 78, a retired rice farmer, is pulling at the sheet and looking at the window. His daughter, Keiko, is at the bedside.`,
    steps: [
      {
        who: `Mr. Yamada`,
        line: [
          `あんた、 誰《だれ》 だ？ ここ は どこ だ？ 窓《まど》 に 子《こ》ども が いる！`,
          `Who are you? Where am I? There are children at the window!`
        ],
        choices: [
          {
            tl: `山田《やまだ》さん、 私《わたし》 は 医者《いしゃ》 です。 ここ は 病院《びょういん》 です から、 大丈夫《だいじょうぶ》 です よ。 山田《やまだ》さん を お手伝《てつだ》い する ため に 来《き》ました。`,
            en: `Mr. Yamada, I'm a doctor. This is the hospital, so you are safe. I'm here to help you.`,
            score: 2,
            fb: `Good. Calm, simple orientation and reassurance: who you are, where he is, and that he is safe.`
          },
          {
            tl: `窓《まど》 に 子《こ》ども は いません よ、 山田《やまだ》さん。`,
            en: `There are no children at the window, Mr. Yamada.`,
            score: 1,
            fb: `A gentle correction is acceptable, but start with who you are and where he is.`
          },
          {
            tl: `起《お》き上《あ》がらない よう に、 ベッド に 縛《しば》って おきましょう。`,
            en: `Let's tie him to the bed so he doesn't get up.`,
            score: 0,
            fb: `Restraint is a last resort and often worsens delirium. Try reorientation and a calm room first.`
          }
        ]
      },
      {
        who: `Keiko`,
        line: [
          `先生《せんせい》、 昨日《きのう》 は 普通《ふつう》 だった ん です。 私《わたし》 の こと も 分《わ》かって、 おしゃべり も して いました。 昨夜《ゆうべ》 から こう なん です。 水《みず》 も ほとんど 飲《の》まない し、 トイレ の とき に 痛《いた》い って 言《い》って います。`,
          `Doctor, yesterday he was fine. He even recognized me and chatted. He's been like this since last night. He barely drinks water, and he says it hurts when he goes to the toilet.`
        ],
        choices: [
          {
            tl: `とても 参考《さんこう》 に なります、 恵子《けいこ》さん。 熱《ねつ》 や、 トイレ の とき の 痛《いた》み、 新《あたら》しい お薬《くすり》 は ありました か。 それ と、 こう なる 前《まえ》 は、 もの忘《わす》れ は ありません でした か。`,
            en: `That helps me a lot, Keiko. Has he had a fever, pain when passing urine, or any new medicine? And before this, was his memory normal?`,
            score: 2,
            fb: `Good. Collateral is key. Sudden onset over hours with fluctuation points to delirium. Dementia is gradual. You also look for causes: infection, dehydration, drugs.`
          },
          {
            tl: `お父《とう》さん は おいくつ です か。`,
            en: `How old is your father?`,
            score: 1,
            fb: `Harmless, but you can get age from the chart. Use her time to learn onset and course.`
          },
          {
            tl: `年《とし》 の せい です よ、 恵子《けいこ》さん。 きっと 認知症《にんちしょう》 です。`,
            en: `It's his age, Keiko. It must be dementia.`,
            score: 0,
            fb: `An acute change is not "just" dementia, and 年《とし》 の せい ("it's just age") is a phrase to avoid. Missing delirium means missing a treatable cause.`
          }
        ]
      },
      {
        who: `Mr. Yamada`,
        line: [
          `ええと…… ここ は 田舎《いなか》 の 田《た》んぼ だ。 源《げん》さん は もう 来《き》た か？`,
          `Let's see... this is the rice paddy back home. Has Gen come yet?`
        ],
        choices: [
          {
            tl: `そう です か、 山田《やまだ》さん。 ここ が どこ か、 今日《きょう》 が だいたい 何月《なんがつ》 何日《なんにち》 か、 分《わ》かります か。 その 後《あと》 で、 日曜日《にちようび》 から 逆《ぎゃく》 に 曜日《ようび》 を 言《い》って もらいます ね。`,
            en: `I see, Mr. Yamada. Do you know where we are, and roughly what the date is today? After that, I'll ask you to say the days of the week backward, starting from Sunday.`,
            score: 2,
            fb: `Good. You test orientation kindly and then attention, the core deficit in delirium. In dementia, attention is usually preserved early, while in primary psychosis orientation and attention are usually intact.`
          },
          {
            tl: `娘《むすめ》さん の お名前《なまえ》 は 何《なん》 です か。`,
            en: `What is your daughter's name?`,
            score: 1,
            fb: `Tests orientation to person, but it is not enough, and it does not test attention.`
          },
          {
            tl: `いいえ、 山田《やまだ》さん、 それ は 違《ちが》います よ。`,
            en: `No, Mr. Yamada, that's wrong.`,
            score: 0,
            fb: `This shames him and does not test anything. Keep a calm tone and use simple questions.`
          }
        ]
      }
    ],
    summary: {
      findings: [
        `Acute onset over hours with a fluctuating course`,
        `Disorientation to place and time, inattention, and visual hallucinations (children at the window)`,
        `Daughter reports poor intake and urinary symptoms: possible UTI and dehydration`,
        `Most consistent with delirium: find and treat the cause, avoid restraints, review sedating medicines`
      ],
      mse: `78M, restless, picking at the sheet. Speech fragmented, mildly disorganized. Mood not assessed; affect labile. Thought process tangential. Perception: visual hallucinations. Disoriented to place and time (believes he is in the rice paddy back home). Attention impaired (cannot do days backward). Insight absent. Judgment impaired.`
    }
  }
]);
