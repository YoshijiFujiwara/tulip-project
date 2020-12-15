import { Group } from './group'

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

  presentationImage: string

  demo?: string

  groupId: number

  group: Group
}
