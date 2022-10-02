const app = Vue.createApp({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment(step, $event) {
      this.count += step;
    }
  }
}).mount('#app')