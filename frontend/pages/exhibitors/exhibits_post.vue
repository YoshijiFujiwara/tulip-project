<template>
  <v-form ref="form" v-model="valid">
    <v-card-title class="headline"> 作品登録 </v-card-title>
    <v-textarea
      v-model="title"
      class="pt-7"
      :rules="rules"
      label="作品タイトル"
      placeholder="作品について説明するタイトルを追加しましょう"
      auto-grow
      rows="1"
      row-height="20"
      counter="20"
      filled
      outlined
    ></v-textarea>
    <v-textarea
      v-model="description"
      :rules="rules"
      label="説明"
      placeholder="来場者に向けて作品の内容を紹介しましょう"
      counter="40"
      auto-grow
      rows="2"
      row-height="40"
      filled
    ></v-textarea>
    <v-select
      v-model="form.genre"
      class="mt-7"
      prepend-icon="mdi-form-select"
      :rules="rules.genre"
      :items="items"
      label="ジャンル"
      placeholder="選択"
      outlined
    ></v-select>
    <p>サムネイル</p>
    <p>
      作品の内容がわかる画像をアップロードします。来場者の目を引くサムネイルにしましょう。
    </p>
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
      prepend-icon="mdi-file"
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
// cloudinaryに画像をアップロードする関数は、このファイル限定で使用するとは限らないため、別の場所に切り出した
import { uploadImageCloudinary } from '../../utils/functions'

export default Vue.extend({
  data() {
    return {
      items: ['ゲーム', '音楽', '映像', 'IT'],
      valid: false,
      form: {
        title: '',
        description: '',
        genre: '',
        thumbnailImage: (null as unknown) as File,
        presentationImage: (null as unknown) as File,
      },
      rules: {
        title: [(v: string) => !!v || 'タイトルは必須です'],
        description: [(v: string) => !!v || '説明文は必須です'],
        genre: [(v: string) => !!v || 'ジャンルは必須です'],
        thumbnailImage: [(v: string) => !!v || 'サムネイル画像は必須です'],
        presentationImage: [
          (v: string) => !!v || 'プレゼンデータ画像は必須です',
        ],
      },
    }
  },
  methods: {
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
    },
  },
})
</script>
