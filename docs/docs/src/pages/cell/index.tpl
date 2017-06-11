<div>
<h2>Cell</h2>
<ul>
  <li>支持使用类似 <code>router-link</code> 的 <code>to</code> 属性跳转到指定地址</li>
  <li>
    使用 <code>slot="header"</code> 自定义 <code>title</code> 区域，
    使用 <code>slot="body"</code> 自定义 <code>content</code> 区域
  </li>
  <li>支持设置图标，使用 <code>slot="icon"</code></li>
  <li>
    如果没有指定 <code>to</code> 并且 <code>to</code> 不能正常跳转，则触发 <code>click</code> 事件
  </li>
  <li>
    使用 <code>CellGroup</code> 分组
  </li>
</ul>


<demo />

<h2>Props</h2>
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
      <td>Cell 标题，可以使用 <code>slot="header"</code> 自定义标题内容</td>
      <td></td>
      <td>否</td>
    </tr>
    <tr>
      <td>content</td>
      <td>String</td>
      <td>Cell 内容，可以使用 <code>slot="body"</code> 自定义内容</td>
      <td></td>
      <td>否</td>
    </tr>
    <tr>
      <td>to</td>
      <td>String</td>
      <td>
        跳转到指定地址，如果是格式完整的 url （如：https://baidu.com），则使用 <code>window.location</code>，否则使用<code>this.$router</code>，如果 <code>$router</code> 不存在，则触发 <code>click</code> 事件。能跳转时不触发 <code>click</code> 事件。<a href="https://github.com/xiaoyann/smart-ui/blob/master/src/Cell/Cell.vue#L117-L128">源码</a>
      </td>
      <td></td>
      <td>否</td>
    </tr>
    <tr>
      <td>arrow</td>
      <td>Boolean Attribute(存在即为 true，不存在即为 false)</td>
      <td>是否显示箭头图标</td>
      <td></td>
      <td>否</td>
    </tr>
    <tr>
      <td>active</td>
      <td>Boolean Attribute(存在即为 true，不存在即为 false)</td>
      <td>被点击时是否显示暗色背景</td>
      <td></td>
      <td>否</td>
    </tr>
  </tbody>
</table>

<h2>CellGroup 不显示 border</h2>
<smart-code :code="code" lang="html"></smart-code>
</div>
