<template>
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
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Paginagion',
  data () {
    return {
      loading: true,
      currentPage: 1,
      itemsPerPage: 6,
      disablePrevButton: false,
      disableNextButton: false
    }
  },

  mounted () {
    this.disableButtons()
  },
  
  computed: {
    ...mapState(['allPosts']),

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

    totalPages () {
      const allPosts = []
      for (const i in this.allPosts) {
        allPosts.push(this.allPosts[i])
      }
      const total = allPosts.length / this.itemsPerPage
      return total !== Infinity ? Math.ceil(total) : 0
    }
  },

  watch: { 
    currentPage() {
      this.LIST_ITEMS({ posts: this.allPosts, page: this.currentPage })

      this.disableButtons()
    }
  },

  methods: {
    ...mapMutations(['CHANGE_LIST_ITEMS']),
    ...mapActions(['LIST_ITEMS']),

    prevPage () {
      this.disableNextButton = false
      this.currentPage -= 1
    },

    nextPage () {
      this.disablePrevButton = false
      this.currentPage += 1
    },

    disableButtons () {
      if (this.currentPage === 1) {
        this.disablePrevButton = true
      } else {
        this.disablePrevButton = false
      }

      if (this.currentPage === this.totalPages) {
        this.disableNextButton = true
      } else {
        this.disableNextButton = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
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
