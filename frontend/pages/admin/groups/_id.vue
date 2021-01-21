<template>
  <v-app class="pa-14">
    <breadcrums :items="breadcrum" />

    <div class="text-h3 mt-5 ml-4">
      {{ group.name }}
    </div>
    <v-data-table
      :headers="headers"
      :items="group.exhibitors"
      :items-per-page="5"
      :search="search"
      class="elevation-1"
    >
      <!-- eslint-disable-next-line -->
      <!-- TODO:IDで出席判定してるので出席情報が出来次第修正 -->
      <template v-slot:item.status="{ item }">
        <v-badge
          v-if="item.id % 2 == 0"
          bordered
          left
          inline
          color="green"
          icon="mdi-check-bold"
        >
          出席済み
        </v-badge>
        <v-badge v-else bordered left inline color="red" icon="mdi-close-thick">
          欠席
        </v-badge>
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2"> mdi-pencil </v-icon>
        <v-icon small> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import GroupApi from '../../../plugins/axios/modules/group'
import { Group } from '../../../types/group'
import Breadcrumbs from '../../../components/breadcrums.vue'

@Component({
  auth: false,
  layout: 'admin',
  components: { Breadcrumbs },
})
export default class Groups extends Vue {
  group: Group[] = []

  search = ''
  headers = [
    {
      text: 'ID',
      align: 'start',
      sortable: true,
      value: 'id',
    },
    { text: '学籍番号', value: 'studentNumber', sortable: true },
    { text: '名前', value: 'name', sortable: false },
    { text: '出席ステータス', value: 'status', sortable: false },
  ]

  breadcrum = [
    {
      text: 'ダッシュボード',
      disabled: false,
      href: '/admin',
    },
    {
      text: '出展者一覧',
      disabled: false,
      href: '/admin/exhibitors',
    },
  ]

  async created() {
    // this.user = await this.$auth.user
    this.group = await GroupApi.getGroup(Number(this.$route.params.id))
    this.breadcrum = [
      ...this.breadcrum,
      {
        text: this.group.name,
        disabled: true,
        href: `/admin/exhibitors/${this.$route.params.id}`,
      },
    ]
  }
}
</script>

<style lang="scss">
.div-controller {
  height: 30px;
  width: 100%;
  margin: 20px 0 10px 0;
  text-align: right;
  font-family: MeiryoUI;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #6c6c6c;
}
</style>
