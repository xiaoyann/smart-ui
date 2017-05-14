import installation from './pages/installation'
// import TabBar from './pages/TabBar.md'
// import Demos from './demos/Index'
// import Cell from './demos/Cell'
// import Radio from './demos/Radio'
// import Checkbox from './demos/Checkbox'
// import Field from './demos/Field'
// import Datepicker from './demos/Datepicker'
// import Selector from './demos/Selector'
// import Modal from './demos/Modal'
// import ActionSheet from './demos/ActionSheet'
// import Loading from './demos/Loading'
// import Spinner from './demos/Spinner'
// import Toast from './demos/Toast'
// import Dialog from './demos/Dialog'
// import Loadmore from './demos/Loadmore'
// import Popup from './demos/Popup'
// import Button from './demos/Button'
// import Switcher from './demos/Switcher'

const views = {
  installation,
  // TabBar,
  // Demos,
  // Cell,
  // Radio,
  // Checkbox,
  // TabBar,
  // Field,
  // Datepicker,
  // Selector,
  // Modal,
  // ActionSheet,
  // Loading,
  // Spinner,
  // Toast,
  // Dialog,
  // Loadmore,
  // Popup,
  // Button,
  // Switcher
}

const routes = Object.keys(views).map(
  name => ({
    path: `/${name}`,
    component: views[name]
  })
)

routes.push({
  path: '/',
  redirect: '/installation'
})

// routes.push({
//   path: '/TabBar/index',
//   component: TabBar
// })

// routes.push({
//   path: '/TabBar/about',
//   component: TabBar
// })

export default routes
