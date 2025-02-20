<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <Sidenav />
      </div>
      <div class="col-lg">
        <h5><i class="fa fa-chart-line"></i> Grafik Statistik</h5>
        <CandidatesChartBar />
        <CandidatesChartPie />
        <UserVoted />
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from '../../components/Sidenav.vue'
import CandidatesChartBar from './chart/CandidatesChartBar.vue'
import CandidatesChartPie from './chart/CandidatesChartPie.vue'
import UserVoted from './chart/UserVoted.vue'

export default {
  name: 'Index',
  components: {
    Sidenav,
    CandidatesChartBar,
    CandidatesChartPie,
    UserVoted
  },
  metaInfo: {
    title: 'Control Panel'
  },
  data () {
    return {
      coba: null
    }
  },
  methods: {
    cobawarna () {
      const color = this.coba
      const r = parseInt(color.substr(1, 2), 16)
      const g = parseInt(color.substr(3, 2), 16)
      const b = parseInt(color.substr(5, 2), 16)
      console.log(`${r}, ${g}, ${b}`)
    }
  }
}
</script>