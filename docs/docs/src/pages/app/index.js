import Header from './header/index'
import create from './index.tpl'
import './index.styl'

const components = [
  'TabBar',
  'Cell',
  'Modal',
  'Popup',
  'ActionSheet',
  'Loading',
  'Spinner',
  'Toast',
  'Dialog',
  'Loadmore',
  'Switcher',
  'Button',
  'Field',
  'Checkbox',
  'Radio',
  'Datepicker',
  'Selector',
]

export default create({
  data() {
    return {
      navs: components
    }
  },

  components: {
    'site-header':  Header
  }
})

