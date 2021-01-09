import { axios } from '../index'
import { Acceslog } from '~/types/acceslog'

export default {
    getAcceslog(): Promise<Acceslog[]> {
        return axios.$get(`access_log`)
    },
}
