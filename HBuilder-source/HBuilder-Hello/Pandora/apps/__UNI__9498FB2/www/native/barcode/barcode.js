!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=275)}({0:function(t,e){t.exports={"uni-icon":{fontFamily:"uniicons",fontWeight:"normal"},"uni-bg-red":{backgroundColor:"#F76260",color:"#FFFFFF"},"uni-bg-green":{backgroundColor:"#09BB07",color:"#FFFFFF"},"uni-bg-blue":{backgroundColor:"#007AFF",color:"#FFFFFF"},"uni-container":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",backgroundColor:"#f8f8f8"},"uni-padding-lr":{paddingLeft:"15",paddingRight:"15"},"uni-padding-tb":{paddingTop:"15",paddingBottom:"15"},"uni-header-logo":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"10rpx"},"uni-header-image":{width:"80",height:"80"},"uni-hello-text":{marginBottom:"20"},"hello-text":{color:"#7A7E83",fontSize:"14",lineHeight:"20"},"hello-link":{color:"#7A7E83",fontSize:"14",lineHeight:"20"},"uni-panel":{marginBottom:"12"},"uni-panel-h":{backgroundColor:"#ffffff",flexDirection:"row",alignItems:"center",paddingTop:"12",paddingRight:"12",paddingBottom:"12",paddingLeft:"12"},"uni-panel-h-on":{backgroundColor:"#f0f0f0"},"uni-panel-text":{flex:1,color:"#000000",fontSize:"14",fontWeight:"normal"},"uni-panel-icon":{marginLeft:"15",color:"#999999",fontSize:"14",fontWeight:"normal",transform:"rotate(0deg)",transitionDuration:0,transitionProperty:"transform"},"@TRANSITION":{"uni-panel-icon":{duration:0,property:"transform"}},"uni-panel-icon-on":{transform:"rotate(180deg)"},"uni-navigate-item":{flexDirection:"row",alignItems:"center",backgroundColor:"#FFFFFF",borderTopStyle:"solid",borderTopColor:"#f0f0f0",borderTopWidth:"1",paddingTop:"12",paddingRight:"12",paddingBottom:"12",paddingLeft:"12","backgroundColor:active":"#f8f8f8"},"uni-navigate-text":{flex:1,color:"#000000",fontSize:"14",fontWeight:"normal"},"uni-navigate-icon":{marginLeft:"15",color:"#999999",fontSize:"14",fontWeight:"normal"},"uni-list-cell":{position:"relative",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},"uni-list-cell-pd":{paddingTop:"22rpx",paddingRight:"30rpx",paddingBottom:"22rpx",paddingLeft:"30rpx"},"flex-r":{flexDirection:"row"},"flex-c":{flexDirection:"column"},"a-i-c":{alignItems:"center"},"j-c-c":{justifyContent:"center"},"list-item":{flexDirection:"row",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10"}}},1:function(t,e,n){"use strict";var a;Object.defineProperty(e,"__esModule",{value:!0}),e.weexPlus=e.default=void 0,a="function"==typeof getUni?getUni:function(){var t=function(t){return"function"==typeof t},e=/^\$|^on|^create|Sync$|Manager$|^pause/,n=["os","getCurrentSubNVue","getSubNVueById","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],a=function(t){return!(e.test(t)&&"createBLEConnection"!==t||~n.indexOf(t))},i=function(e){return function(){for(var n=arguments.length,a=Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(i.success)||t(i.fail)||t(i.complete)?e.apply(void 0,[i].concat(a)):new Promise(function(t,n){e.apply(void 0,[Object.assign({},i,{success:t,fail:n})].concat(a)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},r=[],s=void 0;function u(t){r.forEach(function(e){return e({origin:s,data:t})})}var c=o.webview.currentWebview().id,l=new BroadcastChannel("UNI-APP-SUBNVUE");function p(t){t.$processed=!0;var e=o.webview.currentWebview().id===t.id,n="uniNView"===t.__uniapp_origin_type&&t.__uniapp_origin_id,a=t.id;if(t.postMessage=function(t){n?l.postMessage({data:t,to:e?n:a}):b({type:"UniAppSubNVue",data:t})},t.onMessage=function(t){r.push(t)},t.__uniapp_mask_id){s=t.__uniapp_host;var i=t.__uniapp_mask,u=o.webview.getWebviewById(t.__uniapp_mask_id);u=u.parent()||u;var c=t.show,p=t.hide,f=t.close,d=function(){u.setStyle({mask:"none"})};t.show=function(){u.setStyle({mask:i});for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];return c.apply(t,n)},t.hide=function(){d();for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];return p.apply(t,n)},t.close=function(){d();for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];return f.apply(t,n)}}}function f(t){var e=o.webview.getWebviewById(t);return e&&!e.$processed&&p(e),e}l.onmessage=function(t){t.data.to===c&&u(t.data.data)};var d=weex.requireModule("plus"),g=weex.requireModule("globalEvent"),h=0,v={},y="__uniapp__service";g.addEventListener("plusMessage",function(t){"UniAppJsApi"===t.data.type?_(t.data.id,t.data.data):"UniAppSubNVue"===t.data.type?u(t.data.data,t.data.options):"onNavigationBarButtonTap"===t.data.type?"function"==typeof A&&A(t.data.data):"onNavigationBarSearchInputChanged"===t.data.type?"function"==typeof w&&w(t.data.data):"onNavigationBarSearchInputConfirmed"===t.data.type?"function"==typeof k&&k(t.data.data):"onNavigationBarSearchInputClicked"===t.data.type&&"function"==typeof D&&D(t.data.data)});var _=function(t,e){var n=v[t];n?(n(e),n.keepAlive||delete v[t]):console.error("callback["+t+"] is undefined")},m=function(e){var n,a,o=e.id,i=e.type,r=e.params;v[o]=(a=function(e){t(n)?n(e):n&&(~e.errMsg.indexOf(":ok")?t(n.success)&&n.success(e):~e.errMsg.indexOf(":fail")&&t(n.fail)&&n.fail(e),t(n.complete)&&n.complete(e))},(t(n=r)||n&&t(n.callback))&&(a.keepAlive=!0),a),d.postMessage({id:o,type:i,params:r},y)};function b(t){d.postMessage(t,y)}var S=function(t){return function(e){m({id:h++,type:t,params:e})}},A=void 0,w=void 0,k=void 0,D=void 0;function T(t){A=t}function C(t){w=t}function B(t){k=t}function I(t){D=t}function N(t){return weex.requireModule(t)}var O=weex.requireModule("dom"),R=weex.requireModule("globalEvent"),x=[];function P(t){"function"==typeof t&&(this.isUniAppReady?t():x.push(t))}R.addEventListener("plusMessage",function(t){"UniAppReady"===t.data.type&&(P.isUniAppReady=!0,x.length&&(x.forEach(function(t){return t()}),x=[]))});var E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j=weex.requireModule("stream"),F="GET",M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/x-www-form-urlencoded";return"object"===(void 0===t?"undefined":E(t))?"POST"===e.toUpperCase()&&"application/json"===n.toLowerCase()?JSON.stringify(t):Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"):t},q=weex.requireModule("plusstorage"),U="__TYPE",L=weex.requireModule("clipboard"),V=function(){if("function"==typeof getUniEmitter)return getUniEmitter;var t={$on:function(){console.warn("uni.$on failed")},$off:function(){console.warn("uni.$off failed")},$once:function(){console.warn("uni.$once failed")},$emit:function(){console.warn("uni.$emit failed")}};return function(){return t}}();function $(t,e,n){return t[e].apply(t,n)}var Q=Object.freeze({loadFontFace:function(e){var n=e.family,a=e.source,o=(e.desc,e.success),i=(e.fail,e.complete);O.addRule("fontFace",{fontFamily:n,src:a.replace(/"/g,"'")});var r={errMsg:"loadFontFace:ok",status:"loaded"};t(o)&&o(r),t(i)&&i(r)},ready:P,request:function(e){var n=e.url,a=e.data,o=e.header,i=e.method,r=void 0===i?"GET":i,s=e.dataType,u=void 0===s?"json":s,c=(e.responseType,e.success),l=e.fail,p=e.complete,f=!1,d=!1,g={};if(o)for(var h in o)d||"content-type"!==h.toLowerCase()?g[h]=o[h]:(d=!0,g["Content-Type"]=o[h]);return r===F&&a&&(n=n+(~n.indexOf("?")?"&"===n.substr(-1)||"?"===n.substr(-1)?"":"&":"?")+M(a)),j.fetch({url:n,method:r,headers:g,type:"json"===u?"json":"text",body:r!==F?M(a,r,g["Content-Type"]):""},function(e){var n=e.status,a=(e.ok,e.statusText,e.data),o=e.headers,i={};!n||-1===n||f?(i.errMsg="request:fail",t(l)&&l(i)):(i.data=a,i.statusCode=n,i.header=o,t(c)&&c(i)),t(p)&&p(i)}),{abort:function(){f=!0}}},getStorage:function(e){var n=e.key,a=(e.data,e.success),o=e.fail,i=e.complete;q.getItem(n+U,function(e){if("success"===e.result){var r=e.data;q.getItem(n,function(e){if("success"===e.result){var n=e.data;r&&n?("String"!==r&&(n=JSON.parse(n)),t(a)&&a({errMsg:"getStorage:ok",data:n})):(e.errMsg="setStorage:fail",t(o)&&o(e))}else e.errMsg="setStorage:fail",t(o)&&o(e);t(i)&&i(e)})}else e.errMsg="setStorage:fail",t(o)&&o(e),t(i)&&i(e)})},setStorage:function(e){var n=e.key,a=e.data,o=e.success,i=e.fail,r=e.complete,s="String";"object"===(void 0===a?"undefined":E(a))&&(s="Object",a=JSON.stringify(a)),q.setItem(n,a,function(e){"success"===e.result?q.setItem(n+U,s,function(e){"success"===e.result?t(o)&&o({errMsg:"setStorage:ok"}):(e.errMsg="setStorage:fail",t(i)&&i(e))}):(e.errMsg="setStorage:fail",t(i)&&i(e)),t(r)&&r(e)})},removeStorage:function(e){var n=e.key,a=(e.data,e.success),o=e.fail,i=e.complete;q.removeItem(n,function(e){"success"===e.result?t(a)&&a({errMsg:"removeStorage:ok"}):(e.errMsg="removeStorage:fail",t(o)&&o(e)),t(i)&&i(e)}),q.removeItem(n+U)},clearStorage:function(t){t.key,t.data,t.success,t.fail,t.complete},getClipboardData:function(e){var n=e.success,a=(e.fail,e.complete);L.getString(function(e){var o={errMsg:"getClipboardData:ok",data:e.data};t(n)&&n(o),t(a)&&a(o)})},setClipboardData:function(e){var n=e.data,a=e.success,o=(e.fail,e.complete),i={errMsg:"setClipboardData:ok"};L.setString(n),t(a)&&a(i),t(o)&&o(i)},onSubNVueMessage:u,getSubNVueById:f,getCurrentSubNVue:function(){return f(o.webview.currentWebview().id)},$on:function(){return $(V(),"$on",[].concat(Array.prototype.slice.call(arguments)))},$off:function(){return $(V(),"$off",[].concat(Array.prototype.slice.call(arguments)))},$once:function(){return $(V(),"$once",[].concat(Array.prototype.slice.call(arguments)))},$emit:function(){return $(V(),"$emit",[].concat(Array.prototype.slice.call(arguments)))}}),J={os:{nvue:!0}},H={};return"undefined"!=typeof Proxy?H=new Proxy({},{get:function(t,e){if("os"===e)return{nvue:!0};if("postMessage"===e)return b;if("requireNativePlugin"===e)return N;if("onNavigationBarButtonTap"===e)return T;if("onNavigationBarSearchInputChanged"===e)return C;if("onNavigationBarSearchInputConfirmed"===e)return B;if("onNavigationBarSearchInputClicked"===e)return I;var n=Q[e];return n||(n=S(e)),a(e)?i(n):n}}):(Object.keys(J).forEach(function(t){H[t]=J[t]}),H.postMessage=b,H.requireNativePlugin=N,H.onNavigationBarButtonTap=T,H.onNavigationBarSearchInputChanged=C,H.onNavigationBarSearchInputConfirmed=B,H.onNavigationBarSearchInputClicked=I,Object.keys({uploadFile:!0,downloadFile:!0,chooseImage:!0,previewImage:!0,getImageInfo:!0,saveImageToPhotosAlbum:!0,chooseVideo:!0,saveVideoToPhotosAlbum:!0,saveFile:!0,getSavedFileList:!0,getSavedFileInfo:!0,removeSavedFile:!0,openDocument:!0,setStorage:!0,getStorage:!0,getStorageInfo:!0,removeStorage:!0,clearStorage:!0,getLocation:!0,chooseLocation:!0,openLocation:!0,getSystemInfo:!0,getNetworkType:!0,makePhoneCall:!0,scanCode:!0,setScreenBrightness:!0,getScreenBrightness:!0,setKeepScreenOn:!0,vibrateLong:!0,vibrateShort:!0,addPhoneContact:!0,showToast:!0,showLoading:!0,hideToast:!0,hideLoading:!0,showModal:!0,showActionSheet:!0,setNavigationBarTitle:!0,setNavigationBarColor:!0,navigateTo:!0,redirectTo:!0,reLaunch:!0,switchTab:!0,navigateBack:!0,getProvider:!0,login:!0,getUserInfo:!0,share:!0,requestPayment:!0,subscribePush:!0,unsubscribePush:!0,onPush:!0,offPush:!0}).forEach(function(t){var e=Q[t];e||(e=S(t)),a(t)?H[t]=i(e):H[t]=e})),H};var o=new WeexPlus(weex);e.weexPlus=o;var i=a(weex,o,BroadcastChannel);e.default=i},10:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=function(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),o="";if(a.length>1){var i=a.pop();o=a.join("---COMMA---"),0===i.indexOf(" at ")?o+=i:o+="---COMMA---"+i}else o=a[0];return o}},166:function(t,e,n){"use strict";var a=n(167),o=n.n(a);e.default=o.a},167:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:{filters:[0,2,1],backgroud:"#000000",frameColor:"#118ce9",scanbarColor:"#118ce9",enabledFlash:!1,flashImage0:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABjklEQVRoQ+1ZbVHEQAx9TwE4ABTcOQAknANQAKcAUAAOAAXgAHAACsDCKQiTmbYDzJZtNt2bFrJ/m6+Xl2yyU2LmhzOPH/8PgIjcADirxNyapNoffMwMiMgzgMPBHmyCLySPLCoBwJKtAbJbYaBmD1yRvBwAtBMxl5DF+DZkiwCIyBLAzsgBbki+Wm2WAlCaL6zOMvKnJO+sNksB7ALQbO1ZHfbIv5FUVs2nCIB6EZETALdmj2mFY5I6X8ynGEADQllYmL1+VzBfnV/VvQB0aj45ARyQ/Ci14QLQsOBZLe5JaikWnzEA7AN4L4hgA2Dpyb76dANwsOCq/TZhASAYKGie0a7R1lDPI0ebtF0NUi+4yfdAtxr3PEMnD6BbD0QkNfACQO05EAwMuaBqDrIVycdmTpwDuP4R0OR7QFftVRP0g+49cwOQq4DJMxAAchmofY3m/EcJBQOZbTRKKJeBKKEoIePvpFRJ1VzmciUccyCa+C81cerBkuuB7sGTE/zt+yhN7AnAqxsAvBn06n8CkyPwMZKwm+UAAAAASUVORK5CYII=",flashImage1:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4klEQVRoQ+1ZQU7CUBCdaWVBLFETqUtxB7iQG4hH4AZ4AvUE4gnkBuoJ9AbiDXAhZadby4IQICaS9psqJBVLy5/fkhKHbefPzPvzZv6bgLDmP1zz/OH/ARjZpSYAniVSORQXRt5qyviWrsDQLrUQ8FgmyLK2AsRTzrSqy9p7dgxA5raibFdSgSR7QAi4yu11GlFA/d+lKSTjfBW2JAAj+7Cio7MVZ4KO0AeG+dKW9UkCMHwvNxDhUjZYuL17apjdW1mfJACiX9gef2bbgLgvG3CB/bNhdioUXyQAXqCRXawDaDeUoPNnBLonuXy3RfFFBvADouxx9ogSeHaGMjpjm0LDXrGKQntUAaBn3IPsTveN6kOpAl5QNWkh7gzTqlOTJ0mJ+WAf/WLBmWivskkIEIONjKio3H4sAKhVUOX+7MKUKcQAZLk3Z88VWEQhr0kRYCoN/m5wqe8BvzQOkuDpB+CTB0EPHgOYNnNiTewXaFyBkFGbWAVQE7XNXevhW7X2Sucg8NqfR+p7AADaesateUk7E+0eAH4tLOsAIPSNZQBJT6EoicMV4Ar4OEJZK5lCTCGmkPy/MUGjOTEtxO9A1A1wE3MTp6iJgxaWKAr7F54o27DvsUwhlQRUzzIA1RtUPf8FRKRYQOI+9hQAAAAASUVORK5CYII="},created:function(){var t=this;setTimeout(function(){t.start()},500)},methods:{start:function(){this.$refs.barcode.start({conserve:!0,filename:"_doc/barcode/"})},scan:function(e){this.$refs.barcode.scan(e,function(e){console.log(t("scan_error:"+JSON.stringify(e)," at native/barcode/barcode.nvue:107"))})},onmarked:function(t){var e={};0===t.code?(e.type=t.type,e.code=t.message):e.errMsg=t.message},onerror:function(e){console.log(t("fail1:"+JSON.stringify(e)," at native/barcode/barcode.nvue:120"))},setFlash:function(){this.frameColor="#000000"}}};e.default=n}).call(this,n(10).default)},168:function(t,e){t.exports={content:{flex:1,alignItems:"center",justifyContent:"center"},barcode:{position:"absolute",left:0,top:0,right:0,bottom:0,zIndex:1},"set-flash":{alignItems:"center",justifyContent:"center",transform:"translateY(50px)",zIndex:2},"image-flash":{width:"32",height:"32",marginBottom:"2"},"image-flash-text":{color:"#FFFFFF"}}},2:function(t,e,n){"use strict";n.r(e),e.default={appid:"__UNI__9498FB2"}},206:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[n("div",{staticClass:["content"]},[n("barcode",{ref:"barcode",staticClass:["barcode"],attrs:{backgroud:"rgb(0,0,0)",frameColor:t.frameColor,scanbarColor:"#118ce9",filters:t.filters},on:{marked:t.onmarked,error:t.onerror}}),n("div",{staticClass:["set-flash"],on:{click:t.setFlash}},[n("u-image",{staticClass:["image-flash"],attrs:{src:t.enabledFlash?t.flashImage1:t.flashImage0,resize:"stretch"}}),n("u-text",{staticClass:["image-flash-text"]},[t._v(t._s(t.enabledFlash?"轻触关闭":"轻触照亮"))])],1)],1)])},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},238:function(t,e,n){"use strict";n.r(e);var a=n(168),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e.default=o.a},275:function(t,e,n){"use strict";n.r(e);n(4),n(8);var a=n(67);a.default.mpType="page",a.default.route="native/barcode/barcode",a.default.el="#root",new Vue(a.default)},3:function(t,e,n){"use strict";function a(t,e,n,a,o,i,r,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return a})},4:function(t,e,n){"use strict";(function(t,e){function a(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var c=n(5).version,l="__DC_STAT_UUID",p="__DC_UUID_VALUE";function f(){var n="";if("n"===h()){try{n=t.runtime.getDCloudId()}catch(t){n=""}return n}try{n=e.getStorageSync(l)}catch(t){n=p}if(!n){n=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(l,n)}catch(t){e.setStorageSync(l,p)}}return n}var d,g=function(){return parseInt((new Date).getTime()/1e3)},h=function(){return"n"},v=function(){var t="";return"wx"!==h()&&"qq"!==h()||e.canIUse("getAccountInfoSync")&&(t=e.getAccountInfoSync().miniProgram.appId||""),t},y=function(){return"n"===h()?t.runtime.version:""},_=function(){var e="";return"n"===h()&&(e=t.runtime.channel),e},m=0,b=0,S=function(){return m=g(),"n"===h()&&e.setStorageSync("__page__residence__time",g()),m},A=0,w=0,k=function(){var t=(new Date).getTime();return A=t,w=0,t},D=function(){var t=(new Date).getTime();return w=t,t},T=function(t){var e=0;return 0!==A&&(e=w-A),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},C=function(t){var e=getCurrentPages(),n=e[e.length-1].$vm,a=t._query,o=a&&"{}"!==JSON.stringify(a)?"?"+JSON.stringify(a):"";return t._query="","bd"===h()?n.$mp&&n.$mp.page.is+o:n.$scope&&n.$scope.route+o||n.$mp&&n.$mp.page.route+o},B=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},I=n(6).default,N=n(2).default||n(2),O=e.getSystemInfoSync(),R=function(){function n(){r(this,n),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:f(),ut:h(),mpn:v(),ak:N.appid,usv:c,v:y(),ch:_(),cn:"",pn:"",ct:"",t:g(),tt:"",p:"android"===O.platform?"a":"i",brand:O.brand||"",md:O.model,sv:O.system.replace(/(Android|iOS)\s/,""),mpsdk:O.SDKVersion||"",mpv:O.version||"",lang:O.language,pr:O.pixelRatio,ww:O.windowWidth,wh:O.windowHeight,sw:O.screenWidth,sh:O.screenHeight}}return u(n,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(D(),T("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,D();var n=T();k();var a=C(this);this._sendHideRequest({urlref:a,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,n=C(this),a=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===h()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=I&&I.pages[a]&&I.pages[a].titleNView&&I.pages[a].titleNView.titleText||I&&I.pages[a]&&I.pages[a].navigationBarTitleText||"",this.__licationShow)return k(),this.__licationShow=!1,void(this._lastPageRoute=n);if(D(),this._lastPageRoute=n,T("page").overtime){var o={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(o)}k()}},{key:"_pageHide",value:function(){if(!this.__licationHide){D();var t=T("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var n,a,o=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+o||"",this.statData.t=g(),this.statData.sc=function(t){var n=h(),a="";return t||("wx"===n&&(a=e.getLaunchOptionsSync().scene),a)}(t.scene),this.statData.fvts=(n=e.getStorageSync("First__Visit__Time"),a=0,n?a=n:(a=g(),e.setStorageSync("First__Visit__Time",a),e.removeStorageSync("Last__Visit__Time")),a),this.statData.lvts=function(){var t=e.getStorageSync("Last__Visit__Time"),n=0;return n=t||"",e.setStorageSync("Last__Visit__Time",g()),n}(),this.statData.tvc=function(){var t=e.getStorageSync("Total__Visit__Count"),n=1;return t&&(n=t,n++),e.setStorageSync("Total__Visit__Count",n),n}(),"n"===h()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,a=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:a,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,a=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:a,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,a=t.value,o=void 0===a?"":a,i=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"==typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:g(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;e.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var e=this;t.runtime.getProperty(t.runtime.appid,function(t){e.statData.v=t.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;N.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,n){var a=this,o=g(),i=this._navigationBarTitle;t.ttn=i.page,t.ttpj=i.config,t.ttc=i.report;var r=this._reportingRequestData;if("n"===h()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[t.lt]||(r[t.lt]=[]),r[t.lt].push(t),"n"===h()&&e.setStorageSync("__UNI__STAT__DATA",r),b=g(),"n"===h()&&(m=e.getStorageSync("__page__residence__time")),!(b-m<10)||n){var s=this._reportingRequestData;"n"===h()&&(s=e.getStorageSync("__UNI__STAT__DATA")),S();var u=[],l=[],p=[],f=function(t){s[t].forEach(function(e){var n=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)}(e);0===t?u.push(n):3===t?p.push(n):l.push(n)})};for(var d in s)f(d);u.push.apply(u,l.concat(p));var v={usv:c,t:o,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===h()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==h()||"a"!==this.statData.p?this._sendRequest(v):setTimeout(function(){a._sendRequest(v)},200):this.imageRequest(v)}}},{key:"_sendRequest",value:function(t){var n=this;e.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(e){++n._retry<3&&setTimeout(function(){n._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=function(t){var e=Object.keys(t).sort(),n={},a="";for(var o in e)n[e[o]]=t[e[o]],a+=e[o]+"="+t[e[o]]+"&";return{sign:"",options:a.substr(0,a.length-1)}}(function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(t,e){var n,a;(a=e,(n=t)?"string"!=typeof n?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):n.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof a&&"object"!=typeof a?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof a&&a.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===n&&"string"!=typeof a?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),n}(),x=function(t){function n(){var t;return r(this,n),(t=a(this,o(n).call(this))).instance=null,"function"==typeof e.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(n,R),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var t=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;e.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var n=this;t?e.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var t=this;e.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,S(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,B(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,B(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(n)}}]),n}().getInstance(),P=!1,E={onLaunch:function(t){x.report(t,this)},onReady:function(){x.ready(this)},onLoad:function(t){if(x.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return x.interceptShare(!1),e.call(this,t)}}},onShow:function(){P=!1,x.show(this)},onHide:function(){P=!0,x.hide(this)},onUnload:function(){P?P=!1:x.hide(this)},onError:function(t){x.error(t)}};((d=n(7)).default||d).mixin(E),e.report=function(t,e){x.sendEvent(t,e)}}).call(this,n(1).weexPlus,n(1).default)},5:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-23320190923002",_inBundle:!1,_integrity:"sha512-Tx/EBxz3jI/gKtvaPSUwoLpGcp1BMtKyPxp9iFmX4mRiJbzP6SnrdFJmYdwHLwdtCVDU9DIolB3QtHMbL4+ZHQ==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-23320190923002.tgz",_shasum:"da7ead9bdc4b8e50e142563cd1acb8e7b048d67b",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"99ef233d7acf114d7aaecd91dbdc983a26bfbc5b",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-23320190923002"}},6:function(t,e,n){"use strict";n.r(e),e.default={pages:{},globalStyle:{}}},67:function(t,e,n){"use strict";var a=n(206),o=n(166),i=n(3);var r=Object(i.a)(o.default,a.a,a.b,!1,null,null,"1ed34b37");(function(){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(238).default,this.options.style):Object.assign(this.options.style,n(238).default)}).call(r),e.default=r.exports},7:function(t,e){t.exports=Vue},8:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(9).default,Vue.prototype.__$appStyle__)},9:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e.default=o.a}});