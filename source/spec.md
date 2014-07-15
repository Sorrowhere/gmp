
<!-- html -->
<h2 class="gmp-h" id="spec-html">HTML相关规范</h2>

<h3 class="gmp-h" id="spec-html-doc">HTML文档类型</h3>

HTML文档统一使用HTML5文档类型：

``` html
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    ...
</body>
</html>
```

<h3 class="gmp-h" id="spec-html-rule">HTML标签使用</h3>

使用合适的语义化标签，避免大量<code>div</code>直接堆砌。

HTML标签必须小写，标签必须关闭。

页面嵌套避免不必要的容器层和标签，嵌套层级尽量不超过12级。

内容性图标必须添加alt属性。

<code>table</code>标签只用于数据表现，<span class="red">禁止</span>作为页面布局容器。

标题层级不能错乱。内容区使用<code>h2~h5</code>。

<code>p</code>标签不能包含块级元素。

<span class="red">禁止</span>使用空标签清除浮动。

<span class="red">禁止</span>使用已经废弃的标签。如下：

<table class="gmp-tb">
    <tbody>
        <tr>
            <td><code>font</code></td>
            <td><code>center</code></td>
            <td><code>big</code></td>
            <td><code>strike</code></td>
            <td><code>frame</code></td>
            <td><code>frameset</code></td>
            <td><code>noframes</code></td>
            <td><code>acronym</code></td>
        </tr>
    </tbody>
</table>

<span class="red">禁止</span>使用已经废弃的属性。如下：

<table class="gmp-tb">
    <tbody>
        <tr>
            <td><code>align</code></td>
            <td><code>height(img除外)</code></td>
            <td><code>width(img除外)</code></td>
            <td><code>bgcolor</code></td>
        </tr>
        <tr>
            <td><code>cellpadding(table)</code></td>
            <td><code>cellspacing(table)</code></td>
            <td><code>border</code></td>
            <td></td>
        </tr>
    </tbody>
</table>

<!-- CSS -->
<h2 class="gmp-h" id="spec-css">CSS相关规范</h2>

<p class="gmp-para-lead">CSS结构按照模块化组织，分为：全局公共模块、网站公共模块、底层页面模块。底层页面模块可以是一个页面的样式，也可以是一组相似页面的样式。</p>

<h3 class="gmp-h" id="spec-css-named">CSS命名</h3>

具有明确语义，在具有可读性的前提下尽量简洁。

<span class="red">禁止</span>拼音或拼音缩写命名，使用英文单词或可理解的单词缩写。

<span class="red">禁止</span>使用大写字母命名。

<span class="red">禁止</span>使用单个字母作为类名，如<code>.a</code>、<code>.b</code>

非语义化标签，<span class="red">禁止</span>使用标签名直接作为类名或作为类名的一部分，如<code>.div</code>、<code>.div-main</code>

语义化标签，标签名可以在全局公共模块内作为类名定义使用，在网站公共模块内覆盖定义，但<span class="red">禁止</span>在底层页面模块中单独使用。如<code>.h</code>、<code>.table</code>、<code>.p</code>。

在页面内，CSS模块内结构类名要与模块名相关，如下：

``` html
<div class="tab">
    <ul class="tab-lst">
        <li class="tab-item">
            <a href="#"></a>
        </li>
    </ul>
</div>
```

上面的代码中，<code>ul</code>、<code>li</code>不能直接使用<code>.lst</code>、<code>item</code>等可能在其它组件内也使用的名称，必须加上<code>tab</code>作为范围约束，避免样式冲突。

文件名以<code>“_”</code>作为单词分隔，选择器类名以<code>“-”</code>作为单词分隔。

<h3 class="gmp-h" id="spec-css-selector">CSS选择器</h3>

<span class="red">禁止</span>使用<code>*</code>作为选择器。

选择器使用class定义，避免使用id。

选择器使用不超过4级。

除<code>a</code>、<code>img</code>、<code>li</code>、<code>dt</code>、<code>dd</code>、<code>p</code>、<code>input</code>、<code>select</code>、<code>textarea</code>等具有明确语义或有明确父层结构的标签外，禁止直接将标签作为选择器，须添加class。

使用高效选择器。非必要情况下，<span class="red">禁止</span>在class前加标签名，如<code>div.main</code>。

<h3 class="gmp-h" id="spec-css-define">CSS定义</h3>

