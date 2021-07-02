(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{20:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r,o,a,c,i,u,s,l,d,b,p,x,f,h,j,g,m,O,v,y,k,w,C,z,S,A,F,T=t(1),I=t.n(T),E=t(10),B=t.n(E),D=(t(20),t(3)),P=t(2),L=P.default.div(r||(r=Object(D.a)(["\n  margin: 0 auto;\n  max-width: 550px;\n  padding: 0 20px 0 20px;\n  color: ",";\n"])),(function(n){return n.theme.color.primary})),R=P.default.h1(o||(o=Object(D.a)(["\n  padding-bottom: 10px;\n  font-size: 30px;\n  line-height: 1.5;\n  letter-spacing: 2px;\n  word-spacing: 4px;\n  text-align: center;\n"]))),G=t(0),q=function(n){var e=n.title;return Object(G.jsx)("header",{children:Object(G.jsx)(R,{children:e})})},J=P.default.footer(a||(a=Object(D.a)(["\n  text-align: center;\n  padding: 30px;\n  font-size: 18px;\n"]))),M=t(4),N=P.default.p(c||(c=Object(D.a)(["\n  padding-left: 20px;\n  font-size: 20px;\n  color: ",";\n"])),(function(n){return n.theme.color.tertiary})),Y=function(n){var e=n.result;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(N,{children:["cash in: ",null===e||void 0===e?void 0:e.amount," ",e.currencyFrom]}),Object(G.jsxs)(N,{children:["cash out: ",e.calculatedAmount?e.calculatedAmount.toFixed(2):""," ",e.currencyTo]})]})},U=P.default.div(i||(i=Object(D.a)(["\n   position: relative;\n"]))),H=P.default.select(u||(u=Object(D.a)(["\n  padding: 8px 30px 8px 10px;\n  font-size: 16px;\n  letter-spacing: 2px;\n  background-color: ",";\n  box-shadow: 0 10px 20px ",";\n  border: none;\n  border-radius: 3px;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  outline: none;\n  min-height: 35px;\n  width: 100%;\n  color: ",";\n\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 2px ",";\n  }\n\n  @media (min-width: ","px) {\n    padding: 15px;\n    font-size: 18px;\n  }\n  cursor: pointer; \n"])),(function(n){return n.theme.backgroundColor.field}),(function(n){return n.theme.accent.darkShadow}),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.breakpoint.ipad})),K="5px",Q=P.default.span(s||(s=Object(D.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 2rem;\n  background-color: ",";\n  pointer-events: none;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n\n  &::before,\n  &::after {\n    ",";\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n  }\n\n  &::before {\n    border-left: "," solid transparent;\n    border-right: "," solid transparent;\n    border-top: "," solid ",";\n  }\n"])),(function(n){return n.theme.accent.boxArrow}),K,K,K,K,(function(n){return n.theme.accent.arrow})),V=P.default.label(l||(l=Object(D.a)(["\n  margin-top: 120px;\n"]))),W=P.default.span(d||(d=Object(D.a)(["\n  display: inline-block;\n  padding: 8px;\n  margin-bottom: 5px;\n  font-size: 15px;\n  color: ",";\n  letter-spacing: 1px;\n  word-spacing: 3px;\n  background-color: ",";\n"])),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.backgroundColor.label})),X=P.default.div(b||(b=Object(D.a)(["\n  position: relative;\n"]))),Z=Object(P.default)(H)(p||(p=Object(D.a)(["  \n  &::placeholder {\n    color: ",";\n  }\n"])),(function(n){return n.theme.color.primary})),$=function(n){var e=n.amount,t=n.setAmount,r=n.inputTypedAmount,o=n.currencyFrom;return Object(G.jsxs)(V,{children:[Object(G.jsxs)(W,{children:["Amount in ",o,"*:"]}),Object(G.jsx)(X,{children:Object(G.jsx)(Z,{ref:r,value:e,onChange:function(n){var e=n.target;return t(e.value)},type:"number",name:"amount",min:"0.01",step:"0.01",placeholder:"type here",required:!0,as:"input"})})]})},_=function(n){var e=n.rates,t=n.value,r=n.onChange;return Object(G.jsxs)(U,{children:[Object(G.jsx)(H,{value:t,onChange:function(n){var e=n.target;return r(e.value)},children:Object.keys(e).map((function(n){return Object(G.jsx)("option",{value:n,children:n},n)}))}),Object(G.jsx)(Q,{})]})},nn=P.default.button(x||(x=Object(D.a)(["\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  padding: 10px 15px;\n  border-radius: 3px;\n  border: none;\n  color: ",";\n  background-color: ",";\n  box-shadow: 0 10px 20px ",";\n  letter-spacing: 1px;\n  outline: none;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: all .3s ease-in-out;\n\n  &:hover {\n    transform: translateY(-1px);\n  }\n\n  &:focus {\n    border: 2px solid ",";\n  }\n\n  &:active {\n    background-color: ",";\n    transform: translateY(3px);\n  }\n"])),(function(n){return n.theme.color.primary}),(function(n){return n.theme.button.backgroundColor}),(function(n){return n.theme.accent.darkShadow}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.button.active})),en=function(n){var e=n.title;return Object(G.jsx)(nn,{children:e})},tn=P.default.div(f||(f=Object(D.a)(["\n  margin: 50px 0 25px 0;\n  text-align: center;\n  background-color: ",";\n  border-radius: 3px;\n"])),(function(n){return n.theme.backgroundColor.boxClock})),rn=P.default.p(h||(h=Object(D.a)(["\n  padding: 8px 0 8px 0;\n  font-size: 20px;\n  color: ",";\n  line-height: 1.8;\n  letter-spacing: 3px;\n  word-spacing: 2px;\n"])),(function(n){return n.theme.color.secondary})),on=function(){var n=function(){var n=Object(T.useState)(new Date),e=Object(M.a)(n,2),t=e[0],r=e[1];return Object(T.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){return clearInterval(n)}}),[]),t}().toLocaleString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit",second:"2-digit"});return Object(G.jsx)(tn,{children:Object(G.jsx)(rn,{children:n})})},an=t(8),cn=t.n(an),un=t(14),sn=function(){var n=Object(T.useState)({status:"loading",date:null,rates:null}),e=Object(M.a)(n,2),t=e[0],r=e[1];return Object(T.useEffect)((function(){var n="https://api.exchangerate.host/latest";setTimeout(function(){var e=Object(un.a)(cn.a.mark((function e(){var t,o,a,c;return cn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(t.statusText);case 6:return e.next=8,t.json();case 8:o=e.sent,a=o.date,c=o.rates,r({date:a,rates:c,status:"success"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),r({status:"error"});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),1e3)}),[]),t},ln=P.default.div(j||(j=Object(D.a)([" \n  width: 100%;\n  min-height: 500px;\n  padding: 20px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]))),dn=Object(P.keyframes)(g||(g=Object(D.a)([" \n  from {\n    transform: none;\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),bn=P.default.div(m||(m=Object(D.a)([" \n  width: 40px;\n  height: 40px;\n  margin: 50px auto;\n  border: solid 4px ",";\n  border-top: solid 5px ",";\n  border-radius: 50%;\n  animation: "," 1.5s linear infinite;\n"])),(function(n){return n.theme.accent.border}),(function(n){return n.theme.accent.borderTop}),dn),pn=P.default.p(O||(O=Object(D.a)(["\n  font-size: 25px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.color.primary})),xn=function(){var n=sn().status;return Object(G.jsxs)(ln,{children:["loading"===n&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(bn,{}),Object(G.jsx)(pn,{children:"Updating data from the European Central Bank"})]}),"error"===n&&Object(G.jsx)(pn,{children:"Something went wrong. Please check your internet connection and try again later."})]})},fn=P.default.fieldset(v||(v=Object(D.a)(["\n  box-shadow: 6px 6px 19px 0px ",";\n  border-radius: 5px;\n  border: none;\n  background-image: url(",");\n  background-position: left;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative; \n  z-index: 30;\n\n  &::after {\n    content: '';\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: ",";\n    border-radius: 5px;\n    position: absolute;\n    z-index: -10;\n  }\n"])),(function(n){return n.theme.accent.greyShadow}),(function(n){return n.theme.image.url}),(function(n){return n.theme.backgroundColor.fieldsetOverlay})),hn=P.default.p(y||(y=Object(D.a)(["\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: 3px;\n  word-spacing: 2px;\n  color: ",";\n  background-color: ",";\n  max-width: 180px;\n  padding: 5px;\n"])),(function(n){return n.theme.color.tertiary}),(function(n){return n.theme.backgroundColor.label})),jn=P.default.li(k||(k=Object(D.a)(["\n  ",";\n\n  ","\n"])),(function(n){return n.secondItem&&Object(P.css)(w||(w=Object(D.a)(["\n    margin: 30px 0 30px;\n  "])))}),(function(n){return n.lastItem&&Object(P.css)(C||(C=Object(D.a)(["\n    display: flex;\n    align-items: left;\n    flex-direction: column;\n    width: 100%;\n    margin-top: 35px;\n    background-color: ",";\n  "])),(function(n){return n.theme.backgroundColor.label}))})),gn=P.default.ul(z||(z=Object(D.a)(["\n  padding: 10px;\n  list-style: none;\n"]))),mn=P.default.span(S||(S=Object(D.a)(["\n  display: inline-block;\n  padding: 8px;\n  margin-bottom: 5px;\n  font-size: 15px;\n  color: ",";\n  letter-spacing: 1px;\n  word-spacing: 3px;\n  background-color: ",";\n"])),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.backgroundColor.label})),On=P.default.p(A||(A=Object(D.a)(["\n  margin-top: 40px;\n  font-size: 15px;\n  text-align: right;\n  color: ",";\n"])),(function(n){return n.theme.color.tertiary})),vn=function(){var n=Object(T.useState)(),e=Object(M.a)(n,2),t=e[0],r=e[1],o=Object(T.useState)("GBP"),a=Object(M.a)(o,2),c=a[0],i=a[1],u=Object(T.useState)("PLN"),s=Object(M.a)(u,2),l=s[0],d=s[1],b=Object(T.useState)({}),p=Object(M.a)(b,2),x=p[0],f=p[1],h=sn(),j=Object(T.useRef)();return"success"!==h.status?Object(G.jsx)(xn,{}):Object(G.jsx)("form",{onSubmit:function(n){n.preventDefault(),function(){var n=h.rates[c],e=h.rates[l];f({amount:t,calculatedAmount:+t*e/n,currencyFrom:c,currencyTo:l})}(),j.current.value=""},children:Object(G.jsxs)(fn,{children:[Object(G.jsx)(hn,{children:"*fields required"}),Object(G.jsx)(on,{}),Object(G.jsxs)(gn,{children:[Object(G.jsx)(jn,{children:Object(G.jsxs)("label",{children:[Object(G.jsx)(mn,{children:"Currency from*:"}),Object(G.jsx)(_,{rates:h.rates,value:c,onChange:i})]})}),Object(G.jsx)(jn,{secondItem:!0,children:Object(G.jsxs)("label",{children:[Object(G.jsx)(mn,{children:"Currency to*:"}),Object(G.jsx)(_,{rates:h.rates,value:l,onChange:d})]})}),Object(G.jsx)(jn,{children:Object(G.jsx)($,{setAmount:r,inputTypedAmount:j,currencyFrom:c})}),Object(G.jsx)(jn,{lastItem:!0,children:Object(G.jsx)(Y,{result:x})})]}),Object(G.jsx)(en,{title:"count amount"}),Object(G.jsxs)(On,{children:["Last update: ",h.date]})]})})},yn=function(){return Object(G.jsxs)(L,{children:[Object(G.jsx)(q,{title:"Currency Converter"}),Object(G.jsx)(vn,{}),Object(G.jsx)(J,{children:"\xa9 2021 | Coded by Szymon Rojek"})]})},kn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),a(n),c(n)}))},wn=Object(P.createGlobalStyle)(F||(F=Object(D.a)(["\n  html {\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    min-height: 100vh;\n    font-family: 'Antonio', sans-serif;\n    background-color: ",";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])),(function(n){return n.theme.backgroundColor.body})),Cn="#186889",zn="#3b3c47",Sn="#4d5061c1",An="rgba(255, 255, 255, 0.79)",Fn={color:{primary:An,secondary:Cn,tertiary:zn},backgroundColor:{body:"#2E86ABC4",fieldsetOverlay:"#CFDde3c3",label:"#BCD5E4",field:Sn,boxClock:"#f0f9ff"},button:{active:zn,backgroundColor:Sn},image:{url:"https://www.researchgate.net/profile/M-Basri/publication/320925728/figure/fig3/AS:631619933192230@1527601335529/India-GDP-Growth-Interest-Rate-Forex-Reserves-Exchange-Rates-and-Current-Account.png"},accent:{boxArrow:zn,arrow:An,border:An,borderTop:Cn,greyShadow:"rgba(47, 50, 50, 0.54)",darkShadow:"rgba(0, 0, 0, .5)"},breakpoint:{ipad:768}},Tn=t(15);B.a.render(Object(G.jsx)(I.a.StrictMode,{children:Object(G.jsxs)(P.ThemeProvider,{theme:Fn,children:[Object(G.jsx)(Tn.Normalize,{}),Object(G.jsx)(wn,{}),Object(G.jsx)(yn,{})]})}),document.getElementById("root")),kn()}},[[25,1,2]]]);
//# sourceMappingURL=main.11430079.chunk.js.map