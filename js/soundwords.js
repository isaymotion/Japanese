/* Sound-symbolic words (#/sounds, 0.23.0). Data: window.SOUND_WORDS (js/data/sound-words.js); learn, quiz, match.
   Tabs (?tab=learn | quiz | match): Learn shows each group's note, then every word with a speaker, its meaning and its
   example sentence (with a speaker); Quiz mixes word → meaning, meaning → word and "listen and choose" (the word is
   played and hidden until answered), or one of them (state.settings.soundsQ); Match pairs 6 words with 6 meanings within
   the chosen group (or across all groups). Group filter (state.settings.soundsG), level seg (state.settings.soundsLv),
   round length 10 / 20 (state.settings.soundsN).
   Best scores: state.done.sounds['<mode>:<group id or all>'] = best % (mode quiz | match); numbers only (the Progress page,
   V.progress in js/views.js, shows them under "Practice scores"). Sound words have no flashcard ids, so misses go to
   state.done.sounds.miss (item ids, last 200) for a "Practise my mistakes" round; a right answer takes the word off. */
(function () {
  const { esc, shuffle, pick, icons, norm } = App;
  const V = App.views, S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const LVS = ['N5', 'N4', 'N3', 'N2'];
  const TABS = [['learn', 'Learn'], ['quiz', 'Quiz'], ['match', 'Match']];
  const QT = [['mix', 'Mixed'], ['wm', 'Word → meaning'], ['mw', 'Meaning → word'], ['listen', 'Listen']];
  const MISS_MAX = 200;
  const mmss = (t) => Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');

  const src = () => (window.SOUND_WORDS && typeof window.SOUND_WORDS === 'object' ? window.SOUND_WORDS : {});
  const groupsAll = () => (Array.isArray(src().groups) ? src().groups : []).filter((g) => g && g.id);
  const itemsAll = () => (Array.isArray(src().items) ? src().items : []).filter((x) => x && x.id && x.w && x.en);
  const store = () => { const d = S().done; if (!d.sounds || typeof d.sounds !== 'object') d.sounds = {}; return d.sounds; };
  const missList = () => { const st = store(); if (!Array.isArray(st.miss)) st.miss = []; return st.miss; };
  const noteMiss = (id, ok) => {
    const m = missList(), at = m.indexOf(id);
    if (at >= 0) m.splice(at, 1);
    if (!ok) { m.push(id); if (m.length > MISS_MAX) m.splice(0, m.length - MISS_MAX); }
  };
  const saveBest = (k, pct) => { const st = store(); st[k] = Math.max(pct, typeof st[k] === 'number' ? st[k] : 0); };
  const lessonLink = (x) => { if (!x.l) return ''; const l = (window.LESSONS || []).find((y) => y.id === x.l); return l ? '<a class="btn sm" href="#/lessons/' + encodeURIComponent(l.id) + '">Lesson: ' + esc(l.title) + '</a>' : ''; };
  // One word in full: the word and its speaker, the meaning, the example with its speaker and English, the note.
  const wordBlock = (x) => '<div class="sw-head"><span class="tl sw-w">' + esc(x.w) + '</span>' + App.sayBtn(x.w, x.w) + '<span class="sw-en">' + esc(x.en) + '</span>' + (x.lv ? '<span class="pill lv">' + esc(x.lv) + '</span>' : '') + '</div>' +
    (x.ex ? '<div class="sw-ex"><span class="tl">' + esc(x.ex) + '</span>' + App.sayBtn(x.ex, x.ex) + '</div>' + (x.exen ? '<div class="small muted">' + esc(x.exen) + '</div>' : '') : '') +
    (x.note ? '<div class="small">' + esc(x.note) + '</div>' : '') + (x.l ? '<div>' + lessonLink(x) + '</div>' : '');

  V.sounds = (el, prm, q) => {
    q = q || {};
    const tab = TABS.some((t) => t[0] === q.tab) ? q.tab : 'learn';
    const st = S().settings;
    const items = itemsAll(), groups = groupsAll();
    const head = crumb([['Practice', '#/practice'], ['Sound-symbolic words']]) + '<h1>Sound-symbolic words</h1>';
    if (!items.length) { el.innerHTML = head + '<div class="notice info">No items yet. The sound-symbolic words (ズキズキ, ムカムカ and the rest) arrive with the next data update.</div>'; return; }
    const avail = LVS.filter((lv) => items.some((x) => x.lv === lv));
    const lv = st.soundsLv && (st.soundsLv === 'All' || avail.includes(st.soundsLv)) ? st.soundsLv : 'All';
    const atLv = items.filter((x) => lv === 'All' || x.lv === lv);
    // Groups in data order; words whose group is missing go under "Other".
    const known = new Set(groups.map((g) => g.id));
    const gs = groups.concat(items.some((x) => !known.has(x.g)) ? [{ id: '_other', title: 'Other', note: '' }] : []);
    const gOf = (x) => (known.has(x.g) ? x.g : '_other');
    const gShown = gs.filter((g) => atLv.some((x) => gOf(x) === g.id));
    const g = st.soundsG && gShown.some((x) => x.id === st.soundsG) ? st.soundsG : 'all';
    const pool = atLv.filter((x) => g === 'all' || gOf(x) === g);
    el.innerHTML = head +
      '<p class="muted">Giongo and gitaigo: the sound and manner words patients use for pain, nausea, dizziness, worry and sleep. Learn them by group, then quiz yourself or match them to their meanings.</p>' +
      '<div class="seg sw-seg" role="group" aria-label="View" data-norj style="margin-bottom:10px">' + TABS.map(([k, t]) => '<a role="button" href="#/sounds?tab=' + k + '" class="' + (tab === k ? 'on' : '') + '"' + (tab === k ? ' aria-current="page"' : '') + '>' + t + '</a>').join('') + '</div>' +
      '<div class="stack sw-filters"><div class="seg sw-seg" role="group" aria-label="Level" data-norj>' + [['All', 'All']].concat(avail.map((x) => [x, x])).map(([k, t]) => '<button type="button" data-slv="' + k + '" aria-pressed="' + (lv === k) + '" class="' + (lv === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
      '<label class="small muted" for="swgroup">Group</label><select class="input" id="swgroup"><option value="all">All groups (' + atLv.length + ')</option>' +
      gShown.map((x) => '<option value="' + esc(x.id) + '"' + (x.id === g ? ' selected' : '') + '>' + esc(x.title) + ' (' + atLv.filter((y) => gOf(y) === x.id).length + ')</option>').join('') + '</select></div>' +
      '<div id="swbox" style="margin-top:12px"></div>';
    el.querySelectorAll('[data-slv]').forEach((b) => (b.onclick = () => { st.soundsLv = b.dataset.slv; App.save(); V.sounds(el, prm, q); }));
    el.querySelector('#swgroup').onchange = (ev) => { st.soundsG = ev.target.value; App.save(); V.sounds(el, prm, q); };
    const box = el.querySelector('#swbox');
    const ctx = { items, gs, gOf, g, lv, gTitle: (id) => (gs.find((x) => x.id === id) || {}).title || id };
    if (tab === 'learn') return learn(box, pool, ctx);
    if (tab === 'match') return match(box, pool, ctx);
    return quiz(box, pool, ctx);
  };

  /* ---------- Learn ---------- */
  function learn(box, pool, c) {
    if (!pool.length) { box.innerHTML = '<div class="notice info">No words for this level and group yet.</div>'; return; }
    box.innerHTML = '<p class="muted small" style="margin:0 0 6px">' + pool.length + ' word' + (pool.length === 1 ? '' : 's') + '. Tap a speaker to hear the word or its example.</p>' +
      c.gs.filter((g) => pool.some((x) => c.gOf(x) === g.id)).map((g) => '<h2>' + esc(g.title) + '</h2>' + (g.note ? '<p class="muted">' + esc(g.note) + '</p>' : '') +
        '<div class="card sw-list">' + pool.filter((x) => c.gOf(x) === g.id).map((x) => '<div class="sw-item">' + wordBlock(x) + '</div>').join('') + '</div>').join('');
  }

  /* ---------- Quiz ---------- */
  // Three other items for x with a different meaning and a different word: same group first, then any.
  function others(x, items, gOf) {
    const out = [], ens = new Set([norm(x.en)]), ws = new Set([x.w]);
    const take = (list) => { for (const y of list) { if (out.length >= 3) break; if (ens.has(norm(y.en)) || ws.has(y.w)) continue; out.push(y); ens.add(norm(y.en)); ws.add(y.w); } };
    take(shuffle(items.filter((y) => y !== x && gOf(y) === gOf(x))));
    take(shuffle(items.filter((y) => y !== x)));
    return out;
  }
  function makeQ(x, kind, items, gOf) {
    const o = others(x, items, gOf);
    if (o.length < 3) return null;
    const opts = shuffle([x].concat(o));
    const base = { id: x.id, fb: (ok, ch) => wordBlock(x) + (!ok && ch ? '<div class="small muted">Your choice: ' + (kind === 'mw' ? '<span class="tl">' + esc(ch.x.w) + '</span> = ' + esc(ch.x.en) : esc(ch.x.en) + ' = <span class="tl">' + esc(ch.x.w) + '</span>') + '</div>' : '') };
    if (kind === 'mw') return Object.assign(base, { html: '<div class="muted small">Which word means …</div><div class="sw-q">' + esc(x.en) + '</div>', opts: opts.map((y) => ({ h: '<span class="tl">' + esc(y.w) + '</span>', ok: y === x, x: y })) });
    const optsEn = opts.map((y) => ({ h: esc(y.en), ok: y === x, x: y }));
    if (kind === 'listen') return Object.assign(base, { play: x.w, html: '<div class="listen-q"><button class="btn primary" data-act="play" aria-label="Play again">' + icons.sound + ' Play again</button><span class="muted small">Listen, then choose the meaning.</span></div><div class="tl sw-q" data-qtext hidden>' + esc(x.w) + '</div>', opts: optsEn });
    return Object.assign(base, { html: '<div class="spread"><div class="muted small">What does this word mean?</div></div><div class="row"><span class="tl sw-q">' + esc(x.w) + '</span>' + App.sayBtn(x.w, x.w) + '</div>', opts: optsEn });
  }
  // 0.25.0: questions for Today's practice (js/today.js, shared shape of App.drillRun): App.soundsQs([ids]); word → meaning
  // or listen → meaning, built by makeQ above; a right answer takes the word off the mistakes.
  App.soundsQs = (ids) => {
    const xs = itemsAll(), known = new Set(groupsAll().map((g) => g.id)), gOf = (x) => (known.has(x.g) ? x.g : '_other');
    return (Array.isArray(ids) ? ids : []).map((id) => xs.find((x) => x.id === id)).filter(Boolean).map((x, i) => {
      const q = makeQ(x, i % 2 ? 'listen' : 'wm', xs, gOf);
      return q && Object.assign(q, { drill: 'sounds', lv: x.lv, norj: !!q.play, done: (ok) => noteMiss(x.id, ok) });
    }).filter(Boolean);
  };

  function quiz(box, pool, c) {
    const st = S().settings;
    let n = st.soundsN === 20 ? 20 : 10;
    let kind = QT.some((t) => t[0] === st.soundsQ) ? st.soundsQ : 'mix';
    const k = 'quiz:' + c.g.replace(/^_other$/, 'other');
    const byId = (id) => c.items.find((x) => x.id === id);
    const paint = () => {
      const miss = missList().map(byId).filter(Boolean);
      const b = store()[k];
      box.innerHTML = '<div class="card stack"><div class="seg sw-seg" role="group" aria-label="Question type" data-norj>' + QT.map(([x, t]) => '<button type="button" data-sq="' + x + '" aria-pressed="' + (kind === x) + '" class="' + (kind === x ? 'on' : '') + '">' + esc(t) + '</button>').join('') + '</div>' +
        '<div class="row" style="flex-wrap:wrap;gap:8px"><div class="seg sw-seg" role="group" aria-label="Number of questions" data-norj>' + [10, 20].map((x) => '<button type="button" data-sn="' + x + '" aria-pressed="' + (n === x) + '" class="' + (n === x ? 'on' : '') + '">' + x + '</button>').join('') + '</div>' +
        (typeof b === 'number' ? '<span class="pill' + (b >= 80 ? ' good' : '') + '">Best ' + b + '%</span>' : '') + '</div>' +
        '<p class="muted small" style="margin:0">' + pool.length + ' words in ' + (c.g === 'all' ? 'all groups' : esc(c.gTitle(c.g))) + '. Keys 1–4 choose, Enter goes on.</p>' +
        '<div class="row"><button class="btn primary" id="swgo"' + (pool.length < 4 ? ' disabled' : '') + '>Start</button>' + (miss.length ? '<button class="btn" id="swmistakes">Practise my mistakes (' + miss.length + ')</button>' : '') + '</div>' +
        (pool.length < 4 ? '<div class="notice">Not enough words here yet; at least 4 are needed. Choose another group or level.</div>' : '') + '</div><div id="swq" style="margin-top:14px"></div>';
      box.querySelectorAll('[data-sq]').forEach((x) => (x.onclick = () => { kind = x.dataset.sq; st.soundsQ = kind; App.save(); paint(); }));
      box.querySelectorAll('[data-sn]').forEach((x) => (x.onclick = () => { n = +x.dataset.sn; st.soundsN = n; App.save(); paint(); }));
      const go = box.querySelector('#swgo'); if (go) go.onclick = () => run(pick(pool, n), true);
      const mb = box.querySelector('#swmistakes'); if (mb) mb.onclick = () => run(pick(miss, n), false);
    };
    const run = (list, scored) => {
      const kinds = ['wm', 'mw', 'listen'];
      const qs = list.map((x, i) => makeQ(x, kind === 'mix' ? kinds[i % 3] : kind, c.items, c.gOf)).filter(Boolean);
      const qbox = box.querySelector('#swq');
      if (!qs.length) { qbox.innerHTML = '<div class="notice">Not enough words to make options yet.</div>'; return; }
      drill(qbox, shuffle(qs), {
        onAnswer: (q, ok) => { noteMiss(q.id, ok); App.recordAnswer(ok); App.save(); },
        onDone: (r, total) => {
          if (scored) saveBest(k, Math.round((100 * r) / total));
          App.activity(10); App.save();
          return '<button class="btn primary" data-act="again">New round</button>' + (missList().length ? '<button class="btn" data-act="miss">Practise my mistakes</button>' : '') + '<a class="btn" href="#/progress">Progress</a>';
        },
        bind: (wrap) => {
          const a = wrap.querySelector('[data-act=again]'); if (a) a.onclick = () => { paint(); run(pick(pool, n), true); };
          const m = wrap.querySelector('[data-act=miss]'); if (m) m.onclick = () => { paint(); run(pick(missList().map(byId).filter(Boolean), n), false); };
          if (a) a.focus();
        }
      });
      qbox.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
    paint();
  }

  /* ---------- Match ---------- */
  function match(box, pool, c) {
    const k = 'match:' + c.g.replace(/^_other$/, 'other');
    const choose = () => { const out = [], ens = new Set(), ws = new Set(); for (const x of shuffle(pool)) { if (out.length >= 6) break; if (ens.has(norm(x.en)) || ws.has(x.w)) continue; out.push(x); ens.add(norm(x.en)); ws.add(x.w); } return out; };
    let xs, locked, sel, misses, t0, timer;
    const stop = () => { if (timer) clearInterval(timer); timer = null; };
    App.onLeave = stop;
    App.keyHandler = null;
    const start = () => {
      xs = choose();
      if (xs.length < 3) { box.innerHTML = '<div class="notice">Not enough words in this group at this level yet (' + pool.length + '); at least 3 are needed. Choose another group or level.</div>'; return; }
      locked = new Set(); sel = -1; misses = 0; t0 = Date.now(); stop();
      const order = shuffle(xs.map((x, i) => i));
      const b = store()[k];
      box.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">' + (c.g === 'all' ? 'All groups' : esc(c.gTitle(c.g))) + ' · ' + xs.length + ' words</span><span class="muted small"><span id="swt">0:00</span> · <span id="swmiss">0 misses</span></span></div>' +
        '<div class="vm-grid" data-norj><div class="vm-col" role="group" aria-label="Words">' +
        xs.map((x, i) => '<button type="button" class="opt vm-snd sw-a" data-i="' + i + '" aria-pressed="false">' + icons.sound + '<span class="vm-w"><span>' + esc(x.w) + '</span></span></button>').join('') +
        '</div><div class="vm-col" role="group" aria-label="Meanings">' + order.map((i) => '<button type="button" class="opt sw-b" data-i="' + i + '">' + esc(xs[i].en) + '</button>').join('') + '</div></div>' +
        '<p class="muted small" style="margin:0">Tap a word (you hear it), then its meaning.' + (typeof b === 'number' ? ' Best ' + b + '%.' : '') + '</p></div>';
      timer = setInterval(() => { const t = box.querySelector('#swt'); if (!t) return stop(); t.textContent = mmss(Math.round((Date.now() - t0) / 1000)); }, 1000);
      box.querySelectorAll('.sw-a').forEach((bt) => (bt.onclick = () => {
        const i = +bt.dataset.i;
        App.speak(xs[i].w);
        if (locked.has(i)) return;
        sel = i;
        box.querySelectorAll('.sw-a').forEach((x) => { const on = +x.dataset.i === i; x.classList.toggle('sel', on); x.setAttribute('aria-pressed', on); });
      }));
      box.querySelectorAll('.sw-b').forEach((bt) => (bt.onclick = () => {
        const i = +bt.dataset.i;
        if (locked.has(i)) return;
        if (sel < 0) { App.toast('Tap a word first, then its meaning.'); return; }
        const sb = box.querySelector('.sw-a[data-i="' + sel + '"]');
        if (i === sel) {
          locked.add(i); noteMiss(xs[i].id, true);
          sb.classList.remove('sel'); sb.classList.add('right'); sb.setAttribute('aria-pressed', 'false');
          bt.classList.add('right'); bt.disabled = true; sel = -1;
          if (locked.size === xs.length) setTimeout(() => { if (box.isConnected) finish(); }, 600);
        } else {
          misses++; noteMiss(xs[sel].id, false); App.recordAnswer(false);
          box.querySelector('#swmiss').textContent = misses + ' miss' + (misses === 1 ? '' : 'es');
          [sb, bt].forEach((x) => { x.classList.add('wrong'); setTimeout(() => x.classList.remove('wrong'), 600); });
        }
      }));
    };
    function finish() {
      stop();
      const t = Math.round((Date.now() - t0) / 1000), n = xs.length, pct = Math.round((100 * n) / (n + misses));
      const before = store()[k];
      saveBest(k, pct); App.activity(10); App.save();
      box.innerHTML = '<div class="card stack"><h3 style="margin:0">' + (misses ? LANG.quiz.ok : LANG.quiz.great) + ' All ' + n + ' words matched</h3>' +
        '<p style="margin:0">' + misses + ' miss' + (misses === 1 ? '' : 'es') + ' · ' + mmss(t) + ' · score ' + pct + '%' + (typeof before === 'number' && pct > before ? ' · <span class="pill good">New best</span>' : '') + '</p>' +
        '<div class="card sw-list">' + xs.map((x) => '<div class="sw-item">' + wordBlock(x) + '</div>').join('') + '</div>' +
        '<div class="row"><button class="btn primary" id="swagain">New round</button><a class="btn" href="#/sounds?tab=quiz">Quiz</a></div></div>';
      box.querySelector('#swagain').onclick = start;
      box.querySelector('#swagain').focus();
    }
    start();
  }

  /* ---------- A small multiple-choice runner (progress bar, feedback with speakers, keys 1-4 and Enter) ---------- */
  // qs: [{ id, html, opts: [{ h, ok }], fb(ok, chosenOpt) → html, play }]. q.play: the notation is played on load and
  // from the Play again button, and [data-qtext] is shown once answered.
  function drill(el, qs, o) {
    let i = 0, right = 0;
    const draw = () => {
      if (i >= qs.length) {
        const pct = Math.round((100 * right) / qs.length);
        const btns = o.onDone ? o.onDone(right, qs.length) : '';
        el.innerHTML = '<div class="card stack"><h3 style="margin:0">' + (pct >= 80 ? LANG.quiz.great : pct >= 50 ? LANG.quiz.ok : LANG.quiz.keepGoing) + ' ' + right + ' / ' + qs.length + '</h3><div class="progress"><i style="width:' + pct + '%"></i></div><div class="row">' + btns + '</div></div>';
        if (o.bind) o.bind(el);
        return;
      }
      const q = qs[i];
      el.innerHTML = '<div class="card stack"' + (q.play ? ' data-norj' : '') + '><div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + '</span><span class="muted small">' + right + ' right</span></div>' +
        '<div class="progress"><i style="width:' + Math.round((100 * i) / qs.length) + '%"></i></div>' + q.html +
        '<div class="opts">' + q.opts.map((x, k) => '<button class="opt" data-k="' + k + '"><span class="pr-k" aria-hidden="true">' + (k + 1) + '</span> ' + x.h + '</button>').join('') + '</div><div data-fb></div></div>';
      if (q.play) { const pb = el.querySelector('[data-act=play]'); if (pb) pb.onclick = () => App.speak(q.play); setTimeout(() => { if (el.isConnected && qs[i] === q) App.speak(q.play); }, 150); }
      el.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
        const ch = q.opts[+b.dataset.k], ok = !!ch.ok;
        if (ok) right++;
        el.querySelectorAll('.opt').forEach((x) => { x.disabled = true; if (q.opts[+x.dataset.k].ok) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
        const qt = el.querySelector('[data-qtext]'); if (qt) qt.hidden = false;
        if (o.onAnswer) o.onAnswer(q, ok);
        el.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + ' stack pr-fb"><b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b>' + q.fb(ok, ok ? null : ch) + '</div>' +
          '<div class="row" style="margin-top:10px"><button class="btn primary" data-act="next">' + (i + 1 < qs.length ? 'Next' : 'See score') + '</button></div>';
        const nx = el.querySelector('[data-act=next]');
        nx.onclick = () => { i++; draw(); };
        nx.focus();
      }));
    };
    App.keyHandler = (ev) => {
      if (!el.isConnected || ev.altKey || ev.ctrlKey || ev.metaKey || ev.target.matches('input,textarea,select')) return;
      if (/^[1-4]$/.test(ev.key)) { const b = el.querySelector('.opt[data-k="' + (+ev.key - 1) + '"]:not(:disabled)'); if (b) { ev.preventDefault(); b.click(); } return; }
      if (ev.key === 'Enter' && !ev.target.closest('button,a')) { const nx = el.querySelector('[data-act=next]'); if (nx) { ev.preventDefault(); nx.click(); } }
    };
    draw();
  }
})();
