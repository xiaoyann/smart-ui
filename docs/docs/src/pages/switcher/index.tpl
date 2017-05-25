<div>
<h2>Switcher</h2>

<smart-demo :source="source">
<div slot="demo">
  <Cell :title="'蜂窝移动网络 ====> ' + test1">
    <Switcher
      slot="body"
      onText="开"
      offText="关"
      onColor="rgb(19, 206, 102)"
      offColor="rgb(255, 73, 73)"
      onVal="开"
      offVal="关"
      v-model="test1"
    />
  </Cell>
</div>
</smart-demo>

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
      <td>onColor</td>
      <td>String</td>
      <td>打开时的颜色</td>
      <td>
        #20a0ff<div style="display: inline-block; width: 20px; height: 12px; margin-left: 5px; background-color: #20a0ff"></div>
      </td>
      <td>否</td>
    </tr>
    <tr>
      <td>offColor</td>
      <td>String</td>
      <td>关闭时的颜色</td>
      <td>
        #bfcbd9<div style="display: inline-block; width: 20px; height: 12px; margin-left: 5px; background-color: #bfcbd9"></div>
      </td>
      <td>否</td>
    </tr>
    <tr>
      <td>onText</td>
      <td>String</td>
      <td>打开时的文本</td>
      <td></td>
      <td>否</td>
    </tr>
    <tr>
      <td>offText</td>
      <td>String </td>
      <td>关闭时的文本</td>
      <td></td>
      <td>否</td>
    </tr>
    <tr>
      <td>onVal</td>
      <td>任意类型</td>
      <td>打开时的值</td>
      <td></td>
      <td>否</td>
    </tr>
    <tr>
      <td>offVal</td>
      <td>任意类型</td>
      <td>关闭时的值</td>
      <td></td>
      <td>否</td>
    </tr>
  </tbody>
</table>
</div>
