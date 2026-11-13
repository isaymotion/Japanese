#!/usr/bin/env python3
"""Builds the Japanese audio pack: one MP3 per string in audio/, plus audio/manifest.json.

Usage (needs internet; the GitHub Action .github/workflows/audio-pack.yml runs exactly this):
  node tools/collect-texts.js
  pip install edge-tts fugashi unidic-lite
  python tools/make_audio_pack.py --voice ja-JP-NanamiNeural

Only missing clips are recorded; clips for text that no longer exists are deleted. A run stops after
--max-minutes; run it again to continue.

What the voice is sent
----------------------
The voice reads ordinary Japanese (kanji and kana) most naturally, so that is what it gets. But some
kanji can be read in more than one way (何, 方, 辛い, 一日, 七時) and a voice may choose a reading that differs
from the furigana the learner sees. So every string is first read by a Japanese dictionary
(MeCab + UniDic, the `fugashi` package). Where the dictionary's reading differs from the furigana, the
words that differ are sent to the voice in kana, and the rest stays as written:

    furigana  何《なに》 か 質問《しつもん》 は あります か。
    sent      なにか質問はありますか。

The file name never depends on this: it is the hash of the text the app speaks (js/audio-key.js).
The same is done for a short list of known homographs (RISKY: 方, 後, 他, 一日 ...) and, for every spelling
the app itself reads in two ways (家 = いえ / うち), for the less common reading. A blank (＿) is said as まるまる. For the few strings where these rules read badly,
tools/voice-overrides.json gives the exact text to send.
What was sent, where it is not the text itself, is listed in audio/voice-text.json; a clip is recorded
again when that changes. --report prints the list without recording anything (no internet needed).
Brackets with stage directions, and the 〜 of grammar patterns, are not read either (see clean()).
Without fugashi the text is sent as written and a warning is printed.
"""
import argparse, asyncio, difflib, json, os, re, sys, time, unicodedata
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AUDIO = os.path.join(ROOT, 'audio')
VOICES = ['ja-JP-NanamiNeural', 'ja-JP-KeitaNeural']


def audio_key(text):  # must match js/audio-key.js
    n = re.sub(r'\s+', ' ', unicodedata.normalize('NFC', text).strip()).lower().encode('utf-8')
    def fnv(seed):
        h = seed
        for b in n:
            h ^= b
            h = (h * 16777619) & 0xFFFFFFFF
        return '%08x' % h
    return fnv(2166136261) + fnv(0x9747b28c)


# ---------- The notation of js/ja.js (must match it; main() checks every string against texts.json) ----------
KANJI = '㐀-䶿一-鿿豈-﫿々〆ヶ'
RUBY = re.compile('(?:｜([^《》｜\\s]+)|([' + KANJI + ']+))《([^《》]*)》')
JCH = '぀-ヿ㐀-鿿豈-﫿　-〿！-｠￠-￦…‥—―'
COMPACT = re.compile('([' + JCH + ']) +(?=[' + JCH + '])')

def compact(s):
    return COMPACT.sub(r'\1', s)

BLANK = 'まるまる'   # how a blank (＿) is said to the voice: the usual way to read 〇〇 aloud

def speak(ja, as_kana=(), blank='、'):
    """JA.speak(): readings and word spaces removed. Ruby runs whose index is in as_kana give their reading."""
    i = [-1]
    def run(m):
        i[0] += 1
        return m.group(3) if i[0] in as_kana else (m.group(1) or m.group(2))
    return re.sub('＿+', blank, compact(RUBY.sub(run, ja).replace('｜', '')))

def run_key(ja, m):
    """A kanji run with its first okurigana letter: 開+く, 方, 止+め."""
    nxt = ja[m.end():m.end() + 1]
    return (m.group(1) or m.group(2)) + ('+' + nxt if 'ぁ' <= nxt <= 'ゖ' else '')

