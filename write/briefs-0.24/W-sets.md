# Writer brief: a picture-set group (data + art)
Follow COMMON-WRITE-24.md. You own TWO files for ONE group: js/data/picture-sets-<group>.js and pictures/art-<group>.js.
Your sets are listed in PLAN section C under your group (ids, kind d = diagram / c = cards, level). Shapes: PLAN A1, A2.
1. Choose the words first (PLAN C gives the idea; pick the most useful everyday and hospital-relevant words a beginner
   needs, common words only). Diagram sets 10–16 parts, cards sets 12–16.
2. Diagrams: DRAW the picture yourself as SVG (PLAN A2 rules: line art, currentColor, no text). Plan the composition so
   every part is a clearly separate, recognisable thing with room for a 22-unit pin on it. Then RENDER AND LOOK at it:
   write a small HTML file in /home/claude/work/new/<group>/ that shows each of your arts with numbered pins at the
   part positions (white and dark backgrounds, 340 px wide), screenshot it with Playwright (python, chromium is
   installed), and open the PNG with the Read tool. Redraw until a stranger could say what each pin points at, pins sit
   exactly on their things and do not hide each other. Do this for every diagram; at least two look-and-fix rounds each.
   `python3 /home/claude/work/render-art.py <group>` does the render for you if it exists (prints the PNG paths).
3. Cards: one emoji per part (Unicode Emoji 12.0 or older; never a flag, skin tone or joined sequence; not the same
   emoji twice in a set). If no emoji shows the thing clearly, choose another word. Check them in the render too:
   an emoji that renders as an empty box in the screenshot must be replaced.
4. `say` sentences: 8–10 per set, each answerable by exactly one part of the set; spread over different parts.
5. `intro`: one English sentence. For the body sets keep the figure neutral and simple (PLAN A2).
The body group also owns js/data/picture-bodymap.js (PLAN A6): 8 gentle clinician questions about where it hurts and
since when, 10 pain or sensation words a patient can point to (N4/N3 common words such as 痛い, ズキズキ, しびれる; `ja` +
`en`), and `scale: { ja, en }` = a one-line caption for a plain 0–10 number line (your own wording: "0 = no pain, 10 =
the worst pain you can imagine" style, said simply).
