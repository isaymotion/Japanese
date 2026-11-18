/* Sentence builder (#/build, 0.23.0). Data: no new data: lesson .ex blocks, LESSON_EXTRA[id].more and DICT_EX, by level.
   Best scores: state.done.build['<lv>'] = best % (lv N5 | N4 | N3 | N2 | N1 | all); numbers only (the Progress page, V.progress in js/views.js, shows them under "Practice scores").
   Missed sentences: state.done.build.miss = [sentence ids] (newest last, at most 200); a sentence id is 'b' + a hash of its plain text,
   so it survives data edits that do not change the sentence. Settings: state.settings.buildLv, buildSrc (lesson | word | both),
   buildCount (10 | 20), buildFuri (furigana on the tiles), buildHear (hear the sentence before building).
   Tiles are chunks (App.buildChunks): a word plus the particles, copula and て-form auxiliaries that lean on it; the final 。？！ is fixed
   at the end of the answer line. Exact order = right. The same chunks in another order with the final chunk still last = "Also possible"
   (counted right), except that a chunk that leans on the next one (ends in の, この / その …, a single opening word with 、) must keep its
   neighbour. A hint places the next correct tile; a hinted sentence is not counted right. */
(function () {
  const { esc, shuffle, pick, icons, norm } = App;
  const V = App.views, S = () => App.state;
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'];
  const SRCS = [['lesson', 'Lessons'], ['word', 'Word examples'], ['both', 'Both']];
  const MIN = 4, MAX = 12, MISS_CAP = 200;

  /* ---------- Chunks ---------- */
  const END_RE = /[。？！?!…]+$/;
  const COMMA_RE = /[、，,]+$/;
  // One-word particles and particle compounds that lean on the word before them (compared on the reading).
  const PART = new Set(('は が を に で へ と も の から まで より か ね よ や な わ ぞ さ し けど けれど けれども ので のに ながら ほど など だけ しか ばかり ' +
    'くらい ぐらい ごろ ころ って には では とは にも でも へも とも からは までは までに よね かな かしら のは のが のを ずつ こそ さえ じゃ へと かも とか だけど なので なのに たち').split(' '));
  // Copula and polite endings: always stay with the word before them.
  const COP = new Set('です でした でしょう でしょうか だ だった だろう でございます'.split(' '));
  // After a て-form: auxiliaries (いる, ください, みる, おく, しまう, くれる, もらう, あげる, ある, いく, くる, ほしい, いただく).
  const TE_AUX = /^(い(る|ます|ました|ません|た|ない|なかった|て|れば|なさい)|お(り|る|く|き|い|け)|くださ|くれ|もら|あげ|いただ|み(る|ます|ました|て|たい|よう|ません|た|ない|なかった)$|しま|あり|ある|いき|いく|いった|いこう|くる|きま|きた|こない|ほし)/;
  const TE_MO = /^(いい|よろしい|かまいません|かまわない|だいじょうぶ)/;          // て も いい / かまいません
  const TE_WA = /^(いけ|だめ|なりません|ならない)/;                       // て は いけません
  const NEG = /^(ありません|ない|なかった|ありませんでした)$/;            // じゃ / では / 〜く + ありません, ない
  const MUST = /^(なりません|ならない|いけません|いけない|だめ)$/;         // なければ / なくては + なりません
  const SHIRE = /^しれ/;                                                    // かも しれません
  const kn = (w) => JA.toHira(JA.kana(w)).replace(COMMA_RE, '').replace(/[「」『』]/g, '');
  const isTe = (w) => { const k = kn(w); return k.length >= 2 && /[てで]$/.test(k) && !PART.has(k); };
  const leans = (w, prev, prev2) => {
    const k = kn(w);
    if (!k) return false;
    if (PART.has(k) || COP.has(k)) return true;
    if (!prev) return false;
    const p = kn(prev), p2 = prev2 ? kn(prev2) : '';
    if (COMMA_RE.test(prev)) return false;                     // a comma closes the chunk
    if (isTe(prev) && TE_AUX.test(k)) return true;
    if (p === 'も' && prev2 && isTe(prev2) && TE_MO.test(k)) return true;
    if (p === 'は' && prev2 && isTe(prev2) && TE_WA.test(k)) return true;
    if ((p === 'じゃ' || p === 'では' || /く$/.test(p) || (p === 'は' && (p2 === 'で' || /く$/.test(p2)))) && NEG.test(k)) return true;
    if (/(ければ|くては|くちゃ|ないと)$/.test(p) && MUST.test(k)) return true;
    if (p === 'かも' && SHIRE.test(k)) return true;
    return false;
  };
  // chunks(notation) → { chunks: [notation…], end: '。' } or null (more than one sentence, a blank, or no Japanese).
  const chunks = (s) => {
    s = String(s || '').trim().replace(/\s+/g, ' ');
    if (!s || /＿/.test(s)) return null;
    const m = END_RE.exec(s), end = m ? m[0] : '';
    const body = (m ? s.slice(0, m.index) : s).trim();
    if (!body || /[。？！?!]/.test(body.replace(/「[^「」]*」/g, ''))) return null;
    const words = body.split(' ');
    const out = [];
    let cur = null;
    words.forEach((w, i) => {
      if (cur && leans(w, words[i - 1], words[i - 2])) cur.push(w);
      else { cur = [w]; out.push(cur); }
    });
    return { chunks: out.map((c) => c.join(' ')), end };
  };
  App.buildChunks = chunks;

  /* ---------- Sentences ---------- */
  const deHtml = (h) => { const d = document.createElement('div'); d.innerHTML = h; return d.textContent.trim(); };
  const cleanEn = (en) => { const s = String(en || '').replace(/\s*\([^()]*\)\s*$/, '').trim(); return s || String(en || '').trim(); };
  const hash = (t) => { let h = 5381; for (let i = 0; i < t.length; i++) h = ((h << 5) + h + t.charCodeAt(i)) >>> 0; return 'b' + h.toString(36); };
  let cache = null, cacheKey = '';
  const sentences = () => {
    const L = window.LESSONS || [], X = window.LESSON_EXTRA || {}, E = window.DICT_EX || [];
    const key = L.length + ':' + Object.keys(X).length + ':' + E.length;
    if (cache && key === cacheKey) return cache;
    const out = [], seen = new Set();
    const add = (ja, en, lv, src, link) => {
      try {
        ja = String(ja || '').trim(); en = cleanEn(en);
        if (!ja || !en || !LEVELS.includes(lv) || !JA.hasJa(ja)) return;
        const k = App.flat(ja); if (!k || seen.has(k)) return;
        const c = chunks(ja); if (!c || c.chunks.length < MIN || c.chunks.length > MAX) return;
        if (new Set(c.chunks).size < 2) return;
        seen.add(k);
        out.push({ id: hash(JA.speak(ja)), ja, en, lv, src, link, chunks: c.chunks, end: c.end });
      } catch (e) { /* a broken entry is skipped */ }
    };
    const re = /<div class="ex"><b>([\s\S]*?)<\/b><span>([\s\S]*?)<\/span><\/div>/g;
    const lessonLink = (l) => ['#/lessons/' + l.id, l.title];
    L.forEach((l) => {
      if (!l || !l.id) return;
      let m; re.lastIndex = 0;
      while ((m = re.exec(l.body || ''))) add(deHtml(m[1]), deHtml(m[2]), l.level, 'lesson', lessonLink(l));
      const x = X[l.id];
      if (x && Array.isArray(x.more)) x.more.forEach((p) => Array.isArray(p) && add(p[0], p[1], l.level, 'lesson', lessonLink(l)));
    });
    const byKey = new Map(App.DICT.map((e) => [App.flat(e.tl) + '|' + norm(e.en), e]));
    E.forEach((r) => {
      if (!Array.isArray(r)) return;
      const [k, ja, en] = r, at = String(k).lastIndexOf('|'); if (at < 0) return;
      const e = byKey.get(App.flat(String(k).slice(0, at)) + '|' + norm(String(k).slice(at + 1)));
      if (e) add(ja, en, e.lv, 'word', ['#/dict/' + e.id, e.tl]);
    });
    cacheKey = key;
    return (cache = out);
  };

  /* ---------- Checking ---------- */
  const DET = new Set('この その あの どの こんな そんな あんな どんな 同《おな》じ 大《おお》きな 小《ちい》さな いろんな'.split(' '));
  const leansNext = (c) => { const ws = c.split(' '), last = kn(ws[ws.length - 1]); return last === 'の' || (ws.length === 1 && DET.has(c)) || last === 'な'; };
  // 'right' | 'alt' | 'wrong'. ans and model are arrays of chunk notation strings.
  const judge = (ans, model) => {
    if (ans.length !== model.length) return 'wrong';
    if (ans.every((c, k) => c === model[k])) return 'right';
    const n = model.length;
    if (ans[n - 1] !== model[n - 1]) return 'wrong';
    if ([...ans].sort().join('\n') !== [...model].sort().join('\n')) return 'wrong';
    const m0 = model[0];
    if (m0.split(' ').length === 1 && COMMA_RE.test(m0) && ans[0] !== m0) return 'wrong';
    for (let k = 0; k < n - 1; k++) {
      if (!leansNext(ans[k])) continue;
      let ok = false;
      for (let i = 0; i < n - 1; i++) if (model[i] === ans[k] && model[i + 1] === ans[k + 1]) ok = true;
      if (!ok) return 'wrong';
    }
    return 'alt';
  };
  App.buildJudge = judge;
  App.buildSentences = () => sentences();   // for QA and other pages

  /* ---------- State ---------- */
  const store = () => { const d = S().done; if (!d.build || typeof d.build !== 'object' || Array.isArray(d.build)) d.build = {}; return d.build; };
  const missList = () => { const b = store(); if (!Array.isArray(b.miss)) b.miss = []; return b.miss; };
  const addMiss = (id) => { const m = missList(), i = m.indexOf(id); if (i >= 0) m.splice(i, 1); m.push(id); if (m.length > MISS_CAP) m.splice(0, m.length - MISS_CAP); };
  const dropMiss = (id) => { const m = missList(), i = m.indexOf(id); if (i >= 0) m.splice(i, 1); };
  const seg = (label, items, cur, attr) => '<div class="seg" role="group" aria-label="' + esc(label) + '" data-norj>' + items.map(([k, t]) => '<button type="button" data-' + attr + '="' + esc(k) + '" class="' + (String(cur) === String(k) ? 'on' : '') + '" aria-pressed="' + (String(cur) === String(k)) + '">' + esc(t) + '</button>').join('') + '</div>';

  V.build = (el) => {
    const st = S().settings;
    const src = () => (SRCS.some((x) => x[0] === st.buildSrc) ? st.buildSrc : 'both');
    const bySrc = () => { const s = src(); return sentences().filter((x) => s === 'both' || x.src === s); };
    const levels = () => { const p = bySrc(); return LEVELS.filter((lv) => p.some((x) => x.lv === lv)); };
    const level = () => (levels().includes(st.buildLv) ? st.buildLv : 'all');
    const pool = () => { const lv = level(); return bySrc().filter((x) => lv === 'all' || x.lv === lv); };
    const count = () => (st.buildCount === 20 ? 20 : 10);
    const furi = () => st.buildFuri !== false;
    const hear = () => !!st.buildHear;
    const misses = () => { const ids = new Set(missList()); return sentences().filter((x) => ids.has(x.id)); };

    el.innerHTML = crumb([['Practice', '#/practice'], ['Sentence builder']]) + '<h1>Sentence builder</h1>' +
      '<p class="muted">Read the English, then put the Japanese back together: tap the tiles in order. Each tile is a word with the particles and endings that belong to it. The sentences come from the lessons and the dictionary\'s example sentences.</p>' +
      '<div class="card stack" id="bdset"></div><div id="bd" style="margin-top:14px"></div>';
    const set = el.querySelector('#bdset'), box = el.querySelector('#bd');
    const drawSet = () => {
      const lvs = levels(), lv = level(), n = pool().length, b = store(), nm = misses().length;
      set.innerHTML = (sentences().length
        ? '<div class="bd-ctl">' + seg('Level', [['all', 'All']].concat(lvs.map((x) => [x, x + (typeof b[x] === 'number' ? ' · ' + b[x] + '%' : '')])), lv, 'bl') +
          seg('Source', SRCS, src(), 'bs') + seg('Number of sentences', [[10, '10'], [20, '20']], count(), 'bc') + '</div>' +
          '<div class="bd-ctl"><label class="ho-chk bd-chk"><input type="checkbox" id="bdfuri"' + (furi() ? ' checked' : '') + '> Furigana on the tiles</label>' +
          '<label class="ho-chk bd-chk"><input type="checkbox" id="bdhear"' + (hear() ? ' checked' : '') + '> Hear it first (listening mode)</label></div>' +
          '<p class="muted small" style="margin:0">' + n + ' sentence' + (n === 1 ? '' : 's') + ' at this choice' + (n && n < count() ? '; the round uses all of them' : '') + '.' + (typeof b.all === 'number' && lv === 'all' ? ' Best (all levels): ' + b.all + '%.' : '') + '</p>' +
          '<div class="row" style="flex-wrap:wrap;gap:8px"><button class="btn primary" id="bdgo"' + (n ? '' : ' disabled') + '>Start</button>' +
          (nm ? '<button class="btn" id="bdmiss">Practise my mistakes (' + nm + ')</button>' : '') + '</div>'
        : '<div class="notice">No sentences yet. The builder uses the example sentences of the lessons and the dictionary; they are not loaded.</div>');
      set.querySelectorAll('[data-bl]').forEach((x) => (x.onclick = () => { st.buildLv = x.dataset.bl; App.save(); box.innerHTML = ''; drawSet(); }));
      set.querySelectorAll('[data-bs]').forEach((x) => (x.onclick = () => { st.buildSrc = x.dataset.bs; App.save(); box.innerHTML = ''; drawSet(); }));
      set.querySelectorAll('[data-bc]').forEach((x) => (x.onclick = () => { st.buildCount = +x.dataset.bc; App.save(); drawSet(); }));
      const f = set.querySelector('#bdfuri'); if (f) f.onchange = () => { st.buildFuri = f.checked; App.save(); if (App._bdRepaint) App._bdRepaint(); };
      const h = set.querySelector('#bdhear'); if (h) h.onchange = () => { st.buildHear = h.checked; App.save(); };
      const g = set.querySelector('#bdgo'); if (g) g.onclick = () => run(pick(pool(), count()), level());
      const mm = set.querySelector('#bdmiss'); if (mm) mm.onclick = () => run(pick(misses(), count()), null);
    };

    // One round. key: the level key for the best score, or null for a mistakes round (no score kept).
    const run = (items, key) => {
      if (!items.length) return;
      let i = 0, right = 0;
      const one = () => {
        App.keyHandler = null;
        if (i >= items.length) {
          const pct = Math.round((100 * right) / items.length), b = store();
          if (key) b[key] = Math.max(pct, typeof b[key] === 'number' ? b[key] : 0);
          App.activity(10); App.save();
          box.innerHTML = '<div class="card stack"><h3>' + right + ' / ' + items.length + ' sentences right</h3><div class="progress"><i style="width:' + pct + '%"></i></div>' +
            (key ? '<p class="muted small" style="margin:0">Best at ' + esc(key === 'all' ? 'all levels' : key) + ': ' + b[key] + '%.</p>' : '<p class="muted small" style="margin:0">Mistakes round. Sentences you build right leave the list.</p>') +
            '<div class="row"><button class="btn primary" id="bdagain">New round</button>' + (missList().length ? '<button class="btn" id="bdmiss2">Practise my mistakes</button>' : '') + '</div></div>';
          box.querySelector('#bdagain').onclick = () => (key ? run(pick(pool(), count()), level()) : run(pick(misses(), count()), null));
          const m2 = box.querySelector('#bdmiss2'); if (m2) m2.onclick = () => run(pick(misses(), count()), null);
          box.querySelector('#bdagain').focus();
          drawSet();
          return;
        }
        const s = items[i], n = s.chunks.length, listen = hear();
        // tiles: { c, used }; the tray order is a shuffle that is never the answer itself
        let order = shuffle(s.chunks.map((c, k) => k));
        for (let t = 0; t < 20 && order.every((k, j) => s.chunks[k] === s.chunks[j]); t++) order = shuffle(order);
        const tiles = order.map((k) => ({ c: s.chunks[k], used: false }));
        const built = [];
        let checked = false, hinted = false, enShown = !listen;
        const tileText = (c) => (furi() ? esc(c) : esc(JA.speak(c)));
        box.innerHTML = '<div class="card stack" data-bid="' + esc(s.id) + '"><div class="spread"><span class="eyebrow">Sentence ' + (i + 1) + ' of ' + items.length + '</span><span class="small muted">' + esc(s.lv) + ' · ' + n + ' tiles</span></div>' +
          '<div class="progress"><i style="width:' + Math.round((100 * i) / items.length) + '%"></i></div>' +
          (listen ? '<div class="listen-q"><button class="btn primary" id="bdplay">' + icons.sound + ' Play again</button><span class="muted small">Listen, then build what you heard.</span></div>' : '') +
          '<div class="bd-en" id="bden">' + (enShown ? esc(s.en) : '<button class="btn sm ghost" id="bdshow">Show the English</button>') + '</div>' +
          '<div class="bd-line" id="bdline" aria-live="polite" data-norj></div>' +
          '<div class="bd-tray" id="bdtray" data-norj></div>' +
          '<div class="row" style="flex-wrap:wrap;gap:8px"><button class="btn primary" id="bdcheck" disabled>Check</button><button class="btn sm" id="bdhint">Hint</button><button class="btn sm ghost" id="bdclear">Clear</button></div>' +
          '<div id="bdfb"></div></div>';
        const $ = (q) => box.querySelector(q);
        const paint = () => {
          if (!$('#bdline')) return;
          $('#bdline').innerHTML = (built.length
            ? built.map((t, k) => '<button type="button" class="bd-tile in" data-b="' + k + '"' + (checked ? ' disabled' : '') + ' aria-label="Send back: ' + esc(JA.speak(tiles[t].c)) + '">' + tileText(tiles[t].c) + '</button>').join('')
            : '<span class="muted small bd-ph">Tap the tiles below in order.</span>') + (s.end ? '<span class="bd-end" aria-hidden="true">' + esc(s.end) + '</span>' : '');
          $('#bdtray').innerHTML = tiles.map((t, k) => (t.used ? '' : '<button type="button" class="bd-tile" data-t="' + k + '"' + (checked ? ' disabled' : '') + '>' + tileText(t.c) + '</button>')).join('');
          box.querySelectorAll('[data-t]').forEach((b) => (b.onclick = () => { const k = +b.dataset.t; if (checked || tiles[k].used) return; tiles[k].used = true; built.push(k); paint(); }));
          box.querySelectorAll('[data-b]').forEach((b) => (b.onclick = () => { if (checked) return; const k = +b.dataset.b; tiles[built[k]].used = false; built.splice(k, 1); paint(); }));
          $('#bdcheck').disabled = checked || built.length !== n;
          $('#bdhint').disabled = checked; $('#bdclear').disabled = checked || !built.length;
        };
        App._bdRepaint = paint;
        const play = () => App.speak(s.ja);
        if (listen) { $('#bdplay').onclick = play; setTimeout(() => { if ($('#bdplay')) play(); }, 150); }
        const showEn = () => { enShown = true; $('#bden').innerHTML = esc(s.en); };
        if ($('#bdshow')) $('#bdshow').onclick = showEn;
        $('#bdclear').onclick = () => { if (checked) return; built.length = 0; tiles.forEach((t) => (t.used = false)); paint(); };
        $('#bdhint').onclick = () => {
          if (checked) return;
          let k = 0; while (k < built.length && tiles[built[k]].c === s.chunks[k]) k++;
          built.splice(k).forEach((t) => (tiles[t].used = false));
          if (k < n) { const t = tiles.findIndex((x) => !x.used && x.c === s.chunks[k]); if (t >= 0) { tiles[t].used = true; built.push(t); hinted = true; } }
          paint();
        };
        $('#bdcheck').onclick = () => {
          if (checked || built.length !== n) return;
          checked = true;
          const ans = built.map((t) => tiles[t].c), v = judge(ans, s.chunks), ok = v !== 'wrong' && !hinted;
          if (ok) { right++; dropMiss(s.id); } else addMiss(s.id);
          App.save();
          if (!enShown) showEn();
          paint();
          const marks = ans.map((c, k) => c === s.chunks[k]);
          if (v === 'wrong') box.querySelectorAll('#bdline .bd-tile').forEach((b, k) => b.classList.add(marks[k] ? 'ok' : 'no'));
          else box.querySelectorAll('#bdline .bd-tile').forEach((b) => b.classList.add(v === 'right' ? 'ok' : 'alt'));
          const head = v === 'right' ? (hinted ? '<b>Right, with a hint.</b> A hinted sentence is not counted.' : '<b>' + esc(LANG.quiz.right) + '</b>')
            : v === 'alt' ? '<b>Also possible in Japanese; the lesson\'s order is:</b>' + (hinted ? ' (with a hint: not counted)' : '')
            : '<b>' + esc(LANG.quiz.wrong) + '</b> The lesson\'s order is:';
          const link = s.link ? '<a class="small" href="' + esc(s.link[0]) + '">' + (s.src === 'word' ? 'Word: ' : 'Lesson: ') + esc(s.link[1]) + '</a>' : '';
          $('#bdfb').innerHTML = '<div class="feedback ' + (v === 'right' && !hinted ? 'ok' : v === 'wrong' ? 'no' : 'mid') + ' stack bd-fb">' + head +
            '<div class="bd-model"><span class="tl">' + esc(s.ja) + '</span> ' + App.sayBtn(s.ja) + '</div>' +
            '<div>' + esc(s.en) + '</div>' + link + '</div>' +
            '<div class="row" style="margin-top:10px"><button class="btn primary" id="bdnext">' + (i + 1 < items.length ? 'Next' : 'See score') + '</button></div>';
          $('#bdnext').onclick = () => { i++; one(); };
          $('#bdnext').focus();
        };
        App.keyHandler = (e) => {
          if (e.target.matches('input,textarea,select')) return;
          if (e.key === 'Enter' && !e.target.matches('button,a')) {
            const b = checked ? $('#bdnext') : $('#bdcheck');
            if (b && !b.disabled) { e.preventDefault(); b.click(); }
          }
        };
        paint();
      };
      one();
    };
    App.onLeave = () => { App._bdRepaint = null; };
    drawSet();
  };
})();
