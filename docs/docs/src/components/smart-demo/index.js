import create from './index.tpl'
import './index.styl'

export default create({
  props: {
    source: {
      type: Object,
      default: () => ({
        html: '',
        javascript: '',
        css: ''
      })
    }
  },

  data() {
    return {
      languages: [
        'html',
        'javascript',
        'css'
      ],
      index: 0,
    }
  },

  watch: {
    index() {
      this.toogle()
    },
  },

  mounted() {
    this.setTabMainHeight()
  },

  methods: {
    setTabMainHeight() {
      let maxHeight = 0
      const nodes = this.$refs.tabMain.childNodes
      ;[].forEach.call(nodes, (node) => {
        if (node.nodeType === 1) {
          let offsetHeight = node.offsetHeight
          if (offsetHeight > maxHeight) {
            maxHeight = offsetHeight
          }
        }
      })
      this.$refs.tabMain.style.height = maxHeight + 'px'
      this.toogle()
    },

    toogle() {
      let nodes = [].slice.call(this.$refs.tabMain.childNodes)
      nodes.filter(
        node => node.nodeType === 1
      ).forEach((node, k) =>
        node.style.display = this.index === k ? 'block' : 'none'
      )
    }
  }
})
