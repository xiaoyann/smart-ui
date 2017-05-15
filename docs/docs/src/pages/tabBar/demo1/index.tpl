<smart-demo :source="source">
  <div style="padding-bottom: 48px; background-color: #fff; position: relative;" slot="demo">
    <div style="padding: 20px 0; text-align: center;" v-if="selected === 0">
      首页
    </div>
    <div style="padding: 20px 0; text-align: center;" v-if="selected === 1">
      关于 Smart UI
    </div>
    <TabBar bgcolor="#f5f5f5">
      <TabBarItem :selected="selected === 0" title="首页" @click="selected = 0">
        <img slot="icon" src="../../../images/diamond.svg" />
        <img slot="icon-selected" src="../../../images/diamond-active.svg" />
      </TabBarItem>
      <TabBarItem :selected="selected === 1" title="关于" @click="selected = 1">
        <img slot="icon" src="../../../images/like.svg" />
        <img slot="icon-selected" src="../../../images/like-active.svg" />
      </TabBarItem>
    </TabBar>
  </div>
</smart-demo>
