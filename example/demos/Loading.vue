<template>
<ul>
	<li>
		<a href="javascript:;" @click="show()">Show Loading</a>
	</li>
	<li>
		<a href="javascript:;" @click="show('稍等，正在加载')">Show Loading with message</a>
	</li>
</ul>
</template>

<script>
export default {
	methods: {
		show(message) {
			this.$loading.zIndex(8).show(message)
			setTimeout(() => {
				// this.$loading.hide()
			}, 2000)
		}
	}
}
</script>
