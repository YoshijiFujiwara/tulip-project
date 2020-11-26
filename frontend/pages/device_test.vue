<template>
  <div>
    <h1>サンプルページです</h1>

    <select
      id="camera_list"
      v-model="selected.camera"
      size="1"
      style="width: 160pt"
    >
      <template v-for="camera in cameras">
        <option
          v-for="device in camera.device.advanced"
          :key="`camera-${device.deviceId}`"
          :value="device.deviceId"
        >
          {{ camera.label }}
          ({{ device.deviceId }})
        </option>
      </template>
    </select>
    <select id="mic_list" v-model="selected.mic" size="1" style="width: 160pt">
      <template v-for="mic in mics">
        <option
          v-for="device in mic.device.advanced"
          :key="`mic-${device.deviceId}`"
          :value="device.deviceId"
        >
          {{ mic.label }}
          ({{ device.deviceId }})
        </option>
      </template>
    </select>
    <select
      id="speaker_list"
      v-model="selected.speaker"
      size="1"
      style="width: 160pt"
    >
      <template v-for="speaker in speakers">
        <option
          v-for="device in speaker.device.advanced"
          :key="`speaker-${device.deviceId}`"
          :value="device.deviceId"
        >
          {{ speaker.label }}
          ({{ device.deviceId }})
        </option>
      </template>
    </select>

    <div class="videosContainer">
      <video
        v-for="(video, index) in videos"
        id="local_video"
        :key="index"
        autoplay
        width="320"
        height="240"
        controls="1"
        muted="true"
        style="border: 1px solid"
        :srcObject.prop="video"
      ></video>
    </div>

    <form @submit.prevent="start">
      <input v-model="roomName" type="text" required />
      <button type="submit">スタート</button>
    </form>

    <br />

    id: {{ myId }}

    <br />
    {{ constraints }}

    <br />
    {{ selected }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import Peer, { SfuRoom } from 'skyway-js'

@Component({
  auth: false,
})
export default class Sample extends Vue {
  cameras: Device[] = []
  mics: Device[] = []
  speakers: Device[] = []
  videos: MediaStream[] = []
  constraints: MediaStreamConstraints = { audio: false, video: false }
  selected: devices = {
    camera: 'default',
    mic: 'default',
    speaker: 'default',
  }

  myId: string = ''
  roomName: string = 'test'
  room: SfuRoom | null = null

  isCameraAccessGranted: boolean | MediaTrackConstraints = false
  isMicrophoneAccessGranted: boolean | MediaTrackConstraints = false
  peer = new Peer({
    key: process.env.skywaySecret!,
  })

  async created() {
    this.peer.on('open', (myId) => {
      this.myId = myId
    })

    this.cameras = [
      new Device({
        deviceId: this.selected.camera,
        kind: 'videoinput',
        label: '',
      }),
    ]
    this.mics = [
      new Device({
        deviceId: this.selected.mic,
        kind: 'audioinput',
        label: '',
      }),
    ]
    this.speakers = [
      new Device({
        deviceId: this.selected.speaker,
        kind: 'audiooutput',
        label: '',
      }),
    ]

    const cameraResult = await navigator.permissions.query({ name: 'camera' })
    this.isCameraAccessGranted = cameraResult.state !== 'denied'
    const microphoneResult = await navigator.permissions.query({
      name: 'microphone',
    })
    this.isMicrophoneAccessGranted = microphoneResult.state !== 'denied'
    this.constraints = {
      audio: this.isMicrophoneAccessGranted,
      video: this.isCameraAccessGranted,
    }

    const stream = await navigator.mediaDevices.getUserMedia(this.constraints)
    this.videos = [stream]
    this.videos[0].getTracks().forEach((track) => {
      track.stop()
    })
  }

  async start() {
    if (!this.roomName) {
      return
    }

    if (this.room) {
      this.room.close()
    }

    const stream = await navigator.mediaDevices.getUserMedia(this.constraints)

    this.room = await ((stream) => {
      const room = this.peer.joinRoom<SfuRoom>(this.roomName, {
        mode: 'sfu',
        stream,
      })
      console.log('start room')
      return Promise.resolve(room)
    })(stream)

    // this.room.on('stream', (stream) => {
    //   console.log('start stream')
    //   this.videos = [stream]
    // })
  }

  @Watch('selected', { deep: true })
  onChangeSelected(devices: devices) {
    this.constraints = {
      audio: { advanced: [{ deviceId: devices.mic }] },
      video: { advanced: [{ deviceId: devices.camera }] },
    }
    this.selected.speaker = devices.speaker
  }

  @Watch('isCameraAccessGranted')
  async onChangeIsCameraAccessGranted(isGranted: boolean) {
    if (!isGranted) {
      return
    }
    await this.refreshCameras()
  }

  @Watch('isMicrophoneAccessGranted')
  async onChangeIsMicrophoneAccessGranted(isGranted: boolean) {
    if (!isGranted) {
      return
    }
    await this.refreshMics()
    await this.refreshSpeakers()
  }

  async refreshCameras() {
    this.cameras = await this.refreshDevices('videoinput')

    // カメラにはdefaultという概念が無い為、アプリケーション側で設定
    this.selected = {
      ...this.selected,
      camera: this.cameras[0].device.advanced![0].deviceId!,
    }
  }

  async refreshMics() {
    this.mics = await this.refreshDevices('audioinput')
  }

  async refreshSpeakers() {
    this.speakers = await this.refreshDevices('audiooutput')
  }

  async refreshDevices(kind: MediaDeviceKind): Promise<Device[]> {
    const enumeratedDevices = await navigator.mediaDevices.enumerateDevices()
    return enumeratedDevices
      .filter((device) => device.kind === kind)
      .map((device) => new Device(device))
  }
}

export interface devices {
  mic: ConstrainDOMString
  speaker: ConstrainDOMString
  camera: ConstrainDOMString
}

export class Device {
  device: MediaTrackConstraints
  kind: MediaDeviceKind
  label: string

  constructor({
    deviceId,
    kind,
    label,
  }: {
    deviceId: ConstrainDOMString
    kind: MediaDeviceKind
    label: string
  }) {
    this.device = { advanced: [{ deviceId }] }
    this.kind = kind
    this.label = label
  }
}
</script>

<style scoped>
* {
  color: white;
}
</style>
