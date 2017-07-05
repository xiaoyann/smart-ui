import Vue from 'vue'
import Router from 'vue-router'
import SmartUI from '../src'
import '../src/style.styl'
import './style.styl'
import routes from './routes'
import App from './App'

Vue.use(Router)
Vue.use(SmartUI)

const router = new Router({ routes })

new Vue({
	router,
	...App
})
.$mount('#app')
