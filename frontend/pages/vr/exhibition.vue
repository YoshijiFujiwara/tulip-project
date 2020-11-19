<template>
  <div>
    <a-scene>
      <a-assets timeout="200000">
        <div v-for="(exhibit, i) in exhibits" :key="i">
          <img
            :id="`exhibit-${i}`"
            :src="exhibit.thumbnail"
            crossorigin="anonymous"
          />
        </div>
        <img id="sky" src="/vr/img/sky.jpg" />
        <img id="floor" src="/vr/img/floor.png" />
      </a-assets>
      <a-entity v-for="(n, l) in 2" :key="`${l}-l`">
        <a-entity v-for="(m, k) in 2" :key="`${k}-k`">
          <a-entity v-for="(b, j) in 10" :key="`${j}-j`">
            <a-plane
              v-for="(v, i) in 10"
              :key="i"
              src="#floor"
              width="10"
              height="10"
              :position="`${i * 10 - k * 10} -3 ${j * 10 - l * 10}`"
              :rotation="`-90 0 0`"
            ></a-plane>
          </a-entity>
        </a-entity>
      </a-entity>
      <booth
        v-for="(exhibit, i) in exhibits"
        :key="i"
        :exhibit="exhibit"
        :exhibit-id="`exhibit-${i}`"
      />

      <a-sky src="#sky"></a-sky>
    </a-scene>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ExhibitApi from '../../plugins/axios/modules/exhibit'
import Booth from '~/components/Booth.vue'

@Component({
  auth: false,
  components: {
    Booth,
  },
})
export default class Exhibition extends Vue {
  exhibits: object = {}

  async created() {
    const response = await ExhibitApi.getExhibits()
    this.exhibits = response.map((exhibit, i) => {
      return {
        ...exhibit,
        rightWall: `${7 + i * 10} 0 -5`,
        leftWall: `${-0.01 + i * 10} 0 -5`,
        backWall: `${3.4 + i * 10} 0 -6.9`,
        imgPosition: `${3.4 + i * 10} 0 -6`,
      }
    })
  }
}
</script>
