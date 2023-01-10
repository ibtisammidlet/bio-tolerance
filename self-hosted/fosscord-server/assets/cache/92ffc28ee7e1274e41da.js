"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[78833],{378833:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.PaymentContext=void 0;t.PaymentContextProvider=U;t.usePaymentContext=t.useForwardedPaymentContext=void 0;var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=I(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n}(r(667294)),u=r(886664),a=r(143544),i=A(r(468811)),l=r(536211),c=r(444272),f=A(r(160660)),s=r(354479),p=A(r(666071)),d=A(r(695603)),y=A(r(764716)),S=A(r(866441)),v=A(r(163078)),P=A(r(994010)),b=A(r(117235)),_=A(r(858409)),h=A(r(754351)),E=A(r(677971)),O=r(881424),m=r(770348)
;function A(e){return e&&e.__esModule?e:{default:e}}function I(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(I=function(e){return e?r:t})(e)}function M(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var i=new Array(a),l=0;l<a;l++)i[l]=arguments[l+3];t.children=i}if(t&&u)for(var c in u)void 0===t[c]&&(t[c]=u[c]);else t||(t=u||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function g(){g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return g.apply(this,arguments)}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return
;var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0){u.push(n.value);if(t&&u.length===t)break}}catch(e){i=!0;o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=T((0,p.default)(),3),N=C[0],R=C[1],j=C[2];t.useForwardedPaymentContext=j;t.usePaymentContext=R;t.PaymentContext=N;function U(e){
var t=e.activeSubscription,r=e.stepConfigs,n=e.breadcrumbs,p=void 0===n?[]:n,A=e.skuIDs,I=e.isGift,w=void 0!==I&&I,C=e.children,R=(0,E.default)(),j=(0,s.useUID)(),U=(0,c.useBlockedPaymentsConfig)(),k=(0,y.default)(),D=(0,S.default)({isGift:w,activeSubscription:t}),L=D.paymentSources,W=D.hasPaymentSources,F=D.paymentSourceId,B=D.setPaymentSourceId,Y=(0,d.default)({activeSubscription:t,skuIDs:A,paymentSourceId:F,isGift:w}),G=Y.hasFetchedSubscriptionPlans,x=Y.priceOptions,H=Y.setCurrency,K=Y.currencyLoading,V=Y.currencies,$=(0,_.default)(F),Q=(0,h.default)({stepConfigs:r,breadcrumbs:p}),Z=Q.step,q=Q.setStep,z=Q.steps,J=Q.breadcrumbsData,X=T((0,b.default)(Z),2),ee=X[0],te=X[1],re=(0,v.default)(),ne=re.paymentError,oe=re.paymentAuthenticationState,ue=(0,P.default)(),ae=ue.purchaseError,ie=ue.purchaseErrorBlockRef,le=ue.setPurchaseError,ce=(0,a.useLazyValue)((function(){return{loadId:i.default.v4(),startTime:Date.now()}})),fe=(0,
O.useSubscriptionSelection)(),se=fe.selectedSkuId,pe=fe.selectedPlan,de=fe.setSelectedSkuId,ye=fe.setSelectedPlanId,Se=T((0,l.useStateFromStoresArray)([f.default],(function(){return[f.default.purchaseTokenAuthState,f.default.purchaseTokenHash]})),2),ve=Se[0],Pe=Se[1],be=T(o.useState(null),2),_e=be[0],he=be[1],Ee=T(o.useState(null),2),Oe=Ee[0],me=Ee[1];return M(N.Provider,{value:g({stripe:R,headerId:j,contextMetadata:ce,blockedPayments:U,isGift:w,activeSubscription:t,hasFetchedSubscriptions:k,hasFetchedSubscriptionPlans:G,paymentSources:L,hasPaymentSources:W,paymentSourceId:F,setPaymentSourceId:B,priceOptions:x,setCurrency:H,currencyLoading:K,currencies:V},$,{step:Z,setStep:q,steps:z,stepConfigs:r,breadcrumbs:J,purchaseState:ee,setPurchaseState:te,paymentAuthenticationState:oe,paymentError:ne,purchaseError:ae,setPurchaseError:le,purchaseErrorBlockRef:ie,purchaseTokenAuthState:ve,purchaseTokenHash:Pe,bodyNode:_e,setBodyNode:he,footerNode:Oe,setFooterNode:me,selectedSkuId:se,
selectedPlan:pe,setSelectedSkuId:de,setSelectedPlanId:ye})},void 0,M(u.Elements,{options:m.StripeElementsOptions,stripe:R},void 0,C))}U.displayName="PaymentContextProvider"},695603:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t,r,n=e.activeSubscription,f=e.skuIDs,s=e.paymentSourceId,p=e.isGift;f=f.filter((function(e){return e!==i.PremiumSubscriptionSKUs.NONE&&e!==i.PremiumSubscriptionSKUs.LEGACY}));var d=(0,o.useStateFromStores)([u.default],(function(){var e=u.default.getPlanIdsForSkus(f).filter((function(e){return!p||i.PREMIUM_PLANS.has(e)}));return e.length>0?u.default.get(e[0]):null})),y=null==d?[]:(0,a.getCurrencies)(d.id,s,p),S=null!==(t=null!==(r=y.find((function(e){return e===(null==n?void 0:n.currency)})))&&void 0!==r?r:y[0])&&void 0!==t?t:l.CurrencyCodes.USD;return c({},(0,a.useCurrencyWithPaymentSourceChange)(S,null==d?void 0:d.id,s,p,f),{currencies:y})};var n,o=r(536211),u=(n=r(909584))&&n.__esModule?n:{default:n
},a=r(298104),i=r(770348),l=r(478036);function c(){c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return c.apply(this,arguments)}},764716:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=(0,u.useStateFromStores)([i.default],(function(){return i.default.hasFetchedSubscriptions()}));o.useEffect((function(){e||(0,a.fetchSubscriptions)()}),[e]);return e};var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n
}(r(667294)),u=r(536211),a=r(832635),i=(n=r(146771))&&n.__esModule?n:{default:n};function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}},866441:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=e.isGift,r=e.activeSubscription,n=(0,u.useStateFromStoresObject)([i.default],(function(){return{defaultPaymentSourceId:i.default.defaultPaymentSourceId,paymentSources:i.default.paymentSources,hasFetchedPaymentSources:i.default.hasFetchedPaymentSources}})),l=n.defaultPaymentSourceId,f=n.paymentSources,s=n.hasFetchedPaymentSources,p=(S=o.useState((function(){return t||null==(null==r?void 0:r.paymentSourceId)?l:r.paymentSourceId})),v=2,function(e){if(Array.isArray(e))return e}(S)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0){u.push(n.value)
;if(t&&u.length===t)break}}catch(e){i=!0;o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}}(S,v)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(S,v)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=p[0],y=p[1];var S,v;o.useEffect((function(){s||(0,a.fetchPaymentSources)()}),[s]);return{paymentSources:f,hasPaymentSources:Object.keys(f).length>0,paymentSourceId:d,setPaymentSourceId:y}};var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e)
;var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n}(r(667294)),u=r(536211),a=r(832635),i=(n=r(748826))&&n.__esModule?n:{default:n};function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},163078:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=(0,n.useStateFromStores)([u.default],(function(){return u.default.error})),t=(c=(0,n.useStateFromStoresArray)([a.default],(function(){return[a.default.error,a.default.isAwaitingAuthentication]})),f=2,function(e){if(Array.isArray(e))return e}(c)||function(e,t){
var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0){u.push(n.value);if(t&&u.length===t)break}}catch(e){i=!0;o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}}(c,f)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(c,f)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=t[0],i=t[1];var c,f;return{paymentError:null!=r?r:e,paymentAuthenticationState:i?o.PaymentAuthenticationState.PENDING:null!=r?o.PaymentAuthenticationState.ERROR:o.PaymentAuthenticationState.NONE}}
;var n=r(536211),o=r(271014),u=i(r(180887)),a=i(r(86758));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},994010:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=(a=n.useState(null),i=2,function(e){if(Array.isArray(e))return e}(a)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0){u.push(n.value);if(t&&u.length===t)break}}catch(e){i=!0;o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}}(a,i)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}
}(a,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),t=e[0],r=e[1],o=n.useRef(null);var a,i;n.useEffect((function(){null!=t&&null!=o.current&&o.current.scrollIntoView({behavior:"smooth"})}),[t]);return{purchaseError:t,setPurchaseError:r,purchaseErrorBlockRef:o}};var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=u?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}(r(667294));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function u(e,t){
(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},117235:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=(l=n.useState(u.PurchaseState.WAITING),c=2,function(e){if(Array.isArray(e))return e}(l)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0){u.push(n.value);if(t&&u.length===t)break}}catch(e){i=!0;o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}}(l,c)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(l,c)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=t[0],a=t[1];var l,c;n.useEffect((function(){null!=e&&e!==o.Step.REVIEW&&r!==u.PurchaseState.WAITING&&r!==u.PurchaseState.COMPLETED&&a(u.PurchaseState.WAITING)}),[e,r,a]);return[r,a]};var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n}(r(667294)),o=r(361673),u=r(534564);function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function i(e,t){
(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},858409:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=f(o.useState(!1),2),r=t[0],n=t[1],c=f(o.useState(!1),2),s=c[0],p=c[1],d=(0,l.isPrepaidPaymentSource)(e),y=(0,a.useStateFromStores)([i.default],(function(){return u.CountryCodesSets.EEA_COUNTRIES.has(i.default.ipCountryCodeWithFallback)}))&&d;return{hasViewedPurchaseTerms:r,setHasViewedPurchaseTerms:n,showWithdrawalWaiver:y,hasAcceptedWithdrawalWaiver:!y||s,setHasAcceptedWithdrawalWaiver:p}};var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}
n.default=e;r&&r.set(e,n);return n}(r(667294)),u=r(793786),a=r(536211),i=(n=r(697952))&&n.__esModule?n:{default:n},l=r(838583);function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0){u.push(n.value);if(t&&u.length===t)break}}catch(e){i=!0;o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},754351:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t,r=e.stepConfigs,o=e.breadcrumbs,a=(s=n.useState(null===(t=r[0])||void 0===t?void 0:t.key),p=2,function(e){if(Array.isArray(e))return e}(s)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0){u.push(n.value);if(t&&u.length===t)break}}catch(e){i=!0;o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}}(s,p)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name)
;return"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(s,p)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],l=a[1],c=r.map((function(e){return e.key})).filter((function(e){return null!=e})),f=r.filter((function(e){var t;return null!=e.key&&null!=(null==e||null===(t=e.options)||void 0===t?void 0:t.breadcrumb)})).map((function(e){return{id:e.key,label:e.options.breadcrumb()}})).sort((function(e,t){return null!=o?o.indexOf(e.id)-o.indexOf(t.id):0}));var s,p;return{steps:c,step:i,setStep:l,breadcrumbsData:f}};var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=u?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}(r(667294));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},677971:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=(u=n.useState(null),i=2,function(e){if(Array.isArray(e))return e}(u)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0){u.push(n.value);if(t&&u.length===t)break}}catch(e){i=!0;o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}}(u,i)||function(e,t){if(e){
if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(u,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),t=e[0],r=e[1];var u,i;n.useEffect((function(){(0,o.getStripe)().then((function(e){return r(e)}))}),[]);return t};var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e;r&&r.set(e,n)
;return n}(r(667294)),o=r(858627);function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},881424:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.useSubscriptionSelection=function(){var e=l(o.useState(void 0),2),t=e[0],r=e[1],n=l(o.useState(void 0),2),i=n[0],c=n[1],f=(0,u.useStateFromStores)([a.default],(function(){return null!=i?a.default.get(i):null}));return{selectedSkuId:t,selectedPlan:f,setSelectedSkuId:r,setSelectedPlanId:c}};var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null
;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n}(r(667294)),u=r(536211),a=(n=r(909584))&&n.__esModule?n:{default:n};function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0){u.push(n.value);if(t&&u.length===t)break}}catch(e){i=!0;o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},271014:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.PaymentAuthenticationState=void 0;t.usePaymentAuthenticationPoller=function(e){var t=(0,u.useStateFromStores)([f.default],(function(){return f.default.awaitingPaymentId})),r=(0,u.useStateFromStores)([c.default],(function(){return c.default.isConnected()})),l=o.useRef(new a.Interval);o.useEffect((function(){r||null==t||e!==n.PENDING?l.current.stop():l.current.start(5e3,(function(){return(0,i.fetchPayment)(t)}))}),[t,e,r])};t.usePaymentStepForAuthentication=function(e,t,r,u,a){void 0===u&&(u=!1);o.useEffect((function(){
null!=e&&(t===n.PENDING&&e!==l.Step.AWAITING_AUTHENTICATION?r(l.Step.AWAITING_AUTHENTICATION):e===l.Step.AWAITING_AUTHENTICATION&&(t===n.ERROR?r(l.Step.REVIEW):t===n.NONE&&(u?null!=a?a():r(l.Step.REVIEW):r(l.Step.CONFIRM))))}),[e,t,r,u,a])};var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n}(r(667294)),u=r(536211),a=r(91817),i=r(832635),l=r(361673),c=s(r(23535)),f=s(r(86758));function s(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}t.PaymentAuthenticationState=n
;!function(e){e[e.PENDING=1]="PENDING";e[e.ERROR=2]="ERROR";e[e.NONE=3]="NONE"}(n||(t.PaymentAuthenticationState=n={}))},180887:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n=i(r(536211)),o=i(r(636602)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e;r&&r.set(e,n);return n}(r(858627));function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1;n.configurable=!0
;"value"in n&&(n.writable=!0);Object.defineProperty(e,n.key,n)}}function c(e,t){c=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return c(e,t)}var f="",s=null,p=null,d=!1,y="",S="",v="",P="",b="",_="",h="",E="",O=!1,m=null,A=null,I=null,M=null;function g(){p=null;f="";s=null;d=!1;y="US";S="";v="";P="";b="";_="";h="";E="";O=!1;m=null;A=null;I=null;M=null}function T(e){S=e.name;y=e.country;P=e.line1;b=e.line2;_=e.city;h=e.postalCode;E=e.state;v=e.email}function w(){m=null}function C(e){var t=e.error;m=t}var N=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;c(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;r.getCreditCardInfo=function(){return{name:S}};r.getBillingAddressInfo=function(){return{name:S,email:v,country:y,line1:P,line2:b,city:_,postalCode:h,state:E}};r.__getLocalVars=function(){return{braintreeEmail:f,braintreeNonce:s,stripePaymentMethod:p,isCardInfoValid:d,country:y,name:S,email:v,
line1:P,line2:b,city:_,postalCode:h,state:E,isBillingAddressInfoValid:O,billingError:m,paymentId:A,popupCallbackCalled:I,paymentSourceId:M}};!function(e,t,r){t&&l(e.prototype,t);r&&l(e,r);Object.defineProperty(e,"prototype",{writable:!1})}(t,[{key:"stripePaymentMethod",get:function(){return p}},{key:"popupCallbackCalled",get:function(){return I}},{key:"braintreeEmail",get:function(){return f}},{key:"braintreeNonce",get:function(){return s}},{key:"redirectedPaymentId",get:function(){return A}},{key:"redirectedPaymentSourceId",get:function(){return M}},{key:"isCardInfoValid",get:function(){return d}},{key:"isBillingAddressInfoValid",get:function(){return O}},{key:"error",get:function(){return m}}]);return t}(n.default.Store);N.displayName="NewPaymentSourceStore";var R=new N(o.default,{NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE:function(e){var t=e.stripePaymentMethod;if(null!=t){p=t;T(u.parseStripePaymentMethod(p).billingAddressInfo)}else g()},
NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE:function(e){var t=e.info,r=e.isValid;S=t.name;d=r},NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE:function(e){var t=e.info,r=e.isValid;null!=t.name&&""!==t.name&&(S=t.name);y=t.country;S=t.name;P=t.line1;b=t.line2;_=t.city;h=t.postalCode;E=t.state;v=t.email;O=r},BRAINTREE_TOKENIZE_PAYPAL_START:function(){f="";s=null},BRAINTREE_TOKENIZE_PAYPAL_SUCCESS:function(e){var t=e.email,r=e.nonce,n=e.billingAddress;f=t;s=r;T(n);O=y.length>0},BILLING_PAYMENT_SOURCE_CREATE_START:w,MODAL_POP:w,NEW_PAYMENT_SOURCE_CLEAR_ERROR:w,BILLING_PAYMENT_SOURCE_CREATE_FAIL:C,STRIPE_TOKEN_FAILURE:C,BILLING_PAYMENT_SOURCE_CREATE_SUCCESS:g,LOGOUT:g,BILLING_POPUP_BRIDGE_CALLBACK:function(e){var t=e.query;if(null!=(null==t?void 0:t.payment_id)){I=!0;A=t.payment_id}else if(null!=(null==t?void 0:t.payment_source_id)){I=!0;M=t.payment_source_id}},RESET_PAYMENT_ID:function(){I=!1;A=null}});t.default=R},86758:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0
;var n=p(r(536211)),o=p(r(636602)),u=r(304836),a=r(723420),i=p(r(400922)),l=p(r(60022)),c=r(858627),f=r(770348),s=p(r(247001));function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1;n.configurable=!0;"value"in n&&(n.writable=!0);Object.defineProperty(e,n.key,n)}}function y(e,t){y=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return y(e,t)}function S(e,t,r,n,o,u,a){try{var i=e[u](a),l=i.value}catch(e){r(e);return}i.done?t(l):Promise.resolve(l).then(n,o)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function a(e){S(u,n,o,a,i,"next",e)}function i(e){S(u,n,o,a,i,"throw",e)}a(void 0)}))}}var P=!1,b=null,_=null;function h(){P=!1;_=null}function E(e){var t=e.error,r=t.code,n=t.paymentId;if(r!==i.default.ErrorCodes.AUTHENTICATION_REQUIRED){P=!1;return!1}P=!0;b=n;!function(e){O.apply(this,arguments)}(n)}function O(){
return(O=v(regeneratorRuntime.mark((function e(t){var r,n,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t){e.next=2;break}return e.abrupt("return");case 2:e.next=4;return(0,c.authenticatePaymentIntentForPaymentId)(t);case 4:r=e.sent;if(null!=(n=r.error)){o.default.dispatch({type:"PAYMENT_AUTHENTICATION_ERROR",error:new i.default(s.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR)});u=new Error(n);l.default.captureException(u,{extra:{authenticationError:n}})}case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){var t=e.payment;if(!P||t.id!==b||![f.PaymentStatusTypes.COMPLETED,f.PaymentStatusTypes.CANCELED].includes(t.status))return!1;P=!1;_=null;b=null;o.default.wait(u.clearError);o.default.wait(a.clearPurchaseError)}var A=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;y(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.__getLocalVars=function(){
return{isAwaitingAuthentication:P,awaitingPaymentId:b,error:_}};!function(e,t,r){t&&d(e.prototype,t);r&&d(e,r);Object.defineProperty(e,"prototype",{writable:!1})}(t,[{key:"isAwaitingAuthentication",get:function(){return P}},{key:"error",get:function(){return _}},{key:"awaitingPaymentId",get:function(){return b}}]);return t}(n.default.Store);A.displayName="PaymentAuthenticationStore";var I=new A(o.default,{BILLING_SUBSCRIPTION_UPDATE_START:h,PAYMENT_AUTHENTICATION_CLEAR_ERROR:h,PREMIUM_PAYMENT_ERROR_CLEAR:h,PREMIUM_PAYMENT_MODAL_CLOSE:h,PREMIUM_PAYMENT_MODAL_OPEN:h,PREMIUM_PAYMENT_SUBSCRIBE_START:h,PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS:h,PREMIUM_PAYMENT_UPDATE_SUCCESS:h,SKU_PURCHASE_MODAL_CLOSE:h,SKU_PURCHASE_MODAL_OPEN:h,SKU_PURCHASE_START:h,SKU_PURCHASE_SUCCESS:h,BILLING_SUBSCRIPTION_UPDATE_FAIL:E,PREMIUM_PAYMENT_SUBSCRIBE_FAIL:E,PREMIUM_PAYMENT_UPDATE_FAIL:E,SKU_PURCHASE_FAIL:E,GIFT_CODE_REDEEM_FAILURE:E,PAYMENT_AUTHENTICATION_ERROR:function(e){var t=e.error;_=t;P=!1},PAYMENT_UPDATE:m,
BILLING_PAYMENT_FETCH_SUCCESS:m});t.default=I},160660:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=t.PurchaseTokenAuthState=void 0;var n,o=i(r(536211)),u=i(r(636602)),a=i(r(400922));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1;n.configurable=!0;"value"in n&&(n.writable=!0);Object.defineProperty(e,n.key,n)}}function c(e,t){c=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return c(e,t)}t.PurchaseTokenAuthState=n;!function(e){e[e.UNKNOWN=0]="UNKNOWN";e[e.PENDING=1]="PENDING";e[e.SUCCESS=2]="SUCCESS";e[e.ERROR=3]="ERROR"}(n||(t.PurchaseTokenAuthState=n={}));var f=n.UNKNOWN,s=null,p=null;function d(){f=n.UNKNOWN;s=null;p=null}var y=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;c(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.__getLocalVars=function(){return{purchaseTokenAuthState:f,
purchaseTokenHash:s,expiresAt:p}};!function(e,t,r){t&&l(e.prototype,t);r&&l(e,r);Object.defineProperty(e,"prototype",{writable:!1})}(t,[{key:"purchaseTokenAuthState",get:function(){return f}},{key:"purchaseTokenHash",get:function(){return s}},{key:"expiresAt",get:function(){return p}}]);return t}(o.default.Store);y.displayName="PurchaseTokenAuthStore";var S=new y(u.default,{SKU_PURCHASE_FAIL:function(e){e.error.code===a.default.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED&&(f=n.PENDING)},USER_PAYMENT_CLIENT_ADD:function(e){f=n.SUCCESS;s=e.purchaseTokenHash;p=e.expiresAt},BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE:d,BILLING_SUBSCRIPTION_UPDATE_START:d,PAYMENT_AUTHENTICATION_CLEAR_ERROR:d,PREMIUM_PAYMENT_ERROR_CLEAR:d,PREMIUM_PAYMENT_MODAL_CLOSE:d,PREMIUM_PAYMENT_MODAL_OPEN:d,PREMIUM_PAYMENT_SUBSCRIBE_START:d,PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS:d,PREMIUM_PAYMENT_UPDATE_SUCCESS:d,SKU_PURCHASE_MODAL_CLOSE:d,SKU_PURCHASE_MODAL_OPEN:d,SKU_PURCHASE_START:d,SKU_PURCHASE_SUCCESS:d});t.default=S
},666071:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=o.createContext(void 0);function t(){var t=o.useContext(e);if(null==t)throw new Error("Context was used outside of defined provider.");return t}return[e,t,function(){var r=t();return function(t){var n=t.children;return a(e.Provider,{value:r},void 0,n)}}]};var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}(r(667294));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function a(e,t,r,o){
n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=o;else if(a>1){for(var i=new Array(a),l=0;l<a;l++)i[l]=arguments[l+3];t.children=i}if(t&&u)for(var c in u)void 0===t[c]&&(t[c]=u[c]);else t||(t=u||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}}]);
//# sourceMappingURL=92ffc28ee7e1274e41da.js.map