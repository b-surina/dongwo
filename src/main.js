import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false


Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
//引入rem
import '../public/rem'
//引入css
import '../public/reset.css'
//引入axios
import axios from 'axios'
import mock from './mock'
Vue.prototype.$http=axios;

new Vue({
  router,
  mock,
  store,
  render: h => h(App)
}).$mount('#app')
