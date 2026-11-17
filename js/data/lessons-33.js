/* Lessons part 33 (0.23.0): N5 reviews of existing units: review-n5-first, review-n5-numbers, review-n5-verbs, review-n5-adjectives, review-n5-te.
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (as every lessons file): { id, level:'N5'|'N4', unit, title, summary, draft:true, body:HTML, quiz:[[q, [3 opts], idx, why]] }
   plus two optional fields read by js/data/lessons-zz-order.js:
     after: '<lesson id>'  show this lesson directly after that one. Give EVERY lesson of this file an `after`: the first
                           new lesson of a unit the anchor lesson, each following lesson the id of the lesson before it,
                           the unit review the last lesson of the unit. Several lessons with the same `after`: the
                           review: true ones come first, then the others in file order.
     review: true          a unit review: title "Review: <unit>", level and unit of its unit, short recap body, quiz of exactly 12.
   Other lessons have 5 to 7 quiz questions. Examples in the body: <div class="ex"><b>JA</b><span>EN</span></div>.
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  /* ================= Review: First sentences ================= */

  { id: 'review-n5-first', level: 'N5', unit: 'First sentences', title: `Review: First sentences`, review: true, after: 'question-words',
    summary: `Bring together A は B です, の / も / と, こ・そ・あ・ど and the question words, and test them in mixed questions.`, draft: true,
    body: `<p>This unit gave you the sentences of a first meeting: who you are, whose medicine this is, where the room is, and the basic questions of an interview. Here they are side by side.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>A は B です</td><td>say what something is</td><td>私《わたし》 は 医者《いしゃ》 です。</td></tr>
<tr><td>では ありません / じゃ ありません</td><td>is not</td><td>私《わたし》 は 看護師《かんごし》 では ありません。</td></tr>
<tr><td>〜です か</td><td>yes-or-no question</td><td>山田《やまだ》さん です か。</td></tr>
<tr><td>の</td><td>'s, of, at: links two nouns</td><td>これ は 母《はは》 の 薬《くすり》 です。</td></tr>
<tr><td>も</td><td>also; replaces は</td><td>私《わたし》 も 医者《いしゃ》 です。</td></tr>
<tr><td>と</td><td>and, between nouns</td><td>父《ちち》 と 母《はは》 は 元気《げんき》 です。</td></tr>
<tr><td>これ / この + noun</td><td>this (alone / before a noun)</td><td>この 本《ほん》 は 私《わたし》 の です。</td></tr>
<tr><td>ここ / こちら</td><td>this place / this way (polite)</td><td>こちら へ どうぞ。</td></tr>
<tr><td>question word + か</td><td>ask, with the word where the answer goes</td><td>診察室《しんさつしつ》 は どこ です か。</td></tr>
<tr><td>何《なに》 か / 何《なに》 も</td><td>anything / nothing (with a negative)</td><td>いいえ、 何《なに》 も ありません。</td></tr></table>
<h3>Watch out</h3>
<ul><li>Never add さん or 先生《せんせい》 to your own name: ナバロ です.</li>
<li>この needs a noun after it. Alone, use これ: これ は 薬《くすり》 です.</li>
<li>も replaces は: 私《わたし》 も, not 私《わたし》 は も.</li>
<li>A question word as the subject takes が, never は: どこ が 痛《いた》い です か.</li>
<li>何《なに》 is read なん before です and before counters, なに before を, が and か.</li></ul>
<h3>Putting it together</h3>
<div class="ex"><b>これ は 山田《やまだ》さん の 薬《くすり》 です か。</b><span>Is this your medicine, Mr. Yamada?</span></div>
<div class="ex"><b>いいえ、 それ は 母《はは》 の です。</b><span>No, that is my mother's.</span></div>
<div class="ex"><b>あの 人《ひと》 は 田中《たなか》さん の お母《かあ》さん です か。</b><span>Is that person Mr. Tanaka's mother?</span></div>
<div class="ex"><b>朝《あさ》 と 夜《よる》 の 薬《くすり》 は どれ です か。</b><span>Which are the morning and night medicines?</span></div>
<div class="ex"><b>山田《やまだ》さん も 大学病院《だいがくびょういん》 の 看護師《かんごし》 です か。</b><span>Is Ms. Yamada also a nurse at the university hospital?</span></div>
<div class="note">Japanese leaves out what is clear: once you have said who you are, drop 私《わたし》 は. And put a question word exactly where its answer will go.</div>`,
    quiz: [
      [`A patient asks ナバロ先生《せんせい》 です か。 You are Dr. Navarro. What do you answer?`, [`はい、 ナバロさん です。`, `はい、 ナバロ先生《せんせい》 です。`, `はい、 ナバロ です。`], 2, `You never add さん or 先生《せんせい》 to your own name.`],
      [`What is the negative of 会社員《かいしゃいん》 です?`, [`会社員《かいしゃいん》 では です`, `会社員《かいしゃいん》 じゃ ありません`, `会社員《かいしゃいん》 ありません`], 1, `じゃ ありません (or では ありません) is the negative of です.`],
      [`How do you say "This is my mother's medicine"?`, [`これ は 母《はは》 の 薬《くすり》 です。`, `この は 母《はは》 の 薬《くすり》 です。`, `これ は 薬《くすり》 の 母《はは》 です。`], 0, `これ stands alone as the topic, and the owner comes before の.`],
      [`How do you say "My mother is a nurse too"?`, [`母《はは》 は も 看護師《かんごし》 です。`, `母《はは》 も 看護師《かんごし》 です。`, `母《はは》 と 看護師《かんごし》 です。`], 1, `も replaces は; it is not added to it.`],
      [`朝《あさ》 ＿ 夜《よる》 の 薬《くすり》 です。 "It is the morning and night medicine." Which particle fits?`, [`の`, `も`, `と`], 2, `と joins the two nouns morning and night.`],
      [`A patient is holding a form in their hand. You ask about it: ＿ は 何《なん》 です か。`, [`これ`, `それ`, `あれ`], 1, `A thing near the listener is それ.`],
      [`How do you ask "Which one is your medicine, Mr. Tanaka?"`, [`どれ が 田中《たなか》さん の 薬《くすり》 です か。`, `どれ は 田中《たなか》さん の 薬《くすり》 です か。`, `どの が 田中《たなか》さん の 薬《くすり》 です か。`], 0, `どれ stands alone, and as a question word subject it takes が.`],
      [`In お名前《なまえ》 は 何《なん》 です か, why is the reading なん and not なに?`, [`Because the question is polite`, `Because it asks about a person`, `Because it comes before です`], 2, `何《なに》 is read なん before です and before counters.`],
      [`How do you politely ask "Who is that person?"`, [`あの 方《かた》 は どなた です か。`, `あの 方《かた》 は どれ です か。`, `あの 方《かた》 は どこ です か。`], 0, `どなた is the polite "who"; どれ is "which one" and どこ is "where".`],
      [`何《なに》 か 心配《しんぱい》 な こと は あります か。 Which answer means "No, nothing"?`, [`いいえ、 何《なに》 か ありません。`, `いいえ、 何《なに》 も ありません。`, `いいえ、 何《なん》 です か。`], 1, `Question word + も with a negative means "nothing".`],
      [`The answer is それ は 山田《やまだ》さん の 本《ほん》 です。 What was the question?`, [`これ は だれ が 本《ほん》 です か。`, `だれ は この 本《ほん》 です か。`, `これ は だれ の 本《ほん》 です か。`], 2, `The question word だれ sits where the answer 山田《やまだ》さん goes, with の after it.`],
      [`How do you say "The restroom is over there"?`, [`トイレ は あそこ です。`, `トイレ は あの です。`, `トイレ は どこ です。`], 0, `あそこ is a place away from both people; あの needs a noun, and どこ asks a question.`]
    ] },

  /* ================= Review: Numbers and time ================= */

  { id: 'review-n5-numbers', level: 'N5', unit: 'Numbers and time', title: `Review: Numbers and time`, review: true, after: 'counters',
    summary: `Bring together numbers, clock times, dates and counters, with their special readings, and test them in mixed questions.`, draft: true,
    body: `<p>Age, fees, dates, appointment times, how long a symptom has lasted and how many tablets a day: this unit covered the numbers of a history. Most mistakes are in the readings, so read every line aloud.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>百《ひゃく》 / 千《せん》 / 万《まん》</td><td>prices and large numbers</td><td>診察料《しんさつりょう》 は 千五百円《せんごひゃくえん》 です。</td></tr>
<tr><td>sound changes</td><td>三百《さんびゃく》, 六百《ろっぴゃく》, 八百《はっぴゃく》, 八千《はっせん》</td><td>お薬《くすり》 は 八百円《はっぴゃくえん》 です。</td></tr>
<tr><td>〜歳《さい》 / おいくつ</td><td>age</td><td>母《はは》 は 五十八歳《ごじゅうはっさい》 です。</td></tr>
<tr><td>〜時《じ》 〜分《ふん》, 半《はん》 + に</td><td>clock time</td><td>毎晩《まいばん》 十時半《じゅうじはん》 に 寝《ね》ます。</td></tr>
<tr><td>〜月《がつ》 〜日《にち》 (special: 八日《ようか》), 〜曜日《ようび》</td><td>dates and days</td><td>予約《よやく》 は 五月《ごがつ》 八日《ようか》 の 水曜日《すいようび》 です。</td></tr>
<tr><td>から / まで</td><td>from, since / until</td><td>診察《しんさつ》 は 九時《くじ》 から 五時《ごじ》 まで です。</td></tr>
<tr><td>前《まえ》 / ぐらい</td><td>ago / about</td><td>二週間《にしゅうかん》 ぐらい 前《まえ》 から です。</td></tr>
<tr><td>一《ひと》つ, 二《ふた》つ… / いくつ</td><td>things with no special counter</td><td>りんご を 二《ふた》つ ください。</td></tr>
<tr><td>人《にん》, 回《かい》, 錠《じょう》, 本《ほん》, 枚《まい》, 杯《はい》</td><td>counters</td><td>子《こ》ども が 三人《さんにん》 います。</td></tr>
<tr><td>A に + number + counter</td><td>per (a day, a week)</td><td>一日《いちにち》 に 三回《さんかい》 飲《の》みます。</td></tr></table>
<h3>Watch out</h3>
<ul><li>一日《ついたち》 is the 1st of the month; 一日《いちにち》 is one day or "per day".</li>
<li>Counting uses よん, なな and きゅう, but some fixed words do not: 四時《よじ》, 七時《しちじ》, 九時《くじ》, 四月《しがつ》, 九月《くがつ》.</li>
<li>People: 一人《ひとり》, 二人《ふたり》, then 三人《さんにん》 and 四人《よにん》.</li>
<li>10,000 is 一万《いちまん》, never "ten thousand".</li>
<li>Number and counter come after the noun and its particle: 薬《くすり》 を 二錠《にじょう》 飲《の》みます.</li></ul>
<h3>Putting it together</h3>
<div class="ex"><b>朝《あさ》 八時《はちじ》 と 夜《よる》 九時《くじ》 に 一錠《いちじょう》 飲《の》みます。</b><span>I take one tablet at eight in the morning and at nine at night.</span></div>
<div class="ex"><b>家族《かぞく》 は 四人《よにん》 です。 子《こ》ども が 二人《ふたり》 います。</b><span>There are four in my family. I have two children.</span></div>
<div class="ex"><b>週《しゅう》 に 二回《にかい》、 一回《いっかい》 に 三十分《さんじゅっぷん》 ぐらい 散歩《さんぽ》します。</b><span>Twice a week I take a walk of about thirty minutes.</span></div>
<div class="ex"><b>次《つぎ》 の 予約《よやく》 は 十月《じゅうがつ》 四日《よっか》、 午後《ごご》 二時《にじ》 です。</b><span>Your next appointment is October 4 at 2 p.m.</span></div>
<div class="ex"><b>熱《ねつ》 は 二日前《ふつかまえ》 から です。</b><span>The fever started two days ago.</span></div>
<div class="ex"><b>お酒《さけ》 は 一日《いちにち》 に ビール を 二本《にほん》 ぐらい です。</b><span>As for alcohol, about two bottles of beer a day.</span></div>
<div class="note">When a number sounds odd, say it slowly in beats: a small っ or a long vowel is a full beat. Check the special readings for dates 1 to 10, 14, 20 and 24 before you write an appointment card.</div>`,
    quiz: [
      [`How do you say 1,500 yen?`, [`せんごひゃくえん`, `いちせんごひゃくえん`, `せんごびゃくえん`], 0, `千《せん》 needs no いち in front, and 五百《ごひゃく》 has no sound change.`],
      [`How do you say 20,000?`, [`にじゅうせん`, `にまん`, `にせんまん`], 1, `Japanese counts in units of 万《まん》: 二万《にまん》 is 20,000.`],
      [`How do you politely ask a patient's age?`, [`いくら です か。`, `何時《なんじ》 です か。`, `おいくつ です か。`], 2, `おいくつ です か asks age politely; いくら is a price and 何時《なんじ》 a clock time.`],
      [`How do you say 4:30?`, [`よじはん`, `よんじはん`, `しじはん`], 0, `Four o'clock is 四時《よじ》, and 半《はん》 is half past.`],
      [`How do you say "the 8th" of the month?`, [`はちにち`, `やっか`, `ようか`], 2, `八日《ようか》 is one of the special date readings.`],
      [`The appointment is on the 1st of next month. How is "the 1st" read?`, [`いちにち`, `ついたち`, `ひとつ`], 1, `The 1st of the month is 一日《ついたち》; 一日《いちにち》 means one day.`],
      [`How do you say "from nine until twelve"?`, [`九時《くじ》 まで 十二時《じゅうにじ》 から`, `九時《くじ》 と 十二時《じゅうにじ》 の`, `九時《くじ》 から 十二時《じゅうにじ》 まで`], 2, `から marks the start and まで the end, each after its own time.`],
      [`How do you say "since about a week ago"?`, [`一週間《いっしゅうかん》 ぐらい 前《まえ》 から`, `一週間《いっしゅうかん》 から 前《まえ》`, `一週間《いっしゅうかん》 まで 前《まえ》`], 0, `Length of time + ぐらい (about) + 前《まえ》 (ago) + から (since).`],
      [`How do you say "four people"?`, [`よんにん`, `よにん`, `しにん`], 1, `四人《よにん》 uses the reading よ.`],
      [`How do you say "twice a day"?`, [`一日《ついたち》 に 二回《にかい》`, `一日《いちにち》 に 二回《にかい》`, `二回《にかい》 の 一日《いちにち》`], 1, `"Per day" is 一日《いちにち》 に; 一日《ついたち》 is the 1st of the month.`],
      [`コーヒー は 一日《いちにち》 に ＿ 飲《の》みます か。 "How many cups of coffee do you drink a day?"`, [`何杯《なんばい》`, `何枚《なんまい》`, `何本《なんぼん》`], 0, `杯《はい》 counts cups; 枚《まい》 counts flat things and 本《ほん》 long things.`],
      [`How do you say "ten cigarettes"?`, [`じゅうほん`, `じゅうぼん`, `じゅっぽん`], 2, `十本《じゅっぽん》 has a small っ and changes ほん to ぽん.`]
    ] },

  /* ================= Review: Verbs ================= */

  { id: 'review-n5-verbs', level: 'N5', unit: 'Verbs', title: `Review: Verbs`, review: true, after: 'invitations',
    summary: `Bring together the polite verb endings, the core particles, は and が, あります / います and invitations, and test them in mixed questions.`, draft: true,
    body: `<p>With this unit you can ask what a patient did, where and with whom, who came with them, what they have, and invite or offer. Most errors come from the particles, so look at them first in every line.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜ます / 〜ません</td><td>do, will do / do not</td><td>毎朝《まいあさ》 薬《くすり》 を 飲《の》みます。</td></tr>
<tr><td>〜ました / 〜ません でした</td><td>did / did not</td><td>今朝《けさ》 は 何《なに》 も 食《た》べません でした。</td></tr>
<tr><td>を / に / で</td><td>object / time, goal / place of action, means</td><td>七時《しちじ》 に 家《いえ》 で 朝《あさ》ご飯《はん》 を 食《た》べます。</td></tr>
<tr><td>へ, と, から / まで</td><td>toward / with / from, until</td><td>母《はは》 と 九時《くじ》 から 十二時《じゅうにじ》 まで 病院《びょういん》 に いました。</td></tr>
<tr><td>は / が</td><td>topic / subject, new information, question words</td><td>だれ が 一緒《いっしょ》 に 来《き》ました か。</td></tr>
<tr><td>X は Y が 好《す》き / わかる / 痛《いた》い</td><td>the thing liked, known or hurting takes が</td><td>母《はは》 は 英語《えいご》 が 少《すこ》し わかります。</td></tr>
<tr><td>あります / います</td><td>things / people and animals: there is, have</td><td>子《こ》ども が 二人《ふたり》 います。</td></tr>
<tr><td>place に X が あります</td><td>where something is</td><td>病院《びょういん》 の 近《ちか》く に 薬局《やっきょく》 が あります。</td></tr>
<tr><td>〜ません か / 〜ましょう / 〜ましょう か</td><td>invite / let's / shall we, shall I</td><td>窓《まど》 を 開《あ》けましょう か。</td></tr></table>
<h3>Watch out</h3>
<ul><li>The past negative is 〜ません でした: 行《い》きません でした.</li>
<li>明日《あした》, 今日《きょう》 and 毎日《まいにち》 take no に; clock times and days of the week do: 月曜日《げつようび》 に.</li>
<li>に for where you go or where something is; で for where you do something.</li>
<li>Question words as subject take が: だれ が, 何《なに》 が, どこ が.</li>
<li>People always take います. And 〜ません か is an invitation; decline it softly with ちょっと….</li></ul>
<h3>Putting it together</h3>
<div class="ex"><b>昨日《きのう》 は 娘《むすめ》 と 病院《びょういん》 に 来《き》ました。</b><span>Yesterday I came to the hospital with my daughter.</span></div>
<div class="ex"><b>今《いま》 家《いえ》 に だれ か います か。</b><span>Is anyone at home now?</span></div>
<div class="ex"><b>夜《よる》 は 家《いえ》 で 何《なに》 を します か。</b><span>What do you do at home in the evening?</span></div>
<div class="ex"><b>朝《あさ》 は 何《なに》 も 食《た》べません。 夜《よる》 は 少《すこ》し 食《た》べます。</b><span>I eat nothing in the morning. In the evening I eat a little.</span></div>
<div class="ex"><b>病院《びょういん》 の 近《ちか》く に 公園《こうえん》 が あります。 明日《あした》 一緒《いっしょ》 に 散歩《さんぽ》しません か。</b><span>There is a park near the hospital. Would you like to take a walk together tomorrow?</span></div>
<div class="ex"><b>少《すこ》し 休《やす》みましょう か。</b><span>Shall we take a short break?</span></div>
<div class="note">Read a sentence from the particles: を is what, に is when or where to, で is where or how, と is with whom. Then check the verb ending for tense.</div>`,
    quiz: [
      [`How do you say "I didn't go to work yesterday"?`, [`昨日《きのう》 は 会社《かいしゃ》 に 行《い》きません でした。`, `昨日《きのう》 は 会社《かいしゃ》 に 行《い》きました でした。`, `昨日《きのう》 は 会社《かいしゃ》 に 行《い》きません。`], 0, `The past negative is 〜ません でした.`],
      [`＿ に 病院《びょういん》 に 来《き》ます。 Which time word can take this に?`, [`明日《あした》`, `月曜日《げつようび》`, `毎日《まいにち》`], 1, `Days of the week take に; 明日《あした》 and 毎日《まいにち》 take no particle.`],
      [`病院《びょういん》 ＿ 働《はたら》きます。 "I work at the hospital." Which particle fits?`, [`に`, `を`, `で`], 2, `Working is an action, so its place takes で.`],
      [`タクシー ＿ 帰《かえ》りました。 "I went home by taxi." Which particle fits?`, [`を`, `で`, `と`], 1, `The means of transport takes で.`],
      [`今日《きょう》 は だれ ＿ 一緒《いっしょ》 に 来《き》ました か。 Which particle fits?`, [`が`, `は`, `を`], 0, `A question word as the subject takes が.`],
      [`私《わたし》 は 英語《えいご》 ＿ 少《すこ》し わかります。 Which particle fits?`, [`を`, `で`, `が`], 2, `With わかる the thing understood takes が, and the person is the topic with は.`],
      [`How do you say "I have two children"?`, [`子《こ》ども が 二人《ふたり》 あります。`, `子《こ》ども が 二人《ふたり》 います。`, `子《こ》ども を 二人《ふたり》 います。`], 1, `Children are people, so います, with が on what you have.`],
      [`How do you say "There is a pharmacy next to the hospital"?`, [`病院《びょういん》 の となり に 薬局《やっきょく》 が あります。`, `病院《びょういん》 の となり で 薬局《やっきょく》 が あります。`, `病院《びょういん》 の となり に 薬局《やっきょく》 が います。`], 0, `Place に thing が あります; a pharmacy is a thing.`],
      [`トイレ は どこ に ＿ か。 "Where is the restroom?"`, [`います`, `します`, `あります`], 2, `A restroom is a thing, so あります.`],
      [`A nurse says 荷物《にもつ》 を 持《も》ちましょう か。 What is she doing?`, [`Asking you to carry her bag`, `Offering to carry your bag`, `Asking if you carried the bag`], 1, `〜ましょう か with the speaker acting is an offer: "Shall I carry your bag?"`],
      [`A colleague asks 土曜日《どようび》 に 一緒《いっしょ》 に 映画《えいが》 を 見《み》ません か。 You are busy. What do you say?`, [`すみません、 土曜日《どようび》 は ちょっと…。`, `いいえ、 見《み》ません。`, `いいえ、 見《み》ません でした。`], 0, `〜ません か is an invitation; decline softly with すみません and ちょっと….`],
      [`How do you say "Let's have lunch together"?`, [`一緒《いっしょ》 に 昼《ひる》ご飯《はん》 で 食《た》べましょう。`, `一緒《いっしょ》 に 昼《ひる》ご飯《はん》 を 食《た》べました。`, `一緒《いっしょ》 に 昼《ひる》ご飯《はん》 を 食《た》べましょう。`], 2, `〜ましょう is "let's", and the food eaten takes を.`]
    ] },

  /* ================= Review: Adjectives ================= */

  { id: 'review-n5-adjectives', level: 'N5', unit: 'Adjectives', title: `Review: Adjectives`, review: true, after: 'na-adjectives',
    summary: `Bring together い-adjectives and な-adjectives in all four forms and before nouns, and test them in mixed questions.`, draft: true,
    body: `<p>Symptoms and feelings are mostly adjectives: 痛《いた》い, だるい, つらい, 心配《しんぱい》, 大丈夫《だいじょうぶ》. The two kinds change in different places. An い-adjective changes its own ending; a な-adjective stays the same and the です after it changes, as with a noun.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>い-adjective + です</td><td>is</td><td>お腹《なか》 が 痛《いた》い です。</td></tr>
<tr><td>〜くない です</td><td>is not</td><td>今日《きょう》 は 痛《いた》くない です。</td></tr>
<tr><td>〜かった です</td><td>was</td><td>先週《せんしゅう》 は 忙《いそが》しかった です。</td></tr>
<tr><td>〜くなかった です</td><td>was not</td><td>昨日《きのう》 は 眠《ねむ》くなかった です。</td></tr>
<tr><td>いい → よくない, よかった</td><td>the irregular い-adjective</td><td>気分《きぶん》 は よかった です。</td></tr>
<tr><td>い-adjective + noun</td><td>describe a noun</td><td>悪《わる》い 夢《ゆめ》 を 見《み》ました。</td></tr>
<tr><td>な-adjective + です / では ありません</td><td>is / is not</td><td>父《ちち》 は 元気《げんき》 では ありません。</td></tr>
<tr><td>でした / では ありません でした</td><td>was / was not</td><td>週末《しゅうまつ》 は 暇《ひま》 でした。</td></tr>
<tr><td>な-adjective + な + noun</td><td>describe a noun</td><td>静《しず》か な 部屋《へや》 で 休《やす》みます。</td></tr>
<tr><td>とても / 少《すこ》し / あまり + negative</td><td>how much</td><td>あまり よくない です。</td></tr></table>
<h3>Watch out</h3>
<ul><li>The past belongs to an い-adjective: 痛《いた》かった です, never 痛《いた》い でした.</li>
<li>いい becomes よくない and よかった, never いくない.</li>
<li>きれい, 嫌《きら》い and 有名《ゆうめい》 end in an い sound but are な-adjectives: きれい では ありません.</li>
<li>な appears only before a noun: 静《しず》か です, but 静《しず》か な 部屋《へや》. An い-adjective never takes な.</li>
<li>あまり goes only with a negative.</li></ul>
<h3>Putting it together</h3>
<div class="ex"><b>昨日《きのう》 は 体《からだ》 が とても だるかった です。</b><span>Yesterday my body felt very heavy and tired.</span></div>
<div class="ex"><b>今日《きょう》 は あまり 眠《ねむ》くない です。</b><span>I'm not very sleepy today.</span></div>
<div class="ex"><b>静《しず》か な 部屋《へや》 は 好《す》き です か。</b><span>Do you like quiet rooms?</span></div>
<div class="ex"><b>先週《せんしゅう》 は 大変《たいへん》 でした。 今週《こんしゅう》 は 少《すこ》し 暇《ひま》 です。</b><span>Last week was tough. This week I have a little free time.</span></div>
<div class="ex"><b>父《ちち》 は 先月《せんげつ》 あまり 元気《げんき》 では ありません でした。</b><span>My father was not very well last month.</span></div>
<div class="ex"><b>悪《わる》い 夢《ゆめ》 は 怖《こわ》い です ね。</b><span>Bad dreams are frightening, aren't they.</span></div>
<div class="note">To decide the form, first ask which kind the adjective is. い-adjective: change the い. な-adjective: change です, and add な before a noun.</div>`,
    quiz: [
      [`How do you say "Work was busy"?`, [`仕事《しごと》 が 忙《いそが》しい でした。`, `仕事《しごと》 が 忙《いそが》しかった です。`, `仕事《しごと》 が 忙《いそが》しく でした。`], 1, `The past of an い-adjective is 〜かった, then です.`],
      [`天気《てんき》 は ＿ です。 "The weather was not good."`, [`よくなかった`, `いくなかった`, `よかった`], 0, `いい builds its forms from よい: the past negative is よくなかった.`],
      [`How do you say "My mother is not well"?`, [`母《はは》 は 元気《げんき》くない です。`, `母《はは》 は 元気《げんき》 な です。`, `母《はは》 は 元気《げんき》 では ありません。`], 2, `元気《げんき》 is a な-adjective, so です changes: では ありません.`],
      [`How do you say "I was free at the weekend"?`, [`週末《しゅうまつ》 は 暇《ひま》 でした。`, `週末《しゅうまつ》 は 暇《ひま》かった です。`, `週末《しゅうまつ》 は 暇《ひま》 な でした。`], 0, `The past of a な-adjective is でした.`],
      [`Which phrase is correct for "a quiet room and a dark room"?`, [`静《しず》か 部屋《へや》 と 暗《くら》い な 部屋《へや》`, `静《しず》か な 部屋《へや》 と 暗《くら》い 部屋《へや》`, `静《しず》か な 部屋《へや》 と 暗《くら》い な 部屋《へや》`], 1, `A な-adjective takes な before a noun; an い-adjective goes straight before it.`],
      [`How do you say "It isn't clean"?`, [`きれくない です。`, `きれいくない です。`, `きれい では ありません。`], 2, `きれい is a な-adjective, so the negative is では ありません.`],
      [`＿ は あります か。 "Is there any food you dislike?"`, [`嫌《きら》い 食《た》べ物《もの》`, `嫌《きら》い な 食《た》べ物《もの》`, `嫌《きら》い の 食《た》べ物《もの》`], 1, `嫌《きら》い is a な-adjective, so な comes before the noun.`],
      [`あまり ＿。 "I'm not very worried."`, [`心配《しんぱい》 では ありません`, `心配《しんぱい》 です`, `心配《しんぱい》 な です`], 0, `あまり needs a negative, and 心配《しんぱい》 is a な-adjective.`],
      [`Which adjective describes emotional pain that is hard to bear?`, [`だるい`, `眠《ねむ》い`, `つらい`], 2, `つらい is emotionally hard to bear; だるい is a heavy, sluggish body.`],
      [`Which pair are both い-adjectives?`, [`寂《さび》しい and 怖《こわ》い`, `きれい and 悲《かな》しい`, `有名《ゆうめい》 and 痛《いた》い`], 0, `きれい and 有名《ゆうめい》 are な-adjectives.`],
      [`What does 大丈夫《だいじょうぶ》 では ありません でした mean?`, [`I am not all right.`, `Were you all right?`, `I was not all right.`], 2, `では ありません でした is the past negative of a な-adjective.`],
      [`How do you say "I wasn't sleepy last night"?`, [`昨日《きのう》 の 夜《よる》 は 眠《ねむ》くない でした。`, `昨日《きのう》 の 夜《よる》 は 眠《ねむ》くなかった です。`, `昨日《きのう》 の 夜《よる》 は 眠《ねむ》かった です。`], 1, `Drop い and add くなかった, then です.`]
    ] },

  /* ================= Review: The te-form ================= */

  { id: 'review-n5-te', level: 'N5', unit: 'The te-form', title: `Review: The te-form`, review: true, after: 'linking',
    summary: `Bring together the verb groups, the て-form, requests and permission, 〜て います and linking, and test them in mixed questions.`, draft: true,
    body: `<p>This unit gave you the verb groups and the て-form, and with them the requests of an examination, "is doing" and "is married", and ways to join a day into one sentence. Everything rests on making the て-form correctly.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>る-verb, う-verb, irregular</td><td>decides every form</td><td>寝《ね》る → 寝《ね》ます; 帰《かえ》る → 帰《かえ》ります</td></tr>
<tr><td>dictionary form</td><td>plain present; before 前《まえ》 に</td><td>寝《ね》る 前《まえ》 に 飲《の》みます。</td></tr>
<tr><td>て-form</td><td>る → て; う つ る → って; む ぶ ぬ → んで; く → いて; ぐ → いで; す → して</td><td>行《い》く → 行《い》って (exception)</td></tr>
<tr><td>〜て ください / 〜ないで ください</td><td>please do / please don't</td><td>無理《むり》しないで ください。</td></tr>
<tr><td>〜て も いい です か / 〜て は いけません</td><td>may I / you must not</td><td>写真《しゃしん》 を 撮《と》って も いい です か。</td></tr>
<tr><td>〜て もらえます か / 〜て いただけます か</td><td>softer requests</td><td>お名前《なまえ》 を 教《おし》えて いただけます か。</td></tr>
<tr><td>〜て います</td><td>in progress, state, habit</td><td>姉《あね》 は 大阪《おおさか》 に 住《す》んで います。</td></tr>
<tr><td>〜て, 〜くて, 〜で</td><td>join verbs, adjectives, nouns</td><td>この 部屋《へや》 は 静《しず》か で きれい です。</td></tr>
<tr><td>〜て から / 〜前《まえ》 に / 〜た 後《あと》 で</td><td>after / before / after</td><td>食《た》べた 後《あと》 で 散歩《さんぽ》します。</td></tr></table>
<h3>Watch out</h3>
<ul><li>帰《かえ》る, 入《はい》る and 切《き》る are う-verbs: 帰《かえ》って, never 帰《かえ》て.</li>
<li>行《い》く → 行《い》って is the one exception among く verbs.</li>
<li>"I know" is 知《し》って います, but "I don't know" is 知《し》りません.</li>
<li>前《まえ》 に takes the dictionary form; 後《あと》 で takes the た-form.</li>
<li>With patients, 〜ないで ください is gentler than 〜て は いけません.</li></ul>
<h3>Putting it together</h3>
<div class="ex"><b>家《いえ》 に 帰《かえ》って から、 少《すこ》し 休《やす》んで ください。</b><span>After you get home, please rest a little.</span></div>
<div class="ex"><b>姉《あね》 は 結婚《けっこん》して、 今《いま》 大阪《おおさか》 に 住《す》んで います。</b><span>My older sister got married and now lives in Osaka.</span></div>
<div class="ex"><b>ご飯《はん》 を 食《た》べた 後《あと》 で、 この 薬《くすり》 を 飲《の》んで います か。</b><span>Are you taking this medicine after meals?</span></div>
<div class="ex"><b>もう 一度《いちど》 ゆっくり 話《はな》して いただけます か。</b><span>Could you say that once more, slowly?</span></div>
<div class="ex"><b>少《すこ》し お話《はなし》 を 聞《き》いて も いい です か。</b><span>May I ask you about a few things?</span></div>
<div class="ex"><b>朝《あさ》 の 薬《くすり》 は まだ 飲《の》んで いません。</b><span>I haven't taken my morning medicine yet.</span></div>
<div class="note">When a て-form feels uncertain, go back one step: find the dictionary form, decide the group, then apply the rule. The た-form follows the same rule with た / だ.</div>`,
    quiz: [
      [`Which of these is a う-verb?`, [`見《み》る`, `入《はい》る`, `起《お》きる`], 1, `入《はい》る looks like a る-verb but is a う-verb: 入《はい》ります.`],
      [`What is the dictionary form of 呼《よ》びます?`, [`呼《よ》ぶ`, `呼《よ》びる`, `呼《よ》む`], 0, `び before ます becomes ぶ.`],
      [`What is the て-form of 入《はい》る?`, [`入《はい》て`, `入《はい》んで`, `入《はい》って`], 2, `入《はい》る is a う-verb ending in る, so it takes って.`],
      [`What is the て-form of 待《ま》つ?`, [`待《ま》って`, `待《ま》んで`, `待《ま》ちて`], 0, `Verbs ending in つ take って.`],
      [`What is the て-form of 話《はな》す?`, [`話《はな》いて`, `話《はな》して`, `話《はな》って`], 1, `Verbs ending in す take して.`],
      [`看護師《かんごし》 を ＿ ください。 "Please call a nurse."`, [`呼《よ》って`, `呼《よ》いて`, `呼《よ》んで`], 2, `呼《よ》ぶ ends in ぶ, so its て-form is 呼《よ》んで.`],
      [`Which sentence asks a patient not to drive today?`, [`今日《きょう》 は 運転《うんてん》しないで ください。`, `今日《きょう》 は 運転《うんてん》して ください。`, `今日《きょう》 は 運転《うんてん》して も いい です か。`], 0, `〜ないで ください is "please don't".`],
      [`What does 窓《まど》 を 開《あ》けて も いい です か mean?`, [`Please open the window.`, `May I open the window?`, `Shall we open the window?`], 1, `〜て も いい です か asks permission; "shall we" would be 開《あ》けましょう か.`],
      [`A patient is asked 山田《やまだ》先生《せんせい》 を 知《し》って います か。 How does the patient say "No, I don't know him"?`, [`いいえ、 知《し》って いません。`, `いいえ、 知《し》りました。`, `いいえ、 知《し》りません。`], 2, `The negative of 知《し》って います is 知《し》りません.`],
      [`How do you ask "Where do you work?"`, [`どこ で 働《はたら》いて います か。`, `どこ に 働《はたら》いて います か。`, `どこ で 働《はたら》きました か。`], 0, `A continuing job is 〜て います, and the place of work takes で.`],
      [`この 病院《びょういん》 は ＿ 大《おお》きい です。 "This hospital is new and big."`, [`新《あたら》しい で`, `新《あたら》しくて`, `新《あたら》しかった`], 1, `An い-adjective links with 〜くて.`],
      [`ご飯《はん》 を ＿ 後《あと》 で、 薬《くすり》 を 飲《の》んで ください。 "Please take the medicine after eating."`, [`食《た》べる`, `食《た》べて`, `食《た》べた`], 2, `〜後《あと》 で takes the た-form.`]
    ] }
);
