import create from './index.tpl'

const source = `
<Cell title="预约日期" arrow>
  <Datepicker slot="body" placeholder="请选择预约日期" v-model="date"/>
</Cell>
`

export default create({
  data() {
    return {
      source,
      date: ''
    }
  }
})
