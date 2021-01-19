<template>
  <v-col>
    <v-row align="center" justify="center"> 操作説明やで </v-row>
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
