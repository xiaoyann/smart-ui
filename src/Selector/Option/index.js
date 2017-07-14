import create from './index.tpl'
import './index.styl'

export default create({
  name: 'SelectorOption',

  props: {
    value: {},
    text: {
      type: String,
      default: ''
    },
    disabled: {
      default: false
    }
  },

  computed: {
    isCustom() {
      return !!this.$slots.default
    },
    isDisabled() {
      return this.disabled !== false
    }
  },
})
