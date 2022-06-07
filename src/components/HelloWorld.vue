<script setup>
defineProps({
  msg: String,
});
</script>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getUsers() {
      try {
        const users = await axios.get("https://62950af263b5d108c199071e.mockapi.io/Usuarios");
        this.users = users.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <button @click="getUsers">Mostrar usuários</button>

  <div class="users" v-for="user in users" :key="user.id">
    <h2>{{ user.firstName + " " + user.lastName }}</h2>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
