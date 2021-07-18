<template>
  <b-container>
    <Loader v-if="loading" />
    <b-row v-else>
      <b-col class="px-3" md="4" sm="6" lg="4" v-for="post in listItems" :key="post.id">
        <b-row>
          <b-col
            class="card-post shadow-sm"
            @click.prevent.stop="sendPost(post.title, post.body, post.id)"
            >
            <b-row>
              <b-col class="p-0">
                <b-img
                  class="img-posts"
                  :src="require('../../assets/image/bg-01.jpg')"
                  fluid alt="img-post"
                  rounded="top" style="object-fit: contain;"/>
              </b-col><br>
            </b-row>

            <b-row>
              <b-col class="px-4" >
                <h4 style="text-align: center">{{ post.title }}</h4>
                <p style="text-align: justify; font-family: 'Ubuntu', sans-serif;">{{ post.body }}</p>
              </b-col>
            </b-row>
            
            <b-row no-gutters>
              <b-col cols="4" class="d-inline-flex justify-content-center p-0">
                <div class="rounded-circle background-likes ">
                  <b-icon class="icon-heart" icon="heart-fill" variant="light" scale="1.1"></b-icon>
                </div>
                <span class="mx-2">{{ 5 }}</span>
              </b-col>

              <b-col cols="4" class="d-inline-flex justify-content-center p-0">
                <b-icon class="icon-comments" icon="chat-right-dots" scale="1.6"></b-icon>
                <span class="mx-2">{{ 5 }}</span>
              </b-col>

              <b-col cols="4" class="d-inline-flex justify-content-center p-0">
                <b-icon class="icon-calendar" icon="calendar-date-fill" scale="1.5"></b-icon>
                <span class="mx-2">{{ date }}</span>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
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
      loading: true,
      date: '15/07/2021'
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

.background-likes {
  background-color: #aa82eb;
  min-height: 28px;
  max-height: 28px;
  min-width: 28px;
  max-width: 28px;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
  position: relative;
  bottom: 0.2rem;
}

.icon-heart {
  position: relative;
  top: 4px;
  left: 6px;
  color: #fff;
}

.icon-heart:hover {
  cursor: default !important;
}

.icon-comments {
  position: relative;
  top: 0.3rem;
}

.icon-calendar {
  position: relative;
  top: 0.2rem;
}

.icon-calendar, .icon-comments {
  font-weight: bolder !important;
  color: #aa82eb !important;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
}
</style>