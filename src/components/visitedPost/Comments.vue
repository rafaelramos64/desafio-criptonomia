<template>
  <transition name="slide-fade">
    <b-container>
      <b-row no-gutters>
        <b-col md="12" class="p-0 div-comment shadow-sm" v-for="comment in comments" :key="comment.id">
          <b-row align-h="between" no-gutters>
            <b-col cols="10" class="p-0">
              <b-img 
                v-b-tooltip.hover.left.v-light
                :title="comment.email"
                class="img-user"
                :src="require('../../assets/image/ramos.jpg' )"
                rounded="circle" height="50px" width="50px">
              </b-img>
              <span class="name-user" style="text-transform: capitalize"><!--<i>{{ comment.email }}</i> --> 
                {{ comment.name.split(' ')[0] }} {{ comment.name.split(' ')[comment.name.split(' ').length - 1] }}
              </span>
              <span class="comment-date" style="font-size: 14px; color: rgba(0, 0, 0, 0.7);">15 de julho de 2021 17:30</span>
            </b-col>

            <b-col
              class="comment-number" cols="2" align-self="center">
              <span>{{ comment.id }}</span><br>
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

.comment-number {
  display: flex;
  justify-content: flex-end;
  padding: 0 2rem 0 0;
}

@media only screen and (max-width: 600px) {
  .div-comment {
    width: 90% !important;
  }

  .img-user {
    top: .3rem;
    left: -0.3rem !important;
  }

  .name-user {
    left: 0.3rem !important;
    font-size: 1.2rem;
  }

  .col-10 {
    width: 85% !important;
  }

  .col-2 {
    width: 15% !important;
  }

  .comment-date {
    display: flex;
    flex-direction: column;
    display: block !important;
    position: relative;
    left: 3.5rem;
    bottom: 1rem;
  }

  .comment-number {
    padding-right: 1rem !important;
    position: relative;
    top: -1rem;
  }
}

@media only screen and (max-width: 400px) {
  .comment-number {
    padding-right: 0.8rem !important;
    position: relative;
    top: -1rem;
    justify-content: flex-begin;
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
  left: -1.5rem;
  font-weight: bolder;
  /* text-transform: lowercase; */
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