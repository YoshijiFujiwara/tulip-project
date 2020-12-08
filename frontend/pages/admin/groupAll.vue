<template>
  <v-data-table
    :headers="headers"
    :items="groups"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
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
        {
          text: 'groupID',
          align: 'start',
          sortable: false,
          value: 'groupid',
        },
        { text: 'Name', value: 'name' },
      ],
      groups: [
        {
          groupid: '1',
          name: '高田　じゅんじ',
        },
        {
          groupid: '1',
          name: '博多　野塩',
        },
        {
          groupid: '1',
          name: '鬼滅　丹次郎',
        },
        {
          groupid: '2',
          name: 'ガンダム　ディス',
        },
        {
          groupid: '2',
          name: '松本　樹',
        },
        {
          groupid: '2',
          name: '東　幸太郎',
        },
        {
          groupid: '3',
          name: '竈門　清',
        },
        {
          groupid: '3',
          name: '不死川　実美',
        },
        {
          groupid: '3',
          name: '不知火　洋子',
        },
        {
          groupid: '3',
          name: '煉獄　恭樹郎',
        },
      ],
    }
  }
}
</script>

<style lang="scss"></style>
