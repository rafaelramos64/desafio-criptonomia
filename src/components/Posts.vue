<template>
  <b-container>
    <b-row>
      <b-col md="4" v-for="post in listItems" :key="post.id">
        <div
          class="card-post shadow-sm"
          @click.prevent.stop="sendPost(post.title, post.body, post.id)"
          >
          <div>
            <b-img
              :src="require('../assets/image/bg-01.jpg')"
              fluid alt="img-post"
              rounded="top" style="object-fit: contain;"/>
          </div><br>

          <div class="px-4" >
            <h4 style="text-align: center">{{ post.title }}</h4>
            <p style="text-align: justify">{{ post.body }}</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Posts',
  data () {
    return {
      allPostsResponse: []
    }
  },

  created () {
    this.getAllPosts()
  },

  computed : {
    ...mapState(['listItems'])
  },

  methods: {
    ...mapMutations(['CHANGE_POST_TO_VIEW', 'ADD_ALL_POSTS']),
    ...mapActions(['LIST_ITEMS']),

    async getAllPosts () {
      const { data } = await this.$axios.get()
      this.ADD_ALL_POSTS(data)
      this.allPostsResponse = data
      this.LIST_ITEMS({ posts: this.allPostsResponse, page: 1 })
    },

    sendPost (title, body, postId) {
      this.CHANGE_POST_TO_VIEW({ postTitle: title, postBody: body })
      this.$router.push({ name: 'VisitedPost', params: { id: postId } })
    },
  }
}
</script>

<style scoped lang="scss">
  
</style>