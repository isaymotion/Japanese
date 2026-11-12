/* Japanese text support: furigana, romaji and word spacing. Loaded before js/core.js.

   HOW JAPANESE IS WRITTEN IN THE DATA FILES (js/data/*.js)
   1. Furigana: every kanji run is followed by its reading in 《 》:  食《た》べます   日本語《にほんご》   今日《きょう》
      When the base is not pure kanji, mark where it starts with ｜:      ｜3時《さんじ》
   2. Words are separated by ONE ordinary space, particles on their own:  私《わたし》 は 医者《いしゃ》 です。
      The spaces drive the romaji and the optional "space between words" display; they are not spoken.
   3. No romaji in the data. It is generated here from the readings (は へ を as separate words become wa, e, o).

   WHAT THIS FILE DOES
   - JA.plain(s)   text with the readings removed (kanji kept); JA.speak(s) the same with the word spaces removed
   - JA.kana(s)    text with every kanji replaced by its reading; JA.romaji(s) Hepburn-style romaji of that
   - A MutationObserver turns the notation into <ruby> wherever it appears on the page, and adds the romaji line.
     Three settings (Settings page) switch classes on <html>: furigana always / tap / off, romaji on / off,
     word spacing on / off. Nothing is re-rendered when they change.
   Containers marked data-norj get furigana but no romaji (kana quizzes, where romaji is the answer).
   Containers marked data-noja are left alone. */
