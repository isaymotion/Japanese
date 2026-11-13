# Write /home/claude/work/new/counters.js (numbers and counters)
Read COMMON-WRITE.md first. Seed and shape: /home/claude/japanese/js/data/counters.js (copy its header). Read js/numbers.js only if it exists and you are curious; you write data only.
`groups`: rows [label, notation, irregular?]. label = what the learner sees: digits plus the counter; if the label contains a kanji, give it the counter's BASIC reading so check-ja passes and the learner sees which counter it is: `3本《ほん》`, `1日《にち》 (date)` — the sound change is then the thing to learn in the notation `三本《さんぼん》`. notation = the full reading, written with kanji numerals and furigana as AUTHORING.md says (`三本《さんぼん》`, `四時《よじ》`, `一日《ついたち》`), or kana where that is how it is written. irregular = 1 when the reading is not the plain number + plain counter (sound changes, special readings: 4 = よん/よ, 7, 9 choices included).
Groups (id: content), in this order, each with a one-line English note (what the counter counts, when it is used, the alternatives like よん/し):
- num: 0–10 (0 れい/ゼロ: give ゼロ and note れい; 4 よん, 7 なな, 9 きゅう; note し/しち/く exist)
- tens: 11, 12, 14, 17, 19, 20, 30, 40, 50, 70, 90, 99
- big: 100, 200, 300, 600, 800, 1,000, 3,000, 8,000, 10,000, 20,000, 100,000 (labels with commas as in "1,000")
- hour: 1時 to 12時 (label `1時《じ》`), plus 何時《なんじ》
- minute: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30 (also 半《はん》 as "half past"), 何分
- clock: 8 full times like "7:30", "9:15", "4:45", "12:05" (label digits only; notation e.g. `七時《しちじ》 半《はん》` or `七時《しちじ》 三十分《さんじゅっぷん》` — choose one form per row, prefer 半 for :30), and 午前 / 午後 in two of them (label "2:00 p.m.")
- month: 1月 to 12月, 何月
- date: 1日 to 10日, 14日, 20日, 24日, 30日, 31日 (label `1日《にち》 (date)`)
- days: lengths of time: 一日《いちにち》, 二日《ふつか》 … 十日《とおか》 as "1 day" … "10 days", then 一週間, 二週間, 一か月, 三か月, 半年, 一年 (labels in English, e.g. "2 weeks")
- weekday: 月曜日 to 日曜日 (label English "Monday")
- age: 1歳 to 10歳, 20歳 (はたち), 30歳, 何歳 (label `1歳《さい》`)
- people: 1人 to 10人, 何人
- things: ひとつ to とお (label "1 (thing)") and いくつ
- long: 本 1–10, 何本 (long things: bottles, pens, umbrellas)
- tablet: 錠 1–3 and 何錠 (tablets of medicine)
- times: 回 1–10, 何回 (how many times)
- glass: 杯 1–10, 何杯 (cups, glasses, bowls)
- floor: 階 1–10, 何階
- flat: 枚 1–5, 何枚
- small: 匹 1–10, 何匹
- hours: 時間 1–10 hours, 何時間 (hours of sleep)
Mark every reading with a sound change irregular. Be careful: 一本 いっぽん, 三本 さんぼん, 六本 ろっぽん, 八本 はっぽん/はちほん (give はっぽん), 十本 じゅっぽん (じっぽん also exists; note it), 一杯 いっぱい, 三杯 さんばい, 六杯 ろっぱい, 八杯 はっぱい, 十杯 じゅっぱい, 三階 さんがい, 何階 なんがい, 一匹 いっぴき, 三匹 さんびき, 六匹 ろっぴき, 八匹 はっぴき, 十匹 じゅっぴき, 一回 いっかい, 六回 ろっかい, 八回 はっかい (はちかい also), 十回 じゅっかい, 四時 よじ, 七時 しちじ, 九時 くじ, 四月 しがつ, 七月 しちがつ, 九月 くがつ, 一分 いっぷん, 三分 さんぷん, 四分 よんぷん, 六分 ろっぷん, 八分 はっぷん/はちふん, 十分 じゅっぷん, 二十歳 はたち, 八歳 はっさい, 十歳 じゅっさい, 一歳 いっさい, 四人 よにん, 七人 しちにん/ななにん, 九日 ここのか, 十四日 じゅうよっか, 二十日 はつか, 二十四日 にじゅうよっか.
`clinical`: 40 items [ja, en, question, answer, [3 wrong]]: short sentences a patient, family member or nurse says in an interview with ONE number/time/date/count the learner must catch: sleep (何時に寝る, 何時間眠れる, 夜中に何回起きる), meals a day, how many days/weeks a symptom has lasted, age, family members (何人家族), floor of the ward, appointment date and time, how many cups of coffee or glasses of alcohol (no method or amount framed as risk; drinks counted with 杯 is fine), how many tablets after a meal as the doctor said (counts only, no names or mg). answer and wrong options are short English ("3 times", "since the 14th", "about 2:30 p.m."); the wrong options are near misses that test the sound (4 vs 7, 1 vs 8, 14th vs 4th, じゅうよっか vs よっか, いっぷん vs ...). question is English ("How many times does she wake at night?"). Polite style for patients; family members may be plain-polite.
Check with the commands in COMMON-WRITE.md.
