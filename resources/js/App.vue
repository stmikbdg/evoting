<template>
  <div>
    <!-- <vue-progress-bar></vue-progress-bar> -->
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  metaInfo: {
    titleTemplate: "%s • " + process.env.MIX_APP_NAME,
  },
  created () {
    document.body.style.backgroundColor = "#f5f5f6";
    /* global bootstrap: false */
    (function () {
      'use strict'
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl)
      })
    })

    //  [App.vue specific] When App.vue is first loaded start the progress bar
    // this.$Progress.start()
    // this.$router.beforeEach((to, from, next) => {
    //   if (to.meta.progress !== undefined) {
    //     let meta = to.meta.progress
    //     this.$Progress.parseMeta(meta)
    //   }
    //   this.$Progress.start()
    //   next()
    // })
    // this.$router.afterEach((to, from) => {
    //   this.$Progress.finish()
    // })
  },
}
</script>