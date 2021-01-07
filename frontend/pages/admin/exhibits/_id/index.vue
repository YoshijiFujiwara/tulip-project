<template>
  <div
    style="background-color: #f9f9f9; height: 100vh"
    class="mainText--text pa-12"
  >
    <v-row v-if="exhibit">
      <v-col cols="7">
        <v-row>
          <v-col class="text-h3 font-weight-bold ml-12">
            {{ exhibit.title }}
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pa-12">
            <v-carousel v-model="model">
              <v-carousel-item
                v-for="i of exhibit.presentationImages"
                :key="i"
                :src="i.url"
              >
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
        <v-row justify="center" align-content="center">
          <v-col cols="10 ">
            <v-img height="400" width="400" :src="exhibit.thumbnail"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-h4 font-weight-bold"> 作品説明 </v-col>
        </v-row>
        <v-row>
          <v-col class="text-h6">
            {{ exhibit.description }}
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-h5 font-weight-bold"> 作成グループ </v-col>
          <v-col class="text-h6">{{ exhibit.group.name }}</v-col>
        </v-row>
        <v-row>
          <v-col class="text-h5 font-weight-bold"> グループリーダー </v-col>
          <v-col class="text-h6">リーダー名が入る</v-col>
        </v-row>
        <v-row>
          <v-col class="text-h5 font-weight-bold"> ジャンル </v-col>
          <v-col class="text-h6">{{ exhibit.genre }}</v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ExhibitApi from '../../../../plugins/axios/modules/exhibit'
import { Exhibit } from '../../../../types/exhibit'

@Component({
  auth: false,
  layout: 'admin',
})
export default class Signin extends Vue {
  exhibit: Exhibit | null = null
  groupName: string = ''

  model = 0
  colors = ['primary', 'secondary', 'yellow darken-2', 'red', 'orange']

  async created() {
    const exhibit = await ExhibitApi.getExhibit(Number(this.$route.params.id))
    this.exhibit = exhibit
  }
}
</script>

<style lang="scss"></style>
