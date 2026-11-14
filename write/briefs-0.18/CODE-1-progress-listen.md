# Coder 1 (0.18.0): Progress page scores, listening on case simulations, nurse-played cases
Read COMMON-CODE.md (same folder) first. Edit ONLY: js/views.js, js/listen.js, js/psych-views.js, and append to css/style.css
(`/* 0.18.0 progress + listen */`). You may edit /home/claude/devtools/qa/listen.py and add /home/claude/work/qa/progress.py.

## 1. Progress page (`V.progress` in js/views.js)
Add a section "Practice scores" after "Completion" (keep everything else). Read the stored scores and show them clearly, for
example as `.stack` rows with the existing `.progress` bars or small stat tiles:
- Vocabulary quiz: `state.done.vocab['<deckId>:<mode>']` = best % (see js/vocab.js header). Show decks tried, modes, best %
  (a compact table or list: deck name, Meaning / Recall / Reading best). Deck names from `App.decks()` if available (see vocab.js).
- Topic matching: `state.done.vocab['match:<setId>'] = { m, t }`: sets completed out of `window.TOPIC_SETS` count (check
  the real global in js/data/topic-sets.js), best misses/time.
- Listening: `state.done.listen2[tab + ':' + variant]` (see js/listen.js): per tab (Hear, Dictation, Sound pairs, Dialogues
  and readings) number tried and average or best %. For story items: N of M done.
- Numbers and counters: `state.done.numbers['<group>:<mode>']` best % (see js/numbers.js).
- Case simulations (`state.done.cases[id]`, %), admission MSE and discharge practice if they store scores (look in
  js/mse-practice.js and js/discharge-practice.js for where scores go; show only what exists).
Each block links to its page (#/vocab, #/vocab?tab=match, #/listen, #/numbers, #/psych/cases …). Empty state: "Not tried yet"
with the link. Must survive a missing key (old backups): `(s.done.vocab || {})`.

## 2. Listening questions on case simulations (js/listen.js, tab `story`)
A new data file `js/data/listen-questions-2.js` (registered, now empty) will hold `window.LISTEN_Q['case-<case id>'] =
[[question, [options], answerIndex, why], …]` (same item shape). Make the story tab include case simulations that have
questions: kind 'c', title = case title, level = case level, lines = the best-path dialogue that `App.caseDialogue(c)`
(js/views.js) builds (each line [speaker index, ja, en, …]; use `d.roles` for the speaker name, as for dialogues). Heading
"Case simulations" after Dialogues and Readings. Back link "Open the case" → `#/psych/case/<id>`. Best score key
`story:case-<id>`. To test, create a TEMPORARY draft `/home/claude/work/new/lq2-test.js` with 3 questions for
`case-chiyoko` and load it in your QA by injecting a script (do NOT edit the real data file).
Also on the case result page (`V.psychCase` in js/psych-views.js, after the summary) add a button "Listening questions"
to `#/listen?tab=story&id=case-<id>` when that case has questions.

## 3. Nurse-played cases
Cases may now have `role: 'nurse'` (the learner plays the ward nurse). In `App.caseDialogue` the roles become
`['You (nurse)', 'Patient/family']` for those. On `V.psychCases` (js/psych-views.js) show the cases in two groups,
"Played as the doctor" and "Played as the nurse" (the second only when such cases exist), with a small `pill` "nurse" on
nurse cases; on the Speaking page tiles (views.js ~line 347) add the same pill. On the case page (`V.psychCase`) say
"You are the ward nurse." under the setting for nurse cases. When `S().settings.role === 'nurse'` list the nurse group first.
To test, inject a temporary case object with role:'nurse' (copy an existing case, new id) in your QA script.

## QA
Extend /home/claude/devtools/qa/listen.py (or write work/qa/progress.py + work/qa/cases-role.py) to cover: Progress page
with an empty state and with seeded scores (set localStorage `hanashimasho.v1` before load; read core.js for the state
shape), the story tab with the injected case questions (play-all button exists, quiz answers right/wrong, score saved),
the cases page with an injected nurse case. Phone and desktop, light and dark; no console errors, no overflow, no raw `《`.
Also run `python3 /home/claude/devtools/qa/routes.py` and `python3 /home/claude/devtools/qa/psych.py` at the end (last lines).
