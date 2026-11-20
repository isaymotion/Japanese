# Reviewer brief — immersion sources, Hanashimashō 1.1.0

You are an independent reviewer; you did not write the file you are given. Read /home/claude/work/briefs-1.1/PLAN-1.1.md
(data shape and "Rules for sources") and /home/claude/work/briefs-1.1/RESEARCH-BRIEF.md (what the researcher was told).
Your file is /home/claude/work/new-1.1/<bucket>.json; write the reviewed version to
/home/claude/work/new-1.1/reviewed/<bucket>.json (same structure; create the folder). Today is 20 November 2026.

For EVERY source
1. Open its `url` yourself with WebFetch (for YouTube use the /channel/UC… form if the @handle will not open). If it
   does not open, or is not what the entry says, move it to `unverified` with the reason. Do not go around a blocked
   site with another tool, a cache or a mirror: a blocked site is simply "could not be opened".
2. Check the rules: real, official (the maker's or rights-holder's own page), free to start, safe for a hospital
   audience, no piracy, no gambling, no state propaganda outlets, health content only from public bodies, broadcasters,
   universities, hospitals or professional societies, no helplines as sources. Remove what fails (list it under
   "removed" with the reason).
3. Recent activity: try one WebSearch for evidence of 2026 activity. Add a field `active`: '2026' (you saw dated 2026
   evidence), 'archive' (finished but online), or 'unknown'.
4. For YouTube: confirm the channel id in `yt.list` matches the page you opened ('UU' + id without 'UC'). If you
   cannot confirm it, delete `yt`.
5. Fix `lv` (two values, lowest and highest, from: Starter, N5, N4, N3, N2, N1, Native), `speaks`, `cc` ('' when
   unknown: never guess), `geo`, `cost`.
6. Rewrite `en` (at most 140 characters) and `tip` (at most 160) in plain English, our own words, no superlatives, no
   numbers that go stale, nothing copied from the site, no claims about Japanese law or services. The tip says how a
   learner at that level should use it (for example "Turn on Japanese captions and watch one 5-minute video twice").
7. `title`: the name as the source writes it in Latin letters, or a plain English name if it has none. `ja`: only when
   the source has a Japanese name: write it in the app notation — a reading in 《》 straight after each run of kanji,
   one space between words, kana and Latin letters as they are (日本語《にほんご》 の 森《もり》). If you are not sure of
   a reading, leave `ja` out and say so in your report.
8. Suggest a group id and title for each source in `g` from this fixed list (tell me if one is missing):
   watch: w-english (Lessons explained in English), w-japanese (Lessons in easy Japanese), w-jlpt (N3 to N1 grammar
   and keigo), w-news (News), w-life (Everyday Japan: cooking, science, culture), w-health (Health and medicine);
   listen: l-learner (Podcasts for learners), l-native (Native podcasts), l-radio (Radio);
   read: r-news (Easy news), r-readers (Graded readers and courses), r-library (Magazines and libraries),
   r-tools (Dictionaries and tools), r-health (Health and care Japanese).
9. Also look at the researcher's `unverified` list: if you can open one and it passes, add it as a source.
Keep `notes` and `opened` updated with what YOU saw. Validate the JSON with python3.
Final message: counts (kept / removed / moved to unverified / added), every reading in `ja` you are unsure of, and
anything the main chat must decide. Do not edit any other file.
