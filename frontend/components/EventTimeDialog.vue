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
          :disabled="!valid || isLoading"
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
import { Event } from '../types/event'
import EventApi from '../plugins/axios/modules/events'
import events from '../plugins/axios/modules/events'

@Component
export default class EventTimeDialog extends Vue {
  // モーダルの開閉のために必要なprops
  @Prop({ required: true }) value: boolean = false

  isLoading: boolean = false // ローディング判定
  valid = false
  form = {
    date: '',
    startTime: '',
    endTime: '',
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

  created() {
    EventApi.getEvents()
      .then((event: Event) => {
        this.form.date = event.startAt.substring(0, 10)
        this.form.startTime = event.startAt.substring(11, 16)
        this.form.endTime = event.endAt.substring(11, 16)
      })
      .catch(() => (this.dialog = false))
  }

  onSubmit() {
    this.isLoading = true
    let startAt: string | null = null
    let endAt: string | null = null

    if (this.form.startTime && this.form.date && this.form.endTime) {
      startAt = new Date(
        this.form.date + 'T' + this.form.startTime
      ).toISOString()
      endAt = new Date(this.form.date + 'T' + this.form.endTime).toISOString()
    }
    EventApi.updateEvent({
      startAt,
      endAt,
    })
      .then(() => {
        this.$toast.success('イベントを登録しました')
      })
      .catch(() => {
        this.$toast.error('イベント登録の際にエラーが発生しました')
      })

    this.isLoading = false
    this.dialog = false
  }
}
</script>
