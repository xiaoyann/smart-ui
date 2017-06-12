<style lang="stylus">
.demoButtonWrapper {
  padding: 15px;
  .Button {
    margin-bottom: 10px;
  }
}
</style>

<template>
<div class="demoButtonWrapper">
  <Button :loading="loading" @click="handleClick">default</Button>

  <Button theme="primary" :loading="loading" @click="handleClick">蓝色</Button>
  <Button theme="primary" :loading="loading" @click="handleClick" disabled>蓝色（disabled）</Button>

  <Button theme="caution" :loading="loading" @click="handleClick">警告</Button>

  <Button theme="cutout" :loading="loading" @click="handleClick">登录</Button>

  <div style="padding: 15px;">
    <Button theme="primary-red" :loading="loading" radius="0" @click="handleClick">登录</Button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },

  methods: {
    handleClick() {
      if (this.loading) {
        return
      }
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>

