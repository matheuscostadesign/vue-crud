<script>
import HeaderFixed from "@/components/HeaderFixed.vue";
import LocaleChanger from "./components/LocaleChanger.vue";

export default {
  name: "HomeView",
  components: {
    HeaderFixed,
    LocaleChanger,
  },
};
</script>

<template>
  <HeaderFixed msg="CRUD Vue.js" />
  <LocaleChanger />
  <nav>
    <router-link to="/">{{ $t("pagina-inicial.link-home") }}</router-link> |

    <router-link to="/cadastrar">{{ $t("pagina-inicial.link-cadastro") }}</router-link> |

    <router-link to="/listar">{{ $t("pagina-inicial.link-listar") }}</router-link>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a {
  color: #42b983;
  font-weight: bold;
}
input {
  background-color: transparent;
  border: 2px solid #42b983;
  padding: 10px;
  margin-bottom: 16px;
  color: #f7f7f7;
  border-radius: 4px;
  font-size: 16px;
}
input:focus {
  background-color: transparent;
  border: 2px solid #b3e3cd;
  outline: none;
  box-shadow: none;
}
input::placeholder {
  color: #ccc;
}
nav {
  padding: 24px;
}
button {
  padding: 4px 8px;
  cursor: pointer;
  background-color: #42b983;
  border: none;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
}
</style>
