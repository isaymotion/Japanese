import re
s=open('hablemos/js/handout.js',encoding='utf-8').read()
def rep(a,b,n=1):
    global s
    assert s.count(a)==n,(a[:60],s.count(a)); s=s.replace(a,b)
a=s.index("  function cardDoc(m, logo) {"); b=s.index("  /* ---------- HTML preview ---------- */"); s=s[:a]+s[b:]
a=s.index("  /* ---------- PDF (pdfmake) ---------- */"); b=s.index("  V.handout = (el, p, q) => {"); s=s[:a]+"  /* ---------- Page ---------- */\n"+s[b:]
rep("""/* Printable handout generator for the psychiatry track.
   Builds one content model from the options, then renders it two ways:
   an on-screen preview (also used for printing) and a real PDF via pdfmake (loaded on demand, works offline). */""",
"""/* Printable handout generator for the psychiatry track.
   Builds one content model from the options and renders it as an on-screen preview; the same preview is what prints.
   There is no PDF library: the Print button opens the browser's print window, where "Save as PDF" makes the file.
   (A PDF library would need a Japanese font of several megabytes; the browser already has one.)
   Japanese strings are written in the app notation and rendered by js/ja.js, so furigana and romaji follow the
   two switches on this page (classes ho-nofu / ho-norj on the paper), not the app-wide reading aids. */""")
rep("const DEFAULTS = { preset: 'full', english: 'show', register: 'f', notes: true, answers: false,","const DEFAULTS = { preset: 'full', english: 'show', register: 'f', furi: 'show', romaji: 'hide', notes: true, answers: false,")
a=s.index("  function idiomRows() {"); b=s.index("  function build(o) {")
s=s[:a]+"  // \"What is the patient saying?\" items: [Japanese, what it says, what it may mean and what to ask].\n  function idiomRows() { return (window.PSYCH_INTERP || []).map((r) => [r[0], r[1], r[2]]); }\n"+s[b:]
rep("paper: 'LETTER'","paper: 'A4'",5)
rep("hc-foot\">Crisis line ' + CRISIS() + ' · '","hc-foot\">' + esc(CRISIS()) + ' · '")
rep("' · Respectful form' + (o.register === 'c' ? ' replaced by everyday form' : o.register === 'both' ? ' with everyday form in italics' : '')","' · ' + (o.register === 'c' ? 'Plain form' : o.register === 'both' ? 'Polite form (です/ます), with the plain form in italics' : 'Polite form (です/ます)')")
rep("<h2>Idioms of distress</h2><div class=\"ho-tw\"><table><tr><th>Patient says</th>' + (showEn ? '<th>Literally</th>' : '') + '<th>May indicate</th></tr>'","<h2>What the patient may be saying</h2><div class=\"ho-tw\"><table><tr><th>Patient says</th>' + (showEn ? '<th>In English</th>' : '') + '<th>May mean; what to ask</th></tr>'")
rep("<th>Describe (family\\'s words)</th>","<th>Describe (everyday words)</th>")
rep("'<p class=\"muted\">Build a reference sheet for the ward or clinic, then download it as a PDF or print it. Your choices are remembered on this device.</p>'","'<p class=\"muted\">Build a reference sheet for the ward or clinic, then print it or save it as a PDF from the print window. Your choices are remembered on this device.</p>'")
rep("seg('register', [['f', 'Respectful (po)'], ['c', 'Everyday'], ['both', 'Both']])","seg('register', [['f', 'Polite (です/ます)'], ['c', 'Plain'], ['both', 'Both']])")
rep("'<div><div class=\"eyebrow\">Phrases</div>'","'<div><div class=\"eyebrow\">Furigana</div>' + seg('furi', [['show', 'Show'], ['hide', 'Hide']]) + '</div>' +\n        '<div><div class=\"eyebrow\">Romaji</div>' + seg('romaji', [['show', 'Show'], ['hide', 'Hide']]) + '<p class=\"small muted\" style=\"margin:4px 0 0\">Romaji makes the handout about a third longer.</p></div>' +\n        '<div><div class=\"eyebrow\">Phrases</div>'")
rep("chk('idioms', 'Idioms of distress')","chk('idioms', 'What the patient may be saying (32 expressions)')")
rep("placeholder=\"e.g., PGY-1, Dept. of Psychiatry\"","placeholder=\"e.g., First-year residents, Dept. of Psychiatry\"")
rep("""'<div class="row"><button class="btn primary" id="hoPdf">' + icons.book + ' Download PDF</button><button class="btn" id="hoPrint">Print</button><span class="muted small" id="hoStat"></span></div></div>'""",
    """'<div class="row"><button class="btn primary" id="hoPrint">' + icons.book + ' Print or save as PDF</button><span class="muted small">In the print window, choose your printer, or "Save as PDF". Paper size: ' + (o.deescCard ? 'A6' : o.paper === 'LETTER' ? 'Letter' : o.paper) + '.</span></div></div>'""")
rep("""<div class="ho-paper ho-' + (o.deescCard ? 'A6' : o.paper) + ' ho-size-' + o.size + '" id="hoPaper"></div>';""","""<div class="' + paperClass(o) + '" id="hoPaper"></div>';""")
rep("if (b.dataset.seg === 'paper' || b.dataset.seg === 'size') { el.querySelector('#hoPaper').className = 'ho-paper ho-' + (o.deescCard ? 'A6' : patch.paper || o.paper) + ' ho-size-' + (patch.size || o.size); }","if (['paper', 'size', 'furi', 'romaji'].includes(b.dataset.seg)) el.querySelector('#hoPaper').className = paperClass(Object.assign({}, o, patch));")
a=s.index("      el.querySelector('#hoPrint').onclick = () => window.print();"); b=s.index("    };\n    draw();")
s=s[:a]+"""      el.querySelector('#hoPrint').onclick = () => {
        if (!o.steps.length && !o.mse && !o.deescList && !o.deescAfter && !o.deescCard && !o.dischargeGuide) { App.toast('Choose at least one section first.'); return; }
        App.printWith(o.deescCard ? 'A6' : o.paper, o.deescCard ? '6mm' : o.paper === 'A5' ? '10mm' : '14mm');
        App.activity(5);
      };
"""+s[b:]
rep("  V.handout = (el, p, q) => {","  const paperClass = (o) => 'ho-paper ho-' + (o.deescCard ? 'A6' : o.paper) + ' ho-size-' + o.size + (o.furi === 'hide' ? ' ho-nofu' : '') + (o.romaji === 'show' ? '' : ' ho-norj');\n  V.handout = (el, p, q) => {")
open('japanese/js/handout.js','w',encoding='utf-8').write(s)
