(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-help-sort"],{"0561":function(t,e,n){"use strict";(function(t){n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.button=void 0;var a=t({externalClasses:["hover-class"],properties:{id:String,lang:String,businessId:Number,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,appParameter:String,ariaLabel:String}});e.button=a}).call(this,n("fe07")["Behavior"])},"09ce":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("d4ec")),r=a(n("bee2")),o=a(n("1292")),l=function(){function t(){(0,i.default)(this,t)}return(0,r.default)(t,null,[{key:"college",value:function(){return o.default.get("/college")}},{key:"getArticleList",value:function(t){return o.default.get("/articleList",t)}},{key:"getCategoryList",value:function(){return o.default.get("/categoryList")}},{key:"getArticleDetail",value:function(t){return o.default.get("/article/detail",t)}},{key:"getRecommend",value:function(){return o.default.get("/recommend")}}]),t}(),s=l;e.default=s},"123f":function(t,e,n){"use strict";n.r(e);var a=n("eaef"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"1d2a":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={vanNavBar:n("37af").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-nav-bar",{attrs:{border:t.border,title:t.title,"left-arrow":t.leftArrow},on:{"click-left":function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}},scopedSlots:t._u([{key:"left",fn:function(){return[t._t("left")]},proxy:!0},{key:"title",fn:function(){return[t._t("title")]},proxy:!0},{key:"right",fn:function(){return[t._t("right")]},proxy:!0}],null,!0)})},r=[]},"1dfb":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.openType=void 0;var n=t({properties:{openType:String},methods:{bindGetUserInfo:function(t){this.$emit("getuserinfo",t.detail)},bindContact:function(t){this.$emit("contact",t.detail)},bindGetPhoneNumber:function(t){this.$emit("getphonenumber",t.detail)},bindError:function(t){this.$emit("error",t.detail)},bindLaunchApp:function(t){this.$emit("launchapp",t.detail)},bindOpenSetting:function(t){this.$emit("opensetting",t.detail)}}});e.openType=n}).call(this,n("fe07")["Behavior"])},2599:function(t,e,n){"use strict";n.r(e);var a=n("7778"),i=n("c249");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var o,l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=s.exports},"30aa":function(t,e,n){var a=n("d3f6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("b6d9ed54",a,!0,{sourceMap:!1,shadowMode:!1})},"37af":function(t,e,n){"use strict";n.r(e);var a=n("a8bc"),i=n("123f");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("f50b");var o,l=n("f0c5"),s=n("777b"),d=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);"function"===typeof s["a"]&&Object(s["a"])(d),e["default"]=d.exports},"3b3e":function(t,e,n){"use strict";n.r(e);var a=n("647b"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"519a":function(t,e,n){"use strict";n.r(e);var a=n("8bfa"),i=n("9e35");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("5b47");var o,l=n("f0c5"),s=n("83eb"),d=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);"function"===typeof s["a"]&&Object(s["a"])(d),e["default"]=d.exports},"5a4d":function(t,e,n){var a=n("6e17");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("6a1b1134",a,!0,{sourceMap:!1,shadowMode:!1})},"5b47":function(t,e,n){"use strict";var a=n("f7f1"),i=n.n(a);i.a},6325:function(t,e,n){"use strict";var a=function(t){(t.options.wxs||(t.options.wxs={}))["utils"]=function(t){var e=n("6418").bem,a=n("79e5").memoize,i=n("3fa9").addUnit;return t.exports={bem:a(e),memoize:a,addUnit:i},t.exports}({exports:{}})};e["a"]=a},"647b":function(t,e,n){"use strict";(function(t){n("a630"),n("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("d6f7");t["__wxRoute"]="vant/loading/index",(0,a.VantComponent)({props:{color:String,vertical:Boolean,type:{type:String,value:"circular"},size:String,textSize:String},data:{array12:Array.from({length:12})}});var i=t["__wxComponents"]["vant/loading/index"];e.default=i}).call(this,n("c8ba"))},"6e17":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-multi-ellipsis--l2{-webkit-line-clamp:2}.van-multi-ellipsis--l2,.van-multi-ellipsis--l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.van-multi-ellipsis--l3{-webkit-line-clamp:3}.van-clearfix:after{display:table;clear:both;content:""}.van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom{position:relative}.van-hairline--bottom:after,.van-hairline--left:after,.van-hairline--right:after,.van-hairline--surround:after,.van-hairline--top-bottom:after,.van-hairline--top:after,.van-hairline:after{position:absolute;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #eee;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline--top:after{border-top-width:1px}.van-hairline--left:after{border-left-width:1px}.van-hairline--right:after{border-right-width:1px}.van-hairline--bottom:after{border-bottom-width:1px}.van-hairline--top-bottom:after{border-width:1px 0}.van-hairline--surround:after{border-width:1px}.van-nav-bar{text-align:center;-webkit-user-select:none;user-select:none;height:44px;height:var(--nav-bar-height,44px);line-height:44px;line-height:var(--nav-bar-height,44px);background-color:#fff;background-color:var(--nav-bar-background-color,#fff)}.van-nav-bar,.van-nav-bar__content{position:relative}.van-nav-bar__text{display:inline-block;vertical-align:middle;margin:0 -16px;margin:0 -var(--padding-md,16px);padding:0 16px;padding:0 var(--padding-md,16px);color:#1989fa;color:var(--nav-bar-text-color,#1989fa)}.van-nav-bar__text--hover{background-color:#f2f3f5;background-color:var(--active-color,#f2f3f5)}.van-nav-bar__arrow{vertical-align:middle;font-size:16px;font-size:var(--nav-bar-arrow-size,16px);color:#1989fa;color:var(--nav-bar-text-color,#1989fa)}.van-nav-bar__arrow+.van-nav-bar__text{margin-left:-20px;padding-left:25px}.van-nav-bar--fixed{position:fixed;top:0;left:0;width:100%}.van-nav-bar__title{max-width:60%;margin:0 auto;color:#323233;color:var(--nav-bar-title-text-color,#323233);font-weight:500;font-weight:var(--font-weight-bold,500);font-size:16px;font-size:var(--nav-bar-title-font-size,16px)}.van-nav-bar__left,.van-nav-bar__right{position:absolute;top:0;bottom:0;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:14px;font-size:var(--font-size-md,14px)}.van-nav-bar__left{left:16px;left:var(--padding-md,16px)}.van-nav-bar__right{right:16px;right:var(--padding-md,16px)}',""]),t.exports=e},7591:function(t,e,n){var a=n("ae0c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("6ba21372",a,!0,{sourceMap:!1,shadowMode:!1})},7778:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-navigator",{attrs:{url:t.url,openType:t.currentOpenType,animationDuration:t.animationDuration,hoverClass:t.hoverClass,hoverStopPropagation:t.hoverStopPropagation,hoverStartTime:t.hoverStartTime,hoverStayTime:t.hoverStayTime,target:t.target},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toNext.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},"777b":function(t,e,n){"use strict";var a=function(t){(t.options.wxs||(t.options.wxs={}))["utils"]=function(t){var e=n("6418").bem,a=n("79e5").memoize,i=n("3fa9").addUnit;return t.exports={bem:a(e),memoize:a,addUnit:i},t.exports}({exports:{}})};e["a"]=a},"7aeb":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("caad"),n("a9e3"),n("ac1f"),n("2532"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("4328")),r={name:"vLink",props:{to:{default:function(){return""},require:!0,type:String|Object},replace:{defalut:!1,requires:!1,type:Boolean},openType:{default:"navigate",require:!1,type:String},animationDuration:{default:300,require:!1,type:Number},hoverClass:{default:"navigator-hover",reuqire:!1,type:String},hoverStopPropagation:{default:!1,reuqire:!1,type:Boolean},hoverStartTime:{default:50,require:!1,type:Number},hoverStayTime:{default:600,require:!1,type:Number},target:{default:"self",require:!1,type:String}},computed:{currentOpenType:function(){return this.replace?"redirect":this.openType},url:function(){var t,e="";return"string"==typeof this.to?e=this.to:(e=this.to.path,t=i.default.stringify(this.to.query)),"".concat(e).concat(e.includes("?")?"&":"?").concat(t||"")}},methods:{toNext:function(){this.$navFontColor()}}};e.default=r},"7e8c":function(t,e,n){"use strict";var a=n("30aa"),i=n.n(a);i.a},"82f1":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-multi-ellipsis--l2{-webkit-line-clamp:2}.van-multi-ellipsis--l2,.van-multi-ellipsis--l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.van-multi-ellipsis--l3{-webkit-line-clamp:3}.van-clearfix:after{display:table;clear:both;content:""}.van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom{position:relative}.van-hairline--bottom:after,.van-hairline--left:after,.van-hairline--right:after,.van-hairline--surround:after,.van-hairline--top-bottom:after,.van-hairline--top:after,.van-hairline:after{position:absolute;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #eee;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline--top:after{border-top-width:1px}.van-hairline--left:after{border-left-width:1px}.van-hairline--right:after{border-right-width:1px}.van-hairline--bottom:after{border-bottom-width:1px}.van-hairline--top-bottom:after{border-width:1px 0}.van-hairline--surround:after{border-width:1px}.van-image{position:relative;display:inline-block}.van-image--round{overflow:hidden;border-radius:50%}.van-image--round .van-image__img{border-radius:inherit}.van-image__error,.van-image__img,.van-image__loading{display:block;width:100%;height:100%}.van-image__error,.van-image__loading{position:absolute;top:0;left:0;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;color:#969799;color:var(--image-placeholder-text-color,#969799);font-size:14px;font-size:var(--image-placeholder-font-size,14px);background-color:#f7f8fa;background-color:var(--image-placeholder-background-color,#f7f8fa)}',""]),t.exports=e},"83eb":function(t,e,n){"use strict";var a=function(t){(t.options.wxs||(t.options.wxs={}))["utils"]=function(t){var e=n("6418").bem,a=n("79e5").memoize,i=n("3fa9").addUnit;return t.exports={bem:a(e),memoize:a,addUnit:i},t.exports}({exports:{}})};e["a"]=a},8785:function(t,e,n){"use strict";n.r(e);var a=n("1d2a"),i=n("ac7b");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var o,l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=s.exports},"8bfa":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={vanIcon:n("4e12").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-shadow-root",{staticClass:"vant-image-index"},[n("v-uni-view",{class:"custom-class "+t.utils.bem("image",{round:t.round}),style:t.viewStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.error?t._e():n("v-uni-image",{staticClass:"image-class van-image__img",attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.onImageLoad.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.onImageError.apply(void 0,arguments)}}}),t.loading&&t.showLoading?n("v-uni-view",{staticClass:"loading-class van-image__loading"},[t.useLoadingSlot?t._t("loading"):n("van-icon",{attrs:{name:"photo-o",size:"22"}})],2):t._e(),t.error&&t.showError?n("v-uni-view",{staticClass:"error-class van-image__error"},[t.useErrorSlot?t._t("error"):n("van-icon",{attrs:{name:"warning-o",size:"22"}})],2):t._e()],1)],1)},r=[]},"8c5b":function(t,e,n){"use strict";(function(t){var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("4e12")),r=a(n("a289")),o=n("768f"),l=n("d6f7"),s=n("0561"),d=n("1dfb");t["__wxVueOptions"]={components:{"van-icon":i.default,"van-loading":r.default}},t["__wxRoute"]="vant/image/index";var f={none:"center",fill:"scaleToFill",cover:"aspectFill",contain:"aspectFit",widthFix:"widthFix",heightFix:"heightFix"};(0,l.VantComponent)({mixins:[s.button,d.openType],classes:["custom-class","loading-class","error-class","image-class"],props:{src:{type:String,observer:function(){this.setData({error:!1,loading:!0})}},round:Boolean,width:{type:null,observer:"setStyle"},height:{type:null,observer:"setStyle"},radius:null,lazyLoad:Boolean,useErrorSlot:Boolean,useLoadingSlot:Boolean,showMenuByLongpress:Boolean,fit:{type:String,value:"fill",observer:"setMode"},showError:{type:Boolean,value:!0},showLoading:{type:Boolean,value:!0}},data:{error:!1,loading:!0,viewStyle:""},mounted:function(){this.setMode(),this.setStyle()},methods:{setMode:function(){this.setData({mode:f[this.data.fit]})},setStyle:function(){var t=this.data,e=t.width,n=t.height,a=t.radius,i="";(0,o.isDef)(e)&&(i+="width: ".concat((0,o.addUnit)(e),";")),(0,o.isDef)(n)&&(i+="height: ".concat((0,o.addUnit)(n),";")),(0,o.isDef)(a)&&(i+="overflow: hidden;",i+="border-radius: ".concat((0,o.addUnit)(a),";")),this.setData({viewStyle:i})},onImageLoad:function(t){this.setData({loading:!1}),this.$emit("load",t.detail)},onImageError:function(t){this.setData({loading:!1,error:!0}),this.$emit("error",t.detail)},onClick:function(t){this.$emit("click",t.detail)}}});var c=t["__wxComponents"]["vant/image/index"];e.default=c}).call(this,n("c8ba"))},"8d1a":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-shadow-root",{staticClass:"vant-loading-index"},[n("v-uni-view",{class:"custom-class van-loading "+(t.vertical?"van-loading--vertical":"")},[n("v-uni-view",{class:"van-loading__spinner van-loading__spinner--"+t.type,style:"color: "+t.color+"; width: "+t.utils.addUnit(t.size)+"; height: "+t.utils.addUnit(t.size)},t._l(t.array12,(function(e,a){return"spinner"===t.type?n("v-uni-view",{key:e.index,staticClass:"van-loading__dot"}):t._e()})),1),n("v-uni-view",{staticClass:"van-loading__text",style:"font-size: "+t.utils.addUnit(t.textSize)+";"},[t._t("default")],2)],1)],1)},r=[]},"9e35":function(t,e,n){"use strict";n.r(e);var a=n("8c5b"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},a289:function(t,e,n){"use strict";n.r(e);var a=n("8d1a"),i=n("3b3e");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("e6ea");var o,l=n("f0c5"),s=n("6325"),d=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);"function"===typeof s["a"]&&Object(s["a"])(d),e["default"]=d.exports},a8bc:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={vanIcon:n("4e12").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-shadow-root",{staticClass:"vant-nav-bar-index"},[t.fixed&&t.placeholder?n("v-uni-view",{style:"height: "+t.height+"px;"}):t._e(),n("v-uni-view",{class:t.utils.bem("nav-bar",{fixed:t.fixed})+" custom-class "+(t.border?"van-hairline--bottom":""),style:t.baseStyle+"; "+t.customStyle},[n("v-uni-view",{staticClass:"van-nav-bar__content"},[n("v-uni-view",{staticClass:"van-nav-bar__left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftArrow||t.leftText?[t.leftArrow?n("van-icon",{attrs:{size:"16px",name:"arrow-left","custom-class":"van-nav-bar__arrow"}}):t._e(),t.leftText?n("v-uni-view",{staticClass:"van-nav-bar__text",attrs:{"hover-class":"van-nav-bar__text--hover","hover-stay-time":"70"}},[t._v(t._s(t.leftText))]):t._e()]:t._t("left")],2),n("v-uni-view",{staticClass:"van-nav-bar__title title-class van-ellipsis"},[t.title?[t._v(t._s(t.title))]:t._t("title")],2),n("v-uni-view",{staticClass:"van-nav-bar__right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightText?n("v-uni-view",{staticClass:"van-nav-bar__text",attrs:{"hover-class":"van-nav-bar__text--hover","hover-stay-time":"70"}},[t._v(t._s(t.rightText))]):t._t("right")],2)],1)],1)],1)},r=[]},ac7b:function(t,e,n){"use strict";n.r(e);var a=n("d195"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},ae0c:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-multi-ellipsis--l2{-webkit-line-clamp:2}.van-multi-ellipsis--l2,.van-multi-ellipsis--l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.van-multi-ellipsis--l3{-webkit-line-clamp:3}.van-clearfix:after{display:table;clear:both;content:""}.van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom{position:relative}.van-hairline--bottom:after,.van-hairline--left:after,.van-hairline--right:after,.van-hairline--surround:after,.van-hairline--top-bottom:after,.van-hairline--top:after,.van-hairline:after{position:absolute;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #eee;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline--top:after{border-top-width:1px}.van-hairline--left:after{border-left-width:1px}.van-hairline--right:after{border-right-width:1px}.van-hairline--bottom:after{border-bottom-width:1px}.van-hairline--top-bottom:after{border-width:1px 0}.van-hairline--surround:after{border-width:1px}.vant-loading-index{font-size:0;line-height:1}.van-loading{display:-webkit-inline-flex;display:inline-flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;color:#c8c9cc;color:var(--loading-spinner-color,#c8c9cc)}.van-loading__spinner{position:relative;box-sizing:border-box;width:30px;width:var(--loading-spinner-size,30px);max-width:100%;max-height:100%;height:30px;height:var(--loading-spinner-size,30px);-webkit-animation:van-rotate .8s linear infinite;animation:van-rotate .8s linear infinite;-webkit-animation:van-rotate var(--loading-spinner-animation-duration,.8s) linear infinite;animation:van-rotate var(--loading-spinner-animation-duration,.8s) linear infinite}.van-loading__spinner--spinner{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.van-loading__spinner--circular{border:1px solid transparent;border-top-color:initial;border-radius:100%}.van-loading__text{margin-left:8px;margin-left:var(--padding-xs,8px);color:#969799;color:var(--loading-text-color,#969799);font-size:14px;font-size:var(--loading-text-font-size,14px);line-height:20px;line-height:var(--loading-text-line-height,20px)}.van-loading__text:empty{display:none}.van-loading--vertical{-webkit-flex-direction:column;flex-direction:column}.van-loading--vertical .van-loading__text{margin:8px 0 0;margin:var(--padding-xs,8px) 0 0}.van-loading__dot{position:absolute;top:0;left:0;width:100%;height:100%}.van-loading__dot:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.van-loading__dot:first-of-type{-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.van-loading__dot:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.van-loading__dot:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.van-loading__dot:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.van-loading__dot:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.van-loading__dot:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.van-loading__dot:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.van-loading__dot:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.van-loading__dot:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.van-loading__dot:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.van-loading__dot:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.van-loading__dot:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes van-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes van-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},c00e:function(t,e,n){"use strict";n.r(e);var a=n("ce41"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},c249:function(t,e,n){"use strict";n.r(e);var a=n("7aeb"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},ce41:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r=a(n("09ce")),o=n("26cb"),l={name:"sort",data:function(){return{list:[],query:{}}},computed:(0,i.default)({},(0,o.mapGetters)(["themeStyle"])),methods:{getArticleList:function(){var t=this,e={id:this.query.id};r.default.getArticleList(e).then((function(e){t.list=e.data}))}},onLoad:function(t){this.query=t,this.getArticleList()}};e.default=l},d195:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"vHeader",props:{title:{default:"",type:String,required:!1},leftArrow:{default:!0,type:Boolean,required:!1},leftClick:{default:void 0,type:Function,required:!1},border:{default:!0,type:Boolean,required:!1}},methods:{onClickLeft:function(){this.leftClick?this.leftClick():this.$back()}}};e.default=a},d3f6:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.list .item[data-v-261ffa04]{width:165px;box-sizing:border-box}.list .item .image[data-v-261ffa04]{height:120px;display:block;width:100%}',""]),t.exports=e},db00:function(t,e,n){"use strict";n.r(e);var a=n("df06"),i=n("c00e");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("7e8c");var o,l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"261ffa04",null,!1,a["a"],o);e["default"]=s.exports},df06:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={vHeader:n("8785").default,vLink:n("2599").default,vanImage:n("519a").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-page",style:t.themeStyle},[n("v-header",{attrs:{title:t.query.title||t.$t("help.a2")}}),n("div",{staticClass:"layout-mian"},[n("div",{staticClass:"list d-flex flex-wrap justify-between p-md"},t._l(t.list,(function(e){return n("v-link",{key:e.id,staticClass:"item p-xs bg-panel-4 rounded m-b-md box-shadow",attrs:{tag:"div",to:{path:"/pages/help/detail",query:{id:e.id}}}},[n("van-image",{staticClass:"image",attrs:{fit:"cover",src:e.full_cover}}),n("div",{staticClass:"eps-2 m-t-xs"},[t._v(t._s(e.title))])],1)})),1)])],1)},r=[]},e6ea:function(t,e,n){"use strict";var a=n("7591"),i=n.n(a);i.a},eaef:function(t,e,n){"use strict";(function(t,a){var i=n("4ea4");n("99af"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("4e12")),o=n("d6f7"),l=n("768f");t["__wxVueOptions"]={components:{"van-icon":r.default}},t["__wxRoute"]="vant/nav-bar/index",(0,o.VantComponent)({classes:["title-class"],props:{title:String,fixed:{type:Boolean,observer:"setHeight"},placeholder:{type:Boolean,observer:"setHeight"},leftText:String,rightText:String,customStyle:String,leftArrow:Boolean,border:{type:Boolean,value:!0},zIndex:{type:Number,value:1},safeAreaInsetTop:{type:Boolean,value:!0}},data:{statusBarHeight:0,height:44,baseStyle:""},created:function(){var t=(0,l.getSystemInfoSync)(),e=t.statusBarHeight,n=this.data,a=n.safeAreaInsetTop,i=n.zIndex,r=a?e:0,o="z-index: ".concat(i,";padding-top: ").concat(r,"px;");this.setData({statusBarHeight:e,height:44+e,baseStyle:o})},mounted:function(){this.setHeight()},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")},setHeight:function(){var t=this;this.data.fixed&&this.data.placeholder&&a((function(){t.getRect(".van-nav-bar").then((function(e){t.setData({height:e.height})}))}))}}});var s=t["__wxComponents"]["vant/nav-bar/index"];e.default=s}).call(this,n("c8ba"),n("fe07")["nextTick"])},f50b:function(t,e,n){"use strict";var a=n("5a4d"),i=n.n(a);i.a},f7f1:function(t,e,n){var a=n("82f1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("0b9ddfa6",a,!0,{sourceMap:!1,shadowMode:!1})}}]);