<template>
  <div>
    <a-scene>
      <a-assets>
        <div v-for="(booth, i) in booths" :key="i">
          <img :id="booth.name" :src="booth.url" />
        </div>
      </a-assets>

      <booth v-for="(booth, i) in booths" :key="i" :booth="booth" />
      <a-sky color="#000"></a-sky>
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
      backWall: '3.4 0 -7',
      imgPosition: '3.4 0 -6',
    },
    // { name: 'dog', url: '/vr/img/dog.jpg', position: '7 0 -5' },
    // { name: 'dog2', url: '/vr/img/dog2.jpg', position: '14 0 -5' },
  ]
}
</script>
