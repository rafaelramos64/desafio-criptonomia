<template>
  <nav class="navbar navbar-expand-lg navbar-white px-5 py-3 shadow-sm bg-white static-top" >
    <div class="container">
      <router-link class="navbar-brand sidebar-nav" :to="{ name: 'Home' }">
        <h2 > E-BLOG</h2>
      </router-link>

      <!-- <div class="collapse navbar-collapse" id="navbarResponsive"> -->
      <div>
        <ul class="navbar-nav" style="margin-left: auto">
          <li class="nav-item active">
          </li>
          <li class="nav-item active">
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  data () {
    return {
    }
  },

  methods: {
    listMedicines () {
    }
  }
}
</script>

<style scoped>
.sidebar-nav {
  border-left: 4px solid #aa82eb;
  height: auto !important;
}

h2 {
  font-family: "Montserrat",serif;
  color: rgba(0, 0, 0, 0.7);
  margin-left: 10px;
}
</style>