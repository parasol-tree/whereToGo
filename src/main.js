// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/'
import FastClick from 'fastclick'

import 'assets/style/reset.css'
import 'assets/style/iconfont/iconfont.css'
import 'assets/stylus/variables.styl'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

FastClick.attach(document.body)

const bus = new Vue()
Vue.prototype.$bus = bus

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
