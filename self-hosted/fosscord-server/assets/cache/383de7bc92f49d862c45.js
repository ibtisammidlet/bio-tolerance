"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[27051],{217150:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.contextMenuCallbackNative=function(e){var t=c(),o=e.target;if("TEXTAREA"===(null==o?void 0:o.tagName)||"INPUT"===(null==o?void 0:o.tagName)){if("checkbox"!==(null==o?void 0:o.type))return(0,u.openContextMenuLazy)(e,i(regeneratorRuntime.mark((function e(){var u,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return Promise.all([n.e(40532),n.e(35666),n.e(81747),n.e(39217),n.e(10961),n.e(6379),n.e(4562),n.e(94322),n.e(23046),n.e(44461),n.e(51402)]).then(n.bind(n,351359));case 2:u=e.sent;o=u.default;return e.abrupt("return",(function(e){return r.createElement(o,a({},e,{text:t}))}));case 5:case"end":return e.stop()}}),e)}))),{enableSpellCheck:!0})}else{if("none"===window.getComputedStyle(o).getPropertyValue("-webkit-user-select")){e.preventDefault();return}for(var l,f,s,p=e.target;null!=p;){
var v;"src"in p&&null!=p.src&&(f=p.src);if("href"in p&&null!=p.href){l=p.href;s=p.textContent}p=null===(v=p)||void 0===v?void 0:v.parentNode}if(null!=f)return(0,u.openContextMenuLazy)(e,i(regeneratorRuntime.mark((function e(){var t,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return Promise.all([n.e(40532),n.e(35666),n.e(81747),n.e(39217),n.e(10961),n.e(24917),n.e(20802),n.e(6379),n.e(93624),n.e(73892),n.e(88207),n.e(72408),n.e(4562),n.e(94322),n.e(23046),n.e(21543),n.e(87709),n.e(54538),n.e(53301),n.e(44461),n.e(23148),n.e(47243),n.e(73864),n.e(23535),n.e(38635),n.e(82678),n.e(73942),n.e(42758),n.e(30788)]).then(n.bind(n,630788));case 2:t=e.sent;u=t.default;return e.abrupt("return",(function(e){var t;return r.createElement(u,a({},e,{src:null!==(t=f)&&void 0!==t?t:""}))}));case 5:case"end":return e.stop()}}),e)}))));if(null!=l)return(0,u.openContextMenuLazy)(e,i(regeneratorRuntime.mark((function e(){var t,u
;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return Promise.all([n.e(40532),n.e(35666),n.e(81747),n.e(39217),n.e(10961),n.e(24917),n.e(20802),n.e(6379),n.e(93624),n.e(73892),n.e(88207),n.e(88884),n.e(4562),n.e(94322),n.e(23046),n.e(21543),n.e(87709),n.e(54538),n.e(53301),n.e(44461),n.e(23148),n.e(47243),n.e(73864),n.e(23535),n.e(38635),n.e(82678),n.e(73942),n.e(42758),n.e(3518)]).then(n.bind(n,203518));case 2:t=e.sent;u=t.default;return e.abrupt("return",(function(e){return r.createElement(u,a({},e,{href:l,textContent:s}))}));case 5:case"end":return e.stop()}}),e)}))));if(null!=t&&""!==t)return(0,u.openContextMenuLazy)(e,i(regeneratorRuntime.mark((function e(){var u,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return Promise.all([n.e(40532),n.e(35666),n.e(81747),n.e(10961),n.e(6379),n.e(4562),n.e(44461),n.e(52698)]).then(n.bind(n,967887));case 2:u=e.sent;o=u.default
;return e.abrupt("return",(function(e){return r.createElement(o,a({},e,{text:t}))}));case 5:case"end":return e.stop()}}),e)}))))}e.preventDefault();return null};t.contextMenuCallbackWeb=function(e){var t=!1,n=e.target;if("INPUT"===(null==n?void 0:n.tagName)||"TEXTAREA"===(null==n?void 0:n.tagName))t=!0;else if(null!=(null==n?void 0:n.closest)&&null!=(null==n?void 0:n.closest("[contenteditable=true]")))t=!0;else if(null!=c()&&""!==c())t=!0;else{for(var r,u,o=e.target;null!=o;){var a;"src"in o&&null!=o.src&&(u=o.src);"href"in o&&null!=o.href&&(r=o.href);o=null===(a=o)||void 0===a?void 0:a.parentNode}null==r&&null==u||(t=!0)}t||e.preventDefault()};t.getSelectionText=c;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){
var l=u?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e;n&&n.set(e,r);return r}(n(667294)),u=n(378158);function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function a(){a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return a.apply(this,arguments)}function l(e,t,n,r,u,o,a){try{var l=e[o](a),i=l.value}catch(e){n(e);return}l.done?t(i):Promise.resolve(i).then(r,u)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var o=e.apply(t,n);function a(e){l(o,r,u,a,i,"next",e)}function i(e){l(o,r,u,a,i,"throw",e)}a(void 0)}))}}function c(){var e,t;if(null!=window.getSelection){var n;t=null===(n=window.getSelection())||void 0===n?void 0:n.toString()
}else null!=document.selection&&"Control"!==document.selection.type&&(t=document.selection.createRange().text);return null!==(e=t)&&void 0!==e?e:""}}}]);
//# sourceMappingURL=383de7bc92f49d862c45.js.map