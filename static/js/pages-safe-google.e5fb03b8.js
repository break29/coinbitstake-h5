(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-safe-google"],{"0279":function(e,t,o){"use strict";o.r(t);var n=o("3e3c"),r=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"069a":function(e,t,o){var n=o("4a5d").bem,r=o("4265").memoize,a=o("3e75").addUnit;e.exports={bem:r(n),memoize:r,addUnit:a}},1524:function(e,t,o){"use strict";var n=o("41fa"),r=o.n(n);r.a},"1f46":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.v-qr[data-v-3a8bcc9c]{width:150px;height:150px;margin:0 auto;border:4px solid #fff;box-sizing:border-box}',""]),e.exports=t},2722:function(e,t,o){"use strict";var n=o("2726"),r=o.n(n);r.a},2726:function(e,t,o){var n=o("fdaa");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("4f06").default;r("e5bb3b4a",n,!0,{sourceMap:!1,shadowMode:!1})},"3a74":function(e,t,o){"use strict";o.r(t);var n=o("f4ae"),r=o("0279");for(var a in r)"default"!==a&&function(e){o.d(t,e,(function(){return r[e]}))}(a);o("2722");var i,s=o("f0c5"),l=o("3d31"),c=o("cbfb"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);"function"===typeof l["a"]&&Object(l["a"])(u),"function"===typeof c["a"]&&Object(c["a"])(u),t["default"]=u.exports},"3d31":function(e,t,o){"use strict";var n=function(e){(e.options.wxs||(e.options.wxs={}))["utils"]=function(e){var t=o("4a5d").bem,n=o("4265").memoize,r=o("3e75").addUnit;return e.exports={bem:n(t),memoize:n,addUnit:r},e.exports}({exports:{}})};t["a"]=n},"3e3c":function(e,t,o){"use strict";(function(e){var n=o("4ea4");o("c975"),o("fb6a"),o("a434"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("6587")),a=o("5ca0");function i(e,t){e.$emit("input",t),e.$emit("change",t)}e["__wxVueOptions"]={components:{"van-icon":r.default}},e["__wxRoute"]="vant/checkbox/index",(0,a.VantComponent)({field:!0,relation:{name:"checkbox-group",type:"ancestor",current:"checkbox"},classes:["icon-class","label-class"],props:{value:Boolean,disabled:Boolean,useIconSlot:Boolean,checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,value:"round"},iconSize:{type:null,value:20}},data:{parentDisabled:!1},methods:{emitChange:function(e){this.parent?this.setParentValue(this.parent,e):i(this,e)},toggle:function(){var e=this.data,t=e.parentDisabled,o=e.disabled,n=e.value;o||t||this.emitChange(!n)},onClickLabel:function(){var e=this.data,t=e.labelDisabled,o=e.parentDisabled,n=e.disabled,r=e.value;n||t||o||this.emitChange(!r)},setParentValue:function(e,t){var o=e.data.value.slice(),n=this.data.name,r=e.data.max;if(t){if(r&&o.length>=r)return;-1===o.indexOf(n)&&(o.push(n),i(e,o))}else{var a=o.indexOf(n);-1!==a&&(o.splice(a,1),i(e,o))}}}});var s=e["__wxComponents"]["vant/checkbox/index"];t.default=s}).call(this,o("c8ba"))},"41d4":function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return n}));var n={vPage:o("4bbb").default,vHeader:o("9540").default,vQr:o("6651").default,vanCheckbox:o("3a74").default,vButton:o("97cf").default,vInput:o("2898").default,vCode:o("8d90").default,vanToast:o("b93a").default},r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-page",[o("v-header",{attrs:{title:""+(e.user.google_token?e.$t("safe.a0"):e.$t("safe.a1"))+e.$t("safe.b9")}}),o("main",{directives:[{name:"show",rawName:"v-show",value:1==e.step&&!e.user.google_token,expression:"step==1&&!user.google_token"}],staticClass:"layout-main bg-panel-4 p-t-md"},[o("v-uni-view",{staticClass:"p-x-md p-y-xs bg-theme-1-transparent color-theme-1 fn-sm"},[e._v(e._s(e.$t("safe.c0"))+"。")]),o("v-uni-view",{staticClass:"row p-md fn-center code-box"},[o("v-qr",{staticClass:"v-qr",attrs:{text:e.googleToken.qrcode_url}}),o("v-uni-view",{staticClass:"m-y-md color-light"},[e._v(e._s(e.googleToken.secret))]),o("v-uni-view",{staticClass:"color-theme-1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$copy(e.googleToken.secret)}}},[e._v(e._s(e.$t("safe.c1")))])],1)],1),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==e.step&&!e.user.google_token,expression:"step==1&&!user.google_token"}],staticClass:"p-md bg-panel-4"},[o("p",{staticClass:"d-flex m-b-xs"},[o("van-checkbox",{staticClass:"m-r-xs",attrs:{"icon-size":"15px","checked-color":"#f05319"},model:{value:e.checkToken,callback:function(t){e.checkToken=t},expression:"checkToken"}}),e._v(e._s(e.$t("safe.c2")))],1),o("v-button",{staticClass:"w-max",attrs:{block:!0,disabled:!e.checkToken,type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.step++}}},[e._v(e._s(e.$t("safe.c3")))])],1),o("main",{directives:[{name:"show",rawName:"v-show",value:2==e.step||e.user.google_token,expression:"step==2||user.google_token"}],staticClass:"layout-main bg-panel-4 m-t-md"},[1==e.user.phone_status?o("v-uni-view",{staticClass:"form-item border-b p-md"},[o("v-uni-view",{staticClass:"label m-b-xs"},[e._v(e._s(e.$t("safe.c4")))]),o("v-uni-view",{staticClass:"input color-light"},[o("v-input",{attrs:{placeholder:e.$t("safe.a6")},scopedSlots:e._u([{key:"right",fn:function(){return[o("v-code",{attrs:{url:"/user/getCode",data:{type:1}}})]},proxy:!0}],null,!1,296673472),model:{value:e.form.sms_code,callback:function(t){e.$set(e.form,"sms_code",t)},expression:"form.sms_code"}})],1)],1):e._e(),1==e.user.email_status?o("v-uni-view",{staticClass:"form-item border-b p-md"},[o("v-uni-view",{staticClass:"label m-b-xs"},[e._v(e._s(e.$t("safe.a5")))]),o("v-uni-view",{staticClass:"input color-light"},[o("v-input",{attrs:{placeholder:e.$t("safe.a6")},scopedSlots:e._u([{key:"right",fn:function(){return[o("v-code",{attrs:{url:"/user/getCode",data:{type:2}}})]},proxy:!0}],null,!1,4197024707),model:{value:e.form.email_code,callback:function(t){e.$set(e.form,"email_code",t)},expression:"form.email_code"}})],1)],1):e._e(),o("v-uni-view",{staticClass:"form-item border-b p-md"},[o("v-uni-view",{staticClass:"label m-b-xs"},[e._v(e._s(e.$t("safe.b9")))]),o("v-uni-view",{staticClass:"input color-light"},[o("v-input",{attrs:{placeholder:e.$t("safe.a6")},model:{value:e.form.google_code,callback:function(t){e.$set(e.form,"google_code",t)},expression:"form.google_code"}})],1)],1)],1),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2==e.step,expression:"step==2"}],staticClass:"p-md bg-panel-4"},[o("v-button",{ref:"btn",staticClass:"w-max",attrs:{block:!0,type:"theme"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.bindGoogle.apply(void 0,arguments)}}},[e._v(e._s(e.$t("safe.c6")))])],1),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.user.google_token,expression:"user.google_token"}],staticClass:"p-md bg-panel-4"},[o("v-button",{ref:"btn1",staticClass:"w-max",attrs:{block:!0,type:"theme"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.unBindGoogle.apply(void 0,arguments)}}},[e._v(e._s(e.$t("safe.a0")))])],1),o("van-toast",{attrs:{id:"van-toast"}})],1)},a=[]},"41fa":function(e,t,o){var n=o("1f46");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("4f06").default;r("7156b98e",n,!0,{sourceMap:!1,shadowMode:!1})},4557:function(e,t,o){"use strict";var n=o("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("5530")),a=o("26cb"),i=n(o("0463")),s={data:function(){return{step:1,checkToken:!1,googleToken:{},form:{google_token:"",google_code:"",sms_code:"",email_code:""}}},computed:(0,r.default)({},(0,a.mapState)({user:"user"})),methods:(0,r.default)((0,r.default)({},(0,a.mapActions)({setUserInfo:"setUserInfo"})),{},{getToken:function(){var e=this;i.default.getGoogleToken().then((function(t){e.googleToken=t.data})).catch((function(){}))},bindGoogle:function(){var e=this;this.form.google_token=this.googleToken.secret,i.default.bindGoogleToken(this.form,{btn:this.$refs.btn}).then((function(){e.step=1,e.$back(-1),e.setUserInfo(),e.$toast.success(e.$t("safe.a9"))})).catch((function(){}))},unBindGoogle:function(){var e=this;i.default.unbindGoogleToken(this.form,{btn:this.$refs.btn1}).then((function(){e.$back(),e.setUserInfo(),e.$toast.success(e.$t("safe.a8"))})).catch((function(){}))}}),created:function(){this.user.google_token||this.getToken()},beforeRouteLeave:function(e,t,o){1!=this.step?(this.step--,o(!1)):o()}};t.default=s},4591:function(e,t,o){"use strict";var n;o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"qrbox"},[o("v-uni-canvas",{style:{width:"100%",height:"100%"},attrs:{"canvas-id":e.id}})],1)},a=[]},6651:function(e,t,o){"use strict";o.r(t);var n=o("4591"),r=o("f5dd");for(var a in r)"default"!==a&&function(e){o.d(t,e,(function(){return r[e]}))}(a);var i,s=o("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);t["default"]=l.exports},"6cf5":function(e,t,o){"use strict";o.r(t);var n=o("4557"),r=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"8b49":function(e,t,o){"use strict";o.r(t);var n=o("41d4"),r=o("6cf5");for(var a in r)"default"!==a&&function(e){o.d(t,e,(function(){return r[e]}))}(a);o("1524");var i,s=o("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"3a8bcc9c",null,!1,n["a"],i);t["default"]=l.exports},b050:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={};(function(){function e(e){this.mode=o.MODE_8BIT_BYTE,this.data=e}function t(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}e.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}},t.prototype={addData:function(t){var o=new e(t);this.dataList.push(o),this.dataCache=null},isDark:function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=u.getRSBlocks(e,this.errorCorrectLevel),o=new f,n=0,r=0;r<t.length;r++)n+=t[r].dataCount;for(r=0;r<this.dataList.length;r++){var a=this.dataList[r];o.put(a.mode,4),o.put(a.getLength(),i.getLengthInBits(a.mode,e)),a.write(o)}if(o.getLengthInBits()<=8*n)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(e,o){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,o),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=t.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,o)},setupPositionProbePattern:function(e,t){for(var o=-1;o<=7;o++)if(!(e+o<=-1||this.moduleCount<=e+o))for(var n=-1;n<=7;n++)t+n<=-1||this.moduleCount<=t+n||(this.modules[e+o][t+n]=0<=o&&o<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==o||6==o)||2<=o&&o<=4&&2<=n&&n<=4)},getBestMaskPattern:function(){for(var e=0,t=0,o=0;o<8;o++){this.makeImpl(!0,o);var n=i.getLostPoint(this);(0==o||e>n)&&(e=n,t=o)}return t},createMovieClip:function(e,t,o){var n=e.createEmptyMovieClip(t,o),r=1;this.make();for(var a=0;a<this.modules.length;a++)for(var i=a*r,s=0;s<this.modules[a].length;s++){var l=s*r,c=this.modules[a][s];c&&(n.beginFill(0,100),n.moveTo(l,i),n.lineTo(l+r,i),n.lineTo(l+r,i+r),n.lineTo(l,i+r),n.endFill())}return n},setupTimingPattern:function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},setupPositionAdjustPattern:function(){for(var e=i.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var o=0;o<e.length;o++){var n=e[t],r=e[o];if(null==this.modules[n][r])for(var a=-2;a<=2;a++)for(var s=-2;s<=2;s++)this.modules[n+a][r+s]=-2==a||2==a||-2==s||2==s||0==a&&0==s}},setupTypeNumber:function(e){for(var t=i.getBCHTypeNumber(this.typeNumber),o=0;o<18;o++){var n=!e&&1==(t>>o&1);this.modules[Math.floor(o/3)][o%3+this.moduleCount-8-3]=n}for(o=0;o<18;o++){n=!e&&1==(t>>o&1);this.modules[o%3+this.moduleCount-8-3][Math.floor(o/3)]=n}},setupTypeInfo:function(e,t){for(var o=this.errorCorrectLevel<<3|t,n=i.getBCHTypeInfo(o),r=0;r<15;r++){var a=!e&&1==(n>>r&1);r<6?this.modules[r][8]=a:r<8?this.modules[r+1][8]=a:this.modules[this.moduleCount-15+r][8]=a}for(r=0;r<15;r++){a=!e&&1==(n>>r&1);r<8?this.modules[8][this.moduleCount-r-1]=a:r<9?this.modules[8][15-r-1+1]=a:this.modules[8][15-r-1]=a}this.modules[this.moduleCount-8][8]=!e},mapData:function(e,t){for(var o=-1,n=this.moduleCount-1,r=7,a=0,s=this.moduleCount-1;s>0;s-=2){6==s&&s--;while(1){for(var l=0;l<2;l++)if(null==this.modules[n][s-l]){var c=!1;a<e.length&&(c=1==(e[a]>>>r&1));var u=i.getMask(t,n,s-l);u&&(c=!c),this.modules[n][s-l]=c,r--,-1==r&&(a++,r=7)}if(n+=o,n<0||this.moduleCount<=n){n-=o,o=-o;break}}}}},t.PAD0=236,t.PAD1=17,t.createData=function(e,o,n){for(var r=u.getRSBlocks(e,o),a=new f,s=0;s<n.length;s++){var l=n[s];a.put(l.mode,4),a.put(l.getLength(),i.getLengthInBits(l.mode,e)),l.write(a)}var c=0;for(s=0;s<r.length;s++)c+=r[s].dataCount;if(a.getLengthInBits()>8*c)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+8*c+")");a.getLengthInBits()+4<=8*c&&a.put(0,4);while(a.getLengthInBits()%8!=0)a.putBit(!1);while(1){if(a.getLengthInBits()>=8*c)break;if(a.put(t.PAD0,8),a.getLengthInBits()>=8*c)break;a.put(t.PAD1,8)}return t.createBytes(a,r)},t.createBytes=function(e,t){for(var o=0,n=0,r=0,a=new Array(t.length),s=new Array(t.length),l=0;l<t.length;l++){var u=t[l].dataCount,f=t[l].totalCount-u;n=Math.max(n,u),r=Math.max(r,f),a[l]=new Array(u);for(var d=0;d<a[l].length;d++)a[l][d]=255&e.buffer[d+o];o+=u;var h=i.getErrorCorrectPolynomial(f),v=new c(a[l],h.getLength()-1),g=v.mod(h);s[l]=new Array(h.getLength()-1);for(d=0;d<s[l].length;d++){var p=d+g.getLength()-s[l].length;s[l][d]=p>=0?g.get(p):0}}var m=0;for(d=0;d<t.length;d++)m+=t[d].totalCount;var b=new Array(m),k=0;for(d=0;d<n;d++)for(l=0;l<t.length;l++)d<a[l].length&&(b[k++]=a[l][d]);for(d=0;d<r;d++)for(l=0;l<t.length;l++)d<s[l].length&&(b[k++]=s[l][d]);return b};for(var o={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},r={L:1,M:0,Q:3,H:2},a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){var t=e<<10;while(i.getBCHDigit(t)-i.getBCHDigit(i.G15)>=0)t^=i.G15<<i.getBCHDigit(t)-i.getBCHDigit(i.G15);return(e<<10|t)^i.G15_MASK},getBCHTypeNumber:function(e){var t=e<<12;while(i.getBCHDigit(t)-i.getBCHDigit(i.G18)>=0)t^=i.G18<<i.getBCHDigit(t)-i.getBCHDigit(i.G18);return e<<12|t},getBCHDigit:function(e){var t=0;while(0!=e)t++,e>>>=1;return t},getPatternPosition:function(e){return i.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,o){switch(e){case a.PATTERN000:return(t+o)%2==0;case a.PATTERN001:return t%2==0;case a.PATTERN010:return o%3==0;case a.PATTERN011:return(t+o)%3==0;case a.PATTERN100:return(Math.floor(t/2)+Math.floor(o/3))%2==0;case a.PATTERN101:return t*o%2+t*o%3==0;case a.PATTERN110:return(t*o%2+t*o%3)%2==0;case a.PATTERN111:return(t*o%3+(t+o)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new c([1],0),o=0;o<e;o++)t=t.multiply(new c([1,s.gexp(o)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:return 8;case o.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),o=0,n=0;n<t;n++)for(var r=0;r<t;r++){for(var a=0,i=e.isDark(n,r),s=-1;s<=1;s++)if(!(n+s<0||t<=n+s))for(var l=-1;l<=1;l++)r+l<0||t<=r+l||0==s&&0==l||i==e.isDark(n+s,r+l)&&a++;a>5&&(o+=3+a-5)}for(n=0;n<t-1;n++)for(r=0;r<t-1;r++){var c=0;e.isDark(n,r)&&c++,e.isDark(n+1,r)&&c++,e.isDark(n,r+1)&&c++,e.isDark(n+1,r+1)&&c++,0!=c&&4!=c||(o+=3)}for(n=0;n<t;n++)for(r=0;r<t-6;r++)e.isDark(n,r)&&!e.isDark(n,r+1)&&e.isDark(n,r+2)&&e.isDark(n,r+3)&&e.isDark(n,r+4)&&!e.isDark(n,r+5)&&e.isDark(n,r+6)&&(o+=40);for(r=0;r<t;r++)for(n=0;n<t-6;n++)e.isDark(n,r)&&!e.isDark(n+1,r)&&e.isDark(n+2,r)&&e.isDark(n+3,r)&&e.isDark(n+4,r)&&!e.isDark(n+5,r)&&e.isDark(n+6,r)&&(o+=40);var u=0;for(r=0;r<t;r++)for(n=0;n<t;n++)e.isDark(n,r)&&u++;var f=Math.abs(100*u/t/t-50)/5;return o+=10*f,o}},s={glog:function(e){if(e<1)throw new Error("glog("+e+")");return s.LOG_TABLE[e]},gexp:function(e){while(e<0)e+=255;while(e>=256)e-=255;return s.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},l=0;l<8;l++)s.EXP_TABLE[l]=1<<l;for(l=8;l<256;l++)s.EXP_TABLE[l]=s.EXP_TABLE[l-4]^s.EXP_TABLE[l-5]^s.EXP_TABLE[l-6]^s.EXP_TABLE[l-8];for(l=0;l<255;l++)s.LOG_TABLE[s.EXP_TABLE[l]]=l;function c(e,t){if(void 0==e.length)throw new Error(e.length+"/"+t);var o=0;while(o<e.length&&0==e[o])o++;this.num=new Array(e.length-o+t);for(var n=0;n<e.length-o;n++)this.num[n]=e[n+o]}function u(e,t){this.totalCount=e,this.dataCount=t}function f(){this.buffer=new Array,this.length=0}function d(e){for(var t,o="",n=0;n<e.length;n++)t=e.charCodeAt(n),t>=1&&t<=127?o+=e.charAt(n):t>2047?(o+=String.fromCharCode(224|t>>12&15),o+=String.fromCharCode(128|t>>6&63),o+=String.fromCharCode(128|t>>0&63)):(o+=String.fromCharCode(192|t>>6&31),o+=String.fromCharCode(128|t>>0&63));return o}c.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),o=0;o<this.getLength();o++)for(var n=0;n<e.getLength();n++)t[o+n]^=s.gexp(s.glog(this.get(o))+s.glog(e.get(n)));return new c(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=s.glog(this.get(0))-s.glog(e.get(0)),o=new Array(this.getLength()),n=0;n<this.getLength();n++)o[n]=this.get(n);for(n=0;n<e.getLength();n++)o[n]^=s.gexp(s.glog(e.get(n))+t);return new c(o,0).mod(e)}},u.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],u.getRSBlocks=function(e,t){var o=u.getRsBlockTable(e,t);if(void 0==o)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var n=o.length/3,r=new Array,a=0;a<n;a++)for(var i=o[3*a+0],s=o[3*a+1],l=o[3*a+2],c=0;c<i;c++)r.push(new u(s,l));return r},u.getRsBlockTable=function(e,t){switch(t){case r.L:return u.RS_BLOCK_TABLE[4*(e-1)+0];case r.M:return u.RS_BLOCK_TABLE[4*(e-1)+1];case r.Q:return u.RS_BLOCK_TABLE[4*(e-1)+2];case r.H:return u.RS_BLOCK_TABLE[4*(e-1)+3];default:return}},f.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var o=0;o<t;o++)this.putBit(1==(e>>>t-o-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},n={errorCorrectLevel:r,defaults:{size:354,margin:0,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"png",errorCorrectLevel:r.H,typeNumber:-1},make:function(e){var o={canvasId:e.canvasId,componentInstance:e.componentInstance,text:e.text,size:this.defaults.size,margin:this.defaults.margin,backgroundColor:this.defaults.backgroundColor,foregroundColor:this.defaults.foregroundColor,fileType:this.defaults.fileType,errorCorrectLevel:this.defaults.errorCorrectLevel,typeNumber:this.defaults.typeNumber};if(e)for(var n in e)o[n]=e[n];function r(){var o=new t(e.typeNumber,e.errorCorrectLevel);o.addData(d(e.text)),o.make();var n=uni.createCanvasContext(e.canvasId,e.componentInstance);n.setFillStyle(e.backgroundColor),n.fillRect(0,0,e.size,e.size);for(var r=(e.size-2*e.margin)/o.getModuleCount(),a=r,i=0;i<o.getModuleCount();i++)for(var s=0;s<o.getModuleCount();s++){var l=o.isDark(i,s)?e.foregroundColor:e.backgroundColor;n.setFillStyle(l);var c=Math.round(s*r)+e.margin,u=Math.round(i*a)+e.margin,f=Math.ceil((s+1)*r)-Math.floor(s*r),h=Math.ceil((i+1)*r)-Math.floor(i*r);n.fillRect(c,u,f,h)}setTimeout((function(){n.draw(!1,function(){setTimeout((function(){uni.canvasToTempFilePath({canvasId:e.canvasId,fileType:e.fileType,width:e.size,height:e.size,destWidth:e.size,destHeight:e.size,success:function(t){e.success&&e.success(t.tempFilePath)},fail:function(t){e.fail&&e.fail(t)},complete:function(t){e.complete&&e.complete(t)}},e.componentInstance)}),e.text.length+100)}())}),150)}e=o,e.canvasId?r():console.error("uQRCode: Please set canvasId!")}}})();var r=n;t.default=r},cbfb:function(e,t,o){"use strict";var n=function(e){(e.options.wxs||(e.options.wxs={}))["computed"]=function(e){var t=o("069a");function n(e,o,n,r,a){var i=[["font-size",t.addUnit(a)]];return e&&o&&!n&&!r&&(i.push(["border-color",e]),i.push(["background-color",e])),i.map((function(e){return e.join(":")})).join(";")}return e.exports={iconStyle:n},e.exports}({exports:{}})};t["a"]=n},e9e2:function(e,t,o){"use strict";var n=o("4ea4");o("ac1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("b050")),a={props:{text:{default:"",type:String,required:!1}},data:function(){return{width:100,height:100,id:"qrcode".concat(Math.random())}},watch:{text:function(){this.getRec()}},methods:{getRec:function(){var e=this,t=uni.createSelectorQuery().in(this);t.select(".qrbox canvas").boundingClientRect((function(t){e.width=t.width,e.height=t.height,e.make()})).exec()},make:function(){r.default.make({canvasId:this.id,componentInstance:this,text:this.text,size:this.width,margin:0,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",correctLevel:r.default.errorCorrectLevel.H,success:function(e){}})}},mounted:function(){this.getRec()}};t.default=a},f4ae:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return n}));var n={vanIcon:o("6587").default},r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("uni-shadow-root",{staticClass:"vant-checkbox-index"},[o("v-uni-view",{staticClass:"van-checkbox custom-class"},[o("v-uni-view",{staticClass:"van-checkbox__icon-wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggle.apply(void 0,arguments)}}},[e.useIconSlot?e._t("icon"):o("van-icon",{class:e.utils.bem("checkbox__icon",[e.shape,{disabled:e.disabled||e.parentDisabled,checked:e.value}]),style:e.computed.iconStyle(e.checkedColor,e.value,e.disabled,e.parentDisabled,e.iconSize),attrs:{name:"success",size:"0.8em","custom-class":"icon-class","custom-style":"line-height: 1.25em;"}})],2),o("v-uni-view",{class:"label-class "+e.utils.bem("checkbox__label",[e.labelPosition,{disabled:e.disabled||e.parentDisabled}]),on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickLabel.apply(void 0,arguments)}}},[e._t("default")],2)],1)],1)},a=[]},f5dd:function(e,t,o){"use strict";o.r(t);var n=o("e9e2"),r=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},fdaa:function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,'.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-multi-ellipsis--l2{-webkit-line-clamp:2}.van-multi-ellipsis--l2,.van-multi-ellipsis--l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.van-multi-ellipsis--l3{-webkit-line-clamp:3}.van-clearfix:after{display:table;clear:both;content:""}.van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom{position:relative}.van-hairline--bottom:after,.van-hairline--left:after,.van-hairline--right:after,.van-hairline--surround:after,.van-hairline--top-bottom:after,.van-hairline--top:after,.van-hairline:after{position:absolute;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #eee;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline--top:after{border-top-width:1px}.van-hairline--left:after{border-left-width:1px}.van-hairline--right:after{border-right-width:1px}.van-hairline--bottom:after{border-bottom-width:1px}.van-hairline--top-bottom:after{border-width:1px 0}.van-hairline--surround:after{border-width:1px}.van-checkbox{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none}.van-checkbox__icon-wrap,.van-checkbox__label{line-height:20px;line-height:var(--checkbox-size,20px)}.van-checkbox__icon-wrap{-webkit-flex:none;flex:none}.van-checkbox__icon{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;width:1em;height:1em;color:transparent;text-align:center;transition-property:color,border-color,background-color;font-size:20px;font-size:var(--checkbox-size,20px);border:1px solid #c8c9cc;border:1px solid var(--checkbox-border-color,#c8c9cc);transition-duration:.2s;transition-duration:var(--checkbox-transition-duration,.2s)}.van-checkbox__icon--round{border-radius:100%}.van-checkbox__icon--checked{color:#fff;color:var(--white,#fff);background-color:#1989fa;background-color:var(--checkbox-checked-icon-color,#1989fa);border-color:#1989fa;border-color:var(--checkbox-checked-icon-color,#1989fa)}.van-checkbox__icon--disabled{background-color:#ebedf0;background-color:var(--checkbox-disabled-background-color,#ebedf0);border-color:#c8c9cc;border-color:var(--checkbox-disabled-icon-color,#c8c9cc)}.van-checkbox__icon--disabled.van-checkbox__icon--checked{color:#c8c9cc;color:var(--checkbox-disabled-icon-color,#c8c9cc)}.van-checkbox__label{word-wrap:break-word;margin-left:10px;margin-left:var(--checkbox-label-margin,10px);color:#323233;color:var(--checkbox-label-color,#323233)}.van-checkbox__label--left{float:left;margin:0 10px 0 0;margin:0 var(--checkbox-label-margin,10px) 0 0}.van-checkbox__label--disabled{color:#c8c9cc;color:var(--checkbox-disabled-label-color,#c8c9cc)}.van-checkbox__label:empty{margin:0}',""]),e.exports=t}}]);