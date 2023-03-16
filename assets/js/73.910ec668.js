(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{274:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"_1-vue-项目优化方式有哪些？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-项目优化方式有哪些？","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Vue 项目优化方式有哪些？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用 "),a("code",[t._v("计算属性")]),t._v("。 "),a("strong",[t._v("特点")]),t._v("：可以被缓存")])]),t._v(" "),a("li",[a("p",[t._v("使用 "),a("code",[t._v("函数式组件")])]),t._v(" "),a("p",[t._v("例如：对于某些组件，如果我们只是用来显示一些数据，不需要管理状态，监听数据等，那么就可以用函数式组件。")]),t._v(" "),a("p",[a("strong",[t._v("函数式组件")]),t._v(" 是 "),a("code",[t._v("无状态的")]),t._v("，"),a("code",[t._v("无实例的")]),t._v("，在初始化时不需要初始化状态，不需要创建实例，也不需要去处理生命周期等，相比有状态组件，会更加轻量，同时性能也更好。")])]),t._v(" "),a("li",[a("p",[t._v("结合场景使用 "),a("code",[t._v("v-show")]),t._v(" 和 "),a("code",[t._v("v-if")])]),t._v(" "),a("p",[a("strong",[t._v("两者的作用")]),t._v(": 都是用来控制某些组件或 DOM 的显示/隐藏")]),t._v(" "),a("p",[a("code",[t._v("v-if")]),t._v(" 适用于在运行时很少改变条件，不需要频繁切换条件的场景")]),t._v(" "),a("p",[a("code",[t._v("v-show")]),t._v(" 适用于需要非常频繁切换条件的场景")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("v-if")]),t._v(" 的部分被转换成了一个三元表达式, "),a("code",[t._v("visible")]),t._v(" 为 "),a("code",[t._v("true")]),t._v(" 时，创建组件的 "),a("code",[t._v("vnode")]),t._v("，否则创建一个"),a("code",[t._v("空 vnode")]),t._v("。在 patch 的时候，新旧节点不一样，就会移除旧的节点或创建新的节点，这样的话组件也会跟着创建/销毁。如果组件里有很多 DOM，或者要执行很多初始化/销毁逻辑，那么随着 "),a("code",[t._v("visible")]),t._v(" 的切换，势必会浪费掉很多性能")]),t._v(" "),a("li",[a("code",[t._v("v-show")]),t._v(" 被编译成了 "),a("code",[t._v("directives")]),t._v("，它其实是通过切换元素的 "),a("code",[t._v("display 属性")]),t._v(" 来控制的，和 "),a("code",[t._v("v-if")]),t._v(" 相比，不需要在 "),a("code",[t._v("patch 阶段")]),t._v(" 创建/移除节点，只是根据 "),a("code",[t._v("v-show")]),t._v(" 上绑定的值来控制 "),a("code",[t._v("DOM 元素")]),t._v(" 的 "),a("code",[t._v("style.display")]),t._v(" 属性，在频繁切换的场景下就可以节省很多性能")])]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v(": 如果初始值是 "),a("code",[t._v("false")]),t._v(" 时，"),a("code",[t._v("v-if")]),t._v(" 并不会创建隐藏的节点，但是 "),a("code",[t._v("v-show")]),t._v(" 会创建，并通过设置 "),a("code",[t._v("style.display='none'")]),t._v(" 来隐藏，虽然外表看上去这个 DOM 都是被隐藏的，但是 "),a("code",[t._v("v-show")]),t._v(" 已经完整的走了一遍创建的流程，造成了性能的浪费")]),t._v(" "),a("p",[a("strong",[t._v("总结")]),t._v("："),a("code",[t._v("v-if")]),t._v(" 的优势体现在 "),a("code",[t._v("初始化")]),t._v(" 时，"),a("code",[t._v("v-show")]),t._v(" 体现在 "),a("code",[t._v("更新")]),t._v(" 时（初始化性能压力大）")])]),t._v(" "),a("li",[a("p",[t._v("使用 "),a("code",[t._v("keep-alive")])]),t._v(" "),a("p",[a("strong",[t._v("keep-alive 的作用")]),t._v(" 就是将它包裹的组件在第一次渲染后就缓存起来，下次需要时就直接从缓存里面取，避免了不必要的性能浪费")])]),t._v(" "),a("li",[a("p",[t._v("避免 "),a("code",[t._v("v-for")]),t._v(" 和 "),a("code",[t._v("v-if")]),t._v(" 同时使用")]),t._v(" "),a("p",[a("strong",[t._v("Vue2 中")]),t._v("，"),a("code",[t._v("v-for")]),t._v(" 的优先级比 "),a("code",[t._v("v-if")]),t._v(" 高；"),a("strong",[t._v("Vue3 中")]),t._v("，"),a("code",[t._v("v-if")]),t._v(" 的优先级比 "),a("code",[t._v("v-for")]),t._v(" 高")]),t._v(" "),a("p",[a("strong",[t._v("总结")]),t._v("：使用计算属性代替")])]),t._v(" "),a("li",[a("p",[t._v("给 "),a("code",[t._v("v-for")]),t._v(" 添加 "),a("code",[t._v("key")]),t._v(", 并且不要将 "),a("code",[t._v("index")]),t._v(" 或者 "),a("code",[t._v("随机数")]),t._v(" 作为 "),a("code",[t._v("key")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("延迟渲染")])]),t._v(" "),a("p",[a("strong",[t._v("延迟渲染")]),t._v(" 就是 "),a("code",[t._v("分批渲染")]),t._v("，假设我们某个页面里有一些组件在初始化时需要执行复杂的逻辑，这将会占用很长时间，导致帧数下降、卡顿，其实可以使用分批渲染的方式来进行优化，就是先渲染一部分，再渲染另一部分")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Heavy v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"defer(1)"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        displayPriority"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("runDisplayPriority")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("runDisplayPriority")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("step")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayPriority"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayPriority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("step")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("step")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("priority")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayPriority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" priority\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[a("strong",[t._v("原理")]),t._v("：主要是维护 "),a("code",[t._v("displayPriority")]),t._v(" 变量，通过 "),a("code",[t._v("requestAnimationFrame")]),t._v(" 在每一帧渲染时自增，然后我们就可以在组件上通过 "),a("code",[t._v('v-if="defer(n)"')]),t._v(" 使 "),a("code",[t._v("displayPriority")]),t._v(" 增加到某一值时再渲染，这样就可以避免 "),a("code",[t._v("js 执行")]),t._v(" 时间过长导致的卡顿问题了")])]),t._v(" "),a("li",[a("p",[t._v("使用 "),a("code",[t._v("非响应式数据")])]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("Vue 组件")]),t._v(" 初始化数据时，会递归遍历在 "),a("code",[t._v("data")]),t._v(" 中定义的每一条数据，通过 "),a("code",[t._v("Object.defineProperty")]),t._v(" 将数据改成响应式，这就意味着如果 data 中的数据量很大的话，在初始化时将会使用很长的时间去执行 "),a("code",[t._v("Object.defineProperty")]),t._v(", 也就会带来性能问题，这个时候我们可以强制使数据变为非响应式，从而节省时间")]),t._v(" "),a("p",[a("strong",[t._v("解决方法")]),t._v("："),a("code",[t._v("Object.freeze()")])]),t._v(" "),a("p",[a("strong",[t._v("扩展")]),t._v("：为什么 "),a("code",[t._v("Object.freeze()")]),t._v(" 会有这样的效果呢？")]),t._v(" "),a("p",[t._v("对某一对象使用 "),a("code",[t._v("Object.freeze()")]),t._v(" 后，将不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值")]),t._v(" "),a("p",[t._v("而 "),a("code",[t._v("Vue")]),t._v(" 在将 "),a("code",[t._v("数据改造成响应式")]),t._v(" 之前有个判断：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" asRootData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略其他逻辑")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    shouldObserve "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isServerRendering")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPlainObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isExtensible")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_isVue\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Observer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...省略其他逻辑")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这个判断条件中有一个 "),a("code",[t._v("Object.isExtensible(value)")]),t._v("，这个方法是判断一个对象是否是 "),a("code",[t._v("可扩展")]),t._v(" 的，由于我们使用了 "),a("code",[t._v("Object.freeze()")]),t._v("，这里肯定就返回了 "),a("code",[t._v("false")]),t._v("，所以就跳过了下面数据劫持的过程，没有了 "),a("code",[t._v("收集依赖")]),t._v("的过程，自然也就节省了性能。")]),t._v(" "),a("p",[a("strong",[t._v("问题")]),t._v("：数据都不是响应式的，可以只对这种数据的某一层使用 "),a("code",[t._v("Object.freeze()")]),t._v("，同时配合使用上文中的 "),a("code",[t._v("延迟渲染")]),t._v("、"),a("code",[t._v("函数式组件")]),t._v(" 等，可以极大提升性能。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("computed")]),t._v("、"),a("code",[t._v("watch")]),t._v("、"),a("code",[t._v("methods")]),t._v(" 区分使用场景")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("computed:")]),t._v(" 一个数据受多个数据影响的。")]),t._v(" "),a("li",[a("code",[t._v("watch")]),t._v(": 一个数据影响多个数据的。当数据变化时，需要执行异步或开销较大的操作时。如果数据变化时请求一个接口。")]),t._v(" "),a("li",[a("code",[t._v("methods")]),t._v(": 希望数据是实时更新，不需要缓存。")])])]),t._v(" "),a("li",[a("p",[t._v("防抖和节流")]),t._v(" "),a("ol",[a("li",[t._v("防抖：触发事件后规定时间内事件只会执行一次。简单来说就是防止手抖，短时间操作了好多次。")]),t._v(" "),a("li",[t._v("节流：事件在规定时间内只执行一次。")]),t._v(" "),a("li",[t._v("应用场景： 节流不管事件有没有触发还是频繁触发，在规定时间内一定会只执行一次事件，而防抖是在规定时间内事件被触发，且是最后一次被触发才执行一次事件。")])])]),t._v(" "),a("li",[a("p",[t._v("图片大小优化和懒加载")]),t._v(" "),a("ol",[a("li",[t._v("图片大小的优化，可以用 "),a("code",[t._v("image-webpack-loader")]),t._v(" 进行压缩图片")]),t._v(" "),a("li",[t._v("图片懒加载，可以用 "),a("code",[t._v("vue-lazyload")]),t._v(" 插件实现\n"),a("strong",[t._v("问题")]),t._v("："),a("code",[t._v("vue-lazyload")]),t._v(" 如何实现？考查 "),a("code",[t._v("Vue 插件、指令")])])])]),t._v(" "),a("li",[a("p",[t._v("利用挂载节点会被替换的特性优化白屏问题")]),t._v(" "),a("p",[t._v("我们可以在"),a("code",[t._v('<div id="app"></div>')]),t._v("里添加首屏的静态页面。等真正的首屏加载出来后就会把"),a("code",[t._v('<div id="app"></div>')]),t._v("这块结构都替换掉，给人一种视觉上的误差，就不会产生白屏")])]),t._v(" "),a("li",[a("p",[t._v("组件库按需引入\n如 "),a("code",[t._v("element UI")]),t._v(" 库，用 "),a("code",[t._v("babel-plugin-component")]),t._v(" 插件实现按需引入")]),t._v(" "),a("p",[t._v("在根目录下 "),a("code",[t._v(".babelrc.js")]),t._v(" 文件中按如下配置：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es2015"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"modules"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"component"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"libraryName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"element-ui"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"styleLibraryName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"theme-chalk"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其中 "),a("code",[t._v("libraryName")]),t._v(" 为组件库的名称，"),a("code",[t._v("styleLibraryName")]),t._v(" 为组件库打包后样式存放的文件夹名称。")]),t._v(" "),a("p",[a("strong",[t._v("问题")]),t._v("："),a("code",[t._v("babel-plugin-component")]),t._v(" 是如何做到按需加载的？")]),t._v(" "),a("p",[t._v("其实 b"),a("code",[t._v("abel-plugin-component")]),t._v(" 插件是 element 用 "),a("code",[t._v("babel-plugin-import")]),t._v(" 插件改造后特定给 element UI 使用。一般的组件库还是 "),a("code",[t._v("babel-plugin-import")]),t._v(" 插件实现按需引入。")])]),t._v(" "),a("li",[a("p",[t._v("打包优化：")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("webpack-bundle-analyzer")]),t._v(" 可以帮助你可视化的分析打包后的各个资源的大小")])]),t._v(" "),a("li",[a("p",[t._v("利用 "),a("code",[t._v("import()")]),t._v(" 异步引入组件实现按需引入")]),t._v(" "),a("p",[t._v("路由懒加载，所谓的懒加载就是用 "),a("code",[t._v("import()")]),t._v(" 异步引入组件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'views/home.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'views/home.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("resolve 方式打包会把所有组件的代码都打包在一个 js 文件。预期应该是每个组件的代码都被打包成对应的 js 文件，加载组件时会对应加载 js 文件，这才是懒加载。")]),t._v(" "),a("ul",[a("li",[t._v("可以使用 "),a("code",[t._v("webpackChunkName: chunk")]),t._v(" 文件的名称， [request]表示实际解析的文件名")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "[request]" */')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`views/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("component"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("使用懒加载后，浏览器的 network 就会出现 "),a("code",[t._v("Purpose: prefetch")]),t._v("，只是预取（"),a("code",[t._v("prefetch")]),t._v("）一下，没有返回内容的。目的是告诉浏览器，空闲的时候给我加载这个 "),a("code",[t._v("js 文件")]),t._v("。直到真正加载这个路由组件时，这个 "),a("code",[t._v("js 文件")]),t._v("再次被加载")])]),t._v(" "),a("p",[a("strong",[t._v("扩展")]),t._v("："),a("code",[t._v("preload")]),t._v(" 和 "),a("code",[t._v("prefetch")]),t._v(" 的区别")]),t._v(" "),a("p",[a("code",[t._v("preload")]),t._v("（预加载）：可以强制浏览器在不阻塞 "),a("code",[t._v("document")]),t._v(" 的 "),a("code",[t._v("onload")]),t._v(" 事件的情况下请求资源")]),t._v(" "),a("p",[a("code",[t._v("prefetch")]),t._v("（懒加载）： 告诉浏览器这个资源将来可能需要，但是什么时间加载这个资源是由浏览器来决定的")])]),t._v(" "),a("li",[a("p",[t._v("利用 "),a("code",[t._v("externals")]),t._v(" 提取第三方依赖并用 "),a("code",[t._v("CDN")]),t._v(" 引入")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("Webpack")]),t._v(" 中的 "),a("code",[t._v("externals")]),t._v(" 配置选项，可避免将第三方依赖打包，而是在项目运行时从外部获取第三方依赖。")])]),t._v(" "),a("li",[a("p",[t._v("利用 "),a("code",[t._v("SplitChunks")]),t._v(" 插件提取公共 "),a("code",[t._v("js 代码")]),t._v("和 "),a("code",[t._v("分割 js 代码")])])]),t._v(" "),a("li",[a("p",[t._v("压缩 "),a("code",[t._v("图片")]),t._v("、"),a("code",[t._v("HTML")]),t._v("、"),a("code",[t._v("CSS")]),t._v("、"),a("code",[t._v("JS")]),t._v(" 等静态资源")])])])]),t._v(" "),a("li",[a("p",[t._v("项目部署的优化")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("识别 "),a("code",[t._v("gzip")]),t._v(" 压缩是否开启")]),t._v(" "),a("p",[t._v("只要看响应头部（Response headers）中 有没有 "),a("code",[t._v("Content-Encoding: gzip")]),t._v(" 这个属性即可，有代表有开启 "),a("code",[t._v("gzip")]),t._v(" 压缩。")])]),t._v(" "),a("li",[a("p",[t._v("在 Nginx 上开启 gzip 压缩")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("nginx/conf/nginx.conf")]),t._v(" 中配置")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http {\n   // on | off ，默认为off，on为开启gzip，off为关闭gzip\n   gzip  on;\n   // number，压缩起点，文件大于多少才进行压缩，单位默认为字节，也可用k表示千字节\n   gzip_min_length 1k;\n   // 压缩级别，1-9，数字越大，压缩后的大小越小，也越占用CPU，花费时间越长\n   gzip_comp_level 5;\n   // 需要进行压缩的文件类型。类型去Response headers中看Content-Type属性\n   gzip_types application/javascript image/png image/gif image/jpeg text/css text/plain;\n   // number size，设置系统获取几个单位的缓存用于存储gzip的压缩结果数据流(例如 4 4k代表以4k为单位，按照原始数据大小以4k为单位的4倍申请内存。如原始数据大小为17K，则申请 （17/4）*4 = 17k内存)\n   gzip_buffers 4 4k;\n   // 设置gzip压缩针对的HTTP协议版本以上\n   gzip_http_version 1.1;\n   // on | off，是否在http header中添加Vary:Accept-Encoding，on表示添加。Vary:Accept-Encoding告诉代理服务器缓存两种版本的资源：压缩和非压缩，避免一个浏览器不支持压缩资源，而先请求了服务器，服务器缓存了非压缩的资源，然后一个浏览器支持压缩资源，再去请求了服务器，结果得到非压缩资源，但是又去解压它，结果会出错。所以建议设置为on\n   gzip_vary on;\n}\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在 "),a("code",[t._v("Webpack")]),t._v(" 上开启 "),a("code",[t._v("gzip")]),t._v(" 压缩\n利用 "),a("code",[t._v("CompressionWebpack")]),t._v(" 插件来实现 "),a("code",[t._v("gzip")]),t._v(" 压缩")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("CompressionWebpack")]),t._v(" 参数详解：")]),t._v(" "),a("ol",[a("li",[t._v("test：String|RegExp|Array<String|RegExp>，资源的名称符合条件的才会被压缩，默认为 undefined，即全部符合，例如只要压缩 js 文件")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompressionPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js(\\?.*)?$/i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("include：String|RegExp|Array<String|RegExp>，资源的名称符合条件的才会被压缩，默认为 undefined，是在 test 参数的范围内在进行筛选，满足 test 参数的条件，且满足 include 参数的条件的资源才会被压缩")]),t._v(" "),a("li",[t._v("exclude：String|RegExp|Array<String|RegExp>，压缩时排除资源的名称符合条件的资源，默认为 undefined，是在 test 参数的范围内在进行排除，满足 test 参数的条件，不满足 exclude 参数的条件的资源才会被压缩")]),t._v(" "),a("li",[t._v("algorithm：压缩算法/功能，默认 gzip，一般不做更改")]),t._v(" "),a("li",[t._v("compressionOptions，对 algorithm 参数所选用的压缩功能的参数设置，一般用来设置压缩级别，1-9，数字越大，压缩后的大小越小，也越占用 CPU，花费时间也越长")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompressionPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        compressionOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[t._v("threshold：Number，设置被压缩资源的最小大小，单位为字节。默认为 0")]),t._v(" "),a("li",[t._v("minRatio：Number，设置压缩比率，压缩比率 = 压缩后的资源的大小/压缩后的资源，小于压缩比率的资源才会被压缩。和 threshold 参数是‘与’的关系")]),t._v(" "),a("li",[t._v("filename：类型：String|Function，设置压缩资源后的名称，默认值：[path].gz[query]，[file]被替换为原始资产文件名。 [path]替换为原始资产的路径。 [dir]替换为原始资产的目录。 [name]被替换为原始资产的文件名。 [ext]替换为原始资产的扩展名。 [query]被查询替换")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompressionPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(".gz")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Nginx")]),t._v(" 和 "),a("code",[t._v("Webpack")]),t._v(" 压缩的区别")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("不管 Nginx 还是 Webpack 压缩，在 Nginx 中都要开启 gzip 压缩，不然浏览器加载还是未压缩的资源。")]),t._v(" "),a("p",[t._v("还可以在 Nginx 加上 gzip_static on;的配置。gzip_static 启用后， 浏览器请求资源时，Nginx 会先检查是否存该资源名称且后缀为.gz 的文件，如果有则直接返回该 gz 文件内容，可以避免 Nginx 对该资源再进行 gzip 压缩，浪费服务器的 CPU。")])]),t._v(" "),a("li",[a("p",[t._v("用 Nginx 压缩会占用服务器的 CPU，浏览器每次请求资源，Nginx 会对该资源实时压缩，压缩完毕后才会返回该资源，如果资源很大的话，还是压缩级别设置很高，都会导致返回资源的时间过长，造成不好的用户体验。")])]),t._v(" "),a("li",[a("p",[t._v("用 Webpack 会使打包时间变长。但是用 CompressionPlugin 插件压缩，会有缓存，可以相对减少打包时间。")])]),t._v(" "),a("li",[a("p",[t._v("建议 Nginx 和 Webpack 压缩都开启压缩，且在 Nginx 加上 gzip_static on;的配置，减少服务器的 CPU 的使用，当然还是要根据项目的情况实际选择。")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("nginx")]),t._v(" 配置 "),a("code",[t._v("vue")]),t._v(" 项目缓存")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("vue")]),t._v(" 的所有资源修改后打包出来的名称都会改变，所以可以使用强缓存，对 "),a("code",[t._v("css")]),t._v("、"),a("code",[t._v("js")]),t._v("、"),a("code",[t._v("png")]),t._v("、"),a("code",[t._v("ttf")]),t._v("、"),a("code",[t._v("jpg")]),t._v(" 等")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("location ~* \\.(css|js|png|jpg|jpeg|gif|gz|svg|mp4|ogg|ogv|webm|htc|xml|woff)$ {\n    access_log off;\n    add_header Cache-Control max-age=604800;\n}\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("html")]),t._v(" 文件因为名称不会改变，所以使用 "),a("code",[t._v("协商缓存")]),t._v("，html 文件有改动就会立即更新, "),a("code",[t._v("max-age=no-cache")]),t._v(" 代表进入协商缓存，文件改动会自动更新，不改动会返回 304")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("location ~* \\.(html)$ {\n    access_log off;\n    add_header  Cache-Control  max-age=no-cache;\n}\n")])])])])])])])])]),t._v(" "),a("h2",{attrs:{id:"_2-常见的性能优化手段？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-常见的性能优化手段？","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 常见的性能优化手段？")]),t._v(" "),a("ol",[a("li",[t._v("减少 http 请求")]),t._v(" "),a("li",[t._v("使用 http2")]),t._v(" "),a("li",[t._v("静态资源使用 CDN")]),t._v(" "),a("li",[t._v("将 CSS 放在文件头部，JavaScript 文件放在底部")]),t._v(" "),a("li",[t._v("使用字体图标 iconfont 代替图片图标")]),t._v(" "),a("li",[t._v("设置缓存，强缓存，协商缓存")]),t._v(" "),a("li",[t._v("压缩文件，css(MiniCssExtractPlugin),js(UglifyPlugin),html(html-webpack-plugin)文件压缩，清除无用的代码，tree-shaking（需要 es6 的 import 才支持），gzip 压缩(compression-webpack-plugin)")]),t._v(" "),a("li",[t._v("splitChunks 分包配置，optimization.splitChunks 是基于 SplitChunksPlugin 插件实现的")]),t._v(" "),a("li",[t._v("图片优化、图片压缩")]),t._v(" "),a("li",[t._v("webpack 按需加载代码，hash，contenthash")])]),t._v(" "),a("h2",{attrs:{id:"_3-骨架屏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-骨架屏","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 骨架屏")]),t._v(" "),a("h2",{attrs:{id:"_4-减少首屏渲染时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-减少首屏渲染时间","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 减少首屏渲染时间")]),t._v(" "),a("h2",{attrs:{id:"_5-前端性能监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-前端性能监控","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. 前端性能监控")]),t._v(" "),a("p",[a("strong",[t._v("前端监控")]),t._v("：它指的是通过一定的手段来获取用户行为以及跟踪产品在用户端的使用情况，并以监控数据为基础，为产品优化指明方向，为用户提供更加精确、完善的服务。")]),t._v(" "),a("p",[a("code",[t._v("前端监控")]),t._v(" 一般分为三大类：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("数据监控")]),t._v("（监控用户行为）\n"),a("ol",[a("li",[t._v("PV/UV：PV 即页面浏览器或点击率；UV 即访问某个站点或点击某条新闻的不同 IP 地址的人数")]),t._v(" "),a("li",[t._v("用户在每一个页面的停留时间")]),t._v(" "),a("li",[t._v("用户通过什么入口来访问该网页")]),t._v(" "),a("li",[t._v("用户在相应的页面中触发的行为...等")])])]),t._v(" "),a("li",[a("strong",[t._v("性能监控")]),t._v("（监控页面性能）\n"),a("ol",[a("li",[t._v("不同用户，不同机型和不同系统下的首屏加载时间")]),t._v(" "),a("li",[t._v("白屏时间")]),t._v(" "),a("li",[t._v("http 等请求的响应时间")]),t._v(" "),a("li",[t._v("静态资源整体下载时间")]),t._v(" "),a("li",[t._v("页面渲染时间...等")])])]),t._v(" "),a("li",[a("strong",[t._v("异常监控")]),t._v("（监控产品、系统异常）\n"),a("ol",[a("li",[t._v("JavaScript 的异常监控")]),t._v(" "),a("li",[t._v("样式丢失的异常监控...等")])])])]),t._v(" "),a("h2",{attrs:{id:"_7-前端性能埋点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-前端性能埋点","aria-hidden":"true"}},[t._v("#")]),t._v(" 7. 前端性能埋点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("埋点的三种方法：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("手动埋点")]),t._v("（代码埋点）：在需要埋点的业务逻辑功能位置调用接口，上报埋点数据（像友盟、百度统计、神策）\n"),a("strong",[t._v("缺点")]),t._v("：项目工程量大，需要埋点的位置太多")]),t._v(" "),a("li",[a("code",[t._v("可视化埋点")]),t._v("（通过可视化交互的手段，代替上述的代码埋点。将业务代码和埋点代码分离）\n"),a("strong",[t._v("缺点")]),t._v("：埋点的控件有限，不能手动定制")]),t._v(" "),a("li",[a("code",[t._v("无埋点")]),t._v("（前端自动采集全部事件，上报埋点数据，由后端来过滤和计算出有用的数据）\n"),a("strong",[t._v("优点")]),t._v("：前端只要一次加载埋点脚本；"),a("strong",[t._v("缺点")]),t._v("：流量和采集的数据过于庞大，服务器性能压力大")])])]),t._v(" "),a("li",[a("p",[t._v("埋点上报的方式：")]),t._v(" "),a("ol",[a("li",[t._v("图片（优先考虑 GIF）\n"),a("strong",[t._v("优点")]),t._v("：防止跨域、防止阻塞页面加载，影响用户体验、相比 PNG/JPG，GIF 的体积最小")])]),t._v(" "),a("p",[t._v("大多采用的是 "),a("code",[t._v("1*1")]),t._v(" 像素的透明 "),a("code",[t._v("GIF")]),t._v(" 来上报")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Beacon 用于将数据异步发送到服务器。navigator.sendBeacon(url, data);")])])])])])}],!1,null,null,null);s.default=e.exports}}]);