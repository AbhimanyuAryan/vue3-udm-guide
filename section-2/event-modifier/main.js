const app = Vue.createApp({
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
  }
}).mount('#app')