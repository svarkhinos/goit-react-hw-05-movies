(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[2],{17:function(t,e,r){"use strict";r.d(e,"e",(function(){return h})),r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return f})),r.d(e,"d",(function(){return p})),r.d(e,"c",(function(){return d}));var n=r(18),o=r.n(n),i=r(20),c="https://api.themoviedb.org/3",a="9acbfb2c2d25c0e79e1c43f46316bf58";function u(){return s.apply(this,arguments)}function s(){return s=Object(i.a)(o.a.mark((function t(){var e,r,n,i=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",r=i.length>1&&void 0!==i[1]?i[1]:{},t.next=4,fetch(e,r);case 4:if(!(n=t.sent).ok){t.next=11;break}return t.next=8,n.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function h(){return u("".concat(c,"/trending/get-trending/week?api_key=").concat(a))}function l(t){return u("".concat(c,"/movie/").concat(t,"?api_key=").concat(a))}function f(t){return u("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(a))}function p(t){return u("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(a))}function d(t){return u("".concat(c,"/search/movie?api_key=").concat(a,"&query=").concat(t))}},18:function(t,e,r){t.exports=r(19)},19:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),c=new N(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return F()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=L(c,r);if(a){if(a===v)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=h(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var l="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function y(){}function b(){}function m(){}var g={};u(g,i,(function(){return this}));var j=Object.getPrototypeOf,x=j&&j(j(P([])));x&&x!==r&&n.call(x,i)&&(g=x);var w=m.prototype=y.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,c,a){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(l).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,a)}))}a(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:F}}function F(){return{value:e,done:!0}}return b.prototype=m,u(w,"constructor",m),u(m,"constructor",b),b.displayName=u(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},O(w),u(w,a,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},20:function(t,e,r){"use strict";function n(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void r(s)}a.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)}))}}r.d(e,"a",(function(){return o}))},21:function(t,e,r){"use strict";e.a=r.p+"static/media/default.2e01288c.jpg"},24:function(t,e,r){t.exports={btn:"Button_btn__2CIfn"}},25:function(t,e,r){t.exports={item:"MovieDetailsPage_item__24MzA",description:"MovieDetailsPage_description__2Z8rF"}},32:function(t,e,r){"use strict";r.r(e);var n=r(4),o=r(1),i=r(5),c=r(0),a=r(17),u=r(24),s=r.n(u),h=r(2),l=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{type:"button",className:s.a.btn,children:"Back"})})},f=r(25),p=r.n(f),d=r(21),v=Object(c.lazy)((function(){return r.e(0).then(r.bind(null,29))})),y=Object(c.lazy)((function(){return r.e(4).then(r.bind(null,30))}));e.default=function(){var t=Object(o.h)().movieID,e=Object(c.useState)(null),r=Object(n.a)(e,2),u=r[0],s=r[1],f=Object(c.useState)({}),b=Object(n.a)(f,2),m=b[0],g=b[1],j=Object(o.f)();return Object(c.useEffect)((function(){j.state&&g({pathname:j.state.pathname,search:j.state.search}),a.b(t).then((function(t){return s(t)}))}),[t,j.state]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i.b,{to:"".concat(m.pathname).concat(m.search),children:Object(h.jsx)(l,{})}),u&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:p.a.item,children:[Object(h.jsx)("img",{src:u.poster_path?"".concat("https://image.tmdb.org/t/p/w500").concat(u.poster_path):d.a,alt:u.title,width:"300px"}),Object(h.jsxs)("div",{className:p.a.description,children:[Object(h.jsx)("h2",{children:u.title}),Object(h.jsxs)("p",{children:["User Score: ",u.vote_average]}),Object(h.jsx)("h3",{children:"Overview"}),Object(h.jsx)("p",{children:u.overview}),Object(h.jsx)("h3",{children:"Genres"}),Object(h.jsx)("ul",{children:u.genres.map((function(t){return Object(h.jsx)("li",{children:t.name},t.id)}))})]})]}),Object(h.jsx)("div",{children:Object(h.jsxs)("ul",{children:["Additional information",Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{to:"/movies/".concat(t,"/cast"),children:"Cast"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{to:"/movies/".concat(t,"/reviews"),children:"Reviews"})})]})})]}),Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)("h2",{children:"Loading..."}),children:Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.b,{path:"/cast",element:Object(h.jsx)(v,{})}),Object(h.jsx)(o.b,{path:"/reviews",element:Object(h.jsx)(y,{})})]})})]})}}}]);
//# sourceMappingURL=MovieDetailsPage.30fea714.chunk.js.map