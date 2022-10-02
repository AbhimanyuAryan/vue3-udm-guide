const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        increase: function(step, $event) {
            this.counter += step;
        },
    }
}).mount('#app')