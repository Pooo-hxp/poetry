// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import './assets/js/clickme'/*引入公共方法*/
import './assets/css/share.css' /*引入公共样式*/

Vue.prototype.$axios = axios //把对象挂载在vue中
Vue.config.productionTip = false//不起用生产环境下的配置

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
