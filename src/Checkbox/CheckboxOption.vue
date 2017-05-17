<style lang="stylus">
.CheckboxOptionBox:first-child {
  .Cell:before {
    border-top: none !important;
  }
}

.CheckboxOptionBox {
  .Cell:before {
    border-top: 1px solid #e5e5e5 !important;
  }
}

.CheckboxOption {
  display: flex;
  height: 17px;
  align-items: center;
}

.CheckboxOption--name {
  margin-left: 10px;
  font-size: 15px;
  line-height: 17px;
  color: #333;
}

.CheckboxOption--icon {
  float: left;
  position: relative;
  width: 17px;
  height: 17px;
  border: 2px solid #d9d9d9;
  border-radius: 3px;
  box-sizing: border-box;
  transition: all .2s;
  &:after {
    content: ' ';
    position: absolute;
    left: 4px;
    top: 1px;
    display: block;
    width: 5px;
    height: 8px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    box-sizing: border-box;
    transform: rotate(45deg) scale(0.5);
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  }
}

.CheckboxOption--icon.checked {
  border-color: #2b8ff7;
  background-color: #2b8ff7;
  &:after {
    border-color: #fff;
    transform: rotate(45deg) scale(1);
  }
}
</style>

<template>
<Cell @click="handleClick" class="CheckboxOptionBox">
  <div slot="header" class="CheckboxOption">
    <div class="CheckboxOption--icon" :class="{'checked': checked}"></div>
    <span class="CheckboxOption--name">
      <slot></slot>
    </span>
  </div>
</Cell>
</template>

<script>
import { Cell } from '../Cell'

export default {
  name: 'CheckboxOption',

  props: [
    'value'
  ],

  data() {
    return {
      checked: false
    }
  },

  components: {
    Cell
  },

  methods: {
    handleClick() {
      this.checked = !this.checked
      this.$emit('click', this.checked, this.value)
    },

    checkStatus(values) {
      this.checked = values.indexOf(this.value) > -1
    }
  }
}
</script>
