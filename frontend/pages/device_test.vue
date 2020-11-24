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

    <video
      id="local_video"
      width="320px"
      height="240px"
      autoplay="1"
      controls="1"
      style="border: 1px solid"
      :srcObject.prop="srcObject"
      :setSkinId="selected.speaker"
    ></video>

    <button @click="start">スタート</button>

    <br />
    {{ constraints }}

    <br />
    {{ selected }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component({
  auth: false,
})
export default class Sample extends Vue {
  cameras: Device[] = []
  mics: Device[] = []
  speakers: Device[] = []
  constraints: MediaStreamConstraints = { audio: false, video: false }
  srcObject: MediaStream = new MediaStream()
  selected: devices = {
    camera: 'default',
    mic: 'default',
    speaker: 'default',
  }

  isCameraAccessGranted: boolean | MediaTrackConstraints = false
  isMicrophoneAccessGranted: boolean | MediaTrackConstraints = false

  async created() {
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

    this.srcObject.getTracks().forEach((track) => {
      track.stop()
    })
  }

  async start() {
    this.srcObject.getTracks().forEach((track) => {
      track.stop()
    })

    this.srcObject = await navigator.mediaDevices.getUserMedia(this.constraints)
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
