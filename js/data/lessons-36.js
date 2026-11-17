/* Lessons part 36 (0.24.0): N5, unit "Picture lessons: places and bodies" (after review-n5-adjectives): position-words, body-itai, wa-ga-describing, counters-pictures, review-n5-pictures1.
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md (furigana on every kanji run,
   one space between words, particles separate).
   Shape (as every lessons file): { id, level:'N5'|'N4', unit, title, summary, draft:true, body:HTML, quiz:[[q, [3 opts], idx, why]] }
   plus `after: '<lesson id>'` on EVERY lesson (the first lesson after review-n5-adjectives, each next one after the lesson before it) and
   `review: true` on the unit review (quiz of exactly 12; others 5 to 7). Examples: <div class="ex"><b>JA</b><span>EN</span></div>.
   A picture in the body: <div class="pic-embed" data-pic="<picture set id>"></div> (the app mounts the tap-to-learn picture).
   Ids are permanent: append only after release (never insert, reorder or delete). */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

  /* ============ Unit: Picture lessons: places and bodies ============ */
  { id: 'position-words', level: 'N5', unit: 'Picture lessons: places and bodies', after: 'review-n5-adjectives', title: `上《うえ》, 下《した》, 中《なか》, 前《まえ》, 後《うし》ろ, 隣《となり》: saying where things are`, summary: `Say where a thing or a person is with a position word, の and に あります / います.`, draft: true,
    body: `<p>"Where are my glasses?" "The toilet is next to the lift." "The doctor is in the consulting room." On the ward and at home you will ask and answer where things are all day. Japanese does this with a short pattern you can build from what you know: a place noun, の, a position word, then に あります or に います (see <a href="#/lessons/arimasu-imasu">あります and います</a>).</p>
<div class="pic-embed" data-pic="positions"></div>
<p>Look at the picture and tap each pin. Each position word is a noun: it names a part of the space around something, "the top of", "the inside of", "the front of".</p>
<h3>The position words</h3>
<table><tr><th>Word</th><th>Meaning</th><th>Example</th></tr>
<tr><td>上《うえ》</td><td>on, above</td><td>机《つくえ》 の 上《うえ》 on the desk</td></tr>
<tr><td>下《した》</td><td>under, below</td><td>ベッド の 下《した》 under the bed</td></tr>
<tr><td>中《なか》</td><td>in, inside</td><td>かばん の 中《なか》 in the bag</td></tr>
<tr><td>外《そと》</td><td>outside</td><td>部屋《へや》 の 外《そと》 outside the room</td></tr>
<tr><td>前《まえ》</td><td>in front of</td><td>駅《えき》 の 前《まえ》 in front of the station</td></tr>
<tr><td>後《うし》ろ</td><td>behind</td><td>ドア の 後《うし》ろ behind the door</td></tr>
<tr><td>隣《となり》</td><td>next to (side by side)</td><td>受付《うけつけ》 の 隣《となり》 next to reception</td></tr>
<tr><td>横《よこ》</td><td>beside, at the side of</td><td>ベッド の 横《よこ》 beside the bed</td></tr>
<tr><td>そば</td><td>near, close by</td><td>窓《まど》 の そば near the window</td></tr>
<tr><td>右《みぎ》 / 左《ひだり》</td><td>right / left</td><td>エレベーター の 右《みぎ》 to the right of the lift</td></tr>
<tr><td>A と B の 間《あいだ》</td><td>between A and B</td><td>銀行《ぎんこう》 と 駅《えき》 の 間《あいだ》 between the bank and the station</td></tr></table>
<p>The order is the reverse of English: the thing you measure from comes first, then の, then the position word. 机《つくえ》 の 上《うえ》 is literally "the desk's top".</p>
<h3>Pattern 1: 〜は X の 上《うえ》 に あります (where is it?)</h3>
<p>When you already know what you are talking about and want to say where it is, make it the topic with は. Use あります for things and います for people and animals.</p>
<div class="ex"><b>本《ほん》 は 机《つくえ》 の 上《うえ》 に あります。</b><span>The book is on the desk.</span></div>
<div class="ex"><b>猫《ねこ》 は テーブル の 下《した》 に います。</b><span>The cat is under the table.</span></div>
<div class="ex"><b>薬局《やっきょく》 は 受付《うけつけ》 の 隣《となり》 に あります。</b><span>The pharmacy is next to reception.</span></div>
<div class="ex"><b>先生《せんせい》 は 診察室《しんさつしつ》 の 中《なか》 に います。</b><span>The doctor is in the consulting room.</span></div>
<p>In a short answer you can drop に あります and say です: 「トイレ は どこ です か。」「階段《かいだん》 の 後《うし》ろ です。」 "Where is the toilet?" "Behind the stairs."</p>
<h3>Pattern 2: X の 中《なか》 に 〜が あります (what is there?)</h3>
<p>When you describe a place and say what is in it, start with the place and mark the new thing with が.</p>
<div class="ex"><b>かばん の 中《なか》 に 財布《さいふ》 が あります。</b><span>There is a wallet in the bag.</span></div>
<div class="ex"><b>病院《びょういん》 の 前《まえ》 に バス停《てい》 が あります。</b><span>There is a bus stop in front of the hospital.</span></div>
<div class="ex"><b>家《いえ》 の 後《うし》ろ に 山《やま》 が あります。</b><span>There is a mountain behind the house.</span></div>
<div class="ex"><b>机《つくえ》 の 上《うえ》 に 何《なに》 が あります か。</b><span>What is on the desk?</span></div>
<h3>間《あいだ》, そば and 隣《となり》</h3>
<p>間《あいだ》 needs two things joined with と. そば means "near, by", without saying which side. 隣《となり》 is "next to", most natural for two things in a row, often of the same kind (the next house, the next seat, the next bed, the shop next to the bank). 横《よこ》 is "at the side of" and works for anything; for a small object beside something, such as glasses beside the bed, 横《よこ》 often sounds more natural.</p>
<div class="ex"><b>トイレ は エレベーター と 階段《かいだん》 の 間《あいだ》 に あります。</b><span>The toilet is between the lift and the stairs.</span></div>
<div class="ex"><b>駅《えき》 の そば に 銀行《ぎんこう》 が あります。</b><span>There is a bank near the station.</span></div>
<div class="ex"><b>眼鏡《めがね》 は ベッド の 横《よこ》 に あります。</b><span>Your glasses are beside the bed.</span></div>
<h3>At home and on the ward</h3>
<div class="pic-embed" data-pic="living-room"></div>
<p>Look at the living room in the picture and try to say where three things are. Then compare with these lines you might use with a patient on the ward.</p>
<div class="ex"><b>ナースコール は 枕《まくら》 の 横《よこ》 に あります。</b><span>The nurse call button is beside your pillow.</span></div>
<div class="ex"><b>ご家族《かぞく》 は 部屋《へや》 の 外《そと》 に います。</b><span>Your family is outside the room.</span></div>
<div class="ex"><b>洗面所《せんめんじょ》 は 病室《びょうしつ》 の 前《まえ》 に あります。</b><span>The washroom is in front of your room.</span></div>
<div class="note"><b>Watch out:</b> keep the order "thing の position": テーブル の 上《うえ》 "on the table". 上《うえ》 の テーブル means "the table above, the upstairs table". Also, "behind" in space is 後《うし》ろ; 後《あと》 means "after" in time. And use います, not あります, for people and animals: 猫《ねこ》 は 箱《はこ》 の 中《なか》 に います。</div>
<div class="note">Remember: place の position word に あります / います. Put the known thing first with は to say where it is; put the place first and the new thing with が to say what is there.</div>`,
    quiz: [
      ["\"The cat is under the desk.\"", [`猫《ねこ》 は 机《つくえ》 の 下《した》 に います。`, `猫《ねこ》 は 下《した》 の 机《つくえ》 に います。`, `猫《ねこ》 は 机《つくえ》 の 下《した》 に あります。`], 0, "The desk comes first, then の 下《した》, and a cat takes います."],
      [`銀行《ぎんこう》 と 郵便局《ゆうびんきょく》 の ＿ に カフェ が あります。 "There is a café between the bank and the post office."`, [`前《まえ》`, `間《あいだ》`, `中《なか》`], 1, "\"Between A and B\" is A と B の 間《あいだ》."],
      [`What does 駅《えき》 の そば mean?`, ["inside the station", "behind the station", "near the station"], 2, "そば means near or close by."],
      [`財布《さいふ》 は かばん ＿ 中《なか》 に あります。`, [`の`, `が`, `を`], 0, "The place and the position word are joined with の."],
      [`Which is a natural answer to トイレ は どこ です か。`, [`トイレ は 階段《かいだん》 の 後《うし》ろ を あります。`, `階段《かいだん》 の 後《うし》ろ です。`, `階段《かいだん》 は 後《うし》ろ の トイレ です。`], 1, "A short answer gives the place and です; the others have the wrong particle or a different meaning."],
      ["\"There is a park behind the hospital.\"", [`病院《びょういん》 の 前《まえ》 に 公園《こうえん》 が あります。`, `病院《びょういん》 の 後《あと》 に 公園《こうえん》 が あります。`, `病院《びょういん》 の 後《うし》ろ に 公園《こうえん》 が あります。`], 2, "Behind in space is 後《うし》ろ; 前《まえ》 is in front, and 後《あと》 is after in time."]
    ] },

  { id: 'body-itai', level: 'N5', unit: 'Picture lessons: places and bodies', after: 'position-words', title: `どこ が 痛《いた》い です か: body words with 痛《いた》い, かゆい, 重《おも》い`, summary: `Name the parts of the body and say or ask where it hurts, itches or feels heavy.`, draft: true,
    body: `<p>"Where does it hurt?" is one of the first questions in any consultation, and many patients with low mood or anxiety first come with a body complaint: a headache, a heavy body, a stomach ache. In Japanese the pattern is short: body part が 痛《いた》い です. 痛《いた》い (painful), かゆい (itchy) and 重《おも》い (heavy) are all い-adjectives, so you already know how to make their negative and past (see <a href="#/lessons/i-adjectives">い-adjectives</a>).</p>
<div class="pic-embed" data-pic="body-front"></div>
<h3>Body words</h3>
<p>Tap the pins in the picture and say each word aloud. These are the ones patients use most; 背中《せなか》 (back) is in the picture of the back of the body.</p>
<table><tr><th>Word</th><th>Meaning</th><th>Word</th><th>Meaning</th></tr>
<tr><td>頭《あたま》</td><td>head</td><td>胸《むね》</td><td>chest</td></tr>
<tr><td>顔《かお》</td><td>face</td><td>お腹《なか》</td><td>stomach, belly</td></tr>
<tr><td>首《くび》</td><td>neck</td><td>背中《せなか》</td><td>back</td></tr>
<tr><td>肩《かた》</td><td>shoulder</td><td>腕《うで》</td><td>arm</td></tr>
<tr><td>手《て》</td><td>hand</td><td>足《あし》</td><td>leg, foot</td></tr></table>
<div class="pic-embed" data-pic="face"></div>
<p>On the face: 目《め》 eye, 耳《みみ》 ear, 鼻《はな》 nose, 口《くち》 mouth, 歯《は》 tooth, のど throat.</p>
<h3>How to make it</h3>
<p>The body part is marked with <b>が</b>, and the adjective comes last. You do not need 私《わたし》 の: 頭《あたま》 が 痛《いた》い です already means "I have a headache".</p>
<table><tr><th></th><th>now</th><th>now, not</th><th>past</th><th>past, not</th></tr>
<tr><td>痛《いた》い</td><td>痛《いた》い です</td><td>痛《いた》くない です</td><td>痛《いた》かった です</td><td>痛《いた》くなかった です</td></tr>
<tr><td>かゆい</td><td>かゆい です</td><td>かゆくない です</td><td>かゆかった です</td><td>かゆくなかった です</td></tr>
<tr><td>重《おも》い</td><td>重《おも》い です</td><td>重《おも》くない です</td><td>重《おも》かった です</td><td>重《おも》くなかった です</td></tr></table>
<h3>痛《いた》い: it hurts</h3>
<div class="ex"><b>頭《あたま》 が 痛《いた》い です。</b><span>I have a headache.</span></div>
<div class="ex"><b>お腹《なか》 が 少《すこ》し 痛《いた》い です。</b><span>My stomach hurts a little.</span></div>
<div class="ex"><b>昨日《きのう》 は 歯《は》 が 痛《いた》かった です。</b><span>Yesterday I had toothache.</span></div>
<div class="ex"><b>今日《きょう》 は 足《あし》 が 痛《いた》くない です。</b><span>Today my leg doesn't hurt.</span></div>
<h3>かゆい and 重《おも》い</h3>
<p>かゆい is "itchy". 重《おも》い is "heavy"; with the head, shoulders, legs or the whole body it describes a dull, heavy, tired feeling, a common complaint in depression and poor sleep.</p>
<div class="ex"><b>目《め》 が かゆい です。</b><span>My eyes are itchy.</span></div>
<div class="ex"><b>腕《うで》 が とても かゆい です。</b><span>My arm is very itchy.</span></div>
<div class="ex"><b>朝《あさ》 は 頭《あたま》 が 重《おも》い です。</b><span>In the mornings my head feels heavy.</span></div>
<div class="ex"><b>最近《さいきん》 体《からだ》 が 重《おも》い です。</b><span>Lately my whole body feels heavy.</span></div>
<h3>Asking where: どこ が, ここ, この 辺《へん》</h3>
<p>The question word どこ takes が, never は. Patients often answer by pointing: ここ "here", or この 辺《へん》 "around here", when the pain is not in one exact spot. When you press a spot and ask "what about here?", は is natural, because you are comparing this spot with others.</p>
<div class="ex"><b>「どこ が 痛《いた》い です か。」「ここ が 痛《いた》い です。」</b><span>"Where does it hurt?" "It hurts here."</span></div>
<div class="ex"><b>背中《せなか》 の この 辺《へん》 が 痛《いた》い です。</b><span>It hurts around here on my back.</span></div>
<div class="ex"><b>ここ は どう です か。 痛《いた》い です か。</b><span>What about here? Does it hurt?</span></div>
<div class="ex"><b>右《みぎ》 と 左《ひだり》、 どちら が 痛《いた》い です か。</b><span>Which hurts, the right or the left?</span></div>
<div class="ex"><b>いつ から 痛《いた》い です か。</b><span>Since when has it hurt?</span></div>
<div class="note"><b>Watch out:</b> 痛《いた》い is an adjective, not a verb. Say 痛《いた》い です and 痛《いた》かった です; 痛《いた》います and 痛《いた》い でした are wrong. Mark the body part with が, not を: 頭《あたま》 が 痛《いた》い です, not 頭《あたま》 を 痛《いた》い です. And the question is どこ が, not どこ は.</div>
<div class="note">Remember: body part が 痛《いた》い / かゆい / 重《おも》い です. Doctors write words like 頭痛《ずつう》 (headache) in notes, but patients almost always say it with this pattern, so this is what you will hear.</div>`,
    quiz: [
      [`頭《あたま》 ＿ 痛《いた》い です。`, [`が`, `を`, `に`], 0, "The body part that hurts is marked with が."],
      ["\"Where does it hurt?\"", [`どこ は 痛《いた》い です か。`, `どこ が 痛《いた》い です か。`, `どこ に 痛《いた》い です か。`], 1, "A question word like どこ takes が, never は."],
      ["\"My eyes are itchy.\"", [`目《め》 が 重《おも》い です。`, `目《め》 が 痛《いた》い です。`, `目《め》 が かゆい です。`], 2, "かゆい means itchy; 痛《いた》い is painful and 重《おも》い is heavy."],
      ["\"Yesterday my tooth hurt.\"", [`昨日《きのう》 は 歯《は》 が 痛《いた》かった です。`, `昨日《きのう》 は 歯《は》 が 痛《いた》い でした。`, `昨日《きのう》 は 歯《は》 が 痛《いた》いました。`], 0, "痛《いた》い is an い-adjective: its past is 痛《いた》かった です."],
      [`A patient points and says この 辺《へん》 が 痛《いた》い です。 What does she mean?`, ["It hurts all over.", "It hurts around here.", "It doesn't hurt here."], 1, "この 辺《へん》 means around here, the area she is pointing to."],
      ["Which word means \"shoulder\"?", [`首《くび》`, `胸《むね》`, `肩《かた》`], 2, "肩《かた》 is shoulder; 首《くび》 is neck and 胸《むね》 is chest."]
    ] },

  { id: 'wa-ga-describing', level: 'N5', unit: 'Picture lessons: places and bodies', after: 'body-itai', title: `象《ぞう》 は 鼻《はな》 が 長《なが》い: describing with 〜は 〜が + adjective`, summary: `Describe a person, an animal or a place by one of its parts or features with 〜は 〜が and an adjective.`, draft: true,
    body: `<p>"Elephants have long trunks." "My brother is tall." "My grandfather is hard of hearing." English uses "have" or a special adjective; Japanese uses one very common pattern: the whole thing は, the part or feature が, then an adjective. You will use it to describe family members, to note a patient's hearing or eyesight, and to talk about places. It builds on <a href="#/lessons/wa-vs-ga">は and が</a> and on the adjectives you know.</p>
<div class="pic-embed" data-pic="animal-parts"></div>
<p>Look at the dog and the bird in the picture. Each part (tail, ear, wing, beak) can be the が word in this pattern.</p>
<h3>How to make it</h3>
<p>Whole は + part が + adjective です. The は word is what the sentence is about; the が word is the part you describe.</p>
<table><tr><th>Adjective</th><th>Pattern</th><th>Example</th></tr>
<tr><td>い-adjective</td><td>A は B が 長《なが》い です</td><td>象《ぞう》 は 鼻《はな》 が 長《なが》い です。</td></tr>
<tr><td>い-adjective, negative</td><td>A は B が 長《なが》くない です</td><td>この 犬《いぬ》 は しっぽ が 長《なが》くない です。</td></tr>
<tr><td>な-adjective</td><td>A は B が きれい です</td><td>姉《あね》 は 字《じ》 が きれい です。</td></tr>
<tr><td>な-adjective, negative</td><td>A は B が 静《しず》か では ありません</td><td>この 町《まち》 は 夜《よる》 が 静《しず》か では ありません。</td></tr></table>
<h3>Animals and people</h3>
<div class="ex"><b>象《ぞう》 は 鼻《はな》 が 長《なが》い です。</b><span>Elephants have long trunks.</span></div>
<div class="ex"><b>うさぎ は 耳《みみ》 が 長《なが》い です。</b><span>Rabbits have long ears.</span></div>
<div class="ex"><b>キリン は 首《くび》 が とても 長《なが》い です。</b><span>Giraffes have very long necks.</span></div>
<div class="ex"><b>兄《あに》 は 背《せ》 が 高《たか》い です。</b><span>My older brother is tall.</span></div>
<div class="ex"><b>妹《いもうと》 は 髪《かみ》 が 長《なが》い です。</b><span>My younger sister has long hair.</span></div>
<p>Note the fixed pairs: height is 背《せ》 が 高《たか》い "tall" (not 長《なが》い); hair is 髪《かみ》 が 長《なが》い / 短《みじか》い.</p>
<h3>Places</h3>
<div class="ex"><b>東京《とうきょう》 は 人《ひと》 が 多《おお》い です。</b><span>Tokyo has a lot of people.</span></div>
<div class="ex"><b>この 病院《びょういん》 は 庭《にわ》 が きれい です。</b><span>This hospital has a lovely garden.</span></div>
<h3>Describing patients and family</h3>
<p>The same pattern gives many everyday health descriptions. 目《め》 が 悪《わる》い is "has poor eyesight", 耳《みみ》 が 遠《とお》い "is hard of hearing", 足《あし》 が 悪《わる》い "has bad legs, has trouble walking". They are polite, ordinary ways to say it.</p>
<div class="ex"><b>祖父《そふ》 は 耳《みみ》 が 遠《とお》い です。</b><span>My grandfather is hard of hearing.</span></div>
<div class="ex"><b>父《ちち》 は 目《め》 が 悪《わる》い です。</b><span>My father has poor eyesight.</span></div>
<div class="ex"><b>母《はは》 は 足《あし》 が 悪《わる》い です。</b><span>My mother has trouble with her legs.</span></div>
<div class="ex"><b>この 患者《かんじゃ》さん は 熱《ねつ》 が 高《たか》い です。</b><span>This patient has a high fever.</span></div>
<div class="ex"><b>鈴木《すずき》さん は 今日《きょう》 顔色《かおいろ》 が 悪《わる》い です ね。</b><span>Suzuki-san looks pale today, doesn't he. (顔色《かおいろ》: the colour of the face)</span></div>
<div class="ex"><b>お父《とう》さん は 目《め》 が いい です か。</b><span>Does your father have good eyesight?</span></div>
<h3>〜は 〜が or 〜の 〜は?</h3>
<p>象《ぞう》 の 鼻《はな》 は 長《なが》い です "The elephant's trunk is long" states the same fact, but it is a sentence about the trunk. 象《ぞう》 は 鼻《はな》 が 長《なが》い です is about the elephant: it describes what kind of animal it is. For describing a person, an animal or a place, 〜は 〜が is the usual choice. The body-itai pattern you just learned is the same structure: (私《わたし》 は) 頭《あたま》 が 痛《いた》い です.</p>
<div class="note"><b>Watch out:</b> do not use は twice. 象《ぞう》 は 鼻《はな》 は 長《なが》い です sounds like a contrast ("its trunk, at least, is long"). Do not use を: the adjective describes the part, so it is 鼻《はな》 が. And use the right adjective for the part: 背《せ》 が 高《たか》い, 人《ひと》 が 多《おお》い (not 人《ひと》 が たくさん です).</div>
<div class="note">Remember: whole は, part が, adjective です. It describes the whole by one of its features.</div>`,
    quiz: [
      [`象《ぞう》 は 鼻《はな》 ＿ 長《なが》い です。`, [`が`, `を`, `の`], 0, "The part being described is marked with が."],
      ["\"My older brother is tall.\"", [`兄《あに》 は 背《せ》 が 長《なが》い です。`, `兄《あに》 は 背《せ》 が 高《たか》い です。`, `兄《あに》 は 背《せ》 を 高《たか》い です。`], 1, "Height is 背《せ》 が 高《たか》い; 長《なが》い is not used for height, and を is wrong."],
      [`What does 祖母《そぼ》 は 耳《みみ》 が 遠《とお》い です。 mean?`, ["My grandmother lives far away.", "My grandmother has big ears.", "My grandmother is hard of hearing."], 2, "耳《みみ》 が 遠《とお》い is the usual way to say someone is hard of hearing."],
      ["\"Tokyo has a lot of people.\"", [`東京《とうきょう》 は 人《ひと》 が 多《おお》い です。`, `東京《とうきょう》 が 人《ひと》 は 多《おお》い です。`, `東京《とうきょう》 は 人《ひと》 を 多《おお》い です。`], 0, "The whole (Tokyo) takes は and the feature (people) takes が."],
      ["\"This room has small windows.\"", [`この 部屋《へや》 は 窓《まど》 が 小《ちい》さい な です。`, `この 部屋《へや》 は 窓《まど》 が 小《ちい》さい です。`, `この 部屋《へや》 が 窓《まど》 を 小《ちい》さい です。`], 1, "小《ちい》さい is an い-adjective, so no な, and the pattern is は … が."],
      [`妹《いもうと》 は 髪《かみ》 が ＿ です。 "My younger sister has beautiful hair."`, [`きれい な`, `きれいい`, `きれい`], 2, "Before です a な-adjective stands alone, without な."]
    ] },

  { id: 'counters-pictures', level: 'N5', unit: 'Picture lessons: places and bodies', after: 'wa-ga-describing', title: `匹《ひき》, 頭《とう》, 羽《わ》, 台《だい》, 冊《さつ》, 個《こ》, 軒《けん》: which counter for which thing`, summary: `Choose the right counter for animals, machines, books, small objects and buildings, and read the sound changes.`, draft: true,
    body: `<p>In <a href="#/lessons/counters">Counting things, people and doses</a> you learned that Japanese counts with a counter, and you met 人《にん》, 回《かい》, 錠《じょう》, 本《ほん》, 枚《まい》 and 杯《はい》. This lesson adds the counters for the things in the picture sets: animals, cars and machines, books, small objects and buildings. You will need them to ask about pets at home, to count wheelchairs or beds on a ward, or to buy eggs.</p>
<div class="pic-embed" data-pic="pets-farm"></div>
<h3>Which counter?</h3>
<table><tr><th>Counter</th><th>For</th><th>Things</th></tr>
<tr><td>匹《ひき》</td><td>small animals</td><td>cats, dogs, fish, insects</td></tr>
<tr><td>頭《とう》</td><td>large animals</td><td>cows, horses, elephants</td></tr>
<tr><td>羽《わ》</td><td>birds</td><td>birds, chickens</td></tr>
<tr><td>台《だい》</td><td>machines and vehicles</td><td>cars, bicycles, computers, beds, wheelchairs</td></tr>
<tr><td>本《ほん》</td><td>long, thin things</td><td>pens, bottles, umbrellas, thermometers</td></tr>
<tr><td>枚《まい》</td><td>flat things</td><td>paper, towels, shirts, plates</td></tr>
<tr><td>冊《さつ》</td><td>bound things</td><td>books, notebooks, magazines</td></tr>
<tr><td>杯《はい》</td><td>cupfuls</td><td>cups of tea, glasses of water, bowls of rice</td></tr>
<tr><td>個《こ》</td><td>small solid things</td><td>eggs, apples, boxes, sweets</td></tr>
<tr><td>軒《けん》</td><td>buildings</td><td>houses, shops, pharmacies</td></tr></table>
<p>For a pet dog or cat, 匹《ひき》 is the everyday counter. For things that have no clear counter, the native series 一《ひと》つ, 二《ふた》つ is always safe, but not for people or animals.</p>
<h3>Numbers and sound changes</h3>
<p>Some numbers change their sound, and some counters change their first sound. Learn the 1, 3, 6, 8 and 10 forms and the question word.</p>
<table><tr><th>Counter</th><th>1</th><th>3</th><th>6</th><th>8</th><th>10</th><th>How many?</th></tr>
<tr><td>匹《ひき》</td><td>一匹《いっぴき》</td><td>三匹《さんびき》</td><td>六匹《ろっぴき》</td><td>八匹《はっぴき》</td><td>十匹《じゅっぴき》</td><td>何匹《なんびき》</td></tr>
<tr><td>頭《とう》</td><td>一頭《いっとう》</td><td>三頭《さんとう》</td><td>六頭《ろくとう》</td><td>八頭《はっとう》</td><td>十頭《じゅっとう》</td><td>何頭《なんとう》</td></tr>
<tr><td>羽《わ》</td><td>一羽《いちわ》</td><td>三羽《さんわ》</td><td>六羽《ろくわ》</td><td>八羽《はちわ》</td><td>十羽《じゅうわ》</td><td>何羽《なんわ》</td></tr>
<tr><td>台《だい》</td><td>一台《いちだい》</td><td>三台《さんだい》</td><td>六台《ろくだい》</td><td>八台《はちだい》</td><td>十台《じゅうだい》</td><td>何台《なんだい》</td></tr>
<tr><td>冊《さつ》</td><td>一冊《いっさつ》</td><td>三冊《さんさつ》</td><td>六冊《ろくさつ》</td><td>八冊《はっさつ》</td><td>十冊《じゅっさつ》</td><td>何冊《なんさつ》</td></tr>
<tr><td>個《こ》</td><td>一個《いっこ》</td><td>三個《さんこ》</td><td>六個《ろっこ》</td><td>八個《はっこ》</td><td>十個《じゅっこ》</td><td>何個《なんこ》</td></tr>
<tr><td>軒《けん》</td><td>一軒《いっけん》</td><td>三軒《さんげん》</td><td>六軒《ろっけん》</td><td>八軒《はっけん》</td><td>十軒《じゅっけん》</td><td>何軒《なんげん》</td></tr></table>
<p>For birds you will also hear 三羽《さんば》; the forms in the table are the standard ones. 牧場《ぼくじょう》 below is a farm for animals (cows, horses).</p>
<h3>Animals</h3>
<p>As before, the number and counter come after the noun and its particle, just before the verb. Animals are alive, so use います.</p>
<div class="ex"><b>家《いえ》 に 猫《ねこ》 が 二匹《にひき》 います。</b><span>We have two cats at home.</span></div>
<div class="ex"><b>ペット は 何匹《なんびき》 います か。</b><span>How many pets do you have?</span></div>
<div class="ex"><b>牧場《ぼくじょう》 に 牛《うし》 が 十頭《じゅっとう》 います。</b><span>There are ten cows on the farm.</span></div>
<div class="ex"><b>木《き》 の 上《うえ》 に 鳥《とり》 が 三羽《さんわ》 います。</b><span>There are three birds in the tree.</span></div>
<h3>Machines, books, small things, buildings</h3>
<div class="pic-embed" data-pic="vehicles"></div>
<div class="ex"><b>駐車場《ちゅうしゃじょう》 に 車《くるま》 が 何台《なんだい》 あります か。</b><span>How many cars are in the car park?</span></div>
<div class="ex"><b>病棟《びょうとう》 に 車椅子《くるまいす》 が 四台《よんだい》 あります。</b><span>There are four wheelchairs on the ward.</span></div>
<div class="ex"><b>待合室《まちあいしつ》 に 雑誌《ざっし》 が 五冊《ごさつ》 あります。</b><span>There are five magazines in the waiting room.</span></div>
<div class="ex"><b>図書館《としょかん》 で 本《ほん》 を 三冊《さんさつ》 借《か》りました。</b><span>I borrowed three books from the library.</span></div>
<div class="ex"><b>卵《たまご》 を 一日《いちにち》 に 二個《にこ》 食《た》べます。</b><span>I eat two eggs a day.</span></div>
<div class="ex"><b>タオル を 二枚《にまい》 ください。</b><span>Two towels, please.</span></div>
<div class="ex"><b>水《みず》 を 一日《いちにち》 に 何杯《なんばい》 飲《の》みます か。</b><span>How many glasses of water do you drink a day?</span></div>
<div class="ex"><b>病院《びょういん》 の 近《ちか》く に 薬局《やっきょく》 が 二軒《にけん》 あります。</b><span>There are two pharmacies near the hospital.</span></div>
<div class="note"><b>Watch out:</b> animals are never counted with 個《こ》, 台《だい》 or the 一《ひと》つ series: say 犬《いぬ》 が 一匹《いっぴき》 います. And 本《ほん》 the book is counted with 冊《さつ》, not with the counter 本《ほん》: 本《ほん》 を 二冊《にさつ》. Watch the sound changes: 三匹《さんびき》, 六匹《ろっぴき》, 三軒《さんげん》.</div>
<div class="note">Remember: 匹《ひき》 small animals, 頭《とう》 large animals, 羽《わ》 birds, 台《だい》 machines, 冊《さつ》 books, 個《こ》 small objects, 軒《けん》 buildings. If you are unsure with a thing (not a person or animal), 一《ひと》つ, 二《ふた》つ will be understood.</div>`,
    quiz: [
      [`猫《ねこ》 が ＿ います。 "There are three cats."`, [`三匹《さんびき》`, `三頭《さんとう》`, `三台《さんだい》`], 0, "Cats are small animals, counted with 匹《ひき》."],
      ["Which counter is used for cars?", [`冊《さつ》`, `台《だい》`, `軒《けん》`], 1, "Machines and vehicles take 台《だい》."],
      [`猫《ねこ》 が ＿ います。 "There are six cats." How do you say the missing word?`, [`ろくひき`, `ろくぴき`, `ろっぴき`], 2, "Six with 匹《ひき》 becomes 六匹《ろっぴき》."],
      [`本《ほん》 を ＿ 買《か》いました。 "I bought two books."`, [`二冊《にさつ》`, `二枚《にまい》`, `二本《にほん》`], 0, "Books are counted with 冊《さつ》; the counter 本《ほん》 is for long, thin things."],
      ["\"How many birds are there?\"", [`鳥《とり》 は 何匹《なんびき》 あります か。`, `鳥《とり》 は 何羽《なんわ》 います か。`, `鳥《とり》 は 何個《なんこ》 います か。`], 1, "Birds take 羽《わ》, and living things take います."],
      ["\"There are two pharmacies near the station.\"", [`駅《えき》 の 近《ちか》く に 薬局《やっきょく》 が 二台《にだい》 あります。`, `駅《えき》 の 近《ちか》く に 薬局《やっきょく》 が 二軒《にけん》 います。`, `駅《えき》 の 近《ちか》く に 薬局《やっきょく》 が 二軒《にけん》 あります。`], 2, "Buildings and shops take 軒《けん》, and a building takes あります."]
    ] },

  { id: 'review-n5-pictures1', level: 'N5', unit: 'Picture lessons: places and bodies', after: 'counters-pictures', review: true, title: `Review: Picture lessons: places and bodies`, summary: `Gather and test position words, where it hurts, describing with 〜は 〜が, and the counters for animals and things.`, draft: true,
    body: `<p>This review gathers the four picture lessons of the unit. Read the table, check the "Watch out" list, then try the quiz. You can open the pictures again from the lessons or from Picture words.</p>
<table><tr><th>Pattern</th><th>Job</th><th>Model sentence</th></tr>
<tr><td>X の 上《うえ》 / 下《した》 / 中《なか》 / 前《まえ》 / 後《うし》ろ に</td><td>where something is</td><td>眼鏡《めがね》 は 机《つくえ》 の 上《うえ》 に あります。</td></tr>
<tr><td>A と B の 間《あいだ》</td><td>between</td><td>トイレ は 受付《うけつけ》 と 階段《かいだん》 の 間《あいだ》 です。</td></tr>
<tr><td>X の 隣《となり》 / 横《よこ》 / そば</td><td>next to, beside, near</td><td>駅《えき》 の そば に 病院《びょういん》 が あります。</td></tr>
<tr><td>body part が 痛《いた》い / かゆい / 重《おも》い</td><td>a body complaint</td><td>のど が 痛《いた》い です。</td></tr>
<tr><td>どこ が 〜 です か / この 辺《へん》</td><td>asking and pointing</td><td>どこ が かゆい です か。</td></tr>
<tr><td>A は B が + adjective</td><td>describing by a feature</td><td>祖母《そぼ》 は 目《め》 が 悪《わる》い です。</td></tr>
<tr><td>匹《ひき》 / 頭《とう》 / 羽《わ》</td><td>small animals / large animals / birds</td><td>犬《いぬ》 が 一匹《いっぴき》 います。</td></tr>
<tr><td>台《だい》 / 冊《さつ》 / 個《こ》 / 軒《けん》</td><td>machines / books / small things / buildings</td><td>ベッド が 六台《ろくだい》 あります。</td></tr></table>
<h3>Watch out</h3>
<ul><li>Thing first, then の and the position word: テーブル の 下《した》, not 下《した》 の テーブル.</li>
<li>います for people and animals, あります for things and buildings.</li>
<li>後《うし》ろ is behind in space; 後《あと》 is after in time.</li>
<li>The body part takes が, not を, and the question is どこ が, not どこ は.</li>
<li>痛《いた》い is an adjective: 痛《いた》かった です, not 痛《いた》い でした.</li>
<li>Describing: one は, one が (象《ぞう》 は 鼻《はな》 が 長《なが》い), and 背《せ》 が 高《たか》い for "tall".</li>
<li>Books take 冊《さつ》; animals never take 個《こ》 or the 一《ひと》つ series.</li></ul>
<h3>Patterns together</h3>
<div class="ex"><b>ベッド の 下《した》 に 猫《ねこ》 が 二匹《にひき》 います。</b><span>There are two cats under the bed.</span></div>
<div class="ex"><b>「どこ が 痛《いた》い です か。」「お腹《なか》 の この 辺《へん》 です。」</b><span>"Where does it hurt?" "Around here on my stomach."</span></div>
<div class="ex"><b>父《ちち》 は 耳《みみ》 が 遠《とお》い です。</b><span>My father is hard of hearing.</span></div>
<div class="ex"><b>受付《うけつけ》 の 前《まえ》 に 車椅子《くるまいす》 が 三台《さんだい》 あります。</b><span>There are three wheelchairs in front of reception.</span></div>
<div class="ex"><b>最近《さいきん》 は 朝《あさ》、 体《からだ》 が 重《おも》い です。</b><span>Lately my body feels heavy in the mornings.</span></div>
<div class="ex"><b>この 町《まち》 に は 本屋《ほんや》 が 三軒《さんげん》 あります。</b><span>There are three bookshops in this town.</span></div>`,
    quiz: [
      ["\"The bag is under the chair.\"", [`かばん は 椅子《いす》 の 下《した》 に あります。`, `かばん は 下《した》 の 椅子《いす》 に あります。`, `かばん は 椅子《いす》 の 下《した》 に います。`], 0, "Chair first, then の 下《した》, and a thing takes あります."],
      [`病院《びょういん》 ＿ 前《まえ》 に バス停《てい》 が あります。`, [`が`, `の`, `を`], 1, "The place and the position word are joined with の."],
      [`What does 薬局《やっきょく》 は 銀行《ぎんこう》 と 駅《えき》 の 間《あいだ》 に あります。 mean?`, ["The pharmacy is in front of the bank and the station.", "The pharmacy is next to the bank, near the station.", "The pharmacy is between the bank and the station."], 2, "A と B の 間《あいだ》 means between A and B."],
      ["\"Behind the door\"", [`ドア の 後《うし》ろ`, `ドア の 後《あと》`, `ドア の 前《まえ》`], 0, "Behind in space is 後《うし》ろ; 後《あと》 is after in time."],
      [`のど ＿ 痛《いた》い です。`, [`を`, `が`, `で`], 1, "The body part that hurts is marked with が."],
      ["\"My back was itchy.\"", [`背中《せなか》 が かゆい でした。`, `背中《せなか》 が かゆいました。`, `背中《せなか》 が かゆかった です。`], 2, "かゆい is an い-adjective: its past is かゆかった です."],
      [`A patient says 朝《あさ》 は 頭《あたま》 が 重《おも》い です。 What does he mean?`, ["In the mornings his head feels heavy.", "In the mornings he has a sharp pain in his head.", "His head is big."], 0, "重《おも》い with the head describes a dull, heavy feeling."],
      ["\"My younger sister has long hair.\"", [`妹《いもうと》 は 髪《かみ》 を 長《なが》い です。`, `妹《いもうと》 は 髪《かみ》 が 長《なが》い です。`, `妹《いもうと》 が 髪《かみ》 は 長《なが》い な です。`], 1, "Whole は, part が, then the い-adjective with no な."],
      [`What does 母《はは》 は 目《め》 が 悪《わる》い です。 mean?`, ["My mother has sore eyes today.", "My mother is in a bad mood.", "My mother has poor eyesight."], 2, "目《め》 が 悪《わる》い describes poor eyesight."],
      [`牧場《ぼくじょう》 に 馬《うま》 が ＿ います。 "There are three horses on the farm."`, [`三頭《さんとう》`, `三冊《さんさつ》`, `三個《さんこ》`], 0, "Large animals such as horses take 頭《とう》."],
      [`家《いえ》 が ＿ あります。 "There are three houses." How do you say the missing word?`, [`さんけん`, `さんげん`, `みっけん`], 1, "With three, 軒《けん》 becomes げん: 三軒《さんげん》."],
      [`駅《えき》 の 前《まえ》 に 自転車《じてんしゃ》 が ＿ あります。 "There are two bicycles in front of the station."`, [`二匹《にひき》`, `二枚《にまい》`, `二台《にだい》`], 2, "Bicycles are vehicles, counted with 台《だい》."]
    ] }
);
