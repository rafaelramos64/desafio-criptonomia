<template>
  <b-container>
    <b-row class="text-center">
      <b-col>
        <h3 style="font-family: 'Montserrat', serif, monospace !important;" class="page-tittle my-3">Posts</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="my-4">
        <Posts />
      </b-col>
    </b-row>

    <b-row class="mb-5">
      <b-col>
        <Pagination />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import Pagination from '@/components/home/Pagination'
import Posts from '@/components/home/Posts'

export default {
  name: 'Home',
  components: { Pagination, Posts },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
</style>