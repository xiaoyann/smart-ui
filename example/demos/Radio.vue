<template>
<div>
	<Radio title="性别" v-model="gender">
		<RadioOption value="男">男</RadioOption>
		<RadioOption value="女">女</RadioOption>
		<RadioOption value="" input>其他</RadioOption>
	</Radio>
</div>
</template>

<script>
export default {
	data() {
		return {
			gender: null
		}
	},

	mounted() {
		setTimeout(() => {
			this.gender = '女'
		}, 1000)
	}
}
</script>
