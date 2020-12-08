import { axios } from '../index'

export default {
  postBooth(positionNumber: any): Promise<any> {
    return axios.post('booths', positionNumber)
  },
}
