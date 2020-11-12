<template>
  <v-dialog v-model="dialog" max-width="700px">
    <v-card>
      <v-card-title class="display-1 font-weight-bold pt-8">
        作品登録
      </v-card-title>
      <v-form ref="form" v-model="valid" class="ml-8 mr-8 pb-9">
        <v-textarea
          v-model="form.title"
          class="pt-6 pb-3"
          :rules="rules.title"
          label="作品タイトル"
          placeholder="作品について説明するタイトルを追加しましょう"
          auto-grow
          rows="1"
          row-height="20"
          counter="20"
          outlined
        ></v-textarea>
        <v-textarea
          v-model="form.description"
          :rules="rules.description"
          label="説明"
          placeholder="来場者に向けて作品の内容を紹介しましょう"
          class="pb-3"
          counter="40"
          auto-grow
          rows="2"
          row-height="40"
          outlined
        ></v-textarea>
        <v-select
          v-model="form.genre"
          class="pb-3"
          :rules="rules.genre"
          :items="items"
          label="ジャンル"
          placeholder="選択"
          outlined
        ></v-select>
        <p>
          <span class="font-weight-bold">サムネイル<br /></span>
          作品の内容がわかる画像をアップロードします。来場者の目を引くサムネイルにしましょう。
        </p>
        <v-file-input
          v-model="form.thumbnailImage"
          class="pb-3"
          :rules="rules.thumbnailImage"
          color="deep-purple accent-4"
          accept="image/png, image/jpeg, image/bmp"
          label="サムネイルをアップロード"
          prepend-icon="mdi-camera"
          outlined
          required
          :show-size="1000"
        ></v-file-input>
        <p>
          <span class="font-weight-bold">プレゼン資料の画像<br /></span>
          作品のプレゼン資料をアップロードしましょう。
        </p>
        <v-file-input
          v-model="form.presentationImage"
          class="pb-5"
          :rules="rules.presentationImage"
          color="deep-purple accent-4"
          accept="image/png, image/jpeg, image/bmp"
          label="プレゼン資料をアップロード"
          outlined
          required
          :show-size="1000"
        ></v-file-input>
        <v-btn
          block
          large
          class="white--text"
          color="deep-purple darken-4"
          :disabled="!valid"
          @click="onSubmit"
          >作品を登録する</v-btn
        >
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
// cloudinaryに画像をアップロードする関数は、このファイル限定で使用するとは限らないため、別の場所に切り出した
import { uploadImageCloudinary } from '../../../utils/functions'
import ExhibitApi from '../../../plugins/axios/modules/exhibit'

@Component
export default class CreateExhibitDialog extends Vue {
  // モーダルの開閉のために必要なprops
  @Prop({ required: true }) value: boolean = false

  items = ['game', 'music', 'movie', 'it']
  valid = false
  form = {
    title: '',
    description: '',
    genre: '',
    thumbnailImage: (null as unknown) as File,
    presentationImage: (null as unknown) as File,
  }

  setdata = {
    title: '',
    description: '',
    thumbnail: '',
    genre: '',
    presentationImage: '',
  }

  rules = {
    title: [(v: string) => !!v || 'タイトルは必須です'],
    description: [(v: string) => !!v || '説明文は必須です'],
    genre: [(v: string) => !!v || 'ジャンルは必須です'],
    thumbnailImage: [(v: string) => !!v || 'サムネイル画像は必須です'],
    presentationImage: [(v: string) => !!v || 'プレゼンデータ画像は必須です'],
  }

  async onSubmit() {
    // let thumbnailImageUrl: string
    // let presentationImageUrl: string

    // cloudinaryにサムネイルとプレゼン画像のアップロードをする
    // api側には、cloudinaryから返却されたimageのurlを渡す形となる
    // if (this.form.thumbnailImage && this.form.presentationImage) {
    //   thumbnailImageUrl = await uploadImageCloudinary(
    //     this.$axios,
    //     this.form.thumbnailImage
    //   )
    //   presentationImageUrl = await uploadImageCloudinary(
    //     this.$axios,
    //     this.form.presentationImage
    //   )
    //   console.log('thumnailImageUrl', thumbnailImageUrl)
    //   console.log('presentationImageUrl', presentationImageUrl)
    // }

    // ダミーURL
    const thumbnailImageUrlDummy =
      'https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg'
    const presentationImageUrlDummy =
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwired.jp%2F2018%2F01%2F18%2Fgorillas-and-google-photos%2F&psig=AOvVaw0q-C6ITVrxJwXa3kbTHooK&ust=1605000065833000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDd6aiR9ewCFQAAAAAdAAAAABAD'

    // if (thumbnailImageUrl && presentationImageUrl) {
    this.setdata.title = this.form.title
    this.setdata.description = this.form.description
    this.setdata.genre = this.form.genre
    this.setdata.thumbnail = thumbnailImageUrlDummy
    this.setdata.presentationImage = presentationImageUrlDummy

    console.log('setdata', this.setdata)
    const response = await ExhibitApi.createExhibit(this.setdata)
    console.log('responseCreateExhibit', response)
    // }
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
