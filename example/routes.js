import About from './About'
import Demos from './demos/Index'
import Cell from './demos/Cell'
import Radio from './demos/Radio'
import Checkbox from './demos/Checkbox'
import TabBar from './demos/TabBar'

const views = {
	About,
	Demos,
	Cell,
	Radio,
	Checkbox,
	TabBar,
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