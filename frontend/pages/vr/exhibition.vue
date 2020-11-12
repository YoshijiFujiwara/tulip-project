<template>
  <div>
    <a-scene>
      <a-assets>
        <div v-for="(booth, i) in booths" :key="i">
          <img :id="booth.name" :src="booth.url" />
        </div>
        <img id="sky" src="/vr/img/sky.jpg" />
        <img id="floor" src="/vr/img/floor.png" />
      </a-assets>
      <a-entity v-for="(n, l) in 2" :key="l">
        <a-entity v-for="(m, k) in 2" :key="k">
          <a-entity v-for="(b, j) in 10" :key="j">
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
      <booth v-for="(booth, i) in booths" :key="i" :booth="booth" />
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
    this.exhibits = response
    console.log('response', this.exhibits)
  }

  booths = [
    {
      name: 'dog',
      url: '/vr/img/dog.jpg',
      rightWall: '7 0 -5',
      leftWall: '-0.01 0 -5',
      backWall: '3.4 0 -6.9',
      imgPosition: '3.4 0 -6',
    },
    // { name: 'dog', url: '/vr/img/dog.jpg', position: '7 0 -5' },
    // { name: 'dog2', url: '/vr/img/dog2.jpg', position: '14 0 -5' },
  ]
}
</script>
