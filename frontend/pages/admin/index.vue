<template>
  <div>
    <breadcrums :itemss=breadcrum />
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
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import breadcrumbs from '../../components/breadcrums.vue'

@Component({
  auth: false,
  layout: 'admin',
})
export default class Signin extends Vue {
  breadcrum = [
    {
      text: 'ダッシュボード',
      disabled: true,
      href: '/admin',
    },
  ]
}
</script>

<style lang="scss"></style>
