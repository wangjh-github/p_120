// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import Vuex from 'vuex'
import store from './vuex/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mock from './mock'
Mock.bootstrap();
import './style/login.css'
import echarts from 'echarts'
require('echarts-wordcloud')
Vue.prototype.$echarts = echarts
import VueSweetalert2 from './plugins/vue-sweetalert2'
Vue.use(VueSweetalert2)


/* Vue.use(VueAxios, axios) */
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
import axios from 'axios'
Vue.prototype.$ajax = axios;  //默认调用地址的名称
//axios.defaults.baseURL = 'https://www.hcxlyun.cn/cloud-examine'; //设置公用请求 测试环境
axios.defaults.baseURL = ""
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
