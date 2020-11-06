<template>
  <v-form ref="form">
    <v-text-field
      prepend-icon="mdi-format-title"
      class="mt-7"
      label="作品タイトル"
      outlined
      required
    ></v-text-field>
    <v-text-field
      prepend-icon="mdi-pencil-box"
      class="mt-7"
      label="説明"
      outlined
      required
    ></v-text-field>

    <v-select
      class="mt-7"
      prepend-icon="mdi-form-select"
      :items="items"
      label="ジャンル"
      outlined
    ></v-select>

    <v-file-input
      v-model="files.image"
      class="mt-7"
      color="deep-purple accent-4"
      counter
      accept="image/png, image/jpeg, image/bmp"
      label="サムネール"
      prepend-icon="mdi-camera"
      placeholder="サムネール"
      outlined
      :show-size="1000"
    >
      <template v-slot:selection="{ index, text }">
        <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
          {{ text }}
        </v-chip>

        <span
          v-else-if="index === 2"
          class="overline grey--text text--darken-3 mx-2"
        >
          +{{ files.image.length - 2 }} File(s)
        </span>
      </template>
    </v-file-input>

    <v-file-input
      v-model="files.image"
      class="mt-7"
      color="deep-purple accent-4"
      counter
      accept="image/png, image/jpeg, image/bmp"
      label="プレゼンデータ"
      prepend-icon="mdi-camera"
      placeholder="プレゼンデータ"
      outlined
      :show-size="1000"
    >
      <template v-slot:selection="{ index, text }">
        <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
          {{ text }}
        </v-chip>

        <span
          v-else-if="index === 2"
          class="overline grey--text text--darken-3 mx-2"
        >
          +{{ files.image.length - 2 }} File(s)
        </span>
      </template>
    </v-file-input>
    <v-btn block large color="primary" @click="onSubmit">登録</v-btn>
  </v-form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: ['ゲーム', '音楽', '映像', 'IT'],
      files: {
        image: (null as unknown) as File,
      },
    }
  },
  methods: {
    async onSubmit() {
      // cloudinaryに画像のアップロードをする
      if (this.files.image) {
        const data = new FormData()
        data.append('file', this.files.image)
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
}
</script>
