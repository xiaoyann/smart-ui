<div>
<h2>Selector</h2>
<p>
  还是调用的原生的控件
</p>

<smart-demo :source="source">
<div slot="demo">
  <ul>
    <li>在哪啊：{{city}}</li>
  </ul>
  <Cell title="在哪啊" arrow>
    <Selector slot="body" v-model="city">
      <option :value="item.val" v-for="item in options">{{item.text}}</option>
    </Selector>
  </Cell>
</div>
</smart-demo>
</div>
