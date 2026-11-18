/* Lessons part 39 (0.26.0): N3 unit reviews: review-n3-time, review-n3-limits, review-n3-causes, review-n3-conditions.
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (as every lessons file): { id, level, unit, title, summary, draft:true, body:HTML, quiz:[[q, [3 opts], idx, why]] }
   plus: after: '<lesson id>' (the unit's last lesson; read by js/data/lessons-zz-order.js) and review: true
   (a unit review: title "Review: <unit>", level and unit of its unit, short recap body, quiz of exactly 12).
   Examples in the body: <div class="ex"><b>JA</b><span>EN</span></div>.
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  { id: 'review-n3-time', level: 'N3', unit: 'Time and sequence', review: true, after: 'irai-totan-shidai', title: `Review: Time and sequence`, summary: `Check how to place events in time, from 間《あいだ》 and うち に to たび に, 以来《いらい》, とたん and 次第《しだい》.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/aida-uchi">during and while</a>, <a href="#/lessons/tabi-toori-tsuide">every time and exactly as</a> and <a href="#/lessons/irai-totan-shidai">ever since and the moment</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜間《あいだ》</td><td>the whole time</td><td>会議《かいぎ》 の 間《あいだ》、 ずっと 黙《だま》って いました。</td></tr>
<tr><td>〜間《あいだ》 に</td><td>one event inside a period</td><td>昼休《ひるやす》み の 間《あいだ》 に 銀行《ぎんこう》 へ 行《い》きました。</td></tr>
<tr><td>〜うち に</td><td>while you still can</td><td>明《あか》るい うち に 買《か》い物《もの》 を 済《す》ませます。</td></tr>
<tr><td>〜ない うち に</td><td>before an unwanted change</td><td>雨《あめ》 が 降《ふ》らない うち に 帰《かえ》ります。</td></tr>
<tr><td>〜て いる うち に</td><td>before you knew it</td><td>本《ほん》 を 読《よ》んで いる うち に 朝《あさ》 に なりました。</td></tr>
<tr><td>〜たび に</td><td>every time</td><td>階段《かいだん》 を 上《のぼ》る たび に 膝《ひざ》 が 痛《いた》みます。</td></tr>
<tr><td>〜とおり / 〜どおり</td><td>exactly as</td><td>地図《ちず》 の とおり に 行《い》きました。</td></tr>
<tr><td>〜ついで に</td><td>while you're at it</td><td>散歩《さんぽ》 の ついで に パン を 買《か》いました。</td></tr>
<tr><td>〜て 以来《いらい》</td><td>ever since (a state to now)</td><td>引《ひ》っ越《こ》して 以来《いらい》、 よく 眠《ねむ》れて いません。</td></tr>
<tr><td>〜て はじめて</td><td>not until</td><td>一人《ひとり》 で 暮《く》らして はじめて 料理《りょうり》 を 覚《おぼ》えました。</td></tr>
<tr><td>〜た とたん</td><td>the moment (sudden)</td><td>横《よこ》 に なった とたん、 咳《せき》 が 出《で》ました。</td></tr>
<tr><td>〜次第《しだい》</td><td>as soon as (I will)</td><td>書類《しょるい》 が 届《とど》き次第《しだい》、 ご連絡《れんらく》 します。</td></tr></table>
<h3>Watch out</h3>
<ul><li>A single event inside a period needs に: 寝《ね》て いる 間《あいだ》 に, not 寝《ね》て いる 間《あいだ》.</li>
<li>とたん: a sudden past event; 次第《しだい》: your own next step. Not 着《つ》いた とたん 電話《でんわ》 します.</li>
<li>以来《いらい》 needs a state lasting to now; for one event after another use 〜て から.</li>
<li>たび に takes the dictionary form even about the past. Noun + どおり, but noun + の とおり.</li>
<li>ついで に adds an errand; 〜ながら is two actions at once.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>退院《たいいん》 して 以来《いらい》、 受診《じゅしん》 の たび に 体重《たいじゅう》 を 測《はか》って います。</b><span>Since your discharge, we have weighed you at every visit.</span></div>
<div class="ex"><b>検査《けんさ》 の 結果《けっか》 が わかり次第《しだい》、 予定《よてい》どおり 治療《ちりょう》 を 始《はじ》めます。</b><span>Once the results are in, we'll start treatment as planned.</span></div>
<div class="ex"><b>電車《でんしゃ》 に 乗《の》った とたん 胸《むね》 が どきどき して、 それ 以来《いらい》 一人《ひとり》 で 乗《の》る の が 怖《こわ》い です。</b><span>The moment I got on the train my heart pounded; ever since, I've been afraid to ride alone.</span></div>
<div class="ex"><b>この 仕事《しごと》 を 始《はじ》めて 以来《いらい》、 会議《かいぎ》 の たび に 胃《い》 が 痛《いた》く なります。</b><span>Since I started this job, my stomach hurts at every meeting.</span></div>
<div class="ex"><b>面会《めんかい》 の 間《あいだ》、 患者《かんじゃ》さん は ずっと 穏《おだ》やか でした が、 ご家族《かぞく》 が 帰《かえ》った とたん 泣《な》き出《だ》しました。</b><span>The patient was calm all through the visit but burst into tears the moment the family left.</span></div>
<div class="note">In a history, 以来《いらい》 dates a lasting problem and とたん a sudden onset; 次第《しだい》 promises your next step.</div>`,
    quiz: [
      [`母《はは》 が 買《か》い物《もの》 に 行《い》って いる ＿、 弟《おとうと》 から 電話《でんわ》 が ありました。`, [`間《あいだ》 に`, `間《あいだ》`, `とたん`], 0, `One event (a call) inside a period takes 間《あいだ》 に.`],
      [`資料《しりょう》 が ＿、 すぐ お送《おく》り します。`, [`できた とたん`, `できて 以来《いらい》`, `でき次第《しだい》`], 2, `Your own next step after something is ready takes the ます-stem + 次第《しだい》.`],
      [`この 道《みち》 を 通《とお》る ＿、 学生《がくせい》 の ころ を 思《おも》い出《だ》します。`, [`ついで に`, `たび に`, `とおり に`], 1, `"Every time" is the dictionary form + たび に.`],
      [`Which is natural for "After I got home, I had a bath"?`, [`家《いえ》 に 帰《かえ》って 以来《いらい》、 お風呂《ふろ》 に 入《はい》りました。`, `家《いえ》 に 帰《かえ》って から、 お風呂《ふろ》 に 入《はい》りました。`, `家《いえ》 に 帰《かえ》った 次第《しだい》、 お風呂《ふろ》 に 入《はい》りました。`], 1, `One event after another is 〜て から; 以来《いらい》 needs a lasting state, and 次第《しだい》 needs the ます-stem and a future step.`],
      [`忘《わす》れない うち に メモ して おきます means:`, [`I'll make a note before I forget.`, `I forgot, so I'll make a note now.`, `I'll make a note every time I forget.`], 0, `〜ない うち に means "before it happens".`],
      [`医者《いしゃ》 に 言《い》われた とおり、 毎日《まいにち》 歩《ある》いて います means:`, [`Every time the doctor tells me, I walk.`, `I walk every day, as the doctor told me.`, `I walk every day instead of seeing the doctor.`], 1, `〜とおり means "exactly as" something was said.`],
      [`Which means "Since I was going out to post a letter, I did some shopping too"?`, [`手紙《てがみ》 を 出《だ》し に 行《い》く ついで に、 買《か》い物《もの》 も しました。`, `手紙《てがみ》 を 出《だ》しながら、 買《か》い物《もの》 も しました。`, `手紙《てがみ》 を 出《だ》す たび に、 買《か》い物《もの》 も しました。`], 0, `An extra errand added to a trip is ついで に; ながら is two actions at once, and たび に is "every time".`],
      [`入院《にゅういん》 して はじめて、 自分《じぶん》 が 疲《つか》れて いた こと に 気《き》づきました means:`, [`Ever since I was admitted, I have felt tired.`, `It wasn't until I was admitted that I noticed how tired I had been.`, `The moment I was admitted, I got tired.`], 1, `〜て はじめて means "not until"; 以来《いらい》 and とたん would give the other meanings.`],
      [`祖母《そぼ》 が 入院《にゅういん》 して いる ＿、 毎週《まいしゅう》 お見舞《みま》い に 行《い》きました。`, [`とたん`, `次第《しだい》`, `間《あいだ》`], 2, `Visits repeated all through a period take 間《あいだ》 without に; とたん needs the た-form and a sudden event, and 次第《しだい》 needs the ます-stem and a future step.`],
      [`熱《ねつ》 が 下《さ》がって いる ＿、 シャワー を 浴《あ》びて おきましょう。`, [`たび に`, `以来《いらい》`, `うち に`], 2, `"While the fever is down, before it comes back" is うち に.`],
      [`話《はなし》 を 聞《き》いて いる うち に、 だんだん 眠《ねむ》く なりました means:`, [`Every time I listen, I get sleepy.`, `I got sleepy before I could listen.`, `As I was listening, I gradually got sleepy.`], 2, `〜て いる うち に is a change that comes on during an activity.`],
      [`主治医《しゅじい》 の 指示《しじ》 ＿ とおり に、 少《すこ》し ずつ 歩《ある》く 時間《じかん》 を 増《ふ》やして います。`, [`の`, `を`, `が`], 0, `A noun takes の before とおり; joined straight to a noun it would be 指示《しじ》どおり.`]
    ] },

  { id: 'review-n3-limits', level: 'N3', unit: 'Limits and extent', review: true, after: 'compound-verbs', title: `Review: Limits and extent`, summary: `Check how to limit and stress a word, give an amount or a degree, compare with ほど, and say how an action starts, goes on or ends with a compound verb.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/dake-shika-sae">only, even, the very</a>, <a href="#/lessons/hodo-kurai">extent and degree</a> and <a href="#/lessons/compound-verbs">compound verbs</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>だけ</td><td>only (neutral)</td><td>朝《あさ》 は 果物《くだもの》 だけ 食《た》べます。</td></tr>
<tr><td>しか 〜ない</td><td>only, too little</td><td>財布《さいふ》 に 千円《せんえん》 しか ありません。</td></tr>
<tr><td>ばかり / 〜て ばかり いる</td><td>nothing but (too much)</td><td>弟《おとうと》 は 漫画《まんが》 ばかり 読《よ》んで います。</td></tr>
<tr><td>さえ</td><td>even (the extreme case)</td><td>足《あし》 が 痛《いた》くて、 立《た》つ こと さえ できません。</td></tr>
<tr><td>こそ</td><td>this one, for sure</td><td>来年《らいねん》 こそ 試験《しけん》 に 合格《ごうかく》 したい です。</td></tr>
<tr><td>ほど / くらい</td><td>about (an amount)</td><td>二週間《にしゅうかん》 ほど 休《やす》みました。</td></tr>
<tr><td>ほど / くらい</td><td>so much that</td><td>声《こえ》 が 出《で》ない くらい 疲《つか》れました。</td></tr>
<tr><td>くらい</td><td>at least (sounds small)</td><td>返事《へんじ》 くらい して ください。</td></tr>
<tr><td>〜ば 〜ほど</td><td>the more, the more</td><td>練習《れんしゅう》 すれば する ほど 上手《じょうず》 に なります。</td></tr>
<tr><td>〜ほど 〜ない</td><td>not as ... as</td><td>今年《ことし》 の 夏《なつ》 は 去年《きょねん》 ほど 暑《あつ》く ありません。</td></tr>
<tr><td>〜始《はじ》める / 〜続《つづ》ける / 〜終《お》わる</td><td>start, keep on, finish</td><td>日記《にっき》 を 書《か》き続《つづ》けて います。</td></tr>
<tr><td>〜出《だ》す</td><td>a sudden start</td><td>赤《あか》ちゃん が 急《きゅう》に 笑《わら》い出《だ》しました。</td></tr>
<tr><td>〜かける / 〜直《なお》す / 〜合《あ》う / 〜切《き》る</td><td>half-done, redo, mutual, fully</td><td>みんな で 意見《いけん》 を 出《だ》し合《あ》いました。</td></tr></table>
<h3>Watch out</h3>
<ul><li>しか needs a negative verb; だけ works with either.</li>
<li>Noun + ばかり is "nothing but"; 〜た ばかり from N4 is "only just".</li>
<li>〜ほど 〜ない always ends negative; a positive comparison uses より.</li>
<li>For a length of time use ぐらい or ほど; ごろ is only for a point in time.</li>
<li>A compound verb uses the ます-stem. For plans and requests use 〜始《はじ》める, not 〜出《だ》す.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>夜中《よなか》 に 目《め》 が 覚《さ》めて、 三時間《さんじかん》 しか 眠《ねむ》れない 日《ひ》 が 一週間《いっしゅうかん》 ほど 続《つづ》いて います。</b><span>For about a week I've woken at night and slept only three hours.</span></div>
<div class="ex"><b>吐《は》き気《け》 が ひどくて、 お茶《ちゃ》 さえ 飲《の》めない ほど でした。</b><span>The nausea was so bad I couldn't even drink tea.</span></div>
<div class="ex"><b>薬《くすり》 を 飲《の》み始《はじ》めて から、 前《まえ》 ほど 不安《ふあん》 に なりません。</b><span>Since I started taking the medicine, I don't get as anxious as before.</span></div>
<div class="ex"><b>歩《ある》けば 歩《ある》く ほど 足《あし》 が 軽《かる》く なって、 結局《けっきょく》 駅《えき》 まで 歩《ある》き続《つづ》けました。</b><span>The more I walked, the lighter my legs felt, and in the end I kept going all the way to the station.</span></div>
<div class="ex"><b>ご家族《かぞく》 と よく 話《はな》し合《あ》う だけ で、 気持《きも》ち が 軽《かる》く なる こと も あります。</b><span>Just talking things over with your family can sometimes lighten how you feel.</span></div>
<div class="note">In a history, しか and さえ show how little someone can manage, and ほど / くらい show how bad it is. しか and 〜ほど 〜ない end negative.</div>`,
    quiz: [
      [`冷蔵庫《れいぞうこ》 に は 卵《たまご》 が 二《ふた》つ ＿ ありません。`, [`だけ`, `しか`, `ばかり`], 1, `With a negative verb and the sense "too few", the word is しか.`],
      [`Which means "I've only just started this job"?`, [`この 仕事《しごと》 ばかり して います。`, `この 仕事《しごと》 を 始《はじ》めた ばかり です。`, `この 仕事《しごと》 しか して いません。`], 1, `〜た ばかり (from N4) is "only just"; noun + ばかり and しか are "nothing but" and "only".`],
      [`痛《いた》み が ひどくて、 座《すわ》る こと ＿ つらい です。 ("Even sitting is hard.")`, [`さえ`, `こそ`, `しか`], 0, `さえ picks out the most basic case: "even"; しか would need a negative verb.`],
      [`「いつも ありがとう ございます。」 「いいえ、 こちら ＿。」`, [`だけ`, `さえ`, `こそ`], 2, `The reply to thanks is こちら こそ, "it is I who should thank you".`],
      [`Which means "This medicine doesn't make me as sleepy as the old one"?`, [`この 薬《くすり》 は 前《まえ》 の 薬《くすり》 ほど 眠《ねむ》く なりません。`, `この 薬《くすり》 は 前《まえ》 の 薬《くすり》 ほど 眠《ねむ》く なります。`, `この 薬《くすり》 は 前《まえ》 の 薬《くすり》 しか 眠《ねむ》く なりません。`], 0, `〜ほど 〜ない always ends negative; a positive ending after ほど is wrong, and しか here makes no sense.`],
      [`忙《いそが》しくて も、 朝《あさ》ごはん ＿ 食《た》べて ください。 ("at least breakfast")`, [`ほど`, `くらい`, `しか`], 1, `Only くらい means "at least"; しか would need a negative verb.`],
      [`運動《うんどう》 は ＿ する ほど、 体《からだ》 が 楽《らく》 に なります。`, [`すれば`, `したら`, `して も`], 0, `〜ば 〜ほど: the ば-form, then the same verb, then ほど.`],
      [`仕事《しごと》 に 行《い》けない ほど 気分《きぶん》 が 落《お》ち込《こ》んで います means:`, [`My mood is so low that I can't go to work.`, `My mood is low, but not as low as at work.`, `I can't go to work, so my mood is a little low.`], 0, `A ほど B: B is so strong that A happens.`],
      [`面白《おもしろ》くて、 一晩《ひとばん》 で 本《ほん》 を 最後《さいご》 まで ＿。`, [`読《よ》み合《あ》いました`, `読《よ》みかけました`, `読《よ》み切《き》りました`], 2, `〜切《き》る means doing something to the very end; 〜かける is only partway.`],
      [`Which sentence is natural?`, [`明日《あした》 から 日記《にっき》 を つけ出《だ》して ください。`, `犬《いぬ》 が 急《きゅう》に 吠《ほ》え出《だ》しました。`, `来週《らいしゅう》 から 散歩《さんぽ》 の 時間《じかん》 を 増《ふ》やし出《だ》しましょう。`], 1, `〜出《だ》す is a sudden start; requests and suggestions take 〜始《はじ》める.`],
      [`何《なに》 か 言《い》いかけて、 やめました means:`, [`I said it all, then left.`, `I said it again, then stopped.`, `I started to say something, then stopped.`], 2, `〜かける is an action begun but not finished.`],
      [`困《こま》った とき は、 家族《かぞく》 で 助《たす》け合《あ》って います means:`, [`When things are hard, I help my family to the very end.`, `When things are hard, my family start to help.`, `When things are hard, my family help one another.`], 2, `〜合《あ》う means doing something to or with each other.`]
    ] },

  { id: 'review-n3-causes', level: 'N3', unit: 'Causes and obligations', review: true, after: 'beki-mono-koto', title: `Review: Causes and obligations`, summary: `Check how to name a cause with ため, おかげ or せい, draw or deny a conclusion with わけ, and give judgements with べき, もの, こと and はず が ない.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/tame-okage-sei">because of and thanks to</a>, <a href="#/lessons/wake">no wonder and no way</a> and <a href="#/lessons/beki-mono-koto">should and cannot be</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>〜ため (に)</td><td>cause, formal</td><td>大雪《おおゆき》 の ため、 バス が 遅《おく》れて います。</td></tr>
<tr><td>〜おかげ で</td><td>thanks to (good result)</td><td>友達《ともだち》 の おかげ で 間《ま》に合《あ》いました。</td></tr>
<tr><td>〜せい で</td><td>the fault of (bad result)</td><td>雨《あめ》 の せい で 服《ふく》 が ぬれました。</td></tr>
<tr><td>〜せい か</td><td>maybe because of</td><td>疲《つか》れ の せい か、 目《め》 が 痛《いた》い です。</td></tr>
<tr><td>〜わけ だ</td><td>no wonder; so that means</td><td>停電《ていでん》 です か。 どうりで 暗《くら》い わけ です。</td></tr>
<tr><td>〜わけ では ない</td><td>it's not that (soft denial)</td><td>料理《りょうり》 が 嫌《きら》い な わけ では ありません。</td></tr>
<tr><td>〜わけ が ない</td><td>no way (strong denial)</td><td>一日《いちにち》 で 覚《おぼ》えられる わけ が ありません。</td></tr>
<tr><td>〜わけ に は いかない</td><td>can't very well</td><td>今《いま》 やめる わけ に は いきません。</td></tr>
<tr><td>〜べき だ</td><td>should (duty, opinion)</td><td>すぐ 謝《あやま》る べき です。</td></tr>
<tr><td>〜もの だ</td><td>that's how things are</td><td>子《こ》ども は すぐ 大《おお》きく なる もの です。</td></tr>
<tr><td>〜た もの だ</td><td>used to (looking back)</td><td>昔《むかし》 は よく 歩《ある》いた もの です。</td></tr>
<tr><td>〜こと だ</td><td>the best thing is (firm advice)</td><td>毎日《まいにち》 練習《れんしゅう》 する こと です。</td></tr>
<tr><td>〜はず が ない</td><td>cannot be (from the facts)</td><td>兄《あに》 は 今《いま》 海外《かいがい》 に います から、 来《く》る はず が ありません。</td></tr></table>
<h3>Watch out</h3>
<ul><li>おかげ for a good result, せい for a bad one, ため for a formal neutral cause; a noun takes の.</li>
<li>わけ では ない softens or corrects; わけ が ない denies strongly.</li>
<li>わけ に は いかない is a social obstacle, not inability.</li>
<li>はず is expectation, べき is duty: never 休《やす》む はず です for "you should rest".</li>
<li>With patients, べき and こと だ sound strong; prefer 〜た ほう が いい と 思《おも》います.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>薬《くすり》 の せい で 眠《ねむ》い わけ では ありません。 夜《よる》 あまり 寝《ね》て いない ん です。</b><span>It's not the medicine making me sleepy. I barely sleep at night.</span></div>
<div class="ex"><b>リハビリ を 続《つづ》けた おかげ で、 また 歩《ある》ける よう に なった わけ です ね。</b><span>So thanks to keeping up rehab, you can walk again.</span></div>
<div class="ex"><b>眠気《ねむけ》 が 出《で》る こと が ある ため、 服用中《ふくようちゅう》 は 運転《うんてん》 を 控《ひか》える こと。</b><span>May cause drowsiness: avoid driving while taking it. (written style)</span></div>
<div class="ex"><b>頼《たの》まれた ので 断《ことわ》る わけ に は いきません が、 本当《ほんとう》 は 休《やす》む べき です。</b><span>I was asked, so I can't very well refuse, but really I ought to rest.</span></div>
<div class="ex"><b>若《わか》い ころ は よく 夜《よる》 遅《おそ》く まで 働《はたら》いた もの です。 年《とし》 を とる と 疲《つか》れやすく なる もの です ね。</b><span>I often worked late when I was young. With age you tire more easily; that's normal.</span></div>
<div class="note">私《わたし》 の せい です and 〜べき です from a patient tell you about guilt and inner rules: reflect them before you reassure. つまり 〜わけ です ね checks what you heard.</div>`,
    quiz: [
      [`渡辺《わたなべ》さん が 声《こえ》 を かけて くれた ＿、 すぐ 助《たす》け を 呼《よ》べました。`, [`せい で`, `おかげ で`, `わけ で`], 1, `A good result, with gratitude, takes おかげ で.`],
      [`大雪《おおゆき》 の ため、 本日《ほんじつ》 の 面会《めんかい》 は 中止《ちゅうし》 です. What does ため do here?`, [`It gives the reason, formally and neutrally.`, `It gives a purpose: "in order to".`, `It blames someone for the result.`], 0, `Noun + の ため in a notice states a cause neutrally.`],
      [`Which is correct for "Because of the heat, I couldn't sleep"?`, [`暑《あつ》さ な せい で、 眠《ねむ》れません でした。`, `暑《あつ》さ の せい で、 眠《ねむ》れません でした。`, `暑《あつ》さ せい で、 眠《ねむ》れません でした。`], 1, `せい is a noun, so a noun before it takes の: 暑《あつ》さ の せい で.`],
      [`「父《ちち》 は 昔《むかし》 料理人《りょうりにん》 でした。」 「それ で 料理《りょうり》 が 上手《じょうず》 な ＿ です ね。」`, [`べき`, `こと`, `わけ`], 2, `わけ です here means "so that explains it": the skill follows from the facts.`],
      [`Which means "It's not that I don't want to get better"?`, [`治《なお》りたくない わけ では ありません。`, `治《なお》りたくない わけ が ありません。`, `治《なお》りたくない わけ に は いきません。`], 0, `わけ では ない corrects a possible conclusion; わけ が ない would be a strong "no way".`],
      [`上司《じょうし》 が まだ 働《はたら》いて いる ので、 先《さき》 に 帰《かえ》る わけ に は いきません means:`, [`My boss is still working, so I should go home first.`, `My boss is still working, so I can't very well go home before him.`, `My boss is still working, so I am unable to find my way home.`], 1, `わけ に は いかない is a "can't" for social reasons.`],
      [`人《ひと》 に 迷惑《めいわく》 を かけたら、 きちんと 謝《あやま》る ＿ です。`, [`べき`, `せい`, `おかげ`], 0, `A duty in the speaker's opinion is べき; せい and おかげ name a cause, not a duty.`],
      [`誰《だれ》 でも 最初《さいしょ》 は 緊張《きんちょう》 する もの です means:`, [`Everyone is nervous at first; that's normal.`, `Everyone ought to be nervous at first.`, `I used to be nervous at first.`], 0, `Dictionary form + もの です states how things generally are.`],
      [`Which sentence looks back on a past habit?`, [`学生《がくせい》 は よく 図書館《としょかん》 に 通《かよ》う もの です。`, `学生《がくせい》 の ころ は よく 図書館《としょかん》 に 通《かよ》った もの です。`, `学生《がくせい》 は よく 図書館《としょかん》 に 通《かよ》う べき です。`], 1, `た-form + もの です is "used to"; the dictionary form + もの です is a general truth.`],
      [`早《はや》く 治《なお》したい なら、 よく 寝《ね》る こと です means:`, [`I used to sleep well when I wanted to get better.`, `If you want to get better soon, it's not that you sleep well.`, `If you want to get better soon, the best thing is to sleep well.`], 2, `Dictionary form + こと です gives direct advice.`],
      [`昨日《きのう》 退院《たいいん》 した 吉田《よしだ》さん が、 今日《きょう》 病棟《びょうとう》 に いる ＿。 ("It can't be her: the facts rule it out.")`, [`べき では ありません`, `わけ に は いきません`, `はず が ありません`], 2, `Given the facts, it cannot be so: はず が ありません.`],
      [`A patient says 母親《ははおや》 なら もっと 頑張《がんば》る べき です. Which reply explores this?`, [`そう です ね、 もっと 頑張《がんば》る べき です。`, `頑張《がんば》る わけ が ありません。`, `そう 思《おも》う よう に なった の は、 いつ ごろ から です か。`], 2, `Asking where the rule comes from explores it without arguing or agreeing.`]
    ] },

  { id: 'review-n3-conditions', level: 'N3', unit: 'Conditions and relations', review: true, after: 'compound-particles-2', title: `Review: Conditions and relations`, summary: `Check なら, regrets, wishes and suppositions, and choose the right compound particle for about, toward, for, by, according to, as, compared with, instead of, through and over.`, draft: true,
    body: `<p>This review gathers <a href="#/lessons/hypotheticals">supposing and wishes</a>, <a href="#/lessons/compound-particles-1">about, toward, for</a> and <a href="#/lessons/compound-particles-2">as, compared with</a>.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>なら</td><td>if (as you say)</td><td>京都《きょうと》 に 行《い》く なら、 秋《あき》 が いい です よ。</td></tr>
<tr><td>〜ば よかった / 〜たら いい のに</td><td>regret; wish</td><td>傘《かさ》 を 持《も》って くれば よかった。</td></tr>
<tr><td>〜と したら</td><td>supposing</td><td>もし 一週間《いっしゅうかん》 休《やす》める と したら、 何《なに》 を します か。</td></tr>
<tr><td>〜さえ 〜ば</td><td>as long as</td><td>地図《ちず》 さえ あれば、 一人《ひとり》 で 行《い》けます。</td></tr>
<tr><td>に ついて / に 関《かん》して</td><td>about / concerning (formal)</td><td>町《まち》 の 歴史《れきし》 に ついて 調《しら》べます。</td></tr>
<tr><td>に 対《たい》して</td><td>directed at</td><td>父《ちち》 は 子《こ》ども に 対《たい》して 厳《きび》しい です。</td></tr>
<tr><td>に とって</td><td>for (whose view) + judgement</td><td>祖父《そふ》 に とって、 スマホ は 難《むずか》しい です。</td></tr>
<tr><td>に よって</td><td>depending on; by</td><td>店《みせ》 に よって 値段《ねだん》 が 違《ちが》います。</td></tr>
<tr><td>に よる と</td><td>according to</td><td>予報《よほう》 に よる と、 明日《あした》 は 雪《ゆき》 だ そう です。</td></tr>
<tr><td>と して</td><td>as (a role)</td><td>通訳《つうやく》 と して 会議《かいぎ》 に 出《で》ました。</td></tr>
<tr><td>に 比《くら》べて</td><td>compared with</td><td>今日《きょう》 は 昨日《きのう》 に 比《くら》べて 暖《あたた》かい です。</td></tr>
<tr><td>代《か》わり に / に 加《くわ》えて</td><td>instead of / in addition to</td><td>肉《にく》 の 代《か》わり に 魚《さかな》 を 使《つか》います。</td></tr>
<tr><td>を 通《つう》じて / を 通《とお》して</td><td>through; throughout</td><td>友人《ゆうじん》 を 通《とお》して 知《し》り合《あ》いました。</td></tr>
<tr><td>に わたって</td><td>over a long span</td><td>工事《こうじ》 は 二年《にねん》 に わたって 続《つづ》きました。</td></tr></table>
<h3>Watch out</h3>
<ul><li>と して is "as"; と したら is "supposing".</li>
<li>に とって needs a judgement after it; for someone's benefit is の ため に.</li>
<li>に よって is "depending on, by"; に よる と is "according to" and ends in a hearsay form.</li>
<li>と したら is for imagined cases; a real instruction takes たら.</li>
<li>代《か》わり に needs の after a noun; に わたって is not for short spans.</li></ul>
<h3>Mixed examples</h3>
<div class="ex"><b>もし 入院《にゅういん》 する と したら、 ご家族《かぞく》 に とって 一番《いちばん》 心配《しんぱい》 な こと は 何《なん》 です か。</b><span>If you were admitted, what would worry your family most?</span></div>
<div class="ex"><b>紹介状《しょうかいじょう》 に よる と、 不眠《ふみん》 に 加《くわ》えて、 半年《はんとし》 に わたって 頭痛《ずつう》 が 続《つづ》いて いる そう です。</b><span>Per the referral: insomnia, plus headaches for six months.</span></div>
<div class="ex"><b>担当医《たんとうい》 と して は、 前回《ぜんかい》 に 比《くら》べて ずいぶん 落《お》ち着《つ》いて いらっしゃる と 思《おも》います。</b><span>As your doctor, I think you seem much calmer than last time.</span></div>
<div class="ex"><b>副作用《ふくさよう》 に ついて 心配《しんぱい》 な こと が ある なら、 一緒《いっしょ》 に 確認《かくにん》 しましょう。</b><span>If side effects worry you, let's check them together.</span></div>
<div class="ex"><b>父《ちち》 に 対《たい》して もっと 優《やさ》しく すれば よかった。</b><span>I wish I had been kinder to my father.</span></div>
<div class="note">Follow up regrets and wishes gently. Letters and handovers lean on に よる と, に 加《くわ》えて and に わたって.</div>`,
    quiz: [
      [`「来週《らいしゅう》、 大阪《おおさか》 に 行《い》きます。」 「大阪《おおさか》 ＿、 おいしい お好《この》み焼《や》き の 店《みせ》 を 知《し》って います よ。」`, [`なら`, `と したら`, `に とって`], 0, `なら takes up what the other person just said.`],
      [`Which means "I wish I hadn't said that"?`, [`あんな こと を 言《い》えば よかった。`, `あんな こと を 言《い》わなければ よかった。`, `あんな こと を 言《い》う なら よかった。`], 1, `Regret for something done is 〜なければ よかった; 言《い》えば よかった regrets not saying it.`],
      [`私《わたし》 は ボランティア ＿ この 病院《びょういん》 に 来《き》て います。`, [`と したら`, `と して`, `に とって`], 1, `A role is と して; と したら means "supposing".`],
      [`住所《じゅうしょ》 さえ わかれば、 地図《ちず》 で 探《さが》せます means:`, [`As long as I know the address, I can find it on a map.`, `Even if I know the address, I can't find it on a map.`, `Instead of the address, I'll look at the map.`], 0, `〜さえ 〜ば means "as long as": the one thing needed.`],
      [`この 仕事《しごと》 は 私《わたし》 ＿ とても 大切《たいせつ》 です。`, [`に 対《たい》して`, `の ため に`, `に とって`], 2, `A judgement from someone's point of view takes に とって.`],
      [`ご家族《かぞく》 ＿、 夜《よる》 は ほとんど 眠《ねむ》って いない そう です。`, [`に よる と`, `に よって`, `に 比《くら》べて`], 0, `The source of information is に よる と, and the sentence ends in そう です.`],
      [`人《ひと》 に よって、 薬《くすり》 の 効《き》き方《かた》 は 違《ちが》います means:`, [`According to people, the medicine works differently.`, `The medicine works through other people.`, `How the medicine works differs from person to person.`], 2, `に よって + 違《ちが》う means "differs depending on".`],
      [`患者《かんじゃ》さん は 治療《ちりょう》 ＿ 不安《ふあん》 を 感《かん》じて います。`, [`に 対《たい》して`, `に とって`, `と して`], 0, `A feeling directed at something takes に 対《たい》して.`],
      [`頭痛《ずつう》 ＿、 吐《は》き気《け》 も あります か。`, [`の 代《か》わり に`, `に 加《くわ》えて`, `に わたって`], 1, `Adding one more symptom, with も, is に 加《くわ》えて.`],
      [`一年《いちねん》 を 通《つう》じて 観光客《かんこうきゃく》 が 多《おお》い 町《まち》 です means:`, [`It's a town that tourists pass through in a year.`, `It's a town with more tourists than last year.`, `It's a town with many tourists all year round.`], 2, `With a period of time, を 通《つう》じて means "throughout".`],
      [`去年《きょねん》 ＿、 今年《ことし》 は 雨《あめ》 が 少《すく》ない です。`, [`に 加《くわ》えて`, `に わたって`, `に 比《くら》べて`], 2, `"Compared with" is に 比《くら》べて.`],
      [`Which is natural for "If the pain gets worse, please call us"?`, [`痛《いた》み が 強《つよ》く なる と したら、 電話《でんわ》 して ください。`, `痛《いた》み が 強《つよ》く なったら、 電話《でんわ》 して ください。`, `痛《いた》み が 強《つよ》く なる に よって、 電話《でんわ》 して ください。`], 1, `A real instruction takes たら; と したら is for imagined cases.`]
    ] }
);
