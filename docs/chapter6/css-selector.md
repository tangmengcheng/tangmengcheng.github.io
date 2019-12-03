# CSS3 常见选择器

1. 通用选择器

```
* { margin: 0; padding: 0; }
```

2. ID 选择器

```
#container { border: 1px solid black; }
```

3. 类选择器

```
.box { color: red; }
```

4. 标签选择器

```
a { color: red; }
ul { margin-left: 0; }
```

5. 伪类选择器

```
a:link { color: red; }
a:visted { color: purple; }
```

6. 子元素选择器

```
#container > ul { border: 1px solid black; }
```

7. 属性选择器

```
a[title] { color: green; }
a[href="http://js8.in"] { color: #1f6053; /* nettuts green */ }
a[href*="tuts"] { color: #1f6053; /* nettuts green */ }
a[href^="http"] { background: url(path/to/external/icon.png) no-repeat; padding-left: 10px; }
a[href$=".jpg"] { color: red; }
```

8. :hover

```
a:hover {font-size: 30px}
```

8. :after & :before

```
a:after { content: ""; display: block; clear: both; visibility: hidden; font-size: 0; height:0;}
```

9. :not(selector)

```
*:not(p) { color: green; }
```

10. p::first-line & p::first-letter

```
匹配元素的第一行和第一个字母
```

11. :nth-child(n) & :nth-last-child(n)

```
li:nth-child(3) { color: red; }
li:nth-last-child(2) { color: red; }  匹配倒数第二个li标签
```
