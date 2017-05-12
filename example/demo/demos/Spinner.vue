<style lang="stylus">
.wrapper {
  & > div {
    float: left;
    display: flex;
    justify-content: center;
    width: 50%;
    padding: 50px 0;
  }
  
  & > div:nth-child(1) {
    background-color: rgba(38,162,255, 1);
  }
  
  & > div:nth-child(2) {
    background-color: rgba(0, 255, 0, 1);
  }

  & > div:nth-child(3) {
    background-color: rgba(255, 0, 0, 1);
  }
  
  & > div:nth-child(4) {
    background-color: #fff;
  }
} 
</style>

<template>
<div class="wrapper">
  <div>
    <Spinner size="50" width="3" forecolor="#fff" bgcolor="rgba(255, 255, 255, .2)" />
  </div>
  <div>
    <Spinner size="50" width="3" forecolor="#fff" bgcolor="rgba(255, 255, 255, .5)" />
  </div>
  <div>
    <Spinner size="50" width="3" forecolor="#fff" bgcolor="rgba(0, 0, 0, .1)" />
  </div>
  <div>
    <Spinner size="50" width="3" forecolor="#999" bgcolor="#e5e5e5" />
  </div>
</div>    
</template>