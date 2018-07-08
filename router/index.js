import Vue from 'vue'
import Router from 'vue-router'
import DRect from '../src/components/DRect'
import DPie from '../src/components/DPie'
import Home from '../src/components/home'
Vue.use(Router)

// 加载路由
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/DRect'
    },
    {
      path: '/DRect',
      component: DRect,
      name: DRect
    },
    {
      path: '/DPie',
      component: DPie,
      name: DPie
    },
    {
      path: '/Home',
      component: Home,
      name: Home
    }
  ]
})

export default router