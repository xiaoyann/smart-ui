<div>
<h2>Dialog</h2>

<smart-demo :source="source">
<ul slot="demo">
  <li>
    <a href="javascript:;" @click="alert">alert</a>
  </li>
  <li>
    <a href="javascript:;" @click="confirm">confirm</a>
  </li>
  <li>
    <a href="javascript:;" @click="prompt">prompt</a>
  </li>
</ul>
</smart-demo>

<h2>methods</h2>

<h3>
  alert(title, content, buttons)
</h3>

<ul>
  <li>
    <code>title</code>: 标题
  </li>
  <li>
    <code>content</code>: 内容
  </li>
  <li>
    <code>buttons</code>: Object | Array | Function, 按钮。
  </li>
</ul>

<smart-code
  lang="js"
  code="
// 每个按钮由 title 和 onClick 组成，但这两个属性不是必须的
this.$dialog.alert(title, content, {title: '确定', onClick() {}})"
/>
<smart-code
  lang="js"
  code="
// 可以定义多个按钮
this.$dialog.alert(title, content, [{title: '确定', onClick() {}}, {title: '取消', onClick() {}}])"
/>
<smart-code
  lang="js"
  code="
// 不需要对用户的点击做处理时可以不定义 onClick，只定义标题
this.$dialog.alert(title, content, ['确定', '取消'])"
/>
<smart-code
  lang="js"
  code="
// 只需要一个确定按钮时，可以直接传递一个函数，按钮的标题默认为 '确定'
this.$dialog.alert(title, conetnt, function () {})"
/>

<h3>
  <code>confirm(title, content, callback)</code>
</h3>

<ul>
  <li>
    <code>title</code>: 标题
  </li>
  <li>
    <code>content</code>: 内容
  </li>
  <li>
    <code>callback(res)</code>: 用户点击确定按钮时，res 为 <code>true</code>，否则为 <code>false</code>
  </li>
</ul>

<h3>
  <code>prompt(title, callback)</code>
</h3>

<ul>
  <li>
    <code>title</code>: 标题
  </li>
  <li>
    <code>callback(value)</code>: value 为用户输入的内容
  </li>
</ul>

<h3>
  <code>zIndex(index)</code>
</h3>
<p>
  该方法用于动态设置 <code>Dialog</code> 的 css z-index。返回 <code>Dialog</code> 实例，支持链式调用。
</p>

<smart-code
  lang="js"
  code="this.$dialog.zIndex(100).alert('哈哈')"
/>
</div>
