/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* Case simulations, part 4: played as the ward nurse (0.18.0). Same structure as psych-cases-1.js, plus role: 'nurse'. Patients are fictional. */
window.PSYCH_CASES = (window.PSYCH_CASES || []).concat([
  {
    id: 'nurse-admit',
    role: 'nurse',
    title: 'Nurse: Shota arrives on the ward',
    level: 'N4',
    setting: 'Psychiatric ward, the evening of admission, after the doctor\'s assessment. Shota Takahashi, 19, a warehouse worker, hears voices and thinks people are watching him; he was admitted after barricading his bedroom door. His mother, Mrs. Takahashi, who speaks only Japanese, carries a bag of his things. You are the ward nurse, Kimura. Explain before you do anything, offer choices, and pass any new risk to the doctor.',
    steps: [
      {
        who: 'Mrs. Takahashi',
        line: [
          `すみません、 先生《せんせい》 に こちら の 病棟《びょうとう》 へ 行《い》く よう に 言《い》われました。 息子《むすこ》 の 翔太《しょうた》 です。`,
          `Excuse me, the doctor told us to come to this ward. This is my son, Shota.`
        ],
        choices: [
          {
            tl: `息子《むすこ》さん は 暴《あば》れたり しません か。`,
            en: `Your son won't get violent, will he?`,
            score: 0,
            fb: `Talking about him in the third person, in front of him, about violence, frightens both of them. Risk is assessed by watching and asking, not by a first remark like this.`
          },
          {
            tl: `こんばんは。 今夜《こんや》 担当《たんとう》 を させて いただく 看護師《かんごし》 の 木村《きむら》 です。 高橋《たかはし》 翔太《しょうた》さん です ね。 何《なん》 と お呼《よ》び すれば よろしい です か。`,
            en: `Good evening. I'm Kimura, the nurse looking after you tonight. You are Shota Takahashi, aren't you? What would you like me to call you?`,
            score: 2,
            fb: `Good. You greet them, give your name and role, speak to the patient himself, and ask how he wants to be addressed. A suspicious patient trusts a person with a name more than a uniform.`
          },
          {
            tl: `はい、 こちら へ どうぞ。`,
            en: `Yes, this way please.`,
            score: 1,
            fb: `Polite, but he still does not know who you are. Introduce yourself before you lead him anywhere.`
          }
        ]
      },
      {
        who: 'Shota',
        line: [
          `……翔太《しょうた》 で いい。 ここ、 カメラ ある の か。 誰《だれ》 か が 俺《おれ》 を 見《み》てる だろ。`,
          `...Shota is fine. Are there cameras here? Someone's watching me, right?`
        ],
        choices: [
          {
            tl: `カメラ なんて ありません よ。 気《き》 の せい です。`,
            en: `There are no cameras. It's just your imagination.`,
            score: 0,
            fb: `Arguing with the belief makes him trust you less, and you may not even be sure it is true. Never call his experience 気《き》 の せい ("just your imagination").`
          },
          {
            tl: `見《み》られて いる よう な 感《かん》じ が して、 落《お》ち着《つ》かない ん です ね。 この 病棟《びょうとう》 で は、 看護師《かんごし》 が 交代《こうたい》 で 皆《みな》さん の 様子《ようす》 を 見《み》 に 来《き》ます。 安全《あんぜん》 の ため で、 翔太《しょうた》さん だけ では なく、 皆《みな》さん に 同《おな》じ よう に して います。`,
            en: `You feel as if you're being watched, and it makes you uneasy. On this ward the nurses take turns checking on everyone. It's for safety, and we do it the same way for everyone, not only you.`,
            score: 2,
            fb: `Good. You name his feeling without confirming or arguing with the belief, and you explain honestly why staff will check on him. Checks that are explained in advance feel less like spying.`
          },
          {
            tl: `そう です か。 では、 お部屋《へや》 に 行《い》きましょう。`,
            en: `I see. Well, let's go to your room.`,
            score: 1,
            fb: `You avoid an argument, but you pass over his fear. Acknowledge it in one sentence before moving on.`
          }
        ]
      },
      {
        who: 'Shota',
        line: [
          `……で、 ここ で 何《なに》 を すれば いい の。`,
          `...So what am I supposed to do here?`
        ],
        choices: [
          {
            tl: `病棟《びょうとう》 の 決《き》まり は この 紙《かみ》 に 全部《ぜんぶ》 書《か》いて あります。 読《よ》んで おいて ください。`,
            en: `The ward rules are all written on this sheet. Please read it.`,
            score: 1,
            fb: `A written sheet helps, but a frightened patient on his first evening will not read it. Explain the basics aloud, then give the sheet.`
          },
          {
            tl: `今夜《こんや》 は 何《なに》 も しなくて 大丈夫《だいじょうぶ》 です。 ゆっくり 休《やす》んで ください。 お食事《しょくじ》 は 朝《あさ》、 昼《ひる》、 夕方《ゆうがた》 の 三回《さんかい》 で、 時間《じかん》 に なったら 声《こえ》 を かけます。 ナースステーション は ここ で、 夜《よる》 も 看護師《かんごし》 が います。`,
            en: `Tonight you don't have to do anything. Please rest. Meals are three times a day, morning, noon and evening, and we'll tell you when it's time. This is the nurses' station, and there are nurses here at night too.`,
            score: 2,
            fb: `Good. Short, concrete information about rest, meals and where to find a nurse makes a strange place predictable, and predictability lowers fear.`
          },
          {
            tl: `決《き》まり を 守《まも》らない と、 困《こま》ります から ね。`,
            en: `If you don't follow the rules, we'll have a problem.`,
            score: 0,
            fb: `Opening with a warning sounds like a threat and confirms his fear that this is a hostile place.`
          }
        ]
      },
      {
        who: 'Mrs. Takahashi',
        line: [
          `荷物《にもつ》 は これ です。 着替《きが》え を 持《も》って きました。`,
          `Here are his things. I brought a change of clothes.`
        ],
        choices: [
          {
            tl: `ありがとう ございます。 これ から 翔太《しょうた》さん と お母《かあ》さん と 一緒《いっしょ》 に、 お荷物《にもつ》 の 確認《かくにん》 を させて いただいて も よろしい です か。 入院《にゅういん》 される 方《かた》 全員《ぜんいん》 に お願《ねが》い して いる こと で、 皆《みな》さん に 安全《あんぜん》 に 過《す》ごして いただく ため です。`,
            en: `Thank you. May I check the belongings now, together with Shota and you? We ask this of everyone who is admitted, so that everyone can stay safe here.`,
            score: 2,
            fb: `Good. You ask permission, give the reason, say it applies to everyone, and do it with them. Explain before you do: this is the core of a respectful belongings check.`
          },
          {
            tl: `（何《なに》 も 言《い》わず に バッグ を 開《あ》ける。）`,
            en: `(Opens the bag without saying anything.)`,
            score: 0,
            fb: `Searching without explanation looks exactly like what a suspicious patient fears. It can provoke anger and damages trust from the first hour.`
          },
          {
            tl: `では、 中《なか》 を 確認《かくにん》 します ね。`,
            en: `Right, I'll check what's inside.`,
            score: 1,
            fb: `You tell them what you will do, but you do not ask, give no reason and do not include him. Ask, explain why, and check together.`
          }
        ]
      },
      {
        who: 'Shota',
        line: [
          `触《さわ》る な。 それ、 俺《おれ》 の だ。 何《なに》 か 入《い》れる つもり だろ。`,
          `Don't touch it. That's mine. You're going to put something in it, aren't you?`
        ],
        choices: [
          {
            tl: `何《なに》 も 入《い》れません よ。 そんな ふう に 考《かんが》える の は、 病気《びょうき》 の せい です。`,
            en: `We won't put anything in it. You only think that because you're ill.`,
            score: 0,
            fb: `Telling him his worry is "the illness" is a confrontation about his beliefs. It ends cooperation and makes the check harder.`
          },
          {
            tl: `すぐ 終《お》わります から、 少《すこ》し だけ 我慢《がまん》 して ください。`,
            en: `It'll be over soon, so please put up with it for a little.`,
            score: 1,
            fb: `Gentle in tone, but you carry on against his wish. Offer him a choice in how and when it is done.`
          },
          {
            tl: `翔太《しょうた》さん の 物《もの》 です から、 翔太《しょうた》さん の 目《め》 の 前《まえ》 で 確認《かくにん》 します。 ご自分《じぶん》 で 一《ひと》つ ずつ 出《だ》して いただいて も いい です よ。 今《いま》 が つらければ、 少《すこ》し 休《やす》んで から でも 大丈夫《だいじょうぶ》 です。`,
            en: `They're your things, so we'll check them in front of you. You can take them out yourself, one by one, if you like. If now is hard, it's fine to rest a little first.`,
            score: 2,
            fb: `Good. You respect his ownership, keep everything in view, and offer two choices: who takes the items out, and when. Choice and time give back some control.`
          }
        ]
      },
      {
        who: 'Shota',
        line: [
          `……じゃあ、 自分《じぶん》 で 出《だ》す。 （充電器《じゅうでんき》 の コード を 出《だ》す。） これ も 取《と》る の か。 どうせ 返《かえ》さない ん だろ。`,
          `...Fine, I'll take them out myself. (Takes out a charger cord.) Are you taking this too? You won't give it back anyway, will you?`
        ],
        choices: [
          {
            tl: `これ は ナースステーション で お預《あず》かり して、 退院《たいいん》 の とき に お返《かえ》し します。 使《つか》いたい とき は、 看護師《かんごし》 に 声《こえ》 を かけて ください。`,
            en: `We'll keep this for you at the nurses' station and give it back when you go home. When you want to use it, just ask a nurse.`,
            score: 2,
            fb: `Good. Kept, not taken: you say where it will be, that it comes back at discharge, and how to use it in the meantime. Cords are often kept for safety; follow your ward's list.`
          },
          {
            tl: `はい、 これ は 没収《ぼっしゅう》 です。`,
            en: `Yes, this is confiscated.`,
            score: 0,
            fb: `没収《ぼっしゅう》 (confiscation) is a word for punishment. It turns a safety routine into a penalty and confirms his suspicion.`
          },
          {
            tl: `決《き》まり なので、 お預《あず》かり します。`,
            en: `It's the rule, so we'll keep it.`,
            score: 1,
            fb: `Accurate, but he asked whether he will get it back. Answer that question: where it is kept and that it is returned.`
          }
        ]
      },
      {
        who: 'Shota',
        line: [
          `……今《いま》 も 声《こえ》 が 聞《き》こえる。 お前《まえ》ら も グル だ、 ここ から 出《で》て いけ って 言《い》ってる。`,
          `...I can hear the voice right now. It says you're all in on it, and that I should get out of here.`
        ],
        choices: [
          {
            tl: `そう です か。 では、 次《つぎ》 の 物《もの》 を 出《だ》して ください。`,
            en: `I see. Then please take out the next thing.`,
            score: 1,
            fb: `Calm, but you let a new command from the voices go by. A voice telling him to leave the ward is a new risk that needs asking about and reporting.`
          },
          {
            tl: `話《はな》して くださって ありがとう ございます。 その 声《こえ》 の とおり に しなければ いけない と 感《かん》じます か。 大事《だいじ》 な こと なので、 先生《せんせい》 に も 伝《つた》えます ね。 私《わたし》 は 近《ちか》く に います。`,
            en: `Thank you for telling me. Do you feel you have to do what the voice says? This is important, so I'll tell the doctor as well. I'll be close by.`,
            score: 2,
            fb: `Good. You thank him, neither confirm nor deny the voice, ask whether he feels he must obey it, and tell him you will report it. New command voices or a wish to leave go to the doctor now, not at the next round.`
          },
          {
            tl: `声《こえ》 なんて 聞《き》こえません よ。 気《き》 に しないで ください。`,
            en: `There's no voice. Don't pay attention to it.`,
            score: 0,
            fb: `This denies his experience and skips the risk question. He will stop telling staff what the voices say, which is the information that keeps him safe.`
          }
        ]
      },
      {
        who: 'Mrs. Takahashi',
        line: [
          `私《わたし》、 もう 帰《かえ》らない と いけない ん です けど、 一人《ひとり》 で 置《お》いて いく の が 心配《しんぱい》 で…… 面会《めんかい》 は できます か。 夜《よる》、 この 子《こ》 が 怖《こわ》く なったら……。`,
          `I have to go home now, but I'm worried about leaving him alone... Can I visit? If he gets frightened at night...`
        ],
        choices: [
          {
            tl: `心配《しんぱい》 です よね、 お母《かあ》さん。 面会《めんかい》 は、 病棟《びょうとう》 の 決《き》まり に 沿《そ》って できます。 詳《くわ》しい 時間《じかん》 は、 この 後《あと》 お伝《つた》え します。 翔太《しょうた》さん、 夜中《よなか》 でも 何《なに》 か あったら、 この ナースコール の ボタン を 押《お》して ください。 夜《よる》 も 看護師《かんごし》 が います から、 遠慮《えんりょ》 しないで 呼《よ》んで ください。`,
            en: `Of course you're worried, Mrs. Takahashi. Visits are possible under the ward's rules; I'll give you the times in a moment. Shota, if anything happens, even in the middle of the night, press this nurse call button. There are nurses here at night too, so please don't hesitate to call.`,
            score: 2,
            fb: `Good. You acknowledge the mother's worry, answer her question about visiting without promising what the ward rules decide, and show him how to call a nurse at night. Show the call button in person; do not just describe it.`
          },
          {
            tl: `大丈夫《だいじょうぶ》 です、 心配《しんぱい》 いりません。 どうぞ お帰《かえ》り ください。`,
            en: `It's fine, there's nothing to worry about. Please go home.`,
            score: 0,
            fb: `Empty reassurance dismisses her and answers neither question. The mother is a partner in his care; tell her how to visit and how he can get help.`
          },
          {
            tl: `面会《めんかい》 の 時間《じかん》 は 受付《うけつけ》 で 聞《き》いて ください。`,
            en: `Please ask at the reception desk about visiting hours.`,
            score: 1,
            fb: `It answers part of her question, but sends her away, and Shota still does not know how to call a nurse tonight.`
          }
        ]
      }
    ],
    summary: {
      findings: [
        `Introduced self by name and role, asked how he wished to be called (he chose 翔太《しょうた》), and explained the ward, rest, meals and the nurses' station`,
        `Belongings checked with permission, a reason and together; he took items out himself; charger cord kept at the nurses' station, to be returned at discharge`,
        `Suspicious of being watched; auditory hallucinations present on arrival, including a new command to leave the ward: not argued with or confirmed, asked whether he feels he must obey, reported to the doctor`,
        `Mother worried about leaving him: visiting explained under the ward rules; call button shown and use at night explained`
      ],
      mse: `19M, hood up, guarded, scanning the room. Speech soft, sparse, irritable when his bag was touched. Mood not stated; affect restricted and wary. Thought content: persecutory ideas (being watched, staff "in on it", fear that something would be put in his things). Perception: auditory hallucinations on arrival, command type (to leave the ward). Accepted choices and completed the belongings check himself. Insight poor. Nursing: report new command hallucinations and absconding risk to the doctor; regular checks explained to him; mother informed about visiting.`
    }
  },
  {
    id: 'nurse-meds',
    role: 'nurse',
    title: 'Nurse: Ren and the evening medicine',
    level: 'N4',
    setting: 'Psychiatric ward, day 3, the evening medicine round. Ren, 24, a DJ admitted with a manic episode, talks fast, walks up and down the corridor and says he feels better than ever. He was restrained once on the night of admission. You are the ward nurse, Kimura, with his evening medicine. Listen first, give simple true information, never trick or threaten, and report a refusal to the doctor.',
    steps: [
      {
        who: 'Ren',
        line: [
          `あ、 看護師《かんごし》さん！ 聞《き》いて よ、 今日《きょう》 も 絶好調《ぜっこうちょう》！ 新《あたら》しい 曲《きょく》 の アイデア が 止《と》まらない ん だ よ。`,
          `Oh, nurse! Listen, I'm on top form again today! Ideas for new tracks just keep coming.`
        ],
        choices: [
          {
            tl: `お薬《くすり》 です。 飲《の》んで ください。`,
            en: `Here's your medicine. Please take it.`,
            score: 1,
            fb: `Clear, but it skips the person. A short greeting and a moment of listening make the next minute much easier.`
          },
          {
            tl: `静《しず》か に して ください。 ほか の 患者《かんじゃ》さん の 迷惑《めいわく》 です。`,
            en: `Please be quiet. You're bothering the other patients.`,
            score: 0,
            fb: `A reprimand as the opening line starts a power struggle with a manic patient. If noise is a problem, ask gently later and give the reason.`
          },
          {
            tl: `蓮《れん》さん、 こんばんは。 看護師《かんごし》 の 木村《きむら》 です。 アイデア が たくさん 浮《う》かんで いる ん です ね。 夕方《ゆうがた》 の お薬《くすり》 の 時間《じかん》 なので、 少《すこ》し お話《はなし》 して も いい です か。`,
            en: `Good evening, Ren. I'm Kimura, the nurse. You have lots of ideas coming to you. It's time for your evening medicine, so may we talk for a minute?`,
            score: 2,
            fb: `Good. You greet him, say who you are, reflect what he said without feeding or arguing, and ask permission to talk about the medicine.`
          }
        ]
      },
      {
        who: 'Ren',
        line: [
          `薬《くすり》？ いらない いらない。 今《いま》 まで で 一番《いちばん》 調子《ちょうし》 いい ん だ から。 治《なお》ってる のに、 何《なん》 で 飲《の》む の？`,
          `Medicine? Don't need it, don't need it. I've never felt better. I'm cured, so why would I take it?`
        ],
        choices: [
          {
            tl: `今《いま》 は とても 調子《ちょうし》 が いい と 感《かん》じて いる ん です ね。 よかったら 教《おし》えて ください。 お薬《くすり》 の こと で、 何《なに》 か 嫌《いや》 な こと が あります か。`,
            en: `Right now you feel you're doing really well. If you don't mind, tell me: is there anything you dislike about the medicine?`,
            score: 2,
            fb: `Good. You acknowledge how he feels without agreeing that he is cured, then ask an open question about what he dislikes. A refusal often hides a side effect.`
          },
          {
            tl: `調子《ちょうし》 が いい の は、 病気《びょうき》 の せい です よ。`,
            en: `You only feel good because of the illness.`,
            score: 0,
            fb: `It may be true clinically, but said as a correction it is an argument, and an argument with a manic patient makes refusal more likely.`
          },
          {
            tl: `先生《せんせい》 の 指示《しじ》 なので、 飲《の》んで ください。`,
            en: `It's the doctor's order, so please take it.`,
            score: 1,
            fb: `True, but an appeal to authority does not answer his question. Find out his reason first.`
          }
        ]
      },
      {
        who: 'Ren',
        line: [
          `あれ 飲《の》む と、 頭《あたま》 が ぼーっと して、 体《からだ》 も 重《おも》い。 何《なに》 も かも 遅《おそ》く なる ん だ よ。 それ に、 手《て》 も ちょっと ふるえる し。`,
          `When I take it my head goes foggy and my body feels heavy. Everything slows down. And my hands shake a bit, too.`
        ],
        choices: [
          {
            tl: `最初《さいしょ》 は みんな そう です。 そのうち 慣《な》れます よ。`,
            en: `Everyone is like that at first. You'll get used to it.`,
            score: 1,
            fb: `Some effects do ease, but you close the topic without finding out more. A tremor needs a few questions and a report, not only reassurance.`
          },
          {
            tl: `教《おし》えて くださって ありがとう ございます。 それ は 大事《だいじ》 な こと です。 ぼーっと する の は、 昼間《ひるま》 も です か。 手《て》 の ふるえ は、 だんだん 強《つよ》く なって います か。 吐《は》き気《け》 や 下痢《げり》 は ありません か。`,
            en: `Thank you for telling me. That's important. Is the fogginess there in the daytime too? Is the hand shaking getting stronger? Any nausea or diarrhoea?`,
            score: 2,
            fb: `Good. You take the complaint seriously and ask simple follow-up questions. A tremor that gets worse, or comes with vomiting or diarrhoea, can be a sign of a medicine problem and goes to the doctor at once.`
          },
          {
            tl: `飲《の》まない と、 退院《たいいん》 できません よ。`,
            en: `If you don't take it, you won't be discharged.`,
            score: 0,
            fb: `A threat. It may feel like it works tonight, but it destroys trust and is not informed agreement. Discharge is the doctor's decision, made on many grounds.`
          }
        ]
      },
      {
        who: 'Ren',
        line: [
          `昼間《ひるま》 も ずっと ぼーっと してる。 ふるえ は 前《まえ》 と 同《おな》じ くらい。 お腹《なか》 は 平気《へいき》。 だから もう やめたい。 先生《せんせい》 に 言《い》って も、 どうせ 変《か》わらない し。`,
          `I'm foggy all day. The shaking is about the same as before. My stomach's fine. So I want to stop. Even if I tell the doctor, nothing will change anyway.`
        ],
        choices: [
          {
            tl: `じゃあ、 ご飯《はん》 に 混《ま》ぜて おきます ね。`,
            en: `Then I'll mix it into your food.`,
            score: 0,
            fb: `Never hide medicine in food or drink. Giving it without his knowledge is deception, it breaks trust when he finds out, and it is not a nurse's decision. Follow local law and your hospital's policy.`
          },
          {
            tl: `ぼーっと する 感《かん》じ や 手《て》 の ふるえ は、 お薬《くすり》 の 副作用《ふくさよう》 の こと が あります。 先生《せんせい》 は、 飲《の》む 時間《じかん》 や 量《りょう》 を 変《か》えたり、 ほか の 方法《ほうほう》 を 考《かんが》えたり できます。 今日《きょう》 の お話《はなし》 を、 先生《せんせい》 に お伝《つた》え して も いい です か。`,
            en: `Feeling foggy and a shaking hand can be side effects of the medicine. The doctor can change the time or the amount, or think about other options. May I pass on what you told me today to the doctor?`,
            score: 2,
            fb: `Good. Simple, accurate information: what he feels may be a side effect, and side effects can often be managed. You offer to tell the doctor and ask his permission, which shows his complaint leads somewhere.`
          },
          {
            tl: `わかりました。 先生《せんせい》 に 伝《つた》えて おきます。`,
            en: `All right. I'll tell the doctor.`,
            score: 1,
            fb: `Reporting is right, but he said nothing will change. Tell him simply that side effects can often be managed, so he sees why it is worth telling the doctor.`
          }
        ]
      },
      {
        who: 'Ren',
        line: [
          `いい よ、 伝《つた》えて。 でも 今夜《こんや》 は 飲《の》まない。 絶対《ぜったい》。 ……で、 また 押《お》さえて 注射《ちゅうしゃ》 とか する わけ？`,
          `Fine, tell them. But I'm not taking it tonight. No way. ...So, are you going to hold me down and inject me again?`
        ],
        choices: [
          {
            tl: `わかりました。 じゃあ、 今日《きょう》 は いい です。`,
            en: `All right. Then never mind for today.`,
            score: 1,
            fb: `You respect the refusal, but you leave it there. A refused dose is always recorded and reported to the doctor, and he still needs an answer to his fear.`
          },
          {
            tl: `わかりました。 今夜《こんや》 は 無理《むり》 に 飲《の》ませたり は しません。 飲《の》まなかった こと は 記録《きろく》 して、 先生《せんせい》 に お伝《つた》え します。 飲《の》まなかった から と いって、 押《お》さえて 注射《ちゅうしゃ》 を する こと は ありません。`,
            en: `All right. I won't make you take it tonight. I'll record that you didn't take it and let the doctor know. Not taking it is not a reason for us to hold you down and give you an injection.`,
            score: 2,
            fb: `Good. You respect the refusal, say openly that you will record and report it, and answer his fear directly. Being open about what you write keeps trust; the doctor decides what happens next.`
          },
          {
            tl: `飲《の》まない なら、 先生《せんせい》 に 言《い》って 注射《ちゅうしゃ》 に して もらいます よ。`,
            en: `If you won't take it, I'll get the doctor to give it as an injection.`,
            score: 0,
            fb: `Using the injection or the as-needed medicine as a threat is coercion. It confirms his fear from the night of admission and makes every later round harder.`
          }
        ]
      },
      {
        who: 'Ren',
        line: [
          `……ほんと に？ 最初《さいしょ》 の 夜《よる》 みたい に なる か と 思《おも》った。 あれ、 マジ で 怖《こわ》かった ん だ よ。`,
          `...Really? I thought it would be like the first night. That was seriously frightening.`
        ],
        choices: [
          {
            tl: `あれ は 仕方《しかた》 なかった ん です。`,
            en: `That couldn't be helped.`,
            score: 1,
            fb: `It may be true, but it defends the staff and skips his feeling. Acknowledge the fear first; a fuller talk about that night can come later.`
          },
          {
            tl: `怖《こわ》かった です よね。 話《はな》して くださって ありがとう ございます。 眠《ねむ》れない とき や 落《お》ち着《つ》かない とき に 飲《の》める お薬《くすり》 も、 先生《せんせい》 が 出《だ》して います。 罰《ばつ》 では なくて、 楽《らく》 に なる ため の もの です。 必要《ひつよう》 な とき は 言《い》って ください。`,
            en: `That must have been frightening. Thank you for telling me. The doctor has also prescribed a medicine you can take when you can't sleep or feel restless. It isn't a punishment; it's there to make things easier for you. Tell us when you need it.`,
            score: 2,
            fb: `Good. You validate the fear and present the as-needed medicine honestly, as help he can ask for, never as a threat. His fear of restraint is worth passing to the doctor too.`
          },
          {
            tl: `おとなしく して いれば、 押《お》さえたり しません よ。`,
            en: `As long as you behave, we won't hold you down.`,
            score: 0,
            fb: `A conditional threat. It tells him restraint is a punishment for behaviour, which is neither true nor safe to teach.`
          }
        ]
      },
      {
        who: 'Ren',
        line: [
          `……まあ、 明日《あした》 先生《せんせい》 と 話《はな》して みて も いい か な。 ぼーっと する の は、 ほんと に 嫌《いや》 なん だ。`,
          `...Well, maybe I could talk to the doctor tomorrow. I really hate feeling foggy.`
        ],
        choices: [
          {
            tl: `明日《あした》 先生《せんせい》 に 言《い》って も、 たぶん 同《おな》じ お薬《くすり》 です よ。`,
            en: `Even if you tell the doctor tomorrow, it'll probably be the same medicine.`,
            score: 0,
            fb: `This undoes the progress you made. Never predict the doctor's decision in a way that takes away his reason to talk.`
          },
          {
            tl: `ありがとう ございます。 明日《あした》 先生《せんせい》 と お話《はなし》 できる よう に、 今夜《こんや》 の こと を お伝《つた》え して おきます。 また 少《すこ》し 後《あと》 で 来《き》ます ね。 気持《きも》ち が 変《か》わったら、 いつ でも 声《こえ》 を かけて ください。`,
            en: `Thank you. I'll pass on tonight's conversation so that you can talk with the doctor tomorrow. I'll come back a little later. If you change your mind, call me any time.`,
            score: 2,
            fb: `Good. You thank him, link tonight's refusal to a concrete next step, and leave the door open. Coming back later is part of respecting a refusal, not pressure.`
          },
          {
            tl: `明日《あした》 は ちゃんと 飲《の》んで ください ね。`,
            en: `Make sure you take it properly tomorrow.`,
            score: 1,
            fb: `Mild, but it turns his offer into a demand. Thank him and confirm the plan to see the doctor.`
          }
        ]
      }
    ],
    summary: {
      findings: [
        `Day 3: still elevated and pressured; says he is cured and does not need medicine`,
        `Reasons for refusal: daytime fogginess, heaviness, feeling slowed; mild hand tremor, unchanged; no nausea or diarrhoea (asked)`,
        `Refused the evening dose: not pressed, not threatened, no hidden medicine; refusal recorded and reported to the doctor with the side effects and his fear of restraint`,
        `Agreed to talk with the doctor tomorrow; nurse to return later this evening and offer the medicine again`
      ],
      mse: `24M, restless, walking the corridor, overfamiliar. Speech rapid and pressured. Mood "絶好調《ぜっこうちょう》" (on top form); affect expansive, briefly fearful when recalling the first night. Thought process: mildly tangential, redirectable. No hallucinations reported. Insight poor ("cured"), but willing to discuss side effects with the doctor. Nursing: refused evening dose, recorded and reported; side effects (sedation, mild tremor) reported; as-needed medicine offered as help, not as a threat.`
    }
  },
  {
    id: 'nurse-night',
    role: 'nurse',
    title: 'Tetsuo at night: watching alcohol withdrawal',
    level: 'N3',
    setting: 'Medical ward, about 2 a.m. on his second night in hospital. Tetsuo Yamamoto, 52, a construction worker who lives alone, was admitted for alcohol withdrawal after a seizure in the ER. You are the night nurse, Kimura, on your round. He is awake, sweating, his hands shake and he cannot keep still. You can call the doctor on duty from the bedside on the ward phone. Staff address him as Yamamoto-san.',
    steps: [
      {
        who: 'Tetsuo',
        line: [`（汗《あせ》 を かいて、 ベッド の 上《うえ》 で 起《お》き上《あ》がって いる。） ……誰《だれ》 だ？ ああ、 看護師《かんごし》さん か。 今《いま》、 何時《なんじ》 だ？ 全然《ぜんぜん》 眠《ねむ》れない ん だ よ。`, `(Sitting up in bed, sweating.) ...Who's that? Oh, a nurse. What time is it? I can't sleep at all.`],
        choices: [
          { tl: `眠《ねむ》れない ん です ね。 では、 横《よこ》 に なって、 目《め》 を 閉《と》じて いて ください。`, en: `You can't sleep. Then please lie down and keep your eyes closed.`, score: 1, fb: `Kind, but you have not said who you are or answered his question. On a withdrawal night, a patient awake and sweating needs a check first, not only advice to rest.` },
          { tl: `看護師《かんごし》 の 木村《きむら》 です。 今《いま》 は 夜中《よなか》 の 二時《にじ》 ごろ です。 ここ は 病院《びょういん》 の 内科《ないか》 病棟《びょうとう》 で、 入院《にゅういん》 して 二日目《ふつかめ》 の 夜《よる》 です。 お顔《かお》 が よく 見《み》える よう に、 少《すこ》し 明《あ》かり を つけて も いい です か。`, en: `I'm Kimura, the nurse. It's about two in the middle of the night. This is the medical ward of the hospital, and it's your second night here. May I turn a light on a little so I can see you properly?`, score: 2, fb: `Good. Your name, the time and the place in plain words: gentle orientation belongs in every night check in withdrawal. Asking before you switch on a soft light respects him, and better light means fewer misread shadows.` },
          { tl: `夜中《よなか》 です よ。 ほか の 患者《かんじゃ》さん が 寝《ね》て います から、 静《しず》か に 寝《ね》て ください。`, en: `It's the middle of the night. Other patients are sleeping, so please be quiet and go to sleep.`, score: 0, fb: `This hushes him instead of checking him. Sleeplessness, sweating and restlessness on the second night of withdrawal can be signs that it is getting worse.` }
        ]
      },
      {
        who: 'Tetsuo',
        line: [`二時《にじ》 か……。 汗《あせ》 が 止《と》まらない し、 手《て》 も ほら、 こんな に 震《ふる》えてる。 なんだか 怖《こわ》くて、 じっと して いられない ん だ。`, `Two o'clock... The sweat won't stop, and look, my hands are shaking like this. I'm scared somehow, and I can't keep still.`],
        choices: [
          { tl: `教《おし》えて くださって ありがとう ございます。 少《すこ》し 体《からだ》 の こと を 聞《き》かせて ください。 吐《は》き気《け》 や 頭痛《ずつう》 は あります か。 不安《ふあん》 な 気持《きも》ち は、 夕方《ゆうがた》 より 強《つよ》く なって います か。`, en: `Thank you for telling me. Let me ask a little about how your body feels. Do you have any nausea or headache? Is the anxious feeling stronger than it was in the evening?`, score: 2, fb: `Good. Ask the same withdrawal questions at each round (shaking, sweating, nausea, headache, anxiety, then what he sees, hears and feels) and compare with the last round. A change is what you report.` },
          { tl: `お酒《さけ》 を やめた ん です から、 震《ふる》える の は 当《あ》たり前《まえ》 です。 我慢《がまん》 して ください。`, en: `You've stopped drinking, so of course you shake. Please put up with it.`, score: 0, fb: `Withdrawal can worsen and become dangerous. Telling him to put up with it skips the assessment and makes him less likely to tell you when it gets worse.` },
          { tl: `汗《あせ》 を ふく タオル と、 着替《きが》え を 持《も》って きます ね。`, en: `I'll bring a towel for the sweat and a change of clothes.`, score: 1, fb: `Comfort care matters, but do it after you have checked his symptoms. A sweating, shaking, frightened patient needs assessing first.` }
        ]
      },
      {
        who: 'Tetsuo',
        line: [`吐《は》き気《け》 が 少《すこ》し と、 頭《あたま》 が 重《おも》い。 ……なあ、 看護師《かんごし》さん。 あの カーテン の ところ、 虫《むし》 が いっぱい いない か？ ……いや、 気《き》 の せい か。`, `A bit of nausea, and my head feels heavy. ...Hey, nurse. Aren't there lots of bugs over there on the curtain? ...No, maybe I'm imagining it.`],
        choices: [
          { tl: `本当《ほんとう》 です ね。 すぐ 追《お》い払《はら》います から、 安心《あんしん》 して ください。`, en: `You're right. I'll chase them away right now, so don't worry.`, score: 0, fb: `Agreeing that the bugs are there confirms the misperception and can add to his confusion. Do not confirm it, and do not argue with it.` },
          { tl: `カーテン を 開《あ》けて、 もう 少《すこ》し 明《あか》るく して、 一緒《いっしょ》 に 見《み》て みましょう か。`, en: `Shall we open the curtain, make it a bit brighter, and look together?`, score: 1, fb: `Better light can help with a misread shadow, but first ask what he sees, and whether he also feels or hears things. You need those answers for your report.` },
          { tl: `私《わたし》 に は 虫《むし》 は 見《み》えません が、 山本《やまもと》さん に は 見《み》えた ん です ね。 どんな ふう に 見《み》えます か。 今《いま》 も 見《み》えます か。 皮膚《ひふ》 の 上《うえ》 を 何《なに》 か が はって いる よう な 感《かん》じ や、 ない はず の 音《おと》 や 声《こえ》 が 聞《き》こえる こと は あります か。`, en: `I can't see any bugs, but you saw them. What do they look like? Can you still see them? Do you feel anything crawling on your skin, or hear sounds or voices that shouldn't be there?`, score: 2, fb: `Good. You say honestly what you see without arguing, then check seeing, feeling and hearing. New perceptual changes on the second night of withdrawal are an early warning sign of withdrawal delirium.` }
        ]
      },
      {
        who: 'Tetsuo',
        line: [`声《こえ》 は 聞《き》こえない けど、 まだ 何《なに》 か ちらちら 動《うご》いてる 気《き》 が する。 腕《うで》 も なんか むずむず する し。 （起《お》き上《あ》がろう と する。） もう 帰《かえ》る。 家《うち》 で 一杯《いっぱい》 やれば、 こんな の すぐ 治《なお》る ん だ。`, `I don't hear voices, but I still feel like something's flickering and moving. And my arms feel sort of crawly. (Tries to get up.) I'm going home. One drink at home and this'll go away.`],
        choices: [
          { tl: `帰《かえ》りたい 気持《きも》ち は わかります。 でも、 今《いま》 は 帰《かえ》れません。`, en: `I understand you want to go home. But you can't go home now.`, score: 1, fb: `Calm, and you acknowledge the wish, but a limit with no reason and no plan rarely settles a frightened patient. Tell him why, and what you will do next.` },
          { tl: `つらくて、 お酒《さけ》 が ほしく なる ん です ね。 でも、 今《いま》 の 汗《あせ》 や 震《ふる》え、 虫《むし》 が 見《み》える の は、 お酒《さけ》 を やめた こと で 出《で》て いる 症状《しょうじょう》 で、 病院《びょういん》 で 治療《ちりょう》 できます。 夜中《よなか》 に 一人《ひとり》 で 外《そと》 に 出《で》る の は 危《あぶ》ない です。 今《いま》 すぐ 当直《とうちょく》 の 先生《せんせい》 に 伝《つた》えて、 診《み》て もらいます。 それ まで 私《わたし》 が そば に います。`, en: `You feel so bad that you want a drink. But the sweating, the shaking and seeing bugs are symptoms of stopping alcohol, and they can be treated here. Going out alone in the middle of the night is dangerous. I'll tell the doctor on duty right now and have them see you. I'll stay with you until then.`, score: 2, fb: `Good. You name the craving without judging, explain the symptoms simply, give the safety reason, and act: worsening withdrawal with new perceptual changes needs the doctor on duty now, not at the morning round. Staying with him also lowers the risk of a fall or of him leaving.` },
          { tl: `勝手《かって》 に 出《で》て いったら、 ベッド に 縛《しば》る こと に なります よ。`, en: `If you walk out on your own, we'll have to tie you to the bed.`, score: 0, fb: `A threat raises fear and agitation. Restraint is never a threat; any decision about it follows the doctor's assessment, local law and your hospital's policy.` }
        ]
      },
      {
        who: 'Doctor on duty (phone)',
        line: [`当直《とうちょく》 の 医師《いし》 です。 どう しました か。`, `This is the doctor on duty. What's happening?`],
        choices: [
          { tl: `内科《ないか》 病棟《びょうとう》 の 看護師《かんごし》 の 木村《きむら》 です。 アルコール 離脱《りだつ》 で 入院中《にゅういんちゅう》 の 山本《やまもと》 哲夫《てつお》さん です。 救急外来《きゅうきゅうがいらい》 で けいれん を 起《お》こして います。 入院《にゅういん》 二日目《ふつかめ》 の 夜《よる》 です が、 汗《あせ》 と 手《て》 の 震《ふる》え が 強《つよ》く なって、 カーテン に 虫《むし》 が 見《み》える と 言《い》って います。 腕《うで》 が むずむず する とも 言《い》って います。 時間《じかん》 と 場所《ばしょ》 は わかって います が、 帰《かえ》りたい と 言《い》って 落《お》ち着《つ》かない 様子《ようす》 です。 今《いま》 すぐ 診《み》て いただけます か。`, en: `This is Kimura, a nurse on the medical ward. It's about Tetsuo Yamamoto, admitted with alcohol withdrawal. He had a seizure in the ER. It's his second night, and his sweating and tremor are worse; he says he sees bugs on the curtain. He also says his arms feel crawly. He knows the time and place, but he's restless and says he wants to go home. Could you see him right now?`, score: 2, fb: `Good. A structured report (who you are, the patient, the background, what has changed, what you need) lets the doctor judge urgency at night. Worse sweating and tremor with new things seen and felt are an early warning of withdrawal delirium.` },
          { tl: `山本《やまもと》さん が 眠《ねむ》れなくて、 落《お》ち着《つ》かない よう です。`, en: `Mr Yamamoto can't sleep and seems restless.`, score: 1, fb: `True but vague, so the doctor cannot judge urgency. Say what has changed (the bugs, the crawling feeling, the worse sweating and tremor) and ask for a review now.` },
          { tl: `夜中《よなか》 に すみません。 朝《あさ》 の 回診《かいしん》 まで 様子《ようす》 を 見《み》て も いい でしょう か。`, en: `Sorry to call in the middle of the night. Would it be all right to watch him until the morning round?`, score: 0, fb: `Waiting until morning with new perceptual changes in withdrawal can let delirium develop. Do not let worry about disturbing the doctor soften or delay the call.` }
        ]
      },
      {
        who: 'Tetsuo',
        line: [`先生《せんせい》、 来《く》る の か。 ……悪《わる》い な、 夜中《よなか》 に。 喉《のど》 が からから だ。`, `The doctor's coming? ...Sorry, in the middle of the night. My throat's bone dry.`],
        choices: [
          { tl: `お水《みず》 を 持《も》って きます ね。 ちょっと 待《ま》って いて ください。`, en: `I'll get you some water. Please wait a moment.`, score: 1, fb: `Fluids help, but check first that he is allowed to drink, and do not leave him alone now: ask a colleague to bring the water. Make the bed safe as well.` },
          { tl: `眠《ねむ》れる よう に、 電気《でんき》 を 消《け》して おきます ね。`, en: `I'll turn the light off so you can sleep.`, score: 0, fb: `Darkness makes shadows easier to misread, and walking away now is unsafe. Keep a soft light on and stay with him.` },
          { tl: `謝《あやま》らなくて 大丈夫《だいじょうぶ》 です。 先生《せんせい》 は すぐ 来《き》ます。 お水《みず》 は 飲《の》んで いい と 言《い》われて います から、 少《すこ》し ずつ 飲《の》みましょう。 ベッド を 低《ひく》く して、 ナースコール は ここ に 置《お》きます ね。 立《た》つ とき は 一人《ひとり》 で 立《た》たないで、 これ を 押《お》して ください。`, en: `No need to apologize. The doctor is coming right away. You're allowed water, so let's sip a little at a time. I'll lower the bed and put the call button here. When you want to stand, don't get up alone; press this.`, score: 2, fb: `Good. You reassure him, give fluids only because they are allowed (check the orders or ask the doctor), and set up fall safety: bed low, call button within reach, help to stand. He is shaky and had a seizure in the ER, so a fall is a real risk.` }
        ]
      },
      {
        who: 'Tetsuo',
        line: [`一人《ひとり》 に しないで くれる か。 ……頭《あたま》 が おかしく なった みたい で、 怖《こわ》い ん だ。`, `Please don't leave me alone. ...It's like I'm going out of my mind. I'm scared.`],
        choices: [
          { tl: `大丈夫《だいじょうぶ》 です よ。 すぐ に 治《おさ》まります から。`, en: `It's all right. It'll settle down soon.`, score: 1, fb: `Meant kindly, but empty: it does not explain what is happening or tell him you will stay.` },
          { tl: `先生《せんせい》 が 来《く》る まで、 ここ に います。 怖《こわ》い です よね。 これ は お酒《さけ》 を やめた とき の 体《からだ》 の 反応《はんのう》 で、 頭《あたま》 が おかしく なった の では ありません。 治療《ちりょう》 で よく なります。 また 何《なに》 か 見《み》えたり 感《かん》じたり したら、 すぐ 教《おし》えて ください。`, en: `I'll stay here until the doctor comes. It's frightening, isn't it? This is your body reacting to stopping alcohol; you are not going out of your mind. It gets better with treatment. If you see or feel anything again, tell me straight away.`, score: 2, fb: `Good. You stay, name the fear, explain in plain words that it is withdrawal and treatable, and ask him to report new symptoms. Recheck perception and orientation at each round after the doctor's review.` },
          { tl: `ほか の 患者《かんじゃ》さん も いる ので、 ずっと は いられません。 何《なに》 か あったら 呼《よ》んで ください。`, en: `There are other patients too, so I can't stay the whole time. Call me if anything happens.`, score: 0, fb: `Leaving a frightened patient with early signs of delirium alone risks a fall, leaving the ward, and worse confusion. If you must step away, ask a colleague to stay with him.` }
        ]
      }
    ],
    summary: {
      findings: [
        'Second night of alcohol withdrawal: sweating and tremor worse, mild nausea, heavy head, anxiety and restlessness; craving, asked to go home for a drink',
        'New perceptual changes: bugs seen on the curtain (he doubted it himself), a crawling feeling on the arms; no voices; asked the time and accepted orientation',
        'Early warning of withdrawal delirium after a seizure in the ER: reported to the doctor on duty at once with a structured report, for review of the withdrawal treatment',
        'Nursing: soft light, orientation, no arguing with or confirming the bugs, fluids as allowed, bed low, call button within reach, help to stand, a nurse stays with him; recheck perception and orientation each round'
      ],
      mse: `52M, awake at night, sweating, tremor of both hands, restless, tries to get up. Speech normal rate, short plain sentences. Mood 「なんだか 怖《こわ》くて」 (scared); affect anxious. Thought process linear. Thought content: craving, wish to go home to drink, fear of "going out of his mind". Perception: saw bugs on the curtain, then doubted it; crawling feeling on the arms; denies hearing voices. Asked the time; recognized the nurse and accepted orientation to time and place. Insight partial (knows something is wrong). Judgment impaired (wanted to leave to drink), but agreed to stay.`
    }
  }
]);
