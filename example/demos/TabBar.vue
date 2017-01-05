<style lang="stylus" scoped>
.tabBarDemoBox {
	position: relative;
	padding-top: 30px;
	padding-bottom: 48px;
}
h3 {
	padding-left: 15px;
	font-weight: 400;
	font-size: 14px;
	color: #858585;
}
ul {
	font-size: 12px;
}
button {
	border: 1px solid #d9d9d9;
	color: #fff;
	background-color: #38f;
}
</style>

<style>
.tabBarDemoBox .TabBarItem.selected {
	color: #2b8ff7;
}
</style>

<template>
<div>
	<div class="tabBarDemoBox">
		<h3>basic use case</h3>
		<ul>
				<li>1. widthout icon</li>
				<li>2. navigate by click event</li>
				<li>3. fixed by absolute position</li>
			</ul>
		<TabBar>
			<TabBarItem :selected="selected === 0" title="首页" @click="selected = 0"/>
			<TabBarItem :selected="selected === 1" title="关于" @click="selected = 1">
		</TabBar>
	</div>
	<div class="tabBarDemoBox" style="position: fixed; bottom: 0; width: 100%">
		<div style="padding-bottom: 15px">
			<h3>more complete use case</h3>
			<ul>
				<li>1. add icon by slot: icon, icon-selected</li>
				<li>2. navigate by prop: to</li>
				<li>3. fixed in the bottom by prop: fixed</li>
				<li>4. reset background-color by prop: bgcolor</li>
				<li>5. can be hide: <button @click="toggle">click here to {{visible ? 'hide' : 'show'}} me</button></li>
			</ul>
		</div>
		<TabBar fixed :visible="visible" bgcolor="rgba(242, 218, 218, .7)">
			<TabBarItem to="/tabBarDemo1" :selected="$route.path === '/tabBarDemo1'" title="首页">
				<img slot="icon" src="../images/diamond.svg" />
				<img slot="icon-selected" src="../images/diamond-active.svg" />
			</TabBarItem>
			<TabBarItem to="/tabBarDemo2" :selected="$route.path === '/tabBarDemo2'" title="关于">
				<img slot="icon" src="../images/like.svg" />
				<img slot="icon-selected" src="../images/like-active.svg" />
			</TabBarItem>
		</TabBar>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			selected: 0,
			visible: true
		}
	},
	methods: {
		toggle() {
			this.visible = !this.visible
		}
	}
}
</script>


