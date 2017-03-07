<template>
<div>
  <ul>
    <li>
      <a href="javascript:;" @click="visible = true">Show</a>
    </li>
  </ul>
  <Popup v-model="visible">
    <div style="background-color: #fff; height: 200px; line-height: 200px; text-align: center;">
      <span>Popup</span>
    </div>  
  </Popup>
</div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },

  watch: {
    visible(newVal) {
      console.log('visible = ', newVal)
    }
  }
}
</script>