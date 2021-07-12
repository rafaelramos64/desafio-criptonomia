<template>
  <b-container>
    <b-row class="text-center">
      <b-col>
        <h3 class="page-tittle my-5">Posts</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        class="my-4"
        md="4"
        v-for="post in allPosts" :key="post.id">
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

          <div class="p-4">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      allPosts: []
    }
  },
  
  created () {
    this.getAllPosts()
  },

  methods: {
    ...mapMutations(['CHANGE_POST']),

    async getAllPosts () {
      const { data } = await this.$axios.get()
      this.allPosts = data
    },

    sendPost (title, body, postId) {
      this.CHANGE_POST({ postTitle: title, postBody: body })
      this.$router.push({ name: 'Post', params: { id: postId } })
    }
  }
}
</script>

<style scoped lang="css">

</style>