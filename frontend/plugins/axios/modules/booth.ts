import { axios } from '../index'

export default {
  postBooth({ positionNumber }: { positionNumber: number }): Promise<any> {
    return axios.post('booths', positionNumber)
  },
}
