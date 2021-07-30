<template>
  <div>
    <Navbar />
    <transition mode="out-in">
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Navbar, Footer }
}
</script>

<style lang="css" >
.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
