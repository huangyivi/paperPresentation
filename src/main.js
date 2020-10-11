// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import axios from 'axios';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import global from './global/Global.vue'
Vue.use(iView);

//全局配置axios
//在其他组件中使用方法：this.$http.get()/post()
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// 全局变量
Vue.prototype.Global = global;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
