// common style
import './style.styl'

// components
import { TabBar, TabBarItem } from './TabBar'
import { Cell, CellGroup } from './Cell'
import { Radio, RadioOption } from './Radio'
import { Checkbox, CheckboxOption } from './Checkbox'
import { Field } from './Field'
import Datepicker from './Datepicker'
import { Selector, SelectorOption } from './Selector'
import { Modal } from './Modal'
import { Popup } from './Popup'
import { Loadmore } from './Loadmore'
import { Spinner } from './Spinner'
import Button from './Button'
import { Switcher } from './Switcher'
import $loading from './Loading'
import $actionSheet from './ActionSheet'
import $toast from './Toast'
import $dialog from './Dialog'
import Calendar from './Calendar'
import Picker from './Picker'
import ScrollView from './ScrollView'

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
  SelectorOption,
  Modal,
  Popup,
  Loadmore,
  Spinner,
  Button,
  Switcher,
  Calendar,
  Picker,
  ScrollView
}

// register globally all components
function install (Vue) {
  for (const name in components) {
    const component = components[name].component || components[name]
    Vue.component(name, component)
  }
  Vue.prototype.$actionSheet = $actionSheet.init()
  Vue.prototype.$loading = $loading
  Vue.prototype.$toast = $toast
  Vue.prototype.$dialog = $dialog
}

// Components can export a function named config to
// customize some options for user
function config (name) {
  const args = [].slice.call(arguments, 1)
  const modules = {
    ActionSheet: $actionSheet,
    Loading: $loading,
    Toast: $toast,
    Dialog: $dialog
  }
  const module = components[name] || modules[name]
  if (typeof module.config === 'function') {
    module.config.apply(null, args)
  } else {
    console.warn(`${name}.config is not a function`)
  }
}

// eslint-disable-next-line
module.exports = { install, config }
