<template>
  <div>
    <breadcrums :items="breadcrum" />
    <v-container>
      <!-- ダッシュボードの一列目 -->
      <v-row justify="center" align="center">
        <v-col cols="9">
          <v-row>
            <v-card
              class="px-3 mr-1"
              max-width="280px"
              color="#f44336"
              cols="4"
            >
              <v-card-text class="font-white-block">
                <p class="display-1 font-white-block">出展まで</p>
                <div class="font-white-block ml-2 mt-5">
                  <v-row no-gutters>
                    <v-col cols="4" class="md-2">
                      <v-icon color="white" x-large>mdi-clock-time-four</v-icon>
                    </v-col>
                    <v-col cols="8" class="md-2">
                      <div>あと</div>
                      <div style="font-size: 25px">99日 99:99</div>
                    </v-col>
                    <v-col class="mt-5">
                      <v-card-actions>
                        <v-spacer></v-spacer
                        ><v-btn
                          rounded
                          outlined
                          color="#ffffff"
                          @click="openEventTimeModal"
                          >イベント設定</v-btn
                        >
                      </v-card-actions>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>
            </v-card>
            <v-card
              class="px-3 mr-1"
              max-width="290px"
              color="#009688"
              cols="4"
            >
              <v-card-text class="font-white-block">
                <p class="display-1 font-white-block">出展者数</p>
                <div class="font-white-block ml-2 mt-5">
                  <v-row no-gutters>
                    <v-col cols="4" class="md-2">
                      <v-icon color="white" x-large>mdi-account</v-icon>
                    </v-col>
                    <v-col
                      cols="8"
                      class="md-2"
                      style="font-size: 30px"
                      align-self="center"
                    >
                      99人
                    </v-col>
                    <v-col class="mt-5">
                      <v-card-actions>
                        <v-spacer></v-spacer
                        ><v-btn rounded outlined color="#ffffff"
                          >出展者一覧</v-btn
                        >
                      </v-card-actions>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>
            </v-card>
            <v-card
              class="px-3 mr-1"
              max-width="290px"
              color="#2196f3"
              cols="4"
            >
              <v-card-text class="font-white-block">
                <p class="display-1 font-white-block">グループ数</p>
                <div class="font-white-block ml-2 mt-5">
                  <v-row no-gutters>
                    <v-col cols="4" class="md-2">
                      <v-icon color="white" x-large>mdi-account-group</v-icon>
                    </v-col>
                    <v-col
                      cols="8"
                      class="md-2"
                      style="font-size: 30px"
                      align-self="center"
                    >
                      9 グループ
                    </v-col>
                    <v-col class="mt-5">
                      <v-card-actions>
                        <v-spacer></v-spacer
                        ><v-btn rounded outlined color="#ffffff"
                          >グループ一覧</v-btn
                        >
                      </v-card-actions>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>
            </v-card>
          </v-row>
          <v-row justify="center" align="center">
            <v-col><LineChart /></v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-col>
            <v-card elevation="3" outlined>
              <!-- <v-card-title>人気作品</v-card-title> -->
              <v-card-text>
                <div class="sm_font">人気作品</div>
                <template>
                  <v-tabs right>
                    <v-tab>いいね数</v-tab>
                    <v-tab>視聴数</v-tab>
                  </v-tabs>
                </template>
                <PieChart />
                <v-card-actions>
                  <v-spacer></v-spacer
                  ><v-btn text color="success">作品一覧</v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
        </v-col>
      </v-row>
      <EventTimeDialog v-model="isOpenEventTimeDialog" />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Breadcrumbs from '../../components/breadcrums.vue'
import LineChart from '@/components/charts/lineChart.vue'
import PieChart from '@/components/charts/pieChart.vue'
import EventTimeDialog from '@/components/EventTimeDialog.vue'

@Component({
  auth: false,
  layout: 'admin',
  components: { Breadcrumbs, LineChart, PieChart, EventTimeDialog },
})
export default class Signin extends Vue {
  breadcrum = [
    {
      text: 'ダッシュボード',
      disabled: true,
      href: '/admin',
    },
  ]

  headers = [
    {
      text: 'グループ名',
      align: 'start',
      sortable: false,
      value: 'groupsname',
    },
    { text: '%', value: 'percentage' },
    { text: 'いいね数', value: 'number' },
  ]

  items = [
    {
      groupsname: 'チューリップ組',
      percentage: 33,
      number: 6.0,
    },
    {
      groupsname: 'ひまわり組',
      percentage: 33,
      number: 6.0,
    },
    {
      groupsname: 'ホげほげ組',
      percentage: 33,
      number: 6.0,
    },
  ]

  value = [423, 446, 675, 510, 590, 610, 760]
  labels = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']

  isOpenEventTimeDialog: boolean = false

  openEventTimeModal() {
    // 作品登録用モーダルを開く
    this.isOpenEventTimeDialog = true
  }
}
</script>

<style lang="scss">
#display-change-block {
  font-size: 10px;
  margin-bottom: -5px;
}
.font-white-block {
  color: #ffffff;
}
.sm_font {
  font-size: 0.5em;
}
</style>
