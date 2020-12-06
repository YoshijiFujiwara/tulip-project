export default function Sandbox() {
  return (
    <a-scene>
      <a-entity position="-4.5 0 1" rotation="0 -45 0">
        <a-camera>
          <a-cursor raycaster="objects: .ui"></a-cursor>
        </a-camera>
      </a-entity>

      <a-circle
        color="#EEEEEE"
        rotation="-90 0 0"
        radius="1.5"
        position="0 0 -5"
        shader="flat"
      ></a-circle>

      <a-box
        id="yellow"
        color="#FFAA00"
        position="0 0.5 -5"
        class="ui"
        animation__enter="property: material.color; from: #FFAA00; to: #FF7700; 
								 startEvents: mouseenter; dur: 250; easing: linear"
        animation__leave="property: material.color; from: #FF7700; to: #FFAA00; 
								 startEvents: mouseleave; dur: 250; easing: linear"
        event-set__scale="_target: #blue; _event: click;
			   					 animation.property: scale;
			   					 animation.to: 4 2 0.1;
			   					 animation.easing: easeInOutBack;
			   					 animation.dur: 1000"
        event-set__position="_target: #grey; _event: click;
			   						animation.property: position;
			   						animation.to: 0 1.75 -5;
			   						animation.dur: 1000"
      ></a-box>

      <a-box id="blue" color="#00AAFF" position="0 3 -5" opacity="1"></a-box>
      <a-plane
        id="grey"
        color="#333333"
        position="0 3 -5"
        scale="0.5 0.5 1"
        class="ui"
        animation__enter="property: material.color; from: #333333; to: #FF0000; 
								   startEvents: mouseenter; dur: 250; easing: linear"
        animation__leave="property: material.color; from: #FF0000; to: #333333; 
								   startEvents: mouseleave; dur: 250; easing: linear"
        event-set__position="_event: click;
			   						  animation.to: 0 3 -5;
			   						  animation.dur: 250"
        event-set__scale="_target: #blue; _event: click;
			   					   animation.to: 1 1 1;
			   					   animation.easing: easeOutExpo;
			   					   animation.dur: 1500"
      ></a-plane>
    </a-scene>
  );
}
