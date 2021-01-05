import { Exhibit } from './exhibit'

export type Booth = {
  id: number
  positionNumber: number
  exhibitId: number
  exhibit?: Exhibit
}
