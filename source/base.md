
<h2 class="gmp-h" id="gmp-intro">说明</h2>

<p class="gmp-para-lead">基础样式主要定义在<code>common.css</code>中。包括字体、颜色、标题、文本、链接、图片、表单元素等基础元素的样式定义。</p>

<h2 class="gmp-h" id="gmp-base">默认样式</h2>

<p class="gmp-para-lead">默认样式设置了一些基本元素在没有引用样式类的情况下呈现的样式。</p>

<h3 class="gmp-h" id="gmp-base-body">Body定义</h3>

``` css
body{
    color: #4d4d4d;
    background-color: #fff;
    -webkit-backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
}
```

<h3 class="gmp-h" id="gmp-base-font">字体</h3>

```css
body, input, select, textarea, button{
    font: 12px/1.5 arial, sans-serif;
    outline: none;
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
    color: #06d;
}
a:hover{
    color: #d9363c;
    text-decoration: underline;
}
```

<h3 class="gmp-h" id="gmp-base-link">图片</h3>

```css
img{
    vertical-align: middle;
}
```

<h2 class="gmp-h" id="gmp-class">基础样式</h2>

基础样式定义了简单的、非组件类的公共样式。

<h3 class="gmp-h" id="gmp-class-font">文本颜色</h3>

<div class="gmp-example">
    <p class="red">红色强调文本</p>
    <p class="yellow">黄色强调文本</p>
    <p class="green">绿色强调文本</p>
    <p class="gray">辅助灰色文本</p>
    <p class="gray-light">辅助浅灰色文本</p>
</div>

```html
<p class="red">红色强调文本</p>
<p class="yellow">黄色强调文本</p>
<p class="green">绿色强调文本</p>
<p class="gray">辅助灰色文本</p>
<p class="gray-light">辅助浅灰色文本</p>
```

<h3 class="gmp-h" id="gmp-class-bg">背景颜色</h3>

<div class="gmp-example">
    <div class="gmp-example-item">
        <div class="bg-red">红色背景区块</div>
    </div>
    <div class="gmp-example-item">
        <div class="bg-yellow">黄色背景区块</div>
    </div>
    <div class="gmp-example-item">
        <div class="bg-green">绿色背景区块</div>
    </div>
    <div class="gmp-example-item">
        <div class="bg-blue">蓝色背景区块</div>
    </div>
    <div class="gmp-example-item">
        <div class="bg-gray">灰色背景区块</div>
    </div>
</div>

```html
<div class="bg-red">红色背景区块</div>
<div class="bg-yellow">黄色背景区块</div>
<div class="bg-green">绿色背景区块</div>
<div class="bg-blue">蓝色背景区块</div>
<div class="bg-gray">灰色背景区块</div>
```

<h3 class="gmp-h" id="gmp-class-head">标题</h3>

内容区标题使用 h2 ~ h6 标签，h1 标签只用于用于logo（奇葩的SEO要求另议）。

<h4 class="gmp-h">简单标题：</h4>

<div class="gmp-example">
    <h2>h2.标题文字 32PX</h2>
    <h3>h3.标题文字 24PX</h3>
    <h4>h4.标题文字 16px</h4>
    <h5>h5.标题文字 14px</h5>
    <h6>h6.标题文字 12px</h6>
</div>

```html
<h2>h2.标题文字 32PX</h2>
<h3>h3.标题文字 24PX</h3>
<h4>h4.标题文字 16px</h4>
<h5>h5.标题文字 14px</h5>
<h6>h6.标题文字 12px</h6>
```

<h4 class="gmp-h">标题组：</h4>

标题组一般由标题和其它一些辅助性元素组成，如链接、按钮等。比较常见的结构为标题+更多链接。

<div class="gmp-example">
    <div class="hd">
        <h4 class="h">标题文字<span class="h-sub">辅助文字</span></h4>
        <a href="#" class="h-ope btn btn-s btn-default">更多</a>
    </div>
</div>

```html
<div class="hd">
    <h4 class="h">标题文字<span class="h-sub">辅助文字</span></h4>
    <a href="#" class="h-ope btn btn-s btn-default">更多</a>
</div>
```

<h3 class="gmp-h" id="gmp-class-para">段落</h3>

