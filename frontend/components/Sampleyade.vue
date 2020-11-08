<template>
  <div>
    <p>message: {{ message }}</p>
    <p>subtitle: {{ subtitle }}</p>
    <p>subtitle2: {{ subtitle2 }}</p>
    <p>subtitle3: {{ subtitle3 }}</p>
    <p>subtitle4: {{ subtitle4 }}</p>

    <p>ultimateMessage: {{ ultimateMessage }}</p>

    <button @click="callMe">呼ぶ</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Sampleyade extends Vue {
  // props群
  @Prop({ required: true }) readonly message!: string
  @Prop() subtitle!: string
  @Prop({ default: 'Hello World' }) subtitle2!: string
  @Prop(String) readonly subtitle3!: string
  @Prop({ required: false, type: String, default: 'デフォルト' })
  readonly subtitle4!: string

  // dataに当たるもの
  ultimateMessage: string = '俺最強'

  // methodsに当たるもの
  callMe() {
    alert('呼んだ？')
  }
}
</script>
