(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-upgrade-index"],{"05d8":function(t,e,n){"use strict";var r=n("8e3f"),a=n.n(r);a.a},"0b47":function(t,e,n){var r=n("9183");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("0f9175b7",r,!0,{sourceMap:!1,shadowMode:!1})},"0f01":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-shadow-root",{staticClass:"vant-transition-index"},[t.inited?n("v-uni-view",{class:"van-transition custom-class "+t.classes,style:"-webkit-transition-duration:"+t.currentDuration+"ms; transition-duration:"+t.currentDuration+"ms; "+(t.display?"":"display: none;")+" "+t.customStyle,on:{transitionend:function(e){arguments[0]=e=t.$handleEvent(e),t.onTransitionEnd.apply(void 0,arguments)}}},[t._t("default")],2):t._e()],1)},i=[]},"12c6":function(t,e,n){"use strict";n.r(e);var r=n("e030"),a=n("2e8c");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("fb57");var o,s=n("f0c5"),l=n("bb6e"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);"function"===typeof l["a"]&&Object(l["a"])(c),e["default"]=c.exports},"13ac":function(t,e,n){"use strict";(function(t){n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.transition=void 0;var r=n("768f"),a=function(t){return{enter:"van-".concat(t,"-enter van-").concat(t,"-enter-active enter-class enter-active-class"),"enter-to":"van-".concat(t,"-enter-to van-").concat(t,"-enter-active enter-to-class enter-active-class"),leave:"van-".concat(t,"-leave van-").concat(t,"-leave-active leave-class leave-active-class"),"leave-to":"van-".concat(t,"-leave-to van-").concat(t,"-leave-active leave-to-class leave-active-class")}},i=function(e){return t({properties:{customStyle:String,show:{type:Boolean,value:e,observer:"observeShow"},duration:{type:null,value:300,observer:"observeDuration"},name:{type:String,value:"fade"}},data:{type:"",inited:!1,display:!1},methods:{observeShow:function(t,e){t!==e&&(t?this.enter():this.leave())},enter:function(){var t=this,e=this.data,n=e.duration,i=e.name,o=a(i),s=(0,r.isObj)(n)?n.enter:n;this.status="enter",this.$emit("before-enter"),(0,r.requestAnimationFrame)((function(){t.checkStatus("enter"),t.$emit("enter"),t.setData({inited:!0,display:!0,classes:o.enter,currentDuration:s}),(0,r.requestAnimationFrame)((function(){t.checkStatus("enter"),t.transitionEnded=!1,t.setData({classes:o["enter-to"]})}))}))},leave:function(){var t=this;if(this.data.display){var e=this.data,n=e.duration,i=e.name,o=a(i),s=(0,r.isObj)(n)?n.leave:n;this.status="leave",this.$emit("before-leave"),(0,r.requestAnimationFrame)((function(){t.checkStatus("leave"),t.$emit("leave"),t.setData({classes:o.leave,currentDuration:s}),(0,r.requestAnimationFrame)((function(){t.checkStatus("leave"),t.transitionEnded=!1,setTimeout((function(){return t.onTransitionEnd()}),s),t.setData({classes:o["leave-to"]})}))}))}},checkStatus:function(t){if(t!==this.status)throw new Error("incongruent status: ".concat(t))},onTransitionEnd:function(){if(!this.transitionEnded){this.transitionEnded=!0,this.$emit("after-".concat(this.status));var t=this.data,e=t.show,n=t.display;!e&&n&&this.setData({display:!1})}}}})};e.transition=i}).call(this,n("fe07")["Behavior"])},"1a51":function(t,e,n){"use strict";var r=n("4ea4");n("d3b7"),n("e25e"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a,i,o=r(n("1da1")),s=r(n("c7d1")),l=r(n("e143")),c={isUpdate:function(t,e){return(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e&&e();case 1:case"end":return t.stop()}}),t)})))()},getAppVersion:function(){return new Promise((function(t,e){a?t(a):plus.runtime.getProperty(plus.runtime.appid,(function(e){t(e.version),a=e.version}))}))},osName:function(){return plus.os.name},getNewestVersion:function(){return i||(i=s.default.getNewestVersion(),i)},getNum:function(t){return t+="",1*t.replace(/[^0-9]/gi,"")},toUpgrade:function(){console.log("去升级")},downloadFile:function(t){var e=t.url,n=t.update,r=t.before,a=t.after;return new Promise((function(t,i){r&&r();var o=plus.downloader.createDownload(e,{},(function(e,n){200==n&&t(e.filename),a&&a()})),s=function(t){n&&n(parseInt(t.downloadedSize/t.totalSize*100)||0)};o.addEventListener("statechanged",s,!1),o.start()}))},install:function(t){"Android"==plus.os.name?plus.runtime.install(t,{force:!1},(function(){plus.runtime.restart(),l.default.prototype.$toast("下载成功，正在安装。。。")}),(function(t){l.default.prototype.$toast("安装失败，请尝试重新下载")})):"iOS"==plus.os.name&&plus.runtime.openURL(t)},ready:function(t){window.plus?t():document.addEventListener("plusready",t,!1)}},u=c;e.default=u},"1b13":function(t,e,n){var r=n("ecd9");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("1a7e78fb",r,!0,{sourceMap:!1,shadowMode:!1})},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,a,i,o){try{var s=t[i](o),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function s(t){r(o,a,i,s,l,"next",t)}function l(t){r(o,a,i,s,l,"throw",t)}s(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},"2e8c":function(t,e,n){"use strict";n.r(e);var r=n("86d9"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},4966:function(t,e,n){"use strict";n.r(e);var r=n("b1d7"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"4f73":function(t,e,n){"use strict";function r(t){return Object.assign(t,{setStrokeStyle:function(e){t.strokeStyle=e},setLineWidth:function(e){t.lineWidth=e},setLineCap:function(e){t.lineCap=e},setFillStyle:function(e){t.fillStyle=e},setFontSize:function(e){t.font=String(e)},setGlobalAlpha:function(e){t.globalAlpha=e},setLineJoin:function(e){t.lineJoin=e},setTextAlign:function(e){t.textAlign=e},setMiterLimit:function(e){t.miterLimit=e},setShadow:function(e,n,r,a){t.shadowOffsetX=e,t.shadowOffsetY=n,t.shadowBlur=r,t.shadowColor=a},setTextBaseline:function(e){t.textBaseline=e},createCircularGradient:function(){},draw:function(){}})}Object.defineProperty(e,"__esModule",{value:!0}),e.adaptor=r},"50a7":function(t,e,n){"use strict";var r=n("9fc9"),a=n.n(r);a.a},5796:function(t,e,n){"use strict";(function(t){var r=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("df48")),i=n("d6f7");t["__wxVueOptions"]={components:{"van-transition":a.default}},t["__wxRoute"]="vant/overlay/index",(0,i.VantComponent)({props:{show:Boolean,customStyle:String,duration:{type:null,value:300},zIndex:{type:Number,value:1}},methods:{onClick:function(){this.$emit("click")},noop:function(){}}});var o=t["__wxComponents"]["vant/overlay/index"];e.default=o}).call(this,n("c8ba"))},"5a88":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={vanPopup:n("a1b3").default,vanCircle:n("12c6").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-popup",{staticClass:"upgrade",attrs:{show:t.show},on:{"click-overlay":function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"upgrade-box d-flex flex-col overflow-hidden"},[n("v-uni-view",{staticClass:"overflow-scroll p-md flex-fill"},[n("v-uni-view",[t._v("version："+t._s(t.detail.version))]),n("v-uni-view",{domProps:{innerHTML:t._s(t.detail.update_log)}})],1),t.load?n("v-uni-view",{staticClass:"d-flex justify-center p-y-md"},[n("van-circle",{attrs:{value:t.progress,color:"#ea3131",rate:100,size:"40",text:t.progress+"%"}})],1):t.detail.url?n("v-uni-view",{staticClass:"fn-center p-md bg-theme-1 color-plain",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toUp.apply(void 0,arguments)}}},[t._v("升级")]):t._e()],1)],1)},i=[]},"7cb3":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={vanTransition:n("df48").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-shadow-root",{staticClass:"vant-overlay-index"},[n("van-transition",{attrs:{show:t.show,"custom-class":"van-overlay","custom-style":"z-index: "+t.zIndex+"; "+t.customStyle,duration:t.duration},nativeOn:{click:function(e){return t.onClick(e)},touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.noop(e)}}},[t._t("default")],2)],1)},i=[]},"86c0":function(t,e,n){"use strict";n.r(e);var r=n("5a88"),a=n("4966");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("05d8");var o,s=n("f0c5"),l=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"8a501ef4",null,!1,r["a"],o);e["default"]=l.exports},"86d9":function(t,e,n){"use strict";(function(t){n("cb29"),n("d81d"),n("4e82"),n("a9e3"),n("b64b"),n("d3b7"),n("acd8"),n("ac1f"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("d6f7"),a=n("768f"),i=n("9b38"),o=n("4f73");function s(t){return Math.min(Math.max(t,0),100)}t["__wxRoute"]="vant/circle/index";var l=2*Math.PI,c=-Math.PI/2,u=1;(0,r.VantComponent)({props:{text:String,lineCap:{type:String,value:"round"},value:{type:Number,value:0,observer:"reRender"},speed:{type:Number,value:50},size:{type:Number,value:100,observer:function(){this.drawCircle(this.currentValue)}},fill:String,layerColor:{type:String,value:i.WHITE},color:{type:[String,Object],value:i.BLUE,observer:function(){var t=this;this.setHoverColor().then((function(){t.drawCircle(t.currentValue)}))}},type:{type:String,value:""},strokeWidth:{type:Number,value:4},clockwise:{type:Boolean,value:!0}},data:{hoverColor:i.BLUE},methods:{getContext:function(){var t=this,e=this.data,n=e.type,r=e.size;if(""===n){var a=wx.createCanvasContext("van-circle",this);return Promise.resolve(a)}var i=wx.getSystemInfoSync().pixelRatio;return new Promise((function(e){uni.createSelectorQuery().in(t).select("#van-circle").node().exec((function(a){var s=a[0].node,l=s.getContext(n);t.inited||(t.inited=!0,s.width=r*i,s.height=r*i,l.scale(i,i)),e((0,o.adaptor)(l))}))}))},setHoverColor:function(){var t=this,e=this.data,n=e.color,r=e.size;return(0,a.isObj)(n)?this.getContext().then((function(e){var a=e.createLinearGradient(r,0,0,0);Object.keys(n).sort((function(t,e){return parseFloat(t)-parseFloat(e)})).map((function(t){return a.addColorStop(parseFloat(t)/100,n[t])})),t.hoverColor=a})):(this.hoverColor=n,Promise.resolve())},presetCanvas:function(t,e,n,r,a){var i=this.data,o=i.strokeWidth,s=i.lineCap,l=i.clockwise,c=i.size,u=c/2,f=u-o/2;t.setStrokeStyle(e),t.setLineWidth(o),t.setLineCap(s),t.beginPath(),t.arc(u,u,f,n,r,!l),t.stroke(),a&&(t.setFillStyle(a),t.fill())},renderLayerCircle:function(t){var e=this.data,n=e.layerColor,r=e.fill;this.presetCanvas(t,n,0,l,r)},renderHoverCircle:function(t,e){var n=this.data.clockwise,r=l*(e/100),a=n?c+r:3*Math.PI-(c+r);this.presetCanvas(t,this.hoverColor,c,a)},drawCircle:function(t){var e=this,n=this.data.size;this.getContext().then((function(r){r.clearRect(0,0,n,n),e.renderLayerCircle(r);var a=s(t);0!==a&&e.renderHoverCircle(r,a),r.draw()}))},reRender:function(){var t=this,e=this.data,n=e.value,r=e.speed;r<=0||r>1e3?this.drawCircle(n):(this.clearInterval(),this.currentValue=this.currentValue||0,this.interval=setInterval((function(){t.currentValue!==n?(t.currentValue<n?t.currentValue+=u:t.currentValue-=u,t.drawCircle(t.currentValue)):t.clearInterval()}),1e3/r))},clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){this.interval&&(clearInterval(this.interval),this.interval=null)}))},mounted:function(){var t=this;this.currentValue=this.data.value,this.setHoverColor().then((function(){t.drawCircle(t.currentValue)}))},destroyed:function(){this.clearInterval()}});var f=t["__wxComponents"]["vant/circle/index"];e.default=f}).call(this,n("c8ba"))},"8c76":function(t,e,n){"use strict";n.r(e);var r=n("d7e7"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"8e3f":function(t,e,n){var r=n("9ca9");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("11e6fd1f",r,!0,{sourceMap:!1,shadowMode:!1})},9183:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-multi-ellipsis--l2{-webkit-line-clamp:2}.van-multi-ellipsis--l2,.van-multi-ellipsis--l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.van-multi-ellipsis--l3{-webkit-line-clamp:3}.van-clearfix:after{display:table;clear:both;content:""}.van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom{position:relative}.van-hairline--bottom:after,.van-hairline--left:after,.van-hairline--right:after,.van-hairline--surround:after,.van-hairline--top-bottom:after,.van-hairline--top:after,.van-hairline:after{position:absolute;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #eee;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline--top:after{border-top-width:1px}.van-hairline--left:after{border-left-width:1px}.van-hairline--right:after{border-right-width:1px}.van-hairline--bottom:after{border-bottom-width:1px}.van-hairline--top-bottom:after{border-width:1px 0}.van-hairline--surround:after{border-width:1px}.van-popup{position:fixed;box-sizing:border-box;max-height:100%;overflow-y:auto;transition-timing-function:ease;-webkit-animation:ease both;animation:ease both;-webkit-overflow-scrolling:touch;background-color:#fff;background-color:var(--popup-background-color,#fff)}.van-popup--center{top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-popup--center.van-popup--round{border-radius:20px;border-radius:var(--popup-round-border-radius,20px)}.van-popup--top{top:0;left:0;width:100%}.van-popup--top.van-popup--round{border-radius:0 0 20px 20px;border-radius:0 0 var(--popup-round-border-radius,20px) var(--popup-round-border-radius,20px)}.van-popup--right{top:50%;right:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--right.van-popup--round{border-radius:20px 0 0 20px;border-radius:var(--popup-round-border-radius,20px) 0 0 var(--popup-round-border-radius,20px)}.van-popup--bottom{bottom:0;left:0;width:100%}.van-popup--bottom.van-popup--round{border-radius:20px 20px 0 0;border-radius:var(--popup-round-border-radius,20px) var(--popup-round-border-radius,20px) 0 0}.van-popup--left{top:50%;left:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--left.van-popup--round{border-radius:0 20px 20px 0;border-radius:0 var(--popup-round-border-radius,20px) var(--popup-round-border-radius,20px) 0}.van-popup--bottom.van-popup--safe{padding-bottom:env(safe-area-inset-bottom)}.van-popup--safeTop{padding-top:env(safe-area-inset-top)}.van-popup__close-icon{position:absolute;z-index:1;z-index:var(--popup-close-icon-z-index,1);color:#969799;color:var(--popup-close-icon-color,#969799);font-size:18px;font-size:var(--popup-close-icon-size,18px)}.van-popup__close-icon--top-left{top:16px;top:var(--popup-close-icon-margin,16px);left:16px;left:var(--popup-close-icon-margin,16px)}.van-popup__close-icon--top-right{top:16px;top:var(--popup-close-icon-margin,16px);right:16px;right:var(--popup-close-icon-margin,16px)}.van-popup__close-icon--bottom-left{bottom:16px;bottom:var(--popup-close-icon-margin,16px);left:16px;left:var(--popup-close-icon-margin,16px)}.van-popup__close-icon--bottom-right{right:16px;right:var(--popup-close-icon-margin,16px);bottom:16px;bottom:var(--popup-close-icon-margin,16px)}.van-popup__close-icon:active{opacity:.6}.van-scale-enter-active,.van-scale-leave-active{transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.van-scale-enter,.van-scale-leave-to{-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7);opacity:0}.van-fade-enter-active,.van-fade-leave-active{transition-property:opacity}.van-fade-enter,.van-fade-leave-to{opacity:0}.van-center-enter-active,.van-center-leave-active{transition-property:opacity}.van-center-enter,.van-center-leave-to{opacity:0}.van-bottom-enter-active,.van-bottom-leave-active,.van-left-enter-active,.van-left-leave-active,.van-right-enter-active,.van-right-leave-active,.van-top-enter-active,.van-top-leave-active{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-property:transform,-webkit-transform}.van-bottom-enter,.van-bottom-leave-to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.van-top-enter,.van-top-leave-to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.van-left-enter,.van-left-leave-to{-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}.van-right-enter,.van-right-leave-to{-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}',""]),t.exports=e},9606:function(t,e,n){"use strict";var r=n("fd83"),a=n.n(r);a.a},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag",c="object"===typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{u=e.regeneratorRuntime=c?t.exports:{},u.wrap=x;var f="suspendedStart",v="suspendedYield",p="executing",d="completed",h={},b={};b[o]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(I([])));w&&w!==r&&a.call(w,o)&&(b=w);var y=C.prototype=k.prototype=Object.create(b);_.prototype=y.constructor=C,C.constructor=_,C[l]=_.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(y),t},u.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[s]=function(){return this},u.AsyncIterator=S,u.async=function(t,e,n,r){var a=new S(x(t,e,n,r));return u.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(y),y[l]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=I,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(z),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,a){return s.type="throw",s.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),z(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;z(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),h}}}function x(t,e,n,r){var a=e&&e.prototype instanceof k?e:k,i=Object.create(a.prototype),o=new P(r||[]);return i._invoke=O(t,n,o),i}function g(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function _(){}function C(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function S(t){function e(n,r,i,o){var s=g(t[n],t,r);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"===typeof c&&a.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,i,o)}),(function(t){e("throw",t,i,o)})):Promise.resolve(c).then((function(t){l.value=t,i(l)}),(function(t){return e("throw",t,i,o)}))}o(s.arg)}var n;function r(t,r){function a(){return new Promise((function(n,a){e(t,r,n,a)}))}return n=n?n.then(a,a):a()}this._invoke=r}function O(t,e,n){var r=f;return function(a,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===a)throw i;return A()}n.method=a,n.arg=i;while(1){var o=n.delegate;if(o){var s=L(o,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=g(t,e,n);if("normal"===l.type){if(r=n.done?d:v,l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=d,n.method="throw",n.arg=l.arg)}}}function L(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=g(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function I(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:A}}function A(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},9721:function(t,e,n){"use strict";n.r(e);var r=n("5796"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"9b38":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GRAY_DARK=e.GRAY=e.ORANGE=e.GREEN=e.WHITE=e.BLUE=e.RED=void 0;var r="#ee0a24";e.RED=r;var a="#1989fa";e.BLUE=a;var i="#fff";e.WHITE=i;var o="#07c160";e.GREEN=o;var s="#ff976a";e.ORANGE=s;var l="#323233";e.GRAY=l;var c="#969799";e.GRAY_DARK=c},"9ca9":function(t,e,n){var r=n("24fb"),a=n("1de5"),i=n("ccee");e=r(!1);var o=a(i);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-8a501ef4] uni-canvas{width:%?90?%;height:%?90?%}[data-v-8a501ef4] .uni-cover-view{font-size:%?24?%}.upgrade[data-v-8a501ef4] .van-popup{background-color:initial!important}.upgrade-box[data-v-8a501ef4]{width:275px;height:350px;background:#fff url('+o+") no-repeat top;background-size:100% auto;box-sizing:border-box;border-radius:23px;padding-top:125px;overflow:hidden}",""]),t.exports=e},"9fc9":function(t,e,n){var r=n("d791");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("ef5edf4a",r,!0,{sourceMap:!1,shadowMode:!1})},a1b3:function(t,e,n){"use strict";n.r(e);var r=n("eb16"),a=n("8c76");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("f457");var o,s=n("f0c5"),l=n("de1c"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);"function"===typeof l["a"]&&Object(l["a"])(c),e["default"]=c.exports},b1d7:function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=r(n("1da1")),i=r(n("1a51")),o={data:function(){return{detail:{is_must:1},progress:0,load:!1,show:!1}},created:function(){var t=this;this.show=!0,i.default.isUpdate((function(e){t.show=!0,"Android"==i.default.osName()?t.detail=e.android:"iOS"==i.default.osName()&&(t.detail=e.ios)}))},methods:{toUp:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("Android"!=i.default.osName()){e.next=7;break}return e.next=3,i.default.downloadFile({url:t.detail.url,before:function(){t.load=!0,t.progress=0},update:function(e){t.progress=e},after:function(){this.load=!1}});case 3:n=e.sent,i.default.install(n),e.next=8;break;case 7:"iOS"==i.default.osName()&&i.default.install(t.detail.url);case 8:case"end":return e.stop()}}),e)})))()},back:function(){1!=this.detail.is_must&&uni.reLaunch({url:"/"})}}};e.default=o},ba24:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-multi-ellipsis--l2{-webkit-line-clamp:2}.van-multi-ellipsis--l2,.van-multi-ellipsis--l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.van-multi-ellipsis--l3{-webkit-line-clamp:3}.van-clearfix:after{display:table;clear:both;content:""}.van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom{position:relative}.van-hairline--bottom:after,.van-hairline--left:after,.van-hairline--right:after,.van-hairline--surround:after,.van-hairline--top-bottom:after,.van-hairline--top:after,.van-hairline:after{position:absolute;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #eee;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline--top:after{border-top-width:1px}.van-hairline--left:after{border-left-width:1px}.van-hairline--right:after{border-right-width:1px}.van-hairline--bottom:after{border-bottom-width:1px}.van-hairline--top-bottom:after{border-width:1px 0}.van-hairline--surround:after{border-width:1px}.van-transition{transition-timing-function:ease}.van-fade-enter-active,.van-fade-leave-active{transition-property:opacity}.van-fade-enter,.van-fade-leave-to{opacity:0}.van-fade-down-enter-active,.van-fade-down-leave-active,.van-fade-left-enter-active,.van-fade-left-leave-active,.van-fade-right-enter-active,.van-fade-right-leave-active,.van-fade-up-enter-active,.van-fade-up-leave-active{transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.van-fade-up-enter,.van-fade-up-leave-to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0}.van-fade-down-enter,.van-fade-down-leave-to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:0}.van-fade-left-enter,.van-fade-left-leave-to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:0}.van-fade-right-enter,.van-fade-right-leave-to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:0}.van-slide-down-enter-active,.van-slide-down-leave-active,.van-slide-left-enter-active,.van-slide-left-leave-active,.van-slide-right-enter-active,.van-slide-right-leave-active,.van-slide-up-enter-active,.van-slide-up-leave-active{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-property:transform,-webkit-transform}.van-slide-up-enter,.van-slide-up-leave-to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.van-slide-down-enter,.van-slide-down-leave-to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.van-slide-left-enter,.van-slide-left-leave-to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.van-slide-right-enter,.van-slide-right-leave-to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}',""]),t.exports=e},bb6e:function(t,e,n){"use strict";var r=function(t){(t.options.wxs||(t.options.wxs={}))["utils"]=function(t){var e=n("6418").bem,r=n("79e5").memoize,a=n("3fa9").addUnit;return t.exports={bem:r(e),memoize:r,addUnit:a},t.exports}({exports:{}})};e["a"]=r},cb29:function(t,e,n){var r=n("23e7"),a=n("81d5"),i=n("44d2");r({target:"Array",proto:!0},{fill:a}),i("fill")},ccee:function(t,e,n){t.exports=n.p+"static/img/shengji.5a214053.png"},cd95:function(t,e,n){"use strict";n.r(e);var r=n("7cb3"),a=n("9721");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("50a7");var o,s=n("f0c5"),l=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=l.exports},d791:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-multi-ellipsis--l2{-webkit-line-clamp:2}.van-multi-ellipsis--l2,.van-multi-ellipsis--l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.van-multi-ellipsis--l3{-webkit-line-clamp:3}.van-clearfix:after{display:table;clear:both;content:""}.van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom{position:relative}.van-hairline--bottom:after,.van-hairline--left:after,.van-hairline--right:after,.van-hairline--surround:after,.van-hairline--top-bottom:after,.van-hairline--top:after,.van-hairline:after{position:absolute;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #eee;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline--top:after{border-top-width:1px}.van-hairline--left:after{border-left-width:1px}.van-hairline--right:after{border-right-width:1px}.van-hairline--bottom:after{border-bottom-width:1px}.van-hairline--top-bottom:after{border-width:1px 0}.van-hairline--surround:after{border-width:1px}.van-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.7);background-color:var(--overlay-background-color,rgba(0,0,0,.7))}',""]),t.exports=e},d7e7:function(t,e,n){"use strict";(function(t){var r=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("4e12")),i=r(n("cd95")),o=n("d6f7"),s=n("13ac");t["__wxVueOptions"]={components:{"van-icon":a.default,"van-overlay":i.default}},t["__wxRoute"]="vant/popup/index",(0,o.VantComponent)({classes:["enter-class","enter-active-class","enter-to-class","leave-class","leave-active-class","leave-to-class","close-icon-class"],mixins:[(0,s.transition)(!1)],props:{round:Boolean,closeable:Boolean,customStyle:String,overlayStyle:String,transition:{type:String,observer:"observeClass"},zIndex:{type:Number,value:100},overlay:{type:Boolean,value:!0},closeIcon:{type:String,value:"cross"},closeIconPosition:{type:String,value:"top-right"},closeOnClickOverlay:{type:Boolean,value:!0},position:{type:String,value:"center",observer:"observeClass"},safeAreaInsetBottom:{type:Boolean,value:!0},safeAreaInsetTop:{type:Boolean,value:!1}},created:function(){this.observeClass()},methods:{onClickCloseIcon:function(){this.$emit("close")},onClickOverlay:function(){this.$emit("click-overlay"),this.data.closeOnClickOverlay&&this.$emit("close")},observeClass:function(){var t=this.data,e=t.transition,n=t.position,r=t.duration,a={name:e||n};"none"===e?(a.duration=0,this.originDuration=r):null!=this.originDuration&&(a.duration=this.originDuration),this.setData(a)}}});var l=t["__wxComponents"]["vant/popup/index"];e.default=l}).call(this,n("c8ba"))},de1c:function(t,e,n){"use strict";var r=function(t){(t.options.wxs||(t.options.wxs={}))["utils"]=function(t){var e=n("6418").bem,r=n("79e5").memoize,a=n("3fa9").addUnit;return t.exports={bem:r(e),memoize:r,addUnit:a},t.exports}({exports:{}})};e["a"]=r},df48:function(t,e,n){"use strict";n.r(e);var r=n("0f01"),a=n("f27f");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("9606");var o,s=n("f0c5"),l=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=l.exports},e030:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-shadow-root",{staticClass:"vant-circle-index"},[n("v-uni-view",{staticClass:"van-circle"},[n("v-uni-canvas",{staticClass:"van-circle__canvas",style:"width: "+t.utils.addUnit(t.size)+";height:"+t.utils.addUnit(t.size),attrs:{type:t.type,id:"van-circle","canvas-id":"van-circle"}}),t.text?n("v-uni-cover-view",{staticClass:"van-circle__text"},[t._v(t._s(t.text))]):n("v-uni-view",{staticClass:"van-circle__text"},[t._t("default")],2)],1)],1)},i=[]},eb16:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={vanOverlay:n("cd95").default,vanIcon:n("4e12").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-shadow-root",{staticClass:"vant-popup-index"},[t.overlay?n("van-overlay",{attrs:{show:t.show,"z-index":t.zIndex,"custom-style":t.overlayStyle,duration:t.duration},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickOverlay.apply(void 0,arguments)}}}):t._e(),t.inited?n("v-uni-view",{class:"custom-class "+t.classes+" "+t.utils.bem("popup",[t.position,{round:t.round,safe:t.safeAreaInsetBottom,safeTop:t.safeAreaInsetTop}]),style:"z-index: "+t.zIndex+"; -webkit-transition-duration:"+t.currentDuration+"ms; transition-duration:"+t.currentDuration+"ms; "+(t.display?"":"display: none;")+";"+t.customStyle,on:{transitionend:function(e){arguments[0]=e=t.$handleEvent(e),t.onTransitionEnd.apply(void 0,arguments)}}},[t._t("default"),t.closeable?n("van-icon",{class:"close-icon-class van-popup__close-icon van-popup__close-icon--"+t.closeIconPosition,attrs:{name:t.closeIcon},nativeOn:{click:function(e){return t.onClickCloseIcon(e)}}}):t._e()],2):t._e()],1)},i=[]},ecd9:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-multi-ellipsis--l2{-webkit-line-clamp:2}.van-multi-ellipsis--l2,.van-multi-ellipsis--l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.van-multi-ellipsis--l3{-webkit-line-clamp:3}.van-clearfix:after{display:table;clear:both;content:""}.van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom{position:relative}.van-hairline--bottom:after,.van-hairline--left:after,.van-hairline--right:after,.van-hairline--surround:after,.van-hairline--top-bottom:after,.van-hairline--top:after,.van-hairline:after{position:absolute;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #eee;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline--top:after{border-top-width:1px}.van-hairline--left:after{border-left-width:1px}.van-hairline--right:after{border-right-width:1px}.van-hairline--bottom:after{border-bottom-width:1px}.van-hairline--top-bottom:after{border-width:1px 0}.van-hairline--surround:after{border-width:1px}.van-circle{position:relative;display:inline-block;text-align:center}.van-circle__text{position:absolute;top:50%;left:0;width:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#323233;color:var(--circle-text-color,#323233)}',""]),t.exports=e},f27f:function(t,e,n){"use strict";n.r(e);var r=n("f380"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},f380:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("d6f7"),a=n("13ac");t["__wxRoute"]="vant/transition/index",(0,r.VantComponent)({classes:["enter-class","enter-active-class","enter-to-class","leave-class","leave-active-class","leave-to-class"],mixins:[(0,a.transition)(!0)]});var i=t["__wxComponents"]["vant/transition/index"];e.default=i}).call(this,n("c8ba"))},f457:function(t,e,n){"use strict";var r=n("0b47"),a=n.n(r);a.a},fb57:function(t,e,n){"use strict";var r=n("1b13"),a=n.n(r);a.a},fd83:function(t,e,n){var r=n("ba24");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("d6220180",r,!0,{sourceMap:!1,shadowMode:!1})}}]);