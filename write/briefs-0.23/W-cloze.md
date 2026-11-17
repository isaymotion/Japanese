# Writer brief: Fill the blank (GRAMMAR_CLOZE)
Read COMMON-WRITE.md and PLAN-0.23.md sections A3 and E. For each lesson of your level (list them:
node -e "global.window=global;const fs=require('fs');window.LESSONS=[];for(const f of fs.readdirSync('js/data').filter(f=>/^lessons-\d/.test(f)))eval(fs.readFileSync('js/data/'+f,'utf8'));LESSONS.filter(l=>l.level==='N5'&&!l.review).forEach(l=>console.log(l.id,'|',l.title))"
run in /home/claude/japanese with your level; lessons written in this build may still be empty stubs: use the ids and
patterns in PLAN section C for those) write the stated number of items testing THAT lesson's patterns; `l` = the lesson id.
- The blank replaces the grammar being tested: a particle, an ending, a pattern word or a conjugated form. For a
  conjugated form the options are forms of the SAME word or competing patterns in the form that fits the slot.
- Exactly 4 options, one right. The three others must be wrong for a reason you can name (ungrammatical here, or a
  different meaning from `en`). No two options that are both acceptable. Vary the answer's position.
- `why`: one sentence a learner can act on. `en` translates the completed sentence.
- Sentences must stand alone, be new (not copied from the lesson), and use the level's vocabulary.
