<template>
  <div>
    <h1>作品一覧ページです</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">id</th>
            <th class="text-left">groupId</th>
            <th class="text-left">title</th>
            <th class="text-left">genre</th>
            <th class="text-left">description</th>
            <th class="text-left">presentationImage</th>
            <th class="text-left">thumbnail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="exhibit in exhibits" :key="exhibit.id">
            <td>{{ exhibit.id }}</td>
            <td>{{ exhibit.groupId }}</td>
            <td>{{ exhibit.title }}</td>
            <td>{{ exhibit.genre }}</td>
            <td>{{ exhibit.description }}</td>
            <td>{{ exhibit.presentationImage }}</td>
            <td>{{ exhibit.thumbnail }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ExhibitApi from '../../plugins/axios/modules/exhibit'

@Component({
  auth: false,
  layout: 'admin',
})
export default class Signin extends Vue {
  exhibits: object = {}

  async created() {
    const response = await ExhibitApi.getExhibits()
    this.exhibits = response
  }
}
</script>

<style lang="scss"></style>
