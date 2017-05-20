<div>
<h2>Loading</h2>

<p>
  <code>Loading</code> 也是全局的，提供了 <code>show(message)</code> 和 <code>hide</code> 方法来直接调用就行。
</p>

<demo />

<h2><code>zIndex(idx)</code></h2>
<p>
  该方法用于动态设置 <code>Loading</code> 的 css z-index。返回 <code>Loading</code> 实例，支持链式调用。
</p>

<smart-code
  lang="js"
  code="this.$loading.zIndex(100).show()"
/>
</div>
