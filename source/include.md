<!-- global -->
<h2 class="gmp-h" id="gmp-intro">说明</h2>

<p class="gmp-para-lead"><code>include/</code>内包含全局参数定义、CSS3辅助方法定义、媒体查询辅助方法定义、字体图标变量定义。Sass变量定义采用骆驼定义法，如：<code>$fontName</code>。</p>

<h2 class="gmp-h" id="gmp-global">全局参数定义</h2>

<p class="gmp-para-lead"><code>_global.scss</code>，包括字体、颜色等相关全局变量的定义。不同项目通过<code>site/_setting.scss</code>定义。</p>

<h3 class="gmp-h" id="gmp-global-ff">字体</h3>

变量名称以<code>ff</code>开头。

``` css
// font family
$ffDefault: arial, sans-serif;
$ffYahei: arial, 'Microsoft Yahei', sans-serif;
$ffSimsun: arial, simsun, sans-serif;
$ffSimhei: arial, simhei, sans-serif;
$ffCode: Monaco, Menlo, Consolas, "Courier New", monospace;
```

<h3 class="gmp-h" id="gmp-global-color">颜色</h3>

以中文站颜色体系为默认值。背景、文字、边框等颜色尽量使用规范中的颜色，不要再使用其它相似颜色。前端在编写代码的时候，如遇到规范中没有的颜色，使用规范中相近颜色代替。

<h4>内贸站视觉定义</h4>

<h5>标准色（主色）：</h5>

<div class="gmp-example gmp-cn">
    <ul class="gmp-color">
        <li class="gmp-color-item gmp-color-main-red">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#d9363c</div>
        </li>
        <li class="gmp-color-item gmp-color-main-yellow">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#ffc20e</div>
        </li>
        <li class="gmp-color-item gmp-color-main-dark">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#231f20</div>
        </li>
    </ul>
</div>

``` css
// 标准颜色定义
// ============================
$mainRed: #d9363c !default;
$mainYellow: #ffc20e !default;
$mainDark: #231f20 !default;
```

<h5>辅助色：</h5>

<div class="gmp-example gmp-cn">
    <ul class="gmp-color">
        <li class="gmp-color-item gmp-color-sub-blue">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#3692d9</div>
        </li>
        <li class="gmp-color-item gmp-color-sub-blue-light">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#50a5e6</div>
        </li>
        <li class="gmp-color-item gmp-color-sub-blue-lighter">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#73c2ff</div>
        </li>
        <li class="gmp-color-item gmp-color-sub-green">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#60bf4c</div>
        </li>
        <li class="gmp-color-item gmp-color-sub-green-light">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#7ed96c</div>
        </li>
        <li class="gmp-color-item gmp-color-sub-green-lighter">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#a1f291</div>
        </li>
        <li class="gmp-color-item gmp-color-sub-yellow">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#d9a22b</div>
        </li>
        <li class="gmp-color-item gmp-color-sub-yellow-light">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#e6b345</div>
        </li>
        <li class="gmp-color-item gmp-color-sub-yellow-lighter">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#ffcf66</div>
        </li>
    </ul>
</div>

``` css
// 辅助颜色定义
// ============================
// 蓝色系
$subBlue: #3692d9 !default;
$subBlueLight: #50a5e6 !default;
$subBlueLighter: #73c2ff !default;
// 绿色系
$subGreen: #60bf4c !default;
$subGreenLight: #7ed96c !default;
$subGreenLighter: #a1f291 !default;
// 橙黄色系
$subYellow: #d9a22b !default;
$subYellowLight: #e6b345 !default;
$subYellowLighter: #ffcf66 !default;
```

<h5>字体颜色：</h5>

<div class="gmp-example gmp-cn">
    <ul class="gmp-color">
        <li class="gmp-color-item gmp-color-main-red">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#d9363c</div>
        </li>
        <li class="gmp-color-item gmp-color-font-green">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#199900</div>
        </li>
        <li class="gmp-color-item gmp-color-font-yellow">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#cc9829</div>
        </li>
        <li class="gmp-color-item gmp-color-font-head">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#333333</div>
        </li>
        <li class="gmp-color-item gmp-color-font-body">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#4d4d4d</div>
        </li>
        <li class="gmp-color-item gmp-color-font-gray">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#666666</div>
        </li>
        <li class="gmp-color-item gmp-color-font-gray-light">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#999999</div>
        </li>
    </ul>
