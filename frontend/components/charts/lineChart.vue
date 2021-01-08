<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  data() {
    return {
      chartdata: {
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
        datasets: [
          {
            label: ['展示者'],
            data: [40, 30, 66, 45, 66, 22, 66],
          },
          {
            label: ['一般'],
            data: [44, 55, 33, 66, 55, 44, 77],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  },
}
</script>
