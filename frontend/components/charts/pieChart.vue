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
  },
  data() {
    return {
      chartdata: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: ['Data One'],
            backgroundColor: '#f87979',
            data: [40, 30],
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
