import create from './index.tpl'
import './index.styl'

export default create({
  props: {
    label: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String
    },
    align: {
      type: String,
      default: 'left'
    },
    value: {
    },
    error: {
      type: String
    }
  },

  data() {
    return {
      val: this.value
    }
  },

  watch: {
    val(newVal) {
      this.$emit('input', newVal)
    },

    value(newVal) {
      this.val = newVal
    }
  },

  computed: {
    hasLabelSlot() {
      return !!this.$slots.label
    },
  },

  methods: {
    handleInput(e) {
      this.val = e.target.value
    },

    handleFocus(e) {
      this.$emit('update:error', '')
      this.$emit('focus', e)
    },

    handleBlur(e) {
      this.$emit('blur', e)
    },

    clear() {
      this.val = ''
    }
  }
})
