# Write /home/claude/work/new/<file> (listening questions on case simulations)
Read COMMON-WRITE.md first, then /home/claude/work/briefs-0.17/W-questions.md (the same task for dialogues: follow its
rules for questions, options, `why` and answer positions). Seed and shape: /home/claude/japanese/js/data/listen-questions-2.js
(copy its header; the object is `window.LISTEN_Q = Object.assign(window.LISTEN_Q || {}, { 'case-<id>': [[q, [4 options], answerIndex, why], …] });`).
What the learner hears: the case played as a dialogue built from the BEST path: for each step, the step's `line` (patient
or family, speaker `who`), then the score-2 choice's `tl` (the clinician). See `App.caseDialogue` in
/home/claude/japanese/js/views.js (search caseDialogue) for exactly what is spoken. Ask ONLY about what is said on that
path: never about score-0 or score-1 choices, feedback text or the summary. For each case named in your task write 4
questions (N4 cases) or 5 (N3 cases): mostly facts the patient/family say (what, when, who, how long), one about the
clinician's main action or reason (what the doctor/nurse offers, asks or explains), at most one about a feeling stated
in the dialogue. Keep risk topics factual and gentle (e.g. "What does the patient say about thoughts of dying?" is fine
when the dialogue covers it; no method content).
Check: `cd /home/claude/japanese && node --check ../work/new/<file> && node tools/check-ja.js ../work/new/<file>` (0 errors).
Report: counts per case and any case whose dialogue was hard to ask about (max 10 lines).
