!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=2)}([function(e,n,r){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=function(e,n){var r=e[1]||"",t=e[3];if(!t)return r;if(n&&"function"==typeof btoa){var o=(a=t,i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(c," */")),s=t.sources.map(function(e){return"/*# sourceURL=".concat(t.sourceRoot).concat(e," */")});return[r].concat(s).concat([o]).join("\n")}var a,i,c;return[r].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(r,"}"):r}).join("")},n.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var t={},o=0;o<this.length;o++){var s=this[o][0];null!=s&&(t[s]=!0)}for(var a=0;a<e.length;a++){var i=e[a];null!=i[0]&&t[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="(".concat(i[2],") and (").concat(r,")")),n.push(i))}},n}},function(e,n,r){"use strict";var t,o={},s=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}();function i(e,n){for(var r=[],t={},o=0;o<e.length;o++){var s=e[o],a=n.base?s[0]+n.base:s[0],i={css:s[1],media:s[2],sourceMap:s[3]};t[a]?t[a].parts.push(i):r.push(t[a]={id:a,parts:[i]})}return r}function c(e,n){for(var r=0;r<e.length;r++){var t=e[r],s=o[t.id],a=0;if(s){for(s.refs++;a<s.parts.length;a++)s.parts[a](t.parts[a]);for(;a<t.parts.length;a++)s.parts.push(f(t.parts[a],n))}else{for(var i=[];a<t.parts.length;a++)i.push(f(t.parts[a],n));o[t.id]={id:t.id,refs:1,parts:i}}}}function l(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var t=r.nc;t&&(e.attributes.nonce=t)}if(Object.keys(e.attributes).forEach(function(r){n.setAttribute(r,e.attributes[r])}),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var u,A=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function d(e,n,r,t){var o=r?"":t.css;if(e.styleSheet)e.styleSheet.cssText=A(n,o);else{var s=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(s,a[n]):e.appendChild(s)}}function p(e,n,r){var t=r.css,o=r.media,s=r.sourceMap;if(o&&e.setAttribute("media",o),s&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var m=null,g=0;function f(e,n){var r,t,o;if(n.singleton){var s=g++;r=m||(m=l(n)),t=d.bind(null,r,s,!1),o=d.bind(null,r,s,!0)}else r=l(n),t=p.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=s());var r=i(e,n);return c(r,n),function(e){for(var t=[],s=0;s<r.length;s++){var a=r[s],l=o[a.id];l&&(l.refs--,t.push(l))}e&&c(i(e,n),n);for(var u=0;u<t.length;u++){var A=t[u];if(0===A.refs){for(var d=0;d<A.parts.length;d++)A.parts[d]();delete o[A.id]}}}}},function(e,n,r){"use strict";r.r(n);r(3),r(4),r(6),r(8),r(10),r(12),r(14),r(16),r(18),r(20),r(22),r(24),r(26)},function(e,n){let r=!1,t=!1,o=500;const s=e=>Math.floor(Math.random()*Math.floor(e)),a=()=>{let e=[],n=0;for(let r=0;r<13;r++){let r=[];for(let e=0;e<13;e++)r.push(document.getElementsByClassName("game-field")[0].children[n]),n++;e.push(r)}return e},i=e=>{let n=a();for(let r=0;r<13;r++)for(let t=0;t<13;t++)if(e===n[r][t])return[r,t]},c=e=>{let n=i(e),r=a(),t=0;return"floor"!==r[n[0]-1][n[1]].className||(t+=1),"floor"!==r[n[0]+1][n[1]].className||(t+=1),"floor"!==r[n[0]][n[1]-1].className||(t+=1),"floor"!==r[n[0]][n[1]+1].className||(t+=1),t>=2},l=()=>{let e,n=!1;for(;!n;)e=document.getElementsByClassName("floor")[s(document.getElementsByClassName("floor").length)],!0!==c(e)||(n=!0);return e},u=e=>{let n=i(e),t=a();"floor"===t[n[0]-1][n[1]].className&&(t[n[0]-1][n[1]].className=e.className,e.className="floor"),"enemy"!==t[n[0]-1][n[1]].className||"player"!==e.className||(r=!0),"player"!==t[n[0]-1][n[1]].className||"enemy"!==e.className||(r=!0)},A=e=>{let n=i(e),t=a();"floor"===t[n[0]+1][n[1]].className&&(t[n[0]+1][n[1]].className=e.className,e.className="floor"),"enemy"!==t[n[0]+1][n[1]].className||"player"!==e.className||(r=!0),"player"!==t[n[0]+1][n[1]].className||"enemy"!==e.className||(r=!0)},d=e=>{let n=i(e),t=a();"floor"===t[n[0]][n[1]+1].className&&(t[n[0]][n[1]+1].className=e.className,e.className="floor"),"enemy"!==t[n[0]][n[1]+1].className||"player"!==e.className||(r=!0),"player"!==t[n[0]][n[1]+1].className||"enemy"!==e.className||(r=!0)},p=e=>{let n=i(e),t=a();"floor"===t[n[0]][n[1]-1].className&&(t[n[0]][n[1]-1].className=e.className,e.className="floor"),"enemy"!==t[n[0]][n[1]-1].className||"player"!==e.className||(r=!0),"player"!==t[n[0]][n[1]-1].className||"enemy"!==e.className||(r=!0)},m=()=>{(()=>{let e=document.getElementsByClassName("enemy");for(let n=0;n<e.length;n++){let r=s(4);0===r?u(e[n]):1===r?A(e[n]):2===r?p(e[n]):d(e[n])}})(),o=10*(100-document.getElementsByClassName("speed-slider")[0].value),setTimeout(m,o)},g=e=>{(()=>0===document.getElementsByClassName("enemy").length&&document.getElementsByClassName("player")[0]===document.getElementById("door"))()?(alert("Your result: "+(((new Date).getTime()-e)/1e3).toString()+" seconds"),document.getElementsByClassName("next-level")[0].style.display="block"):setTimeout(()=>g(e),300)};document.addEventListener("keydown",e=>{t||(68===e.which?d(document.getElementsByClassName("player")[0]):65===e.which?p(document.getElementsByClassName("player")[0]):87===e.which?u(document.getElementsByClassName("player")[0]):83!==e.which||A(document.getElementsByClassName("player")[0]))}),document.addEventListener("click",()=>{if(!t){let e=!1,n=i(document.getElementsByClassName("player")[0]);"door"!==a()[n[0]][n[1]].id||(e=!0),a()[n[0]][n[1]].id="bomb",setTimeout(()=>((e,n)=>{const t=e=>{"brick"===e.className||"enemy"===e.className?e.className="floor":"player"!==e.className||(r=!0)};let o=a(),s=i(e);t(o[s[0]][s[1]]),t(o[s[0]-1][s[1]]),t(o[s[0]+1][s[1]]),t(o[s[0]][s[1]-1]),t(o[s[0]][s[1]+1]),o[s[0]][s[1]].removeAttribute("id"),!n||(o[s[0]][s[1]].id="door")})(a()[n[0]][n[1]],e),2e3)}}),document.getElementsByClassName("next-level")[0].addEventListener("click",()=>document.location.reload(!0)),window.onload=()=>{(()=>{for(let e=0;e<13;e++)for(let n=0;n<13;n++){let r=document.createElement("section");r.className="floor",0!==s(4)||(r.className="brick"),0!==e&&0!==n&&12!==e&&12!==n||(r.className="wall"),e%2!=0||n%2!=0||(r.className="wall"),document.getElementsByClassName("game-field")[0].appendChild(r)}l().className="player";for(let e=0;e<3;e++)document.getElementsByClassName("floor")[s(document.getElementsByClassName("floor").length)].className="enemy";document.getElementsByClassName("brick")[s(document.getElementsByClassName("brick").length)].id="door"})();const e=(new Date).getTime();document.getElementsByClassName("speed-slider")[0].onmouseenter=()=>t=!0,document.getElementsByClassName("speed-slider")[0].onmouseleave=()=>t=!1,document.getElementsByClassName("next-level")[0].onmouseenter=()=>t=!0,document.getElementsByClassName("next-level")[0].onmouseleave=()=>t=!1,setInterval(()=>{!r||document.location.reload(!0)},100),setTimeout(()=>g(e),300),setTimeout(m,o)}},function(e,n,r){var t=r(5);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(1)(t,o);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!0)).push([e.i,'body {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n\tbackground: url("./src/img/background.jpg") 100% 100% no-repeat;\n\tbackground-size: cover;\n}\n',"",{version:3,sources:["body.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;CACtB,+DAA+D;CAC/D,sBAAsB;AACvB",file:"body.css",sourcesContent:['body {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n\tbackground: url("./src/img/background.jpg") 100% 100% no-repeat;\n\tbackground-size: cover;\n}\n']}])},function(e,n,r){var t=r(7);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(1)(t,o);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!0)).push([e.i,'#bomb{\n    background: url("./src/img/bomb.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n',"",{version:3,sources:["bomb.css"],names:[],mappings:"AAAA;IACI,yDAAyD;IACzD,sBAAsB;IACtB,kCAAkC;AACtC",file:"bomb.css",sourcesContent:['#bomb{\n    background: url("./src/img/bomb.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n']}])},function(e,n,r){var t=r(9);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(1)(t,o);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!0)).push([e.i,'.brick{\n    background: url("./src/img/brick.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n',"",{version:3,sources:["brick.css"],names:[],mappings:"AAAA;IACI,0DAA0D;IAC1D,sBAAsB;IACtB,kCAAkC;AACtC",file:"brick.css",sourcesContent:['.brick{\n    background: url("./src/img/brick.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n']}])},function(e,n,r){var t=r(11);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(1)(t,o);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!0)).push([e.i,'.brick#door{\n    background: url("./src/img/brick.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n\n#door.floor{\n    background: url("./src/img/door.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n',"",{version:3,sources:["door.css"],names:[],mappings:"AAAA;IACI,0DAA0D;IAC1D,sBAAsB;IACtB,kCAAkC;AACtC;;AAEA;IACI,yDAAyD;IACzD,sBAAsB;IACtB,kCAAkC;AACtC",file:"door.css",sourcesContent:['.brick#door{\n    background: url("./src/img/brick.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n\n#door.floor{\n    background: url("./src/img/door.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n']}])},function(e,n,r){var t=r(13);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(1)(t,o);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!0)).push([e.i,'.enemy{\n    background: url("./src/img/enemy.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n',"",{version:3,sources:["enemy.css"],names:[],mappings:"AAAA;IACI,0DAA0D;IAC1D,sBAAsB;IACtB,kCAAkC;AACtC",file:"enemy.css",sourcesContent:['.enemy{\n    background: url("./src/img/enemy.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n']}])},function(e,n,r){var t=r(15);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(1)(t,o);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!0)).push([e.i,'.floor{\n    background: url("./src/img/floor.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n',"",{version:3,sources:["floor.css"],names:[],mappings:"AAAA;IACI,0DAA0D;IAC1D,sBAAsB;IACtB,kCAAkC;AACtC",file:"floor.css",sourcesContent:['.floor{\n    background: url("./src/img/floor.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n']}])},function(e,n,r){var t=r(17);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(1)(t,o);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!0)).push([e.i,".game-field{\n    display: grid;\n    height: 86%;\n    width: 50%;\n    grid-template-columns: repeat(13, 1fr);\n    grid-template-rows: repeat(13, 1fr);\n    border: black 3px solid;\n    box-sizing: border-box;\n}","",{version:3,sources:["game-field.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,WAAW;IACX,UAAU;IACV,sCAAsC;IACtC,mCAAmC;IACnC,uBAAuB;IACvB,sBAAsB;AAC1B",file:"game-field.css",sourcesContent:[".game-field{\n    display: grid;\n    height: 86%;\n    width: 50%;\n    grid-template-columns: repeat(13, 1fr);\n    grid-template-rows: repeat(13, 1fr);\n    border: black 3px solid;\n    box-sizing: border-box;\n}"]}])},function(e,n,r){var t=r(19);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(1)(t,o);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!0)).push([e.i,"html {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n}","",{version:3,sources:["html.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;AAChB",file:"html.css",sourcesContent:["html {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n}"]}])},function(e,n,r){var t=r(21);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(1)(t,o);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!0)).push([e.i,'.player{\n    background: url("./src/img/player.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n',"",{version:3,sources:["player.css"],names:[],mappings:"AAAA;IACI,2DAA2D;IAC3D,sBAAsB;IACtB,kCAAkC;AACtC",file:"player.css",sourcesContent:['.player{\n    background: url("./src/img/player.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n']}])},function(e,n,r){var t=r(23);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(1)(t,o);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!0)).push([e.i,'.next-level{\n    position: absolute;\n    right: 3%;\n    bottom: 3%;\n    border-radius: 100%;\n    height: 15%;\n    width: 7.5%;\n    cursor: pointer;\n    border-color: #A52A2A;\n    border-style: dashed;\n    border-width: 0.2vw;\n    background: lawngreen url("./src/img/arrow.png") no-repeat 100% 100%;;\n    background-size: cover;\n    outline: none;\n    transition: 1s;\n    display: none;\n}\n.next-level:hover{\n    background-color: #000080;\n}\n',"",{version:3,sources:["next-level.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,WAAW;IACX,WAAW;IACX,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,mBAAmB;IACnB,oEAAoE;IACpE,sBAAsB;IACtB,aAAa;IACb,cAAc;IACd,aAAa;AACjB;AACA;IACI,yBAAyB;AAC7B",file:"next-level.css",sourcesContent:['.next-level{\n    position: absolute;\n    right: 3%;\n    bottom: 3%;\n    border-radius: 100%;\n    height: 15%;\n    width: 7.5%;\n    cursor: pointer;\n    border-color: #A52A2A;\n    border-style: dashed;\n    border-width: 0.2vw;\n    background: lawngreen url("./src/img/arrow.png") no-repeat 100% 100%;;\n    background-size: cover;\n    outline: none;\n    transition: 1s;\n    display: none;\n}\n.next-level:hover{\n    background-color: #000080;\n}\n']}])},function(e,n,r){var t=r(25);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(1)(t,o);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!0)).push([e.i,".speed-slider{\n    transform: rotate(270deg);\n    -moz-transform: rotate(270deg);\n    -webkit-appearance: none;\n    width: 100%;\n    height: 15px;\n    border-radius: 5px;\n    background: #d3d3d3;\n    outline: none;\n    opacity: 0.7;\n    -webkit-transition: .2s;\n    transition: opacity .2s;\n}\n\n.speed-slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: lawngreen;\n    cursor: pointer;\n}\n\n.speed-slider::-moz-range-thumb {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: lawngreen;\n    cursor: pointer;\n}","",{version:3,sources:["speed-slider.css"],names:[],mappings:"AAAA;IACI,yBAAyB;IACzB,8BAA8B;IAC9B,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;AACnB",file:"speed-slider.css",sourcesContent:[".speed-slider{\n    transform: rotate(270deg);\n    -moz-transform: rotate(270deg);\n    -webkit-appearance: none;\n    width: 100%;\n    height: 15px;\n    border-radius: 5px;\n    background: #d3d3d3;\n    outline: none;\n    opacity: 0.7;\n    -webkit-transition: .2s;\n    transition: opacity .2s;\n}\n\n.speed-slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: lawngreen;\n    cursor: pointer;\n}\n\n.speed-slider::-moz-range-thumb {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: lawngreen;\n    cursor: pointer;\n}"]}])},function(e,n,r){var t=r(27);"string"==typeof t&&(t=[[e.i,t,""]]);var o={insert:"head",singleton:!1};r(1)(t,o);t.locals&&(e.exports=t.locals)},function(e,n,r){(e.exports=r(0)(!0)).push([e.i,'.wall{\n    background: url("./src/img/wall.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n',"",{version:3,sources:["wall.css"],names:[],mappings:"AAAA;IACI,yDAAyD;IACzD,sBAAsB;IACtB,kCAAkC;AACtC",file:"wall.css",sourcesContent:['.wall{\n    background: url("./src/img/wall.png") 100% 100% no-repeat;;\n    background-size: cover;\n    background-position: center center;\n}\n']}])}]);
