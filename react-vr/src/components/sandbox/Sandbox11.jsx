import { Scene, Entity } from 'aframe-react';

export default function Sandbox() {
  return (
    <a-scene>
      <a-camera>
        <a-entity
          cursor="fuse: true; fuseTimeout: 1000"
          position="0 0 -1"
          geometry="primitive: sphere; radius: 0.005"
          material="color: #000000; shader: flat; opacity: 0.5"
          animation__enter="property: scale;
                                        to: 3 3 3;
                                        dur: 1000;
                                        easing: linear;
                                        startEvents: mouseenter"
          event-set__reset="_event: animationcomplete__enter; scale: 1 1 1"
          animation__leave="property: scale;
                                        to: 1 1 1;
                                        dur: 1000;
                                        easing: linear;
                                        startEvents: mouseleave"
        ></a-entity>
      </a-camera>

      <a-box
        color="#AA0000"
        position="-2 0 -7"
        event-set__enter="_event: mouseenter; material.color: #FF0000"
        event-set__leave="_event: mouseleave; material.color: #AA0000"
        event-set__tarcol="_event: click; _target: #green; material.color: #00AAff"
      ></a-box>
      <a-box
        id="green"
        color="#00AA00"
        position="-2 3 -7"
        event-set__rescol="_event: click; material.color: #00AA00"
      ></a-box>

      <a-box
        color="#AA0000"
        position="0 0 -7"
        event-set__enter="_event: mouseenter; material.color: #FF0000"
        event-set__leave="_event: mouseleave; material.color: #AA0000"
        event-set__tarvis="_event: click; _target: #blue; visible: true"
      ></a-box>
      <a-box
        id="blue"
        color="#0000AA"
        position="0 3 -7"
        visible="false"
        event-set__resvis="_event: click; visible: false"
      ></a-box>

      <a-box
        color="#AA0000"
        position="2 0 -7"
        event-set__enter="_event: mouseenter; material.color: #FF0000"
        event-set__leave="_event: mouseleave; material.color: #AA0000"
        event-set__tarpos="_event: click; _target: #yellow; position: 2 3 -5"
      ></a-box>
      <a-box
        id="yellow"
        color="#FFAA00"
        position="2 3 -7"
        event-set__respos="_event: click; position: 2 3 -7"
      ></a-box>
    </a-scene>
  );
}
