import Vue from 'vue'
import Router from 'vue-router'

//引入组件
import index from '@/components/index'
import msg from '@/components/msg'
import myInfo from '@/components/myInfo'

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
    }
  ]
})
