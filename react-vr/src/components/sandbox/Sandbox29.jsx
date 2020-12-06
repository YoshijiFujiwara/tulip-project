export default function Sandbox() {
  return (
    <a-scene background="color: #FFFFFF">
      <a-assets>
        <img id="footsteps" src="/assets/img/footsteps.png" />
        <img id="black" src="/assets/img/black.png" />
      </a-assets>

      <a-plane
        color="#DDDDDD"
        shader="flat"
        rotation="-90 0 0"
        scale="10 40 1"
        position="0 0 -12"
      ></a-plane>

      <a-curvedimage
        src="/assets/img/curved-image.jpg"
        position="-2 1.5 -24"
        scale="3 3 3"
        theta-length="90"
        theta-start="135"
        radius="0.707"
        height="0.833"
      ></a-curvedimage>
      <a-image
        src="#footsteps"
        position="-2 3.5 -24"
        checkpoint="offset: 0 -3.5 0"
        look-at="#cam-rig"
      ></a-image>

      <a-box color="#AA00AA" position="2 0.5 -24"></a-box>
      <a-image
        src="#footsteps"
        position="2 2.5 -24"
        checkpoint="offset: -1 -2.5 0"
        look-at="#cam-rig"
      ></a-image>

      <a-box color="#FF7700" position="-2 0.5 -8"></a-box>
      <a-image
        src="#footsteps"
        position="-2 2.5 -8"
        checkpoint="offset: 1 -2.5 0"
        look-at="#cam-rig"
      ></a-image>

      <a-box color="#00AA00" position="2 0.5 -16"></a-box>
      <a-image
        src="#footsteps"
        position="2 2.5 -16"
        checkpoint="offset: -1 -2.5 0"
        look-at="#cam-rig"
      ></a-image>

      <a-entity
        id="cam-rig"
        movement-controls="controls: checkpoint"
        checkpoint-controls="mode: animate; animateSpeed: 13.0"
        event-set__start="_target: #blink; _event: navigation-start;
				  					animation.property: opacity;
				  					animation.to: 1;
				  					animation.dur: 250;
				  					animation.easing: easeOutQuart"
        event-set__end="_target: #blink; _event: navigation-end;
				  				  animation.to: 0"
      >
        <a-entity progressive-controls>
          <a-camera>
            <a-image
              id="blink"
              src="#black"
              position="0 0 -0.3"
              opacity="0"
            ></a-image>
          </a-camera>
        </a-entity>
      </a-entity>
    </a-scene>
  );
}
