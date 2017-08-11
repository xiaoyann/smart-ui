<style lang="stylus">
.demoButtonWrapper {
  padding: 15px;
  > .Button {
    margin-bottom: 10px;
  }
}
</style>

<template>
<div class="demoButtonWrapper">
  <Button tintColor="#2b8ff7" type="cutout">登录</Button>
  <Button tintColor="#2b8ff7" type="normal" @click="handleClick" :loading="loading">登录</Button>
  <Button tintColor="#2b8ff7" type="simple">登录</Button>

  <div class="flex" style="background-color: #e0e0e0; margin: 30px 0">
    <div class="flex-1 gutter-10">
      <Button height="30px" radius="5px" tintColor="#2b8ff7" type="cutout" disabled>登录</Button>
    </div>
    <div class="flex-1 gutter-10">
      <Button height="30px" radius="5px" tintColor="#2b8ff7" type="normal" disabled>登录</Button>
    </div>
    <div class="flex-1 gutter-10">
      <Button height="30px" radius="5px" tintColor="#2b8ff7" type="simple" disabled>登录</Button>
    </div>
  </div>

  <Button height="30px" tintColor="#ff4351" type="cutout">登录</Button>
  <Button height="30px" tintColor="#ff4351" type="normal" :loading="true">登录</Button>
  <Button height="30px" tintColor="#ff4351" type="simple">登录</Button>
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
