# Hanashimashō 0.20.0 — fixed facts and specs (decided by the design lead; do not change, report if a source disagrees)

Repo (READ ONLY for writers): /home/claude/japanese. Work folder: /home/claude/work/new. No git commands.
General rules (every file): DRAFT header line; Japanese notation of tools/AUTHORING.md; fictional patients; no method detail,
no medicine or product names in patient-facing Japanese, no doses, no vital-sign or lab numbers; crisis = "the local crisis
line" (地域《ちいき》 の 相談《そうだん》 窓口《まどぐち》) and 119 only; law = "follow local law and your hospital's policy".
Scale items are paraphrases. Keep the patients' voices and facts as in their simulations (js/data/psych-cases-5.js) and
first-visit MSE cases (js/data/psych-mse-cases-6.js); Daiki's ED discharge is js/data/psych-discharge-cases-6.js.

## 1. End-of-treatment review (new practice format, outpatients)
An outpatient's LAST PLANNED session (or a planned review), where the resident reviews the course of treatment, does a
short review MSE, checks safety, agrees a relapse plan and decides whether regular sessions can end. It is the outpatient
counterpart of the inpatient discharge practice: same engine and grading, its own form `PSYCH_EOT` in
`js/data/psych-eot.js` (same shape as `PSYCH_DISCHARGE` in js/data/psych-discharge.js; its questions also form the phrase
section `eot`, title "End-of-treatment review", group "Management"), cases `PSYCH_EOT_CASES` in
`js/data/psych-eot-cases-1.js` (same shape as discharge cases, except `decision: { end: true|false, why }`).
Generic form: `form: ''`, title "End-of-treatment Review".

### Fields (id | group | label | kind | picks, exact strings) and what to ask (English; the writer writes f / c Japanese)
- course | Treatment course | Treatment received | ask | Attended all planned sessions; Attended most planned sessions;
  Missed several sessions; Practised between sessions most weeks; Practised between sessions some weeks; Rarely practised
  between sessions; Family took part in ___ session(s)
  Ask: Looking back, how many of the sessions were you able to come to? / How often did you manage the practice between
  sessions? / What helped you most? / Was anything hard about the treatment?
  Assess: what treatment was given (type, number of sessions, over how long), attendance, practice between sessions,
  family involvement; the chart says what was planned.
- change | Treatment course | Change in target symptoms | ask | Much improved; Improved; Minimally improved; Unchanged;
  Worse; Self-rated ___/10 at start, ___/10 now; Residual symptoms: ___
  Ask: When you first came, what troubled you most, and how is it now? / From 0 to 10, with 10 the worst, how bad was it
  when you first came, and how bad is it now? / What can you do now that you could not do before? / Is anything still
  difficult?
- mood | Review MSE | Mood/Affect | ask | the 13 picks of the discharge mood field, unchanged
  Ask: How have you been feeling these past two weeks? / From 1 to 10, with 10 the best, how is your mood today?
- safety | Review MSE | Suicidal and homicidal ideas | ask | Denies suicidal ideation, plan, or intent; Past passive death
  wish, none now; Passive death wish, no plan or intent; Active suicidal ideation (do not end treatment; reassess);
  Denies homicidal ideation; Homicidal ideation present (reassess)
  Ask: Since we last met, have you had any thoughts of dying or of ending your life? / (for someone who had them) Have
  the thoughts of wanting to disappear come back at all? / Have you had any thoughts of hurting someone else?
- insight | Review MSE | Insight | ask | the 9 picks of the discharge insight field, unchanged
  Ask: What do you understand now about what was happening to you? / If it starts again, what would you think it is?
- function | Functioning | Daily functioning | ask | Back to usual work or school; Partly back to work or school; Not yet
  back to work or school; Daily routine and sleep regular; Sleep still poor; Social and leisure activities resumed;
  Avoidance remains in some situations; Family relationships improved; Alcohol no longer used to cope
  Ask: How are things at work (or school) now? / How are you sleeping? / Are you doing the things you used to enjoy? /
  Do you still drink to get to sleep or to calm down?
- warning | Staying well | Early warning signs and relapse plan | ask | Names own early warning signs; Written relapse
  prevention plan; Knows how to restart the practice; Family knows the warning signs; Knows when and how to come back;
  Cannot yet name warning signs
  Ask: What would be the first signs that it is coming back? / If you notice them, what will you do? / Who can help you
  notice? / Shall we write the plan down together?
- medicine | Staying well | Medicines | ask | No psychiatric medicine; Continues ___ (prescribed by ___); Medicine to be
  reviewed by ___; No medicines from the pharmacy for sleep or anxiety; Supplements or other medicines: ___
  Ask: Are you taking any medicine now, from us or from another doctor? / Have you bought anything from the pharmacy
  for sleep or nerves?
- plan | Plan | Plan after this review | explain | Regular sessions ended; Booster session in ___ months; Letter to
  family doctor; Return to the clinic if symptoms come back; Crisis plan given (local crisis line; 119); Continue
  sessions every ___ weeks: goals not yet met; School liaison continues with consent; Referred to ___
  Say: We agreed this would be our last regular session. How do you feel about ending? / If it comes back, please
  contact the clinic; you will not have to start from the beginning. / Let's book one more session in ___ months to see
  how you are doing. / I will write to your family doctor about the treatment. / If you ever have thoughts of ending your
  life, call the local crisis line, or 119 in an emergency. / I think we should keep meeting every ___ weeks for a while,
  because ___.

