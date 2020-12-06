export default function Sandbox() {
  return (
    <a-scene>
      <a-assets></a-assets>

      <a-entity progressive-controls="objects: .UIbutton"></a-entity>

      <a-box
        id="screen"
        color="#212121"
        position="0 2.75 -9"
        scale="8 4 0.1"
        hoverable
        event-set__rescol="_event: click; color: #212121"
      ></a-box>

      <a-box
        color="#212121"
        position="-2.25 0 -9"
        scale="2 1 0.1"
        hoverable
        class="UIbutton"
        event-set__enter="_event: hover-start; color: #AA0000"
        event-set__leave="_event: hover-end; color: #212121"
        event-set__tarcol="_event: click; _target: #screen; color: #AA0000"
      ></a-box>
      <a-box
        color="#212121"
        position="0 0 -9"
        scale="2 1 0.1"
        hoverable
        class="UIbutton"
        event-set__enter="_event: hover-start; color: #FFAA00"
        event-set__leave="_event: hover-end; color: #212121"
        event-set__tarcol="_event: click; _target: #screen; color: #FFAA00"
      ></a-box>
      <a-box
        color="#212121"
        position="2.25 0 -9"
        scale="2 1 0.1"
        hoverable
        class="UIbutton"
        event-set__enter="_event: hover-start; color: #00AAFF"
        event-set__leave="_event: hover-end; color: #212121"
        event-set__tarcol="_event: click; _target: #screen; color: #00AAFF"
      ></a-box>

      <a-sky></a-sky>
    </a-scene>
  );
}
