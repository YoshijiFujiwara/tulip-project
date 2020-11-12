<template>
  <div>
    <a-scene>
      <a-assets>
        <div v-for="(booth, i) in booths" :key="i">
          <img :id="booth.name" :src="booth.url" />
        </div>
        ]<img id="sky" src="/vr/img/sky.jpg" />
      </a-assets>
      <a-plane
        color="#696"
        width="10000"
        height="10000"
        position="0 -3 -3"
        rotation="-90 0 0"
      ></a-plane>
      <booth v-for="(booth, i) in booths" :key="i" :booth="booth" />
      <a-sky src="#sky"></a-sky>
    </a-scene>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// import Gorilla from '~/components/Gorilla.vue'
import Booth from '~/components/Booth.vue'

@Component({
  auth: false,
  components: {
    Booth,
  },
})
export default class Exhibition extends Vue {
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
