<template>
  <div class="card border-0 shadow-sm mb-4">
    <div class="card-header border-0">
      <div class="py-2">
        <span class="h5 fw-bold text-muted">Total Suara Sementara</span>
        <!-- <span class="float-end"><i class="fa fa-bars"></i></span> -->
        <a
          class="float-end"
          data-bs-toggle="collapse"
          href="#chartPie"
          role="button"
        >
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
    <div
      class="collapse show"
      id="chartPie"
    >
      <div class="card-body">
        <div class="col-lg-8 mx-auto">
          <canvas ref="candidatesPieChart"></canvas>
        </div>
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
      candidates: {
        score: [],
        name: [],
        color: []
      }
    }
  },
  mounted () {
    this.pieChart()
  },
  methods: {
    async pieChart () {
      await axios.get('/api/v1/candidates')
        .then(response => {
          for (let dataObj of response.data.results) {
            this.candidates.score.push(parseInt(dataObj.score))
            this.candidates.name.push(dataObj.student.name)
            this.candidates.color.push('rgba(' + dataObj.color + ')')
          }
        })
        .catch(error => [
          console.log(error.response)
        ])

      new Chart(this.$refs.candidatesPieChart, {
        type: "doughnut",
        data: {
          labels: this.candidates.name,
          datasets: [
            {
              data: this.candidates.score,
              backgroundColor: this.candidates.color
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
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