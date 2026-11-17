# Hanashimashō 0.24.0 plan: "Picture words, signs and buttons, picture lessons"
Repo /home/claude/japanese (branch wip-0.24.0). Helpers /home/claude/devtools (qa/, write/), working copies in /home/claude/work.
Learner: an English-speaking psychiatry resident, beginner. This build is N5 and N4 vocabulary learned from pictures.
Rules that never change: tools/AUTHORING.md notation on EVERY Japanese string (reading in 《》 after every kanji run, one
space between words, particles separate); all Japanese is draft; no medicine names, doses or method detail; "the local
crisis line", only number 119; "follow local law and your hospital's policy"; no real brands, hospitals or people; no git
commands by agents; one agent = the file(s) named in its brief.

## A. Data shapes
### A1. Picture sets: js/data/picture-sets-<group>.js (one file per group)
```
window.PICTURE_SETS = (window.PICTURE_SETS || []).concat([
  { id: 'body-front', group: 'body', title: 'The body (front)', lv: 'N5', kind: 'diagram', art: 'body-front',
    intro: 'One English sentence on what this picture teaches.',
    parts: [ { id: 'atama', w: '頭《あたま》', en: 'head', lv: 'N5', x: 150, y: 28 }, … ],      // 8 to 16 parts
    say:   [ { ja: '頭《あたま》 が 痛《いた》い です。', en: 'My head hurts.', p: 'atama' }, … ] }, // 6 to 10 sentences
  { id: 'pets-farm', group: 'animals', title: 'Pets and farm animals', lv: 'N5', kind: 'cards',
    intro: '…', parts: [ { id: 'inu', w: '犬《いぬ》', en: 'dog', lv: 'N5', pic: '🐕' }, … ], say: [ … ] }
]);
```
- `kind: 'diagram'`: `art` names an entry of window.PICTURE_ART (A2). Each part has `x`, `y` = the point ON the thing, in
  the art's viewBox units; the app draws a numbered pin there. Pins must be at least 26 units apart and inside the box.
- `kind: 'cards'`: each part has `pic` = ONE emoji from Unicode Emoji 12.0 (2019) or older (no newer emoji, no flags, no
  skin-tone or ZWJ sequences), clearly showing the thing. No `x`, `y`, no `art`. 10 to 16 parts.
- `w` = ONE word in the notation (dictionary form; a noun, or a verb / adjective for feelings and actions), `en` = short
  gloss, `lv` = N5, N4 or N3 (the word's level; a set's `lv` is N5 or N4 = the level of most of its words; at most a
  quarter of a set's words may be N3; none above N3). Part ids: short romaji, unique inside the set.
- `say` = "listen and point" sentences: each is a natural sentence at the set's level whose answer is exactly ONE part
  (`p`), and which could not be answered by any other part of the set. It names or clearly describes the thing
  ("ここ で 手《て》 を 洗《あら》います。" → the washbasin). Vary them: where it is, what you do with it, what it is like, a
  patient's or nurse's line. At least a third clinical or health-related where the topic allows.
- Set ids, part ids are permanent; files append only after release.
### A2. Art: pictures/art-<group>.js (NOT in js/data; no Japanese inside, labels come from the set)
```
window.PICTURE_ART = window.PICTURE_ART || {};
window.PICTURE_ART['body-front'] = { vb: [300, 400], svg: '<g>…</g>' };
```
- `vb` = [width, height], width 300 to 420, height 240 to 440. `svg` = inner SVG markup only (no <svg> tag, no <text>,
  no <style>, no <script>, no ids, no external references, no <image>), single-quoted JS string on as few lines as you
  like (use + to join); only these paints: `stroke="currentColor"`, `fill="none"`, `fill="currentColor"` with
  `fill-opacity` 0.06 to 0.2 for soft shading, and `fill="var(--surface)"` to cover things behind. Stroke width 1.5 to
  3, round caps and joins. Simple, clean line drawing that a learner recognises at once at 340 px wide; friendly and
  neutral (a body is a simple unclothed-doll outline with no genital or breast detail; faces simple). Under 9 KB each.
### A3. Signs and buttons: js/data/signs.js and js/data/signs-panels.js
```
window.SIGNS = { groups: [ { id: 'hospital', title: 'In the hospital', note: '…' }, … ],
  signs: [ { id: 'sg-001', g: 'hospital', ja: '受付《うけつけ》', en: 'Reception', lv: 'N4', style: 'blue', note: '' }, … ] };
window.SIGN_PANELS = [ { id: 'washer', title: 'Washing machine', lv: 'N4', note: '…',
  rows: [ [ { id: 'power', ja: '電源《でんげん》', en: 'power', kind: 'btn' }, … ], [ … ] ],     // 2 to 4 rows, 6 to 12 controls in all
  tasks: [ { q: 'Switch the machine on.', a: 'power', why: '…' }, … ] } ];                     // 5 or 6 tasks, each one right control
```
- `style`: green (exit, safe), red (forbidden, fire, emergency), blue (information, must do), yellow (caution), plain.
- `kind`: btn, lamp (a status light, not pressable in tasks), dial. Sign and control text is what is really printed in
  Japan (short, no sentence endings unless real signs have them); the reading goes in 《》 as always, the app hides it
  until asked. Sign ids `sg-001…`, permanent.
### A4. Lessons (existing shape, as in 0.23.0): lessons-36.js, -37.js, -38.js. Every lesson has `after`. A lesson body may
show a picture: `<div class="pic-embed" data-pic="<set id>"></div>` (the app mounts the tap-to-learn picture there).
### A5. Dictionary dict-words-3.js, -4.js, -5.js (existing line format; new categories allowed: `animals`, `things`
(objects, machines, tools), `clothes`); examples examples-18.js, -19.js, -20.js; topic sets topic-sets-5.js.
### A6. Body map (js/data/picture-bodymap.js)
`window.PICTURE_BODYMAP = { sets: ['body-front', 'body-back'], ask: [ { ja, en }, …8 ], words: [ { ja, en }, …10 ] }`
= questions a clinician asks ("Where does it hurt? Please point.") and pain-describing words the patient can point to.

