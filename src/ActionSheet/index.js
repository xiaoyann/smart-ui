import Vue from 'vue'
import { Modal } from '../Modal'
import create from './index.tpl'
import './index.css'

// this color means can't be click
const disableColor = '#999999'
// this color means should be careful
const destructiveColor = '#FF3B30'

// instantiate directly
// only one instance of ActionSheet in an Application
const actionsheet = new Vue(create({
	name: 'ActionSheet',

	data() {
		return {
			visible: false,
			title: '',
			options: [
				// {
				// 		text: String,
				// 		disable: Boolean,
				// 		destructive: Boolean,
				// 		onSelect: Function
				// }
			],
			// doesn't show the cancel button when it is true
			hideCancel: false,
			// default fontcolor for options
			tintColor: '#2b8ff7',
			// css z-index
			zIndex: 5
		}
	},

	components: {
		Modal
	},

	created() {
		this.init()
	},

	methods: {
		// set default value for data
		init() {
			this.title = ''
			this.options = []
			this.hideCancel = false
		},

		// open the ActionSheet
		// @title: String,
		// @options: Array
		// @hideCancel: Boolean
		show(title, options, hideCancel = false) {
			this.title = title
			this.hideCancel = hideCancel
			this.options = options.map(opt => {
				// opt is an Object like this:
				// { text: String, disable: Boolean, destructive: Boolean, onSelect: Function }
				if (typeof opt === 'object') {
					return opt
				// opt is string
				} else {
					return { text: opt, disable: false, destructive: false }
				}
			})
			this.visible = true
		},
		
		// hide the ActionSheet
		hide() {
			this.visible = false
			// should init again after the hide, since the ActionSheet is shared
			this.init()
		},
		
		// call option.onSelect and hide when click the option
		handleClick(i) {
			const conf = this.options[i]
			if (!conf.disable && conf.onSelect) {
				conf.onSelect()
				this.hide()
			} 
		},

		// what color is the option
		getFontColor(opt) {
			// disabled
			if (opt.disable) {
				return disableColor
			}
			// emphasize
			if (opt.destructive) {
				return destructiveColor
			}
			// default
			return this.tintColor
		}
	}
}))


// create a mount point for ActionSheet and mount it
;(function() {
	let id = 'smart-ui-actionsheet-mount-point'
	let mountPoint = document.createElement('div')
	mountPoint.id = id
	document.body.appendChild(mountPoint)
	actionsheet.$mount('#' + id)
})()

export default {
	// Vue.$actionSheet.config({
	// 		zIndex: 100,
	// 		tintColor: '#38f'
	// })
	config(conf) {
		;['tintColor', 'zIndex'].forEach(name => {
			if (typeof conf[name] !== 'undefined') {
				actionsheet[name] = conf[name]
			}
		})
		return this
	},
	
	show() {
		actionsheet.show.apply(actionsheet, arguments)
	},
	
	hide() {
		actionsheet.hide.apply(actionsheet, arguments)
	}
}
