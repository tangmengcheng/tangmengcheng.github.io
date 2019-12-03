# 深入理解CSS3盒模型

## 标准模型 和IE模型
- 盒模型由里向外content,padding,border,margin组成.
- 盒模型是有两种类型，一个是标准模型，一个是IE模型.
![标准模型](./images/biaozhun-box.png)
![标准模型](./images/ie-box.png)
- 由图可得：盒模型的宽高只是内容（content）的宽高，而在IE模型中盒模型的宽高是内容(content)+填充(padding)+边框(border)的总宽高.

## CSS设置这两种模型
- 通过CSS3的box-sizing属性设置两种模型
- 标准模型：box-sizing: content-box
- IE模型： box-sizing: border-box

## JS如何设置获取盒模型对应的宽和高
- 通过JS获取盒模型对应的宽和高，有以下几种方法：

1. dom.style.width/height 这种方式只能取到dom元素内联样式所设置的宽高，也就是说如果该节点的样式是在style标签中或外联的CSS文件中设置的话，通过这种方法是获取不到dom的宽高的
2. dom.currentStyle.width/height 这种方式获取的是在页面渲染完成后的结果，就是说不管是哪种方式设置的样式，都能获取到。但这种方式只有IE浏览器支持。
3. window.getComputedStyle(dom).width/heigth 这种方式的原理和2是一样的，这个可以兼容更多的浏览器，通用性好一些。
4. dom.getBoundingClientRect().width/height 这种方式是根据元素在视窗中的绝对位置来获取宽高的
5. dom.offsetWidth/offsetHeight 这个就没什么好说的了，最常用的，也是兼容最好的。
## BFC
- BFC全英文拼写为 Block Formatting Context 直译为“块级格式化上下文”

### BFC原理
1. 内部的box会在垂直方向，一个接一个的放置
2. 每个元素的margin box的左边，与包含块border box的左边相接触（对于从做往右的格式化，否则相反）
3. box垂直方向的距离由margin决定，属于同一个bfc的两个相邻box的margin会发生重叠
4. bfc的区域不会与浮动区域的box重叠
5. bfc是一个页面上的独立的容器，外面的元素不会影响bfc里的元素，反过来，里面的也不会影响外面的
6. 计算bfc高度的时候，浮动元素也会参与计算

### 创建BFC
1. float属性不为none（脱离文档流）
2. position为absolute或fixed
3. display为inline-block,table-cell,table-caption,flex,inine-flex
4. overflow不为visible
5. 根元素

### BFC应用场景
1. 自适应两栏布局
2. 清除内部浮动 
3. 防止垂直margin重叠