import Vue from 'vue'
import Toast from './Toast'

const toast = new Vue({
	...Toast
})

;(() => {
	let id = 'smart-ui-toast-mount-point'
	let mountPoint = document.createElement('div')
	mountPoint.id = id
	document.body.appendChild(mountPoint)
	toast.$mount('#' + id)
})()

export default {
	show() {
		toast.show.apply(toast, arguments)
	},

	hide() {
		toast.hide.apply(toast, arguments)
	}
}