!function(e){function t(t){for(var r,o,u=t[0],f=t[1],d=t[2],i=0,s=[];i<u.length;i++)o=u[i],l[o]&&s.push(l[o][0]),l[o]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(e[r]=f[r]);for(c&&c(t);s.length;)s.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var f=n[u];0!==l[f]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},l={19:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var c=f;a.push([458,1,0]),n()}({458:function(e,t,n){"use strict";var r=p(n(2)),l=n(16),a=n(39),o=p(n(235)),u=p(n(44)),f=p(n(60)),d=p(n(56)),c=p(n(71)),i=p(n(21)),s=p(n(3));function p(e){return e&&e.__esModule?e:{default:e}}var m=new f.default({center:i.default.fromLonLat([37.4057,8.81566]),zoom:4}),v=new u.default({layers:[new d.default({name:"OSM",source:new c.default})],view:m});i.default.setProj4(o.default);(0,l.render)(r.default.createElement("div",null,r.default.createElement("div",{id:"map"}),r.default.createElement("div",{className:"example-block"},r.default.createElement("span",null,"A ",r.default.createElement("code",null,"CoordinateReferenceSystemCombo")," with autocomplete mode where CRS are fetched from ",r.default.createElement("a",{href:"http://epsg.io/"},"epsg.io/"),". If a CRS is selected (prop ",r.default.createElement("code",null,"onSelect"),"), the projection is used to perform client-side raster reprojection of OSM layer in map."),r.default.createElement("br",null),r.default.createElement(a.CoordinateReferenceSystemCombo,{emptyTextPlaceholderText:"Type to fetch definitions dynamically",onSelect:function(e){var t=e.code,n=e.value,r=e.proj4def,l=e.bbox;if(null!==t&&null!==n&&null!==r&&null!==l){var a="EPSG:"+t;o.default.defs(a,r);var u=i.default.get(a),d=i.default.getTransform("EPSG:4326",u),c=s.default.applyTransform([l[1],l[2],l[3],l[0]],d);u.setExtent(c);var p=new f.default({projection:u});v.setView(p),p.fit(c)}else v.setView(m)}})),r.default.createElement("div",{className:"example-block"},r.default.createElement("span",null,"A ",r.default.createElement("code",null,"CoordinateReferenceSystemCombo")," with predefined definitions of four CRS. Selecting an option does not affect the map."),r.default.createElement("br",null),r.default.createElement(a.CoordinateReferenceSystemCombo,{predefinedCrsDefinitions:[{code:"25832",value:"ETRS89 / UTM zone 32N"},{code:"31466",value:"DHDN / 3-degree Gauss-Kruger zone 2"},{code:"31467",value:"DHDN / 3-degree Gauss-Kruger zone 3"},{code:"4326",value:"WGS 84"}]}))),document.getElementById("exampleContainer"),function(){v.setTarget("map")})}});