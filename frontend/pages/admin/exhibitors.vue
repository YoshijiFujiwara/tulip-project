<template>
  <div>
    <h3>99人中9人が会場にログインしています</h3>
    <h3>出席中｜未出席</h3>
    <v-data-table
      v-show="!deleteDialog"
      :headers="headers"
      :items="groups"
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

@Component({
  auth: false,
  layout: 'admin',
})
export default class Signin extends Vue {
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: '展示者名', value: 'name' },
        { text: '所属グループ名', value: 'groupname' },
        { text: '操作', value: 'actions', sortable: false },
      ],
      groups: [
        {
          id: '1',
          name: '高田　じゅんじ',
          groupname: 'チューリップ組',
          icon: '<v-icon color="white">mdi-contacts</v-icon>',
        },
        {
          id: '2',
          name: '博多　野塩',
          groupname: 'チューリップ組',
        },
        {
          id: '3',
          name: '鬼滅　丹次郎',
          groupname: 'チューリップ組',
        },
        {
          id: '4',
          name: 'ガンダム　ディス',
          groupname: '夜王国',
        },
        {
          id: '5',
          name: '松本　樹',
          groupname: '夜王国',
        },
        {
          id: '6',
          name: '東　幸太郎',
          groupname: '夜王国',
        },
        {
          id: '7',
          name: '竈門　清',
          groupname: '鬼滅組',
        },
        {
          id: '8',
          name: '不死川　実美',
          groupname: '鬼滅組',
        },
        {
          id: '9',
          name: '不知火　洋子',
          groupname: '鬼滅組',
        },
        {
          id: '10',
          name: '煉獄　恭樹郎',
          groupname: '鬼滅組',
        },
      ],
    }
  }
}
</script>

<style lang="scss"></style>
