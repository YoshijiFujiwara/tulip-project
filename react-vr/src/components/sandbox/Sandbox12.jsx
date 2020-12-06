export default function Sandbox() {
  return (
    <a-scene>
      <a-camera>
        <a-entity
          id="myGBcursor"
          cursor="fuse: true; fuseTimeout: 1000"
          position="0 0 -1"
          geometry="primitive: sphere; radius: 0.005"
          material="color: #000000; shader: flat; opacity: 0.5"
          raycaster="objects: .clickable"
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
        id="left"
        color="#AA0000"
        position="-2 0 -7"
        class="clickable"
        event-set__enter="_event: mouseenter; material.color: #FF0000"
        event-set__leave="_event: mouseleave; material.color: #AA0000"
        event-set__tarcol="_event: click; _target: #green; material.color: #00AAff"
        event-set__clearclass="_event: click; class: not-clickable"
        event-set__tarclass="_event: click; _target: #green; class: clickable"
        refresh-obj
      ></a-box>
      <a-box
        id="green"
        color="#00AA00"
        position="-2 3 -7"
        event-set__rescol="_event: click; material.color: #00AA00"
        event-set__clearclass="_event: click; class: not-clickable"
        event-set__tarclass="_event: click; _target: #left; class: clickable"
        refresh-obj
      ></a-box>

      <a-box
        id="center"
        color="#AA0000"
        position="0 0 -7"
        class="clickable"
        event-set__enter="_event: mouseenter; material.color: #FF0000"
        event-set__leave="_event: mouseleave; material.color: #AA0000"
        event-set__tarvis="_event: click; _target: #blue; visible: true"
        event-set__clearclass="_event: click; class: not-clickable"
        event-set__tarclass="_event: click; _target: #blue; class: clickable"
        refresh-obj
      ></a-box>
      <a-box
        id="blue"
        color="#0000AA"
        position="0 3 -7"
        visible="false"
        event-set__resvis="_event: click; visible: false"
        event-set__clearclass="_event: click; class: not-clickable"
        event-set__tarclass="_event: click; _target: #center; class: clickable"
        refresh-obj
      ></a-box>

      <a-box
        id="right"
        color="#AA0000"
        position="2 0 -7"
        class="clickable"
        event-set__enter="_event: mouseenter; material.color: #FF0000"
        event-set__leave="_event: mouseleave; material.color: #AA0000"
        event-set__tarpos="_event: click; _target: #yellow; position: 2 3 -5"
        event-set__clearclass="_event: click; class: not-clickable"
        event-set__tarclass="_event: click; _target: #yellow; class: clickable"
        refresh-obj
      ></a-box>
      <a-box
        id="yellow"
        color="#FFAA00"
        position="2 3 -7"
        event-set__respos="_event: click; position: 2 3 -7"
        event-set__clearclass="_event: click; class: not-clickable"
        event-set__tarclass="_event: click; _target: #right; class: clickable"
        refresh-obj
      ></a-box>
    </a-scene>
  );
}
