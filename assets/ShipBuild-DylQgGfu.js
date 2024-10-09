import{d as ne,g as ie,i as S,j as ae,z as de,G as ue,A as re,y as pe,o as u,b as r,e as p,h as y,f as o,t as c,u as n,H as ce,w as C,F as h,C as I,L as k,S as L,M as T,B as A,I as N,Q as F,D as ve,R as me,r as _e,_ as fe}from"./index-CBFyhGpf.js";import{g as Ce,m as H}from"./ModulePage.vue_vue_type_script_setup_true_lang-BiMaTHpu.js";import{M as z,a as he}from"./MultiConfigGUI-D7srCzJT.js";import{c as Me}from"./compendiumTechList-ClecJ30S.js";import{b as Se}from"./byTypes-DiOuyN-I.js";import{g as ye}from"./globals-rLCyQm-J.js";import{s as w}from"./capital_ships-BOrq68-Q.js";import{T as q}from"./TechList-t0QeRaQG.js";import{N as ge}from"./NumberPicker-DAudgTIX.js";import{o as Ie}from"./Data-xyKz1ZbN.js";import"./Page-CigpQWAU.js";import"./spacebuildings-iMzfIrfg.js";import"./sec2str-oeIYd9P4.js";const Le={class:"container"},Te={class:"topic"},De={class:"buttons"},Ee={key:0,class:"ship-list"},be=["onClick"],ke={class:"icon"},Ne={class:"body"},Oe={class:"modules"},Ue={key:0,class:"level"},Be={class:"create-ship-list"},$e=["onClick"],Ae=["onUpdate:modelValue"],He=["value"],ze={class:"edit-ship"},we={class:"modal-module"},Pe={class:"title"},Ge={class:"level-picker"},je={class:"module-levels"},Ye={class:"select"},Re={class:"name"},Ve=["value"],Fe=["value"],qe={disabled:""},xe=["value"],Ke={disabled:""},We=["value"],Qe={name:"ShipBuild"};var x=(m=>(m[m.NONE=null]="NONE",m.EDIT="Edit",m.MODULES_CALC="ModulesCalc",m.HS_COMPENDIUM="HSCompendium",m))(x||{});const Ze=ne({...Qe,setup(m){const K="shipBuild",W="modulesCalc",_={levels:{Transport:1,Miner:1,Battleship:1},ships:[]},g={Battleship:w.Battleship,Transport:w.Transport,Miner:w.Miner},{MaxModuleLevel:Q}=ye,Z=Ie(H,{map:([l,e])=>[l,Ce(e)]}),P=ve(),G=me(),{t:J}=ie(),{data:X,levelMap:j}=Me(),s=new z(K,_),Y=new z(W,{}),R=J("SHIP_BUILD"),V=Object.keys(g),D=S(!1),O=S(!1),E=S(!1),U=S(!1),B=S(!1),M=S(P.state.userSettings.shipBuildSync),a=ae({data:{hideModulesTypes:[],removeShip:()=>{},ship:{slots:[]},module:{Name:"",Icon:"",TID:""},updateModule:()=>{}}});if(M.value.provider!="HSCompendium"&&$(),G.currentRoute.value.query.d){const e={...z.parseUrl(G.currentRoute.value.query.d)};s.add(e,{temporary:!0})}de(async()=>{await ue(),$()}),re(j,l=>{M.value.provider=="HSCompendium"&&(s.selectedConfig.levels={...l})});function ee(l){s.selectedConfig.ships.push({meta:{type:l},slots:[]}),s.selectedConfig.ships.sort((e,d)=>V.indexOf(e.meta.type)-V.indexOf(d.meta.type)),s.save(),D.value=!1}function se(l){const e=s.selectedConfig.ships[l],{levels:d}=s.selectedConfig,t=[],{NewModuleSlots:i}=g[e.meta.type];typeof i=="string"?t.push(...Array(d[e.meta.type]).fill(i)):Array.isArray(i)&&t.push(...i.slice(0,d[e.meta.type]).flat()),e.slots.length||(e.slots=t),a.data.ship=e,a.data.hideModulesTypes=Se.artifact.filter(f=>!t.includes(f)),a.data.removeShip=()=>{s.selectedConfig.ships.splice(l,1),s.save(),E.value=!1},s.save(),E.value=!0}function te(l){return a.data.ship.slots.includes(l)}function le({SlotType:l,Name:e}){const d=a.data.ship.slots.indexOf(e);if(d!=-1)a.data.ship.slots[d]=l;else{const t=a.data.ship.slots.indexOf(l);t!=-1&&(a.data.ship.slots[t]=e)}s.save()}function oe(l){a.data.module=l,a.data.updateModule=e=>{s.selectedConfig.levels[l.Name]=e,s.save()},U.value=!0}function $(){var d,t,i,f,v,b;const{provider:l,index:e}=M.value;l=="ModulesCalc"&&(s.selectedConfig.levels={Transport:((t=(d=s==null?void 0:s.selectedConfig)==null?void 0:d.levels)==null?void 0:t.Transport)??_.levels.Transport,Miner:((f=(i=s==null?void 0:s.selectedConfig)==null?void 0:i.levels)==null?void 0:f.Miner)??_.levels.Miner,Battleship:((b=(v=s==null?void 0:s.selectedConfig)==null?void 0:v.levels)==null?void 0:b.Battleship)??_.levels.Battleship,...Y.store.configs[e].value.actually}),l=="HSCompendium"&&(s.selectedConfig.levels={...j.value}),l==null&&Object.keys(s.selectedConfig.levels).length!=Object.keys(_.levels).length&&(s.selectedConfig.levels={..._.levels}),P.commit(pe.SET_SHIP_BUILD_SYNC,M.value),s.save()}return(l,e)=>{const d=_e("t");return u(),r("div",Le,[p(n(ce),null,{default:y(()=>[o("title",null,c(n(R)),1)]),_:1}),o("h1",Te,c(n(R)),1),o("div",De,[o("button",{class:"settings-btn",onClick:e[0]||(e[0]=t=>B.value=!0)}),C(o("button",{class:"button accent",onClick:e[1]||(e[1]=t=>D.value=!0)},null,512),[[d,"TID_PC_NEW_SHIP"]]),C(o("button",{class:"button accent",onClick:e[2]||(e[2]=t=>O.value=!0)},null,512),[[d,"TID_MODULE_LEVEL_HINT_TITLE"]])]),"levels"in n(s).selectedConfig&&Object.keys(n(s).selectedConfig.levels).length?(u(),r("ul",Ee,[(u(!0),r(h,null,I(n(s).selectedConfig.ships,({meta:{type:t},slots:i},f)=>(u(),r("li",{key:`${t}${f}`,class:"ship",onClick:v=>se(f)},[o("div",ke,[p(N,{dir:"game/Ships",name:g[t].Model[n(s).selectedConfig.levels[t]-1]},null,8,["name"])]),o("div",Ne,[C(o("p",null,null,512),[[d,g[t].TID]]),o("ul",Oe,[(u(!0),r(h,null,I(i,(v,b)=>(u(),r("li",{key:`${v}${b}`},[v in n(H)?(u(),r(h,{key:0},[p(N,{dir:"game/Modules",name:n(H)[v].Icon},null,8,["name"]),n(s).selectedConfig.levels[v]?(u(),r("span",Ue,c(n(s).selectedConfig.levels[v]),1)):k("",!0)],64)):k("",!0)]))),128))])])],8,be))),128))])):k("",!0),p(T,{open:D.value,"onUpdate:open":e[4]||(e[4]=t=>D.value=t),title:l.$t("TID_PC_NEW_SHIP"),size:n(L).SMALL},{body:y(()=>[o("ul",Be,[(u(),r(h,null,I(g,t=>o("li",{key:t.Name,class:"ship"},[o("div",{class:"icon",onClick:i=>ee(t.Name)},[p(N,{dir:"game/Ships",name:t.Model[n(s).selectedConfig.levels[t.Name]-1]},null,8,["name"])],8,$e),o("div",{class:A(["select",{disable:l.$store.state.userSettings.shipBuildSync.provider=="HSCompendium"}])},[C(o("select",{"onUpdate:modelValue":i=>n(s).selectedConfig.levels[t.Name]=i,onChange:e[3]||(e[3]=(...i)=>n(s).save&&n(s).save(...i))},[(u(!0),r(h,null,I(t.BuildCost.length,i=>(u(),r("option",{key:i,value:i},c(i),9,He))),128))],40,Ae),[[F,n(s).selectedConfig.levels[t.Name]]])],2)])),64))])]),_:1},8,["open","title","size"]),p(T,{open:E.value,"onUpdate:open":e[6]||(e[6]=t=>E.value=t),title:l.$t("TID_CORP_DIALOG_EDIT"),size:n(L).LARGE},{body:y(()=>[o("div",ze,[o("div",{class:A(["tech-list",a.data.hideModulesTypes])},[p(q,{"is-muted":te,"on-click":le})],2),C(o("button",{class:"button red",onClick:e[5]||(e[5]=(...t)=>a.data.removeShip&&a.data.removeShip(...t))},null,512),[[d,"TID_DISBAND_SHIP_BUTTON"]])])]),_:1},8,["open","title","size"]),p(T,{open:U.value,"onUpdate:open":e[7]||(e[7]=t=>U.value=t),title:l.$t("TID_CORP_DIALOG_EDIT"),size:n(L).SMALL},{body:y(()=>[o("div",we,[o("div",Pe,[o("div",null,[o("h2",null,c(l.$t(a.data.module.TID)),1)]),p(N,{name:a.data.module.Icon,dir:"game/Modules"},null,8,["name"])]),o("div",Ge,[p(ge,{value:n(s).selectedConfig.levels[a.data.module.Name]||0,min:n(Z)[a.data.module.Name],max:n(Q),"onUpdate:value":a.data.updateModule},null,8,["value","min","max","onUpdate:value"])])])]),_:1},8,["open","title","size"]),p(T,{open:O.value,"onUpdate:open":e[9]||(e[9]=t=>O.value=t),title:l.$t("TID_MODULE_LEVEL_HINT_TITLE"),size:n(L).LARGE},{body:y(()=>[o("div",je,[o("div",Ye,[C(o("p",Re,null,512),[[d,"SYNC"]]),C(o("select",{"onUpdate:modelValue":e[8]||(e[8]=t=>M.value=t),onChange:$},[o("option",{value:{provider:x.NONE}},c(l.$t("TID_PLAYER_INFO_CORP_NONE")),9,Ve),o("option",{value:{provider:"Edit"}},c(l.$t("TID_CORP_DIALOG_EDIT")),9,Fe),o("option",qe,"--- "+c(l.$t("MODULES_CALC"))+" ---",1),(u(!0),r(h,null,I(n(Y).store.configs,(t,i)=>(u(),r("option",{key:i,value:{provider:"ModulesCalc",index:i}},c(t.name),9,xe))),128)),n(X)?(u(),r(h,{key:0},[o("option",Ke,"--- "+c(l.$t("HS_COMPENDIUM"))+" ---",1),o("option",{value:{provider:"HSCompendium",index:0}}," 0 ",8,We)],64)):k("",!0)],544),[[F,M.value]])]),o("div",{class:A(["tech-list",{disable:l.$store.state.userSettings.shipBuildSync.provider!="Edit"}])},[p(q,{"level-map":n(s).selectedConfig.levels,"on-click":oe},null,8,["level-map"])],2)])]),_:1},8,["open","title","size"]),p(T,{open:B.value,"onUpdate:open":[e[10]||(e[10]=t=>B.value=t),e[11]||(e[11]=()=>n(s).save())],title:l.$t("TID_SETTINGS_DLG_TITLE"),size:n(L).MEDIUM},{body:y(()=>[p(he,{"on-create-new":()=>n(s).add(_),instance:n(s)},null,8,["on-create-new","instance"])]),_:1},8,["open","title","size"])])}}}),ps=fe(Ze,[["__scopeId","data-v-5853a8cf"]]);export{x as PROVIDERS,ps as default};