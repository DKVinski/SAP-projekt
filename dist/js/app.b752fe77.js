(function(t){function e(e){for(var a,c,o=e[0],s=e[1],u=e[2],l=0,f=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0aec9a":"4866b352","chunk-2d216727":"68d726b9","chunk-2d22fd7f":"a016e905"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=c(t);var u=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}r[t]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"419e":function(t,e,n){"use strict";var a=n("640f"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),r=n("ce5b"),i=n.n(r);n("bf40");a["default"].use(i.a,{iconfont:"md"});var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("app-navigation"),n("v-content",{attrs:{transition:"slide-x-transition"}},[n("router-view")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("v-navigation-drawer",{staticClass:"blue lighten-2",attrs:{app:"",dark:"","disable-resize-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[t._l(t.items,function(e,a){return[n("v-list-tile",{key:a,attrs:{to:e.url}},[n("v-list-tile-content",[t._v("\n                        "+t._s(e.title)+"\n                    ")])],1),n("v-divider",{key:"divider-"+a})]})],2)],1),n("v-toolbar",{attrs:{app:"",color:"blue darken-4",dark:""}},[n("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),n("v-spacer",{staticClass:"hidden-md-and-up"}),n("router-link",{attrs:{to:"/"}},[n("v-toolbar-title",{attrs:{"data-cy":"titleBtn"}},[t._v(t._s(t.appTitle))])],1),n("v-btn",{staticClass:"hidden-sm-and-down nav-stranica1",attrs:{flat:"",to:"/stranica1","data-cy":"menuBtn"}},[t._v("Stranica1")]),n("v-btn",{staticClass:"hidden-sm-and-down nav-stranica2",attrs:{flat:"",to:"/stranica2","data-cy":"menuBtn"}},[t._v("Stranica2")])],1)],1)},u=[],l={name:"AppNavigation",data:function(){return{appTitle:"SAP projekt",drawer:!1,items:[{title:"Stranica1",url:"/stranica1"},{title:"Stranica2",url:"/stranica2"}]}}},d=l,f=(n("419e"),n("2877")),p=Object(f["a"])(d,s,u,!1,null,"40147a2a",null),b=p.exports,m={name:"App",components:{AppNavigation:b}},v=m,h=Object(f["a"])(v,c,o,!1,null,null,null),g=h.exports,w=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("home"),n("home-details")],1)},k=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"home",staticStyle:{"max-height":"100vh"},attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":"",column:"","pa-5":""}},[n("div",{staticClass:"display-4 font-weight-black black--text text-xs-center"},[t._v("\n            SPA projekt\n        ")]),n("div",{staticClass:"display-1 font-weight-bold black--text text-xs-center"},[t._v("\n            Razvoj programske potrpore za web\n        ")]),n("v-btn",{staticClass:"mt-5 blue darken-4",attrs:{fab:""}},[n("v-icon",{attrs:{large:"",color:"white"}},[t._v("expand_more")])],1)],1)],1)},x=[],j={name:"Home"},C=j,O=(n("b9bf"),Object(f["a"])(C,_,x,!1,null,"397e645b",null)),S=O.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"blue lighten-4",attrs:{fluid:""}},[n("v-container",{attrs:{"grid-list-lg":""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",{staticClass:"display-2 font-weight-black blue--text text-xs-center my-5"},[t._v("Something to fill the space")]),n("v-flex",[n("div",{staticClass:"headline mt-3 blue--text font-weight-bold"},[t._v("\n                    Lorem ipsum\n                ")]),n("p",{staticClass:"subheading mt-3"},[t._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Cras pulvinar risus quis mauris interdum, in euismod\n                    nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque\n                    sollicitudin, mauris a consequat consectetur, turpis\n                    nisl sollicitudin enim, id consectetur neque neque nec\n                    metus. Pellentesque dolor nisi, vulputate quis lobortis\n                    ac, tincidunt et quam. Mauris pulvinar blandit nisi nec\n                    mattis. Aliquam accumsan ut sem eget efficitur. Vivamus\n                    in tortor gravida eros laoreet condimentum nec vel dui.\n                    Nullam quam massa, ultrices eget tincidunt a, pulvinar\n                    ac libero.\n                ")])])],1)],1)],1)},q=[],A={name:"HomeDetails"},E=A,T=Object(f["a"])(E,P,q,!1,null,"0afc827c",null),H=T.exports,M={name:"HomeView",components:{Home:S,HomeDetails:H}},$=M,z=Object(f["a"])($,y,k,!1,null,null,null),B=z.exports;a["default"].use(w["a"]);var N=new w["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:B},{path:"/stranica1",name:"stranica1",component:function(){return n.e("chunk-2d22fd7f").then(n.bind(null,"ea6c"))}},{path:"/stranica2",name:"stranica2",component:function(){return n.e("chunk-2d216727").then(n.bind(null,"c301"))}},{path:"*",name:"pageNotFound",component:function(){return n.e("chunk-2d0aec9a").then(n.bind(null,"0c0a"))}}]}),I=N,L=n("2f62");n("8aa5");a["default"].use(L["a"]);var D=new L["a"].Store({state:{listOfWords:[]},actions:{}}),V=n("59ca"),J=n.n(V),F={apiKey:"AIzaSyBeUPvHd1a1yVdv5uNAjn347xMiPTigbnw",authDomain:"sap-projekt-7a23c.firebaseapp.com",projectId:"sap-projekt-7a23c",storageBucket:"sap-projekt-7a23c.appspot.com",messagingSenderId:"195877428642",appId:"1:195877428642:web:033925fb6e99324575e6fb"};J.a.initializeApp(F),a["default"].config.productionTip=!1;var K=new a["default"]({router:I,store:D,render:function(t){return t(g)}}).$mount("#app");window.Cypress&&(window.app=K)},"640f":function(t,e,n){},b9bf:function(t,e,n){"use strict";var a=n("bcf4"),r=n.n(a);r.a},bcf4:function(t,e,n){}});
//# sourceMappingURL=app.b752fe77.js.map