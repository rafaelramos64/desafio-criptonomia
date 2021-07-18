<template>
  <transition name="slide-fade">
    <b-container>
      <b-row no-gutters>
        <b-col md="12" class="p-0 div-comment shadow-sm" v-for="comment in comments" :key="comment.id">
          <b-row align-h="between">
            <b-col cols="10">
              <b-img 
                v-b-tooltip.hover.left.v-light :title="comment.name"
                class="img-user"
                :src="require('../../assets/image/ramos.jpg' )"
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
              <div
                class="mx-1 mb-1 px-1  comment-body">
                <span>{{ comment.body }}</span>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Comments',
  data () {
    return {
      comments: []
    }
  },

  created () {
    this.getPost()
  },

   methods: {
    ...mapMutations(['GET_COMMENTS_LENGTH']),

    async getPost () {
      const id = this.$route.params.id
      const { data } = await this.$axios.get(`${id}/comments`)
      this.comments = data
      this.GET_COMMENTS_LENGTH(this.comments.length)
    }
  }
}
</script>

<style>
.div-comment {
  width: 70%;
  margin: auto;
  margin-bottom: 1rem;
  /* background-color: #bc99f5; */
  background-color: #F9FAFF;
  /* background: linear-gradient(
    139.73deg
    , rgb(229, 253, 255) 0%, rgb(243, 239, 255) 100%); */
  /* box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important; */
  border-radius: 0.5rem 0.5rem 0 0;
}

@media only screen and (max-width: 600px) {
  .div-comment {
    width: 80% !important;
  }
  .img-user {
    left: -3.3rem !important;
  }
}

@media only screen and (max-width: 510px) {
  .img-user {
    left: -3.1rem !important;
  }
}


.img-user {
  position: relative;
  left: -4rem;
  object-fit: cover;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
}

.name-user {
  position: relative;
  left: -2.5rem;
  font-weight: bolder;
}

span {
  font-size: 20px;
}

.comment-body {
  font-family: 'Ubuntu', sans-serif !important;
  color: rgba(0, 0, 0, 0.7);
  background-color: #fff;
  border-radius: .5rem .5rem 0 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>