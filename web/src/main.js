import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './network/http.js'

Vue.config.productionTip = false

Vue.prototype.$http = http

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
