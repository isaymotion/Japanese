# Hanashimashō 0.25.0 plan: "Today's practice, Find the mistake, Listen and reply, listening on every practice case"
Repo /home/claude/japanese (branch wip-0.25.0). Helpers /home/claude/devtools (qa/, write/). Rules as always:
tools/AUTHORING.md notation on EVERY Japanese string; all Japanese is draft; no medicine names, doses or method detail;
"the local crisis line", only number 119; no real brands, hospitals or people; no git commands by agents; one agent =
the file(s) named in its task. Data ids are permanent: append only after release.

## A. Data shapes
### A1. Find the mistake: js/data/grammar-errors-n5.js (60 items), -n4.js (60), -n3n2.js (N3 40 + N2 40)
```
window.GRAMMAR_ERRORS = (window.GRAMMAR_ERRORS || []).concat([
  { id: 'e-n5-001', lv: 'N5', l: 'particles-ni-de', type: 'particle',
    bad: '私《わたし》 は 病院《びょういん》 に 働《はたら》いて います。', i: 3,
    fix: '私《わたし》 は 病院《びょういん》 で 働《はたら》いて います。',
    en: 'I work at a hospital.', why: 'An action happens で a place; に marks where something exists or a destination.' }, … ]);
```
- `bad` = a sentence with EXACTLY ONE wrong word; `i` = the 0-based index of the wrong word among the space-separated
  words of `bad` (punctuation stays attached to its word); `fix` = the same sentence corrected (same number of words
  unless the mistake is a missing or extra word: then `i` points at the extra word, or at the word after which one is
  missing and `why` says "a word is missing after this one"; keep those under a tenth of items).
- The mistake must be wrong for every careful speaker (grammar: particle, verb or adjective form, tense, counter,
  transitive / intransitive pair, giving and receiving direction, keigo direction, conjunction form), never just
  informal or a matter of taste, and there must be only one way to repair it at that position. Every other word of
  `bad` must be right. `bad` and `fix` must differ in visible text, not only in a reading.
- `type`: particle | verb-form | adj-form | tense | counter | pair | give-receive | keigo | connector | word-choice.
- `l` = id of the lesson that teaches the point (optional; must exist in window.LESSONS). `lv` N5 | N4 | N3 | N2.
- ids e-n5-001…, e-n4-001…, e-n3-001…, e-n2-001…. About 40% clinical or health-related sentences.
- The wrong sentence is shown as tiles and is NEVER spoken or recorded; `fix` is spoken after answering.
### A2. Listen and reply: js/data/listen-reply-1.js (80 everyday items), listen-reply-2.js (80 clinical items)
```
window.LISTEN_REPLY = (window.LISTEN_REPLY || []).concat([
  { id: 'r-001', lv: 'N5', clin: false, who: 'A colleague',
    say: 'お先《さき》 に 失礼《しつれい》します。', en: 'I am leaving before you. (said when going home first)',
    opts: [ { ja: 'お疲《つか》れ様《さま》 でした。', en: 'Thank you for your hard work.' }, {…}, {…}, {…} ], a: 0,
    why: 'お疲れ様 でした is the set reply to someone leaving work.' }, … ]);
```
- The learner HEARS `say` (text hidden until answered) and chooses the natural reply among 4. Exactly ONE option is a
  natural, appropriate reply. The 3 wrong options are well-formed Japanese that does not fit: it answers a different
  question, has the wrong register or direction (thanking when one should apologise, accepting one's own compliment),
  or misunderstands a word in `say`. Never broken Japanese. Vary the position of `a`.
- file 1 (r-001…r-080): everyday and workplace exchanges (greetings and set phrases, offers and refusals, invitations,
  thanks and apologies, asking back, phone, shop, station, small talk with colleagues); N5 25, N4 25, N3 20, N2 10.
- file 2 (r-101…r-180, `clin: true`): the learner is the doctor or nurse replying to a patient, a relative or a
  colleague (a patient says they could not sleep; a relative asks when discharge will be; a nurse hands over; a patient
  refuses a medicine; a patient says something that needs a gentle follow-up question). The right reply models good
  practice: acknowledges first, asks openly, never promises outcomes, never argues with a belief, takes any hint of
  wanting to die or disappear seriously with a direct, gentle question. No methods, medicine names or doses.
  N5 15, N4 25, N3 25, N2 15. `who` = the speaker of `say` in English.
- Everything in `say` and `opts[].ja` is recorded.
### A3. Listening questions on the older practice cases: js/data/listen-questions-5.js and -6.js
Same shape as js/data/listen-questions-3.js: `window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, { '<key>': [ [question, [4 options], correctIdx, explanation] ×5 ], … });`
- file 5: keys mse-shota, mse-ren, mse-ayaka, mse-yumiko, mse-tetsuo, mse-chiyoko, mse-daisuke, mse-shigeru
  (admission MSE cases in js/data/psych-mse-cases*.js).
- file 6: keys dis-shota, dis-yumiko, dis-ren, dis-tetsuo, dis-ayaka, dis-daisuke, dis-chiyoko, dis-shigeru (discharge
  cases in js/data/psych-discharge-cases-*.js) and eot-ocd, eot-ptsd, eot-hinata, eot-panic (js/data/psych-eot-cases-*.js).
- Questions are in English and ONLY about what the patient or family member SAYS in the case's answers (the `ans`
  lines), never about the chart, the key or the diagnosis; each answerable from one spoken answer; the explanation
  restates what was said. Spread the 5 questions over the interview. For risk answers ask only about what was said in
  general terms (e.g. "What does Yumiko say about her children?"), never about means or methods.

