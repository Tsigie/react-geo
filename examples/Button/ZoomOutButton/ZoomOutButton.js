!function(e){function t(t){for(var r,a,l=t[0],c=t[1],f=t[2],p=0,s=[];p<l.length;p++)a=l[p],o[a]&&s.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(i&&i(t);s.length;)s.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={22:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var i=c;u.push([465,1,0]),n()}({465:function(e,t,n){"use strict";var r=p(n(2)),o=n(16),u=p(n(38)),a=p(n(49)),l=p(n(47)),c=p(n(61)),f=p(n(19)),i=n(33);function p(e){return e&&e.__esModule?e:{default:e}}var s=new u.default({layers:[new l.default({name:"OSM",source:new c.default})],view:new a.default({center:f.default.fromLonLat([37.4057,8.81566]),zoom:19})});(0,o.render)(r.default.createElement("div",null,r.default.createElement("div",{id:"map",style:{height:"400px"}}),r.default.createElement("div",{className:"example-block"},r.default.createElement("span",null,"Zoom out button:"),r.default.createElement(i.ZoomOutButton,{map:s},"Zoom out (-)"))),document.getElementById("exampleContainer"),function(){s.setTarget("map")})}});