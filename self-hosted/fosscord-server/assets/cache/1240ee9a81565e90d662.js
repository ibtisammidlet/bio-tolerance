"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[50717,30487,31981],{831981:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,o=I(n(667294)),u=n(378158),l=E(n(274858)),a=E(n(884427)),i=E(n(540593)),f=E(n(954140)),d=E(n(730487)),c=E(n(130400)),p=E(n(668743)),s=E(n(767202)),y=E(n(514364)),v=I(n(145122)),M=E(n(253195)),_=E(n(388814)),O=E(n(656603)),b=E(n(609510)),h=E(n(585543)),m=E(n(538644)),g=E(n(464635)),P=E(n(182082)),C=E(n(966708)),N=E(n(371807)),j=n(770348),w=E(n(247001));function E(e){return e&&e.__esModule?e:{default:e}}function S(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(S=function(e){return e?n:t})(e)}function I(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=S(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r);return r}function A(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=o;else if(l>1){for(var a=new Array(l),i=0;i<l;i++)a[i]=arguments[i+3];t.children=a}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function T(e){var t=e.channel,n=e.onSelect,r=(0,g.default)(t),o=(0,_.default)(t),l=(0,p.default)(t),a=(0,s.default)(t),f=(0,y.default)(t),c=(0,P.default)(t),M=(0,C.default)(t),O=(0,h.default)(t),b=(0,d.default)(t.id),m=(0,i.default)(t);return A(v.default,{navId:"channel-context",onClose:u.closeContextMenu,
"aria-label":w.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,onSelect:n},void 0,A(v.MenuGroup,{},void 0,r),A(v.MenuGroup,{},void 0,f,a,l),A(v.MenuGroup,{},void 0,c,M),A(v.MenuGroup,{},void 0,O),A(v.MenuGroup,{},void 0,m),A(v.MenuGroup,{},void 0,o),A(v.MenuGroup,{},void 0,b))}T.displayName="FavoritesMenu";function k(e){var t=e.channel,n=e.guild,r=e.onSelect,o=(0,g.default)(t),l=(0,_.default)(t),a=(0,p.default)(t),f=(0,N.default)(t),c=(0,P.default)(t),s=(0,C.default)(t),y=(0,h.default)(t),j=(0,m.default)(t,n),E=(0,M.default)(t,n),S=(0,O.default)(t,n),I=(0,b.default)(t),T=(0,d.default)(t.id),k=(0,i.default)(t);return A(v.default,{navId:"channel-context",onClose:u.closeContextMenu,"aria-label":w.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,onSelect:r},void 0,A(v.MenuGroup,{},void 0,o),A(v.MenuGroup,{},void 0,a),A(v.MenuGroup,{},void 0,f,c,s),A(v.MenuGroup,{},void 0,y),A(v.MenuGroup,{},void 0,k),A(v.MenuGroup,{},void 0,j,E,S,l),A(v.MenuGroup,{},void 0,I),A(v.MenuGroup,{},void 0,T))}
k.displayName="NormalMenu";function G(e){return(0,c.default)()?o.createElement(T,e):o.createElement(k,e)}G.displayName="ChannelListTextChannelContextMenu";var D=(0,a.default)((0,l.default)(G,{object:j.AnalyticsObjects.CONTEXT_MENU}),[f.default.CONTEXT_MENU,f.default.CHANNEL_LIST_TEXT_CHANNEL_MENU]);t.default=D},388814:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=s;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r)}(n(667294));var r,o,u=n(722182),l=n(844784),a=n(145122),i=n(319986),f=n(770348),d=(r=n(247001))&&r.__esModule?r:{default:r};function c(e){
if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function p(e,t,n,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=r;else if(l>1){for(var a=new Array(l),i=0;i<l;i++)a[i]=arguments[i+3];t.children=a}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function s(e){var t=e.getGuildId();return p(a.MenuItem,{id:"channel-copy-link",label:d.default.Messages.COPY_LINK,action:function(){e.isForumPost()&&(0,l.trackWithMetadata)(f.AnalyticEvents.FORUM_POST_LINK_COPIED,{forum_post_id:e.id,location:{section:f.AnalyticsSections.CONTEXT_MENU}});(0,u.copy)((0,i.getChannelPermalink)(t,e.id))}})}s.displayName="useChannelCopyLinkItem"},730487:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=p
;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r)}(n(667294));var r,o=n(145122),u=n(894826),l=f(n(96763)),a=n(856384),i=f(n(247001));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function c(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=o;else if(l>1){for(var a=new Array(l),i=0;i<l;i++)a[i]=arguments[i+3];t.children=a}
if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function p(e,t,n,r){void 0===n&&(n=i.default.Messages.COPY_ID);var f=u.DeveloperMode.useSetting();return!__OVERLAY__&&f&&a.SUPPORTS_COPY?c(o.MenuItem,{id:"devmode-copy-id",label:n,action:function(n){var o=null!=t&&n.shiftKey?t:e;(0,a.copy)(o);null==r||r()},icon:l.default},"devmode-copy-id"):null}p.displayName="useCopyIdItem"},668743:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=(0,o.useStateFromStores)([a.default],(function(){return a.default.isFavorite(e.id)})),n=M(e),r=_(e);if(__OVERLAY__)return null;return t?r:n};!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r)}(n(667294));var r,o=n(536211),u=n(145122),l=p(n(517286)),a=p(n(982879)),i=n(754126),f=p(n(180293)),d=n(770348),c=p(n(247001));function p(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function y(e,t,n,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=o;else if(l>1){for(var a=new Array(l),i=0;i<l;i++)a[i]=arguments[i+3];t.children=a}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function v(e,t){
return e.type===d.ChannelTypes.GROUP_DM?t?c.default.Messages.UNFAVORITE_GDM:c.default.Messages.FAVORITE_GDM:e.type===d.ChannelTypes.DM?t?c.default.Messages.UNFAVORITE_DM:c.default.Messages.FAVORITE_DM:t?c.default.Messages.UNFAVORITE_CHANNEL:c.default.Messages.FAVORITE_CHANNEL}function M(e){var t=(0,o.useStateFromStores)([l.default],(function(){return l.default.getChannels(d.FAVORITES)}))[d.ChannelTypes.GUILD_CATEGORY].filter((function(e){return"null"!==e.channel.id}));if(!f.default.useExperiment({}).favoritesEnabled)return null;function n(t){(0,i.addFavoriteChannel)(e.id,t)}return 0===t.length?y(u.MenuItem,{id:"favorite-channel",label:v(e,!1),action:function(){return n(null)}}):y(u.MenuItem,{id:"favorite-channel",label:v(e,!1),action:function(){return n(null)}},void 0,t.map((function(e){return y(u.MenuItem,{id:"favorite-"+e.channel.id,label:e.channel.name,action:function(){return n(e.channel.id)}},e.channel.id)})))}M.displayName="useChannelFavorite";function _(e){return y(u.MenuItem,{
id:"favorite-channel",label:v(e,!0),action:function(){(0,i.removeFavoriteChannel)(e.id)}})}_.displayName="useChannelUnfavorite"},514364:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=s;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e;n&&n.set(e,r)}(n(667294));var r,o=n(536211),u=n(145122),l=n(139982),a=d(n(790597)),i=n(770348),f=d(n(247001));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function p(e,t,n,o){
r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=o;else if(l>1){for(var a=new Array(l),i=0;i<l;i++)a[i]=arguments[i+3];t.children=a}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function s(e){var t=(0,o.useStateFromStores)([a.default],(function(){return a.default.getGuildId()}));if(__OVERLAY__||t!==i.FAVORITES)return null;return p(u.MenuItem,{id:"go-to-original-guild",label:f.default.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,action:function(){(0,l.transitionToGuild)(e.guild_id,e.id)}})}s.displayName="useChannelGoToOriginalGuildItem"}}]);
//# sourceMappingURL=1240ee9a81565e90d662.js.map