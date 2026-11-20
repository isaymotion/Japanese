# Hanashimashō 1.1.0 — Immersion (plan, 20 Nov 2026)

Her request: a new "Immersion" section with links to YouTube channels, radio stations and the like; "live translation"
agreed as: YouTube captions, a device live-caption guide, and a look-up box. Hanashimashō first; Usap Tayo and Hablemos
are later ports, so keep the engine language-neutral (all language-specific text lives in the data file).

## Page
Route `#/immersion` (menu key `immersion`, title "Immersion", in the Practice group of the menu, a tile section
"Immersion" on the Practice page and one tile on Home's practice area if there is an obvious place).
Tabs (`?tab=`): `watch` (YouTube and video), `listen` (podcasts and radio), `read` (easy news, graded readers, sites),
`captions` (the live-caption guide), `mine` (starred sources; shown only when there is at least one star).
Above the tabs, on every tab: the **look-up box** (collapsible card "Look up a word you hear").
Filters on watch / listen / read: level seg (All, Starter, N5, N4, N3, N2, N1; saved in `state.settings.immLv`;
a source shows at a level when its `lv` range includes it) and a group select.
The page needs internet: show one calm line "These links open other sites and need internet" and, when
`navigator.onLine === false`, a notice instead of Play buttons.

## Data: `immersion/sources.js` (OUTSIDE js/data: no recording job, not read by collect-texts)
```
window.IMMERSION = {
  checked: '2026-11',                      // month the links were last checked (shown on the page)
  groups: [{ id, tab: 'watch'|'listen'|'read', title, note }],
  sources: [{
    id: 'im-001',                          // permanent, append only
    g: '<group id>',
    kind: 'youtube'|'podcast'|'radio'|'news'|'reader'|'site'|'video',
    title: 'Name as the source writes it (Latin letters or English)',
    ja: 'Japanese name in the app notation with readings 《》, or omitted',
    url: 'https://…',                      // the page to open
    yt: { list: 'UU…' } | { v: '<video id>' } | undefined,   // only for kind youtube: what to play inside the app
    lv: ['N5','N3'],                       // lowest and highest level it suits (same value twice = one level); 'Native' allowed as the top
    speaks: 'ja'|'ja+en',                  // language spoken
    cc: 'ja'|'ja+en'|'auto'|'none'|'',     // captions: human Japanese / Japanese and English / automatic only / none / unknown
    geo: ''|'Japan only'|'…',              // where it does not play
    cost: 'free'|'free+paid',
    en: 'One line, at most 140 characters, in our own words: what it is and why it helps.',
    tip: 'Optional: how to use it at this level, at most 160 characters.',
    clin: true|undefined                   // health or clinical Japanese
  }],
  captions: [{ id, title, device, steps: ['…'], note, link: { label, url } }],   // the guide, one card per device or app
  tips: [{ lv, text }]                     // how to immerse at each level, 2 to 3 lines each
};
```
In-app playback (kind youtube with `yt`): a "Play here" button that only THEN creates an iframe to
`https://www.youtube-nocookie.com/embed/…` (`videoseries?list=` for a playlist, `/<v>` for a video) with
`cc_load_policy=1&cc_lang_pref=<settings.immCc 'en'|'ja'>&hl=en&rel=0&playsinline=1`; nothing from YouTube is loaded
before the tap. Always also an "Open on YouTube" link (target _blank, rel noopener). A captions switch on the page:
"Captions in: English / Japanese" (`settings.immCc`, default en).
No speaker buttons on this page (the recorded voice pack has no clips for these names; qa/audio.py would fail).

## Rules for sources
- Only sources that are real, alive (published something in 2026, or a finished series that is still online), free to
  start, and safe for a hospital audience. No piracy, no anime/drama rips, no re-uploads of TV programmes, no adult
  content, no gambling, no channel selling a medical cure. Health sources only from public bodies, hospitals,
  universities, national broadcasters or professional societies.
- Every URL was opened by the person listing it (WebFetch or WebSearch result that shows it), on the date given.
  A source that could not be opened is listed in a separate "unverified" array with the reason, never in the main list.
- Descriptions are our own words, plain English, no superlatives, no subscriber counts, no claims that will go stale.
- Japanese names in the app notation: reading in 《》 after each kanji run, one space between words.
- No Japan-specific legal or service claims. A crisis line or helpline is never an immersion source.
