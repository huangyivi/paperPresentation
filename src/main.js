// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import axios from 'axios';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import store from './store/index'
Vue.use(iView);

//全局配置axios
//在其他组件中使用方法：this.$http.get()/post()
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.domain = "http://39.98.41.126:30007/"
//  忽略警告
Vue.config.silent = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
