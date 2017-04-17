import Vue from 'vue'
import Dialog from './Dialog'

const instance = new Vue({
	...Dialog
})

;(function() {
	let id = 'smart-ui-dialog-mount-point'
	let mountPoint = document.createElement('div')
	mountPoint.id = id
	document.body.appendChild(mountPoint)
	instance.$mount('#' + id)
})()

export default {
	alert() {
		instance.alert.apply(instance, arguments)
	},

	confirm() {
		instance.confirm.apply(instance, arguments)
	},

	prompt() {
		instance.prompt.apply(instance, arguments)
	},

	zIndex(zIndex) {
		instance.zIndex = zIndex
		return instance
	}
}