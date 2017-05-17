<style lang="stylus">
.CellBox {
  background-color: #fff;
}

.Cell--active {
  &:active {
    background-color: #f5f5f5;
  }
}

.Cell {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 48px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}

.Cell--bd {
  padding-left: 5px;
  overflow: hidden;
  word-break: break-all;
  font-size: 15px;
  color: #8e8e90;
}

.Cell--hd {
  flex: 1;
  display: flex;
  align-items: center;
}

.Cell--title {
  flex: 1;
  font-size: 15px;
  color: #333;
}

.Cell--icon {
  width: 22px;
  height: 22px;
  padding-right: 8px;
  line-height: 1;
  overflow: hidden;
}

.Cell--icon > * {
  width: 100%;
  height: 100%;
}

.Cell--arrow {
  display: block;
  width: 10px;
  height: 10px;
  border-top-color: #ccc;
  border-right-color: #ccc;
  border-top-style: solid;
  border-right-style: solid;
  border-top-width: 1px;
  border-right-width: 1px;
  transform: rotate(45deg);
}
</style>

<template>
<div class="CellBox" @click="handleClick" :class="{'Cell--active': active !== undefined}">
  <div class="Cell smart-border-top">
    <div class="Cell--icon" v-if="hasIcon">
      <slot name="icon"></slot>
    </div>
    <slot name="header">
      <div class="Cell--hd" v-if="title">
        <span class="Cell--title">{{title}}</span>
      </div>
    </slot>
    <slot name="body">
      <div class="Cell--bd">{{content}}</div>
    </slot>
    <i v-if="hasArrow" class="Cell--arrow"></i>
  </div>
</div>
</template>

<script>
export default {
  name: 'Cell',

  props: {
    title: undefined,
    content: undefined,
    // whether display arrow icon
    arrow: undefined,
    // navigate to another URL by Router
    to: String,
    // active style
    active: undefined
  },

  computed: {
    hasIcon() {
      return !!this.$slots.icon
    },
    hasArrow() {
      return this.arrow === false ? false
       : this.to ? true : typeof this.arrow !== 'undefined'
    }
  },

  methods: {
    handleClick() {
      if (this.to) {
        // is standard URL
        if (/^https?\:/.test(this.to)) {
          window.location = this.to
        }
        else {
          if (this.$router) {
            this.$router.push(this.to)
          }
          else {
            this.$emit('click')
          }
        }
      }
      else {
        this.$emit('click')
      }
    }
  }
}
</script>
