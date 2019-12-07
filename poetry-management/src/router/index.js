import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import First from '@/components/First'
import Last from '@/components/Last'
import Poetrylist from '@/components/First/Poetry-list'
/**
 * @ 代表src在config下的webpack.base.conf.js中的配置 '@': resolve('src')
 * 可自行更改
 */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/index',
      name: 'Home',
      component: Home
    },
    {
      path: '/First',
      name: 'First',
      component: First
    },
    {
      path: '/First/Poetry-list',
      name: 'Poetrylist',
      component: Poetrylist,

    },
    {
      path: '/Last',
      name: 'Last',
      component: Last,

    },


  ]
})
