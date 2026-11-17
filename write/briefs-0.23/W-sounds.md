# Writer brief: Sound-symbolic words (SOUND_WORDS)
Read COMMON-WRITE.md and PLAN-0.23.md sections A6 and E. Japanese patients describe pain, mood and body states with
giongo / gitaigo; this page teaches the ones a psychiatry resident and ward nurse hear most.
- 90 common, current words. Katakana or hiragana as usually written. `en` short; `note` only where a word has two senses
  or a register warning. One example sentence each, as a patient, family member or clinician would say it.
- `groups[].note`: one or two sentences on how to ask about that area (for example: どんな 痛み です か).
- `lv`: N4, N3 or N2 by how common the word is. No word twice. Ids s-001….
- Check the three topic sets that already hold some of these (grep -n "ムカムカ\|しくしく" js/data/topic-sets*.js) and agree with their glosses.
