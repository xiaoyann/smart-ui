import prism from '../../libs/prismjs'
import beautify from 'js-beautify'
import create from './index.tpl'

export default create({
  props: {
    lang: {
      type: String
    }
  },

  mounted() {
    const lang = this.lang
    let code = this.$refs.code.innerHTML.trim()

    if (lang === 'html') {
      code = beautify.html(code, {
        indent_size: 2
      })
    }

    if (Prism.languages[lang]) {
      code = prism.highlight(code, Prism.languages[lang])
    }

    this.$refs.code.innerHTML = code
  }
})
