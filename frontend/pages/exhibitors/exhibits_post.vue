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
      v-model="form.thumbnail"
      class="mt-7"
      :rules="rules.thumbnail"
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
    <v-btn block large color="primary" :disabled="false" @click="onSubmit"
      >登録</v-btn
    >
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      genreItems: ['ゲーム', '音楽', '映像', 'IT'],
      valid: false,
      form: {
        title: '',
        description: '',
        genre: '',
        thumbnail: (null as unknown) as File,
        presentationImage: (null as unknown) as File,
      },
      rules: {
        title: [
          (v: string) => !!v || 'タイトルは必須です',
          // (v: string) =>
          //   (v && v.length <= 20) || 'グループ名は20文字以内で入力してください',
        ],
        description: [(v: string) => !!v || '説明文は必須です'],
        genre: [(v: string) => !!v || 'ジャンルは必須です'],
        thumbnail: [(v: string) => !!v || 'サムネイル画像は必須です'],
        presentationImage: [
          (v: string) => !!v || 'プレゼンデータ画像は必須です',
        ],
      },
    }
  },
  methods: {
    async onSubmit() {
      // cloudinaryに画像のアップロードをする
      if (this.form.thumbnail) {
        const data = new FormData()
        data.append('file', this.form.thumbnailImage)
        // FIXME: nuxt buildの時に、環境変数の読み込みが出来ないため直書きしている
        data.append('upload_preset', 'himawari')
        data.append('cloud_name', 'db32y726v')

        this.$axios.setBaseURL(
          `https://api.cloudinary.com/v1_1/${'db32y726v'}/`
        )
        const res = await this.$axios.$post('/image/upload', data)
        console.log(res)
      }
    },
  },
})
</script>
