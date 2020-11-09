import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

interface PathfinderData {
  name: string
  message: string
  skill: string
}

@Module({
  name: 'pathfinder',
  stateFactory: true,
  namespaced: true,
})
export default class Pathfinder extends VuexModule {
  public info: PathfinderData = {
    name: 'パスファインダー',
    message: '倒しちゃってごめんね',
    skill: 'グラップル',
  }

  get fullInfo(): string {
    return `${this.info.name}: "${this.info.message}" <- ${this.info.skill}`
  }

  @Mutation
  public updateInfo(data: PathfinderData) {
    this.info = {
      ...this.info,
      ...data,
    }
  }
}
