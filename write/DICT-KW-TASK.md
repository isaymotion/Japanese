# Task: turn a list of kanji example words into dictionary lines

Read `/home/claude/work/DICT-BRIEF.md` first: it gives the file shape, the columns, the allowed part-of-speech and
category codes, the rules and the checks. This task adds the following.

Your input is a text file with one word per line:
`kanji level | kanji | word (already in the app notation, readings reviewed) | short gloss`
These words are shown on the app's kanji pages. Each needs a dictionary line so the learner can open it and add it to
flashcards. Write one dictionary line per input line, in the same order:

- Column 1: copy the word EXACTLY as given (do not change its readings or spelling), with two exceptions: if the entry is
  a する-verb written with する (for example 勉強《べんきょう》する), drop the する and use part of speech `vs`; if you are sure
  a reading is wrong, fix it and list it in your final message.
- Column 2: a dictionary-style gloss based on the given gloss (verbs start with "to"; keep it short; fix it if it is
  imprecise). If a noun is also commonly used with する, still gloss it as a noun and use `vs`.
- Column 3 and 4: part of speech and category, from the brief's lists.
- Column 5: the level of the word itself. The kanji level in your input is only a hint: a common everyday word is N5 or
  N4 even if its kanji is listed at N3; a technical clinical word is C.
- Column 6: no note for most lines. Add one only when it helps (a contrast with a look-alike word, or a short example).
- Put a `# kanji level` comment line (for example `# from N3 kanji`) wherever the level in the input changes.
- Skip a word only if it is a personal or place name, or not a real standalone word; list every skipped word in your
  final message. Do not add words that are not in your input.
- The duplicate check in the brief will report nothing from have.txt for your words (they were pre-filtered); ignore the
  instruction to grep kw/plain.txt, since that list is your own input.