(function (root) {
  const KANJI = '㐀-䶿一-鿿豈-﫿々〆ヶ';
  const RUBY_SRC = '(?:｜([^《》｜\\s]+)|([' + KANJI + ']+))《([^《》]*)》';
  const rubyRe = () => new RegExp(RUBY_SRC, 'g');
  const JCH = '぀-ヿ㐀-鿿豈-﫿　-〿！-｠￠-￦…‥—―';   // kana, kanji, Japanese punctuation, the ellipsis and dashes
  const UNIT = '(?:｜[^《》｜\\s]+《[^《》]*》|[' + JCH + '])';
  const RUN_SRC = UNIT + '+(?: +' + UNIT + '+)*';
  const HAS_JA = /[぀-ヿ㐀-鿿《]/;
  const HAS_WORD = /[぀-ヿ㐀-鿿]/;

  const plain = (s) => String(s == null ? '' : s).replace(rubyRe(), (m, a, b) => a || b).replace(/｜/g, '');
  const kana = (s) => String(s == null ? '' : s).replace(rubyRe(), (m, a, b, r) => r).replace(/｜/g, '');
  // Remove the word spaces between Japanese characters (spaces next to Latin text stay).
  const J1 = '[' + JCH + ']';
  const compact = (s) => String(s == null ? '' : s).replace(new RegExp('(' + J1 + ') +(?=' + J1 + ')', 'g'), '$1');
  const speak = (s) => compact(plain(s)).replace(/＿+/g, '、');

  /* ---------- Romaji ---------- */
  const H = {};
  const rows = { '': 'あいうえお', k: 'かきくけこ', s: 'さしすせそ', t: 'たちつてと', n: 'なにぬねの', h: 'はひふへほ', m: 'まみむめも', r: 'らりるれろ', g: 'がぎぐげご', z: 'ざじずぜぞ', d: 'だぢづでど', b: 'ばびぶべぼ', p: 'ぱぴぷぺぽ' };
  Object.keys(rows).forEach((c) => [...rows[c]].forEach((ch, i) => (H[ch] = c + 'aiueo'[i])));
  Object.assign(H, { し: 'shi', ち: 'chi', つ: 'tsu', ふ: 'fu', じ: 'ji', ぢ: 'ji', づ: 'zu', や: 'ya', ゆ: 'yu', よ: 'yo', わ: 'wa', を: 'o', ゐ: 'i', ゑ: 'e', ゔ: 'vu',
    ぁ: 'a', ぃ: 'i', ぅ: 'u', ぇ: 'e', ぉ: 'o', ゃ: 'ya', ゅ: 'yu', ょ: 'yo', ゎ: 'wa' });
  const Y = { き: 'ky', ぎ: 'gy', し: 'sh', じ: 'j', ち: 'ch', ぢ: 'j', に: 'ny', ひ: 'hy', び: 'by', ぴ: 'py', み: 'my', り: 'ry' };
  Object.keys(Y).forEach((k) => { H[k + 'ゃ'] = Y[k] + 'a'; H[k + 'ゅ'] = Y[k] + 'u'; H[k + 'ょ'] = Y[k] + 'o'; });
  Object.assign(H, { しぇ: 'she', じぇ: 'je', ちぇ: 'che', ふぁ: 'fa', ふぃ: 'fi', ふぇ: 'fe', ふぉ: 'fo', てぃ: 'ti', でぃ: 'di', とぅ: 'tu', どぅ: 'du', でゅ: 'dyu', てゅ: 'tyu',
    うぃ: 'wi', うぇ: 'we', うぉ: 'wo', ゔぁ: 'va', ゔぃ: 'vi', ゔぇ: 've', ゔぉ: 'vo', つぁ: 'tsa', つぇ: 'tse', つぉ: 'tso', いぇ: 'ye', くぁ: 'kwa', ぐぁ: 'gwa' });
  const PUNCT = { '。': '.', '、': ',', '？': '?', '！': '!', '「': '"', '」': '"', '『': '"', '』': '"', '（': '(', '）': ')', '・': ' ', '：': ':', '；': ';', '〜': '~', '～': '~', '　': ' ', '，': ',', '．': '.', '＿': '_', '…': '…', '‥': '…', '―': '-', '—': '-', '／': '/' };
  const MACRON = { a: 'ā', i: 'ī', u: 'ū', e: 'ē', o: 'ō' };
  const toHira = (s) => s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
  function kanaToRomaji(k) {
    k = toHira(k);
    let out = '', dbl = false;
    for (let i = 0; i < k.length; i++) {
      const two = k.substr(i, 2), ch = k[i];
      let r = null;
      if (H[two]) { r = H[two]; i++; }
      else if (ch === 'っ') { dbl = true; continue; }
      else if (ch === 'ー') { const last = out.slice(-1); if (MACRON[last]) out = out.slice(0, -1) + MACRON[last]; continue; }
      else if (ch === 'ん') {
        const nx = k[i + 1] || '', nr = H[k.substr(i + 1, 2)] || H[nx] || '';
        out += /^[aiueoy]/.test(nr) ? "n'" : 'n'; continue;
      }
      else if (H[ch]) r = H[ch];
      else if (PUNCT[ch] != null) { out += PUNCT[ch]; dbl = false; continue; }
      else { out += ch; dbl = false; continue; }
      if (dbl) { out += r.startsWith('ch') ? 't' : /^[a-z]/.test(r) && !/^[aiueo]/.test(r) ? r[0] : ''; dbl = false; }
      out += r;
    }
    return out;
  }
  // Words that end in the particle は / へ, which is said wa / e.
  const WORDS = { は: 'wa', へ: 'e', を: 'o', では: 'dewa', には: 'niwa', とは: 'towa', のは: 'nowa', へは: 'ewa', からは: 'karawa', までは: 'madewa', よりは: 'yoriwa', だけは: 'dakewa',
    こんにちは: 'konnichiwa', こんばんは: 'konbanwa', それでは: 'soredewa', または: 'matawa', あるいは: 'aruiwa', もしくは: 'moshikuwa', へも: 'emo', への: 'eno', じつは: 'jitsuwa', ときは: 'tokiwa' };
  const EDGE = '[　-〿！-／：-＠［-｀｛-｠…‥—―]';
  function wordRomaji(tok) {
    const m = tok.match(new RegExp('^(' + EDGE + '*)([\\s\\S]*?)(' + EDGE + '*)$')) || [0, '', tok, ''];
    const pre = m[1], core = m[2], post = m[3];
    let r;
    if (Object.prototype.hasOwnProperty.call(WORDS, core)) r = WORDS[core];
    else { const d = core.match(/^では(あり.*|ない.*|なかった.*|なく.*)$/); r = d ? 'dewa ' + kanaToRomaji(d[1]) : kanaToRomaji(core); }
    return kanaToRomaji(pre) + r + kanaToRomaji(post);
  }
  const romaji = (s) => kana(s).trim().split(/\s+/).map(wordRomaji).join(' ').replace(/ +([.,?!])/g, '$1').replace(/" +(.*?) +"/g, '"$1"').trim();

  const JA = { plain, kana, compact, speak, romaji, kanaToRomaji, toHira, hasJa: (s) => HAS_JA.test(String(s || '')), RUBY_SRC, RUN_SRC, KANJI };
  root.JA = JA;
  if (typeof document === 'undefined') return;

  /* ---------- Rendering ---------- */
  const SKIP = 'script,style,textarea,input,select,option,title,ruby,.rj,.ja,[data-noja],[contenteditable]';
  const PLAIN_ONLY = 'option,select,title';
  const BLOCKISH = /[。？！…」]$/;
  function jaSpan(run) {
    const span = document.createElement('span');
    span.className = 'ja'; span.lang = 'ja';
    run.split(/ +/).forEach((tok, i) => {
      if (i) { const sp = document.createElement('span'); sp.className = 'sp'; sp.textContent = ' '; span.appendChild(sp); }
      const w = document.createElement('span'); w.className = 'w';   // one word: kept on one line while word spacing is on
      const re = rubyRe(); let last = 0, m;
      while ((m = re.exec(tok))) {
        if (m.index > last) w.appendChild(document.createTextNode(tok.slice(last, m.index)));
        const rb = document.createElement('ruby'); rb.appendChild(document.createTextNode(m[1] || m[2]));
        const rt = document.createElement('rt'); rt.textContent = m[3]; rb.appendChild(rt);
        w.appendChild(rb); last = m.index + m[0].length;
      }
      if (last < tok.length) w.appendChild(document.createTextNode(tok.slice(last).replace(/\uff5c/g, '')));
      span.appendChild(w);
    });
    return span;
  }
  function processText(node) {
    const text = node.nodeValue;
    if (!text || !HAS_JA.test(text)) return;
    const parent = node.parentElement;
    if (!parent) return;
    if (parent.closest(PLAIN_ONLY)) { const p = compact(plain(text)); if (p !== text) node.nodeValue = p; return; }
    if (parent.closest(SKIP)) return;
    const re = new RegExp(RUN_SRC, 'g');
    const parts = []; let last = 0, m, runs = 0;
    while ((m = re.exec(text))) {
      if (!HAS_WORD.test(m[0])) continue;
      if (m.index > last) parts.push([0, text.slice(last, m.index)]);
      parts.push([1, m[0]]); runs++; last = m.index + m[0].length;
    }
    if (!runs) return;
    if (last < text.length) parts.push([0, text.slice(last)]);
    const pure = runs === 1 && parts.every((p) => p[0] || !p[1].trim());
    const noRj = !!parent.closest('[data-norj]');
    const frag = document.createDocumentFragment();
    parts.forEach(([isJa, s]) => {
      if (!isJa) { frag.appendChild(document.createTextNode(s)); return; }
      frag.appendChild(jaSpan(s));
      if (noRj) return;
      const r = romaji(s);
      if (!r || !/[a-zāīūēō]/i.test(r)) return;
      const rj = document.createElement('span');
      const block = pure && (/ /.test(s.trim()) || BLOCKISH.test(s.trim()));
      rj.className = 'rj ' + (block ? 'rj-b' : 'rj-i'); rj.lang = 'ja-Latn';
      rj.textContent = r;
      frag.appendChild(rj);
    });
    parent.replaceChild(frag, node);
  }
  function processTree(rootNode) {
    if (rootNode.nodeType === 3) { processText(rootNode); return; }
    if (rootNode.nodeType !== 1) return;
    const w = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT);
    const list = []; let n;
    while ((n = w.nextNode())) if (HAS_JA.test(n.nodeValue)) list.push(n);
    list.forEach(processText);
  }
  JA.render = processTree;
  // Text of an element without the furigana and the romaji line (for titles, pins, comparisons).
  JA.textOf = (el) => { const c = el.cloneNode(true); c.querySelectorAll('rt,.rj').forEach((x) => x.remove()); return c.textContent; };

  const obs = new MutationObserver((muts) => {
    for (const mu of muts) {
      if (mu.type === 'characterData') processText(mu.target);
      else mu.addedNodes.forEach(processTree);
    }
  });
  const start = () => { processTree(document.body); obs.observe(document.body, { childList: true, subtree: true, characterData: true }); };
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);

  // Settings → classes on <html>. furigana: 'on' | 'tap' | 'off'; romaji and spacing: true | false.
  JA.apply = (st) => {
    const c = document.documentElement.classList;
    st = st || {};
    c.toggle('furi-off', st.furigana === 'off'); c.toggle('furi-tap', st.furigana === 'tap');
    c.toggle('rj-off', st.romaji === false); c.toggle('sp-off', st.spacing === false);
  };
  // Tap-to-show furigana: tapping a word shows its reading (and hides it again).
  document.addEventListener('click', (e) => {
    if (!document.documentElement.classList.contains('furi-tap')) return;
    const rb = e.target.closest && e.target.closest('ruby');
    if (rb) rb.classList.toggle('show');
  });
})(typeof window !== 'undefined' ? window : globalThis);
