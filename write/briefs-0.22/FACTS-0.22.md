# Hanashimashō 0.22.0 — fixed facts and specs (decided by the design lead; do not change, report if a source disagrees)

Repo: /home/claude/japanese. General rules (every file): DRAFT header line; Japanese notation of tools/AUTHORING.md;
fictional people; no method detail, no medicine or product names, no doses, no vital-sign or lab numbers; crisis = "the
local crisis line" / 地域《ちいき》 の 相談窓口《そうだんまどぐち》 and ｜119番《ひゃくじゅうきゅうばん》 only; law = "follow local law and your
hospital's policy"; no statistics or study claims (unverifiable). Write every sentence by hand (no generating scripts).
No git commands. Touch only the file named in your task. Names with fixed facts elsewhere (do not use for new people):
佐藤, 田中, 高橋, 山田, 山本, 中村, 伊藤, 小林, 井上, 岡田, 松本, 木村. Free: 森, 林, 石井, 西村, 藤田, 長谷川, 小川, 近藤.
N2 spacing conventions: see the top of N2-LESSON-PLAN-2.md.
N2 grammar the app teaches (use naturally, 6 or more per text, never forced): the 24 first-half lessons in
/home/claude/work/briefs-0.21/N2-LESSON-PLAN.md and the 24 second-half lessons in N2-LESSON-PLAN-2.md.

## A. Daiki's end-of-treatment review (file js/data/psych-eot-cases-2.js, one case, id `panic`, level N3)
Brief: /home/claude/work/briefs-0.20/EOT-CASE-BRIEF.md, with these changes: write in /home/claude/japanese/js/data/psych-eot-cases-2.js
(a stub is there: keep its wrapper `window.PSYCH_EOT_CASES = (window.PSYCH_EOT_CASES || []).concat([ … ]);`); the form is
/home/claude/japanese/js/data/psych-eot.js; check with `node ../work/chk-eot.js . js/data/psych-eot.js js/data/psych-eot-cases-2.js`.
Sources that win over everything except this section: his simulation (psych-cases-5.js, id panic), first-visit MSE case
(psych-mse-cases-6.js), ED discharge (psych-discharge-cases-6.js). Model: psych-eot-cases-1.js (case `ocd`).
Fixed facts:
- Daiki Okada (岡田 大輝), 27. About four months after the emergency-department night. Outpatient clinic, last planned
  session of a 12-session course of cognitive behavioural therapy for panic disorder (learning what a panic attack is,
  slow breathing, staying with body sensations on purpose in small steps, going back step by step to the places he
  avoided). Attended all 12. Practised between sessions most weeks (fewer in the busy middle month: he says so honestly).
- No medicine was started (it was discussed at the first outpatient visit and he chose therapy first). No medicine names.
- Then: several attacks a week, three ED visits in two months, avoiding crowded trains. Now: one mild attack in the last
  month, which he rode out on the platform without leaving; no ED visit since that night; rides the commuter train every
  day, including the rapid train; one hard thing left: long tunnels and the last train when it is packed still make him
  tense (named honestly as residual).
- Caffeine: energy drinks stopped (cut down gradually); one coffee in the morning. Hardly any alcohol, no other substances.
- Work: full duties, no days off for attacks in two months. Sleep: mostly good. Mood today "about 8 out of 10", calm,
  a little proud. Safety asked again at the review: no thoughts of dying, no self-harm, no wish to harm others.
- Insight: he explains panic in his own words (a false alarm of the body, the fear of the fear kept it going): Grade 6
  keyed if the picks have it, Grade 5 accepted. Use the same keys style as case `ocd`.
- Early warning signs in his words: checking where the exits are, choosing the local train "just in case", more than one
  coffee, skipping the breathing practice. Plan: his own written coping card, keep practising one harder step a month,
  booster session in three months, come back earlier if avoidance returns for two weeks; new or DIFFERENT physical
  symptoms (chest pain that differs, fainting) = see a doctor / 119, as in his ED discharge; the local crisis line.
