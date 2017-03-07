<style lang="stylus">
.Spinner {
  display: inline-block;
  box-sizing: border-box;
  border-radius: 50%;
  border-style: solid;
  animation: spinner .9s linear infinite;
}

@keyframes spinner {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div class="Spinner" :style="style"></div>
</template>

<script>
export default {
  props: {
    // 组件大小
    size: {
      type: [Number, String],
      default: 22
    },
    // 边框宽度
    width: {
      type: [Number, String],
      default: 2
    },
    // 背景色
    bgcolor: {
      type: String,
      default: '#e0e0e0'
    },
    // 前景色
    forecolor: {
      type: String,
      default: '#999'
    }
  },

  computed: {
    style() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        'border-top-color': this.bgcolor,
        'border-right-color': this.bgcolor,
        'border-bottom-color': this.bgcolor,
        'border-left-color': this.forecolor,
        'border-width': this.width + 'px',
      }
    }
  }
}
</script>