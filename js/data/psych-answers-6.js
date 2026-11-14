/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* Likely patient replies, part 6 (0.19.0): replies heard in the nurse case simulations, for the nurse sections. MERGES into existing keys (load after part 5). Item [ja, en, note?]. */
window.PSYCH_ANSWERS = window.PSYCH_ANSWERS || { common: [], sections: {} };
(function (S, add) { Object.keys(add).forEach((k) => (S[k] = (S[k] || []).concat(add[k]))); })(window.PSYCH_ANSWERS.sections, {
  'nurse-admit': [
    [`この 部屋《へや》、 カメラ で 見《み》られて いません か。`, `Is there a camera watching me in this room?`, `Possible idea of being watched; do not argue. Explain honestly that nurses check on everyone, for safety.`],
    [`勝手《かって》 に 触《さわ》らないで ください。 自分《じぶん》 で 出《だ》します。`, `Please don't touch my things without asking. I'll take them out myself.`, `Let the patient take the items out in front of you; it keeps the check going and gives back some control.`],
    [`預《あず》けた 物《もの》 は、 本当《ほんとう》 に 返《かえ》して もらえる ん です か。`, `Will I really get back the things I leave with you?`, `Say where each item is kept, that it is returned at discharge, and how to ask for it meanwhile.`],
    [`何《なに》 を すれば いい か、 全然《ぜんぜん》 わからない。`, `I have no idea what I'm supposed to do here.`, `Give short, concrete information: rest tonight, meal times, where the nurses are.`],
    [`夜《よる》 も 看護師《かんごし》さん は います か。`, `Are there nurses here at night too?`, `Say yes, and show the call button in person.`],
    [`誰《だれ》 も 信用《しんよう》 できない。 ここ の 人《ひと》 も 同《おな》じ だろ。`, `I can't trust anyone. The people here are the same, right?`, `Do not argue. Give your name, explain before you do anything, and make only promises you can keep.`],
    [`ここ に いる こと は、 誰《だれ》 に も 言《い》わないで ください。`, `Please don't tell anyone I'm here.`, `Explain who will know (the care team); check with the doctor before giving information to callers.`],
    [`ここ に 一人《ひとり》 で 残《のこ》して 帰《かえ》る の が 心配《しんぱい》 で……。`, `I'm worried about going home and leaving them here on their own...`, `A family member. Acknowledge the worry, explain visiting under the ward rules, and show how the patient can call a nurse.`]
  ],
  'nurse-meds': [
    [`今《いま》 まで で 一番《いちばん》 元気《げんき》 なのに、 なんで 飲《の》む の？`, `I've never felt better, so why should I take it?`, `Feeling very well is common in mania. Do not argue; ask what they dislike about the medicine.`],
    [`昼間《ひるま》 も ずっと 体《からだ》 が 重《おも》くて、 動《うご》く の が つらい です。`, `My body feels heavy all day, and it's hard to move.`, `Ask when it started and about daytime sleepiness or falls; tell the doctor.`],
    [`ふるえ は 前《まえ》 と 同《おな》じ くらい です。`, `The shaking is about the same as before.`, `Record it; tell the doctor at once if it gets worse or comes with vomiting, diarrhoea or confusion.`],
    [`吐《は》き気《け》 や 下痢《げり》 は ありません。`, `No nausea or diarrhoea.`],
    [`先生《せんせい》 に 言《い》って も、 どうせ 何《なに》 も 変《か》わらない よ。`, `Even if I tell the doctor, nothing will change anyway.`, `Explain simply that side effects can often be managed, and offer to pass it on.`],
    [`また 押《お》さえつけて 注射《ちゅうしゃ》 する ん でしょう？`, `You're going to hold me down and inject me again, aren't you?`, `Fear after a past restraint. Answer honestly, never use an injection as a threat, and tell the doctor.`],
    [`量《りょう》 を 減《へ》らして もらえない ん です か。`, `Can't they lower the amount?`, `Do not promise; say the doctor decides and pass the request on.`],
    [`明日《あした》、 先生《せんせい》 と 話《はな》して から 決《き》めたい です。`, `I'd like to talk with the doctor tomorrow before I decide.`, `A step toward agreement. Record what the patient wants to discuss and tell the doctor.`]
  ],
  'nurse-daily': [
    [`全然《ぜんぜん》 眠《ねむ》れない ん だ よ。 今《いま》、 何時《なんじ》？`, `I can't sleep at all. What time is it?`, `Give the time and your name. Ask about sweating, shaking and fear, and check orientation.`],
    [`喉《のど》 が からから です。`, `My throat is bone dry.`, `Offer a drink if allowed, record fluid intake, and report it if the patient is not drinking.`],
    [`寝《ね》なくて も 平気《へいき》。 やりたい こと が たくさん ある ん だ。`, `I don't need sleep. There's so much I want to do.`, `Little sleep with high energy: record the hours slept and tell the doctor, at once if it has gone on for nights.`],
    [`汗《あせ》 が 止《と》まらなくて、 シーツ が びしょびしょ です。`, `I can't stop sweating, and the sheets are soaking.`, `Check temperature, pulse and blood pressure and tell the doctor; offer dry sheets and clothes.`],
    [`お風呂《ふろ》 は、 誰《だれ》 か に 見《み》られそう で 嫌《いや》 です。`, `I don't want to bathe; I feel someone might watch me.`, `Possible fear of being watched. Offer privacy or another time, and record it.`],
    [`食《た》べる 暇《ひま》 なんて ない よ。 忙《いそ》しい ん だ から。`, `I've got no time to eat. I'm busy.`, `Common in mania. Offer small snacks that can be eaten on the move, record intake and tell the doctor.`]
  ],
  'nurse-risk': [
    [`今《いま》 も 声《こえ》 が 聞《き》こえて います。`, `I can hear the voice right now.`, `Ask what it says and whether they feel they must do what it says; tell the doctor.`],
    [`声《こえ》 が、 ここ から 出《で》て いけ って 言《い》う ん だ。`, `The voice is telling me to get out of here.`, `Command voices with a risk of leaving: stay close and tell the doctor at once.`],
    [`言《い》う とおり に しない と、 何《なに》 か 悪《わる》い こと が 起《お》きそう で 怖《こわ》い。`, `I'm scared something bad will happen if I don't do what it says.`, `Feels pushed to obey the voice: tell the doctor at once.`],
    [`ここ の 人《ひと》 は みんな グル な ん だろ。`, `Everyone here is in on it, aren't they?`, `Persecutory ideas that include staff. Do not argue; report it, as fear can lead to agitation.`],
    [`もう 帰《かえ》る。 止《と》めないで くれ。`, `I'm going home. Don't stop me.`, `Wish to leave: stay with the patient, keep calm, call for help and tell the doctor at once.`],
    [`壁《かべ》 の ところ に 虫《むし》 が いる。 見《み》えない の？`, `There are bugs on the wall. Can't you see them?`, `Seeing things that are not there may mean delirium or withdrawal. Check vital signs and orientation; tell the doctor at once.`],
    [`腕《うで》 を 何《なに》 か が はって いる 感《かん》じ が する。`, `It feels like something is crawling on my arm.`, `Possible tactile hallucination; with sweating or shaking, tell the doctor at once.`],
    [`頭《あたま》 が おかしく なりそう で、 怖《こわ》い ん です。`, `I feel like I'm going out of my mind. I'm scared.`, `Stay with the patient, speak calmly, check orientation and tell the doctor.`],
    [`死《し》にたい と は 思《おも》わない けど、 消《き》えて しまいたい と は 思《おも》う ん です。`, `I don't want to die, but I do wish I could disappear.`, `A wish not to exist still counts. Ask more, gently, and tell the doctor.`]
  ],
  'nurse-calm': [
    [`一人《ひとり》 に しないで くれ。`, `Don't leave me alone.`, `Stay, or arrange for someone to stay; tell the doctor if the fear is rising.`],
    [`大声《おおごえ》 なんか 出《だ》して ない よ。 普通《ふつう》 に 話《はな》して る だけ だ。`, `I'm not shouting. I'm just talking normally.`, `Do not argue. Lower your own voice and offer a quieter place.`],
    [`うるさい な、 ほっといて くれ。`, `Oh, be quiet and leave me alone.`, `Give space while keeping them in sight; say when you will come back.`],
    [`近《ちか》く に 来《こ》ないで。 そこ で 話《はな》して。`, `Don't come close. Talk from there.`, `Keep the distance the patient asks for, and keep a way out clear for both of you.`],
    [`ちゃんと 話《はなし》 を 聞《き》いて くれる なら、 落《お》ち着《つ》きます。`, `If you'll really listen to me, I'll calm down.`, `Listen, say back what you heard, and offer a quiet place to talk.`],
    [`廊下《ろうか》 を 歩《ある》いて いる ほう が 楽《らく》 な ん だ。`, `Walking up and down the corridor feels easier.`, `Allow it if it is safe. Ask whether the restlessness began after a new medicine; it may be a side effect.`],
    [`悪《わる》い な、 夜中《よなか》 に 迷惑《めいわく》 かけて。`, `Sorry for the trouble in the middle of the night.`, `Reassure them that calling is right, and keep checking on them.`],
    [`あの 夜《よる》 の こと、 今《いま》 でも 怖《こわ》い ん だ よ。`, `What happened that night still frightens me.`, `Fear after a past restraint or seclusion. Acknowledge it and tell the team; a fuller talk can follow later.`],
    [`電気《でんき》 は つけた まま に して ほしい。`, `I'd like the light left on.`, `A dim light at night can make frightening misperceptions less likely; follow your ward's routine.`]
  ],
  'nurse-educ': [
    [`副作用《ふくさよう》 が 出《で》たら、 誰《だれ》 に 言《い》えば いい です か。`, `If I get side effects, who should I tell?`, `Any nurse or doctor on the ward; after discharge, contact the hospital.`],
    [`お酒《さけ》 を やめる の は、 正直《しょうじき》 自信《じしん》 が ない。`, `Honestly, I'm not confident I can stop drinking.`, `Thank them for being honest and tell the doctor, so the team can plan support.`],
    [`ぼーっと する の が 減《へ》る なら、 続《つづ》けて みて も いい。`, `If the fogginess eases, I might keep taking it.`, `Pass the condition on to the doctor; it shows what matters to the patient.`],
    [`家《いえ》 で 様子《ようす》 が おかしく なったら、 どこ に 連絡《れんらく》 すれば いい です か。`, `If they start to seem unwell at home, whom should we contact?`, `A family member. Give the hospital's contact details; in an emergency, 119.`]
  ]
});
