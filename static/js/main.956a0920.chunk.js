(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,function(e,a,l){},function(e,a,l){},,function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){"use strict";l.r(a);var t=l(1),r=l.n(t),s=l(4),n=l.n(s),c=(l(9),l(10),l(0)),i=function(e){var a=e.children;return Object(c.jsx)("div",{className:"container",children:a})},u=(l(12),function(e){var a=e.title;return Object(c.jsx)("header",{children:Object(c.jsx)("h1",{className:"header__heading",children:a})})}),o=(l(13),function(e){var a=e.text;return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("p",{className:"footer__paragraph",children:a})})}),m=l(2),f=(l(14),[{id:"search",fullName:"search"},{id:"PL",fullName:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",exchangeTo:[{id:"GBP",fullName:"\ud83c\uddec\ud83c\udde7 British Pound",rate:.18816},{id:"EUR",fullName:"\ud83c\uddea\ud83c\uddfa Euro",rate:.21758},{id:"US",fullName:"\ud83c\uddfa\ud83c\uddf8 US Dollar",rate:.26389},{id:"RUB",fullName:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",rate:19.7077},{id:"ESP",fullName:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:36.321}]},{id:"BGP",fullName:"\ud83c\uddec\ud83c\udde7 British Pound",exchangeTo:[{id:"PL",fullName:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",rate:5.21899},{id:"EUR",fullName:"\ud83c\uddea\ud83c\uddfa Euro",rate:1.14832},{id:"US",fullName:"\ud83c\uddfa\ud83c\uddf8 US Dollar",rate:1.38992},{id:"RUB",fullName:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",rate:103.8},{id:"ESP",fullName:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:191.3}]},{id:"EUR",fullName:"\ud83c\uddea\ud83c\uddfa Euro",exchangeTo:[{id:"PL",fullName:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",rate:4.56386},{id:"GBP",fullName:"\ud83c\uddec\ud83c\udde7 British Pound",rate:.86851},{id:"US",fullName:"\ud83c\uddfa\ud83c\uddf8 US Dollar",rate:1.20878},{id:"RUB",fullName:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",rate:90.2726},{id:"ESP",fullName:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:166.386}]},{id:"US",fullName:"\ud83c\uddfa\ud83c\uddf8 US Dollar",exchangeTo:[{id:"PL",fullName:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",rate:3.78578},{id:"GBP",fullName:"\ud83c\uddec\ud83c\udde7 British Pound",rate:.71937},{id:"EUR",fullName:"\ud83c\uddea\ud83c\uddfa Euro",rate:.82718},{id:"RUB",fullName:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",rate:74.6808},{id:"ESP",fullName:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:137.632}]},{id:"RUB",fullName:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",exchangeTo:[{id:"PL",fullName:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",rate:.05066},{id:"GBP",fullName:"\ud83c\uddec\ud83c\udde7 British Pound",rate:.00963},{id:"EUR",fullName:"\ud83c\uddea\ud83c\uddfa Euro",rate:.01107},{id:"US",fullName:"\ud83c\uddfa\ud83c\uddf8 US Dollar",rate:.01338},{id:"ESP",fullName:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:1.84161}]},{id:"ESP",fullName:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",exchangeTo:[{id:"PL",fullName:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",rate:.0275},{id:"GBP",fullName:"\ud83c\uddec\ud83c\udde7 British Pound",rate:.00523},{id:"EUR",fullName:"\ud83c\uddea\ud83c\uddfa Euro",rate:.00601},{id:"US",fullName:"\ud83c\uddfa\ud83c\uddf8 US Dollar",rate:.00726},{id:"RUB",fullName:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",rate:.54255}]}]),d=(l(15),function(e){var a=e.result;return void 0!==a&&Object(c.jsx)("li",{className:"form__information",children:Object(c.jsx)("p",{className:"form__text",children:a.value.toFixed(2)})})}),j=function(){var e=Object(t.useState)(""),a=Object(m.a)(e,2),l=a[0],r=a[1],s=Object(t.useState)("search"),n=Object(m.a)(s,2),i=n[0],u=n[1],o=Object(t.useState)("search"),j=Object(m.a)(o,2),h=j[0],b=j[1],N=f.find((function(e){return e.fullName===i})),x=Object(t.useState)(),O=Object(m.a)(x,2),_=O[0],P=O[1];return Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault();var a=N.exchangeTo.find((function(e){return e.fullName===h})).rate,t=function(e,a){return+e*a}(l,a);P({value:t}),console.log(t)},className:"form",children:Object(c.jsxs)("fieldset",{className:"form__fieldset",children:[Object(c.jsx)("p",{className:"form__paragraph",children:"*fields required"}),Object(c.jsxs)("ul",{className:"form__list",children:[Object(c.jsx)("li",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("span",{className:"form__labelText",children:"Currency from*:"}),Object(c.jsxs)("div",{className:"form__selectVisual",children:[Object(c.jsx)("select",{value:i,onChange:function(e){var a=e.target;return u(a.value)},className:"form__selectVisual-select",children:f.map((function(e){return Object(c.jsx)("option",{children:e.fullName},e.id)}))}),Object(c.jsx)("span",{className:"focus"}),Object(c.jsx)("span",{className:"form__selectVisual form__selectVisual--arrow"})]})]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("span",{className:"form__labelText form__labelText--middle",children:"Currency to*:"}),Object(c.jsxs)("div",{className:"form__selectVisual",children:[Object(c.jsx)("select",{value:h,onChange:function(e){var a=e.target;return b(a.value)},className:"form__selectVisual-select",children:f.map((function(e){return Object(c.jsx)("option",{children:e.fullName},e.id)}))}),Object(c.jsx)("span",{className:"focus"}),Object(c.jsx)("span",{className:"form__selectVisual form__selectVisual--arrow"})]})]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("label",{className:"form__label",children:[Object(c.jsx)("span",{className:"form__labelText form__labelText--last",children:"Amount*:"}),Object(c.jsxs)("div",{className:"form__amountVisual",children:[Object(c.jsx)("input",{value:l,onChange:function(e){var a=e.target;return r(a.value)},className:"form__amountVisual-input",type:"number",name:"amount",min:"1",step:"any",placeholder:"type here"}),Object(c.jsx)("span",{className:"focus"})]})]})}),Object(c.jsx)(d,{result:_})]}),Object(c.jsx)("div",{className:"form__footer",children:Object(c.jsx)("button",{className:"form__button",children:"Count Amount"})})]})})};var h=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(i,{children:[Object(c.jsx)(u,{title:"Currency Converter"}),Object(c.jsx)(j,{}),Object(c.jsx)(o,{text:"\xa9 2021 | Coded by Szymon Rojek"})]})})},b=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,17)).then((function(a){var l=a.getCLS,t=a.getFID,r=a.getFCP,s=a.getLCP,n=a.getTTFB;l(e),t(e),r(e),s(e),n(e)}))};n.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),b()}],[[16,1,2]]]);
//# sourceMappingURL=main.956a0920.chunk.js.map