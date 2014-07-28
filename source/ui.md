<!-- button -->

<h2 class="gmp-h" id="gmp-button">按钮</h2>

文件：<code>button.scss</code>

依赖：<code>_global.scss</code>、<code>_css3.scss</code>

各个项目按钮定义方式相同，颜色不同。默认为中文站颜色，不同项目按钮颜色在<code>_setting.scss</code>中设置。

一般按钮需要添加3个类名：<code>.btn</code>、<code>.btn-{size}</code>、<code>.btn-{type}</code>。<code>.btn</code>为基类，所有按钮必须引用。

按钮标签可以使用<code>a</code>、<code>span</code>或<code>button</code>。

按钮 size 分为 5 个尺寸：S（22px）、M（26px）、L（32px）、XL（36px）、XXL（40px）。

按钮 type 分为：default、<span class="red">primary</span>、<span class="red">primary-light</span>、<span class="yellow">sub</span>、<span class="yellow">sub-light</span>、<span class="blue">info</span>、<span class="blue">info-light</span>。

<h3 class="gmp-h" id="gmp-btn-size">常规按钮尺寸定义</h3>

<div class="gmp-example">
    <button class="btn btn-primary btn-s">最小尺寸按钮</button>
    <button class="btn btn-primary btn-m">常规尺寸按钮</button>
    <button class="btn btn-primary btn-l">大尺寸按钮</button>
    <button class="btn btn-primary btn-xl">较大尺寸按钮</button>
    <button class="btn btn-primary btn-xxl">最大尺寸按钮</button>
</div>

```html
<!-- 22px -->
<button class="btn btn-default btn-s">最小尺寸按钮</button>
<!-- 26px -->
<button class="btn btn-default btn-m">一般尺寸按钮</button>
<!-- 32px -->
<button class="btn btn-default btn-l">大尺寸按钮</button>
<!-- 36px -->
<button class="btn btn-default btn-xl">较大尺寸按钮</button>
<!-- 42px -->
<button class="btn btn-default btn-xxl">最大尺寸按钮</button>
```

<h3 class="gmp-h" id="gmp-btn-color">常规按钮颜色定义</h3>

通过不同颜色定义不同类别按钮权重。每种颜色按钮又分为深色和浅色。

<h4 class="gmp-h">深色按钮</h4>

<div class="gmp-example">
    <button class="btn btn-l btn-primary">主色按钮</button>
    <button class="btn btn-l btn-sub">次级按钮</button>
    <button class="btn btn-l btn-info">次级按钮</button>
    <button class="btn btn-l btn-default">次级按钮</button>
</div>

```html
<!-- 主色按钮 -->
<button class="btn btn-l btn-primary">主色按钮</button>
<!-- 次级按钮 -->
<button class="btn btn-l btn-sub">次级按钮</button>
<!-- 次级按钮 -->
<button class="btn btn-l btn-info">次级按钮</button>
<!-- 次级按钮 -->
<button class="btn btn-l btn-default">次级按钮</button>
```

<h4 class="gmp-h">浅色按钮</h4>

<div class="gmp-example">
    <button class="btn btn-l btn-primary-light">主色按钮</button>
    <button class="btn btn-l btn-sub-light">次级按钮</button>
    <button class="btn btn-l btn-info-light">次级按钮</button>
</div>

```html
<!-- 主色按钮 -->
<button class="btn btn-l btn-primary-light">主色按钮</button>
<!-- 次级按钮 -->
<button class="btn btn-l btn-sub-light">次级按钮</button>
<!-- 次级按钮 -->
<button class="btn btn-l btn-info-light">次级按钮</button>
```

<h3 class="gmp-h" id="gmp-btn-disabled">禁用状态按钮</h3>

添加<code>.btn-disabled</code>class可以设置按钮为禁用状态。

<div class="gmp-example">
    <button class="btn btn-primary btn-l btn-disabled">禁用状态按钮</button>
</div>

```html
<button class="btn btn-primary btn-l btn-disabled">禁用状态按钮</button>
```

<h3 class="gmp-h" id="gmp-btn-icon">图标按钮</h3>

为常规类按钮添加class<code>.btn-icon</code>并添加相应图标，可以得到图标按钮。图标按钮使用<code>.btn-m</code>尺寸。

<div class="gmp-example">
    <button class="btn btn-m btn-info btn-icon">
        <i class="icon icon-search"></i>
        图标按钮
    </button>
</div>


<h3 class="gmp-h" id="gmp-btn-dropdown">下拉按钮</h3>

<h3 class="gmp-h" id="gmp-btn-group">按钮组</h3>

按钮组基于已定义的常规按钮，添加容器<code>.btn-group</code>。如果兼容 IE6 - IE8，需要为第一个和最后一个按钮分别添加 class<code>.first</code>和<code>.last</code>。

<div class="gmp-example">
    <div class="btn-group">
        <a href="#" class="btn btn-m btn-default first">按钮</a>
        <a href="#" class="btn btn-m btn-default active">按钮</a>
        <a href="#" class="btn btn-m btn-default">按钮</a>
        <a href="#" class="btn btn-m btn-default">按钮</a>
        <a href="#" class="btn btn-m btn-default last">按钮</a>
    </div>
</div>

