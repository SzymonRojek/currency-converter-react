(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{18:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var r,o,c,a,i,u,l,d,s,b,p,x,h,f,j,g,m,O,y,v,k,w,C,z,S,A,F,I=t(1),T=t.n(I),E=t(9),B=t.n(E),D=(t(18),t(3)),L=t(2),P=L.default.div(r||(r=Object(D.a)(["\n  margin: 0 auto;\n  max-width: 550px;\n  padding: 0 20px 0 20px;\n  color: ",";\n"])),(function(n){return n.theme.color.primary})),R=L.default.h1(o||(o=Object(D.a)(["\n  padding-bottom: 10px;\n  font-size: 30px;\n  line-height: 1.5;\n  letter-spacing: 2px;\n  word-spacing: 4px;\n  text-align: center;\n"]))),G=t(0),q=function(n){var e=n.title;return Object(G.jsx)("header",{children:Object(G.jsx)(R,{children:e})})},J=L.default.footer(c||(c=Object(D.a)(["\n  text-align: center;\n  padding: 30px;\n  font-size: 18px;\n"]))),M=t(4),N=L.default.p(a||(a=Object(D.a)(["\n  padding-left: 20px;\n  font-size: 20px;\n  color: ",";\n"])),(function(n){return n.theme.color.tertiary})),Y=function(n){var e=n.result;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(N,{children:["cash in: ",null===e||void 0===e?void 0:e.amount," ",e.currencyFrom]}),Object(G.jsxs)(N,{children:["cash out: ",e.calculatedAmount?e.calculatedAmount.toFixed(2):""," ",e.currencyTo]})]})},W=L.default.label(i||(i=Object(D.a)(["\n  margin-top: 120px;\n"]))),H=L.default.span(u||(u=Object(D.a)(["\n  display: inline-block;\n  padding: 8px;\n  margin-bottom: 5px;\n  font-size: 15px;\n  color: ",";\n  letter-spacing: 1px;\n  word-spacing: 3px;\n  background-color: ",";\n"])),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.backgroundColor.label})),K=L.default.div(l||(l=Object(D.a)(["\n  position: relative;\n"]))),Q=Object(L.css)(d||(d=Object(D.a)(["\n  padding: 8px 30px 8px 10px;\n  font-size: 16px;\n  letter-spacing: 2px;\n  background-color: ",";\n  box-shadow: 0 10px 20px ",";\n  border: none;\n  border-radius: 3px;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  outline: none;\n  min-height: 35px;\n  width: 100%;\n  color: ",";\n\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 2px ",";\n  }\n\n  @media (min-width: ","px) {\n    padding: 15px;\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.backgroundColor.field}),(function(n){return n.theme.accent.darkShadow}),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.breakpoint.ipad})),U=L.default.input(s||(s=Object(D.a)(["  \n  ",";\n \n  &::placeholder {\n    color: ",";\n  }\n"])),Q,(function(n){return n.theme.color.primary})),V=function(n){var e=n.amount,t=n.setAmount,r=n.inputTypedAmount,o=n.currencyFrom;return Object(G.jsxs)(W,{children:[Object(G.jsxs)(H,{children:["Amount in ",o,"*:"]}),Object(G.jsx)(K,{children:Object(G.jsx)(U,{ref:r,value:e,onChange:function(n){var e=n.target;return t(e.value)},type:"number",name:"amount",min:"0.01",step:"0.01",placeholder:"type here",required:!0})})]})},X=L.default.div(b||(b=Object(D.a)(["\n   position: relative;\n"]))),Z=L.default.select(p||(p=Object(D.a)(["\n  ","\n  cursor: pointer; \n"])),Q),$="5px",_=L.default.span(x||(x=Object(D.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 2rem;\n  background-color: ",";\n  pointer-events: none;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n\n  &::before,\n  &::after {\n    ",";\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n  }\n\n  &::before {\n    border-left: "," solid transparent;\n    border-right: "," solid transparent;\n    border-top: "," solid ",";\n  }\n"])),(function(n){return n.theme.accent.boxArrow}),$,$,$,$,(function(n){return n.theme.accent.arrow})),nn=function(n){var e=n.rates,t=n.value,r=n.onChange;return Object(G.jsxs)(X,{children:[Object(G.jsx)(Z,{value:t,onChange:function(n){var e=n.target;return r(e.value)},children:Object.keys(e).map((function(n){return Object(G.jsx)("option",{value:n,children:n},n)}))}),Object(G.jsx)(_,{})]})},en=L.default.button(h||(h=Object(D.a)(["\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  padding: 10px 15px;\n  border-radius: 3px;\n  border: none;\n  color: ",";\n  background-color: ",";\n  box-shadow: 0 10px 20px ",";\n  letter-spacing: 1px;\n  outline: none;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: all .3s ease-in-out;\n\n  &:hover {\n    transform: translateY(-1px);\n  }\n\n  &:focus {\n    border: 2px solid ",";\n  }\n\n  &:active {\n    background-color: ",";\n    transform: translateY(3px);\n  }\n"])),(function(n){return n.theme.color.primary}),(function(n){return n.theme.backgroundColor.button}),(function(n){return n.theme.accent.darkShadow}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.active.button})),tn=function(n){var e=n.title;return Object(G.jsx)(en,{children:e})},rn=L.default.div(f||(f=Object(D.a)(["\n  margin: 50px 0 25px 0;\n  text-align: center;\n  background-color: ",";\n  border-radius: 3px;\n"])),(function(n){return n.theme.backgroundColor.boxClock})),on=L.default.p(j||(j=Object(D.a)(["\n  padding: 8px 0 8px 0;\n  font-size: 20px;\n  color: ",";\n  line-height: 1.8;\n  letter-spacing: 3px;\n  word-spacing: 2px;\n"])),(function(n){return n.theme.color.secondary})),cn=function(){var n=function(){var n=Object(I.useState)(new Date),e=Object(M.a)(n,2),t=e[0],r=e[1];return Object(I.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){return clearInterval(n)}}),[]),t}().toLocaleString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit",second:"2-digit"});return Object(G.jsx)(rn,{children:Object(G.jsx)(on,{children:n})})},an=L.default.fieldset(g||(g=Object(D.a)(["\n  box-shadow: 6px 6px 19px 0px ",";\n  border-radius: 5px;\n  border: none;\n  background-image: url(",");\n  background-position: left;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative; \n  z-index: 30;\n\n  &::after {\n    content: '';\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: ",";\n    border-radius: 5px;\n    position: absolute;\n    z-index: -10;\n  }\n"])),(function(n){return n.theme.accent.greyShadow}),(function(n){return n.theme.image.url}),(function(n){return n.theme.backgroundColor.fieldsetOverlay})),un=L.default.p(m||(m=Object(D.a)(["\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: 3px;\n  word-spacing: 2px;\n  color: ",";\n  background-color: ",";\n  max-width: 180px;\n  padding: 5px;\n"])),(function(n){return n.theme.color.tertiary}),(function(n){return n.theme.backgroundColor.label})),ln=L.default.li(O||(O=Object(D.a)(["\n  ",";\n\n  ","\n"])),(function(n){return n.secondItem&&Object(L.css)(y||(y=Object(D.a)(["\n    margin: 30px 0 30px;\n  "])))}),(function(n){return n.lastItem&&Object(L.css)(v||(v=Object(D.a)(["\n    display: flex;\n    align-items: left;\n    flex-direction: column;\n    width: 100%;\n    margin-top: 35px;\n    background-color: ",";\n  "])),(function(n){return n.theme.backgroundColor.label}))})),dn=L.default.ul(k||(k=Object(D.a)(["\n  padding: 10px;\n  list-style: none;\n"]))),sn=L.default.span(w||(w=Object(D.a)(["\n  display: inline-block;\n  padding: 8px;\n  margin-bottom: 5px;\n  font-size: 15px;\n  color: ",";\n  letter-spacing: 1px;\n  word-spacing: 3px;\n  background-color: ",";\n"])),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.backgroundColor.label})),bn=L.default.div(C||(C=Object(D.a)(["\n  width: 100%;\n  min-height: 500px;\n  padding: 20px;\n  font-size: 25px;\n  line-height: 1.5;\n  color: black;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n \n"]))),pn=Object(L.keyframes)(z||(z=Object(D.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),xn=L.default.div(S||(S=Object(D.a)(["\n  width: 30px;\n  height: 30px;\n  margin: 50px auto;\n  border: solid 5px rgba(255, 255, 255, 0.79);\n  border-top: solid 5px #186889;\n  border-radius: 50%;\n  animation: "," 1s linear infinite;\n"])),pn),hn=L.default.p(A||(A=Object(D.a)(["\n color: ",";\n font-size: 15px;\n text-align: right;\n"])),(function(n){return n.theme.color.tertiary})),fn=function(){var n=Object(I.useState)(),e=Object(M.a)(n,2),t=e[0],r=e[1],o=Object(I.useState)("GBP"),c=Object(M.a)(o,2),a=c[0],i=c[1],u=Object(I.useState)("PLN"),l=Object(M.a)(u,2),d=l[0],s=l[1],b=Object(I.useState)({}),p=Object(M.a)(b,2),x=p[0],h=p[1],f=function(){var n=Object(I.useState)({state:"loading..."}),e=Object(M.a)(n,2),t=e[0],r=e[1];return Object(I.useEffect)((function(){setTimeout((function(){setTimeout((function(){fetch("https://api.exchangerate.host/latest").then((function(n){if(!n.ok)throw new Error(n.statusText);return n})).then((function(n){return n.json()})).then((function(n){return r({date:n.date,rates:n.rates})})).catch(r({state:"error"}))}))}),2e3)}),[]),t}(),j=Object(I.useRef)();return Object(G.jsx)("form",{onSubmit:function(n){n.preventDefault(),function(n,e,t){var r=f.rates[n],o=f.rates[e];h({amount:t,calculatedAmount:+t*o/r,currencyFrom:n,currencyTo:e})}(a,d,t),j.current.value=""},children:Object(G.jsx)(an,{children:"loading..."===f.state?Object(G.jsxs)(bn,{children:[Object(G.jsx)(xn,{}),"Loading data from the European Central Bank...\ud83d\ude04"]}):"error"===f.state?Object(G.jsx)(bn,{children:"No Internet. Try: Checking the network cables, modem and router Reconnecting to Wi-Fi"}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(un,{children:"*fields required"}),Object(G.jsx)(cn,{}),Object(G.jsxs)(dn,{children:[Object(G.jsx)(ln,{children:Object(G.jsxs)("label",{children:[Object(G.jsx)(sn,{children:"Currency from*:"}),Object(G.jsx)(nn,{rates:f.rates,value:a,onChange:i})]})}),Object(G.jsx)(ln,{secondItem:!0,children:Object(G.jsxs)("label",{children:[Object(G.jsx)(sn,{children:"Currency to*:"}),Object(G.jsx)(nn,{rates:f.rates,value:d,onChange:s})]})}),Object(G.jsx)(ln,{children:Object(G.jsx)(V,{setAmount:r,inputTypedAmount:j,currencyFrom:a})}),Object(G.jsx)(ln,{lastItem:!0,children:Object(G.jsx)(Y,{result:x})})]}),Object(G.jsx)(tn,{title:"count amount"}),Object(G.jsxs)(hn,{children:["Last update ",f.date]})]})})})},jn=function(){return Object(G.jsxs)(P,{children:[Object(G.jsx)(q,{title:"Currency Converter"}),Object(G.jsx)(fn,{}),Object(G.jsx)(J,{children:"\xa9 2021 | Coded by Szymon Rojek"})]})},gn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),c(n),a(n)}))},mn=t(13),On=Object(L.createGlobalStyle)(F||(F=Object(D.a)(["\n \n  ","\n\n  html {\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    min-height: 100vh;\n    font-family: 'Antonio', sans-serif;\n    background-color: ",";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])),mn.normalize,(function(n){return n.theme.backgroundColor.body})),yn="#3b3c47",vn="#4d5061c1",kn="rgba(255, 255, 255, 0.79)",wn={color:{primary:kn,secondary:"#186889",tertiary:yn},backgroundColor:{body:"#2E86ABC4",fieldsetOverlay:"#CFDde3c3",label:"#BCD5E4",field:vn,button:vn,boxClock:"#f0f9ff"},active:{button:yn},image:{url:"https://www.researchgate.net/profile/M-Basri/publication/320925728/figure/fig3/AS:631619933192230@1527601335529/India-GDP-Growth-Interest-Rate-Forex-Reserves-Exchange-Rates-and-Current-Account.png"},accent:{boxArrow:yn,arrow:kn,greyShadow:"rgba(47, 50, 50, 0.54)",darkShadow:"rgba(0, 0, 0, .5)"},breakpoint:{ipad:768}};B.a.render(Object(G.jsx)(T.a.StrictMode,{children:Object(G.jsxs)(L.ThemeProvider,{theme:wn,children:[Object(G.jsx)(On,{}),Object(G.jsx)(jn,{})]})}),document.getElementById("root")),gn()}},[[22,1,2]]]);
//# sourceMappingURL=main.3256bbb2.chunk.js.map