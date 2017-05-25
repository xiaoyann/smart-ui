import create from './index.tpl'

const source = {}

source.html = `
<Cell :title="'蜂窝移动网络 ====> ' + test1">
  <Switcher
    slot="body"
    onText="开"
    offText="关"
    onColor="rgb(19, 206, 102)"
    offColor="rgb(255, 73, 73)"
    onVal="开"
    offVal="关"
    v-model="test1"
  >
  </Switcher>
</Cell>
`

source.javascript = `
import create from './index.tpl'

export default create({
  data() {
    return {
      test1: '开'
    }
  }
})
`

export default create({
  data() {
    return {
      test1: '开',
      source
    }
  }
})
