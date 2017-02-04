<style lang="stylus">
.Loadmore {
	padding: 10px;
}	

.Loadmore--fetching {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25px;
	text-align: center;
	line-height: 1;
	font-size: 13px;
	color: #858585;
}
</style>

<template>
<div class="Loadmore" v-show="visible">
	<div class="Loadmore--fetching">
		<img height="25" src="./loading-black.svg">
		<span>{{desc}}</span>	
	</div>
</div>
</template>

<script>
export default {

	name: 'Lodamore',

	props: {
		allLoaded: {
			type: Boolean,
			default: false
		},
		desc: {
			type: String,
			default: '正在加载...'
		}
	},

	data() {
		return {
			visible: false
		}
	},

	watch: {
		allLoaded() {
			this.visible = false
		}
	},

	methods: {
		onscroll() {
			if (this.allLoaded) {
				return
			}

			let scrollTop = document.body.scrollTop
			let clientHeight = document.documentElement.clientHeight
			let scrollHeight = document.body.scrollHeight

			if (this.visible) {
				scrollHeight -= 45
			}

			if (scrollTop + clientHeight >= scrollHeight) {
				this.$emit('reachBottom')
			}
		}
	},

	mounted() {
		let clientHeight = document.documentElement.clientHeight
		let scrollHeight = document.body.scrollHeight
		if (scrollHeight > clientHeight) {
			this.visible = true
			window.addEventListener('scroll', this.onscroll)
		}
	},

	destroyed() {
		window.removeEventListener('scroll', this.onscroll)
	}
}
</script>
