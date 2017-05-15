<smart-demo :source="source">
  <div style="padding-bottom: 48px; background-color: #fff; position: relative;" slot="demo">
    <p style="padding: 10px">
      注意浏览器地址的变化： {{$route.path}}
    </p>
    <TabBar bgcolor="#f5f5f5" class="TabBarDemo2">
      <TabBarItem to="/TabBar/index" :selected="$route.path === '/TabBar/index'" title="首页"></TabBarItem>
      <TabBarItem to="/TabBar/about" :selected="$route.path === '/TabBar/about'" title="关于"></TabBarItem>
    </TabBar>
  </div>
</smart-demo>
