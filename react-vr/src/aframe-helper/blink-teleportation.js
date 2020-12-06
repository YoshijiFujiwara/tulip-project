window.AFRAME.registerComponent('blink-teleportation', {
  schema: {
    pos: { type: 'vec3' },
    dur: { type: 'number', default: 300 },
    hide: { type: 'boolean', default: false },
  },

  init() {
    const el = this.el;
    const data = this.data;
    const camera = document.querySelector('a-camera');
    const cameraRig = document.querySelector('#cameraRig');
    const cursor = document.querySelector('a-cursor');
    const blinkTeleportationEl = document.querySelectorAll(
      '[blink-teleportation]'
    );

    // CREATE A TRANSPARENT BLACK IMAGE
    const blink = document.createElement('a-image');
    blink.setAttribute('material', {
      color: '#000000',
      opacity: 0,
    });

    // SET THE BLACK IMAGE POSITION AND APPEND IT AS CAMERA'S CHILD ENTITY
    blink.setAttribute('position', { x: 0, y: 0, z: -0.1 });
    camera.appendChild(blink);

    // ON CLICK, ANIMATE THE BLACK IMAGE (FADE-IN)
    el.addEventListener('click', function () {
      blink.setAttribute('animation', {
        property: 'material.opacity',
        from: 0,
        to: 1,
        dur: data.dur,
        easing: 'easeOutCubic',
      });

      // WHEN FADE-IN ANIMATION COMPLETES, MOVE THE CAMERA RIG TO DESTINATION
      setTimeout(function () {
        cameraRig.setAttribute('position', data.pos);

        // RESET VISIBLE AND CLASS VALUES FOR ALL THE BLINK-TELEPORTATION ENTITIES
        for (let i = 0; i < blinkTeleportationEl.length; i++) {
          blinkTeleportationEl[i].setAttribute('visible', 'true');
          blinkTeleportationEl[i].setAttribute('class', 'clickable');
        }

        // IF HIDE PROPERTY IS SET TO TRUE, HIDE THE BLINK-TELEPORTATION ENTITY
        if (data.hide === true) {
          el.setAttribute('visible', 'false');
        }

        // THEN MAKE ONLY THE SELECTED BLINK-TELEPORTATION ENTITY NOT-CLICKABLE
        // NOTE: not only is it possible to move these 2 lines of code (57 and 58) out of the "for" loop,
        //       but it would also be the best approach because you would reduce the performance overhead
        //       caused by setAttribute() being used on each increment.
        // PS:   Apologies for any confusion, guys! :-)
        el.setAttribute('class', 'not-clickable');
        cursor.components.raycaster.refreshObjects();

        // EMIT CUSTOM EVENT TO TRIGGER THE FADE-OUT ANIMATION
        el.emit('position-changed');
      }, data.dur);
    });

    // ON CUSTOM EVENT, ANIMATE THE BLACK IMAGE (FADE-OUT)
    el.addEventListener('position-changed', function () {
      blink.setAttribute('animation', {
        to: 0,
      });
    });
  },
});
