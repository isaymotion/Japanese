# N1 lessons, first half (Hanashimashō 0.28.0)

Level `N1` for every lesson. One file per unit, three lessons per file, in this order. Ids, units and patterns are fixed;
the title wording is yours (Japanese pattern names with furigana, then a short plain-English job, like the N2 titles).
N1 lessons carry NO `after` field: they load after every other lesson and so sit after N2.

The learner has finished all N5, N4, N3 and N2 lessons (`js/data/lessons-12.js` to `lessons-27.js` are N2; read two of
them as the model for N1 length, tone and the say / understand marks, and link back with `<a href="#/lessons/ID">` where
you contrast a pattern). Do NOT re-teach an N3 or N2 pattern: before writing, grep the existing lessons for each of your
patterns (`grep -l "PATTERN" js/data/lessons-*.js`); if one is already taught, give it a three-line reminder with a link
and spend the space on the others. N2 ids worth linking: n2-ni-tsurete, n2-tsutsu, n2-ue-de, n2-ni-kagirazu, n2-bakari-ka,
n2-wo-hajime, n2-kara-miru-to, n2-ni-motozuite, n2-ni-oite, n2-kara-koso, n2-kara-ni-wa, n2-amari, n2-kanenai,
n2-ni-suginai, n2-ppanashi, n2-zaru-wo-enai, n2-te-wa-irarenai, n2-kagiri-da, n2-mono, n2-koto, n2-tokoro,
n2-ni-shite-wa, n2-mushiro, n2-to-wa, n2-ka-to-omou-to, n2-saichuu, n2-wo-kikkake-ni, n2-ni-hanshite,
n2-nimo-kakawarazu, n2-to-shitara, n2-to-ieba, n2-shidai-de, n2-ue-ni, n2-ge-darake, n2-gatai, n2-ka-no-you-ni,
n2-koto-wa-nai, n2-you-dewa-nai-ka, n2-mai, n2-te-koso, n2-dake, n2-nuku, n2-setsuzokushi, n2-wa-tomokaku,
n2-wo-komete, n2-keigo-2, n2-tegami, n2-karute. N3: written-style, strong-feelings, even-supposing, contrast.

N1 differences from N2 lessons:
- Most N1 patterns are WRITTEN or FORMAL: newspaper and journal prose, official notices, speeches, guidelines, case
  reports, letters, and the careful speech of older or educated patients and families. A resident mostly needs to
  UNDERSTAND them and rarely to say them. Mark every pattern "say" or "understand" and its register (spoken, formal
  spoken, written, literary / set phrase), as the N2 lessons do, and for every "understand" pattern give the plain
  spoken equivalent the resident should say instead (〜や 否や → 〜と すぐ).
- Give at least one example per pattern in the register where it really lives (a notice, a line of a case report, a
  sentence of a speech, an older patient talking), besides any spoken examples. Many N1 patterns live in fixed
  collocations (感激 の 極み, 想像 に 難くない, 同情 を 禁じ得ない): teach the common ones as set phrases.
- State what each pattern attaches to exactly (dictionary form, た-form, ない-stem, noun, する-noun) in the formation table.
- Vocabulary may go up to N1 plus common clinical words. Every kanji still needs its reading.
- Body 4,000–6,500 characters without counting the readings, 12–18 examples, 6 quiz questions with exactly 3 options.
- Spacing conventions of the N2 lessons hold: auxiliary endings joined to their verb (禁《きん》じ得《え》ない,
  余儀《よぎ》なく される → 余儀《よぎ》なく is one word), particles separate, は / へ / を always separate words; a token
  ending in は that is not on the list では, とは, には is split (に して は, と あって は, なくして は).
- No sentence may depend on today's date or the calendar. No quiz item whose options differ only in a reading.

