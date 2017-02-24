function GoogleApiLoaded(){window.isGoogleApiLoaded||(window.gapi&&window.gapi.auth?(window.isGoogleApiLoaded=!0,require(["auth"],function(e){e.init(function(){require(["util"],function(e){e.setSegment(Segment.ExistingUser)})})})):numRetries>0&&(numRetries--,setTimeout(GoogleApiLoaded,1e3)))}var requirejs,require,define;!function(e){function t(e,t){return w.call(e,t)}function i(e,t){var i,o,n,a,s,r,d,c,l,m,u,g=t&&t.split("/"),p=h.map,f=p&&p["*"]||{};if(e&&"."===e.charAt(0))if(t){for(g=g.slice(0,g.length-1),e=e.split("/"),s=e.length-1,h.nodeIdCompat&&y.test(e[s])&&(e[s]=e[s].replace(y,"")),e=g.concat(e),l=0;l<e.length;l+=1)if(u=e[l],"."===u)e.splice(l,1),l-=1;else if(".."===u){if(1===l&&(".."===e[2]||".."===e[0]))break;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((g||f)&&p){for(i=e.split("/"),l=i.length;l>0;l-=1){if(o=i.slice(0,l).join("/"),g)for(m=g.length;m>0;m-=1)if(n=p[g.slice(0,m).join("/")],n&&(n=n[o])){a=n,r=l;break}if(a)break;!d&&f&&f[o]&&(d=f[o],c=l)}!a&&d&&(a=d,r=c),a&&(i.splice(0,r,a),e=i.join("/"))}return e}function o(t,i){return function(){var o=v.call(arguments,0);return"string"!=typeof o[0]&&1===o.length&&o.push(null),l.apply(e,o.concat([t,i]))}}function n(e){return function(t){return i(t,e)}}function a(e){return function(t){g[e]=t}}function s(i){if(t(p,i)){var o=p[i];delete p[i],f[i]=!0,c.apply(e,o)}if(!t(g,i)&&!t(f,i))throw new Error("No "+i);return g[i]}function r(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function d(e){return function(){return h&&h.config&&h.config[e]||{}}}var c,l,m,u,g={},p={},h={},f={},w=Object.prototype.hasOwnProperty,v=[].slice,y=/\.js$/;m=function(e,t){var o,a=r(e),d=a[0];return e=a[1],d&&(d=i(d,t),o=s(d)),d?e=o&&o.normalize?o.normalize(e,n(t)):i(e,t):(e=i(e,t),a=r(e),d=a[0],e=a[1],d&&(o=s(d))),{f:d?d+"!"+e:e,n:e,pr:d,p:o}},u={require:function(e){return o(e)},exports:function(e){var t=g[e];return"undefined"!=typeof t?t:g[e]={}},module:function(e){return{id:e,uri:"",exports:g[e],config:d(e)}}},c=function(i,n,r,d){var c,l,h,w,v,y,b=[],x=typeof r;if(d=d||i,"undefined"===x||"function"===x){for(n=!n.length&&r.length?["require","exports","module"]:n,v=0;v<n.length;v+=1)if(w=m(n[v],d),l=w.f,"require"===l)b[v]=u.require(i);else if("exports"===l)b[v]=u.exports(i),y=!0;else if("module"===l)c=b[v]=u.module(i);else if(t(g,l)||t(p,l)||t(f,l))b[v]=s(l);else{if(!w.p)throw new Error(i+" missing "+l);w.p.load(w.n,o(d,!0),a(l),{}),b[v]=g[l]}h=r?r.apply(g[i],b):void 0,i&&(c&&c.exports!==e&&c.exports!==g[i]?g[i]=c.exports:h===e&&y||(g[i]=h))}else i&&(g[i]=r)},requirejs=require=l=function(t,i,o,n,a){if("string"==typeof t)return u[t]?u[t](i):s(m(t,i).f);if(t&&!t.splice){if(h=t,h.deps&&l(h.deps,h.callback),!i)return;i.splice?(t=i,i=o,o=null):t=e}return i=i||function(){},"function"==typeof o&&(o=n,n=a),n?c(e,t,i,o):setTimeout(function(){c(e,t,i,o)},0),l},l.config=function(e){return l(e)},requirejs._defined=g,define=function(e,i,o){if("string"!=typeof e)throw new Error("Incorrect module build - no module name");i&&i.splice||(o=i,i=[]),t(g,e)||t(p,e)||(p[e]=[e,i,o])},define.amd={jQuery:!0}}(),define("../../js/lib/almond",function(){}),define("DemoManager",[],function(){function e(){this.init(),this._preferImages=this.isMobile()||this.isLegacyBrowser(),this._forceVideo=this.isMobile()||this.isLegacyBrowser(),this._noLoadDelay=this.isMobile(),this._isRetina=this.isRetina(),this._isLegacy=this.isLegacyBrowser(),this._onDemoLoaded=function(){},this._onDemoDone=function(){},this._onDemoInteracted=function(){},this.configLoaded=!1,this.videoLoaded=!1,this._loadingVideoPlayer=!1,this._videoLibLoaded=!1,this._videoQueue=[],this.demos=[],this.demoIndex=0,this.loadingDemo=void 0,window.addEventListener("message",this.receiveFrameMessage.bind(this),!1)}return window.OSNames={Android:"Android",Chrome:"Chrome",iOS:"iOS",Windows:"Windows",OSX:"OSX"},e.prototype={init:function(){this.checkPageScroll=this.checkPageScroll.bind(this);var e=navigator.userAgent;if(-1!==e.indexOf("iPad")||-1!==e.indexOf("iPhone")||-1!==e.indexOf("iPod")?(this.OS=OSNames.iOS,this._isMobile=!0):-1!==e.indexOf("Android")?(this.OS=OSNames.Android,this._isMobile=!0):e.match(/IEMobile/i)?(this.OS=OSNames.Windows,this._isMobile=!0):-1!==e.indexOf("Win")?this.OS=OSNames.Windows:-1!==e.indexOf("Mac")&&(this.OS=OSNames.OSX),!this._isMobile){var t=!1;if(function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),!t){var i="(max-device-width: 620px)";window.matchMedia&&window.matchMedia(i).matches&&(t=!0)}this._isMobile=t}},registerListeners:function(e,t,i,o){e&&(this._onDemoLoaded=e),t&&(this._onDemoDone=t),i&&(this._onDemoInteracted=i),o&&(this._onDemoScroll=o)},config:function(e){this._forceVideo=e.forceVideo,this._noLoadDelay=e.noLoadDelay,this._onlyOne=e.onlyOne,void 0!==e.isMobile&&(this._isMobile=e.isMobile),this.configLoaded=!0},isMobile:function(){return this._isMobile},isLegacyBrowser:function(){if(void 0===this._isLegacy){this._isLegacy=!1;var e=navigator.userAgent,t=1e3,i=1e3;if(-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident"))this._isLegacy=!0;else if(-1!==e.indexOf("Chrome")||-1!==e.indexOf("CriOS")){var o=new RegExp("Chrome/([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1)),26>t&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Android")){var o=new RegExp("Linux; Android ([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1),i=parseFloat(RegExp.$2)),this.majorVersion<4&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Firefox")){var o=new RegExp("Firefox/([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1)),16>t&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Safari")){var o=new RegExp("Version/([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(t=parseFloat(RegExp.$1),i=parseFloat(RegExp.$2)),6>t&&(this._isLegacy=!0)}}return this._isLegacy},isRetina:function(){if(void 0===this._isRetina){var e="(-webkit-min-device-pixel-ratio: 1.5), (-moz-min-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";this._isRetina=window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(e).matches?!0:!1}return this._isRetina},requireInteractivity:function(){return-1!==navigator.userAgent.indexOf("Edge")},getPageScrollOffset:function(){return document.documentElement.scrollTop||document.body.scrollTop},registerDemo:function(e){console.assert(e.img||e.src,"Must supply either an image or an iframe src"),this.demos.push(e)},registerDemos:function(e){for(var t=0;t<e.length;++t)this.registerDemo(e[t])},checkPageScroll:function(){for(var e=100,t=window.innerHeight,i=0;i<this.demos.length;i++){var o=this.demos[i],n=document.getElementById(o.id),a=n.getBoundingClientRect();if(a.bottom>-e&&a.top<t+e&&(o.isLoaded||o.isLoading||this.loadDemo(o)),o.isLoaded){var s=Math.max(0,Math.min(t,a.bottom)-Math.max(0,a.top)),r=s/a.height;r>=.5&&!o.isPlaying?(this.sendFrameMessage(o.id,"resume"),o.isPlaying=!0):.5>r&&o.isPlaying&&(this.sendFrameMessage(o.id,"pause"),o.isPlaying=!1)}}},beginLoading:function(){if(this.isMobile()||this.isLegacyBrowser())this.loadDemos();else{var e=this.getPageScrollOffset(),t=function(t){requestAnimationFrame(this.checkPageScroll),this.getPageScrollOffset()-e>500&&require(["util"],function(e){e.sendEvent(PageEvents.PageScroll),e.setSegment(Segment.Browsed)}),this._onDemoScroll&&this._onDemoScroll(t)}.bind(this);this.checkPageScroll(),document.addEventListener("scroll",t),window.addEventListener("resize",onresize)}},receiveFrameMessage:function(e){switch(e.data){case"demoReady":this.notifyOfLoad(e),this.checkPageScroll();break;case"done":this.notifyOfDone(e);break;case"userInteracted":this.notifyOnInteracted(e)}},_getDemoForMessage:function(e){for(var t,i=0;i<this.demos.length;i++){var o=this.demos[i],n=document.getElementById(o.id);if(n.contentWindow===e.source){t=o;break}}return t},notifyOfLoad:function(e){var t=this._getDemoForMessage(e);if(t){t.isLoaded=!0;var i=document.getElementById(t.id),o=i.parentElement;o.classList.remove("icon-spinner"),this._onDemoLoaded(t.id)}},notifyOfDone:function(e){var t=this._getDemoForMessage(e);this._onDemoDone(t.id)},notifyOnInteracted:function(e){var t=this._getDemoForMessage(e);this._onDemoInteracted(t.id)},loadVideoPlayer:function(){if(!this._loadingVideoPlayer){this._loadingVideoPlayer=!0,window.onYouTubeIframeAPIReady=function(){this._videoLibLoaded=!0;for(var e=0;e<this._videoQueue.length;++e)this.createVideo(this._videoQueue[e]);this._videoQueue=[]}.bind(this);var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}},requestVideoLoad:function(e,t,i){var o=document.getElementById(e);o&&o.parentElement.parentElement.classList.add("icon-spinner"),this._videoLibLoaded?this.createVideo({elementID:e,videoID:t,cb:i}):(this._videoQueue.push({elementID:e,videoID:t,cb:i}),this.loadVideoPlayer())},createVideo:function(e){function t(){s=new YT.Player(e.elementID,{videoId:e.videoID,playerVars:{enablejsapi:1,autoplay:c.isMobile()?0:1,autohide:1,controls:1,rel:0,showinfo:0,vq:"hd720",origin:"//"+window.location.host},events:{onReady:o,onStateChange:n,onError:a}})}function i(){1===s.getPlayerState()&&s.getCurrentTime()>=r-1.5&&(s.pauseVideo(),c.notifyOfDone({}),d&&s.unMute())}function o(t){r=s.getDuration(),setInterval(i,1e3),c.isMobile()||(d=t.target.isMuted(),t.target.mute()),setTimeout(function(){var e=document.getElementById("videoBlocker");e.style.display="none"},4500),c.notifyOfLoad({});var o=document.getElementById(e.elementID);if(o.parentElement.parentElement.classList.remove("icon-spinner"),e.cb&&e.cb(),c.isMobile()){var n=document.getElementById(e.elementID);n.style.opacity=1}}function n(t){switch(t.data){case YT.PlayerState.PLAYING:var i=document.getElementById(e.elementID);i.style.opacity=1,c._onDemoLoaded(e.elementID);break;case YT.PlayerState.PAUSED:case YT.PlayerState.BUFFERING:case YT.PlayerState.CUED:case YT.PlayerState.UNSTARTED:}}function a(e){console.log("Player Error: ",e)}var s,r,d=!1,c=this;t()},_loadNextDemo:function(){if(this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].noMobile;)this.demoIndex++;else if(!this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].mobileOnly;)this.demoIndex++;if(this.demoIndex<this.demos.length){if(this.videoLoaded&&this.demos[this.demoIndex].noVideo)return this.demoIndex++,void this._loadNextDemo();var e=this._loadDemo(this.demoIndex);this.demoIndex++,(this._noLoadDelay||!e)&&this._loadNextDemo()}},loadDemos:function(){for(var e=0;e<this.demos.length;e++)this._loadDemo(e)},_loadDemo:function(e){var t=this.demos[e];this.loadDemo(t)},loadDemo:function(e){e.isLoading=!0;var t=document.getElementById(e.id),i=!1;if(t)if(!this._preferImages&&e.src||void 0===e.imgs){if((this._preferImages||this._forceVideo)&&void 0!==e.video&&e.video.indexOf("/")>=0){i=!1;var o=document.createElement("video");o.id="v"+t.id,o.className="demoimg",o.preload="auto",o.autoplay=this.isMobile()?"":"autoplay",o.controls="controls";for(var n=0;n<e.video.length;++n){var a=document.createElement("source");a.src=e.video[n].path,a.type=e.video[n].type,o.appendChild(a)}t.id="",t.style.overflow="hidden",t.appendChild(o),this.videoLoaded=!0,window.postMessage("video_started","*")}else if((this._preferImages||this._forceVideo)&&void 0!==e.video&&e.video.indexOf("/")<0)i=!1,this.requestVideoLoad(e.videoEle,e.video,e.videoCB);else if(e.src&&(!this.isMobile()||e.forceDesktopIFrame)){i=!0;var s=document.createElement("iframe");s.id=t.id,s.className=t.className+" demo",s.setAttribute("seamless","seamless"),s.setAttribute("data-recording-ignore","html"),s.scrolling="no",s.src=e.src;var r=t.parentElement;r.replaceChild(s,t),r.classList.add("icon-spinner")}}else for(var n=0;n<e.imgs.length;n++){var d=e.imgs[n],c=document.createElement("img");if(c.id=t.id,c.className="demoimg"+(d.cls?" "+d.cls:""),c.src=d.src,t.appendChild(c),d.caption){var l=document.createElement("div");l.className="caption",l.textContent=d.caption,t.appendChild(l)}}return i},sendFrameMessage:function(e,t){var i=document.getElementById(e);if(i){var o=i.contentWindow;o&&o.postMessage(t,"*")}}},new e}),define("util",["DemoManager"],function(e){function t(e){var t="";if("object"==typeof e){var i=[];for(key in e)i[i.length]=encodeURIComponent(key)+"="+encodeURIComponent(e[key]);t=i.join("&").replace(/%20/g,"+")}else t=e;return t}function i(){}window.PageEvents={LoadedPage:"LoadedPage",PageScroll:"PageScroll",IntroWatched:"IntroWatched",IntroClicked:"IntroClicked",LoginClicked:"LoginClicked",GetStartedClicked:"GetStartedClicked",DemoClicked:"DemoClicked",AppClicked:"AppClicked",SocialClicked:"SocialClicked"},window.Segment={DriveBy:0,Watched:1,Browsed:2,Interacted:3,SocialClicked:4,AppClicked:5,SignedUp:6,ExistingUser:7};var o={};"function"!=typeof String.prototype.startsWith&&(Object.defineProperty?Object.defineProperty(String.prototype,"startsWith",{enumerable:!1,configurable:!1,writable:!1,value:function(e,t){return t=t||0,this.lastIndexOf(e,t)===t}}):String.prototype.startsWith=function(e){return 0===this.lastIndexOf(e,0)}),o.decodeRedirect=function(e){var t;try{e&&(t=decodeURIComponent(escape(window.atob(e.substr(1)))))}catch(i){}return t},o.encodeRedirect=function(e){return window.btoa(unescape(encodeURIComponent(e)))},o._segment=Segment.DriveBy,o.setSegment=function(e){e>o._segment&&(o._segment=e)};var n=["DriveBy","Watched","Browsed","Interacted","SocialClicked","AppClicked","SignedUp","ExistingUser"];o.getSegment=function(){return n[o._segment]},o.getURLHashParam=function(e){for(var t,i=window.location.hash.substring(1),o=/([^&=]+)=([^&]*)/g;t=o.exec(i);)if(decodeURIComponent(t[1])===e)return decodeURIComponent(t[2]);return void 0};var a=[0,5,15,35,80,170],s=[408,500,502,503,504];o.XHR=function(e){function i(){u>g?(g++,setTimeout(o,1e3*a[g])):log("XHR Failed to retry - reached max retry limit")}function o(){var e=new XMLHttpRequest;if(e.onreadystatechange=function(){4===e.readyState&&(200!==e.status&&u>g?(e.retry=i,m&&s.indexOf(e.status)>=0?e.retry():d(e)):d(e))},p&&h?e.open(r.toUpperCase(),n,!0,p,h):e.open(r.toUpperCase(),n,!0),l)for(var o in l)e.setRequestHeader(o,l[o]);if(c){e.setRequestHeader("Accept","*/*"),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");var a=t(c);e.send(a)}else e.send()}var n=e.url,r=e.type,d=e.cb,c=e.data,l=e.headers,m=e.autoRetry,u=e.maxRetries||2,g=0,p=e.username,h=e.password;o()},o.XHR_PrivateAPI=function(e){var t="https:",i="/private/v1",n={type:e.type,url:t+"//api.moo.do"+i+e.path,data:e.data,cb:e.cb,headers:e.headers,autoRetry:e.autoRetry,maxRetries:e.maxRetries};o.XHR(n)},o.XHR_PublicAPI=function(){},o.sendEvent=function(e,t,i){if(window.ga)try{ga("send","event","LandingPage",e,t,void 0,i)}catch(n){o.reportError(n)}},o.tagSession=function(e,t){if(window.smartlook)try{smartlook("tag",e,t)}catch(i){o.reportError(i)}},window.ga&&ga(function(e){var t=e.get("clientId");o.tagSession("name",t)}),window.__BEFORE_UNLOAD=function(){o.tagSession("segment",o.getSegment())},o.reportError=function(e){window.Rollbar&&Rollbar.error(e)};var r={getItem:function(){},setItem:function(){},removeItem:function(){},clear:function(){}};try{o.__storage=window.localStorage||r}catch(d){o.__storage=r}o.storage={getItem:(o.__storage.getItem||function(e,t){return this.get(e,t||i)}).bind(o.__storage),setItem:(o.__storage.setItem||function(e,t){var i={};i[e]=t,this.set(i)}).bind(o.__storage),removeItem:(o.__storage.removeItem||function(e,t){this.remove(e,t)}).bind(o.__storage),clear:(o.__storage.clear||function(e){this.clear(e)}).bind(o.__storage)},window.sendToAppStore=function(t,i){if(e.isMobile()&&e.OS){t=e.OS;var n;switch(t){case OSNames.Android:n="https://play.google.com/store/apps/details?id=moo.do";break;case OSNames.Chrome:n="https://chrome.google.com/webstore/detail/moodo/iffimmolghilclfndeiebgppddmagofk";break;case OSNames.iOS:n="https://itunes.apple.com/us/app/moo.do-organize-your-way/id889830074?ls=1&mt=8";break;case OSNames.Windows:utl="https://www.moo.do/app/"}window.open(n)}t&&i&&(o.sendEvent(PageEvents.AppClicked,i),o.setSegment(Segment.AppClicked))};var c={Facebook:"Facebook",Twitter:"Twitter",Google:"Google",Email:"Email"};return window.sendToSocialMedia=function(e,t){e===c.Email&&window.open("mailto:contact@moo.do","_blank"),o.sendEvent(PageEvents.SocialClicked,t),o.setSegment(Segment.SocialClicked)},o}),define("auth",["util"],function(e){function t(){this.clientId="597847337936.apps.googleusercontent.com",this.scopes=["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/drive.install","https://www.googleapis.com/auth/drive.appdata"],this.isLoggedIn=!1}return t.prototype={init:function(e){gapi.auth.init(),this.authenticate(!0,e)},getCurrentAppUser:function(){try{var e=window.localStorage.getItem("localSettings"),t=JSON.parse(e);if(t){var i=t.values.Default.activeUser;return i}}catch(o){log("Error getting app user: ",o)}return void 0},requestAuthorization:function(e){var t=navigator.userAgent;window.gapi&&window.gapi.auth?-1!==t.indexOf("MSIE")||-1!==t.indexOf("Trident")?this.sendToApp(!1,e):this.authenticate(!1,function(t){t?this.getEmailAddr(function(t){var i=this.getCurrentAppUser();i===t.email?this.sendToApp(!1,e):this.sendToApp(t.email,e)}.bind(this)):this.sendToApp()}.bind(this)):this.sendToApp(!1,e)},sendToApp:function(t,i,o){var n=window.location.host,a=e.getURLHashParam("invite");window.location.search.indexOf("ref=producthunt")>0&&(a="producthunt");var s,r="";t?(r="user="+encodeURIComponent(t),s=window.location.protocol+"//"+n+"/app/"):(o||(r+="login=true"),s=window.location.protocol+"//"+n+"/app/"),a&&(r+=(r?"&":"")+"invite="+a),i&&(s+=(r?"&":"")+"premium=true"),window.location.href=s+(r?"#"+r:"")},authenticate:function(e,t){var i={client_id:this.clientId,scope:this.scopes,immediate:e,authuser:-1},o=!!window.navigator.standalone||window.navigator.userAgent.indexOf("FluidApp")>=0,n=o||this.isMobro();n&&!e&&(i.redirect_uri=window.location.protocol+"//"+window.location.host+"/app/"),gapi.auth.authorize(i,function(e){e&&!e.error?(this.isLoggedIn=!0,console.log("Landing Page Auth Logged In")):console.log("Landing Page Auth Logged Out"),t&&t(this.isLoggedIn)}.bind(this))},getEmailAddr:function(t){var i=gapi.auth.getToken();if(i){var o="https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token="+i.access_token;e.XHR({type:"GET",url:o,autoRetry:!0,cb:function(e){if(200===e.status){var i={};try{i=JSON.parse(e.responseText)}catch(o){log("Error: ",o)}t(i)}else t()}})}},isMobro:function(){var e=null;try{new ActiveXObject("")}catch(t){errorName=t.name}try{e=!!new ActiveXObject("htmlfile")}catch(t){e=!1}return e="ReferenceError"!=errorName&&0==e?!1:!0,!e}},new t});var numRetries=2,loadYTVideo=!1;("/about/"===window.location.pathname||"/"===window.location.pathname)&&window.location.hash.indexOf("app%22:true")<0&&window.location.hash.indexOf('"app":true')<0&&(loadYTVideo=!0),loadYTVideo&&require(["DemoManager"],function(e){(e.isMobile()||e.isLegacyBrowser())&&e.loadVideoPlayer()}),requirejs(["util","auth","DemoManager"],function(e,t,i){function o(e){return"string"==typeof e?m[e]||(m[e]=document.getElementById(e)):e}function n(e){var t="",i=["ms","webkit","moz","o"],o=document.body.style,n=e.charAt(0).toUpperCase()+e.slice(1);if("string"==typeof o[e])t="";else for(var a=0;a<i.length;a++)if("string"==typeof o[i[a]+n]){t=i[a];break}var s=t.length>0?e.charAt(0).toUpperCase()+e.slice(1):e;return t?t+s:s}function a(e,t,i){return void 0===i&&(i=193,i=16|i,i=4|i),t.id=e,t.src="/app/#demo=true&touch=false&dmode="+i+"&data="+t.data+"&panes="+t.panes+"&script="+(t.script?t.script:"none"),t}function s(){g=n("transform"),p=n("transition"),h=n("animation"),f=n("animationDelay"),u=window.innerWidth,i.isMobile()&&(document.documentElement.classList.add("mobile"),document.documentElement.classList.add(i.OS)),i.isLegacyBrowser()&&document.documentElement.classList.add("prefImages"),i.OS===OSNames.Windows&&document.documentElement.classList.add("windows");var o=navigator.userAgent;(-1!==o.indexOf("MSIE")||-1!==o.indexOf("Trident"))&&document.documentElement.classList.add("ie"),window.openApp=function(o){e.sendEvent(PageEvents.GetStartedClicked,o),e.setSegment(Segment.SignedUp),i.isMobile()?sendToAppStore(i.OS):t.sendToApp(!1,!1,!0)},document.documentElement.style.opacity=1}function r(){var t=e.getURLHashParam("email");e.XHR_PrivateAPI({type:"POST",path:"/feedback/unsubscribe",data:{email:t},cb:function(e){var t;t=200===e.status?"You have been successfully unsubscribed from future emails.":"There was an error unsubscribing. Please reply to the email to unsubscribe.",document.getElementById("unsubMessage").innerText=t}})}function d(){var e={intro:{data:"about.0",panes:"1:help",script:"none"},email:{data:"landing-email.0",panes:"PaneGmail:PaneGmail:PaneGmail",script:"introEmail",imgs:[{src:"/img/ss/email-drag.png"}]},style:{data:"landing-style.0",panes:"1:1,,progress:2,#Android",script:"introStyle",imgs:[{src:"/img/ss/intro-desktop.png"}]}};i.registerDemo(a("demoIntro",e.intro,145)),i.registerDemo(a("demoEmail",e.email)),i.registerDemo(a("demoStyle",e.style));i.registerListeners(void 0,void 0,void 0,void 0),i.config({forceVideo:!1,noLoadDelay:i.isMobile()}),i.beginLoading()}function c(){function e(e,t,i){return(t-e)*i+e}function t(t){{var n,a=i.getPageScrollOffset(),s=0,r=300,d=a-x+s,l=Math.max(Math.min(d/r,1),0),u=Math.min(l,.9)/.9,f=.45*(1-u)+.55,S=Math.max(Math.min(d,r),0),_=(Math.max(Math.min(c-660,150),0),Math.floor((c-680)/2)),k=Math.max(Math.min(_,36),0),L=_-k+8,E=_+k+284;o("topDemo")}if(600>=c)h.style[g]=null,p.style.position="relative",p.style[g]=null,y.style.opacity=1;else if(l!==m||t){for(n=0;n<v.length;n++){var I=b[n],O=e(I[0][0],I[1][0]+k+k,.5*u),M=e(I[0][1],I[1][1],u);v[n].style[g]="translate3d("+O+"px,"+M+"px,0) scale("+f+")"}{Math.min(10*(l-.9),1)}w.style.opacity=Math.max(1-Math.min(15*(l-.85),1),0),y.style.opacity=Math.max(Math.min(15*(l-.85),1),0),w.style.left=L+"px",h.style.left=E+"px",h.style[g]="translate3d("+.5*-u*340+"px, 0, 0)",0===l||1===l?(p.style.position="relative",p.style[g]=1===l?"translateY("+S+"px)":""):(p.style.position="fixed",p.style[g]=""),m=l}}function n(){var e=c,o=l;c=window.innerWidth,l=window.innerHeight,(!i.isMobile()||e!==c&&o!==l)&&(topDemo.style["max-width"]=Math.max(Math.min(2*(l-240),1080),900)+"px"),x=f.offsetTop,t(!0)}function a(e){S.style[g]="translateX("+100*-e+"%)";for(var t=0;u>t;t++){var i=_.children[t],o=S.children[2*t+1];t===e?(o.classList.add("selected"),i.classList.add("selected")):t===I&&(o.classList.remove("selected"),i.classList.remove("selected"))}E.textContent=O[e],I=e,k.style.opacity=e>0?.7:0,L.style.opacity=u-1>e?.7:0}function s(){I>0&&a(I-1)}function r(){u-1>I&&a(I+1)}function d(e){var t=S.getBoundingClientRect();t.top<window.innerHeight-50&&t.bottom>50&&(37===e.keyCode&&I>0?a(I-1):39===e.keyCode&&u-1>I&&a(I+1))}var c,l,m,u=5,p=o("everything-wrapper"),h=o("everything-images"),f=o("section-everything"),w=o("services"),v=document.querySelectorAll("#services>div"),y=o("img-everything-overlay"),b=[[[0,0],[218,84]],[[0,80],[288,145]],[[0,160],[288,175]],[[0,240],[288,205]],[[0,320],[288,298]],[[0,400],[288,330]]],x=0;n(),t(),window.addEventListener("resize",n),document.addEventListener("scroll",t);var S=o("workflowsDemos"),_=o("demoButtons"),k=o("play-left"),L=o("play-right"),E=o("workflowCaption"),I=0,O=["Drag emails right onto your calendar","Work with multiple Gmail labels side by side","Visualize your tasks in columns and easily rearrange them","Organize with priorities and stars, and tags for context ","View tasks by assignment and attach files from Drive"];k.onclick=s,L.onclick=r;for(var M=0;u>M;M++)_.children[M].onclick=a.bind(this,M),S.children[M].onclick=a.bind(this,M);a(0),document.addEventListener("keydown",d)}function l(){s();var e=window.location.pathname.toLowerCase();"/about/"===e||"/"===e?i.isMobile()||c():"/unsubscribe/"===e?r():"/press/"===e&&d()}var m={};window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)},window.console||(window.console={log:function(){},error:function(){}}),window.log=window.console.log.bind(window.console);var u,g="transform",p="transition",h="animation",f="animationDelay";window.requestAuthorization=function(i){t.requestAuthorization(!1),e.sendEvent(PageEvents.LoginClicked,i),e.setSegment(Segment.SignedUp)},window.location.hash.indexOf("app%22:true")>=0||window.location.hash.indexOf('"app":true')>=0?window.location.pathname="/app/":"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",l,!1)}),define("landing",function(){});
//# sourceMappingURL=landing-min.js.map