<template>
<ul>
	<li>
		<a href="javascript:;" @click="open('top')">Show Toast in the top of page</a>
	</li>
	<li>
		<a href="javascript:;" @click="open('center')">Show Toast in the middle of page</a>
	</li>
	<li>
		<a href="javascript:;" @click="open('bottom')">Show Toast in the bottom of page</a>
	</li>
</ul>
</template>

<script>
export default {
	methods: {
		open(position) {
			this.$toast.zIndex(8).show('哇哈哈哈哈，登录成功了~', position, function() {
				console.log(position)
			})
		}
	}
}
</script>