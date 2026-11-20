/* Immersion (#/immersion, 1.1.0). Data: window.IMMERSION (immersion/sources.js; shape in the 1.1 plan). Language-neutral:
   every language-specific text lives in the data file, except the language name (LANG.name) and the default look-up site.
   Tabs (?tab=watch | listen | read | captions | mine): watch / listen / read list the sources of the groups on that tab,
   filtered by level (state.settings.immLv; a source shows when its lv range includes the level) and by group (module
   scope); captions shows the device caption guide; mine lists starred sources (state.immersion.fav, saved with App.save, so
   the backup covers it) and is shown only when something is starred. Above the tabs on every tab: a look-up box over the
   app dictionary (App.searchDict), with Jisho.org when nothing is found; the typed term survives tab changes.
   In-app playback: a YouTube source with `yt` gets "Play here", which only then creates ONE youtube-nocookie iframe
   (captions on, language state.settings.immCc); another Play replaces it, Close and any route change remove it.
   No speaker buttons on this page (no recorded clips exist for these names). */
(function () {
  const { esc, icons } = App;
  const V = App.views, S = () => App.state;
  const LN = (window.LANG && LANG.name) || 'Japanese';
  const LV = ['Starter', 'N5', 'N4', 'N3', 'N2', 'N1', 'Native'];
  const LV_SEG = ['All', 'Starter', 'N5', 'N4', 'N3', 'N2', 'N1'];
  const LIST_TABS = [['watch', 'Watch'], ['listen', 'Listen'], ['read', 'Read']];
  const KIND = { youtube: 'YouTube', podcast: 'Podcast', radio: 'Radio', news: 'News', reader: 'Graded reader', site: 'Website', video: 'Video' };
  const KIND_TAB = { youtube: 'watch', video: 'watch', podcast: 'listen', radio: 'listen' };
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const YT = 'https://www.youtube-nocookie.com/embed/';
  const NEWTAB = '<span class="sr-only"> (opens in a new tab)</span>';
  const ext = (url, cls, label) => '<a class="' + cls + '" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + label + NEWTAB + '</a>';
  const crumb = (items) => '<div class="breadcrumb">' + items.map(([t, h]) => (h ? '<a href="' + h + '">' + esc(t) + '</a>' : esc(t))).join(' / ') + '</div>';

  /* ---------- Data (everything is read through these, so a replaced file in the same shape drives the page) ---------- */
  const D = () => (window.IMMERSION && typeof window.IMMERSION === 'object' ? window.IMMERSION : {});
  const arr = (k) => (Array.isArray(D()[k]) ? D()[k] : []);
  const groups = () => arr('groups').filter((g) => g && g.id && LIST_TABS.some((t) => t[0] === g.tab));
  const sources = () => arr('sources').filter((x) => x && x.id && x.title && /^https:\/\//i.test(x.url || ''));
  const captions = () => arr('captions').filter((c) => c && c.title);
  const tips = () => arr('tips').filter((t) => t && t.lv && t.text);
  const groupOf = (x) => groups().find((g) => g.id === x.g) || null;
  const tabOf = (x) => { const g = groupOf(x); return g ? g.tab : KIND_TAB[x.kind] || 'read'; };
  const ccCode = () => (typeof D().lang === 'string' && /^[a-z]{2,3}$/.test(D().lang) ? D().lang : 'ja');
  const lookSite = () => { const l = D().lookup; return l && l.label && /^https:\/\//i.test(l.url || '') ? l : { label: 'Jisho.org', url: 'https://jisho.org/search/' }; };

  const lvIdx = (v) => LV.indexOf(v);
  const range = (x) => { const a = Array.isArray(x.lv) ? x.lv : []; const lo = lvIdx(a[0]), hi = lvIdx(a[1] || a[0]); return lo < 0 ? null : [lo, hi < lo ? lo : hi]; };
  const atLevel = (x, lv) => { if (lv === 'All') return true; const r = range(x); return !r || (lvIdx(lv) >= r[0] && lvIdx(lv) <= r[1]); };
  const lvText = (x) => { const r = range(x); return !r ? '' : r[0] === r[1] ? LV[r[0]] : LV[r[0]] + '–' + LV[r[1]]; };
  const ccText = (cc) => ({ ja: LN + ' captions', 'ja+en': LN + ' and English captions', auto: 'Automatic captions', none: 'No captions' })[cc] || '';
  const checkedText = () => { const m = /^(\d{4})-(\d{2})$/.exec(String(D().checked || '')); return m && +m[2] >= 1 && +m[2] <= 12 ? MONTHS[+m[2] - 1] + ' ' + m[1] : String(D().checked || ''); };

  /* ---------- Saved state ---------- */
  const store = () => { const s = S(); if (!s.immersion || typeof s.immersion !== 'object') s.immersion = {}; if (!Array.isArray(s.immersion.fav)) s.immersion.fav = []; return s.immersion; };
  const favIds = () => { const ids = new Set(sources().map((x) => x.id)); return store().fav.filter((id) => ids.has(id)); };
  const isFav = (id) => store().fav.includes(id);
  const ccPref = () => (S().settings.immCc === ccCode() ? ccCode() : 'en');
  const level = () => (LV_SEG.includes(S().settings.immLv) ? S().settings.immLv : 'All');
  const online = () => navigator.onLine !== false;

  /* ---------- Module scope: kept across tab changes (the page is redrawn on every hash change) ---------- */
  let lookTerm = '', lookOpen = true, lookTimer = 0, cur = null;
  const grpSel = {};

  /* ---------- Player ---------- */
  const ytUrl = (x) => {
    const y = x.yt && typeof x.yt === 'object' ? x.yt : {}, tail = 'cc_load_policy=1&cc_lang_pref=' + ccPref() + '&hl=' + ccPref() + '&rel=0&playsinline=1';
    if (typeof y.v === 'string' && /^[\w-]{6,20}$/.test(y.v)) return YT + y.v + '?' + tail;
    if (typeof y.list === 'string' && /^[\w-]{6,64}$/.test(y.list)) return YT.slice(0, -1) + '?listType=playlist&list=' + y.list + '&' + tail;   // the documented playlist form; a channel's uploads list is UU…
    return '';
  };
  const canPlay = (x) => x.kind === 'youtube' && !!ytUrl(x);
  function closePlayer() {
    document.querySelectorAll('.imm-player').forEach((p) => { const f = p.querySelector('iframe'); if (f) f.src = 'about:blank'; p.remove(); });
    document.querySelectorAll('[data-play][aria-expanded="true"]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
  }
  function openPlayer(card, x, btn) {
    closePlayer();
    const slot = card.querySelector('.imm-slot'), url = ytUrl(x);
    if (!slot || !url) return;
    slot.innerHTML = '<div class="imm-player"><div class="imm-frame"><iframe src="' + esc(url) + '" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin" title="' + esc(x.title + ' on YouTube') + '"></iframe></div>' +
      '<div class="imm-pbar"><p class="small muted" style="margin:0">No captions? Tap CC on the player, or open the gear → Subtitles → Auto-translate → English. Not every video has captions. <a href="#/immersion?tab=captions">More caption tools</a></p>' +
      '<button type="button" class="btn" data-close>Close</button></div></div>';
    if (btn) btn.setAttribute('aria-expanded', 'true');
    slot.querySelector('[data-close]').onclick = () => { closePlayer(); if (btn && btn.isConnected) btn.focus(); };
  }
  // Leaving the page (or changing tab) removes the iframe so the sound stops.
  window.addEventListener('hashchange', closePlayer);

  /* ---------- One source ---------- */
  function card(x, showPlay) {
    const g = groupOf(x), lt = lvText(x), cc = ccText(x.cc), fav = isFav(x.id);
    const pills = [lt ? '<span class="pill lv">' + esc(lt) + '</span>' : '', KIND[x.kind] ? '<span class="pill">' + esc(KIND[x.kind]) + '</span>' : '',
      cc ? '<span class="pill">' + esc(cc) + '</span>' : '', x.geo ? '<span class="pill warn">' + esc(x.geo) + '</span>' : '',
      x.clin ? '<span class="pill good">Clinical</span>' : '', x.cost === 'free+paid' ? '<span class="pill">Free, some parts paid</span>' : ''].filter(Boolean).join('');
    return '<article class="card imm-src" data-src="' + esc(x.id) + '">' +
      '<div class="imm-top"><div class="imm-names"><h3 class="imm-t">' + esc(x.title) + '</h3>' + (x.ja ? '<div class="tl imm-ja" data-norj>' + esc(x.ja) + '</div>' : '') +
      (cur && cur.tab === 'mine' && g ? '<div class="small muted">' + esc(g.title) + '</div>' : '') + '</div>' +
      '<button type="button" class="imm-star' + (fav ? ' on' : '') + '" data-star="' + esc(x.id) + '" aria-pressed="' + fav + '" aria-label="' + esc('Star ' + x.title) + '" title="' + (fav ? 'Starred' : 'Star') + '">' + (fav ? icons.starOn : icons.star) + '</button></div>' +
      (pills ? '<div class="imm-pills">' + pills + '</div>' : '') +
      (x.en ? '<p class="imm-en">' + esc(x.en) + '</p>' : '') +
      (x.tip ? '<p class="small imm-tip"><b>Tip:</b> ' + esc(x.tip) + '</p>' : '') +
      '<div class="row imm-acts">' + (showPlay && canPlay(x) ? '<button type="button" class="btn primary" data-play="' + esc(x.id) + '" aria-expanded="false">' + (icons.play || icons.sound) + ' Play here</button>' : '') +
      ext(x.url, 'btn', x.kind === 'youtube' ? 'Open on YouTube' : 'Open') + '</div><div class="imm-slot"></div></article>';
  }

  /* ---------- Page ---------- */
  V.immersion = (el, prm, q) => {
    q = q || {};
    closePlayer();
    App.onLeave = closePlayer;
    const capList = captions();
    const tab = ['watch', 'listen', 'read', 'captions', 'mine'].includes(q.tab) ? q.tab : 'watch';
    cur = { el, tab };
    const email = (window.APP_META || {}).email;
    el.innerHTML = crumb([['Practice', '#/practice'], ['Immersion']]) + '<div id="imm-root"><h1>Immersion</h1>' +
      '<p class="muted">Real ' + esc(LN) + ' from video, radio, podcasts and easy reading, sorted by level. Star the ones you use and they collect under Mine.</p>' +
      '<p class="small muted imm-net">These links open other sites and need internet. “Play here” loads the video from YouTube, which then follows YouTube’s own privacy rules.</p>' +
      '<details class="card imm-look"' + (lookOpen ? ' open' : '') + '><summary><b>Look up a word you hear</b></summary>' +
      '<p class="small muted" style="margin:8px 0">Heard a word? Type it as it sounds.</p>' +
      '<label class="sr-only" for="immq">Look up a word</label><input id="immq" class="input" type="search" placeholder="Type kana, kanji, romaji or English" autocomplete="off" autocapitalize="off" spellcheck="false" value="' + esc(lookTerm) + '">' +
      '<div id="immres" aria-live="polite"></div></details>' +
      '<div class="seg imm-seg imm-tabs" role="group" aria-label="Section" data-norj></div>' +
      '<div id="immbody"></div>' +
      '<p class="small muted imm-foot">' + (D().checked ? 'Links checked: ' + esc(checkedText()) + '. ' : '') +
      (email ? 'Found a dead link? <a href="mailto:' + esc(email) + '?subject=' + encodeURIComponent(((window.APP_META || {}).name || 'App') + ': dead link on the Immersion page') + '">Tell Dr. Navarro</a>.' : '') + '</p></div>';

    const root = el.querySelector('#imm-root');
    const mine = () => el.querySelector('#imm-root') === root;   // #view is shared by every page: act only while this markup is there

    /* Tabs (counts from the data; Mine only when something is starred) */
    const paintTabs = () => {
      const n = favIds().length, all = sources();
      const list = LIST_TABS.map(([k, t]) => [k, t + ' (' + all.filter((x) => tabOf(x) === k).length + ')'])
        .concat(capList.length || tab === 'captions' ? [['captions', 'Captions']] : [], n || tab === 'mine' ? [['mine', 'Mine (' + n + ')']] : []);
      root.querySelector('.imm-tabs').innerHTML = list.map(([k, t]) => '<a role="button" href="#/immersion?tab=' + k + '" class="' + (tab === k ? 'on' : '') + '"' + (tab === k ? ' aria-current="page"' : '') + '>' + esc(t) + '</a>').join('');
    };

    /* Look-up box */
    const res = root.querySelector('#immres'), inp = root.querySelector('#immq');
    const paintLook = () => {
      const v = lookTerm.trim();
      if (!v) { res.innerHTML = ''; return; }
      const hits = App.searchDict(v).slice(0, 8);
      const site = lookSite();
      res.innerHTML = hits.length
        ? '<ul class="imm-hits" data-norj>' + hits.map((r) => '<li><a class="imm-hit" href="#/dict/' + esc(r.e.id) + '"><span class="tl imm-hw">' + esc(r.e.tl) + '</span><span class="imm-gl">' + esc(r.e.en) + '</span>' + (r.e.lv ? '<span class="pill lv">' + esc(r.e.lv === 'C' ? 'Clinical' : r.e.lv) + '</span>' : '') + '</a></li>').join('') + '</ul>'
        : '<div class="imm-none"><p style="margin:0 0 8px">Nothing in this app’s dictionary for “' + esc(v) + '”.</p>' + ext(site.url + encodeURIComponent(v), 'btn', 'Search ' + esc(site.label)) + '</div>';
    };
    inp.addEventListener('input', () => {
      lookTerm = inp.value;
      clearTimeout(lookTimer);
      lookTimer = setTimeout(() => { if (mine() && inp.isConnected) paintLook(); }, 150);
    });
    root.querySelector('.imm-look').addEventListener('toggle', (ev) => { lookOpen = ev.target.open; });
    paintLook();

    /* Body */
    const body = root.querySelector('#immbody');
    const bindCards = (box) => {
      box.querySelectorAll('[data-star]').forEach((b) => (b.onclick = () => {
        if (!mine()) return;
        const st = store(), id = b.dataset.star, at = st.fav.indexOf(id);
        if (at >= 0) st.fav.splice(at, 1); else st.fav.push(id);
        App.save();
        const on = at < 0;
        App.toast(on ? 'Starred. It is under Mine.' : 'Star removed.');
        if (tab === 'mine') { paintTabs(); paintBody(); return; }
        b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); b.title = on ? 'Starred' : 'Star'; b.innerHTML = on ? icons.starOn : icons.star;
        paintTabs();
      }));
      box.querySelectorAll('[data-play]').forEach((b) => (b.onclick = () => {
        if (!mine()) return;
        const x = sources().find((y) => y.id === b.dataset.play), c = b.closest('.imm-src');
        if (x && c) openPlayer(c, x, b);
      }));
    };
    const ccSwitch = () => '<div class="row imm-cc"><span class="small muted" id="immcclbl">Captions in:</span><div class="seg imm-seg" role="group" aria-labelledby="immcclbl" data-norj>' +
      [['en', 'English'], [ccCode(), LN]].map(([k, t]) => '<button type="button" data-cc="' + k + '" aria-pressed="' + (ccPref() === k) + '" class="' + (ccPref() === k ? 'on' : '') + '">' + esc(t) + '</button>').join('') + '</div></div>';
    const offNote = '<div class="notice imm-off" role="status">You are offline. “Play here” comes back when you are online again; the links need internet too.</div>';
    const bindCc = (box) => box.querySelectorAll('[data-cc]').forEach((b) => (b.onclick = () => {
      S().settings.immCc = b.dataset.cc; App.save();
      box.querySelectorAll('[data-cc]').forEach((x) => { const on = x.dataset.cc === ccPref(); x.classList.toggle('on', on); x.setAttribute('aria-pressed', on); });
      const f = body.querySelector('.imm-player iframe'), c = f && f.closest('.imm-src'), x = c && sources().find((y) => y.id === c.dataset.src);
      if (f && x) f.src = ytUrl(x);   // the open video picks up the new caption language
    }));
    const listHTML = (list, showPlay) => list.map((x) => card(x, showPlay)).join('');

    function paintBody() {
      if (!mine()) return;
      closePlayer();
      const on = online();
      if (tab === 'captions') {
        body.innerHTML = '<p>This app cannot translate speech itself. These free tools can: they show captions as people speak, and some translate them into English.</p>' + (D().summary ? '<div class="notice info">' + esc(D().summary) + '</div>' : '') +
          (capList.length ? '<div class="stack">' + capList.map((c) => '<article class="card imm-capcard">' + (c.device ? '<span class="eyebrow">' + esc(c.device) + '</span>' : '') + '<h3 class="imm-t">' + esc(c.title) + '</h3>' +
            (Array.isArray(c.steps) && c.steps.length ? '<ol class="imm-steps">' + c.steps.map((s) => '<li>' + esc(s) + '</li>').join('') + '</ol>' : '') +
            (c.note ? '<p class="small muted" style="margin:0">' + esc(c.note) + '</p>' : '') +
            (c.link && c.link.url && /^https:\/\//i.test(c.link.url) ? '<div class="row" style="margin-top:10px">' + ext(c.link.url, 'btn', esc(c.link.label || 'Official help')) + '</div>' : '') + '</article>').join('') + '</div>'
            : '<div class="notice info">The caption guide arrives with the next data update.</div>');
        return;
      }
      if (tab === 'mine') {
        const ids = favIds(), list = ids.map((id) => sources().find((x) => x.id === id)).filter(Boolean);
        body.innerHTML = list.length
          ? (list.some(canPlay) ? (on ? ccSwitch() : offNote) : '') + '<div class="stack imm-list">' + listHTML(list, on) + '</div>'
          : '<div class="notice info">No starred sources yet. Tap the star on a source to keep it here.</div>';
        bindCards(body); bindCc(body);
        return;
      }
      const lv = level(), all = sources().filter((x) => tabOf(x) === tab), atLv = all.filter((x) => atLevel(x, lv));
      const known = new Set(groups().map((g) => g.id));
      const gs = groups().filter((g) => g.tab === tab).concat(atLv.some((x) => !known.has(x.g)) ? [{ id: '_other', title: 'Other', note: '' }] : []);
      const gOf = (x) => (known.has(x.g) ? x.g : '_other');
      const gShown = gs.filter((g) => atLv.some((x) => gOf(x) === g.id));
      const g = grpSel[tab] && gShown.some((x) => x.id === grpSel[tab]) ? grpSel[tab] : 'all';
      const pool = atLv.filter((x) => g === 'all' || gOf(x) === g);
      const tip = lv !== 'All' && tips().find((t) => t.lv === lv);
      const tabName = LIST_TABS.find((t) => t[0] === tab)[1].toLowerCase();
      body.innerHTML = '<div class="stack imm-filters"><div class="seg imm-seg" role="group" aria-label="Level" data-norj>' + LV_SEG.map((k) => '<button type="button" data-ilv="' + k + '" aria-pressed="' + (lv === k) + '" class="' + (lv === k ? 'on' : '') + '">' + k + '</button>').join('') + '</div>' +
        (gShown.length > 1 || g !== 'all' ? '<label class="small muted" for="immgroup">Group</label><select class="input" id="immgroup"><option value="all">All groups (' + atLv.length + ')</option>' +
          gShown.map((x) => '<option value="' + esc(x.id) + '"' + (x.id === g ? ' selected' : '') + '>' + esc(x.title) + ' (' + atLv.filter((y) => gOf(y) === x.id).length + ')</option>').join('') + '</select>' : '') + '</div>' +
        (tip ? '<div class="notice info imm-tipbox"><b>How to use this at ' + esc(lv) + '</b><p style="margin:4px 0 0">' + esc(tip.text) + '</p></div>' : '') +
        (pool.some(canPlay) ? (on ? ccSwitch() : offNote) : '') +
        (!all.length ? '<div class="notice info">No ' + tabName + ' sources yet. They arrive with the next data update.</div>'
          : !pool.length ? '<div class="notice info">Nothing here at ' + esc(lv) + ' yet. <button type="button" class="btn" data-ilv="All" style="margin-left:6px">Show all levels</button></div>'
          : gs.filter((x) => pool.some((y) => gOf(y) === x.id)).map((x) => '<h2>' + esc(x.title) + '</h2>' + (x.note ? '<p class="muted">' + esc(x.note) + '</p>' : '') +
            '<div class="stack imm-list">' + listHTML(pool.filter((y) => gOf(y) === x.id), on) + '</div>').join(''));
      body.querySelectorAll('[data-ilv]').forEach((b) => (b.onclick = () => { if (!mine()) return; S().settings.immLv = b.dataset.ilv; App.save(); paintBody(); }));
      const sel = body.querySelector('#immgroup');
      if (sel) sel.onchange = () => { if (!mine()) return; grpSel[tab] = sel.value; paintBody(); };
      bindCards(body); bindCc(body);
    }
    cur.repaint = paintBody;
    paintTabs();
    paintBody();
  };
  // Going on or offline swaps the Play buttons and the offline notice.
  const netChange = () => { if (cur && cur.el.querySelector('#imm-root') && cur.repaint) cur.repaint(); };
  window.addEventListener('online', netChange);
  window.addEventListener('offline', netChange);
})();
