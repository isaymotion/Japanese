/* Lessons part 2: polite verbs, core particles, は and が, あります / います, invitations, adjectives, verb groups and the て-form.
   12 lessons, JLPT N5 scope. DRAFT FOR REVIEW by a native Japanese speaker (readings, conjugations and naturalness). */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  /* ===================== Unit: Verbs ===================== */
  { id: 'verbs-masu', level: 'N5', unit: 'Verbs', title: `Polite verbs: ます, ません, ました`, summary: `How to say what someone does, did, will do or does not do, in polite Japanese.`, draft: true,
    body: `<p>Most questions you will ask a patient turn on a verb: did you sleep, did you eat, do you take your medicine, will you come next week. In polite Japanese every verb ends in one of four endings, and the same ending covers habits and the future, so a small set of forms takes you a long way.</p>
<h3>Four polite endings</h3>
<table><tr><th>Meaning</th><th>Ending</th><th>Example: 飲《の》む (drink, take medicine)</th></tr>
<tr><td>do / will do</td><td>〜ます</td><td>飲《の》みます</td></tr>
<tr><td>do not / will not</td><td>〜ません</td><td>飲《の》みません</td></tr>
<tr><td>did</td><td>〜ました</td><td>飲《の》みました</td></tr>
<tr><td>did not</td><td>〜ません でした</td><td>飲《の》みません でした</td></tr></table>
<div class="ex"><b>毎朝《まいあさ》 薬《くすり》 を 飲《の》みます。</b><span>I take my medicine every morning.</span></div>
<div class="ex"><b>お酒《さけ》 は 飲《の》みません。</b><span>I don't drink alcohol.</span></div>
<div class="ex"><b>昨日《きのう》 は よく 寝《ね》ました。</b><span>I slept well yesterday.</span></div>
<div class="ex"><b>今朝《けさ》 は 朝《あさ》ご飯《はん》 を 食《た》べません でした。</b><span>I didn't eat breakfast this morning.</span></div>
<p>In these sentences を marks the thing that is eaten or drunk. It is covered in the next lesson.</p>
<h3>The verb comes last</h3>
<p>Japanese word order is topic, then time, place and object, and the verb at the very end. To make a question, add か after the verb. There is no change in word order.</p>
<div class="ex"><b>私《わたし》 は 毎晩《まいばん》 十一時《じゅういちじ》 に 寝《ね》ます。</b><span>I go to bed at eleven every night.</span></div>
<div class="ex"><b>母《はは》 は 毎日《まいにち》 病院《びょういん》 に 来《き》ます。</b><span>My mother comes to the hospital every day.</span></div>
<div class="ex"><b>朝《あさ》ご飯《はん》 を 食《た》べました か。</b><span>Did you eat breakfast?</span></div>
<h3>No future tense</h3>
<p>〜ます means both "I do (habitually)" and "I will do". Context or a time word tells you which. Time words that are relative to today, such as 今日《きょう》, 明日《あした》, 昨日《きのう》, 毎日《まいにち》, 今朝《けさ》 and 来週《らいしゅう》, take no particle. Clock times and days of the week take に.</p>
<div class="ex"><b>明日《あした》 また 来《き》ます。</b><span>I will come again tomorrow.</span></div>
<div class="ex"><b>月曜日《げつようび》 に 病院《びょういん》 に 行《い》きます。</b><span>I will go to the hospital on Monday.</span></div>
<div class="ex"><b>毎日《まいにち》 少《すこ》し 散歩《さんぽ》 します。</b><span>I take a short walk every day.</span></div>
<h3>Ten common verbs</h3>
<table><tr><th>〜ます</th><th>〜ません</th><th>Meaning</th></tr>
<tr><td>食《た》べます</td><td>食《た》べません</td><td>eat</td></tr>
<tr><td>飲《の》みます</td><td>飲《の》みません</td><td>drink; take (medicine)</td></tr>
<tr><td>寝《ね》ます</td><td>寝《ね》ません</td><td>sleep, go to bed</td></tr>
<tr><td>起《お》きます</td><td>起《お》きません</td><td>wake up, get up</td></tr>
<tr><td>行《い》きます</td><td>行《い》きません</td><td>go</td></tr>
<tr><td>来《き》ます</td><td>来《き》ません</td><td>come</td></tr>
<tr><td>帰《かえ》ります</td><td>帰《かえ》りません</td><td>go home, return</td></tr>
<tr><td>見《み》ます</td><td>見《み》ません</td><td>see, watch, look at</td></tr>
<tr><td>話《はな》します</td><td>話《はな》しません</td><td>speak, talk</td></tr>
<tr><td>します</td><td>しません</td><td>do</td></tr></table>
<div class="ex"><b>昨日《きのう》 は 何時《なんじ》 に 起《お》きました か。</b><span>What time did you get up yesterday?</span></div>
<div class="ex"><b>週末《しゅうまつ》 は 家族《かぞく》 と 話《はな》しません でした。</b><span>I didn't talk with my family at the weekend.</span></div>
<div class="note">The past negative is 〜ません + でした: 寝《ね》ません でした "did not sleep". Learners often try to add a past ending to ます first, which does not exist. Also note that Japanese "drinks" medicine: 薬《くすり》 を 飲《の》みます is used for tablets as well as liquids.</div>`,
    quiz: [
      [`How do you say "I did not eat"?`, [`食《た》べました`, `食《た》べません でした`, `食《た》べません`], 1, `The past negative is 〜ません followed by でした.`],
      [`明日《あした》 病院《びょういん》 に 行《い》きます。 What time does 行《い》きます refer to here?`, [`The future`, `The past`, `Only a habit, never the future`], 0, `〜ます covers the future; 明日《あした》 "tomorrow" makes it clear.`],
      [`Where does the verb go in a Japanese sentence?`, [`First`, `After the subject`, `At the end`], 2, `Japanese puts the verb last, and か comes after it in a question.`],
      [`Which time word needs に after it?`, [`明日《あした》`, `毎朝《まいあさ》`, `七時《しちじ》`, `昨日《きのう》`], 2, `Clock times take に; words relative to today such as 明日《あした》 and 毎朝《まいあさ》 do not.`],
      [`What does 薬《くすり》 を 飲《の》みました か mean?`, [`Did you take the medicine?`, `Will you buy the medicine?`, `Is this the medicine?`], 0, `飲《の》む is used for taking medicine, and 〜ました か asks about the past.`],
      [`Which is the polite negative of します?`, [`しません`, `しないです`, `しましません`], 0, `Replace ます with ません: しません.`]
    ] },

  { id: 'particles-core', level: 'N5', unit: 'Verbs', title: `Core particles: を, に, で, へ, と, から, まで`, summary: `The small words after nouns that show what is the object, where, when, how and with whom.`, draft: true,
    body: `<p>Particles are short words placed after a noun to show its role in the sentence. They do the work that word order and prepositions do in English. With a handful of them you can ask when a patient sleeps, where they work, how they came to the clinic and who they live with.</p>
<h3>One use each</h3>
<table><tr><th>Particle</th><th>Main use</th><th>English</th></tr>
<tr><td>を</td><td>object of the verb</td><td>(no word)</td></tr>
<tr><td>に</td><td>point in time; destination; the person who receives</td><td>at, to</td></tr>
<tr><td>で</td><td>place where an action happens; means or tool</td><td>at, in, by</td></tr>
<tr><td>へ</td><td>direction of movement</td><td>to, toward</td></tr>
<tr><td>と</td><td>together with a person</td><td>with</td></tr>
<tr><td>から / まで</td><td>starting point / end point (time or place)</td><td>from / until, to</td></tr></table>
<div class="ex"><b>毎朝《まいあさ》 コーヒー を 飲《の》みます。</b><span>I drink coffee every morning.</span></div>
<div class="ex"><b>七時《しちじ》 に 起《お》きます。</b><span>I get up at seven.</span></div>
<div class="ex"><b>明日《あした》 病院《びょういん》 に 行《い》きます。</b><span>I'm going to the hospital tomorrow.</span></div>
<div class="ex"><b>毎晩《まいばん》 母《はは》 に 電話《でんわ》 します。</b><span>I phone my mother every night.</span></div>
<div class="ex"><b>家《いえ》 で 晩《ばん》ご飯《はん》 を 食《た》べます。</b><span>I eat dinner at home.</span></div>
<div class="ex"><b>電車《でんしゃ》 で 病院《びょういん》 に 来《き》ました。</b><span>I came to the hospital by train.</span></div>
<div class="ex"><b>来週《らいしゅう》 マニラ へ 帰《かえ》ります。</b><span>I'm going back to Manila next week.</span></div>
<div class="ex"><b>週末《しゅうまつ》 は 友達《ともだち》 と 映画《えいが》 を 見《み》ました。</b><span>At the weekend I watched a film with a friend.</span></div>
<div class="ex"><b>九時《くじ》 から 五時《ごじ》 まで 働《はたら》きます。</b><span>I work from nine to five.</span></div>
<h3>に or で for places</h3>
<p>Use に for the place you go to (and, in the next lessons, the place where something or someone is). Use で for the place where you do something.</p>
<div class="ex"><b>図書館《としょかん》 に 行《い》きます。</b><span>I go to the library.</span></div>
<div class="ex"><b>図書館《としょかん》 で 本《ほん》 を 読《よ》みます。</b><span>I read books at the library.</span></div>
<h3>に or へ for direction</h3>
<p>With verbs of going and coming, に and へ are nearly interchangeable; へ puts a little more weight on the direction. Only に is used for times and for the person who receives something. As a particle, へ is pronounced <i>e</i> and を is pronounced <i>o</i>.</p>
<div class="note">Do not put に after time words relative to today: 明日《あした》 行《い》きます, not 明日《あした》 に 行《い》きます. Use に with clock times, dates and days of the week: 三時《さんじ》 に, 月曜日《げつようび》 に.</div>`,
    quiz: [
      [`家《いえ》 ＿ テレビ を 見《み》ます。 Which particle fits?`, [`に`, `で`, `を`], 1, `The TV watching happens at home, so the place of action takes で.`],
      [`十時《じゅうじ》 ＿ 寝《ね》ます。 Which particle fits?`, [`に`, `で`, `と`], 0, `A clock time takes に.`],
      [`バス ＿ 来《き》ました。 "I came by bus." Which particle fits?`, [`を`, `へ`, `で`], 2, `The means of transport takes で.`],
      [`What does 妹《いもうと》 と 来《き》ました mean?`, [`I came to my younger sister.`, `I came with my younger sister.`, `My younger sister came alone.`], 1, `と after a person means "together with".`],
      [`How is the particle へ pronounced?`, [`he`, `e`, `ha`], 1, `As a particle, へ is said e.`],
      [`Which particle can NOT replace に in 病院《びょういん》 に 行《い》きます?`, [`へ`, `で`, `と`], 1, `へ also marks direction, but で marks where an action happens and と means "with", so neither can mark where you go.`]
    ] },

  { id: 'wa-vs-ga', level: 'N5', unit: 'Verbs', title: `は and が`, summary: `は sets the topic, が marks the subject, especially new information, question words and certain predicates.`, draft: true,
    body: `<p>は and が both often translate as nothing at all in English, yet they change what a sentence means. In an interview they matter: "where does it hurt" and "who came with you" need が, while "as for sleep, how is it" needs は.</p>
<h3>は: the topic</h3>
<p>は marks what the sentence is about, roughly "as for X". The rest of the sentence comments on it. Once the topic is clear, it is usually left out of the following sentences.</p>
<div class="ex"><b>私《わたし》 は 医者《いしゃ》 です。</b><span>I am a doctor.</span></div>
<div class="ex"><b>夜《よる》 は よく 寝《ね》ます か。</b><span>Do you sleep well at night?</span></div>
<h3>が: the subject, new information, question words</h3>
<p>が points at who or what does or is something, especially when that is the new piece of information. A question word cannot take は: use だれ が, 何《なに》 が, どこ が. The answer also uses が.</p>
<div class="ex"><b>だれ が 一緒《いっしょ》 に 来《き》ました か。</b><span>Who came with you?</span></div>
<div class="ex"><b>娘《むすめ》 が 来《き》ました。</b><span>My daughter came.</span></div>
<div class="ex"><b>何《なに》 が いちばん つらい です か。</b><span>What is the hardest thing for you?</span></div>
<div class="ex"><b>どこ が 痛《いた》い です か。</b><span>Where does it hurt?</span></div>
<h3>Words that take が</h3>
<p>With some words the thing liked, understood, owned or hurting is marked with が, and the person is the topic with は: X は Y が 〜.</p>
<table><tr><th>Word</th><th>Meaning</th><th>Pattern</th></tr>
<tr><td>好《す》き</td><td>like</td><td>私《わたし》 は 魚《さかな》 が 好《す》き です</td></tr>
<tr><td>わかる</td><td>understand</td><td>英語《えいご》 が わかります</td></tr>
<tr><td>ある</td><td>have, there is (things)</td><td>熱《ねつ》 が あります</td></tr>
<tr><td>いる</td><td>have, there is (people, animals)</td><td>子《こ》ども が います</td></tr>
<tr><td>痛《いた》い</td><td>hurt</td><td>頭《あたま》 が 痛《いた》い です</td></tr>
<tr><td>できる</td><td>can do</td><td>料理《りょうり》 が できます</td></tr></table>
<div class="ex"><b>私《わたし》 は 甘《あま》い もの が 好《す》き です。</b><span>I like sweet things.</span></div>
<div class="ex"><b>母《はは》 は 英語《えいご》 が 少《すこ》し わかります。</b><span>My mother understands a little English.</span></div>
<div class="ex"><b>頭《あたま》 が 痛《いた》い です。</b><span>I have a headache.</span></div>
<div class="ex"><b>夫《おっと》 は 料理《りょうり》 が できます。</b><span>My husband can cook.</span></div>
<h3>は for contrast</h3>
<p>は can also set one thing against another: "this, at least" or "but not that".</p>
<div class="ex"><b>朝《あさ》 は 食欲《しょくよく》 が ありません。</b><span>In the morning I have no appetite.</span></div>
<div class="ex"><b>夜《よる》 は 少《すこ》し 食《た》べます。</b><span>In the evening I eat a little.</span></div>
<div class="note">A common mistake is だれ は or 何《なに》 は. Question words always take が when they are the subject: だれ が 来《き》ました か, never だれ は 来《き》ました か.</div>`,
    quiz: [
      [`＿ が 痛《いた》い です か。 Which word fits?`, [`どこ`, `どこ は`, `どこ を`], 0, `A question word as the subject takes が: どこ が 痛《いた》い です か.`],
      [`Which sentence is correct for "Who came?"`, [`だれ は 来《き》ました か。`, `だれ が 来《き》ました か。`, `だれ を 来《き》ました か。`], 1, `Question words take が, not は.`],
      [`私《わたし》 は 犬《いぬ》 ＿ 好《す》き です。 Which particle fits?`, [`を`, `は`, `が`], 2, `The thing liked is marked with が.`],
      [`What does は usually mark?`, [`The topic of the sentence`, `The object of the verb`, `The place of an action`], 0, `は marks what the sentence is about.`],
      [`朝《あさ》 は 食欲《しょくよく》 が ありません。 What does は add here?`, [`A question`, `A contrast with other times of day`, `The object of ありません`], 1, `は on 朝《あさ》 suggests "in the morning, at least", in contrast with other times.`]
    ] },

  { id: 'arimasu-imasu', level: 'N5', unit: 'Verbs', title: `あります and います`, summary: `Saying that something or someone is somewhere, and saying what someone has.`, draft: true,
    body: `<p>"There is" and "I have" are the same verb in Japanese. You will use it to ask about family, fever, appetite and time, and to give directions inside the hospital. The only choice is between two verbs: あります for things and います for living beings.</p>
<h3>Things and living beings</h3>
<table><tr><th></th><th>Things, plants, events</th><th>People, animals</th></tr>
<tr><td>there is / have</td><td>あります</td><td>います</td></tr>
<tr><td>there is not / don't have</td><td>ありません</td><td>いません</td></tr>
<tr><td>there was / had</td><td>ありました</td><td>いました</td></tr>
<tr><td>there was not / didn't have</td><td>ありません でした</td><td>いません でした</td></tr></table>
<p>The basic pattern is place に thing が あります / います.</p>
<div class="ex"><b>診察室《しんさつしつ》 に 机《つくえ》 が あります。</b><span>There is a desk in the consultation room.</span></div>
<div class="ex"><b>待合室《まちあいしつ》 に 患者《かんじゃ》さん が 三人《さんにん》 います。</b><span>There are three patients in the waiting room.</span></div>
<h3>Having</h3>
<p>The same verbs are used for having family, a fever, an appetite or time. The thing you have takes が.</p>
<div class="ex"><b>きょうだい が います か。</b><span>Do you have brothers or sisters?</span></div>
<div class="ex"><b>はい、 兄《あに》 が 一人《ひとり》 います。</b><span>Yes, I have one older brother.</span></div>
<div class="ex"><b>昨日《きのう》 から 熱《ねつ》 が あります。</b><span>I've had a fever since yesterday.</span></div>
<div class="ex"><b>最近《さいきん》 あまり 食欲《しょくよく》 が ありません。</b><span>Lately I don't have much appetite.</span></div>
<div class="ex"><b>今《いま》 少《すこ》し 時間《じかん》 が あります か。</b><span>Do you have a little time now?</span></div>
<h3>Location words</h3>
<p>Location words follow the thing they relate to with の, then に: 机《つくえ》 の 上《うえ》 に "on the desk".</p>
<table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td>上《うえ》</td><td>on, above</td></tr>
<tr><td>下《した》</td><td>under, below</td></tr>
<tr><td>中《なか》</td><td>in, inside</td></tr>
<tr><td>前《まえ》</td><td>in front of</td></tr>
<tr><td>後《うし》ろ</td><td>behind</td></tr>
<tr><td>となり</td><td>next to</td></tr>
<tr><td>近《ちか》く</td><td>near, nearby</td></tr></table>
<div class="ex"><b>机《つくえ》 の 上《うえ》 に 薬《くすり》 が あります。</b><span>The medicine is on the desk.</span></div>
<div class="ex"><b>病院《びょういん》 の 近《ちか》く に 薬局《やっきょく》 が あります。</b><span>There is a pharmacy near the hospital.</span></div>
<div class="ex"><b>ベッド の 下《した》 に 猫《ねこ》 が います。</b><span>There is a cat under the bed.</span></div>
<p>When the thing is already the topic, use は and put the place after it: X は place に あります.</p>
<div class="ex"><b>トイレ は どこ に あります か。</b><span>Where is the toilet?</span></div>
<div class="ex"><b>受付《うけつけ》 の となり に あります。</b><span>It's next to the reception desk.</span></div>
<div class="note">People always take います: 子《こ》ども が 二人《ふたり》 います, never 子《こ》ども が あります. A common slip is to use あります for patients, staff or family members.</div>`,
    quiz: [
      [`待合室《まちあいしつ》 に 看護師《かんごし》 が ＿。 Which verb fits?`, [`あります`, `います`, `です`], 1, `A nurse is a person, so います.`],
      [`How do you say "I have a fever"?`, [`熱《ねつ》 が います。`, `熱《ねつ》 を あります。`, `熱《ねつ》 が あります。`], 2, `A fever is a thing, marked with が, and takes あります.`],
      [`What does 薬局《やっきょく》 は 病院《びょういん》 の 前《まえ》 に あります mean?`, [`The pharmacy is in front of the hospital.`, `The pharmacy is behind the hospital.`, `The hospital is inside the pharmacy.`], 0, `前《まえ》 means "in front of".`],
      [`Which word means "behind"?`, [`となり`, `後《うし》ろ`, `下《した》`, `近《ちか》く`], 1, `後《うし》ろ is "behind"; となり is "next to".`],
      [`How do you say "I don't have any brothers or sisters"?`, [`きょうだい が ありません。`, `きょうだい が いません。`, `きょうだい は いました。`], 1, `Brothers and sisters are people, so the negative is いません.`]
    ] },

  { id: 'invitations', level: 'N5', unit: 'Verbs', title: `Invitations and offers: 〜ません か, 〜ましょう, 〜ましょう か`, summary: `Inviting, suggesting, offering help, and saying yes or a soft no.`, draft: true,
    body: `<p>Three small changes to the ます ending let you invite someone, suggest doing something together, or offer help. "Let's think about it together" and "Shall I open the window?" are everyday phrases on a ward. Knowing the soft way to say no matters just as much, because a direct "no" sounds abrupt in Japanese.</p>
<h3>Three forms</h3>
<table><tr><th>Form</th><th>Use</th><th>Example</th></tr>
<tr><td>〜ません か</td><td>polite invitation: "won't you...?" (leaves the choice to the listener)</td><td>行《い》きません か</td></tr>
<tr><td>〜ましょう</td><td>suggestion: "let's..."</td><td>行《い》きましょう</td></tr>
<tr><td>〜ましょう か</td><td>"shall we...?" or an offer: "shall I...?"</td><td>持《も》ちましょう か</td></tr></table>
<div class="ex"><b>一緒《いっしょ》 に 昼《ひる》ご飯《はん》 を 食《た》べません か。</b><span>Would you like to have lunch together?</span></div>
<div class="ex"><b>明日《あした》 一緒《いっしょ》 に 散歩《さんぽ》 しません か。</b><span>Would you like to go for a walk together tomorrow?</span></div>
<div class="ex"><b>少《すこ》し 休《やす》みましょう。</b><span>Let's take a short rest.</span></div>
<div class="ex"><b>一緒《いっしょ》 に 考《かんが》えましょう。</b><span>Let's think about it together.</span></div>
<div class="ex"><b>何時《なんじ》 に 会《あ》いましょう か。</b><span>What time shall we meet?</span></div>
<h3>Offering help</h3>
<p>〜ましょう か with yourself as the one acting is an offer.</p>
<div class="ex"><b>窓《まど》 を 開《あ》けましょう か。</b><span>Shall I open the window?</span></div>
<div class="ex"><b>荷物《にもつ》 を 持《も》ちましょう か。</b><span>Shall I carry your bag?</span></div>
<h3>Saying yes and a soft no</h3>
<p>To accept an invitation: いい です ね "that sounds good", or ぜひ "I'd love to". To accept an offer: お願《ねが》いします "yes, please". To decline, apologise, name the time, and leave the sentence unfinished with ちょっと…; the listener understands the rest.</p>
<div class="ex"><b>いい です ね。 行《い》きましょう。</b><span>That sounds good. Let's go.</span></div>
<div class="ex"><b>すみません、 明日《あした》 は ちょっと…。</b><span>I'm sorry, tomorrow is a bit... (difficult).</span></div>
<div class="ex"><b>大丈夫《だいじょうぶ》 です。 ありがとう ございます。</b><span>I'm fine, thank you. (declining an offer)</span></div>
<div class="note">Answering an invitation with いいえ、 行《い》きません sounds cold, as if you are rejecting the person. Use すみません and ちょっと… instead. Also, 〜ません か is an invitation, not a real negative question: 行《い》きません か means "won't you come?", not "aren't you going?".</div>`,
    quiz: [
      [`Which is a polite invitation, "Would you like to go?"`, [`行《い》きません か。`, `行《い》きました か。`, `行《い》きません でした。`], 0, `〜ません か is the polite invitation form.`],
      [`窓《まど》 を 閉《し》めましょう か。 What does this sentence do?`, [`It orders someone to close the window.`, `It offers to close the window.`, `It asks if the window was closed.`], 1, `〜ましょう か with the speaker acting is an offer: "Shall I close the window?"`],
      [`How do you softly decline an invitation for Saturday?`, [`いいえ、 行《い》きません。`, `土曜日《どようび》 は ちょっと…。`, `行《い》きましょう。`], 1, `Leaving the sentence unfinished with ちょっと… is the polite way to say no.`],
      [`Someone offers to carry your bag. How do you accept?`, [`お願《ねが》いします。`, `ちょっと…。`, `行《い》きません か。`], 0, `お願《ねが》いします accepts an offer of help.`],
      [`What does 少《すこ》し 休《やす》みましょう mean?`, [`I took a short rest.`, `Let's take a short rest.`, `I won't rest.`], 1, `〜ましょう means "let's".`]
    ] },

  /* ===================== Unit: Adjectives ===================== */
  { id: 'i-adjectives', level: 'N5', unit: 'Adjectives', title: `い-adjectives`, summary: `Adjectives ending in い change their own ending for negative and past, and are the main words for symptoms and feelings.`, draft: true,
    body: `<p>Many words for pain, sleepiness, tiredness and mood are い-adjectives: 痛《いた》い, 眠《ねむ》い, だるい, つらい, 悲《かな》しい. They behave a little like verbs: the adjective itself changes for negative and past, and です stays the same at the end.</p>
<h3>Four forms</h3>
<p>Drop the final い and add くない (not), かった (was) or くなかった (was not). Then add です for politeness.</p>
<table><tr><th>Adjective</th><th>is</th><th>is not</th><th>was</th><th>was not</th></tr>
<tr><td>痛《いた》い hurt</td><td>痛《いた》い です</td><td>痛《いた》くない です</td><td>痛《いた》かった です</td><td>痛《いた》くなかった です</td></tr>
<tr><td>眠《ねむ》い sleepy</td><td>眠《ねむ》い です</td><td>眠《ねむ》くない です</td><td>眠《ねむ》かった です</td><td>眠《ねむ》くなかった です</td></tr>
<tr><td>忙《いそが》しい busy</td><td>忙《いそが》しい です</td><td>忙《いそが》しくない です</td><td>忙《いそが》しかった です</td><td>忙《いそが》しくなかった です</td></tr>
<tr><td>いい good</td><td>いい です</td><td>よくない です</td><td>よかった です</td><td>よくなかった です</td></tr></table>
<p>いい is the one irregular adjective: every form except いい itself is built from よい. The negative may also be said 〜く ありません (痛《いた》く ありません), which is a little more formal.</p>
<div class="ex"><b>お腹《なか》 が 痛《いた》い です。</b><span>I have a stomachache.</span></div>
<div class="ex"><b>今日《きょう》 は 痛《いた》くない です。</b><span>It doesn't hurt today.</span></div>
<div class="ex"><b>先週《せんしゅう》 は 仕事《しごと》 が 忙《いそが》しかった です。</b><span>Work was busy last week.</span></div>
<div class="ex"><b>昨日《きのう》 の 夜《よる》 は 眠《ねむ》くなかった です。</b><span>I wasn't sleepy last night.</span></div>
<div class="ex"><b>昨日《きのう》 は 気分《きぶん》 が よかった です。</b><span>I felt good yesterday.</span></div>
<h3>Before a noun</h3>
<p>An い-adjective goes straight in front of a noun, with nothing added.</p>
<div class="ex"><b>悪《わる》い 夢《ゆめ》 を 見《み》ました。</b><span>I had a bad dream.</span></div>
<div class="ex"><b>暗《くら》い 部屋《へや》 は 怖《こわ》い です。</b><span>Dark rooms are scary for me.</span></div>
<h3>How much: とても, すこし, あまり</h3>
<p>とても "very" and 少《すこ》し "a little" go with the positive. あまり "not very" goes only with the negative.</p>
<div class="ex"><b>朝《あさ》 は 体《からだ》 が とても だるい です。</b><span>In the mornings my body feels very heavy and tired.</span></div>
<div class="ex"><b>最近《さいきん》 少《すこ》し 寂《さび》しい です。</b><span>I've been feeling a little lonely lately.</span></div>
<div class="ex"><b>あまり よくない です。</b><span>It's not very good.</span></div>
<h3>Feelings and symptoms</h3>
<table><tr><th>Adjective</th><th>Meaning</th></tr>
<tr><td>痛《いた》い</td><td>painful, it hurts</td></tr>
<tr><td>眠《ねむ》い</td><td>sleepy</td></tr>
<tr><td>だるい</td><td>sluggish, heavy, listless (body)</td></tr>
<tr><td>つらい</td><td>hard to bear, painful (emotionally)</td></tr>
<tr><td>悲《かな》しい</td><td>sad</td></tr>
<tr><td>寂《さび》しい</td><td>lonely</td></tr>
<tr><td>怖《こわ》い</td><td>scary; afraid</td></tr>
<tr><td>忙《いそが》しい</td><td>busy</td></tr>
<tr><td>いい</td><td>good</td></tr>
<tr><td>悪《わる》い</td><td>bad</td></tr></table>
<div class="note">The past belongs to the adjective, not to です: 痛《いた》かった です "it hurt". Saying 痛《いた》い でした is a very common beginner mistake. In the same way, the negative of いい is よくない, never いくない.</div>`,
    quiz: [
      [`How do you say "It hurt"?`, [`痛《いた》い でした。`, `痛《いた》かった です。`, `痛《いた》くない です。`], 1, `The past of an い-adjective is 〜かった, followed by です.`],
      [`What is the negative of いい?`, [`いくない`, `よくない`, `いいじゃない`], 1, `いい is irregular: its other forms come from よい, so the negative is よくない.`],
      [`あまり 眠《ねむ》＿ です。 "I'm not very sleepy." What fills the gap?`, [`い`, `かった`, `くない`], 2, `あまり is used with a negative: 眠《ねむ》くない です.`],
      [`Which word describes a heavy, listless body?`, [`だるい`, `寂《さび》しい`, `怖《こわ》い`, `忙《いそが》しい`], 0, `だるい is used for a sluggish, heavy feeling in the body.`],
      [`How do you say "a sad story"?`, [`悲《かな》しい な 話《はなし》`, `悲《かな》しい 話《はなし》`, `悲《かな》しく 話《はなし》`], 1, `An い-adjective goes directly before the noun with nothing added.`],
      [`What is the past negative of 忙《いそが》しい?`, [`忙《いそが》しくなかった です`, `忙《いそが》しくない でした`, `忙《いそが》しかった でした`], 0, `Drop い and add くなかった, then です.`]
    ] },

  { id: 'na-adjectives', level: 'N5', unit: 'Adjectives', title: `な-adjectives`, summary: `Adjectives that work like nouns: they change です, and take な before a noun.`, draft: true,
    body: `<p>The second kind of adjective includes words you will hear daily: 大丈夫《だいじょうぶ》 "all right", 元気《げんき》 "well", 心配《しんぱい》 "worried", 好《す》き "like". These do not change their own ending. Instead, the です after them changes, just as with nouns.</p>
<h3>Forms</h3>
<table><tr><th>Adjective</th><th>is</th><th>is not</th><th>was</th><th>was not</th><th>before a noun</th></tr>
<tr><td>元気《げんき》 well</td><td>元気《げんき》 です</td><td>元気《げんき》 では ありません</td><td>元気《げんき》 でした</td><td>元気《げんき》 では ありません でした</td><td>元気《げんき》 な 人《ひと》</td></tr>
<tr><td>静《しず》か quiet</td><td>静《しず》か です</td><td>静《しず》か では ありません</td><td>静《しず》か でした</td><td>静《しず》か では ありません でした</td><td>静《しず》か な 部屋《へや》</td></tr></table>
<p>In conversation では ありません is often said じゃ ありません. Both are polite.</p>
<div class="ex"><b>母《はは》 は 元気《げんき》 です。</b><span>My mother is well.</span></div>
<div class="ex"><b>父《ちち》 は あまり 元気《げんき》 では ありません。</b><span>My father is not very well.</span></div>
<div class="ex"><b>大丈夫《だいじょうぶ》 です か。</b><span>Are you all right?</span></div>
<div class="ex"><b>先月《せんげつ》 は 仕事《しごと》 が 大変《たいへん》 でした。</b><span>Work was tough last month.</span></div>
<div class="ex"><b>週末《しゅうまつ》 は 暇《ひま》 でした。</b><span>I was free at the weekend.</span></div>
<div class="ex"><b>息子《むすこ》 の こと が 心配《しんぱい》 です。</b><span>I'm worried about my son.</span></div>
<h3>な before a noun</h3>
<p>Put な between the adjective and the noun it describes.</p>
<div class="ex"><b>静《しず》か な 部屋《へや》 で 休《やす》みます。</b><span>I rest in a quiet room.</span></div>
<div class="ex"><b>好《す》き な 食《た》べ物《もの》 は 何《なん》 です か。</b><span>What food do you like?</span></div>
<div class="ex"><b>何《なに》 か 心配《しんぱい》 な こと は あります か。</b><span>Is there anything you are worried about?</span></div>
<h3>Common な-adjectives</h3>
<table><tr><th>Adjective</th><th>Meaning</th></tr>
<tr><td>好《す》き</td><td>liked (I like)</td></tr>
<tr><td>嫌《きら》い</td><td>disliked (I dislike)</td></tr>
<tr><td>上手《じょうず》</td><td>skilful, good at</td></tr>
<tr><td>元気《げんき》</td><td>well, healthy, lively</td></tr>
<tr><td>大丈夫《だいじょうぶ》</td><td>all right, OK</td></tr>
<tr><td>心配《しんぱい》</td><td>worried, worrying</td></tr>
<tr><td>暇《ひま》</td><td>free, not busy</td></tr>
<tr><td>大変《たいへん》</td><td>hard, tough</td></tr>
<tr><td>静《しず》か</td><td>quiet</td></tr>
<tr><td>きれい</td><td>pretty, clean</td></tr>
<tr><td>有名《ゆうめい》</td><td>famous</td></tr></table>
<div class="ex"><b>この 病院《びょういん》 は きれい です ね。</b><span>This hospital is clean, isn't it.</span></div>
<div class="note">きれい, 嫌《きら》い and 有名《ゆうめい》 end in an い sound but are な-adjectives. Say きれい では ありません, not きれくない, and 嫌《きら》い な 食《た》べ物《もの》, not 嫌《きら》い 食《た》べ物《もの》. Also, 上手《じょうず》 praises others; it sounds boastful about yourself.</div>`,
    quiz: [
      [`How do you say "It is not quiet"?`, [`静《しず》か くない です。`, `静《しず》か では ありません。`, `静《しず》か でした。`], 1, `な-adjectives change です: 〜では ありません.`],
      [`＿ 人《ひと》 "a famous person". Which is correct?`, [`有名《ゆうめい》 な`, `有名《ゆうめい》`, `有名《ゆうめい》い`], 0, `有名《ゆうめい》 is a な-adjective, so な comes before the noun.`],
      [`Which of these is a な-adjective?`, [`悲《かな》しい`, `寂《さび》しい`, `きれい`, `眠《ねむ》い`], 2, `きれい ends in an い sound but is a な-adjective.`],
      [`What does 大丈夫《だいじょうぶ》 でした か mean?`, [`Were you all right?`, `Are you worried?`, `Is it free?`], 0, `でした か asks about the past: "Were you all right?"`],
      [`How do you say "It was tough" with 大変《たいへん》?`, [`大変《たいへん》かった です。`, `大変《たいへん》 でした。`, `大変《たいへん》 な です。`], 1, `The past of a な-adjective is でした.`]
    ] },

  /* ===================== Unit: The te-form ===================== */
  { id: 'verb-groups', level: 'N5', unit: 'The te-form', title: `The three verb groups and the dictionary form`, summary: `Every verb belongs to one of three groups, and the group decides how it conjugates.`, draft: true,
    body: `<p>Before you can make the て-form, the plain forms or the "before doing" pattern, you need to know which group a verb belongs to. There are only three groups and two irregular verbs, and once you know the group the rules are completely regular.</p>
<h3>The groups</h3>
<table><tr><th>Group</th><th>Dictionary form</th><th>Examples (dictionary form / ます form)</th></tr>
<tr><td>る-verbs (ichidan)</td><td>ends in る, with an <i>i</i> or <i>e</i> sound before it</td><td>食《た》べる / 食《た》べます; 寝《ね》る / 寝《ね》ます; 起《お》きる / 起《お》きます; 見《み》る / 見《み》ます</td></tr>
<tr><td>う-verbs (godan)</td><td>ends in an <i>u</i> sound: う く ぐ す つ ぬ ぶ む る</td><td>飲《の》む / 飲《の》みます; 書《か》く / 書《か》きます; 話《はな》す / 話《はな》します; 待《ま》つ / 待《ま》ちます; 買《か》う / 買《か》います</td></tr>
<tr><td>irregular</td><td>two verbs</td><td>する / します; 来《く》る / 来《き》ます</td></tr></table>
<h3>The dictionary form</h3>
<p>The dictionary form is the plain present form. It is what you find in a dictionary, and it is used before many patterns such as 〜前《まえ》 に "before doing" and in casual speech.</p>
<h3>From ます form to dictionary form</h3>
<p>For る-verbs, remove ます and add る. For う-verbs, the sound before ます is an <i>i</i> sound; change it to the matching <i>u</i> sound. The two irregular verbs must be memorised.</p>
<table><tr><th>Before ます</th><th>Becomes</th><th>Example</th></tr>
<tr><td>い</td><td>う</td><td>買《か》います → 買《か》う</td></tr>
<tr><td>き</td><td>く</td><td>書《か》きます → 書《か》く</td></tr>
<tr><td>ぎ</td><td>ぐ</td><td>泳《およ》ぎます → 泳《およ》ぐ</td></tr>
<tr><td>し</td><td>す</td><td>話《はな》します → 話《はな》す</td></tr>
<tr><td>ち</td><td>つ</td><td>待《ま》ちます → 待《ま》つ</td></tr>
<tr><td>に</td><td>ぬ</td><td>死《し》にます → 死《し》ぬ</td></tr>
<tr><td>び</td><td>ぶ</td><td>呼《よ》びます → 呼《よ》ぶ</td></tr>
<tr><td>み</td><td>む</td><td>飲《の》みます → 飲《の》む</td></tr>
<tr><td>り</td><td>る</td><td>帰《かえ》ります → 帰《かえ》る</td></tr></table>
<h3>う-verbs that look like る-verbs</h3>
<p>A verb ending in <i>-iru</i> or <i>-eru</i> is usually a る-verb, but some common ones are う-verbs. These have to be learned as a list. Their ます forms keep り: 帰《かえ》ります. A る-verb only drops る: 寝《ね》る → 寝《ね》ます.</p>
<table><tr><th>Dictionary form</th><th>ます form</th><th>Meaning</th></tr>
<tr><td>帰《かえ》る</td><td>帰《かえ》ります</td><td>go home</td></tr>
<tr><td>入《はい》る</td><td>入《はい》ります</td><td>enter; take (a bath)</td></tr>
<tr><td>走《はし》る</td><td>走《はし》ります</td><td>run</td></tr>
<tr><td>知《し》る</td><td>知《し》ります</td><td>come to know</td></tr>
<tr><td>切《き》る</td><td>切《き》ります</td><td>cut</td></tr>
<tr><td>要《い》る</td><td>要《い》ります</td><td>need</td></tr></table>
<div class="ex"><b>毎晩《まいばん》 七時《しちじ》 に 家《いえ》 に 帰《かえ》ります。</b><span>I get home at seven every evening.</span></div>
<div class="ex"><b>寝《ね》る 前《まえ》 に お風呂《ふろ》 に 入《はい》ります。</b><span>I take a bath before going to bed.</span></div>
<div class="ex"><b>毎朝《まいあさ》 公園《こうえん》 を 走《はし》ります。</b><span>I run in the park every morning.</span></div>
<div class="ex"><b>昨日《きのう》 髪《かみ》 を 切《き》りました。</b><span>I had my hair cut yesterday.</span></div>
<div class="ex"><b>保険証《ほけんしょう》 は 要《い》ります か。</b><span>Do I need my insurance card?</span></div>
<div class="ex"><b>毎朝《まいあさ》 六時《ろくじ》 に 起《お》きます。</b><span>I get up at six every morning.</span></div>
<div class="ex"><b>毎日《まいにち》 日記《にっき》 を 書《か》きます。</b><span>I write in a diary every day.</span></div>
<div class="ex"><b>日曜日《にちようび》 に 友達《ともだち》 が 来《き》ます。</b><span>A friend is coming on Sunday.</span></div>
<p>Practise sorting and conjugating verbs in the <a href="#/verbs">Verb trainer</a>.</p>
<div class="note">切《き》る "cut" and 着《き》る "wear" sound the same in the dictionary form, but 切《き》る is a う-verb (切《き》ります) and 着《き》る is a る-verb (着《き》ます). When in doubt, learn each new verb together with its ます form.</div>`,
    quiz: [
      [`Which group does 食《た》べる belong to?`, [`る-verbs`, `う-verbs`, `irregular`], 0, `食《た》べる ends in る with an e sound before it, and its ます form is 食《た》べます.`],
      [`What is the dictionary form of 飲《の》みます?`, [`飲《の》みる`, `飲《の》む`, `飲《の》る`], 1, `み before ます becomes む.`],
      [`Which verb is a う-verb even though it ends in -eru?`, [`寝《ね》る`, `食《た》べる`, `帰《かえ》る`, `見《み》る`], 2, `帰《かえ》る is a う-verb: its ます form is 帰《かえ》ります.`],
      [`What is the ます form of 来《く》る?`, [`来《く》ります`, `来《こ》ます`, `来《き》ます`], 2, `来《く》る is irregular; its ます form is 来《き》ます.`],
      [`What is the dictionary form of 待《ま》ちます?`, [`待《ま》つ`, `待《ま》ちる`, `待《ま》す`], 0, `ち before ます becomes つ.`],
      [`How can you tell 切《き》る "cut" is a う-verb?`, [`It is written with kanji.`, `Its ます form is 切《き》ります.`, `It ends in る.`], 1, `A る-verb would drop る and give 切《き》ます; 切《き》ります follows the う-verb pattern.`]
    ] },

  { id: 'te-form', level: 'N5', unit: 'The te-form', title: `Making the て-form`, summary: `The て-form is the key to requests, "is doing", and joining sentences; here is how to make it for every verb.`, draft: true,
    body: `<p>The て-form is the most useful verb form after ます. It is used to ask a patient to sit down or take a deep breath, to say what someone is doing now, and to link actions in order. The rules depend on the verb group from the previous lesson.</p>
<h3>る-verbs and the irregular verbs</h3>
<p>For る-verbs, replace る with て. する becomes して and 来《く》る becomes 来《き》て.</p>
<h3>う-verbs: it depends on the last sound</h3>
<table><tr><th>Dictionary form ends in</th><th>て-form ending</th><th>Example 1</th><th>Example 2</th></tr>
<tr><td>る (る-verb)</td><td>て</td><td>食《た》べる → 食《た》べて</td><td>起《お》きる → 起《お》きて</td></tr>
<tr><td>う</td><td>って</td><td>会《あ》う → 会《あ》って</td><td>買《か》う → 買《か》って</td></tr>
<tr><td>つ</td><td>って</td><td>待《ま》つ → 待《ま》って</td><td>持《も》つ → 持《も》って</td></tr>
<tr><td>る (う-verb)</td><td>って</td><td>帰《かえ》る → 帰《かえ》って</td><td>座《すわ》る → 座《すわ》って</td></tr>
<tr><td>む</td><td>んで</td><td>飲《の》む → 飲《の》んで</td><td>休《やす》む → 休《やす》んで</td></tr>
<tr><td>ぶ</td><td>んで</td><td>呼《よ》ぶ → 呼《よ》んで</td><td>遊《あそ》ぶ → 遊《あそ》んで</td></tr>
<tr><td>ぬ</td><td>んで</td><td>死《し》ぬ → 死《し》んで</td><td>(the only common ぬ verb)</td></tr>
<tr><td>く</td><td>いて</td><td>書《か》く → 書《か》いて</td><td>聞《き》く → 聞《き》いて</td></tr>
<tr><td>ぐ</td><td>いで</td><td>泳《およ》ぐ → 泳《およ》いで</td><td>急《いそ》ぐ → 急《いそ》いで</td></tr>
<tr><td>す</td><td>して</td><td>話《はな》す → 話《はな》して</td><td>出《だ》す → 出《だ》して</td></tr>
<tr><td>exception</td><td>って</td><td>行《い》く → 行《い》って</td><td></td></tr>
<tr><td>する (irregular)</td><td>して</td><td>する → して</td><td>勉強《べんきょう》 する → 勉強《べんきょう》 して</td></tr>
<tr><td>来《く》る (irregular)</td><td>来《き》て</td><td>来《く》る → 来《き》て</td><td>持《も》って 来《く》る → 持《も》って 来《き》て</td></tr></table>
<p>A short way to remember the う-verbs: う つ る → って; む ぶ ぬ → んで; く → いて; ぐ → いで; す → して. The only exception is 行《い》く → 行《い》って.</p>
<h3>The て-form in use</h3>
<p>The next lessons cover what the て-form does. For now, here it is with ください "please", and linking two actions.</p>
<div class="ex"><b>こちら に 座《すわ》って ください。</b><span>Please sit here.</span></div>
<div class="ex"><b>ここ に お名前《なまえ》 を 書《か》いて ください。</b><span>Please write your name here.</span></div>
<div class="ex"><b>もう 少《すこ》し ゆっくり 話《はな》して ください。</b><span>Please speak a little more slowly.</span></div>
<div class="ex"><b>今日《きょう》 は ゆっくり 休《やす》んで ください。</b><span>Please rest well today.</span></div>
<div class="ex"><b>看護師《かんごし》 を 呼《よ》んで ください。</b><span>Please call a nurse.</span></div>
<div class="ex"><b>来週《らいしゅう》 また 来《き》て ください。</b><span>Please come again next week.</span></div>
<div class="ex"><b>毎日《まいにち》 少《すこ》し 運動《うんどう》 して ください。</b><span>Please get a little exercise every day.</span></div>
<div class="ex"><b>昨日《きのう》 は 家《いえ》 に 帰《かえ》って、 すぐ 寝《ね》ました。</b><span>Yesterday I went home and went straight to bed.</span></div>
<p>The た-form (plain past) is made exactly like the て-form, with た / だ in place of て / で: 食《た》べた, 飲《の》んだ, 行《い》った.</p>
<div class="note">The う-verbs that look like る-verbs follow the う-verb rule: 帰《かえ》る → 帰《かえ》って, 入《はい》る → 入《はい》って, 切《き》る → 切《き》って. A common mistake is 帰《かえ》て. Compare 着《き》る "wear" (る-verb) → 着《き》て.</div>`,
    quiz: [
      [`What is the て-form of 飲《の》む?`, [`飲《の》みて`, `飲《の》んで`, `飲《の》って`], 1, `Verbs ending in む take んで.`],
      [`What is the て-form of 書《か》く?`, [`書《か》いて`, `書《か》って`, `書《か》きて`, `書《か》んで`], 0, `Verbs ending in く take いて.`],
      [`What is the て-form of 行《い》く?`, [`行《い》いて`, `行《い》きて`, `行《い》って`], 2, `行《い》く is the one exception among く verbs: 行《い》って.`],
      [`What is the て-form of 帰《かえ》る?`, [`帰《かえ》て`, `帰《かえ》って`, `帰《かえ》んで`], 1, `帰《かえ》る is a う-verb, so る becomes って.`],
      [`What is the て-form of 泳《およ》ぐ?`, [`泳《およ》いで`, `泳《およ》いて`, `泳《およ》って`], 0, `Verbs ending in ぐ take いで.`],
      [`What is the て-form of 来《く》る?`, [`来《く》って`, `来《こ》て`, `来《き》て`], 2, `来《く》る is irregular: 来《き》て.`]
    ] },

  { id: 'te-kudasai', level: 'N5', unit: 'The te-form', title: `Requests and permission: 〜て ください, 〜て も いい です か`, summary: `Asking someone to do or not do something, asking permission, and making requests softer.`, draft: true,
    body: `<p>A physical or mental status examination is a long series of polite requests: please sit down, please open your mouth, please take a deep breath, please don't worry. All of them are built on the て-form. This lesson also covers asking permission and the softer request forms that suit a conversation with a patient.</p>
<h3>Patterns</h3>
<table><tr><th>Pattern</th><th>Meaning</th><th>Example</th></tr>
<tr><td>〜て ください</td><td>please do</td><td>座《すわ》って ください</td></tr>
<tr><td>〜ないで ください</td><td>please don't</td><td>心配《しんぱい》 しないで ください</td></tr>
<tr><td>〜て も いい です か</td><td>may I...?</td><td>聞《き》いて も いい です か</td></tr>
<tr><td>〜て は いけません</td><td>you must not</td><td>飲《の》んで は いけません</td></tr>
<tr><td>〜て もらえます か</td><td>could you...? (soft)</td><td>待《ま》って もらえます か</td></tr>
<tr><td>〜て いただけます か</td><td>would you be so kind as to...? (very polite)</td><td>教《おし》えて いただけます か</td></tr></table>
<h3>Please do</h3>
<div class="ex"><b>どうぞ、 こちら に 座《すわ》って ください。</b><span>Please have a seat here.</span></div>
<div class="ex"><b>大《おお》きく 深呼吸《しんこきゅう》 して ください。</b><span>Please take a deep breath.</span></div>
<div class="ex"><b>口《くち》 を 開《あ》けて ください。</b><span>Please open your mouth.</span></div>
<div class="ex"><b>ゆっくり 息《いき》 を 吐《は》いて ください。</b><span>Please breathe out slowly.</span></div>
<h3>Please don't</h3>
<p>〜ないで ください uses the ない form, which comes in a later lesson. Learn these as fixed phrases for now.</p>
<table><tr><th>Phrase</th><th>Meaning</th></tr>
<tr><td>心配《しんぱい》 しないで ください</td><td>please don't worry</td></tr>
<tr><td>無理《むり》 しないで ください</td><td>please don't overdo it</td></tr>
<tr><td>忘《わす》れないで ください</td><td>please don't forget</td></tr>
<tr><td>飲《の》まないで ください</td><td>please don't drink / take</td></tr>
<tr><td>運転《うんてん》 しないで ください</td><td>please don't drive</td></tr></table>
<div class="ex"><b>お薬《くすり》 を 忘《わす》れないで ください。</b><span>Please don't forget your medicine.</span></div>
<div class="ex"><b>今日《きょう》 は 無理《むり》 しないで ください。</b><span>Please don't push yourself today.</span></div>
<h3>Permission and prohibition</h3>
<div class="ex"><b>少《すこ》し 質問《しつもん》 して も いい です か。</b><span>May I ask you a few questions?</span></div>
<div class="ex"><b>はい、 どうぞ。</b><span>Yes, go ahead.</span></div>
<div class="ex"><b>この 薬《くすり》 と お酒《さけ》 を 一緒《いっしょ》 に 飲《の》んで は いけません。</b><span>You must not take this medicine together with alcohol.</span></div>
<h3>Softer requests</h3>
<div class="ex"><b>もう 一度《いちど》 言《い》って もらえます か。</b><span>Could you say that once more?</span></div>
<div class="ex"><b>お名前《なまえ》 を 教《おし》えて いただけます か。</b><span>Would you tell me your name, please?</span></div>
<div class="note">〜て は いけません is a strong prohibition, like a rule. With patients, a gentler 〜ないで ください is usually better: この 薬《くすり》 と お酒《さけ》 は 一緒《いっしょ》 に 飲《の》まないで ください. For questions about the patient's own life, 〜て いただけます か sounds more respectful than 〜て ください.</div>`,
    quiz: [
      [`How do you say "Please open your mouth"?`, [`口《くち》 を 開《あ》けて ください。`, `口《くち》 を 開《あ》けました。`, `口《くち》 を 開《あ》けて も いい です か。`], 0, `〜て ください is "please do".`],
      [`What does 写真《しゃしん》 を 撮《と》って も いい です か mean?`, [`Please take a photo.`, `May I take a photo?`, `You must not take photos.`], 1, `〜て も いい です か asks permission.`],
      [`Which is the most polite way to ask "Could you tell me your address?"`, [`住所《じゅうしょ》 を 教《おし》えて ください。`, `住所《じゅうしょ》 を 教《おし》えて もらえます か。`, `住所《じゅうしょ》 を 教《おし》えて いただけます か。`], 2, `〜て いただけます か is the most polite request form here.`],
      [`How do you say "Please don't worry"?`, [`心配《しんぱい》 して ください。`, `心配《しんぱい》 しないで ください。`, `心配《しんぱい》 して は いけません か。`], 1, `〜ないで ください is "please don't".`],
      [`What does 〜て は いけません express?`, [`A strong prohibition`, `An invitation`, `A soft request`], 0, `〜て は いけません means "you must not".`]
    ] },

  { id: 'te-imasu', level: 'N5', unit: 'The te-form', title: `〜て います: in progress, states and habits`, summary: `て-form + います describes what is happening now, a state that continues, or a regular habit.`, draft: true,
    body: `<p>"Are you married?", "Where do you live?", "What work do you do?" and "Are you taking any medicine?" are basic history questions, and all of them use 〜て います in Japanese. The pattern is simple: て-form + います. What it means depends on the verb.</p>
<h3>Three meanings</h3>
<table><tr><th>Meaning</th><th>Example</th><th>English</th></tr>
<tr><td>action in progress</td><td>テレビ を 見《み》て います</td><td>is watching TV</td></tr>
<tr><td>resulting state</td><td>結婚《けっこん》 して います</td><td>is married</td></tr>
<tr><td>regular habit</td><td>毎日《まいにち》 飲《の》んで います</td><td>takes it every day</td></tr></table>
<h3>Action in progress</h3>
<div class="ex"><b>今《いま》 何《なに》 を して います か。</b><span>What are you doing now?</span></div>
<div class="ex"><b>母《はは》 は 今《いま》 外《そと》 で 待《ま》って います。</b><span>My mother is waiting outside now.</span></div>
<div class="ex"><b>雨《あめ》 が 降《ふ》って います。</b><span>It is raining.</span></div>
<h3>A state that continues</h3>
<p>With verbs that describe a change, 〜て います describes the state after the change: married, living somewhere, knowing, working at a job.</p>
<div class="ex"><b>結婚《けっこん》 して います か。</b><span>Are you married?</span></div>
<div class="ex"><b>姉《あね》 は 大阪《おおさか》 に 住《す》んで います。</b><span>My older sister lives in Osaka.</span></div>
<div class="ex"><b>兄《あに》 は 銀行《ぎんこう》 で 働《はたら》いて います。</b><span>My older brother works at a bank.</span></div>
<div class="ex"><b>この 病院《びょういん》 を 知《し》って います か。</b><span>Do you know this hospital?</span></div>
<h3>Habit, and the negative</h3>
<div class="ex"><b>毎日《まいにち》 この 薬《くすり》 を 飲《の》んで います。</b><span>I take this medicine every day.</span></div>
<p>The negative is 〜て いません. With まだ it means "not yet", and with もう it means "no longer".</p>
<div class="ex"><b>朝《あさ》ご飯《はん》 は まだ 食《た》べて いません。</b><span>I haven't eaten breakfast yet.</span></div>
<div class="ex"><b>その 薬《くすり》 は もう 飲《の》んで いません。</b><span>I'm not taking that medicine any more.</span></div>
<h3>知《し》って います and 知《し》りません</h3>
<p>"I know" is 知《し》って います, but "I don't know" is 知《し》りません.</p>
<div class="ex"><b>いいえ、 知《し》りません。</b><span>No, I don't know.</span></div>
<div class="note">Do not say 知《し》って いません for "I don't know"; the normal negative is 知《し》りません. Also, 結婚《けっこん》 して います means "is married" (a state), not "is getting married". "I haven't eaten yet" is まだ 食《た》べて いません, not まだ 食《た》べません でした.</div>`,
    quiz: [
      [`How do you ask "Where do you live?"`, [`どこ に 住《す》みます か。`, `どこ に 住《す》んで います か。`, `どこ で 住《す》みました か。`], 1, `Living somewhere is a continuing state: 住《す》んで います.`],
      [`What does 結婚《けっこん》 して います mean?`, [`I am getting married right now.`, `I am married.`, `I will get married.`], 1, `With 結婚《けっこん》 する, 〜て います describes the state after the change.`],
      [`How do you say "I don't know"?`, [`知《し》って いません。`, `知《し》りません。`, `知《し》らない です か。`], 1, `The negative of 知《し》って います is 知《し》りません.`],
      [`How do you say "I haven't taken the medicine yet"?`, [`薬《くすり》 は まだ 飲《の》んで いません。`, `薬《くすり》 は もう 飲《の》みました。`, `薬《くすり》 は まだ 飲《の》みます。`], 0, `まだ + 〜て いません means "not yet".`],
      [`毎朝《まいあさ》 走《はし》って います。 What does this describe?`, [`A one-time action in the past`, `A regular habit`, `A plan for tomorrow`], 1, `With 毎朝《まいあさ》 "every morning", 〜て います is a habit.`]
    ] },

  { id: 'linking', level: 'N5', unit: 'The te-form', title: `Linking sentences: て, くて, で, 〜て から, 〜前《まえ》 に, 〜後《あと》 で`, summary: `Joining actions and descriptions into one sentence, and saying what happens before or after.`, draft: true,
    body: `<p>A patient's description of a day, or your instructions on when to take a tablet, need ways to join ideas: "I get up, wash my face and take my medicine", "take it after eating", "take it before bed". This lesson gathers the basic linking forms.</p>
<h3>Joining with the て-form</h3>
<table><tr><th>Word type</th><th>How to link</th><th>Example</th></tr>
<tr><td>verb</td><td>て-form</td><td>起《お》きて, 飲《の》んで</td></tr>
<tr><td>い-adjective</td><td>い → くて</td><td>痛《いた》くて, 新《あたら》しくて; いい → よくて</td></tr>
<tr><td>な-adjective</td><td>+ で</td><td>元気《げんき》 で, 静《しず》か で</td></tr>
<tr><td>noun</td><td>+ で</td><td>会社員《かいしゃいん》 で</td></tr></table>
<p>Verbs joined with て happen in the order given. The tense is set by the last verb only.</p>
<div class="ex"><b>朝《あさ》 起《お》きて、 顔《かお》 を 洗《あら》って、 薬《くすり》 を 飲《の》みます。</b><span>In the morning I get up, wash my face and take my medicine.</span></div>
<div class="ex"><b>頭《あたま》 が 痛《いた》くて、 体《からだ》 も だるい です。</b><span>I have a headache, and my body feels heavy too.</span></div>
<div class="ex"><b>この 病院《びょういん》 は 新《あたら》しくて きれい です。</b><span>This hospital is new and clean.</span></div>
<div class="ex"><b>姉《あね》 は 元気《げんき》 で 明《あか》るい 人《ひと》 です。</b><span>My older sister is a lively, cheerful person.</span></div>
<div class="ex"><b>父《ちち》 は 会社員《かいしゃいん》 で、 母《はは》 は 看護師《かんごし》 です。</b><span>My father is an office worker and my mother is a nurse.</span></div>
<h3>After doing: 〜て から</h3>
<p>〜て から stresses that the first action is finished before the second begins.</p>
<div class="ex"><b>ご飯《はん》 を 食《た》べて から、 薬《くすり》 を 飲《の》んで ください。</b><span>Please take the medicine after you have eaten.</span></div>
<h3>Before and after: 〜前《まえ》 に and 〜後《あと》 で</h3>
<p>Before doing: dictionary form + 前《まえ》 に. After doing: た-form + 後《あと》 で. With a noun, use の: 食事《しょくじ》 の 前《まえ》 に, 仕事《しごと》 の 後《あと》 で. The た-form is made like the て-form; for now, learn 食《た》べた, 飲《の》んだ, 帰《かえ》った and 起《お》きた as fixed examples.</p>
<div class="ex"><b>寝《ね》る 前《まえ》 に、 この 薬《くすり》 を 一錠《いちじょう》 飲《の》んで ください。</b><span>Please take one tablet of this medicine before going to bed.</span></div>
<div class="ex"><b>食事《しょくじ》 の 前《まえ》 に 手《て》 を 洗《あら》います。</b><span>I wash my hands before meals.</span></div>
<div class="ex"><b>晩《ばん》ご飯《はん》 を 食《た》べた 後《あと》 で、 散歩《さんぽ》 します。</b><span>After eating dinner, I go for a walk.</span></div>
<div class="ex"><b>仕事《しごと》 の 後《あと》 で 病院《びょういん》 に 来《き》ました。</b><span>I came to the hospital after work.</span></div>
<h3>Starting a new sentence: そして, それから, でも</h3>
<p>そして "and", それから "and then, after that" and でも "but" begin a new sentence.</p>
<div class="ex"><b>朝《あさ》 薬《くすり》 を 飲《の》みます。 それから、 会社《かいしゃ》 に 行《い》きます。</b><span>I take my medicine in the morning. Then I go to work.</span></div>
<div class="ex"><b>昨日《きのう》 は よく 寝《ね》ました。 そして、 朝《あさ》ご飯《はん》 も 食《た》べました。</b><span>I slept well last night. And I also ate breakfast.</span></div>
<div class="ex"><b>仕事《しごと》 は 大変《たいへん》 です。 でも、 楽《たの》しい です。</b><span>Work is tough. But it's enjoyable.</span></div>
<div class="note">〜前《まえ》 に always takes the dictionary form, even about the past: 寝《ね》る 前《まえ》 に 薬《くすり》 を 飲《の》みました "I took the medicine before going to bed". 〜後《あと》 で always takes the た-form: 食《た》べた 後《あと》 で, not 食《た》べる 後《あと》 で.</div>`,
    quiz: [
      [`How do you join 痛《いた》い and だるい: "it hurts and I feel heavy"?`, [`痛《いた》い で だるい です。`, `痛《いた》くて だるい です。`, `痛《いた》かった だるい です。`], 1, `An い-adjective links with 〜くて.`],
      [`How do you say "before going to bed"?`, [`寝《ね》る 前《まえ》 に`, `寝《ね》た 前《まえ》 に`, `寝《ね》て 前《まえ》 に`], 0, `〜前《まえ》 に takes the dictionary form.`],
      [`How do you say "after eating"?`, [`食《た》べる 後《あと》 で`, `食《た》べます 後《あと》 で`, `食《た》べた 後《あと》 で`], 2, `〜後《あと》 で takes the た-form.`],
      [`How do you link 静《しず》か and きれい: "quiet and clean"?`, [`静《しず》かくて きれい`, `静《しず》か で きれい`, `静《しず》か な きれい`], 1, `A な-adjective links with で.`],
      [`Which word means "but" at the start of a sentence?`, [`そして`, `それから`, `でも`], 2, `でも means "but"; そして is "and" and それから is "and then".`],
      [`朝《あさ》 起《お》きて、 散歩《さんぽ》 しました。 When did the getting up happen?`, [`In the past, before the walk`, `In the future`, `After the walk`], 0, `て-linked verbs take their tense from the last verb, and the actions happen in order.`]
    ] }
);
