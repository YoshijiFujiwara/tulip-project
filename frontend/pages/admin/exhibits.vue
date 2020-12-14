<template>
  <div>
    <h1>作品一覧ページです</h1>
    <v-data-table
      :headers="headers"
      :items="exhibits"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ExhibitApi from '../../plugins/axios/modules/exhibit'
import { Exhibit } from '../../types/exhibit'

@Component({
  auth: false,
  layout: 'admin',
})
export default class Signin extends Vue {
  exhibits: Exhibit[] = []
  headers = [
    {
      text: 'id',
      align: 'start',
      sortable: false,
      value: 'groupId',
    },
    { text: 'groupID', value: 'groupId' },
    { text: 'title', value: 'title' },
    { text: 'genre', value: 'genre' },
    { text: 'description', value: 'description' },
    { text: 'presentationImage', value: 'presentationImage' },
    { text: 'thumbnail', value: 'thumbnail' },
  ]

  async created() {
    const exhibits = await ExhibitApi.getExhibits()
    this.exhibits = exhibits
  }
}
</script>

<style lang="scss"></style>
