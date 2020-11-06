<template>
  <div>
    <gorilla />
    <!--<booth v-for="(img, i) in imgs" :key="i" :img="img" />-->
  </div>
</template>

<script lang="ts">
import Gorilla from '~/components/Gorilla.vue'
// import Booth from '~/components/Booth.vue'
export default {
  auth: false,
  components: {
    Gorilla,
  },
  data() {
    return {
      imgs: ['/gori.jpg', '/dog.jpg'],
    }
  },
}
</script>
