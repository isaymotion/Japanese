/* Lessons part 28 (0.23.0): N5, unit "Likes, amounts and frequency" (after na-adjectives): suki-jouzu, frequency-degree, dake-shika, indefinites, mada-mou, review-n5-likes.
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

  /* ============ Unit: Likes, amounts and frequency ============ */
  { id: 'suki-jouzu', level: 'N5', unit: 'Likes, amounts and frequency', after: 'na-adjectives', title: `〜が 好《す》き, 嫌《きら》い, 上手《じょうず》, 下手《へた》, わかる: likes, skills and understanding`, summary: `Say what you and other people like, dislike, are good or bad at and understand, with the thing marked by が.`, draft: true,
    body: `<p>Asking what a patient likes is more than small talk. Loss of interest in things a person used to enjoy is one of the core questions of a mood assessment, and food likes matter on the ward. You also need to ask whether a patient or a family member understands Japanese or English. All of this uses five words: 好《す》き (like), 嫌《きら》い (dislike), 上手《じょうず》 (good at), 下手《へた》 (bad at) and わかる (understand). You met 好《す》き and わかる briefly in <a href="#/lessons/wa-vs-ga">は and が</a>; this lesson gives the full pattern.</p>
<h3>How to make it</h3>
<p>The first four are な-adjectives (see <a href="#/lessons/na-adjectives">な-adjectives</a>), so their です changes for negative and past. わかる is a verb and takes ます-forms. In every case the person is marked with は and the thing liked, disliked or understood is marked with <b>が</b>, not を.</p>
<table><tr><th>Word</th><th>Kind</th><th>Pattern</th><th>Example</th></tr>
<tr><td>好《す》き like</td><td>な-adjective</td><td>person は thing が 好《す》き です</td><td>私《わたし》 は 野菜《やさい》 が 好《す》き です。</td></tr>
<tr><td>嫌《きら》い dislike</td><td>な-adjective</td><td>person は thing が 嫌《きら》い です</td><td>弟《おとうと》 は 魚《さかな》 が 嫌《きら》い です。</td></tr>
<tr><td>上手《じょうず》 good at</td><td>な-adjective</td><td>person は skill が 上手《じょうず》 です</td><td>母《はは》 は 料理《りょうり》 が 上手《じょうず》 です。</td></tr>
<tr><td>下手《へた》 bad at</td><td>な-adjective</td><td>person は skill が 下手《へた》 です</td><td>私《わたし》 は 歌《うた》 が 下手《へた》 です。</td></tr>
<tr><td>わかる understand</td><td>verb</td><td>person は thing が わかります</td><td>父《ちち》 は 英語《えいご》 が わかります。</td></tr></table>
<table><tr><th></th><th>is / does</th><th>is not / does not</th><th>was / did</th><th>was not / did not</th></tr>
<tr><td>好《す》き</td><td>好《す》き です</td><td>好《す》き では ありません</td><td>好《す》き でした</td><td>好《す》き では ありません でした</td></tr>
<tr><td>わかる</td><td>わかります</td><td>わかりません</td><td>わかりました</td><td>わかりません でした</td></tr></table>
<h3>好《す》き and 嫌《きら》い: likes and dislikes</h3>
<p>大好《だいす》き means "love, like very much". 嫌《きら》い and 大嫌《だいきら》い are strong words. To say gently that you do not care for something, use あまり 好《す》き では ありません "I don't really like it".</p>
<div class="ex"><b>私《わたし》 は 犬《いぬ》 が 大好《だいす》き です。</b><span>I love dogs.</span></div>
<div class="ex"><b>母《はは》 は 甘《あま》い もの が あまり 好《す》き では ありません。</b><span>My mother doesn't really like sweet things.</span></div>
<div class="ex"><b>好《す》き な 色《いろ》 は 何《なん》 です か。</b><span>What is your favourite colour?</span></div>
<div class="ex"><b>嫌《きら》い な 食《た》べ物《もの》 は あります か。</b><span>Is there any food you dislike?</span></div>
<h3>上手《じょうず》 and 下手《へた》: good at, bad at</h3>
<p>上手《じょうず》 is praise for someone else. Do not use it about yourself: it sounds boastful. For your own ability, say できます "I can (do it)". 下手《へた》 is fine about yourself but rude about another person.</p>
<div class="ex"><b>田中《たなか》さん は 歌《うた》 が 上手《じょうず》 です ね。</b><span>Tanaka-san is good at singing, isn't she.</span></div>
<div class="ex"><b>私《わたし》 は 料理《りょうり》 が 下手《へた》 です。</b><span>I'm bad at cooking.</span></div>
<div class="ex"><b>姉《あね》 は テニス が できます。</b><span>My older sister can play tennis.</span></div>
<div class="ex"><b>「日本語《にほんご》 が 上手《じょうず》 です ね。」「いいえ、 まだまだ です。」</b><span>"Your Japanese is good." "No, I still have a long way to go."</span></div>
<p>The second line is the usual modest reply when someone praises you. Japanese speakers rarely answer praise with はい.</p>
<h3>わかる: understand</h3>
<p>わかる is a verb, but like 好《す》き it marks its object with が. わかりました is also the everyday way to say "I see, understood, all right" after an explanation or a request.</p>
<div class="ex"><b>ご家族《かぞく》 は 英語《えいご》 が わかります か。</b><span>Does your family understand English?</span></div>
<div class="ex"><b>日本語《にほんご》 が 少《すこ》し わかります。</b><span>I understand a little Japanese.</span></div>
<div class="ex"><b>すみません、 よく わかりません。</b><span>I'm sorry, I don't quite understand.</span></div>
<div class="ex"><b>はい、 わかりました。</b><span>Yes, I understand. (All right.)</span></div>
<h3>In the interview</h3>
<p>To ask about loss of interest, compare now with before: 前《まえ》 は (before) and 今《いま》 も (still, now too).</p>
<div class="ex"><b>前《まえ》 は 何《なに》 が 好《す》き でした か。</b><span>What did you use to like?</span></div>
<div class="ex"><b>今《いま》 も 音楽《おんがく》 が 好《す》き です か。</b><span>Do you still like music now?</span></div>
<div class="ex"><b>最近《さいきん》 は テレビ も 映画《えいが》 も 楽《たの》しく ありません。</b><span>Lately neither TV nor films are any fun.</span></div>
<div class="ex"><b>病院《びょういん》 の ご飯《はん》 は 大丈夫《だいじょうぶ》 です か。 嫌《きら》い な もの は ありません か。</b><span>Is the hospital food all right? Is there anything you dislike?</span></div>
<div class="note">The most common mistake is を: say 野菜《やさい》 が 好《す》き です, not 野菜《やさい》 を 好《す》き です, and 英語《えいご》 が わかります. Keep 上手《じょうず》 for other people, and soften dislikes with あまり 好《す》き では ありません.</div>`,
    quiz: [
      [`私《わたし》 は コーヒー ＿ 好《す》き です。 Which particle fits?`, [`を`, `が`, `で`], 1, `The thing liked is marked with が.`],
      [`Which is the gentle way to say "I don't really like raw fish"?`, [`生《なま》 の 魚《さかな》 が 大嫌《だいきら》い です。`, `生《なま》 の 魚《さかな》 を 好《す》き です。`, `生《なま》 の 魚《さかな》 は あまり 好《す》き では ありません。`], 2, `あまり + negative softens it; 大嫌《だいきら》い means "hate".`],
      [`What does 弟《おとうと》 は 絵《え》 が 下手《へた》 です mean?`, [`My younger brother is bad at drawing.`, `My younger brother is good at drawing.`, `My younger brother doesn't like drawing.`], 0, `下手《へた》 means "bad at".`],
      [`How do you ask "Do you understand Japanese?"`, [`日本語《にほんご》 が わかり です か。`, `日本語《にほんご》 が わかります か。`, `日本語《にほんご》 が 上手《じょうず》 でした か。`], 1, `わかる is a verb: its polite question is わかります か.`],
      [`"As a child I didn't like vegetables": 子供《こども》 の とき、 野菜《やさい》 が ＿。`, [`好《す》き では ありません でした`, `好《す》きくなかった です`, `好《す》き でした`], 0, `好《す》き is a な-adjective, so its past negative is では ありません でした.`],
      [`A patient says はい、 わかりました after your explanation. This means:`, [`I didn't understand.`, `Do you understand?`, `I understand, all right.`], 2, `わかりました is the usual "understood, all right".`]
    ] },

  { id: 'frequency-degree', level: 'N5', unit: 'Likes, amounts and frequency', after: 'suki-jouzu', title: `よく, 時々《ときどき》, あまり, 全然《ぜんぜん》; とても, 少《すこ》し, ちょっと: how often and how much`, summary: `Say how often something happens and how strong it is, and ask patients about frequency.`, draft: true,
    body: `<p>Symptoms are described by how often they happen and how bad they are: headaches sometimes, sleep not at all, appetite not much. These small adverbs carry that information. You met とても, 少《すこ》し and あまり with adjectives in <a href="#/lessons/i-adjectives">い-adjectives</a>; here they work with verbs too, and you add the words for frequency.</p>
<h3>How to make it</h3>
<p>The adverb goes before the verb or adjective, usually after the topic. Some adverbs need a positive verb, some need a negative one. The verb does not change; only the adverb is added.</p>
<table><tr><th>Adverb</th><th>Meaning</th><th>Verb</th><th>Example</th></tr>
<tr><td>毎日《まいにち》</td><td>every day</td><td>positive</td><td>毎日《まいにち》 散歩《さんぽ》します。</td></tr>
<tr><td>よく</td><td>often</td><td>positive</td><td>よく 映画《えいが》 を 見《み》ます。</td></tr>
<tr><td>時々《ときどき》</td><td>sometimes</td><td>positive</td><td>時々《ときどき》 お酒《さけ》 を 飲《の》みます。</td></tr>
<tr><td>あまり</td><td>not often, not much</td><td>negative</td><td>あまり 外《そと》 に 出《で》ません。</td></tr>
<tr><td>全然《ぜんぜん》</td><td>not at all, never</td><td>negative</td><td>全然《ぜんぜん》 運動《うんどう》しません。</td></tr></table>
<table><tr><th>Adverb</th><th>Meaning</th><th>Goes with</th><th>Example</th></tr>
<tr><td>とても</td><td>very</td><td>positive (adjectives, feelings)</td><td>とても 疲《つか》れました。</td></tr>
<tr><td>少《すこ》し</td><td>a little</td><td>both</td><td>少《すこ》し 痛《いた》い です。</td></tr>
<tr><td>ちょっと</td><td>a little (spoken)</td><td>both</td><td>ちょっと 寒《さむ》い です。</td></tr>
<tr><td>たくさん</td><td>a lot (amount)</td><td>positive</td><td>水《みず》 を たくさん 飲《の》みます。</td></tr></table>
<h3>How often: よく, 時々《ときどき》</h3>
<div class="ex"><b>週末《しゅうまつ》 は よく 公園《こうえん》 を 散歩《さんぽ》します。</b><span>At weekends I often take a walk in the park.</span></div>
<div class="ex"><b>時々《ときどき》 頭《あたま》 が 痛《いた》い です。</b><span>I sometimes get headaches.</span></div>
<div class="ex"><b>夜《よる》 は 時々《ときどき》 目《め》 が 覚《さ》めます。</b><span>I sometimes wake up at night.</span></div>
<div class="ex"><b>よく 夢《ゆめ》 を 見《み》ます か。</b><span>Do you often dream?</span></div>
<h3>Not often, not at all: あまり and 全然《ぜんぜん》 + negative</h3>
<p>あまり and 全然《ぜんぜん》 need a negative verb or adjective. あまり is softer ("not much"); 全然《ぜんぜん》 is total ("not at all").</p>
<div class="ex"><b>最近《さいきん》 は あまり 食《た》べません。</b><span>Lately I don't eat much.</span></div>
<div class="ex"><b>外《そと》 に は あまり 出《で》ません。</b><span>I don't go out much.</span></div>
<div class="ex"><b>お酒《さけ》 は 全然《ぜんぜん》 飲《の》みません。</b><span>I don't drink alcohol at all.</span></div>
<p>You will hear young people say 全然《ぜんぜん》 大丈夫《だいじょうぶ》 です "totally fine". This is casual; in your own speech use 全然《ぜんぜん》 only with a negative.</p>
<h3>よく: often, and also well</h3>
<p>With an action verb よく means "often". With わかる and similar verbs it means "well".</p>
<div class="ex"><b>母《はは》 は よく 病院《びょういん》 に 来《き》ます。</b><span>My mother often comes to the hospital.</span></div>
<div class="ex"><b>先生《せんせい》 の 説明《せつめい》 が よく わかりました。</b><span>I understood the doctor's explanation well.</span></div>
<h3>How much: とても, 少《すこ》し, ちょっと</h3>
<p>ちょっと is the spoken form of 少《すこ》し. It also softens a request or a refusal: すみません、 今日《きょう》 は ちょっと…。 is a polite "today is a bit difficult" (see <a href="#/lessons/conversation-habits">conversation habits</a>).</p>
<div class="ex"><b>今日《きょう》 は とても 疲《つか》れました。</b><span>I'm very tired today.</span></div>
<div class="ex"><b>少《すこ》し 熱《ねつ》 が あります。</b><span>I have a slight fever.</span></div>
<h3>Asking how often</h3>
<p>Ask with どの くらい or 何回《なんかい》, and answer with a counter (see <a href="#/lessons/counters">counters</a>): 一日《いちにち》 に 三回《さんかい》, 週《しゅう》 に 一回《いっかい》.</p>
<div class="ex"><b>「お酒《さけ》 は どの くらい 飲《の》みます か。」「週《しゅう》 に 一回《いっかい》 ぐらい です。」</b><span>"How much do you drink?" "About once a week."</span></div>
<div class="ex"><b>ご飯《はん》 は 一日《いちにち》 に 何回《なんかい》 食《た》べます か。</b><span>How many meals do you eat a day?</span></div>
<h3>In the interview</h3>
<div class="ex"><b>夜《よる》 は よく 目《め》 が 覚《さ》めます か。</b><span>Do you often wake up at night?</span></div>
<div class="ex"><b>「食欲《しょくよく》 は どう です か。」「あまり ありません。」</b><span>"How is your appetite?" "I don't have much."</span></div>
<div class="ex"><b>時々《ときどき》 とても 不安《ふあん》 です。</b><span>Sometimes I feel very anxious.</span></div>
<div class="note">あまり and 全然《ぜんぜん》 need a negative: あまり 食《た》べません, not あまり 食《た》べます. With an action verb, "a lot" is たくさん and "often" is よく; とても goes mainly with adjectives and feelings, so do not say とても 行《い》きます.</div>`,
    quiz: [
      [`お酒《さけ》 は ＿ 飲《の》みません。 "I don't drink at all."`, [`全然《ぜんぜん》`, `時々《ときどき》`, `とても`], 0, `全然《ぜんぜん》 + negative means "not at all".`],
      [`Which is correct for "Lately I don't eat much"?`, [`最近《さいきん》 は あまり 食《た》べます。`, `最近《さいきん》 は あまり 食《た》べません。`, `最近《さいきん》 は とても 食《た》べません。`], 1, `あまり needs a negative verb.`],
      [`What does 時々《ときどき》 頭《あたま》 が 痛《いた》い です mean?`, [`I always have a headache.`, `I never have headaches.`, `I sometimes get headaches.`], 2, `時々《ときどき》 means "sometimes".`],
      [`In 先生《せんせい》 の 説明《せつめい》 が よく わかりました, よく means:`, [`often`, `well`, `a little`], 1, `With わかる, よく means "well".`],
      [`Which answers お酒《さけ》 は どの くらい 飲《の》みます か。?`, [`週《しゅう》 に 二回《にかい》 ぐらい です。`, `家《いえ》 で 飲《の》みます。`, `全然《ぜんぜん》 飲《の》みます。`], 0, `どの くらい asks how much or how often; 全然《ぜんぜん》 cannot go with a positive verb.`],
      [`Which word softens a polite refusal: すみません、 今日《きょう》 は ＿…。`, [`よく`, `とても`, `ちょっと`], 2, `ちょっと… leaves the refusal unfinished, which is polite.`]
    ] },

  { id: 'dake-shika', level: 'N5', unit: 'Likes, amounts and frequency', after: 'frequency-degree', title: `だけ, しか 〜ません, ぐらい / ごろ: only, nothing but, about`, summary: `Say "only" in two ways and give approximate amounts and times.`, draft: true,
    body: `<p>"I only slept three hours", "I've eaten nothing but bread", "since about March", "around eleven": a patient's history is full of limits and approximations. Japanese has two ways to say "only" (だけ and しか) and two words for "about" (ぐらい and ごろ). You met ぐらい in <a href="#/lessons/time-dates">time, days and dates</a>; this lesson sets it beside ごろ.</p>
<h3>How to make it</h3>
<table><tr><th>Pattern</th><th>Attaches to</th><th>Verb</th><th>Example</th></tr>
<tr><td>〜だけ</td><td>noun, number + counter</td><td>positive or negative</td><td>水《みず》 だけ 飲《の》みました。</td></tr>
<tr><td>〜しか 〜ません</td><td>noun, number + counter</td><td>always negative</td><td>水《みず》 しか 飲《の》みません でした。</td></tr>
<tr><td>〜ぐらい (くらい)</td><td>an amount or length of time</td><td>any</td><td>三十分《さんじゅっぷん》 ぐらい</td></tr>
<tr><td>〜ごろ</td><td>a point in time (clock time, date, month)</td><td>any</td><td>七時《しちじ》 ごろ</td></tr></table>
<p>だけ and しか take the place of が and を. Other particles usually stay in front of them: 先生《せんせい》 に だけ, 家《いえ》 で しか.</p>
<h3>だけ: only</h3>
<p>だけ states a limit plainly.</p>
<div class="ex"><b>朝《あさ》 は コーヒー だけ 飲《の》みました。</b><span>In the morning I only had coffee.</span></div>
<div class="ex"><b>昼《ひる》ご飯《はん》 は 少《すこ》し だけ 食《た》べました。</b><span>I ate just a little lunch.</span></div>
<div class="ex"><b>今日《きょう》 は 血圧《けつあつ》 だけ 測《はか》ります。</b><span>Today we will only measure your blood pressure.</span></div>
<div class="ex"><b>この こと は 先生《せんせい》 に だけ 話《はな》しました。</b><span>I told only the doctor about this.</span></div>
<h3>しか 〜ません: nothing but</h3>
<p>しか also means "only", but the verb is always negative, and it stresses that the amount is small, less than expected or not enough. Think of it as "nothing except".</p>
<div class="ex"><b>昨日《きのう》 は パン しか 食《た》べません でした。</b><span>Yesterday I ate nothing but bread.</span></div>
<div class="ex"><b>三時間《さんじかん》 しか 寝《ね》ません でした。</b><span>I only slept three hours.</span></div>
<div class="ex"><b>財布《さいふ》 に 千円《せんえん》 しか ありません。</b><span>I only have a thousand yen in my wallet.</span></div>
<div class="ex"><b>家族《かぞく》 は 母《はは》 しか いません。</b><span>My mother is my only family.</span></div>
<p>Compare: パン だけ 食《た》べました simply reports it; パン しか 食《た》べません でした adds "and that was too little".</p>
<h3>ぐらい: about (an amount)</h3>
<p>ぐらい (also くらい) follows an amount: minutes, hours, days, times, people, money.</p>
<div class="ex"><b>毎日《まいにち》 三十分《さんじゅっぷん》 ぐらい 散歩《さんぽ》します。</b><span>I walk for about thirty minutes every day.</span></div>
<div class="ex"><b>一週間《いっしゅうかん》 ぐらい 前《まえ》 から 咳《せき》 が 出《で》ます。</b><span>I've had a cough since about a week ago.</span></div>
<div class="ex"><b>夜《よる》 は 何時間《なんじかん》 ぐらい 寝《ね》ます か。</b><span>About how many hours do you sleep at night?</span></div>
<h3>ごろ: about (a point in time)</h3>
<p>ごろ follows a clock time, a date or a month: "around eleven", "around March".</p>
<div class="ex"><b>毎晩《まいばん》 十一時《じゅういちじ》 ごろ 寝《ね》ます。</b><span>I go to bed around eleven every night.</span></div>
<div class="ex"><b>三月《さんがつ》 ごろ から 元気《げんき》 が ありません。</b><span>I've had no energy since around March.</span></div>
<p>So 三時間《さんじかん》 ぐらい is "for about three hours" and 三時《さんじ》 ごろ is "at about three o'clock". In speech you will also hear 三時《さんじ》 ぐらい, but 三時間《さんじかん》 ごろ is wrong.</p>
<h3>In the interview</h3>
<div class="ex"><b>朝《あさ》 は 何時《なんじ》 ごろ 起《お》きます か。</b><span>About what time do you get up in the morning?</span></div>
<div class="ex"><b>「一日《いちにち》 に 一回《いっかい》 しか 食《た》べません。」</b><span>"I only eat once a day."</span></div>
<div class="ex"><b>今日《きょう》 は 十五分《じゅうごふん》 ぐらい お話《はなし》しましょう。</b><span>Today let's talk for about fifteen minutes.</span></div>
<p>The N3 lesson <a href="#/lessons/dake-shika-sae">だけ, しか, ばかり, さえ, こそ</a> builds on this later.</p>
<div class="note">しか always takes a negative verb: パン しか 食《た》べません でした, never パン しか 食《た》べました. Use ぐらい for amounts and ごろ for points in time.</div>`,
    quiz: [
      [`三時間《さんじかん》 ＿ 寝《ね》ません でした。 "I only slept three hours."`, [`だけ`, `しか`, `ごろ`], 1, `"Only", with a negative verb, is しか.`],
      [`Which means "I drank only water"?`, [`水《みず》 だけ 飲《の》みました。`, `水《みず》 しか 飲《の》みました。`, `水《みず》 ごろ 飲《の》みました。`], 0, `だけ goes with a positive verb; しか needs a negative.`],
      [`How do you say "for about two hours"?`, [`二時《にじ》 ごろ`, `二時間《にじかん》 しか`, `二時間《にじかん》 ぐらい`], 2, `ぐらい follows an amount of time; 二時《にじ》 ごろ is "around two o'clock".`],
      [`What does 家族《かぞく》 は 母《はは》 しか いません mean?`, [`My mother is my only family.`, `My mother is not in my family.`, `My family lives with my mother.`], 0, `しか + negative means "nothing but, only".`],
      [`毎晩《まいばん》 十一時《じゅういちじ》 ＿ 寝《ね》ます。 "I go to bed around eleven."`, [`しか`, `だけ`, `ごろ`], 2, `ごろ follows a point in time.`],
      [`Which sentence stresses that the amount was too little?`, [`パン だけ 食《た》べました。`, `パン しか 食《た》べません でした。`, `パン も 食《た》べました。`], 1, `しか 〜ません carries the feeling "nothing except, not enough".`]
    ] },

  { id: 'indefinites', level: 'N5', unit: 'Likes, amounts and frequency', after: 'dake-shika', title: `何《なに》 か / 何《なに》 も, 誰《だれ》 か / 誰《だれ》 も, どこ か / どこ も, いつも: something, nothing, always`, summary: `Say and ask about something, someone and somewhere, answer with nothing, no one and nowhere, and say always.`, draft: true,
    body: `<p>Open questions such as "is there anything...?", "did you talk to anyone?" and "does it hurt anywhere?" are the backbone of a screening interview, and patients often answer with "nothing" or "no one". In <a href="#/lessons/question-words">question words</a> you saw that a question word + か means "something" and + も means "nothing". This lesson sets out the full pattern and the particles that go with it.</p>
<h3>How to make it</h3>
<table><tr><th>Question word</th><th>+ か: some- (positive or question)</th><th>+ も with a negative: no-</th></tr>
<tr><td>何《なに》 what</td><td>何《なに》 か something, anything</td><td>何《なに》 も 〜ません nothing</td></tr>
<tr><td>誰《だれ》 who</td><td>誰《だれ》 か someone, anyone</td><td>誰《だれ》 も 〜ません no one</td></tr>
<tr><td>どこ where</td><td>どこ か somewhere, anywhere</td><td>どこ も / どこ に も 〜ません nowhere</td></tr>
<tr><td>いつ when</td><td>いつ か some day</td><td>いつも always (positive)</td></tr></table>
<p>Particles: が and を drop before も (何《なに》 も 食《た》べません, not 何《なに》 を も). Other particles go between the word and も: どこ に も, 誰《だれ》 に も, 誰《だれ》 と も. After か, particles simply follow: 誰《だれ》 か に, どこ か へ.</p>
<h3>何《なに》 か and 何《なに》 も</h3>
<div class="ex"><b>「何《なに》 か 食《た》べました か。」「いいえ、 何《なに》 も 食《た》べません でした。」</b><span>"Did you eat anything?" "No, I didn't eat anything."</span></div>
<div class="ex"><b>何《なに》 か 質問《しつもん》 は あります か。</b><span>Do you have any questions?</span></div>
<div class="ex"><b>昨日《きのう》 は 何《なに》 も しません でした。</b><span>I did nothing yesterday.</span></div>
<div class="ex"><b>何《なに》 か 飲《の》みます か。</b><span>Would you like something to drink?</span></div>
<h3>誰《だれ》 か and 誰《だれ》 も</h3>
<div class="ex"><b>昨日《きのう》、 誰《だれ》 か お見舞《みま》い に 来《き》ました か。</b><span>Did anyone come to visit you yesterday?</span></div>
<div class="ex"><b>昼《ひる》 は 家《いえ》 に 誰《だれ》 も いません。</b><span>There is nobody at home during the day.</span></div>
<div class="ex"><b>誰《だれ》 か に 相談《そうだん》しました か。</b><span>Did you talk to anyone about it?</span></div>
<h3>どこ か and どこ も</h3>
<div class="ex"><b>「週末《しゅうまつ》 は どこ か へ 行《い》きました か。」「いいえ、 どこ に も 行《い》きません でした。」</b><span>"Did you go anywhere at the weekend?" "No, I didn't go anywhere."</span></div>
<div class="ex"><b>今《いま》 は どこ も 痛《いた》く ありません。</b><span>Nothing hurts now.</span></div>
<p>For a place you go to, keep に or へ before も: どこ に も 行《い》きません. With an adjective such as 痛《いた》い, どこ も is enough.</p>
<h3>いつも and いつ か</h3>
<p>いつも is the exception: it means "always" and goes with a positive verb. For "never", use 全然《ぜんぜん》 + negative (see <a href="#/lessons/frequency-degree">how often and how much</a>).</p>
<div class="ex"><b>いつも 七時《しちじ》 に 起《お》きます。</b><span>I always get up at seven.</span></div>
<div class="ex"><b>お薬《くすり》 は いつも 朝《あさ》 飲《の》みます か。</b><span>Do you always take your medicine in the morning?</span></div>
<div class="ex"><b>いつ か また 会《あ》いましょう。</b><span>Let's meet again some day.</span></div>
<h3>In the interview</h3>
<div class="ex"><b>どこ か 痛《いた》い ところ は あります か。</b><span>Is there anywhere that hurts?</span></div>
<div class="ex"><b>「この こと は 誰《だれ》 に も 話《はな》しません でした。」</b><span>"I didn't tell anyone about this."</span></div>
<div class="ex"><b>「最近《さいきん》 は 何《なに》 も 楽《たの》しく ありません。」</b><span>"Lately nothing is enjoyable."</span></div>
<p>When a patient says 誰《だれ》 に も 話《はな》しません でした, a calm ありがとう ございます before your next question thanks them for telling you.</p>
<div class="note">Question word + も needs a negative: 何《なに》 も 食《た》べません, 誰《だれ》 も 来《き》ません でした; never 何《なに》 も 食《た》べました. Drop が and を before も, keep に and へ: どこ に も 行《い》きません. And いつも means "always", not "never".</div>`,
    quiz: [
      [`「何《なに》 か 食《た》べました か。」「いいえ、 何《なに》 ＿ 食《た》べません でした。」`, [`か`, `も`, `を`], 1, `"Nothing" with a negative verb is 何《なに》 も.`],
      [`What does どこ か 痛《いた》い ところ は あります か mean?`, [`Where does it hurt the most?`, `Nothing hurts, does it?`, `Is there anywhere that hurts?`], 2, `どこ か means "somewhere, anywhere".`],
      [`How do you say "I didn't tell anyone"?`, [`誰《だれ》 に も 話《はな》しません でした。`, `誰《だれ》 か に 話《はな》しました。`, `誰《だれ》 も に 話《はな》しました。`], 0, `に goes between 誰《だれ》 and も, and the verb is negative.`],
      [`Which sentence is correct?`, [`昨日《きのう》 は 何《なに》 も しました。`, `昨日《きのう》 は 何《なに》 を も しません でした。`, `昨日《きのう》 は 何《なに》 も しません でした。`], 2, `を drops before も, and 何《なに》 も needs a negative.`],
      [`What does いつも mean?`, [`always`, `never`, `some day`], 0, `いつも is "always" and takes a positive verb.`],
      [`「どこ か へ 行《い》きました か。」「いいえ、 どこ ＿ 行《い》きません でした。」`, [`も に`, `に も`, `か に`], 1, `The particle comes before も: どこ に も.`]
    ] },

  { id: 'mada-mou', level: 'N5', unit: 'Likes, amounts and frequency', after: 'indefinites', title: `まだ and もう: still, not yet, already, no longer`, summary: `Say and ask whether something has already happened, has not happened yet, is still going on or has stopped.`, draft: true,
    body: `<p>"Have you taken your medicine yet?", "does it still hurt?", "I don't smoke any more": on a ward round you ask about change all the time. Two small words do this work. もう looks at something that has happened or has changed; まだ looks at something that has not happened yet or has not changed.</p>
<h3>How to make it</h3>
<p>Which meaning you get depends on whether the verb is positive or negative.</p>
<table><tr><th></th><th>With a positive verb or adjective</th><th>With a negative</th></tr>
<tr><td>もう</td><td>already: もう 飲《の》みました</td><td>no longer, not any more: もう 飲《の》みません</td></tr>
<tr><td>まだ</td><td>still: まだ 痛《いた》い です</td><td>not yet: まだ です, まだ 飲《の》んで いません</td></tr></table>
<h3>もう + ました: already</h3>
<div class="ex"><b>お薬《くすり》 は もう 飲《の》みました か。</b><span>Have you taken your medicine already?</span></div>
<div class="ex"><b>はい、 もう 朝《あさ》ご飯《はん》 を 食《た》べました。</b><span>Yes, I've already had breakfast.</span></div>
<div class="ex"><b>検査《けんさ》 は もう 終《お》わりました。</b><span>The test is already finished.</span></div>
<h3>まだ + positive: still</h3>
<p>With a positive verb, an adjective or a noun, まだ means "still": the situation has not changed yet. まだ 学生《がくせい》 です is "I'm still a student".</p>
<div class="ex"><b>まだ 頭《あたま》 が 痛《いた》い です か。</b><span>Does your head still hurt?</span></div>
<div class="ex"><b>父《ちち》 は まだ 病院《びょういん》 に います。</b><span>My father is still in hospital.</span></div>
<h3>まだ です: not yet</h3>
<p>The short answer to a もう question is まだ です "not yet". Do not answer with まだ 〜ません: まだ 食《た》べません means "I'm not going to eat yet", and まだ 食《た》べません でした is wrong for "I haven't eaten yet".</p>
<div class="ex"><b>「お昼《ひる》 は もう 食《た》べました か。」「いいえ、 まだ です。」</b><span>"Have you had lunch yet?" "No, not yet."</span></div>
<h3>もう + negative: no longer</h3>
<div class="ex"><b>もう 痛《いた》く ありません。</b><span>It doesn't hurt any more.</span></div>
<div class="ex"><b>父《ちち》 は もう タバコ を 吸《す》いません。</b><span>My father doesn't smoke any more.</span></div>
<p>With a word such as 大丈夫《だいじょうぶ》 the meaning is "now": もう 大丈夫《だいじょうぶ》 です "I'm all right now".</p>
<h3>Look-alike: もう + an amount means "more"</h3>
<p>Before a number or 少《すこ》し, もう means "more, another". You will use this every day as a learner.</p>
<div class="ex"><b>すみません、 もう 一度《いちど》 お願《ねが》い します。</b><span>Sorry, once more, please.</span></div>
<div class="ex"><b>もう 少《すこ》し ゆっくり お願《ねが》い します。</b><span>A little more slowly, please.</span></div>
<h3>With 〜て います (come back after the て-form unit)</h3>
<p>The full "not yet" is まだ + 〜て いません, and "no longer doing" can be もう + 〜て いません. Both are taught in <a href="#/lessons/te-imasu">〜て います</a>, after <a href="#/lessons/te-form">making the て-form</a>; here are a few more models.</p>
<div class="ex"><b>検査《けんさ》 の 結果《けっか》 は まだ 来《き》て いません。</b><span>The test results haven't come yet.</span></div>
<div class="ex"><b>母《はは》 は まだ 寝《ね》て います。</b><span>My mother is still asleep.</span></div>
<div class="ex"><b>今《いま》 は もう 働《はたら》いて いません。</b><span>I'm not working any more.</span></div>
<h3>On the ward</h3>
<div class="ex"><b>吐《は》き気《け》 は まだ あります か。</b><span>Do you still feel sick?</span></div>
<div class="ex"><b>「もう 大丈夫《だいじょうぶ》 です。」</b><span>"I'm all right now."</span></div>
<div class="ex"><b>「いいえ、 まだ 少《すこ》し 不安《ふあん》 です。」</b><span>"No, I'm still a little anxious."</span></div>
<div class="note">もう + positive = already; もう + negative = no longer. まだ + positive = still; "not yet" is まだ です or まだ 〜て いません, never まだ 〜ません でした. もう 一度《いちど》 and もう 少《すこ》し mean "once more" and "a little more".</div>`,
    quiz: [
      [`「お薬《くすり》 は もう 飲《の》みました か。」 How do you answer "Not yet" briefly?`, [`もう です。`, `まだ 飲《の》みました。`, `まだ です。`], 2, `まだ です is the short "not yet".`],
      [`What does もう 痛《いた》く ありません mean?`, [`It doesn't hurt yet.`, `It doesn't hurt any more.`, `It still hurts.`], 1, `もう + negative means "no longer".`],
      [`How do you ask "Does your head still hurt?"`, [`まだ 頭《あたま》 が 痛《いた》い です か。`, `もう 頭《あたま》 が 痛《いた》い です か。`, `まだ 頭《あたま》 が 痛《いた》く ありません か。`], 0, `まだ + positive means "still".`],
      [`In もう 一度《いちど》 お願《ねが》い します, もう means:`, [`already`, `no longer`, `once more, again`], 2, `Before an amount, もう means "more, another".`],
      [`検査《けんさ》 は ＿ 終《お》わりました。 "The test has already finished."`, [`まだ`, `もう`, `いつも`], 1, `もう + past means "already".`],
      [`Which means "My father doesn't smoke any more"?`, [`父《ちち》 は もう タバコ を 吸《す》いません。`, `父《ちち》 は まだ タバコ を 吸《す》いません。`, `父《ちち》 は もう タバコ を 吸《す》いました。`], 0, `もう + negative is "no longer"; まだ 吸《す》いません is "not smoking yet".`]
    ] },

  { id: 'review-n5-likes', level: 'N5', unit: 'Likes, amounts and frequency', after: 'mada-mou', review: true, title: `Review: Likes, amounts and frequency`, summary: `Gather and test likes and skills, frequency and degree, only and about, indefinite words, and まだ and もう.`, draft: true,
    body: `<p>This review gathers the five lessons of the unit. Read the table, check the "Watch out" list, then try the quiz.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜が 好《す》き / 嫌《きら》い です</td><td>like, dislike</td><td>弟《おとうと》 は 野菜《やさい》 が 嫌《きら》い です。</td></tr>
<tr><td>〜が 上手《じょうず》 / 下手《へた》 です</td><td>good at, bad at</td><td>母《はは》 は 歌《うた》 が 上手《じょうず》 です。</td></tr>
<tr><td>〜が わかります</td><td>understand</td><td>英語《えいご》 が 少《すこ》し わかります。</td></tr>
<tr><td>よく, 時々《ときどき》 + positive</td><td>often, sometimes</td><td>時々《ときどき》 お腹《なか》 が 痛《いた》い です。</td></tr>
<tr><td>あまり, 全然《ぜんぜん》 + negative</td><td>not much, not at all</td><td>テレビ は 全然《ぜんぜん》 見《み》ません。</td></tr>
<tr><td>とても, 少《すこ》し, ちょっと</td><td>very, a little</td><td>今日《きょう》 は 少《すこ》し 寒《さむ》い です。</td></tr>
<tr><td>だけ</td><td>only</td><td>お茶《ちゃ》 だけ 飲《の》みました。</td></tr>
<tr><td>しか + negative</td><td>nothing but</td><td>二時間《にじかん》 しか 寝《ね》ません でした。</td></tr>
<tr><td>ぐらい / ごろ</td><td>about (amount) / about (time)</td><td>十時《じゅうじ》 ごろ 来《き》ます。</td></tr>
<tr><td>何《なに》 か, 誰《だれ》 か, どこ か</td><td>something, someone, somewhere</td><td>誰《だれ》 か 来《き》ました か。</td></tr>
<tr><td>何《なに》 も, 誰《だれ》 も, どこ に も + negative</td><td>nothing, no one, nowhere</td><td>家《いえ》 に は 誰《だれ》 も いません。</td></tr>
<tr><td>いつも</td><td>always</td><td>朝《あさ》 は いつも コーヒー を 飲《の》みます。</td></tr>
<tr><td>もう + ました / ません</td><td>already / no longer</td><td>もう 終《お》わりました。</td></tr>
<tr><td>まだ + positive / まだ です</td><td>still / not yet</td><td>まだ 熱《ねつ》 が あります。</td></tr></table>
<h3>Watch out</h3>
<ul><li>が, not を, with 好《す》き, 嫌《きら》い, 上手《じょうず》, 下手《へた》 and わかる.</li>
<li>あまり, 全然《ぜんぜん》, しか and question word + も all need a negative verb.</li>
<li>ぐらい follows an amount (三時間《さんじかん》 ぐらい); ごろ follows a point in time (三時《さんじ》 ごろ).</li>
<li>いつも means "always", not "never".</li>
<li>"Not yet" is まだ です or まだ 〜て いません; もう 〜ません means "no longer".</li></ul>
<h3>Patterns together</h3>
<div class="ex"><b>夜《よる》 は 三時間《さんじかん》 ぐらい しか 寝《ね》ません。</b><span>At night I only sleep about three hours.</span></div>
<div class="ex"><b>父《ちち》 は もう お酒《さけ》 を 全然《ぜんぜん》 飲《の》みません。</b><span>My father doesn't drink at all any more.</span></div>
<div class="ex"><b>最近《さいきん》 は あまり 食《た》べません。 果物《くだもの》 を 少《すこ》し だけ 食《た》べます。</b><span>Lately I don't eat much. I eat just a little fruit.</span></div>
<div class="ex"><b>何《なに》 か 好《す》き な スポーツ は あります か。</b><span>Is there a sport you like?</span></div>
<div class="ex"><b>いつも 七時《しちじ》 ごろ 起《お》きます。</b><span>I always get up around seven.</span></div>`,
    quiz: [
      [`弟《おとうと》 は 漢字《かんじ》 ＿ 上手《じょうず》 です。`, [`が`, `を`, `で`], 0, `上手《じょうず》 marks the skill with が.`],
      [`Which means "Lately I don't watch much TV"?`, [`最近《さいきん》 は あまり テレビ を 見《み》ます。`, `最近《さいきん》 は あまり テレビ を 見《み》ません。`, `最近《さいきん》 は とても テレビ を 見《み》ません。`], 1, `あまり needs a negative verb.`],
      [`千円《せんえん》 ＿ ありません。 "I have only a thousand yen."`, [`しか`, `だけ`, `ごろ`], 0, `"Only" with a negative verb is しか.`],
      [`六時間《ろくじかん》 ＿ 寝《ね》ました。 "I slept for about six hours."`, [`ごろ`, `しか`, `ぐらい`], 2, `ぐらい follows an amount of time; しか would need a negative.`],
      [`How do you say "Nobody came"?`, [`誰《だれ》 か 来《き》ません でした。`, `誰《だれ》 も 来《き》ません でした。`, `誰《だれ》 も 来《き》ました。`], 1, `誰《だれ》 も + negative means "no one".`],
      [`「もう 終《お》わりました か。」 Which means "Not yet"?`, [`もう です。`, `まだ 終《お》わりません でした。`, `まだ です。`], 2, `The short "not yet" is まだ です.`],
      [`What does 野菜《やさい》 が あまり 好《す》き では ありません mean?`, [`I never eat vegetables.`, `I like vegetables very much.`, `I don't really like vegetables.`], 2, `あまり + negative softens: "not really".`],
      [`What does 夜《よる》 は 三時間《さんじかん》 ぐらい しか 寝《ね》ません mean?`, [`I go to bed around three at night.`, `I only sleep about three hours a night.`, `I sleep about three hours more than before.`], 1, `ぐらい is "about" an amount and しか 〜ません is "only".`],
      [`Which means "My father doesn't drink at all any more"?`, [`父《ちち》 は もう お酒《さけ》 を 全然《ぜんぜん》 飲《の》みません。`, `父《ちち》 は まだ お酒《さけ》 を よく 飲《の》みます。`, `父《ちち》 は もう お酒《さけ》 を 全然《ぜんぜん》 飲《の》みました。`], 0, `もう + negative is "no longer", and 全然《ぜんぜん》 needs a negative.`],
      [`何《なに》 ＿ 好《す》き な スポーツ は あります か。 "Is there a sport you like?"`, [`も`, `を`, `か`], 2, `In a question, "any" is 何《なに》 か.`],
      [`最近《さいきん》 は あまり 食《た》べません。 果物《くだもの》 を 少《すこ》し ＿ 食《た》べます。`, [`しか`, `だけ`, `ごろ`], 1, `だけ goes with a positive verb; しか would need a negative.`],
      [`「まだ 痛《いた》い です か。」「いいえ、 ＿ 痛《いた》く ありません。」`, [`もう`, `まだ`, `よく`], 0, `"Not any more" is もう + negative.`]
    ] }
);
