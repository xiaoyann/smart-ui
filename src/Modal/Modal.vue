<style lang="stylus">
.Modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>

<template>
<transition :name="animName">
  <div
    ref="modal"
    class="Modal"
    :style="{'backgroundColor': bgcolor, zIndex: zIndex}"
    v-show="visible"
    @click="hanldeClick"
  >
    <slot></slot>
  </div>
</transition>
</template>

<script>

export default {
  name: 'Modal',

  props: {
    value: {
      type: Boolean
    },
    // 背景色
    bgcolor: {
      type: String,
      default: '#fff'
    },
    // css z-index
    zIndex: {
      type: [String, Number],
      default: 2
    },
    // 显示出来时的动画方式
    anim: {
      validator: v => {
        const names = ['none', 'bottomUp', 'fade']
        return names.indexOf(v) > -1
      },
      default: 'none'
    },
    // 点击时隐藏
    dismissOnClick: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      visible: false
    }
  },

  computed: {
    animName () {
      const name = this.anim
      if (name === 'none') {
        return ''
      } else {
        return `smart-anim--${name}`
      }
    }
  },

  watch: {
    value (newVal) {
      this.visible = newVal
    }
  },

  methods: {
    hanldeClick (e) {
      if (e.target === this.$refs.modal && this.dismissOnClick) {
        this.$emit('input', false)
      }
    }
  }
}
</script>
