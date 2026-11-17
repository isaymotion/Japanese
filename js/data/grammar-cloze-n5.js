/* Grammar fill-the-blank items (0.23.0), N5, ids c-n5-001 on (4 per N5 lesson, the 10 new ones included). Used by #/cloze (js/cloze.js).
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape: window.GRAMMAR_CLOZE = (window.GRAMMAR_CLOZE || []).concat([
     { id:'c-n5-001', lv:'N5', l:'<lesson id>', s:'薬《くすり》 ＿ 飲《の》みます。', a:'を', opts:['を','に','が','で'], en:'I take medicine.', why:'...one sentence...' } ]);
   lv: N5 | N4 | N3 | N2; l: the id of the lesson (of that level) that teaches the point. ＿ is its own word, exactly once in s.
   a is one of the 4 distinct opts (any position); App.fillBlank(s, a) (js/ja.js) puts a into s, and that sentence must be
   correct and natural (it is spoken and recorded); every other option makes it ungrammatical or clearly wrong for en.
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.GRAMMAR_CLOZE = (window.GRAMMAR_CLOZE || []).concat([
  /* desu */
  { id: 'c-n5-001', lv: 'N5', l: 'desu', s: '田中《たなか》さん は 看護師《かんごし》 ＿。', a: 'です', opts: ['ます', 'です', 'を', 'が'], en: "Ms. Tanaka is a nurse.", why: "A は B です ends with です after a noun; ます belongs to verbs only." },
  { id: 'c-n5-002', lv: 'N5', l: 'desu', s: 'これ は 薬《くすり》 です ＿。', a: 'か', opts: ['は', 'を', 'か', 'に'], en: "Is this medicine?", why: "Add か after です to turn a statement into a question." },
  { id: 'c-n5-003', lv: 'N5', l: 'desu', s: '「患者《かんじゃ》さん です か。」「はい、 ＿ です。」', a: 'そう', opts: ['どう', 'そう', '何《なん》', 'ああ'], en: "Are you the patient? — Yes, I am.", why: "はい、 そう です is the short yes-answer to a です か question; どう and 何《なん》 would ask a new question." },
  { id: 'c-n5-004', lv: 'N5', l: 'desu', s: '初《はじ》めまして。 ナバロ ＿ 申《もう》します。', a: 'と', opts: ['を', 'が', 'に', 'と'], en: "How do you do? My name is Navarro.", why: "Your name takes と before 申《もう》します, the humble way to say your name." },

  /* no-mo-to */
  { id: 'c-n5-005', lv: 'N5', l: 'no-mo-to', s: 'これ は 母《はは》 ＿ 薬《くすり》 です。', a: 'の', opts: ['の', 'も', 'と', 'を'], en: "This is my mother's medicine.", why: "の joins two nouns to show whose it is: 母《はは》 の 薬《くすり》." },
  { id: 'c-n5-006', lv: 'N5', l: 'no-mo-to', s: '父《ちち》 は 医者《いしゃ》 です。 兄《あに》 ＿ 医者《いしゃ》 です。', a: 'も', opts: ['と', 'も', 'の', 'を'], en: "My father is a doctor. My older brother is a doctor too.", why: "も replaces は to say \"also\"; 兄《あに》 の 医者《いしゃ》 would mean my brother's doctor." },
  { id: 'c-n5-007', lv: 'N5', l: 'no-mo-to', s: '朝《あさ》 は パン ＿ 卵《たまご》 を 食《た》べました。', a: 'と', opts: ['も', 'の', 'は', 'と'], en: "In the morning I ate bread and eggs.", why: "と between nouns lists them all: A と B, \"A and B\"." },
  { id: 'c-n5-008', lv: 'N5', l: 'no-mo-to', s: 'あの 人《ひと》 は この 病院《びょういん》 ＿ 看護師《かんごし》 です。', a: 'の', opts: ['と', 'も', 'の', 'を'], en: "That person is a nurse at this hospital.", why: "の also shows where someone belongs: 病院《びょういん》 の 看護師《かんごし》, \"the hospital's nurse\"." },

  /* kosoado */
  { id: 'c-n5-009', lv: 'N5', l: 'kosoado', s: '＿ 薬《くすり》 は 苦《にが》い です。', a: 'この', opts: ['これ', 'ここ', 'この', 'どれ'], en: "This medicine is bitter.", why: "Before a noun use この; これ stands alone and cannot be followed by a noun." },
  { id: 'c-n5-010', lv: 'N5', l: 'kosoado', s: 'すみません、 トイレ は ＿ です か。', a: 'どこ', opts: ['どこ', 'どれ', 'どの', 'どう'], en: "Excuse me, where is the toilet?", why: "どこ asks for a place; どれ asks which thing and どの needs a noun after it." },
  { id: 'c-n5-011', lv: 'N5', l: 'kosoado', s: '＿ へ どうぞ。', a: 'こちら', opts: ['これ', 'この', 'こんな', 'こちら'], en: "This way, please.", why: "こちら is the polite word for \"this way, here\" and can take へ; これ is a thing, not a direction." },
  { id: 'c-n5-012', lv: 'N5', l: 'kosoado', s: '＿ が 痛《いた》い です か。', a: 'そこ', opts: ['その', 'そう', 'そこ', 'あの'], en: "Does it hurt there (where you are pointing)?", why: "そこ is a place near the listener, such as the spot on their own body; その and あの need a noun after them." },

  /* question-words */
  { id: 'c-n5-013', lv: 'N5', l: 'question-words', s: 'お名前《なまえ》 は ＿ です か。', a: '何《なん》', opts: ['誰《だれ》', '何《なん》', 'どこ', 'いつ'], en: "What is your name?", why: "A name is a \"what\": 何《なん》 です か; 誰《だれ》 asks about a person." },
  { id: 'c-n5-014', lv: 'N5', l: 'question-words', s: '＿ か 質問《しつもん》 は あります か。', a: '何《なに》', opts: ['何《なに》', 'どれ', 'どこ', 'いつ'], en: "Do you have any questions?", why: "何《なに》 か means \"anything\"; どこ か is \"somewhere\" and いつ か \"some day\", and どれ does not take か this way." },
  { id: 'c-n5-015', lv: 'N5', l: 'question-words', s: '＿ から 痛《いた》い です か。', a: 'いつ', opts: ['誰《だれ》', 'どれ', 'いつ', 'どう'], en: "Since when has it hurt?", why: "いつ から asks since when; it is a key question about how long a symptom has lasted." },
  { id: 'c-n5-016', lv: 'N5', l: 'question-words', s: '「この 傘《かさ》 は ＿ の です か。」「私《わたし》 の です。」', a: '誰《だれ》', opts: ['何《なん》', 'どこ', 'いつ', '誰《だれ》'], en: "Whose umbrella is this? — It is mine.", why: "誰《だれ》 の asks \"whose\", which matches the answer 私《わたし》 の です." },

  /* numbers */
  { id: 'c-n5-017', lv: 'N5', l: 'numbers', s: '電話《でんわ》 番号《ばんごう》 は ＿ です か。', a: '何番《なんばん》', opts: ['何番《なんばん》', '何時《なんじ》', '何歳《なんさい》', '何人《なんにん》'], en: "What is your phone number?", why: "Ask for a phone number with 何番《なんばん》; 何時《なんじ》 is the time and 何歳《なんさい》 is age." },
  { id: 'c-n5-018', lv: 'N5', l: 'numbers', s: '失礼《しつれい》 です が、 ＿ です か。', a: 'おいくつ', opts: ['いくら', 'おいくつ', '何時《なんじ》', '何番《なんばん》'], en: "Excuse me for asking, but how old are you?", why: "おいくつ です か is the polite way to ask age; いくら asks a price." },
  { id: 'c-n5-019', lv: 'N5', l: 'numbers', s: 'この 本《ほん》 は ＿ です か。', a: 'いくら', opts: ['いくつ', '何番《なんばん》', 'いくら', '何時《なんじ》'], en: "How much is this book?", why: "いくら asks a price; いくつ asks how many or how old." },
  { id: 'c-n5-020', lv: 'N5', l: 'numbers', s: 'この 時計《とけい》 は ＿ です。', a: '一万円《いちまんえん》', opts: ['十万円《じゅうまんえん》', '千円《せんえん》', '百円《ひゃくえん》', '一万円《いちまんえん》'], en: "This watch is 10,000 yen.", why: "10,000 is one 万《まん》, 一万円《いちまんえん》; 千円《せんえん》 is 1,000 and 十万円《じゅうまんえん》 is 100,000." },

  /* time-dates */
  { id: 'c-n5-021', lv: 'N5', l: 'time-dates', s: '毎朝《まいあさ》 七時《しちじ》 ＿ 起《お》きます。', a: 'に', opts: ['で', 'に', 'を', 'が'], en: "I get up at seven every morning.", why: "A clock time takes に: 七時《しちじ》 に, \"at seven\"." },
  { id: 'c-n5-022', lv: 'N5', l: 'time-dates', s: '診察《しんさつ》 は 九時《くじ》 ＿ 五時《ごじ》 まで です。', a: 'から', opts: ['まで', 'に', 'から', 'を'], en: "Consultations are from nine to five.", why: "から marks the start and まで the end: 九時《くじ》 から 五時《ごじ》 まで." },
  { id: 'c-n5-023', lv: 'N5', l: 'time-dates', s: '今日《きょう》 は 四月《しがつ》 ＿ です。', a: '八日《ようか》', opts: ['八日《ようか》', '八時《はちじ》', '八月《はちがつ》', '八人《はちにん》'], en: "Today is April the eighth.", why: "The eighth of the month is 八日《ようか》, one of the special date readings to learn by heart; 八時《はちじ》 is eight o'clock." },
  { id: 'c-n5-024', lv: 'N5', l: 'time-dates', s: '昨日《きのう》 は ＿ 寝《ね》ました か。', a: '何時間《なんじかん》', opts: ['何曜日《なんようび》', '何時間《なんじかん》', '何月《なんがつ》', '何人《なんにん》'], en: "How many hours did you sleep last night?", why: "時間《じかん》 counts hours of length: 何時間《なんじかん》 asks how long, not what time." },

  /* counters */
  { id: 'c-n5-025', lv: 'N5', l: 'counters', s: 'ご家族《かぞく》 は ＿ です か。', a: '何人《なんにん》', opts: ['何本《なんぼん》', '何枚《なんまい》', '何人《なんにん》', '何回《なんかい》'], en: "How many people are there in your family?", why: "People are counted with 人《にん》: 何人《なんにん》." },
  { id: 'c-n5-026', lv: 'N5', l: 'counters', s: 'りんご を ＿ ください。', a: '三《みっ》つ', opts: ['三人《さんにん》', '三枚《さんまい》', '三日《みっか》', '三《みっ》つ'], en: "Three apples, please.", why: "Round everyday things are counted with the native series ひとつ, ふたつ, みっつ." },
  { id: 'c-n5-027', lv: 'N5', l: 'counters', s: '一日《いちにち》 に ＿ トイレ に 行《い》きます か。', a: '何回《なんかい》', opts: ['何回《なんかい》', '何人《なんにん》', '何本《なんぼん》', '何枚《なんまい》'], en: "How many times a day do you go to the toilet?", why: "回《かい》 counts times; it is the counter for how often something happens." },
  { id: 'c-n5-028', lv: 'N5', l: 'counters', s: '子供《こども》 が ＿ います。', a: '二人《ふたり》', opts: ['二《ふた》つ', '二人《ふたり》', '二枚《にまい》', '二本《にほん》'], en: "I have two children.", why: "Two people is 二人《ふたり》; the number with its counter goes before the verb." },

  /* verbs-masu */
  { id: 'c-n5-029', lv: 'N5', l: 'verbs-masu', s: '昨日《きのう》 は 病院《びょういん》 へ ＿。', a: '行《い》きました', opts: ['行《い》きます', '行《い》きました', '行《い》きません', '行《い》きましょう'], en: "I went to the hospital yesterday.", why: "昨日《きのう》 is past, so the verb takes ました." },
  { id: 'c-n5-030', lv: 'N5', l: 'verbs-masu', s: '私《わたし》 は お酒《さけ》 を ＿。', a: '飲《の》みません', opts: ['飲《の》みました', '飲《の》みます', '飲《の》みません でした', '飲《の》みません'], en: "I don't drink alcohol.", why: "ません is the present negative and covers habits; ません でした would be only about the past." },
  { id: 'c-n5-031', lv: 'N5', l: 'verbs-masu', s: '明日《あした》 また ＿。', a: '来《き》ます', opts: ['来《き》ました', '来《き》ません でした', '来《き》ます', '来《き》ましょう か'], en: "I will come again tomorrow.", why: "Japanese has no future tense: ます covers what you will do, with a time word like 明日《あした》." },
  { id: 'c-n5-032', lv: 'N5', l: 'verbs-masu', s: '昨日《きのう》 は 薬《くすり》 を ＿。', a: '飲《の》みません でした', opts: ['飲《の》みません', '飲《の》みません でした', '飲《の》みます', '飲《の》みましょう'], en: "I did not take my medicine yesterday.", why: "The past negative is ません でした; plain ません is not past." },

  /* particles-core */
  { id: 'c-n5-033', lv: 'N5', l: 'particles-core', s: '毎朝《まいあさ》 コーヒー ＿ 飲《の》みます。', a: 'を', opts: ['に', 'で', 'を', 'へ'], en: "I drink coffee every morning.", why: "を marks the thing the action is done to, here what you drink." },
  { id: 'c-n5-034', lv: 'N5', l: 'particles-core', s: '図書館《としょかん》 ＿ 勉強《べんきょう》します。', a: 'で', opts: ['で', 'に', 'を', 'へ'], en: "I study at the library.", why: "The place where an action happens takes で; に is for where something is or goes." },
  { id: 'c-n5-035', lv: 'N5', l: 'particles-core', s: '駅《えき》 ＿ 病院《びょういん》 まで 歩《ある》きます。', a: 'から', opts: ['を', 'に', 'と', 'から'], en: "I walk from the station to the hospital.", why: "から marks the starting point and pairs with まで for the end point." },
  { id: 'c-n5-036', lv: 'N5', l: 'particles-core', s: '友達《ともだち》 ＿ 映画《えいが》 を 見《み》ました。', a: 'と', opts: ['を', 'と', 'へ', 'から'], en: "I watched a film with a friend.", why: "と after a person means \"together with\"." },

  /* wa-vs-ga */
  { id: 'c-n5-037', lv: 'N5', l: 'wa-vs-ga', s: '誰《だれ》 ＿ 来《き》ました か。', a: 'が', opts: ['は', 'が', 'を', 'で'], en: "Who came?", why: "A question word as subject always takes が, never は." },
  { id: 'c-n5-038', lv: 'N5', l: 'wa-vs-ga', s: '頭《あたま》 ＿ 痛《いた》い です。', a: 'が', opts: ['を', 'に', 'で', 'が'], en: "I have a headache.", why: "The part that hurts is the subject of 痛《いた》い and takes が." },
  { id: 'c-n5-039', lv: 'N5', l: 'wa-vs-ga', s: '肉《にく》 は 食《た》べます が、 魚《さかな》 ＿ 食《た》べません。', a: 'は', opts: ['が', 'は', 'に', 'で'], en: "I eat meat, but fish I don't eat.", why: "は marks the contrast with 肉《にく》 は; が would make the fish the one doing the eating." },
  { id: 'c-n5-040', lv: 'N5', l: 'wa-vs-ga', s: '私《わたし》 ＿ フィリピン人《じん》 です。', a: 'は', opts: ['を', 'に', 'は', 'で'], en: "I am Filipino.", why: "は marks the topic you are talking about: 私《わたし》 は ..." },

  /* arimasu-imasu */
  { id: 'c-n5-041', lv: 'N5', l: 'arimasu-imasu', s: '机《つくえ》 の 上《うえ》 に 本《ほん》 が ＿。', a: 'あります', opts: ['います', 'します', 'あります', 'です'], en: "There is a book on the desk.", why: "Things that do not move by themselves take あります." },
  { id: 'c-n5-042', lv: 'N5', l: 'arimasu-imasu', s: '待合室《まちあいしつ》 に 患者《かんじゃ》さん が 三人《さんにん》 ＿。', a: 'います', opts: ['います', 'あります', 'です', 'します'], en: "There are three patients in the waiting room.", why: "People and animals take います." },
  { id: 'c-n5-043', lv: 'N5', l: 'arimasu-imasu', s: '熱《ねつ》 は ＿ か。', a: 'あります', opts: ['います', 'です', 'あります', 'します'], en: "Do you have a fever?", why: "Having a symptom such as a fever is said with あります." },
  { id: 'c-n5-044', lv: 'N5', l: 'arimasu-imasu', s: 'トイレ は 受付《うけつけ》 の 隣《となり》 ＿ あります。', a: 'に', opts: ['で', 'へ', 'に', 'を'], en: "The toilet is next to the reception desk.", why: "The place where something is takes に before あります; で is for where an action happens." },

  /* invitations */
  { id: 'c-n5-045', lv: 'N5', l: 'invitations', s: '一緒《いっしょ》 に 昼《ひる》ご飯《はん》 を ＿ か。', a: '食《た》べません', opts: ['食《た》べません', '食《た》べません でした', '食《た》べて', '食《た》べました'], en: "Would you like to have lunch with me?", why: "〜ません か is a polite invitation; the past forms ask what already happened." },
  { id: 'c-n5-046', lv: 'N5', l: 'invitations', s: 'では、 ＿。', a: '始《はじ》めましょう', opts: ['始《はじ》めました', '始《はじ》めましょう', '始《はじ》めません でした', '始《はじ》めて'], en: "Well then, let's begin.", why: "〜ましょう is \"let's\"; it suits starting an interview together." },
  { id: 'c-n5-047', lv: 'N5', l: 'invitations', s: '荷物《にもつ》 を ＿ か。', a: '持《も》ちましょう', opts: ['持《も》ちません でした', '持《も》って', '持《も》ちました', '持《も》ちましょう'], en: "Shall I carry your bag?", why: "〜ましょう か offers to do something for the other person." },
  { id: 'c-n5-048', lv: 'N5', l: 'invitations', s: '「土曜日《どようび》 に 映画《えいが》 を 見《み》ません か。」「すみません、 土曜日《どようび》 は ＿。」', a: 'ちょっと', opts: ['とても', 'ちょっと', 'よく', 'もう'], en: "Would you like to see a film on Saturday? — Sorry, Saturday is a bit (difficult)...", why: "ちょっと left unfinished is the usual soft way to say no to an invitation." },

  /* i-adjectives */
  { id: 'c-n5-049', lv: 'N5', l: 'i-adjectives', s: '昨日《きのう》 は とても ＿ です。', a: '寒《さむ》かった', opts: ['寒《さむ》い', '寒《さむ》く', '寒《さむ》かった', '寒《さむ》いでした'], en: "It was very cold yesterday.", why: "An い-adjective makes its own past: い becomes かった, and です stays as it is." },
  { id: 'c-n5-050', lv: 'N5', l: 'i-adjectives', s: '今日《きょう》 は 頭《あたま》 が あまり ＿ です。', a: '痛《いた》くない', opts: ['痛《いた》くない', '痛《いた》い', '痛《いた》かった', '痛《いた》く'], en: "Today my head doesn't hurt much.", why: "あまり needs a negative, and an い-adjective turns い into くない." },
  { id: 'c-n5-051', lv: 'N5', l: 'i-adjectives', s: '＿ 水《みず》 を ください。', a: '冷《つめ》たい', opts: ['冷《つめ》たく', '冷《つめ》たな', '冷《つめ》たいの', '冷《つめ》たい'], en: "Cold water, please.", why: "An い-adjective goes straight before a noun with its い: 冷《つめ》たい 水《みず》." },
  { id: 'c-n5-052', lv: 'N5', l: 'i-adjectives', s: '昨日《きのう》 の テスト は ＿ です。', a: '難《むずか》しくなかった', opts: ['難《むずか》しかった', '難《むずか》しく', '難《むずか》しくなかった', '難《むずか》しいかった'], en: "Yesterday's test was not difficult.", why: "The past negative of an い-adjective is くなかった; 難《むずか》しかった says it was difficult." },

  /* na-adjectives */
  { id: 'c-n5-053', lv: 'N5', l: 'na-adjectives', s: '静《しず》か ＿ 部屋《へや》 が いい です。', a: 'な', opts: ['の', 'な', 'に', 'で'], en: "A quiet room would be good.", why: "A な-adjective needs な before a noun: 静《しず》か な 部屋《へや》." },
  { id: 'c-n5-054', lv: 'N5', l: 'na-adjectives', s: '最近《さいきん》 あまり 元気《げんき》 ＿ ありません。', a: 'では', opts: ['な', 'に', 'では', 'を'], en: "Lately I haven't been very well.", why: "The negative of a な-adjective is では ありません, just like a noun." },
  { id: 'c-n5-055', lv: 'N5', l: 'na-adjectives', s: '昨日《きのう》 は 暇《ひま》 ＿。', a: 'でした', opts: ['でした', 'です', 'かった', 'ました'], en: "I was free yesterday.", why: "A な-adjective makes its past with でした; かった belongs to い-adjectives." },
  { id: 'c-n5-056', lv: 'N5', l: 'na-adjectives', s: '家族《かぞく》 は とても ＿ です。', a: '大切《たいせつ》', opts: ['大切《たいせつ》な', '大切《たいせつ》く', '大切《たいせつ》', '大切《たいせつ》に'], en: "My family is very important to me.", why: "At the end of a sentence a な-adjective takes です directly, without な." },

  /* suki-jouzu */
  { id: 'c-n5-057', lv: 'N5', l: 'suki-jouzu', s: '私《わたし》 は 犬《いぬ》 ＿ 好《す》き です。', a: 'が', opts: ['で', 'に', 'が', 'へ'], en: "I like dogs.", why: "What you like is marked with が: 〜が 好《す》き です." },
  { id: 'c-n5-058', lv: 'N5', l: 'suki-jouzu', s: '嫌《きら》い ＿ 食《た》べ物《もの》 は あります か。', a: 'な', opts: ['な', 'の', 'い', 'が'], en: "Is there any food you dislike?", why: "嫌《きら》い ends in い but is a な-adjective, so it takes な before a noun." },
  { id: 'c-n5-059', lv: 'N5', l: 'suki-jouzu', s: '田中《たなか》さん は 料理《りょうり》 ＿ 上手《じょうず》 です。', a: 'が', opts: ['を', 'が', 'で', 'へ'], en: "Mr. Tanaka is good at cooking.", why: "The skill takes が with 上手《じょうず》 and 下手《へた》." },
  { id: 'c-n5-060', lv: 'N5', l: 'suki-jouzu', s: '今《いま》 の 説明《せつめい》 ＿ わかりました か。', a: 'が', opts: ['に', 'を', 'へ', 'が'], en: "Did you understand the explanation just now?", why: "わかる takes が for what is understood, not を." },

  /* frequency-degree */
  { id: 'c-n5-061', lv: 'N5', l: 'frequency-degree', s: 'タバコ は ＿ 吸《す》いません。', a: '全然《ぜんぜん》', opts: ['よく', '全然《ぜんぜん》', '時々《ときどき》', 'とても'], en: "I don't smoke at all.", why: "全然《ぜんぜん》 + negative means \"not at all\"; よく, 時々《ときどき》 and とても do not give that meaning." },
  { id: 'c-n5-062', lv: 'N5', l: 'frequency-degree', s: '夜《よる》、 ＿ 目《め》 が 覚《さ》めます か。', a: 'よく', opts: ['あまり', '全然《ぜんぜん》', 'よく', '少《すこ》し'], en: "Do you often wake up at night?", why: "よく with a positive verb means \"often\"; あまり and 全然《ぜんぜん》 need a negative." },
  { id: 'c-n5-063', lv: 'N5', l: 'frequency-degree', s: 'コーヒー は ＿ 好《す》き では ありません。', a: 'あまり', opts: ['とても', 'よく', '時々《ときどき》', 'あまり'], en: "I don't like coffee very much.", why: "あまり + negative means \"not very\"; とても goes with positive sentences." },
  { id: 'c-n5-064', lv: 'N5', l: 'frequency-degree', s: '「お酒《さけ》 は ＿ 飲《の》みます か。」「週《しゅう》 に 二回《にかい》 ぐらい です。」', a: 'どの くらい', opts: ['どの くらい', 'どれ', 'どう', 'どこ'], en: "How often do you drink alcohol? — About twice a week.", why: "どの くらい asks how often or how much, which fits an answer like 週《しゅう》 に 二回《にかい》." },

  /* dake-shika */
  { id: 'c-n5-065', lv: 'N5', l: 'dake-shika', s: '朝《あさ》 は コーヒー ＿ 飲《の》みました。', a: 'だけ', opts: ['しか', 'ごろ', 'だけ', 'に'], en: "In the morning I only drank coffee.", why: "だけ \"only\" works with a positive verb; しか needs a negative verb." },
  { id: 'c-n5-066', lv: 'N5', l: 'dake-shika', s: '昨日《きのう》 の 夜《よる》 は 三時間《さんじかん》 ＿ 寝《ね》ません でした。', a: 'しか', opts: ['だけ', 'しか', 'ごろ', 'に'], en: "Last night I slept only three hours.", why: "しか + negative means \"nothing but, only\"; だけ with a negative would not mean \"only\" here." },
  { id: 'c-n5-067', lv: 'N5', l: 'dake-shika', s: '毎日《まいにち》 一時間《いちじかん》 ＿ 歩《ある》きます。', a: 'ぐらい', opts: ['ごろ', 'しか', 'だけ', 'ぐらい'], en: "I walk for about an hour every day.", why: "ぐらい gives an approximate amount or length; ごろ is for a point in time, しか needs a negative and だけ means \"only\"." },
  { id: 'c-n5-068', lv: 'N5', l: 'dake-shika', s: '毎晩《まいばん》 何時《なんじ》 ＿ 寝《ね》ます か。', a: 'ごろ', opts: ['ごろ', 'だけ', 'しか', 'を'], en: "At around what time do you go to bed each night?", why: "ごろ follows a clock time to mean \"around\"." },

  /* indefinites */
  { id: 'c-n5-069', lv: 'N5', l: 'indefinites', s: '今朝《けさ》 は 何《なに》 ＿ 食《た》べました か。', a: 'か', opts: ['も', 'か', 'が', 'で'], en: "Did you eat anything this morning?", why: "何《なに》 か means \"something, anything\"; 何《なに》 も needs a negative verb." },
  { id: 'c-n5-070', lv: 'N5', l: 'indefinites', s: '昨日《きのう》 は 何《なに》 ＿ 食《た》べません でした。', a: 'も', opts: ['か', 'が', 'を', 'も'], en: "I ate nothing yesterday.", why: "Question word + も with a negative verb means \"nothing, nobody, nowhere\"." },
  { id: 'c-n5-071', lv: 'N5', l: 'indefinites', s: 'お家《うち》 に 誰《だれ》 ＿ います か。', a: 'か', opts: ['も', 'か', 'を', 'で'], en: "Is there anyone at home?", why: "誰《だれ》 か means \"someone, anyone\" in a question; 誰《だれ》 も goes with a negative." },
  { id: 'c-n5-072', lv: 'N5', l: 'indefinites', s: '日曜日《にちようび》 は ＿ に も 行《い》きません でした。', a: 'どこ', opts: ['何《なに》', 'どれ', 'いつ', 'どこ'], en: "I didn't go anywhere on Sunday.", why: "どこ に も with a negative verb means \"nowhere\"; the particle に stays between どこ and も." },

  /* mada-mou */
  { id: 'c-n5-073', lv: 'N5', l: 'mada-mou', s: '「お昼《ひる》 は もう 食《た》べました か。」「はい、 ＿ 食《た》べました。」', a: 'もう', opts: ['まだ', 'もう', '全然《ぜんぜん》', 'あまり'], en: "Have you had lunch yet? — Yes, I've already eaten.", why: "もう + ました means \"already\"." },
  { id: 'c-n5-074', lv: 'N5', l: 'mada-mou', s: '「お薬《くすり》 は もう 飲《の》みました か。」「いいえ、 ＿ です。」', a: 'まだ', opts: ['もう', 'いつも', 'まだ', 'よく'], en: "Have you taken your medicine yet? — No, not yet.", why: "The short answer \"not yet\" is まだ です." },
  { id: 'c-n5-075', lv: 'N5', l: 'mada-mou', s: '熱《ねつ》 は ＿ あります か。', a: 'まだ', opts: ['まだ', 'もう', '全然《ぜんぜん》', 'あまり'], en: "Do you still have a fever?", why: "まだ with a positive verb means \"still\"." },
  { id: 'c-n5-076', lv: 'N5', l: 'mada-mou', s: '頭《あたま》 は ＿ 痛《いた》くない です。', a: 'もう', opts: ['まだ', 'よく', 'とても', 'もう'], en: "My head doesn't hurt any more.", why: "もう with a negative means \"no longer\"; まだ with a negative means \"not yet\"." },

  /* verb-groups */
  { id: 'c-n5-077', lv: 'N5', l: 'verb-groups', s: 'お薬《くすり》 を ＿ 前《まえ》 に、 何《なに》 か 食《た》べて ください。', a: '飲《の》む', opts: ['飲《の》みる', '飲《の》む', '飲《の》みます', '飲《の》んで'], en: "Please eat something before you take your medicine.", why: "〜前《まえ》 に needs the dictionary form, and 飲《の》む is an う-verb: the み of 飲《の》みます becomes む." },
  { id: 'c-n5-078', lv: 'N5', l: 'verb-groups', s: '晩《ばん》ご飯《はん》 を ＿ 前《まえ》 に、 手《て》 を 洗《あら》います。', a: '食《た》べる', opts: ['食《た》ぶ', '食《た》べます', '食《た》べる', '食《た》べむ'], en: "I wash my hands before I eat dinner.", why: "〜前《まえ》 に needs the dictionary form, and 食《た》べる is a る-verb: drop ます from 食《た》べます and add る." },
  { id: 'c-n5-079', lv: 'N5', l: 'verb-groups', s: '仕事《しごと》 を ＿ 前《まえ》 に、 コーヒー を 飲《の》みます。', a: 'する', opts: ['しる', 'します', 'す', 'する'], en: "I have a coffee before I start work.", why: "する is irregular and must be memorised: its ます form します goes back to する, the form 〜前《まえ》 に needs." },
  { id: 'c-n5-080', lv: 'N5', l: 'verb-groups', s: '今日《きょう》 は 早《はや》く お風呂《ふろ》 に ＿。', a: '入《はい》ります', opts: ['入《はい》ます', '入《はい》るます', '入《はい》ります', '入《はい》みます'], en: "Today I'll take a bath early.", why: "入《はい》る looks like a る-verb but is an う-verb, so its ます form keeps り: 入《はい》ります, not 入《はい》ます." },

  /* te-form */
  { id: 'c-n5-081', lv: 'N5', l: 'te-form', s: '薬《くすり》 を ＿ 寝《ね》ました。', a: '飲《の》んで', opts: ['飲《の》みて', '飲《の》んで', '飲《の》って', '飲《の》いて'], en: "I took my medicine and went to bed.", why: "Verbs ending in む make their て-form with んで: 飲《の》む → 飲《の》んで." },
  { id: 'c-n5-082', lv: 'N5', l: 'te-form', s: 'ここ に 名前《なまえ》 を ＿ ください。', a: '書《か》いて', opts: ['書《か》って', '書《か》きて', '書《か》んで', '書《か》いて'], en: "Please write your name here.", why: "Verbs ending in く make いて: 書《か》く → 書《か》いて." },
  { id: 'c-n5-083', lv: 'N5', l: 'te-form', s: '昨日《きのう》 は 公園《こうえん》 に ＿、 散歩《さんぽ》しました。', a: '行《い》って', opts: ['行《い》いて', '行《い》って', '行《い》きて', '行《い》んで'], en: "Yesterday I went to the park and took a walk.", why: "行《い》く is the one exception among く-verbs: its て-form is 行《い》って." },
  { id: 'c-n5-084', lv: 'N5', l: 'te-form', s: '毎朝《まいあさ》 六時《ろくじ》 に ＿、 顔《かお》 を 洗《あら》います。', a: '起《お》きて', opts: ['起《お》いて', '起《お》きって', '起《お》って', '起《お》きて'], en: "Every morning I get up at six and wash my face.", why: "A る-verb simply drops る and adds て: 起《お》きる → 起《お》きて." },

  /* te-kudasai */
  { id: 'c-n5-085', lv: 'N5', l: 'te-kudasai', s: '口《くち》 を 大《おお》きく ＿ ください。', a: '開《あ》けて', opts: ['開《あ》けます', '開《あ》けて', '開《あ》ける', '開《あ》けた'], en: "Please open your mouth wide.", why: "A request is the て-form + ください." },
  { id: 'c-n5-086', lv: 'N5', l: 'te-kudasai', s: 'ここ で タバコ を ＿ ください。', a: '吸《す》わないで', opts: ['吸《す》わなくて', '吸《す》いないで', '吸《す》わないで', '吸《す》って ないで'], en: "Please don't smoke here.", why: "\"Please don't\" is the ない-form + で ください: 吸《す》わないで ください." },
  { id: 'c-n5-087', lv: 'N5', l: 'te-kudasai', s: '窓《まど》 を 開《あ》けて ＿ いい です か。', a: 'も', opts: ['は', 'も', 'を', 'が'], en: "May I open the window?", why: "Asking permission is 〜て も いい です か; 〜て は goes with いけません." },
  { id: 'c-n5-088', lv: 'N5', l: 'te-kudasai', s: 'ご住所《じゅうしょ》 を 教《おし》えて ＿ か。', a: 'いただけます', opts: ['ください', 'いただけます', 'いただきます', 'あげます'], en: "Could you tell me your address, please?", why: "〜て いただけます か is a softer, more respectful request than 〜て ください." },

  /* te-imasu */
  { id: 'c-n5-089', lv: 'N5', l: 'te-imasu', s: '今《いま》、 外《そと》 は 雨《あめ》 が ＿ います。', a: '降《ふ》って', opts: ['降《ふ》り', '降《ふ》る', '降《ふ》った', '降《ふ》って'], en: "It is raining outside now.", why: "An action in progress is the て-form + います." },
  { id: 'c-n5-090', lv: 'N5', l: 'te-imasu', s: '姉《あね》 は ＿ います。', a: '結婚《けっこん》して', opts: ['結婚《けっこん》して', '結婚《けっこん》する', '結婚《けっこん》した', '結婚《けっこん》します'], en: "My older sister is married.", why: "A state that continues after a change is 〜て います: 結婚《けっこん》して います is \"is married\"." },
  { id: 'c-n5-091', lv: 'N5', l: 'te-imasu', s: '毎朝《まいあさ》 お薬《くすり》 を ＿ います か。', a: '飲《の》んで', opts: ['飲《の》み', '飲《の》んで', '飲《の》む', '飲《の》みて'], en: "Do you take your medicine every morning?", why: "A habit is also 〜て います, built on the て-form 飲《の》んで." },
  { id: 'c-n5-092', lv: 'N5', l: 'te-imasu', s: '「駅《えき》 の 場所《ばしょ》 を 知《し》って います か。」「いいえ、 ＿。」', a: '知《し》りません', opts: ['知《し》って いません', '知《し》りました', '知《し》りません', '知《し》って います'], en: "Do you know where the station is? — No, I don't.", why: "The answer \"I don't know\" is 知《し》りません, not 知《し》って いません." },

  /* linking */
  { id: 'c-n5-093', lv: 'N5', l: 'linking', s: 'この 部屋《へや》 は ＿ 明《あか》るい です。', a: '広《ひろ》くて', opts: ['広《ひろ》いで', '広《ひろ》くで', '広《ひろ》い', '広《ひろ》くて'], en: "This room is spacious and bright.", why: "An い-adjective links to the next word with くて." },
  { id: 'c-n5-094', lv: 'N5', l: 'linking', s: 'ここ の 看護師《かんごし》さん は 親切《しんせつ》 ＿ 優《やさ》しい です。', a: 'で', opts: ['な', 'で', 'に', 'と'], en: "The nurses here are kind and gentle.", why: "A な-adjective or a noun links to the next word with で." },
  { id: 'c-n5-095', lv: 'N5', l: 'linking', s: '手《て》 を 洗《あら》って ＿ 食《た》べて ください。', a: 'から', opts: ['から', 'まで', '前《まえ》', '後《あと》'], en: "Please wash your hands before you eat.", why: "〜て から means \"after doing\": first wash, then eat." },
  { id: 'c-n5-096', lv: 'N5', l: 'linking', s: '寝《ね》る ＿ に 歯《は》 を 磨《みが》きます。', a: '前《まえ》', opts: ['後《あと》', 'から', '前《まえ》', 'で'], en: "I brush my teeth before I go to bed.", why: "The dictionary form + 前《まえ》 に means \"before doing\"; 後《あと》 needs the past form." },

  /* ni-iku */
  { id: 'c-n5-097', lv: 'N5', l: 'ni-iku', s: '明日《あした》 は 病院《びょういん》 へ ＿ に 行《い》きます。', a: '検査《けんさ》', opts: ['検査《けんさ》する', '検査《けんさ》して', '検査《けんさ》', '検査《けんさ》した'], en: "Tomorrow I'm going to the hospital for a test.", why: "With a する-noun the purpose can be the noun itself + に 行《い》く: 検査《けんさ》 に 行《い》きます; the dictionary, て and past forms cannot go before に." },
  { id: 'c-n5-098', lv: 'N5', l: 'ni-iku', s: '昼《ひる》 に 食堂《しょくどう》 へ ご飯《はん》 を ＿ に 行《い》きました。', a: '食《た》べ', opts: ['食《た》べる', '食《た》べ', '食《た》べて', '食《た》べた'], en: "At noon I went to the cafeteria to eat.", why: "The purpose takes the ます-stem before に, never the dictionary form." },
  { id: 'c-n5-099', lv: 'N5', l: 'ni-iku', s: '明日《あした》、 検査《けんさ》 の 結果《けっか》 を ＿ に 来《き》て ください。', a: '聞《き》き', opts: ['聞《き》く', '聞《き》いて', '聞《き》か', '聞《き》き'], en: "Please come tomorrow to hear the test results.", why: "ます-stem + に 来《く》る means \"come to do\": 聞《き》き に 来《き》て ください." },
  { id: 'c-n5-100', lv: 'N5', l: 'ni-iku', s: '家《いえ》 に 忘《わす》れ物《もの》 を 取《と》り ＿ 帰《かえ》りました。', a: 'に', opts: ['て', 'を', 'に', 'で'], en: "I went home to get something I had left behind.", why: "The ます-stem + に + 帰《かえ》る means \"go home to do\"." },

  /* prohibition */
  { id: 'c-n5-101', lv: 'N5', l: 'prohibition', s: 'ここ で 写真《しゃしん》 を 撮《と》って ＿ いけません。', a: 'は', opts: ['を', 'は', 'が', 'に'], en: "You must not take photos here.", why: "A rule \"must not\" is the て-form + は いけません." },
  { id: 'c-n5-102', lv: 'N5', l: 'prohibition', s: '病棟《びょうとう》 で タバコ を ＿ は いけません。', a: '吸《す》って', opts: ['吸《す》う', '吸《す》わない', '吸《す》い', '吸《す》って'], en: "You must not smoke on the ward.", why: "は いけません follows the て-form of the verb: 吸《す》って は いけません." },
  { id: 'c-n5-103', lv: 'N5', l: 'prohibition', s: '今日《きょう》 は お風呂《ふろ》 に ＿ ください。', a: '入《はい》らないで', opts: ['入《はい》らないで', '入《はい》らなくて', '入《はい》って は', '入《はい》りないで'], en: "Please don't take a bath today.", why: "With a patient the gentler 〜ないで ください is better than 〜て は いけません." },
  { id: 'c-n5-104', lv: 'N5', l: 'prohibition', s: '「水《みず》 を 飲《の》んで も いい です か。」「はい、 飲《の》んで も ＿ です よ。」', a: 'いい', opts: ['いけ', 'だめ', 'いい', 'ください'], en: "May I drink water? — Yes, you may.", why: "Saying yes to a permission question repeats 〜て も いい です; だめ would be a no." },

  /* adverbs-ku-ni */
  { id: 'c-n5-105', lv: 'N5', l: 'adverbs-ku-ni', s: '明日《あした》 は ＿ 起《お》きて ください。', a: '早《はや》く', opts: ['早《はや》い', '早《はや》く', '早《はや》に', '早《はや》くて'], en: "Please get up early tomorrow.", why: "Before a verb an い-adjective changes い to く: 早《はや》く 起《お》きる." },
  { id: 'c-n5-106', lv: 'N5', l: 'adverbs-ku-ni', s: '図書館《としょかん》 で は 静《しず》か ＿ 話《はな》して ください。', a: 'に', opts: ['く', 'な', 'に', 'で'], en: "Please speak quietly in the library.", why: "A な-adjective takes に before a verb: 静《しず》か に 話《はな》す, never 静《しず》かく." },
  { id: 'c-n5-107', lv: 'N5', l: 'adverbs-ku-ni', s: '寒《さむ》い です から、 部屋《へや》 を ＿ しましょう か。', a: '暖《あたた》かく', opts: ['暖《あたた》かく', '暖《あたた》かい', '暖《あたた》かいに', '暖《あたた》かくて'], en: "It's cold, so shall I make the room warmer?", why: "〜く する means \"make it (that way)\": 暖《あたた》かく する." },
  { id: 'c-n5-108', lv: 'N5', l: 'adverbs-ku-ni', s: 'これ から は お体《からだ》 を 大切《たいせつ》 ＿ して ください。', a: 'に', opts: ['く', 'な', 'を', 'に'], en: "From now on, please take good care of yourself.", why: "With a な-adjective, \"make it so\" is 〜に する: 大切《たいせつ》 に する." },

  /* conjunctions */
  { id: 'c-n5-109', lv: 'N5', l: 'conjunctions', s: '朝《あさ》ご飯《はん》 を 食《た》べました。 ＿、 薬《くすり》 を 飲《の》みました。', a: 'それから', opts: ['でも', 'それから', 'しかし', 'どうして'], en: "I ate breakfast. After that, I took my medicine.", why: "それから adds the next event in time order, \"and then\"." },
  { id: 'c-n5-110', lv: 'N5', l: 'conjunctions', s: '薬《くすり》 を 飲《の》みました。 ＿、 まだ 頭《あたま》 が 痛《いた》い です。', a: 'でも', opts: ['そして', 'だから', 'それから', 'でも'], en: "I took some medicine. But my head still hurts.", why: "でも starts a sentence that goes against what you expect from the one before." },
  { id: 'c-n5-111', lv: 'N5', l: 'conjunctions', s: '昨日《きのう》 の 夜《よる》 は 寝《ね》ません でした。 ＿、 今日《きょう》 は とても 眠《ねむ》い です。', a: 'だから', opts: ['だから', 'でも', 'しかし', 'けど'], en: "I didn't sleep last night. So today I'm very sleepy.", why: "だから introduces a result of the sentence before, \"so\"." },
  { id: 'c-n5-112', lv: 'N5', l: 'conjunctions', s: '日本語《にほんご》 は 難《むずか》しい です ＿、 面白《おもしろ》い です。', a: 'が', opts: ['で', 'と', 'が', 'を'], en: "Japanese is difficult, but it is interesting.", why: "が after です joins two contrasting clauses, \"..., but ...\"." },

  /* ne-yo */
  { id: 'c-n5-113', lv: 'N5', l: 'ne-yo', s: '「今日《きょう》 は 暑《あつ》い です ＿。」 「そう です ね。」', a: 'ね', opts: ['よ', 'ね', 'を', 'が'], en: "It's hot today, isn't it? — It is.", why: "ね shares a feeling the listener also has; よ would tell them something new." },
  { id: 'c-n5-114', lv: 'N5', l: 'ne-yo', s: '「すみません、 受付《うけつけ》 は どこ です か。」「一階《いっかい》 です ＿。」', a: 'よ', opts: ['ね', 'か', 'よ', 'を'], en: "Excuse me, where is reception? — It's on the ground floor.", why: "よ tells the listener something they did not know; ね would assume they already knew." },
  { id: 'c-n5-115', lv: 'N5', l: 'ne-yo', s: '明日《あした》 の 検査《けんさ》 は 十時《じゅうじ》 から です ＿。', a: 'よね', opts: ['よ', 'ねよ', 'よね', 'を'], en: "Tomorrow's test is from ten, right?", why: "よね checks something you think you know; よ alone would simply tell it." },
  { id: 'c-n5-116', lv: 'N5', l: 'ne-yo', s: '「元気《げんき》 が ない ね。 どう した ＿？」', a: 'の', opts: ['よ', 'ね', 'を', 'の'], en: "You look down. What's wrong? (casual)", why: "In casual speech の with rising tone asks a question, as in どう した の？" },

  /* wanting */
  { id: 'c-n5-117', lv: 'N5', l: 'wanting', s: '今《いま》 は 誰《だれ》 と も ＿ です。', a: '話《はな》したくない', opts: ['話《はな》したくない', '話《はな》さないたい', '話《はな》しない', '話《はな》したい ない'], en: "Right now I don't want to talk to anyone.", why: "〜たい behaves like an い-adjective, so its negative is たくない: 話《はな》したくない." },
  { id: 'c-n5-118', lv: 'N5', l: 'wanting', s: '静《しず》か な 部屋《へや》 ＿ ほしい です。', a: 'が', opts: ['に', 'が', 'で', 'と'], en: "I want a quiet room.", why: "The thing you want to have is marked with が before ほしい." },
  { id: 'c-n5-119', lv: 'N5', l: 'wanting', s: '来週《らいしゅう》 から また 学校《がっこう》 に 行《い》く ＿ です。', a: 'つもり', opts: ['たい', 'ほしい', 'ましょう', 'つもり'], en: "I intend to go back to school from next week.", why: "The dictionary form + つもり です states a plan or intention." },
  { id: 'c-n5-120', lv: 'N5', l: 'wanting', s: '父《ちち》 は 早《はや》く ＿ います。', a: '退院《たいいん》したがって', opts: ['退院《たいいん》したい', '退院《たいいん》したがって', '退院《たいいん》したくて', '退院《たいいん》しました'], en: "My father wants to leave hospital soon.", why: "For someone else's wish use 〜たがって います, not 〜たい." },

  /* conversation-habits */
  { id: 'c-n5-121', lv: 'N5', l: 'conversation-habits', s: '「昨日《きのう》 から 熱《ねつ》 が あります。」「そう です ＿。」', a: 'か', opts: ['よ', 'を', 'か', 'が'], en: "I've had a fever since yesterday. — I see.", why: "そう です か with a falling tone is the listening signal \"I see\"; そう です よ would mean \"that's right\"." },
  { id: 'c-n5-122', lv: 'N5', l: 'conversation-habits', s: 'すみません、 ＿ 手伝《てつだ》って いただけます か。', a: 'ちょっと', opts: ['全然《ぜんぜん》', 'あまり', 'ちょっと', 'もう'], en: "Excuse me, could you help me for a moment?", why: "ちょっと softens a request; 全然《ぜんぜん》 and あまり need a negative." },
  { id: 'c-n5-123', lv: 'N5', l: 'conversation-habits', s: '明日《あした》 また 来《き》て も いい ＿ か。', a: 'でしょう', opts: ['でしょう', 'ます', 'ましょう', 'でした'], en: "Would it be all right if I came again tomorrow?", why: "〜でしょう か is a softer question than 〜です か." },
  { id: 'c-n5-124', lv: 'N5', l: 'conversation-habits', s: '説明《せつめい》 は 聞《き》きました ＿、 まだ 少《すこ》し 心配《しんぱい》 です。', a: 'けど', opts: ['と', 'を', 'に', 'けど'], en: "I heard the explanation, but I'm still a little worried.", why: "けど joins two contrasting clauses and keeps the tone soft." }
]);
