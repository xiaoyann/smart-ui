<style>
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
</style>

<template>
<div>
  <div class="row">
    <Button width="40%" height="34px" font-size="15px" theme="default" :loading="loading" @click="handleClick">
      default
    </Button>  
    <Button>
      default
    </Button>
    <Button disabled>
      default
    </Button>
  </div>

  <div class="row">
    <Button width="40%" height="34px" font-size="15px" theme="primary" :loading="loading" @click="handleClick">
      蓝色
    </Button>  
    <Button theme="primary">
      蓝色
    </Button>
    <Button  theme="primary" disabled>
      蓝色
    </Button>
  </div>

  <div class="row">
    <Button width="40%" height="40px" font-size="20px" theme="caution" :loading="loading" @click="handleClick">
      警告
    </Button>  
    <Button theme="caution">
      警告
    </Button>
    <Button theme="caution" disabled>
      警告
    </Button>
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

