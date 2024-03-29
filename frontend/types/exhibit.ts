import { Booth } from './booth'
import { Group } from './group'
import { PresentationImage } from './presentationImage'
export enum GENRE {
  GAME = 'game',
  MUSIC = 'music',
  MOVIE = 'movie',
  IT = 'it',
}

export type Exhibit = {
  id: number

  title: string

  description: string

  thumbnail: string

  genre: GENRE

  presentationImages: PresentationImage[]

  demo?: string

  modelUrl?: string

  groupId: number

  group: Group

  booth?: Booth

  goodCount: number

  viewsCount: number
}
