<div>
  <site-header></site-header>
  <div class="main">
    <div class="sidenav">
      <h3 class="sidenav--groupName">概述</h3>
      <ul class="sidenav--list">
        <li><router-link to="/Installation">如何安装</router-link></li>
        <li><a href="https://xiaoyann.github.io/smart-ui/demo">完整例子</a></li>
      </ul>
      <h3 class="sidenav--groupName">组件</h3>
      <ul class="sidenav--list">
        <li v-for="(nav, k) in navs" :key="'nav'+k">
          <router-link :to="'/'+nav">{{nav}}</router-link>
        </li>
      </ul>
    </div>
    <div class="content markdown-body">
      <router-view></router-view>
    </div>
  </div>
</div>
