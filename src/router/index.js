import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// eslint-disable-next-line no-unused-vars
import Index from '../components/Index'
import Login from '../components/CommonVue/Login'

Vue.use(Router)

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
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
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'BlogLogin',
      component: Login
    }
  ]
})
