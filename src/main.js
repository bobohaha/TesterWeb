// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// 引入Element
// import ElementUI from 'elementu-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// 引用axios，并设置基础url为后端服务api地址
axios.default.baseURL = 'http://localhost:8089/api'
/* eslint-disable no-new */
// 全局注册axios
Vue.prototype.$http = axios
Vue.config.productionTip = false
// 使用element
// Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
