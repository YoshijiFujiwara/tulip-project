<template>
  <v-app>
    <!-- <v-app-bar fixed app elevation="0">
      <div class="ml-1">グループ一覧 │</div>
      <v-btn icon>
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-app-bar> -->
    <div class="div-controller">
      <v-icon small left color="green">mdi-circle</v-icon
      >会場にログインしているユーザ
    </div>

    <v-data-table
      :headers="headers"
      :items="groups"
      :items-per-page="5"
      :search="search"
      class="elevation-1"
    >
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
import GroupApi from '../../plugins/axios/modules/group'
import { Group } from '../../types/group'

@Component({
  auth: false,
  layout: 'admin',
})
export default class Groups extends Vue {
  groups: Group[] = []

  // groups: Object = {}
  search = ''
  headers = [
    {
      text: 'ID',
      align: 'start',
      sortable: true,
      value: 'id',
    },
    { text: 'グループ名', value: 'name', sortable: true },
    { text: 'リーダー名', value: 'name', sortable: false },
    { text: '操作', value: 'actions', sortable: false },
  ]

  async created() {
    // this.user = await this.$auth.user
    const groups = await GroupApi.getGroups()
    this.groups = groups
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
