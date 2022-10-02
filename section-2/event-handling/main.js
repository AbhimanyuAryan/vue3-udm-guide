const app = Vue.createApp({
  data() {
    return {
      title: 'The Final Empire'
    }
  },
  methods: {
    changeTitle() {
      this.title = 'The Hero of Ages'
    },
    changeRed() {
      this.$refs.ptag.style.color = 'red'
    },
    changeBlack() {
      this.$refs.ptag.style.color = 'black'
    }
  }
}).mount('#app')