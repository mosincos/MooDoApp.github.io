function GoogleApiLoaded(){window.isGoogleApiLoaded||(window.gapi&&window.gapi.auth?(window.isGoogleApiLoaded=!0,require(["auth"],function(e){e.init()})):numRetries>0&&(numRetries--,setTimeout(GoogleApiLoaded,1e3)))}var requirejs,require,define;!function(e){function t(e,t){return v.call(e,t)}function n(e,t){var n,o,i,r,a,s,c,d,l,u,f=t&&t.split("/"),m=g.map,p=m&&m["*"]||{};if(e&&"."===e.charAt(0))if(t){for(f=f.slice(0,f.length-1),e=f.concat(e.split("/")),d=0;d<e.length;d+=1)if(u=e[d],"."===u)e.splice(d,1),d-=1;else if(".."===u){if(1===d&&(".."===e[2]||".."===e[0]))break;d>0&&(e.splice(d-1,2),d-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((f||p)&&m){for(n=e.split("/"),d=n.length;d>0;d-=1){if(o=n.slice(0,d).join("/"),f)for(l=f.length;l>0;l-=1)if(i=m[f.slice(0,l).join("/")],i&&(i=i[o])){r=i,a=d;break}if(r)break;!s&&p&&p[o]&&(s=p[o],c=d)}!r&&s&&(r=s,a=c),r&&(n.splice(0,a,r),e=n.join("/"))}return e}function o(t,n){return function(){return l.apply(e,w.call(arguments,0).concat([t,n]))}}function i(e){return function(t){return n(t,e)}}function r(e){return function(t){m[e]=t}}function a(n){if(t(p,n)){var o=p[n];delete p[n],h[n]=!0,d.apply(e,o)}if(!t(m,n)&&!t(h,n))throw new Error("No "+n);return m[n]}function s(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function c(e){return function(){return g&&g.config&&g.config[e]||{}}}var d,l,u,f,m={},p={},g={},h={},v=Object.prototype.hasOwnProperty,w=[].slice;u=function(e,t){var o,r=s(e),c=r[0];return e=r[1],c&&(c=n(c,t),o=a(c)),c?e=o&&o.normalize?o.normalize(e,i(t)):n(e,t):(e=n(e,t),r=s(e),c=r[0],e=r[1],c&&(o=a(c))),{f:c?c+"!"+e:e,n:e,pr:c,p:o}},f={require:function(e){return o(e)},exports:function(e){var t=m[e];return"undefined"!=typeof t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:c(e)}}},d=function(n,i,s,c){var d,l,g,v,w,y,b=[];if(c=c||n,"function"==typeof s){for(i=!i.length&&s.length?["require","exports","module"]:i,w=0;w<i.length;w+=1)if(v=u(i[w],c),l=v.f,"require"===l)b[w]=f.require(n);else if("exports"===l)b[w]=f.exports(n),y=!0;else if("module"===l)d=b[w]=f.module(n);else if(t(m,l)||t(p,l)||t(h,l))b[w]=a(l);else{if(!v.p)throw new Error(n+" missing "+l);v.p.load(v.n,o(c,!0),r(l),{}),b[w]=m[l]}g=s.apply(m[n],b),n&&(d&&d.exports!==e&&d.exports!==m[n]?m[n]=d.exports:g===e&&y||(m[n]=g))}else n&&(m[n]=s)},requirejs=require=l=function(t,n,o,i,r){return"string"==typeof t?f[t]?f[t](n):a(u(t,n).f):(t.splice||(g=t,n.splice?(t=n,n=o,o=null):t=e),n=n||function(){},"function"==typeof o&&(o=i,i=r),i?d(e,t,n,o):setTimeout(function(){d(e,t,n,o)},4),l)},l.config=function(e){return g=e,g.deps&&l(g.deps,g.callback),l},define=function(e,n,o){n.splice||(o=n,n=[]),t(m,e)||t(p,e)||(p[e]=[e,n,o])},define.amd={jQuery:!0}}(),define("../../js/lib/almond",function(){}),define("auth",[],function(){function e(){this.clientId="597847337936.apps.googleusercontent.com",this.scopes=["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/drive.install"],this.isLoggedIn=!1}return e.prototype={init:function(){gapi.auth.init(),this.authenticate(!0)},authenticate:function(e,t){var n={client_id:this.clientId,scope:this.scopes,immediate:e,authuser:e?0:-1},o="chrome-extension:"===window.location.protocol,i=!!window.navigator.standalone||o||window.navigator.userAgent.indexOf("FluidApp")>=0,r=i||this.isMobro();r&&!e&&(n.redirect_uri=window.location.protocol+"//"+window.location.host),gapi.auth.authorize(n,function(e){console.log("Landing Page Auth Token: ",e),e&&!e.error&&(this.isLoggedIn=!0),t&&t(this.isLoggedIn)}.bind(this))},isMobro:function(){var e=null;try{new ActiveXObject("")}catch(t){errorName=t.name}try{e=!!new ActiveXObject("htmlfile")}catch(t){e=!1}return e="ReferenceError"!=errorName&&0==e?!1:!0,!e}},new e});var numRetries=2;requirejs(["auth"],function(e){function t(e){var t="",n=["ms","webkit","moz","o"],o=document.body.style;if("string"==typeof o[e])t="";else for(var i=0;i<n.length;i++)if("string"==typeof o["-"+n[i]+"-"+e]){t=n[i];break}var r=t.length>0?e.charAt(0).toUpperCase()+e.slice(1):e;return t?t+r:r}function n(e){for(var t,n=location.hash.substring(1),o=/([^&=]+)=([^&]*)/g;t=o.exec(n);)if(decodeURIComponent(t[1])===e)return decodeURIComponent(t[2]);return void 0}function o(){function e(){p||(L=(L+1)%4,a(d.children[L]))}y=t("transform");var n=(h(),!0),o=navigator.userAgent;E=!!o.match(/iPhone|iPod|iPad|Android|IEMobile/i),E&&document.documentElement.classList.add("mobile"),document.documentElement.classList.remove("hidden"),localStorage.getItem("localSettings")||(localStorage.setItem("localSettings","{}"),n=!1);var c=document.getElementById("exampleHeaders");c&&(k=c.children[1]);var d=document.getElementById("platforms");if(d){for(var l=d.children,u=0;u<l.length;u++)l[u].onclick=s;r(document.getElementById("platformweb")),setTimeout(function(){document.getElementById("platformUnderline").classList.add("trans")},100)}var f=document.getElementById("topDemoText");f&&f.classList.remove("faded"),i(),window.gapi&&GoogleApiLoaded();var m,p=!1,g=5e3,v=document.getElementById("group1");v&&(v.onmouseenter=function(){clearInterval(m)},v.onmouseleave=function(){clearInterval(m),m=setInterval(e,g)},v.onmouseleave());var w=document.getElementsByClassName("emailAddr");if(w)for(var u=0;u<w.length;++u){var b=w[u];b.onfocus=function(){p=!0},b.onblur=function(){p=!1}}}function i(){if(I<b.length){var e=b[I];if(E&&void 0!==e.img){if(e.img){var t="img"+e.id,n=document.getElementById(t);n&&(n.src="/img/ss/"+e.img+".png")}}else if(!E||E&&!e.noMobile){var t="demo"+e.id,n=document.getElementById(t);n&&(n.src=e.src)}I++,E&&i()}}function r(e){var t=40,n=e.childNodes[1],o=n.getBoundingClientRect(),i=o.width+t;document.getElementById("platformUnderline").style[y]="translate("+(o.left+o.width/2)+"px, 0) scale("+i+", 1)",v=e}function a(e){var t=400,n=e.id.replace("platform","");L=Array.prototype.indexOf.call(document.getElementById("platforms").children,e),v.classList.remove("selected");var o=v.id.replace("platform",""),i="web"===o||"web"===n;r(e),e.classList.add("selected");var a=document.getElementById("topDemoSection");a.classList.remove(o),a.classList.add("transitioning"),a.classList.add(n);var s=document.getElementById("demoTop"),c=document.getElementById("demoTopMobile");setTimeout(function(){a.classList.remove("transitioning")},t),i&&("web"===n?(s.classList.remove("hidden"),c.classList.add("hidden")):(s.classList.add("hidden"),c.classList.remove("hidden")))}function s(){a(this)}function c(e,t){var n=document.getElementById(e);if(n){var o=n.contentWindow;o.postMessage(t,"*")}}function d(e){var t=e.data;switch(t){case"loaded":i();break;case"main":case"mainp":case"focus":case"search":case"indent":break;case"power0":case"power1":case"power2":case"power3":case"power4":var n=parseInt(t.replace("power",""),10);m(n);break;case"p0":case"p1":case"p2":case"p3":case"p4":case"p5":var n=parseInt(t.replace("p",""),10);l(n);break;case"f0":case"f1":case"f2":case"f3":case"f4":case"f5":var n=parseInt(t.replace("f",""),10);u(n);break;case"delay":break;case"click":e.source.pauseScript()}}function l(e){var t=document.getElementById("priorityFeatures").children[e];t!==T&&(T&&T.classList.remove("selected"),t.classList.add("selected"),T=t)}function u(e){var t=document.getElementById("focusFeatures").children[e];t!==B&&(B&&B.classList.remove("selected"),t.classList.add("selected"),B=t)}function f(e){var t=document.getElementById("exampleHeaders").children[e];t!==k&&(k&&k.classList.remove("selected"),t.classList.add("selected"),k=t)}function m(e){var t=document.getElementsByClassName("powerFeatures")[0].children[e];t!==A&&(A&&A.classList.remove("selected"),t.classList.add("selected"),A=t)}function p(e){var t="";if("object"==typeof e){var n=[];for(key in e)n[n.length]=encodeURIComponent(key)+"="+encodeURIComponent(e[key]);t=n.join("&").replace(/%20/g,"+")}else self.Assert("string"==typeof e,"Only Objects or Strings are currently supported"),t=e;return t}function g(e){var t=e.url,n=e.type,o=e.cb,i=e.data,r=e.headers,a=new XMLHttpRequest;if(a.onreadystatechange=function(){4===a.readyState&&o(a)},a.open(n.toUpperCase(),t,!0),r)for(var s in r)a.setRequestHeader(s,r[s]);if(i){a.setRequestHeader("Accept","*/*"),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");var c=p(i);a.send(c)}else a.send()}function h(){if(null===q)try{var e=JSON.parse(localStorage.getItem("localSettings"))||{};q=e.activeUser}catch(t){console.log("Error parsing localSettings: ",t),q=void 0}return q}var v,w="http://www.moo.do",y="transform",b=[{id:"Top",src:"/#demo=true&touch=false&data=5&script=none&dmode=0x40d",noMobile:!0},{id:"TopMobile",src:"/#demo=true&data=5&script=none&dmode=0xa1&phone=true&touch=true",noMobile:!0},{id:"Everything",src:"/#demo=true&touch=false&data=15&script=none&dmode=0x3bb",img:"everything"},{id:"Desktop",src:"/#demo=true&touch=false&data=6&script=none&dmode=0x435",noMobile:!0},{id:"Text",src:"/#demo=true&touch=false&data=16&script=none&dmode=0x2bb",img:"text"},{id:"Agenda",src:"/#demo=true&touch=false&data=17&script=none&panes=2&dmode=0x23b",img:"agenda"},{id:"Search",src:"/#demo=true&touch=false&data=18&script=search&dmode=0x2f9"}],I=0,L=0;window.sendToApp=function(){location.href=window.location.protocol+"//"+window.location.host+"/#login=true"},window.sendToDemo=function(){location.href=window.location.protocol+"//"+window.location.host+"/#demo=true"};var x=n("state");if(x)return void(window.location=w+location.hash);var E;window.addEventListener("message",d,!1),window.featureClick=function(e,t){var n="script:"+t;d({data:t}),c("demo"+e,n)},window.exampleClick=function(e){f(e);var t="data:"+(e+5);c("demoDesktop",t)};var T,B,k,A=void 0;window.requestNotification=function(e){var t=document.forms["requestNotification"+e],n=document.getElementById("result"+e),o=t.email.value;return void 0===o||null===o||o.length<5?n.innerText="Please enter a valid email address.":g({type:"POST",url:window.location.protocol+"//www.moo.do/requestNotification",data:{email:o,platform:e},cb:function(e){200===e.status?(t.email.value="",n.innerText="Thanks for your interest!"):n.innerText="There was an error processing your request, please try again in a few minutes."}}),!1};window.requestAuthorization=function(){!e.isLoggedIn&&window.gapi&&window.gapi.auth?e.authenticate(!1,sendToApp):sendToApp()},window.sendToLiveDemo=function(){var e=document.getElementById("examplesWrapper");e&&e.scrollIntoView(!0)};var q=null;window.onresize=function(){var e=document.getElementById("platformUnderline");e&&(e.classList.remove("trans"),r(v),setTimeout(function(){e.classList.add("trans")},0))},"interactive"===document.readyState||"complete"===document.readyState?o():document.addEventListener("DOMContentLoaded",o,!1)}),define("landing",function(){});