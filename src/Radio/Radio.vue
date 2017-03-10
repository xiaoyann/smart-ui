<style lang="stylus">
.RadioBox {
	padding-left: 15px;
	background-color: #fff;
}

.Radio--title {
	position: relative;
	padding: 10px 0;
	font-size: 15px;
	color: #8e8e90;
}
</style>

<template>
<div class="RadioBox">
	<div class="Radio--title smart-border-bottom" v-if="title">{{title}}</div>
	<div><slot></slot></div>
</div>
</template>

<script>
export default {
	name: 'Radio',

	props: [
		'value', 
		'title',
	],

	watch: {
		value(newVal) {
			this.checkStatus(newVal)
		}
	},

	mounted() {
		this.watchChildren()
		this.checkStatus(this.value)
	},

	methods: {
		setValue(v) {
			this.$emit('input', v)
			this.checkStatus(v)
		},

		checkStatus(v) {
			this.$children.forEach(child => child.checkStatus(v))
		},
		
		watchChildren() {
			this.$children.forEach(
				child => child.$on('changed', this.setValue)
			)
		}
	}
}
</script>



