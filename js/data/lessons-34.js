/* Lessons part 34 (0.23.0): N4 reviews of existing units: review-n4-plain, review-n4-saying, review-n4-clinical, review-n4-clauses, review-n4-seem, review-n4-giving.
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

  { id: 'review-n4-plain', level: 'N4', unit: 'Plain forms', review: true, after: 'ta-form-plain', title: `Review: Plain forms`, summary: `Check that you can make and use the ない-form and the た-form, and tell "must", "please don't" and "don't have to" apart.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/nai-form">the ない-form</a> and <a href="#/lessons/ta-form-plain">the た-form and plain style</a>. Nothing here is new.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>ない-form</td><td>plain "not"</td><td>今日《きょう》 は 何《なに》 も 食《た》べない。</td></tr>
<tr><td>〜ないで ください</td><td>please don't</td><td>無理《むり》 を しないで ください。</td></tr>
<tr><td>〜なければ なりません</td><td>must</td><td>毎日《まいにち》 飲《の》まなければ なりません。</td></tr>
<tr><td>〜なくて も いい です</td><td>you don't have to</td><td>全部《ぜんぶ》 話《はな》さなくて も いい です よ。</td></tr>
<tr><td>た-form / なかった</td><td>plain past, past negative</td><td>夜《よる》 は 薬《くすり》 を 飲《の》まなかった。</td></tr>
<tr><td>〜た こと が あります</td><td>have ever done</td><td>日本《にほん》 に 行《い》った こと が あります か。</td></tr>
<tr><td>〜たり 〜たり します</td><td>things like, now and then</td><td>本《ほん》 を 読《よ》んだり、 散歩《さんぽ》 したり します。</td></tr></table>
<h3>Watch out</h3>
<ul><li>ある → ない (never あらない); 来《く》る → 来《こ》ない but 来《き》た.</li>
<li>う → わ before ない: 会《あ》わない, 使《つか》わない. And 行《い》く → 行《い》った.</li>
<li>〜ないで ください (please don't) is not 〜なくて も いい です (no need to).</li>
<li>飲《の》んだ こと が あります = have taken it before; 飲《の》む こと が あります = sometimes take it.</li></ul>
<h3>Putting it together</h3>
<div class="ex"><b>「昨日《きのう》 は 何《なに》 も しなかった。」 「そう です か。 無理《むり》 を しないで ください ね。」</b><span>"I didn't do anything yesterday." "I see. Please don't push yourself."</span></div>
<div class="ex"><b>来週《らいしゅう》 は 来《こ》なくて も いい です が、 薬《くすり》 は 毎日《まいにち》 飲《の》まなければ なりません。</b><span>You don't have to come next week, but you must take the medicine every day.</span></div>
<div class="ex"><b>夜《よる》 は 寝《ね》たり 起《お》きたり して、 朝《あさ》 は 何《なに》 も 食《た》べない。</b><span>At night I keep dozing and waking, and in the morning I don't eat anything. (a patient speaking plainly)</span></div>
<div class="ex"><b>前《まえ》 に この 薬《くすり》 を 飲《の》んだ こと が あります か。</b><span>Have you taken this medicine before?</span></div>
<div class="ex"><b>「薬《くすり》、 もう 飲《の》んだ？」 「ううん、 まだ 飲《の》んで いない。」</b><span>"Have you taken your medicine yet?" "No, not yet." (family talk)</span></div>`,
    quiz: [
      [`What is the ない-form of 会《あ》う?`, [`会《あ》あない`, `会《あ》わない`, `会《あ》いない`], 1, `Verbs ending in う change う to わ before ない.`],
      [`What is the plain past negative of 来《く》る?`, [`来《き》なかった`, `来《く》なかった`, `来《こ》なかった`], 2, `来《こ》ない → 来《こ》なかった; the kanji keeps the reading こ.`],
      [`What is the plain past negative of ある?`, [`なかった`, `あらなかった`, `ありなかった`], 0, `The negative of ある is ない, so its past is なかった.`],
      [`Which means "Please don't stop the medicine suddenly"?`, [`薬《くすり》 を 急《きゅう》 に やめなくて も いい です。`, `薬《くすり》 を 急《きゅう》 に やめないで ください。`, `薬《くすり》 を 急《きゅう》 に やめなければ なりません。`], 1, `〜ないで ください asks someone not to do something.`],
      [`毎日《まいにち》 来《こ》なくて も いい です means:`, [`You must come every day.`, `Please don't come every day.`, `You don't have to come every day.`], 2, `〜なくて も いい です says that something is not necessary.`],
      [`お酒《さけ》 を 飲《の》んだ こと が あります means:`, [`I have drunk alcohol before.`, `I sometimes drink alcohol.`, `I must not drink alcohol.`], 0, `た-form + こと が あります describes past experience.`],
      [`A patient says 昨日《きのう》 は 薬《くすり》 を 飲《の》まなかった。 What happened?`, [`She took it yesterday.`, `She did not take it yesterday.`, `She does not have to take it.`], 1, `飲《の》まなかった is the plain past negative: ない → なかった.`],
      [`夜《よる》 は 寝《ね》たり 起《お》き＿ します。`, [`て`, `ない`, `たり`], 2, `Each verb in the list takes たり, and the list ends with します.`],
      [`休《やす》み の 日《ひ》 は 掃除《そうじ》 を したり、 洗濯《せんたく》 を したり しなければ なりません means:`, [`On days off I have done cleaning and laundry before.`, `On days off I have to do things like cleaning and laundry.`, `On days off I don't do cleaning or laundry.`], 1, `〜たり 〜たり gives examples, and しなければ なりません makes them things one must do.`],
      [`Which is a natural answer to 前《まえ》 に 入院《にゅういん》 した こと が あります か。?`, [`いいえ、 入院《にゅういん》 しないで ください。`, `はい、 入院《にゅういん》 しなくて も いい です。`, `いいえ、 一度《いちど》 も ありません。`], 2, `A question about experience is answered "never" with 一度《いちど》 も ありません.`],
      [`Which plain sentence means the same as 昨日《きのう》 は どこ に も 行《い》きません でした。?`, [`昨日《きのう》 は どこ に も 行《い》かなかった。`, `昨日《きのう》 は どこ に も 行《い》かない。`, `昨日《きのう》 は どこ に も 行《い》った。`], 0, `〜ません でした in plain style is the ない-form with ない → なかった.`],
      [`「薬《くすり》、 飲《の》んだ？」 is something you would say to:`, [`a member of your own family`, `a patient you have just met`, `a senior doctor`], 0, `Plain style is for family and friends; keep です/ます with patients and seniors.`]
    ] },

  { id: 'review-n4-saying', level: 'N4', unit: 'Saying more', review: true, after: 'when-if', title: `Review: Saying more`, summary: `Check reasons, thinking and reported speech, the potential form, comparison and change, and the four ways to say "when" and "if".`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/reasons">reasons</a>, <a href="#/lessons/thinking-saying">thinking and saying</a>, <a href="#/lessons/can">can and can't</a>, <a href="#/lessons/comparing-changing">comparing and changing</a> and <a href="#/lessons/when-if">when and if</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>から / ので</td><td>because</td><td>頭《あたま》 が 痛《いた》い ので、 今日《きょう》 は 休《やす》みます。</td></tr>
<tr><td>〜ん です</td><td>explain, ask the background</td><td>最近《さいきん》 仕事《しごと》 が 忙《いそが》しい ん です。</td></tr>
<tr><td>〜と 思《おも》います</td><td>I think</td><td>少《すこ》し 疲《つか》れて いる と 思《おも》います。</td></tr>
<tr><td>〜と 言《い》って います</td><td>someone says</td><td>妻《つま》 は 「大丈夫《だいじょうぶ》」 と 言《い》って います。</td></tr>
<tr><td>plain + そう です</td><td>I hear that</td><td>夜《よる》 も 寝《ね》て いない そう です。</td></tr>
<tr><td>potential form</td><td>can</td><td>一人《ひとり》 で 歩《ある》けます か。</td></tr>
<tr><td>より / の ほう が</td><td>compare</td><td>前《まえ》 より 食欲《しょくよく》 が あります。</td></tr>
<tr><td>〜く / に なる</td><td>change</td><td>少《すこ》し 楽《らく》 に なりました。</td></tr>
<tr><td>とき / たら / と / ば</td><td>when, if</td><td>苦《くる》しく なったら、 すぐ 呼《よ》んで ください。</td></tr></table>
<h3>Watch out</h3>
<ul><li>Nouns and な-adjectives: 心配《しんぱい》 だ から, 心配《しんぱい》 なので, 原因《げんいん》 だ と 思《おも》います.</li>
<li>A request cannot follow と. Use たら: つらく なったら、 教《おし》えて ください.</li>
<li>いい → よく なる; a な-adjective takes に: 楽《らく》 に なる.</li>
<li>Potential: 食《た》べられる, 来《こ》られる, 眠《ねむ》れる. する → できる.</li>
<li>どうして 〜ん です か can sound like blame; 何《なに》 か あった ん です か is gentler.</li></ul>
<h3>Putting it together</h3>
<div class="ex"><b>前《まえ》 より よく 眠《ねむ》れる ので、 気分《きぶん》 が 楽《らく》 に なりました。</b><span>I can sleep better than before, so I feel easier.</span></div>
<div class="ex"><b>母《はは》 は 「一人《ひとり》 で いる と、 怖《こわ》く なる」 と 言《い》って います。</b><span>My mother says, "When I'm alone, I get scared."</span></div>
<div class="ex"><b>食《た》べられなく なったら、 すぐ 連絡《れんらく》 して ください。</b><span>If you become unable to eat, please contact us straight away.</span></div>
<div class="ex"><b>薬《くすり》 が 効《き》いて いない と 思《おも》う ん です。</b><span>The thing is, I don't think the medicine is working.</span></div>
<div class="ex"><b>ご主人《しゅじん》 の 話《はなし》 では、 朝《あさ》 の ほう が つらい そう です。</b><span>According to her husband, mornings are harder for her.</span></div>`,
    quiz: [
      [`How do you say "because it is a holiday" with から?`, [`休《やす》み から`, `休《やす》み な から`, `休《やす》み だ から`], 2, `After a noun, から takes だ: 休《やす》み だ から.`],
      [`How do you say "I think it is an illness"?`, [`病気《びょうき》 だ と 思《おも》います。`, `病気《びょうき》 な と 思《おも》います。`, `病気《びょうき》 に と 思《おも》います。`], 0, `After a noun, add だ before と 思《おも》います.`],
      [`What is the potential form of 話《はな》す?`, [`話《はな》しれる`, `話《はな》せる`, `話《はな》すれる`], 1, `A group 1 verb moves to the え-row and adds る: す → せる.`],
      [`How do you ask "Has it got worse than before?"`, [`前《まえ》 より 悪《わる》い に なりました か。`, `前《まえ》 の ほう が 悪《わる》く します か。`, `前《まえ》 より 悪《わる》く なりました か。`], 2, `より marks the standard, and an い-adjective changes い to く before なる.`],
      [`Which means "If you can't sleep, please tell the nurse"?`, [`眠《ねむ》れなかったら、 看護師《かんごし》 に 言《い》って ください。`, `眠《ねむ》れない と、 看護師《かんごし》 に 言《い》って ください。`, `眠《ねむ》れた とき、 看護師《かんごし》 に 言《い》って ください。`], 0, `The potential 眠《ねむ》れない + たら can be followed by a request; と cannot.`],
      [`夜《よる》 に なる と、 不安《ふあん》 に なります means:`, [`I was anxious until night came.`, `Whenever night comes, I get anxious.`, `I want night to come because I am anxious.`], 1, `Dictionary form + と is "whenever", and 不安《ふあん》 に なる is "become anxious".`],
      [`A patient says 実《じつ》 は、 最近《さいきん》 食《た》べられない ん です。 What does ん です add?`, [`It explains her situation.`, `It turns the sentence into a question.`, `It makes the sentence past tense.`], 0, `〜ん です gives the background: "the thing is, I can't eat lately".`],
      [`A nurse tells you 息子《むすこ》さん は 学校《がっこう》 に 行《い》けない そう です. This means:`, [`Her son doesn't have to go to school.`, `Her son said he wants to go to school.`, `Apparently her son can't go to school.`], 2, `Plain form + そう です is hearsay, and 行《い》けない is the potential negative of 行《い》く.`],
      [`Which sentence means "I'm scared, so I can't go outside"?`, [`外《そと》 に 出《で》られない ので、 怖《こわ》い です。`, `怖《こわ》い ので、 外《そと》 に 出《で》られません。`, `怖《こわ》い ので、 外《そと》 に 出《で》ないで ください。`], 1, `The reason comes before ので, and 出《で》られません is "can't go out".`],
      [`Reply to 朝《あさ》 と 夜《よる》 と、 どちら が 楽《らく》 です か if nights are easier:`, [`夜《よる》 より 楽《らく》 です。`, `いちばん 夜《よる》 です。`, `夜《よる》 の ほう が 楽《らく》 です。`], 2, `A の ほう が 〜 です picks one of two; 夜《よる》 より would mean "easier than night".`],
      [`母《はは》 は 毎日《まいにち》 「疲《つか》れた」 と 言《い》って います means:`, [`My mother says "I'm tired" every day.`, `My mother thought once that she was tired.`, `My mother was tired, so she talked every day.`], 0, `〜と 言《い》って います reports something said again and again.`],
      [`What is the ば form of 来《く》る?`, [`来《こ》れば`, `来《く》れば`, `来《き》れば`], 1, `来《く》る → 来《く》れば; the kanji is read く here.`]
    ] },

  { id: 'review-n4-clinical', level: 'N4', unit: 'Clinical Japanese', review: true, after: 'interpreting', title: `Review: Clinical Japanese`, summary: `Check the words patients use for distress, the interview question frames, and the phrases for repairing and checking understanding.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/distress-words">words for distress</a>, <a href="#/lessons/interview-patterns">sentence frames for the interview</a> and <a href="#/lessons/interpreting">when your Japanese is not enough</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>だるい, 重《おも》い, 苦《くる》しい</td><td>body words for distress</td><td>毎日《まいにち》 体《からだ》 が だるい です。</td></tr>
<tr><td>気《き》 に なる, 気《き》 が 重《おも》い</td><td>mood and worry</td><td>仕事《しごと》 の こと が 気《き》 に なります。</td></tr>
<tr><td>イライラ, ドキドキ, そわそわ</td><td>inner states</td><td>電車《でんしゃ》 に 乗《の》る と、 ドキドキ します。</td></tr>
<tr><td>〜は いつ から です か</td><td>onset</td><td>頭痛《ずつう》 は いつ から です か。</td></tr>
<tr><td>〜こと が あります か</td><td>does it happen</td><td>急《きゅう》 に 涙《なみだ》 が 出《で》る こと が あります か。</td></tr>
<tr><td>どんな とき に 〜</td><td>in what situations</td><td>どんな とき に イライラ します か。</td></tr>
<tr><td>もし よければ</td><td>soften a question</td><td>もし よければ、 お酒《さけ》 の こと も 聞《き》かせて ください。</td></tr>
<tr><td>どういう 意味《いみ》 です か</td><td>repair</td><td>「きつい」 は どういう 意味《いみ》 です か。</td></tr>
<tr><td>〜と いう こと です か</td><td>check you understood</td><td>つまり、 朝《あさ》 が いちばん つらい と いう こと です か。</td></tr></table>
<h3>Watch out</h3>
<ul><li>〜る こと が あります か asks "does it happen"; 〜た こと が あります か asks "has it ever happened".</li>
<li>気分《きぶん》 is mood at the moment; 気持《きも》ち is feelings.</li>
<li>Body words and mimetic words can mean different things. Ask: 「だるい」 と いう の は、 どんな 感《かん》じ です か。</li>
<li>Ask one thing at a time, and leave time for the answer.</li>
<li>Family members are informants, not interpreters. Use a qualified interpreter for consent, risk and treatment.</li></ul>
<h3>Putting it together</h3>
<div class="ex"><b>どんな とき に 胸《むね》 が 苦《くる》しく なります か。</b><span>In what situations does your chest get tight?</span></div>
<div class="ex"><b>いつ ごろ から やる気《き》 が 出《で》なく なりました か。</b><span>Roughly since when have you had no motivation?</span></div>
<div class="ex"><b>「ぼーっと する」 と いう の は、 どんな 感《かん》じ です か。</b><span>When you say "foggy", what is it like?</span></div>
<div class="ex"><b>つまり、 夜《よる》 に なる と そわそわ する と いう こと です か。</b><span>So you mean you get restless when night comes?</span></div>
<div class="ex"><b>すみません、 もう 少《すこ》し ゆっくり 話《はな》して いただけます か。</b><span>Sorry, could you speak a little more slowly?</span></div>`,
    quiz: [
      [`A patient says 朝《あさ》 から 体《からだ》 が だるい です. だるい means:`, [`irritable`, `sluggish and heavy`, `restless`], 1, `だるい describes a heavy, low-energy feeling in the whole body.`],
      [`人《ひと》 の 目《め》 が 気《き》 に なります means:`, [`I worry about how people see me.`, `My eyes hurt when I see people.`, `I like meeting people.`], 0, `気《き》 に なる means something stays on one's mind and bothers one.`],
      [`Which word means "brooding, dwelling on things"?`, [`ドキドキ`, `イライラ`, `くよくよ`], 2, `くよくよ する is to brood; ドキドキ is a pounding heart and イライラ is irritability.`],
      [`Which question asks about onset?`, [`どんな とき に 眠《ねむ》れません か。`, `いつ から 眠《ねむ》れません か。`, `どの くらい 眠《ねむ》れます か。`], 1, `いつ から asks "since when".`],
      [`How do you ask "Does your chest sometimes get tight?" (not "Has it ever …?")`, [`胸《むね》 が 苦《くる》しく なる こと が あります か。`, `胸《むね》 が 苦《くる》しく なった こと が あります か。`, `胸《むね》 が 苦《くる》しく なって ください。`], 0, `Dictionary form + こと が あります か asks whether something happens from time to time.`],
      [`A patient says 気《き》 が 散《ち》って、 仕事《しごと》 が できません。 Which check of your understanding fits?`, [`つまり、 仕事《しごと》 を 辞《や》めた と いう こと です か。`, `つまり、 仕事《しごと》 が 好《す》き と いう こと です か。`, `つまり、 仕事《しごと》 に 集中《しゅうちゅう》 できない と いう こと です か。`], 2, `気《き》 が 散《ち》る is being unable to focus, and 〜と いう こと です か checks your summary.`],
      [`Which phrase means "if you don't mind"?`, [`もし よければ`, `もう 一度《いちど》`, `つまり`], 0, `もし よければ softens a request or a sensitive question.`],
      [`How do you ask a patient to say something in simpler words?`, [`簡単《かんたん》 に なりました か。`, `簡単《かんたん》 な 言葉《ことば》 で 言《い》って いただけます か。`, `簡単《かんたん》 な 言葉《ことば》 を 書《か》きました。`], 1, `〜て いただけます か is a polite request, and 簡単《かんたん》 な 言葉《ことば》 で means "in simple words".`],
      [`An interpreter is helping you. For what a voice says to the patient, you ask for:`, [`a short summary`, `the interpreter's opinion`, `the patient's exact words`], 2, `Key statements such as what a voice says should be interpreted word for word.`],
      [`A patient says 頭《あたま》 が ぐるぐる します and you are not sure what she means. The best reply is:`, [`「ぐるぐる」 と いう の は、 どんな 感《かん》じ です か。`, `ぐるぐる は あります か。`, `ぐるぐる して ください。`], 0, `Ask what the patient means by the word instead of guessing.`],
      [`どんな とき に ドキドキ します か asks:`, [`Since when has your heart been pounding?`, `In what situations does your heart pound?`, `How long does the pounding last?`], 1, `どんな とき に asks about situations, and ドキドキ is a pounding heart.`],
      [`A patient's daughter offers to interpret while you explain the treatment plan. You should:`, [`accept, because she knows her mother well`, `explain in your own simple Japanese`, `arrange a qualified interpreter and listen to the daughter as an informant`], 2, `Treatment decisions need a qualified interpreter; family members are informants.`]
    ] },

  { id: 'review-n4-clauses', level: 'N4', unit: 'Clauses and descriptions', review: true, after: 'yasui-nikui-sugiru', title: `Review: Clauses and descriptions`, summary: `Check noun clauses, の and こと, questions inside sentences, and 〜やすい, 〜にくい and 〜すぎる.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/noun-clauses">noun clauses</a>, <a href="#/lessons/nominalizers">の and こと</a>, <a href="#/lessons/embedded-questions">questions inside sentences</a> and <a href="#/lessons/yasui-nikui-sugiru">easy to, hard to, too much</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>plain clause + noun</td><td>describe a noun</td><td>毎晩《まいばん》 飲《の》む 薬《くすり》 は どれ です か。</td></tr>
<tr><td>〜の が 好《す》き / つらい</td><td>an action as a thing</td><td>人《ひと》 と 話《はな》す の が つらい です。</td></tr>
<tr><td>〜の を 忘《わす》れる / やめる</td><td>forget to, stop</td><td>薬《くすり》 を 飲《の》む の を 忘《わす》れました。</td></tr>
<tr><td>〜こと が あります</td><td>it sometimes happens</td><td>夜中《よなか》 に 起《お》きる こと が あります。</td></tr>
<tr><td>question word + 〜か</td><td>what, when … inside a sentence</td><td>いつ 始《はじ》まった か 覚《おぼ》えて います か。</td></tr>
<tr><td>〜か どうか</td><td>whether</td><td>来週《らいしゅう》 来《こ》られる か どうか 教《おし》えて ください。</td></tr>
<tr><td>stem + やすい / にくい</td><td>easy or tends to / hard to</td><td>この 薬《くすり》 は 飲《の》みにくい です か。</td></tr>
<tr><td>stem + すぎる</td><td>too much</td><td>昨日《きのう》 は 働《はたら》きすぎました。</td></tr></table>
<h3>Watch out</h3>
<ul><li>Nothing joins a clause to its noun: 飲《の》んだ 薬《くすり》, not 飲《の》んだ の 薬《くすり》.</li>
<li>Inside a clause the subject takes が or の, never は: 姉《あね》 が 作《つく》った 料理《りょうり》.</li>
<li>Only こと with できます, あります and 趣味《しゅみ》 は 〜こと です; only の with 見《み》える and 聞《き》こえる.</li>
<li>No だ or です before an inner か: 何《なん》 の 薬《くすり》 か; yes or no needs か どうか.</li>
<li>Use the stem: 飲《の》みやすい, 高《たか》すぎる. 眠《ねむ》りにくい is "sleep is hard to get"; 眠《ねむ》れない is "cannot sleep".</li></ul>
<h3>Putting it together</h3>
<div class="ex"><b>眠《ねむ》りにくい 夜《よる》 は、 何《なに》 を して いる か 教《おし》えて ください。</b><span>Please tell me what you do on nights when it is hard to get to sleep.</span></div>
<div class="ex"><b>夜《よる》 の 薬《くすり》 を 飲《の》む の を 忘《わす》れる こと が あります。</b><span>I sometimes forget to take my evening medicine.</span></div>
<div class="ex"><b>一緒《いっしょ》 に 住《す》んで いる 方《かた》 が いる か どうか、 教《おし》えて ください。</b><span>Please tell me whether anyone lives with you.</span></div>
<div class="ex"><b>考《かんが》えすぎる の を やめたい ん です が、 なかなか できません。</b><span>I want to stop thinking too much, but I just can't.</span></div>
<div class="ex"><b>人《ひと》 に 話《はな》しにくい こと が あったら、 書《か》いて も いい です よ。</b><span>If there is something that is hard to tell people, you can write it down.</span></div>`,
    quiz: [
      [`How do you say "the hospital I went to before"?`, [`前《まえ》 に 行《い》った の 病院《びょういん》`, `前《まえ》 に 行《い》った 病院《びょういん》`, `病院《びょういん》 前《まえ》 に 行《い》った`], 1, `The plain clause goes directly before the noun, with nothing between them.`],
      [`私《わたし》 は 弟《おとうと》 ＿ 書《か》いた 手紙《てがみ》 を 読《よ》みました。 (I read the letter my younger brother wrote.)`, [`は`, `を`, `が`], 2, `The subject inside a noun clause takes が, not は.`],
      [`How do you say "I like cooking"?`, [`料理《りょうり》 を 作《つく》る の が 好《す》き です。`, `料理《りょうり》 を 作《つく》る が 好《す》き です。`, `料理《りょうり》 を 作《つく》って が 好《す》き です。`], 0, `An action needs の before が 好《す》き.`],
      [`外《そと》 で 雨《あめ》 が 降《ふ》って いる ＿ が 聞《き》こえます。`, [`こと`, `の`, `か`], 1, `With verbs of hearing and seeing, only の is used.`],
      [`How do you say "I don't know why I'm tired"?`, [`どうして 疲《つか》れて いる か どうか わかりません。`, `どうして 疲《つか》れて います か わかりません。`, `どうして 疲《つか》れて いる か わかりません。`], 2, `With a question word, use plain form + か alone.`],
      [`明日《あした》 晴《は》れる ＿ わかりません。 (whether)`, [`か どうか`, `の が`, `こと が`], 0, `A yes-or-no question inside a sentence takes か どうか.`],
      [`忘《わす》れやすい です means:`, [`It is easy to remember.`, `I forgot too much.`, `I tend to forget things.`], 2, `With something that happens to you, 〜やすい means "tends to".`],
      [`How do you say "too quiet"?`, [`静《しず》か な すぎる`, `静《しず》かすぎる`, `静《しず》かいすぎる`], 1, `すぎる attaches directly to a な-adjective.`],
      [`飲《の》みやすい 薬《くすり》 means:`, [`medicine that is easy to take`, `medicine I took too much of`, `medicine that is hard to take`], 0, `The clause 飲《の》みやすい describes the noun 薬《くすり》.`],
      [`何《なに》 を 食《た》べた か 書《か》く の を 忘《わす》れました means:`, [`I wrote down what I forgot to eat.`, `I forgot to write down what I ate.`, `I forgot whether I ate.`], 1, `何《なに》 を 食《た》べた か is "what I ate", and 〜の を 忘《わす》れる is "forget to".`],
      [`How do you say "things that are hard to talk about"?`, [`話《はな》すにくい こと`, `話《はな》しにくい の こと`, `話《はな》しにくい こと`], 2, `にくい attaches to the ます-stem, and the clause goes straight before こと.`],
      [`How do you say "Working too much is not good"?`, [`働《はたら》きすぎる の は よくない です。`, `働《はたら》きすぎる は よくない です。`, `働《はたら》くすぎる の は よくない です。`], 0, `働《はたら》き + すぎる uses the stem, and の turns it into a topic for は.`]
    ] },

  { id: 'review-n4-seem', level: 'N4', unit: 'How things seem', review: true, after: 'probability', title: `Review: How things seem`, summary: `Check how to say what something looks like, seems or is said to be, and how sure you are, from はず to かも しれません.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/sou-you-mitai-rashii">looks like, seems, apparently</a> and <a href="#/lessons/probability">how sure you are</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>stem + そう</td><td>looks (what I see), about to</td><td>眠《ねむ》そう です ね。</td></tr>
<tr><td>〜よう です / 〜みたい です</td><td>seems (from evidence)</td><td>熱《ねつ》 が 下《さ》がった よう です。</td></tr>
<tr><td>よう な / みたい な</td><td>like</td><td>夢《ゆめ》 みたい な 話《はなし》 です。</td></tr>
<tr><td>〜らしい</td><td>apparently (heard); typical of</td><td>明日《あした》 は 寒《さむ》く なる らしい です。</td></tr>
<tr><td>でしょう / だろう</td><td>probably</td><td>午後《ごご》 は 雨《あめ》 に なる でしょう。</td></tr>
<tr><td>かも しれません</td><td>might</td><td>少《すこ》し 眠《ねむ》く なる かも しれません。</td></tr>
<tr><td>はず です</td><td>should be (I have reason to expect)</td><td>結果《けっか》 は 金曜日《きんようび》 に 出《で》る はず です。</td></tr></table>
<h3>Watch out</h3>
<ul><li>元気《げんき》そう (looks well) is not 元気《げんき》 だ そう (I hear she is well).</li>
<li>いい → よさそう; ない → なさそう. A noun takes みたい, not そう: 学生《がくせい》 みたい.</li>
<li>No だ before でしょう or かも しれません; はず needs の after a noun and な after a な-adjective.</li>
<li>はず is an expectation, not advice.</li>
<li>With patients, avoid 必《かなら》ず and 絶対《ぜったい》 about outcomes; 〜と 思《おも》います and 〜かも しれません are honest.</li></ul>
<h3>Putting it together</h3>
<div class="ex"><b>少《すこ》し つらそう です ね。 熱《ねつ》 が ある かも しれません。</b><span>You look as if you are struggling a little. You might have a fever.</span></div>
<div class="ex"><b>薬《くすり》 が 効《き》いて いる よう です。 たぶん 来週《らいしゅう》 は もっと 楽《らく》 に なる でしょう。</b><span>The medicine seems to be working. You will probably feel easier next week.</span></div>
<div class="ex"><b>田中《たなか》さん は 来週《らいしゅう》 退院《たいいん》 する らしい です が、 まだ はっきり と は わかりません。</b><span>Apparently Mr. Tanaka is going home next week, but it isn't certain yet.</span></div>
<div class="ex"><b>雨《あめ》 が 降《ふ》りそう です から、 午後《ごご》 の 散歩《さんぽ》 は 難《むずか》しい かも しれません。</b><span>It looks like rain, so the afternoon walk may be difficult.</span></div>`,
    quiz: [
      [`How do you say "You look sleepy"?`, [`眠《ねむ》い らしい です ね。`, `眠《ねむ》い そう です ね。`, `眠《ねむ》そう です ね。`], 2, `Drop い and add そう for how something looks; 眠《ねむ》い そう です is hearsay.`],
      [`What is the "looks" form of 元気《げんき》 が ない?`, [`元気《げんき》 が なさそう`, `元気《げんき》 が なそう`, `元気《げんき》 が なくそう`], 0, `ない becomes なさそう.`],
      [`雨《あめ》 が 降《ふ》る そう です means:`, [`It looks as if it is about to rain.`, `I hear it will rain.`, `It must rain.`], 1, `The full plain form + そう です is hearsay; 降《ふ》りそう would be "looks like rain".`],
      [`体《からだ》 が 石《いし》 の ＿ 重《おも》い です。`, [`よう に`, `よう な`, `そう に`], 0, `Before an adjective or verb, "like" is よう に; よう な goes before a noun.`],
      [`今日《きょう》 は 夏《なつ》 らしい 天気《てんき》 です ね means:`, [`I hear today will be like summer.`, `Summer seems to be ending today.`, `Today is real summer weather.`], 2, `Noun + らしい can mean "typical of, true to type".`],
      [`How do you say "It seems to be a cold"?`, [`風邪《かぜ》 な みたい です。`, `風邪《かぜ》 みたい です。`, `風邪《かぜ》そう です。`], 1, `みたい follows a noun directly; そう is not used with a noun for appearance.`],
      [`来月《らいげつ》 から 新《あたら》しい 看護師《かんごし》さん が 来《く》る らしい です means:`, [`Apparently a new nurse is coming from next month.`, `A new nurse looks as if she is about to come.`, `A new nurse will certainly come next month.`], 0, `Plain form + らしい means "apparently", from what one has heard.`],
      [`この 部屋《へや》 は 夜《よる》 も 静《しず》か ＿ はず です。`, [`の`, `な`, `だ`], 1, `A な-adjective takes な before はず.`],
      [`Which is the best way to tell a patient about a possible side effect?`, [`この 薬《くすり》 で 必《かなら》ず 眠《ねむ》く なります。`, `この 薬《くすり》 は 眠《ねむ》そう です。`, `この 薬《くすり》 で 少《すこ》し 眠《ねむ》く なる かも しれません。`], 2, `かも しれません leaves the possibility open without promising it.`],
      [`元気《げんき》そう でした から、 もう 大丈夫《だいじょうぶ》 だろう と 思《おも》います means:`, [`She looked well, so I think she is probably all right now.`, `I hear she was well, so she must be all right.`, `She seemed unwell, so she might not be all right.`], 0, `元気《げんき》そう is how she looked, and だろう と 思《おも》います is "I think probably".`],
      [`熱《ねつ》 が ありそう です ね。 風邪《かぜ》 かも しれません means:`, [`I hear you have a fever. It must be a cold.`, `You look as if you have a fever. It might be a cold.`, `You had a fever. It was probably a cold.`], 1, `ありそう is what the speaker sees; かも しれません is "might".`],
      [`降《ふ》りそう な 空《そら》 です から、 午後《ごご》 は 雨《あめ》 に なる かも しれません means:`, [`I heard it will rain, so it will rain this afternoon for sure.`, `It rained this afternoon, so the sky is clear.`, `The sky looks like rain, so it might rain this afternoon.`], 2, `降《ふ》りそう な 空《そら》 is "a sky that looks like rain", and かも しれません is "might".`]
    ] },

  { id: 'review-n4-giving', level: 'N4', unit: 'Giving and receiving', review: true, after: 'te-ageru-kureru-morau', title: `Review: Giving and receiving`, summary: `Check あげる, くれる and もらう with things and with actions, their polite forms, and polite requests with 〜て いただけます か.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/ageru-kureru-morau">giving and receiving things</a> and <a href="#/lessons/te-ageru-kureru-morau">doing things for someone</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>あげる</td><td>give (not to me)</td><td>私《わたし》 は 弟《おとうと》 に かばん を あげました。</td></tr>
<tr><td>くれる</td><td>someone gives to me or my side</td><td>姉《あね》 が 誕生日《たんじょうび》 の カード を くれました。</td></tr>
<tr><td>もらう (に / から)</td><td>I receive</td><td>薬局《やっきょく》 で 薬《くすり》 を もらいます。</td></tr>
<tr><td>くださる / いただく</td><td>polite くれる / もらう</td><td>先生《せんせい》 に 本《ほん》 を いただきました。</td></tr>
<tr><td>〜て くれる</td><td>someone does it for me</td><td>隣《となり》 の 人《ひと》 が 荷物《にもつ》 を 持《も》って くれました。</td></tr>
<tr><td>〜て もらう</td><td>I have someone do it</td><td>看護師《かんごし》さん に 血圧《けつあつ》 を 測《はか》って もらいました。</td></tr>
<tr><td>〜て あげる</td><td>I do it for someone</td><td>妹《いもうと》 に 料理《りょうり》 を 教《おし》えて あげました。</td></tr>
<tr><td>〜て いただけます か</td><td>polite request</td><td>ここ に お名前《なまえ》 を 書《か》いて いただけます か。</td></tr></table>
<h3>Watch out</h3>
<ul><li>くれる only comes toward me or my side: 私《わたし》 は 友達《ともだち》 に くれました is wrong.</li>
<li>With くれる the giver or doer is the subject (が or は); with もらう it takes に (or から), never が.</li>
<li>Do not say 〜て あげます to a patient. Say ご説明《せつめい》 します or お持《も》ち しましょう か.</li>
<li>The ます-form of くださる is くださいます.</li></ul>
<h3>Putting it together</h3>
<div class="ex"><b>母《はは》 が くれた お守《まも》り を いつも 持《も》って います。</b><span>I always carry the charm my mother gave me.</span></div>
<div class="ex"><b>妻《つま》 に 薬《くすり》 を 管理《かんり》 して もらって います。</b><span>My wife looks after my medicines for me.</span></div>
<div class="ex"><b>薬局《やっきょく》 で もらった 説明《せつめい》 の 紙《かみ》 を 見《み》せて いただけます か。</b><span>Could you show me the information sheet you got at the pharmacy?</span></div>
<div class="ex"><b>娘《むすめ》 が 毎日《まいにち》 電話《でんわ》 を くれる ので、 安心《あんしん》 です。</b><span>My daughter calls me every day, so I feel reassured.</span></div>
<div class="ex"><b>買《か》い物《もの》 を 手伝《てつだ》って くれる 人《ひと》 は います か。</b><span>Is there someone who helps you with the shopping?</span></div>`,
    quiz: [
      [`How do you say "My older sister gave me a scarf"?`, [`姉《あね》 が マフラー を くれました。`, `姉《あね》 が マフラー を あげました。`, `姉《あね》 が マフラー を もらいました。`], 0, `When the receiver is me, the giver takes くれる.`],
      [`私《わたし》 は 友達《ともだち》 ＿ 写真《しゃしん》 を もらいました。`, [`が`, `に`, `を`], 1, `With もらう the giver is marked with に (or から).`],
      [`How do you say "I received a letter from my teacher" politely?`, [`先生《せんせい》 に 手紙《てがみ》 を くださいました。`, `先生《せんせい》 に 手紙《てがみ》 を くれました。`, `先生《せんせい》 に 手紙《てがみ》 を いただきました。`], 2, `いただく is the humble もらう, used when I receive from someone above me.`],
      [`Which sentence is wrong?`, [`私《わたし》 は 弟《おとうと》 に 時計《とけい》 を あげました。`, `弟《おとうと》 が 私《わたし》 に 時計《とけい》 を あげました。`, `弟《おとうと》 が 時計《とけい》 を くれました。`], 1, `あげる is never used when the receiver is me; say くれました.`],
      [`毎朝《まいあさ》、 犬《いぬ》 に ご飯《はん》 を やります means:`, [`I feed the dog every morning.`, `The dog gets food from me once.`, `Someone feeds my dog every morning.`], 0, `やる is used for giving food or water to animals and plants.`],
      [`How do you say "My husband drove me to the station"?`, [`夫《おっと》 に 駅《えき》 まで 送《おく》って くれました。`, `夫《おっと》 が 駅《えき》 まで 送《おく》って あげました。`, `夫《おっと》 が 駅《えき》 まで 送《おく》って くれました。`], 2, `The husband is the doer (が) and I benefit, so 〜て くれる.`],
      [`友達《ともだち》 ＿ 引《ひ》っ越《こ》し を 手伝《てつだ》って もらいました。`, [`が`, `に`, `を`], 1, `In 〜て もらう the doer is marked with に.`],
      [`Which is the best way to offer to carry a patient's bag?`, [`荷物《にもつ》 を お持《も》ち しましょう か。`, `荷物《にもつ》 を 持《も》って あげます。`, `荷物《にもつ》 を 持《も》って くれます か。`], 0, `お + stem + しましょう か is a humble offer; 〜て あげます can sound patronising.`],
      [`Which is the politest request?`, [`書《か》いて くれる？`, `書《か》いて ください。`, `書《か》いて いただけません か。`], 2, `〜て いただけません か is the softest of these requests.`],
      [`Which sentence means the same as 母《はは》 が 料理《りょうり》 を 作《つく》って くれました。?`, [`母《はは》 に 料理《りょうり》 を 作《つく》って もらいました。`, `母《はは》 に 料理《りょうり》 を 作《つく》って あげました。`, `母《はは》 が 料理《りょうり》 を 作《つく》って もらいました。`], 0, `The same favour told from my side: 〜て もらう with the doer marked by に.`],
      [`A patient says 娘《むすめ》 が 毎週《まいしゅう》 果物《くだもの》 を 持《も》って 来《き》て くれます. Why くれます?`, [`The patient brings fruit to her daughter.`, `The daughter is on the patient's side, and the favour comes to the patient.`, `The daughter receives fruit from someone.`], 1, `〜て くれる shows an action done for me or my side.`],
      [`先生《せんせい》 が 丁寧《ていねい》 に 説明《せつめい》 して ＿。 (the doctor kindly explained to me)`, [`いただきました`, `さしあげました`, `くださいました`], 2, `くださる is the honorific くれる; with いただく the doctor would take に, not が.`]
    ] }
);
