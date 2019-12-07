import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/**
 * @ 代表src在config下的webpack.base.conf.js中的配置 '@': resolve('src')
 * 可自行更改
 */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
