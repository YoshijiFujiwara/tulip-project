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
    <v-btn block large color="primary" class="mt-10" @click="onSubmitTest"
      >ダミー</v-btn
    >
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
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

  async onSubmitTest() {
    const response = await this.$axios.post(
      '/exhibits',
      {
        title: 'テストラゴン',
        description:
          '次世代型の文化祭をVRで体験できるサービスです。オンラインでもリアルな交流を体験出来ます！',
        thumbnail: 'https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg',
        genre: 'it',
        presentationImage:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwired.jp%2F2018%2F01%2F18%2Fgorillas-and-google-photos%2F&psig=AOvVaw0q-C6ITVrxJwXa3kbTHooK&ust=1605000065833000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDd6aiR9ewCFQAAAAAdAAAAABAD',
      },
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50TnVtYmVyIjoib2hzNzAwMDEiLCJpYXQiOjE2MDQ5MjU5MzIsImV4cCI6MTYwNDkyOTUzMn0._ruVgeN9EfQ4iddziRh8N8_uTwAnjHQHKpHZ3vznX8Y',
        },
      }
    )
    console.log(response)
  }
}
</script>
