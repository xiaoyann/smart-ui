<template>
<div style="padding: 30px">
	<a href="javascript:;" @click="open">Open ActionSheet</a>
</div>
</template>

<script>
export default {
	methods: {
		open() {
			let options =	[
        {
          text: '我再想想',
          onSelect: () => {
            console.log('是应该好好想想')
          }
        },
        {
          text: '就这样吧',
          destructive: true,
          onSelect: () => {
            console.log('借酒消愁去吧')
          },
        },
        {
          text: '见鬼去吧',
          disable: true
        }
	    ]
      options = options.concat(options)
      options = options.concat(options)
      this.$actionSheet.show('确认要分手吗？', options, false)
		}
	}
}
</script>
