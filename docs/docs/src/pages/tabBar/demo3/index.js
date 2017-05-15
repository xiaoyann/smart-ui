import create from './index.tpl'
import './index.css'

const html = `
<div style="padding-bottom: 88px; background-color: #fff; position: relative;">
  <TabBar bgcolor="#f5f5f5" class="TabBarDemo2">
    <TabBarItem to="/TabBar/index" :selected="$route.path === '/TabBar/index'" title="首页"></TabBarItem>
    <TabBarItem to="/TabBar/about" :selected="$route.path === '/TabBar/about'" title="关于"></TabBarItem>
  </TabBar>
</div>
`

export default create({
  data() {
    return {
      source: {
        html: html
      }
    }
  }
})
