(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-auth-primary"],{"051d":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"d-flex align-center"},[t._t("left"),n("v-uni-input",t._b({staticClass:"flex-fill",on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.input.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("blur",e)}}},"v-uni-input",Object.assign({},t.$props),!1)),t._t("right")],2)},i=[]},"0911":function(t,e,n){"use strict";n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"v-button",props:{type:{default:"",require:!1,type:String},size:{default:"normal",require:!1,type:String},text:{default:void 0,require:!1,type:String},color:{default:void 0,require:!1,type:String},icon:{default:"",require:!1,type:String},iconPrefix:{default:"",require:!1,type:String},block:{default:!1,require:!1,type:Boolean},plain:{default:!1,require:!1,type:Boolean},square:{default:!1,require:!1,type:Boolean},round:{default:!1,require:!1,type:Boolean},disabled:{default:!1,require:!1,type:Boolean},hairline:{default:!1,require:!1,type:Boolean},loading:{default:!1,require:!1,type:Boolean},loadingText:{default:"loading...",require:!1,type:String},loadingType:{default:"circular",require:!1,type:String},loadingSize:{default:"14px",require:!1,type:String},url:{default:"",require:!1,type:String},to:{default:"",require:!1,type:String|Object},replace:{default:!1,require:!1,type:Boolean}},data:function(){return{dLoading:this.loading,dDisabled:this.disabled}},methods:{toNext:function(){this.to&&(this.replace?this._router.replace(this.to):this._router.push(this.to))}},watch:{loading:function(t){this.dLoading=t},disabled:function(t){this.dDisabled=t}}};e.default=a},1009:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={vPage:n("8157").default,vHeader:n("8785").default,vPicker:n("75d9").default,vInput:n("e292").default,vanIcon:n("4e12").default,vButton:n("4a64").default,vanToast:n("c64a").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-page",[n("v-header",{attrs:{title:t.$t("auth.a1")}}),n("main",{staticClass:" m-lg  bg-panel-3 rounded-md p-x-md box-shadow"},[n("v-uni-view",{staticClass:"form-item border-b p-md m-b-md"},[n("v-uni-view",{staticClass:"label m-b-xs"},[t._v(t._s(t.$t("auth.a7")))]),n("v-uni-view",{staticClass:"input color-light"},[n("v-picker",{attrs:{value:t.form.country_id,list:t.countryList,"range-value":"id","range-label":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.selectCountry.apply(void 0,arguments)}}},[n("v-input",{attrs:{disabled:!0,value:t.activeCountry.name,placeholder:t.$t("auth.a8")},scopedSlots:t._u([{key:"right",fn:function(){return[n("van-icon",{staticClass:"color-default",attrs:{name:"arrow"}})]},proxy:!0}])})],1)],1)],1),n("v-uni-view",{staticClass:"form-item border-b p-md m-b-md"},[n("v-uni-view",{staticClass:"label m-b-xs"},[t._v(t._s(t.$t("auth.a9")))]),n("v-uni-view",{staticClass:"input color-light"},[n("v-input",{attrs:{placeholder:t.$t("auth.b0")},model:{value:t.form.realname,callback:function(e){t.$set(t.form,"realname",e)},expression:"form.realname"}})],1)],1),n("v-uni-view",{staticClass:"form-item border-b p-md m-b-md"},[n("v-uni-view",{staticClass:"label m-b-xs"},[t._v(t._s(t.$t("auth.b1")))]),n("v-uni-view",{staticClass:"input color-light"},[n("v-input",{attrs:{placeholder:t.$t("auth.b2")},model:{value:t.form.id_card,callback:function(e){t.$set(t.form,"id_card",e)},expression:"form.id_card"}})],1)],1),n("v-uni-view",{staticClass:"p-md "},[n("v-button",{ref:"btn",staticClass:"w-max rounded-md",attrs:{block:!0,type:"blue"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.primaryAuth.apply(void 0,arguments)}}},[t._v(t._s(t.$t("auth.b3")))])],1)],1),n("van-toast",{attrs:{id:"van-toast"}})],1)},i=[]},"123f":function(t,e,n){"use strict";n.r(e);var a=n("eaef"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"150c":function(t,e,n){"use strict";n.r(e);var a=n("e50a"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"18ec":function(t,e,n){"use strict";n.r(e);var a=n("1009"),r=n("21b4");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,u=n("f0c5"),l=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"6c35aec7",null,!1,a["a"],o);e["default"]=l.exports},"1d2a":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={vanNavBar:n("37af").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-nav-bar",{attrs:{border:t.border,title:t.title,"left-arrow":t.leftArrow},on:{"click-left":function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}},scopedSlots:t._u([{key:"left",fn:function(){return[t._t("left")]},proxy:!0},{key:"title",fn:function(){return[t._t("title")]},proxy:!0},{key:"right",fn:function(){return[t._t("right")]},proxy:!0}],null,!0)})},i=[]},"21b4":function(t,e,n){"use strict";n.r(e);var a=n("e4a2"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"305b":function(t,e,n){var a=n("cd56");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("5cc0293a",a,!0,{sourceMap:!1,shadowMode:!1})},"37af":function(t,e,n){"use strict";n.r(e);var a=n("a8bc"),r=n("123f");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("f50b");var o,u=n("f0c5"),l=n("777b"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);"function"===typeof l["a"]&&Object(l["a"])(c),e["default"]=c.exports},"3c46":function(t,e,n){"use strict";var a=n("918c"),r=n.n(a);r.a},"4a64":function(t,e,n){"use strict";n.r(e);var a=n("c711"),r=n("605e");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("3c46");var o,u=n("f0c5"),l=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"f233558a",null,!1,a["a"],o);e["default"]=l.exports},"4e83":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={vanToast:n("c64a").default,vanDialog:n("ea5e").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"layout-page",style:t.themeStyle},[t._t("default"),n("van-toast",{attrs:{id:"van-toast"}}),n("van-dialog",{attrs:{id:"van-dialog"}})],2)},i=[]},"5a4d":function(t,e,n){var a=n("6e17");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("6a1b1134",a,!0,{sourceMap:!1,shadowMode:!1})},"605e":function(t,e,n){"use strict";n.r(e);var a=n("0911"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"6e17":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-multi-ellipsis--l2{-webkit-line-clamp:2}.van-multi-ellipsis--l2,.van-multi-ellipsis--l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.van-multi-ellipsis--l3{-webkit-line-clamp:3}.van-clearfix:after{display:table;clear:both;content:""}.van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom{position:relative}.van-hairline--bottom:after,.van-hairline--left:after,.van-hairline--right:after,.van-hairline--surround:after,.van-hairline--top-bottom:after,.van-hairline--top:after,.van-hairline:after{position:absolute;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #eee;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline--top:after{border-top-width:1px}.van-hairline--left:after{border-left-width:1px}.van-hairline--right:after{border-right-width:1px}.van-hairline--bottom:after{border-bottom-width:1px}.van-hairline--top-bottom:after{border-width:1px 0}.van-hairline--surround:after{border-width:1px}.van-nav-bar{text-align:center;-webkit-user-select:none;user-select:none;height:44px;height:var(--nav-bar-height,44px);line-height:44px;line-height:var(--nav-bar-height,44px);background-color:#fff;background-color:var(--nav-bar-background-color,#fff)}.van-nav-bar,.van-nav-bar__content{position:relative}.van-nav-bar__text{display:inline-block;vertical-align:middle;margin:0 -16px;margin:0 -var(--padding-md,16px);padding:0 16px;padding:0 var(--padding-md,16px);color:#1989fa;color:var(--nav-bar-text-color,#1989fa)}.van-nav-bar__text--hover{background-color:#f2f3f5;background-color:var(--active-color,#f2f3f5)}.van-nav-bar__arrow{vertical-align:middle;font-size:16px;font-size:var(--nav-bar-arrow-size,16px);color:#1989fa;color:var(--nav-bar-text-color,#1989fa)}.van-nav-bar__arrow+.van-nav-bar__text{margin-left:-20px;padding-left:25px}.van-nav-bar--fixed{position:fixed;top:0;left:0;width:100%}.van-nav-bar__title{max-width:60%;margin:0 auto;color:#323233;color:var(--nav-bar-title-text-color,#323233);font-weight:500;font-weight:var(--font-weight-bold,500);font-size:16px;font-size:var(--nav-bar-title-font-size,16px)}.van-nav-bar__left,.van-nav-bar__right{position:absolute;top:0;bottom:0;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:14px;font-size:var(--font-size-md,14px)}.van-nav-bar__left{left:16px;left:var(--padding-md,16px)}.van-nav-bar__right{right:16px;right:var(--padding-md,16px)}',""]),t.exports=e},"777b":function(t,e,n){"use strict";var a=function(t){(t.options.wxs||(t.options.wxs={}))["utils"]=function(t){var e=n("6418").bem,a=n("79e5").memoize,r=n("3fa9").addUnit;return t.exports={bem:a(e),memoize:a,addUnit:r},t.exports}({exports:{}})};e["a"]=a},8157:function(t,e,n){"use strict";n.r(e);var a=n("4e83"),r=n("150c");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,u=n("f0c5"),l=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=l.exports},8785:function(t,e,n){"use strict";n.r(e);var a=n("1d2a"),r=n("ac7b");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,u=n("f0c5"),l=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=l.exports},"8dfc":function(t,e,n){"use strict";var a=n("305b"),r=n.n(a);r.a},"918c":function(t,e,n){var a=n("d605");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("f886e4fe",a,!0,{sourceMap:!1,shadowMode:!1})},"9b3f":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("d4ec")),i=a(n("bee2")),o=a(n("1292")),u=function(){function t(){(0,r.default)(this,t)}return(0,i.default)(t,null,[{key:"getUserInfo",value:function(){return o.default.get("/user/getUserInfo")}},{key:"getAuthInfo",value:function(){return o.default.get("/user/getAuthInfo")}},{key:"primaryAuth",value:function(t){return o.default.post("/user/primaryAuth",t)}},{key:"topAuth",value:function(t){return o.default.post("/user/topAuth",t)}},{key:"getLoginLogs",value:function(t){return o.default.get("/user/getLoginLogs",t)}},{key:"generalizeInfo",value:function(){return o.default.get("/generalize/info")}},{key:"generalizeList",value:function(t){return o.default.get("/generalize/list",t)}},{key:"rewardLogs",value:function(t){return o.default.get("/generalize/rewardLogs",t)}},{key:"getGradeInfo",value:function(){return o.default.get("/user/getGradeInfo")}}]),t}(),l=u;e.default=l},a8bc:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={vanIcon:n("4e12").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-shadow-root",{staticClass:"vant-nav-bar-index"},[t.fixed&&t.placeholder?n("v-uni-view",{style:"height: "+t.height+"px;"}):t._e(),n("v-uni-view",{class:t.utils.bem("nav-bar",{fixed:t.fixed})+" custom-class "+(t.border?"van-hairline--bottom":""),style:t.baseStyle+"; "+t.customStyle},[n("v-uni-view",{staticClass:"van-nav-bar__content"},[n("v-uni-view",{staticClass:"van-nav-bar__left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftArrow||t.leftText?[t.leftArrow?n("van-icon",{attrs:{size:"16px",name:"arrow-left","custom-class":"van-nav-bar__arrow"}}):t._e(),t.leftText?n("v-uni-view",{staticClass:"van-nav-bar__text",attrs:{"hover-class":"van-nav-bar__text--hover","hover-stay-time":"70"}},[t._v(t._s(t.leftText))]):t._e()]:t._t("left")],2),n("v-uni-view",{staticClass:"van-nav-bar__title title-class van-ellipsis"},[t.title?[t._v(t._s(t.title))]:t._t("title")],2),n("v-uni-view",{staticClass:"van-nav-bar__right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightText?n("v-uni-view",{staticClass:"van-nav-bar__text",attrs:{"hover-class":"van-nav-bar__text--hover","hover-stay-time":"70"}},[t._v(t._s(t.rightText))]):t._t("right")],2)],1)],1)],1)},i=[]},a9250:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"vInput",props:{value:{defalult:"",require:!1},type:{default:"text",type:String,require:!1},placeholder:{default:"",type:String,require:!1},maxLength:{default:void 0,type:String,require:!1},minLength:{default:void 0,type:String,require:!1},disabled:{default:!1,type:Boolean,require:!1}},methods:{input:function(t){this.$emit("input",t.target.value)}}};e.default=a},ac7b:function(t,e,n){"use strict";n.r(e);var a=n("d195"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},b584:function(t,e,n){"use strict";n.r(e);var a=n("a9250"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},c711:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={vanButton:n("3ec9").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-button",t._b({class:t.type,attrs:{disabled:t.dDisabled,loading:t.dLoading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("click",e),t.toNext()}}},"van-button",Object.assign({},t.$props),!1),[t._t("default")],2)},i=[]},cd56:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-input[data-v-2b04c122]{color:inherit;font-size:inherit;text-align:inherit;width:auto;min-width:0}',""]),t.exports=e},d195:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"vHeader",props:{title:{default:"",type:String,required:!1},leftArrow:{default:!0,type:Boolean,required:!1},leftClick:{default:void 0,type:Function,required:!1},border:{default:!0,type:Boolean,required:!1}},methods:{onClickLeft:function(){this.leftClick?this.leftClick():this.$back()}}};e.default=a},d605:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.theme[data-v-f233558a]  uni-button{background:#f7427b;color:#fff;border:1px solid #f7427b}.blue[data-v-f233558a]  uni-button{background:linear-gradient(94deg,#42cbff,#015afe);color:#fff;border:none;border-radius:inherit}.green[data-v-f233558a]  uni-button{background:linear-gradient(328deg,#07c087,#07c087);color:#fff;border:none;border-radius:inherit}.green-plain[data-v-f233558a]  uni-button{background:transparent;color:#79d47c;border:1px solid #79d47c;border-radius:inherit;padding-left:2px;padding-right:2px}.red[data-v-f233558a]  uni-button{background:linear-gradient(135deg,#ff7c6e,#f7427b);color:#fff;border:none;border-radius:inherit}',""]),t.exports=e},e292:function(t,e,n){"use strict";n.r(e);var a=n("051d"),r=n("b584");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("8dfc");var o,u=n("f0c5"),l=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"2b04c122",null,!1,a["a"],o);e["default"]=l.exports},e4a2:function(t,e,n){"use strict";var a=n("4ea4");n("7db0"),n("c740"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("9b3f")),i=a(n("c7d1")),o={data:function(){return{detail:{},countryList:[],form:{id_card:"",realname:"",country_id:"",country_code:""}}},computed:{activeCountry:function(){var t=this;return this.countryList.find((function(e){return e.id==t.form.country_id}))||{}},activeIndex:function(){var t=this;return this.countryList.findIndex((function(e){return e.id==t.form.country_id}))}},methods:{getAuthInfo:function(){var t=this;r.default.getAuthInfo().then((function(e){t.detail=e.data}))},getCountryCode:function(){var t=this;i.default.getCountryCode().then((function(e){t.countryList=e.data,t.form.country_id=t.countryList[0].id})).catch((function(){}))},selectCountry:function(t){this.form.country_id=t},primaryAuth:function(){var t=this,e=this.form;e.country_code=this.activeCountry.country_code,r.default.primaryAuth(e,{btn:this.$refs.btn}).then((function(){t.$toast.success(t.$t("auth.b4")),t.$back()})).catch((function(){}))}},created:function(){this.getAuthInfo(),this.getCountryCode()}};e.default=o},e50a:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("5530")),i=n("26cb"),o={data:function(){return{pageIdx:void 0}},components:{},computed:(0,r.default)((0,r.default)({},(0,i.mapGetters)(["themeStyle"])),(0,i.mapState)({storeIdx:"pageIdx"})),methods:(0,r.default)({},(0,i.mapActions)({setPageIdx:"setPageIdx"})),created:function(){this.pageIdx=this.storeIdx,this.setPageIdx()}};e.default=o},eaef:function(t,e,n){"use strict";(function(t,a){var r=n("4ea4");n("99af"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("4e12")),o=n("d6f7"),u=n("768f");t["__wxVueOptions"]={components:{"van-icon":i.default}},t["__wxRoute"]="vant/nav-bar/index",(0,o.VantComponent)({classes:["title-class"],props:{title:String,fixed:{type:Boolean,observer:"setHeight"},placeholder:{type:Boolean,observer:"setHeight"},leftText:String,rightText:String,customStyle:String,leftArrow:Boolean,border:{type:Boolean,value:!0},zIndex:{type:Number,value:1},safeAreaInsetTop:{type:Boolean,value:!0}},data:{statusBarHeight:0,height:44,baseStyle:""},created:function(){var t=(0,u.getSystemInfoSync)(),e=t.statusBarHeight,n=this.data,a=n.safeAreaInsetTop,r=n.zIndex,i=a?e:0,o="z-index: ".concat(r,";padding-top: ").concat(i,"px;");this.setData({statusBarHeight:e,height:44+e,baseStyle:o})},mounted:function(){this.setHeight()},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")},setHeight:function(){var t=this;this.data.fixed&&this.data.placeholder&&a((function(){t.getRect(".van-nav-bar").then((function(e){t.setData({height:e.height})}))}))}}});var l=t["__wxComponents"]["vant/nav-bar/index"];e.default=l}).call(this,n("c8ba"),n("fe07")["nextTick"])},f50b:function(t,e,n){"use strict";var a=n("5a4d"),r=n.n(a);r.a}}]);