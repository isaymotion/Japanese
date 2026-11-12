/* Lesson: how kanji work (1 lesson, Starter). Inserted after the katakana lesson.
   DRAFT FOR REVIEW by a native Japanese speaker before use. Notation follows tools/AUTHORING.md. */
window.LESSONS = window.LESSONS || [];
(function () {
  const lesson = { id: 'kanji-basics', level: 'Starter', unit: 'Foundations', title: `How kanji work: meanings, readings and okurigana`,
    summary: `Understand on and kun readings, okurigana, compounds and kanji parts, so you can learn kanji word by word.`, draft: true,
    body: `<p>You can now read hiragana and katakana. The third script, kanji, is the one that carries most of the meaning in a sentence. A ward sign, a prescription bag or a patient's form will be full of kanji such as 薬《くすり》 (medicine), 病院《びょういん》 (hospital), 医者《いしゃ》 (doctor) and 入院《にゅういん》 (admission to hospital). This lesson explains how kanji work, so the ones you meet stop looking random.</p>
<h3>A character with a meaning</h3>
<p>A kanji stands for a meaning, and usually also for a sound. About 2,000 are in daily use; the official common-use list (jōyō kanji) has 2,136. Nobody learns them all at once. You learn them gradually, inside the words you need. Because this app shows furigana over every kanji, you can read every example from your first day, and the kanji become familiar as you go.</p>
<h3>Two kinds of reading: on and kun</h3>
<p>Most kanji have two kinds of reading.</p>
<ul><li><b>On readings</b> came from Chinese. They are used mostly in compounds, words of two or more kanji: 学生《がくせい》 (student), 入院《にゅういん》 (admission).</li>
<li><b>Kun readings</b> are native Japanese words. They are used mostly when a kanji stands alone or has kana after it: 人《ひと》 (person), 食《た》べる (to eat).</li></ul>
<p>So the same kanji can sound different in different words. A few words even have a special reading for the whole word, which you simply learn as a word.</p>
<table><tr><th>Word</th><th>Meaning</th><th>Reading of the kanji</th></tr>
<tr><td>人《ひと》</td><td>person</td><td>kun, alone</td></tr>
<tr><td>三人《さんにん》</td><td>three people</td><td>on, with a number</td></tr>
<tr><td>日本人《にほんじん》</td><td>Japanese person</td><td>on, in a compound</td></tr>
<tr><td>日《ひ》</td><td>day, sun</td><td>kun, alone</td></tr>
<tr><td>日曜日《にちようび》</td><td>Sunday</td><td>on, then kun</td></tr>
<tr><td>今日《きょう》</td><td>today</td><td>special reading for the whole word</td></tr>
<tr><td>薬《くすり》</td><td>medicine</td><td>kun, alone</td></tr>
<tr><td>薬局《やっきょく》</td><td>pharmacy</td><td>on, in a compound</td></tr></table>
<p>Dictionaries and the Kanji page write on readings in katakana and kun readings in hiragana, so you can tell them apart at a glance.</p>
<div class="ex"><b>私《わたし》 は 医者《いしゃ》 です。</b><span>I am a doctor.</span></div>
<div class="ex"><b>学生《がくせい》 が 三人《さんにん》 います。</b><span>There are three students.</span></div>
<div class="ex"><b>今日《きょう》 は 日曜日《にちようび》 です。</b><span>Today is Sunday.</span></div>
<h3>Okurigana: the kana after a kanji</h3>
<p><b>Okurigana</b> are the kana written after a kanji to complete a verb or adjective and show its form. The kanji carries the meaning; the kana carry the grammar. When the verb changes form, the kanji stays the same and only the kana change.</p>
<table><tr><th>Word</th><th>Kanji (meaning)</th><th>Okurigana (form)</th></tr>
<tr><td>食《た》べる</td><td>食《た》: eat</td><td>べる: dictionary form</td></tr>
<tr><td>食《た》べます</td><td>食《た》: eat</td><td>べます: polite form</td></tr>
<tr><td>飲《の》む</td><td>飲《の》: drink</td><td>む: dictionary form</td></tr>
<tr><td>飲《の》みました</td><td>飲《の》: drink</td><td>みました: polite past</td></tr>
<tr><td>大《おお》きい</td><td>大《おお》: big</td><td>きい: adjective ending</td></tr></table>
<div class="ex"><b>薬《くすり》 を 飲《の》みます。</b><span>I take (drink) medicine.</span></div>
<div class="ex"><b>朝《あさ》ご飯《はん》 を 食《た》べました。</b><span>I ate breakfast.</span></div>
<div class="ex"><b>大《おお》きい 病院《びょういん》 です。</b><span>It is a big hospital.</span></div>
<h3>Compounds: the meanings add up</h3>
<p>In a compound, the meanings of the kanji usually add up to the meaning of the word. 病《びょう》 (sickness) + 院《いん》 (institution) is 病院《びょういん》, hospital. 入《にゅう》 (enter) + 院《いん》 is 入院《にゅういん》, admission to hospital. 退《たい》 (withdraw) + 院《いん》 is 退院《たいいん》, discharge. 薬《やく》 (medicine) + 局《きょく》 (office) is 薬局《やっきょく》, pharmacy (the く becomes a small っ). Once you know one kanji, you can often guess the meaning of many new words that contain it.</p>
<p>Sounds sometimes change where two kanji meet. 一《いち》 (one) + 本《ほん》 (counter for long things) is 一本《いっぽん》, not "ichi-hon". You do not need rules for this now; learn each word as you meet it, and the furigana will always show you the real reading.</p>
<div class="ex"><b>明日《あした》 入院《にゅういん》します。</b><span>I will be admitted to hospital tomorrow.</span></div>
<div class="ex"><b>来週《らいしゅう》 退院《たいいん》します。</b><span>I will be discharged next week.</span></div>
<div class="ex"><b>薬局《やっきょく》 は 一階《いっかい》 です。</b><span>The pharmacy is on the first (ground) floor.</span></div>
<div class="ex"><b>水《みず》 を 一本《いっぽん》 ください。</b><span>One bottle of water, please.</span></div>
<h3>Parts of kanji as hints</h3>
<p>Many kanji are built from smaller parts. One part, often on the left or top, hints at the meaning. These parts are called radicals. Each has a name, shown above it in the table below, and learning a few makes new kanji easier to remember.</p>
<table><tr><th>Part (with its name)</th><th>Hint</th><th>Examples</th></tr>
<tr><td>亻《にんべん》</td><td>person</td><td>休《やす》む (to rest), 体《からだ》 (body)</td></tr>
<tr><td>氵《さんずい》</td><td>water</td><td>海《うみ》 (sea), 泣《な》く (to cry)</td></tr>
<tr><td>疒《やまいだれ》</td><td>sickness</td><td>病気《びょうき》 (illness), 症状《しょうじょう》 (symptom), 痛《いた》い (painful)</td></tr>
<tr><td>言《ごんべん》</td><td>word, speech</td><td>話《はな》す (to speak), 日本語《にほんご》 (Japanese), 読《よ》む (to read)</td></tr></table>
<p>These are hints, not rules. Not every kanji with a part has a meaning close to it, but the hint often helps you remember the kanji.</p>
<div class="ex"><b>頭《あたま》 が 痛《いた》い です。</b><span>I have a headache.</span></div>
<div class="ex"><b>今日《きょう》 は 休《やす》みます。</b><span>I will rest today.</span></div>
<div class="ex"><b>日本語《にほんご》 を 少《すこ》し 話《はな》します。</b><span>I speak a little Japanese.</span></div>
<h3>Strokes</h3>
<p>Each kanji is written with a fixed number of strokes in a fixed order. The basic rules are top to bottom and left to right: 三《さん》 is written from the top line down, and 川《かわ》 (river) from the left stroke to the right. The <b>stroke count</b> is one way dictionaries sort and look up kanji: 人《ひと》 has 2 strokes, 病《びょう》 has 10. You do not need to write kanji by hand to read them, but writing a few by hand helps you remember them.</p>
<h3>How to study kanji in this app</h3>
<ul><li>Open the <a href="#/kanji">Kanji</a> page. Each kanji shows its meaning, its readings and example words.</li>
<li>Use the drill on that page to practise one group at a time.</li>
<li>Add kanji you want to keep to your flashcards.</li>
<li>When you know a word well, go to Settings and set furigana to "On tap" or "Off", so you read the kanji yourself.</li></ul>
<div class="note"><b>Remember:</b> learn kanji inside words, not as lists of readings. Knowing that 院《いん》 appears in 病院《びょういん》, 入院《にゅういん》 and 退院《たいいん》 is far more useful than memorizing every reading of 院《いん》 on its own. Compounds usually use on readings; a kanji with kana after it usually uses its kun reading.</div>`,
    quiz: [
      [`Compounds of two or more kanji, such as 学生《がくせい》, usually use which kind of reading?`, [`Kun readings`, `On readings`, `Special whole-word readings`], 1, `Compounds mostly use on readings, which came from Chinese.`],
      [`What is okurigana?`, [`The kana written after a kanji to complete the word and show its form`, `The small kana printed above a kanji`, `The Chinese reading of a kanji`], 0, `Okurigana, such as べます in 食《た》べます, carry the grammar after the kanji.`],
      [`入《にゅう》 means enter and 院《いん》 means institution. What does 入院《にゅういん》 mean?`, [`Admission to hospital`, `Discharge from hospital`, `Pharmacy`], 0, `Enter + institution: being admitted to hospital.`],
      [`In 食《た》べました, which part tells you the verb is polite past?`, [`The kanji 食《た》`, `The furigana above the kanji`, `The kana after the kanji`], 2, `The okurigana べました show the form; the kanji 食《た》 only carries the meaning "eat".`],
      [`病気《びょうき》, 症状《しょうじょう》 and 痛《いた》い have kanji that share one part. What does that part hint at?`, [`Water`, `Words and speech`, `Sickness`], 2, `The part 疒《やまいだれ》 hints at sickness.`],
      [`What is the best way to learn kanji?`, [`Memorize every reading of each kanji first`, `Learn them inside words you use`, `Learn to hand-write all of them before reading`], 1, `Kanji are easiest to learn and remember inside real words.`]
    ] };
  const at = window.LESSONS.findIndex((l) => l.id === 'katakana');
  window.LESSONS.splice(at < 0 ? window.LESSONS.length : at + 1, 0, lesson);
})();
