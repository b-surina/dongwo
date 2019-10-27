import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../public/rem'
import '../public/reset.css'

import Axios from "axios"
import "./mock"

import VueAwesomeSwiper from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"
Vue.use(VueAwesomeSwiper)

Vue.prototype.$http=Axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
