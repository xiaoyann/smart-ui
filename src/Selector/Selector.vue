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
	<div class="Selector--overlay">{{text}}</div>
</div>
</template>

<script>
export default {
	props: {
		value: {}
	},

	data() {
		this.options = []
		return {
			selectedIndex: -1,
		}
	},

	watch: {
		value() {
			this.checkStatus()
		}
	},

  computed: {
    text() {
      const option = this.options[this.selectedIndex]
      return  option ? option.text : ''
    }
  },

  updated() {
    if (this.$slots.default.length !== this.options.length) {
      this.pickOptions()
    }
  },

	mounted() {
		this.pickOptions()
	},

	methods: {
		pickOptions() {
			const options = this.$refs.selector.options
			;[].forEach.call(options, option => {
				this.options.push({
					text: option.innerHTML,
					value: option.value + '',
				})
			})
      this.selectedIndex = this.$refs.selector.selectedIndex
      this.emitEvent()
		},

		checkStatus() {
			this.options.some((option, index) => {
				if (option.value === this.value + '') {
					this.selectedIndex = index
          this.$refs.selector.selectedIndex = index
          return true
				}
			})
		},

		handleChange(e) {
			this.selectedIndex = e.target.selectedIndex
      this.emitEvent()
		},

    emitEvent() {
      const option = this.options[this.selectedIndex]
      if (option && this.value + '' !== option.value) {
        this.$emit('input', option.value)
      }
    }
	}
}
</script>






