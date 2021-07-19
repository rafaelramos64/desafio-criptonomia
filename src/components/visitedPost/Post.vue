<template>
  <b-container>
    <b-row no-gutters>
      <b-col class="p-0">
        <b-row align-h="center" class="mt-3">
          <b-col cols="10" class="user-post mx-auto" v-b-modal.modal>
            <b-img
              class="img-user-poster shadow-sm"
              :src="require('../../assets/image/ramos4.jpg' )"
              height="60px" width="60px">
            </b-img>
            <span class="name-user-poster" style="font-size: 20px; margin-left: 10px">
              {{ userPosterData.name }}
            </span>
            <span
              class="date-user-poster"
              style="font-size: 15px; color: rgba(0, 0, 0, 0.7); font-weight: normal">{{ date }} às 09:30
            </span>                
          </b-col>
        </b-row>

        <b-modal
          ok-only
          ok-variant="secondary"
          hide-header-close
          class="text-center"
          id="modal"
          ref="modal"
          title="Contact">
          <b-row style="font-family:  Montserrat  , serif, monospace; color: #111">
            <b-col cols="12"> 
              <span>Email: {{ userPosterData.email }}</span> 
            </b-col>
            <b-col cols="12">
              <span>
                Website: {{ userPosterData.website }}
              </span>
            </b-col>
            <b-col cols="12">
              <span>
                Company Name: {{ userPosterData.company.name }}
              </span>
            </b-col>
          </b-row>
        </b-modal>
        
        <b-row>
          <b-col>
            <h1 class="text-center p-3 mb-1">{{ this.postTitle }}</h1>
            <b-img
              class="img-post"
              :src="require('../../assets/image/bg-01.jpg')"
              height="400" center alt="img-post"
              rounded="top"/>
          </b-col><br>
        </b-row>

        <div class="post-body mx-5 px-5">
          <p>{{ this.postBody }}</p>
        </div>
        
        <hr style="margin-left: 7rem; margin-right: 7rem">
        <b-row class="text-center mx-5 px-5 remove-spacing">
          <b-col cols="6" class="d-inline-flex justify-content-center remove-spacing">
            <div class="rounded-circle background-likes">
              <b-icon class="icon-heart" icon="heart-fill" variant="light" scale="1.3"></b-icon>
            </div>
            <span style="color: rgba(0, 0, 0, 0.7);" class="mx-2">{{ commentsLength }} Likes</span>
          </b-col>

          <b-col cols="6" class="remove-spacing">
            <b-icon class="icon-comments mx-3" icon="chat-right-dots" scale="2"></b-icon>
            <span style="color: rgba(0, 0, 0, 0.7);">{{ commentsLength }} Comments</span>
          </b-col>
        </b-row>
        <hr style="margin-left: 7rem; margin-right: 7rem">
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
      userPosterData: [],
      date: '15/07/2021'
    }
  },

  created () {
    this.getUserPoster()
  },

  computed: {
    ...mapState(['postTitle', 'postBody', 'postUserId', 'commentsLength'])
  },

  methods: {
    async getUserPoster () {
      const postUserId =  this.postUserId
      const { data } = await this.$axios.get(`/users/${postUserId}`)
      this.userPosterData = data
    }
  }
}
</script>

<style scoped>
.post-body {
  font-size: 22px; font-family: 'Ubuntu', sans-serif;
}

.img-user-poster {
  border-radius: 0.3rem !important;
  object-fit: cover;
}

.img-user-poster:hover {
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
}

@media only screen and (max-width: 345px) {
   .col-10 {
    width: 100% !important;

  }
}

@media only screen and (max-width: 441px) {
  .col-10 {
    width: 95% !important;
  }

  .name-user-poster::after {
    bottom: 0.2rem !important;
    left: .0rem !important;
  }

  .date-user-poster {
    position: relative;
    bottom: 1rem !important;
    left: 4.5rem !important;
    display: flex;
    flex-direction: column;
    display: block !important;
  }
}

.user-post:hover {
  cursor: pointer;
}

.name-user-poster::after {
  content: ".";
  font-size: 3.5rem;
  margin-right: 3px;
  color: rgba(0, 0, 0, 0.5);
  position: relative;
  bottom: 3px;
}

@media only screen and (max-width: 750px) {
  .card-comment {
    width: 99% !important;
    margin: 0 auto;
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

  .post-body {
    margin: 0 !important;
    padding: 0 3rem !important;
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

  .post-body {
    padding: 0 !important;
    margin: 0 1.5rem !important;
  }
}

.background-likes {
  background-color: #aa82eb;
  min-height: 34px;
  max-height: 34px;
  min-width: 34px;
  max-width: 34px;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
}

.icon-heart {
  color: #fff;
  position: relative;
  top: 8px;
}

.icon-heart:hover {
  cursor: default !important;
}

.icon-comments {
  font-weight: bolder !important;
  color: #aa82eb !important;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
}
</style>