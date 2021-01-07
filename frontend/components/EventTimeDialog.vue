<template>
  <v-dialog v-model="dialog" max-width="700px">
    <v-card>
      <v-card-title class="display-1 font-weight-bold pt-8">
        イベント設定
      </v-card-title>
      <v-form ref="form" v-model="valid" class="ml-8 mr-8 pb-9">
        <v-menu
          v-model="datePicker"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="form.date"
              label="開催日"
              :rules="rules.date"
              prepend-icon="mdi-calendar"
              readonly
              border
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="form.date"
            @input="datePicker = false"
          ></v-date-picker>
        </v-menu>
        <v-row>
          <v-col cols="5">
            <v-menu
              ref="menu1"
              v-model="startTimePicker"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="form.startTime"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="form.startTime"
                  label="開始時間"
                  prepend-icon="mdi-clock-time-four-outline"
                  :rules="rules.startTime"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="startTimePicker"
                v-model="form.startTime"
                full-width
                @click:minute="$refs.menu1.save(form.startTime)"
              ></v-time-picker>
            </v-menu>
          </v-col>
          <v-col cols="5">
            <v-menu
              ref="menu2"
              v-model="endTimePicker"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="form.endTime"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="form.endTime"
                  :rules="rules.endTime"
                  label="終了時間"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="endTimePicker"
                v-model="form.endTime"
                full-width
                @click:minute="$refs.menu2.save(form.endTime)"
              ></v-time-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-btn
          block
          large
          class="white--text"
          color="deep-purple darken-4"
          @click="onSubmit"
        >
          開催日時を登録
        </v-btn>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class EventTimeDialog extends Vue {
  // モーダルの開閉のために必要なprops
  @Prop({ required: true }) value: boolean = false

  isLoading: boolean = false // ローディング判定

  form = {
    date: '',
    startTime: '00:00',
    endTime: '00:00',
  }
  rules = {
    date: [(v: string) => !!v || '開催日は必須です'],
    time: [(v: string) => !!v || '学習時間は必須です'],
  }

  // モーダルの開閉のために必要
  get dialog(): boolean {
    return this.value
  }

  // モーダルの開閉のために必要
  set dialog(dialog: boolean) {
    this.$emit('input', dialog)
  }

  datePicker = false
  startTimePicker = false
  endTimePicker = false

  onSubmit() {
    this.isLoading = true
    BoothsApi.postBooth(this.form.positionNumber!)
      .then(() => {
        this.$toast.success('ブースの登録が完了しました')
      })
      .catch((res) => {
        this.$toast.error(res.data.message)
      })

    this.dialog = false
    this.isLoading = false
  }
}
</script>
