import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postTitle: '',
    postBody: ''
  },
  mutations: {
    CHANGE_POST (state, payload) {
      state.postTitle = payload.postTitle
      state.postBody = payload.postBody
    }
  },
  actions: {
  },
  modules: {
  }
})
