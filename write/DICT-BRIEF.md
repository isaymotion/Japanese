# Brief: write one dictionary file for Hanashimashō

Hanashimashō is a Japanese-learning web app for an English-speaking psychiatry resident. You are writing ONE dictionary
data file. Repo: /home/claude/japanese. Touch only the file you are assigned. Do not run git commands.

1. Read `/home/claude/japanese/tools/AUTHORING.md` (the notation: the reading in 《》 after EVERY kanji run, in hiragana,
   correct for that word). Look at `/home/claude/japanese/js/data/dict-clinical.js` (first 60 lines) for the style.
2. File shape:
```
/* Dictionary part N: <what it holds>. DRAFT FOR REVIEW by a native Japanese speaker.
   Format per line: japanese | english | part of speech | category | level | note (optional)
   APPEND ONLY: word ids follow the order of the lines in this file, so add new words at the end and never reorder. */
window.DICT_RAW = window.DICT_RAW || [];
window.DICT_RAW.push(`
# a comment line naming a group (optional)
食欲《しょくよく》 | appetite | n | health | N4
`);
```
3. Columns:
   - **japanese**: the dictionary form, with furigana. Verbs in the plain dictionary form (食《た》べる). する-nouns WITHOUT する
     (勉強《べんきょう》), with part of speech `vs`. な-adjectives without な. No spaces inside a single word; a set phrase of
     several words has one space between words with particles separate (気《き》 に なる).
   - **english**: short dictionary gloss. Verbs start with "to". Separate close senses with a comma, different senses with
     a semicolon. No Japanese, no `|`.
   - **part of speech**, exactly one of: n (noun) · v1 (る-verb, ichidan) · v5 (う-verb, godan) · vs (する noun) ·
     vi (irregular verb: する, 来る and their compounds written with する/来る) · ai (い-adjective) · an (な-adjective) ·
     adv (adverb) · pron · part · conj · interj · num · ctr (counter) · q (question word) · pre (prefix) · suf (suffix) · phr (phrase).
     Get v1 / v5 right (帰《かえ》る, 走《はし》る, 切《き》る, 入《はい》る, 知《し》る, 要《い》る, 減《へ》る, 焦《あせ》る, 限《かぎ》る, 滑《すべ》る, 握《にぎ》る are v5).
   - **category**, exactly one of: basics · grammar · pronouns · questions · numbers · counters · time · people · family ·
     body · food · home · money (work, school and money) · places · travel · nature · adjectives (describing words) ·
     verbs (common verbs) · adverbs · emotions · health (health and symptoms) · mind (mind and perception) ·
     risk (risk and safety, clinical) · substance (alcohol and substances) · meds (medication) · hospital (hospital and care) ·
     clinical (clinical terms) · mimetic (sound-symbolic words) · idioms (expressions of distress) ·
     society (society, ideas and abstract words). Choose by meaning: a clinical verb goes in its clinical category, an
     everyday verb in `verbs`, an everyday adjective in `adjectives`.
   - **level**: N5, N4, N3, or C (clinical or advanced: beyond N3). It is the level of the WORD, approximately.
   - **note** (optional, most lines have none): one short useful fact, such as a usage contrast or a short example with
     its meaning (`薬《くすり》 が 効《き》く = the medicine works`). Japanese in a note needs furigana and word spacing.
4. Rules: common, standard words only. Never guess a reading; if unsure of a word, leave it out. No product names, no
   doses, no method detail for self-harm, no claims about Japanese law or services. No backticks and no `${` anywhere.
5. Do not repeat a word the dictionary already has. The existing words are listed, one per line (word, tab, gloss), in
   `/home/claude/work/have.txt`, and words that other writers are adding now are in `/home/claude/work/kw/plain.txt`
   (one per line). Check with `grep -n "^WORD" /home/claude/work/have.txt` and `grep -nx "WORD" /home/claude/work/kw/plain.txt`.
   The same spelling with a clearly different meaning or reading is allowed.
6. Checks, from /home/claude/japanese:
```
node --check js/data/<file>.js
node tools/check-ja.js js/data/<file>.js       # must end with 0 error(s); read each warning
node /home/claude/work/dictdup.js js/data/<file>.js      # lists words already in the dictionary or repeated in your file
```
7. Final message: the file path, the number of lines, the checker's last line, and any words you were unsure about.
