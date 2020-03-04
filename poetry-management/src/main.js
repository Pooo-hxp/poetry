// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 * 入口文件
 * create from 20191207 of HXP
 * ./指同级  ../指上级 @/指src路径下
 */
import Vue from 'vue'
import App from './App'
import router from './router'

/* 引入elementUI组件*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
/**引入echarts*/
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
/*引入axios 用作交互*/
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
