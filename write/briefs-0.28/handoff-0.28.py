"""Update devtools/HANDOFF.md for 0.28.0. usage: python3 handoff-0.28.py <release sha> <main sha after audio> <clips total> <clips recorded> <secs> <audio MB> <usap state text>"""
import sys, re
rel, main, total, rec, secs, mb, usap = sys.argv[1:8]
p = '/home/claude/devtools/HANDOFF.md'
s = open(p, encoding='utf-8').read()

# 1. title line
first, rest = s.split('\n', 1)
first = ('# Hanashimashō — handoff (18 Nov 2026, evening, version 0.28.0 LIVE, main = %s, %s of %s clips; N1 first half is DONE; '
         '**Usap Tayo 3.19.0 (Picture mode in Vocabulary practice) is BUILT, %s**; next = 0.29.0 (N1 second half), see section 7)' % (main, total, total, usap))
s = first + '\n' + rest

# 2. section 3 bullet, before the 0.27.0 bullet
b28 = ('- **0.28.0 (N1, first half).** Level `N1` everywhere after N2 and before C: `LANG.levels`, `placementLevels`, `App.KANJI_LEVELS`, `App.LEVELS`, `LV_NAME` + `N1_IN_C` (js/kanji.js: the 56 reference-N1 kanji that stay level C, linked under the N1 chart, with the line "These are the 600 most frequent of about 1,230 N1 kanji; the rest come in the next version": REMOVE that line in 0.29.0), `setOf` (strokes.js, set `n1` → strokes/n1.js, 530 KB, in the sw.js precache), level lists in grammar.js, listen.js, vocab.js, leveltest.js, transform.js, cloze.js, build.js, pairs.js, errors.js, reply.js, soundwords.js, today.js, `LV_ORDER` (views.js); `check-ja.js` accepts N1 for lessons, kanji blocks, dictionary lines and drill items; `write/chk-023.js` accepts lesson level N1 and no longer demands `after` from lessons-45 and later. '
       'A page shows N1 only where it has content: N1 shows on Lessons, Kanji (chart, drill, list, cards), Writing sheet, Dictionary, Vocabulary quiz, Listening (words and lesson sentences), Sentence builder and Level review test (about 30 items: grammar from lesson quizzes, order, vocabulary, kanji; cloze, context and reading sections are skipped while empty); hidden until 0.29.0 gives them items: Fill the blank, Transform, Word pairs, Find the mistake, Listen and reply, Sound words, Reading, Speaking, the trainer, Topic matching. Today\'s practice gives an N1 learner N2 items from drills without N1 items. '
       'Lessons `lessons-45..52.js` (24, ids `n1-*`, one unit of 3 per file, NO `after`: they load last and so sit after N2; plan `write/briefs-0.28/N1-LESSON-PLAN.md`): units The moment something happens, Reaching the extreme, If and only if, Even so, Grounds and standards, How it looks and sounds, Must, must not, cannot, Judging and summing up. Every pattern is marked say / understand with its register and, for "understand", the plain form to say instead. Kanji `kanji-n1a..e.js` (600 = the most frequent of the 1,176 reference-N1 kanji not yet in the app, 120 a file, lists `write/briefs-0.28/n1a..e.txt`; the other 576 are in `n1-rest-for-0.29.txt`; registered after kanji-n2c.js). Dictionary `dict-n1-1..3.js` (1,324 words from the N1 kanji pages: 810 at level N1, the rest lower or C; registered after dict-words-5.js; append only from now on). Placement: 35 questions, results … N2 / N1 (30 right → `n1-ga-hayai-ka`) / N1+ (35 → #/psych). '
       'Spacing conventions new in N1: `もの を` is split (the app only: the lesson says it is normally written ものを), `す べく` / `す べからず` like `す べき`, `そば から`, stem + がてら joined, noun + がてら spaced, `ことずくめ` joined, `と あって は`, `なくして は`, `に して は` split before は. Totals: 237 lessons in 58 units (Starter 6, N5 47, N4 64, N3 32, N2 64, N1 24), 1,649 kanji (N1 600), 6,047 dictionary words.\n')
marker = '- **0.27.0 (more picture sets, Picture mode).**'
assert marker in s
s = s.replace(marker, b28 + marker, 1)

# 3. status table row
row = ('| 0.28.0 (live) | N1 first half: 24 lessons in eight units, the first 600 N1 kanji with stroke order, 1,324 dictionary words, five N1 placement questions (35), N1 in the level filters that have content. 237 lessons, 1,649 kanji, 6,047 words. %s of %s clips (the job recorded %s in %s s), audio about %s MB of GitHub Pages\' 1 GB |\n' % (total, total, rec, secs, mb))
marker = '| 0.27.0 (live) |'
assert marker in s
s = s.replace(marker, row + '| 0.27.0 |', 1)
s = re.sub(r'## 6\. Status \(version 0\.27\.0, pushed to main 18 Nov 16:02 as 561d1f51; audio commit f159a720\)',
           '## 6. Status (version 0.28.0, pushed to main 18 Nov as %s; main after the audio commit = %s)' % (rel, main), s)

# 4. section 7 top block
blk = open('/home/claude/work/handoff-0.28-block.md', encoding='utf-8').read()
blk = blk.replace('{REL}', rel).replace('{MAIN}', main).replace('{TOTAL}', total).replace('{REC}', rec).replace('{SECS}', secs).replace('{MB}', mb).replace('{USAP}', usap)
marker = '## 7. Next steps\n'
assert marker in s
s = s.replace(marker, marker + '\n' + blk + '\n', 1)
s = s.replace('**First, in a new chat:** restore, run the checks (0.27.0 live, 33,519 clips;', '**First, in a new chat:** restore, run the checks (0.28.0 live, %s clips;' % total)

# 5. pitfalls
pit = open('/home/claude/work/handoff-0.28-pitfalls.md', encoding='utf-8').read()
marker = '\n## 9. Files to re-attach'
assert marker in s
s = s.replace(marker, pit + marker, 1)
open(p, 'w', encoding='utf-8').write(s)
print('ok', len(s))
