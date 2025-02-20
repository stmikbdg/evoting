<template>
  <div class="card border-0 shadow-sm mb-4">
    <div class="card-header border-0">
      <div class="py-2">
        <span class="h5 fw-bold text-muted">Total Suara Sementara</span>
        <a
          class="float-end"
          data-bs-toggle="collapse"
          href="#chartBar"
          role="button"
        >
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
    <div
      class="collapse show"
      id="chartBar"
    >
      <div class="card-body">
        <canvas ref="candidatesBarChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'CandidatesChart',
  data () {
    return {
      candidates: {
        score: [],
        name: [],
        datasets: []
      }
    }
  },
  mounted () {
    this.barChart()
  },
  methods: {
    async barChart () {
      await axios.get('/api/v1/candidates')
        .then(response => {
          for (let dataObj of response.data.results) {
            // this.candidates.score.push(parseInt(dataObj.score))
            this.candidates.datasets.push({
              label: dataObj.student.name,
              data: [dataObj.score],
              backgroundColor: 'rgba(' + dataObj.color + ', .2)',
              borderColor: 'rgba(' + dataObj.color + ')',
              borderWidth: 2,
              borderRadius: 8,
            })
          }
        })
        .catch(error => [
          console.log(error.response)
        ])

      new Chart(this.$refs.candidatesBarChart, {
        type: "bar",
        data: {
          labels: ['Total Skor Sementara'],
          datasets: this.candidates.datasets
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