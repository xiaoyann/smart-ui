import create from './index.tpl'
import './index.styl'

export default create({
  props: {
    value: {},
    title: {
      type: String,
      required: true
    },
    placeholder: String
  },

  data () {
    return {
      val: this.value
    }
  },

  watch: {
    val (newVal) {
      this.$emit('input', newVal)
    },

    value (newVal) {
      this.val = newVal
    }
  }
})
