import { axios } from '../index'
import { Event } from '~/types/event'

export default {
  getEvents(): Promise<Event> {
    return axios.$get(`events`)
  },
  updateEvent(body: any): Promise<Event> {
    return axios.$put('events', body)
  },
}
