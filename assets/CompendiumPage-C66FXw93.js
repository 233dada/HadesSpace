import{d as F,g as K,i as u,a as y,y as J,D as U,v as o,E as Y,s as q,G as B,J as L,b as r,f as e,K as z,e as Z,L as f,u as p,t as i,F as H,B as Q,w as C,N as W,h as x,M as X,o as c,O as j,P as $,A as ee,S as te,r as ae,_ as le}from"./index-D6faf_Ri.js";const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEe0lEQVR4nN1av2tUQRAeIaDGIkpAwbsE1MJGCzHkQAwGrFN4tWJjo5CAiCaNSLBJDCJ4hRaCCNZn4T+QwiZBsbIW1BMMgr8wIgTifHe75N3e7Lu3v3IXP/iK2/fevPl2Z+ftzt7A08YmJUKJOc48wSwrDqpr68yPzE/Md8xVZiOFEwMJbELYNLOScw+EHlc8r9pWmDWKLDSmwCLC8lBRrCtGERpLIEIR4soRbFWVPYzmaqixGALPMu8WuA/zTY8KRjuvM3BtkXmb+SrEuVCB6Ok8cQg1zC3bSOB5hGXVch22ZylgJEMEYhQWLdeKJoxVRXSEbf7iHRfJc06GCJy2tD9kvnC0BefnmBeYM5Z3zZEHfAXCEam3fcRloZ81RVbUO51t+wqU5kydwsRpwEZZeEeVtkngOHVmQGTIGsVDTXhPWbU5JRwfgVJo1ik+YFMK1eQCzxm/NyhOaJqAzWvU7iPe7RQprgIPMIeNtuDVRg5g+0zm97Dy4VtRA64CjwltSXYBObbhw+uiBlwF7hXaPlM6SLYlH6xwFbhHaPtF6SDZlnywwlXgutB2kNJBsi35YIWrwK9C2yFKB8m25IMVrgI/MFHj2JVpO0npYNreVD4UhqvAP9TKbNkVxlFq7SxiZ9OSsp1FQ/lQGD4fenybzKUa1okxl2rapvRuJ/gIrJO8EI5WR6HW6NkW9E7wEQgR2NCaa9IF5iWKgwWhbYU8OtB3u4RwNAUibJeYNykMSyTXa7ymgK9A9KQUqmPU6n2f+qYuO44J17zDP6RkIe3ZAF3fdNnd20oVQNBeM7SqhjrJfZI/yDOKL5lvme+Z39W1/cwjzFPMqRz7X8izFqMRKhBhc4NaYWmrc05RvggbMHJzFJiZYxR+dUXsOcVDFHFAjMIvEo3veYQNiAZ0GD4NSDDbXviNeRaRB52wdKJJvpJBKr/OPO3wzF/aCjW9gT2csbe7gA19VvGG+YAcQtdFYF4qzwK9jZ7WK49uzpQUMVLSZycLdCxCt/AnqKhAhGO1yz2+53q6E3T46XVo3vvQ0eiIrt/HbgL3UesIy5ZEfjCfUdyyIcTWFBE1l5lDwn3oAHQGTqB+24x1E/iY7CET9STWAnQcRtY2ouh4+Ghd5OcJzPt4B53ZOUKPKOa0dFwHH+GruOKxCbSd1SEL3qK0o2YDOhTnhPdoKwtrwFf43DEnJYGIeykcIO4q8yf1Dg3lwyPqFAmfkcHb8oEpEJP2imBYL516KU4DPiCKpCkE39v+c2MKxDAPUieirAsjwrb+he9tp8FZgfoPASZmqb/EacAn+GYmHr1gaCbBrEBp3i3T9mVLH8C3Zeak0V4lQ6BeKpl4Qv0P+DhptEFLs1arBdpKdP0YmiZs9aFmrVYLHBceTHEsnQqSwKYmCJT+VuVVg+whpFotNJUgcEJ4YIV2HqRi9AQEjgg393PmtEHyecQmcCeFp4bkc1PgqHAhezawQf2NvB3RKC5Km8nYVbJeYSjFf7b7ChC4Rmn/SNBLrEHgPPMO/X8iMXDz/wAiqusPTmWIpwAAAABJRU5ErkJggg==",se={class:"header"},ne={class:"content"},oe={key:0,class:"select alt-switch"},ue=["value"],re={value:"default"},ie=["value"],ce={key:0,class:"logged fetching"},ve={class:"avatar"},de=["src"],me=["src"],ge={class:"avatar"},pe=["src","alt"],Ae=["src","alt"],_e={key:2,class:"not-logged"},Ce={class:"footer"},Ee={class:"content"},Ie=["href"],fe={class:"input"},he={class:"name"},we={class:"error-msg"},Ne=["href"],Se={class:"select switch-client"},Re=F({__name:"CompendiumPage",setup(De){const P=/[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}/,w=q(),A=Y(),{t:E}=K(),v=u(!1),d=u(""),I=u(""),s=u(!1),n=u(),m=u(),_=u(localStorage.getItem("compendium_client")?parseInt(localStorage.getItem("compendium_client"),10):0),N=y(()=>_.value===0?"https://hs-compendium.com/":"https://compendiumnew.mentalisit.myds.me/links"),V=y(()=>_.value===0?"HS Compendium":"invite");J(async()=>{s.value=!0,await U();const l=o.value.getUser();s.value=!1,l?(n.value=l,m.value=o.value.getGuild()):(v.value=!0,"client"in A.currentRoute.value.query&&(_.value=parseInt(A.currentRoute.value.query.client,10),R(parseInt(A.currentRoute.value.query.client,10))),"c"in A.currentRoute.value.query&&(d.value=A.currentRoute.value.query.c,await S()))});async function S(){let l;if(!d.value){I.value=E("CANNOT_BE_EMPTY");return}if(!P.test(d.value)){I.value=E("INCORRECT_CODE");return}s.value=!0;try{l=await o.value.checkConnectCode(d.value)}catch(g){I.value=g.toString(),console.error(g),s.value=!1;return}s.value=!1,v.value=!1,await w.dispatch(B.OPEN_CONFIRM,E("CONFIRM_LOGIN",[l.guild.name,l.user.username])).catch(()=>(v.value=!0,!0))||(s.value=!0,await o.value.connect(l),n.value=o.value.getUser(),m.value=o.value.getGuild(),s.value=!1)}function G(l){o.value.switchAlt(l)}function R(l){s.value=!0,L(l).then(()=>{s.value=!1})}function M(){w.dispatch(B.OPEN_CONFIRM,E("TID_SETTINGS_DLG_SIGN_OUT")).then(()=>{o.value.logout(),n.value=void 0,m.value=void 0}).catch(()=>{})}return(l,t)=>{var D,b,T,O;const g=ae("t");return c(),r("div",null,[e("div",se,[e("div",ne,[e("div",null,[(b=(D=n.value)==null?void 0:D.alts)!=null&&b.length?(c(),r("div",oe,[e("select",{value:p(o).selectedAlt,onChange:t[0]||(t[0]=a=>G(a.target.value))},[e("option",re,i((T=n.value)==null?void 0:T.username),1),(c(!0),r(H,null,Q((O=n.value)==null?void 0:O.alts,(a,k)=>(c(),r("option",{key:k,value:a},i(a),9,ie))),128))],40,ue)])):f("",!0)]),s.value&&!n.value?(c(),r("div",ce,[e("div",ve,[e("img",{src:p(h),alt:"memberImage avatar"},null,8,de),e("img",{src:p(h),alt:"memberImage avatar"},null,8,me)]),t[8]||(t[8]=e("p",null,null,-1))])):f("",!0),n.value?(c(),r("div",{key:1,class:"logged",onClick:M},[e("div",ge,[e("img",{src:m.value.url,alt:`${m.value.name} icon`,onError:t[1]||(t[1]=a=>a.target.src=p(h))},null,40,pe),e("img",{src:n.value.avatarUrl,alt:`${n.value.username} avatar`,onError:t[2]||(t[2]=a=>a.target.src=p(h))},null,40,Ae)]),e("div",null,[e("p",null,i(m.value.name),1),e("p",null,i(n.value.username),1)])])):f("",!0),!s.value&&!n.value?(c(),r("div",_e,[C(e("span",null,null,512),[[g,"TID_SETTINGS_DLG_NOT_SIGNED_IN"]]),e("button",{class:"button accent",onClick:t[3]||(t[3]=a=>v.value=!0)},i(l.$t("TID_SETTINGS_DLG_SIGN_IN")),1)])):f("",!0)])]),z(l.$slots,"default",{},void 0,!0),e("div",Ce,[e("div",Ee,[e("p",null,[t[9]||(t[9]=W("Powered by ")),e("a",{href:N.value,target:"_blank"},"HS Compendium",8,Ie)])])]),Z(X,{open:v.value,"onUpdate:open":t[7]||(t[7]=a=>v.value=a),title:l.$t("TID_SETTINGS_DLG_SIGN_IN"),size:p(te).SMALL},{body:x(()=>[e("div",fe,[e("p",he,[C(e("span",null,null,512),[[g,"ENTER_CODE"]]),e("span",we,i(I.value),1)]),C(e("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>d.value=a)},null,512),[[j,d.value]])]),e("a",{href:N.value,target:"_blank"},i(V.value),9,Ne),e("div",Se,[C(e("select",{"onUpdate:modelValue":t[5]||(t[5]=a=>_.value=a),onChange:t[6]||(t[6]=a=>R(a.target.value))},t[10]||(t[10]=[e("option",{value:0},"Default client",-1),e("option",{value:1},"Client from Mentalisit",-1)]),544),[[$,_.value]])]),e("div",{class:ee(["code-req-btn-wrap",{disable:s.value}])},[C(e("button",{class:"button accent",onClick:S},null,512),[[g,"TID_LINK_DEVICE_DLG_SUBMIT_CODE_BTN"]])],2)]),_:1},8,["open","title","size"])])}}}),Te=le(Re,[["__scopeId","data-v-e7a0742d"]]);export{Te as C,h as m};