## lessons-45.js — unit `The moment something happens`
1. `n1-ga-hayai-ka` — 〜が 早《はや》いか, 〜や / 〜や 否《いな》や, 〜なり, 〜そばから: the instant, no sooner than, as soon as (and each time). Contrast N2 `n2-ka-to-omou-to` and N3 `irai-totan-shidai`.
2. `n1-te-kara-to-iu-mono` — 〜て から と いう もの, 〜を 皮切《かわき》り に, 〜を 限《かぎ》り に, 〜を もって: ever since, starting with, as of / with this (notices: 本日《ほんじつ》 を もって).
3. `n1-katawara` — 〜かたわら, 〜がてら, 〜かたがた, 〜ながら に (生《う》まれながら に, 涙《なみだ》ながら に): alongside one's main work, while on the way, partly to, in the state of.

## lessons-46.js — unit `Reaching the extreme`
4. `n1-ni-itaru` — 〜に 至《いた》る, 〜に 至《いた》って (は), 〜に 至《いた》る まで, 〜に 至《いた》って も: come to, when it reached the point of, down to every, even at that point (case reports: 入院《にゅういん》 に 至《いた》った 経過《けいか》).
5. `n1-kiwamarinai` — 〜極《きわ》まる / 極《きわ》まりない, 〜の 極《きわ》み, 〜の 至《いた》り, 〜に 堪《た》えない / 堪《た》える: extremely, the height of, deeply (set phrases of thanks and regret), cannot bear to / worth.
6. `n1-sura` — 〜すら / で すら, 〜だに, 〜たり とも, 〜は おろか: even, not even one, let alone (a patient who cannot even get up). Contrast N3 `dake-shika-sae` (さえ).

## lessons-47.js — unit `If and only if`
7. `n1-to-areba` — 〜と あれば, 〜と あって, 〜と あって は, 〜なら いざ 知《し》らず: if it is for, being (a special situation), if it comes to that, it might be different for … but.
8. `n1-nakushite` — 〜なくして (は), 〜なし に (は), 〜抜《ぬ》き に して / 抜《ぬ》き で は, 〜を おいて (ほか に ない): without (consent, family support), leaving aside, no one but.
9. `n1-ga-saigo` — 〜が 最後《さいご》 / 〜たら 最後《さいご》, 〜よう もの なら, 〜なら まだしも, 〜たら 〜た で: once … there is no stopping, if one should happen to, it would be one thing if, even when … then.

## lessons-48.js — unit `Even so`
10. `n1-to-iedomo` — 〜と いえども, 〜とは いえ, 〜ながら (も), 〜ものを: even though one is, that said, although, if only you had (regret, mild blame: gentle use only).
11. `n1-de-are` — 〜で あれ / で あろう と, 〜(よ)う が / 〜(よ)う と, 〜(よ)う が 〜まい が, 〜で あれ 〜で あれ: whatever, no matter, whether or not. Link N2 `n2-mai` and `n2-ni-shite-wa` (に せよ).
12. `n1-ni-hikikae` — 〜に ひきかえ, 〜に も まして, 〜ない まで も, 〜と 相《あい》まって: in contrast to, even more than, if not quite, combined with.

## lessons-49.js — unit `Grounds and standards`
13. `n1-yue` — 〜ゆえ (に / の), 〜こと とて, 〜ば こそ, 〜手前《てまえ》: because (written), since (apology: 慣《な》れない こと とて), precisely because, since I said so / in front of.
14. `n1-ni-sokushite` — 〜に 即《そく》して, 〜に 照《て》らして, 〜を 踏《ふ》まえて, 〜に のっとって: in line with, in the light of, on the basis of, following (rules, guidelines, conference language). Write "follow local law and your hospital's policy"; no claim about any law. Link `n2-ni-motozuite`.
15. `n1-nari-ni` — 〜なり に / なり の, 〜たる (者《もの》), 〜に あって, 〜と して 〜ない (一人《ひとり》 と して): in one's own way, one who is a, in (a situation), not a single.

