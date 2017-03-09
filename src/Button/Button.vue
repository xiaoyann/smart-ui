<style lang="stylus">
.Button {
  outline: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 3px 6px 2px;
  border: 0;
  box-sizing: border-box;
  line-height: 1;
  font-family: sans-serif;
  transition: all .15s linear;
}

.Button--default {
  color: #666;
  border: 1px solid #e5e5e5;
  background-color: #f6f6f6;
  &.disabled,
  &:active {
    color: rgba(102, 102, 102, .6);
    background-color: rgba(246, 246, 246, .8);
  }
}

.Button--primary {
  color: #fff;
  background-color: rgba(43, 143, 247, 1);
  &.disabled,
  &:active {
    color: rgba(255, 255, 255, .6);
    background-color: rgba(43, 143, 247, .8);
  }
}

.Button--caution {
  color: #fff;
  background-color: #FF4351;
  &.disabled,
  &:active {
    color: rgba(255, 255, 255, .6);
    background-color: rgba(255, 67, 81, .8);
  }
}
</style>

<template>
<div :class="classes" :style="style" @click="handleClick">
  <Spinner v-if="loading" :size="size" width="1" :bgcolor="bgcolor" :forecolor="forecolor" style="margin-right: 5px" />
  <div><slot></slot></div>
</div>
</template>

<script>
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

export default {
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
}
</script>


