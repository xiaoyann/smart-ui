<template>
<div>
	<Cell :title="n + ''" v-for="n in total"></Cell>
	<Loadmore @reachBottom="loadmore" :allLoaded="allLoaded" />
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