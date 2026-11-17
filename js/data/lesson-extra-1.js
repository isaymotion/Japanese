/* Lesson extras part 1 (0.23.0): common mistakes, more examples and a "More practice" quiz for existing N5 and N4 lessons
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
  'desu': {
    mistakes: [
      [`私《わたし》 わ 学生《がくせい》 です。`, `私《わたし》 は 学生《がくせい》 です。`, `The topic particle is written は even though it is read wa.`],
      [`あなた は 鈴木《すずき》さん です か。`, `鈴木《すずき》さん です か。`, `あなた can sound distant or rude to a patient: use the name with さん, or leave "you" out.`],
      [`私《わたし》 は 医者《いしゃ》。`, `私《わたし》 は 医者《いしゃ》 です。`, `Without です the sentence is blunt and casual; with patients end it with です.`]
    ],
    more: [
      [`私《わたし》 は 担当医《たんとうい》 です。`, `I am your doctor. (the doctor in charge of your care)`],
      [`今日《きょう》 は 初診《しょしん》 です か。`, `Is today your first visit?`],
      [`いいえ、 患者《かんじゃ》 では ありません。 家族《かぞく》 です。`, `No, I am not the patient. I am family.`],
      [`明日《あした》 は 雨《あめ》 です か。`, `Will it rain tomorrow?`],
      [`佐藤《さとう》さん は 大学生《だいがくせい》 です。`, `Ms. Sato is a university student.`],
      [`兄《あに》 は 銀行員《ぎんこういん》 です。`, `My older brother is a bank employee.`]
    ],
    quiz: [
      [`"Is today your first visit?" Which is right?`, [`今日《きょう》 は 初診《しょしん》 です か。`, `今日《きょう》 は 初診《しょしん》 か です。`, `今日《きょう》 か 初診《しょしん》 です。`], 0, `か goes at the very end, after です.`],
      [`いいえ、 看護師《かんごし》 では ありません。 means:`, [`Yes, I am a nurse.`, `No, I am not a nurse.`, `Are you a nurse?`], 1, `では ありません is the negative of です.`],
      [`Fill in the blank: 私《わたし》 ＿ 医者《いしゃ》 です。 (I am a doctor.)`, [`か`, `です`, `は`], 2, `は marks the topic, 私《わたし》.`],
      [`A patient asks you 先生《せんせい》 です か。 You are the doctor. What do you answer?`, [`はい、 先生《せんせい》 です か。`, `いいえ、 違《ちが》います。`, `はい、 そう です。`], 2, `はい、 そう です means "yes, that's right".`],
      [`Which negative ending is the more careful one?`, [`では ありません`, `じゃ ありません`, `です か`], 0, `では ありません is careful; じゃ ありません is the spoken form.`],
      [`You want to check a patient's name. Which is the most polite?`, [`あなた は 鈴木《すずき》 です か。`, `鈴木《すずき》 です。`, `鈴木《すずき》さん です か。`], 2, `Use the name with さん and か, without あなた.`]
    ]
  },
  'no-mo-to': {
    mistakes: [
      [`私《わたし》 は 医者《いしゃ》 も です。`, `私《わたし》 も 医者《いしゃ》 です。`, `も goes right after the word it is about, here 私《わたし》, and replaces は.`],
      [`父《ちち》 は 医者《いしゃ》 です と 母《はは》 は 看護師《かんごし》 です。`, `父《ちち》 は 医者《いしゃ》 です。 母《はは》 は 看護師《かんごし》 です。`, `と joins nouns only, never two sentences.`],
      [`私《わたし》 の お母《かあ》さん は 看護師《かんごし》 です。`, `私《わたし》 の 母《はは》 は 看護師《かんごし》 です。`, `When you talk about your own mother to others, use the plain word 母《はは》.`]
    ],
    more: [
      [`私《わたし》 は 精神科《せいしんか》 の 看護師《かんごし》 です。`, `I am a psychiatric nurse.`],
      [`朝《あさ》 と 昼《ひる》 の 薬《くすり》 です。`, `It is the morning and noon medicine.`],
      [`お腹《なか》 も 痛《いた》い です か。`, `Does your stomach hurt too?`],
      [`山田《やまだ》さん と 鈴木《すずき》さん は 友達《ともだち》 です。`, `Ms. Yamada and Mr. Suzuki are friends.`],
      [`日本《にほん》 の 車《くるま》 です。`, `It is a Japanese car.`],
      [`兄《あに》 も 会社員《かいしゃいん》 です。`, `My older brother is an office worker too.`]
    ],
    quiz: [
      [`Fill in the blank: お腹《なか》 ＿ 痛《いた》い です。 (My stomach hurts too.)`, [`と`, `も`, `の`], 1, `も means "also" and comes right after お腹《なか》.`],
      [`How do you say "a psychiatric nurse"?`, [`看護師《かんごし》 の 精神科《せいしんか》`, `精神科《せいしんか》 と 看護師《かんごし》`, `精神科《せいしんか》 の 看護師《かんごし》`], 2, `The describing noun comes first, then の, then the main noun.`],
      [`You are telling a doctor about your own mother. Which word do you use?`, [`母《はは》`, `お母《かあ》さん`, `お母《かあ》様《さま》`], 0, `Your own family takes plain words; お母《かあ》さん and お母《かあ》様《さま》 are for someone else's mother.`],
      [`山田《やまだ》さん と 田中《たなか》さん means:`, [`Mr. Yamada's Mr. Tanaka`, `Mr. Yamada, also Mr. Tanaka`, `Mr. Yamada and Mr. Tanaka`], 2, `と between two nouns means "and".`],
      [`What does 私《わたし》 の mean when the noun after it is left out?`, [`mine`, `me too`, `with me`], 0, `The noun after の can be dropped when it is clear: 私《わたし》 の is "mine".`],
      [`"It is a Japanese car." Which is right?`, [`車《くるま》 の 日本《にほん》 です。`, `日本《にほん》 の 車《くるま》 です。`, `日本《にほん》 と 車《くるま》 です。`], 1, `日本《にほん》 describes the car, so it comes first, before の.`]
    ]
  },
  'kosoado': {
    mistakes: [
      [`それ 本《ほん》 は 私《わたし》 の です。`, `その 本《ほん》 は 私《わたし》 の です。`, `Before a noun use その, not それ.`],
      [`どれ は 田中《たなか》さん の かばん です か。`, `どれ が 田中《たなか》さん の かばん です か。`, `A question word that is the subject takes が, not は.`],
      [`この 人《ひと》 は 鈴木《すずき》先生《せんせい》 です。`, `こちら は 鈴木《すずき》先生《せんせい》 です。`, `When you introduce someone, こちら is the polite word for "this person".`]
    ],
    more: [
      [`ここ は 精神科《せいしんか》 です。`, `This is the psychiatry department.`],
      [`待合室《まちあいしつ》 は あちら です。`, `The waiting room is that way.`],
      [`それ は 診察券《しんさつけん》 です か。`, `Is that your patient card?`],
      [`どの 電車《でんしゃ》 です か。`, `Which train is it?`],
      [`あそこ は コンビニ です。`, `Over there is a convenience store.`],
      [`これ は 日本《にほん》 の お茶《ちゃ》 です。`, `This is Japanese tea.`]
    ],
    quiz: [
      [`Fill in the blank: ＿ 人《ひと》 は 山田《やまだ》さん です。 (That person over there is Mr. Yamada.)`, [`あれ`, `あの`, `あそこ`], 1, `Before a noun use あの.`],
      [`A patient is holding some medicine. How do you ask "Is that your medicine?"`, [`これ は 山田《やまだ》さん の 薬《くすり》 です か。`, `あれ は 山田《やまだ》さん の 薬《くすり》 です か。`, `それ は 山田《やまだ》さん の 薬《くすり》 です か。`], 2, `Something near the listener is それ.`],
      [`Which word is the polite "where"?`, [`どちら`, `どれ`, `どの`], 0, `どちら is the polite partner of どこ.`],
      [`Fill in the blank: どれ ＿ 田中《たなか》さん の かばん です か。`, [`は`, `が`, `の`], 1, `A question word as the subject takes が.`],
      [`What does あそこ mean?`, [`here`, `there, near you`, `over there, away from both of us`], 2, `あ words point away from both speaker and listener.`],
      [`この かばん means:`, [`this bag (near me)`, `that bag (near you)`, `which bag?`], 0, `こ means near the speaker, and この comes before a noun.`]
    ]
  },
  'question-words': {
    mistakes: [
      [`だれ は 来《き》ました か。`, `だれ が 来《き》ました か。`, `A question word that is the subject takes が, never は.`],
      [`いいえ、 何《なに》 か ありません。`, `いいえ、 何《なに》 も ありません。`, `In a negative sentence "nothing" is 何《なに》 も, not 何《なに》 か.`],
      [`一日《いちにち》 に いくら 寝《ね》ます か。`, `一日《いちにち》 に どの くらい 寝《ね》ます か。`, `いくら asks only about money; for how long or how much use どの くらい.`]
    ],
    more: [
      [`痛《いた》み は どんな 感《かん》じ です か。`, `What kind of pain is it?`],
      [`お仕事《しごと》 は 何《なん》 です か。`, `What is your job?`],
      [`食欲《しょくよく》 は いかが です か。`, `How is your appetite?`],
      [`この 本《ほん》 は いくら です か。`, `How much is this book?`],
      [`誕生日《たんじょうび》 は いつ です か。`, `When is your birthday?`],
      [`週末《しゅうまつ》 は 何《なに》 を します か。`, `What do you do on weekends?`]
    ],
    quiz: [
      [`Fill in the blank: 誕生日《たんじょうび》 は ＿ です か。 (When is your birthday?)`, [`いつ`, `どこ`, `だれ`], 0, `いつ asks "when".`],
      [`How do you ask "What kind of pain is it?"`, [`痛《いた》み は いくら です か。`, `痛《いた》み は どんな 感《かん》じ です か。`, `痛《いた》み は どなた です か。`], 1, `どんな asks "what kind of".`],
      [`何《なに》 か 飲《の》みます か。 means:`, [`What will you drink?`, `Will you drink nothing?`, `Would you like something to drink?`], 2, `何《なに》 か is "something", so this is a yes-or-no question.`],
      [`Which word asks about price?`, [`どこ`, `いかが`, `いくら`], 2, `いくら is "how much (money)".`],
      [`Fill in the blank: 痛《いた》み は ＿ です か。 (Since when have you had the pain?)`, [`いつ から`, `どこ から`, `いくら から`], 0, `いつ (when) + から (from) asks "since when".`],
      [`Which is a good answer to 駅《えき》 は どこ です か。`, [`はい、 駅《えき》 です。`, `駅《えき》 は あそこ です。`, `駅《えき》 は どこ です。`], 1, `Put the place where どこ was and keep the rest of the sentence.`]
    ]
  },
  'numbers': {
    mistakes: [
      [`百千円《ひゃくせんえん》 です。`, `十万円《じゅうまんえん》 です。`, `Japanese counts in units of 万《まん》: 100,000 is 十万《じゅうまん》, not "hundred thousand".`],
      [`万円《まんえん》 です。`, `一万円《いちまんえん》 です。`, `Unlike 百《ひゃく》 and 千《せん》, 万《まん》 always needs 一《いち》 in front.`],
      [`あなた は 何歳《なんさい》 です か。`, `おいくつ です か。`, `Ask a patient's age politely with おいくつ です か, and leave out あなた.`]
    ],
    more: [
      [`田中《たなか》さん は 四十七歳《よんじゅうななさい》 です。`, `Mr. Tanaka is 47.`],
      [`病室《びょうしつ》 は 二百十五号室《にひゃくじゅうごごうしつ》 です。`, `The hospital room is number 215.`],
      [`身長《しんちょう》 は 百六十《ひゃくろくじゅう》 センチ です。`, `My height is 160 centimeters.`],
      [`この かばん は 九千円《きゅうせんえん》 です。`, `This bag is 9,000 yen.`],
      [`お弁当《べんとう》 は 七百円《ななひゃくえん》 です。`, `The boxed lunch is 700 yen.`],
      [`家賃《やちん》 は 六万円《ろくまんえん》 です。`, `The rent is 60,000 yen.`]
    ],
    quiz: [
      [`How do you say 100,000?`, [`ひゃくせん`, `じゅうまん`, `せんまん`], 1, `100,000 is ten 万《まん》: 十万《じゅうまん》.`],
      [`How do you say 800?`, [`はちひゃく`, `はちびゃく`, `はっぴゃく`], 2, `八百《はっぴゃく》 has a small っ and ぴゃく.`],
      [`How do you say "eight years old"?`, [`はっさい`, `はちさい`, `やっさい`], 0, `八歳《はっさい》 has a small っ.`],
      [`How do you say 3,000?`, [`さんせん`, `さんぜん`, `みせん`], 1, `三千《さんぜん》 changes せん to ぜん.`],
      [`What does 二万円《にまんえん》 mean?`, [`200,000 yen`, `2,000 yen`, `20,000 yen`], 2, `万《まん》 is 10,000, so 二万《にまん》 is 20,000.`],
      [`What is the polite way to ask a patient's age?`, [`おいくつ です か。`, `何《なん》 です か。`, `いくら です か。`], 0, `おいくつ です か is the polite "how old are you?".`]
    ]
  },
  'time-dates': {
    mistakes: [
      [`四時《よじ》 午後《ごご》 です。`, `午後《ごご》 四時《よじ》 です。`, `午前《ごぜん》 and 午後《ごご》 come before the time, not after it.`],
      [`一週間《いっしゅうかん》 から 眠《ねむ》れません。`, `一週間前《いっしゅうかんまえ》 から 眠《ねむ》れません。`, `For "since a week ago" add 前《まえ》 (ago) before から.`],
      [`明日《あした》 に 来《き》ます。`, `明日《あした》 来《き》ます。`, `Relative time words such as 明日《あした》 and 今日《きょう》 take no に.`]
    ],
    more: [
      [`次《つぎ》 の 診察《しんさつ》 は 金曜日《きんようび》 の 午後《ごご》 二時《にじ》 です。`, `Your next consultation is on Friday at 2 p.m.`],
      [`昨日《きのう》 は 何時《なんじ》 に 寝《ね》ました か。`, `What time did you go to bed yesterday?`],
      [`面会《めんかい》 は 午後《ごご》 一時《いちじ》 から 五時《ごじ》 まで です。`, `Visiting hours are from 1 to 5 p.m.`],
      [`母《はは》 の 誕生日《たんじょうび》 は 九月《くがつ》 八日《ようか》 です。`, `My mother's birthday is September 8.`],
      [`朝《あさ》 六時半《ろくじはん》 に 起《お》きます。`, `I get up at 6:30 in the morning.`],
      [`夏休《なつやす》み は 八月《はちがつ》 です。`, `Summer vacation is in August.`]
    ],
    quiz: [
      [`How do you say "April"?`, [`よんがつ`, `しがつ`, `よがつ`], 1, `四月《しがつ》 uses the reading し.`],
      [`How do you say "the 8th" of the month?`, [`ようか`, `はちにち`, `やっか`], 0, `八日《ようか》 has a special reading.`],
      [`Fill in the blank: 診察《しんさつ》 は 五時《ごじ》 ＿ です。 (Consultations are until 5.)`, [`から`, `ぐらい`, `まで`], 2, `まで means "until".`],
      [`What does 来週《らいしゅう》 mean?`, [`next week`, `last week`, `this week`], 0, `来週《らいしゅう》 is next week; 先週《せんしゅう》 is last week and 今週《こんしゅう》 this week.`],
      [`How do you say "10 minutes"?`, [`じゅうふん`, `とおふん`, `じゅっぷん`], 2, `十分《じゅっぷん》 has a small っ and ぷん.`],
      [`Which phrase means "about two weeks"?`, [`二週間前《にしゅうかんまえ》`, `二週間《にしゅうかん》 ぐらい`, `二週間《にしゅうかん》 まで`], 1, `ぐらい means "about".`]
    ]
  },
  'counters': {
    mistakes: [
      [`二人《ふたり》 子《こ》ども が います。`, `子《こ》ども が 二人《ふたり》 います。`, `The number and counter usually come after the noun and its particle.`],
      [`りんご を 三《さん》 ください。`, `りんご を 三《みっ》つ ください。`, `A bare number cannot count things: use a counter or the つ series.`],
      [`一日《いちにち》 で 三回《さんかい》 飲《の》みます。`, `一日《いちにち》 に 三回《さんかい》 飲《の》みます。`, `"Per day" or "a day" is 一日《いちにち》 に, not で.`]
    ],
    more: [
      [`お薬《くすり》 は 一日《いちにち》 に 何回《なんかい》 です か。`, `How many times a day is your medicine?`],
      [`ご兄弟《きょうだい》 は 何人《なんにん》 です か。`, `How many brothers and sisters do you have?`],
      [`夜《よる》 に 三回《さんかい》 ぐらい 起《お》きます。`, `I wake up about three times at night.`],
      [`お水《みず》 を 一杯《いっぱい》 ください。`, `A glass of water, please.`],
      [`切手《きって》 を 五枚《ごまい》 ください。`, `Five stamps, please.`],
      [`みかん が 四《よっ》つ あります。`, `There are four mandarin oranges.`]
    ],
    quiz: [
      [`How do you say "one person"?`, [`いちにん`, `ひとり`, `ひとつ`], 1, `一人《ひとり》 is irregular.`],
      [`How do you say "eight times"?`, [`はっかい`, `はちかい`, `やっかい`], 0, `八回《はっかい》 has a small っ.`],
      [`Which counter is used for sheets of paper and stamps?`, [`本《ほん》`, `杯《はい》`, `枚《まい》`], 2, `枚《まい》 counts flat things.`],
      [`Fill in the blank: 週《しゅう》 ＿ 二回《にかい》 お酒《さけ》 を 飲《の》みます。 (I drink alcohol twice a week.)`, [`に`, `を`, `の`], 0, `に gives "per": 週《しゅう》 に 二回《にかい》 is twice a week.`],
      [`Which word asks "how many" with the つ series?`, [`いくら`, `いくつ`, `いかが`], 1, `いくつ asks how many; いくら asks how much money.`],
      [`Which sentence means "I have three children"?`, [`三人《さんにん》 が 子《こ》ども います。`, `子《こ》ども を 三《みっ》つ います。`, `子《こ》ども が 三人《さんにん》 います。`], 2, `Noun + が, then 三人《さんにん》, then the verb.`]
    ]
  }
});
