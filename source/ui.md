<!-- button -->

<h2 class="gmp-h" id="gmp-button">按钮</h2>

文件：<code>button.scss</code>

依赖：<code>_global.scss</code>、<code>_css3.scss</code>

各个项目按钮定义方式相同，颜色不同。默认为中文站颜色，不同项目按钮颜色在<code>_setting.scss</code>中设置。

一般按钮需要添加3个类名：<code>.btn</code>、<code>.btn-size</code>、<code>.btn-type</code>。<code>.btn</code>为基类，所有按钮必须引用。

按钮标签可以使用<code>a</code>、<code>span</code>或<code>button</code>。

按钮 size 分为 5 个尺寸：S（22px）、M（26px）、L（32px）、XL（36px）、XXL（40px）。

按钮 type 分为：default、<span class="red">primary</span>、<span class="red">primary-light</span>、<span class="yellow">sub</span>、<span class="yellow">sub-light</span>、<span class="blue">info</span>、<span class="blue">info-light</span>。

<h3 class="gmp-h" id="gmp-btn-size">常规按钮尺寸定义</h3>

<div class="gmp-example">
    <div class="gmp-example-item">
        <button class="btn btn-info btn-s">最小尺寸按钮</button>
    </div>
    <div class="gmp-example-item">
        <button class="btn btn-info btn-m">常规尺寸按钮</button>
    </div>
    <div class="gmp-example-item">
        <button class="btn btn-info btn-l">大尺寸按钮</button>
    </div>
    <div class="gmp-example-item">
        <button class="btn btn-info btn-xl">较大尺寸按钮</button>
    </div>
    <div class="gmp-example-item">
        <button class="btn btn-info btn-xxl">最大尺寸按钮</button>
    </div>
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

<h4>深色按钮</h4>

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

<h4>浅色按钮</h4>

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

添加<code>.disabled</code>class可以设置按钮为禁用状态。

<div class="gmp-example">
    <button class="btn btn-primary btn-l disabled">禁用状态按钮</button>
</div>

```html
<button class="btn btn-primary btn-l disabled">禁用状态按钮</button>
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

基础引用类为<code>.tip</code>。三种尺寸定义：normal（默认）、middle、big。

<h4>成功提示</h4>

<div class="gmp-example">
    <div class="gmp-example-item">
        <div class="tip tip-succ">
            <i class="icon icon-succ"></i>
            <div class="tip-bd">默认操作成功类提示</div>
        </div>
    </div>
    <div class="gmp-example-item">
        <div class="tip tip-succ tip-nor">
            <i class="icon-2x icon-2x-succ"></i>
            <div class="tip-hd">操作成功类提示</div>
            <div class="tip-bd">
                <p>默认操作成功类提示</p>
            </div>
        </div>
    </div>
</div>
















