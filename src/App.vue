<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <!--引用组件的方式-->
    <IndexPage></IndexPage>
    <router-view/> <!--路由展示-->
  </div>
</template>

<script>
import IndexPage from './components/IndexPage'
export default {
  name: 'App',
  components: {IndexPage}
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
