
<h2 class="gmp-h" id="gmp-intro">说明</h2>

<p class="gmp-para-lead">基础公共样式主要定义在<code>common.css</code>中。包括字体、颜色、标题、文本、链接、图片、表单元素等基础元素的样式定义。</p>

<h2 class="gmp-h" id="gmp-base">基本元素定义</h2>

<h3 class="gmp-h" id="gmp-base-body">Body定义</h3>

<code>body</code>内主要定义了全局字体、行高、字号、背景。

``` css
body{
    font: 12px/1.3 arial, sans-serif;
    background-color: #fff;
}
```

<h3 class="gmp-h" id="gmp-base-link">链接</h3>

默认蓝色，hover状态为红色加下划线。

<div class="gmp-example">
    <a href="">默认链接样式</a>
</div>

```css
a{
    text-decoration: none;
}
a:link, a:visited{
    color: #05c;
}
a:hover{
    color: #c02;
    text-decoration: underline;
}
```
