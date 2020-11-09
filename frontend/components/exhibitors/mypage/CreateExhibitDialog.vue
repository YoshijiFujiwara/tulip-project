<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card> hogehoge </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class CreateExhibitDialog extends Vue {
  // モーダルの開閉のために必要なprops
  @Prop({ required: true }) value: boolean = false

  // モーダルの開閉のために必要
  get dialog(): boolean {
    return this.value
  }

  // モーダルの開閉のために必要
  set dialog(dialog: boolean) {
    this.$emit('input', dialog)
  }
}
</script>
