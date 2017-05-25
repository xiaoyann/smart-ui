<style lang="stylus">
.Switcher {
  position: relative;
  width: 60px;
  height: 30px;
  padding: 2px;
  border-radius: 18px;
  background-color: #d5d5d5;
  box-sizing: content-box;
  transition: all 0.2s linear;
}

.Switcher--slider {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  transition: all .2s linear;
}

.Switcher--text {
  float: left;
  width: 50%;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color: #fff;
}

.Switcher--open {
  transform: translateX(30px);
}
</style>

<template>
<div class="Switcher" @click="handleClick" :style="{backgroundColor: on ? onColor: offColor}">
  <span class="Switcher--text">{{onText}}</span><span class="Switcher--text">{{offText}}</span>
  <div class="Switcher--slider" :class="{'Switcher--open': on}"></div>
</div>
</template>

<script>
export default {
  props: {
    offColor: {
      type: String,
      default: '#bfcbd9'
    },
    onColor: {
      type: String,
      default: '#20a0ff'
    },
    offText: {
      type: String,
      default: ''
    },
    onText: {
      type: String,
      default: ''
    },
    onVal: {
      default: true
    },
    offVal: {
      default: false
    },
    value: {}
  },

  computed: {
    on() {
      return this.onVal === this.value
    }
  },

  methods: {
    handleClick() {
      this.$emit('input', this.on ? this.offVal : this.onVal)
    }
  }
}
</script>
