import { axios } from '../index'

export default {
  getExhibits() {
    return axios.$get(`exhibits`)
  },

  createExhibit(body: any) {
    return axios.$post('exhibits', body)
  },

  getMyExhibit() {
    return axios.$get('exhibits/1')
  },

  updateExhibit(body: any, id: number) {
    return axios.$put('exhibits/' + id, body)
  },
}
