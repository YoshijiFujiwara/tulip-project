<template>
  <v-row>
    <v-col cols="10">
      <h3 class="mt-3 mb-3">ようこそ、{{ user.studentNumber }}さん</h3>
    </v-col>
    <v-col cols="1" class="ml-6">
      <v-btn
        v-if="!isPresenceBtn"
        depressed
        x-large
        color="success"
        dark
        @click="onPresence"
      >
        出席する
      </v-btn>
      <v-btn v-if="isPresenceBtn" depressed x-large color="white">
        <v-icon color="#389c0a">mdi-check-circle</v-icon>
        出席済み
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
                    <v-icon color="#389c0a">mdi-check-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>作品登録</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
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
                      <span class="text-h4 mr-2">99日</span>
                      <span class="text-h4">23:59</span>
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
                  <div><v-icon color="grey" size="120">mdi-apps</v-icon></div>
                  <div class="link-string">ブース設定</div>
                </a>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="8" class="">
          <v-img max-width="1086px" max-height="608px"
            >画像ダミー
            <v-card class="ma-auto" outlined>
              <v-card-title class="justify-center">
                <v-icon>mdi-information-outline</v-icon>
                ただいまテストサーバで公開中です。
              </v-card-title>
              <v-card-actions class="justify-center">
                <v-btn large class="px-15" @click="connectEntrance">入場</v-btn>
              </v-card-actions>
            </v-card>
          </v-img>
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
import ExhibitApi from '../../plugins/axios/modules/exhibit'
import Profile from '../../plugins/axios/modules/profile'
import {User} from '../../types/auth'

@Component({
  components: {
    CreateExhibitDialog,
    UploadBoothDialog,
  },
})
export default class MyPage extends Vue {
  user: User | null = null
  // 展示物作成モーダルの開閉
  isOpenCreateExhibitDialog: boolean = false

  isOpenUploadBoothDialog: boolean = false

  // 出席ボタン
  isPresenceBtn: boolean = false
  isAttend: boolean = false

  openCreateExhibitsModal() {
    // 作品登録用モーダルを開く
    this.isOpenCreateExhibitDialog = true
  }

  openUploadBoothModal() {
    // ブース登録用モーダルを開く
    this.isOpenUploadBoothDialog = true
  }

  connectEntrance() {
    alert('入場')
  }

  onPresence() {
    // 出席処理
    Profile.updateProfileAttend()
      .then(() => {
        this.$toast.success('出席しました')
      })
      .catch(() => {
        this.$toast.error('出席エラー')
      })

    this.isPresenceBtn = true
  }

  async created() {
    this.user = await this.$auth.user as User
      this.isAttend = !!this.user && !!this.user.attendedAt

    if (this.isAttend) {
      this.isPresenceBtn = true
    }

    const response = await ExhibitApi.getExhibits()
    console.log('response', response)

    // const response2 = await ExhibitApi.createExhibit()
    // console.log('response2', response2)
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
</style>
