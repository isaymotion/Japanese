/* Lessons part 31 (0.23.0): N4, unit "Wishes, feelings and reported speech" (after commands): te-hoshii, garu, to-iu, reported-requests, review-n4-wishes.
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

  { id: 'te-hoshii', level: 'N4', unit: 'Wishes, feelings and reported speech', after: 'commands', title: `〜て ほしい, 〜ないで ほしい, 〜て もらいたい: wanting someone else to act`, summary: `Say what you want another person to do or not to do, and ask a patient what they would like their family or the team to do.`, draft: true,
    body: `<p>Patients and families often tell you what they want someone else to do: "I want my husband to understand", "I don't want my company to know", "I wanted someone to listen to me". 〜たい (from <a href="#/lessons/wanting">Wanting and intending</a>) is only for what you yourself want to do. When you want another person to act, Japanese uses the て-form + ほしい, or the て-form + もらいたい, which is built on 〜て もらう from <a href="#/lessons/te-ageru-kureru-morau">Doing things for someone</a>.</p>
<h3>How to make it</h3>
<p>Take the て-form of the verb and add ほしい. For "I don't want (someone) to …", take the ない-form and add で ほしい. The person you want to act is marked with に. ほしい is an い-adjective, so it conjugates as one: ほしくない, ほしかった. Add です, or ん です to explain your feeling, to make it polite.</p>
<table><tr><th>Verb</th><th>て-form + ほしい</th><th>ない-form + で ほしい</th><th>て-form + もらいたい</th></tr>
<tr><td>Group 1: 聞《き》く</td><td>聞《き》いて ほしい</td><td>聞《き》かないで ほしい</td><td>聞《き》いて もらいたい</td></tr>
<tr><td>Group 1: 待《ま》つ</td><td>待《ま》って ほしい</td><td>待《ま》たないで ほしい</td><td>待《ま》って もらいたい</td></tr>
<tr><td>Group 2: 忘《わす》れる</td><td>忘《わす》れて ほしい</td><td>忘《わす》れないで ほしい</td><td>忘《わす》れて もらいたい</td></tr>
<tr><td>する</td><td>して ほしい</td><td>しないで ほしい</td><td>して もらいたい</td></tr>
<tr><td>来《く》る</td><td>来《き》て ほしい</td><td>来《こ》ないで ほしい</td><td>来《き》て もらいたい</td></tr></table>
<p>Only verbs take this pattern. When the thing you hope for is an event rather than a person's action, the subject takes が: 雨《あめ》 が やんで ほしい (I wish the rain would stop).</p>
<h3>〜て ほしい: I want (someone) to</h3>
<div class="ex"><b>家族《かぞく》 に もっと 話《はなし》 を 聞《き》いて ほしい です。</b><span>I want my family to listen to me more.</span></div>
<div class="ex"><b>夫《おっと》 に 病気《びょうき》 の こと を 分《わ》かって ほしい ん です。</b><span>I want my husband to understand about my illness.</span></div>
<div class="ex"><b>子《こ》どもたち に は 早《はや》く 寝《ね》て ほしい です。</b><span>I want the children to go to bed early.</span></div>
<div class="ex"><b>雨《あめ》 が 早《はや》く やんで ほしい です ね。</b><span>I hope the rain stops soon.</span></div>
<h3>〜ないで ほしい: I don't want (someone) to</h3>
<p>This is how patients set limits, for example on who is told about their illness. Listen for it and respect it within your hospital's policy.</p>
<div class="ex"><b>会社《かいしゃ》 の 人《ひと》 に は、 病気《びょうき》 の こと を 言《い》わないで ほしい です。</b><span>I don't want you to tell the people at work about my illness.</span></div>
<div class="ex"><b>母《はは》 に は あまり 心配《しんぱい》しないで ほしい です。</b><span>I don't want my mother to worry too much.</span></div>
<div class="ex"><b>一人《ひとり》 で 無理《むり》 を しないで ほしい ん です。</b><span>I don't want you to push yourself on your own. (a family member to the patient)</span></div>
<h3>〜て もらいたい: I'd like to have (someone) do</h3>
<p>〜て もらいたい means almost the same as 〜て ほしい but sounds a little softer, because it is framed as receiving a favour. The very polite form 〜て いただきたい appears in formal speech and letters; recognise it.</p>
<div class="ex"><b>一度《いちど》、 専門《せんもん》 の 先生《せんせい》 に 診《み》て もらいたい です。</b><span>I'd like to be seen by a specialist once.</span></div>
<div class="ex"><b>先生《せんせい》 に 話《はなし》 を 聞《き》いて もらいたくて 来《き》ました。</b><span>I came because I wanted the doctor to listen to me.</span></div>
<div class="ex"><b>飲《の》み方《かた》 を もう 一度《いちど》 説明《せつめい》して もらいたい ん です が。</b><span>I'd like you to explain once more how to take it.</span></div>
<h3>Contrast and common mistakes</h3>
<ul><li>〜たい is your own action, 〜て ほしい is someone else's: 休《やす》みたい (I want to rest), 休《やす》んで ほしい (I want you to rest). 夫《おっと》 に 分《わ》かりたい is wrong; say 夫《おっと》 に 分《わ》かって ほしい.</li>
<li>The person who acts takes に, not を: 母《はは》 に 休《やす》んで ほしい.</li>
<li>〜て ほしい states your wish; it is not a request. Said to a patient or a senior, 説明《せつめい》して ほしい です sounds like a demand. To ask, use 〜て いただけます か or 〜て ください.</li>
<li>For a third person's wish, use 〜て ほしい と 言《い》って います or 〜て ほしがって います (see <a href="#/lessons/garu">〜がる</a>).</li></ul>
<h3>In the interview</h3>
<p>Asking what a patient wants from others brings out their hopes and their worries about family and treatment.</p>
<div class="ex"><b>ご家族《かぞく》 に して ほしい こと は あります か。</b><span>Is there anything you would like your family to do?</span></div>
<div class="ex"><b>私《わたし》たち に 知《し》って おいて ほしい こと は あります か。</b><span>Is there anything you would like us to know?</span></div>
<div class="ex"><b>来週《らいしゅう》 も 来《き》て いただけます か。</b><span>Could you come again next week? (a request, not 来《き》て ほしい です)</span></div>
<div class="note">て-form + ほしい (or もらいたい) = I want someone else to do it; ない-form + で ほしい = I don't want them to. The doer takes に. Use it to state wishes and to ask about them, but make your own requests with 〜て いただけます か.</div>`,
    quiz: [
      ["How do you say \"I want my husband to understand\"?", ["夫《おっと》 に 分《わ》かりたい です。", "夫《おっと》 に 分《わ》かって ほしい です。", "夫《おっと》 が 分《わ》かって あげたい です。"], 1, "For another person's action use the て-form + ほしい, with the doer marked by に."],
      ["Which is the correct form for \"I don't want you to tell (anyone)\"?", ["言《い》わないで ほしい", "言《い》わなくて ほしい", "言《い》いないで ほしい"], 0, "The negative is the ない-form 言《い》わない + で ほしい."],
      ["母《はは》 ＿ もう 少《すこ》し 休《やす》んで ほしい です。", ["を", "で", "に"], 2, "The person you want to act is marked with に."],
      ["先生《せんせい》 に 話《はなし》 を 聞《き》いて もらいたくて 来《き》ました means:", ["I came because I wanted to hear the doctor's talk.", "I came because I wanted the doctor to listen to me.", "I came because the doctor wanted to talk to me."], 1, "〜て もらいたい: the speaker wants to receive the doctor's action of listening."],
      ["Which sentence is a polite request (a question) asking a patient to come again next week?", ["来週《らいしゅう》 も 来《き》て ほしい です。", "来週《らいしゅう》 も 来《き》たい です か。", "来週《らいしゅう》 も 来《き》て いただけます か。"], 2, "〜て いただけます か asks politely; 来《き》て ほしい です only states your wish, and 来《き》たい です か asks what they want."],
      ["会社《かいしゃ》 の 人《ひと》 に は 言《い》わないで ほしい です means:", ["I don't want you to tell the people at work.", "I don't want to tell the people at work.", "The people at work asked me not to tell."], 0, "〜ないで ほしい asks that someone else not do something; here, not tell people at work."]
    ] },

  { id: 'garu', level: 'N4', unit: 'Wishes, feelings and reported speech', after: 'te-hoshii', title: `〜がる, 〜たがる: describing other people's feelings`, summary: `Describe what someone else seems to feel or want with 〜がる and 〜たがる, and choose kinder wording for a patient in a chart or handover.`, draft: true,
    body: `<p>Japanese draws a line between your own feelings, which you can state, and other people's, which you can only observe. 痛《いた》い, 怖《こわ》い, 寂《さび》しい, ほしい and 〜たい said as a flat statement about someone else sound odd: you cannot feel another person's pain. One way to describe what you observe is 〜がる, which turns a feeling word into a verb meaning "show signs of feeling". You met 〜たがって います in <a href="#/lessons/wanting">Wanting and intending</a>; this lesson completes the pattern and shows when to use something gentler.</p>
<h3>How to make it</h3>
<p>Drop the final い of an い-adjective, or take a な-adjective without な, and add がる. For 〜たい, drop い and add がる: 〜たがる. がる is a Group 1 verb (がります, がって います, がらない). The thing feared or wanted takes を, not が.</p>
<table><tr><th>Feeling word</th><th>Type</th><th>〜がる</th><th>〜がって います</th></tr>
<tr><td>痛《いた》い</td><td>い-adjective</td><td>痛《いた》がる</td><td>痛《いた》がって います</td></tr>
<tr><td>怖《こわ》い</td><td>い-adjective</td><td>怖《こわ》がる</td><td>怖《こわ》がって います</td></tr>
<tr><td>寂《さび》しい</td><td>い-adjective</td><td>寂《さび》しがる</td><td>寂《さび》しがって います</td></tr>
<tr><td>嫌《いや》 な</td><td>な-adjective</td><td>嫌《いや》がる</td><td>嫌《いや》がって います</td></tr>
<tr><td>ほしい</td><td>い-adjective</td><td>ほしがる</td><td>ほしがって います</td></tr>
<tr><td>帰《かえ》りたい</td><td>〜たい</td><td>帰《かえ》りたがる</td><td>帰《かえ》りたがって います</td></tr></table>
<p>Particles change: 犬《いぬ》 が 怖《こわ》い (I'm afraid of dogs) but 娘《むすめ》 は 犬《いぬ》 を 怖《こわ》がって います (my daughter is afraid of dogs).</p>
<h3>Feelings: 〜がって います</h3>
<p>〜がって います describes a feeling someone is showing now. The plain 〜がります describes a general tendency.</p>
<div class="ex"><b>娘《むすめ》 は 一人《ひとり》 で 寝《ね》る の を 怖《こわ》がって います。</b><span>My daughter is afraid of sleeping alone.</span></div>
<div class="ex"><b>母《はは》 は 姉《あね》 が 結婚《けっこん》して から、 寂《さび》しがって います。</b><span>My mother has been lonely since my sister got married.</span></div>
<div class="ex"><b>子《こ》ども が 薬《くすり》 を 嫌《いや》がって、 飲《の》んで くれません。</b><span>My child hates the medicine and won't take it.</span></div>
<div class="ex"><b>子《こ》ども は よく 注射《ちゅうしゃ》 を 怖《こわ》がります。</b><span>Children are often afraid of injections.</span></div>
<h3>Wants: 〜たがる and ほしがる</h3>
<div class="ex"><b>父《ちち》 は 早《はや》く 退院《たいいん》したがって います。</b><span>My father wants to leave hospital soon.</span></div>
<div class="ex"><b>息子《むすこ》 は 新《あたら》しい ゲーム を ほしがって います。</b><span>My son wants a new game.</span></div>
<div class="ex"><b>弟《おとうと》 は 最近《さいきん》、 誰《だれ》 に も 会《あ》いたがりません。</b><span>Lately my brother doesn't want to see anyone.</span></div>
<h3>Whose feeling is it?</h3>
<table><tr><th>About</th><th>Natural ways to say it</th></tr>
<tr><td>Yourself</td><td>痛《いた》い です, 帰《かえ》りたい です</td></tr>
<tr><td>The listener (a question)</td><td>痛《いた》い です か, 帰《かえ》りたい です か</td></tr>
<tr><td>Someone else</td><td>痛《いた》がって います, 痛《いた》そう です, 痛《いた》い と 言《い》って います, 痛《いた》い よう です</td></tr></table>
<p>Do not use 〜がる about yourself or in a question to the listener: 痛《いた》がって います か said to a patient is wrong; ask 痛《いた》み は どう です か. For 〜そう and 〜よう, see <a href="#/lessons/sou-you-mitai-rashii">Looks like, seems, apparently</a>.</p>
<h3>On the ward: kinder ways to describe a patient</h3>
<p>〜がる describes a feeling from the outside, as behaviour. About your own child or parent it is ordinary family talk. About a patient, especially said in front of them, it can sound cold, as if the feeling were a fuss: 山田《やまだ》さん が 痛《いた》がって います can suggest "is making a fuss about pain". 〜たがる about a senior person is also impolite. In a chart, a handover or at the bedside, prefer the patient's own words, a clinical verb such as 訴《うった》える (complain of) or 希望《きぼう》する (wish for), or a careful observation with よう です.</p>
<div class="ex"><b>山田《やまだ》さん は 「腰《こし》 が 痛《いた》い」 と 言《い》って います。</b><span>Mr. Yamada says, "My lower back hurts."</span></div>
<div class="ex"><b>山田《やまだ》さん は 腰《こし》 の 痛《いた》み を 訴《うった》えて います。</b><span>Mr. Yamada is complaining of lower back pain.</span></div>
<div class="ex"><b>佐藤《さとう》さん は 早《はや》く 退院《たいいん》したい と おっしゃって います。</b><span>Ms. Sato says she would like to leave hospital soon.</span></div>
<div class="ex"><b>夜《よる》 は 少《すこ》し 不安《ふあん》 な よう です。</b><span>She seems a little anxious at night.</span></div>
<div class="note">〜がる (〜がって います) = someone shows a feeling or a wish; the object takes を. It is fine for family, but for a patient prefer their words (〜と 言《い》って います, 〜と おっしゃって います), 訴《うった》えて います or 〜よう です, and ask the patient directly rather than describing them.</div>`,
    quiz: [
      ["What is the 〜がる form of 怖《こわ》い?", ["怖《こわ》いがる", "怖《こわ》がる", "怖《こわ》くがる"], 1, "Drop the final い and add がる: 怖《こわ》い → 怖《こわ》がる."],
      ["娘《むすめ》 は 犬《いぬ》 ＿ 怖《こわ》がって います。", ["を", "が", "に"], 0, "With 〜がる the thing feared takes を."],
      ["Which sentence naturally says \"My father wants to go home\"?", ["父《ちち》 は 家《いえ》 に 帰《かえ》りたい です。", "父《ちち》 は 家《いえ》 に 帰《かえ》りたがる です。", "父《ちち》 は 家《いえ》 に 帰《かえ》りたがって います。"], 2, "For a third person's wish use 〜たがって います, not a flat 〜たい です."],
      ["In a handover, 山田《やまだ》さん は 腰《こし》 の 痛《いた》み を 訴《うった》えて います means:", ["Mr. Yamada wants his lower back examined.", "Mr. Yamada hurt his lower back yesterday.", "Mr. Yamada is complaining of lower back pain."], 2, "訴《うった》える means to complain of a symptom; it is a neutral clinical verb."],
      ["弟《おとうと》 は 誰《だれ》 に も ＿。 (My brother doesn't want to see anyone.)", ["会《あ》いたがりません", "会《あ》いたくないがります", "会《あ》いたがないです"], 0, "〜たがる is a Group 1 verb: its polite negative is 〜たがりません."],
      ["How do you ask a patient about their pain?", ["痛《いた》がって います か。", "痛《いた》み は どう です か。", "痛《いた》がりたい です か。"], 1, "〜がる is not used in a question about the listener's own feeling; ask directly."]
    ] },

  { id: 'to-iu-n4', level: 'N4', unit: 'Wishes, feelings and reported speech', after: 'garu', title: `と いう: "called", "the news that" and casual って`, summary: `Name something with X と いう N, ask what something is called, wrap a sentence as "the news that" or "the feeling that", and follow casual って.`, draft: true,
    body: `<p>On the ward you hear names you don't know (a person, a shop, a diagnosis), you need to ask what something is called, and you need to say "the news that …" or "a feeling that …". All of these use と いう: the quoting と from <a href="#/lessons/thinking-saying">Thinking and saying</a> + いう. Nothing is really said aloud, so いう is usually written in kana here. This lesson lays the base; <a href="#/lessons/to-iu">と いう at N3</a> adds definitions, と いう より and と いえば.</p>
<h3>How to make it</h3>
<table><tr><th>Before と いう</th><th>Pattern</th><th>Example</th></tr>
<tr><td>Noun (a name)</td><td>N と いう N</td><td>鈴木《すずき》 と いう 先生《せんせい》</td></tr>
<tr><td>Plain verb or い-adjective clause</td><td>clause + と いう N</td><td>退院《たいいん》できる と いう 話《はなし》</td></tr>
<tr><td>Noun or な-adjective clause</td><td>clause + だ + と いう N</td><td>病気《びょうき》 だ と いう こと</td></tr>
<tr><td>Question</td><td>何《なん》 と いう N / 何《なん》 と 言《い》います か</td><td>何《なん》 と いう 花《はな》</td></tr>
<tr><td>Casual</td><td>って いう / って</td><td>鈴木《すずき》 って いう 人《ひと》</td></tr></table>
<p>The part before と いう is always plain: no です or ます inside it. When you simply name a noun, do not add だ.</p>
<h3>N と いう N: a … called X</h3>
<p>Use this when the listener may not know the name.</p>
<div class="ex"><b>鈴木《すずき》 と いう 先生《せんせい》 に 診《み》て もらって いました。</b><span>I was seeing a doctor called Suzuki.</span></div>
<div class="ex"><b>駅《えき》 の 前《まえ》 の 「さくら」 と いう 店《みせ》 を 知《し》って います か。</b><span>Do you know a shop called Sakura in front of the station?</span></div>
<div class="ex"><b>「不眠症《ふみんしょう》」 と いう 病名《びょうめい》 を 聞《き》いた こと が あります か。</b><span>Have you heard of a diagnosis called "insomnia"?</span></div>
<div class="ex"><b>これ は 何《なん》 と いう 花《はな》 です か。</b><span>What is this flower called?</span></div>
<div class="ex"><b>これ は 日本語《にほんご》 で 何《なん》 と 言《い》います か。</b><span>What do you call this in Japanese?</span></div>
<h3>Clause + と いう N: the news that, the feeling that</h3>
<p>A whole sentence + と いう + a noun such as 話《はなし》 (talk, news), 連絡《れんらく》 (message), 気持《きも》ち (feeling) or 感《かん》じ (sense) gives the content of that noun.</p>
<div class="ex"><b>来週《らいしゅう》 退院《たいいん》できる と いう 話《はなし》 を 聞《き》きました。</b><span>I heard that I may be able to leave hospital next week.</span></div>
<div class="ex"><b>学校《がっこう》 から、 息子《むすこ》さん が 熱《ねつ》 を 出《だ》した と いう 連絡《れんらく》 が ありました。</b><span>The school called to say your son has a fever.</span></div>
<div class="ex"><b>早《はや》く 元気《げんき》 に なりたい と いう 気持《きも》ち が 強《つよ》い です。</b><span>I have a strong wish to get well soon.</span></div>
<div class="ex"><b>誰《だれ》 か に 見《み》られて いる と いう 感《かん》じ が します か。</b><span>Do you have a sense that someone is watching you?</span></div>
<h3>〜と いう こと: the fact that, so you mean</h3>
<p>Clause + と いう こと turns a statement into a noun: "the fact that …". You already use 〜と いう こと です か to check understanding (see <a href="#/lessons/interview-patterns">Sentence frames for the psychiatric interview</a>).</p>
<div class="ex"><b>病気《びょうき》 だ と いう こと を、 家族《かぞく》 に まだ 言《い》って いません。</b><span>I haven't told my family yet that I'm ill.</span></div>
<div class="ex"><b>朝《あさ》 は どうしても 起《お》きられない と いう こと です ね。</b><span>So in the mornings you just can't get up.</span></div>
<h3>って: casual と いう and と</h3>
<p>In casual speech って replaces と いう, and it also replaces the quoting と. Sentence-final って often means "they say".</p>
<div class="ex"><b>鈴木《すずき》 って いう 人《ひと》 から 電話《でんわ》 が あった よ。</b><span>Someone called Suzuki phoned.</span></div>
<div class="ex"><b>明日《あした》 は 雨《あめ》 だ って。</b><span>They say it'll rain tomorrow.</span></div>
<div class="ex"><b>母《はは》 が 「もう 大丈夫《だいじょうぶ》」 って 言《い》って いました。</b><span>My mother said, "I'm fine now."</span></div>
<h3>Common mistakes</h3>
<ul><li>Adding だ to a name: 鈴木《すずき》 と いう 人《ひと》, not 鈴木《すずき》 だ と いう 人《ひと》.</li>
<li>Using の: 鈴木《すずき》 の 人《ひと》 does not mean "a person called Suzuki".</li>
<li>Putting a polite form inside: 起《お》きられない と いう こと, not 起《お》きられません と いう こと.</li></ul>
<div class="note">X と いう N = a N called X; a plain clause + と いう 話《はなし》 / 気持《きも》ち / こと = the news, the feeling, the fact that. The part before と いう stays plain, and in casual speech it becomes って.</div>`,
    quiz: [
      ["How do you say \"a person called Tanaka\"?", ["田中《たなか》 と いう 人《ひと》", "田中《たなか》 だ と いう 人《ひと》", "田中《たなか》 の いう 人《ひと》"], 0, "A name goes straight before と いう, without だ."],
      ["これ は 日本語《にほんご》 で 何《なん》 ＿ 言《い》います か。", ["を", "と", "が"], 1, "The quoting と marks the name: 何《なん》 と 言《い》います か."],
      ["来週《らいしゅう》 退院《たいいん》できる と いう 話《はなし》 を 聞《き》きました means:", ["I told them I want to leave hospital next week.", "I was told not to leave hospital next week.", "I heard that I may be able to leave hospital next week."], 2, "Clause + と いう 話《はなし》 gives the content of the news that was heard."],
      ["Which sentence correctly checks \"So you mean you can't sleep?\"", ["眠《ねむ》れない と いう こと です か。", "眠《ねむ》れません と いう こと です か。", "眠《ねむ》れない の と いう こと です か。"], 0, "The clause before と いう こと is in plain form, with nothing added."],
      ["誰《だれ》 か に 見《み》られて いる ＿ 感《かん》じ が します か。", ["を", "と いう", "が"], 1, "と いう links the clause to 感《かん》じ: a sense that someone is watching."],
      ["明日《あした》 は 雨《あめ》 だ って means:", ["Is it going to rain tomorrow?", "I hope it rains tomorrow.", "They say it'll rain tomorrow."], 2, "Sentence-final って is casual hearsay: \"they say\"."]
    ] },

  { id: 'reported-requests', level: 'N4', unit: 'Wishes, feelings and reported speech', after: 'to-iu-n4', title: `〜よう に 言《い》う, 頼《たの》む, 伝《つた》える: reporting requests and instructions`, summary: `Report what someone told or asked you to do, ask a family member to pass on an instruction, and tell an instruction apart from a statement.`, draft: true,
    body: `<p>Much of a history is second-hand instruction: "the doctor told me to stop drinking", "I asked my wife to come with me", "please tell your husband to call". In <a href="#/lessons/commands">Commands and prohibitions</a> you met dictionary form + よう に 言《い》う for what a voice tells a patient to do. Here is the full pattern, with the verbs for telling, asking and passing on.</p>
<h3>How to make it</h3>
<p>Dictionary form + よう に + a verb of speaking. For "not to", use the ない-form + よう に. The person told or asked takes に. To say "I was told", use the passive 言《い》われました, with the person who told you marked by に. The verb before よう に is plain: never ます or ください.</p>
<table><tr><th>Pattern</th><th>Example</th><th>Meaning</th></tr>
<tr><td>dictionary + よう に 言《い》う</td><td>休《やす》む よう に 言《い》う</td><td>tell (someone) to rest</td></tr>
<tr><td>ない-form + よう に 言《い》う</td><td>飲《の》まない よう に 言《い》う</td><td>tell (someone) not to drink</td></tr>
<tr><td>dictionary + よう に 頼《たの》む / お願《ねが》いする</td><td>来《く》る よう に 頼《たの》む</td><td>ask (someone) to come</td></tr>
<tr><td>dictionary + よう に 伝《つた》える</td><td>電話《でんわ》する よう に 伝《つた》える</td><td>pass on a message to call</td></tr>
<tr><td>dictionary + よう に 言《い》われる</td><td>寝《ね》る よう に 言《い》われる</td><td>be told to go to bed</td></tr></table>
<p>All verb groups work the same way: 書《か》く よう に, 食《た》べる よう に, する よう に, 来《く》る よう に.</p>
<h3>〜よう に 言《い》う: tell someone to</h3>
<div class="ex"><b>医者《いしゃ》 は 父《ちち》 に たばこ を やめる よう に 言《い》いました。</b><span>The doctor told my father to stop smoking.</span></div>
<div class="ex"><b>看護師《かんごし》さん に、 夜《よる》 は 一人《ひとり》 で 歩《ある》かない よう に 言《い》われました。</b><span>The nurse told me not to walk on my own at night.</span></div>
<div class="ex"><b>子《こ》ども に 早《はや》く 寝《ね》る よう に 言《い》いました が、 まだ 起《お》きて います。</b><span>I told my child to go to bed early, but he is still up.</span></div>
<h3>〜よう に 頼《たの》む: ask someone to</h3>
<p>頼《たの》む (ask a favour) is plain; お願《ねが》いする is the polite, humble choice when the person asked is above you.</p>
<div class="ex"><b>妻《つま》 に 一緒《いっしょ》 に 来《く》る よう に 頼《たの》みました。</b><span>I asked my wife to come with me.</span></div>
<div class="ex"><b>隣《となり》 の 人《ひと》 に 音《おと》 を 小《ちい》さく する よう に 頼《たの》みました。</b><span>I asked my neighbour to turn the sound down.</span></div>
<h3>〜よう に 伝《つた》える: pass on an instruction</h3>
<div class="ex"><b>ご主人《しゅじん》 に、 明日《あした》 病院《びょういん》 に 電話《でんわ》する よう に 伝《つた》えて いただけます か。</b><span>Could you tell your husband to phone the hospital tomorrow?</span></div>
<div class="ex"><b>夜勤《やきん》 の 看護師《かんごし》 に、 二時間《にじかん》 ごと に 様子《ようす》 を 見《み》る よう に 伝《つた》えました。</b><span>I told the night nurse to check on him every two hours.</span></div>
<div class="ex"><b>田中《たなか》さん に、 会議《かいぎ》 に 遅《おく》れない よう に 伝《つた》えて ください。</b><span>Please tell Mr. Tanaka not to be late for the meeting.</span></div>
<h3>Instruction or statement?</h3>
<p>Plain form + と 言《い》う reports a statement; dictionary form + よう に 言《い》う reports an instruction. The difference is easy to miss when listening.</p>
<table><tr><th>Sentence</th><th>Meaning</th></tr>
<tr><td>弟《おとうと》 は 休《やす》む と 言《い》いました。</td><td>My brother said he would rest.</td></tr>
<tr><td>弟《おとうと》 に 休《やす》む よう に 言《い》いました。</td><td>I told my brother to rest.</td></tr></table>
<p>You can also keep the request as a quote: 「休《やす》んで ください」 と 言《い》われました means the same as 休《やす》む よう に 言《い》われました. A mixture such as 休《やす》んで ください よう に is wrong. Do not confuse this よう に with よう に する (try to) in <a href="#/lessons/koto-ni-suru-naru">Decisions, rules and change</a> or よう に (so that) in <a href="#/lessons/purpose">In order to</a>.</p>
<h3>In the interview</h3>
<div class="ex"><b>前《まえ》 の 先生《せんせい》 に、 お酒《さけ》 を 控《ひか》える よう に 言《い》われた こと は あります か。</b><span>Has a previous doctor ever told you to cut down on alcohol?</span></div>
<div class="ex"><b>ご家族《かぞく》 に も、 様子《ようす》 が おかしい とき は すぐ 連絡《れんらく》する よう に お伝《つた》え ください。</b><span>Please also tell your family to contact us straight away if anything seems wrong.</span></div>
<div class="ex"><b>その 声《こえ》 は、 何《なに》 か を する よう に 言《い》います か。</b><span>Does the voice tell you to do anything?</span></div>
<div class="note">Dictionary form (or ない-form) + よう に 言《い》う / 頼《たの》む / 伝《つた》える reports an instruction; the person told takes に, and 〜よう に 言《い》われました is "I was told to". Keep the verb before よう に plain.</div>`,
    quiz: [
      ["How do you say \"The doctor told me to rest\"?", ["先生《せんせい》 に 休《やす》みます よう に 言《い》われました。", "先生《せんせい》 に 休《やす》む ため に 言《い》われました。", "先生《せんせい》 に 休《やす》む よう に 言《い》われました。"], 2, "Dictionary form + よう に 言《い》われました = I was told to; ます is not used before よう に."],
      ["お酒《さけ》 を ＿ よう に 言《い》われました。 (I was told not to drink alcohol.)", ["飲《の》まない", "飲《の》みません", "飲《の》まなくて"], 0, "For \"not to\", use the plain ない-form before よう に."],
      ["弟《おとうと》 に 休《やす》む よう に 言《い》いました means:", ["My brother said he would rest.", "I told my brother to rest.", "My brother told me to rest."], 1, "よう に 言《い》う reports an instruction, and に marks the person told."],
      ["子《こ》ども ＿ 早《はや》く 寝《ね》る よう に 言《い》いました。", ["に", "を", "で"], 0, "The person who is told to do something takes に."],
      ["ご主人《しゅじん》 に、 明日《あした》 病院《びょういん》 に 電話《でんわ》する よう に 伝《つた》えて いただけます か means:", ["Could you ask your husband whether he called the hospital?", "Could you tell your husband to call the hospital tomorrow?", "Your husband will call the hospital tomorrow, won't he?"], 1, "〜よう に 伝《つた》える means to pass on an instruction to someone."],
      ["Which sentence correctly reports 「静《しず》か に して ください」 without a quote?", ["静《しず》か に して ください よう に 言《い》われました。", "静《しず》か に した よう に 言《い》われました。", "静《しず》か に する よう に 言《い》われました。"], 2, "Change the request to the dictionary form する before よう に."]
    ] },

  { id: 'review-n4-wishes', level: 'N4', unit: 'Wishes, feelings and reported speech', after: 'reported-requests', review: true, title: `Review: Wishes, feelings and reported speech`, summary: `Bring together 〜て ほしい, 〜がる, と いう and 〜よう に 言《い》う, and practise choosing between them.`, draft: true,
    body: `<p>This unit was about other people: what you want them to do, what they seem to feel, what things are called and what they told you to do. Use this page to compare the patterns before the quiz.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>て-form + ほしい / もらいたい</td><td>I want someone else to act</td><td>夫《おっと》 に 分《わ》かって ほしい です。</td></tr>
<tr><td>ない-form + で ほしい</td><td>I don't want someone to act</td><td>会社《かいしゃ》 に は 言《い》わないで ほしい です。</td></tr>
<tr><td>〜がる, 〜たがる</td><td>someone else shows a feeling or a wish</td><td>父《ちち》 は 帰《かえ》りたがって います。</td></tr>
<tr><td>N と いう N</td><td>a N called X</td><td>鈴木《すずき》 と いう 先生《せんせい》</td></tr>
<tr><td>clause + と いう 話《はなし》 / こと</td><td>the news, the fact that</td><td>退院《たいいん》できる と いう 話《はなし》</td></tr>
<tr><td>dictionary / ない + よう に 言《い》う</td><td>tell someone (not) to</td><td>お酒《さけ》 を やめる よう に 言《い》われました。</td></tr></table>
<h3>Watch out</h3>
<ul><li>Your own action is 〜たい; someone else's is 〜て ほしい: 休《やす》みたい versus 休《やす》んで ほしい.</li>
<li>〜がる takes を for the thing feared or wanted, and is not used about yourself or the listener. For a patient, prefer their own words, 訴《うった》える or 〜よう です.</li>
<li>No だ after a plain name: 鈴木《すずき》 と いう 人《ひと》. The clause before と いう and よう に stays plain.</li>
<li>休《やす》む と 言《い》った is a statement (he said he would rest); 休《やす》む よう に 言《い》った is an instruction (he told someone to rest).</li></ul>
<h3>Putting it together</h3>
<div class="ex"><b>妻《つま》 は 私《わたし》 に お酒《さけ》 を やめて ほしい と 言《い》って います。</b><span>My wife says she wants me to stop drinking.</span></div>
<div class="ex"><b>母《はは》 は 私《わたし》 に 早《はや》く 帰《かえ》って きて ほしがって います。</b><span>My mother wants me to come home soon.</span></div>
<div class="ex"><b>家族《かぞく》 に 分《わ》かって ほしい と いう 気持《きも》ち が あります。</b><span>I have a feeling that I want my family to understand.</span></div>
<div class="ex"><b>鈴木《すずき》 と いう 先生《せんせい》 に、 よく 眠《ねむ》る よう に 言《い》われました。</b><span>A doctor called Suzuki told me to sleep well.</span></div>
<div class="ex"><b>佐藤《さとう》さん は 家《いえ》 に 帰《かえ》りたい と おっしゃって います。</b><span>Ms. Sato says she would like to go home.</span></div>`,
    quiz: [
      ["母《はは》 に もっと 休《やす》んで ＿ です。", ["たい", "ほしい", "ほしがる"], 1, "て-form + ほしい: I want my mother to rest more."],
      ["Which sentence naturally says \"My son wants a new game\"?", ["息子《むすこ》 は 新《あたら》しい ゲーム を ほしがって います。", "息子《むすこ》 は 新《あたら》しい ゲーム を ほしい です。", "息子《むすこ》 は 新《あたら》しい ゲーム が ほしがります です。"], 0, "For a third person, use ほしがって います with を."],
      ["「さくら」 ＿ 店《みせ》 を 知《し》って います か。", ["だ と いう", "の いう", "と いう"], 2, "A name goes straight before と いう, without だ."],
      ["夜《よる》 は 一人《ひとり》 で 歩《ある》かない よう に 言《い》われました means:", ["I was told not to walk alone at night.", "I said I would not walk alone at night.", "I was told to walk alone at night."], 0, "ない-form + よう に 言《い》われました = I was told not to."],
      ["Which sentence means \"My wife says she wants me to stop drinking\"?", ["妻《つま》 は お酒《さけ》 を やめたい と 言《い》って います。", "妻《つま》 は 私《わたし》 に お酒《さけ》 を やめて ほしい と 言《い》って います。", "妻《つま》 は 私《わたし》 に お酒《さけ》 を やめる と 言《い》いました。"], 1, "〜て ほしい gives the wish for someone else's action, and と 言《い》って います reports it."],
      ["母《はは》 は 私《わたし》 に 早《はや》く 帰《かえ》って きて ほしがって います means:", ["I want my mother to come home soon.", "My mother wants to come home soon.", "My mother wants me to come home soon."], 2, "〜て ほしがる = a third person wants someone (here, me, marked by に) to act."],
      ["家族《かぞく》 に 分《わ》かって ほしい ＿ 気持《きも》ち が 強《つよ》い です。", ["と いう", "の", "を"], 0, "と いう links the wish 分《わ》かって ほしい to the noun 気持《きも》ち."],
      ["A patient keeps saying she wants to go home. Which handover sentence reports this correctly?", ["佐藤《さとう》さん は 家《いえ》 に 帰《かえ》りたい です。", "佐藤《さとう》さん は 家《いえ》 に 帰《かえ》る よう に 言《い》って います。", "佐藤《さとう》さん は 「家《いえ》 に 帰《かえ》りたい」 と 言《い》って います。"], 2, "Quote her words; a flat 〜たい です about someone else is wrong, and よう に 言《い》う would mean she tells someone to go home."],
      ["母《はは》 が 「もう 大丈夫《だいじょうぶ》」 って 言《い》って いました. Here って stands for:", ["を", "と", "が"], 1, "Casual って replaces the quoting particle と."],
      ["田中《たなか》さん に 明日《あした》 来《く》る よう に 伝《つた》えました means:", ["I passed on to Mr. Tanaka that he should come tomorrow.", "Mr. Tanaka told me he will come tomorrow.", "I told Mr. Tanaka that I will come tomorrow."], 0, "よう に 伝《つた》える passes on an instruction to the person marked by に."],
      ["両親《りょうしん》 に は ＿ ほしい です。 (I don't want you to tell my parents.)", ["言《い》わなくて", "言《い》って ない", "言《い》わないで"], 2, "The negative wish is the ない-form + で ほしい."],
      ["子《こ》ども は 注射《ちゅうしゃ》 ＿ 怖《こわ》がります。", ["が", "を", "で"], 1, "With 〜がる the thing feared takes を."]
    ] }
);
