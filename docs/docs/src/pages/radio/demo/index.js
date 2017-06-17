import create from './index.tpl'
import './index.css'

const source = {}

source.html = `
<div>
  <p>
    性别：{{gender}}
  </p>
  <Radio title="性别" v-model="gender">
    <RadioOption value="男">男</RadioOption>
    <RadioOption value="女">女</RadioOption>
    <RadioOption value="" input>其他</RadioOption>
  </Radio>
</div>
`

source.javascript = `
import create from './index.tpl'

export default create({
  data() {
    return {
      gender: '女',
    }
  },
})
`

export default create({
  data() {
    return {
      gender: '女',
      source: source
    }
  },
})
