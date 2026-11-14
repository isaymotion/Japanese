/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* Nurse scripts, part 2 (0.19.0): "Watching mood on the ward" (mood) and "Nursing admission interview" (admit). Same shape as psych-nurse-tools.js. */
window.PSYCH_NURSE_TOOLS = window.PSYCH_NURSE_TOOLS || {};
(function () {
  const NOTICE = 'Nurse script: draft, pending Nursing Service review. Follow your hospital\'s policy.';

  PSYCH_NURSE_TOOLS.mood = {
    notice: NOTICE,
    steps: [
      { title: 'Sleep and energy', lines: [
        { tl: 'おはよう ございます。 ＿さん、 少《すこ》し お話《はなし》 を 聞《き》かせて いただけます か。', c: 'おはよう。 ＿さん、 少《すこ》し 話《はなし》 を 聞《き》かせて くれる？', en: "Good morning. Could I talk with you for a little while?", n: "A short daily check on the ward. Asking the same questions in the same way each day makes changes easier to see." },
        { tl: '昨夜《ゆうべ》 は 何時間《なんじかん》 くらい 眠《ねむ》れました か。', c: '昨夜《ゆうべ》 は 何時間《なんじかん》 くらい 眠《ねむ》れた？', en: "About how many hours did you sleep last night?", n: "Write down the patient's answer next to what the night staff saw. The two can differ." },
        { tl: 'あまり 眠《ねむ》って いない のに、 疲《つか》れ を 感《かん》じない こと は あります か。', c: 'あまり 眠《ねむ》って いない のに、 疲《つか》れ を 感《かん》じない こと は ある？', en: "Do you find you don't feel tired even though you have hardly slept?", n: "Needing little sleep without feeling tired can be an early sign of mania. Tell the doctor." },
        { tl: '朝《あさ》 起《お》きた とき、 体《からだ》 が 重《おも》くて 動《うご》けない 感《かん》じ は あります か。', c: '朝《あさ》 起《お》きた とき、 体《からだ》 が 重《おも》くて 動《うご》けない 感《かん》じ は ある？', en: "When you wake up, does your body feel too heavy to move?" },
        { tl: '反対《はんたい》 に、 いつも より 元気《げんき》 が ありすぎる と 感《かん》じる こと は あります か。', c: '反対《はんたい》 に、 いつも より 元気《げんき》 が ありすぎる 感《かん》じ は ある？', en: "Or the opposite: do you feel you have more energy than usual, even too much?" }
      ] },
      { title: 'Mood in the patient\'s own words', lines: [
        { tl: '今日《きょう》 の 気分《きぶん》 を、 一《いち》 から 十《じゅう》 の 数字《すうじ》 で 表《あらわ》す と したら、 いくつ ぐらい です か。', c: '今日《きょう》 の 気分《きぶん》 を、 一《いち》 から 十《じゅう》 の 数字《すうじ》 で 言《い》う と したら、 いくつ ぐらい？', en: "If you put today's mood as a number from 1 to 10, about what would it be?", n: "This is the patient's own way of describing their mood, not a rating scale, and it is not scored. Write down the number and the words exactly as the patient says them." },
        { tl: '＿さん に とって、 一《いち》 と 十《じゅう》 は それぞれ どんな 気分《きぶん》 です か。', c: '＿さん に とって、 一《いち》 と 十《じゅう》 は それぞれ どんな 気分《きぶん》？', en: "For you, what kind of mood is a 1, and what kind is a 10?", n: "Let the patient say what the two ends mean. Do not define them for the patient." },
        { tl: 'その 数字《すうじ》 は、 ご自分《じぶん》 の 言葉《ことば》 で 言《い》う と、 どんな 気持《きも》ち です か。', c: 'その 数字《すうじ》 は、 自分《じぶん》 の 言葉《ことば》 で 言《い》う と、 どんな 気持《きも》ち？', en: "In your own words, what does that number feel like?" },
        { tl: '一日《いちにち》 の 中《なか》 で、 気分《きぶん》 が 大《おお》きく 変《か》わる こと は あります か。', c: '一日《いちにち》 の 中《なか》 で、 気分《きぶん》 が 大《おお》きく 変《か》わる こと は ある？', en: "Does your mood change a lot during the day?" },
        { tl: '普段《ふだん》 の ＿さん と 比《くら》べて、 今《いま》 は いかが です か。', c: 'いつも の ＿さん と 比《くら》べて、 今《いま》 は どう？', en: "Compared with how you usually are, how are you now?" }
      ] },
      { title: 'Appetite, spending, calls and irritability', lines: [
        { tl: '食事《しょくじ》 の 量《りょう》 は、 入院《にゅういん》 する 前《まえ》 と 比《くら》べて どう です か。', c: 'ご飯《はん》 の 量《りょう》 は、 入院《にゅういん》 する 前《まえ》 と 比《くら》べて どう？', en: "How much are you eating compared with before you came into hospital?", n: "Add what you see at meals: meals left untouched, or no time to sit down and eat." },
        { tl: '最近《さいきん》、 お金《かね》 を いつも より たくさん 使《つか》いたく なる こと は あります か。', c: '最近《さいきん》、 お金《かね》 を いつも より たくさん 使《つか》いたく なる こと は ある？', en: "Lately, have you felt like spending more money than usual?", n: "On the ward this may show as giving belongings away, or borrowing money from other patients." },
        { tl: 'いつも より たくさん 電話《でんわ》 を かけたく なったり、 メッセージ を 送《おく》りたく なったり します か。', c: 'いつも より たくさん 電話《でんわ》 を かけたく なったり、 メッセージ を 送《おく》りたく なったり する？', en: "Do you find yourself wanting to make more phone calls or send more messages than usual?", n: "Note what you see too: many calls, calls late at night, calls to people the patient rarely contacts." },
        { tl: '最近《さいきん》、 新《あたら》しい 計画《けいかく》 を たくさん 考《かんが》えて います か。', c: '最近《さいきん》、 新《あたら》しい 計画《けいかく》 を たくさん 考《かんが》えて る？', en: "Lately, have you been making a lot of new plans?" },
        { tl: 'ちょっと した こと で、 イライラ したり 腹《はら》 が 立《た》ったり する こと は あります か。', c: 'ちょっと した こと で、 イライラ したり 腹《はら》 が 立《た》ったり する こと は ある？', en: "Do small things make you irritated or angry?" },
        { tl: '周《まわ》り の 人《ひと》 の 動《うご》き が 遅《おそ》く 見《み》えたり、 待《ま》つ の が つらかったり します か。', c: '周《まわ》り の 人《ひと》 の 動《うご》き が 遅《おそ》く 見《み》えたり、 待《ま》つ の が つらかったり する？', en: "Do the people around you seem slow, or do you find it hard to wait?" }
      ] },
      { title: 'How the patient sees themselves', lines: [
        { tl: '今《いま》 の ご自分《じぶん》 の こと を、 どう 感《かん》じて います か。', c: '今《いま》 の 自分《じぶん》 の こと を、 どう 感《かん》じて る？', en: "How do you feel about yourself right now?" },
        { tl: 'ご自分《じぶん》 を 責《せ》めて しまう こと は あります か。', c: '自分《じぶん》 を 責《せ》めて しまう こと は ある？', en: "Do you find yourself blaming yourself?", n: "If the patient is very low or talks about dying, go on to the safety questions in the nurse-risk section and tell the doctor." },
        { tl: '反対《はんたい》 に、 ご自分《じぶん》 に は 特別《とくべつ》 な 力《ちから》 や 役目《やくめ》 が ある と 感《かん》じる こと は あります か。', c: '反対《はんたい》 に、 自分《じぶん》 に は 特別《とくべつ》 な 力《ちから》 や 役目《やくめ》 が ある と 感《かん》じる こと は ある？', en: "Or the opposite: do you feel you have a special power or a special role?", n: "Listen without arguing, and write down what the patient says in their own words." },
        { tl: '今日《きょう》 も ありがとう ございました。 明日《あした》 も 同《おな》じ よう に お聞《き》き します ね。', c: '今日《きょう》 も ありがとう。 明日《あした》 も 同《おな》じ よう に 聞《き》く ね。', en: "Thank you for today. I'll ask you the same way again tomorrow." }
      ] },
      { title: 'Calling the doctor (SBAR)', lines: [
        { tl: 'お疲《つか》れ様《さま》 です。 ＿ 病棟《びょうとう》 の 木村《きむら》 です。 ＿ 号室《ごうしつ》 の ＿さん に ついて ご報告《ほうこく》 です。', c: 'お疲《つか》れ様《さま》 です。 ＿ 病棟《びょうとう》 の 木村《きむら》 です。 ＿ 号室《ごうしつ》 の ＿さん の 報告《ほうこく》 です。', en: "Hello, this is Kimura on ___ ward, with a report about ___ in room ___.", n: "Situation: who you are and which patient. Say your own name and ward (木村《きむら》 is only a placeholder)." },
        { tl: 'ここ 数日《すうじつ》 ほとんど 眠《ねむ》って いません が、 とても 元気《げんき》 で、 話《はなし》 が 止《と》まりません。', c: 'ここ 数日《すうじつ》 ほとんど 寝《ね》て いない ん です が、 とても 元気《げんき》 で、 話《はなし》 が 止《と》まらない 状態《じょうたい》 です。', en: "For the last few days they have hardly slept, but they are very energetic and keep on talking.", n: "Situation: what has changed, in plain words, as you saw it. This is one example; give what fits your patient." },
        { tl: '＿ の 治療《ちりょう》 で 入院《にゅういん》 して いる 方《かた》 で、 入院《にゅういん》 した とき は 気分《きぶん》 が 落《お》ち込《こ》んで いました。', c: '＿ の 治療《ちりょう》 で 入院《にゅういん》 して いる 患者《かんじゃ》さん で、 入院《にゅういん》 した とき は 落《お》ち込《こ》んで いました。', en: "They are in hospital for treatment of ___, and their mood was low when they came in.", n: "Background in one line." },
        { tl: '夜中《よなか》 に 何度《なんど》 も 電話《でんわ》 を かけて いて、 ほか の 患者《かんじゃ》さん に 強《つよ》い 口調《くちょう》 で 話《はな》す こと が 増《ふ》えて います。', c: '夜中《よなか》 に 何回《なんかい》 も 電話《でんわ》 を かけて いて、 ほか の 患者《かんじゃ》さん に きつく 言《い》う こと も 増《ふ》えて います。', en: "They have been making phone calls again and again during the night, and they are speaking sharply to other patients more often.", n: "Assessment: the facts you have seen. 口調《くちょう》 is tone of voice." },
        { tl: '気分《きぶん》 が 高揚《こうよう》 して きて いる よう に 見《み》えます。 今日《きょう》 診察《しんさつ》 して いただけます か。', c: '気分《きぶん》 が 上《あ》がって きて いる よう に 見《み》えます。 今日《きょう》 診《み》て もらえます か。', en: "Their mood seems to be going up. Could you see them today?", n: "Assessment and recommendation: your impression in one sentence, then what you need from the doctor. 高揚《こうよう》 is the usual word in a report for a raised mood; the second form says it in everyday words." },
        { tl: '指示《しじ》 を 復唱《ふくしょう》 します。 ＿ です ね。 承知《しょうち》 しました。', c: '指示《しじ》 を 確認《かくにん》 します。 ＿ です ね。 わかりました。', en: "Let me read your instructions back: ___, is that right? Understood.", n: "Read back every instruction before you hang up." }
      ] }
    ],
    escalate: "Call the doctor and call for help at once if the patient has new or stronger thoughts of suicide, has gone several nights without sleep and is very energetic, becomes aggressive or threatening, or is not eating or drinking. Follow your hospital's policy."
  };

  PSYCH_NURSE_TOOLS.admit = {
    notice: NOTICE + ' The welcome, room, belongings and ward routine are in the nurse-admit section (Arriving on the ward); this script is the admission interview that follows.',
    steps: [
      { title: 'Introduction and identity check', lines: [
        { tl: 'はじめまして。 看護師《かんごし》 の 木村《きむら》 です。 入院《にゅういん》 の こと で、 いくつか お聞《き》き して も よろしい です か。', c: 'はじめまして。 看護師《かんごし》 の 木村《きむら》 です。 入院《にゅういん》 の こと で、 いくつか 聞《き》いて も いい？', en: "Hello, I'm Kimura, a nurse. May I ask you a few things about coming into hospital?", n: "Say your own name (木村《きむら》 is only a placeholder)." },
        { tl: '間違《まちが》い が ない よう に、 お名前《なまえ》 と 生年月日《せいねんがっぴ》 を 教《おし》えて いただけます か。', c: '間違《まちが》い が ない よう に、 名前《なまえ》 と 生年月日《せいねんがっぴ》 を 教《おし》えて くれる？', en: "So that there are no mix-ups, could you tell me your name and date of birth?", n: "Check both against the wristband and the chart." },
        { tl: '質問《しつもん》 が 少《すこ》し 多《おお》い ので、 疲《つか》れたら いつ でも おっしゃって ください。', c: '質問《しつもん》 が 少《すこ》し 多《おお》い から、 疲《つか》れたら いつ でも 言《い》って ね。', en: "There are a fair number of questions, so tell me whenever you get tired.", n: "The interview can be finished later. Record what is still to be asked." },
        { tl: '答《こた》えたく ない 質問《しつもん》 は、 答《こた》えなくて も 大丈夫《だいじょうぶ》 です。', c: '答《こた》えたく ない 質問《しつもん》 は、 答《こた》えなくて も 大丈夫《だいじょうぶ》 だ よ。', en: "You don't have to answer any question you'd rather not." },
        { tl: '伺《うかが》った お話《はなし》 は、 治療《ちりょう》 の ため に 先生《せんせい》 や スタッフ と 共有《きょうゆう》 します。', c: '聞《き》いた 話《はなし》 は、 治療《ちりょう》 の ため に 先生《せんせい》 や スタッフ と 共有《きょうゆう》 する ね。', en: "What you tell me will be shared with the doctors and staff for your treatment." }
      ] },
      { title: 'Allergies and vital signs', lines: [
        { tl: 'お薬《くすり》 や 食《た》べ物《もの》 で、 アレルギー は あります か。', c: '薬《くすり》 や 食《た》べ物《もの》 で、 アレルギー は ある？', en: "Are you allergic to any medicines or foods?" },
        { tl: 'その とき は、 どう なりました か。', c: 'その とき は、 どう なった？', en: "What happened when you had the reaction?", n: "Record what the reaction was, such as a rash or trouble breathing, and tell the doctor." },
        { tl: 'これ から 血圧《けつあつ》 と 脈《みゃく》 と 体温《たいおん》 を 測《はか》ります。 腕《うで》 に 触《さわ》って も よろしい です か。', c: 'これ から 血圧《けつあつ》 と 脈《みゃく》 と 体温《たいおん》 を 測《はか》る ね。 腕《うで》 に 触《さわ》って も いい？', en: "Now I'll take your blood pressure, pulse and temperature. May I touch your arm?", n: "Say what you are going to do before you touch the patient, and wait for an answer." },
        { tl: '腕《うで》 が 少《すこ》し きつく なります が、 すぐ に 緩《ゆる》みます。', c: '腕《うで》 が 少《すこ》し きつく なる けど、 すぐ 緩《ゆる》む よ。', en: "Your arm will feel a little tight, but it will loosen again soon." },
        { tl: '体温計《たいおんけい》 を わき に 挟《はさ》んで いただけます か。', c: '体温計《たいおんけい》 を わき に 挟《はさ》んで くれる？', en: "Could you put the thermometer under your arm?" },
        { tl: '今《いま》 は 測《はか》りたく なければ、 少《すこ》し 後《あと》 で も 大丈夫《だいじょうぶ》 です。', c: '今《いま》 は 測《はか》りたく なかったら、 少《すこ》し 後《あと》 で も 大丈夫《だいじょうぶ》 だ よ。', en: "If you'd rather not now, we can do it a little later.", n: "Offer another time. If the patient still declines, record it and tell the doctor." }
      ] },
      { title: 'Daily life before admission', lines: [
        { tl: 'お家《うち》 で は、 いつも 何時《なんじ》 ごろ 寝《ね》て、 何時《なんじ》 ごろ 起《お》きて いました か。', c: '家《うち》 で は、 いつも 何時《なんじ》 ごろ 寝《ね》て、 何時《なんじ》 ごろ 起《お》きて た？', en: "At home, what time did you usually go to bed and get up?", n: "This is the usual pattern at home. The daily sleep questions on the ward are in the nurse-daily section." },
        { tl: '最近《さいきん》、 眠《ねむ》り が 浅《あさ》く なったり、 眠《ねむ》れない 夜《よる》 が あったり しました か。', c: '最近《さいきん》、 眠《ねむ》り が 浅《あさ》く なったり、 眠《ねむ》れない 夜《よる》 が あったり した？', en: "Lately, has your sleep been lighter, or have there been nights when you couldn't sleep?" },
        { tl: '最近《さいきん》、 食欲《しょくよく》 や 体重《たいじゅう》 に 変化《へんか》 は ありました か。', c: '最近《さいきん》、 食欲《しょくよく》 や 体重《たいじゅう》 は 変《か》わった？', en: "Lately, has there been any change in your appetite or weight?" },
        { tl: 'お通《つう》じ や おしっこ で、 普段《ふだん》 から 困《こま》って いる こと は あります か。', c: 'お通《つう》じ や おしっこ で、 普段《ふだん》 から 困《こま》って る こと は ある？', en: "Do you usually have any trouble with your bowels or with passing urine?" },
        { tl: 'たばこ は 吸《す》います か。', c: 'たばこ は 吸《す》う？', en: "Do you smoke?", n: "If the patient smokes, explain the hospital's rules on smoking." }
      ] },
      { title: 'Walking, falls, glasses, hearing aids and dentures', lines: [
        { tl: '歩《ある》く とき に、 杖《つえ》 など を 使《つか》って います か。', c: '歩《ある》く とき に、 杖《つえ》 とか を 使《つか》って る？', en: "Do you use a walking stick or anything else when you walk?" },
        { tl: '最近《さいきん》、 転《ころ》んだ こと や、 転《ころ》びそう に なった こと は あります か。', c: '最近《さいきん》、 転《ころ》んだ こと や、 転《ころ》びそう に なった こと は ある？', en: "Lately, have you fallen, or nearly fallen?", n: "If yes, follow your hospital's fall-prevention steps and tell the team." },
        { tl: '眼鏡《めがね》、 補聴器《ほちょうき》、 入《い》れ歯《ば》 は 使《つか》って います か。', c: '眼鏡《めがね》、 補聴器《ほちょうき》、 入《い》れ歯《ば》 は 使《つか》って る？', en: "Do you use glasses, a hearing aid or dentures?", n: "Record them so that they are not lost and the patient has them when needed." },
        { tl: '着替《きが》え や お風呂《ふろ》 など で、 お手伝《てつだ》い が 必要《ひつよう》 な こと は あります か。', c: '着替《きが》え や お風呂《ふろ》 とか で、 手伝《てつだ》い が いる こと は ある？', en: "Is there anything you need help with, such as dressing or bathing?" }
      ] },
      { title: 'Contacts, hopes and one safety question', lines: [
        { tl: '何《なに》 か あった とき に、 どなた に 連絡《れんらく》 すれば よろしい です か。', c: '何《なに》 か あった とき に、 誰《だれ》 に 連絡《れんらく》 したら いい？', en: "If anything happens, whom should we contact?", n: "Write down the name, how they are related to the patient and their phone number." },
        { tl: '反対《はんたい》 に、 連絡《れんらく》 して ほしく ない 方《かた》 は いらっしゃいます か。', c: '反対《はんたい》 に、 連絡《れんらく》 して ほしく ない 人《ひと》 は いる？', en: "And is there anyone you would not want us to contact?" },
        { tl: '今回《こんかい》 の 入院《にゅういん》 で、 どう なりたい と 思《おも》って います か。', c: '今回《こんかい》 の 入院《にゅういん》 で、 どう なりたい と 思《おも》って る？', en: "What are you hoping for from this stay in hospital?", n: "Write down the patient's own words. They help the team plan care together with the patient." },
        { tl: '入院《にゅういん》 に ついて、 心配《しんぱい》 な こと や 聞《き》きたい こと は あります か。', c: '入院《にゅういん》 の こと で、 心配《しんぱい》 な こと や 聞《き》きたい こと は ある？', en: "Is there anything about being in hospital that worries you, or that you would like to ask?" },
        { tl: 'ここ に 来《く》る 前《まえ》、 死《し》にたい と 思《おも》う くらい つらい こと は ありました か。', c: 'ここ に 来《く》る 前《まえ》、 死《し》にたい と 思《おも》う くらい つらい こと は あった？', en: "Before you came here, were things so hard that you thought about wanting to die?", n: "The one safety question at admission. If the answer is yes, go on to the safety questions in the nurse-risk section, and tell the doctor at once if the thoughts are there now." },
        { tl: '大事《だいじ》 な こと を 話《はな》して くださって、 ありがとう ございます。', c: '大事《だいじ》 な こと を 話《はな》して くれて、 ありがとう。', en: "Thank you for telling me something so important." }
      ] },
      { title: 'Reporting the admission to the doctor (SBAR)', lines: [
        { tl: 'お疲《つか》れ様《さま》 です。 ＿ 病棟《びょうとう》 の 木村《きむら》 です。 本日《ほんじつ》 入院《にゅういん》 された ＿さん の ご報告《ほうこく》 です。', c: 'お疲《つか》れ様《さま》 です。 ＿ 病棟《びょうとう》 の 木村《きむら》 です。 今日《きょう》 入院《にゅういん》 した ＿さん の 報告《ほうこく》 です。', en: "Hello, this is Kimura on ___ ward, with a report on ___, who was admitted today.", n: "Situation: who you are and which patient." },
        { tl: '血圧《けつあつ》、 脈《みゃく》、 体温《たいおん》 は ＿ で、 アレルギー は ＿ です。', c: 'バイタル は ＿ で、 アレルギー は ＿ です。', en: "Blood pressure, pulse and temperature are ___, and known allergies are ___.", n: "Situation: vital signs and allergies. If there are none, say アレルギー は ありません。 バイタル is the everyday ward word for vital signs." },
        { tl: '＿ の 治療《ちりょう》 で 入院《にゅういん》 された 方《かた》 で、 最近《さいきん》 は ＿ が 続《つづ》いて いた そう です。', c: '＿ の 治療《ちりょう》 で 入院《にゅういん》 した 患者《かんじゃ》さん で、 最近《さいきん》 は ＿ が 続《つづ》いて いた そう です。', en: "They have come in for treatment of ___, and they say ___ has been going on lately.", n: "Background: the reason for admission and what the patient told you about sleep, appetite and daily life." },
        { tl: '落《お》ち着《つ》いて 話《はな》せて います が、 入院《にゅういん》 の 前《まえ》 に 死《し》にたい 気持《きも》ち が あった と 話《はな》して います。', c: '落《お》ち着《つ》いて 話《はな》せて います けど、 入院《にゅういん》 の 前《まえ》 に 死《し》にたい 気持《きも》ち が あった と 言《い》って います。', en: "They are calm and able to talk, but they say they had thoughts of wanting to die before admission.", n: "Assessment: what you saw and heard. This is one example; give what fits your patient, including any fall risk." },
        { tl: 'できる だけ 早《はや》く 診察《しんさつ》 を お願《ねが》い できます か。', c: 'できる だけ 早《はや》く 診《み》て もらえます か。', en: "Could you see them as soon as you can?", n: "Recommendation: what you need from the doctor." },
        { tl: 'ほか に 指示《しじ》 は ありません か。 では、 復唱《ふくしょう》 します。 ＿ です ね。', c: 'ほか に 指示《しじ》 は ありません か。 じゃあ、 確認《かくにん》 します。 ＿ です ね。', en: "Are there any other instructions? Then let me read them back: ___, is that right?", n: "Read back every instruction before you hang up." }
      ] }
    ],
    escalate: "Call the doctor and call for help at once if the patient has thoughts of suicide now or a plan, becomes aggressive or seems unsafe, has abnormal vital signs, a serious allergic reaction, a fall or an injury, or signs of withdrawal or another medical problem. Follow your hospital's policy."
  };
})();
