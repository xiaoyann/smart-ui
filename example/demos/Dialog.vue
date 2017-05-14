<template>
<ul>
	<li>
		<a href="javascript:;" @click="alert">alert</a>
	</li>
	<li>
		<a href="javascript:;" @click="confirm">confirm</a>
	</li>
	<li>
		<a href="javascript:;" @click="prompt">prompt</a>
	</li>
</ul>
</template>

<script>
export default {
	methods: {
		alert() {
			this.$dialog.alert('提示', '那天你站在柳树边说柳絮飞扬却不是我的梦想我对你微笑着点头', [
				{
					title: '取消',
					onClick() {}
				},
				{
					title: '确认',
					onClick() {}
				}
			])
		},
		confirm() {
			this.$dialog.confirm('提示', '真的要酱紫嘛😯', result => {
				alert(result)
			})
		},
		prompt() {
			this.$dialog.prompt('你最喜欢的英雄是谁？', result => {
				alert(result)
			})
		}
	}
}
</script>