<template>
  <div class="pa-14">
    <breadcrums :items="breadcrum" />
    <v-data-table
      :headers="headers"
      :items="exhibits"
      :items-per-page="10"
      class="elevation-1"
      @click:row="clickRow"
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ExhibitApi from '../../../plugins/axios/modules/exhibit'
import { Exhibit } from '../../../types/exhibit'
import Breadcrumbs from '../../../components/breadcrums.vue'

@Component({
  auth: false,
  layout: 'admin',
  components: { Breadcrumbs },
})
export default class Signin extends Vue {
  exhibits: Exhibit[] = []
  headers = [
    {
      text: 'id',
      align: 'start',
      sortable: false,
      value: 'id',
    },
    { text: 'groupID', value: 'groupId' },
    { text: 'title', value: 'title' },
    { text: 'genre', value: 'genre' },
    { text: 'description', value: 'description' },
    { text: 'thumbnail', value: 'thumbnail' },
  ]

  breadcrum = [
    {
      text: 'ダッシュボード',
      disabled: false,
      href: '/admin',
    },
    {
      text: '作品一覧',
      disabled: true,
      href: '/admin/exhibits',
    },
  ]

  async created() {
    const exhibits = await ExhibitApi.getExhibits()
    this.exhibits = exhibits
  }

  clickRow(row: any) {
    this.$router.push({ path: `/admin/exhibits/${row.id}` })
  }
}
</script>

<style lang="scss"></style>
