export default function Sandbox() {
  return (
    <a-scene background="color: #FFFFFF">
      <a-assets>
        <img id="vignette" src="/assets/img/vignette.png" />
      </a-assets>

      <a-entity
        movement-controls="speed: 0.15"
        event-set__start="_target: #dyn-fov-red; _event: trackpadtouchstart;
		 							animation.property: opacity;
		 							animation.to: 1;
			 						animation.dur: 300;
			 						animation.easing: easeOutQuad"
        event-set__end="_target: #dyn-fov-red; _event: trackpadtouchend;
		 		  				  animation.to: 0"
      >
        <a-entity progressive-controls>
          <a-camera>
            <a-image
              id="dyn-fov-red"
              src="#vignette"
              position="0 0 -0.3"
              opacity="0"
            ></a-image>
          </a-camera>
        </a-entity>
      </a-entity>

      <a-plane
        color="#DDDDDD"
        shader="flat"
        rotation="-90 0 0"
        scale="10 40 1"
      ></a-plane>

      <a-cylinder color="#FF7700" radius="0.1" position="1 0.5 -3"></a-cylinder>
      <a-cylinder color="#FF7700" radius="0.1" position="1 0.5 -6"></a-cylinder>
      <a-cylinder color="#FF7700" radius="0.1" position="1 0.5 -9"></a-cylinder>
      <a-cylinder
        color="#FF7700"
        radius="0.1"
        position="-1 0.5 -3"
      ></a-cylinder>
      <a-cylinder
        color="#FF7700"
        radius="0.1"
        position="-1 0.5 -6"
      ></a-cylinder>
      <a-cylinder
        color="#FF7700"
        radius="0.1"
        position="-1 0.5 -9"
      ></a-cylinder>
    </a-scene>
  );
}
