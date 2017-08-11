// common style
import './style.styl'

// components
import { TabBar, TabBarItem } from './TabBar'
import { Cell, CellGroup } from './Cell'
import { Radio, RadioOption } from './Radio'
import { Checkbox, CheckboxOption } from './Checkbox'
import Field from './Field'
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
  Switcher
}

// register globally all components
function install (Vue) {
  for (const name in components) {
    Vue.component(name, components[name])
  }
  Vue.prototype.$actionSheet = $actionSheet
  Vue.prototype.$loading = $loading
  Vue.prototype.$toast = $toast
  Vue.prototype.$dialog = $dialog
}

module.exports = { install }
