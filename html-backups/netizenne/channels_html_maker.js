const fs = require('fs');

// Array of embedlink variables
const embedlinks = [

  "Niche Interests org - front lounge - front-lounge [1079953597749547119].html_Files.html",
  "Niche Interests org - Text Channels - anime-girls [966547403262033980].html_Files.html",
  "Niche Interests org - Text Channels - cognito-hazard-chat [1113966241183453304].html_Files.html",
  "Niche Interests org - Text Channels - crossroads [1123022608334585858].html_Files.html",
  "Niche Interests org - Text Channels - intangible-talk [966531136694157314].html_Files.html",
  "Niche Interests org - Text Channels - language-and-literature [1133341695753343037].html_Files.html",
  "Niche Interests org - Text Channels - music [966548494980620328].html_Files.html",
  "Niche Interests org - Text Channels - news-politics-history [966547850215436358].html_Files.html",
  "Niche Interests org - Text Channels - oc-art [966547480038768672].html_Files.html",
  "Niche Interests org - Text Channels - occult-inquires [987954368244510790].html_Files.html",
  "Niche Interests org - Text Channels - pharmacology-psychology-ecology [1007379977269952653].html_Files.html",
  "Niche Interests org - Text Channels - vr [1038693959511322635].html_Files.html"
];


