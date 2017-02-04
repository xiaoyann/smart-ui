<style lang="stylus">
.Checkbox--title {
	font-size: 15px;
	font-weight: 400;
	color: #8e8e90;
	margin: 0;
	height: 48px;
	padding-left: 10px;
	line-height: 48px;
	background-color: #fff;
	position: relative;
}
</style>

<template>
<div>
	<CellGroup ref="cells">
		<h3 class="Checkbox--title smart-border-bottom">{{title}}</h3>
		<div><slot></slot></div>
	</CellGroup>
</div>
</template>

<script>
import { CellGroup } from '../Cell'

export default {
	name: 'Checkbox',

	props: {
		title: String,
		value: Array,
	},

	components: {
		CellGroup
	},

	mounted() {
		this.watchChildren()
		this.checkStatus(this.value)
	},

	updated() {
		this.checkStatus(this.value)
	},

	methods: {
		setValue(checked, val) {
			let values = []
			this.$refs.cells.$children.forEach(child => {
				if (child.checked) {
					values.push(child.value)
				}
			})
			this.$emit('input', values)
		},

		watchChildren() {
			this.$refs.cells.$children.forEach(
				child => child.$on('click', this.setValue)
			)
		},

		checkStatus(values) {
			this.$refs.cells.$children.forEach(
				child => child.checkStatus(values)
			)
		}
	}
}
</script>