## lessons-50.js — unit `How it looks and sounds`
16. `n1-meku` — 〜めく, 〜ぶる, 〜まみれ, 〜ずくめ, 〜がましい: showing signs of, putting on airs of, covered in, nothing but, sounding like (押《お》しつけがましい). Contrast N2 `n2-ge-darake`.
17. `n1-to-bakari-ni` — 〜と ばかり に, 〜ん ばかり (に / の / だ), 〜か の ごとく / ごとき, 〜とも なく / とも なし に: as if to say, on the verge of, as though (literary), without really meaning to. Link `n2-ka-no-you-ni`.
18. `n1-tsu-tsu` — 〜つ 〜つ (行《い》きつ 戻《もど》りつ), 〜なり 〜なり, 〜と いわず 〜と いわず, 〜で あれ 〜で あれ (reminder, link n1-de-are), 〜も さること ながら: paired patterns: back and forth, either … or, not only … but all over, A is one thing but B even more.

## lessons-51.js — unit `Must, must not, cannot`
19. `n1-bekarazu` — 〜べからず / べからざる, 〜べく, 〜べく も ない, 〜まじき: must not (old signs), in order to (formal), cannot possibly, unbecoming of (医師《いし》 に ある まじき). Link N3 `beki-mono-koto` and the Signs page (`<a href="#/signs">`).
20. `n1-wo-yoginaku` — 〜を 余儀《よぎ》なく される / させる, 〜ず に は すまない / 〜ない では すまない, 〜ず に は おかない, 〜を 禁《きん》じ得《え》ない: be forced to, cannot get away without, will surely cause, cannot hold back (a feeling). Link `n2-zaru-wo-enai`.
21. `n1-ni-katakunai` — 〜に 難《かた》くない, 〜に 足《た》る / 足《た》りない, 〜に は 及《およ》ばない, 〜まで も ない / 〜まで (の こと) だ: easy to (imagine), worth / not worth, no need to, goes without saying / will simply.

## lessons-52.js — unit `Judging and summing up`
22. `n1-de-nakute-nan-darou` — 〜で なくて 何《なん》 だろう, 〜以外《いがい》 の 何物《なにもの》 でも ない, 〜と いった ところ だ, 〜に とどまらず: what is this if not, nothing but, about … at most, not stopping at. Link `n2-ni-suginai`.
23. `n1-kirai-ga-aru` — 〜きらい が ある, 〜始末《しまつ》 だ, 〜て は かなわない, 〜て やまない: tends to (a criticism: use about oneself or in neutral reports, never to label a patient), ended up (a bad result), cannot stand, never cease to (hope, wish).
24. `n1-ni-shite` — 〜に して (はじめて / 〜に して ようやく), 〜あって の, 〜から ある / 〜から する / 〜から の, 〜と いう もの (この 一週間《いっしゅうかん》 と いう もの): only at / even for, thanks to the existence of, as much as, for this whole (period).

## Clinical content rules (in addition to the brief)
- No method detail, no medicine names, doses or numbers of tablets in anything about self-harm, overdose or misuse.
  Risk examples stay general. A patient line that hints at wanting to die or disappear may appear only if the lesson
  also shows the resident acknowledging and asking gently and directly (死《し》にたい と 思《おも》う こと は あります か);
  when in doubt leave such lines out.
- 〜始末 だ, 〜きらい が ある, 〜まじき, 〜ぶる, 〜がましい and 〜ものを can sound judgemental: never aim them at a patient
  or family member in an example of what the resident says; say so in the lesson.
- No claims about Japanese law, the Mental Health Act or services; for admission rules write "follow local law and your
  hospital's policy". Crisis: "the local crisis line"; the only number is ｜119番《ひゃくじゅうきゅうばん》.
- Patient and staff names already used in the app (do not give them new facts): 佐藤, 田中, 高橋, 山田, 山本, 中村, 伊藤,
  小林, 井上, 岡田, 松本, 長谷川, 石井, 森, 藤田, 小川, 林, 西村, 大野, 近藤, 木村. Use other names with furigana, e.g.
  青木《あおき》さん, 坂本《さかもと》さん, 福田《ふくだ》さん, 太田《おおた》さん, 三浦《みうら》さん, 岡本《おかもと》先生.
- Everyday examples stay away from wounds and from anything that reads as encouragement to harm.
