import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postTitle: '',
    postBody: '',
    postUserId: undefined,
    allPosts: [],
    listItems: [],
    loading: true,
    commentsLength: 0
  },
  mutations: {
    CHANGE_POST_TO_VIEW (state, payload) {
      state.postTitle = payload.postTitle
      state.postBody = payload.postBody
      state.postUserId = payload.postUserId
    },

    ADD_ALL_POSTS (state, payload) {
      state.allPosts = payload
    },

    CHANGE_LIST_ITEMS (state, payload) {
      state.listItems = payload
    },

    CHANGE_LOAD_STATUS (state, payload) {
      state.loading = payload
    },

    GET_COMMENTS_LENGTH (state, payload) {
      state.commentsLength = payload
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