样式定义遵循在一个标签上添加多个class的形式，但不宜过多，一般不超过4个为宜。

<span class="red">禁止</span>采用原子样式类堆积的形式，如：

``` html
<div class="red fwb f14 mb10 mt10">
    ...
</div>
```
原子样式类不作为常规样式定义类使用，只作为为一些元素添加区别性样式。

<span class="red">禁止</span>空样式的存在，<code><del>.selector{}</del></code>。

<span class="red">禁止</span>使用表达式。

<span class="red">禁止</span>使用<code>important</code>。

属性使用小写字母书写，尽量使用缩写形式。

字体定义<span class="red">禁止</span>使用中文，使用英文或Unicode字符。

属性值 0 后不加单位。

颜色使用16进制形式书写，尽量使用缩写，如：<code>#aabbcc</code>写成<code>#abc</code>。

内联样式单行书写，外联样式多行书写。同一个文件内不同选择器的相同样式合并且优先定义，再定义各个选择器的特殊样式；选择器多行书写。示例：

```css
.selector1,
.selector2{
    background:#fff url(...) no-repeat;
    height:200px;
    width:200px;
}
.selector2{
    background-position:0 -200px;
    height:300px;
}
```

<h3 class="gmp-h" id="spec-css-hack">浏览器hack</h3>

尽量避免使用hack。

IE下<span class="red">禁止</span>使用<code>&gt;</code>、<code>+</code>等奇葩hack字符。正确hack写法如下：

```css
<!-- IE6 -->
.selector{
    _property: value;
}
<!-- IE6/7 -->
.selector{
    *property: value;
}
<!-- IE -->
.selector{
    property: value\9;
}

```

IE条件注释写法：

``` html
<!--[if IE 6]>
...
<![endif]-->
```

Firefox下hack写法：
``` css
@-moz-document url-prefix(){
    .selector{
        ...
    }
}
```

<h3 class="gmp-h" id="spec-css-zindex">z-index取值</h3>

0-9：相邻元素间的边缘遮盖等。

10-99：元素周围附近的绝对定位元素，如模拟下拉框的下拉层。

100-999：页面范围内的弹出层、遮罩层等。

<h3 class="gmp-h" id="spec-css-font">字体定义</h3>

英文字体使用非衬线字体，默认为<code>arial</code>，中文字体默认为<code>simsun</code>。全局默认字体定义：

```css
body{
    font-family: arial, sans-serif;
}
```

微软雅黑字体定义：

```css
.selector{
    font-family: arial, 'Microsoft Yahei', sans-serif;
}
```

常用中文字体Unicode编码：

```css
Microsoft Yahei: \5FAE\8F6F\96C5\9ED1
Simsun: \5B8B\4F53
Simhei: \9ED1\4F53
```

<h3 class="gmp-h" id="spec-css-img">图片</h3>

装饰性图片尽量少的使用，用雪碧图来拼合图标。

图片必须存为WEB格式。动画图片存为<code>gif</code>格式，常用图标存为<code>png8</code>格式。

banner图片存为<code>jpg</code>格式，单张banner大小尽量不超过200k，压缩比例60%~70%之间，同时避免出现明显压缩过度现象。

<span class="red">禁止</span>直接给大图加宽高来定义缩略图。

<h2 class="gmp-h" id="spec-borwser">浏览器兼容</h2>

针对不同浏览器采用渐进增强方式实现视觉稿。如下表：

<table class="gmp-tb">
    <thead>
        <tr>
            <th>Chrome</th>
            <th>Firefox</th>
            <th>IE9+</th>
            <th>IE8</th>
            <th>IE7</th>
            <th>IE6</th>
            <th>Other</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="bg-green">A</td>
            <td class="bg-green">A</td>
            <td class="bg-green">A</td>
            <td class="bg-blue">B</td>
            <td class="bg-red">C</td>
            <td class="bg-red">C</td>
            <td class="bg-red">C</td>
        </tr>
    </tbody>
</table>

<h4>说明：</h4>

A：按照标准完全实现视觉设计稿所有细节。对于辅助性效果如阴影、圆角、渐变等可用CSS3实现。无兼容性错误；

B：完全实现视觉设计稿重要细节，对于辅助性效果可选择性实现，允许有细微效果差别，无兼容性错误；

C：和视觉设计稿整体效果一致，保证页面不影响正常使用，允许浏览器自身问题导致的细节偏差，无兼容性错误。







