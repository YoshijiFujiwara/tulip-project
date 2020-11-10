<template>
  <div>
    <a-scene>
      <a-assets>
        <div v-for="(img, i) in imgs" :key="i">
          <img :id="img.name" :src="img.url" />
        </div>
      </a-assets>

      <booth v-for="(img, i) in imgs" :key="i" :img="img" />
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
  imgs = [
    { name: 'gorilla', url: '/vr/img/gori.jpg', position: '0 0 -5' },
    { name: 'dog', url: '/vr/img/dog.jpg', position: '7 0 -5' },
    { name: 'dog2', url: '/vr/img/dog2.jpg', position: '14 0 -5' },
  ]
}
</script>
