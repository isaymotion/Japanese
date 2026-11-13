/* Grammar drills: the verb and adjective trainer (#/verbs, #/verbs/v/<n>, #/verbs/a/<n>) and the particle guide and
   drill (#/particles). Forms are made by rule in js/conjugate.js from the lists in js/data/verbs.js; the particle
   items are in js/data/particles.js. Best scores go to state.drills. */
(function () {
  const { esc, shuffle, pick, icons } = App;
  const V = App.views, S = () => App.state;
  const VERBS = window.JA_VERBS || [], ADJS = window.JA_ADJ || [], PT = window.JA_PARTICLES || { guide: [], items: [] };
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';
  const GROUP = { ru: ['る-verb', 'Drop る, then add the ending.'], u: ['う-verb', 'The last sound changes row: う → い for ます, → あ for ない; the て-form follows the ending.'], suru: ['する verb', 'Irregular: します, して, しない, できる.'], kuru: ['irregular', 'Irregular: 来《き》ます, 来《き》て, 来《こ》ない.'] };
  const ATYPE = { i: ['い-adjective', 'Change the final い: 〜くない, 〜かった, 〜くて.'], na: ['な-adjective', 'Works like a noun with です; takes な before a noun.'] };
  const best = (k, pct) => { const d = S().drills || (S().drills = {}); d[k] = Math.max(d[k] || 0, pct); App.save(); };
  const formsOf = (it, kind) => (kind === 'a' ? JConj.adj(it.d, it.t) : JConj.verb(it.d, it.g));
  const defsOf = (kind) => (kind === 'a' ? JConj.ADJ_FORMS : JConj.VERB_FORMS);
  // Which forms a drill asks for.
  const SETS = {
    v: [['polite', 'Polite (ます)', ['masu', 'masen', 'mashita', 'masendeshita', 'mashou', 'tai']], ['te', 'て-form', ['te', 'tekudasai', 'teimasu']], ['plain', 'Plain (ない, た)', ['nai', 'ta', 'nakatta', 'dict']], ['more', 'Can, if, passive', ['potential', 'volitional', 'tara', 'ba', 'passive', 'causative']], ['all', 'Everything', null]],
    a: [['basic', 'Present and negative', ['dict', 'neg', 'noun']], ['past', 'Past', ['past', 'pastneg']], ['link', 'Linking and adverb', ['te', 'adv', 'noun']], ['all', 'Everything', null]]
  };

  V.verbs = (el, p, q) => {
    let kind = q.tab === 'adj' ? 'a' : 'v', set = SETS[kind][0][0], mode = 'make', clinOnly = false, lvf = '';
    const LVS = [['', 'All levels'], ['N5', 'N5'], ['N4', 'N4'], ['N3', 'N3'], ['C', 'Clinical set']];
    const list = () => (kind === 'a' ? ADJS : VERBS);
    if (!VERBS.length && !ADJS.length) { el.innerHTML = '<h1>Verb trainer</h1><div class="notice info">The verb list arrives in a later release.</div>'; return; }
    const runDrill = () => {
      const box = el.querySelector('#vq');
      const defs = defsOf(kind), wanted = (SETS[kind].find((x) => x[0] === set) || [])[2];
      const src = list().filter((it) => (!clinOnly || it.clin) && (!lvf || it.lv === lvf));
      if (src.length < 3) { box.innerHTML = '<div class="notice">Not enough words with this filter.</div>'; return; }
      const items = pick(src, Math.min(10, src.length)).map((it) => {
        const f = formsOf(it, kind);
        const keys = defs.map((d) => d[0]).filter((k) => f[k] && (!wanted || wanted.includes(k)) && !(kind === 'v' && k === 'dict' && mode === 'make'));
        const k = keys[Math.floor(Math.random() * keys.length)], def = defs.find((d) => d[0] === k);
        return { it, f, k, def };
      }).filter((x) => x.k);
      if (mode === 'type') return typeDrill(box, items);
      const qs = items.map(({ it, f, k, def }) => {
        const info = kind === 'a' ? ATYPE[it.t] : GROUP[it.g];
        if (mode === 'name') {   // see a form, name it
          const others = shuffle(defs.filter((d) => d[0] !== k && f[d[0]] && JA.plain(f[d[0]]) !== JA.plain(f[k]))).slice(0, 3);
          return { q: f[k], sub: 'Which form of ' + JA.speak(it.d) + ' (' + it.en + ') is this?', say: f[k], tlq: true, opts: [def[1] + (def[2] ? ' (' + def[2] + ')' : '')].concat(others.map((d) => d[1] + (d[2] ? ' (' + d[2] + ')' : ''))), a: 0, exp: info[0] + '. ' + info[1], noRj: true };
        }
        // make the form: wrong answers are the same form made with the other group's rule, then other forms of the same word
        const wrong = [];
        const add = (s) => { if (s && JA.plain(s) !== JA.plain(f[k]) && !wrong.some((w) => JA.plain(w) === JA.plain(s))) wrong.push(s); };
        if (kind === 'v' && (it.g === 'ru' || it.g === 'u')) { const alt = JConj.verb(it.d, it.g === 'ru' ? 'u' : 'ru'); if (alt) add(alt[k]); }
        if (kind === 'a') { const alt = JConj.adj(it.d, it.t === 'i' ? 'na' : 'i'); add(alt[k]); }
        shuffle(defs.map((d) => d[0]).filter((x) => x !== k)).forEach((x) => add(f[x]));
        return { q: it.d, sub: it.en + '. Choose: ' + def[1] + (def[2] ? ' (' + def[2] + ')' : ''), tlq: true, tlo: true, opts: [f[k]].concat(wrong.slice(0, 3)), a: 0, exp: info[0] + '. ' + info[1], sayAfter: f[k] };
      });
      box.innerHTML = '<div id="vqq"></div>';
      App.runQuiz(box.querySelector('#vqq'), qs, { onDone: (r, n) => { App.activity(10); best((kind === 'a' ? 'adj-' : 'verb-') + set, Math.round((100 * r) / n)); } });
    };
    // Type the form: kana, kanji or romaji are all accepted.
    const typeDrill = (box, items) => {
      let i = 0, right = 0;
      const same = (input, target) => { const a = App.flat(input); return !!a && (a === App.flat(target) || App.hira(input) === App.hira(target) || a === App.flat(JA.romaji(target))); };
      const next = () => {
        if (i >= items.length) { App.activity(10); best((kind === 'a' ? 'adj-' : 'verb-') + set + '-type', Math.round((100 * right) / items.length)); box.innerHTML = '<div class="card stack"><h3>' + right + ' / ' + items.length + '</h3><div class="progress"><i style="width:' + Math.round((100 * right) / items.length) + '%"></i></div><div class="row"><button class="btn primary" id="vagain">Try again</button></div></div>'; box.querySelector('#vagain').onclick = runDrill; return; }
        const { it, f, k, def } = items[i], info = kind === 'a' ? ATYPE[it.t] : GROUP[it.g];
        box.innerHTML = '<div class="card stack"><span class="eyebrow">Question ' + (i + 1) + ' of ' + items.length + '</span><div class="drill-q tl">' + esc(it.d) + '</div><div class="muted">' + esc(it.en) + ' · ' + esc(info[0]) + '</div>' +
          '<div>Type the <b>' + esc(def[1]) + '</b>' + (def[2] ? ' (' + esc(def[2]) + ')' : '') + ' in kana or romaji.</div>' +
          '<form class="drill-in" id="vform"><input class="input" id="vin" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Your answer"><button class="btn primary" type="submit">Check</button><button class="btn" type="button" id="vskip">Show answer</button></form><div data-fb></div></div>';
        const inp = box.querySelector('#vin'); setTimeout(() => inp.focus(), 30);
        const finish = (ok) => {
          if (ok) right++;
          App.recordAnswer(ok);
          inp.disabled = true; box.querySelectorAll('#vform button').forEach((b) => (b.disabled = true));
          App.speak(f[k]);
          box.querySelector('[data-fb]').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? LANG.quiz.right : LANG.quiz.wrong) + '</b> <span class="tl">' + esc(f[k]) + '</span><div class="small">' + esc(info[1]) + '</div></div><div class="row" style="margin-top:10px"><button class="btn primary" id="vnext">' + (i + 1 < items.length ? 'Next' : 'See score') + '</button></div>';
          box.querySelector('#vnext').onclick = () => { i++; next(); };
          box.querySelector('#vnext').focus();
        };
        box.querySelector('#vform').onsubmit = (e) => { e.preventDefault(); if (!inp.disabled) finish(same(inp.value, f[k])); };
        box.querySelector('#vskip').onclick = () => finish(false);
      };
      next();
    };
    const draw = () => {
      const L = list();
      const groups = kind === 'a' ? [['i', 'い-adjectives'], ['na', 'な-adjectives']] : [['ru', 'る-verbs (ichidan)'], ['u', 'う-verbs (godan)'], ['suru', 'する verbs'], ['kuru', 'Irregular']];
      el.innerHTML = '<h1>' + (kind === 'a' ? 'Adjective trainer' : 'Verb trainer') + '</h1>' +
        '<p class="muted">' + (kind === 'a' ? 'Japanese adjectives change for negative and past, like verbs. There are two types.' : 'Every form is made by rule from the dictionary form once you know the verb\'s group. Open a verb for its full table, or drill below.') +
        ' Choose a level to shorten the list; the drill uses the same choice. Lessons: ' + (kind === 'a' ? '<a href="#/lessons/i-adjectives">い-adjectives</a>, <a href="#/lessons/na-adjectives">な-adjectives</a>' : '<a href="#/lessons/verb-groups">Verb groups</a>, <a href="#/lessons/te-form">the て-form</a>, <a href="#/lessons/nai-form">the ない-form</a>') + '.</p>' +
        '<div class="seg" role="group" aria-label="Word type" style="margin-bottom:12px">' + [['v', 'Verbs (' + VERBS.length + ')'], ['a', 'Adjectives (' + ADJS.length + ')']].map(([k, t]) => '<button data-kind="' + k + '" class="' + (kind === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
        '<div class="card stack"><b>Drill</b><div class="seg" role="group" aria-label="Forms" style="display:flex;flex-wrap:wrap" data-norj>' + SETS[kind].map(([k, t]) => '<button data-set="' + k + '" class="' + (set === k ? 'on' : '') + '">' + esc(t) + '</button>').join('') + '</div>' +
        '<div class="seg" role="group" aria-label="Drill type" style="display:flex;flex-wrap:wrap">' + [['make', 'Choose the form'], ['name', 'Name the form'], ['type', 'Type the form']].map(([k, t]) => '<button data-mode="' + k + '" class="' + (mode === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
        '<div class="seg" role="group" aria-label="Level" style="display:flex;flex-wrap:wrap">' + LVS.filter(([k]) => !k || L.some((it) => it.lv === k)).map(([k, t]) => '<button data-lv="' + k + '" class="' + (lvf === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
        '<label class="small"><input type="checkbox" id="vclin"' + (clinOnly ? ' checked' : '') + '> Clinical words only</label>' +
        '<div class="row"><button class="btn primary" id="vstart">Start (10 questions)</button></div></div><div id="vq" style="margin-top:12px"></div>' +
        groups.map(([g, title]) => { const items = L.map((it, i) => [it, i]).filter(([it]) => (kind === 'a' ? it.t : it.g) === g && (!lvf || it.lv === lvf)); return items.length ? '<h2 style="margin-top:18px">' + esc(title) + ' <span class="muted small">' + items.length + '</span></h2><div class="card">' + items.map(([it, i]) =>
          '<div class="entry"><div class="w"><a href="#/verbs/' + kind + '/' + i + '">' + esc(it.d) + '</a></div><div class="acts">' + App.sayBtn(it.d) + '</div><div class="d">' + esc(it.en) + ' <span class="muted small">' + esc(it.lv === 'C' ? '' : (it.lv || '') + (it.clin ? ' · ' : '')) + (it.clin ? 'clinical' : '') + '</span></div></div>').join('') + '</div>' : ''; }).join('');
      el.querySelectorAll('[data-kind]').forEach((b) => (b.onclick = () => { kind = b.dataset.kind; set = SETS[kind][0][0]; if (!list().some((it) => it.lv === lvf)) lvf = ''; draw(); }));
      el.querySelectorAll('[data-lv]').forEach((b) => (b.onclick = () => { lvf = b.dataset.lv; draw(); }));
      el.querySelectorAll('[data-set]').forEach((b) => (b.onclick = () => { set = b.dataset.set; el.querySelectorAll('[data-set]').forEach((x) => x.classList.toggle('on', x === b)); }));
      el.querySelectorAll('[data-mode]').forEach((b) => (b.onclick = () => { mode = b.dataset.mode; el.querySelectorAll('[data-mode]').forEach((x) => x.classList.toggle('on', x === b)); }));
      el.querySelector('#vclin').onchange = (e) => { clinOnly = e.target.checked; };
      el.querySelector('#vstart').onclick = () => { runDrill(); const b = el.querySelector('#vq'); b.scrollIntoView({ block: 'start', behavior: 'smooth' }); };
    };
    draw();
  };

  V.verbPage = (el, p) => {
    const kind = p.kind, L = kind === 'a' ? ADJS : VERBS, it = L[+p.i];
    if (!it) { el.innerHTML = '<p>Not found. <a href="#/verbs">Verb trainer</a></p>'; return; }
    const info = kind === 'a' ? ATYPE[it.t] : GROUP[it.g], f = formsOf(it, kind);
    const prev = L[+p.i - 1], next = L[+p.i + 1];
    const d = App.DICT.find((e) => e.ftl === App.flat(it.d) || e.ftl + 'する' === App.flat(it.d));
    el.innerHTML = crumb([[kind === 'a' ? 'Adjective trainer' : 'Verb trainer', '#/verbs' + (kind === 'a' ? '?tab=adj' : '')], [JA.speak(it.d)]]) +
      '<div class="card stack"><div class="spread"><h1 class="tl" style="margin:0">' + esc(it.d) + '</h1>' + App.sayBtn(it.d) + '</div>' +
      '<div class="muted" data-noja>' + esc(JA.compact(JA.kana(it.d))) + ' · ' + esc(JA.romaji(it.d)) + '</div>' +
      '<div style="font-size:1.15rem">' + esc(it.en) + '</div><div class="row"><span class="pill">' + esc(info[0]) + '</span>' + (it.lv && it.lv !== 'C' ? '<span class="pill">' + esc(it.lv) + '</span>' : '') + (it.clin ? '<span class="pill warn">clinical</span>' : '') + (d ? '<a class="pill" href="#/dict/' + d.id + '">Dictionary entry</a>' : '') + '</div>' +
      '<div class="notice info">' + esc(info[1]) + '</div></div>' +
      '<h2 style="margin-top:18px">' + (kind === 'a' ? 'Forms' : 'Conjugation') + '</h2><div class="card">' + App.conjTable(f, defsOf(kind), 2) + '</div>' +
      ((it.ex || []).length ? '<h2 style="margin-top:18px">In a sentence</h2><div class="card pguide" style="display:block">' + it.ex.map(([ja, en]) => '<div class="entry"><div class="w">' + esc(ja) + '</div><div class="acts">' + App.sayBtn(ja) + '</div><div class="d muted">' + esc(en) + '</div></div>').join('') + '</div>' : '') +
      '<div class="spread" style="margin-top:16px">' + (prev ? '<a class="btn" href="#/verbs/' + kind + '/' + (+p.i - 1) + '">← ' + esc(JA.speak(prev.d)) + '</a>' : '<span></span>') + (next ? '<a class="btn" href="#/verbs/' + kind + '/' + (+p.i + 1) + '">' + esc(JA.speak(next.d)) + ' →</a>' : '') + '</div>';
  };

  V.particles = (el, p, q) => {
    if (!PT.items.length) { el.innerHTML = '<h1>Particles</h1><div class="notice info">The particle drill arrives in a later release.</div>'; return; }
    let tab = q.tab === 'guide' ? 'guide' : 'drill', only = q.p || '', lv = '';
    const parts = PT.guide.map((g) => g.p);
    const run = () => {
      const box = el.querySelector('#pq');
      const src = PT.items.filter((it) => (!only || it.a === only) && (!lv || it.lv === lv));
      if (src.length < 3) { box.innerHTML = '<div class="notice">Not enough sentences with this filter.</div>'; return; }
      const qs = pick(src, Math.min(10, src.length)).map((it) => ({
        q: it.s, sub: it.en, tlq: true, tlo: true, opts: [it.a].concat(it.opts.filter((o) => o !== it.a)), a: 0,
        exp: it.why + ' ' + it.s.replace('＿', it.a)
      }));
      box.innerHTML = '<div id="pqq"></div>';
      App.runQuiz(box.querySelector('#pqq'), qs, { onDone: (r, n) => { App.activity(10); best('particles' + (only ? '-' + only : ''), Math.round((100 * r) / n)); } });
    };
    const draw = () => {
      el.innerHTML = '<h1>Particles</h1><p class="muted">Particles are the small words after a noun that show its job in the sentence: topic, subject, object, place, time. They carry most of Japanese grammar. Lessons: <a href="#/lessons/particles-core">core particles</a>, <a href="#/lessons/wa-vs-ga">topic and subject</a>.</p>' +
        '<div class="seg" role="group" aria-label="View" style="margin-bottom:12px">' + [['drill', 'Drill'], ['guide', 'Guide']].map(([k, t]) => '<button data-tab="' + k + '" class="' + (tab === k ? 'on' : '') + '">' + t + '</button>').join('') + '</div>' +
        (tab === 'guide'
          ? '<div class="pguide">' + PT.guide.map((g) => '<details' + (only === g.p ? ' open' : '') + '><summary><b class="tl">' + esc(g.p) + '</b><span>' + esc(g.name) + '</span></summary><ul style="margin:8px 0 0;padding-left:20px">' + g.uses.map((u) => '<li>' + esc(u) + '</li>').join('') + '</ul>' +
            g.ex.map(([ja, en]) => '<div class="ex"><b>' + esc(ja) + '</b><span>' + esc(en) + '</span></div>').join('') +
            '<div class="row" style="margin-top:8px"><a class="btn sm" href="#/particles?p=' + encodeURIComponent(g.p) + '">Drill this particle</a></div></details>').join('') + '</div>'
          : '<div class="card stack"><div class="row" style="flex-wrap:wrap;gap:8px"><label class="small">Particle <select class="input" id="ponly" style="width:auto"><option value="">All</option>' + parts.map((x) => '<option value="' + esc(x) + '"' + (only === x ? ' selected' : '') + '>' + esc(x) + '</option>').join('') + '</select></label>' +
            '<label class="small">Level <select class="input" id="plv" style="width:auto"><option value="">All</option><option' + (lv === 'N5' ? ' selected' : '') + '>N5</option><option' + (lv === 'N4' ? ' selected' : '') + '>N4</option></select></label>' +
            '<button class="btn primary" id="pstart">New set (10 sentences)</button></div></div><div id="pq" style="margin-top:12px"></div>');
      el.querySelectorAll('[data-tab]').forEach((b) => (b.onclick = () => { tab = b.dataset.tab; draw(); }));
      if (tab === 'drill') {
        el.querySelector('#ponly').onchange = (e) => { only = e.target.value; run(); };
        el.querySelector('#plv').onchange = (e) => { lv = e.target.value; run(); };
        el.querySelector('#pstart').onclick = run;
        run();
      }
    };
    draw();
  };
})();
