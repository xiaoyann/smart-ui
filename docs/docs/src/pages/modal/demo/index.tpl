<smart-demo :source="source">
<div slot="demo">
  <ul>
    <li>
      <a href="javascript:;" @click="open('fade')">Open the Modal with fade animation</a>
    </li>
    <li>
      <a href="javascript:;" @click="open('bottomUp')">Open the Modal with bottomUp animation</a>
    </li>
    <li>
      <a href="javascript:;" @click="open('none')">Open the Modal without animation</a>
    </li>
  </ul>
  <Modal
    v-model="visible"
    :anim="animName"
    bgcolor="rgba(0, 0, 0, .4)"
    zIndex="10"
    :dismissOnClick="true"
  >
    <div style="display: flex; align-items: center; height: 100%; justify-content: center;">
      <div style="background-color: #fff; padding: 20px 50px;" @click="close">Close Modal</div>
    </div>
  </Modal>
</div>
</smart-demo>
