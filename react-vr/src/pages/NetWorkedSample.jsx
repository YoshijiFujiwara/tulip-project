import { Scene, Entity } from 'aframe-react';

export default function NetWorkedSample() {
  return (
    <a-scene networked-scene>
      <a-assets>
        <template id="avatar-template">
          <Entity primitive="a-sphere"></Entity>
        </template>
      </a-assets>
      <Entity
        id="player"
        networked="template:#avatar-template;attachTemplateToLocal:false;"
        camera
        wasd-controls
        look-controls
      ></Entity>
    </a-scene>
  );
}
