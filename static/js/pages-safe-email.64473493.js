(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-safe-email"],{"018c":function(e,t,a){"use strict";a.r(t);var s=a("9c0d"),i=a("76e9");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);var n,l=a("f0c5"),r=Object(l["a"])(i["default"],s["b"],s["c"],!1,null,"f2ebf8f0",null,!1,s["a"],n);t["default"]=r.exports},"76e9":function(e,t,a){"use strict";a.r(t);var s=a("f25f"),i=a.n(s);for(var o in s)"default"!==o&&function(e){a.d(t,e,(function(){return s[e]}))}(o);t["default"]=i.a},"9c0d":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s}));var s={vPage:a("8157").default,vHeader:a("8785").default,vInput:a("e292").default,vCode:a("853f").default,vButton:a("4a64").default,vanToast:a("c64a").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-page",[a("v-header",{attrs:{title:""+(e.user.email?e.$t("safe.a0"):e.$t("safe.a1"))+e.$t("safe.a2")}}),a("main",{staticClass:"layout-main bg-panel-4 m-t-md"},[e.user.email?e._e():a("v-uni-view",{staticClass:"form-item border-b p-md"},[a("v-uni-view",{staticClass:"label m-b-xs"},[e._v(e._s(e.$t("safe.a3")))]),a("v-uni-view",{staticClass:"input color-light"},[a("v-input",{attrs:{placeholder:e.$t("safe.a4")},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),a("v-uni-view",{staticClass:"form-item border-b p-md"},[a("v-uni-view",{staticClass:"label m-b-xs"},[e._v(e._s(e.$t("safe.a5")))]),a("v-uni-view",{staticClass:"input color-light"},[a("v-input",{attrs:{placeholder:e.$t("safe.a6")},scopedSlots:e._u([{key:"right",fn:function(){return[e.user.email?a("v-code",{attrs:{url:"/user/getCode",data:{type:2}}}):a("v-code",{attrs:{url:"/user/sendBindEmailCode",data:{email:e.form.email}}})]},proxy:!0}]),model:{value:e.form.email_code,callback:function(t){e.$set(e.form,"email_code",t)},expression:"form.email_code"}})],1)],1),1==e.user.phone_status?a("v-uni-view",{staticClass:"form-item border-b p-md"},[a("v-uni-view",{staticClass:"label m-b-xs"},[e._v("SMS"+e._s(e.$t("safe.a7")))]),a("v-uni-view",{staticClass:"input color-light"},[a("v-input",{attrs:{placeholder:e.$t("safe.a6")},scopedSlots:e._u([{key:"right",fn:function(){return[a("v-code",{attrs:{url:"/user/getCode",data:{type:1}}})]},proxy:!0}],null,!1,296673472),model:{value:e.form.sms_code,callback:function(t){e.$set(e.form,"sms_code",t)},expression:"form.sms_code"}})],1)],1):e._e(),1==e.user.google_status?a("v-uni-view",{staticClass:"form-item border-b p-md"},[a("v-uni-view",{staticClass:"label m-b-xs"},[e._v("google"+e._s(e.$t("safe.a7")))]),a("v-uni-view",{staticClass:"input color-light"},[a("v-input",{attrs:{placeholder:e.$t("safe.a6")},model:{value:e.form.google_code,callback:function(t){e.$set(e.form,"google_code",t)},expression:"form.google_code"}})],1)],1):e._e()],1),a("v-uni-view",{staticClass:"p-md bg-panel-4"},[a("v-button",{ref:"btn",staticClass:"w-max",attrs:{block:!0,type:"theme"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chnageEmail.apply(void 0,arguments)}}},[e._v(e._s(e.user.email?e.$t("safe.a0"):e.$t("safe.a1")))])],1),a("van-toast",{attrs:{id:"van-toast"}})],1)},o=[]},f25f:function(e,t,a){"use strict";var s=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(a("5530")),o=s(a("d124")),n=a("26cb"),l={data:function(){return{form:{email:"",email_code:"",sms_code:"",google_code:""}}},computed:(0,i.default)({},(0,n.mapState)({user:"user"})),methods:(0,i.default)((0,i.default)({},(0,n.mapActions)({setUserInfo:"setUserInfo"})),{},{chnageEmail:function(){var e=this,t=this.form,a=this.user.email?o.default.unbindEmail(t,{btn:this.$refs.btn}):o.default.bindEmail(t,{btn:this.$refs.btn});a.then((function(){e.$toast.success(e.user.email?e.$t("safe.a8"):e.$t("safe.a9")),e.$back(),e.setUserInfo()})).catch((function(){}))}})};t.default=l}}]);