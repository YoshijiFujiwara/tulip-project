<template>
  <v-dialog v-model="dialog" max-width="700px">
    <v-card>
      <v-card-title class="display-1 font-weight-bold pt-8">{{ isUpdateMode ? '作品情報を更新' : '作品登録' }}</v-card-title>
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
          <span class="font-weight-bold">
            サムネイル
            <br />
          </span>
          作品の内容がわかる画像をアップロードします。来場者の目を引くサムネイルにしましょう。
        </p>
        <v-card class="ml-8 mx-auto my-4" max-width="300">
          <v-img v-if="uploadThumbnailImageUrl" :src="uploadThumbnailImageUrl"></v-img>
        </v-card>
        <v-file-input
          v-model="form.thumbnailImage"
          class="pb-3"
          :rules="isUpdateMode ? undefined : rules.thumbnailImage"
          color="deep-purple accent-4"
          accept="image/png, image/jpeg, image/bmp"
          label="サムネイルをアップロード"
          prepend-icon="mdi-camera"
          outlined
          required
          show-size
          dense
          @change="onThumbnailImagePicked"
        ></v-file-input>
        <p>
          <span class="font-weight-bold">
            プレゼン資料の画像
            <br />
          </span>
          作品のプレゼン資料をアップロードしましょう。
        </p>
        <v-card class="ml-8 mx-auto my-4" max-width="300">
          <v-img v-if="uploadPresentationImageUrls" :src="uploadPresentationImageUrls"></v-img>
        </v-card>
        <v-file-input
          v-model="form.presentationImages"
          class="pb-5"
          :rules="isUpdateMode ? undefined : rules.presentationImage"
          color="deep-purple accent-4"
          accept="image/png, image/jpeg, image/bmp"
          label="プレゼン資料をアップロード"
          outlined
          multiple
          small-chips
          required
          dense
          show-size
          @change="onPresentationImagePicked"
        ></v-file-input>
        <p>
          <span class="font-weight-bold">
            デモ動画
            <br />
          </span>
          デモ動画をアップロードしましょう。
        </p>
        <video
          v-if="uploadDemoVideoUrl"
          controls
          width="480"
          class="ml-8 mx-auto my-4"
          height="270"
        >
          <source :src="uploadDemoVideoUrl" />このブラウザではビデオ表示がサポートされていません
        </video>
        <v-file-input
          v-model="form.demoVideo"
          color="deep-purple accent-4"
          class="pb-5"
          accept="video/*"
          show-size
          outlined
          required
          dense
          label="デモ動画をアップロード"
          prepend-icon="mdi-video"
          @change="onVideoPicked"
        ></v-file-input>
        <p>
          <span class="font-weight-bold">
            3Dモデル
            <br />
          </span>
          表示する3Dモデルがある場合はアップロードしましょう。
        </p>
        <v-file-input
          v-model="form.modelData"
          class="pb-3"
          color="deep-purple accent-4"
          accept=".obj, .gltf, .glb"
          label="3Dモデルをアップロード"
          prepend-icon="mdi-video-3d"
          outlined
          required
          show-size
          dense
        ></v-file-input>
        <v-btn
          block
          large
          class="white--text"
          color="deep-purple darken-4"
          :disabled="!valid || isLoading"
          @click="onSubmit"
        >{{ isUpdateMode ? '作品情報を更新する' : '作品を登録する' }}</v-btn>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
