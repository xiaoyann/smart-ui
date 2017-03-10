<style lang="stylus">
.Field--bd {
	flex: 1;
	display: flex;
	align-items: center;
}

.Field--label {
	min-width: 75px;
	max-width: 150px;
	padding-right: 10px;
	font-size: 15px;
	color: #333;
}

.Field--input {
	flex: 1;
	input {
		outline: none;
		width: 100%;
		padding: 5px 0;
		border: none;
		font-size: 14px;
	}
}

.Field--delBox {
	padding-left: 5px;
}

.Field--del {
	position: relative;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: #d9d9d9;
	transform: rotate(45deg);
	&:before {
		content: "";
		width: 9px;
		height: 1px;
		position: absolute;
		left: 3px;
		right: 3px;
		top: 7px;
		bottom: 7px;
		background-color: #fff;
	}
	&:after {
		content: "";
		width: 1px;
		height: 9px;
		position: absolute;
		top: 3px;
		bottom: 3px;
		left: 7px;
		right: 7px;
		background-color: #fff;
	}
}
</style>

<template>
<Cell>
	<div v-if="label" class="Field--label" slot="header">
		{{label}}
	</div>
	<div class="Field--bd" slot="body">
		<div class="Field--input">
			<input :style="{textAlign: align}" :type="type" :value="val" :placeholder="placeholder" @input="handleInput">
		</div>
		<div class="Field--delBox" v-show="val" @click="clear">
			<div class="Field--del"></div>
		</div>
	</div>
</Cell>
</template>

<script>
export default {
	props: {
		label: {
			type: String
		},
		type: {
			type: String,
			default: 'text'
		},
		placeholder: {
			type: String,
		},
		align: {
			type: String,
			default: 'left'
		},
		value: {
		},
	},

	data() {
		return {
			val: ''
		}
	},

	watch: {
		val(newVal, oldVal) {
			this.$emit('input', newVal)
		}
	},

	methods: {
		handleInput(e) {
			this.val = e.target.value
		},
		clear() {
			this.val = ''
		}
	}
}
</script>

















