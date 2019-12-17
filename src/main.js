// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 1.引用axios
import axios from 'axios'

// 需要在main.js中引入相关函数
import utils from './utils'

// 引入Element 1
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 2.并设置基础url为后端服务api地址,设置全局访问接口，在请求接口时，无需每次都完整写入
// axios.default.baseURL = 'http://localhost:8089/api'
// axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
/* eslint-disable no-new */
Vue.config.productionTip = false
// 注册axios，使用this.$http调用axios方法, 局部引用使用vue.prototype的方式，使用时使用$http调用
Vue.prototype.$http = axios
// 注册utils函数
Vue.prototype.$utils = utils

// // 全局注册,引入函数后需要注册 使用element 2
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
