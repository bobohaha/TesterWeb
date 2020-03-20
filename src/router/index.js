import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// eslint-disable-next-line no-unused-vars
// import 别名 from path/vue文件
import content from '../page/content'
import IndexPage from '../components/IndexPage'
import Login from '../components/Common/Login'
import GoodsList from '../components/GoodsList'
import Index from '../page/Index'
import Child from '../page/Child'

Vue.use(Router)

export default new Router({
  // 新增路由，在[]中添加
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/Index',
      name: 'Index', // path别名，可没有
      meta: {
        title: '首页'
      },
      component: Index// 设置跳转的页面
    },
    {
      path: '/Login',
      name: 'login', // path别名，可没有
      meta: {
        title: '登录'
      },
      component: Login// 设置跳转的页面
    },
    {
      path: '/indexPage',
      name: 'indexPage',
      component: IndexPage,
      children: [{
        path: 'child',
        component: Index
      }]
    },
    {
      path: '/content/:id', // 动态路由 ：id
      name: '详情',
      meta: {
        title: '详情'
      },
      component: content
    },
    {
      path: '/GoodsList',
      name: '商品列表',
      meta: {
        title: '商品列表'
      },
      component: GoodsList
    }
  ]
})
