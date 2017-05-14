import create from './index.tpl'
import createDemo from './demo.tpl'
import htmlSource from './source.txt'

const demoSource = {
  html: htmlSource
}

const Demo = createDemo({
  data() {
    return {
      source: demoSource
    }
  }
})

export default create({
  components: {
    demo: Demo
  }
})
