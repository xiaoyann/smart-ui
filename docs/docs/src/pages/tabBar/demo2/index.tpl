<smart-demo :source="source">
<div style="position: relative; height: 100px; padding-bottom: 58px; overflow: hidden; user-select: none" slot="demo">
  <Button @click="visible = !visible">{{visible ? '点我隐藏' : '点我显示'}}</Button>
  <TabBar :visible="visible">
    <TabBarItem title="首页" :selected="selected === 0" @click="selected = 0"></TabBarItem>
    <TabBarItem title="我的" :selected="selected === 1" @click="selected = 1"></TabBarItem>
  </TabBar>
</div>
</smart-demo>
