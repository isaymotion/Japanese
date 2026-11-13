/* Kanji study: a chart by level and group, a page for each kanji, and a multiple-choice drill.
   Data: js/data/kanji-*.js, parsed in js/core.js into App.KANJI (format in tools/AUTHORING.md).
   Progress: state.kanji[字] = correct answers in a row (3 or more = learned). Flashcards use ids "k:字" (js/core.js).
   Routes: #/kanji (?lv=N5|N4|N3|C, ?tab=drill) and #/kanji/k/<字>. */
(function () {
  const { esc, shuffle, pick, icons } = App;
  const V = App.views, S = () => App.state;
  const ALL = App.KANJI || [], BY = App.kanjiBy || {};
  const LEVELS = App.KANJI_LEVELS || [];
  const LV_NAME = { N5: 'JLPT N5', N4: 'JLPT N4', N3: 'JLPT N3', C: 'Clinical set' };
  const prog = () => S().kanji || (S().kanji = {});
  const learned = (k) => (prog()[k] || 0) >= 3;
  const ofLevel = (lv) => ALL.filter((x) => x.lv === lv);
  const groupsOf = (lv) => { const g = []; ofLevel(lv).forEach((x) => { if (!g.includes(x.group)) g.push(x.group); }); return g; };
  const href = App.kanjiHref;
  const bare = (s) => JA.compact(JA.plain(s));                 // word as it is printed, without readings
  const yomi = (s) => JA.compact(JA.kana(s));                  // its reading in kana
  const kunHTML = (r) => esc(r.r) + (r.o ? '<span class="kj-oku">' + esc(r.o) + '</span>' : '');
  App.kanjiLearned = () => ALL.filter((x) => learned(x.k)).length;
  // Kanji of a word that have a page, in order (used by the dictionary word page).
  App.kanjiIn = (tl) => { const out = []; for (const ch of JA.plain(tl)) if (BY[ch] && !out.includes(ch)) out.push(ch); return out; };
  App.kanjiChips = (tl) => { const ks = App.kanjiIn(tl); return ks.length ? '<div class="kj-chips" data-noja>' + ks.map((k) => '<a class="kj-chip" href="' + href(k) + '"><b lang="ja">' + esc(k) + '</b><span>' + esc(BY[k].mean[0] || '') + '</span></a>').join('') + '</div>' : ''; };

  /* ---------- Chart and drill ---------- */
  V.kanji = (el, p, q) => {
    if (!ALL.length) return App.notYet(el, 'Kanji', 'The kanji study module');
    let lv = LEVELS.some(([k]) => k === q.lv) ? q.lv : (S().kanjiLevel && LEVELS.some(([k]) => k === S().kanjiLevel) ? S().kanjiLevel : LEVELS[0][0]);
    let tab = q.tab === 'drill' ? 'drill' : q.tab === 'list' ? 'list' : 'chart';
    let mode = 'meaning', picked = null;
    const defaultGroups = () => {
      const open = groupsOf(lv).filter((g) => ofLevel(lv).some((x) => x.group === g && !learned(x.k)));
      return open.length ? open.slice(0, 1) : groupsOf(lv);
    };
    const chart = () => groupsOf(lv).map((g) => {
      const ks = ofLevel(lv).filter((x) => x.group === g), n = ks.filter((x) => learned(x.k)).length;
      return '<div class="spread" style="margin-top:18px"><h2 style="margin:0">' + esc(g) + '</h2><span class="muted small">' + n + ' / ' + ks.length + '</span></div><div class="kj-grid" data-noja>' +
        ks.map((x) => '<a class="kj-cell' + (learned(x.k) ? ' known' : '') + '" href="' + href(x.k) + '" aria-label="' + esc(x.k + ': ' + x.mean.join(', ')) + '"><b lang="ja">' + esc(x.k) + '</b><small>' + esc(x.mean[0] || '') + '</small></a>').join('') + '</div>';
    }).join('') + '<p class="small muted" style="margin-top:14px">Tap a kanji for its readings and example words. Green kanji are ones you have answered correctly three times in a row in the drill.</p>';
    // A study list to read or print: one table per group, with readings and example words.
    const list = () => '<div class="row noprint" style="margin:10px 0 0"><button class="btn sm primary" id="kjprint">' + icons.book + ' Print or save as PDF</button><span class="small muted">Prints the ' + esc(LV_NAME[lv] || lv) + ' list with the furigana and romaji settings you have now.</span></div>' +
      '<div class="kj-list"><div class="kj-list-head"><b>' + esc(APP_META.name) + ': ' + esc(LV_NAME[lv] || lv) + ' kanji</b><span>' + ofLevel(lv).length + ' kanji · draft for review · ' + esc(APP_META.attribution) + '</span></div>' +
      groupsOf(lv).map((g) => '<h2>' + esc(g) + '</h2><div class="tablewrap"><table class="kj-table"><tr><th>Kanji</th><th>Meaning</th><th>Readings</th><th>Words</th></tr>' +
        ofLevel(lv).filter((x) => x.group === g).map((x) => '<tr><td class="kj-tk" data-noja><a href="' + href(x.k) + '" lang="ja">' + esc(x.k) + '</a><small>' + x.strokes + '</small></td><td>' + esc(x.mean.join(', ')) + '</td><td data-noja lang="ja">' +
          (x.on.length ? '<div>' + esc(x.on.join('・')) + '</div>' : '') + (x.kun.length ? '<div>' + x.kun.map(kunHTML).join('、 ') + '</div>' : '') + '</td><td>' +
          x.words.map((w) => '<div>' + esc(w.tl) + ' <span class="kj-gl">' + esc(w.en) + '</span></div>').join('') + '</td></tr>').join('') + '</table></div>').join('') + '</div>';
    const drill = () => {
      if (!picked) picked = defaultGroups();
      return '<div class="card stack"><div class="spread"><b>Groups to practise</b><span class="row"><button class="btn sm" data-all="1">All</button><button class="btn sm" data-all="0">Next unlearned</button></span></div>' +
        '<div class="kana-rows">' + groupsOf(lv).map((g) => '<label><input type="checkbox" data-grp="' + esc(g) + '"' + (picked.includes(g) ? ' checked' : '') + '> ' + esc(g) + ' <span class="muted small">' + ofLevel(lv).filter((x) => x.group === g).length + '</span></label>').join('') + '</div>' +
        '<div class="seg" role="group" aria-label="Question type" style="margin-top:8px">' + [['meaning', 'See kanji, choose the meaning'], ['kanji', 'See the meaning, choose kanji'], ['reading', 'See a word, choose the reading'], ['word', 'See a word, choose the meaning']].map(([k, t]) => '<button data-mode="' + k + '" class="' + (mode === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
        '<div class="row"><button class="btn primary" id="kjstart">Start (10 questions)</button></div></div><div id="kjq" style="margin-top:12px"></div>';
    };
    // One question for kanji x in the current mode. Options[0] is always the right answer.
    const question = (x, pool) => {
      const others = shuffle(pool.filter((y) => y.k !== x.k)).concat(shuffle(ofLevel(lv).filter((y) => y.k !== x.k)), shuffle(ALL.filter((y) => y.k !== x.k)));
      const take = (val, same) => { const d = [], right = val(x); others.forEach((y) => { const v = val(y); if (d.length < 3 && v && !same(v, right) && !d.some((z) => same(z, v))) d.push(v); }); return [right].concat(d); };
      const eq = (a, b) => a === b;
      const w = x.words.length ? x.words[Math.floor(Math.random() * x.words.length)] : null;
      const info = x.mean.join(', ') + (App.kanjiReadings(x) ? ' · ' + App.kanjiReadings(x) : '');
      if (mode === 'kanji') return { x, q: x.mean.join(', '), big: false, jaQ: false, opts: take((y) => y.k, eq), jaO: true, bigO: true, say: w && w.tl, exp: x.k + ': ' + info };
      if (mode === 'reading' && w) {
        const opts = take((y) => (y === x ? yomi(w.tl) : y.words.length ? yomi(y.words[Math.floor(Math.random() * y.words.length)].tl) : ''), eq);
        return { x, q: bare(w.tl), big: false, word: true, jaQ: true, opts, jaO: true, say: w.tl, exp: w.tl + ' = ' + w.en };
      }
      if (mode === 'word' && w) {
        const opts = take((y) => (y === x ? w.en : y.words.length ? y.words[Math.floor(Math.random() * y.words.length)].en : ''), (a, b) => a.toLowerCase() === b.toLowerCase());
        return { x, q: w.tl, big: false, word: true, ruby: true, opts, jaO: false, say: w.tl, exp: w.tl + ' = ' + w.en };
      }
      return { x, q: x.k, big: true, jaQ: true, opts: take((y) => y.mean.join(', '), eq), jaO: false, say: w && w.tl, exp: x.k + ': ' + info };
    };
    const run = () => {
      const pool = ofLevel(lv).filter((x) => picked.includes(x.group));
      const box = el.querySelector('#kjq');
      if (pool.length < 4) { box.innerHTML = '<div class="notice">Choose groups with at least four kanji in total.</div>'; return; }
      // Unlearned kanji first, so a short drill always moves the learner forward.
      const order = shuffle(pool.filter((x) => !learned(x.k))).concat(shuffle(pool.filter((x) => learned(x.k))));
      const qs = order.slice(0, 10).map((x) => question(x, pool));
      let i = 0, right = 0;
      const next = () => {
        if (i >= qs.length) {
          App.activity(10); App.save();
          box.innerHTML = '<div class="card stack"><h3>' + right + ' / ' + qs.length + '</h3><div class="progress"><i style="width:' + Math.round((100 * right) / qs.length) + '%"></i></div><div class="row"><button class="btn primary" id="kjagain">Again</button><a class="btn" href="#/kanji?lv=' + lv + '">See the chart</a></div></div>';
          box.querySelector('#kjagain').onclick = () => { draw(); const b = el.querySelector('#kjstart'); if (b) b.click(); };
          return;
        }
        const qq = qs[i], ord = shuffle(qq.opts.map((o, k) => k));
        box.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + '</span></div>' +
          '<div class="' + (qq.big ? 'kana-big' : qq.word ? 'kj-word' : 'kj-prompt') + '"' + (qq.jaQ ? ' data-noja lang="ja"' : qq.ruby ? ' data-norj' : '') + '>' + esc(qq.q) + '</div>' +
          '<div class="opts"' + (qq.bigO ? ' data-noja' : '') + '>' + ord.map((k) => '<button class="opt' + (qq.jaO ? ' tl' : '') + '" data-k="' + k + '"' + (qq.bigO ? ' lang="ja" style="font-size:1.9rem;text-align:center"' : qq.jaO ? ' style="font-size:1.2rem"' : '') + '>' + esc(qq.opts[k]) + '</button>').join('') + '</div><div data-fb></div></div>';
        box.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
          const ok = +b.dataset.k === 0;
          if (ok) right++;
          prog()[qq.x.k] = ok ? (prog()[qq.x.k] || 0) + 1 : 0;
          App.recordAnswer(ok, ok ? null : 'k:' + qq.x.k);
          box.querySelectorAll('.opt').forEach((o) => { o.disabled = true; if (+o.dataset.k === 0) o.classList.add('right'); });
          if (!ok) b.classList.add('wrong');
          if (qq.say) App.speak(qq.say, { rate: 0.8 });
          box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b> ' + esc(qq.exp) + '</div>' +
            '<div class="row" style="margin-top:10px"><button class="btn primary" id="kjnext">' + (i + 1 < qs.length ? 'Next' : 'See score') + '</button><a class="btn" href="' + href(qq.x.k) + '">Open ' + '<span data-noja lang="ja">' + esc(qq.x.k) + '</span></a></div>';
          box.querySelector('#kjnext').onclick = () => { i++; next(); };
          box.querySelector('#kjnext').focus();
        }));
      };
      next();
    };
    const draw = () => {
      const ks = ofLevel(lv), n = ks.filter((x) => learned(x.k)).length;
      el.innerHTML = '<h1>Kanji</h1><p class="muted noprint">Kanji carry meaning, and most have more than one reading. Learn each one inside real words: open a kanji to see its readings and example words, then drill a group at a time. Lesson: <a href="#/lessons/' + ((window.LESSONS || []).some((l) => l.id === 'kanji-basics') ? 'kanji-basics">How kanji work' : 'writing-systems">The three scripts') + '</a>.</p>' +
        '<div class="row" style="flex-wrap:wrap;gap:8px"><div class="seg" role="group" aria-label="Level">' + LEVELS.map(([k, t]) => '<button data-lv="' + k + '" class="' + (lv === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
        '<div class="seg" role="group" aria-label="View">' + [['chart', 'Chart'], ['drill', 'Drill'], ['list', 'List']].map(([k, t]) => '<button data-tab="' + k + '" class="' + (tab === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
        '<span class="pill ' + (n === ks.length ? 'good' : '') + '">' + esc(LV_NAME[lv] || lv) + ': ' + n + ' / ' + ks.length + ' learned</span>' +
        '<a class="btn sm" href="#/flash/kanji-' + lv + '">' + icons.cards + ' Flashcards</a></div>' +
        (lv === 'C' ? '<p class="small muted" style="margin:10px 0 0">Kanji beyond N3 that appear often in this app\'s psychiatry phrases.</p>' : '') +
        '<div style="margin-top:8px">' + (tab === 'chart' ? chart() : tab === 'list' ? list() : drill()) + '</div>' +
        '<p class="small muted" style="margin-top:14px">Draft for review: readings, meanings and example words are pending review by a native Japanese speaker. JLPT levels for kanji are approximate; there is no official list.</p>';
      el.querySelectorAll('[data-lv]').forEach((b) => (b.onclick = () => { lv = b.dataset.lv; S().kanjiLevel = lv; App.save(); picked = null; draw(); }));
      const kp = el.querySelector('#kjprint'); if (kp) kp.onclick = () => App.printPage();
      el.querySelectorAll('[data-tab]').forEach((b) => (b.onclick = () => { tab = b.dataset.tab; draw(); }));
      el.querySelectorAll('[data-mode]').forEach((b) => (b.onclick = () => { mode = b.dataset.mode; el.querySelectorAll('[data-mode]').forEach((x) => x.classList.toggle('on', x === b)); }));
      el.querySelectorAll('[data-grp]').forEach((c) => (c.onchange = () => { picked = [...el.querySelectorAll('[data-grp]:checked')].map((x) => x.dataset.grp); }));
      el.querySelectorAll('[data-all]').forEach((b) => (b.onclick = () => { picked = b.dataset.all === '1' ? groupsOf(lv) : defaultGroups(); draw(); }));
      const st = el.querySelector('#kjstart'); if (st) st.onclick = run;
    };
    draw();
  };

  /* ---------- One kanji ---------- */
  V.kanjiPage = (el, p) => {
    let ch = p.ch; try { ch = decodeURIComponent(p.ch); } catch (e) { /* keep as typed */ }
    const x = BY[ch];
    if (!x) { el.innerHTML = '<h1>Kanji</h1><p>This kanji is not in the app yet. <a href="#/kanji">Back to the kanji chart</a></p>'; return; }
    const same = ALL.filter((y) => y.lv === x.lv), at = same.indexOf(x), prev = same[at - 1], next = same[at + 1];
    const flatK = (s) => JA.plain(s);
    const listed = new Set(x.words.map((w) => App.flat(w.tl)));
    const dict = (App.DICT || []).filter((e) => flatK(e.tl).includes(x.k));
    const dictFor = (w) => (App.byHead.get(App.flat(w.tl)) || [])[0];
    const more = dict.filter((e) => !listed.has(e.ftl)).slice(0, 12);
    const phrases = [];
    (window.PSYCH_SECTIONS || []).some((s) => s.phrases.some((ph, i) => { if (flatK(ph.f).includes(x.k)) phrases.push([s, ph, i]); return phrases.length >= 4; }));
    const id = 'k:' + x.k, n = prog()[x.k] || 0;
    const wordRow = (tl, en, e) => '<div class="entry"><div class="w">' + (e ? '<a href="#/dict/' + e.id + '">' + esc(tl) + '</a>' : esc(tl)) + '</div><div class="acts">' + App.sayBtn(tl, tl) + '</div><div class="d">' + esc(en) + '</div></div>';
    el.innerHTML = '<div class="breadcrumb"><a href="#/kanji?lv=' + x.lv + '">Kanji</a> / <a href="#/kanji?lv=' + x.lv + '">' + esc(LV_NAME[x.lv] || x.lv) + '</a> / ' + esc(x.mean[0] || '') + '</div>' +
      '<h1><span data-noja lang="ja">' + esc(x.k) + '</span> ' + esc(x.mean.join(', ')) + '</h1>' +
      '<div class="card kj-head"><div class="kj-glyph" data-noja lang="ja" aria-hidden="true">' + esc(x.k) + '</div><div class="stack" style="min-width:0">' +
      '<div class="row"><a class="pill lv" href="#/kanji?lv=' + x.lv + '">' + esc(x.lv === 'C' ? 'Clinical' : x.lv) + '</a><span class="pill">' + esc(x.group) + '</span>' + (x.strokes ? '<span class="pill">' + x.strokes + ' strokes</span>' : '') + (n >= 3 ? '<span class="pill good">' + icons.check.replace('<svg', '<svg width="12" height="12"') + ' learned</span>' : '') + '</div>' +
      '<table class="kj-read" data-norj>' +
      (x.on.length ? '<tr><th>On <small>Chinese-derived, mostly in compounds</small></th><td class="tl">' + x.on.map(esc).join('、 ') + '</td></tr>' : '') +
      (x.kun.length ? '<tr><th>Kun <small>native Japanese word</small></th><td class="tl">' + x.kun.map(kunHTML).join('、 ') + '</td></tr>' : '') + '</table>' +
      '<div class="row"><button class="btn sm" data-addcard="' + esc(id) + '">' + (S().srs[id] ? icons.check + ' In deck' : icons.plus + ' Add to flashcards') + '</button>' +
      '<button class="btn sm" id="kjknow">' + (n >= 3 ? 'Mark as not learned' : 'I know this one') + '</button></div></div></div>' +
      (x.note ? '<div class="notice info" style="margin-top:12px">' + esc(x.note) + '</div>' : '') +
      (App.strokes ? App.strokes.section(x.k) : '') +
      (App.strokes && App.strokes.has(x.k) ? '<p class="small noprint" style="margin:8px 0 0"><a href="#/write?c=' + encodeURIComponent(x.k) + '">Writing practice sheet for this kanji</a> · <a href="#/write?lv=' + x.lv + '">for a whole group</a></p>' : '') +
      '<h2 style="margin-top:18px">Example words</h2><div class="card">' + x.words.map((w) => wordRow(w.tl, w.en, dictFor(w))).join('') + '</div>' +
      (more.length ? '<h2 style="margin-top:18px">More words in the dictionary</h2><div class="card">' + more.map((e) => wordRow(e.tl, e.en, e)).join('') + '</div>' + (dict.length - listed.size > more.length ? '<p class="small muted"><a href="#/search?q=' + encodeURIComponent(x.k) + '">Search every word with this kanji</a></p>' : '') : '') +
      (phrases.length ? '<h2 style="margin-top:18px">In psychiatry phrases</h2><div class="card">' + phrases.map(([s, ph, i]) => '<div class="entry"><div class="w"><a href="#/psych/s/' + s.id + '?p=' + i + '">' + esc(ph.f) + '</a></div><div class="d muted">' + esc(ph.en) + '</div></div>').join('') + '</div>' : '') +
      '<div class="spread" style="margin-top:16px" data-noja>' + (prev ? '<a class="btn" href="' + href(prev.k) + '">← <span lang="ja">' + esc(prev.k) + '</span> ' + esc(prev.mean[0] || '') + '</a>' : '<span></span>') + (next ? '<a class="btn" href="' + href(next.k) + '">' + esc(next.mean[0] || '') + ' <span lang="ja">' + esc(next.k) + '</span> →</a>' : '') + '</div>' +
      '<p class="small muted" style="margin-top:14px">Draft for review, pending a native Japanese speaker. The dotted part of a kun reading is written in kana after the kanji (okurigana).</p>';
    if (App.strokes) App.strokes.mount(el);
    el.querySelector('#kjknow').onclick = () => { prog()[x.k] = n >= 3 ? 0 : 3; App.save(); V.kanjiPage(el, p); };
  };
})();
