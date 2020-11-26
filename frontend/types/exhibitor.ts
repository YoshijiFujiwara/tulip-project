import { Group } from './group'

export type Exhibitor = {
  id: number

  studentNumber: string

  name: string

  lastLoggedinAt: Date

  groupId: number

  group?: Group
}
