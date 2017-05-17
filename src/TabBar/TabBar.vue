<style lang="stylus">
.TabBar {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  transition: all 0.2s;
}

.TabBar--fixed {
  position: fixed;
}

.TabBar--hide {
  transform: translateY(100%);
}
</style>

<template>
<div
  class="TabBar smart-border-top"
  :class="{'TabBar--fixed': fixed, 'TabBar--hide': !visible}"
  :style="{backgroundColor: bgcolor}"
>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'TabBar',

  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: true
    },
    bgcolor: {
      type: String,
      default: 'rgba(247,247,250,.8)'
    }
  }
}
</script>
