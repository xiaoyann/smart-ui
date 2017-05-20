import create from './index.tpl'

const source = {}

source.html = `
<div>
  <li>
    <a href="javascript:;" @click="show()">Show Loading</a>
  </li>
  <li>
    <a href="javascript:;" @click="show('稍等，正在加载')">Show Loading with message</a>
  </li>
</div>
`

source.javascript = `
import create from './index.tpl'

export default create({
  methods: {
    show(message) {
      this.$loading.show(message)
      setTimeout(() => {
        this.$loading.hide()
      }, 2000)
    }
  }
})
`

export default create({
  data() {
    return {
      source
    }
  },

  methods: {
    show(message) {
      this.$loading.show(message)
      setTimeout(() => {
        this.$loading.hide()
      }, 2000)
    }
  }
})
