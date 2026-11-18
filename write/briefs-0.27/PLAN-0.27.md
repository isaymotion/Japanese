# Hanashimashō 0.27.0: six new picture sets with drawings, two redraws, Picture mode in the Vocabulary quiz
Shapes and art rules: /home/claude/work/briefs-0.24/PLAN-0.24.md section A1 and A2 (unchanged). Common writer rules:
/home/claude/work/briefs-0.24/COMMON-WRITE-24.md, EXCEPT that in this build you work on DRAFT FILES OUTSIDE the repo, in
/home/claude/work/new-0.27/ (never edit anything under /home/claude/japanese; a test suite is running there).

## New sets (all kind 'diagram', each with its own drawing; 12 to 16 parts, 10 `say` sentences)
| file pair (in new-0.27/) | set id | group | lv | idea |
|---|---|---|---|---|
| picture-sets-more-1.js + art-more-1.js | shops | town | N5 | a shopping street: a row (or two rows) of small shop fronts, each recognisable from the goods in its window or on its sign-board DRAWN AS A PICTURE (bread, fish, vegetables, meat, book, flower, shoe, scissors-and-comb …), plus street things (vending machine, shopping basket or bag, till). Words such as パン屋, 八百屋, 魚屋, 肉屋, 本屋, 花屋, スーパー, 靴屋, 美容院 or 床屋, 自動販売機 … |
| | pharmacy-counter | town | N4 | at the pharmacy counter: pharmacist behind the counter, prescription, medicine bag, tablets, capsules, powder, liquid medicine, eye drops, ointment, compress, medicine notebook (お薬手帳), number ticket, glass of water, chair … Label words only: NO medicine names, doses or products. |
| picture-sets-more-2.js + art-more-2.js | kitchen-tools | home | N4 | kitchen tools laid out on a worktop or hanging on a rail: chopping board, ladle, kettle, bowl, colander, spatula, lid, rice paddle, cooking chopsticks, sponge, tea towel, measuring cup, grater, tin opener … (the set `kitchen` already has 包丁, 鍋, フライパン, 皿, コップ, 流し: prefer new words) |
| | ward-room | town | N4 | a patient's bed space on a general ward: bed, pillow, blanket or futon, sheet, bed rail, curtain, nurse call button, over-bed table, bedside cabinet or drawer, locker, slippers, name card, wash basin, window, rubbish bin … (the cards set `ward-things` already has 体温計, 車椅子, ベッド, マスク …: prefer new words; ベッド itself may be repeated). A calm, ordinary room: no restraints, no drip stand needed, nothing frightening. |
| picture-sets-more-3.js + art-more-3.js | sports-hobbies | daily | N5 | sports and hobbies shown as a tidy grid of drawn objects, one per word (football, baseball bat and ball, tennis racket, swimming, running shoe, bicycle is already elsewhere, guitar, piano keys, camera is elsewhere so prefer others, paintbrush and palette, book, fishing rod, go or shogi board, karaoke microphone, hiking boot / mountain, garden trowel …). Words are the ACTIVITY (サッカー, 野球, テニス, 水泳, 音楽, 絵, 読書, 釣り, 旅行, 散歩 …). |
| | clock-calendar | daily | N5 | a wall clock and a month calendar side by side (and, if it helps, a small digital clock or alarm clock): the things to name are the clock, long hand, short hand, second hand, the calendar, a month, a week (one row), a day (one square), the weekday row, today (circled), yesterday / tomorrow (neighbouring squares marked by an arrow), weekend (shaded columns), public holiday (shaded square), morning / afternoon (sun low / sun high icons) … Choose 12 to 14 that can each be pointed at without doubt. The art rules forbid <text>: use tick marks for the clock, and plain empty squares or small strokes for the calendar (digits drawn as simple path strokes are allowed if you need a few). |

Rules that matter most here:
- Every part is ONE word a learner can point at; the pin (22 units wide) sits ON the thing (for a small thing, at its edge) and pins are at least 26 units apart. A stranger must be able to say what each pin points at.
- `w` is the everyday word; levels N5 / N4, at most a quarter N3, none above.
- `say`: 10 sentences per set, each with exactly ONE possible answer part; at least a third health- or hospital-related where the topic allows (pharmacy and ward: most of them; gentle and polite).
- vb width 300 to 420, height 240 to 440; under 9 KB of svg per art.
- File wrappers are already in your two stub files: keep the header comment lines, fill the arrays / entries.

## Render and look (required, at least THREE look-and-fix rounds per drawing)
  python3 /home/claude/work/render-art2.py <your data file> <your art file> [set id]
prints PNG paths (light and dark, drawn at 680 px = twice phone size). Open the light PNG with the Read tool and judge it
as a stranger would. Also remember it is shown at 340 px on a phone: no tiny details.

## Checks (run from /home/claude/japanese, files given by path; all must be clean for YOUR files)
  node --check <data file> && node --check <art file>
  node tools/check-ja.js ../work/new-0.27/<data file name> | tail -5          # relative path, 0 errors
  node /home/claude/work/chk-024.js . /home/claude/work/new-0.27/<data file> /home/claude/work/new-0.27/<art file> | grep -i "more-\|error(s)"
(chk-024 prints a warning "not a set id of PLAN C" for new set ids: ignore that one.)
Report in under 25 lines: the words chosen per set, and an "unsure" list (words, sentences, and any part of a drawing you think is still weak).
