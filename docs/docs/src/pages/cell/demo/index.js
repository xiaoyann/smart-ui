import create from './index.tpl'

const source = {}
source.html = `
<div>
  <Cell :title="'基本用法 '+times" @click="handleClick" :content="'点击了'+times+'次'"></Cell>
  <Cell title="设置图标">
    <img slot="icon" src="../../../images/food.svg"/>
  </Cell>
  <Cell title="设置箭头，有 to 属性会自动显示箭头，不用使用 arrow 属性" arrow content="使用 arrow 属性">
    <img slot="icon" src="../../../images/food.svg"/>
  </Cell>
  <Cell title="回首页" to="/" content="使用了to，默认就会显示箭头"></Cell>
  <Cell title="打开百度" to="http://www.baidu.com" content="支持打开外部链接">
    <img slot="icon" src="../../../images/baidu.svg"/>
  </Cell>
  <Cell>
    <span slot="header" style="flex: 1">使用 slot="header"</span>
    <span slot="body">使用 slot="body"</span>
  </Cell>

  <CellGroup style="margin-top: 15px">
    <Cell title="使用 Cell 分组" arrow></Cell>
    <Cell title="使用 Cell 分组" arrow></Cell>
    <Cell title="使用 Cell 分组" arrow></Cell>
  </CellGroup>
</div>
`

source.javascript = `
import create from './index.tpl'
export default create({
  data() {
    return {
      times: 0,
    }
  },

  methods: {
    handleClick() {
      this.times += 1
    }
  }
})
`

export default create({
  data() {
    return {
      times: 0,
      source: source
    }
  },

  methods: {
    handleClick() {
      this.times += 1
    }
  }
})
