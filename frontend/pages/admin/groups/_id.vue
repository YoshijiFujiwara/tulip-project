<template>
  <v-app>
    <div class="text-h3 mt-5 ml-4">
      {{ groupName }}
    </div>
    <div class="div-controller">
      <v-icon small left color="green">mdi-circle</v-icon
      >会場にログインしているユーザ
    </div>

    <v-data-table
      :headers="headers"
      :items="groupDetails"
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
import { Exhibitor } from '../../../types/exhibitor'

@Component({
  auth: false,
  layout: 'admin',
})
export default class Groups extends Vue {
  groups: Group[] = []
  groupDetails: Exhibitor[] = []
  groupName = ''
  routeId = 0

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
    { text: '操作', value: 'actions', sortable: false },
  ]

  async created() {
    // this.user = await this.$auth.user
    const groups = await GroupApi.getGroups()
    this.groups = groups
    this.routeId = Number(this.$route.params.id)

    this.groups.forEach((item) => {
      if (Number(item.id) === this.routeId) {
        this.groupName = item.name
        this.groupDetails = item.exhibitors
      }
    })
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
