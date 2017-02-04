<template>
<div>
	<ul>
    <li>
      <a href="javascript:;" @click="open">Open ActionSheet</a>
    </li> 
  </ul>
</div>
</template>

<script>
export default {
	methods: {
		open() {
			const options =	[
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
      this.$actionSheet.show('确认要分手吗？', options, false)
		}
	}
}
</script>