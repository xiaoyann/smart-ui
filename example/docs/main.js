// styles
import './css/markdown.css'
import './css/common.styl'
import './libs/prismjs/style.css'
// libs
import Vue from 'vue'
import Router from 'vue-router'
import SmartUI from '../../src'
import '../../src/style.styl'

import routes from './routes'
import App from './pages/app'
import SmartDemo from './components/smart-demo'
import SmartCode from './components/smart-code'
import ExampleBox from './components/ExampleBox'

Vue.use(Router)
Vue.use(SmartUI)

Vue.component('SmartDemo', SmartDemo)
Vue.component('SmartCode', SmartCode)
Vue.component('ExampleBox', ExampleBox)

const router = new Router({ routes })

window.app = new Vue({
  router,
  ...App,
}).$mount('#app')


