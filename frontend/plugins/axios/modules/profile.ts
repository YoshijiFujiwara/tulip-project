import { axios } from '../index'
import { Exhibit } from '~/types/exhibit'

export default {
  getProfileExhibits(): Exhibit {
    return axios.$get(`profile/exhibit`)
  },
}
