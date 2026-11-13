/* Case simulations, part 3 (chiyoko). Same structure as psych-cases-1.js. Patients and families are fictional.
   STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician. */
window.PSYCH_CASES = (window.PSYCH_CASES || []).concat([
  {
    id: 'chiyoko',
    title: 'Dementia with night wandering: a family interview',
    level: 'N3',
    setting: 'Admitting section, early evening, before the mental status examination. Chiyoko Ito, 79, a retired primary-school teacher, widowed, born in Niigata, sits with her handbag on her lap. Her eldest son Hiroshi, 52, and his wife Megumi, 50, her main carer, have brought her after two months of night wandering and of saying that Megumi steals from her. The emergency department has looked for delirium and judged it unlikely. A joint interview with all three; Megumi is seen briefly on her own, then Hiroshi joins her, while a nurse sits with Chiyoko.',
    steps: [
      {
        who: 'Chiyoko',
        line: [`あら、 こんばんは。 ここ は どこ かしら。 学校《がっこう》 かしら。 私《わたし》、 そろそろ 家《いえ》 に 帰《かえ》らない と いけない ん です よ。`, `Oh, good evening. Where is this place? Is it the school? I really must be getting home soon, you know.`],
        choices: [
          { tl: `息子《むすこ》さん、 お母《かあ》さん は いつ から こんな ふう に なった ん です か。`, en: `(to the son) How long has your mother been like this?`, score: 0, fb: `Talking about her in front of her, as if she were not there, is disrespectful and loses her trust. People with dementia notice tone and being ignored even when they forget the words.` },
          { tl: `こんばんは、 伊藤《いとう》さん。 私《わたし》 は この 病院《びょういん》 の 医者《いしゃ》 です。 ここ は 病院《びょういん》 です。 来《き》て くださって ありがとう ございます。 少《すこ》し お話《はなし》 を 聞《き》かせて いただけます か。 息子《むすこ》さん と 恵《めぐみ》さん に も、 一緒《いっしょ》 に お話《はなし》 を 伺《うかが》って も いい です か。`, en: `Good evening, Mrs Ito. I'm a doctor at this hospital. This is a hospital. Thank you for coming. May I talk with you for a little while? And may I also hear from your son and Megumi, all together?`, score: 2, fb: `Good. You greet her first, by name, say who you are and where she is in short sentences, and ask her permission before you take the history from her family.` },
          { tl: `こんばんは。 すぐ 終《お》わります から、 座《すわ》って いて ください ね。`, en: `Good evening. It won't take long, so please stay seated.`, score: 1, fb: `Polite, but you have not said who you are or where she is, and "it won't take long" is a promise you may not keep.` }
        ]
      },
      {
        who: 'Hiroshi (son)',
        line: [`先生《せんせい》、 母《はは》 は この 二《に》か月《げつ》 ぐらい、 夜中《よなか》 に 起《お》きて、 「新潟《にいがた》 の 家《いえ》 に 帰《かえ》る」 と 言《い》って 荷物《にもつ》 を まとめる ん です。 三日前《みっかまえ》 は 夜中《よなか》 の 二時《にじ》 に 一人《ひとり》 で 出《で》て いって、 コンビニ で お巡《まわ》りさん に 見《み》つけて もらいました。`, `Doctor, for about two months my mother has been getting up in the middle of the night and packing her things, saying she's going home to Niigata. Three nights ago she went out alone at two in the morning, and a police officer found her at a convenience store.`],
        choices: [
          { tl: `夜中《よなか》 に 何回《なんかい》 ぐらい 起《お》きます か。`, en: `How many times a night does she get up?`, score: 1, fb: `A useful detail, but first establish the time course: when the forgetfulness began, and whether the change was gradual or sudden.` },
          { tl: `それ は 危《あぶ》ない です ね。 夜《よる》 は 部屋《へや》 に 鍵《かぎ》 を かけて おけば 大丈夫《だいじょうぶ》 です よ。`, en: `That's dangerous. If you lock her in her room at night, she'll be fine.`, score: 0, fb: `Locking a person in a room can cause panic, falls and danger in a fire, and it is not first-line advice. Learn the history before you advise.` },
          { tl: `無事《ぶじ》 で 本当《ほんとう》 に よかった です。 もの忘《わす》れ は いつ ごろ から 始《はじ》まりました か。 少《すこ》しずつ 進《すす》んで きました か、 それとも 何日《なんにち》 か の 間《あいだ》 に 急《きゅう》 に 変《か》わりました か。 一日《いちにち》 の うち で、 よい 時間《じかん》 と 悪《わる》い 時間《じかん》 は あります か。`, en: `I'm so glad she was found safe. When did the forgetfulness begin? Has it come on little by little, or did she change suddenly over a few days? Are there better and worse times in the day?`, score: 2, fb: `Good. Onset and course separate dementia from delirium: Shigeru Yamada's confusion came on over hours and came and went, while dementia progresses over months to years. Being worse in the evening happens in both, so look at the whole pattern and at attention, not at one feature.` }
        ]
      },
      {
        who: 'Hiroshi (son)',
        line: [`もの忘《わす》れ は 四年《よねん》 ぐらい 前《まえ》 から です。 少《すこ》しずつ ひどく なって、 二年前《にねんまえ》 に もの忘《わす》れ外来《がいらい》 で アルツハイマー型《がた》 認知症《にんちしょう》 と 言《い》われました。 毎朝《まいあさ》 薬《くすり》 を 飲《の》んで います。 急《きゅう》 に 変《か》わった こと は ありません が、 夕方《ゆうがた》 から 夜《よる》 に かけて 落《お》ち着《つ》かなく なります。 救急《きゅうきゅう》 で は、 熱《ねつ》 も ない し、 検査《けんさ》 も 問題《もんだい》 ない と 言《い》われました。`, `The forgetfulness started about four years ago. It got worse little by little, and two years ago a memory clinic told us it was Alzheimer's-type dementia. She takes her medicine every morning. Nothing has changed suddenly, but from late afternoon into the night she gets restless. In the emergency department they said she has no fever and the tests are fine.`],
        choices: [
          { tl: `認知症《にんちしょう》 なら、 ご本人《ほんにん》 に 聞《き》いて も 仕方《しかた》 が ありません ね。 続《つづ》き は 息子《むすこ》さん から 伺《うかが》います。`, en: `If it's dementia, there's no point asking her. I'll hear the rest from you.`, score: 0, fb: `She is sitting beside you. A person with dementia can still tell you what worries her, and her own words are part of the assessment.` },
          { tl: `よく わかりました。 何年《なんねん》 も かけて 少《すこ》しずつ 進《すす》んで きた こと、 急《きゅう》 な 変化《へんか》 が ない こと は、 とても 大切《たいせつ》 な 情報《じょうほう》 です。 ……伊藤《いとう》さん、 最近《さいきん》、 何《なに》か 困《こま》って いる こと や 心配《しんぱい》 な こと は あります か。`, en: `That's clear. That it has progressed slowly over years, with no sudden change, is very important information. ...Mrs Ito, is anything troubling or worrying you lately?`, score: 2, fb: `Good. You sum up the gradual course, which with the normal emergency checks makes delirium less likely, and turn back to Chiyoko so she stays part of the interview. Still look again for delirium if she suddenly becomes drowsier, more confused or less attentive.` },
          { tl: `夜《よる》 は 何時《なんじ》 ごろ 寝《ね》ます か。 昼寝《ひるね》 は します か。`, en: `What time does she go to bed? Does she nap during the day?`, score: 1, fb: `Sleep pattern matters for night wandering, but Chiyoko has been left out for several minutes. Bring her back into the conversation.` }
        ]
      },
      {
        who: 'Chiyoko',
        line: [`困《こま》って いる の は ね、 先生《せんせい》、 お財布《さいふ》 と 通帳《つうちょう》 が なくなる の よ。 引《ひ》き出《だ》し に ちゃんと しまって おいた のに。 あの 人《ひと》 が 持《も》って いく ん です よ。`, `What troubles me, Doctor, is that my purse and my bankbook keep disappearing. And I put them away properly in the drawer. That woman takes them.`],
        choices: [
          { tl: `恵《めぐみ》さん が そんな こと を する はず が ありません。 伊藤《いとう》さん が しまった 場所《ばしょ》 を 忘《わす》れた ん です よ。`, en: `Megumi would never do that. You've forgotten where you put them.`, score: 0, fb: `Arguing with a delusion does not change it. It adds shame and anger, often makes the belief firmer, and can turn her against you.` },
          { tl: `その お話《はなし》 は、 また 後《あと》 で 伺《うかが》います ね。`, en: `I'll hear about that later.`, score: 1, fb: `Not harmful, but it brushes past what matters most to her. Acknowledge the feeling first.` },
          { tl: `大事《だいじ》 な お財布《さいふ》 と 通帳《つうちょう》 が 見《み》つからない の は、 本当《ほんとう》 に 心配《しんぱい》 です よ ね。 後《あと》 で 一緒《いっしょ》 に 探《さが》しましょう。`, en: `Not being able to find your important purse and bankbook must be really worrying. Let's look for them together later.`, score: 2, fb: `Good. You neither argue nor agree that Megumi took them: you name her worry and offer to help look. The family can do the same at home, and it spares Megumi from having to defend herself.` }
        ]
      },
      {
        who: 'Megumi (daughter-in-law)',
        line: [`先生《せんせい》、 私《わたし》 は 何《なに》 も 取《と》って いません……。 毎日《まいにち》 泥棒《どろぼう》 って 言《い》われて。 それ に、 次《つぎ》 の 夜《よる》、 また 出《で》て いこう と する の を 止《と》めたら、 押《お》されました。 けが は なかった ん です けど……。`, `Doctor, I haven't taken anything... I'm called a thief every day. And the next night, when I tried to stop her going out again, she pushed me. I wasn't hurt, but...`],
        choices: [
          { tl: `恵《めぐみ》さん、 毎日《まいにち》 本当《ほんとう》 に 大変《たいへん》 でした ね。 けが が なくて よかった です。 伊藤《いとう》さん が 押《お》して しまった の は、 止《と》められて 怖《こわ》かった から かも しれません。 どなた の せい でも ありません。 この 後《あと》、 看護師《かんごし》 が 伊藤《いとう》さん と 一緒《いっしょ》 に いる 間《あいだ》 に、 恵《めぐみ》さん と 少《すこ》し 二人《ふたり》 で お話《はなし》 させて いただけます か。`, en: `Megumi, every day must have been really hard. I'm glad you weren't hurt. She may have pushed because being stopped frightened her. Nobody is to blame. In a moment, while a nurse stays with Mrs Ito, could I talk with you on your own for a little while?`, score: 2, fb: `Good. You acknowledge her strain, check for injury, explain the push without blaming either woman, and offer a private talk, where a carer can say what she cannot say in front of the family. Chiyoko may truly not remember the push.` },
          { tl: `伊藤《いとう》さん、 人《ひと》 を 押《お》す の は いけません よ。 恵《めぐみ》さん に 謝《あやま》りましょう。`, en: `Mrs Ito, pushing people is wrong. Let's apologise to Megumi.`, score: 0, fb: `Scolding blames her for a symptom she may not remember and makes her more defensive. Treat the push as a risk to plan for, not a fault to correct.` },
          { tl: `押《お》された の は 何時《なんじ》 ごろ でした か。`, en: `About what time did she push you?`, score: 1, fb: `A fair detail for the risk history, but it skips Megumi's distress and her own safety.` }
        ]
      },
      {
        who: 'Megumi (daughter-in-law)',
        line: [`お義母《かあ》さん の こと が 嫌《きら》い な わけ じゃ ない ん です。 前《まえ》 は 本当《ほんとう》 に 優《やさ》しい 人《ひと》 でした。 でも、 また 夜中《よなか》 に 出《で》て いったら と 思《おも》う と 怖《こわ》くて、 毎晩《まいばん》 玄関《げんかん》 の 近《ちか》く で 寝《ね》て います。 正直《しょうじき》、 もう 限界《げんかい》 です。`, `(alone with the doctor) It's not that I dislike my mother-in-law. She used to be such a kind person. But I'm so afraid she'll go out again in the night that I sleep near the front door every night. Honestly, I'm at my limit.`],
        choices: [
          { tl: `お義母《かあ》さん の ため に、 もう 少《すこ》し 頑張《がんば》りましょう。`, en: `For your mother-in-law's sake, let's hang in there a little longer.`, score: 0, fb: `Urging an exhausted carer to try harder adds guilt and closes the door on what "at my limit" may mean.` },
          { tl: `話《はな》して くださって ありがとう ございます。 毎日《まいにち》 ずっと 頑張《がんば》って こられた ん です ね。 「もう 限界《げんかい》」 と 感《かん》じる ほど つらい とき、 消《き》えたい とか、 死《し》にたい と 思《おも》う こと は あります か。 それ から、 恵《めぐみ》さん を 手伝《てつだ》って くれる 人《ひと》 は います か。`, en: `Thank you for telling me. You've been working so hard, every day, for so long. When it feels so hard that you're "at your limit", do you ever feel you'd like to disappear, or that you want to die? And is there anyone who helps you?`, score: 2, fb: `Good. 「もう 限界《げんかい》 です」 can carry a suicidal meaning, so ask the carer directly, then ask about support. Also ask gently whether she has ever felt close to losing control with Chiyoko: exhausted carers are at risk of that too.` },
          { tl: `ご主人《しゅじん》 に もっと 手伝《てつだ》って もらいましょう。`, en: `Let's get your husband to help more.`, score: 1, fb: `Support matters, but you jump to advice before asking what "at my limit" means for her, including any thoughts of death.` }
        ]
      },
      {
        who: 'Megumi (daughter-in-law)',
        line: [`死《し》にたい と まで は 思《おも》いません。 でも、 時々《ときどき》、 全部《ぜんぶ》 から 逃《に》げたく なります。 主人《しゅじん》 は 仕事《しごと》 が 忙《いそが》しくて、 夜《よる》 は ほとんど 私《わたし》 一人《ひとり》 です。`, `I don't go as far as wanting to die. But sometimes I want to run away from it all. My husband is busy with work, so at night it's nearly always just me.`],
        choices: [
          { tl: `わかりました。 では、 お義母《かあ》さん の お話《はなし》 に 戻《もど》りましょう。`, en: `I see. Then let's go back to your mother-in-law.`, score: 1, fb: `You heard her answer, but you leave her strain where it was. Tell her what to do if thoughts of death come, and plan support with the family.` },
          { tl: `正直《しょうじき》 に 話《はな》して くださって ありがとう ございます。 逃《に》げたく なる ほど 疲《つか》れて いる の は、 恵《めぐみ》さん が 弱《よわ》い から では ありません。 もし 死《し》にたい 気持《きも》ち が 出《で》て きたら、 一人《ひとり》 で 抱《かか》えないで、 すぐ 私《わたし》たち か 地域《ちいき》 の 相談窓口《そうだんまどぐち》 に 話《はな》して ください。 この 後《あと》、 ご主人《しゅじん》 も 一緒《いっしょ》 に、 これから の こと を 考《かんが》えましょう。`, en: `Thank you for telling me honestly. Being so tired that you want to run away does not mean you are weak. If thoughts of dying ever come, don't carry them alone: tell us, or the local crisis line, straight away. In a moment, let's think about what comes next together with your husband.`, score: 2, fb: `Good. Her denial is reassuring, but her strain is real: you take away the shame, say what to do if thoughts of death come, and bring her husband in to plan support. The carer's exhaustion is part of the reason to act tonight.` },
          { tl: `お嫁《よめ》さん なら、 家族《かぞく》 の 世話《せわ》 は 当然《とうぜん》 です よ。`, en: `As a daughter-in-law, caring for the family is only natural.`, score: 0, fb: `Moralising about a carer's duty adds guilt and shame, and makes it less likely she will tell you if things get worse.` }
        ]
      },
      {
        who: 'Hiroshi (son)',
        line: [`先生《せんせい》、 母《はは》 は どう なって しまった ん でしょう か。 入院《にゅういん》 した ほう が いい ん です か。 母《はは》 は きっと 嫌《いや》がる と 思《おも》います。`, `(joining Megumi; Chiyoko is still with the nurse) Doctor, what has happened to my mother? Would it be better for her to be admitted? I'm sure she'll hate the idea.`],
        choices: [
          { tl: `お母《かあ》さん は もう 何《なに》 も わからない ので、 ご本人《ほんにん》 に は 説明《せつめい》 しなくて も 大丈夫《だいじょうぶ》 です。 今夜《こんや》 から 入院《にゅういん》 です。`, en: `Your mother doesn't understand anything any more, so there's no need to explain to her. She's admitted from tonight.`, score: 0, fb: `She understands far more than this assumes, and she should hear the plan in words she can follow. Admission and consent follow local law and your hospital's policy; decide with her and her family, not over her head.` },
          { tl: `入院《にゅういん》 に ついて は、 明日《あした》 主治医《しゅじい》 と 相談《そうだん》 して ください。`, en: `Please discuss admission with the attending doctor tomorrow.`, score: 1, fb: `Not wrong, but it leaves a tired family with no explanation tonight. Say in plain words what you think is happening and why you suggest admission.` },
          { tl: `お話《はなし》 を 伺《うかが》う と、 アルツハイマー型《がた》 認知症《にんちしょう》 が 進《すす》んで、 その 症状《しょうじょう》 と して、 お財布《さいふ》 を 取《と》られた と 思《おも》い込《こ》んで しまう こと や、 夕方《ゆうがた》 から 夜《よる》 に かけて 落《お》ち着《つ》かなく なる こと が 出《で》て きて いる と 考《かんが》えられます。 お母《かあ》さん の せい でも、 ご家族《かぞく》 の せい でも ありません。 夜《よる》 の 安全《あんぜん》 を 守《まも》り ながら、 生活《せいかつ》 の リズム と お薬《くすり》 を 見直《みなお》し、 ご家族《かぞく》 に も 休《やす》んで いただく ため に、 入院《にゅういん》 を おすすめ します。 決《き》める 前《まえ》 に、 伊藤《いとう》さん に も 私《わたし》 から わかりやすく お話《はなし》 します。 今夜《こんや》 は、 この 後《あと》 私《わたし》 が 伊藤《いとう》さん と もう 少《すこ》し お話《はなし》 を して、 看護師《かんごし》 と 一緒《いっしょ》 に 体《からだ》 の 様子《ようす》 も 見《み》ます。`, en: `From what you've told me, I think the Alzheimer's-type dementia has progressed, and that the belief that her purse is being taken and the restlessness from late afternoon into the night are symptoms of it. It is not your mother's fault, and it is not the family's fault. I suggest an admission, to keep her safe at night, to review her daily routine and her medicines, and to let the family rest. Before anything is decided, I'll explain it to Mrs Ito myself in simple words. Tonight, after this, I'll talk with her a little more, and the nurses and I will also check how she is physically.`, score: 2, fb: `Good. A plain explanation without blame, clear reasons for admission (safety at night, a review of routine and medicines, rest for the carers), a promise to explain to Chiyoko herself, and what happens next tonight. Follow local law and your hospital's policy on admission and consent.` }
        ]
      }
    ],
    summary: {
      findings: [
        `Gradual memory decline over about four years; Alzheimer's disease diagnosed at a memory clinic two years ago; takes donepezil every morning; no sudden change`,
        `For two months: belief that Megumi takes her purse and bankbook, packing at night to "go home" to Niigata, worse in the late afternoon and evening`,
        `Risks: left home alone at 2 a.m. (found by police), pushed Megumi when stopped (no injury); carer exhausted (「もう 限界《げんかい》 です」), denies wanting to die, sometimes wants to run away, alone with her at night: told what to do if thoughts of death come`,
        `Delirium unlikely (gradual course, no acute change in attention, normal emergency checks): admission suggested for night safety, review of routine and medicines, and carer rest, explained to Chiyoko herself`
      ],
      mse: `79F, fairly kempt, cardigan buttoned one button off, handbag on her lap. Restless (gets up for the door), redirectable; no tremor or abnormal movements. Friendly and cooperative with the doctor, cold toward her daughter-in-law. Speech spontaneous, normal rate and volume, word-finding pauses; confabulation (must teach at school tomorrow). Mood 「大丈夫《だいじょうぶ》 です よ」; affect full range, congruent, irritable when the purse comes up. Thought process circumstantial. Thought content: persecutory delusion of theft (Megumi takes her purse and bankbook); preoccupied with going home; denies suicidal and homicidal ideation; denies the push. Perception: no hallucinations elicited. Oriented to person only (thinks she is at a school); recent memory poor, remote memory relatively preserved; attention kept through the interview. Insight poor. Judgment impaired. Impulse control poor.`
    }
  }
]);
