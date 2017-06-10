import create from './index.tpl'

const htmlcode = `
<Loadmore @reachBottom="loadmore" :allLoaded="allLoaded"></Loadmore>
`

const jscode = `
export default {
  data() {
    return {
      list: [],
      allLoaded: false
    }
  },

  methods: {
    loadmore() {
      // 每次页面滚动到底部时开始加载数据
      // 如果数据加载完成可以 allLoaded 设置为 true
      fetch(...).then(resp => {
        if (resp.list.length > 0) {
          this.list = this.list.concat(resp.list)
        } else {
          allLoaded = true
        }
      })
    }
  }
}
`

export default create({
  data() {
    return {
      htmlcode,
      jscode
    }
  }
})
