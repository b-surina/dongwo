import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { Field } from "mint-ui";

Vue.component(Field.name, Field);

Vue.config.productionTip = false
import '../public/rem'
import '../public/reset.css'
import '../public/css/index.css';

import 'mint-ui/lib/style.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
