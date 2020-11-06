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
      counter
      accept="image/png, image/jpeg, image/bmp"
      label="サムネール"
      prepend-icon="mdi-camera"
      placeholder="サムネール"
      outlined
      required
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
          +{{ form.thumbnail.length - 2 }} File(s)
        </span>
      </template>
    </v-file-input>

    <v-file-input
      v-model="form.presentationData"
      class="mt-7"
      :rules="rules.presentationData"
      color="deep-purple accent-4"
      counter
      accept="image/png, image/jpeg, image/bmp"
      label="プレゼンデータ"
      prepend-icon="mdi-camera"
      placeholder="プレゼンデータ"
      outlined
      required
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
          +{{ form.presentationData.length - 2 }} File(s)
        </span>
      </template>
    </v-file-input>
    <v-btn block large color="primary" :disabled="!valid" @click="onSubmit"
      >登録</v-btn
    >
  </v-form>
</template>

<script lang="ts">
export default {
  data: () => ({
    items: ['ゲーム', '音楽', '映像', 'IT'],
    valid: false,
    form: {
      title: '',
      description: '',
      genre: '',
      file: '',
      presentationData: '',
    },
    rules: {
      title: [
        (v: string) => !!v || 'タイトルは必須です',
        // (v: string) =>
        //   (v && v.length <= 20) || 'グループ名は20文字以内で入力してください',
      ],
      description: [(v: string) => !!v || '説明文は必須です'],
      genre: [(v: string) => !!v || 'ジャンルは必須です'],
      thumbnail: [
        (v) => !!v || 'サムネイル画像は必須です',
        (v) => (v && v.size > 0) || 'サムネイル画像は必須です',
      ],
      presentationData: [
        (v) => !!v || 'プレゼンデータ画像は必須です',
        (v) => (v && v.size > 0) || 'プレゼンデータ画像は必須です',
      ],
    },
  }),
  methods: {
    onSubmit() {
      alert('aaaaaaaaaa')
    },
  },
}
</script>
