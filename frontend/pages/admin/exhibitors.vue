<template>
  <div class="pa-14">
    <breadcrums :items="breadcrum" />
    <h3>99人中9人が会場にログインしています</h3>
    <h3>出席中｜未出席</h3>
    <v-data-table
      :headers="headers"
      :items="exhibitors"
      class="elevation-1"
      sort-by="ID"
    >
      <!-- eslint-disable-next-line -->
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ExhibitorApi from '../../plugins/axios/modules/exhibitors'
import { Exhibitor } from '../../types/exhibitor'
import Breadcrumbs from '../../components/breadcrums.vue'

@Component({
  auth: false,
  layout: 'admin',
  components: { Breadcrumbs },
})
export default class Signin extends Vue {
  exhibitors: Exhibitor[] = []

  headers = [
    { text: 'ID', value: 'id' },
    { text: '展示者名', value: 'name' },
    { text: '所属グループ名', value: 'group.name' },
    { text: '出席ステータス', value: 'status', sortable: false },
    { text: '操作', value: 'actions', sortable: false },
  ]

  breadcrum = [
    {
      text: 'ダッシュボード',
      disabled: false,
      href: '/admin',
    },
    {
      text: '来場者一覧',
      disabled: true,
      href: '/admin/exhibitors',
    },
  ]

  async created() {
    const exhibitors = await ExhibitorApi.getExhibitors()
    this.exhibitors = exhibitors
  }
}
</script>

<style lang="scss"></style>
