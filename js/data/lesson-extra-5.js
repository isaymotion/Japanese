/* Lesson extras part 5 (0.23.0): common mistakes, more examples and a "More practice" quiz for existing N5 and N4 lessons
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

  'conversation-habits': {
    mistakes: [
      [`鈴木《すずき》、 どうぞ お入《はい》り ください。`, `鈴木《すずき》さん、 どうぞ お入《はい》り ください。`, `Call an adult by family name + さん; a bare family name sounds rude to a patient.`],
      [`いいえ、 明日《あした》 は だめ です。`, `すみません、 明日《あした》 は ちょっと…。`, `A flat いいえ … だめ です sounds harsh; ちょっと and a trailing end decline gently.`],
      [`早《はや》く 答《こた》えて ください。`, `ゆっくり 考《かんが》えて ください。`, `A pause often means the patient is thinking, so give time instead of pressing for an answer.`]
    ],
    more: [
      [`ちょっと 血圧《けつあつ》 を 測《はか》って も いい です か。`, `May I take your blood pressure for a moment?`],
      [`薬《くすり》 は ちょっと 飲《の》みたく ない ん です けど…。`, `I'd rather not take the medicine, but…`],
      [`先生《せんせい》、 いつも すみません。`, `Doctor, thank you for everything, as always.`],
      [`その 日《ひ》 は ちょっと 用事《ようじ》 が あって…。`, `That day I have something on…`],
      [`駅《えき》 まで 送《おく》って いただいて、 すみません。`, `Thank you for taking me all the way to the station.`],
      [`へえ、 そう です か。 いい です ね。`, `Oh, really? That sounds nice.`]
    ],
    quiz: [
      [`A colleague invites you to dinner tonight and you can't go. Which reply is the most natural?`, [`今日《きょう》 は ちょっと…。`, `いいえ、 行《い》きません。`, `行《い》きたく ない です。`], 0, `Trailing off after ちょっと is the usual gentle way to decline.`],
      [`なるほど most nearly means:`, [`I disagree.`, `I see.`, `Excuse me.`], 1, `なるほど is a listening response meaning "I see, that makes sense".`],
      [`A patient is quiet for a long time before answering. What is a good thing to say?`, [`早《はや》く 言《い》って ください。`, `わかりません か。`, `ゆっくり で いい です よ。`], 2, `Silence often means thinking; telling the patient to take their time is kind.`],
      [`How do you call in a patient named Suzuki?`, [`鈴木《すずき》さん、 どうぞ。`, `鈴木《すずき》、 どうぞ。`, `鈴木《すずき》先生《せんせい》、 どうぞ。`], 0, `Patients are addressed by family name + さん; 先生《せんせい》 is for doctors and teachers.`],
      [`Fill the blank to soften the request: ＿ 待《ま》って ください。`, [`もう`, `まだ`, `ちょっと`], 2, `ちょっと (a little) softens a request.`],
      [`You suggest a follow-up visit and the patient answers 考《かんが》えて おきます. This may mean:`, [`They have already agreed.`, `They may be politely declining.`, `They did not hear you.`], 1, `考《かんが》えて おきます is often a polite no, so check gently.`]
    ] },

  'distress-words': {
    mistakes: [
      [`朝《あさ》 から 体《からだ》 が だるい します。`, `朝《あさ》 から 体《からだ》 が だるい です。`, `だるい is an い-adjective, so it takes です; only mimetic words such as イライラ take する.`],
      [`落《お》ち込《こ》んで いる の？`, `気分《きぶん》 が 落《お》ち込《こ》んで います か。`, `To a patient, ask in polite です/ます; the casual form sounds too familiar.`],
      [`もっと 我慢《がまん》 して ください。`, `ずっと 我慢《がまん》 して きた ん です ね。`, `Telling a distressed patient to endure more is blunt; acknowledge how long they have endured instead.`]
    ],
    more: [
      [`夕方《ゆうがた》 に なる と、 体《からだ》 が だるく なります。`, `When evening comes, my body gets heavy and sluggish.`],
      [`家《いえ》 で も そわそわ して、 落《お》ち着《つ》きません。`, `Even at home I feel restless and can't settle.`],
      [`人《ひと》 と 話《はな》す と、 胸《むね》 が ドキドキ します。`, `When I talk to people, my heart pounds.`],
      [`試験《しけん》 の 前《まえ》 は 気《き》 が 重《おも》い です。`, `I feel weighed down before exams.`],
      [`外《そと》 が うるさくて、 気《き》 が 散《ち》ります。`, `It's noisy outside, so I can't concentrate.`],
      [`引《ひ》っ越《こ》し の 準備《じゅんび》 が しんどい です。`, `Getting ready for the move is exhausting.`]
    ],
    quiz: [
      [`だるい most nearly means:`, [`a sharp pain in one spot`, `sluggish and lacking energy`, `cheerful`], 1, `だるい describes a heavy, sluggish feeling in the whole body.`],
      [`Fill the blank: 小《ちい》さい 音《おと》 でも ＿ に なって、 眠《ねむ》れません。 (it bothers me)`, [`気《き》`, `元気《げんき》`, `気分《きぶん》`], 0, `気《き》 に なる means something bothers you or stays on your mind.`],
      [`A patient says 頭《あたま》 が ぼーっと します. Which reply is best?`, [`それ は 普通《ふつう》 です。`, `早《はや》く 寝《ね》て ください。`, `「ぼーっと」 と いう の は、 どんな 感《かん》じ です か。`], 2, `Asking what the patient means by the word invites them to say more.`],
      [`Which word is used with します?`, [`だるい`, `イライラ`, `苦《くる》しい`], 1, `Mimetic words such as イライラ take する; だるい and 苦《くる》しい are い-adjectives.`],
      [`仕事《しごと》 の こと を 考《かんが》える と 気《き》 が 重《おも》い です means:`, [`I feel weighed down when I think about work.`, `I am gaining weight because of work.`, `I like thinking about work.`], 0, `気《き》 が 重《おも》い means a sense of dread about something.`],
      [`Which sentence means "I brood over little things"?`, [`小《ちい》さい こと で ドキドキ します。`, `小《ちい》さい こと で ぼーっと します。`, `小《ちい》さい こと で くよくよ します。`], 2, `くよくよ する means to brood or dwell on things.`]
    ] },

  'interview-patterns': {
    mistakes: [
      [`眠《ねむ》れます か、 食《た》べられます か、 仕事《しごと》 は 行《い》けます か。`, `夜《よる》 は 眠《ねむ》れて います か。`, `Ask one thing at a time; a distressed patient may answer only the last part of a stacked question.`],
      [`自殺《じさつ》 したい です か。`, `皆《みな》さん に お聞《き》き して います が、 死《し》にたい と 思《おも》う こと は あります か。`, `A bare question can sound like an accusation; a short preface and the gentler 死《し》にたい と 思《おも》う こと frame make it routine.`],
      [`どの くらい から 眠《ねむ》れて いません か。`, `いつ から 眠《ねむ》れて いません か。`, `いつ から asks when it started; どの くらい asks how much or how long.`]
    ],
    more: [
      [`食欲《しょくよく》 は あります か。`, `Do you have an appetite?`],
      [`どんな とき に 気分《きぶん》 が 楽《らく》 に なります か。`, `In what situations do you feel better?`],
      [`前《まえ》 に カウンセリング を 受《う》けた こと が あります か。`, `Have you ever had counselling before?`],
      [`富士山《ふじさん》 に 登《のぼ》った こと が あります か。`, `Have you ever climbed Mount Fuji?`],
      [`日本語《にほんご》 は いつ から 勉強《べんきょう》して います か。`, `How long have you been studying Japanese?`],
      [`週末《しゅうまつ》 は どんな こと を して います か。`, `What do you usually do at the weekend?`]
    ],
    quiz: [
      [`その 痛《いた》み は どの くらい 続《つづ》いて います か asks:`, [`how long it has lasted`, `where it is`, `who noticed it`], 0, `どの くらい 続《つづ》いて います か asks about duration.`],
      [`Fill the blank: 以前《いぜん》 に 入院《にゅういん》 ＿ こと が あります か。 (Have you ever been admitted?)`, [`する`, `して`, `した`], 2, `Past experience uses the た-form before こと が あります.`],
      [`もし よければ means:`, [`as soon as possible`, `if you don't mind`, `if it is bad`], 1, `もし よければ is a soft preface that leaves the patient free to answer.`],
      [`Which sentence is correct?`, [`誰《だれ》 か が 悪口《わるくち》 を 言《い》って いる と 感《かん》じる こと は あります か。`, `誰《だれ》 か が 悪口《わるくち》 を 言《い》って いる を 感《かん》じます か。`, `誰《だれ》 か が 悪口《わるくち》 を 言《い》って いる と 感《かん》じて ください。`], 0, `〜と 感《かん》じる こと は あります か is the frame for perceptions and beliefs.`],
      [`Which sentence invites the patient to talk about their sleep?`, [`睡眠《すいみん》 を 教《おし》えます。`, `睡眠《すいみん》 は どこ です か。`, `睡眠《すいみん》 に ついて 教《おし》えて ください。`], 2, `〜に ついて 教《おし》えて ください opens up a topic.`],
      [`お薬《くすり》 は 毎日《まいにち》 飲《の》んで います か asks:`, [`whether the patient took medicine once in the past`, `whether the patient takes medicine regularly`, `whether the patient wants medicine`], 1, `〜て います か asks about something done now or regularly.`]
    ] },

  'interpreting': {
    mistakes: [
      [`え？ もう 一度《いちど》。`, `すみません、 もう 一度《いちど》 お願《ねが》い します。`, `A bare え？ sounds abrupt; すみません and お願《ねが》い します make the repair polite.`],
      [`そんなに 早《はや》く 話《はな》さない で。`, `もう 少《すこ》し ゆっくり 話《はな》して いただけます か。`, `A casual "don't talk so fast" sounds like an order; ask politely for slower speech.`],
      [`朝《あさ》 早《はや》く 目《め》 が 覚《さ》めます と いう こと です か。`, `朝《あさ》 早《はや》く 目《め》 が 覚《さ》める と いう こと です か。`, `The part before と いう こと です か stays in plain form.`]
    ],
    more: [
      [`すみません、 今《いま》 の 言葉《ことば》 を もう 一度《いちど》 ゆっくり 言《い》って いただけます か。`, `Sorry, could you say that word again slowly?`],
      [`大切《たいせつ》 な こと なので、 紙《かみ》 に 書《か》いて 確認《かくにん》しましょう。`, `Because this is important, let's write it down and check.`],
      [`通訳《つうやく》 の 方《かた》 が 来《く》る まで、 少《すこ》し 待《ま》って いただけます か。`, `Could you wait a little until the interpreter arrives?`],
      [`すみません、 この 漢字《かんじ》 は 何《なん》 と 読《よ》みます か。`, `Excuse me, how do you read this kanji?`],
      [`電話《でんわ》 の 声《こえ》 が 小《ちい》さくて、 よく 聞《き》こえません。`, `The voice on the phone is quiet, so I can't hear well.`],
      [`つまり、 会議《かいぎ》 は 来週《らいしゅう》 に なった と いう こと です か。`, `So you mean the meeting has moved to next week?`]
    ],
    quiz: [
      [`簡単《かんたん》 な 言葉《ことば》 で 言《い》って いただけます か means:`, [`Could you write it here?`, `Could you say it in simpler words?`, `Could you speak English?`], 1, `簡単《かんたん》 な 言葉《ことば》 means simple words.`],
      [`Fill the blank: 夜《よる》 に 声《こえ》 が 聞《き》こえる ＿ いう こと です か。`, [`と`, `を`, `が`], 0, `The checking frame is 〜と いう こと です か.`],
      [`You need to explain a treatment plan and ask for consent. Who should interpret?`, [`the patient's teenage child`, `a friend who came with the patient`, `a qualified medical interpreter`], 2, `Consent needs a qualified medical interpreter; family and friends are informants.`],
      [`A patient says something important about suicide through an interpreter. You ask the interpreter for:`, [`the patient's exact words`, `a short summary`, `the interpreter's own opinion`], 0, `For key statements, ask for the patient's words, word for word.`],
      [`You are not sure you understood something important. What should you do?`, [`guess and move on`, `say so and check`, `nod and say はい`], 1, `Say that you are not sure and check, rather than guessing.`],
      [`Which sentence correctly checks your understanding?`, [`毎晩《まいばん》 お酒《さけ》 を 飲《の》みます と いう こと です か。`, `毎晩《まいばん》 お酒《さけ》 を 飲《の》む と いう です か。`, `毎晩《まいばん》 お酒《さけ》 を 飲《の》む と いう こと です か。`], 2, `Plain form + と いう こと です か; こと cannot be left out.`]
    ] },

  'noun-clauses': {
    mistakes: [
      [`先週《せんしゅう》 行《い》きました 病院《びょういん》 は 遠《とお》かった です。`, `先週《せんしゅう》 行《い》った 病院《びょういん》 は 遠《とお》かった です。`, `The clause before a noun is in plain form, even in a polite sentence.`],
      [`夜《よる》 眠《ねむ》れない の 日《ひ》 は どう して います か。`, `夜《よる》 眠《ねむ》れない 日《ひ》 は どう して います か。`, `Nothing goes between a verb clause and its noun; の joins only a noun to a noun.`],
      [`看護師《かんごし》さん は 教《おし》えた 体操《たいそう》 を 毎朝《まいあさ》 して います。`, `看護師《かんごし》さん が 教《おし》えた 体操《たいそう》 を 毎朝《まいあさ》 して います。`, `The subject inside a noun clause takes が (or の), not は.`]
    ],
    more: [
      [`調子《ちょうし》 が いい 日《ひ》 と 悪《わる》い 日《ひ》 が あります。`, `There are days when I feel well and days when I don't.`],
      [`気分《きぶん》 が 落《お》ち込《こ》んだ とき に よく 行《い》く 場所《ばしょ》 は あります か。`, `Is there a place you often go when you feel down?`],
      [`前《まえ》 の 病院《びょういん》 で 受《う》けた 検査《けんさ》 の 結果《けっか》 は あります か。`, `Do you have the results of the tests you had at your previous hospital?`],
      [`駅《えき》 で 会《あ》った 人《ひと》 は 私《わたし》 の 先生《せんせい》 でした。`, `The person I met at the station was my teacher.`],
      [`子《こ》ども の とき に 住《す》んで いた 家《いえ》 は もう ありません。`, `The house I lived in as a child is no longer there.`],
      [`週末《しゅうまつ》 に 読《よ》む 本《ほん》 を 買《か》いました。`, `I bought a book to read at the weekend.`]
    ],
    quiz: [
      [`Which means "a doctor who speaks English"?`, [`医者《いしゃ》 英語《えいご》 を 話《はな》す`, `英語《えいご》 を 話《はな》す 医者《いしゃ》`, `英語《えいご》 を 話《はな》す の 医者《いしゃ》`], 1, `The description comes first and the noun last, with nothing between them.`],
      [`Fill the blank: ＿ 頃《ころ》 は、 よく 山《やま》 に 登《のぼ》りました。 (when I was well)`, [`元気《げんき》 でした`, `元気《げんき》 の`, `元気《げんき》 だった`], 2, `A な-adjective in the past takes だった before a noun.`],
      [`昨日《きのう》 母《はは》 が 買《か》った 本《ほん》 means:`, [`the book my mother bought yesterday`, `the book I bought my mother yesterday`, `My mother will buy a book tomorrow.`], 0, `The clause 昨日《きのう》 母《はは》 が 買《か》った describes 本《ほん》.`],
      [`Which sentence is correct?`, [`毎朝《まいあさ》 飲《の》みます 薬《くすり》 は これ です。`, `毎朝《まいあさ》 飲《の》む 薬《くすり》 は これ です。`, `毎朝《まいあさ》 飲《の》む の 薬《くすり》 は これ です。`], 1, `Plain form directly before the noun: 飲《の》む 薬《くすり》.`],
      [`In 弟《おとうと》 の 撮《と》った 写真《しゃしん》, who took the photo?`, [`I did`, `a friend`, `my younger brother`], 2, `In a short noun clause の can mark the subject: 弟《おとうと》 の 撮《と》った = that my brother took.`],
      [`Which means "the days when I can't eat"?`, [`食《た》べられない 日《ひ》`, `日《ひ》 食《た》べられない`, `食《た》べられません 日《ひ》`], 0, `The plain negative clause comes before 日《ひ》.`]
    ] },

  'nominalizers': {
    mistakes: [
      [`人《ひと》 と 話《はな》す が 怖《こわ》い です。`, `人《ひと》 と 話《はな》す の が 怖《こわ》い です。`, `A verb cannot take が directly; add の to make it a noun first.`],
      [`廊下《ろうか》 で 誰《だれ》 か が 話《はな》して いる こと が 聞《き》こえます。`, `廊下《ろうか》 で 誰《だれ》 か が 話《はな》して いる の が 聞《き》こえます。`, `With 聞《き》こえる and 見《み》える, only の is used.`],
      [`一人《ひとり》 で 買《か》い物《もの》 に 行《い》く の が できます。`, `一人《ひとり》 で 買《か》い物《もの》 に 行《い》く こと が できます。`, `"Can do" is 〜こと が できます; の is not used with できる.`]
    ],
    more: [
      [`夜《よる》 一人《ひとり》 で いる の が 不安《ふあん》 です。`, `I feel anxious being alone at night.`],
      [`最近《さいきん》、 本《ほん》 を 読《よ》む こと が できなく なりました。`, `Lately I have become unable to read books.`],
      [`急《きゅう》 に 悲《かな》しく なる こと が あります。`, `Sometimes I suddenly feel sad.`],
      [`朝《あさ》 早《はや》く 起《お》きる の が 苦手《にがて》 です。`, `I'm not good at getting up early.`],
      [`友達《ともだち》 が 来《く》る の を 駅《えき》 で 待《ま》ちました。`, `I waited at the station for my friend to arrive.`],
      [`電気《でんき》 を 消《け》す の を 忘《わす》れて、 出《で》かけました。`, `I forgot to turn off the light and went out.`]
    ],
    quiz: [
      [`Fill the blank: 一人《ひとり》 で 歩《ある》く ＿ が できます か。`, [`の`, `こと`, `もの`], 1, `"Can do" takes こと: 〜こと が できます.`],
      [`車《くるま》 を 運転《うんてん》 する の が 怖《こわ》い です means:`, [`I'm afraid of driving a car.`, `I sometimes drive a car.`, `I have driven a car before.`], 0, `〜の が 怖《こわ》い means being afraid of doing something.`],
      [`Which sentence means "I sometimes can't remember people's names"?`, [`人《ひと》 の 名前《なまえ》 を 思《おも》い出《だ》したい こと が あります。`, `人《ひと》 の 名前《なまえ》 が 思《おも》い出《だ》せない こと が あります。`, `人《ひと》 の 名前《なまえ》 が 思《おも》い出《だ》せない の が あります。`], 1, `ない-form + こと が あります means "it sometimes happens that … not".`],
      [`いちばん 楽《たの》しい の は 週末《しゅうまつ》 です means:`, [`I enjoy weekends a little.`, `Weekends are hard for me.`, `The most enjoyable time is the weekend.`], 2, `〜の は 〜 です picks out the thing: the most enjoyable one is the weekend.`],
      [`Fill the blank: 弟《おとうと》 が 宿題《しゅくだい》 を する ＿ を 手伝《てつだ》いました。`, [`の`, `こと`, `と`], 0, `手伝《てつだ》う takes 〜の を.`],
      [`Which sentence means "I stopped drinking coffee at night"?`, [`夜《よる》 コーヒー を 飲《の》む を やめました。`, `夜《よる》 コーヒー を やめる の を 飲《の》みました。`, `夜《よる》 コーヒー を 飲《の》む の を やめました。`], 2, `The action becomes a noun with の, then takes を before やめる.`]
    ] },

  'embedded-questions': {
    mistakes: [
      [`どこ が 痛《いた》い です か 教《おし》えて ください。`, `どこ が 痛《いた》い か 教《おし》えて ください。`, `The question inside the sentence is in plain form; drop です.`],
      [`それ が 副作用《ふくさよう》 だ か どうか 調《しら》べます。`, `それ が 副作用《ふくさよう》 か どうか 調《しら》べます。`, `After a noun, か follows directly with no だ.`],
      [`ご家族《かぞく》 が いつ 来《く》る か どうか 教《おし》えて ください。`, `ご家族《かぞく》 が いつ 来《く》る か 教《おし》えて ください。`, `With a question word such as いつ, use か alone, not か どうか.`]
    ],
    more: [
      [`どの くらい 眠《ねむ》れた か、 毎朝《まいあさ》 ノート に 書《か》いて ください。`, `Every morning, please write in a notebook how long you slept.`],
      [`薬《くすり》 が 効《き》いて いる か どうか、 来週《らいしゅう》 また 聞《き》きます。`, `I'll ask you again next week whether the medicine is working.`],
      [`誰《だれ》 と 一緒《いっしょ》 に 来《き》た か 教《おし》えて ください。`, `Please tell me who you came with.`],
      [`明日《あした》 雨《あめ》 が 降《ふ》る か どうか 知《し》って います か。`, `Do you know whether it will rain tomorrow?`],
      [`会議《かいぎ》 が 何時《なんじ》 に 始《はじ》まる か 忘《わす》れました。`, `I've forgotten what time the meeting starts.`],
      [`この 店《みせ》 が 日曜日《にちようび》 も 開《あ》いて いる か どうか、 知《し》りません。`, `I don't know whether this shop is open on Sundays too.`]
    ],
    quiz: [
      [`Fill the blank: どこ で 傘《かさ》 を なくした ＿ 覚《おぼ》えて いません。`, [`か どうか`, `か`, `と`], 1, `With the question word どこ, use か alone.`],
      [`Which sentence is correct?`, [`熱《ねつ》 が ある か どうか 測《はか》りましょう。`, `熱《ねつ》 が あります か どうか 測《はか》りましょう。`, `熱《ねつ》 が ある か どこ 測《はか》りましょう。`], 0, `A yes-or-no question inside a sentence is plain form + か どうか.`],
      [`何《なに》 が 心配《しんぱい》 か 教《おし》えて ください means:`, [`Is there anything you're worried about?`, `Please don't worry.`, `Please tell me what you're worried about.`], 2, `何《なに》 + clause + か is "what …", inside 教《おし》えて ください.`],
      [`Fill the blank: その 薬《くすり》 が 合《あ》って いる ＿、 来週《らいしゅう》 確認《かくにん》しましょう。 (whether)`, [`と`, `の`, `か どうか`], 2, `"Whether" is か どうか.`],
      [`Which sentence means "I don't know why I can't sleep"?`, [`どうして 眠《ねむ》れません か わかりません。`, `どうして 眠《ねむ》れない か わかりません。`, `どうして 眠《ねむ》れない か どうか わかりません。`], 1, `Plain form + か after a question word, with no か どうか.`],
      [`Which word completes it? 検査《けんさ》 の 結果《けっか》 が いつ 出《で》る か ＿。 (I don't know)`, [`わかりません`, `ありません`, `できません`], 0, `わかりません takes an embedded question: "I don't know when …".`]
    ] }

});
