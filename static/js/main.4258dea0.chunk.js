(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{249:function(e,t,r){"use strict";r.r(t);var n=r(41),a=r(1),o=r.n(a),i=r(10),c=r(0),l=r(14),s=r(3),u=r(2),h=r(6),m=r.n(h),d=r(45),f=r.n(d);function p(){p=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(N){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var u={};function h(){}function m(){}function d(){}var f={};c(f,a,function(){return this});var g=Object.getPrototypeOf,v=g&&g(g(I([])));v&&v!==t&&r.call(v,a)&&(f=v);var w=d.prototype=h.prototype=Object.create(f);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var n;this._invoke=function(a,o){function i(){return new t(function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function I(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return m.prototype=d,c(w,"constructor",d),c(d,"constructor",m),m.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},y(S.prototype),c(S.prototype,o,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new S(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(w),c(w,i,"Generator"),c(w,a,function(){return this}),c(w,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=I,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:I(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var g=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(window.localStorage.getItem("searchString")&&JSON.parse(window.localStorage.getItem("searchString"))?JSON.parse(window.localStorage.getItem("searchString")):""),h=Object(u.a)(c,2),d=h[0],g=h[1],v=Object(a.useState)(window.localStorage.getItem("MovieRequested")&&JSON.parse(window.localStorage.getItem("MovieRequested"))?JSON.parse(window.localStorage.getItem("MovieRequested")):[]),w=Object(u.a)(v,2),y=w[0],S=w[1],b=!1,E=Object(a.useState)(JSON.parse(window.localStorage.getItem("likedMovies"))?JSON.parse(window.localStorage.getItem("likedMovies")):[]),k=Object(u.a)(E,2),O=k[0],I=k[1],_=window.localStorage.getItem("likedMovies")&&JSON.parse(window.localStorage.getItem("likedMovies"))?JSON.parse(window.localStorage.getItem("likedMovies")):[],N=function(e){var t;for(t=0;t<_.length;t++)if(_[t].imdbID===e.imdbID){n(1);break}r?(e.isLiked=!1,n(0),_.splice(t,1),window.localStorage.removeItem("likedMovies"),window.localStorage.setItem("likedMovies",JSON.stringify(_)),I(_)):(e.isLiked=!0,n(1),window.localStorage.setItem("likedMovies",JSON.stringify([].concat(Object(s.a)(_),[e]))),I([].concat(Object(s.a)(_),[e])))},x=function(){var e=Object(l.a)(p().mark(function e(){var t,r,n,a;return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t="dd352830",r=[],n=1;case 3:if(!(n<2)){e.next=10;break}return a="http://www.omdbapi.com/?i=tt3896198&apikey="+t+"&type=movie&page="+n+"&s="+d,e.next=7,f.a.get(a).then(function(e){for(var t=e.data.Search,n=0;n<t.length;n++)r.push({imdbID:t[n].imdbID,Title:t[n].Title,Poster:t[n].Poster,Year:t[n].Year,isLiked:!1,isDisliked:!0})}).catch(function(e){console.log(e)});case 7:n++,e.next=3;break;case 10:S(r),window.localStorage.setItem("MovieRequested",JSON.stringify(r));case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return d&&b&&(x(),b=!b),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:m.a.searchBar},o.a.createElement("input",{type:"text",value:d,onChange:function(e){return g(e.target.value)},placeholder:"Search your movie here...",className:m.a.searchInput}),o.a.createElement("button",{type:"submit",className:m.a.searchButton,onClick:function(){x()}},"Search"),o.a.createElement(i.b,{to:"/liked"},o.a.createElement("p",{className:m.a.addTools},"\u2661",o.a.createElement("span",{className:m.a.num},O.length)))),y.map(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:m.a.searchDisp},o.a.createElement(i.b,{to:"/movie/"+e.imdbID,onClick:function(){var t;t=e,window.localStorage.setItem("MovieClicked",JSON.stringify(t)),window.localStorage.setItem("searchString",JSON.stringify(d)),b=!b}},o.a.createElement("img",{alt:e.imdbID,src:e.Poster,className:m.a.searchImgDisp})),o.a.createElement("div",{key:e.imdbID,className:m.a.littleInfo},e.isLiked?o.a.createElement("div",{className:m.a.notlikeButton,onClick:function(){N(e)}},"\u2665"):o.a.createElement("div",{className:m.a.likeButton,onClick:function(){N(e)}},"\u2661"),o.a.createElement("div",{className:m.a.movieTitle},o.a.createElement("h3",null,e.Title)))))}))},v=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),r=t[0],n=t[1],c=JSON.parse(window.localStorage.getItem("MovieClicked")),l=Object(a.useState)(window.localStorage.getItem("likedMovies")&&JSON.parse(window.localStorage.getItem("likedMovies"))?JSON.parse(window.localStorage.getItem("likedMovies")):[]),h=Object(u.a)(l,2),d=h[0],f=h[1],p=window.localStorage.getItem("likedMovies")&&JSON.parse(window.localStorage.getItem("likedMovies"))?JSON.parse(window.localStorage.getItem("likedMovies")):[];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:m.a.addTools},"\u2661 ",o.a.createElement("span",{className:m.a.num},d.length)),o.a.createElement("img",{alt:"",src:c.Poster}),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){!function(e){var t;for(t=0;t<p.length;t++)if(p[t].imdbID===e.imdbID){n(!0);break}r?(p.splice(t,1),window.localStorage.removeItem("likedMovies"),window.localStorage.setItem("likedMovies",JSON.stringify(p)),f(p)):(window.localStorage.setItem("likedMovies",JSON.stringify([].concat(Object(s.a)(p),[e]))),f([].concat(Object(s.a)(p),[e])))}(c)}}," Like "),o.a.createElement(i.b,{to:"/"},o.a.createElement("button",null," Back ")))},w=function(){var e=Object(a.useState)(window.localStorage.getItem("likedMovies")&&JSON.parse(window.localStorage.getItem("likedMovies"))?JSON.parse(window.localStorage.getItem("likedMovies")):[]),t=Object(u.a)(e,2),r=t[0];t[1];return o.a.createElement(o.a.Fragment,null,r.map(function(e){return console.log(e),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("img",{src:e.Poster})))}))},y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/",element:o.a.createElement(g,null)}),o.a.createElement(c.a,{path:"/home",element:o.a.createElement(g,null)}),o.a.createElement(c.a,{path:"/liked",element:o.a.createElement(w,null)}),o.a.createElement(c.a,{path:"/movie/:id",element:o.a.createElement(v,null)}))))};Object(n.a)(o.a.createElement(y,null),document.getElementById("root"))},46:function(e,t,r){e.exports=r(249)},6:function(e,t,r){e.exports={searchBar:"styles_searchBar__2Vgcr",searchInput:"styles_searchInput__QJB2y",searchButton:"styles_searchButton__29bn6",addTools:"styles_addTools__2pXId",num:"styles_num__2HGxV",searchDisp:"styles_searchDisp__2wFr9",searchImgDisp:"styles_searchImgDisp__1do4D",littleInfo:"styles_littleInfo__14xJR",notlikeButton:"styles_notlikeButton__2F-8h",likeButton:"styles_likeButton__1v-Lv",movieTitle:"styles_movieTitle__1-gNy"}}},[[46,2,1]]]);
//# sourceMappingURL=main.4258dea0.chunk.js.map