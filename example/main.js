import Vue from 'vue'
import Router from 'vue-router'
import SmartUI from '../src'
import '../src/style.styl'
import './style.styl'
import routes from './routes'
import App from './App'

Vue.use(Router)
Vue.use(SmartUI)

SmartUI.config('Button', 'cutout', {
  button: {
    className: 'Button--cutout',
  },
  spinner: {
    bgcolor: 'rgba(220, 79, 69, .6)',
    forecolor: 'transparent'
  }
})

SmartUI.config('Button', 'primary-red', {
  button: {
    className: 'Button--test',
  },
  spinner: {
    bgcolor: 'rgba(255, 255, 255, .4)',
    forecolor: '#fff'
  }
})


const router = new Router({ routes })

new Vue({
	router,
	...App
})
.$mount('#app')
