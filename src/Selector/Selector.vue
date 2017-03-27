<style lang="stylus">
.Selector {
	flex: 1;
	position: relative;
	height: 26px;
}

.Selector--select {
	outline: none;
	-webkit-appearance: none;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 2;
	width: 100%;
	height: 26px;
	border: none;
	text-align: right;
	font-size: 0;
	color: #fff;
	background-color: transparent;
}

.Selector--overlay {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	line-height: 26px;
	font-size: 14px;
	text-align: right;
	background-color: #fff
}
</style>

<template>
<div class="Selector">
	<select ref="selector" class="Selector--select" @change="handleChange">
		<slot></slot>
	</select>
	<div class="Selector--overlay">
		{{getText()}}
	</div>
</div>
</template>

<script>
export default {
	props: {
		value: {},
		placeholder: {
			type: String,
		}
	},

	data() {
		this.options = []
		return {
			selectedIndex: -1,
		}
	},

	watch: {
		selectedIndex(newIndex) {
			const option = this.options[newIndex]
			if (option) {
				this.$refs.selector.selectedIndex = newIndex
				this.$emit('input', option.value)
			}
		},
		
		value() {
			this.checkStatus()
		}
	},

	mounted() {
		const options = this.$refs.selector.options
		this.selectedIndex = this.$refs.selector.selectedIndex

		;[].forEach.call(options, option => {
			this.options.push({
				text: option.innerHTML,
				value: option.value,
			})
		})

		this.checkStatus()
	},

	methods: {
		checkStatus() {
			let selectedIndex = this.selectedIndex
			this.options.forEach((option, index) => {
				if (option.value === this.value + '') {
					selectedIndex = index
				}
			})
			this.selectedIndex = selectedIndex
		},

		handleChange(e) {
			this.selectedIndex = e.target.selectedIndex
		},

		getText() {
			if (this.selectedIndex > -1) {
				const option = this.options[this.selectedIndex] || {}
				return option.text
			} else {
				return this.placeholder
			}
		}
	}
}
</script>