// cloudinaryに画像をアップロードする関数は、このファイル限定で使用するとは限らないため、別の場所に切り出した
import {
  uploadImageCloudinary,
  uploadVideoCloudinary,
} from '../../../utils/functions'
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
  uploadPresentationImageUrls:string[] = []
  uploadDemoVideoUrl: string | null = ''
  exhibitId: number | null = null // 作品の更新時に用いるID

  form = {
    title: '',
    description: '',
    genre: '',
    thumbnailImage: (null as unknown) as File | null,
    presentationImages: [] as File[],
    demoVideo: (null as unknown) as File | null,
    modelData: (null as unknown) as File | null,
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
        this.uploadPresentationImageUrls = exhibit.presentationImages
        this.uploadDemoVideoUrl = exhibit.demo || null // デモ動画は登録されないこともある
        // TODO: デモ動画のURLがget出来たら、追加する

        this.exhibitId = exhibit.id
      })
      .catch(() => {
        this.$toast.error('作品登録の際にエラーが発生しました')
        this.dialog = false
      })
  }

  async onSubmit() {
    this.isLoading = true
    console.log(this.form.presentationImages)
    if (this.isUpdateMode) {
      await this.updateExhibit()
    } else {
      await this.createExhibit()
    }

    this.dialog = false
    this.isLoading = false
  }

  // 作品の登録リクエスト
  async createExhibit() {
    let demoVideoUrl: string | null = null

    // cloudinaryにサムネイルとプレゼン画像のアップロードをする
    // api側には、cloudinaryから返却されたimageのurlを渡す形となる
    const thumbnailImageUrl = await uploadImageCloudinary(
      this.$axios,
      this.form.thumbnailImage!
    )
    const PresentationImageUrls = ['']
    this.form.presentationImages.forEach(async (presenImg, index) => {
      PresentationImageUrls[index] = await uploadImageCloudinary(
        this.$axios,
        presenImg
      )
    })

    // デモ動画に関しては、必須ではないため
    if (this.form.demoVideo) {
      demoVideoUrl = await uploadVideoCloudinary(
        this.$axios,
        this.form.demoVideo
      )
    }

    ExhibitApi.createExhibit({
      ...this.form,
      thumbnail: thumbnailImageUrl,
      presentationImages: PresentationImageUrls,
      demo: demoVideoUrl || undefined,
    })
      .then((res) => {
        this.exhibitId = res.id
        this.form.thumbnailImage = null
        this.form.presentationImages = []
        this.$toast.success('作品を登録しました')
      })
      .catch(() => {
        this.$toast.error('作品登録の際にエラーが発生しました')
      })
  }

  // 作品の更新リクエスト
  async updateExhibit() {
    // cloudinaryにサムネイルとプレゼン画像のアップロードをする
    // api側には、cloudinaryから返却されたimageのurlを渡す形となる
    let thumbnailImageUrl: string | null = null
    let PresentationImageUrls:string[]=[]
    let demoVideoUrl: string | null = null

    if (this.form.thumbnailImage) {
      thumbnailImageUrl = await uploadImageCloudinary(
        this.$axios,
        this.form.thumbnailImage
      )
    }
    if (this.form.presentationImages) {
      this.form.presentationImages.forEach(async (presenImg, index) => {
      PresentationImageUrls[index] = await uploadImageCloudinary(
        this.$axios,
        presenImg
      )
    })
    }
    if (this.form.demoVideo) {
      demoVideoUrl = await uploadVideoCloudinary(
        this.$axios,
        this.form.demoVideo
      )
    }

    ExhibitApi.updateExhibit(this.exhibitId!, {
      ...this.form,
      thumbnail: thumbnailImageUrl || this.uploadThumbnailImageUrl,
      presentationImages:
        PresentationImageUrls.length ? PresentationImageUrls : this.uploadPresentationImageUrls,
      demo: demoVideoUrl || this.uploadDemoVideoUrl,
    })
      .then(() => {
        this.$toast.success('作品を更新しました')
      })
      .catch(() => {
        this.$toast.error('作品更新の際にエラーが発生しました')
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
  onPresentationImagePicked(files: File[]) {
    if (files[0] !== undefined && files[0] !== null) {
      if (files[0].name.lastIndexOf('.') <= 0) {
        return
      }
      const fr = new FileReader()
      fr.readAsDataURL(files[0])
      fr.addEventListener('load', () => {
        if (typeof fr.result === 'string') {
          // this.uploadPresentationImageUrl = fr.result
        }
      })
    } else {
      // this.uploadPresentationImageUrl = ''
    }
  }

  // デモ動画のプレビュー
  onVideoPicked(file: File) {
    if (file !== undefined && file !== null) {
      if (file.name.lastIndexOf('.') <= 0) {
        return
      }
      this.uploadDemoVideoUrl = ''
      const fr = new FileReader()
      fr.readAsDataURL(file)
      fr.addEventListener('load', () => {
        if (typeof fr.result === 'string') {
          this.uploadDemoVideoUrl = fr.result
        }
      })
    } else {
      this.uploadDemoVideoUrl = ''
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
