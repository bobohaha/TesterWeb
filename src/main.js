// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用axios，并设置基础url为后端服务api地址
var axios = require('axios')
axios.default.baseURL = 'http://localhost:8887/api'
/* eslint-disable no-new */
Vue.prototype.$axios = axios
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
