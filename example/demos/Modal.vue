<style scoped>
li {
	padding: 5px 0;
}
</style>

<template>
<div>
	<ul>
		<li>
			<a href="javascript:;" @click="open('fade')">Open the Modal with fade animation</a>
		</li>
		<li>
			<a href="javascript:;" @click="open('bottomUp')">Open the Modal with bottomUp animation</a>
		</li>
		<li>
			<a href="javascript:;" @click="open('none')">Open the Modal without animation</a>
		</li>
	</ul>
	<Modal v-model="visible" :anim="animName" bgcolor="rgba(0, 0, 0, .4)" zIndex="10">
		<div style="display: flex; align-items: center; height: 100%; justify-content: center;">
			<div style="background-color: #fff; padding: 20px 50px;" @click="close">Close Modal</div>
		</div>
	</Modal>
</div>
</template>

<script>
export default {
	data() {
		return {
			visible: false,
			animName: 'none'
		}
	},
	methods: {
		open(animName) {
			this.animName = animName
			this.visible = true
		},
		close() {
			this.visible = false
		}
	}
}
</script>