- Decision: `end: true` (regular sessions end today). Family: none present; he lives alone (follow the sources if they
  say otherwise and report it).

## B. N2 readings (8 passages; N2: about 600–850 Japanese characters not counting readings, 6–8 paragraphs, glossary 16–22, 5 questions)
Brief: /home/claude/work/READING-BRIEF.md (read its N3 length and grammar lines as N2 per this section). level: 'N2'.
reading-4.js (all `psych: true`), in this order:
1. `nyuuin-no-goannai` — "Guide for patients being admitted" (formal notice: 〜に 際して, 〜に つき, 〜に 限り, 〜を 問わず,
   〜かねます; belongings, visiting, valuables; generic, labelled as a sample in titleEn: "… (sample notice)"; no times
   beyond simple made-up visiting hours).
2. `shoukaijou` — "A referral letter (sample)": a clinic doctor refers a woman in her fifties (長谷川さん, new) with low mood
   and poor sleep after a bereavement to a hospital psychiatrist. Letter keigo (平素 より, ご高診 の ほど …). No medicine
   names or doses ("sleep medicine was tried for a short time with little effect" is fine), no hospital names, no numbers.
3. `kanfarensu-no-kiroku` — "Minutes of a discharge-planning conference": for 伊藤《いとう》 千代子《ちよこ》さん; every fact
   from js/data/psych-discharge-cases-4.js (chiyoko) and psych-mse-cases-3.js; ADD NO NEW FACTS about her, no medicine
   names or doses (write "the night-time medicine will be reviewed"). である style, chart-like wording.
4. `kazokukai-dayori` — "From the family group newsletter": a mother (藤田さん, new; her adult son has a long illness, no
   diagnosis details beyond "a mental illness") writes what she learned: not blaming herself, resting, asking for help.
   です/ます essay; feeling patterns (〜て ならない, 〜こと か, 〜ず に は いられない, 〜から こそ).
reading-5.js (no `psych`, except where stated), in this order:
5. `kenshuu-hantoshi` — "Six months into training": サントス先生's diary in plain style: language mistakes, a senior's
   advice, what listening means. (`psych: true`.)
6. `nemuri-to-sumaho` — "Sleep and the smartphone": a newspaper-style column, opinion and everyday observation only, no
   statistics, no study claims, no medical promises.
7. `shoutengai-no-matsuri` — "The shopping street's summer festival": a local-paper feature (history told by an old
   shopkeeper, fewer young people, students helping): 〜と ともに, 〜を きっかけ に, 〜ならでは, 〜に わたって.
8. `orei-no-tegami` — "A thank-you letter": a former outpatient (森さん, new, a man in his forties who was off work with
   depression and has returned to work) writes to his doctor a year later. Letter keigo. Hopeful, no risk content
   beyond "there were days I thought I could not go on" level (no methods). (`psych: true`.)

## C. N2 dialogues (file js/data/dialogues-3.js, 6 dialogues, level: 'N2', 14–18 lines each)
Brief: /home/claude/work/DIALOGUE-BRIEF.md (read its N3 lines as N2 per this section). The learner is サントス, speaker 0.
1. `shoukai-denwa` — "Phoning the referring clinic": サントス calls a clinic doctor (近藤先生, new) to report on a referred
   patient and ask about the history (phone keigo: お世話 に なって おります, 〜させて いただきます, 〜と 存じます).
2. `nyuuin-no-susume` — "Recommending admission to a family": to the wife (石井さん, new) of a man with severe depression
   who is not eating; a recommendation with reasons, asks what she thinks, no claims about law or admission types.
3. `shourei-kentoukai` — "At the case conference": サントス presents and a senior doctor (林先生, new) questions; formal
   spoken N2 (〜と 考えられます, 〜から する と, 〜に 基づいて, 〜つつ あります).
4. `menkai-no-onegai` — "A request the ward cannot grant": a patient's brother (小川さん, new) wants to visit outside
   visiting hours; polite refusal with an alternative (〜かねます, 〜に 限り, 恐れ入ります が).
