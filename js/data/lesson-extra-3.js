/* Lesson extras part 3 (0.23.0): common mistakes, more examples and a "More practice" quiz for existing N5 and N4 lessons
   (7 lessons per file, in lesson order; the lesson page shows them after the body and runs the quiz after the lesson's own).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.LESSON_EXTRA = window.LESSON_EXTRA || {}; Object.assign(window.LESSON_EXTRA, { '<lesson id>': {
     mistakes: [[wrongJa, rightJa, whyEn], ...3],  // wrongJa is shown struck through, never spoken or recorded
     more: [[ja, en], ...6],                         // extra example sentences (3 clinical, 3 everyday; none repeating the lesson's)
     quiz: [[q, [3 opts], idx, why], ...6] } });     // "More practice": same rules as lesson quizzes, none repeating the lesson's
   Keys are lesson ids. Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSON_EXTRA = window.LESSON_EXTRA || {};
Object.assign(window.LESSON_EXTRA, {

  'verb-groups': {
    mistakes: [
      [`今日《きょう》 は 早《はや》く 家《いえ》 に 帰《かえ》ます。`, `今日《きょう》 は 早《はや》く 家《いえ》 に 帰《かえ》ります。`, `帰《かえ》る is a う-verb, so its ます form keeps り.`],
      [`毎週《まいしゅう》 病院《びょういん》 に 来《く》ります。`, `毎週《まいしゅう》 病院《びょういん》 に 来《き》ます。`, `来《く》る is irregular: its ます form is 来《き》ます, read き.`],
      [`今日《きょう》 は 白《しろ》い シャツ を 着《き》ります。`, `今日《きょう》 は 白《しろ》い シャツ を 着《き》ます。`, `着《き》る "wear" is a る-verb, so it only drops る; 切《き》ります is the う-verb "cut".`]
    ],
    more: [
      [`お風呂《ふろ》 に は 毎日《まいにち》 入《はい》ります か。`, `Do you take a bath every day?`],
      [`毎朝《まいあさ》 何時《なんじ》 に 起《お》きます か。`, `What time do you get up each morning?`],
      [`検査《けんさ》 に は 保険証《ほけんしょう》 が 要《い》ります。`, `You need your insurance card for the test.`],
      [`明日《あした》 は 友達《ともだち》 が 家《いえ》 に 来《く》る。`, `A friend is coming to my house tomorrow. (casual, dictionary form)`],
      [`毎晩《まいばん》 少《すこ》し 走《はし》ります。`, `I run a little every evening.`],
      [`ナイフ で パン を 切《き》ります。`, `I cut the bread with a knife.`]
    ],
    quiz: [
      [`What is the dictionary form of 話《はな》します?`, [`話《はな》す`, `話《はな》しる`, `話《はな》る`], 0, `し before ます becomes す.`],
      [`Which group does 起《お》きる belong to?`, [`う-verbs`, `る-verbs`, `irregular`], 1, `Its ます form 起《お》きます only drops る, so it is a る-verb.`],
      [`What is the ます form of 入《はい》る "enter"?`, [`入《はい》ます`, `入《はい》れます`, `入《はい》ります`], 2, `入《はい》る is a う-verb that looks like a る-verb, so it keeps り.`],
      [`Fill the blank: 毎晩《まいばん》 十一時《じゅういちじ》 に ＿。 (I go to bed at eleven every night.)`, [`寝《ね》ります`, `寝《ね》ます`, `寝《ね》みます`], 1, `寝《ね》る is a る-verb: drop る and add ます.`],
      [`What does シャツ を 着《き》ます mean?`, [`I put on a shirt.`, `I cut a shirt.`, `I buy a shirt.`], 0, `着《き》ます is the ます form of 着《き》る "wear"; "cut" would be 切《き》ります.`],
      [`Which sentence uses the dictionary form?`, [`明日《あした》 病院《びょういん》 に 行《い》きます。`, `明日《あした》 病院《びょういん》 に 行《い》きません。`, `明日《あした》 病院《びょういん》 に 行《い》く。`], 2, `行《い》く is the dictionary form; the other two are ます forms.`]
    ] },

  'te-form': {
    mistakes: [
      [`ここ で 少《すこ》し 待《ま》ちて ください。`, `ここ で 少《すこ》し 待《ま》って ください。`, `待《ま》つ ends in つ, so its て-form is 待《ま》って; do not add て to the ます stem.`],
      [`お風呂《ふろ》 に 入《はい》て、 すぐ 寝《ね》ました。`, `お風呂《ふろ》 に 入《はい》って、 すぐ 寝《ね》ました。`, `入《はい》る is a う-verb, so る becomes って.`],
      [`明日《あした》 また 病院《びょういん》 に 行《い》いて ください。`, `明日《あした》 また 病院《びょういん》 に 行《い》って ください。`, `行《い》く is the one く verb whose て-form is 行《い》って.`]
    ],
    more: [
      [`ゆっくり 立《た》って ください。`, `Please stand up slowly.`],
      [`ベッド に 横《よこ》 に なって ください。`, `Please lie down on the bed.`],
      [`上着《うわぎ》 を 脱《ぬ》いで ください。`, `Please take off your jacket.`],
      [`駅《えき》 で 友達《ともだち》 に 会《あ》って、 映画《えいが》 を 見《み》ました。`, `I met a friend at the station and we watched a film.`],
      [`朝《あさ》 コーヒー を 飲《の》んで、 会社《かいしゃ》 に 行《い》きました。`, `I drank coffee in the morning and went to work.`],
      [`この 本《ほん》 を 貸《か》して ください。`, `Please lend me this book.`]
    ],
    quiz: [
      [`What is the て-form of 待《ま》つ?`, [`待《ま》ちて`, `待《ま》って`, `待《ま》んで`], 1, `Verbs ending in つ take って.`],
      [`What is the て-form of 読《よ》む?`, [`読《よ》んで`, `読《よ》いて`, `読《よ》って`], 0, `Verbs ending in む take んで.`],
      [`What is the て-form of 話《はな》す?`, [`話《はな》いて`, `話《はな》って`, `話《はな》して`], 2, `Verbs ending in す take して.`],
      [`Fill the blank: もう 一度《いちど》 ＿ ください。 (Please say it once more.)`, [`言《い》って`, `言《い》いて`, `言《い》んで`], 0, `言《い》う ends in う, so it takes って.`],
      [`What does 電気《でんき》 を 消《け》して ください mean?`, [`Please turn on the light.`, `The light went off.`, `Please turn off the light.`], 2, `消《け》して is the て-form of 消《け》す "turn off", and ください makes it a request.`],
      [`What is the て-form of 着《き》る "wear"?`, [`着《き》って`, `着《き》て`, `着《き》いて`], 1, `着《き》る is a る-verb: replace る with て.`]
    ] },

  'te-kudasai': {
    mistakes: [
      [`こちら に 座《すわ》ります ください。`, `こちら に 座《すわ》って ください。`, `ください follows the て-form, not the ます form.`],
      [`ご家族《かぞく》 の こと を 話《はな》して。`, `ご家族《かぞく》 の こと を 話《はな》して いただけます か。`, `A bare て-form is a casual request; with a patient, use a polite form such as 〜て いただけます か.`],
      [`すみません、 トイレ に 行《い》って ください か。`, `すみません、 トイレ に 行《い》って も いい です か。`, `To ask permission for yourself, use 〜て も いい です か; 〜て ください asks someone else to act.`]
    ],
    more: [
      [`血圧《けつあつ》 を 測《はか》って も いい です か。`, `May I take your blood pressure?`],
      [`今日《きょう》 は 車《くるま》 を 運転《うんてん》しないで ください。`, `Please don't drive today.`],
      [`保険証《ほけんしょう》 を 見《み》せて いただけます か。`, `Would you mind showing me your insurance card?`],
      [`すみません、 塩《しお》 を 取《と》って もらえます か。`, `Excuse me, could you pass the salt?`],
      [`ここ で たばこ を 吸《す》って は いけません。`, `You must not smoke here.`],
      [`この ペン を 使《つか》って も いい です か。`, `May I use this pen?`]
    ],
    quiz: [
      [`Which sentence asks permission to open the window?`, [`窓《まど》 を 開《あ》けて ください。`, `窓《まど》 を 開《あ》けて も いい です か。`, `窓《まど》 を 開《あ》けて は いけません。`], 1, `〜て も いい です か asks "may I?".`],
      [`What does ここ で 電話《でんわ》 を して は いけません mean?`, [`You must not make phone calls here.`, `Please make a phone call here.`, `May I make a phone call here?`], 0, `〜て は いけません is a prohibition.`],
      [`Fill the blank: 明日《あした》 の 約束《やくそく》 を ＿ ください。 (Please don't forget tomorrow's appointment.)`, [`忘《わす》れて`, `忘《わす》れます`, `忘《わす》れないで`], 2, `〜ないで ください means "please don't".`],
      [`Which is the most polite way to ask a patient to wait a moment?`, [`少《すこ》し 待《ま》って ください。`, `少《すこ》し 待《ま》ちます。`, `少《すこ》し 待《ま》って いただけます か。`], 2, `〜て いただけます か is the most polite request; 待《ま》ちます is not a request at all.`],
      [`A patient asks: トイレ に 行《い》って も いい です か。 What is a natural answer?`, [`はい、 どうぞ。`, `はい、 行《い》って は いけません。`, `いいえ、 どうぞ。`], 0, `はい、 どうぞ "yes, go ahead" gives permission.`],
      [`What does 無理《むり》しないで ください mean?`, [`Please try harder.`, `Please don't overdo it.`, `It is impossible.`], 1, `無理《むり》 する is "push yourself too hard", and 〜ないで ください is "please don't".`]
    ] },

  'te-imasu': {
    mistakes: [
      [`母《はは》 は 今《いま》 テレビ を 見《み》ます。`, `母《はは》 は 今《いま》 テレビ を 見《み》て います。`, `For an action happening right now, use 〜て います; 見《み》ます is a habit or the future.`],
      [`私《わたし》 は 東京《とうきょう》 に 住《す》みます。`, `私《わたし》 は 東京《とうきょう》 に 住《す》んで います。`, `Living somewhere is a continuing state, so it takes 〜て います.`],
      [`お薬《くすり》 の 名前《なまえ》 は 知《し》って いません。`, `お薬《くすり》 の 名前《なまえ》 は 知《し》りません。`, `"I don't know" is 知《し》りません, not 知《し》って いません.`]
    ],
    more: [
      [`今《いま》 何《なに》 か お薬《くすり》 を 飲《の》んで います か。`, `Are you taking any medicine at the moment?`],
      [`ご家族《かぞく》 と 一緒《いっしょ》 に 住《す》んで います か。`, `Do you live with your family?`],
      [`夜《よる》 は 何時間《なんじかん》 ぐらい 寝《ね》て います か。`, `About how many hours a night are you sleeping?`],
      [`弟《おとうと》 は 今《いま》 部屋《へや》 で 勉強《べんきょう》して います。`, `My younger brother is studying in his room now.`],
      [`田中《たなか》さん は 眼鏡《めがね》 を かけて います。`, `Tanaka-san wears glasses.`],
      [`毎週《まいしゅう》 日曜日《にちようび》 に テニス を して います。`, `I play tennis every Sunday.`]
    ],
    quiz: [
      [`How do you say "My father works at a hospital"?`, [`父《ちち》 は 病院《びょういん》 で 働《はたら》いて います。`, `父《ちち》 は 病院《びょういん》 に 働《はたら》きました。`, `父《ちち》 は 病院《びょういん》 で 働《はたら》いて ください。`], 0, `Having a job is an ongoing situation, said with 〜て います; the place of work takes で.`],
      [`What does 雨《あめ》 は もう 降《ふ》って いません mean?`, [`It is still raining.`, `It is no longer raining.`, `It will rain soon.`], 1, `もう + 〜て いません means "no longer".`],
      [`Fill the blank: 晩《ばん》ご飯《はん》 は まだ ＿。 (I haven't eaten dinner yet.)`, [`食《た》べました`, `食《た》べます`, `食《た》べて いません`], 2, `まだ + 〜て いません means "not yet".`],
      [`Which sentence describes an action happening right now?`, [`明日《あした》 コーヒー を 飲《の》みます。`, `今《いま》 コーヒー を 飲《の》んで います。`, `毎朝《まいあさ》 コーヒー を 飲《の》みます。`], 1, `今《いま》 with 〜て います is an action in progress.`],
      [`Someone asks: あの 先生《せんせい》 を 知《し》って います か。 How do you answer "No, I don't"?`, [`いいえ、 知《し》って いません。`, `いいえ、 知《し》って ください。`, `いいえ、 知《し》りません。`], 2, `The negative answer to 知《し》って います か is 知《し》りません.`],
      [`How do you ask a patient "Are you working at the moment?"`, [`今《いま》 お仕事《しごと》 は して います か。`, `今《いま》 お仕事《しごと》 は しました か。`, `今《いま》 お仕事《しごと》 は して ください。`], 0, `A current job is an ongoing situation: して います.`]
    ] },

  'linking': {
    mistakes: [
      [`ご飯《はん》 を 食《た》べる 後《あと》 で、 薬《くすり》 を 飲《の》みます。`, `ご飯《はん》 を 食《た》べた 後《あと》 で、 薬《くすり》 を 飲《の》みます。`, `〜後《あと》 で always takes the た-form.`],
      [`昨日《きのう》 は 寝《ね》た 前《まえ》 に 薬《くすり》 を 飲《の》みました。`, `昨日《きのう》 は 寝《ね》る 前《まえ》 に 薬《くすり》 を 飲《の》みました。`, `〜前《まえ》 に always takes the dictionary form, even when the sentence is about the past.`],
      [`昨日《きのう》 は 頭《あたま》 が 痛《いた》い で、 早《はや》く 寝《ね》ました。`, `昨日《きのう》 は 頭《あたま》 が 痛《いた》くて、 早《はや》く 寝《ね》ました。`, `An い-adjective links with 〜くて, not で.`]
    ],
    more: [
      [`お風呂《ふろ》 に 入《はい》る 前《まえ》 に、 血圧《けつあつ》 を 測《はか》って ください。`, `Please take your blood pressure before you have a bath.`],
      [`朝《あさ》ご飯《はん》 を 食《た》べた 後《あと》 で、 この 薬《くすり》 を 飲《の》んで ください。`, `Please take this medicine after breakfast.`],
      [`胸《むね》 が 苦《くる》しくて、 少《すこ》し 怖《こわ》い です。`, `My chest feels tight, and I am a little scared.`],
      [`家《いえ》 に 帰《かえ》って から、 少《すこ》し 休《やす》みます。`, `After I get home, I rest for a while.`],
      [`私《わたし》 の 部屋《へや》 は 狭《せま》くて 暗《くら》い です。 でも、 好《す》き です。`, `My room is small and dark. But I like it.`],
      [`駅《えき》 の 近《ちか》く は 便利《べんり》 で にぎやか です。`, `The area near the station is convenient and lively.`]
    ],
    quiz: [
      [`How do you link 親切《しんせつ》 and おもしろい: "kind and fun"?`, [`親切《しんせつ》 で おもしろい`, `親切《しんせつ》くて おもしろい`, `親切《しんせつ》 な おもしろい`], 0, `親切《しんせつ》 is a な-adjective, so it links with で.`],
      [`Fill the blank: 母《はは》 は 医者《いしゃ》 ＿、 父《ちち》 は 教師《きょうし》 です。 (My mother is a doctor and my father is a teacher.)`, [`と`, `くて`, `で`], 2, `A noun links to the next clause with で.`],
      [`Fill the blank: 寝《ね》る ＿ に 歯《は》 を 磨《みが》きます。 (I brush my teeth before going to bed.)`, [`後《あと》`, `前《まえ》`, `から`], 1, `Dictionary form + 前《まえ》 に means "before doing".`],
      [`What does 仕事《しごと》 が 終《お》わって から、 ジム に 行《い》きます mean?`, [`I go to the gym before work finishes.`, `I went to the gym instead of working.`, `I go to the gym after work finishes.`], 2, `〜て から means the first action is finished before the second starts; the present tense of 行《い》きます sets the tense.`],
      [`How do you say "before the examination"?`, [`診察《しんさつ》 の 前《まえ》 に`, `診察《しんさつ》 な 前《まえ》 に`, `診察《しんさつ》 で 前《まえ》 に`], 0, `A noun takes の before 前《まえ》 に.`],
      [`Fill the blank: 仕事《しごと》 は 忙《いそが》しい です。 ＿、 毎日《まいにち》 楽《たの》しい です。 (Work is busy. But every day is fun.)`, [`それから`, `でも`, `そして`], 1, `でも "but" starts a sentence that contrasts with the one before.`]
    ] },

  'nai-form': {
    mistakes: [
      [`今日《きょう》 は 時間《じかん》 が あらない。`, `今日《きょう》 は 時間《じかん》 が ない。`, `The plain negative of ある is simply ない.`],
      [`この タオル は 使《つか》あないで ください。`, `この タオル は 使《つか》わないで ください。`, `In verbs ending in う, う becomes わ before ない.`],
      [`寝《ね》る 前《まえ》 に コーヒー を 飲《の》みないで ください。`, `寝《ね》る 前《まえ》 に コーヒー を 飲《の》まないで ください。`, `ない does not attach to the ます stem: for 飲《の》む, change む to ま and add ない.`]
    ],
    more: [
      [`検査《けんさ》 の 前《まえ》 は 何《なに》 も 食《た》べないで ください。`, `Please don't eat anything before the test.`],
      [`この 質問《しつもん》 に は 答《こた》えなくて も いい です よ。`, `You don't have to answer this question.`],
      [`毎朝《まいあさ》 血圧《けつあつ》 を 測《はか》らなければ なりません。`, `You need to take your blood pressure every morning.`],
      [`明日《あした》 は 日曜日《にちようび》 です。 早《はや》く 起《お》きなくて も いい です。`, `Tomorrow is Sunday. I don't have to get up early.`],
      [`図書館《としょかん》 で は 大《おお》きい 声《こえ》 で 話《はな》さないで ください。`, `Please don't talk loudly in the library.`],
      [`兄《あに》 は お酒《さけ》 を 飲《の》まない。`, `My older brother doesn't drink. (plain style)`]
    ],
    quiz: [
      [`What is the ない-form of 書《か》く?`, [`書《か》かない`, `書《か》きない`, `書《か》くない`], 0, `く changes to か before ない.`],
      [`What is the ない-form of 見《み》る?`, [`見《み》らない`, `見《み》ない`, `見《み》かない`], 1, `見《み》る is a る-verb: drop る and add ない.`],
      [`What is the ない-form of する?`, [`すない`, `さない`, `しない`], 2, `する is irregular: しない.`],
      [`Fill the blank: 明日《あした》 は 早《はや》く ＿ なりません。 (I must get up early tomorrow.)`, [`起《お》きないで`, `起《お》きなくて`, `起《お》きなければ`], 2, `〜なければ なりません means "must".`],
      [`What does 傘《かさ》 を 持《も》って 行《い》かなくて も いい です mean?`, [`You must take an umbrella.`, `You don't have to take an umbrella.`, `Please don't take an umbrella.`], 1, `〜なくて も いい です means "you don't have to".`],
      [`How do you ask a patient not to stop the medicine on their own?`, [`薬《くすり》 を 自分《じぶん》 で やめないで ください。`, `薬《くすり》 を 自分《じぶん》 で やめなくて も いい です。`, `薬《くすり》 を 自分《じぶん》 で やめなければ なりません。`], 0, `〜ないで ください asks someone not to do something.`]
    ] },

  'ta-form-plain': {
    mistakes: [
      [`昨日《きのう》 は すごく 寒《さむ》い だった。`, `昨日《きのう》 は すごく 寒《さむ》かった。`, `An い-adjective makes its own past with かった; do not add だった.`],
      [`前《まえ》 に この 薬《くすり》 を 飲《の》みた こと が あります か。`, `前《まえ》 に この 薬《くすり》 を 飲《の》んだ こと が あります か。`, `The た-form is made like the て-form: 飲《の》んで becomes 飲《の》んだ.`],
      [`休《やす》み の 日《ひ》 は 掃除《そうじ》したり、 料理《りょうり》 します。`, `休《やす》み の 日《ひ》 は 掃除《そうじ》したり、 料理《りょうり》したり します。`, `Every action in the list takes 〜たり, and the list ends with します.`]
    ],
    more: [
      [`子供《こども》 の とき、 大《おお》きい 病気《びょうき》 を した こと が あります か。`, `Did you ever have a serious illness as a child?`],
      [`昨日《きのう》 は 一日中《いちにちじゅう》 何《なに》 も しなかった。`, `I didn't do anything all day yesterday. (a patient speaking plainly)`],
      [`最近《さいきん》 は 急《きゅう》に 泣《な》いたり、 怒《おこ》ったり します。`, `Lately I suddenly cry or get angry.`],
      [`京都《きょうと》 に 行《い》った こと が あります か。`, `Have you ever been to Kyoto?`],
      [`昨日《きのう》 買《か》った 本《ほん》 は とても おもしろかった。`, `The book I bought yesterday was really interesting.`],
      [`週末《しゅうまつ》 は 友達《ともだち》 と 会《あ》ったり、 買《か》い物《もの》 を したり しました。`, `At the weekend I met friends, went shopping and so on.`]
    ],
    quiz: [
      [`What is the plain past of 待《ま》つ?`, [`待《ま》ちた`, `待《ま》った`, `待《ま》んだ`], 1, `The て-form is 待《ま》って, so the た-form is 待《ま》った.`],
      [`What is the plain past of 遊《あそ》ぶ?`, [`遊《あそ》んだ`, `遊《あそ》いだ`, `遊《あそ》びた`], 0, `ぶ verbs take んで / んだ.`],
      [`How do you say "it was not expensive" in plain style?`, [`高《たか》い じゃなかった`, `高《たか》くない だった`, `高《たか》くなかった`], 2, `An い-adjective changes ない to なかった: 高《たか》くない → 高《たか》くなかった.`],
      [`Fill the blank: 日本《にほん》 の 映画《えいが》 を 見《み》た ＿ が あります か。 (Have you ever seen a Japanese film?)`, [`こと`, `ので`, `から`], 0, `た-form + こと が あります asks about past experience.`],
      [`A patient says: 夜《よる》 は 寝《ね》たり 起《お》きたり します。 What does it mean?`, [`I slept well last night.`, `I want to sleep at night.`, `At night I keep falling asleep and waking up.`], 2, `〜たり 〜たり します can describe two things that alternate.`],
      [`Which sentence means "I sometimes drink alcohol"?`, [`お酒《さけ》 を 飲《の》んだ こと が あります。`, `お酒《さけ》 を 飲《の》む こと が あります。`, `お酒《さけ》 を 飲《の》まなかった。`], 1, `Dictionary form + こと が あります means "sometimes do"; the た-form version means "have done before".`]
    ] }

});
