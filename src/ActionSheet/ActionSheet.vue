<style lang="stylus">
.ActionSheet {
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
}

.ActionSheet--title {
  padding: 5px 10px;
  font-size: 12px;
  text-align: center;
  line-height: 1.5;
  color: #999;
  background-color: #fff;
}	

.ActionSheet--option {
  width: 100%;
  height: 46px;
  position: relative;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  line-height: 46px;
  background-color: #fff;
  position: relative;
}

.ActionSheet--cancel {
	margin-top: 5px;
}
</style>

<template>
<Modal v-model="visible" anim="fade" bgcolor="rgba(0,0,0,.4)" :dismissOnClick="true" :zIndex="zIndex">
	<transition name="smart-anim--bottomUp">
		<div v-show="visible" class="ActionSheet">
			<div v-if="title" class="ActionSheet--title">{{title}}</div>
			<div class="ActionSheet--options">
				<div 
					class="ActionSheet--option smart-border-top" 
					:style="{color: getFontColor(opt)}"
					v-for="(opt, i) in options" @click="handleClick(i)"
				>
					{{opt.text}}
				</div>
			</div>
			<div 
				v-if="hideCancel == false" 
				class="ActionSheet--option smart-border-top ActionSheet--cancel" 
				:style="{color: tintColor}"
				@click="hide"
			>
				取消
			</div>
		</div>
	</transition>	
</Modal>
</template>

<script>
import { Modal } from '../Modal'

// 禁止点击的按钮颜色
const disableColor = '#999999'
// 危险操作的按钮颜色
const destructiveColor = '#FF3B30'

export default {
	name: 'ActionSheet',

	data() {
		return {
			visible: false,
			// 标题
			title: '',
			// 可操作的选项
			options: [],
			// 是否隐藏取消按钮
			hideCancel: false,
			// 按钮颜色
			tintColor: '#2b8ff7',
			// css z-index
			zIndex: 2
		}
	},

	components: {
		Modal
	},

	methods: {
		show(title, options, hideCancel = false) {
			this.title = title
			this.hideCancel = hideCancel
			this.options = options.map(opt => {
				if (typeof opt === 'object') {
					return opt
				} else {
					return { text: opt, disable: false, destructive: false }
				}
			})
			this.visible = true
		},
		
		hide() {
			this.visible = false
		},
		
		handleClick(i) {
			const conf = this.options[i]
			if (!conf.disable && conf.onSelect) {
				conf.onSelect()
				this.hide()
			} 
		},

		// 计算按钮颜色
		getFontColor(opt) {
			if (opt.disable) {
				return disableColor
			}
			if (opt.destructive) {
				return destructiveColor
			}
			return this.tintColor
		}
	}
}	
</script>


