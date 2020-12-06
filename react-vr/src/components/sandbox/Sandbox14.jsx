export default function Sandbox() {
  return (
    <a-scene>
      <a-entity progressive-controls></a-entity>

      <a-box
        color="#AA0000"
        position="-1.5 0 -7"
        clickable
        event-set__start="_event: grab-start; _target: #green; material.color: #AA0000"
        event-set__end="_event: grab-end; _target: #green; material.color: #00AA00"
      ></a-box>

      <a-box
        id="green"
        color="#00AA00"
        position="-1.5 3 -7"
        grabbable
        event-set__start="_event: grab-start; _target: #blue; material.color: #00AA00"
        event-set__end="_event: grab-end; _target: #blue; material.color: #00AAFF"
      ></a-box>

      <a-box
        color="#FFAA00"
        position="1.5 3 -7"
        draggable
        event-set__drag="_event: drag-drop; _target: #blue; material.color: #FFAA00"
      ></a-box>

      <a-box id="blue" color="#00AAFF" position="1.5 0 -7" droppable></a-box>
    </a-scene>
  );
}
