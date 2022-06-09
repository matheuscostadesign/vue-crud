<script>
import HeaderFixed from "@/components/HeaderFixed.vue";

export default {
  name: "HomeView",
  components: {
    HeaderFixed,
  },
};
</script>

<template>
  <HeaderFixed msg="CRUD Vue.js" />

  <nav>
    <router-link to="/">Página Inicial</router-link> |

    <router-link to="/create">Cadastrar</router-link> |

    <router-link to="/read">Listar</router-link>
  </nav>

  <router-view></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #1b2530;
  color: #fff;
}
a {
  color: #42b983;
  font-weight: bold;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 24px;
}
</style>
