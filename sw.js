/* Offline support. Bump VERSION whenever any file changes so phones pick up the update.
   All isaymotion apps share one origin (isaymotion.github.io), so this worker only ever deletes caches that
   start with its own PREFIX. 'hanashimasho-audio' holds the recorded clips and is kept across versions. */
const PREFIX = 'hanashimasho-';
const VERSION = PREFIX + '0.8.1';
const KEEP = ['hanashimasho-audio'];
const FILES = [
  './', 'index.html', 'manifest.webmanifest', 'css/style.css', 'data/app-meta.js', 'data/changelog.js',
  'data/hospital.js', 'data/strings.js', 'js/ja.js', 'js/conjugate.js', 'js/data/psych-phrases-1.js', 'js/data/psych-phrases-2.js',
  'js/data/psych-phrases-3.js', 'js/data/psych-phrases-4.js', 'js/data/psych-phrases-5.js', 'js/data/psych-phrases-6.js', 'js/data/psych-answers.js', 'js/data/psych-answers-2.js', 'js/data/psych-cases-1.js', 'js/data/psych-cases-2.js', 'js/data/psych-shea.js', 'js/data/psych-mood.js', 'js/data/psych-sud.js', 'js/data/psych-withdrawal.js', 'js/data/psych-deesc.js', 'js/data/psych-discharge.js', 'js/data/psych-admit-mse.js', 'js/data/psych-flow.js', 'js/data/psych-mse-sheet.js', 'js/data/psych-mse-cases.js', 'js/data/psych-discharge-cases-1.js', 'js/data/psych-discharge-cases-2.js', 'js/data/dict-core.js', 'js/data/dict-everyday.js', 'js/data/dict-clinical.js', 'js/data/dict-more.js', 'js/data/dict-kanji-1.js', 'js/data/dict-kanji-2.js', 'js/data/dict-kanji-3.js', 'js/data/dict-kanji-4.js', 'js/data/dict-kanji-5.js', 'js/data/dict-n3-1.js', 'js/data/dict-n3-2.js', 'js/data/lessons-1.js',
  'js/data/lessons-kanji.js', 'js/data/lessons-2.js', 'js/data/lessons-3.js', 'js/data/lessons-4.js', 'js/data/lessons-5.js', 'js/data/lessons-6.js', 'js/data/lessons-7.js', 'js/data/lessons-8.js', 'js/data/lessons-9.js', 'js/data/lessons-10.js', 'js/data/lessons-11.js', 'js/data/reading.js', 'js/data/reading-2.js', 'js/data/reading-3.js', 'js/data/dialogues.js', 'js/data/meta.js', 'js/data/verbs.js',
  'js/data/particles.js', 'js/data/kanji-n5.js', 'js/data/kanji-n4.js', 'js/data/kanji-n3a.js', 'js/data/kanji-n3b.js', 'js/data/kanji-n3c.js', 'js/data/kanji-clinical.js', 'js/audio-key.js', 'js/lang.js', 'js/core.js', 'js/views.js', 'js/psych-views.js',
  'js/point-listen.js', 'js/mood.js', 'js/sud.js', 'js/withdrawal.js', 'js/deesc.js', 'js/discharge.js', 'js/discharge-practice.js', 'js/mse-practice.js', 'js/handout.js', 'js/mse-sheet.js', 'js/kana.js', 'js/grammar.js', 'js/kanji.js', 'js/app.js', 'icons/icon-192.png', 'icons/icon-512.png',
  'icons/logo-96.png', 'icons/favicon-32.png', 'icons/favicon-64.png', 'icons/apple-touch-icon.png'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(
    keys.filter((k) => k.startsWith(PREFIX) && k !== VERSION && !KEEP.includes(k)).map((k) => caches.delete(k))
  )).then(() => self.clients.claim()));
});
// Network first for app files (so updates arrive), falling back to cache when offline.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin && /\/audio\/[0-9a-f]{16}\.mp3$/.test(url.pathname)) {
    // Recorded clips never change for a given name: serve from cache, store on first play.
    e.respondWith(caches.open(KEEP[0]).then((c) => c.match(req).then((r) => r || fetch(req).then((res) => { if (res.ok) c.put(req, res.clone()); return res; }))));
  } else if (url.origin === location.origin) {
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('index.html'))));
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then((r) => r || fetch(req).then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; })));
  }
});
