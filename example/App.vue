<style>
.container {
	padding-bottom: 58px;
}
</style>

<template>
<div>
	<router-view :class="{'container': visible}"></router-view>
	<TabBar fixed :visible="visible">
		<TabBarItem to="/About" title="About" :selected="$route.path === '/About'">
			<img slot="icon" src="./images/basketball.svg" />
			<img slot="icon-selected" src="./images/basketball.svg" />
		</TabBarItem>
		<TabBarItem to="/Demos" title="Demos" :selected="$route.path === '/Demos'">
			<img slot="icon" src="./images/food.svg" />
			<img slot="icon-selected" src="./images/food.svg" />
		</TabBarItem>
	</TabBar>
</div>
</template>

<script>
const routes = [
	'/',
	'/About',
	'/Demos',
]

export default {
	computed: {
		visible() {
			return routes.indexOf(this.$route.path) > -1
		}
	}
}
</script>
