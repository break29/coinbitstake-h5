(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-otc-bill"],{4693:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-3f3d0114] .van-tabs__wrap{background-color:var(--panel-4,#484859)}',""]),t.exports=e},"6e0b":function(t,e,n){"use strict";n.r(e);var a=n("ad8b"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},9035:function(t,e,n){var a=n("4693");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("624451b2",a,!0,{sourceMap:!1,shadowMode:!1})},a4e2:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={vPage:n("4bbb").default,vHeader:n("9540").default,vButton:n("97cf").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-page",{staticClass:"layout-page"},[n("v-header",{attrs:{title:t.$t("otc.d5")}}),n("v-uni-view",{staticClass:"layout-main",attrs:{ajax:t.accountFlow,data:t.query}},t._l(t.$list(t.list),(function(e){return n("v-uni-view",{key:e.created_at+e.id,staticClass:"item bg-panel-4 m-x-md m-y-xs rounded-sm box-shadow"},[n("v-uni-view",{staticClass:"head d-flex align-center border-b p-x-md p-y-xs justify-between"},[n("v-uni-view",{staticClass:"d-flex justify-between"},[n("v-uni-view",[n("v-uni-view",{staticClass:"color-light fn-lg"},[t._v(t._s(e.coin_name))])],1)],1),n("v-uni-view",{staticClass:"fn-md color-buy"},[t._v(t._s(e.usable_balance))])],1),n("v-uni-view",{staticClass:"d-flex justify-between p-x-md"},[n("v-uni-view",[t._v(t._s(t.$t("otc.d6")))]),n("v-uni-view",{staticClass:"color-sell"},[t._v(t._s(e.freeze_balance))])],1),n("v-uni-view",{staticClass:"p-x-md p-y-xs color-light d-flex justify-between"},[n("v-uni-view",[t._v(t._s(e.created_at))]),n("v-button",{staticClass:"rounded-xs",attrs:{type:"green",size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getCoin(e)}}},[t._v(t._s(t.$t("otc.a5")))])],1)],1)})),1)],1)},r=[]},ad8b:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("ac4c")),r=a(n("f0a2")),u={data:function(){return{active:1,detail:{},accountFlow:i.default.otcAccount,query:{},list:[]}},computed:{},onLoad:function(t){this.query=t,this.otcAccount()},methods:{parseTime:r.default.parseTime,otcAccount:function(){var t=this;i.default.otcAccount().then((function(e){t.list=e.data}))},getCoin:function(t){this._router.push({path:"/pages/base/index",query:{tel:"otc"}})}}};e.default=u},c0b6:function(t,e,n){"use strict";n.r(e);var a=n("a4e2"),i=n("6e0b");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("eb35");var u,s=n("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"3f3d0114",null,!1,a["a"],u);e["default"]=o.exports},eb35:function(t,e,n){"use strict";var a=n("9035"),i=n.n(a);i.a},f0a2:function(t,e,n){"use strict";function a(t){var e=new Date(t),n=e.getTimezoneOffset();return t+60*n*1e3}function i(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.constructor==Date?e=t:(t.toString().length<=10&&(t=1e3*Number(t)),n&&(t=a(t)),e=new Date(t)),e}function r(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=n||"{y}-{m}-{d} {h}:{i}:{s}",r=i(t,e),u={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()};u.a="星期"+["日","一","二","三","四","五","六"][u.a];var s=a.replace(/{(y|m|d|h|i|s|a)+}/g,(function(t,e){var n=u[e];return t.length>0&&n<10&&(n="0"+n),n||0}));return s}function u(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,u=i(t,e),s=e?a(Date.now()):Date.now(),o=(s-u.valueOf())/1e3;return o<30?"刚刚":o<3600?Math.ceil(o/60)+"分钟前":o<86400?Math.ceil(o/3600)+"小时前":o<172800?"1天前":(n||(n="{y}年{m}月{d}日 {h}:{i}"),r(t,e,n))}n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,Object.assign(Date,{time2Date:i,parseTime:r,pubTime:u});var s={time2Date:i,parseTime:r,pubTime:u};e.default=s}}]);