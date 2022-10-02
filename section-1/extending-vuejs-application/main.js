const app = Vue.createApp({
    data() {
        return {
            title: 'The Final Empire',
        }
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        }
    }
}).mount('#app')