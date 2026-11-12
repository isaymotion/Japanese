/* Likely patient replies, part 2 (sections added in version 0.2.0). Merged into PSYCH_ANSWERS.sections.
   item = [japanese, english, clinicalNote?]. STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician. */
window.PSYCH_ANSWERS = window.PSYCH_ANSWERS || { common: [], sections: {} };  /* guard: lets tools/check-ja.js load this file on its own */
Object.assign(window.PSYCH_ANSWERS.sections, {
  'trauma': [
    [`はい、 昔《むかし》 ちょっと 嫌《いや》 な こと が ありました。`, `Yes, something bad happened to me in the past.`],
    [`その 話《はなし》 は したく ない です。`, `I don't want to talk about it.`, `Avoidance; do not push, offer to return to it later.`],
    [`何度《なんど》 も 頭《あたま》 に 浮《う》かんで くる ん です。`, `It keeps coming back to my mind.`, `Intrusive memories.`],
    [`ほとんど 毎晩《まいばん》 怖《こわ》い 夢《ゆめ》 を 見《み》ます。`, `I have bad dreams almost every night.`, `Trauma-related nightmares.`],
    [`今《いま》 また 起《お》きて いる みたい に 感《かん》じる ん です。`, `It feels like it's happening again now.`, `Flashbacks.`],
    [`ちょっと した 物音《ものおと》 でも びくっ と します。`, `I jump at the smallest noise.`, `Hypervigilance, exaggerated startle.`],
    [`あの 場所《ばしょ》 に は 近《ちか》づかない よう に して います。`, `I keep away from that place.`, `Avoidance symptom.`],
    [`自分《じぶん》 が 体《からだ》 から 抜《ぬ》け出《だ》す よう な 感《かん》じ が します。`, `It feels like I'm slipping out of my body.`, `Possible depersonalisation; ask about blanking out and gaps in memory.`],
    [`あんな こと に なった の は 自分《じぶん》 の せい だ と 思《おも》います。`, `I think what happened was my fault.`, `Trauma-related guilt.`],
    [`もう 昔《むかし》 の こと です から、 今《いま》 は 平気《へいき》 です。`, `That was long ago, I'm fine now.`, `Possible minimisation or avoidance.`]
  ],
  'deescalation': [
    [`今《いま》 すぐ 家《いえ》 に 帰《かえ》らせて！`, `Let me go home right now!`],
    [`こんな ところ に いたく ない！ ほっといて！`, `I don't want to be here, leave me alone!`, `Agitation; give space and reduce stimulation.`],
    [`触《さわ》らないで！`, `Don't touch me!`],
    [`もう 頭《あたま》 に きた！`, `I'm furious!`],
    [`怖《こわ》くて、 どう したら いい か わからない ん です。`, `I'm scared, I don't know what to do.`, `Fear underlying agitation.`],
    [`わかった、 落《お》ち着《つ》く から。`, `Okay, I'll calm down.`],
    [`お水《みず》 を もらえます か。`, `Can I have some water?`],
    [`母《はは》 と 話《はな》したい です。`, `I want to talk to my mother.`],
    [`注射《ちゅうしゃ》 は 嫌《いや》 です。`, `I don't want an injection.`, `Refusal of IM medication; offer the oral option.`],
    [`帰《かえ》ります。 止《と》める 権利《けんり》 なんて ない でしょう。`, `I'm leaving. You have no right to stop me.`, `Elopement risk; assess capacity and safety.`]
  ],
  'family-hx': [
    [`うち の 家族《かぞく》 に は、 そういう 人《ひと》 は いません。`, `No one in our family has anything like that.`],
    [`はい、 父《ちち》 も 同《おな》じ 病気《びょうき》 でした。`, `Yes, my father had the same illness.`, `Family history of mental illness.`],
    [`叔母《おば》 が 精神科《せいしんか》 に 入院《にゅういん》 して いました。`, `My aunt was admitted to a psychiatric hospital.`],
    [`祖父《そふ》 は 自殺《じさつ》 で 亡《な》くなりました。`, `My grandfather took his own life.`, `Family history of suicide; raises risk.`],
    [`兄《あに》 が 薬物《やくぶつ》 を やめられない ん です。`, `My older brother can't stop using drugs.`, `Family history of substance use.`],
    [`父《ちち》 は いつも お酒《さけ》 を 飲《の》んで 酔《よ》って いました。`, `My father was always drunk.`, `Family history of alcohol use.`],
    [`よく わかりません。 うち で は そういう 話《はなし》 を しない ので。`, `I'm not sure, we don't talk about that at home.`, `Stigma; collateral history may be needed.`],
    [`おじ は 頭《あたま》 が おかしい って 言《い》われて いました。`, `People used to say my uncle wasn't right in the head.`, `Lay label for possible psychosis; clarify details.`]
  ],
  'social': [
    [`田舎《いなか》 の 小《ちい》さな 町《まち》 で 育《そだ》ちました。`, `I grew up in a small country town.`],
    [`祖母《そぼ》 に 育《そだ》てられました。`, `My grandmother raised me.`],
    [`中学《ちゅうがく》 まで しか 行《い》って いません。`, `I only finished junior high school.`, `Schooling guides the cognitive exam.`],
    [`今《いま》 は 仕事《しごと》 を して いません。`, `I have no job now.`],
    [`五年《ごねん》 前《まえ》 から 単身赴任《たんしんふにん》 で、 家族《かぞく》 は 地元《じもと》 に います。`, `For five years I've been posted away for work; my family stayed in my home town.`, `Long separation from family for work; ask about loneliness, drinking and strain at home.`],
    [`今《いま》 は 一人暮《ひとりぐ》らし です。`, `I live alone now.`, `Social isolation; risk factor.`],
    [`妻《つま》 と は 別居《べっきょ》 して います。`, `My wife and I are separated.`],
    [`夫《おっと》 に 殴《なぐ》られる ん です。`, `My husband hits me.`, `Intimate partner violence; ask privately about safety and children.`],
    [`生活《せいかつ》 が 苦《くる》しくて、 お金《かね》 が 足《た》りません。`, `Life is hard, we don't have enough money.`],
    [`子《こ》ども の 頃《ころ》 は 幸《しあわ》せ でした。`, `My childhood was happy.`]
  ],
  'collateral': [
    [`妻《つま》 です。`, `I'm his wife.`],
    [`息子《むすこ》 です。`, `I'm his/her son.`],
    [`母親《ははおや》 です。`, `I'm his/her mother.`],
    [`ここ 数《すう》か月《げつ》 で、 すっかり 人《ひと》 が 変《か》わって しまいました。`, `He/she has become a different person these past months.`],
    [`一人《ひとり》 で しゃべったり 笑《わら》ったり して いる ん です。`, `He/she talks and laughs alone.`, `Observed responding to internal stimuli; possible psychosis.`],
    [`ほとんど 寝《ね》ないで、 毎日《まいにち》 出歩《である》いて います。`, `He/she hardly sleeps and is out every day.`, `Possible manic episode.`],
    [`ご飯《はん》 も 食《た》べないで、 ずっと 泣《な》いて います。`, `He/she won't eat and cries all the time.`],
    [`死《し》にたい って 言《い》って いました。`, `He/she said he/she wanted to die.`, `Family-reported suicidal statement; take it seriously.`],
    [`人《ひと》 を 叩《たた》いたり、 物《もの》 を 壊《こわ》したり する ん です。`, `He/she hits people and breaks things.`, `Aggression; assess risk to the family.`],
    [`何《なに》 か が ついた ん じゃ ない か と 思《おも》って、 おはらい に 連《つ》れて 行《い》きました。`, `We thought something had possessed him, so we took him for a purification ritual.`, `Spiritual explanatory model; ask what was done and how long it delayed medical care.`]
  ],
  'mse-abstract': [
    [`どちら も 果物《くだもの》 です。`, `They are both fruits.`, `Abstract answer.`],
    [`どちら も 乗《の》り物《もの》 です。`, `They are both vehicles.`, `Abstract answer.`],
    [`どちら も 丸《まる》い です。`, `They are both round.`, `Concrete answer.`],
    [`どんな に 上手《じょうず》 な 人《ひと》 でも、 失敗《しっぱい》 する こと が ある と いう 意味《いみ》 です。`, `That even a skilled person can make mistakes.`, `Abstract interpretation of the monkey-falls-from-the-tree proverb.`],
    [`花《はな》 を 見《み》る より、 団子《だんご》 を 食《た》べる ほう が いい って こと です。`, `That eating dumplings is better than looking at flowers.`, `Concrete interpretation of the flowers-and-dumplings proverb.`],
    [`どういう 意味《いみ》 か わかりません。`, `I don't know what it means.`],
    [`交番《こうばん》 に 届《とど》けます。`, `I would take it to the police box.`, `Reasonable judgment.`],
    [`自分《じぶん》 で 持《も》って おきます。`, `I would keep it.`, `Poor judgment on the found-wallet question.`],
    [`病気《びょうき》 じゃ ない から、 治療《ちりょう》 なんて いりません。`, `I'm not sick, I don't need treatment.`, `Absent insight.`],
    [`ストレス の せい かも しれない けど、 助《たす》け は 必要《ひつよう》 だ と 思《おも》います。`, `Maybe it's just stress, but I do think I need help.`, `Partial insight.`]
  ],
  'mse-describe': [
    [`特《とく》に 問題《もんだい》 ない です。`, `I'm fine, nothing's wrong.`],
    [`ここ 何日《なんにち》 か お風呂《ふろ》 に 入《はい》って いません。`, `I haven't bathed these past few days.`, `Poor self-care.`],
    [`そわそわ して、 じっと 座《すわ》って いられない ん です。`, `I'm restless, I can't sit still.`, `Psychomotor agitation or akathisia.`],
    [`最近《さいきん》 動《うご》き が のろく なりました。`, `I've become slow in my movements lately.`, `Psychomotor retardation.`],
    [`人《ひと》 の 目《め》 を 見《み》る の が 苦手《にがて》 な ん です。`, `I'm not good at looking people in the eye.`, `Limited eye contact can be ordinary politeness in Japanese conversation; compare with the patient's usual manner before calling it pathology.`],
    [`特《とく》に 話《はな》したい こと は ありません。`, `I have nothing in particular I want to say.`, `Poverty of speech or guardedness.`],
    [`手《て》 が 震《ふる》えて います。`, `My hands are trembling.`, `Tremor; consider medication effect, anxiety, withdrawal.`],
    [`今《いま》 の、 先生《せんせい》 に も 聞《き》こえました？`, `Did you hear that too, Doctor?`, `Responding to internal stimuli.`],
    [`ただ 疲《つか》れて いる だけ です。 寝《ね》て ない ので。`, `I'm just tired, I didn't sleep.`]
  ],
  'explain': [
    [`はい、 よく わかりました。`, `Yes, I understand.`],
    [`それ って、 私《わたし》 が おかしい って こと です か。`, `Does that mean I'm crazy?`, `Stigma concern; address it directly.`],
    [`治《なお》ります か。`, `Will I get better?`],
    [`自分《じぶん》 が 病気《びょうき》 だ と は 思《おも》えません。`, `I can't believe I'm sick.`, `Poor insight; explore the explanatory model.`],
    [`何《なに》 か の バチ が 当《あ》たった ん だ と 思《おも》います。`, `I think I'm being punished for something I did.`, `Moral or spiritual explanatory model; respect it and work it into the explanation, do not dismiss it.`],
    [`先《さき》 に 漢方《かんぽう》 を 試《ため》して みたい です。`, `I'd rather try herbal (kampo) medicine first.`, `Ask which herbal remedies are already taken, as some interact with prescribed medicines.`],
    [`一生《いっしょう》 薬《くすり》 を 飲《の》み続《つづ》ける の は 嫌《いや》 です。`, `I don't want to take medicine for the rest of my life.`, `Adherence concern; discuss duration and options.`],
    [`こんな 病気《びょうき》 に なって、 恥《は》ずかしい です。`, `I'm ashamed to have this illness.`],
    [`ありがとう ございます。 少《すこ》し 安心《あんしん》 しました。`, `Thank you, I feel a little reassured.`]
  ],
  'meds': [
    [`はい、 毎日《まいにち》 ちゃんと 飲《の》んで います。`, `Yes, I take it properly every day.`],
    [`たまに 飲《の》み忘《わす》れます。`, `I forget sometimes.`],
    [`今週《こんしゅう》 は 二回《にかい》 飲《の》み忘《わす》れました。`, `I missed it twice this week.`],
    [`薬代《くすりだい》 が 高《たか》くて、 払《はら》えない ん です。`, `The medicine is too expensive, I can't pay for it.`, `Cost barrier; explain public support for outpatient psychiatric costs.`],
    [`一日中《いちにちじゅう》 眠《ねむ》い です。`, `I'm sleepy all day.`, `Sedation side effect.`],
    [`この 薬《くすり》 を 飲《の》み始《はじ》めて から、 手《て》 が 震《ふる》える ん です。`, `My hands have trembled since I started this medicine.`, `Possible extrapyramidal side effect.`],
    [`首《くび》 と あご が こわばって います。`, `My neck and jaw feel stiff.`, `Possible acute dystonia; urgent.`],
    [`じっと して いられなくて、 すぐ 立《た》ち上《あ》がりたく なります。`, `I can't stay still, I keep wanting to get up.`, `Possible akathisia.`],
    [`体重《たいじゅう》 が 増《ふ》えて、 性欲《せいよく》 も なくなりました。`, `I gained weight and lost my sex drive.`, `Side effects causing non-adherence; ask sensitively.`],
    [`良《よ》く なった ので、 自分《じぶん》 で やめました。`, `I got better, so I stopped on my own.`],
    [`立《た》ち上《あ》がる と、 くらっ と します。`, `I get dizzy when I stand up.`, `Orthostatic hypotension; check blood pressure.`]
  ],
  'admission': [
    [`入院《にゅういん》 は したく ありません。`, `I don't want to be admitted.`, `Refusal; assess capacity and risk.`],
    [`わかりました。 入院《にゅういん》 します。`, `All right, I'll be admitted.`],
    [`どれ くらい 入院《にゅういん》 する ん です か。`, `How long will I be in hospital?`],
    [`家族《かぞく》 は 面会《めんかい》 に 来《こ》られます か。`, `Can my family visit me?`],
    [`子《こ》ども の 面倒《めんどう》 は 誰《だれ》 が 見《み》る ん です か。`, `Who will take care of my children?`],
    [`仕事《しごと》 を クビ に なって しまいます。`, `I'll get fired from my job.`],
    [`入院費《にゅういんひ》 なんて 払《はら》えません。`, `I can't pay hospital fees.`, `Cost fear; involve the psychiatric social worker early.`],
    [`ここ は 怖《こわ》い です。`, `I'm scared here.`],
    [`いつ 退院《たいいん》 できます か。`, `When can I go home?`]
  ],
  'child': [
    [`＿ です。 八歳《はっさい》 です。`, `I'm ______, I'm eight years old.`],
    [`三年生《さんねんせい》 です。`, `I'm in third grade.`],
    [`スマホ の ゲーム が 好《す》き。`, `I like games on the phone.`],
    [`友《とも》だち が いない。`, `I have no friends.`, `Social isolation; ask about bullying.`],
    [`学校《がっこう》 で いじめられて る。`, `I get bullied at school.`, `Bullying; assess safety and mood.`],
    [`学校《がっこう》 に 行《い》きたく ない。`, `I don't want to go to school.`, `School refusal; explore anxiety, bullying, mood.`],
    [`お父《とう》さん と お母《かあ》さん が ケンカ する の。`, `Mom and Dad fight.`],
    [`いつも お腹《なか》 が 痛《いた》い。`, `My tummy always hurts.`, `Somatic complaint in children; consider anxiety.`],
    [`ずっと 座《すわ》って られない。`, `I can't sit for long.`],
    [`痛《いた》い こと を して くる 人《ひと》 が いる。`, `Someone does things that hurt me.`, `Possible abuse; follow child protection and reporting procedures.`]
  ],
  'elderly': [
    [`はい、 おはよう ございます。`, `Good morning to you too.`],
    [`え？ 何《なん》 です って？ よく 聞《き》こえない ん です よ。`, `What's that? I can't hear you well.`, `Hearing impairment; adjust the approach before cognitive testing.`],
    [`近頃《ちかごろ》、 物忘《ものわす》れ が ひどく なって ね。`, `My forgetfulness has got bad these days.`, `Subjective memory decline.`],
    [`近所《きんじょ》 でも 道《みち》 に 迷《まよ》って しまう ん です。`, `I get lost even in my own neighbourhood.`, `Disorientation; dementia concern.`],
    [`今日《きょう》 が 何曜日《なんようび》 だった か、 わからなく なって しまって。`, `I've lost track of what day it is.`],
    [`毎晩《まいばん》、 夕方《ゆうがた》 から 落《お》ち着《つ》かなくて、 わけ が わからなく なる ん です。`, `Every evening I get restless and confused.`, `Sundowning or delirium.`],
    [`誰《だれ》 も いない のに、 人《ひと》 が 見《み》える ん です。`, `I see people when no one is there.`, `Visual hallucinations; consider delirium or Lewy body disease.`],
    [`今《いま》 は 一人《ひとり》 で、 誰《だれ》 も 会《あ》い に 来《き》ません。`, `I'm alone now, no one comes to see me.`, `Isolation; screen for depression.`],
    [`夜《よる》 は 眠《ねむ》れない し、 体《からだ》 の あちこち が 痛《いた》い ん です。`, `I can't sleep at night and I ache all over.`]
  ],
  'shea-techniques': [
    [`一回《いっかい》 で ビール 十本《じゅっぽん》 くらい です。`, `About ten beers in one sitting.`, `Heavy drinking; symptom amplification (a high anchor) makes a large number easier to admit.`],
    [`数《かぞ》えて ません。 酔《よ》う まで 飲《の》む ので。`, `I don't count, I just drink until I'm drunk.`, `Heavy use; possible minimisation or blackouts.`],
    [`本当《ほんとう》 に ちょっと だけ です って。`, `It's really just a little, I'm telling you.`, `Likely minimisation; probe with specific amounts.`],
    [`持《も》って いる 薬《くすり》 を 全部《ぜんぶ》 飲《の》んで しまおう か と 考《かんが》えました。`, `I thought of taking all the medicine I have.`, `Overdose ideation; assess plan and means.`],
    [`首《くび》 を つろう と 考《かんが》えた こと が あります。`, `I have thought of hanging myself.`, `Specific method; high lethality, assess intent.`],
    [`飛《と》び降《お》りよう か と 思《おも》いました。`, `I thought of jumping.`, `Specific method; assess access and intent.`],
    [`言《い》う の が 恥《は》ずかしい です。`, `I'm embarrassed to say it.`, `Shame; reassure and normalise before asking again.`],
    [`実《じつ》 は、 私《わたし》 も そう 考《かんが》えた こと が あります。`, `Actually, I've had thoughts like that too.`, `Disclosure after a normalising question.`],
    [`はい、 本当《ほんとう》 は もっと です。`, `Yes, actually even more than that.`, `Gentle assumption elicited the higher true amount.`],
    [`いいえ、 そんな こと は 考《かんが》えた こと も ありません。`, `No, I've never even thought of that.`]
  ]
});
