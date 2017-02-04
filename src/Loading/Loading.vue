<style lang="stylus">
.Loading {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}

.Loading--main {
	padding: 10px;
	border-radius: 5px;
	line-height: 0;
	text-align: center;
	box-sizing: border-box;
	background-color: rgba(0, 0, 0, .6)
}

.Loading--message {
	margin: 0;
	padding: 10px 0;
	font-size: 12px;
	color: #fff;
}
</style>

<template>
<div class="Loading" v-show="visible">
	<div class="Loading--main">
		<img width="50" src="./loading.svg">
		<p class="Loading--message" v-show="message">{{message}}</p>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			message: '',
			visible: false
		}
	},

	methods: {
		show(message) {
			this.message = message
			this.visible = true
		},

		hide() {
			this.message = ''
			this.visible = false
		}
	}
}
</script>