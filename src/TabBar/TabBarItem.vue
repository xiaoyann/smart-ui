<style lang="stylus">
.TabBarItem {
  display: flex;
  flex: 1;
  height: 48px;
  line-height: 1;
  align-items: center;
  justify-content: center;
  color: #757575;
  font-size: 13px;
}
.TabBarItem--title {
  display: block;
  height: 13px;
}
.TabBarItem--icon {
  height: 22px;
  padding-bottom: 2px;
  text-align: center;
  img {
    height: 100%;
  }
}
.TabBarItem.selected {
  color: #2b8ff7;
}
</style>

<template>
<div class="TabBarItem" :class="{'selected': selected}" @click="handleClick">
  <div class="TabBarItem--bd">
    <div class="TabBarItem--icon" v-if="hasSlot">
      <slot v-if="selected === false" name="icon"></slot>
      <slot v-if="selected === true" name="icon-selected"></slot>
    </div>
    <span class="TabBarItem--title">{{title}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabBarItem',

  props: {
    // the title
    title: {
      type: String,
      required: true,
      default: ''
    },
    // navigate to another URL by Router
    to: String,
    selected: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  computed: {
    // whether has slot
    hasSlot () {
      return Object.keys(this.$slots).length > 0
    }
  },

  methods: {
    handleClick () {
      if (this.to && this.$router) {
        // do not produce history, It is not necessary
        this.$router.replace(this.to)
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>
