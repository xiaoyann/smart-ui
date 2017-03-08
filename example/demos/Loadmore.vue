<template>
<div>
	<Cell :title="n + ''" v-for="n in total"></Cell>
	<div style="padding: 5px 0">
		<Loadmore @reachBottom="loadmore" :allLoaded="allLoaded"></Loadmore>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			total: 15,
			allLoaded: false
		}
	},

	methods: {
		loadmore() {
			setTimeout(() => {
				if (this.total >= 30) {
					this.allLoaded = true
				} else {
					this.total += 5
				}
			}, 500)
		}
	}
}
</script>