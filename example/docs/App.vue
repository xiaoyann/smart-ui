<style lang="stylus" scoped>
maxWidth = 1080px

.header {
  background: #0d2636;
}

.header--bd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: maxWidth;
  height: 50px;
  margin: 0 auto;
}

.logo {
  flex: 1;
  font-size: 20px;
  color: #fff;
}

.header--link {
  padding: 15px 30px;
  color: #f0e9e9;
  font-size: 13px;
  text-decoration: none;
  &:hover {
    color: #8DD6F9;
  }
}

.github {
  width: 28px;
  height: 28px;
  color: #fff;
  svg {
    fill: currentColor;
    vertical-align: text-bottom;
  }
}

.main {
  display: flex;
  width: maxWidth;
  margin: 0 auto;
  padding: 20px 0;
}

.sidenav {
  width: 160px;
  padding: 15px;
  border-radius: 3px;
  background-color: #f5f5f5;
}

.sidenav--groupName {
  margin: 0;
  font-size: 16px;
}

.sidenav--list {
  margin: 0;
  padding: 15px 0;
  list-style: none;
  a {
    font-size: 14px;
    line-height: 1.8;
    text-decoration: none;
    color: #757575;
  }
  .router-link-active {
    color: #30afe4;
  }
}

.content {
  position: relative;
  flex: 1;
  padding-left: 40px;
}
</style>

<template>
<div>
  <div class="header">
    <div class="header--bd">
      <div class="logo">Smart UI</div>
      <a class="header--link" href="demo.html">Complete Example</a>
      <a class="github" href="https://github.com/xiaoyann/smart-ui">
        <svg aria-hidden="true" height="28" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      </a>
    </div>
  </div>
  <div class="main">
    <div class="sidenav">
      <h3 class="sidenav--groupName">概述</h3>
      <ul class="sidenav--list">
        <li><router-link to="/installation">如何安装</router-link></li>
        <li><a href="demo.html">完整例子</a></li>
      </ul>
      <h3 class="sidenav--groupName">组件</h3>
      <ul class="sidenav--list">
        <li><router-link to="/TabBar">TabBar</router-link></li>
        <li><router-link to="/Cell">Cell</router-link></li>
        <li><router-link to="/Modal">Modal</router-link></li>
        <li><router-link to="/Popup">Popup</router-link></li>
        <li><router-link to="/ActionSheet">ActionSheet</router-link></li>
        <li><router-link to="/Loading">Loading</router-link></li>
        <li><router-link to="/Spinnder">Spinnder</router-link></li>
        <li><router-link to="/Toast">Toast</router-link></li>
        <li><router-link to="/Dialog">Dialog</router-link></li>
        <li><router-link to="/Loadmore">Loadmore</router-link></li>
        <li><router-link to="/Switcher">Switcher</router-link></li>
        <li><router-link to="/Button">Button</router-link></li>
        <li><router-link to="/Field">Field</router-link></li>
        <li><router-link to="/Checkbox">Checkbox</router-link></li>
        <li><router-link to="/Radio">Radio</router-link></li>
        <li><router-link to="/Datepicker">Datepicker</router-link></li>
        <li><router-link to="/Selector">Selector</router-link></li>
      </ul>
    </div>
    <div class="content markdown-body">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>