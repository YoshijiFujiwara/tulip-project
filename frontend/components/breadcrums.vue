<template>
  <div>
    <v-breadcrumbs :items="itemss">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          {{ item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Sampleyade extends Vue {
  // props群
  @Prop({ required: true }) readonly itemss!: any

  // dataに当たるもの
  //ultimateMessage: string = '俺最強'
}
</script>
