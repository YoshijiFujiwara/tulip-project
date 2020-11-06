<template>
  <v-form
    ref="form">
    <v-card-title class="headline">
      作品登録
    </v-card-title>
    <v-textarea
      class="pt-7"
      v-model="title"
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
      class="mt-7"
      :items="items"
      label="ジャンル"
      placeholder="選択"
      outlined
    ></v-select>
    <p>サムネイル</p>
    <p>作品の内容がわかる画像をアップロードします。来場者の目を引くサムネイルにしましょう。</p>
    <v-file-input
      class="mt-7"
      v-model="files"
      color="deep-purple accent-4"
      counter
      accept="image/png, image/jpeg, image/bmp"
      label="サムネール"
      prepend-icon="mdi-camera"
      placeholder="サムネール"
      outlined
      dense
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
          +{{ files.length - 2 }} File(s)
        </span>
      </template>
    </v-file-input>
<p>プレゼン資料の画像</p>
<p>作品のプレゼン資料をアップロードしましょう。</p>
    <v-file-input
      class="mt-7"
      v-model="files"
      color="deep-purple accent-4"
      counter
      accept="image/png, image/jpeg, image/bmp"
      label="プレゼンデータ"
      prepend-icon="mdi-file"
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
          +{{ files.length - 2 }} File(s)
        </span>
      </template>
    </v-file-input>
    <v-btn block large color="primary" @click="onSubmit">登録</v-btn>
  </v-form>
</template>

<script lang="ts">
export default {
  data: () => ({
    items: ['ゲーム', '音楽', '映像', 'IT'],
  }),
  methods: {
    onSubmit() {
      alert('aaaaaaaaaa')
    },
  },
}
</script>
