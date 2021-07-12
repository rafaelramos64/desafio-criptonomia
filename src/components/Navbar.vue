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
            <router-link v-if="this.$route.name !== 'Home' " class="nav-link" :to="{ name: 'MedicinesRegistration' }">
              <!-- b-button
                class="mr-0"
                variant="outline-success"
              >
                <span><i class="fas fa-plus"></i></span> Medicamentos
              </b-button> -->
            </router-link>
          </li>
          <li class="nav-item active">
            <router-link v-if="this.$route.name !== 'Home' " class="nav-link" :to="{ name: 'ListMedicines' }">
              <!-- <b-button
                variant="outline-success"
                @click="listMedicines"
              >
                Lista de Medicamentos
              </b-button> -->
            </router-link>
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