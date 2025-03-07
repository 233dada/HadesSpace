import{a as j,s as q}from"./sec2str-Dm9_cOUT.js";import{d as E,aM as F,aN as W,a as V,b as r,f as e,F as M,B as S,o as u,A as B,t as m,_ as N,i as h,w,K as x,e as y,aB as z,h as G,L as T,aO as b,O as H,r as I,aG as J,z as O,y as K,N as L,u as k}from"./index-D6faf_Ri.js";const Y={class:"pagination"},Q=["onClick"],A=2,X=E({__name:"Pagination",props:F({maxPage:{}},{modelValue:{default:1,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup($){const d=$,n=W($,"modelValue",{set(a){return a<1&&(a=1),a>d.maxPage&&(a=d.maxPage),a}}),c=V(()=>{let a=Math.max(n.value-A,1),l=Math.min(n.value+A,d.maxPage);return l-a+1<5&&(a===1?l=Math.min(d.maxPage,a+4):l===d.maxPage&&(a=Math.max(1,l-4))),Array.from({length:l-a+1},(v,p)=>a+p)});return(a,l)=>(u(),r("ul",Y,[e("li",{class:"arrow prev",onClick:l[0]||(l[0]=v=>n.value=n.value-1)}),(u(!0),r(M,null,S(c.value,v=>(u(),r("li",{key:v,class:B({selected:v===a.$props.modelValue}),onClick:p=>n.value=v},m(v),11,Q))),128)),e("li",{class:"arrow next",onClick:l[1]||(l[1]=v=>n.value=n.value+1)})]))}}),U=N(X,[["__scopeId","data-v-2bf6673e"]]),Z={class:"label"},ee={key:0},se={key:1},te={key:0,class:"multiselect_list"},ae=["onClick"],le=["checked"],oe={class:"label"},ne=E({__name:"MultiSelect",props:F({options:{},displayField:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup($){const d=$,n=W($,"modelValue"),c=h(!1),a=h(),l=h(),v=V(()=>d.options.filter(i=>{var s,t;return(t=i[d.displayField])==null?void 0:t.toLowerCase().includes((s=l.value)==null?void 0:s.toLowerCase())}));function p(){var i;c.value=!c.value,c.value&&(l.value="",(i=a.value)==null||i.focus())}function _(i){n.value.includes(i)?n.value.splice(n.value.indexOf(i),1):n.value.push(i)}function P(){n.value=[]}return(i,s)=>{const t=I("t"),g=I("click-outside");return w((u(),r("div",{class:B(["multiselect",{__active:c.value}])},[x(i.$slots,"default",{selected:n.value,toggleDropdown:p},()=>[e("button",{class:"multiselect_btn",onClick:p},[w(e("input",{ref_key:"filterInput",ref:a,"onUpdate:modelValue":s[0]||(s[0]=f=>l.value=f),type:"text",onClick:s[1]||(s[1]=b(()=>{},["stop"]))},null,512),[[H,l.value]]),w(e("div",Z,[x(i.$slots,"label",{},()=>[n.value.length?(u(),r("p",ee,m(i.$t("SELECTED",[n.value.length])),1)):w((u(),r("p",se,null,512)),[[t,"SELECT"]])],!0)],512),[[J,!c.value]]),c.value?T("",!0):(u(),r("div",{key:0,class:"clear",onClick:b(P,["stop"])})),s[2]||(s[2]=e("div",{class:"arrow"},null,-1))])],!0),y(z,{name:"list"},{default:G(()=>[c.value?(u(),r("ul",te,[(u(!0),r(M,null,S(v.value,(f,C)=>(u(),r("li",{key:C,onClick:o=>_(f)},[e("input",{type:"checkbox",checked:i.$props.modelValue.includes(f)},null,8,le),e("span",oe,m(f[i.$props.displayField]),1)],8,ae))),128))])):T("",!0)]),_:1})],2)),[[g,()=>c.value=!1]])}}}),ie=N(ne,[["__scopeId","data-v-a8cdb687"]]),re={class:"filters"},ue={class:"label"},de={class:"list"},ce={class:"corp-names"},pe={class:"score"},me={class:"corp-info"},ve={class:"corp-info"},fe={key:0},_e={key:1},R="https://ws.mentalisit.myds.me/",ge=E({__name:"WSMatches",setup($){const d=new URL("matches",R),n=new URL("corps",R),c=new Date,a=h(),l=h([]),v=V(()=>{var s;return(((s=a.value)==null?void 0:s.matches)||[]).map(t=>({...t,DateEnded:new Date(t.DateEnded)}))}),p=h(1),_=h([]);d.searchParams.set("limit","50"),O(p,()=>{window.scrollTo({top:0,behavior:"smooth"}),d.searchParams.set("page",p.value.toString()),P()},{immediate:!0}),O(_,()=>{_.value.length==0?d.searchParams.delete("filter"):d.searchParams.set("filter",JSON.stringify({corp:_.value})),p.value=1,P()},{deep:!0}),K(async()=>{l.value=await fetch(n).then(s=>s.json()).then(s=>s.matches)});async function P(){a.value=await fetch(d).then(s=>s.json())}function i(s){const t=l.value.find(g=>g.Id==s);if(t){const[g,f,C,o]=Object.entries(t).filter(([D])=>!["Name","Id"].includes(D)).map(([,D])=>D);return`[W:${g}/L:${f}/D:${C}/E:${o}]`}}return(s,t)=>{var f,C;const g=I("t");return u(),r("div",null,[e("div",re,[e("div",null,[w(e("p",ue,null,512),[[g,"TID_OTHER_PLAYER_INFO_PAGE_CORP_SECTION"]]),y(ie,{modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=o=>_.value=o),options:l.value,"display-field":"Name"},null,8,["modelValue","options"])])]),y(U,{modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=o=>p.value=o),"max-page":((f=a.value)==null?void 0:f.MaxPage)||1},null,8,["modelValue","max-page"]),e("ul",de,[(u(!0),r(M,null,S(v.value,o=>(u(),r("li",{key:o.MatchId},[e("div",null,[e("p",ce,[e("span",null,m(o.Corporation1Name),1),t[3]||(t[3]=e("span",{class:"vs-icon"},null,-1)),e("span",null,m(o.Corporation2Name),1)]),e("p",pe,[e("span",me,m(i(o.Corporation1Id)),1),e("span",null,m(o.Corporation1Score),1),t[4]||(t[4]=e("span",null," - ",-1)),e("span",null,m(o.Corporation2Score),1),e("span",ve,m(i(o.Corporation2Id)),1)]),o.DateEnded-k(c)>0?(u(),r("p",fe,[e("span",null,m(s.$t("TID_WS_PREPARATION_ENDS_IN",[k(j)((o.DateEnded-k(c))/1e3)])),1)])):(u(),r("p",_e,[e("span",null,m(s.$t("TID_WS_ENDED"))+" "+m(`(${s.$t("TID_SOCIAL_TIMESTAMP",[k(q)((k(c)-o.DateEnded)/1e3)])})`),1)]))])]))),128))]),y(U,{modelValue:p.value,"onUpdate:modelValue":t[2]||(t[2]=o=>p.value=o),"max-page":((C=a.value)==null?void 0:C.MaxPage)||1},null,8,["modelValue","max-page"]),t[5]||(t[5]=e("div",{class:"footer"},[e("div",{class:"content"},[e("p",null,[L("Powered by "),e("a",{href:"https://ws.mentalisit.myds.me",target:"_blank"},"ws.mentalisit.myds.me"),L(" API ")])])],-1))])}}}),Ce=N(ge,[["__scopeId","data-v-6335f7b1"]]);export{Ce as default};
