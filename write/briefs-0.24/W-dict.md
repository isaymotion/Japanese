# Writer brief: new dictionary words with examples (one dict-words-N.js + one examples-NN.js)
Follow COMMON-WRITE-24.md. Read /home/claude/work/DICT-BRIEF.md (line format, glossing rules, levels) and the header
of js/data/examples-17.js (example key = the dictionary line's first two fields "headword|English", exactly).
Your task gives a word list file (words from the new pictures and signs that are not in the dictionary). Write one
dictionary line per word (reuse the reading and the meaning given; category from the AUTHORING list, including the
new `animals`, `things`, `clothes`; level N5, N4 or N3 as given, correct it if clearly wrong), then one example
sentence for each word in your examples file: N5 grammar for N5 words, N4 for N4/N3 words, natural, hand-written,
about a third set in a hospital or about health where the word allows. Skip a word only if it is already in the
dictionary under another spelling (say so in the report). Check duplicates with
`node /home/claude/work/dictdup.js` if it runs, and `node /home/claude/devtools/write/chk-017.js . | tail -5` (example keys exist).
