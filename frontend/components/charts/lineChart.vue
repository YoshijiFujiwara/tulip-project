<script>
import { Line } from 'vue-chartjs'
import AcceslogApi from '../../plugins/axios/modules/getAcceslog'
import { Acceslog } from '~/types/acceslog'
import { format } from 'date-fns'

export default {
  extends: Line,
  data() {
    return {
      chartdata: {
        labels: [],
        datasets: [
          {
            label: ['一般'],
            backgroundColor: '#f87979',
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      accessLog: []
    }
  },
  Acceslogs:[],
  async created() {
    const accessLog = await AcceslogApi.getAcceslog()
    const formatedLog = accessLog.map(log => {
      const dateAccessedAt = this.parseISO(log.accessedAt)
      return {
        ...log,
        accessedAt: format(dateAccessedAt, 'yyyy年MM月dd日 HH時')
      }
    })
    this.accessLog = formatedLog
    let result = []
    this.accessLog.forEach(el => {
      if(result[el.accessedAt]==null){
        this.chartdata.labels.push(el.accessedAt)
        result[el.accessedAt]=1
      }else{
        result[el.accessedAt]+=1
      }
    })
    this.chartdata.labels.sort(function (a, b) {
    return ('' + a).localeCompare(b);}).forEach(label => {

        this.chartdata.datasets[0].data = [...this.chartdata.datasets[0].data, result[label]]
      })
  },
  methods:{
    parseISO(s) {  
      var b = s.split(/\D+/);
      return new Date(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]);
    }
  },

  mounted() {
    this.renderChart(this.chartdata, this.options)
  },
}
</script>
