import create from './index.tpl'
import demo from './demo'
export default create({
  data() {
    return {
      code: `<CellGroup :hasBorder="false">...</CellGroup>`
    }
  },
  components: {
    demo
  }
})
