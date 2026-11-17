# Writer brief: Word pairs (WORD_PAIRS)
Read COMMON-WRITE.md and PLAN-0.23.md sections A5 and E. Prefer words already in the app's dictionary
(grep -h "<word>" js/data/dict-*.js); a word's level is the dictionary's level when it is there.
- opp: true opposites learners should know as a pair (adjectives, verbs, nouns). - syn: near-synonyms with a one-line
  `note` on the difference in use or register. - col: words that go together: `a` = noun + particle, `b` = the verb or
  adjective in dictionary form, `en` = the whole phrase; include body, symptom, medicine and daily-routine collocations
  (熱 が 出る, 薬 を 飲む, 気 に なる, 予約 を 取る) with no medicine names.
- No pair twice (in either order), no word used in more than two pairs. Each pair must have ONE obvious partner within
  its level and type, so a matching game of six pairs is fair. Ids p-<level>-NNN in order.
