import { axios } from '../index'

export default {
  postBooth(positionNumber: number): Promise<any> {
    return axios.post('booths', {
      positionNumber,
    })
  },
}
