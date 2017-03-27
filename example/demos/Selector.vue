<template>
<div>
	<ul>
		<li>在哪啊：{{city}}</li>
	</ul>
	<Cell title="在哪啊" arrow>
		<Selector slot="body" v-model="city" placeholder="请选择">
			<option :value="1">北京</option>
			<option :value="2">上海</option>
			<option value="3">广州</option>
			<option value="4">深圳</option>
		</Selector>
	</Cell>
</div>	
</template>

<script>
export default {
	data() {
		return {
			city: ""
		}
	}
}
</script>