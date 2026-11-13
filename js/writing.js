/* Writing practice sheet (#/write): a printable sheet for hiragana, katakana, kanji or any characters typed in.
   Each character gets a numbered model, a picture for every stroke, and rows of squares to trace and to write in.
   Stroke data comes from js/strokes.js (App.strokes.data); printing uses App.printWith, like the handouts.
   Links: #/write?set=h|k (kana), #/write?lv=N5 (kanji level), #/write?c=食飲 (these characters).
   The choices are kept in state.writeSheet. */
(function () {
  const { esc } = App;
  const V = App.views, S = () => App.state;
  const KANJI = App.KANJI || [], BY = App.kanjiBy || {}, LEVELS = App.KANJI_LEVELS || [];
  const ROWS = ((window.KANA || {}).rows || []).filter((r) => r.set !== 'combo');
  const SMALL = { id: 'small', label: 'small kana', set: 'small', h: ['ゃ', 'ゅ', 'ょ', 'っ'] };
  const toKata = (s) => s.replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));
  const KROM = { 'を': 'wo', 'ぢ': 'ji (di)', 'づ': 'zu (du)', 'ゃ': 'small ya', 'ゅ': 'small yu', 'ょ': 'small yo', 'っ': 'small tsu' };
  const MAX = 100;                                   // characters on one sheet
  const SIZES = { l: ['Large', 9], m: ['Medium', 11], s: ['Small', 14] };   // squares in a row
  const GUIDE = '<rect class="ws-g" x="1" y="1" width="107" height="107"/><path class="ws-g ws-gd" d="M54.5,2V107M2,54.5H107"/>';
  const svg = (cls, inner, label) => '<svg class="' + cls + '" viewBox="0 0 109 109"' + (label ? ' role="img" aria-label="' + esc(label) + '"' : ' aria-hidden="true"') + '>' + inner + '</svg>';
  const startOf = (d) => { const m = /^M\s*(-?[\d.]+)[ ,]?(-?[\d.]+)/.exec(d); return m ? [+m[1], +m[2]] : [0, 0]; };

  const defaults = () => ({ src: 'h', rows: ['a'], lv: (LEVELS[0] || [''])[0], groups: null, skipKnown: false, own: '', paper: 'A4', size: 'm', lines: 2, trace: 3, steps: true, info: true });
  const opt = () => { const o = S().writeSheet; return o && typeof o === 'object' ? Object.assign(defaults(), o) : defaults(); };
  const keep = (o) => { S().writeSheet = o; App.save(); };
  const groupsOf = (lv) => { const g = []; KANJI.forEach((x) => { if (x.lv === lv && !g.includes(x.group)) g.push(x.group); }); return g; };
  const learned = (k) => ((S().kanji || {})[k] || 0) >= 3;

  // The characters the current choices ask for, in order, without repeats.
  const chosen = (o) => {
    let list = [];
    if (o.src === 'h' || o.src === 'k') ROWS.concat([SMALL]).filter((r) => o.rows.includes(r.id)).forEach((r) => r.h.forEach((h) => { if (h !== '-') list.push(o.src === 'k' ? toKata(h) : h); }));
    else if (o.src === 'kj') { const gs = o.groups || groupsOf(o.lv).slice(0, 1); list = KANJI.filter((x) => x.lv === o.lv && gs.includes(x.group) && !(o.skipKnown && learned(x.k))).map((x) => x.k); }
    else list = [...(o.own || '')].filter((c) => /\S/.test(c));
    return list.filter((c, i) => list.indexOf(c) === i);
  };
  const title = (o) => {
    if (o.src === 'h' || o.src === 'k') return (o.src === 'k' ? 'Katakana' : 'Hiragana');
    if (o.src === 'kj') return 'Kanji: ' + (o.lv === 'C' ? 'clinical set' : 'JLPT ' + o.lv);
    return 'Writing practice';
  };
  const sub = (o) => (o.src === 'kj' ? (o.groups || groupsOf(o.lv).slice(0, 1)).join(', ') : '');

  // What is printed beside the model: the sound of a kana; the meaning and readings of a kanji.
  const infoOf = (ch) => {
    const x = BY[ch];
    if (x) return '<b>' + esc(x.mean.join(', ')) + '</b>' +
      (x.on.length ? '<span lang="ja">' + esc(x.on.join('・')) + '</span>' : '') +
      (x.kun.length ? '<span lang="ja">' + x.kun.map((r) => esc(r.r) + (r.o ? '<i>' + esc(r.o) + '</i>' : '')).join('、') + '</span>' : '');
    const h = ch.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
    const r = KROM[h] || (window.JA && JA.kanaToRomaji ? JA.kanaToRomaji(h) : '');
    return r ? '<b>' + esc(r) + '</b>' : '';
  };
  const block = (ch, g, o) => {
    const n = g.paths.length, cols = SIZES[o.size][1];
    const model = svg('ws-model', GUIDE + g.paths.map((d) => '<path class="ws-p" d="' + d + '"/>').join('') + g.nums.map((p, i) => '<text class="ws-n" x="' + p[0] + '" y="' + p[1] + '">' + (i + 1) + '</text>').join(''), ch + ', ' + n + (n === 1 ? ' stroke' : ' strokes'));
    const steps = o.steps && n > 1 ? '<div class="ws-steps">' + g.paths.map((d, i) => { const [x, y] = startOf(d);
      return svg('ws-step', GUIDE + g.paths.slice(0, i).map((e) => '<path class="ws-p" d="' + e + '"/>').join('') + '<path class="ws-p ws-cur" d="' + d + '"/><circle class="ws-dot" cx="' + x + '" cy="' + y + '" r="5"/>'); }).join('') + '</div>' : '';
    const ghost = svg('ws-box', GUIDE + g.paths.map((d) => '<path class="ws-p ws-ghost" d="' + d + '"/>').join(''));
    const blank = svg('ws-box', GUIDE);
    let boxes = '';
    for (let i = 0; i < cols * o.lines; i++) boxes += i < Math.min(o.trace, cols) ? ghost : blank;
    return '<section class="ws-char" data-ws="' + esc(ch) + '"><div class="ws-top">' + model +
      '<div class="ws-info"><div class="ws-meta">' + (o.info ? infoOf(ch) : '') + '<span>' + n + (n === 1 ? ' stroke' : ' strokes') + '</span></div>' + steps + '</div></div>' +
      '<div class="ws-grid" style="grid-template-columns:repeat(' + cols + ',1fr)">' + boxes + '</div></section>';
  };

  V.write = (el, p, q) => {
    const o = opt();
    // A link can choose what the sheet starts with.
    if (q.c) { let c = q.c; try { c = decodeURIComponent(q.c); } catch (e) { /* keep as typed */ } o.src = 'own'; o.own = c; }
    else if (q.set === 'h' || q.set === 'k') o.src = q.set;
    else if (q.lv && LEVELS.some(([k]) => k === q.lv)) { if (o.lv !== q.lv) o.groups = null; o.src = 'kj'; o.lv = q.lv; }
    if (o.src === 'kj' && !LEVELS.some(([k]) => k === o.lv)) { o.lv = (LEVELS[0] || [''])[0]; o.groups = null; }
    if (o.src === 'kj' && !KANJI.length) o.src = 'h';
    let token = 0;

    const seg = (name, items, cur) => '<div class="seg" role="group" aria-label="' + esc(name) + '" style="display:flex;flex-wrap:wrap">' + items.map(([k, t]) => '<button type="button" data-ws-set="' + name + '" data-v="' + esc(String(k)) + '" class="' + (String(cur) === String(k) ? 'on' : '') + '">' + esc(t) + '</button>').join('') + '</div>';
    const pickers = () => {
      if (o.src === 'h' || o.src === 'k') return '<div class="spread"><b>Rows</b><span class="row"><button type="button" class="btn sm" data-ws-all="1">All</button><button type="button" class="btn sm" data-ws-all="0">None</button></span></div>' +
        '<div class="kana-rows" data-noja>' + ROWS.concat([SMALL]).map((r) => '<label><input type="checkbox" data-ws-row="' + r.id + '"' + (o.rows.includes(r.id) ? ' checked' : '') + '> <span lang="ja">' + esc(r.h.filter((h) => h !== '-').map((h) => (o.src === 'k' ? toKata(h) : h)).join(' ')) + '</span></label>').join('') + '</div>';
      if (o.src === 'kj') { const gs = o.groups || groupsOf(o.lv).slice(0, 1);
        return seg('lv', LEVELS.map(([k, t]) => [k, k === 'C' ? 'Clinical' : t]), o.lv) +
          '<div class="spread"><b>Groups</b><span class="row"><button type="button" class="btn sm" data-ws-all="1">All</button><button type="button" class="btn sm" data-ws-all="0">None</button></span></div>' +
          '<div class="kana-rows">' + groupsOf(o.lv).map((g) => '<label><input type="checkbox" data-ws-grp="' + esc(g) + '"' + (gs.includes(g) ? ' checked' : '') + '> ' + esc(g) + ' <span class="muted small">' + KANJI.filter((x) => x.lv === o.lv && x.group === g).length + '</span></label>').join('') + '</div>' +
          '<label class="small"><input type="checkbox" data-ws-flag="skipKnown"' + (o.skipKnown ? ' checked' : '') + '> Leave out kanji I have marked as learned</label>'; }
      return '<label class="small" for="wsown">Type or paste the characters to practise (kana, or any kanji in the app)</label><input class="input" id="wsown" lang="ja" data-noja autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" value="' + esc(o.own) + '" placeholder="例: 食飲薬">';
    };
    const controls = () => '<div class="card stack ws-controls"><b>What to practise</b>' +
      seg('src', [['h', 'Hiragana'], ['k', 'Katakana']].concat(KANJI.length ? [['kj', 'Kanji']] : [], [['own', 'Type your own']]), o.src) + pickers() +
      '<b style="margin-top:6px">The sheet</b>' +
      '<div class="ws-opts"><div><span class="small muted">Square size</span>' + seg('size', Object.keys(SIZES).map((k) => [k, SIZES[k][0]]), o.size) + '</div>' +
      '<div><span class="small muted">Rows of squares for each character</span>' + seg('lines', [[1, '1'], [2, '2'], [3, '3'], [4, '4']], o.lines) + '</div>' +
      '<div><span class="small muted">Grey characters to trace</span>' + seg('trace', [[0, 'None'], [1, '1'], [3, '3'], [99, 'A whole row']], o.trace) + '</div>' +
      '<div><span class="small muted">Paper</span>' + seg('paper', [['A4', 'A4'], ['LETTER', 'Letter']], o.paper) + '</div></div>' +
      '<div class="row" style="flex-wrap:wrap;gap:6px 16px"><label class="small"><input type="checkbox" data-ws-flag="steps"' + (o.steps ? ' checked' : '') + '> A picture for every stroke</label>' +
      '<label class="small"><input type="checkbox" data-ws-flag="info"' + (o.info ? ' checked' : '') + '> Sound, meaning and readings</label></div>' +
      '<div class="row" style="flex-wrap:wrap"><button type="button" class="btn primary" id="wsprint">Print or save as PDF</button><span class="small muted" id="wscount" aria-live="polite"></span></div></div>';

    const sheet = () => {
      const my = ++token, paper = el.querySelector('#wspaper'), count = el.querySelector('#wscount'), btn = el.querySelector('#wsprint');
      const all = chosen(o), list = all.slice(0, MAX);
      if (!list.length) { paper.innerHTML = '<p class="muted" style="margin:0">Choose something to practise above and the sheet appears here.</p>'; count.textContent = ''; btn.disabled = true; return; }
      paper.setAttribute('aria-busy', 'true');
      Promise.all(list.map((ch) => (App.strokes && App.strokes.data ? App.strokes.data(ch) : Promise.resolve(null)).catch(() => undefined))).then((data) => {
        if (my !== token || !paper.isConnected) return;
        const failed = data.some((g) => g === undefined), missing = list.filter((ch, i) => data[i] === null), ok = list.filter((ch, i) => data[i]);
        const st = sub(o);
        paper.innerHTML = (ok.length ? '<header class="ws-head"><div><b>' + esc(APP_META.name) + ': ' + esc(title(o)) + '</b>' + (st ? '<span>' + esc(st) + '</span>' : '') + '</div><div class="ws-name">Name <i></i> Date <i></i></div></header>' +
          '<p class="ws-how">Follow the numbers. The dot in each small picture shows where that stroke starts. Trace the grey characters, then write your own.</p>' +
          list.map((ch, i) => (data[i] ? block(ch, data[i], o) : '')).join('') +
          '<footer class="ws-foot">' + esc(APP_META.attribution) + (o.info && ok.some((ch) => BY[ch]) ? ' Meanings and readings are a draft for review.' : '') + ' Stroke order: KanjiVG by Ulrich Apel, CC BY-SA 3.0.</footer>' : '') +
          (failed ? '<div class="notice">The stroke order could not be loaded. Open the app once while online and it will be kept for offline use.</div>' : '') +
          (!ok.length && !failed ? '<p class="muted" style="margin:0">None of these characters has a stroke-order diagram in the app.</p>' : '');
        paper.removeAttribute('aria-busy');
        btn.disabled = !ok.length;
        count.textContent = ok.length + (ok.length === 1 ? ' character' : ' characters') +
          (all.length > MAX ? '. A sheet holds ' + MAX + ' characters: the first ' + MAX + ' of ' + all.length + ' are shown, so choose fewer groups for the rest' : '') +
          (missing.length ? '. No diagram for: ' + missing.join(' ') : '') + '.';
      });
    };
    const draw = () => {
      el.innerHTML = '<h1>Writing practice sheet</h1><p class="muted">Print a sheet to practise writing by hand: the stroke order of each character, grey characters to trace, and empty squares for your own. Writing a character a few times is the surest way to remember it.</p>' +
        controls() + '<div class="ws-paper ws-' + o.size + '" id="wspaper" data-noja></div>';
      sheet();
    };
    el.onclick = (e) => {
      if (!el.querySelector('#wspaper')) return;
      const s = e.target.closest('[data-ws-set]'), all = e.target.closest('[data-ws-all]');
      if (s) { const k = s.dataset.wsSet, v = s.dataset.v;
        if (k === 'lv') { o.lv = v; o.groups = null; } else o[k] = k === 'lines' || k === 'trace' ? +v : v;
        keep(o); draw(); }
      else if (all) { const on = all.dataset.wsAll === '1';
        if (o.src === 'kj') o.groups = on ? groupsOf(o.lv) : []; else o.rows = on ? ROWS.concat([SMALL]).map((r) => r.id) : [];
        keep(o); draw(); }
      else if (e.target.closest('#wsprint')) App.printWith(o.paper, '11mm');
    };
    el.onchange = (e) => {
      const t = e.target;
      if (!t || !t.dataset || !el.querySelector('#wspaper')) return;
      if (t.dataset.wsRow) o.rows = ROWS.concat([SMALL]).map((r) => r.id).filter((id) => (id === t.dataset.wsRow ? t.checked : o.rows.includes(id)));
      else if (t.dataset.wsGrp) { const gs = o.groups || groupsOf(o.lv).slice(0, 1); o.groups = groupsOf(o.lv).filter((g) => (g === t.dataset.wsGrp ? t.checked : gs.includes(g))); }
      else if (t.dataset.wsFlag) o[t.dataset.wsFlag] = t.checked;
      else return;
      keep(o); sheet();
    };
    el.oninput = (e) => { if (e.target && e.target.id === 'wsown') { o.own = e.target.value; keep(o); sheet(); } };
    draw();
  };
})();
