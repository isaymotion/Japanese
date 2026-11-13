/* Likely patient replies, part 3b: nurse sections (nurse-risk, nurse-calm, nurse-educ). item = [japanese, english, clinicalNote?].
   STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician; nurse content pending Nursing Service review. */
window.PSYCH_ANSWERS = window.PSYCH_ANSWERS || { common: [], sections: {} };
Object.assign(window.PSYCH_ANSWERS.sections, {
  'nurse-risk': [
    [`朝《あさ》 から なんだか 落《お》ち着《つ》きません。`, `I've felt unsettled since the morning.`, `Ask what is behind it; restlessness can come before agitation or be a medicine side effect.`],
    [`昨日《きのう》 より は 少《すこ》し まし です。`, `A little better than yesterday.`],
    [`いいえ、 死《し》にたい と は 思《おも》って いません。`, `No, I haven't been thinking of dying.`],
    [`正直《しょうじき》、 死《し》にたい 気持《きも》ち は まだ あります。`, `Honestly, I still feel like dying.`, `Ask whether it is stronger than before, and tell the doctor.`],
    [`昨日《きのう》 より 強《つよ》く なって います。`, `It's stronger than yesterday.`, `Tell the doctor at once.`],
    [`もう 決《き》めた ん です。`, `I've already made up my mind.`, `Possible plan or intent. Stay with the patient and tell the doctor at once.`],
    [`声《こえ》 が 「死《し》ね」 って 言《い》う ん です。`, `The voice tells me to die.`, `Command voices: tell the doctor at once.`],
    [`だれ か に 狙《ねら》われて いる 気《き》 が して、 怖《こわ》い です。`, `I feel someone is after me. I'm scared.`, `Fear can drive agitation; report it to the doctor.`],
    [`なんで 部屋《へや》 を 調《しら》べる ん です か。 私《わたし》 を 疑《うたが》って いる ん です か。`, `Why are you searching my room? Do you suspect me?`, `Explain again that the check is routine for everyone.`],
    [`今日《きょう》 は 気分《きぶん》 が すっきり して います。 もう 何《なに》 も 心配《しんぱい》 いりません。`, `I feel clear today. There's nothing to worry about any more.`, `A sudden calm after despair: ask gently and tell the doctor at once.`]
  ],
  'nurse-calm': [
    [`静《しず》か な 部屋《へや》 で 少《すこ》し 休《やす》みたい です。`, `I'd like to rest in the quiet room for a bit.`],
    [`お茶《ちゃ》 を もらえます か。`, `Could I have some tea?`],
    [`じゃあ、 先《さき》 に 少《すこ》し 休《やす》みます。`, `Then I'll rest a bit first.`],
    [`薬《くすり》 は いらない！`, `I don't want medicine!`, `Ask what worries them about it and report the refusal to the doctor.`],
    [`あの 薬《くすり》、 飲《の》む と ぼーっと する から 嫌《いや》 な ん です。`, `I don't want that medicine. It makes me feel foggy.`, `Report the reason to the doctor; it may be a side effect.`],
    [`そんな 大勢《おおぜい》 で 来《こ》ないで よ！`, `Don't all come at me like that!`, `Keep only the staff who are needed close by; others can wait a little further away, if that is safe.`],
    [`ずっと 待《ま》たされて、 頭《あたま》 に きた ん です。`, `I was kept waiting for ages and lost my temper.`],
    [`さっき は 大《おお》きな 声《こえ》 を 出《だ》して、 すみません でした。`, `I'm sorry for shouting earlier.`],
    [`一人《ひとり》 に なれた の が よかった です。`, `Having some time alone helped.`],
    [`次《つぎ》 は イライラ して きたら、 早《はや》め に 言《い》います。`, `Next time I'll tell you sooner when I start getting irritated.`]
  ],
  'nurse-educ': [
    [`わかりました。 毎日《まいにち》 同《おな》じ ころ に 飲《の》みます。`, `I understand. I'll take it at about the same time each day.`],
    [`よく なったら、 もう 薬《くすり》 は やめて いい ん です よね？`, `Once I'm better I can stop the medicine, right?`, `Explain again that stopping is decided with the doctor.`],
    [`薬《くすり》 で 太《ふと》る の が 心配《しんぱい》 です。`, `I'm worried the medicine will make me put on weight.`, `Report the worry to the doctor; it can lead to stopping the medicine.`],
    [`朝《あさ》 は よく 飲《の》み忘《わす》れて しまいます。`, `I often forget the morning dose.`],
    [`お酒《さけ》 は 少《すこ》し なら いい です か。`, `Is a little alcohol all right?`, `Refer the question to the doctor.`],
    [`薬《くすり》 は 自分《じぶん》 で 管理《かんり》 したい です。`, `I want to look after my own medicines.`, `Report to the doctor, who decides who keeps the medicines.`],
    [`本人《ほんにん》 が 飲《の》まない と 言《い》ったら、 どう したら いい です か。`, `What should we do if they say they won't take it?`, `Advise the family to contact the hospital; do not suggest forcing it.`],
    [`最近《さいきん》 また 夜《よる》 眠《ねむ》れて いない みたい な ん です。`, `Lately they don't seem to be sleeping at night again.`, `Possible early sign of relapse; tell the doctor.`],
    [`私《わたし》 も もう 疲《つか》れて しまって。`, `I'm worn out too.`, `Carer strain: ask how they are coping and tell the team.`],
    [`次《つぎ》 の 外来《がいらい》 は いつ です か。`, `When is the next appointment?`]
  ]
});
