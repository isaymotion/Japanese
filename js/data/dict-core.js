/* Dictionary part 1: core words. DRAFT FOR REVIEW by a native Japanese speaker.
   Format per line: japanese | english | part of speech | category | level | note (optional) */
window.DICT_RAW = window.DICT_RAW || [];
window.DICT_RAW.push(`
# basics
こんにちは | hello, good afternoon | interj | basics | N5 | Used from late morning to early evening
おはよう ございます | good morning (polite) | phr | basics | N5 | Casual: おはよう
こんばんは | good evening | interj | basics | N5
おやすみ なさい | good night | phr | basics | N5 | Casual: おやすみ
さようなら | goodbye | interj | basics | N5 | Sounds fairly final; friends often say じゃあ、 また
じゃあ また | see you again | phr | basics | N5
ありがとう | thank you (casual) | interj | basics | N5
ありがとう ございます | thank you (polite) | phr | basics | N5
どうも ありがとう ございます | thank you very much | phr | basics | N5
どういたしまして | you are welcome | phr | basics | N5
すみません | excuse me; I am sorry; thank you (for the trouble) | phr | basics | N5 | The most useful all-purpose polite word
ごめんなさい | I am sorry | phr | basics | N5 | Personal apology
ごめん | sorry (casual) | interj | basics | N5
失礼《しつれい》します | excuse me (entering, leaving, interrupting) | phr | basics | N5
失礼《しつれい》しました | I apologize for the rudeness | phr | basics | N4
お願《ねが》いします | please (I request this) | phr | basics | N5 | 薬《くすり》 を お願《ねが》いします = The medicine, please
どうぞ | please (go ahead; here you are) | interj | basics | N5
どうぞ よろしく | pleased to meet you; please treat me kindly | phr | basics | N5
はじめまして | how do you do (first meeting) | phr | basics | N5
よろしく お願《ねが》いします | pleased to meet you; I count on you | phr | basics | N5 | Said at first meetings and when asking for cooperation
はい | yes | interj | basics | N5 | Also means I am listening
いいえ | no | interj | basics | N5
そうです | that is right | phr | basics | N5
そう ですか | I see; is that so | phr | basics | N5 | Falling tone: I see
わかりました | I understand | phr | basics | N5
わかりません | I do not understand | phr | basics | N5
お大事《だいじ》に | take care (to someone who is ill) | phr | basics | N4 | Said to patients when they leave
いただきます | thank you for the meal (before eating) | phr | basics | N5
ごちそうさま でした | thank you for the meal (after eating) | phr | basics | N5
いってきます | I am leaving (and will come back) | phr | basics | N5
いってらっしゃい | take care, see you later (to one leaving) | phr | basics | N5
ただいま | I am home | phr | basics | N5
おかえり なさい | welcome back | phr | basics | N5
おめでとう ございます | congratulations | phr | basics | N5
お久《ひさ》しぶり です | it has been a long time | phr | basics | N4
お元気《げんき》 です か | how are you | phr | basics | N5
お疲《つか》れ さま です | thank you for your hard work | phr | basics | N4 | Common greeting between colleagues
お先《さき》に 失礼《しつれい》します | excuse me for leaving before you | phr | basics | N4
もう 一度《いちど》 お願《ねが》いします | once more, please | phr | basics | N5
ゆっくり お願《ねが》いします | slowly, please | phr | basics | N5
少々《しょうしょう》 お待《ま》ち ください | please wait a moment | phr | basics | N4 | Polite, used by staff
ちょっと 待《ま》って ください | please wait a moment | phr | basics | N5
いらっしゃいませ | welcome (said by shop staff) | phr | basics | N5
お待《ま》たせ しました | sorry to keep you waiting | phr | basics | N4
気《き》 を つけて | take care | phr | basics | N4
頑張《がんば》って | do your best; hang in there | phr | basics | N4 | Use with care with someone who is depressed
お邪魔《じゃま》します | excuse me for intruding (entering a home) | phr | basics | N4
もしもし | hello (on the phone) | interj | basics | N5
# grammar
は | topic marker (wa) | part | grammar | N5 | 私《わたし》 は 医者《いしゃ》 です
が | subject marker | part | grammar | N5 | 誰《だれ》 が 来《き》ました か
を | object marker | part | grammar | N5 | Written を, pronounced o
に | at, to, in (time, place, goal) | part | grammar | N5 | 七時《しちじ》 に 起《お》きます
で | at, by, with (place of action, means) | part | grammar | N5 | 病院《びょういん》 で 働《はたら》きます
へ | toward, to (direction) | part | grammar | N5 | Written へ, pronounced e
と | and; with; quoting particle | part | grammar | N5
も | also, too; even | part | grammar | N5
の | of; possessive; explanatory ending | part | grammar | N5 | 私《わたし》 の 薬《くすり》
から | from; because | part | grammar | N5
まで | until, up to | part | grammar | N5
より | than; from | part | grammar | N5
や | and (a partial list) | part | grammar | N4
か | question marker; or | part | grammar | N5
ね | right? isn't it? (seeking agreement) | part | grammar | N5
よ | emphasis; I tell you | part | grammar | N5
だけ | only, just | part | grammar | N5
しか | nothing but, only (with a negative) | part | grammar | N4 | 一時間《いちじかん》 しか 眠《ねむ》れません
など | and so on; such as | part | grammar | N4
ぐらい | about, approximately | part | grammar | N5 | Also くらい; 三十分《さんじゅっぷん》 ぐらい
ばかり | only; just (done) | part | grammar | N4
ずつ | each; at a time | part | grammar | N4 | 一日《いちにち》 三回《さんかい》 一錠《いちじょう》 ずつ
です | is, am, are (polite copula) | phr | grammar | N5
だ | is (plain copula) | phr | grammar | N5
でした | was (polite) | phr | grammar | N5
だった | was (plain) | phr | grammar | N5
では ありません | is not (polite) | phr | grammar | N5
じゃ ありません | is not (polite, spoken) | phr | grammar | N5
じゃ ない | is not (plain, spoken) | phr | grammar | N5
そして | and then; and | conj | grammar | N5
でも | but; however | conj | grammar | N5
だから | so; therefore | conj | grammar | N5
それから | and then; after that | conj | grammar | N5
しかし | however | conj | grammar | N5 | More formal than でも
または | or | conj | grammar | N4
もし | if | conj | grammar | N4
ので | because; since | conj | grammar | N4 | Softer than から
けど | but (casual) | conj | grammar | N4
けれども | but; although | conj | grammar | N4
それで | and so; for that reason | conj | grammar | N4
それでは | well then; in that case | conj | grammar | N4
じゃあ | well then | conj | grammar | N5
では | well then (formal) | conj | grammar | N5
ところで | by the way | conj | grammar | N4
それに | besides; moreover | conj | grammar | N4
ですから | therefore (polite) | conj | grammar | N4
だけど | but (casual) | conj | grammar | N4
のに | although; even though | conj | grammar | N4
し | and what is more (listing reasons) | part | grammar | N4
これ | this (thing near me) | pron | grammar | N5
それ | that (thing near you) | pron | grammar | N5
あれ | that (thing over there) | pron | grammar | N5
この | this ... | pre | grammar | N5 | Always before a noun
その | that ... (near you) | pre | grammar | N5 | Always before a noun
あの | that ... (over there) | pre | grammar | N5 | Always before a noun
ここ | here | pron | grammar | N5
そこ | there (near you) | pron | grammar | N5
あそこ | over there | pron | grammar | N5
こちら | this way; this person (polite); here | pron | grammar | N5
そちら | that way; you (polite); there | pron | grammar | N5
あちら | that way; that person (polite) | pron | grammar | N5
こう | like this | adv | grammar | N4
そう | like that | adv | grammar | N5 | そう 思《おも》います = I think so
ああ | like that (over there) | adv | grammar | N4
こんな | this kind of | pre | grammar | N4
そんな | that kind of | pre | grammar | N4
あんな | that kind of (over there) | pre | grammar | N4
# pronouns
私《わたし》 | I, me | pron | pronouns | N5
僕《ぼく》 | I (used by men, casual) | pron | pronouns | N4
俺《おれ》 | I (rough, male, among friends) | pron | pronouns | N4 | Avoid in professional settings
あなた | you | pron | pronouns | N5 | Often avoided; use the person's name plus さん or their title
君《きみ》 | you (to someone younger or equal) | pron | pronouns | N4
彼《かれ》 | he; boyfriend | pron | pronouns | N5
彼女《かのじょ》 | she; girlfriend | pron | pronouns | N5
彼《かれ》ら | they | pron | pronouns | N4
私《わたし》たち | we, us | pron | pronouns | N5
あなたたち | you (plural) | pron | pronouns | N4
みなさん | everyone (polite) | pron | pronouns | N5
自分《じぶん》 | oneself; myself | pron | pronouns | N4
誰《だれ》か | someone | pron | pronouns | N5
何《なに》か | something | pron | pronouns | N5 | 何《なに》か 心配《しんぱい》 な こと は あります か
誰《だれ》も | no one; everyone | pron | pronouns | N5 | With a negative verb: no one
何《なに》も | nothing; anything | pron | pronouns | N5 | With a negative verb: nothing
〜さん | Mr., Ms. (polite title) | suf | pronouns | N5 | Use after a name; never for yourself
〜先生《せんせい》 | teacher, doctor (title) | suf | pronouns | N5 | Patients call doctors 田中《たなか》先生《せんせい》
〜様《さま》 | Mr., Ms. (very polite) | suf | pronouns | N4 | Used for patients in writing and at reception
〜ちゃん | dear (for children, close people) | suf | pronouns | N5
〜くん | Mr. (for boys, juniors) | suf | pronouns | N5
〜たち | plural marker for people | suf | pronouns | N5 | 友達《ともだち》 たち is not used; 子《こ》ども たち
# questions
何《なに》 | what | q | questions | N5 | Before の, で and particles
何《なん》 | what (before です, の, か, and counters) | q | questions | N5 | 何《なん》 です か
誰《だれ》 | who | q | questions | N5
どなた | who (polite) | q | questions | N5
どこ | where | q | questions | N5
いつ | when | q | questions | N5
どう | how | q | questions | N5 | どう です か = How is it?
いかが | how (polite) | q | questions | N4 | お加減《かげん》 は いかが です か
どうして | why | q | questions | N5
なぜ | why | q | questions | N5 | A little more formal than どうして
いくら | how much | q | questions | N5
いくつ | how many; how old | q | questions | N5
おいくつ | how old (polite) | q | questions | N4
どのくらい | how long; how much | q | questions | N5 | Also どのぐらい
どんな | what kind of | q | questions | N5
どれ | which (of three or more things) | q | questions | N5
どの | which ... | q | questions | N5
どちら | which (of two); where (polite) | q | questions | N5
何時《なんじ》 | what time | q | questions | N5
何人《なんにん》 | how many people | q | questions | N5
何回《なんかい》 | how many times | q | questions | N5
何歳《なんさい》 | how old | q | questions | N5
どうやって | how; by what means | q | questions | N4
何曜日《なんようび》 | what day of the week | q | questions | N5
何月《なんがつ》 | what month | q | questions | N5
何日《なんにち》 | what day of the month; how many days | q | questions | N5
# numbers
ゼロ | zero | num | numbers | N5
零《れい》 | zero | num | numbers | N5 | Used for phone numbers and scores
一《いち》 | one | num | numbers | N5
二《に》 | two | num | numbers | N5
三《さん》 | three | num | numbers | N5
四《よん》 | four | num | numbers | N5 | Preferred reading; counters often use よ
四《し》 | four (alternate reading) | num | numbers | N5 | Used in 四月《しがつ》; avoided since it sounds like 死《し》
五《ご》 | five | num | numbers | N5
六《ろく》 | six | num | numbers | N5
七《なな》 | seven | num | numbers | N5
七《しち》 | seven (alternate reading) | num | numbers | N5 | Used in 七時《しちじ》 and 七月《しちがつ》
八《はち》 | eight | num | numbers | N5
九《きゅう》 | nine | num | numbers | N5
九《く》 | nine (alternate reading) | num | numbers | N5 | Used in 九時《くじ》 and 九月《くがつ》
十《じゅう》 | ten | num | numbers | N5
十一《じゅういち》 | eleven | num | numbers | N5
十二《じゅうに》 | twelve | num | numbers | N5
二十《にじゅう》 | twenty | num | numbers | N5
三十《さんじゅう》 | thirty | num | numbers | N5
四十《よんじゅう》 | forty | num | numbers | N5
五十《ごじゅう》 | fifty | num | numbers | N5
六十《ろくじゅう》 | sixty | num | numbers | N5
七十《ななじゅう》 | seventy | num | numbers | N5
八十《はちじゅう》 | eighty | num | numbers | N5
九十《きゅうじゅう》 | ninety | num | numbers | N5
百《ひゃく》 | hundred | num | numbers | N5
三百《さんびゃく》 | three hundred | num | numbers | N5 | Sound change: びゃく
六百《ろっぴゃく》 | six hundred | num | numbers | N5 | Sound change: ろっぴゃく
八百《はっぴゃく》 | eight hundred | num | numbers | N5 | Sound change: はっぴゃく
千《せん》 | thousand | num | numbers | N5
三千《さんぜん》 | three thousand | num | numbers | N5 | Sound change: ぜん
八千《はっせん》 | eight thousand | num | numbers | N5 | Sound change: はっせん
一万《いちまん》 | ten thousand | num | numbers | N5 | Japanese counts in units of 万《まん》, not thousands
半分《はんぶん》 | half | n | numbers | N4
全部《ぜんぶ》 | all, everything | n | numbers | N5
一《ひと》つ | one (thing) | num | numbers | N5 | Native series for counting objects up to ten
二《ふた》つ | two (things) | num | numbers | N5
三《みっ》つ | three (things) | num | numbers | N5
四《よっ》つ | four (things) | num | numbers | N5
五《いつ》つ | five (things) | num | numbers | N5
六《むっ》つ | six (things) | num | numbers | N5
七《なな》つ | seven (things) | num | numbers | N5
八《やっ》つ | eight (things) | num | numbers | N5
九《ここの》つ | nine (things) | num | numbers | N5
十《とお》 | ten (things) | num | numbers | N5 | No つ
# counters
人《にん》 | counter for people | ctr | counters | N5 | Use with numbers from three: 三人《さんにん》
一人《ひとり》 | one person | ctr | counters | N5 | Irregular
二人《ふたり》 | two people | ctr | counters | N5 | Irregular
四人《よにん》 | four people | ctr | counters | N5 | Irregular: よ, not よん
回《かい》 | counter for times | ctr | counters | N5
一回《いっかい》 | once, one time | ctr | counters | N5 | 一日《いちにち》 に 一回《いっかい》 = once a day
本《ほん》 | counter for long thin things | ctr | counters | N5 | ほん, ぼん or ぽん depending on the number
一本《いっぽん》 | one long thing | ctr | counters | N5 | Sound change: いっぽん
三本《さんぼん》 | three long things | ctr | counters | N5 | Sound change: ぼん
枚《まい》 | counter for flat things | ctr | counters | N5
個《こ》 | counter for small objects | ctr | counters | N5
杯《はい》 | counter for cups and glasses | ctr | counters | N5
一杯《いっぱい》 | one cup, one glass | ctr | counters | N5 | Sound change: いっぱい
匹《ひき》 | counter for small animals | ctr | counters | N5
一匹《いっぴき》 | one small animal | ctr | counters | N5 | Sound change: いっぴき
台《だい》 | counter for machines and vehicles | ctr | counters | N5
冊《さつ》 | counter for books | ctr | counters | N5
一冊《いっさつ》 | one book | ctr | counters | N5
歳《さい》 | years of age | ctr | counters | N5 | 二十歳《はたち》 is irregular
時《じ》 | o'clock | ctr | counters | N5
四時《よじ》 | four o'clock | ctr | counters | N5 | Irregular: よじ
七時《しちじ》 | seven o'clock | ctr | counters | N5 | Irregular: しちじ
九時《くじ》 | nine o'clock | ctr | counters | N5 | Irregular: くじ
分《ふん》 | minutes | ctr | counters | N5 | ふん or ぷん depending on the number
一分《いっぷん》 | one minute | ctr | counters | N5 | Sound change: いっぷん
十分《じゅっぷん》 | ten minutes | ctr | counters | N5 | Sound change: じゅっぷん; 十分《じゅうぶん》 means enough
秒《びょう》 | seconds | ctr | counters | N4
日《にち》 | counter for days | ctr | counters | N5 | Many irregular readings; see the days of the month
一時間《いちじかん》 | one hour | ctr | counters | N5
週間《しゅうかん》 | counter for weeks | ctr | counters | N5
一週間《いっしゅうかん》 | one week | ctr | counters | N5 | Sound change: いっ
か月《げつ》 | counter for months | ctr | counters | N5 | Also written with a small katakana ケ
一《いっ》か月《げつ》 | one month | ctr | counters | N5 | Sound change: いっか
年《ねん》 | counter for years | ctr | counters | N5
円《えん》 | yen | ctr | counters | N5
階《かい》 | floor of a building | ctr | counters | N5
一階《いっかい》 | first floor | ctr | counters | N5
三階《さんがい》 | third floor | ctr | counters | N5 | Sound change: がい
番《ばん》 | number; counter for turns and ranks | ctr | counters | N5
度《ど》 | times; degrees | ctr | counters | N4
錠《じょう》 | counter for tablets | ctr | counters | N3 | 一日《いちにち》 に 三錠《さんじょう》
倍《ばい》 | times, fold (double) | ctr | counters | N4
〜目《め》 | ordinal suffix (-th) | suf | counters | N4 | 二日目《ふつかめ》 = the second day
月《がつ》 | counter for months of the year | ctr | counters | N5
# time
今日《きょう》 | today | n | time | N5
明日《あした》 | tomorrow | n | time | N5
昨日《きのう》 | yesterday | n | time | N5
明後日《あさって》 | the day after tomorrow | n | time | N5
一昨日《おととい》 | the day before yesterday | n | time | N5
今朝《けさ》 | this morning | n | time | N5
今晩《こんばん》 | this evening | n | time | N5
今夜《こんや》 | tonight | n | time | N5
朝《あさ》 | morning | n | time | N5
昼《ひる》 | noon; daytime | n | time | N5
夕方《ゆうがた》 | evening, late afternoon | n | time | N5
夜《よる》 | night | n | time | N5
午前《ごぜん》 | morning, a.m. | n | time | N5
午後《ごご》 | afternoon, p.m. | n | time | N5
昼間《ひるま》 | daytime | n | time | N4
夜中《よなか》 | middle of the night | n | time | N4 | 夜中《よなか》 に 目《め》 が 覚《さ》める = to wake in the night
毎日《まいにち》 | every day | n | time | N5
毎朝《まいあさ》 | every morning | n | time | N5
毎晩《まいばん》 | every night | n | time | N5
毎週《まいしゅう》 | every week | n | time | N5
毎月《まいつき》 | every month | n | time | N5
毎年《まいとし》 | every year | n | time | N5
月曜日《げつようび》 | Monday | n | time | N5
火曜日《かようび》 | Tuesday | n | time | N5
水曜日《すいようび》 | Wednesday | n | time | N5
木曜日《もくようび》 | Thursday | n | time | N5
金曜日《きんようび》 | Friday | n | time | N5
土曜日《どようび》 | Saturday | n | time | N5
日曜日《にちようび》 | Sunday | n | time | N5
一月《いちがつ》 | January | n | time | N5
二月《にがつ》 | February | n | time | N5
三月《さんがつ》 | March | n | time | N5
四月《しがつ》 | April | n | time | N5 | Irregular: し
五月《ごがつ》 | May | n | time | N5
六月《ろくがつ》 | June | n | time | N5
七月《しちがつ》 | July | n | time | N5 | Irregular: しち
八月《はちがつ》 | August | n | time | N5
九月《くがつ》 | September | n | time | N5 | Irregular: く
十月《じゅうがつ》 | October | n | time | N5
十一月《じゅういちがつ》 | November | n | time | N5
十二月《じゅうにがつ》 | December | n | time | N5
一日《ついたち》 | the 1st of the month | n | time | N5
二日《ふつか》 | the 2nd; two days | n | time | N5
三日《みっか》 | the 3rd; three days | n | time | N5
四日《よっか》 | the 4th; four days | n | time | N5
五日《いつか》 | the 5th; five days | n | time | N5
六日《むいか》 | the 6th; six days | n | time | N5
七日《なのか》 | the 7th; seven days | n | time | N5
八日《ようか》 | the 8th; eight days | n | time | N5
九日《ここのか》 | the 9th; nine days | n | time | N5
十日《とおか》 | the 10th; ten days | n | time | N5
十四日《じゅうよっか》 | the 14th; fourteen days | n | time | N5
二十日《はつか》 | the 20th; twenty days | n | time | N5
二十四日《にじゅうよっか》 | the 24th; twenty-four days | n | time | N5
一日《いちにち》 | one day; all day | n | time | N5
一日中《いちにちじゅう》 | all day long | n | time | N4
今週《こんしゅう》 | this week | n | time | N5
先週《せんしゅう》 | last week | n | time | N5
来週《らいしゅう》 | next week | n | time | N5
今月《こんげつ》 | this month | n | time | N5
先月《せんげつ》 | last month | n | time | N5
来月《らいげつ》 | next month | n | time | N5
今年《ことし》 | this year | n | time | N5
去年《きょねん》 | last year | n | time | N5
来年《らいねん》 | next year | n | time | N5
週末《しゅうまつ》 | weekend | n | time | N5
平日《へいじつ》 | weekday | n | time | N4
休日《きゅうじつ》 | day off; holiday | n | time | N4
今《いま》 | now | n | time | N5
今度《こんど》 | this time; next time | n | time | N4
前《まえ》 | before; in front | n | time | N5
後《あと》 | after; later | n | time | N5
〜後《ご》 | after (a period of time) | suf | time | N5 | 三日後《みっかご》 = three days later
〜前《まえ》 | ... ago; before | suf | time | N5 | 二日前《ふつかまえ》 = two days ago
〜間《かん》 | for (a period of time) | suf | time | N5 | 二時間《にじかん》
間《あいだ》 | while; between | n | time | N4
ごろ | about (a time) | suf | time | N5 | 七時《しちじ》 ごろ
時間《じかん》 | time; hour | n | time | N5
時《とき》 | time; when | n | time | N4
日《ひ》 | day; sun | n | time | N5
最近《さいきん》 | recently | n | time | N4
最初《さいしょ》 | the first; at first | n | time | N4
最後《さいご》 | the last; at last | n | time | N4
昔《むかし》 | long ago | n | time | N4
将来《しょうらい》 | the future | n | time | N4
先日《せんじつ》 | the other day | n | time | N3
春《はる》 | spring | n | time | N5
夏《なつ》 | summer | n | time | N5
秋《あき》 | autumn | n | time | N5
冬《ふゆ》 | winter | n | time | N5
季節《きせつ》 | season | n | time | N4
年《とし》 | year; age | n | time | N4
月《つき》 | moon; month | n | time | N4
# people
人《ひと》 | person | n | people | N5
男《おとこ》 | man; male | n | people | N5
女《おんな》 | woman; female | n | people | N5
男性《だんせい》 | man (polite) | n | people | N4
女性《じょせい》 | woman (polite) | n | people | N4
男《おとこ》の 人《ひと》 | man | n | people | N5
女《おんな》の 人《ひと》 | woman | n | people | N5
男《おとこ》の 子《こ》 | boy | n | people | N5
女《おんな》の 子《こ》 | girl | n | people | N5
赤《あか》ちゃん | baby | n | people | N4
大人《おとな》 | adult | n | people | N5
お年寄《としよ》り | elderly person | n | people | N4
友達《ともだち》 | friend | n | people | N5
恋人《こいびと》 | lover; partner | n | people | N4
彼氏《かれし》 | boyfriend | n | people | N4
夫婦《ふうふ》 | married couple | n | people | N4
カップル | couple | n | people | N4
先生《せんせい》 | teacher; doctor | n | people | N5
学生《がくせい》 | student | n | people | N5
医者《いしゃ》 | doctor | n | people | N5
研修医《けんしゅうい》 | resident (doctor in training) | n | people | N3
看護師《かんごし》 | nurse | n | people | N4
薬剤師《やくざいし》 | pharmacist | n | people | N3
患者《かんじゃ》 | patient | n | people | N4
隣人《りんじん》 | neighbor | n | people | N3
上司《じょうし》 | boss, superior | n | people | N4
同僚《どうりょう》 | coworker | n | people | N4
先輩《せんぱい》 | senior colleague | n | people | N4
後輩《こうはい》 | junior colleague | n | people | N4
会社員《かいしゃいん》 | company employee | n | people | N5
店員《てんいん》 | shop clerk | n | people | N5
客《きゃく》 | guest; customer | n | people | N4
他人《たにん》 | stranger; other person | n | people | N3
みんな | everyone | n | people | N5
外国人《がいこくじん》 | foreigner | n | people | N5
日本人《にほんじん》 | Japanese person | n | people | N5
フィリピン人《じん》 | Filipino | n | people | N5
# family
父《ちち》 | my father | n | family | N5 | For your own family
お父《とう》さん | father (someone else's; or address) | n | family | N5 | Use for another person's father
母《はは》 | my mother | n | family | N5 | For your own family
お母《かあ》さん | mother (someone else's; or address) | n | family | N5 | Use for another person's mother
兄《あに》 | my older brother | n | family | N5 | For your own family
お兄《にい》さん | older brother (someone else's; or address) | n | family | N5
姉《あね》 | my older sister | n | family | N5 | For your own family
お姉《ねえ》さん | older sister (someone else's; or address) | n | family | N5
弟《おとうと》 | my younger brother | n | family | N5 | For your own family
弟《おとうと》さん | younger brother (someone else's) | n | family | N5
妹《いもうと》 | my younger sister | n | family | N5 | For your own family
妹《いもうと》さん | younger sister (someone else's) | n | family | N5
夫《おっと》 | my husband | n | family | N4 | For your own family
ご主人《しゅじん》 | husband (someone else's) | n | family | N4 | Polite, for another person's husband
妻《つま》 | my wife | n | family | N4 | For your own family
奥《おく》さん | wife (someone else's) | n | family | N4 | Polite, for another person's wife
息子《むすこ》 | my son | n | family | N4 | For your own family
息子《むすこ》さん | son (someone else's) | n | family | N4
娘《むすめ》 | my daughter | n | family | N4 | For your own family
娘《むすめ》さん | daughter (someone else's) | n | family | N4
家族《かぞく》 | family | n | family | N5 | For your own family
ご家族《かぞく》 | family (someone else's) | n | family | N5 | Use for another person's family
両親《りょうしん》 | parents | n | family | N4 | For your own family
ご両親《りょうしん》 | parents (someone else's) | n | family | N4
きょうだい | siblings | n | family | N5 | Usually written 兄弟《きょうだい》
ご兄弟《きょうだい》 | siblings (someone else's) | n | family | N4
祖父《そふ》 | grandfather | n | family | N4 | For your own family
祖母《そぼ》 | grandmother | n | family | N4 | For your own family
おじいさん | grandfather; old man | n | family | N5 | Used for any elderly man, or someone else's grandfather
おばあさん | grandmother; old woman | n | family | N5 | Used for any elderly woman, or someone else's grandmother
孫《まご》 | grandchild | n | family | N4
親《おや》 | parent | n | family | N4
子《こ》ども | child | n | family | N5 | For your own child or children in general
お子《こ》さん | child (someone else's) | n | family | N5
親戚《しんせき》 | relatives | n | family | N4
おじ | uncle (my) | n | family | N4 | For your own family; おじさん for others
おば | aunt (my) | n | family | N4 | For your own family; おばさん for others
いとこ | cousin | n | family | N4
# adjectives
大《おお》きい | big | ai | adjectives | N5
小《ちい》さい | small | ai | adjectives | N5
新《あたら》しい | new | ai | adjectives | N5
古《ふる》い | old (not for people) | ai | adjectives | N5
いい | good | ai | adjectives | N5 | Irregular: よくない, よかった
悪《わる》い | bad | ai | adjectives | N5
暑《あつ》い | hot (weather) | ai | adjectives | N5
寒《さむ》い | cold (weather) | ai | adjectives | N5
熱《あつ》い | hot (to the touch) | ai | adjectives | N5
冷《つめ》たい | cold (to the touch) | ai | adjectives | N5
涼《すず》しい | cool (weather) | ai | adjectives | N4
暖《あたた》かい | warm | ai | adjectives | N4
高《たか》い | expensive; tall; high | ai | adjectives | N5
安《やす》い | cheap | ai | adjectives | N5
低《ひく》い | low; short | ai | adjectives | N4
長《なが》い | long | ai | adjectives | N5
短《みじか》い | short | ai | adjectives | N5
近《ちか》い | near | ai | adjectives | N5
遠《とお》い | far | ai | adjectives | N5
速《はや》い | fast | ai | adjectives | N5
早《はや》い | early | ai | adjectives | N5
遅《おそ》い | slow; late | ai | adjectives | N5
難《むずか》しい | difficult | ai | adjectives | N5
易《やさ》しい | easy | ai | adjectives | N4
忙《いそが》しい | busy | ai | adjectives | N5
強《つよ》い | strong | ai | adjectives | N4
弱《よわ》い | weak | ai | adjectives | N4
重《おも》い | heavy | ai | adjectives | N5
軽《かる》い | light | ai | adjectives | N5
明《あか》るい | bright; cheerful | ai | adjectives | N5
暗《くら》い | dark | ai | adjectives | N5
うるさい | noisy; annoying | ai | adjectives | N4
汚《きたな》い | dirty | ai | adjectives | N5
危《あぶ》ない | dangerous | ai | adjectives | N4
厳《きび》しい | strict | ai | adjectives | N3
優《やさ》しい | kind, gentle | ai | adjectives | N4
若《わか》い | young | ai | adjectives | N4
狭《せま》い | narrow, small (room) | ai | adjectives | N4
広《ひろ》い | wide, spacious | ai | adjectives | N5
太《ふと》い | fat, thick | ai | adjectives | N4
細《ほそ》い | thin, slender | ai | adjectives | N4
厚《あつ》い | thick | ai | adjectives | N4
薄《うす》い | thin; weak (taste) | ai | adjectives | N4
深《ふか》い | deep | ai | adjectives | N4
浅《あさ》い | shallow | ai | adjectives | N3
多《おお》い | many, much | ai | adjectives | N5
少《すく》ない | few, little | ai | adjectives | N4
おいしい | delicious | ai | adjectives | N5
まずい | bad-tasting | ai | adjectives | N4
甘《あま》い | sweet | ai | adjectives | N5
辛《から》い | spicy; salty | ai | adjectives | N5
苦《にが》い | bitter | ai | adjectives | N4
面白《おもしろ》い | interesting; funny | ai | adjectives | N5
つまらない | boring | ai | adjectives | N4
可愛《かわい》い | cute | ai | adjectives | N4
欲《ほ》しい | wanted; to want | ai | adjectives | N5 | 薬《くすり》 が 欲《ほ》しい です
正《ただ》しい | correct | ai | adjectives | N4
詳《くわ》しい | detailed; well-informed | ai | adjectives | N4
珍《めずら》しい | rare, unusual | ai | adjectives | N4
素晴《すば》らしい | wonderful | ai | adjectives | N4
白《しろ》い | white | ai | adjectives | N5
黒《くろ》い | black | ai | adjectives | N5
赤《あか》い | red | ai | adjectives | N5
青《あお》い | blue | ai | adjectives | N5
硬《かた》い | hard | ai | adjectives | N3
柔《やわ》らかい | soft | ai | adjectives | N3
静《しず》か | quiet | an | adjectives | N5
賑《にぎ》やか | lively | an | adjectives | N4
きれい | pretty; clean | an | adjectives | N5
便利《べんり》 | convenient | an | adjectives | N5
不便《ふべん》 | inconvenient | an | adjectives | N4
大切《たいせつ》 | important; precious | an | adjectives | N4
大事《だいじ》 | important | an | adjectives | N4
重要《じゅうよう》 | important | an | adjectives | N3
必要《ひつよう》 | necessary | an | adjectives | N4
同《おな》じ | same | an | adjectives | N5 | Before a noun: 同《おな》じ 薬《くすり》 (no な)
別《べつ》 | different; separate | an | adjectives | N4
親切《しんせつ》 | kind | an | adjectives | N5
元気《げんき》 | well, healthy | an | adjectives | N5
丈夫《じょうぶ》 | sturdy; healthy | an | adjectives | N4
大丈夫《だいじょうぶ》 | all right; safe | an | adjectives | N5
健康《けんこう》 | healthy; health | an | adjectives | N4
暇《ひま》 | free (not busy) | an | adjectives | N5
好《す》き | liked; to like | an | adjectives | N5 | 私《わたし》 は 音楽《おんがく》 が 好《す》き です
嫌《きら》い | disliked; to dislike | an | adjectives | N5
上手《じょうず》 | skilled | an | adjectives | N5
下手《へた》 | unskilled | an | adjectives | N5
得意《とくい》 | good at | an | adjectives | N4
苦手《にがて》 | weak at; not good with | an | adjectives | N3
有名《ゆうめい》 | famous | an | adjectives | N5
簡単《かんたん》 | simple, easy | an | adjectives | N5
複雑《ふくざつ》 | complicated | an | adjectives | N3
安全《あんぜん》 | safe | an | adjectives | N4
危険《きけん》 | dangerous | an | adjectives | N3
無理《むり》 | impossible; unreasonable | an | adjectives | N4
特別《とくべつ》 | special | an | adjectives | N4
変《へん》 | strange | an | adjectives | N4
自由《じゆう》 | free (liberty) | an | adjectives | N4
丁寧《ていねい》 | polite; careful | an | adjectives | N4
真面目《まじめ》 | serious; diligent | an | adjectives | N4
立派《りっぱ》 | splendid | an | adjectives | N3
十分《じゅうぶん》 | enough | an | adjectives | N4
楽《らく》 | easy; comfortable | an | adjectives | N4
素敵《すてき》 | lovely | an | adjectives | N4
だめ | no good; not allowed | an | adjectives | N4
いろいろ | various | an | adjectives | N4
普通《ふつう》 | ordinary, usual | an | adjectives | N4
大変《たいへん》 | hard; serious | an | adjectives | N4
# verbs
いる | to be, to exist (people, animals) | v1 | verbs | N5
ある | to be, to exist (things); to have | v5 | verbs | N5 | Negative: ない (not あらない)
行《い》く | to go | v5 | verbs | N5 | Irregular: 行《い》って
来《く》る | to come | vi | verbs | N5 | 来《き》ます, 来《こ》ない
帰《かえ》る | to return home | v5 | verbs | N5
食《た》べる | to eat | v1 | verbs | N5
飲《の》む | to drink; to take (medicine) | v5 | verbs | N5 | 薬《くすり》 を 飲《の》む = take medicine
見《み》る | to see, to watch | v1 | verbs | N5
聞《き》く | to hear; to listen; to ask | v5 | verbs | N5
話《はな》す | to speak, to talk | v5 | verbs | N5
言《い》う | to say | v5 | verbs | N5
読《よ》む | to read | v5 | verbs | N5
書《か》く | to write | v5 | verbs | N5
買《か》う | to buy | v5 | verbs | N5
売《う》る | to sell | v5 | verbs | N4
会《あ》う | to meet | v5 | verbs | N5
待《ま》つ | to wait | v5 | verbs | N5
分《わ》かる | to understand | v5 | verbs | N5
知《し》る | to get to know; to learn | v5 | verbs | N5 | 知《し》って います = know
思《おも》う | to think | v5 | verbs | N5
覚《おぼ》える | to remember; to memorize | v1 | verbs | N4
忘《わす》れる | to forget | v1 | verbs | N5
教《おし》える | to teach; to tell | v1 | verbs | N5
習《なら》う | to learn | v5 | verbs | N5
勉強《べんきょう》 | to study | vs | verbs | N5 | 勉強《べんきょう》 を する / 勉強《べんきょう》 する
働《はたら》く | to work | v5 | verbs | N5
休《やす》む | to rest; to be absent | v5 | verbs | N5
遊《あそ》ぶ | to play | v5 | verbs | N5
寝《ね》る | to sleep; to go to bed | v1 | verbs | N5
起《お》きる | to get up; to wake up | v1 | verbs | N5
立《た》つ | to stand | v5 | verbs | N5
座《すわ》る | to sit | v5 | verbs | N5
歩《ある》く | to walk | v5 | verbs | N5
走《はし》る | to run | v5 | verbs | N5
入《はい》る | to enter | v5 | verbs | N5
出《で》る | to go out; to leave | v1 | verbs | N5
出《だ》す | to take out; to submit | v5 | verbs | N5
開《あ》ける | to open (something) | v1 | verbs | N5
開《あ》く | to open (by itself) | v5 | verbs | N5
閉《し》める | to close (something) | v1 | verbs | N5
閉《し》まる | to close (by itself) | v5 | verbs | N5
つける | to turn on; to attach | v1 | verbs | N5 | 電気《でんき》 を つける
消《け》す | to turn off; to erase | v5 | verbs | N5
置《お》く | to put, to place | v5 | verbs | N5
取《と》る | to take | v5 | verbs | N5
あげる | to give | v1 | verbs | N5 | Giving to others
くれる | to give (to me) | v1 | verbs | N5 | Someone gives to me or my group
もらう | to receive | v5 | verbs | N5
貸《か》す | to lend | v5 | verbs | N5
借《か》りる | to borrow | v1 | verbs | N5
送《おく》る | to send | v5 | verbs | N4
使《つか》う | to use | v5 | verbs | N5
作《つく》る | to make | v5 | verbs | N5
する | to do | vi | verbs | N5 | します, しない, して
始《はじ》める | to begin (something) | v1 | verbs | N5
始《はじ》まる | to begin (by itself) | v5 | verbs | N5
終《お》わる | to end, to finish (by itself) | v5 | verbs | N5
終《お》える | to finish (something) | v1 | verbs | N4
止《と》める | to stop (something) | v1 | verbs | N4
止《と》まる | to stop (by itself) | v5 | verbs | N4
続《つづ》ける | to continue (something) | v1 | verbs | N4
手伝《てつだ》う | to help | v5 | verbs | N4
助《たす》ける | to save; to help | v1 | verbs | N4
呼《よ》ぶ | to call | v5 | verbs | N5
電話《でんわ》 | to telephone | vs | verbs | N5
頼《たの》む | to ask a favor; to order | v5 | verbs | N4
答《こた》える | to answer | v1 | verbs | N4
試《ため》す | to try out | v5 | verbs | N3
決《き》める | to decide | v1 | verbs | N4
変《か》える | to change (something) | v1 | verbs | N4
変《か》わる | to change (by itself) | v5 | verbs | N4
なる | to become | v5 | verbs | N5
要《い》る | to need | v5 | verbs | N4
できる | to be able to; can | v1 | verbs | N5
持《も》つ | to hold, to have | v5 | verbs | N5
住《す》む | to live, to reside | v5 | verbs | N5
生《う》まれる | to be born | v1 | verbs | N5
死《し》ぬ | to die | v5 | verbs | N5
生《い》きる | to live | v1 | verbs | N4
結婚《けっこん》 | to marry | vs | verbs | N5
着《き》る | to wear (on the body) | v1 | verbs | N5
脱《ぬ》ぐ | to take off (clothes) | v5 | verbs | N5
着替《きが》える | to change clothes | v1 | verbs | N4
洗《あら》う | to wash | v5 | verbs | N5
浴《あ》びる | to take (a shower) | v1 | verbs | N5 | シャワー を 浴《あ》びる
料理《りょうり》 | to cook | vs | verbs | N5
掃除《そうじ》 | to clean | vs | verbs | N5
洗濯《せんたく》 | to do laundry | vs | verbs | N5
運転《うんてん》 | to drive | vs | verbs | N4
乗《の》る | to ride; to get on | v5 | verbs | N5
降《お》りる | to get off | v1 | verbs | N5
着《つ》く | to arrive | v5 | verbs | N5
出発《しゅっぱつ》 | to depart | vs | verbs | N4
急《いそ》ぐ | to hurry | v5 | verbs | N5
探《さが》す | to look for | v5 | verbs | N4
見《み》つける | to find | v1 | verbs | N4
見《み》つかる | to be found | v5 | verbs | N4
無《な》くす | to lose (an object) | v5 | verbs | N4
落《お》とす | to drop | v5 | verbs | N4
壊《こわ》す | to break (something) | v5 | verbs | N4
壊《こわ》れる | to break (by itself) | v1 | verbs | N4
直《なお》す | to fix; to correct | v5 | verbs | N4
選《えら》ぶ | to choose | v5 | verbs | N4
比《くら》べる | to compare | v1 | verbs | N4
説明《せつめい》 | to explain | vs | verbs | N4
見《み》せる | to show | v1 | verbs | N5
持《も》って 行《い》く | to take (something) along | v5 | verbs | N5
持《も》って 来《く》る | to bring | vi | verbs | N5
連《つ》れて 行《い》く | to take (a person) along | v5 | verbs | N4
遅《おく》れる | to be late | v1 | verbs | N4
間《ま》に 合《あ》う | to be in time | v5 | verbs | N4
困《こま》る | to be troubled | v5 | verbs | N4
驚《おどろ》く | to be surprised | v5 | verbs | N4
怒《おこ》る | to get angry | v5 | verbs | N4
笑《わら》う | to laugh | v5 | verbs | N4
泣《な》く | to cry | v5 | verbs | N4
微笑《ほほえ》む | to smile | v5 | verbs | N3
心配《しんぱい》 | to worry | vs | verbs | N4 | 心配《しんぱい》 しないで ください = Please do not worry
気《き》 を つける | to be careful | v1 | verbs | N4
考《かんが》える | to think; to consider | v1 | verbs | N4
伝《つた》える | to convey; to tell | v1 | verbs | N4
思《おも》い出《だ》す | to remember; to recall | v5 | verbs | N4
信《しん》じる | to believe; to trust | v1 | verbs | N4
知《し》らせる | to inform | v1 | verbs | N4
見《み》える | to be visible; to look like | v1 | verbs | N4
聞《き》こえる | to be audible | v1 | verbs | N4
泊《と》まる | to stay overnight | v5 | verbs | N4
泳《およ》ぐ | to swim | v5 | verbs | N5
歌《うた》う | to sing | v5 | verbs | N5
触《さわ》る | to touch | v5 | verbs | N4
押《お》す | to push; to press | v5 | verbs | N4
引《ひ》く | to pull | v5 | verbs | N4
払《はら》う | to pay | v5 | verbs | N4
曲《ま》がる | to turn | v5 | verbs | N5
渡《わた》る | to cross | v5 | verbs | N4
通《かよ》う | to commute; to attend regularly | v5 | verbs | N4
動《うご》く | to move | v5 | verbs | N4
乗《の》り換《か》える | to transfer (trains) | v1 | verbs | N4
かかる | to take (time or money) | v5 | verbs | N5 | 三十分《さんじゅっぷん》 かかります
足《た》りる | to be enough | v1 | verbs | N4
増《ふ》える | to increase | v1 | verbs | N4
減《へ》る | to decrease | v5 | verbs | N4
勝《か》つ | to win | v5 | verbs | N4
負《ま》ける | to lose (a contest) | v1 | verbs | N4
切《き》る | to cut | v5 | verbs | N5
しゃべる | to chat, to talk | v5 | verbs | N4
受《う》ける | to receive; to take (an exam) | v1 | verbs | N4
守《まも》る | to protect; to keep (a promise) | v5 | verbs | N4
相談《そうだん》 | to consult | vs | verbs | N4
予約《よやく》 | to reserve | vs | verbs | N4
約束《やくそく》 | to promise | vs | verbs | N4
紹介《しょうかい》 | to introduce | vs | verbs | N4
練習《れんしゅう》 | to practice | vs | verbs | N5
質問《しつもん》 | to ask a question | vs | verbs | N5
散歩《さんぽ》 | to take a walk | vs | verbs | N4
旅行《りょこう》 | to travel | vs | verbs | N5
注意《ちゅうい》 | to be careful; to warn | vs | verbs | N4
準備《じゅんび》 | to prepare | vs | verbs | N4
# adverbs
とても | very | adv | adverbs | N5
少《すこ》し | a little | adv | adverbs | N5
ちょっと | a little; a moment | adv | adverbs | N5
たくさん | many, much | adv | adverbs | N5
あまり | not very (with a negative) | adv | adverbs | N5
全然《ぜんぜん》 | not at all (with a negative) | adv | adverbs | N5 | Means never when about habits
もっと | more | adv | adverbs | N5
一番《いちばん》 | most; number one | adv | adverbs | N5
だいたい | roughly; mostly | adv | adverbs | N4
たぶん | probably | adv | adverbs | N4
きっと | surely | adv | adverbs | N4
ぜひ | by all means | adv | adverbs | N4
まだ | still; not yet | adv | adverbs | N5
もう | already; anymore; more | adv | adverbs | N5
また | again | adv | adverbs | N5
すぐ | immediately | adv | adverbs | N5
もうすぐ | very soon | adv | adverbs | N4
ゆっくり | slowly; leisurely | adv | adverbs | N5
はっきり | clearly | adv | adverbs | N4
ちゃんと | properly | adv | adverbs | N4
一緒《いっしょ》 に | together | adv | adverbs | N5
一人《ひとり》 で | alone, by oneself | adv | adverbs | N5
自分《じぶん》 で | by oneself | adv | adverbs | N4
初《はじ》めて | for the first time | adv | adverbs | N5
本当《ほんとう》 に | really | adv | adverbs | N5
特《とく》 に | especially | adv | adverbs | N4
急《きゅう》 に | suddenly | adv | adverbs | N4
だんだん | gradually | adv | adverbs | N4
ずっと | all along; much more | adv | adverbs | N4
やっと | at last | adv | adverbs | N4
なかなか | quite; not easily (with a negative) | adv | adverbs | N4
ほとんど | almost; hardly (with a negative) | adv | adverbs | N4
たいてい | usually | adv | adverbs | N4
いつも | always | adv | adverbs | N5
時々《ときどき》 | sometimes | adv | adverbs | N5
よく | often; well | adv | adverbs | N5
たまに | occasionally | adv | adverbs | N4
まっすぐ | straight | adv | adverbs | N5
さっき | a little while ago | adv | adverbs | N4
後《あと》 で | later | adv | adverbs | N5
先《さき》 に | first; ahead | adv | adverbs | N4
例《たと》えば | for example | adv | adverbs | N4
実《じつ》は | actually | adv | adverbs | N4
必《かなら》ず | without fail | adv | adverbs | N4
もちろん | of course | adv | adverbs | N4
かなり | considerably | adv | adverbs | N4
ちょうど | exactly; just | adv | adverbs | N4
別《べつ》 に | not particularly (with a negative) | adv | adverbs | N4
絶対《ぜったい》 に | absolutely | adv | adverbs | N3
全《まった》く | completely; not at all | adv | adverbs | N3
非常《ひじょう》 に | extremely | adv | adverbs | N3
`);
