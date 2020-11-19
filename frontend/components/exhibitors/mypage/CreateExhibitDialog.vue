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
          color="deep-purple darken-4"
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
          color="deep-purple darken-4"
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
          color="deep-purple darken-4"
          outlined
        ></v-select>
        <p>
          <span class="font-weight-bold">サムネイル<br /></span>
          作品の内容がわかる画像をアップロードします。来場者の目を引くサムネイルにしましょう。
        </p>
        <v-card class="ml-8 mx-auto my-4" max-width="300">
          <v-img
            v-if="uploadThumbnailImageUrl"
            :src="uploadThumbnailImageUrl"
          ></v-img>
        </v-card>
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
          dense
          @change="onThumbnailImagePicked"
        ></v-file-input>
        <p>
          <span class="font-weight-bold">プレゼン資料の画像<br /></span>
          作品のプレゼン資料をアップロードしましょう。
        </p>
        <v-card class="ml-8 mx-auto my-4" max-width="300">
          <v-img
            v-if="uploadPresentationImageUrl"
            :src="uploadPresentationImageUrl"
          ></v-img>
        </v-card>
        <v-file-input
          v-model="form.presentationImage"
          class="pb-5"
          :rules="rules.presentationImage"
          color="deep-purple accent-4"
          accept="image/png, image/jpeg, image/bmp"
          label="プレゼン資料をアップロード"
          outlined
          required
          dense
          :show-size="1000"
          @change="onPresentationImagePicked"
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
import ProfileApi from '../../../plugins/axios/modules/profile'

@Component
export default class CreateExhibitDialog extends Vue {
  // モーダルの開閉のために必要なprops
  @Prop({ required: true }) value: boolean = false

  items = ['game', 'music', 'movie', 'it']
  valid = false
  uploadThumbnailImageUrl = ''
  uploadPresentationImageUrl = ''

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

  created() {
    ProfileApi.getProfileExhibits()
      .then((response: any) => {
        this.form.title = response.title
        this.form.description = response.description
        this.form.genre = response.genre

        this.uploadThumbnailImageUrl = response.thumbnail
        this.uploadPresentationImageUrl = response.presentationImage
      })
      .catch(() => {
        this.$toast.error('作品登録の際にエラーが発生しました')
        this.dialog = false
      })
  }

  async onSubmit() {
    // FIXME: cloudinaryアップロードが出来ないので、ダミーURLで対応する

    // cloudinaryにサムネイルとプレゼン画像のアップロードをする
    // api側には、cloudinaryから返却されたimageのurlを渡す形となる
    const thumbnailImageUrl = await uploadImageCloudinary(
      this.$axios,
      this.form.thumbnailImage
    )
    const presentationImageUrl = await uploadImageCloudinary(
      this.$axios,
      this.form.presentationImage
    )

    ExhibitApi.createExhibit({
      ...this.form,
      thumbnail: thumbnailImageUrl,
      presentationImage: presentationImageUrl,
    })
      .then(() => {
        this.$toast.success('作品を登録しました')
        this.dialog = false
      })
      .catch(() => {
        this.$toast.error('作品登録の際にエラーが発生しました')
        this.dialog = false
      })
  }

  // thumbnailImageのプレビュー
  onThumbnailImagePicked(file: File) {
    if (file !== undefined && file !== null) {
      if (file.name.lastIndexOf('.') <= 0) {
        return
      }
      const fr = new FileReader()
      fr.readAsDataURL(file)
      fr.addEventListener('load', () => {
        if (typeof fr.result === 'string') {
          this.uploadThumbnailImageUrl = fr.result
        }
      })
    } else {
      this.uploadThumbnailImageUrl = ''
    }
  }

  // presentationImageのプレビュー
  onPresentationImagePicked(file: File) {
    if (file !== undefined && file !== null) {
      if (file.name.lastIndexOf('.') <= 0) {
        return
      }
      const fr = new FileReader()
      fr.readAsDataURL(file)
      fr.addEventListener('load', () => {
        if (typeof fr.result === 'string') {
          this.uploadPresentationImageUrl = fr.result
        }
      })
    } else {
      this.uploadPresentationImageUrl = ''
    }
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
