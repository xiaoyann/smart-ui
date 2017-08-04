<template>
<div>
	<ul>
		<li>
			预约日期：{{date}}
		</li>
	</ul>
	<CellGroup :hasBorder="false">
    <Datepicker title="预约日期" placeholder="请选择预约日期" v-model="date"/>
  </CellGroup>
</div>
</template>

<script>
export default {
	data() {
		return {
			date: '2018-08-08'
		}
	}
}
</script>
