import{_ as T,g,b,e as l,h as I,u as o,f as e,w as i,o as f,r as R}from"./index-D7L4dZxx.js";import{P as E,V as u}from"./Page-Ba6dvysW.js";import{g as w}from"./getFilterByType-mSKMdPnQ.js";import{o as p}from"./Data-5pxuzJRG.js";import{s}from"./capital_ships-BOrq68-Q.js";import"./byTypes-DiOuyN-I.js";import"./globals-rLCyQm-J.js";import"./sec2str-DGnOXfey.js";const M={HomeSystem1:{Name:"HomeSystem1",TID:"TID_CERB_STATION_HOME1",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:15e3,MaxShield:15e3,DPS:100,AttackRange:1e3,Model:"CerberusStation_DrkNeb",WeaponFx:"Gun_Projectile01_Weak",ShieldRegenPerMinute:10,ShieldRegenTimeAfterDamage:3600,MaxShips:3,AwardXP:1e3},HomeSystem2:{Name:"HomeSystem2",TID:"TID_CERB_STATION_HOME2",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:5e4,MaxShield:5e4,DPS:140,AttackRange:1600,Model:"CerberusStation_DrkNeb_lv2",WeaponFx:"Gun_Projectile01",ShieldRegenPerMinute:14,ShieldRegenTimeAfterDamage:3600,MaxShips:5,AwardXP:3e3},HomeSystem3:{Name:"HomeSystem3",TID:"TID_CERB_STATION_HOME3",TID_Description:"TID_CERB_STATION_HOME_DESCR",ConceptImage:"portrait_CerberusStation",SpawnFleetIntervalSeconds:86400,ShipToSpawn:"CerberusGuardian",ShipLevel:0,MaxHP:9e4,MaxShield:9e4,DPS:200,AttackRange:2400,Model:"CerberusStation_DrkNeb_lv3",WeaponFx:"Gun_Projectile01_Strong",ShieldRegenPerMinute:20,ShieldRegenTimeAfterDamage:3600,MaxShips:7,AwardXP:5e3}},A=""+new URL("portrait_CerberusDestroyer-Bi5dpSF6.jpg",import.meta.url).href,P=""+new URL("portrait_CerberusStation-CdZ0_ysr.jpg",import.meta.url).href,O=""+new URL("portrait_Interceptor-BwHJt5fu.jpg",import.meta.url).href,k={class:"categories"},B={href:"#DarkCerberus"},H={href:"#CerberusStations"},N={class:"portrait-container"},x=["src"],y={id:"DarkCerberus",class:"topic"},G={href:"#DarkCerberus",class:"link-topic"},U={class:"portrait-container"},v=["src"],F={id:"CerberusStations",class:"topic"},L={href:"#CerberusStations",class:"link-topic"},j={__name:"Cerberus",setup(W){s.CerberusGhosts.GhostSpawnSecs&&(s.CerberusGhosts.GhostSpawnSecs=s.CerberusGhosts.GhostSpawnSecs[0]),s.CerberusColossus.modules[1].SalvageHullPercent&&s.CerberusColossus.modules[1].SalvageHullPercent.pop();const{t:d}=g(),h=["BSScore","BCCost","FuelUseIncrease","TID_Artifact","UnlockBlueprints","UnlockPrice","UnlockTime","WhiteStarScore"],m=S("capital_ships.cerberus"),C=S("capital_ships.darkCerberus"),D=p(M,{map:([r,a])=>(a.ShipToSpawn&&(a.ShipToSpawn=_(a.ShipToSpawn)),[r,a])});function S(r){return p(s,{...w(r),map:([a,t])=>{if(t.modules&&(t.modules=t.modules.map(n=>p(n,{filter:([c])=>!h.includes(c)}))),t.OnDestroySpawn){const n=t.OnDestroySpawn,c=String(t.OnDestroySpawnCount);t.OnDestroySpawn=`${c}x ${_(n)}`,delete t.OnDestroySpawnCount}return[a,t]}})}function _(r){return r in s?d(s[r].TID):r}return(r,a)=>{const t=R("t");return f(),b("div",null,[l(E,{"title-loc-key":"CERBERUS","content-args":{data:o(m),iconDir:"game/Ships"},portrait:{src:o(A),alt:"cerberus"}},{default:I(()=>[e("div",k,[e("ol",null,[e("li",null,[i(e("a",B,null,512),[[t,"DARK_CERBERUS"]])]),e("li",null,[i(e("a",H,null,512),[[t,"TID_CERB_STATION_HOME2"]])])])])]),_:1},8,["content-args","portrait"]),e("div",null,[e("div",N,[e("img",{class:"portrait",src:o(O),alt:"dark cerberus"},null,8,x),e("h1",y,[i(e("a",G,null,512),[[t,"DARK_CERBERUS"]])])]),l(u,{args:{data:o(C),iconDir:"game/Ships"}},null,8,["args"])]),e("div",null,[e("div",U,[e("img",{class:"portrait",src:o(P),alt:"cerberus station"},null,8,v),e("h1",F,[i(e("a",L,null,512),[[t,"TID_CERB_STATION_HOME2"]])])]),l(u,{args:{data:o(D),iconDir:"game/SpaceBuildings"}},null,8,["args"])])])}}},z=T(j,[["__scopeId","data-v-b0486517"]]);export{z as default};
