# N2 lessons, second half (Hanashimashō 0.22.0)

Level `N2` for every lesson. One file per unit, three lessons per file, in this order. Ids, units and patterns are fixed;
the title wording is yours (Japanese pattern names with furigana, then a short plain-English job, like the first-half titles).

READ FIRST, besides LESSON-BRIEF.md: `/home/claude/work/briefs-0.21/N2-LESSON-PLAN.md` (the first half: its "N2 differences"
and "Clinical content rules" sections apply to you unchanged, and its 24 lessons list what is ALREADY taught: do not
re-teach those patterns, link to them with `<a href="#/lessons/ID">` and contrast). Read one first-half file
(`js/data/lessons-16.js` or `lessons-17.js`) as the model for length, tone, the "say / understand" marking and spacing.
Body 4,000–6,500 characters, 12–18 examples, 6 quiz questions.

Spacing conventions of the first half (keep them): auxiliary endings joined to their verb (崩《くず》しかねません, 言《い》いがたい,
やり抜《ぬ》く); particles separate (に 反《はん》して, を きっかけ に, に も かかわらず); a token ending in は is romanised "ha" unless
it is は, では, とは, には: so write `に かけて は`, `と して は`, `に よって は` with は as its own word.
Names already used in the app (give them no new facts): 佐藤, 田中, 高橋, 山田, 山本, 中村, 伊藤, 小林, 井上, 岡田, 松本, 木村.
Use others: 森《もり》さん, 林《はやし》さん, 石井《いしい》さん, 西村《にしむら》さん, 藤田《ふじた》さん, 長谷川《はせがわ》さん.

## lessons-20.js — unit `Timing and turning points`
25. `n2-ka-to-omou-to` — 〜か と 思《おも》う と / 思《おも》ったら, 〜か 〜ない か の うち に, 〜て はじめて, 〜て から で ない と: no sooner … than, barely had … when, only after, not until (contrast N3 `irai-totan-shidai`).
26. `n2-saichuu` — 〜最中《さいちゅう》 (に), 〜際《さい》 (に / は), 〜折《おり》 (に), 〜に 当《あ》たる (date / occasion): right in the middle of, on the occasion of (notices, forms), when the chance comes (letters). Contrast N3 `aida-uchi` and first-half `n2-ni-oite`.
27. `n2-wo-kikkake-ni` — 〜を きっかけ に, 〜を 契機《けいき》 に, 〜を 通《つう》じて / 通《とお》して, 〜に わたって / わたる, 〜を 経《へ》て: triggered by, through (a person, a period), over (a span), after going through. History-taking: what started it, how long it lasted.

## lessons-21.js — unit `Contrast and supposition`
28. `n2-ni-hanshite` — 〜に 反《はん》して / 反《はん》する, 〜反面《はんめん》, 〜の に 対《たい》して (contrast use), 〜と は 逆《ぎゃく》 に: contrary to (expectations, wishes), on the other side of the coin (a medicine helps but…: no names or doses). Contrast N3 `contrast`.
29. `n2-nimo-kakawarazu` — 〜に も かかわらず, 〜ながら (も), 〜から と いって, 〜と いって も: despite, while / although (残念《ざんねん》ながら), just because … does not mean, even though I say.
30. `n2-to-shitara` — 〜と したら / と すれば / と する と, 〜と しても, 仮《かり》 に 〜と しても, 万一《まんいち》 〜場合《ばあい》 (は): supposing, even supposing, in the unlikely event (safety-plan and notice language; general, no methods). Contrast N3 `hypotheticals`, `even-supposing`.

## lessons-22.js — unit `Appearance and difficulty`
31. `n2-ge-darake` — 〜げ, 〜だらけ, 〜っぽい (contrast with N3 `tendencies`), 〜向《む》き / 〜向《む》け: looking (sad, anxious: MSE description of appearance and affect), covered in / full of, -ish, suitable for / aimed at.
32. `n2-gatai` — 〜がたい, 〜づらい (and 〜にくい), 〜よう が ない / 〜よう も ない: hard to (believe, accept), hard to (say, ask: physically or emotionally), there is no way to. Contrast first-half `n2-kanenai` (〜かねる).
33. `n2-ka-no-you-ni` — 〜か の よう だ / よう に, 〜と 見《み》えて / 見《み》える, 〜とか (で), 〜と いう こと だ / 〜との こと: as if, it seems (from evidence), I hear (unsure), it is reported that (handover and family reports). Contrast N3 `hearsay`.

