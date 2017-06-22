<template>
<div>
	<Cell :title="n + ''" v-for="n in total" :key="n"></Cell>
	<Loadmore @reachBottom="loadmore" :visible="visible"></Loadmore>
</div>
</template>

<script>
export default {
	data() {
		return {
			total: 1,
			visible: true
		}
	},

  mounted() {
    setTimeout(() => {
      this.total = 15
    }, 2000)
  },

	methods: {
		loadmore() {
			setTimeout(() => {
				if (this.total >= 30) {
					this.visible = false
				} else {
					this.total += 5
				}
			}, 500)
		}
	}
}
</script>
