<style lang="stylus">
.Toast {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	height: 100%;
}

.Toast--main {
	max-width: 195px;
	padding: 10px;
	border-radius: 5px;
	font-size: 13px;
	line-height: 1.5;
	color: #fff;
	background-color: rgba(0, 0, 0, .7);
	&.bottom {
		position: absolute;
		bottom: 80px;
	}
	&.center {
		align-self: center;
	}
	&.top {
		position: absolute;
		top: 80px;
	}
}
</style>

<template>
<transition 
	name="smart-anim--fade"
	@after-leave="afterLeave"
>
	<div class="Toast" v-show="visible">
		<div 
			class="Toast--main" 
			:class="{
				top: position === 'top',
				center: position === 'center',
				bottom: position === 'bottom',
			}"
		>
			{{content}}
		</div>	
	</div>
</transition>	
</template>

<script>
export default {
	data() {
		return {
			visible: false,
			content: '',
			time: 2000,
			position: 'center'
		}
	},

	methods: {
		show(content, position = 'center', time = 2000) {
			this.content = content
			this.position = position
			this.time = time
			this.visible = true
			setTimeout(() => {
				this.hide()
			}, this.time)
		},

		hide() {
			this.visible = false
		},

		afterLeave() {
			this.content = ''
			this.position = 'center'
			this.time = 2000
		}
	}
}
</script>

