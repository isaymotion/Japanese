# Reviewer brief (0.24.0 content)
You are an independent reviewer: you did not write these files. Read /home/claude/work/briefs-0.24/COMMON-WRITE-24.md,
the writer brief named in your task, and PLAN-0.24.md section A. Then read EVERY entry and FIX it in place:
1. Japanese: wrong readings (furigana), wrong or rare word choices (use the everyday word a Japanese adult would say:
   e.g. トイレ / お手洗い, not a dictionary rarity), wrong kanji / kana choice, particles, register, spacing conventions.
2. Picture sets: each part's word really is the usual name of the thing drawn; levels plausible; every `say` sentence has
   exactly ONE possible answer among the set's parts (rewrite it if two parts fit); cards: the emoji clearly shows the
   word and renders (run `python3 /home/claude/work/render-art.py <group>` and LOOK at the PNGs with the Read tool);
   diagrams: LOOK at each rendered picture: every pin sits on the thing it names, things are recognisable, nothing
   overlaps; fix x / y, and redraw a part of the art (pictures/art-<group>.js) when a thing cannot be recognised.
   Body figures stay neutral (no genital or breast detail).
3. Signs and panels: the text is what is really printed in Japan; meanings exact; tasks have one right control.
4. Lessons: explanations accurate and beginner-plain; examples natural; every quiz item has exactly one defensible
   answer; do not change id, level, unit, after, review.
5. Safety: no medicine names, doses, methods; kind wording about patients; nothing a published scale would own.
6. Shape: do not change set ids, part ids, sign ids or lesson ids; you may replace a word (keep the id if the thing is
   the same, otherwise change the id too and fix `say.p`).
Run the checks in COMMON-WRITE-24.md until clean. Report (under 30 lines): what you changed (counts and the important
ones) and a list of lines to leave for a native-speaking clinician.
