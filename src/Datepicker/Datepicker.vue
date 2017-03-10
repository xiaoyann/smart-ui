<style lang="stylus">
.Datepicker {
	flex: 1;
	position: relative;
	height: 26px;
	input {
		outline: none;
		position: absolute;
		top: 0;
		bottom: 0;
		z-index: 2;
		width: 100%;
		height: 100%;
		border: none;
		padding: 0;
		color: #fff;
		font-size: 0;
		background: transparent;
	}
}

.Datepicker--bd {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 26px;
	line-height: 26px;
	font-size: 14px;
	text-align: right;
}
</style>

<template>
<div class="Datepicker">
	<input type="date" v-model="val">
	<div class="Datepicker--bd">{{val || placeholder}}</div>
</div>
</template>

<script>
export default {
	props: {
		value: {},
		placeholder: String
	},

	data() {
		return {
			val: this.value
		}
	},

	watch: {
		val(newVal) {
			this.$emit('input', newVal)
		},

		value(newVal) {
			this.val = newVal
		}
	}
}
</script>
