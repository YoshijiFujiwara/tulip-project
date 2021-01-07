import { axios } from '../index'
import { Event } from '~/types/event'

export default {
updateEvent(body: any): Promise<Event> {
    return axios.$put('events',body)
},
}
