<template>
<div>
	<ul>
		<li>
			预约日期：{{date}}
		</li>
	</ul>
	<Cell title="预约日期" arrow>
		<Datepicker slot="body" placeholder="请选择预约日期" v-model="date"/>
	</Cell>
</div>
</template>

<script>
export default {
	data() {
		return {
			date: ''
		}
	}
}
</script>