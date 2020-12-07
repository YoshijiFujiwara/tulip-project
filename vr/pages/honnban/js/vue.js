// when life is settled, load up the fun stuff
document.addEventListener('DOMContentLoaded', function () {
  // eslint-disable-next-line no-undef
  new Vue({
    el: '#vue-root',
    data: {
      exhibits: [],
    },
    created() {
      // eslint-disable-next-line no-undef
      axios.get(`https://localhost:3001/api/exhibits`).then((res) => {
        const exhibits = res.data;
        this.exhibits = exhibits;

        console.log('exhibits', exhibits);
      });
    },
  });
});
