(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{335:function(t,e,_){"use strict";_.r(e);var v=_(0),i=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"get-post-的本质区别？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get-post-的本质区别？","aria-hidden":"true"}},[t._v("#")]),t._v(" GET & POST 的本质区别？")]),t._v(" "),_("ul",[_("li",[t._v("基础回答")])]),t._v(" "),_("ol",[_("li",[t._v("GET在浏览器回退时是无害的，而POST会再次提交请求")]),t._v(" "),_("li",[t._v("对参数的数据类型，GET只接受ASCII字符，而POST没有限制")]),t._v(" "),_("li",[t._v("GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留")]),t._v(" "),_("li",[t._v("GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息")])]),t._v(" "),_("ul",[_("li",[t._v("高级回答")])]),t._v(" "),_("ol",[_("li",[t._v("对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）")]),t._v(" "),_("li",[t._v("而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）")])]),t._v(" "),_("p",[_("strong",[t._v("GET产生一个TCP数据包；POST产生两个TCP数据包")]),t._v("，但是要注意以下几点：")]),t._v(" "),_("ol",[_("li",[t._v("GET与POST都有自己的语义，不能随便混用")]),t._v(" "),_("li",[t._v("在网络环境好的情况下，发一次包的时间和发两次包的时间差别基本可以无视。而在网络环境差的情况下，两次包的TCP在验证数据包完整性上，有非常大的优点")]),t._v(" "),_("li",[t._v("并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次")])])])}],!1,null,null,null);e.default=i.exports}}]);