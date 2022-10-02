> start : 2022-10-02

 Updating [Vue.js the complete guide from udemy]() by [@bonbopa](github.com/bonbonpa/vue3-udm-guide)

> Note: I haven't done the course but I found this resource a good place for quick lookup/reference and found such resource missing for vue3 so felt like creating it :)

## Section 1 : Getting Started
### Section 1-1 : Course Introduction
### Section 1-2 : Let's Create our First VueJS Application

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