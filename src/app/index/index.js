"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_marked=require("marked"),_marked2=_interopRequireDefault(_marked),_polytheneListList=require("polythene/list/list"),_polytheneListList2=_interopRequireDefault(_polytheneListList),_polytheneListTileListTile=require("polythene/list-tile/list-tile"),_polytheneListTileListTile2=_interopRequireDefault(_polytheneListTileListTile),_polytheneHeaderPanelHeaderPanel=require("polythene/header-panel/header-panel"),_polytheneHeaderPanelHeaderPanel2=_interopRequireDefault(_polytheneHeaderPanelHeaderPanel),_polytheneButtonButton=require("polythene/button/button"),_polytheneButtonButton2=_interopRequireDefault(_polytheneButtonButton),_hJs=require("h.js"),_hJs2=_interopRequireDefault(_hJs),_polytheneCommonWebfontloader=require("polythene/common/webfontloader"),_polytheneCommonWebfontloader2=_interopRequireDefault(_polytheneCommonWebfontloader);require("polythene/theme/theme");var _polytheneCommonStyler=require("polythene/common/styler"),_polytheneCommonStyler2=_interopRequireDefault(_polytheneCommonStyler),_appAppAppStyle=require("app/app/app-style"),_appAppAppStyle2=_interopRequireDefault(_appAppAppStyle),_appAppSyntax=require("app/app/syntax"),_appAppSyntax2=_interopRequireDefault(_appAppSyntax);_polytheneCommonWebfontloader2.default.add("google","Inconsolata:400,700:latin"),_polytheneCommonStyler2.default.add("polythene-docs-app",_appAppAppStyle2.default,_appAppSyntax2.default);var defaultTitle="Polythene Documentation",links=[{label:null,links:[{url:"/polythene",name:"Introduction",title:defaultTitle,demo:"http://arthurclemens.github.io/Polythene-examples/index.html",label:"View examples"}]},{label:"Components",links:[{url:"/checkbox",name:"Checkbox",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/checkbox"},{url:"/radio-button",name:"Radio button",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/radio-button"},{url:"/switch",name:"Switch",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/switch"},{url:"/spinner",name:"Spinner",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/spinner"},{url:"/textfield",name:"Textfield",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/textfield"},{url:"/search",name:"Search",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/search"},{url:"/header-panel",name:"Header Panel",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/header-panel"},{url:"/toolbar",name:"Toolbar",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/toolbar"},{url:"/list",name:"List",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/list"},{url:"/dialog",name:"Dialog",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/dialog"},{url:"/selection-control",name:"Selection control"},{url:"/menu",name:"Menu",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/menu"},{url:"/tabs",name:"Tabs",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/tabs"},{url:"/card",name:"Card",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/card"},{url:"/notification",name:"Notification and Snackbar",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/notification"},{url:"/button",name:"Button",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/button"},{url:"/icon-button",name:"Icon Button",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/icon-button"},{url:"/fab",name:"Floating Action Button",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/fab"},{url:"/slider",name:"Slider",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/slider"},{url:"/list-tile",name:"List Tile",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/list-tile"},{url:"/svg",name:"SVG",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/svg"},{url:"/icon",name:"Icon",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/icon"},{url:"/ripple",name:"Ripple",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/ripple"},{url:"/shadow",name:"Shadow",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/shadow"},{url:"/font-roboto",name:"Roboto Font",demo:null}]},{label:"Styling",links:[{url:"/theme",name:"Theming",demo:null},{url:"/layout",name:"Layout",demo:"http://arthurclemens.github.io/Polythene-examples/index.html#/layout"}]}],linkMap={};links.forEach(function(e){e.links.forEach(function(e){linkMap[e.url]=e})});var sortLinkData=function(l,n){var e=l.name.toLowerCase(),t=n.name.toLowerCase();return e>t?1:t>e?-1:0},baseUrl=links[0].links[0].url,navItem=function(e,t,l){return _mithril2.default.component(_polytheneListTileListTile2.default,{title:e,url:{href:t,config:_mithril2.default.route},class:l?"highlight":""})},navigation={};navigation.view=function(){var e=void 0;return(0,_mithril2.default)(".drawer.pe-dark-theme",_mithril2.default.component(_polytheneHeaderPanelHeaderPanel2.default,{header:{toolbar:{topBar:(0,_mithril2.default)(".title","Polythene")}},mode:"waterfall",fixed:!0,content:[links.map(function(t){return _mithril2.default.component(_polytheneListList2.default,{header:t.label?{title:t.label}:null,tiles:t.links.sort(sortLinkData).map(function(t){return e=_mithril2.default.route()===t.url,navItem(t.name,t.url,e)})})}),(0,_mithril2.default)(".footer",_mithril2.default.trust('Polythene by Arthur Clemens 2015. Project page on <a href="https://github.com/ArthurClemens/Polythene">Github</a>.'))],restoreScrollPositionId:"drawer"}))};var main={};main.view=function(u,t){var e=t.currentLink,l=t.content,o=e.name,n=l?(0,_marked2.default)(l):"",r={href:e.demo,target:"_blank"},i=e.demo?_mithril2.default.component(_polytheneButtonButton2.default,{label:e.label||"View demo",url:r}):null,a=n?_mithril2.default.trust(n):(0,_mithril2.default)("div","Nothing here");return(0,_mithril2.default)(".main.flex",_mithril2.default.component(_polytheneHeaderPanelHeaderPanel2.default,{header:{toolbar:{topBar:[(0,_mithril2.default)(".title",[o,i])]}},mode:"waterfall",content:(0,_mithril2.default)(".doc-content",{config:function(e){Array.from(document.querySelectorAll("pre code")).forEach(function(e){e.innerHTML=(0,_hJs2.default)(e.textContent)});var t=[].slice.call(e.querySelectorAll("a"));t.forEach(function(e){var t=e.getAttribute("href");t.match(/^http/)||(e.onclick=function(e){e.preventDefault(),_mithril2.default.route(t.replace("#","/"))})})}},a),updateContentOnScroll:!1}))};var app={};app.controller=function(){var e=_mithril2.default.request({method:"GET",url:"app/docs/"+_mithril2.default.route.param("module")+".md",background:!1,deserialize:function(t){var e=document.querySelector(".pe-header-panel__main-container");return e&&(e.scrollTop=0),t}}),t=function(){return linkMap[_mithril2.default.route()]};return{docs:e,currentLink:t}},app.view=function(e){var l=e.docs(),t=e.currentLink()||{title:"",url:"/"};return[(0,_mithril2.default)(".scaffold.layout.horizontal.reverse",[_mithril2.default.component(main,{currentLink:t,content:l}),_mithril2.default.component(navigation,{currentLink:t})])]},_mithril2.default.route.mode="hash",_mithril2.default.route(document.body,baseUrl,{"/:module":app}),window.addEventListener("pageshow",function(e){e.persisted&&setTimeout(function(){window.location.reload()},0)},!1);