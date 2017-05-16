<smart-demo :source="source">
<div slot="demo">
  <ul>
    <li>
      <a href="javascript:;" @click="visible1 = true">display from the bottom</a>
    </li>
    <li>
      <a href="javascript:;" @click="visible2 = true">display from the top</a>
    </li>
  </ul>
  <Popup v-model="visible1">
    <div class="popup-demo">
      <span>display from the top</span>
    </div>
  </Popup>
  <Popup v-model="visible2" position="top">
    <div class="popup-demo">
      <span>display from the bottom</span>
    </div>
  </Popup>
</div>
</smart-demo>
