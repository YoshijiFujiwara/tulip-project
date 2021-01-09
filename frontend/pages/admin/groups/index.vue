<template>
  <v-app class="pa-14">
    <breadcrums :items="breadcrum" />

    <v-data-table
      :headers="headers"
      :items="groups"
      :items-per-page="10"
      :search="search"
      class="elevation-1"
    >
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <v-btn icon :to="'./' + item.id">
          <v-icon small> mdi-pencil </v-icon>
        </v-btn>
        <v-icon small> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Breadcrumbs from '../../../components/breadcrums.vue'
import GroupApi from '../../../plugins/axios/modules/group'
import { Group } from '../../../types/group'

@Component({
  auth: false,
  layout: 'admin',
  components: { Breadcrumbs },
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
  ]

  breadcrum = [
    {
      text: 'ダッシュボード',
      disabled: false,
      href: '/admin',
    },
    {
      text: 'グループ一覧',
      disabled: true,
      href: '/admin/exhibitors',
    },
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
