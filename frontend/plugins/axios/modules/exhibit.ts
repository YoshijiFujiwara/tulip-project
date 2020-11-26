import { axios } from '../index'
import { Exhibit } from '~/types/exhibit'

export default {
  getExhibits(): Exhibit[] {
    return axios.$get(`exhibits`)
  },

  createExhibit(body: any): Exhibit {
    return axios.$post('exhibits', body)
  },

  getMyExhibit(): Exhibit {
    return axios.$get('exhibits/1')
  },

  updateExhibit(id: number, body: any): Exhibit {
    return axios.$put('exhibits/' + id, body)
  },
}
