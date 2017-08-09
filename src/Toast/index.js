import Vue from 'vue'
import Toast from './Toast'

const toast = new Vue({
  ...Toast
})

;(() => {
  const id = 'smart-ui-toast-mount-point'
  const mountPoint = document.createElement('div')
  mountPoint.id = id
  document.body.appendChild(mountPoint)
  toast.$mount('#' + id)
})()

export default {
  show () {
    toast.show.apply(toast, arguments)
    return toast
  },

  zIndex (zIndex) {
    toast.zIndex = zIndex
    return toast
  }
}
