import Vue from 'vue'
import Router from 'vue-router'

/**
 * 这里我只引入四个组件
 * 首页，讨论区，个人信息及诗词详情
 * 组件中的子组件在各自的父组件中引用
 */
//引入组件
import index from '@/components/index'
import msg from '@/components/msg'
import myInfo from '@/components/myInfo'
import poetryDetails from '@/components/poetryDetails'

//使用vueRouter
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/msg',
      name:'msg',
      component:msg
    },{
      path:'/myInfo',
      name:'myInfo',
      component:myInfo
    },
    {
      path:'/poetryDetails',
      name:'poetryDetails',
      component:poetryDetails
    }
  ]
})
