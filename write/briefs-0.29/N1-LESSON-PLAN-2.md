# N1 lessons, second half (Hanashimashō 0.29.0)

Level `N1` for every lesson. One file per unit, three lessons per file, in this order. Ids, units and patterns are fixed;
the title wording is yours (Japanese pattern names with furigana, then a short plain-English job, like the N2 and
first-half N1 titles). N1 lessons carry NO `after` field: they load after every other lesson, so these sit after the
first-half N1 lessons (`js/data/lessons-45.js` to `lessons-52.js`: read two of them as the model for length, tone,
formation tables and the say / understand marks).

Everything in `/home/claude/devtools/write/briefs-0.28/N1-LESSON-PLAN.md` under "N1 differences from N2 lessons" and
"Clinical content rules" holds here too: read that file first. In short: mark every pattern "say" or "understand" with its
register and, for "understand", the plain form to say instead; one example in the register where the pattern really
lives; exact formation; body 4,000–6,500 characters without readings and without tags; 12–18 examples; 6 quiz questions
with exactly 3 options; no sentence that depends on today's date; no quiz item whose options differ only in a reading;
quiz stems and examples must not copy a sentence already in the app.

Do NOT re-teach a pattern the app already teaches. Before writing, grep ALL existing lessons for each of your patterns
(`grep -l "PATTERN" /home/claude/japanese/js/data/lessons-*.js`, try it with and without spaces between the words). If a
pattern is already taught (N3, N2 or first-half N1), give it a three-line reminder with a link
(`<a href="#/lessons/ID">`) and spend the space on the others. First-half N1 ids: n1-ga-hayai-ka,
n1-te-kara-to-iu-mono, n1-katawara, n1-ni-itaru, n1-kiwamarinai, n1-sura, n1-to-areba, n1-nakushite, n1-ga-saigo,
n1-to-iedomo, n1-de-are, n1-ni-hikikae, n1-yue, n1-ni-sokushite, n1-nari-ni, n1-meku, n1-to-bakari-ni, n1-tsu-tsu,
n1-bekarazu, n1-wo-yoginaku, n1-ni-katakunai, n1-de-nakute-nan-darou, n1-kirai-ga-aru, n1-ni-shite. The 24 ids below
also count as existing: link to a sibling lesson by its id.

Spacing conventions (as in the first half): auxiliary endings joined to their verb, particles separate, は / へ / を
always separate words; a token ending in は that is not では, とは, には is split (に して は, と あって は); する-nouns
joined (勉強《べんきょう》します); `もの を` split; stem + がてら joined; `す べく` / `す べからず`. New here: `ん が ため`
after the ない-stem written joined to the verb (勝《か》たん が ため), `いかん` one word, `ものともせず` one word,
`ともなると` / `ともなれば` one word, `思《おも》いきや` one word, `ずじまい` joined to its verb stem (行《い》かずじまい),
`なりとも` one word, `こそすれ` → `こそ すれ`, `しかるべき` one word, `ならでは の` → `なら では の`.

