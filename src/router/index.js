import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// eslint-disable-next-line no-unused-vars
import Index from '../components/Index'
import Login from '../components/Common/Login'
import content from '../page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/content/:id',
      name: '详情',
      meta: {
        title: '详情'
      },
      component: content
    }
  ]
})
