import { axios } from '../index'

export default {
  getProfileExhibits() {
    return axios.$get(`profile/exhibit`)
  },
}