// Loop through the embedlinks array and create a file for each link
embedlinks.forEach((embedlink, index) => {
  const filename = `${embedlink}`; // Generate a unique filename for each file
  const fileContent = `
<link rel="stylesheet" href="g.css"><script type="text/javascript" src="g.js"></script>

<html lang="en-US" style="font-size: 100%; --saturation-factor: 1; --devtools-sidebar-width: 0px;" class="full-motion disable-forced-colors theme-dark platform-web font-size-16" data-rh="lang,style,class">

<head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=3.0" name="viewport">

<!-- section:seometa -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Discord">
<meta property="og:title" content="Discord - A New Way to Chat with Friends &amp; Communities">
<meta property="og:description" content="Discord is the easiest way to communicate over voice, video, and text.  Chat, hang out, and stay close with your friends and communities.">
<meta property="og:image" content="undefined//discord.com/assets/652f40427e1f5186ad54836074898279.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@discord">
<meta name="twitter:creator" content="@discord">
<!-- endsection -->
<!-- section:title -->
<title>casual</title>
<!-- endsection -->
<style>
body {
font-size: 16px;
}
</style>
<style>
/*! CSS Used from: https://discord.com/assets/40532.ccb3502fc312f3ad1aac.css */
.desaturate-_Twf3u,
[data-accessibility*=desaturate] {
-webkit-filter: saturate(var(--saturation-factor, 1));
filter: saturate(var(--saturation-factor, 1));
}

.theme-dark {
--brightness: calc(1.5 - var(--saturation-factor, 1)*0.5);
--contrast: var(--saturation-factor, 1);
}

.button-f2h6uQ {
position: relative;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-sizing: border-box;
box-sizing: border-box;
background: none;
border: none;
border-radius: 3px;
font-size: 14px;
font-weight: 500;
line-height: 16px;
padding: 2px 16px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.button-f2h6uQ:disabled {
cursor: not-allowed;
opacity: .5;
}

.lookBlank-21BCro {
background: transparent;
color: currentColor;
border: 0;
padding: 0;
margin: 0;
}

.grow-2sR_-F {
width: auto;
}

.flex-3BkGQD {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
}

.alignStretch-Uwowzr {
-webkit-box-align: stretch;
-ms-flex-align: stretch;
align-items: stretch;
}

.justifyStart-2Mwniq {
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
}

.noWrap-hBpHBz {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
}

.directionRow-2Iu2A9 {
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
}

.scrollerBase-_bVAAt {
position: relative;
-webkit-box-sizing: border-box;
box-sizing: border-box;
min-height: 0;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
}

.thin-31rlnD {
scrollbar-width: thin;
}

.thin-31rlnD,
.thin-31rlnD.fade-1R6FHN:hover {
scrollbar-color: var(--scrollbar-thin-thumb) var(--scrollbar-thin-track);
}

.thin-31rlnD::-webkit-scrollbar {
width: 8px;
height: 8px;
}

.thin-31rlnD::-webkit-scrollbar-track {
border-color: var(--scrollbar-thin-track);
background-color: var(--scrollbar-thin-track);
border: 2px solid var(--scrollbar-thin-track);
}

.thin-31rlnD::-webkit-scrollbar-thumb {
background-clip: padding-box;
border: 2px solid transparent;
border-radius: 4px;
background-color: var(--scrollbar-thin-thumb);
min-height: 40px;
}

.thin-31rlnD::-webkit-scrollbar-corner {
background-color: transparent;
}

.auto-2K3UW5 {
scrollbar-width: auto;
}

.auto-2K3UW5 {
scrollbar-color: var(--scrollbar-auto-scrollbar-color-thumb) var(--scrollbar-auto-scrollbar-color-track);
}

.auto-2K3UW5::-webkit-scrollbar {
width: 16px;
height: 16px;
}

.auto-2K3UW5::-webkit-scrollbar-track {
background-color: var(--scrollbar-auto-track);
}

.auto-2K3UW5::-webkit-scrollbar-thumb,
.auto-2K3UW5::-webkit-scrollbar-track {
border: 4px solid transparent;
background-clip: padding-box;
border-radius: 8px;
}

.auto-2K3UW5::-webkit-scrollbar-thumb {
background-color: var(--scrollbar-auto-thumb);
min-height: 40px;
}

.auto-2K3UW5::-webkit-scrollbar-corner {
background-color: transparent;
}

.none-2-_0dP {
scrollbar-width: none;
}

.none-2-_0dP::-webkit-scrollbar {
width: 0;
height: 0;
}

.fade-1R6FHN {
scrollbar-color: transparent transparent;
}

.fade-1R6FHN::-webkit-scrollbar-thumb,
.fade-1R6FHN::-webkit-scrollbar-track {
visibility: hidden;
}

.fade-1R6FHN:hover::-webkit-scrollbar-thumb,
.fade-1R6FHN:hover::-webkit-scrollbar-track {
visibility: visible;
}

.content-2a4AW9 {
position: relative;
}

.disableScrollAnchor-6TwzvM {
overflow-anchor: none;
}

.managedReactiveScroller-1lEEh3 {
overflow-y: scroll;
overflow-x: hidden;
}

.defaultColor-24IHKz {
color: var(--text-normal);
}

.heading-xxl-medium-1hl0GL {
font-family: var(--font-display);
font-size: 34px;
line-height: 40px;
}

.heading-xxl-medium-1hl0GL {
font-weight: 500;
}

.text-xs-normal-3SiVjE {
font-weight: 400;
}

.text-xs-normal-3SiVjE {
font-family: var(--font-primary);
font-size: 12px;
line-height: 16px;
}

.text-sm-normal-3Zj3Iv {
font-weight: 400;
}

.text-sm-normal-3Zj3Iv {
font-family: var(--font-primary);
font-size: 14px;
line-height: 18px;
}

.size16-CysEuG {
font-size: 16px;
line-height: 20px;
}

.layerContainer-2v_Sit {
position: absolute;
top: 0;
left: 0;
right: var(--devtools-sidebar-width, 0);
bottom: 0;
background: none !important;
pointer-events: none;
z-index: 1002;
}

.defaultColor-HXu-5n {
color: var(--header-primary);
}

.hiddenVisually-2ydA7k {
clip: rect(0 0 0 0);
-webkit-clip-path: inset(50%);
clip-path: inset(50%);
height: 1px;
overflow: hidden;
position: absolute;
white-space: nowrap;
width: 1px;
}

.arrow-2HswgU {
-webkit-transition: -webkit-transform .2s ease-out;
transition: -webkit-transform .2s ease-out;
transition: transform .2s ease-out;
transition: transform .2s ease-out, -webkit-transform .2s ease-out;
}

.botTag-7aX5WZ {
font-size: .625rem;
text-transform: uppercase;
vertical-align: top;
display: -webkit-inline-box;
display: -ms-inline-flexbox;
display: inline-flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-ms-flex-negative: 0;
flex-shrink: 0;
text-indent: 0;
}

.px-MnE_OR.botTag-7aX5WZ {
height: 15px;
padding: 0 4px;
margin-top: 1px;
border-radius: 3px;
}

.rem-3kT9wc.botTag-7aX5WZ {
height: .9375rem;
padding: 0 .275rem;
margin-top: .075em;
border-radius: .1875rem;
}

.botTagRegular-kpctgU {
background: var(--brand-experiment);
color: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
}

.botTagVerified-2KCPMa {
display: inline-block;
}

.px-MnE_OR .botTagVerified-2KCPMa {
width: 15px;
height: 15px;
margin-left: -4px;
}

.rem-3kT9wc .botTagVerified-2KCPMa {
width: .9375rem;
height: .9375rem;
margin-left: -.25rem;
}

.botText-1fD6Qk {
position: relative;
font-weight: 500;
vertical-align: top;
}

.px-MnE_OR .botText-1fD6Qk {
font-size: 10px;
line-height: 15px;
}

.rem-3kT9wc .botText-1fD6Qk {
line-height: .9375rem;
}

.wrapper-1VLyxH {
position: relative;
border-radius: 50%;
}

.mask-1FEkla {
pointer-events: none;
position: relative;
display: block;
height: 100%;
width: auto;
}

.svg-2azL_l {
position: absolute;
}

.cursorDefault--wfhy5 {
cursor: default;
}

.avatarStack-3vfSFa {
display: grid;
width: 100%;
height: 100%;
}

.avatar-b5OQ1N {
width: 100%;
height: 100%;
grid-area: 1/1;
}

.avatar-b5OQ1N {
display: block;
-o-object-fit: cover;
object-fit: cover;
pointer-events: none;
}

.avatar-b5OQ1N:before {
content: "";
display: block;
width: 100%;
height: 100%;
background-color: var(--background-modifier-accent);
}

.pointerEvents-9SZWKj {
pointer-events: auto;
}

.anchor-1MIwyf {
color: var(--text-link);
text-decoration: none;
}

.anchorUnderlineOnHover-2qPutX:hover {
text-decoration: underline;
}

html {
--brand-experiment-100: hsl(240, calc(var(--saturation-factor, 1)*77.8%), 98.2%);
--brand-experiment-130: hsl(236, calc(var(--saturation-factor, 1)*87.5%), 96.9%);
--brand-experiment-160: hsl(235, calc(var(--saturation-factor, 1)*84.6%), 94.9%);
--brand-experiment-200: hsl(236, calc(var(--saturation-factor, 1)*83.3%), 92.9%);
--brand-experiment-230: hsl(236, calc(var(--saturation-factor, 1)*87%), 91%);
--brand-experiment-260: hsl(235, calc(var(--saturation-factor, 1)*86.2%), 88.6%);
--brand-experiment-300: hsl(235, calc(var(--saturation-factor, 1)*86.1%), 85.9%);
--brand-experiment-330: hsl(235, calc(var(--saturation-factor, 1)*85.1%), 81.6%);
--brand-experiment-360: hsl(235, calc(var(--saturation-factor, 1)*86.1%), 77.5%);
--brand-experiment-400: hsl(235, calc(var(--saturation-factor, 1)*86.1%), 71.8%);
--brand-experiment-430: hsl(235, calc(var(--saturation-factor, 1)*85.7%), 69.8%);
--brand-experiment-460: hsl(235, calc(var(--saturation-factor, 1)*85.5%), 67.5%);
--brand-experiment: hsl(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%);
--brand-experiment-500: hsl(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%);
--brand-experiment-530: hsl(235, calc(var(--saturation-factor, 1)*66.7%), 58.8%);
--brand-experiment-560: hsl(235, calc(var(--saturation-factor, 1)*51.4%), 52.4%);
--brand-experiment-600: hsl(235, calc(var(--saturation-factor, 1)*46.7%), 44.1%);
--brand-experiment-630: hsl(235, calc(var(--saturation-factor, 1)*46.7%), 38.2%);
--brand-experiment-660: hsl(235, calc(var(--saturation-factor, 1)*47.1%), 33.3%);
--brand-experiment-700: hsl(235, calc(var(--saturation-factor, 1)*47%), 25.9%);
--brand-experiment-730: hsl(235, calc(var(--saturation-factor, 1)*46.8%), 24.3%);
--brand-experiment-760: hsl(234, calc(var(--saturation-factor, 1)*46.9%), 22.2%);
--brand-experiment-800: hsl(235, calc(var(--saturation-factor, 1)*47.5%), 19.4%);
--brand-experiment-830: hsl(235, calc(var(--saturation-factor, 1)*47.4%), 14.9%);
--brand-experiment-860: hsl(235, calc(var(--saturation-factor, 1)*46.9%), 9.6%);
--brand-experiment-900: hsl(233, calc(var(--saturation-factor, 1)*50%), 3.1%);
--brand-experiment-05a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.05);
--brand-experiment-10a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.1);
--brand-experiment-15a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.15);
--brand-experiment-20a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.2);
--brand-experiment-25a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.25);
--brand-experiment-30a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.3);
--brand-experiment-35a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.35);
--brand-experiment-40a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.4);
--brand-experiment-45a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.45);
--brand-experiment-50a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.5);
--brand-experiment-55a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.55);
--brand-experiment-60a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.6);
--brand-experiment-65a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.65);
--brand-experiment-70a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.7);
--brand-experiment-75a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.75);
--brand-experiment-80a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.8);
--brand-experiment-85a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.85);
--brand-experiment-90a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.9);
--brand-experiment-95a: hsla(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%, 0.95);
}

html.disable-forced-colors * {
forced-color-adjust: none;
}

.containerTop-xFczB0 {
top: 36px;
}

.containerTop-xFczB0 {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
z-index: 4999;
position: fixed;
left: 50%;
-webkit-transform: translateX(-50%);
transform: translateX(-50%);
}

.emoji {
-o-object-fit: contain;
object-fit: contain;
width: 1.375em;
height: 1.375em;
vertical-align: bottom;
}

.emoji.jumboable {
width: 3rem;
height: 3rem;
min-height: 3rem;
}

.appDevToolsWrapper-1QxdQf {
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
min-height: 0;
}

.notDevTools-1zkgfK {
-webkit-box-flex: 1;
-ms-flex: 1;
flex: 1;
min-width: 0;
}

.app-3xd6d0 {
position: relative;
}

.app-3xd6d0 {
z-index: auto;
height: 100%;
}

.app-2CXKsg {
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: var(--background-tertiary);
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
}

.app-2CXKsg button {
cursor: pointer;
}

.layers-1YQhyW {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
overflow: hidden;
min-width: 0;
min-height: 0;
}

a,
body,
div,
form,
h1,
h2,
h3,
html,
img,
li,
ol,
p,
pre,
span,
strong,
ul {
margin: 0;
padding: 0;
border: 0;
font-weight: inherit;
font-style: inherit;
font-family: inherit;
font-size: 100%;
vertical-align: baseline;
}

a {
color: var(--text-link);
text-decoration: none;
cursor: pointer;
}

body {
line-height: 1;
margin: 0;
padding: 0;
font-family: var(--font-primary);
overflow: hidden;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background: transparent;
}

p {
margin: 14px 0;
}

ol,
ul {
list-style: none;
}

::-webkit-input-placeholder,
input {
font-family: var(--font-primary);
font-weight: 400;
}

::-moz-placeholder,
input {
font-family: var(--font-primary);
font-weight: 400;
}

:-ms-input-placeholder,
input {
font-family: var(--font-primary);
font-weight: 400;
}

::placeholder,
input {
font-family: var(--font-primary);
font-weight: 400;
}

strong {
font-weight: 600;
}

button {
font-family: var(--font-primary);
font-weight: 500;
border: 0;
cursor: pointer;
}

:root {
--decoration-to-avatar-ratio: 1.2;
}

.theme-dark {
--guild-header-text-shadow: 0 1px 1px hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, 0.4);
--elevation-stroke: 0 0 0 1px hsla(240, calc(var(--saturation-factor, 1)*11.1%), 1.8%, 0.15);
--elevation-low: 0 1px 0 hsla(240, calc(var(--saturation-factor, 1)*11.1%), 1.8%, 0.2), 0 1.5px 0 hsla(240, calc(var(--saturation-factor, 1)*7.7%), 2.5%, 0.05), 0 2px 0 hsla(240, calc(var(--saturation-factor, 1)*11.1%), 1.8%, 0.05);
--elevation-medium: 0 4px 4px hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, 0.16);
--elevation-high: 0 8px 16px hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, 0.24);
}

.theme-dark {
--header-primary: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--header-secondary: hsl(216, calc(var(--saturation-factor, 1)*3.7%), 73.5%);
--text-normal: hsl(210, calc(var(--saturation-factor, 1)*2.9%), 86.7%);
--text-muted: hsl(214, calc(var(--saturation-factor, 1)*4%), 65.3%);
--text-link: hsl(197, calc(var(--saturation-factor, 1)*100%), 47.8%);
--text-link-low-saturation: hsl(197, calc(var(--saturation-factor, 1)*100%), 52.9%);
--text-positive: hsl(139, calc(var(--saturation-factor, 1)*51.6%), 52.2%);
--text-warning: hsl(38, calc(var(--saturation-factor, 1)*95.7%), 54.1%);
--text-danger: hsl(359, calc(var(--saturation-factor, 1)*82%), 73.9%);
--text-brand: hsl(235, calc(var(--saturation-factor, 1)*86.1%), 77.5%);
--interactive-normal: hsl(216, calc(var(--saturation-factor, 1)*3.7%), 73.5%);
--interactive-hover: hsl(210, calc(var(--saturation-factor, 1)*2.9%), 86.7%);
--interactive-active: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--interactive-muted: hsl(217, calc(var(--saturation-factor, 1)*7.6%), 33.5%);
--background-primary: hsl(220, calc(var(--saturation-factor, 1)*7.7%), 22.9%);
--background-secondary: hsl(223, calc(var(--saturation-factor, 1)*6.9%), 19.8%);
--background-secondary-alt: hsl(220, calc(var(--saturation-factor, 1)*6.8%), 17.3%);
--background-tertiary: hsl(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%);
--background-accent: hsl(217, calc(var(--saturation-factor, 1)*7.6%), 33.5%);
--background-floating: hsl(225, calc(var(--saturation-factor, 1)*7.7%), 10.2%);
--background-nested-floating: hsl(223, calc(var(--saturation-factor, 1)*6.9%), 19.8%);
--background-mobile-primary: hsl(220, calc(var(--saturation-factor, 1)*7.7%), 22.9%);
--background-mobile-secondary: hsl(223, calc(var(--saturation-factor, 1)*6.9%), 19.8%);
--chat-background: hsl(220, calc(var(--saturation-factor, 1)*7.7%), 22.9%);
--chat-border: hsl(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%);
--chat-input-container-background: hsl(220, calc(var(--saturation-factor, 1)*7.7%), 22.9%);
--background-modifier-hover: hsla(217, calc(var(--saturation-factor, 1)*7.6%), 33.5%, 0.4);
--background-modifier-active: hsla(217, calc(var(--saturation-factor, 1)*7.6%), 33.5%, 0.48);
--background-modifier-selected: hsla(217, calc(var(--saturation-factor, 1)*7.6%), 33.5%, 0.6);
--background-modifier-accent: hsla(217, calc(var(--saturation-factor, 1)*7.6%), 33.5%, 0.48);
--info-positive-background: hsla(139, calc(var(--saturation-factor, 1)*47.3%), 43.9%, 0.1);
--info-positive-foreground: hsl(139, calc(var(--saturation-factor, 1)*47.3%), 43.9%);
--info-positive-text: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--info-warning-background: hsla(38, calc(var(--saturation-factor, 1)*95.7%), 54.1%, 0.1);
--info-warning-foreground: hsl(38, calc(var(--saturation-factor, 1)*95.7%), 54.1%);
--info-warning-text: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--info-danger-background: hsla(359, calc(var(--saturation-factor, 1)*82.6%), 59.4%, 0.1);
--info-danger-foreground: hsl(359, calc(var(--saturation-factor, 1)*82.6%), 59.4%);
--info-danger-text: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--info-help-background: hsla(197, calc(var(--saturation-factor, 1)*100%), 47.8%, 0.1);
--info-help-foreground: hsl(197, calc(var(--saturation-factor, 1)*100%), 47.8%);
--info-help-text: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--status-positive-background: hsl(139, calc(var(--saturation-factor, 1)*47.1%), 33.3%);
--status-positive-text: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--status-warning-background: hsl(38, calc(var(--saturation-factor, 1)*95.7%), 54.1%);
--status-warning-text: hsl(0, calc(var(--saturation-factor, 1)*0%), 0%);
--status-danger-background: hsl(359, calc(var(--saturation-factor, 1)*82.6%), 59.4%);
--status-danger-text: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--status-danger: hsl(359, calc(var(--saturation-factor, 1)*82.6%), 59.4%);
--status-positive: hsl(139, calc(var(--saturation-factor, 1)*47.3%), 43.9%);
--status-warning: hsl(38, calc(var(--saturation-factor, 1)*95.7%), 54.1%);
--button-danger-background: hsl(359, calc(var(--saturation-factor, 1)*66.7%), 54.1%);
--button-danger-background-hover: hsl(359, calc(var(--saturation-factor, 1)*56.3%), 40.4%);
--button-danger-background-active: hsl(359, calc(var(--saturation-factor, 1)*56.4%), 35.1%);
--button-danger-background-disabled: hsl(359, calc(var(--saturation-factor, 1)*66.7%), 54.1%);
--button-positive-background: hsl(139, calc(var(--saturation-factor, 1)*47.1%), 33.3%);
--button-positive-background-hover: hsl(138, calc(var(--saturation-factor, 1)*46.8%), 24.3%);
--button-positive-background-active: hsl(138, calc(var(--saturation-factor, 1)*46.9%), 22.2%);
--button-positive-background-disabled: hsl(139, calc(var(--saturation-factor, 1)*47.1%), 33.3%);
--button-secondary-background: hsl(217, calc(var(--saturation-factor, 1)*7.6%), 33.5%);
--button-secondary-background-hover: hsl(213, calc(var(--saturation-factor, 1)*5%), 42.9%);
--button-secondary-background-active: hsl(218, calc(var(--saturation-factor, 1)*4.6%), 46.9%);
--button-secondary-background-disabled: hsl(217, calc(var(--saturation-factor, 1)*7.6%), 33.5%);
--button-outline-danger-text: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--button-outline-danger-border: hsl(359, calc(var(--saturation-factor, 1)*82.6%), 59.4%);
--button-outline-danger-background: hsla(0, calc(var(--saturation-factor, 1)*0%), 100%, 0);
--button-outline-danger-background-hover: hsl(359, calc(var(--saturation-factor, 1)*66.7%), 54.1%);
--button-outline-danger-text-hover: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--button-outline-danger-border-hover: hsl(359, calc(var(--saturation-factor, 1)*66.7%), 54.1%);
--button-outline-danger-background-active: hsl(359, calc(var(--saturation-factor, 1)*56.7%), 48%);
--button-outline-danger-text-active: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--button-outline-danger-border-active: hsl(359, calc(var(--saturation-factor, 1)*66.7%), 54.1%);
--button-outline-positive-text: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--button-outline-positive-border: hsl(139, calc(var(--saturation-factor, 1)*47.3%), 43.9%);
--button-outline-positive-background: hsla(0, calc(var(--saturation-factor, 1)*0%), 100%, 0);
--button-outline-positive-background-hover: hsl(139, calc(var(--saturation-factor, 1)*47.1%), 33.3%);
--button-outline-positive-text-hover: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--button-outline-positive-border-hover: hsl(139, calc(var(--saturation-factor, 1)*47.1%), 33.3%);
--button-outline-positive-background-active: hsl(138, calc(var(--saturation-factor, 1)*46.8%), 24.3%);
--button-outline-positive-text-active: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--button-outline-positive-border-active: hsl(138, calc(var(--saturation-factor, 1)*46.8%), 24.3%);
--button-outline-brand-text: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--button-outline-brand-border: hsl(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%);
--button-outline-brand-background: hsla(0, calc(var(--saturation-factor, 1)*0%), 100%, 0);
--button-outline-brand-background-hover: hsl(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%);
--button-outline-brand-text-hover: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--button-outline-brand-border-hover: hsl(235, calc(var(--saturation-factor, 1)*85.6%), 64.7%);
--button-outline-brand-background-active: hsl(235, calc(var(--saturation-factor, 1)*51.4%), 52.4%);
--button-outline-brand-text-active: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--button-outline-brand-border-active: hsl(235, calc(var(--saturation-factor, 1)*51.4%), 52.4%);
--button-outline-primary-text: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--button-outline-primary-border: hsl(217, calc(var(--saturation-factor, 1)*7.6%), 33.5%);
--button-outline-primary-background: hsla(0, calc(var(--saturation-factor, 1)*0%), 100%, 0);
--button-outline-primary-background-hover: hsl(217, calc(var(--saturation-factor, 1)*7.6%), 33.5%);
--button-outline-primary-text-hover: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--button-outline-primary-border-hover: hsl(217, calc(var(--saturation-factor, 1)*7.6%), 33.5%);
--button-outline-primary-background-active: hsl(213, calc(var(--saturation-factor, 1)*5%), 42.9%);
--button-outline-primary-text-active: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--button-outline-primary-border-active: hsl(213, calc(var(--saturation-factor, 1)*5%), 42.9%);
--modal-background: hsl(220, calc(var(--saturation-factor, 1)*7.7%), 22.9%);
--modal-footer-background: hsl(223, calc(var(--saturation-factor, 1)*6.9%), 19.8%);
--scrollbar-thin-thumb: hsl(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%);
--scrollbar-thin-track: hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, 0);
--scrollbar-auto-thumb: hsl(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%);
--scrollbar-auto-track: hsl(210, calc(var(--saturation-factor, 1)*9.8%), 20%);
--scrollbar-auto-scrollbar-color-thumb: hsl(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%);
--scrollbar-auto-scrollbar-color-track: hsl(223, calc(var(--saturation-factor, 1)*6.9%), 19.8%);
--input-background: hsl(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%);
--input-placeholder-text: hsl(216, calc(var(--saturation-factor, 1)*2.1%), 53.9%);
--logo-primary: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
--control-brand-foreground: hsl(235, calc(var(--saturation-factor, 1)*86.1%), 77.5%);
--control-brand-foreground-new: hsl(235, calc(var(--saturation-factor, 1)*86.1%), 77.5%);
--background-mentioned: hsla(38, calc(var(--saturation-factor, 1)*95.7%), 54.1%, 0.1);
--background-mentioned-hover: hsla(38, calc(var(--saturation-factor, 1)*95.7%), 54.1%, 0.08);
--background-message-hover: hsla(240, calc(var(--saturation-factor, 1)*11.1%), 1.8%, 0.07);
--background-message-automod: hsla(359, calc(var(--saturation-factor, 1)*82.6%), 59.4%, 0.05);
--background-message-automod-hover: hsla(359, calc(var(--saturation-factor, 1)*82.6%), 59.4%, 0.1);
--background-message-highlight: hsla(235, calc(var(--saturation-factor, 1)*86.1%), 77.5%, 0.08);
--background-message-highlight-hover: hsla(235, calc(var(--saturation-factor, 1)*86.1%), 77.5%, 0.06);
--channels-default: hsl(223, calc(var(--saturation-factor, 1)*3.4%), 60.2%);
--channel-icon: hsl(213, calc(var(--saturation-factor, 1)*4.1%), 57.5%);
--channel-text-area-placeholder: hsl(218, calc(var(--saturation-factor, 1)*4.6%), 46.9%);
--channeltextarea-background: hsl(218, calc(var(--saturation-factor, 1)*7.9%), 27.3%);
--activity-card-background: hsl(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%);
--textbox-markdown-syntax: hsl(213, calc(var(--saturation-factor, 1)*4.1%), 57.5%);
--spoiler-revealed-background: hsl(220, calc(var(--saturation-factor, 1)*6.8%), 17.3%);
--spoiler-hidden-background: hsl(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%);
--android-navigation-bar-background: hsl(220, calc(var(--saturation-factor, 1)*7.7%), 7.6%);
--android-ripple: hsla(0, calc(var(--saturation-factor, 1)*0%), 100%, 0.07);
--deprecated-card-bg: hsla(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%, 0.6);
--deprecated-card-editable-bg: hsla(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%, 0.3);
--deprecated-store-bg: hsl(220, calc(var(--saturation-factor, 1)*7.7%), 22.9%);
--deprecated-quickswitcher-input-background: hsl(218, calc(var(--saturation-factor, 1)*4.6%), 46.9%);
--deprecated-quickswitcher-input-placeholder: hsla(0, calc(var(--saturation-factor, 1)*0%), 100%, 0.3);
--deprecated-text-input-bg: hsl(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%);
--deprecated-text-input-border: hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, 0.3);
--deprecated-text-input-border-hover: hsl(240, calc(var(--saturation-factor, 1)*11.1%), 1.8%);
--deprecated-text-input-border-disabled: hsl(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%);
--deprecated-text-input-prefix: hsl(210, calc(var(--saturation-factor, 1)*2.9%), 86.7%);
}

.theme-dark {
--focus-primary: hsl(197, calc(var(--saturation-factor, 1)*100%), 47.8%);
}

:root {
--font-primary: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-display: "ABC Ginto Normal", "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-headline: "ABC Ginto Nord", "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-code: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
--font-korean: Whitney, "Apple SD Gothic Neo", NanumBarunGothic, "\B9D1\C740   \ACE0\B515", "Malgun Gothic", Gulim, 굴림, Dotum, 돋움, "Helvetica Neue", Helvetica, Arial, sans-serif;
`+'--font-japanese: Whitney, "Hiragino Sans", "\30D2\30E9\30AE\30CE\89D2\30B4   ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, Osaka, "MS PGothic", "Helvetica Neue", Helvetica, Arial, sans-serif;'+`
--font-chinese-simplified: Whitney, "Microsoft YaHei New", "Microsoft Yahei", "Microsoft Yahei", "Microsoft JhengHei", 宋体, SimSun, "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-chinese-traditional: Whitney, "Microsoft JhengHei", 微軟正黑體, "Microsoft JhengHei UI", "Microsoft YaHei", 微軟雅黑, 宋体, SimSun, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.appMount-2yBXZl,
body,
html {
height: 100%;
width: 100%;
}

.appMount-2yBXZl {
position: absolute;
overflow: hidden;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
}

.appMount-2yBXZl,
body {
background-color: var(--background-tertiary);
text-rendering: optimizeLegibility;
}

::-webkit-input-placeholder,
body,
button,
input {
font-family: var(--font-primary);
text-rendering: optimizeLegibility;
}

::-moz-placeholder,
body,
button,
input {
font-family: var(--font-primary);
text-rendering: optimizeLegibility;
}

:-ms-input-placeholder,
body,
button,
input {
font-family: var(--font-primary);
text-rendering: optimizeLegibility;
}

::placeholder,
body,
button,
input {
font-family: var(--font-primary);
text-rendering: optimizeLegibility;
}

a,
button,
div,
input,
span,
strong {
outline: 0;
}

img[alt] {
text-indent: -9999px;
}

.icon-1zKOXL {
position: relative;
background-clip: padding-box;
background-color: none;
background-position: 50%;
background-size: 100% 100%;
}

.iconInactive-26M06U {
border-radius: 50%;
}

.iconSizeSmol-qsFaRK {
width: 16px;
height: 16px;
}

.overflow-1wOqNV {
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
position: relative;
}

.gifTag-1TvtGO {
background-image: url(https://discord.com/assets/e689380400b1f2d2c6320a823a1ab079.svg);
width: 29px;
height: 22px;
}

.imageWrapper-oMkQl4 {
display: block;
position: relative;
-webkit-user-select: text;
-moz-user-select: text;
-ms-user-select: text;
user-select: text;
overflow: hidden;
border-radius: 3px;
}

.clickableWrapper-2WTAkL {
width: 100%;
height: 100%;
}

.imageAccessory-2yA7Kb {
position: absolute;
top: 6px;
right: 6px;
z-index: 3;
}

.imageZoom-3yLCXY {
cursor: nesw-resize;
cursor: -webkit-zoom-in;
cursor: zoom-in;
}

.clickable-LksVCf {
cursor: pointer;
}

.originalLink-Azwuo9 {
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1;
}

.transition-30IQBn {
-webkit-transition: -webkit-transform .2s ease;
transition: -webkit-transform .2s ease;
transition: transform .2s ease;
transition: transform .2s ease, -webkit-transform .2s ease;
}

.directionDown-2w0MZz {
-webkit-transform: rotate3d(0, 0, -1, 0deg);
transform: rotate3d(0, 0, -1, 0deg);
}

.barBase-3xxDXu {
position: absolute;
left: 16px;
right: 16px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
z-index: 2;
min-height: 24px;
text-transform: capitalize;
-webkit-transition: opacity .15s;
transition: opacity .15s;
opacity: .95;
cursor: pointer;
}

.barBase-3xxDXu:hover {
opacity: 1;
}

.barButtonBase-Sk2mdB {
text-align: left;
background: none;
color: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
font-weight: 500;
padding: 0 12px;
font-size: 14px;
line-height: 24px;
height: 24px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
}

.barButtonIcon-bMvzp2 {
display: block;
position: relative;
top: -1px;
width: 16px;
height: 16px;
margin-left: 8px;
}

.jumpToPresentBar-1cEnH0 {
bottom: 0;
border-radius: 8px 8px 0 0;
background-color: var(--background-accent);
opacity: .95;
padding-bottom: 8px;
}

.jumpToPresentBar-1cEnH0:active {
margin-bottom: -1px;
}

.newMessagesBar-1hF-9G {
top: 0;
border-radius: 0 0 8px 8px;
background-color: var(--brand-experiment);
-webkit-box-shadow: var(--elevation-low);
box-shadow: var(--elevation-low);
}

.newMessagesBar-1hF-9G:active {
padding-top: 1px;
-webkit-box-shadow: 0 0 0 hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, 0);
box-shadow: 0 0 0 hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, 0);
}

.barButtonMain-2GIx4o {
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
display: block;
position: relative;
}

.barButtonMain-2GIx4o,
.span-3lFnWr {
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
}

.barButtonAlt-TQoCdZ {
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
font-weight: 600;
position: relative;
}

.imageContent-3Av-9c {
-webkit-box-orient: vertical;
-ms-flex-flow: column nowrap;
flex-flow: column nowrap;
-ms-flex: auto;
flex: auto;
}

.imageContainer-10XenG,
.imageContent-3Av-9c {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-direction: normal;
-webkit-box-flex: 1;
}

.imageContainer-10XenG {
-webkit-box-orient: horizontal;
-ms-flex-flow: row nowrap;
flex-flow: row nowrap;
-ms-flex: auto;
flex: auto;
width: 100%;
}

.emoji {
-o-object-fit: contain;
object-fit: contain;
width: 1.375em;
height: 1.375em;
vertical-align: bottom;
}

.emoji.jumboable {
width: 3rem;
height: 3rem;
min-height: 3rem;
}

.emojiContainer-2XKwXX {
display: inline-block;
cursor: pointer;
}

.wrapper-1ZcZW- {
border-radius: 3px;
padding: 0 2px;
font-weight: 500;
unicode-bidi: -moz-plaintext;
unicode-bidi: plaintext;
color: var(--brand-experiment-530);
background: var(--brand-experiment-15a);
position: relative;
}

.theme-dark .wrapper-1ZcZW- {
background: var(--brand-experiment-30a);
color: var(--brand-experiment-200);
}

.interactive {
-webkit-transition: background-color 50ms ease-out, color 50ms ease-out;
transition: background-color 50ms ease-out, color 50ms ease-out;
cursor: pointer;
}

.interactive:hover {
color: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
background-color: var(--brand-experiment);
}

.markup-eYLPri {
font-size: 1rem;
line-height: 1.375rem;
white-space: pre-wrap;
white-space: break-spaces;
word-wrap: break-word;
-webkit-user-select: text;
-moz-user-select: text;
-ms-user-select: text;
user-select: text;
color: var(--text-normal);
font-weight: 400;
}

.markup-eYLPri a {
color: var(--text-link);
word-break: break-word;
text-decoration: none;
cursor: pointer;
}

.markup-eYLPri a:hover {
text-decoration: underline;
}

.roleMention-11Aaqi {
font-weight: 500;
}

.container-1oeRFJ {
-webkit-box-sizing: border-box;
box-sizing: border-box;
display: block;
padding: 1px 0;
border-radius: 4px;
-webkit-transition: none;
transition: none;
color: var(--channels-default);
}

.clickable-28SzVr.container-1oeRFJ:hover {
color: var(--interactive-hover);
}

.clickable-28SzVr.container-1oeRFJ:hover .avatar-6qzftW {
opacity: 1;
}

.clickable-28SzVr.container-1oeRFJ:active {
color: var(--interactive-active);
}

.layout-1qmrhw {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
border-radius: 4px;
height: 42px;
padding: 0 8px;
}

.clickable-28SzVr:hover .layout-1qmrhw {
background-color: var(--background-modifier-hover);
cursor: pointer;
}

.clickable-28SzVr:active .layout-1qmrhw {
background-color: var(--background-modifier-active);
}

.avatar-6qzftW {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
width: 32px;
height: 32px;
margin-right: 12px;
}

.content-1U25dZ {
min-width: 0;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
}

.content-1U25dZ,
.name-3Vmqxm {
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
}

.name-3Vmqxm {
font-size: 16px;
line-height: 20px;
font-weight: 500;
-webkit-box-flex: 0;
-ms-flex: 0 1 auto;
flex: 0 1 auto;
}

.nameAndDecorators-3ERwy2 {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
}

.subText-OGOWMj {
margin-top: -2px;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
}

.subText-OGOWMj:empty {
display: none;
}

.emoji-V71N2V {
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
}

.textRuler-1DsANg {
position: absolute;
visibility: hidden;
}

.member-2gU6Ar {
position: relative;
max-width: 224px;
margin-left: 8px;
}

.botTag-2mryIa {
margin-left: 4px;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
}

.username-i5-wv- {
display: block;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
}

.activity-2EQDZv {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
font-size: 12px;
line-height: 16px;
color: var(--channels-default);
font-weight: 500;
}

.activityText-1rR-8O {
-webkit-box-flex: 0;
-ms-flex: 0 1 auto;
flex: 0 1 auto;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
}

.activityEmoji-SDBJp8 {
margin-right: 4px;
width: 14px;
height: 14px;
}

.base-3IDx3L {
-webkit-box-sizing: border-box;
box-sizing: border-box;
height: 16px;
min-width: 16px;
min-height: 16px;
font-size: 12px;
line-height: 16px;
font-weight: 600;
color: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
text-align: center;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
}

.baseShapeRound-3epLEv {
border-radius: 8px;
}

.numberBadge-37OJ3S {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
}

.container-q97qHp {
-webkit-box-sizing: border-box;
box-sizing: border-box;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
text-transform: uppercase;
font-size: 12px;
line-height: 16px;
letter-spacing: .02em;
font-family: var(--font-display);
font-weight: 500;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
color: var(--channels-default);
}

.base-ZDDK0g {
font-weight: 500;
font-family: var(--font-display);
color: var(--header-primary);
}

.button-2BMPJJ {
position: relative;
top: 3px;
opacity: .8;
-webkit-transition: stroke-dasharray .2s ease-out, -webkit-transform .2s ease-out;
transition: stroke-dasharray .2s ease-out, -webkit-transform .2s ease-out;
transition: transform .2s ease-out, stroke-dasharray .2s ease-out;
transition: transform .2s ease-out, stroke-dasharray .2s ease-out, -webkit-transform .2s ease-out;
margin-left: 4px;
}

.button-2BMPJJ path {
stroke-width: 2px;
stroke-dasharray: 7;
stroke-dashoffset: 1;
-webkit-transition: stroke-dasharray .2s ease;
transition: stroke-dasharray .2s ease;
}

.assetWrapper-2hzITV {
position: relative;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.stickerAsset-4c7Oqy {
height: 100%;
left: 0;
position: absolute;
top: 0;
width: 100%;
}

.pngImage-1vIgLy {
display: block;
-o-object-fit: contain;
object-fit: contain;
}

.keybindShortcut-3zF1P9 {
font-size: 12px;
line-height: 12px;
text-transform: uppercase;
font-weight: 600;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
}

.key-N5VmHN,
.keybindShortcut-3zF1P9 {
-webkit-box-sizing: border-box;
box-sizing: border-box;
position: relative;
height: 23px;
}

.key-N5VmHN {
background-color: var(--background-accent);
border: 1px solid var(--background-primary);
display: block;
padding: 3px 6px 4px;
border-radius: 4px;
cursor: default;
min-width: 14px;
min-height: 14px;
text-align: center;
}

.key-N5VmHN .bindArrow-EmK4SC {
width: 10px;
height: 10px;
}

.key-N5VmHN .bindArrow-EmK4SC.up-17zw24 {
-webkit-transform: rotate(180deg);
transform: rotate(180deg);
}

.key-N5VmHN:active {
-webkit-transform: translateY(2px);
transform: translateY(2px);
height: 21px;
padding-bottom: 2px;
}

.theme-dark .keybindShortcut-3zF1P9,
.theme-dark .keybindShortcut-3zF1P9 .key-N5VmHN {
color: hsl(240, calc(var(--saturation-factor, 1)*5.9%), 96.7%);
}

.theme-dark .keybindShortcut-3zF1P9 .key-N5VmHN {
-webkit-box-shadow: inset 0 -4px 0 hsl(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%);
box-shadow: inset 0 -4px 0 hsl(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%);
}

.theme-dark .keybindShortcut-3zF1P9 .key-N5VmHN .bindArrow-EmK4SC g {
fill: hsl(240, calc(var(--saturation-factor, 1)*5.9%), 96.7%);
}

.theme-dark .keybindShortcut-3zF1P9 .key-N5VmHN:active {
color: hsl(216, calc(var(--saturation-factor, 1)*3.7%), 73.5%);
-webkit-box-shadow: inset 0 -2px 0 hsl(220, calc(var(--saturation-factor, 1)*7.7%), 22.9%);
box-shadow: inset 0 -2px 0 hsl(220, calc(var(--saturation-factor, 1)*7.7%), 22.9%);
border: 1px solid hsl(216, calc(var(--saturation-factor, 1)*7.2%), 13.5%);
}

.theme-dark .keybindShortcut-3zF1P9 .key-N5VmHN:active .bindArrow-EmK4SC g {
fill: hsl(216, calc(var(--saturation-factor, 1)*3.7%), 73.5%);
}

.wrapper-30-Nkg {
position: relative;
word-wrap: break-word;
-webkit-user-select: text;
-moz-user-select: text;
-ms-user-select: text;
user-select: text;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
padding-right: 16px;
min-height: 1.375rem;
}

.cozy-VmLDNB.wrapper-30-Nkg {
padding-top: .125rem;
padding-bottom: .125rem;
}

.cozy-VmLDNB.wrapper-30-Nkg {
padding-left: 72px;
}

.repliedMessage-3Z6XBG {
--reply-spacing: 4px;
color: var(--header-secondary);
position: relative;
white-space: pre;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.repliedMessage-3Z6XBG {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
font-size: 0.875rem;
line-height: 1.125rem;
}

.cozy-VmLDNB .repliedMessage-3Z6XBG {
margin-bottom: var(--reply-spacing);
}

.cozy-VmLDNB .repliedMessage-3Z6XBG:before {
--avatar-size: 40px;
--gutter: 16px;
}

.repliedMessage-3Z6XBG:before {
--spine-width: 2px;
content: "";
display: block;
position: absolute;
-webkit-box-sizing: border-box;
box-sizing: border-box;
top: 50%;
right: 100%;
bottom: 0;
left: calc(var(--avatar-size)/2*-1 + var(--gutter)*-1);
margin-right: var(--reply-spacing);
margin-top: calc(var(--spine-width)*-1/2);
margin-left: calc(var(--spine-width)*-1/2);
margin-bottom: calc(.125rem - 4px);
border-left: var(--spine-width) solid var(--interactive-muted);
border-bottom: 0 solid var(--interactive-muted);
border-right: 0 solid var(--interactive-muted);
border-top: var(--spine-width) solid var(--interactive-muted);
border-top-left-radius: 6px;
}

.replyAvatar-sHd2sU,
.replyBadge-LMm_Ic {
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
width: 16px;
height: 16px;
border-radius: 50%;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
margin-right: .25rem;
}

.replyBadge-LMm_Ic {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
color: var(--header-secondary);
background: var(--background-tertiary);
}

.replyIcon-20gA8D {
width: 10.8px;
height: 7.2px;
}

.userJoinSystemMessageIcon-3FQ_Mo {
width: 12px;
height: 12px;
margin-right: .25rem;
}

.repliedMessage-3Z6XBG .username-h_Y3Us {
-ms-flex-negative: 0;
flex-shrink: 0;
font-size: inherit;
line-height: inherit;
margin-right: .25rem;
opacity: .64;
}

.repliedMessage-3Z6XBG .botTag-1NoD0B {
top: 0;
}

.repliedTextPreview-1bvxun {
-webkit-box-flex: 0;
-ms-flex: 0 1 auto;
flex: 0 1 auto;
overflow: hidden;
text-overflow: ellipsis;
}

.repliedTextPreview-1bvxun.clickable-31pE3P {
cursor: pointer;
}

.repliedTextPreview-1bvxun.clickable-31pE3P:hover {
color: var(--header-primary);
}

.repliedMessage-3Z6XBG .repliedTextPreview-1bvxun .repliedTextContent-2hOYMB {
color: inherit;
font-size: inherit;
line-height: inherit;
white-space: pre;
text-overflow: ellipsis;
pointer-events: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.repliedTextPlaceholder-1Njd47 {
font-style: italic;
padding-right: 2px;
}

.repliedTextContentIcon-1LQXRB {
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
width: 20px;
height: 20px;
margin-left: 4px;
}

.cozy-VmLDNB .contents-2MsGLg {
position: static;
margin-left: 0;
padding-left: 0;
text-indent: 0;
}

.cozy-VmLDNB .header-2jRmjb {
display: block;
position: relative;
line-height: 1.375rem;
min-height: 1.375rem;
color: var(--text-muted);
white-space: break-spaces;
word-wrap: pre-wrap;
}

.zalgo-26OfGz.cozy-VmLDNB .header-2jRmjb {
overflow: hidden;
}

.buttonContainer-1502pf {
position: absolute;
top: 0;
right: 0;
}

.avatar-2e8lTP {
position: absolute;
left: 16px;
margin-top: calc(4px - .125rem);
width: 40px;
height: 40px;
border-radius: 50%;
overflow: hidden;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
pointer-events: none;
z-index: 1;
}

.avatar-2e8lTP:before {
content: "";
display: block;
width: 100%;
height: 100%;
background-color: var(--background-modifier-accent);
}

.avatar-2e8lTP.clickable-31pE3P {
pointer-events: auto;
}

.full-motion .avatar-2e8lTP.clickable-31pE3P:hover {
-webkit-filter: drop-shadow(var(--elevation-medium));
filter: drop-shadow(var(--elevation-medium));
}

.avatar-2e8lTP.clickable-31pE3P:active {
-webkit-transform: translateY(1px);
transform: translateY(1px);
}

.timestamp-p1Df1m {
display: inline-block;
height: 1.25rem;
cursor: default;
pointer-events: none;
font-weight: 500;
}

.timestampInline-_lS3aK {
margin-left: .25rem;
}

.timestamp-p1Df1m.latin24CompactTimeStamp-2pXUBq {
width: 3.1rem;
}

.cozy-VmLDNB .timestamp-p1Df1m {
font-size: 0.75rem;
line-height: 1.375rem;
color: var(--text-muted);
vertical-align: baseline;
}

.cozy-VmLDNB .timestamp-p1Df1m.alt-1dvXnH {
text-align: right;
font-size: 0.6875rem;
line-height: 1.375rem;
margin-right: .25rem;
color: var(--text-muted);
text-indent: 0;
}

.cozy-VmLDNB .timestamp-p1Df1m.alt-1dvXnH {
position: absolute;
left: 0;
height: 1.375rem;
line-height: 1.375rem;
width: 56px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
text-align: right;
z-index: 1;
}

.timestampVisibleOnHover-9PEuZS {
opacity: 0;
}

.username-h_Y3Us {
font-size: 1rem;
font-weight: 500;
line-height: 1.375rem;
color: var(--header-primary);
display: inline;
vertical-align: baseline;
position: relative;
overflow: hidden;
-ms-flex-negative: 0;
flex-shrink: 0;
}

.cozy-VmLDNB .headerText-2z4IhQ {
margin-right: .25rem;
}

.username-h_Y3Us.clickable-31pE3P:hover {
cursor: pointer;
text-decoration: underline;
}

.botTag-1NoD0B {
position: relative;
top: .1rem;
}

.botTagCompact-1idyyC {
margin-right: .25rem;
}

.botTagCozy-3NTBvK {
margin-left: .25rem;
}

.separator-AebOhG {
position: absolute;
opacity: 0;
width: 0;
display: inline-block;
font-style: normal;
}

.messageContent-2t3eCI {
text-indent: 0;
}

.cozy-VmLDNB .messageContent-2t3eCI {
position: relative;
}

.zalgo-26OfGz .messageContent-2t3eCI {
overflow: hidden;
}

.messageContent-2t3eCI:empty {
display: none;
}

.cozy-VmLDNB .messageContent-2t3eCI {
-webkit-user-select: text;
-moz-user-select: text;
-ms-user-select: text;
user-select: text;
margin-left: -72px;
padding-left: 72px;
}

.mention {
border-radius: 3px;
padding: 0 2px;
}

.clickableSticker-3FN2_L {
cursor: pointer;
}

.attachmentContentItem-UKeiCx {
-webkit-box-flex: 1;
-ms-flex: auto;
flex: auto;
}

.removeAttachmentButton-1iO1qS {
opacity: 0;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
cursor: pointer;
color: var(--interactive-normal);
padding: 2px;
}

.messageAttachment-CZp8Iv {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-flow: row nowrap;
flex-flow: row nowrap;
-webkit-box-align: start;
-ms-flex-align: start;
align-items: start;
max-width: 100%;
}

.messageAttachmentNoJustify-lIzP9c {
justify-self: auto !important;
}

.removeAttachmentButton-1iO1qS:hover {
opacity: 1;
}

.removeAttachmentButton-1iO1qS:hover {
color: var(--interactive-hover);
}

.hidden-334jci {
visibility: hidden;
}

.iconLayout-SqV3nb {
-webkit-box-sizing: border-box;
box-sizing: border-box;
}

.iconLayout-SqV3nb {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
width: 22px;
height: 22px;
cursor: text;
}

.iconContainer-1RqWJj {
-webkit-box-sizing: border-box;
box-sizing: border-box;
position: relative;
width: 16px;
height: 16px;
}

.icon-18rqoe {
-webkit-box-sizing: border-box;
box-sizing: border-box;
position: absolute;
top: 0;
left: 0;
opacity: 0;
width: 100%;
height: 100%;
z-index: 2;
-webkit-transition: opacity .1s ease-out, -webkit-transform .1s ease-out;
transition: opacity .1s ease-out, -webkit-transform .1s ease-out;
transition: transform .1s ease-out, opacity .1s ease-out;
transition: transform .1s ease-out, opacity .1s ease-out, -webkit-transform .1s ease-out;
-webkit-transform: rotate(90deg);
transform: rotate(90deg);
color: var(--text-muted);
}

.icon-18rqoe.visible-2yTnyW {
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
opacity: 1;
}

.reactions-3ryImn {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-flex: 1;
-ms-flex: 1 0 auto;
flex: 1 0 auto;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
margin-bottom: -.5rem;
padding-bottom: .25rem;
}

.icon-1q31jb,
.reactionBtn-3I19bq {
width: 1rem;
height: 1rem;
}

.reactionBtn-3I19bq {
margin-left: .25rem;
margin-bottom: .125rem;
cursor: pointer;
visibility: hidden;
color: var(--interactive-normal);
}

.reactionBtn-3I19bq:hover .icon-1q31jb {
color: var(--interactive-hover);
}

.reactionBtn-3I19bq:active .icon-1q31jb {
color: var(--interactive-active);
}

.reactions-3ryImn:hover .reactionBtn-3I19bq {
visibility: visible;
}

.reaction-3vwAF2 {
border-radius: .5rem;
cursor: pointer;
-webkit-box-sizing: border-box;
box-sizing: border-box;
-ms-flex-negative: 0;
flex-shrink: 0;
margin-right: .25rem;
margin-bottom: .25rem;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
-webkit-transition: none .1s ease;
transition: none .1s ease;
-webkit-transition-property: background-color, border-color;
transition-property: background-color, border-color;
background: var(--background-secondary);
border: 1px solid transparent;
}

.reaction-3vwAF2 .emoji {
width: 1rem;
height: 1rem;
margin: .125rem 0;
min-width: auto;
min-height: auto;
}

.reaction-3vwAF2:hover {
background-color: var(--background-primary);
border-color: hsla(0, calc(var(--saturation-factor, 1)*0%), 100%, .2);
}

.reaction-3vwAF2:hover .reactionCount-26U4As {
color: var(--interactive-hover);
}

.reaction-3vwAF2:active {
background-color: var(--background-secondary-alt);
border-color: transparent;
}

.reaction-3vwAF2:active .reactionCount-26U4As {
color: var(--interactive-active);
}

.reaction-3vwAF2.reactionMe-1PwQAc {
background-color: var(--brand-experiment-15a);
border-color: var(--brand-experiment);
}

.reaction-3vwAF2.reactionMe-1PwQAc .reactionCount-26U4As {
color: var(--brand-experiment-200);
}

.reactionInner-YJjOtT {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
padding: .125rem .375rem;
}

.reactionCount-26U4As {
font-size: 0.875rem;
font-weight: 500;
margin-left: .375rem;
text-align: center;
color: var(--interactive-normal);
}

.container-2sjPya {
display: grid;
grid-auto-flow: row;
grid-row-gap: .25rem;
grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
text-indent: 0;
min-height: 0;
min-width: 0;
padding-top: .125rem;
padding-bottom: .125rem;
position: relative;
}

.container-2sjPya:empty {
display: none;
}

.container-2sjPya>* {
justify-self: start;
-ms-flex-item-align: start;
align-self: start;
}

.container-x059i8 {
position: relative;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: start;
-ms-flex-align: start;
align-items: flex-start;
color: var(--channels-default);
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
padding-top: .125rem;
padding-bottom: .125rem;
}

.content-vSHmMD {
font-weight: 400;
font-size: 1rem;
line-height: 1.375rem;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
}

.content-vSHmMD a {
cursor: pointer;
color: var(--interactive-active);
font-weight: 500;
}

.iconContainer-2rPbqG {
position: absolute;
width: 2.5rem;
right: 100%;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
padding-top: .25rem;
}

.font-size-16 .cozy-S5wsfF .iconContainer-2rPbqG {
width: 4.5rem;
}

.icon-JRJzJz {
background-repeat: no-repeat;
background-size: 1rem 1rem;
}

.iconSize-Ai8Wtu {
width: 1rem;
height: 1rem;
}

.mentioned-Tre-dv {
position: relative;
background-color: var(--background-mentioned);
}

.mentioned-Tre-dv:before {
content: "";
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0;
pointer-events: none;
width: 2px;
}

.mentioned-Tre-dv:before {
background-color: var(--info-warning-foreground);
}

.messageListItem-ZZ7v6g {
outline: none;
}

.message-2CShn3 {
padding-right: 48px !important;
}

.buttons-3dF5Kd {
opacity: 0;
pointer-events: none;
}

.cozyMessage-1DWF9U.groupStart-3Mlgv1 {
min-height: 2.75rem;
}

.systemMessage-1H1Z20.groupStart-3Mlgv1 {
min-height: 1.375rem;
}

.divider-IqmEqJ {
margin-left: 1rem;
margin-right: .875rem;
}

.theme-dark .mentioned-Tre-dv .mention.interactive:hover {
text-decoration: underline;
}

.group-spacing-16 .groupStart-3Mlgv1 {
margin-top: 1.0625rem;
}

.group-spacing-16 .divider-IqmEqJ {
margin-top: 4px;
margin-bottom: 4px;
}

.group-spacing-16 .divider-IqmEqJ.hasContent-1y12-u {
margin-top: 1.5rem;
margin-bottom: .5rem;
}

.uploadArea-2Nu_Vc {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
visibility: hidden;
background: hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, .8);
font-size: 36px;
color: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
opacity: 0;
z-index: 2000;
}

.uploadArea-2Nu_Vc strong {
font-weight: 700;
}

.uploadArea-2Nu_Vc * {
pointer-events: none;
}

.uploadDropModal-13Kd20 {
-webkit-animation: uploadIconAnimateIn-3ZclN1 .25s ease-in-out 0s normal forwards;
animation: uploadIconAnimateIn-3ZclN1 .25s ease-in-out 0s normal forwards;
width: 310px;
height: 170px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
position: relative;
}

.uploadDropModal-13Kd20 .instructions-272j2A,
.uploadDropModal-13Kd20 .title-3ChJ_v {
opacity: 0;
-webkit-animation: uploadTextFadeIn-3n1jvq 1s ease .175s normal forwards;
animation: uploadTextFadeIn-3n1jvq 1s ease .175s normal forwards;
}

.uploadDropModal-13Kd20 .instructions-272j2A {
-webkit-animation-delay: .185s;
animation-delay: .185s;
-webkit-animation-duration: 1.25s;
animation-duration: 1.25s;
}

.uploadDropModal-13Kd20 .bgScale-1iWuPF {
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: -1;
border-radius: 10px;
background: var(--brand-experiment);
-webkit-animation: uploadModalBounce-12JH4d .8s ease 0s normal forwards;
animation: uploadModalBounce-12JH4d .8s ease 0s normal forwards;
}

.uploadDropModal-13Kd20 .inner-rBP-MS {
-webkit-box-flex: 1;
-ms-flex: 1;
flex: 1;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
border: 2px dashed hsla(0, calc(var(--saturation-factor, 1)*0%), 100%, .4);
border-radius: 6px;
}

.uploadDropModal-13Kd20 .inner-rBP-MS,
.uploadDropModal-13Kd20 .inner-rBP-MS .title-3ChJ_v {
color: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
width: 100%;
}

.uploadDropModal-13Kd20 .inner-rBP-MS .title-3ChJ_v {
font-size: 22px;
font-weight: 700;
padding: 0 8px;
text-align: center;
-webkit-box-sizing: border-box;
box-sizing: border-box;
}

.uploadDropModal-13Kd20 .inner-rBP-MS .instructions-272j2A,
.uploadDropModal-13Kd20 .inner-rBP-MS .title-3ChJ_v strong {
color: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
}

.uploadDropModal-13Kd20 .inner-rBP-MS .instructions-272j2A {
text-align: center;
font-size: 12px;
line-height: 16px;
margin-top: 4px;
margin-left: 4px;
}

.icons-1UZPvE {
position: relative;
width: 100px;
height: 60px;
}

.icon-HW4tZ- {
-ms-flex-negative: 0;
flex-shrink: 0;
width: 100px;
height: 130px;
background-repeat: no-repeat;
background-position: 50%;
-webkit-transform: translateZ(0);
transform: translateZ(0);
}

.icon-HW4tZ-.one-NzgGbt {
opacity: 0;
-webkit-animation: uploadIconAnimateInLeft-18-7XG .8s ease 0s normal forwards;
animation: uploadIconAnimateInLeft-18-7XG .8s ease 0s normal forwards;
position: absolute;
}

.icon-HW4tZ-.two-1t2_74 {
-webkit-filter: drop-shadow(0 0 48px rgba(88, 101, 242, .5));
filter: drop-shadow(0 0 48px rgba(88, 101, 242, .5));
-webkit-animation: uploadIconAnimateInMiddle-TTp5Cg .8s ease 0s normal forwards;
animation: uploadIconAnimateInMiddle-TTp5Cg .8s ease 0s normal forwards;
position: absolute;
}

.icon-HW4tZ-.three-fZYihQ {
opacity: 0;
-webkit-animation: uploadIconAnimateInRight-3zrvNl .8s ease 0s normal forwards;
animation: uploadIconAnimateInRight-3zrvNl .8s ease 0s normal forwards;
position: absolute;
}

.wrapOne-2VKwBJ {
-webkit-transform: translate3d(0, -70px, 0);
transform: translate3d(0, -70px, 0);
}

.wrapTwo-3T9wbh {
-webkit-transform: translate3d(0, -80px, 0);
transform: translate3d(0, -80px, 0);
}

.wrapThree-3wCMkN {
-webkit-transform: translate3d(0, -70px, 0);
transform: translate3d(0, -70px, 0);
}

.document-1u6V3N {
background-image: url(https://discord.com/assets/515d0236bce3ba834026209dc78489f0.svg);
}

.image-2ssF8k {
background-image: url(https://discord.com/assets/a532e755c36b75762a75ff0794456efb.svg);
}

.code-rRQnfi {
background-image: url(https://discord.com/assets/35827c42a3af54bd169cff0a866eb428.svg);
}

.container-1ZA19X {
bottom: 100%;
margin-bottom: 12px;
min-height: 16px;
position: absolute;
-webkit-transition: opacity .125s ease-in, -webkit-transform .125s cubic-bezier(.48, 1.93, 1, .68);
transition: opacity .125s ease-in, -webkit-transform .125s cubic-bezier(.48, 1.93, 1, .68);
transition: opacity .125s ease-in, transform .125s cubic-bezier(.48, 1.93, 1, .68);
transition: opacity .125s ease-in, transform .125s cubic-bezier(.48, 1.93, 1, .68), -webkit-transform .125s cubic-bezier(.48, 1.93, 1, .68);
opacity: 1;
will-change: opacity, transform;
left: auto;
right: 4px;
}

.container-1ZA19X.hidden-tnoHf9 {
-webkit-transform: translateY(12px);
transform: translateY(12px);
opacity: 0;
pointer-events: none;
}

.stickerIconOffset-2zxofV {
right: 40px;
}

.containerBackground-Ang24O {
background-color: var(--background-floating);
border: 1px solid var(--background-modifier-selected);
border-radius: 8px;
bottom: 0;
-webkit-box-shadow: var(--elevation-high);
box-shadow: var(--elevation-high);
left: 0;
min-height: 16px;
opacity: .95;
position: absolute;
right: 0;
top: 0;
z-index: 0;
}

.containerBackground-Ang24O:after {
border: 7px solid transparent;
border-top: 7px solid var(--background-floating);
content: "";
height: 0;
margin-top: -1px;
position: absolute;
right: 14px;
top: 100%;
width: 0;
}

.bottomInformationTextContainer-3xmddX {
z-index: 1;
position: relative;
padding: 0 8px 10px;
height: 24px;
}

.textDivider-34kVsR {
height: 1px;
margin: 0 0 4px;
background-color: var(--background-modifier-accent);
}

.descriptionText-yl6pN6 {
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
}

.stickerResults-cD_yeI {
display: grid;
grid-gap: 8px;
grid-auto-flow: column;
grid-template-columns: repeat(auto-fit, 48px);
padding: 8px;
position: relative;
z-index: 1;
}

.keybind-1ejq-9 {
display: inline-block;
}

.theme-dark .keybind-1ejq-9 span {
-webkit-box-shadow: inset 0 -4px 0 rgba(32, 34, 37, .6);
box-shadow: inset 0 -4px 0 rgba(32, 34, 37, .6);
}

.theme-dark .containerBackground-Ang24O {
opacity: .95;
}

.editor-H2NA06 {
caret-color: var(--text-normal);
text-align: left;
word-break: break-word;
white-space: break-spaces !important;
}

.placeholder-1rCBhr {
position: absolute;
left: 0;
right: 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
color: var(--channel-text-area-placeholder);
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
pointer-events: none;
}

.slateContainer-3x9zil {
position: relative;
}

.slateTextArea-27tjG0 {
padding-right: 10px;
position: absolute;
left: 0;
right: 10px;
}

.channelTextArea-1VQBuV {
position: relative;
width: 100%;
text-indent: 0;
border-radius: 8px;
}

.scrollableContainer-15eg7h {
overflow-x: hidden;
overflow-y: scroll;
background-color: var(--channeltextarea-background);
max-height: 50vh;
border-radius: 8px;
scrollbar-width: none;
}

.webkit-QgSAqd::-webkit-scrollbar {
width: 12px;
height: 12px;
}

.webkit-QgSAqd::-webkit-scrollbar-thumb,
.webkit-QgSAqd::-webkit-scrollbar-track {
background-clip: padding-box;
border: 4px solid transparent;
}

.webkit-QgSAqd::-webkit-scrollbar-track {
border-width: initial;
}

.webkit-QgSAqd::-webkit-scrollbar-thumb {
background-color: hsla(225, calc(var(--saturation-factor, 1)*7.7%), 10.2%, .6);
border-radius: 8px;
}

.inner-NQg18Y {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
position: relative;
}

.sansAttachButton-1ERHue {
padding-left: 16px;
}

.attachButton-1ijpt9 {
margin-left: -16px;
}

.textArea-2CLwUE {
background-color: transparent;
resize: none;
border: none;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
-webkit-box-sizing: border-box;
box-sizing: border-box;
font-weight: 400;
font-size: 1rem;
line-height: 1.375rem;
width: 100%;
height: 44px;
min-height: 44px;
color: var(--text-normal);
padding-left: 0;
padding-right: 10px;
}

.textArea-2CLwUE::-webkit-input-placeholder {
-webkit-user-select: none;
user-select: none;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
color: var(--text-muted);
}

.textArea-2CLwUE::-moz-placeholder {
-moz-user-select: none;
user-select: none;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
color: var(--text-muted);
}

.textArea-2CLwUE:-ms-input-placeholder {
-ms-user-select: none;
user-select: none;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
color: var(--text-muted);
}

.textArea-2CLwUE::placeholder {
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
color: var(--text-muted);
}

.textAreaSlate-9-y-k2 {
padding: 0;
}

.buttons-uaqb-5 {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
height: 44px;
position: sticky;
top: 0;
margin-right: 4px;
}

.webkit-QgSAqd .buttons-uaqb-5 {
margin-right: -6px;
}

.buttonContainer-2lnNiN {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
}

.button-3BaQ4X {
padding: 4px;
margin-left: 4px;
margin-right: 4px;
}

.stickerIcon-3Jx5SE {
width: 20px !important;
height: 20px !important;
}

.stickerButton-1-nFh2 {
-webkit-transition: -webkit-transform .2s;
transition: -webkit-transform .2s;
transition: transform .2s;
transition: transform .2s, -webkit-transform .2s;
}

.fontSize16Padding-XoMpjI {
padding-bottom: 11px;
padding-top: 11px;
}

.divider-2rZFJK {
z-index: 1;
height: 0;
border-top: thin solid var(--background-modifier-accent);
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
position: relative;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
pointer-events: none;
-webkit-box-sizing: border-box;
box-sizing: border-box;
--divider-color: var(--status-danger);
}

.hasContent-31hcsn {
position: relative;
left: auto;
right: auto;
}

.content-3spvdd {
display: block;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
padding: 2px 4px;
color: var(--text-muted);
background: var(--background-primary);
line-height: 13px;
font-size: 12px;
margin-top: -1px;
font-weight: 600;
border-radius: 8px;
}

.emojiButton-3FRTuj {
max-height: 50px;
cursor: pointer;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
}

.sprite-2lxwfc {
background-image: url(https://discord.com/assets/7e5013a9afc1404b0b89d99aaec0b398.png);
background-position: 50%;
background-repeat: no-repeat;
width: 22px;
height: 22px;
display: block;
}

.buttonWrapper-3YFQGJ {
cursor: pointer;
}

.button-2fCJ0o {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
color: var(--interactive-normal);
}

.button-2fCJ0o:hover {
color: var(--interactive-hover);
}

.button-2fCJ0o:active {
color: var(--interactive-active);
}

.icon-1d5zch {
width: 24px;
height: 24px;
}

.buttonWrapper-3YFQGJ:hover {
color: var(--interactive-active);
}

.wrapper-2vIMkT {
background-color: var(--background-primary);
-webkit-box-shadow: var(--elevation-stroke);
box-shadow: var(--elevation-stroke);
display: grid;
grid-auto-flow: column;
-webkit-box-sizing: border-box;
box-sizing: border-box;
height: 32px;
border-radius: 4px;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
-webkit-transition: -webkit-box-shadow .1s ease-out;
transition: -webkit-box-shadow .1s ease-out;
transition: box-shadow .1s ease-out;
transition: box-shadow .1s ease-out, -webkit-box-shadow .1s ease-out;
position: relative;
overflow: hidden;
}

.full-motion .wrapper-2vIMkT:hover {
-webkit-box-shadow: var(--elevation-stroke), var(--elevation-medium);
box-shadow: var(--elevation-stroke), var(--elevation-medium);
}

.button-3bklZh {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
height: 24px;
padding: 4px;
min-width: 24px;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
color: var(--interactive-normal);
cursor: pointer;
position: relative;
}

.button-3bklZh:hover {
color: var(--interactive-hover);
background-color: var(--background-modifier-hover);
}

.button-3bklZh:active {
padding-top: 5px;
padding-bottom: 3px;
color: var(--interactive-active);
background-color: var(--background-modifier-active);
}

.characterCount-8yNPfb {
-webkit-box-align: end;
-ms-flex-align: end;
align-items: flex-end;
bottom: 12px;
color: var(--text-normal);
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
position: absolute;
right: 14px;
}

.flairContainer-xF7I3K {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
height: 24px;
}

strong {
font-weight: 600;
}

.container-ZMc96U {
position: relative;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
min-width: 0;
width: 100%;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
height: 48px;
padding: 0 8px;
font-size: 16px;
line-height: 20px;
cursor: default;
z-index: 2;
color: var(--text-normal);
}

.container-ZMc96U,
.container-ZMc96U * {
-webkit-box-sizing: border-box;
box-sizing: border-box;
}

.container-ZMc96U.themed-Hp1KC_ {
background: var(--background-primary);
}

.children-3xh0VB {
position: relative;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
min-width: 0;
overflow: hidden;
}

.children-3xh0VB:after {
content: "";
position: absolute;
top: 0;
right: 0;
width: 8px;
height: 100%;
}

.theme-dark .children-3xh0VB:after {
background: -webkit-gradient(linear, left top, right top, from(rgba(54, 57, 63, 0)), to(var(--background-primary)));
background: linear-gradient(90deg, rgba(54, 57, 63, 0) 0, var(--background-primary));
}

.toolbar-3_r2xA {
-ms-flex: 0 0 auto;
flex: 0 0 auto;
min-width: 0;
}

.title-17SveM,
.toolbar-3_r2xA {
-webkit-box-flex: 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
}

.title-17SveM {
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
margin: 0 8px 0 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
min-width: auto;
overflow: hidden;
white-space: nowrap;
}

.clickable-ZD7xvu {
cursor: pointer;
}

.iconWrapper-2awDjA {
position: relative;
height: 24px;
width: auto;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
margin: 0 8px;
}

.icon-2xnN2Y {
display: block;
width: 24px;
height: 24px;
-webkit-app-region: no-drag;
color: var(--channel-icon);
}

.clickable-ZD7xvu .icon-2xnN2Y {
color: var(--interactive-normal);
}

.clickable-ZD7xvu:hover .icon-2xnN2Y {
color: var(--interactive-hover);
}

.selected-29KTGM .icon-2xnN2Y {
color: var(--interactive-active);
}

.attachWrapper-3slhXI {
position: sticky;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
-ms-flex-item-align: stretch;
align-self: stretch;
}

.attachButton-_ACFSu {
height: 44px;
padding: 10px 16px;
position: sticky;
top: 0;
}

.attachButtonInner-2mwer8 {
height: 24px;
}

.attachButtonPlus-3IYelE {
-webkit-transform-origin: 50% 50%;
transform-origin: 50% 50%;
width: 24px;
height: 24px;
fill: var(--interactive-normal);
}

.attachButton-_ACFSu:hover .attachButtonPlus-3IYelE {
fill: var(--interactive-hover);
}

.uploadInput-YH_iku {
position: relative;
width: 0;
height: 0;
pointer-events: none;
}

.wrapper-15CKyy {
-webkit-box-sizing: border-box;
box-sizing: border-box;
position: relative;
word-wrap: break-word;
-webkit-user-select: text;
-moz-user-select: text;
-ms-user-select: text;
user-select: text;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
padding-right: 1rem;
background-color: var(--background-primary);
contain: paint layout;
overflow: hidden;
}

.cozy-3hKWhq.wrapper-15CKyy {
padding-left: 4.5rem;
}

.cozy-3hKWhq .content-IQtOge {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
height: 1.375rem;
overflow: hidden;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
text-indent: 0;
}

.blob-1uHjdp {
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
height: 1rem;
line-height: 1.375rem;
vertical-align: middle;
margin-top: .1875rem;
}

.cozy-3hKWhq .blob-1uHjdp {
display: block;
}

.cozy-3hKWhq .header-35u4WP {
position: relative;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
height: 1.375rem;
overflow: hidden;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
line-height: 1.375rem;
}

.attachmentContainer-1zVy8E {
padding-top: .125rem;
padding-bottom: .125rem;
}

.attachment-16cAbS {
margin-top: .125rem;
height: 120px;
width: 240px;
}

.blob-1uHjdp+.blob-1uHjdp {
margin-left: .25rem;
}

.blob-1uHjdp {
border-radius: .5rem;
}

.attachment-16cAbS {
border-radius: 6px;
}

.attachment-16cAbS,
.avatar-l9Txm5,
.blob-1uHjdp {
background-color: var(--text-normal);
}

.avatar-l9Txm5 {
position: absolute;
left: 1rem;
top: .25rem;
width: 2.5rem;
height: 2.5rem;
max-width: 40px;
max-height: 40px;
border-radius: 50%;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
}

.wrapper-3HVHpV {
background-color: var(--background-primary);
contain: strict;
overflow: hidden;
}

.container-2gUZhU {
position: absolute;
right: 0;
z-index: 1;
top: -25px;
padding: 0 14px 0 32px;
}

.isHeader-2bbX-L {
top: -16px;
}

.icon-1zidb7 {
width: 20px;
height: 20px;
display: block;
-o-object-fit: contain;
object-fit: contain;
}

.container-1yy5xN {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;
margin: 16px;
}

.container-30bdan {
padding: 16px 16px 0;
}

.container-30bdan,
.inner--CkhGx {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
}

.inner--CkhGx {
max-width: 400px;
}

.titleName-2vkJTW {
text-align: center;
font-weight: 700;
}

.titleName-2vkJTW p {
margin: 0;
}

.subtitle-3tY4DQ {
margin-top: 8px;
margin-bottom: 12px;
text-align: center;
}

.cardWrapper-2fBdfM {
-ms-flex-item-align: stretch;
align-self: stretch;
}

.card-PQEqCK {
margin-top: 8px;
padding: 16px;
border-radius: 8px;
background-color: var(--background-secondary-alt);
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-ms-flex-item-align: stretch;
align-self: stretch;
cursor: pointer;
-webkit-transition: background-color .1s ease-in-out;
transition: background-color .1s ease-in-out;
}

.card-PQEqCK:hover {
background-color: var(--background-modifier-hover);
}

.completed-_QmSvM .cardTextContainer-z6Fq-u,
.completed-_QmSvM .icon-2dMhn4 {
opacity: .6;
}

.icon-2dMhn4 {
width: 40px;
height: 40px;
min-width: 40px;
min-height: 40px;
background-size: contain;
background-repeat: no-repeat;
}

.cardHeader-GktiNM {
font-weight: 600;
}

.cardTextContainer-z6Fq-u {
margin-left: 16px;
margin-right: 16px;
-webkit-box-flex: 1;
-ms-flex-positive: 1;
flex-grow: 1;
}

.checkmark-bW9BK8 {
padding: 4px;
border-radius: 50%;
background-color: hsl(139, calc(var(--saturation-factor, 1)*47.3%), 43.9%);
color: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
}

.blockedSystemMessage-3FmE9n {
font-size: 1rem;
line-height: 1.375rem;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
text-indent: 0;
}

.blockedIcon-cd-3B7 {
width: 1rem;
height: 1rem;
display: block;
color: var(--text-muted);
}

.blockedMessageText-3Zeg3y {
color: var(--header-secondary);
}

.blockedAction-2cPk2G {
color: var(--text-muted);
cursor: pointer;
}

.blockedSystemMessage-3FmE9n:hover .blockedAction-2cPk2G {
color: var(--text-link);
}

.blockedAction-2cPk2G:hover {
text-decoration: underline;
}

.messagesWrapper-RpOMA3 {
position: relative;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
min-height: 0;
min-width: 0;
z-index: 0;
}

.messagesWrapper-RpOMA3,
.scrollerContent-2SW0kQ {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
}

.scrollerContent-2SW0kQ {
overflow-anchor: none;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;
-webkit-box-align: stretch;
-ms-flex-align: stretch;
align-items: stretch;
min-height: 100%;
}

.scroller-kQBbkU {
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
}

.scroller-kQBbkU::-webkit-scrollbar-track {
margin-bottom: 8px;
}

.scrollerInner-2PPAp2 {
min-height: 0;
}

.scrollerInner-2PPAp2:focus {
outline: none;
}

.scrollerSpacer-3AqkT9 {
display: block;
height: 30px;
width: 1px;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
pointer-events: none;
}

.navigationDescription-3xDmE2 {
display: none;
}

.chat-2ZfjoI {
min-width: 0;
min-height: 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
position: relative;
overflow: hidden;
background: var(--background-primary);
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
}

.chat-2ZfjoI .uploadArea-2uvx-B {
position: fixed;
}

.form-3gdLxP {
position: relative;
-ms-flex-negative: 0;
flex-shrink: 0;
padding-left: 16px;
padding-right: 16px;
margin-top: -8px;
}

.form-3gdLxP:before {
content: "";
position: absolute;
top: 0;
left: 0;
height: .5rem;
width: 1.25rem;
}

.theme-dark .form-3gdLxP:before {
background: -webkit-gradient(linear, left top, left bottom, from(rgba(54, 57, 63, 0)), to(var(--background-primary)));
background: linear-gradient(180deg, rgba(54, 57, 63, 0) 0, var(--background-primary));
}

.chatContent-3KubbW {
position: relative;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
min-width: 0;
min-height: 0;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
}

.content-1jQy2l {
min-width: 0;
min-height: 0;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: stretch;
-ms-flex-pack: stretch;
justify-content: stretch;
-webkit-box-align: stretch;
-ms-flex-align: stretch;
align-items: stretch;
position: relative;
}

.content-1jQy2l:before {
content: "";
position: absolute;
display: block;
top: -1px;
left: 0;
right: 0;
height: 1px;
-webkit-box-shadow: var(--elevation-low);
box-shadow: var(--elevation-low);
z-index: 1;
pointer-events: none;
}

.channelTextArea-1FufC0 {
margin-bottom: 24px;
background-color: var(--background-primary);
}

.title-31SJ6t {
position: relative;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
z-index: 100;
}

.theme-dark {
--search-popout-option-fade: linear-gradient(90deg, hsla(225, calc(var(--saturation-factor, 1)*7.7%), 10.2%, 0), hsla(225, calc(var(--saturation-factor, 1)*7.7%), 10.2%, 1) 80%);
--search-popout-option-fade-hover: linear-gradient(90deg, hsla(220, calc(var(--saturation-factor, 1)*7.7%), 22.9%, 0), hsl(220, calc(var(--saturation-factor, 1)*7.7%), 22.9%) 50%);
--search-popout-option-user-nickname: var(--text-normal);
--search-popout-option-user-username: var(--text-muted);
--search-popout-option-filter-text: hsl(218, calc(var(--saturation-factor, 1)*4.6%), 46.9%);
--search-popout-option-non-text-color: #caccce;
--search-popout-option-filter-color: #caccce;
--search-popout-option-answer-color: #caccce;
--search-popout-date-picker-border: 1px solid hsla(214, calc(var(--saturation-factor, 1)*9.1%), 15.1%, 0.3);
--search-popout-date-picker-hint-text: #caccce;
--search-popout-date-picker-hint-value-text: #fff;
--search-popout-date-picker-hint-value-background: var(--brand-experiment);
--search-popout-date-picker-hint-value-background-hover: var(--brand-experiment-430);
}

.search-2Mwzzq {
position: relative;
overflow: visible;
z-index: 100;
-webkit-app-region: no-drag;
}

.search-2Mwzzq .DraftEditor-root {
-webkit-box-flex: 1;
-ms-flex: 1;
flex: 1;
font-size: 14px;
font-weight: 500;
line-height: 20px;
overflow: hidden;
padding: 2px 0;
}

.search-2Mwzzq .DraftEditor-root .DraftEditor-editorContainer {
border: none;
overflow: hidden;
border-radius: 2px;
height: 20px;
}

.search-2Mwzzq .DraftEditor-root .public-DraftEditor-content,
.search-2Mwzzq .DraftEditor-root .public-DraftEditorPlaceholder-root {
-webkit-box-sizing: content-box;
box-sizing: content-box;
padding-bottom: 20px;
padding-left: 2px;
padding-right: 2px;
}

.search-2Mwzzq .DraftEditor-root .public-DraftEditorPlaceholder-root {
color: var(--text-muted);
padding-left: 4px;
}

.search-2Mwzzq .DraftEditor-root .public-DraftEditor-content {
overflow-x: auto;
overflow-y: hidden;
}

.search-2Mwzzq .DraftEditor-root .public-DraftStyleDefault-block {
display: inline-block;
min-width: 1px;
white-space: pre;
}

.search-2Mwzzq .DraftEditor-root .public-DraftStyleDefault-block span {
min-width: 1px;
}

.searchBar-jGtisZ {
-webkit-box-sizing: border-box;
box-sizing: border-box;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: stretch;
-ms-flex-align: stretch;
align-items: stretch;
height: 24px;
width: 144px;
border-radius: 4px;
-webkit-box-shadow: none;
box-shadow: none;
cursor: text;
overflow: hidden;
padding: 0 2px;
color: var(--text-normal);
background-color: var(--background-tertiary);
}

.searchBar-jGtisZ .icon-tZMHgY {
width: 24px;
height: 24px;
}

.full-motion .searchBar-jGtisZ {
-webkit-transition: width .25s ease;
transition: width .25s ease;
}

.DraftEditor-editorContainer,
.DraftEditor-root,
.public-DraftEditor-content {
height: inherit;
text-align: initial;
}

.public-DraftEditor-content[contenteditable=true] {
-webkit-user-modify: read-write-plaintext-only;
}

.DraftEditor-root {
position: relative;
}

.DraftEditor-editorContainer {
background-color: hsla(0, 0%, 100%, 0);
border-left: .1px solid transparent;
position: relative;
z-index: 1;
}

.public-DraftEditorPlaceholder-root {
color: #9197a3;
position: absolute;
z-index: 1;
}

.public-DraftStyleDefault-block {
position: relative;
white-space: pre-wrap;
}

.public-DraftStyleDefault-ltr {
direction: ltr;
text-align: left;
}

.search-39IXmY {
margin: 0 8px;
}

.wrapper-NhbLHG {
padding: 1px 0;
overflow: visible;
position: relative;
}

.typeThread-2Aqh6X .content-1gYQeQ {
margin-left: 36px;
padding: 0 6px;
}

.wrapper-NhbLHG.modeSelected-3DmyhH {
cursor: default;
}

.icon-2W8DHg {
display: block;
width: 20px;
height: 20px;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
}

.iconContainer-21RCa3 {
position: relative;
margin-right: 6px;
}

.content-1gYQeQ {
position: relative;
-webkit-box-sizing: border-box;
box-sizing: border-box;
padding: 0 8px;
margin-left: 8px;
border-radius: 4px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
}

.content-1gYQeQ:active {
-webkit-transform: translateZ(0);
transform: translateZ(0);
}

.mainContent-20q_Hp {
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
-webkit-box-sizing: border-box;
box-sizing: border-box;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
min-width: 0;
padding: 6px 0;
cursor: pointer;
}

.mainContent-20q_Hp:before {
content: "";
display: block;
position: absolute;
top: -1px;
right: 0;
bottom: -1px;
left: 0;
}

.name-28HaxV {
font-size: 16px;
line-height: 20px;
font-weight: 500;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
white-space: normal;
}

.channelName-3KPsGw {
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}

.children-1MGS9G {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
}

.modeSelected-3DmyhH .icon-2W8DHg,
.modeSelected-3DmyhH:hover .icon-2W8DHg {
color: var(--channel-icon);
}

.wrapper-NhbLHG:hover .content-1gYQeQ {
background-color: var(--background-modifier-hover);
}

.wrapper-NhbLHG:active .content-1gYQeQ {
background-color: var(--background-modifier-active);
}

.modeSelected-3DmyhH .content-1gYQeQ,
.modeSelected-3DmyhH:hover .content-1gYQeQ {
background-color: var(--background-modifier-selected);
}

.icon-2W8DHg {
color: var(--channel-icon);
}

.name-28HaxV {
color: var(--channels-default);
}

.wrapper-NhbLHG:hover .name-28HaxV {
color: var(--interactive-hover);
}

.modeSelected-3DmyhH .name-28HaxV,
.modeSelected-3DmyhH:hover .name-28HaxV {
color: var(--interactive-active);
}

@media (max-width:485px) {
.modeSelected-3DmyhH .content-1gYQeQ {
background-color: unset;
}
}

.containerDefault-3TQ5YN {
position: relative;
padding-top: 16px;
}

.containerDefault-3TQ5YN:active {
-webkit-transform: translateZ(0);
transform: translateZ(0);
}

.addButton-2mlqCW {
width: 18px;
height: 18px;
display: none;
}

.addButton-2mlqCW.forceVisible-14yqh4,
.iconVisibility-3pLDEs:hover .addButton-2mlqCW {
display: block;
}

.addButton-2mlqCW:focus {
display: block;
position: relative;
}

.addButtonIcon-3rJeaD:hover {
color: var(--interactive-hover);
}

.addButtonIcon-3rJeaD:active {
-webkit-transform: translateY(.5px);
transform: translateY(.5px);
color: var(--interactive-active);
}

.wrapper-1S43wv {
position: relative;
-webkit-box-sizing: border-box;
box-sizing: border-box;
height: 24px;
padding-right: 8px;
padding-left: 16px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
cursor: default;
color: var(--channels-default);
}

.clickable-2AoIYN {
cursor: pointer;
}

.children-3MeUvj {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
}

.children-3MeUvj:empty {
display: none;
}

.mainContent-uDGa6R {
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
overflow: hidden;
}

.mainContent-uDGa6R:before {
content: "";
display: block;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
}

.icon-3zI3d2 {
position: absolute;
left: 2px;
top: 6px;
width: 12px;
height: 12px;
}

.wrapper-1S43wv:hover .icon-3zI3d2,
.wrapper-1S43wv:hover .name-3BUDLf {
color: var(--interactive-hover);
}

.containerDefault-YUSmu3 {
position: relative;
-webkit-transition: opacity .2s ease-in-out;
transition: opacity .2s ease-in-out;
}

.iconBase-2G48Fc {
position: relative;
cursor: pointer;
line-height: 0;
}

.iconItem-1EjiK0 {
display: none;
padding: 6px 2px;
}

.containerDefault-YUSmu3.selected-2TbFuo .iconItem-1EjiK0,
.iconVisibility-vptxma:focus .iconItem-1EjiK0 {
display: block;
}

.iconItem-1EjiK0:focus {
display: block;
position: relative;
}

.actionIcon-2sw4Sl {
width: 16px;
height: 16px;
display: block;
}

.actionIcon-2sw4Sl:active {
-webkit-transform: translateY(.5px);
transform: translateY(.5px);
}

.channelInfo-3jN1ay {
display: block;
margin-left: 12px;
}

.containerDefault-YUSmu3.selected-2TbFuo .channelInfo-3jN1ay,
.iconVisibility-vptxma:focus .channelInfo-3jN1ay {
display: none;
}

.actionIcon-2sw4Sl {
color: var(--interactive-normal);
}

.iconItem-1EjiK0:hover .actionIcon-2sw4Sl {
color: var(--interactive-hover);
}

.actionIcon-2sw4Sl:active {
color: var(--interactive-active);
}

@media (hover:hover) {
.iconVisibility-vptxma:hover .iconItem-1EjiK0 {
display: block;
}

.iconVisibility-vptxma:hover .channelInfo-3jN1ay {
display: none;
}
}

.container-1Bj0eq {
position: relative;
}

.spine-29OFwR {
color: var(--interactive-muted);
left: 22px;
position: absolute;
top: 8px;
}

.container-1qIct8 {
position: absolute;
z-index: 2;
overflow: hidden;
padding: 8px;
height: 24px;
pointer-events: none;
}

.bar-2eAyLE {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
position: relative;
font-size: 12px;
line-height: 16px;
font-family: var(--font-display);
font-weight: 500;
color: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
height: 24px;
cursor: pointer;
text-transform: uppercase;
border-radius: 12px;
pointer-events: auto;
-webkit-box-shadow: 0 2px 6px hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, .24);
box-shadow: 0 2px 6px hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, .24);
-webkit-app-region: no-drag;
}

.active-334r9u:active {
top: 1px;
}

.unread-2wipsx {
background-color: var(--background-accent);
opacity: .9;
}

.unread-2wipsx:active,
.unread-2wipsx:hover {
opacity: 1;
}

.mention-3XBnnZ {
background-color: var(--status-danger);
opacity: .9;
}

.mention-3XBnnZ:hover {
opacity: 1;
}

.mention-3XBnnZ:active {
opacity: 1;
background-color: hsl(359, calc(var(--saturation-factor, 1)*66.7%), 54.1%);
}

.text-2GsXbW {
display: block;
}

.scroller-1ox3I2 {
z-index: 1;
padding-right: 8px;
}

.unread-XRkyaQ {
left: 0;
right: 0;
}

.unreadBar-elBRZx:before {
content: "";
position: absolute;
top: 0;
left: -8px;
right: -8px;
bottom: 0;
}

.unreadBottom-3Ojk6R {
bottom: 0;
}

.unreadBottom-3Ojk6R .unreadBar-elBRZx:before {
bottom: -8px;
}

.positionedContainer-W9XtGp {
position: relative;
}

.unreadTop-1DJtGv {
top: 0;
}

.unreadTop-1DJtGv .unreadBar-elBRZx:before {
top: -8px;
}

.sectionDivider-189lqb {
height: 1px;
width: 100%;
margin-top: 15px;
margin-left: 8px;
background-color: var(--background-modifier-accent);
}

.container-1-ERn5 {
position: relative;
}

.clickable-vvKY2q {
cursor: pointer;
}

.header-3OsQeK {
position: relative;
font-family: var(--font-display);
font-weight: 400;
padding: 12px 16px;
-webkit-box-sizing: border-box;
box-sizing: border-box;
z-index: 3;
-webkit-transition: background-color .1s linear;
transition: background-color .1s linear;
-webkit-box-shadow: var(--elevation-low);
box-shadow: var(--elevation-low);
}

.headerContent-2SNbie {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
color: var(--header-primary);
}

.primaryInfo-2ocY3v {
height: 24px;
}

.headerButton-1nmDZ3 {
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
pointer-events: none;
}

.headerChildren-2qV9P8 {
position: relative;
z-index: 4;
}

.clickable-vvKY2q .header-3OsQeK:hover {
background-color: var(--background-modifier-hover);
}

.name-3Uvkvr {
font-size: 15px;
line-height: 20px;
font-weight: 500;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
-webkit-box-flex: 1;
-ms-flex: 1;
flex: 1;
z-index: 1;
}

.container-1NXEtd {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-align: stretch;
-ms-flex-align: stretch;
align-items: stretch;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
min-height: 0;
position: relative;
background-color: var(--background-secondary);
}

.wrapper-z5ab_q {
position: relative;
overflow: hidden;
width: 8px;
height: 48px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
contain: layout size;
}

.item-2LIpTv {
position: absolute;
display: block;
width: 8px;
border-radius: 0 4px 4px 0;
margin-left: -4px;
background-color: var(--header-primary);
}

.wrapper-28eC3z {
-webkit-box-sizing: border-box;
box-sizing: border-box;
position: relative;
width: 48px;
height: 48px;
cursor: pointer;
}

.wrapperSimple-Js2rIO {
border-radius: 50%;
overflow: hidden;
}

.svg-2zuE5p {
-webkit-box-sizing: border-box;
box-sizing: border-box;
position: absolute;
top: 0;
left: 0;
width: 48px;
height: 48px;
}

.lowerBadge-3WTshO {
bottom: 0;
}

.lowerBadge-3WTshO {
pointer-events: none;
position: absolute;
right: 0;
}

.wrapper-3kah-n {
-webkit-transition: background-color .1s ease-out, color .1s ease-out;
transition: background-color .1s ease-out, color .1s ease-out;
}

.childWrapper-1j_1ub,
.wrapper-3kah-n {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
width: 48px;
height: 48px;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
}

.childWrapper-1j_1ub {
-webkit-transition: background-color .15s ease-out, color .15s ease-out;
transition: background-color .15s ease-out, color .15s ease-out;
background-color: var(--background-primary);
color: var(--text-normal);
}

.wrapper-3kah-n:hover .childWrapper-1j_1ub {
color: hsl(0, calc(var(--saturation-factor, 1)*0%), 100%);
background-color: var(--brand-experiment);
}

.icon-3AqZ2e {
display: block;
width: 48px;
height: 48px;
-o-object-fit: cover;
object-fit: cover;
pointer-events: none;
}

.icon-3AqZ2e:before {
content: "";
display: block;
width: 100%;
height: 100%;
background-color: var(--background-modifier-accent);
}

.listItemWrapper-3d87LP:active {
-webkit-transform: translateY(1px) translateZ(0);
transform: translateY(1px) translateZ(0);
}

.listItem-3SmSlK {
position: relative;
margin: 0 0 8px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
width: 72px;
}

.tutorialContainer-2jwoiB {
position: relative;
}

.circleIconButton-1VxDrg {
cursor: pointer;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-sizing: border-box;
box-sizing: border-box;
width: 48px;
height: 48px;
-webkit-transition: color .15s ease-out, background-color .15s ease-out;
transition: color .15s ease-out, background-color .15s ease-out;
color: hsl(139, calc(var(--saturation-factor, 1)*47.3%), 43.9%);
background-color: var(--background-primary);
}

.circleIcon-3489FI {
width: 24px;
height: 24px;
}

.pill-1NRFie {
position: absolute;
top: 0;
left: 0;
}

.wrapper-3XVBev {
position: absolute;
top: -16px;
bottom: -4px;
left: 0;
right: 0;
pointer-events: none;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-align: stretch;
-ms-flex-align: stretch;
align-items: stretch;
}

.target-1eRTCg {
-webkit-box-flex: 1;
-ms-flex: 1 0 50%;
flex: 1 0 50%;
}

.centerTarget-S6BLFQ {
-webkit-box-flex: 1;
-ms-flex: 1 0 50%;
flex: 1 0 50%;
}

.folderEndWrapper-3KO8ks {
position: relative;
height: 0;
}

.folderTarget-ivrfeG {
position: absolute;
top: -24px;
left: 0;
right: 0;
height: 24px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
pointer-events: none;
}

.pill-L_aLMQ {
position: absolute;
top: 0;
left: 0;
}

.homeIcon-r0w4ny {
display: block;
width: 28px;
height: 20px;
}

.tutorialContainer-1pL9QS {
position: relative;
}

.wrapper-38slSD {
position: relative;
width: 72px;
}

.wrapper-38slSD:active {
-webkit-transform: translateZ(0);
transform: translateZ(0);
}

.expandedFolderBackground-1kSAf6 {
position: absolute;
top: 0;
left: 12px;
bottom: 8px;
width: 48px;
border-radius: 24px;
-webkit-transition: background-color .15s ease-out;
transition: background-color .15s ease-out;
background-color: var(--background-secondary);
}

.expandedFolderBackground-1kSAf6.collapsed-uGXEbi {
background-color: transparent;
}

.folderIconWrapper-1oRIZr {
border-radius: 16px;
overflow: hidden;
}

.folder-241Joy,
.folderIconWrapper-1oRIZr {
width: 48px;
height: 48px;
-webkit-transition: background-color .15s ease-out;
transition: background-color .15s ease-out;
}

.folder-241Joy {
cursor: pointer;
background-color: var(--background-secondary);
}

.closedFolderIconWrapper-3tRb2d {
width: 48px;
height: 48px;
padding: 4px;
-webkit-box-sizing: border-box;
box-sizing: border-box;
display: grid;
grid-template: 1fr 1fr/1fr 1fr;
justify-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
}

.expandedFolderIconWrapper-3RwQpD {
width: 48px;
height: 48px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
}

.guildIcon-2I5sfu {
overflow: hidden;
position: static;
}

.blobContainer-ikKyFs:active {
position: relative;
-webkit-transform: translateY(1px) translateZ(0);
transform: translateY(1px) translateZ(0);
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
}

.pill-2RsI5Q {
position: absolute;
left: 0;
top: 0;
}

.guildSeparator-a4uisj {
height: 2px;
width: 32px;
border-radius: 1px;
background-color: var(--background-modifier-accent);
}

.wrapper-1_HaEi {
overflow: hidden;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
width: 72px;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-ms-flex-negative: 0;
flex-shrink: 0;
position: relative;
background-color: var(--background-tertiary);
}

.tree-3agP2X {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
height: 100%;
position: relative;
}

.scroller-3X7KbA {
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
padding: 12px 0 0;
background-color: var(--background-tertiary);
contain: layout size;
}

.unreadMentionsIndicatorBottom-3RJMnQ,
.unreadMentionsIndicatorTop-2bTgUU {
position: absolute;
left: 0;
right: 0;
z-index: 10;
overflow: hidden;
padding: 8px;
height: 40px;
pointer-events: none;
width: 72px;
-webkit-box-sizing: border-box;
box-sizing: border-box;
}

.unreadMentionsIndicatorTop-2bTgUU {
padding-top: 8px;
}

.unreadMentionsIndicatorBottom-3RJMnQ {
padding-bottom: 8px;
}

.unreadMentionsBar-ZXXoOH:before {
position: absolute;
top: 0;
left: -8px;
right: -8px;
bottom: 0;
content: "";
}

.unreadMentionsIndicatorTop-2bTgUU {
top: 0;
}

.unreadMentionsIndicatorTop-2bTgUU .unreadMentionsBar-ZXXoOH:before {
top: -8px;
}

.unreadMentionsIndicatorBottom-3RJMnQ {
bottom: 0;
}

.unreadMentionsIndicatorBottom-3RJMnQ .unreadMentionsBar-ZXXoOH:before {
bottom: -8px;
}

.pictureInPicture-1GQX91 {
position: absolute;
top: 0;
left: 0;
}

.icon-1ELUnB {
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
}

.container-2o3qEW {
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
background: var(--background-secondary);
height: 100%;
}

.container-2o3qEW,
.membersWrap-3NUR2t {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
}

.membersWrap-3NUR2t {
min-width: 240px;
position: relative;
max-height: 100%;
}

.members-3WRCEx {
width: 240px;
padding: 0 0 20px;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
height: auto;
}

.members-3WRCEx,
.members-3WRCEx>div {
background-color: var(--background-secondary);
}

.membersGroup-2eiWxl {
padding: 24px 8px 0 16px;
height: 40px;
}

.hiddenMembers-8kpYM0 {
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
}

@media (max-width:485px) {
.membersWrap-3NUR2t {
position: relative;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
height: 100%;
}

.members-3WRCEx,
.membersWrap-3NUR2t {
min-width: 100%;
}
}

.button-12Fmur {
line-height: 0;
width: 32px;
height: 32px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
border-radius: 4px;
position: relative;
color: var(--interactive-normal);
}

.button-12Fmur.enabled-9OeuTA:hover {
color: var(--interactive-hover);
background-color: var(--background-modifier-selected);
}

.subtext-2HDqJ7 {
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
color: var(--header-secondary);
line-height: 13px;
}

.title-338goq {
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
color: var(--header-primary);
line-height: 18px;
font-weight: 600;
}

.container-YkUktl {
height: 52px;
font-size: 14px;
font-weight: 500;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
padding: 0 8px;
margin-bottom: 1px;
}

.container-YkUktl,
.container-YkUktl .avatar-1EWyVD {
-ms-flex-negative: 0;
flex-shrink: 0;
}

.container-YkUktl .avatar-1EWyVD {
cursor: pointer;
}

.container-YkUktl .avatar-1EWyVD:hover {
opacity: .8;
}

.avatarWrapper-1B9FTW {
margin-right: 8px;
}

.nameTag-sc-gpq {
-webkit-user-select: text;
-moz-user-select: text;
-ms-user-select: text;
user-select: text;
-webkit-box-flex: 1;
-ms-flex-positive: 1;
flex-grow: 1;
margin-right: 4px;
min-width: 0;
}

.nameTag-sc-gpq.canCopy-IgTwyV {
cursor: pointer;
}

.usernameContainer-3PPkWq {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
}

.strikethrough-2Kl6HF {
color: var(--status-danger);
}

.withTagAsButton-OsgQ9L {
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
margin-left: -2px;
min-width: 120px;
padding-left: 2px;
}

.withTagAsButton-OsgQ9L:hover {
background-color: var(--background-modifier-selected);
border-radius: 4px;
color: var(--interactive-hover);
}

.withTagAsButton-OsgQ9L .nameTag-sc-gpq {
padding-bottom: 4px;
padding-left: 8px;
padding-top: 4px;
}

.withTagAsButton-OsgQ9L .avatar-1EWyVD:hover {
opacity: 1;
}

.wrapper-3Hk9OB {
position: relative;
overflow: visible;
}

.container-1eFtFS {
position: relative;
overflow: hidden;
width: 100%;
height: 100%;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
}

.guilds-2JjMmN {
position: relative;
width: 72px;
-ms-flex-negative: 0;
flex-shrink: 0;
}

.base-2jDfDU {
flex-direction: column;
position: relative;
-webkit-box-flex: 1;
-ms-flex-positive: 1;
flex-grow: 1;
}

.base-2jDfDU,
.sidebar-1tnWFu {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
overflow: hidden;
}

.sidebar-1tnWFu {
flex-direction: column;
min-height: 0;
width: 240px;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
background: var(--background-secondary);
}

.panels-3wFtMD {
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
background-color: var(--background-secondary-alt);
z-index: 1;
}

.content-1SgpWY {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: stretch;
-ms-flex-align: stretch;
align-items: stretch;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
min-width: 0;
min-height: 0;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
}

.layers-OrUESM {
position: relative;
overflow: hidden;
}

.layers-OrUESM>.layer-86YKbF {
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
overflow: hidden;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
}

.bg-1QIAus {
background-color: var(--background-tertiary);
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
}

.layer-86YKbF {
background-color: var(--background-primary);
}

.layer-86YKbF.baseLayer-W6S8cY {
background-color: transparent;
}

/*! CSS Used from: Embedded */
.erd_scroll_detection_container>div::-webkit-scrollbar {
display: none;
}

.erd_scroll_detection_container_animation_active {
-webkit-animation-duration: 0.1s;
animation-duration: 0.1s;
-webkit-animation-name: erd_scroll_detection_container_animation;
animation-name: erd_scroll_detection_container_animation;
}

/*! CSS Used keyframes */
@-webkit-keyframes uploadTextFadeIn-3n1jvq {

0%,
8.334% {
-webkit-transform: translate3d(0, -4px, 0);
transform: translate3d(0, -4px, 0);
opacity: 0;
}

45.8%,
to {
-webkit-transform: translateZ(0);
transform: translateZ(0);
opacity: 1;
}
}

@keyframes uploadTextFadeIn-3n1jvq {

0%,
8.334% {
-webkit-transform: translate3d(0, -4px, 0);
transform: translate3d(0, -4px, 0);
opacity: 0;
}

45.8%,
to {
-webkit-transform: translateZ(0);
transform: translateZ(0);
opacity: 1;
}
}

@-webkit-keyframes uploadModalBounce-12JH4d {
0% {
-webkit-transform: translateZ(0) scale(.99);
transform: translateZ(0) scale(.99);
}

15%,
to {
top: -10px;
left: -10px;
right: -10px;
bottom: -10px;
}

33.3334% {
-webkit-transform: translateZ(0) scale(1.005);
transform: translateZ(0) scale(1.005);
}

54.1667% {
-webkit-transform: translateZ(0) scale(.995);
transform: translateZ(0) scale(.995);
}

70.8334%,
to {
-webkit-transform: translateZ(0) scale(1);
transform: translateZ(0) scale(1);
}
}

@keyframes uploadModalBounce-12JH4d {
0% {
-webkit-transform: translateZ(0) scale(.99);
transform: translateZ(0) scale(.99);
}

15%,
to {
top: -10px;
left: -10px;
right: -10px;
bottom: -10px;
}

33.3334% {
-webkit-transform: translateZ(0) scale(1.005);
transform: translateZ(0) scale(1.005);
}

54.1667% {
-webkit-transform: translateZ(0) scale(.995);
transform: translateZ(0) scale(.995);
}

70.8334%,
to {
-webkit-transform: translateZ(0) scale(1);
transform: translateZ(0) scale(1);
}
}

@-webkit-keyframes uploadIconAnimateInLeft-18-7XG {
0% {
-webkit-transform: translateZ(0) rotate(0deg);
transform: translateZ(0) rotate(0deg);
opacity: .6;
}

4.1667% {
-webkit-transform: translate3d(0, -1px, 0) rotate(0deg);
transform: translate3d(0, -1px, 0) rotate(0deg);
opacity: .68;
}

30.8334% {
-webkit-transform: translate3d(-48px, -10px, 0) rotate(-36deg);
transform: translate3d(-48px, -10px, 0) rotate(-36deg);
opacity: 1;
}

58.3334% {
-webkit-transform: translate3d(-41px, -3px, 0) rotate(-28deg);
transform: translate3d(-41px, -3px, 0) rotate(-28deg);
opacity: 1;
}

75% {
-webkit-transform: translate3d(-45px, -8px, 0) rotate(-32deg);
transform: translate3d(-45px, -8px, 0) rotate(-32deg);
opacity: 1;
}

83.3334% {
-webkit-transform: translate3d(-44px, -7px, 0) rotate(-30.7deg);
transform: translate3d(-44px, -7px, 0) rotate(-30.7deg);
opacity: 1;
}

to {
-webkit-transform: translate3d(-44px, -6px, 0) rotate(-30deg);
transform: translate3d(-44px, -6px, 0) rotate(-30deg);
opacity: 1;
}
}

@keyframes uploadIconAnimateInLeft-18-7XG {
0% {
-webkit-transform: translateZ(0) rotate(0deg);
transform: translateZ(0) rotate(0deg);
opacity: .6;
}

4.1667% {
-webkit-transform: translate3d(0, -1px, 0) rotate(0deg);
transform: translate3d(0, -1px, 0) rotate(0deg);
opacity: .68;
}

30.8334% {
-webkit-transform: translate3d(-48px, -10px, 0) rotate(-36deg);
transform: translate3d(-48px, -10px, 0) rotate(-36deg);
opacity: 1;
}

58.3334% {
-webkit-transform: translate3d(-41px, -3px, 0) rotate(-28deg);
transform: translate3d(-41px, -3px, 0) rotate(-28deg);
opacity: 1;
}

75% {
-webkit-transform: translate3d(-45px, -8px, 0) rotate(-32deg);
transform: translate3d(-45px, -8px, 0) rotate(-32deg);
opacity: 1;
}

83.3334% {
-webkit-transform: translate3d(-44px, -7px, 0) rotate(-30.7deg);
transform: translate3d(-44px, -7px, 0) rotate(-30.7deg);
opacity: 1;
}

to {
-webkit-transform: translate3d(-44px, -6px, 0) rotate(-30deg);
transform: translate3d(-44px, -6px, 0) rotate(-30deg);
opacity: 1;
}
}

@-webkit-keyframes uploadIconAnimateInMiddle-TTp5Cg {
0% {
-webkit-transform: translateZ(0);
transform: translateZ(0);
}

30.8334% {
-webkit-transform: translate3d(0, -10px, 0);
transform: translate3d(0, -10px, 0);
}

58.3334% {
-webkit-transform: translate3d(0, -3px, 0);
transform: translate3d(0, -3px, 0);
}

75% {
-webkit-transform: translate3d(0, -8px, 0);
transform: translate3d(0, -8px, 0);
}

83.3334% {
-webkit-transform: translate3d(0, -7px, 0);
transform: translate3d(0, -7px, 0);
}

to {
-webkit-transform: translate3d(0, -6px, 0);
transform: translate3d(0, -6px, 0);
}
}

@keyframes uploadIconAnimateInMiddle-TTp5Cg {
0% {
-webkit-transform: translateZ(0);
transform: translateZ(0);
}

30.8334% {
-webkit-transform: translate3d(0, -10px, 0);
transform: translate3d(0, -10px, 0);
}

58.3334% {
-webkit-transform: translate3d(0, -3px, 0);
transform: translate3d(0, -3px, 0);
}

75% {
-webkit-transform: translate3d(0, -8px, 0);
transform: translate3d(0, -8px, 0);
}

83.3334% {
-webkit-transform: translate3d(0, -7px, 0);
transform: translate3d(0, -7px, 0);
}

to {
-webkit-transform: translate3d(0, -6px, 0);
transform: translate3d(0, -6px, 0);
}
}

@-webkit-keyframes uploadIconAnimateInRight-3zrvNl {
0% {
-webkit-transform: translateZ(0) rotate(0deg);
transform: translateZ(0) rotate(0deg);
opacity: .6;
}

4.1667% {
-webkit-transform: translate3d(0, -1px, 0) rotate(0deg);
transform: translate3d(0, -1px, 0) rotate(0deg);
opacity: .68;
}

30.8334% {
-webkit-transform: translate3d(48px, -10px, 0) rotate(36deg);
transform: translate3d(48px, -10px, 0) rotate(36deg);
opacity: 1;
}

58.3334% {
-webkit-transform: translate3d(41px, -3px, 0) rotate(28deg);
transform: translate3d(41px, -3px, 0) rotate(28deg);
opacity: 1;
}

75% {
-webkit-transform: translate3d(45px, -8px, 0) rotate(32deg);
transform: translate3d(45px, -8px, 0) rotate(32deg);
opacity: 1;
}

83.3334% {
-webkit-transform: translate3d(44px, -7px, 0) rotate(30.7deg);
transform: translate3d(44px, -7px, 0) rotate(30.7deg);
opacity: 1;
}

to {
-webkit-transform: translate3d(44px, -6px, 0) rotate(30deg);
transform: translate3d(44px, -6px, 0) rotate(30deg);
opacity: 1;
}
}

@keyframes uploadIconAnimateInRight-3zrvNl {
0% {
-webkit-transform: translateZ(0) rotate(0deg);
transform: translateZ(0) rotate(0deg);
opacity: .6;
}

4.1667% {
-webkit-transform: translate3d(0, -1px, 0) rotate(0deg);
transform: translate3d(0, -1px, 0) rotate(0deg);
opacity: .68;
}

30.8334% {
-webkit-transform: translate3d(48px, -10px, 0) rotate(36deg);
transform: translate3d(48px, -10px, 0) rotate(36deg);
opacity: 1;
}

58.3334% {
-webkit-transform: translate3d(41px, -3px, 0) rotate(28deg);
transform: translate3d(41px, -3px, 0) rotate(28deg);
opacity: 1;
}

75% {
-webkit-transform: translate3d(45px, -8px, 0) rotate(32deg);
transform: translate3d(45px, -8px, 0) rotate(32deg);
opacity: 1;
}

83.3334% {
-webkit-transform: translate3d(44px, -7px, 0) rotate(30.7deg);
transform: translate3d(44px, -7px, 0) rotate(30.7deg);
opacity: 1;
}

to {
-webkit-transform: translate3d(44px, -6px, 0) rotate(30deg);
transform: translate3d(44px, -6px, 0) rotate(30deg);
opacity: 1;
}
}

@-webkit-keyframes erd_scroll_detection_container_animation {
0% {
opacity: 1;
}

50% {
opacity: 0;
}

100% {
opacity: 1;
}
}

@keyframes erd_scroll_detection_container_animation {
0% {
opacity: 1;
}

50% {
opacity: 0;
}

100% {
opacity: 1;
}
}
</style>
</head>

<body>
<div id="app-mount" class="appMount-2yBXZl"><svg viewBox="0 0 1 1" aria-hidden="true" style="position: absolute; pointer-events: none; top: -1px; left: -1px; width: 1px; height: 1px;">
<mask id="svg-mask-squircle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<path fill="white" d="M0 0.464C0 0.301585 0 0.220377 0.0316081 0.158343C0.0594114 0.103776 0.103776 0.0594114 0.158343 0.0316081C0.220377 0 0.301585 0 0.464 0H0.536C0.698415 0 0.779623 0 0.841657 0.0316081C0.896224 0.0594114 0.940589 0.103776 0.968392 0.158343C1 0.220377 1 0.301585 1 0.464V0.536C1 0.698415 1 0.779623 0.968392 0.841657C0.940589 0.896224 0.896224 0.940589 0.841657 0.968392C0.779623 1 0.698415 1 0.536 1H0.464C0.301585 1 0.220377 1 0.158343 0.968392C0.103776 0.940589 0.0594114 0.896224 0.0316081 0.841657C0 0.779623 0 0.698415 0 0.536V0.464Z"></path>
</mask>
<mask id="svg-mask-header-bar-badge" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="1" height="1"></rect>
<circle fill="black" cx="0.75" cy="0.75" r="0.25"></circle>
</mask>
<mask id="svg-mask-voice-user-summary-item" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" width="1" height="1"></rect>
<circle fill="black" cx="1.2083333333333333" cy="0.5" r="0.5416666666666666"></circle>
</mask>
<mask id="svg-mask-vertical-fade" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<linearGradient id="svg-mask-vertical-fade-gradient" gradientTransform="rotate(90)" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="white"></stop>
<stop offset="100%" stop-color="black"></stop>
</linearGradient>
<rect fill="url(#svg-mask-vertical-fade-gradient)" x="0" y="0" width="1" height="1"></rect>
</mask>
<mask id="svg-mask-panel-button" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="1" height="1"></rect>
<circle fill="black" cx="0.75" cy="0.75" r="0.25"></circle>
</mask>
<mask id="svg-mask-channel-call-control-button" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<circle fill="black" cx="0.8214285714285714" cy="0.8214285714285714" r="0.25"></circle>
</mask>
<mask id="svg-mask-channel-call-control-button-badge-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.6428571428571429" y="-0.07142857142857142" width="0.42857142857142855" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427"></rect>
</mask>
<mask id="svg-mask-channel-call-control-button-badge-22" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.5357142857142857" y="-0.07142857142857142" width="0.5357142857142857" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427"></rect>
</mask>
<mask id="svg-mask-channel-call-control-button-badge-29" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.4107142857142857" y="-0.07142857142857142" width="0.6607142857142857" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427"></rect>
</mask>
<mask id="svg-mask-avatar-default" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
</mask>
<mask id="svg-mask-avatar-status-round-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<circle fill="black" cx="0.8125" cy="0.8125" r="0.3125"></circle>
</mask>
<mask id="svg-mask-avatar-decoration-status-round-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<circle fill="black" cx="0.7604166666666667" cy="0.7604166666666667" r="0.2604166666666667"></circle>
</mask>
<mask id="svg-mask-avatar-status-mobile-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.5" y="0.3125" width="0.625" height="0.8125" rx="0.1625" ry="0.1625"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-mobile-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.5" y="0.34375" width="0.5208333333333334" height="0.6770833333333334" rx="0.1625" ry="0.1625"></rect>
</mask>
<mask id="svg-mask-avatar-status-typing-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.21875" y="0.5" width="1.1875" height="0.625" rx="0.3125" ry="0.3125"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-typing-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.265625" y="0.5" width="0.9895833333333334" height="0.5208333333333334" rx="0.0968967013888889" ry="0.0968967013888889"></rect>
</mask>
<mask id="svg-mask-avatar-status-round-20" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<circle fill="black" cx="0.85" cy="0.85" r="0.25"></circle>
</mask>
<mask id="svg-mask-avatar-decoration-status-round-20" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<circle fill="black" cx="0.7916666666666667" cy="0.7916666666666667" r="0.20833333333333334"></circle>
</mask>
<mask id="svg-mask-avatar-status-mobile-20" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.6" y="0.45" width="0.5" height="0.65" rx="0.13" ry="0.13"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-mobile-20" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.5833333333333333" y="0.45833333333333337" width="0.4166666666666667" height="0.5416666666666667" rx="0.13" ry="0.13"></rect>
</mask>
<mask id="svg-mask-avatar-status-typing-20" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.375" y="0.6" width="0.95" height="0.5" rx="0.25" ry="0.25"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-typing-20" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.3958333333333333" y="0.5833333333333333" width="0.7916666666666666" height="0.4166666666666667" rx="0.0920138888888889" ry="0.0920138888888889"></rect>
</mask>
<mask id="svg-mask-avatar-status-round-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<circle fill="black" cx="0.8333333333333334" cy="0.8333333333333334" r="0.2916666666666667"></circle>
</mask>
<mask id="svg-mask-avatar-decoration-status-round-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<circle fill="black" cx="0.7777777777777779" cy="0.7777777777777779" r="0.24305555555555558"></circle>
</mask>
<mask id="svg-mask-avatar-status-mobile-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.5416666666666666" y="0.375" width="0.5833333333333334" height="0.75" rx="0.15" ry="0.15"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-mobile-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.5347222222222222" y="0.3958333333333333" width="0.48611111111111116" height="0.625" rx="0.15" ry="0.15"></rect>
</mask>
<mask id="svg-mask-avatar-status-typing-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.2916666666666667" y="0.5416666666666666" width="1.0833333333333333" height="0.5833333333333334" rx="0.2916666666666667" ry="0.2916666666666667"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-typing-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.3263888888888889" y="0.5347222222222222" width="0.9027777777777778" height="0.48611111111111116" rx="0.091772762345679" ry="0.091772762345679"></rect>
</mask>
<mask id="svg-mask-avatar-status-round-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<circle fill="black" cx="0.84375" cy="0.84375" r="0.25"></circle>
</mask>
<mask id="svg-mask-avatar-decoration-status-round-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<circle fill="black" cx="0.7864583333333334" cy="0.7864583333333334" r="0.20833333333333334"></circle>
</mask>
<mask id="svg-mask-avatar-status-mobile-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.59375" y="0.4375" width="0.5" height="0.65625" rx="0.13125" ry="0.13125"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-mobile-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.578125" y="0.4479166666666667" width="0.4166666666666667" height="0.546875" rx="0.13125" ry="0.13125"></rect>
</mask>
<mask id="svg-mask-avatar-status-typing-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.359375" y="0.59375" width="0.96875" height="0.5" rx="0.25" ry="0.25"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-typing-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.3828125" y="0.578125" width="0.8072916666666667" height="0.4166666666666667" rx="0.08875868055555558" ry="0.08875868055555558"></rect>
</mask>
<mask id="svg-mask-avatar-status-round-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<circle fill="black" cx="0.85" cy="0.85" r="0.25"></circle>
</mask>
<mask id="svg-mask-avatar-decoration-status-round-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<circle fill="black" cx="0.7916666666666667" cy="0.7916666666666667" r="0.20833333333333334"></circle>
</mask>
<mask id="svg-mask-avatar-status-mobile-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.6" y="0.45" width="0.5" height="0.65" rx="0.13" ry="0.13"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-mobile-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.5833333333333333" y="0.45833333333333337" width="0.4166666666666667" height="0.5416666666666667" rx="0.13" ry="0.13"></rect>
</mask>
<mask id="svg-mask-avatar-status-typing-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.375" y="0.6" width="0.95" height="0.5" rx="0.25" ry="0.25"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-typing-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.3958333333333333" y="0.5833333333333333" width="0.7916666666666666" height="0.4166666666666667" rx="0.0876736111111111" ry="0.0876736111111111"></rect>
</mask>
<mask id="svg-mask-avatar-status-round-56" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<circle fill="black" cx="0.8392857142857143" cy="0.8392857142857143" r="0.19642857142857142"></circle>
</mask>
<mask id="svg-mask-avatar-decoration-status-round-56" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<circle fill="black" cx="0.7827380952380953" cy="0.7827380952380953" r="0.1636904761904762"></circle>
</mask>
<mask id="svg-mask-avatar-status-mobile-56" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.6428571428571429" y="0.5178571428571429" width="0.39285714285714285" height="0.5178571428571429" rx="0.10357142857142858" ry="0.10357142857142858"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-mobile-56" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.6190476190476191" y="0.5148809523809524" width="0.3273809523809524" height="0.4315476190476191" rx="0.10357142857142858" ry="0.10357142857142858"></rect>
</mask>
<mask id="svg-mask-avatar-status-typing-56" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.45535714285714285" y="0.6428571428571429" width="0.7678571428571429" height="0.39285714285714285" rx="0.19642857142857142" ry="0.19642857142857142"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-typing-56" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.46279761904761907" y="0.6190476190476191" width="0.6398809523809524" height="0.3273809523809524" rx="0.08576920351473921" ry="0.08576920351473921"></rect>
</mask>
<mask id="svg-mask-avatar-status-round-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<circle fill="black" cx="0.85" cy="0.85" r="0.175"></circle>
</mask>
<mask id="svg-mask-avatar-decoration-status-round-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<circle fill="black" cx="0.7916666666666667" cy="0.7916666666666667" r="0.14583333333333334"></circle>
</mask>
<mask id="svg-mask-avatar-decoration-profile-status-round-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<circle fill="black" cx="0.7916666666666667" cy="0.7916666666666667" r="0.12962962962962962"></circle>
</mask>
<mask id="svg-mask-avatar-status-mobile-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.675" y="0.575" width="0.35" height="0.45" rx="0.09" ry="0.09"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-mobile-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.6458333333333334" y="0.5625" width="0.2916666666666667" height="0.375" rx="0.09" ry="0.09"></rect>
</mask>
<mask id="svg-mask-avatar-status-typing-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.525" y="0.675" width="0.65" height="0.35" rx="0.175" ry="0.175"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-typing-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.5208333333333334" y="0.6458333333333334" width="0.5416666666666667" height="0.2916666666666667" rx="0.08485243055555552" ry="0.08485243055555552"></rect>
</mask>
<mask id="svg-mask-avatar-status-round-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<circle fill="black" cx="0.8333333333333334" cy="0.8333333333333334" r="0.16666666666666666"></circle>
</mask>
<mask id="svg-mask-avatar-decoration-status-round-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<circle fill="black" cx="0.7777777777777779" cy="0.7777777777777779" r="0.1388888888888889"></circle>
</mask>
<mask id="svg-mask-avatar-status-mobile-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.6666666666666666" y="0.5666666666666667" width="0.3333333333333333" height="0.43333333333333335" rx="0.08666666666666667" ry="0.08666666666666667"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-mobile-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.6388888888888888" y="0.5555555555555556" width="0.2777777777777778" height="0.36111111111111116" rx="0.08666666666666667" ry="0.08666666666666667"></rect>
</mask>
<mask id="svg-mask-avatar-status-typing-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.5166666666666667" y="0.6666666666666666" width="0.6333333333333333" height="0.3333333333333333" rx="0.16666666666666666" ry="0.16666666666666666"></rect>
</mask>
<mask id="svg-mask-avatar-decoration-status-typing-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
<rect fill="black" x="0.513888888888889" y="0.6388888888888888" width="0.5277777777777778" height="0.2777777777777778" rx="0.08429783950617281" ry="0.08429783950617281"></rect>
</mask>
<mask id="svg-mask-status-online-mobile" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" x="0" y="0" width="1" height="1" rx="0.1875" ry="0.125"></rect>
<rect fill="black" x="0.125" y="0.16666666666666666" width="0.75" height="0.5"></rect>
<ellipse fill="black" cx="0.5" cy="0.8333333333333334" rx="0.125" ry="0.08333333333333333"></ellipse>
</mask>
<mask id="svg-mask-status-online" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
</mask>
<mask id="svg-mask-status-idle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<circle fill="black" cx="0.25" cy="0.25" r="0.375"></circle>
</mask>
<mask id="svg-mask-status-dnd" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<rect fill="black" x="0.125" y="0.375" width="0.75" height="0.25" rx="0.125" ry="0.125"></rect>
</mask>
<mask id="svg-mask-status-offline" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<circle fill="black" cx="0.5" cy="0.5" r="0.25"></circle>
</mask>
<mask id="svg-mask-status-streaming" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<polygon fill="black" points="0.35,0.25 0.78301275,0.5 0.35,0.75"></polygon>
</mask>
<mask id="svg-mask-status-typing" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" cx="0" cy="0" width="1" height="1" ry="0.5" rx="0.2"></rect>
</mask>
<mask id="svg-mask-avatar-voice-call-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
<circle fill="black" cx="0.85" cy="0.85" r="0.2"></circle>
</mask>
<mask id="svg-mask-avatar-call-icon" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5" opacity="1"></circle>
<circle fill="black" cx="0.85" cy="0.15" r="0.2"></circle>
</mask>
<mask id="svg-mask-avatar-call-icon-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<circle fill="white" cx="0.5" cy="0.5" r="0.5" opacity="0.5"></circle>
<circle fill="black" cx="0.8" cy="0.25" r="0.325"></circle>
</mask>
<mask id="svg-mask-sticker-rounded-rect" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<path d="M0 0.26087C0 0.137894 0 0.0764069 0.0382035 0.0382035C0.0764069 0 0.137894 0 0.26087 0H0.73913C0.862106 0 0.923593 0 0.961797 0.0382035C1 0.0764069 1 0.137894 1 0.26087V0.73913C1 0.862106 1 0.923593 0.961797 0.961797C0.923593 1 0.862106 1 0.73913 1H0.26087C0.137894 1 0.0764069 1 0.0382035 0.961797C0 0.923593 0 0.862106 0 0.73913V0.26087Z" fill="white"></path>
</mask>
<mask id="svg-mask-chat-input-button-notification" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect width="1" height="1" fill="white"></rect>
<circle cx="0.85" cy="0.85" r="0.25" fill="black"></circle>
</mask>
<mask id="svg-mask-sticker-shop-notification" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect width="1" height="1" fill="white"></rect>
<circle cx="0.9" cy="0.9" r="0.5" fill="black"></circle>
</mask>
<mask id="svg-mask-autocomplete-emoji-upsell-emoji" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<rect fill="white" width="1" height="1"></rect>
<circle fill="black" cx="1.33" cy="0.5" r="0.5833333333333334"></circle>
</mask>
<mask id="svg-mask-event-ticket" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
<path d="M0 0.12C0 0.0779961 0 0.0569941 0.00408726 0.0409507C0.00768251 0.0268386 0.0134193 0.015365 0.0204754 0.00817451C0.028497 0 0.038998 0 0.06 0H0.94C0.961002 0 0.971503 0 0.979525 0.00817451C0.986581 0.015365 0.992318 0.0268386 0.995913 0.0409507C1 0.0569941 1 0.0779961 1 0.12V0.45C0.986193 0.45 0.975 0.472386 0.975 0.5C0.975 0.527614 0.986193 0.55 1 0.55V0.88C1 0.922004 1 0.943006 0.995913 0.959049C0.992318 0.973161 0.986581 0.984635 0.979525 0.991826C0.971503 1 0.961002 1 0.94 1H0.0600001C0.0389981 1 0.028497 1 0.0204754 0.991826C0.0134193 0.984635 0.00768251 0.973161 0.00408726 0.959049C0 0.943006 0 0.922004 0 0.88V0.55C0.0138071 0.55 0.025 0.527614 0.025 0.5C0.025 0.472386 0.0138071 0.45 0 0.45V0.12Z" fill="white"></path>
</mask>
</svg><svg viewBox="0 0 1 1" aria-hidden="true" style="position: absolute; pointer-events: none; top: -1px; left: -1px; width: 1px; height: 1px;">
<linearGradient id="75ba4d2e-870b-4815-a410-510839e4d3e1">
<stop stop-color="hsl(228, calc(var(--saturation-factor, 1) * 86.7%), 70.6%)"></stop>
<stop offset="1" stop-color="hsl(244, calc(var(--saturation-factor, 1) * 100%), 84.1%)"></stop>
</linearGradient>
<linearGradient id="7100fcf5-d714-4117-98d1-8e36680e014d">
<stop stop-color="hsl(228, calc(var(--saturation-factor, 1) * 86.7%), 70.6%)"></stop>
<stop offset="1" stop-color="hsl(244, calc(var(--saturation-factor, 1) * 100%), 84.1%)"></stop>
</linearGradient>
<linearGradient id="92005620-2815-4c0d-8504-f2d00a2838ae">
<stop stop-color="hsl(270, calc(var(--saturation-factor, 1) * 86.7%), 70.6%)"></stop>
<stop offset="1" stop-color="hsl(342, calc(var(--saturation-factor, 1) * 58%), 72.9%)"></stop>
</linearGradient>
<linearGradient id="d490d10b-753e-4659-b86e-4d0a8d719d2e">
<stop stop-color="hsl(221, calc(var(--saturation-factor, 1) * 70%), 55.5%)"></stop>
<stop offset="1" stop-color="hsl(269, calc(var(--saturation-factor, 1) * 83.8%), 71%)"></stop>
</linearGradient>
<linearGradient id="8ebd300c-49cd-4dd5-bc49-f176b997bc05">
<stop stop-color="hsl(160, calc(var(--saturation-factor, 1) * 81.3%), 35.7%)"></stop>
<stop offset="1" stop-color="hsl(198, calc(var(--saturation-factor, 1) * 81.5%), 46.7%)"></stop>
</linearGradient>
</svg>
<div style="position: fixed; opacity: 0; pointer-events: none;"></div>
<div class="appDevToolsWrapper-1QxdQf">
<div class="notDevTools-1zkgfK">
<div class="app-3xd6d0">
<div class="app-2CXKsg">
<div class="bg-1QIAus"></div>
<div class="layers-OrUESM layers-1YQhyW">
<div aria-hidden="false" class="layer-86YKbF baseLayer-W6S8cY">
<div class="container-1eFtFS">
<nav class="wrapper-1_HaEi guilds-2JjMmN" aria-label="Servers sidebar">
<ul role="tree" tabindex="0" data-list-id="guildsnav" data-jump-section="global" class="tree-3agP2X">
<div class="unreadMentionsIndicatorTop-2bTgUU">
<div class="bar-2eAyLE unreadMentionsBar-ZXXoOH unread-2wipsx active-334r9u" aria-hidden="true" style="transform: translateY(-180%);"><span class="text-2GsXbW">new</span></div>
</div>
<div class="scroller-3X7KbA none-2-_0dP scrollerBase-_bVAAt" dir="ltr" style="overflow: hidden scroll; padding-right: 0px;">
<div class="tutorialContainer-1pL9QS">
<div class="listItem-3SmSlK">
<div class="pill-L_aLMQ wrapper-z5ab_q" aria-hidden="true"></div>
<div class="listItemWrapper-3d87LP">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#9bc74956-0087-4e90-86f9-50169d7d9f97)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="listitem" data-list-item-id="guildsnav___home" tabindex="-1" aria-label="Home">
<div class="childWrapper-1j_1ub"><svg class="homeIcon-r0w4ny" aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20">
<path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path>
</svg></div>
</div>
</foreignObject>
</svg></div>
</div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="guildSeparator-a4uisj"></div>
</div>
<div aria-label="Servers">
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="animated" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#8ef5c2ca-39cd-45bf-b17e-a309d1a1d60f)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___1007282838535688272" tabindex="-1" aria-label="  animated"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/1007282838535688272/e4f89bb3ae271e3dc1f291b3795f2e31.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above animated" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with animated" class="centerTarget-S6BLFQ"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="Leafs liberation of leafs leafy laboratory due to leftist legalious anti-libraryniaism" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#f5c1ed40-c7dc-4403-a8eb-f345a9f77f76)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___936143927805882418" tabindex="-1" aria-label="  Leafs liberation of leafs leafy laboratory due to leftist legalious anti-libraryniaism"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/936143927805882418/9c0d8a95384d07c0d609f7ccd0915c19.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above Leafs liberation of leafs leafy laboratory due to leftist legalious anti-libraryniaism" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with Leafs liberation of leafs leafy laboratory due to leftist legalious anti-libraryniaism" class="centerTarget-S6BLFQ"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"></div>
<div>
<div data-dnd-name="Study - Q &amp; T ᵀᴹ" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#f33bdfc1-5ad1-4cd1-8b4f-b2a6a4f618e9)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___491179774891524096" tabindex="-1" aria-label="  Study - Q &amp; T ᵀᴹ"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/491179774891524096/a61b9b327166254243320905b993a865.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above Study - Q &amp; T ᵀᴹ" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with Study - Q &amp; T ᵀᴹ" class="centerTarget-S6BLFQ"></div>
</div>
</div>
<div class="wrapper-38slSD"><span class="expandedFolderBackground-1kSAf6"></span>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"></div>
<div class="" data-dnd-name="bio-tolerance, Human Intelligence Research &amp; Enhancement, ..." draggable="true">
<div class="wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<defs>
<path d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z" id="27ae2a82-aace-4006-be7f-464305a34a9a-blob_mask"></path>
</defs>
<mask id="27ae2a82-aace-4006-be7f-464305a34a9a" fill="black" x="0" y="0" width="48" height="48">
<use href="#27ae2a82-aace-4006-be7f-464305a34a9a-blob_mask" fill="white"></use>
</mask>
<foreignObject mask="url(#27ae2a82-aace-4006-be7f-464305a34a9a)" x="0" y="0" width="48" height="48">
<div class="folder-241Joy" aria-label="bio-tolerance, Human Intelligence Research &amp; Enhancement, ..., folder , 1 unread mention" aria-expanded="true" aria-owns="folder-items-2163530478257298000" role="treeitem" data-list-item-id="guildsnav___2163530478257298000" tabindex="-1">
<div aria-hidden="true" class="folderIconWrapper-1oRIZr">
<div class="expandedFolderIconWrapper-3RwQpD"><svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" style="color: rgb(88, 101, 242);">
<path fill="currentColor" d="M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"></path>
</svg></div>
</div>
</div>
</foreignObject>
</svg></div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above bio-tolerance, Human Intelligence Research &amp; Enhancement, ..." class="target-1eRTCg"></div>
<div data-dnd-name="Combine with bio-tolerance, Human Intelligence Research &amp; Enhancement, ..." class="centerTarget-S6BLFQ"></div>
</div>
</div>
<ul id="folder-items-2163530478257298000" role="group" style="height: 224px;">
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 40px; transform: none;"></span></div>
<div>
<div data-dnd-name="bio-tolerance" class="blobContainer-ikKyFs selected-3c78Ai" draggable="true">
<div class="wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<defs>
<path d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z" id="a33d3092-7d45-4f46-a508-6370c6ff3280-blob_mask"></path>
<rect id="a33d3092-7d45-4f46-a508-6370c6ff3280-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
<rect id="a33d3092-7d45-4f46-a508-6370c6ff3280-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(0 0)"></rect>
</defs>
<mask id="a33d3092-7d45-4f46-a508-6370c6ff3280" fill="black" x="0" y="0" width="48" height="48">
<use href="#a33d3092-7d45-4f46-a508-6370c6ff3280-blob_mask" fill="white"></use>
<use href="#a33d3092-7d45-4f46-a508-6370c6ff3280-upper_badge_masks" fill="black"></use>
<use href="#a33d3092-7d45-4f46-a508-6370c6ff3280-lower_badge_masks" fill="black"></use>
</mask>
<mask id="a33d3092-7d45-4f46-a508-6370c6ff3280-stroke_mask">
<rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
<use href="#a33d3092-7d45-4f46-a508-6370c6ff3280-upper_badge_masks" fill="black"></use>
<use href="#a33d3092-7d45-4f46-a508-6370c6ff3280-lower_badge_masks" fill="black"></use>
</mask>

<foreignObject mask="url(#a33d3092-7d45-4f46-a508-6370c6ff3280)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n selected-1Drb7Z" role="treeitem" data-list-item-id="guildsnav___1001420842179239936" tabindex="-1" aria-label=" 1 mention, bio-tolerance"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/1001420842179239936/959c7532299c27c162fdfdc42e6e25ee.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg>
<div class="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
<div class="numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 16px; padding-right: 1px;">1</div>
</div>
</div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above bio-tolerance" class="target-1eRTCg"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="Human Intelligence Research &amp; Enhancement" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#10d59063-9d6c-407f-8f6d-8947feb26f73)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___1006965604684677280" tabindex="-1" aria-label="  Human Intelligence Research &amp; Enhancement"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/1006965604684677280/dbb818313f9a25f8161f851492ba3e49.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above Human Intelligence Research &amp; Enhancement" class="target-1eRTCg"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="NooTopics 3.0" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<defs>
<path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" id="54a24a8a-47a0-415a-b5e4-05032c67cf59-blob_mask"></path>
<rect id="54a24a8a-47a0-415a-b5e4-05032c67cf59-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
<rect id="54a24a8a-47a0-415a-b5e4-05032c67cf59-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(20 20)"></rect>
</defs>
<mask id="54a24a8a-47a0-415a-b5e4-05032c67cf59" fill="black" x="0" y="0" width="48" height="48">
<use href="#54a24a8a-47a0-415a-b5e4-05032c67cf59-blob_mask" fill="white"></use>
<use href="#54a24a8a-47a0-415a-b5e4-05032c67cf59-upper_badge_masks" fill="black"></use>
<use href="#54a24a8a-47a0-415a-b5e4-05032c67cf59-lower_badge_masks" fill="black"></use>
</mask>
<mask id="54a24a8a-47a0-415a-b5e4-05032c67cf59-stroke_mask">
<rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
<use href="#54a24a8a-47a0-415a-b5e4-05032c67cf59-upper_badge_masks" fill="black"></use>
<use href="#54a24a8a-47a0-415a-b5e4-05032c67cf59-lower_badge_masks" fill="black"></use>
</mask>
<foreignObject mask="url(#54a24a8a-47a0-415a-b5e4-05032c67cf59)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___962009752035008593" tabindex="-1" aria-label="  NooTopics 3.0"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/962009752035008593/5b0592fb3ab699a17a86a9c20be5a757.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above NooTopics 3.0" class="target-1eRTCg"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="Pax's Pharmacopoeia" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#d8424e67-77be-42a1-aa3e-30e18fb06cb7)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___988112601873534977" tabindex="-1" aria-label="  Pax's Pharmacopoeia"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/988112601873534977/9e05afb647095b680b397eaa228a661e.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above Pax's Pharmacopoeia" class="target-1eRTCg"></div>
</div>
</div>
</ul>
<div class="folderEndWrapper-3KO8ks" aria-hidden="true">
<div class="folderTarget-ivrfeG">
<div aria-label="At end of bio-tolerance, Human Intelligence Research &amp; Enhancement, ..." class="target-1eRTCg"></div>
</div>
</div>
</div>
<div class="wrapper-38slSD"><span class="expandedFolderBackground-1kSAf6 collapsed-uGXEbi"></span>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div class="" data-dnd-name="Biohacking, Cognitive Performance &amp; Nootropics, Nootropics, ..." draggable="true">
<div class="wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<defs>
<path d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z" id="b5c51754-59b6-4468-9648-29c61d4bfb27-blob_mask"></path>
<rect id="b5c51754-59b6-4468-9648-29c61d4bfb27-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
<rect id="b5c51754-59b6-4468-9648-29c61d4bfb27-lower_badge_masks" x="22" y="28" width="30" height="24" rx="12" ry="12" transform="translate(0 0)"></rect>
</defs>
<mask id="b5c51754-59b6-4468-9648-29c61d4bfb27" fill="black" x="0" y="0" width="48" height="48">
<use href="#b5c51754-59b6-4468-9648-29c61d4bfb27-blob_mask" fill="white"></use>
<use href="#b5c51754-59b6-4468-9648-29c61d4bfb27-upper_badge_masks" fill="black"></use>
<use href="#b5c51754-59b6-4468-9648-29c61d4bfb27-lower_badge_masks" fill="black"></use>
</mask>
<mask id="b5c51754-59b6-4468-9648-29c61d4bfb27-stroke_mask">
<rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
<use href="#b5c51754-59b6-4468-9648-29c61d4bfb27-upper_badge_masks" fill="black"></use>
<use href="#b5c51754-59b6-4468-9648-29c61d4bfb27-lower_badge_masks" fill="black"></use>
</mask>
<foreignObject mask="url(#b5c51754-59b6-4468-9648-29c61d4bfb27)" x="0" y="0" width="48" height="48">
<div class="folder-241Joy" aria-label="Biohacking, Cognitive Performance &amp; Nootropics, Nootropics, ..., folder , 15 unread mentions" aria-expanded="false" aria-owns="folder-items-6448072444934541000" role="treeitem" data-list-item-id="guildsnav___6448072444934541000" tabindex="-1">
<div aria-hidden="true" class="folderIconWrapper-1oRIZr" style="background-color: rgba(88, 101, 242, 0.4);">
<div class="closedFolderIconWrapper-3tRb2d">
<div class="icon-1zKOXL guildIcon-2I5sfu iconSizeSmol-qsFaRK iconInactive-26M06U" tabindex="-1" style="background-image: url(&quot;https://cdn.discordapp.com/icons/789844276988870656/05c249691dbb6551342b0e34bc4c35c4.webp?size=16&quot;);"></div>
<div class="icon-1zKOXL guildIcon-2I5sfu iconSizeSmol-qsFaRK iconInactive-26M06U" tabindex="-1" style="background-image: url(&quot;https://cdn.discordapp.com/icons/678825100841058309/445af7851a8cd310c709a0e6bc07a2ca.webp?size=16&quot;);"></div>
<div class="icon-1zKOXL guildIcon-2I5sfu iconSizeSmol-qsFaRK iconInactive-26M06U" tabindex="-1" style="background-image: url(&quot;https://cdn.discordapp.com/icons/962000816212967425/c24ec5d6835c4e96634a44341b5bdbdc.webp?size=16&quot;);"></div>
<div class="icon-1zKOXL guildIcon-2I5sfu iconSizeSmol-qsFaRK iconInactive-26M06U" tabindex="-1" style="background-image: url(&quot;https://cdn.discordapp.com/icons/796628393059024911/50cc2d7eae4a10b2022116a734d3ac4b.webp?size=16&quot;);"></div>
</div>
</div>
</div>
</foreignObject>
</svg>
<div class="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
<div class="numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 22px;">15</div>
</div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above Biohacking, Cognitive Performance &amp; Nootropics, Nootropics, ..." class="target-1eRTCg"></div>
<div data-dnd-name="Combine with Biohacking, Cognitive Performance &amp; Nootropics, Nootropics, ..." class="centerTarget-S6BLFQ"></div>
</div>
</div>
</div>
<div class="wrapper-38slSD"><span class="expandedFolderBackground-1kSAf6 collapsed-uGXEbi"></span>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div class="" data-dnd-name="Web Developers &amp; Friends, 🗿| EqualDesigns, Beginner.Codes, ..." draggable="true">
<div class="wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<defs>
<path d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z" id="2c268236-1aaa-4f77-8994-cd49cd336edd-blob_mask"></path>
<rect id="2c268236-1aaa-4f77-8994-cd49cd336edd-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
<rect id="2c268236-1aaa-4f77-8994-cd49cd336edd-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(0 0)"></rect>
</defs>
<mask id="2c268236-1aaa-4f77-8994-cd49cd336edd" fill="black" x="0" y="0" width="48" height="48">
<use href="#2c268236-1aaa-4f77-8994-cd49cd336edd-blob_mask" fill="white"></use>
<use href="#2c268236-1aaa-4f77-8994-cd49cd336edd-upper_badge_masks" fill="black"></use>
<use href="#2c268236-1aaa-4f77-8994-cd49cd336edd-lower_badge_masks" fill="black"></use>
</mask>
<mask id="2c268236-1aaa-4f77-8994-cd49cd336edd-stroke_mask">
<rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
<use href="#2c268236-1aaa-4f77-8994-cd49cd336edd-upper_badge_masks" fill="black"></use>
<use href="#2c268236-1aaa-4f77-8994-cd49cd336edd-lower_badge_masks" fill="black"></use>
</mask>
<foreignObject mask="url(#2c268236-1aaa-4f77-8994-cd49cd336edd)" x="0" y="0" width="48" height="48">
<div class="folder-241Joy" aria-label="Web Developers &amp; Friends, 🗿| EqualDesigns, Beginner.Codes, ..., folder , 4 unread mentions" aria-expanded="false" aria-owns="folder-items-8698489860798880000" role="treeitem" data-list-item-id="guildsnav___8698489860798880000" tabindex="-1">
<div aria-hidden="true" class="folderIconWrapper-1oRIZr" style="background-color: rgba(88, 101, 242, 0.4);">
<div class="closedFolderIconWrapper-3tRb2d">
<div class="icon-1zKOXL guildIcon-2I5sfu iconSizeSmol-qsFaRK iconInactive-26M06U" tabindex="-1" style="background-image: url(&quot;https://cdn.discordapp.com/icons/613018044192653342/92cfca20318b66d870665e2be8ba5cd7.webp?size=16&quot;);"></div>
<div class="icon-1zKOXL guildIcon-2I5sfu iconSizeSmol-qsFaRK iconInactive-26M06U" tabindex="-1" style="background-image: url(&quot;https://cdn.discordapp.com/icons/692860958179196958/532f7e7e693b44f775357d15267cc4bc.webp?size=16&quot;);"></div>
<div class="icon-1zKOXL guildIcon-2I5sfu iconSizeSmol-qsFaRK iconInactive-26M06U" tabindex="-1" style="background-image: url(&quot;https://cdn.discordapp.com/icons/644299523686006834/a_84a73cd28b6fddcbd6a46efb953ecbd0.webp?size=16&quot;);"></div>
<div class="icon-1zKOXL guildIcon-2I5sfu iconSizeSmol-qsFaRK iconInactive-26M06U" tabindex="-1" style="background-image: url(&quot;https://cdn.discordapp.com/icons/759424063130304592/0c249ee1a23bd231f5c65c3248558a4f.webp?size=16&quot;);"></div>
</div>
</div>
</div>
</foreignObject>
</svg>
<div class="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
<div class="numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 16px; padding-right: 1px;">4</div>
</div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above Web Developers &amp; Friends, 🗿| EqualDesigns, Beginner.Codes, ..." class="target-1eRTCg"></div>
<div data-dnd-name="Combine with Web Developers &amp; Friends, 🗿| EqualDesigns, Beginner.Codes, ..." class="centerTarget-S6BLFQ"></div>
</div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="𝐖𝐚𝐭𝐭𝐥𝐞𝐫𝐬" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<defs>
<path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" id="dfa3e013-ecfe-4cbc-a031-b2f08b3b712d-blob_mask"></path>
<rect id="dfa3e013-ecfe-4cbc-a031-b2f08b3b712d-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
<rect id="dfa3e013-ecfe-4cbc-a031-b2f08b3b712d-lower_badge_masks" x="22" y="28" width="30" height="24" rx="12" ry="12" transform="translate(0 0)"></rect>
</defs>
<mask id="dfa3e013-ecfe-4cbc-a031-b2f08b3b712d" fill="black" x="0" y="0" width="48" height="48">
<use href="#dfa3e013-ecfe-4cbc-a031-b2f08b3b712d-blob_mask" fill="white"></use>
<use href="#dfa3e013-ecfe-4cbc-a031-b2f08b3b712d-upper_badge_masks" fill="black"></use>
<use href="#dfa3e013-ecfe-4cbc-a031-b2f08b3b712d-lower_badge_masks" fill="black"></use>
</mask>
<mask id="dfa3e013-ecfe-4cbc-a031-b2f08b3b712d-stroke_mask">
<rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
<use href="#dfa3e013-ecfe-4cbc-a031-b2f08b3b712d-upper_badge_masks" fill="black"></use>
<use href="#dfa3e013-ecfe-4cbc-a031-b2f08b3b712d-lower_badge_masks" fill="black"></use>
</mask>
<foreignObject mask="url(#dfa3e013-ecfe-4cbc-a031-b2f08b3b712d)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___896409479116099665" tabindex="-1" aria-label=" 20 mentions, 𝐖𝐚𝐭𝐭𝐥𝐞𝐫𝐬"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/896409479116099665/f1e16671b0b8cfc7de402adc940bd29e.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg>
<div class="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
<div class="numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 22px;">20</div>
</div>
</div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above 𝐖𝐚𝐭𝐭𝐥𝐞𝐫𝐬" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with 𝐖𝐚𝐭𝐭𝐥𝐞𝐫𝐬" class="centerTarget-S6BLFQ"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="Do Anything" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#2b44ac81-cf69-4c87-9ff7-b2df94160172)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___697138943942066297" tabindex="-1" aria-label="  Do Anything"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/697138943942066297/7b54f6bcbdcc19e1f45a0ef74240505d.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above Do Anything" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with Do Anything" class="centerTarget-S6BLFQ"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="channer endocrine society" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#009c3151-6ac3-4283-a7bd-e8c5f7577b3f)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___880579697115811850" tabindex="-1" aria-label="  channer endocrine society"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/880579697115811850/84838054acc7c21d6d82a8ccb4354a7f.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above channer endocrine society" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with channer endocrine society" class="centerTarget-S6BLFQ"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="5D+ Ascended Platform Of LightWarriors" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#2991592a-e9af-4418-9055-475e69739653)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___539367976806383616" tabindex="-1" aria-label="  5D+ Ascended Platform Of LightWarriors"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/539367976806383616/a_d0477b6f60251c329ac237c700f93d0d.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above 5D+ Ascended Platform Of LightWarriors" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with 5D+ Ascended Platform Of LightWarriors" class="centerTarget-S6BLFQ"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="Only Rusty Fans 18+" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#efa69139-37be-4ba8-b621-ea91df69761a)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___925146547212128266" tabindex="-1" aria-label="  Only Rusty Fans 18+"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/925146547212128266/ef1cfa70ca8fa07420f56310c0406bd9.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above Only Rusty Fans 18+" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with Only Rusty Fans 18+" class="centerTarget-S6BLFQ"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="Onlyfans leak" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<defs>
<path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" id="3b585200-8999-488a-937e-acb3f0a82b46-blob_mask"></path>
<rect id="3b585200-8999-488a-937e-acb3f0a82b46-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
<rect id="3b585200-8999-488a-937e-acb3f0a82b46-lower_badge_masks" x="22" y="28" width="30" height="24" rx="12" ry="12" transform="translate(0 0)"></rect>
</defs>
<mask id="3b585200-8999-488a-937e-acb3f0a82b46" fill="black" x="0" y="0" width="48" height="48">
<use href="#3b585200-8999-488a-937e-acb3f0a82b46-blob_mask" fill="white"></use>
<use href="#3b585200-8999-488a-937e-acb3f0a82b46-upper_badge_masks" fill="black"></use>
<use href="#3b585200-8999-488a-937e-acb3f0a82b46-lower_badge_masks" fill="black"></use>
</mask>
<mask id="3b585200-8999-488a-937e-acb3f0a82b46-stroke_mask">
<rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
<use href="#3b585200-8999-488a-937e-acb3f0a82b46-upper_badge_masks" fill="black"></use>
<use href="#3b585200-8999-488a-937e-acb3f0a82b46-lower_badge_masks" fill="black"></use>
</mask>
<foreignObject mask="url(#3b585200-8999-488a-937e-acb3f0a82b46)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___908387699487039499" tabindex="-1" aria-label=" 57 mentions, Onlyfans leak"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/908387699487039499/e3cc53633a56c71533d9eb8c3ba84024.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg>
<div class="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
<div class="numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 22px;">57</div>
</div>
</div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above Onlyfans leak" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with Onlyfans leak" class="centerTarget-S6BLFQ"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="Leaf's Leafy Laboratory and Living Library®" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<defs>
<path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" id="e39aaf71-5695-4980-9e7d-8c66e5a392f8-blob_mask"></path>
<rect id="e39aaf71-5695-4980-9e7d-8c66e5a392f8-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
<rect id="e39aaf71-5695-4980-9e7d-8c66e5a392f8-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(0 0)"></rect>
</defs>
<mask id="e39aaf71-5695-4980-9e7d-8c66e5a392f8" fill="black" x="0" y="0" width="48" height="48">
<use href="#e39aaf71-5695-4980-9e7d-8c66e5a392f8-blob_mask" fill="white"></use>
<use href="#e39aaf71-5695-4980-9e7d-8c66e5a392f8-upper_badge_masks" fill="black"></use>
<use href="#e39aaf71-5695-4980-9e7d-8c66e5a392f8-lower_badge_masks" fill="black"></use>
</mask>
<mask id="e39aaf71-5695-4980-9e7d-8c66e5a392f8-stroke_mask">
<rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
<use href="#e39aaf71-5695-4980-9e7d-8c66e5a392f8-upper_badge_masks" fill="black"></use>
<use href="#e39aaf71-5695-4980-9e7d-8c66e5a392f8-lower_badge_masks" fill="black"></use>
</mask>
<foreignObject mask="url(#e39aaf71-5695-4980-9e7d-8c66e5a392f8)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___652788645077581844" tabindex="-1" aria-label=" 1 mention, Leaf's Leafy Laboratory and Living Library®"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/652788645077581844/480c9a01e0fe6dfc60b45ef6e91deb72.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg>
<div class="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
<div class="numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 16px; padding-right: 1px;">1</div>
</div>
</div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above Leaf's Leafy Laboratory and Living Library®" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with Leaf's Leafy Laboratory and Living Library®" class="centerTarget-S6BLFQ"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="BornFree.life" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#813cd01c-2648-4380-8334-3b306dd3bc76)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___411937340978888715" tabindex="-1" aria-label="  BornFree.life"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/411937340978888715/d127e8949fee8730da35393478556922.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above BornFree.life" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with BornFree.life" class="centerTarget-S6BLFQ"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="🌌 | City Hub" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<defs>
<path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" id="0e25acca-ec5c-44c6-96e2-371a4d38fa87-blob_mask"></path>
<rect id="0e25acca-ec5c-44c6-96e2-371a4d38fa87-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
<rect id="0e25acca-ec5c-44c6-96e2-371a4d38fa87-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(0 0)"></rect>
</defs>
<mask id="0e25acca-ec5c-44c6-96e2-371a4d38fa87" fill="black" x="0" y="0" width="48" height="48">
<use href="#0e25acca-ec5c-44c6-96e2-371a4d38fa87-blob_mask" fill="white"></use>
<use href="#0e25acca-ec5c-44c6-96e2-371a4d38fa87-upper_badge_masks" fill="black"></use>
<use href="#0e25acca-ec5c-44c6-96e2-371a4d38fa87-lower_badge_masks" fill="black"></use>
</mask>
<mask id="0e25acca-ec5c-44c6-96e2-371a4d38fa87-stroke_mask">
<rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
<use href="#0e25acca-ec5c-44c6-96e2-371a4d38fa87-upper_badge_masks" fill="black"></use>
<use href="#0e25acca-ec5c-44c6-96e2-371a4d38fa87-lower_badge_masks" fill="black"></use>
</mask>
<foreignObject mask="url(#0e25acca-ec5c-44c6-96e2-371a4d38fa87)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___899422746591764540" tabindex="-1" aria-label=" 5 mentions, 🌌 | City Hub"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/899422746591764540/b1b6129ec6f0dceed800d10c5d49523b.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg>
<div class="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
<div class="numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 16px;">5</div>
</div>
</div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above 🌌 | City Hub" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with 🌌 | City Hub" class="centerTarget-S6BLFQ"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="18+ Models Free Nudes" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<defs>
<path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" id="dbfdc396-3b00-47ae-87a2-95af7eec65a9-blob_mask"></path>
<rect id="dbfdc396-3b00-47ae-87a2-95af7eec65a9-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
<rect id="dbfdc396-3b00-47ae-87a2-95af7eec65a9-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(0 0)"></rect>
</defs>
<mask id="dbfdc396-3b00-47ae-87a2-95af7eec65a9" fill="black" x="0" y="0" width="48" height="48">
<use href="#dbfdc396-3b00-47ae-87a2-95af7eec65a9-blob_mask" fill="white"></use>
<use href="#dbfdc396-3b00-47ae-87a2-95af7eec65a9-upper_badge_masks" fill="black"></use>
<use href="#dbfdc396-3b00-47ae-87a2-95af7eec65a9-lower_badge_masks" fill="black"></use>
</mask>
<mask id="dbfdc396-3b00-47ae-87a2-95af7eec65a9-stroke_mask">
<rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
<use href="#dbfdc396-3b00-47ae-87a2-95af7eec65a9-upper_badge_masks" fill="black"></use>
<use href="#dbfdc396-3b00-47ae-87a2-95af7eec65a9-lower_badge_masks" fill="black"></use>
</mask>
<foreignObject mask="url(#dbfdc396-3b00-47ae-87a2-95af7eec65a9)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___865957162034528257" tabindex="-1" aria-label=" 3 mentions, 18+ Models Free Nudes"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/865957162034528257/fec500b2a622caf1b96518d0e7dca041.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg>
<div class="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
<div class="numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 16px;">3</div>
</div>
</div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above 18+ Models Free Nudes" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with 18+ Models Free Nudes" class="centerTarget-S6BLFQ"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="😈 Only Safadas +18" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#69041d72-8d4b-433d-a2c4-7e9162b5bacd)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___847082026036363264" tabindex="-1" aria-label="  😈 Only Safadas +18"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/847082026036363264/8af27be8df3f25307c268c9837047c30.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above 😈 Only Safadas +18" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with 😈 Only Safadas +18" class="centerTarget-S6BLFQ"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-2RsI5Q wrapper-z5ab_q" aria-hidden="true"><span class="item-2LIpTv" style="opacity: 1; height: 8px; transform: none;"></span></div>
<div>
<div data-dnd-name="TBN" class="blobContainer-ikKyFs" draggable="true">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#35eac9a8-9a0b-4251-a685-10bfed1ef8a0)" x="0" y="0" width="48" height="48">
<div class="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___417073999055683588" tabindex="-1" aria-label="  TBN"><img class="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/417073999055683588/849f26db76a739bf116d27a5ceaabc6c.webp?size=96" alt=" " width="48" height="48" aria-hidden="true"></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above TBN" class="target-1eRTCg"></div>
<div data-dnd-name="Combine with TBN" class="centerTarget-S6BLFQ"></div>
</div>
</div>
</div>
<div class="tutorialContainer-2jwoiB">
<div class="listItem-3SmSlK">
<div class="listItemWrapper-3d87LP">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#40cf65b4-799a-4590-bfa6-7cbe387895f1)" x="0" y="0" width="48" height="48">
<div class="circleIconButton-1VxDrg" aria-label="Add a Server" role="listitem" data-list-item-id="guildsnav___create-join-button" tabindex="-1"><svg class="circleIcon-3489FI" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
<path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"></path>
</svg></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="wrapper-3XVBev" aria-hidden="true">
<div data-dnd-name="Above end of list" class="target-1eRTCg"></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-1NRFie">
<div class="wrapper-z5ab_q" aria-hidden="true"></div>
</div>
<div class="listItemWrapper-3d87LP">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#0c9f6c4d-ddf0-4baa-ba06-7e6f125dd408)" x="0" y="0" width="48" height="48">
<div class="circleIconButton-1VxDrg" aria-label="Explore Public Servers" role="listitem" data-list-item-id="guildsnav___guild-discover-button" tabindex="-1"><svg aria-hidden="true" role="img" class="circleIcon-3489FI" width="24" height="24" viewBox="0 0 24 24">
<path fill="currentColor" d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"></path>
</svg></div>
</foreignObject>
</svg></div>
</div>
</div>
<div class="listItem-3SmSlK">
<div class="guildSeparator-a4uisj"></div>
</div>
<div class="listItem-3SmSlK">
<div class="pill-1NRFie">
<div class="wrapper-z5ab_q" aria-hidden="true"></div>
</div>
<div class="listItemWrapper-3d87LP">
<div class="wrapperSimple-Js2rIO wrapper-28eC3z"><svg width="48" height="48" viewBox="0 0 48 48" class="svg-2zuE5p" overflow="visible">
<foreignObject mask="url(#90b05f48-f3cd-4239-9c43-c339af3ff46f)" x="0" y="0" width="48" height="48">
<div class="circleIconButton-1VxDrg" aria-label="Download Apps" role="listitem" data-list-item-id="guildsnav___app-download-button" tabindex="-1"><svg class="circleIcon-3489FI" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"></path>
</svg></div>
</foreignObject>
</svg></div>
</div>
</div>
<div aria-hidden="true" style="position: absolute; pointer-events: none; min-height: 0px; min-width: 1px; flex: 0 0 auto; height: 0px;"></div>
</div>
<div class="unreadMentionsIndicatorBottom-3RJMnQ">
<div class="bar-2eAyLE unreadMentionsBar-ZXXoOH mention-3XBnnZ active-334r9u" aria-hidden="false" style="transform: translateY(0%);"><span class="text-2GsXbW">new</span></div>
</div>
</ul>
</nav>
<div class="base-2jDfDU">
<div class="content-1SgpWY" style="position: relative;">



<div class="sidebar-1tnWFu">
<nav class="container-1NXEtd" aria-label="bio-tolerance (server)">
<div class="container-1-ERn5 clickable-vvKY2q">
<header class="header-3OsQeK">
<div class="headerContent-2SNbie primaryInfo-2ocY3v">
<h1 class="name-3Uvkvr">`+"Prefrontal"+`</h1>
<div class="headerButton-1nmDZ3" aria-controls="popout_42" aria-expanded="false" aria-label="bio-tolerance, server actions" role="button" tabindex="0"></div>
<div class="headerChildren-2qV9P8"><svg width="18" height="18" class="button-2BMPJJ">
<g fill="none" fill-rule="evenodd">
<path d="M0 0h18v18H0"></path>
<path stroke="currentColor" d="M4.5 4.5l9 9" stroke-linecap="round"></path>
<path stroke="currentColor" d="M13.5 4.5l-9 9" stroke-linecap="round"></path>
</g>
</svg></div>
</div>
</header>
</div>
<div class="container-2Y4CWj">
<div></div>
</div>
<div class="positionedContainer-W9XtGp">
<div class="unreadTop-1DJtGv unread-XRkyaQ container-1qIct8">
<div class="bar-2eAyLE unreadBar-elBRZx unread-2wipsx active-334r9u" aria-hidden="true" style="transform: translateY(-180%);"><span class="text-2GsXbW">New Unreads</span></div>
</div>
</div>
<div class="scroller-1ox3I2 thin-31rlnD scrollerBase-_bVAAt fade-1R6FHN" orientation="vertical" id="channels" tabindex="0" data-jump-section="global" style="overflow: hidden scroll; padding-right: 0px;">
<ul aria-label="Channels" class="content-2a4AW9" style="height: 1836px;">
<div aria-hidden="true" style="height: 0px;"></div>
<div style="height: 16px;"></div>
<div class="wrapper-NhbLHG" role="listitem">
<div class="content-1gYQeQ"><a role="button" class="mainContent-20q_Hp" data-list-item-id="channels___guild-active-threads" tabindex="-1">
<div class="iconContainer-21RCa3"><svg class="icon-2W8DHg" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"></path>
</svg></div>
<div class="channelName-3KPsGw name-28HaxV">Active Threads</div>
</a></div>
</div>
<div class="sectionDivider-189lqb"></div>
<li class="containerDefault-3TQ5YN" data-dnd-name="club" draggable="true">
<div class="iconVisibility-3pLDEs wrapper-1S43wv clickable-2AoIYN">
<div class="mainContent-uDGa6R" tabindex="-1" data-list-item-id="channels___1001420842179239937" aria-label="club (category)" aria-expanded="true" role="button"><svg class="arrow-2HswgU icon-3zI3d2" width="24" height="24" viewBox="0 0 24 24">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
</svg>
<h2 class="name-3BUDLf container-q97qHp">
<div class="overflow-1wOqNV">club</div>
</h2>
</div>
<div class="children-3MeUvj"><button tabindex="-1" aria-label="Create Channel" type="button" class="addButton-2mlqCW forceVisible-14yqh4 button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
<div class="contents-3ca1mk"><svg class="addButtonIcon-3rJeaD" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
<polygon fill-rule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon>
</svg></div>
</button></div>
</div>
</li>

<li class="containerDefault-YUSmu3 selected-2TbFuo" data-dnd-name="casual" draggable="true">
<div class="iconVisibility-vptxma wrapper-NhbLHG modeSelected-3DmyhH">
<div class="content-1gYQeQ"><a href="./PBIO _ Prefrontal - ❗important - info [1146609811560091759].html_Files.html" role="link" class="mainContent-20q_Hp" data-list-item-id="channels___1001422942380511286" tabindex="-1" aria-label="unread, casual (text channel)">
<div aria-label="Text" role="img" class="iconContainer-21RCa3"><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2W8DHg" aria-hidden="true" role="img">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
</svg></div>
<div class="name-28HaxV overflow-1wOqNV" aria-hidden="true">
<div class="channelName-3KPsGw"> ❗important - info [1146609811560091759].html_Files</div>
</div>
</a>
<div class="children-1MGS9G">
<div class="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Create Invite" tabindex="0" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
<path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
<path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
</svg></div>
<div class="iconItem-1EjiK0 iconBase-2G48Fc" tabindex="0" aria-label="Edit Channel" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
</svg></div>
<div class="channelInfo-3jN1ay"></div>
</div>
</div>
</div>
</li>
<li class="containerDefault-YUSmu3 selected-2TbFuo" data-dnd-name="casual" draggable="true">
<div class="iconVisibility-vptxma wrapper-NhbLHG modeSelected-3DmyhH">
<div class="content-1gYQeQ"><a href="./PBIO _ Prefrontal - ❗important - news [1146609991541870593].html_Files.html" role="link" class="mainContent-20q_Hp" data-list-item-id="channels___1001422942380511286" tabindex="-1" aria-label="unread, casual (text channel)">
<div aria-label="Text" role="img" class="iconContainer-21RCa3"><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2W8DHg" aria-hidden="true" role="img">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
</svg></div>
<div class="name-28HaxV overflow-1wOqNV" aria-hidden="true">
<div class="channelName-3KPsGw"> ❗important - news [1146609991541870593].html_Files</div>
</div>
</a>
<div class="children-1MGS9G">
<div class="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Create Invite" tabindex="0" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
<path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
<path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
</svg></div>
<div class="iconItem-1EjiK0 iconBase-2G48Fc" tabindex="0" aria-label="Edit Channel" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
</svg></div>
<div class="channelInfo-3jN1ay"></div>
</div>
</div>
</div>
</li>
<li class="containerDefault-YUSmu3 selected-2TbFuo" data-dnd-name="casual" draggable="true">
<div class="iconVisibility-vptxma wrapper-NhbLHG modeSelected-3DmyhH">
<div class="content-1gYQeQ"><a href="./PBIO _ Prefrontal - 👁 research - experiments [1146611203557310485].html_Files.html" role="link" class="mainContent-20q_Hp" data-list-item-id="channels___1001422942380511286" tabindex="-1" aria-label="unread, casual (text channel)">
<div aria-label="Text" role="img" class="iconContainer-21RCa3"><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2W8DHg" aria-hidden="true" role="img">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
</svg></div>
<div class="name-28HaxV overflow-1wOqNV" aria-hidden="true">
<div class="channelName-3KPsGw"> 👁 research - experiments [1146611203557310485].html_Files</div>
</div>
</a>
<div class="children-1MGS9G">
<div class="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Create Invite" tabindex="0" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
<path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
<path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
</svg></div>
<div class="iconItem-1EjiK0 iconBase-2G48Fc" tabindex="0" aria-label="Edit Channel" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
</svg></div>
<div class="channelInfo-3jN1ay"></div>
</div>
</div>
</div>
</li>
<li class="containerDefault-YUSmu3 selected-2TbFuo" data-dnd-name="casual" draggable="true">
<div class="iconVisibility-vptxma wrapper-NhbLHG modeSelected-3DmyhH">
<div class="content-1gYQeQ"><a href="./PBIO _ Prefrontal - 👁 research - gcp-ii-inhibition [1152372857914015764].html_Files.html" role="link" class="mainContent-20q_Hp" data-list-item-id="channels___1001422942380511286" tabindex="-1" aria-label="unread, casual (text channel)">
<div aria-label="Text" role="img" class="iconContainer-21RCa3"><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2W8DHg" aria-hidden="true" role="img">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
</svg></div>
<div class="name-28HaxV overflow-1wOqNV" aria-hidden="true">
<div class="channelName-3KPsGw"> 👁 research - gcp-ii-inhibition [1152372857914015764].html_Files</div>
</div>
</a>
<div class="children-1MGS9G">
<div class="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Create Invite" tabindex="0" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
<path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
<path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
</svg></div>
<div class="iconItem-1EjiK0 iconBase-2G48Fc" tabindex="0" aria-label="Edit Channel" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
</svg></div>
<div class="channelInfo-3jN1ay"></div>
</div>
</div>
</div>
</li>
<li class="containerDefault-YUSmu3 selected-2TbFuo" data-dnd-name="casual" draggable="true">
<div class="iconVisibility-vptxma wrapper-NhbLHG modeSelected-3DmyhH">
<div class="content-1gYQeQ"><a href="./PBIO _ Prefrontal - 👁 research - neuroscience [1146768577374994513].html_Files.html" role="link" class="mainContent-20q_Hp" data-list-item-id="channels___1001422942380511286" tabindex="-1" aria-label="unread, casual (text channel)">
<div aria-label="Text" role="img" class="iconContainer-21RCa3"><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2W8DHg" aria-hidden="true" role="img">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
</svg></div>
<div class="name-28HaxV overflow-1wOqNV" aria-hidden="true">
<div class="channelName-3KPsGw"> 👁 research - neuroscience [1146768577374994513].html_Files</div>
</div>
</a>
<div class="children-1MGS9G">
<div class="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Create Invite" tabindex="0" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
<path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
<path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
</svg></div>
<div class="iconItem-1EjiK0 iconBase-2G48Fc" tabindex="0" aria-label="Edit Channel" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
</svg></div>
<div class="channelInfo-3jN1ay"></div>
</div>
</div>
</div>
</li>
<li class="containerDefault-YUSmu3 selected-2TbFuo" data-dnd-name="casual" draggable="true">
<div class="iconVisibility-vptxma wrapper-NhbLHG modeSelected-3DmyhH">
<div class="content-1gYQeQ"><a href="./PBIO _ Prefrontal - 👁 research - studies [1146611181738528908].html_Files.html" role="link" class="mainContent-20q_Hp" data-list-item-id="channels___1001422942380511286" tabindex="-1" aria-label="unread, casual (text channel)">
<div aria-label="Text" role="img" class="iconContainer-21RCa3"><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2W8DHg" aria-hidden="true" role="img">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
</svg></div>
<div class="name-28HaxV overflow-1wOqNV" aria-hidden="true">
<div class="channelName-3KPsGw"> 👁 research - studies [1146611181738528908].html_Files</div>
</div>
</a>
<div class="children-1MGS9G">
<div class="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Create Invite" tabindex="0" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
<path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
<path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
</svg></div>
<div class="iconItem-1EjiK0 iconBase-2G48Fc" tabindex="0" aria-label="Edit Channel" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
</svg></div>
<div class="channelInfo-3jN1ay"></div>
</div>
</div>
</div>
</li>
<li class="containerDefault-YUSmu3 selected-2TbFuo" data-dnd-name="casual" draggable="true">
<div class="iconVisibility-vptxma wrapper-NhbLHG modeSelected-3DmyhH">
<div class="content-1gYQeQ"><a href="./PBIO _ Prefrontal - 🦾 jim - polyphenol-peds [1149798296706089000].html_Files.html" role="link" class="mainContent-20q_Hp" data-list-item-id="channels___1001422942380511286" tabindex="-1" aria-label="unread, casual (text channel)">
<div aria-label="Text" role="img" class="iconContainer-21RCa3"><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2W8DHg" aria-hidden="true" role="img">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
</svg></div>
<div class="name-28HaxV overflow-1wOqNV" aria-hidden="true">
<div class="channelName-3KPsGw"> 🦾 jim - polyphenol-peds [1149798296706089000].html_Files</div>
</div>
</a>
<div class="children-1MGS9G">
<div class="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Create Invite" tabindex="0" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
<path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
<path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
</svg></div>
<div class="iconItem-1EjiK0 iconBase-2G48Fc" tabindex="0" aria-label="Edit Channel" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
</svg></div>
<div class="channelInfo-3jN1ay"></div>
</div>
</div>
</div>
</li>
<li class="containerDefault-YUSmu3 selected-2TbFuo" data-dnd-name="casual" draggable="true">
<div class="iconVisibility-vptxma wrapper-NhbLHG modeSelected-3DmyhH">
<div class="content-1gYQeQ"><a href="./PBIO _ Prefrontal - 🦾 jim - protocols [1148734119254179871].html_Files.html" role="link" class="mainContent-20q_Hp" data-list-item-id="channels___1001422942380511286" tabindex="-1" aria-label="unread, casual (text channel)">
<div aria-label="Text" role="img" class="iconContainer-21RCa3"><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2W8DHg" aria-hidden="true" role="img">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
</svg></div>
<div class="name-28HaxV overflow-1wOqNV" aria-hidden="true">
<div class="channelName-3KPsGw"> 🦾 jim - protocols [1148734119254179871].html_Files</div>
</div>
</a>
<div class="children-1MGS9G">
<div class="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Create Invite" tabindex="0" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
<path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
<path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
</svg></div>
<div class="iconItem-1EjiK0 iconBase-2G48Fc" tabindex="0" aria-label="Edit Channel" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
</svg></div>
<div class="channelInfo-3jN1ay"></div>
</div>
</div>
</div>
</li>
<li class="containerDefault-YUSmu3 selected-2TbFuo" data-dnd-name="casual" draggable="true">
<div class="iconVisibility-vptxma wrapper-NhbLHG modeSelected-3DmyhH">
<div class="content-1gYQeQ"><a href="./PBIO _ Prefrontal - 🧠 prefrontal - casual [1146608028557254779].html_Files.html" role="link" class="mainContent-20q_Hp" data-list-item-id="channels___1001422942380511286" tabindex="-1" aria-label="unread, casual (text channel)">
<div aria-label="Text" role="img" class="iconContainer-21RCa3"><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2W8DHg" aria-hidden="true" role="img">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
</svg></div>
<div class="name-28HaxV overflow-1wOqNV" aria-hidden="true">
<div class="channelName-3KPsGw"> 🧠 prefrontal - casual [1146608028557254779].html_Files</div>
</div>
</a>
<div class="children-1MGS9G">
<div class="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Create Invite" tabindex="0" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
<path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
<path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
</svg></div>
<div class="iconItem-1EjiK0 iconBase-2G48Fc" tabindex="0" aria-label="Edit Channel" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
</svg></div>
<div class="channelInfo-3jN1ay"></div>
</div>
</div>
</div>
</li>
<li class="containerDefault-YUSmu3 selected-2TbFuo" data-dnd-name="casual" draggable="true">
<div class="iconVisibility-vptxma wrapper-NhbLHG modeSelected-3DmyhH">
<div class="content-1gYQeQ"><a href="./PBIO _ Prefrontal - 🧠 prefrontal - casual-alt [1149777052522774649].html_Files.html" role="link" class="mainContent-20q_Hp" data-list-item-id="channels___1001422942380511286" tabindex="-1" aria-label="unread, casual (text channel)">
<div aria-label="Text" role="img" class="iconContainer-21RCa3"><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2W8DHg" aria-hidden="true" role="img">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
</svg></div>
<div class="name-28HaxV overflow-1wOqNV" aria-hidden="true">
<div class="channelName-3KPsGw"> 🧠 prefrontal - casual-alt [1149777052522774649].html_Files</div>
</div>
</a>
<div class="children-1MGS9G">
<div class="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Create Invite" tabindex="0" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
<path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
<path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
</svg></div>
<div class="iconItem-1EjiK0 iconBase-2G48Fc" tabindex="0" aria-label="Edit Channel" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
</svg></div>
<div class="channelInfo-3jN1ay"></div>
</div>
</div>
</div>
</li>
<li class="containerDefault-YUSmu3 selected-2TbFuo" data-dnd-name="casual" draggable="true">
<div class="iconVisibility-vptxma wrapper-NhbLHG modeSelected-3DmyhH">
<div class="content-1gYQeQ"><a href="./PBIO _ Prefrontal - 🧠 prefrontal - lifestyle [1147670106856509510].html_Files.html" role="link" class="mainContent-20q_Hp" data-list-item-id="channels___1001422942380511286" tabindex="-1" aria-label="unread, casual (text channel)">
<div aria-label="Text" role="img" class="iconContainer-21RCa3"><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2W8DHg" aria-hidden="true" role="img">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
</svg></div>
<div class="name-28HaxV overflow-1wOqNV" aria-hidden="true">
<div class="channelName-3KPsGw"> 🧠 prefrontal - lifestyle [1147670106856509510].html_Files</div>
</div>
</a>
<div class="children-1MGS9G">
<div class="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Create Invite" tabindex="0" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
<path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
<path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
</svg></div>
<div class="iconItem-1EjiK0 iconBase-2G48Fc" tabindex="0" aria-label="Edit Channel" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
</svg></div>
<div class="channelInfo-3jN1ay"></div>
</div>
</div>
</div>
</li>
<li class="containerDefault-YUSmu3 selected-2TbFuo" data-dnd-name="casual" draggable="true">
<div class="iconVisibility-vptxma wrapper-NhbLHG modeSelected-3DmyhH">
<div class="content-1gYQeQ"><a href="./PBIO _ Prefrontal - 🧠 prefrontal - shitposting [1146611707276439622].html_Files.html" role="link" class="mainContent-20q_Hp" data-list-item-id="channels___1001422942380511286" tabindex="-1" aria-label="unread, casual (text channel)">
<div aria-label="Text" role="img" class="iconContainer-21RCa3"><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2W8DHg" aria-hidden="true" role="img">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
</svg></div>
<div class="name-28HaxV overflow-1wOqNV" aria-hidden="true">
<div class="channelName-3KPsGw"> 🧠 prefrontal - shitposting [1146611707276439622].html_Files</div>
</div>
</a>
<div class="children-1MGS9G">
<div class="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Create Invite" tabindex="0" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
<path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
<path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
</svg></div>
<div class="iconItem-1EjiK0 iconBase-2G48Fc" tabindex="0" aria-label="Edit Channel" role="button"><svg class="actionIcon-2sw4Sl" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
</svg></div>
<div class="channelInfo-3jN1ay"></div>
</div>
</div>
</div>
</li>






</ul>
</div>
</nav>
<section class="panels-3wFtMD" aria-label="User area">
<div class="wrapper-3Hk9OB"></div>
<div class="container-YkUktl">
<div class="avatarWrapper-1B9FTW withTagAsButton-OsgQ9L" aria-controls="popout_58" aria-expanded="false" aria-label="Set Status" role="button" tabindex="0">
<div class="avatar-1EWyVD wrapper-1VLyxH" role="img" aria-label="ibtisam.midlet, Online" aria-hidden="false" style="width: 32px; height: 32px;"><svg width="40" height="32" viewBox="0 0 40 32" class="mask-1FEkla svg-2azL_l" aria-hidden="true">
<mask id="abd8a040-0f89-4a07-b15b-a56dd1348b19" width="32" height="32">
<circle cx="16" cy="16" r="16" fill="white"></circle>
<rect color="black" x="19" y="19" width="16" height="16" rx="8" ry="8"></rect>
</mask>
<foreignObject x="0" y="0" width="32" height="32" mask="url(#abd8a040-0f89-4a07-b15b-a56dd1348b19)">
<div class="avatarStack-3vfSFa"><img src="https://cdn.discordapp.com/avatars/583206000698327050/8f48936e3cb43ae4f8ba8e22686cebf6.webp?size=32" alt=" " class="avatar-b5OQ1N" aria-hidden="true"></div>
</foreignObject><svg x="14.5" y="17" width="25" height="15" viewBox="0 0 25 15">
<mask id="bfffccd6-ca63-44ae-82b7-1720d8940cea">
<rect x="7.5" y="5" width="10" height="10" rx="5" ry="5" fill="white"></rect>
<rect x="12.5" y="10" width="0" height="0" rx="0" ry="0" fill="black"></rect>
<polygon points="-2.16506,-2.5 2.16506,0 -2.16506,2.5" fill="black" transform="scale(0) translate(13.125 10)" style="transform-origin: 13.125px 10px;"></polygon>
<circle fill="black" cx="12.5" cy="10" r="0"></circle>
</mask>
<rect fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" width="25" height="15" mask="url(#bfffccd6-ca63-44ae-82b7-1720d8940cea)"></rect>
</svg>
<rect x="22" y="22" width="10" height="10" fill="transparent" aria-hidden="true" class="pointerEvents-9SZWKj"></rect>
</svg></div>
<div class="nameTag-sc-gpq canCopy-IgTwyV">
<div class="defaultColor-24IHKz text-sm-normal-3Zj3Iv usernameContainer-3PPkWq" data-text-variant="text-sm/normal">
<div class="text-sm-normal-3Zj3Iv title-338goq" data-text-variant="text-sm/normal">ibtisam.midlet</div>
</div>
<div class="text-xs-normal-3SiVjE subtext-2HDqJ7" data-text-variant="text-xs/normal">#4930</div>
</div>
</div>
<div class="flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyStart-2Mwniq alignStretch-Uwowzr noWrap-hBpHBz" style="flex: 0 1 auto;"><button role="switch" aria-checked="true" aria-label="Mute" type="button" class="button-12Fmur enabled-9OeuTA button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
<div class="contents-3ca1mk"><svg aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24">
<path d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z" fill="currentColor"></path>
<path d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z" fill="currentColor"></path>
<path d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z" fill="currentColor"></path>
<path d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z" class="strikethrough-2Kl6HF" fill="currentColor"></path>
</svg></div>
</button><button role="switch" aria-checked="false" aria-label="Deafen" type="button" class="button-12Fmur enabled-9OeuTA button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
<div class="contents-3ca1mk"><svg aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><svg width="24" height="24" viewBox="0 0 24 24">
<path d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" fill="currentColor"></path>
</svg></svg></div>
</button><button aria-label="User Settings" type="button" class="button-12Fmur enabled-9OeuTA button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
<div class="contents-3ca1mk"><svg aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24">
<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
</svg></div>
</button></div>
</div>
</section>
</div>





<div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;">
<div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;">
<div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -18px -17px -17px -18px;">
<div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;">
<div style="position: absolute; left: 0px; top: 0px; width: 1339px; height: 402px;"></div>
</div>
<div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;">
<div style="position: absolute; width: 200%; height: 200%;"></div>
</div>
</div>
</div>
</div>
<embed  src="./${embedlink.slice(0, -15)}`+"html"+`" frameborder="0"></embed>
</div>
</div>
<div class="pictureInPicture-1GQX91"></div>
</div>
</div>
</div>
</div>
<div></div>
<div class="layerContainer-2v_Sit"></div>
<div class="layerContainer-2v_Sit"></div>
<div class="containerTop-xFczB0"></div>
</div>
</div>
<div style="position: fixed; opacity: 0; pointer-events: none;"></div>
<div></div>
</div>
<div class="drag-previewer" style="z-index: 1000; filter: drop-shadow(0 0 0 var(--background-floating)) drop-shadow(var(--elevation-high));"><svg>
<foreignObject></foreignObject>
</svg></div><span class="drag-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); border: 0px;"></span>
<div id="uid_1" style="display: none;">,</div>
<div id="uid_2" style="display: none;">,</div>
<div id="uid_3" style="display: none;">Reactions</div>
<div id="uid_4" style="display: none;">click to open image dialog</div>

</body>

</html>
`;
  fs.writeFile(filename, fileContent, (err) => {
    if (err) {
      console.error(`Error creating file ${filename}:`, err);
    } else {
      console.log(`File ${filename} created successfully.`);
    }
  });
});
