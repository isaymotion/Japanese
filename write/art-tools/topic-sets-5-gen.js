const {M}=require('/tmp/w/lib.js');const fs=require('fs');
const S=[
['animals-1','Animals',0,'うさぎ ハムスター ねずみ 豚《ぶた》 鶏《にわとり》 羊《ひつじ》 ライオン トラ キリン パンダ 猿《さる》 熊《くま》 ヘビ 犬《いぬ》 猫《ねこ》 馬《うま》'],
['appliances','Appliances and machines',0,'エアコン 扇風機《せんぷうき》 ストーブ ドライヤー アイロン ラジオ プリンター カメラ ヘッドホン 電球《でんきゅう》 洗濯機《せんたくき》 掃除機《そうじき》 冷蔵庫《れいぞうこ》 炊飯器《すいはんき》 レンジ オーブン'],
['kitchen','In the kitchen',0,'流《なが》し 包丁《ほうちょう》 フライパン コンロ やかん お盆《ぼん》 おわん ナイフ 湯飲《ゆの》み 急須《きゅうす》 鍋《なべ》 皿《さら》 茶碗《ちゃわん》 箸《はし》 スプーン フォーク'],
['around-house','Around the house',0,'ベランダ カーテン 本棚《ほんだな》 ソファー 洗面台《せんめんだい》 体重計《たいじゅうけい》 シャワー シャンプー トイレットペーパー 電気《でんき》スタンド 目覚《めざ》まし時計《どけい》 スリッパ ハンガー バケツ カーペット 浴室《よくしつ》'],
['in-town','In town',0,'八百屋《やおや》 肉屋《にくや》 花屋《はなや》 パン屋《や》 靴屋《くつや》 床屋《とこや》 ビル 教会《きょうかい》 劇場《げきじょう》 プール 体育館《たいいくかん》 郵便局《ゆうびんきょく》 銀行《ぎんこう》 交番《こうばん》 図書館《としょかん》'],
['at-station','At the station',0,'精算機《せいさんき》 各駅《かくえき》 停車《ていしゃ》 快速《かいそく》 終点《しゅうてん》 優先席《ゆうせんせき》 改札《かいさつ》 ホーム 切符《きっぷ》 踏切《ふみきり》 始発《しはつ》 停留所《ていりゅうじょ》 路線図《ろせんず》 満員《まんいん》 電車《でんしゃ》 駅員《えきいん》'],
['clothes-2','Clothes and colours',0,'セーター ジャケット パジャマ 下着《したぎ》 サンダル ブーツ 着物《きもの》 ハンカチ マフラー ネクタイ ベルト コート スカート 紫《むらさき》 緑《みどり》 茶色《ちゃいろ》'],
['car-bike','Cars and bicycles',0,'タイヤ ハンドル ライト ワイパー トランク バンパー サドル ベル かご ブレーキ ペダル チェーン 荷台《にだい》 トラック バイク パトカー'],
['ward-things','Things on the ward',1,'ばんそうこう 聴診器《ちょうしんき》 マスク ナースステーション 体温計《たいおんけい》 点滴《てんてき》 お盆《ぼん》 カーテン ベッド 体重計《たいじゅうけい》 病室《びょうしつ》 手袋《てぶくろ》 はさみ 消火器《しょうかき》 薬《くすり》'],
['body-2','More body words',1,'へそ 太《ふと》もも ふくらはぎ かかと 頬《ほお》 あご 親指《おやゆび》 人差《ひとさ》し指《ゆび》 中指《なかゆび》 薬指《くすりゆび》 小指《こゆび》 指《ゆび》 舌《した》 首《くび》 肩《かた》 腕《うで》'],
];
let out=[],bad=0;
for(const [id,t,c,w] of S){const hs=w.split(/\s+/);if(new Set(hs).size!==hs.length){console.log('dup',id);bad++}
 const ks=[];let n=0;for(const h of hs){const v=M.get(h);if(!v){console.log('MISSING',id,h);bad++;continue}ks.push("'"+(h+'|'+v.en).replace(/\\/g,'\\\\').replace(/'/g,"\\'")+"'");if(/^N[45]$/.test(v.lv))n++}
 console.log(id,hs.length,'N4/5:',n);if(n<8)bad++;
 out.push(`  { id: '${id}', title: '${t}', clin: ${c?'true':'false'}, words: [${ks.join(', ')}] },`)}
if(bad){console.log('PROBLEMS');process.exit(1)}
const f='/home/claude/japanese/js/data/topic-sets-5.js';let s=fs.readFileSync(f,'utf8');
s=s.replace(/(window\.TOPIC_SETS = \(window\.TOPIC_SETS \|\| \[\]\)\.concat\(\[\n)[\s\S]*?(\]\);\s*)$/,(m,a,b)=>a+out.join('\n')+'\n'+b);
fs.writeFileSync(f,s);console.log('written');
