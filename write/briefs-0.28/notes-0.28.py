"""Update devtools/BUILD-NOTES.md for 0.28.0. usage: python3 notes-0.28.py <clips total> <audio MB>"""
import sys, re
total, mb = sys.argv[1:3]
p = '/home/claude/devtools/BUILD-NOTES.md'
L = open(p, encoding='utf-8').read().split('\n')
i = next(k for k, l in enumerate(L) if l.startswith('## Sister apps')) - 2
L.insert(i + 1, '\n### 0.28.0 (18 Nov 2026, live)\n- N1, first half: 24 grammar lessons in eight units (The moment something happens, Reaching the extreme, If and only if, Even so, Grounds and standards, How it looks and sounds, Must, must not, cannot, Judging and summing up), each pattern marked say or understand with the plain form to say instead; the 600 most frequent N1 kanji with stroke order and writing sheets (the other 576 come in 0.29.0); 1,324 dictionary words from their pages; five N1 placement questions (35) with an N1 result; N1 in the level filters of lessons, kanji, writing sheet, dictionary, vocabulary quiz, listening, sentence builder and level review test. 237 lessons in 58 units, 1,649 kanji, 6,047 dictionary words. Decided by the main chat: N1 kanji in two halves; no risk content in the N1 lessons; forms that can sound judgemental are never aimed at a patient or family. Lines for a native-speaking clinician: `write/briefs-0.28/NATIVE-CHECK-0.28.md`.')
j = next(k for k, l in enumerate(L) if l.startswith('- Audio (18 Nov): the recorded voice pack is complete at'))
L[j] = L[j].replace('- Audio (18 Nov): the recorded voice pack is complete at', '- Audio (18 Nov, evening): the recorded voice pack is complete at %s clips after 0.28.0, about %s MB; N1 in full is estimated to bring it to about 830 MB; before that it was complete at' % (total, mb), 1)
k = next(k for k, l in enumerate(L) if l.startswith('- The placement test, lessons, kanji, readings'))
L.insert(k + 1, '- N1 (0.28.0): the first half is in: 24 lessons, 600 of about 1,230 kanji, their dictionary words and the placement band. Not yet at N1: the other kanji, the second 24 lessons, readings, dialogues, example sentences, trainer words, drills, extras and unit reviews (0.29.0 and after).')
m = next(k for k, l in enumerate(L) if l.startswith('## Sister apps'))
L.insert(m + 1, '- **Usap Tayo 3.19.0 (18 Nov, built)**: Picture mode on its Vocabulary practice page (a ninth game: a picture with one pin or an emoji card, four Tagalog words, sources All pictures or one picture group, level All / A1 / A2; 596 picture questions). Built in a read-only clone because the session was not allowed to push to isaymotion/Tagalog; see the top of section 7 of the handoff for its state and how to publish it.')
open(p, 'w', encoding='utf-8').write('\n'.join(L))
print('ok')
