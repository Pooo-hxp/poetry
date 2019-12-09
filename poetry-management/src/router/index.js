import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Userdata from '@/components/Userdata/info'
import index from '@/components/Poetrydata'
import Poetrylist from '@/components/Poetrydata/Poetry-list'

import echarts2 from '@/components/Userdata/echarts2'
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
      name: 'Userdata',
      component: Userdata
    },
    {
      path: '/Poetrydata/Poetry-list',
      name: 'Poetrylist',
      component: Poetrylist,

    },
    {
      path: '/Poetrydata',
      name: 'index',
      component: index,

    },
    {
      path: '/Userdata/echarts2',
      name: 'echarts2',
      component: echarts2,

    },


  ]
})
