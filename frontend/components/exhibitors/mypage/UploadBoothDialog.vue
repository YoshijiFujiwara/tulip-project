<template>
  <v-dialog v-model="dialog" max-width="700px">
    <v-card>
      <v-card-title class="display-1 font-weight-bold pt-8">
        ブース登録
      </v-card-title>
      <v-card-subtitle class="mt-2">展示場所の選択</v-card-subtitle>
      <v-form ref="form" v-model="valid" class="ml-8 mr-8 pb-9">
        <v-img :src="require('@/assets/stage.png')"></v-img>
        <v-select
          v-model="form.booth"
          class="pb-3"
          :rules="rules.booth"
          :items="items"
          label="ブース番号"
          placeholder="選択"
          color="deep-purple darken-4"
          outlined
        ></v-select>
        <v-btn
          block
          large
          class="white--text"
          color="deep-purple darken-4"
          :disabled="!valid || isLoading"
          @click="onSubmit"
        >
          ブースを登録する
        </v-btn>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class CreateExhibitDialog extends Vue {
  // モーダルの開閉のために必要なprops
  @Prop({ required: true }) value: boolean = false

  isLoading: boolean = false // ローディング判定

  items = ['01', '02', '03', '04']
  valid = false

  form = {
    booth: '',
  }

  rules = {
    booth: [(v: string) => !!v || 'ブースは必須です'],
  }

  onSubmit() {
    this.isLoading = true
    alert('ブース登録しましたはず')
  }

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
