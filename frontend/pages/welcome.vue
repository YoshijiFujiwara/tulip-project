<template>
  <div>
    <!-- トップの画像のところ -->
    <FirstTopImageSection />
    <div :class="_isPC ? 'px-16' : 'px-4'">
      <!-- 本サービスについて -->
      <SecondAboutSection class="mt-12" />

      <!-- 本サービスの楽しみ方 -->
      <ThirdOperationManualSection class="mt-12" />
    </div>
    <div :class="_isPC ? 'px-16' : ''">
      <v-row align="center" justify="center" class="text-h6 mt-4">
      ※Chrome推奨
    </v-row>
    <v-row align="center" justify="center">
      <v-col align="center">
        <span :class="_isPC ?'red--text text-h5':'red--text text-h6'"
          >※VR画面では音が出ますので音量にはご注意ください</span
        >
      </v-col>
    </v-row>
      <!-- 入場ボタン -->
      <v-row justify="center" no-gutters :class="_isPC ? 'mt-12' : ''">
        <v-col :class="_isPC ? 'py-12' : ''">
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
          {{ new Date().getFullYear() }} —
          <span>tulip group</span>
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