# Spellings a voice is likely to read differently from the furigana, always sent in kana. main() adds, for
# every spelling the app itself reads in two ways (家 = いえ / うち), the readings other than the usual one.
RISKY = {'方', '止+め', '空+い', '開+い', '開+く', '後', '他', '腹', '怒+り', '頃', '紅葉', '最中', '臭+い', '抱+く', '抱+か', '抱+い', '様', '二分', '昨夜', '辛+い', '上手', '下手', '人気', '大人', '今日', '明日', '昨日', '一日', '十分'}

def kana_of(ja):
    return compact(RUBY.sub(lambda m: m.group(3), ja).replace('｜', ''))


# ---------- Readings ----------
_tagger = None
def tagger():
    global _tagger
    if _tagger is None:
        try:
            import fugashi
            _tagger = fugashi.Tagger()
        except Exception as e:  # not installed, or no dictionary
            print('WARNING: fugashi/unidic-lite not available (%r): every string is sent to the voice as written.' % (e,), file=sys.stderr)
            _tagger = False
    return _tagger

def hira(s):
    return ''.join(chr(ord(c) - 0x60) if 'ァ' <= c <= 'ヶ' else c for c in s)

def norm(s):
    """Reading reduced to what can be compared: hiragana, long-vowel mark, digits and Latin letters."""
    return re.sub(r'[^ぁ-ゖー0-9a-z]', '', hira(unicodedata.normalize('NFKC', s)).lower())

def dict_reading(text):
    out = []
    for w in tagger()(text):
        k = getattr(w.feature, 'kana', None)
        out.append(k if k and k != '*' else w.surface)
    return norm(''.join(out))

# A hiragana letter alone can be taken for a particle (は → "wa", へ → "e"); katakana is always the letter.
def single_kana(text):
    return len(text) == 1 and 'ぁ' <= text <= 'ゖ'

def voice_text(ja, risky=frozenset()):
    """What is sent to the voice for a string in the app's notation: the text as the app speaks it, with
    the words that the dictionary reads differently from the furigana written in kana."""
    text = speak(ja)
    if single_kana(text):
        return chr(ord(text) + 0x60)
    chosen = {n for n, m in enumerate(RUBY.finditer(ja)) if run_key(ja, m) in risky or (run_key(ja, m), m.group(3)) in risky}
    if not tagger():
        return speak(ja, chosen, BLANK)
    # The reading from the furigana, and where each furigana run sits in it.
    target, spans, at = '', [], 0
    for m in RUBY.finditer(ja):
        target += norm(ja[at:m.start()])
        r = norm(m.group(3))
        spans.append((len(target), len(target) + len(r)))
        target += r
        at = m.end()
    target += norm(ja[at:])
    read = dict_reading(text)
    if read == target or not spans:
        return speak(ja, chosen, BLANK)
    for op, i1, i2, _, _ in difflib.SequenceMatcher(None, target, read, autojunk=False).get_opcodes():
        if op == 'equal':
            continue
        for n, (a, b) in enumerate(spans):
            if (i1 < b and i2 > a) or (i1 == i2 and a < i1 <= b):
                chosen.add(n)
    return speak(ja, chosen, BLANK)

def clean(text):
    """Small cleanups so the voice reads symbols naturally. Stage directions and notes to the interviewer
    in brackets are not read, unless the whole string is one."""
    t = re.sub(r'[（(][^（()）]*[)）]', '、', text)
    if not re.search('[぀-ヿ㐀-鿿]', t):
        t = re.sub(r'[（()）]', '、', text)
    num = '0-9０-９一二三四五六七八九十百千'
    t = re.sub('(?<=[' + num + '])[〜～](?=[' + num + '])', 'から', t)       # 三〜五分 → 三から五分
    t = re.sub(r'^[〜～]+(?=[はへ])', 'なになに', t)                          # 〜は alone would be read "ha"
    t = re.sub(r'^[〜～]+', '', t)                                           # 〜さん (grammar patterns)
    t = re.sub(r'[〜～]+(?=[、。！？!?…]|$)', 'ー', t)                        # いや〜 → いやー
    t = re.sub(r'[〜～]+', '、', t)                                          # 〜ば〜ほど → ば、ほど
    t = re.sub(r'[「」『』]', '、', t)
    t = re.sub(r'^[、。…\s]+', '', re.sub(r'、[、\s]*', '、', t))
    t = re.sub(r'、+(?=[。！？!?])', '', t)
    t = re.sub(r'(?<=[。！？!?…])\s*、', '', t).strip().rstrip('、')
    return t or text


