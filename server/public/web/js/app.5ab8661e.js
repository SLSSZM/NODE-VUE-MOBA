(function(e){function n(n){for(var r,o,u=n[0],i=n[1],l=n[2],f=0,s=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&s.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(n);while(s.length)s.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-06d48f8c":"10345fb8","chunk-2057682c":"09f8f6aa","chunk-7a6b49b7":"42057875","chunk-5a7e309c":"ef1ead6d","chunk-6982b4ec":"a4398b42"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-2057682c":1,"chunk-7a6b49b7":1,"chunk-5a7e309c":1,"chunk-6982b4ec":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-06d48f8c":"31d6cfe0","chunk-2057682c":"2ee37128","chunk-7a6b49b7":"9210d90f","chunk-5a7e309c":"e0947377","chunk-6982b4ec":"5afe3ec8"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===c))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],f=l.getAttribute("data-href");if(f===r||f===c)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),t(a)},p.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var s=new Error;l=function(n){f.onerror=f.onload=null,clearTimeout(p);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,t[1](s)}c[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var p=f;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"458f":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],a=(t("5c0b"),t("2877")),u={},i=Object(a["a"])(u,o,c,!1,null,null,null),l=i.exports,f=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),s=function(){return t.e("chunk-5a7e309c").then(t.bind(null,"cd56"))},p=function(){return Promise.all([t.e("chunk-06d48f8c"),t.e("chunk-7a6b49b7")]).then(t.bind(null,"b3d7"))},d=function(){return Promise.all([t.e("chunk-06d48f8c"),t.e("chunk-2057682c")]).then(t.bind(null,"3ad6"))},h=function(){return t.e("chunk-6982b4ec").then(t.bind(null,"66a6"))};r["a"].use(f["a"]);var b=[{path:"/",redirect:"/main"},{path:"/main",component:s,children:[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:p},{path:"/articles/:id",name:"Article",component:d,props:!0}]},{path:"/heroes/:id",name:"Hero",component:h,props:!0}],m=new f["a"]({mode:"history",base:"/web/",routes:b}),v=m,g=t("bc3a"),y=t.n(g),k=y.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BASE_API||"/web/api",timeout:5e3}),w=k,_=t("7212"),E=t.n(_);t("bbe3");r["a"].config.productionTip=!1,r["a"].prototype.$http=w,r["a"].use(E.a),new r["a"]({router:v,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("458f")}});
//# sourceMappingURL=app.5ab8661e.js.map