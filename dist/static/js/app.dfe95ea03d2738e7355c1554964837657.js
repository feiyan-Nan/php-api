webpackJsonp([25],{"/TZ7":function(t,e,n){"use strict";Boolean,Number,Number,Number,Function,Function,Boolean,Number,Function,Function;var i="wait",o="pulling",s="limit",a="loading",r="wait",l="loading",u="nodata",c={props:{disableTop:{type:Boolean,default:!1},distanceIndex:{type:Number,default:2},topLoadingDistance:{type:Number,default:50},topDistance:{type:Number,default:100},topMethod:{type:Function,default:function(){return function(){console.log("topmethod")}}},topStatusChange:{type:Function,default:function(){return function(){console.log("topStatusChange")}}},disableBottom:{type:Boolean,default:!1},bottomDistance:{type:Number,default:10},bottomMethod:{type:Function,default:function(){return function(){}}},bottomStatusChange:{type:Function,default:function(){return function(){console.log("topStatusChange")}}}},data:function(){return{startPositionTop:null,startScreenY:0,endScreenY:0,topStatus:i,bottomOverflow:"auto",bottomStatus:r}},components:{},computed:{topText:function(){switch(this.topStatus){case o:return"下拉刷新";case s:return"释放刷新";case a:return"正在刷新...";default:return""}},bottomText:function(){switch(this.bottomStatus){case l:return"正在加载更多...";case u:return"暂无更多数据";default:return""}}},watch:{topStatus:function(t){this.topStatusChange(t)},bottomStatus:function(t){this.bottomStatusChange(t)}},mounted:function(){this.init()},methods:{handleScroll:function(){var t=this;this.disableBottom||this.bottomStatus===r&&this.$el.scrollHeight-this.$el.scrollTop-this.$el.clientHeight<=this.bottomDistance&&(this.bottomStatus=l,this.$nextTick(function(){t.$el.scrollTo(0,t.$el.scrollHeight)}),this.bottomMethod())},getScrollTop:function(){return this.$el.scrollTop},setScrollTop:function(t){var e=this;this.$nextTick(function(){e.$el.scrollTop=parseFloat(t)})},init:function(){this.startPositionTop=this.$refs.content.getBoundingClientRect().top,this.disableTop||this.bindTouchEvents()},bindTouchEvents:function(){this.$refs.content.addEventListener("touchstart",this.handleTouchStart),this.$refs.content.addEventListener("touchmove",this.handleTouchMove),this.$refs.content.addEventListener("touchend",this.handleTouchEnd)},handleTouchStart:function(t){if(!(this.$refs.content.getBoundingClientRect().top<this.startPositionTop)&&this.topStatus!==a){var e=t.touches[0].screenY;this.startScreenY=e}},handleTouchMove:function(t){if(!(this.$refs.content.getBoundingClientRect().top<this.startPositionTop)&&"loading"!==this.topStatus){var e=t.touches[0].screenY;this.endScreenY=e;var n=(e-this.startScreenY)/this.distanceIndex;this.$refs.content.getBoundingClientRect().top>this.startPositionTop&&(this.topStatus=o),n>=this.topDistance&&(this.topStatus=s),n>0&&(t.preventDefault(),t.stopPropagation(),this.transformStyle(this.$refs.content,n))}},handleTouchEnd:function(t){this.$refs.content.getBoundingClientRect().top<this.startPositionTop||(this.topStatus!==o&&this.topStatus!==s||(t.stopPropagation(),t.preventDefault()),"loading"!==this.topStatus&&((this.endScreenY-this.startScreenY)/this.distanceIndex>=this.topDistance?(this.transformStyle(this.$refs.content,this.topLoadingDistance,!0),this.topStatus=a,this.topMethod(),this.disableBottom||(this.bottomStatus=r)):(this.topStatus=i,this.transformStyle(this.$refs.content,0),this.startScreenY=0,this.endScreenY=0)))},onTopLoaded:function(){this.transformStyle(this.$refs.content,0,!0),this.topStatus=i,this.startScreenY=0,this.endScreenY=0},onBottomLoaded:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.bottomStatus=t?r:u},transformStyle:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200;t.style["-webkit-transform"]="translate3d(0,"+e+"px,0)",t.style.transform="translate3d(0,"+e+"px,0)",t.style.transitionDuration="0ms",n&&(t.style.transitionDuration=i+"ms")}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vsim-load",style:{overflow:t.bottomOverflow},on:{"&scroll":function(e){return t.handleScroll(e)}}},[n("div",{ref:"content",staticClass:"vsim-load-content"},[t._t("top",[n("div",{staticClass:"vsim-load-header"},[n("div",[t._v(t._s(t.topText))])])]),t._v(" "),t._t("default"),t._v(" "),t._t("bottom",[n("div",{staticClass:"vsim-load-footer"},[n("div",[t._v(t._s(t.bottomText))])])])],2)])},staticRenderFns:[]};var h=n("VU/8")(c,d,!1,function(t){n("O791")},"data-v-26775ed8",null);e.a=h.exports},"/kga":function(t,e,n){"use strict";var i=n("JkZY"),o=(i.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[i.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var a=n("VU/8")(o,s,!1,function(t){n("B7nC")},null,null);e.a=a.exports},"62KO":function(t,e,n){"use strict";var i=n("/kga"),o=(i.a,Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,Boolean,Boolean,{name:"confirm",components:{XDialog:i.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-confirm"},[n("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){return t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?n("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?n("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var n=t.msg,i=e.target,o=!!i.checked;if(Array.isArray(n)){var s=t._i(n,null);i.checked?s<0&&(t.msg=n.concat([null])):s>-1&&(t.msg=n.slice(0,s).concat(n.slice(s+1)))}else t.msg=o}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[t.showCancelButton?n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]):t._e(),t._v(" "),t.showConfirmButton?n("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))]):t._e()])],2)],1)},staticRenderFns:[]};var a=n("VU/8")(o,s,!1,function(t){n("vQoY")},null,null);e.a=a.exports},"8fz0":function(t,e){},B7nC:function(t,e){},C6qw:function(t,e){},Lifb:function(t,e){},"N+zL":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},o=n("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},i,!1,null,null,null);e.default=o.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"myfade"}},[e("router-view")],1)],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},o,!1,function(t){n("Lifb")},null,null).exports,a=n("/ocq");i.default.use(a.a);var r=new a.a({routes:[{path:"/sharedetail",name:"sharedetail",component:function(t){Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("V3MU")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/detail",name:"detail",component:function(t){Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("QJR9")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/aboutus",name:"aboutus",component:function(t){Promise.all([n.e(0),n.e(8)]).then(function(){var e=[n("fJqo")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/communityRule",name:"communityRule",component:function(t){Promise.all([n.e(0),n.e(21)]).then(function(){var e=[n("7T1d")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/useRule",name:"useRule",component:function(t){Promise.all([n.e(0),n.e(15)]).then(function(){var e=[n("0gHh")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/useRuleIos",name:"useRuleIos",component:function(t){Promise.all([n.e(0),n.e(20)]).then(function(){var e=[n("qmjb")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/privacy",name:"privacy",component:function(t){Promise.all([n.e(0),n.e(17)]).then(function(){var e=[n("KPld")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/surprise",name:"surprise",component:function(t){Promise.all([n.e(0),n.e(14)]).then(function(){var e=[n("5otE")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/surprise/introduce",name:"introduce",component:function(t){n.e(19).then(function(){var e=[n("CSP2")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/surprise/raiders",name:"raiders",component:function(t){n.e(18).then(function(){var e=[n("Alrv")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/power/detail",name:"powerDetail",component:function(t){n.e(13).then(function(){var e=[n("eEQ/")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/power/raking",name:"powerRaking",component:function(t){Promise.all([n.e(0),n.e(10)]).then(function(){var e=[n("sYYh")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/credits/mine",name:"creditsMine",component:function(t){Promise.all([n.e(0),n.e(7)]).then(function(){var e=[n("DtzM")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/credits/rule",name:"creditsRule",component:function(t){Promise.all([n.e(0),n.e(16)]).then(function(){var e=[n("grOZ")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/gift/creditsGiftDetail",name:"creditsGiftDetail",component:function(t){Promise.all([n.e(0),n.e(6)]).then(function(){var e=[n("WKm+")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/sharePersonalPage",name:"sharePersonalPage",component:function(t){Promise.all([n.e(0),n.e(3)]).then(function(){var e=[n("mB63")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/lotteryDetail",name:"lotteryDetail",component:function(t){Promise.all([n.e(0),n.e(9)]).then(function(){var e=[n("kFSE")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/empty",name:"empty",component:function(t){Promise.all([n.e(0),n.e(11)]).then(function(){var e=[n("foki")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/sharelottery",name:"sharelottery",component:function(t){Promise.all([n.e(0),n.e(12)]).then(function(){var e=[n("E9Mk")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/shareactivity",name:"shareactivity",component:function(t){Promise.all([n.e(0),n.e(5)]).then(function(){var e=[n("3kx/")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/sharetopic",name:"sharetopic",component:function(t){Promise.all([n.e(0),n.e(4)]).then(function(){var e=[n("UPgl")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}),l=n("7t+N"),u=n.n(l),c=n("mvHQ"),d=n.n(c),h=n("Dd8w"),p=n.n(h),f=n("8DXP"),m=n.n(f),v=navigator.userAgent,g=/(Android);?[\s/]+([\d.]+)?/.test(v),w=/(iPad).*OS\s([\d_]+)/.test(v),_=/(iPod)(.*OS\s([\d_]+))?/.test(v),y=!w&&/(iPhone\sOS)\s([\d_]+)/.test(v),b=/micromessenger/i.test(v),S={code:0,msg:"",data:{method:""}},x=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];S.data.method=t,S.data.para=e,n&&(S.data.para=p()({},S.data.para,{user_id:m.a.get("user_id"),token:m.a.get("access_token"),user_name:m.a.get("user_name")})),function(t){var e=g?d()(t):t;WebViewJavascriptBridge.nativeBridge(e)}(S)};var C={init:function(t){if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){if(window.WebViewJavascriptBridge)return t(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(t);window.WVJBCallbacks=[t];var e=document.createElement("iframe");e.style.display="none",e.src="wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(e),setTimeout(function(){document.documentElement.removeChild(e)},0)}else window.WebViewJavascriptBridge?t(WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",function(){t(WebViewJavascriptBridge)},!1)},first:function(t){if(!!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){this.init(function(e){e.init(function(e,n){n(t)})})}},registerHandler:function(t,e){this.init(function(n){n.registerHandler(t,e)})},callHandler:function(t,e,n){this.init(function(i){i.callHandler(t,e,n)})}};C.first();var B=function(t){t.$device&&t.device||(t.$device=t.device={isAndroid:g,isIpad:w,isIpod:_,isIphone:y,isWechat:b,nativeBridge:x,JsBridge:C}),t.mixin({created:function(){this.$device={isAndroid:g,isIpad:w,isIpod:_,isIphone:y,isWechat:b,nativeBridge:x,JsBridge:C}}})},T=n("F3EI"),k=n.n(T),$=(n("v2ns"),n("wvfG")),P=n.n($),V=n("cTzj"),I=n.n(V),O=n("ibnl"),N=n.n(O),E=(n("tOCg"),n("Peep")),A=n("3BeM"),D=n("NXWw"),F=n("Oij6");i.default.config.productionTip=!1,i.default.use(N.a,{tapToToggleControls:!1,clickToCloseNonZoomable:!1,closeEl:!1,arrowEl:!1,fullscreenEl:!1,zoomEl:!1,tapToClose:!0}),n("hKoQ").polyfill(),window.jQuery=u.a,window.$=u.a,n("Bio8"),n.e(22).then(n.bind(null,"991W")),n.e(23).then(n.bind(null,"erWL")),n("v5o6").attach(document.body),i.default.use(k.a),i.default.use(E.a),i.default.use(A.a),i.default.use(D.a),i.default.use(F.a),i.default.use(I.a,{preLoad:2,effect:"fadeIn",threshold:200,error:n("qdRB"),attempt:2}),i.default.use(P.a),i.default.use(B),new i.default({el:"#app",router:r,components:{App:s},template:"<App/>"})},O791:function(t,e){},mzja:function(t,e,n){"use strict";var i=n("/kga"),o=(i.a,Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:i.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){return t.$emit("on-hide")},"on-show":function(e){return t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var a=n("VU/8")(o,s,!1,function(t){n("8fz0")},null,null);e.a=a.exports},pYmz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=n("gsqX"));Object,Boolean;var o="undefined"!=typeof window;o&&(window.Swiper=n("gsqX"));var s={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&o&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&o){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var i=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(i):i()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=n("VU/8")(s,a,!1,null,null,null);e.default=r.exports},qdRB:function(t,e,n){t.exports=n.p+"static/img/loading-error.7b9384c1554964836145.png"},rLAy:function(t,e,n){"use strict";var i=n("xNvf"),o=(i.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[i.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var a=n("VU/8")(o,s,!1,function(t){n("C6qw")},null,null);e.a=a.exports},tOCg:function(t,e){},v2ns:function(t,e){},vQoY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.dfe95ea03d2738e7355c1554964837657.js.map