"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[3575],{804394:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.init=function(){r.default.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_INIT"})};t.saveAndClearPermissionUpdates=o;t.savePermissionUpdates=function(e,t,n){return o(e,t,[],n)};t.selectPermission=function(e){r.default.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION",id:e})};t.setAdvancedMode=function(e){r.default.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE",advancedMode:e})};t.updatePermission=function(e,t,n){r.default.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION",id:e,allow:t,deny:n})};var r=a(n(636602)),i=a(n(709403));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,a){r.default.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING"});return new Promise((function(r){!function a(){if(0===t.length&&0===n.length)return r();if(t.length>0){var o=t.pop()
;if(null==o)return a();i.default.updatePermissionOverwrite(e,o).then(a,a)}else{var l=n.pop();if(null==l)return a();i.default.clearPermissionOverwrite(e,l).then(a,a)}}()})).then((function(){r.default.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS",silent:a})}))}},289371:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.canCreatePrivateChannel=function(e,t,n){if(e===E.ChannelTypes.GUILD_TEXT||e===E.ChannelTypes.GUILD_ANNOUNCEMENT)return t;if((0,l.isGuildVocalChannelType)(e)||e===E.ChannelTypes.GUILD_CATEGORY)return t&&n;return!0};t.extractPermissionOverwrites=function(e,t){var n=[];Object.values(e).forEach((function(e){var r=e.row;null!=r.id&&""!==r.id&&(r.rowType===p.RowType.ROLE?n.push((0,d.permissionOverwriteForRole)(r.id,t)):r.rowType===p.RowType.MEMBER&&n.push((0,d.permissionOverwriteForUser)(r.id,t)))}));return n};t.flipEveryonePermission=C;t.getAllExistingRolesWithPermission=O;t.getExistingMembers=L;t.getExistingMembersRows=function(e,t,n,r,i){
return L(e,t,n,r,i).map((function(e){return b(e,n)})).sort(I)};t.getExistingRoles=h;t.getExistingRolesRowWithPermissionDisabled=function(e,t,n,i){var a=[];if(null==e.roles)return a;if(0===(a=O(e,t,n,i).sort(S).map((function(e){return m(e,r.default.has(e.permissions,n))}))).length)return M(v.default.Messages.CHANNEL_PERMISSIONS_NO_ROLES);return a};t.getExistingRolesRows=function(e,t,n,r){var i=[];if(null==e.roles)return i;if(0===(i=h(e,t,n,r).sort(S).map((function(e){return m(e)}))).length)return M(v.default.Messages.CHANNEL_PERMISSIONS_NO_ROLES);return i};t.getMembersRows=function(e,t,n,r,i){void 0===i&&(i=function(){return!0});return e.map(s.default.getUser).filter(f.isNotNullish).filter((function(e){return!n.isOwner(e)&&_(t,e.id,r)&&(i(A(e,n))||i(e.username)||i(e.discriminator))})).map((function(e){return b(e,n)})).sort(I)};t.getNoRolesRow=M;t.getPrivateChannelHintText=function(e){switch(e){case E.ChannelTypes.GUILD_TEXT:case E.ChannelTypes.GUILD_ANNOUNCEMENT:
return v.default.Messages.PRIVATE_TEXT_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();case E.ChannelTypes.GUILD_VOICE:return v.default.Messages.PRIVATE_VOICE_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();case E.ChannelTypes.GUILD_CATEGORY:return v.default.Messages.PRIVATE_CATEGORY_CREATION_PERMISSION_MISSING_HINT.format();default:return null}};t.getRemoveTooltipHint=function(e){switch(e){case p.RowType.ROLE:return v.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;case p.RowType.OWNER:return v.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;case p.RowType.ADMINISTRATOR:return v.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;case p.RowType.MEMBER:return v.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;case p.RowType.EMPTY_STATE:default:return null}};t.getRoleRowData=m;t.getRolesRows=function(e,t,n,r){void 0===r&&(r=function(){return!0});if(null==e.roles)return[];return Object.values(e.roles).filter((function(i){
return!T(i)&&_(t,i.id,n)&&N(e,i)&&r(i.name)})).sort(S).map((function(e){return m(e)}))};t.getRolesRowsWithPermissionDisabled=function(e,t,n,i){void 0===i&&(i=function(){return!0});if(null==e.roles)return[];return Object.values(e.roles).filter((function(r){return!T(r)&&_(t,r.id,n)&&N(e,r)&&i(r.name)})).sort(S).map((function(e){return m(e,r.default.has(e.permissions,n))}))};t.getRowTypeLabel=function(e,t){switch(e){case p.RowType.ROLE:return v.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;case p.RowType.OWNER:return v.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;case p.RowType.ADMINISTRATOR:return v.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;case p.RowType.MEMBER:return t?v.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER:null;case p.RowType.EMPTY_STATE:return null}};t.grantUserChannelAccess=function(e,t){var n=s.default.getCurrentUser();if(null==n)return;var i=e.permissionOverwrites[n.id];if(null==i){var l={id:n.id,
type:o.PermissionOverwriteType.MEMBER,allow:r.default.add(c.default.NONE,t),deny:c.default.NONE};(0,a.savePermissionUpdates)(e.id,[l],!0)}else{var u=i.allow,d=i.deny;u=r.default.add(u,t);(0,a.updatePermission)(i.id,u,d)}};t.hasCustomRoles=function(e){var t=Object.keys(e.roles);return 0!==t.length&&(1!==t.length||t[0]!==e.id)};t.isAdmin=T;t.isEveryoneRoleId=g;t.isPrivateGuildChannel=function(e,t){if(null==e)return!1;var n=e.permissionOverwrites[e.guild_id];null!=(null==t?void 0:t[e.guild_id])&&(n=t[e.guild_id]);if(null!=n)return r.default.has(n.deny,e.accessPermissions);return!1};t.isPrivateTextChannel=function(e){var t=e.permissionOverwrites[e.guild_id];return null!=t&&e.type===E.ChannelTypes.GUILD_TEXT&&r.default.has(t.deny,E.Permissions.VIEW_CHANNEL)};t.sortRoles=S;t.toggleChannelEveryonePermission=function(e,t,n){var r=C(e,t,n);(0,a.updatePermission)(r.id,r.allow,r.deny)}
;var r=R(n(267258)),i=n(235234),a=n(804394),o=n(81069),l=n(567186),u=R(n(876874)),s=R(n(728429)),d=n(319986),f=n(71246),c=R(n(656016)),p=n(739889),E=n(770348),v=R(n(247001));function R(e){return e&&e.__esModule?e:{default:e}}function y(){y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return y.apply(this,arguments)}function T(e){return r.default.has(e.permissions,E.Permissions.ADMINISTRATOR)}function m(e,t){var n;void 0===t&&(t=!1);var a=function(e){return r.default.has(e.permissions,E.Permissions.ADMINISTRATOR)?p.RowType.ADMINISTRATOR:p.RowType.ROLE}(e);return{rowType:a,colorString:null!==(n=e.colorString)&&void 0!==n?n:(0,i.int2hex)(E.DEFAULT_ROLE_COLOR),name:e.name,id:e.id,disabled:T(e)||t,key:a+":"+e.id}}function S(e,t){var n=T(e)?0:1,r=T(t)?0:1;return n!==r?n-r:t.position-e.position}function M(e){
void 0===e&&(e=v.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_ROLES);return[{rowType:p.RowType.EMPTY_STATE,colorString:(0,i.int2hex)(E.DEFAULT_ROLE_COLOR),name:e,disabled:!0,id:"EMPTY_STATE"}]}function _(e,t,n,i){var a=s.default.getCurrentUser();if(null==a)return!1;if(null==e)return a.id!==t;var o=e.permissionOverwrites[t];null!=(null==i?void 0:i[t])&&(o=i[t]);return null==o||!r.default.has(o.allow,n)}function g(e,t){return e===t}function N(e,t){return!g(e.id,t.id)}function h(e,t,n,r){return Object.values(e.roles).filter((function(i){return T(i)||!_(t,i.id,n,r)&&N(e,i)}))}function O(e,t,n,i){return Object.values(e.roles).filter((function(a){var o;return T(a)||!_(t,a.id,n,i)&&N(e,a)||r.default.has(r.default.combine(a.permissions,null===(o=t.permissionOverwrites[a.id])||void 0===o?void 0:o.allow),n)}))}function A(e,t){var n;return null!==(n=u.default.getNick(t.id,e.id))&&void 0!==n?n:e.username}function w(e,t){return t.isOwner(e)}function b(e,t){var n=function(e,t){
return t.isOwner(e)?p.RowType.OWNER:p.RowType.MEMBER}(e,t);return{rowType:n,name:A(e,t),userTag:e.tag,id:e.id,avatarURL:e.getAvatarURL(t.id,24),bot:e.bot,verifiedBot:e.isVerifiedBot(),disabled:w(e,t),key:n+":"+e.id}}function I(e,t){return e.rowType!==t.rowType?e.rowType-t.rowType:e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase())}function L(e,t,n,r,i){return e.map(s.default.getUser).filter(f.isNotNullish).filter((function(e){return!_(t,e.id,r,i)||w(e,n)}))}function C(e,t,n){var i=e.permissionOverwrites[e.guild_id];null==i&&(i=c.default.makeEveryoneOverwrite(e.guild_id));var a=y({},i);a.deny=r.default.remove(a.deny,t);a.allow=r.default.remove(a.allow,t);n||(a.deny=r.default.add(a.deny,t));return a}},403575:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.AddMembersBody=ie;t.MemberRoleSelector=ae;t.default=oe;t.getFullRowId=ee
;var r,i=F(n(667294)),a=W(n(294184)),o=n(798628),l=n(536211),u=n(804394),s=n(441224),d=W(n(328704)),f=n(567186),c=W(n(644263)),p=W(n(876874)),E=W(n(30098)),v=W(n(663303)),R=W(n(870461)),y=W(n(956117)),T=W(n(789446)),m=W(n(16941)),S=W(n(530250)),M=n(772575),_=n(645758),g=n(354479),N=n(688388),h=W(n(291555)),O=W(n(340858)),A=W(n(482357)),w=W(n(114655)),b=n(3400),I=W(n(628551)),L=W(n(521358)),C=W(n(308920)),P=n(319986),D=W(n(895201)),x=W(n(827513)),k=F(n(289371)),j=W(n(925502)),H=n(739889),B=n(770348),U=W(n(247001)),G=W(n(618719));function W(e){return e&&e.__esModule?e:{default:e}}function V(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(V=function(e){return e?n:t})(e)}function F(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=V(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e;n&&n.set(e,r);return r}function z(e,t,n,r,i,a,o){try{var l=e[a](o),u=l.value}catch(e){n(e);return}l.done?t(u):Promise.resolve(u).then(r,i)}function Y(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){z(a,r,i,o,l,"next",e)}function l(e){z(a,r,i,o,l,"throw",e)}o(void 0)}))}}function q(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){
var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0){a.push(r.value);if(t&&a.length===t)break}}catch(e){l=!0;i=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X(){X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return X.apply(this,arguments)}function J(e,t,n,i){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=i;else if(o>1){for(var l=new Array(o),u=0;u<o;u++)l[u]=arguments[u+3];t.children=l}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var K=(0,g.uid)(),Z=(0,g.uid)();function ee(e){return e.rowType+":"+e.id}function te(e){return J(N.FormTitle,{tag:N.FormTitle.Tags.H5,className:(0,a.default)(G.default.sectionTitle,G.default.rowHeight)},e,e)}te.displayName="renderSectionTitle";function ne(e,t){return t?e.slice(1):e}function re(e){
var t,n=e.id,r=e.children,l=e.rowLabel,u=e.checked,s=e.onSelect,d=e.disabled,f=e.showCheckbox,c=e.selected,p=e.onMouseEnter,E=e["aria-posinset"],v=e["aria-setsize"],R=(0,o.useListItem)(n);return i.createElement(m.default,X({},R,{id:n,className:(0,a.default)(G.default.addMemberRow,(t={},t[G.default.selectedRow]=c,t)),onClick:function(e){if(!d){e.preventDefault();s()}},onMouseEnter:p,role:"option","aria-disabled":d,"aria-selected":u,"aria-setsize":v,"aria-posinset":E}),J(S.default,{justify:S.default.Justify.BETWEEN,align:S.default.Align.CENTER},void 0,f?J(T.default,{displayOnly:!0,size:18,value:u,type:T.default.Types.INVERTED},void 0,J("div",{className:G.default.checkboxLabel},void 0,r)):r,null!=l?J(_.Text,{color:"text-muted",variant:"text-xs/normal"},void 0,l):null))}re.displayName="AddMembersRow";function ie(e){
var t=e.guild,n=e.channel,r=e.permission,a=e.pendingAdditions,o=e.setPendingAdditions,u=e.isStageChannel,d=void 0===u?null!=n&&n.isGuildStageVoice():u,f=e.description,c=Q(i.useState(!1),2),E=c[0],v=c[1],R=Q(i.useState(""),2),y=R[0],T=R[1];function m(e){var t=ne(y.trim(),E);return new RegExp(""+x.default.escape(t),"i").test(e)}var S,M=(0,l.useStateFromStores)([p.default],(function(){return p.default.getMemberIds(t.id)}));E?S=[]:d?S=k.getRolesRowsWithPermissionDisabled(t,n,r,m):0===(S=k.getRolesRows(t,n,r,m)).length&&(""!==y.trim()||k.hasCustomRoles(t)||(S=k.getNoRolesRow()));var _=k.getMembersRows(M,n,t,r,m);var g={placeholderText:U.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_PLACEHOLDER,hintText:U.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_SUBTITLE,renderEmptyText:function(e){return U.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({query:e})}};return J(ae,{pendingAdditions:a,query:y,onQueryChange:function(e){var n=e.trim(),r="@"===n.charAt(0)
;D.default.requestMembers(t.id,ne(n,r),H.MEMBER_REQUEST_COUNT);T(e);v(r)},onClickRow:function(e){var t=ee(e);o((function(n){var r=X({},n);if(t in r)delete r[t];else{var i;e.rowType===H.RowType.ROLE||e.rowType===H.RowType.ADMINISTRATOR?i={type:s.RichTagTypes.ROLE,label:e.name,color:e.colorString}:e.rowType!==H.RowType.MEMBER&&e.rowType!==H.RowType.OWNER||(i={type:s.RichTagTypes.MEMBER,label:e.name,avatar:e.avatarURL});null!=i&&(r[t]={display:i,row:e})}return r}))},onRemovePendingAddition:function(e){o((function(t){t[e];return function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++){n=a[r];t.indexOf(n)>=0||(i[n]=e[n])}return i}(t,[e].map(q))}))},roles:S,members:_,placeholderText:g.placeholderText,hintText:g.hintText,renderEmptyText:g.renderEmptyText,isStageChannel:d,description:f})}ie.displayName="AddMembersBody";function ae(e){
var t,n=e.listClassName,r=e.pendingAdditions,o=e.query,u=e.onQueryChange,s=e.onClickRow,f=e.onRemovePendingAddition,c=e.roles,p=e.members,E=e.placeholderText,y=e.hintText,T=e.renderEmptyText,m=e.isStageChannel,M=e.focusSearchAfterReady,g=e.isReady,N=e.description,h=i.useRef(null),A=i.useRef(null),b=(0,l.useStateFromStores)([v.default],(function(){return v.default.hidePersonalInformation})),C=Q(i.useState(!1),2),P=C[0],D=C[1],x=Q(i.useState(0),2),B=x[0],W=x[1],V=Q(i.useState(-1),2),F=V[0],z=V[1],Y=i.useCallback((function(e,t,n){void 0===n&&(n=!0);W(e);z(t);if(n){var r;null===(r=A.current)||void 0===r||r.scrollToIndex({section:null!=e?e:0,row:null!=t?t:0,padding:8})}}),[]),q=i.useCallback((function(e,t){if(null!=t){u("");var n=(e===H.AddMembersSections.ROLES?c:p)[t];n.rowType!==H.RowType.EMPTY_STATE&&s(n)}}),[c,p,s,u]),$=i.useCallback((function(e){var t;if(null!=e&&e.rowType!==H.RowType.EMPTY_STATE){s(e);u("");null===(t=h.current)||void 0===t||t.focus()}}),[s,u]),X=i.useMemo((function(){
return Object.keys(r)}),[r]);var ne=p.some((function(e){return!e.disabled}))||c.some((function(e){return!e.disabled}))||""===o.trim();function ie(){var e;D(!(null===(e=A.current)||void 0===e?void 0:e.isScrolledToTop())&&ne)}i.useEffect((function(){ie()}));return J("div",{className:G.default.content},void 0,function(){var e=N;null==e&&m&&(e=U.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION);return null==e||""===e?null:J(_.Text,{color:"header-secondary",className:G.default.description,variant:"text-sm/normal"},void 0,e)}(),J("div",{className:(0,a.default)(G.default.searchBox,(t={},t[G.default.scrollSeparator]=P,t))},void 0,i.createElement(j.default,{ref:h,query:o,onQueryChange:u,selectedSection:B,selectedRow:F,onSelectionChange:Y,onSelect:q,tags:X.map((function(e){return r[e].display})),sections:[c.length,p.length],onRemoveTag:function(e){f(X[e])},placeholder:E,focusAfterReady:M,isReady:g,"aria-labelledby":K,"aria-controls":Z}),null!=y?J(_.Text,{variant:"text-xs/normal"
},void 0,y):null),ne?i.createElement(L.default,{ref:A,className:(0,a.default)(G.default.roleMemberList,n),sections:[c.length,p.length],renderRow:function(e){var t,n,a=e.section,o=e.row,l=null,u=!1,s=!1,d=!1;switch(a){case H.AddMembersSections.ROLES:u=(n=ee(l=c[o]))in r||l.disabled;s=l.disabled;d=B===H.AddMembersSections.ROLES&&F===o;t=i.createElement(i.Fragment,null,J("div",{className:G.default.rowHeight},void 0,J(O.default,{color:l.colorString,height:20})),J("div",{className:G.default.rowLabel},void 0,J(w.default,{className:G.default.rowTitle,color:l.rowType===H.RowType.EMPTY_STATE?w.default.Colors.MUTED:w.default.Colors.STANDARD},void 0,l.name),m&&l.disabled?J(_.Text,{color:"header-secondary",variant:"text-xs/normal"},void 0,U.default.Messages.CHANNEL_PERMISSIONS_ROLE_ALREADY_HAS_PERMISSIONS):null));break;case H.AddMembersSections.MEMBERS:u=(n=ee(l=p[o]))in r||l.disabled;s=l.disabled;d=B===H.AddMembersSections.MEMBERS&&F===o;t=i.createElement(i.Fragment,null,J(I.default,{
src:l.avatarURL,size:I.default.Sizes.SIZE_24,"aria-label":""}),J(_.Text,{className:G.default.rowLabel,"aria-hidden":!b,variant:"text-sm/normal"},void 0,l.name),l.bot&&J(R.default,{verified:l.verifiedBot}),!b&&J(_.Text,{color:"text-muted",className:G.default.rowLabelSubText,variant:"text-sm/normal"},void 0,l.userTag))}return null==l?null:J(re,{id:"user-row-"+o,rowLabel:k.getRowTypeLabel(l.rowType),checked:u,disabled:s,onSelect:function(){return $(l)},showCheckbox:l.rowType!==H.RowType.EMPTY_STATE,onMouseEnter:function(){return Y(a,o,!1)},selected:d,"aria-posinset":o+1,"aria-setsize":c.length+p.length},n,J(S.default,{align:S.default.Align.CENTER,justify:S.default.Justify.START},void 0,t))},rowHeight:40,renderSection:function(e){switch(e.section){case H.AddMembersSections.ROLES:return te(U.default.Messages.ROLES);case H.AddMembersSections.MEMBERS:return te(U.default.Messages.MEMBERS)}},sectionHeight:32,onScroll:ie,role:void 0,innerRole:"listbox",innerId:Z,innerAriaMultiselectable:!0,
innerAriaOrientation:"vertical"}):J(S.default,{className:n,align:S.default.Align.CENTER,justify:S.default.Justify.CENTER,direction:S.default.Direction.VERTICAL},void 0,J(d.default,{className:G.default.noResultIcon}),J(_.Text,{variant:"text-sm/normal"},void 0,T(o))))}ae.displayName="MemberRoleSelector";function oe(e){var t=e.transitionState,n=e.onClose,r=e.channelId,a=e.newChannel,o=e.inSettings,u=Q(i.useState(!1),2),s=u[0],d=u[1],p=Q(i.useState({}),2),v=p[0],R=p[1],T=(0,l.useStateFromStores)([c.default],(function(){return c.default.getChannel(r)}),[r]),m=(0,l.useStateFromStores)([E.default],(function(){return E.default.getGuild(null==T?void 0:T.getGuildId())}));i.useEffect((function(){C.default.track(B.AnalyticEvents.OPEN_MODAL,{type:"Grant Channel Access"})}),[]);if(null==T||null==m)return null;var g=a&&0===Object.keys(v).length;function N(){return(N=Y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:
if(null!=T&&0!==Object.keys(v).length){e.next=3;break}n();return e.abrupt("return");case 3:d(!0);e.prev=4;e.next=7;return le(T,v,o);case 7:n();d(!1);e.next=14;break;case 11:e.prev=11;e.t0=e.catch(4);d(!1);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}var O=(0,f.isGuildTextChannelType)(T.type)?h.default:A.default;return J(b.ModalRoot,{transitionState:t,size:b.ModalSize.SMALL,"aria-labelledby":K,className:G.default.modalRoot},void 0,J(b.ModalHeader,{separator:!1,direction:S.default.Direction.VERTICAL,align:S.default.Align.CENTER,className:G.default.header},void 0,J(M.Heading,{id:K,variant:"heading-xl/medium",level:2},void 0,U.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE),J(_.Text,{variant:"text-md/normal",color:"header-secondary",className:G.default.headerSubtitle},void 0,J(O,{height:16,width:16,className:G.default.headerSubtitleIcon}),T.name)),J(ie,{guild:m,channel:T,permission:T.accessPermissions,pendingAdditions:v,setPendingAdditions:R
}),J(b.ModalFooter,{},void 0,!g&&i.createElement(i.Fragment,null,J(y.default,{onClick:function(){return N.apply(this,arguments)},look:y.default.Looks.FILLED,size:y.default.Sizes.SMALL,className:G.default.button,submitting:s},void 0,U.default.Messages.DONE),J(y.default,{look:y.default.Looks.LINK,color:y.default.Colors.TRANSPARENT,onClick:n,size:y.default.Sizes.SMALL},void 0,U.default.Messages.CANCEL)),g&&J(y.default,{look:y.default.Looks.FILLED,color:y.default.Colors.PRIMARY,onClick:n,size:y.default.Sizes.SMALL},void 0,U.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_SKIP)))}oe.displayName="AddMembersModal";function le(e,t,n){var r=[];Object.values(t).forEach((function(t){var n=t.row;null!=n.id&&""!==n.id&&(n.rowType===H.RowType.ROLE?r.push((0,P.permissionOverwriteForRole)(n.id,e.type)):n.rowType===H.RowType.MEMBER&&r.push((0,P.permissionOverwriteForUser)(n.id,e.type)))}));return(0,u.savePermissionUpdates)(e.id,r,n)}},925502:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0})
;t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e;n&&n.set(e,r);return r}(n(667294)),i=o(n(441224)),a=o(n(35021));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}var u=r.forwardRef((function(e,t){var n=e.query,o=e.onQueryChange,l=e.onRemoveTag,u=e.onSelect,s=e.onSelectionChange,d=e.selectedSection,f=e.selectedRow,c=e.tags,p=e.sections,E=e.placeholder,v=void 0===E?"":E,R=e.focusAfterReady,y=e.isReady,T=e["aria-labelledby"],m=e["aria-controls"]
;return r.createElement(i.default,{autoFocus:!0,className:a.default.searchBar,maxHeight:100,onQueryChange:o,onRemoveTag:l,selectedSection:d,selectedRow:f,onSelect:u,onSelectionChange:s,placeholder:0===c.length?v:"",query:n,ref:t,size:i.default.Sizes.MEDIUM,tags:c,sections:p,focusAfterReady:R,isReady:y,inputProps:{"aria-labelledby":T,"aria-controls":m,"aria-expanded":!0,"aria-activedescendant":"user-row-"+f}})}));t.default=u},328704:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=s;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e;n&&n.set(e,r)}(n(667294));var r,i=o(n(294184)),a=o(n(735716))
;function o(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function u(e,t,n,i){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=i;else if(o>1){for(var l=new Array(o),u=0;u<o;u++)l[u]=arguments[u+3];t.children=l}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function s(e){var t=e.className;return u("div",{className:(0,i.default)(a.default.image,t)})}s.displayName="NoResultsImage"}}]);
//# sourceMappingURL=e4e832c5c8a0fb524d08.js.map