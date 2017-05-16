<style lang="stylus">
.Popup {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
}
</style>

<template>
<Modal v-model="visible" anim="fade" bgcolor="rgba(0, 0, 0, .4)" :dismissOnClick="true" :zIndex="zIndex">
  <transition :name="conf.anim">
    <div v-show="visible" class="Popup" :style="conf.style">
      <slot></slot>
    </div>
  </transition>
</Modal>
</template>

<script>
const conf = {
  bottom: {
    anim: 'smart-anim--bottomUp',
    style: {
      bottom: 0
    }
  },
  top: {
    anim: 'smart-anim--topDown',
    style: {
      top: 0
    }
  }
}

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
    position: {
      validator(value) {
        return value === 'bottom' || value === 'top'
      },
      default: 'bottom'
    }
  },

  data() {
    return {
      visible: false
    }
  },

  computed: {
    conf() {
      return conf[this.position]
    }
  },

  watch: {
    value(newVal) {
      this.visible = newVal
    },
    visible(newVal, oldVal) {
      if (newVal !== this.value) {
        this.$emit('input', newVal)
      }
    }
  }
}
</script>
