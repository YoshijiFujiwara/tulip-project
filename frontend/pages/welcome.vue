<template>
  <div>
    <div class="px-16">
      <!-- トップの画像のところ -->
      <FirstTopImageSection />

      <!-- 本サービスについて -->
      <SecondAboutSection class="mt-12" />

      <!-- 本サービスの楽しみ方 -->
      <ThirdOperationManualSection class="mt-12" />

      <!-- 入場ボタン -->
      <v-row justify="center" no-gutters class="mt-12">
        <v-col class="py-12">
          <v-btn
            id="enterVR"
            tile
            depressed
            block
            class="white--text text-center"
            height="4.5em"
            x-large
            :href="`${vrUrl}honnban/select_avatar`"
          >
            <span>VR空間へ入場</span>
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <!-- フッターをここに -->
    <v-footer color="black" padless>
      <v-row justify="center" no-gutters>
        <v-col class="black py-4 text-center white--text">
          {{ new Date().getFullYear() }} — <span>tulip group</span>
        </v-col>
      </v-row>
    </v-footer>
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
export default class Welcome extends Vue {
  vrUrl: string = ''

  created() {
    this.vrUrl = process.env.vrBaseUrl!
  }
}
</script>

<style scoped>
#enterVR {
  background-color: #635aab;
}

#enterVR span {
  font-size: 1.3em;
}
</style>
