<style lang="stylus">
.Loadmore {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  box-sizing: border-box;
  font-size: 12px;
  color: #858585;
  span {
    margin-left: 5px;
  }
}
</style>

<template>
<div class="Loadmore" v-show="show">
  <slot>
    <Spinner size="16" />
    <span>{{ desc }}</span>
  </slot>
</div>
</template>

<script>
function getDocInfo() {
  return {
    scrollTop: document.body.scrollTop,
    pageHeight: document.body.offsetHeight,
    windowHeight: document.documentElement.clientHeight
  }
}

export default {

  name: 'Lodamore',

  props: {
    visible: {
      type: Boolean,
      default: true
    },
    desc: {
      type: String,
      default: '正在加载...'
    }
  },

  data() {
    return {
      show: false
    }
  },

  watch: {
    // visible 变化时去检测组件是否可见
    visible(newVal) {
      this.detectVisible()
    }
  },

  methods: {
    detectVisible() {
      const docInfo = getDocInfo()
      if (docInfo.pageHeight >= docInfo.windowHeight && this.visible) {
        this.show = true
      } else {
        this.show = false
      }
    },

    onscroll() {
      this.detectVisible()
      const docInfo = getDocInfo()
      if (docInfo.pageHeight - docInfo.scrollTop === docInfo.windowHeight && this.visible) {
        this.$emit('reachBottom')
      }
    },

    startListen() {
      window.addEventListener('scroll', this.onscroll)
    },

    stopListen() {
      window.removeEventListener('scroll', this.onscroll)
    }
  },

  mounted() {
    this.detectVisible()
    this.startListen()
  },

  // 组件销毁时解除事件监听
  destroyed() {
    this.stopListen()
  }
}
</script>
