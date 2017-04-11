<template>
<div>
  <Cell :title="'是否是单身狗 ' + test1">
    <Switcher slot="body" onText="是" offText="否" v-model="test1" />
  </Cell>
  <Cell title="进入飞行模式">
    <Switcher slot="body" v-model="test2"/>
  </Cell>
  <Cell :title="'蜂窝移动网络 ' + test3">
    <Switcher 
      slot="body" 
      onText="开" 
      offText="关" 
      onColor="rgb(19, 206, 102)" 
      offColor="rgb(255, 73, 73)"
      onVal="开"
      offVal="关"
      v-model="test3"
    />
  </Cell>
</div>
</template>

<script>
export default {
  data() {
    return {
      test1: true,
      test2: false,
      test3: '开'
    }
  },

  mounted() {
    setTimeout(() => {
      this.test1 = false
    }, 1000)
  }
}
</script>