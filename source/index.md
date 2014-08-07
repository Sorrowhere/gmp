<!-- start -->

<h2 class="gmp-h" id="gmp-matain">维护说明</h2>

所有规范文档（page）均在浏览器中维护，包括<a href="/page">新建文档</a>、<a href="/#/list">文档管理</a>、文档编辑。

支持markdown语法，同时可以直接使用html标签，html标签支持Emmet语法。注意：如使用<code>div</code>、<code>table</code>、<code>p</code>、<code>pre</code>等区块标签，必须在开始和结束标签前后添加空行以避免生成多余p标签。同时开始和结束标签不能使用缩进。
更多语法参考：<a href="http://www.ituring.com.cn/article/504" target="_blank">markdown语法</a>。

标题使用h2~h6，需严格按照内容层级使用。左侧菜单根据h2和h3两级标题生成。一级内容区块必须以h2标签开始。h2、h3标签须添加<code>.gmp-h</code>和相应内容ID。文本段落（p）无需添加class。div区块添加<code>.gmp-section</code>。文档内所有样式class定义以<code>.gmp-</code>为前缀，以避免组件库的样式定义冲突。

h2标题ID命名格式：<code>.gmp-区块英文名</code>。

h3标题ID命名格式：<code>.gmp-区块英文名-当前区块英文名</code>

代码块外层不能嵌套任何结构。

示例结构：

```html
<!-- 空行 -->
<h2 class="gmp-h" id="gmp-html">HTML相关规范</h2>
<!-- 空行 -->
<h3 class="gmp-h" id="gmp-html-doctype">HTML文档类型</h3>
<!-- 空行 -->
此处为普通文本段落，可以直接书写，也可以手动添加p标签。

<!-- 空行 -->
<h3 class="gmp-h" id="gmp-html-rule">HTML标签使用</h3>

<div class="gmp-section">
    此处为其它复杂结构
</div>

```

文档中所需图片拷贝到<code>/public/img/doc</code>文件夹下，命名格式为：<code>docname_imgname.jpg|png|gif</code>

CSS预编译处理使用SASS，版本号 <strong>3.3.12</strong>。

<h2 class="gmp-h" id="gmp-spec">规范说明</h2>

百卓规范库包括视觉规范、前端规范。前端规范包括Sass、基础样式（base）、样式组件（ui）、功能（utility）、百卓公共组件（abiz）、中文公共组件（cn）。

所有样式均通过Sass来编写，不能直接编辑<code>css</code>文件。由于目前各项目都没有增加Sass编译功能，所以直接拷贝样式文件到项目中（以后会添加下载功能）。规范库中的样式更新必须及时更新到项目中。

<h3 class="gmp-h" id="gmp-spec-file">样式组织结构</h3>

<pre class="hljs">
style/
|-- sass/
|   |-- base/
|   |   |-- reset.scss
|   |   |-- atom.scss
|   |   |-- grid.scss
|   |   |-- common.scss
|   |   |-- ...
|   |-- ui/
|   |   |-- button.scss
|   |   |-- tip.scss
|   |   |-- pop.scss
|   |   |-- form.scss
|   |   |-- table.scss
|   |   |-- font_icon.scss
|   |   |-- ...
|   |-- utility/
|   |   |-- animation.scss
|   |   |-- align.scss
|   |-- site/
|   |   |-- _setting.scss
|   |   |-- unit/
|   |   |   |-- search.scss
|   |   |   |-- select.scss
|   |   |   |-- area.scss
|   |   |   |-- ...
|   |   |-- component/
|   |   |   |-- top.scss
|   |   |   |-- header.scss
|   |   |   |-- nav.scss
|   |   |   |-- footer.scss
|   |   |   |-- ...
|   |   |-- module_example/
|   |   |   |-- page_example.scss
|   |   |   |-- page_example.scss
|   |   |-- ...
|   |-- lib/
|   |   |   |-- _css3.scss
|   |   |   |-- _font_icon.scss
|   |   |   |-- _media_query.scss
|   |   |   |-- _global.scss
|   |   |   |-- ...
|   |-- fonts/
|-- css/
|   |-- ...
</pre>

以上结构为Sass文件结构，css结构与之相同。

<code>base/</code>、<code>utility/</code>、<code>lib/</code>属于全局公共样式，不涉及视觉样式，各个项目统一，无需修改。

<code>site/</code>，原<code>module/</code>，为具体项目样式。

<code>import/</code>为Sass引用文件，不会编译成样式文件。禁止在页面中直接引用。

<code>_setting.scss</code>为项目Sass参数配置文件，定义根据项目重置的全局变量和UI变量，以实现UI定制。

<code>fonts/</code>存放字体图标文件。





