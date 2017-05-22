import create from './index.tpl'

const source = {}

source.html = `
<ul>
  <li>
    <a href="javascript:;" @click="open('top')">Show Toast in the top of page</a>
  </li>
  <li>
    <a href="javascript:;" @click="open('center')">Show Toast in the middle of page</a>
  </li>
  <li>
    <a href="javascript:;" @click="open('bottom')">Show Toast in the bottom of page</a>
  </li>
</ul>
`

source.javascript = `
import create from './index.tpl'

export default create({
  methods: {
    open(position) {
      this.$toast.zIndex(8).show('哇哈哈哈哈，登录成功了~', position, function() {
        console.log(position)
      })
    }
  }
})
`

export default create({
  data() {
    return {
      source: source
    }
  },

  methods: {
    open(position) {
      this.$toast.zIndex(8).show('哇哈哈哈哈，登录成功了~', position, function() {
        console.log(position)
      })
    }
  }
})
