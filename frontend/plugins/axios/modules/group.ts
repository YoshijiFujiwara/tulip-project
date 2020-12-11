import { axios } from '../index'
import { Group } from '~/types/group'

export default {
  getGroups(): Promise<Group> {
    return axios.$get(`groups`)
  },
}