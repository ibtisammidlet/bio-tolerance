(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[31675,32735],{751826:(e,t,n)=>{"use strict";n.r(t);n.d(t,{default:()=>l});var r,i=["bottom","height","left","right","top","width"],o=new Map,a=function e(){o.forEach((function(e){if(e.hasRectChanged){e.callbacks.forEach((function(t){return t(e.rect)}));e.hasRectChanged=!1}}));window.setTimeout((function(){o.forEach((function(e,t){var n=t.getBoundingClientRect();if(function(e,t){void 0===e&&(e={});void 0===t&&(t={});return i.some((function(n){return e[n]!==t[n]}))}(n,e.rect)){e.hasRectChanged=!0;e.rect=n}}))}),0);r=window.requestAnimationFrame(e)};const l=function(e,t){return{observe:function(){var n=0===o.size;o.has(e)?o.get(e).callbacks.push(t):o.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[t]});n&&a()},unobserve:function(){var n=o.get(e);if(n){var i=n.callbacks.indexOf(t);i>=0&&n.callbacks.splice(i,1);n.callbacks.length||o.delete(e);o.size||cancelAnimationFrame(r)}}}}},707842:(e,t,n)=>{"use strict"
;Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r=c(n(667294)),i=u(n(589843)),o=u(n(387316)),a=c(n(905835)),l=n(864489);function u(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}function f(){f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return f.apply(this,arguments)}function d(e,t){
d=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return d(e,t)}function p(e){var t=["openFile"];e.multiple&&t.push("multiSelections");var n=e.filters;o.default.fileManager.openFiles({properties:t,filters:n}).then((function(t){var n=t.map((function(e){return a.transformNativeFile(e)}));null!=n&&e.onChange({stopPropagation:function(){return null},preventDefault:function(){return null},currentTarget:{files:n}})}))}var v=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;d(e,t)}(t,e);function t(t){var n;(n=e.call(this,t)||this)._ref=r.createRef();n.setRef=n.setRef.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n));return n}var n=t.prototype;n.activateUploadDialogue=function(){if(null!=this._ref)return this._ref.activateUploadDialogue()};n.setRef=function(e){this._ref=e};n.render=function(){return r.createElement(i.default,f({ref:this.setRef,
handleNativeClick:p,embedded:(0,l.isDesktop)()},this.props))};return t}(r.Component);v.displayName="FileInput";var y=v;t.default=y},640664:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.updateCreateGuildModal=t.openCreateGuildModal=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}(n(667294)),i=f(n(885986)),o=n(194322),a=f(n(308920)),l=f(n(295260)),u=n(987277),s=n(770348),c=n(33989);function f(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}
function p(){p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return p.apply(this,arguments)}function v(e,t,n){return r.createElement(l.default,p({onSuccess:function(){i.default.flowStep(c.FlowType.CREATE_GUILD,c.CreateGuildSteps.SUCCESS);e.onClose()},onSlideChange:function(e){return function(e,t){switch(e){case u.CreateGuildSlideTypes.GUILD_TEMPLATES:i.default.flowStepOrStart(c.FlowType.CREATE_GUILD,c.CreateGuildSteps.GUILD_TEMPLATES);a.default.track(s.AnalyticEvents.OPEN_MODAL,{type:"Create Guild Templates",location:t});break;case u.CreateGuildSlideTypes.CUSTOMIZE_GUILD:i.default.flowStep(c.FlowType.CREATE_GUILD,c.CreateGuildSteps.GUILD_CREATE);a.default.track(s.AnalyticEvents.OPEN_MODAL,{type:"Create Guild Step 2",location:t});break;case u.CreateGuildSlideTypes.CREATION_INTENT:a.default.track(s.AnalyticEvents.OPEN_MODAL,{type:"Server Intent Discovery",location:t});break
;case u.CreateGuildSlideTypes.JOIN_GUILD:i.default.flowStep(c.FlowType.CREATE_GUILD,c.CreateGuildSteps.JOIN_GUILD);a.default.track(s.AnalyticEvents.OPEN_MODAL,{type:"Join Guild",location:t})}}(e,n)},initialSlide:t,hasJoinButton:!0},e))}v.displayName="renderModal";t.openCreateGuildModal=function(e){var t=e.initialSlide,n=e.location;(0,o.openModal)((function(e){return v(e,t,n)}),{modalKey:u.CREATE_GUILD_MODAL_KEY})};t.updateCreateGuildModal=function(e){var t=e.slide,n=e.location;(0,o.updateModal)(u.CREATE_GUILD_MODAL_KEY,(function(e){return v(e,t,n)}))}},295260:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=w;var r,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=S(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){
var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}(n(667294)),o=n(47354),a=g(n(145371)),l=n(477537),u=n(354479),s=n(3400),c=g(n(308920)),f=n(518802),d=g(n(971517)),p=g(n(805146)),v=g(n(655251)),y=g(n(574942)),m=g(n(374850)),h=n(987277),_=n(770348),b=g(n(814148));function g(e){return e&&e.__esModule?e:{default:e}}function S(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(S=function(e){return e?n:t})(e)}function O(e,t,n,i){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=i;else if(a>1){for(var l=new Array(a),u=0;u<a;u++)l[u]=arguments[u+3];t.children=l}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function T(e,t){return function(e){
if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0){o.push(r.value);if(t&&o.length===t)break}}catch(e){l=!0;i=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e){
var t=e.transitionState,n=e.initialSlide,r=void 0===n?h.CreateGuildSlideTypes.GUILD_TEMPLATES:n,g=e.onSuccess,S=e.onClose,C=e.onSlideChange,w=e.hasJoinButton,I=(0,u.useUID)(),E=T(i.useState(r),2),N=E[0],M=E[1],A=(0,a.default)(N),D=T(i.useState(null),2),P=D[0],G=D[1],k=T(i.useState(null),2),R=k[0],j=k[1],L=T(i.useState(null),2),U=L[0],F=L[1],x=T(i.useState(!1),2),W=x[0],B=x[1];i.useEffect((function(){M(r)}),[M,r]);i.useEffect((function(){N!==A&&C(N)}),[C,N,A]);var J=i.useCallback((function(e){M(h.CreateGuildSlideTypes.CREATION_INTENT);j(e);c.default.track(_.AnalyticEvents.GUILD_TEMPLATE_SELECTED,{template_name:e.id,template_code:e.code})}),[]),V=i.useCallback((function(e){B(e);M(h.CreateGuildSlideTypes.CUSTOMIZE_GUILD)}),[]),K=i.useCallback((function(){return M(h.CreateGuildSlideTypes.JOIN_GUILD)}),[M]),z=i.useCallback((function(){if(N!==h.CreateGuildSlideTypes.CUSTOMIZE_GUILD){M(h.CreateGuildSlideTypes.GUILD_TEMPLATES);j(null)}else M(h.CreateGuildSlideTypes.CREATION_INTENT)
}),[N]),H=i.useCallback((function(e){F(e);g()}),[g,F]),$={impression_group:o.ImpressionGroups.GUILD_ADD_FLOW};return O("div",{className:(0,f.getThemeClass)(_.ThemeTypes.LIGHT)},void 0,O(s.ModalRoot,{transitionState:t,"aria-labelledby":I,disableTrack:!0},void 0,O("div",{className:b.default.container},void 0,O(l.Slides,{activeSlide:N,width:440,onSlideReady:function(e){return G(e)}},void 0,O(l.Slide,{id:h.CreateGuildSlideTypes.GUILD_TEMPLATES,impressionName:o.ImpressionNames.GUILD_ADD_LANDING,impressionProperties:$},void 0,O(y.default,{isNewUser:!1,onJoin:w?K:void 0,onChooseTemplate:J,onClose:S})),O(l.Slide,{id:h.CreateGuildSlideTypes.CREATION_INTENT,impressionName:o.ImpressionNames.GUILD_ADD_INTENT_SELECTION,impressionProperties:$},void 0,O(p.default,{onClose:S,onBack:z,onCreationIntentChosen:V})),O(l.Slide,{id:h.CreateGuildSlideTypes.CUSTOMIZE_GUILD,impressionName:o.ImpressionNames.GUILD_ADD_CUSTOMIZE,impressionProperties:$},void 0,O(v.default,{guildTemplate:R,onGuildCreated:H,
onClose:S,onBack:z,isSlideReady:P===h.CreateGuildSlideTypes.CUSTOMIZE_GUILD,isCommunity:W})),O(l.Slide,{id:h.CreateGuildSlideTypes.CHANNEL_PROMPT,impressionName:o.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,impressionProperties:$},void 0,O(d.default,{createdGuildId:U,onClose:S,onChannelPromptCompleted:g,isSlideReady:P===h.CreateGuildSlideTypes.CHANNEL_PROMPT})),O(l.Slide,{id:h.CreateGuildSlideTypes.JOIN_GUILD,impressionName:o.ImpressionNames.GUILD_ADD_JOIN,impressionProperties:$},void 0,O(m.default,{onBack:z,onClose:S,isSlideReady:P===h.CreateGuildSlideTypes.JOIN_GUILD}))))))}w.displayName="CreateGuildModal"},374850:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=k;var r,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=w(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}(n(667294)),o=C(n(294184)),a=C(n(23170)),l=C(n(225035)),u=n(139982),s=C(n(956117)),c=C(n(16941)),f=C(n(530250)),d=n(772575),p=n(645758),v=C(n(279950)),y=n(354479),m=n(688388),h=n(3400),_=n(813079),b=n(770348),g=C(n(247001)),S=C(n(274962)),O=C(n(489893)),T=C(n(794649));function C(e){return e&&e.__esModule?e:{default:e}}function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(w=function(e){return e?n:t})(e)}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0){o.push(r.value);if(t&&o.length===t)break}}catch(e){l=!0;i=e}finally{try{
a||null==n.return||n.return()}finally{if(l)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(e,t,n,i){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=i;else if(a>1){for(var l=new Array(a),u=0;u<a;u++)l[u]=arguments[u+3];t.children=l}
if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var M="hTKzmak",A=(0,y.uid)();var D=function(){var e=window.GLOBAL_ENV.INVITE_HOST,t="";if(null==e){e=location.host;t=b.Routes.INVITE("")}return location.protocol+"//"+e+t+"/"}(),P=[M,""+D+M,D+"cool-people"],G=function(e){var t=e.onClick;return N(c.default,{className:S.default.rowContainer,onClick:function(){t();(0,u.transitionTo)(b.Routes.GUILD_DISCOVERY)}},void 0,N("img",{width:40,height:40,className:S.default.rowIcon,alt:"",src:T.default}),N("div",{},void 0,N(d.Heading,{className:S.default.rowText,variant:"heading-md/medium",level:3},void 0,"Don't have an invite?"),N(p.Text,{className:S.default.rowText,variant:"text-xs/normal"},void 0,"Check out public communities in Server Discovery.")),N("img",{className:S.default.rowArrow,alt:"",src:O.default}))};G.displayName="InviteDiscoveryButton";function k(e){
var t,n=e.onBack,r=e.onClose,u=e.isSlideReady,b=(0,y.useUID)(),O=I(i.useState(""),2),T=O[0],C=O[1],w=I(i.useState(!1),2),E=w[0],k=w[1],R=I(i.useState(null),2),j=R[0],L=R[1],U=i.useRef(null);i.useEffect((function(){var e;u&&(null===(e=U.current)||void 0===e||e.focus())}),[u]);var F=function(e){e.preventDefault();var t=T.trim();if(""!==t){L(null);k(!0);var n=t.split("/"),i=n[n.length-1];a.default.resolveInvite(i,"Join Guild",{inputValue:t}).then((function(e){var t=e.invite;k(!1);if(null!=t){if(null!=t.channel){var n=a.default.getInviteContext("Join Guild",t);a.default.acceptInvite(t.code,n,(function(e){r();a.default.transitionToInvite(e)})).then((function(){}),(function(e){if(e instanceof l.default){var t=(0,_.getInviteError)(e.code);L(t)}else L(g.default.Messages.INVITE_MODAL_ERROR_DEFAULT)}))}}else L(g.default.Messages.INSTANT_INVITE_EXPIRED)}),(function(e){k(!1);var t=new l.default(e),n=(0,_.getInviteError)(t.code);L(n)}))}else L(g.default.Messages.INVALID_INVITE_LINK_ERROR)}
;return N("div",{},void 0,N(h.ModalHeader,{className:S.default.header,direction:f.default.Direction.VERTICAL,separator:!1,id:b},void 0,N(d.Heading,{className:S.default.title,variant:"heading-xl/medium",level:3},void 0,g.default.Messages.JOIN_SERVER_TITLE),N(p.Text,{color:"header-secondary",variant:"text-sm/normal"},void 0,g.default.Messages.JOIN_SERVER_DESCRIPTION_NUF),N(h.ModalCloseButton,{className:S.default.closeButton,onClick:r})),N(h.ModalContent,{className:S.default.content},void 0,N("form",{onSubmit:F,className:S.default.inputForm},void 0,N(m.FormItem,{},void 0,N(m.FormTitle,{id:A,error:j,className:(0,o.default)(S.default.formTitle,(t={},t[S.default.error]=null!=j,t)),required:!0},void 0,g.default.Messages.FORM_LABEL_INVITE_LINK),N(v.default,{value:T,onChange:C,className:S.default.input,inputClassName:S.default.inputInner,placeholder:""+D+M,inputRef:U,required:!0,"aria-labelledby":A}))),N(m.FormItem,{title:g.default.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
titleClassName:S.default.formTitle,className:S.default.examplesForm},void 0,P.map((function(e){return N(c.default,{className:S.default.sampleLink,onClick:function(){return C(e)}},e,e)}))),N(G,{onClick:r})),N(h.ModalFooter,{className:S.default.footer},void 0,N(s.default,{color:s.default.Colors.BRAND,submitting:E,onClick:F},void 0,g.default.Messages.NUF_JOIN_SERVER_BUTTON),N(s.default,{color:s.default.Colors.PRIMARY,look:s.default.Looks.LINK,size:s.default.Sizes.MIN,onClick:n},void 0,g.default.Messages.BACK)))}k.displayName="JoinGuildSlide"},683749:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.FileTypes=void 0;var n;t.FileTypes=n;!function(e){e.MP4="video/mp4"}(n||(t.FileTypes=n={}))},32735:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;t.getFilters=f;t.processImage=p;t.readImage=d;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=s(t)
;if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}(n(667294)),i=u(n(707842)),o=n(164101),a=n(683749),l=u(n(247001));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function c(e,t){c=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return c(e,t)}function f(){return[{name:l.default.Messages.IMAGES,extensions:["jpg","jpeg","png","gif"]}]}function d(e,t){if(null!=e){var n=new FileReader;n.onload=function(n){var r;"string"==typeof(null===(r=n.target)||void 0===r?void 0:r.result)&&t(n.target.result,e)};n.readAsDataURL(e)}}function p(e,t,n){d(e,(function(r){
if(e.type===a.FileTypes.MP4)return t(r,e);var i=new Image;i.src=r;i.onload=function(){t(r,e)};i.onerror=function(){n()}}))}var v=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;c(e,t)}(t,e);function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];(t=e.call.apply(e,[this].concat(i))||this)._ref=r.createRef();t._isMounted=!1;t.handleFileChange=function(e){var n=t.props,r=n.onFileSizeError,i=n.maxFileSizeBytes;e.stopPropagation();e.preventDefault();if(null!=e.currentTarget.files)for(var o=0;o<e.currentTarget.files.length;o++){var a=e.currentTarget.files[o];a.size>i?null==r||r(i,a.size):p(a,t.handleFileRead,t.handleFileError)}};t.handleFileRead=function(e,n){var r=t.props.onChange;t._isMounted&&r(e,n)};t.handleFileError=function(){(0,o.openUploadError)({title:l.default.Messages.PREMIUM_ALERT_ERROR_TITLE,help:l.default.Messages.UNABLE_TO_PROCESS_IMAGE})};return t}var n=t.prototype;n.componentDidMount=function(){
this._isMounted=!0};n.activateUploadDialogue=function(){var e;null===(e=this._ref.current)||void 0===e||e.activateUploadDialogue()};n.render=function(){var e=this.props,t=e.multiple,n=e.disabled,o=e.className,a=e.tabIndex,l=e["aria-label"],u=e.filters;return r.createElement(i.default,{ref:this._ref,onChange:this.handleFileChange,filters:null!=u?u:f(),multiple:t,disabled:n,className:o,tabIndex:a,"aria-label":l})};return t}(r.PureComponent);v.displayName="ImageInput";v.defaultProps={multiple:!0,tabIndex:-1,maxFileSizeBytes:1/0};var y=v;t.default=y},33989:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.RegistrationSteps=t.FlowType=t.CreateGuildSteps=t.ClaimAccountSteps=t.AgeGateSteps=void 0;var n,r,i,o,a;t.FlowType=n;!function(e){e.UNKNOWN="unknown";e.ANY="any";e.INVITE="invite";e.ORGANIC="organic_registration";e.ORGANIC_MARKETING="organic_marketing";e.ORGANIC_GUILD_TEMPLATES="organic_guild_template";e.CREATE_GUILD="create_guild"}(n||(t.FlowType=n={}))
;t.AgeGateSteps=r;!function(e){e.AGE_GATE="age_gate";e.AGE_GATE_UNDERAGE="age_gate_underage"}(r||(t.AgeGateSteps=r={}));t.ClaimAccountSteps=i;!function(e){e.CLAIM_ACCOUNT="claim_account";e.CLAIM_ACCOUNT_SUCCESS="claim_account_success"}(i||(t.ClaimAccountSteps=i={}));t.CreateGuildSteps=o;!function(e){e.GUILD_TEMPLATES="guild_templates";e.GUILD_CREATE="guild_create";e.CREATION_INTENT="creation_intent";e.CHANNEL_PROMPT="channel_prompt";e.JOIN_GUILD="join_guild";e.SUCCESS="create_success"}(o||(t.CreateGuildSteps=o={}));t.RegistrationSteps=a;!function(e){e.NUF_STARTED="nuf_started";e.AGE_GATE="age_gate";e.NUF_COMPLETE="nuf_complete";e.HUB_CONNECTION="hub_connection"}(a||(t.RegistrationSteps=a={}))},885986:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r=c(n(219548)),i=c(n(972247)),o=c(n(791548)),a=c(n(308920)),l=n(33989),u=n(770348),s=["version"];function c(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=function(e,t){
if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function d(){d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return d.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++){n=o[r];t.indexOf(n)>=0||(i[n]=e[n])}return i}var v="UserFlowAnalyticsStore_current",y="UserFlowAnalyticsStore";new o.default("UserFlowAnalytics");function m(e){if(e===l.FlowType.UNKNOWN)return null;var t=i.default.get(y+"-"+e);if(null==t)return null;var n=t.version,r=p(t,s);return 1!==n?null:r}var h=(0,r.default)((function(e,t){return{flows:{},currentFlow:null,activeFlow:function(){
var e,n=null!==(e=t().currentFlow)&&void 0!==e?e:i.default.get(v);if(null==n)return null;var r=t().flows[n],o=null!=r?r:m(n);return null!=(null==o?void 0:o.currentStep)?n:null}}}));h.subscribe((function(e){var t;if(null!=e){!function(e){if(e.type!==l.FlowType.UNKNOWN){var t=y+"-"+e.type;if(e.ended){i.default.remove(t);i.default.remove(v)}else{i.default.set(y+"-"+e.type,d({},e,{version:1}));i.default.set(v,e.type)}}}(e);a.default.track(u.AnalyticEvents.NUO_TRANSITION,{flow_type:e.type,from_step:e.lastStep,to_step:e.currentStep,seconds_on_from_step:"function"!=typeof(null===(t=e.lastTimestamp)||void 0===t?void 0:t.getTime)?0:(e.currentTimestamp.getTime()-e.lastTimestamp.getTime())/1e3},{flush:!0});if(e.ended){var n=d({},h.getState().flows);delete n[e.type];h.setState({flows:n,currentFlow:null})}}}),(function(e){return null!=e.currentFlow?e.flows[e.currentFlow]:void 0}));function _(e,t){var n,r=h.getState().flows,i=r[e],o=p(r,[e].map(f)),a=null!=i?i:m(e)
;if(null!=(null==a?void 0:a.currentStep)){if(a.currentStep===t)return;0}h.setState({flows:d({},o,(n={},n[e]={type:e,lastStep:null,lastTimestamp:null,currentStep:t,currentTimestamp:new Date,skipped:!1},n)),currentFlow:e})}function b(e,t,n){var r;void 0===n&&(n=!1);var i=e;if(e===l.FlowType.ANY){var o;i=null!==(o=h.getState().activeFlow())&&void 0!==o?o:l.FlowType.UNKNOWN}var a=h.getState().flows,u=a[i],s=p(a,[i].map(f)),c=null!=u?u:m(i);null!=c&&null!=c.currentStep&&c.currentStep!==t&&h.setState({flows:d({},s,(r={},r[i]=d({},c,{lastStep:c.currentStep,lastTimestamp:c.currentTimestamp,currentStep:t,currentTimestamp:new Date,ended:n}),r)),currentFlow:i})}function g(){return null!=h.getState().activeFlow()}var S={flowStart:_,flowStepOrStart:function(e,t){g()?b(e,t):_(e,t)},flowStep:b,hasActiveFlow:g};t.default=S},477537:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Slide=function(e){return null};t.Slides=S;t.springConfig=void 0;var r,i=function(e,t){
if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}(n(667294)),o=n(248088),a=n(47354),l=n(171236),u=y(n(345034)),s=n(836233),c=y(n(37039)),f=y(n(888558)),d=y(n(942575)),p=y(n(170823)),v=["contentDisplay"];function y(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function h(e,t,n,i){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=i;else if(a>1){
for(var l=new Array(a),u=0;u<a;u++)l[u]=arguments[u+3];t.children=l}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function _(){_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return _.apply(this,arguments)}var b={mass:1,tension:300,friction:28,clamp:!0};t.springConfig=b;function g(e,t){return function(n){if(0===n)return"auto";var r="forwards"===t.current,i=n>0,o=!1;i&&r&&"left"===e&&(o=!0);i&&!r&&"right"===e&&(o=!0);!i&&r&&"right"===e&&(o=!0);i||r||"left"!==e||(o=!0);return o?100*Math.abs(n)+"%":"auto"}}function S(e){var t,n=e.contentDisplay,r=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++){n=o[r];t.indexOf(n)>=0||(i[n]=e[n])}return i}(e,v),y={},m=(0,c.default)().analyticsLocations;i.Children.forEach(r.children,(function(e,t){
y[e.props.id]={children:e.props.children,impressionName:e.props.impressionName,impressionProperties:e.props.impressionProperties,index:t}}));var S,O,T=r.activeSlide,C=(0,u.default)(r.activeSlide),w=(S=null!=C?y[C]:null,O=y[T],null==S?null:S.index>O.index?"backwards":S.index<O.index?"forwards":null),I=i.useContext(s.AccessibilityPreferencesContext).reducedMotion,E=i.useContext(f.default),N=y[T].impressionName,M=_({},y[T].impressionProperties,{location_stack:m});E({type:a.ImpressionTypes.MODAL,name:N,properties:M,_stackContext:{isSlide:!0}});var A=i.useRef(null),D=(0,p.default)(A,!0,[T]),P=_({},b,{},r.springConfig,{},I.enabled?{clamp:!0}:null),G=(0,o.useSpring)({immediate:null==C||null!=D&&D.observed,width:null!==(t=r.width)&&void 0!==t?t:null!=D?D.width:0,height:null!=D?D.height:0,config:P}),k=(0,o.useTransition)(T,{immediate:null==C,value:0,from:{value:1},enter:{value:0},leave:{value:-1},config:P,onRest:function(e,t){var n=t.item;n===T&&null!=r.onSlideReady&&r.onSlideReady(n)}}),R=(0,
d.default)(w),j=r.width,L=r.centered,U=void 0===L||L,F=l.isMobile?"100%":G.width.to((function(e){return Math.round(e)})),x=l.isMobile?"100%":G.height.to((function(e){return Math.round(e)})),W=l.isMobile?{}:U?{transform:"translate3d(0, -50%, 0) scale(1.0, 1.0)",top:"50%"}:{transform:"scale(1.0, 1.0)"},B=l.isMobile?{}:{overflow:"hidden"};return h(o.animated.div,{style:_({position:"relative",width:F,height:x},B)},void 0,k((function(e,t,r){var a=r.key;return i.createElement(o.animated.div,{ref:t===T?A:null,key:a,style:_({position:"absolute",display:n,flexDirection:"column",backfaceVisibility:"hidden",width:l.isMobile?"100%":j},W,{},I.enabled?{opacity:e.value.to((function(e){return 1-Math.abs(e)}))}:{left:e.value.to(g("left",R)),right:e.value.to(g("right",R))})},y[t].children)})))}S.displayName="Slides"},170823:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,n){var r=(p=(0,i.useState)(null),v=2,function(e){if(Array.isArray(e))return e
}(p)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0){o.push(r.value);if(t&&o.length===t)break}}catch(e){l=!0;i=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(p,v)||a(p,v)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=r[0],f=r[1],d=(0,i.useRef)(null);var p,v;function y(e){f((function(t){return null!==t&&s(t,e)?t:e}))}(0,i.useLayoutEffect)((function(){!function(e,t){requestAnimationFrame((function(){null!=e.current&&t(e.current.getBoundingClientRect())}))}(e,(function(e){y(u(e,!1))}));if(t&&null!=e.current){var n=e.current;d.current=(0,o.default)(e.current,(function(t){e.current===n&&y(u(t,!0))}));d.current.observe()}return function(){d.current&&d.current.unobserve()}
}),[e.current,t].concat(function(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n)));return c};t.isSameSize=s;var r,i=n(667294),o=(r=n(751826))&&r.__esModule?r:{default:r};function a(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);return"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){return{width:e.width,height:e.height,observed:t}}function s(e,t){return e.width===t.width&&e.height===t.height}},
589843:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var r,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e;n&&n.set(e,r);return r}(n(667294));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function a(e,t,n,i){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=i;else if(a>1){for(var l=new Array(a),u=0;u<a;u++)l[u]=arguments[u+3];t.children=l}
if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function l(e,t){l=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return l(e,t)}var u="file-input",s=function(e){return{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0,cursor:e?"not-allowed":"pointer",fontSize:0}},c=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;l(e,t)}(t,e);function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];(t=e.call.apply(e,[this].concat(r))||this)._input=null;t.activateUploadDialogue=function(){t.props.embedded?t.handleNativeClick():t._input&&t._input.click()};t.handleNativeClick=function(){t.props.handleNativeClick&&t.props.handleNativeClick(t.props)};t.handleNativeKeyDown=function(e){" "!==e.key&&"Enter"!==e.key||t.handleNativeClick()};t.handleBrowserInputMouseDown=function(e){e.currentTarget.value=null}
;return t}t.prototype.render=function(){var e=this,t=this.props,n=t.disabled,r=t.tabIndex,o=t.className,l=t.name,c=t["aria-label"],f=t["aria-hidden"];if(this.props.embedded)return a("div",{role:"button",style:s(n),className:o||u,tabIndex:r,onKeyDown:n?void 0:this.handleNativeKeyDown,onClick:n?void 0:this.handleNativeClick,"aria-disabled":n,"aria-label":c,"aria-hidden":f||void 0});var d="";this.props.filters&&(d=this.props.filters.map((function(e){return e.extensions.map((function(e){return"."+e})).join(",")})).join(","));return i.createElement("input",{style:s(n),className:o||u,disabled:n,type:"file",tabIndex:r,onMouseDown:this.handleBrowserInputMouseDown,onChange:this.props.onChange,multiple:this.props.multiple,accept:d,name:l,"aria-label":c,"aria-hidden":f||void 0,ref:function(t){return e._input=t}})};return t}(i.Component);c.displayName="FileInput";c.defaultProps={multiple:!1,disabled:!1,tabIndex:0};var f=c;t.default=f},489893:(e,t,n)=>{
e.exports=n.p+"dea5252276408a8bfca6dda585ca5216.svg"},794649:(e,t,n)=>{e.exports=n.p+"d759f3acc6286c964cc8118d7f68b374.svg"}}]);
//# sourceMappingURL=29bdaf1435f49da26008.js.map