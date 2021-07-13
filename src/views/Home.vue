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
        v-for="post in listItems" :key="post.id">
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

          <div class="px-4" >
            <h4 style="text-align: center">{{ post.title }}</h4>
            <p style="text-align: justify">{{ post.body }}</p>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col>
        <div class="pagination">
          <div
            v-show="!disablePrevButton"
            @click="prevPage()"
            class="back-page cursor"
          > ❮ &nbsp; </div>
          <div
            v-for="page in allowList"
            :key="page.id"
          >
            <div
              class="page cursor"
              :class="currentPage === page ? 'active' : ''"
              @click="currentPage = page"
            >
              {{ page }}
            </div>
          </div>
          <div
            v-show="!disableNextButton"
            @click="nextPage()"
            class="next-page cursor"
            > &nbsp; ❯
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
      allPosts: [],
      loading: true,
      currentPage: 1,
      itemsPerPage: 6,
      disablePrevButton: false,
      disableNextButton: false
    }
  },
  
  created () {
    this.getAllPosts()
  },

  computed: {
     allowList () {
      const { totalPages } = this
      const currentPage = this.currentPage
      const allowList = []
      if (currentPage - 4 > 0 && currentPage >= totalPages) {
        allowList.push(currentPage - 4)
        allowList.push(currentPage - 3)
        allowList.push(currentPage - 2)
        allowList.push(currentPage - 1)
      } else if (currentPage - 3 > 0 && currentPage + 1 >= totalPages) {
        allowList.push(currentPage - 3)
        allowList.push(currentPage - 2)
        allowList.push(currentPage - 1)
      } else if (currentPage - 2 > 0) {
        allowList.push(currentPage - 2)
        allowList.push(currentPage - 1)
      } else if (currentPage - 1 > 0) {
        allowList.push(currentPage - 1)
      }

      allowList.push(currentPage)

      if (currentPage + 4 <= totalPages && currentPage < 2) {
        allowList.push(currentPage + 1)
        allowList.push(currentPage + 2)
        allowList.push(currentPage + 3)
        allowList.push(currentPage + 4)
      } else if (currentPage + 3 <= totalPages && currentPage < 3) {
        allowList.push(currentPage + 1)
        allowList.push(currentPage + 2)
        allowList.push(currentPage + 3)
      } else if (currentPage + 2 <= totalPages) {
        allowList.push(currentPage + 1)
        allowList.push(currentPage + 2)
      } else if (currentPage + 1 <= totalPages) {
        allowList.push(currentPage + 1)
      }

      return allowList
    },

    listItems () {
      const { allPosts, currentPage, itemsPerPage } = this

      const result = []
      const totalPage = Math.ceil(allPosts.length / itemsPerPage)
      let count = (currentPage * itemsPerPage) - itemsPerPage
      const delimiter = count + itemsPerPage
      if (currentPage <= totalPage) {
        for (let i = count; i < delimiter; i++) {
          if (allPosts[i]) {
            result.push(allPosts[i])
          }
          count++
        }
      }
      return result
    },

    totalPages () {
      const allPosts = []
      for (const i in this.allPosts) {
        allPosts.push(this.allPosts[i])
      }
      const total = allPosts.length / this.itemsPerPage
      return total !== Infinity ? Math.ceil(total) : 0
    }
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
    },

    prevPage () {
      this.disableNextButton = false
      this.currentPage -= 1
    },

    nextPage () {
      this.disablePrevButton = false
      this.currentPage += 1
    },
  }
}
</script>

<style scoped lang="scss">
/* Css for pagination */

.pagination {
  justify-content: center;
  width: 100%;
  font-family: Montserrat;
  color: #8d8d8d;
}

.page {
  padding: 5px 8px 8px 8px;
  margin-right: 5px;
  text-align: center;
  vertical-align: middle;
  width: 34px;
  height: 34px;
  left: 86px;
  border-radius: 2px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
}

div .active {
  background-color: #aa82eb !important;
  color: #fff !important;
}

.back-page {
  margin-top: 3px;
  width: 28px;
  height: 28px;
  margin-right: 5px;
  padding-left: 10px;
  padding-top: 2.5px;
  border-radius: 2px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
}

.next-page {
  margin-top: 3px;
  width: 28px;
  height: 28px;
  padding-left: 5px;
  padding-top: 2.5px;
  border-radius: 2px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
}

.pagination :hover:not(.active) {
  background-color: #ddd;
}

.cursor {
  cursor: pointer !important;
}
</style>