</div>

``` css
// 字体颜色定义，添加前缀 fc-
// ============================
// 强调文字颜色
$fcRed: $mainRed !default;
$fcGreen: #199900 !default;
$fcYellow: #cc9829 !default;
// 常用灰色
$fcGrayDarker: #333 !default;
$fcGrayDark: #4d4d4d !default;
$fcGray: #666 !default;
$fcGrayLight: #999 !default;

// 命名文本颜色
$fcHead: $fcGrayDarker;
$fcText: $fcGrayDark;
$fcComment: $fcGrayLight;

$fcLink: #06d !default;
$fcLinkGray: $fcGrayDark;
$fcLinkHover: $mainRed;
```

<h5>边框颜色：</h5>

<div class="gmp-example gmp-cn">
    <ul class="gmp-color">
        <li class="gmp-color-item gmp-color-bd-gray">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#cccccc</div>
        </li>
        <li class="gmp-color-item gmp-color-bd-gray-light">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#d9d9d9</div>
        </li>
        <li class="gmp-color-item gmp-color-bd-gray-lighter">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#e6e6e6</div>
        </li>
    </ul>
</div>

``` css
// 边框颜色定义
// ============================
$bdGrayDark: #ccc !default;
$bdGray: #d9d9d9 !default;
$bdGrayLight: #e6e6e6 !default;
```

<h5>背景颜色：</h5>

<div class="gmp-example gmp-cn">
    <ul class="gmp-color gmp-color-bg">
        <li class="gmp-color-item gmp-color-bg-red">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#fae6e6</div>
        </li>
        <li class="gmp-color-item gmp-color-bg-red-light">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#ffe5e6</div>
        </li>
        <li class="gmp-color-item gmp-color-bg-blue">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#e6f1fa</div>
        </li>
        <li class="gmp-color-item gmp-color-bg-blue-light">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#e5f4ff</div>
        </li>
        <li class="gmp-color-item gmp-color-bg-green">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#e5fae1</div>
        </li>
        <li class="gmp-color-item gmp-color-bg-green-light">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#eaffe5</div>
        </li>
        <li class="gmp-color-item gmp-color-bg-yellow">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#fcf3de</div>
        </li>
        <li class="gmp-color-item gmp-color-bg-yellow-light">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#fff7e5</div>
        </li>
        <li class="gmp-color-item gmp-color-bg-gray">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#f2f2f2</div>
        </li>
        <li class="gmp-color-item gmp-color-bg-gray-light">
            <div class="gmp-color-block"></div>
            <div class="gmp-color-name">#fafafa</div>
        </li>
    </ul>
</div>

``` css
// 背景颜色定义
// ============================
// 较深颜色
$bgRed: #fae6e6 !default;
$bgBlue: #e6f1fa !default;
$bgGreen: #e5fae1 !default;
$bgYellow: #fcf3de !default;
$bgGray: #f2f2f2 !default;
// 较浅颜色
$bgRedLight: #ffe5e6 !default;
$bgBlueLight: #e5f4ff !default;
$bgGreenLight: #eaffe5 !default;
$bgYellowLight: #fff7e5 !default;
$bgGrayLight: #fafafa !default;

```
<!-- css3 -->
<h2 class="gmp-h" id="gmp-css3">CSS3辅助方法定义</h2>

```html
// Based on: Bourbon
// http://bourbon.io/
```

<h3 class="gmp-h" id="gmp-css3-prefix">浏览器支持设置</h3>

```css
$prefixWebkit: true !default;
$prefixMozilla: true !default;
$prefixMicrosoft: true !default;
$prefixOpera: true !default;
$prefixStandard: true !default; // required for keyframe mixin
```

<h3 class="gmp-h" id="gmp-css3-prefix">添加浏览器前缀</h3>

```css
// Param: property, value, browser prefix group
.selector{
    @include prefixer(border-radius, 5px, webkit moz spec);
}
```

<h3 class="gmp-h" id="gmp-css3-bdr">圆角</h3>

``` css
// 示例
@include border-radius(5px)
//Single Corner
@include border-top-left-radius(5px)
@include border-top-right-radius(5px)
@include border-bottom-left-radius(5px)
@include border-bottom-right-radius(5px)
```

<h3 class="gmp-h" id="gmp-css3-box-sizing">盒模型</h3>

```css
// 示例
// type: border-box | padding-box | content-box
@include box-sizing(content-box);
```

