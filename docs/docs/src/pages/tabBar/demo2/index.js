import create from './index.tpl'
import './index.css'

const html = `
<div class="tabBar--demo2--wrapper">
  <Button @click="visible = !visible">{{visible ? '点我隐藏' : '点我显示'}}</Button>
  <TabBar :visible="visible">
    <TabBarItem title="首页" :selected="selected === 0" @click="selected = 0"></TabBarItem>
    <TabBarItem title="我的" :selected="selected === 1" @click="selected = 1"></TabBarItem>
  </TabBar>
</div>
`

const js = `
import create from './index.tpl'
import './index.css'

export default create({
  data() {
    return {
      visible: true,
      selected: 0,
    }
  }
})
`

const css = `
.tabBar--demo2--wrapper {
  position: relative;
  height: 100px;
  padding-bottom: 58px;
  overflow: hidden;
  user-select: none;
}
`

export default create({
  data() {
    return {
      visible: true,
      selected: 0,
      source: {
        html: html,
        css: css,
        javascript: js
      }
    }
  }
})
