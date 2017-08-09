<style>
  .scrollview-demo-box {
    display: flex;
    padding: 50px 15px;
  }
  .scrollview-demo {
    flex: 1;
    height: 360px;
    overflow: hidden;
    border: 5px solid #475669;
    background-color: #fff;
  }
  .scrollview-demo--list {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    overflow: hidden;
  }
  .scrollview-demo--list li {
    height: 36px;
    box-sizing: border-box;
    border: 1px solid #fff;
    background-color: #20A0FF;
    line-height: 36px;
    color: #fff;
  }
</style>
<template>
<div class="scrollview-demo-box">
  <ScrollView class="scrollview-demo">
    <ul class="scrollview-demo--list">
      <li v-for="i in 100">{{i}}</li>
    </ul>
  </ScrollView>
  <ScrollView class="scrollview-demo">
    <ul class="scrollview-demo--list">
      <li v-for="i in 100">{{i}}</li>
    </ul>
  </ScrollView>
</div>
</template>
