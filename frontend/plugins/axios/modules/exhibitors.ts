import { axios } from '../index'
import { Exhibitor } from '~/types/exhibitor'

export default {
  getExhibitors(): Promise<Exhibitor[]> {
    return axios.$get(`exhibitors`)
  },
}