文本段落使用标签<code>p</code>，同时添加 class <code>.text</code>。默认行高 <strong>1.5</strong>，段落间距 <strong>10px</strong>。

<div class="gmp-example">
    <p class="text">11岁时被诊断出发育荷尔蒙缺乏，会阻碍他的骨骼生长。家里的经济条件难以承受小梅 西的治疗费用。梅西的侏儒症并非不可医治，但是注射生长激素每月花费高达900美元，母队纽维尔老伙计不愿意为一个前途未卜的孩子支付这笔费用，一度觊觎梅西的河床得知他的顽疾后也打消了挖角的念头。</p>
    <p class="text">2000年，被教练库卡看中，被带到了巴塞罗那，梅西也举家搬迁到西班牙。2000年9月，年仅13岁身高只有140cm的梅西去了巴塞罗那青训营拉玛西亚试训。在试训期间，梅西的表现征服了巴萨青年队教练，他们与梅西签订了一份2012年才会到期的工作合同。巴塞罗那俱乐部在帮助梅西成长方面作出了巨大的努力，由于梅西的骨骺线早已闭合，俱乐部专家专门为他制定了腿部系列运动，帮助梅西生长。</p>
</div>

<h3 class="gmp-h" id="gmp-class-list">列表</h3>

<h4 class="gmp-h">默认列表：</h4>

在<code>ul</code>标签上引用class<code>.text-lst</code>。

<div class="gmp-example">
    <ul class="text-lst">
        <li>可以运行在当前任何流行的浏a览器。浏览器可以没有实现ES6的规范；</li>
        <li>提供最基本的AMD方法：define和require；</li>
        <li>被Uglify.js压缩后，应该尽可能的小，但是可读性要强。</li>
    </ul>
</div>

```html
<ul class="text-lst">
    <li>可以运行在当前任何流行的浏a览器。浏览器可以没有实现ES6的规范；</li>
    <li>提供最基本的AMD方法：define和require；</li>
    <li>被Uglify.js压缩后，应该尽可能的小，但是可读性要强。</li>
</ul>
```

<h4 class="gmp-h">有序列表</h4>

有序列表使用标签<code>ol</code>，并引用 class<code>.text-lst</code>。

<div class="gmp-example">
    <ol class="text-lst">
        <li>超八成中国人对未来乐观，你特么逗我呢</li>
        <li>超八成中国人对未来乐观，你特么逗我呢</li>
        <li>超八成中国人对未来乐观，你特么逗我呢</li>
    </ol>
</div>

```html
<ol class="text-lst">
    <li>可以运行在当前任何流行的浏a览器。浏览器可以没有实现ES6的规范；</li>
    <li>提供最基本的AMD方法：define和require；</li>
    <li>被Uglify.js压缩后，应该尽可能的小，但是可读性要强。</li>
</ol>
```

<h3 class="gmp-h" id="gmp-class-inline">内联元素样式</h3>

定义基本的内联元素样式。有些样式可以直接使用未重置样式的标签。其它样式类可以使用<code>s</code>、<code>b</code>、<code>i</code>、<code>span</code>等标签。

<h4 class="gmp-h">加粗：</h4>

使用标签<code>strong</code>。

<div class="gmp-example">
    <strong>加粗文本</strong>
</div>

```html
<strong>加粗文本</strong>
```

<h4 class="gmp-h">下划线：</h4>

使用标签<code>u</code>。

<div class="gmp-example">
    <u>带下划线文本</u>
</div>

```html
<u>带下划线文本</u>
```

<h4 class="gmp-h">斜体：</h4>

中文斜体可读性差，一般很少使用。

<div class="gmp-example">
    <em>斜体文字</em>
</div>

<h4 class="gmp-h">元素分割线：</h4>

默认左右间隔 <strong>5px</strong>，颜色为 <code>#999</code>。

<div class="gmp-example">
    <a href="">链接</a>
    <span class="v-sep">|</span>
    <a href="">链接</a>
</div>

```html
<a href="">链接</a>
<span class="v-sep">|</span>
<a href="">链接</a>
```

<h4 class="gmp-h">文本空白：</h4>

引用 class<code>.text-space</code>。左右间距 <strong>3px</strong>

<div class="gmp-example">
    <p>这是一段文本这是一段<span class="text-space">100</span>文本这是一段文本</p>
</div>





