<h3 class="gmp-h" id="gmp-css3-box-shadow">阴影</h3>

```css
// 示例
@include box-shadow(0 0 10px #000)
```

<h3 class="gmp-h" id="gmp-css3-tranform">变形 - Transform</h3>

推荐阅读：<a href="http://www.w3cplus.com/content/css3-transform" target="_blank">CSS3 Transform</a>
```css
// 示例
// transform: rotate | scale | skew | translate |matrix
@include transform(translate(50px) rotate(90deg) scale(1.5) skew(90deg))
// translate:
@include translate(50px)
@include translate3d(50px)
@include translateX(50px)
@include translateY(50px)
@include translateZ(50px)
// rotate:
@include rotate(90deg)
@include rotate3d(90deg)
@include rotateX(90deg)
@include rotateY(90deg)
@include rotateZ(90deg)
// scale:
@include scale(1.5)
@include scale3d(1.5)
@include scaleX(1.5)
@include scaleY(1.5)
@include scaleZ(1.5)
// skew:
@include skew(90deg)
@include skewX(90deg)
@include skewY(90deg)

// transform-origin
// param:
// x-axis: left | center | right   | length | %
// y-axis: top  | center | bottom  | length | %
// z-axis:                           length
// 示例
@include transform-origin(20%) // x-axis
@include transform-origin(50px 50px) // x-axis y-axis
@include transform-origin(left bottom 100px) // x-axis y-axis z-axis
@include transform-origin(bottom left 100px) // y-axis x-axis z-axis

// transform style
// style: flat | preserve-3d
// 示例
@include transform-style(preserve-3d)
```

<h3 class="gmp-h" id="gmp-css3-transition">变换 - Transition</h3>

推荐阅读：<a href="http://www.w3cplus.com/content/css3-transition" target="_blank">CSS3 Transition</a>

```css
// transition: property, duration, animation-type, delay [, *]
// property: 执行变换的属性
// duration: 变换延续的时间
// animation-type: 动画类型（加速，减速..）
// delay: 延迟时间
// 示例
@include transition(background 0.5s ease-in 1s,color 0.3s ease-out)

// transition-property: none | all | css properties
// 示例
@include transition-property(all)
@include transition-property(background, color, opacity)

// transition-duration: <time> [, <time>]* 
// 示例
@include transtion-duration(0.5s, 0.5s)

// transition-timing-function: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>) 
// 示例
@include transition-timing-function(ease-in, ease-in-out)

// transition-delay: <time> [, <time>]* 
// 示例
@include transition-delay(1s)
```

<h3 class="gmp-h" id="gmp-css3-animation">动画 - Animation</h3>

推荐阅读：<a href="http://www.w3cplus.com/content/css3-animation" target="_blank">CSS3 Animation</a>

```css
// 缩写
// animation: name, duration, timing-function, delay, iteration-count, direction, fill-mode, play-state
// 示例
@include animation('example' 10s ease-in 1s infinite)

// 单独属性定义 
// 动画名称：animation-name
// 示例
@include animation-name('example')

// 执行时间：animation-duration
// 示例
@include animation-duration(10s)

// 动画效果：animation-timing-function
// ease | linear | ease-in | ease-out | ease-in-out
// 示例
@include animation-timing-function(ease-in-out)

// 动画延迟时间：animation-delay
// 示例
@include animation-delay(1s)

// 动画执行次数：animation-iteration-count
// infinite | <number>
// 示例
@include animation-iteration-count(10)

// 是否应该轮流反向播放动画：animation-direction
// normal | alternate
// 示例
@include animation-direction(normal)

// 对象动画时间之外的状态：animation-fill-mode
// none | forwards | backwards | both
// 示例
@include animation-fill-mode(none)

// 动画是否正在运行或暂停：animation-play-state
// running | paused
// 示例
@include animation-play-state(running)

// Adds keyframes blocks for supported prefixes, removing redundant prefixes in the block's content
// 示例
@include keyframes(example){
    from{
        background-color:#fff;
    }
    50%{
        background-color:#999;
    }
    to{
        background-color:#000;
    }
}
```

<!-- perpective -->
<h3 class="gmp-h" id="gmp-css3-perspective">3D透视 - Perspective</h3>

