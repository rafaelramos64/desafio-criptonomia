<template>
  <b-container>
    <Loader v-if="loading" />
    <b-row v-else>
      <b-col md="4" sm="6" lg="4" v-for="post in listItems" :key="post.id">
        <div
          class="card-post shadow-sm"
          @click.prevent.stop="sendPost(post.title, post.body, post.id)"
          >
          <div>
            <b-img
              class="img-posts"
              :src="require('../../assets/image/bg-01.jpg')"
              fluid alt="img-post"
              rounded="top" style="object-fit: contain;"/>
          </div><br>

          <div class="px-4" >
            <h4 style="text-align: center">{{ post.title }}</h4>
            <p style="text-align: justify; font-family: 'Ubuntu', sans-serif;">{{ post.body }}</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Loader from '@/components/Loader'

export default {
  name: 'Posts',
  components: { Loader },
  data () {
    return {
      allPostsResponse: [],
      loading: true
    }
  },

  created () {
    this.getAllPosts()
  },

  computed : {
    ...mapState(['listItems'])
  },

  methods: {
    ...mapMutations(['CHANGE_POST_TO_VIEW', 'ADD_ALL_POSTS', 'CHANGE_LOAD_STATUS']),
    ...mapActions(['LIST_ITEMS']),

    async getAllPosts () {
      this.CHANGE_LOAD_STATUS(true)
      const { data } = await this.$axios.get()
      this.ADD_ALL_POSTS(data)
      this.allPostsResponse = data
      this.LIST_ITEMS({ posts: this.allPostsResponse, page: 1 })
      this.CHANGE_LOAD_STATUS(false)
      this.loading = false
    },

    sendPost (title, body, postId) {
      this.CHANGE_POST_TO_VIEW({ postTitle: title, postBody: body })
      this.$router.push({ name: 'VisitedPost', params: { id: postId } })
    },
  }
}
</script>

<style scoped lang="scss">
.card-post:hover .img-posts {
  transition: all 0.3s linear;
  opacity: 0.9;
}
</style>