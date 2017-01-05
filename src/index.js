// common style
import './style.styl'

// components
import { TabBar, TabBarItem } from './TabBar'
import { Cell, CellGroup } from './Cell'
import { Radio, RadioOption } from './Radio'
import { Checkbox, CheckboxOption } from './Checkbox'

const components = {
	TabBar,
	TabBarItem,
	Cell,
	CellGroup,
	Radio,
	RadioOption,
	Checkbox,
	CheckboxOption,
}

// register globally all components
function install(Vue, options) {
	for (let name in components) {
		Vue.component(name, components[name])
	}
}

// export all components
module.exports = { install, ...components }
