<div>
<h2>TabBar</h2>

<p>
用于固定在 webapp 底部的导航控件，由 <code>TabBar</code> 和 <code>TabBarItem</code> 组成。该组件实现切换页面有两种方式：
</p>

<ul>
  <li>1、通过监听 <code>TabBarItem</code> 的 <code>click</code> 事件，动态修改 <code>TabBarItem</code> 的 <code>selected</code> 属性</li>
  <li>2、使用 <code>TabBarItem</code> 的 <code>to</code> 属性指定一个 <code>route</code>，<code>TabBarItem</code> 被点击时会自动跳转到<code>to</code>指定的页面</li>
</ul>

<demo1 />

<h2>TabBar Props</h2>
<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>类型</th>
      <th>说明</th>
      <th>默认值</th>
      <th>必须</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>fixed</td>
      <td>Boolean</td>
      <td>是否固定在底部</td>
      <td>false</td>
      <td>否</td>
    </tr>
    <tr>
      <td>visible</td>
      <td>Boolean</td>
      <td>是否显示(webapp中，子页面一般不需要展示TabBar)</td>
      <td>true</td>
      <td>否</td>
    </tr>
    <tr>
      <td>bgcolor</td>
      <td>String</td>
      <td>背景颜色，可使用任何 CSS 支持的表示颜色的格式</td>
      <td>rgba(247,247,250,.8)</td>
      <td>否</td>
    </tr>
  </tbody>
</table>

<h2>TabBarItem Props</h2>
<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>类型</th>
      <th>说明</th>
      <th>默认值</th>
      <th>必须</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Tab 的名称</td>
      <td>false</td>
      <td>是</td>
    </tr>
    <tr>
      <td>selected</td>
      <td>Boolean</td>
      <td>标识该 <code>TabBarItem</code> 是否是选中状态</td>
      <td>false</td>
      <td>是</td>
    </tr>
    <tr>
      <td>to</td>
      <td>String</td>
      <td>使用 <code>this.$router.replace</code> 导航到该值所指定的路由</td>
      <td></td>
      <td>否</td>
    </tr>
  </tbody>
</table>

<h2>使用 to 属性实现页面切换</h2>
<demo3 />

<h2>自定义选中 TabBarItem 的样式</h2>

<p>
选中的 <code>TabBarItem</code> 会被添加 <code>selected</code> class 选择器，所以可以用它来自定义样式
</p>

<smart-code lang="css">
.TabBarItem.selected {
  color: #2b8ff7;
}
</smart-code>

<h2>隐藏 TabBar</h2>

<p>
设置 <code>TabBar</code> 的 <code>visible</code> 属性为 <code>false</code> 时可以将其隐藏。比如一个 webapp 的子页面是不需要展示 <code>TabBar</code> 的，我们可以根据当前的 route 是否是根页面来决定是否隐藏。<a href="https://github.com/xiaoyann/smart-ui/blob/master/example/App.vue">查看案例</a>
</p>

<demo2 />

<h2>设置图标</h2>

<p>
图标是可选的。但可以通过 <code>slot</code> 来设置。 <code>slot="icon"</code> 和 <code>slot="icon-selected"</code> 分别代表默认图标和选中时的图标。图标可以是 img，也可以用其他的 html 标签或组件。
</p>

<smart-code lang="html" :code="iconGuideDemoSource" />

</div>
