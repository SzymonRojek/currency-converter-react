(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{20:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r,o,a,c,i,u,s,l,d,b,p,f,x,j,h,g,m,O,v,y,k,w,C,z,S,A,F,T,I,E,B,D,P,L,R,G,q,J=t(3),M=t.n(J),N=t(10),Y=t.n(N),U=(t(20),t(2)),H=t(1),K=H.default.div(r||(r=Object(U.a)(["\n  margin: 0 auto;\n  max-width: 550px;\n  padding: 0 20px 0 20px;\n  color: ",";\n"])),(function(n){return n.theme.color.primary})),Q=H.default.h1(o||(o=Object(U.a)(["\n  padding-bottom: 10px;\n  font-size: 30px;\n  line-height: 1.5;\n  letter-spacing: 2px;\n  word-spacing: 4px;\n  text-align: center;\n"]))),V=t(0),W=function(n){var e=n.title;return Object(V.jsx)("header",{children:Object(V.jsx)(Q,{children:e})})},X=H.default.footer(a||(a=Object(U.a)(["\n  text-align: center;\n  padding: 30px;\n  font-size: 18px;\n"]))),Z=t(4),$=H.default.p(c||(c=Object(U.a)(["\n  padding-left: 20px;\n  font-size: 20px;\n  color: ",";\n"])),(function(n){return n.theme.color.tertiary})),_=function(n){var e=n.result;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)($,{children:["cash in: ",null===e||void 0===e?void 0:e.amount," ",e.currencyFrom]}),Object(V.jsxs)($,{children:["cash out: ",e.calculatedAmount?e.calculatedAmount.toFixed(2):""," ",e.currencyTo]})]})},nn=H.default.div(i||(i=Object(U.a)(["\n   position: relative;\n"]))),en=H.default.select(u||(u=Object(U.a)(["\n  padding: 8px 30px 8px 10px;\n  font-size: 16px;\n  letter-spacing: 2px;\n  background-color: ",";\n  box-shadow: 0 10px 20px ",";\n  border: none;\n  border-radius: 3px;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  outline: none;\n  min-height: 35px;\n  width: 100%;\n  color: ",";\n\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 2px ",";\n  }\n\n  @media (min-width: ","px) {\n    padding: 15px;\n    font-size: 18px;\n  }\n  cursor: pointer; \n"])),(function(n){return n.theme.backgroundColor.field}),(function(n){return n.theme.accent.darkShadow}),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.breakpoint.ipad})),tn="5px",rn=H.default.span(s||(s=Object(U.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 2rem;\n  background-color: ",";\n  pointer-events: none;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n\n  &::before,\n  &::after {\n    ",";\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n  }\n\n  &::before {\n    border-left: "," solid transparent;\n    border-right: "," solid transparent;\n    border-top: "," solid ",";\n  }\n"])),(function(n){return n.theme.accent.boxArrow}),tn,tn,tn,tn,(function(n){return n.theme.accent.arrow})),on=H.default.label(l||(l=Object(U.a)(["\n  margin-top: 120px;\n"]))),an=H.default.span(d||(d=Object(U.a)(["\n  display: inline-block;\n  padding: 8px;\n  margin-bottom: 5px;\n  font-size: 15px;\n  color: ",";\n  letter-spacing: 1px;\n  word-spacing: 3px;\n  background-color: ",";\n"])),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.backgroundColor.label})),cn=H.default.div(b||(b=Object(U.a)(["\n  position: relative;\n"]))),un=Object(H.default)(en)(p||(p=Object(U.a)(["  \n  &::placeholder {\n    color: ",";\n  }\n"])),(function(n){return n.theme.color.primary})),sn=function(n){var e=n.amount,t=n.setAmount,r=n.inputTypedAmount,o=n.currencyFrom;return Object(V.jsxs)(on,{children:[Object(V.jsxs)(an,{children:["Amount in ",o,"*:"]}),Object(V.jsx)(cn,{children:Object(V.jsx)(un,{ref:r,value:e,onChange:function(n){var e=n.target;return t(e.value)},type:"number",name:"amount",min:"0.01",step:"0.01",placeholder:"type here",required:!0,as:"input"})})]})},ln=function(n){var e=n.rates,t=n.value,r=n.onChange;return Object(V.jsxs)(nn,{children:[Object(V.jsx)(en,{value:t,onChange:function(n){var e=n.target;return r(e.value)},children:Object.keys(e).map((function(n){return Object(V.jsx)("option",{value:n,children:n},n)}))}),Object(V.jsx)(rn,{})]})},dn=H.default.button(f||(f=Object(U.a)(["\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  padding: 10px 15px;\n  border-radius: 3px;\n  border: none;\n  color: ",";\n  background-color: ",";\n  box-shadow: 0 10px 20px ",";\n  letter-spacing: 1px;\n  outline: none;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: all .3s ease-in-out;\n\n  &:hover {\n    transform: translateY(-1px);\n  }\n\n  &:focus {\n    border: 2px solid ",";\n  }\n\n  &:active {\n    background-color: ",";\n    transform: translateY(3px);\n  }\n"])),(function(n){return n.theme.color.primary}),(function(n){return n.theme.button.backgroundColor}),(function(n){return n.theme.accent.darkShadow}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.button.active})),bn=function(n){var e=n.title;return Object(V.jsx)(dn,{children:e})},pn=H.default.div(x||(x=Object(U.a)(["\n  margin: 50px 0 25px 0;\n  text-align: center;\n  background-color: ",";\n  border-radius: 3px;\n"])),(function(n){return n.theme.backgroundColor.boxClock})),fn=H.default.p(j||(j=Object(U.a)(["\n  padding: 8px 0 8px 0;\n  font-size: 20px;\n  color: ",";\n  line-height: 1.8;\n  letter-spacing: 3px;\n  word-spacing: 2px;\n"])),(function(n){return n.theme.color.secondary})),xn=function(){var n=function(){var n=Object(J.useState)(new Date),e=Object(Z.a)(n,2),t=e[0],r=e[1];return Object(J.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){return clearInterval(n)}}),[]),t}().toLocaleString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit",second:"2-digit"});return Object(V.jsx)(pn,{children:Object(V.jsx)(fn,{children:n})})},jn=H.default.p(h||(h=Object(U.a)(["\n  font-size: 25px;\n  line-height: 1.5;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.color.primary})),hn=H.default.div(g||(g=Object(U.a)([" \n  width: 100%;\n  min-height: 500px;\n  padding: 20px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]))),gn=Object(H.keyframes)(m||(m=Object(U.a)([" \n  from {\n    transform: none;\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),mn=H.default.div(O||(O=Object(U.a)([" \n  width: 40px;\n  height: 40px;\n  margin: 50px auto;\n  border: solid 4px ",";\n  border-top: solid 5px ",";\n  border-radius: 50%;\n  animation: "," 1.5s linear infinite;\n"])),(function(n){return n.theme.accent.border}),(function(n){return n.theme.accent.borderTop}),gn),On=Object(H.default)(jn)(v||(v=Object(U.a)([""]))),vn=function(){return Object(V.jsxs)(hn,{children:[Object(V.jsx)(mn,{}),Object(V.jsx)(On,{children:"Updating data from the European Central Bank"})]})},yn=Object(H.keyframes)(y||(y=Object(U.a)([" \n  0% {\n    transform: none;\n    left: 25%;\n  }\n  50% {\n    transform: rotate(168deg);\n    left: 60%;\n  }\n  100% {\n    transform: none;\n    left: 25%;\n  }\n"]))),kn=Object(H.keyframes)(k||(k=Object(U.a)(["\n  0% {\n    left: 25%;\n  }\n  50% {\n    left: 60%;\n  }\n  100% {\n    left: 25%;\n  }\n"]))),wn=H.default.div(w||(w=Object(U.a)(["\n  position: relative;\n  width: 100%;\n  height: 250px;\n  background-color: transparent;\n"]))),Cn=H.default.div(C||(C=Object(U.a)(["\n  position: absolute;\n  width: 70px;\n  height: 70px;\n  top: 50%;\n  left: 20%;\n  border-radius: 70%;\n  border: 1px solid ",";\n  animation: "," 3s alternate infinite ease-in-out;\n"])),(function(n){return n.theme.accent.border}),yn),zn=H.default.div(z||(z=Object(U.a)(["\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background-color: ",";\n  top: 42%;\n  \n  ","\n\n  ","\n"])),(function(n){return n.theme.backgroundColor.eye}),(function(n){return n.left&&Object(H.css)(S||(S=Object(U.a)(["\n    left: 20%;\n  "])))}),(function(n){return n.right&&Object(H.css)(A||(A=Object(U.a)(["\n    right: 20%;\n  "])))})),Sn=H.default.div(F||(F=Object(U.a)(["\n  position: absolute;\n  top: 60%;\n  left: 35%;\n  width: 20px;\n  height: 20px;\n  border: 2px solid;\n  border-radius: 50%;\n  border-color: "," transparent transparent ",";\n  transform: rotate(45deg);\n"])),(function(n){return n.theme.accent.border}),(function(n){return n.theme.accent.border})),An=H.default.div(T||(T=Object(U.a)(["\n  position: absolute;\n  bottom: 45px;\n  left: 20%;\n  width: 70px;\n  height: 10px;\n  background-color: black;\n  border-radius: 50%;\n  opacity: 0.2;\n  animation: "," 3s alternate infinite ease-in-out;\n"])),kn),Fn=function(){return Object(V.jsx)(V.Fragment,{children:Object(V.jsxs)(wn,{children:[Object(V.jsxs)(Cn,{children:[Object(V.jsx)(zn,{left:!0}),Object(V.jsx)(zn,{right:!0}),Object(V.jsx)(Sn,{})]}),Object(V.jsx)(An,{})]})})},Tn=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(Fn,{}),Object(V.jsx)(jn,{children:"Something went wrong. Please check your internet connection and try again later."})]})},In=t(8),En=t.n(In),Bn=t(14),Dn=H.default.fieldset(I||(I=Object(U.a)(["\n  box-shadow: 6px 6px 19px 0px ",";\n  border-radius: 5px;\n  border: none;\n  background-image: url(",");\n  background-position: left;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative; \n  z-index: 30;\n\n  &::after {\n    content: '';\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: ",";\n    border-radius: 5px;\n    position: absolute;\n    z-index: -10;\n  }\n"])),(function(n){return n.theme.accent.greyShadow}),(function(n){return n.theme.image.url}),(function(n){return n.theme.backgroundColor.fieldsetOverlay})),Pn=H.default.p(E||(E=Object(U.a)(["\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: 3px;\n  word-spacing: 2px;\n  color: ",";\n  background-color: ",";\n  max-width: 180px;\n  padding: 5px;\n"])),(function(n){return n.theme.color.tertiary}),(function(n){return n.theme.backgroundColor.label})),Ln=H.default.li(B||(B=Object(U.a)(["\n  ",";\n\n  ","\n"])),(function(n){return n.secondItem&&Object(H.css)(D||(D=Object(U.a)(["\n    margin: 30px 0 30px;\n  "])))}),(function(n){return n.lastItem&&Object(H.css)(P||(P=Object(U.a)(["\n    display: flex;\n    align-items: left;\n    flex-direction: column;\n    width: 100%;\n    margin-top: 35px;\n    background-color: ",";\n  "])),(function(n){return n.theme.backgroundColor.label}))})),Rn=H.default.ul(L||(L=Object(U.a)(["\n  padding: 10px;\n  list-style: none;\n"]))),Gn=H.default.span(R||(R=Object(U.a)(["\n  display: inline-block;\n  padding: 8px;\n  margin-bottom: 5px;\n  font-size: 15px;\n  color: ",";\n  letter-spacing: 1px;\n  word-spacing: 3px;\n  background-color: ",";\n"])),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.backgroundColor.label})),qn=H.default.p(G||(G=Object(U.a)(["\n  margin-top: 40px;\n  font-size: 15px;\n  text-align: right;\n  color: ",";\n"])),(function(n){return n.theme.color.tertiary})),Jn=function(){var n=Object(J.useState)(),e=Object(Z.a)(n,2),t=e[0],r=e[1],o=Object(J.useState)("GBP"),a=Object(Z.a)(o,2),c=a[0],i=a[1],u=Object(J.useState)("PLN"),s=Object(Z.a)(u,2),l=s[0],d=s[1],b=Object(J.useState)({}),p=Object(Z.a)(b,2),f=p[0],x=p[1],j=function(){var n=Object(J.useState)({status:"error",date:null,rates:null}),e=Object(Z.a)(n,2),t=e[0],r=e[1];return Object(J.useEffect)((function(){"error"!==t.status&&setTimeout(function(){var n=Object(Bn.a)(En.a.mark((function n(){var e,t,o,a;return En.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.exchangerate.host/latest");case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:t=n.sent,o=t.date,a=t.rates,r({date:o,rates:a,status:a?"success":"error"}),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),r({status:"error"});case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}(),1e3)}),[]),t}(),h=j.status,g=Object(J.useRef)();switch(h){case"loading":return Object(V.jsx)(vn,{});case"error":return Object(V.jsx)(Tn,{});case"success":return Object(V.jsx)("form",{onSubmit:function(n){n.preventDefault(),function(){var n=j.rates[c],e=j.rates[l];x({amount:t,calculatedAmount:+t*e/n,currencyFrom:c,currencyTo:l})}(),g.current.value=""},children:Object(V.jsxs)(Dn,{children:[Object(V.jsx)(Pn,{children:"*fields required"}),Object(V.jsx)(xn,{}),Object(V.jsxs)(Rn,{children:[Object(V.jsx)(Ln,{children:Object(V.jsxs)("label",{children:[Object(V.jsx)(Gn,{children:"Currency from*:"}),Object(V.jsx)(ln,{rates:j.rates,value:c,onChange:i})]})}),Object(V.jsx)(Ln,{secondItem:!0,children:Object(V.jsxs)("label",{children:[Object(V.jsx)(Gn,{children:"Currency to*:"}),Object(V.jsx)(ln,{rates:j.rates,value:l,onChange:d})]})}),Object(V.jsx)(Ln,{children:Object(V.jsx)(sn,{setAmount:r,inputTypedAmount:g,currencyFrom:c})}),Object(V.jsx)(Ln,{lastItem:!0,children:Object(V.jsx)(_,{result:f})})]}),Object(V.jsx)(bn,{title:"count amount"}),Object(V.jsxs)(qn,{children:["Last update: ",j.date]})]})});default:return""}},Mn=function(){return Object(V.jsxs)(K,{children:[Object(V.jsx)(W,{title:"Currency Converter"}),Object(V.jsx)(Jn,{}),Object(V.jsx)(X,{children:"\xa9 2021 | Coded by Szymon Rojek"})]})},Nn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),a(n),c(n)}))},Yn=Object(H.createGlobalStyle)(q||(q=Object(U.a)(["\n  html {\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    min-height: 100vh;\n    font-family: 'Antonio', sans-serif;\n    background-color: ",";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])),(function(n){return n.theme.backgroundColor.body})),Un="rgba(255, 255, 255, 0.79)",Hn="#186889",Kn="#4d5061c1",Qn="#3b3c47",Vn={color:{primary:Un,secondary:Hn,tertiary:Qn},backgroundColor:{body:"#2E86ABC4",fieldsetOverlay:"#CFDde3c3",label:"#BCD5E4",field:Kn,boxClock:"#f0f9ff",eye:Un,mouth:Un},button:{active:Qn,backgroundColor:Kn},image:{url:"https://www.researchgate.net/profile/M-Basri/publication/320925728/figure/fig3/AS:631619933192230@1527601335529/India-GDP-Growth-Interest-Rate-Forex-Reserves-Exchange-Rates-and-Current-Account.png"},accent:{boxArrow:Qn,arrow:Un,border:Un,borderTop:Hn,greyShadow:"rgba(47, 50, 50, 0.54)",darkShadow:"rgba(0, 0, 0, .5)"},breakpoint:{ipad:768}},Wn=t(15);Y.a.render(Object(V.jsx)(M.a.StrictMode,{children:Object(V.jsxs)(H.ThemeProvider,{theme:Vn,children:[Object(V.jsx)(Wn.Normalize,{}),Object(V.jsx)(Yn,{}),Object(V.jsx)(Mn,{})]})}),document.getElementById("root")),Nn()}},[[25,1,2]]]);
//# sourceMappingURL=main.16e022a2.chunk.js.map