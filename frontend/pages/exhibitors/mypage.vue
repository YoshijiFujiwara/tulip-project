<template>
  <div>
    <h3>MyPage</h3>
    <p>ログインユーザー確認用: {{ user }}</p>
    <v-btn @click="openCreateExhibitsModal"
      >作品登録用モーダルを開く仮のボタン</v-btn
    >

    <CreateExhibitDialog v-model="isOpenCreateExhibitDialog" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CreateExhibitDialog from '@/components/exhibitors/mypage/CreateExhibitDialog.vue'

@Component({
  components: {
    CreateExhibitDialog,
  },
})
export default class MyPage extends Vue {
  user: object = {}

  // 展示物作成モーダルの開閉
  isOpenCreateExhibitDialog: boolean = false

  openCreateExhibitsModal() {
    // 作品登録用モーダルを開く
    this.isOpenCreateExhibitDialog = true
  }

  async created() {
    this.user = await this.$auth.user
  }
}
</script>
