<div>

<h2>安装</h2>

<smart-code lang="bash">
$ yarn add smart-ui
</smart-code>

<smart-code lang="html">
<div class="header">
  <h3>123</h3>
</div>
</smart-code>

<smart-code lang="js">
import vue from 'vue'

export default new Vue({
  ...App,
  methods: {
    test() {
      console.log(123)
    }
  }
})
</smart-code>

<smart-demo>

<CellGroup slot="demo">
  <Cell title="用户姓名" arrow></Cell>
  <Cell title="手机号码" arrow></Cell>
</CellGroup>

<smart-code lang="html" slot="html">
<CellGroup>
  <Cell title="用户姓名" arrow></Cell>
  <Cell title="手机号码" arrow></Cell>
</CellGroup>
</smart-code>

<smart-code lang="js" slot="js">
import vue from 'vue'

export default new Vue({
  ...App,
  methods: {
    test() {
      console.log(123)
    }
  }
})
</smart-code>

<smart-code lang="css" slot="css">
.smartDemo {
  overflow: hidden;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
}

.smartDemo--demo {
  padding: 15px;
  background-color: #f5f2f0;
}

.smartDemo--code {
  border-top: 1px solid #e5e5e5;
}

.smartDemo--tabs {
  list-style: none;
}

.smartDemo--tab {
  display: inline-block;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  &.active {
    color: #fff;
    background-color: #ff5722;
  }
}

.hide {
  display: none
}
</smart-code>

</smart-demo>

</div>
