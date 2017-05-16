<div>
<h2>Modal</h2>

<p>
通过 <code>v-model</code> 控制显示或隐藏
</p>

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
      <td>value</td>
      <td>Boolean</td>
      <td>控制显示或隐藏</td>
      <td></td>
      <td>否</td>
    </tr>
    <tr>
      <td>bgcolor</td>
      <td>String</td>
      <td>背景色</td>
      <td>#fff</td>
      <td>否</td>
    </tr>
    <tr>
      <td>zIndex</td>
      <td>String | Number</td>
      <td>控制 css z-index，避免与应用中其他的使用了 z-index 的元素冲突</td>
      <td>2</td>
      <td>否</td>
    </tr>
    <tr>
      <td>anim</td>
      <td>one of ['none', 'bottomUp', 'fade']</td>
      <td>显示的时的动画</td>
      <td>none</td>
      <td>否</td>
    </tr>
    <tr>
      <td>dismissOnClick</td>
      <td>Boolean</td>
      <td>点击时是否隐藏</td>
      <td>false</td>
      <td>否</td>
    </tr>
  </tbody>
</table>
</div>
