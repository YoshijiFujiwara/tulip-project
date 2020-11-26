import { axios } from '../index'
import { Exhibit } from '~/types/exhibit'

export default {
  getExhibits(): Promise<Exhibit[]> {
    return axios.$get(`exhibits`)
  },

  createExhibit(body: any): Promise<Exhibit> {
    return axios.$post('exhibits', body)
  },

  getMyExhibit(): Promise<Exhibit> {
    return axios.$get('exhibits/1')
  },

  updateExhibit(id: number, body: any): Promise<Exhibit> {
    return axios.$put('exhibits/' + id, body)
  },
}
