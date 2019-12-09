<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view/> <!--路由展示-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /*
    样式引用采用@import, eg:@import "./style";
  */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
