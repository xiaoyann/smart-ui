import Installation from './pages/installation'
import TabBar from './pages/tabBar'
import Cell from './pages/cell'
import Modal from './pages/modal'
import Popup from './pages/popup'
import ActionSheet from './pages/actionSheet'
import Loading from './pages/loading'
import Spinner from './pages/spinner'
import Toast from './pages/toast'
import Dialog from './pages/dialog'
import Loadmore from './pages/loadmore'
import Switcher from './pages/switcher'
import Button from './pages/button'
import Field from './pages/field'
import Checkbox from './pages/checkbox'
import Radio from './pages/radio'
import Datepicker from './pages/datepicker'
import Selector from './pages/selector'


const views = {
  Installation,
  TabBar,
  Cell,
  Modal,
  Popup,
  ActionSheet,
  Loading,
  Spinner,
  Toast,
  Dialog,
  Loadmore,
  Switcher,
  Button,
  Field,
  Checkbox,
  Radio,
  Datepicker,
  Selector,
}

const routes = Object.keys(views).map(
  name => ({
    path: `/${name}`,
    component: views[name]
  })
)

routes.push({
  path: '/',
  redirect: '/Installation'
})

routes.push({
  path: '/TabBar/index',
  component: TabBar
})

routes.push({
  path: '/TabBar/about',
  component: TabBar
})

export default routes
