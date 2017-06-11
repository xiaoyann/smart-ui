<style lang="stylus">
.CellGroup {
  position: relative;
  .CellBox {
    padding-left: 15px;
  }
  .Cell {
    padding-left: 0;
  }
  .CellBox:last-child .Cell:after {
    border: 0;
  }
}
</style>

<template>
<div
  class="CellGroup"
  :class="{'smart-border-bottom': hasBorder, 'smart-border-top': hasBorder}"
>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'CellGroup',

  props: {
    hasBorder: {
      type: Boolean,
      default: true
    }
  }
}
</script>
