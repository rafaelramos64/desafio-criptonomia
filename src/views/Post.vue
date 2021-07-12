<template>
  <b-container class="card-comment">
    <b-row class="text-center">
      <b-col>
        <h3 class="page-tittle my-5">Comments</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>
          <h2 class="text-center py-3 mb-3">{{ this.postTitle }}</h2>
          <b-img
            :src="require('../assets/image/bg-01.jpg')"
            height="450" center alt="img-post"
            rounded="top" style="object-fit: contain;"/>
        </div><br>

        <div class=" mx-5">
          <p style="font-size: 22px">{{ this.postBody }}</p>
        </div>
        <h2 class="p-3 text-center mb">Comentários para este post</h2>

      </b-col>
    </b-row>

    <b-row no-gutters>
      <b-col md="12" class="p-0 div-comment" v-for="comment in comments" :key="comment.id">
        <b-row align-h="between">
          <b-col cols="10">
            <b-img
              class="img-user"
              :src="require('../assets/image/ramos.jpg' )"
              rounded="circle" height="50px" width="50px">
            </b-img>
            <span class="name-user"><!-- {{ comment.name }} --> <i>{{ comment.email }}</i></span>
            <span style="font-size: 14px; color: #000">15 de julho de 2021 17:30</span>
          </b-col>

          <b-col cols="2" align-self="center" style="display: flex; justify-content: flex-end; padding-right: 2rem">
            <span class="comment-numbe text-right">{{ comment.id }}</span><br>
          </b-col>  
        </b-row>

        <b-row>
          <b-col>
            <div class="mx-1 mb-1 px-1 shadow-sm div" style="background-color: #fff; border-radius: .5rem .5rem 0 0">
              <span>{{ comment.body }}</span>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Post',
  data () {
    return {
      comments: []
    }
  },

  created () {
    this.getPost()
  },

  computed: {
    ...mapState(['postTitle', 'postBody'])
  },

  methods: {
    async getPost () {
      const id = this.$route.params.id
      const { data } = await this.$axios.get(`${id}/comments`)
      this.comments = data
      console.log(this.comments)
    }
  }
}
</script>

<style lang="css" scoped>

.card-comment {
  background-color: #fff;
  color: #000;
  font-family: "Montserrat", serif, monospace;
  margin: 0 auto 24px;
  border-radius: 1rem 1rem 0 0;
  /* border-left: solid 5px #aa82eb; */
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
}

.div-comment {
  width: 70%;
  margin: auto;
  margin-bottom: 1rem;
  background-color: #bc99f5;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
  border-radius: 0.5rem 0.5rem 0 0;
}

span {
  font-size: 20px;
}

.img-user {
  position: relative;
  left: -4rem;
  object-fit: cover;
}

.name-user {
  position: relative;
  left: -2.5rem;
  font-weight: bolder;
}

</style>