import create from './index.tpl'
import demo1 from './demo1'
import demo2 from './demo2'
import demo3 from './demo3'

const iconGuideDemoSource = `<TabBarItem :selected="selected === 1" title="关于" @click="selected = 1">
  <img slot="icon" src="images/like.svg" />
  <img slot="icon-selected" src="images/like-active.svg" />
</TabBarItem>`

export default create({
  data() {
    return {
      iconGuideDemoSource
    }
  },

  components: {
    demo1,
    demo2,
    demo3,
  }
})
