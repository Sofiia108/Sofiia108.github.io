(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"body{\r\n    background-color: aquamarine;\r\n}\r\n",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var d=i(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:v(f,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,l=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function v(e,n){var t,r,o;if(n.singleton){var a=h++;t=p||(p=s(n)),r=d.bind(null,t,a,!1),o=d.bind(null,t,a,!0)}else t=s(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var s=c(e,n),u=0;u<t.length;u++){var l=i(t[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=s}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{function e(){const e=new Map([["price1",15.678],["price2",123.965],["price3",90.2345]]),n=[...e.values()],t=Math.max(...n),r=Math.min(...n),o=n.reduce(((e,n)=>e+n),0),a=n.reduce(((e,n)=>e+Math.floor(n)),0),i=100*Math.round(o/100),c=a%2==0,s=(500-o).toFixed(2),u=(o/e.size).toFixed(2),l=Math.floor(101*Math.random())+0;return`    Максимальна ціна: ${t},\n    Мінімальна ціна: ${r}\n    Вартість всіх товарів: ${o}\n    Ціла частина вартості товарів: ${a}\n    Округлена до сотень вартість всіх товарів: ${i}\n    ${c?"Вартість всіх товарів є парним числом":"Вартість всіх товарів є непарним числом"}\n    Решта із 500 грн: ${s}\n    Середнє знаечння цін: ${u}\n    Випадкова знижка становить: ${l}\n    Ціна зі знижкою для товару 1: ${parseInt(e.get("price1"))*(100-l)/100}\n    Ціна зі знижкою для товару 2: ${parseInt(e.get("price2"))*(100-l)/100}\n    Ціна зі знижкою для товару 3: ${parseInt(e.get("price3"))*(100-l)/100}\n    Собівартість товару 1: ${(e.get("price1")/2-parseInt(e.get("price1"))*l/100).toFixed(2)}\n    Собівартість товару 2: ${(e.get("price2")/2-parseInt(e.get("price2"))*l/100).toFixed(2)}\n    Собівартість товару 3: ${(e.get("price3")/2-parseInt(e.get("price3"))*l/100).toFixed(2)} `}console.log(e());var n,r=t(379),o=t.n(r),a=t(28);function i(e,n){return 0===n?1:e*i(e,n-1)}function c(e){const n=e;if(n.includes("$"))return(25*parseFloat(n)).toLocaleString("en-US",{style:"currency",currency:"UAH"});if(n.includes("UAH")||n.includes("UAH".toLowerCase()))return(parseFloat(n)/25).toLocaleString("en-US",{style:"currency",currency:"USD"});throw new Error("Sorry, we cannot convert this currency")}function s(e=8){const n=e;return Array.from({length:n},(()=>Math.floor(9*Math.random()))).join("")}function u(e){return e===e.split("").reverse().join("")}o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals,console.log(`        Функція №1: ${1234567,Math.max(...Array.from(String(1234567),Number))} \n        Функція №2: ${i(2,5)}\n        Функція №3: ${n="SOFIa",n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()}\n        Функція №4: ${18,1.5,1e3,(1e3*(1-.195)).toFixed(2)}\n        Функція №5: ${3,56,(53*Math.random()+3).toFixed(0)}\n        Функція №6: ${"string to check".split("s").length-1}\n        Функція №7: ${c("2500UAH")} або ${c("100$")} або ${c("2500uah")}\n        Функція №8: ${s()} або ${s(12)} \n        Функція №9: ${"e","ejjed","ejjed".replaceAll("e","")}\n        Функція №10: ${u("emme")} або ${u("jkkklk")}\n        Функція №11: ${function(e){const n="amazzing";let t="";for(let e=0;e<n.length;e++)n.lastIndexOf(n[e])==n.indexOf(n[e])&&(t+=n[e]);return t}()}`),e();var l=i(4,2);console.log(l)})()})();