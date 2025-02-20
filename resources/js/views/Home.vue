<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-lg-5 align-self-center">
        <h1 class="display-5 fw-bold mb-4">Mulai voting dengan waktu singkat</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam harum rerum quo nihil impedit beatae numquam, sed voluptate natus, minus.</p>
        <router-link
          v-if="!authenticated"
          to="/login"
          class="btn btn-light-primary mt-2"
        ><i class="fa fa-chevron-right"></i> Ayo... Login Sekarang!</router-link>
        <router-link
          v-if="authenticated"
          to="/vote"
          class="btn btn-light-success mt-2"
        ><i class="fa fa-chevron-right"></i> Ayo.. Mulai Vote Sekarang!</router-link>
        <div class="mt-5">
          <a
            href="https://www.instagram.com/stmikbandung/"
            target="_blank"
            class="me-4"
          ><i class="fab fa-instagram fa-2x"></i></a>
          <a
            href="https://www.youtube.com/channel/UCquRaRrD-VR2sWhHNHDLV5g"
            target="_blank"
            class="me-4"
          ><i class="fab fa-youtube fa-2x"></i></a>
          <a
            href="https://facebook.com/BandungSTMIK/"
            target="_blank"
            class="me-4"
          ><i class="fab fa-facebook-f fa-2x"></i></a>
        </div>
      </div>
      <div class="col-lg-6 order-first order-lg-last">
        <img
          :src="this.$base_url + '/assets/img/voting.svg'"
          class="img-fluid mb-2"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Beranda'
  },
  computed: {
    ...mapGetters({
      authenticated: 'authenticated',
      userdata: 'user'
    })
  },
}
</script>