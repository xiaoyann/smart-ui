import create from './index.tpl'
import './index.styl'

export default create({
  props: {
    // 宽
    width: {
      type: String,
      default: ''
    },
    // 高
    height: {
      type: String,
      default: '40px'
    },
    // 圆角
    radius: {
      type: String,
      default: ''
    },
    // 色彩
    tintColor: {
      type: String,
      default: '#2b8ff7'
    },
    // 类型
    type: {
      default: 'normal',
      validator (type) {
        const types = ['normal', 'simple', 'cutout']
        return types.indexOf(type) > -1
      }
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // loading
    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes () {
      return {
        disabled: this.disabled || this.loading
      }
    },

    overlayStyles () {
      const { type, tintColor } = this
      const styles = {}
      if (type === 'normal') {
        styles['background-color'] = tintColor
      } else if (type === 'simple') {
        styles['background-color'] = '#fff'
      } else if (type === 'cutout') {
        styles['background-color'] = '#fff'
      }
      return styles
    },

    style () {
      const { type, tintColor } = this
      const styles = {
        width: this.width,
        height: this.height,
        'border-radius': this.radius,
        'font-size': this.height
      }

      if (type === 'normal') {
        styles['color'] = '#fff'
        styles['background-color'] = tintColor
      } else if (type === 'simple') {
        styles['color'] = tintColor
        styles['background-color'] = '#fff'
      } else if (type === 'cutout') {
        styles['border'] = `1px solid ${tintColor}`
        styles['color'] = tintColor
        styles['background-color'] = '#fff'
      }

      return styles
    },

    spinnerSize () {
      const size = parseFloat(this.height) * 0.45
      return size < 12 ? 12 : size
    }
  },

  methods: {
    handleClick () {
      if (!this.loading && !this.disabled) {
        this.$emit('click')
      }
    }
  }
})
