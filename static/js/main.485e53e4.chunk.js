(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var r,i,n,d,o,c,l,s,p,u,b,x,g,j,O,h,f,m,U,S,A,L,K,C=a(1),I=a.n(C),v=a(9),D=a.n(v),R=(a(18),a(3)),P=a(2),E=P.default.div(r||(r=Object(R.a)(["\n  margin: 0 auto;\n  max-width: 550px;\n  padding: 0 20px 0 20px;\n  color: rgba(255, 255, 255, 0.79);\n"]))),G=a(0),M=function(e){var t=e.children;return Object(G.jsx)(E,{children:t})},Z=P.default.header(i||(i=Object(R.a)([""]))),w=P.default.h1(n||(n=Object(R.a)(["\n  padding-bottom: 10px;\n  font-size: 30px;\n  line-height: 1.5;\n  letter-spacing: 2px;\n  word-spacing: 4px;\n  text-align: center;\n"]))),F=function(e){var t=e.title;return Object(G.jsx)(Z,{children:Object(G.jsx)(w,{children:t})})},k=P.default.footer(d||(d=Object(R.a)(["\n  text-align: center;\n"]))),y=P.default.p(o||(o=Object(R.a)(["\n  padding-top: 30px;\n  font-size: 18px;\n"]))),z=function(e){var t=e.title;return Object(G.jsx)(k,{children:Object(G.jsx)(y,{children:t})})},T=a(4),B=P.default.li(c||(c=Object(R.a)(["\n  display: flex;\n  align-items: left;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 35px;\n  background-color: #9ac0d8d7;\n"]))),J=P.default.p(l||(l=Object(R.a)(["\n  padding-left: 20px;\n  font-size: 20px;\n  color: #3b3c47;\n"]))),H=function(e){var t=e.result;return Object(G.jsxs)(B,{children:[Object(G.jsxs)(J,{children:["cash in: ",null===t||void 0===t?void 0:t.amount," ",t.getIdCurrencyFrom]}),Object(G.jsxs)(J,{children:["cash out: ",t.calculatedAmount?t.calculatedAmount.toFixed(2):""," ",t.getTargetId]})]})},N=P.default.label(s||(s=Object(R.a)(["\nmargin-top: 120px;\n"]))),Y=P.default.p(p||(p=Object(R.a)(["\n  display: inline-block;\n  padding: 8px;\n  margin-bottom: 5px;\n  font-size: 15px;\n  color: #186889;\n  letter-spacing: 1px;\n  word-spacing: 3px;\n  background-color: #9ac0d8d7;\n"]))),q=P.default.div(u||(u=Object(R.a)(["\n  position: relative;\n"]))),Q=P.default.input(b||(b=Object(R.a)(["  \n  padding: 8px 30px 8px 10px;\n  font-size: 16px;\n  letter-spacing: 2px;\n  background-color: #4d5061c1;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, .5);\n  border: none;\n  border-radius: 3px;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  outline: none;\n  min-height: 35px;\n  width: 100%;\n  color: rgba(255, 255, 255, 0.79);\n\n  &::placeholder {\n    color: rgba(255, 255, 255, 0.79);\n  }\n\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n  }\n\n  &:focus + span {\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n    border: 2px solid #186889;\n    border-radius: 4px;\n    pointer-events: none;\n    z-index: 1;\n  }\n\n  @media (min-width: 640px) {\n    & {\n      padding: 15px;\n      font-size: 18px;\n    }\n  }\n"]))),V=function(e){var t=e.amount,a=e.setAmount,r=e.inputTypedAmount,i=e.getIdCurrencyFrom;return Object(G.jsxs)(N,{children:[Object(G.jsxs)(Y,{children:["Amount in ",i,"*:"]}),Object(G.jsxs)(q,{children:[Object(G.jsx)(Q,{ref:r,value:t,onChange:function(e){var t=e.target;return a(t.value)},type:"number",name:"amount",min:"0.01",step:"0.01",placeholder:"type here",required:!0}),Object(G.jsx)("span",{})]})]})},W=P.default.div(x||(x=Object(R.a)(["\n   position: relative;\n"]))),X=P.default.select(g||(g=Object(R.a)(["\n  padding: 8px 30px 8px 10px;\n  font-size: 16px;\n  letter-spacing: 2px;\n  background-color: #4d5061c1;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, .5);\n  border: none;\n  border-radius: 3px;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  outline: none;\n  display: inline-block;\n  min-height: 35px;\n  width: 100%;\n  color: rgba(255, 255, 255, 0.79);\n  cursor: pointer;\n\n  &:focus + span {\n    position: absolute;\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n    border: 2px solid #186889;\n    border-radius: 4px;\n    pointer-events: none;\n    z-index: 1;\n  }\n\n  @media (min-width: 640px) {\n    & {\n      padding: 15px;\n      font-size: 18px;\n    }\n  }\n"]))),$=P.default.span(j||(j=Object(R.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 2rem;\n  background-color: #3b3c47;\n  pointer-events: none;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n\n  &::before,\n  &::after {\n    --size: 5px;\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n  }\n\n  &::before {\n    border-left: var(--size) solid transparent;\n    border-right: var(--size) solid transparent;\n    border-top: var(--size) solid rgba(255, 255, 255, 0.79);\n  }\n"]))),_=function(e){var t=e.currencies,a=e.value,r=e.onChange;return Object(G.jsxs)(W,{children:[Object(G.jsx)(X,{value:a,onChange:function(e){var t=e.target;return r(t.value)},children:t.map((function(e){return Object(G.jsx)("option",{children:e.name},e.id)}))}),Object(G.jsx)("span",{}),Object(G.jsx)($,{})]})},ee=P.default.div(O||(O=Object(R.a)(["\n  text-align: center;\n  padding: 20px;\n"]))),te=P.default.button(h||(h=Object(R.a)(["\n  padding: 10px 15px;\n  border-radius: 3px;\n  border: none;\n  color: rgba(255, 255, 255, 0.79);\n  background-color: #4d5061c1;\n  letter-spacing: 1px;\n  outline: none;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: all .3s ease-in-out;\n\n  &:hover {\n    transform: translateY(-1px);\n  }\n\n  &:focus {\n    border: 2px solid #186889;\n  }\n\n  &:active {\n    background-color: #3b3c47;\n    transform: translateY(3px);\n  }\n\n  &:disabled {\n    background-color: #aeb0ba;\n    cursor: not-allowed;\n  }\n"]))),ae=function(e){var t=e.title;return Object(G.jsx)(ee,{children:Object(G.jsx)(te,{children:t})})},re=P.default.div(f||(f=Object(R.a)(["\n  margin: 50px 0 25px 0;\n  text-align: center;\n  background-color: #f0f9ff;\n  border-radius: 3px;\n"]))),ie=P.default.p(m||(m=Object(R.a)(["\n padding: 8px 0 8px 0;\n  font-size: 20px;\n  color: #186889;\n  line-height: 1.8;\n  letter-spacing: 3px;\n  word-spacing: 2px;\n"]))),ne=function(){var e=Object(C.useState)(new Date),t=Object(T.a)(e,2),a=t[0],r=t[1];return Object(C.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),Object(G.jsx)(re,{children:Object(G.jsx)(ie,{children:a.toLocaleString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit",second:"2-digit"})})})},de=[{id:"AL",name:"\ud83c\udde6\ud83c\uddf1 Albanian Lek",exchange:[{id:"AL",rate:1},{id:"GB",rate:.00699},{id:"CZ",rate:.20834},{id:"CA",rate:.01202},{id:"DK",rate:.05976},{id:"EU",rate:.00804},{id:"FR",rate:.05272},{id:"GI",rate:.00699},{id:"HU",rate:2.90919},{id:"IT",rate:15.5618},{id:"JP",rate:1.06},{id:"KZ",rate:4.13327},{id:"LA",rate:90.3273},{id:"MD",rate:.17166},{id:"NO",rate:.08094},{id:"OM",rate:.00373},{id:"PL",rate:.03678},{id:"RU",rate:.72561},{id:"SK",rate:.24212},{id:"ES",rate:.72561},{id:"US",rate:.00972}]},{id:"GB",name:"\ud83c\uddec\ud83c\udde7 British Pound",exchange:[{id:"AL",rate:140.222},{id:"GB",rate:1},{id:"CZ",rate:29.8041},{id:"CA",rate:1.71986},{id:"DK",rate:1.62299},{id:"EU",rate:1.14832},{id:"FR",rate:1.43506},{id:"GI",rate:1},{id:"HU",rate:416.168},{id:"IT",rate:2226.2},{id:"JP",rate:151.26},{id:"KZ",rate:591.034},{id:"LA",rate:12916.3},{id:"MD",rate:24.5465},{id:"NO",rate:11.574},{id:"OM",rate:.5334},{id:"PL",rate:5.21899},{id:"RU",rate:103.8},{id:"SK",rate:34.6369},{id:"ES",rate:191.3},{id:"US",rate:1.38992}]},{id:"CZ",name:"\ud83c\udde8\ud83c\uddff Czech Koruna",exchange:[{id:"AL",rate:4.70172},{id:"GB",rate:.03353},{id:"CZ",rate:1},{id:"CA",rate:.05767},{id:"DK",rate:.28663},{id:"EU",rate:.03855},{id:"FR",rate:.25289},{id:"GI",rate:.03353},{id:"HU",rate:13.9543},{id:"IT",rate:74.6476},{id:"JP",rate:5.07},{id:"KZ",rate:19.8583},{id:"LA",rate:433.978},{id:"MD",rate:.82475},{id:"NO",rate:.38888},{id:"OM",rate:.01792},{id:"PL",rate:.17644},{id:"RU",rate:3.48047},{id:"SK",rate:1.16143},{id:"ES",rate:6.41456},{id:"US",rate:.0466}]},{id:"CA",name:"\ud83c\udde8\ud83c\udde6 Canadian Dollar",exchange:[{id:"AL",rate:81.5189},{id:"GB",rate:.58128},{id:"CZ",rate:17.3268},{id:"CA",rate:1},{id:"DK",rate:4.96957},{id:"EU",rate:.66839},{id:"FR",rate:4.38437},{id:"GI",rate:.58128},{id:"HU",rate:241.941},{id:"IT",rate:1294.19},{id:"JP",rate:87.93},{id:"KZ",rate:347.896},{id:"LA",rate:7602.82},{id:"MD",rate:14.4486},{id:"NO",rate:6.8127},{id:"OM",rate:.31397},{id:"PL",rate:3.05904},{id:"RU",rate:60.3448},{id:"SK",rate:20.136},{id:"ES",rate:111.211},{id:"US",rate:.80804}]},{id:"DK",name:"\ud83c\udde9\ud83c\uddf0 Danish Krone",exchange:[{id:"AL",rate:16.3997},{id:"GB",rate:.11694},{id:"CZ",rate:3.48575},{id:"CA",rate:.20115},{id:"DK",rate:1},{id:"EU",rate:.13447},{id:"FR",rate:.88207},{id:"GI",rate:.11694},{id:"HU",rate:48.6731},{id:"IT",rate:260.373},{id:"JP",rate:17.69},{id:"KZ",rate:68.8423},{id:"LA",rate:1504.46},{id:"MD",rate:2.85912},{id:"NO",rate:1.34811},{id:"OM",rate:.06213},{id:"PL",rate:.61541},{id:"RU",rate:12.14},{id:"SK",rate:4.05108},{id:"ES",rate:22.3741},{id:"US",rate:.16256}]},{id:"EU",name:"\ud83c\uddea\ud83c\uddfa Euro",exchange:[{id:"AL",rate:121.948},{id:"GB",rate:.86851},{id:"CZ",rate:25.9207},{id:"CA",rate:1.49572},{id:"DK",rate:7.43527},{id:"EU",rate:1},{id:"FR",rate:6.55957},{id:"GI",rate:.86958},{id:"HU",rate:361.979},{id:"IT",rate:1936.27},{id:"JP",rate:131.56},{id:"KZ",rate:511.944},{id:"LA",rate:11187.9},{id:"MD",rate:21.2618},{id:"NO",rate:10.0255},{id:"OM",rate:.46202},{id:"PL",rate:4.56386},{id:"RU",rate:90.2726},{id:"SK",rate:30.126},{id:"ES",rate:166.386},{id:"US",rate:1.20878}]},{id:"FR",name:"\ud83c\uddeb\ud83c\uddf7 French Frank",exchange:[{id:"AL",rate:18.5908},{id:"GB",rate:.13257},{id:"CZ",rate:3.95158},{id:"CA",rate:.22802},{id:"DK",rate:1.1335},{id:"EU",rate:.15245},{id:"FR",rate:1},{id:"GI",rate:.13257},{id:"HU",rate:55.1833},{id:"IT",rate:295.182},{id:"JP",rate:20.06},{id:"KZ",rate:78.0454},{id:"LA",rate:1705.58},{id:"MD",rate:3.24134},{id:"NO",rate:1.52838},{id:"OM",rate:.07043},{id:"PL",rate:.69765},{id:"RU",rate:13.762},{id:"SK",rate:4.59268},{id:"ES",rate:25.3654},{id:"US",rate:.18428}]},{id:"GI",name:"\ud83c\uddec\ud83c\uddee Gibraltar Pound",exchange:[{id:"AL",rate:140.222},{id:"GB",rate:1},{id:"CZ",rate:29.8041},{id:"CA",rate:1.71986},{id:"DK",rate:8.54825},{id:"EU",rate:1.14974},{id:"FR",rate:7.54177},{id:"GI",rate:1},{id:"HU",rate:416.168},{id:"IT",rate:2226.2},{id:"JP",rate:151.26},{id:"KZ",rate:591.034},{id:"LA",rate:12916.3},{id:"MD",rate:24.5465},{id:"NO",rate:11.574},{id:"OM",rate:.5334},{id:"PL",rate:5.26191},{id:"RU",rate:103.8},{id:"SK",rate:34.6369},{id:"ES",rate:191.3},{id:"US",rate:1.38992}]},{id:"HU",name:"\ud83c\udded\ud83c\uddfa Hungarian Forint",exchange:[{id:"AL",rate:.33657},{id:"GB",rate:.0024},{id:"CZ",rate:.07154},{id:"CA",rate:.00413},{id:"DK",rate:.02052},{id:"EU",rate:.00276},{id:"FR",rate:.0181},{id:"GI",rate:.0024},{id:"HU",rate:1},{id:"IT",rate:5.34412},{id:"JP",rate:.36},{id:"KZ",rate:1.42721},{id:"LA",rate:31.1899},{id:"MD",rate:.05927},{id:"NO",rate:.02795},{id:"OM",rate:.00129},{id:"PL",rate:.01263},{id:"RU",rate:.00598},{id:"SK",rate:.08315},{id:"ES",rate:.45923},{id:"US",rate:.00334}]},{id:"IT",name:"\ud83c\uddee\ud83c\uddf9 Italian Lira",exchange:[{id:"AL",rate:.06298},{id:"GB",rate:45e-5},{id:"CZ",rate:.01339},{id:"CA",rate:77e-5},{id:"DK",rate:.00384},{id:"EU",rate:52e-5},{id:"FR",rate:.00339},{id:"GI",rate:45e-5},{id:"HU",rate:.18695},{id:"IT",rate:1},{id:"JP",rate:.07},{id:"KZ",rate:.2644},{id:"LA",rate:5.77806},{id:"MD",rate:.01098},{id:"NO",rate:.00518},{id:"OM",rate:24e-5},{id:"PL",rate:.00236},{id:"RU",rate:.04662},{id:"SK",rate:.01556},{id:"ES",rate:.08593},{id:"US",rate:62e-5}]},{id:"JP",name:"\ud83c\uddef\ud83c\uddf5 Japanese Yen",exchange:[{id:"AL",rate:.92698},{id:"GB",rate:.00661},{id:"CZ",rate:.19703},{id:"CA",rate:.01137},{id:"DK",rate:.05651},{id:"EU",rate:.0076},{id:"FR",rate:.04985},{id:"GI",rate:.00661},{id:"HU",rate:2.75119},{id:"IT",rate:14.7159},{id:"JP",rate:1},{id:"KZ",rate:3.8943},{id:"LA",rate:85.1049},{id:"MD",rate:.16174},{id:"NO",rate:.07626},{id:"OM",rate:.00351},{id:"PL",rate:.03479},{id:"RU",rate:.6862},{id:"SK",rate:.22896},{id:"ES",rate:1.26455},{id:"US",rate:.00919}]},{id:"KZ",name:"\ud83c\uddf0\ud83c\uddff Kazakhstan Tenge",exchange:[{id:"AL",rate:.23764},{id:"GB",rate:.00168},{id:"CZ",rate:.04997},{id:"CA",rate:.00285},{id:"DK",rate:.01442},{id:"EU",rate:.00194},{id:"FR",rate:.01272},{id:"GI",rate:.00168},{id:"HU",rate:.69518},{id:"IT",rate:3.75571},{id:"JP",rate:.25},{id:"KZ",rate:1},{id:"LA",rate:21.7032},{id:"MD",rate:.04125},{id:"NO",rate:.01945},{id:"OM",rate:9e-4},{id:"PL",rate:.00887},{id:"RU",rate:.17396},{id:"SK",rate:.05843},{id:"ES",rate:.32273},{id:"US",rate:.00234}]},{id:"LA",name:"\ud83c\uddf1\ud83c\udde6 Lao Kip",exchange:[{id:"AL",rate:.01067},{id:"GB",rate:8e-5},{id:"CZ",rate:.00224},{id:"CA",rate:13e-5},{id:"DK",rate:65e-5},{id:"EU",rate:9e-5},{id:"FR",rate:57e-5},{id:"GI",rate:8e-5},{id:"HU",rate:.0312},{id:"IT",rate:.16855},{id:"JP",rate:.01},{id:"KZ",rate:.04457},{id:"LA",rate:1},{id:"MD",rate:.00185},{id:"NO",rate:87e-5},{id:"OM",rate:4e-5},{id:"PL",rate:4e-4},{id:"RU",rate:.00781},{id:"SK",rate:.00262},{id:"ES",rate:.01448},{id:"US",rate:1e-4}]},{id:"MD",name:"\ud83c\uddf2\ud83c\udde9 Moldovan Leu",exchange:[{id:"AL",rate:5.66997},{id:"GB",rate:.04009},{id:"CZ",rate:1.19234},{id:"CA",rate:.0681},{id:"DK",rate:.34412},{id:"EU",rate:.04628},{id:"FR",rate:.30357},{id:"GI",rate:.04009},{id:"HU",rate:16.5867},{id:"IT",rate:89.6094},{id:"JP",rate:6.08},{id:"KZ",rate:23.6952},{id:"LA",rate:517.828},{id:"MD",rate:1},{id:"NO",rate:.46401},{id:"OM",rate:.02138},{id:"PL",rate:.21173},{id:"RU",rate:4.15052},{id:"SK",rate:1.39421},{id:"ES",rate:7.70025},{id:"US",rate:.05572}]},{id:"NO",name:"\ud83c\uddf3\ud83c\uddf4 Norwegian Kroner",exchange:[{id:"AL",rate:12.2139},{id:"GB",rate:.08635},{id:"CZ",rate:2.56846},{id:"CA",rate:.1467},{id:"DK",rate:.74127},{id:"EU",rate:.0997},{id:"FR",rate:.65397},{id:"GI",rate:.08635},{id:"HU",rate:35.7299},{id:"IT",rate:193.042},{id:"JP",rate:13.11},{id:"KZ",rate:51.0425},{id:"LA",rate:1115.47},{id:"MD",rate:2.11987},{id:"NO",rate:1},{id:"OM",rate:.04607},{id:"PL",rate:.45609},{id:"RU",rate:8.94077},{id:"SK",rate:3.00349},{id:"ES",rate:16.5883},{id:"US",rate:.12002}]},{id:"OM",name:"\ud83c\uddf4\ud83c\uddf2 Omani Rial",exchange:[{id:"AL",rate:263.642},{id:"GB",rate:1.8639},{id:"CZ",rate:55.4414},{id:"CA",rate:3.16648},{id:"DK",rate:16.0007},{id:"EU",rate:2.15189},{id:"FR",rate:14.1155},{id:"GI",rate:1.8639},{id:"HU",rate:771.245},{id:"IT",rate:4166.65},{id:"JP",rate:282.88},{id:"KZ",rate:1101.78},{id:"LA",rate:24077.9},{id:"MD",rate:45.7584},{id:"NO",rate:21.5756},{id:"OM",rate:1},{id:"PL",rate:9.84501},{id:"RU",rate:192.991},{id:"SK",rate:64.828},{id:"ES",rate:358.045},{id:"US",rate:2.59071}]},{id:"PL",name:"\ud83c\uddf5\ud83c\uddf1 Polish Zloty",exchange:[{id:"AL",rate:26.6228},{id:"GB",rate:.18816},{id:"CZ",rate:5.65865},{id:"CA",rate:.32654},{id:"DK",rate:1.62299},{id:"EU",rate:.21758},{id:"FR",rate:1.43191},{id:"GI",rate:.18984},{id:"HU",rate:79.0143},{id:"IT",rate:422.675},{id:"JP",rate:28.72},{id:"KZ",rate:111.819},{id:"LA",rate:2443.67},{id:"MD",rate:4.64403},{id:"NO",rate:2.18971},{id:"OM",rate:.10092},{id:"PL",rate:1},{id:"RU",rate:19.7077},{id:"SK",rate:6.57631},{id:"ES",rate:36.321},{id:"US",rate:.26389}]},{id:"RU",name:"\ud83c\uddf7\ud83c\uddfa Russian Rouble",exchange:[{id:"AL",rate:1.34992},{id:"GB",rate:.00963},{id:"CZ",rate:.28692},{id:"CA",rate:.01656},{id:"DK",rate:.08229},{id:"EU",rate:.01107},{id:"FR",rate:.0726},{id:"GI",rate:.00963},{id:"HU",rate:4.00644},{id:"IT",rate:21.4312},{id:"JP",rate:1.46},{id:"KZ",rate:5.7048},{id:"LA",rate:124.671},{id:"MD",rate:.23693},{id:"NO",rate:.11172},{id:"OM",rate:.00515},{id:"PL",rate:.05066},{id:"RU",rate:1},{id:"SK",rate:.33344},{id:"ES",rate:1.84161},{id:"US",rate:.01338}]},{id:"SK",name:"\ud83c\uddf8\ud83c\uddf0 Slovak Koruna",exchange:[{id:"AL",rate:4.04793},{id:"GB",rate:.02886},{id:"CZ",rate:.86041},{id:"CA",rate:.04965},{id:"DK",rate:.24681},{id:"EU",rate:.03319},{id:"FR",rate:.21774},{id:"GI",rate:.02886},{id:"HU",rate:12.0155},{id:"IT",rate:64.2724},{id:"JP",rate:4.37},{id:"KZ",rate:16.9934},{id:"LA",rate:371.37},{id:"MD",rate:.70576},{id:"NO",rate:.33279},{id:"OM",rate:.01534},{id:"PL",rate:.15191},{id:"RU",rate:2.9965},{id:"SK",rate:1},{id:"ES",rate:5.523},{id:"US",rate:.04012}]},{id:"ES",name:"\ud83c\uddea\ud83c\uddf8 Spanish Peseta",exchange:[{id:"AL",rate:.73292},{id:"GB",rate:.00523},{id:"CZ",rate:.15579},{id:"CA",rate:.00899},{id:"DK",rate:.04469},{id:"EU",rate:.00601},{id:"FR",rate:.03942},{id:"GI",rate:.00523},{id:"HU",rate:2.17554},{id:"IT",rate:11.6372},{id:"JP",rate:.79},{id:"KZ",rate:3.07685},{id:"LA",rate:67.2405},{id:"MD",rate:.12779},{id:"NO",rate:.06025},{id:"OM",rate:.00278},{id:"PL",rate:.0275},{id:"RU",rate:.54255},{id:"SK",rate:.18106},{id:"ES",rate:1},{id:"US",rate:.00726}]},{id:"US",name:"\ud83c\uddfa\ud83c\uddf8 US Dollar",exchange:[{id:"AL",rate:100.885},{id:"GB",rate:.71937},{id:"CZ",rate:21.4431},{id:"CA",rate:1.23738},{id:"DK",rate:6.15019},{id:"EU",rate:.82718},{id:"FR",rate:5.42597},{id:"GI",rate:.71937},{id:"HU",rate:299.419},{id:"IT",rate:1601.65},{id:"JP",rate:108.82},{id:"KZ",rate:425.279},{id:"LA",rate:9293.93},{id:"MD",rate:17.6625},{id:"NO",rate:8.32806},{id:"OM",rate:.38381},{id:"PL",rate:3.78578},{id:"RU",rate:74.6808},{id:"SK",rate:24.9197},{id:"ES",rate:137.632},{id:"US",rate:1}]}],oe=P.default.fieldset(U||(U=Object(R.a)(["\n  box-shadow: 6px 6px 19px 0px rgba(47, 50, 50, 0.54);\n  border-radius: 5px;\n  border: none;\n  background-image: url('https://www.researchgate.net/profile/M-Basri/publication/320925728/figure/fig3/AS:631619933192230@1527601335529/India-GDP-Growth-Interest-Rate-Forex-Reserves-Exchange-Rates-and-Current-Account.png');\n  background-position: left;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  z-index: 30;\n\n  &::after {\n    content: '';\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: #cfdde3c1;\n    border-radius: 5px;\n    position: absolute;\n    z-index: -10;\n  }\n"]))),ce=P.default.p(S||(S=Object(R.a)(["\n  margin-bottom: 10px;\n  font-size: 15px;\n  letter-spacing: 3px;\n  word-spacing: 2px;\n  color: #186889;\n  background-color: #9ac0d8d7;\n  max-width: 150px;\n  padding: 5px;\n"]))),le=P.default.li(A||(A=Object(R.a)(["\n  margin: ",";\n"])),(function(e){return e.margin})),se=P.default.ul(L||(L=Object(R.a)(["\n  padding: 10px;\n  list-style: none;\n"]))),pe=P.default.span(K||(K=Object(R.a)(["\n  display: inline-block;\n  padding: 8px;\n  margin-bottom: 5px;\n  font-size: 15px;\n  color: #186889;\n  letter-spacing: 1px;\n  word-spacing: 3px;\n  background-color: #9ac0d8d7;\n"]))),ue=function(){var e=Object(C.useState)(),t=Object(T.a)(e,2),a=t[0],r=t[1],i=Object(C.useState)(de[1].name),n=Object(T.a)(i,2),d=n[0],o=n[1],c=Object(C.useState)(de[16].name),l=Object(T.a)(c,2),s=l[0],p=l[1],u=Object(C.useState)({}),b=Object(T.a)(u,2),x=b[0],g=b[1],j=de.find((function(e){return e.name===d})).exchange,O=de.find((function(e){return e.name===d})).id,h=de.find((function(e){return e.name===s})).id,f=j.find((function(e){return e.id===h})).rate,m=Object(C.useRef)();return Object(G.jsx)("form",{onSubmit:function(e){e.preventDefault(),g({amount:a,calculatedAmount:+a*f,getIdCurrencyFrom:O,getTargetId:h}),m.current.value=""},children:Object(G.jsxs)(oe,{children:[Object(G.jsx)(ce,{children:"*fields required"}),Object(G.jsx)(ne,{}),Object(G.jsxs)(se,{children:[Object(G.jsx)(le,{children:Object(G.jsxs)("label",{children:[Object(G.jsx)(pe,{children:"Currency from*:"}),Object(G.jsx)(_,{currencies:de,value:d,onChange:o})]})}),Object(G.jsx)(le,{margin:"30px 0 30px",children:Object(G.jsxs)("label",{children:[Object(G.jsx)(pe,{children:"Currency to*:"}),Object(G.jsx)(_,{currencies:de,value:s,onChange:p})]})}),Object(G.jsx)("li",{children:Object(G.jsx)(V,{setAmount:r,inputTypedAmount:m,getIdCurrencyFrom:O})}),Object(G.jsx)(H,{result:x})]}),Object(G.jsx)(ae,{title:"count amount"})]})})};function be(){return Object(G.jsxs)(M,{children:[Object(G.jsx)(F,{title:"Currency Converter"}),Object(G.jsx)(ue,{}),Object(G.jsx)(z,{title:"\xa9 2021 | Coded by Szymon Rojek"})]})}var xe,ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,r=t.getFID,i=t.getFCP,n=t.getLCP,d=t.getTTFB;a(e),r(e),i(e),n(e),d(e)}))},je=a(13),Oe=Object(P.createGlobalStyle)(xe||(xe=Object(R.a)(["\n \n  ","\n\n  html {\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    min-height: 100vh;\n    font-family: 'Antonio', sans-serif;\n    background-color: #2e86abc4;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])),je.normalize);D.a.render(Object(G.jsxs)(I.a.StrictMode,{children:[Object(G.jsx)(Oe,{}),Object(G.jsx)(be,{})]}),document.getElementById("root")),ge()}},[[22,1,2]]]);
//# sourceMappingURL=main.485e53e4.chunk.js.map