<template>
  <div>
    <a-scene>
      <a-assets timeout="200000">
        <div v-for="(exhibit, i) in exhibits" :key="i">
          <img :id="`exhibit-${i}`" :src="exhibit.thumbnail" />
        </div>
        <img id="sky" src="/vr/img/sky.jpg" />
      </a-assets>
      <a-plane
        color="#696"
        width="10000"
        height="10000"
        position="0 -3 -3"
        rotation="-90 0 0"
      ></a-plane>
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
import exhibit from '../../plugins/axios/modules/exhibit'
import Booth from '~/components/Booth.vue'

@Component({
  auth: false,
  components: {
    Booth,
  },
})
export default class Exhibition extends Vue {
  exhibits: object = {}
  position = [
    {
      rightWall: '7 0 -5',
      leftWall: '-0.01 0 -5',
      backWall: '3.4 0 -6.9',
      imgPosition: '3.4 0 -6',
    },
    {
      rightWall: '17 0 -5',
      leftWall: '9.99. 0 -5',
      backWall: '13.4 0 -6.9',
      imgPosition: '13.4 0 -6',
    },
  ]

  async created() {
    const response = await ExhibitApi.getExhibits()
    this.exhibits = response.map((exhibit, index) => {
      return {
        ...exhibit,
        ...this.position[index],
      }
    })
    console.log(this.exhibits)
  }
}
</script>
