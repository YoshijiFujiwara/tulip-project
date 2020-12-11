var t = 0;
var isIntersect = false;

AFRAME.registerComponent('collider-check', {
    dependencies: ['raycaster'],
    init: function () {
        this.el.addEventListener('raycaster-intersection', function () {
            isIntersect = true;
        });
        this.el.addEventListener('raycaster-intersection-cleared', function () {
            isIntersect = false;
        });
    }
});

function render() {
    t -= 0.03;
    requestAnimationFrame(render);
    movePlayer();
}
render();