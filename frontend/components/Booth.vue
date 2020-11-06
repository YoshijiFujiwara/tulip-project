<template>
  <div>
    <a-scene>
      <a-assets>
        <img id="my-image" :src="img" />
      </a-assets>
      <a-image src="#my-image" width="6" height="6" position="15 0 0"></a-image>

      <a-sky color="#fff"></a-sky>
    </a-scene>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    img: {
      type: String,
      default: '/gori.jpg',
      required: true,
    },
  },
})
</script>
