/* De-escalation process checklist.
   Hanashimashō (Japanese). STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician.
   Structure follows a generic inpatient nursing de-escalation checklist (behaviors observed → 12 steps → escalation →
   what happens if it fails), with Japanese phrases for each step. Field names stay `tl`, `f`, `c` for engine
   compatibility: `tl` = Japanese text; in phrase objects f = polite です/ます, c = gentle plain form.
   No patient, staff, or hospital information is stored here. Roles are generic (first responder, charge nurse,
   physician on duty); follow your own hospital's policy.
   New phrases are APPENDED to the "deescalation" section (indexes 0–11 are the originals and are never touched) so they
   also appear in flashcards, search, and handouts. Phrase indexes are flashcard IDs: never insert, only append.
   Shape: window.PSYCH_DEESC = {
     behaviors: [ { en, tl, say } ],                  // observed behaviors; tl = Japanese label, say = Japanese sentence about the patient
     steps:     [ { en, tip, say: ['sectionId:index'] } ],   // handout.js/deesc.js read say[0] as a phrase ref
     after:     [ { title, who, points: [string], say: ['sectionId:index'] } ],
     escalation:[ [abbr, role, description] ],
     escLine:   string,                               // one sentence used by the checklist and the pocket card
     signatures:[ string ],
     debrief:   ['sectionId:index', 'sectionId:index'], // the two debrief lines the pocket card prints
     outcomes:  [ [id, label] ] } */
