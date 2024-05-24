import{d as Q,x as W,g as ee,i as p,j as w,y as C,z as x,A as te,B as z,r as ne,o as r,b as c,e as u,h as E,f as a,t as h,u as f,H as se,C as D,w as $,F as y,D as S,I as H,S as j,M as G,p as v,E as ae,_ as oe}from"./index-CXOwl9OI.js";import{T as J}from"./TechList-DA-zRv9p.js";import{m as le,C as ie}from"./CompendiumPage-CxUCfpr-.js";import{s as A}from"./capital_ships-BOrq68-Q.js";import{s as re}from"./spacebuildings-iMzfIrfg.js";import{m as M}from"./ModulePage.vue_vue_type_script_setup_true_lang-C8ryDWs5.js";import{o as ce}from"./Data-C7dqEPzF.js";import"./byTypes-DiOuyN-I.js";import"./Page-Dw-uCOZx.js";import"./globals-rLCyQm-J.js";import"./sec2str-Bt4z6J1L.js";const ue={class:"container"},de={class:"select"},me=["value","selected"],pe=["onClick"],fe={class:"meta"},ve={class:"avatar"},_e=["src","alt"],Ce={class:"sort-tech"},he=["k"],ge={class:"modal-filter-tech"},Ie={class:"sections-group other"},Te={class:"type",name:"user-info"},Ee=["onClick"],ye=5,V=50,Se=Q({__name:"CompendiumCorp",setup(Me){var U;const g=W(),{t:Y}=ee(),X=Y("HS_COMPENDIUM"),O=(U=new Intl.Locale(navigator.language))==null?void 0:U.hourCycles,Z=O?["h23","h24"].some(t=>O.includes(t)):!0,i={LocalTime:{icon:{name:"time",dir:"icons/compendium"},formatter:({localTime:t,localTime24:n})=>Z?n:t},AfkFor:{icon:{name:"afk",dir:"icons/compendium"},formatter:({afkFor:t})=>t},CargoCap:{icon:{name:"cargo",dir:"icons/compendium"},formatter:({tech:t})=>{let n=0;const[o]=t[v("Transport")]||[],[e]=t[v("TransportCapacity")]||[],[s]=t[v("RelicDrone")]||[];return o&&e&&(n+=A.Transport.JobCapacity[o-1]+M.TransportCapacity.ExtraTradeSlots[e-1]),s&&(n+=M.RelicDrone.drone.JobCapacity[s-1]),n}}},_=p(!1),L=p(!1),b=p(!1),I=p(g.state.userSettings.compendiumCorpLastRoleId),l=w([]),k=p({}),d=p([]),T=w({title:"",lvlMap:void 0});let m=[];d.value=Array.from({length:10},t=>({userId:t,name:"",avatarUrl:""})),C.value.on("connected",()=>B()),C.value.on("disconnected",()=>{m=[],d.value=Array.from({length:10},t=>({userId:t,name:"",avatarUrl:""})),I.value="",l.splice(0),g.commit(x.SET_COMPENDIUM_CORP_LAST_ROLE_ID)}),te(()=>{C.value.getUser()&&B()}),z(I,async t=>{_.value=!0,g.commit(x.SET_COMPENDIUM_CORP_LAST_ROLE_ID,t),m=await C.value.corpdata(t).then(n=>n.members),d.value=m,_.value=!1,P(l)}),z(()=>l,P,{deep:!0});async function B(){_.value=!0;const t=await C.value.corpdata(g.state.userSettings.compendiumCorpLastRoleId);k.value=t,m=t.members,d.value=t.members.slice(0,V),_.value=!1}async function N(t){R(t.Name)?l.splice(l.indexOf(t.Name),1):l.push(t.Name)}function R(t){return l.includes(t)}function q(t){m.length&&(T.title=t.name,T.lvlMap=ce(t.tech,{map:([n,o])=>[ae(n),o[0]]}),b.value=!0)}function P(t){d.value=m.sort((n,o)=>{var e,s;return t.length&&!(t[0]in i)?(((e=o.tech[v(t[0])])==null?void 0:e[0])||0)-(((s=n.tech[v(t[0])])==null?void 0:s[0])||0):t[0]=="CargoCap"?i.CargoCap.formatter(o)-i.CargoCap.formatter(n):0}).slice(0,V)}function K(t){if(!l.length)return{};const n={},o=Object.fromEntries(l.map(e=>{var s;return e in i?[e,i[e].formatter(t)]:[e,(s=t.tech[v(e)])==null?void 0:s[0]]}).slice(ye*-1));for(const e in o){const s=n[e]={icon:{dir:"",name:""},level:o[e]};e in M?(s.icon.dir="game/Modules",s.icon.name=M[e].Icon):e in A?(s.icon.dir="game/Ships",s.icon.name=A[e].Model[5]):e in i?s.icon=i[e].icon:(s.icon.dir="game/SpaceBuildings",s.icon.name=re[e].PrefabModel)}return n}return(t,n)=>{const o=ne("t");return r(),c("div",null,[u(f(se),null,{default:E(()=>[a("title",null,h(f(X)),1)]),_:1}),u(ie,null,{default:E(()=>[a("div",ue,[a("div",{class:D(["filter",{disable:d.value.length>f(m).length}])},[a("div",null,[$(a("button",{class:"btn-tech-filter",onClick:n[0]||(n[0]=e=>L.value=!0)},null,512),[[o,"FILTER"]])]),a("div",de,[a("select",{onChange:n[1]||(n[1]=e=>I.value=e.target.value)},[(r(!0),c(y,null,S(k.value.roles,e=>(r(),c("option",{key:e.id,value:e.id,selected:I.value==e.id},h(e.name),9,me))),128))],32)])],2),a("ul",{class:D(["members-list",{"animated-fetch":_.value}])},[(r(!0),c(y,null,S(d.value,e=>(r(),c("li",{key:e.userId,class:"member",onClick:s=>q(e)},[a("div",fe,[a("div",ve,[a("img",{src:e.avatarUrl,alt:`${e.name} avatar`,onError:n[2]||(n[2]=s=>s.target.src=f(le))},null,40,_e)]),a("p",null,h(e.name),1)]),a("div",Ce,[a("ul",null,[(r(!0),c(y,null,S(K(e),(s,F)=>(r(),c("li",{key:F},[a("div",null,[u(H,{name:s.icon.name,dir:s.icon.dir},null,8,["name","dir"]),a("span",{k:F,class:"level"},h(s.level),9,he)])]))),128))])])],8,pe))),128))],2)])]),_:1}),u(G,{open:L.value,"onUpdate:open":n[4]||(n[4]=e=>L.value=e),title:t.$t("FILTER"),size:f(j).LARGE},{body:E(()=>[a("div",ge,[a("button",{class:"button accent",onClick:n[3]||(n[3]=e=>l.splice(0))},h(t.$t("RESET_ALL")),1),a("div",Ie,[a("section",Te,[$(a("h3",null,null,512),[[o,"TID_OBJECT_ACTION_PLAYER_INFO"]]),a("ul",null,[(r(),c(y,null,S(i,({icon:e},s)=>a("li",{key:s,class:"item"},[a("div",{class:D({mute:R(s)}),onClick:()=>N({Name:s})},[u(H,{name:e.name,dir:e.dir},null,8,["name","dir"])],10,Ee)])),64))])])]),u(J,{"on-click":N,"is-muted":R})])]),_:1},8,["open","title","size"]),u(G,{open:b.value,"onUpdate:open":n[5]||(n[5]=e=>b.value=e),title:T.title,size:f(j).LARGE},{body:E(()=>[u(J,{"level-map":T.lvlMap},null,8,["level-map"])]),_:1},8,["open","title","size"])])}}}),Fe=oe(Se,[["__scopeId","data-v-e67165a4"]]);export{Fe as default};
