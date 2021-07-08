<template>
  <b-container>
    <b-row class="text-center">
      <b-col>
        <h3 class="page-tittle">Posts</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        class="my-4"
        md="6"
        v-for="post in allPosts" :key="post.id">
        <router-link :to="{ name: 'Home', params: { id: post.id } }">
          <div class="card-post p-3 shadow-sm">
            <h3>{{ post.title }}</h3>
            <card-text>{{ post.body }}</card-text>
          </div>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

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
    async getAllPosts () {
      const { data } = await this.$axios.get()
      this.allPosts = data
      console.log(data)
    }
  }
}
</script>

<style scoped lang="css">
a {
  text-decoration: none !important; 
}
.card-post {
  min-height: 150px;
  position: relative;
  color: #000;
  font-family: "Montserrat",serif;
  margin: 0 auto 24px;
  border-radius: 0.8rem 0 0.8rem 0;
  border-left: solid 5px #aa82eb;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.card-post:hover {
  transition: all 0.3s linear;
  transform: translateY(-3px);
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
  border-top: none!important;
  border-right: none!important;
  border-bottom: none!important
}


</style>