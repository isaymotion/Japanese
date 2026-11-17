# Coder C: vocabulary modes (js/vocab.js), Word pairs (js/pairs.js), Sound-symbolic words (js/soundwords.js)
Read COMMON-CODE-23.md first. Also read js/vocab.js fully: you extend it, keeping every existing mode and saved score working
(qa/vocab.py and qa/topic-levels.py must still pass; run them).
## Two new modes in the Vocabulary quiz (#/vocab)
- "In context": for words that have an example sentence (App.exampleFor / DICT_EX): show the sentence with the headword's
  token blanked, the English of the sentence, and 4 options = the answer plus 3 dictionary words of the same part of speech
  and level, ALL shown in dictionary form (say so in a one-line hint: "Choose the word; it may change its ending in the
  sentence"). Find the token by the headword's kanji stem or kana stem; skip words where no single token matches. After the
  answer show the full sentence with speaker. Report how many words per level are usable.
- "Type it": show the English (and part of speech), the learner types the word in kana or romaji; right if it equals the
  word's reading (App.DICT kn) after normalising; "I don't know" reveals it and counts wrong. Then show the word with
  furigana, speaker, link to the word page.
Both use the existing deck picker, App.recordAnswer(ok, cardId) and score storage (new mode keys beside the old ones).
## Word pairs, #/pairs → V.pairs
Data WORD_PAIRS. Tabs: Learn (list by type and level; each pair with speakers and the note), Match (6 pairs: tap one on the
left, its partner on the right; timer and best time like the topic matching in vocab.js: reuse its look), Quiz (given `a`
and the type, "Opposite of …", "Similar to …", "Which word goes with …", choose `b` among 4 from the same type and level).
Level seg and type seg (Opposites, Similar words, Go together).
## Sound-symbolic words, #/sounds → V.sounds
Data SOUND_WORDS. Tabs: Learn (by group: group note, then each word with speaker, meaning, example sentence with speaker),
Quiz (word → meaning, meaning → word, and "listen and choose" where the word is played and hidden), Match (6 words to 6
meanings within a group). Group filter.
