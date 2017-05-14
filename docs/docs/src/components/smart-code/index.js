import prism from '../../libs/prismjs'
import create from './index.tpl'

export default create({
  props: {
    lang: {
      type: String
    },
    code: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      content: ''
    }
  },

  created() {
    const lang = this.lang
    let code = this.code
    if (!code && this.$slots.default) {
      code = this.$slots.default[0].text.trim()
    }
    if (prism.languages[lang]) {
      this.content = prism.highlight(code, prism.languages[lang])
    } else {
      this.content = code
    }
  }
})
