<template>
  <a-scene>
    <!-- Camera -->
    <a-camera>
      <!-- Since we are now using the "animation" component for the visual feedback,
                 we need to create 2 different animations using 2 different IDs (line 42 and 48),
                 that are 1 for mouseenter and 1 for mouseleave and that we can specify in the
                 "startEvents" property (lines 46 and 52).
                 You can find all the animation component properties here:
                 https://aframe.io/docs/0.9.0/components/animation.html#properties.

                 Then, to reset the cursor scale once the click event is fired, we need to use
                 the event-set component and listen to the "animationcomplete__enter" event emitted
                 by the animation__enter component once the animation completes.
                 Note the syntax animationcomplete__ID (line 47) which matches the name (ID) we assigned to the animation on mouseenter (animation__enter at line 42).
                 You can read more about the events emitted by the animation component here:
                 https://aframe.io/docs/0.9.0/components/animation.html#events -->
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
      >
      </a-entity>
    </a-camera>

    <!-- Left Red Box -->
    <a-box
      color="#AA0000"
      position="-2 0 -7"
      event-set__enter="_event: mouseenter; material.color: #FF0000"
      event-set__leave="_event: mouseleave; material.color: #AA0000"
      event-set__tarcol="_event: click; _target: #green; material.color: #00AAff"
    >
    </a-box>
    <!-- Green Box -->
    <a-box
      id="green"
      color="#00AA00"
      position="-2 3 -7"
      event-set__rescol="_event: click; material.color: #00AA00"
    >
    </a-box>

    <!-- Center Red Box -->
    <a-box
      color="#AA0000"
      position="0 0 -7"
      event-set__enter="_event: mouseenter; material.color: #FF0000"
      event-set__leave="_event: mouseleave; material.color: #AA0000"
      event-set__tarvis="_event: click; _target: #blue; visible: true"
    >
    </a-box>
    <!-- Blue Box -->
    <a-box
      id="blue"
      color="#0000AA"
      position="0 3 -7"
      visible="false"
      event-set__resvis="_event: click; visible: false"
    >
    </a-box>

    <!-- Right Red Box -->
    <a-box
      color="#AA0000"
      position="2 0 -7"
      event-set__enter="_event: mouseenter; material.color: #FF0000"
      event-set__leave="_event: mouseleave; material.color: #AA0000"
      event-set__tarpos="_event: click; _target: #yellow; position: 2 3 -5"
    >
    </a-box>
    <!-- Yellow Box -->
    <a-box
      id="yellow"
      color="#FFAA00"
      position="2 3 -7"
      event-set__respos="_event: click; position: 2 3 -7"
    >
    </a-box>
  </a-scene>
</template>

<script>
export default {}
</script>
