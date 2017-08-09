import Vue from 'vue'
import Loading from './Loading'

const loading = new Vue({
  ...Loading
})

;(() => {
  const id = 'smart-ui-loading-mount-point'
  const mountPoint = document.createElement('div')
  mountPoint.id = id
  document.body.appendChild(mountPoint)
  loading.$mount('#' + id)
})()

export default {
  show (message) {
    loading.show(message)
  },

  hide () {
    loading.hide()
  },

  zIndex (zIndex) {
    loading.zIndex = zIndex
    return loading
  }
}
