/* Lessons part 44 (0.26.0): N2 unit reviews: review-n2-advice, review-n2-emphasis, review-n2-keigo, review-n2-connectors.
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (as every lessons file): { id, level, unit, title, summary, draft:true, body:HTML, quiz:[[q, [3 opts], idx, why]] }
   plus: after: '<lesson id>' (the unit's last lesson; read by js/data/lessons-zz-order.js) and review: true
   (a unit review: title "Review: <unit>", level and unit of its unit, short recap body, quiz of exactly 12).
   Examples in the body: <div class="ex"><b>JA</b><span>EN</span></div>.
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  { id: 'review-n2-advice', level: 'N2', unit: 'Advice, wishes and negative guesses', review: true, after: 'n2-mai', title: `Review: Advice, wishes and negative guesses`, summary: `Check which of these patterns you say to reassure a patient and which you only need to understand when someone appeals, wishes, vows or guesses.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-koto-wa-nai">no need to, it goes without saying, bound to</a>, <a href="#/lessons/n2-you-dewa-nai-ka">let us, isn't there some way, I do wish</a> and <a href="#/lessons/n2-mai">〜まい</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜こと は ない</td><td>no need to; spoken, say</td><td>無理《むり》 を する こと は ありません。</td></tr>
<tr><td>〜まで も ない</td><td>not worth it, needless to say; formal</td><td>電話《でんわ》 する まで も ない 用事《ようじ》 です。</td></tr>
<tr><td>〜に 決《き》まって いる</td><td>bound to; casual, understand</td><td>断《ことわ》られる に 決《き》まって いる。</td></tr>
<tr><td>〜と いう もの では ない</td><td>not simply so; say</td><td>我慢《がまん》 すれば いい と いう もの では ありません。</td></tr>
<tr><td>〜よう では ない か</td><td>let us; speeches, understand</td><td>力《ちから》 を 合《あ》わせよう では ありません か。</td></tr>
<tr><td>〜ない もの か</td><td>isn't there some way; formal, say でしょう か</td><td>もう 少《すこ》し 早《はや》く 治《なお》らない もの でしょう か。</td></tr>
<tr><td>〜たい もの だ, 〜て ほしい もの だ</td><td>deep wish; formal, say たい</td><td>いつか 故郷《こきょう》 に 帰《かえ》りたい もの です。</td></tr>
<tr><td>〜まい, 〜では あるまい か</td><td>won't; probably not; written, understand</td><td>二度《にど》 と 遅刻《ちこく》 は するまい。</td></tr>
<tr><td>〜よう か 〜まい か</td><td>whether or not; written, understand</td><td>受《う》けよう か 受《う》けるまい か 迷《まよ》う。</td></tr>
<tr><td>〜まい と する</td><td>try hard not to; written, understand</td><td>弱音《よわね》 を 吐《は》くまい と する。</td></tr></table>
<h3>Watch out</h3>
<ul><li>こと は ない lifts the listener's burden; まで も ない says it is too obvious or minor.</li>
<li>Volitional + では ない か is "let us"; plain form + じゃ ない か is "why, isn't it".</li>
<li>ない + もの か is a wish; a positive verb + もの か is "no way".</li>
<li>Dictionary form + まい works for every verb; never ない or the volitional. With "I" it is a vow; with others, a guess.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>相談《そうだん》 しよう か するまい か 迷《まよ》って いる なら、 一人《ひとり》 で 悩《なや》む こと は ありません。</b><span>If you are torn over whether to ask for help, there is no need to struggle alone. (leaflet)</span></div>
<div class="ex"><b>「どうせ 治《なお》らない に 決《き》まって います」 と 言《い》う 患者《かんじゃ》さん に、 一人《ひとり》 で 結論《けつろん》 を 出《だ》す こと は ない と 伝《つた》えました。</b><span>A patient was sure she would never recover; I told her not to decide that alone.</span></div>
<div class="ex"><b>偏見《へんけん》 の ない 社会《しゃかい》 を 作《つく》ろう では ありません か。 言《い》う まで も なく、 一人《ひとり》 では できません。</b><span>Let us build a society without prejudice. Needless to say, no one can do it alone.</span></div>
<div class="ex"><b>父《ちち》 の 痛《いた》み、 なんとか ならない もの でしょう か。 家《いえ》 では 穏《おだ》やか に 過《す》ごして ほしい もの です。</b><span>Can nothing be done about my father's pain? I do wish he could be at peace at home. (family)</span></div>
<div class="ex"><b>泣《な》くまい と して いる 患者《かんじゃ》さん に、 我慢《がまん》 する こと は ありません よ と 声《こえ》 を かけました。</b><span>To a patient who was trying not to cry, I said there was no need to hold back.</span></div>
<div class="note">Say the polite forms of こと は ない, と いう もの では ない, ない もの か and たい もの だ; understand the rest. A vow such as 迷惑《めいわく》 は かけるまい needs a direct, gentle follow-up.</div>`,
    quiz: [
      [`A patient apologises for crying. 泣《な》いた こと を 謝《あやま》る ＿ は ありません。`, [`まで`, `もの`, `こと`], 2, `"No need to" is dictionary form + こと は ない; it reassures the listener.`],
      [`説明《せつめい》 する まで も ない ほど 簡単《かんたん》 な 手続《てつづ》き です means:`, [`The procedure is so simple that it hardly needs explaining.`, `The procedure stays simple until it is explained.`, `There is no time to explain the procedure.`], 0, `〜まで も ない: not worth going as far as explaining.`],
      [`Which is correct for "He is bound to be busy"?`, [`忙《いそが》しい だ に 決《き》まって いる。`, `忙《いそが》しい に 決《き》まって いる。`, `忙《いそが》しく に 決《き》まって いる。`], 1, `An い-adjective takes に 決《き》まって いる in its plain form, with no だ.`],
      [`"Sleeping more is not automatically better." Which fits?`, [`たくさん 寝《ね》れば いい と いう もの では ありません。`, `たくさん 寝《ね》る まで も ありません。`, `たくさん 寝《ね》れば いい に 決《き》まって います。`], 0, `〜ば いい と いう もの では ない denies a rule taken for granted.`],
      [`A friend says 熱《ねつ》 が ある じゃ ない か. This means:`, [`Let us have a fever.`, `Why, you have a fever!`, `Isn't there some way to lower the fever?`], 1, `Plain form + じゃ ない か is "isn't it"; "let us" needs the volitional form.`],
      [`Which sentence is a wish, "if only this pain would go away"?`, [`この 痛《いた》み、 消《き》えない もの か。`, `あの 人《ひと》 に 二度《にど》 と 頼《たの》む もの か。`, `この 痛《いた》み が 消《き》える もの か。`], 0, `ない + もの か wishes for something hard to get; a positive verb + もの か is "no way".`],
      [`Which uses 〜たい もの だ naturally?`, [`お腹《なか》 が すいた ので、 今《いま》 パン を 食《た》べたい もの です。`, `看護師《かんごし》さん、 窓《まど》 を 開《あ》けたい もの です か。`, `元気《げんき》 に なったら、 いつか また 海外《かいがい》 を 旅《たび》 したい もの です。`], 2, `〜たい もの だ is a long-held wish, not a want of the moment and not a question.`],
      [`若《わか》い 人《ひと》 に は、 もっと 睡眠《すいみん》 を 大切《たいせつ》 に して ほしい もの だ means:`, [`Young people want to sleep more.`, `I hope young people will sleep less.`, `I do wish young people would take their sleep more seriously.`], 2, `〜て ほしい もの だ is a deep wish about others, often with a quiet complaint.`],
      [`The "probably not" form of 来《く》る is:`, [`来《こ》ないまい`, `来《こ》ようまい`, `来《く》るまい`], 2, `まい follows the dictionary form (来《く》るまい; 来《こ》まい also occurs), never ない or the volitional.`],
      [`二度《にど》 と 嘘《うそ》 は つくまい と 決《き》めた means:`, [`I decided I would never lie again.`, `I decided he probably would not lie again.`, `I decided not to stop lying.`], 0, `With the speaker as subject and と 決《き》める, まい is a vow.`],
      [`In everyday speech, how do you say "I make a habit of not drinking coffee at night"?`, [`夜《よる》 は コーヒー を 飲《の》むまい と します。`, `夜《よる》 は コーヒー を 飲《の》まない よう に して います。`, `夜《よる》 は コーヒー を 飲《の》もう か 飲《の》むまい か です。`], 1, `〜まい と する is a written, one-off effort; for a habit say 〜ない よう に して いる.`],
      [`A patient feels guilty about taking sick leave. Which do you say?`, [`休《やす》む こと を 責《せ》めよう では ありません か。`, `休《やす》む こと を 申《もう》し訳《わけ》 なく 思《おも》う こと は ありません よ。`, `休《やす》む に 決《き》まって います。`], 1, `こと は ありません lifts the burden; the others are a rousing appeal and a blunt prediction.`]
    ] },

  { id: 'review-n2-emphasis', level: 'N2', unit: 'Emphasis and limits', review: true, after: 'n2-nuku', title: `Review: Emphasis and limits`, summary: `Check how to stress a condition, a concession, an extreme case or an amount, and how far an action goes, from 〜て こそ to 〜かけ.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-te-koso">〜て こそ, まで, など</a>, <a href="#/lessons/n2-dake">the uses of だけ</a> and <a href="#/lessons/n2-nuku">〜抜《ぬ》く, 〜通《とお》す, 〜切《き》れない, 〜かけ</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜て こそ</td><td>only by doing; say</td><td>続《つづ》けて こそ 力《ちから》 に なります。</td></tr>
<tr><td>〜こそ 〜が</td><td>granted … but; formal, say</td><td>量《りょう》 こそ 少《すく》ない です が、 毎日《まいにち》 食《た》べて います。</td></tr>
<tr><td>noun + まで</td><td>even (it spreads); say</td><td>家族《かぞく》 に まで 当《あ》たって しまいます。</td></tr>
<tr><td>〜て まで</td><td>going too far; say</td><td>無理《むり》 を して まで 行《い》かない。</td></tr>
<tr><td>〜など, 〜なんか</td><td>the likes of; など polite, なんか casual</td><td>私《わたし》 など、 まだ 新人《しんじん》 です。</td></tr>
<tr><td>〜だけ</td><td>as much as; say</td><td>食《た》べられる だけ 食《た》べて ください。</td></tr>
<tr><td>〜だけ の + noun</td><td>enough to; say</td><td>歩《ある》ける だけ の 力《ちから》 は あります。</td></tr>
<tr><td>〜だけ まし だ</td><td>at least; say</td><td>熱《ねつ》 が ない だけ まし です。</td></tr>
<tr><td>〜だけ の こと は ある</td><td>no wonder (good result); say</td><td>毎日《まいにち》 練習《れんしゅう》 した だけ の こと は ある。</td></tr>
<tr><td>〜抜《ぬ》く</td><td>to the end, despite difficulty; say</td><td>考《かんが》え抜《ぬ》いて 決《き》めた。</td></tr>
<tr><td>〜通《とお》す</td><td>all the way, unchanged; say</td><td>最後《さいご》 まで 嘘《うそ》 を つき通《とお》した。</td></tr>
<tr><td>〜切《き》れない</td><td>cannot fully, too much; say</td><td>一人《ひとり》 では 抱《かか》え切《き》れない。</td></tr>
<tr><td>〜かけ, 〜かける</td><td>half-done, on the way; say</td><td>食《た》べかけ の パン が あります。</td></tr></table>
<h3>Watch out</h3>
<ul><li>〜て こそ sets a condition; 〜から こそ singles out a reason.</li>
<li>まで: how far it has spread; さえ: the most basic case.</li>
<li>私《わたし》 など is modesty; なんか about others' things is rude. 私《わたし》 なんか with a wish not to be here needs a gentle, direct question.</li>
<li>だけ の + noun is "enough to", not "only". だけ の こと は ある is for good results.</li>
<li>Compounds join the ます-stem: やり抜《ぬ》く. 話《はな》しかける is "speak to".</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>治療《ちりょう》 は 続《つづ》けて こそ 効果《こうか》 が 出《で》ます。 でも、 無理《むり》 を して まで 急《いそ》ぐ 必要《ひつよう》 は ありません。</b><span>Treatment works only if you keep it up, but don't push yourself to hurry.</span></div>
<div class="ex"><b>最近《さいきん》 は 趣味《しゅみ》 の 釣《つ》り まで やめて しまいました が、 食事《しょくじ》 が とれる だけ まし です。</b><span>Lately I have even given up fishing, but at least I can eat. (patient)</span></div>
<div class="ex"><b>最後《さいご》 まで 走《はし》り抜《ぬ》いた。 さすが プロ だけ の こと は ある。</b><span>He ran it to the end. A true professional.</span></div>
<div class="ex"><b>ストレス だけ が 原因《げんいん》 と は 言《い》い切《き》れません。 できる だけ の 検査《けんさ》 を して みましょう。</b><span>I can't say for certain that stress is the only cause. Let's do all the tests we can.</span></div>
<div class="ex"><b>一人《ひとり》 で 隠《かく》し通《とお》そう と しました が、 抱《かか》え切《き》れなく なって 相談《そうだん》 に 来《き》ました。</b><span>I tried to keep it hidden, but it became too much to carry, so I came for help. (patient)</span></div>
<div class="note">With a tired patient, acknowledge what they came through rather than urging 頑張《がんば》り抜《ぬ》く.</div>`,
    quiz: [
      [`"Practice only means something if you keep it up." 練習《れんしゅう》 は 続《つづ》けて ＿ 意味《いみ》 が あります。`, [`こそ`, `から こそ`, `まで`], 0, `て-form + こそ sets the condition; から こそ follows a plain form and singles out a reason.`],
      [`迷《まよ》い こそ しました が、 後悔《こうかい》 は して いません means:`, [`I hesitated so much that I regret it.`, `I did hesitate, admittedly, but I have no regrets.`, `I neither hesitated nor regretted it.`], 1, `Stem + こそ した が concedes one point before the main one.`],
      [`"Lately even my family's voices grate on me." 最近《さいきん》 は 家族《かぞく》 の 声《こえ》 ＿ うるさく 感《かん》じます。`, [`だけ`, `こそ`, `まで`], 2, `まで adds an extreme case and shows how far the irritation has spread.`],
      [`借金《しゃっきん》 を して まで 買《か》う 必要《ひつよう》 は ない means:`, [`There is no need to go so far as borrowing money to buy it.`, `You should buy it until you are in debt.`, `You must borrow money before you buy it.`], 0, `〜て まで marks the action as going too far.`],
      [`Which sentence sounds dismissive of someone else?`, [`私《わたし》 など、 まだ 勉強中《べんきょうちゅう》 です。`, `先輩《せんぱい》 の 資料《しりょう》 なんか、 参考《さんこう》 に なりません。`, `お茶《ちゃ》 など いかが です か。`], 1, `なんか about another person's work belittles it; など about yourself is modesty.`],
      [`考《かんが》えれば 考《かんが》える ＿、 分《わ》からなく なります。`, [`まで`, `だけ`, `こそ`], 1, `〜ば 〜だけ means "the more …, the more"; in your own speech 〜ば 〜ほど is more common.`],
      [`一人《ひとり》 で 暮《く》らす だけ の お金《かね》 は あります means:`, [`I only have money for living alone.`, `Living alone is the only thing I spend money on.`, `I have enough money to live on my own.`], 2, `Verb + だけ の + noun is the amount needed for that action, not "only".`],
      [`雨《あめ》 に 降《ふ》られた が、 着替《きが》え を 持《も》って いた ＿。`, [`だけ まし だった`, `だけ の こと は あった`, `だけ の 着替《きが》え だった`], 0, `だけ まし picks out what made a bad situation less bad; だけ の こと は ある praises a result.`],
      [`"She stayed silent the whole interview." 彼女《かのじょ》 は 面接《めんせつ》 の 間《あいだ》 ずっと ＿。`, [`黙《だま》り切《き》れなかった`, `黙《だま》りかけた`, `黙《だま》り通《とお》した`], 2, `〜通《とお》す keeps a state going unchanged from start to finish.`],
      [`一日《いちにち》 では 読《よ》み切《き》れない 量《りょう》 です means:`, [`I read all of it in one day.`, `It is the amount I read each day.`, `It is too much to read in one day.`], 2, `〜切《き》れない: the amount is more than can be finished.`],
      [`In which sentence does かけ mean "half-done"?`, [`隣《となり》 の 人《ひと》 に 話《はな》しかけた。`, `机《つくえ》 の 上《うえ》 に 読《よ》みかけ の 雑誌《ざっし》 が ある。`, `みんな に 協力《きょうりょく》 を 呼《よ》びかけた。`], 1, `Stem + かけ の + noun is something begun and left; 話《はな》しかける and 呼《よ》びかける are "speak to" and "call on".`],
      [`Which line acknowledges what a tired patient came through, without adding pressure?`, [`つらい 時期《じき》 を、 よく 耐《た》え抜《ぬ》いて こられました ね。`, `最後《さいご》 まで 頑張《がんば》り抜《ぬ》いて ください。`, `もう 少《すこ》し 頑張《がんば》りかけて ください。`], 0, `耐《た》え抜《ぬ》く looks back on what was endured; urging 頑張《がんば》り抜《ぬ》く can feel like pressure, and 頑張《がんば》りかける is not used.`]
    ] },

  { id: 'review-n2-keigo', level: 'N2', unit: 'Keigo, letters and chart style', review: true, after: 'n2-karute', title: `Review: Keigo, letters and chart style`, summary: `Check whose action each keigo pattern describes, the set phrases of letters and emails, and how to read what a chart line saw, heard, needs or judges.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-keigo-2">working keigo</a>, <a href="#/lessons/n2-tegami">letters</a> and <a href="#/lessons/n2-karute">chart style</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>お / ご〜いただく</td><td>theirs, received; say</td><td>ご連絡《れんらく》 いただき、 ありがとう ございます。</td></tr>
<tr><td>お / ご〜願《ねが》います</td><td>firm request; notices, understand</td><td>院内《いんない》 では 喫煙《きつえん》 を ご遠慮《えんりょ》 願《ねが》います。</td></tr>
<tr><td>〜させて いただく</td><td>mine, by leave; sparingly</td><td>少《すこ》し お話《はなし》 を 聞《き》かせて いただけます か。</td></tr>
<tr><td>〜いたします, 〜て おります</td><td>my side's action; say</td><td>後《のち》ほど ご説明《せつめい》 いたします。</td></tr>
<tr><td>cushion words</td><td>soften; say</td><td>差《さ》し支《つか》え なければ、 お仕事《しごと》 に ついて 伺《うかが》えます か。</td></tr>
<tr><td>〜と 存《ぞん》じます</td><td>humble "I think"; email</td><td>来週《らいしゅう》 伺《うかが》いたい と 存《ぞん》じます。</td></tr>
<tr><td>〜いただけます と 幸《さいわ》い です</td><td>I'd be grateful if; email</td><td>資料《しりょう》 を お送《おく》り いただけます と 幸《さいわ》い です。</td></tr>
<tr><td>〜を 認《みと》める / 認《みと》めず</td><td>seen / not seen; chart</td><td>発汗《はっかん》 を 認《みと》める。</td></tr>
<tr><td>〜との こと</td><td>told; chart</td><td>昨夜《さくや》 は よく 眠《ねむ》れた との こと。</td></tr>
<tr><td>〜のみ, 〜を 要《よう》する</td><td>only; needs; chart</td><td>夜間《やかん》 のみ 見守《みまも》り を 要《よう》する。</td></tr>
<tr><td>〜と 考《かんが》えられる</td><td>judged; chart</td><td>睡眠《すいみん》 不足《ぶそく》 に よる もの と 考《かんが》えられる。</td></tr>
<tr><td>〜傾向《けいこう》 に ある</td><td>a trend; chart</td><td>不安《ふあん》 は 軽減《けいげん》 傾向《けいこう》 に ある。</td></tr></table>
<h3>Watch out</h3>
<ul><li>ご記入《きにゅう》 いただく, not ご記入《きにゅう》 して いただく: the action is theirs.</li>
<li>Do not overuse させて いただく or add さ: not 休《やす》まさせて.</li>
<li>存《ぞん》じます is my own humble view; ご存《ぞん》じ is the reader's knowing.</li>
<li>In a chart, 認《みと》める is "observed", not "admits"; との こと is what someone reported.</li>
<li>Chart style is written; to a patient say 〜と 考《かんが》えられます.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>お電話《でんわ》 いただき、 ありがとう ございます。 担当《たんとう》 の 者《もの》 は ただいま 席《せき》 を 外《はず》して おります。</b><span>Thank you for calling. The person in charge is away from the desk.</span></div>
<div class="ex"><b>恐《おそ》れ入《い》ります が、 検査《けんさ》 の 結果《けっか》 を お送《おく》り いただけます と 幸《さいわ》い です。</b><span>Sorry to trouble you, but I would be grateful if you could send the test results. (email)</span></div>
<div class="ex"><b>本人《ほんにん》 より、 夜《よる》 は ほとんど 眠《ねむ》れない との こと。 夜間《やかん》 の 巡回《じゅんかい》 では 入眠《にゅうみん》 を 認《みと》める。</b><span>The patient reports hardly sleeping. On night rounds, she was seen asleep. (chart)</span></div>
<div class="ex"><b>当院《とういん》 にて 経過《けいか》 を 拝見《はいけん》 して おります 方《かた》 を ご紹介《しょうかい》 いたします。</b><span>I am referring a patient we have been following here. (letter)</span></div>
<div class="ex"><b>「緊張《きんちょう》 に よる 頭痛《ずつう》 と 考《かんが》えられる」 と 書《か》き、 ご本人《ほんにん》 に は 「緊張《きんちょう》 から 来《く》る 頭痛《ずつう》 だ と 思《おも》います」 と 話《はな》します。</b><span>I write "considered a tension headache"; to the patient I say "I think it comes from tension".</span></div>
<div class="note">Decide whose action it is; sort chart lines into seen, told, needed and judged.</div>`,
    quiz: [
      [`At reception: 保険証《ほけんしょう》 を ＿ ください。`, [`ご提示《ていじ》`, `ご提示《ていじ》 いたして`, `提示《ていじ》 させて`], 0, `Showing the card is the patient's action: ご + noun + ください. いたして is humble, and させて would be your own action.`],
      [`You tell a family that you will explain the results. Which is right and not overdone?`, [`検査《けんさ》 の 結果《けっか》 を ご説明《せつめい》 いたします。`, `検査《けんさ》 の 結果《けっか》 を ご説明《せつめい》 して いただきます。`, `検査《けんさ》 の 結果《けっか》 を ご説明《せつめい》 ください。`], 0, `ご〜いたします is humble for your own action; the others ask the family to explain.`],
      [`Before telling a family that visiting time is over, which cushion fits?`, [`差《さ》し支《つか》え なければ`, `申《もう》し訳《わけ》 ございません が`, `お手数《てすう》 です が`], 1, `申《もう》し訳《わけ》 ございません が comes before a refusal or unwelcome news.`],
      [`To an outside caller, about your own attending doctor: 担当医《たんとうい》 は ただいま 病棟《びょうとう》 に ＿。`, [`いらっしゃいます`, `おります`, `ございます`], 1, `To an outsider, your own side takes humble おります.`],
      [`先生《せんせい》 も ＿ の とおり、 来月《らいげつ》 から 外来《がいらい》 の 時間《じかん》 が 変《か》わります。`, [`ご存《ぞん》じ`, `存《ぞん》じます`, `お思《おも》い`], 0, `ご存《ぞん》じ is the honorific for the other person's knowing; 存《ぞん》じます is your own humble view.`],
      [`By email, you ask another doctor to tell you a convenient date. Which is right?`, [`ご都合《つごう》 の よい 日《ひ》 を お知《し》らせ いたします と 幸《さいわ》い です。`, `ご都合《つごう》 の よい 日《ひ》 を 知《し》らせる と 存《ぞん》じます。`, `ご都合《つごう》 の よい 日《ひ》 を お知《し》らせ いただけます と 幸《さいわ》い です。`], 2, `Telling is the reader's action, received by you: お知《し》らせ いただけます と 幸《さいわ》い です. いたします is humble, for your own action, and 存《ぞん》じます states your own view.`],
      [`In a referral letter, 貴院《きいん》 means:`, [`our hospital`, `a private clinic`, `your hospital`], 2, `貴院《きいん》 is the reader's hospital; your own is 当院《とういん》.`],
      [`Addressing a letter to a department, not a person: 精神科《せいしんか》 外来《がいらい》 ＿`, [`様《さま》`, `御中《おんちゅう》`, `先生《せんせい》`], 1, `御中《おんちゅう》 follows the name of an organisation or department.`],
      [`Which chart line is the writer's own judgement?`, [`歩行時《ほこうじ》 に ふらつき を 認《みと》める。`, `本人《ほんにん》 より、 よく 眠《ねむ》れた との こと。`, `ふらつき は 疲労《ひろう》 に よる もの と 思《おも》われる。`], 2, `と 思《おも》われる gives the writer's cautious judgement; 認《みと》める records a finding, and との こと a report.`],
      [`食事《しょくじ》 に 一部《いちぶ》 介助《かいじょ》 を 要《よう》する means:`, [`Needs partial help with meals.`, `Helps other patients with meals.`, `Refuses help with meals.`], 0, `〜を 要《よう》する is written "needs".`],
      [`Which would you SAY to a patient?`, [`不安《ふあん》 に よる もの と 思《おも》われる。`, `不安《ふあん》 から 来《き》て いる と 考《かんが》えられます。`, `不安《ふあん》 を 認《みと》める。`], 1, `In speech use です / ます: 〜と 考《かんが》えられます. The other two are chart style.`],
      [`外出《がいしゅつ》 を 避《さ》ける 傾向《けいこう》 に ある means:`, [`has stopped going out completely`, `is planning to go out`, `tends to avoid going out`], 2, `〜傾向《けいこう》 に ある describes a tendency, not a fixed fact.`]
    ] },

  { id: 'review-n2-connectors', level: 'N2', unit: 'Connectors and set phrases', review: true, after: 'n2-wo-komete', title: `Review: Connectors and set phrases`, summary: `Check what each sentence-initial connector signals, how to set something aside or except it, and the set phrases for feelings, from したがって to 〜て ならない.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/n2-setsuzokushi">connectors</a>, <a href="#/lessons/n2-wa-tomokaku">setting aside and except</a> and <a href="#/lessons/n2-wo-komete">set phrases for feelings</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>したがって</td><td>therefore; formal, say</td><td>熱《ねつ》 が 下《さ》がった。 したがって、 出勤《しゅっきん》 できる。</td></tr>
<tr><td>ところが</td><td>however (unexpected); say</td><td>急《いそ》いだ。 ところが、 間《ま》に合《あ》わなかった。</td></tr>
<tr><td>なお</td><td>note; formal, say</td><td>なお、 駐車場《ちゅうしゃじょう》 は ありません。</td></tr>
<tr><td>ただし</td><td>except, provided that; say</td><td>入浴《にゅうよく》 できます。 ただし、 短《みじか》め に。</td></tr>
<tr><td>〜は ともかく</td><td>X aside; say</td><td>結果《けっか》 は ともかく、 よく 頑張《がんば》りました。</td></tr>
<tr><td>〜は さておき</td><td>moving on from X; say</td><td>細《こま》かい 話《はなし》 は さておき、 結論《けつろん》 から 言《い》います。</td></tr>
<tr><td>〜を 除《のぞ》いて</td><td>except; formal</td><td>二人《ふたり》 を 除《のぞ》いて 全員《ぜんいん》 参加《さんか》 した。</td></tr>
<tr><td>〜は 別《べつ》 と して</td><td>apart from; say</td><td>時間《じかん》 は 別《べつ》 と して、 賛成《さんせい》 です。</td></tr>
<tr><td>〜抜《ぬ》き で</td><td>without; spoken</td><td>昼《ひる》ご飯《はん》抜《ぬ》き で 働《はたら》いた。</td></tr>
<tr><td>〜を こめて</td><td>with feeling; say</td><td>心《こころ》 を こめて 作《つく》りました。</td></tr>
<tr><td>〜に つけ</td><td>whenever; understand</td><td>写真《しゃしん》 を 見《み》る に つけ、 昔《むかし》 を 思《おも》い出《だ》す。</td></tr>
<tr><td>〜ふう に</td><td>as if; say</td><td>気《き》 に して いない ふう に 笑《わら》った。</td></tr>
<tr><td>〜て ならない</td><td>can't help feeling; formal, understand</td><td>将来《しょうらい》 が 不安《ふあん》 で ならない。</td></tr></table>
<h3>Watch out</h3>
<ul><li>ところが brings an unexpected fact, never a request or intention; use しかし there.</li>
<li>なお adds a note; ただし limits or sets a condition.</li>
<li>は ともかく sets X aside; は もちろん includes it.</li>
<li>を 抜《ぬ》き に して は needs "cannot" after it.</li>
<li>に つけ follows seeing, hearing or thinking. て ならない is formal; casual is て しょう が ない.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>費用《ひよう》 の 問題《もんだい》 は 別《べつ》 と して、 ご本人《ほんにん》 の 希望《きぼう》 を 抜《ぬ》き に して は 何《なに》 も 決《き》められません。</b><span>Cost aside, nothing can be decided without the patient's wishes. (family meeting)</span></div>
<div class="ex"><b>きっかけ は ともかく、 今《いま》 は 休《やす》む こと が 一番《いちばん》 です。 ただし、 一日中《いちにちじゅう》 寝《ね》て いる 必要《ひつよう》 は ありません。</b><span>Whatever set it off, rest comes first now. That said, you need not stay in bed all day.</span></div>
<div class="ex"><b>面会《めんかい》 は 月曜日《げつようび》 を 除《のぞ》いて 毎日《まいにち》 可能《かのう》 です。 なお、 お子《こ》さん の 面会《めんかい》 は 受付《うけつけ》 に ご相談《そうだん》 ください。</b><span>Visits daily except Monday. Note: for children's visits, ask at reception. (notice)</span></div>
<div class="ex"><b>母《はは》 は 平気《へいき》 な ふう に 笑《わら》った。 ところが、 夜《よる》 は 泣《な》いて いた。</b><span>My mother laughed as if she were fine. Yet at night she cried.</span></div>
<div class="ex"><b>娘《むすめ》 の 寝顔《ねがお》 を 見《み》る に つけ、 この 子《こ》 の 将来《しょうらい》 が 心配《しんぱい》 で なりません。</b><span>Whenever I look at my daughter asleep, I can't help worrying about her future. (family)</span></div>
<div class="note">A connector says what the next sentence does.</div>`,
    quiz: [
      [`結果《けっか》 は 良《よ》く なかった。 ＿、 もう 一度《いちど》 挑戦《ちょうせん》 する つもり です。`, [`ところが`, `しかし`, `すなわち`], 1, `An intention follows, so しかし; ところが only brings an unexpected fact, and すなわち restates.`],
      [`説明会《せつめいかい》 は 三時《さんじ》 から です。 ＿、 当日《とうじつ》 は 駐車場《ちゅうしゃじょう》 が 混《こ》み合《あ》います ので ご注意《ちゅうい》 ください。`, [`ただし`, `したがって`, `なお`], 2, `The second sentence adds a note, not an exception to the first, so なお.`],
      [`検査《けんさ》 で 異常《いじょう》 は 見《み》られません でした。 ＿、 今回《こんかい》 の 症状《しょうじょう》 は ストレス に よる もの と 考《かんが》えられます。`, [`したがって`, `ところが`, `ただし`], 0, `The judgement follows logically from the result: したがって.`],
      [`"Setting the cost aside, the main thing now is rest." 費用《ひよう》 ＿、 まず は 休《やす》む こと が 大事《だいじ》 です。`, [`は もちろん`, `は ともかく`, `を こめて`], 1, `は ともかく sets X aside; は もちろん would include it.`],
      [`"Open every day except over the New Year holidays." 年末年始《ねんまつねんし》 ＿、 毎日《まいにち》 開《あ》いて います。`, [`を 除《のぞ》いて`, `は さておき`, `を 抜《ぬ》き に して は`], 0, `を 除《のぞ》いて states an exception; は さておき moves on from a topic.`],
      [`砂糖《さとう》抜《ぬ》き で お願《ねが》い します means:`, [`Extra sugar, please.`, `Sugar on the side, please.`, `Without sugar, please.`], 2, `Noun + 抜《ぬ》き で means "without".`],
      [`地域《ちいき》 の 支援《しえん》 を 抜《ぬ》き に して は、 ＿。`, [`一人暮《ひとりぐ》らし は 続《つづ》けられません`, `一人暮《ひとりぐ》らし を 続《つづ》けましょう`, `一人暮《ひとりぐ》らし は 簡単《かんたん》 です`], 0, `を 抜《ぬ》き に して は is followed by "cannot" or "difficult".`],
      [`心《こころ》 を こめて 書《か》いた 手紙《てがみ》 is:`, [`a letter written about the heart`, `a letter written in a hurry`, `a letter written with real feeling`], 2, `〜を こめて means "putting a feeling into it".`],
      [`"Whenever I hear that song, I think of my father." あの 歌《うた》 を 聞《き》く ＿、 父《ちち》 を 思《おも》い出《だ》します。`, [`に つけ`, `を こめて`, `ふう に`], 0, `Verb of hearing + に つけ: whenever, with a feeling after it.`],
      [`In a formal letter from a family, which fits "we cannot help worrying about him"?`, [`心配《しんぱい》 で しょう が ない ん です。`, `心配《しんぱい》 で なりません。`, `心配《しんぱい》 ふう です。`], 1, `〜て (で) ならない is the formal form; 〜て しょう が ない is casual.`],
      [`疲《つか》れて いない ふう に 振《ふ》る舞《ま》って いた means:`, [`She was not tired at all.`, `She dressed in a style that hid her tiredness.`, `She acted as if she were not tired.`], 2, `Plain form + ふう に: in a way that looks as if.`],
      [`通院《つういん》 の 負担《ふたん》 は 別《べつ》 と して、 治療《ちりょう》 の 内容《ないよう》 に は 納得《なっとく》 して います means:`, [`Because of the burden of clinic visits, she accepts the treatment.`, `Apart from the burden of clinic visits, she is satisfied with the treatment itself.`, `Including the clinic visits, she finds everything a burden.`], 1, `は 別《べつ》 と して puts one matter to one side as separate.`]
    ] }
);
