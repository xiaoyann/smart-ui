<style lang="stylus">
.CellGroup {
	position: relative;
	.CellBox {
		padding-left: 13px;
	}
	.Cell {
		padding-left: 0;
	}
}	
</style>

<template>
<div class="CellGroup smart-border-top smart-border-bottom">
	<slot></slot>	
</div>
</template>

<script>
export default {
	name: 'CellGroup'
}
</script>