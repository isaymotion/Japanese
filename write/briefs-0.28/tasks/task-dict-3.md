You are the WRITER of one dictionary data file for Hanashimashō, a Japanese-learning web app for an English-speaking psychiatry resident.

Read /home/claude/work/DICT-BRIEF.md (file shape, columns, codes, rules) and then /home/claude/work/DICT-KW-TASK.md (this task: turning kanji example words into dictionary lines). Changes to those briefs for this job:
- Your input: /home/claude/work/new-0.28/n1w-02 (one word per line: `N1 | kanji | word | gloss`; the words and readings were already reviewed).
- Your output: /home/claude/work/new-0.28/dict-n1-3.js, header "Dictionary part: words from the N1 kanji pages, part 3 of 3", first line of the block `# from N1 kanji`.
- Level column: N5, N4, N3, N2, N1 or C are all allowed now. Give the level of the WORD: most of these are N1 or N2; common everyday words are lower; technical clinical words are C.
- Categories: those in the brief plus `animals`, `things`, `clothes`.
- One line per input line, same order. The only lines you may skip are personal or place names and non-words (list them).
- Glosses must be dictionary-accurate; verbs start with "to"; v1 / v5 must be right (the app conjugates from it); する-nouns without する, typed `vs` only when really used with する.
- Write every line yourself (no generating script that invents glosses).
- /home/claude/japanese is READ ONLY. Write only your one file. No git commands.

Checks (from /home/claude/ja-code; RELATIVE path):
```
cd /home/claude/ja-code
node --check ../work/new-0.28/dict-n1-3.js
node tools/check-ja.js ../work/new-0.28/dict-n1-3.js     # must end 0 error(s)
```
Final message (short): file path, number of lines, checker's last line, skipped words, readings you changed, lines you were unsure about.
