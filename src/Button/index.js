import Button from './Button'

const theme = {
  default: {
    button: {
      className: 'Button--default',
    },
    spinner: {
      bgcolor: '#ddd',
      forecolor: 'transparent'
    }
  },
  primary: {
    button: {
      className: 'Button--primary',
    },
    spinner: {
      bgcolor: 'rgba(255, 255, 255, .4)',
      forecolor: '#fff'
    }
  },
  caution: {
    button: {
      className: 'Button--caution',
    },
    spinner: {
      bgcolor: 'rgba(255, 255, 255, .4)',
      forecolor: '#fff'
    }
  }
}

;(opt => {
  Object.keys(opt).forEach(
    name => Button[name] = opt[name]
  )
})({
  props: {
    // 字体大小
    fontSize: {
      type: String,
      default: '12px'
    },
    // 宽
    width: {
      type: String,
      default: ''
    },
    // 高
    height: {
      type: String,
      default: ''
    },
    // 圆角
    radius: {
      type: String,
      default: '3px'
    },
    // 主题
    theme: {
      type: String,
      default: 'default'
    },
    // 禁用
    disabled: undefined,
    // loading
    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        Button: true,
        disabled: typeof this.disabled !== 'undefined' || this.loading,
        ['Button--' + this.theme]: true,
      }
    },

    style() {
      return {
        width: this.width,
        height: this.height,
        'border-radius': this.radius,
        'font-size': this.fontSize,
      }
    },

    size() {
      return parseInt(this.fontSize) + 1
    },

    bgcolor() {
      let config = theme[this.theme]
      return config.spinner.bgcolor
    },

    forecolor() {
      let config = theme[this.theme]
      return config.spinner.forecolor
    }
  },

  methods: {
    handleClick() {
      if (!this.loading) {
        this.$emit('click')
      }
    }
  }
})

export function config(name, conf) {
  theme[name] = conf
}

export default { component: Button, config }
