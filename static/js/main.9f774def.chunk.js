(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,function(a,e,n){},function(a,e,n){},,function(a,e,n){},function(a,e,n){},function(a,e,n){},function(a,e,n){},function(a,e,n){},function(a,e,n){},function(a,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),t=n(4),d=n.n(t),o=(n(9),n(10),n(0)),m=function(a){var e=a.children;return Object(o.jsx)("div",{className:"container",children:e})},s=(n(12),function(a){var e=a.title;return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{className:"header__heading",children:e})})}),l=(n(13),function(a){var e=a.text;return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("p",{className:"footer__paragraph",children:e})})}),c=n(2),u=(n(14),n(15),function(a){var e=a.result,n=a.currencyFrom,r=a.currencyTo,i="choose yours currencies";return n===r&&(i="choosen same currencies"),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"form__text",children:e&&n!==r?e.id:i}),Object(o.jsxs)("p",{className:"form__text",children:["cash back: ",e?e.value.toFixed(2):""," "]})]})}),h=(n(16),function(a){var e=a.amount,n=a.getIdCurrencyFrom,r=a.setAmount;return Object(o.jsxs)("label",{className:"form__label",children:[Object(o.jsxs)("span",{className:"form__labelText form__labelText--last",children:["Amount ","search"!==n?"in ".concat(n):"","*:"]}),Object(o.jsxs)("div",{className:"form__amountVisual",children:[Object(o.jsx)("input",{value:e,onChange:function(a){var e=a.target;return r(e.value)},className:"form__amountVisual-input",type:"number",name:"amount",min:"1",step:"any",placeholder:"type here",required:!0}),Object(o.jsx)("span",{className:"focus"})]})]})}),K=(n(17),function(a){var e=a.currencies,n=a.value,r=a.onChange;return Object(o.jsxs)("div",{className:"form__selectVisual",children:[Object(o.jsx)("select",{value:n,onChange:function(a){var e=a.target;return r(e.value)},className:"form__selectVisual-select",children:e.map((function(a){return Object(o.jsx)("option",{children:a.name},a.id)}))}),Object(o.jsx)("span",{className:"focus"}),Object(o.jsx)("span",{className:"form__selectVisual form__selectVisual--arrow"})]})}),b=function(a){var e=a.currencies,n=Object(r.useState)(""),i=Object(c.a)(n,2),t=i[0],d=i[1],m=Object(r.useState)("\ud83c\uddf5\ud83c\uddf1 Polish Zloty"),s=Object(c.a)(m,2),l=s[0],b=s[1],L=Object(r.useState)("\ud83c\uddec\ud83c\udde7 British Pound"),j=Object(c.a)(L,2),P=j[0],O=j[1],f=e.find((function(a){return a.name===l})),R=Object(r.useState)(),F=Object(c.a)(R,2),S=F[0],x=F[1],D=e.find((function(a){return a.name===l})).id;return Object(o.jsx)("form",{onSubmit:function(a){a.preventDefault();var e=f.exchangeTo.find((function(a){return a.name===P})).rate,n=f.exchangeTo.find((function(a){return a.name===P})).id,r=function(a,e){return+a*e}(t,e);x({value:r,id:n}),d("")},className:"form",children:Object(o.jsxs)("fieldset",{className:"form__fieldset",children:[Object(o.jsx)("p",{className:"form__paragraph",children:"*fields required"}),Object(o.jsxs)("ul",{className:"form__list",children:[Object(o.jsx)("li",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{className:"form__labelText",children:"Currency from*:"}),Object(o.jsx)(K,{currencies:e,value:l,onChange:b})]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{className:"form__labelText form__labelText--middle",children:"Currency to*:"}),Object(o.jsxs)("div",{className:"form__selectVisual",children:[Object(o.jsx)(K,{currencies:e,value:P,onChange:O}),Object(o.jsx)("span",{className:"focus"}),Object(o.jsx)("span",{className:"form__selectVisual form__selectVisual--arrow"})]})]})}),Object(o.jsx)("li",{children:Object(o.jsx)(h,{amount:t,setAmount:d,getIdCurrencyFrom:D})}),Object(o.jsx)("li",{className:"form__information",children:Object(o.jsx)(u,{result:S,currencyFrom:l,currencyTo:P})})]}),Object(o.jsx)("div",{className:"form__footer",children:Object(o.jsx)("button",{className:"form__button",disabled:l===P,children:"Count Amount"})})]})})},L=[{id:"PL",name:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",exchangeTo:[{id:"ALL",name:"\ud83c\udde6\ud83c\uddf1 Albanian Lek",rate:26.6228},{id:"GBP",name:"\ud83c\uddec\ud83c\udde7 British Pound",rate:.18816},{id:"CZK",name:"\ud83c\udde8\ud83c\uddff Czech Koruna",rate:5.65865},{id:"CAD",name:"\ud83c\udde8\ud83c\udde6 Canadian Dollar",rate:.32654},{id:"DKK",name:"\ud83c\udde9\ud83c\uddf0 Danish Krone",rate:1.62299},{id:"EUR",name:"\ud83c\uddea\ud83c\uddfa Euro",rate:.21758},{id:"FRF",name:"\ud83c\uddeb\ud83c\uddf7 French Frank",rate:1.43191},{id:"GIP",name:"\ud83c\uddec\ud83c\uddee Gibraltar Pound",rate:.18984},{id:"HUF",name:"\ud83c\udded\ud83c\uddfa Hungarian Forint",rate:79.0143},{id:"ITL",name:"\ud83c\uddee\ud83c\uddf9 Italian Lira",rate:422.675},{id:"JPY",name:"\ud83c\uddef\ud83c\uddf5 Japanese Yen",rate:28.72},{id:"KZT",name:"\ud83c\uddf0\ud83c\uddff Kazakhstan Tenge",rate:111.819},{id:"LAK",name:"\ud83c\uddf1\ud83c\udde6 Lao Kip",rate:2443.67},{id:"MDL",name:"\ud83c\uddf2\ud83c\udde9 Moldovan Leu",rate:4.64403},{id:"NOK",name:"\ud83c\uddf3\ud83c\uddf4 Norwegian Kroner",rate:2.18971},{id:"OMR",name:"\ud83c\uddf4\ud83c\uddf2 Omani Rial",rate:.10092},{id:"RUB",name:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",rate:19.7077},{id:"SKK",name:"\ud83c\uddf8\ud83c\uddf0 Slovak Koruna",rate:6.57631},{id:"ESP",name:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:36.321},{id:"US",name:"\ud83c\uddfa\ud83c\uddf8 US Dollar",rate:.26389}]},{id:"GBP",name:"\ud83c\uddec\ud83c\udde7 British Pound",exchangeTo:[{id:"ALL",name:"\ud83c\udde6\ud83c\uddf1 Albanian Lek",rate:140.222},{id:"CZK",name:"\ud83c\udde8\ud83c\uddff Czech Koruna",rate:29.8041},{id:"CAD",name:"\ud83c\udde8\ud83c\udde6 Canadian Dollar",rate:1.71986},{id:"DKK",name:"\ud83c\udde9\ud83c\uddf0 Danish Krone",rate:1.62299},{id:"EUR",name:"\ud83c\uddea\ud83c\uddfa Euro",rate:1.14832},{id:"FRF",name:"\ud83c\uddeb\ud83c\uddf7 French Frank",rate:1.43506},{id:"GIP",name:"\ud83c\uddec\ud83c\uddee Gibraltar Pound",rate:1},{id:"HUF",name:"\ud83c\udded\ud83c\uddfa Hungarian Forint",rate:416.168},{id:"ITL",name:"\ud83c\uddee\ud83c\uddf9 Italian Lira",rate:2226.2},{id:"JPY",name:"\ud83c\uddef\ud83c\uddf5 Japanese Yen",rate:151.26},{id:"KZT",name:"\ud83c\uddf0\ud83c\uddff Kazakhstan Tenge",rate:591.034},{id:"LAK",name:"\ud83c\uddf1\ud83c\udde6 Lao Kip",rate:12916.3},{id:"MDL",name:"\ud83c\uddf2\ud83c\udde9 Moldovan Leu",rate:24.5465},{id:"NOK",name:"\ud83c\uddf3\ud83c\uddf4 Norwegian Kroner",rate:11.574},{id:"OMR",name:"\ud83c\uddf4\ud83c\uddf2 Omani Rial",rate:.5334},{id:"PL",name:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",rate:5.21899},{id:"RUB",name:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",rate:103.8},{id:"SKK",name:"\ud83c\uddf8\ud83c\uddf0 Slovak Koruna",rate:34.6369},{id:"ESP",name:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:191.3},{id:"US",name:"\ud83c\uddfa\ud83c\uddf8 US Dollar",rate:1.38992}]},{id:"EUR",name:"\ud83c\uddea\ud83c\uddfa Euro",exchangeTo:[{id:"ALL",name:"\ud83c\udde6\ud83c\uddf1 Albanian Lek",rate:121.948},{id:"GBP",name:"\ud83c\uddec\ud83c\udde7 British Pound",rate:.86851},{id:"CZK",name:"\ud83c\udde8\ud83c\uddff Czech Koruna",rate:25.9207},{id:"CAD",name:"\ud83c\udde8\ud83c\udde6 Canadian Dollar",rate:1.49572},{id:"DKK",name:"\ud83c\udde9\ud83c\uddf0 Danish Krone",rate:7.43527},{id:"FRF",name:"\ud83c\uddeb\ud83c\uddf7 French Frank",rate:6.55957},{id:"GIP",name:"\ud83c\uddec\ud83c\uddee Gibraltar Pound",rate:.86958},{id:"HUF",name:"\ud83c\udded\ud83c\uddfa Hungarian Forint",rate:361.979},{id:"ITL",name:"\ud83c\uddee\ud83c\uddf9 Italian Lira",rate:1936.27},{id:"JPY",name:"\ud83c\uddef\ud83c\uddf5 Japanese Yen",rate:131.56},{id:"KZT",name:"\ud83c\uddf0\ud83c\uddff Kazakhstan Tenge",rate:511.944},{id:"LAK",name:"\ud83c\uddf1\ud83c\udde6 Lao Kip",rate:11187.9},{id:"MDL",name:"\ud83c\uddf2\ud83c\udde9 Moldovan Leu",rate:21.2618},{id:"NOK",name:"\ud83c\uddf3\ud83c\uddf4 Norwegian Kroner",rate:10.0255},{id:"OMR",name:"\ud83c\uddf4\ud83c\uddf2 Omani Rial",rate:.46202},{id:"PL",name:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",rate:4.56386},{id:"RUB",name:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",rate:90.2726},{id:"SKK",name:"\ud83c\uddf8\ud83c\uddf0 Slovak Koruna",rate:30.126},{id:"ESP",name:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:166.386},{id:"US",name:"\ud83c\uddfa\ud83c\uddf8 US Dollar",rate:1.20878}]},{id:"US",name:"\ud83c\uddfa\ud83c\uddf8 US Dollar",exchangeTo:[{id:"ALL",name:"\ud83c\udde6\ud83c\uddf1 Albanian Lek",rate:100.885},{id:"GBP",name:"\ud83c\uddec\ud83c\udde7 British Pound",rate:.71937},{id:"CZK",name:"\ud83c\udde8\ud83c\uddff Czech Koruna",rate:21.4431},{id:"CAD",name:"\ud83c\udde8\ud83c\udde6 Canadian Dollar",rate:1.23738},{id:"DKK",name:"\ud83c\udde9\ud83c\uddf0 Danish Krone",rate:6.15019},{id:"EUR",name:"\ud83c\uddea\ud83c\uddfa Euro",rate:.82718},{id:"FRF",name:"\ud83c\uddeb\ud83c\uddf7 French Frank",rate:5.42597},{id:"GIP",name:"\ud83c\uddec\ud83c\uddee Gibraltar Pound",rate:.71937},{id:"HUF",name:"\ud83c\udded\ud83c\uddfa Hungarian Forint",rate:299.419},{id:"ITL",name:"\ud83c\uddee\ud83c\uddf9 Italian Lira",rate:1601.65},{id:"JPY",name:"\ud83c\uddef\ud83c\uddf5 Japanese Yen",rate:108.82},{id:"KZT",name:"\ud83c\uddf0\ud83c\uddff Kazakhstan Tenge",rate:425.279},{id:"LAK",name:"\ud83c\uddf1\ud83c\udde6 Lao Kip",rate:9293.93},{id:"MDL",name:"\ud83c\uddf2\ud83c\udde9 Moldovan Leu",rate:17.6625},{id:"NOK",name:"\ud83c\uddf3\ud83c\uddf4 Norwegian Kroner",rate:8.32806},{id:"OMR",name:"\ud83c\uddf4\ud83c\uddf2 Omani Rial",rate:.38381},{id:"PL",name:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",rate:3.78578},{id:"RUB",name:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",rate:74.6808},{id:"SKK",name:"\ud83c\uddf8\ud83c\uddf0 Slovak Koruna",rate:24.9197},{id:"ESP",name:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:137.632}]},{id:"RUB",name:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",exchangeTo:[{id:"ALL",name:"\ud83c\udde6\ud83c\uddf1 Albanian Lek",rate:1.34992},{id:"GBP",name:"\ud83c\uddec\ud83c\udde7 British Pound",rate:.00963},{id:"CZK",name:"\ud83c\udde8\ud83c\uddff Czech Koruna",rate:.28692},{id:"CAD",name:"\ud83c\udde8\ud83c\udde6 Canadian Dollar",rate:.01656},{id:"DKK",name:"\ud83c\udde9\ud83c\uddf0 Danish Krone",rate:.08229},{id:"EUR",name:"\ud83c\uddea\ud83c\uddfa Euro",rate:.01107},{id:"FRF",name:"\ud83c\uddeb\ud83c\uddf7 French Frank",rate:.0726},{id:"GIP",name:"\ud83c\uddec\ud83c\uddee Gibraltar Pound",rate:.00963},{id:"HUF",name:"\ud83c\udded\ud83c\uddfa Hungarian Forint",rate:4.00644},{id:"ITL",name:"\ud83c\uddee\ud83c\uddf9 Italian Lira",rate:21.4312},{id:"JPY",name:"\ud83c\uddef\ud83c\uddf5 Japanese Yen",rate:1.46},{id:"KZT",name:"\ud83c\uddf0\ud83c\uddff Kazakhstan Tenge",rate:5.7048},{id:"LAK",name:"\ud83c\uddf1\ud83c\udde6 Lao Kip",rate:124.671},{id:"MDL",name:"\ud83c\uddf2\ud83c\udde9 Moldovan Leu",rate:.23693},{id:"NOK",name:"\ud83c\uddf3\ud83c\uddf4 Norwegian Kroner",rate:.11172},{id:"OMR",name:"\ud83c\uddf4\ud83c\uddf2 Omani Rial",rate:.00515},{id:"PL",name:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",rate:.05066},{id:"SKK",name:"\ud83c\uddf8\ud83c\uddf0 Slovak Koruna",rate:.33344},{id:"ESP",name:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:1.84161},{id:"US",name:"\ud83c\uddfa\ud83c\uddf8 US Dollar",rate:.01338}]},{id:"ESP",name:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",exchangeTo:[{id:"ALL",name:"\ud83c\udde6\ud83c\uddf1 Albanian Lek",rate:.73292},{id:"GBP",name:"\ud83c\uddec\ud83c\udde7 British Pound",rate:.00523},{id:"CZK",name:"\ud83c\udde8\ud83c\uddff Czech Koruna",rate:.15579},{id:"CAD",name:"\ud83c\udde8\ud83c\udde6 Canadian Dollar",rate:.00899},{id:"DKK",name:"\ud83c\udde9\ud83c\uddf0 Danish Krone",rate:.04469},{id:"EUR",name:"\ud83c\uddea\ud83c\uddfa Euro",rate:.00601},{id:"FRF",name:"\ud83c\uddeb\ud83c\uddf7 French Frank",rate:.03942},{id:"GIP",name:"\ud83c\uddec\ud83c\uddee Gibraltar Pound",rate:.00523},{id:"HUF",name:"\ud83c\udded\ud83c\uddfa Hungarian Forint",rate:2.17554},{id:"ITL",name:"\ud83c\uddee\ud83c\uddf9 Italian Lira",rate:11.6372},{id:"JPY",name:"\ud83c\uddef\ud83c\uddf5 Japanese Yen",rate:.79},{id:"KZT",name:"\ud83c\uddf0\ud83c\uddff Kazakhstan Tenge",rate:3.07685},{id:"LAK",name:"\ud83c\uddf1\ud83c\udde6 Lao Kip",rate:67.2405},{id:"MDL",name:"\ud83c\uddf2\ud83c\udde9 Moldovan Leu",rate:.12779},{id:"NOK",name:"\ud83c\uddf3\ud83c\uddf4 Norwegian Kroner",rate:.06025},{id:"OMR",name:"\ud83c\uddf4\ud83c\uddf2 Omani Rial",rate:.00278},{id:"PL",name:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",rate:.0275},{id:"RUB",name:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",rate:.54255},{id:"SKK",name:"\ud83c\uddf8\ud83c\uddf0 Slovak Koruna",rate:.18106},{id:"ESP",name:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:.00601},{id:"US",name:"\ud83c\uddfa\ud83c\uddf8 US Dollar",rate:.00726}]},{id:"ITL",name:"\ud83c\uddee\ud83c\uddf9 Italian Lira",exchangeTo:[{id:"ALL",name:"\ud83c\udde6\ud83c\uddf1 Albanian Lek",rate:.06298},{id:"GBP",name:"\ud83c\uddec\ud83c\udde7 British Pound",rate:45e-5},{id:"CZK",name:"\ud83c\udde8\ud83c\uddff Czech Koruna",rate:.01339},{id:"CAD",name:"\ud83c\udde8\ud83c\udde6 Canadian Dollar",rate:77e-5},{id:"DKK",name:"\ud83c\udde9\ud83c\uddf0 Danish Krone",rate:.00384},{id:"EUR",name:"\ud83c\uddea\ud83c\uddfa Euro",rate:52e-5},{id:"FRF",name:"\ud83c\uddeb\ud83c\uddf7 French Frank",rate:.00339},{id:"GIP",name:"\ud83c\uddec\ud83c\uddee Gibraltar Pound",rate:45e-5},{id:"HUF",name:"\ud83c\udded\ud83c\uddfa Hungarian Forint",rate:.18695},{id:"JPY",name:"\ud83c\uddef\ud83c\uddf5 Japanese Yen",rate:.07},{id:"KZT",name:"\ud83c\uddf0\ud83c\uddff Kazakhstan Tenge",rate:.2644},{id:"LAK",name:"\ud83c\uddf1\ud83c\udde6 Lao Kip",rate:5.77806},{id:"MDL",name:"\ud83c\uddf2\ud83c\udde9 Moldovan Leu",rate:.01098},{id:"NOK",name:"\ud83c\uddf3\ud83c\uddf4 Norwegian Kroner",rate:.00518},{id:"OMR",name:"\ud83c\uddf4\ud83c\uddf2 Omani Rial",rate:24e-5},{id:"PL",name:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",rate:.00236},{id:"RUB",name:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",rate:.04662},{id:"SKK",name:"\ud83c\uddf8\ud83c\uddf0 Slovak Koruna",rate:.01556},{id:"ESP",name:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:.08593},{id:"US",name:"\ud83c\uddfa\ud83c\uddf8 US Dollar",rate:62e-5}]},{id:"CAD",name:"\ud83c\udde8\ud83c\udde6 Canadian Dollar",exchangeTo:[{id:"ALL",name:"\ud83c\udde6\ud83c\uddf1 Albanian Lek",rate:81.5189},{id:"GBP",name:"\ud83c\uddec\ud83c\udde7 British Pound",rate:.58128},{id:"CZK",name:"\ud83c\udde8\ud83c\uddff Czech Koruna",rate:17.3268},{id:"DKK",name:"\ud83c\udde9\ud83c\uddf0 Danish Krone",rate:4.96957},{id:"EUR",name:"\ud83c\uddea\ud83c\uddfa Euro",rate:.66839},{id:"FRF",name:"\ud83c\uddeb\ud83c\uddf7 French Frank",rate:4.38437},{id:"GIP",name:"\ud83c\uddec\ud83c\uddee Gibraltar Pound",rate:.58128},{id:"HUF",name:"\ud83c\udded\ud83c\uddfa Hungarian Forint",rate:241.941},{id:"ITL",name:"\ud83c\uddee\ud83c\uddf9 Italian Lira",rate:1294.19},{id:"JPY",name:"\ud83c\uddef\ud83c\uddf5 Japanese Yen",rate:87.93},{id:"KZT",name:"\ud83c\uddf0\ud83c\uddff Kazakhstan Tenge",rate:347.896},{id:"LAK",name:"\ud83c\uddf1\ud83c\udde6 Lao Kip",rate:7602.82},{id:"MDL",name:"\ud83c\uddf2\ud83c\udde9 Moldovan Leu",rate:14.4486},{id:"NOK",name:"\ud83c\uddf3\ud83c\uddf4 Norwegian Kroner",rate:6.8127},{id:"OMR",name:"\ud83c\uddf4\ud83c\uddf2 Omani Rial",rate:.31397},{id:"PL",name:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",rate:3.05904},{id:"RUB",name:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",rate:60.3448},{id:"SKK",name:"\ud83c\uddf8\ud83c\uddf0 Slovak Koruna",rate:20.136},{id:"ESP",name:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:111.211},{id:"US",name:"\ud83c\uddfa\ud83c\uddf8 US Dollar",rate:.80804}]},{id:"CZK",name:"\ud83c\udde8\ud83c\uddff Czech Koruna",exchangeTo:[{id:"ALL",name:"\ud83c\udde6\ud83c\uddf1 Albanian Lek",rate:4.70172},{id:"GBP",name:"\ud83c\uddec\ud83c\udde7 British Pound",rate:.03353},{id:"CAD",name:"\ud83c\udde8\ud83c\udde6 Canadian Dollar",rate:.05767},{id:"DKK",name:"\ud83c\udde9\ud83c\uddf0 Danish Krone",rate:.28663},{id:"EUR",name:"\ud83c\uddea\ud83c\uddfa Euro",rate:.03855},{id:"FRF",name:"\ud83c\uddeb\ud83c\uddf7 French Frank",rate:.25289},{id:"GIP",name:"\ud83c\uddec\ud83c\uddee Gibraltar Pound",rate:.03353},{id:"HUF",name:"\ud83c\udded\ud83c\uddfa Hungarian Forint",rate:13.9543},{id:"ITL",name:"\ud83c\uddee\ud83c\uddf9 Italian Lira",rate:74.6476},{id:"JPY",name:"\ud83c\uddef\ud83c\uddf5 Japanese Yen",rate:5.07},{id:"KZT",name:"\ud83c\uddf0\ud83c\uddff Kazakhstan Tenge",rate:19.8583},{id:"LAK",name:"\ud83c\uddf1\ud83c\udde6 Lao Kip",rate:433.978},{id:"MDL",name:"\ud83c\uddf2\ud83c\udde9 Moldovan Leu",rate:.82475},{id:"NOK",name:"\ud83c\uddf3\ud83c\uddf4 Norwegian Kroner",rate:.38888},{id:"OMR",name:"\ud83c\uddf4\ud83c\uddf2 Omani Rial",rate:.01792},{id:"PL",name:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",rate:.17644},{id:"RUB",name:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",rate:3.48047},{id:"SKK",name:"\ud83c\uddf8\ud83c\uddf0 Slovak Koruna",rate:1.16143},{id:"ESP",name:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:6.41456},{id:"US",name:"\ud83c\uddfa\ud83c\uddf8 US Dollar",rate:.0466}]},{id:"SKK",name:"\ud83c\uddf8\ud83c\uddf0 Slovak Koruna",exchangeTo:[{id:"ALL",name:"\ud83c\udde6\ud83c\uddf1 Albanian Lek",rate:4.04793},{id:"GBP",name:"\ud83c\uddec\ud83c\udde7 British Pound",rate:.02886},{id:"CZK",name:"\ud83c\udde8\ud83c\uddff Czech Koruna",rate:.86041},{id:"CAD",name:"\ud83c\udde8\ud83c\udde6 Canadian Dollar",rate:.04965},{id:"DKK",name:"\ud83c\udde9\ud83c\uddf0 Danish Krone",rate:.24681},{id:"EUR",name:"\ud83c\uddea\ud83c\uddfa Euro",rate:.03319},{id:"FRF",name:"\ud83c\uddeb\ud83c\uddf7 French Frank",rate:.21774},{id:"GIP",name:"\ud83c\uddec\ud83c\uddee Gibraltar Pound",rate:.02886},{id:"HUF",name:"\ud83c\udded\ud83c\uddfa Hungarian Forint",rate:12.0155},{id:"ITL",name:"\ud83c\uddee\ud83c\uddf9 Italian Lira",rate:64.2724},{id:"JPY",name:"\ud83c\uddef\ud83c\uddf5 Japanese Yen",rate:4.37},{id:"KZT",name:"\ud83c\uddf0\ud83c\uddff Kazakhstan Tenge",rate:16.9934},{id:"LAK",name:"\ud83c\uddf1\ud83c\udde6 Lao Kip",rate:371.37},{id:"MDL",name:"\ud83c\uddf2\ud83c\udde9 Moldovan Leu",rate:.70576},{id:"NOK",name:"\ud83c\uddf3\ud83c\uddf4 Norwegian Kroner",rate:.33279},{id:"OMR",name:"\ud83c\uddf4\ud83c\uddf2 Omani Rial",rate:.01534},{id:"PL",name:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",rate:.15191},{id:"RUB",name:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",rate:2.9965},{id:"ESP",name:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",rate:5.523},{id:"US",name:"\ud83c\uddfa\ud83c\uddf8 US Dollar",rate:.04012}]}];var j=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(m,{children:[Object(o.jsx)(s,{title:"Currency Converter"}),Object(o.jsx)(b,{currencies:L}),Object(o.jsx)(l,{text:"\xa9 2021 | Coded by Szymon Rojek"})]})})},P=function(a){a&&a instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,t=e.getLCP,d=e.getTTFB;n(a),r(a),i(a),t(a),d(a)}))};d.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),P()}],[[18,1,2]]]);
//# sourceMappingURL=main.9f774def.chunk.js.map