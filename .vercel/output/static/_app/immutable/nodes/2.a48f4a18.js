import{s as ie,f as se,r as ue}from"../chunks/scheduler.48c2277c.js";import{S as fe,i as ce,g as a,s as h,m as x,h as r,y as D,c as p,j as T,f as c,n as L,k as A,z as Q,a as lt,x as t,A as yt,B as Ct,C as ae,o as J,d as At,b as de,t as $t,D as ve,E as te,p as _e,F as he}from"../chunks/index.566aac59.js";function ee(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function pe(e){const s=e-1;return s*s*s+1}function le(e,{delay:s=0,duration:v=400,easing:C=pe,start:I=0,opacity:i=0}={}){const o=getComputedStyle(e),g=+o.opacity,O=o.transform==="none"?"":o.transform,B=1-I,N=g*(1-i);return{delay:s,duration:v,easing:C,css:(_,b)=>`
			transform: ${O} scale(${1-B*b});
			opacity: ${g-N*b}
		`}}function ne(e,s,v){const C=e.slice();return C[10]=s[v],C}function oe(e){let s,v=e[10].pagar+"",C,I,i=e[10].porce+"",o,g,O=e[10].total+"",B,N,_=e[10].moneda+"",b,W,P,m;return{c(){s=a("li"),C=x(v),I=x(" Bs + "),o=x(i),g=x(" = "),B=x(O),N=h(),b=x(_),W=h()},l(E){s=r(E,"LI",{});var u=T(s);C=L(u,v),I=L(u," Bs + "),o=L(u,i),g=L(u," = "),B=L(u,O),N=p(u),b=L(u,_),W=p(u),u.forEach(c)},m(E,u){lt(E,s,u),t(s,C),t(s,I),t(s,o),t(s,g),t(s,B),t(s,N),t(s,b),t(s,W),m=!0},p(E,u){(!m||u&16)&&v!==(v=E[10].pagar+"")&&J(C,v),(!m||u&16)&&i!==(i=E[10].porce+"")&&J(o,i),(!m||u&16)&&O!==(O=E[10].total+"")&&J(B,O),(!m||u&16)&&_!==(_=E[10].moneda+"")&&J(b,_)},i(E){m||(E&&se(()=>{m&&(P||(P=te(s,le,{},!0)),P.run(1))}),m=!0)},o(E){E&&(P||(P=te(s,le,{},!1)),P.run(0)),m=!1},d(E){E&&c(s),E&&P&&P.end()}}}function Ce(e){let s,v='<div class="container"><ul><li><strong>Calculadora de Propina</strong></li></ul></div>',C,I,i,o,g,O="Calculadora",B,N,_,b,W="Total de factura:",P,m,E,u,U,Ut="Bs",j,jt="Usd",gt,S,q,qt="10%",G,Gt="15%",M,Mt="20%",mt,w,Et,rt,Tt,X,kt="Resultados",bt,z,H,Y,wt="Propina:",Ot,nt,it,It,ot,ut,Nt,ft,Bt,F,R,Z,zt="Total:",Pt,st,ct,Dt,at,dt,St,vt,Vt,y,Ft="Historial",xt,$,k,Lt,Jt,K=ee(e[4]),f=[];for(let l=0;l<K.length;l+=1)f[l]=oe(ne(e,K,l));const re=l=>$t(f[l],1,1,()=>{f[l]=null});return{c(){s=a("nav"),s.innerHTML=v,C=h(),I=a("hr"),i=h(),o=a("main"),g=a("h3"),g.textContent=O,B=h(),N=a("div"),_=a("div"),b=a("label"),b.textContent=W,P=h(),m=a("input"),E=h(),u=a("select"),U=a("option"),U.textContent=Ut,j=a("option"),j.textContent=jt,gt=h(),S=a("select"),q=a("option"),q.textContent=qt,G=a("option"),G.textContent=Gt,M=a("option"),M.textContent=Mt,mt=h(),w=a("button"),Et=x("Calcular"),Tt=h(),X=a("h3"),X.textContent=kt,bt=h(),z=a("div"),H=a("div"),Y=a("strong"),Y.textContent=wt,Ot=h(),nt=a("p"),it=x(e[2]),It=h(),ot=a("strong"),ut=x(e[3]),Nt=h(),ft=a("div"),Bt=h(),F=a("div"),R=a("div"),Z=a("strong"),Z.textContent=zt,Pt=h(),st=a("p"),ct=x(e[5]),Dt=h(),at=a("strong"),dt=x(e[3]),St=h(),vt=a("div"),Vt=h(),y=a("h3"),y.textContent=Ft,xt=h(),$=a("ol");for(let l=0;l<f.length;l+=1)f[l].c();this.h()},l(l){s=r(l,"NAV",{"data-svelte-h":!0}),D(s)!=="svelte-12aqi51"&&(s.innerHTML=v),C=p(l),I=r(l,"HR",{}),i=p(l),o=r(l,"MAIN",{class:!0});var n=T(o);g=r(n,"H3",{"data-svelte-h":!0}),D(g)!=="svelte-16hb5vj"&&(g.textContent=O),B=p(n),N=r(n,"DIV",{class:!0});var d=T(N);_=r(d,"DIV",{class:!0});var V=T(_);b=r(V,"LABEL",{for:!0,"data-svelte-h":!0}),D(b)!=="svelte-1f9jkyp"&&(b.textContent=W),P=p(V),m=r(V,"INPUT",{id:!0,type:!0}),E=p(V),u=r(V,"SELECT",{});var Ht=T(u);U=r(Ht,"OPTION",{"data-svelte-h":!0}),D(U)!=="svelte-1u8pesf"&&(U.textContent=Ut),j=r(Ht,"OPTION",{"data-svelte-h":!0}),D(j)!=="svelte-1urdg36"&&(j.textContent=jt),Ht.forEach(c),gt=p(V),S=r(V,"SELECT",{});var _t=T(S);q=r(_t,"OPTION",{"data-svelte-h":!0}),D(q)!=="svelte-8nf2wm"&&(q.textContent=qt),G=r(_t,"OPTION",{"data-svelte-h":!0}),D(G)!=="svelte-q2n9d9"&&(G.textContent=Gt),M=r(_t,"OPTION",{"data-svelte-h":!0}),D(M)!=="svelte-17xpcu9"&&(M.textContent=Mt),_t.forEach(c),V.forEach(c),d.forEach(c),mt=p(n),w=r(n,"BUTTON",{});var Kt=T(w);Et=L(Kt,"Calcular"),Kt.forEach(c),Tt=p(n),X=r(n,"H3",{"data-svelte-h":!0}),D(X)!=="svelte-13lpdpm"&&(X.textContent=kt),bt=p(n),z=r(n,"DIV",{class:!0});var ht=T(z);H=r(ht,"DIV",{class:!0});var tt=T(H);Y=r(tt,"STRONG",{"data-svelte-h":!0}),D(Y)!=="svelte-1jt1qvh"&&(Y.textContent=wt),Ot=p(tt),nt=r(tt,"P",{});var Qt=T(nt);it=L(Qt,e[2]),Qt.forEach(c),It=p(tt),ot=r(tt,"STRONG",{});var Wt=T(ot);ut=L(Wt,e[3]),Wt.forEach(c),tt.forEach(c),Nt=p(ht),ft=r(ht,"DIV",{}),T(ft).forEach(c),ht.forEach(c),Bt=p(n),F=r(n,"DIV",{class:!0});var pt=T(F);R=r(pt,"DIV",{class:!0});var et=T(R);Z=r(et,"STRONG",{"data-svelte-h":!0}),D(Z)!=="svelte-1h3ll1s"&&(Z.textContent=zt),Pt=p(et),st=r(et,"P",{});var Xt=T(st);ct=L(Xt,e[5]),Xt.forEach(c),Dt=p(et),at=r(et,"STRONG",{});var Yt=T(at);dt=L(Yt,e[3]),Yt.forEach(c),et.forEach(c),St=p(pt),vt=r(pt,"DIV",{}),T(vt).forEach(c),pt.forEach(c),Vt=p(n),y=r(n,"H3",{"data-svelte-h":!0}),D(y)!=="svelte-1mg520h"&&(y.textContent=Ft),xt=p(n),$=r(n,"OL",{});var Zt=T($);for(let Rt=0;Rt<f.length;Rt+=1)f[Rt].l(Zt);Zt.forEach(c),n.forEach(c),this.h()},h(){A(b,"for","inpTot"),A(m,"id","inpTot"),A(m,"type","number"),U.__value="Bs",Q(U,U.__value),j.__value="Usd",Q(j,j.__value),q.__value="10%",Q(q,q.__value),G.__value="15%",Q(G,G.__value),M.__value="20%",Q(M,M.__value),e[1]===void 0&&se(()=>e[9].call(S)),A(_,"class","grid"),A(N,"class","grid"),w.disabled=rt=!e[0]||e[0]<0,A(H,"class","grid"),A(z,"class","grid"),A(R,"class","grid"),A(F,"class","grid"),A(o,"class","container")},m(l,n){lt(l,s,n),lt(l,C,n),lt(l,I,n),lt(l,i,n),lt(l,o,n),t(o,g),t(o,B),t(o,N),t(N,_),t(_,b),t(_,P),t(_,m),Q(m,e[0]),t(_,E),t(_,u),t(u,U),t(u,j),t(_,gt),t(_,S),t(S,q),t(S,G),t(S,M),yt(S,e[1],!0),t(o,mt),t(o,w),t(w,Et),t(o,Tt),t(o,X),t(o,bt),t(o,z),t(z,H),t(H,Y),t(H,Ot),t(H,nt),t(nt,it),t(H,It),t(H,ot),t(ot,ut),t(z,Nt),t(z,ft),t(o,Bt),t(o,F),t(F,R),t(R,Z),t(R,Pt),t(R,st),t(st,ct),t(R,Dt),t(R,at),t(at,dt),t(F,St),t(F,vt),t(o,Vt),t(o,y),t(o,xt),t(o,$);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m($,null);k=!0,Lt||(Jt=[Ct(m,"input",e[8]),Ct(u,"input",e[7]),Ct(S,"change",e[9]),Ct(w,"click",e[6])],Lt=!0)},p(l,[n]){if(n&1&&ae(m.value)!==l[0]&&Q(m,l[0]),n&2&&yt(S,l[1]),(!k||n&1&&rt!==(rt=!l[0]||l[0]<0))&&(w.disabled=rt),(!k||n&4)&&J(it,l[2]),(!k||n&8)&&J(ut,l[3]),(!k||n&32)&&J(ct,l[5]),(!k||n&8)&&J(dt,l[3]),n&16){K=ee(l[4]);let d;for(d=0;d<K.length;d+=1){const V=ne(l,K,d);f[d]?(f[d].p(V,n),At(f[d],1)):(f[d]=oe(V),f[d].c(),At(f[d],1),f[d].m($,null))}for(_e(),d=K.length;d<f.length;d+=1)re(d);de()}},i(l){if(!k){for(let n=0;n<K.length;n+=1)At(f[n]);k=!0}},o(l){f=f.filter(Boolean);for(let n=0;n<f.length;n+=1)$t(f[n]);k=!1},d(l){l&&(c(s),c(C),c(I),c(i),c(o)),ve(f,l),Lt=!1,ue(Jt)}}}function ge(e,s,v){let C,I,i=0,o="10%",g="Bs",O=[];function B(){O.push({pagar:i,porce:o,propina:C,total:I,moneda:g}),v(4,O),console.log(O)}function N(){console.log(i),g=="Bs"?(v(0,i=i*6.96),v(3,g="Usd")):(v(0,i=i/6.96),v(3,g="Bs"))}function _(){i=ae(this.value),v(0,i)}function b(){o=he(this),v(1,o)}return e.$$.update=()=>{e.$$.dirty&3&&v(2,C=i*(o.slice(0,-1)/100)),e.$$.dirty&5&&v(5,I=i+C)},[i,o,C,g,O,I,B,N,_,b]}class Te extends fe{constructor(s){super(),ce(this,s,ge,Ce,ie,{})}}export{Te as component};
