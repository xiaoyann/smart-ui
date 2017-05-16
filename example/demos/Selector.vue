<template>
<div>
  <ul>
    <li>在哪啊：{{city}}</li>
  </ul>
  <Cell title="在哪啊" arrow>
    <Selector slot="body" v-model="city" placeholder="请选择">
      <option :value="item.val" v-for="item in options">{{item.text}}</option>
    </Selector>
  </Cell>
</div>
</template>

<script>
export default {
  data() {
    return {
      city: "",
      options: []
    }
  },

  mounted() {
    setTimeout(() => {
      this.options = [
        { text: '北京', val: 1 },
        { text: '上海', val: 2 },
        { text: '广州', val: 3 },
        { text: '深圳', val: 4 }
      ]
    }, 100)
  }
}
</script>
