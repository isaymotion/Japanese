/* Kana trainer: hiragana and katakana charts with sound, and a multiple-choice drill a row at a time.
   window.KANA = { rows: [{ id, label, set: 'basic' | 'voiced' | 'combo', h: [hiragana…] }], all: [every kana, both scripts] }
   Progress: state.kana[kana] = number of correct answers (3 or more = learned). Route #/kana (?s=k for katakana, ?tab=drill). */
(function () {
  const { esc, shuffle, pick, icons } = App;
  const V = App.views, S = () => App.state;
  const R = (id, label, set, s) => ({ id, label, set, h: s.split(' ') });
  const ROWS = [
    R('a', 'a i u e o', 'basic', 'あ い う え お'), R('ka', 'k', 'basic', 'か き く け こ'), R('sa', 's', 'basic', 'さ し す せ そ'), R('ta', 't', 'basic', 'た ち つ て と'),
    R('na', 'n', 'basic', 'な に ぬ ね の'), R('ha', 'h', 'basic', 'は ひ ふ へ ほ'), R('ma', 'm', 'basic', 'ま み む め も'), R('ya', 'y', 'basic', 'や - ゆ - よ'),
    R('ra', 'r', 'basic', 'ら り る れ ろ'), R('wa', 'w, n', 'basic', 'わ - - - を'), R('n', 'n', 'basic', 'ん - - - -'),
    R('ga', 'g', 'voiced', 'が ぎ ぐ げ ご'), R('za', 'z', 'voiced', 'ざ じ ず ぜ ぞ'), R('da', 'd', 'voiced', 'だ ぢ づ で ど'), R('ba', 'b', 'voiced', 'ば び ぶ べ ぼ'), R('pa', 'p', 'voiced', 'ぱ ぴ ぷ ぺ ぽ'),
    R('kya', 'ky', 'combo', 'きゃ きゅ きょ'), R('sha', 'sh', 'combo', 'しゃ しゅ しょ'), R('cha', 'ch', 'combo', 'ちゃ ちゅ ちょ'), R('nya', 'ny', 'combo', 'にゃ にゅ にょ'),
    R('hya', 'hy', 'combo', 'ひゃ ひゅ ひょ'), R('mya', 'my', 'combo', 'みゃ みゅ みょ'), R('rya', 'ry', 'combo', 'りゃ りゅ りょ'), R('gya', 'gy', 'combo', 'ぎゃ ぎゅ ぎょ'),
    R('ja', 'j', 'combo', 'じゃ じゅ じょ'), R('bya', 'by', 'combo', 'びゃ びゅ びょ'), R('pya', 'py', 'combo', 'ぴゃ ぴゅ ぴょ')
  ];
  const toKata = (s) => s.replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));
  const kanaOf = (h, script) => (script === 'k' ? toKata(h) : h);
  // Romaji shown in the trainer. を is taught as "wo" (said "o"); ぢ and づ sound like じ and ず.
  const SPECIAL = { 'を': 'wo', 'ぢ': 'ji (di)', 'づ': 'zu (du)' };
  const rom = (h) => SPECIAL[h] || JA.kanaToRomaji(h);
  const cells = (script, sets) => ROWS.filter((r) => !sets || sets.includes(r.id)).reduce((a, r) => a.concat(r.h.filter((x) => x !== '-').map((h) => ({ h, k: kanaOf(h, script), r: rom(h), row: r.id }))), []);
  window.KANA = { rows: ROWS, all: cells('h').map((c) => c.k).concat(cells('k').map((c) => c.k)) };
  const SETS = [['basic', 'Basic 46'], ['voiced', 'Voiced (゛ and ゜)'], ['combo', 'Combinations (small ゃ ゅ ょ)']];
  const learned = (k) => ((S().kana || {})[k] || 0) >= 3;

  V.kana = (el, p, q) => {
    let script = q.s === 'k' ? 'k' : 'h', tab = q.tab === 'drill' ? 'drill' : 'chart';
    let mode = 'k2r', picked = null;
    const name = () => (script === 'k' ? 'Katakana' : 'Hiragana');
    const defaultRows = () => {
      // The first rows not yet learned (two at a time), so the drill grows with the learner.
      const open = ROWS.filter((r) => r.h.some((h) => h !== '-' && !learned(kanaOf(h, script))));
      return (open.length ? open.slice(0, 2) : ROWS.slice(0, 11)).map((r) => r.id);
    };
    const chart = () => SETS.map(([set, title]) => '<h2 style="margin-top:16px">' + esc(title) + '</h2><div class="kana-grid' + (set === 'combo' ? ' k3' : '') + '">' +
      ROWS.filter((r) => r.set === set).map((r) => r.h.map((h) => (h === '-' ? '<span class="kana-cell empty"></span>' :
        '<button type="button" class="kana-cell' + (learned(kanaOf(h, script)) ? ' known' : '') + '" data-say="' + esc(kanaOf(h, script)) + '" aria-label="' + esc(rom(h)) + '"><b>' + esc(kanaOf(h, script)) + '</b><small>' + esc(rom(h)) + '</small></button>')).join('')).join('') + '</div>').join('') +
      '<p class="small muted" style="margin-top:12px">Green cells are kana you have answered correctly three times in the drill. ' + (script === 'h'
        ? 'As particles, は is said <i>wa</i>, へ is said <i>e</i> and を is said <i>o</i>.' : 'Katakana writes loanwords and foreign names; a long vowel is written with ー (コーヒー).') + '</p>';
    const drill = () => {
      if (!picked) picked = defaultRows();
      const rowsHTML = SETS.map(([set, title]) => '<p class="small muted" style="margin:10px 0 6px">' + esc(title) + '</p><div class="kana-rows">' + ROWS.filter((r) => r.set === set).map((r) =>
        '<label><input type="checkbox" data-row="' + r.id + '"' + (picked.includes(r.id) ? ' checked' : '') + '> ' + esc(r.h.filter((x) => x !== '-').map((h) => kanaOf(h, script)).join('')) + '</label>').join('') + '</div>').join('');
      return '<div class="card stack"><div class="spread"><b>Rows to practise</b><span class="row"><button class="btn sm" data-all="1">All</button><button class="btn sm" data-all="0">Next unlearned</button></span></div>' + rowsHTML +
        '<div class="seg" role="group" aria-label="Direction" style="margin-top:8px">' + [['k2r', 'See kana, choose the sound'], ['r2k', 'See the sound, choose kana'], ['hear', 'Hear it, choose kana']].map(([k, t]) => '<button data-mode="' + k + '" class="' + (mode === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
        '<div class="row"><button class="btn primary" id="kstart">Start (10 questions)</button></div></div><div id="kq" style="margin-top:12px"></div>';
    };
    const run = () => {
      const pool = cells(script, picked);
      const box = el.querySelector('#kq');
      if (pool.length < 4) { box.innerHTML = '<div class="notice">Choose rows with at least four kana in total.</div>'; return; }
      const everything = cells(script);
      const qs = pick(pool, Math.min(10, pool.length)).concat(pool.length < 10 ? pick(pool, 10 - pool.length) : []).map((c) => {
        // Distractors: the same row and look-alikes first, never two options with the same sound.
        const cand = shuffle(pool.filter((x) => x.k !== c.k)).concat(shuffle(everything.filter((x) => x.k !== c.k)));
        const d = []; cand.forEach((x) => { if (d.length < 3 && x.r !== c.r && !d.some((y) => y.r === x.r || y.k === x.k)) d.push(x); });
        const toSound = mode === 'k2r';
        return { q: toSound ? c.k : mode === 'hear' ? c.k : c.r, kana: c.k, say: mode === 'hear' ? c.k : null, hideQ: mode === 'hear' ? 'Listen, then choose the kana you heard.' : false, big: mode !== 'hear',
          opts: [toSound ? c.r : c.k].concat(d.map((x) => (toSound ? x.r : x.k))), a: 0, exp: c.k + ' = ' + c.r, tlq: toSound, tlo: !toSound };
      });
      // A small quiz loop of its own (large kana, sound after each answer, per-kana progress).
      let i = 0, right = 0;
      const next = () => {
        if (i >= qs.length) {
          App.activity(10); App.save();
          box.innerHTML = '<div class="card stack"><h3>' + right + ' / ' + qs.length + '</h3><div class="progress"><i style="width:' + Math.round((100 * right) / qs.length) + '%"></i></div><div class="row"><button class="btn primary" id="kagain">Again</button><a class="btn" href="#/kana' + (script === 'k' ? '?s=k' : '') + '">See the chart</a></div></div>';
          box.querySelector('#kagain').onclick = () => { picked = null; draw(); const b = el.querySelector('#kstart'); if (b) b.click(); };
          return;
        }
        const qq = qs[i], order = shuffle(qq.opts.map((o, k) => k));
        box.innerHTML = '<div class="card stack"><div class="spread"><span class="eyebrow">Question ' + (i + 1) + ' of ' + qs.length + '</span>' + (qq.hideQ ? '<button class="btn sm" id="kplay">' + icons.sound + ' Play again</button>' : '') + '</div>' +
          (qq.hideQ ? '<p class="muted" style="margin:0">' + esc(qq.hideQ) + '</p>' : '<div class="kana-big' + (qq.tlq ? ' tl' : '') + '">' + esc(qq.q) + '</div>') +
          '<div class="opts">' + order.map((k) => '<button class="opt' + (qq.tlo ? ' tl' : '') + '" data-k="' + k + '" style="font-size:' + (qq.tlo ? '1.5rem' : '1.1rem') + ';text-align:center">' + esc(qq.opts[k]) + '</button>').join('') + '</div><div data-fb></div></div>';
        if (qq.hideQ) { const play = () => App.speak(qq.kana, { rate: 0.8 }); box.querySelector('#kplay').onclick = play; setTimeout(play, 150); }
        box.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
          const ok = +b.dataset.k === 0;
          if (ok) right++;
          const st = S().kana || (S().kana = {});
          st[qq.kana] = ok ? (st[qq.kana] || 0) + 1 : 0;
          App.recordAnswer(ok);
          box.querySelectorAll('.opt').forEach((x) => { x.disabled = true; if (+x.dataset.k === 0) x.classList.add('right'); });
          if (!ok) b.classList.add('wrong');
          if (!qq.hideQ) App.speak(qq.kana, { rate: 0.8 });
          box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b> <span class="tl" style="font-size:1.2rem">' + esc(qq.kana) + '</span> is <b>' + esc(qq.exp.split(' = ')[1]) + '</b>.</div><div class="row" style="margin-top:10px"><button class="btn primary" id="knext">' + (i + 1 < qs.length ? 'Next' : 'See score') + '</button></div>';
          box.querySelector('#knext').onclick = () => { i++; next(); };
          box.querySelector('#knext').focus();
        }));
      };
      next();
    };
    const draw = () => {
      const n = cells(script).filter((c) => learned(c.k)).length, total = cells(script).length;
      el.innerHTML = '<h1>Kana trainer</h1><p class="muted">Japanese is written with two sound alphabets, hiragana and katakana, plus kanji. Learn hiragana first: tap a kana to hear it, then drill one or two rows at a time. Lesson: <a href="#/lessons/hiragana">Hiragana</a>, <a href="#/lessons/katakana">Katakana</a>.</p>' +
        '<div class="row" style="flex-wrap:wrap;gap:8px"><div class="seg" role="group" aria-label="Script">' + [['h', 'Hiragana'], ['k', 'Katakana']].map(([k, t]) => '<button data-script="' + k + '" class="' + (script === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
        '<div class="seg" role="group" aria-label="View">' + [['chart', 'Chart'], ['drill', 'Drill']].map(([k, t]) => '<button data-tab="' + k + '" class="' + (tab === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
        '<span class="pill ' + (n === total ? 'good' : '') + '">' + name() + ': ' + n + ' / ' + total + ' learned</span></div>' +
        '<div data-norj style="margin-top:8px">' + (tab === 'chart' ? chart() : drill()) + '</div>';
      el.querySelectorAll('[data-script]').forEach((b) => (b.onclick = () => { script = b.dataset.script; picked = null; draw(); }));
      el.querySelectorAll('[data-tab]').forEach((b) => (b.onclick = () => { tab = b.dataset.tab; draw(); }));
      el.querySelectorAll('[data-mode]').forEach((b) => (b.onclick = () => { mode = b.dataset.mode; el.querySelectorAll('[data-mode]').forEach((x) => x.classList.toggle('on', x === b)); }));
      el.querySelectorAll('[data-row]').forEach((c) => (c.onchange = () => { picked = [...el.querySelectorAll('[data-row]:checked')].map((x) => x.dataset.row); }));
      el.querySelectorAll('[data-all]').forEach((b) => (b.onclick = () => { picked = b.dataset.all === '1' ? ROWS.map((r) => r.id) : defaultRows(); draw(); }));
      const st = el.querySelector('#kstart'); if (st) st.onclick = run;
    };
    draw();
  };
})();
