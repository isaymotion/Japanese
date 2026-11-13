/* Likely patient replies, part 3a: nurse sections (nurse-admit, nurse-meds, nurse-daily). item = [japanese, english, clinicalNote?].
   STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician; nurse content pending Nursing Service review. */
window.PSYCH_ANSWERS = window.PSYCH_ANSWERS || { common: [], sections: {} };
Object.assign(window.PSYCH_ANSWERS.sections, {
  'nurse-admit': [
    [`はい、 わかりました。`, `Yes, I understand.`],
    [`どうして 荷物《にもつ》 を 調《しら》べる ん です か。`, `Why do you have to look through my things?`, `Explain calmly: it is done with everyone, for safety, and items are returned at discharge.`],
    [`スマホ は 持《も》って いて も いい です か。`, `Can I keep my phone?`, `Check your ward's rules and the doctor's orders before you answer.`],
    [`家族《かぞく》 は いつ 来《こ》られます か。`, `When can my family come?`],
    [`名字《みょうじ》 で 呼《よ》んで ください。`, `Please call me by my family name.`],
    [`下《した》 の 名前《なまえ》 で 呼《よ》んで もらえる と うれしい です。`, `I'd like to be called by my first name.`],
    [`ちょっと 疲《つか》れた ので、 横《よこ》 に なりたい です。`, `I'm a bit tired, I'd like to lie down.`],
    [`こんな ところ に いたく ありません。`, `I don't want to be here.`, `Acknowledge the feeling, without arguing; tell the doctor, at once if the patient asks or tries to leave.`],
    [`この 指輪《ゆびわ》 は 外《はず》したく ない です。`, `I don't want to take off this ring.`, `Ask why it matters; check your ward's rules and offer a choice where you can.`],
    [`今《いま》 は 特《とく》 に 大丈夫《だいじょうぶ》 です。`, `I'm fine for now.`]
  ],
  'nurse-meds': [
    [`はい、 飲《の》みます。`, `Yes, I'll take it.`],
    [`今《いま》 は 飲《の》みたく ない です。`, `I don't want to take it now.`, `Ask why, do not press; record it and tell the doctor.`],
    [`この 薬《くすり》、 いつも と 色《いろ》 が 違《ちが》います。`, `This medicine is a different colour from usual.`, `Stop and check the order before you give it.`],
    [`飲《の》む と 眠《ねむ》く なって、 何《なに》 も できない ん です。`, `When I take it I get sleepy and can't do anything.`, `Possible side effect; tell the doctor.`],
    [`毒《どく》 が 入《はい》って いる ん じゃ ない です か。`, `Isn't there poison in it?`, `Possible persecutory belief; do not argue, tell the doctor.`],
    [`足《あし》 が むずむず して、 じっと して いられません。`, `My legs feel restless, I can't keep still.`, `Possible akathisia; tell the doctor.`],
    [`手《て》 が ずっと ふるえて います。`, `My hands keep shaking.`, `Tell the doctor; at once if with vomiting, diarrhoea or confusion.`],
    [`眠《ねむ》れない ので、 眠《ねむ》れる 薬《くすり》 を もらえます か。`, `I can't sleep, can I have something to help me sleep?`, `Check whether there is an as-needed order.`],
    [`もう 治《なお》った から、 薬《くすり》 は いらない と 思《おも》います。`, `I'm better now, so I don't think I need the medicine.`, `Listen, record and tell the doctor.`],
    [`後《あと》 で 飲《の》みます から、 置《お》いて おいて ください。`, `I'll take it later, just leave it there.`, `Do not leave medicines at the bedside; offer to come back.`]
  ],
  'nurse-daily': [
    [`あまり 眠《ねむ》れません でした。`, `I didn't sleep much.`],
    [`夜中《よなか》 に 何度《なんど》 も 目《め》 が 覚《さ》めました。`, `I woke up many times in the night.`],
    [`ぐっすり 眠《ねむ》れました。`, `I slept soundly.`],
    [`食欲《しょくよく》 が なくて、 半分《はんぶん》 くらい しか 食《た》べられません でした。`, `I had no appetite and could only eat about half.`],
    [`ご飯《はん》 に 何《なに》 か 入《はい》って いる 気《き》 が して、 食《た》べられません。`, `I feel something has been put in the food, so I can't eat it.`, `Possible delusional belief; do not argue. Record intake and tell the doctor.`],
    [`もう 四日《よっか》 くらい お通《つう》じ が ありません。`, `I haven't had a bowel movement for about four days.`, `Report it; tell the doctor at once if there is belly pain, swelling or vomiting.`],
    [`おしっこ が 出《で》にくい です。`, `It's hard to pass urine.`, `Possible medicine side effect; tell the doctor.`],
    [`今日《きょう》 は お風呂《ふろ》 に 入《はい》りたく ない です。`, `I don't want to bathe today.`, `Ask why; offer another time or a wipe-down.`],
    [`頭《あたま》 が 痛《いた》い です。`, `I have a headache.`],
    [`何《なに》 も する 気《き》 に なりません。`, `I don't feel like doing anything.`, `Low energy or motivation; record and pass it on.`]
  ]
});
