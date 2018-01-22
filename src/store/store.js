import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    top: 0
  },
  mutations: {
    changeHeaderOpacity (top) {
      console.log('hello world', top)
    }
  }
})

export default store
