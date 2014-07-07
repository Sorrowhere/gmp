<!-- start -->
<h2 class="gmp-h" id="start">开始</h2>

<h3 class="gmp-h" id="introduction">维护说明</h3>

百卓规范库包括视觉规范、前端规范。所有规范文档（page）均在浏览器中维护，包括<a href="/page">新建文档</a>、<a href="/#/list">文档管理</a>、文档编辑。

支持markdown语法，同时可以直接使用html标签，html标签支持Emmet语法。注意：如使用div、table、p、pre等区块标签，必须在开始和结束标签前后添加空行以避免生成多余p标签。同时开始和结束标签不能使用缩进。
更多语法参考：<a href="http://www.ituring.com.cn/article/504" target="_blank">markdown语法</a>。

标题使用h2~h6，需严格按照内容层级使用。左侧菜单根据h2和h3两级标题生成。一级内容区块必须以h2标签开始。h2和h3标签须添加<code>.gmp-h</code>和相应内容ID。

代码块外层不能嵌套任何结构。

示例结构：

```html
<!-- 空行 -->
<h2 class="gmp-h" id="start">开始</h2>
<!-- 空行 -->
<h3 class="gmp-h" id="introduction">维护说明</h3>
<!-- 空行 -->
此处为普通文本段落，可以直接书写，也可以手动添加p标签。

```

