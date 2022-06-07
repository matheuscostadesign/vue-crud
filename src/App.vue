<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" width="120" />
  <HelloWorld msg="CRUD Vue.js" />
</template>

<style>
* {
  background-color: #1b2530;
  color: #f7f7f7;
}
body {
  display: grid;
  place-items: center;
  height: 100vh;
}
a {
  color: #42b983;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
