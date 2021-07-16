import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postTitle: '',
    postBody: '',
    allPosts: [],
    listItems: [],
    loading: true
  },
  mutations: {
    CHANGE_POST_TO_VIEW (state, payload) {
      state.postTitle = payload.postTitle
      state.postBody = payload.postBody
    },

    ADD_ALL_POSTS (state, payload) {
      state.allPosts = payload
    },

    CHANGE_LIST_ITEMS (state, payload) {
      state.listItems = payload
    },

    CHANGE_LOAD_STATUS (state, payload) {
      state.loading = payload
    }
  },

  actions: {
    LIST_ITEMS (context, payload) {
      const allPosts = payload.posts

      const currentPage = payload.page
      const itemsPerPage = 6

      const result = []
      const totalPage = Math.ceil(allPosts.length / itemsPerPage)
      let count = (currentPage * itemsPerPage) - itemsPerPage
      const delimiter = count + itemsPerPage
      if (currentPage <= totalPage) {
        for (let i = count; i < delimiter; i++) {
          if (allPosts[i]) {
            result.push(allPosts[i])
          }
          count++
        }
      }
      context.commit('CHANGE_LIST_ITEMS', result)

      return result
    }
  },
  modules: {
  }
})