## B. Pages
- #/pictures  js/pictures.js  "Picture words": list by group with a level seg (All, N5, N4); a set page
  #/pictures/<id>?tab=learn|identify|label|listen :
  Learn = tap a pin or card: word with furigana, English, speaker, link to the dictionary word when one exists.
  Identify = the word is shown and spoken, tap the right pin / card.
  Label it = one pin / card is highlighted: Choose (4 words) or Type (kana, romaji or kanji).
  Listen and point = a `say` sentence is spoken (text hidden until answered), tap the pin / card.
  Scores state.done.pictures['<mode>:<set id>'] = best %, plus a `miss` array of '<set>:<part>' (max 200).
- js/picture-print.js: Print sheet for any set (#/pictures/<id>?tab=print: numbered picture with blank lines, answer key
  on the next page; options furigana, English, paper) and the body map (#/pictures/bodymap: on screen the patient taps
  where it hurts and the word shows large in Japanese and English; printable A4 handout with front and back, the
  questions and the pain words, a plain 0 to 10 number line; NO faces scale, NO published scale wording).
- #/signs  js/signs.js  "Signs and buttons": tabs Learn (by group; sign boards without furigana, tap to show reading
  and meaning), Quiz (sign → meaning, meaning → sign), Panels (a machine panel; "press the control that …").
  Scores state.done.signs['quiz:<group|all>:<mode>'], ['panel:<id>'].
Menu keys: pictures, signs. Japanese labels: 絵《え》 で 覚《おぼ》える 言葉《ことば》, 看板《かんばん》 と ボタン.

