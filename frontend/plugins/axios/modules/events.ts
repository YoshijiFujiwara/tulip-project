import { axios } from '../index'
import { Event } from '~/types/event'

export default {
  getEvents(): Promise<Event> {
    return axios.$get(`events`)
  }
}