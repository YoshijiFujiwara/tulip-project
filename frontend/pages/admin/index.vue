<template>
  <div class="pa-14">
    <breadcrums :items="breadcrum" />
    <v-layout col wrap class="mt-6">
      <!-- ダッシュボードの一列目 -->
      <v-flex xs12 row>
        <!-- 展示者情報カード -->
        <v-flex xs3 class="d-flex justify-center">
          <v-card color="#b7b7b7" dark width="300" height="300" hover>
            <v-card-title primary class="title justify-center">
              <v-icon size="200">mdi-account-supervisor</v-icon>
            </v-card-title>
            <v-card-text class="text-center text-h5">展示者情報</v-card-text>
          </v-card>
        </v-flex>
        <!-- 出席確認カード -->
        <v-flex xs3 class="d-flex justify-center">
          <v-card color="#b7b7b7" dark width="300" height="300" hover>
            <v-card-title primary class="title justify-center">
              <v-icon size="200">mdi-clipboard-check-multiple-outline</v-icon>
            </v-card-title>
            <v-card-text class="text-center text-h5">出席確認</v-card-text>
          </v-card>
        </v-flex>
      </v-flex>
      <v-flex xs12 row class="mt-4 ml-auto">
        <v-flex xs3 class="d-flex justify-center">
          <v-card elevation="2" outlined>
            <!-- <v-card-title>人気作品</v-card-title> -->
            <v-card-text>
              <div>人気作品</div>
              <v-img :src="require('@/assets/chart.jpg')" />
              <div id="display-change-block" class="text-right mr-4">
                表示切替
              </div>
              <template>
                <v-tabs right>
                  <v-tab>いいね数</v-tab>
                  <v-tab>視聴数</v-tab>
                </v-tabs>
              </template>
              <template>
                <v-data-table
                  :headers="headers"
                  :items="items"
                  :items-per-page="5"
                  class="elevation-1"
                ></v-data-table>
              </template>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Breadcrumbs from '../../components/breadcrums.vue'

@Component({
  auth: false,
  layout: 'admin',
  components: { Breadcrumbs },
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
}
</script>

<style lang="scss">
#display-change-block {
  font-size: 10px;
  margin-bottom: -5px;
}
</style>
