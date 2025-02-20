<template>
  <div class="card border-0 shadow-sm mb-4">
    <div class="card-header border-0">
      <div class="py-2">
        <span class="h5 fw-bold text-muted">Total Voting</span>
        <!-- <span class="float-end"><i class="fa fa-bars"></i></span> -->
        <a
          class="float-end"
          data-bs-toggle="collapse"
          href="#userVotedChart"
          role="button"
        >
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
    <div
      class="collapse show"
      id="userVotedChart"
    >
      <div class="card-body">
        <canvas ref="userVoted"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'CandidatesChartPie',
  data () {
    return {
      counted: {
        voted: 0,
        not_voted: 0
      }
    }
  },
  mounted () {
    this.pieChart()
  },
  methods: {
    async pieChart () {
      await axios.get('/api/v1/configurations/voting/counts')
        .then(response => {
          this.counted.voted = response.data.results.voted
          this.counted.not_voted = response.data.results.not_voted
        })
        .catch(error => [
          console.log(error.response)
        ])

      new Chart(this.$refs.userVoted, {
        type: "bar",
        data: {
          labels: [''],
          datasets: [
            {
              label: 'BELUM VOTING',
              data: [this.counted.not_voted],
              backgroundColor: 'rgba(248, 63, 55, .2)',
              borderColor: 'rgba(248, 63, 55)',
              borderWidth: 2,
              borderRadius: 8,
            },
            {
              label: 'SUDAH VOTING',
              data: [this.counted.voted],
              backgroundColor: 'rgba(34, 175, 71, .2)',
              borderColor: 'rgba(34, 175, 71)',
              borderWidth: 2,
              borderRadius: 8,
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: {
                  family: "'Poppins', sans-serif",
                  size: 14
                }
              }
            },
          }
        }
      })
    }
  }
}
</script>