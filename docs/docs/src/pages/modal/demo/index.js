import create from './index.tpl'

const source = {}

source.html = `
<div>
  <ul>
    <li><a href="javascript:;" @click="open('fade')">Open the Modal with fade animation</a></li>
    <li><a href="javascript:;" @click="open('bottomUp')">Open the Modal with bottomUp animation</a></li>
    <li><a href="javascript:;" @click="open('none')">Open the Modal without animation</a></li>
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
`

source.javascript = `
import create from './index.tpl'

export default create({
  data() {
    return {
      visible: false,
      animName: 'none',
      source: source
    }
  },

  methods: {
    open(animName) {
      this.animName = animName
      this.visible = true
    },
    close() {
      this.visible = false
    }
  }
})
`

export default create({
  data() {
    return {
      visible: false,
      animName: 'none',
      source: source
    }
  },

  methods: {
    open(animName) {
      this.animName = animName
      this.visible = true
    },
    close() {
      this.visible = false
    }
  }
})
