/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. Nurse content pending Nursing Service review. */
/* Nurse scripts for the De-escalation and Discharge tools (0.18.0), shown in the Nurse view of each tool.
   Shape: window.PSYCH_NURSE_TOOLS = { deesc: { notice, steps, escalate }, discharge: { notice, steps, escalate } }
     steps: [{ title, lines: [{ tl, c, en, n? }] }]   (same shape as PSYCH_SUD.nurse)
     tl = polite Japanese, c = gentle plain Japanese, en = English, n = optional English note (furigana on any kanji).
   ＿さん is the blank for the patient's name (English ___); 木村《きむら》 is a placeholder for the nurse's own name;
   ＿ is also the blank for the ward, room or the doctor's instruction. No medicine names, no doses. */
window.PSYCH_NURSE_TOOLS = window.PSYCH_NURSE_TOOLS || {};
(function () {
  const NOTICE = 'Nurse script: draft, pending Nursing Service review. Follow your hospital\'s policy.';

  PSYCH_NURSE_TOOLS.deesc = {
    notice: NOTICE,
    steps: [
      { title: 'Calling the doctor on duty', lines: [
        { tl: 'お疲《つか》れ様《さま》 です。 ＿ 病棟《びょうとう》 の 看護師《かんごし》、 木村《きむら》 です。', c: 'お疲《つか》れ様《さま》 です。 ＿ 病棟《びょうとう》 の 木村《きむら》 です。', en: 'Hello, this is Kimura, a nurse on ___ ward.', n: 'Say your own name and ward (木村《きむら》 is only a placeholder). お疲《つか》れ様《さま》 です is the usual greeting between hospital staff, also on the phone. A report to the doctor stays in です/ます; the second form is only a little less formal.' },
        { tl: '＿ 号室《ごうしつ》 の ＿さん の こと で お電話《でんわ》 しました。', c: '＿ 号室《ごうしつ》 の ＿さん の こと で 電話《でんわ》 しました。', en: 'I am calling about ___ in room ___.', n: 'Situation: who the patient is. ＿さん stands for the patient\'s family name with さん.' },
        { tl: '今《いま》、 大《おお》きな 声《こえ》 を 出《だ》して 興奮《こうふん》 して います。 けが を した 人《ひと》 は いません。', c: '今《いま》、 大《おお》きな 声《こえ》 を 出《だ》して 興奮《こうふん》 して います。 けが を した 人《ひと》 は いない です。', en: 'Right now they are shouting and agitated. No one has been hurt.', n: 'Situation: what is happening now, and whether anyone is hurt.' },
        { tl: '＿ で 入院中《にゅういんちゅう》 の 方《かた》 で、 昨日《きのう》 から イライラ が 続《つづ》いて いました。', c: '＿ で 入院中《にゅういんちゅう》 の 患者《かんじゃ》さん で、 昨日《きのう》 から イライラ が 続《つづ》いて いました。', en: 'They are in hospital for ___ and have been irritable since yesterday.', n: 'Background in one line: the reason for admission and anything that led up to this.' },
        { tl: '静《しず》か な 場所《ばしょ》 で 話《はなし》 を 聞《き》いて、 お茶《ちゃ》 を 勧《すす》めました が、 まだ 落《お》ち着《つ》きません。', c: '静《しず》か な 場所《ばしょ》 で 話《はなし》 を 聞《き》いて、 お茶《ちゃ》 を 勧《すす》めた ん です けど、 まだ 落《お》ち着《つ》きません。', en: 'We listened to them in a quiet place and offered tea, but they have not calmed down.', n: 'What you have tried so far.' },
        { tl: 'すぐ に 診察《しんさつ》 に 来《き》て いただけます か。', c: 'すぐ 診察《しんさつ》 に 来《き》て もらえます か。', en: 'Could you come and see them now?', n: 'What you need: the doctor to come now.' },
        { tl: '来《こ》られる まで の 間《あいだ》、 どう 対応《たいおう》 すれば よい か 指示《しじ》 を いただけます か。', c: '来《こ》られる まで、 どう 対応《たいおう》 したら いい か 教《おし》えて もらえます か。', en: 'Until you get here, could you tell me what we should do?', n: 'What you need: advice until the doctor arrives.' },
        { tl: '復唱《ふくしょう》 します。 ＿ です ね。 わかりました。 お待《ま》ち して います。', c: '確認《かくにん》 します。 ＿ です ね。 わかりました。 お待《ま》ち して います。', en: 'Let me read that back: ___, is that right? Understood. We will be waiting for you.', n: '復唱《ふくしょう》 means repeating an instruction back to confirm it. Read back every instruction before you hang up.' }
      ] },
      { title: 'Asking for help from the team', lines: [
        { tl: 'すみません、 ちょっと 手《て》 を 貸《か》して ください。 ＿ 号室《ごうしつ》 です。', c: 'ごめん、 ちょっと 手《て》 を 貸《か》して。 ＿ 号室《ごうしつ》 だ よ。', en: 'Excuse me, could you give me a hand? It is room ___.', n: 'Call calmly and clearly. Shouting raises the tension on the ward.' },
        { tl: '＿さん が 興奮《こうふん》 して います。 もう 一人《ひとり》 来《き》て もらえます か。', c: '＿さん が 興奮《こうふん》 して いる から、 もう 一人《ひとり》 来《き》て くれる？', en: '___ is agitated. Could one more person come?' },
        { tl: '話《はなし》 は 私《わたし》 が します ので、 少《すこ》し 離《はな》れた ところ で 見守《みまも》って いて ください。', c: '話《はなし》 は 私《わたし》 が する から、 少《すこ》し 離《はな》れた ところ で 見守《みまも》って いて ね。', en: 'I will do the talking. Please stay a little way back and keep watch.', n: 'One person talks to the patient. Several voices at once make agitation worse.' },
        { tl: 'ほか の 患者《かんじゃ》さん を お部屋《へや》 に 案内《あんない》 して もらえます か。', c: 'ほか の 患者《かんじゃ》さん を 部屋《へや》 に 案内《あんない》 して くれる？', en: 'Could you take the other patients to their rooms?' }
      ] },
      { title: 'After it is over: talking with the patient', lines: [
        { tl: '＿さん、 けが は ありません か。 どこ か 痛《いた》い ところ は あります か。', c: '＿さん、 けが は ない？ どこ か 痛《いた》い ところ は ある？', en: 'Are you hurt? Does it hurt anywhere?', n: 'Check for injury first, and tell the doctor about any.' },
        { tl: '今《いま》 の お気持《きも》ち は いかが です か。', c: '今《いま》 は どんな 気持《きも》ち？', en: 'How are you feeling now?' },
        { tl: 'さっき は、 とても つらかった と 思《おも》います。', c: 'さっき は、 とても つらかった よ ね。', en: 'I think that was very hard for you earlier.' },
        { tl: '落《お》ち着《つ》く の に、 何《なに》 が 一番《いちばん》 役《やく》 に 立《た》ちました か。', c: '落《お》ち着《つ》く の に、 何《なに》 が 一番《いちばん》 役《やく》 に 立《た》った？', en: 'What helped you most to calm down?' },
        { tl: '次《つぎ》 に 同《おな》じ よう な 気持《きも》ち に なったら、 早《はや》め に 教《おし》えて ください。 一緒《いっしょ》 に 方法《ほうほう》 を 考《かんが》えましょう。', c: '次《つぎ》 に 同《おな》じ よう な 気持《きも》ち に なったら、 早《はや》め に 教《おし》えて ね。 一緒《いっしょ》 に 方法《ほうほう》 を 考《かんが》えよう。', en: 'If you start to feel like this again, please tell us early. Let\'s think of ways together.' },
        { tl: '今日《きょう》 は この あと、 お部屋《へや》 で ゆっくり 休《やす》みましょう。 時々《ときどき》 様子《ようす》 を 見《み》 に 来《き》ます ね。', c: '今日《きょう》 は この あと、 部屋《へや》 で ゆっくり 休《やす》もう ね。 時々《ときどき》 様子《ようす》 を 見《み》 に 来《く》る ね。', en: 'For the rest of today, let\'s have you rest quietly in your room. I will come and check on you from time to time.', n: 'Give the plan the doctor has agreed, in a few words.' },
        { tl: '＿さん を 責《せ》める つもり は ありません。 私《わたし》たち は ＿さん の 力《ちから》 に なりたい と 思《おも》って います。', c: '＿さん を 責《せ》める つもり は ない よ。 ＿さん の 力《ちから》 に なりたい と 思《おも》って る から ね。', en: 'We are not blaming you. We want to help you.', n: 'No blame and no lecture. Talk about what happened only when the patient is calm.' },
        { tl: '話《はな》して くださって、 ありがとう ございました。', c: '話《はな》して くれて、 ありがとう。', en: 'Thank you for talking with me.' }
      ] },
      { title: 'Other patients on the ward', lines: [
        { tl: 'びっくり させて しまって、 すみません でした。 もう 落《お》ち着《つ》きました。 安全《あんぜん》 です ので、 安心《あんしん》 して ください。', c: 'びっくり した よ ね。 もう 落《お》ち着《つ》いた から、 大丈夫《だいじょうぶ》 だ よ。', en: 'I am sorry you were startled. It is calm now and it is safe, so please do not worry.', n: 'Do not talk about the other patient\'s details.' },
        { tl: 'デイルーム か ご自分《じぶん》 の お部屋《へや》 で、 いつも どおり 過《す》ごして いただいて 大丈夫《だいじょうぶ》 です。', c: 'デイルーム か 自分《じぶん》 の 部屋《へや》 で、 いつも どおり 過《す》ごして いい よ。', en: 'You are welcome to spend your time as usual, in the day room or in your own room.' },
        { tl: '不安《ふあん》 な こと が あったら、 いつ でも 看護師《かんごし》 に 声《こえ》 を かけて ください。', c: '不安《ふあん》 な こと が あったら、 いつ でも 看護師《かんごし》 に 声《こえ》 を かけて ね。', en: 'If anything worries you, talk to a nurse at any time.' }
      ] }
    ],
    escalate: 'If anyone is in immediate danger, or there is a weapon, an injury or a medical emergency, call for help and the doctor at once and follow your hospital\'s emergency procedure.'
  };

  PSYCH_NURSE_TOOLS.discharge = {
    notice: NOTICE,
    steps: [
      { title: 'Belongings', lines: [
        { tl: 'お預《あず》かり して いた お荷物《にもつ》 を お返《かえ》し します ので、 一緒《いっしょ》 に 確認《かくにん》 しましょう。', c: '預《あず》かって いた 荷物《にもつ》 を 返《かえ》す ね。 一緒《いっしょ》 に 確認《かくにん》 しよう。', en: 'I will give back the belongings we kept for you. Let\'s check them together.' },
        { tl: 'この 一覧《いちらん》 と 合《あ》って いる か、 見《み》て いただけます か。 足《た》りない もの は ありません か。', c: 'この 一覧《いちらん》 と 合《あ》って いる か、 見《み》て くれる？ 足《た》りない もの は ない？', en: 'Could you check that everything matches this list? Is anything missing?' },
        { tl: '大丈夫《だいじょうぶ》 でしたら、 こちら に サイン を お願《ねが》い します。', c: '大丈夫《だいじょうぶ》 なら、 ここ に サイン して ね。', en: 'If everything is there, please sign here.' }
      ] },
      { title: 'Medicines', lines: [
        { tl: 'お家《うち》 で は、 この 袋《ふくろ》 に 書《か》いて ある 時間《じかん》 に お薬《くすり》 を 飲《の》んで ください。', c: '家《いえ》 で は、 この 袋《ふくろ》 に 書《か》いて ある 時間《じかん》 に 薬《くすり》 を 飲《の》んで ね。', en: 'At home, take your medicines at the times written on this bag.', n: 'Point to the times on the bag or the sheet as you say it.' },
        { tl: 'お薬手帳《くすりてちょう》 は、 病院《びょういん》 や 薬局《やっきょく》 に 行《い》く とき に 必《かなら》ず 持《も》って 行《い》って ください。', c: 'お薬手帳《くすりてちょう》 は、 病院《びょういん》 や 薬局《やっきょく》 に 行《い》く とき に 必《かなら》ず 持《も》って 行《い》って ね。', en: 'Always take your medicine handbook with you when you go to a hospital or a pharmacy.', n: 'お薬手帳《くすりてちょう》 is the booklet where a patient\'s prescriptions are recorded.' },
        { tl: '確認《かくにん》 の ため に、 いつ お薬《くすり》 を 飲《の》む か、 ご自分《じぶん》 の 言葉《ことば》 で 教《おし》えて いただけます か。', c: '確認《かくにん》 の ため に、 いつ 薬《くすり》 を 飲《の》む か、 自分《じぶん》 の 言葉《ことば》 で 教《おし》えて くれる？', en: 'To check, could you tell me in your own words when you will take your medicines?', n: 'Teach-back: if the answer is not right, explain again in simpler words and ask once more.' },
        { tl: '調子《ちょうし》 が よく なって も、 急《きゅう》 に やめないで ください。 やめたい とき は、 まず 先生《せんせい》 に ご相談《そうだん》 ください。', c: '調子《ちょうし》 が よく なって も、 急《きゅう》 に やめないで ね。 やめたい とき は、 まず 先生《せんせい》 に 相談《そうだん》 して ね。', en: 'Even when you feel better, do not stop suddenly. If you want to stop, talk to the doctor first.' },
        { tl: '飲《の》み忘《わす》れた とき に どう する か は、 先生《せんせい》 か 薬剤師《やくざいし》 に 聞《き》いて ください。', c: '飲《の》み忘《わす》れた とき に どう する か は、 先生《せんせい》 か 薬剤師《やくざいし》さん に 聞《き》いて ね。', en: 'If you miss a dose, ask the doctor or the pharmacist what to do.', n: 'Give no general rule for missed doses: it differs between medicines.' }
      ] },
      { title: 'Next appointment', lines: [
        { tl: '次《つぎ》 の 外来《がいらい》 の 日《ひ》 と 場所《ばしょ》 は、 この 紙《かみ》 に 書《か》いて あります。', c: '次《つぎ》 の 外来《がいらい》 の 日《ひ》 と 場所《ばしょ》 は、 この 紙《かみ》 に 書《か》いて ある よ。', en: 'The date and place of your next outpatient visit are written on this paper.' },
        { tl: 'その 日《ひ》 は、 お薬手帳《くすりてちょう》 と この 紙《かみ》 を 持《も》って 来《き》て ください。', c: 'その 日《ひ》 は、 お薬手帳《くすりてちょう》 と この 紙《かみ》 を 持《も》って 来《き》て ね。', en: 'On that day, please bring your medicine handbook and this paper.', n: 'Add anything else your clinic asks patients to bring.' },
        { tl: 'ご都合《つごう》 が 悪《わる》く なったら、 早《はや》め に 病院《びょういん》 に 電話《でんわ》 して ください。', c: '都合《つごう》 が 悪《わる》く なったら、 早《はや》め に 病院《びょういん》 に 電話《でんわ》 して ね。', en: 'If you cannot come that day, call the hospital early.' }
      ] },
      { title: 'Warning signs and what to do', lines: [
        { tl: '眠《ねむ》れない 日《ひ》 が 続《つづ》いたり、 食事《しょくじ》 が とれなかったり する とき は、 注意《ちゅうい》 の サイン です。', c: '眠《ねむ》れない 日《ひ》 が 続《つづ》いたり、 ご飯《はん》 が 食《た》べられなかったり したら、 注意《ちゅうい》 の サイン だ よ。', en: 'Several nights without sleep, or not being able to eat, are warning signs.' },
        { tl: '前《まえ》 の よう に 声《こえ》 が 聞《き》こえて きたら、 それ も サイン です。', c: '前《まえ》 みたい に 声《こえ》 が 聞《き》こえて きたら、 それ も サイン だ よ。', en: 'If you start hearing voices again as before, that is a sign too.' },
        { tl: 'こう いう サイン が あったら、 次《つぎ》 の 外来《がいらい》 を 待《ま》たず に、 病院《びょういん》 に 連絡《れんらく》 して ください。', c: 'こう いう サイン が あったら、 次《つぎ》 の 外来《がいらい》 を 待《ま》たないで、 病院《びょういん》 に 連絡《れんらく》 して ね。', en: 'If you notice these signs, contact the hospital without waiting for your next visit.' },
        { tl: '「死《し》にたい」 と いう 気持《きも》ち が 出《で》て きたら、 一人《ひとり》 で 我慢《がまん》 しないで、 すぐ に 病院《びょういん》 か 地域《ちいき》 の 相談窓口《そうだんまどぐち》 に 連絡《れんらく》 して ください。', c: '「死《し》にたい」 と いう 気持《きも》ち が 出《で》て きたら、 一人《ひとり》 で 我慢《がまん》 しないで、 すぐ に 病院《びょういん》 か 地域《ちいき》 の 相談窓口《そうだんまどぐち》 に 連絡《れんらく》 して ね。', en: 'If thoughts of wanting to die come, do not keep them to yourself: contact the hospital or the local crisis line straight away.', n: 'Write the hospital\'s number and the local crisis line on the discharge paper.' },
        { tl: '命《いのち》 に かかわる 緊急《きんきゅう》 の とき は、 ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》 して ください。', c: '命《いのち》 に かかわる 緊急《きんきゅう》 の とき は、 ｜119番《ひゃくじゅうきゅうばん》 に 電話《でんわ》 して ね。', en: 'In an emergency where a life may be in danger, call 119.' }
      ] },
      { title: 'Family', lines: [
        { tl: 'お家《うち》 で は、 毎日《まいにち》 の 生活《せいかつ》 の リズム を 整《ととの》える こと が 助《たす》け に なります。', c: '家《いえ》 で は、 毎日《まいにち》 の 生活《せいかつ》 の リズム を 整《ととの》える こと が 助《たす》け に なる よ。', en: 'At home, a regular daily routine helps.', n: 'Speaking to the family: regular sleep, meals and medicine times.' },
        { tl: 'ご本人《ほんにん》 の 話《はなし》 を、 否定《ひてい》 しないで ゆっくり 聞《き》いて あげて ください。', c: '本人《ほんにん》 の 話《はなし》 を、 否定《ひてい》 しないで ゆっくり 聞《き》いて あげて ね。', en: 'Listen to them calmly, without arguing or brushing it aside.' },
        { tl: '困《こま》った とき や 心配《しんぱい》 な とき は、 病院《びょういん》 に お電話《でんわ》 ください。 ご家族《かぞく》 から の ご相談《そうだん》 も 大丈夫《だいじょうぶ》 です。', c: '困《こま》った とき や 心配《しんぱい》 な とき は、 病院《びょういん》 に 電話《でんわ》 して ね。 家族《かぞく》 から の 相談《そうだん》 も 大丈夫《だいじょうぶ》 だ よ。', en: 'If you are worried or unsure, call the hospital. Families are welcome to call too.' }
      ] },
      { title: 'Goodbye', lines: [
        { tl: '退院《たいいん》 おめでとう ございます。 どうぞ お大事《だいじ》 に なさって ください。', c: '退院《たいいん》 おめでとう。 お大事《だいじ》 に ね。', en: 'Congratulations on going home. Please take good care of yourself.' },
        { tl: '何《なに》 か あったら、 いつ でも 連絡《れんらく》 して ください ね。', c: '何《なに》 か あったら、 いつ でも 連絡《れんらく》 して ね。', en: 'If anything comes up, contact us at any time.' }
      ] }
    ],
    escalate: 'If the patient has new thoughts of suicide or a plan, or does not seem safe to go home today, tell the doctor before the discharge goes ahead.'
  };
})();
