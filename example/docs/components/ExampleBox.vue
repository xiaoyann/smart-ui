<style lang="stylus" scoped>
.ExampleBox {
  margin: 20px 0;
  border: 1px solid #2e2d34;
  background-color: #f5f5f5;
}

.ExampleBox--hd {
  display: flex;
  align-items: center;
  height: 22px;
  padding: 0 4px;
  color: #fff;
  font-size: 12px;
  background-color: #2e2d34;
  > i {
    display: inline-block;
    width: 5px;
    height: 5px;
    margin-right: 2px;
    border-radius: 50%;
    background-color: #fff;
  }
}

.ExampleBox--bd {
  position: relative;
}
</style>

<template>
<div class="ExampleBox">
  <div class="ExampleBox--hd">
    <i></i><i></i><i></i><i></i>
    <span style="margin-left: 5px">中国联通</span>
    <span style="flex: 1; text-align: center;">{{time}}</span>
    <img height="12" src="images/WechatIMG282.png">
  </div>
  <div class="ExampleBox--bd">
    <slot></slot>
  </div>
</div>
</template>

<script>
function getTime() {
  const now = new Date()
  return `${now.getHours()}:${now.getMinutes()}`
}

export default {
  data() {
    return {
      time: getTime()
    }
  },

  mounted() {
    setTimeout(() => {
      this.time = getTime()
    }, 6000 * 60)
  }
}
</script>

