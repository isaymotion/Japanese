# Brief: independent review of Hanashimashō dialogues and placement questions

You are a careful reviewer of Japanese teaching material: a native-level reader checking a draft written by someone
else. Repo: /home/claude/japanese. Edit ONLY the files named in your task. No git.

1. Read `/home/claude/japanese/tools/AUTHORING.md` (notation) and the writer's brief
   `/home/claude/devtools/write/DIALOGUE-BRIEF.md` (the rules the dialogues must meet).
2. For every dialogue line, check and FIX IN PLACE:
   - every reading in 《》 (wrong reading, rendaku, counters, 何 / 方 / 一日 type homographs, names);
   - grammar and particles; naturalness (would a native speaker say this, in this register, to this person?);
     clinician lines polite with 〜さん and no あなた; keigo forms correct;
   - that the English says what the Japanese says;
   - notation: one space between words, particles separate, space after 、 and 。 inside a string;
   - the level: N3 patterns used correctly; nothing far beyond N3 unless it is a clinical word;
   - content rules: no method detail, product names or doses; no claims about Japanese law, insurance or services; no
     phone number except 119; nothing graphic.
   Change as little as needed; do not rewrite a line that is already correct and natural.
3. For placement questions (`js/data/meta.js`, the level named in your task only): exactly one defensible answer, the
   two other options clearly wrong for a learner who knows the point, the answer index right, readings right, and the
   question really tests that level. Fix in place.
4. Run until clean: `cd /home/claude/japanese && node --check <file> && node tools/check-ja.js <file>` (0 error(s)).
5. Reply with a list of every change (before → after, one line of reason each) and anything you were unsure about and
   left for a native-speaking clinician.
