<template>
  <!-- spanとかdivで囲むと表示されなくなる -->
  <a-image
    :src="`#${img.name}`"
    width="6"
    height="6"
    :position="img.position"
  ></a-image>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    img: {
      type: Array,
      required: true,
    },
  },
})
</script>