ERRORS = []

async def gen_edge(items, voice, rate, workers, deadline):
    import edge_tts
    sem = asyncio.Semaphore(workers)
    done = 0
    ok = 0
    async def one(key, said):
        nonlocal done, ok
        out = os.path.join(AUDIO, key + '.mp3')
        async with sem:
            if time.time() > deadline:
                return
            # Stop early if the voice service is clearly not working, instead of burning the whole job.
            if done >= 40 and ok == 0:
                return
            # A few sentences come back empty from the service; the same sentence with the question marks
            # softened, or with a closing full stop, usually goes through.
            soft = said.replace('？', '。').replace('?', '。')
            variants = [said, said, soft, soft.rstrip('。') + '。', said.replace('、', ' ')]
            for attempt, spoken in enumerate(variants):
                try:
                    await asyncio.wait_for(edge_tts.Communicate(spoken, voice, rate=rate).save(out + '.part'), timeout=45)
                    if os.path.getsize(out + '.part') < 500:
                        raise RuntimeError('empty audio')
                    os.replace(out + '.part', out)
                    ok += 1
                    break
                except Exception as e:  # network hiccups: back off and retry
                    if attempt == len(variants) - 1:
                        print('FAILED', key, said, repr(e), file=sys.stderr, flush=True)
                        if len(ERRORS) < 20:
                            ERRORS.append({'text': said, 'error': repr(e)[:300]})
                    await asyncio.sleep(2 + attempt * 3)
            done += 1
            if done % 200 == 0:
                print(f'  {done}/{len(items)}', flush=True)
    await asyncio.gather(*(one(k, t) for k, t in items))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--voice', default=VOICES[0], help='one of: ' + ', '.join(VOICES) + ' (Nanami is female, Keita male)')
    ap.add_argument('--rate', default='-5%', help='speaking rate, e.g. -10%%')
    ap.add_argument('--workers', type=int, default=8)
    ap.add_argument('--rebuild', action='store_true', help='record every clip again (e.g. after changing voice or rate)')
    ap.add_argument('--limit', type=int, default=0, help='only record this many (testing)')
    ap.add_argument('--max-minutes', type=float, default=50, help='stop recording after this long; run again to continue')
    ap.add_argument('--report', action='store_true', help='print what would be sent to the voice where it differs from the text, then exit')
    a = ap.parse_args()

    texts = json.load(open(os.path.join(ROOT, 'tools', 'texts.json'), encoding='utf-8'))
    # Spellings the app reads in more than one way, and the per-string corrections in tools/voice-overrides.json
    # ({ text as the app speaks it: what to send }), for the few strings where the rules above read badly.
    readings = {}
    for t in texts:
        for m in RUBY.finditer(t['ja']):
            c = readings.setdefault(run_key(t['ja'], m), {})
            c[m.group(3)] = c.get(m.group(3), 0) + 1
    # (spelling, reading) pairs: every reading but the most common one of a spelling read in two ways
    risky = set(RISKY)
    for k, c in readings.items():
        top = max(c, key=lambda r: (c[r], r))
        risky |= {(k, r) for r in c if r != top}
    risky = frozenset(risky)
    op = os.path.join(ROOT, 'tools', 'voice-overrides.json')
    overrides = json.load(open(op, encoding='utf-8')) if os.path.exists(op) else {}
    wanted, said = {}, {}
    for t in texts:
        text = speak(t['ja']).strip()
        assert text == t['text'], ('the notation here and in js/ja.js disagree', t, text)
        assert t['key'] in (audio_key(text), audio_key(text + '|' + kana_of(t['ja']).strip())), ('key mismatch', t)
        v = overrides.get(text) or clean(voice_text(t['ja'], risky))
        wanted[t['key']] = v
        if v != text:
            said[t['key']] = v
    unused = [k for k in overrides if k not in {t['text'] for t in texts}]
    if unused:
        print('WARNING: tools/voice-overrides.json has entries for text that no longer exists:', unused, file=sys.stderr)

    if a.report:
        for t in texts:
            if t['key'] in said:
                print(t['ja'] + '\t' + said[t['key']])
        print(f'{len(texts)} texts; {len(said)} are sent to the voice in a different spelling', file=sys.stderr)
        return

    os.makedirs(AUDIO, exist_ok=True)
    manifest_path = os.path.join(AUDIO, 'manifest.json')
    said_path = os.path.join(AUDIO, 'voice-text.json')
    old = json.load(open(manifest_path)) if os.path.exists(manifest_path) else {}
    old_said = json.load(open(said_path, encoding='utf-8')) if os.path.exists(said_path) else {}
    voice_changed = bool(old.get('keys')) and (old.get('voice') != a.voice or old.get('rate', a.rate) != a.rate)
    if voice_changed and not a.rebuild:
        print(f"The pack was recorded with {old.get('voice')} at {old.get('rate')}: recording everything again with {a.voice} at {a.rate}.")
    def stale(k):
        if a.rebuild or voice_changed or not os.path.exists(os.path.join(AUDIO, k + '.mp3')):
            return True
        return bool(old.get('keys')) and old_said.get(k) != said.get(k)   # the text sent to the voice changed
    todo = [(k, v) for k, v in wanted.items() if stale(k)]
    if a.limit:
        todo = todo[:a.limit]
    print(f'{len(wanted)} texts, {len(todo)} to record with {a.voice} ({len(said)} sent in a different spelling)')
    t0 = time.time()
    recorded_before = {k for k in wanted if os.path.exists(os.path.join(AUDIO, k + '.mp3'))}
    if todo:
        # Remove clips that must be recorded again first, so a run that stops early never leaves a stale clip.
        for k, _ in todo:
            p = os.path.join(AUDIO, k + '.mp3')
            if os.path.exists(p):
                os.remove(p)
        asyncio.run(gen_edge(todo, a.voice, a.rate, a.workers, t0 + a.max_minutes * 60))
    removed = 0
    for f in os.listdir(AUDIO):
        if f.endswith('.mp3') and f[:-4] not in wanted:
            os.remove(os.path.join(AUDIO, f)); removed += 1
        elif f.endswith('.part'):
            os.remove(os.path.join(AUDIO, f))
    have = sorted(k for k in wanted if os.path.exists(os.path.join(AUDIO, k + '.mp3')))
    size = sum(os.path.getsize(os.path.join(AUDIO, k + '.mp3')) for k in have)
    json.dump({'engine': 'edge', 'voice': a.voice, 'rate': a.rate, 'generated': datetime.now(timezone.utc).strftime('%Y-%m-%d'),
               'count': len(have), 'bytes': size, 'keys': have}, open(manifest_path, 'w'), separators=(',', ':'))
    json.dump({k: said[k] for k in sorted(said)}, open(said_path, 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
    new = len(set(have) - recorded_before) if not (a.rebuild or voice_changed) else len(have)
    json.dump({'finished': datetime.now(timezone.utc).isoformat(timespec='seconds'), 'attempted': len(todo), 'new': new, 'have': len(have), 'wanted': len(wanted),
               'seconds': round(time.time() - t0), 'sample_errors': ERRORS}, open(os.path.join(AUDIO, 'last-run.json'), 'w'), indent=1)
    print(f'Done in {time.time() - t0:.0f}s: {len(have)}/{len(wanted)} clips, {size / 1e6:.1f} MB, removed {removed} old clips')
    if len(have) < len(wanted):
        print('Some clips are still missing; run again to fill the gaps.', file=sys.stderr)


if __name__ == '__main__':
    main()
