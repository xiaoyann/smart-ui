<style lang="stylus">
.RadioOption {
	position: relative;
	display: flex;
	align-items: center;
	min-height: 28px;
	padding-top: 10px;
	padding-bottom: 10px;
	&:before {
		border-top: 1px solid #e5e5e5 !important;
	}
}

.RadioOptionBox:first-child {
	.RadioOption:before {
		border-top: none !important;	
	}
}

.RadioOption--icon {
	display: inline-block;
	overflow: hidden;
	width: 20px;
	height: 20px;
	border: 1px solid #d9d9d9;
	border-radius: 50%;
	box-sizing: border-box;
	background-color: #fff;
}

.RadioOption--iconInner {
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	transition: all 0.15s;
	background-color: #fff;
}

.RadioOption.active {
	.RadioOption--icon {
		border-color: #2b8ff7;
		background-color: #2b8ff7;
	}
	.RadioOption--iconInner {
		transform: scale(0.35);	
	}
}

.RadioOption--text {
	flex: 1;
	margin-left: 10px;
	font-size: 15px;
	color: #333;
}

.RadioOption--ipt {
	padding-bottom: 10px;
	padding-right: 10px;

	input {
		outline: none;
		width: 100%;
		height: 28px;
		padding: 7px 3px;
		border: 1px solid #e5e5e5;
		border-radius: 2px;
		box-sizing: border-box;
		font-size: 12px;
		line-height: 1;
		background-color: #f5f5f5
	}
}
</style>

<template>
<div class="RadioOptionBox">
	<div class="RadioOption smart-border-top" :class="{active: active}"" @click="onClick">
		<div class="RadioOption--icon">
			<span class="RadioOption--iconInner"></span>
		</div>
		<div class="RadioOption--text">
			<slot></slot>
		</div>
	</div>
	<div class="RadioOption--ipt" v-if="hasInput">
		<input ref="ipt" type="text" placeholder="请输入..." v-model="val" />
	</div>
</div>	
</template>

<script>
export default {
	name: 'RadioOption',

	props: [
		'value',
		'input'
	],

	data() {
		return {
			val: this.value,
			active: false,
		}
	},

	computed: {
		hasInput() {
			return typeof this.input !== 'undefined'
		}
	},

	watch: {
		val(v) {
			this.$emit('changed', v)
		}
	},

	methods: {
		onClick() {
			if (this.hasInput) {
				this.$refs.ipt.focus()
			}
			this.$emit('changed', this.val)
		},

		checkStatus(radioValue) {
			this.active = radioValue === this.val
		}
	},
}
</script>





