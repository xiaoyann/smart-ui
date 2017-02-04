// common style
import './style.styl'

// components
import { TabBar, TabBarItem } from './TabBar'
import { Cell, CellGroup } from './Cell'
import { Radio, RadioOption } from './Radio'
import { Checkbox, CheckboxOption } from './Checkbox'
import { Field } from './Field'
import { Datepicker } from './Datepicker'
import { Selector } from './Selector'
import { Modal } from './Modal'
import { Loadmore } from './Loadmore'
import $loading from './Loading'
import $actionSheet from './ActionSheet'
import $toast from './Toast'
import $dialog from './Dialog'

const components = {
	TabBar,
	TabBarItem,
	Cell,
	CellGroup,
	Radio,
	RadioOption,
	Checkbox,
	CheckboxOption,
	Field,
	Datepicker,
	Selector,
	Modal,
	Loadmore,
}

// register globally all components
function install(Vue, options) {
	for (let name in components) {
		Vue.component(name, components[name])
	}
	Vue.prototype.$actionSheet = $actionSheet
	Vue.prototype.$loading = $loading
	Vue.prototype.$toast = $toast
	Vue.prototype.$dialog = $dialog
}

module.exports = { install }
