<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="form.title"
      prepend-icon="mdi-format-title"
      :rules="rules.title"
      class="mt-7"
      label="作品タイトル"
      outlined
      required
    ></v-text-field>
    <v-text-field
      v-model="form.description"
      prepend-icon="mdi-pencil-box"
      :rules="rules.description"
      class="mt-7"
      label="説明"
      outlined
      required
    ></v-text-field>
    <v-select
      v-model="form.genre"
      class="mt-7"
      prepend-icon="mdi-form-select"
      :rules="rules.genre"
      :items="items"
      label="ジャンル"
      outlined
    ></v-select>
    <v-file-input
      v-model="form.thumbnailImage"
      class="mt-7"
      :rules="rules.thumbnailImage"
      color="deep-purple accent-4"
      accept="image/png, image/jpeg, image/bmp"
      label="サムネール"
      prepend-icon="mdi-camera"
      placeholder="サムネール"
      outlined
      required
      :show-size="1000"
    ></v-file-input>
    <v-file-input
      v-model="form.presentationImage"
      class="mt-7"
      :rules="rules.presentationImage"
      color="deep-purple accent-4"
      accept="image/png, image/jpeg, image/bmp"
      label="プレゼンデータ"
      prepend-icon="mdi-camera"
      placeholder="プレゼンデータ"
      outlined
      required
      :show-size="1000"
    ></v-file-input>
    <v-btn block large color="primary" :disabled="!valid" @click="onSubmit"
      >登録</v-btn
    >
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
// cloudinaryに画像をアップロードする関数は、このファイル限定で使用するとは限らないため、別の場所に切り出した
import { uploadImageCloudinary } from '../../utils/functions'

@Component
export default class ExhibitsPost extends Vue {
  items = ['ゲーム', '音楽', '映像', 'IT']
  valid = false
  form = {
    title: '',
    description: '',
    genre: '',
    thumbnailImage: (null as unknown) as File,
    presentationImage: (null as unknown) as File,
  }

  rules = {
    title: [(v: string) => !!v || 'タイトルは必須です'],
    description: [(v: string) => !!v || '説明文は必須です'],
    genre: [(v: string) => !!v || 'ジャンルは必須です'],
    thumbnailImage: [(v: string) => !!v || 'サムネイル画像は必須です'],
    presentationImage: [(v: string) => !!v || 'プレゼンデータ画像は必須です'],
  }

  async onSubmit() {
    let thumbnailImageUrl: string
    let presentationImageUrl: string

    // cloudinaryにサムネイルとプレゼン画像のアップロードをする
    // api側には、cloudinaryから返却されたimageのurlを渡す形となる
    if (this.form.thumbnailImage && this.form.presentationImage) {
      thumbnailImageUrl = await uploadImageCloudinary(
        this.$axios,
        this.form.thumbnailImage
      )
      presentationImageUrl = await uploadImageCloudinary(
        this.$axios,
        this.form.presentationImage
      )
      console.log('thumnailImageUrl', thumbnailImageUrl)
      console.log('presentationImageUrl', presentationImageUrl)
    }
  }
}
</script>
