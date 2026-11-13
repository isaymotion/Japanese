/* Stroke-order diagrams for kanji and kana.
   Data: strokes/<set>.js (kana, n5, n4, n3, c), adapted from KanjiVG (CC BY-SA 3.0, see strokes/LICENSE.md) by
   strokes/build-strokes.py. A set is loaded the first time one of its characters is shown.
   STROKES[字] = "path|path|…@x,y x,y …" on a 109 x 109 grid: strokes in writing order, then where each number sits.
   Use: put App.strokes.slot('食') in a page's HTML, then call App.strokes.mount(el). The kana chart (js/kana.js) is
   not changed: a tap on a chart cell is caught here and the diagram opens under that table. */
(function () {
  const { esc } = App;
  const NS = 'http://www.w3.org/2000/svg';
  const isKana = (ch) => /[ぁ-ゖァ-ヺー]/.test(ch);
  const setOf = (ch) => (isKana(ch) ? 'kana' : { N5: 'n5', N4: 'n4', N3: 'n3', C: 'c' }[((App.kanjiBy || {})[ch] || {}).lv] || null);
  const loading = {};
  const load = (set) => loading[set] || (loading[set] = new Promise((ok, fail) => {
    const s = document.createElement('script'); s.src = 'strokes/' + set + '.js';
    s.onload = ok; s.onerror = () => { delete loading[set]; s.remove(); fail(new Error('strokes/' + set)); };
    document.head.appendChild(s);
  }));
  const parse = (raw) => { const [d, n] = raw.split('@'); return { paths: d.split('|'), nums: (n || '').split(' ').map((p) => p.split(',').map(Number)) }; };
  const startOf = (d) => { const m = /^M\s*(-?[\d.]+)[ ,]?(-?[\d.]+)/.exec(d); return m ? [+m[1], +m[2]] : [0, 0]; };
  const GUIDE = '<rect class="so-g" x="1" y="1" width="107" height="107" rx="6"/><path class="so-g so-gd" d="M54.5,3V106M3,54.5H106"/>';
  const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // One small picture for step i: earlier strokes plain, this stroke in the accent colour with a dot where it starts.
  const frame = (g, i) => { const [x, y] = startOf(g.paths[i]);
    return '<button type="button" class="so-step" data-step="' + (i + 1) + '" aria-label="Stroke ' + (i + 1) + '"><svg viewBox="0 0 109 109" aria-hidden="true">' + GUIDE +
      g.paths.slice(0, i).map((d) => '<path class="so-p" d="' + d + '"/>').join('') + '<path class="so-p so-cur" d="' + g.paths[i] + '"/><circle class="so-dot" cx="' + x + '" cy="' + y + '" r="4.5"/></svg><small>' + (i + 1) + '</small></button>'; };

  function build(box, ch, g) {
    const n = g.paths.length;
    let shown = n, token = 0, numbers = true;
    box.innerHTML = '<div class="so-main"><svg class="so-big" viewBox="0 0 109 109" role="img" aria-label="Stroke order of ' + esc(ch) + ', ' + n + (n === 1 ? ' stroke' : ' strokes') + '">' + GUIDE +
      g.paths.map((d) => '<path class="so-ghost" d="' + d + '"/>').join('') + g.paths.map((d) => '<path class="so-p" d="' + d + '"/>').join('') +
      '<circle class="so-dot" r="4" style="display:none"/>' +
      g.nums.map((p, i) => '<text class="so-n" x="' + p[0] + '" y="' + p[1] + '">' + (i + 1) + '</text>').join('') + '</svg>' +
      '<div class="so-side"><div class="so-count" aria-live="polite"></div><div class="row">' +
      '<button type="button" class="btn sm primary" data-so-act="play">Play</button><button type="button" class="btn sm" data-so-act="next">Next stroke</button>' +
      '<button type="button" class="btn sm" data-so-act="nums" aria-pressed="true">Numbers</button></div>' +
      '<p class="small muted so-tip">' + (n === 1 ? 'One stroke. The dot marks where it starts.' : 'Write the strokes in this order. The dot marks where each one starts.') + '</p></div></div>' +
      (n > 1 ? '<div class="so-steps">' + g.paths.map((d, i) => frame(g, i)).join('') + '</div>' : '') +
      '<p class="so-credit small muted">Stroke data: <a href="https://kanjivg.tagaini.net" target="_blank" rel="noopener">KanjiVG</a> by Ulrich Apel, <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener">CC BY-SA 3.0</a>.</p>';
    const svg = box.querySelector('.so-big'), ps = [...svg.querySelectorAll('.so-p')], ns = [...svg.querySelectorAll('.so-n')], dot = svg.querySelector('.so-dot');
    const count = box.querySelector('.so-count'), steps = [...box.querySelectorAll('.so-step')];
    const lens = ps.map((p) => { try { return p.getTotalLength(); } catch (e) { return 100; } });
    // Show the first k strokes complete. cur = the stroke being drawn or just drawn (0 for none).
    const paint = (k, cur) => {
      ps.forEach((p, i) => { p.style.strokeDasharray = ''; p.style.strokeDashoffset = ''; p.style.visibility = i < k ? '' : 'hidden'; p.classList.toggle('so-cur', i + 1 === cur && k < n); });
      ns.forEach((t, i) => { t.style.display = numbers && i < Math.max(k, cur) ? '' : 'none'; t.classList.toggle('so-cur', i + 1 === cur && k < n); });
      steps.forEach((b, i) => b.classList.toggle('on', i + 1 === (cur || (k < n ? k : 0))));
      count.textContent = k >= n && !cur ? n + (n === 1 ? ' stroke' : ' strokes') : 'Stroke ' + (cur || k) + ' of ' + n;
      dot.style.display = 'none';
    };
    const drawOne = (i, my) => new Promise((done) => {
      const p = ps[i], len = lens[i], [x, y] = startOf(g.paths[i]);
      shown = i; paint(i, i + 1);
      dot.setAttribute('cx', x); dot.setAttribute('cy', y); dot.style.display = '';
      p.style.visibility = '';
      if (reduced()) { setTimeout(() => { if (my === token) { shown = i + 1; } done(); }, 450); return; }
      p.style.strokeDasharray = len + ' ' + len; p.style.strokeDashoffset = len;
      const dur = Math.max(280, Math.min(900, len * 7)), t0 = performance.now();
      const tick = (t) => {
        if (my !== token || !box.isConnected) return done();
        const f = Math.min(1, (t - t0) / dur);
        p.style.strokeDashoffset = len * (1 - f);
        if (f < 1) requestAnimationFrame(tick); else { shown = i + 1; p.style.strokeDasharray = ''; p.style.strokeDashoffset = ''; setTimeout(done, 170); }
      };
      requestAnimationFrame(tick);
    });
    const play = async () => {
      const my = ++token;
      for (let i = 0; i < n; i++) { await drawOne(i, my); if (my !== token || !box.isConnected) return; }
      shown = n; paint(n, 0);
    };
    const next = async () => {
      const my = ++token;
      if (shown >= n) shown = 0;
      const i = shown;
      await drawOne(i, my);
      if (my !== token) return;
      shown = i + 1; if (shown >= n) paint(n, 0); else { paint(shown, i + 1); ps[i].classList.add('so-cur'); }
    };
    box.addEventListener('click', (e) => {
      const act = e.target.closest('[data-so-act]'), st = e.target.closest('[data-step]');
      if (act && act.dataset.soAct === 'play') play();
      else if (act && act.dataset.soAct === 'next') next();
      else if (act) { numbers = !numbers; act.setAttribute('aria-pressed', numbers ? 'true' : 'false'); if (shown >= n) { token++; paint(n, 0); } else ns.forEach((t, i) => (t.style.display = numbers && i < shown ? '' : 'none')); }
      else if (st) { token++; shown = +st.dataset.step; if (shown >= n) paint(n, 0); else { paint(shown, shown); ps[shown - 1].classList.add('so-cur'); ns[shown - 1].classList.add('so-cur'); } steps.forEach((b) => b.classList.toggle('on', b === st)); count.textContent = 'Stroke ' + st.dataset.step + ' of ' + n; }
    });
    paint(n, 0);
  }

  const fill = (box) => {
    const ch = box.dataset.so, set = setOf(ch);
    if (!set) { box.closest('[data-so-wrap]') ? box.closest('[data-so-wrap]').remove() : box.remove(); return Promise.resolve(false); }
    box.innerHTML = '<p class="small muted" style="margin:0">Loading the stroke order…</p>';
    return load(set).then(() => {
      const raw = (window.STROKES || {})[ch];
      if (!raw) { box.innerHTML = '<p class="small muted" style="margin:0">There is no stroke-order diagram for this character.</p>'; return false; }
      build(box, ch, parse(raw)); return true;
    }, () => { box.innerHTML = '<p class="small muted" style="margin:0">The stroke order could not be loaded. Open the app once while online and it will be kept for offline use.</p>'; return false; });
  };

  App.strokes = {
    has: (ch) => !!setOf(ch),
    slot: (ch) => (setOf(ch) ? '<div class="so" data-so="' + esc(ch) + '" data-noja></div>' : ''),
    // Heading and card for a page; empty when the character has no diagram.
    section: (ch) => (setOf(ch) ? '<div data-so-wrap><h2 style="margin-top:18px">Stroke order</h2><div class="card">' + App.strokes.slot(ch) + '</div></div>' : ''),
    mount: (root) => Promise.all([...(root || document).querySelectorAll('.so[data-so]:empty')].map(fill))
  };

  /* Kana chart: a tap on a cell (which also says the kana) opens its stroke order under that table. */
  document.addEventListener('click', (e) => {
    const close = e.target.closest('[data-so-close]');
    if (close) { const p = close.closest('.so-kana'); if (p) p.remove(); return; }
    const cell = e.target.closest('.kana-cell[data-say]'), grid = cell && cell.closest('.kana-grid');
    if (!grid) return;
    const kana = cell.dataset.say, chars = [...kana].filter(isKana);
    if (!chars.length) return;
    document.querySelectorAll('.so-kana').forEach((p) => p.remove());
    const panel = document.createElement('div');
    panel.className = 'card so-kana'; panel.setAttribute('data-noja', '');
    const sound = (cell.querySelector('small') || {}).textContent || '';
    panel.innerHTML = '<div class="spread"><b>How to write <span lang="ja" class="so-kk">' + esc(kana) + '</span>' + (sound ? ' (' + esc(sound) + ')' : '') + '</b><button type="button" class="btn sm" data-so-close>Close</button></div>' +
      (chars.length > 1 ? '<p class="small muted" style="margin:0">Two kana: the second is written small, at about half size.</p>' : '') +
      chars.map((c) => App.strokes.slot(c)).join('');
    grid.insertAdjacentElement('afterend', panel);
    App.strokes.mount(panel).then(() => { if (panel.isConnected && panel.scrollIntoView) panel.scrollIntoView({ block: 'nearest', behavior: reduced() ? 'auto' : 'smooth' }); });
  }, true);   // capture phase: the app's own [data-say] listener stops the click before it bubbles here
})();
