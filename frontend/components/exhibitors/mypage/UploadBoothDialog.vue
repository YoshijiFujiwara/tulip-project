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
          v-model="form.positionNumber"
          class="pb-3"
          :rules="rules.positionNumber"
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
import BoothsApi from '../../../plugins/axios/modules/booth'
import ExhibitApi from '../../../plugins/axios/modules/exhibit'
import { Exhibit } from '../../../types/exhibit'

@Component
export default class CreateExhibitDialog extends Vue {
  // モーダルの開閉のために必要なprops
  @Prop({ required: true }) value: boolean = false

  isLoading: boolean = false // ローディング判定

  items: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
  valid = false

  form = {
    positionNumber: null,
  }

  rules = {
    positionNumber: [(v: string) => !!v || 'ブースは必須です'],
  }

  created() {
    ExhibitApi.getExhibits()
      .then((exhibits: Exhibit[]) => {
        // すでに登録されているpositionNumberの配列
        const registeredPositionNumbers: number[] = exhibits.map(
          (exhibit: Exhibit) => {
            return exhibit.booth ? exhibit.booth.positionNumber : 0
          }
        )
        this.items = this.items.filter(
          (item: number) => !registeredPositionNumbers.includes(item)
        )
      })
      .catch(() => {
        this.$toast.error('作品登録の際にエラーが発生しました')
        this.dialog = false
      })
  }

  onSubmit() {
    this.isLoading = true
    BoothsApi.postBooth(this.form.positionNumber!)
      .then(() => {
        this.$toast.success('ブースの登録が完了しました')
      })
      .catch((res) => {
        this.$toast.error(res.data.message)
      })

    this.dialog = false
    this.isLoading = false
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
