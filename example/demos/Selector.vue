<template>
<div>
  <ul>
    <li>春天在哪里？：{{city}}</li>
    <li>喜欢哪些城市？：{{hobby}}</li>
  </ul>

  <Selector v-model="city" title="春天在哪里？" placeholder="请选择">
    <!-- 自定义 option 内容 -->
    <SelectorOption value="1" text="长沙">
      <div>
        <div style="color: red">长沙</div>
        <p style="font-size: 12px; color: #999">湖南省会城市，娱乐城市~</p>
      </div>
    </SelectorOption>
    <SelectorOption :value="0" text="岳阳"></SelectorOption>
    <SelectorOption value="3" text="湘潭" disabled></SelectorOption>
    <SelectorOption value="4" text="常德"></SelectorOption>
  </Selector>

  <!-- 使用 options 属性 -->
  <Selector :options="options" v-model="hobby" title="喜欢那些城市？(多选)" placeholder="请选择" multiple></Selector>
</div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      hobby: ["1", "3", "5", "7", "9"],
      options: [
        { text: '北京', value: "1" },
        { text: '上海', value: "2", disabled: true },
      ]
    }
  },

  mounted() {
    setTimeout(() => {
      this.options = this.options.concat([
        { text: '广州', value: "3" },
        { text: '深圳', value: "4", disabled: true },
        { text: '长沙', value: "5" },
        { text: '三亚，好想再去一次呀~', value: "6" },
        { text: '海口', value: "7" },
        { text: '武汉，热死个人', value: "8" },
        { text: '廊坊', value: "9" }
      ])
    }, 100)
  }
}
</script>
