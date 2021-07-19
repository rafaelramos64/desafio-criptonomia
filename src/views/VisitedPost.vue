<template>
  <div>
    <Loader v-if="loading" />
    <b-container v-show="!loading" fluid class="mb-3">
      <b-row class="text-center">
        <b-col>
          <h3 style="font-family: 'Montserrat', serif, monospace !important;" class="page-tittle my-3">Comments</h3>
        </b-col>
      </b-row>

      <b-row class="card-comment">
        <b-col class="p-0">
          
          <b-row no-gutters>
            <b-col class="p-0 m-0">
              <Post />
            </b-col>
          </b-row>

          <b-row>
            <Comments />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Comments from '@/components/visitedPost/Comments'
import Post from '@/components/visitedPost/Post'
import Loader from '@/components/Loader'

export default {
  name: 'VisitedPost',
  components: { Comments, Post, Loader },
  data () {
    return {
      loading: true
    }
  },

  mounted () {
    this.waitLoader()
  },

  methods: {
    waitLoader () {
      setTimeout(() => {
        this.loading = false
      }, 500);
    }
  }
}
</script>

<style lang="scss" scoped>
.card-comment {
  width: 80%;
  background-color: #fff;
  color: #000;
  font-family: "Montserrat", serif, monospace;
  margin: 0 auto 24px;
  border-radius: 1rem 1rem 0 0;
  /* border-left: solid 5px #aa82eb; */
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
}

@media only screen and (max-width: 750px) {
  .card-comment {
    width: 99% !important;
    margin: 0 auto;
  }
}
</style>