/* Views: home, search, dictionary, flashcards, lessons, reading, speaking, placement, progress, settings, What's New, About.
   Shared engine with Usap Tayo: language words come from js/lang.js (LANG); the dictionary, lessons, reading and
   dialogue data are optional and the pages say so when they are empty. */
(function () {
  const { esc, norm, shuffle, pick, icons } = App;
  const V = (App.views = {});
  const S = () => App.state;
  const LESSONS = window.LESSONS || [], READING = window.READING || [], DIALOGUES = window.DIALOGUES || [], PLACEMENT = window.PLACEMENT || [];
  const PSYCH_SECTIONS = window.PSYCH_SECTIONS || [], PSYCH_CASES = window.PSYCH_CASES || [];
  // Pages whose data has not arrived yet draw a notice instead of running on empty data (used by every module view).
  App.notYet = (el, title, what, crumbTo) => { el.innerHTML = (crumbTo ? '<div class="breadcrumb"><a href="#/psych">Psychiatry</a> / ' + esc(title) + '</div>' : '') + '<h1>' + esc(title) + '</h1>' + soon(what); return true; };
  const soon = (what) => '<div class="notice info">' + esc(what) + ' arrives in a later release of ' + esc(APP_META.name) + '. ' + esc(LANG.review) + '</div>';
  const lvPill = (lv) => '<span class="pill lv">' + esc(lv) + '</span>';
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  /* ---------- Reusable quiz ---------- */
  // qs: [{q, opts, a, exp, cardId}]
  App.runQuiz = function (el, qs, opts) {
    opts = opts || {};
    let i = 0, right = 0;
    const draw = () => {
      if (i >= qs.length) {
        const pct = Math.round((100 * right) / qs.length);
        el.innerHTML = '<div class="card stack"><h3>' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + ' ' + right + ' / ' + qs.length + '</h3>' +
          '<div class="progress"><i style="width:' + pct + '%"></i></div>' +
          '<div class="row"><button class="btn primary" data-act="retry">Try again</button>' + (opts.after || '') + '</div></div>';
        el.querySelector('[data-act=retry]').onclick = () => { i = 0; right = 0; qs = shuffle(qs); draw(); };
        opts.onDone && opts.onDone(right, qs.length);
        return;
      }
      const q = qs[i];
      const order = shuffle(q.opts.map((o, k) => k));
      // q.hideQ: listening item. The text is hidden until answered; the clip plays on load and from the big button.
      const play = () => App.speak(q.say, q.rate ? { rate: q.rate } : undefined);
      el.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + '</span>' + (q.say && !q.hideQ ? App.sayBtn(q.say) : '') + '</div>' +
        (q.hideQ
          ? '<div class="listen-q"><button class="btn primary" data-act="play" aria-label="Play again">' + App.icons.sound + ' Play again</button><span class="muted small">' + esc(q.hideQ === true ? 'Listen, then choose what the patient means.' : q.hideQ) + '</span></div><div class="tl" data-qtext hidden style="font-size:1.12rem;font-weight:600">' + esc(q.q) + '</div>'
          : '<div class="' + (q.tlq ? 'tl' : '') + '" style="font-size:1.12rem;font-weight:600">' + esc(q.q) + '</div>') + (q.sub ? '<div class="muted">' + esc(q.sub) + '</div>' : '') +
        '<div class="opts">' + order.map((k) => '<button class="opt' + (q.tlo ? ' tl' : '') + '" data-k="' + k + '">' + esc(q.opts[k]) + '</button>').join('') + '</div><div data-fb></div></div>';
      if (q.hideQ) { el.querySelector('[data-act=play]').onclick = play; setTimeout(play, 150); }
      el.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
        const k = +b.dataset.k, ok = k === q.a;
        if (ok) right++;
        App.recordAnswer(ok, q.cardId);
        el.querySelectorAll('.opt').forEach((x) => { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
        if (q.hideQ) { const qt = el.querySelector('[data-qtext]'); if (qt) qt.hidden = false; }
        el.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '">' + '<b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b> ' + esc(q.exp || '') + '</div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < qs.length ? 'Next' : 'See score') + '</button></div>';
        el.querySelector('[data-act=next]').onclick = () => { i++; draw(); };
        el.querySelector('[data-act=next]').focus();
      }));
    };
    draw();
  };

  /* ---------- Home ---------- */
  V.home = (el) => {
    const s = S();
    const decks = App.decks();
    const due = decks.find((d) => d.id === 'due').ids.length;
    const lessonsDone = Object.keys(s.done.lessons).length;
    const nextLesson = LESSONS.find((l) => !(l.id in s.done.lessons));
    const isNew = s.seenVersion !== APP_META.version;
    const tile = (h, eyebrow, title, p) => '<a class="tile" href="' + h + '"><span class="eyebrow">' + eyebrow + '</span><h3>' + title + '</h3>' + (p ? '<p>' + p + '</p>' : '') + '</a>';
    const pins = (s.pins || []).slice().reverse();
    const recent = (s.recent || []).filter((r) => !/^#\/(more|settings|progress|new|about|search)/.test(r.hash) && !App.isPinned(r.hash)).slice(0, 4);
    const sec = (id) => PSYCH_SECTIONS.find((x) => x.id === id);
    const kanaKnown0 = Object.keys(s.kana || {}).filter((k) => (s.kana[k] || 0) >= 3).length;
    // One quick drill a day, rotating so the Home screen nudges different skills (only drills that have content).
    const quick = [['#/kana', 'Kana trainer', 'Ten kana, one minute'], (App.KANJI || []).length && kanaKnown0 >= 46 && ['#/kanji?tab=drill', 'Kanji drill', 'Ten kanji from your next group'], ['#/particles', 'Particle drill', 'Ten sentences, one particle each'], ['#/verbs', 'Verb trainer', 'Ten verb forms'],
      PSYCH_SECTIONS.length && ['#/psych/listen', 'Listening drill', 'Hear 10 replies, pick the meaning'], PSYCH_SECTIONS.length && ['#/flash/psych', 'Psychiatry flashcards', 'A quick review']].filter(Boolean);
    const kanaKnown = Object.keys(s.kana || {}).filter((k) => (s.kana[k] || 0) >= 3).length;
    const qd = quick.length ? quick[Math.floor(Date.now() / 864e5) % quick.length] : null;
    el.innerHTML =
      '<section class="hero"><img src="icons/logo-96.png" alt=""><div><h1>' + esc(APP_META.name) + '</h1><p>' + esc(APP_META.tagline) + ': grammar, vocabulary and the psychiatric interview, with furigana on every kanji.</p></div></section>' +
      (isNew ? '<a class="tile" href="#/new" style="margin-top:12px;border-color:var(--gold)"><span class="eyebrow">What\'s New · v' + esc(APP_META.version) + '</span><h3 style="margin-top:4px">' + esc(APP_CHANGELOG[0].title) + '</h3><p>See what\'s in this version.</p></a>' : '') +
      '<div class="stats" style="margin-top:14px">' +
      '<div class="stat"><b>' + App.streakNow() + '</b><span>day streak</span></div>' +
      '<div class="stat"><b>' + due + '</b><span>cards due</span></div>' +
      (LESSONS.length ? '<div class="stat"><b>' + lessonsDone + '/' + LESSONS.length + '</b><span>lessons done</span></div>' : '<div class="stat"><b>' + PSYCH_SECTIONS.length + '</b><span>interview sections</span></div>') +
      '<div class="stat"><b>' + s.xp + '</b><span>XP' + (s.level ? ' · level ' + esc(s.level) : '') + '</span></div></div>' +
      (kanaKnown < 46 ? '<h2 style="margin-top:22px">Start here</h2><div class="grid">' +
        tile('#/lessons/writing-systems', 'Lesson 1', 'How Japanese is written', 'Three scripts, and how this app helps you read them.') +
        tile('#/kana', 'Kana trainer', kanaKnown ? kanaKnown + ' kana learned' : 'Learn hiragana', 'Tap a kana to hear it, then drill a row at a time.') +
        tile('#/settings', 'Reading aids', 'Furigana, romaji, spacing', 'Switch each one off as you stop needing it.') + '</div>' : '') +
      '<h2 style="margin-top:22px">Today</h2><div class="grid">' +
      (due ? tile('#/flash/due', 'Review', due + ' cards due', 'Spaced repetition keeps words fresh.') : tile('#/flash', 'Flashcards', 'Start a deck', 'Vocabulary and psychiatry phrases.')) +
      (qd ? tile(qd[0], 'Quick practice', qd[1], qd[2]) : '') +
      (nextLesson ? tile('#/lessons/' + nextLesson.id, 'Next lesson · ' + esc(nextLesson.level), esc(nextLesson.title), esc(nextLesson.summary)) : '') +
      (!s.level && PLACEMENT.length ? tile('#/placement', 'Studied before?', 'Take the placement test', '20 questions to find where to start.') : '') +
      '</div>' +
      (pins.length ? '<h2 style="margin-top:22px">Pinned</h2><div class="grid">' + pins.map((p) => tile(esc(p.hash), esc(p.sec || 'Pinned'), esc(p.title))).join('') + '</div>' : '') +
      (recent.length ? '<h2 style="margin-top:22px">Continue</h2><div class="grid">' + recent.map((r) => tile(esc(r.hash), esc(r.sec || 'Recent'), esc(r.title))).join('') + '</div>' : '') +
      '<h2 style="margin-top:22px">Psychiatry in ' + esc(LANG.name) + '</h2><div class="grid">' +
      (sec('hallucinations') ? tile('#/psych/s/hallucinations', 'Interview', 'Hallucinations', esc(sec('hallucinations').intro || '')) : '') +
      (sec('suicide') ? tile('#/psych/s/suicide', 'Risk', 'Suicide risk assessment', 'Direct, respectful questions from ideation to plan.') : '') +
      (PSYCH_SECTIONS.length ? tile('#/psych/point', 'Bedside', 'Point board', 'The patient points to a reply; the phone speaks it.') : '') +
      (window.PSYCH_MSE_CASES && PSYCH_MSE_CASES.length ? tile('#/psych/mcases', 'Ward', 'Admission MSE practice', 'Interview, document, compare with a model answer.') : '') +
      tile('#/psych', 'All sections', 'Open the psychiatry track', PSYCH_SECTIONS.length + ' interview sections, the listening drill and the point board.') + '</div>' +
      '<p class="muted small" style="margin-top:18px">Every page is listed under <a href="#/more">More</a>, and the search box at the top finds words, phrases and pages from anywhere. Pin any page with the star beside its title to keep it here.</p>';
  };

  /* ---------- Search results ---------- */
  V.search = (el, p, q) => {
    const term = q.q || '';
    const res = App.searchAll(term);
    const groups = {};
    res.forEach((r) => (groups[r.type] = groups[r.type] || []).push(r));
    el.innerHTML = '<h1>Search</h1><div class="row"><input class="input" id="sq" type="search" value="' + esc(term) + '" placeholder="Search ' + esc(LANG.name) + ' or English" style="flex:1;min-width:0"></div>' +
      '<p class="muted small">' + res.length + ' results' + (term ? ' for “' + esc(term) + '”' : '') + '. ' + esc(LANG.name) + ' can be typed in kanji, kana or romaji (<i>nemui</i> finds <span>眠《ねむ》い</span>).</p>' +
      Object.entries(groups).map(([g, items]) => '<h2>' + esc(g) + ' <span class="muted small">' + items.length + '</span></h2><div class="card">' +
        items.slice(0, 40).map((r) => '<div class="entry"><div class="w"><a href="' + r.route + '">' + esc(r.title) + '</a></div><div class="d muted">' + esc(r.sub || '') + '</div></div>').join('') + '</div>').join('');
    const inp = el.querySelector('#sq');
    inp.onkeydown = (e) => { if (e.key === 'Enter') App.go('#/search?q=' + encodeURIComponent(inp.value)); };
  };

  /* ---------- Dictionary ---------- */
  V.dict = (el, p, q) => {
    let dir = q.dir || 'both', cat = q.cat || '', term = q.q || '', letter = q.l || '', lvf = q.lv || '';
    const draw = () => {
      let list;
      if (term) list = App.searchDict(term, dir === 'both' ? null : dir).map((r) => Object.assign({ why: r.why }, r.e));
      else {
        list = App.DICT.filter((e) => (!cat || e.cat === cat) && (!lvf || e.lv === lvf) && (!letter || App.kanaRow(e.kn) === letter));
        if (dir === 'en') list = list.slice().sort((a, b) => a.nen.localeCompare(b.nen));
      }
      const shown = list.slice(0, 200);
      el.querySelector('#dres').innerHTML = '<p class="muted small">' + list.length + ' entries' + (list.length > 200 ? ' (showing 200)' : '') + '</p><div class="card">' +
        (shown.length ? shown.map((e) => entryHTML(e, dir === 'en')).join('') : '<p>No match. Try the dictionary form, kana or romaji.</p>') + '</div>';
    };
    const letters = LANG.letters;
    el.innerHTML = '<h1>Dictionary</h1>' + (App.DICT.length ? '' : soon('The clinical ' + LANG.name + ' dictionary')) +
      '<div class="stack"><input class="input" id="dq" type="search" placeholder="Type ' + esc(LANG.name) + ' or English (' + esc(LANG.searchExample) + ')" value="' + esc(term) + '">' +
      '<div class="spread"><div class="seg" role="group" aria-label="Direction">' +
      [['both', 'Both'], ['tl', LANG.dictDir.tl], ['en', LANG.dictDir.en]].map(([k, t]) => '<button data-dir="' + k + '" class="' + (dir === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
      '<select class="input" id="dcat" style="width:auto;max-width:100%"><option value="">All topics</option>' + Object.entries(App.CATS).map(([k, t]) => '<option value="' + k + '"' + (cat === k ? ' selected' : '') + '>' + esc(t) + '</option>').join('') + '</select><select class="input" id="dlv" style="width:auto;max-width:100%"><option value="">All levels</option>' + Object.entries(App.LEVELS).map(([k, t]) => '<option value="' + k + '"' + (lvf === k ? ' selected' : '') + '>' + esc(t) + '</option>').join('') + '</select></div>' +
      '<div class="letters" data-norj aria-label="Browse by kana row">' + letters.map((L) => '<button data-l="' + L + '" class="' + (letter === L ? 'on' : '') + '">' + L.toUpperCase() + '</button>').join('') + '</div></div><div id="dres" style="margin-top:12px"></div>';
    const dq = el.querySelector('#dq');
    let t;
    dq.oninput = () => { clearTimeout(t); t = setTimeout(() => { term = dq.value; letter = ''; draw(); }, 150); };
    el.querySelectorAll('[data-dir]').forEach((b) => (b.onclick = () => { dir = b.dataset.dir; el.querySelectorAll('[data-dir]').forEach((x) => x.classList.toggle('on', x === b)); draw(); }));
    el.querySelector('#dcat').onchange = (e) => { cat = e.target.value; term = ''; dq.value = ''; draw(); };
    el.querySelector('#dlv').onchange = (e) => { lvf = e.target.value; term = ''; dq.value = ''; draw(); };
    el.querySelectorAll('[data-l]').forEach((b) => (b.onclick = () => { letter = letter === b.dataset.l ? '' : b.dataset.l; term = ''; dq.value = ''; el.querySelectorAll('[data-l]').forEach((x) => x.classList.toggle('on', x.dataset.l === letter)); draw(); }));
    draw();
    if (!term) setTimeout(() => window.innerWidth > 860 && dq.focus(), 0);
  };
  function entryHTML(e, enFirst) {
    const inDeck = !!S().srs[e.id];
    const head = enFirst ? '<div class="w" style="font-family:var(--font-ui)">' + esc(e.en) + '</div>' : '<div class="w"><a href="#/dict/' + e.id + '">' + esc(e.tl) + '</a></div>';
    const body = enFirst ? '<div class="d"><a class="tl" href="#/dict/' + e.id + '" style="font-weight:600">' + esc(e.tl) + '</a> <span class="muted small">' + esc(App.POS[e.pos] || '') + '</span></div>' : '<div class="d">' + esc(e.en) + ' <span class="muted small">' + esc(App.POS[e.pos] || '') + (e.lv ? ' · ' + esc(e.lv) : '') + '</span></div>';
    return '<div class="entry">' + head + '<div class="acts">' + App.sayBtn(e.tl, e.tl) +
      '<button class="say" data-addcard="' + e.id + '" title="' + (inDeck ? 'In your review deck' : 'Add to flashcards') + '" aria-label="Add to flashcards">' + (inDeck ? icons.check : icons.plus) + '</button></div>' +
      body + (e.note ? '<div class="nn">' + esc(e.note) + '</div>' : '') + (e.why ? '<div class="nn">Matched by ' + esc(e.why) + '</div>' : '') + '</div>';
  }
  App.entryHTML = entryHTML;

  V.word = (el, p) => {
    const e = App.dictById[p.id];
    if (!e) { el.innerHTML = '<p>Word not found. <a href="#/dict">Back to dictionary</a></p>'; return; }
    const phrases = [];
    if (e.ftl.length > 1) PSYCH_SECTIONS.forEach((s) => s.phrases.forEach((ph, i) => { if (App.flat(ph.f + ' ' + (ph.c || '')).includes(e.ftl)) phrases.push([s, ph, i]); }));
    // Verbs and adjectives get their conjugation table from the rules in js/conjugate.js.
    const vg = JConj.groupFor(e.tl, e.pos), isAdj = e.pos === 'ai' || e.pos === 'an';
    const conj = vg && !/ /.test(e.tl) ? App.conjTable(JConj.verb(e.pos === 'vs' ? e.tl + 'する' : e.tl, vg), JConj.VERB_FORMS, 2) : isAdj && !/ /.test(e.tl) ? App.conjTable(JConj.adj(e.tl, e.pos === 'ai' ? 'i' : 'na'), JConj.ADJ_FORMS, 2) : '';
    el.innerHTML = crumb([['Dictionary', '#/dict'], [JA.speak(e.tl)]]) +
      '<div class="card stack"><div class="spread"><h1 class="tl" style="margin:0">' + esc(e.tl) + '</h1><div class="row">' + App.sayBtn(e.tl) +
      '<button class="btn sm" data-addcard="' + e.id + '">' + (S().srs[e.id] ? icons.check + ' In deck' : icons.plus + ' Add to flashcards') + '</button></div></div>' +
      '<div class="muted" data-noja>' + esc(JA.compact(JA.kana(e.tl))) + ' · ' + esc(JA.romaji(e.tl)) + '</div>' +
      '<div style="font-size:1.15rem">' + esc(e.en) + '</div><div class="row"><span class="pill">' + esc(App.POS[e.pos] || e.pos) + '</span><a class="pill" href="#/dict?cat=' + e.cat + '">' + esc(App.CATS[e.cat] || e.cat) + '</a>' + (e.lv ? '<a class="pill" href="#/dict?lv=' + e.lv + '">' + esc(e.lv) + '</a>' : '') + '</div>' +
      (e.note ? '<div class="notice info">' + esc(e.note) + '</div>' : '') +
      (App.kanjiChips && App.kanjiChips(e.tl) ? '<div><div class="small muted" style="margin-bottom:6px">Kanji in this word</div>' + App.kanjiChips(e.tl) + '</div>' : '') + '</div>' +
      (conj ? '<h2 style="margin-top:18px">' + (isAdj ? 'Forms' : 'Conjugation') + '</h2><div class="card">' + conj + '</div><p class="small muted">Formed by rule from the dictionary form. Practise these in the <a href="#/verbs' + (isAdj ? '?tab=adj' : '') + '">' + (isAdj ? 'adjective' : 'verb') + ' trainer</a>.</p>' : '') +
      (phrases.length ? '<h2 style="margin-top:18px">In psychiatry phrases</h2><div class="card">' + phrases.slice(0, 8).map(([s, ph, i]) => '<div class="entry"><div class="w"><a href="#/psych/s/' + s.id + '?p=' + i + '">' + esc(ph.f) + '</a></div><div class="d muted">' + esc(ph.en) + '</div></div>').join('') + '</div>' : '');
  };
  // Table of forms: rows [id, label, gloss, tier]; tiers above maxTier go behind "More forms".
  App.conjTable = (forms, defs, maxTier) => {
    if (!forms) return '';
    const row = ([k, label, gloss]) => (forms[k] ? '<tr><th><span>' + esc(label) + '</span>' + (gloss ? '<small>' + esc(gloss) + '</small>' : '') + '</th><td class="tl">' + esc(forms[k]) + ' ' + App.sayBtn(forms[k]) + '</td></tr>' : '');
    const main = defs.filter((d) => d[3] <= (maxTier || 9)), more = defs.filter((d) => d[3] > (maxTier || 9));
    return '<table class="conj-table">' + main.map(row).join('') + '</table>' + (more.length ? '<details style="margin-top:8px"><summary class="small">More forms</summary><table class="conj-table">' + more.map(row).join('') + '</table></details>' : '');
  };

  /* ---------- Flashcards ---------- */
  V.flash = (el) => {
    const decks = App.decks();
    const groups = {};
    decks.forEach((d) => (groups[d.group] = groups[d.group] || []).push(d));
    const now = Date.now();
    el.innerHTML = '<h1>Flashcards</h1><p class="muted">Spaced repetition: cards you know come back less often, cards you miss come back sooner. Wrong answers anywhere in the app go to <b>My mistakes</b>.</p>' +
      '<div class="row" style="margin-bottom:12px"><span class="muted small">Card front:</span><div class="seg" role="group">' +
      [['tl-en', LANG.cardDir['tl-en']], ['en-tl', LANG.cardDir['en-tl']]].map(([k, t]) => '<button data-dirc="' + k + '" class="' + (S().settings.cardDir === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div></div>' +
      Object.entries(groups).map(([g, ds]) => '<h2>' + esc(g) + '</h2><div class="grid">' + ds.map((d) => {
        const seen = d.ids.filter((id) => S().srs[id]).length;
        const due = d.ids.filter((id) => S().srs[id] && S().srs[id].due <= now).length;
        const disabled = !d.ids.length;
        return '<a class="tile" href="' + (disabled ? '#/flash' : '#/flash/' + d.id) + '"' + (disabled ? ' aria-disabled="true" style="opacity:.6"' : '') + '><h3>' + esc(d.name) + '</h3><p>' + d.ids.length + ' cards · ' + seen + ' learned</p><div class="meta row">' + (due ? '<span class="pill warn">' + due + ' due</span>' : '') + (d.id === 'mistakes' && !d.ids.length ? '<span class="pill good">No mistakes yet</span>' : '') + '</div></a>';
      }).join('') + '</div>').join('');
    el.querySelectorAll('[data-dirc]').forEach((b) => (b.onclick = () => { S().settings.cardDir = b.dataset.dirc; App.save(); V.flash(el); }));
  };

  V.review = (el, p) => {
    const deck = App.decks().find((d) => d.id === p.deck);
    if (!deck) { el.innerHTML = '<p>Deck not found. <a href="#/flash">All decks</a></p>'; return; }
    let queue = p.deck === 'mistakes' ? shuffle(deck.ids) : App.srsQueue(deck.ids);
    let i = 0, flipped = false, done = 0;
    const enFirst = S().settings.cardDir === 'en-tl';
    const draw = () => {
      if (i >= queue.length) {
        el.innerHTML = crumb([['Flashcards', '#/flash'], [deck.name]]) + '<div class="card stack" style="text-align:center"><h2>' + (done ? LANG.quiz.done + ' ' + done + ' cards reviewed.' : 'Nothing due in this deck right now.') + '</h2>' +
          '<p class="muted">' + (done ? 'Come back tomorrow for the next reviews.' : 'You have reviewed everything due and reached today\'s new-card limit for this deck.') + '</p>' +
          '<div class="row" style="justify-content:center"><a class="btn primary" href="#/flash">All decks</a><button class="btn" data-act="cram">Practice anyway</button></div></div>';
        el.querySelector('[data-act=cram]').onclick = () => { queue = pick(deck.ids, 20); i = 0; draw(); };
        return;
      }
      const c = App.cardFor(queue[i]);
      if (!c) { i++; draw(); return; }
      const front = enFirst ? esc(c.en) : esc(c.tl), back = enFirst ? esc(c.tl) : esc(c.en);
      el.innerHTML = crumb([['Flashcards', '#/flash'], [deck.name]]) +
        '<div class="spread" style="margin-bottom:8px"><span class="muted small">' + (i + 1) + ' / ' + queue.length + (S().srs[c.id] ? '' : ' · <span class="pill">new</span>') + '</span>' + App.sayBtn(c.say || c.tl) + '</div>' +
        '<div class="progress" style="margin-bottom:12px"><i style="width:' + Math.round((100 * i) / queue.length) + '%"></i></div>' +
        '<div class="card flash" id="fc" tabindex="0" role="button" aria-label="Flip card"><div>' +
        '<div class="front" style="' + (enFirst ? 'font-family:var(--font-ui);font-size:1.35rem' : '') + '">' + front + '</div>' +
        (flipped ? '<div class="back ' + (enFirst ? 'tl' : '') + '">' + back + '</div>' + (c.alt ? '<div class="hint tl">Also: ' + esc(c.alt) + '</div>' : '') + (c.note ? '<div class="hint">' + esc(c.note) + '</div>' : '') + (c.sub ? '<div class="hint">' + esc(c.sub) + '</div>' : '') : '<div class="hint">Tap or press Space to show the answer</div>') +
        '</div></div>' +
        (flipped ? '<div class="grade" style="margin-top:12px">' + [['again', 'Again', 0], ['', 'Hard', 1], ['good', 'Good', 2], ['', 'Easy', 3]].map(([cls, t, g]) => '<button class="' + cls + '" data-g="' + g + '">' + t + '<small>' + App.nextLabel(c.id, g) + '</small></button>').join('') + '</div><p class="muted small" style="text-align:center">Keys: 1 Again · 2 Hard · 3 Good · 4 Easy</p>' : '');
      const fc = el.querySelector('#fc');
      fc.onclick = (ev) => { if (ev.target.closest('.say')) return; if (!flipped) { flipped = true; if (!enFirst) App.speak(c.say || c.tl); draw(); } };
      el.querySelectorAll('[data-g]').forEach((b) => (b.onclick = () => grade(+b.dataset.g, c)));
    };
    const grade = (g, c) => { App.srsGrade(c.id, g); done++; if (g === 0) queue.push(c.id); i++; flipped = false; draw(); };
    App.keyHandler = (e) => {
      if (e.target.matches('input,textarea,select')) return;
      if (e.key === ' ' && !flipped) { e.preventDefault(); flipped = true; draw(); }
      else if (flipped && ['1', '2', '3', '4'].includes(e.key)) { const c = App.cardFor(queue[i]); c && grade(+e.key - 1, c); }
    };
    draw();
  };

  /* ---------- Lessons ---------- */
  V.lessons = (el, p, q) => {
    // Level filter (?lv=N5 …): with many lessons, one level at a time is easier to scan. The choice is remembered.
    const lvs = LANG.levels.filter((lv) => LESSONS.some((l) => l.level === lv));
    q = q || {};
    const lv = q.lv === 'all' ? '' : lvs.includes(q.lv) ? q.lv : lvs.includes(S().lessonLevel) && !q.lv ? S().lessonLevel : '';
    if ((S().lessonLevel || '') !== lv) { S().lessonLevel = lv; App.save(); }
    const units = {};
    LESSONS.filter((l) => !lv || l.level === lv).forEach((l) => (units[l.unit] = units[l.unit] || []).push(l));
    const doneIn = (k) => LESSONS.filter((l) => (!k || l.level === k) && l.id in S().done.lessons).length + ' / ' + LESSONS.filter((l) => !k || l.level === k).length;
    el.innerHTML = '<h1>Lessons</h1>' + (LESSONS.length ? '<p class="muted">Short grammar lessons in order, from the writing system to the forms you need for an interview, each with a quiz. Tap the speaker on any example to hear it.</p>' : soon('The ' + LANG.name + ' lessons')) +
      (lvs.length > 1 ? '<div class="row" style="flex-wrap:wrap;gap:8px;margin-bottom:4px"><div class="seg" role="group" aria-label="Level">' + [['', 'All']].concat(lvs.map((k) => [k, k])).map(([k, t]) => '<a role="button" href="#/lessons?lv=' + (k || 'all') + '" class="' + (lv === k ? 'on' : '') + '">' + esc(t) + '</a>').join('') + '</div><span class="pill">' + doneIn(lv) + ' done</span></div>' : '') +
      Object.entries(units).map(([u, ls]) => '<h2>' + esc(u) + '</h2><div class="grid">' + ls.map((l) => {
        const sc = S().done.lessons[l.id];
        return '<a class="tile" href="#/lessons/' + l.id + '"><div class="row">' + lvPill(l.level) + (sc != null ? '<span class="pill good">' + icons.check.replace('<svg', '<svg width="12" height="12"') + ' ' + sc + '%</span>' : '') + '</div><h3 style="margin-top:6px">' + esc(l.title) + '</h3><p>' + esc(l.summary) + '</p></a>';
      }).join('') + '</div>').join('');
  };
  V.lesson = (el, p) => {
    const l = LESSONS.find((x) => x.id === p.id);
    if (!l) { el.innerHTML = '<p>Lesson not found.</p>'; return; }
    const idx = LESSONS.indexOf(l), next = LESSONS[idx + 1], prev = LESSONS[idx - 1];
    el.innerHTML = crumb([['Lessons', '#/lessons'], [l.title]]) + '<div class="row">' + lvPill(l.level) + '<span class="muted small">' + esc(l.unit) + '</span><button class="btn sm noprint" id="lprint" style="margin-left:auto">' + icons.book + ' Print</button></div><h1 style="margin-top:6px">' + esc(l.title) + '</h1>' +
      (l.draft ? '<div class="notice warn" style="margin-bottom:12px">Draft for review: the ' + esc(LANG.name) + ' lines in this lesson are practice wording pending review by a native Japanese speaker.</div>' : '') +
      '<div class="lesson-body">' + l.body.replace(/<table>/g, '<div class="tablewrap"><table>').replace(/<\/table>/g, '</table></div>') + '</div>' +
      '<h2 style="margin-top:20px">Check yourself</h2><div id="lq"></div>' +
      '<div class="spread prevnext" style="margin-top:16px">' + (prev ? '<a class="btn" href="#/lessons/' + prev.id + '">← ' + esc(prev.title) + '</a>' : '<span></span>') + (next ? '<a class="btn" href="#/lessons/' + next.id + '">' + esc(next.title) + ' →</a>' : '') + '</div>';
    el.querySelector('#lprint').onclick = () => App.printPage();
    // speak buttons for examples
    el.querySelectorAll('.lesson-body .ex').forEach((ex) => { const b = ex.querySelector('b'); if (b) { ex.style.gridTemplateColumns = 'minmax(0,1fr) auto'; const btn = document.createElement('div'); btn.innerHTML = App.sayBtn(b.textContent); btn.style.gridRow = '1 / span 2'; btn.style.gridColumn = '2'; ex.appendChild(btn.firstChild); } });
    App.runQuiz(el.querySelector('#lq'), l.quiz.map(([q, opts, a, exp]) => ({ q, opts, a, exp })), {
      onDone: (r, n) => { const pct = Math.round((100 * r) / n); S().done.lessons[l.id] = Math.max(pct, S().done.lessons[l.id] || 0); App.activity(10); }
    });
  };

  /* ---------- Reading ---------- */
  V.reading = (el, p, q) => {
    // Level filter (?lv=N4 …), remembered like the one on the lessons page.
    const lvs = LANG.levels.filter((k) => READING.some((r) => r.level === k));
    q = q || {};
    const lv = q.lv === 'all' ? '' : lvs.includes(q.lv) ? q.lv : lvs.includes(S().readingLevel) && !q.lv ? S().readingLevel : '';
    if ((S().readingLevel || '') !== lv) { S().readingLevel = lv; App.save(); }
    const doneN = READING.filter((r) => (!lv || r.level === lv) && S().done.reading[r.id] != null).length, allN = READING.filter((r) => !lv || r.level === lv).length;
    el.innerHTML = '<h1>Reading</h1>' + (READING.length ? '' : soon(LANG.name + ' reading passages')) + '<p class="muted">Read the ' + esc(LANG.name) + ' first. Reveal the translation only when you need it, then answer the questions. Passages marked <span class="pill warn">clinical</span> practice psychiatric content.</p>' +
      (lvs.length > 1 ? '<div class="row" style="flex-wrap:wrap;gap:8px;margin-bottom:10px"><div class="seg" role="group" aria-label="Level">' + [['', 'All']].concat(lvs.map((k) => [k, k])).map(([k, t]) => '<a role="button" href="#/reading?lv=' + (k || 'all') + '" class="' + (lv === k ? 'on' : '') + '">' + esc(t) + '</a>').join('') + '</div><span class="pill">' + doneN + ' / ' + allN + ' done</span></div>' : '') + '<div class="grid">' +
      READING.filter((r) => !lv || r.level === lv).map((r) => '<a class="tile" href="#/reading/' + r.id + '"><div class="row">' + lvPill(r.level) + (r.psych ? '<span class="pill warn">clinical</span>' : '') + (S().done.reading[r.id] != null ? '<span class="pill good">' + S().done.reading[r.id] + '%</span>' : '') + '</div><h3 class="tl" style="margin-top:6px">' + esc(r.title) + '</h3><p>' + esc(r.titleEn) + '</p></a>').join('') + '</div>';
  };
  V.passage = (el, p) => {
    const r = READING.find((x) => x.id === p.id);
    if (!r) { el.innerHTML = '<p>Passage not found.</p>'; return; }
    let showTr = false;
    const draw = () => {
      el.querySelector('#pbody').innerHTML = r.tl.map((t, i) => '<p>' + esc(t) + '</p>' + (showTr ? '<p class="tr">' + esc(r.en[i]) + '</p>' : '')).join('');
      el.querySelector('#trbtn').textContent = showTr ? 'Hide translation' : 'Show translation';
    };
    el.innerHTML = crumb([['Reading', '#/reading'], [r.title]]) + '<div class="row">' + lvPill(r.level) + '</div><h1 class="tl" style="margin-top:6px">' + esc(r.title) + '</h1><p class="muted">' + esc(r.titleEn) + '</p>' +
      '<div class="row noprint"><button class="btn" id="readall">' + icons.sound + ' Listen</button><button class="btn" id="trbtn"></button><button class="btn" id="rprint">' + icons.book + ' Print</button></div>' +
      '<div class="card passage" id="pbody" style="margin-top:12px"></div>' +
      '<h2 style="margin-top:16px">Glossary</h2><div class="gloss">' + r.gloss.map(([t, e]) => '<span><b>' + esc(t) + '</b> — ' + esc(e) + '</span>').join('') + '</div>' +
      '<h2 style="margin-top:16px">Questions</h2><div id="rq"></div>';
    el.querySelector('#trbtn').onclick = () => { showTr = !showTr; draw(); };
    el.querySelector('#readall').onclick = () => App.speakAll(r.tl, 350);
    el.querySelector('#rprint').onclick = () => App.printPage();
    draw();
    App.runQuiz(el.querySelector('#rq'), r.q.map(([q, opts, a, exp]) => ({ q, opts, a, exp, tlq: JA.hasJa(q) && !/[A-Za-z]{3}/.test(q) })), {
      onDone: (rt, n) => { S().done.reading[r.id] = Math.max(Math.round((100 * rt) / n), S().done.reading[r.id] || 0); App.activity(10); }
    });
  };

  /* ---------- Speaking ---------- */
  V.speak = (el) => {
    el.innerHTML = '<h1>Speaking</h1>' + (DIALOGUES.length || PSYCH_CASES.length ? '' : soon(LANG.name + ' dialogues')) + speechSupportNote() +
      '<p class="muted">Each dialogue has three modes: <b>Listen</b> to the whole conversation, <b>Shadow</b> each line after the audio, and <b>Role-play</b>, where your lines are hidden and you say them from the English cue. </p><div class="grid">' +
      DIALOGUES.map((d) => '<a class="tile" href="#/speak/' + d.id + '"><div class="row">' + lvPill(d.level) + (S().done.dialogues[d.id] != null ? '<span class="pill good">' + S().done.dialogues[d.id] + '%</span>' : '') + '</div><h3 style="margin-top:6px">' + esc(d.title) + '</h3><p>' + d.lines.length + ' lines · you are ' + esc(d.roles[d.you]) + '</p></a>').join('') + '</div>' +
      (PSYCH_CASES.length ? '<h2 style="margin-top:18px">Clinical dialogues</h2><div class="grid">' + PSYCH_CASES.map((c) => '<a class="tile" href="#/speak/case-' + c.id + '"><div class="row">' + lvPill(c.level) + '<span class="pill warn">clinical</span></div><h3 style="margin-top:6px">' + esc(c.title) + '</h3><p>Role-play the best-practice interview lines.</p></a>').join('') + '</div>' : '');
  };
  function speechSupportNote() {
    const st = App.audioStatus();
    const parts = [];
    if (st.pack) { /* recorded audio covers the app's phrases */ }
    else if (st.voiceKind === 'native' || st.voiceKind === 'chosen') { /* device voice for the language */ }
    
    else parts.push(App.canSpeak ? 'No ' + LANG.voiceName + ' voice was found on this device, so audio will not sound right. See Settings → Voice for how to add one.' : 'This browser has no text-to-speech.');
    if (!App.canListen) parts.push('Speech scoring isn\'t available in this browser (it works best in Chrome). You can still use <b>Record</b> to compare.');
    return parts.length ? '<div class="notice" style="margin-bottom:12px">' + parts.join(' ') + ' <a href="#/settings">Voice settings</a></div>' : '';
  }

  App.speechSupportNote = speechSupportNote;
  // Turn a case into a dialogue: patient line + best clinician response
  App.caseDialogue = (c) => {
    const lines = [];
    c.steps.forEach((s) => { lines.push([1, s.line[0], s.line[1], null, s.who]); const best = s.choices.find((x) => x.score === 2); lines.push([0, best.tl, best.en]); });
    return { id: 'case-' + c.id, level: c.level, title: c.title + ' (clinical)', roles: ['You (doctor)', 'Patient/family'], you: 0, lines, setting: c.setting };
  };
  V.dialogue = (el, p) => {
    const d = p.id.startsWith('case-') ? App.caseDialogue(PSYCH_CASES.find((c) => 'case-' + c.id === p.id) || PSYCH_CASES[0]) : DIALOGUES.find((x) => x.id === p.id);
    if (!d) { el.innerHTML = '<p>Dialogue not found.</p>'; return; }
    let mode = 'listen', step = 0, scores = [], rec = null, recUrl = {};
    const reg = S().settings.register;
    const textOf = (l) => (reg === 'c' && l[3] ? l[3] : l[1]);
    const draw = () => {
      const lines = d.lines.map((l, i) => {
        const me = l[0] === d.you, hidden = mode === 'role' && me && i >= step, active = mode !== 'listen' && i === step;
        const who = l[4] || d.roles[l[0]];
        return '<div class="line' + (me ? ' me' : '') + (hidden ? ' masked' : '') + '"' + (active ? ' style="outline:2px solid var(--gold)"' : '') + (mode !== 'listen' && i > step ? ' hidden' : '') + '>' +
          '<div class="spread"><span class="who">' + esc(who) + '</span>' + (hidden ? '' : App.sayBtn(textOf(l))) + '</div>' +
          '<div class="t">' + esc(textOf(l)) + '</div><div class="e">' + esc(l[2]) + '</div>' +
          (scores[i] != null ? '<div class="small"><span class="score">' + scores[i].s + '%</span> match · heard: <i>' + esc(scores[i].heard) + '</i></div>' : '') +
          (recUrl[i] ? '<audio controls src="' + recUrl[i] + '" style="width:100%;height:36px"></audio>' : '') + '</div>';
      }).join('');
      const cur = d.lines[step];
      const myTurn = mode !== 'listen' && cur && (mode === 'shadow' || cur[0] === d.you);
      el.querySelector('#dlg').innerHTML = lines;
      el.querySelector('#dctl').innerHTML = mode === 'listen'
        ? '<button class="btn primary" id="playall">' + icons.sound + ' Play all</button>'
        : (cur ? (myTurn
          ? '<span class="muted small">' + (mode === 'role' ? 'Your line: say it in ' + LANG.name + '.' : 'Repeat after the audio.') + '</span>' +
            (mode === 'shadow' ? '<button class="btn" id="hear">' + icons.sound + ' Hear</button>' : '') +
            (App.canListen ? '<button class="btn primary" id="mic">' + icons.mic + ' Speak</button>' : '') +
            (App.canRecord ? '<button class="btn" id="rec">' + icons.rec + ' Record</button>' : '') +
            '<button class="btn" id="reveal">' + (mode === 'role' ? 'Reveal & next' : 'Next') + '</button>'
          : '<button class="btn primary" id="nextline">' + icons.sound + ' Play their line</button>')
          : '<span class="pill good">Finished</span>' + (scores.filter(Boolean).length ? ' <span class="muted small">Average match ' + avg() + '%</span>' : '') + '<button class="btn" id="restart">Start over</button>');
      bind();
    };
    const avg = () => { const s = scores.filter(Boolean).map((x) => x.s); return s.length ? Math.round(s.reduce((a, b) => a + b, 0) / s.length) : 0; };
    const advance = () => { step++; if (step >= d.lines.length) { const a = avg(); if (a) S().done.dialogues[d.id] = Math.max(a, S().done.dialogues[d.id] || 0); App.activity(10); } draw(); const c = d.lines[step]; if (c && mode === 'role' && c[0] !== d.you) setTimeout(() => App.speak(textOf(c)), 250); };
    const bind = () => {
      const q = (s) => el.querySelector(s);
      if (q('#playall')) q('#playall').onclick = () => App.speakAll(d.lines.map(textOf), 300);
      if (q('#hear')) q('#hear').onclick = () => App.speak(textOf(d.lines[step]));
      if (q('#nextline')) q('#nextline').onclick = () => { App.speak(textOf(d.lines[step])); advance(); };
      if (q('#reveal')) q('#reveal').onclick = advance;
      if (q('#restart')) q('#restart').onclick = () => { step = 0; scores = []; recUrl = {}; draw(); };
      if (q('#mic')) q('#mic').onclick = () => {
        const target = textOf(d.lines[step]); const i = step;
        q('#mic').innerHTML = '<span class="recdot"></span> Listening…'; q('#mic').disabled = true;
        const r = App.listen((alts) => { const best = alts.map((a) => ({ heard: a, s: App.similarity(target, a) })).sort((a, b) => b.s - a.s)[0]; scores[i] = best; App.recordAnswer(best.s >= 70); draw(); }, () => { const m = q('#mic'); if (m) { m.disabled = false; m.innerHTML = icons.mic + ' Speak'; } });
        if (!r) App.toast('Could not start speech recognition.');
      };
      if (q('#rec')) q('#rec').onclick = async () => {
        if (rec) { const url = await rec.stop(); rec = null; recUrl[step] = url; draw(); return; }
        try { rec = await App.record(); q('#rec').innerHTML = '<span class="recdot"></span> Stop'; } catch (e) { App.toast('Microphone unavailable or permission denied.'); }
      };
    };
    el.innerHTML = crumb([['Speaking', '#/speak'], [d.title]]) + '<div class="row">' + lvPill(d.level) + '</div><h1 style="margin-top:6px">' + esc(d.title) + '</h1>' + (d.setting ? '<p class="muted">' + esc(d.setting) + '</p>' : '') + speechSupportNote() +
      '<div class="seg" role="group" aria-label="Mode" style="margin-bottom:12px">' + [['listen', 'Listen'], ['shadow', 'Shadow'], ['role', 'Role-play']].map(([k, t]) => '<button data-m="' + k + '" class="' + (mode === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
      '<div class="dlg" id="dlg"></div><div class="row" id="dctl" style="margin-top:14px;position:sticky;bottom:calc(70px + env(safe-area-inset-bottom,0px));background:var(--bg);padding:8px 0"></div>';
    el.querySelectorAll('[data-m]').forEach((b) => (b.onclick = () => { mode = b.dataset.m; step = 0; scores = []; recUrl = {}; el.querySelectorAll('[data-m]').forEach((x) => x.classList.toggle('on', x === b)); draw(); const c = d.lines[0]; if (mode === 'role' && c[0] !== d.you) setTimeout(() => App.speak(textOf(c)), 250); }));
    draw();
  };

  /* ---------- Placement ---------- */
  V.placement = (el) => {
    if (!PLACEMENT.length) { el.innerHTML = '<h1>Placement test</h1>' + soon('The placement test'); return; }
    const LV = LANG.placementLevels, keys = LV.map((x) => x[0]);
    el.innerHTML = '<h1>Placement test</h1><p class="muted">20 questions from the kana to JLPT N4. If you are new to Japanese, skip this and start with Lesson 1. Choose "I don\'t know" rather than guessing; guessing only hides your real level.</p><div id="pq" data-norj></div>';
    const qs = PLACEMENT.map(([lv, q, opts, a]) => ({ lv, q, opts: opts.concat(["I don't know"]), a }));
    let i = 0; const got = {}, tot = {};
    keys.forEach((k) => { got[k] = 0; tot[k] = 0; });
    qs.forEach((q) => tot[q.lv]++);
    const box = el.querySelector('#pq');
    const draw = () => {
      if (i >= qs.length) {
        // Your level is the first band you have not yet mastered (80% for the starter band, 60% after).
        let n = 0;
        while (n < keys.length && tot[keys[n]] && got[keys[n]] / tot[keys[n]] >= (n === 0 ? 0.8 : 0.6)) n++;
        const level = n === 0 ? 'Starter' : n <= 2 ? 'N5' : n === 3 ? 'N4' : 'N4+';
        S().level = level; App.activity(20);
        const firstOf = (unit) => { const l = LESSONS.find((x) => x.unit === unit); return l ? '#/lessons/' + l.id : '#/lessons'; };
        const rec = [['#/lessons/writing-systems', 'Start with the first lessons and the kana trainer.'], [firstOf('First sentences'), 'You can read kana. Start at First sentences and work through the particles.'], [firstOf('Adjectives'), 'Review adjectives and the て-form, then the plain forms.'],
          [firstOf('Plain forms'), 'Work through the plain forms and Saying more, then open the psychiatry track.'], ['#/psych', 'You are ready for the psychiatry track. Use the lessons as review.']][n];
        box.innerHTML = '<div class="card stack"><span class="eyebrow">Your level</span><h2 style="margin:0">' + level + '</h2>' +
          '<div class="tablewrap"><table><tr><th>Band</th><th>Score</th></tr>' + LV.map(([k, name]) => '<tr><td>' + esc(name) + '</td><td>' + got[k] + ' / ' + tot[k] + '</td></tr>').join('') + '</table></div>' +
          '<p>' + rec[1] + '</p><div class="row"><a class="btn primary" href="' + rec[0] + '">Go there</a><a class="btn" href="#/">Home</a></div></div>';
        return;
      }
      const q = qs[i];
      box.innerHTML = '<div class="card stack"><span class="eyebrow">' + (i + 1) + ' / ' + qs.length + '</span><div style="font-weight:600;font-size:1.08rem">' + esc(q.q) + '</div><div class="opts">' +
        q.opts.map((o, k) => '<button class="opt" data-k="' + k + '">' + esc(o) + '</button>').join('') + '</div></div>';
      box.querySelectorAll('.opt').forEach((b) => (b.onclick = () => { if (+b.dataset.k === q.a) got[q.lv]++; i++; draw(); }));
    };
    draw();
  };

  /* ---------- Progress ---------- */
  V.progress = (el) => {
    const s = S();
    const learned = Object.keys(s.srs).length;
    const mature = Object.values(s.srs).filter((c) => c.i >= 21).length;
    const acc = s.stats.answered ? Math.round((100 * s.stats.correct) / s.stats.answered) : 0;
    const days = new Set(s.streak.days || []);
    const cal = Array.from({ length: 84 }, (_, k) => { const d = new Date(Date.now() - (83 - k) * 864e5); const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); return '<i title="' + key + '" style="display:block;aspect-ratio:1;border-radius:3px;background:' + (days.has(key) ? 'var(--gold)' : 'var(--surface-2)') + '"></i>'; }).join('');
    const sec = PSYCH_SECTIONS.length, secSeen = Object.keys(s.done.sections).length;
    el.innerHTML = '<h1>Progress</h1><div class="stats">' +
      [[App.streakNow(), 'day streak'], [s.streak.best || 0, 'best streak'], [s.xp, 'XP'], [s.level || '—', 'level'], [learned, 'cards learned'], [mature, 'cards mature (21d+)'], [acc + '%', 'accuracy'], [s.mistakes.length, 'in mistakes deck']]
        .map(([b, t]) => '<div class="stat"><b>' + esc(b) + '</b><span>' + t + '</span></div>').join('') + '</div>' +
      '<h2 style="margin-top:18px">Last 12 weeks</h2><div class="card"><div style="display:grid;grid-template-columns:repeat(21,1fr);gap:3px;max-width:520px">' + cal + '</div></div>' +
      '<h2 style="margin-top:18px">Completion</h2><div class="card stack">' +
      [['Lessons', Object.keys(s.done.lessons).length, LESSONS.length], ['Kana learned (hiragana and katakana)', Object.keys(s.kana || {}).filter((k) => s.kana[k] >= 3).length, (window.KANA ? KANA.all.length : 0)], ['Kanji learned', App.kanjiLearned ? App.kanjiLearned() : 0, (App.KANJI || []).length], ['Reading passages', Object.keys(s.done.reading).length, READING.length], ['Dialogues', Object.keys(s.done.dialogues).length, DIALOGUES.length + PSYCH_CASES.length], ['Psychiatry sections opened', secSeen, sec]]
        .map(([t, a, b]) => '<div><div class="spread small"><span>' + t + '</span><span class="muted">' + a + ' / ' + b + '</span></div><div class="progress"><i style="width:' + Math.round((100 * a) / Math.max(1, b)) + '%"></i></div></div>').join('') + '</div>' +
      '<h2 style="margin-top:18px">Backup</h2><div class="card stack"><p style="margin:0">Progress is saved on this device. Export a backup file to move it to another phone or browser. The same buttons are in the footer of every page.</p>' +
      '<div class="row"><button class="btn" id="exp">Export backup</button><label class="btn" for="imp">Import backup</label><input type="file" id="imp" class="sr-only" accept="application/json,.json"></div>' +
      '<p class="small muted" style="margin:0">' + esc(App.t('backup.onDevice').replace('{summary}', App.backup.summary())) + '</p>' +
      '<details><summary class="small muted">Copy backup as text instead</summary><textarea class="input" id="bk" rows="4" style="margin-top:8px;font-family:ui-monospace,monospace;font-size:.75rem"></textarea><div class="row" style="margin-top:6px"><button class="btn sm" id="bkload">Load from text</button></div></details></div>';
    // Same functions as the footer backup panel (js/app.js App.backup): confirm before replacing, undo from the footer.
    el.querySelector('#bk').value = JSON.stringify(App.backup.payload());
    el.querySelector('#exp').onclick = () => App.backup.export();
    el.querySelector('#imp').onchange = (e) => { const f = e.target.files[0]; if (f) App.backup.importFile(f); e.target.value = ''; };
    el.querySelector('#bkload').onclick = () => App.backup.importText(el.querySelector('#bk').value);
  };

  /* ---------- Settings ---------- */
  V.settings = (el) => {
    const s = S().settings;
    const voices = App.voices();
    el.innerHTML = '<h1>Settings</h1><div class="stack">' +
      '<div class="card stack"><h2 style="margin:0">Appearance</h2><div class="seg" role="group" aria-label="Theme">' + ['system', 'light', 'dark'].map((k) => '<button type="button" data-theme="' + k + '" aria-pressed="' + ((s.theme || 'system') === k) + '" class="' + ((s.theme || 'system') === k ? 'on' : '') + '">' + esc(App.themeName(k)) + '</button>').join('') + '</div><p class="muted small" style="margin:10px 0 6px">Text size (also under the <b>Aa</b> button in the top bar)</p>' + App.textSizeSeg() + '</div>' +
      '<div class="card stack"><h2 style="margin:0">Reading aids</h2><p class="muted" style="margin:0">Three helpers for reading Japanese. Start with all of them on; switch romaji off first, then word spacing, then set furigana to show on tap.</p>' + App.aidsHTML() + '</div>' +
      '<div class="card stack"><h2 style="margin:0">Register</h2><p class="muted" style="margin:0">Which version of each psychiatry phrase to show first. ' + LANG.registers.f.short + ' ' + LANG.registers.f.help + '. ' + LANG.registers.c.short + ' ' + LANG.registers.c.help + '.</p>' +
      '<div class="seg" role="group" aria-label="Register">' + [['f', LANG.registers.f.label], ['c', LANG.registers.c.label]].map(([k, t]) => '<button data-reg="' + k + '" class="' + (s.register === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div></div>' +
      '<div class="card stack"><h2 style="margin:0">Voice</h2>' + voiceCard(s, voices) + '</div>' +
      '<div class="card stack"><h2 style="margin:0">Flashcards</h2><label>New cards per day <input class="input" type="number" id="npd" min="5" max="100" value="' + s.newPerDay + '" style="width:120px"></label></div>' +
      '<div class="card stack"><h2 style="margin:0">Install</h2><p style="margin:0">Add ' + esc(APP_META.name) + ' to your home screen to use it like an app, even offline. iPhone: Safari → Share → <b>Add to Home Screen</b>. Android: Chrome menu → <b>Install app</b>.</p><div class="row"><button class="btn" id="install" hidden>Install now</button></div></div>' +
      '<div class="card stack"><h2 style="margin:0">Backup</h2><p class="muted" style="margin:0">Save your progress to a file, or restore one . You can undo an import from the footer.</p><div class="row"><button class="btn" type="button" id="sexp">Export backup</button><label class="btn" for="simp">Import backup</label><input type="file" id="simp" class="sr-only" accept="application/json,.json"></div></div>' +
      '<div class="card stack"><h2 style="margin:0">Reset</h2><p class="muted" style="margin:0">Erase all progress on this device. Export a backup first if you want to keep it.</p><div class="row"><button class="btn" id="reset1">Erase progress…</button><span id="reset2" hidden><span class="small">Are you sure? </span><button class="btn sm" id="resetyes" style="color:var(--bad);border-color:var(--bad)">Yes, erase everything</button> <button class="btn sm" id="resetno">Cancel</button></span></div></div>' +
      '</div>';
    el.querySelectorAll('[data-theme]').forEach((b) => (b.onclick = () => { s.theme = b.dataset.theme; App.save(); App.applyTheme(); V.settings(el); }));
    el.querySelectorAll('[data-ts]').forEach((b) => (b.onclick = () => { s.textSize = b.dataset.ts; App.save(); App.applyTextSize(); V.settings(el); }));
    App.bindAids(el, () => V.settings(el));
    el.querySelectorAll('[data-reg]').forEach((b) => (b.onclick = () => { s.register = b.dataset.reg; App.save(); V.settings(el); }));
    el.querySelector('#sexp').onclick = () => App.backup.export();
    el.querySelector('#simp').onchange = (e) => { const f = e.target.files[0]; if (f) App.backup.importFile(f); e.target.value = ''; };
    el.querySelector('#voice').onchange = (e) => { s.voice = e.target.value; App.save(); };
    el.querySelectorAll('[data-vsrc]').forEach((b) => (b.onclick = () => { s.voiceSource = b.dataset.vsrc; App.save(); V.settings(el); }));
    const dl = el.querySelector('#dlAudio');
    if (dl) dl.onclick = async () => {
      const keys = [...App.pack.keys], stat = el.querySelector('#dlStat');
      dl.disabled = true; let n = 0, fail = 0;
      let cache = null; try { cache = await caches.open('hanashimasho-audio'); } catch (e) {}
      for (let i = 0; i < keys.length; i += 8) {
        await Promise.all(keys.slice(i, i + 8).map(async (k) => {
          const url = 'audio/' + k + '.mp3';
          try { if (cache && (await cache.match(url))) { n++; return; } const r = await fetch(url); if (!r.ok) throw 0; if (cache) await cache.put(url, r); n++; } catch (e) { fail++; }
        }));
        stat.textContent = 'Saved ' + n + ' of ' + keys.length + (fail ? ' (' + fail + ' failed)' : '');
      }
      stat.textContent = fail ? 'Saved ' + n + ' of ' + keys.length + '. Some failed; tap again to retry.' : 'All ' + n + ' clips saved for offline use.';
      dl.disabled = false;
    };
    el.querySelector('#rate').oninput = (e) => { s.rate = +e.target.value; App.save(); };
    el.querySelector('#npd').onchange = (e) => { s.newPerDay = Math.max(5, Math.min(100, +e.target.value || 20)); App.save(); };
    el.querySelector('#test').onclick = () => App.speak(LANG.testLine);
    if (App.installPrompt) { const b = el.querySelector('#install'); b.hidden = false; b.onclick = () => App.installPrompt.prompt(); }
    el.querySelector('#reset1').onclick = () => { el.querySelector('#reset2').hidden = false; };
    el.querySelector('#resetno').onclick = () => { el.querySelector('#reset2').hidden = true; };
    el.querySelector('#resetyes').onclick = () => { App.reset(); App.applyTheme(); App.applyTextSize(); JA.apply(S().settings); App.backup.paint(); App.updateBadges(); App.toast('Progress erased.'); V.settings(el); };
    if (!voices.length && App.canSpeak) setTimeout(() => { if (App.voices().length && location.hash.startsWith('#/settings')) V.settings(el); }, 600);
  };

  function voiceCard(s, voices) {
    const st = App.audioStatus(), info = App.pack.info;
    const packLine = info
      ? '<span class="pill good">Installed</span> ' + info.count + ' recorded clips · ' + esc(info.voice) + ' · ' + esc(info.generated) + ' · ' + (info.bytes / 1e6).toFixed(0) + ' MB'
      : (App.pack.ready ? '<span class="pill warn">Not recorded yet</span> The clips are recorded by a job on GitHub (see "Audio pack" in the README). Until they arrive, the app uses the Japanese voice on your device.' : 'Checking…');
    const packHelp = info ? '<p class="small muted" style="margin:0">The recorded voice covers the dictionary, lesson examples, readings, dialogues, kana, the verb and adjective trainer, kanji words and every interview phrase and reply. Anything without a clip (for example the conjugation table on a dictionary page) is spoken by the device voice. Choose <b>Device voice</b> to hear everything with the voice on this device.</p>' : '';
    const dev = App.bestVoice();
    const devLine = dev.kind === 'native' || dev.kind === 'chosen' ? LANG.voiceName + ' voice: ' + esc(dev.voice.name) : dev.kind === 'near' ? 'No ' + LANG.voiceName + ' voice on this device. Closest match: ' + esc(dev.voice.name + ' (' + dev.voice.lang + ')') + '.' : 'No usable voice on this device.';
    return (info ? '<div class="seg" role="group" aria-label="Voice source" style="display:flex;flex-wrap:wrap">' + [['pack', 'Recorded ' + LANG.voiceName + ' voice'], ['device', 'Device voice']].map(([k, t]) => '<button data-vsrc="' + k + '" class="' + (s.voiceSource === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' : '') +
      '<div class="small"><b>Audio pack:</b> ' + packLine + '</div>' +
      packHelp +
      (info ? '<div class="row"><button class="btn sm" id="dlAudio">Save all audio for offline use</button><span class="small muted" id="dlStat"></span></div>' : '') +
      '<div class="small"><b>Device voice:</b> ' + devLine + '</div>' +
      '<details><summary class="small">Choose a device voice</summary><label class="small" style="display:block;margin-top:6px">Voice <select class="input" id="voice"><option value="">Automatic</option>' + voices.map((v) => '<option value="' + esc(v.name) + '"' + (s.voice === v.name ? ' selected' : '') + '>' + esc(v.name + ' (' + v.lang + ')') + '</option>').join('') + '</select></label>' +
      '<p class="small muted" style="margin:6px 0 0">' + LANG.deviceVoiceHelp + '</p></details>' +
      '<label>Speed <input type="range" id="rate" min="0.5" max="1.2" step="0.05" value="' + s.rate + '" style="width:100%"></label>' +
      '<div class="row"><button class="btn" id="test">' + icons.sound + ' Test the voice</button></div><div class="tl">' + esc(LANG.testLine) + '</div>';
  }

  /* ---------- What's New ---------- */
  V.whatsnew = (el) => {
    S().seenVersion = APP_META.version; App.save(); App.updateBadges();
    const label = { feature: ['New', 'good'], update: ['Improved', ''], correction: ['Fixed', 'warn'], content: ['Content', ''] };
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const when = (d) => { const m = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(d || ''); return m ? (m[3] ? MONTHS[+m[2] - 1] + ' ' + (+m[3]) + ', ' + m[1] : MONTHS[+m[2] - 1] + ' ' + m[1]) : esc(d || ''); };
    el.innerHTML = '<h1>What\'s New</h1><p class="muted">Latest version ' + esc(APP_META.version) + ' · ' + esc(APP_META.updated) + '</p>' +
      APP_CHANGELOG.map((r) => '<div class="card stack" style="margin-bottom:12px"><div class="spread"><h2 style="margin:0">Version ' + esc(r.version) + ' · ' + esc(r.title) + '</h2><time class="muted small" datetime="' + esc(r.date) + '">' + when(r.date) + '</time></div><div class="chg">' +
        r.items.map((it) => '<span class="pill ' + (label[it.type] || ['', ''])[1] + '">' + (label[it.type] || [it.type])[0] + '</span><span>' + esc(it.text) + '</span>').join('') + '</div></div>').join('') +
      '<p class="muted small">Suggestions or corrections? Email <span style="user-select:all">' + esc(APP_META.email) + '</span>.</p>';
  };

  /* ---------- About ---------- */
  V.about = (el) => {
    const H = window.HOSPITAL || {}, crisis = H.crisis || {};
    el.innerHTML = '<div class="card stack" style="text-align:center;align-items:center;justify-items:center"><img src="icons/icon-192.png" alt="' + esc(APP_META.name) + ' icon" width="96" height="96" style="border-radius:22px"><h1 style="margin:0">' + esc(APP_META.name) + '</h1><p class="muted" style="margin:0">' + esc(APP_META.tagline) + ' · version ' + esc(APP_META.version) + '</p>' +
      '<p style="margin:8px 0 0"><b>App created by ' + esc(APP_META.author) + '.</b><br>Latest version ' + esc(APP_META.updated) + '.<br><a href="mailto:' + esc(APP_META.email) + '">' + esc(APP_META.email) + '</a></p>' +
      '<div class="row" style="justify-content:center"><a class="btn" href="#/new">What\'s New</a><button class="btn" id="copymail">Copy email</button></div></div>' +
      '<h2 style="margin-top:18px">' + esc(App.t('about.settings')) + '</h2><div class="card stack">' +
        '<p class="small" style="margin:0">Furigana, romaji, word spacing, theme, text size, voice and register: <a href="#/settings">Settings</a>.</p></div>' +
      '<h2 style="margin-top:18px">About the content</h2><div class="card stack"><p style="margin:0"><span>話《はな》しましょう</span> means "let\'s talk." The app is the Japanese sister of <a href="https://isaymotion.github.io/Tagalog/" target="_blank" rel="noopener">Usap Tayo</a> (Tagalog) and Hablemos (Spanish): the same engine, with a learn track that starts from zero. ' + esc(LANG.variety) + '</p>' +
      '<p style="margin:0"><b>Reading aids.</b> Every kanji carries furigana (its reading in small hiragana). The romaji line under a sentence and the spaces between words are added by the app for beginners; Japanese is normally written without either. Romaji follows the kana spelling (<i>ou</i>, <i>ei</i>, <i>uu</i>), with a macron only for the katakana long mark.</p>' +
      '<p style="margin:0">' + esc(LANG.review) + ' Lessons, vocabulary and readings are original teaching material written for this app; they are drafts until a native speaker has checked them.</p>' +
      '<p style="margin:0">Psychiatry phrases are practice phrasings written for training. They are <b>not</b> validated translations of research instruments; use the published Japanese versions where a scale is required. Confirm wording with your supervisors, interpreters and patients.</p>' +
      '<p style="margin:0">' + esc(LANG.interpreter) + '</p>' +
      '<p style="margin:0"><b>Stroke order.</b> The stroke-order diagrams for kanji and kana use data from <a href="https://kanjivg.tagaini.net" target="_blank" rel="noopener">KanjiVG</a>, copyright Ulrich Apel, under the <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener">Creative Commons Attribution-Share Alike 3.0</a> licence. The stroke data files in the app (folder <code>strokes/</code>) are shared under the same licence.</p>' +
      '<p style="margin:0">The cognitive questions are bedside items written for this app and do not reproduce copyrighted tests.</p>' +
      (crisis.number ? '<p style="margin:0">Crisis line: ' + esc(crisis.name) + ' <b>' + esc(crisis.number) + '</b>. ' + esc(crisis.note || '') + ' Verify current numbers locally; edit data/hospital.js for your own service.</p>' : '') +
      (H.name ? '<p style="margin:0">Configured for ' + esc(H.name) + (H.program ? ', ' + esc(H.program) : '') + '.</p>' : '') + '</div>' +
      '<h2 style="margin-top:18px">Keyboard shortcuts</h2><div class="card"><p style="margin:0"><span class="kbd">/</span> search · <span class="kbd">Alt</span>+<span class="kbd">←</span>/<span class="kbd">→</span> back/forward · <span class="kbd">Space</span> flip flashcard · <span class="kbd">1</span>–<span class="kbd">4</span> grade card</p></div>';
    el.querySelector('#copymail').onclick = () => { navigator.clipboard && navigator.clipboard.writeText(APP_META.email).then(() => App.toast('Email copied.'), () => App.toast(APP_META.email)); };
  };
})();
