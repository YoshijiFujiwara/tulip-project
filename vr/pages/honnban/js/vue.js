// when life is settled, load up the fun stuff
document.addEventListener('DOMContentLoaded', function () {
  // eslint-disable-next-line no-undef
  new Vue({
    el: '#vue-root',
    data: {},
    created() {
      console.log('created!');
    },
  });
});
