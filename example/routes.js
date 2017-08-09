import About from './About'
import Demos from './demos/Index'
import Cell from './demos/Cell'
import Radio from './demos/Radio'
import Checkbox from './demos/Checkbox'
import TabBar from './demos/TabBar'
import Field from './demos/Field'
import Datepicker from './demos/Datepicker'
import Selector from './demos/Selector'
import Modal from './demos/Modal'
import ActionSheet from './demos/ActionSheet'
import Loading from './demos/Loading'
import Spinner from './demos/Spinner'
import Toast from './demos/Toast'
import Dialog from './demos/Dialog'
import Loadmore from './demos/Loadmore'
import Popup from './demos/Popup'
import Button from './demos/Button'
import Switcher from './demos/Switcher'
import Calendar from './demos/Calendar'
import Picker from './demos/Picker'
import ScrollView from './demos/ScrollView'

const views = {
  About,
  Demos,
  Cell,
  Radio,
  Checkbox,
  TabBar,
  Field,
  Datepicker,
  Selector,
  Modal,
  ActionSheet,
  Loading,
  Spinner,
  Toast,
  Dialog,
  Loadmore,
  Popup,
  Button,
  Switcher,
  Calendar,
  Picker,
  ScrollView
}

const routes = Object.keys(views).map(
	name => ({
		path: `/${name}`,
		component: views[name]
	})
)

routes.push({
	path: '/',
	redirect: '/About'
})

routes.push({
	path: '/tabBarDemo1',
	component: TabBar
})

routes.push({
	path: '/tabBarDemo2',
	component: TabBar
})

export default routes
