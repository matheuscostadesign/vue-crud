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
  <div class="usuarios" v-for="user in users" :key="user.id">
    <p><strong>Nome:</strong> {{ user.firstName + " " + user.lastName }}</p>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
button {
  background-color: #42b983;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: #1b2530;
  font-weight: bold;
  font-size: 14px;
  border-radius: 4px;
  margin-bottom: 1rem;
}
.usuarios {
  display: flex;
  align-items: center;
  justify-content: center;
}
.usuarios p {
  font-size: 1rem;
  white-space: nowrap;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  margin: 4px;
}
</style>
