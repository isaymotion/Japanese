# Brief: nurse phrase sections for Hanashimashō (0.16.0)

Write the files named in your task in `/home/claude/work/new/`. /home/claude/japanese is READ ONLY. No git commands.
The app teaches Japanese and the psychiatric interview in Japanese. These new sections are for WARD NURSES (and residents
who work with them) talking to Japanese-speaking patients and families on a psychiatric ward. They appear behind a
Resident / Nurse switch; they are pending Nursing Service review and every Japanese line is a draft for a native speaker.

## Read first
1. `/home/claude/japanese/tools/AUTHORING.md` — the Japanese notation (furigana in 《》 after EVERY kanji run, one space
   between words, particles separate, a space after 、 and 。 inside a string, no romaji). Kanji inside English notes need
   furigana too.
2. `/home/claude/japanese/js/data/psych-phrases-6.js` and `-5.js` — the section shape and the `P(en, f, c, n)` helper.
   f = polite (です/ます, light honorifics, the default with adult patients); c = plain (how you speak to a child, or
   how a family speaks casually). Match the existing tone, length and note style.
3. `/home/claude/japanese/js/data/psych-answers-2.js` — the reply shape `[japanese, english, clinicalNote?]`.
4. The existing sections that overlap, so you do NOT duplicate them: `meds`, `admission`, `deescalation`, `suicide`,
   `violence`, `elderly` (in psych-phrases-*.js), and the nurse scripts already in `js/data/psych-sud.js` and
   `js/data/psych-withdrawal.js` (search "nurse"). Write from the nurse's side of the bedside.

## Section shape (one file holds the sections named in your task)
```
/* Nurse phrase sections, part <A|B> (<ids>). Shown in the Nurse view of Psychiatry → Interview.
   Same shape as psych-phrases-6.js. Phrase indexes are IDs: APPEND only.
   STATUS: DRAFT FOR REVIEW by a native Japanese-speaking clinician; nurse content pending Nursing Service review. */
(function () {
  const P = (en, f, c, n) => Object.assign({ en, f, c }, n ? { n } : {});
  window.PSYCH_SECTIONS = (window.PSYCH_SECTIONS || []).concat([
    { id: 'nurse-meds', group: 'Nursing', role: 'nurse', title: '...', draft: true, intro: `...`, phrases: [ P(...), ... ] },
  ]);
})();
```
`intro` = 2–4 plain English sentences for a nurse: purpose, tone, one practical tip. Use `n` (note) on roughly one phrase
in three: word choice, softer alternatives, and ESCALATION ("Tell the doctor at once if…") where it matters.

Replies file (patients' likely answers, for the point board and listening drill):
```
/* Likely patient replies, part 3<a|b>: nurse sections. item = [japanese, english, clinicalNote?]. STATUS: DRAFT … */
window.PSYCH_ANSWERS = window.PSYCH_ANSWERS || { common: [], sections: {} };
Object.assign(window.PSYCH_ANSWERS.sections, { 'nurse-meds': [ [...], ... ], ... });
```
8–10 replies per section: short, natural things a patient or relative actually says, a mix of yes, no, worries and
refusals; a note when the reply needs action.

## Hard rules
- No product or brand names, no doses, no tablet counts, no method detail for self-harm or substance use.
- Side effects in lay words (眠気, ふらつき, 体 の こわばり, そわそわ して じっと して いられない, 手 の ふるえ, よだれ, 便秘,
  おしっこ が 出にくい, 発疹…). Serious signs (high fever with stiffness, confusion, severe vomiting or diarrhoea with a
  coarse tremor, a rash with fever, fainting) carry a note: tell the doctor at once.
- No phone numbers other than 119 (`｜119番《ひゃくじゅうきゅうばん》`); otherwise "the ward", "the hospital", "the local crisis line".
- No Japan-specific legal or service claims (no laws, admission types, insurance, named programmes). Ward rules vary:
  say "the ward's rules" and in a note "check your ward's rules". No fixed times or observation intervals as fact.
- Respectful: 〜さん, no あなた, no blame, no threats; limits stated calmly with a reason and a choice. A refusal of medicine
  is explored and reported, never forced by words.
- Natural spoken ward Japanese (a nurse's voice), not textbook-stiff; avoid staff jargon to patients (内服, 清拭, 不穏)
  unless the note explains it is chart language.
- Plain English in `en`; no kanji in `en`.

## Checks (all must pass)
```
cd /home/claude/japanese
node --check ../work/new/<file>
node tools/check-ja.js ../work/new/<file>      # relative path; must end "0 error(s)"; fix warnings that are yours
```
## Report back (max 15 lines)
Count of phrases and replies per section; any clinical choice a nurse educator should confirm; up to eight Japanese
lines you are least sure of.
