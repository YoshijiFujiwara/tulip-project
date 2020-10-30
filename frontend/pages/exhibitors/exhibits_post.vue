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
    class="mt-7"
    v-model="files"
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
      <v-chip
        v-if="index < 2"
        color="deep-purple accent-4"
        dark
        label
        small
      >
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

  <v-file-input
    class="mt-7"
    v-model="files"
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
      <v-chip
        v-if="index < 2"
        color="deep-purple accent-4"
        dark
        label
        small
      >
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
