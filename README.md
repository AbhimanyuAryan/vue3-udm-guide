> start : 2022-10-02

 Updating [Vue.js the complete guide from udemy]() by [@bonbopa](github.com/bonbonpa/vue3-udm-guide)

> Note: I haven't done the course but I found this resource a good place for quick lookup/reference and found such resource missing for vue3 so felt like creating it :)

## Section 1

### Setup VueJS Locally

> go jsfiddle : [demo](https://jsfiddle.net/abhi_jl/857jm2nf/2/)

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">
  <p>{{ title }}</p>
</div>

<script type="text/javascript">
  const app = Vue.createApp({
    data() {
      return {
          title: 'The Final Empire',
      }
    }
  }).mount('#app')
</script>
```

### Extending VueJS Application

> go jsfiddle : [demo](https://jsfiddle.net/abhi_jl/o76q5phg/5/)

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">
  <input type="text" v-on:input="changeTitle">
  <p>{{ title }}</p>
</div>

<script type="text/javascript">
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
</script>
```

### Attribute Binding

> go jsfiddle : [demo](https://jsfiddle.net/abhi_jl/82t09qyh/13/)

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">
  <input type="text" v-on:input="changeTitle">
  <p>{{ title }}</p>
  <a v-bind:href="link">open link</a>
  <img :class="" :alt="" :src="image">
</div>

<script type="text/javascript">
  const app = Vue.createApp({
    data() {
      return {
          title: 'The Final Empire',
          link: 'https://lmgtfy.app/?q=the+final+empire',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Median_Empire.jpg'
      }
    }
  }).mount('#app')
</script>
```


## Events


### Event Handling

> go jsfiddle : [demo](https://jsfiddle.net/abhi_jl/82t09qyh/14/)

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">

</div>

<script type="text/javascript">
  const app = Vue.createApp({
    data() {
      return {
          title: 'The Final Empire',
          link: 'https://lmgtfy.app/?q=the+final+empire',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Median_Empire.jpg'
      }
    }
  }).mount('#app')
</script>
```