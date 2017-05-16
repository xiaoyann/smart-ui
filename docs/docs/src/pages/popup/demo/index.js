import create from './index.tpl'
import './index.css'

const source = {}

source.html = `
<div>
  <ul>
    <li><a href="javascript:;" @click="visible1 = true">display from the bottom</a></li>
    <li><a href="javascript:;" @click="visible2 = true">display from the top</a></li>
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
`

source.javascript = `
import create from './index.tpl'

export default create({
  data() {
    return {
      visible1: false,
      visible2: false,
    }
  },
})
`

source.css = `
.popup-demo {
  background-color: #fff;
  height: 200px;
  line-height: 200px;
  text-align: center;
}
`

export default create({
  data() {
    return {
      visible1: false,
      visible2: false,
      source: source
    }
  },
})
