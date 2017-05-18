<div>
<h2>ActionSheet</h2>

<p>
<code>ActionSheet</code> 不同于其他组件，一个应用中同时只可能打开一个，它应该是全局的。所以在整个应用中我们只需要实例化一个该组件的实例。<code>smart-ui</code> 在加载后就自动实例化了该组件，挂载到页面中。并提供了相应的 <code>api</code> 进行调用。而且对于 <code>ActionSheet</code>, <code>Alert</code>, <code>Dialog</code> 等组件更适合这种命令式的方式。
</p>

<div style="padding-top: 15px">
  <smart-code
    lang="js"
    code="this.$actionsheet.show(title, options, hideCancel = false)"
  />

  <ul>
    <li>
      <code>title</code>: String 类型, 标题
    </li>
    <li>
      <code>options</code>: Array 类型, 每个 option 是一个对象
      <ul>
        <li><code>option.text</code>: String, 选项标题</li>
        <li><code>option.disable</code>: Boolean, 是否禁用，禁用后不可点击</li>
        <li><code>option.destructive</code>: Boolean, 是否是危险操作, 危险操作会被显示为红色</li>
        <li><code>option.onSelect</code>: Function, 被选择时执行</li>
      </ul>
    </li>
    <li>
      <code>hideCancel</code>: Boolean, 是否隐藏取消按钮，默认为 false
    </li>
  </ul>
</div>

<div style="padding: 15px 0 20px">
<smart-code
  lang="js"
  code="this.$actionsheet.hide()"
/>

<p>
手动隐藏 <code>ActionSheet</code>，一般用不到。
</p>

</div>

<demo />

<h2><code>config(option)</code></h2>

<p>
可全局配置 <code>ActionSheet</code> 的主题颜色和<code>z-index</code>
</p>

<ul>
  <li>
    <code>option.tintColor</code>: String 类型, 选项的标题颜色
  </li>
  <li>
    <code>option.zIndex</code>: Number 类型, css 定位层级(z-index)
  </li>
</ul>

<smart-code
  lang="js"
  code="SmartUI.config('AcitonSheet', {tintColor: 'red', zIndex: 100})"
/>
</div>
