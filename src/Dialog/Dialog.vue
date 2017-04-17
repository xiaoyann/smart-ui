<style lang="stylus">
.Dialog {
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
}	

.Dialog--main {
  border-radius: 4px;
  background-color: #fff;
}

.Dialog--bd {
	padding: 15px;
}

.Dialog--title {
	margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  color: #000;
}

.Dialog--content {
	text-align: center;
}

.Dialog--text {
	display: inline-block;
	text-align: left;
	font-size: 15px;
  line-height: 1.5;
  color: #757575;
}

.Dialog--button {
	position: relative;
  display: inline-block;
  width: 100%;
  height: 40px;
  padding: 0;
  border: none;
  font-size: 15px;
  line-height: 40px;
  text-align: center;
  outline: none;
  color: #2b8ff7;
  background-color: transparent;
  -webkit-user-select: none;
  user-select: none;
  text-decoration: none;
  &:active {
  	/*background-color: #e4e4e4;*/
  }
}

.Dialog--separator {
	position: relative;
	&:after {
		position: absolute;
    left: 50%;
		content: "";
    width: 1px;
    height: 100%;
    border-left: 1px solid #ccc;
    transform: scaleX(0.5) translateX(-50%);
	}
}

.Dialog--prompt {
	outline: none;
	-webkit-appearance: none;
	width: 100%;
	height: 24px;
	padding: 5px 3px;
	box-sizing: border-box;
	border: 1px solid #d9d9d9;
	border-radius: 3px;
	font-size: 14px;
	line-height: 1;
}
</style>

<template>
<Modal v-model="visible" anim="fade" bgcolor="rgba(0,0,0,.4)" :zIndex="zIndex">
	<div class="Dialog">
		<transition name="smart-anim--scale" @after-leave="afterLeave">
			<div v-show="visible" class="Dialog--main" :style="{'width': width}">
				<div class="Dialog--bd">
					<h3 v-show="title" class="Dialog--title">{{title}}</h3>
					<div v-show="content" class="Dialog--content" :style="{paddingTop: title ? '8px' : 0}">
						<div class="Dialog--text">{{content}}</div>
					</div>
					<div v-show="isPrompt" class="Dialog--content" :style="{paddingTop: title ? '8px' : 0}">
						<input ref="promptInput" class="Dialog--prompt" v-model="promptVal">
					</div>
				</div>
				<div :class="{'Dialog--separator': buttons.length === 2}">
					<a 
						v-for="btn in buttons" 
						class="Dialog--button smart-border-top" 
						:style="{'width': buttons.length === 2 ? '50%' : '100%'}"
						href="javascript:;"
						@click="handleClick(btn)"
					>
						{{btn.title}}
					</a>
				</div>
			</div>
		</transition>	
	</div>
</Modal>
</template>

<script>
import { Modal } from '../Modal'

function getType(obj) {
	return Object.prototype.toString.call(obj).slice(8, -1)
}

function isButton(obj) {
	const type = getType(obj)
	return /^(Object|Array|Function)$/.test(type)
}

function createButtons(options) {
	let buttons = []
	const type = getType(options)

	if (type === 'Object') {
		buttons = [options]
	} 
	else if (type === 'Function') {
		buttons = [{
			title: '确定',
			onClick: options
		}]
	}
	else if (type === 'Array') {
		buttons = options
	}

	if (buttons.length === 0) {
		buttons = [{ title: '确定' }]
	}
	
	return buttons.map(btn => {
		if (getType(btn) !== 'Object') {
			return { title: btn }
		} else {
			return btn
		}
	})
}

export default {
	data() {
		return {
			visible: false,
			title: '',
			content: '',
			buttons: [],
			isPrompt: false,
			promptVal: '',
			zIndex: 6
		}
	},

	components: {
		Modal
	},

	computed: {
		width() {
			return Math.floor(document.body.clientWidth * 0.85 / 15) * 15 + 'px'
		}
	},

	methods: {
		alert(title, content, buttons) {
			if (arguments.length === 1) {
				content = title
				title = undefined
			} else {
				if (isButton(content)) {
					buttons = content
					content = title
					title = undefined
				}
			} 
			this.title = title
			this.content = content
			this.buttons = createButtons(buttons)
			this.visible = true
		},

		confirm(title, content, callback) {
			if (arguments.length === 1) {
				content = title
				title = undefined
			}
			else {
				if (typeof content === 'function') {
					callback = content
					content = title
					title = undefined
				}
			}
			this.alert(title, content, [
				{
					title: '取消',
					onClick() {
						if (callback) callback(false)
					},
				},
				{
					title: '确认',
					onClick() {
						if (callback) callback(true)
					},
				}
			])
		},

		prompt(title, callback) {
			this.isPrompt = true
			this.alert(title, '', [
				{
					title: '取消',
				},
				{
					title: '确认',
					onClick: () => {
						if (callback) callback(this.promptVal)	
					}
				}
			])
		},

		handleClick(btn) {
			if (btn.onClick) {
				btn.onClick()
			}
			this.visible = false
		},

		afterLeave() {
			this.title = ''
			this.content = ''
			this.buttons = []
			this.promptVal = ''
			this.isPrompt = false
			this.zIndex = 6
		}
	}
}
</script>


