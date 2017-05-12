import Vue from 'vue'
import Router from 'vue-router'
import 'github-markdown-css'
import './css/highlight.css'
import SmartUI from '../../src'
import '../../src/style.styl'
import './style.styl'
import routes from './routes'
import App from './App'
import ExampleBox from './components/ExampleBox'

Vue.use(Router)
Vue.use(SmartUI)

Vue.component('ExampleBox', ExampleBox)

const router = new Router({ routes })

window.app = new Vue({
  router,
  ...App,
}).$mount('#app')


