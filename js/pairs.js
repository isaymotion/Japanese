/* Word pairs (#/pairs, 0.23.0). Data: window.WORD_PAIRS (js/data/word-pairs-*.js); learn, match and quiz.
   Tabs (?tab=learn | match | quiz): Learn lists the pairs by type and level with speakers and notes; Match is a round of
   6 pairs (tap a word on the left, then its partner on the right; timer, misses and best time); Quiz shows `a` and the
   type ("Opposite of …", "Similar to …", "Which word goes with …") and asks for `b` among 4 of the same type and level.
   Level seg (state.settings.pairsLv), type seg (state.settings.pairsType), round length 10 / 20 (state.settings.pairsN).
   Best scores: state.done.pairs['<mode>:<lv>'] = best % (mode match | quiz; lv N5 | N4 | N3 | N2 | all); numbers only (the
   Progress page, V.progress in js/views.js, shows them under "Practice scores"). Match best time: state.done.pairs
   ['time:<lv>'] = { m: misses, t: seconds }. Pairs have no flashcard ids, so misses go to state.done.pairs.miss
   (pair ids, last 200) for a "Practise my mistakes" round; a right answer takes the pair off the list. */
(function () {
  const { esc, shuffle, pick, icons } = App;
  const V = App.views, S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const LVS = ['N5', 'N4', 'N3', 'N2'];
  const TYPES = [['opp', 'Opposites'], ['syn', 'Similar words'], ['col', 'Go together']];
  const TYPE_NAME = Object.fromEntries(TYPES);
  const ASK = { opp: 'Opposite of', syn: 'Similar to', col: 'Which word goes with' };
  const TABS = [['learn', 'Learn'], ['match', 'Match'], ['quiz', 'Quiz']];
  const MISS_MAX = 200;
  const plainOf = (s) => JA.speak(s).trim();
  const mmss = (t) => Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');

  const all = () => (Array.isArray(window.WORD_PAIRS) ? window.WORD_PAIRS : []).filter((p) => p && p.id && p.a && p.b && TYPE_NAME[p.type]);
  const store = () => { const d = S().done; if (!d.pairs || typeof d.pairs !== 'object') d.pairs = {}; return d.pairs; };
  const missList = () => { const st = store(); if (!Array.isArray(st.miss)) st.miss = []; return st.miss; };
  const noteMiss = (id, ok) => {
    const m = missList(), at = m.indexOf(id);
    if (ok) { if (at >= 0) m.splice(at, 1); return; }
    if (at >= 0) m.splice(at, 1);
    m.push(id); if (m.length > MISS_MAX) m.splice(0, m.length - MISS_MAX);
  };
  const lvKey = (lv) => (lv === 'All' ? 'all' : lv);
  const saveBest = (k, pct) => { const st = store(); st[k] = Math.max(pct, typeof st[k] === 'number' ? st[k] : 0); };
  const lessonLink = (p) => { if (!p.l) return ''; const l = (window.LESSONS || []).find((x) => x.id === p.l); return l ? '<a class="btn sm" href="#/lessons/' + encodeURIComponent(l.id) + '">Lesson: ' + esc(l.title) + '</a>' : ''; };
  const reason = (p) => p.note || (p.type === 'opp' ? p.ea + ' and ' + p.eb + ' are opposites.' : p.type === 'syn' ? 'Both mean roughly the same: ' + p.ea + ' / ' + p.eb + '.' : 'The usual word to go with “' + p.ea + '”.');
  // The pair in full, with a speaker for each word (and for the whole phrase of a collocation).
  const pairLine = (p) => '<div class="pr-line"><span class="pr-w"><span class="tl">' + esc(p.a) + '</span>' + App.sayBtn(p.a, p.a) + '</span><span class="pr-x" aria-hidden="true">' + (p.type === 'col' ? '+' : p.type === 'opp' ? '↔' : '≈') + '</span>' +
    '<span class="pr-w"><span class="tl">' + esc(p.b) + '</span>' + App.sayBtn(p.b, p.b) + '</span>' + (p.type === 'col' ? '<span class="pr-w pr-ph"><span class="muted small">Together</span>' + App.sayBtn(p.a + ' ' + p.b, p.a + ' ' + p.b) + '</span>' : '') + '</div>' +
    '<div class="small">' + esc(p.ea) + ' ' + (p.type === 'col' ? '+' : p.type === 'opp' ? '↔' : '≈') + ' ' + esc(p.eb) + (p.type === 'col' && p.en ? ' = <b>' + esc(p.en) + '</b>' : '') + '</div>';

  V.pairs = (el, prm, q) => {
    q = q || {};
    const tab = TABS.some((t) => t[0] === q.tab) ? q.tab : 'learn';
    const st = S().settings;
    const data = all();
    const head = crumb([['Practice', '#/practice'], ['Word pairs']]) + '<h1>Word pairs</h1>';
    if (!data.length) { el.innerHTML = head + '<div class="notice info">No items yet. Word pairs (opposites, similar words and words that go together) arrive with the next data update.</div>'; return; }
    const avail = LVS.filter((lv) => data.some((p) => p.lv === lv));
    let lv = st.pairsLv === 'All' || avail.includes(st.pairsLv) ? st.pairsLv : 'All';
    if (!lv) lv = 'All';
    const atLv = data.filter((p) => lv === 'All' || p.lv === lv);
    const tAvail = TYPES.filter(([k]) => atLv.some((p) => p.type === k)).map((t) => t[0]);
    let type = st.pairsType && (st.pairsType === 'all' || TYPE_NAME[st.pairsType]) ? st.pairsType : 'all';
    if (type !== 'all' && !tAvail.includes(type)) type = 'all';
    const pool = atLv.filter((p) => type === 'all' || p.type === type);
    const seg = (label, attr, items, cur, dis) => '<div class="seg pr-seg" role="group" aria-label="' + label + '" data-norj>' + items.map(([k, t]) => '<button type="button" data-' + attr + '="' + k + '" aria-pressed="' + (cur === k) + '" class="' + (cur === k ? 'on' : '') + '"' + (dis && dis(k) ? ' disabled' : '') + '>' + esc(t) + '</button>').join('') + '</div>';
    el.innerHTML = head +
      '<p class="muted">Learn words in pairs: <b>opposites</b>, <b>similar words</b> (with the difference) and words that <b>go together</b>. Then match them against the clock or take a quiz.</p>' +
      '<div class="seg pr-seg" role="group" aria-label="View" data-norj style="margin-bottom:10px">' + TABS.map(([k, t]) => '<a role="button" href="#/pairs?tab=' + k + '" class="' + (tab === k ? 'on' : '') + '"' + (tab === k ? ' aria-current="page"' : '') + '>' + t + '</a>').join('') + '</div>' +
      '<div class="stack pr-filters">' + seg('Level', 'plv', [['All', 'All']].concat(avail.map((x) => [x, x])), lv) +
      seg('Type', 'pty', [['all', 'All types']].concat(TYPES), type, (k) => k !== 'all' && !tAvail.includes(k)) + '</div>' +
      '<div id="prbox" style="margin-top:12px"></div>';
    el.querySelectorAll('[data-plv]').forEach((b) => (b.onclick = () => { st.pairsLv = b.dataset.plv; App.save(); V.pairs(el, prm, q); }));
    el.querySelectorAll('[data-pty]').forEach((b) => (b.onclick = () => { if (b.disabled) return; st.pairsType = b.dataset.pty; App.save(); V.pairs(el, prm, q); }));
    const box = el.querySelector('#prbox');
    if (tab === 'learn') return learn(box, pool);
    if (tab === 'match') return match(box, pool, lv, data);
    return quiz(box, pool, lv, data);
  };

  /* ---------- Learn ---------- */
  function learn(box, pool) {
    if (!pool.length) { box.innerHTML = '<div class="notice info">No pairs for this level and type yet.</div>'; return; }
    box.innerHTML = '<p class="muted small" style="margin:0 0 6px">' + pool.length + ' pair' + (pool.length === 1 ? '' : 's') + '. Tap a speaker to hear a word.</p>' +
      TYPES.filter(([k]) => pool.some((p) => p.type === k)).map(([k, t]) => '<h2>' + esc(t) + '</h2>' +
        LVS.concat(['']).map((lv) => {
          const ps = pool.filter((p) => p.type === k && (lv ? p.lv === lv : !LVS.includes(p.lv)));
          if (!ps.length) return '';
          return '<h3 class="pr-lvh"><span class="pill lv">' + esc(lv || 'Other') + '</span></h3><div class="card pr-list">' +
            ps.map((p) => '<div class="pr-item">' + pairLine(p) + (p.note ? '<div class="small muted">' + esc(p.note) + '</div>' : '') + (p.l ? '<div>' + lessonLink(p) + '</div>' : '') + '</div>').join('') + '</div>';
        }).join('')).join('');
  }

  /* ---------- Match ---------- */
  function match(box, pool, lv, data) {
    const k = 'match:' + lvKey(lv), tk = 'time:' + lvKey(lv);
    const bestTxt = () => { const b = store()[tk]; return b && typeof b === 'object' ? 'Best: ' + b.m + ' miss' + (b.m === 1 ? '' : 'es') + ' · ' + mmss(b.t) : ''; };
    // Six pairs whose left words differ and whose right words differ, so each word has one partner on screen.
    const choose = (src) => { const out = [], as = new Set(), bs = new Set(); for (const p of shuffle(src)) { if (out.length >= 6) break; const a = plainOf(p.a), b = plainOf(p.b); if (as.has(a) || bs.has(b) || as.has(b) || bs.has(a)) continue; out.push(p); as.add(a); bs.add(b); } return out; };
    let ps, locked, sel, misses, t0, timer;
    const stop = () => { if (timer) clearInterval(timer); timer = null; };
    App.onLeave = stop;
    const start = () => {
      ps = choose(pool);
      if (ps.length < 3) { box.innerHTML = '<div class="notice">Not enough pairs for this level and type yet (' + pool.length + '); at least 3 are needed. Choose another level or type.</div>'; return; }
      locked = new Set(); sel = -1; misses = 0; t0 = Date.now(); stop();
      const order = shuffle(ps.map((p, i) => i));
      box.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">' + ps.length + ' pairs</span><span class="muted small"><span id="prt">0:00</span> · <span id="prmiss">0 misses</span></span></div>' +
        '<div class="vm-grid pr-grid" data-norj><div class="vm-col" role="group" aria-label="Words">' +
        ps.map((p, i) => '<button type="button" class="opt vm-snd pr-a" data-i="' + i + '" aria-pressed="false">' + icons.sound + '<span class="vm-w"><span>' + esc(p.a) + '</span></span></button>').join('') +
        '</div><div class="vm-col" role="group" aria-label="Partners">' +
        order.map((i) => '<button type="button" class="opt pr-b" data-i="' + i + '"><span class="tl">' + esc(ps[i].b) + '</span></button>').join('') + '</div></div>' +
        '<p class="muted small" style="margin:0">Tap a word on the left (you hear it), then its partner on the right.' + (bestTxt() ? ' ' + esc(bestTxt()) + '.' : '') + '</p></div>';
      timer = setInterval(() => { const t = box.querySelector('#prt'); if (!t) return stop(); t.textContent = mmss(Math.round((Date.now() - t0) / 1000)); }, 1000);
      box.querySelectorAll('.pr-a').forEach((b) => (b.onclick = () => {
        const i = +b.dataset.i;
        App.speak(ps[i].a);
        if (locked.has(i)) return;
        sel = i;
        box.querySelectorAll('.pr-a').forEach((x) => { const on = +x.dataset.i === i; x.classList.toggle('sel', on); x.setAttribute('aria-pressed', on); });
      }));
      box.querySelectorAll('.pr-b').forEach((b) => (b.onclick = () => {
        const i = +b.dataset.i;
        if (locked.has(i)) return;
        if (sel < 0) { App.toast('Tap a word on the left first, then its partner.'); return; }
        const sb = box.querySelector('.pr-a[data-i="' + sel + '"]');
        if (i === sel) {
          locked.add(i); noteMiss(ps[i].id, true); App.speak(ps[i].b);
          sb.classList.remove('sel'); sb.classList.add('right'); sb.setAttribute('aria-pressed', 'false');
          b.classList.add('right'); b.disabled = true; sel = -1;
          if (locked.size === ps.length) setTimeout(() => { if (box.isConnected) finish(); }, 600);
        } else {
          misses++; noteMiss(ps[sel].id, false); App.recordAnswer(false);
          box.querySelector('#prmiss').textContent = misses + ' miss' + (misses === 1 ? '' : 'es');
          [sb, b].forEach((x) => { x.classList.add('wrong'); setTimeout(() => x.classList.remove('wrong'), 600); });
        }
      }));
    };
    function finish() {
      stop();
      const t = Math.round((Date.now() - t0) / 1000), n = ps.length, pct = Math.round((100 * n) / (n + misses));
      const st = store(), b = st[tk] && typeof st[tk] === 'object' ? st[tk] : null;
      const better = !b || misses < b.m || (misses === b.m && t < b.t);
      if (better) st[tk] = { m: misses, t };
      saveBest(k, pct);
      App.activity(10); App.save();
      box.innerHTML = '<div class="card stack"><h3 style="margin:0">' + (misses ? LANG.quiz.ok : LANG.quiz.great) + ' All ' + n + ' pairs matched</h3>' +
        '<p style="margin:0">' + misses + ' miss' + (misses === 1 ? '' : 'es') + ' · ' + mmss(t) + ' · score ' + pct + '%' + (better && b ? ' · <span class="pill good">New best</span>' : '') + '</p>' +
        (!better ? '<p class="muted small" style="margin:0">' + esc(bestTxt()) + '</p>' : '') +
        '<div class="card pr-list">' + ps.map((p) => '<div class="pr-item">' + pairLine(p) + '</div>').join('') + '</div>' +
        '<div class="row"><button class="btn primary" id="pragain">New round</button><a class="btn" href="#/pairs?tab=quiz">Quiz</a></div></div>';
      box.querySelector('#pragain').onclick = start;
      box.querySelector('#pragain').focus();
    }
    App.keyHandler = null;
    start();
  }

  /* ---------- Quiz ---------- */
  // Three wrong partners for p: other b words of the same type and level (then the same type at any level) that are
  // not a partner of p.a anywhere in the data and differ from each other.
  function others(p, data) {
    const a = plainOf(p.a), partners = new Set(data.filter((x) => plainOf(x.a) === a).map((x) => plainOf(x.b)).concat(data.filter((x) => plainOf(x.b) === a).map((x) => plainOf(x.a))));
    partners.add(a); partners.add(plainOf(p.b));
    const out = [], seen = new Set(partners);
    const take = (list) => { for (const x of list) { if (out.length >= 3) break; const b = plainOf(x.b); if (seen.has(b)) continue; seen.add(b); out.push(x.b); } };
    take(shuffle(data.filter((x) => x !== p && x.type === p.type && x.lv === p.lv)));
    if (out.length < 3) take(shuffle(data.filter((x) => x !== p && x.type === p.type)));
    return out;
  }
  function quiz(box, pool, lv, data) {
    const st = S().settings;
    let n = st.pairsN === 20 ? 20 : 10;
    const k = 'quiz:' + lvKey(lv);
    const paint = () => {
      const miss = missList().map((id) => data.find((p) => p.id === id)).filter(Boolean);
      const b = store()[k];
      box.innerHTML = '<div class="card stack"><div class="row" style="flex-wrap:wrap;gap:8px"><div class="seg pr-seg" role="group" aria-label="Number of questions" data-norj>' + [10, 20].map((x) => '<button type="button" data-pn="' + x + '" aria-pressed="' + (n === x) + '" class="' + (n === x ? 'on' : '') + '">' + x + '</button>').join('') + '</div>' +
        (typeof b === 'number' ? '<span class="pill' + (b >= 80 ? ' good' : '') + '">Best ' + b + '%</span>' : '') + '</div>' +
        '<p class="muted small" style="margin:0">' + pool.length + ' pairs at this level and type. Read the word and the question, choose its partner. Keys 1–4 choose, Enter goes on.</p>' +
        '<div class="row"><button class="btn primary" id="prgo"' + (pool.length < 4 ? ' disabled' : '') + '>Start</button>' + (miss.length ? '<button class="btn" id="prmistakes">Practise my mistakes (' + miss.length + ')</button>' : '') + '</div>' +
        (pool.length < 4 ? '<div class="notice">Not enough pairs here yet; at least 4 are needed. Choose another level or type.</div>' : '') + '</div><div id="prq" style="margin-top:14px"></div>';
      box.querySelectorAll('[data-pn]').forEach((x) => (x.onclick = () => { n = +x.dataset.pn; st.pairsN = n; App.save(); paint(); }));
      const go = box.querySelector('#prgo'); if (go) go.onclick = () => run(pick(pool, n), true);
      const mb = box.querySelector('#prmistakes'); if (mb) mb.onclick = () => run(pick(miss, n), false);
    };
    const run = (items, scored) => {
      const qs = items.map((p) => { const o = others(p, data); return o.length < 3 ? null : { p, opts: shuffle([p.b].concat(o)) }; }).filter(Boolean);
      const qbox = box.querySelector('#prq');
      if (!qs.length) { qbox.innerHTML = '<div class="notice">Not enough pairs of this type to make options yet.</div>'; return; }
      drill(qbox, qs.map(({ p, opts }) => ({
        id: p.id,
        html: '<div class="muted small">' + esc(ASK[p.type]) + '</div><div class="tl pr-q">' + esc(p.a) + '</div><div class="muted">' + esc(p.ea) + ' · ' + esc(TYPE_NAME[p.type]) + ' · ' + esc(p.lv || '') + '</div>',
        opts: opts.map((o) => ({ h: '<span class="tl">' + esc(o) + '</span>', ok: o === p.b, t: o })),
        fb: (ok, ch) => pairLine(p) + '<div class="small">' + esc(reason(p)) + '</div>' +
          (!ok && ch ? '<div class="small muted">Your choice: <span class="tl">' + esc(ch.t) + '</span>' + (() => { const x = data.find((y) => y.b === ch.t); return x ? ' (' + esc(x.eb) + ')' : ''; })() + '</div>' : '') +
          (p.l ? '<div>' + lessonLink(p) + '</div>' : '')
      })), {
        onAnswer: (q, ok) => { noteMiss(q.id, ok); App.recordAnswer(ok); App.save(); },
        onDone: (r, total) => {
          const pct = Math.round((100 * r) / total);
          if (scored) saveBest(k, pct);
          App.activity(10); App.save();
          return '<button class="btn primary" data-act="again">New round</button>' + (missList().length ? '<button class="btn" data-act="miss">Practise my mistakes</button>' : '') + '<a class="btn" href="#/progress">Progress</a>';
        },
        bind: (wrap) => {
          const a = wrap.querySelector('[data-act=again]'); if (a) a.onclick = () => { paint(); run(pick(pool, n), true); };
          const m = wrap.querySelector('[data-act=miss]'); if (m) m.onclick = () => { paint(); run(pick(missList().map((id) => data.find((p) => p.id === id)).filter(Boolean), n), false); };
          if (a) a.focus();
        }
      });
      qbox.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
    paint();
  }

  /* ---------- A small multiple-choice runner (progress bar, feedback with speakers, keys 1-4 and Enter) ---------- */
  // qs: [{ id, html, opts: [{ h, ok }], fb(ok, chosenOpt) → html, play }]; opts.onAnswer(q, ok); opts.onDone(right, n) → buttons html; opts.bind(el).
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
      el.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + '</span><span class="muted small">' + right + ' right</span></div>' +
        '<div class="progress"><i style="width:' + Math.round((100 * i) / qs.length) + '%"></i></div>' + q.html +
        '<div class="opts">' + q.opts.map((x, k) => '<button class="opt" data-k="' + k + '"><span class="pr-k" aria-hidden="true">' + (k + 1) + '</span> ' + x.h + '</button>').join('') + '</div><div data-fb></div></div>';
      el.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
        const ch = q.opts[+b.dataset.k], ok = !!ch.ok;
        if (ok) right++;
        el.querySelectorAll('.opt').forEach((x) => { x.disabled = true; if (q.opts[+x.dataset.k].ok) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
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
