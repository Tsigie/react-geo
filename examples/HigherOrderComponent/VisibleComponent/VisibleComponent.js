!function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],s=0,f=[];s<u.length;s++)i=u[s],a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(p&&p(t);f.length;)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={3:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=l;o.push([440,1,0]),n()}({440:function(e,t,n){"use strict";var r=i(n(122));n(135);var a=i(n(2)),o=n(16);function i(e){return e&&e.__esModule?e:{default:e}}var u=(0,n(39).isVisibleComponent)(r.default),l=[{name:"visibleButtonName"},{name:"anotherVisibleButtonName"}];(0,o.render)(a.default.createElement("div",null,a.default.createElement(u,{name:"visibleButtonName",activeModules:l,type:"primary",shape:"circle",icon:"search"}),a.default.createElement(u,{name:"notVisibleButtonName",activeModules:l,type:"primary",shape:"circle",icon:"search"}),a.default.createElement(u,{name:"anotherVisibleButtonName",activeModules:l,type:"primary",shape:"circle",icon:"poweroff"})),document.getElementById("exampleContainer"))}});