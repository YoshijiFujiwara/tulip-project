<template>
  <div>
    <h3>99人中9人が会場にログインしています</h3>
    <h3>出席中｜未出席</h3>
    <v-data-table
      v-show="!deleteDialog"
      :headers="headers"
      :items="exhibitors"
      :items-per-page="5"
      class="elevation-1"
      :search="search"
      rows-per-page-text=""
      :rows-per-page-items="[]"
    >
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

@Component({
  auth: false,
  layout: 'admin',
})
export default class Signin extends Vue {
  exhibitors = []

  headers = [
    { text: 'ID', value: 'id' },
    { text: '展示者名', value: 'name' },
    { text: '所属グループ名', value: 'group.name' },
    { text: '操作', value: 'actions', sortable: false },
  ]

  async created() {
    const response = await ExhibitorApi.getExhibitors()
    this.exhibitors = response
  }
}
</script>

<style lang="scss"></style>
