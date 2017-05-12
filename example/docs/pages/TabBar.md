## TabBar 使用指南

用于固定在 webapp 底部的导航控件，由 `TabBar` 和 `TabBarItem` 组成。该组件实现切换页面有两种方式：

* 1、通过监听 TabBarItem 的 click 事件，动态修改 TabBarItem 的 selected 属性
* 2、使用 TabBarItem 的 to 属性指定一个 route，TabBarItem 被点击时会自动跳转到相应的页面

<template>
<ExampleBox>
  <div style="padding-bottom: 48px; background-color: #fff">
    <div style="padding: 20px 0; text-align: center;" v-if="selected === 0">
      首页
    </div>
    <div style="padding: 20px 0; text-align: center;" v-if="selected === 1">
      关于 Smart UI
    </div>
    <TabBar bgcolor="#f5f5f5">
      <TabBarItem :selected="selected === 0" title="首页" @click="selected = 0">
        <img slot="icon" src="images/diamond.svg" />
        <img slot="icon-selected" src="images/diamond-active.svg" />
      </TabBarItem>
      <TabBarItem :selected="selected === 1" title="关于" @click="selected = 1">
        <img slot="icon" src="images/like.svg" />
        <img slot="icon-selected" src="images/like-active.svg" />
      </TabBarItem>
    </TabBar>
  </div>
</ExampleBox>
</template>

<style>
.TabBarItem.selected {
  color: #2b8ff7;
}
</style>

<script>
export default {
  data() {
    return {
      selected: 0,
      visible: true
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    }
  }
}
</script>

```html
<style>
.TabBarItem.selected {
  color: #2b8ff7;
}
</style>

<template>
<div style="padding-bottom 48px; background-color: #fff">
  <div>
    <div style="padding: 20px 0; text-align: center;" v-if="selected === 0">
      首页
    </div>
    <div style="padding: 20px 0; text-align: center;" v-if="selected === 1">
      关于 Smart UI
    </div>
    <TabBar bgcolor="#f5f5f5">
      <TabBarItem :selected="selected === 0" title="首页" @click="selected = 0"></TabBarItem>
      <TabBarItem :selected="selected === 1" title="关于" @click="selected = 1"></TabBarItem>
    </TabBar>
  </div>
</div>  
</template>

<script>
export default {
  data() {
    return {
      selected: 0
    }
  },
}
</script>
```

#### 使用 to 属性实现页面切换

这种方式更加简洁，因为 TabBar 可能切换比较频繁，所以这里跳转页面时使用是 `$router.replace`，不会产生大量多余的历史记录

<template>
<ExampleBox>
  <div style="padding-bottom: 88px; background-color: #fff">
    <TabBar bgcolor="#f5f5f5" class="TabBarDemo2">
      <TabBarItem to="/TabBar/index" :selected="$route.path === '/TabBar/index'" title="首页"></TabBarItem>
      <TabBarItem to="/TabBar/about" :selected="$route.path === '/TabBar/about'" title="关于"></TabBarItem>
    </TabBar>
  </div>
</ExampleBox>
</template>

<style>
.TabBarDemo2 .TabBarItem.selected {
  color: #fff;
  background-color: pink;
}
</style>

```html
<template>
<ExampleBox>
  <div style="padding-bottom: 88px; background-color: #fff">
    <TabBar bgcolor="#f5f5f5" class="TabBarDemo2">
      <TabBarItem to="/TabBar/index" :selected="$route.path === '/TabBar/index'" title="首页"></TabBarItem>
      <TabBarItem to="/TabBar/about" :selected="$route.path === '/TabBar/about'" title="关于"></TabBarItem>
    </TabBar>
  </div>
</ExampleBox>
</template>

<style>
.TabBarDemo2 .TabBarItem.selected {
  color: #fff;
  background-color: pink;
}
</style>
```

#### 设置图标

图标是可选的。但可以通过 slot 来设置。 `slot="icon"` 和 `slot="icon-selected"` 分别代表默认图标和选中时的图标。图标可以是 img，也可以用其他的html标签或组件。

```html
<TabBarItem :selected="selected === 1" title="关于" @click="selected = 1">
  <img slot="icon" src="images/like.svg" />
  <img slot="icon-selected" src="images/like-active.svg" />
</TabBarItem>
```

#### 隐藏 TabBar

设置 TabBar 的 `visible` 属性为 false 时可以将其隐藏。比如一个 webapp 的子页面是不需要展示 TabBar 的，我们可以根据当前的route是否是根页面来决定是否隐藏 TabBar。

```html
<template>
<div>
  <TabBar fixed :visible="visible">
    ...
  </TabBar>
</div>
</template>

<script>
// 根页面
const rootRoutes = [
  '/',
  '/About'
]

export default {
  visible() {
      // 不在 rootRoutes 里的页面隐藏 TabBar
      return rootRoutes.indexOf(this.$route.path) > -1
    }
  }
}
</script>
```


#### 自定义选中 TabBarItem 的样式

选中的 TabBarItem 会添加 `selected` class，所以直接使用自定义的样式覆盖默认样式

```css
.TabBarItem.selected {
  color: #2b8ff7;
}
```



#### TabBar 属性：

| 参数 | 类型 | 说明 | 默认值 | 必须
|-----|------|------|---------- | :-------:
| fixed | Boolean | 是否固定在底部 | false | 否
| visible | Boolean | 是否显示(webapp中，子页面一般不需要展示TabBar) | true | 否
| bgcolor | String | 背景颜色，可使用任何 CSS 支持的表示颜色的格式 | rgba(247,247,250,.8) | 否

#### TabBarItem 属性：

| 名称 | 类型 | 说明 | 默认值 | 必须
|-----|------|------|----------| :-------:
| title | String | Tab 的名称 |  | 是
| selected | Boolean |  | false | 是
| to | String | 使用 `this.$router.replace` 导航到该值所指定的路由 |  | 否

#### TabBarItem 事件：

| 事件名称 | 说明 
|-----|------
| click | 点击事件，可在该事件触发时设置TaBar的选中状态






