<script>
import { Pie } from 'vue-chartjs'
export default {
  extends: Pie,
  props: {
    exhibits: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
    },
    order: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      chartdata: {
        labels: [],
        datasets: [
          {
            label: ['Data One'],
            backgroundColor: [
              '#FC365B',
              '#1F97FF',
              '#FFF733',
              '#0AF516',
              '#44A0EE',
              '#2EAF1D',
              '#F86868',
              '#0A7FFF',
            ],
            data: [40, 30, 10, 20],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  watch: {
    exhibits() {
      const labels = []
      const data = []
      this.exhibits.map(function (exhibit) {
        return labels.push(exhibit.title)
      })
      this.chartdata.labels = labels
      if (this.order === 'goodCount') {
        this.exhibits.map(function (exhibit) {
          return data.push(exhibit.goodCount)
        })
      } else {
        this.exhibits.map(function (exhibit) {
          return data.push(exhibit.viewsCount)
        })
      }
      this.chartdata.datasets[0].data = data
      this.renderChart(this.chartdata, this.options)
    },
  },
}
</script>
