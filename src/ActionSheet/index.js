import Vue from 'vue'
import ActionSheet from './ActionSheet'

const actionsheet = new Vue({
	...ActionSheet
})

// 在应用中，ActionSheet 只会同时显示一个，不应该哪里要使用就在哪里创建一个实例。
// 所以单独创建一个挂载点，自动挂载。
;(function() {
	let id = 'smart-ui-actionsheet-mount-point'
	let mountPoint = document.createElement('div')
	mountPoint.id = id
	document.body.appendChild(mountPoint)
	actionsheet.$mount('#' + id)
})()

export default {
	config(conf) {
		['tintColor', 'zIndex'].forEach(name => {
			if (typeof conf[name] !== 'undefined') {
				actionsheet[name] = conf[name]
			}
		})
	},
	
	show() {
		actionsheet.show.apply(actionsheet, arguments)
	},
	
	hide() {
		actionsheet.hide.apply(actionsheet, arguments)
	}
}