## C. Picture sets (group file → sets; kind; level). Writers may adjust the word list, not the ids.
body (picture-sets-body.js, art-body.js): body-front d N5; body-back d N5; face d N5; hand-arm d N4; leg-foot d N4; inside d N4 (organs, bones; simple)
home (…-home): house-outside d N5; living-room d N5; kitchen d N4; bathroom d N4 (bath, washbasin, toilet); bedroom d N5; appliances c N4
town (…-town): street d N5; station d N4; buildings c N5; hospital-floor d N4 (a simple floor plan: entrance, reception, waiting room, consulting room, pharmacy, cashier, lift, toilets, ward, nurses' station); positions d N5 (a table, a box and a cat or ball: on, under, in, in front, behind, next to, between, left, right, near, outside)
animals (…-animals): pets-farm c N5; zoo c N4; birds-insects-sea c N4; animal-parts d N4 (a dog and a bird: tail, ear, paw, fur, wing, beak, feather, horn is not possible here so leave it out)
machines (…-machines): car d N4; bicycle d N4; computer-phone d N4; vehicles c N5; ward-things c N4 (thermometer, blood pressure cuff, wheelchair, drip, bandage, mask, crutch or stick, stethoscope, syringe as "injection", bed …)
food (…-food): fruit-veg c N5; meals-drinks c N5; table-setting d N4 (chopsticks, rice bowl, soup bowl, plate, cup, spoon, fork, knife, tray, teapot)
clothes (…-clothes): clothes d N5 (two simply dressed figures: shirt, trousers, skirt, shoes, socks, hat, coat, glasses, bag, belt, pocket, button); accessories-colours c N5 (colour words with coloured squares or circles, and a few accessories)
nature (…-nature): landscape d N5 (mountain, river, sea, sky, cloud, sun, tree, forest, flower, rice field, island, bridge); weather c N5; seasons-plants c N4
daily (…-daily): feelings c N4 (faces: glad, sad, angry, scared, sleepy, in pain, surprised, worried, embarrassed, tired, lonely, relieved; `w` is the adjective or verb); daily-routine c N5 (verbs: wake up, wash, brush teeth, eat, work, study, bathe, sleep …); school-office c N5 (stationery and desk things); family-tree d N5 (a simple three-generation tree: my own family words)

## D. Picture lessons (ids, level, unit, after)
lessons-36.js, unit "Picture lessons: places and bodies" (N5), after review-n5-adjectives, in this order (each `after` the previous):
  position-words (上 下 中 前 後ろ 隣 間 そば with に あります / います; pics positions, living-room);
  body-itai (body words with が 痛い / かゆい / 重い, どこ が, ここ / この 辺; pics body-front, face; clinical);
  wa-ga-describing (〜は 〜が adjective: 象 は 鼻 が 長い; describing people, animals and patients; pic animal-parts);
  counters-pictures (which counter for which thing: 匹 頭 羽 台 本 枚 冊 杯 個 軒; pics pets-farm, vehicles; builds on lesson `counters`);
  review-n5-pictures1 (review: true)
lessons-37.js, unit "Picture lessons: clothes, town and signs" (N5), after review-n5-te:
  wearing-verbs (colour words as い-adjectives and の-nouns; 着る はく かぶる かける する with 〜て います; pic clothes);
  directions-map (まっすぐ 行って、 右 に 曲がって ください; 〜の 隣 / 向かい / 手前; 〜つ目; pics street, hospital-floor);
  reading-signs (how sign Japanese works: 〜禁止, 〜中, 〜口, 〜室, 〜所, お〜ください, ご〜ください, noun-only style; links to #/signs);
  review-n5-pictures2
lessons-38.js, unit "Picture lessons: machines and how things are" (N4), after review-n4-te:
  machine-instructions (〜と for what happens when you press; 〜方; まず 次に それから 最後に; 〜ない と; pics computer-phone, appliances; link #/signs?tab=panels);
  states-pictures (describing a room: 開いて います / 閉まって います, ついて います / 消えて います, 置いて あります; pics living-room, bedroom);
  explaining-with-pictures (a clinician explaining with a diagram: これ は 〜と いう …, この 辺, 〜の ところ, こう やって, 〜に つながって います; pics inside, body-front; plain-language explanations with no claims about treatment);
  review-n4-pictures

## E. Signs (about 110 signs, 10 panels)
Groups: hospital (受付, 会計, 薬局, 外来, 入院, 面会, 病棟, 診察室, 検査室, 救急, 待合室, お手洗い, 手指消毒, 面会時間, マスク着用 …),
station (改札, 入口, 出口, 切符売り場, 〜番線, 乗り場, 優先席, 終点, 各駅停車, 急行 …), street (止まれ, 横断禁止, 工事中, 立入禁止,
駐車禁止, 危険, 注意, 一方通行, 歩行者 …), building (非常口, 階段, 開, 閉, 押す, 引く, 営業中, 準備中, 定休日, 故障中, 使用中,
禁煙, 喫煙所, 土足禁止 …), shop (無料, 割引, 税込, 売り切れ, お会計, 現金, 袋 …), toilet (男, 女, 流す, 大, 小, 止, おしり, 水 …),
medicine-bag (内服薬, 外用薬, 食前, 食後, 寝る前, 朝, 昼, 夕, 〜日分, 用法 …: label WORDS only, no medicine names, no doses).
Panels: washer, aircon remote, toilet panel, ticket machine, ATM, rice cooker, microwave, lift, vending machine, bed and nurse-call.

## F. Dictionary, examples, topic sets
After the sets and signs are reviewed, a script lists every picture word and sign word not in the dictionary. Three
writers each take a third: dictionary lines (category incl. animals / things / clothes, level) + one example sentence
per word (N5 grammar for N5 words, N4 for N4). Target about 350 new words in all (add common N5/N4 words of the same
topics if the list is short). Then topic-sets-5.js: 10 sets from the new words (animals, appliances, in the kitchen,
around the house, in town, at the station, clothes, tools and machines, on the ward, body 2).
