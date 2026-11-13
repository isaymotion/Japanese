/* DRAFT: all Japanese here is a draft until a native Japanese-speaking clinician reviews it. */
/* Numbers and counters (0.17.0). window.JA_COUNTERS = { groups: [{ id, title, note, rows: [[label, notation, irregular?]] }], clinical: [[ja, en, question, answer, [wrong, wrong, wrong]]] }.
   label is what the learner sees (a numeral and the counter, e.g. "3本"); notation is the reading in the app's notation
   with the kana in 《》; irregular = 1 marks a sound change to learn. Used by #/numbers. clinical: a sentence a patient or nurse might say with a number in it; the learner hears it and answers the English question. */
window.JA_COUNTERS = {
  groups: [
    { id: 'num', title: 'Numbers 0 to 10', note: 'Zero is usually said as the loanword zero; the older reading rei is also used. For 4, 7 and 9 the usual readings are yon, nana and kyuu; shi, shichi and ku also exist and appear in fixed words such as months and clock times.', rows: [
      ['0', 'ゼロ', 1], ['1', '一《いち》'], ['2', '二《に》'], ['3', '三《さん》'], ['4', '四《よん》', 1], ['5', '五《ご》'],
      ['6', '六《ろく》'], ['7', '七《なな》', 1], ['8', '八《はち》'], ['9', '九《きゅう》', 1], ['10', '十《じゅう》']
    ] },
    { id: 'tens', title: 'Numbers 11 to 99', note: 'Build them like a sum: ten plus one is 11, two tens is 20. The tens of 4, 7 and 9 use yon, nana and kyuu.', rows: [
      ['11', '十一《じゅういち》'], ['12', '十二《じゅうに》'], ['14', '十四《じゅうよん》', 1], ['17', '十七《じゅうなな》', 1], ['19', '十九《じゅうきゅう》', 1],
      ['20', '二十《にじゅう》'], ['30', '三十《さんじゅう》'], ['40', '四十《よんじゅう》', 1], ['50', '五十《ごじゅう》'], ['70', '七十《ななじゅう》', 1],
      ['90', '九十《きゅうじゅう》', 1], ['99', '九十九《きゅうじゅうきゅう》', 1]
    ] },
    { id: 'big', title: 'Hundreds and thousands', note: 'One hundred and one thousand are just hyaku and sen, with no ichi. Japanese counts large numbers in groups of four digits: 10,000 is one man, so 100,000 is ten man.', rows: [
      ['100', '百《ひゃく》'], ['200', '二百《にひゃく》'], ['300', '三百《さんびゃく》', 1], ['600', '六百《ろっぴゃく》', 1], ['800', '八百《はっぴゃく》', 1],
      ['1,000', '千《せん》'], ['3,000', '三千《さんぜん》', 1], ['8,000', '八千《はっせん》', 1], ['10,000', '一万《いちまん》'], ['20,000', '二万《にまん》'],
      ['100,000', '十万《じゅうまん》']
    ] },
    { id: 'hour', title: 'Hours on the clock', note: 'Clock hours use the counter ji. Three of them have fixed readings: 4 is yo, 7 is shichi and 9 is ku.', rows: [
      ['1時《じ》', '一時《いちじ》'], ['2時《じ》', '二時《にじ》'], ['3時《じ》', '三時《さんじ》'], ['4時《じ》', '四時《よじ》', 1],
      ['5時《じ》', '五時《ごじ》'], ['6時《じ》', '六時《ろくじ》'], ['7時《じ》', '七時《しちじ》', 1], ['8時《じ》', '八時《はちじ》'],
      ['9時《じ》', '九時《くじ》', 1], ['10時《じ》', '十時《じゅうじ》'], ['11時《じ》', '十一時《じゅういちじ》'], ['12時《じ》', '十二時《じゅうにじ》'],
      ['何時《なんじ》', '何時《なんじ》']
    ] },
    { id: 'minute', title: 'Minutes', note: 'The counter for minutes is fun, which changes to pun after 1, 3, 4, 6, 8 and 10. Hachifun and jippun are also heard. Four is yonpun (never yonfun); seven is nanafun (shichifun also exists) and nine is kyuufun. Han means half past.', rows: [
      ['1分《ふん》', '一分《いっぷん》', 1], ['2分《ふん》', '二分《にふん》'], ['3分《ふん》', '三分《さんぷん》', 1], ['4分《ふん》', '四分《よんぷん》', 1],
      ['5分《ふん》', '五分《ごふん》'], ['6分《ふん》', '六分《ろっぷん》', 1], ['7分《ふん》', '七分《ななふん》', 1], ['8分《ふん》', '八分《はっぷん》', 1],
      ['9分《ふん》', '九分《きゅうふん》', 1], ['10分《ふん》', '十分《じゅっぷん》', 1], ['15分《ふん》', '十五分《じゅうごふん》'], ['20分《ふん》', '二十分《にじゅっぷん》', 1],
      ['30分《ふん》', '三十分《さんじゅっぷん》', 1], ['半《はん》 (half past)', '半《はん》'], ['何分《なんぷん》', '何分《なんぷん》', 1]
    ] },
    { id: 'clock', title: 'Telling the time', note: 'Say the hour, then the minutes. For half past, han is more common than thirty minutes. Forty minutes is yonjuppun; yonjippun is also correct. Gozen (a.m.) and gogo (p.m.) come before the time.', rows: [
      ['7:30', '七時《しちじ》 半《はん》', 1], ['9:15', '九時《くじ》 十五分《じゅうごふん》', 1], ['4:45', '四時《よじ》 四十五分《よんじゅうごふん》', 1],
      ['12:05', '十二時《じゅうにじ》 五分《ごふん》'], ['1:20', '一時《いちじ》 二十分《にじゅっぷん》', 1], ['10:40', '十時《じゅうじ》 四十分《よんじゅっぷん》', 1],
      ['2:00 p.m.', '午後《ごご》 二時《にじ》'], ['6:10 a.m.', '午前《ごぜん》 六時《ろくじ》 十分《じゅっぷん》', 1]
    ] },
    { id: 'month', title: 'Months', note: 'Months are the number plus gatsu. April, July and September use shi, shichi and ku. Do not confuse these with lengths of months (see Lengths of time).', rows: [
      ['1月《がつ》', '一月《いちがつ》'], ['2月《がつ》', '二月《にがつ》'], ['3月《がつ》', '三月《さんがつ》'], ['4月《がつ》', '四月《しがつ》', 1],
      ['5月《がつ》', '五月《ごがつ》'], ['6月《がつ》', '六月《ろくがつ》'], ['7月《がつ》', '七月《しちがつ》', 1], ['8月《がつ》', '八月《はちがつ》'],
      ['9月《がつ》', '九月《くがつ》', 1], ['10月《がつ》', '十月《じゅうがつ》'], ['11月《がつ》', '十一月《じゅういちがつ》'], ['12月《がつ》', '十二月《じゅうにがつ》'],
      ['何月《なんがつ》', '何月《なんがつ》']
    ] },
    { id: 'date', title: 'Dates of the month', note: 'The 1st to the 10th, the 14th, 20th and 24th have special readings; most other dates are the number plus nichi. The 1st is tsuitachi.', rows: [
      ['1日《にち》 (date)', '一日《ついたち》', 1], ['2日《にち》 (date)', '二日《ふつか》', 1], ['3日《にち》 (date)', '三日《みっか》', 1],
      ['4日《にち》 (date)', '四日《よっか》', 1], ['5日《にち》 (date)', '五日《いつか》', 1], ['6日《にち》 (date)', '六日《むいか》', 1],
      ['7日《にち》 (date)', '七日《なのか》', 1], ['8日《にち》 (date)', '八日《ようか》', 1], ['9日《にち》 (date)', '九日《ここのか》', 1],
      ['10日《にち》 (date)', '十日《とおか》', 1], ['14日《にち》 (date)', '十四日《じゅうよっか》', 1], ['20日《にち》 (date)', '二十日《はつか》', 1],
      ['24日《にち》 (date)', '二十四日《にじゅうよっか》', 1], ['30日《にち》 (date)', '三十日《さんじゅうにち》'], ['31日《にち》 (date)', '三十一日《さんじゅういちにち》']
    ] },
    { id: 'days', title: 'Lengths of time', note: 'Two to ten days use the same words as the dates; one day is ichinichi, not tsuitachi. Weeks add shuukan and months add kagetsu, so the length of a month never uses gatsu.', rows: [
      ['1 day', '一日《いちにち》'], ['2 days', '二日《ふつか》', 1], ['3 days', '三日《みっか》', 1], ['4 days', '四日《よっか》', 1],
      ['5 days', '五日《いつか》', 1], ['6 days', '六日《むいか》', 1], ['7 days', '七日《なのか》', 1], ['8 days', '八日《ようか》', 1],
      ['9 days', '九日《ここのか》', 1], ['10 days', '十日《とおか》', 1], ['1 week', '一週間《いっしゅうかん》', 1], ['2 weeks', '二週間《にしゅうかん》'],
      ['1 month', '一《いっ》か月《げつ》', 1], ['3 months', '三《さん》か月《げつ》'], ['half a year', '半年《はんとし》', 1], ['1 year', '一年《いちねん》']
    ] },
    { id: 'weekday', title: 'Days of the week', note: 'Each name ends in youbi. In speech the final bi is often dropped, as in getsuyou for Monday.', rows: [
      ['Monday', '月曜日《げつようび》'], ['Tuesday', '火曜日《かようび》'], ['Wednesday', '水曜日《すいようび》'], ['Thursday', '木曜日《もくようび》'],
      ['Friday', '金曜日《きんようび》'], ['Saturday', '土曜日《どようび》'], ['Sunday', '日曜日《にちようび》']
    ] },
    { id: 'age', title: 'Age', note: 'Age uses the counter sai. Four, seven and nine are yonsai, nanasai and kyuusai; ten is jussai (jissai also exists), and thirty, eighty and ninety follow it: sanjussai, hachijussai, kyuujussai. Twenty is hatachi. To ask a patient politely, oikutsu is softer than nansai.', rows: [
      ['1歳《さい》', '一歳《いっさい》', 1], ['2歳《さい》', '二歳《にさい》'], ['3歳《さい》', '三歳《さんさい》'], ['4歳《さい》', '四歳《よんさい》', 1],
      ['5歳《さい》', '五歳《ごさい》'], ['6歳《さい》', '六歳《ろくさい》'], ['7歳《さい》', '七歳《ななさい》', 1], ['8歳《さい》', '八歳《はっさい》', 1],
      ['9歳《さい》', '九歳《きゅうさい》', 1], ['10歳《さい》', '十歳《じゅっさい》', 1], ['20歳《さい》', '二十歳《はたち》', 1], ['30歳《さい》', '三十歳《さんじゅっさい》', 1],
      ['何歳《なんさい》', '何歳《なんさい》']
    ] },
    { id: 'people', title: 'People', note: 'One and two people are hitori and futari; from three on it is the number plus nin. Four people is yonin. Seven is shichinin or nananin, and nine is usually kyuunin (kunin also exists).', rows: [
      ['1人《にん》', '一人《ひとり》', 1], ['2人《にん》', '二人《ふたり》', 1], ['3人《にん》', '三人《さんにん》'], ['4人《にん》', '四人《よにん》', 1],
      ['5人《にん》', '五人《ごにん》'], ['6人《にん》', '六人《ろくにん》'], ['7人《にん》', '七人《しちにん》', 1], ['8人《にん》', '八人《はちにん》'],
      ['9人《にん》', '九人《きゅうにん》', 1], ['10人《にん》', '十人《じゅうにん》'], ['何人《なんにん》', '何人《なんにん》']
    ] },
    { id: 'things', title: 'General things (native numbers)', note: 'The native Japanese numbers count almost any object when you do not know the special counter. They go only up to ten; after that use the plain numbers. Ikutsu asks how many.', rows: [
      ['1 (thing)', '一《ひと》つ', 1], ['2 (things)', '二《ふた》つ', 1], ['3 (things)', '三《みっ》つ', 1], ['4 (things)', '四《よっ》つ', 1],
      ['5 (things)', '五《いつ》つ', 1], ['6 (things)', '六《むっ》つ', 1], ['7 (things)', '七《なな》つ', 1], ['8 (things)', '八《やっ》つ', 1],
      ['9 (things)', '九《ここの》つ', 1], ['10 (things)', '十《とお》', 1], ['how many (things)', 'いくつ']
    ] },
    { id: 'long', title: 'Long things (hon)', note: 'Hon counts long, thin things: bottles, pens, umbrellas, trees. It changes to pon or bon after some numbers. Eight is usually happon (hachihon also exists); ten is juppon or jippon. Seven is usually nanahon.', rows: [
      ['1本《ほん》', '一本《いっぽん》', 1], ['2本《ほん》', '二本《にほん》'], ['3本《ほん》', '三本《さんぼん》', 1], ['4本《ほん》', '四本《よんほん》', 1],
      ['5本《ほん》', '五本《ごほん》'], ['6本《ほん》', '六本《ろっぽん》', 1], ['7本《ほん》', '七本《ななほん》', 1], ['8本《ほん》', '八本《はっぽん》', 1],
      ['9本《ほん》', '九本《きゅうほん》', 1], ['10本《ほん》', '十本《じゅっぽん》', 1], ['何本《なんぼん》', '何本《なんぼん》', 1]
    ] },
    { id: 'tablet', title: 'Tablets (jou)', note: 'Jou counts tablets of medicine. It does not change its sound.', rows: [
      ['1錠《じょう》', '一錠《いちじょう》'], ['2錠《じょう》', '二錠《にじょう》'], ['3錠《じょう》', '三錠《さんじょう》'], ['何錠《なんじょう》', '何錠《なんじょう》']
    ] },
    { id: 'times', title: 'How many times (kai)', note: 'Kai counts how many times something happens: waking at night, meals, visits. Ikkai, rokkai, hakkai and jukkai double the k; hachikai and jikkai are also heard. Seven is usually nanakai.', rows: [
      ['1回《かい》', '一回《いっかい》', 1], ['2回《かい》', '二回《にかい》'], ['3回《かい》', '三回《さんかい》'], ['4回《かい》', '四回《よんかい》', 1],
      ['5回《かい》', '五回《ごかい》'], ['6回《かい》', '六回《ろっかい》', 1], ['7回《かい》', '七回《ななかい》', 1], ['8回《かい》', '八回《はっかい》', 1],
      ['9回《かい》', '九回《きゅうかい》', 1], ['10回《かい》', '十回《じゅっかい》', 1], ['何回《なんかい》', '何回《なんかい》']
    ] },
    { id: 'glass', title: 'Cups and glasses (hai)', note: 'Hai counts cups, glasses and bowls of food or drink. It becomes pai or bai after some numbers. Seven is usually nanahai.', rows: [
      ['1杯《はい》', '一杯《いっぱい》', 1], ['2杯《はい》', '二杯《にはい》'], ['3杯《はい》', '三杯《さんばい》', 1], ['4杯《はい》', '四杯《よんはい》', 1],
      ['5杯《はい》', '五杯《ごはい》'], ['6杯《はい》', '六杯《ろっぱい》', 1], ['7杯《はい》', '七杯《ななはい》', 1], ['8杯《はい》', '八杯《はっぱい》', 1],
      ['9杯《はい》', '九杯《きゅうはい》', 1], ['10杯《はい》', '十杯《じゅっぱい》', 1], ['何杯《なんばい》', '何杯《なんばい》', 1]
    ] },
    { id: 'floor', title: 'Floors (kai)', note: 'Kai for floors sounds like kai for times, but three is sangai and how many is nangai. Hachikai is also heard for the 8th floor, and nankai for how many floors.', rows: [
      ['1階《かい》', '一階《いっかい》', 1], ['2階《かい》', '二階《にかい》'], ['3階《かい》', '三階《さんがい》', 1], ['4階《かい》', '四階《よんかい》', 1],
      ['5階《かい》', '五階《ごかい》'], ['6階《かい》', '六階《ろっかい》', 1], ['7階《かい》', '七階《ななかい》', 1], ['8階《かい》', '八階《はっかい》', 1],
      ['9階《かい》', '九階《きゅうかい》', 1], ['10階《かい》', '十階《じゅっかい》', 1], ['何階《なんがい》', '何階《なんがい》', 1]
    ] },
    { id: 'flat', title: 'Flat things (mai)', note: 'Mai counts flat things: paper, forms, photos, shirts. It does not change its sound.', rows: [
      ['1枚《まい》', '一枚《いちまい》'], ['2枚《まい》', '二枚《にまい》'], ['3枚《まい》', '三枚《さんまい》'], ['4枚《まい》', '四枚《よんまい》', 1],
      ['5枚《まい》', '五枚《ごまい》'], ['何枚《なんまい》', '何枚《なんまい》']
    ] },
    { id: 'small', title: 'Small animals (hiki)', note: 'Hiki counts small animals such as cats, dogs and fish. It becomes piki or biki after some numbers. Seven is usually nanahiki, and ten is juppiki or jippiki.', rows: [
      ['1匹《ひき》', '一匹《いっぴき》', 1], ['2匹《ひき》', '二匹《にひき》'], ['3匹《ひき》', '三匹《さんびき》', 1], ['4匹《ひき》', '四匹《よんひき》', 1],
      ['5匹《ひき》', '五匹《ごひき》'], ['6匹《ひき》', '六匹《ろっぴき》', 1], ['7匹《ひき》', '七匹《ななひき》', 1], ['8匹《ひき》', '八匹《はっぴき》', 1],
      ['9匹《ひき》', '九匹《きゅうひき》', 1], ['10匹《ひき》', '十匹《じゅっぴき》', 1], ['何匹《なんびき》', '何匹《なんびき》', 1]
    ] },
    { id: 'hours', title: 'Hours of time (jikan)', note: 'Jikan counts hours of time, as in hours of sleep. It follows the clock readings: yojikan, shichijikan (nanajikan is also used) and kujikan.', rows: [
      ['1時間《じかん》', '一時間《いちじかん》'], ['2時間《じかん》', '二時間《にじかん》'], ['3時間《じかん》', '三時間《さんじかん》'], ['4時間《じかん》', '四時間《よじかん》', 1],
      ['5時間《じかん》', '五時間《ごじかん》'], ['6時間《じかん》', '六時間《ろくじかん》'], ['7時間《じかん》', '七時間《しちじかん》', 1], ['8時間《じかん》', '八時間《はちじかん》'],
      ['9時間《じかん》', '九時間《くじかん》', 1], ['10時間《じかん》', '十時間《じゅうじかん》'], ['何時間《なんじかん》', '何時間《なんじかん》']
    ] }
  ],
  clinical: [
    ['夜《よる》 は だいたい 十一時《じゅういちじ》 に 寝《ね》ます。', 'I usually go to bed at about eleven at night.', 'What time does she usually go to bed?', 'about 11 p.m.', ['about 1 a.m.', 'about 7 p.m.', 'about 10 p.m.']],
    ['毎晩《まいばん》 四時間《よじかん》 ぐらい しか 眠《ねむ》れません。', 'I can only sleep about four hours a night.', 'How many hours does he sleep a night?', 'about 4 hours', ['about 7 hours', 'about 8 hours', 'about 9 hours']],
    ['夜中《よなか》 に 三回《さんかい》 ぐらい 目《め》 が 覚《さ》めます。', 'I wake up about three times during the night.', 'How many times does she wake at night?', 'about 3 times', ['about once', 'about 6 times', 'about 8 times']],
    ['朝《あさ》 五時《ごじ》 に 目《め》 が 覚《さ》めて しまいます。', 'I end up waking at five in the morning.', 'What time does he wake up?', '5 a.m.', ['4 a.m.', '7 a.m.', '9 a.m.']],
    ['昨日《きのう》 は 一時間《いちじかん》 しか 眠《ねむ》れません でした。', 'Yesterday I could only sleep for one hour.', 'How long did she sleep yesterday?', '1 hour', ['4 hours', '7 hours', '8 hours']],
    ['午前《ごぜん》 二時《にじ》 ごろ まで 眠《ねむ》れません。', 'I cannot fall asleep until about two in the morning.', 'Until what time is he awake?', 'about 2 a.m.', ['about 2 p.m.', 'about 4 a.m.', 'about midnight']],
    ['毎晩《まいばん》 十二時《じゅうにじ》 半《はん》 ごろ 寝《ね》ます。', 'I go to bed at around half past twelve every night.', 'What time does she go to bed?', 'around 12:30', ['around 12:00', 'around 2:30', 'around 11:30']],
    ['朝《あさ》 は 七時《しちじ》 に 起《お》きます。', 'I get up at seven in the morning.', 'What time does he get up?', '7 a.m.', ['1 a.m.', '4 a.m.', '8 a.m.']],
    ['眠《ねむ》る まで 三十分《さんじゅっぷん》 ぐらい かかります。', 'It takes me about thirty minutes to fall asleep.', 'How long does it take her to fall asleep?', 'about 30 minutes', ['about 3 minutes', 'about 13 minutes', 'about 3 hours']],
    ['ご飯《はん》 は 一日《いちにち》 に 一回《いっかい》 しか 食《た》べて いません。', 'I am only eating once a day.', 'How many meals a day is he eating?', 'one', ['two', 'three', 'eight']],
    ['食事《しょくじ》 は 一日《いちにち》 二回《にかい》 です。', 'I have two meals a day.', 'How many meals a day does she have?', 'two', ['one', 'three', 'four']],
    ['この 三日《みっか》 ほとんど 食《た》べて いません。', 'For the past three days I have hardly eaten.', 'For how long has he hardly eaten?', '3 days', ['3 weeks', '6 days', '8 days']],
    ['二週間《にしゅうかん》 前《まえ》 から 眠《ねむ》れません。', 'I have not been able to sleep since two weeks ago.', 'How long has the poor sleep lasted?', '2 weeks', ['2 days', '2 months', '1 week']],
    ['三《さん》か月《げつ》 ぐらい 前《まえ》 から 気分《きぶん》 が 落《お》ち込《こ》んで います。', 'I have been feeling low for about three months.', 'How long has she been feeling low?', 'about 3 months', ['about 3 weeks', 'about 3 days', 'about 6 months']],
    ['四日《よっか》 前《まえ》 から 頭《あたま》 が 痛《いた》い です。', 'I have had a headache since four days ago.', 'When did the headache start?', '4 days ago', ['7 days ago', '8 days ago', '14 days ago']],
    ['一週間《いっしゅうかん》 に 二回《にかい》 ぐらい 頭《あたま》 が 痛《いた》く なります。', 'I get a headache about twice a week.', 'How often does he get headaches?', 'about twice a week', ['about twice a month', 'about once a week', 'about twice a day']],
    ['先月《せんげつ》 の 二十四日《にじゅうよっか》 から 食欲《しょくよく》 が ありません。', 'I have had no appetite since the 24th of last month.', 'Since when has she had no appetite?', 'since the 24th', ['since the 4th', 'since the 14th', 'since the 20th']],
    ['四月《しがつ》 に 仕事《しごと》 が 変《か》わりました。', 'My job changed in April.', 'When did his job change?', 'in April', ['in July', 'in September', '4 months ago']],
    ['七月《しちがつ》 に 一度《いちど》 入院《にゅういん》しました。', 'I was admitted to hospital once, in July.', 'In which month was she admitted?', 'July', ['January', 'April', 'September']],
    ['私《わたし》 は 四十七歳《よんじゅうななさい》 です。', 'I am forty-seven.', 'How old is he?', '47', ['74', '41', '44']],
    ['母《はは》 は 今年《ことし》 八十歳《はちじゅっさい》 に なります。', 'My mother turns eighty this year.', 'How old is her mother turning this year?', '80', ['18', '60', '70']],
    ['うち の 父《ちち》 は 九十歳《きゅうじゅっさい》 です。', 'Our father is ninety.', 'How old is the father?', '90', ['19', '70', '99']],
    ['息子《むすこ》 は 二十歳《はたち》 です。', 'My son is twenty.', 'How old is the son?', '20', ['2', '12', '22']],
    ['四人《よにん》 家族《かぞく》 です。', 'There are four of us in my family.', 'How many people are in his family?', '4', ['3', '5', '7']],
    ['妻《つま》 と 子《こ》ども 二人《ふたり》 と 住《す》んで います。', 'I live with my wife and two children.', 'How many children does he live with?', '2', ['1', '3', '4']],
    ['今《いま》 は 一人《ひとり》 で 暮《く》らして います。', 'I live by myself now.', 'How many people live in her home?', '1 (just her)', ['2', '3', '4']],
    ['家《いえ》 で 猫《ねこ》 を 二匹《にひき》 飼《か》って います。', 'I keep two cats at home.', 'How many cats does she have?', '2', ['1', '3', '10']],
    ['病棟《びょうとう》 は 三階《さんがい》 です。', 'The ward is on the third floor.', 'Which floor is the ward on?', '3rd floor', ['2nd floor', '4th floor', '6th floor']],
    ['外来《がいらい》 は 一階《いっかい》 です。', 'The outpatient clinic is on the first floor.', 'Which floor is the outpatient clinic on?', '1st floor', ['2nd floor', '8th floor', '10th floor']],
    ['次《つぎ》 の 予約《よやく》 は 十四日《じゅうよっか》 です。', 'Your next appointment is on the 14th.', 'When is the next appointment?', 'the 14th', ['the 4th', 'the 10th', 'the 24th']],
    ['次《つぎ》 は 二十日《はつか》 の 午後《ごご》 二時《にじ》 に 来《き》て ください。', 'Please come next on the 20th at two in the afternoon.', 'When is the next visit?', 'the 20th at 2 p.m.', ['the 2nd at 2 p.m.', 'the 20th at 12 noon', 'the 8th at 2 p.m.']],
    ['予約《よやく》 は 九日《ここのか》 の 午前《ごぜん》 十時《じゅうじ》 です。', 'The appointment is on the 9th at ten in the morning.', 'When is the appointment?', 'the 9th at 10 a.m.', ['the 5th at 10 a.m.', 'the 9th at 10 p.m.', 'the 10th at 9 a.m.']],
    ['退院《たいいん》 は 十日《とおか》 の 予定《よてい》 です。', 'Discharge is planned for the 10th.', 'When is discharge planned?', 'the 10th', ['the 1st', 'the 4th', 'the 8th']],
    ['診察《しんさつ》 は 十時《じゅうじ》 十分《じゅっぷん》 から です。', 'The consultation starts at ten past ten.', 'What time is the consultation?', '10:10', ['10:00', '10:30', '1:10']],
    ['診察《しんさつ》 は 二時《にじ》 四十五分《よんじゅうごふん》 から です。', 'The consultation starts at two forty-five.', 'What time is the consultation?', '2:45', ['2:15', '2:40', '7:45']],
    ['面会《めんかい》 は 午後《ごご》 三時《さんじ》 から です。', 'Visiting hours start at three in the afternoon.', 'When do visiting hours start?', '3 p.m.', ['3 a.m.', '2 p.m.', '4 p.m.']],
    ['九時《くじ》 まで に 来《き》て ください。', 'Please come by nine.', 'By what time should the patient come?', '9:00', ['5:00', '7:00', '10:00']],
    ['コーヒー は 一日《いちにち》 に 五杯《ごはい》 ぐらい 飲《の》みます。', 'I drink about five cups of coffee a day.', 'How many cups of coffee does he drink a day?', 'about 5 cups', ['about 1 cup', 'about 3 cups', 'about 9 cups']],
    ['お酒《さけ》 は 週末《しゅうまつ》 に ビール を 二杯《にはい》 ぐらい 飲《の》みます。', 'As for alcohol, I drink about two glasses of beer on the weekend.', 'How much beer does she drink on the weekend?', 'about 2 glasses', ['about 3 glasses', 'about 7 glasses', 'about 10 glasses']],
    ['先生《せんせい》 に 夕食《ゆうしょく》 の 後《あと》 に 一錠《いちじょう》 飲《の》む よう に 言《い》われました。', 'The doctor told me to take one tablet after dinner.', 'How many tablets after dinner?', '1 tablet', ['2 tablets', '3 tablets', '8 tablets']]
  ]
};