## lessons-53.js — unit `Purpose, dependence and defiance`
1. `n1-n-ga-tame` — 〜ん が ため (に / の), 〜ん と する / 〜ん と して, 〜(よ)う に も 〜ない, 〜べく (reminder, link n1-bekarazu): for the sake of doing (written, speeches), be about to / try to, cannot even if one wants to.
2. `n1-ikan` — 〜いかん だ / いかん で (は) / いかん に よって は, 〜いかん に よらず / いかん に かかわらず / いかん を 問《と》わず: depends on, depending on, regardless of (consent forms, notices, rules). Link N2 `n2-shidai-de`. Write "follow local law and your hospital's policy"; no claim about any law.
3. `n1-wo-mono-tomo-sezu` — 〜を ものともせず (に), 〜を よそ に, 〜を 押《お》して / 押《お》し切《き》って, 〜を 顧《かえり》みず / も 顧《かえり》みず: undaunted by, ignoring (others' worry), in spite of (opposition, illness), without regard for. 〜を よそ に and 〜を 顧みず can blame: never aimed at a patient or family in what the resident says; say so.

## lessons-54.js — unit `Occasions, pretexts and turning points`
4. `n1-ni-kakotsukete` — 〜に かこつけて, 〜を いい こと に, 〜に かまけて, 〜に 乗《じょう》じて: using as a pretext, taking advantage of, being too taken up with, seizing (an opening). All can sound critical: use about oneself or in neutral reports; say so.
5. `n1-wo-hete` — 〜を 経《へ》て, 〜を 境《さかい》 に, 〜を 控《ひか》えて / に 控《ひか》えて, 〜に 先駆《さきが》けて: after going through (stages, a conference, years), with … as the turning point, with … close at hand, ahead of (others). Link N2 `n2-wo-kikkake-ni`.
6. `n1-to-mo-naru-to` — 〜ともなると / ともなれば, 〜とも あろう 者《もの》 が, 〜と きたら, 〜に した ところ で / と した ところ で: when it comes to (a stage or rank), someone of that standing (reproach: use about oneself or in reported speech only), as for (complaint, family talk), even for / even from that standpoint.

## lessons-55.js — unit `Surprise, emphasis and giving up`
7. `n1-to-ittara-nai` — 〜と いったら ない / 〜ったら ない, 〜こと この 上《うえ》 ない, 〜とは (surprise at the end of a sentence; link N2 `n2-to-wa` if it teaches this), 〜限《かぎ》り だ (reminder, link `n2-kagiri-da`): indescribably, nothing could be more, to think that.
8. `n1-tada-nomi` — ただ 〜のみ, ひとり 〜のみ ならず / だけ で なく, 〜こそ すれ / こそ あれ 〜ない, 〜のみ か: only (written), not only … alone, may well … but never, not only (literary).
9. `n1-ba-sore-made` — 〜ば それ まで だ, 〜て も 始《はじ》まらない, 〜て も もともと だ (だめ で もともと), 〜て も 差《さ》し支《つか》えない: that is the end of it, there is no use, nothing lost by trying, there is no objection to (formal permission; notices and doctors' formal speech).

## lessons-56.js — unit `Concession and half-commitment`
10. `n1-ta-tokoro-de` — 〜た ところ で (〜ない), 〜に したって / に した ところ で (reminder, link n1-to-mo-naru-to), 〜く とも / 〜とも (遅《おそ》く とも, 少《すく》なく とも, 何《なに》 が あろう とも), 〜と は いう ものの (reminder if N2 teaches it): even if one does (it will not help), at the latest / at least / whatever may. Never use 〜た ところ で to tell a patient that trying is useless; say so.
11. `n1-nai-mono-demo-nai` — 〜ない もの でも ない, 〜ない もの か / 〜ない もの だろう か, 〜もの と する / もの と して, 〜もの と 思《おも》われる: it is not impossible that I might, can't it somehow be (a wish), shall be deemed (contracts, rules, consent forms), is thought to (reports).
12. `n1-to-omoikiya` — 〜と 思《おも》いきや, 〜か 否《いな》 か, 〜と (は) 裏腹《うらはら》 に, 〜か と 思《おも》えば (reminder if N2 teaches it): just when one thought, whether or not (written), contrary to (words, expectations). Link `n2-ni-hanshite`.

## lessons-57.js — unit `Relations, lists and word-building`
13. `n1-ni-kakawaru` — 〜に かかわる (命《いのち》 に かかわる), 〜に かかって いる, 〜に まつわる, 〜を めぐって / めぐる (reminder if N2 teaches it): that bears on / affects, hinges on, connected with (stories, memories), concerning (a dispute).
14. `n1-to-ii-to-ii` — 〜と いい 〜と いい, 〜と いう か 〜と いう か, 〜だの 〜だの, 〜と も 〜と も つかない: both in … and in …, call it … or call it …, … and … and what not (complaint), cannot tell whether … or ….
15. `n1-nami-gurumi` — 〜並《な》み, 〜ぐるみ, 〜びる / 〜びた (大人《おとな》びる, 古《ふる》びた), 〜じみる / 〜じみた (子供《こども》じみた, 所帯《しょたい》じみた), 〜がかる / 〜がかった (芝居《しばい》がかった, 青《あお》みがかった): on a par with, the whole … together (家族《かぞく》ぐるみ, 地域《ちいき》ぐるみ), -like suffixes. 〜じみた and 芝居がかった judge: never used of a patient or family in the resident's lines or notes; say so and give the neutral description to write instead.

## lessons-58.js — unit `Limits, missed chances and restraint`
16. `n1-te-made` — 〜て まで / 〜まで して, 〜なりとも (一目《ひとめ》 なりとも, 多少《たしょう》 なりとも), 〜だけ まし だ, 〜に 越《こ》した こと は ない: go as far as, even just a little, at least it is better than, nothing is better than.
17. `n1-zu-jimai` — 〜ずじまい, 〜そびれる, 〜損《そこ》なう / 〜損《そこ》ねる, 〜あぐねる (考《かんが》えあぐねる, 探《さが》しあぐねる): ended up never doing, miss the chance to, fail to / nearly, be at a loss after trying. Good for histories (聞《き》きそびれる, 言《い》いそびれる). Keep 〜損なう examples to everyday ones (乗《の》り損なう, 食《た》べ損なう, 機嫌《きげん》 を 損ねる); no risk content with this pattern.
18. `n1-ni-wa-ataranai` — 〜に は 当《あ》たらない, 〜に 忍《しの》びない, 〜と 言《い》って も 過言《かごん》 では ない, 〜を 余儀《よぎ》なく (reminder, link n1-wo-yoginaku): there is no call to (be surprised, blame), cannot bring oneself to, it is no exaggeration to say.

## lessons-59.js — unit `Old forms that are still alive`
19. `n1-zaru-nu` — 〜ざる (知《し》られざる, 欠《か》く べからざる as reminder), 〜ぬ / 〜ん (知《し》らぬ, 思《おも》わぬ, 〜ません comes from it), 〜ず とも, 〜ず して, 〜ねば (ならない): classical negatives still met in titles, set phrases, older patients' speech and formal writing. Link N2 `n2-zaru-wo-enai`, N3 `without-doing`.
20. `n1-ikanaru` — いかなる 〜も / いかなる 〜で あれ, いかに 〜て も / いかに 〜(よ)う とも, いずれ に せよ / いずれ に して も, 何《なん》ら 〜ない: whatever kind of, however much, in any case, not in the least (notices, consent forms, reports). Link n1-de-are.
21. `n1-te-shikarubeki` — 〜て しかるべき だ, 〜を もって すれ ば / を もって して も, 〜しめる (言《い》わしめる, あら しめる: recognise only), 〜に 値《あたい》する (reminder if N2 teaches it): ought by rights to, with / even with (ability, technology), classical causative, worthy of.

## lessons-60.js — unit `Formal Japanese at work`
22. `n1-keigo-3` — the top layer of keigo, mostly for letters, e-mail and formal occasions: 賜《たまわ》る (ご指導《しどう》 を 賜《たまわ》り), 〜申《もう》し上《あ》げます (お礼《れい》 / お詫《わ》び / お願《ねが》い), 拝《はい》〜 (拝見《はいけん》, 拝受《はいじゅ》, 拝察《はいさつ》), 〜て いただければ 幸《さいわ》い です / 幸甚《こうじん》 です, ご査収《さしゅう》 ください, お褒《ほ》め に あずかる, 〜て おります / 存《ぞん》じます (reminder). Link `n2-keigo-2`, `n2-tegami`. Say which ones a resident really says (few) and which are for writing.
23. `n1-ronbun` — the written style of case reports, papers and conference abstracts: 〜と 考《かんが》えられる / 思《おも》われる / 推察《すいさつ》 される, 〜を 呈《てい》した / 認《みと》めた / 来《きた》した, 〜に 鑑《かんが》み (て), 〜を 要《よう》する, 〜の 一助《いちじょ》 と なる, 〜と の 報告《ほうこく》 が ある (as a FORM only: invent no findings, statistics or study claims). Link `n2-karute`, n1-ni-itaru. Sample sentences are labelled as samples: fictional, no medicine names, doses, numbers or hospital names.
24. `n1-aisatsu` — speeches and formal greetings a resident gives or hears (welcome and farewell parties, the opening of a study meeting, a short thank-you speech): 〜に あたり / に あたって (reminder if N2 teaches it), 僭越《せんえつ》 ながら, 〜を もちまして (link n1-te-kara-to-iu-mono), ご指導《しどう》 ご鞭撻《べんたつ》 の ほど, 〜の ほど お願《ねが》い 申《もう》し上《あ》げます, 末筆《まっぴつ》 ながら, 〜を 祈念《きねん》して, 〜て やみません (link n1-kirai-ga-aru). Give one complete short sample speech (labelled sample) the learner could adapt.

## People
Names with fixed facts elsewhere in the app (do not give them new facts; avoid them for new people): 佐藤, 田中, 高橋, 山田,
山本, 中村, 伊藤, 小林, 井上, 岡田, 松本, 長谷川, 石井, 森, 藤田, 小川, 林, 西村, 大野, 近藤, 木村, and in the 0.29.0 readings
and dialogues 三浦, 福田, 青木, 太田, 坂本, 岡本. Use other names with furigana, e.g. 吉田《よしだ》さん, 池田《いけだ》さん,
橋本《はしもと》さん, 清水《しみず》さん, 山口《やまぐち》さん, 阿部《あべ》先生.
