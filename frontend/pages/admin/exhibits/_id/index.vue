<template>
  <div>
    <v-row>
      <v-col cols="7">
        <v-row>
          <v-col class="text-h3">titleが入る</v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-carousel v-model="model">
              <v-carousel-item v-for="(color, i) in colors" :key="color">
                <v-sheet :color="color" height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <div class="display-3">Slide {{ i + 1 }}</div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5"
        >uuuuuueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</v-col
      >
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
  exhibits: Exhibit[] = []

  model = 0
  colors = ['primary', 'secondary', 'yellow darken-2', 'red', 'orange']

  async created() {
    const exhibits = await ExhibitApi.getExhibits()
    this.exhibits = exhibits
  }
}
</script>

<style lang="scss"></style>
