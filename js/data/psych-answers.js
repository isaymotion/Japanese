/* Likely patient replies for the point board (#/psych/point) and the listening drill (#/psych/listen).
   PSYCH_ANSWERS = { common: [{ id, title, items }], sections: { <sectionId>: items } }
   item = [japanese, english, clinicalNote?]
   Spoken Japanese, the way a patient (or relative) answers; the clinical note is what the interviewer should hear in the reply.
   STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician. */
window.PSYCH_ANSWERS = {
  common: [
    { id: 'yesno', title: 'Yes / no', items: [
      [`はい。`, `Yes.`],
      [`いいえ。`, `No.`],
      [`たぶん。`, `Maybe.`],
      [`時々《ときどき》 です。`, `Sometimes.`],
      [`わかりません。`, `I don't know.`],
      [`答《こた》えたく ない です。`, `I don't want to answer.`, `Refusal; note the topic and come back to it gently later.`],
      [`前《まえ》 は そう でした けど、 今《いま》 は 違《ちが》います。`, `It used to be, but not anymore.`],
      [`はっきり と は わかりません。`, `I'm not sure.`]
    ] },
    { id: 'freq', title: 'How often', items: [
      [`毎日《まいにち》 です。`, `Every day.`],
      [`ほとんど 毎日《まいにち》 です。`, `Almost every day.`],
      [`週《しゅう》 に 二《に》、 三回《さんかい》 です。`, `A few times a week.`],
      [`週《しゅう》 に 一回《いっかい》 だけ です。`, `Only once a week.`],
      [`たまに だけ です。`, `Only once in a while.`],
      [`めったに ありません。`, `Rarely.`],
      [`一日《いちにち》 に 何回《なんかい》 も あります。`, `Several times a day.`],
      [`一度《いちど》 も ありません。`, `It has never happened.`]
    ] },
    { id: 'when', title: 'Since when', items: [
      [`今日《きょう》 から です。`, `Just now / only today.`],
      [`昨日《きのう》 から です。`, `Since yesterday.`],
      [`ここ 数日《すうじつ》 です。`, `For a few days now.`],
      [`二週間《にしゅうかん》 くらい 前《まえ》 から です。`, `About two weeks now.`],
      [`一《いっ》か月《げつ》 くらい に なります。`, `A month now.`],
      [`数《すう》か月《げつ》 前《まえ》 から です。`, `Several months now.`],
      [`もう 一年《いちねん》 に なります。`, `A year now.`],
      [`ずっと 前《まえ》、 子《こ》ども の 頃《ころ》 から です。`, `A long time, since I was young.`],
      [`もう 覚《おぼ》えて いません。`, `I can no longer remember.`]
    ] },
    { id: 'howmuch', title: 'How much', items: [
      [`全然《ぜんぜん》 ない です。`, `None.`],
      [`少《すこ》し だけ です。`, `Just a little.`],
      [`中《ちゅう》 くらい です。`, `Moderate.`],
      [`かなり です。`, `A lot.`],
      [`ひどすぎます。`, `Way too much.`],
      [`最近《さいきん》 ひどく なって います。`, `It has gotten worse lately.`],
      [`前《まえ》 より 楽《らく》 に なりました。`, `It's lighter than before.`],
      [`もう 耐《た》えられません。`, `I can't take it anymore.`, `Unbearable distress; ask about hopelessness and suicide.`]
    ] },
    { id: 'feel', title: 'How I feel', items: [
      [`大丈夫《だいじょうぶ》 です。`, `I'm okay.`],
      [`悲《かな》しい です。`, `I'm sad.`],
      [`不安《ふあん》 です。`, `I feel anxious.`, `The everyday word for anxiety; ask about palpitations and worry.`],
      [`怖《こわ》い です。`, `I'm scared.`],
      [`腹《はら》 が 立《た》って います。`, `I'm angry.`],
      [`もう へとへと です。`, `I'm exhausted.`],
      [`何《なに》 も 感《かん》じなく なった みたい です。`, `I feel like I feel nothing.`, `Possible emotional numbness; consider depression, trauma, dissociation.`],
      [`めまい が します。`, `I feel dizzy.`, `Somatic complaint; rule out a medical cause and anxiety.`],
      [`恥《は》ずかしい です。`, `I'm embarrassed.`]
    ] },
    { id: 'help', title: 'I need…', items: [
      [`もう 一度《いちど》 言《い》って ください。`, `Please repeat that.`],
      [`わかりません でした。`, `I didn't understand.`],
      [`もう 少《すこ》し ゆっくり 話《はな》して ください。`, `Please speak slower.`],
      [`英語《えいご》 で 話《はな》して も いい です か。`, `Can we speak English?`],
      [`家族《かぞく》 に 会《あ》いたい です。`, `I want to see my family.`],
      [`ちょっと 休《やす》みたい です。`, `I need a break.`],
      [`体《からだ》 が 痛《いた》い です。`, `My body hurts.`],
      [`お腹《なか》 が すきました。`, `I'm hungry.`],
      [`トイレ に 行《い》きたい です。`, `I need the toilet.`]
    ] }
  ],
  sections: {
    'opening': [
      [`先生《せんせい》、 おはよう ございます。`, `Good morning, Doctor.`],
      [`日本語《にほんご》 で 大丈夫《だいじょうぶ》 です。`, `Japanese is fine with me.`],
      [`英語《えいご》 の ほう が いい です。`, `I prefer English.`],
      [`田中《たなか》 と 呼《よ》んで ください。`, `Just call me Tanaka.`],
      [`緊張《きんちょう》 して います。`, `I'm nervous.`, `Anxiety about the interview; reassure before proceeding.`],
      [`なんで ここ に いる の か わからない です。`, `I don't know why I'm here.`, `Possible poor insight or involuntary presentation.`],
      [`家族《かぞく》 に 連《つ》れて こられた ん です。`, `My family just brought me.`, `Family-initiated; explore the patient's own view.`],
      [`もう 家《いえ》 に 帰《かえ》りたい。`, `I want to go home already.`],
      [`はい、 大丈夫《だいじょうぶ》 です。 始《はじ》めて ください。`, `Okay, I'm ready.`]
    ],
    'consent': [
      [`はい、 わかりました。`, `Yes, I understand.`],
      [`よく わからなかった ので、 もう 一回《いっかい》 お願《ねが》い します。`, `I didn't understand, please repeat.`],
      [`家族《かぞく》 に 話《はな》して も 大丈夫《だいじょうぶ》 です。`, `It's fine to talk to my family.`],
      [`夫《おっと》 に は 知《し》られたく ない です。`, `I don't want my husband to know.`, `Specific confidentiality limit; clarify what and why, and screen for partner violence.`],
      [`親《おや》 に は 知《し》られたく ない です。`, `I don't want my parents to know.`],
      [`ほか の 人《ひと》 に 話《はな》される ん じゃ ない か と 心配《しんぱい》 です。`, `I'm worried you might tell other people.`, `Fear about trust and stigma, often of word reaching work, neighbours or relatives; explain the limits plainly.`],
      [`何《なに》 も 隠《かく》して いません。`, `I'm not hiding anything.`],
      [`自分《じぶん》 から 先《さき》 に 話《はな》して も いい です か。`, `Can I be the one to tell them first?`],
      [`はい、 同意《どうい》 します。`, `Okay, I agree.`]
    ],
    'cc-hpi': [
      [`夜《よる》 眠《ねむ》れない ん です。`, `I can't sleep at night.`],
      [`すごく 気分《きぶん》 が 落《お》ち込《こ》んで います。`, `I feel extremely down.`],
      [`いつも 不安《ふあん》 で 落《お》ち着《つ》きません。`, `I'm always anxious and can't settle.`, `Anxiety; ask about panic and worry.`],
      [`声《こえ》 が 聞《き》こえる ん です。`, `I hear voices.`, `Possible auditory hallucinations; explore content and commands.`],
      [`胸《むね》 が 痛《いた》い です。`, `My chest hurts.`, `Somatic presentation of anxiety or depression; rule out a cardiac cause.`],
      [`家《いえ》 で ケンカ ばかり です。`, `We keep fighting at home.`],
      [`家族《かぞく》 に 言《い》われて 来《き》ました。`, `My family wanted me to come here.`, `Family-driven presentation; assess patient insight.`],
      [`仕事《しごと》 を なくして から、 ずっと 調子《ちょうし》 が 悪《わる》い です。`, `I lost my job and I haven't been okay since.`],
      [`様子《ようす》 が 変《か》わった って 言《い》われます。`, `People say my behavior has changed.`, `Others notice change; limited insight.`],
      [`病気《びょうき》 じゃ ない よ。 全然《ぜんぜん》 元気《げんき》 だ し。`, `I'm not sick, I'm fine.`, `Denial of illness; poor insight.`]
    ],
    'depression': [
      [`はい、 いつも 悲《かな》しい です。`, `Yes, I'm always sad.`],
      [`もう 何《なに》 に も 興味《きょうみ》 が わかない ん です。`, `I have no interest in anything anymore.`, `Anhedonia.`],
      [`眠《ねむ》れなくて、 朝方《あさがた》 まで 起《お》きて います。`, `I can't sleep, I'm awake until dawn.`, `Insomnia; ask about early morning waking.`],
      [`食欲《しょくよく》 が ありません。`, `I have no appetite.`],
      [`胸《むね》 が 苦《くる》しい です。`, `My chest feels tight.`, `Bodily expression of distress in depression or anxiety.`],
      [`自分《じぶん》 なんか 何《なん》 の 役《やく》 に も 立《た》たない。`, `I'm useless.`, `Worthlessness; ask about suicidal thoughts.`],
      [`何《なん》 でも 自分《じぶん》 の せい だ と 思《おも》っちゃう ん です。`, `I blame myself for everything.`, `Excessive guilt.`],
      [`集中《しゅうちゅう》 できません。`, `I can't concentrate.`],
      [`何《なに》 も して ない のに、 体《からだ》 が だるくて。`, `My body feels heavy and tired even when I do nothing.`, `Fatigue and low energy.`],
      [`別《べつ》 に、 そんなに 悲《かな》しく は ない です。`, `It's fine, I'm not really sad.`, `Possible minimisation or masked depression; probe somatic symptoms.`]
    ],
    'mania': [
      [`はい、 ここ 何日《なんにち》 か すごく 気分《きぶん》 が いい です。`, `Yes, I've been very happy these past days.`],
      [`三日《みっか》 寝《ね》て ない けど、 全然《ぜんぜん》 疲《つか》れて ない ん です。`, `I haven't slept for three days but I'm not tired.`, `Decreased need for sleep; core manic sign.`],
      [`頭《あたま》 の 中《なか》 が 忙《いそが》しくて、 アイデア が どんどん 出《で》て くる ん です。`, `My mind is racing, I have so many ideas.`, `Racing thoughts, flight of ideas.`],
      [`最近《さいきん》 すぐ イライラ します。`, `I get irritated easily now.`, `Irritable mood; consider a mixed or manic episode.`],
      [`買《か》い物《もの》 を しすぎて、 貯金《ちょきん》 を 全部《ぜんぶ》 使《つか》っちゃいました。`, `I bought too many things and spent all my savings.`, `Excessive spending; risky behavior.`],
      [`計画《けいかく》 が たくさん あって、 会社《かいしゃ》 を 立《た》ち上《あ》げる つもり です。`, `I have many plans, I'm going to start a business.`, `Possible grandiosity or increased goal-directed activity.`],
      [`しゃべりすぎ だ って 言《い》われます。`, `They say I talk too much.`, `Pressured speech reported by others.`],
      [`問題《もんだい》 なんて ない。 絶好調《ぜっこうちょう》 だ よ。`, `I have no problem, I'm perfectly fine.`, `Lack of insight in mania.`],
      [`いいえ、 睡眠《すいみん》 は 普通《ふつう》 です。`, `No, my sleep is normal.`]
    ],
    'anxiety': [
      [`はい、 いつも 心配《しんぱい》 ばかり して います。`, `Yes, I'm always worrying.`],
      [`考《かんが》え が 止《と》まらない ん です。`, `I can't stop the thinking.`, `Uncontrollable worry; GAD or obsessions.`],
      [`急《きゅう》 に 心臓《しんぞう》 が ドキドキ します。`, `My heart suddenly beats fast.`, `Palpitations; panic attack.`],
      [`息《いき》 が できない 感《かん》じ が します。`, `It feels like I can't breathe.`, `Dyspnea in panic; rule out a medical cause.`],
      [`死《し》ぬ か と 思《おも》いました。`, `I thought I was going to die.`, `Fear of dying; panic attack.`],
      [`手《て》 が 震《ふる》えて、 汗《あせ》 が 出《で》ます。`, `My hands shake and I sweat.`],
      [`ドア の 鍵《かぎ》 を 何度《なんど》 も 確認《かくにん》 して しまいます。`, `I keep checking the door lock again and again.`, `Checking compulsion; OCD.`],
      [`汚《よご》れる の が 怖《こわ》くて、 何度《なんど》 も 手《て》 を 洗《あら》っちゃう ん です。`, `I'm afraid of getting dirty, so I wash my hands over and over.`, `Contamination obsession and washing compulsion.`],
      [`外《そと》 に 出《で》る の も、 人《ひと》 と 話《はな》す の も 怖《こわ》い です。`, `I'm afraid to go out or talk to people.`, `Social anxiety or agoraphobia.`],
      [`ちょっと 神経質《しんけいしつ》 な だけ です。`, `I'm just a bit high-strung, that's all.`, `Explaining symptoms away as personality; may minimise an anxiety disorder.`]
    ],
    'hallucinations': [
      [`はい、 声《こえ》 が 聞《き》こえます。`, `Yes, I hear voices.`, `Auditory hallucinations.`],
      [`いいえ、 何《なに》 も 聞《き》こえません。`, `No, I don't hear anything.`],
      [`はい、 左《ひだり》 の 耳《みみ》 から です。`, `Yes, in my left ear.`],
      [`時々《ときどき》、 夜《よる》 に。`, `Sometimes, at night.`],
      [`知《し》らない 男《おとこ》 の 人《ひと》 の 声《こえ》 です。`, `The voice of a man I don't know.`],
      [`お前《まえ》 は ダメ な 人間《にんげん》 だ って 言《い》う ん です。`, `It says I'm worthless.`, `Derogatory voices; raises suicide risk.`],
      [`悪口《わるぐち》 を 言《い》って きます。`, `It curses at me.`],
      [`自分《じぶん》 を 傷《きず》つけろ って 言《い》います。`, `It tells me to hurt myself.`, `Command hallucination (self-harm); urgent risk assessment.`],
      [`ほか の 人《ひと》 を 傷《きず》つけろ って 言《い》われます。`, `It tells me to hurt other people.`, `Command hallucination (harm to others); urgent risk assessment.`],
      [`影《かげ》 とか 霊《れい》 が 見《み》えます。`, `I see shadows and spirits.`, `Visual hallucinations; consider delirium, substances, or a culturally shared experience.`],
      [`亡《な》くなった 母《はは》 の 声《こえ》 が 聞《き》こえます。`, `I hear my late mother.`, `Grief hallucination can be normal; assess context.`]
    ],
    'delusions': [
      [`はい、 誰《だれ》 か に 狙《ねら》われて いる ん です。`, `Yes, someone wants to hurt me.`, `Persecutory delusion; assess risk of acting on it.`],
      [`誰《だれ》 か に つけられて います。`, `People are following me.`, `Persecutory delusion; check for a real basis (a stalker, debt collectors, an abusive partner).`],
      [`口《くち》 に 出《だ》さなくて も、 みんな 私《わたし》 の こと を 話《はな》して いる ん です。`, `They talk about me even if they don't say it.`, `Ideas of reference.`],
      [`食《た》べ物《もの》 に 毒《どく》 を 入《い》れられて います。`, `They put poison in my food.`, `Paranoid delusion; may lead to refusing food and medicines.`],
      [`考《かんが》えて いる こと が 周《まわ》り の 人《ひと》 に 伝《つた》わって しまう ん です。`, `Other people know what I'm thinking.`, `Thought broadcasting.`],
      [`誰《だれ》 か が 頭《あたま》 の 中《なか》 に 考《かんが》え を 入《い》れて くる ん です。`, `Someone puts thoughts into my head.`, `Thought insertion; first-rank symptom.`],
      [`体《からだ》 を 操《あやつ》られて います。`, `They control my body.`, `Delusion of control; first-rank symptom.`],
      [`神様《かみさま》 に 選《えら》ばれて、 使命《しめい》 が ある ん です。`, `God chose me for a mission.`, `Grandiose or religious delusion; consider mania and whether the patient's religious group shares the belief.`],
      [`近所《きんじょ》 の 人《ひと》 に 呪《のろ》い を かけられた ん です。`, `The neighbor put a curse on me.`, `Belief in a curse; check whether it is shared in the patient's family or community before calling it delusional.`],
      [`いいえ、 そういう こと は ありません。`, `No, nothing like that.`]
    ],
    'suicide': [
      [`いいえ、 そんな こと は 考《かんが》えません。`, `No, I don't think about that.`, `Denial; observe consistency with mood and behavior.`],
      [`朝《あさ》 目《め》 が 覚《さ》めなければ いい のに、 と 思《おも》う こと が あります。`, `Sometimes I wish I wouldn't wake up.`, `Passive suicidal ideation.`],
      [`はい、 自殺《じさつ》 を 考《かんが》えて います。`, `Yes, I think about killing myself.`, `Active suicidal ideation; assess plan, intent, means.`],
      [`はい、 もう 方法《ほうほう》 も 決《き》めて います。`, `Yes, I already have a plan.`, `Suicide plan; high risk, needs immediate safety measures.`],
      [`手元《てもと》 の 薬《くすり》 を 全部《ぜんぶ》 飲《の》もう と 思《おも》って います。`, `I would take all my medicines.`, `Overdose plan; restrict access to medication.`],
      [`前《まえ》 に も 一度《いちど》、 死《し》のう と した こと が あります。`, `I tried before.`, `Previous attempt; strongest predictor of a future attempt.`],
      [`生《い》きる の に 疲《つか》れました。`, `I'm tired of life.`, `Passive ideation or hopelessness; ask directly about suicide.`],
      [`子《こ》どもたち が いる から、 実際《じっさい》 に は しません。`, `I wouldn't do it because of my children.`, `Protective factor; does not exclude risk.`],
      [`楽《らく》 に なりたくて、 自分《じぶん》 を 傷《きず》つけて しまいます。`, `I hurt myself to feel relief.`, `Non-suicidal self-injury; assess frequency and escalation.`],
      [`あれ は 大《おお》げさ に 言《い》った だけ で、 本気《ほんき》 じゃ ない です。`, `That was just drama, I wouldn't really do it.`, `Minimisation; still take it seriously and assess intent.`]
    ],
    'violence': [
      [`いいえ、 誰《だれ》 か を 傷《きず》つける つもり は ありません。`, `No, I don't plan to hurt anyone.`],
      [`はい、 あの 人《ひと》 に すごく 腹《はら》 が 立《た》って います。`, `Yes, I'm very angry at him.`, `Anger toward a specific person; identify the target.`],
      [`あいつ を 痛《いた》い 目《め》 に あわせたい。`, `I want to hurt him/her.`, `Homicidal ideation; assess plan and means, and the duty to protect the person at risk.`],
      [`あいつ を 殺《ころ》したい と 思《おも》って います。`, `I think about killing him.`, `Homicidal ideation with intent; urgent safety response.`],
      [`前《まえ》 に 人《ひと》 を 殴《なぐ》った こと が あります。`, `I have hit someone before.`, `Past violence; risk factor.`],
      [`いつも ナイフ を 持《も》ち歩《ある》いて います。`, `I always carry a knife.`, `Access to a weapon; discuss securing it.`],
      [`猟銃《りょうじゅう》 を 持《も》って います。`, `I have a hunting gun.`, `Firearm access (in Japan usually a licensed hunting gun); urgent means restriction.`],
      [`声《こえ》 が あの 人《ひと》 を 傷《きず》つけろ って 言《い》う ん です。`, `The voices tell me to hurt him/her.`, `Command hallucination with violence; high risk.`],
      [`酔《よ》って た から 殴《なぐ》った だけ です。`, `I only hit him/her because I was drunk.`, `Intoxication-related violence; also minimisation.`]
    ],
    'substance': [
      [`お酒《さけ》 は 飲《の》みません。`, `I don't drink.`],
      [`週末《しゅうまつ》 に 飲《の》みます。`, `I drink on weekends.`],
      [`毎日《まいにち》 飲《の》んで います。`, `I drink every day.`, `Daily use; screen for dependence and withdrawal.`],
      [`ビール を 五本《ごほん》 くらい です。`, `About five beers.`],
      [`毎晩《まいばん》 焼酎《しょうちゅう》 を 一本《いっぽん》 空《あ》けます。`, `I finish a bottle of shochu every night.`, `Heavy use; risk of alcohol withdrawal.`],
      [`お酒《さけ》 が 切《き》れる と 手《て》 が 震《ふる》えます。`, `My hands shake when I can't drink.`, `Withdrawal tremor; assess for severe withdrawal.`],
      [`覚醒剤《かくせいざい》 を 使《つか》って います。`, `I use meth.`, `Methamphetamine, the most common illicit stimulant in Japan; assess psychosis and risk.`],
      [`たまに 大麻《たいま》 を 吸《す》う くらい です。`, `I only smoke weed once in a while.`],
      [`市販《しはん》 の 薬《くすり》 を たくさん 飲《の》んで います。`, `I take a lot of over-the-counter medicine.`, `Misuse of cough and cold medicines is common in Japan, especially among young people; ask what and how much, and assess overdose risk.`],
      [`パチンコ で 借金《しゃっきん》 が たくさん ある ん です。`, `I play pachinko, and I'm deep in debt.`, `Gambling disorder; assess financial stress and suicide risk.`],
      [`ちょっと だけ です よ。 問題《もんだい》 ない です。`, `That's just a little, it's not a problem.`, `Minimisation; use Shea-style specific quantity questions.`],
      [`やめられない ん です。`, `I can't stop.`, `Loss of control.`]
    ],
    'history': [
      [`はい、 前《まえ》 に 診《み》て もらった こと が あります。`, `Yes, I've had a check-up before.`],
      [`精神科《せいしんか》 に は かかった こと が ありません。`, `I've never seen a psychiatrist.`],
      [`前《まえ》 に 精神科《せいしんか》 の 病院《びょういん》 に 入院《にゅういん》 した こと が あります。`, `I was admitted to a psychiatric hospital before.`, `Prior psychiatric hospitalisation; ask for records or the diagnosis as told to the family.`],
      [`薬《くすり》 の 名前《なまえ》 が 思《おも》い出《だ》せません。`, `I can't remember the name of the medicine.`],
      [`薬《くすり》 を 飲《の》む の を やめました。`, `I stopped taking the medicine.`, `Non-adherence; ask why.`],
      [`お金《かね》 が なくて 買《か》えなく なった ん です。`, `We had no more money to buy it.`, `Cost barrier; ask about insurance and public support for outpatient psychiatric costs.`],
      [`もう 良《よ》く なった から です。`, `Because I got better already.`, `Common reason for stopping meds; psychoeducation on relapse.`],
      [`飲《の》む と 眠《ねむ》く なっちゃう ん です。`, `It made me sleepy.`, `Side-effect-driven non-adherence.`],
      [`血圧《けつあつ》 が 高《たか》い です。`, `I have high blood pressure.`],
      [`糖尿病《とうにょうびょう》 が あります。`, `I have diabetes.`],
      [`薬《くすり》 の アレルギー が あります。`, `I'm allergic to a medicine.`]
    ],
    'mse-cog': [
      [`名前《なまえ》 は ＿ です。`, `My name is ______.`],
      [`三十五歳《さんじゅうごさい》 です。`, `I'm thirty-five years old.`],
      [`今日《きょう》 が 何日《なんにち》 か わかりません。`, `I don't know today's date.`, `Disorientation to time.`],
      [`病院《びょういん》 に います。`, `I'm in a hospital.`],
      [`ここ が どこ か わかりません。`, `I don't know where I am.`, `Disorientation to place; consider delirium or dementia.`],
      [`九十三《きゅうじゅうさん》、 八十六《はちじゅうろく》、 七十九《ななじゅうきゅう》…`, `Ninety-three, eighty-six, seventy-nine…`],
      [`あれ、 もう 忘《わす》れちゃった。`, `Wait, I forgot already.`, `Impaired recall.`],
      [`難《むずか》しくて、 できません。`, `I can't do it, it's hard.`, `Effort refusal vs true deficit; assess attention and schooling.`],
      [`間違《まちが》えました、 すみません。`, `I made a mistake, sorry.`]
    ],
    'closing': [
      [`先生《せんせい》、 ありがとう ございました。`, `Thank you, Doctor.`],
      [`はい、 その とおり です。`, `Yes, your summary is correct.`],
      [`いいえ、 ちょっと 抜《ぬ》けて いる ところ が あります。`, `No, you missed something.`],
      [`もう 一《ひと》つ 言《い》いたい こと が あります。`, `There's something else I want to say.`],
      [`良《よ》く なる か どう か 聞《き》きたい ん です けど。`, `I want to ask if I will get better.`],
      [`次《つぎ》 の 予約《よやく》 は いつ です か。`, `When is my next visit?`],
      [`もう 質問《しつもん》 は ありません。`, `I have no more questions.`],
      [`まだ 緊張《きんちょう》 して います けど、 少《すこ》し 落《お》ち着《つ》きました。`, `I'm still nervous but I feel a bit calmer.`],
      [`助《たす》けて いただける と ありがたい です。`, `I hope you can help me.`]
    ]
  }
};
