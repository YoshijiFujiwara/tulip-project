export default function Network() {
  return (
    <a-scene
      networked-scene="
    app: myApp;
    room: room1;
    debug: true;
    serverURL: http://localhost:8080;
    audio: true;
  "
    >
      <a-assets>
        <template id="avatar-template">
          <a-entity class="avatar">
            <a-sphere
              class="head"
              color="#5985ff"
              scale="0.45 0.5 0.4"
            ></a-sphere>
            <a-entity class="face" position="0 0.05 0">
              <a-sphere
                class="eye"
                color="#efefef"
                position="0.16 0.1 -0.35"
                scale="0.12 0.12 0.12"
              >
                <a-sphere
                  class="pupil"
                  color="#000"
                  position="0 0 -1"
                  scale="0.2 0.2 0.2"
                ></a-sphere>
              </a-sphere>
              <a-sphere
                class="eye"
                color="#efefef"
                position="-0.16 0.1 -0.35"
                scale="0.12 0.12 0.12"
              >
                <a-sphere
                  class="pupil"
                  color="#000"
                  position="0 0 -1"
                  scale="0.2 0.2 0.2"
                ></a-sphere>
              </a-sphere>
            </a-entity>
          </a-entity>
        </template>
      </a-assets>
      <a-entity
        id="player"
        networked="template:#avatar-template;attachTemplateToLocal:false;"
        camera
        position="0 1.3 0"
        wasd-controls
        look-controls
      ></a-entity>
    </a-scene>
  );
}
