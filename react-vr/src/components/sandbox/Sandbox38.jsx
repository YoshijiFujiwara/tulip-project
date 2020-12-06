export default function Sandbox() {
  return (
    <a-scene>
      <a-entity position="0 0 8">
        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
      </a-entity>

      <a-entity
        multiple-entities="w: 1; h: 0.75; d: 0.1;
                                     axis: x; dir: negative; gap: 0.25"
        position="3 0 0"
      ></a-entity>

      <a-entity
        multiple-entities="num: 2; w: 1; h: 0.75; d: 0.1;
                                     axis: y; dir: positive; gap: 0.25"
        position="0 1 0"
      ></a-entity>

      <a-entity
        multiple-entities="num: 10; w: 1; h: 0.75; d: 0.1;
                                     axis: z; dir: negative; gap: 0.4;
                                     colorDefault: #0077FF;"
        position="0 1 -0.5"
      ></a-entity>

      <a-entity
        multiple-entities="num: 10; w: 0.1; h: 0.75; d: 0.1;
                                     axis: x; dir: positive; gap: 0"
        position="-0.5 3 0"
      ></a-entity>

      <a-circle
        color="#DDDDDD"
        shader="flat"
        radius="2"
        rotation="-90 0 0"
      ></a-circle>
    </a-scene>
  );
}
