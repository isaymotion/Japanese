# Hanashimashō 0.19.0 — fixed facts (decided by the design lead; do not change, report if a source disagrees)

The four new 0.18.0 patients have a case SIMULATION each in `js/data/psych-cases-5.js` (ids ocd, ptsd, panic, hinata).
Read the patient's whole simulation first: every fact in it (people, ages, history, what the patient said, the
summary `findings` and `mse`) is a FIXED FACT. The practice cases you write are set at THE SAME ENCOUNTER (the first
visit, or the emergency department that night), after the history in the simulation, so the patient says the same
things in the same voice. Do not add new history beyond what a form field needs; list every added fact in your report.

The MSE practice page is called "Admission MSE practice"; these four are first-visit MSE cases (outpatient or ED). Say so
in `setting` and in the title, e.g. "Takumi at his first visit", "Daiki in the emergency department". The 13 domains and
picks are those of `js/data/psych-admit-mse.js`; use them as they are.

## Keys decided for the four MSE cases (`need` = keyed answer; "accept" = goes in `ok`)
- ocd (Takumi, 34, N3): adult male, neatly dressed, well kempt; hands red and chapped (in `obs` and `doc` for appearance).
  Psychomotor normal. Attitude cooperative, embarrassed at first then open; eye contact fair at first (choose from picks).
  Mood anxious (he also says 気分 も 落ち込みます: accept a low/sad mood pick), affect congruent. Speech normal.
  Process linear/goal-directed. Perception: no disturbance. Content: obsessions (contamination) with compulsions
  (washing, checking), reassurance seeking; NO harm-related intrusive thoughts. Safety: denies SI and HI.
  Oriented x3. Insight good, Grade 5 (accept Grade 4). Impulse control good. Judgment fair.
  Chief complaint: his own words (speaker label "Takumi" style: the patient's label has no brackets).
- ptsd (Mariko, 42, N3): adult female, neatly dressed; tense, sits on the edge of the chair holding her bag; startles
  and briefly re-experiences the crash at a braking sound outside, settles with grounding. Psychomotor: restless/tense
  (choose the nearest pick; accept no agitation if the pick list has nothing closer). Mood anxious, affect appropriate.
  Speech normal. Process linear. Perception: no hallucinations; the flashback is re-experiencing, NOT a hallucination
  (teach this in `why`; if a pick list forces a choice, key "no perceptual disturbance" and document re-experiencing in
  `doc`). Content: guilt about her son; one past passive death wish, none now. Safety: no current SI, no plan or
  intent, past passive death wish documented; denies HI. Oriented. Insight good, Grade 5. Impulse good. Judgment fair.
  The interview never asks for a detailed retelling of the crash; she can pause.
- panic (Daiki, 27, N3): emergency department, late evening, after psychiatry was called. Adult male; anxious on arrival,
  settled after slow breathing; cooperative, good eye contact. Mood 落ち込んで います (accept anxious and low), affect
  anxious, brighter after explanation. Speech normal. Process linear. Perception none. Content: fear of another attack,
  of dying or going mad; no delusions. Denies SI and HI. Oriented. Insight fair, Grade 4 (not Grade 3: he does not blame
  others; accept Grade 5 only if the case shows him accepting the explanation by the end). Impulse good.
  Judgment fair. Caffeine (coffee and energy drinks most days, "many"), no other substances, hardly any alcohol.
- hinata (Hinata, 14, N4, use N4 grammar): child and adolescent clinic, with her mother Mrs. Matsumoto (Yuka, 46).
  The mother gives the chief complaint (speaker label "Mrs. Matsumoto (mother)"). Young female (choose the nearest picks:
  "Young adult" is wrong for 14; prefer the sex pick and describe her age in `doc`), neat casual clothes. Psychomotor
  normal. Attitude: quiet and little eye contact with her mother present, more open alone. Mood anxious (怖い about what
  classmates think), affect anxious. Speech soft, short replies (non-spontaneous). Process linear. Perception none.
  Content: worry about others' judgment; Safety: passive wish to disappear (消えたい) with no wish to die, no plan, no
  self-harm (asked, denies): key as passive ideation if the picks have it, and teach that 消えたい is always followed up.
  Oriented. Insight fair, Grade 3 (accept Grade 2). Impulse good. Judgment fair. Staff call her ひなたさん; she uses
  plain, short replies to the doctor; the doctor speaks to her directly and with respect.
  Seen alone with confidentiality and its limits explained, as in the simulation.

## Discharge case: Daiki only (ED discharge, id "panic", N3)
The discharge form is an inpatient form; Takumi, Mariko and Hinata are outpatients and get no discharge case.
Daiki leaves the emergency department the same night, about two hours after the psychiatry review in his simulation.
- Chart lines: third ED visit in two months; tonight's attack on a crowded commuter train; the ED physician's tests
  normal tonight and before ("the tests were normal", no numbers); psychiatry review (findings of the simulation);
  slow breathing practised; settled; no medicine given in the ED.
- Diagnosis: "Panic disorder (provisional)", possibly with agoraphobic avoidance (written under the nearest pick or
  "Other"). Adverse event: none. Sleep: poor for the last weeks from worry about attacks (nearest pick).
- Medications: no new medicine started tonight; medicine and therapy to be discussed at the outpatient visit; cut
  caffeine down gradually (not suddenly). No medicine names in patient-facing Japanese.
- Aftercare: outpatient psychiatry appointment within the week (no date), step-by-step therapy explained in general
  terms; return to the ED for NEW or DIFFERENT symptoms (chest pain that differs, fainting); the local crisis line or 119
  if thoughts of suicide appear; he will phone his mother himself (his choice).
- Insight at discharge: improved after explanation: key Good / Grade 5, accept Fair / Grade 4. Memory intact.
  Orientation full. Mood "a little relieved" in his words. Decision: discharge = true.

## Other content this build
- Nurse scripts part 2 (`psych-nurse-tools-2.js`): `PSYCH_NURSE_TOOLS.mood` = "Watching mood on the ward" (a daily
  check: sleep, mood 1–10 in the patient's words, energy, appetite, spending and phone calls, irritability, how the
  patient sees themselves; what to tell the doctor and when at once: new or stronger thoughts of suicide, not sleeping
  for nights with high energy, aggression, not eating or drinking; a short call to the doctor in the SBAR order).
  `PSYCH_NURSE_TOOLS.admit` = "Nursing admission interview" (introduction and identity check with name and date of
  birth; allergies; vital signs announced before touching; sleep, appetite, bowels and bladder, mobility and falls,
  smoking, glasses, hearing aids, dentures; whom to contact; what the patient expects; a brief risk question as in the
  nurse-risk section; reporting the admission to the doctor in the SBAR order). Do not repeat the ward-orientation and
  belongings lines that are already in the nurse-admit section (refer the learner there in the notice or a note).
- Nurse-case replies (`psych-answers-6.js`): likely patient replies for the nurse sections, in the voices heard in the
  three nurse simulations (`psych-cases-4.js`: a young man with psychosis arriving on the ward, a man with mania
  refusing his evening medicine, a man in alcohol withdrawal at night), written so they work for any patient (no
  names). Do not duplicate replies already in `psych-answers-3.js` and `psych-answers-5.js`.
- Topic sets part 2 (`topic-sets-2.js`): 10 more sets, 12–18 words each, 5 clinical and 5 everyday.
