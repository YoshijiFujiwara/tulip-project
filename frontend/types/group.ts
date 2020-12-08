import { Exhibitor } from './exhibitor'

export type Group = {
  id: number

  name: string

  exhibitors: Exhibitor[]

  exhibit: Exhibitor
}
