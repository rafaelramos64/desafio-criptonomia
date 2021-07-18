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
              <h1 class="text-center p-3 mb-3">{{ this.postTitle }}</h1>
              <b-img
                class="img-post"
                :src="require('../assets/image/bg-01.jpg')"
                height="400" center alt="img-post"
                rounded="top"/>
            </div><br>

            <div class="mx-5 px-5">
              <p style="font-size: 22px; font-family: 'Ubuntu', sans-serif;">{{ this.postBody }}</p>
            </div>

            <b-row class="text-center mx-5 px-5 remove-spacing">
              <b-col cols="6" class="d-inline-flex justify-content-center remove-spacing">
                <div class="rounded-circle background-likes">
                  <b-icon class="icon-heart" icon="heart-fill" variant="light" scale="1.3"></b-icon>
                </div>
                <span class="mx-2">{{ commentsLength }}</span>
              </b-col>
              <b-col cols="6" class="remove-spacing">
                <span style="color: rgba(0, 0, 0, 0.7) !important; ">{{ commentsLength }} Comentários</span>
              </b-col>
            </b-row>
            <hr style="margin-left: 7rem; margin-right: 7rem">
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
import Comments from '@/components/visitedPost/Comments'

export default {
  name: 'VisitedPost',
  components: { Comments },
  data () {
    return {
    }
  },

  computed: {
    ...mapState(['postTitle', 'postBody', 'commentsLength'])
  },

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
    width: 98% !important;
    margin: auto;
  }

  .img-post {
    min-width: 100% !important;
    max-width: 100% !important;
    height: 40vh !important;
    border-radius: 0 !important;
    object-fit: contain;
  }

  hr {
    margin-left: 3rem !important;
    margin-right: 3rem !important;
  }
}

@media only screen and (max-width: 510px) {
  hr {
    margin-left: 2rem !important;
    margin-right: 2rem !important;
  }

  .remove-spacing {
    margin: 0 !important;
    padding: 0 !important;
  }
}

.background-likes {
  background-color: #dc3545;
  min-height: 34px;
  max-height: 34px;
  min-width: 34px;
  max-width: 34px;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
}

.icon-heart {
  color: #fff; position: relative;
  top: 8px;
}

.icon-heart:hover {
  cursor: default !important;
}
</style>