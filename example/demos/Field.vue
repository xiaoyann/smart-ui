<template>
<div>
	<ul>
		<li>
			username: {{username}}
		</li>
		<li>
			mobile: {{mobile}}
		</li>
		<li>
			birthday: {{birthday}}
		</li>
	</ul>
	<CellGroup>
		<Field placeholder="请输入用户名" align="left" v-model="username"/>
		<Field label="手机号" type="number" placeholder="请输入手机号" align="left" v-model="mobile"/>
		<Field label="生日" type="date" placeholder="请选择您的生日" align="left" v-model="birthday"/>
	</CellGroup>
</div>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			mobile: '',
			birthday: ''
		}
	}
}
</script>