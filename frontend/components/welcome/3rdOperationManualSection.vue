<template>
  <v-col>
    <v-row style="font-size: 45px" justify="center">
      本サービスの楽しみ方
    </v-row>
    <v-row justify="center">
      <v-col cols="2" align-center>
        <div style="border: solid 2px #7769d1"></div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="text-h5 mt-4">
      ※Chrome推奨
    </v-row>
    <v-col>
      <FirstBasic />
      <SecondLobby />
      <ThirdBooth />
    </v-col>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FirstBasic from '@/components/welcome/operation_manual/1stBasic.vue'
import SecondLobby from '@/components/welcome/operation_manual/2ndLobby.vue'
import ThirdBooth from '@/components/welcome/operation_manual/3rdBooth.vue'

@Component({
  components: {
    FirstBasic,
    SecondLobby,
    ThirdBooth,
  },
})
export default class Section extends Vue {}
</script>
