import { axios } from '../index'
import { Exhibit } from '~/types/exhibit'

export default {
  getExhibits(): Promise<Exhibit[]> {
    return axios.$get(`exhibits`)
  },

  getExhibit(id: number): Promise<Exhibit[]> {
    return axios.$get(`exhibits/` + id)
  },

  createExhibit(body: any): Promise<Exhibit> {
    return axios.$post('exhibits', body)
  },

  updateExhibit(id: number, body: any): Promise<Exhibit> {
    return axios.$put('exhibits/' + id, body)
  },
}
