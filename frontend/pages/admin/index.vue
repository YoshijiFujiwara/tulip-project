<template>
  <v-container fluid grid-list-lg light>
    <v-layout row wrap>
      <v-flex d-flex xs6 md4>
        <v-card color="purple" dark>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>hogehuga</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs6 md4>
        <v-card color="blue" dark>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>hogehuga</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs6 md4>
        <v-card color="pink" dark>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>hogehuga</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs6 md4>
        <v-card color="orange" dark>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>hogehuga</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex text-xs-center>
        <v-card>
          <v-card-text>
            <img src="/v.png" alt="Vuetify.js" class="mb-5" />
            <blockquote class="blockquote">
              &#8220;First, solve the problem. Then, write the code.&#8221;
              <footer>
                <small>
                  <em>&mdash;John Johnson</em>
                </small>
              </footer>
            </blockquote>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  auth: false,
  layout: 'admin',
})
export default class Signin extends Vue {}
</script>
<style lang="scss"></style>
