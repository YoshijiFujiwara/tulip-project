export default function Sandbox() {
  return (
    <a-scene>
      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>

      <a-entity
        position="0 1.8 -1"
        scale="0.5 0.5 1"
        text="value: \nHi There!\nThis is a hoverable text.
			  			12345678901234567890\n12345678901234567890;
				  		color: #212121;
				  		align: center;
				  		wrapCount: 20;
				  		width: 1;
				  		font: https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/cabin/Cabin-Medium.json;
				  		shader: msdf"
        geometry="primitive: plane; width: auto; height: auto"
        material="color: #DDDDDD; shader: flat; visible: false"
        event-set__enter="_event: mouseenter;
									animation.property: text.color;
									animation.from: #212121;
									animation.to: #FF0000;
									animation.dur: 300"
        event-set__leave="_event: mouseleave;
									animation.property: text.color;
									animation.from: #FF0000;
									animation.to: #212121;
									animation.dur: 300"
      ></a-entity>

      <a-box color="#FFAA00" position="0 0.5 -4"></a-box>
    </a-scene>
  );
}