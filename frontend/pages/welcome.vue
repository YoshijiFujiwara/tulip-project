<template>
  <div>
    <!-- トップの画像のところ -->
    <FirstTopImageSection />

    <!-- 本サービスについて -->
    <SecondAboutSection />

    <!-- 本サービスの楽しみ方 -->
    <ThirdOperationManualSection />

    <v-btn>VR空間へ入場</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FirstTopImageSection from '@/components/welcome/1stTopImageSection.vue'
import SecondAboutSection from '@/components/welcome/2ndAboutSection.vue'
import ThirdOperationManualSection from '@/components/welcome/3rdOperationManualSection.vue'

@Component({
  auth: false,
  layout: 'welcome',
  components: {
    FirstTopImageSection,
    SecondAboutSection,
    ThirdOperationManualSection,
  },
})
export default class Welcome extends Vue {}
</script>