## lessons-23.js — unit `Topic, dependence and addition`
34. `n2-to-ieba` — 〜と いえば / と いう と / と いったら, 〜に かけて は, 〜に 関《かん》して / 関《かん》する, 〜と なる と: speaking of, when it comes to (skill), concerning (formal), once it comes to.
35. `n2-shidai-de` — 〜次第《しだい》 で / 次第《しだい》 だ (depends on), 〜た 次第《しだい》 です (formal report of how things came about), 〜に よって は, 〜の もと で / もと に: depending on, in some cases, under (a doctor's guidance, a policy). Contrast N3 次第 "as soon as" in `irai-totan-shidai`.
36. `n2-ue-ni` — 〜上《うえ》 (に), 〜に 加《くわ》えて, 〜も 〜ば 〜も / 〜も 〜なら 〜も, 〜のみ か: on top of, in addition to, both … and. Contrast first-half 〜た 上 で (`n2-ue-de`) and `n2-bakari-ka`.

## lessons-24.js — unit `Advice, wishes and negative guesses`
37. `n2-koto-wa-nai` — 〜こと は ない, 〜まで も ない, 〜に 決《き》まって いる, 〜と いう もの では ない: there is no need to (reassurance: 自分《じぶん》 を 責《せ》める こと は ありません), it goes without saying, it is bound to, it is not simply the case that. Link N3 `beki-mono-koto`.
38. `n2-you-dewa-nai-ka` — 〜よう では ない か / 〜よう じゃ ない か, 〜ない もの (だろう) か, 〜たい もの だ / 〜て ほしい もの だ: let us (speeches, conferences), can't something be done, I do wish (formal wish).
39. `n2-mai` — 〜まい (negative will and negative guess), 〜では ある まい か, 〜よう か 〜まい か, 〜まい と する: I will not / probably not (written), might it not be, whether to or not, trying not to (cry, worry the family).

## lessons-25.js — unit `Emphasis and limits`
40. `n2-te-koso` — 〜て こそ, 〜こそ 〜が, 〜まで (even), 〜て まで / 〜まで して, 〜など / なんか (belittling or modest: 私《わたし》 なんか, link N3 note on passive death wish in the N3 lesson on なんか if present): only by doing, even going so far as. Contrast first-half 〜から こそ (`n2-kara-koso`).
41. `n2-dake` — 〜だけ (できる だけ, 好《す》き な だけ), 〜だけ の (enough to), 〜だけ まし だ, 〜だけ の こと は ある: as much as, enough … to, at least it is better than, no wonder / worth it. Contrast first-half 〜だけ に / だけ あって.
42. `n2-nuku` — 〜抜《ぬ》く, 〜通《とお》す, 〜切《き》れない (contrast N3 `compound-verbs`), 〜かけ (の) / 〜かける: do to the very end, keep through, cannot finish / cannot fully, half-done. Validation lines (よく 頑張《がんば》り抜《ぬ》かれました ね is for the reviewer to judge; prefer safe lines).

## lessons-26.js — unit `Keigo, letters and chart style`
43. `n2-keigo-2` — working keigo beyond the N4 lessons (`keigo`, `sonkeigo`, `kenjougo`): 〜て おります, 〜で ございます, 〜させて いただきます (and its overuse), お / ご〜いただく, お / ご〜ください, お / ご〜願《ねが》います, 〜いたします, cushion words (恐《おそ》れ入《い》ります が, お手数《てすう》 です が, 差《さ》し支《つか》え なければ): at reception, on the phone, with families.
44. `n2-tegami` — letters and referral letters (mostly UNDERSTAND): opening and closing words (拝啓《はいけい》 … 敬具《けいぐ》), 平素《へいそ》 より, 〜の ほど よろしく お願《ねが》い 申《もう》し上《あ》げます, 〜いただけます と 幸《さいわ》い です, 〜と 存《ぞん》じます, 〜に つきまして, ご高診《こうしん》 / ご加療《かりょう》; one short SAMPLE referral letter labelled "sample" (fictional, generic, no medicine names or doses, no hospital names).
45. `n2-karute` — chart and report style (UNDERSTAND; link N3 `written-style`): である style, sentences ending in a noun, 〜を 認《みと》める / 認《みと》めず, 〜あり / なし, 〜との こと, 〜に て, 〜のみ, 及《およ》び / 並《なら》び に / 又《また》 は, 〜を 要《よう》する, 〜と 思《おも》われる / 考《かんが》えられる, 〜傾向《けいこう》 に ある. One short SAMPLE progress note labelled "sample" (fictional; no doses, no lab or vital-sign numbers).

## lessons-27.js — unit `Connectors and set phrases`
46. `n2-setsuzokushi` — written and formal connectors: したがって, それゆえ, ところが, それ に して も, すなわち, 要《よう》する に, なお, ただし, もっとも, いわば, 一方《いっぽう》 (sentence-initial): what each signals when reading notices, letters and papers; which ones to say in a conference.
47. `n2-wa-tomokaku` — 〜は ともかく (と して), 〜は さておき, 〜を 除《のぞ》いて (は), 〜は 別《べつ》 と して, 〜抜《ぬ》き で / 〜を 抜《ぬ》き に して (は): setting aside, apart from, except for, without.
48. `n2-wo-komete` — 〜を こめて, 〜に つけ (て) / 〜に つけ 〜に つけ, 〜ふう (に), 〜て ならない / 〜て しょうがない (contrast N3 `strong-feelings`): with (feeling) put in, whenever / whether … or, in the manner of, cannot help feeling (patients' and families' words).
