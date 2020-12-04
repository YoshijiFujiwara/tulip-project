<template>
  <v-dialog v-model="dialog" max-width="700px">
    <v-card> あああ </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
// cloudinaryに画像をアップロードする関数は、このファイル限定で使用するとは限らないため、別の場所に切り出した
import { uploadImageCloudinary } from '../../../utils/functions'
import ExhibitApi from '../../../plugins/axios/modules/exhibit'
import ProfileApi from '../../../plugins/axios/modules/profile'
import { Exhibit } from '../../../types/exhibit'

@Component
export default class CreateExhibitDialog extends Vue {
  // モーダルの開閉のために必要なprops
  @Prop({ required: true }) value: boolean = false

  isLoading: boolean = false // ローディング判定

  items = ['game', 'music', 'movie', 'it']
  valid = false
  uploadThumbnailImageUrl = ''
  uploadPresentationImageUrl = ''
  exhibitId: number | null = null // 作品の更新時に用いるID

  form = {
    title: '',
    description: '',
    genre: '',
    thumbnailImage: (null as unknown) as File | null,
    presentationImage: (null as unknown) as File | null,
  }

  rules = {
    title: [(v: string) => !!v || 'タイトルは必須です'],
    description: [(v: string) => !!v || '説明文は必須です'],
    genre: [(v: string) => !!v || 'ジャンルは必須です'],
    thumbnailImage: [(v: string) => !!v || 'サムネイル画像は必須です'],
    presentationImage: [(v: string) => !!v || 'プレゼンデータ画像は必須です'],
  }

  // exhibitIdが入っていれば、更新モードとする
  get isUpdateMode() {
    return !!this.exhibitId
  }

  created() {
    // 自分が登録している作品情報を取得する
    ProfileApi.getProfileExhibits()
      .then((exhibit: Exhibit) => {
        this.form.title = exhibit.title
        this.form.description = exhibit.description
        this.form.genre = exhibit.genre
        this.uploadThumbnailImageUrl = exhibit.thumbnail
        this.uploadPresentationImageUrl = exhibit.presentationImage
        this.exhibitId = exhibit.id
      })
      .catch(() => {
        this.$toast.error('作品登録の際にエラーが発生しました')
        this.dialog = false
      })
  }

  async onSubmit() {
    this.isLoading = true

    if (this.isUpdateMode) {
      // cloudinaryにサムネイルとプレゼン画像のアップロードをする
      // api側には、cloudinaryから返却されたimageのurlを渡す形となる
      let thumbnailImageUrl: string | null = null
      let presentationImageUrl: string | null = null

      if (this.form.thumbnailImage) {
        thumbnailImageUrl = await uploadImageCloudinary(
          this.$axios,
          this.form.thumbnailImage
        )
      }
      if (this.form.presentationImage) {
        presentationImageUrl = await uploadImageCloudinary(
          this.$axios,
          this.form.presentationImage
        )
      }

      ExhibitApi.updateExhibit(this.exhibitId!, {
        ...this.form,
        thumbnail: thumbnailImageUrl || this.uploadThumbnailImageUrl,
        presentationImage:
          presentationImageUrl || this.uploadPresentationImageUrl,
      })
        .then(() => {
          this.$toast.success('作品を更新しました')
        })
        .catch(() => {
          this.$toast.error('作品更新の際にエラーが発生しました')
        })
    } else {
      // cloudinaryにサムネイルとプレゼン画像のアップロードをする
      // api側には、cloudinaryから返却されたimageのurlを渡す形となる
      const thumbnailImageUrl = await uploadImageCloudinary(
        this.$axios,
        this.form.thumbnailImage!
      )
      const presentationImageUrl = await uploadImageCloudinary(
        this.$axios,
        this.form.presentationImage!
      )
      ExhibitApi.createExhibit({
        ...this.form,
        thumbnail: thumbnailImageUrl,
        presentationImage: presentationImageUrl,
      })
        .then((res) => {
          this.exhibitId = res.id
          this.form.thumbnailImage = null
          this.form.presentationImage = null
          this.$toast.success('作品を登録しました')
        })
        .catch(() => {
          this.$toast.error('作品登録の際にエラーが発生しました')
        })
    }

    this.dialog = false
    this.isLoading = false
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
