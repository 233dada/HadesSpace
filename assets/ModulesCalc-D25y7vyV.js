import{d as ae,s as le,g as se,i as h,j as oe,S as B,y as ne,E as ue,z as ce,r as ie,o as n,b as u,f as l,e as _,u as i,t as v,J as re,h as R,I as de,F as f,B as y,w,A as N,N as me,m as pe,M as $,x as ve,l as fe,p as _e,q as ye,_ as Ce}from"./index-CqaGdXq1.js";import{m as V,g as Le,a as Se}from"./ModulePage.vue_vue_type_script_setup_true_lang-D-C6HnzK.js";import{C as be}from"./Calculator-B5_dywFK.js";import{T as ge}from"./TechList-BdqVfOfl.js";import{N as he}from"./NumberPicker-DFQMVLzU.js";import{c as ke}from"./compendiumTechList-DllghcNT.js";import{s as Te,g as Ie}from"./globals-rLCyQm-J.js";import{b as Me}from"./byTypes-DiOuyN-I.js";import{o as q}from"./Data-BTqJQGeC.js";import"./Page-DHtdj0Ym.js";import"./MultiConfigGUI-BMtoiwzF.js";import"./capital_ships-hj2EMUmK.js";import"./spacebuildings-iMzfIrfg.js";import"./sec2str-DoUca64f.js";const Ne=S=>(_e("data-v-bc97d9b1"),S=S(),ye(),S),Ee={class:"container"},Ue={class:"comp-btn"},Ae={class:"tech-list-wrap"},Oe={class:"modal-module"},De={class:"title"},Pe={class:"reset-buttons"},je={class:"chars"},xe={class:"level-picker"},Be=Ne(()=>l("li",null,[l("br")],-1)),Re={key:0},we={class:"select"},$e={class:"name"},Ve=["value"],qe=["value"],ze=ae({__name:"ModulesCalc",setup(S){const z=["UnlockPrice","UnlockTime"],H={actually:"CURRENT_LVL",plan:"PLAN_LVL"},k=le(),{t:F}=se(),{data:G,levelMap:Y,setTechLevel:K}=ke(),{MaxModuleLevel:C}=Ie,J=q(V,{map:([t])=>[t,C]}),X=q(V,{map:([t,a])=>[t,Le(a)]}),Z=h({}),d=h({actually:{},plan:{}}),b=h(!1),T=h(!1),s=oe({size:B.SMALL,title:F("TID_TECH_DLG_TITLE"),data:{module:{},minLevel:0,maxLevel:0,get key(){return this.module.Name}}});let o;ne(async()=>{await ue()}),ce([Y,()=>k.state.userSettings.compendiumTechSyncConfigIndex],([t])=>{k.state.userSettings.compendiumTechSyncConfigIndex==o.Config.selected&&(d.value.actually={...t},d.value.plan={...t,...d.value.plan})});function Q(t){o=t;for(const a of Me.artifact)Z.value[a]=t.provideGetterElements((...r)=>te.apply(null,[a,...r]))}function g(t,a){if(k.state.userSettings.compendiumTechSyncConfigIndex==o.Config.selected&&t=="actually"){const r=fe(s.data.key);K(r,a)}return o.onChangeLvl(t,s.data.key,a)}async function E(t){b.value&&(t.target.name=="all"&&g("actually",0),g("plan",0))}function I(t,a){return o.outputClasses(t,s.data.key,a)}function W(t){s.data.module=t,s.data.maxLevel=J[t.Name],s.data.minLevel=X[t.Name],b.value=!0}function ee(t,a){const r=a.total;return r.result.ReqBank=0,function(e,m){const p=t[e].UnlockPrice,c=Array.isArray(p)?p[m.plan[e]-1]:p;r.result.ReqBank=c>r.result.ReqBank?c:r.result.ReqBank}}function te(t,...[a,r]){const e=structuredClone(Se(t));return Object.entries(e).map(([m,p])=>{for(const[,c]of Object.entries(p))Array.isArray(c)&&c.length<C&&c.unshift(...Array(C-c.length).fill(0));return r[m]=a(e[m],C),[p,C]})}return(t,a)=>{const r=ie("t");return n(),u("div",null,[l("div",Ee,[_(be,{input:d.value,"onUpdate:input":a[0]||(a[0]=e=>d.value=e),"stack-chars":z,"calc-total":ee,"local-storage-key":"modulesCalc","title-key":"MODULES_CALC",onSetup:Q},null,8,["input"]),l("div",Ue,[i(G)?(n(),u("button",{key:0,class:"button accent",onClick:a[1]||(a[1]=e=>T.value=!0)},v(t.$t("HS_COMPENDIUM")),1)):re("",!0)]),l("div",Ae,[_(ge,{"on-click":W,"level-map":d.value.actually,"level-map-alt":d.value.plan,"is-muted":e=>!d.value.plan[e]},null,8,["level-map","level-map-alt","is-muted"])])]),_($,pe({open:b.value,"onUpdate:open":a[2]||(a[2]=e=>b.value=e)},s),{body:R(()=>[l("div",Oe,[l("div",De,[l("div",null,[l("h2",null,v(t.$t(s.data.module.TID)),1),l("div",Pe,[l("button",{name:"plan",class:"button yellow",onClick:E},v(t.$t("RESET_PLAN")),1),l("button",{name:"all",class:"button red",onClick:E},v(t.$t("RESET_ALL")),1)])]),_(de,{name:s.data.module.Icon,dir:"game/Modules"},null,8,["name"])]),l("ul",je,[(n(!0),u(f,null,y(Object.keys(d.value),e=>(n(),u("li",{key:e,class:"input"},[w(l("span",null,null,512),[[r,H[e]]]),l("div",xe,[_(he,{value:d.value[e][s.data.key]||0,min:s.data.minLevel,max:s.data.maxLevel,"onUpdate:value":m=>g(e,m)},null,8,["value","min","max","onUpdate:value"])])]))),128)),Be,(n(!0),u(f,null,y(Object.keys(i(o).output.plan[s.data.key]||{}),e=>{var m,p;return n(),u("li",{key:e,class:N({output:!0,"sub-chars":typeof((p=(m=i(o).output.plan)==null?void 0:m[s.data.key])==null?void 0:p[e])=="object"})},[l("b",null,v(i(o).format.key(e)),1),l("div",null,[(n(!0),u(f,null,y(Object.keys(d.value),c=>{var U,A,O,D;return n(),u("span",{key:c,class:N({...I(c,e),[i(Te)(e)]:!0,"stats-style":c=="actually"?!I(c,e).none:!1})},[typeof((A=(U=i(o).output[c])==null?void 0:U[s.data.key])==null?void 0:A[e])=="object"?(n(),u("ul",Re,[(n(!0),u(f,null,y(Object.keys(i(o).output[c][s.data.key][e]||{}),L=>(n(),u("li",{key:L,class:"output"},[l("b",null,v(i(o).format.key(L)),1),l("div",null,[(n(!0),u(f,null,y(Object.keys(d.value),M=>{var P,j,x;return n(),u("span",{key:M,class:N(I(M,L))},v(i(o).format.value(L,(x=(j=(P=i(o).output[M])==null?void 0:P[s.data.key])==null?void 0:j[e])==null?void 0:x[L])),3)}),128))])]))),128))])):(n(),u(f,{key:1},[me(v(i(o).format.value(e,(D=(O=i(o).output[c])==null?void 0:O[s.data.key])==null?void 0:D[e])),1)],64))],2)}),128))])],2)}),128))])])]),_:1},16,["open"]),_($,{open:T.value,"onUpdate:open":a[4]||(a[4]=e=>T.value=e),size:i(B).SMALL,title:t.$t("HS_COMPENDIUM")},{body:R(()=>[l("div",we,[w(l("p",$e,null,512),[[r,"SYNC"]]),l("select",{value:t.$store.state.userSettings.compendiumTechSyncConfigIndex,onChange:a[3]||(a[3]=e=>t.$store.commit(i(ve).SET_COMPENDIUM_TECH_SYNC_CONFIG_INDEX,parseInt(e.target.value)))},[(n(!0),u(f,null,y(i(o).Config.configs,(e,m)=>(n(),u("option",{key:m,value:m},v(e.name),9,qe))),128))],40,Ve)])]),_:1},8,["open","size","title"])])}}}),st=Ce(ze,[["__scopeId","data-v-bc97d9b1"]]);export{st as default};
