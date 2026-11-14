# Coder 2 (0.18.0): nurse scripts in De-escalation and Discharge, nurse pocket card
Read COMMON-CODE.md (same folder) and COMMON-WRITE.md (notation, content rules) first. You write code AND the Japanese
data for it. Edit ONLY: js/deesc.js, js/discharge.js, js/handout.js, js/data/psych-nurse-tools.js (now a stub; you may edit
it, it is yours), append to css/style.css (`/* 0.18.0 nurse tools */`). New QA script: /home/claude/work/qa/nurse-tools.py.

## Pattern to copy
js/sud.js and js/withdrawal.js already have a Resident / Nurse switch (`S().settings.role`, values 'resident' | 'nurse')
that shows a nurse script (data `PSYCH_SUD.nurse` = { notice, steps:[{ title, lines:[{ tl, c, en, n? }] }], escalate }).
Use the same switch markup, the same setting and the same line rendering (look at `line()` in sud.js; it shows tl (polite),
c (plain) per the register setting, a speak button, English if shown). Keep the resident view exactly as it is.

## Data: js/data/psych-nurse-tools.js
`window.PSYCH_NURSE_TOOLS = { deesc: { notice, steps, escalate }, discharge: { notice, steps, escalate } }`, same shapes
as PSYCH_SUD.nurse; header comment with the DRAFT line and the shape. `notice`: "Nurse script: draft, pending Nursing
Service review. Follow your hospital's policy." Lines: polite (tl) and gentle plain (c) Japanese, English, optional
note `n` (English with furigana on any kanji). Patient-facing lines address the patient as ○○さん (write
`○○《まるまる》さん` as the existing data does for blanks — check how psych-phrases-7.js writes a name blank; copy it).
The nurse is 木村《きむら》 (placeholder used in the nurse sections).

**De-escalation, nurse view** (the resident checklist already covers the 12 steps; the nurse view adds):
1. "Calling the doctor on duty": a phone report, staff-to-staff polite Japanese, SBAR order (who you are and the ward;
   the patient and what is happening now; background in one line; what you have tried; what you need: come now / advice),
   and reading back the doctor's instructions. 6–8 lines.
2. "Asking for help from the team": calling other staff calmly, assigning one person to talk. 3–4 lines.
3. "After it is over: talking with the patient": check they are hurt or not, how they feel now, what helped, what could
   help next time, the plan for the rest of the day, no blame, thank them. 6–8 lines.
4. "Other patients on the ward": short reassurance that it is calm and safe now, where they can go, who to talk to. 3 lines.
`escalate`: one English sentence (immediate danger to anyone, a weapon, injury, a medical emergency → call for help and
the doctor at once; follow your hospital's emergency procedure).

**Discharge, nurse view** (discharge-day teaching by the ward nurse):
1. Belongings returned and checked together, signature (2–3 lines). 2. Medicines: when to take them, bring the
   medicine handbook (お薬手帳《くすりてちょう》), teach-back ("please tell me in your own words when you take them"),
   do not stop suddenly without asking the doctor, what to do about a missed dose = ask the doctor or pharmacist (no rule
   given). No names, no doses. 4–6 lines. 3. Next appointment: date and place on the paper, bring … (3 lines).
4. Warning signs and what to do: sleep, not eating, voices coming back, thoughts of suicide; contact the hospital, the
   local crisis line, 119 in an emergency (3–5 lines). 5. Family: what helps at home, who to call (3 lines). 6. Goodbye (1–2).
`escalate`: new thoughts of suicide, a plan, or the patient not safe to go home on the day → tell the doctor before
discharge.
Content rules of COMMON-WRITE.md apply (no medicine names, no doses, no Japan-specific legal or service claims).

## Nurse pocket card (js/handout.js)
Add a preset `nursecard` beside `deesccard`, label "Nurse pocket card", printed A6 (`105mm 148mm`, see the pitfall in
HANDOFF section 8 and how deesccard prints) and a route option `#/psych/handout?nursecard=1` like `?deesccard=1`.
Content: the most used nurse phrases from the six nurse sections (ids nurse-admit, nurse-meds, nurse-daily, nurse-risk,
nurse-calm, nurse-educ in psych-phrases-7.js / -8.js): about 3–4 per section, chosen as: greeting/introducing self,
belongings, ward routine, medicine time, side-effect question, sleep, appetite, the direct questions about thoughts of
suicide, offering a quiet place as a choice, calm-down lines, "I will tell the doctor". Keep the selection as a constant
`NURSE_CARD = ['nurse-admit:0', …]` (refs `sectionId:index`, look at how deesccard refs phrases) near PRESETS and list it
in your report. It must fit on 2–4 A6 sides with furigana; check the page count of the PDF with `pdfinfo` (see how
/home/claude/devtools/qa/handout.py prints presets). Add a link to the card on the Nurse view of the Psychiatry hub only
if that is a one-line change in a file you own; otherwise list where a link should go and the main chat will add it.

## QA (work/qa/nurse-tools.py)
De-escalation and Discharge pages, Resident and Nurse at 390 and 1280 px, light and dark: switching role shows the
script and back, register switch changes polite/plain, speak buttons exist, no console errors, no overflow, no raw `《`.
Nurse card: print to PDF (A6) and report the page count. Then `node tools/check-ja.js js/data/psych-nurse-tools.js`
(0 errors), `python3 /home/claude/devtools/qa/tools.py` and `python3 /home/claude/devtools/qa/handout.py` (last lines).
Report also: an "unsure" list of Japanese lines for the reviewer.