## B. Pages (coder)
- #/errors  js/errors.js  "Find the mistake": level seg (All, N5, N4, N3, N2), 10 items a round; the `bad` sentence as
  word tiles with furigana (never a speaker button); tap the wrong word; then the right word is shown in place, the
  whole `fix` with a speaker button, English and `why`; link to the lesson `l`. Score done.errors['<lv|all>'] = best %,
  `miss` array of ids (max 200). `App.errorsQs(lv, n)` for the daily page.
- #/reply  js/reply.js  "Listen and reply": seg Everyday / Clinical / All and a level seg; `say` plays automatically
  and with a Play again button, text hidden until answered; 4 reply buttons in Japanese (furigana per the reading-aid
  setting), each with its own small speaker; after answering: `say` text and English, each option's English, `why`.
  Score done.reply['<everyday|clinical|all>:<lv|all>'], `miss` ids. `App.replyQs(kind, lv, n)`.
- #/today  js/today.js  "Today's practice": one mixed round of 12 from what the learner got wrong: ids in the `miss`
  arrays of cloze, transform (choose), pairs, sounds, vocab / state mistakes, pictures (identify), signs, errors and
  reply, most recent first, at most 3 from one drill; when there are fewer than 12 mistakes, fill with new items at
  the learner's level (placement level or N5) from cloze, errors, reply and vocabulary. Each question is drawn by its
  own drill's question builder (export small `App.<drill>Qs` helpers from the existing modules where they are missing,
  without changing those modules' behaviour) and a right answer removes the id from that drill's `miss`. One best % a
  day in done.today['YYYY-MM-DD'] (keep 90 days); a tile first in Home → Today and first on the Practice page; shows
  "Done today: N%" after a round and lets the learner go again.
- Listening (js/listen.js): story kind for end-of-treatment cases (`eot-<id>`, built like App.dischargeDialogue from
  PSYCH_EOT + PSYCH_EOT_CASES: doctor's polite question then the answer); kinds 'm' and 'x' already exist and pick up
  the new keys; the case pages (admission, discharge, EOT) link to their listening questions when a key exists.
- Fix: js/picture-print.js sets `el.onclick` on the shared #view in the body map and the print sheet and never clears
  it; make each handler remove itself once its own markup has left the page (as js/writing.js checks its markup).
- Menu keys errors, reply, today (strings item.<key> en + tl: 間違《まちが》い 探《さが》し, 聞《き》いて 答《こた》える, 今日《きょう》 の 練習《れんしゅう》);
  NAV, TITLES, BLURB, MORE_KEYS, search, Practice page (Today's practice first; the two drills under "Grammar drills"
  and "Listening"), Progress rows. tools/collect-texts.js records errors `fix`, reply `say` and every `opts[].ja`.
