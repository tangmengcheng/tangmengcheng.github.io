(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{222:function(e,t,_){"use strict";_.r(t);var a=_(0),v=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"content"},[_("h2",{attrs:{id:"说说微信小程序的实现原理？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说说微信小程序的实现原理？","aria-hidden":"true"}},[e._v("#")]),e._v(" 说说微信小程序的实现原理？")]),e._v(" "),_("p",[e._v("网页开发，渲染线程和脚本是互斥的，这也是为什么长时间的脚本运行可能会导致页面失去响应的原因，本质就是我们常说的 "),_("code",[e._v("JS 是单线程的")]),e._v("。而在小程序中，选择了 "),_("code",[e._v("Hybrid")]),e._v(" 的渲染方式，将视图层和逻辑层是分开的，双线程同时运行，视图层的界面使用 "),_("code",[e._v("WebView")]),e._v(" 进行渲染，逻辑层运行在 "),_("code",[e._v("JSCore")]),e._v(" 中")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/d0649b9f577dc4e9be84ebd6a980ec6a.png",alt:""}})]),e._v(" "),_("ul",[_("li",[e._v("渲染层：界面渲染相关的任务全都在 WebView 线程里执行。一个小程序存在多个界面，所以渲染层存在多个 WebView 线程")]),e._v(" "),_("li",[e._v("逻辑层：采用 JsCore 线程运行 JS 脚本，在这个环境下执行的都是有关小程序业务逻辑的代码")])]),e._v(" "),_("h3",{attrs:{id:"如何通信？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何通信？","aria-hidden":"true"}},[e._v("#")]),e._v(" 如何通信？")]),e._v(" "),_("p",[e._v("小程序在渲染层，宿主环境会把 "),_("code",[e._v("wxml")]),e._v(" 转化成对应的 "),_("code",[e._v("JS")]),e._v(" 对象。在逻辑层发生数据变更的时候，通过宿主环境提供的 "),_("code",[e._v("setData")]),e._v(" 方法把数据从逻辑层传递到渲染层，再经过对比前后差异，把差异应用在原来的 "),_("code",[e._v("Dom")]),e._v(" 树上，渲染出正确的视图")])])}],!1,null,null,null);t.default=v.exports}}]);