### The three cases (ids = the simulation ids; level as given; all set at the outpatient clinic, the resident = "you",
who saw the patient at the first visit and through the treatment under supervision)
- ocd — Takumi Kobayashi, 34 (N3). Review about five months after the first visit, at the 16th and last planned weekly
  session of exposure and response prevention (ERP): an exposure ladder (touching door handles, the shared office phone,
  leaving home after checking once). His wife Aya came to two sessions to learn to stop giving reassurance kindly. No
  medicine (they chose ERP first; medicine stays an option if it returns). Now: hand washing under 30 minutes a day,
  short showers, hands healed; checks the gas and the lock once; on time for work; checks figures once; urges still come
  at busy times at work (the year-end accounts) and he lets them pass. Self-rating 9/10 at start, 2/10 now. Mood in his
  words: すっきり しました (euthymic; full range, congruent). Never had suicidal thoughts. Insight Good, key Grade 6
  (accept Grade 5). Function: back to usual work; leisure resumed (he and Aya eat out again). Warning signs: longer
  showers, asking Aya 「大丈夫《だいじょうぶ》？」 again, checking more when stressed; plan written; restart the ladder; Aya
  knows the signs. Plan: regular sessions ended, booster session in 3 months, return if symptoms come back.
  Decision: end = true.
- ptsd — Mariko Inoue, 42 (N3). Review about four months after the first visit, at the 12th and last planned session of
  trauma-focused cognitive behavioural therapy (weekly, then every two weeks). Nightmares from several a week to about once
  a month; brake sounds still make her jump but she grounds herself and there are no flashbacks; drives on ordinary roads
  again and takes her son Hiroto to school; drove a short stretch of the expressway twice in daylight as planned practice,
  still avoids the interchange where the crash happened (residual avoidance; she will keep practising). Sleep much better;
  stopped the beer to sleep (none for two months). Guilt about Hiroto has eased (the other car hit them; it was not her
  fault). Hiroto saw the school counsellor twice and is doing well. No death wish since the first visit. Self-rating 8/10
  at start, 3/10 now. Mood: だいぶ 楽《らく》 に なりました (euthymic; a little tearful when she thanks you; congruent).
  Insight Good, key Grade 6 (accept Grade 5). No medicine. Plan: regular sessions ended, letter to her family doctor,
  return if symptoms come back (for example around the anniversary of the crash), crisis plan given. Decision: end = true.
  Use facts about her work or family only if her simulation states them; do not invent a husband's name.
- hinata — Hinata Matsumoto, 14 (N4: N4 grammar, short plain replies to the doctor), with her mother Mrs. Matsumoto
  (Yuka, 46) for part of the session. A planned review after 10 sessions over four months (seen alone and with her mother;
  small steps back to school; the school counsellor with her consent). Now: full school days three days a week and the
  school's counselling room on the other two; stomach-aches rare; in bed by eleven on school nights; 消《き》えたい has not
  come back for two months (asked; denies wish to die, plan or self-harm); still very afraid of speaking in front of the
  class; her teacher agreed she can first present to a small group. Her mother is less worried and has stopped pushing.
  Self-rating 9/10 at start, 5/10 now. Mood: 前《まえ》 より 楽《らく》 (euthymic, anxious when presentations come up).
  Insight: key Fair and Grade 5 (she knows worry causes the stomach-aches; accept Good and Grade 4). Function: partly back
  to school; sleep regular. Decision: end = FALSE: not yet; continue sessions every two weeks for about two months,
  focused on speaking in class and fear of others' judgment, school liaison continues with consent, review again. Teach
  that a review can decide to continue, and that 消えたい is asked about at every review even when it has gone.

## 2. Listening questions on the first-visit cases (keys `mse-<id>`, `dis-<id>`)
The listening page builds a conversation from a practice case: for an MSE case, the chief-complaint question and answer,
then for each domain in form order every question that has an answer in the case (doctor's polite form, then the
reply); for a discharge case, each field the same way. Speakers: "Doctor" and the case's speaker (cc.ans[2] for MSE;
the patient's name for discharge). Write 4–5 questions per case in `js/data/listen-questions-3.js`, keys `mse-ocd`,
`mse-ptsd`, `mse-panic`, `mse-hinata`, `dis-panic`, same item shape as listen-questions-2.js, about the PATIENT'S lines
(what he or she says, not the doctor's questions), answerable by ear, with one clear answer and three plausible wrong ones.
Do not repeat questions already asked on the same patient's simulation (`case-<id>` in listen-questions-2.js).

## 3. Interpretation items (js/data/psych-interp-3.js, 16 items)
Four from each new patient's world (OCD and reassurance seeking; trauma and avoidance; panic and fear of illness;
a teenager's school refusal and the parent's words), each a line a patient or family member might say whose meaning is
indirect, with a literal gloss and a clinical note: what it may mean and what to ask next. Do not repeat the 48 existing
items (psych-cases-2.js PSYCH_INTERP, psych-interp-2.js) or lines the four patients already say word for word.

## 4. Topic sets part 3 (js/data/topic-sets-3.js, 10 sets) and the level filter
Matching sets now get a level filter (N5 / N4 / N3 = words at or below that level). So that N5 and N4 have enough
sets: of the 10 new sets, at least 4 mostly N5 words, 3 mostly N4, 3 any level; 5 clinical, 5 everyday; 12–18 words,
dictionary keys exactly as in the dictionary files; no topic already covered by the 24 existing sets.
