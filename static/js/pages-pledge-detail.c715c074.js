(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pledge-detail"],{"0320":function(t,a,e){"use strict";e.r(a);var n=e("305a"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"0c51":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={vPage:e("8157").default,vHeader:e("8785").default,vLink:e("2599").default,vanIcon:e("4e12").default,uniPopup:e("ef91").default,vanToast:e("c64a").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-page",{staticClass:"pledgeRonqi"},[e("v-header",{attrs:{border:!1,title:t.$t("pledge.introduce"),leftClick:function(){return t._router.replace("/pages/pledge/index")}},scopedSlots:t._u([{key:"right",fn:function(){return[e("v-link",{attrs:{to:{path:"/pages/pledge/order"}}},[e("van-icon",{staticClass:"fn-20 pld-mt",attrs:{name:"orders-o"}})],1)]},proxy:!0}])}),e("v-uni-view",{staticClass:"pledgeDetailMain"},[e("v-uni-view",{staticClass:"pledgeMain"},[e("v-uni-view",{staticClass:"lunbo"},[e("img",{attrs:{width:"100%",height:"100%",fit:"cover",src:t.pledge.spread_img}})])],1),e("v-uni-view",{staticClass:"pledgeIntroduce"},[e("v-uni-view",{staticClass:"pledgeDetailTitle"},[e("v-uni-view",{staticClass:"pledgeTitleLine"}),e("v-uni-view",{staticClass:"pledgeTitleFont"},[t._v(t._s(t.$t("pledge.introduce")))])],1),e("v-uni-view",{staticClass:"pledgeDetailContent"},[t._v(t._s(t.pledge.content))])],1),e("v-uni-view",{staticClass:"pledgeDetailForm"},[e("v-uni-view",{staticClass:"pledgeDetailList"},[e("v-uni-text",{staticClass:"detailTextLeft"},[t._v(t._s(t.$t("pledge.bzkyzc")))]),e("v-uni-text",{staticClass:"detailTextRight"},[t._v(t._s(t.pledge.coin_num)+" "+t._s(t.pledge.coin_name))])],1),e("v-uni-view",{staticClass:"pledgeDetailList"},[e("v-uni-text",{staticClass:"detailTextLeft"},[t._v(t._s(t.$t("pledge.cycle")))]),e("v-uni-text",{staticClass:"detailTextRight"},[t._v(t._s(t.pledge.cycle)+" "+t._s(t.$t("exchange.f0")))])],1),e("v-uni-view",{staticClass:"pledgeDetailList"},[e("v-uni-text",{staticClass:"detailTextLeft"},[t._v(t._s(t.$t("pledge.rate")))]),e("v-uni-text",{staticClass:"detailTextRight"},[t._v(t._s(t.pledge.rate)+"%")])],1),e("v-uni-view",{staticClass:"pledgeDetailList"},[e("v-uni-text",{staticClass:"detailTextLeft"},[t._v(t._s(t.$t("pledge.zynum")))]),e("v-uni-view",{staticClass:"detailTextRight detailInput"},[e("v-uni-input",{staticClass:"pledgeZynum",attrs:{type:"text",placeholder:t.$t("pledge.zdyxt"),"placeholder-style":"text-align:right;"},model:{value:t.form.num,callback:function(a){t.$set(t.form,"num",a)},expression:"form.num"}})],1)],1),e("v-uni-view",{staticClass:"pledgeDetailList"},[e("v-uni-text",{staticClass:"detailTextLeft"},[t._v(t._s(t.$t("pledge.maxnum"))+"："+t._s(this.maxnum)+"，"+t._s(t.$t("pledge.minnum"))+"："+t._s(this.minnum))])],1)],1)],1),e("v-uni-view",{staticClass:"pledgeDetailFooter"},[e("v-uni-view",{staticClass:"van-button__text"},[e("v-uni-button",{ref:"btn",staticClass:"pledgeLjzy",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.openPopup.apply(void 0,arguments)}}},[t._v(t._s(t.$t("pledge.ljzy")))])],1),e("uni-popup",{ref:"popup",attrs:{type:"bottom",animation:!0,isMaskClick:!1}},[e("v-uni-view",{staticClass:"x-popup"},[e("v-uni-text",{staticClass:"x-popup__title"},[t._v(t._s(t.$t("pledge.a1")))]),e("v-uni-view",{staticClass:"x-form"},[e("v-uni-view",{staticClass:"x-form__item"},[e("v-uni-text",{staticClass:"x-form--label"},[t._v(t._s(t.$t("pledge.a2")))]),e("v-uni-view",{staticClass:"x-form__item-container"},[e("v-uni-input",{staticClass:"x-form--input",attrs:{type:"number"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.setData()}},model:{value:t.form.num,callback:function(a){t.$set(t.form,"num",a)},expression:"form.num"}}),e("v-uni-text",{staticClass:"x-form__append"},[t._v("USDT")])],1),e("v-uni-text",{staticClass:"x-form--tips"},[t._v("≈ "+t._s(t.tusdt_num)+" USDT + "+t._s(t.taxn_num)+" "+t._s(t.two_coin_name))])],1)],1),e("v-uni-view",{staticClass:"x-popup__tips"},[e("v-uni-text",[t._v(t._s(t.$t("pledge.a3"))+"：1 USDT ≈ "+t._s((1/t.quotation).toFixed(4))+" "+t._s(t.two_coin_name))]),e("v-uni-text",[t._v(t._s(t.$t("pledge.a4"))+t._s(100-t.proportion)+"%USDT + "+t._s(t.proportion)+"% "+t._s(t.two_coin_name)+"，"+t._s(t.$t("pledge.a5")))])],1),e("v-uni-view",{staticClass:"x-popup__btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.pledgeCreateOrder.apply(void 0,arguments)}}},[t._v(t._s(t.$t("pledge.a6")))])],1)],1)],1),e("van-toast",{attrs:{id:"van-toast"}})],1)},o=[]},"0f89":function(t,a,e){"use strict";var n=e("4ea4");e("4160"),e("a9e3"),e("ac1f"),e("5319"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("5530")),o={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,i.default)((0,i.default)({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),a="";for(var e in t){var n=this.toLine(e);a+=n+":"+t[e]+";"}return a}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var a in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===a?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[a]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var a=this,e=this.getTranfrom(t);for(var n in this.transform="",e)"opacity"===n?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(e[n]," ");this.timer=setTimeout((function(){t||(a.isShow=!1),a.$emit("change",{detail:a.isShow})}),this.duration)},getTranfrom:function(t){var a={transform:""};return this.modeClass.forEach((function(e){switch(e){case"fade":a.opacity=t?1:0;break;case"slide-top":a.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":a.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":a.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":a.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":a.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":a.transform+="scale(".concat(t?1:1.2,") ");break}})),a},_modeClassArr:function(t){var a=this.modeClass;if("string"!==typeof a){var e="";return a.forEach((function(a){e+=a+"-"+t+","})),e.substr(0,e.length-1)}return a+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};a.default=o},"11e1":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".uni-transition[data-v-23f6d7f4]{transition-timing-function:ease;transition-duration:.3s;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-23f6d7f4]{opacity:0}.fade-active[data-v-23f6d7f4]{opacity:1}.slide-top-in[data-v-23f6d7f4]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-23f6d7f4]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-23f6d7f4]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-23f6d7f4]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-23f6d7f4]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-23f6d7f4]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-23f6d7f4]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-23f6d7f4]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-23f6d7f4]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-23f6d7f4]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-23f6d7f4]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""]),t.exports=a},"305a":function(t,a,e){"use strict";var n=e("4ea4");e("ac1f"),e("5319"),e("1276"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("7beb")),o=n(e("42f5")),s={data:function(){return{pledge:{},app:o.default,taskHeight:0,pledgenum:0,minnum:0,maxnum:0,form:{id:"",num:""},tusdt_num:0,taxn_num:0,quotation:0,proportion:0,two_coin_name:""}},methods:{openPopup:function(){if(""!=this.form.num&&0!=this.form.num){this.$refs.popup.open("bottom");var t=this.getParam();this.getquotation(t)}else this.$toast(this.$t("pledge.qtxhlfwndsz"))},tapSubmit:function(){this.$refs.popup.close()},getDetail:function(t){var a=this,e=i.default.getDetail({id:t});e.then((function(t){console.log(t),a.pledge=t.data,a.minnum=t.data.min_amount,a.maxnum=t.data.max_amount})).catch((function(){}))},setData:function(){var t=this.proportion;this.tusdt_num=this.form.num*((100-t)/100),this.taxn_num=this.form.num*(t/100)/this.quotation,this.tusdt_num=this.tusdt_num.toFixed(2),this.taxn_num=this.taxn_num.toFixed(4)},getquotation:function(t){var a=this,e=i.default.getquotation({id:t});e.then((function(t){var e=t.data.proportion;console.log(t),a.quotation=t.data.price,a.proportion=e,a.tusdt_num=a.form.num*((100-e)/100),a.taxn_num=a.form.num*(e/100)/a.quotation,a.tusdt_num=a.tusdt_num.toFixed(2),a.taxn_num=a.taxn_num.toFixed(4),a.two_coin_name=t.data.two_coin_name})).catch((function(){}))},getParam:function(){var t=window.location.href,a=t.split("?id=")[1],e=a.split("&")[0];return e},pledgeCreateOrder:function(){var t=this;this.$refs.popup.close(),this.form.id=this.getParam();var a=/^[+-]?(0|([1-9]\d*))(\.\d+)?$/g,e=this.form.num;if(a.test(e))if(e>this.maxnum||e<this.mixnum)this.$toast(this.$t("pledge.qtxhlfwndsz"));else{var n=this.form,o=i.default.buygoods(n,{btn:this.$refs.btn});o.then((function(a){t.$dialog.confirm({title:t.$t("option.c1"),message:t.$t("pledge.goorder"),cancel:!0,cancelButtonText:t.$t("common.cancelButtonText"),confirmButtonText:t.$t("common.confirmButtonText")}).then((function(){t._router.replace("/pages/pledge/order")})).catch((function(){t.query.from?t.$back():t._router.replace("/pages/pledge/order")}))})).catch((function(){}))}else{var s=this.$t("common.enter")+this.$t("common.money");this.$toast(s)}},jumpBack:function(){this.$router.push({path:"/pages/pledge/index"})}},onLoad:function(){var t=this.getParam();this.getDetail(t)},destroyed:function(){}};a.default=s},"36a1":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.isShow?e("v-uni-view",{ref:"ani",staticClass:"uni-transition",class:[t.ani.in],style:"transform:"+t.transform+";"+t.stylesObject,on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.change.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},o=[]},"40d8":function(t,a,e){var n=e("f15a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("04cc2da0",n,!0,{sourceMap:!1,shadowMode:!1})},"52f5":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={uniTransition:e("ac48").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.showPopup?e("v-uni-view",{staticClass:"uni-popup",class:[t.popupstyle],on:{touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.clear.apply(void 0,arguments)}}},[t.maskShow?e("uni-transition",{attrs:{"mode-class":["fade"],styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onTap.apply(void 0,arguments)}}}):t._e(),e("uni-transition",{attrs:{"mode-class":t.ani,styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onTap.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},o=[]},"568f":function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("81e5")),o={top:"top",bottom:"bottom",center:"center",message:"top",dialog:"center",share:"bottom"},s={data:function(){return{config:o}},mixins:[i.default]};a.default=s},"721e":function(t,a,e){"use strict";var n=e("40d8"),i=e.n(n);i.a},"75a5":function(t,a,e){var n=e("11e1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("c844f44e",n,!0,{sourceMap:!1,shadowMode:!1})},"81e5":function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,o=n(e("ade3")),s=(i={created:function(){"message"===this.type&&(this.maskShow=!1,this.children=null)}},(0,o.default)(i,"created",(function(){"message"===this.type&&(this.maskShow=!1,this.childrenMsg=null)})),(0,o.default)(i,"methods",{customOpen:function(){this.childrenMsg&&this.childrenMsg.open()},customClose:function(){this.childrenMsg&&this.childrenMsg.close()}}),i);a.default=s},"854c":function(t,a,e){"use strict";var n=e("75a5"),i=e.n(n);i.a},"993b":function(t,a,e){"use strict";e.r(a);var n=e("0f89"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},ac48:function(t,a,e){"use strict";e.r(a);var n=e("36a1"),i=e("993b");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("854c");var s,r=e("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"23f6d7f4",null,!1,n["a"],s);a["default"]=u.exports},aca1:function(t,a,e){var n=e("f0d4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("3aac3996",n,!0,{sourceMap:!1,shadowMode:!1})},b8be:function(t,a,e){"use strict";var n=e("aca1"),i=e.n(n);i.a},c450:function(t,a,e){"use strict";var n=e("4ea4");e("d3b7"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("ac48")),o=n(e("568f")),s={name:"UniPopup",components:{uniTransition:i.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},provide:function(){return{popup:this}},mixins:[o.default],watch:{type:{handler:function(t){this[this.config[t]]()},immediate:!0},maskClick:function(t){this.mkclick=t}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:"top"}},created:function(){this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){new Promise((function(a){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0,t.$nextTick((function(){a()}))}),50)})).then((function(a){clearTimeout(t.msgtimer),t.msgtimer=setTimeout((function(){t.customOpen&&t.customOpen()}),100),t.$emit("change",{show:!0,type:t.type})}))}))},close:function(t){var a=this;this.showTrans=!1,this.$nextTick((function(){a.$emit("change",{show:!1,type:a.type}),clearTimeout(a.timer),a.customOpen&&a.customClose(),a.timer=setTimeout((function(){a.showPopup=!1}),300)}))},onTap:function(){this.mkclick&&this.close()},top:function(){this.popupstyle="top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0}},bottom:function(){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0}},center:function(){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"}}}};a.default=s},cfd9:function(t,a,e){"use strict";e.r(a);var n=e("0c51"),i=e("0320");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("721e");var s,r=e("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"348ab213",null,!1,n["a"],s);a["default"]=u.exports},eb52:function(t,a,e){"use strict";e.r(a);var n=e("c450"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},ef91:function(t,a,e){"use strict";e.r(a);var n=e("52f5"),i=e("eb52");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("b8be");var s,r=e("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"2883af29",null,!1,n["a"],s);a["default"]=u.exports},f0d4:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".uni-popup[data-v-2883af29]{position:fixed;\nz-index:99\n}.uni-popup__mask[data-v-2883af29]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-2883af29]{transition-property:opacity;transition-duration:.2s}.uni-top-mask[data-v-2883af29]{opacity:1}.uni-bottom-mask[data-v-2883af29]{opacity:1}.uni-center-mask[data-v-2883af29]{opacity:1}.uni-popup__wrapper[data-v-2883af29]{\ndisplay:block;\nposition:absolute}.top[data-v-2883af29]{\ntop:var(--window-top);\n}.bottom[data-v-2883af29]{bottom:0}.uni-popup__wrapper-box[data-v-2883af29]{\ndisplay:block;\nposition:relative;\n\t\t/* iphonex 等安全区设置，底部安全区适配 */\npadding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)\n}.content-ani[data-v-2883af29]{\n\t\t/* transition: transform 0.3s;\n */transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;transition-duration:.2s}.uni-top-content[data-v-2883af29]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-2883af29]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-2883af29]{-webkit-transform:scale(1);transform:scale(1);opacity:1}",""]),t.exports=a},f15a:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.x-popup[data-v-348ab213]{background-color:#fff;padding:%?34?%;color:#333}.x-popup .x-popup__title[data-v-348ab213]{font-size:%?34?%}.x-popup .x-form .x-form__item .x-form--label[data-v-348ab213]{text-align:left;display:block;margin-bottom:%?8?%}.x-popup .x-form .x-form__item .x-form__item-container[data-v-348ab213]{position:relative;display:block}.x-popup .x-form .x-form__item .x-form__item-container .x-form--input[data-v-348ab213]{background-color:hsla(0,0%,64.7%,.2);height:%?80?%;border-radius:%?20?%;padding-right:%?130?%;padding-left:%?20?%}.x-popup .x-form .x-form__item .x-form__item-container .x-form__append[data-v-348ab213]{position:absolute;top:50%;right:%?20?%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.x-popup .x-form .x-form__item .x-form--tips[data-v-348ab213]{display:block;text-align:left;margin-top:%?8?%}.x-popup .x-popup__tips[data-v-348ab213]{background-color:hsla(0,0%,64.7%,.2);padding:%?32?% %?16?%;margin-top:%?16?%;text-indent:1em;margin-bottom:%?36?%}.x-popup .x-popup__tips uni-text[data-v-348ab213]{display:block;text-align:left}.x-popup .x-popup__btn[data-v-348ab213]{background-image:linear-gradient(135deg,#ff7c6e,#f7427b);height:%?80?%;line-height:%?80?%;color:#fff;border-radius:%?20?%}.lunbo[data-v-348ab213]{margin:%?30?%;height:%?300?%}.pledgeDetailMain[data-v-348ab213]{height:%?1100?%;overflow:auto}.pledgeTitleLine[data-v-348ab213]{width:%?11?%;height:%?40?%;background:#ffc119}.pledgeTitleFont[data-v-348ab213]{font-size:%?36?%;margin-left:%?15?%;position:relative;top:%?-8?%}.pledgeDetailTitle[data-v-348ab213]{display:flex;flex-direction:row;padding:%?30?% %?30?% 0}.pledgeDetailContent[data-v-348ab213]{padding:%?15?% %?30?% %?0?% %?30?%;max-height:%?276?%;overflow:auto}.detailTextRight[data-v-348ab213]{position:absolute;right:0}uni-input[data-v-348ab213]::-ms-input-placeholder{text-align:right}uni-input[data-v-348ab213]::-webkit-input-placeholder{text-align:right}.detailInput[data-v-348ab213]{top:%?20?%;width:%?250?%}.pledgeZynum[data-v-348ab213]{text-align:right}.pledgeDetailFooter[data-v-348ab213]{width:%?750?%;text-align:center;position:fixed;width:%?690?%;bottom:%?30?%;z-index:100;margin:0 %?30?%}.pledgeLjzy[data-v-348ab213]{background-color:#ffc119}.pld-mt[data-v-348ab213]{margin-top:%?30?%}',""]),t.exports=a}}]);