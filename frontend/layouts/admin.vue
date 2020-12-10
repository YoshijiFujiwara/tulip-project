<template>
  <v-app light>
    <v-navigation-drawer app color="#27303d">
      <v-list>
        <v-list-item>
          <v-img :src="require('@/assets/logo_main.png')" />
        </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          link
          exact
          outlined
        >
          <v-list-item-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content class="white--text">
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid grid-list-lg light px-6>
        <v-app-bar flat>
          <v-col cols="2">
            <v-toolbar-title>page title</v-toolbar-title>
          </v-col>
          <v-divider vertical></v-divider>
          <v-btn icon>
            <v-icon>mdi-reload</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-form>
            <v-text-field
              label="Search"
              append-icon="mdi-magnify"
              class="mt-7"
            ></v-text-field>
          </v-form>
        </v-app-bar>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-home',
          title: 'ダッシュボード',
        },
        {
          icon: 'mdi-shield-account-variant',
          title: '管理者',
        },
        {
          icon: 'mdi-contacts',
          title: '出展者一覧',
        },
        {
          icon: 'mdi-contacts',
          title: '出席確認',
        },
        {
          icon: 'mdi-account-supervisor',
          title: '来場者',
        },
      ],
    }
  },
}
</script>
