<template>
  <b-container fluid>
    <b-row class="text-center">
      <b-col>
        <h3 class="page-tittle my-3">Comments</h3>
      </b-col>
    </b-row>

    <b-row class="card-comment">
      <b-col class="p-0">
        <b-row>
          <b-col>
            <div>
              <h2 class="text-center p-3 mb-3">{{ this.postTitle }}</h2>
              <b-img
                class="img-post"
                :src="require('../assets/image/bg-01.jpg')"
                height="400" center alt="img-post"
                rounded="top" style="object-fit: contain;"/>
            </div><br>

            <div class=" mx-5">
              <p style="font-size: 22px">{{ this.postBody }}</p>
            </div>
            <h2 class="p-3 text-center mb">Comentários para este post</h2>

          </b-col>
        </b-row>

        <b-row>
          <Comments />
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
import Comments from '@/components/Comments'

export default {
  name: 'VisitedPost',
  components: { Comments },
  data () {
    return {
      comments: []
    }
  },

  computed: {
    ...mapState(['postTitle', 'postBody'])
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

@media only screen and (max-width: 600px) {
  .card-comment {
    width: 98% !important;
    margin: auto;
  }

  .img-post {
    min-width: 100% !important;
    max-width: 100% !important;
    height: 35vh !important;
    border-radius: 0 !important;
  }
}
</style>