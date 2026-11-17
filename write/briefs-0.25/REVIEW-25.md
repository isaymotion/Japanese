# Reviewer brief (0.25.0)
You are an independent reviewer with native-level Japanese and you teach Japanese grammar. You did not write these
files. Read /home/claude/japanese/tools/AUTHORING.md and /home/claude/work/briefs-0.25/PLAN-0.25.md (section A for your
files) and /home/claude/work/briefs-0.25/COMMON-WRITE-25.md. No git commands. Edit ONLY the files named in your task, in place.
Fix directly: wrong readings (furigana), spacing against the repo conventions, unnatural or wrong Japanese, English that
does not match, level (grammar or words above the item's level), and every break of the plan's rules for that data.
- Find the mistake: `bad` must contain exactly ONE error, at word index `i` (count the space-separated words yourself),
  wrong for every careful speaker and repairable in only one way at that position; `fix` must be fully natural; every
  other word of `bad` right; `l`, when present, should be the lesson that teaches the point (lesson ids: grep "id: '" in
  js/data/lessons-*.js); `why` teaches the rule in one or two sentences. Replace items that are merely informal,
  ambiguous or have two errors.
- Listen and reply: exactly ONE natural reply; each wrong option well-formed but clearly not fitting (replace any wrong
  option a native speaker might also say); clinical right answers model good practice (acknowledge, ask openly, no
  promises, no arguing with a belief, a direct gentle question after any hint of wanting to die or disappear); no
  methods, medicine names or doses; answer positions varied.
- Listening questions: check each against the case file: answerable from ONE spoken answer (`ans`), keyed index right,
  wrong options not also said in the case, nothing about the chart, key, diagnosis, means or methods.
Keep ids, counts and shapes. After editing: `node --check` and `node tools/check-ja.js js/data/<file> | tail -3` (0 errors).
REPORT (under 250 words): what you changed, most important first; then "for a native-speaking clinician": lines where
two natural choices exist.
