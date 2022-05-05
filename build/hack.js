(()=>{"use strict";var e={325:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(537),o=n.n(r),i=n(645),l=n.n(i)()(o());l.push([e.id,".user-info{padding:0 4px;display:flex;gap:4px}.user-info>.value{color:#fff;font-weight:bold}.user-info>.chip1{font-size:80%;padding:0px 6px;border-radius:8px;outline:1px solid rgba(255,255,255,.6);color:rgba(255,255,255,.6)}.user-info>.chip2{font-size:80%;padding:0px 4px;background:rgba(255,255,255,.08);border-radius:4px}.user-info .disabled{opacity:.3}.user-info .chip.disabled{text-decoration:line-through}","",{version:3,sources:["webpack://./src/components/user-info.scss"],names:[],mappings:"AAAA,WACE,aAAA,CACA,YAAA,CACA,OAAA,CAGF,kBACE,UAAA,CACA,gBAAA,CAGF,kBACE,aAAA,CACA,eAAA,CACA,iBAAA,CACA,sCAAA,CACA,0BAAA,CAGF,kBACE,aAAA,CACA,eAAA,CACA,gCAAA,CACA,iBAAA,CAGF,qBACE,UAAA,CAGF,0BACE,4BAAA",sourcesContent:[".user-info {\n  padding: 0 4px;\n  display: flex;\n  gap: 4px;\n}\n\n.user-info > .value {\n  color: white;\n  font-weight: bold;\n}\n\n.user-info > .chip1 {\n  font-size: 80%;\n  padding: 0px 6px;\n  border-radius: 8px;\n  outline: 1px solid rgba(255, 255, 255, 0.6);\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.user-info > .chip2 {\n  font-size: 80%;\n  padding: 0px 4px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n}\n\n.user-info .disabled {\n  opacity: 0.3;\n}\n\n.user-info .chip.disabled {\n  text-decoration: line-through;\n}\n"],sourceRoot:""}]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(r)for(var u=0;u<this.length;u++){var a=this[u][0];null!=a&&(l[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&l[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),l=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(l).concat([i]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},l=[],u=0;u<e.length;u++){var a=e[u],c=r.base?a[0]+r.base:a[0],s=i[c]||0,f="".concat(c," ").concat(s);i[c]=s+1;var p=n(f),_={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(_);else{var d=o(_,r);r.byIndex=u,t.splice(u,0,{identifier:f,updater:d,references:1})}l.push(f)}return l}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var l=0;l<i.length;l++){var u=n(i[l]);t[u].references--}for(var a=r(e,o),c=0;c<i.length;c++){var s=n(i[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=a}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],l=!0,u=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n){return function(t){if(Array.isArray(t))return e(t)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var _,d=new Uint8Array(16);function y(){if(!_&&!(_="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return _(d)}const h=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,v=function(e){return"string"==typeof e&&h.test(e)};for(var m=[],b=0;b<256;++b)m.push((b+256).toString(16).substr(1));const g=function(e,t,n){var r=(e=e||{}).random||(e.rng||y)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase();if(!v(n))throw TypeError("Stringified UUID is invalid");return n}(r)};var A=new Map,w=window.XMLHttpRequest;function C(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e){return null!=e&&"object"===s(e)&&!Array.isArray(e)}function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function E(e,t,n){return E=k()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o},E.apply(null,arguments)}function O(e){var t="function"==typeof Map?new Map:void 0;return O=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return E(e,arguments,p(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,e)},O(e)}var j,R=function(e){c(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=p(t);if(n){var o=p(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return f(this,e)});function o(){return u(this,o),r.call(this)}return l(o)}(O(HTMLElement)),M="custom-wrapper";function P(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.APPEND;return null==(t=e.querySelector(M))&&(t=document.createElement(M),"append"===n&&e.appendChild(t)),t}window.customElements.define(M,R),function(e){e.APPEND="append"}(j||(j={}));var T,L,U,I,F,N,D={},B=[],H=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function q(e,t){for(var n in t)e[n]=t[n];return e}function W(e){var t=e.parentNode;t&&t.removeChild(e)}function G(e,t,n){var r,o,i,l={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?T.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return V(e,l,r,o,null)}function V(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++U:o};return null==o&&null!=L.vnode&&L.vnode(i),i}function $(e){return e.children}function z(e,t){this.props=e,this.context=t}function Z(e,t){if(null==t)return e.__?Z(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?Z(e):null}function J(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return J(e)}}function X(e){(!e.__d&&(e.__d=!0)&&I.push(e)&&!Y.__r++||N!==L.debounceRendering)&&((N=L.debounceRendering)||F)(Y)}function Y(){for(var e;Y.__r=I.length;)e=I.sort((function(e,t){return e.__v.__b-t.__v.__b})),I=[],e.some((function(e){var t,n,r,o,i,l;e.__d&&(i=(o=(t=e).__v).__e,(l=t.__P)&&(n=[],(r=q({},o)).__v=o.__v+1,ie(l,o,r,t.__n,void 0!==l.ownerSVGElement,null!=o.__h?[i]:null,n,null==i?Z(o):i,o.__h),le(n,o),o.__e!=i&&J(o)))}))}function K(e,t,n,r,o,i,l,u,a,c){var s,f,p,_,d,y,h,v=r&&r.__k||B,m=v.length;for(n.__k=[],s=0;s<t.length;s++)if(null!=(_=n.__k[s]=null==(_=t[s])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?V(null,_,null,null,_):Array.isArray(_)?V($,{children:_},null,null,null):_.__b>0?V(_.type,_.props,_.key,null,_.__v):_)){if(_.__=n,_.__b=n.__b+1,null===(p=v[s])||p&&_.key==p.key&&_.type===p.type)v[s]=void 0;else for(f=0;f<m;f++){if((p=v[f])&&_.key==p.key&&_.type===p.type){v[f]=void 0;break}p=null}ie(e,_,p=p||D,o,i,l,u,a,c),d=_.__e,(f=_.ref)&&p.ref!=f&&(h||(h=[]),p.ref&&h.push(p.ref,null,_),h.push(f,_.__c||d,_)),null!=d?(null==y&&(y=d),"function"==typeof _.type&&_.__k===p.__k?_.__d=a=Q(_,a,e):a=ee(e,_,p,v,d,a),"function"==typeof n.type&&(n.__d=a)):a&&p.__e==a&&a.parentNode!=e&&(a=Z(p))}for(n.__e=y,s=m;s--;)null!=v[s]&&("function"==typeof n.type&&null!=v[s].__e&&v[s].__e==n.__d&&(n.__d=Z(r,s+1)),ce(v[s],v[s]));if(h)for(s=0;s<h.length;s++)ae(h[s],h[++s],h[++s])}function Q(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?Q(r,t,n):ee(n,r,r,o,r.__e,t));return t}function ee(e,t,n,r,o,i){var l,u,a;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),l=null;else{for(u=i,a=0;(u=u.nextSibling)&&a<r.length;a+=2)if(u==o)break e;e.insertBefore(o,i),l=i}return void 0!==l?l:o.nextSibling}function te(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||H.test(t)?n:n+"px"}function ne(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||te(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||te(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?oe:re,i):e.removeEventListener(t,i?oe:re,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function re(e){this.l[e.type+!1](L.event?L.event(e):e)}function oe(e){this.l[e.type+!0](L.event?L.event(e):e)}function ie(e,t,n,r,o,i,l,u,a){var c,s,f,p,_,d,y,h,v,m,b,g=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(a=n.__h,u=t.__e=n.__e,t.__h=null,i=[u]),(c=L.__b)&&c(t);try{e:if("function"==typeof g){if(h=t.props,v=(c=g.contextType)&&r[c.__c],m=c?v?v.props.value:c.__:r,n.__c?y=(s=t.__c=n.__c).__=s.__E:("prototype"in g&&g.prototype.render?t.__c=s=new g(h,m):(t.__c=s=new z(h,m),s.constructor=g,s.render=se),v&&v.sub(s),s.props=h,s.state||(s.state={}),s.context=m,s.__n=r,f=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=g.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=q({},s.__s)),q(s.__s,g.getDerivedStateFromProps(h,s.__s))),p=s.props,_=s.state,f)null==g.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==g.getDerivedStateFromProps&&h!==p&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(h,m),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(h,s.__s,m)||t.__v===n.__v){s.props=h,s.state=s.__s,t.__v!==n.__v&&(s.__d=!1),s.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),s.__h.length&&l.push(s);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(h,s.__s,m),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(p,_,d)}))}s.context=m,s.props=h,s.state=s.__s,(c=L.__r)&&c(t),s.__d=!1,s.__v=t,s.__P=e,c=s.render(s.props,s.state,s.context),s.state=s.__s,null!=s.getChildContext&&(r=q(q({},r),s.getChildContext())),f||null==s.getSnapshotBeforeUpdate||(d=s.getSnapshotBeforeUpdate(p,_)),b=null!=c&&c.type===$&&null==c.key?c.props.children:c,K(e,Array.isArray(b)?b:[b],t,n,r,o,i,l,u,a),s.base=t.__e,t.__h=null,s.__h.length&&l.push(s),y&&(s.__E=s.__=null),s.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ue(n.__e,t,n,r,o,i,l,a);(c=L.diffed)&&c(t)}catch(e){t.__v=null,(a||null!=i)&&(t.__e=u,t.__h=!!a,i[i.indexOf(u)]=null),L.__e(e,t,n)}}function le(e,t){L.__c&&L.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){L.__e(e,t.__v)}}))}function ue(e,t,n,r,o,i,l,u){var a,c,s,f=n.props,p=t.props,_=t.type,d=0;if("svg"===_&&(o=!0),null!=i)for(;d<i.length;d++)if((a=i[d])&&"setAttribute"in a==!!_&&(_?a.localName===_:3===a.nodeType)){e=a,i[d]=null;break}if(null==e){if(null===_)return document.createTextNode(p);e=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,p.is&&p),i=null,u=!1}if(null===_)f===p||u&&e.data===p||(e.data=p);else{if(i=i&&T.call(e.childNodes),c=(f=n.props||D).dangerouslySetInnerHTML,s=p.dangerouslySetInnerHTML,!u){if(null!=i)for(f={},d=0;d<e.attributes.length;d++)f[e.attributes[d].name]=e.attributes[d].value;(s||c)&&(s&&(c&&s.__html==c.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||ne(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||ne(e,i,t[i],n[i],r)}(e,p,f,o,u),s)t.__k=[];else if(d=t.props.children,K(e,Array.isArray(d)?d:[d],t,n,r,o&&"foreignObject"!==_,i,l,i?i[0]:n.__k&&Z(n,0),u),null!=i)for(d=i.length;d--;)null!=i[d]&&W(i[d]);u||("value"in p&&void 0!==(d=p.value)&&(d!==e.value||"progress"===_&&!d||"option"===_&&d!==f.value)&&ne(e,"value",d,f.value,!1),"checked"in p&&void 0!==(d=p.checked)&&d!==e.checked&&ne(e,"checked",d,f.checked,!1))}return e}function ae(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){L.__e(e,n)}}function ce(e,t,n){var r,o;if(L.unmount&&L.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ae(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){L.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&ce(r[o],t,"function"!=typeof e.type);n||null==e.__e||W(e.__e),e.__e=e.__d=void 0}function se(e,t,n){return this.constructor(e,n)}function fe(e,t,n){var r,o,i;L.__&&L.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,i=[],ie(t,e=(!r&&n||t).__k=G($,null,[e]),o||D,D,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?T.call(t.childNodes):null,i,!r&&n?n:o?o.__e:t.firstChild,r),le(i,e)}T=B.slice,L={__e:function(e,t,n,r){for(var o,i,l;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),l=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),l=o.__d),l)return o.__E=o}catch(t){e=t}throw e}},U=0,z.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=q({},this.state),"function"==typeof e&&(e=e(q({},n),this.props)),e&&q(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),X(this))},z.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),X(this))},z.prototype.render=$,I=[],F="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Y.__r=0;var pe=n(379),_e=n.n(pe),de=n(795),ye=n.n(de),he=n(569),ve=n.n(he),me=n(565),be=n.n(me),ge=n(216),Ae=n.n(ge),we=n(589),Ce=n.n(we),xe=n(325),Se={};function ke(e){var t=e.user,n=e.styles;return G("div",{class:"user-info",style:{color:null==n?void 0:n.color,fontFamily:null==n?void 0:n.fontFamily,lineHeight:null==n?void 0:n.lineHeight}},G("span",null,"·"),G("span",{class:"value"},function(e){return new Intl.NumberFormat("en-US").format(e)}(t.followers_count)),G("span",{class:"label"},"Followers"),G("span",{class:"".concat(t.following?"":"disabled")},"·"),G("span",{class:"chip chip1 ".concat(t.following?"":"disabled")},"Following"),G("span",{class:"".concat(t.followed_by?"":"disabled")},"·"),G("span",{class:"chip chip2 ".concat(t.followed_by?"":"disabled")},"Follows you"))}function Ee(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return Oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Oe(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}}function Oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Se.styleTagTransform=Ce(),Se.setAttributes=be(),Se.insert=ve().bind(null,"head"),Se.domAPI=ye(),Se.insertStyleElement=Ae(),_e()(xe.Z,Se),xe.Z&&xe.Z.locals&&xe.Z.locals;var je=new Map;(window.XMLHttpRequest=function(e){c(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=p(t);if(n){var o=p(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return f(this,e)});function o(){var e;return u(this,o),(e=r.call(this)).addEventListener("readystatechange",(function(){e.readyState===XMLHttpRequest.DONE&&"string"==typeof e.response&&A.forEach((function(t){var n=t.urls,r=t.callback;n.filter((function(t){return e.responseURL.match(t)})).forEach((function(){var t=JSON.parse(e.response);r(t)}))}))})),e}return l(o)}(w),{subscribe:function(e,t){var n=g();return A.set(n,{urls:e.map((function(e){return"string"==typeof e?new RegExp(e):e})),callback:t}),function(){A.delete(n)}}}).subscribe(["^https://twitter.com/i/api/2/search/adaptive.json","^https://twitter.com/i/api/2/timeline/home.json"],(function(e){var t;S(t=e)&&null!=t.globalObjects&&S(t.globalObjects)&&null!=t.globalObjects.users&&S(t.globalObjects.users)&&function(e){return Object.values(e)}(e.globalObjects.users).forEach((function(e){je.set(e.screen_name,e)}))})),function(e){var t=new Map;return document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#react-root");null!=e&&new MutationObserver((function(e){var n,r=C(e);try{for(r.s();!(n=r.n()).done;){var o=n.value;if("childList"===o.type){var i,l=C(o.addedNodes);try{for(l.s();!(i=l.n()).done;){var u=i.value;if(u instanceof Element){var a,c=C(t.values());try{for(c.s();!(a=c.n()).done;){var s=a.value,f=s.selector,p=s.callback;u.matches(f)&&p(u)}}catch(e){c.e(e)}finally{c.f()}}}}catch(e){l.e(e)}finally{l.f()}}}}catch(e){r.e(e)}finally{r.f()}})).observe(e,{childList:!0,subtree:!0})})),{subscribe:function(e,n){var r=g();return t.set(r,{selector:e,callback:n}),function(){t.delete(r)}}}}().subscribe('div[style^="transform: translateY"]',(function(e){var t=new Map,n=e.querySelector("div[id]:not([style])");if(null!=n&&n instanceof HTMLDivElement){var i=n.querySelector("a[href]");if(null!=i&&i instanceof HTMLAnchorElement){var l=new URL(i.href).pathname.substring(1);if(t.has(l)){var u=t.get(l),a=u.findIndex((function(e){return e.id===n.id}));-1===a?u.push(n):t.set(l,[].concat(o(u.slice(0,a)),[n],o(u.slice(a+1))))}else t.set(l,[n])}}!function(e){var t,n=Ee(e.entries());try{for(n.s();!(t=n.n()).done;){var o=r(t.value,2),i=o[0],l=o[1];if(je.has(i)){var u,a=je.get(i),c=Ee(l);try{for(c.s();!(u=c.n()).done;){var s=u.value.children[1];if(s instanceof HTMLElement){var f=s.querySelector("div:nth-of-type(2) > a"),p=void 0;f instanceof HTMLElement&&(p=window.getComputedStyle(f)),fe(G(ke,{user:a,styles:p}),P(s))}}}catch(e){c.e(e)}finally{c.f()}}}}catch(e){n.e(e)}finally{n.f()}}(t)}))})()})();
//# sourceMappingURL=hack.js.map