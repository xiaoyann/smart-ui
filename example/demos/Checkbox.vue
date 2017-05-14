<template>
<div>
	<Checkbox title="爱好" v-model="hobby">
		<CheckboxOption value="妹子">妹子</CheckboxOption>
		<CheckboxOption :value="1">篮球</CheckboxOption>
		<CheckboxOption value="钓鱼">钓鱼</CheckboxOption>
		<CheckboxOption value="诛仙">诛仙</CheckboxOption>
		<CheckboxOption value="">其他</CheckboxOption>
	</Checkbox>
	<p>{{hobby}}</p>
</div>
</template>

<script>
export default {
	data() {
		return {
			hobby: [1]
		}
	},

	mounted() {
		setTimeout(() => {
			this.hobby = ['诛仙']
		}, 1000)
	},
}
</script>