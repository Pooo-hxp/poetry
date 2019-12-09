import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import info from '@/components/Userdata/info'
import PoetrydataView from '@/components/Poetrydata/view'
import list from '@/components/Poetrydata/list'

import UserdataView from '@/components/Userdata/view'
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
      path: '/Userdata/info',
      name: 'info',
      component: info
    },
    {
      path: '/Poetrydata/list',
      name: 'list',
      component: list,

    },
    {
      path: '/Poetrydata/view',
      name: 'PoetrydataView',
      component: PoetrydataView,

    },
    {
      path: '/Userdata/view',
      name: 'UserdataView',
      component: UserdataView,

    },


  ]
})
