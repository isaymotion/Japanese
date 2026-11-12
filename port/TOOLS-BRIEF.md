# Translating a clinical-tool data file from Hablemos (Spanish) to Hanashimashō (Japanese)

Hanashimashō is a web app that helps an English-speaking psychiatry resident learn Japanese and interview
Japanese-speaking patients. It shares its engine with Hablemos (Spanish). You are porting one data file. This is
professional clinical training material; the English clinical content was written by the app's owner, a psychiatrist.

## Method
1. Read /home/claude/japanese/tools/AUTHORING.md in full. Every Japanese string follows its notation: furigana in 《》
   after every kanji run (hiragana readings), single half-width spaces between words with particles as separate words,
   a space after 、 and 。 inside a string, no romaji. Look at /home/claude/japanese/js/data/psych-phrases-2.js for tone.
2. Copy the source file to the destination path, then translate IN PLACE: replace every Spanish string with Japanese.
   Keep the file's structure, every key, id, number, score, threshold, code, array length and order, every
   "section:index" reference, and all executable code exactly as they are. Do not add or remove items.
3. English stays English. Do NOT change English clinical content (criteria, doses, thresholds, guideline text, teaching
   notes) except where it talks about the Spanish language, Spanish wording, Latin American culture or US-only services:
   - notes about Spanish usage (usted / tú, regional words, gendered forms): replace with a short note about the
     Japanese wording if there is something useful to say, otherwise make the note an empty string (or delete the `r`
     regional-variant property; `n` must stay if the engine reads it, so use '' for it).
   - "Spanish" → "Japanese", "native Spanish-speaking clinician" → "native Japanese-speaking clinician", "Hablemos" → "Hanashimashō".
   - "988" and other US-only numbers → "the local crisis line" (or 119 for a medical emergency, written
     ｜119番《ひゃくじゅうきゅうばん》 in Japanese text). No other phone numbers.
   - References to published Spanish versions of instruments → "the published Japanese version".
   - Update the header comment to describe the Japanese file (f / tl = polite です/ます, c = plain form).
4. Registers: the field the source calls usted / formal (`tl` or `f`) = polite Japanese (です/ます, soft question forms,
   お/ご where normal, no あなた), the way a courteous Japanese psychiatrist or nurse speaks to an adult patient. The field
   the source calls tú (`c`) = the same in gentle plain form. Patient and family answers = natural spoken Japanese for
   that person. Sentences short enough for a learner to say.
5. Items that paraphrase a rating scale or screening instrument stay PARAPHRASES in your own conversational Japanese of
   the English meaning given in the file. Do not reproduce the wording of any published Japanese version of an instrument.
6. Fictional people become Japanese-speaking: use these names wherever the source uses the Spanish-app names
   (English text uses the romanised name; Japanese text uses 〜さん with furigana):
   Mateo → Shota (高橋《たかはし》 翔太《しょうた》, 19, warehouse worker; mother Mrs. Takahashi, replaces Doña Rosa)
   Lupe → Yumiko (46, hotel housekeeper, mother of three; 由美子《ゆみこ》さん)
   Brayan → Ren (24, DJ and part-time driver; girlfriend Misaki; 蓮《れん》さん)
   Ramiro → Tetsuo Yamamoto (52, construction worker, lives alone; daughter Misaki; staff say 山本《やまもと》さん)
   Yesenia → Ayaka Nakamura (20, university student; 中村《なかむら》さん)
   Cultural details change with them (a curandero → a spiritual healer / お祓《はら》い; "nervios" → 自律神経《じりつしんけい》 or
   気《き》 expressions; church → temple or shrine visits where the detail matters; tequila → 焼酎《しょうちゅう》 / 日本酒《にほんしゅ》).
   Level labels: B1 → N4, B2 → N3, A2 → N5.
7. Japanese words quoted inside English notes also need furigana (the checker reads every string).
8. Risk content stays calm, direct and clinician-side, as in the source; add no method detail.

## Checks (all must pass before you report)
```
cd /home/claude/japanese
node --check <dst>
node tools/check-ja.js <dst>                                   # 0 errors; read every warning
node <dev-tools>/port/cmp-struct.js <src> <dst> <GLOBALS>            # "Structure matches; no Spanish left."
grep -n "Spanish\|español\|usted\|Hablemos\|988" <dst>         # nothing left except where plainly intended
```
Then re-read your Japanese once for wrong readings and unnatural phrasing.
Final reply (max 8 lines): counts of strings translated, English notes you changed, and up to five lines you are least sure about.