(function () {
  const sec = (window.PSYCH_SECTIONS || []).find((s) => s.id === 'deescalation');
  if (!sec) return;
  const idx = (en) => sec.phrases.findIndex((p) => p.en === en);
  const add = (p) => { let i = idx(p.en); if (i < 0) { sec.phrases.push(p); i = sec.phrases.length - 1; } return 'deescalation:' + i; };
  const use = (en) => 'deescalation:' + idx(en);

  window.PSYCH_DEESC = {
    behaviors: [
      { en: 'Restlessness', tl: `落《お》ち着《つ》き が ない`, say: `じっと して いられません。` },
      { en: 'Irritability', tl: `いらいら して いる`, say: `いらいら して いて、 何《なん》 に でも 腹《はら》 を 立《た》てて います。` },
      { en: 'Anger with loud voice', tl: `怒《おこ》って 大声《おおごえ》 を 出《だ》す`, say: `怒《おこ》って、 大声《おおごえ》 で 叫《さけ》んで います。` },
      { en: 'Pacing back and forth', tl: `行《い》ったり 来《き》たり する`, say: `ずっと 行《い》ったり 来《き》たり して います。` },
      { en: 'Agitation', tl: `興奮《こうふん》`, say: `とても 興奮《こうふん》 して いて、 自分《じぶん》 を 抑《おさ》えられません。` },
      { en: 'Threatening', tl: `脅《おど》し`, say: `人《ひと》 に 危害《きがい》 を 加《くわ》える と 言《い》って 脅《おど》して います。` },
      { en: 'Demanding', tl: `要求《ようきゅう》 が 強《つよ》い`, say: `すぐ に 対応《たいおう》 しろ と 強《つよ》く 要求《ようきゅう》 して います。` },
      { en: 'Hostility', tl: `敵意《てきい》`, say: `近《ちか》づく 人《ひと》 みんな に 敵意《てきい》 を 向《む》けて います。` },
      { en: 'Others (specify), e.g., lifting or throwing objects', tl: `物《もの》 を 持《も》ち上《あ》げる、 投《な》げる`, say: `ベッド を 持《も》ち上《あ》げて います。` }
    ],
    steps: [
      { en: 'Respect the patient\'s and your personal space. Keep at least two arms\' length between you and the patient.',
        tip: 'Stand at an angle, not face to face. Keep the exit behind you and hands visible.',
        say: [add({ en: 'I\'ll stay here. I won\'t come closer.', f: `私《わたし》 は ここ に います。 これ 以上《いじょう》 近《ちか》づきません。`, c: `ここ に いる よ。 これ 以上《いじょう》 近《ちか》づかない から ね。` })] },
      { en: 'Approach the patient in a non-threatening, calm manner. Do not provoke the patient.',
        tip: 'Soft, slow voice. No arguing, laughing, crowding, or sudden movements. One staff member speaks.',
        say: [use('I\'m here to help you.'), use('Let\'s calm down first.')] },
      { en: 'Introduce yourself. Provide orientation and reassurance.',
        tip: 'Use the patient\'s name. Say where they are and that they are safe.',
        say: [add({ en: 'I am Nurse/Doctor ___. You are in the hospital.', f: `看護師《かんごし》 の ＿ です。 ここ は 病院《びょういん》 です。`, c: `看護師《かんごし》 の ＿ だ よ。 ここ は 病院《びょういん》 だ よ。`, n: `Say your own role before your name: 看護師《かんごし》 (nurse) or 医師《いし》 (doctor).` }), use('You are safe here.'), use('No one will hurt you.')] },
      { en: 'Use clear, simple, and short statements.',
        tip: 'One instruction at a time. Repeat calmly if needed.',
        say: [add({ en: 'Please sit down.', f: `座《すわ》って ください。`, c: `座《すわ》って ね。` }), add({ en: 'Please put the bed down.', f: `ベッド を 下《お》ろして ください。`, c: `ベッド、 下《お》ろして ね。` }), use('Breathe slowly with me.')] },
      { en: 'Allow the patient to express himself/herself.',
        tip: 'Let them talk. Short silences are fine.',
        say: [add({ en: 'What happened? Tell me.', f: `何《なに》 が ありました か。 話《はな》して ください。`, c: `何《なに》 が あった の？ 話《はな》して。` }), use('Tell me what you need.')] },
      { en: 'Listen closely to what the patient is saying.',
        tip: 'Reflect back what you heard and name the feeling.',
        say: [add({ en: 'I understand. You\'re angry because ___, is that right?', f: `分《わ》かりました。 ＿ から、 怒《おこ》って いらっしゃる の です ね。`, c: `分《わ》かった。 ＿ から、 怒《おこ》って いる ん だ ね。`, n: `Fill the blank with the reason in the patient's own words; ＿ から = because ＿.` }), use('I can see that you are very upset.')] },
      { en: 'Agree, or agree to disagree.',
        tip: 'Agree with the feeling or a true part of the complaint without arguing about beliefs.',
        say: [add({ en: 'You\'re right, being here is really hard.', f: `おっしゃる とおり です。 ここ に いる の は 本当《ほんとう》 に つらい です よ ね。`, c: `その とおり だ ね。 ここ に いる の は 本当《ほんとう》 に つらい よ ね。` }), add({ en: 'We see it differently, but we can still talk.', f: `考《かんが》え方《かた》 は 違《ちが》います が、 話《はな》し合《あ》い は 続《つづ》けられます。`, c: `考《かんが》え方《かた》 は 違《ちが》う けど、 話《はな》し合《あ》い は 続《つづ》けられる よ。` })] },
      { en: 'Set clear limits. Tell the patient that aggressive behavior is not acceptable.',
        tip: 'Firm, calm, and respectful. State the limit and the reason, not a threat.',
        say: [add({ en: 'Hurting people or breaking things is not allowed here.', f: `ここ で は、 人《ひと》 を 傷《きず》つけたり 物《もの》 を 壊《こわ》したり する こと は できません。`, c: `ここ で は、 人《ひと》 を 傷《きず》つけたり 物《もの》 を 壊《こわ》したり する の は だめ だ よ。` }), add({ en: 'I want to help you, but not while you are hurting anyone.', f: `お手伝《てつだ》い したい です が、 人《ひと》 を 傷《きず》つけて いる 間《あいだ》 は できません。`, c: `助《たす》けたい けど、 人《ひと》 を 傷《きず》つけて いる 間《あいだ》 は できない よ。` })] },
      { en: 'Reassure the patient that you want to help them regain control and establish acceptable behavior.',
        tip: 'Frame it as working together.',
        say: [add({ en: 'I want to help you calm down and get back in control.', f: `落《お》ち着《つ》いて、 いつも の ご自分《じぶん》 に 戻《もど》れる よう に、 お手伝《てつだ》い したい です。`, c: `落《お》ち着《つ》いて、 いつも の 自分《じぶん》 に 戻《もど》れる よう に、 手伝《てつだ》いたい と 思《おも》って いる よ。` })] },
      { en: 'Coach the patient on how to stay in control. Use gentle confrontation with instruction.',
        tip: 'Give a concrete next action and praise each step.',
        say: [add({ en: 'Slowly. You can do it.', f: `ゆっくり で 大丈夫《だいじょうぶ》 です。 できます よ。`, c: `ゆっくり で 大丈夫《だいじょうぶ》。 できる よ。` }), add({ en: 'Take a deep breath: one, two, three.', f: `深《ふか》く 息《いき》 を 吸《す》って ください。 一《いち》、 二《に》、 三《さん》。`, c: `深《ふか》く 息《いき》 を 吸《す》って。 一《いち》、 二《に》、 三《さん》。` }), add({ en: 'Good. Thank you for putting it down.', f: `いい です ね。 置《お》いて くださって、 ありがとう ございます。`, c: `いい ね。 置《お》いて くれて、 ありがとう。` })] },
      { en: 'Offer choices and optimism. Be assertive and quickly propose alternatives to violence.',
        tip: 'Two acceptable options, both fine for you.',
        say: [add({ en: 'Would you like to sit here or walk with me for a while?', f: `ここ に 座《すわ》ります か。 それとも、 少《すこ》し 私《わたし》 と 一緒《いっしょ》 に 歩《ある》きます か。`, c: `ここ に 座《すわ》る？ それとも、 少《すこ》し いっしょ に 歩《ある》く？` }), add({ en: 'Once we\'ve calmed down, we\'ll talk about what you want.', f: `少《すこ》し 落《お》ち着《つ》いたら、 ご希望《きぼう》 に ついて お話《はなし》 しましょう。`, c: `少《すこ》し 落《お》ち着《つ》いたら、 どう したい か 話《はな》そう。` }), use('Would you like some water?')] },
      { en: 'Broach the subject of medication. Explain how medication can help.',
        tip: 'Offer oral first; let the patient choose the route when possible.',
        say: [add({ en: 'There is medicine that can help you calm down and feel better.', f: `気持《きも》ち が 落《お》ち着《つ》いて 楽《らく》 に なる お薬《くすり》 が あります。`, c: `気持《きも》ち が 落《お》ち着《つ》いて 楽《らく》 に なる 薬《くすり》 が ある よ。` }), use('Would you prefer a tablet or an injection?')] }
    ],
    // What happens when verbal de-escalation is not enough. Wording is general (US practice: CMS Conditions of
    // Participation and Joint Commission standards); follow your own hospital's policy.
    after: [
      { title: 'Escalate', who: 'Charge nurse and physician on duty',
        points: ['The first responder calls the charge nurse, who takes over and activates the behavioral response team per policy. The physician on duty is notified and assesses the patient.', 'Keep using calm verbal de-escalation throughout. Use the least restrictive intervention that works.', 'Offer oral medication first; give the patient a choice of route where possible.'],
        say: [use('We will give you medicine to help you calm down.'), use('Would you prefer a tablet or an injection?')] },
      { title: 'Restraint or seclusion (last resort)', who: 'Physician order, trained team',
        points: ['Only to prevent imminent harm to the patient or others, after less restrictive measures fail.', 'Requires a physician\'s order per hospital policy and CMS/Joint Commission rules: a face-to-face evaluation within 1 hour of starting restraint or seclusion; use the minimum force and time needed.', 'Position supine with the head raised. Never prone; no pressure on the neck, chest, or back.', 'Explain what is happening and why, even if the patient seems not to listen.', 'Remove belts, sharp objects, and anything that can be used to harm.'],
        say: [add({ en: 'This is only temporary, for your safety and others\'.', f: `体《からだ》 を 固定《こてい》 する の は、 ご自分《じぶん》 と 周《まわ》り の 人《ひと》 の 安全《あんぜん》 を 守《まも》る ため の、 一時的《いちじてき》 な もの です。`, c: `体《からだ》 を 固定《こてい》 する の は、 自分《じぶん》 と 周《まわ》り の 人《ひと》 の 安全《あんぜん》 を 守《まも》る ため の、 一時的《いちじてき》 な もの だ よ。` }), add({ en: 'We are not punishing you.', f: `罰《ばつ》 では ありません。`, c: `罰《ばつ》 じゃ ない よ。` }), add({ en: 'Once you are calm, we will remove it.', f: `落《お》ち着《つ》いたら、 外《はず》します。`, c: `落《お》ち着《つ》いたら、 外《はず》す から ね。`, n: '' })] },
      { title: 'Monitoring', who: 'Nurse, at the interval set by policy',
        points: ['Check at least every 15 minutes: breathing, circulation, skin, vital signs, hydration, toileting, and readiness to release.', 'Offer fluids, toileting, and position change; check for pain and tightness.', 'Reassess regularly whether restraint is still needed. Document each check with the time.'],
        say: [add({ en: 'Is it too tight? Does anything hurt?', f: `きつすぎません か。 どこ か 痛《いた》い ところ は あります か。`, c: `きつすぎない？ どこ か 痛《いた》い ところ は ある？` }), add({ en: 'Do you want to drink or use the toilet?', f: `お水《みず》 を 飲《の》みます か。 お手洗《てあら》い は 大丈夫《だいじょうぶ》 です か。`, c: `水《みず》、 飲《の》む？ トイレ は 大丈夫《だいじょうぶ》？` }), add({ en: 'Can you breathe well?', f: `ちゃんと 息《いき》 が できて います か。`, c: `ちゃんと 息《いき》 が できて いる？` })] },
      { title: 'Release', who: 'Nurse with the physician',
        points: ['Release as soon as the patient is calm and safe, in steps (one limb at a time).', 'Tell the patient what you are doing before each step.', 'Document the release time.'],
        say: [add({ en: 'You are calmer now. We will remove it slowly.', f: `だいぶ 落《お》ち着《つ》きました ね。 少《すこ》し ずつ 外《はず》して いきます。`, c: `だいぶ 落《お》ち着《つ》いた ね。 少《すこ》し ずつ 外《はず》して いく ね。`, n: '' })] },
      { title: 'Debrief', who: 'Patient, staff, and family',
        points: ['Talk with the patient once calm: what happened, what helped, what to do next time.', 'Staff debrief: what worked, injuries, and lessons. Inform the family as appropriate.', 'Document the incident, interventions, times, and outcome.'],
        say: [add({ en: 'From your point of view, what happened earlier?', f: `先《さき》ほど の こと、 ご自分《じぶん》 で は 何《なに》 が あった と 思《おも》います か。`, c: `さっき の こと、 自分《じぶん》 で は 何《なに》 が あった と 思《おも》う？` }), add({ en: 'What makes you get angry or upset?', f: `どんな とき に、 怒《おこ》ったり 動揺《どうよう》 したり します か。`, c: `どんな とき に、 怒《おこ》ったり いらいら したり する？` }), add({ en: 'What would help next time?', f: `次《つぎ》 に 同《おな》じ よう な こと が あったら、 何《なに》 が 助《たす》け に なります か。`, c: `次《つぎ》 に 同《おな》じ よう な こと が あったら、 何《なに》 が 助《たす》け に なる？` }), add({ en: 'Are you hurt anywhere?', f: `どこ か けが を して いません か。`, c: `どこ か けが を して いない？` })] }
    ],
    escalation: [
      ['Staff', 'First responder (any staff member)', 'Starts de-escalation. If it fails, calls the charge nurse.'],
      ['RN', 'Charge nurse', 'Takes over and activates the behavioral response team per policy.'],
      ['MD', 'Physician on duty', 'Notified at all times, whether or not de-escalation succeeds.']
    ],
    escLine: 'If de-escalation fails, the charge nurse takes over and the physician on duty is notified at all times.',
    signatures: ['Staff member', 'Charge nurse', 'Physician notified (date/shift/time)'],
    debrief: [use('From your point of view, what happened earlier?'), use('What would help next time?')],
    outcomes: [['successful', 'Successful'], ['partial', 'Partly successful'], ['failed', 'Not successful: escalated']]
  };
})();
