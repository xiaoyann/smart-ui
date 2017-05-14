# Button

```html
<h1>123</h1>
```

<template>
<div>
  <Cell title="百度" to="https://www.baidu.com"></Cell>
  <Cell title="百度" to="https://www.baidu.com"></Cell>
  <Button width="200px" @click="handleclick" theme="primary">Primary Button</Button>
</div>
</template>

<script>
export default {
  methods: {
    handleclick() {
      alert(1)
    }
  }
}
</script>