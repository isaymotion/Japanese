# Research brief — immersion sources for Hanashimashō 1.1.0

You are collecting real, working links for the "Immersion" page of Hanashimashō, a Japanese-learning web app for a
Filipino psychiatry resident and her colleagues (complete beginner up to N1; psychiatric interviewing in Japanese).
Read /home/claude/work/briefs-1.1/PLAN-1.1.md first (data shape and rules). Your bucket is in the task message.

How to work
1. Use WebSearch to find candidates and WebFetch to open each one. A source goes in `sources` only if YOU opened its
   page (or a search result showed that exact URL with recent content) today. Otherwise it goes in `unverified` with why.
2. For a YouTube channel give the canonical channel URL (https://www.youtube.com/@handle). Try to find the channel id
   (starts with UC, 24 characters): fetch the channel page and look for "channelId", "externalId" or a link
   /channel/UC…; if you find it, set `yt: { list: 'UU' + <the id without its first two letters> }` (that is the
   channel's uploads playlist). If you cannot find the id with certainty, leave `yt` out and put "no channel id" in
   `notes`. Never guess an id.
3. Judge level honestly from what the page shows (speed, whether English is used, whether there are Japanese
   subtitles). If you could not tell whether captions exist, set `cc: ''`.
4. Check for recent activity (a 2026 upload or episode). A finished series that is still online is fine: say so in `notes`.
5. Radio and broadcaster sites: find out whether the stream plays outside Japan; if the site says it is limited to
   Japan, set `geo: 'Japan only'`. If you cannot tell, write `geo: 'may be Japan only'`.
6. Aim for the count in your task message; fewer good ones beat padding. No duplicates of one source under two names.

Write ONE file: /home/claude/work/new-1.1/<bucket>.json
```
{ "bucket": "…", "date": "2026-11-20",
  "sources": [ { …fields of the plan (without id)…, "notes": "what you saw when you opened it; how you judged the level", "opened": "URL you actually fetched" } ],
  "unverified": [ { "title": "…", "url": "…", "why": "…" } ],
  "suggested_groups": [ { "title": "…", "note": "one line" } ] }
```
Validate it with `python3 -c "import json;json.load(open('<file>'))"`. Your final message: counts, anything you are
unsure about, and nothing else. Do not edit any other file. Do not quote more than a few words from any site.
