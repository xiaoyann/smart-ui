<style lang="stylus">
.Popup {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}  
</style>

<template>
<Modal v-model="visible" anim="fade" bgcolor="rgba(0, 0, 0, .4)" :dismissOnClick="true" :zIndex="zIndex">
  <transition name="smart-anim--bottomUp">
    <div v-show="visible" class="Popup">
      <slot></slot>
    </div>
  </transition>
</Modal>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean
    },
    // css z-index
    zIndex: {
      type: [String, Number],
      default: 2
    },
  },

  data() {
    return {
      visible: false
    }
  },

  watch: {
    value(newVal) {
      this.visible = newVal
    },
    visible(newVal, oldVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>