5. `senpai-ni-soudan` — "Asking a senior resident for advice": colleague speech with 西村先生 (new, senior resident) after
   an interview where the patient cried and サントス said too much; advice on silence and あいづち.
6. `fukushoku-no-soudan` — "Planning a return to work": with an outpatient (森さん, the same man as reading 8, some
   months earlier: off work with depression, improving); gradual return, warning signs, no medicine names.

## D. Example sentences for N2 words (files examples-15.js, -16.js, -17.js; lists /home/claude/work/new/ex-words-N2-<1..3>.txt)
Brief: /home/claude/work/briefs/W-examples.md + COMMON-WRITE.md, with these changes: write directly in
/home/claude/japanese/js/data/examples-<n>.js (stub there; keep the wrapper, add a second header comment line like
examples-14.js with "part <n> (0.22.0)"); one sentence for EVERY word in your list (skip a word only if no safe,
natural sentence exists, and report it); grammar up to N3 with an occasional N2 pattern, vocabulary N2 or below; at least
a third clinical or hospital-flavoured where the word allows; checks from /home/claude/japanese:
`node --check js/data/<file>`, `node tools/check-ja.js js/data/<file>`, `node ../work/chk-017.js . js/data/<file>`.

## E. N2 topic sets (file js/data/topic-sets-4.js, 8 sets)
Brief: /home/claude/work/briefs/W-topics.md + COMMON-WRITE.md, with these changes: write directly in
/home/claude/japanese/js/data/topic-sets-4.js (stub there; keep the wrapper, header like topic-sets-3.js with "part 4 (0.22.0)");
8 sets of 12–16 words; at least 9 words of each set must have dictionary level N2 (the rest N3 or below), so the set
shows under the N2 level filter; N2 words are mostly in js/data/dict-n2-1.js. Ids must not repeat an existing set id
(grep `id: '` js/data/topic-sets*.js). Sets (id: title, clin): n2-work: Work and the office · n2-society: Society and
public life · n2-nature: Nature and weather · n2-hospital: Hospital and treatment words (clin) · n2-mind: Mind and
behaviour words (clin) · n2-change: Change, increase and decrease · n2-formal: Formal words in notices and letters ·
n2-describe: Describing people and things (adjectives and adverbs). No risk words. Checks from /home/claude/japanese:
`node --check`, `node tools/check-ja.js js/data/topic-sets-4.js`, `node ../work/chk-017.js . js/data/topic-sets-4.js`.

## F. N2 trainer words (file /home/claude/work/new/trainer-n2.js)
Brief: /home/claude/work/TRAINER-BRIEF.md. The trainer now has 475 verbs and 294 adjectives (the brief's numbers are old).
Candidates: /home/claude/work/new/cand-verbs-N2.txt (118) and cand-adj-N2.txt (18). Choose 45–55 verbs and 10–14
adjectives, `lv: "N2"`. Leave out any verb whose 〜ましょう / 〜て ください / causative form would be harmful, coercive,
unkind or absurd when shown or spoken alone (staff procedures, bodily functions, violence, deceit, symptoms), and 荒い
(rough, violent). Check: `cd /home/claude/japanese && node ../work/chk-trainer.js . ../work/new/trainer-n2.js`, then read
`../work/new/trainer-n2.js.forms.txt` for every built form.

## G. Listening questions on the new N2 readings and dialogues (file js/data/listen-questions-4.js)
Brief: /home/claude/work/briefs/W-questions.md + COMMON-WRITE.md, with these changes: write directly in
/home/claude/japanese/js/data/listen-questions-4.js (stub there; keep the `Object.assign` wrapper, header like
listen-questions-3.js with "(0.22.0)"); keys = the 8 reading ids of reading-4.js / reading-5.js and the 6 dialogue ids of
dialogues-3.js; 3 questions each (42), English, exactly as the texts say after review; answer positions varied.
