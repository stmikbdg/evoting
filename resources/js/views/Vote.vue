<template>
  <div class="container">
    <div class="text-center">
      <h1 class="display-5">Kandidat Calon Ketua</h1>
      <p>Silahkan pilih sesuai dengan hati kamu</p>
      <!-- https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg -->
    </div>
    <vue-loading
      v-if="vue_loading"
      type="spiningDubbles"
      color="#0092ee"
      :size="{ width: '50px', height: '50px' }"
    ></vue-loading>
    <div
      class="row justify-content-center"
      v-else
    >
      <div
        class="col-6 col-lg-3 mb-3"
        v-for="item, index in candidates"
        :key="index"
      >
        <div class="card border-0 shadow h-100">
          <router-link :to="'/candidates/' + item.id">
            <img
              :src="$base_url + '/assets/img/candidates/' + item.img"
              class="card-img-top"
              alt="..."
            >
          </router-link>
          <div class="card-body">
            <div class="mb-3">
              <h5 class="card-title">{{ item.student.name }}</h5>
              <!-- <p class="mb-0">- {{ item.student.student_number }}</p>
              <p class="mb-0">- {{ item.student.study_program.name }}</p> -->
            </div>
            <!-- <div class="d-grid mb-2">
              <a
                href="#"
                class="btn btn-sm btn-danger"
              >Pilih Langsung</a>
            </div> -->
            <div class="d-grid">
              <router-link
                :to="'/candidates/' + item.id"
                class="btn btn-sm btn-info"
              ><i class="fa fa-eye"></i> Lihat</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Vote',
  data () {
    return {
      candidates: null,
      vue_loading: true
    }
  },
  metaInfo: {
    title: 'Vote'
  },
  mounted () {
    axios.get('/api/v1/candidates')
      .then(response => {
        this.candidates = response.data.results
        this.vue_loading = false
        console.log(this.$base_url)
      })
      .catch(error => {
        console.log(error.response)
      })
  }
}
</script>