(this["webpackJsonpnumber-game"]=this["webpackJsonpnumber-game"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r,a=t(0),o=t.n(a),c=t(3),u=t.n(c),l=(t(9),t(1)),i=(t(10),function(e){var n=e.rowNum,t=e.cellNum,r=e.value,c=e.onClick,u=Object(a.useRef)();return o.a.createElement("td",{className:"slide_td",ref:u,onMouseEnter:function(){u.current.style.backgroundColor="#e0e0e0"},onMouseLeave:function(){u.current.style.backgroundColor="white"},onClick:function(e){c(e,n,t)}}," ",r)}),s=function(e){var n,t=e.rowNum,r=e.value,a=e.onClick;return n=r,o.a.createElement("tr",{className:"slide_tr"},n.map((function(e,n){return o.a.createElement(i,{key:n,onClick:a,rowNum:t,cellNum:n,value:e})})))},m=function(e,n){return n.filter((function(n){return n===e})).length>0},f=function(){var e=function(){for(var e=[],n=0;n<9;){var t=Math.floor(9*Math.random());m(t,e)||(e.push(t),n++)}return e}();return new Array(3).fill(null).map((function(){return[e.pop(),e.pop(),e.pop()]}))},v=function(){var e=Object(a.useState)(new Array(3).fill(null).map((function(){return[0,0,0]}))),n=Object(l.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(!1),i=Object(l.a)(u,2),m=i[0],v=i[1],d=Object(a.useRef)(),b=function(e,n,a){var o=e.nativeEvent.target.innerText,u=t.slice();0!==o&&(n-1>=0&&0===u[n-1][a]&&(u[n][a]=0,u[n-1][a]=o,c(u)),a+1<=2&&0===u[n][a+1]&&(u[n][a]=0,u[n][a+1]=o,c(u)),n+1<=2&&0===u[n+1][a]&&(u[n][a]=0,u[n+1][a]=o,c(u)),a-1>=0&&0===u[n][a-1]&&(u[n][a]=0,u[n][a-1]=o,c(u)),"1,2,3,4,5,6,7,8,0"===t.join()&&(clearInterval(r),v(!1),alert("Game Clear!!!")))},p=function(){clearInterval(r),v(!1),d.current.innerText="00:00:00",c([[0,0,0],[0,0,0],[0,0,0]])};return o.a.createElement("div",null,o.a.createElement("table",{className:"slide_table"},o.a.createElement("tbody",null,t.map((function(e,n){return o.a.createElement(s,{key:n,rowNum:n,value:e,onClick:b})})))),o.a.createElement("h2",{ref:d},"00:00:00"),m?o.a.createElement("button",{onClick:p},"\uac8c\uc784 \uc885\ub8cc"):o.a.createElement("button",{onClick:function(){if(p){c(f()),v(!0);var e=function(){var e=new Date,n=e.getHours(),t=e.getMinutes(),r=e.getSeconds(),a=function(e){return e<10?"0"+e:e};d.current.innerText=a(n)+":"+a(t)+":"+a(r)};e(),r=setInterval(e,1e3)}}},"\uac8c\uc784 \uc2dc\uc791"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.12859564.chunk.js.map