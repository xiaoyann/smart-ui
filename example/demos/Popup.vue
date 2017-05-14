<template>
<div>
  <ul>
    <li>
      <a href="javascript:;" @click="visible1 = true">display from the bottom</a>
    </li>
    <li>
      <a href="javascript:;" @click="visible2 = true">display from the top</a>
    </li>
  </ul>
  <Popup v-model="visible1">
    <div style="background-color: #fff; height: 200px; line-height: 200px; text-align: center;">
      <span>Popup</span>
    </div>  
  </Popup>
  <Popup v-model="visible2" position="top">
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
      visible1: false,
      visible2: false
    }
  },
}
</script>