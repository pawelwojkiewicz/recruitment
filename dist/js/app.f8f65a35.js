(function(t){function e(e){for(var n,o,s=e[0],i=e[1],u=e[2],l=0,d=[];l<s.length;l++)o=s[l],c[o]&&d.push(c[o][0]),c[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,o=1;o<r.length;o++){var s=r[o];0!==c[s]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},c={app:0},a=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-81b197dc":"16e8d4d3","chunk-ca0e816e":"b40bd20c"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={"chunk-81b197dc":1,"chunk-ca0e816e":1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise(function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-81b197dc":"864b014c","chunk-ca0e816e":"48d5907a"}[t]+".css",c=i.p+n,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===c))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[t],p.parentNode.removeChild(p),r(a)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){o[t]=0}));var n=c[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,r){n=c[t]=[e,r]});e.push(n[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=c[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");a.type=n,a.request=o,r[1](a)}c[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/recruitment-task/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0e1a":function(t,e,r){t.exports=r.p+"img/modal-img.16a0139d.png"},1:function(t,e){},"437a":function(t,e,r){t.exports=r.p+"img/product-box-image.b973eed7.png"},"4baa":function(t,e,r){"use strict";var n=r("92c0"),o=r.n(n);o.a},"4c8e":function(t,e,r){"use strict";var n=r("751a"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",{staticClass:"header"},[n("div",{staticClass:"page-wrap"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"header-logo",attrs:{src:r("cf05"),alt:"Logo"},on:{click:t.closeModal}})]),n("nav",{staticClass:"header-navigation"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),n("router-link",{attrs:{to:"/contact"}},[t._v("Contact")]),n("div",{staticClass:"header-search",class:{active:t.searchActive}},[n("font-awesome-icon",{staticClass:"header-serach--icon",attrs:{icon:"search"},on:{click:t.openSearch}}),n("input",{staticClass:"header-search--input",attrs:{type:"text",placeholder:"Search..."}})],1)],1)],1)]),n("keep-alive",[n("router-view")],1)],1)},c=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),s=r("2f62");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(r,!0).forEach(function(e){Object(a["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var l={computed:u({},Object(s["d"])(["searchActive"])),methods:u({},Object(s["c"])(["openSearch","closeModal"]))},d=l,p=(r("5c0b"),r("2877")),f=Object(p["a"])(d,o,c,!1,null,null,null),m=f.exports,b=r("8c4f"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("Cart"),r("Products")],1)},v=[],g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"basket-panel"},[r("div",{staticClass:"contact"},[r("font-awesome-icon",{staticClass:"contact-icon",attrs:{icon:"address-book"}}),r("span",{staticClass:"contact-text"},[t._v("Contact")]),r("span",{staticClass:"contact-paragraph"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum arcu vitae nisi pharetra.")])],1),r("div",{staticClass:"cart"},[r("font-awesome-icon",{staticClass:"cart-icon",attrs:{icon:"shopping-cart"}}),r("span",{staticClass:"cart-text"},[t._v("Cart ("+t._s(this.cartQunatity)+")")]),r("ul",{staticClass:"cart-items"},[r("transition-group",{attrs:{name:"slide-fade"}},t._l(t.products,function(e,n){return r("li",{directives:[{name:"show",rawName:"v-show",value:e.bought,expression:"product.bought"}],key:n,staticClass:"cart-items-element"},[t._v("\n                    "+t._s(e.productname)+"\n                    "),r("font-awesome-icon",{staticClass:"delete-element",attrs:{icon:"times"},on:{click:function(e){return t.deleteProduct(n)}}})],1)}),0)],1)],1)])},O=[];function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(r,!0).forEach(function(e){Object(a["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var P={name:"Cart",computed:j({},Object(s["d"])(["products","cartQunatity","taskId"])),methods:j({},Object(s["b"])(["getProducts"]),{deleteProduct:function(t){this.$store.commit("deleteProduct",t)}})},w=P,C=(r("d589"),Object(p["a"])(w,g,O,!1,null,"5efd444d",null)),_=C.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products"},[n("ul",{staticClass:"products-list"},t._l(t.products,function(e,o){return n("li",{key:o,staticClass:"product",on:{click:function(r){return t.openModal(e,o)}}},[n("img",{staticClass:"product-image",attrs:{src:r("437a"),alt:"Product Image"}}),n("span",{staticClass:"product-title"},[t._v(t._s(e.productname))]),n("span",{staticClass:"product-short-text"},[t._v(" "+t._s(e.shortdesc))])])}),0),n("transition",{attrs:{name:"slide-fade"}},[t.modal?n("Modal"):t._e(),t.loading?n("div",{staticClass:"lds-ring"},[n("div"),n("div"),n("div"),n("div")]):t._e()],1)],1)},E=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[n("font-awesome-icon",{staticClass:"modal-close",attrs:{icon:"times"},on:{click:t.closeModal}}),n("img",{staticClass:"modal-img",attrs:{src:r("0e1a"),alt:"Modal Picture"}}),n("span",{staticClass:"modal-title"},[t._v(t._s(t.product.productname))]),n("span",{staticClass:"modal-description"},[t._v(t._s(t.product.longdesc)+" ")]),n("button",{staticClass:"modal-btn",class:{"modal-btn--added":t.product.bought},on:{click:t.buyProduct}},[n("span",{staticClass:"modal-btn-buy"},[t._v("Add To Cart")]),n("span",{staticClass:"modal-btn-bought"},[t._v("Added")])])],1)},x=[];function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function M(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(r,!0).forEach(function(e){Object(a["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var A={name:"Modal",computed:M({},Object(s["d"])(["product","productBought"])),methods:M({},Object(s["c"])(["closeModal","buyProduct"]),{buyProduct:function(){var t=document.querySelector(".modal-btn");t.classList.contains("modal-btn--added")||this.$store.commit("buyProduct")}})},$=A,I=(r("4c8e"),Object(p["a"])($,S,x,!1,null,"642c07e4",null)),L=I.exports;function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(r,!0).forEach(function(e){Object(a["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var Q={name:"Products",components:{Modal:L},computed:N({},Object(s["d"])(["products","modal","modalId","loading"])),methods:N({},Object(s["b"])(["getProducts"]),{openModal:function(t,e){this.$store.commit("openModal",t),this.$store.state.modalId=e}}),created:function(){this.getProducts()}},q=Q,B=(r("4baa"),Object(p["a"])(q,k,E,!1,null,"35f9d534",null)),H=B.exports,J={name:"home",components:{Cart:_,Products:H}},F=J,K=(r("d66a"),Object(p["a"])(F,h,v,!1,null,"20511026",null)),U=K.exports;n["a"].use(b["a"]);var z=new b["a"]({mode:"history",routes:[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return r.e("chunk-ca0e816e").then(r.bind(null,"f820"))}},{path:"/contact",name:"contact",component:function(){return r.e("chunk-81b197dc").then(r.bind(null,"b8fa"))}}]});n["a"].use(s["a"]);var G=new s["a"].Store({state:{searchActive:!1,products:[],modal:!1,product:[],modalId:"",taskId:"",cartQunatity:0,loading:!1},mutations:{openSearch:function(t){t.searchActive=!t.searchActive},setProducts:function(t,e){t.products=e},openModal:function(t,e){t.modal=!0,t.product=e},closeModal:function(t){t.modal=!1},buyProduct:function(t){t.product.bought=!0,t.cartQunatity++,n["a"].set(t.products,t.modalId,t.products[t.modalId])},deleteProduct:function(t,e){t.products[e].bought=!1,t.cartQunatity--},isLoading:function(t){t.loading=!0},loadingEnd:function(t){t.loading=!1}},actions:{getProducts:function(t){t.commit("isLoading"),n["a"].http.get("https://recruitment-task-30c3e.firebaseio.com/products.json").then(function(t){return t.json()}).then(function(e){var r=e;t.commit("loadingEnd"),console.log(e),t.commit("setProducts",r)})}}}),R=r("ecee"),V=r("c074"),W=r("ad3d"),X=r("28dd");n["a"].use(X["a"]),R["c"].add(V["b"],V["a"],V["c"],V["d"]),n["a"].component("font-awesome-icon",W["a"]),n["a"].config.productionTip=!1,new n["a"]({router:z,store:G,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),o=r.n(n);o.a},"5e27":function(t,e,r){},"68d0":function(t,e,r){},"751a":function(t,e,r){},"90db":function(t,e,r){},"92c0":function(t,e,r){},cf05:function(t,e,r){t.exports=r.p+"img/logo.2bb98d6b.png"},d589:function(t,e,r){"use strict";var n=r("90db"),o=r.n(n);o.a},d66a:function(t,e,r){"use strict";var n=r("68d0"),o=r.n(n);o.a}});
//# sourceMappingURL=app.f8f65a35.js.map