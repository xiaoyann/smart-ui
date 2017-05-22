<div>
<h2>Toast</h2>
<p>
  <code>Toast</code> 是全局的，提供了 <code>show(content, position = 'center', time = 2000, callback)</code>方法直接调用就行。
</p>

<p>参数说明：</p>

<ul>
  <li>
    <code>content</code>：要显示的信息
  </li>
  <li>
    <code>position</code>：在页面中的位置，可选的值为：<code>top</code>, <code>center</code>, <code>bottom</code>
  </li>
  <li>
    <code>time</code>：显示的时长，默认 2000 毫秒
  </li>
  <li>
    <code>callback</code>：可传递一个回调函数在组件隐藏后执行
  </li>
</ul>

<smart-demo :source="source">

<ul slot="demo">
  <li>
    <a href="javascript:;" @click="open('top')">Show Toast in the top of page</a>
  </li>
  <li>
    <a href="javascript:;" @click="open('center')">Show Toast in the middle of page</a>
  </li>
  <li>
    <a href="javascript:;" @click="open('bottom')">Show Toast in the bottom of page</a>
  </li>
</ul>

</smart-demo>

<h2><code>zIndex(idx)</code></h2>
<p>
  该方法用于动态设置 <code>Toast</code> 的 css z-index。返回 <code>Toast</code> 实例，支持链式调用。
</p>

<smart-code
  lang="js"
  code="this.$toast.zIndex(100).show('哈哈')"
/>
</div>
