(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2057682c"],{1399:function(t,e,n){"use strict";n("1660")},1660:function(t,e,n){},"3ad6":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.article?n("div",{staticClass:"article"},[n("div",{staticClass:"header fz-lg"},[n("strong",{staticClass:"iconfont icon-back text-blue",on:{click:function(e){return t.$router.back()}}}),n("strong",{staticClass:"title fz-xl"},[t._v(t._s(t.article.title))]),n("div",{staticClass:"text-grey fz-sm"},[t._v(t._s(t._f("date")(t.article.createdAt)))])]),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.article.body)}})]):t._e()},a=[],c=n("1da1"),i=(n("96cf"),n("5a0c")),s=n.n(i),l={props:{id:String},data:function(){return{article:null}},methods:{fetch:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/articles/"+t.id);case 2:n=e.sent,t.article=n.data;case 4:case"end":return e.stop()}}),e)})))()}},filters:{date:function(t){return s()(t).format("YYYY/MM/DD")}},created:function(){this.fetch()}},o=l,u=(n("1399"),n("2877")),f=Object(u["a"])(o,r,a,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2057682c.61d5a076.js.map