<code>perspective</code>属性定义 3D 元素距视图的距离，以像素计。该属性允许改变查看 3D 元素的视图。当为元素定义<code>perspective</code>属性时，其子元素会获得透视效果，而不是元素本身。
perspective 属性只影响 3D 转换元素。

目前浏览器都不支持<code>perspective</code>属性。Chrome 和 Safari 支持替代的<code>-webkit-perspective</code>属性。

```css
// perspective：none | <length>
// 示例
@include perspective(500px)

// perspective-origin: x-axis y-axis
// x-axis: % | left | center | right  | length
// y-axis: % | top  | center | bottom | length
// 示例
@include perspective-origin(50% 30px)

// backface-visibility: visible | hidden
// 示例
@include backface-visibility(visible)
```

<h3 class="gmp-h" id="gmp-css3-gradient">渐变 - Gradient</h3>

```css
// 水平渐变，从左到右
// 示例
@include gradient-horizontal(#333, #ccc);

// 垂直渐变，从上到下
// 示例
@include gradient-vertical(#000 0, #333 30%, #ccc 100%);

// 角度渐变
Example:
@include gradient-directional(45deg, #333 30%, #ccc);

// 径向渐变
// 示例
@include gradient-radial(circle, hsla(120,70%,60%,.9), hsla(360,60%,60%,.9))
```
<!-- media query -->
<h2 class="gmp-h" id="gmp-media">媒体查询辅助方法</h2>

``` html
Author: Rafal Bromirski
http://paranoida.com/
Requirements: Sass 3.2.0+

Landscape: 横屏
Portrait: 竖屏
```

<h3 class="gmp-h" id="gmp-media-screen">Response</h3>

<h4>宽度</h4>

```css
// min, max, min and max
// 示例
@include min-screen(990px);
@include max-screen(1190px);
@include screen(990px, 1190px);
```

<h4>高度</h4>

```css
// min, max, min and max
// 示例
@include min-screen-height(320px);
@include max-screen-height(480px);
@include screen-height(320px, 480px);
```

<h3 class="gmp-h" id="gmp-media-hdpi">HDPI</h3>

```css
// High DPI
// Based on bourbon hidpi-media-queries file:
// https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_hidpi-media-query.scss
// HiDPI mixin. Default value set to 1.3 to target Google Nexus 7
// DPI参考: http://bjango.com/articles/min-device-pixel-ratio/

// 示例
// Param: ratio
@include hdpi(2);
```

<h3 class="gmp-h" id="gmp-media-iphone3">iPhone</h3>

```css
// Param: orientation
// Value: all | landscape | portrait
// 示例
// iphone3
@include iphone3(all){
    // css code here
}
// iphone4
@include iphone4(all){
    // css code here
}
// iphone5/5s
@include iphone5(all){
    // css code here
}
```

<h3 class="gmp-h" id="gmp-media-ipad">iPad</h3>

```css
// Param: orientation
// Value: all | landscape | portrait
// 示例
// ipad
@include ipad(all){
    // css code here
}
// ipad retina
@include ipad-retina(all){
    // css code here
}
```

<h2 class="gmp-h" id="gmp-font">字体图标</h2>

<p class="gmp-para-lead"><code>_font_variable.scss</code>，定义了基本变量、字体图标变量和图标生成方法等。</p>

<h3 class="gmp-h" id="gmp-font-base">基本设置变量</h3>

``` css
// 字体文件路径
$path: '../fonts';
// 字体图标class前缀
$baseClass: icon !default;
```

<h3 class="gmp-h" id="gmp-font-style">基本样式占位符</h3>

``` css
%iconFontBase{
    display: inline-block;
    font-family: IconFont;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
}
```

####可以直接引用基本样式：

```css
.selector{
    @include %iconFontBase;
}
```

<h3 class="gmp-h" id="gmp-font-var">字体图标变量</h3>

<code>$iconNames</code>为list类型，新增字体图标，需要在<code>$iconNames</code>中增加相应名称和编码。

``` css
// 字体文件路径
$iconNames: 
    glass: '\f000',
    music: '\f001',
    search: '\f002',
    envelop-o: '\f003',
    ......
    
```

<h3 class="gmp-h" id="gmp-font-method">字体图标生成方法</h3>

``` css
@function get($iconClassName){
	@each $name in $iconNames{
		@if $iconClassName == nth($name,1){
			@return nth($name,2);
		}
	}
}
```

####使用方法：

```css
.icon-$iconName:before{
    content: get($iconName);
}
```


















