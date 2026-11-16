"""End-of-treatment review practice (0.20.0): list page #/psych/eot and every case page #/psych/ecase/<id> at 390 and
1280 px, light and dark. Each run: every field step (ask every question, pick the key; one field with a wrong pick
added), check, then the compare step: the decision both ways, the first-visit comparison and its link. Also the hub
tile, the menu item, and the Progress line. No overflow, no raw notation. Expect "problems []", "errors []"."""
from playwright.sync_api import sync_playwright
B='http://localhost:8765/index.html'
errors=[]; probs=[]
def check(pg, where):
    ov=pg.evaluate("document.documentElement.scrollWidth>innerWidth+1"); raw=pg.evaluate("/《/.test(document.querySelector('#view').innerText)")
    if ov or raw: probs.append((where,'overflow' if ov else '','raw' if raw else ''))
def go(pg, h):
    pg.evaluate("h=>{location.hash=h}", '#/'); pg.wait_for_timeout(80); pg.evaluate("h=>{location.hash=h}", h); pg.wait_for_timeout(250)
def run(p, name, vp, scheme):
    br=p.chromium.launch(); pg=br.new_page(viewport=vp, color_scheme=scheme)
    pg.on('console',lambda m: errors.append(name+': '+m.text) if m.type=='error' and '403' not in m.text else None); pg.on('pageerror',lambda e: errors.append(name+': '+str(e)))
    pg.goto(B+'#/psych/eot'); pg.wait_for_timeout(700)
    tiles=pg.locator('#view a.tile').count(); print(name,'list tiles',tiles,'h1',pg.inner_text('#view h1').split('\n')[0]); check(pg,name+' list')
    pg.screenshot(path='/tmp/qa-out/eot_%s_list.png'%name, full_page=True)
    ids=pg.evaluate("PSYCH_EOT_CASES.map(c=>c.id)")
    for cid in ids:
        go(pg,'#/psych/ecase/'+cid); check(pg,name+' '+cid+' start')
        if cid==ids[0]: pg.screenshot(path='/tmp/qa-out/eot_%s_%s_start.png'%(name,cid), full_page=True)
        n=pg.evaluate("(()=>{const C=PSYCH_EOT_CASES.find(c=>c.id===%r);return PSYCH_EOT.fields.filter(f=>f.kind!=='sign'&&C.fields[f.id]).length})()"%cid)
        scores=[]
        for i in range(n):
            while pg.locator('#view [data-ask]').count(): pg.locator('#view [data-ask]').first.click(); pg.wait_for_timeout(20)
            en=pg.locator('#view #dcEn')
            if en.count(): en.click(); pg.wait_for_timeout(20)
            if i==2 and pg.locator('#view #dcQuote').count(): pg.fill('#view #dcQuote','すっきり しました')
            pg.evaluate("""([cid,i])=>{const C=PSYCH_EOT_CASES.find(c=>c.id===cid);const F=PSYCH_EOT.fields.filter(f=>f.kind!=='sign'&&C.fields[f.id]);const f=F[i],x=C.fields[f.id];
              const picks=(x.need||[]).map(n=>Array.isArray(n)?n[0]:n); const w=Object.keys(x.wrong||{}); if(i===1&&w.length) picks.push(w[0]);
              picks.forEach(p=>{const b=document.querySelector('#view [data-pick="'+f.picks.indexOf(p)+'"]'); if(b) b.click();});}""",[cid,i])
            pg.click('#view #dcCheck'); pg.wait_for_timeout(60)
            cls=pg.evaluate("document.querySelector('#view .ds-field .feedback').className"); scores.append('ok' if ' ok' in cls else 'mid' if 'mid' in cls else 'no')
            check(pg,name+' '+cid+' field %d'%i)
            if cid==ids[0] and i in (1,2,3) and name in ('phone','phonedark'): pg.screenshot(path='/tmp/qa-out/eot_%s_%s_f%d.png'%(name,cid,i), full_page=True)
            pg.locator('#view .ds-field .spread [data-go]').last.click(); pg.wait_for_timeout(60)
        exp=['ok']*n; exp[1]='mid' if pg.evaluate("Object.keys(PSYCH_EOT_CASES.find(c=>c.id===%r).fields[PSYCH_EOT.fields.filter(f=>PSYCH_EOT_CASES.find(c=>c.id===%r).fields[f.id])[1].id].wrong||{}).length"%(cid,cid)) else 'ok'
        if scores!=exp: probs.append((name,cid,'field grades',scores,exp))
        end=pg.evaluate("PSYCH_EOT_CASES.find(c=>c.id===%r).decision.end"%cid)
        q=pg.inner_text('#view .dc-decide'); print(name,cid,'fields',scores,'decision prompt',q.split('\n')[1] if '\n' in q else q)
        right='1' if end else '0'; wrong='0' if end else '1'
        # wrong call first
        pg.click('#view [data-dec="%s"]'%wrong); pg.wait_for_timeout(80)
        fb=pg.inner_text('#view .dc-decide .feedback'); pct=pg.inner_text('#view .card .spread .pill')
        if not fb.startswith('The model makes the other call'): probs.append((name,cid,'wrong call not flagged'))
        print(name,cid,'wrong call ->',fb[:60],'|',pct); check(pg,name+' '+cid+' compare')
        if cid==ids[0]: pg.screenshot(path='/tmp/qa-out/eot_%s_%s_compare.png'%(name,cid), full_page=True)
        fv=pg.locator('#view .eot-first').count(); lk=pg.locator('#view a[href="#/psych/mcase/%s"]'%cid).count(); dl=pg.locator('#view a[href="#/psych/dcase/%s"]'%cid).count()
        hasm=pg.evaluate("(window.PSYCH_MSE_CASES||[]).some(m=>m.id===%r)"%cid)
        print(name,cid,'first-visit card',fv,'link',lk,'discharge link',dl,'(mse case exists %s)'%hasm)
        if hasm and not (fv and lk): probs.append((name,cid,'first-visit compare missing'))
        if dl: probs.append((name,cid,'links to discharge case'))
        # run again, then the right call
        pg.click('#view #dcAgain'); pg.wait_for_timeout(80); pg.locator('#view .ds-chip.sum').click(); pg.wait_for_timeout(80)
        pg.click('#view [data-dec="%s"]'%right); pg.wait_for_timeout(80)
        fb=pg.inner_text('#view .dc-decide .feedback')
        if not fb.startswith('Same call as the model'): probs.append((name,cid,'right call not accepted'))
        print(name,cid,'right call ->',fb[:60])
        if lk: pg.locator('#view a[href="#/psych/mcase/%s"]'%cid).click(); pg.wait_for_timeout(300); print(name,cid,'link opens',pg.evaluate("location.hash"),pg.inner_text('#view h1').split('\n')[0])
    print(name,'stored',pg.evaluate("JSON.stringify(App.state.done.ecases)"))
    go(pg,'#/psych?tab=cases'); t=pg.locator('#view a.tile[href="#/psych/eot"]').count(); print(name,'hub tile',t)
    if not t: probs.append((name,'hub tile missing'))
    m=pg.locator('a[data-nav="p-eot"]').count(); print(name,'menu items',m)
    if not m: probs.append((name,'menu item missing'))
    go(pg,'#/progress'); pr=pg.locator('#view a[href="#/psych/eot"]').count(); print(name,'progress link',pr); check(pg,name+' progress')
    if not pr: probs.append((name,'progress line missing'))
    br.close()
with sync_playwright() as p:
    run(p,'phone',{'width':390,'height':844},'light')
    run(p,'phonedark',{'width':390,'height':844},'dark')
    run(p,'desk',{'width':1280,'height':900},'light')
    run(p,'deskdark',{'width':1280,'height':900},'dark')
print('problems',probs); print('errors',errors)
