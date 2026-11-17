/* Lessons part 32 (0.23.0): N4, unit "Degree, measure and compound verbs" (after concession): hodo-onaji, compound-verbs, sa-mi, review-n4-degree.
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
   Ids are permanent: append only after release (never insert, reorder or delete).
   Note: the compound-verb lesson has the id 'compound-verbs-n4' because 'compound-verbs' is already the N3 lesson in lessons-8.js. */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  { id: 'hodo-onaji', level: 'N4', unit: 'Degree, measure and compound verbs', after: 'concession', title: `Not as, the same as, unlike: 〜ほど 〜ない, と 同《おな》じ, 同《おな》じ ぐらい, と 違《ちが》って`, summary: `Say that one thing is less than another, the same as another, or different from it: "not as bad as yesterday", "the same as last time", "unlike before".`, draft: true,
    body: `<p>At every follow-up visit you compare: today with last week, this episode with the last one, the patient now with the patient before. In <a href="#/lessons/comparing-changing">Comparing and changing</a> you learned より and の ほう が for "more than". This lesson adds the other three answers: less (〜ほど 〜ない), equal (と 同《おな》じ, 同《おな》じ ぐらい) and different (と 違《ちが》って).</p>
<h3>How to make it</h3>
<table><tr><th>Pattern</th><th>How it is built</th><th>Worked form</th></tr>
<tr><td>A は B ほど 〜ない</td><td>B is a noun; the ending must be negative</td><td>い-adj.: 昨日《きのう》 ほど 痛《いた》く ない<br>な-adj.: 前《まえ》 ほど 元気《げんき》 では ない<br>verb: 前《まえ》 ほど 眠《ねむ》れない</td></tr>
<tr><td>A は B と 同《おな》じ です</td><td>noun + と 同《おな》じ; before a noun, 同《おな》じ joins it directly</td><td>前《まえ》 と 同《おな》じ です / 同《おな》じ 薬《くすり》</td></tr>
<tr><td>A は B と 同《おな》じ ぐらい 〜</td><td>then any adjective or verb, positive</td><td>昨日《きのう》 と 同《おな》じ ぐらい 痛《いた》い</td></tr>
<tr><td>A は B と 違《ちが》います<br>B と 違《ちが》って、 A は 〜</td><td>違《ちが》う is a group 1 verb; its て-form links to the next clause</td><td>いつも と 違《ちが》います / 前《まえ》 と 違《ちが》って</td></tr></table>
<h3>〜ほど 〜ない: not as ... as</h3>
<p>A は B ほど 〜ない means A does not reach the level of B. B is the yardstick, and the end of the sentence is always negative. In polite speech the ending is 〜く ありません (い-adjective), 〜では ありません (な-adjective) or 〜ません (verb).</p>
<div class="ex"><b>今日《きょう》 の 痛《いた》み は 昨日《きのう》 ほど ひどく ありません。</b><span>Today's pain is not as bad as yesterday's.</span></div>
<div class="ex"><b>この 町《まち》 は 東京《とうきょう》 ほど にぎやか では ありません。</b><span>This town is not as lively as Tokyo.</span></div>
<div class="ex"><b>最近《さいきん》 は 前《まえ》 ほど 眠《ねむ》れません。</b><span>Lately I can't sleep as well as I used to.</span></div>
<p>The most common mistake is a positive ending. 昨日《きのう》 ほど 痛《いた》い です is wrong. For "more than", use より: 今日《きょう》 は 昨日《きのう》 より 痛《いた》い です. As a short answer, a noun + ほど では ありません means "not as much as that": 先週《せんしゅう》 ほど では ありません "not as bad as last week".</p>
<h3>と 同《おな》じ: the same as</h3>
<p>A は B と 同《おな》じ です means "A is the same as B". Before a noun, 同《おな》じ goes straight in front of it, with no な and no の: 同《おな》じ 時間《じかん》, 同《おな》じ 薬《くすり》. This is unusual, so it is a frequent error: 同《おな》じ な 薬《くすり》 and 同《おな》じ の 薬《くすり》 are both wrong.</p>
<div class="ex"><b>症状《しょうじょう》 は 前《まえ》 と 同《おな》じ です か。</b><span>Are the symptoms the same as before?</span></div>
<div class="ex"><b>前回《ぜんかい》 と 同《おな》じ お薬《くすり》 を 出《だ》します ね。</b><span>I'll prescribe the same medicine as last time.</span></div>
<div class="ex"><b>毎日《まいにち》 同《おな》じ 時間《じかん》 に 起《お》きて ください。</b><span>Please get up at the same time every day.</span></div>
<h3>同《おな》じ ぐらい: just as ... as</h3>
<p>To say two things are equal in degree, put と 同《おな》じ ぐらい (or くらい; they are the same word) before an adjective or verb. Here the ending is positive. Compare: 昨日《きのう》 ほど 痛《いた》く ない (less) and 昨日《きのう》 と 同《おな》じ ぐらい 痛《いた》い (equal).</p>
<div class="ex"><b>今日《きょう》 も 昨日《きのう》 と 同《おな》じ ぐらい 痛《いた》い です か。</b><span>Does it hurt as much today as it did yesterday?</span></div>
<div class="ex"><b>弟《おとうと》 は もう 父《ちち》 と 同《おな》じ ぐらい 背《せ》 が 高《たか》い です。</b><span>My younger brother is already as tall as my father.</span></div>
<div class="ex"><b>妻《つま》 も 私《わたし》 と 同《おな》じ くらい 心配《しんぱい》 して います。</b><span>My wife is just as worried as I am.</span></div>
<h3>と 違《ちが》う, と 違《ちが》って: different, unlike</h3>
<p>違《ちが》う means "to be different". It is a verb, not an adjective: the polite forms are 違《ちが》います and 違《ちが》いました. (You may hear 違《ちが》かった in casual speech; do not copy it.) Its て-form 違《ちが》って links two clauses: B と 違《ちが》って、 A は 〜 "unlike B, A ...".</p>
<div class="ex"><b>今回《こんかい》 の 頭痛《ずつう》 は いつも と 違《ちが》います か。</b><span>Is this headache different from your usual ones?</span></div>
<div class="ex"><b>前《まえ》 の 仕事《しごと》 と 違《ちが》って、 今《いま》 は 夜《よる》 働《はたら》かなくて も いい です。</b><span>Unlike my old job, I don't have to work nights now.</span></div>
<div class="ex"><b>姉《あね》 と 違《ちが》って、 私《わたし》 は 朝《あさ》 が 苦手《にがて》 です。</b><span>Unlike my older sister, I'm not a morning person.</span></div>
<h3>In the interview</h3>
<div class="ex"><b>気分《きぶん》 は 先週《せんしゅう》 と 同《おな》じ ぐらい です か。</b><span>Is your mood about the same as last week?</span></div>
<div class="ex"><b>いいえ、 先週《せんしゅう》 ほど では ありません。</b><span>No, it's not as bad as last week.</span></div>
<div class="ex"><b>今回《こんかい》 の 落《お》ち込《こ》み は、 前《まえ》 の とき と 違《ちが》います か。</b><span>Is this low period different from the last one?</span></div>
<div class="ex"><b>母《はは》 は 前《まえ》 と 違《ちが》って、 あまり 笑《わら》わなく なりました。</b><span>Unlike before, my mother hardly laughs any more. (a family member)</span></div>
<p>Later, in <a href="#/lessons/hodo-kurai">ほど, くらい</a>, you will see ほど used for "so much that", and in <a href="#/lessons/compound-particles-2">と して, に 比《くら》べて</a> a more formal way to compare.</p>
<div class="note">〜ほど 〜ない always ends in a negative; for "more than" use より. 同《おな》じ goes straight before a noun: 同《おな》じ 薬《くすり》, never 同《おな》じ な or 同《おな》じ の.</div>`,
    quiz: [
      [`この 町《まち》 は 東京《とうきょう》 ほど ＿。 ("This town isn't as lively as Tokyo.")`, [`にぎやか です`, `にぎやか では ありません`, `にぎやか に なりました`], 1, `〜ほど needs a negative ending: にぎやか では ありません.`],
      [`Which is the correct way to say "the same medicine"?`, [`同《おな》じ な 薬《くすり》`, `同《おな》じ の 薬《くすり》`, `同《おな》じ 薬《くすり》`], 2, `同《おな》じ goes straight before a noun, with no な or の.`],
      [`兄《あに》 と 違《ちが》って、 弟《おとうと》 は よく 話《はな》します means:`, [`Unlike my older brother, my younger brother talks a lot.`, `Like my older brother, my younger brother talks a lot.`, `My older and younger brothers talk to each other a lot.`], 0, `B と 違《ちが》って means "unlike B".`],
      [`妹《いもうと》 は 私《わたし》 ＿ 同《おな》じ ぐらい 背《せ》 が 高《たか》い です。 ("My younger sister is as tall as I am.")`, [`より`, `ほど`, `と`], 2, `The pattern is B と 同《おな》じ ぐらい.`],
      [`A patient says 先週《せんしゅう》 ほど では ありません. What do they mean?`, [`It is worse than last week.`, `It is not as bad as last week.`, `It is the same as last week.`], 1, `Noun + ほど では ありません means "not as much as that".`],
      [`Which sentence is correct for "Today is colder than yesterday"?`, [`今日《きょう》 は 昨日《きのう》 より 寒《さむ》い です。`, `今日《きょう》 は 昨日《きのう》 ほど 寒《さむ》い です。`, `今日《きょう》 は 昨日《きのう》 と 寒《さむ》い です。`], 0, `A positive "more than" takes より; ほど needs a negative ending.`]
    ] },

  { id: 'compound-verbs-n4', level: 'N4', unit: 'Degree, measure and compound verbs', after: 'hodo-onaji', title: `Start, finish, keep on, burst out: 〜始《はじ》める, 〜終《お》わる, 〜続《つづ》ける, 〜出《だ》す`, summary: `Join a verb stem to 始《はじ》める, 終《お》わる, 続《つづ》ける or 出《だ》す to say that an action starts, finishes, continues or suddenly breaks out.`, draft: true,
    body: `<p>The history of a symptom is a timeline: when it started, whether it is still going on, when it stopped, whether it came on suddenly. Japanese often says this with one compound verb: the ます-stem of the main verb plus a second verb. You have already met 飲《の》み始《はじ》める in <a href="#/lessons/nagara-mama-tokoro-bakari">〜ながら, 〜た まま, ところ, 〜た ばかり</a>. This lesson gives the four endings you will use most.</p>
<h3>How to make it</h3>
<p>Take the ます-stem (the form before ます) and add the second verb, written as one word.</p>
<table><tr><th>Verb</th><th>ます-stem</th><th>Compound</th></tr>
<tr><td>group 1: 飲《の》む</td><td>飲《の》み</td><td>飲《の》み始《はじ》める (start taking)</td></tr>
<tr><td>group 2: 食《た》べる</td><td>食《た》べ</td><td>食《た》べ終《お》わる (finish eating)</td></tr>
<tr><td>group 3: 勉強《べんきょう》する</td><td>勉強《べんきょう》し</td><td>勉強《べんきょう》し続《つづ》ける (keep studying)</td></tr>
<tr><td>group 1: 泣《な》く</td><td>泣《な》き</td><td>泣《な》き出《だ》す (burst into tears)</td></tr></table>
<p>The whole compound conjugates like its second verb. 始《はじ》める and 続《つづ》ける are group 2 (飲《の》み始《はじ》めました, 飲《の》み続《つづ》けて); 終《お》わる and 出《だ》す are group 1 (食《た》べ終《お》わって, 泣《な》き出《だ》しました). The particles stay those of the first verb: 薬《くすり》 を 飲《の》み始《はじ》める, 雨《あめ》 が 降《ふ》り始《はじ》める.</p>
<p>The common mistake is 〜始《はじ》まる. The ending is always 〜始《はじ》める, even when the first verb has が: 雨《あめ》 が 降《ふ》り始《はじ》めました, not 降《ふ》り始《はじ》まりました.</p>
<h3>〜始《はじ》める: start to</h3>
<div class="ex"><b>去年《きょねん》 の 秋《あき》 から 日本語《にほんご》 を 勉強《べんきょう》し始《はじ》めました。</b><span>I started studying Japanese last autumn.</span></div>
<div class="ex"><b>体《からだ》 の 調子《ちょうし》 が 悪《わる》く なり始《はじ》めた の は、 いつ ごろ です か。</b><span>Around when did you start to feel unwell?</span></div>
<div class="ex"><b>雨《あめ》 が 降《ふ》り始《はじ》めた ので、 早《はや》く 帰《かえ》りました。</b><span>It started to rain, so I went home early.</span></div>
<h3>〜終《お》わる: finish doing</h3>
<p>〜終《お》わる simply says the action is finished. Do not confuse it with 〜て しまう (<a href="#/lessons/te-shimau-oku-miru">〜て しまう, 〜て おく, 〜て みる</a>), which adds a feeling, often regret.</p>
<div class="ex"><b>この 本《ほん》 は 昨日《きのう》 やっと 読《よ》み終《お》わりました。</b><span>I finally finished reading this book yesterday.</span></div>
<div class="ex"><b>質問《しつもん》 に 答《こた》え終《お》わったら、 看護師《かんごし》 に 渡《わた》して ください。</b><span>When you have finished answering the questions, please give it to the nurse.</span></div>
<h3>〜続《つづ》ける: keep on</h3>
<p>〜て います (<a href="#/lessons/te-imasu">〜て います</a>) says an action is going on now. 〜続《つづ》ける stresses that it goes on without stopping, often for a long time or in spite of something.</p>
<div class="ex"><b>三時間《さんじかん》 も 歩《ある》き続《つづ》けて、 足《あし》 が 痛《いた》く なりました。</b><span>I kept walking for three whole hours, and my feet started to hurt.</span></div>
<div class="ex"><b>夜《よる》 も 同《おな》じ こと を 考《かんが》え続《つづ》けて、 眠《ねむ》れません。</b><span>I keep thinking about the same thing at night and can't sleep.</span></div>
<h3>〜出《だ》す: suddenly start, burst out</h3>
<p>〜出《だ》す is a start that comes suddenly or without warning. Because it is unplanned, it does not fit requests or plans: "please start taking it" is 飲《の》み始《はじ》めて ください, never 飲《の》み出《だ》して ください. (思《おも》い出《だ》す "remember" is a separate verb, not this pattern.)</p>
<div class="ex"><b>父《ちち》 は 話《はなし》 の 途中《とちゅう》 で 急《きゅう》 に 怒《おこ》り出《だ》しました。</b><span>My father suddenly got angry in the middle of the conversation.</span></div>
<div class="ex"><b>人《ひと》 の 前《まえ》 で 話《はな》す とき、 手《て》 が 震《ふる》え出《だ》します。</b><span>When I speak in front of people, my hands start to shake.</span></div>
<h3>On the ward</h3>
<div class="ex"><b>症状《しょうじょう》 が 出始《ではじ》めた の は、 いつ ごろ です か。</b><span>Around when did the symptoms start to appear?</span></div>
<div class="ex"><b>お薬《くすり》 を 飲《の》み始《はじ》めて から、 何《なに》 か 変《か》わった こと は あります か。</b><span>Has anything changed since you started taking the medicine?</span></div>
<div class="ex"><b>夫《おっと》 は 一度《いちど》 話《はな》し出《だ》す と、 なかなか 止《と》まりません。</b><span>Once my husband starts talking, he can hardly stop. (a family member)</span></div>
<div class="ex"><b>気分《きぶん》 の 日記《にっき》 を 書《か》き続《つづ》けて いただけます か。</b><span>Could you keep writing your mood diary?</span></div>
<p>Later, <a href="#/lessons/compound-verbs">Compound verbs</a> (N3) adds four more endings: 〜かける, 〜直《なお》す, 〜合《あ》う and 〜切《き》る.</p>
<div class="note">ます-stem + 始《はじ》める / 終《お》わる / 続《つづ》ける / 出《だ》す, written as one word and conjugated like the second verb. Always 〜始《はじ》める, never 〜始《はじ》まる, and keep 〜出《だ》す for sudden, unplanned starts.</div>`,
    quiz: [
      [`Which means "start to read"?`, [`読《よ》み始《はじ》める`, `読《よ》む 始《はじ》める`, `読《よ》んで 始《はじ》める`], 0, `The first verb is in the ます-stem: 読《よ》み + 始《はじ》める.`],
      [`Which is correct for "It started to rain"?`, [`雨《あめ》 が 降《ふ》り始《はじ》まりました。`, `雨《あめ》 が 降《ふ》り始《はじ》めました。`, `雨《あめ》 が 降《ふ》って 始《はじ》めました。`], 1, `The ending is always 〜始《はじ》める, even when the first verb takes が.`],
      [`本《ほん》 を ＿、 返《かえ》して ください。 ("When you have finished reading the book, please return it.")`, [`読《よ》み終《お》わったら`, `読《よ》み出《だ》したら`, `読《よ》み続《つづ》けたら`], 0, `〜終《お》わる means "finish doing".`],
      [`A family member says 父《ちち》 は 急《きゅう》 に 怒《おこ》り出《だ》しました. What happened?`, [`Father slowly calmed down.`, `Father stayed angry every day.`, `Father suddenly got angry.`], 2, `〜出《だ》す is a sudden start.`],
      [`Which is the natural request "Please keep writing the diary"?`, [`日記《にっき》 を 書《か》き出《だ》して ください。`, `日記《にっき》 を 書《か》き終《お》わって ください。`, `日記《にっき》 を 書《か》き続《つづ》けて ください。`], 2, `〜続《つづ》ける means "keep on"; 〜出《だ》す does not fit requests.`],
      [`What is the polite past of 飲《の》み続《つづ》ける?`, [`飲《の》み続《つづ》きました`, `飲《の》み続《つづ》けました`, `飲《の》み続《つづ》けりました`], 1, `続《つづ》ける is group 2, so the compound becomes 飲《の》み続《つづ》けました.`]
    ] },

  { id: 'sa-mi', level: 'N4', unit: 'Degree, measure and compound verbs', after: 'compound-verbs-n4', title: `Nouns from adjectives: 〜さ and 〜み (痛《いた》み, 強《つよ》さ, つらさ)`, summary: `Turn adjectives into nouns with 〜さ and 〜み to talk about a symptom and how strong it is, and ask a patient gently about severity.`, draft: true,
    body: `<p>To assess a symptom you ask what it is like and how bad it is. Japanese often does this with nouns made from adjectives: 痛《いた》い "painful" gives 痛《いた》み "pain", and 強《つよ》い "strong" gives 強《つよ》さ "strength, intensity". Together they make 痛《いた》み の 強《つよ》さ "the intensity of the pain". You already know the adjectives from <a href="#/lessons/i-adjectives">い-adjectives</a> and <a href="#/lessons/na-adjectives">な-adjectives</a>.</p>
<h3>How to make it</h3>
<table><tr><th>Adjective</th><th>〜さ (degree)</th><th>〜み (the feeling or quality)</th></tr>
<tr><td>い-adj.: 痛《いた》い</td><td>痛《いた》さ</td><td>痛《いた》み pain</td></tr>
<tr><td>い-adj.: 重《おも》い</td><td>重《おも》さ weight, heaviness</td><td>重《おも》み weight, importance</td></tr>
<tr><td>い-adj.: 悲《かな》しい</td><td>悲《かな》しさ</td><td>悲《かな》しみ sorrow, grief</td></tr>
<tr><td>い-adj.: 強《つよ》い</td><td>強《つよ》さ strength</td><td>強《つよ》み a strong point</td></tr>
<tr><td>い-adj.: つらい</td><td>つらさ how hard it is</td><td>(none)</td></tr>
<tr><td>い-adj.: いい</td><td>よさ good points (irregular)</td><td>(none)</td></tr>
<tr><td>な-adj.: 大切《たいせつ》 な</td><td>大切《たいせつ》さ importance</td><td>(none)</td></tr></table>
<p>〜さ: drop the final い of an い-adjective, or the な of a な-adjective, and add さ. It works with almost every adjective. いい uses its old form よい, so it becomes よさ, never いさ.</p>
<p>〜み: drop い and add み. It only exists for a small set of words; learn them one by one. The ones you will need most are 痛《いた》み, 苦《くる》しみ (suffering), 悲《かな》しみ, 楽《たの》しみ (something to look forward to) and 赤《あか》み (redness). Do not invent new ones: 長《なが》み and つらみ are not standard words.</p>
<p>The result is an ordinary noun, used with が, を, の and は.</p>
<h3>〜さ: how much</h3>
<p>〜さ names the degree of a quality, something you could measure or compare: weight, length, heat, how hard something is.</p>
<div class="ex"><b>この かばん の 重《おも》さ は 五《ご》キロ ぐらい です。</b><span>This bag weighs about five kilos.</span></div>
<div class="ex"><b>今年《ことし》 の 夏《なつ》 の 暑《あつ》さ は 本当《ほんとう》 に ひどかった です。</b><span>The heat this summer was really terrible.</span></div>
<div class="ex"><b>病気《びょうき》 に なって、 健康《けんこう》 の 大切《たいせつ》さ が わかりました。</b><span>Getting ill made me understand how important health is.</span></div>
<div class="ex"><b>この つらさ は、 なかなか 人《ひと》 に わかって もらえません。</b><span>It's hard to get people to understand how painful this is.</span></div>
<h3>〜み: the feeling itself</h3>
<p>〜み names the thing you feel or see, not its amount. That is why "I have a pain" uses 痛《いた》み: 痛《いた》み が あります.</p>
<div class="ex"><b>胸《むね》 に 痛《いた》み が あります。</b><span>I have a pain in my chest.</span></div>
<div class="ex"><b>傷《きず》 の まわり に 赤《あか》み が 出《で》て います。</b><span>There is some redness around the wound.</span></div>
<div class="ex"><b>母《はは》 を 亡《な》くした 悲《かな》しみ は、 まだ 消《き》えません。</b><span>The grief of losing my mother still hasn't gone away.</span></div>
<div class="ex"><b>週末《しゅうまつ》 の 旅行《りょこう》 が 楽《たの》しみ です。</b><span>I'm looking forward to the trip this weekend.</span></div>
<p>Some nouns that end in み are verb stems, not this pattern: 休《やす》み (from 休《やす》む) and 落《お》ち込《こ》み (from 落《お》ち込《こ》む).</p>
<h3>Asking about severity</h3>
<p>Use the symptom noun, then ask about its 強《つよ》さ, or compare it with another time using <a href="#/lessons/hodo-onaji">ほど and 同《おな》じ ぐらい</a>. Another gentle way is to ask what the symptom stops the patient from doing. If your hospital uses a rating scale, use its official wording; the questions below are everyday practice phrases, not a scale.</p>
<div class="ex"><b>どんな 痛《いた》み です か。</b><span>What kind of pain is it?</span></div>
<div class="ex"><b>痛《いた》み の 強《つよ》さ は、 昨日《きのう》 と 同《おな》じ ぐらい です か。</b><span>Is the pain about as strong as yesterday?</span></div>
<div class="ex"><b>頭《あたま》 の 重《おも》さ は、 朝《あさ》 と 夜《よる》 で 違《ちが》います か。</b><span>Is the heaviness in your head different in the morning and at night?</span></div>
<div class="ex"><b>今《いま》 の つらさ は、 一番《いちばん》 つらかった とき と 同《おな》じ ぐらい です か。</b><span>Is how you feel now as hard as at the worst time?</span></div>
<div class="ex"><b>痛《いた》み で 眠《ねむ》れない こと は あります か。</b><span>Does the pain ever keep you from sleeping?</span></div>
<div class="ex"><b>強《つよ》さ は 前《まえ》 ほど では ありません が、 痛《いた》み は まだ あります。</b><span>It isn't as strong as before, but the pain is still there. (a patient)</span></div>
<p>The common mistake is to use 痛《いた》さ for "a pain". 痛《いた》さ is the degree of pain and is rarely needed; for the pain itself, say 痛《いた》み.</p>
<div class="note">〜さ (any adjective) is "how much"; 〜み (a fixed set) is the feeling itself. For a symptom, ask about 痛《いた》み, then its 強《つよ》さ: 痛《いた》み の 強《つよ》さ は どう です か.</div>`,
    quiz: [
      [`What is the 〜さ noun of 長《なが》い?`, [`長《なが》み`, `長《なが》さ`, `長《なが》いさ`], 1, `Drop い and add さ: 長《なが》さ "length".`],
      [`Which is the natural way to say "I have a pain in my chest"?`, [`胸《むね》 に 痛《いた》み が あります。`, `胸《むね》 に 痛《いた》い が あります。`, `胸《むね》 に 痛《いた》く あります。`], 0, `The noun for "pain" is 痛《いた》み.`],
      [`What is the 〜さ noun of いい?`, [`いさ`, `いいさ`, `よさ`], 2, `いい is built on よい, so it becomes よさ.`],
      [`痛《いた》み の 強《つよ》さ は、 昨日《きのう》 と 同《おな》じ ぐらい です か means:`, [`Was the pain stronger yesterday?`, `Is the pain about as strong as yesterday?`, `Did you feel strong yesterday?`], 1, `強《つよ》さ is the strength of the pain, and 同《おな》じ ぐらい means "about as much as".`],
      [`Which is the noun "importance" from 大切《たいせつ》 な?`, [`大切《たいせつ》さ`, `大切《たいせつ》み`, `大切《たいせつ》 な さ`], 0, `A な-adjective drops な and adds さ.`],
      [`Which question asks how severe the pain is?`, [`どんな 痛《いた》み です か。`, `どこ が 痛《いた》い です か。`, `痛《いた》み は どの くらい 強《つよ》い です か。`], 2, `どの くらい 強《つよ》い asks about the strength; the others ask about the kind and the place.`]
    ] },

  { id: 'review-n4-degree', level: 'N4', unit: 'Degree, measure and compound verbs', after: 'sa-mi', review: true, title: `Review: Degree, measure and compound verbs`, summary: `Bring together comparing degree, compound verbs and nouns from adjectives, and practise them mixed.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/hodo-onaji">〜ほど 〜ない, 同《おな》じ, 違《ちが》って</a>, <a href="#/lessons/compound-verbs-n4">〜始《はじ》める, 〜終《お》わる, 〜続《つづ》ける, 〜出《だ》す</a> and <a href="#/lessons/sa-mi">〜さ and 〜み</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>B ほど 〜ない</td><td>less than B</td><td>昨日《きのう》 ほど ひどく ありません。</td></tr>
<tr><td>B と 同《おな》じ / 同《おな》じ + noun</td><td>the same</td><td>前回《ぜんかい》 と 同《おな》じ お薬《くすり》 です。</td></tr>
<tr><td>B と 同《おな》じ ぐらい</td><td>equal in degree</td><td>先週《せんしゅう》 と 同《おな》じ ぐらい 眠《ねむ》れます。</td></tr>
<tr><td>B と 違《ちが》って</td><td>unlike B</td><td>前《まえ》 と 違《ちが》って、 よく 食《た》べます。</td></tr>
<tr><td>stem + 始《はじ》める / 終《お》わる</td><td>start / finish</td><td>食《た》べ終《お》わったら、 飲《の》んで ください。</td></tr>
<tr><td>stem + 続《つづ》ける / 出《だ》す</td><td>keep on / burst out</td><td>急《きゅう》 に 泣《な》き出《だ》しました。</td></tr>
<tr><td>〜さ / 〜み</td><td>degree / the feeling</td><td>痛《いた》み の 強《つよ》さ は どう です か。</td></tr></table>
<h3>Watch out</h3>
<ul><li>〜ほど ends in a negative. For "more than", use より.</li>
<li>同《おな》じ goes straight before a noun: 同《おな》じ 時間《じかん》, not 同《おな》じ な or 同《おな》じ の.</li>
<li>Always 〜始《はじ》める, even after が: 雨《あめ》 が 降《ふ》り始《はじ》める, not 降《ふ》り始《はじ》まる.</li>
<li>〜出《だ》す is sudden and unplanned, so requests use 〜始《はじ》めて ください.</li>
<li>〜さ works with almost any adjective (いい → よさ); 〜み only with a fixed set such as 痛《いた》み and 悲《かな》しみ.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>お薬《くすり》 を 飲《の》み始《はじ》めて から、 痛《いた》み は 前《まえ》 ほど 強《つよ》く ありません。</b><span>Since I started the medicine, the pain hasn't been as strong as before.</span></div>
<div class="ex"><b>前《まえ》 と 違《ちが》って、 夜中《よなか》 に 急《きゅう》 に 目《め》 が 覚《さ》める こと は ありません。</b><span>Unlike before, I don't suddenly wake up in the night.</span></div>
<div class="ex"><b>悲《かな》しみ の 強《つよ》さ は、 先月《せんげつ》 と 同《おな》じ ぐらい です か。</b><span>Is the grief about as strong as it was last month?</span></div>
<div class="ex"><b>毎朝《まいあさ》 歩《ある》き続《つづ》けて いる ので、 体《からだ》 が 前《まえ》 ほど 重《おも》く ありません。</b><span>I've kept walking every morning, so my body doesn't feel as heavy as before.</span></div>`,
    quiz: [
      [`今週《こんしゅう》 は 先週《せんしゅう》 ほど ＿。 ("This week isn't as busy as last week.")`, [`忙《いそが》しく ありません`, `忙《いそが》しい です`, `忙《いそが》しかった です`], 0, `〜ほど needs a negative ending.`],
      [`Which means "the same time as yesterday"?`, [`昨日《きのう》 ほど 時間《じかん》`, `昨日《きのう》 と 同《おな》じ 時間《じかん》`, `昨日《きのう》 と 同《おな》じ な 時間《じかん》`], 1, `B と 同《おな》じ + noun, with no な.`],
      [`前《まえ》 と 違《ちが》って、 今《いま》 は 一人《ひとり》 で 買《か》い物《もの》 に 行《い》けます means:`, [`Like before, I can go shopping alone.`, `I could go shopping alone before, but not now.`, `Unlike before, I can now go shopping alone.`], 2, `前《まえ》 と 違《ちが》って means "unlike before".`],
      [`急《きゅう》 に 雨《あめ》 が ＿。 ("It suddenly started to rain.")`, [`降《ふ》り終《お》わりました`, `降《ふ》って 出《だ》しました`, `降《ふ》り出《だ》しました`], 2, `ます-stem + 出《だ》す is a sudden start.`],
      [`Which is the natural instruction "Please start taking this medicine from tomorrow"?`, [`明日《あした》 から この お薬《くすり》 を 飲《の》み出《だ》して ください。`, `明日《あした》 から この お薬《くすり》 を 飲《の》み始《はじ》めて ください。`, `明日《あした》 から この お薬《くすり》 を 飲《の》み終《お》わって ください。`], 1, `A planned start is 〜始《はじ》める; 〜出《だ》す does not fit requests.`],
      [`What is the polite past of 食《た》べ終《お》わる?`, [`食《た》べ終《お》わりました`, `食《た》べ終《お》わました`, `食《た》べ終《お》わるました`], 0, `終《お》わる is group 1: 終《お》わり + ました.`],
      [`What is the 〜さ noun of 重《おも》い?`, [`重《おも》いさ`, `重《おも》く`, `重《おも》さ`], 2, `Drop い and add さ.`],
      [`In 母《はは》 を 亡《な》くした 悲《かな》しみ, what does 悲《かな》しみ mean?`, [`sorrow, grief`, `a sad person`, `to feel sad`], 0, `悲《かな》しい + み is the noun for the feeling itself.`],
      [`痛《いた》み の 強《つよ》さ は 前《まえ》 ほど では ありません means:`, [`The pain is stronger than before.`, `The pain is not as strong as before.`, `The pain is just as strong as before.`], 1, `ほど では ありません means "not as much as".`],
      [`お薬《くすり》 を 飲《の》み始《はじ》めて から、 痛《いた》み は どう です か means:`, [`How has the pain been since you started taking the medicine?`, `Did the pain start after you took the medicine?`, `Please keep taking the medicine for the pain.`], 0, `飲《の》み始《はじ》めて から is "since you started taking", and 痛《いた》み is "the pain".`],
      [`Choose the correct sentence for "Unlike last week, she has started eating a little."`, [`先週《せんしゅう》 ほど、 少《すこ》し 食《た》べ始《はじ》めました。`, `先週《せんしゅう》 と 違《ちが》って、 少《すこ》し 食《た》べ始《はじ》まりました。`, `先週《せんしゅう》 と 違《ちが》って、 少《すこ》し 食《た》べ始《はじ》めました。`], 2, `"Unlike" is と 違《ちが》って, and the ending is always 〜始《はじ》める.`],
      [`Which asks whether the heaviness in the head is the same as yesterday?`, [`頭《あたま》 の 重《おも》さ は 昨日《きのう》 と 違《ちが》います か。`, `頭《あたま》 の 重《おも》さ は 昨日《きのう》 と 同《おな》じ ぐらい です か。`, `頭《あたま》 の 重《おも》い は 昨日《きのう》 と 同《おな》じ です か。`], 1, `重《おも》さ is the noun, and 同《おな》じ ぐらい asks "about the same as".`]
    ] }
);
