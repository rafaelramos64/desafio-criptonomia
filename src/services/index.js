import Axios from 'axios'
import Vue from 'vue'

const api = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

Vue.use({
  install (Vue) {
    Vue.prototype.$axios = api
  }
})
