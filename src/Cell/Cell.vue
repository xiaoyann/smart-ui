<style lang="stylus">
.CellBox {
	background-color: #fff;
	&:active {
		background-color: #f5f5f5;
	}
}

.Cell {
	position: relative;
	display: flex;
	align-items: center;
	min-height: 48px;
	padding-top: 8px;
	padding-bottom: 8px;
	padding-left: 10px;
	padding-right: 10px;
	box-sizing: border-box;
}	

.Cell--bd {
	flex: 2;
	padding-left: 5px;
	overflow: hidden;
}

.Cell--main {
	float: right;
	word-break: break-all;
	font-size: 15px;
	color: #8e8e90;
}

.Cell--hd {
	display: flex;
	align-items: center;
	max-width: 60%;
}

.Cell--title {
	flex: 1;
	font-size: 15px;
	color: #333;
}

.Cell--icon {
	width: 22px;
	height: 22px;
	padding-right: 8px;
	line-height: 1;
	overflow: hidden;
}

.Cell--icon > * {
	width: 100%;
	height: 100%;
}

.Cell--arrow {
	display: block;
	width: 16px;
	height: 20px;
	background-image: url(./enter.svg);
	background-position: 4px center;
	background-repeat: no-repeat;
	background-size: 16px;
}
</style>

<template>
<div class="CellBox" @click="handleClick">
	<div class="Cell smart-border-top">
		<div class="Cell--hd">
			<div class="Cell--icon" v-if="hasIcon">
				<slot name="icon"></slot>
			</div>
			<slot name="header">
				<span class="Cell--title">{{title}}</span>
			</slot>
		</div>
		<div class="Cell--bd">
			<div class="Cell--main">
				<slot name="body">
					{{content}}
				</slot>
			</div>
		</div>
		<i v-if="hasArrow" class="Cell--arrow"></i>
	</div>	
</div>
</template>

<script>
export default {
	name: 'Cell',

	props: {
		title: String,
		content: String,
		// whether display arrow icon
		arrow: undefined,
		// navigate to another URL by Router
		to: String,
	},

	computed: {
		hasIcon() {
			return !!this.$slots.icon
		},
		hasArrow() {
			return this.arrow === false ? false
			 : this.to ? true : typeof this.arrow !== 'undefined'
		}
	},

	methods: {
		handleClick() {
			if (this.to) {
				// is standard URL
				if (/^https?\:/.test(this.to)) {
					window.location = this.to
				} else {
					if (this.$router) {
						this.$router.push(this.to)
					} else {
						this.$emit('click')
					}
				}
			} else {
				this.$emit('click')
			}
		}
	}
}
</script>


