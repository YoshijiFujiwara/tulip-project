<template>
  <v-row>
    <v-col cols="10">
      <h3 class="mt-3 mb-3">
        ようこそ、{{ user ? user.studentNumber : '' }}さん
      </h3>
    </v-col>
    <v-col cols="1" class="ml-6">
      <v-btn
        v-if="!isAttend"
        depressed
        x-large
        color="success"
        dark
        @click="onPresence"
        >出席する</v-btn
      >
      <v-btn v-if="isAttend" depressed x-large color="white">
        <v-icon color="#389c0a">mdi-check-circle</v-icon>出席済み
      </v-btn>
    </v-col>
    <v-card width="100%">
      <v-row class="pa-10">
        <v-col cols="4">
          <v-row>
            <v-col cols="12">
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>出展ステータス</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon :color="exhibit ? '#389c0a' : '#ff5252'">
                      {{ exhibit ? 'mdi-check-circle' : 'mdi-close-circle' }}
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>作品登録</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="exhibit">
                  <v-list-item-icon>
                    <v-icon :color="exhibit.booth ? '#389c0a' : '#ff5252'">
                      {{
                        exhibit.booth ? 'mdi-check-circle' : 'mdi-close-circle'
                      }}
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>ブース作成</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item v-else>
                  <v-list-item-icon>
                    <v-icon color="#ff5252">mdi-close-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>ブース作成</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>出展まで</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-clock-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      あと
                      <span class="text-h5 mr-1"
                        >{{ eventLimitTime.date }}日</span
                      >
                      <span class="text-h5">
                        {{ eventLimitTime.hour }}時
                        {{ eventLimitTime.minute }}分
                      </span>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="6" class="production">
              <v-card>
                <a class="text-h5 text-center" @click="openCreateExhibitsModal">
                  <div>
                    <v-icon color="grey" size="120">mdi-clipboard-text</v-icon>
                  </div>
                  <div class="link-string">作品設定</div>
                </a>
              </v-card>
            </v-col>
            <v-col cols="6" class="booth">
              <v-card>
                <a class="text-h5 text-center" @click="openUploadBoothModal">
                  <div>
                    <v-icon color="grey" size="120">mdi-apps</v-icon>
                  </div>
                  <div class="link-string">ブース設定</div>
                </a>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="8">
          <div v-if="exhibit && exhibit.booth" class="vr-booth">
            <iframe
              id="iframe-details"
              :src="`${vrUrl}honnban/booths/${
                exhibit.id
              }?username=${user.name.trim()}&avatar=none`"
              frameborder="0"
            ></iframe>

            <v-card class="ma-auto card-area ml-5 mr-5" outlined>
              <v-card-title class="justify-center"
                >プレゼンテーションを開始するには、こちらから入場してください</v-card-title
              >
              <v-card-actions class="justify-center">
                <v-btn large class="px-15" @click="connectEntrance">入場</v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <div v-else class="vr-booth">
            <v-card class="ma-auto ml-5 mr-5 cardvent" outlined>
              <v-card-title class="justify-center"
                >作品登録とブース選択が完了すると、こちらでブースのプレビューを閲覧することが出来ます</v-card-title
              >
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <CreateExhibitDialog v-model="isOpenCreateExhibitDialog" />
    <UploadBoothDialog v-model="isOpenUploadBoothDialog" />
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CreateExhibitDialog from '@/components/exhibitors/mypage/CreateExhibitDialog.vue'
import UploadBoothDialog from '@/components/exhibitors/mypage/UploadBoothDialog.vue'
import { User } from '../../types/auth'
import ProfileApi from '../../plugins/axios/modules/profile'
import { Exhibit } from '../../types/exhibit'
import EventsApi from '../../plugins/axios/modules/events'
import { Event } from '../../types/event'
@Component({
  components: {
    CreateExhibitDialog,
    UploadBoothDialog,
  },
})
export default class MyPage extends Vue {
  vrUrl: string = ''

  user: User | null = null
  // 自分が登録した作品情報
  exhibit: Exhibit | null = null
  // 展示物作成モーダルの開閉
  isOpenCreateExhibitDialog: boolean = false

  isOpenUploadBoothDialog: boolean = false

  // 出席しているか
  isAttend: boolean = false

  eventStartTime: Event | null = null
  eventLimitTime = {
    date: 99,
    hour: 23,
    minute: 59,
  }

  openCreateExhibitsModal() {
    // 作品登録用モーダルを開く
    this.isOpenCreateExhibitDialog = true
  }

  openUploadBoothModal() {
    // ブース登録用モーダルを開く
    this.isOpenUploadBoothDialog = true
  }

  connectEntrance() {
    const exhibitId = this.exhibit ? this.exhibit.id : 0
    const username = this.user ? this.user.name.replace(/\s/g, '') : ''
    const url = `${this.vrUrl}honnban/booths/${exhibitId}?username=${username}&avatar=scarlet_macaw`
    window.location.href = url
  }

  onPresence() {
    // 出席処理
    ProfileApi.updateProfileAttend()
      .then(() => {
        this.$toast.success('出席しました')
      })
      .catch(() => {
        this.$toast.error('出席エラー')
      })

    this.isAttend = true
  }

  async created() {
    this.user = (await this.$auth.user) as User
    this.isAttend = !!this.user && !!this.user.attendedAt

    // 自分が登録している作品情報をとる
    const exhibit = await ProfileApi.getProfileExhibit()
    this.exhibit = exhibit

    this.vrUrl = process.env.vrBaseUrl!

    // 開催時間の取得
    this.eventStartTime = await EventsApi.getEvents()
    this.diffTime()
    console.log(this.exhibit)
  }

  diffTime() {
    if (this.eventLimitTime) {
      const limitTime = new Date(this.eventStartTime!!.startAt) // 開催時間
      const nowTime = new Date().getTime() // 現在時刻
      const diffTime = limitTime.getTime() - nowTime
      this.eventLimitTime.date = Math.floor(diffTime / (1000 * 60 * 60 * 24)) // 日
      let diff2Dates = diffTime % (1000 * 60 * 60 * 24)
      this.eventLimitTime.hour = Math.floor(diff2Dates / (1000 * 60 * 60)) // 時間
      diff2Dates = diff2Dates % (1000 * 60 * 60)
      this.eventLimitTime.minute = Math.floor(diff2Dates / (1000 * 60)) // 分
    }
  }
}
</script>
<style lang="scss">
.link-string {
  color: #000000;
}
a {
  color: #000000;
}
.vr-booth {
  width: 100%;
  height: 100%;
  background-color: aqua;
  display: block;
}
.vr-scene {
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
}
.card-area {
  z-index: 1;
  position: relative;
  top: -200px;
  opacity: 0.6;
}
#iframe-details {
  width: 100%;
  height: 100%;
}
.cardvent {
  z-index: 1;
  position: relative;
  top: 300px;
  opacity: 0.6;
}
</style>
