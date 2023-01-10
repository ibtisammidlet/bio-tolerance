"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[11976],{328057:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.ReportRaidExperiment=void 0;var r=(0,n(373505).createExperiment)({kind:"guild",id:"2022-07_report_raids",label:"Report Raids",defaultConfig:{enableRaidReporting:!1},treatments:[{id:1,label:"Enable Reporting Of Raids",config:{enableRaidReporting:!0}}]});t.ReportRaidExperiment=r},753856:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.openReportRaidModal=function(e){(0,a.openModalLazy)(l(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.next=2;return Promise.all([n.e(40532),n.e(69080)]).then(n.bind(n,169080));case 2:a=t.sent;o=a.default;return t.abrupt("return",(function(t){return r.createElement(o,u({},t,{guildId:e}))}));case 5:case"end":return t.stop()}}),t)}))))};var r=function(e,t){if(!t&&e&&e.__esModule)return e
;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}r.default=e;n&&n.set(e,r);return r}(n(667294)),a=n(194322);function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function u(){u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return u.apply(this,arguments)}function i(e,t,n,r,a,o,u){try{var i=e[o](u),l=i.value}catch(e){n(e);return}i.done?t(l):Promise.resolve(l).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function u(e){
i(o,r,a,u,l,"next",e)}function l(e){i(o,r,a,u,l,"throw",e)}u(void 0)}))}}},611976:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,a=Y(n(667294)),o=F(n(441143)),u=n(536211),i=n(923387),l=F(n(215485)),s=n(203847),d=F(n(890861)),c=F(n(772703)),f=n(328057),p=n(753856),v=n(75639),g=F(n(682905)),E=n(709946),M=F(n(964285)),m=F(n(930409)),y=Y(n(145122)),h=n(19652),b=F(n(686819)),_=n(139982),R=F(n(689389)),I=F(n(563621)),O=F(n(728429)),S=n(645758),A=F(n(487594)),w=F(n(91424)),C=F(n(698486)),L=F(n(728408)),P=F(n(634230)),G=F(n(782732)),D=F(n(975165)),T=F(n(212661)),N=F(n(164654)),U=F(n(63334)),j=F(n(502197)),k=n(194322),x=n(770348),V=n(790315),H=n(474477),B=F(n(247001));function F(e){return e&&e.__esModule?e:{default:e}}function W(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(W=function(e){return e?n:t})(e)}function Y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e}
;var n=W(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}function z(e,t,n,a){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),1===u)t.children=a;else if(u>1){for(var i=new Array(u),l=0;l<u;l++)i[l]=arguments[l+3];t.children=i}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function $(){$=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return $.apply(this,arguments)}function X(e,t,n,r,a,o,u){try{
var i=e[o](u),l=i.value}catch(e){n(e);return}i.done?t(l):Promise.resolve(l).then(r,a)}function K(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function u(e){X(o,r,a,u,i,"next",e)}function i(e){X(o,r,a,u,i,"throw",e)}u(void 0)}))}}function Z(e){(0,k.openModal)((function(t){return a.createElement(j.default,$({header:B.default.Messages.LEAVE_SERVER_TITLE.format({name:e.toString()}),confirmText:e.hasFeature(x.GuildFeatures.HUB)?B.default.Messages.LEAVE_HUB:B.default.Messages.LEAVE_SERVER,cancelText:B.default.Messages.CANCEL,onConfirm:K(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.next=2;return M.default.leaveGuild(e.id);case 2:(0,s.isDismissibleContentDismissed)(i.DismissibleContent.GUILD_LEAVE_FEEDBACK)||(0,k.openModalLazy)(K(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.next=2
;return n.e(35931).then(n.bind(n,698843));case 2:r=t.sent;o=r.default;return t.abrupt("return",(function(t){return a.createElement(o,$({},t,{guildId:e.id,guildName:e.name}))}));case 5:case"end":return t.stop()}}),t)}))));case 3:case"end":return t.stop()}}),t)})))},t),z(S.Text,{variant:"text-md/normal"},void 0,e.hasFeature(x.GuildFeatures.HUB)?B.default.Messages.LEAVE_HUB_BODY.format({name:e.name}):B.default.Messages.LEAVE_SERVER_BODY.format({name:e.toString()})))}))}0;var q=a.memo((function(e){var t=e.guild,r=e.onClose,i=e.onSelect,s=(0,u.useStateFromStores)([O.default],(function(){return O.default.getCurrentUser()}));(0,o.default)(null!=s,"GuildHeaderPopout: user cannot be undefined");var S=(0,u.useStateFromStores)([I.default],(function(){return I.default.isGuildCollapsed(t.id)}),[t.id]),j=(0,u.useStateFromStoresObject)([R.default],(function(){
var e=R.default.can(x.Permissions.VIEW_GUILD_ANALYTICS,t)&&t.hasFeature(x.GuildFeatures.COMMUNITY),n=R.default.can(x.Permissions.BAN_MEMBERS,t)||R.default.can(x.Permissions.KICK_MEMBERS,t)||R.default.can(x.Permissions.MANAGE_GUILD,t);return{canAccessSettings:R.default.canAccessGuildSettings(t),canManageChannels:R.default.can(x.Permissions.MANAGE_CHANNELS,t),showGuildAnalytics:(0,E.staffOnlyGuildSettingsAccess)(t.id)||e,canReportRaid:n}}),[t]),F=j.canAccessSettings,W=j.canManageChannels,Y=j.showGuildAnalytics,X=j.canReportRaid,q=f.ReportRaidExperiment.useExperiment({guildId:t.id}).enableRaidReporting;a.useEffect((function(){X&&f.ReportRaidExperiment.trackExposure({guildId:t.id})}),[X,t.id]);var J=t.isOwner(s),Q=(0,u.useStateFromStores)([m.default],(function(){return m.default.isLurking(t.id)}),[t.id]),ee=(0,g.default)(t.id,!0),te=(0,c.default)({source:x.InstantInviteSources.GUILD_HEADER,guild:t}),ne=(0,d.default)(t.id,s.id,{page:x.AnalyticsPages.GUILD_CHANNEL,
section:x.AnalyticsSections.GUILD_DROPDOWN_MENU},void 0,D.default),re=t.hasFeature(x.GuildFeatures.HUB),ae=t.id===V.FAVORITES_RAW_GUILD_ID,oe=(0,b.default)(t.id);return Q?z(y.default,{onSelect:i,navId:"guild-header-popout",style:y.MenuStyle.FIXED,onClose:r,"aria-label":B.default.Messages.GUILD_ACTIONS_MENU_LABEL},void 0,z(y.MenuItem,{id:"leave-guild",label:B.default.Messages.LEAVE_SERVER,icon:C.default,action:function(){M.default.leaveGuild(t.id);(0,_.transitionTo)(x.Routes.GUILD_DISCOVERY)}})):ae?z(y.default,{onSelect:i,navId:"favorites-header-popout",style:y.MenuStyle.FIXED,onClose:r,"aria-label":B.default.Messages.GUILD_ACTIONS_MENU_LABEL},void 0,z(y.MenuGroup,{},void 0,z(y.MenuItem,{id:"create-category",label:B.default.Messages.CREATE_CATEGORY,icon:L.default,action:function(){return(0,k.openModalLazy)(K(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2
;return Promise.all([n.e(40532),n.e(66666)]).then(n.bind(n,866666));case 2:t=e.sent;r=t.default;return e.abrupt("return",(function(e){return a.createElement(r,e)}));case 5:case"end":return e.stop()}}),e)}))))}})),z(y.MenuGroup,{},void 0,z(y.MenuCheckboxItem,{id:"hide-muted-channels",label:B.default.Messages.HIDE_MUTED_CHANNELS,checked:S,action:function(){return l.default.toggleCollapseGuild(t.id)}}))):re?z(y.default,{onSelect:i,navId:"guild-header-popout",style:y.MenuStyle.FIXED,onClose:r,"aria-label":B.default.Messages.GUILD_ACTIONS_MENU_LABEL},void 0,z(y.MenuGroup,{},void 0,F?z(y.MenuItem,{id:"settings",label:B.default.Messages.SERVER_SETTINGS,icon:P.default,action:function(){M.default.open(t.id,x.GuildSettingsSections.OVERVIEW)}}):null,te,z(y.MenuItem,{id:"privacy",label:B.default.Messages.PRIVACY_SETTINGS,icon:U.default,action:function(){return(0,k.openModalLazy)(K(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){
for(;;)switch(e.prev=e.next){case 0:e.next=2;return Promise.all([n.e(40532),n.e(34537)]).then(n.bind(n,919131));case 2:r=e.sent;o=r.default;return e.abrupt("return",(function(e){return a.createElement(o,$({},e,{guild:t}))}));case 5:case"end":return e.stop()}}),e)}))))}}),ne),J?null:z(y.MenuGroup,{},void 0,z(y.MenuItem,{id:"leave",label:B.default.Messages.LEAVE_HUB,icon:C.default,color:H.MenuItemColor.DANGER,action:function(){return Z(t)}}))):z(y.default,{onSelect:i,navId:"guild-header-popout",style:y.MenuStyle.FIXED,onClose:r,"aria-label":B.default.Messages.GUILD_ACTIONS_MENU_LABEL},void 0,z(y.MenuGroup,{},void 0,z(y.MenuItem,{id:"premium-subscribe",label:B.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,icon:G.default,color:H.MenuItemColor.PREMIUM,action:function(){(0,v.openGuildBoostingMarketingModal)({guildId:t.id,location:{section:x.AnalyticsSections.GUILD_HEADER_POPOUT}})}})),z(y.MenuGroup,{},void 0,te,F?z(y.MenuItem,{id:"settings",
label:B.default.Messages.SERVER_SETTINGS,icon:P.default,action:function(){(0,h.canShowAppUpsellModal)()?(0,h.openAppUpsellModal)("Server Settings"):M.default.open(t.id,x.GuildSettingsSections.OVERVIEW)}}):null,Y?z(y.MenuItem,{id:"insights",label:B.default.Messages.SERVER_INSIGHTS,icon:A.default,action:function(){return M.default.open(t.id,x.GuildSettingsSections.ANALYTICS)}}):null,W?a.createElement(a.Fragment,null,z(y.MenuItem,{id:"create-channel",label:B.default.Messages.CREATE_CHANNEL,icon:T.default,action:function(){if(!(0,h.canShowAppUpsellModal)())return(0,k.openModalLazy)(K(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return Promise.all([n.e(40532),n.e(71667)]).then(n.bind(n,871667));case 2:r=e.sent;o=r.default;return e.abrupt("return",(function(e){return a.createElement(o,$({},e,{channelType:x.ChannelTypes.GUILD_TEXT,guildId:t.id}))}));case 5:case"end":return e.stop()}}),e)}))));(0,
h.openAppUpsellModal)("Create Channel")}}),z(y.MenuItem,{id:"create-category",label:B.default.Messages.CREATE_CATEGORY,icon:L.default,action:function(){if(!(0,h.canShowAppUpsellModal)())return(0,k.openModalLazy)(K(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return Promise.all([n.e(40532),n.e(71667)]).then(n.bind(n,871667));case 2:r=e.sent;o=r.default;return e.abrupt("return",(function(e){return a.createElement(o,$({},e,{channelType:x.ChannelTypes.GUILD_CATEGORY,guildId:t.id}))}));case 5:case"end":return e.stop()}}),e)}))));(0,h.openAppUpsellModal)("Create Category")}})):null,ee),z(y.MenuGroup,{},void 0,oe,z(y.MenuItem,{id:"notifications",label:B.default.Messages.NOTIFICATION_SETTINGS,icon:w.default,action:function(){return(0,k.openModalLazy)(K(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2
;return Promise.all([n.e(40532),n.e(89843)]).then(n.bind(n,289843));case 2:r=e.sent;o=r.default;return e.abrupt("return",(function(e){return a.createElement(o,$({},e,{guildId:t.id}))}));case 5:case"end":return e.stop()}}),e)}))))}}),z(y.MenuItem,{id:"privacy",label:B.default.Messages.PRIVACY_SETTINGS,icon:U.default,action:function(){return(0,k.openModalLazy)(K(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return Promise.all([n.e(40532),n.e(34537)]).then(n.bind(n,919131));case 2:r=e.sent;o=r.default;return e.abrupt("return",(function(e){return a.createElement(o,$({},e,{guild:t}))}));case 5:case"end":return e.stop()}}),e)}))))}})),z(y.MenuGroup,{},void 0,ne,z(y.MenuCheckboxItem,{id:"hide-muted-channels",label:B.default.Messages.HIDE_MUTED_CHANNELS,checked:S,action:function(){return l.default.toggleCollapseGuild(t.id)}})),z(y.MenuGroup,{},void 0,X&&q?z(y.MenuItem,{id:"report-raid",
label:B.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,icon:N.default,color:H.MenuItemColor.DANGER,action:function(){return(0,p.openReportRaidModal)(t.id)}}):null,J?null:z(y.MenuItem,{id:"leave",label:B.default.Messages.LEAVE_SERVER,icon:C.default,color:H.MenuItemColor.DANGER,action:function(){return Z(t)}})))}));t.default=q},698486:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=c;var r,a,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}(n(667294)),u=(r=n(468205))&&r.__esModule?r:{default:r},i=["width","height","color","foreground"];function l(e){
if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function s(){s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return s.apply(this,arguments)}function d(e,t,n,r){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),1===u)t.children=r;else if(u>1){for(var i=new Array(u),l=0;l<u;l++)i[l]=arguments[l+3];t.children=i}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function c(e){var t=e.width,n=void 0===t?18:t,r=e.height,a=void 0===r?18:r,l=e.color,c=void 0===l?"currentColor":l,f=e.foreground,p=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++){n=o[r]
;t.indexOf(n)>=0||(a[n]=e[n])}return a}(e,i);return o.createElement("svg",s({},(0,u.default)(p),{width:n,height:a,viewBox:"0 0 24 24"}),d("path",{className:f,fill:c,d:"M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z"}))}c.displayName="Exit"},728408:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=c;var r,a,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}(n(667294)),u=(r=n(468205))&&r.__esModule?r:{default:r
},i=["width","height","color","foreground"];function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function s(){s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return s.apply(this,arguments)}function d(e,t,n,r){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),1===u)t.children=r;else if(u>1){for(var i=new Array(u),l=0;l<u;l++)i[l]=arguments[l+3];t.children=i}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function c(e){var t=e.width,n=void 0===t?18:t,r=e.height,a=void 0===r?18:r,l=e.color,c=void 0===l?"currentColor":l,f=e.foreground,p=function(e,t){if(null==e)return{}
;var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++){n=o[r];t.indexOf(n)>=0||(a[n]=e[n])}return a}(e,i);return o.createElement("svg",s({},(0,u.default)(p),{width:n,height:a,viewBox:"0 0 24 24"}),d("path",{className:f,fill:c,d:"M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7ZM16 15H13V18H11V15H8V13H11V10H13V13H16V15Z"}))}c.displayName="FolderAdd"}}]);
//# sourceMappingURL=ac8b0d8e15273589dd3e.js.map