```html
<div class="btn-group">
    <a href="#" class="btn btn-m btn-default first">按钮</a>
    <a href="#" class="btn btn-m btn-default active">按钮</a>
    <a href="#" class="btn btn-m btn-default">按钮</a>
    <a href="#" class="btn btn-m btn-default">按钮</a>
    <a href="#" class="btn btn-m btn-default last">按钮</a>
</div>
```

<h2 class="gmp-h" id="gmp-tip">提示</h2>

提示分为常规提示、即时提示、气泡提示。每一种都分为<span class="green">成功</span>、<span class="yellow">警告</span>、<span class="red">报错</span>、<span class="blue">温馨</span>

<h3 class="gmp-h" id="gmp-tip-normal">常规提示</h3>

基础引用类为<code>.tip</code>。三种尺寸定义：normal（默认）、middle、large。默认提示需要添加<code>.tip</code>和<code>.tip-{type}</code>两个类名，中等尺寸和大尺寸提示需要添加<code>.tip</code>、<code>.tip-{type}</code>、<code>.tip-{size}</code>3个类名。

<code>.tip-close</code>为选择性添加。

<h4 class="gmp-h">基本 HTML 格式</h4>

```html
<!-- 外层容器 -->
<div class="tip">
    <!-- 提示图标 -->
    <i class="icon"></i>
    <!-- 提示标题 -->
    <div class="tip-hd">提示标题，中、大尺寸提示显示</div>
    <!-- 提示内容 -->
    <div class="tip-bd">
        提示主要内容
    </div>
</div>
```

<h4 class="gmp-h">成功提示</h4>

<div class="gmp-example">
    <div class="gmp-example-item">
        <div class="tip tip-succ">
            <i class="icon icon-succ"></i>
            <i class="tip-close">×</i>
            <div class="tip-bd">提示正文</div>
        </div>
    </div>
    <div class="gmp-example-item">
        <div class="tip tip-succ tip-m">
            <i class="icon-2x icon-2x-succ"></i>
            <div class="tip-hd">成功类提示</div>
            <div class="tip-bd">
                <p>提示正文</p>
            </div>
        </div>
    </div>
    <div class="gmp-example-item">
        <div class="tip tip-succ tip-l">
            <i class="icon-3x icon-3x-succ"></i>
            <div class="tip-hd">成功类提示</div>
            <div class="tip-bd">
                <h4 class="tip-sub-hd">次级标题</h4>
                <p class="text">CSS结构按照模块化组织，分为：全局公共模块、网站公共模块、底层页面模块。</p>
                <ul class="text-lst">
                    <li>HTML标签必须小写，标签必须关闭。</li>
                    <li>页面嵌套避免不必要的容器层和标签，嵌套层级尽量不超过12级。</li>
                    <li>页面嵌套避免不必要的容器层和标签，嵌套层级尽量不超过12级。</li>
                </ul>
                <div class="tip-links">
                    <a href="#">跳转链接</a>
                    <span class="v-sep">|</span>
                    <a href="#">跳转链接</a>
                    <span class="v-sep">|</span>
                    <a href="#">跳转链接</a>
                    <span class="v-sep">|</span>
                    <a href="#">跳转链接</a>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<!-- 默认大小 -->
<div class="tip tip-succ">
    <i class="icon icon-succ"></i>
    <i class="tip-close">×</i>
    <div class="tip-bd">提示正文</div>
</div>
<!-- 中等大小 -->
<div class="tip tip-succ tip-m">
    <i class="icon-2x icon-2x-succ"></i>
    <div class="tip-hd">成功类提示</div>
    <div class="tip-bd">
        <p>提示正文</p>
    </div>
</div>
<!-- 最大 -->
<div class="tip tip-succ tip-l">
    <i class="icon-3x icon-3x-succ"></i>
    <div class="tip-hd">成功类提示</div>
    <div class="tip-bd">
        <p>提示正文</p>
    </div>
</div>
```

<h4 class="gmp-h">报错提示</h4>

<div class="gmp-example">
    <div class="gmp-example-item">
        <div class="tip tip-error">
            <i class="icon icon-error"></i>
            <i class="tip-close">×</i>
            <div class="tip-bd">提示正文</div>
        </div>
    </div>
    <div class="gmp-example-item">
        <div class="tip tip-error tip-m">
            <i class="icon-2x icon-2x-error"></i>
            <div class="tip-hd">报错类提示</div>
            <div class="tip-bd">
                <p>提示正文</p>
            </div>
        </div>
    </div>
    <div class="gmp-example-item">
        <div class="tip tip-error tip-l">
            <i class="icon-3x icon-3x-error"></i>
            <div class="tip-hd">报错类提示</div>
            <div class="tip-bd">
                <p>提示正文</p>
            </div>
        </div>
    </div>
</div>

```html
<!-- 默认大小 -->
<div class="tip tip-error">
    <i class="icon icon-error"></i>
    <i class="tip-close">×</i>
    <div class="tip-bd">提示正文</div>
</div>
<!-- 中等大小 -->
<div class="tip tip-error tip-m">
    <i class="icon-2x icon-2x-error"></i>
    <div class="tip-hd">报错类提示</div>
    <div class="tip-bd">
        <p>提示正文</p>
    </div>
</div>
<!-- 最大 -->
<div class="tip tip-error tip-l">
    <i class="icon-3x icon-3x-error"></i>
    <div class="tip-hd">报错类提示</div>
    <div class="tip-bd">
        <p>提示正文</p>
    </div>
</div>
```














